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
    "3dLiWoar5XxYJcf7D3x3jvaUWsQJkvWofESgSVvqnHiCqo9YmVWVgKtC6etsKpbX4MKFLweH3RDzAAuACC3BmHkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62AyL5MLFtNbaTKnxE3WuePKuCarD3WXmnudyhaSH3GEhHzAuaHwLgR5wgo9b4FahTXfUpkLZTsDaEJfGTi9QWoM",
  "key1": "3VEeVrcCLXsikf6fHLFsc2Na7CWzAFoGUGEe9661A2yy54qqBK59JuxeohsmH8YAmMAjuPt8G5DuNMFwSQNdeDFi",
  "key2": "xaNFFR5BWdah2khwLd6zUCkbpCsNHSwkgvrto2S5jdk9SE4cZzhPpyzhnrBW6zotDb3d5UmKfsCGYbcFraTXe5t",
  "key3": "b6vc5Q5eD4mqdpHFYwYtySiZhmZ7rbbohddHioEA7qKpMpwiCSnnt7yoDNGVqPjaZ2w8jrT15XxSc9PSwftgZJr",
  "key4": "2VHnT38rt4ivXhzn5Cze5XsWZbJWmRDEnse5dnrrf5C2pDqVLwG2GNHQaQPLfuJSNpWDyy5MbnC9L2LuytwxGeHf",
  "key5": "4nF27jfC14kDEwZoSEcmeEnkgLL3jgEjUzREsoBPtQihK8WEhEvLDbfyLVR4D3f4dWb35zv61Ngx9Ckx4iJeMNMm",
  "key6": "2chqkmUs1WtrFDVzFuKCbGbRHfXS1dj9fVp7STuHcx57dwqAsFHzKcu4tKUS5jYT5HTgavPwx9LhYffyvct3ortR",
  "key7": "4Z8WWLwkBNe4v5tiqY2Yq9gCsmzAJN4QhgSkGXVZPBdMXJwrbFyrzMnRSHn2DYQ2nKvFP1zBsHUstheCPUQa4s5W",
  "key8": "4z8JmkxRW45mo6nge1ysMDEaxpZCqEyqz2XBEqe6HtuqeaLX6R1NfqyQXqDkAgjAC2cdEYtUBhiQTeVRa1ZjFBJ7",
  "key9": "5zfC5kCgQ7uYuigdTFRCF747ewqQScF4YFhSwwscZYEGuF8gxGvKwxRG8UhV2NV24oVUH7ojhQd6TPRQji5sMss",
  "key10": "5UJDv1R6qe3tzrvH3TmRhfuoRmeBqAMeLjgVNjjCeH7PMshxnxBMu9Afw7FhmEXa42tU97MiYKrjFUf6rD7Jjxg4",
  "key11": "r6DQALpe53PbnSRo39jJ4dmeU539rxvGYCM9FrE7x7p1fZ4F2y2zr9VHn3gjbKwUmVSpambZFGjnnTmyydXawjv",
  "key12": "4tA6ysJQtct6CUxyDq1U2vj5tagzTw1JGGcuWEXBB4bjmUyssrz8bJ6ieJRRMkU6iW27dazk5nQPRY2xaiJehFad",
  "key13": "5E72qDkbPVnLZAseZDw8TY9xmSsnQqkDTmwivBdAhQKqgHy2bX1vy8acWZse3iArVmY4ijfH3XHUzchT4Us5N7Yb",
  "key14": "51KbhBqTjz7NVBRBW1JSkt5cdSxX2TG47gXaMVngzMta3fsGruPYF4NvG6sruMGe9Q9a8USae5vd8dvdvvL9UJST",
  "key15": "3zWgs4zdK9yGDWbbhxrbUyKNWLLuCQQxUe7fc6yU2WNVFj2vMi1A7JPQvjG5PLSX8RtAD6VmWhGH6XMSwvypCFLs",
  "key16": "xtcQbEyXRQ4tK34j1V7iNCkec87BRpHhvUxpCX8cu17rxc5mEmE7ZQc7i7mxBz1L9s1SbLxGkbq46ZSHmQqQcJe",
  "key17": "288L1yy1kGysDJSPsUNxeJqKonPhDBMdroPDskjxGNWEMBGGV7EvuR2BRZRBFkFgtMhQ7HwJPVH9iL5gKQk8598V",
  "key18": "4yCgvbteghB4GSp3oDwx96obdriK5detmN3639QFnoE42dNgVFGY1yTXNuJ81ikBkrqJWe5LjjhuNC7ZzAUiK2V4",
  "key19": "66mZcjrErjQJizHE717YHGfBcpxq7kjzvNvJKwrMeejwh6gS5YAKQXsLgnhHnQcK6vQctFTu7uabqcUm9THg9RZ2",
  "key20": "3XFj6Rwq5qkfxejXVy1GcSfNUiTS27DESceWuqswY2BpRuUxTnvjkXPTk6BkXKhSz8JySWLbckHK2Ld4trnmQjKE",
  "key21": "36Xphgxjpo4tUfKyfkkwYpc8ZpaM5r8Uf9jEB95VSWEsDPkTQmMMpPHpL8476eaAKsMUC2JVTHdXD11xDBDKyYoS",
  "key22": "3w7VmaLGMUXaSSggFhhfwQPg7iCd1eRZs5zjcNbsLQLdxZcoUtg9UL9SyGrHHWAs6dah1FD9cNcD6U3utyNPMoVU",
  "key23": "5iZpsdnDDAPAawGQ96q4jFdBEC8WFF74KGvNPXUbomUquC5ae5gjhdUemALKBjs9BBUW1XAZk7o62GN91jkboQDU",
  "key24": "4mkVm8EHXPMG6NUDGB4PmfzVcYox5D15bkdx4jwYrX66zQq3J9dR17i6FtrdfW3R9a7XSFS5ycwdkJc4xX3u9Vtw",
  "key25": "5z89D892XoWq8aTpBoRdsxuXe3M79zmbPKng77qxvCtAmLHzATv1JYF8NjQdFJvD2njLbdvaBT4nJARxJiqnUgr",
  "key26": "2S5S8nMytCSxFEzpGKGiLYPfNi2AjARhaRCtWLYndL1esnSKush4gYfBoBsmm8TpjwsKBScWtu83C92KHJqqSzH4",
  "key27": "3Zz4Lzn4fYmiKPgm5cUm8VRQXPEYqZreoaJiaw74jcjK68TQ2DABTNg3JjNnxYpT4KyksXsUi4o9RJPY14rcCJQv"
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
