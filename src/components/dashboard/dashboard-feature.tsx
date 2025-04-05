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
    "5hhZSeAme6hyfpUsGFRUSbBnW5i8etUz1dof7riGseCxQ5LX78HJiiFrvkZH9haiY4DbfyD7i8CXKYSvvgMjL2dv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ggXS5vmh28uZxBkGmSQ7Y15wjSF4Hbfw9aSAK8KHtsSAbiqyQyzUUaGHZ4q57QZL2JnwsgfPp8j4q3ygrUrn2i",
  "key1": "24cLTq9WQztj19BivcSf2kVmVADMoUn4yo7GVFN8TFPS3qD8g7fZgvhR9cbRFAdudgnPuBwte3hLbqq7SNDhcum6",
  "key2": "3GAnYf2muKtgy6F7f2GexfuYuZCqKeZRr2kpz9rDKjjpdQTa8pj7VLDgMN6rxbtkd1ZSVExA9YwK2xggvVmjEmWf",
  "key3": "n4Ea9GAzoizRYUYkQxDk4sRTnbGQq7z72WMiJh8VmMikjqUC7fQ94Q9Nxw3LPwNixpFxJYi3D9Mo5vkTVbSFWVo",
  "key4": "2q9nK5rHgnAgnvp1wRtaoWGKG5oTZb9uxuSHRB7d1PGSHVpWzAGaiNt5SYWTcpkuYsaapqk6NDEt5UfhZySzzTDB",
  "key5": "5Z7xfyLK3A6iRBUQzaZnzNnaXaQFkEnpLSAoQWx9U8NuteoNrEkNvdC9srd5UxHTSvRmfjgdomVKkVNULFUfBjmh",
  "key6": "3qXy9NypanJqoDyPzmmhpweF4yxCv4eGnnDGkTBbsbuYi8nhhyfzy8uPVoUnwdaEf5eES9tmwFfwPSwxEHbTonPz",
  "key7": "245e1YKLuuLVCn56YsBWie6pmayp1yU2iy5KpBYMdnLuPuAd9m3nxU6ScqEh2P9KsVJsUazzr2z2hbo2LRd6xdm2",
  "key8": "2u7ncbaEH7gRZ4oRJaGQTPEpCPuA2KHdUJo4eRnzEmGYSiL7mzczHsHLvDuMpYR2YzJdYBeRmuif4i291yZYWPbL",
  "key9": "icev7kgZYwWvjBWCjyRjdABm5VpfDjpuz6JdBTnzroNDk3oSstYn6i2GRNJZ3vQ8czBTZviKMqHCDct3sY5M869",
  "key10": "4uHSEgCN8cNFSmWME7jmtx1wHcY1rLwtpSdpnm9GVKMBUeHnrJtA4eeYRUcVzyvXxnCVkU8jrCSphFWCRqXBSfW4",
  "key11": "2Zv7ECUSg8CgE5xUGm6kdsxpM4U3S9nGYtpvRd2MbL1acStm7oFd9dn5Q1hdMFHK5qt7GeAnS53PazXQDP4RX6eX",
  "key12": "5Ccfk6djxTWhHph3t1m3658jcpUCymj21DVfnB5U7mAq7TiaafSHvajRntvBX6Qvpq7ik8gvHyAR8sXYzrY8rFzW",
  "key13": "3ZW3z2DHcvxEHTU66svMDa8pwVvezTaSu44FQcVkfhnmW7SZjD3g5YH1Y2dkojF7PFVtozkEJTDanF5vujNoVR4W",
  "key14": "2eHvnU6veM2ThxkBa7hRAqyV3wUGCNrUjMeufuAwEZsEuGtAzsbLw8jC7eDUPM4BMbHgeMz1UA7EXZrUEADG2uYn",
  "key15": "aVTzaMv6poAKD2TTK3q89MGzjGTs7zG49nsA8YMFEGTZpDGN1fVrZxeZtoG418m31seu9SoAmBsLq6xuBUdtHAi",
  "key16": "q5kFjbwSKkgDoA6Eege2JsBCsWjZSqzjirLuY1N4erHBwJyrSJ1MdGgwfbcE4CeLv4mbqow9yHBkgxTSEoFK5Cn",
  "key17": "39YzMdrZdu2KYzLtE23AsUSKesC22Rm791ZfPeqnASNwZsNVjP4jexaif52gi43KniRUbE7jpAYBxLA4g4L2S1wE",
  "key18": "3gcMmPseCEB3suWhohkr3GCrGaWjTuNYnMBzdpAXDc8ERahDzH9XXbjgaZcivefsFeATH1KRVUdWWBpsJwwgqFqj",
  "key19": "2kZKHdsd1S6Srgbxuk2hFaKGDXHUKJ7ekPuRPDo6VB9dpyWJVkRuy6Z4fGiJpz6FR9oJYDgSf8qqCU4tnZuBHpV4",
  "key20": "4AZUR1hDKCJZoVouEos2z2BVkxEaWBuarPprNq8tDSuydcw9Hxoc1BxWNzv1HPbdsp7yTH6Mr629GWcbuYXyj94H",
  "key21": "2U9AQuZi3F2omc6ikKSXxrNcHb3AUoHtt6SoLcNEg32e3wJyboaeSAMt6WxPAo6Cxe7WPRSP7xZ8sxkbCKq8wRrs",
  "key22": "5818qA7ar42CvJGTBzE3Pm8J5pRfudbkwf7iJdx5S8SPU8PuBqvQFhPo81RVCxg2wCmCLuyjB8ycnj8fF3Ea6c89",
  "key23": "4xuWRnhkmPhC9C8Tyn8ks2Dy4fkU5SukS2312eCAQSniBEM1TJWjewHhfnWKgoHf6PXQoaaPSCo7jqXuDqwJ1oHt",
  "key24": "AAb4V33rqPppZ9qbV8jRUAGHrCkgHrtoPEk2QijnAyy8S4Z7MB3S8cpAJCRLLqwagiFAhSGwDZfXC4EmMiSj8ye"
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
