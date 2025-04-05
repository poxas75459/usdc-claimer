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
    "4EMRMd2AGFKWH1mkVSkxSprEg8LSD2gv385pB4q2ucxF8bNPxoRFieBhW1zagsDYE4RmxEqbD4AZoinqfevTkuEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j8Qqt2s6CLMDwrCqB1zkRmh84M45vjPWCryHwaqfQqhi1fsq12jGNZn5uz7TovJHAjBssuKjapDM5CwBm6ECQNo",
  "key1": "21v7JmG6f8yGoUe4PigJkcR9YeYApw9LdVkpobq2G66dsnH6x3tCCRvbuBATYrn7f2onGgJGsVYKeRcCQobyFwb9",
  "key2": "2RhCzb7jwULHKUMZthDaiR2rRMZoeVQY4w8qsosug7Qt6C2r79JRFRVgDNm1rkPLWUv8KYDX2TUpHbcpZutYsfeF",
  "key3": "5mjL3wjBu6Af8q3wDKQNQ593MPoKCuRLsKMYEepaPacFUav3gX7F4mJ6rE5tmLEoSgAXdfZWZ687RHF6YiFJyW5h",
  "key4": "E693k7qLkwFiDis9141GRHoYUKtdiuneSxwAzcA957WNTH1XMMdiQvKnNdb8rEjSNpSBh6tCFGmsAFDAbACbSDD",
  "key5": "noBdigMJpyx8ooLFJSqx6gor7w65vpQwvB3JwtrfyrCuyB9vHKww6Uoe41x3bTWNDUfrFVtiTtRuctKksCS7HXG",
  "key6": "5PVYpXgFsFWrFi38i1EzqaBBA6TT867AwVwx5ek7eXf6mTfjFS2zZQikP3P9zy5se5kZJ5L8qrXcV4okvCsRyJTy",
  "key7": "39ETH6xr4sx8znsKDH2kMno4UMgiiV8DBqQWBqHjo29y1Ukgcu87hfaG2h8bcpsWfF1SAKnHv15C1dY3tYF9EtRP",
  "key8": "2rJ3HLaXLeiXwUgYCSiCggDEjfbBxN7iJLsmotTa5nvowb1ey6Tc9it7qKCPErRBFSQcigpqSQAdqJLWpKtkLdNZ",
  "key9": "3hn9ECrZ97bLEZMiqAb7XAj3cnCszCCWb5uuB5NNp3DJUFXsZpJRD7f6c7yCoE546qcyjwPqKgig5NKbwW5v4Nfx",
  "key10": "4K1Y2txrTamSNNEHBVSFw4N3nddR6j44YaPMx2ACLApPqLp4jxNz3t23TGFxfrsAwU2Az46Lo19Q5TME85JFeZfE",
  "key11": "WeBZGNUX1N8ryMcpqtziuvYbjMqz9UkFjQB5yVRVwbhXJEqSmfa67e8ZC8RpobAyp59q77NcQdhjnXAY1uQG2gi",
  "key12": "4PS7iLcqKUNGQFHwjPVCLL3ZHgVXfeym2eFbimXB6nZ7ZFFKb4BzKmctzhnvf4CNdcx2yBTJQHoL9joNY7VFmdzT",
  "key13": "4qhGGcucccxPPLAPEr5YLJLj23zksUTnCxYPHCybZiAm8CXXqULGE3CMhv1vztgYaMbvuojdyMXTyttuYJVt77rZ",
  "key14": "3rs7RTE9xxo5TSNh6pg5NTrbJdhUL3UaXYbToYgnRtWmpHm9S4RfkhEPSf3mtQ1SSnyKJELSy2eYo5tX6SqvVv6e",
  "key15": "4ttQSqjGhSumrrNQHZjpAwKoSZ2vQpnTCc1UtrBvjo93N8tr313q2hGcWtRWLuCPRYxn4CWsMpx1xn9dExdF9J6R",
  "key16": "kFLSTCksSx6ETY2Tvxin7ppQ7zWn7wEujyNyP4PAmrumRNhMqp2mY4L94pkxQN2cKyyR8VigXGz2woP7bkuF4gq",
  "key17": "4Z5J2Kmc5FaXc66Y5UdrkdFr5dFW2SapCsNk5qbXYgpWzAZJFMKGtQUof6yjA9phN2QptDdRan9saycmEniE2n4X",
  "key18": "39Mwt3gLNo6KEYdzLpxmAdimmQujjzxP7cJnxWU6Q5xDxvpcqVP233kPfcv4WEYagGeWkijYd95jcZeUhK32J4mu",
  "key19": "5mfuGvthuqgH2z8K6F2RhnhVFkWW6h4RfBSj2nYtcVhpwsVUdvgw6jJ6rpsZogzb9oLpqiANm37EZLMyuHYeMsk7",
  "key20": "5NfuMjnHoYpp9kccGUbmsXhbHHSCaGB79qJXdnXnL5VgotaEdcvRsEbRUhBuw8EDDnx2bSPExUP3RHSuw3JYJdwj",
  "key21": "64Z7u4TxuK2D9N9JfYoEi9EvxWVvaEq4x5ytX9eYUG4Y5k35rMTD3wTQpuuKBenGD5M1vCDKETKySAe2HRoQjseu",
  "key22": "3XxosUFbXFWREC5i14q8Z7PiK2aLyShoejsNRzZHX9YH9BSV86boX7CHRkm34NxwV3pJn6DhcGuRKyrZuFc7oCGg",
  "key23": "44HVYsntsZsmyk78LNASsMfMjtuPcDqTHvH3u1kk2zX9n1UQBBRhfZWKA2F8LWmrzLUjdbThLj92mhr2RvX8k39r",
  "key24": "2Vkhtp3d6Yji9DRy9Z6vtw6gkJRUXLPhk7Wn46jQH4wGWtmji74HRYfBtcHwEViomDKRw1oawryV33xQ5puKW1JG",
  "key25": "62JLgyQUT285jrU1LAqv2can2rchCEusGSxrzsfxRXftwGcd7MNXuruyBRqzuxjZGHaW3dg1P7A1mvHcaT6VhoAZ",
  "key26": "24hRqSMAcVY1h4WhA1PLmYdmeSiQYqx5VVAtpscGaE63f9V1Ndtunkmv1MMyytUn4ocXpJHB5Bk3t63JC2fTNu5z",
  "key27": "yggcCRcaguCarQ7Q5HJ5d3dSvgmT3drWDvjjoN3tEivwdQejwmGEmnPsc4jLbrA6PLHrkAEEGebPH7WJfwfrzzd",
  "key28": "2P4NdDbg6W8hWXKYaQZAWQNS7zJYrM6nvVZpLzBi6LYNy186K6mZnf5YWoS3prYTPsewKSpJTe8s68x5hcdfK5xB",
  "key29": "2AUSridNtCnozLpaaFdfEqCN9ajFWTdui81WBSN1wYHbZEsAcBTYmXEzPvFPYw3Xeq11KoVFQ8Wg1GWNa4hbHfJY",
  "key30": "33D1mEhTund5MStE45bFi7LVKqJjh4AFgXLHE4jHmf3DBpYsqs1jpPqGTk7uVdURYAgXdGuRShxeeDee9wJJp8Me",
  "key31": "5YR9rYXViQSHNNW2vmTPoxCZw1Rf3dfL7t67BEPZ5SRzmRFWn88gAduRzp7s1htEjgzvw7uu23asajcwGhGTcBhu",
  "key32": "eNr8b5xpFN5HzoHf37ghpbH94YdxHiVdXvkYVAVbu2ugME8RGXNaQ1XZUuzHj2CXYJNsdTDCwvwSdjen7dHaBAz",
  "key33": "4vsytitDTwEpg6cFkFSzmztigbgjswqq2btRQmYYeSmYKh3JNQ9aWsrw1cUpobhw2v6MaeGYybYNNBsJx7Z91tGv",
  "key34": "2KAjQrVAhZJ3gbLHBTYUGNkFugDkgRTXzK4X7YpZk8wat5Bp1dT3g5QY84hZV8WePBG9MpnSXSyPM3KRo4A1Gwzb",
  "key35": "4JNDJ2WNG7w5fD7CsdwGP2GwpKR54Hg7uz7HWfVeSSYjLTwBQHBGkfb9HDStGfniRnjzkYyYZsg7G1HfrDwWRjPR",
  "key36": "5SHYqJRnAM9LaJ1ray34AYRybQdP2fZrnDYMSdsywwTLotJ9FSEgL89fbbHQzRCfwy5Kk2hDmqGmJTQRbyuTqAS",
  "key37": "2wi1z3NrnuNpE6uT23yV2LzK7JLWY8Y8SNT5PZQpsY9goz7fxfr8avdt4b8UwJ5RNzNuxgynxzTs5j6TYxbQYYbG",
  "key38": "58EJMyfNPQEbQULW2uJW9itdbZLkcCMEXiUX2Fkz5LgFrUZheAb3gFUVEUJgCqBj9sejXMDm3dppfAn7basABM6z",
  "key39": "fmQEqAKAc8ULKRECdbJJ7yDXFecwHD1dc4aLs2VLd8qhYYn2zZ8FMYBb4MkEFUzEfbzVpV5LTfdR163sJL4MRsq",
  "key40": "4tGTfGpE32dJn242mfBmNERoB5tbAp6qnt2Xx25pTvAXArPPWqi6GKuLx4PGA9tjukkRGXWDHsskWUhUTxRgjbhp",
  "key41": "2Cepc9o1c6zLbjwS2b7ZXFmEb9KC4phHPaEkLcvPzeyBxt9LWiWHgd4TZ8Bz84GRLbfU8U99FHSmHzrtkbR9jvxj",
  "key42": "badEQg88dNcpBt3VfXdbF7swMu721oWkHBEFRWadnNJwjFhQnA43zfb9JNLuhhoX5zh8JpgoYcg5bN3K9K68ZMS",
  "key43": "4rm72YwvSqo5vZrAcoWPjwGcCrDJzX4m8ePwhETCyqPqH7mqHTngp9QdbY6ur2VUHo3DobkWBQ3SYeVA2wC2Vsqi",
  "key44": "57YywugeJCCWRChraSgWfQgJaE9BTx6QRkskeACBTTu8ze153znUWwdHhxNBdWuCWyfuWLC1F1yMGyY3TLGa5jKE",
  "key45": "3EgcbkcEUGhAYMsnGevpwGCCvgnoZdjKFbpVsoj2xUfcpm9PbCkAt6mj299ueqEMVJrWPmeAZhvBhNrM2y4MAnh",
  "key46": "3NhtAzQCJU2TdrNNqupKbtppm5CNLm1Jyxjk7DftBw8Fq2QP7o7VcXdH1RGZXouDwee2RFG8D7t4XbpFKctMWohp"
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
