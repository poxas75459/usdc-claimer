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
    "4srKQ1BBxLaPkJeiRCmZvfsDxd3sdxLHPfLy7CrG3KY3AnQ9dbFp8qxeqNLzNjAoW8p8KuDLLJPgj8EQLBnsYcQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "244tNtFYnhHekGvfqYwuEmzfrcQpmi5ptnp6JQ4wGNJd9baN9stBz3YMDYJdanuTZBRbReoXxT59mUqBJDJPBswm",
  "key1": "HMieAiCzaSaQ9ztKnX6w8eNdqYYTggb4Kht9qgtvVN4wt63yFUXAXdska8jCRs3UjX1w5hD3xozXoVHQwr6AFhq",
  "key2": "4CosscFEWpBwLfwvHoyaJcKHJLcr5ohz8bMNBLcLkxDYio2TxVktX3CBQhqn5eYC4mckhPZavpHLCH7EbDD4XD4M",
  "key3": "5Uc8xaAdysCBWdvdk2i4CqaD5xEJadQVkhYAmrUhBDZYpPHW4967UE6yi4gyx5xXs1dcPDT9xd2nTnr6eKo3cCKd",
  "key4": "4P7jUdVc3KUUgztcDkzpMAZsD7F3FcPkcgSs74qheYuaV6kgXN2YcvhtV7ikEBbg6KBpHe9LvfzEKmAwrZPUHwQZ",
  "key5": "5smhDfoHRRr5kYASTbL7t4TaD1eUavUzsn2Ha5yVy5MxWaDSfv2xh7hepsUoWftfRLiTAayJsiMZLA8c8gTH7jGR",
  "key6": "J2CmUGSmZjtuaEsunMg5oPgjjqhcqQTTd48yMf5FjF4BAddXsB32JXMFNTmZf63LQAxkABFcUG97UGeUQgamnEn",
  "key7": "5UzhRFuNRj3Y3rDwSAYQnkTsi8A8TbJxXGXqSFhwsTkg8bthaaxpsYKipnhWJEa8AwLAvXRCBmM5FmRMXBuhcXch",
  "key8": "5m2LMytKGYo4eEtFkmhBZXKFpQwxUDeGVJkPBfXFFFE2TXFzXo7gvUtEKTVNdhoNb4w3qK1AaCRZFJbmCtBSZL7i",
  "key9": "wRoHzEqr4dEGrJ5xb2AWHrTbuhpyp8nBVxyp6Bs6yGxThsCGSvmdJbBrYUkdUYy4Rnt2kGNoUmAHMPtUJqgpWqw",
  "key10": "9DhemhpgJf7ChTTzyXnjMR5HhA65QZ2ZaT6jRDPQs3kCifpbiGt692biXtSA9e3zsnCntbX1E4kAJc3K5kd4tST",
  "key11": "JJ3PALn5ZeZfyqttdUeAJ41CocR2N246dovUbFWRAC38CSggPCepJ28VinKHPYBHR9dCH9esJ1NeKxUtKgbb8Tt",
  "key12": "4t6DXdFGi8WgVMH54HSrXtbZP4YSBpe7JGQtPv9mEhjb6rLB82rhZ1EXNgs1Fk3zvkchW7VdNyAHoBsogmbnRQJn",
  "key13": "54kPQzCH51rop8WCc2RnmLR4PmuZ3owDmaHDXbT9xceaEts9K5mJqZdfwdv9qztivAajhotDVGb88Qjiz8Kk34LU",
  "key14": "5r2ZNucri8bQMhdw91bUPTz4xaDKK7xzfkocbLiii9SWDtk2c7TsDxwaHEv3MAn5BHqhj9KAVwBKmGhpgH4i2kCE",
  "key15": "5N3SvGhe6aaAjVBrxVng8bEnLPPKBPYnijNkPdFKT6uGSBfZoZnv6LtSNEtGp4MK5buwAYSqMdjoAbMDCCi6EgZz",
  "key16": "2Z2aXWzjH9X6k63DndzDs9v6a6byCLzF9DPScU7Tw7oAQYkgSHSuKjD3gm5VpMCtf5qgMx9FNdAoYRRW293p6hZj",
  "key17": "2vaCqiXPSxkjypBm4LeyGTb4FvafHHWrBBaDhnHLgcJTdrceZ1Mx18VjMJwvF2wYSgGmhxNtHTLNMhUy35XoqYc4",
  "key18": "5Lza94QTnTrCYydWnqPQ37vJKTzDTq4uNZHn7TgNuR7YeeuWijaUrvekjLHe2wY96f2KoddTQ8EGYWgYXrNqaewL",
  "key19": "26Dzhp97YgH8tfeMZcyuqRayJjUFB5YABz3r2NA915u9hHeeG25gTUZ4wWWGSaMtSvcMdoBFzjkv7zoLdzJvf6W4",
  "key20": "YkYv3YRTFjs8yz8EmyF9PHzjuveisMsUKiupktkvfJSqZHm27vu4YtfXUoTrJA41HwWgMsDXLKqJvEt621qdnEZ",
  "key21": "3jiHyRU3TFo8HaBYZZKvJkZQ84Gygq471TQUH4gqQ5rGhTYDEnFoDMvWDm2PoVeRpqaPXdbREEWrzMjdHuAtHpN",
  "key22": "5z74LBjDc5xrU91Vs6UFYTWhZv9qFAA5Yqfgqk894GwgAXAMwehJbnrydoEHgcqiNPt666GNVqWYLzBAVijqE4K9",
  "key23": "4zjijHwbLqs26jRfAwzNSQtfm6SLFqMTiMj4js6x3Tyrs8ScbAmBJtj2yW5TpsvAKR4QRr53HSxvAdEZBPSufK4e",
  "key24": "qM6ipEBrC4YuSQ42CPZdzhHRQZUba3Dd9pCbtiRng1cCeBzhFLQ7MJXbpHNDeCpnefSPszA6M9bcVWQmt5SH6Na",
  "key25": "37JF9wathQ3SJcqcUn5rVi7UuoTnT61gwZVqE8gmrx8szqJYCpCSZjYv1d4QbdAUbEHrZgKkkAikG5JTTCK5oXo",
  "key26": "22TcqV57nqSQ9h8VhrWKCTJcyNhJBBTyc41hJ6p8UKYzaaeXU2AynkoNpxdrh5FEX4y8akJAXqZ49VnVyRd7WLPk",
  "key27": "BoQisUkNvyp7wLEpcFmzsGYyNdwEvZgr5b6BbezkpezoMaMksH6a3b1UNq78tXjxXqecFDrgQ5BrCp6snjUnony",
  "key28": "3fW5nUKvkf3udZAXEhW6pRSaks99BbNK4FXEgU3c4sBVvueCrWAXBgdYhNoT6HYj7s5MgceRG8UZMNfSTeN7U5Gb",
  "key29": "3teYoHvpSQ16yZmJ2mjQn7APQxxwDPpc8xy1SnqK4T2wXbyD3vwAYMg7gm81woxFGsjdfQr8Psr8bYxc4chP29b2",
  "key30": "5xkAfDKgTsVADmy6T2j2hesrrPHqTXHHnv9adwwv6MrVNDzgeBHZsGysZHE6gFEZJS1kfCQePYuAEGyS1BtVAMrH",
  "key31": "4u83GFtLGbKLXAxwGRzG7ycqT4WRfFhowxrjLMzvwGFPLkc89sZzHhLDNEUwo9s5wQ9XUpnG4JGggXni5qmduBLu",
  "key32": "2Tk43L73gZo7ubiYrX8E5CaM37onWUvkN2QEUakYzKzhLort2eDf2BXwNGNW3tS5L63vfQ7LydwZHmtmaN88RdRU",
  "key33": "3Rvb9vjccsx7PPyds1JH1RW5CRKAk1n2nPXfbXDNfXWwpmxFGMBNK261ytFUHCVff5H58gtCgDfdaZfB7Ti1ZV3C",
  "key34": "3hy95fTnB9BsP7srHkaQxM6nxVXP4FsvMomdxAU7HDXS4b132kf52E15J7FPT3o4Yhm9mf91N6aTxAhXKyLrka4t",
  "key35": "3kCCjtLaZMYmT6Esxas2aqPk5y1VEen2iCh9TYkTRiiUAM9vgvAGBKhbGPzumKNFSwCNFPkZrkQgtWXA3NdimaS3",
  "key36": "4tWTGR1na8Q2Q1hwyAauEHk6gU9r8YEz4GQUH7qvzmUAT2SHn2AaC7JXCsgZ9Q7qtWqhB3odoc43jea2kb6CY32s",
  "key37": "4U9ZsKMEzPFjqzTS9nEGg62ncGfmbXC4gPWPtKRDVJS7tuAhcxsVuWnXbKyHkrc8VDmFwwf6EZdWDVzZZhQvfD2m",
  "key38": "5Gdk5aVHtDsP9wug5hFvrjDfpBCSZ8wjYA7znQJJuUcMSuRzxYC5DTQD7y2anULGBsSGuqbjZBT9yQFpJVpnhsfr",
  "key39": "123D1TArZ4VzjeMujXs4jFdukSPUqfBNHCPz4oqzR9FmZxWp2EXJX26YEniYy6PKMWW6bpZgcvpRa28Xx1PNsaDA",
  "key40": "2i2YiJz5F1FmiCFcGbZwUbZ5iiHv5hsmXXP12UXmSbD99J9j8yA9bQBjt8jxsgB6j6VpQQVh8vfAhrJU5yxpoZrC",
  "key41": "Q4Vk9dhpZgXW941u8jWvtFSLstHbmSZZUsATQiw82Kfi6tWtLSEjswQ1815evNzog73mYtLRrEaXxwmB2igr1E1",
  "key42": "4HomWKH5cQbFqy26CPudU3JzG21pbYMAeVZggCUC2CtN1mmBiUBz6AekW59wfBriHMZeVPsnE1nnZt8GZ74T276d",
  "key43": "3xMiFZXNkBuUKDpeRSUnh9bX1UVZcZjf5cGFRoLQBSJZEsCxKJQgHZGw7mEkhWp6nrjJpGkGUetMjfjCqpVpd1jR"
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
