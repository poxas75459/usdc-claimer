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
    "3eXCzRjBFaEQcFTGERQxEzDaHfBo7jstXcPojpnvQJYvw7cg3X3EkVz5SNen23sZCsoFfa5GniwFLN2jophFXR3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "613NckhfuguruvxsjX3iSrcajinGrJCJbeTFVAcqXfutzRhVYsox8HyLqGTUYWMF3nSAnrZcX2DQxtfso6Jkmwnh",
  "key1": "2AomrP1BhMY5mXnCyokpAEC2U7r1NW7UgCM39qirSg4gGRGwxnuiSE6j68syHszdWKWnfhVxncjT1BFY9Q4ScGAA",
  "key2": "UQVDTXZSwrvCAcHqmgxMAeVvCYHJn7zuAVccnbiHCi4VGcTHgPTSygbsiDJ3yC8KQmruabxdtuABkRSCq8dPWei",
  "key3": "5jHhBgyA58dLM1CLE1FEVQGRYxeHH7gV2PviEBcUVghGhqY5rMftKhe36dW73ZivqV9U8agkLh7pqAmL1ydLRKB",
  "key4": "52TCDRzoNAEVybZ2aJ97K65BQ2ZvrGEe9LaA661wdhHFuKLcDQ924eok72zDeD7Uxk37vM5mP5bQd4EPuEqD7MvB",
  "key5": "5uYLUsEPMkhEDdZDDc1KAgbyC35HQb8cDYzTgP1oof4yRQ6KjBEUsbu6aMh8kHy4oq9ZLNq8mukR5nxHrbTkgcp2",
  "key6": "499kRN9DUHvGaCaJTPWcyEeBdFhPexFS1KDL5qbwLyn6y9vWvpg7usEJAsYm9F4dVPNuQ3HxqJBvm4T778y4ZAEk",
  "key7": "4mqGWwwkyK1zHJbtQ4imqQgfguTeF5WgviVsVqYWVCDjBoEffei3EYaawetrXG5ZR7rb7SensdUdWty8RifbyfMa",
  "key8": "2fZ2ePAwE7GTEW2ZmuVGc74FoMUpGLPPw1uLtYxdDQ85XKi8fGQWjqGKFjPn7CVtSr2KduL9eZABYvA1FsaP6ZYm",
  "key9": "kPnE9GikidMqk9ZZL4vkf9nfhGdP3evu5pCym7SQX4Hr9ohS7Ru8JGQN9RpQZWYNaHo8RqexA8o6iCT1JjnAgic",
  "key10": "bZVxmWJUrLp4ikSUVvxPe8EFsGNWQNN82WpejNEmcz1L6VfTQyGpd7TJMf6Ahp4Ds5kQnLvgGeaGezDGfJDBu7d",
  "key11": "5TiRpXALbvRaVyyxCJ6KtA3zfkEveHQDRfMySk44uMn7VtcfLcYSrEQbw9PmtkXJS8BSosNNiPNuD3oqEX9xmhWv",
  "key12": "49LZupmDPEr5QQPCKYUpBuVJLpMASpmWwHK4rZaWBU2fG4TThJTpzFMm1tjobt3FkUDub6yLwb3pwwdMQgkNkMTw",
  "key13": "5X1ppyKA5MQNDX9qFecVm2kDkJQoiUUaENRtV8kkxaFF9Co9gbznaWbG2vQzwh3wCKUepGEkA8BVihv9aZ51Wws5",
  "key14": "4waWo2kEy4GSF9QAZ4qr3bx2t299PrFSXKP6VUVUhifprbHectMvnzTeRtofCVAywzYUZaJF7yRJ2zw3FWpqEYmC",
  "key15": "5vHgEQ2LUQGtEzTJzscjobHzR76yV45TbhSitgq35cdNhTUKtLmJKdgzwCjpWG3ALDSzSVE6pM8eiR6KmDn4Mj86",
  "key16": "48VBp7JTHrB64DgSFtQfKUobo7xo7sxrRUwwzWyHGLKWiYHqovh6XSPL6CiNefbDPYBqbEDdhVKUoQzHbbKVCAGB",
  "key17": "38NvRxX9ygoRakkAfE4F5wPwt6sdZfZ33VoSN9a4bZNXnvdqkpR5fFw1vJGnCYiqMFdAmHJu4wjjzozFxMQuxqGF",
  "key18": "26LyQ33xMB1tqtsxWRfoaFpP3qFAhDBwzDaBDtKey9Xgne6YKdymN2DXnohKgyQAtXEDT54NYQNGNwQmqRH9HKZA",
  "key19": "58ZP53EMyVRkftLgdvudPKn55pb9g9gc2Kv4Nvd1sQY2PdB25auqx2uuQNayeNkV8uy8KfL9yf89Rd8aaqzXbAcn",
  "key20": "4yisBWhxHyvWfEw8ddGdoTMc9FnVQ9AFszwbqSJz9AGWh8oUUtso7AaVjpicZspQW9J3P61sXQx6kqUmu8pMXBSr",
  "key21": "aoMroagiSCdASUnWhP3Y1ZFHJrkLftvJQK5JDxrNHrNKTBLfMXTEMmiL29AAgwE5jAS5yNy6qKYFucyUWZkcey2",
  "key22": "66bxs3qKuc2chG3jgjNkKXjHNeBcCbY8nzc9QNs2wzxmVWU5cfkZjLVS7tUwCygGhh4F8jgBNGSJjz22DQwt6hhq",
  "key23": "3FozgTPTHMeGKkfnkzAkhoBCJ7LediQXxsPGTSFEmemmS8wL74wWYFB519mccV7VsVDKyd5fjRhc3Cuw7QWpo2KQ",
  "key24": "4VCPM1HzKDa8WZ7238pjpAK4GgjXrheyozjkHMqb8Fm2V1k2pJDRTY5WjTozPG3rCwdB6Ro1Yb4qdVBLiMDgPHvp",
  "key25": "2HJnkTkr7wRNcSURejaC1d4uy6PuysfTHVS2BLAN83MAJc8ShjQP4PF25Ehoew9kcg8XtsAFkbTxKS5DXvmrSsRc",
  "key26": "2omgwyLWYfxbVfwNjSDkv8W7ofAst712otpcvHTMEWRsPPGHZMKYxNQyn7LhrHAgfGjn6NCKUkxaqE52CdZBd5yK",
  "key27": "3UdAx5Nhfq2dCUP9JDrkkdsmKRmFmW5ZEHJLuugbNBk82aKftBKVa76xShFya727iMBsTGLYpe6CxDEUybAWgp1S",
  "key28": "4SFDZdbKVqdD1VL649VRo9vcL1NfV4d8JyV6NvwR4Q2EQ8cuDosiKQg97tnEzb5qDjuSFbXgXDCj6Ev6S4PmxQHM",
  "key29": "4nDWPTgbHACS35aQxXpWtpsBMPsjFJ6Z3gvo8LtsWeoav42m9zpqyUSBSaD9guXtj8jymMpngdpG9k5p16ResEg",
  "key30": "5Bk9wNvnUK7CnpERhEPWgWTBXSvU2aBQT14EvpPrubpjLEEecjAwHWSu697ZrZQkbbcMTb1zXmzViSwzNigZ2ruC",
  "key31": "4Myhs56S4EdtL2azPbtkPZo3UaG7BEFo8ezAP7uZAZGxtrgT3UevT7vWtcnf81mhUnw1xAmdFEGs5eWTiXVgNuBB",
  "key32": "3XCxFUwMDzb4WfqsNFVw7X6A4tLQ95cGDsZjH5NJ8NVUo65LQjA9hzjkqaXrkWy17Z1Pduv7dyHQDHrZxveq1Fmx",
  "key33": "4oSGpNnHcJck88xdLKnpmdUWNBmpJLMvcrKY7tLXkm7KUVrTvHeGFYHSsNXfR2DzhebAnVK79Gsr1frQ5KsjYW1k",
  "key34": "3L2EZ8ts67sGfNxES6GjSBzLjEdZB2GPbtqznYLDGoc28oktSookeiVnnVeqH6mBk655LqkHCVjCktQDGs43SBYG",
  "key35": "2d17jJqrAYAjCSRrh9gy6RixkD8cevqHZy4nBSUqi7NhW9TXKnAK5wtkw1zg7ih2PV9qwPzTabsigk2RCKMshBSh",
  "key36": "5THbwfdVRXcJmAM6FRJW2THaUN2aGNtdeg1oPBfZBVaiwsR2iYwtdUjrJtk9CRM64mbQ4h8voeYKxkVnD7HawDby",
  "key37": "29ZvYUpFRCRdXae1wYr8oRxWyE6M6i7nrYkNPjtH2FEBF64VpErNv4jUejFXSLEBymBU4WAWviko2Rq4a2YUXRbw",
  "key38": "2oB9Ss9AvMF4qeTEkUi6BytoSW1W7xyvKgxZpNnvYhuKKYzUTcQjgpDtGHPnsdUBokhmiT1peDcrsGwmUgKwFsGk",
  "key39": "21u4A8mna4N1dejcQrEW7uEjYiqhiGMPFP4oyATEUWPFSfPf6h1yGz2pWsdEA5WzPvNYF47FhrvV6js67jyFwcrH"
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
