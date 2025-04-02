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
    "3EMNA3RhttGCcgUKhDrcmfLfE8zgmDRF6Rmvc8KhwL2NMdk8DfNLiZMzj8dsSyto2BpCd8AZhowPnLWxqVrsQRHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o6LUk6ybEsorsJXSL21KxAggYwoDfTq2zKus6o5qdbmBi6G7gEq9ZJvivtooyBmheNWKpzYtVTkdVkE8Azqkvhg",
  "key1": "4v1sumVDRBrB2BgpYBGWCge4ErnKFGUZc8Dsw947YcegQEKnLkGjSZxfWpduwjbEp8BtUgCK8wqaYWJpJN8oCdVK",
  "key2": "bGFgQAFqZrXL5bZVRMwUo9XD61mSA6H7YnRzvtFvyPKLXHqDLbxjAZ2ocoHGJr8jPLRQXjn3nYHjp1YHaWXzVd3",
  "key3": "4byNcPQwibDBTd3kkCatrmCWFMiZuuiyc8v5JzdHQzm2wW1buqcWSEAEe4hGcx39HzJbYWe1WKAhrKythX8fyH3y",
  "key4": "xpqL4dhUs9KpFQPSXwTgQH2LLsS6uCwM2GqUCn1WhSSAguJi9LzETafmux6jACNdZgciQq7Vc7TonPbRPXBjAUf",
  "key5": "4z8fqAxpzFS2CX4wDVsqST2sFDYRhsUYFeqcNczMR8J8hy3YvTtbiTr9Uwv6PtTbTGHZiyvwduvvUihzcSzBAARK",
  "key6": "24q7QsYCivkrADy28FH1naZP5qxqFiYpZuvcSdsr8yRk1Zv84aCASFtQg9HSgji6uLDGkyZxXNKUKxuBUVLbV27L",
  "key7": "5kbZajN5fL4UPJ6xo6pNvxWbsuwEEee3k2x9QDGcdL74PpW4GDWBMTgjeFja7wUF9dkfn84bs1YQZzQkaXZnmekd",
  "key8": "4YvtrGiVhKBbUQexWd5U253Ne5BBBs5oWk3hrN1jCfVutimXPHNmBGYFBgonC4snq4PBAz8xooVDuv1Arcug5jZz",
  "key9": "2CK1Ag4j9t27t9og7Kp34EZdRkxDYXHHFNRQ9rkKJ8w9dwNAbozE89FHkSLFg3ouq5aH2qf1KA7cvNtyPMdNm7WR",
  "key10": "552URuJmnF8L4GRkq4KHKKqukNbQF1bp4SVxCazJKZnoQAZ61taSxjd9Wgqw93qQsd7XH9yLHCrE9F4X7bCu2KuK",
  "key11": "EvjYt7QxSwSK9mXwCEBVinKt4JMd2ENJrT1PaxDPb6Lv48jFs4Bzu9BnoLLC7u97D2xF38h14nKdahHfCDU2ehF",
  "key12": "4UnjCqKXjxpuUrh2JatxdSjf2qaeBNAz3e7pjbAAbbyPabpLWKwkbK5WSFGPfTtApH59nXbWgdNxZw4mtush24Zz",
  "key13": "8o4rmu3FNmuXnNBDonHt3T9D7WfFpmBPEH8PXBNR123jLASuofVzTsNMA92GwAy9crRfUno6Z1T1qaKP3F5poZz",
  "key14": "3xsBLrQPuFYzQ7R1LPboKDP33ELMgxB52YLhr2RSnqTfR4hWZWctyrQB4Y4MKyEaEe6rKxEH1hiySYfcFKAHBqhh",
  "key15": "5uaJLM3ptKqe22ctUc4oZUdsJuKro7pRFmcUU9ud35xsoPp76ZeZJQk7wcF63XQSzn9VsUpKWScgbdocUxZh4gDA",
  "key16": "4y66XHst4gp7HPXzvMGEm6KXApE4NG41q2jRNfqJ7GW9ESoCzCaeu1ig1ZBbxtyDkTRTy53jVmMsH8ZVUGJBTE3t",
  "key17": "5rdmQDmPBTACLcvwURVhLykqjtkNqiS6HusuBEphhFg27KWnyHugnT8AWJd6AFppburUaqHkSk31PPy3aFy2kuYj",
  "key18": "65s2aph6jmtdaj7C62DR4C3YU2giZyXvkqYLq835UphR1HQvyV8dW3ZDzebDHLB47eVdwxqeLfv3QNq4KhRNJv1q",
  "key19": "4k51EAZwFuHCniU731hMewa1oWD4MVksT3TbXthxAqfiYDB9GacwG5V3KGVS6vggUgzaM1kzupDhh77V7GKysEhL",
  "key20": "2ZjbpsuTf5Kr2FDopJjumTVLynb49yjhMoCFzPug6RiUNpxSjivwFrF7rG2bdq1UiVogYgqXNQFKauXRzHFmgp7e",
  "key21": "3nkP3Jdh3pAG23G8gyzbhLSfJ6eKRwpqcr4YbM3Zyuz1HZCeghBRBAbabEDcFUrmX7aGk9yU6QgjJhnadhacd5RW",
  "key22": "5zmFGC4nP1dMENwaLM7Fi9ZWBucArZLkkzu35Hu35zJNQunVdKhooE8H44i6FXvGXj7GVufJQhZLz2vHnQG6JwpN",
  "key23": "bB9a55Z75A43LTCMQLXffxst8CtSrAASC7rtas8ZJJuykErM4Md1xxPUjDEiWpQLSptBHsP2A4CvYrJ1VJ4Rw5P",
  "key24": "66rJ2wFVspjjxZzUeVZ14ay7Dc6bTpZx3TjrNzEzaPYXYux9f7F7NXT8sM9d2TW8ALdKayzHbA4VFjom91RywuYb",
  "key25": "2QGEoQZwZ9xCCQK5efKuoB8bf2Wd76DdqaF98pzJ1Bim1KW6m5ARJH4ua6GBbYAsKUViaXu8xjkDoxEazKiKZMES",
  "key26": "47xBEJ6KfRx9eWbDiCP2iRVgL43RyN3AkY8yaJcter8WtLwDH8o7QNXCz8LoUE6yV8eko1CVvzJxeX2Yo2fjyaMK",
  "key27": "4yrG4RhoPoEBSQHTTZXd8Nqpr68mZR16MmHTDC1UaLaUGp9XPKecjABSbchuLgpXBCQSzniCJaxTHRCoUEFvrqD2",
  "key28": "2nBH1AcFosYsFJ8cQ1K5GozH15dEVy8Y4YrGLSjhccmXsMHEqPENE1UHRdZWDMtMbkGPpLM8258zKH3trW2jzp9J",
  "key29": "2C62mH5NwtKPBGbpYpGnRmCvk1P19gRuBgoEsSuBKCRBBUY9YgDWsXhyxifhHEP45Rite97LVVhxyvtznjybXTUD",
  "key30": "5zwavh2uUDNJqjr1KWk3p9Ui1sk2h7Lxb6s9Dyd3yzbbN1dzhTvZaNTwp2SR1uQRmrzksGZz7tijcNenkkvcUKH2",
  "key31": "44UUvg2HSnK548ZGTFmKpHduEfW2uUkc8hyazHzFMboHJJgB7FUPa5PCPt7qRikPPf92NY9vVkroWaUcaXd342Pq",
  "key32": "4RbTtxD55bYZFnrxRUgv3cAAtuYJeRvrQDhFgACi1RDteb8VFcxqr2zSP6S9CtqEzKRSSUWtaJ4xaziFHodPCgj7",
  "key33": "2qmbg7zvZM1PTa18DUiU6WW19zSX8y2pFEqFuZ9X1K1HuJ6jVucWTx3tYSA3y2moJADzry4D3piSuZtf8y7932rW",
  "key34": "3AosqzNBUFWEgMM8DEhegUeRHPb5xhUi7piaAdvgiHrV8ioYtmzx7pNTtVzedr8NnbXfama6wDNt4Jam5vDCDKte",
  "key35": "224HysC7XKKY7rtH1KoYBRWPgkNQZz5zFqX2uivtouEuJvj6qGh3whi2btFEnnRbvTiDdWmpmTvouDjMMCKr2JGN"
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
