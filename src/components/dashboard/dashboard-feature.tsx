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
    "3QmcXz62cH2qGFtYfH8VQUdzninkaQPMMdV9UJKQhRH55KonhqbyzuF97oEo44eGwVbuF4vzokLGbGPy6Zoyv5db"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48qF6hrezwePvUuNSdVED3zJCSdBGQLMdnSiGbvWbWrEdiWGtKLGLXjG7RgHncpD69SrmZHkYiab8YhcS1tCPFGH",
  "key1": "y6onR35gZPFSDAyqNhiT2rvUHF5q9nMTpjmiHhcoWJ8TAnwjYrv7P3tHMeSCJr1nbAfp7eNgcd3NY1UKtsBu2FB",
  "key2": "61wDDo5kepeTbzvuLQcvjjKvA5ziCcgqG5G4pSWPjpAKr9zoiBNmaJY6FWeFSUsgTmJdtBfZoZdsvwuj2puuG2BN",
  "key3": "2GZpDw34jYveAJfxCxCYxtkCLvmzv4TpgK78Q66za9kKpm9QXLjFwGMZvoRyk8hnf7qGq3ZQWBmjDPvovnssyeKT",
  "key4": "3YpDZ3zgmVDk43QdRN1txdhgetvVyYWhFxKG2D7YoCdpK7uC7FpKMMDWPZseVzHtyqMQBf6qLa63NSksaeRt3Fu1",
  "key5": "4pWjTXhEfjG3shaXKGGYSmjyjhWLVfLXiqHQyTeGPhcuyP3aacYPGENDUVniwXnoZawb1JCbtNuLYHotMLrmwEfG",
  "key6": "5Ab3MZVYXimfaDJb4rT8v3ZZnRZSdiHfTWoXEVvtdL8VsCkEtRhsgCnCuVWgqaH5ga67E1Dx2raQAGogtD1K1Zp8",
  "key7": "2axzpi4ijBPa78t7K5FS1X9wf5f1cV4hC7z73wVRpmmCUeJqa8orBQDDKQSNjEkw6vkt5ZktoKDrKpW6LajLXn5Y",
  "key8": "4ayut4EVeMk8vJx5DU8FGPgwoBPQiKfpiY2YVLR6xD4DVFcJTqVv7N14BgHzAPt6cMs5UWXQp3wkiV5zHQKR2nRt",
  "key9": "2QMR6hxNBKgNh23WMu8n8YzxUSaVrE12vtdTbYDLmXnF2RD71L3Br6faGEWiiXnLHPPbZJ3KPXTFjrrbk4dFe6Ln",
  "key10": "5c4awXCcgVYVtyhw4DBWErKCok9qMD1JzSAYhPzDygVJgEQCg72EhvHgnXVPYqtRDG7JtWSGqPugqNjawyjx7S3D",
  "key11": "dqFsfGQaEiZqSTJjWUDT8xRYWcaqRQoLL4QzPDbTmSrm2CbQi3MXnbh1U9Ld5Jgsyo5ntsbs9qUNwd6g9LvvnJQ",
  "key12": "4XdLYMtH5CjghjN1WAL3aS93xBs6ZxjETGopwQNgcNnNRtrj8pXWNa6KGja46CQJzoWKtmUJbUUzvGVmLaGeWznK",
  "key13": "2RvUfTyt97m1n2xwc8Ks87R32v8PUJyFLEGE98N9mR45sLepk6qZ4nfHVSq4mrvQ3QRqC9BPBbfcNYoXEAURYJ26",
  "key14": "5eU8jU2WLfdXuMnetJVkQjm21yFQUbbLjj5cXhqqcYLeDDeNLSJBSiEULR8bLhyH2L6wgrVDvsVWX6bK7yokPwsV",
  "key15": "5wqWWQEn53mu2xs8uAtFbMGm7LuUcmpsi7qa1hsZBb7nkBhshXSjez1uw71wYLAmaKwhEAv1kdzJFuEMKVZuNVJV",
  "key16": "3Yydp7QUjFNYJQB4pBYvZsuihojZw8v4tLgsxdU6nuxtjdVLqjuS8xiajdLs7rRKzdP8F74ku6EA28FZ4a4NZRug",
  "key17": "tJhsxNZz1vXqwrWNd7gLAGDk3nun3SPbsYSkYLtmeUiiT9HfzrdVrXoobDgzJ2WWzTCSNNgxKod6oXH8fZrzNqV",
  "key18": "48x1DP7boLByczCDBW3jzH7RbeJSKMwDksqQPuFk97v1GAzY6K2gzmYFxemg9fio4XdAnPrvzKKBpWXerxVMtvJL",
  "key19": "53cdFUwLm1HZM1NaPoDqecAzMTF49zbtm9WE1TiL6qmEkKeawUDiLirYP5rcXiaJsRgkmc4NXB1xMSRx2ZbyWP65",
  "key20": "46HX1CTo8z8hd7YuLUToncE9SvGU9SfxxzxuviuaVfmN2oCZBU3iSaLjgW9S6Cq98aJuKyqhAkFeQMTHARS42DEq",
  "key21": "4QPXVZz9Yx7ZEbA8JxCXbRZB4BVmVw71pNbKts58exwZh8tm7USpJXkXnvhxbMSh6ZDZy99DgcWdRwifjZDAg6Bg",
  "key22": "5z8JT9HmwFdp9VrrCrVwSfVDuYcBw7nFaTGjeEWaySGk2qAVzZqfia9pGwCM6hV4DLYaoBTGe67swVfwUdZCeMd8",
  "key23": "4dRZpJPFWBfzkvrzhsn5oGD9P8meiu86sVphw2W99GDVbb83dUZCu948ZdUw6QipvtU2WEmarm6Q66ogXdzsodpi",
  "key24": "4V7KZeEkbjmkyxbCAD35GEZbL7cJaYQdQcQcjRS4RpdRcTF7Z2GW4xChKZDqMi6EbGDBHrMLXxofJg5E8iptVmvL",
  "key25": "4WruH154uYj6weMPYzjLx2587hdeFpK8w18qkT1yMKK8MAg6BF4iUg3h2xuwNpimfJDco8bH3des1pad4YA6XfzU",
  "key26": "4BUPEn8M6rkYLTFH6xLKBeG7bn1v2UrXjfPDx6UcKjmQ5vpBMgHozJjW3dcQSuiVF2rFTaxmJdnSrKaGy2ap49Xw",
  "key27": "w2F6TXyPRLAQ4LyXTcg2XSXPciBTqSaq2FFSkqttjnUHUhGcDvYeJ49ErzAF5sVkoVEGNTsySYtPHJsqpiTwRyi",
  "key28": "swy6B2skhb2knzPNpzRBjSWiQBjEgYDpnAcDBqWqcjjwtq7nA4Zb2APhPDqE3AkvQwQCoRnqiKUWagGUFaC5zEm",
  "key29": "WZs8rimYZRPwDmDuwgxDg2wCLdMTxPpPhqvbDYVsqNmJ3rUT1ka91b1LAe4bus2nEcUEnYf5XjBE15PWRvDgWsh",
  "key30": "331gApCKpqCNAFBn5hpiSuQ6uvBMUuDxeRarNuT1BjbYZbwSqe7dYY7oVah6MUikHpSr3QWU3JcnQYKp8aKmQoXB"
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
