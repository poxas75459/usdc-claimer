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
    "39X7qj7kicoJJP7RLwGQKTsBx5K3LFUrMdHNq7MXJ1BKHvPN2NZVhJsqmQ4u7Q5zfF3G3hUpE1fwja2b1afb88dB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RfiLGE8FPBmNWJRuHR6QjmV8aBcAf9HwDyh1Hcivu1DZhSuAjT8dFnSV5VXT1tARTaF738Ug9WHmCLaAJhWFAvU",
  "key1": "1fRgwJwFHczXKrmP2EVqkjJSAKRt2fdHQg3b8WnaeycPfYURntCjywW7NyHDWsZNrB9qH5ZCwqPAYqWrU7duEvw",
  "key2": "4FAm9mahXzaHSntphLsV3noUXdet4gACQrVMuq4AeMtoS3dTuiqJU1vTBMtdr3pk84D35jvTdTM3aQGo8EJswcbc",
  "key3": "56SFiWCV4Za8JVoUZhNMBkEnfkLRJ6T6SHYUVh7MN3yHv1phgqftbSEU3Kp6WhJzPhHkd8EouTx43brDgTxJRvxD",
  "key4": "5JvhGpuzUCcFT8rvaKYhJAZmLnYDyLcT77QwLHkgTtdN1tJKKqvHH1LbiE8wBGmNTEmzdDfqubfWCF6RExect5in",
  "key5": "2317uZ1njvHmo3yXN5JeSiDrbgQrmPbyzReWEQLeHKEnnUibuTEmjbMeZp3beYbt4HAyDgpcfQXbyVoEYtGMYvk3",
  "key6": "3Zt7gSAESDQJXVF2NjTUJHnwgqEEXuMCfoWXe2bB4V5DaU27cRcvaVxzdqTET7DrMWDFHRh2cCdYucAYUpyvEDU4",
  "key7": "24QcufsJ7RYC28afro8tYerBb1z8Kvc4P4mGyf28qLxqcAM9jmXYdLEuqVLuNdkKikNGmEsKM9rM8zLNKnweGvJ5",
  "key8": "5w9CLYc8DRE4dCmHZ4QyJufgwnDKBFnUnn4PmhprqTTzibQDEW8tnqsJp3h8R9SqVrgqaRnUEDBDLrHjX5YGL3zh",
  "key9": "3LiKYUmVyegPSZuyuez9ra1N3kRbKK2EjB2qnvuZktQxCuDwSejNFapAvi5hgKrG8WJwPC3u3p3ZGuAsAYWxcnMN",
  "key10": "hStALRbAYfRuBgTTGTvq89kjrRMb6sGoPCmV8UCdMjbbsvs4AWFGyiN4VKbLLdQzGh1T9awrNLX1Hu9J8HHdq54",
  "key11": "6wooMcQvid3iT4W26bN4U5PRN4zoyYPATrSSk94gymAWoYxtVHGPp1j4cGNWvDGzk55Fzx7C3fdCEwRW3WwakPZ",
  "key12": "5Ltt6WNA265KGYimC89bskWADjpHWf4BKpkMHrziXfqse8qZzHbTV8pE2xbjJiMjZZ7M2v7n8Bzhd96eeDoStVCh",
  "key13": "K6WZWLZpBai2qPJzhbKfcRmM3DnxR7Sko2DN5pPkeLwXs27YnstcserQJtNPdWxRFgiPATxGhUvvF8VVw9SEeGQ",
  "key14": "2Qmco7613jhq3vkMfhrxwUxuRgdSgXZaWLaRBHW1yeymXMb68Mb1sMbn2GrTSTDK3UtyTRSEePPwkjyT58QxxKzC",
  "key15": "3FQ3mUunpYVt1R6Z5LUY4QCn2JLgTEX1HEoCGucpDDpJbDZZFa4eMuqkCLmB1vpQZyVuuuRYrapzbZAG1yX54T94",
  "key16": "2wPVA8hN4AZ9Qy34jFaB2xCLJoqhGDBLdiabvk4FPJvUMvT9fndfwwQNufoEdQ5bTCiNmG6vwRJirBx4RGoWwF4c",
  "key17": "orczsZoBdNjjfJWwYCW4uEx2aif7P3tARkJqTFERFt9ygRTitcRc5xtdbCUUjD44jsXtqbEHPuLpRgeMrVz9ytY",
  "key18": "YshvKnXadeBAtPpUrDV89kXzbbjdSNw7Vo8K7HNTcXyFGPMCgJKuB8Bwj6VA1V41YnRXQb9XkRkHn3f1x4tfUZm",
  "key19": "5WS7nwpw4C5oZitygDo6n3a59qGa6SUrvHTXG8xqKQ91r1GXuFbkU4o86ZHGMBX4svqSjqkNxF7wy28FycE2hGCx",
  "key20": "4BZUfHhqSsE5q5jikL5PJoGixyhQ8FqGvy8qmj3cvCJebpLMwuhiH4Yn7MVBWvvgxdReAmgJAy4qzm8j8YyasE3o",
  "key21": "4yqadNvzqSBkKrw6g6Yk3guqR1L19qmWvuXYJkFqqNGSBjBArj7T3XC8qFp7KoqmVPmEZs9V8CRGwwufnEzTxUz3",
  "key22": "vYkcCGHEVvqxkUvTt1Ce6oSEUS86BaHZzHDzD5pCcvTKTViXHBUdLjwPy8sPwab8SisppV4yTr5R5m3wqvN189j",
  "key23": "4mieZShmbj1EHFP7qdJ9WSLmsyeNCAi6Sfr1y8wrnZKytU3mtJPmqDAwuPDDQ3EVVb6KFN7i5x1ZG8CerFF3bXTM",
  "key24": "3Vd9ETTgNvENDLauLjypzGbaWyvHfULJsbErN4hV2YRfaU4f3mLFhvjodbyrmPNy5wa8Eo6o5UtnCQUxPHVSrRkg",
  "key25": "3cqgzV8gHmUmVcHefWga3tBUPXbvapLpPgpgXh3gh5Zf9meNK7EppfkFxEcbRneAS3JyxDyYZigwU2J9Mj3nC5A",
  "key26": "32cTZFWGhiGgpSZUGvWaeFvEhEpVwjo9zCTtgrBtb4nMB3FnoXMsEQdkPQTYDY4EdSfP7vQajz4KBkVEmh3vZM7g",
  "key27": "5BNo7LB949VbgxjmzwhDgLFzaGmn9GMqLRc2c6avftGXhDs6fW9ifPkdmN5xqoLPhYcrib4XxrYRvmibmsre7YEm",
  "key28": "YASw5yCi12AzLWpwRCH7yQv5wVzyozgVSphq5rRAUzJRyxG9a8UGWiXMER4dxUGyXr7Nf2boUXNW6ih6GuEotHv",
  "key29": "5BRADShoWkKUXHncjy5NakAkJ381ySsd1y7Eo9yezGxPi73pCEUUdmHqK2TL6jWzHqsSzkUjd5yGyezQD4CoXeQC",
  "key30": "vaH89Ww1qXvh5zdDzjpQex6hPJ2fsVydHwJwsk2EP4Xr9CGkEwV51RcEFBWf5awevZTENc7RwBVvdXtw5pvUBnQ",
  "key31": "4o7VtT1EYVRkMMdgCYZjTiMB5AYd6pDMHeNjRefyo1VEa7RhquoJzVAEXvGVmVriiMsPzL9A18QY9C42QC8jH7DR",
  "key32": "4MNkbxEKuVaXwh98rNC2HpTeQYJyMTyDy14J9cLtwjzeMhV2pVqwRmsuVXRbcJTgc6n9vwmocd9PRk5DMrgiwhvu",
  "key33": "4EB2rtJ5BktDfaf21rzU8uchVe3gCGUcmQsJEu8UV4FkcFH4tHu4uYA9XHUHvzJDSYER7VFqz8F3TRYqEdrCYNCc",
  "key34": "2my6SZyHGTZmfxPANp6ZttjZuVWhrpFy4BRBq6USSphndpdFYgcyhYTMp9bSRpMC5tCVQtr8TQg36nSc927ozqu2",
  "key35": "3kowDNWvFwyCAme5h64diRQ1xYi4Qb1DJuFQP9uKDuMiF535XcZ2nngH223pUZG6q5svBx3kmyQSHu7ciU7BPi9h",
  "key36": "45B1cuVPQfn1msE36LnvfyiPW3ETaL1DcvAFjLAyrvokwYyYERPXdBmiRDfo2Tp7DvAKJg5aL3grNim7pv7S62PJ",
  "key37": "25P5hbCYTEXCshqcGr1uE7UK2XrYQPwKf8GWZxGyzBqGt3pwFh8YKm84LphVxW4yUhDi1bwHqRup9gYEzzqQtmJz",
  "key38": "FYy2E1mxSqEc2EudXDAn5Htxr38x6StPgvq9ADRZRuKB9rAjTia4cA5Ucx979FFLrPDxBBRx9xA85h7TvnNoWQY",
  "key39": "QTxyA3HX1CbFKvgUaRvJUNW5FtURdvtMqWwbxBLF39oSkD3AnusGM9V9WBk8F4M2w937G8k8LNHwoReudTaZZvw"
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
