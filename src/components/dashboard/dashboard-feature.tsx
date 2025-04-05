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
    "4JmmqtfFYxFXiPvhpGRFd3hACG9MeqDGRo2vT6ixPjoS3ACdMVcYHLjMk96amAj1bm189jYxxGpkRHxfeGzGYH2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "284GsbLdPskZucWVBQTpPrwDLSuqpMv39r8WNzGW6Z9wf3Z99SHRx75HpNSQ4CeVw9aM5YpHnuvnP3mzvHqvbuUi",
  "key1": "2TGTC1a8QZRnVGBz1jkYQLYXQTP82QW9LFtHQjraSKLsJZZPuLBLaEhfmspfD6Gi8ANExh5ohBkc6zZ3HVdg5kSo",
  "key2": "2axvqGMbnPg98mP83J8DQoKbZbpQbjH2to1FAvSEudG6Ud9ZtYb5s1yZvsQZNRF893C89sgekJMaikSZTAbbTBwU",
  "key3": "6511kHsMkxeutH9aFhER8ndgbbebGaDE4Rm1nLREqEB6YuRzL4xjSYzp9ftYBLfJ4PThkXh8M7eP7XGhA2uC3dW1",
  "key4": "384Ln8SVrBZr1H2oJvsZo965VoUBrC5B7tgdMFyY8CBwRjM9j5S6nSr4MLyMeoowsKuuHWCUgLCJdN632GH8x7wu",
  "key5": "4YYYnNM8oQPwDv9FnDaobwv2T6dMmmB9ioJPrMtdfBZPjHBvXFS65Uh11pJsDU5B5594cJnVNKNMjjPH89e4jWwE",
  "key6": "2WQqiVDZ2AvYfu3YLZJbgsBn2nuUB4rtM7w9jn2CaXGTthxV6c6cELTjsM1sUms9dbaZVwhkuwXDAsULBJPyUUVS",
  "key7": "G7Agc4U6rznAnXaPtWZckuR32psxKVxZgyRxxBrMXmthvyUC2KWiTbgEkWryCB1d3qntiAHG9p9Lc5o6Ks7QWwr",
  "key8": "5dYxhM474C9XY7d8ksNHKxXRJBaSsL8vicNrM4WnZtHdd5YnhM7t526Lba5TnDe5UxNsEQEQhysKmE6JwNV5s5y7",
  "key9": "JZ64tZcqpsVJ6PwjytoEdNAJCsRPBWJituKQtcSdViTareBbKjFiMvUatm27n1gpNGyJG53ynSuJTbUJD9tuhkk",
  "key10": "DQkjpr9z9rkVc336bF68E1XFbpB1T1yP3Zcw3AHHC7d2VcBkFz6d1tTxGp1bA8eteCPvTjU2ddTS87Z6ZSGgPW6",
  "key11": "2X8CQy46ytwBpH8jvg9QKtWfVzvvwzGzQHLjRSG9MPYpo3R5wTMNXwx2bWyd1rZBCNygC3YNZcwxwNGpNfagAY8W",
  "key12": "2bYrcz3P2n8qMSZq7HSJFx6to1tseL5Zm5BXyLUJR792zszQ7UM6pThMWA6jzh9yFacimAvLZVXEoyDReqasDCmw",
  "key13": "2KszffXHFjk2vUSjuStynLqXRmd69NMzKQo51YjbMaFaHpDeZVbX1iPeS2Mjv3BtWKt2xK1GKa35KTFWQ2p4djiX",
  "key14": "5JbbiJpdU4Y4zqBLv4NK5CbkUXv3vYwpRC7Lou7docHfhfcq3ZDLfu5sWBWaCtjQs4e7HEr2wQgKFtaWZr4zZko3",
  "key15": "2TGxLGxEFko6U5ZfWzWYYg54EjBVpMGUofBuqsRAow4zy2B65oaJtBfsKiD3YjeUtevFxLZYAeBRJaETAyHVQMGy",
  "key16": "4U5gUva5Vzrv9S2t7JoQ132RM9jAK5HEcpiRJFxYGoGzzV54KBMWGSUgzsKmZEBFLCtPs9XQgvbuyRTW7Hjdk1Dq",
  "key17": "4aoT1to7dKypVExbmnnT7RJjX9M5FneXLf7TmRqUWYoZtGBAUSSdPVsf7A7RkQcYFVcNrwd3heqyCNaHLMGGVDuu",
  "key18": "4eNhE1mJhmX7qTVpv78R7yMZBvauUM2VqLXvTYedQypiispLZ2VRxtobDqov8xYCctBprPJuRpcSwe33mvxjmRz",
  "key19": "5Yscn1Gt815srrv2JgLcViKUfcqN1AVoqV9vcWYd6teZpymavQ3eNDVqUReNUuCgX3msb7N6EqNBQy48rGpbgkvF",
  "key20": "j9ex69vVshCW4CcWufdfrZYQhdghZuzTQUieURnAHkYxjY6exw7FFD4sXGmJ1McYqD1UKCRrQeYkFFSwDq39K7v",
  "key21": "27mwnLEedBRnb63mrdpVRms2ZAL5h2YvVwDstpRS1WQ7FtUtZonRQF8Sdc1NmNZLprAc6HsZ8UJ1L2Xr3PhdGJBy",
  "key22": "5wd9owsgPyiqMHAjKUu1DW8QZuWHwooEVXcX3L9LLbNDkVwiFzTM2g7S85LrqwC5hdirxHcF9kFwwVAZnEQr9rF6",
  "key23": "3NW2bDvNPhqy38Dwe5MQyD2jmf6HA9SFjwP84gx1KPd3dcSrJCyCj9SkaXrqQajWefgAFfJezwB8PxfsjyQUJdet",
  "key24": "qWeqtw4rwLX62qUGVNHoD6fz7ShnPseTVw4s8jPtRFHsxFJhRsriF1joYzmdGooYDTbFAUqkgbzxXv94L5HMCYt",
  "key25": "5KW5yipRgoR294qziEwg7TftqxVpt7BcBiPG3aFBTDKAXgpN159fi3CyMK3aV23pEbu2U8j21b6vUYCF37M3hGmS",
  "key26": "5mnp39f8cNdVXDmPTAKmXWpDsMFCcywJbGYNxUGKv5vgdnGtEZjSKSZ1SgtA3p1MyBRoQSFgRgyYm6Cj8FkX32HT",
  "key27": "2HqfasAkXVWqJNih2TLfEjZC3y4yimCy9svZhQDbgBnUphFoNf3DKs4JfyBwMJ9H2YZ5ZSy1CdgpDTWm6riSGH3g",
  "key28": "3nbSbP6kcePZYcTd3R7q7yrAwRdX4YgXNN99fGCjLwojd4Us6iTnxCrDCrP8g6Dz6YnBCZFa6tLVfGQZR2VWTRp2",
  "key29": "67NhnYgqm7n1gR43rRWgftrT5AgmKCpeEPuxvgBEgK7sr3KgsaCM4hFca4H2ikPfG6kaKBFEioapwZ6aB51JvqRy",
  "key30": "4vAEi7mpkwRedxqP8QUgWkZrxfvXUPgM2tFV4cJfAygMirsg3R7KgnLFDYp9NSBrPoCf9TC4DUerAEHN5Yhv1vS8",
  "key31": "3RHEdvcLceNA1GAh7YhizZMbW5xX4BxmKkn4APAeaBjq3Z9JcMpKMTs16JbZ9MmEkUYhiMFwsAHCVmPx35fqrvm2",
  "key32": "54vFUM68cVAymG4NbaGx29Eu8GBfyYaqhQBi5zLbew5cFYydeBy4LtpXMo1VQGSBYGXr6PSvfnB2vG85vYRoChfB",
  "key33": "4f5ZBWq39AbpQ9uWeDcakSnQoChR6Ezakw6Q8wL1o8DP5Dmoi6VnZqNNYY4CngVt11A21pz5fv8k3cBbJBXnNGrY",
  "key34": "53ZFCQKbaYAPtj25qNGYD9Kcqq6NZD2eGBEtzpXPRRnZGoWjYbu7wGC74sXoVdpYnYZvTAGvp48dkjEmcQELRKTu",
  "key35": "2Gid7AUzqZPEgigFghZb85sU3QsbfRgCnQYvLGL51dHo2DwzJNw4WdEUxNnGBRyQdaLRMfFWYyGuzsxU7voiMgYH"
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
