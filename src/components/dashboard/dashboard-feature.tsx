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
    "4UiJBSKLaAoVAk2Cusuh7yLasyVGHor7aZYvG2hwB6gMKbpXVGnW4cbRRzD1ZNmNZbyMkzJwsz9nkWXzqYgn3zWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MpGyLF7TvQqEvwHqWcXCakzeaSH5QjUL59xRVEgKk7S26RGFZXwe4T6kxSWLwcS5fk1eYnQUb2Kh4JZeGfj6kP",
  "key1": "2tQKEJZDhDdrbiJwLbUaihRcozuyAFzX89Vt6Csnxh4jPLGzQfMApZfXHmMYvKkWRvMGTafT6KpvNSHtxoE7FhQ",
  "key2": "2mKydRkvJh57Kt1Sfk8u7dDTKviSSu1eR8PK6uHufLQYwXT2w1CPE72q63mLPuWZUXkTfW1rGPsSkbjSJzQ8QTrb",
  "key3": "4rmQ1CNSbWeo1XK7xLCUM7hCzn5FYMqFQFyTQzoEPHT5DcjckNbYWyxeTHjN9B3EC3r5ZjkZYsqq9hRgj6jYiWU9",
  "key4": "673VxMBiCTexNPruJ755TebN4VtKD18wbbZR1YhtTxVKuG4suPhGipHQMibshSfCSzrkphAWWrydqKq52H28sEvJ",
  "key5": "2y2CpGoAJA5MZqiTNKRSk86Ehv7na3FLc4iGjwJ9Ck1WC22dvwrGfiqVj9jqyuvwKVzsgm1W46Lmr8fdFKre3pu1",
  "key6": "EegaXymwXmgMwtVaPhwtHL2PvYeuKkBXijw8C6vrnHLxgLQyyE1qmH93UCMGi9hn8uSKWcwYg3TkjTghY4GXUTC",
  "key7": "prhCNFJ9JANUXXFz6KtHZ4x5raRUEDX2rhfgy8eR751EanJZTnubRemBhhFMxdd7DUm7YafStn3rUxDqtqgauFz",
  "key8": "PBEQN2pfgup2qT8M2juuPwkffxddX1uTP8Nq3NUhW5cmhNpNBbVJ8XuHBxyHrvb2DNDTVogSVPWY587A9kAZURk",
  "key9": "iriGzrxrpzTtEooj8xbLnEcSw8wsy8Gr1R59hnG5PgBnSU7WXZyBwf7WEBQcW3K4YanukSw3XQoXekjkjhVYGN6",
  "key10": "3A6BGgR5tb8o3yq2sm8bqieHAkroNGJaJVcYTYPpL4yboeaTMReoXQUHCt133U8GbPUm3Udf8BRBjEjod9qVwxAW",
  "key11": "4zmDD3k7tKcxnF138Z8FJZjhSSyWUuXehUZm1MgzvYB69R7QVRE6qVnVxUNqCLmmFr8JWjCKet14aVkdCfsheN14",
  "key12": "2hwE1kKksKaJHgxS4GkRMhoWM7Lx2F22KSFm3pnjKBhuT3zhSmNj9Tx1a83qA64BJRMme3EZ8jNzUbGhWU3qN3Yx",
  "key13": "25gh39ABNW7fZKSEaCsbVgnvGv6TjvyZHXhNw3NHzFqGwFHwXaVkKRTeTV7njisab93svALejAuwcKs6wtbJ25xR",
  "key14": "de2ZrNYi9zeyASt2NtrjfTv1dPTiub4QSMqvhb6T4EdGEzQhmocbKi4UvMrsPNsgx9TPgx2rMJjAU9VFefaAJHq",
  "key15": "3xRwkUMTK29Ag2USaqn2uhiYeRebVpZe4LPka1JBWZjJ4DG41psZR2mqQpW4L4xY4h5rXkaoHryV2TUCswa9GgPd",
  "key16": "3sutLfX3USyMAK3Q9NXo4ppFp6EpScGSL78W24vhSyF1TEVF6CfYYLLUCYBsvMgJv5gRzvK5yeF2qEPuoBLHNRD6",
  "key17": "3TPFmKEUQ4aGjwn7h2t85cMWqTs7b279pNvfNZ3FuhyHNS8LaAjWjSFUxvLCN8WVoDnoripHM9ucYmy9bzVGyxpa",
  "key18": "39DziYrRuFytNnqrMjV7kmv9j2ZvxeVWV4EZ3wPPcTnLNkBX2NhpKokAut8Z6VWQHUc9zSWpaaTe7oFLR6WFGYoK",
  "key19": "4BFgDFY2m1bCseej15cedBiURPVkQz47jsyWy9tjpRRmYnwgdtDY8mAdVZAMbFPgmBvKPb77bQVt5CT1uBu6yTzE",
  "key20": "2U5rbfjuwdbyqSJ4CpJmAYHQPH7DFhpy2qsCoRDx3GZGzFhtMZPn21pgbSgGSF5wgHtU7GL8WSpxWuPnzuX3bSFv",
  "key21": "S8gtxTTcQY5DXFZAkYF1ewhz9ZRjbCVYL5uxWqArsGzDgwn2YpvtksnpikxM2wKg3DGCfRm2vY1jnKpmUnPSSJH",
  "key22": "5XJPTyatZXsJUuGnTiLJ8Vk5vy5Pay5CNcCnTbndo93ghsrCdC26sFeJZ7wcJdFbu7wEVCVysr26JmLyK7imEv3v",
  "key23": "5Fzun6jMG1Sq2HZwHuUERDe1ehfYPaf3wNCz33aExuw6Skp3YhrpR4iWgn7siRDXAHmqV68uvKb8euVc4jvKMATq",
  "key24": "ZJeYYZH1tvjj5jceV9UcPj9WficHPKuacysF3BNKSe9CTsPnZxTFR14fGQGs5jru9WEMC6kDH8Ybu8Qn9g4W9LJ",
  "key25": "3WjmxnL3ZLZaCkweF4ghS8NCZ2JG2aM6EpimfAEgFUBQH4KjsR58sQfyr7Bms8HgQhdUz8jiGq9A5DxxmkSkK227",
  "key26": "2dPyzZWw9secnvvF1ntJz47GD8gZ7uwLaAF8MYhpWef1sk8Bu3sfbMNkSUibrWSCJyiidYS1bfGhifksyeGNyjkk",
  "key27": "4qcbVyiqqzbUKiGy2kvz8eL1E4xDwzjVWCVg3PHBEDct329p5NnygdXfgEyGATH4mMFmKZuN2jUUHfJcYgwM5Wd9"
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
