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
    "4LsgkFEJR6Fcp6S8W4T1BvhFaPqgsdr4VeBuPqyqaNhp4ckDFpHAEcnU21scyHiFamAWCxtGrXMYnDygDgUKnzzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4githiEnG2h7UH1LVbEyEYrHspJ99m8FChEGdscomvE2gmHggKAfQRDi3fvsntFMaSMoxGwRKwbZvoVsRHYHfyxL",
  "key1": "2fVHJ6Ppv1xehzBaUK1oRU4mVvrWrvcMtqz4bCxWREvBCCve71n6QRepj1XF3RDR46ddeGXcVCuewkEHE1N9R1Xg",
  "key2": "5PcFgbrD1swvX7GBX6pQdTybrDVKV2eMmqroUhLrTMed6k3uNTVUkvhWBkWa4GfRHDJWXqZTNU6CWN4aYyf94xpV",
  "key3": "5QDMVaWyNqDxfNBmcTJ2Stt76RYM3Dgh1BZQHPEqCSUetJaxcTEgdaoh8M9QyecokDv6GXHYTbsPBmWfgoYs124f",
  "key4": "2nvfUZq67JpLk5SP5EcPdbGtHFR3Go15yGD291HKz21Y2sZWneDCzcou8G33EFbsdwQ9NDa7qynDbirYsKcddsbz",
  "key5": "5EyekVp9NuA9sgd3BAJuKH745pBfKi1HFsRnpScfQyzGPcQaPPRE3oq7YREvMZpoo4wpwDmDa7onpe4Pptgh2uXD",
  "key6": "28Lgzo3mtMekYMrRi6kt6UyEK6XUonLJRFv84pXSL4aytsMvd1f8cpHq7AyRpKiX5ABo3652FcvssTb7tYijiC7d",
  "key7": "3AeC4asjYBnpq6QU6cZRRgUaF4CLJoGH7dmv2rUSxxmmJJcvfDRFkbqFL1XmT7269jz2WYKU6AoR7A9Gdqwxtt5W",
  "key8": "2KFYp6Gyqexh1wnQR38jXyyS4d6chYJTiMDqE85ndmZ85xjPWeZhMCegq7yKJu14aBkyCsf69TGz7odjpCmRgGVP",
  "key9": "8AgYxyixC1hPJ8AknXFYFYo8CeZEn1VtWZtuc9xPdiwNJzT9PpjnLPUzAUsotw7svqs9BosnMeY5RQC2f5cXTtJ",
  "key10": "2axTTupNPhBajSrFyp4sdpVWPge8yCbc3RXSNFK9s9E6n6UtaJ8QBmXBv4kZxFFwZ9Yxsaj4sFKrpwNgT3qHQatw",
  "key11": "3k8BoUeQo9cpDykVJ4UmjiKh7k6BZycUv9RDcfFjv71FSnq2ipMSX4a3fc8GwjhTtb75kRsnhxriovuDtWYKWyGu",
  "key12": "4nejMNQgdbCwKGdTUfJ5XKJsbRitbtaP4bxAQUephaFxH5g3bDtJgrURwLwiRfG5Jei1Ss2rAag3GDxD4U9oRCEU",
  "key13": "nxgZSFhGBE8C2CEhY6b9weu1n9ZhHQmJcES3F2GWreCcLwaopN57EL25szzFdZjerskRTR7MwC5dgZPtnC6fVRy",
  "key14": "6VL221VRL4u5VuojzpDaqBtVeRzHfBCjFUgcSignmUuKvi8w6e4JFc9oddpazu4GVeA4Qwzv9MDd8hn7wSH3EPy",
  "key15": "4ryoNsprqRTnSnpkD4gRKxFdC26T3cDtsXuEPNJURTBGGyaaF1zvTB9Rf4udbgKxc5rpomUimjTtecaRzbpPzPq1",
  "key16": "4ucFd1B2rW9if9Jj8bzf58CP91QAQnfJGCH83ejgp9c93hRMssn9Mv4jt37AZk1bD3CJgAWYbKcuhmZSjYjVpZ9e",
  "key17": "5jGamEU36dLcPxzhtekZYjmxDaKY9VpLUFCgpbWgbjTtGJ9NWiaG5uvxdQ3sVp8Bdqc4AQXqyjEsmfMR5ihGjZNv",
  "key18": "P8Gba4pvBixz82edPoLBk6rdfGzf6yyzp4ouXZar9k9GAvwJTQjxqxf3zog9hK51vfu5Ny4jhj5s54avCru9DgE",
  "key19": "npj5tZAsrMYpprCwPswGTLTQC6gYw1BEfShP2RmLxZWak8bmydneH1c4bGUERKVYfW6jipw7XvNwg78JBw4rwK9",
  "key20": "26VFuucKPz5MX45XGrcqZnj6PJmZWj4YvK8bfKnGkWgUd7o8MEVZ3FVotL71PRdoDVH8gpMEFxmpraPaWVEi8yQy",
  "key21": "3V5SoecpUyqQakjLtCprgcrV84A97KNDyCv1tqiV3CFMigCkN6qTNRC53oCBJzpkiUXGAQEWhgAuC9PWAFk8ZHF8",
  "key22": "aStfdnEdGwXYfvX2NRADdAMQnGw2bP7Jz2XCG6PiU7Tyy4aStG4gythHKqjZxjXdCVkdvvFoFddVMmFMLEQt4Uv",
  "key23": "35123RBn6ydVvktDkaeQc1RxfG3no1e4RE5TpdQncitYwZXWU8eYssi8VvnJf5ew9rt2VHTJcgaUi4wsHPmwN3MR",
  "key24": "5bQ8PmmvRzvb4ifwSFJKhpAwH7K7vMUCd2UR9ChcEmVrhTpP1RYKGHhzSBpox7hiTSnzTqjE5ayvGbaocc65Jihd",
  "key25": "4CAQqDrUWF5xFHAHP2AgNLn7QjHHq148UrjpeyrNtGnHZ8HFRvfdNfY5kBKKj4LkMTFphQrLmTaXGx4dZDoTWU8a",
  "key26": "5u3qP9vgmcWiazkmvuiqK47LvjymLPcZx3cyPimq3iCR9gVrjyqXyCCFmArXaoDXLingVUuWj28ydtGBcQ2ERHEg",
  "key27": "GGY7jKJqukL3kmmaCP3xfMY91eLYtR4n9cBAkS7S6EmQeyL31R7ey5BQ4dEaoz3GZxD66SaFmssNTDw38ximzp6",
  "key28": "3UWMEjBxxzMW1rF4dCfSAVeGCps3mkoPF2DD58fnSTFJcguPm5eoBnXmq9u8XoyoVsz4MVbTs6Vz8K4YKJyPUGFC",
  "key29": "LhNaVaUTMcqdS8EwLFyNFzCQcDraXdnTHrpLGoYBgM9HWtgKXAaiSm1Em6PmShS6NexJtt79y1GyUA1NcEay12H",
  "key30": "4ui1WRmY8xQqD2pSYo15dN8tKxKaTntSRZs4grYGE8BiDmkDTkkGSEGWf1uCk1C8uMn1d13DMtWZSFdCe56gTbFj",
  "key31": "4jxsmjZMpDLfsawzDvKHPrpfS297t5kWZLKFRh9At6LQTuYQevBUbFGsE3mrq5oLtmi7D3zjViayxAREj6UqLKBp",
  "key32": "2ks2npZiRBHJdDmRBYxY76Gy1uf8Zn2PZJPkKJnfRy5WLYfos3VmZXkcHckPBtxAyEkDvRHhq213D94RBqKj5r1u",
  "key33": "5msgMF8LDtXkauSLmCNr247MourjLTcriZzNPxA374magrMPUzwMLYeDdFqT94RomAmp2hgGKcy9HhcNyQu8vr9w",
  "key34": "2kav4TSw4irfTmWe8VwyuobvNAe4WpaGMeZDWCtnQohrY7F7WLkPDWMqoB88bq5sRgbbavVxjwHcEVLvGArkwFty",
  "key35": "3avigynKxMzGzXwqs4kYPL1Kyog6dHvn9W33DmZ66qnA1XYnsjgaCXh5DbuZRXxBw3sSuxjPrXB1eDvyowfMN61q",
  "key36": "2P4fLHBX4YUeH7rH1rESkiWX9gGr3LnZU9azUMu9nWHSrGPTXG8SHpGHLvug3e4NkGL5MiG1iUURmjgiXo8ofbg6"
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
