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
    "bf2xMCHtgB7jM4eqymPFqBzr18s9MoDDSN5dai5fYYgsFu7bGituREyv3j4bnk22QogTeY7sXwLewGbEG5Wkcfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AtdK2m1RMc6otfpR2nN9DPvmvQx2jsjMaedHaLWTYvHqamLDbhR59W7R1xWjcefskWXiBs244KbK4m6gsrqpN7V",
  "key1": "5RaRGD9RcCn4Q5rhUeT9c4RhRUjBMEdWo1eRrYKRKDLmcMy3anXfnNJXAMYcP2NPhXZ11CzBcRBqY8ZiDiVeXQQy",
  "key2": "2DBmBtdtUJKAbHgKVABEtb7aLGz51aYCXL7x9p69XMidseuQB3ejHo7xNyMpxK2Dqfn9NBm1QKVNJRB4LN7t6Xtv",
  "key3": "4Z3s9AxxZrmi9V6CCJy2jnqN4AYAs9PLrAM8Di3AYKBStxnA529fo8RH7nA4yqFiGARuPPtVWXFrDLjho4zhUEHK",
  "key4": "3N2WG7aoSDPCvix6nSAZ7fDEaJPEaN5yMGbCqLzNSHs2qPBZuWPfZTsnR2GMVc13yZRYR77ikfWBYA1ZRVKxkvb7",
  "key5": "3WVTZKr3V3yB88zcGfcPcdp3A1goRZ5c7BLmNz7vrMGiTeiuaasxyTXayM5nyRz6dLygg2XbzavGWY8jMALWZa2A",
  "key6": "4RTzPYLESDujxWhxNPJuLc1HgZyk9Ukrac3jRjJSSLmLX2fCUuJ8dvauawLv3qvk8WwNrf3gVxwUvV9Bti2Mcnun",
  "key7": "3eqcNoXFt72WF1Kqdf9NGMtcrYih8KdpV8SbhLd95oQVTbbKsHGzVPJjJaVf67BMM1vJtbMKPMgzNrsb8EPbpQhs",
  "key8": "NRMQNKtGLB4Gdk28j512Umf8gxDM2dewPhKt52g2R5d9DhHSQme31E2QKSzeKMdTEEzbKyKnCXLpWFqQkAZdrvY",
  "key9": "2Y23W2idvEzbVhMnUujhTrEUkrCoWmxgQECRgCyY5TN6c6CRpmeCskzoF56ZNGVk6uEP7pLgyLcBkHgC1oSXoK29",
  "key10": "42zXr6By4CA8SMf3M4pko6E9NasARtKXBdgRkn3WqvAwYcvHMa96ZXXMYyGGgxSasJCagvgMetcYca1aKHxeQHxF",
  "key11": "Axtnut1vfcAVYm9UryPm5vcxrbttuJvxu9yYvkJuhfWMDYoFMkZNsEpHtwAtRruDtUF91wNnU8qwCcSSRPuGxCU",
  "key12": "4WZBryqwArMw6YBMfMSPHQPAwi66ctb4kt7dp6QhM9cZV2P6FCYWeEHYJ5HJo9XSVy7N2258AE138h3fwm4UEDU",
  "key13": "46z87bZiQLsgj6NRdL4E4JursU4VkxzaeN26RbAWebKhR3LRScYpFjeyPxyzcf6x4RJijTwitgBRrtQWHqDud538",
  "key14": "3hzLPX22CYPzYccrpiHpCBEZfSV2Br4qwj7Tg8cpMcy2qcnVFDs2dGyomq6on83NdXMpRwkjLGypQBUUR9FQqyLX",
  "key15": "5bNFXt1WWDAhHtvZbb8vZrQDmupMoweNGKsPELXQU5swn8PUVPyrHg7UHx2sbTtKVD3uo5j6TvVSqp2rMLkE5A8X",
  "key16": "hfDjKpUhJqaTGyKuaqdsXpQZ3yfk72bxastSChUmi5tRcSrMAp6vubUJVbMX6Y6275Y6LMW7WSvq8NYZwfKaSRL",
  "key17": "4PDY1jKsiQBdYX7s6jfX3w8gCLyZbqeq4vFMw9MSF7PNBDQ4m39owGY1vHdefWfcGDVCqALd9Q2cM86ViosTX6e1",
  "key18": "x1ZCRhQC95iLL8FCFJd82rpKXDK21yAEEJAibPRfRUVppYerQywYoHvH5Ye9tsnqgV2zgA56rzcoBFtj6Lrxj2M",
  "key19": "3pSw9NexK2BPkKZADm9FaUK8QXnYtdNAxcE3RZ7h2SWQ85UfHnDzHNwjsEz85FujLXbwo8Ahe6LKcs1LdQ1VTmut",
  "key20": "4kmw3mqpGprf8SLuwpEvPkux628WpSjJtDaFWq3F44moAZbXRbQ7RvawAukBASxrweVKtj9wmigEogGmwHwx6zhj",
  "key21": "51xT7QWzUhgWSf9517a4ac6f4CnsP2mVVw9q2z3HKaunqTx1ZUMfo4mMewR26HK5V8L4cu2bNA4KRujej3zYQMCY",
  "key22": "4Sj1FgZQtNwfLgYwH7fh6Rmzdu98A8AsTigeabF8mFbrctgkxEFvRMGw44T1QwZg88XAY6chWjh3X5Sp8gBC913Q",
  "key23": "52X9Sb8NGeum1hwd1Gm5wbeNMrhn6YwWaLosXoeuqCVzs3hgySGxEU7sW4kkuzQse6hqztzWZbp8iqvqvpjnePYt",
  "key24": "YPppf1FdhSeqVDRUtQwzw7mA8CoTK6ik8SaCDj8BVr6CUwmxcSEY8SwmeEU4xXUetmEF58cDtF7hz1yptpsy69S"
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
