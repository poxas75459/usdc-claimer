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
    "5F4xSVXD4AdZ5rMZYGhrrL6YpEpXVRwTFWCQVTMmfmrXsPqHqhYSMs3oFuHrtrF1VawYWDWrhi6jLkHbfWAH8h54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WKFv7dguuK8q5RonG9ZgHogMH4YV41kbMsE3KDqfio5osLzipgTF42oLABXxdgjRSAbLXWRfQW6fNiubrXENn9b",
  "key1": "U84CyGvJQXKDbxTBiJRVNi7neZbBdU94euyHu5si8uKY2WW2AMnEuwZq5VFtcZQc7kekp2SvLrPMUF4KkWDE8YG",
  "key2": "kxtnjvsVX5Cx9oWW1CmaPcHgWmPKU3Y9aQtEJFbqnupz4fPLXafvefJ6mseu9zFogx4TuTTnN8JcVHSVfGp9sa7",
  "key3": "4PqiBi92fQQTbYrfn7i6UsAb1KaKLvttfUA9ZTvPoQHrJdvXwcUSBKLHiPrH6D1Hr8ku1KY8kCuLzGcMcUyg7Zmw",
  "key4": "2dnoRSD21z1pvH5Mv7knUyxaFhuzttKCr6KZRQSm61yXdPuo6qS2WNgPyYamvbhQwTD3UTXR7wJdJKadAV57E8XH",
  "key5": "3r3VqYHxhqCifkV7uq6Hnmx7XAmPADNmASPwxjWFdQtYaXfPhAELVNoXyMWnPRZeUe51Tb4xnF6TQe2f7QdQYWAV",
  "key6": "5LPX2fLtzwncJoFubUgK3vDfvrQGNcsP5N4f9X6MjnATzPYom3ZxbrMU6AvJz1TE5NBCEZiNBRHAUxGGn8fvasnU",
  "key7": "9VAKZjyCtvwntesVWoR3BsSJvrSaAXVqUKyYoiNhMWGBRdSkMMTY6h2kmiTdYtWrWYH5ZkncSDwtYiXoZGiYgod",
  "key8": "2TzkZTKf2LXmgxoHuRQJz4jShAbGR6sFELiw7FCAHqjsA2U4LAdg7EkkvHW2ku1nMezkxpat6xeztuDmmNDJa6kZ",
  "key9": "S4eiPHJA7yHRoBHQuUKQ5hcmDdTBbgzheYmFteHd5vfHZhuV4QgmqJnrXiKyzE2hdRZTnvbtaRDjXJqXrLLgpw8",
  "key10": "4sXb1FmWBvM6AX6mV7ZToVdPc3gJi5bVLhA4wA7tB2PP6ELvtjzMg4K8tZNsVde8A5ohVfYmeosa1haSYw8kkMXV",
  "key11": "5HJnMZ5yPtSRdEQMn17wqF6f81BnZvHeMxqQw78oxgzD2pPD7bTuuhfVF8pDvXgPpoDrnamJqjWg5z1LK6ufxXk1",
  "key12": "ukCak1iTjPji3z4nh54pGyRHf3BEcB9P66cmAP1vCQb3eV5MZDKULfNXoFTJ9NdzCeFVcwiBB4Mj6mgh62EsXgZ",
  "key13": "5d798uHdTo17hYVLUYWD5RBz4kTeWekpmLCoEyud78waeQDxEfmuFNVm8dxadPmRoQuUzdPpE5gciADEW6ZzsrFu",
  "key14": "429UocbNEUjxonzU34kC9dxKybd4a6XZHK4G9UsuAtj9m1Hua4vhx3W6ypzD6JmLExpMLJjddpWBtUDxuo2bcari",
  "key15": "3cEkNsS3Yr6chzaTuhkTXJtRtTeg6zYV9vtLsVG79vxW3MQUFkSFb4sKVdwcecVNW8iVNJ9QUzd5yhojM3Nevbut",
  "key16": "DgKavkH6QZrruuDSMgxthADMvHak3WRGY6xFM89eMTsToWm2vahYF1C3CrkvMBee6cpHeMRFcq7tjvEt9CgoEuu",
  "key17": "47pU4QKywnK6K7JTL6zya534TtE2qERNX3Uechwdp9wg6Wtxm7nRKHkk2qfkP1ZcgieVJTKCvBtwRMATAd57bYKu",
  "key18": "2c8RdGddsS8M8ZjdXFzeqrxmGbBBu4pvypgs1CMuSirghGLW17xeGvBSibV85Uyh4URhmer8qwKGSSUNSRrQkM6r",
  "key19": "3gxGvFGdQp6MoKBnvyvdnpXAqncoNfWGVGz8hrUE8HV8QAY2KJkos8pLmqTE6bwumi8kdGLShinYTZy41maC8hZ",
  "key20": "2S8QKW3gRrtb7vZeZgsmcwfi6xgkSgvejCwDp1srC7fc6T4xQXG8iJZfHCNGw3Gb4UHGj4nv4AqcZDeuFU8eXELP",
  "key21": "5pz6GJUkBquD9mQgH2UQzR7hc3C5uo3fFuUZcjwFPzGhSAQwDM82PNFLTTRkg5DMWsrAWat2BshyNwRCaMCYdVKy",
  "key22": "3PD9zKPYiUQFMtNT991dBuQYF1zXxELWvFtzX98tGYrDnKGqVt6CywPyq83aYi3fdXXYgwvMhEkgAZzh5ekSMdrY",
  "key23": "5umiF5dvCyxSaYakDoZjRYsK6T1iZtNJAJ8GWMgFKatMQKyqsSgQ9YciQQpErnMD2WZxd1Li24C3FxGT6w1qSmLS",
  "key24": "2KsjzAqUshykynMGZUTcmi2N2wDUsWk1yZz1X8Fb5B7i3aEU73Aa9pJBxCiwfi5XBgN9iHsgfmnh2PMd3XC5YouP",
  "key25": "66rtVdrtAnZbLpYwWUgjxwTkEuhZksn8JvKi6kA8KRKg3dAG951QkGCAFR24W84HXx4AyV9AbvJbe4prF6VDQfKV",
  "key26": "39gCh4itq9rsH4cjWbWjuasGR8X9X8uPmkp1jepdGvsHBigDuQ6EFqQ99ETEWs8sVMD6DYH5Nsvi74WnojXWuemR",
  "key27": "5VVMCaDBrKoQ6oA2Ux4FsLomqm6mWzfR4mmcA7TZu9pAkXuLLqkkMoT8vTeHhM6vAspjKBPJ4rx2ckimLxXrQss6",
  "key28": "VLXWuCvTPiAsdhUuqoAhVQPM45QWCCWirwofYPiJvfpBEN3TpyMYxDWFEpWHu3M2Mv9hovmmfomNtRam3T6QY8W",
  "key29": "318Mo8NJ5Y3ofjQ1UFuaB65Fkb123juGth91NGHUMJd3a8tajU3nCEXWyapUTvhNFCZC4wrUQVW9nmn74Hzik2DB",
  "key30": "5H5PLAAd4HKiJhQp2Wa35GSs6ZqtLKZ6xspEcKZV898c8oKysTqiHcbvnzLADWknSHTJvvE2XkN1XKKo7KQWXuU1"
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
