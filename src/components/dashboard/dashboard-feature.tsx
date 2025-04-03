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
    "wMaokTUCBWNziwJzk31BgbmAxE5ca7Tuboy3AUCvop3bTCnsK19uvqJJtdc8eDD37au9VcBPXePkAXfLUu92gQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S61u5eJGZr9e6KbKwBbt71y5nHCrtot3DgXJ3Wj6g44yQG5HNhXxBJGVdCp1esNBKNbGYybp3e5LXyhxUiHELvQ",
  "key1": "4mr8BkrTiNo8WfbNbB1KurAsv5FGzcxPKY8C7Wk4pt9jzq6p7Gvv5ZWUTC2mUTdNCxwasYxTbydPS3wqFqX1ZSCz",
  "key2": "ueSyYWrZ4Dw95pdhQ1JwEyQvxrnxHSgxivC2SfN9fj69BtmHXpXrmPPJzUTKrwYqtGRxVa24ZnMrzFm6F8kgxNE",
  "key3": "49bYEem64DCYQXVyNv51TLugTudCoqYiikiPEPJjTDXEUT5WgHgPypfNWFJvVjvy7d36HioYcpESvm5Qa5rTNqm7",
  "key4": "5Qwsxh8NgjnJ7YsCMB3Sa1qaxqqHiAuGbAUJkfxk2hSN4YbvyFkHq4cuH445xbDM6A2Ywfpqn3oUu3SxE6bxM7Tb",
  "key5": "5zVd16Tvy9PSjs1Ge6VEuw9q4oebHj7W9Z2V9QUxCrZrxz5YUBgSi8FFQFou3wNbunPvTcFyBNmvekAuCzqE3JFx",
  "key6": "4wULmaPLgRWE7nA6BcPoti78jJy5EuhsmmEqKUv18eZdqXB3qCRJCHEy1rj8VGR7EdnfT26vLFfx3CtQCy4QJrSG",
  "key7": "4uKKmiZbh5Y9BPscT1f2vnJXtGwAAbX5DKJ45maRp4XBnnsteyzUJfEXPz297Uykb4hkn5BphGQE16SrwTZ8Nxc9",
  "key8": "2sSNjSpbLTjpcN8bivSZz55noyQEQRZTZALrjWnMWxHyXtr8tJ1HMV4pk8AugXxRK1Kq3Beoxtn5kM55Ho8WN4wo",
  "key9": "3c99fhNjAgpvch8vohqu3tccgN7PBmeo4BExobEPQUKNQyL7iHRUgGZsvAQUJ7RQdg9pkGdwPfmmK8XeUh6TydEv",
  "key10": "3rFiXju2PYucfxDiH9pzxhes7n43r555UznMLmGCr6c7rd5SWynZCvRXBSN8FUakkBYTeBxjX6EWrTNc6g7AUwLa",
  "key11": "1nr1PU1StcUVPTjNCezBc19mP2qTnc43rMujzbw9uTaGFR4wwkC5pNs6QeNX4WLatDrx7bTcGp6ttwUnEhFtWgd",
  "key12": "4orZmJXkDqwHLYLLzVn9SVwm6auE1wWg8sXFvzWttyEKA5i5S7p2DmKx5w5Z2hrz2bFGv4WQVX1PbR4637vongXq",
  "key13": "5EqmH3Y2YfyAVmFpr8suJmEgHoSh5oqMRh2ZNiRqSsdQTuygEWw3HifFM8E4iwQyMwxcBXX17jvTTUQ23QwUGXee",
  "key14": "5bu2EbLoDfjRVWyMcsAszfCCzD18m4y7VHjD4e1LLvLsUDzvJf1vmgYuGCBcFL6hqycn1JA8ab75cfCNTXQR9KKz",
  "key15": "4VUjBoQEkdLhZgiqQu9qDDxTC1T4FKcG3gfuHDoZx6BoWU38DWER8AGrhiPy8yNCUzWj6B3nwBEFgA9pKy5zuU4u",
  "key16": "4sbu9psgRGQYC5MxqMZ2tfUZZeW17jZHexcWWEDvZNLsC9zsZUbFK1Hy3QNYpVNsrk6Eb7kVCM4VzUmsR7kM2DLo",
  "key17": "2YLKA4Qa6iCHYg6dcptt1FZoT5R9gdybESyGwYcWnpDKbwb7UNjboRfEdTaNSiM3MhJ4r7QkWsURUDQQktne5GPS",
  "key18": "5AYBGncRhpyJDssLXgirs9CrHzViLTij1tgnkJT4vXg3JLJbEEeVQzbm1w76pqvF4J7KHexLGCus8Agi1RnLrWfx",
  "key19": "3EPjHjU9bkKMcgVgSb6uZV2cxZs7ydNrRQSHkvqK4Ky64V5utbbXpScX6wKGzjmDD2uiBoJSjYVwQjRSH8zhNDFa",
  "key20": "4TC9JbLxkTsFd7UGDx12e5aW7BpbPXBDWEHoyLWNzQkfJZ8UnNWDcSqR8mf4T7faL5rQHTSkVDJvJqkx3qL8xYRY",
  "key21": "CMpLf81jQB6cx1cMWqr6wihJ71gvivcuPTFYSbjDnPFuELSmqRB9FPxjnfnXbZfdNG5jya2nGDDawB4zE3XKtqX",
  "key22": "2fhtJxmPNvcokRjrzNo9YCjPVWA5GdaX9HDXezdy28jTji5aNdrbuzr9WUWD9ixmT6yej9stZq2gc2fXL3kURXxv",
  "key23": "2R6nJsuGK5m43xXmSkZ12XkssxpM125QC9NNoG5Q8Vm1MNu9LA2Yz6qcfCfyaL2saHJjKtV6Q7sSATisvsqFc6ya",
  "key24": "UnfeRcURVMaDMMuUhwZU6TyQyFWdj8tu6hkVsF9M1DZhJuuG1ra1KVqzJwogiY3sa937vBMvZDAN71XhPuDihGs",
  "key25": "vuQ8Aykn1NVNxaGQD9HKZAXduh1zhP3UkWeWX3ECGNbxN6UJc8wKoiYyFGibJM464aMn9xLwQLoPwAyZWhNHiy6",
  "key26": "3ZEw4XZvKLW6mWmRxFmA27LMjo5zdeeimWZsasvxF9ZzNYykNV8k934NYYrpwT8Huc2Gyjg85jK2iYVZQY13gffQ",
  "key27": "4BrUzVwnQeX69YqzsFzf6zX1aEjSUF1DULT3s6YRkSFhnBognw91KdY1iCwdxgpJpj5qSoVFiTLBz64XqPiet4rF",
  "key28": "62kew7Y6SP96LyLDjvfqUFif5kp7wJ36HYchFuvL93syetFvFwQVR8Tah8YnRBbSHHEXPEfW7BED289uQ49GhXWt",
  "key29": "3PPdoDqskG2TbSJR1ZXyiUHtDr4K3aQDJpKipdQZutuFVkKfysAZiy475GDndMBwCNvHzfMAGy4xQWMXrBXrt9ju",
  "key30": "5KRrQodhrR4opgDfqFsUu3zEqYsH7Y7Vp3kB4oAT2RpbtQuDgMD9LkDiP81nUSGb32bmCWBxfj9XvfEbVWykWfVG",
  "key31": "5SjGpswDXyq9Yj764e4V8NLgHLxnKjB5bhLaKgcR4ZLuY6AEKTDSALLkcTmPw2ikcBgW2if9hQ4WDmkjhZoyQe7K",
  "key32": "38jKLJGSsWjgnexy2D2hNcWq3L913vPPLVDooCzUz9aTvWBpq61Z2i9KwHbUa6GJJa6FuXAfXZy6Pw4Wy7cN26Zg"
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
