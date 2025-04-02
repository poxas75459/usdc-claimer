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
    "2c4rSEYv6wGsnWwhE3WNYaESCXcUZgZ8KCjPdXYGq6E517eZSqaC8jzvJaCUy7YRL4b9cUYt7nF2THuqSJM5tdkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v6xzKz78agzc4UNjmrhSWvenzRMB3Vp6bgQayvL9fsa12uF1r9qw5sxkj4emMozXujizGLC6GRzU4mArUEXa414",
  "key1": "4cTFvh9RAj1hS4Xoksvdac9hLC1nPZPZcUDMSpLrCmDfYkneUu1V2tEPR24qcVAinHWAurDtURebbWEfnsdRzUW6",
  "key2": "5AWAu42x35VQJ5RmKJtoqwZQtPbUX8XH6Y8qFFX1mWUBfsMHcAbwskkmXck96J1cXegES3ugsHqtXEUWESMgHM96",
  "key3": "CzSnyZ6tBCRvtyFnB8c1xycSNz3YSk23aporrUsaWoWgaV4W4PrtAixrQrSdzoKi64KB2MX2wi4WHN2VJX8pUqN",
  "key4": "5ffDJ6jV3Dn6CmEurMEGEyKgQrpUVK8YSkJLhLCL7NirkiBZ8g9gT8REzQVegWWwVh3zewjFsJzpppxjwkZR6MAx",
  "key5": "nFzrHh5sszRvf2YHew7Nb1DTmvWVXxq1VQvnZcaApqfVWAhCe3VGhFqFPRqUsR7s8AQ5shMEMKWJDaMhQ8A8b6S",
  "key6": "4SF3LVUV2rvsr7DXtFZMo4HCaCSZrTEvFE9mw7rBFVEsft4974nuqbafzV3gck6dcLYKczQGWeuum2aFzamnKNoC",
  "key7": "ypDQiieFm8kN89RvfAAZZPuWBSkWsAVu3jLcgcc1phoeXViQnt69ppGPJYMh7Tq1bMS5xFgX7QYtdp6hSfSyorG",
  "key8": "2kHZze4L31XY3Cb76EBKqK4m9WeeTguxcxy32NuMLrjskxQ3H6AJ4qnw8cNSxPn73d8SKtNzWHNPqufLr7EJVVqh",
  "key9": "4e4YrDH5ZC3UyWUPfn5KPidLcLwM9PxjrvbwUt1S93z6yUjp5xZ2iBh1wyncQFnj8GoGEiihuKo5QqiYwaow2zWX",
  "key10": "4nDYznXd9HRtbU7Jd5sdQ9ZtWeYRfvAmYH5bQ54MmEvW9SUAn9TRwXZgJ8p3ZGrFyvUibMbavt1gjAU2jZ9fmMmc",
  "key11": "27PAHxNJ2jyE1Qhp8hvPxnRPF5xvWpuNaPpLomb9CWcN4qem9LsyyKWqzadbu1RuBw2E1dkEDDpPWyj1JFWZnNen",
  "key12": "2cNU9D41oSPsfu3oHbhmf2LxnM6iNw1divpFrexd8kNqbfijxh4Mdu2n3Qb1VCXbt3gp1pNyiXvJQRFx8xTP87t",
  "key13": "27MMfBuMFJkf6fQDJpz6KySCQ49GnGrPwQpTvPoUXM8H9cEGfrULPQAF5C5j9c8hxNwbKez2J4JseTaNZjFnhCiN",
  "key14": "sShfT3PzBziMg3KZacUBUFj1tQXY8M1gBS6LfxveRs5u69m2CR9tfajTmtApbMYcUXwyL3uZ1E4MTJhUjV6xxTt",
  "key15": "2j1cCAMKVTFKg7mF1gzYGZT9uS6hcV1JPVkLdd1Re63GzNZeYUwQaWwYZnYF7MuACTfgXoWqixrsTQ6S3q8exVMr",
  "key16": "2KKMjNbHyitZsvBJ3JV57K71mDSfxGW3dfiGf74K3FxhcL8Zvw4A7btVrPJLt2PDvGdjewKgVTZsgR8WTovhnLHx",
  "key17": "3xY7sabuE49YXkcRwhraHsVYYB7v3dYRSoLVupPYRmyHoBKwsUNPJuN54fP1gHjpb8gEpyxsxRZNhdNzU6G6g5Nw",
  "key18": "2AZZ2JHdKqgivTAE2m6caef9t7XYk2x5Vgu3WnQF85RBiu1V8oFG8Wyh1i9fUJ8n8eMgrZrhBdDRPWgQnFydjPCa",
  "key19": "4Z8tbmAbLwgTSUDLXTnbLZRiTojpFNhqkdB2hFmE2MRgU9FbyCuwPkGsXvckCQsCCAjLZ7bNq57ny8WE7sWW3YNM",
  "key20": "3vioCrcC89kiEF5CGX9Dz3cTQiyJL1auy2Rc6mpeEkiZ7oGtpVQNqLou82xmSmZ5iJXYsAMciBYr96B7WYQLbXg1",
  "key21": "43pavCVS2qnNFo3B1hWoqy9qEdcZTApCsJR75CY82jLuYo3ZddC3W3xxUf2PeeVkhzxm9pBJiV12rQWxKcFvs4Ja",
  "key22": "4ezjvcLNiNomHvJmgncPyM3XakGcE2YPvYiWpcnReqY2REDMXsUkcyyohscaAYEtgomBj28wJwkezEZuzrViiMbo",
  "key23": "5QVRgb2EhejsnZxQk6MaYiZtR4KVSQYjQ1aZoPLEuCsj4BpCoiZF9wa7kq3SQQUSDUhAYqMnFcBzXLgqcseJrNiF",
  "key24": "5HFm5SkVQUukm8TQ8Ng2TnqTAFcuqYSCy3j3jginX5QUqmms3amBbaiu41UCLQUioYTctFwuadD4gNveUxgtGTaq",
  "key25": "46qAU8uhEBkp69NKx2WU4g5ALyT32rS5van6K2ooiorDiUJ97BkgTJKRemCC9HHPbmNM1CKXVFM7Quf1uQ7KBh8p",
  "key26": "4msjiWZqJwmmzesCywzuvef8fYn1yj3mpeATtDe4cgaXz9wv7R7a2dBkP4eJKcMW25ReYBq2TJ6Tibaxn21398wY",
  "key27": "4fLnBygi6UtkzQEuYeLGPzBCBXP9YqkaNTh2NJ85NMHx3krhhWWzZNZf1Tfout3NwoZMieMySBLwAcVVbV2JX1wb",
  "key28": "3Jm8LjCGAkFFBtX7v4U1TKuawyyrXFX41hLBVqJb8P2b5ioeVjdY7Khb5dX4F8qhEFzqzraiLLw9eJFXfSDxfk9q",
  "key29": "L9EU1QXEF2bYq1hTKSJwBRy1US9WwwhbYkZ3Dc4Zn3SiagwMjmSgow8M7D6FdmiN1vFqns3Tooo1jNzBVh5wzcf",
  "key30": "58Lwsc4zk9sfduvzNACRfcsoJKZnW8Zd6PyJEV8BiCspVWn5oaUFFZFVEivxxtW3LkcULbbNooC1ng1ia7XYXNk9",
  "key31": "4SirMnXyjnofZFyhe1Nm36hQrxHpkLzgdHH6xLQv1CSjgTGS54rydsj5XThrAR5kfkjQtDbu42hGyxFZ8gvJrmjr",
  "key32": "2muYcfTHM8T3VTNmrjppr7QAbT2ZbsX9NfiFuVmmj7bDJ5PsRtSpjVtXPzBjGPaMJxwWszdXMUN2nxtBpcas7QAm",
  "key33": "5Fyu4gNtREz7ozoCHjPeUZiawWBbyDGFMc1kofX8LYTCeAcGjfdxE82fMysZGhaikkLPCQJcnkx8FakQTXgHPRCT",
  "key34": "3KXj15XSGm6X9pvgcoAX2sfhrxsiownfxFveY6zVY7WsL5E4SL5oaGxKB6pQDWKp67r6eAHBTofLnj4Zgc5USRAS",
  "key35": "2iYrF3rZuPmtEoCpxTbCaKUkaJdgC6UCPZ1ikQ2mvrPjCgFrTUax7tK3rdHsHqiPBSvDkB9Uf4DR93NxQsxRmUPU",
  "key36": "3j6KqZM1rqCRTyTup1vuJojMVfLaazQ5wjYTE9SbK75raMNwtfJ4QQ2Mw4Pa3HjY2TmMsgaHn5k6qpFLbq2FFdVx",
  "key37": "67KytWurY8ogMPjhYEu7fmugnTY4kJzzb1qcKUWox2fJTnJ3zRgPwG46p2TF4uCcxkhc2Sm75mFy86t7G8zbEK7o",
  "key38": "3UpFYzYiHJymm3WgQWV3uGdmkKHmJyh7QZMu8toxWk5CaKhtpXqTxJDHXVjDYod2srSfW1m6qJLHNQ39UVYoKHu6",
  "key39": "L6gBiAup9FbmBqHLKdXo66huQHASimh7FESCCj6jT8TRC1Vw9kRuJtBuE6sdvrmSqNgGyPg8kxar8HVjTk4NWjr",
  "key40": "3NmUAYQFvh3GtVLz9VucdiuBE3orjhAqMK8uYvukE2tze3FzJepvRz68mH5W1HepWamXdb85FYL1wV62X9Ya43yp",
  "key41": "5ASYeLNCE5J67JHzgms6kcNouiZ7LPE7XgAsMajCWMAYexozUKDgY5AT2cg1reqbZgQgLfgnbwekDbJfhpCV1Nj1",
  "key42": "5MQs8oMarkz52LLtrWSeNqRiiJh1WurvoXhDRKED8bp8XwDJJsvGYMBEfRi7ukXV5ese8M3RjW6x55d1jo8j3ZpH",
  "key43": "3tQswru3LTi2zpEhLcbbZYc6G8kZrJpkT8poDGexZAFabgBfRrvZEJF41mKknqkd2TQuyCsnHfYmMBB8um7ufdh",
  "key44": "5Eq3bwcXJEc8SCVAhT2aM4a2rnziRd3ygFfXt75yRDn8RjfGF4qDuuYzzmx7dSdzByDG8kggyxtQTh59B4514Xm",
  "key45": "5orCLrYhUoXVQRh34SmX3jgiDxoxBSCwd2TUh6xrFqDuKgS1JnEzJhQjdpLw8Pundy45euLL7pk2eAZbtYfgWJaV",
  "key46": "32Hd5ugjcRfZAEsQLSNVFxGCHmhR1ggnL7BoKfyy3z885np2Wj7JGugb9P7pwvWQgLnDruFqUidKJ5ftPaRETqYY",
  "key47": "4vhTySNVqZm6XPKQumqSU7mCa9GWjC2KzXR59QFvQEMjg37S1T29DmX7KLW5iZKon58WTv61x1tcWWuH4dzMJ4cF",
  "key48": "3qHhaV22vBM7SNgLPbHm4L7bqzpu7KXotFzrLGTc2QDz7P4cPNcJZmpELEBhTgzJYnRc6AARJdaTJ2VBvgKwddhd"
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
