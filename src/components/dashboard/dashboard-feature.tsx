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
    "2vaoRAF6WSL3s9DA4WHWawAM4YaPSqX7vCEu1kXULdmvkukfV8BBuKACoBGfzgSMYnnFpbFnvdPJd5uS2S1eFJYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48qkU5h6pkuses8LzaHdDJ5uiaGuqQxsXQH5EijnxWhknX1c3jub4TnYv7AMD7czaftuRpHPkw3TZDmRg66eWaHi",
  "key1": "4DSsVUjsE84XgwEjxo2L1N9s7cVL6NiHXshMctd1uNEuXvDq2PQoyuvyoNzfTLFjYSuUWh998sgDcySdM4he1Sx",
  "key2": "5AtMzMRbccPR2tGidfHVG33GsNjWnewY9eon1ybZ98cHhGVxhbuve2oLxtkg49cc3n3B7Et1hCbp2GPfJmdiMsYo",
  "key3": "22AbhAAcQ3VGv114A7eGtYB5J2oC85RmJC84DXCnDFVjdPxSqJgDtPBPcxaXmy79qkok4Zumsjj5JctVsBZ8BLyp",
  "key4": "4dAAt74m4t5jwyhg6h5NLrhD9fk9CTxgyKNBoDXi3PgwygirnU43MuSYfRw727JKb82kHxkQh1RUDhACDZHGNpcq",
  "key5": "4pJ7rDp9Ff77DL91sRewxAidV8nPPcZsPuNcoqCAjjnjPM6Ep2iTmE1mLbvk6inSkTaoyASavHj2PKmHSySQa3m3",
  "key6": "2Xdio2VkeZKxJEGFDXoKyiTfzYoqmwjrpFWtBQ3f5t3yZ4JHEf8vtFFF4HNJDnGvdyqctK8SnuA4QL1jnBqim8nQ",
  "key7": "2irwZ5zAwLHMkA3HYtYp366tBpEosy5J5pabkEdPaVw3wsCPM389o85jnFCHuK1VBqf2UtUGDRP488QL7qxxc6r4",
  "key8": "5xKAYPrfuiCCuWPzsnoiUZWkcHYvp99LmoyS9mqX3WBLxwxTJrsRse9bNueKfhgqe4dDT72z98Q8LyZMwmf5Pgb",
  "key9": "2Hbi8dk1RNaTjTWFKMJxELR32ni2te8BirrH7cY4t1BKX5Y2AL5j4essQBFoMUePPzz35CNrZqevkBVW1zSMqvag",
  "key10": "39KVPqANVLGRJRoKtBeH2u1uiCtFU3eTQdTF4gsLtW8GKnq1ZxmfEirHzfYDeMgK4NSwnkzkiYweHAhTMWj2XMSA",
  "key11": "2yMZbZzcccKEqu8vhTkccq6CsuozYjyPkAMA5JhR8wqB6yaUmr84Tdtg6BGhP7njqqmcYqpEKWphC2nDFRsMb2B7",
  "key12": "5LtQizEmRXTGDrqWNVCyrYGEXBrmCwuJ5jYSuq3YHX5JF8zeZtvPmswZX3nBqSE7ynpNYoUCNNXNKinBhFd2kkEK",
  "key13": "5br3RgRxVGve4d76gVgYSnhBcHa9yWDKYuuCqTeFWw6dEYuYjNg5D98pfhQvxRXMmff9hrRiN83EE6koeZ3EeHY4",
  "key14": "4CNjdthnxXpwHsoRXkF3hX4KybnVNEUZrv3iTBd1rpgLEw1FUbKCHGXzNBCj6NsRknMju3u95SLBkeAyonhJCd3t",
  "key15": "sMV2MotYdbDQe4JETjuzaXvJ4S9LSa4EJXsjMRX6E2Z8SiX1PAjWhiRRrsbqSZ4pY1c9ziPA5oFhjMWyyyygYqq",
  "key16": "3xtJjKdxdozXKAwkM2Ux7AP8NrQF58JeKkGBN4LfWrmqVgZ8SF226pWrcF8irKbTmM7UN7VUs1vCvUdnatLeBKJW",
  "key17": "5LpgCMwAmSHKeFAHui1Akc1FnEoLb22ogv1R98JPgPHLZhPXezJShmUc5KTuBG42DJswRucBs3eXf3kQUBv68SpE",
  "key18": "4LA5R5sA15NbQWmdoYAch7BVwcCeswpYQcfEv1AhG9gTn1TLJYsgK7ADdr54vr4PPY4hpkXm8i9dKwe1gnH74PHa",
  "key19": "4fgymJndGTVmWctAuotK9aXgHhdQS9tyvDEXDKV2Yp4UHfCzZ1rK7DaVMwtb3aaCbFs1ExDwkYaZ7mDvVh9MWEZr",
  "key20": "C1QP1srm4iqZxmAWBoHXqSsQ869k99w9LZkNgxzAGsQ2Be5AE9q9ZG2S5yeATKQNXd9gaXFu77PKJYyALh9WKeC",
  "key21": "3WLAFL8yZEjHZvsCX9iLUYJEJfFkTAQovi3f1DSrY6juYVXJLoSSYzTsLA9xQMttLmjuKwZ8VZXkYFnKXDb7Gybr",
  "key22": "3QogNoMoruFrAG9pr4ZVM2uMHpuKFFmdjzEen3HccYvkiwvbQTGLsa2vQPxDeSjurYdpzjnRsSYca6ZqAuWisjZ8",
  "key23": "2pLkoXJJZwi3ZEYfFVk2EZ14y5e14LhoGxgizjNkCYLBXwfQMzAbRZNpY15dtZFYQLHrxE5whvUpxeVe9opureMm",
  "key24": "2saP8Hp8ybUzWZCie9SyF7WtutDorscYgykUKDPSk3VhXe5eK2mJ8xKgEaq4Bk3DSgfMK7NWwKCWeatLBW4YLyJY",
  "key25": "2zXVrasr1efE5YnBDiYzsnUtm9ajxS1XsQ3iNVYZbACHwXxQX9vMLe9rQrvCT2YomPQx3RBqms79Gine9V9yDb9U",
  "key26": "8p7rJfbwXgEaogvKEhwoyJ1b77SmgGwLWbzJHtyPhpMzmVi1VMAJ3smW5w9XcyQs3jWQwPNUHCWCQdQgZm6EiYt",
  "key27": "4zBY8qANSLLqdZdvZsqTurPsVc4P6NeP344QNXFiv6thbyQqZVLLsug51AQod2Hmu1MpH1KyYiMSaBJP8hhGEVvf",
  "key28": "4N37PSPZZQLm1CKtFVpkvsPqFybFZVEs3FmbAcfsR2fwzcotGQboEUJTq7GUMWmeqiY7yHE58fJLdy47miZ6p9fs",
  "key29": "2BARdXMA1Gs39v3toHNdefb6neguTuU23yYK4cF5GZKFjS93ayWQrWbyYaZtHvwdDGfYS5E25MKYrVkA25jrpEkq",
  "key30": "57Dh6CHVVX44YKpvqmMhX7axpRv3vZgBgiZWtaKMe4XjFoYT2Wj7UKcVokZECf8kbrYdLw7bYUhDUsgff37eav6f",
  "key31": "5TYcXRXNHAb7iSsrS9kZaMJhezazyX9ni7EDAai1Ztihnp8DscrUYNAwFmfcaU9AhWEn619GKG2c2MtUtNEZeoog",
  "key32": "2woGocsRGagfhqze3sHiCXYsmGS6keoSRhwcqXKkm5MQiVrrNCd8BW6hQgKzDbai2ki3NRBSSCgamZTXu7nHDRuP",
  "key33": "679aJjaZJeHaaUCbiQqfyYMmYgEBUvfS8HYuPC2SkVsTQHdpid6R64Zif5Qmmo7VK1EBeXhAW812Tq3X95kEsyb7",
  "key34": "3izMNfbm3EtK6mAaxfTYWnoUD1tpKrN2GfXSg6hD11TQBdyw2Ye1SzXuWhsYQEdRWLktfe9RscdpKG4BxNBG3nvb",
  "key35": "3gE8LmQwYeuMYeXzPC1sj7RijPtkaXPZzfPWGxTBTmVm5DtFWzU6xQQfXPTaTqvoHp2isfvzf7QYkzuWRZaaSEBg",
  "key36": "hBJu4BRgh5D7bnpgCe6WUac7WkZ9pPAevSpAmF7jC3JsEZT15saaz8uoBiuEbWeXKFSXYvmi1x3xPAgVdwotkVL",
  "key37": "5ZBZraUAQdi8Ct9mrHWM87SttJ7PaKBFuaXN7X6ADt8AZdauaGPXqhx5bh79C267rmuCnVY6WqsRxqh9VtahEaUm",
  "key38": "61W5cGhRM8wT1tkzUUmsaL7EhcmF9P7xM4nAeYwdegGEXRwzKfCFWko6ZrXJiGhdJwE6h3MM5gKyJw5uG2mywZtS",
  "key39": "2PMSrjeThNwnQL9RAj4n3rEVMBvU5X9bHaLsYv2nd9vAdYz4tWczUpNSGEbSRFshTe9NymCxqij95fbrFXCxnhcE",
  "key40": "3jqNL5w9tL1oAd9qLqh6MsN6X9yucvJjc8qkEopntSZKEQ9jmMM9TR44CU5EGnhwx3NUZTHPwLxdoBzF17gdvqcG",
  "key41": "5ZRB8yNQAGwGkjvYLM4Ug8dnatR6G6N9DKEZZrS7ZGoXR46e1YLnKYrxtazhiK3NqMMfQ6x5c1zHEvEhXDzEcFQX"
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
