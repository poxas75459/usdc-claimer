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
    "3wJt1iFbaiGJXSQvwtwp7WCRgHbvjCibcBxeRZhYFnQF7zaBtfVr2tm17Xo4u1V5JhAkhSbLT8CSpG4PMB4KmXAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vo8xvnbqL63GK7idfJxTMgic7Jx5VsFY2auvP2RHbsFo1q89Be3qb7W4AH35hgrfHktuXjD2FStREYMdrGVt4t5",
  "key1": "5MCro616nFJYxAibexC7XFBWeyzmZDtE6Ru4VBgdMYGejzXbewuqRFHogBktdFjRgcyYLJD24oFGh5iooQZPrtgA",
  "key2": "5FWPxBnAnZU9khPvTU5rCxZjJpzWRyH46o8URBgBx8esiBNQyQT9gAA5Y1uF9joS24HtBbDGGrS9Voe3nQqojcC4",
  "key3": "4RUHHGsCh2gX8Q1an3aBeCg3LtkHfDPyN32VPskVUSkxGuyxstDLsZL87Yq98mZq5GfKuABpKkQETnYsdF92mZ9y",
  "key4": "45N311eWTjz6kFQY83UKMyBJexzwgtZATVmUhnqE94YaGgnfjqg7U22kakARv6wnnstGUPaKcDpaYMG4cCHLAPA9",
  "key5": "5u8fFygQrAs4emea6PoM8wKbCtyFccXKUjX4MSUN32s4xZu1Rafc5kunEj9c1C1j8Spjnf2VxEnkMAhcoW7xbxyo",
  "key6": "4NZFtaokXagCpCHJLCyamJbRdq6P3cJEkjm1UX8emFvrGPXKfLVXMQTGCXLy1t5EnebqXKQPYEbGo8fEhWqDqptw",
  "key7": "2qbeBqaVC4gTXf5gQmHx4wW3SMCtzYcSUq6QBd3cyENMnxdvZ68rCWusnbjJtyoD8xzPYd2ZLC9ejH8UcfKCkiww",
  "key8": "5VmRyFKN2TxRjTcfr5rPcQvRbFFwRoPxCBLmqHbikjpQzFtzpK4ogwk9XTzHu7C2DCtfv14ftQRebBbDJoAXdQkx",
  "key9": "HJ1oxCyQtJ11jaBBs8zQ7qfd2vVtNfRdcczYPxvSJjcCF5aVUzn1qkMsm5HovJA3dyDHn8Tqq2EDnpFXayT5119",
  "key10": "2mjQqhNs83omfPDNVp3w2oxf4NBf7RQG3HdXVvZpt9KF114GnSTKR71H47TjgZkLn2A4vkLboMZJuszLqbM498yC",
  "key11": "2MYGSEbgHEGjW2HkvZ25D7HYE9GjMM7w2vBiQHBax19Bv4deHKEgF7R8KWGbmsorEvEa67WhAKveHTSVX7nQFuFt",
  "key12": "2GtFWZowgYKbo5DUFqK2A4yYq8LKjhE2YLCKLrEQsKEjpAuAq3eTvdZfTrt8Lckm7FLa5nvThyqBeeV7eybBKzQ7",
  "key13": "4wup4CS3bu6hBaTR8fuJ4xN3WrBypBj9Du5KDWmXLNL7vZzsNxZLmGKFfuj4ixbQFCs8nEmtgiUmsUkT4YWTJpM",
  "key14": "2hfVvXKfFwW9ohyr9fLdTFr7ww6mcdPY3bMQAJGvbZMoPGCcr7S849acyAQoJX44hKC2ZhsyAnoAqw1NPqvctUQK",
  "key15": "58rYDZnAQAWRv6a1zegFKRFy7xTvbN6Lpnwvny1sv6x16cfMHPTk1MJ5NMNrgCaLdrfpxMAaYf9pp4ZxRA6XjYk8",
  "key16": "4ivHq8WMZTLh9PF3vmSitSdDSzDCFbd4Y1F6sKSttdYsFBWJiLbjyGXg8HSAVTR6k41iVwUWF6xZCk7c1AxcvRBM",
  "key17": "3H1WTTnWb96MGEuVokJCJs4oHQKsEM29ihfMiioC9XhxEG5JDM91CS4115LX2bc84w8rNk8ZFshy8HVX2UycKxuD",
  "key18": "3KvakTfxMhfQ2npgKWawA4VvnPbtwgs4ghYqMgya1epCSV53R2rhgEqmAGNc5ZM567PERkYwtbcU9QEqnDWhRrCq",
  "key19": "2KoESDZYsyESmgRUXzsgMxsYvWkX3oqCG7vne6RSNTxbzr5MYVsZdGJ5w2Po3M6mCJWBFGw9gsh9evWURCLcnfFV",
  "key20": "M14takhvCoMPhRUW9yDbTTSL2yG6wVNuBsyBZjETQUVaothLp15Ny9jMBSEKnmMHVCo1zANKVBnwkBFAjk1QS7a",
  "key21": "543Tn4gQxfvD2ytekyjxtB25XDSUE1RdS92gxCLaqyG6XK7cFaGuTDPVcYMU5BbUgkDM7o4F9m15KCuHLA3j48ZZ",
  "key22": "Gbk3XC1qoJveLq7Fnj6mL2dPNBHk3LWXeHAN4QSodh42FwCfCZbKgNYrZH62VEAT36NQfiTzkDjXqVLejkLoMjL",
  "key23": "2iMWoiG8Jh1sKkqJMyATR24GRT2N56ENzwuzo7jTbANk9mkBEgHr3bVi3ua1bZZVMCh1r4rC8vn94vNHHhkbfkTv",
  "key24": "5FeYmtNUfcBCHHEkU4ppo3j7tpQmvVRnuoaAPjVMyHVd7KWjUk5RbNAGPLfeQNs46fhWCEve1ugCNKdF53bY5Q8o",
  "key25": "3iLELvqky3VfzWCVj8bRYiMbjYSkEqCHnN9ZjSf3Eg3WHkugAMa9RDJRKkAy9L2eGycBoaVRLJj9UnfgqpBM248",
  "key26": "3badL4Pk4QCkbhViGaq6mNbaVnA4MCWyekEVB1nAWUxVCHukwdp97XNh67WrgZyNKT8BFgCPBtGHYhxxCAd2ijAH",
  "key27": "59JdVNWyodbLkukvPhskpnovwtToQSBFDinGU7tD9ky91t3muu1jeYiPn6MEQ5S21gMCDWu2Jah4i85SPGkzdVYS",
  "key28": "57ctefmb1SqEuf3S269mHYiHWKAYEqVxZMbxZsRfJQQkm1hMWKtho7kCEVGUxGRh4QJ6R3okoQeXRqEfkNRdHMB3",
  "key29": "2FhoMbeVabYRU73gcRLDZS9F5Tb4g2p9SYEJcxzGAi2ApbrtTRpUw8dtkr2ZudeoWpZcxYmPJLjT7LFvcJJDgHDs",
  "key30": "3r5pPGq4D3c73apUoLdjZKzzgnyLG7YZ1bxqMt8h7VteFdSfbW9owXjyrNcSZVGCo4Ea1uNVDyqTuj4Cjtoi1eeU",
  "key31": "5CZhJUUiSqEbBLeiPtWWBiK4WQQ5WrA5mpsCjePkPwntNhctnq67R8KVLTkALmxJ2KKrSPzYD6PFLExtEg8DEASG",
  "key32": "5mnwn3qBLzPrVjtnqm89ftqzBVj3SeXUwpJTMYz53BB3hfpZuyAPpaFygKYrSHij4dmX4NYo9RuR589jz6oM8kr4",
  "key33": "2NYZTkHRcm9DndT9TjkbD4zV2xYoLvTViGixNAzgR4q84b4jnrGQv84oCS3YUL9r3EHVxo92G5UBNjcAUdSyFCMP",
  "key34": "3rp4jt6kyuYsZUgosubdT9qbbin6zKDihRU93WAJTBmns9CeaVuDSvrBTpoW4m1sAJFfMKFGfmDgq7PnVojexrBj",
  "key35": "471dQdcyUmtq3DahGEPDa34d2dENutyNJgb1ZyTJUJiPagcJmxRL86T3EayveNnXSjAqnB8ZjC3R7pVS5J55yNXy",
  "key36": "2t1JJDhGurHEJXqQDiudTKAiEf7tkc1wg5p99kTFpeZ3ciXJUyEy3rNCKvH16PXce76Ywr26udP2dvbcMnUxepZ4",
  "key37": "5iQKQbcjDT4sFea4D3CwxrHc5GSt2VB7KCC7AYT6HmZYxijETUmBkvGeSFu6994sGHqXNU135nUrtnrdAXteYBk3",
  "key38": "5j3veKozXHgEwpXNpTjcagkuHfrQxdimA6fYtsiddPqJqYYq19YHvvRUdy7YwTod1ViBNpb4qrcn6iSDCGi9vkYA",
  "key39": "Soddxn4XqEukJ5UrNpP92RsrKyFAaxmWbFDtmBZq3rb7eVoTbGSPM8xhFVtEKsRPu61h84LTTb9seMgAMx29Mcm",
  "key40": "634etip1hkL7kGz4X2ERUtFti4Z8CyWQPfjAPU2oHnvUfvfkcqHqvFVBmeHPcYGyFGrD9dS7Zk3LeBw2ngMBDL5t",
  "key41": "41xMVbTXrNJonjKg9XyWHhyp71em2GfYgEYNwo3bfwnedHcRm4QyFMutrLJzdB3sBJfG9A1irStHyuYtKQHogGoa"
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
