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
    "zF1Q2YNWYyQVxnCFGXwbmbh3ckxdZRm9fX7raGZtK6Pv7ZM5LnKoV4WLptdRBdJStVhW9pCY7donMjRx8kyceLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xw3Nv3eYsmHHQBizUXAmaqadYgyVAdvA3AqEtu3W5UfWaCfY9TWDHCYXBGoJc29eCvjq1GXzce87Hd7bQ739FCU",
  "key1": "VMRvR1dw6VFM1GZHnmfc6gMGSru2DbHzwwmqjeswGm1HYPwKsvTvVFWLkCQxUf3bLEnTfi5jK95q68GS5Auc7qn",
  "key2": "65gb6R7V7K8P2kySvVVaq5z5U5c8CafM81kLwQYHVUsLuJoR9E1LY4o3UUYYaps7B1hvfN642ghUwDRgmtVKutoV",
  "key3": "LoyNebK5j26tHfZZ7WriPZDv81iGmwpjDGYh99zW8RymAVFZC4FvXveaMf3CDa16rSMFSNsnuX1Y5xvrBHws3hh",
  "key4": "4WQZ1YvRDVeDKJny9pD5VRpsoCgUDo9iXygnfC1Pc31mja9xpBKmS92umCKaaHv8F4QHiH4cAtKNJf4n4QkAf6Db",
  "key5": "3DENgMD72Sdov7WAPfF9HvZwYodTjKUSAAj7WA3aYw3BLhHG5aL4V2K6BRPhHgaDLXD9td3ZGPjb8FPtcLLhYvuR",
  "key6": "67AKfvhkQu6Azbrgr78oxYhadHaA3iczgpjHNidJZyVZvr7MWcu5Benj5aQpC4jfMuR9M5i3eFni5SpPqCfNz7w4",
  "key7": "3kxbL9WBoeDstwScp7tVnCmwZdMuHNsFEVGt8f3Gmgm3h4zSvG38m3jV9vGEQFqYZrSH6QkfctdyrP5nyRXQKvyt",
  "key8": "2S28aXaU5H73vCWfpMvxMDxLKpMtqkzyT61RfhBufmQp9X1iMKc1gnKgxZRuEMmxcTYAtcm4YWmnVjhDiyP18Df2",
  "key9": "3gRUK7xhR41P6MXL894cLREGp4CbzSPEjFD88tfG7Ux29LxqtEudDJaadSxwrmjbPp5BwNCFUQbsXQWAbV1Nv1KG",
  "key10": "4XniuomggBRj2Z97KpzS8cdLebnMxf3Uk4E47aUS2KyvuXoEHvFx3KXYHMc6DYX78h5F3Ebf7rBCMaqWYbA4iCtu",
  "key11": "3V5WiVpCbnHkp2VEYXB3aAa3RH9d1hm5zGCBGndGYRsZnSwe17E32kCzA7xycQhGP1d8Lq8H3DkK9jzqGevAwXVA",
  "key12": "2jCVND4vBb58FkmzeHpAuuvJh1w57gKoBUiHxNmnPTifztqPq2QR2YkX5WDN9eGLGpgncTNFV1eX1tqqsr25nCPD",
  "key13": "5aMGVxayfmNjWQLSgaC6uTmNkDRLLZSXnNPnToKEW33BfEyzrPMWKpijQaLmQrAUEPhXykKCiJyeMUvo4zmQmtSX",
  "key14": "3Wo8Ac2jqmGSYPezPsxtsbFGDX7pKiUnvNTupx23ESgpV32na74oPFe96jYSoxrfJSeCqGm98u2L7h6fHUeRo7W7",
  "key15": "sr93z3nbFxRjkwjHK7L5ur8aoLi4kZN3iqqaRcX2ggwfPmVBh338tKCB6aT8kbmGq73BBP5tvBjSbfH52HMrPZJ",
  "key16": "245NsZqx3yx3p9VLGg5tkg1gcAkfRBBVZ698CTJv8ZVzC2Vja3zeZrAsVKbymWbPtfNARXEMZvs9U7YouqTHytrh",
  "key17": "35ksytQNvArMv6hVTDL1EkbEf7ms6oQPamKXdvYdRvddexZbCKi2wNdB7fgsvaCMaBnXD3BX1LboDRLFxrWCa9ns",
  "key18": "2rLgkJg4H7oBK5Jjv7GYX8WC6C9sVgLNHDdaJSBaUE4v31YGhmqGySdiD1fVTQnPMHo78NLxJ35FSWijM9v4dwXa",
  "key19": "45jzVjPoDB5yPymRb9beiaw8dR3zY1GaY4v9KM8pzeP6iq2UKEdEPkFzwAWAtytLMsBDSm92C91FvBvR6XfKgwHV",
  "key20": "5Sy5hy2H2ENs58heuowSjuBC2NnbYNQxxMmqwzqLg2UnnY3RmKeyQPUq8Yo9HGGd5HiF2FCuiBtWTT89n2Y3ixMt",
  "key21": "52iAMdwPi6o3EGpPCjTTPUabsgvsP97j4gYUVQqKjmpVzRyLY2Q2sQFk2uLe3g7KFQ4wBs8ZZZekKxZFsfezZbnV",
  "key22": "3qfnPc7y1oT6NBNdNNpYzMh1vVkGJDmWxS3qfumVr78SceyWP6PAV3GyH72pwp7SK1eSsXrtc7wF447r9Kx3ssNJ",
  "key23": "3EYtmxG7ygwpaUAjDz8ZyRe4b1VRBoVn35xc6p1x5f3mG2o7quC7Xskk9nCFi29j6p7739n1csbdBjSq5WTjke4A",
  "key24": "eWN5tPjCSan96vg1jZeRU6y54NH7CxybFFaYHc6h4NuW4t7dCjyeEJvrrHuGU8wpj8dvLWLqEk1Wgq2wPwxPE2b",
  "key25": "5jHvNa1CkeiaXhPCZNfAuB1D1YnxgYJX3Lhby5p4s1e18ZmdtVT8wfu2HCs8kGzNrLLLZuoHrC8AchhPzPi2vqpy"
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
