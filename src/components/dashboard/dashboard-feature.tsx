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
    "5s5zGSh14cGyr9tJRTU9uh4cwMffn3XQ3HhuM5fYSPkY4gYBmLtvRs1wUVSS9hgXEsis53tcD79C1PVme6bCo3JX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EEzX7FyqZMHRfG7BTWcYD7GPH22ewV13boFyoxrLk58XtydwdFtzyETGij8t6nukzio67rF6P3bBhnHt2crPBtL",
  "key1": "ExJnQFM2TiS4wGwVPh98ETHTADCBn9FmMdUHfFYgKp9cQypMDS9XyfssjKYc33WY4dwvmbSjmscb5jjigAMHfPv",
  "key2": "myZhkg9AAoXMtwjreGyRfgJquGZFKN8TegF8w9XPpyeKbyTaijh4RxZTibCuFviwBXghZ5ChDkz6m28mFGUEWtu",
  "key3": "67irQuyPPE7JdihMtnRDUznDQbSQxawzxAEAjt7s4z2RWhJFQ6SrxTyjQWSseYTsWqmtB7pNaTnV63NKRvDjf1wB",
  "key4": "3s3s8yBUDfBP1urdBvLYMrHkan5miPMp6UDw9RDs4Tk8QXt57KHLtwe8TrEkT95wb71daogaHWcuyi9raCa33Wv9",
  "key5": "3hraE7jP2cXuT9LkLsHfwGZDowxKtbJ6U8qiwcscrQnyjBh3Mity5MC9aB51cGYVRdv1ZMwjxFkZH9p6pASJAZhE",
  "key6": "3Ru6aXrXpypGsmkAPCEsCJApztdnTfL7LV8D3Nx5SCckzhNNmaMEZEqXfFrbyZ5YLhr3gGLk5WuBWGSp9JbqeGBZ",
  "key7": "5ZirD9qt9LgUEx5qc419NjHpU7CQ2vHT6Q5ZdiX1kThXpAFvSYo2xnu4x6KPtpQgRgHw7FUN6C1NvwBpUu1h4Ke7",
  "key8": "5uvJRkHD13CwJTZi8QHCN9imaTGJLr1GwMVJQtGVG6i1c3kUSWHgnZKbkvM5W8MxgXkybbmu31zhfxHLvupny3cT",
  "key9": "GEZrXBN1XsQBbRDBwBmztq6h41DfaKojhVshqp7LNwYnFR8NTnQMRTPeSyuRvLpmfnpMBSnTibpg8shvRntbZCC",
  "key10": "3j5uptqtrBiGy6axfJSDovWBvjZmB4VyoFeGAoaQ8JMWxNm53UF9MFxeT89C1S6VhqxaE39SipxNuGhcN8w87dQ8",
  "key11": "o31sCUdY8HEnKwon9i2X9YAfBYoiaqgsY3U6U7SwnE3s7Gh3zt2fRE9mKJ1NMJ4Eyv6xumKuF3DYqVMHEFFNkCy",
  "key12": "27RRP2YoZLgrtGnup9XBHA4EZYRkKcuTE8WJDWZFEQQV7dmDDyonmEd4CLtahEPJiboctwmcUN8sRGYvAfLtuimB",
  "key13": "5UVFrQueksVbJc4ZoyBpd3FnbSbRVhvzAkErj6XGAUfxgprP11ybgzz5dCScfBb9YWVkUeHQcvw7Ka7a491DXuJb",
  "key14": "6pNpoHsCbHLscBosffZ2uaEbAHarUepDGpMrLuwfKdXuWNHyKyQ8MfNWVS3yApofCj681UMpQFYeewgUuQZpQ7S",
  "key15": "53UBWiHXm9fcSC11WouPbF4JeW4HDk49XdzeccLULag7zjHa5YyesGCJNx89CNA69pP8tZPQxeCuZXmEn91xEsum",
  "key16": "5zG2mLVJmjM75yMFsEKyjn61RUmUV7WsMpXjVcotwuq4GRzPAUVk9atd311gee1EGfV1XXXjYN9KpMdUEjdpZUZC",
  "key17": "2DsEBknQhpFe5F1GYCZMrsoEM1T5oWx5Fw6Nuqnnzhrs91yqn7tpetTxJvoBpzSQBQMiES5yJwdxj7n4MDSCmF2W",
  "key18": "LKoXtLrJuFH8sXmyPkurF2Ye43wyhpAZyd8GrFhmEyEMvKnaRMpbxdDzx612zMGDCgxc2ysABD3dAYjNY2tTL32",
  "key19": "dFDBudcfXudUG2x21SB5iNHWFeznsHYKpN4nKsKsuLkJTdubfkj9rmBz3dD5aX84zmKKU48cbjHo2eWviJy1zsk",
  "key20": "2TUCd9dWfyFfMGLFKN3GPB2UzMKLsVrTYcM49Fwn7KfNXMRh81AMQsgVv27ZUpdMA8LWCV31R8iZahfoPGoE5qad",
  "key21": "Q2HA5kDhPGXrFjvzpbPKsQ2xJon4yhhpwQgGZFXkqQTjVcZ6sqEQau6ZGwfrR8T1ABWXVi3FBkrWKRQB2gPz5PX",
  "key22": "3mJW9GVTYEe84ktex3tgUPok26JZ6McxfKvTGJRaBwTKTJ8tHA2so22iADEXeF9MuJGjnvdVNQzTNFkHVCr5Acsx",
  "key23": "2qSjqLM5ykvcW4S6auv4cMwLpMBUeT6BquVNmguiAvQ4BqDxPqivdHMhPujXvL6nueCfo6Tusm1N1G8n1vf74zvj",
  "key24": "3kECvXK77zHgjWqBXT58wuGSLKr5GScuTRCicdC7UNAfB1Ze6HSDH2Dvc952x2bHKRmtzN3XPzq6EuKSD4uegvK5",
  "key25": "JbBU3DSvvKqNVERZc1AMqbeiYnfvNWYW9e3SGCconqmbGduTvruNY96gMjJR21Aq4L6m3wbahDvRYnJ2zfisx74",
  "key26": "Ja2cAa1eTkrxF1bucU4bpnXfEmJLhAYoCYQYDRxe2uUGXbAHy39zJsiTXCCN8ScesVNf1WdDpYdvYHKfz5XuSWq",
  "key27": "43NTvrK5Km1jaqhVfDx8xqbj5MrGssx441EbsRB5qQwmzsjyEwPS2r6thPvFXyC6zGw3HanZ9miXeWqhHn7t345x",
  "key28": "LEGQ4LqkMWbtuop1jXpUEV1HkW2Vmb9LiDij7dR328VRvKCLRsMGhG5KYmoA57xsdZtTtZRX5EHqCRkW2FxkUPL",
  "key29": "Tu4QVhiStUwi25a2E7S5YSZaRNRaoKxXnrbm5wAPajfC7J5PB7WfwR8LWzaofQPYfbUZsYyegNSixR19BcZ62DG",
  "key30": "MdXUosMemePWL3XhyMA3romHLbmQF6RsBXEaTqVdrJzdFzXmXHVnUpUWzniCAjFVA9Jggo2NFGWfxZX3HxfzYFd",
  "key31": "27cvmo97GPQSQ46VRF8naQUG4x3Jsomm14uADqRDZUXisseFG7ggyRE3kxE4zpbxa28DPpjZV7HCm4CK4PB2C81Z",
  "key32": "r1fJxWhZcBsL1Ntrx1PnPNvNtBfqmUd27ax26jbJvGsv7EX8Fwt3JNLWE8i52xBtEimHfKsjggTSDLueYYt6ngr",
  "key33": "3SXZDySENGdMagK17e89LaMKvnGTuGHDvgyRPsmXxrJnVD97mDryHtyaqqe4eQu3tRLJQa96bSrk38sTNDLkLaCL",
  "key34": "dQKG6Zzu2k6nD7v8ohp9yNebM82ZaxGBEuQrWJQRqinnSxKSr5JjF6JjU79BtXcnfGgLA8jTE67d1EnDHdAFY9m",
  "key35": "4n1HxN92S99CWLxhvhiwjYoSAsbWsnDfqHbJrjq3FTRyvDYFfK2XrF4oyBUDAV1AVov4CjTXm4BiafjCUX27HroH",
  "key36": "3dvwh8s3K1g6XBtTDAkL1cVqFwhgiqACwobfzbtuW2SWPdoAdbf1aCnSvFokjsrEPAwGtacYAv9Hg7BdrhTTwt3q",
  "key37": "4Pyh6jAFN4PPcj4Xc13crVMnTqTc9k5gVD2Y9CixC4aizuSSDW9UfgoHAaMSMXz5C7cQ6ErhhkpRfrK4YUkNrvRk",
  "key38": "48EMSFb1QDx5Unk6V5LvDLuPxD8jS5FAZBVPYBXpcYG1hYe9pRNuwrNUsQrwvzqyES2ns1EAVRwSzgvb8o6TsrQe",
  "key39": "2idrg6D2bZCDV5CotSYC9Bpi2AF3ENfwyk8PjQrkVsD6mstvPsJysGEBVb8aPmN2Fuq4BWwbATeWpmX8ZeuHctLE",
  "key40": "QkVaYs4mKec9KhPFbXkyjWQgYhCXQEtvc5Y727dAUnfXbe9nMqycqx9Eu4iAMdQXnWCi4YKFSSunowrBVtmh7sz",
  "key41": "4QTprHADQvmtC7pFfdvjvc92qh6ztpoQCUiyYLaLStV92ehBEJwi4NqvjVSzLfmivmqfRtHmUskyovPH3MAsQQmp",
  "key42": "4w7TeEhD4ELM2gQRCVhnzTTJD7uuuLAvQ7XmbgSYS6sXo4qcXey8D3jwhDhUCXVu8fQS6CDDv3HoEBC9PK2DTN1J",
  "key43": "3zT97Hx6oJJ6yBrDFnkfEnCxwDpbCbXig1QXfyAhQ3SeuJytASYZFQK8FjtwhmSjGgCLrdyUR3bPmVbHxAymsVYy",
  "key44": "2FSE22KhUqPHcr9fMNX3R6zcbCNwWbWVLMnQbDxsAU58d8bBpH1G3ZtyHCcEVUb6GoK5pk4WHukETKzq74GQorv6",
  "key45": "31E4FrDYyFvdUycoa6we183pUD7S9EPyS2Q7Dy4jm3SodX8mGc3nrbK6NS7E1QUBvm8qTpqbTXVXH1JR2HduwP9o",
  "key46": "2ZX54Bh1qFPyzf5ARbyhgJsjVGViq1EEkPUVE62padjNNbfHK185cHMmGw7fxjStWZ2oSprbpBZX9ZKcAyuJf63W",
  "key47": "rHd9eF4R3MGyPFzfaYzgLwmt8ZJwkiysWbtUwmPTR1zwRaZn61s8tTYywC7d76Qo2dQ21vUjjSbQvwV2Y9QHnPm",
  "key48": "2T3Mk6y7rbzhtMN7QtaR4eTLxe2aa7EW25oSNnGTer3vhHGPv5jL7xWS9qAMtf48z4E88C88fU5AS4cEX7HzRgVn",
  "key49": "2vPuiLruVEkMKbZjGZ1BPHqHCH1HRNM6satAuLihgBdxdWE5spZ8uvYCA4og7QG97yRDd7KAtKJEEK2Fhsiv7Wn5"
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
