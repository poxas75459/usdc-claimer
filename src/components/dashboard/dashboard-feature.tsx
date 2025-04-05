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
    "4joLGECUt519ye3HPq6iRM82jXvMwcnho2jApkLNYoFXXqn4HaVKavet1AoDH5dBNu5cWwq4LoLNfgmfELseKUMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VbzoRDmFzJJTFBErxggrhH1P4wBTPuUwhSZvgJuxXFg6VgAoDuqcw7f7c3rioR2Bs7mSTLnqgUiyJmfNhmjXA4o",
  "key1": "4Vx1XL7EJfARNLZoQvxAD3A6H7QVQDvp2JX981wcXZdn7MxPepvC4ytigPJJ9Sw5bLrbiVRL933S8vgS4vdr53R6",
  "key2": "3Nimqwm5ho3VHH4Y7qd6WJjJ7nH6BHdSoZKVemkZ9RDpDFDXXHQgvjR7FCqXyouudj5B8guhE3x1NLh49yYzrRBh",
  "key3": "436UPX2GCGU6ckMatspgAzmxcDE2BgPegVAYEvmF6JQtgJc3SsoGPk76w6PXn5pUXvLexxhmAi281jGYXap3Xuyv",
  "key4": "AstfywtGiohgqiVbVLnVbn4yfPELpPkPBoBrcfsQdRgkhS6xuqD7VX2MMAYodKhzEWs3oUhHjHt4AVrNgcBejkH",
  "key5": "5kToS9UfMb411yxZdnpNnWXUoXcCrxE6NDDvSykbgxDwbyWLDwKTgxC2zUybGjruYG7KEsaJZJdeeE5vNZHTgkxA",
  "key6": "2tPY8PTmTLDrf45QsivCyNysGLYUMVKtBHZnrQ9q2bzqsAucZpXhzaUUhGMKXndQYJJ3pLu2KTV7xgf59xmQUddx",
  "key7": "3fsDhD73M7nGbiULnhJxgZuPdRJKK51xqMid7bGijesT6tRd2LnRpopk5jWpgsfcsojxFGTrw6qQx26NGsrhY9Bj",
  "key8": "57G67H3jd4Mkq2LUZ2co6ohAphrjcs4ioRBSdNfuwgRCP3ynLcGFbcdXXgAGUfepXPrxjWfAHC5C7y5Wagem7x9j",
  "key9": "5g4vXGPSmSiC54Qq7XvStYnQ1rVFYwn3QAo9AiAiyEFBysSBPyK3HLfvfCgLRKZaY3GAykP8NF4WN76bphesb8cN",
  "key10": "3veekHfZ9d8XLGgVBCQ6Rc1QmUTRh1jEP3FUFt9JuKjnir8UiLSCajkZm2qRJRctBPME2poXxi47xE2fcKvZ7JgH",
  "key11": "3Spz3RyyCuodCqZHhoGZZwMvz3uHQKaehtHct22s4uR7KvmH6sdEDriszjAB63m1KEwS32kwhDjBEQYKRoYrSbDf",
  "key12": "2oNoVq7jS4Fd1DxwA91Ht2ukut7Q4KwydhfthMUq8oCSXhiMyqWmsUNkt6roqC93pYeLw7d2ghG9ZSrfTMT2MhHT",
  "key13": "3qVQdfZRcPQ3rzwHt8pVCak8cEQdhKJ3rrMc8w3AtzJeDey1jvPpeB4vdtJ6p43LWdS5uWeVuDwhEKPdyWfK9owS",
  "key14": "3yn9BZ2wCeAnNbEkhgMhpkRusBE66P4Dk1HbrSJPvzqozfodvU25EWdbC2Dm95kz7hRUnNmR6x5c3mLDsQLWYf8E",
  "key15": "4c6desE34PsSqUX6xZtnWBsMi3FqeUQSqjoNSsMQYvQdLdS8kHBsSdrV7KBXxL1YY7BweJXcL8h1sZAPKLrQHnUz",
  "key16": "2WSftYYfJPNPqWmJKztHEWCQyJ4E6HBoZ2yd2mU953so1gePxfszxc2UFKKG43veFjzPqAwqEitV7Duvfg74nQaz",
  "key17": "4bEtDfFNoHNMY7YUk9xi7o7SqzTJnD6Ks4mwhUrmtymWBkagqhTVb9JXnm2gHYREXeoKgsv2paVmpuAP3xb6MesE",
  "key18": "5BhzhJ4cYUENBuCb9ym9SZ734vmgTEDy6MkwcAQHsbfcigowWBk3BgD57B23HHhc3YGyrkqow3WJwVTTCmLBWTnv",
  "key19": "6zj19uzLEutRL1mh9gJnvYxYbqjd23jNWCUr34mcTyvR2MMgHEkTmyu94iuFDShUupm5puGRsn7646rtQu7Xocd",
  "key20": "sYB5cTvXqZwPxnzhkBkERWoHQG9Rrqis94abdConnqFFUocDq2DBGS2yjNC5fWrhYezPcpb5LZPVQDHZvvC4Gri",
  "key21": "2NW2anUovrgA4UTnJ6H4R1t2jqdoKRkyoLmj8Ju1Ei46fDQv7xjwJcWKWpF3UHzXa11nfUmq2qMdxQtfn2HD8FtG",
  "key22": "2TRDMvfzNEvyXS1VGAmCgPyuLALsc8NK6Lh4rwRzgr9J8D44D3wjRNh77bVXhtEHnELi71aDibxxxA2DxaFgjvEQ",
  "key23": "5Xkm75TBMxSmAHaZJGh7YGqAkDv6duwjiU1TDhebfvky5xn8gtgDNP6JCNmgJDbz4Kv3QrmRVVquWebdp8k6Xi3b",
  "key24": "2d1ZmwPoTkBnTvh5iyW8rz3qixCon3Rq7Smg8ijovxZSoq7maLSh3Y2Jx52eEJjmq2ca6EKHFU2NoLAc2Cx77yVM",
  "key25": "2wdbvadaSh6xw5Q3zKo1pHMxexsunBrugyRJRLqM89gTQGX5ZaidY6ZszKeyhgvy8p5opPZRiVfsWrSrSwiio3PG",
  "key26": "64Pw6GHcoP7M5pW5C1bNDYVi2WYYxCJaTNHnybvAXJKxXisj39WjWJV26aUZEBrLdddBaEKR2vpLPt9qSXA2QXUB",
  "key27": "3Za8sDALkU5TUSJ7GfvDRUKv6zYmXZZmv34y3qfZhJ63cQWHbpmxBLBwVP8py4M9RkQNKyf38bh4nwRpAUFGjFWG",
  "key28": "51tfpmpfErshw7PuDEPQcUY6nmrwbWFfyEebdirt8ptetyxmMCqy5ZBVR6cx2vV9djmrfsX3C7ZPzP5chzgzbK9T",
  "key29": "5d5E8GzjgHPYXH11yHKRAYFMTTXRTMaWpDh9mC1zH4tWzBvyu1yDeeuFdQiHyGVhEz8bfK69bPq4VvPW8WcSM955",
  "key30": "3g59XVWcukngaYsZtUaJfV4NND3ErdqEhqHeDVy3gwMeNdjmwoPXFhFepMDJWm8VAUZ5F9o7d5P8F39CyQPmx317",
  "key31": "47xPMqg7wTgGFxk8Ef6HvrR3HPrnk9rbPPZngjRSAUA33etJMQF3F7GsT9j2vcXxSpyi8nYaCe78uExUo2s9srwQ",
  "key32": "fErRxWzSDZyfqbkxmrzeVrui2wYRMiuQYC3izHV3HwuVRYuRVbVperWtbQBT6Uw5p3eAYwQU2eTFmrK5KHoW5zK",
  "key33": "65iSVCLwwUV3ChwzczNMGj3WwMPFUUx7Q3sY26d3eDThZm7CsB3zLodbs56L3kL2umirLRF2F44zsKzxneKYRjMp",
  "key34": "VnbGiS3AuwU3iwMHAYSkTbubDhPgMkNNWzjGsXeEvf9osdEY7wDJxSGmSr3pj27UYydhXqUMyJvZLfBfCHmTQDK",
  "key35": "4JqD87uH9rgKKDP5cQ1A9eyXUYxiTBcWUnwkzcsUpkruSa3R6g77LGMrNiFukA2BTvY9PVP7ZcAaq9f2e1fnue3v",
  "key36": "PoUCsZ47QGVmbxMbXo4xdmJF9TBW7NscHhkxQF7LkdCkXZ3bNSVqhd6HhK8yGiP7SiSVBWBXw6JwJpWsdQb8sia",
  "key37": "WAdNdJxdnJzEiXeW1kAnyKSCJ6Pz3CJJUcvmXaBSWxowBMTdh53TSUC7WEM5e5bkpt7ChsomSAS6xPi6y3LpSnh",
  "key38": "9MFdfXsapAeZbtu28HXfm8iw1z5iWbvUmj6q8aZQFhtWJgoWXkX2h8qEomFAf1k5u5AZbqzWNsz9XYT98bb2rhq",
  "key39": "L1cJDMLr4nwT1whFP8WLvmYfnn21PRnANGv9V9DoJaRxqhAg2iiGchbrzGVd7KCRE7Sk77dLsL18KDhK9Mn2sQU",
  "key40": "4VEX9WwNxnsE7w4Rd2MAKNdnhwVb9Ep8yeAk9xU8zGYxTsJEhbxjuXjK43zQ6oKJMnfQBt5d6W9n9sCWQsXURj7m",
  "key41": "4tmrFJMkPQm2M6o8npgrKpmvKkjUtSk7BkdpuZdu8DeUuiWCX2agomP9hrVrNgvctP96Dexa9bsJNoDyApTpZky9",
  "key42": "vPSkN9YNxWdP25hSoVGKTGUjvTHVWUDUkVVopWVnorLPokhPC79fxM9qeuLz6CGBvHBMwwCFa51CN2Whk9RzQp6",
  "key43": "3LvxGiSjkAK99hwh2MsucDHZ2pTV3GacAm9GzB49k8NBwDaUj1Dq6CQRKWp6yZVP6JFAu2nHFWxuQMuKvGtc8sp4",
  "key44": "31XTz7BCqwVqBA9txmUa6ms96EpVeaRfFVPSXTjkGDtgDp5ZtfpyucugdcPjwNSqJm9XrnNHonNy49PZ1jNRrisG",
  "key45": "24esibSKrxbkUKUKJ7B9ba6iqEuPdDWWkvU26mL9oFd4Tj9tJXRSgdPwcgKZd4zkCGABh7oGC7w2rqDDmzwTuCUa",
  "key46": "66szoi6abFwx7hyLaqEMG7wNobaB1zKqcV1E9R9KyP176c3fccSRi2zau3fo5vAQQLKEtBim12E8c5ANF1jhDnks",
  "key47": "4AbxhKytHeRd6Rb299YeBGs9c8oj7yLMNBUgRnnCgNGhS272etV4Ne7s2nS7yLNQ9Emr6izmfEcFoXKZYqfgze3w"
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
