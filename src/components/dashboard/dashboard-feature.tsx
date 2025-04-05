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
    "2F7Qdg5yjBFGqGX4ydKAE5x3aAs6PdG2JZi4YueDnZJjUmJjLGxNcxePvPwoUSsVvuChFqSsP714fMNw7P5vPGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58USQjT18j3tA5JC76NKrw2HALnSQYS9HieEgMm4iPYFeQqZQEL1zTDuHRrrz6To8kwo8Uib971cx7piL3RaDHTs",
  "key1": "65Xv6hPnhLENmxvfnSRPCcBjRU77YbC53RSxgPhToa74J76qjCGjpT7N6Lu9tGQRcVz16gWabXhgkwgEdVs1s1Ha",
  "key2": "5yTc5x15BJb1n4MASPTtzNsnK7bmeGqkVsuEuaP2QTtXSB7fgKEU1Gk8gY4fbB5qAWYJZA6QXVNtm8WKAjQGdwMr",
  "key3": "3EbWPZ95czdW6ALQyJP1z4L5zEDDz7aZ3NkeASHNDjjg5gEvfwHY9J5RNtuYpWW1QPCbHQkGvRunp7RK6pjAcTvB",
  "key4": "2Vrrt1FmQzGdFXQYp2S5nkpGYifPe5yEgFoWUoJCt4vqaxy7fxKGir6yJELf3Kom1ZM4gJPqdd2NfNnE5ej36vUN",
  "key5": "4hfaRTvoZ8s85puidY29T37ySEimUZGjo9vL3Mmd8RvnJd4gmfiZquZXagvM5x7wu2W6VnZsgfpr3zCijxZK63rW",
  "key6": "3HWz8RibfW2KtzxxdGR7e1zAJfvYMmAXTKvHkqs3UnigG4JPNHvwjNBKXiGtq9ZPFr6yWJvqP8x3QorZ6TSCvZoB",
  "key7": "5RZ9ivK42FswULZWKZoDKkh9un4G2qKZf1efvHtntjJ8CC41oWKZrt46euaA6Y45NSwBWzR3uG55LePpGct9oSMe",
  "key8": "4ZjEGqtfYbTB5PBLyshxB8iYsUe1ikKprFyM9DNU7WEp5H5S5cTc8Q7uWaN6Ba4sCuFYGUHXMYMZa2T5rqfgFjsX",
  "key9": "2rMsgWkUmVYRJBoUJCzNkJrhN8v2L7qzi9mAqSL2oo9Yzz7xHknbjyWrNLyf5ykfwpLF9YtXmCs8n1c1zzNeGt6P",
  "key10": "3evypX77JYg6vh5mmbpwQryf3PBvopmj5k6UDexEnGc8hEHUXRsoBYpSU3fMLtupyXZRMfrmpc9qntTMTDM2FaLF",
  "key11": "2hrBLmob8CUJJrL3AAuJyMCGpwLza8GvRGvAakJr8vX2s1PU6YmQ75DRP39yqWtvNbBgQyjfDvdNiELBRPB5eAkq",
  "key12": "ywksFTR63qhc852PA2DeUD4pMFZYLmcdN6WN32aDXbxsBEcfYdqNYYQ5P2MkiBqBYCsLkt8mFkrG3hVGJRQhiGg",
  "key13": "5ieRwCibHwBScTxNPVSajSombrZnWjvijkK2MDfctsVGH47vjLgkdC4FjrtcHagpYXnpQSDUE3DUf9GXzkFmMbgZ",
  "key14": "5EE5uWNF2CjsqrBT3fP7yQhSwRTvg3vUoUY8dRSTY5BrbwubYRt9Qe7sckCAjHYVNE3oX2TFTy7v4nE61tidkPAv",
  "key15": "5Kw7pzqzsB16x8jzopVQXceUB9cPb9kSJce2dSnY9ZgUzj5i9AkePKrSRvpgQrA8A91rodfvhg1kU5vGMJCHh9AQ",
  "key16": "58kpAPobphUzopSGkGGc5cpNUXGY1GTqdHErUKFJ4qYV7bwu9anVcEGduEJMpibLa2Fs2RJ5NzgkHngZ3AHQ3H3d",
  "key17": "f8mvpYBdq5XpCUC7CVPaLAAyf25ZFrGQ6LCrL9JhwgvXgQ17EakGJULjY6K6hxgRL9rkbvQhbTxoNc7g9iCLQRK",
  "key18": "14rY8rCEcixmDB9NHGRNxV5rGtSoGVq9hpkqbTvAoLGqNXus5FjpuYVcSZgkoiBTJCmJiqUuSsjccBU8u9VeBoo",
  "key19": "2m3teGhUriRYMBcoGydn4YkivzmwhukatoPst7SJLQ8KnPBhiveN1E35Ak4rHqt6NtD2iLHsAyawn1swB9etqAoX",
  "key20": "42eYYXqT2g6HPbU6ws9HqnrQ9TVV7Te87M5Jf3osjqsxQcAGQ1umMnL3VfP4Hxpok9KiS3hdRnxTyHa6cKXDsiw7",
  "key21": "2QEPA8QMavzzbjC4jVkKXcfZHgKhSe7jzi21k4cwoCBPUMtQSFAUsxcj2xAsyeAniyzouRZFUsx5G9QtdP3jEcm2",
  "key22": "3JohdeMaEosvonAWKL5JPQwPV8LmWRWP8H3PCZYMn8KYkWwzbQZTpQ9ki7xfKrmDv2pvjqLSwsdZ4kReHFXiXLpZ",
  "key23": "2NiKXmm1z1wkL2iAbxZuQjkGU5VAutvYJrL2e5im2Jyvs3utp1oME27Ka1RaDjSKqXRig2nVRUEj4Ww3BzvjKg7A",
  "key24": "5WwejTLPbiphh9xojmyayyXt4L8SbwmvNX9JT6msiWiWRUpSwEKM7C57Wfy68mKVVVHJ9LCNQkb2se96U384UGfW",
  "key25": "4Z9ZaEoyd7RYsZBmREaVXQBU4sXXP6yDXRr61TGX6ecm293AUDfduYKYsSYe7zs2xaGtZ4j7N5DauWQNNcDyTJDy",
  "key26": "4ddek4NFHVPGvmTA55GnDaGzNyR2EWqByS6U9cH4J5zw7dySquxHPwWbmKhNfRUp1FrR52ou8JytNFkaTum2nz3s",
  "key27": "4vSPhMM1jBNcAFQXN8F7V48xCN5EXwaC4x5XcnQufkjF9EZj779FvWv363rrXcCX7txV8U9cCRqJNHghHYHXGHro",
  "key28": "wzvJRWGKBJ2QytCMxUDJSxMuqGtJspB5NZJnxrLaYouHgGcYVeaYgMouMXAM756LUZYWp9fgqY5ncDJCErMdHH7",
  "key29": "3YocRND54BVhmGqBusyZL9wqJz3VYHptDqX6jVAjgyMcrcw9NBh8KiBxYonhq92hK7FUmzGDDZzUC61BtM8oD62d",
  "key30": "2T6wgS7Rs7BaDNdPmgC1pHV5HMrhrwjAycknoLfzYDBnWA6BjsEDtn9ybrZeQSjGrqd6MD4srb5LTtoW5tyYsTub",
  "key31": "315kLjt3bNfSS2Ny4UaucBNqAMyq4yczghVWxZJDuQCq1GCDnYxg1inyqH8WTAza9newjANJXqmuNMKMomVas6NQ",
  "key32": "5Gj6r3zqmpVi6cMLeWkLqSGVYVR6n7XGDZC9u2XDNF83jPKXXKxXhuMxKfTGDymmHPwUrNA1E3fq7eYAJYNrvzAW",
  "key33": "57MMGr7DdJmcxxiVaN5SvpSMuiMX2NxEi2xM14JZAJm8zT98W5kkqTB2fLpS1NvWpk7AMy3Yct2F8Ts15on3992L",
  "key34": "4C8bgbrxRPgSz75Mmv16Xwuav9Dvsmato7RsFnDVLVgBR3p89hnCELNwHxfo5MS3Pts13QByqH41WxCxuGy2iQjh",
  "key35": "4dM1VaZe6m2pPVCsTKx5CVRyz5tNreMxfxpRGXr8fafg3rjUduLaDbfZHV2ySEhCuGhrCNboJYTxW7H7xkrEcuv3",
  "key36": "5LKVApE8hWxc68NLk3SophN1XuodAjKUTiSP9BVtCczoQ2SG4gnWkvSaCdvbejWAb63v1Aru4hVY852v5vn7aYNx",
  "key37": "3HPNZUTEf8ibpB4Ahra7sXMdWpfcTqxHA2mXCRPWb8JaYKPSNoYXVFZfEspYwFWeE9cJ82FZXH4PPxdGE2q5C7KA",
  "key38": "5EEAC3QaLir3RMDco7toYF7viDpyH32wK3oaWDAJ6FuWRWhHggxfhWCd8TZ83fgQSnw83K7TrYSrLC6Zt7obNnAh",
  "key39": "4YRGuskcatkeRYDew8s72nXcaePJ27G791VReQLuCSWkEfMVaU53azd8eHYZdVtCkjjETUmijqwLZvRU58cyDVYs",
  "key40": "heZhsgjafhqgGmLd67meRYojDgywY2QJHTek1nS88FLLVX3jfJ8kEYFdkCgD5iHshF5bkdT16nJPUNb5R5tTTfd",
  "key41": "4Bb15uzw8GfR47TGd7ARyas1KXZ4deMs3dTy2h1REo2xNqQnLgbCnxXKngwmHWydmQJhB8az6BeNhz5AdiQnmqwN",
  "key42": "42nH6b3jt9XhZFfnUcm34q3dkzsXvxxwXMUDkS471ScMdsv6YfEyzGAansUHtzDkK7uQeWf1Hv89kk5SVKrEaikf"
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
