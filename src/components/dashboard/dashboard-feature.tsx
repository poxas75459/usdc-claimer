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
    "4j2XsQztRyGeT9Fa54ZmwPcFaxUeGhNcmK4Jieni3Kqj5or5HSa1fFFLaMqd4zfPnpz1wRUcMjGbhP1ryfe2LSJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jpU1NsPHcqbxtiz4goPAPL2NKyk5rtYrynML3TWpYLTaz3Wohjm8Vcp1yzngV1jR8nfmLcXAqtxmMJRDgHEjmLD",
  "key1": "2GmVxTR7iDwuwFuJrFXZCytv5AnTdiJvUCd2ghJ8WjiiJwEkm62z5Sf2Ja37L57qwifiBy93LFas5MHC6Rrpxb3a",
  "key2": "2ZsmCoMXnudUNdJ6biZqxm1tgsC3G6CxJ1N4z9zj5FS3PdWxytwHntJFtFEtCqGyd88h9vD9SYKtpNQj8GBYa4s2",
  "key3": "5zfUbdtoG7iHpN7PyjcJiWBNTjLbADwq2cyNeFyPDTnobft86v3NTynRw9wSdFgSmyJEnXMSVFvi9BsTsoC7HQPc",
  "key4": "537n6hvTUKbaTSVegspTEAxp53mKVemcTp4ghyFu9W6NUJh3AzsJ2kbsUGQ4C5tCZi1VQ8fAQFCfuqizprs56cSc",
  "key5": "4LNZBbXsWDVBXegECjXAmNB2s3HTvfWtT7RvmxLtdAPFePVJ6u9r7oK6SZ66KqJppvARCm8NZ6kLstUE2xihuzLg",
  "key6": "2vrMPeosRG7RqC7YgS1Jm7TTGs6ALtY7cjC48joEuiJ2VZ2C6QxJ14RXMVpCr2PGkKBWFLGhJ1V65jSrLmFvjYFw",
  "key7": "4F18TqLAf4x775YKRz4CqhEnm9rzUKu9eTUQ52mJJ1gmHevkDtAX9ZN1LCTb95UCzXyxWZaZZu7hisVtFrVu1UCc",
  "key8": "2QcyvmqGxfgCnSQJViGa7AyR5tt6FgS7rEHjkjENXmMiBakfgcDmPnvfNG3Z18VBYaE8GR29ULdrPKUxymLRpjrH",
  "key9": "29gRZLbk6Cu7oCpEt3DMLEJqNSryb5NqqCKpx5TSBkQMNZSYVUdb1YQLEZ6zcWTYJEuxtA69vWzBBMgL9XM3Pg1Q",
  "key10": "4ds2RXzJajFUVg24wd9F5kdQsQTs5ULQfSSeP4jjnpbsQmSvDVwj3GDmVkWuwXBhxRiHXvJ9ugn9ebnUkgJCgeNQ",
  "key11": "4VVSx6w15jxPqWxqPWGk167Dww1ZAad885BMh6L9Sy9zeUueiWmPo1hoqi4nZrTs8pFT6LfwMAsEehDWJnoW5aY",
  "key12": "4PszVNiMxPMfSpntmg3KgkF7DkMBzx4g5kimvs17kQicG2Hx38hBxH5qkK97yKj3scimcWw25pazCrCy97H5Vknx",
  "key13": "258wETjQhKyUWHbY5CfupYdLX9EYToUxBJ2E1ns3WCab3Xdcgf7eLQziVs9pzfCY1zjZLLsTcM3199MMThMYGU94",
  "key14": "2gehe3n1yyBcnTPNfmzscLRuRkWPuFTSuYkn1stitxws2v5TQxYGMwefkFe7Do9xRo44UgkoZnzqRzQaNiBm3N3r",
  "key15": "2RUyd4R2p5JVAhkYPEVh8TenUxH8X1pjXL4kWKM5nuEdhAML6kts7t2vpyzv5MC1vLiuaJka8EP8KnMuDk1G96Wa",
  "key16": "5A5oE15EbKYDrHkGPHkxxCxxUf9a3nMRDLN6DY7TYfRoirovqc8fYuRjdYRPbKiWsMu3KH9gDfzaucue2E5D8Vge",
  "key17": "215HYfMf6cJHY2BMjYv2AWaPJ7cbgycMkLrh91vsXnQ1JNcBTZnEAF7zQMe8MJMPqxyPJEE4Yta9RF7QXzqiFzvV",
  "key18": "3Zas91CSayAbgxYtvqeLhJ2V5FyB26VXMYhoQjTznY2nMoy1rjqj2kfYgAXvnVejnQMT8ketpzEQQTWTTartEPs6",
  "key19": "2XgjTKcnjGzJbg2m3Dsetny3JGojAPWUGqDEZMFnUCq7uqcEXm36KxXLUCFRL5K1dAd25owhrvkNqDJSrCsF7zde",
  "key20": "2LwVDowVT3cWF9u2rrsE4e4YLEDiDV9BhxQGb21hzT359S4LcWVJE5QctgVHT8mFHkztpWfK7jJZBSMZCk1HdSMb",
  "key21": "2esQToBWWvV6TLmrsFnKCVGtNvHAe5wiqchigVPpF12GTW6W3aSrWFvGNMBiF8e3SZh3tH99gqPEcMoF6pW7WgNm",
  "key22": "aUgNkSrVKqdqGsdEq4n8YrShTi1TT3FkHJtiB3ZNfs1qfmWsKULy51JnNSZDiyQ3ZpftHzTHEukfnn7WjGzKFAg",
  "key23": "65u2GkwP6hnbrejniQS2NZwJvuX7B7bz1AMdYSGwapsJJugKRFYBEasoBPAsHc4SPefz8YbwR9PFcwTwcj9WNeGQ",
  "key24": "Nqqu9cb2KJEwMCU7WZPnb4RrhgndAV7XsdraW77W89YkFicMrAyTQhKcpJ3P8FMiRAPyQgtYYk9okBCRcAh2mN2",
  "key25": "4458jDcAuWxNwzX748Apg3r9ch6NbtbPW9U3pFJ5SbPzrNuDckcEWMsrgNB6pxSRMApddnUjgeZepDcncYRs44ge",
  "key26": "Smdw5eDohtcCe8NuSUEFumcUyHNZkLtb3PHqowGmgskUtM9JoKw95gp2DcFK3D2DXnnefCyqLExnRbzCLQT8nH3",
  "key27": "3iTDfAiSE94VquzVu6Fiuy8jgLGhvCo4VuYjeDyYddCXdHUEbZMCpnv1RintVHD2bM75UMtGLEbbkYtmR3h2gHtM",
  "key28": "CuN1xU4Ugt2dypgRDfawErLBuZ8hmwBt8xUpBTr7BvFBP6cLCB8C3AXMaRVj9kK11dHREnKEQywr3EcbwCCQz7g",
  "key29": "5x2gDLQCSoH8PCTL1or2vUXvWhtKsnc6Xx9BwtSfueUiwJwLPztr8z74rrg1vc9qNb1chatiaG3459etHQY6TaFL",
  "key30": "42zdxJuCQW9ZZp8DrYd1WLBUbyP7hEqGZ3HEZt8jwDihLcWD1JzcrBKfNFhUEW9hqJfUPNWbC7ADHBwt3LWwDWmn",
  "key31": "39BurnH8XGp3PUVeeUf1zFiPCR6RnPpHQ6rUG9ZCRmcz587GUrbjcywLRSULQncmFCgozvJygrT9RruMGteTiRVb",
  "key32": "3wQZPgudAFrr1aPkNcPHEBe2MNcJQ5azqWex5KEcovu87cJzPxQ8D7VQjgFvu1NgfpYD9Dr6uuNNJmVUfJ17zm65",
  "key33": "33KLu6mBCWu42oqyze9SBuPEYUbKCqxJbcE6oHEMnnEcNh5UvwWSSHL6UXt71DtrbEX4xT6912a8uAyoGrJS3mzj",
  "key34": "5guwGng3buPz4VJvhbJkBXaKwK84r4yN2wvY1WSGKeBiomi1KxN9aBiGnAUm6aMWGjLKE59tiHxv6f3WwxYXNVNG",
  "key35": "2fm5HLViuJimMWPguNaeLELRkMEqQdBLFjTWWPNS2Zd8G45aXVV7JqKHLoMFqe7JjQy5GweiULwbxM1BaJfsSfrs",
  "key36": "2SvXNNBvV75SPJL44YcHaL85isWTRrvE2iGZ1AxpVy6J7yz1MA3mK1aHxi5ELrNaETrt5gUafJn4Z6MxtPmFXSwW",
  "key37": "4MmRVYpqTbMgZjb4rWC92co1baTbNiNeUWpBMjrUKNPYniDPhBfLCJ5vUcj5FydjYjeWVzbVjQ6ZMmerCCnMWMYb",
  "key38": "3papBVooB7HggQ3iwmJEKKwrmZs3EmUairPK7VEGU2dMoPBUJjCExhp59vn8i4FFy7qBWriMcqJw2v7zB3vkFsrx",
  "key39": "5SqF6MQ9aEeuHMtKNqC4E6pagQvZEDks93Yh6c6ZdqK8cHbAeEAhhjLjYurcNMb5NTDmSVcRy1E8Q5XjzsA2S4VL",
  "key40": "5HGADvZPkY1Bfdoi369BNuWTXTwHmEavHfLvytwN31upKxx7SS5jd4kCpk1VeoybUZzzAFRbLXMZbH9MQEXfUxDw",
  "key41": "2wmtzHdfSuY4FPk49stPbSKJhEPRgftf8wW6fzgHQ84EW3iigUMAMb57itMnmiERKomw3ofsrTKH5P2vKPDF95tP",
  "key42": "4bg4WpAzQ3FXT1A27vWoYNpac5FnyALa5uvvwct4CfLzCQSUvoLKUkSZgsHkoZWjpa3qUN1q2yo26cP4FRKHftua",
  "key43": "aMP3KsQedC7mLw9G1yqfJc3fJV5hjzH1seNDSWW5p8eWoP6PAG32mmR4SnARuCzBcdeHuBd2CcGYg2cVBSxZJw6",
  "key44": "3wxqQpYAspQPSaHvZxqondYHJriXrY7NHVUVpiQruCWHTCFNYzWgnaHHzBJkz5Qz7bGV64rQsQDg6YdKRsCHRyXb",
  "key45": "2yz7VQoQ41PEwXkqeJAFpwjQ8mkXqQa5mHmC4DiLaaxeLB4qEL1iRV5qok3yHuMjpHHor81epxk8YgwbjRXMSbVv"
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
