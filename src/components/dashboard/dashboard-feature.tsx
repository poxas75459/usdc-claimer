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
    "4Rg4Sa6pJtDVkMgpfaB8y2GyM24ovDoFXo5AN6e6fgZMTkaNgaW2MKqp87JLKSAGzuru3awT3nr9KNSXeJxEVje8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MKjWWmazGtY5oj2WGY625ieXN9SquMuUFbSUHauz557YsPLMTULwaeLSmaZNqhEGBVsb4AJ6XiBTXqjG3ih3H8P",
  "key1": "56CpCAtN35VcCMfisSaywNaJyoDQSbyU7tA98UdcWd495cZSfJy828aR1XCWTDFn43GLMkTaFggEp4YJ9qV63b6q",
  "key2": "3emfyA49ejkgcbQxTG4bGeDrjDwsCGUKL5MnXiZwLCrG4fRXUGim2pecBZsKsLjg5oZWMX6PKZzjab7qJMTq5nXg",
  "key3": "4QeTLrjNqxAuAjgdyH1pfkbZiwDUnuP74753ufZaBBRAve7mB4yY1BgNC6FVKC7E6hu9gtJovev4t49GXNpRjZPg",
  "key4": "5nKrYZ1qbfq7Lm9dvgfBsq3xSnQHCHKg3DcS1rwSth75XNp2Lm9M5Bi9Lqr9ZnouypMpTUtTtDtHb7o81AgeoPRG",
  "key5": "MMRMRhMS6LunXw1hStqdd4Ar9XXW5P2oMzEvkBdj3f1WoBGxAnSgos5zXQzP6KuvdrN8AP119MqdGKQt6zfgiqn",
  "key6": "2YwtwqiW6KNj3TTVHmr673kTKJLcuNCccxvcHepSXipPkswRHQdZ8MhAwupm2C2BLdsxWSP1WD37f4uf8eoGcrAP",
  "key7": "3K46VbknCz2Q5ZqDCbmqf5KZFd3UBAsFxfRdGXsBBn5v2ZMXGqZmEG4yXp6A6FfqXSgnQZRf5FwTHMKihqc59VRq",
  "key8": "4CFKHTuxDRdxuCe16KYANx4YFX3nJqiJQL6ATJcgq3vDSb8butbarqLCbGBb5UoeVLhS5iHBuEViwKqQa42MhKDt",
  "key9": "U7Q6fcCzeJgxJ4uqDx4RwUvpMV2EDAGV2hyLjfmC3Tabph9kfyWfbYbBhvfnP6FWstKaX6vjRwb4WzsjwGL5cUm",
  "key10": "58pgSgMWQykEtjXPkwURhTwC9a4F5sXee542PczHzW4V7qD61P6bniLuDEQ4APsGbXiptRKawBGQE9wT6YQyC3qC",
  "key11": "5xGxkBjfK4oK1nRqcGXGTFfHTcWUBYuktCGKnHbtf31VEmwbsCjWvo9jUUZJEnQpiLH7BdN5w2R3dVEzLmJH3t83",
  "key12": "3S8cLEWDRKstqTozn5qc5o8vA3VCVQqbC3RExaBkVZ4Ne6bY86XLMd4ihK5Dy8ADkFdVRLSdqBwgBEovwFLVrijG",
  "key13": "2hTSL1Up57YcvG1X6zAgSrUhH3nHGXagTEJoJ2ogNTDs1NKra7CmovJHh5Vh4P3ZGpGHtMuSaC1yfNPXqJ3MxPeu",
  "key14": "6seAVCoRf5GRaS1b4LKLRQReT9Mn9RhJXt1wY48TL9Z7yppbwAXVfAuzhDx7gcY7eNuX4wnqr7pEmRzSQhUgC6H",
  "key15": "3aBosECb5GSoECkfEP5i6sSN7UXBzPAX3RgwdbKsNtgMx7b6dBMSyBJ6r7UtiKivBQdwiiWLykA3QgUXNhkEsCWK",
  "key16": "2D4h2hPRmyjjmzfXQ3TMJm1qQuWjM4Dya1HbjPRfnHJ8GWpVXnmr3UE3Ah7vksUbJQrbZ63z2gRQrSBLG8wFhYob",
  "key17": "Q6RiC5RA1LmxxC3E9BnyDRKU2ueJwN9X2uRduTQfYsHQxRsqCEuWMWSmKDCJjtw9PehZKRLu93gAWAY3fnSA2rV",
  "key18": "2CZZJyXrgXy2Dn1P6xrUBEnRWz6BrZYLyvvh9Md1zdgyLmQdRKvXt5re2Hhacf1wHN6ZCpdzBbk3FG3MAxuxzMd2",
  "key19": "42r18Go1EKE1YxD2JLr3MU6t32FYfg6eYYhoWYcA1a25m8QrLtVfq29CBeo8gKVdLmepKnovurp3vY5TMxNQN1dr",
  "key20": "3uGciNF4bPTkJrZ5LkTa9ySTi2x7rVk8A3dtAr7NK5ixePnWU333FS8BHBJCqJYqjzbdrwp3FuA8c5q3UCk2oJ8A",
  "key21": "5VwbuGxZ4Cdv2fS7BACCn2FhfGFtZyL8cdj58fJoD4PXcE6d2hKAoSNCSyYyY1fhGP8JoQe9aYZx2sQaiWK9uftd",
  "key22": "3JPdyu3xpFPsynGXs5TcFi8CzqbnutfP2izeeNyGcbrozJ9F56GnS3jd88EiUXzhiK5nc7cjBzcxgkLzmrm9694x",
  "key23": "3NRyGHEHwdUAQKcwui8KckaTZWD5kFn3H4jBMHdpEyksSD4XU8N12Ra5zyxVFB8k96ew74qkDGwHDteV6qqs6Tfx",
  "key24": "3Sgkn5tNozheGxaiuQFSGWQLUfpUyPNcqvzzi24ccMDBdgGVnCve2JLMG7cojXcuo2WdJpcByhb8WfLu2FrVGFja",
  "key25": "2bU5Zn484igkAf2TQo5x8VNF3GVUo3eanQE9C8f9crCcbZpMZ1hQKTZnAm8ahLPoq5HYHwEAfiHws6ezf4sJfXyr",
  "key26": "4Y2pbd84R4E2skFMjD5m6A28YwcQB1JXM92LDwMeN58WdMP7y97mb4aWSbPeRfJoGqGiTUpHBqSa6NeaNGNN5BAa",
  "key27": "4hG9aWYM7RFjKwR53rLubF1Qv7UETdA2tCF7dVKmFvqqZndjzMrVSSPDBK4y1HhW3PRjsw7ezXc3CnkkV9MYb2ya",
  "key28": "2VvboArfVMHLZRpH6uTugo4asCq1JjseJ3dHZdZYwwrruYkCRHLdNyAyZxWbBZUqWbNXpprdzYkEhtPzVjhBjjW5",
  "key29": "3kvhe2uBJooy8tQj6f2VaZZuVrKZWjaMEPVzbs5RSnWwFZTRnxLreXJZTyCxYJUAZjnCw8nkWHU2qrLLGYwhrcu3",
  "key30": "2j3pQvVo1vCbbE32Z5U5F9eWpVkJ6WD6kjnwKorqfrw73eGBuLPK7NzHhyPVB2WC2Ay8nkGGiWaubYSWEkRyiag6",
  "key31": "3GzEbCffUjuzNhV6cZfh1xCfZ1Ah5pN7FZYLJThY9RFoUfsPvapcrGCUPTSgZKZdGsef1JGkTYBtsbFgpB688bdC"
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
