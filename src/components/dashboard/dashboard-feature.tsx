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
    "4QKgfzhv96B8ddH31wnV8f6qzRoMsFhYPn3tuTr2VgJbngXsquCQDMJi7P67jhZFteo75sJhjtEoXw6CEmS4d6UX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32iPuVh6NrsnZmVvBJkzEdqpeQGZiPXrVvG4uyjCKVZ9MHDoP2Bs48LsHNq4vjdcEK7UQn31yyNecPQwptFBu2R5",
  "key1": "4rqtE2ewWBYPZo2eKXqJYNsjXcwf8EtHgrfrb1YSJq832Q72P6eKC34LM9ESBHS19YaeZKFN3TYvQDae96PAipcZ",
  "key2": "276VrEMGvDQXMY4b1ZpMiVHGTsXhZAs8SdGaBjBmim2tgHLSPtYrFYJoZKMdrCca6NcJQi9XwSd9TCsCdqnhKRhv",
  "key3": "3K1vXXHuWGp27d3kr7bFyY2zpNS1jwQXHYVYrVD4DXwBiwb6ET4xzHFEiXHaRY1wQUmacJs9XPDezVD8Q1BXStzQ",
  "key4": "4U33ZGTpzo119su3mgJiZoa5PPbE6V5QAem9EzfZ8sz2H44CdiLQhmWxSib6amtSSWj4w7yw4nEQaKbCEmQzd1gQ",
  "key5": "hrBkSteYf7vewfuMtrVKu7oDYu163cY7znrvS6FVqabaJLcNBLZQLtUCR7H3eXJjrzTY1nc56BPUdbScyhHKc5h",
  "key6": "3M2jJYLT8SaFPndCdszJNoW2dGMSEQGMmjBnSbGWMkuM6sxEAPPsrrYizZqEALW6da5WfQXdDSJfTGKcRKTFds8G",
  "key7": "2PuNoFJH6ygLwCWzedC8KZemCj2MfJNNMc7PTgjsBY89qA7SpSM283EomRbWB7cv1qYLCsnmC6nzpde5BAXaWnLF",
  "key8": "5t4jHDAGKeVWvCE6ZNRPzUumAFQrJx31Uj4ZxWqsEubDLhFj9Pdx8AXfD2tz5Q422pPDsY1HEK1eU2QoCSUCxY1W",
  "key9": "QFJ1CsaEW1rSpDu2Z3KuoYtAFnAyMHuP976SAS9vnQVXd2Yw7xjYQcyuD28ps4yjxjwDkdddr2H8psxn9dMDbe2",
  "key10": "4ZhipCnuyM57V5W8ajUZEcinPbzrD4rsCTgqmuhtCv3vaaVeYvEH6bzNm8BPJBpZKgBtrwwdnFuem956KwxVCmrq",
  "key11": "DtWRJjyrqGY9kd3cHS9W8p3snETpHBrwzoCEMRJk11LeWkEKgzA78PxkNT8FUJxXgPPGpYmDc4xzgsUNJoiF8i5",
  "key12": "TxzkfHZq3MBVT1HTycGLDWDBZyeLf8PeSQnXccxU657w7bAg8eQwAxqpZBaMjjiFMDZosyKdLS2ouHwXrbhCr5D",
  "key13": "vBJHSoJumW4QBRvicrPELpstpCvrpwQv3AttBKMh3St5vikEpUyer9zA5isnBg8Xt2jHZVdNQ2WufwSb929BzJx",
  "key14": "3F7JzwRA1BcjVBGN5NfGzQ7xySUci68H8zbMbvdkRGwjVNU4M5wCTpfpmsnLxgjhU6X2h2CkUBEkVVFE7Luzm5U7",
  "key15": "2DU5qZpatziGgrhrJxvunssyj1cZBTLgRkysFhVycwvtR9TWDZLjfhdaWYjyL1LDxDpDgTUy7K6BvXs9GNzY3stA",
  "key16": "5noESSyhtCKRQz1Dhx7ZZBQ2sskd5jsqXSrJgBkEqbVTNN4F8axNxgk5p96WhgTH317fTPtsyTnP1ffmAXzjXRZB",
  "key17": "4UQX7SMv3KjaELmHJjGtrgT6dPMjpQLhHunMbgTLqHRap3fTAsh3jepjmnDwQDc19PqwNjYUtdRWmwEeBnVt1kZ5",
  "key18": "3u1AaauggtN9bP1zqZa6ap1MCk1XVS3w7bTjyAT19rqZPcjPahn1eWHgmfxfGfhAkGWw5B5TSv93G9UQMVs2TbCJ",
  "key19": "24B5Xt3DKgCxcMB71MrMM4apaPeKAG2JD127atEAFJNUH43ChfTJy5Lrr2Y13aK88aN5Bs22XbqD8ngSAhazr87w",
  "key20": "2fR6jiMiizdqsMKhCCds1LtDUqWhAtKCofHv7kLeu8GJVKLbjtHJc1EJD3NNmQqiwd9D5RTgt4TV7z1W1bXiQBvG",
  "key21": "3TTkw7mFbD8z7GVhWQ1nuSuCrufSvpHKXhFF1VMQBo2cN29H5NEM9rEe36AmahgzTCijRYAaDD7cg6sUz1pMuwC",
  "key22": "2Bo3uLgWxwoerJSqXwm7oFaFJjpfJw1gA4AiLqKLs9Vdfpj7abp3kWpdr2xiURCHCr2tDiid3ziRyNbqvciYpWA6",
  "key23": "5H2DAh14j9mTpbCUWgXATnQerfLVokits8qmRXw3BbXQ9kHe1R83HcxbZMn7MNZMtttSYWjdFwa6dxm6oVXKhVtr",
  "key24": "3jAr5sDEzsBTtgUDtZo2nhW97WmyVRnoGpmuy3uBM4do31ijyhUs4ob1HLuQtrfgyF73euZNQjXkNNgUH6frSjvu"
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
