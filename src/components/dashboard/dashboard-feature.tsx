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
    "2TUfgBaTtyHffwrNrLST66peXu8p8Kj5M7DgzVPStVi1EB9edEcZf9eqK6ymAB1mK6vrAsyeEK6HPDF7wwR2vmGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DcdbxEcUpG1ZvN79vvXVm4f1hSHy6ZnXxDvAueiN6N17uaq87sDK7fQZpSzBcWDePtpGhU5VTPicQ8hU5s25ctz",
  "key1": "7ccC4vsjHpDQcXcS71tPgqnPtVDCDhbg5WBs7irm5z7ie9cyS9PX5nEaq1LFaadLjPdbnoKJuf2mCPAUikhpqPC",
  "key2": "3vozEd9YmpYx5MKdMDaGDKX4y5xdx2cwt5nn9CkFQGjY9NGAzW3WYKPfy1bkesXVsrA7LfkpSuraBevi29rUhHQt",
  "key3": "3PTYU5FNkW8y77RDPWdfcguyw1u4k1zHS5f3ZSDiDv2JGGyz9GH9q8QJ6xm256zHASW3mnYXLfBxYBBX5Q9stPrd",
  "key4": "24oGaD4g1gBiWNZncgXV67fusFduPwnrXmKFtFZwraE8XnCXhDFpYHuDdE1DbqTeGzdGFWbkSpovx6rWWLrkUwbd",
  "key5": "2diJ88FcnmbS8HZwCWEBMeimcpFYKsMqw2w8D8bt9XMQ3cDjx8iY8RYwQZ5Nxc24AKHekMH5d6Xe39fk6LCdruQF",
  "key6": "47wukPNF91mZAohjme1KpCBRQiRUoHEg5d4jpzF9bo6XYJQtFnLXoatD2qMDMkp8cMuU91V4A6D7qVwuZrK4f5Ua",
  "key7": "5AZpJh8SBTeiogzEACgfA3aCjxhaqK7s8cErWAMiCRUAttVYY6FSxw1PpHjhqa7PXnWBy8CQCgCAHmynnUMNL1ve",
  "key8": "2HxprowYJsAZmA3LLZEmuC84fbLebjau7nbU7GAuTXi7oWbXogifEZUjKryMmDpADpa61yxTf9qsjaKkAGX1Urow",
  "key9": "3oBFMAZiNcgjWZqcKB7i34Zv64FP2P4FZE3W3kAMHLfL9Bym8ThgwDY9ur8revLn8mBBdvKwjACjrtUwjy26d2Ym",
  "key10": "4vvmBCcw8e5qyKiPcNYqdJEqQd2vkKfueugQ8Fxb8vYtMm7JQ6TMqfwSVQfZQm46Dj4JJGySRpcgwtNozmyi22ox",
  "key11": "42RPD2e9fSY6GGaAme4NKjusWkU6x9NrUaLYCCgbY8xfcjF27k58ZjeQXwswp4zqKF2CjkdLTUHUqbyGSvqijgxr",
  "key12": "3GYi6jGNjSngXbCXC9eFW83HyRPMzk23QTSU9mVo4sUfrKmwyBTS7ZPqbVqktBWFNkoqrUsryfyCoQZy7ZJp5Uuw",
  "key13": "23QH2y9g1NzzB3cfXBvSuy1JnFVCmDZ1GWASR5u5J3R7VQLxZshVx7yGorRRQMF7b4iDyEx9UrJMjErTjp57fbQ2",
  "key14": "2FVQQp41UZun36PnM6cDSg9QoukjNarhWDszdSdZXbfRe6SVqrskbqRzDPFNvLsKjMHocKwQv1dTFogt7c9zSYbV",
  "key15": "2t6djT7HaDHHP2Ftz6f18yK1sKq42J6cBBnxkSfGSRdvswADtV1Fa9KvtNiHe5UwRpSYEGC2P1JRUqLiRTCyDdrQ",
  "key16": "4KngQA548cv3fRjy93ptxtA6CnVepuMWAHuDxs6S2bxTSDemifv4RGunrzR32HBSMt6pZ4EYxUP4xxxAM4RCG8UG",
  "key17": "5oPyBPzh3SpCUthuL85h32HqDuQxTDx2f2Co1JdLRD6YPyZA6KEcJbw7U3Unjd6LsyqSmxbocDwskPYhhuXdT1VN",
  "key18": "5noEgcDMWJfhEySY88ktK2ma6ua6MA22z5dZTYtqgnRRRcjtuaEU81vUhpKEdqgEL2fP3NS3CGicjCqmyFmd1CWL",
  "key19": "RdF6onzCqwRBPBzJ3h14kNbtXXtvvprfgkQRft9EUaCx3d8KCGyqF5X5SHS941dAvqjHr66eF9PHJBvtfq9Xfkt",
  "key20": "4VxyQjbDQTeAwLX2xpYqjomYzQ8UpT3X3EQ3QTYdwt4PsZFhnXdFnaadj3kKafBPHjzWZcGDwcydmzHhvMTakX1E",
  "key21": "3UgMd7zauBAYq6xZUv6wfGLDXQzKSW4oguLZNrWd7M7FQYxYhFfdx53jRZjHDikBDqtnt92zTnrjq38GEaTqDsep",
  "key22": "4ZT83fjr6o8gZr1VDF43jv4Snzw1bbzJLAvNaGKgV7bYVsk56ib58TeKgKYGMfa3q2FESexsfztPP8VPY4CrBTrZ",
  "key23": "5dXcpXDtqA654CMPnKrBm5CvWHS9syfQBFm7JiDNhFHvLSuMRPLwYrkTwcdFeu1rzVxxhjN4wRhD63anztj6NsTW",
  "key24": "2tHxVv2KMARvvfEvCW3bc2FA4m4QidZJqkUyLePq7tkwa6uz3YBd6mBWnBXb7EfdriMZm4hR16LC9YTD6CrpRw8f",
  "key25": "2v3st8UHwgeKNugxKz3C3BsAquSfBP9xsMQKG7ay325A38pNj8F3tLFUMHmDs6g4fQp8ii8Td1SkZexNfL49tafx",
  "key26": "5nw18Sqq7TN6XvRR7gMKCryivBPyq1XoGdEsHRbJzF4LBEtL2h43w6SDLt8prTs79pQktT3qNvVopa8QFjNw5sbD",
  "key27": "uokWTGMQfB12vgurzf2YdHTpXP82dsqQBp1L4DMgmYhfGH9PD9dQcUT3V76TxHZtuhqSVuhFWn5arZp6j5m9PwC",
  "key28": "2MdTiuXciyC1ayqJSKJU3id8dKAG6jdbTm2XR31ceQ5DBWYQPGyHYP1NJgsbhHjGGQLXUq9BLBGuK4vJGfZHKpP5",
  "key29": "4RaabUcBkxowcVkKL9rUBPHXH8VCqN29kK9wJsLfVZABEpHALNXtfM5xoUcEECDx4dWQm6VtqY76W6cmutarhoma",
  "key30": "24u8xFdqC9UA7XEmwaTdRhzqYttcXdRNc34yuH7u2mDg32GDVgdU21D5BbArNgJtByx42VGKzWzDgfQbrJVas8gx",
  "key31": "JNdPnmAAvRxcniDVk7WsbRWd89cCagwDf2obMm8DVK5daPSxgduDcLZkbgNXnWrb96h4L58vYAkvV7sBYrzpZpv"
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
