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
    "gsMpohwZyCNqRdPXeAMh4ohyQQP9jto5Jv6XY7L7WKMevBjsZ3GrcA65br8iaMfi7koaDLKdEjv3eoFQGnWusBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SZnkX6GWSJckQwN8kevkqw723m5s6FnDjb5KdXeUeEkssrDY598vqkT26UkCKdcrrwLy9DgEWachpTmX9ypVrXc",
  "key1": "36DYrQXNCQov5RFBkaDdy6LhibfYBbSgux1Cm5ZrCuqH9smXnx3wT9GqZfYSaNgbaZTV69QW4ivf5ZjLhVHrLGuf",
  "key2": "3PXMGJUm3qRwYphVFUeWXRqFgE41fwSQcnJNKnKg3Lpxysi1bK1ucaJHSoyb2Eat4gFr3BfHJJqgLnqk5HfMCDBx",
  "key3": "mKEXWQScFyjUc6LCxT8dyFtCzcz8aGK4sxa12cdAAanHB1iWoQQ9a97FuVFZtLrYjL3cD1PSGocME8DicWy5zoJ",
  "key4": "4FJR2c9ZmxiAHpkHoCmbLoygmoeYAoa6uoARWCsdBXxbJQN2ZUYRSDuWn5SfVrMj5ptvhCPThxucV1J1xieTH7vw",
  "key5": "33dQTMCss2GXoYQKvh9Pqt6QSi4ayF82ScnrBHeUGcM7sbEtBSevzQwDZGk5rUtFu9ZZbhWm2pSSPGiQ5zhhLqxC",
  "key6": "3fummNL6jjUL65YXSPZyJGwZzqBgZdTGNVyogPK1nYVWmCMtPZCLxnfcDHgC2birVQboGkHKfaYoj9mqhrkZHDsa",
  "key7": "2BsMb1SKJomN1z1FN299sVQbkuKw69fCpeZLMooJvCacEAQkSUnWfzfHYRvArgzvJr8hAavqqiXs6g9y5NoZHeif",
  "key8": "4VRzhS8FVZqiVnDdjEegZhoce8SRgUEbG3ZydvB7c8THa1uFrMhaXbdtv7r9b3gYuSNcuPDG9EAoFdRVPMNkLXDL",
  "key9": "4GFBZjzzJvmHgvjE8qJfA7SZyo6wPsCXY3mVdTHKPLCUYnvZn2zqtQDqunP6DuZkZ1enJC3LfcMWNqUZy827ugep",
  "key10": "C5PJymJupZEu4BoquHgDdRGsm2TvaVVV6RDTfb5kzKrSrq6YgN6eEKbB7Ac1tCGNh5vnEmtgji2KtpDsmDjKQ1S",
  "key11": "5vTa42fFsLkjBZCzQxvYKTq8wzQB5pQCrLjusiUyZyxht2aKWb1ekuZM3DvsJ5r7DVA7UCxKi5QF31SByoaHcUxV",
  "key12": "PBg3hRweVuarTHRKzVkBcRHJAEiHL825PkcsqLNLK28HnGyUwNijWBYTokA3Tu8rKQ78jAhaNod3usCGpvZasqx",
  "key13": "29dDWPsBfiFQfhrhckDVHTHZzjyuG8iMek4G12g6D6dxfSZx8GvjRPnhnFvj3kMouRwLeEh5QKwZ5ksTpSrrmZKB",
  "key14": "oLVmLr9rozJ2aLovHUYQj4ugk8tCMYtSbgRs6tMQEmWtGVA9toLTzXjquTypNeVELzRMbzJrCm9KEuPR8Nz6MAM",
  "key15": "48BqeeX8cVMz4X2s9rJCaNRWPNMzqwSrLLruntnxdmcaT38rZoxNHkKSe9jpDYZhivAAiDudgQpiD2pHbeYhDcwa",
  "key16": "5NM7dizzQJCgDt6f9gJ8QmDu86QyxeP9n7QoRLTYw1Nw3n6yHEEBbyTjyJpHHeTmm6KJEZ24dC9wg6Qz8tZShq9d",
  "key17": "3skhwa9TfPBeab9qsUbEnQ7quAW9geJmBmqSxNPPqf6oKSh3ZVkfsgHLrJ8nXv3FwBrmWqHzSzJSgKDRh3vaqshq",
  "key18": "3nzmXiFpkPNcd3iAnooX87Q6paHSG4wQS4dkcBX9kg9djvwid8PWYUnFSNSFZKgTB4bnpho2oxHbHqQNRNSyygci",
  "key19": "L2v1ufjTGJhxuEcyxHA3E4EM16DGibWaLByRcHZWnpzinL5VC4haTBZQH8gaX51zvEcL8Rh8wfeEFLNsTYaNfr2",
  "key20": "2KBQqod6k7ufti8NRVn9DCoMXsckkZu9D92CVaZWMShKAio3bDFhzZpqtCtmX71pihdbcVHc7Reh6oUrAfyYuWXB",
  "key21": "Ni59PhUiWvqKdE4t4HWywJw9jhMozzbNPEYUTRfzGfsHsy7bp7Ye5L8vM9muv5xu6wEFM1qKAmSxVg65oikYNyR",
  "key22": "4hhd6AqmCQqh32eCZae5XYw5j83Jw6xWTPrFCzVxVReTyjd7mBQpv3K4mZDpiWf4bELLEpxwPP1zp96jsc617hVR",
  "key23": "2BoVk5HbMxRDE6FSLfqU83W8H3HobnoDAqwcNHzzMKpuF94KGavBv4MZ7fpALN6QWs12ZqrJE11QKBX4Vu7GofSe",
  "key24": "64GhTD4D5bc28gpRMiHkcmJAz8YB5eg2xwp8ua12tAqGQUqmo2y3KPHnt1ecdzTHbibY8sXWNhx8dZ1KNnrw5TMP",
  "key25": "55bhBniKb4BRDywdRjdKfpY2QQ5HzhtNC5WusdMsruTz4mu6KJWKE7FvQRouQ5TtFWD7j2KVce7YuoRJiL4FYgxp",
  "key26": "3rSAzSfsR5dmWaAme7MqP5RB69PukeA56CTVowwmfymgVwWkm51rctLYXHaWGddQyqbNXCK1u5Vec6dC1DtKRfkm",
  "key27": "2tSWG6KELVubFGxe9kzNecjfekpnVGukCHfW9WrBAp8BHQMpyvKAdfufvefCnB8xhDrypvWLiAFt5YBdypB4i5S3",
  "key28": "4k2iwmNK7M54XcmPo9EeEqZ865yhyoZ2dWM7LUjxcqWXY9xB9QmgKTfJgwsD84ANsUatTggsjjDAZYbQrsCegXJA",
  "key29": "3cJK7mATB5wyxETPYiCsaZSfHVHxd5hWhaZCmjMoTLEqLWBa12pTU3Fppf1QsjvJco9zmf6gqxTtBToc55cocdmZ",
  "key30": "34kGHuN3wqxjoxYgqjY5By7SVDPRPdJfCwqqNzi4b1MWTbhhB6MZm4yEZPYEUqW1dj3rQNjWkm2Dj4QGcmUFb6RP",
  "key31": "4uyaQF212wszGQaU9vRkoNPo89f3tH7hZkiv8SDxBcGCRMoXj2zCRxGzwj8MMngRYhGGCvCRQZBAFPsve6Tyjgez",
  "key32": "2LnCZXzESviPkHF6yrfxSvxKeZvf6dRyLTNz5HKoDGrUSd7HboQkvfWYD2tdu1fqaQm3Lm1L5u5R4GQREYDWTopc",
  "key33": "1Nb3SkcH3EP6RafL4QZRLNY7MvS88RLYK7CoXkQDobZLVxneDHQoVvpNTkjQhHqAVFmQiuc9xkJebRfyWG9rsdB",
  "key34": "2uAMRdkimHEKCervgpxvvqs81J87jfveJVvfY8AqVmEXwRF3JLu7sp3pSUZyNjiyZLEpDCRD9F3Snbq3yveEaXPc",
  "key35": "462ERDiB59yujYL1NQJkiRZy4aCame82rEZ4gSGCQW1oeSDqzwRjw7PgNLqoDbTKZhTtUctcMasNVPUsc77ujECC",
  "key36": "FM3Y1xZYFCPeHrpvA6YrYUjf8wKWnrcqnPyeXyxwFo3G6XP6tjqLkTfnsTFNTGKkJDNbyw93Tt4CQtvNcSRTnTZ",
  "key37": "2S9KUowVenfmNzzQSaukQ3FQhKjEhAQ5YLMJcTy7htxSAioF6a1niZTeBymrXrJTZMH7GTiLNZAceqKy27wngSuD",
  "key38": "xkUVJ61hX9YHuu3Kv25att4bBSvWjkHmrdwL5qRWz5uSV9xkr5f6hbUTbptX6Cuac3mZ5DfagxyF6hpsHrQHq39",
  "key39": "5Zitpc3rHdhieC9ADpxD6vZZkTfntyXjp1v8Nk3ANmEiSB4FLii548YAm6zJSvMfsKDYaUqg9bpcn6TSz2F3TYTB",
  "key40": "1LgW4GWefMeoqys5em3jiihhaAqN7ziNC5uUXaZjd8LBPw81CAJKpU6GCGGaro9N2oGCEmvnhWTpfXcJ2dDeYWc",
  "key41": "3wFjQY75b6TeLq76E9qi3GEpUN8XgcasGCN431tzLzZxbmWsr3apzWQAeWhMWLYyDMkYWjz5bqshxirug7XYUvbA"
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
