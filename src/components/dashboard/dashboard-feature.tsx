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
    "36adQpVbsSPHBVX55RTsXeHseeMpq3tj89yxh85fTghEH15F8qWyw4vq9uZucDhjmQb3oi7UoCBp66NFHvS1KsfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uM1SmknTkYkFFCHTo4RcjGRrVNBigCP1fKoELXEJ4eHXGz2LkDWspJrM6XnR5GbuLB7AqhuFQs5Ue4MJp3EQnud",
  "key1": "TRCkaBgVfVL64poZcuuDRAgrvTfibWL21cGVcgpVnpD3TWnBnagPCUuT5hGvNnujvtWUdwTEvoY9Yt1fBiqQLcu",
  "key2": "2nuzaNa8yB8jcJTguWoUWeef4oHnmFmRvM42D2hpgMJPe4c8YPQpZjoiGvXP7oZ6wnAQggXEKdATFYCjThHmWzB2",
  "key3": "4Uphfbcm37CJ1Hvnev8ekAGQaF4jGE2MJ8DDkEMHSXKjb8Ccj9FUto77txKiQmBHA2NpukavTPMPT2YY1FcUi3Un",
  "key4": "dd5QtHhnMWnes9Qn8FogtJaoyzXNA8VF1j32JBKkYmN91pThdMBqEia6VfYrob1jkVqHPmCsd6wpbFFTzsqk1R2",
  "key5": "2K5LAG2eHc9vVB2ovDtgcqjSx52cptzDtyTEDBTWF353Lgupao6jFU6FUnVv1iDq4zV4o862VtRc6PYyLJE5YXPd",
  "key6": "Lo5v7j5YtZrMvZ38hb6zabHPjKk7CdRJj7GvcWuSybBMtG4WFNg7mj7DVcfzj8Atcmz5xh2Tk69ombQFfE8QvDy",
  "key7": "5Yj56rdxKJxyrg1KgY3dX3tbUfLx8GqshEt7QoJwaQBC3ZnGreeVbNY6hLWiyyDfKvux7wC2TaHip4xTYtZNvvcf",
  "key8": "SmBvfc8jyYnV7ZShjgmVhDNWgjeDTR834q1VzZAqyj2UN5PN3cja815gamaqnQruKx85KX41tQdAtm4yHwXZMj2",
  "key9": "Arvz35piWsMFXrA1AHQG7UpH3DVNRDK6Rzdxnfg4dFTs6Eip9GXwkKj8JaEKwpx8bceZB7Y93gSQVrv11c55QRK",
  "key10": "617LQxyPLh38yShGxsR6Swf1SPEYQ3oNhmcWxXbDXN59XAmdmndAknZnhUfmv1wDGAACXgv14Eqt9bRjWseoeQ9c",
  "key11": "46NVbh7iJsX22UbKPKvQhTmYyY5aHE62HnLVJbxytBXnS3UAwqdnVC3MUcE1qoqdeWRva16fuKoP41rTwbepbCpT",
  "key12": "rxiSTvbwKmgQwZP34VZ6Z5jgXhp3QF6XDpynvgJSMYhhQ2jhoUE29spvZxrmapvMTowFHf2ZxwaU6b28QRJmfU6",
  "key13": "5cfjrE38vRs1t3yZZ29YYhribA1EHze7oAikNE27dyiEb68KPXrL6iPTkea1qYSwxh5eR9KXM9UCSEc6RjrPWdKX",
  "key14": "4tDjh6vKDz6jvSy5KHX5Dp6GTTuQjeCFruX8hSWrkeQGrJXwPm2HiGRkMMr4n7uCMnFGuVBWgYzVeRDvHpG8Ju4o",
  "key15": "5gESpACEXRZ7zndZ6yQQikvU2MdhnjauWwPhcRofkdmWumKTc4vcq1HNqNqt84d2jA1hXHzyX8xee6PMs2JjXLBP",
  "key16": "3zPreJdMQ3hAyYS8QtJwqFcfEaq2NxS58D5qzc9TiXw7JgPeWpB718sTjeHbUiUJfGtzDvTAeg7mp7K71fbME45H",
  "key17": "2icpJ4JCdb7VTEBKTk69CaUET8essZq6YTuAmnaxEVSeyV9K4FF9UYTy2VTkdUAbwjQrErXqJi8EeKMF6JrbR68n",
  "key18": "37MBiYux34bG9yMiTuKjt6Jq3ygQ88Ld2Ngc2aS6uZdvxtCviGccJbVwpAvrSxukExbSV76U12PnWDS77CjNkdXi",
  "key19": "3P5j1xsyrYx5kmRs8itneBLPu74TKdK4xwzFMGSd1avedxLKfDnCWcTaofGV7vqNWXaa5jK34qGsFUPmwtytfGCZ",
  "key20": "2hCuhhkDdh6CH8nHyGzGjPJrR5V1iPzs3Q8e4X4jy4JPhHYZo27cVipQT68K6LtVjv3aPHfty4soYt7divDbjpj1",
  "key21": "5RQs9t1rxTur6gXKJLbtM6poYgbbXK634tyeU8PPMN1xgU5FJtznxxcz7XdodYqNxxeUeCyZRTNXyx2nHzvZp4Ky",
  "key22": "63u51doPv4xt5brAbCtoarsshJhj9FGRXdY933tF6PJPyYjFTYD1Cv18XxhKEYfigrTqjU5eZvG6ES5PtjbeWcWj",
  "key23": "38NgbM3xbL91KHhTKuQ5AwoxE7N54qBA42qNnAaxiQ93qx5SQGHsRPheWSXDNaFZ8LVLizLhJPduCTffeRHGNQMU",
  "key24": "4BRQGmLZ2mdXmxrR4ZwaYuNFyH7BjL9BVaptnCVNN26o23Prtsq3bgvDcwCvh5PfphwD7d7LavKTs3HEzwtWpVVY",
  "key25": "4bJzX386mZfsAjHZd5N8BcEwjP2Wdvxts1t86SmTWLL1HhiYRCT4QXPR6fmvpDzP1MtsptQNJ2ahXZow7kvL71JM",
  "key26": "Zi1DLcUxS2MtjRbmeYuPJyWnVjeVwGBq6D9gPW3P8B4kzf89bY1scqrU948YPToLiRYywCJf7hDdjUFnzxSVAFD",
  "key27": "41QBXkALKpbnLRnwiH3P4KLAMqFdXwy6KMy2pRSvt98K1Wfq6gdjs3YNw6FCL9AxgktBF8nEqa6F3uxQ7oQEjBSC",
  "key28": "2f4bYuykghzzmGbNAYkwSbc5Qc35StDsLrynMH2wSGzgtUYZXjka5gXdbKzmQywwrjyq7V799WEv6bU9Nrv9mGjY",
  "key29": "ckwAqjjermo4Z4BW513t2Au8FzqSzuQnycKitKiodnFyqiatTpupnveNGYzjkAygNPXzrvp2PbtVTtZpwodzP6B",
  "key30": "Gk86FikJdt2atAVusTQDHsGiv5MeZ6188K1sDtDmL2cbuMruavXvEyiZ8R4knS2aCgt5zpFxRn35kKHmnVTwTFQ"
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
