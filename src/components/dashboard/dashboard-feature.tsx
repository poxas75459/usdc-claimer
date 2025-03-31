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
    "mZ63m1u6HocrVAEpQQVtNh87rTCbmVgvBmYf4eXcwhvP1rdfVXLbXQ9XxrL6QiAVERJUjjZL4gppzDDod9v1Sph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JF252M8r9VCsBfAE2PNGN8mti3BNbky14ShzgEfg8MFSXogY4jWPziesgRWMtbMFDs3W4wSuTUXv7FcCmD1gdN6",
  "key1": "2oQfuYCNN1RoGAyg9o4d3xTEWR4s8MzgX7ZMU6TUA7wfr95WToQDbGPAHve4tbbKMNH8SQ7bfdvuTQ9mCsU3PDgs",
  "key2": "5XAKXAi4Hd1dTqi6vRPjDKqAsjeBsuMWmiYpiTVGySQbY2uGrcohhjqETYfTQVHDqdhbv4fTK8vuwXibakicmn4b",
  "key3": "24QbKfpgbRcFS8WrGjqqkuHZ6UQv8CqvrqHkkt6aUdWJXJc2KoZU6M1GDAWrBQ5uQxxSN4WVDtqH1jkgLVtjfSTz",
  "key4": "3B3C9E1ZCFkHkUgez5TuGdnjtmQRQAQKVdJNvbydzEDvPvTKHwZ2JHCCU6EGpt8dMxzKQiN5vrvGhZLaJW4JGZeM",
  "key5": "26bEwFjp28nEnyn3eR5cYNQLAuoK5XupNFJhEqivosGk9UYxpPz8AsUzUbyoRQUUA5GqqjYd2BzfhsfJkeLB5RCC",
  "key6": "4zLrpqtZ4TyBzUXikjfC1KgLRg8gTUrveUsKoyhBaq5KGYJ7QCdQ5tc3YPFcDMZ5ZU8RpigDMDNztrVx8R1m9Zq5",
  "key7": "64dNY2XNQCZHjiXSwj8y742LBp2XCLFGw2FDSrPf1krh52x3mZngsxMoyQfkdMCBXBaPBDoXZfWxc3984zJy2z63",
  "key8": "Qep2kN5R2CZhrtV5bUsDvJSJAoL4gxA9CDBeHDvgERsQB7ec86fPhb9ygykphw9UAdtPe2BgGAptQeWtHDxeBJw",
  "key9": "2Q1rV6x93JUaMwc9GxX2kr6eYKPB5iqa9tSNvnMBRAMFnN4T5jaQ6KktLpXDTBt999xrgd7xi4uxQv8jSvvmZU5w",
  "key10": "5oFhtKZaN5RSmAZRef2GCV6av477ziTqFUPM1fY7EBBLzpUUGx4Y3YiJ4kHS8p2baRAdiUuisj4EVwWA2JTR5YpC",
  "key11": "26zrTCX8NNheseb8grA1dCC5qjER2abohb8KsFFGeCUu528UFsZYwLy3hS9sSTRLd1z6rfMLTLVZyCXoAhQyyLfx",
  "key12": "4KJ2fS8eVyKmVYHs9AK7pQGfHbgSRXaTpJ2StuaznBA36Dc6pnBKcYLyBjUQyLT1V7Bqc8qZAWnhU9sbfa1WcN9M",
  "key13": "3a98T5q6bgVyhKdk3y6Me444dJJP2d4Pzcc2j5TDyrHkMa55ejsTzxeKy2bma1mwy6gcnoZQponuvqsb1CnzBMEU",
  "key14": "29Gd7crXzgepqRgeJee7A7b8iAwRHVGAo1RkHJwNr7cDv9wHAvPbiRUhFHYb9mJrCDiYQHHc4PSaa9c36v6rXqwX",
  "key15": "3NevaQSMHrJi3o2NGQA3yx5j7gs9zRk9685zvywkLLXKop2qFLf9SrjZSxYSBhx1U9VVFTpTaH9xK2zBtm9rHzKj",
  "key16": "24c7vdzLX4BfFGBM4k1kDrDuSSipis9d7biwVBKhmcU6Umzh2BKrZWTfYHiFximxMMkatecck96VUNTc3fsK5bXx",
  "key17": "419tVmoUAzWL57YWJMSc6MUW9ZPqDTUR5eNLByhWDnUBP3oLKuZFN9SYzZAkVi7i9L8S2yJYRBL97ueR6trUcAtA",
  "key18": "3ZatCFrWgeX6jaKBsyzf5edsMq3W2T6KHPHcT5AbpNf7nJ8GMd8biBtxzD1MbctRjrT4NrTbgkaUCc8XBBKbMkaX",
  "key19": "3LitcvFRMqziCSUwKjTbAYEeAmzsXsE5qFYs49SEMH5ApgbheP3EyMDzCqvzoy415Vnz8J3Fv2ChoCtTSABpyWxA",
  "key20": "66BrrPzH1SuSMiW86zm8ZTd4zyioM1QFEqER5GbBgzkyZaKynKauhKYviaNyu3HGdzCRisG1qDG4mkzJwCyRmiuJ",
  "key21": "HTh8YzgKH3ysndy8MCoA1JSz8unntmREAhHsBgEznp19QacyXQTQUwKSx53nChQasT1osGTLTRDguh4WXLNwUc3",
  "key22": "1226WQ3muojimdDUSvjGLKfigZ8i1y6Sn4y11TVoE7G4S8sDxoVoxgK7mpi16zhZEC5AuYV9fRyACMKGTxW5wjZh",
  "key23": "KATVos16KZYksdShu5Tpp7DgibNU14QfYiUzgrHUXd3Y96xdcmEVYmFkRCbcFZaUmbgrwCN1s7267n14DHQkavY",
  "key24": "3wPFmd5XLPzQegt6FR4JXVKpP3bMd1mnsBL9idVzYoFQaYggHNrt5HRkapzJGdnRpBzfYejYr4M9Gg4upPyuUD9o",
  "key25": "y2WaqvvxBthsFmjEgwtnMqnMAvQGiZLzNw5EbzDbp7aAouqpbysqJymtQSAbxNHiVdCCu3w4HXazDQNfb3ZJWjB",
  "key26": "5sZpLDRb5F6Dr862QPs6bsAXBM2bBXYg95zLfkw1rGvS7nRAdXvGGhVjGCvLkWa7Mm1igYgDqZNhkLNrBkrkNGhk",
  "key27": "4wrAuhCokDWWAzNeZ1vhyUSVb5MnbxSsm3tUeskxyCfWzQxy3RHJDStb4WUhCJ5c3aZe78ugnp3RujBRC3DgPmTm",
  "key28": "4uSWZYHa2XNrRUK587TAgUkN5SGdLqFbv4Bi8Frayu7yDqxbiwUGcPt7gNQrPjMGhCwogkNjUCKR3Geoo13nCPK9",
  "key29": "3JUnmN6NBJZd6oUJuTVdbjbXDcrWGRBtJDv8g9bw9Ttq5LjiGdfasub1NZ3FvTgBgWeZHzFeXcQDAPJUZk9qPbm9",
  "key30": "4Ktvw82QN3aopdUyTdbvH35kR5cQX1RMoezQSisLqNwoLDKmDX1cqqnSb6TwDo9pQBpE1eY2GWM54YbmL87EJkAM",
  "key31": "2PWGr6X9e2SzVcfyKB1RinKSrS915WspLxwxG4Ptbe3tSDtUQArJjaA5siqLGSfb9hS94NCMFgKsV1Ga3ygAKq9D",
  "key32": "m8qFNdDiqjzPKjnFyMJFofFtgWZJLAq2fZcfQsd32TARa575VRiafJ2XNM4F6vmHEVQGFEDqD6tgVb5RaZFiMsa",
  "key33": "3fYn1EkhuBPqc4CtoWw2ignPooPRdwuGMMrM54EVsX8YL4aLcvJVmB5Q3PJrfkLEvLfY45BAnQh17E4xny4iF5ex",
  "key34": "tBrzZiLd8TJGiMszYgPGidXZsw52oiqKLffXgnjaJAcfV4pfvJ1fb6MS8yFMYJKecYRByB9KE7U5pB6baehmjKs"
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
