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
    "3jBqSPu1uWxkqVJE8vqvgEiJ6KihJSnvTAq5yUxNx9hruchw4grbSJdeapYKbfMMS1zbj3M8Wpvi6TS3dJm8m7fF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xs4KKvH9oxgDRPNNuKZa27YwrYLpAqzwZzVEpUJ51EFxm3NSUdhSmDcbp1rf8YSFPVEhor3JftWLpT4xRGhtpiZ",
  "key1": "4v3P5tiDvX6g6UjmgAf3WBakKSiFaf6vkmBQVFM3wnjttJastuLELc1hQt8Nbf2DbmBwsg6ceLwM1MWSPLr8771H",
  "key2": "rSwtMsad8UWLQt4WZvqaLYeLWDFd9qXJRoCm6R9AdM3RMuNCNyHtkU5tNmT5hTpPA4f3dHhbsqQRC3URAAHFjmr",
  "key3": "oJxcUVgJzRR3ffGu1RWpatGfxUaCcyQotCKJDwMbGPyHrSakrfPqLnSVfWewk3EXRU7dVmd6rhLyvdGKSxP9UZL",
  "key4": "5g4rrpRt8qXFrLhue988Hbs5YbyHPgXkZG6Dx3RLYuCxZrqVrFVbnWqr1zLCr8pqVwasTezRywwX7SEkUp1utWpT",
  "key5": "5KZRQnodVpoeFdDcSw5U6MhPUWPyYZad98bADgS8uLr8ucZsAbKhDmwb636tLMNokidGbkRVEgHE4E1oSzEcYESv",
  "key6": "2b17UFSyKxxy2frREb5UhTRi81LpidHKKExYiuw5grMhL2PLaKrDRg3RiytrfJjzzV2j16fN7g7XUXi2hMky38XR",
  "key7": "23SBhxiz3DRvjJP3wAYD5ANHvLi8CBLkBLvJSvQarxMtArCJ8yxzoSuor5dTKuT5ykDQdmYVTK5orRppHmEhfhrh",
  "key8": "R6aXdXTGmYqEJZWgyYhGqZ7KtkRbPK3CQRLKE7aVoZTSyBe4aP91JZH961s1jnEyNSEhYt9bkV18XQQN9xmK4bL",
  "key9": "63Q3Nbh8Ai29SKQ483VQU9sHLm933nPedG44AnoSbBkVJDS8zixuwN1xZGPykgcuxW5AFZm5VGrnUnhvNooT19XM",
  "key10": "dF1xwRqGhijNLpEZfdqiWGWVsUSpFPWzPWnYhU6wJoaLWb7ocGXib6KYKsPiQeEMvHqYfCFFwpwyhmy1nQRTeGD",
  "key11": "3gPD8Qer7moyXDKu1eRVMkLiEM3sQ9fqYNttEEYEL72DQ2StmKRBnLTQaD97qryzwdFJzSKxF5KJCMnEByHJbxHS",
  "key12": "3wLfeXowbCHKGRHvyXqjfL7Qq8p7pSmGcUWCy7uA5rubQTZo89Us6t9Dpnr48LGira1TEKFANC6TD3gLsy3BmyL9",
  "key13": "2osLck7XdpaWv9J94Wh2MBbzbiFomj8wKbWoJj1eokPCvoGBPDWmLJh1VC22fmtc3YHu6NWVFNxiPDY4bkXnEjxZ",
  "key14": "4LLnX6QRQyaMhfq3uDQXB47j5HUr8Lgg1Z9GNtLe9s6bW4qmcziQiPUeNq5BMEnihxBjxFJYWUGTkJSYzqDPKuHa",
  "key15": "hj62RR4jkYjEBGUMW4v15eVNJPECqKuYcGmrFRD9NasadSrxucBmcsWcswTpnUFZ1QmfKefVqWsxAdL3bxg64rU",
  "key16": "5g8uoKfVQmTpQyLAx2ef1yUPSJQVvjFAmSvGSMaQbnfMYWFLdz5r5netm3CJ8jksQSCAGXspkCs64f9jVCr2y6oi",
  "key17": "31yHJtpKjfPriyrTivuEN6CufT29qzyWcNFeqrs4BaCQFwawsaPXvqRBUhQD5RsiT1rbM5KxWWNWFmnmjjt1Sfb",
  "key18": "243WvhsDAz1N5RvjnRCVEZB49JbXdLZnnZj4BhqRuUfPmtz2Eppa1tEfDGF4XrXfsASMCddmhi8b9wbYeYd4783j",
  "key19": "125HrHB3MwFi46neYSL6Nqzv7TiifjexxqrcHsHeKX1DDbVDnvpFKfuZ5A9bevJQVx9YRL4nZT5sBmV6Q7kRXLfR",
  "key20": "3hS3xcADw4icAtjCW3VYevJACudUxsYqWig8yQ2qsnAX5XV4UXrQGMxwAGKc8PPWGb5jEK4iCMAsemc3B6Sq7whg",
  "key21": "ZZjYrcNyXWFs3EA6igSgqDGoLX6jzjpNyFGsUesWEcW3sWTQ1WX4KSW4jtDEiMWKHVHSmcX8xEA3bXpA7niSehe",
  "key22": "3kzFyZL2C37qrMA2VvCMLJARJ3uAwe6NYuCUdXwKJTkZQ5MnYEsmvX56yNXoFxX6riANqHDzsKPs9RbDpfNmHx4o",
  "key23": "QpzMdVjvPMjC3vGjvpv38APnEWVpiVQVJvzbS6Epv9Amq8ojRywxUqbY5muh17tSyc1A9jTFA3iFBHCWGs5BWFf",
  "key24": "24DDQTWbmkrsvQfB2mNN6SVrXeg1XWbn4bH1LGQkJC1fCWkyo8LZ6gFMpzX96V3L2cwPu9cSqmzWrcQTe1EtWWqE",
  "key25": "3Ldh3hWZEjgaBthz73MKPkYG14nyy7GtrXYd9ooG86MK81SgbJQbRkscQno9sDEdnL95Gu4eRavQ6zgzmh5RoY9o",
  "key26": "5N75Li2DbzaBYjnmG5Nq3mtayEvagBuoT5quAM3qf2G7pnTC7w96nR4zDot9nbB6staudJjbVfPna64Y3zyodSHu"
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
