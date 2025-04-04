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
    "oyG1KybD4XPpu7FGbBgvyXRvfVGYLbWFJFQv3UZMSAqnBQointknXsGsHxcj5DMe2qTUzXE9nnkWMCu5Ku8XKJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jmpAHbQaYLtQP8tdd1DcDg31wUufheFKU34PfzX1jYyVSF5XExX8sD83fCZodJtwsiisKPJFfCAJfbiJCfP5cFA",
  "key1": "2x3eerAscgofUhU5GH2ncUQ9g1mdHVMTbquU1ZMXxVNGs7b4dZRa5btfaDvvQAJN4dXPjS4e3pHe3YUEiqiTSgT3",
  "key2": "3fuGadWWEh9jJvQjeNfWjLGRx3GB4DNx6ZXTKqrLD4jjk6yYKKw8u6byZA3EwNLJjfwhgs5ZSBeUCZ9vkffnyetD",
  "key3": "2opHqyP4Dgr49ShErAvptxU6tNsR1dqGXzWNc7yTfpQ9q529hrzs9Fg1MJvgDxDA9AteaVHf2NbmiBimvdjRtVPe",
  "key4": "5S68x3jGRh9QuYtxpERKDvgGZCfqfShqvycpSFFBQkgcQQGScJvcAZ8jDJHZgxvQxyuVET3GQSGi2Crf1Eru7PmE",
  "key5": "24wpWS9o8Zcg54SvwPKAc7VSAfZq4ewnR71cDJUbAobghmKEKXzbLTa5mP54ykYQBFSqsKJsRn8j8fbtVSNmSesE",
  "key6": "fFp8G1iUtsJLLwydqG4mRAyMmJuD9gZznvH4mLCgX9KPjNSxNazqKmEp3YMWGBQKEHaEFdmCZ423TkZBtqnT8Qe",
  "key7": "398ejSnWsC4wPaSwhvvmMKhxDWbYQRrF6ASdUGqrGTK1t8XsCbUv4NmPUFQT8F3oTPGA26YT2Ej57KAqTTaaPmCo",
  "key8": "4BT8WjkHaZFE9mSPkUT1zKTBRWty9myfBmNTTTw3nsYPnnbNrmULr2GtvF7gisqJ6dvx22snWYrSCJxRpWRNXkD",
  "key9": "5KpkQfmgsxS9RY4bfvURbQUauyFM5dbJnzx1f4RttDbqijNtfRFX3uqMveJ76TjXxd42DM9pDXFWgjq1oYXrGJXy",
  "key10": "3fzfNFLBjZNgDRuisfJEGbuFRvmyavATFGEx6MAEzrnZrEGcBpqjsDQqY7EPQCnCHUTQATbRJLNWhbKgzKqwPg8k",
  "key11": "YhRB55p9UrcdWwSFRyYjNMs498MmEYzpArgoRUAMmZs2M16LEChyUnEZr7NhmhVg788jbNUzf2e24nnZWBQmvyL",
  "key12": "5j5ZF4byaFQxjjGfPunxo7qS9hyg3iDdHBVn13XLvmteEJwzNMEAkHjCx7caDEh8JC48vxQ8R3B4UuubyyyqqqHS",
  "key13": "5zN9wBtRMDKEoHTZRxdGP76AvpbSbm5BPrLHy4EAd124ZLwXsm8KJRfx2eXqNAbEFS5Vv8VxUe17QmxUMv8RzLPg",
  "key14": "4KtH6LqKZu7jW1ffDMejXRL5ZswawkzXyCZ5wfjKxjbHu2ksXdvLnDucz1BjsRiZ9nu1DUBhoLx3f7H74miZoBvW",
  "key15": "5rfjwqkFKdPuCpWRG8xeAxFgL1EHHfk21HTwWFcPepCxpLyoVnLjg5mMmJFZHzuXVYDhtC71o6L1rHvKnaaDdUKd",
  "key16": "24eg94uSdxUXNComgsbxUJL5kTSAKDSCYAEVzag7Cu3XGPCHyLrx4W263iHb4U31C4wYAnUHyGgMYYZf4zJYHi1z",
  "key17": "3NkuXUtFz7XxPApZu345eHiTKGX5RYymeU1bJi6xEBvXRc1rwxNmhHXiHTfhgqUoHpbZW23h1TPgEz1DNaASPNPQ",
  "key18": "DymswmhfRcTzNZHqxs3HzDtrcQ7ZXUE6mLkELak766W2gvZfAjaWqyHNNcLN7iUJuWybRVcCbuq66kBTw38gJGU",
  "key19": "3cvKbdxBXnWaVwi4F38kXVqgmwbrV2rKp6EoZEEYxMD1VipK3EHQR1XrzsnNP8vqDgBRLW8ZsoKiVPoZtsxCE1jG",
  "key20": "4gkpjXbwUHvmetaorEoRzj1i8N4ikrVLfUJ6HhR46axCFwp4UgQZLFJMaagKM1gG6jrLGsDujDUbyDSCGovhKTKn",
  "key21": "5oPJi4dpyHARhr26z91qgkdCo9ekrRK7PJRMUXjYyejAZKKU172qzQF8H7rNBBJoMTC1GkPzMMuKSayRgPkqwDg3",
  "key22": "4HmR3DejaVswQEg9tZRH32y6gPdfizcYkWe6zPPGPA8hTCFbDCcyEvLjxNEezoKCjRbkR3eVpz4oqAFNPcRadDGz",
  "key23": "4y19PjbDq2SxMzSRJCR72R2bzXi8X5HdY2zzfsuRa41UmU2wRvkbTK88vr9fzT2N1HGAWZepAUmEQuUvB6m32wgk",
  "key24": "2e2EHfRzbBMNuT6KqYoNMWABoaEbgkpLTHcQtTEFDuka8YShuW1mF3Utz9hBmrKVBgJw6mAWchPUrRxehDRP7yoC",
  "key25": "33zeDoc5asnPF78bkS6chzfUJWh81gHZegFRaSpg53YHGzmji8W6BV9RfqkyqtDYSQWpNLJSTyFk6DuHUBBeibhJ",
  "key26": "5EFtkxLdf1fzNFmeS8p297x6ZwjqyGUqLJTyNSxfr4ozpKRdMZ1YnF8iJtW32BSKQ31jCEg8eDEpLGqpBp3RwW69"
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
