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
    "3XT1Toswfy4kjDwygn126pdXkTJk6BdMA8Ftb2nVTabzBUXf5vLHZRaEJLEKQ6M1G5nzUQSKXP228ysCuiFHz1uB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TePYRPwC1Y176u4uih1ccTGeURUZZeFKQJTo7wJhFu26pWA871HUU7jZE2nkGUfMLWB8vCLs7VHJpYkCNrSJsDb",
  "key1": "5KqKYmmg4xHQuBJYMahgzjDBEDayHpuW5S4xsbXqw2xvye9zGxeMcYcoF74QmgDYS5yveW8pfZLGt99A6DgQrivK",
  "key2": "2Czr3vbWxW6PmCuheCDFPvbDsne9LwTD5dePdnrrcBycic5Zig7vyrEmc9byY72k77pECgD5UkAz6D9ZYQ8fVwLk",
  "key3": "t7BSPWUPHKFB7CsBdB9RHn3Sc4ArzHZgyGrMTzP6qGQsA5kyJ5dXz8812P4ZRCVtn5r2HFHsowWLvCQ2uiTBYc1",
  "key4": "2nGMqoEzNqkUeUGxruZnEwG94cztNMgPtSNSrKZDU37eX8Q6RLKoi9rKJJ72qF9ouDn3fxj7opApiRjRecAWahz5",
  "key5": "4eXcopaEHL5LQ45B3sxjtwtG6S4MZhR2JNyWYLsS3hD5if36Fc7B3pyWjkxoLNvtTrJKT22Air5nEMsrRDYE8C5x",
  "key6": "43FKo5MgFTeWMoDL8P8vqS6S74Ac5EFBLK5SY9DjKdAfvr9nfD84utZQu6wxDRv5Yp4QA4tcJEprP6wKk3ZKR943",
  "key7": "4b26xRSVTa8BvX9mm5AdNaHuz5uHzaPjg8rbhCteYbdo2gkTDUgq2MnCcjSiKxTmrvRQrbcpXDVohoMCa61jQUvo",
  "key8": "4n7vZsA9PDUBWsLJ2nqFxDoPAVG6VZbaQiZ1J8rFb4VdWVkaLhtr35XShxSNFDx7Cictq3umt6NPnBHGseSqdPxm",
  "key9": "4cNQ5TKyGbwCgQREREmYeiN1Hs3R4v5MRmtgA7EAzM4Y3HpG3uQ3wUCrw5vHJJWDCkyept5QU61g5pEqdVAYi7qr",
  "key10": "5EE1tgmTwHZyRyX2KdZmquEfiDaRfkYtZaSLD1gA68f4zKE5tbPqMvUUyeJTQw1yYdog8DxNPnojQyCfMScmKsUf",
  "key11": "BUFdnJcbUdxqEBMS6WbbyjFnw7Ubikm3SSow7ZrXdyNhXUsBqjCkNz7N5jhNmhQHZPkZq6cedoh3KtCPwwUWTrb",
  "key12": "PxXz7wYznLMARtXYqTR4A1pVcJzLZL372vueSNyRzsnv1ERHpAFbZ1duNiG4o5QCR2gWzHGgCbMoEhrtZWk7ffJ",
  "key13": "3FXXp6S5NCvtSTwWQLYy7yGPAh9t9yMuM9E8GwCAXtbE7CFwwahRm1sBZKBrhjeeFXSPNuzribQGNnZURdZog37Y",
  "key14": "4CnFW7m2brzFCWYr4mcS9MLkavMtEGEGh7GLt3kcYBkBuZcWi8ekAKZutYZfcHHE2EnpvgcNG6dNffRUbrSydjaP",
  "key15": "4mTDogGw8zwyHf6LGDTPEkcSd18t5jVbcoMa3b7gP5fQ8YJany9rhFFcRy9xr8VdUB1hFgLhd1Q3AaJzqvt8xVKh",
  "key16": "23CXnsxpxbKg3efFZTkSi2Tf1xQubD25TRAZwhcT7QiM7o531P11zqxh9shag8FGVVz9Eb5LcnKzCV9LT8bTg6hu",
  "key17": "284yuYo5A14s5KkVqrkzWhuKxYtwKnMVBCA4KSoRSPFu6wp84beaigP9m1JPWvqaCwUUU3mjudybvEnAGQYCkgK6",
  "key18": "2NewB2i1KqKeoA4UQivbVsfnam6RHvRdAzZA3gjY38Wv3UsPhtXpwYhQ2g8S92npp7BmGdNRr4iUP9h11pMLSGMY",
  "key19": "38RL6n95TKNnLXzBtdxpGCpd82D7iwWiTZsevbywx8yfNqFBsuodL3aYvdPy6TTqJ5rrAkijTPQH6mAsn7GFrfMT",
  "key20": "38Egq7YytXgdtk7e8oixJbu5xdYjoiEzZF8sdcUwWYzXRFsXX6LkfmrYffsCNo3vkxBgrbGuPCd1P9fh3bP6hVTf",
  "key21": "3kBvvvTXk5Ueh9exjqzzrKL49zhHJ1nhTvv2m2C5icFpKjyV5X9YSEpViEJP8sii4gX5JDq5tLPDwCGzBfdD8x3D",
  "key22": "423R2rMGiCCisLKp88rgGaT8Fbk7EDPspDL2w9mmBo4NwRYybJadMTd9oc9r1MAidgqjfd59ApEim33qKTWYk3gw",
  "key23": "2nm6zV3WizKxsSkruC8EcMzboPHm43VoihNyW1mT6ERGFBCMrsxWhFNd9AzDN2JqD8n6cWEHcHQfWbdY3S4Az9sg",
  "key24": "2G1tvTBWW1SwY32WfoMys6VMdXr2QZqtKADNTVAek1ZvvxFDMSYTRsCkmUJhmzjtcXxG6SxKFmMucWugSpNFmhu"
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
