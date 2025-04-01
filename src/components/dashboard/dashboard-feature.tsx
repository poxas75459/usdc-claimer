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
    "5dFW2eZs8KvC4ThzbENAaUGAQTFPhymmuTSPbgksq24GjKgc8uBR8aDm7hkv8nCL2N1LUqNVJJp9VaBUkw7B4K1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wZdYjovR69urRnuCDfzzRGLBmBeYqjDXqAujL3Yb624pfxJBCiy65MS4Yr82Wafo9sqDrHKjSfWWMmUTjT2PhqP",
  "key1": "36z4akriNy1TA9eawQCGusgg7HVt3MD2fVMxqvtBEPANDnAmU1q2CGnrR5HBJMeZ9JHidTVREEqvqTZB1HpS6Qec",
  "key2": "4Cnhi9HokvJt76o2nRRkedg13cXmt6pDpF5FL4tW4DaXiK9J51wszTvDo5MpuHrxxcpF3xsRJXhEanhH7kqLhEgH",
  "key3": "16sJL9AP5nWSpWiTbPqptipdygEsVCW8TpzhMnRZWeFNoN6uutHDMYjC14QSZjC18h3HT22xGjZBZkMgw5dN3SF",
  "key4": "27rr7p9YPRwHa4nvAyU8v5JmvbJesSLqdd765WCHXZypGkiEnZsyvp2kUqAHa96Mms9HyXSpHXivSWsuCrDRLwNj",
  "key5": "3G2BiSBecpHTYcbMb9QohYcRW87QSs23ANeK8Le8QjzfLxamxq2vUx5gB1rYeezoJNfaQQYoP67XqjogL6iLnfYT",
  "key6": "4mAHsUX9bmxj8CVsGe5mo9czk4fNLttJ9fd5udbrmPHFMrsCtnwimRgR1JqMF1UMyW3jgaFrSADEeLszFhvAE5mE",
  "key7": "34fjJkrydUkcV9TDi8ue7akfWUoH6dmz5LxHA4SRNxJynq12FJuXSVk7Aj7wYGQMT8UM9MkYQT66RiesaK6yFuoP",
  "key8": "5uwkJijYx2JahRzizge8U7KLLwKQdDt8Rrj4Zdofg8rfeKiMGNBu1FPNZWc5oX7XSdygR72pBuUC6poGM658Xjea",
  "key9": "3UAyj4XKCHrFZemF5NQNXDUCGB5R9pd9y9x1KsfBALgCo1553RtV5kKDiZqHVWmxy42xcf5yJJ5WTr5gX56AptRA",
  "key10": "PMTdkmoWmSYxAESDWe1a2eqAAvTKs1q7ie1iPvXJQyvZJn2jY6v2nrY6uKYcdS263oJEzmruqQn4wtbHU2xXA6e",
  "key11": "3TgRGXqWTcbKdF9dkM7TXEVCpbkMjfLgdehCUrJRNTuS36imxKBcPpfXseVPx8tS4K6ANWmaQc5QtB3JoYDbxM8r",
  "key12": "4BpB2q3VaijdPLqXeQWrKcobBqziNTqk6JUDLLnECqo8aF3vyhxssn84J5ahbxUTT3yp8MAJ3EnaWUK3iS7cN9Yg",
  "key13": "kMYCtZRzkxnyLSZ6gF584Wtrj4pczkxLj7Ua5mB3GQ7wZD8p9h6R1n1UbH5HPRptXv1ZA9RhgjeqiK1QrVE1yLd",
  "key14": "5ACA2vvT4FDViJqzp4WMoCNhAxvZe266LvLxeRThQWGbVh1uXE9AkgbS9gBBy2Ga22meRKMa8AdJendcSG9Z4aNY",
  "key15": "3a7mF9jHbGeJWr6a2V4FkCHykyLEGyKduqrbYhfTqu46g3314umJSAg7QvYi6ZHXnMfLWajSW93M7rMfAhNenzUa",
  "key16": "616jADhZvPKXbeBQTjebjmibpHhfboQ4FxxgYZYY4q7CLQfgeC7KzeWNvo86yVWYqPM1MqYPkW5JfVXLNAFK5qf",
  "key17": "2cZpeqY3bSzc6PW2cko7Ds3PHprVURBmuwnD3nxNe4eq4v2NoE3Sh1SMLMkjJf9cnZwg68BUxbQ5NM6Djwmdvfbw",
  "key18": "4TumeetE9GtMfN59ZBBxMgM3WSZmbcJpYZ7jgCNbGpWz29MFnh24go6nDbEUhP3z4FF4Nz4VPGbU1xdnJK29ro8u",
  "key19": "RMS2PCxbVPmS1QN2nQ9ZAquYTG8Yjj6xnNUyPyKc9mtwMg542iDRZrDM8v4chDYrYAExgqUHywALQdDHcMn9Uu3",
  "key20": "4xavcmBeV7wQju1PEavEmPN9M1Fq9UEqRkxSnJ5F1TjWXKcBgUokfAo7d8eC5MzTfV76fGjK4ztWPksigWeDHn7P",
  "key21": "37tTtjwBm7Ks4SKDmgE3GDoQVJeLFUB9yMZdHJACHEkPtAVeizBrvzKf2WfQ9o2SwdqKFbbaKjkktFoXunKJRH8y",
  "key22": "64ZKUUPdWScCCh2hys1JkNJTPwTeqWw3bi95HkJrSFvj2peQV9GP9B6ZajrM6G4KeaquSNL3p6i16en2ko4MP19r",
  "key23": "573BYqtVKkSdxHwjcdHSnJKwYJo6Jh4xhSBp7KxkcwgBEwNAZ3sCE69nuEXJ2ZSfafpZzdsufzPjgyHrGuCd6XEG",
  "key24": "3NhfFfqUkzgpp2ExNmsUqnnQd6MF7uwpYcbLwHdqHrjUdpFfSFrobqPovCLn7851fszZbp1dypesEAuJmgRpDSDC",
  "key25": "5et77n9AFXaxmUWg2onY7ndL1y7sRpCynFsx8yopw8sJtjqhNDnitRBxaSYQExQhDMBx93oQva8Eg9sZ2hkXh3nU",
  "key26": "2KKs468QXGuGkhj52ih48FNNRmE3tbYfCtF6oJWmzPUX1uR8SajuAL6ihMzw3vrK4iViZgAEytLojF6d83icQVXF",
  "key27": "5CfmueGxm6twBgNrmhUKuaWvFi9Xuv6CFVbKzxiRkzGYgMnkkkYKP28C6jAMCSNegCnhjQn1msrx6E9DZWJWsGNg",
  "key28": "3vqw3Fn2Y9PD6tueRTbLsbHthHknbzgXHW8WVC5BcQ2u4F1aaA7MJvrK2KuPM4kcySU57KYdxrvfVVsbdf3exHrB",
  "key29": "bQqjr3hW6birK8tnRFgwLCuVeUg2GH6az5257Set24AoHqtKqZG2ivSfgeqBJbt8zbutnXCHmo5KaCycuuFZ3zN",
  "key30": "2BAesZAJ2h3D1b9KsrkngsXQmn4qogso47b15nNvgKZRgBkkRhyXcMS9iyNomZ1uArXZr19AKihNT9E3sRG2KWhq",
  "key31": "2Ty38ZJz8jRi56Mck4rPJikXjtJnjv1yzJAuNy5uL2FdygwRZVZX3vWtB3eLBrNREpD9CX1mabqov9F8umdUSSMS",
  "key32": "3d8VFhNjTSXqbrfBfs37HYpAjHRynXa5skca2PCryhuDc6AuWgw9M1omXuFhQu7pxco5yeo9VS85t1fRiJLWy4P",
  "key33": "4ZP84fvLd4mgnuPT8FAbT7dD3gn6JpLsLYteiciHNcqdtVYrF6DnEKu6B9ydA3gyXxQUTmFDCAKk6t4r4o3MTBuo",
  "key34": "3CzhHewjHYKjSRMk4ymXrVPRUNw2cWK5zv8AqV2ZHKygFti6sgmeiawN36ZnBNxuLT7tTBLaTgcafQdbWiTCF9aB",
  "key35": "4J8AoC54VfjJbYPA7drhRNqC9jDTu2ZpUVgH8DUkvZ4RhBZ4qxCH1vgMcz3MizWDo7knKSDJPuJwcRGswYge6Jmp",
  "key36": "5mzxPJ6NV9sTBqb3wgFyXipadB9zjB1dyeFihajFMkM6i6WU8T95V2LwtL4rezseFcpWHXuTqPu7aPwkXohJxKmL",
  "key37": "uRpAhajcDCRGVM5Qxk46Xg9tjzT3zcy1bKyrrtzLqiF5PgaNkmZdbFe6kwqDNU58CWq5Nww8j322ExYkqddwcDT"
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
