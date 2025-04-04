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
    "hwq9iW5EV25v349je5EbNjNir88j1vpSEaCpVWrTwwGdS6TeXqetjFES8GpnkcU3eDonLdYbATj5AdacRu3vsYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7xgiXKY8EiF8S5jnaPt2gABLBv3LXNCoNvYeUaA3hGAgYsZ77QTqc3462UoTdSuhH2Mcd8zhSxBXx9DAM7sdvUN",
  "key1": "5LWTxUY5UTbWFeibQQu3nPX6AUF3mqoacW8959vEmixyDZ13qsxxQeL5SzbwWMAi9uwEMcWEfA2DaXkAV7MMuAmJ",
  "key2": "2HjzK9WLFSWfn7EGMSv6cogAyyy382Et5wB2azzXK8D7cjZ1ifSUEGDqVrB57cusoFLwnAuHjG1S8Yq9NvAP3SZY",
  "key3": "2Qgt1CvfqA6Hb4gE8RGYGaktJ97xdKzR4U8Kk5SKXSoAZyNnUpakUeNcNPoovTX78pkYmjYELJFd2iLarkdn48BX",
  "key4": "4Rmk1bU1PC1ZR3QYb7VaMPLuvUFnyzRBo5wnohYivHq8c79AbcLFHgwCo1Zz74qMe16utkj9eCy2Fq2vfQEAb3ae",
  "key5": "5nW446SamZijnaAbqQnxfncBCWN65nyWF4aRi9VG5nXp9q6EcnVGrVtXkBoVzK3LjQxb3ZVs8UPsBhuLvF8wm6FU",
  "key6": "2pF2US5m4VVMVSXSewYP8WYNCUg28DR1J6pQ7Stu1aP3jozqSmZaX8Vwg6moevFB5ECdnBXS6LprtHNWk5hadRxH",
  "key7": "2TxBgS1ebv5YsaJ1MqPh3QKA8wrrj9LrV5C8WMaEJipwrHmJSUriXvoscv4xobeQM8mRGKNfJThQdEvjXuSUNSKe",
  "key8": "3pYwzFUMHRiyeVzBi9CNfLCETSu13VfA8FyTxuLrQ6iCQdzRxntF7apC1K92YeSs44Rfwvupq68A9SsfZsu7Vm7R",
  "key9": "5BLY7mzttVgw1XSfQgZqysP6ncdfjde3vG1hr1GKqQBTHECqidF7H4rHDEPp8mqyny4zSF8JRfTqLe5XRARcF3Nn",
  "key10": "2ngwydjxCg5SZKZv9YX7PfEE31PA5KycF8GMxT2Bi7FqAKEt9uZ3aDAsgDpuUEdwBAhNm3kiKadXxG6H7xVN9dih",
  "key11": "2jmyypc2utTDr6zkonPsM1erYwtjuBEtXpB5nmZVKEJ6pPjAgQoavArxrSofLhVebAgRYrpFSvj9NzDrTjofZSiT",
  "key12": "GfJsgiXyaWPq4uPahRiabe8w64gNQtEwNSrSZo9WeWtxW4wvL713TTaD4sydDPA9n4FC4zdj4U66GNYadc29hff",
  "key13": "3fG7zXBKqfYSVgPvEBBDmfm6tisbHCX5nUqS5yWs3z2oSdXhmpdz6PA2hsCCRgY9t5aj5zEQWmM373Xqkufv6VYC",
  "key14": "3HCQCPwbEexMQVEEGBqaaPVaxu7kjWQMHkaGNrSVdL1agMuykGG6sxaSk4mBb4fYTi6DF4UbV3Q2pVRe8g9BChcQ",
  "key15": "E4AA1UMVhZu8JD44S3Xw17gRGHr3kZrSXrWmPjbrTevzrfu8YC35JHdKQvkVLvSnQSnZmqHrZeCNAe32EByTwna",
  "key16": "FhvzQ7DgPqeJkJaNChU8pxVYaxp7iXdknv4rtmv8yoqbN6vgFtpg4D7EiAgKRaSGmPmGgS6GNyxyP1NpNfCXpYv",
  "key17": "627UfYsRke3mq1W2UPsr6fdsNin9JBd1kHYg3EG7jWVVvNhdQXDSURCxu7w7QHJHEqnGvcwfHLQ5HfdqEkjgzNHi",
  "key18": "FvqnTNvtsJxPMXKJQMjo4s3mbjPg2AU9uwjUpvGjr8u2k5jtfvboi7ppcYUrPnYAYENSYH9hfZpKfDuWSsb3cqd",
  "key19": "3dgxJupPZxDKnFJWNqfK6mdT7Q6NJ7FdkAqYDXqDTP58ZYab94rEq4owDd86dNRoNkT6L5YJ6LdJyhjPVhoygt4Y",
  "key20": "4o6jL6pUiDDTKRaL7fuqDuDtbBS1oPYLDYbW4ojLjxgab8SK5jRB81YQjnscca58g7VHuJYvBZ9wNpT4uUSNs5m",
  "key21": "4B3WN3DpAR6kMaDK9Uxjj3EEHDKNvyi2Y1yc4PDwWC8Da39SWq8Mdp3y1RXVJ94XgfjyzBPQdPtEKY4eChX73BLm",
  "key22": "2s4pWfK6CDqy3WA8yLdjpJGy4NuZKf62UjYNoij23R93KBJBAiPGjdoNZDXbg3SKssCkZyVw63355k5QdStY7MWa",
  "key23": "782vaZskMcRGNyXisyqusRrj6uqxzD87mQzmCZ2PWD8to1XxRjH7DwGWhXN7UJ8m3jdsoGbtExAkXwSQN8e7yVe",
  "key24": "5nTCAuedFaokvPN21hsQZVZUMuponvuVo23ZMQWzDuLGzMoenVJXtFNe3eXq7fu24a17b3R6wVPbrLR5cdeqk5Rd",
  "key25": "3an2XFumfRnjtDWiFSqK1H2om7Mj76QtFFHVwWmENzPr7k1Nkyy7kDW9pKsLBor38eYh4ohmLCKaYkMWsofoRDXZ",
  "key26": "2wD5rPPppf9YknShu6sAv4m1uVastXKisj1eFHinazXS473GXZhPfoeQeE9Y7XGbUMQ9DNPAesdmnvLtkSRp1ffm",
  "key27": "5rG8hx2Jt6Un9ZN4YYPSJFmL17dsJrcWafMKvokjzZuBEVziVDxvJrPC7dgkCL6WiCeivawM5NzgYhfCPUP5DE9",
  "key28": "2TrAukWYvANzpfRnLKDtneSt4gQpqRvG7crCzr8fGnKNVf3cKthBoP35csCpms3ZSw7eRLsFMyVguwqJosJ99M6J",
  "key29": "4s8Y5SKBMou2QMWahcpmWso1emXAT8AJcg2SgWFEjGUV6hgyQantRvJ2WSNvuSAdTKfAPHMzNUMBBRdY1KGvEskd",
  "key30": "2NbKs9T1geGnT7TM2zzvyrUSeJ4uBSPPYCVLRVMrffv4LBhgA6kir9uZypzPqk1oEmjhikDRYDJFRd1tXCiAuVK",
  "key31": "xLTFvj6FViWB7Fjs5ehJmRXuiAiomvEnaBwoFEgKhJPBSXM5NBdV9kyxiG6wGgy9WFJe5S6Ang1PLHUj228hGEK",
  "key32": "3PuRJmHXzPvSuEdG8fbgKHMEcuGrzPsRbBN4RSsCEDRAhftj2qnoJZY3fbZFsS6bvZYEZLjimj9cgvqrcAokc9VH",
  "key33": "39Wx9sP7M37MSpwTCiQuhPJ2jVVi4jFVfrwUnmCRKE25Mft5ZrXo6mAsVE4LVYFGhRFSCPtEdP8pneXFLpooL48Z",
  "key34": "rFu5PS7gyWUyYrprbDKJVZqxRejp68fRgXT453asjyBAo8z9eomyTfeVT1JuHjhK4navY4rcNcR5mxFBCmekfbC",
  "key35": "GsmME1QVg8YZaSH8vyFf6NGjJwu3JzZGsndGvp4CynLRXoZpdZM46cuoGi6J9feZzPLzq5oHK2G4so2ovX5KQ83",
  "key36": "46srpM1N8HcWrLXRBxZehnrE2NHERXa2X6bFqGcPfV3htTnDWeX2tikry5BRfU8uZsJjVuMCyLEJUmqcy3S3cLhJ"
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
