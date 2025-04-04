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
    "5td3qpfkWp9jVh1b5dENf47dh8Xo73oFEsvcEcggDRwpQyRZJsvnGE2FRJwbFfCLcpNJGTuo1duWnAYfoiTEQaoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BmdcfKLFczyCJ164NFFrtgvXEbQrgwxpdPxHVy7PoNP2oCrmfvViJQrGwueCVFkaTf2oyBDxYH5VkhTDajQZDwv",
  "key1": "3VpoBE8x8PLTvmo4NGSXi2afnbvweRyj3U3dAP9tnC8rxnTPppopJ1hwAtgC3y5Dg2ueAHZyqNhNWqt5mqb7NxZk",
  "key2": "63V8EwRuxmeW9FXSPEN1tHUiHT5xMeCQuyYAowQYQw1czYwMv2AYSnKi2CmoTWMuHa9qrrj5WXjXMo2rrzbiLHc9",
  "key3": "d9BaoDkCRDrVmp4Vx7dj3Wv5ZAy4YHGVRdfsA8SreisSvwvoN6yWTTzNtwSpSmKPnUyg4rVKQ8wmPWQnicMeSot",
  "key4": "eMbbxcBkaLSxvVaRd1i1AFsrYMxwh5zobnSUXN3XEHECaK515JERohy91jQshgaC1qUrKDzaLijwVC2Dc8cLZsD",
  "key5": "yDwAtHYpbDC2LR1ZJVqsUJGCTLovqy5o6UMCgG5cwETwHzp81Mun5D4EJJweSvujvtCiRvBXMP6AFiioChbum5g",
  "key6": "5XYMbBrp2Snin8zCtXxApLyMmzFUGwEAtiKAi8rjMbushJD6WB8KUyzuACZ4EEb1zkfnpqigNFMsz3ettLGnmHRu",
  "key7": "3tW49Qa7diQo9dyirmLcYvjMwyiQktXmfdfxSVj1BEQaZDMMUMPw5BiXGaMDrmFFBFzUmP3H6fGtDxzyyiFumg6Q",
  "key8": "34byGwJwkK4rSij6iED5Kvf9ewuSEJ5VFxg2D7TmuEirfj9RuDKtnmvceXNoeux4c5uGiJNeKVZV4iMAeit5njnS",
  "key9": "5T4oYveCxwjLezdpuWod2pQsvkHHj9iMLE3Uy9LVn8pxXmMT5bbk7aY2UKx6Uw2XPadG6tkJWCTVJ3WAFrt2tYLn",
  "key10": "4BoqTiXhKuf8PV3JyFqKgJJPmXPh7FfbocQ3KEV7sVbdRepxEzLuXk39SxVPeSgMmA5wUPcd74ySn4PhP69fx3Xn",
  "key11": "514ropvyahupHGfQeYGnNDf5NqBqSP8j6cVfifSoLMczS8WPsX5bxMyusY6cYVphvx6xCFV8GGNquDu3PMyo4UFC",
  "key12": "2d8PzvYnHnB9qwzjRbJ97FXUznBaQW7Dt3j81wv3Kis6GWfMZ92uqrBhPp2WSUyUcVUqMmsfsFAqEUkn9WHdmUFk",
  "key13": "2LpdiyY9bxvfcPobtH9fEJvvK5LVew2JARb4cs69QRLGfCkh5EVSUTe2grqhyNsYEkBwfsufmHpEXrAtQJLt2XWA",
  "key14": "2CqSLACcjQz6sfLnv4rXrV4nRjdrMGKaxKEe9xo3vn9HoEz5TnXfgqNXfA5tGYq9Ta8iszDaE8Yn6pqKtc9Va8ff",
  "key15": "45YokfGn8TbT4uEFtujG5yF3hkSYdGVdTMozrDH2m4PfEPeWsTbdQho6uAMWiaXTAHbqbepLcpw4ngaHTwSV3g6S",
  "key16": "jtzXQxZCfR61ZXCsXjccimfC8o1qi146TZFNB46EQgYPf7nZag7fEXDYiqixDjdX9dqTfdpBKLcZrWe9mJmujw9",
  "key17": "63sa2cX4xQkSvsApcYqHGMS2JVKYTf4wWnup2LedFiFJt2nnXCoqZbSBixc8pQcwJCvXYhM7hwW4L4Kx9vebove4",
  "key18": "3Mrtgx39Nw8tzMjuLqtrQ5bdw9kXgrA1P1adeo2zLqAgsVbtwpDT9t4rT4f6qSpyQQPUSsJs8G8km1vrYpoSk1sP",
  "key19": "2jDz7sDvp2RH7kAUHYqcaeZ6Gc5cB5jusvDpP2ZB4AnRjGqZ8siHCMPW39qnhJE7xRfQKpG6xvVZ5dJqqyeqaFHb",
  "key20": "2xaSqSAm2d3tAfpCpcPmmL3CXmvMXDDfC37jwhi4nX87tnvt1hvYkJh51jvBL7VmRWgQVXJnhXFRGrz81DCbrNFR",
  "key21": "59ui2dUv3gR8FLJYYZMa4ZofZaVYzmFTkMJSKLFD4GcdBQ5iaNL9Jsr4PHkzdYsNeJoanEfsJs88Rr9UMA5W2BMr",
  "key22": "3rkUNesUfejTPNNTshsnT5BDRtUGExKX7uVobyxAgWdhVHBiGM72bhg1bEmAVhUGt1DVvtH5crg7WPUJjx2tdVGN",
  "key23": "5cJBcDoM3sfsa3RNkMfqiuqqWoxd16emiZhMuU8Kp6Vhrn796RcpreRMxuaiNFvGabqypTdJaQyu6Z7Vs9hYg1HE",
  "key24": "5RGYcpZZMCiuXMz7F9VKkTYJe1c3hCeo4QMJxgQ8vCupNn84SjnVnhLNeDR4L5oJE7gcCqjmbfccwYje8yAxkCqn",
  "key25": "3f2jpeo3yfg3DF68NH4X35NwfRSTQGs2mPqTK4sgYM6x9GmA9gMujrscvGxAsy2PrK3DwhQXTmLri7wZWV2f7jmN",
  "key26": "4omfYmYE7e5UxzkCdGEFf1vqcvsuoHag5iTjFwkd3DBMjgkvCzrmq6CkAX1idUCaDgyFArdqRKzYoGQdYbeD63d9",
  "key27": "2n5gKHqdPTHaNTEydZqhjN5odAUitvL7WeChbWQ4PnvmkXeKRMGm6pZm5Q2D9m5Q82cLn4R43DNn7VcvKxNQ9FyM",
  "key28": "Mq7mgFNh4WbAcDE9KaL57vSNhsSF5nS19xKbfFPxsq16PfJLWFK65EgWxfzM8mfrJshw3vXj7gC49bKa8cUrQVr",
  "key29": "yv2PZKkG6sRYoJCFCHYbDujci37ee2nj59kUjYKJcRYo6MBjWtNXm5StaSYV1idY8z7PVj8e6zrx1LsFeyX6jxw",
  "key30": "3XE1WPkFh6FMvqicw3jvCJo6TKtk2dMsNU4SZEcvnCnRAz69EjUZJkg2LNCKMLpaZBZfWWQcdSF66y3uiqnP1V4s",
  "key31": "4DSrdKojsbXAiBaV4WXbNuywu38dW2HpbJpbKPtwiUT4obTBT9jAWceUF8XNDycJvgvhfNgunDWDfPi2YHoyFkp5",
  "key32": "2tisJU3hi87jB7NnJF3mFkEtBkLkD9ofYwjM2Cz3DKxCWZcg7WdzsCeTNLGoGXonH9p53LnVuy9FALp1ZZXKuLYb",
  "key33": "556bFNigTwy2g2Dj6RPrpdg1KhZihWLG6UeCEbjyCJmT6H8jVemHPyoRycVKDvn7ssePkPfdWzNcKxnEfv73QNsc",
  "key34": "4GZjFv9peRBVdMcUcQjcGX8dougLEaRMkz9yv9EriPiYFiDdwTbec44bydrhXy6ZRajJBNRHTR2Q4Nnktvn9VEjy",
  "key35": "2N62dKzGk6jwxp7PraUbbQMpiCwH9KgHD9tp73RgNMVASX7HtJt6Bn1wUh7pv2r3gsfjuVwKtGqeBWXp19L7VxHN",
  "key36": "48jTFGuvhuLBBaEfVaH7itHwXEDCNmtaoEa4rYiMhFSyVm1gnSVzWvn3J4f7WyCeTy6bXLyYEHme9j3PdGAayeYj",
  "key37": "xkVnnbz5vvGBtxCipFnyHk9VmLkDRmhpmTmNFdXAHSiwynNPooncDrSkVdR1njEv65TpyR8VYNjdQ6K98zChVgY",
  "key38": "3yzs4yviUaEcr7xGB5f529E6PeYb5dDxKzfPikdAxabrFxEqBUxRoeCa8ERDNFioSGKNYujbxgoh62PVjeXFXXvm",
  "key39": "28WgsuWAbahdXAKMdhmcENP94kH9o2YoA2JLvpfDGcXCcjvS8GfWxYh3iMcfforQxU8b2ewvSt5Yc5vQdp21S1Ge",
  "key40": "4PiRnWRgDw4UsZ5JAtHpKphMuwfNGWRii9ysHyJnQ4imnGLb8gpm6ANKEXmxdhrr16jvPsvxna1CWpRjTTdJdopQ",
  "key41": "38qcQeKwrx7MFLEjaAvkBdxmz74YmPiUJiJJ2Atmztg1v8gqaSNq5UydFS43NTH5cvhCKTpWuzQPt2GKeGMiHZ6m",
  "key42": "5XskymJsbkQjoixXdKYvSjWXJdKiGbjYczWQXKexqYKoKo74BkK8vEqCaWFeCygUAUp5BAEtKNqgXQs1iZp7zZDo",
  "key43": "3gChtAJjfVCTr5HyZw2TFNbu3aiwwBZFsPuwSs61aJfd4HiW5Bsm29CB3J1pfsXYYSkhuFo6NTYnojytzyJZm6AR"
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
