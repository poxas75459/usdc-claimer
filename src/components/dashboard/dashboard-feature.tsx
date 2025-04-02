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
    "4KcJyProiguyBMjL4yEuGNquEtbvqX7cHyMaPiqc4mr4jbnfZZyCZCTqWSe4usvPvMaywWtvNn5jQZPvAzERMrta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "96k3CfiT3c1Y6WhMYcopni4nvMTKbe5G2ahfA8P5QimtqpBCcmVkL2oJi8K1Q7P4hsP6pVPUcKiQpazhKzgWjsh",
  "key1": "4fBLjGnH4KzBwim5qhW5Aiz6yNdXZwy6qdjESQPFJn5SRGTTYBNQuHU4JHJYN8W9swe1L2A5gU7xPFgjtveZzKyL",
  "key2": "4Hdps4ytYDxDM8hMtmj8bCZEY22sUR4bM1eQhvcWTF6CwkxUWwp8hUnkiBfN7psaypcRsH72FrJAYFtayvGbajJR",
  "key3": "22PKKubU4yp23dxbnxwxE5CENBcLgwKmrxBdJHjYEK7UbqxrpGAzADTs35bExWkmScgourAWfqg8g5dd21S19gVY",
  "key4": "663egHaSehqz6r1tp1XdZKkdAMFaU9JfroUm5fdr5SC1k9jtHrTFPMWKsJzes5cSE2wczsou89g9dmsE78KfPktS",
  "key5": "5YbvruZkdGhxwWuqR3nUHC5i49ef6NGVQhVrkCKT2C5x9GXYyRh8vpcQMJLUYoeJ3Mo1wgC4PoF3eA4dWi2BvzGs",
  "key6": "2GYU1W4HWZ3ipcWYQ4mX8vBAoCb8uajDrzyigk1qzWQpQYPxyJTpB6qV8C8LAmxMTpR4r5V18Fr4p8NKXxAWm6mU",
  "key7": "4CCTLNDnH9auRnpFAo98Enij8gLrikWEryPvDyRBL4KkYE47MXL8pPvUP6Pvm3w4xR28Kr2sEDGLH946CSn851dP",
  "key8": "xvCF9EctU7qndzUaWSNUndSqyRef8tNHwMK7jM9M5jaAMj2A4RUv87Ed949YDzT3HFkXtoEGCZPS3FFyLYX14mE",
  "key9": "Eu1hdTkcr9YKUnbg6V5cL4xjLLhuwtMTFdRCR8YLwuGESXcD9ZNW379StWVoDG4rCXa4DCnHmLQgyRFHqmhBYAC",
  "key10": "wRKYvEjuCMDXZjXJjWRrjn97zhq45HmQRT9AyJk1YAibf8P298ZGYYLcZDXixVMmzBDbnmeAJf6TCJ7Fwa3Akqd",
  "key11": "5nomJPX9HqYe8ZskmLdghRhPrhtcYjHLj4doS3N7TjECAMmnsJN49FFYH6kuUQgknjqKNHEoEpLHL5BpMu9GLCCH",
  "key12": "2jvotNXYCrMSPazyCpQtgfrHTQCE9nq8MDjd7SDvWYfCgf83MRrmf3NdS7GJBVbvtdFhLxf29o4xod3PYyVcsG4T",
  "key13": "6jEvirbdtRbwgiCWyDPTMK24SPV7j6byFP5uVfsfjVrL3ZTEZTA1p5REXNjywaHGwLwxHStPnLjeWHK9Na45UeU",
  "key14": "2gqbE7zCnC2FtZN2vMzR9MubDSMtUBbbXjB836C7MDPuA1anrjvTrnuE5nRhUgi19fgtsdY1UNR8mST3J3sB91Lr",
  "key15": "3774dHiJYzrnHhv2TigPWZPQ6QX24hb3ruJHiYGbpyJraeBSTq5roDWf28HG214k1YuBA8s6PsZtbBT5SyMwG9F7",
  "key16": "52HQ6NtnC2FtfSfGAhH2RzJqnikVZBuNR4F2X4KGbjoJq18TCNvntZbi76usnv7muyyA3uFw8SP1dsV5yMQdSB7b",
  "key17": "ScBMWSZ7MgsuA9oxbaZEyjtXh27miJcCbGeC1wRCUamJsmJVRkAuFM3h1SiPRChHcXXPSJdHBF52tfGTnMbTyof",
  "key18": "2VrVRq2QC6xMkYsvFf1uxe4MFTqRvgDg7VnbauAr25FmaiDf8ZfZ1cNKVbQ3RGVLL9fPAcNHBptXgSUZKu77MZJk",
  "key19": "67Gk7ggfy7QFwPCpjaoqrvHUBcVm52QRMZktZP2euuikYgW333YAqtc25Yt5AeMTWq7Y2pHSc9cMWdqFo598BL8b",
  "key20": "4N1fbHi3twQ4k96cZVRWwSknLWZZvJ6QwMVCRyeF6ba2fQJYDm1ZTmiYYBDT57aMk8K2n79Kydx4mDtkx7JAmpSW",
  "key21": "3ySLzijQ5fRZyXBXb4rrDVGHC4FdmLAgAhKjU86vB61bQMAKQnJAjGVQqhnobeKA7TGmTFVjcJK44KsvfzWcJa8P",
  "key22": "2NwANDHD11LgzoSKj82CEEfdTg5moLst17gigfXV8Z1eQPDk7aqF5UTqg8zFkcakHK4cbJA33jrJDnHPtVP39RxB",
  "key23": "5FfW6fXi5pFY6isKPA2jWqDRoqAPZpiRFoyfE2RUVNJgA8MZ9raycAY2P38cSEKwrv88vWhTwYsnZkePFPQsF3Y6",
  "key24": "3PwdR9Q3KF5PNZRGfL9SCFpfvp6ZMJvnkvU3yynh32TYGmrH2HsD71ULJJTYj9Sm22aUYsTbsHdzFAJntz6c6WVP",
  "key25": "62FdYUWHZEBF1RcXbrR5D8oEYht5UCXimpJrN2Sejau2QdPBQh1j5QWWtBQNMna24jTJogwFfKjWLcDg5UHJQfaC"
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
