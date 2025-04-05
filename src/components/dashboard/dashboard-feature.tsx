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
    "37xEpbmyNs8V2DuqwTFNELTLkg5qqUCYSW6RBVDdj9gDe1jA6kZsbNQ2DrabYAaMVcosWiHVrHtvzKH4Vh4u7NnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pKzVcYrSkrjho3WByTAG67fxiFHH18KRcneQ4htSvqb8naKN3UQom2NZMrVKEaRJpez7QhcM3y9d1XWWxBPLkhV",
  "key1": "5wR774k78hVt9oPYn11DkbYnTLtfDvegwjRD2rNkcFJyzBRzTpxPXdYbsiSi4RSuYPZxvUQVtiCawb8mRYQhBbE6",
  "key2": "37HzyYgpjC6Qfk1QgwetGUM7LdVEurgKQGFPyiWZNv6cVPn6jpcM8WDi1HDLuFuNFVHgrieR8Lh1XWCKoBpBcXwA",
  "key3": "5qrDttTbMskMwEwzRMtH8RZCFUqENXcfxWiEL9RMtLZFkKH8N5qTD8Wxk6jwSCXq9nmBTZr6q8nhAKduoYqzhJw9",
  "key4": "3eRAN4mqqXVh5V6an12LAmiSXqssd4GSrUGB1drYUMUhSFigaWDcmgwVc5EZqLZfujTGqDaRW3ppzYxMKDPwYzmQ",
  "key5": "4tYiWT9m9QLi9NAUfzczAdJsfgH5q8GKkEFFRQoqjNyA6J6UBTxqLXSfxnajqGVKb1Qg8xvxqNaBc7FuUVQ6TCZ5",
  "key6": "Ye94Jmy6tjdEkCA6KfYncAXE8zstEBNncjSebkJEBzrvVmcPrUsviDNPE2PrzXuwQs5gvw9i1r55ZhHoMuhQuAk",
  "key7": "WLL2QVPdMM6zDMQZTW9DZznwEvNxDvFShYGhfDtUAUp92gTUv9YNK1zyUH6Rxcs3qgMgNfH3hcR8qaFTqZJhup7",
  "key8": "4WqLqgdy8JP7zCHoMAn4BMmSmV3q2N9v2w2gaftfjV2ho1g5jyoP7pBRtbmYYqbqrN1m47sYSy3YixxwPwbUuHuc",
  "key9": "4DCyFRzF5xUyUbft7Sd3xC44JDoL5FZUhQAmjwTLaK2S6z1KowLhLDiymScA9UaAhcLkgEsQrhFzva9VzYXCFCnf",
  "key10": "3DuRd3PmQXynaTPQNEtNGWX4XvRnExtZWaqA3dSA4dM2R9wgDePBEHuuSuPfoEEq7mD98NXmWTNFqzKf2gTZGvDa",
  "key11": "4ia22FruNVGLSJ5VoLPZSDV3y3UnK5yqL8Bne2dTkia3azpcN4iVQvMDYJSiTu31BUwSid2ZTDq9n3JzEmuiDoV7",
  "key12": "GAF5wn4pYK4uqTVabcwoAfM1SDGDY1KZk3vvGZQSchuyhqQRQnYRA1ts5JLpETygwwRjetAs73viVQXqL1C2TgN",
  "key13": "ArfSDXqgenKZokusncG5cbBKmogKLkLdNSA5gChNhcthDbycELVTG7LqyqwTJ6Vqdtb4R1DJyCnCw51Cr4AAYqM",
  "key14": "46cLZ3QhtUXWabLHhrA6cyrcLiW9CSW5XEvVv1SH9hQWzHAszAaBVE3eCjnxgAs4qB2n2nngqP5kj9BgpmMpNeq1",
  "key15": "5PMuahRe8so2xUJJ23CeiMHp5QHiPZz3TXPYB6rEDbZ8GJHkMMPdFaAStLpY1tPDDfq487T97WLnbAzrbMewy5Mv",
  "key16": "5jyNrC6utDo62xS8gXRJMojDZSA89iWiCcfyWcfZcZFjBYo3ZyFKgiXx1QPXssQPrxB2iHFFg5K5PvCgTXR3CkMa",
  "key17": "4FQQDNpjavnfQxEXiktMS4WrXbNyUqvVTvEQPfadDU6dtcgZyPN6dCkZFfi6uug1MH6RMAi4F3F5KhfCqLiMc3aG",
  "key18": "5dVaerBbJWY6juK2QXdMHC2UgwiDtQgxS2XNPCX14Pc783Y7bUidf79mM7NSf9WYoNS4Eh92gLBXVih97LULQEN5",
  "key19": "5gj2rgoDxPSFuVfJCfxFfB3eSwUfHyUXb55ZVeE9SDdxyxjbSAdppp1Tuep2n5QBddmNfo3rioP1dC1aozbgXbzR",
  "key20": "chX7GcyvHTW7omHgWBgj29ciHxULvXuAJmS6DeUHLABm3T9rwAKuPwxFQ63zgTpUgjtrWqTvJeKCf4LHP4c6d4t",
  "key21": "3DQxiiXftBdFi2qowBv3oir4545BDGNmqUNmevG3cSQVRCop3NV77EeQhUwhwCji9TTtiR1XqbQJy4Z8xxUYEVJa",
  "key22": "5wxD32whVRU1PRWWFz92p5dWr6CJ86pBA9QdA4hKkRwxYDvuniXYMVJAEtvLQvBDWFsd3PeLPzYczXbm85xx7s7j",
  "key23": "2ogjJGXNdfDT8M9KPuTrAuXofR6xykgzriYybn4KmawfeNb6upGhMvYNgw6gtg9rbCLCUfhf8YHtZxPWhGfkCeRT",
  "key24": "3t5Ni5QvbJbJDpDZVeakg4bQX6jwZ2S9TipiLt6Bzrfz8vQc93hr4a9xthWgS8WVw7iumUajvijf9SXBqLwDvZB",
  "key25": "5ht4U3RWnaZHA11mMbBCFeM71crTSzy6LKMDxyNWHTUQT2JQML5ZhJRbfNQvEZPmg8989C44S53xiFwBN5B5mgpp",
  "key26": "VTSY3dciwpbbAuvELT3JvCC1a5SjyGgC6cpnPCYU1zYttHJywhCnsGd95uKxPZMnpUW9d8FghGpHGQkKm7xH9c2",
  "key27": "2PytDrc6DTFr1eKUQPVKw4xtL2Bt2LGCfgPzL16DBWCdYAPtJNvjiR3uoMK7i1YGbKAf3YKqXA5fgpzLANP4LSjF",
  "key28": "2bsQUpHjPeFu9JqGkueSdWqNSTBpFajmECjZc2uAE2h5Cyqv8UqjsD5mtD9drKE5YD86ghak1ABWZCebNv2imRM6",
  "key29": "4QULZYHc4XZkuJWnEzqE3uB4pcpxVUqhcG9hh78EjmQYPiPouPAQMuuciogR9GYv2DMKsFgr5zND6jQs7LhzGYmK",
  "key30": "4yZith83CDRRuDgPYjBnCnCSkoLvt9Cp16nCoyvpW4n4WPRSX4Lc893Pr9MRdqFtmvDsYmQMenpbNXLgysPoKnp2",
  "key31": "4qFmk4SRBJA96HYUyKzGJQzxwbpHGpVwuJhjQFdBzeGb97STkU3eanj5GnbGuioBVrCtEh6nRL8Ys35ZFu5E8yz6",
  "key32": "4W9NRN8tXTf9QnuCsPk56sjL44XQfP2mW41FuSAMQF8hKqHe7YAukEkctbBMhWnmQ4o8akgMQD1xR2E8hg6dfeEK"
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
