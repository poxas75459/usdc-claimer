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
    "5s6KFf8EWXSYfppcTiXDQBHBr5Dhr9FxuYgH8zL1K5pcUmrrCjPQGMkBhhpv7JUL7jxgqbtnK67hCHAjSM58fyT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UREW7wfFcP68EJTKAXkH2zki5WJTvygFYnBXganZnsQqWdUC55ndD7fkJQek7adMS1S6aZFS8KXUmus96koW8QZ",
  "key1": "3ERJFY9zcjUxrcAxUJ8UbsnJ5EjYXHxxRRSWQAhcWYrjuvbHaQgAdi8axW2KNCchdZWhzSvXqHDWnkkXG332PqN2",
  "key2": "5GoUkzARnGR1ZEqnKYJUiSXWELRouguJgB4sjARokTs7jKKbuTaDZjWYGyoEJYmFxkzKVGe9tsJxhA4sDmhwVKTa",
  "key3": "49myXjcCJYStszaNJEWjurmihuBfNkSH6LTZYg25W2aDFUktVZewVE74EzEdLTuJE3f1JRiK3nUzTRPiT9HwuB2g",
  "key4": "CwkoJfEJQfahTW4oxoVrrdZUZEcqpAB5nThbesPYG48eh8iuotKSJh9mCriTw9JJafax6rdChTv69ECVvfVoB1u",
  "key5": "5C3aWYWWVR3Ce37SiPQtq2WRy9g5Qx3ZhZNFRDpWnyoFsgpEVi4LYCjZkH1rVnLuLXDGuQffMnALaZUKXuH1NxJp",
  "key6": "21giLPHdw1XQeYqDiF1whyYP5YCWPECpHjh75L5ke1Yh4cXm5C379QhfdaPzdt9cZ3e9GqLSpWMYQgHWZcrDFotb",
  "key7": "9KcDAEgLDSYV7yEZibHWPbCKQp71ERCbFQUNP6GG42HqW4GWTNvfKiXhmPPDfQJKyP5T4RG53LakVSXQUDr7YUp",
  "key8": "5ijGuxEeH1MjzkXAWo4xDNyUotsinWZrTm4WFxnPS3aFhE8Wga1FzYMquXfazAbsa4zqYSRTsT6KsacdMqabzGjE",
  "key9": "5x17gUc57EC72Vk18rTBWJ71uNNseJExA7uJJap5FQ4yZZaFNSeW4LbfM156nSTPiTJ1iqTAbV7RPujRaNxk6esw",
  "key10": "5ygDTmmNp3Mf9T6he6banBQVXRKSCHxp8ajgwAw1WdcGSRK5rSqzx5q59cwx1AstwgpZrVc42YMFVTyoPDpgiQAF",
  "key11": "3bAMyheaujP5VXJoj9eXRt9Rr31oiToPgYwXYAS5yEMiiK5cGrUmQhe4YRiuuditxtDeTQgaZZyYXLg7wvS6vg3k",
  "key12": "9sSQ3Vf2c3JECx6WxASEKPVVCptdMxb2hXad7UmCrXh2mKQ88GrDb8aWzKy2cttdBi9q3gQ8H1rb9gfJs4Fw3eB",
  "key13": "CEE5Vb3NUWgeHj6UQaEMK17vhb9NfKUHbZa3zDPAN2mJCGhyHbEs2hwvMxAQoEgJJ1HynRqiQ3po4feXfdTQhUE",
  "key14": "5pyTSRCXETNC8zu71PrMxjEDjov3C7kuPpqTmzsgjmmXR6iWTJ3ZMMYT7fHqWAaZmzTP6Ww3DeEGvD96AXCgddnd",
  "key15": "2zZaijqX2Ns9itZbeUgk1pDTUjtUphxZXUc3FrSSNsp8Sm6pcG2iedQGJCQ4mGoC27UmEXidQVQPVGhiQQDa4qDw",
  "key16": "YLHM2od7B3fWWpxBoX75czFs4JAKVupTJERcGWw3NVgGDJZqCscgiXWenGgFAcoJYGWmUEgdPUEcr8Lfd4oiVs7",
  "key17": "KV48sBz6RQAv2rmK9K3MgCUodAtvDe9hYugYSze5AwwqjwXYZGxQZHnFRS7hE23y5TH2bRow48XKnsRAvXdrpki",
  "key18": "3vsBWbUvwmkfQnzf9XfzgKrGVjcmNLSYBNqYHz9rmLJCpd8jxBRWp1162oX4HdMmRGzqy5xnv6m4pULeToBzU72s",
  "key19": "39fn8YcDMQXizk3g2rTK9X6juZezK52RpZrwgHwi3BaNTvqN1GXnR74wSv7d8gYmhV5A1z5wwozTf8ZV7bBXPLu1",
  "key20": "311hJLNExbR8M9Keg84VJqohrJfsTxxTYJKcCjCuuma5QHusgkXVCAeiKBHB6ESxPBFpVh7t92qWDrn7oo7dr4j8",
  "key21": "D4toYso2XfdCuKqe1PkHyV8uBUyNjAe4ryKUFwiZ6VfGdiMQeDEedMym1BkfJq71Fz5kFDxYpu3bvso8zsGbYgV",
  "key22": "5bXE7sMv7TBxGicsDU2Di1LHfMZKGCjRejVrssBdSCwbhCq9Dt7qmH4n2aJjZA5kYqCzXVCNRJZ5iuQzkR5jAcXm",
  "key23": "3ZSZ6eMXZxRgCmhZVCTmS4pMwgA2ou2o97tqGuCSk972VBJYtRhhgx2xHG4pKPkzUAtu2isncDrk615rUNnrB7j",
  "key24": "4DtdgopQ8dAX3qxC2x6UEAxYFJzKZHjSj5ppCN9QcjX3b3TMy1JKRA8w7Zqjp858iV56RjS34gQcoQvjq9motdsr",
  "key25": "33peGaeu4Yhme4EWin9wxB5eQDqVfX9DJNWkPRWnHqHQCL4mgWGDHcUdubruXoHxTY9RFrEcCJFGXPMCx6eKXZG1",
  "key26": "2tLtr8mp7tv89M3KtpCcHENvo8gc1D7VJCNNc97boRE34rLmrUmBznnkxmbDMwWWEYFqoVkJ5ZaBXott8TYqGhr6",
  "key27": "5JjZk7vwogvdENeXxHCGa46Ro3X2oFfYmhBURm4exND9vEhwP4f4Sjw6UHSk1hXmz3QX9QonjbFMqhUWniXmUqsG",
  "key28": "25z54bTw1PqhKiHz43Kz2GtYAdW8kHAjDxF1M2XJxXvEy7s7Ss9aTsTUPs2XitG5SfgkZAWo5ZwYH7h6Q7A1MqH5",
  "key29": "4GeQhurt5pK5UHW5upbkiehRpp3w1cgCna8q2HVjv7KDBqiQTonfD4qgWtVVuymRkgoUt5Utd1v4VSo26EmiYo5y",
  "key30": "3v9FULoHMCWjmAA3YLRtqZYohkY55naM1p81GRZHB3xU8EG9DKoCh8xnUQfaDHMEydV3kcEUY52ib9WdphcpHngL",
  "key31": "3r8AFmGfwiZPgbuspkgCnfApdBkTQUzy8zPwHPpvDvu2QvjTf8VrvtZ8oWEdhimsk9PnCE4bNBcD4YATYhHDELPg",
  "key32": "5vzZFx6UxEdufbT7RWPt8iBXVDk5UBMZXUkxBah1SqFGq9fMZaWRpunTdxAawW4sgKJgjSTbp1Y5tjMHYEUJu52n",
  "key33": "39YNgtcSqJfkEo2xJE5zApXLJmiZ5mAsRCLeKZwdPh2ELruSufszNCGZnxFmsTv5rMNMR2oh1b4Sq89mU2cRwypL",
  "key34": "5ZkCAYJeugvqXKenYxQMkiGZo9NkqGXQPWpeMQfYGTLFvdzYoyv7RuCGaBFRyD3GRkJtTTvV2Pk5EymRJrhA3h4d",
  "key35": "21xZT4947foKKKCKyNb9kSczmihHL8tqQ9ntQwmcp24e4uUbwJcnbbNJPpxqRHRzT3boMxRaovVrhv8fRkv1jGBj",
  "key36": "pN6SBJF7eS64pYq4sq71wRezDkeppzx9v6xsV7S16VK8rAXjhDSDGNjP4Yiy63mL5H2WbPknFmJWng8uCrXaPhM",
  "key37": "5PHZ3KF9xG6MjZCxmHDT2TA8RgL2b6oFB8dNANzXCKUNWHDA54e2oRiJuTWJmBT6aNEj7mWyqMB96b1CC3fJGPi1",
  "key38": "5gLQyQpZ8zXmxYriLjUGbKHHsWi9FQDBsiQmyorpRrZAXmpzNZ8Y7RTFQREyHKtx5Jy6yU6mBj53nJun4gW9jGP1",
  "key39": "3Ano6Mwrd3RiZovtFh1D7iuxhSBrN6FFuFiH44qceLeTM5JQFN4upnhRwcTRBL7duPmoxCLqvvFrKLiE3KNJ9y4B",
  "key40": "etbmUw7kzpYs8jGtf4eDNm7ab2PewbevDJbnMHnutcY5ZUpmMyd4F8THFzYQPCGW52cnwrGGTX76HNW7FJZvw8j",
  "key41": "5rcToXGXGAU9X1UAyrcQuAQwreqcfHkTxFMiZ4WCpbBpBr8TrZGeVZVWE8GviNUFmonPMuRt6bWMsjwuRjsB3tuK",
  "key42": "4okm5vxbTKuzb6z431WCEeGARNAmv5dEYQ7cqqZctk24rr8mXukQCyPAjsNQeWLUGRfBe4bLbetbViM9EaFsCw3n",
  "key43": "2GeySrXmnqS1L7ThBNczibHTnS53HS2imxzrgQ5kPu9GiYe9JjHHWSnpW4gobg7e9mNAFhC86VZnWPAfawgrK8M9",
  "key44": "4tofehpeYS4jvN723PLBhF3Y51ADpQvrBsZh1fpxjg7PfuMSEiPbspVVhNLsp7D2XuKWou9gfuaE8iEAjJqmCMLi",
  "key45": "5DitSiq6Q7y8LpUHhSo5a9sCdQKa7PXwD487Acew61T6tRMkVL8Ba8sKMxQ39uJvFQASWwUpwjUpcwKKnCzeTq9A",
  "key46": "3ST8V3hRGwpAfQp9qwePiCHDpJ6vvpY8UpK4Mq5UmBbTrrTkZHX6JytFkeUTR1QM6oZJAgNz3eDKbNm7uhC9Rkes",
  "key47": "3u2fc216MGmdRTazRtCaBgk6ECxngKtboGix2CXhNnNMsanNtorVpTnyJKuxuNxiU2o7BAhnkRMHVKjB8YHZtcwX"
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
