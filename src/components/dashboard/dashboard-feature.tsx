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
    "4k1bh9KmN7KuUgFMrBjjWCn2uSRpYtvwW7xZuoTp8Y8svRN66n2CYfosu7AkMHrBCoHTEpmGrfWAUg8Ci9iKRnKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w1VUkvXsScYrowKDHJHEX9pbN49bpen4kZ6zDnWTifzZ9fDJecFrT6Yr3n1QrFXPUwswRFUvD4SDzUG6hv96VsP",
  "key1": "CnaQbgoqkKUShAiLVRkSdSGXN8wRCrxiQMa2QRTYws3STWbjQn3uiyzXoEDRomn6Fg23xmHD446GcAuwfvVhD9J",
  "key2": "2HSHUKdATcgL1qf2iRAkfGja6iqf4JuNeKEc5cdncjcRhChQgyP6DaU5vvtGKmkZU2nRxEWBMegjDrGMeNaeMkG6",
  "key3": "6438hpuDHHCpFtpGYwcoJp911oGDBhdo15suuFUMnQHioFTkZ4Jmyo1mKT8ySeA5uEwZay65XemRm8nE3mv5BwZN",
  "key4": "3dQYPPVYhPbRiWeQ91sP3eC4LPdLSRWF1ka4z2iqsqeJKhzCBhKSrAQKfai5T3DeWkEJMTe2jvWCLmGasFrYrJrG",
  "key5": "5AvoQMzye3bUXhuQqaFVw76o1cHDfqeaBZxNcQzCUyA2zrnTdbUqvAxebCqonz6orTqJSaATTah2pD58bsvDUF9Y",
  "key6": "3YtVEsf9xfrVBt9DBsKWEGHG9tf8YcSG3YYbommKGa7uiAv3QjoMbF1bxKicqTuZqi7TUaK5ArX2ZEP9DjW9MM8c",
  "key7": "4UcgnxQsXHr3DMhYz8whfwo4VSy9C1aTGHWSfxk7etqKKbDTbgv2kJjvSuTmB2LQJ9z4HLaygdBq3RB4wxUHd6hs",
  "key8": "3KcLfisfzuqAWgHHHjr6Rzi6crohbjFqpcHz95BoC6YQT22ez7MkcwwKErdyyAxYYYn3V5sJgftfRr72L47hCd8p",
  "key9": "4hQ95gCmPeCKurQa7ojd5mV153iJuwez1gQjcDfnpyykVEZ9PLwQfCfEGTgvvb1wWDFGZysATQgTQJ9AX2xVVUo8",
  "key10": "2KTiA7PS2jDzBbxQ2wxSnHymCrpp4C3WAduoBxvXpayMXNcV236hNJEShGeFW7nAcKDdNS5qNPPXXrsDQjYnuhs4",
  "key11": "4AdVzwuZQCaRy58byevNwix3fgaSMyXMnKt8Vh7S3Aj8r69oXH3rQAAYuaAdHW9bamScujaS5Y2BLDxZGkVrfiw3",
  "key12": "3SK2rbzRUxvizrMCJ14kVJSQXVe228NMFYkaE2DbCRMpRUK6d1VkBG8pcjr8TBne1mQ4kccx8iRN3FE4FsqH3oXL",
  "key13": "vaH2r8cm7r9bR5vQH3zLhtgrG9ijQm7Z2rVUL8Y1KZtqWMtfuQwbiG1SRtvkSaubTDUXpF24f5YG9b7TjsCohmE",
  "key14": "5rWwVphf6MCaKuyWjR1tnz3ZwLS39cDDkYyQa9vzDwoYSG6wzBe2cFa7wiYmkeHtJXyt9ZkwFjDuT2T1YbM3htG3",
  "key15": "5ResUyWNtpYGnX4AFWVa5jcWWMWnNUotBu3woFMaxisoWrbWj6R4UTKi1jgTKhbTgfTMPVuumdWV5KAJQfKdPpz5",
  "key16": "4BVWsMido3iAyEXzQ9W9n49Bd2FRHdSFAcznXxn9Yopaei5HfrDZPwzg6LutjimKR2F6ZS5YAgRy2BS425NpUZg5",
  "key17": "4PbVCME8aeU1ytqNgWwNL2N4vKBSzs9dKgJs3DhPyMZKhfMBxKaAGLd1UMfxCFarPYhJhK5XgT1yNK4yaS4vfKeH",
  "key18": "34LasjdaGknboziB8r47fNUpEZ1eFpkKyEjEC4ErTXS8YDLsFgX3xT4EshsTTdX1BDr9nzGEdPKXREwc7MjpEiL3",
  "key19": "3XnMUsgBxvwSSzFbk1bwGz2am6pBvRnq332zDcKtkVnjQY41VuCdVjBUh6yV35er87DmUv8b9dspuwRnpdarvadh",
  "key20": "3fWB1Xjr1xHNEdNn4is8vQaHvKXE8fSsmL5nfbr6nrhpCnp4EcA6Q5PN4uYyxkNBqxRnCHaEP5YpBjrhzLg9FCMc",
  "key21": "2KoHt5aU2T6ZJBSpx41LndWHw1NFTQrbJGrq7whyJ9UFpCxwyGAhS51buJ3jGYrfcFGnJLzfFkxe9hC3VZDFRjTj",
  "key22": "3tKrb97QnvNXrgwhgasQCxuY4j53gRCVQJG6Pp2oCPTQKGh8Uns9xR929ChnpiASY4V4hHZUDT426ym63FB4ux3h",
  "key23": "2RkKVrH6D5BnMFuajiukSEpA7gtXzwcpAHnpnHVDZwKj1KmAcbrrfNLcQapHq12CBr7opxQ7BF3eyWH4mwk5SKFS",
  "key24": "5FttFJLVVawL4vtePGtyKnZKh8eHct1KZGUKsqnAuWLBYbzGADkZc3AUUqVEhBE6GLVZMcdiuX3qghgfWx87A9nN",
  "key25": "5fPjAY8pzSDueY2MZFa145raCHpp3icTQbBeHGenzhnaeVJ6k9DZVK18gC8Tqff9uUBmwzGzit4ae8KZWgBqXbFR",
  "key26": "3bUBUS3oMM373STwq4GitY7jCrbTnPh8gz49q4XC3fN962xEhrHQEgTYjYpe1JxLWuEcTZFBgqSwDpSVP8DJVAHi"
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
