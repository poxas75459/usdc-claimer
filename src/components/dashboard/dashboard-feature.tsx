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
    "5KQ1wNT1ZccKggPBJbfkEBiAaME717pxUpgpqiUMaKGJmbR3RHfncTEkFuFbhgVWtMaRPcJ1veABZ1fF8ekBpF1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54m6o6skSZQTZodsWF7AJHTuYWvRpCqqfLVV47bKCurNPuxCTMQVQv3BUs1ZNpcmVnTCUXx9CBjrFDSWbX6jqqJ4",
  "key1": "655NedELWP8SG6buUssbiRg7gXBoA9eUtMLxAEfTAbk7B3oEZSpnzWr9qFMmJS6NbKHWB9GfLPM6h4zppe9CSjFR",
  "key2": "41LjvJZcMmsicGGYLrUYGnhYbGaC41gSh1B55a35UxKFP7tYdSFfkwy7FPANoBjZyYBCW1cVCeSJswpdwSPeJWSd",
  "key3": "4VcUrh7y46nAfpycxLPRkosXBjz5qTRqJsSvbQgrTu1vC65sXvbtBnfPrMQpEFDfEqLyBkP8A41MQDdkTYYj9Zj7",
  "key4": "2FMKUrU3bJYXbrWy3YDUAZQgM99uT7WawVRqoVCwH4N9PVtMZUtSxEcau7rzKbvQ71UmiLcNVBM1st7enMZwAVQ7",
  "key5": "4GMhXiAbn2pMFohFaFFwN8rbEv7ezWda7CHoRHNrte4F7W23LVzxTuyur49xRycDRFjBahYBSV9TP8iTPX5mzeJm",
  "key6": "M4tDdTt6mZYLX8HdfXKzfuyQCp9GTBhdJnpWqhWnACqBXazAHBbNMGuqY1ar7qK63T8x6F9bztLFo3FPB8kekmL",
  "key7": "51FpyadxNfXHnN9jThNSXPGPU6YDpivs8K7tdgv38QYbhhdtwviVeJBPmdgXZj5Rs1uURCMSNv1Lj32ZBqF2JTuN",
  "key8": "3fJQcgD8vR6X9x3i6Tz8BHADcrF95WZMdhjS8K6A3RfDK8m2cPNxMVmzuud3Xq2tifd93GuBEheavuHj649CvLFZ",
  "key9": "3QHLHdj7JQ7SeoVDpLP716vHBg5GgQ5nZCRQYmUsdTdVBSja4f1juTZAbdgkWTHdJVymdj4o5qEQw9pKiwxjAKv6",
  "key10": "4aF6B6fCQF9T4V4vDLNJSBz2FW31v29r4G4xpezBeQEmwLQuNE8P44vk5HjGxHbPNkZ4UABSZG8rsPgnsPrqdYaz",
  "key11": "4qQAS69UYPUKiXaVtZYjnCwUAc3fkGjkHXdpJPNqhcpkDWVDZCQCN2GwoDw7HAXaLAkcgBQB4M5gjhV1srFQ5Uuj",
  "key12": "hTCRhDb9gxXPEce4HzPjXGQQJVVQyprDGJn4AK1AWWAwpNVNKVRdKKFZPXZtRr5NagFDsE52CzsjibsN7D7sn6D",
  "key13": "5cb5BdaH3zkMXXCms631WUGhCmctpm1vnTHA53RgChp5wtjbf2Ni5suCY9vU9Lzot6n4poxyHYLw4VKHLrSDpC81",
  "key14": "3QanUH8NzM2AHerCpcto9QL6Q3WYPKq8jG8aXwdJ9zhjakTPMuPpf6pwm6QRhD5LTZAkUJjkG8Hc7oiNzoLFXPZQ",
  "key15": "5UK2QAvsbdb2insHuxd5tvCdL7UDyXUR5dwbYyHj8Mxmefm3aY9CrCoEY7KgD2fL193op4juMv5Rbny2EjsyF7VX",
  "key16": "whd6RL6TZYJGWyBwpMCDFQQk7Uo1VamFCm4EMofCG3NYedybtuD2EeiKWMvNQGMetUfniFCifEBdAM8EK3swuJK",
  "key17": "5pd5ee2BC6BGPY5CVgrsWuoS17JbE2wtMDx9t1RXfqiZP4RVxHzC5xz4JZZDPfMHYUsqoKe8YepxZ1FXSqok4CnS",
  "key18": "5om6Gfc8xup6jzuAAvYjKEvaxGe2G8H6shPMMAxcXuHAnTwyuSGnn18sTEZLkdqSfxSJtFBHiaAgfFtajxhxFuh7",
  "key19": "3V3YBcYSvH2ymNBAdHohGKSkuXSNunLXiqMkXzbpCqE7hh2uUXmQDJFeefjNG8pHU5qawM9n5nzdZj7eLU9wHjfh",
  "key20": "2TpYD8omsZxe9AtX2e2teTi62LuHMHPik3kkxSPNiLBWZt7tddNee7sEkqZXDFNUWtyxvAFbe1tSDZuVEb9sQhG",
  "key21": "4469eDFmz1AbUrtXA6r9NcgKTQAEWqC8cN9vkDb8Nf7CNFiJ1KLPCJdH9oFMYZkM4DmQwPRDfzNqETmeGU1qnWY9",
  "key22": "3oFWzmxds7zLcdF8nXciiruhMMgY9EpQnBfA5AokRQGzW15bpLsd7ePrcqAshMUYSprsmPQhLdfKfASacS1MVv6E",
  "key23": "3bZHZ9wpqJ7cqYxdNAJVtUJZLZ6aMpG2xNPZrgMtSvh7whtbc6xiwv6LeMPWUjRY1tSFFAqnd17UMqkXB9FMyioN",
  "key24": "2P8EJp8rn6ZzAcHSi8wGrDwvkebfTbpNvXHhyo3Gmxae75KjZtGZPbLHhJ4TMK6jTmP24oVQNbP2mioSYGmtQvxg",
  "key25": "27CoUqnqJA3jDR1sSvRZ2axQqozhzrHQbWHiTPfsUigCfs2oFkYw5GdnFAAWjk7LAFqrgsP2EhNqnNv8sJKcXKdp",
  "key26": "3Sx66YY4HPsfNReZDKSxJHEcrEke8Ze7otBREpKSrtzcMBPb19UmBc6TKyKbSVAsvFNigSZ3PSoRRB9vi6VBkwuB",
  "key27": "XZfftkVRr1a6mUvJBuqeuV6fq7qR8mbptNTAVaXqmiWjs2tJrPvuwD1SgijTG3Ti7fNB5oypWLfF9V2ckTeKsTZ",
  "key28": "4Y26p2R5jCvtpsd1a5KMBMHB3usRxrSUkZu6zSiJ1hDvzCt27yuF87qC9dLeu1zyzeKDQjPXQnJ5K1ERDyknSKZ9",
  "key29": "2ouwnYWQoJa1CUhEkxKibYbaiLWxZZrbJ3Q38F7Bg62D4ZThKTUjeUWhucaLAHQthctRXMUXy1jTWXbt8nCRFo3B",
  "key30": "2NusoduN8PTRWs6WvSjEW2pQP1LWgRT9LWxMr68MUxf1CTeD7sgZvFKKy38LTeLuTMXrQpW37KJKE7ohU8qhYorb",
  "key31": "4CqGXFt9vVCQg7mQp17d9owYSNqKTneHuvdxJH8T4boVqvSZVLpce4S1Nmxzekjnc8qJHWEUCQaFtecy3Lpn1Hn8",
  "key32": "4yReiQNkxRHwgUy6KVCZbArJ9X5SPSny1pr2vM7o8JPEt7kqLc8Dm171FrxZCwUsotiMPesvzDoQGyzFM5wh1Bjj",
  "key33": "YjiSj8vHiJBbUhSHy3356x4EgUA3dBKx4bJ2xUoS4Ktif6JjmySnajCQ4Ry1aDQVEdAAmiqjFRzniU5ZQProzx4"
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
