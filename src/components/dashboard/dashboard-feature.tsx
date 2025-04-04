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
    "aWdE82CV3iRALDrY5gHCkecbhRYXxHA7jnaMR23kvSqqAZ31C5qygwDGCjzyUxmY1u7xj3K2gG71oUWgstnbMAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w35EnhzQmYVV7T9N4p9qdqaAjzfAoz17mrKkdCvWuAk4KZpJFh6WrTN1GcocEQGutRbGzABzSsdufkR2ra7kLZS",
  "key1": "44scDZdSg44wWGMmsufT6gsUmHpaPzgyFvXyuxbTATBtNM99RCHBiZ1R21SNy92vwxV9PrfGTxmQ8qBpokX2YVh2",
  "key2": "2h1pJnk9MzC1wmGgtMqHjjf7KEhMboYwKebPMwhZFUpDLpVcrmPLSPcR6FqbVQ6kW13S2qsjjz49w3WUV4T8kS5o",
  "key3": "2BP1Pkd5BFuDxPtFoGCYVa3VK4FLTeqxWE7zkuEPRbSQ9eoowkZVPyLJR8WcystMPkXJ3VE3AqHaJN9HxNxvP2FQ",
  "key4": "3gU1T9XZ6iWf1pzCJ4Lk8V9A4MWyL6etXAFa5jS8z2J1TGDgjYEUSr3wCXixDBzqwi1NdRu4DQ5bwVYJiQzy8ioh",
  "key5": "5HUc2wuuyABtPpDNcirfiHz165xwMGXxRWJ1dENA9WhEeEaEoTdeG6LX6ov6mvFYBdpktBcXGhi3jGacmYJi4ZZE",
  "key6": "4KaiMM41gJZypavrNeU32aCLNWBqgy1fbD7qWHoVFwPRwia635u1e1cdxmsewYQecMaN6hs7pxD5CbhSgy6tpxFj",
  "key7": "2giK3sBZ2U4ZGZqAGoa3SV9uZoAdpU5cMAskQZNxZvx2jJ1ieLoTv2h9vAWLRjqshRxsj9FQHdnS2oRQjUwyYCkT",
  "key8": "45e1mphDbmN1pBUFsEt8NdutGt8EEm112Lj6SPXBj1U5caCctFYm69mgVq2J2ijs3ES5gPrsELPPgJUhwPEpXrHD",
  "key9": "5tV8KvmENSrpuUtd9zC9zXGpw584ZmUMkNyUXGJ5VGtkwjdCzeDeSejv1MuxP3xijqRNKUkGzntH4jYdHTaz9FZY",
  "key10": "3QUxpARHqwUnATBmD17upkbLA1XtfSS1rsXAEBEvvxMs3o11v3usfrHUxV5aoD3ciKk3SpgbtPtmvf9iF1BMPtff",
  "key11": "2tXyh62MmuBiLBwxjnnzt6xF8NXdYnvfKg1hKigjbBnsNpz7pyTmK6kiD5gL4vP4qXbQtL1i2jWKTGdHgkZKpjqk",
  "key12": "2JHwjDWqMb9o7ffEysAJQPySfXU42dZZwTy1afQ2wQMka3EqGhTjyhFTmHLguA3uMvr7w4Fp5dfA84LaRK3EGfeH",
  "key13": "TGWxXb48G7aAGo3QEiZ6QsMswvzpgN4GZT4doqpG7Kdy6kjeu2fxMo1FNLDYyq2pgwviFjVtg9v98Q7bw9jVy5B",
  "key14": "dEgf12hzggfWUzpYtJSgeGaVEcSTMZo2XUdYvSMdRGrTorF9vxaDTiLnpYyMxsTZHi2FuGniZ52hqTutymXdq9y",
  "key15": "3Cs4Rd7HAZtugGMFvRQ6xurJ3LrgYPmDMVythNDrgJq2yQ3tA2WLHaXa9kLoSKmUWcx8P9fBNPdKswCfRKuf6itH",
  "key16": "2CdSzsgqQ1wTz51BjYrBcWf5BU7wVANkLpnKUSkv4HTn1AjGTBzkrDX3shKmv67YdaRsQXxd8rGUoMhQsPqYUECn",
  "key17": "4GdiN8uxcy7THiVFVewkokRdK8mHS4tqcGDKK1sasa6VscncxoHzZguAHpARMX4odri6LpqGDFEfYTnsKur2J8uu",
  "key18": "4ZrGxwPCG2DPp2bPbr5nEsM2aqPVuvE3HJ64ogq2gZwELaXKW7aiX8sPn5ASW6RhnZVmKMVou73Au8THfNW92uq4",
  "key19": "31ofJaqdgihE647B1E7YscGQjrxfppaRPfKQZwrsiGT1uLAqi8gPNEU7bV1nqWkjLMJuKQFhxz48RZjQagzyhVXR",
  "key20": "TsSBiwKRiJxU3JXLcRSCZSCK4pAhNr7iCQFXwLUcS7ZA6NC1pj7PvqEHSEE4ML2rVWZ5EC1b28PXvAvCuwVk88P",
  "key21": "54qYmgnvQiweoRZvJwvgxXxpL2ahModfAnruX2H1kjN8TeQBE6G74Z6UbPERGpNUnYXTwyF3RSswPxUDrcty4v54",
  "key22": "4iu2hEeWnzNdcxiAW1uWEZi8UKQDoUWV7y84QAjdP93ubWZD52ao779MoLgFkKwy1MakAuezNopCJj2MpcXPrc9a",
  "key23": "3gHRL8sAdAEdFJ8AA4VXHHA3WaSyc3jL8zE8kt6wc2v5ThqTtNJ7fquzL8k9Q7F7F1s5XmRw1ez6NYFz3Lfewa3m",
  "key24": "2dsnDyQaKQhfuc9BmqYYPgYStHcs1fcpWznHLKs3p5GPc6dsn1DstCWvrLGHFqdR4RjXVCykpR7ijneQYbu6dEa5",
  "key25": "qATZRnfaT6VuWcTpdPdmXZUuzbJQV7g2tHrmHRt9VYFbUVfZcuJxjPLttzkpsobS8KW3VCGkPqN69izC2iAnEoh",
  "key26": "2n5Pe262CUAGw43n7pbtgHrgXE3fBeZoWfBF3exVbxDa5wEEzj9taZQRhHdac7DVWfUELerijznd3yUmxweKWzoU",
  "key27": "54Q5jz4hbAThykbrsPTHeW3a2m46cu56BkypKcTJnxXfyZHxsC3QYJXfJXhD45wxP6iykhq7XMzCVuqiZZGR1zqN",
  "key28": "5yrTTQGFrbf4aGymhi1A8gFisU3zz8NuDHqtKNyVe58ffo69McpFeGD4z67DB9Lfbj119jAMw1vNKD1LXTZdd63q",
  "key29": "5CGQXSf1WRzAYnhSjuN2seqr3KrixYMxMRVztfX3DvRoht7APMr7gMV9owWR82WBXkSmvUbeujLzne2jKBCbmU6i",
  "key30": "3MJPxrSqXAyvkn3UgMbLxmLEDN1ZhEz64Xz5V35sEfmBjwyLSENH4e7HD88EMJzqmNSRkyeHQVb4EsavLP6rh3Z9",
  "key31": "4FZY4rFjbWGGs4YWGBYM3ZjvvN8P13fm5Sr8qNA7sF3ZE51fBc9EYD2NiwuuNxcKHLwjtuvqboUSVc1749NpYwJN",
  "key32": "hiqgTY4JveK5hHASC7Dji9TK9XXd3AEXrHQnJBxShzUtzwozgpFGibv8ZLtpUX1Jfon8xvzEzfQiKNPRRkF5Jrn",
  "key33": "4HygM7pH1kT4tS4uKT8UFYUAXtzaAuhdZJ6b9xGtmgZDCDzqmQJkxWVH6AwraxyX4xT8b2GbZy8JScEFHY6ZKRhG",
  "key34": "28etYcwtC2hKaQtB7YLV9xkBmJTGaJwEHp2Eviu1i8C3banph121xE8n8BXnyBJN4qkvtMCBav8BZBoTTevy975s",
  "key35": "33koJQiC5xjvq8AWYUv5FF6C3as9BL8frbmEKypjTr7cQC7oHm56Ksj51ZZAYEmza9GpTUjjegzeJ7xdctF7ECub",
  "key36": "2A5gPCGVn7C12tdZPWuSMxx6qHQYqJBrMdkcZU3sFevie6RQ6Y7sEVpD3WGf4bXqscPP4CvghpbXx7Aj6A7hN6Rf",
  "key37": "5MQCbqiHNFFpmF21YiyeZQys93gTMUmZyUjQaxCJ2W8WELJLAA5rgdPqUsdL2mFEKkwhNgouunbKQMsrV2mMsLcj",
  "key38": "5cZgGux8EGG7iFRRcMSCLKaztmQCor6QhyZNLwLYgtTZLmd6TDf6frqD2NXRmEB5t8CFxcyQz7waA5uLjq4cPhrR",
  "key39": "4NApqifAeEBYf3HP56Rzxk7iAVSfG5hieJKweKKhWcnKHEiRVUxvY7wF7SCmpRbF672q3uKser5K9xoxKs9wavw3",
  "key40": "4fZr2ovP8Jn2bXTJT8hEzAaFKiH1WPZi6zkE3G2XYSCj2DvGscKM2cZJbHk8Hp2XnPQmr1gn4ESvQ94PpwQn76sF",
  "key41": "ZqxorSQNw2JDmZ3SgAE56nVDpcP5uszYzvhLfanbmPonv6HWVtQwFMkKjbm7sqgAKeLaTigFubxREbNx8oKssBQ",
  "key42": "EXNK1vM6wHTnbQdyqNcJioSkhw5gJcZSBD73QUGDCBtrtTdzEYRuNnqZFycGx4AWfTPcKm5D31pkawHgwGnPy7i",
  "key43": "3kLdyQ5Nqo1CMHSeH8AFPz1S9QXY3MDzMnxG65PacytrTXmASKim8ffeXrB3mVFPqYXqn9KxPjdXKRu3dKKg1aHv"
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
