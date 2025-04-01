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
    "3opJi3Qub7kkzULTy4HfcDuPMXEBLFAtvHZ92PEyeVF9u2M21cP4jXmESFQ9NKQdeRoPg9JmFiVwZnfMU6CTo7yh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zxBDKmVebqjx3gCV7VzSGFHsrjorJShttHPu96BixGxqpJay11FtbdZJVKF78tWVNSdCLwCiMmfpUUNTEt5P6Fj",
  "key1": "42fs7HfGKG7smj1bzGuodKLkvVy2sEdyuDYQTcDH8SHTW6RH3rzWubqR2xDLsKCuDvvK3qqSUqXofcW81Cy3FuVN",
  "key2": "3bkRgwysA7Nv4eLXWfFAZgT8651HHukyepbcXXJeKPDifyLNUdvDtD81r9YenfCq2DXsm3ozGgNmeBBbFZiCELCC",
  "key3": "LRDuJEpPsBRjkyUSy2om2R5RtbiMqoNzERoXvRhQS9PgkVjHYtZkFXc2XCzQRofrHHcX3ck37wiKjXYwaRLmh8o",
  "key4": "4qyL6k9qsaJzHcehD9WB5ipVa5iGbfR9QwxrdZZ4hez63oTmqHEorTBmsynic3C1hQVntWbip4V6Q6gib5FN85CZ",
  "key5": "4HVhjgtdsdBafVwcyAP1QLgre1Eo9xeh7ujNm2J63DiNExeZPmHs7r64dbkT865uEYDuUvD1KoNjcDbhWKp4MhPq",
  "key6": "4gNMeoxfPavckipyEMpKS8ogbgGo8YMsWdJqzLbkHSFf7EGvRj2YpZ8vjeykZonDcNUNWpCjtKAAYHmbkBNMiBcM",
  "key7": "gcUAbau2Wrjy68z8EERNWUaVjS5CMVaaGRGd9oxq4STBC3DoWGBCwtWQyajvBCvThF5mkQS3EdumQiraWz26cLz",
  "key8": "52bHs9gxUCivEvkVhiLKWfPMWJ4oiCM8grddtHYa9gGqTKuKMmptTsRYC41BKAGJaVeu9yGRc6phhEbtjEzXiTd1",
  "key9": "3AxNW6XmnwCB3bgTkXsAs3wC577P5rjb1arVfkuj9Nf7ZKu23DfvJ8GmnT5zugEgKLcbMR4FwKs41atVCQRJ6Zd2",
  "key10": "42E2ekeKmXU35Fys8qZAykaXbDRX66LSX78vGT2UsGvpzjJgR6YtiCkgB5eJaM6M8PAFqTVZyU5vFJD2vKyNFzkL",
  "key11": "5yjickPYF92fFhUjh8FSatarW8VRyzg7tgjBdH5EzoKMaC4YfrooBGtW9c6gpEEPM7YGJx8dKA5znQaNdfkT4x9N",
  "key12": "kqZagaDiX16hbRCH8Z1X6wjAx3yXpMcbNSy4V1YeAYD6Zn8nVSZHaPPyL8tAqwL8XU2wEaCGXxfq6dSv8mcAfvA",
  "key13": "4CytGCShHxiMse1Wf36vJk7b4x9Z6ZA7sFpbh2nkWzvfyMiwhznr4ewQnMkrqMT3shp8Jbi5kdV3YtkZfT11bxHB",
  "key14": "3jM9yB3Lr92urVt29k65ATE9URnSeVbcPm6eoT2phqoEL1svJfN4uNL7KiFwSRsgNCxb5Bii5K7aHvPLR4hvXcZP",
  "key15": "yz29n6nXFjpVYB1bQSvkui1Pq8cWtb9baGWixzDaos9inKWDAhTcT7bVGsvW7ixmjm6PBaJwQiXKPrfBkQ4Gy6q",
  "key16": "35ymCti76JshrhRBMLNv1TM7K7kYrGXqGJpgnr9ncH3Hao9jd4Dqh9L82SoYvoymx76Luieti33VDs699MxtLvgz",
  "key17": "5zGkPMDMqoSV24Sj9jYFN5Jwp7wWHPrVgAgmNQhEunYYaSyA59gyXKxf5XCy219rn1aACPZpR5szpn9RmU5Ro4RJ",
  "key18": "3cvPhktTEN3dkCCr19rVvgEvALsWSMddTEPLs34mLGwHMcuxxSj62WCrBwij8JC3NRBWWqJAvjyAP3nUHk5A87yR",
  "key19": "3cBJ17tYahStSCkaC6iv3hmtsCUXX6Msf4mEvNm4SihEZ9KRmU8wV9f84cEwbJQfqgp6x4Ss1KFErp3yNC8cDphd",
  "key20": "38nkiBJnVfuNKR8iv2vQ2DuhD1gAbH4SeWDBf855eT79ZhXg8irTF39UCYtEbhWxcCB5s3N2pf1F2v5XRCwMYjSA",
  "key21": "3SJuoi1ryXHVzSLjC2Jo6YN4v2m32qNWZQjY9yCp6CjtKXYBAhX35ysMoYFtgHki8xhv6brCEmW2LtxzvJCQd5pS",
  "key22": "31s6CSgpfyxx2CKU2iTJvmUGfQbj9FrLrD7jGAeiTQFo2sZckdEyp3gT1fhRMo7akaCEsV3ubdQ981pwbxkJdEfW",
  "key23": "4ygAZXkpMcLXo3wP8qSkH49DqyGoRrxcLguhPVcLVuCp5zgnQrQyUbaBjXD8XfeNTqnwHCV2WYVVKRRibuGXjt5m",
  "key24": "4ZqRjA9gDjNnEqc8Pavoco4Ghqdmfen2tANB33qLMT9NFYagyhyGBoT2ekYgX7SdwNKYR8gLdfUWPkGZt9yLdZou",
  "key25": "3M3swkSgUm1a49WXSTPv8UDNRi3kLVuPYiAUZpKjiNJy8ECxPgVmJ1EVndemozm28Wczr9SvT2H3nNcCh2o7aKyy",
  "key26": "GD4B2DQYYjHkUEmdkdqDWkjR1cSyPJ1ywMjHeEnTstRJsN2eEhFhz2Sa3jg3GmgBQSEjFjFf7i8vJ9UZYicdnWB",
  "key27": "4vZA9xx26EiEcSH9CYeNkoqoWLZJxiEtL9NymczSpjsaxFrQb7seQLVQQUwxU6uUL6U1hbn4LNHRXTQA2CM6Byde",
  "key28": "48W3m96cDWYFNNDJ21LyUwWNjM5J1FdNSAUJ9HkKTHYhwZwD6sBy4TaSDZdE8x2KNctApZNsawdazMfir8xUyN6j",
  "key29": "3hSDtUpWevWHUNVPvFiT7CnPaQW2vD6mH9F9DkYenr3i1tnmU8SjVjQPkJzebTUfFR1c5VsrMz8yu1tReBKp4Bta",
  "key30": "45pSAYMgVvTMEYo2gCTT7Mup3BsrkHXfLhDDZmyZ7An5LjgzQjaguCcr4kRD8rPoynHS9SdeBwszaULqu9V5F8NT",
  "key31": "iDbTE5TnfP5YfFCWR5SH1N5LCLu72Re65nsYPfiQXXxn5KG9ECnpijX4721D8db22W7WVJoVuieTtD9jkDv23qM",
  "key32": "2GeXnYWvBvzLLWHjWqcxWeWDcNqRDipfaQL8rymHo61cANXrV3FyJE4vKsZELcyCcnHw3WFxZtuRH78mLD8cxJo9",
  "key33": "5TmUrfiatvrvGYWvPYAzWcYgeG4SdaSxpZgn5P6nnTbyJfxPKKAkDbNywNNQ92VWZ1hqP4vHz2p8B79FtZ3xd6UA",
  "key34": "3znkjTsLdT6NxAsi4kXQY2q5Z1xSyDiu4aocwftyZwtJpNoqASLZ7E7YbvuFhFyXPwfY3NPm9iVGQq6iVgaqeeLM",
  "key35": "2v5nVVgVpsDBKSjBE4Z4DV8hTkwCBWQBE8kXYmgoyr4cTPN8M5FroMwK8wb2MJMSTticTZxaHvRbCjSyuSY3cVKw",
  "key36": "4Gyqq5YYA8e8JTV1PZPN7pgnJFk5L1vZGZKbW6xfqXoQZiWJbDyDvxQWBdXDAzeoqk2k7MT2aBCAgZkRQPEmkG86"
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
