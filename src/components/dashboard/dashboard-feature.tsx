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
    "5QZvxkLBEBkeeqwrcmX5DMRrLCEvUy6imS5zWJnfY9XyDpivPi1qUtHv1Fpdvjg6RgLTVpjwcYaemCmQVkAGGgif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tgmSWFwHx1ZHR8ximeVpvE7rKj6FncckgBsfKcT4gbT88tEn2R8GAzwCy3S7qzTRNuggbrQBK6Bs8kMPZycjPuL",
  "key1": "48KQSxUqqZCe9LEpXSBaeAkein3A1tGazR5gvihUzP4AYTxB4CNW6GbYXw1dLP34C49HGzmKrS3pLcADves2yRJ9",
  "key2": "3qnRqDrVYtazYiQCroQYxXBMXDkC1Qtza2TYZCTGUf9nfpSrCoGXh5mzdVJWBgU11suzL4kqW642CLq3q9UoAMvf",
  "key3": "3igUVFaarvhUmBF6RjWicBH9gJ2Q7FYXVfMJYS9QB81zitnaFUrhU8zqZ6pMWPVkVv64PD2CAGGoEXL1tT6UPMq9",
  "key4": "5jycTB7yUHQdkdchbyN3kza9Qq7fQmFC4WjoLeTV7jbqHeGL2S57RQifEsHiNUxEJLxVvnwQpqJCCJE5vBq2Ju67",
  "key5": "3E2TzuBR3xJpnwTRDFcQj6fTckJnURAHyjzDCojmdAsTaSsMKu8SHZbjUcUAijnLV3UezWAUSo1RqKK3mukQWZya",
  "key6": "2ZzVhm6V1fzV8S3KXryeDCyeRz1JHEGRJsg7GMQnBoqMDGALdWbts6UGqzN33AKdZXsjm5T1QAzrY1cYwbXUZQsW",
  "key7": "5RHfKX8tMznAjwpaQYQCkKgV5uNfk2wbvz44RhhuM4j8BHqvjXY8k9Erbw8D2YyojSLj6TYFcxkEXtFVYy4GNvND",
  "key8": "3e6Q5tPXec5FaiUYjH7Ns5BAHXEAUxhwRpcm61o6RrYJaPRpoZ4XMCtBRXjdcnqzRUQRmeGWBZTpvxze2Kr8LBe8",
  "key9": "52VTQd6V38VeJAcyrf3stCJ8E8AwKfgXrM7N3S6FuwtzUgxR5B19u5m5s919Npd4MSMX85PYf3Y67M6nZvB8pYQ9",
  "key10": "2Ajg1ZWDrw4foBM1BaQaeqW2bEatJxzHtirFsyRXkqypq6D9nkUimyMhP5EsrLXi8ZNJNLztsgNAJvJdVxVKsrqL",
  "key11": "oMVcgQymPMbcpTf3tUsARpSY9icG8YVi5TLj7RqrmJP2jG4kdLLK8zWYk44vR7XPX8GfuuzSfTxGiZRfWMBdx8r",
  "key12": "59rYWeQCuZZXFeK6nuB219jevgDPb6J5qATiJardnaXxnSAFUzXUjFcQWDHN1qfb7VivchbgBVHyXpLiPuprKZ4N",
  "key13": "2mBur9Nrh5zvbc9UX9tSnjE27v6N1HfjE9zqhJEKgWGPeR9qtsBMVkmkbDrXLcdpxFGBiBt7VobuRqGVLZiSa9QE",
  "key14": "55k4wEQ34hKoe2sb3tTBfDaTRiajmkFyGiNkzQ7kAJKqPGN8pHCJvwgTiC5iv9aaxeioawmAojiTdimzQ1csHAkZ",
  "key15": "3Do97wKz9Uup4GgLAgigRbkgF3u1marumKP8psnfoyKF7P8nbKWbWmcs1iRx7Yg4ZT6xdQe84V13nJD9NzNKZzGV",
  "key16": "3n2p6o12XYMmEcrBzaGiGXT2JwwxeUu53a7jfPsVtyjuEPUeW7ZMHTZXGatkyLH18qnYdZFCHCMDE81kHSpNeWv7",
  "key17": "3zyC8Ep5HqaapzCWq8zAAikxnUv7VHvwA54bQLtwSite3iXzuuU2P4qbqWAR1meacHmwTSS4LgFuVpooaQ5tLzjU",
  "key18": "3ToMYGPKLAoFVnqeYE2ugMTwdLqmgWx6KVdzEkacwsX394Kd52jVjznQ27m8gj9sUXF43TVfCBT1qP3SkPyhDxtT",
  "key19": "2BZJbRLZJUFVWJPKX6TeuBjSiuKU5CUedrCwFvZA1MRLwZSSrdY7tnYWQRwgkb5gxE5AtazptWffE8YVeWz85e5U",
  "key20": "3BSLBvS2w7sQvxVbCjXrQ75qWAk4WYenVAY3BpDarNSvymqi7mgh5BCXePaj2LUqy2chVKfdhtv2mE24hdyxtU2T",
  "key21": "4D1ZqjbYmkLsZuGLMnkUeyr24KtL9d3ehEhUUhXNNbaN9hwZoVhpxT6N2cUX5Pp8wAnmGU1nEpcTWuLDczcAFymn",
  "key22": "37ggkdMMBnKnWDbWuYxVMVKKt5JkJ71dptYJJ1CfBWLb5JuVLWKs32NX9khpmGvfppvZ2nW3sD2DwhjPgPwC7J9R",
  "key23": "J8ZYQnBbegJgG3BX9J5KBgXApmPhibBJq3MbdpMzSCGoSAp1MRqcigdrKmWUAPMqtteRFvvmr7BoxBNAL4vmCq6",
  "key24": "2nbrTFmumdPXjoYqgqPTG6KebF2TyuMqV7zV4DSywUy1A7tpSpT8Bamwd19tVUjRqbpfdyzYmfan5P86S4mwswH6",
  "key25": "YJushfgDFqfDynLdkMuHWR3bR85ynoKwkaR2jUyvGYtokqwfMsAGTWiPXNatHwcwWifCU6HreRFzC3wffMCeTNG",
  "key26": "4F9itGNLydN1bLUNBp3XvBV7zPwcbAGFyBVd7nnpxKEFmzcNJ4QK9dxsAKb3dqo8d4DbmoBqKNPLAaf69BJ8Y8rW",
  "key27": "4NQLjAFzSt5825RbKqts2nuQVkferyUsdxxNWhr6v1bnJBYE8BhttvVFPbb5xf9ddNSFK8qBSJvBf28Cyr9C5Rdm",
  "key28": "5KgnW5nuSUatji1QDrmEz4SaW5WuKa7FuiHK4hRTXPW9Ez22jWYXz41jDZfx1Yy4iuWNfFciPVsNHcA4GSgv4JBu",
  "key29": "5uAvyAmfEtfBSY3FmS5YL1Z3WzWM5pCm5QRJv6WhCEiF6eNcWZTNvgXYyn4ysDVZfXVv5PNnPFJLspVxzCgumwo8",
  "key30": "2VNnWpEnzfcqugqc5NE91m8hT8m1x8RfbK2rrxP7TQLiYtURNSdM85JGbxQkRKE1rbGjiFKpD8rrMDvFisL7zwQc",
  "key31": "5k9k2k22ngcCNtNbyxcxJS8GjJr1AXWvoC2zHHegNBKPBDYpjwy45RN6TnRV8bPwfwxadC7Df2Vdx9GpaqBrfCNg",
  "key32": "3CTeuE9yaPwH4WoHzrVpjYRCznZQffqUQGuJpVNNxL67oxqTwBFxcbg9NvdtiRnnymsAmQc6xkXVSJdUNTcN4q1S",
  "key33": "WsBs8hEuNQsSACvYvH9KNHDs4oWyso7Yxa6nBouucjDyAwvJG2AxPijaABRJVvrwu21X1Dk4xepA326khsVL9cn",
  "key34": "46iYWJdwgKZaG4Adhux6MboV5T6Dr9Qx9LSdraNuFkfjDzGMkQP5q62KorRc9LL7pyrtEcsSynU4VjDco7Z73fU4",
  "key35": "GUenMB99c6ftbN6WAucqVsWQwTV4JjH7x9XToBTtkuVr27UEcL1dUAvZvN7su7uveS9EBzFvhgjWBKHwncu8p1a",
  "key36": "34dPsuKwVdPbfegzJZUTGLKkBNnHcyfJB35izE2Q7pbJDEBJXvta3mcFVLKpyUt4EC1GJSctvJiS2WqBDuWtFLrC"
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
