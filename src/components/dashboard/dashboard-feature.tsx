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
    "3VeJf6zP7q7PYtUNGEd3g2uGhb85iFmXExqraFwYRopCrGH6acJmVKeu1DZ3aHiLPDH3F3PHWqnKnbSUagrJkMeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b9wbHpPdyEfEno3DjS4t6X1ZKMjbRmbUSi59AwzZubUZSxqrKbEpBi4MEyPikkqCGfbAjKRg7pEpJV3tydh9XLE",
  "key1": "2rQoAk6L98hkd847QwVS3JU9FCwbY5RL6m1X8ogvvXEZGNsscHG3xzqCDcVnfVALd5ZVM7bhAfGxjTNV1WZPAvzs",
  "key2": "5mPA7CfSSGPc3TNrYx6rWx7y4Sk4SmBMbA9CDtUzqt16kwZwRCeUzPcRxjCkanV5ap5Ve2TFXVJp6fiXJasCfCKi",
  "key3": "5utGqC2TZ2jGHYtcEezueQ5zEFveq6NhU8Tt3iDSSynVk3DJ75yXPr3WKzeZhaNoR6pdSXJyJrc6Ts29CYanycuh",
  "key4": "4of7T9HcP78RE3qd57nnLkZiVxWZ2ZGZ2Do6VVqRiP29NzeuLVq49eLJf7Zf3Rw5aPFv6RiY1ptavBcFictXtbuq",
  "key5": "aonzbgNfcUH6YPZonxcduvuLS429pyNpQBN8rTwXJRC3i6uzZov5WupE5sdYDP31Yc3ZecHDVMP7hpvwFEnP8cn",
  "key6": "5KE94hwfvQmZpEUARpY19bkAtrPugR2MLCXHtdZ5bA385wGqHhUEzXeHnaHhg1fdczEZzDrD6K8HMVjrH3xoi1oG",
  "key7": "5RAoH5BZyB4aVmZintrYKoUj9v75dGdUr9fbFELxBvyZsJwTCN7jNrB7ixG21kBTjaWphPGvHCLvKmPCVDThFbp4",
  "key8": "2sxUs7wJYaUzPttZxwnqCqDAY6io932Siv4pDES41mFmd4vV295RmFak29i2rXpj9qn1WCmut6EWfKYoPygfSERd",
  "key9": "2jvT2FwPXvgYZKHS3ep3HiUo4wjp9emHGXizTeyzvShKXhPboGrwqRNMtBEHiHdUuuun4Rtu787j9AK3e9FoSdQB",
  "key10": "3wjqusZg5du4tDehmf1LbQ3ecybdJSn7TsL9sEj7nf6KNF3wTK1FGEUEqSkd7v6wjGybmJhuNqmFTd5BpVFvbM8z",
  "key11": "4DDx9fCnGGABZz3E18oiugg5aJLAL7fZFwRo1SrEeyQ7wxyaES5628mMdvUgV7Nex8eUuMegextKEy2DghnpGwbR",
  "key12": "3kqHUK3kQ1oA4K9dh9uEuX2CJifqN8Jwm12xmHLk61fuwtzd4QLx99wrGXvHwsTV62UZFP2rWuaCohX8idiy8eH4",
  "key13": "3nwWdm7sKT6heCEefeeetEs79cm334Br1A8Vge53rNcuGDT4q7QrWTVG7wyR1NAf7KR2Yg3NnnYMm5663CVibirE",
  "key14": "4N6htf9beoxR3ZmgWRWfyh1R8a3uHAqH6KbR9qM3ysMGNRbjuzh8Si6xiQWVmNc4bBkERp4WDibqM7ygT4AyRtSy",
  "key15": "4WV4BPqdXC2c3KghsJ4Q6PpF14bfa1K4wqvfXkZGZh782U5vMeVYhP7BSZyqsojA1557KTuVtdMn6BX951PRFc2h",
  "key16": "5UsLxDzgK1yr2rZQG9hMDAaEMByYkvtnta7uvjdSNGp78z7wuZK7YCrMqGxjAz5Y77bb6BpirNF3bjPCC1h9kTcr",
  "key17": "33tD2bipKfjdhsq7JCCnFVNFWG5BqCXF9nkf5rRs1jk6ANcFMyUQbrZ9HsNkLZcZicgu2JQVRvASxKqXqZss84mb",
  "key18": "4eJWL5kJ8UNiMwa88vMqnPLaV4hW1NGyNey64Ga89nt4am6U7U5yup4Qq69ReR294yngKHBiDKsnWTh8J7cCj9Ee",
  "key19": "4SiY924RvtmVm2LZy1rcB926aN6vWYZREvBURBFRqsbGs22zhqLA4n9o1U8sUBUaPuUn4U6JntVW5UYgJ1b5uP5h",
  "key20": "4asRKtQBRaSVfVEKUC9yCMnWaBQUuiVaETC93jy5nghca4PEZ8z5iSoMZZEHUPksr1LQW1VMTN26GXVYLVT7GAno",
  "key21": "XQincB7su2b3VsVocrDK4LnvbFpecw6SdesQPRAtj1XuhZVi8asFBFh9SAgKJCsGFxV6t1bhu2m414K7KEaYvVE",
  "key22": "ijNgqKVYSxME917tD4r7pJWzY56GRuBeJXzk2ZHn5b3ogPkdu6GadneHZGMCx76o5vAUzfhnmGHTH8RH3PgB5Ku",
  "key23": "25yMPsD7VBkzck3Bd2CdHvhRx3K2mvphF1egCdeuFJKKzSzN5dcReEHkMnWEHUQwBYCZb5sQRu7W4nAgCzu1Hyjo",
  "key24": "57QfR4yGfdtcJXUpLwnCaEjG8p5VWcpZUqrNDH7xWYttVDUmurNJPSLwXm23jAwmnZTcTMFwvARgHsMBKPUzc4Ug",
  "key25": "5FZ6x5cw4jxYmQqXXcH5JaFtcCzj5z7AvNjToSKEQ4BLyL5EcpFr8ZJvyiAb8g8BZiLzKDXDaiXwCoy2fGRB7fbn",
  "key26": "4ZpvrZRkCgZJ4MjfSHXMEnimVukxazTqLQzTTcDBadfcGUgJ5rtHrYMt9UbMYtLwJsXz2w8SwT198JRnZyLfkDqP",
  "key27": "5aBKSX6KfhdDL7DBgZHyHHWUQWnnnfY3F1LDdBkaF8VMtSainNxPBbYSYLc9cA2kVmhKTz2xzqWHXK51g1fdcBH8",
  "key28": "5tSkWTZZ4wMQpv9vQHAXciyeyqsaMv8y3ifGMbUqx3DuhozbVQMwbJ4KafJHErMiz8rBxd3o7Hd5mJ1hWZhLAubb",
  "key29": "2fWBRoifkDcqsbeNmPFWk7XwJdkozeyGTMorUJKJRqhzaW54ieujxx4TdPfdfj7zq9J4qUa8Dsp9P3vXQVEny5Ms",
  "key30": "5NHecE2FLV55QcDbtE3MaG8tzyAwkf4Wk2BN9HNQfNYbuEXyEp2vPedBCKXMxx5f4q6CgyRRGqsk1uf3JZqpDkuo",
  "key31": "2gCcVgAivDitjXjaUn51jhebANr9WZnt7wLJwE4k4v2wmcg7sVR9crsqDFsbswrYTxrQEtJdHW7BW6DPGoyzeBsu",
  "key32": "5eXxRJsAX6onuatFoYiARhYLJQKzGwyJ73Nnf8kerdDkVdVwCtbV6sTisVESMLegJXy5tXzvKPt5v1tmmzSUBPEi",
  "key33": "29ZyoUtzEMqLVFfaJvKi3UYmp4vjFUvzpkdnt7uY3w58uWtfqsgzR5AxnqeghgiYNWYZnet9fd6T9TM67LxD6P4f",
  "key34": "5x8kLD46VrwwFJ2MqrHwao6HxHED6eScwnVm2qiX1FbBSwRgBEyvgVEedN8Rz3ZyRnbDGarCuYgDAFuZacyNZs1t",
  "key35": "4cnoRcsC9WVnyEi5xCDuCK78QvjCNuuEfk9ofHiY1GsmzVQdUSiq6ufKvJhhyHbWgYzrDQhJpMtNiotrtG5gcTXT",
  "key36": "4mW7Ky2kJP1p8Par3sswgM8tQeh9Sz9t9QUYFzMsnGF4bk1BWmrsYuNA1qHSeVGUwgKz2rSCBUMp57S8pfTaF3fx",
  "key37": "TR6AXpZQWjuQZbNQUrViPSTmQzSErbuWXnVGFPD7EjG94daz2iJEACAcpnxbkrpWWSJx5YJZ6sS2r3dVa8QHC9b",
  "key38": "2YYQX2zDrwqdruYirCtBu17HHMvb8LqYndkQmJVNxTNXuPsKZSrs6Tej6k3xNyJPAN4WY4fPjVeuTzsh2ArDsE7w",
  "key39": "3Zqfv9nZebftqD6aunk3BkrAKTvpVY5ACfZJ96o9QFeVDwzxt1Rv7NbtWp6DMzUYhMQcBFVxuzboUBWhTb64awMw",
  "key40": "2AW9ht4hfJKuNeeeaMtpkxrozcj67SfNbdvuQdeYRJYwHwdz8FCLwkQNYEBJkGRd6YsmD6ngFyKHpfJGP6tjUVKp",
  "key41": "2yQ7StkvGDttwqDswakgJa2eu8Gab3DCWb7Yz6Rff5w2rYRVnwdEFkWR9oAq3Y3h9PiRuouv1QFpEWNDwFPrUf2X",
  "key42": "2piXafJAVFTa2RTUvGEx81Gj99uFSW9rmWmHBKydoWEZyDuUi513psV4iHCyzBTD9n1iEXKPAHGnZpvV9BeLptq4",
  "key43": "5kqBrtyHKBMmJ7riw17rHQtHQewvmHGqnJcXjVzSUjUKZygrj71VnnUL1qi4MAzJdF82ggjzzLquXYvfdB7WPxkh",
  "key44": "46qSxS9ic2vCJagd6qtvcZt7ivspXw7rGAuBCbEwevwoAYyxepooixLdabZBX7inA4qrU2ovg7i9MJMNu2dyTKdG",
  "key45": "4ckm7aNJhXKWdVPKFdVJM34rp8x7uU25PhXDn65j8LGhXSH5oLV8LAvffE14B2TbaQJR6Qa7VmAZbbkMBZhJNw3A",
  "key46": "oXvZwdYizMpSspv5K92goFQZUJqz8MVBukXErqRULtzkuQwaeRrLf5V7JxxKofkF3sAp2xDJJTnSh1nT5sC8yJ1",
  "key47": "5fruiwJ6CgPUzihSJAHKZPr5xVRtUxtY6SprdQ8NurQVfyeyb7g1Q2oupGyDnGq2gEwvHD4rokFXyaAzBV7d68xo",
  "key48": "2nmrBZc8CSw8hQyU4PHwLa6LfSvpa9gbURe3q3nikrmFHz9hojXSZDs9QGoypWAkGJ53j7C4Ynm1n41C8JtbwJ7C",
  "key49": "47MMmPavSAYGuDDCJ6e7RpcZZCME2E9ubpnTkjKqHyt2zBKzapueatLfAFedQboyoR8JpDQ5tWo1dGGB8i99R8ot"
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
