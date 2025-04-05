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
    "2UMG6szsFqsNrqVYz3nhQxVVeJjEjyvaGrNSyi7HzrZHsuFoAMSmVXe93PUU27WT2XdHYpHHa44Z8xiphinP15pr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dt9xewykb6bqF1UpfpsocdueJd5zup49GWxq7rcUMoieySBnGozRW68KLCqXCa6vSiPVjwfoZNFG85rc1YbZ6iH",
  "key1": "2EpEyBCWoXW7FgigYaJ7N3ziKSt5Rqxt5iRTj6ZoMCemPUxidWzfqYixhx9BA9JAjShaD8BR9dxaro1Pn4JrPnG9",
  "key2": "5Lfm2YDPKtbrqpcj4JmPCuMAQeDBR7VcvF8kij7y4WkmLQRcsHckrXmiXXvpcoWYJmiP9Q9ViCPHdHpQxxKdGrbg",
  "key3": "2QNibyQ67pTSKzzivHFDktrnySHpZfHLdZxu2seXj6GQyrbmcbcbcqNM88J8XL1KtTVvgQUFJw9B1kRjHzFyBEqP",
  "key4": "4bCxBGhQqynCFwpBwzPXR3dH1v9mVrsiV3KQLH2nZbw2KoXAzhcRL7vRUmKqHKaua4EuCMPk8oBb9VLi4Yk3UHkP",
  "key5": "4op8zNbHvgVYwrRtyUHTkRBGT2CbLL4HkGM96agNjfwfF1EMp7F1hh9iXAR3T4pG4ypYN8L9aSXvm8FkKmPQtnpw",
  "key6": "31kXnYrkgQdWN1tfCfRLpx7HPtfsA9KjuE9pj8VitYViQeqgnDoy5pGGHPxBU53T8gDh964n6sjxfnNXH65gp1XE",
  "key7": "5dmeuydiPXTNgmkQYexhZrEV7SEeEHUgVx2XxZTcFWpdJ8mTX7KFP2Lvztykn2PNTbpYLRpb8TiCU5meSusW3RN4",
  "key8": "5x1FUWMAcS7Z2965RFnsDaSo3fiwkxSk4hV7FJUMnoqfxbFEG7Jxohw1twdn2hR88G6oMrLydArhJ7fJfXeGuYta",
  "key9": "4QzQeCVw4FYnWzaHbHeuEDE1k5p2vZxyeGAieDYVUJVcezdJrngbpuhg5rPhyPcLRZ59MvnHb51R2iNKx7tFtKqY",
  "key10": "5DqKfSJE9bZJ5xVHezkLu1oSVh9sBNXPiLM4yc9qtqRMSSUcMRt1XpoErg6mjLV4pnQgyUBXaSn4GgSmXuz7N9QL",
  "key11": "yRanV1zi7Af8Dib7njHFnXn5Gv8kLeXqFo4SbSDtozyvRPgaDRxfuazC6Nvf8M1hEnaqrYjSpKjK4KyRNvpsmA2",
  "key12": "4oj8z9NfFwkHJwgqPCVFHUDGcxv3kCKkSuGGgsBKwiYoyoeCj45VNN19abVccEbN58AjQnkDYr9nb1prWTvrZVMB",
  "key13": "xBjVgx68WSeLVu2oxpzWYyP6k31UDwDRyr6rNyhkVnWWoCQ229WF9HmWKyj9EhGeBTMUA5n9CFkW4VDNJ4V97GU",
  "key14": "WucrhxNzYVPnP7qY666PyqCZuJZcBPkiboqriiSwtMJbHxqMXc9D15qsox6Jm5rJS8HQMx8pX3e2ECuruG467TV",
  "key15": "3U6LNpT3byckuf2xHovjNdYeDBcU1ktTdz5VsEgW4FGMV9MW87d7DvGSJjtBrtDW2Azxzjxymq3VEwYF7SpQdDdC",
  "key16": "3Fva3PTscQAkLZSP3wiZQn1Zn6tek8dgeZ3qQwSqPvAJtKenYecDQ7zNvfxH9fyH287e8qL4H5NjqMH5uHVK1ygR",
  "key17": "3kD16iJQ5GRjMUQnn1CpBwMrTF9ewrVp1T8ezxQeqXGU2z8HceHQ6WZowScT5f2KSVcUw7gUXPSRJ2HDbDvV4N9y",
  "key18": "3z61TkeSKm8FxXxuywReeNEQiUEiCrFtjPfWQ8fGN7sznBckUWESJGfynrkuu7WcUatDoZR1FVvrUqzcC39WKaqh",
  "key19": "4nTDvMHbvJodPFoogVLhA5V5CD2A6G6HrL1DL8PDY7JSMELYF3uj5NLDRePAf5SEXXetBhxEZBUNW76Ca74pGd1m",
  "key20": "3dFbMApFXPvQatATRPP8bTZNzet2BUKVu1oVtZx755V3Yb3KJ8jpCiEGYfVMzcB9eGbci1jbrE4pssDmKZbWqnu4",
  "key21": "2nU5onAWgk1RztvUvSzJxiax3EFmN2K7qSqFFevKA2LVeErG5H1AFigEk6mas973iswZCHf1UpYgqVPu3sFxa8Kc",
  "key22": "45B69foYZ8TEmQkLn4UvWpmVMLjjMnDSzF9fupHWeSNYRwaeHiNHALkWtf9bS8ki2HQ2DyJV9hh5BZaTU1cy2sg5",
  "key23": "4rfLweK988jhDk5ovyyi7feJPo7pLdxKenAyvHaynUqaEeEojwymrKhaWKpVt1XsKUeCTdKXhw1FAC8kTuteVD2b",
  "key24": "5a3NxofLcJh2kKtUFeurwP7dKyTyzTLiGnChcDD2wf7dVMJxwvFs36A9gCbXQkS6rMXvb7agCBgWXQJRKGtWSC86",
  "key25": "2Acj1SLmPKXTP49YhkNFVKcgupT8qQtUySQDqEgsxkNteNqvNMTDtMPPcBMiNGofou9vgSe8bYfwdykJ4m2dvpP4",
  "key26": "5F86GPtxmUtcxCrycEXuKi6V5Yxq6brpQkX2jsBAkLEi3kLspEvzWpehVuan8ru3JSgnjqLBEHVe3q7dRcWeDZwF",
  "key27": "rRz1PNRxECXYi6rRYYsJQQRzUHsnCsTFsM8DGxvs9gRLUiHZzzwrGrvGAfZiuEMjkNMiDnLcSZhNASy3a2hekct",
  "key28": "4yJPcvBvHmnJqmGDmcgGGyCJM28XtAKfUknyVZM9KiNDbEcrmZzTk24bTFFKvXY9uNUqFYKFaA4is6nNVhnrTzG2",
  "key29": "2Fsz4zEB5WfNLYgA6TG21GNqNSBw6VXVxw7r8d6xredkmSAXe4QR4kR5K33TrpTernXsBWEVadBPSr9t6J8DBqNW",
  "key30": "5aMsjBHLV32kXKBS3CrajyrfsBr5NB4EzrLdDuVgiLNA4AxyoQx7VQmyWcdTyRDh4ctTX45Dw6CyFLxCkNw4MjBc",
  "key31": "4b8tPbceTkpApLkUXgVQstEsaoaouiJwTg1HARzX26P38JkGzbkUX4k4JxtFv3xrM94qR5xgHCCFRQotsYDVBSqv",
  "key32": "2NpUX27jr1wFRB4BrP17Epc6yBsgiUu9hsN4DsvapvNUZ9UeHqKBfiN3iyRVbEtt3Fr9Jwqrw6TcGj8KWB1kFn1H",
  "key33": "46Q9A2tA6mgfvHuxEgrMnXApGWJGYmLMELpomm8QjtK5L87vUwVKaDMQbYMqQUac3WtVYJ1SPmTeYMnbetq6vzgj",
  "key34": "3hSqDgcCcL8c7SnkPRjcdT82EBCC1KLRknkW5Xh4ABuVAHxLtWAkAaKe8F6MzRADxveCUtetFGvHqER5zTPrHw9G",
  "key35": "3jPrA6Jvme96knmq4bz2xvSf5WRmtuMiJJE54FWzeS5waEoJVqhUHGX5NeCG4bHDnrzaAvF6NEYMDKWnoPhAzPAS",
  "key36": "5BVqtNabG4Fq23RvjZYtfdoB6bFEeEhJCZ7SFtELK8cn2hCUGR2ZBJi8VBnzn5bE3r8euYkuJMWrCWX9aqLtmTd5",
  "key37": "59Vqt42EVNc93JcN1ud4kHELkjs4wkp7yuYF5cGEBUAuLkTJzB97Rc6TbKWxyzR6RTtN9ihBspBSs5Vty4yu4M1n",
  "key38": "4qUiFf6yxFpokEi2teiEK5TLWgAZNHCWdMDADjixP26xdiKc5hHBfyV5F2aPz82uKdqq1LXAzSRZSSHm5Ga7Bdxs",
  "key39": "2UqSoKFZTkcG2L2m8eUJ4xwFKERD9MHQ3TFqXmtedb7m5b9mbH6Ty29UTtTqBeUbakCpCfHnt4jf1v8LsgeCVpbX",
  "key40": "4PvZ2eSsxz2KdG7PJbS49rFQvjBc1HfjGzd4RUVNvB6BPKkh9VxgbbSDKu7R6bxcyiL6D3f4TfXqUrj6qvcVn1JQ",
  "key41": "2BRbHwf6tNuKhQLEbBHYWbU1TqJDvxwAu5mp7G34ue1ZtEuLHCTCipaQN2j5ETZ5sT2Wj9sRsb8jAkjdU5tvLiLm",
  "key42": "3hty4Z8A1SsmNgWyniVGmU1txB3o89vmd7kfibMdmmvHi7RDtDRcKJs1JxvLLFoUViPFNWRgtK5syQV2ZWgSwfm2",
  "key43": "42RJLTZ11DCDCQLev9qbJ8RrSDfjJ2SGtNCsbGDn5TXH25Aubugug6Pm9q1rMYH76192owfEwr1zjcAs1YwbFEKn",
  "key44": "5FZaUT41bo7Q3uXRf9HQ8hCw45Mp7mcgXThKjzA1uV63zbSxcbWs4isuFhDhzqtw34QSoZfQf6TBN8QmhBC2WN4t"
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
