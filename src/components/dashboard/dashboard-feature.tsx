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
    "3aZHrHRawxqQsM1KQPyffKRpbZ6MTpThvVzb9AszTViA24ogj1unt1MuQ91jc8bhU6yu4VqK6x6KWTGizPredey2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NZaG54CC2MVzh1u6NZyuo7bf1pxrMbJr7avaxxcNE7P1iuX2ZUAPbkpmHVVovtEcCRzEZ6o3GTPQ15zihiqbRLx",
  "key1": "2QH9e9HPFsT6d4nh6ZaQjFsj3a72ytSaGzFKZEEvGHgL3cNVjZYeY5MJo7eFgTvFihmEixjTRGgwkUZT1GeaGvoG",
  "key2": "5EqWre4wGBgkrtbkpG5MQE5AwyuvsrLVJacmpmhmc4BmMJjAXE8VqHJKT8yh5wiQYpQFqqjr9V4Sas5p9vqD27LV",
  "key3": "4PNQB53vxj98JJ1nk84wLdgHxyfxEqJFpsiqwhCQJ258BoPMkV7V3kebBLCDtXFWJHvWxJB2rg6L8LLzHQWuze6i",
  "key4": "3e6sqU2FdJJNWNpW7U4HUQorRa7p5RqyaV5nDcb6URBqcYtSqAjDpBs5XV6NeXt77Rgjtbr4mZJp6xV7goq2wyTp",
  "key5": "5WzqbCQc6doxSNvdFFV26v6miSZ9dkg5PqQHxgTeqhfEhemuYqdVxiTk2zrfnVgZQzNxRMqaNXtwB6cuv3gS8tRz",
  "key6": "4djdVAk72gHvHhvJZFNFZPeEpsmNfqoGMQVj1prY7ApdgT4MkTmVBzibfwddwPm6x4oUPjinnaPbnJTQD7GLs7L",
  "key7": "2U4zvo2hfQ4i3C8WtxGdxm9n3LT5e7qesnbQ6YFahndheirtGQBBgjsWmfhTjdSQJRye9SR1PQGwuHa3Tg4z1jro",
  "key8": "28kjCG39kitoaSYcoSrkqJHBKkGNVVtZQk29TUqk58Bj39r87CuTjkQZ7YKR5ivL52PeABkadh3Q2pkAWRJJrjqY",
  "key9": "WLctzPCQCppmhu374c4LseyYqjj79pBMkSEzfgNXuzykrg72AUG5RRjbreP3GPV9ZvLYSFMUgZZnbosqTNK3igQ",
  "key10": "3JVzbTn9J5XWQyMkTHHrbCBuWGHswwvZzTyJpCA8fbLadKg6pPsD7Ncc2PTWUBcLSDJKnw2gq8mRcWTK1gas7Shr",
  "key11": "3hHTD39B1VA1hoTAgjpR6czJuahfnUvxCt4y36gBan4rcxoXj3rVw2DK2AT5H2ikEkB7HCFSY7deYa3kinC9CWBX",
  "key12": "3bMcMwFjKycLqvKqTkqiriZMDv6iYwqkc3Pv6anHe2TA34w8i4TMmA12eLNoUR79V44nRooVp8SnCaxWZNKipX1p",
  "key13": "4mYMMwGxDLMH75ECGWdXWGW92rfAa9f5pNrGM3BtEVQWjhRJnWueRctwE3H9hzihvw65CbzUqpSkPX2GdpdGX6qw",
  "key14": "61aH7cK7xVK54L2TStxY5xVYnBxXSDokv91xZFn4CAkjrwf5F6EgHYfcQQYMxorDapG5WwCbTJwYkHoVwfn1Fspj",
  "key15": "p5Kr63r2jD8HiCfYf8JXgxKadG2hMGjJcS2h7fi1MnZ6hBJ5qELzWDfoNzSP4xUow5usjP2yoQ9grGoyD3Tr2gA",
  "key16": "4NLDMHyPYwRCVJjZo25UHo5TsYaVpMs4XQ7zjk4Ls3RHsbDStyiJQeMomdNGPfs2xwxzYjhbbZuNhrj3pkk1ZKjS",
  "key17": "3aoMAjJhDCub3m7nsT9gJGPWhsZdJJzyxXVVt1esqRKdJDzKN8fsLy22cYDrjoeR6LHcRdQE37LZtTgtWcPsGSZe",
  "key18": "QhGW5mcGMUmxjgiVgomHMvfidmUXHAS7i9xfmpSToz5DNzi34DMtBpHrmZqPKToVYVRAewUzNrWcFMZGhpHCUs7",
  "key19": "B2zjQ43bz85hnhi2tD7twvmzDAwYYWBvDBkYco9dnDQEE3nDqXqSVANsB7Vxsyq6ihf2vGiUrrcFiNa2KjSjYnE",
  "key20": "LusQrZdJSnZSER2JUqcDx7SRcrRcMavvG2xGT95EH4o7BfDXcBRLLf7zYQ7d1j6rXjLXZZTRLeHQfCUhzN76fD6",
  "key21": "3fgtD1YWptp1z7BX3E2TwaF9GUByDpcvRAchzSxsopggBNqMCkSS1ry2FegRa1gZF9dxp1yH4XSgtuj276ehcSuZ",
  "key22": "59Hy5Rw1nPZLqC1qVJKp4gDhq92x3RPBP2Ufkj2USHh78aNw4EbjLmUiCxtouJLvSaC4oqucLA16y4omabhEFZ7n",
  "key23": "Gq6fciBvYPmAskVMBWcezzDYA7znsuS5qif53xRQCvYoAqEmTMMK5RLEzjsRHUGV8BBtEWiiRpDT6oLf5VNpD2z",
  "key24": "cccvGiSWGjjrZ6HBdynnsyo1maLzx54WirrvBsvaASqEw3Q5zgZv1Wd9gug6hnEoNXh6GKLWDSK9EYCJ6cpDEJV",
  "key25": "2y2jtLY5WSKPAvkh1Pc1iJwMfGkVtNZi1niTb259GzsBMaNQDtbeUb7BEydRHTKHmH8UAsF9d3uznK9YJvSrCmb5",
  "key26": "ENmVXu9oiWVAfkLgTqUcQS6tFUY1SujRajLHBWGgGXWbb2kDQkbQJwAZCkEQXf7iGHhwi59a8Sg5G464agAoN4N",
  "key27": "3wJh92LB6RWXoQ5PV84JR1YYBq8EGyJENEZkcpdQbf5hkpzZetT7SzFF3vkkRM4bXnRGCc3JiHvHojeiXmNetBs3",
  "key28": "4QVDhqeLVXKKWyKCooCV6U4bsZtyDPCYWanb5VmKACDJFwmJRdUqyzEoEEnQpnnzByNhXejHutUGeNa5dLMtMcPH",
  "key29": "4AV32NAZNRnnUDdCxeNJeBqypx2asebaEpiyaFp7DcF48vhaqkzf6q8CZDqYvHGcA9gT9d1TzbyXEXxM3wZeqwDo",
  "key30": "4SBMQ1smJqdM7sSkXjnonc2v4ZEPzv4x3WvNW6QrZzM73Lbx7mWqU52dQDhs29b7nRBdN97ieLAuSfZsH7qu4Fsd",
  "key31": "66KCcvuJUNjGfKWLkQ9tK8ckaUZaV425Jopnfb2JUsgU13YZPdTXA1ihZRtBH9N75dnLL1V3i39miLhuJCUW2TTL",
  "key32": "xh6GL6G1bGC4VLaYm7TefUHerZ92Pt4Dr6PzKqukwMwcAHTjngWcyFBFE8FxZPpFJakJSeAnxL7eYsZUEPpUhU6",
  "key33": "4tvVaYyiQBBjiden9dmMR3fVHyQ6MDdKf6y3XHZs5HcBEX7u1GqB6jk2Sp9xBHdJ2YscNFMewPjko52R2H26c1r1",
  "key34": "4o1PwuXeeAjSqK6hAByP4vzQ8aifeH3i1CmiTAic5PGLWj8niGVw1h6N9HNWsN2ys52nwwjShKqpzVkcozxJRYNi",
  "key35": "5UHxf8pwyVQDuKwAQeXhAU93fErmGvU4aLPE3adMmiAQMG1EBiGMgGUwKodanmqUMn7roYRYMTZDCTn67s7cJM8P",
  "key36": "3AekDTaNrrdFAs246SMoF6Ci554pXckdffSKVtQWcak3ZfPjP5BJUdYZK965bQfR8XNVMzg7Xrk5XoE4zLySV4G",
  "key37": "2o7dtfPhmiYJmPoFGseegcboCuBYbG49SM1xjthNqxZeKcKHoMMALGUvPKqnjy9BWTtZiRRGuay8Sthn3vfPm7wD",
  "key38": "3NJfN97XGS6X1yAbivpyUCosfjXtZ5EGxMazm34ceMS4mk3dLXEvi1YVVJNssx27X2F88bgjnG7xSe2qLrje8kvr",
  "key39": "3vCa7wKVuD58w71a2hsFW8HdyDiRc7bchgwVBruhJskAJVHAuPnMt2hkUWWdL7U38syMypssqbtKMUmd14QtdJSw",
  "key40": "wjaDZWu1395t4RaY2ZUDDMxTpjUSSRoDpvkCfN3UJPPa9B4VfpNjLQEdktJhrgGJRzi3fxCfKnTGBMVPxeKWMxh",
  "key41": "n4fDTJ6LHn8FzSXPUhpsmfPqpZUU8MqfmB9msDSAL6Yp2LnesAZbGWiwjFjQJsbfERUMXU88r8NnPrxSbe6rPso",
  "key42": "4zyddCRevnm4UfzZ9Eq9KQG9AkNBnp8zC6DVN3XL91S2kT2BAnyh4chd5mDtzxhgVsmb67NyogbEEwKmKQ2nFaB2",
  "key43": "5qpnjqByDmvLZLuNikKXWQsNcRw9ZoZRx7iY3VMgjt3Na9aUBNKiuTu5cFtK3h89n1g9dnFKKN8nvPXWWWJiDQr6",
  "key44": "16GRTgPMhmhdHd1zxNtY87HEvi3PviKd741k8SUjrp6HKGLvFfUVp58PF8PMftEiULSyoK2HQBj7FCHxTtsMQqL",
  "key45": "4md4kw617NYEPUuSkGcQPc39UyxDHJwRe8bnCQ37wFCQUvbWQWSRuj6vC8eUuGCMmaqJaf8ExWsuobz9bcHTfhWJ",
  "key46": "TJ1gBXuFRpDXFuxXbAJFAQuQ6YZpjVq9HtBduogjuNBLeA7dvPPZarUFn3TnSFgKf1nYpLjWjuPdxePCnUvC488"
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
