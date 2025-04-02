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
    "4hzfXUSXWnSDW9Zsjpo7k2rCV1ayJDC3jBGVYLpo5vXbJEvap4mUG6fz3gjKrwKDdeS3PNDY1ucmFFVYD5hY4L5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dmhGUzbn7y57axJZeo6uCQWRjkQGfwgMGkxdwWG4xvAEq1VTd1kSEsq4v3BAQaDT9NFo8hB6NzMjtUGLMqfLJcJ",
  "key1": "2ERToAsN7dtXPYeFXdHdb3Nzh93xXQppEeyTL9xnUecjsq71xJQco7yDJpbKbKmHWvAGeXTjqXho4WoZqgDDpzMC",
  "key2": "e7UzGmzMUQXn8AQbyjJJggpkVJkEgzfzvxVqMDxTji3DdikjvomkXEe7XYho8TNbZTsiati466dPCTcwHDbv6mU",
  "key3": "7BejY918PUHfs1oqqFLAapEaY3M7YKhCQZjTbGxnJ7ieadiFYXjJgfPvK9MHz4jhHFV7uHovmzgN7mZkZdfppAT",
  "key4": "2ds5dpRebbGHdktdTj66HY9MR6Gn6U2ddp83UgAvwMaSwP68T1YeEED7iA6MZM95HZTGV5KP2mrjuVgyKDNcNg1t",
  "key5": "2keaYKpRMfmrpA9Njbzvi2A2tHk9ygJq6HmWSrwRhTf9yKadh2NoR6arVdiHfonYMe2WA4iwmYC9BpbXuJncEjfM",
  "key6": "2uUaNo7KdnKjBV7AcUxVZ19oxq9FbqoYooTmYzTTX5JTUpLKdLUrYPgWxaMgfjVyjHvu1VDqTBTLxSDTrt9LDB4e",
  "key7": "2rp2DXhfFogvmoxCwP2WFCcyZ8zCFuvmjUbgjc17F1cxuWFc8a9wfWgNmak4We3jjiZtMUVTUY6JUXjVUWHBsWeu",
  "key8": "4r8ke2Q8AQnqbkycLPLDjeZLLyQLXRAWnumtL8ZNNNHdG6GjknUb8aSib525MMq5xGNiA3VWnBRpquB1LXyLzz2g",
  "key9": "QSosyCwhGuXhL2RjtGa4kMU2LXxgBxdF2cn2Xax6orJ4yPvpgD5Dr3PNBRZBhH2FVSbYAMbbwZt6zS3jAUWRbKd",
  "key10": "2iWWt8tFmMPXBr8Pf6WUWtkCF49E2WQjY7t6L1XyXLVeqDa6czfnApAJ7vGzN7hANmKY81W56kie4EvrWFZ9ARNo",
  "key11": "bLdPY8B4yBq4pCdnX9verGPuPFefAU4LN5tFgztuuKyYkvdz7UzSzVWzMRUus95P17gkAYGVkmbhYKmBnZJX1te",
  "key12": "j1spEbcugFQLKiRvwGRCvcyZUo66PHzSLWyGBxoKztfXhfziepd1ZAtYhyi9jPASNdZL5BGfH4a4pigPBTtzd2z",
  "key13": "3NKmWmES4VnAmgAKHbw4qj2fQA6gkJaNRvR6Ykm4ZdtD7AvfkpCTC1mN2i3aHGJjoUDdMVfVTdQkxCsb2x7fqT9N",
  "key14": "N9toXYEa35ea4hEm6gtXfDrHJMQfmCBKaEsD23pw7b1fQ1GXXm41SoVdZggzuzDbCYqHECw2iMvkoS3EoNnS4NN",
  "key15": "3UEK4Mhbgrsm4gtNQv2A3cZeDfipHwKehYDN9bSs2EiXcBzcya3cRHUv3ga6aWdZPZDDDJCdHe7EvaDAtXGFYT9S",
  "key16": "2x9GBhBtuLaF8Dt9sC6fqrxMwA8EMQYWamykBtePYn1F1oZrXeFZBFXJkS2nHndpqVN98QViRgfLTDwc9qCNkZXC",
  "key17": "41C3XaoZUGbfDFCsZN8n4h2nUWxbwtSHAGAgC3sVgx8Z3DpwxAMYjKzdghznFBzS7umuYNudQZD8FqNjs6k5Povu",
  "key18": "3jegLAZhjV9E5R1iQfyYiHuxy6Yk2MGsJ3gjGpMDPjiizfP5qkRwNWD3Xw1vL16kFwWWwhXB3QnsuDuGKA9JcTQE",
  "key19": "2TD1ghMyPAiiU3o1PMeSPHPfJkUvwpmUYfgnJjmdekBaMHBASMwzu7AMA24A9oqJCEwjmjCvE6vu1K9hwhscVuye",
  "key20": "4yQoUf1W9hWXrxCVCyoZVW6iTJfxGUBZiH72NnkFc8tCw5BWUqzPDNzzGM4LVtfZCKBoo5nmAt6pDvG4ipMUp4yN",
  "key21": "RH6oDo8vnnXfX5VHhkweA9gc1MwgmcTaMiKbccP4Zufqj1fJK3rHB6wNqxDFzrQaUo3MqwYwpwzB3VFp8nBUdKk",
  "key22": "5nZytuyPCNkJdpu8Ztyh7YabHFhjKcBALbht8gJGVoeAvNeLBACpK4Bn1oadTm4zAR3ESnjEN5A3wWBXgXBxQBb5",
  "key23": "4XLSbiS5FNJsLGYE1qGevQf5HeErzf4f6W1Z3yWjPjWtcCjLomMyZznEhNmMc3iCNd1uhhaLDSiG5p5Lp4Fi2XEM",
  "key24": "5T4A9db3zDuucbrnEkfdaJ3mqxgUg4oL68wHE4UokJRx9YJ2FmgsWUYEVSryVz9WQ6xbmb1q6BAGsR4V5KW3FvDw",
  "key25": "4FhyfzJRNFBsPAVj7AjPyvzhn3FqySjBDicS8fCDDDt86xajhcWxBaQBuMF1owyusY8YHZcmSERPvZiTisrW9F25",
  "key26": "58jok1SCZH8eFfhGpixicoq3PxfX477BYS43w22FB5LH8mLGFGjbFWKb2ZbvJLqsSvpCnH5ySp9tkVz83yLwQkzJ",
  "key27": "5JL7gbFD8aeFYcSavkxqjj8Tecwx2CbJW7gS3ksrvMZN6bCqPwERGvTnBrN73VWhmqo2E8ApJM5gezefvJtWyt9h",
  "key28": "3P7b13nfkpKxVNe7quaWG6Cc1NJJixinLwY1sHq9TCcFhZ5iFcQDwP1yivx6iJeZGeNzsqkhCXvmdSzHqXbGETHp",
  "key29": "3rXFJa7guxcW34pi6t2NFSoMHWTHZFAwu7DHdCtYtmGrpM3paiApj4fpENsrEspSnHiRgAKqum8rH6N2EC7tYArJ",
  "key30": "2vExBD6DnScftJe72KVXrCe3eUrJwStNmpqwtRErzth7h5dQaVTAwvKUDCZcgWTHEcATbzkbhhs5CnYcBGvKZHWH",
  "key31": "5yEDdM9ijQoAJjcoyB9m968Dd6EkqZuy9DofxP9cx9DcHEhChmJUzcuBztSHKRroZMCUaXEi3JHRFNDdXfeb5cmf",
  "key32": "3wP8FTNrSvu33NLmqVVzDTUtdbimpXYyUx2pgBd2WBt8NRUJ1zXnHHKGvyzz3EVWksnVt6CPNKURk8kWxpgDBZQ9",
  "key33": "5pLAqQznHieNSh3qDaDff6tStZy6mYwmjeD1uMh8hGikm4JHxcrKSxks5jVSHx3b8j6FxMdYi9VwAz2N7apXspz5",
  "key34": "4znPCdtcWmbaLPV9gJPrnzxvP8JDP5GefYUaP61rNVzz66zb1E8zsRkVBZ6rh8Tih9r3BzFMxDwNbTr1KH43abXV",
  "key35": "4sm4rSZqSgoqrGtyvz7ejWthPGMpu75CB7Kye5pHMBF2J6A7SVRodVTqzA92WBwwqP1ia4XjxPiDr4oXxn7fFgwG",
  "key36": "4d2PFSvANAaV92bR8uURAFgWdX9rJ9yZpwkqsvMcmdgCm4amU87oY5JXNXutbsQctBSxtwVBE14qodC16yYzHXM",
  "key37": "3mCU4Doq8Pm9jfGg1pfVojdWjFZdUzsfULpWpq2WVbWuqM3CJJf1zjhfNUVL6HqqAv9pgGJnP49r4scsJ8hFp4o7",
  "key38": "3vykMaf9MuaXX7Zk1mEB6oWNfEb43EXPyAqviCvfr8SVJGMhcx5QFHD6Z7zqdpUePqYJDJo2EFs2DiqW9cBkbfiP",
  "key39": "2o8795A3jKRYrxz1kNk8gK3cKRRYDiKSeM9WCLZVnVsET6KPi2sU7sGo4E9xhTWpmnQAfzbrMXQZ19mKakXZ5SDG",
  "key40": "uxVic2PAxxiZWDuAqvVMZb7ym4C2N8zstZFkjs2nWZ3gURhuo2MjP51zNzebfMST8rbEV7sWV57RN9kvHRrQebg",
  "key41": "3NsgP11DrVgJNa3uFpaoCHkWy5eutuLsCU6Q4ndQQindiAhVs3xzdNhQN5s1E5jzfknCvRjNJsAKaj24TSjzVU19",
  "key42": "3LBUcbzNUekF6dgYBiYkfBpLpUkLzuEH7FW8p6sT7ES9nG3kwXJ86QCmqyZyhLxdM9bisMyi8S19n6tj3LFYiaYK"
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
