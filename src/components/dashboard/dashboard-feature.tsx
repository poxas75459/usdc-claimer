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
    "VoDc8gqP5arY52cUCAbnkauHJFKH7HWZTfByyNbkgg1WwMfxEpDoeRp66sFvMuGbVB2DqjYWrG2o9JND1eA7y9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b9Y9JDkTCQ5hA9b8yTNCKHkgUpioMANC929aT7mvZtUj5SU1uvcVua5eVzpGBHuwJAYKjWBiD9MyTzSLsdiyKLB",
  "key1": "5kiE1DeNmtgrU2sAsfHhaRiH4SncShu4ZySJRqUM1qF7wGhqUdK3n2ejiCPDtExxy5SmweUrLXMwT95RrCCfiY6P",
  "key2": "5tCacsTTqQDnDABjqejBYFQydaHVvaeBTfMUqRtmab7zbhFEzB7CxSu6XKq2eDib6sXJ9L3jJCEQW44QDkQ2zxDz",
  "key3": "3JAXfmMFftd5wPckYE7m3FBiauL1iT5tpBPPX9CVpnZUPfG251zeKpEdVrzWB7P7JkJDqRsCGLmTqJQeyCjbzQC6",
  "key4": "3LoZWSUKmTqPjtsXTohC3HxpjVFuwZcqceFaFnvYWiA4PF6YuntRvfBkFuc4cU9BaMdVQ7yQCByHSL73LKW3P7Zo",
  "key5": "23An7uvpDAGwU4vkdLeRjJofsofH9pPayiyuaJy2DYgDhANEVWC9qot3UZkeSaujwQE8cFiE6H1TWpXRGWdPaPm6",
  "key6": "5KmoaG1kvk3F12on4BWYATHfZycRogfvREXhYHNmvS9TZyKmP5GJJQq6ntPJPNU2YQwDAXKx7oG2XMPgittDW8Dj",
  "key7": "5tHgjCZGCo5HTFCQ2J9hGh4EXGBm1QVBjPcFbHWb6wZ7fsRPjkKMJK3eWiySAbmjv4yC74x2ErFM1QwjKDsg2TBt",
  "key8": "3vV347HzmMkeL3nNAHjrc62LJFHZCAL9mV9PoHKQzFCkrvFX9Q5iFRNHL2Ku3E4VbncArmWaWdC3Yc6eUkAVhAEy",
  "key9": "3SAcTsdtN7uxZinKFMmmwbAFohvJw8RAM11Psg5YHpNjzakqsbytYpVcgXYpB8vVVN64rgpVo6C3xyRaEWkd93e3",
  "key10": "dHQ9Le2xDmR9rSeGKZiDRFSMMX6ZrxdNY4NqFCRVggzP3Zvfu6cXAaYWnzcCuLL96cjfQVsHKQSQBVZvk3hXaZY",
  "key11": "64k2qHXbPjPTVUNjt8DEAiqjvVvndCtHgMNgGq81oE25QqLkk96v21TiC6rHuqpPcJyNNT1HgBGvg2n6AmrBe9ab",
  "key12": "23K6ohEoKgpsj9rXTt8cXNRccgqTgwHRQeWCRWcAnKkVYafnVRipuLC12XDKdzueJCvXVL8j2wZYRdnUt9EmTBvP",
  "key13": "4QJygzDTc4v9gXBfjdYCNZ45SYvs3Lsi2Tvb1aqtEkUGXKGYsQHBZX74rpgB9RFor1fPQX3HVfmuZkdQWWWuWdN",
  "key14": "3qp9Mc4XFB6mK3bEdiJ5ddUWN8R1iRKoG5SdBMsfFPfYTwJPAjbSzb9nui2T1zucztQgZHi8pgW1RnvUXpqTZyK2",
  "key15": "4wXrno5ZL4CqZkMCi48bDy3XP9hRtKfgaGLr74kmmHomzCYe2N6UVPLhLrtfvybdHyxbpAAt2ZSAaDfEqYBYojAD",
  "key16": "2vGL3GAMQ5k2wzKGp8g6EFjH711c5q7kktcoWTAAsmYRJUY49HzioMaNk1fh5wzcFfUrLDN5y8Se73A6gzZdh6jP",
  "key17": "k3JRga97wcWjFw45nH4FG5pqXXnXfP6RQFxxTWq9VDbtvtqua6z9GmRW2vdkAzjtbMfTMKup6ZY7yP5ZEmZ3TLz",
  "key18": "4RYBhbTCnBFNxL6NiQNWgCezmhASSg2NJC37Q5uhc7jm9zfvAus2EuYaMnQaCTpjfZnATPxcTuDqr9fXDsWvUC8g",
  "key19": "2ZEZaPNk2f32mxQUZKjeXaLhQk8TQ33A6Fi1BBjo6jomxvdcr94wQvBRuWcZMo1YpyRmGV132os4axX8LJL7UjdW",
  "key20": "4knQjzH892sK3RDHfqdLJepX8frRxNzvNH2EGhEo3n8uj6ue94qPjit1VsAqi4zJUYF6AiZvW3DREcuDrRG5Q2ou",
  "key21": "3Egs4PY31KF4hpXCeuVujVHBKtFsk62MwRiB4bJvqmaCk6yyQvYwDNftgc21w8uakAPdRhhhvpAakdPnrdJyjrwY",
  "key22": "2ZQEyfSE16r9PxuvF6MT6SASnpf9reAf9wsJr8vZ9rUZ1FGPxiJjZHNEMNYnUjFP6pdwn6hCzSz4qWE81W1M6WUB",
  "key23": "bQWbMQRvC6NRGS5mrxGLD9LGg4C3vMUH7c9CvYdafGdFpPPqJAaWUuMxBzCoXboKrkrsuZdUrSn4CbVxnyReCzY",
  "key24": "2ExSUbzKruHE1kSJFnwSkcK4wpnSUegirQAYmTkeDeTTWdGxv8S82ssR29FEgnZoguaorsJ9vFn5yp6wUFxzwGbg",
  "key25": "2GMS5PmE5mGAp9hudnuzYMYRSbq9Vj92PmaB4CKgvfnienP8BZ8oqcja2GnNtMnUh4YenXecRARvjcyyuhvFeP3k",
  "key26": "3uSowT6qPecUuiiwtQJCqNAF2mR8Sh67Q7hK2hyif83oRvXdCoaufLfgG2XSQyuUTmhHzfWV7uNiVqusrhsbSE9N",
  "key27": "42ynEevqxBjpMbWQBoxwNLT5daWTdeNJMJXsi2xD4CcWJ1NzGYprESATjHLaRULBYvUPjft63hiKFXxTp97ojygz",
  "key28": "2RVEeDNe344P551G7N7thUe8X44vqeydgr8hJqdCUCAvMwT8QveWY8y5LjRkQwx3YEjaT8K9Ci4oTXEkVKuZvqfY",
  "key29": "2JMnYbBwcxFNu5DFjXPh69QYZocKJJ6xwB4JBaqXvgY8Hznyt8Q5Py6EuaQevmfqFS5gfYBBuHH3Jofhk4o6ek8Q",
  "key30": "RnsEyN3E4eLZtipv8omwAdryReK6Bhmy55VWFpzDkEg2iSC1EZSuYXrNogtuENtFLbHbNpvKhi1ukDt1PF8ihG5",
  "key31": "HEBXzVErYYA8htv4cPooA8uPgnUiKHmphPpPbqKZDEXoppqRWuj6qpdoSrBW3Fs4uy6fMAsZVDepk1HNpGqarV7",
  "key32": "3UWd8brZxMAqXn4QfM8fH6pqQ4w8kk5rwsvrDzwoFjBTByvqs74Fqktc48tS7kvTVj2e6HFQwzTRTWGxUyz5A6oa",
  "key33": "zxu37rbtaaLtCKQVHNZbL1geLRhgkDUSY6LZv1izeRa7VSmU4PaJ3DEAf3rEh7eN6pM4NwFaHY4eqbDk265f9xL",
  "key34": "5fgTSZxUAff38nHqz7JyS3W6q63JbDRFqpKPXbD36W62nD83yrmDqKbMu6UKvZGdXPwrzdLVAEwWbyWeSV3VkvtD",
  "key35": "4hrDqdZiTJ2V6nf2XyMykmDEMmpjNmTLdvAKqZWhh6Vkg974amtR9quAGsSsBMryjukoYHfmG9whnT2zeUDURup8",
  "key36": "2eN8VLzM9GJJDZH2ACAhUUpamLZqBBcnVvE3d4phV7dhoh3XYYS6f6ZsdoVpc654TofxAgobK7gGKuWou57KDyaA",
  "key37": "5BDxC34D1bb9Dt62CgMZGPvjbzSEtvnJFRJxzm2BdWkQPNdZKWH6Fqycixs1cSNZtVuKSJoacfJ5Mbd4SQqJBT5y",
  "key38": "2tJdTLcJpJUpALw8U1DrqEDDpnwkpHFz84KwJKZbFFmUKRJCNWgdrGaS9qsEKRBZximQFSGmBGQSkVhHR7sKQzBR",
  "key39": "2KHjPueZmravoKtVEYUE2kFpUqTYuxjzbWt2a9mSASqSyid8cwhoXxfhuxmEbZYPbqywpkZrhGesuMx85bHTXh6J"
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
