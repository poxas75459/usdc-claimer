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
    "BfLBZNYXn6h5ZTjx3ZToqzhPfggpEXnyBCiR282SZAm7kbSS4yzamqNccYMTeLaT4Dq4sfPZP49WXWhNfyRt6x7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bYDV72ZLbw8oWoodsmwLhfgXgyFsFWXBP3gFc7KZWLeNCHngNbbM5F7t4EVmu1pjn3u8sprfyc8otL9Eo6MBSDY",
  "key1": "3xn86m9y6AxZTVSGfFwq39a1iKwaU3zG4SNwFsijicEfM8U5QsuKY6h7P4mJ1CqDFZY8Xc5vD7toQzVyUxxbok92",
  "key2": "42LETDPLqEgAWyqDf3EPQBZfUZPM8Fw9mkq7aJHAa7ae7St9o5BYU6j35tquDmHGhqWY82R57YUk5mcb7iEYa4Dt",
  "key3": "58FZjhWbUhxYnojzGSYRAESTCTfS63umySwkyD3UkmzqXRjXnB2EV5UTM3BpFPiz88VtVTJDRWMzpRuyfJPbeyFg",
  "key4": "4AcCVyiDdT89rQNTQUCNTfLkT9RyNgkfdhih28P7tGikGtq6K42Z93wxjL9rGaiyuA6jx96y2QvwX1UkGg6zGicL",
  "key5": "3FLKafXS8nS5pV9npuL1zCMq7eMvfqHERHUiAoasTd7VMJW4CrusXGAobu71tZJ9YGCfWv7PcJBMTecZWad91hAP",
  "key6": "2eePQyM51mGHpTymEfGp6JfGK6pbbKHHqPSBWjMDX771NuFxT26anaSYwC88NShrupq8729g7q8Ved8oSCvHaejv",
  "key7": "4Ghe2ajPmZmpy7g6t2uva9ovuttHQkvpaepCYaPE1jnrny9TVWLfkvhK1z2ndvxLvtNkGyby8xJY4RdcCEwPnpD7",
  "key8": "Ba1uPzWYTzBtQMkWyGmsFBetB3VgBAenNBSHsDLT2gNmhmkaA1N2UQLXVNNbAS57tN367g7eYfdGPSNbBDEWqjh",
  "key9": "2kDbDA6HGpywidgfN9jfDMQoyHWJ5SpYhWUcn328FrjsUv6KXAQk9pGKQfhiuhFoaytMz5qyVht7bHWtzPtiNXxb",
  "key10": "4fv1rvwhkdozPQJbBLbxSotvPHc5DSF26ftveD2vvu5qaEJfFKVrm6fk8CnrtFbaUqj35UtAHpo4nVkW25b4eX9Z",
  "key11": "4ATpzHQuwAmUqbj6pjf9kUCkebMfpUdKc5w2ikwCAdfdw1tA4jNGeciEJ827DUeaqfWLRJZnHXn4xtkSnxnk43SH",
  "key12": "4ZZvUry9VECVgP29dtoxQbqL821cJqzN3enMm5yYtJf7cLvkRgZ2dzWc25cboEvBk3G3CuwZyhX4PZswff84ofQ7",
  "key13": "25hBNbp1QT15Rbh5WDsVjVrhwnkpTYLGifjexdh6k8kkBs45Ut4D9X5UiPCjhEDkQyEEsi3MvDqskoU4XCcCZLYi",
  "key14": "288qiL38a2YUMeBUeW6STcvgJukgX28STrb2ijqj4f8aL9kXemnFNhMFSgNoaWAHAXmNmykx7scFeF21k4GpSWyi",
  "key15": "3H5M9bQMqEqUa6dW78GUn1LKaQ5V5wCgxAhRnCbZ7vkPSsSNng9oXXNgZmfcHMPnyDzG4YLeSiWVH8s9Uueg53Ln",
  "key16": "3E3zbwbtYsgh54geAqQwfqrq5qvx99Hx614iSPTURFY4LjQK47C5VKXN2hUx8F8U6gFuGR2XqD1tiTn6rVhZHmMv",
  "key17": "5epwa2amLuYnuZGbuSqgyE5KcPkmrXhDYYuC5AX3RLGqmKnAB4sbpbPtRmSWPfqRQ6xoMqhgNZxHWd4xhuw2KaR2",
  "key18": "5oHUvpgruf1s9dVB2YsyfZSGHkADX9NgEfQfozy1e8hUN7jNode7GS5Zd5cn3j47jGTe3MKqxSyc3yL1tndD1jwk",
  "key19": "49EVhS9TAcYnknCktBHba6CLu4cGs216E6Ttu1saLsFJMNC6p1QWa4zXegn1iv3bm6MLxsbSpt6LkRW5MBM5PbNd",
  "key20": "GTMqXLxursbe3xN38qh1MoHut5nCyBDqQbEq6eJLCttbsLj1m5noD5Ep63jsYXx2Bykwo3kBq86bh2NRJvPSdYM",
  "key21": "2Fejz9fWutBPSpL4p56pgk3PhV4PREqw1jf2Up99qiHZCghgMBWadShJJjxyLCbWn1o4vgWzthGUrv6PZ1RifWcN",
  "key22": "4AyGMyzFn9nym6ExrMU4Rq5jZz2sx6eaK9dYBe3jSk4YTZwNQrpsUfctfsR8bp45ziSrchTkxc62PyCfuSwG88Wt",
  "key23": "45Pe1UmpdqbwotjGrVAkQ3VJeAxfQPnx8ACPqZ5WBbW3YCkZHMe6f3KsSTnYszffsh9g3fpoo3kmFDNUYdmqvoF",
  "key24": "676WEbBhMJanjWT6asfJmbxT8ACvFZYrzJVRT5vxqZNY7pXpvjqbirrfznR2QD3QzWbbFUeCJfT59x6TFwcpcf8v",
  "key25": "2ikUJxoLUZGtARbSbjLRf288XhLBfzyWjqJnjQSg74DUn1xmbft1Ckt4eDtGs65TY1iG6kwd5zmCRNsNPZWM6dMy",
  "key26": "4QRKfmkFupQT1ABz8Xe1r1bujt7Q55YdREmD3tDxTuKopRumuiBJFCLxU5nrnS1QQdgkZiaSvhkgKM1FmrfADoYX",
  "key27": "o3RYeZNchj5wRT6weWAvHmQv6qBB2rgYiyLA8UeWyZCioBZKhDc2wAjNvTQXp38X9nECZk8WHmgaVLJqeo69xXE",
  "key28": "UHeMxwJMfgYbXXRicWFV76oXrucFacGArRYgBPzMW4EWYMJtNrEWo5aX8V7XcPX3NP9nkLtaBMQaxrULeTLzcqm",
  "key29": "4bCGJhq3brwk7uiv2PjSoF7fg1iBjnA4DPnJqK4mWq6EoZqa1VFmnTRoGZsM56UYi45sSi3P4hEprQe6Q5qs97n",
  "key30": "2HtnK1WEEnu8chSeuFCQFVcuDid2wzCK6Y3QpnQp1FU6NSZeWniF7f16JRSK4WHktGkAJHR9Vxu5JxBZmZKjF3tE",
  "key31": "28x2o7ZxVLoTJUtM8D77v7EUUQnwvwvKjf8vYDmFvimGe5wRRMoStHsqQ3BtoL2355ftNsb5QtnvwEg5Aagbw22m",
  "key32": "2doYqgVEfJ46KVVEASoKEq9boUqT7msyjgfczawWFp8BawxFxy6e5sDcEw9MhkxQJXDfAwKiy4eaqDchaYjXnKD4",
  "key33": "36RNXkMaf58Uxo6bQZCUP4wKNqJoJjkdqLrEDmzUQijt2wyT2BioLRsTmGbN9sBNr8xibVqgGBUJYMfAEgX4qGn4",
  "key34": "3wrWxfXKqaFgpMeS89ZfsnFroSsVs92kXFFTNcaVxm1whYi8N46iCcu7HZSE4rz223Z8D3iJT7yPm8KJjbDEh6ue",
  "key35": "5GwTEqN9Mu62sf5W5bG22WQwBLtx1Nxpo7sDKqnjCn3DZuuhzaj3NpqtMdKzgDdyWxXGciWNFpTywWoGHNwZYr9g",
  "key36": "1gtYDk8UhhKgAPWinjCMsSLautffz2hW7gK56HQtwiNeQZk89Ev7eLZKwqYoC6KiYTkoKhxZnVEPdMbfhPizf2Y",
  "key37": "4unPukfkR5GqrvkmSSbNjZeVaSV6TLpBwFMQyJVDrtBhXGdLbidLdBKhP2PVgwU3wd4ECt9wUbUDffNzM9cdmY5i",
  "key38": "5y3iuu4HMwXYxZxCLYj77aZE4wFZcxmRSNJvqR3zTpW9k7YovHzJ94sskUimWrp7zY4XL3hxoAbcqdJnKSB75LBw",
  "key39": "4nhFw4ygz6HkayAtjJy2jchh32quf5A7V6dFXuqxbKqAjdE5zVPmFcpEcpo2JFkjiVamXhFDqFHa5hsXVmPZPow5",
  "key40": "4FVZ7CWgfq95jb2TrTZzCX8PBaXPQyY4Eq4CnqaYRTdBPc9bNz5bCYQM3u6b1oD6RGYApMiy7LJKXf2ru6FBSihP",
  "key41": "4DrDk84aPa62Eu3eJBtVKUsJd2p3LDRBj4zo2QLDRES6szAcXWfwrmgtsK85Jjgovub5EdgR3khTttzVzgebUCnq",
  "key42": "66hxKY9LqG7z6LPB28dC8N72Tc97FZT7ZPNMoNrMdvMB3dMjHJ8nGLAnwf7W4x4Ntcnem6zgydUbe3xHBD9wPudV"
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
