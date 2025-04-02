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
    "eDRNN5aGZftTYxp71tEQcP5bwCZ7YrHqNGT5K1CrX1P5DJYoQ8Xf7cL1skKtaTAx97CcYHH2VoeWcqS2BbuSb4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jon5GAbqHH6Fdpna778HgZhsg1PGyKEiTgG3QWFUYaVeo8ysUmDL3cpJnu5V3EMmFF2wwoBMCNNbzCQDhhCxvhP",
  "key1": "2ZEAmtBYBLq4e2dDb1WJ5qCrMQgVo87D7R7KCwJxbbfPFU3b5AjQ9ek3uvqGcyAVws2tYviNgFSp9MhrDNVw4rtK",
  "key2": "4XsHRxHSsE4o2DKeFqEUHgEPPHN3KimeksyNghNHPGzioYVed7Q6ycg8X6hCY2ZTugimcYqqnGwSYsBVFveHtmda",
  "key3": "3zdo7mmkd8m9xUx5tY6VDer6LoqE4vfcb9J6S4DzdXqPVzGwr7uaMdDwrh1uNnuGbaDqkV17sEM39K74Wdk1XjVB",
  "key4": "2So9z4yAceoND9rqMhiwsnB1pauApesADUtKaT8ZmiF7ZB4Vmf4SVduQRSwrPXsRuweVVNkUohvyTCLGDsG42XTy",
  "key5": "6YgzA7LsA8puG7CN5E2EciHfsdAWDLT7hMtHZ5RV256ofDp37pvi4aBJSuk85VPopfdPd8qPttmvwGwCxeo3spZ",
  "key6": "4PzehnoRwR6JEE5v172ghJLTRY2Sz7qqW1m9RYhs9YxPkiu3GWPuJj4zabCaNP1XMvFQAZyGfrsc6H4JAJ27TBSa",
  "key7": "5rsfkcay1CMNa1ee5Mp4pCfgJJLMevyH1PDsQtmKabQG3dnsVfnLLAZNDdBSDSZ238JcaQNee2GJVtajLDaVrMDP",
  "key8": "2SwbggeEQE8PRENx9jxhomktZBwEePZqmY7cHomuW2e299m5242Xm3p4YGfMokLv49QkQfx6pv9hXDc7KhquQDr6",
  "key9": "mAFxm5kTbJQy8BnfW9FYPcYXw9MucGDDDNaTa84CKQR86PnfVw8ceFuZGS79pbzRaJfJKsikNnMp3PSVY42BxhK",
  "key10": "484M5Crt3vNLJxXpBsmAiCvGvBwCZyjEqkmn59PZffn7SjATJaY23zKCe3GGnM98QfYtGNYd2ktnBNYv5juFniUv",
  "key11": "23XC82suKsGuhzNiXuheV7UK6DSnnYLAfTDCsV7Heg8XH3wfAa35ReYxFSpeBUzUgejYrtvjWvdP124pRg1ecqhL",
  "key12": "26VMj8iDwW9xGXMFQhnemoMNQc59WVCiLuNKQP4i3Xz65pVMcx3zYyBzhX4KMSStjg2ptJ2mRDUSV57TwUkFzBNT",
  "key13": "5neAbDJgAjxzy3afc13eKD2aY6goUytTgYZnGqSWESHTzrUdwk9UWipSgacoMvLfrzysLy3PV4yHUmbvsQvMoRWg",
  "key14": "Lf8YuY8CJwANhM3B4qvzhDE8eksqKrY4nRpFi3P7hXQGJMXH2riht4Mop8WAtRXBbEquaKB9x62fVKEQi6We9nj",
  "key15": "29PWXHbsvpbegeLeFPJ5sw9edvNFnMsdwdGdxY97Rq69WGejrx2xvLRh8tuxVxavP8uKJruQHdS396AYW7JChFEL",
  "key16": "LLDFSD2mDWCyHrjRZLf5ZQEtDbPhqAyaFV9ujV6WNjxXqhrtMZthfucXRqPprgGNfx3kB7DG3sF9GVmUd4yuryL",
  "key17": "2hVmSDbxeQpvfsMS2bZtMKsezAxcKBg3w5TQ8dyyG4CSq8wkN8oqzoPRhtasQ61VcGGyu9d85m5XrVETpZFHq65Q",
  "key18": "dW9q62f4z7XJQe45yqQLjUxwQDri8Kp18tvw9URutUMTSPCjkG5VWfV53zNWXTGpc5cUPqATdqLqkm8tytgzmPZ",
  "key19": "YhC28beLYx133RbdaH9gu1QJeHsvxnGMYFdFH5ktmwE5fyse6g1pRzNE9TEzjBjCfU5dy2o9x1AdzkNQ2BW8Mts",
  "key20": "5KGfVfDQfmKPGK3PDr8UW7GzNBRJhDLFvu3bzV2YPjqLaFvad2ESQtyfTgwubeKeUeKQue3XSZwdCgK8wH6wAdMY",
  "key21": "5JbPDMrWATaud6k91U7iVm3yE5HkCaxK33gfKjRrJJr1NF6G1AnXTS9hZP7NQVcSqjZhPJ3gUVpDmrKW5c2Kw2L4",
  "key22": "3p9EQu6BefrYALSTbehuk21UFRGLFrg5NkWy5iw3MNUwV267kCyNAPua8DyL6p4e42C7S7k8PXJYCsPeZu9SYCBQ",
  "key23": "5h2mAo2vZMNDJw8eAvArSYaTdBiXJiHreG7z6EnZbAHJNoAHTpd6HjhbNqENsoPTLcXjkxg2Mk9oQ7RrCeXnAxsM",
  "key24": "2VjmRSJudH5Ch2RonwBCAjL5onaHhstZNYPrWxZ4AsMpceaQhUfNb7jyLQjWsAWQYVxyWJow6S9CaLzPeHx84Hif",
  "key25": "31zQzyXESviuCvvEVnPJpDio3neAEZGfvBgJQ2LfLCZ3CZ4HWEXtdDFnSAVQrXfvTFGMA6JdZ2iKEWJbsN26s37p",
  "key26": "57ge84uzdV7Abo2MvngzsDFzT5idiAJNfdr9A4jrA1epagikBND8XoV54X4BMsDnwPfzbQ21BTUUuiG8toEcXFEg",
  "key27": "2inP9oSv7gLiqdP5HoAsvquFd4SCz1nBnwCSrTEdBQLTEmzFG3Lig6ZV2RTe7PoB1xUGj3XAGXC4a5QRcWVscETp",
  "key28": "kjB7czzj3ZRjoaUx3QPGUxV6EWkzHhAc7N8dbjsPdRFkJqpeMx2XtXhhrLhkkyxW7M94m6t3SGmGesysUx5uks8",
  "key29": "36ABF3aLhnBuCfL5GT9JSbfUZf7xtqrSq2qRepJz1DcVSvMc5iEe5ppBVPnSv9dQsEWutxVap2LaHdPNfzjQX8H9",
  "key30": "2LGwdC757iMWdqCE4ryKpGGFAmcQaDNJLnJA4vFPwgiJm5pZ9YKqVM664UZWZq7qpNc7mbxES6w7B5w52wd5ozR3",
  "key31": "1X3p4wUbBDgwc28SFUXg1nJ42PtX9P4ponEa1QGE1zR8ec8dnL1LM43EyPvi2oDCKNC44R28KvKC3uiUV7JJBgf",
  "key32": "5Shf2KEnPg7YciKSYLhmfLrNBPvSogy3aWbDA5sZkS5yL69bpv9EBbcTXYXQokKZeiiyYjFUYx3ZJTw97CDdJzJf",
  "key33": "2UxwwyQqy6YYUo8n5tQXz6GZ1uQGQEF1j9A76y5LGZXtc2RUFiwkP5gpj3CgE3pLvfaPWEEL6ACi22i4MhZTA8kc",
  "key34": "ZUiEEzLcUPPDvuvZa7e3t7SCppyRnjbHUqgV7sE4e7cy8nRE9xYumT6EFFY3RGQ7uJeY6MUrqW78tdEJzhtGsDe",
  "key35": "239HbAU8H244De3W4zb2fqp6jPiPbR1qYvq32tx3NURKLVXjW6sRExYAXrByXvfomzs1StCBTqzTDU3AFNj7ohcM"
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
