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
    "GZcmf2Va1iR6y5G8Mpa9cXA1NnnPTAv8rmfNtosf6iTHyoZgDzkn62nN3CSrdEYedFCLz3qcY2GbCtboP687xps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PykpoXv8TJFWZb6bkxVVBeAuFhHLrxJSG1e9heBgE9895YrWYn2c9cWenoGBePKunUyStJjbUvuFYTtsr4xXKoK",
  "key1": "5icVx7gjBVaYshavsXZDNdeKGqrsng61CPPYQqSv1P5CiQqMXvMjypbTYCsKMghRE3Q3DGoM8NindqVuMdvDL17F",
  "key2": "3Hyh7rY7hWMN1ffkDDdreqMhxcX36DdMM3Z6aNw3LRjzB9BKoVxS1gujvMcVwaBkDSdZ3y5TUrRCMg35tcxyoKHQ",
  "key3": "4WgKs7pgHC3sw6sTc1zP9QLquCsXBD5PE7tTz3n8EbhUTF7D1jxhL5ckUGoPUq85ZHQBm1jV9apwjLDPqY5bm3eC",
  "key4": "2UuJUhV2yGuDcA3CzppWyqMdRfnf7xfqBdSkUEWjS6tUPisHW4YVgPVd39xqNGMfip5eyQVFS8mkHxTPBVR83tdX",
  "key5": "aeYTjMig67J5j1oJu2THsTDCKqEdFQpC1uwUwgNWBVtCyxEdNJouqLEXNw6sCwn97AMx3L4VGp5ZcEx15mdeb1X",
  "key6": "oZwkheAaYHSLTxcxCDn4Knfk928UYBwh57WFFHJeBdoE8SwiVkNWQHAmWUTvc2pBcBKUeYmgzxxbVpvi6HF2hEH",
  "key7": "5YvB5WzV3RpSS2ToN8nmJDtwYnK2nNQ6cSQTuM3wtwp6UQFmreFuP1MQ2Eq1pUQxJwr1Yp65CVz54q9HGW8s2P5b",
  "key8": "4FuojQ4nZxCRkKXsndVUNbhb2vomuVyugyLjJUg1K6usFv2WS39WCuatuazyvv6ScC66M2sAhPDw6rCfQo9FW1oe",
  "key9": "GDvZ1NwxYyUUZ4n1vnofmBQmjnjnuMEJGr3QfxH779bMvsDKDVBJrskHESG1Wmz3PB693CRLQiDnYugt4LH4bCt",
  "key10": "5zMM1GAeYu2ZM2hWPQbHxeJkKh1Yqrk3VctCkYSopaVR3YQPSYYVGZP1cGzhXTE3TPDFvCwqQVau7UqFdEwr3kog",
  "key11": "5kxFszYp67NTPoK2gRd9ogmY6LXXWQrLBvHPmhGXSD29B3RDZdhabSsAoTsWhBhXSMjjQvJg9p8HnTS6He6K9dEV",
  "key12": "4kp6TwXs8GXXPXQgeT6xMeAsS5AxzRnffZKeniVGyJRVBPVPSmPG69za2VnXMad2QnbmB4vqtrJZW8nTRofAW7k7",
  "key13": "2jz1efBg48QmAiZr9E6MrAUKTGHpQXTYFv3WmZjHAbkut8zg4jZQrsrtoPDLFGHhhCbu6s23ZZgLExz41skCmzWH",
  "key14": "28uDewhDgCWBg5P2CBrup3iKbze161cHb2LkGMuXxubWUGCxNsToFGpc7D9jyW5xARk7Yf59PgeevZ9XXnnvDZUZ",
  "key15": "SrZb6T6JUcXbs2t4rX8Lc2mzXdovpT9KmGFSj2h3BdtH7S3nMhzVyqpNRbqedF4kkDS4pf6qc3CkN9qBenuzEiJ",
  "key16": "46tFKXEGyLZe2dVv2DZ8J5B67xVQCb13KrrwWSeQdGdx4mAkY8PCE4XzWfwdzENorKd9GLtr3ZBhMB7hknR1TJ8J",
  "key17": "4VC2quhgbocscYRqrEeCgVUSZVwosEyRrLq7rrotJbX1TWrKGxszRSscndCQZoNqKvyf4gCsdjkbk94s4F92RvJs",
  "key18": "463zWZSwBRoo59kVLvL3XzmwN6TQmgr3FtiJnPUmxdCZsrkh9anfH2B6bqFe3vKYosRT8EFWJDtMheg5uVvzjRfk",
  "key19": "2bFXyZfe63BTKWShGbFmFpFtnRUiunLfqZ9Jr49RADxgsRjj1FHMkynGPNwcfjHxEYqS3dBgnjFsYDRPCmTa89mJ",
  "key20": "3g186bSoCBpnBVJEAH2jTnJrDuVfqPNNj5r8Dv5SVSLkjjeTdiAvPzvkYWMYGrMKUiesuNw7pTCubT5B5gndR1XD",
  "key21": "4bTbw1U3vqgRGaFA1vcUhFf9EPCKe5TEjhLqJexdUCs7ffaFz8RQbgauCKYezYvxN4LfrGPDiqEsLwMfsyh9HfMu",
  "key22": "XKVL92tpTQV3JkKXy7WQR54wbTimJWNgUxwGGWDoKSbX4aMGucVAFCyhoiVg2xPVouEYEeR8Q76PRkUdCbdKAwY",
  "key23": "2Jv6ho3B1hqiYTrnpbsy78VZMx7xfJYG97JWbYX5bEUbG22DhpUrpKHAz7KMDddewcGW1DZ1ZhKStqTb4KbE9xHE",
  "key24": "SHn6xTbnFsYvLNmntZksw5x5SdySrsLJtAgYtDYZwvZjKyE8gMU6AcHiEZXJczg4QZGXdPcwztjyMG52A5ZSjU7",
  "key25": "35b355NiPau9wowRRsQfo5bEJes49F6Q3Lrqw9k1qtVK1YuhLGEo9RKjTSj4hHa6zrmy4vuuYXQuX4RPD3ckcHRs",
  "key26": "4usbaXMWiKHzRPMaMgGuLVJnCscj1QxGx7QYtMy35Kpskj2o1JcRzEFmieXJbbV8m2bT4DdgESYq9781ZzjjnFjh",
  "key27": "4qDQiy3WAMuUtfvg8cr8WhXLr8KxsdLDxVstHqhgzAqccydJZUgvb1SeHFetSmbmEGEwbXMscyJUpx3kXsgJHnwu",
  "key28": "2NyGkUCEJyBPsJzVjjxwwCRos1Ame58qcTDmYAJKJEYHRWxFKLn9a7osfRoED7QzHsua6Y4TxTtmSXKQ3gsUUvq",
  "key29": "5CBrCZKVQD3s2D52Ngp4jXhW1vr2rxKh4478DsLMVncfzxFixhFPyqZWgk2ChPsEBk6LTfU17za51UC9RyoogFYW",
  "key30": "yekqocB7yNVA4rMkTqdZYQmk1jqRr7VpaBTLZHFuGsSmVDyQg1cp19dhuSTFmYi2gBcpmJdkpBYZuSDdpvKSsrX",
  "key31": "38nN2s6i7pSezk9bY89PtUKGqYUeBxzzJ4f5uKPeaRveNc4VdSrtDFig7oh17fe2utY3ZtnE7enHUcGxqRDoi6Zu",
  "key32": "e7jEXrAEo5ai5gFhpNuYThTratxqfNTBXsYWRthfYbxUq7vqca1tLg4myUb65VKaqCHXxHm34krZKSL96nH8xYd",
  "key33": "59we5jHc8niCemy7oK9QzaLsWdGeJ951qsFBpUdxBQRF9gk1RXQGtoJA6HqL2oPAHd1XwsAiuZ5cRyw3ND6SsC7Y",
  "key34": "2k5sLpDDzKEDaTWnozDBeRqtzafABVAFTbgiaRogAURKKTWLQJgKZYx6QfGSCReDuTeJSo4byNhR4X4gardCuhp3",
  "key35": "5N3zY19AqaBuSixdEjSf3CyGM9CjXa5xBTRHGbLFsSLjiygA9Wv2f3hTD7Y1zQZFqTAeeBYFsQ6hcBS8fXvQZwPK",
  "key36": "wrarmZK9BgnadgD47KxxFpxhDpLLtbzcUdqXCDbHdAX9xbb8dbL1FWPLjH91p9ZWSzmi2NFdnu76uNCQBFDDK1Q",
  "key37": "da6gMk9pzd7H7McVGU2si4DgYG8ko16g29xEeb86kSQX1aM3SeXW46w9qChxjpLbqD7GeLNbwWDYGdJHgUpLpFa",
  "key38": "3z3A3U5Un2EBoDaHYregWbJui8Jw5XzyEwFkEbi2X2tEGj6gPnhuy8FgqXYvWBZ9hARad96epzY5eQ1ksTiY6bG7",
  "key39": "5jND3Qy6UhCHg5Boh8caCvVXDK3abuRAc89qn3FPf3fsb69rvK875nFU3x5Hv1udZouNGQZKrRFDqYG82cd99Bo9",
  "key40": "z8Anh1qUbxt24yV5fQ4DkXfabtxyYiXERygTBMRTfcNZmxmZ4sueGx68rGeQZWsKtTCiwhKBqecy7vG26ph9xqG",
  "key41": "QbY7WuRTK5rWmAt4ss8zyCXbYdHjBtGC4djR1S9ufUoE5Wj1TYrRg5UHR16GAkC4iqcQ6NkHtEYtr9ejEtxmM7q",
  "key42": "4sgQijywyHMTo8c89cbHmXVGNyLpjeCjLVxjn99FALQN8Qym7vEyrnPNXh6AKTfpE2TGk498seZSzAinqqTi8Rd1",
  "key43": "4ighVVU9nw8LHxKWxEQQ6p1jJRWuo7KBuT7inPxjkPzHaT7g2m6H5kvUzkBy1Aq68fZuKv3TxMR4veZ1dStxvJCb",
  "key44": "2vZt97xSBL7SW2ALxBjj3KBx1ZUVCAtZUyiULQSgqMCefgU3pmnacer4xq1R4evTzWTVbWQmH1huv8XQUwgMNSde",
  "key45": "5Scgna9juEuenHJTuHCvtFCeRnwd7jxtCkRZLWor99RAnM8TnwBiCXM5wfoiRq6DSxScSDiyKoBM7MvGMwNFy4hq"
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
