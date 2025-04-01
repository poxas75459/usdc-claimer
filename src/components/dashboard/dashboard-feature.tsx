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
    "3faeUEVh7xmHDYt2PVLo6pXEJCp4HfCMm5vkwR5M6jbsQyge5nvYucpRbrUyy7BWch7hP9cofvHzJdjADNZwkQe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o8cCZPhEKUFMfHrruN8J8GVMSiAx52trN4SGB99NMPjfx2ZTjeBxtMi9BUNX4BRHUC4QEBNQpkKoQMoe9bpkewB",
  "key1": "5qTE6BX6TQQVFzCgdhN69SLLnyCkCDAHdWmRbfdncbvp9ivZki87fbgGhS3pQDgYsay1BAfBRyJJjuLYNCqu75We",
  "key2": "66MCBK4aM7ezYYMFY1cSZXtZiRYnoopAeUV83mbsbQfBVqByRWAtaMPgxLFWSNPZtKnjuoPSk2P4HQZwFryhujW1",
  "key3": "4LpWafG7mZou1DgzNkZWD6QhqhifjkocWXSBTTN74SchWyr9rqagP7YHWcbiMCKFX78DEvBWN8QnfuAe3D7WeGLg",
  "key4": "2TbA1jCyksQsiskA5QmhXSHqCsANJNt4wPUjnNEWUk6sF5ZtTveSCCv35xp6P3tPH8qiknjaNUQQTXxijn8ekUkn",
  "key5": "sEWXrSGanyTRQtjbQjL8R75zgD8YCwUQ8YTbuNpC6exEUKeXKcQpk9TMNJfmsU9K4ECxDMnWCRZzEkwwaWn29pG",
  "key6": "5LbA3HRn9MNBJZjL6V5xnb3CyLWLFGyEkUg6KB3E2PZCbojeDyLkARz53csEjf3uWiF1gQ6EC1iWwGSW3ZQJa9Gx",
  "key7": "4QTwSYaJjtE4tQGbKJByNGShK2oEoRQYYv8DXwYnx6rzRRvHrBdJCYYy396j18Q7CBfsC16BBqXUG7FT539Jf3Rr",
  "key8": "5xh3CkE3DyGjpGk978huR9VMp9NTNFmzgh666L3eyvvTipXuHupoTbAeySMunKoUdSjj6few2RuntQHcHhm8e3LU",
  "key9": "65RvW2ERin5KVGCY4StVXBjm9TdZh4D3w46eSLBPCSRyHTY76soX9r2MdkpRQR56uX7qeqXud5po3hv8xb6ke2Zg",
  "key10": "2H4NDs6GAiSEXm1mbQwJ37fxG3KAiNtQxURD6BtCEBqo4V79UmsftZ2f1kL1x5St769XqYtEnc2EutnuufhYfPJo",
  "key11": "48QW4mtzB3VQcN8dGbTzPBVaSRoeV6a2AUWd5giomeDcnCbAPuDaBaot9tv9VGMC6paMbf9kJDUs5S12Y1Wy3zkQ",
  "key12": "5JvUjceU9XKcSNxdXuxFTDu3cL9Eiu14F6NRqzCBaqJvAMoDd85qnCJnapYMkhnavZKxLrFeoaE5zrGkP3PnQFiF",
  "key13": "2uGDcA5cFey9J8B9Xe4y7mQuNv8BXKBJ1XtYLXivnmtxhAEwAPwmbv5BWEdqSdzwESPbSdxABTd85MpT6i91dowr",
  "key14": "32nRnAThqqcyzBLqbFf2fG9LpvePVyZnPjqC2Uor9WoE16jqwFY9ubN3ceo4hYnULZskryE1KMfxjiyaPzHD3D3R",
  "key15": "2Z6B9vh4qSyzFgE2rz7p9PBHG8MJzGRdHUQdkk2ortgADHG17cvZxjnX1ed64FNeVFr2Hce7AX6aofC4Wonq2czt",
  "key16": "fhSmfpVohAea2xvr962S5tem2z5UfhFnBEobZDyz4ZQ4WY1cwtM2aQaxw1VT8R3xAJQCFsdnHrkf5tDz9BeDwjo",
  "key17": "3xNhPMJSq11ZC3x83yti1KB82LX26D4eWbabbxd44fhKnEoWJS5DbVRSXd955Mt29eVL9tvAFFjkg2wrYgJFjtZg",
  "key18": "5jwJVrsfJcJ6TMb379qJw2nJgcGs4YWD1MkVpHTEwdWi6heif5g2igfUCcTBLk89YKxcNbzQ6vCqXXVQMvtpCNFR",
  "key19": "5mS1GBUfBDcVy62JLKwpgWosKjMzSukXYgw69kdgqUTs8YEf5duCQRVRmdH1P7XgZ6Zd5CZnMz2f5xV5wx2CbxPw",
  "key20": "3CTyHjBqWDrManbJjvFWYiUha4N8y3bakuTAAKNK2SGx8pF92wfqWYGdFZFgWjfQYemvrEqBL2irDSnwAU5Kb9vs",
  "key21": "4FTbfDT6693L5KtHpyHXduDSXd9xHkKgAVaWwp7nihKTbtw5Zy5xCsY7b2rgvUe51JrQm8P9oGvJFmH8m5XkQyuG",
  "key22": "41QQe1t2W2jBWhVcM7HWhmTirKrY1utucNAc41gomokxZcGYbTvUZb2sZBfMB2m4Yma26raikPJXzhFbWLbxzzdk",
  "key23": "4hZgk6mRxCAZXw4QU3PoDFUyX1VYvr1BL8r7drwemYzhdShWNtW3Ev36n24roXx5vVMNCpCK4qCDzVQZ7kHWeQFN",
  "key24": "3a4j7RjuWtcNo31NPH9x2ToN75c5zZU9vN4u4PFRpJEZMrFBiiyohSwk9pizBsSzh1g3aRd93UahfzCdgKuEqf4b",
  "key25": "3v6rS99wnRbdSikHQ8TQYbGsj8s1GCyepd7Sh2u2g1gZLWsqCc1mGsEWVd3uKH28uEQUxRjQyHRSD2K8JkXgURcM",
  "key26": "2ngnBH5n4PzeWPnwmTNV8SVfqnbKeycGdqfpAfE5gQzar3c6mYUVc7VTWSqWqsizoETtUx7yMxzG3LkMoqL9XDAG",
  "key27": "2cJ6CNcNEAb1HhgyCkGohxNZitiV7qY9nUxpWSmpS7ChfN8SMnNV3nsdRcDdj2ErAHp2KuYR8jAvggnro8eyXzjK",
  "key28": "43SWrgt2oTwf9ZN9Ei2ecgwrgAw8rB9UmojMEYPCfrsx2Rw98sqooxhME97v3ES5QUdwXDj3uwFDXtJMUu1ftkQ8",
  "key29": "3hAcCXiLbckLzEQLr62tPCNouZTEhttbg4wt25DcdpzxEf4Nfy2TWb68wuxNVPgKfkyCjHuTTPfb4dPD9CvEEx71",
  "key30": "8Q5BUXgqXBFMcqYeTGen31nz3YQDQhaoYEszNwMvCMLGfCPC2fQ8rnACpExVBnCBMcG8LrnAiewxVabSBMmdU1e",
  "key31": "dHGBtEggXXa4BaAMDSqfo7zsicW3JQEvd65NB7hMsvnrStiWn4okStCbempQv8jz8cFoRYyRnmwuyeoSJB5dexE",
  "key32": "5S2DvPEoPa2ihoZaEhz3PkKceMG2XrfVnnmQjbnA9d1mZnhSpErxp5QuopS1M2bYjKY1ZNpaKCa6QsrYGakQ9N71",
  "key33": "48AGZx89yiQ7HqRX9eHFEwU3g1dWH8NmHXUqbEANqBHjRD6ohEyigtWK66J4sKaL83rKR3bE71TMkmULQYaZCRPh",
  "key34": "X6ogV8biDiumB7KLbRQ5X7fouzcZhafkabNqN7nRHb8WH5ejRtsJ9USuqRZyudZMWqs8SyrpaRx6dCf9LDMLSgU",
  "key35": "3iLrXAXku7qNLQ5TVudRHQhyigxzGn4ZzQvYrJwy6eCTHSTwWVmjpyPGg57eSYgmpPXf2dV9igwfPDCp7stvBPzy",
  "key36": "3i9zAU8ZP34LEsMD2NUf6xqtJitheVhx7G9YS29MiDzbMdqBKLrnyWh5tD8P155aHbGiSjWEjDrCus1rCJfKgbnN",
  "key37": "FnnvFcCYYuMus8JDbadQvrpHjmDesrp89zJaGLPBkEDQG3iCY4wdJ4Fs9Tz3nbw8MifBtPvvWuYJFZzwgT8B6KQ",
  "key38": "DA8zR3WFnjXKemYskhHrb9fHZWQReQDW7TGFugcGPGYgZnjNEhzSe4nLLRpWNcsJXKwVF3FgWSJZPzULSicwHMw",
  "key39": "4Tdn8abfuGX2cJCev9YQbQz2yc3WtoDAhT9Ui1o6dT9VHKnRbQHZPJygDnuD6X2gBkXzo69xuP1mZhftqadUyLN6",
  "key40": "3KBFdkBU3TmSUdaC7gRR2i5HCbbZsg6TAJNJR4givb1V7RH4VDkS4WqJ91uH54Yg9Aa7wmbvxzAgbTPNdGkqKxkg",
  "key41": "2hGbibuvwnfMic4LNJLNG7thHwRUkN9jTq9CLMqatRQ4NQUCEfDMUWSpukKxubTmizo738RdwS9SFmZTuX5bhQSF",
  "key42": "5T7tmzw9fsrhDpXJ3PazqD1mVkDKHsHvWqBL23UH431Jq6jfk5uzbFNXLXmWgwa3En1RD6cyJAvNdLZrjYnbU6HN",
  "key43": "5kiege2NAcq8Z2p85ypCNfFPX7WsoDAVoyGV7scnoaRD6FdmeivqngEBwrPRV8ftmxq6kamqoV1E4xGjD2KJE98i",
  "key44": "2BhaoY2TnmPeRBpJ7Ytue9YTadg5meDtqZiH6x5PUx66YHe21mhdDC247SgMphGvFjs21EP7hLgMPZ5LT3SgZ7nd",
  "key45": "onJ1Y5QedJ8cMqgjaJwByzWcrg1DrUcZfxiUYPJ5YwaqNCJaUW5MSbKC4jPZPsjpoWy3mq1HKx9DAobe58XrQyr",
  "key46": "uXbtwbApWoxGmbd4GPHP3XSn76makTvg8i6Bo7DQYiuPpMJ2TupKgKRqHdASLZNWhLmAy9yiXDVyhJEocUrhvne",
  "key47": "grdJrDZ1mDoAv7bqemjcyPJyYYvLshW6jPivDzmiqVxqhta2U932t6hYJCLpwH55X8xKxwUmBmsPsdVDSUcyNEN",
  "key48": "4joruRzbX3b8evKea3Dpc8LW1Ubm1fTQRb1GosedAWEw1t83Ha4hjFBy1UFgUQRuetSBhfcTS9XY6tAYXqvJLTEV",
  "key49": "49YHN2UucY3Za5kJpxdVjZSDL6uSmonyM9FuFbVvfV4p4ZBYzE5iKCc6isVtvrWnyeeCv9fBpHrUnpdu4NY1fiNe"
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
