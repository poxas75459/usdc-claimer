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
    "4eGyqWTKxoqEoC3vpuyiJXjV3rUTusZWBvQgYTCq8j1y3JXKRN77P98VbRafExknPQ2chakcpcPXvBMiLiZtJjJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WpHdKPsbauVM7HSNdGoexudFfi4uxwK2bUTDemQ553fqCCJsAfMT5qraS7Ytx6iTsswc1dUZyt8LzpbDaaBkkbk",
  "key1": "5xKEyfwao1ie4EfKvet3AQB9MktMAa2FC7g1FCNucqVNijPyjycyvn69Xt5y32dP38V6i7HNwd9az5ZDTyNjsprz",
  "key2": "K5KkN3XCyVmuPVGTa77NA5NPNdSBWAeXZENhCXaMoKFA7aEFE2VKZUpZDAptHZFpqDWytRytjbYmhZkzLCPPJba",
  "key3": "2mwLxZiAAXwszjsMHofCi8H4XPFVDrVKRcheN3GmkRV149o587Bun8PW2MM944uHkU9kKovHCivuDzNsAjFRaCZj",
  "key4": "5SuXwkkGzQksNApNmhwfpr2QWWSCXbAsTShoqFy1cnn6WjQmazJZHT8pXB11yyNCiFjZDbBEo5nWL8f5ABJRBUKw",
  "key5": "4xogrNXzLEuzkN1zLZtZANT8EfJxeoFNA6JRm8Vj7t3y4NwYnMMdV4nAqbswofDxe5xaK1f1yQFkEqaKBpCxyz44",
  "key6": "53eV5S4mhczj45NZNmuxwEuYxV6n3Tk6o83vNCx3JYgDR1EYgor8juz1jcLiLRUWPTwLLo23Ugg9dMMzsNdb6WZR",
  "key7": "54nNxNUWEpysmtFgtkinPBRLvM5fpbK29B2MEmr8kS9q5KCo178B78yfE3CHQK5y2c3VfvtNEhLYPK9TDCEPxy1h",
  "key8": "2oqxdhvkLihuj977vzVPuTta6783Ub5tQ5bpyFRTqtz2eanfekrA7hL1Nbxhob3nRERoTeJSg3Wb83zLX2ezjEcp",
  "key9": "vzkAfkfgMTDBkJPbgHGz2JxQteHQrVesxTmkLE4RyuNeXdzyiTdwFeTuHBDzZX7i1LMESbSDDpH2SJakEkrLUDC",
  "key10": "4DuxHHw8J3sV2Secc8fsjf2to9mTM2ixK6755uErgm6vQkbaooiEkEp3E4NQyByA95r5yqYJU5CqR6y7onrJrHfG",
  "key11": "4TbMpjexvv7c7CBTkDaCN1yPNys9ZiWs1bz5WiP8ypexsk1MVA384wndqyqi2wdd8dTLcgtk7Qvgcfk4yuhtc6sM",
  "key12": "2YuLrQQoot3L9r4yUg9iGbNbEvR6uUyEYpGfKWbEasa9Xr8v78UNUpJWQuJ1iPnVYxFQjkgrGQgYT3E5NSe3ajfu",
  "key13": "61xahoSbpDxxuhjdyQa7xNgD9hdjSkguwfHVFXEqpfp119ZLwqoiT4tcFKCdxLqemhvpWeuVdHwzpSxwjbpN93hV",
  "key14": "62BiEojz8uXDD3zZtLjQqMmCTtfo1mtx3JSBxRQcBXBgumajK4ZL7LcgDcecaQKgrwMjZ5xfu5B74fhAfsrFqRba",
  "key15": "3uiWXExf7ypdVMWAYtZYGvDrmu4Rn2JxsANaYxzr41KhTC1w6CmHkMsLK1Vp3hjJjiWQjgc73n6jVB9NQnfPUim8",
  "key16": "4Y9PBGd7Teskor6tiGtzHzLNveq1bFbJyrE6bpwSzeqhr1468LRpxcQHFaatobpUkhm7RqWWn9fPqAVr8BVK6XK8",
  "key17": "35vXceb5q9HtY7pfE35kH2UoeGNokWHxGpSheNo4Mn97JSVARjY5VD3JUzp9ie7MGmtnVKbwPsFPxEuy3GRXksFP",
  "key18": "PDPAfh7QzFVjAT9kCeE8UTWeSjcfTSARShtszLDaEYHzTF8Ur5PLkjGfDHpyVLfU1a4MPpmHoHJZLbqBsM7Q2mG",
  "key19": "2TveB1weoLhLPNFPKEuYnewGV2kCGYKjgPN3ntg5GDzdX5xi8C3iYbPXLHxEE2ivyPzM6cVRuH9LwSH9QpRZCV46",
  "key20": "3Rdos8FB9YfqRgbq1H5UQCqevosNV34YdF5PpK4ivJXnfy4g14r8raYJqip2JRQrWgd5Aq59eh38JqWx6Shp4Mvg",
  "key21": "64j9Lk3hb5e9WG3bXmhpPyQkJ5bzE61fWxvhsBcWoGggYnSCwJsgXGNibyrhfaXtgbMSfufNo8gZ72fBvNaEPNzG",
  "key22": "4dJ4vLzpkbcuj7kxFJCxeezQTjkDJeAuYbGDFFVNCztXzg5Df8VcVYVzvvrffUfVYvsunawehrDLrorooAqEPXhh",
  "key23": "2B1kxRRW56xbbotjeSVRzzTw81yxnXpTeErWykJEbgKr6bjW5BdzGhaWrfVSKMSTBEaB4LLjBQ7jCRqghvtEknez",
  "key24": "2zb93cS6QEqXSF8etXbAxA7M9x4cbia5oYwif9ZSUcRbkw8Hw2dLPwrcahjfZhusBwkANZscAJRvMf24UyEh9h2k",
  "key25": "3pxrkBXU22X5inWLcVwg7ioS8dDqVwVBJHUTijGyKGLdXXtAAAaV2zDbfjDzbv4ymNRHDu6vVByRSCvtHZ3aNnkM",
  "key26": "3ULFNguEgt1SRgt78hekRfAVQPJvq84aAxx6csKHxLunJBpxo4AEjLRfDo2oVtfFdJqjBTao2k6HR5ANk7znJkEM",
  "key27": "L7YwzNoDD7mYyiRPc6k6JeXRhcvY2qfBFKGHm6e8U8iLQj1rURktU3atwLqffhVvmWFEmiV9XGSgyWdjGabtuEs",
  "key28": "h4Bf4L8BZB2R3t6SNA5BqcbwLUeaAHywScUt4Cc1XLa84EEzjnwz95VZHdJmXVgLqvxJidN6W8277M4RF2jSXqV",
  "key29": "3cKPJLAvdUEmWwyUCziePJzHUkehZpXPtaHrqj8vXzgMKVU89T36LmDJx56F8nqz4LRHEbHVLFct55oxsAjt66P8",
  "key30": "3uTwkzhXz8fCdsJgVsZdT2YKGDpwWSKVbvkm4jvBPYkwusmhtum3hU612E5bn5cNB3Zs72dvbPiahQiQyCrBZ4BV",
  "key31": "3gtfXqgjSznVTXiSzrrQWSDFvNSqCHpjFFQpRDLR77bZXy1serCDCuFxrBWLtyPVMVzZQPPbrgWCTnNiogcy256h"
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
