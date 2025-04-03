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
    "3H4W1XQVER9RrZv3qnjBVHgiob2ksYXQ78kLHXVCujfy57MFiYZdx4nzGjT9M2uasAZBYP5FmENURhmdMss2cKPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pdgFFFDcLisggxDJrZWxSPhc3STNYGi37SuCtzmrguF6r8oYSvM8juDosUCdoQX4y8M9jtQ16Dg7vLM39od5zyC",
  "key1": "4HcEKVnRh12erixuB6LUqzuUmiS7ardigA3K4o8PSenD47FF8yUFaD4ssHuWgYmqobP4GEEYAyvqMnnuTboThPm8",
  "key2": "3vVFbuuJfaejdj2emCgty96tKU7hkSV3ceSUg5eg9wsvjPuZHS1eofKNfAwZnBX84ngWbmi5EquhSuM252viw9J4",
  "key3": "56W8n8jj4v58KC8v2XKpuLTn3tJ9XG7yF5V9SGHJ7vVrEBknvk2ijzcLNWDdbQk9CkBUyjWQfiAoGXWcGi5cgvu9",
  "key4": "4H2ckU55gXmX8MURB9XxtSXt7njXZMDUhheiofrtsvAgAUpxJLZz4wANtVsCs2GJ4Pik6CYLuZYLBrpj5B8ordBA",
  "key5": "61apn3v2V1jXsMzBtGcDhm1nJ1QUonChHtrzhmBTurCBsPG1bGY9wegD5PxR77n2Txw1F2fGkSsWKGWzfkLNAtBk",
  "key6": "tR6GZ9w7UCpVoZ2jfHU6gYNdygQRCjmDNjApYMqbM9RCy8iGxkQhfjFfjLPVS7Xr8tfcPQLZMJxuENL56wFAcdx",
  "key7": "5voEPqhSZt3cLCXAE7GmhMoRbe2ebNuRc2rZVSjUsFErSJp7mK7afNYXhHXF2133TRXGaWMsfcDBoy2fM3KZRYYC",
  "key8": "447fzdyqY6w3qewhsHahgVaq95MhXy2KVnXPUCouzUbtNq8ANA88SeGvz53dfmAwPZ1yS5Y616vKfCh2Vfg4Ycrg",
  "key9": "4KHM5yc5cJiFdGXYK4HfF844P2tPqX67s6x68KZhKdt7APTo9NpD2owRm8i25mRBEjeQ9c4UUiy6HyQeMf2Vwzmj",
  "key10": "KCHVxTHAXFQ4ZUYQnZZHmqkjY2pKHjKrKoPs8YEaW7JAmsiDwE2SEEtP5j24gqRdYgGNnVBLPyinm91dxtLh8S1",
  "key11": "3eH7spDcaP8CXBoVUpt8qkz2RaPZGCfr7gZb1PdpyLgaQujq3hiLFXo2r9YDTMr2eQRDoQn9yRqHsyhnesxgNwFH",
  "key12": "2HfYzmASUvWTyqLv5ajyWaEta9vYVGtMorMQXVnGT37d35ZDhBw76BcrMoe7iD2XYPpYvrVXmNd6gX18A8KCWrYv",
  "key13": "5pENNNJWGkdL2fj55wtv5jRLRNeVydf5Fqv6dYg4K794BBdC8bj66ubDEyrpgrEaAu2HY8D7tmbGEupzkyr4TdZN",
  "key14": "3Gi2Yhe2Aa1XPiUaGV1moS4LCAYwxHGXopkKBw8H7D8U7MYc5gNiLbmzzhXBgbXixmyXMoDHMKY6DnnswJBKezzP",
  "key15": "Ncr7MMDXaG3TtxSGbv4ya5BqHXdNN9sCTrYUawNFAMrmCtsFtSaTpfgHnaY688yNd1WxvHbhJJ5EZobL4vf3DWo",
  "key16": "2RLXsw37iccKJten26wbWYCh1VaWqYmVKyrDDjwJiNaEs8UtxXVwQm19NAbQiRsxXWEfZoC7B2EheBEpL4JXM1Xb",
  "key17": "3maugRM4vWo25tD5cEUPvjFoK4Lopy7QZ9Yw6xWNjnzBEJpTiiifVZJxSrZBkkVmrXXVzCJ4sWT1FHcEYc3wyQaV",
  "key18": "2FvU5YTTYjpCKreHoTSQy8YJo7jCxBiVeaAhVJnaE6fe1WqwzYCGmLJbqEKNvtcHCQqDG28MSpjLtK9N1uzXugjQ",
  "key19": "5jcYxCbMR5kogiLSrUKrFCJf1eFNZDaSRaQaPcXJKXQ9uK3DJfZ5dyNPypRqEm8oJcFnZ1sikBR7tyogPuX3e7x8",
  "key20": "5Cr4dowS3hpf1xpD4gU241VAzJpPRwXY5DrBtZvux9nDTUj85f36PCp2umza3PZWzdkZyEVkdpqSvWx3Aqv9ALgs",
  "key21": "45JSpJp5EQbmqzVMC7ucBimLPBYNQMbooW1y38dgG41SXWfoEMUZFHaiEYm1hyDrgQfL5DB3TWvVUYAiTHcBnJrY",
  "key22": "4TCcRjb9Rvc1T5RYFVJ5nsHYYdxK4MspjWYWnQdPLpNoQzLzejfbB9K196EnmMn6B3xjRjCvk3EGAE8kgzQnMUEh",
  "key23": "4h6EtzuzmbmFvHoQMg9XX9X2ZNqfjdu5L9tszVithKvAaKRQkgMMvga7v1bgpUUMWW61aeusuorbDvdMYKQwpt1M",
  "key24": "2DeHZaF8m1Lo9AiExSUegr239GVRgwYFTQsXgg3eec3rqdnoEv8UpN3EUnDcCeN4tDb4pBPbJzfo5dG4Kb3CZz6h",
  "key25": "3RrtC9vRG3UtUJLkrJQxiutkaa2ZGrvsviYxyiUiJbbjCic6vcfvA1qJZk81N4Dq5WE2NddgEwSwkLDDv2DSwZxw",
  "key26": "5TCodfnVsN9xdd7kiW77fzfdcUCzt5XzSibR3PmAdGfA3qxDd9zBkdTKxDnqfM4LwiFXCV35kVGG6SHPWgTKAqMi",
  "key27": "Tw1gGetWBT5CK7Thtq9vX83nfy8SfWxcjPvbmj5UxeG7EiXTfmHu5KGzZyKxUKcsE1BKwx2xkXSsNGyxvbBeFc6",
  "key28": "4nCnVfrxV1S4F1167M77JbWuq1qUw8bDFgpFxWq8JFJ4cY9i7CiPuWpHegY3BtQuE6PfwX7z731ifP4KvKuJJf4t",
  "key29": "c7bMQ9CswhVoLySh8nU65z9GRSVDtQSYpGcPP8CfFEupSjfwQrK4uoVb9YZM18gA3Eyg8PxfehZjF767NhRL22Z",
  "key30": "K9cfGdRdfpFCGx4XVUSo9ETwBFcdmWr9f6jDNBVeSVm1iZLjMmRNTVm6cSeLym9Za5EqRhcabe6yxJRbE8MhYDe",
  "key31": "5dNxvxmx2BUTCzAGYNMaJF7rnp8HYF9b1i5uKVBKnfTwGmchc1V9ovY7bcFq687roSmoY31ppqQCtPy6d1yhAuGM",
  "key32": "2548eHGq839LxBuQY7heKYAgSs1qA3M3eUgksLUeaJwGG1hGNhuSxNvAqJZ1zx4JdQXJo7rbwpvGCA31JgmJ3ubX",
  "key33": "hz9eMod9CWjEVf2DqhW43G5rStr2xN6PJPocbz6QJfJrvhyQx3dft6F2ewaBAL6cGzvM5Cca6WY2EQSuxSKhto3"
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
