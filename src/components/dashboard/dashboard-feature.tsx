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
    "4adwqCRk3Uf4senndkVjybttyVxkeNGkuCBzg6pQDfACjmTMBRihAZMqeZk2ZcgjyMBabKn9BYybDvJrLNZCNzGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4beVgZ4DwwHmRdh8e7PQSWMuHPfYbTk6HXxnLD8Md2o7SGuwncAChy9CSMujP8QQUgGePfiGPv4isCGh9wQRYJvB",
  "key1": "3pYBNv5aNmM3HnYm3CgnEuELpdaPQT8E2WYVaJnCzXKr5ELKWds3rqzbwc6TdmdpMY9Yc22mLio74aRXT3rNCAUG",
  "key2": "4K5r9Y4zM1qbKky7inoAaEtGrhrxLqtKT7rgTS6qoS2ZeiCFy48Snm5p8a6XjU4SwLVdsaDfSMmHQ5YhvekMiyWh",
  "key3": "3Q4wFqpMtPAvmQ41DzNUJiSUQu251uoCUKrpbqkLGtz9yC4tu41trHtsXvPiUrYpogM7EKRLewxzc6bhDZUX32J6",
  "key4": "4yBQSAQd8jFTUfdED5Snu7WGtg1LzHtvzux36QBQvyaVMZGHe1YsAjV8TkinGmdMcbk4ATN6nPgTFoR1GWkcGaQe",
  "key5": "5XZejurhW1ff9uqCfhqMXkgc2FAj66HbbLUWNifWUqCknuV9WgJKVkePNyVz8PftSXb9AznjX5myZbhmohednQro",
  "key6": "3F1qriG1PDncWVE4jcuAdURsrT62dBhzQWzCRkMm5N8Txm8t9WW2dHMqbu8ozXnSbFm4LWNdNi18QeBoNrvhXHAX",
  "key7": "4pLupyGbMyRa1K1CK8AdKmYvZu8gDx89U99Fbc4bMwe2GMTibkE5oABWYtwH5YdbGu2wbwVWsvmfHWuiUqXuLZkD",
  "key8": "eU8BMQWvN3jxsCLhP85sMdJMAFK5vYvdvvGspY18X9ALkvjGXP8zsgbtczu4ZS9ZDq6LCqhgWrUjQ5AtuJ6UmJx",
  "key9": "2Jdk9UEVPfeLnTr8NaH3qut97jsE3YKAMLs2dDvodPmK8hfJKUVLT6LSRMAncxZqa2oRPx5b26psF9rrB9SEn6Eh",
  "key10": "2PhoJt3wsDfFhK13MfuPfbrj6GEZJddbWGqFpy9BWWBcjcpev79kYaRoxnN14uCkocXVsL1gDy7tjKjzEMv4ymsm",
  "key11": "3NRfEWMp3sKqNhYMsacWKdCEbTm17szgDy4w7Fyc8XBkVSbHaD3nUhHqS1uNpk8S2mp24jYVm2MJk8G2bKBBUoTG",
  "key12": "4AeSC4bxhKY8sbnReMTsidrhF3Z9yNpcgALZQpcGB27SH9XGumEC4FMwSytjJ2SWuKwbGWqBXetTENGz51Tm8c2b",
  "key13": "3GjuaNjDgGZVpNJzw1J2NvPo9wYU48FPTwxyMTg7AywXwJ6uSk1Jtbma32HWDpyAHZaJ6YUaY4sVf3ANa4S4WyuU",
  "key14": "67jEujecx6YksVchohipndFGjGNZuJvsXTG5StiDeK85Vb4HFDWkyUtXHJosSk9ie2RKEapek6bh4XnG8WaXPQUn",
  "key15": "2vp3kGq7qQd4XfFBJrjWq9iscKDXKfxogrWcGJT5UDzhrVtKVgD7dk3RbpsrBomPBEHuThbL1aQpG3w6FJvDy5f7",
  "key16": "4XYc2Hy2tCaXwvgqQS4vdkKZGEPyov83Jboro5yuFcutu54huCTb21GDhX2gkkpmUNQV3kpyozDaBPUMc8zQr3YY",
  "key17": "2uMdZPdEb5UnbtscuPTzTNajL1yjgEFC9UR43PiA1x2QkMDkocWdg4KJmL5MxMGCDGbezBV8vf1f77DkRqJznERZ",
  "key18": "4irMS7YkYYicQUYUoF2to1jvmtqCvpAwYntRbs6ymSKSCHJjqCrSRkC9RAW96YFiw27n55j4XTpdRxX52E6RXjcb",
  "key19": "4J14JXU4YfepgSuiBwQFnUq8EcDxM2gd7uPhzg2hNFy73cSeRfHQXoDPkEUseRvvVRQzeZJQR1UHBU2cgKgPt3Vw",
  "key20": "4FZ7tJS85CxxVvHtLjg5p95crWBLdWzDuo8hVEuHHuZU1UjRGchCsB3kAoHRkR42wdABGAXiPsZcSEvCMgHQeNRJ",
  "key21": "2UVt9aCHm7817wkeV3SUicVZZmvwdZ1chQpxjUYQakT588ZvhLb3Dn4wcBtdd4h6GHHeauA434DLBfmqBQjrF2Y9",
  "key22": "64B8TV4RC7Rnuc9TDhHPXuqq5f21v24DUwJfBTyT4EtwMQsfFCUUbyVDfG4ewwV7ggTfMijABmYMFnYghjkeDLX1",
  "key23": "YB1B1VyKmhSvUETTynoZszvri2kgPgtmp4gYEXRSDBPBR8jZm47qmPN4wX2Dftb2MMndfsTf5viQDKd8SYEF93T",
  "key24": "5GHf6J2UorE4gTpBfLstuffUXwQ5e9CaDMe6pUpKykzFv4iXCUXQoz1CYd27BX1ZcS5nTbeVn8chJqm7huceqWnJ",
  "key25": "4jB2JjuXYPkf9xxRyjBVkv89et3aeWEGnAFyH4tjPk3o81faoemmdnJHYUmNe4tGKzt1EXBQHi1dryMj46RX2JWj",
  "key26": "UZPadAVARFAZig5Nr8uzyp6HUY33NKHMGpfFmAFhdQGU8UC4bXegw5XRJwY1FU5dCD8X32tJ1KXyKwnUtrUdRZj",
  "key27": "2aLBs2FGdAX5ea3RCrdudnffBNYatDmTqfPDKugfzcsoQrVZYTsVz44opP3cSWKpt9WfwLDv9Qfi47ZxJXzXwtza",
  "key28": "hpVBQJZmK8Tiy2Z2U1aEHiTEZ3fVefCg7KBEtopaLR5Dzf1ZbcLs4qVeHBVTwSkM4KbJW3VJwXfnvV2XXVfRdY1",
  "key29": "CUTHv3Y6QM8wq1USCzkgmQ3tqMmq1R6W4sfUFgsFHkm4TGHNmSv5BkUQssm2VNPL6ZbYySrSv6XoLJG2N6df2ei",
  "key30": "7HZSfJfrBUCRYL5GYGPfRc916euhoFAs8mMygTH2WMunQA6DznKcXmRag97cXchTHeXATAnA5aLbVEgT3xSJjam",
  "key31": "5SGY9HoUr1oxtszNuD14Cd5pgD7uVvcb2TqHHX7uj1QPUuP9WfX1uXFYQdETFUEuKdf5qUnyrQBipXouDCxR3NQe",
  "key32": "4pGQEqh24FdowSxAa9uGXyHpQgiQ2YmMUNFbXfWCkN3q3DnJvqZdPfDm3zEpsCzSpBmACunX6GAokm1a8JZL9mQ7",
  "key33": "2HhGFCUANBrPpMK557JabJDyjEjJiN61Xs4ZwxFACpgecMYEKrRUi6VaVVVi8o7C4t4wCKPzPsCdPUt2FdNE8a6H",
  "key34": "5jGdbZXbPGgBu9fSJUYqa4Tj7Kkd8LShFgJS8QuAh1UVDWBnY79YNSQGWJi1aXKzNT9Ni41Pe6RTdUxfSXwtk766",
  "key35": "4xeMjbuDQ97WwDw6qAdAeZZsSAimGk13pTnCxZANun45DBQT6C8NP3sB9bz4RikkLnxxiCAA1HgcSDVhodW4Qnyy",
  "key36": "5mFGnZs6oF6x9f42xoLWrL8MRqqq7HAfmMiCBvSFe8rqCXSVmzHCgc6uSh7ctUUfNJ9CJcqEdRzF4wtJ1WULxqFH",
  "key37": "4S4SYAYihzhE28FtS3xefrVBEMR2T17ThrGEcn7eLSvy7taemUnAH9anVMcco7NcNJXhtFZ72mdQQD1pg8BuY8t1",
  "key38": "2ftoNVhKCHffAJg56p4pFNwv5pdqj34E23LqiBvajZ5A8c1WAjaKPsCESieYpXGdRUTT3gxWrz81Ty7NnUEdbH3o",
  "key39": "3CLkWCp1onpkH2bV3s9pbh6nenTPTZ4CFWjsM5ERy43uGU8wDzTwDhyfdpDmG8faaTX2zUYGVaucUwhq8TMUeWFh",
  "key40": "4BfCywDSUrAdRWsYnsdyNm5nhHP3bk57xnoWoHUXGyVARFXo5JDw9GjgfLKJiZnRBdpkmgg9CaWKcqsGR2WNjBhb",
  "key41": "4AACgJjPKD9hJ8XWzMHFH2XmcmBM8x3xs3xrY2YJjeG78c53Wdq9Vwm5aUktZkm2D379VKgHe5KuFfgCL7Acjkm9"
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
