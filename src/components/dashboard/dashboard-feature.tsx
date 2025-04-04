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
    "4NkfaqdVRGGSkwGtuMJSNXCoNnSh78mfY8XRp42Wrdk9PgLbsKDCX9zWM6s2egqhjW5cdZ2idknoS8tVxfee1fbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Zd5SgPdmEC6K7rN6XyfkvaA6UcRFT1r4ozgGHCk6TU8zwEX2CGPUEddmhsDNp4KZgEz2jKUmHbnNMXT3dWdzqw",
  "key1": "63XKNFwsqwaJa3YCA6ckaPZXu8YQvcr7kgWjxN2hYW3wmAQyCmdn7ynLizCr3YkgHkejLFpzEaVxY3GegrYYH2D5",
  "key2": "3w1XfHVW3F3BV8s6417WZGjV3cXVw1bUDj6M3BTbzcz85ZVw4PBpC8uvGHGAzs4aL6F2rYHXFwqwMHNYjT6hADvi",
  "key3": "5STpAES92xRPYrTyB7xRn9PRbThB5dczj4jMPh8SXmeQZ6fctyfmJLCrtEGdkckGHKEEBXtvAzRTB1ny7FRwahAm",
  "key4": "2GFTWAYjRncDnYngDfch5ThgnpyEQhNFf9chmMqbJMi6zEXo6tQtDTrshDsTWv1yioCL1k9yGU9AsJZLGzJTDGDL",
  "key5": "2bQrfJ42mjKfJ2taj9UAG8Y1JSqq7pDiPkn4S7nVnNkd1bfbmEmW31rFjJot8zFGK59VefBt9jqDt5JRwrNxA24K",
  "key6": "KZVoXYDxsxPsD4KHScDo8jR95vZGkczzcAvYHhe38RMhDrH1bVm7ZwVoQdfB5ErvWXo1Gz2hfEbshzFCBGQV2wS",
  "key7": "4WN9gHitrKGngeqJgkH5YVdKBJzikF3SXYxzE5NKssL2nweNNpTKk3QS5AUPutdnfEf3PMnSLbiaNmZiyEUhVNxe",
  "key8": "378Q48Q9fNfKodqtq7X3h74UPxgiwAjpsEp1eX7rsjLgrbniJvLVcQUTRVAspBvQhQA2riFDAAhdZPpeEkoZaifE",
  "key9": "3mVvzxbndusTQjicUKRPwSNXg5gi6bWAV2o7nKgHYBBCVVR5K8HSYDR1EDsWgAYUzdJwZDLJ69vh7QtLeJFd9mnz",
  "key10": "3pWocpU8wb6GKGvqNrtfGqtHKkTXrXUDauQqV2m13Ht6gpKbKddNZjhYWCAAniNhR84s21U1kjhaCgTmJhzHXV23",
  "key11": "5cvVF6JYGxrrLpKTkvND9hVw22QqKwS39vuqFUfnWP3rXp4mfY72KPCPEj3kzFYjQnhThKArvKdMkXVxNbVKTc3r",
  "key12": "5rhYy5yzFuepi7ss8zbPjrVGpuCgWKLSyyTgJ6Mnnc2GKvCK7GTiby9cn3U6zSwSWPR3BftBL95rNCAsUCJACwCR",
  "key13": "2vsCS2oi8T3e7aJyLM3RAT3FFWoUdhLUPohJua3c3oaUeKuxTLgdpX6sUYjBGbVYXSRX9cj1ujZPqZJoB6HLYQvQ",
  "key14": "4H4buGeRQX28odp1hK7aLwF8vfzPfF86TuJ2ispErzdEpw5bVJ1pCQ2rL4GR8fSdqg5KSzhX9CQVZXKNwCzxiKs2",
  "key15": "2HxePPAwpe1aUZQ6Ept4B6kXKyonKmuMyh1zxMCXJE5gzRGaZ3E8qQLiufGpcExhyGDYDRrkH6M5gNNrvT41zm6Q",
  "key16": "c2e1ehaM6Rg7893EftB2pZWq1RzNyGzxkrDRpDhCiKG5AdA6hP2So3spekjR8vwPFLa1vYdmzoLTk9GBczuMnn2",
  "key17": "52jCGf8dfMhECHASbxYMLF1Vf8uypMpTckvNCELx6eri6rmFqY7JCNAhPcKZwpa9HMRnaQPTb6aDLUnzgRgyhAVU",
  "key18": "63UwA7MvZAsrYyFnSSMNqNHcq1tMY9eja5tEN2LWB5WUa3sasGdp8aeC6oJyz7b35F5rqFMWNtyYgamBJGJosaF5",
  "key19": "3ud4LUAn8FumYTLDXwb86oFJ3zevN5iH7Z4b7ygjc32RWXRYfaFmf1mycdxKwejapgwvr5eL3memLKCwGCnpbePt",
  "key20": "3auhED5CAvgoSSTzSHkAYkvUdNoovVTGvtYdYTPFgGm1tEWymkJXoZhavMnXSPVFAAhqHhEbh2AUzzzhsqgJPuai",
  "key21": "5WTWxt5P4r3b18sdmYQJeJWeHHRAJk91ZHW3hwZZQTjSHDJMkaAAw9SUw8fp46t7yRWTaPb9QsYEdzxa5GxXWBz1",
  "key22": "5cCPhTnBuixzNhZjtLChagTjeN6osbzU4kyfRRkTo66HSUwfv6o2CKcUtLMWK2eYL7EGFgY4Ay7B6P3BG3FKfMZg",
  "key23": "2KLPgog6EMSfPkYEYcn7GtPhisPaTcTfDrn6VWaV7TGTHw4ypAAmaZTgqxy9X3ZwdDYzsofTwpy41qf9xPNrFWKK",
  "key24": "5RbQNBNCqMMDiZTNNXpgj3xYR98rq1k5yPUX6M1zomPSJP8vSm7nkpDLgb7Q7L5Pa7CjRFwB9fDzf3W2zUzxt9b7",
  "key25": "4cJL3j7N4TFBrxD7FPzuDaRnhMDraG99mwwQxfEHKmyvSuSGTBEyRfbwN7rvVDMoDmFTmQpkM1Dz5CRxCUECq493",
  "key26": "4xHvdDuYTpezABbNtaPCswh1PG72BXmFWcEti2keyeSHsA8Q1DKBd3um9SfTb9f4p56Y8JdiXHRCCz4E7dgYzuTR",
  "key27": "31GL8Y1mkJ2RM4uTo3qF3QiyUq7G8XCAySBhQGRWQxX7hACFZBDLbpqoAQLnZXs9osMYK62Zp6NP5mBS7TZoBTTq",
  "key28": "4jEqH3U8M9SNgBB6pSsdChZtXgcqrKpxZXxFqXhxUWXy9CCuMVrWoDn3PYVnSKVjuHjBXPYmHKHd4x2RpEzmrZQo",
  "key29": "61BcqcuoHDgioE5oq9evj3xvwtjwcgBknFffnrHtmBKxq9pd66GKz4TpxoTTPvC9fVTqrh7JxNRi8nBNX2vyEH8f",
  "key30": "4STQVe8FypsQQhRwWPsku4hujEyDHKTwccZFAp8pADFpgjtLSZqwMrHJbipJazjbcGTdQAHyx4BE4WkKJCobvEDa",
  "key31": "56t8ZFVwSRBsfiySFhHtTbg82CrNxgWLYZTWtBpnoy589YmWBu5jVohc3NuW4Sju4XfrhSvQCN93xix8B5sDCTRC",
  "key32": "4LDon8bKXUsJipk8bSu5v7QFq76HbMPwBrpcEirB44U9LyA3YA9PGPZK7RTo7MTAit5ayF3Uey3TQn8dKmgeZj6M",
  "key33": "44sePJpcJunoLrcKHqX3EU1ppPQKR8k8tCD3r5YY9E5suTAnSUQTLEm9T1wMzwspLPQdJwLgX9Ci2UpQAGbPX5QT",
  "key34": "5QNCk438YK979oGcggdyfGk9wNXSkj1Ga3YEhgWixM1ycNZemw5eCeztrmvcYz5nN1S2amEXSxQi7jaKSoLPgdQn",
  "key35": "639mQogC69cd4caEZgPmZW5NMgYAz2M9iJgrNNrEnPSBG4sYMLFpGmUT1G22nUUFjp4voAWntJnBkLZ5XGmTCKpc",
  "key36": "crwDNLxJq2GUKYjr8Ts96LnZhSTrWdmLErYSPd4K91FMgr2MEj9am2iRWbQJrzZDChU4AsvEvynbfyJ1wwNUB4G",
  "key37": "2kvQnf3RkDNUomBJ5s1Vnsb5JXZyKqnN8W1kazQtSaE6MqmKGesEJsd3yZYRVWPGVkW9dFjYeEmcktNqKQcRdvsx",
  "key38": "3xyXsM1FTNRKf3vrf3uwhZXFoTytYr1of6KPVEoMKfdxdx6NUu8mwrz3TpxjZwtqdt3DuLFhTUJs59fyiBEuL2h9",
  "key39": "je1oD3bRJrJqH1rRh9hB6Xq9UeC72DqyawYXWbYTWV8nek9beY8onwDd4m7qXcnh3jy3uAwGr3t9R7PdeSvMxmH",
  "key40": "4hjNqPNmNSwCKAz46gqeRh4xSK4b3f6f4EcJXFdjQjErUZkHiDqZ2kU7m9SWGghgUQWCcAQQqnq7H1Hgr42QHzsY",
  "key41": "4jpEgywBAgSKkVGwDqBj7bfVVDdy7K4AePhdnrRKeMAqBL9cyVJzLW1fjF8BDeAbH9jPP49qbvK6fbEVJ5EFX9PA",
  "key42": "26FzC4ZtDHT94kUjn4vDS31g8TkuD5tMN2oaCDqNgoF9jvkbTDFAxbusj4N7QApz6iF5zXejhzCWAMko2D7eRM2f",
  "key43": "26fhm7C7DD4L7ygCSFvfH1EYQkUXbYYuVMx9me5JHksp4NsuaYpfCxMoWAWFL2QDai3BwuKVZPpTen5fh78S7tH9"
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
