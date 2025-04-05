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
    "2fdBWqi7VvZN519J4yUsGJzpcQx5yKRgX8YWxirwwNbcGNFcqzao5Cixufc12WAiKWu75V4Q4e9ju8MtdUQ5w96u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zWKeRm7MfMDH8TMP8insv8B4kYzByd9RHRVR7RxA56rRET3zSwuuL93nFHuxkTSRhsA4H9KT7LyAZXJgjvk4MC4",
  "key1": "qKYZgizedxjHtKRshLiUEihMq2oetX9UPu17HvEqLgex67iTpUtGU4P6RhkGoooQ48uFiasrVGersexF3WHuabZ",
  "key2": "4N7jDCZnnE53ty12xXXUeWHpL3WrQDgtVCktWiX4Y4tj7fbEZ5LTV7KaT1t67YJ1JFxcMJgKvhQgyuyTobAm2xrL",
  "key3": "3juDBgNvG95satWK773B68nNUAmgAbqPGpXR1ngAyBRLMpqzWUU2QqS5NQMQrhVTuY7mtcu21k64eQ4sZz9R5BQK",
  "key4": "FLTTp19gL1F7afQ5GcXWihy4Cb5NAdEX8Zp1BNet9BpLJNvsdKH9rf2scin5F4shGd4M2s5DZr1FQTViQYkWVJ2",
  "key5": "2y2GifH8cARPw94LXebHQhZUKybU56thF7vAKtRLJXaoqywtPDAZHPsbNz9keZqDa4uSCcnBRj3nwZN8LXDeCz8C",
  "key6": "5vxqt7AbkzWnARhnmJnoddv6qrigxeze9SG2aNSRX8yAhxibLDy6qdKjS9NYAPeyfNqiVFP1S1J5k2w5xgpVeSXC",
  "key7": "2fw5DV5ALSFtQdLhvxEFdHC3h3AAQVLrMjdDf9LE5yK1nVnhqLuSi88h75pvbdRsd1N6bHJ2iegc4vzMkRM4f2JR",
  "key8": "5VVy2ZqyvFjYAs6XKVKNJ7EUizSbSSfwQHz6nk9dZv4N5xuuGS3aFZhPg8877hubeeHSAcgHPftfMYaujMctzuXK",
  "key9": "AADvirkbRcfhwtScH5K24bVG4iqFPSnZf8BtKzotmkZmTX6PjFT9J2pUWpYUPdTUUBNw4XiHtksWhSwPHzwEiNk",
  "key10": "2jXLHZU5Pm6K1QbijxDwa7ToZVsdJxp3VFJeQzdiaLzJXf11TccS71bgEozUC46GefgV7E3yYgR4N3bKTGabfF1F",
  "key11": "3iPQZMYo4xsp4ZPMLgFDMBmV8UiK2GrBaapkfuNPx3JwSpt89zUrKPhNYXgCGvYqyafxP5MGSwHH6UDeebvTWehN",
  "key12": "4f4pbtg9Ko7Fr2GamWSJeQuFA7y7qgdB7wd8BDZ3fbJmT8mf4d3MjEtUQ6vwUEuYEYmm6ZpTZj45Qm7q6RsykCRr",
  "key13": "3aEk2ZstPSEjTp584RQYt4fHt8GsoecE9K5LyU9xEfL5yQAJGFjzXVNTV3gmPAMdGG8vqVG7xyxYsVAMzZeVvSHs",
  "key14": "3HfAHdzEtuP9wbt4giYypL1oCBaRvLiGUa8hMVHeUntUxuKF2sTom8SpZQskNVqXJ61YgWGoze7QM5KveYSFPnnm",
  "key15": "sMq4YYDwPsTYzHBmGC1zso28dY1DFnUbn4sDSuRHXKZSVoyQwhAgPeCHqg1xecycKuCL6xYWZZiY2jB91q7doCC",
  "key16": "rKwRGhTan74ufbb2CUNYbTjEJf3qMTC7ieVEV9yBb1RCJqzMsC5SY5QjWRe36FU8xQWxgggcdbv9fB2LpJjiDB4",
  "key17": "2ghf6ve44MkRbtMbThHccWpdCEb5Q4v5MVW2rDTkjWPwRRGpCPWeTCYh3xHuUBYMckMjxJUC3oKPZrbvfp2wiK7i",
  "key18": "5p7KPLRQXKbmne3nYLebj2XsjPcjGWQG4WjQF88QMaeXWWymtL3r3jBXWh3hSHwaVDL15a9U4Z5qJsUP5ZyizyDv",
  "key19": "4AEvDC5sFjEuGQi2Bc8bKEuEDRsbLmhfVASbD6FryHEHbjPgFTSARTLB7oR4MFcd6T4U3yvtiwXV5ay2cV7uZE1A",
  "key20": "5WGwf1tJUyV1oirrqKyjs2RedR1oP12mdVdg3y6btNHttJn76CL8hnfSaeWWtDwqk85KKeMPRddGSayAazBc9Tpb",
  "key21": "KiNw13uYDjXiDoGYkFJTNdxxaK8St8DgPhArzfp8j1LRgs6aMtjs5coeZqRoDuKregReQcGsWF4YKhjUaw8WR3p",
  "key22": "RU7Xv4F11QPmTVPPVszvVLNePeuN2xfkmjX3d9ajEBfnF6oesVqEAPQ9ARXWQDDy64tkxyLDeo61xGw8fq7LzDe",
  "key23": "6dTT3g7fSZ27XeB34heHvRK1mcn4TU1XCEmzH34FFEptG6GDSTwTWCFBJysBJjWPqxREjqLwzBSH6LXXf2qPQhu",
  "key24": "2dwjQt8jDiCBwFRw9UbUcTedT1m6qvG5Y9JG1T2WGSqeT8MENyNSgAEU6BjPeaeUGXSnbF911TSKV5JScXVpSmo5",
  "key25": "5zQhmAkrkTy1oMEfwc1PARSGWn4hTabmgk7jtAMG676BmQvzB2FEdggJAy7rT26L7AvFHb5bsPqDE99ZX8gYG8x9",
  "key26": "32mbbCLpTksXgo4HahEqnUnz1qjrheoxMpo3eazuhFD1y8rCoQHa3YjLWZEfyPbKxN66KLmGvqRUW6FbxBAYbh86",
  "key27": "4WNSsqGqFQSp1Kn1EZpkKiQSdGTLqNwLaJtdfs7zWrraGgaY6yJpBUJpUBFRyJaH6tdxZuFddCpM1PGJ5VNpAyUn",
  "key28": "3wtW5PkyeCcQnsBKVc3ygNnKD64KF1tUCHcxH8NqA51gwuPwUpCwGVSAju5Hwmkts2yCdt5zguQEvvywwgcEGC9w",
  "key29": "2st9WCJPffcSSb3EvtpNLNihHWVn8XTwyfo2Ee4MqHswAKX1NUyo6rpXtAT37vPVjnmmzgW3taXbdXnN1VPQstz2"
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
