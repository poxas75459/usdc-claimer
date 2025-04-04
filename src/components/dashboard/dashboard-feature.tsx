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
    "YPjU2VPweKstQE2jEdt93mp4ezfy1KRdDhix4zHsfsrkoiQxbgKbdppziDjuQ6JFtpFA5LL3GKRASiK8TqK7S37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JVemsMojdDcJbzVL47HkE23rtGEnTFTvwGQfAbRPEw4F8YZUyxAD5j1PwQMfUsYXJoNrNJNUbFtavjGFU9sHC1Y",
  "key1": "53vK9fFQvRhmfToW5xtBiJ9hQW6zSfwysKh2noT9ypJE9r2R9vZ3H5PW5P7ZRFjiEHJVY4xzACHnTvWLhE4VHhzo",
  "key2": "57vQKAQVthfyTvQQJTekoRih1ZnyMTdP3bZJ2bdKxfHzNstZXGCUNs6rjqBFLxKs8HTpVAEANvqLd9wMi1nbF6Lt",
  "key3": "618WYZznryoYqd8PyiRe6XB159Nj2t2f1oxrCPfKjAPErffpLgy5iHHipqWapobo8Uj5Jg36Bvg6WHbhdCMZsh8e",
  "key4": "2S6gfDJKbK7xetuoQept1FrFb717mbWB7XqwXS3D8wtisyEAhSiwzUmACKaooib3gh7Ew8ptEfSQeZU9KDy6rGXM",
  "key5": "4Z9zxdXEd4qsvmjR6bosPwWXamoxp2iZdUUmCcQeMGW1VLmwksCcP3CBnhrk5wNcsgmEvfySMGaU1KvH4L2g3Nya",
  "key6": "3ADMSJHDxf3UgNwNKAJEh48TdrhQo7inSgGYXfvttttHBTe2Wu8ix4F3pvbMZZUksKUSg2WicrvBdm1sjVBzVvWR",
  "key7": "5nmk54SpbRG7gzsBourvAaWwwesSwbdcRShbBnJR5g24UvvaWE9KZss1QDZTfX7YhL2YDWroPnYJ6MWS3AByD5pX",
  "key8": "23Vrj5THch72uEDKdwGr7fr16m5tJkcTs5ssxDMjiCXvVJBtoTSbu8kEPLavRKPohpD8ry4FEGkNpcmeQb3JvTeT",
  "key9": "3zufpKKxQQkDC2CA9Hd72tBTt7P7Cdcso3E6supLMYkhdiHSVAP5fzonKiphgmms81e6zBTwgAdwwytpoChY4eSu",
  "key10": "5jRNStJWNXnBtYoxSHdfopDrCQE2Kt2YdvhKZ1rLv398F4VUs5eBJzXc3xQcdPc7EfV3UUB1VYVsqM21V2sJECzi",
  "key11": "2ZZckDRtVhQLEDi1mgz6Dw717A12ok1nu3k8RRV4ChsVz3JNfCNTGyave9iTA3YQnZTQhpdh4pTyVjhKjsqfduVs",
  "key12": "2HPQuSggwjtCmruQiyyG3oDzLyDSAXGMwesxwVx2euZDzDj9we9Y4Sf2TXaMsHaSx3mtmDoUczFsqtsSDqeKSfq9",
  "key13": "2fN5pTdycz2W212yydZBN6KfFYDJp2GiCEjFKEaFLV7WQ2TQVHeTr7bcUKm9ugDsQ73mPxp7WjorcGMcm3iW8YuM",
  "key14": "255Aup6UipkkTJPMskkdxrERg8FBBhtif83vSLD8xtfSqsvWUfbmRAXPnYH8uK5YdyyBZ5hKtVrZ2vrhsynu4t4z",
  "key15": "2PH43X1t5uwvEifPLZ9FdYTLekckGfjub4uC3xn3oCATfTYAAYVRW99TTYJvo8YJq6TGqdVuzk7XPi9Qvn1qzYjD",
  "key16": "3m7eXTUFaZUj5HcVan9N9xjyg73uGmPpbLAtwi5c1Z6c8EpjrqjJMwVnjwSESTSFPgfebqryT7kJp1M2QDXZZDW4",
  "key17": "jGP1vLheVY5dYWVS17SxLZCfu5uMZWbdtC4AqJZBXyNCm2QUpTGXHu97XgsnJri3a6Q8aydwdT1tuaof7qBDEvt",
  "key18": "zUxTDhDPtj1vN6ZUa9suJUuq2QdtH6C9sDuhbshrdpXPcLNoWwmUVCPXt9UZwWZkbPuqwWVPC22zBUQs7vTegib",
  "key19": "aJQQyL7FY8uSyqqCQVWzbh8orSQKrf7YY31Za5AGH7neqp5A9n8LJUmdQ3GZdEyB9rtb8LZ6GVK3rUjmRue5Scc",
  "key20": "49FT27aFYoW6KfFxvmbzPrxiHaYJhFv2AQgEbdPzjS3ums7ZJKxBCJu1s67T34kPgwLyzvYkeMZtLDMDn3vGssn3",
  "key21": "5ap4Ma7XEbgniMoHE5dPZkiBw96NGN4ZoAToeDb1rjRyB8Jk3v1pzFd3K1f4apNqwvLMJbBrSHphWTM4W9xcr74o",
  "key22": "ecVJm5sNeNX7Zqy6Zy8oX5r5RtJg2871vzWk5pAx2Reo5JMQirug7g84Wapgu8PXkchq9HirN27iLsNYKPoAEHr",
  "key23": "3XstDTtUpXow3mbVn3WGUDJjXgfVciNgsFhYm8iqe7p3cceyVrMBLdd7Ks38HPNFMFJE81VhK12nbNWZZdnJyTCA",
  "key24": "T93WvFD5agLRJhE28R3bYU4bLdnLr8T2YZBumNP3BDwq5RifXRwB6uZuWvKbavXxXCTtaq7C9UMn5CLvpvhv8aA",
  "key25": "a9MYyPxLGe49mXGMobyv6ekktLKuk2frpJ4At1TRzJE7qNmiwKiDXcu1Y9GkezRFmU1UwpjajWCaeMbfxP854V6",
  "key26": "58octcSnLkAUFH2op3mprDcWAv7XobdpKxEvJdK1Eg3gXwmUBxkki5Tszh1rrDL73898Sanwr4cCx2RRC6vdkSEp",
  "key27": "45b8JxDjwNtC5aeWkyh8Fk6SG2CZa9FfvmyVGbJf7wum3xNoQjiwgQbt4WcX5bsWYj2whCMTX5A2vFppnybPn5LL",
  "key28": "kwiAsMsp7QiywHSHvFjzJ5LuL7yvAS5rogsLVBrjMhfm8VsbW8QeVECpMdhpE8wbrpEQQdoxMbUzd67J7s72W7W",
  "key29": "2MiBLgYo3bNH85yXk2xAAj8Rx6A4Qre69CLbHsLYUa8ktodgJc6LPGJu5fCP3gXRJjuEer3nnXM4ngBroYj9o13s",
  "key30": "5i8rp16zqKSd4Amj7j48K3V28LHhqEGrGswBBpYtF1hdN5iPPF9aRfvePLJo1VLg8yzUve5NxjZwtpqUFyqryeNB",
  "key31": "2Jw2WoqLeX2YLmNki6kBVKCHges7rYCAvWZD1Nq6stpZducMLhYpMGMsmmzwXsRCFjSHLTdD47uPM5QveKMRZYi4",
  "key32": "5PtDiWozXWEJ8KP8XM4yBfK3et12rnfC3wNNnZ1LLQxbNHYY1GkRke9vXqiK44pw78jAz4hmZdeDEGe5tAwcREZj",
  "key33": "3oJqmb5LECguU1Cc19xCDX3ry3o4PPYGQ1Wurbwextq4UJUynk5CZc3tB8SYvoiQ7sucor33QsJvawNK2wTV56vQ"
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
