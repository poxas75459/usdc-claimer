/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3frqS8hiHos3N2CT64QqMoRZkyR2fV9CXmEpRFSgXe7wofi8bxxWyfsDd7D8KqAcQgVaQGVVoRWvsJ152fJBugYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Y7fsqQPctdYDWDY5Rk13iPSk5kEYg8piUYbMqAnDms5ujQ4jYbo9xsa6ywktjnSD73iun6ghbz4A4h1cvVA7dM",
  "key1": "3ovVBVcwWUKK3tZq5iCiMpBeELPUmbCGW5TqxgxHDgvvWuYuE9qXtwnoEH6oSWndDoMbty4C67onGcG13q5r2prC",
  "key2": "ALtx6U7yTieeta8jyemmdtC8Hu6xB4CyqNdgz3BJS6iTWEy5ZKTuLUPURbhighRdRvpn6KR5jSXkXP1pp73i3MV",
  "key3": "5SqU5ezj5CuxPPtP9ajgyyGFeE3RpDAeFGSdu44w4AQs3iwT7DMrgJVEuMU1jJ39RZBwb2UjdXeBCVopMCioN9PK",
  "key4": "5Ej78vHZsPAru4XETC67ZdA4mVXYTdPNFbpy3waDTfPtv1eTEPXHwUoQoTsRHVXD3VbASdNsaXZacxmPkticZnws",
  "key5": "4vEGtc3ZeDSy7vHFxTYPnAZP4XfS5bJ33ncRCDcBgW6YtgMegxaEfffjkd1sxVAhPtk9ZovZs5prq67DueTg6Xy1",
  "key6": "5zAAXxuQD6kRJbmddVyLaqintrkfTeJnyLB7H46of1nfHnG5AwjrER5hvYdADPc9qTRvFqknAnT5YnaQfsJjCy1v",
  "key7": "4oJ9uezXjcVBMuBNoE1xCrtYhoxaCHWAFm5JN1iUv3XFW26YCvYHGoT78oV57KQgpZsvrAvcbUmBZcQ72XTkFcmT",
  "key8": "5La2FN2xacKKnYazH1c67z8e531g4LpQcQQy1Qo5et7N528nW8MUu61r63oEn12Bw1RbJM4g893KSa363aH31naT",
  "key9": "554YRfgmzz4tnm3NDqcHwGDFhQbF8rWMYrJHWb7ctp86w7owBKPq9D27whtBjt4Q7FaJdukrG5Fj4wdexs5toQrA",
  "key10": "55tvmsRZYNqevReyqrL98yaBTAte5BrgC6tKtsh4qxGLEus2AzAozGbEoikoZtpwafjJKwrbdoGAhsRwLnDWoqP1",
  "key11": "2nbupQU694BvpqrJsicXVC6eKixiYTX5vCCxDHTC1WqJsHokqM6WdpCkqjDga2S9gBXYdLVLuGD7ffYggWdi4mZb",
  "key12": "5QC2asJpekSnpYK9EoLW57Q3sGmusg1nzAKGqZqQuZsZ4F1mcv82y3duizhBamt8NZZwspaTGe7B2LEdtTNa6qjM",
  "key13": "2uHM49VsnpfixhkVw6kPKrg6i4i1FgBzLhLtBTQBCufgiJaGuNWjJTU2UkBW9oTu7zjJAqbbhAVUWj2jTeCnXERS",
  "key14": "2muQTyuKWJ9dBeNEm2HAWhcgDn11UEstQDjv9TNWtaKHFUYZNFMNDLY3Tc3Kg7Z6Y2ekLgwZ8HbLrATCWbXXyJNK",
  "key15": "3cEU9g6FUCqmgqBjBGWERU3BdhUAR89CVKyJ1qHXQEXZvP1eo9S714fDgH8ZnuxVNXRsEVPyHDqhR5aZccts8LRf",
  "key16": "4pkZMouWLWfaWFV7DGwJsEF4GN5sw6wGrhCeFuRwmQaJFV5k8szTzcMxpacqeL2ju8YaNxrD2e5LQoUJubQRUyVN",
  "key17": "4keFdZCqFhVhqHAyWx8Ub6zUDqiyZikcrRrTxPME5GYoi81sDrwhDout6A48G6VDRmZPsq4zZ4LfBTXivNsmt3qf",
  "key18": "5RV2q5EdAtsgVU1y4XDdk3hKXBphzVvz6inFRrd5hDmWTHm79nV9dccZeXHizkD2Asbxo7q9mJmPTkTsDEKT77VH",
  "key19": "5wE5sS8yqKMfHwqLXBX4xRAeGAed5owEi2sXRuMuBS4zLpAJ9Y9dSqhomeAy4Sy5QkfXWadvjLa9HfW6fdjjEiYE",
  "key20": "4HM1p4nLo34BwdaCNb2N1vhNexafzi8mrTn4Mu4r9eoqoXJjaoTAUnJGMMQw4qAN1fmJMoCHn6DhUtearYdzAGeF",
  "key21": "5RPsWWcF1hRwrXhdBET9KoPfeYtdNvBNn6i5xbqDd6kdS743JdVGgqBuEBDHADtEbTraRF7etfXZM2pzUwqnrVZw",
  "key22": "3s3g6yfqNoe6umi64NXBMdEym2jcRUAqv9QGfeRogRBj18krEyjCrPinrQkRen4JarfQsmN6r7jori4zw9d2jUus",
  "key23": "26DrDDPLZy8xY3EUERmBjFaT9Au9aZm1EhUjnzfiVuWds15UiExwDhC6aMg1tLfW4WutxhJZc2yPB17SBsikidxS",
  "key24": "57FN5eCboeYadusdsepqkcrmCnntdy5ABxa4J2hVg1Ha4AnaDn9w1QrMRgSTXj8o9xkjTWArCTbUEkn6c24cfSAx",
  "key25": "Ett9656z3DHXspzppeQ7E4y96woZVgoeco9HbCZ31y5kCZ9brHZHHX7x754PmUgoA2bbCdsiUrRjVSKcsibahC3",
  "key26": "5Efwqt788ebPGos5zdGFTV4tEpjDmmQNtKdUGFkVpDLqfETUrYxH8MUZixDUs3UNyyUmqDd6i7kiLsHDd4RKTxkA",
  "key27": "2AayueDVNvVgX3mJ1UjfrqTF8D7BbozdV6nQDFKrm9MyCovx6s4bs4J7c2iLEqd3uPP5AMvki2Q3zA3eveWQR8ib",
  "key28": "7YfrgJDpqQz4j6gqHsRWE8y8sN3ienXApffpbaG7AFWRzEfFE5WhpPfADJU52vGoVhiSUL5eWZEFsG2AcKSLjqo",
  "key29": "4gGqfit8QnVMgMiJfd6W5UkotsCyX2SYezjfJcjzvzdrqzybAm5Ff48hFfMqAoPvFwnXjqihggkvB3J5RhA3FPBw",
  "key30": "2VtG9sJRuSZjxBXdmhN2KDkU8cpqTwnGoqpZ2gc6gu7pxVLGX2T8Sgo7q2xG9c7YqE6KEodaTFYvxZndi1KL4g7h",
  "key31": "4UQqgaZNhvLbR3MXiHSHRFnJ6XUgwjDzr7SsCbmEYFagMu6Bc49msocDH3LqRKXQoUPVcCtEey4t8fDGZEEDHxL8",
  "key32": "4GYoTT4Tek1a9Nwx9xR5mqPESNhQTXvGTaaw9ac6sdugL8ZvT8Wrgh936pND1eb1sngUtS9t9o846zcyN3nnT8FX",
  "key33": "57zKKZptXzhTv6o8TXVLiYcZhAGYzf1gHKtJVFbZ7VLMmwyHxr3VALBRLdP5636VeFZwFwZ9iSRHmh7HD85LSkUF",
  "key34": "5A7vV4iczbfEXQu22rrUSujs1a3zP2bXdGZCr16zU4ydtXfcaQqGsUzE9DNq9vg4pE2Mj3NDmnuGk4b365gmqv7b",
  "key35": "5hsBEehc525kGdN5VuYgAnj6PG4xbtRSU7ED5LQifQSj9sbxxJGoS9kHh3cPMFzLq1PXDm49y7XmgnmFvhMaubVn",
  "key36": "2EQGzHfrF1dyMcdyPBtyNwvA9AJqujgTwZj2nUBGyqKYFH4CWz3aBrrDjHx4ab4SRoVUEMPgnqJmN4FhxVob2m46",
  "key37": "2Luemh8uVtEggeJ3nSsiDJ7PojUWwidYC41Cx4JxHsiw9CYKuZxt5TAkUnTifsRBa6YdUP4D1LnrKjVUHwtdcxAR",
  "key38": "46sUNWKCW9z6JoyAazRxx5XapGGPQDtNqz9Na3fD2Ke3khdizv9UK7s5JQdcW4EqdRzar6JPhe818MxMFopufknV"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
