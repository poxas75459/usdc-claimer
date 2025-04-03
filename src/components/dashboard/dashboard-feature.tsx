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
    "71t7jY16MM39Av7ykVywUCgJzFZaDd29UGk4mmK9kMtua9PiW6sU58ruNX8DEp23r82xQbh7EEEb9JA9jsLH9oE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hb4Ru6xwpLQzd1zPyeM7KQGiEKLPKeM9cfYYBeWG98VBqm85a2fLnDycNdBzFpD8qBBVFRzHhW8dLR7AaGWrWMr",
  "key1": "34oGjYJmcoD34hyzHwauy3BZTQs1zi57GJcP4gDK4ns2jPNbwPNMY7S5raqjKNjWLiDHwKe1N48u7tEgnezLXiYV",
  "key2": "xQ4h9vcPhASbWLmbu8hzcBuxxWCtbMfPNemq81EGMq13viBQ5Aag8bXRmT3Yvr87JAK6wiXEGS2reBsrsmfm4wR",
  "key3": "2dpV2aPJ8LRXWgUKrK6bro7Lhd3UWur7w3Jww9kukjZsZMboPrHUiVHdkkakZtQHMyYF6638yJPgzmEMNBEEio6p",
  "key4": "rTzm3rXAtmoQ4szLmLa95uuimgdD8CPWVAVZbNFHrMzn31SdUyfYwDg7omxdPR2KYkddrBMaD5TswJurUQ91Qmg",
  "key5": "XSPgirb2TPYYMr7iBAAehbwZ3o76CtxqPkoTfszoRhcZAXV7xpPnZgrix1ejcFEi1YGjhDektJY9Lammp9Ar8ck",
  "key6": "5nfUKkuBjsxPBeb2WTFbvkcGCd2bPkQ7jyTL9S5sLR3eEynNYXUdb99raHEuYYYcqec9zJfPATTP4qN9Nq5jjz9M",
  "key7": "3Ha931kzorPX6Q4YLjBBxdpTMZZaVKwDQn3SHEbFEARexpf1eVzfLsSQxVwFtZED4NYEfJ32siQpUh7nyLmvLybb",
  "key8": "qbmK9NoPJcpnd2SkBifb2GiGAFMeogaPC8PLTfiAPhEfJ5xWyAxPJeFp2b3gGh1c2mC3eCH7Ud9eD7RztBP7EWG",
  "key9": "3mB8YSSxYpJ4LqPER3oUgrZkkm7LMTiytXE5bJEUrsoUTmoRU1EvcducBVaDTygGLYoGchKHr6rKeZjZhijRHH5r",
  "key10": "4jkDev9frrLM5NYAYeLfKBgeqX9kEc1YwaL81TmyRKdVncRPndEftpYaSSfthEWB8jkfVz6JC4xzfnuJpjM1AFNk",
  "key11": "34QJ2ZrYwTwhmpb1SA2kb9xSA8BrycViLGGo2QRBiTduJNEXN6wne4kXpT1xXwFdLjXifUMfvXx9wk293MjVWsXL",
  "key12": "5MvERx12PFwQYWTRcJjtq8eBQmwrhAmfvy4M8MFQLMucDzZUExnC6jjBxY4qaAzGoLeACCuKd5SC8DtzAqND25eW",
  "key13": "89Gk5aaxWRkMtn4J8y6h3RsFb5kp3NerShNeXiPngW441d3XaxENZjsoDyTEA4rtMML32dwAoT6KwWEZP8Dmgh7",
  "key14": "rgXKtz1d711LCAsfyPok5Lm7ytKn1w8frHuMsU3X8pCEREu43ovmxfDQDE51n5j2v2hRnXLF9b556hyJdj7FTCY",
  "key15": "4nA4zyDqD5uvGDg5G16xQtMJrsdN22G9m9j1SULYr9ANNznStFRC97gFuFFi3HtHpeWwwDBk5ovvwpJPrdPqKxHu",
  "key16": "c8pYJMFXMCbN3HGv1A6iCHbCtJLtfDF9pf56ycyviyEqeyNtuUM7MEZMdBkuPCGgGNuodtWkJZtUCs7gpw5Ntdt",
  "key17": "5fF9jLZoBz4XVFMQXMWRkFWmEkUrENCm1DoA1vd2KwzF92Dw4FcJTuvoFbmsHNH8p52XQzHd4LnGWGY9xJ5EUjHu",
  "key18": "3DbjjxjzXBXmVQVM8Uf6oa1Z7SakCFbveA1Kn1V5EH9PDE9zgD4mbMuUWhD8crVtn8vQr1AfZRNpcCKNCtB6A9G7",
  "key19": "4HzTWgy4m5eE7Qc9fD79fmZfkxNxf7wBTUUMwNvXXrFfNxwGH1PkwYvqfWT8kR1MVSVbryPCE13rDUEqiJNEEHAW",
  "key20": "3dVf4qMdhyNwdcit5QHweaPsQRPAH1tds8crYFAX5QB54hfFAfW3apaSrjZZZHHxarqS7eAzBstgJ8ZxgaPSYgxa",
  "key21": "3SByc97QcPJWFV2nH1Q3TYgmz77A8HQQeRr4aHbG7SqnszNHei1exzdibeN2uQ2am8FMNVWAaqAqVQEAdhnJpJ2X",
  "key22": "4QZMDhGdntafP1bftCabvTBdf9dQ6mzRgCaJFEoWQT6LA43JQeyhFMeiTUmn4vsXHjj9Zz72Vj3Aex1MJoq361pT",
  "key23": "4vUJZuzSLfSxrbByASt9dFs9SStDHbueniFRQ52X1bYtdGGBfsNVmScSQqqkfffuhV1vBF3YQXSuWu6EDBdpfmjz",
  "key24": "263Q925VPoKRpLsrn2TXaGziqnyfGbNBuoNTPpTUEYAQWakd6FjaU6XB7V3WifFnX1eeEexo15t5ywrAkVspA3hD",
  "key25": "3Ca2GWuRHeF3ptZWyEbQVgMPZWskCSDZUrQUBtoeVkPPZx9cwosmrnxhqmsVCz3PAEquCYngHWLtS6BU1x6AxQ8T",
  "key26": "2cr25GwQ6BYPf1ytVxBu2jJyWM2w8jRoPkKaDW1RMX9H12rXjjGcg67RoTZJGoZktfznyAoRVvtwP76sufufQwtB",
  "key27": "4CejkKG6765XowR7GKL6oegJBwQNmyj7uka3Y9CVFtrzXk2o9AW12PYiQhxSXfFHwijZ3RgsReVzXQQrmRtjGKZ1",
  "key28": "2bZQjr7cgxKQYKKjNCB98oMqf64h8dSWsbPNtn1itzaKPgwmJVVM4ocGQfAzg2VzTWeQo2V3fsjvit3jhbHjMshR",
  "key29": "2vSP8ArjNMYj6HX37t9zZkpz4NXP1dkoneUbPts2TDFnJZD4gXJkAohgpQoDNC4EPPwbaniqEJ89RSCHM4QASzBu",
  "key30": "3MTr4AANKRoGEWr9NPk8atnAYjhXyPSDGxFhhW7un89jJSb6NZpXjV7ChmCpmBsCUR68ox1WYn8xScpg9vfS62q9"
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
