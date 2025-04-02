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
    "5BffPrKNbZ3KsErFDxGk18ro5ieUaZHiHaghVJJcRrB1FR28BPsqjoehygpqf1SKdv8DMkYxbhVU1Ri7QjTBvhPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zHy86ySNR2sRN8eB5Bc9LJATNSzZ3jo1xMowmC78sQj4vikcfTpYqja882M1DF8mVmQcRtEVokkF1ja7FRZhkyz",
  "key1": "3x6Gc2XBUEkWAKqmVy8KcNdNUkuCHgeKPDcSNpATqRrcjSq5q8P8fif5gh8YUjVm7dGURa5vAhJuX2zcKrpzsKdQ",
  "key2": "RQEYWqzx5xAqESDPdwLVBCFhNwgF9XiuHZzkfULBomd7UjfbrNNm65mf3LyXhJKaJZ1TaGrMa3eHDZYJu9ybBR5",
  "key3": "2cTaB2Tr36erJEDgqKMQjqbR7BQLBkc3GCcD7L6F43MgzxygALtmcTGhh8Xxvauwga5B18UGjCxcq3BaXNEB76yV",
  "key4": "4YJ8AcAhL5UMeswwSeUimquPWgfkqNCGWZAuHyPJpcK9yHFoPeGZUUwrhTVPZkh67eegi9jjd8NynDqbuyijoL5F",
  "key5": "3bqS34viEGhDixfgEGVYfxynQ8LBEADyS8DvgQok4PNowrJL9jEsWG1oK9rfc2zVbJumXRbLmQoSu8CoMoZfLPFK",
  "key6": "3StcUNo3NQs9B9gHysQba9V7WyGC53sTYm4jk7kkWPGZhkVwRDkFZKu96nu8Mud1k8JPf7V5T3UB5zkBCHfv3JZD",
  "key7": "3XP9qhiWQq2TS7EaSAAaeZ8nbuk8XgBgrc89eEgdVChKbb5ACh3sx4xRXtfcQcEtY43AXnDVKnVsbRVzmaR1NYqf",
  "key8": "4dZff4m7Rwkp47f3YEDiT7mRhCrHvEGu1d7YSxSPCje5DvkWiL14ZieEP2aAr8XY475vH2QUkbnn66FbtoAXNmMs",
  "key9": "5BSqP8yub3KPBgi2pdAvkNT8LeALKv9mnLhw2PZq4bnH3jRLi1cXVdPzSHEBAHiYVcHpa385MUA5Z2ZBF2zyKShh",
  "key10": "4J9vaWZH7uPcTJRfMTXjmu8xWXwZotdmFV966zcHuiPvknwNiVXsruKArZzdJmk5P2rkD8xhurvArtMBfP8p1ZEc",
  "key11": "4CdBLyLpZoy1Nmw2gFuf5LCmEfUMQzXjhRsgFsWL9C4ppc1RAvWZyt7jDHPoULSBG3NQXeVi7hiQMeuHEwF3JrBh",
  "key12": "3GSo1yXYeCXAE4sd5aEUTJA7fPPdcdz2nSJRVqMppkw4eSagmRbzysXEipqU7YWokqU42BnnpbnzVpdKfTdYCjHd",
  "key13": "3CKRhYiR4chP7E9uYiB8du1vJoeWKBgqQA1qADK6s3YkTM11UCV5NwPVBq7THB6v1T77pGNKyggv72zaCsBZdBs2",
  "key14": "5YXTPYcT9rEddyzByKTCDvLz5Vub84n5wrsmLi57xZbruXqMZZsrUvrQVbjNMBLJSwCrr6yQsurQf2A61FCReTTm",
  "key15": "37TAuanqFFDouhAzQrSKn2bYbBG6TXYSanLXYfvggeAhfNte59pqW8LKdzVF3jMhmfLcUGcFRbcp9gMaYqXS4kWg",
  "key16": "uWu38fQM8HPe9xUBxwatTL2rGxXP74WhSfeZTQdNqVbVodccYAcJFok2CiUGcVobMeaN4s8FC4tXZpViTNwJD7N",
  "key17": "3VbB78MSpDFKBKByd3dP67foK6qRWaK8d9W7NZuH4QMtiTryFZBNnpzZentzgCwW55c9pywW5BocTFNjFeHWxWFv",
  "key18": "3gBDdb7jDJM8DyJi2NLUXEMAbuD6PbKZzWF4AQLn31f3tqQodVb1W8mnzU6b7YKek6WadL4kV3YAjCzxBNSGKpcm",
  "key19": "BfLo1wQ2xP3eed7AJNY4w4SroCiVptLRMrw4qkxqN8FzZPaFqop3PC6NhityHKsE9LmzywviUNCochnVfF2VkVw",
  "key20": "4NiL8PtqLpP4WAHkbezpBjwFJN5PtXubptaSUBCytgb13ezFkiXCcznJ2QYua6Z1TF1V9HFpdwAS9VXPtQwd9Ahc",
  "key21": "MkrdpvFR7oUACa6njhZXc2LFbtffriRVCeAfg5y4tHBytLfdWuVuKtupKr11FexCQ1nSwkqZudhoFvZ2Y4QqiZ4",
  "key22": "3xAtSYSYXkPCnspgrDFtomyJYfMtKfEVBr12RvmncRwyixnGvnzywiKnLcNU6adwD5WBL6hn9iZbF1Mf6cMiU1aX",
  "key23": "2qWSuCzd1QNva8ox37g8Ct7bEdAKph5EmPyKBskw6Qgkc55E7aa49544wsb2ewukoUCKC3k4NfeHAkY8t649YyRD",
  "key24": "TVVAomoceh4gmSzQUrdvca81m8GoPir6MVEtjbKRFzBLdpxg7ugcyXCRWuBGpT7HM3JbmMiTM2mtgjSpSn7dPaz",
  "key25": "5VKrNvwYFrw5Fe3F5GYDvzBm4Ew6Ap8miJhwnUGVwYZqV2suWid57pKk81PedJXpAW3c3yt4Cdiym1XssHM9U6NP",
  "key26": "wsbiZTgVcyJZLMQn2XuLUyE5rwBDViPcbAu6QbFrAravi8Nrj5KJC3GRzG7TqiTpSe6D5ZedeKRkZka7SJLyfyi",
  "key27": "2ynEfhsTVPw3WRUnx5Hysa6uJJ59oWHrHPKarr8CzmWoq5XPePbVvLAddRodU8WTN6WpTa69HufdGuw4sW9DKBjb",
  "key28": "5TqywTbXcMPinDFSaos7kqA1vaxbVHE1iBysY2ze7rGguw3MWmomubFyCuwK7Cv9Hpt1QWKDchDYZaQUpcEkadjr",
  "key29": "cRpHAfgnTdt6NBWiQt7E6iXQVQVNAGVJHhJ2vyN96vn3SzAxbiWShDhkQWVLrGc2uPgTinDw6mCqnBrfv3zRuSg",
  "key30": "5RkCMt8vgLPu5aJJZmXJp2AQrc4ZqA1RtexdDBecfwVxikvC6sKTKXMnXcQhVQ1p2SMWztfxYA2xhyw1RJoLzHh6",
  "key31": "DbCE4AnRTeB9StfhLYBVY6aKvGYQFv4sQq5ZmoF681rB8CeLckBDSxoZH5g5FM9hqVViZVfXVqWkgLVQoKhno97",
  "key32": "5uSnvK4FoC1Zx86EX11r1girmbKrEWQvsRNVYwVgSc6AFzZU7fas3E7PPpSkLsdnTRTcTxbaSQk2r8XCGjzsQphe",
  "key33": "4gmTHRsFdewY5stVKGfa7wbMkraRHgEvFMpLBrbzAbhkHpRoP6N2tsuRYUQacaryvqef8euhUzu2DiqznHxyzoCf"
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
