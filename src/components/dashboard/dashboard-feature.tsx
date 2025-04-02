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
    "4zEor8SLgTQFs8YgL5cTwztEsP9Cy54A4Jk3BtfwZ6qCiXooa4Aheccoq3snGD3UmYjVrXj9KLzHrQcbuK5AqmMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ERCwj4dqN3AaeLE3nWTPdpzej3KiGPLwoyxrJRmYLb8qiVSiNihwbaH33Nd35mMqfLcaze8VP218HGQ2yLEjZk7",
  "key1": "5XEn9VxJBrcqLbfwVMA9nuY7N31AvRf292KhHsaV9WkevHUm4zjmRjzwtu3dTZBJ7zzrMPXR6cMsAR8aP2BpHASo",
  "key2": "4nt6EUUM7gQJHwaSDvxzbCQLgBfJysweUQqHrqCtYTqmX4Twk8AvchtZuL3YH8KrHGti2ujWeT2k6haZh8XWJHfQ",
  "key3": "32FcnTWvm82Fyi1sH3SiRXSsCuxbZLSv8UZEPRQPig4f75q16RATLxckMZ7gxLYAtJLWr1iTSPE4BSUfgb5fJnHZ",
  "key4": "3qLLK5ahNKgGKAhfpdRsRG9c5G1NDHrFR9DmHVuqdgS9PC5VLNAZzBRDw9X4KZsGbUeQnsmeefWgKzASHBFphtzc",
  "key5": "2GKLLBEyrWZFtgNMToVJ4ACAu3J9boxSm2BQfiVgku1KRPGCe3UDsM4UHKxTXfanmMLgP1sTJuWjqwdUfGqgvH44",
  "key6": "2cT8jt2pYZLMTHH4aBBmuYj9Cj1p9geLvQQivQjnFdAkukCj1BusHnTLDpiWRMNW5wfdpMPSwwmUfXPrPueQkXoK",
  "key7": "4NcUi3zapgE9p51tu557xqvqgmjJgVABt4dYiN26iXy9Z3wkYxpR7hg4uPwETPwjqpWBPeYvB5ciufYg7tojaij6",
  "key8": "61LrQ2WVKVyjrW2rNTgB5vEx395691Y7ifScoa1K4Ctxhn6rDSSoyvRPXw9s581DFk3yq3nhzXVxD54DePbeexYM",
  "key9": "NpuCnRYHMUpyM8NfcboHSg7X3VePm1hnMQ3NEBu4MwUNoVEYsUaCwWZu3knYbZoAZHYEEXbLEz6pKwdM5UrWG3b",
  "key10": "3sJJW79bF8p9DtCCs9FPuweDGLuHSWz3iSznpPavPZC4bsEu2Ywq2kMvbvD1J7eFRmcizTryguzW8Vw1vWLLoQEf",
  "key11": "3Pbc1WLiELuGxb8UWNqz9kjGMbFhxGV4iJjT7piFCcRiaQjUqKZP8g8HrUxRWRbxaeoAeY8DeGA5gbjwXwwByNFr",
  "key12": "kV5rRup59yLF3iXG7uCZ3m74JLz3tmTJ66eAsQZcx3xu3eJULs6RKJaVpHk1rianzh3L9uvPEcwAEoBwfWNZgbu",
  "key13": "3HgKq13t2tCZCdz9msDVnPZJxHVdwWREAH92yy1Yc4UVhCFf9YEYPbnWu3F5BHFZQ8YkAgvneRPd4jedYrkCZb8o",
  "key14": "4bhW5MHiXpnYzDeMZaL4bX3fPdBT4GkJHhFDiqjeMPQjVXHUXg4ZyaByUtqNsgVvVRf4R42Nj2sn5k5uL1k9Fqsa",
  "key15": "33z3dMxLz41TAZC4fxZmfVb8sfv1cjV74FQc4B41fjapmE86AeWVsiMv2CjBjP8SxedmMih1KhpzEnodbKjJB1ey",
  "key16": "3EabXfdDRCTSfRCbGtELVTjy5DLLh4eu4pZ1u6AX5hmZJCBziQr2bwUKYza11ysgGGhdnmQbEjWwCH8aQTP7Ug16",
  "key17": "2V8cyVZiDSLGUv6xRCo7qEhBV5zePYZFwebeWjqqd5SJgw6wD1Jd4uww828icuCtvxNjCPaqx2AfF2tpmfStKFVn",
  "key18": "4muNuwBet6Te6HUtTfrHqw1e8M38BiD6Y8YCZhWQnivyRSvgMPFEiswSWGHF2KH5nsUdtq8x37XQXMyH7Ni1tMDw",
  "key19": "4HdVdRdpP36DucmCfozYVF8SEZPjGVq1kwrKmhQ8b4unSPQ3HzAb88SWdUmK7N4J3UojyL1HaPPk5MDP5cNHDV78",
  "key20": "5caSmsKb7Q9adv23w59955DHxf42JYWmJjVxA1nwZ3whFZMN6m5EzzmiLHJyKZfwyeVEeoTTQWYXviAJxkpydLvZ",
  "key21": "V3UUk7RvmzubDfVgGQeBdBkefKSUhgudBtxFmURppQfEDv2exELRpxqY6UgomEFioiTKPyB9mSqu8RkgbznugGN",
  "key22": "56dciKAKCi5UF99SdHKzGQWiDQ2oTKv6vKgnoKwFKXeyn2gavRsZ4hJEPoAnHmYdurACcwWRvsqxNaHQHuStQ8BX",
  "key23": "3P9PxiKuzQBAHr1EwsShDQJws5rsc1xH3JfCfu8cbaywhQfmXXn6BZYHKZHr1eMKmZ3wCNuCvnrFiFZUt5ShCeUY",
  "key24": "awCTXJB7iH98Uk1DZytkUgXLbNub3XnBdq8CBvxs2xE4tfFvG7wcGvNL8XhoGNtXvwds6e4C3WHPHRpeCWGFBa2",
  "key25": "4vx8BhwMtiKze8MXs8c2q25bkZ3eMnpFGRFzXxcwVWS8u15fWMTq3RW2ySiSDa4Mi4Jjrz4qdnzvQoNQCN91yVwo",
  "key26": "32vtoANvpwfMQ7QBrBxhV8xopqXBEd3pAB9LX9oH6n7gjmwb2BV43eufPSukx2gFiKySXWHw38wC41DM7A3zRxQL",
  "key27": "5DNs5LWE8e4ygu1vPUC8V2HvFTrXNXAQDEnfLPfgQshBYw1GSdtHJZq1jsxobDLVeAfGShPFPMNpkkSfKfjpc7iQ",
  "key28": "5NuyQfj1R6fbAEf59GKm4rGdfehoTqZdKVs9Q6VayBjkEDgYyuFDj8gxyTdNGKVnJjxUDtKSkoZkj7buJxdaccyd",
  "key29": "GRQszpzmV9Vxry3PtVb1Phr26E7gf5atNnvkh6Vm1DKmeZwNj43DMakf2KcDnjdGdwxf7rtbGsJq1kMijEXnUsu",
  "key30": "5eFuTFrcEjUMPPFXCXvtM6aFBFUrPbWAy5YtmRDUxMC2mAgJSPhbGy3iYbMzQdjPYf4fvVdab1XiMCyEgtYNR1Ye",
  "key31": "55XXF6ZkrijKrDjL6KNDNfi3JysfHWtqzBMsdJRkxRTEi9Gmp2AYGvHQuQy5Nf5sCwYmWmKTwh1kr91HeTaJBH6B",
  "key32": "35zM8D8qisLrgVVifmufSDzCHUyayQeaECTvtewjuGoSdV3E2DuZcuydw4VtDgR1PJiE917iW2FPsaVQJWNRGpiA",
  "key33": "3spCaCzs86cRBrdevsgkdiCXmL15vCdJZXj3oEPfkGH2ot7f3DUE71u8sYntjdDZMaXAjh7Eq2sWHTVLaJ2p84Xq",
  "key34": "4LoiXLAUKFxjeWGyNDrnrqYrnHG6DvZGhCi6LRyqDvUfZ9zLeiMxHUtihy2Yn4hx3hJ9hevpWDkjjZ15WRUe4Bnp",
  "key35": "3DqxdraekdLZ4b9yd7Ft9PF5GgDxjFSvipakr6HYjDNbU2JiGpgguJoDgaQh5AQQ3L8CGmGX2cNZRNrJQxHhvJ21",
  "key36": "vbchzhhmeRrXD9jXa5c52Ru2mosh2hAmCXX5Hum67XidY2QPa9BBeaY6AsXMqTG6YYxTE82ea94HSkfZjTWCS7n",
  "key37": "4NMeEuuHzMmAEiKJtoujDyCv5AR4XYTxdK87B8T6jCUQKWJoYVpYgNKAtuGiNcuXqNHLzMQdZLn3RcjGhdvyUUwH",
  "key38": "67SHQmnADQzwSKbvLZmLbNs7YzeZthm1vn6YDz7QEMwZuJkcvTPtNMJkkeWSERewwDZRJVpyaK83FQXnT2Hiibo5",
  "key39": "2Gj1S3KqoGbSBQYbh8hbqHYg7nUTcL1WuhRvT23PY3J818fLTmZWDu5vfueACgg3BnG1nei5W3uxJifC2X76RxgN",
  "key40": "5PrKotTpjtNPszHonaoaNYcxhqVRrkXaQydmyoJkftARq6nV78KcxzWvyMQWkQVnMFUUDERHpQKyXbvETHGMrjYa",
  "key41": "2Me1rXSBJPcAPYCmddPuh3GnPxCsapCVvcGwVLVbaoEDco18it6HEAgir7W8HJBerCwyvPSM7HUBGRm4c6Ucm7Vj",
  "key42": "bAA2iFSWhYenByuFU2NWR6YwT7oGsEH2jKhvM4xj3Tu8HgLpUsvHdvnof7PmLSyS4P6TkSJrPPwXR1xME3phyLp"
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
