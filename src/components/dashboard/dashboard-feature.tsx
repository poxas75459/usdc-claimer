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
    "tBbvTbf49UcjDZNgy9s4gyHEfnbg9d35UiNoSLo4VGfcuY56WfWWAHMeATVBZhdiZSozsqsQPpirJvGCpvtn3Pf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25WnUi6z9iDWP5z4Wi3wsR9Ck9FXox4hVfHbMsxK2g1nYrQfPR6aaQXiDJVa729Xf652oTVqUtEMfiF4DZb3Qso6",
  "key1": "2Sx7WQtBK2ShLfiQ2KqqnfH8vLT4M8KagLvDaVb1HMw66fhFfzqTvAosyVZG9k8qASj11rY1XQVhb1mMEnjUHVQC",
  "key2": "4VQtDsckATrMoCVQx3Pd8CVRkSGWAiFcopLgTiUGikBkyY2wSHf5xtVYEpVuXfHtexu7zH4kmGQoNFFRGW3ZZboy",
  "key3": "nZwSAgRhkgZfqa6bLUsgKqrqKFXpTMAWKMspqtmtd69GrUZRYRCichHJuzQ9KtcAcjVjKZBNLWXo1c2ywDqeynN",
  "key4": "2jSZnYcJyjc2dwBY4ahetC3PPWHxaBT62Yr54xNPXLmaeMimpw77HHtvwuYsPFNWuC7MTXinu4mvJBMNwbZ68RE8",
  "key5": "4oVvndpu8NYGD9ifvmV2WjNNMVKaky2JzEHzgJ6MKAYTsDTwaFdKRcD5zZLpnLC69ygCW2z4SJtxxuhAX6CkryEw",
  "key6": "32zGQuXLTkm7EZJiVVUpkGbjiY1FEnYYHfumznt5fNvXhNqPRr61EoZFAkMHvEBMCQz4Xx7rUmg5ijfz3zAcbLwj",
  "key7": "5BCULzQaLxVribJXUPD1QSEG9gGw5CehtS8rwSKA9bRuADMxryv9fVFTQQ6guHdPUqMYdoRHgLytgwR4sgsmjHtT",
  "key8": "4vG8bdGbVQdE2ajMZ6a52YvSfQJEtZuEQHpDVU4Zrei2aCsxSRoc6hfQ167nMTqrG2tv9993QEBN6wg1idGQQFHP",
  "key9": "RgjpVNv5QG9dE2di2Qqv23frBA52AUcEfqHhaxjddhHuGamPVzuPczwBeFurcSCJTBHLSci2KPmdSh6dqpp5jDW",
  "key10": "3U8qUWLGQxmuyhbM1Dgf4iGCtxh1PykQ5Ko93hH7idR3BAgmQBzehKwHmtVpg5Ckbd1MBPMmkmfmkKW7aVDPkuBQ",
  "key11": "2YZ91V9MRMWAAHM7LGKiB8QwLkutgX6URhF6mF8HY5cJJzTWVib1irjF4ntvA29TpjfkwSdeBesa7JJth61XnEzT",
  "key12": "25wHo41QoqtCniQ5DSWj3jxTH3SAYNjBuuCjQHb3e2tCdGPPVMgRGXSuUpUfnc73Ca4ejfEA3LJDp82v18NRgzcV",
  "key13": "2195kgBVBk94C4rPk3aQmE7icbtKssnn2JLBEMHRgriSatezgfjdQcShvYiivo9qGJDAA1RDmXmnY7xHRbNVPbWN",
  "key14": "4K2aMs4rzQeZeDkBkMytmjrFQC1rC2fFCmeiAGjTZmN7MmdpSxjbHT8FriYvxXhDtbcUhrTDgV2UXVfm8Dk8NU1D",
  "key15": "22HgQwAvzMYsBTbTrfUMdLXNPu9CjyGdXs4vSReMKb3kGY1sKJUgzzBTHG7ieSNmWXzpTraPLSeKPhqJxwjvnHMa",
  "key16": "mXLFYcnCZ8huho8w4CKYnAW86FxrUoQcfvXenJwqCkkmUnRdfdERTKJ1fMEjFMUEi6joFWWXuDq5ThspBMLyWmn",
  "key17": "5onkcWwP3EkCuyr14eEFsd9LamLdbZUHUcPJDP7Lbdo3z6fWkDhpYQ1Em53grVXzySn6BJK5AbgzEWPEPLvsib6W",
  "key18": "3RajGUz8wo9tYpPUGA7fSsgo1eceFxA2CQ3KbsAMhMV596RpPV9VWWmDV1wjjUYiToyjxFzdsRbNnHWJGAWTk6ZJ",
  "key19": "CJsze9gnju4QW1AUPzwZhjc5tdNtMYJemmfAJ24VzijwQca9SLga88j3vh3iP3ASm4h4dRymsYhtLkuBeJG3rtc",
  "key20": "2saFrND6JYJGLkYp2pZxMMQ2CJhHzvkiMhDrVnsyNrAshHGa5p3ecRttnH8KJZyYDaMYzC8RUWuJsxMhnPTGLaaZ",
  "key21": "27yeSfBsJTG9mo9Y68tw1cPoxvipMfMaPcA8T8JD9hjHijDJ2Uf3tmxyQPqmnarc4ZBE5VVfqWhMxTPpsmvnxVUn",
  "key22": "BHTcQzi7DztqFqdCsZ2KV6m8koHtE8u1BhvsmiEo4CH2X1ThdLpoXYxrFLgf6EPsinznnwjPj4dfq9g5aG1emNW",
  "key23": "47m7L143hK6xUnmoQVD9XsHWyPnhmqn5GyaLNVmC97HKCUVnM25uZiDop7TdzwE2RpEFtSLUtdNp84phv7Z62z8w",
  "key24": "4yyxa39MfkfWyLo5pBJDZdpdTA2ZaLcZVCkTK2biRJezLpr3sErZtjdfQ4vGQpsBzcZb3nd3fHizH4hRX65d63Vy",
  "key25": "3XCQrppgqT3cAaqtRBiZMMtNW25vtV1SCGBYQZeZpNcYoLpbQ21KBggZgEhcuJHem7QdsJSjA3wwnR7hgaXeXa8e",
  "key26": "5mVQUtfEqnZHTK7eqaUYBQeJw46cDGUBAeo3LoKYzbZRfJcQBayyQiw2Ptq6hNxB3v4mAwAWVJd9kPUB1WXWUeRK",
  "key27": "3pn1ERVZasu9D5Kh3Fbg5r2dhgydiH6PXJtahVr1vLopwHNHG2ictrhNF518PxaC9fubWGeUuqE1BMVJKNes9fNa",
  "key28": "49EPCEv14ALdj3wSt78HcdEQoufYLm4hrxFL9AJxhEJzJBU92WKFVexqns9pKQDh1qyFZBArgTMeor4aGhczissf",
  "key29": "QHB5ujYrkjY2jNpLa9rX7bWA7RFbLqoqCdfoiwDCLRdEYUpG73DdSwdoRLobHk2xpJQDHm9VgoHjWux2p8fcEtv",
  "key30": "FrmeDKSpG3FTvycfMFxV7RDUqx87JGq9SvLfKzaPkSduygS6fRr95DVGGDds7LwrytX3JxmvQkPXYWHh3qebWoo",
  "key31": "37wvkndf5bGxCCi2BpyfdEJafSYKZsbxDxsWmY8YDyPFjS2jt8wD5ktwpTqQk6geNt5NMCAZcKC9HpYpnXHbkrEg",
  "key32": "3iYohGQVwrrfjTX6pASTottVkPiEbPg8vRTKHzFHeCdvPGYCG8YRWJdx6VTtyUq76nq1JBmASVKp2KFavi9t6BTT",
  "key33": "3UL9HyQb9K5PpAGG9yhxDWb5WJVFYYgsSCm4xbFCndZX2USFVJNTiS6KH2bfX9P65ZupVxYBUqHBYvqXMCst8AgK",
  "key34": "4ukcx2EsXkzxkvNMALQgDm4HatPRwHU8it8smfzAKAQoXa7XqPVCyZdR7uA1XboyubvPd7GsZbxzgKdrGAcMENt9",
  "key35": "3F7cTDZkbimuH5DNavRjwDurWhFAdHPrf4D5yBqb5U5j7Zt662j6e5TsZngxWF6vH7zpuTb77Aw7Rg7MJNJjn7Ra",
  "key36": "2syfPjmrB6tDjGN762gkE8RwUuKGaJ24JxSzbAWF35C1LZgLCN1EKEcvMsBTLHtQsAx2DWC1BJf8NJrgNkkdEWxo",
  "key37": "5ZnwLoTk9BZsUnDZXsMNA4dTC6iPzKSLoyQqeCzqcnfXpWbPADSbY8uk7LLyiVZVhX8Ydqz517Q6DmvVbDeeEPxD",
  "key38": "5ZQAakW2JnRTUyqx7ZqTDNEsX5S1NAQBoCoDjy4RKrFe46oynj77GBVLHyYaXYa3tkTE9Z6NvACkzz8VaXVoW3Vn",
  "key39": "4o5gumUdoojq1ETUYibKNkaSZMCL6Bf8FF7eYT7HpjLD9SsWWF5LbHCFnFwRzK1tsxx2s39TWLrj3SrWihys35mJ",
  "key40": "4M3r5z18BxWXJNDuq3F2HvvpRHtXhhc6x1UwQRzLhDZ5yk94r7bRzt5QdYAy93NuzsnHdC2r2t6AEXUAbhnhxQYk",
  "key41": "4jusMdB5JPikKccCbjwdhHF45RkzH46amswEv8H8qKzT4kacAP71pZ7qiJEhTDmZKFNJ5vkeNdZ5aZrQyQFB76Kn",
  "key42": "4RhnktJLRxmPg17NsdHvFQvDGksFYfoMFMdwT8NR9LXLEQwRH4yoy5G2rjoNfnKSztiKwcekGA3ugLPmE9LatyVU",
  "key43": "CD8Aw1BMJegx5RT6RAtG27rNtBYaei9Yc3zYVevc8ydfzFv5FPL4qYJbAAARJckkEuTJhceJoioPyCoVpb9DeY4"
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
