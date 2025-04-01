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
    "2jq275Y52AfhXPPd3TDGbyFY7V9R2HBCViJMsdJQvzVSMc4FrDYQFFvYMJDf6phaxmp4oyMGCJMEgYCMPJxcYv9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J5K4GbB7Usy27dVD8HHgrwL13BRVe6ns4gHnzyuxzEV71yK4R6HvS4mVGhFy92eBaFpSi2HtukYdGVHZKwcYA8H",
  "key1": "5ApMZWAxQRtNxjLP7obkadbsJoMGyr2i6EDmsXkQMbkopbHEYh3A2Vz9T4y4S1Vqxv4MxCxCH4exSaUxE5QHL8b8",
  "key2": "384159WEmbd5LHicgjfYgkxLPNjenbavT8PsXrT2tUb55U8wiNzjAeodwXbkTpU2MnKpjfhjgZ44ci4E8dzz1MTX",
  "key3": "ZEv1De6gnf9hfVkvdXVXafbP5PXy1FgXzDdKMYPhfAEtfT2vg4dHsqD2dmKRCu8JnG5P1NnekAsjMpJZ6zGPv2h",
  "key4": "3jqXvpYMZqYRuCd7uw4qoaCmDaxEeXUHbizFP1iPU76kDufyXUB6TfgULoq9kgfEHjR894SzWpP5vwurgPjja23Z",
  "key5": "5z1nXcvo8kZCXnm63MHCuHmnYnqdXsCMSc4bpsFRRc9Xt34sN4jydTVwt5JAxgxE1JLXfNhusjjHMzsM99V9bzs5",
  "key6": "irZKnR479tNhKspGyxrzkrhFD7zNPbyKujt3zL9MWAtcMoFMaYGTtWYJ9kmPWg4Ea5emMJWdUkHsTJqYTPvFzpP",
  "key7": "TkRroiYKQsNdn7Yu7XJzcMHvCDkAniF3Wttv96wDmRHCRQfZN6LpNPPnRfjCpUDJihyXECwLYXgaR7X49UZcfG8",
  "key8": "2ieMtXQkgMJhK1VEV62Rn5rKhqQ8XzNqUuBhzct2N5p1mM56RuCVRK5oeXmmMQEuMQyRxxzzn9i9jhMk3R5GHGyH",
  "key9": "61JSmBgN6DT26yFCPijPbDwn7WQrJkeNb4UsN7EMezDYmkPtsbGw5iqyBy9Rf3GPkKP2udvMhVxt3dEtjcbMpUk4",
  "key10": "42Qbb9zt5DRZqBNmr5LHgfmffcZiPUScacdmCVLynYxYCsi3pbQyfuWfGc37Vezj4RfSpKPzk7ouL6ZG85hxboHm",
  "key11": "YwYBZnFwRfbfN7CJNUnzztMYrmphTGJNrcvDZein9VkozTnDSNSrzo9mFk9etCL9TRm5GLEo6922X9sFQvsHvbE",
  "key12": "eD9ygro8k2BQTP2sHm3EmnYQXLTbVohdkDAvcvvpP8JMaCEy2K2WmUDGASrZB9UZ7CndBHvtDafZv7x4LqNWg3z",
  "key13": "4tq5UxsyY49hkPcsGdvTA4XGFz8xaSGo2r2hDbRTcxp7n611XSYzVFxSdgLWYd9h192Vsss7jJ9oC2iokB8iX7R2",
  "key14": "28YJGXuEMguJNcUDTxUezrR3acmQCpnTimugtWpV4vdJ3jGmGtqhxPuJ67XcGYAXmdX5BfPFDqpT8z5xbonzvDoY",
  "key15": "59opH71cDhWjt4UwVAR8EhMbD58UDRi9wULqFTKvj4NCVfHpG9WZ5C1PhyTNGmoMbU6xvU2588iYhVsRDrZWZwDM",
  "key16": "r5soeSgpfR64PsXfBzmUPeFuU8msnnpNiU9DJtnXQ8xPTnUZd2rMLkqpEmZjmzRqKT1dwqmnSauMFTdzMjLkNe6",
  "key17": "3ahKERDkqgSYbF243meGdF7LCwH1hmoYrtz4Ci1mKkiKFdifW62nXCc14rAWaTzmsyHYiudrKshZUMGDTjFk3StY",
  "key18": "4dNmL9p8KkKnkMZcQXca3CK7T8QfP4HN2My4Z2rVgoqSZVe25sibdfRzB8aUmiWuqcunSXzmefaeHAT4dGJ4Pi3V",
  "key19": "3Wp9RqUGZFFSK1kKGB4z6UahPtoZkkxXwkZUCYSeSizkbfQh8n2X3u63EKEUNknZktkVDQZSPwmwsUufiLxEtNCA",
  "key20": "4RVXi8Zrq6D9Kt4ZkuX32bNPg7BwPq4wLqYw3TY3ALd42ZZFpVqLdsPMpWB3oYd4dkaq996HPDogT4vFtuDM7dwG",
  "key21": "2tWBB3m8fLXoxSqoUthySGKpo1iCgAvsnLwLhHh4neyFaoRH78fcSEh2c87HmBqBCQHYCNTuojZCopnQw5MzkyqK",
  "key22": "4EcPhsAxz3GzPR9UWawxEezoyP7LV9ojTnTT3TwBMLt6LY3HsAEphvbKEN1qtFt3JvRem7eJt9Wz1iikq1ydi6o",
  "key23": "TURCwZb91tJaKpe3u8b5MkpWKMJHas21sheD6g8pk4JhG79U9cPr8vSzXRXDT6NXnFTbnz8TB8QHuvDJhf3brbv",
  "key24": "344haYVLmdE24rj6aNYkNKq6pM1HrpcA6eAjGhxvPPQNQWPBUgAaw7UmYiLPfzBeBb9yigvSd9oPLDKQxFgsWaSw",
  "key25": "2muxefbf9wTQqk8E6a1nFujkgWADngmM7BkuAFXHx7Csh34jjASN1FprXH7Y3tsgQ2Z4AJsdq6yiDFzionm7Qa59",
  "key26": "48PZTmpMVgY39vfrjQsyS2Lrjw8eHL8dMK1BSyKqC1ouhEijazLWHM1j7ojDSGWkS3mx9xyMtDnsEQpWb8tCZPtJ",
  "key27": "61rWCndZ4V9o7b2pD14rcfzngGoTofmKYMuyFQE6SYre4aXiU5fUJCD6mMif19g5Foi9ZiBgaxzXBuCJDuDyuQzf",
  "key28": "2URydzeh8erXhW8tEQMYdp2rkTsWwHgQ7btVLGH9NbeW1pr6c2QxvUffS3S3bZeSUnCdRz6UNTc5PEppTFtyp6Zm",
  "key29": "tJjypZenHvrV3DjvyAWBMgbpXkYASUMjoo1JrWVX2vy6M57xk8W77oVe26cVzhQeCap5wtsuDc6FbLw9dxyzYtW",
  "key30": "4qVp2z8GZCQNnzLqbsXtxMH43phyE4E9BhETfNy4rGtyUwcoiuTpBHZGNuXk3CiMD2hzQTP6B2knUemSANjAZJeh",
  "key31": "47kGVf7tTLK2g3r91qxfPWANoqmmBVvJRryApSvy2owEAq4AvVAzUa7kwDVymL7Mv8vMuKgYeFfFET1ViJf9UYQX",
  "key32": "3u8MRzN7RyR1drWPed8ZTMod7rYCjqnY8KECDfJ7xxaFBqS6BM3jZ6xX6JmJCW7LW25gjgtJLSrS3DGmvgcEVcTq",
  "key33": "37iLyNww8gByBopGtoqnVXagrnKcPBGDLBufpAGr77KXya7uwm5T7VLwcRcb5HBHxgW1gh7VTaXaQApGKQuz1kJZ",
  "key34": "2gNaiSDrzFXS5hcBRM3Wz1ds3YpDpqy1Wr4h9fmQpGNJKYKhWxC4svJNVsKprXdzrxbdHLTPTnJZ5M6CRVJaQRto",
  "key35": "5hHfnPkCL5Ep48g45Zc4Lxha99sfzoA3qMi8ecuRmpNrwqFkvFKoJ8FNzpC8d7z64XEk1UaVFzAgBWupZvP5ifXs",
  "key36": "2MEvnDH5n1yTYqyh7fCV6WjmKkBziVuU3Th9VX55vUzrhudV3Yf4hSGsLfCvJFazSh1xWB2gZYUbUUc8menVnejV",
  "key37": "4LXy763Ku92SrgAgt6ppm5sRp55xvYh8HXaineTAWAnh3hPVByawBmuDGLki3h62jZVRbh7iPewu9Cj2HpQyjG9p",
  "key38": "3SbZQQq2yHf9ZDZ4PbmKfARmV4BhhqQBXyb4fLUeyw2rvhcENkC9cVzEbrU6iKJjSWAi8Y44fyY9kubj8aXfL9kL",
  "key39": "3djyj4UcKXuy2JDRhB3zteuvDDpf8U6Cmu6hJrDxJrZK9UNXjgaeQJqartjPv6MwgRZW4hXZQUhWEvQJhDgGhpQL",
  "key40": "k23cRzhHAwp8zRBFcDTmRBm53Q25V4bXJ64iT9eJa4pd9c7Gjj8USBpqmZhNCoQDqyEy9s7BMtcwFKLbhdENLsP",
  "key41": "3Ardem6q2GY6RSrTzyjhiajKgpJXfwcS6i1zLMSggABRGutUiC63gruD1PFz7DvMviFPGf9vmwWfLLzsLdpiXxG1"
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
