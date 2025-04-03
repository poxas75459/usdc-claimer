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
    "4PsDR4VedM383X2RPqADKrXYzuZxsd8NfwMDtNKtQ8NbQiKm54NhXwbSTjxWpaxZwQXvKAAm31wNprXBdtasmoTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B3xEK6xJ6ME8HLTMx9XuN76mknCW2XXrpaMtzwV7x3omR37ShQbR1LWAxQFyU3DJYttu1tEHET2c1mSG2f6QfDP",
  "key1": "3CEM3Zg7e2adzB58871RzssHpAJGeN9VjSu8MhL2ckvJngzMt3uhHh8WzXvMwovtGgBRSXa5GojRxEFwSX5Yqcye",
  "key2": "269JHPPJ9XHYeybjLVKCj5yddsxF2pWr7393QgSHTbZLmGudjKXWLwFXCPsM4meJPSoV9mqfacKTxaov3u5WmeGT",
  "key3": "5UKU782pRDWh8WfhzKKtFK9iHEPk48Hiaz4JexxmHdi8JMXCgMJQuNLErmkeRVBSEyocLnteXSFfkwAaEEtbAGfJ",
  "key4": "526FvdHoefSH1rwmF6wFsLyiWxgQj7wSCLu8s2nLgCxTz9YVebxEAYeeSvANenrUqdRynrRUZosPaqtvUo1uobJ1",
  "key5": "2RzQHJsk7ZSMxKrew3fbiYcKySWGUuyzhYKqAAK9v3JKVd69KU54uRNQFBoFb12ScuprXiFMjMehZXSgLKJGJeA9",
  "key6": "bW66zF5cikV1ZcpNYtV6P8b3uGBiT6i1JvVrCr7AyTpeLMfWjrYkeHX3R81pG3tifuvx4bkU7GgBu8MPxcTwMei",
  "key7": "2qNaGTQth1ajfyTfNnchyYfw9VnZS8W7qv5CLC7y4XBHbmpY4WCwHggJhQc2tejxb76GbSXSXjPS4jckQeWQHqUZ",
  "key8": "51uVLtM8FCUdickN2V45t75C43qjEhbKJVJHWA3h9NFQsB3XoZ3yT5AKyXKcVui8vMGRMXzCLxqnHsXbHCbhqCD7",
  "key9": "29kMaqReJ1mA3GBjcEVtAZcVVHSkijzT3vJWJjKUSbrnzGnLZyRN8sHNJyrFoatPrZL6EmYMS5newtLTZTrNmHh2",
  "key10": "4vo3BKBT7gGimiYHq9SpK2xzBzot9fvk6WmnJx1ZVZSK6oALS1KmKcN92ptFkLTF8qxyN6kx8rGexqjvofY5yGph",
  "key11": "36MFMWiUssBtUgkUv63WBDhpWd2uTXDg1xjEYqzWavdyZRdWJ6veXy4gu7j6qa3CNTUdPM61yLkaRxvR7ukpL7c7",
  "key12": "1KeejpZYoLdA7FRTzPzVPtXac6LqzPUE1ztDA7DQDUj8UprwumgjV8rgGGn4f2Vrz8QuNQWp8UDBadP7XjVKFLs",
  "key13": "2AvYntYdseuREVGwMe7zwVc7m8FM9dqtqC54eSJW1cjvyXuFvr2zA5zsoNejMSGsrfKdMxxMhBnc2wWJGgW2Ygzk",
  "key14": "4Dv4PHmipM3Grex61wVUSLy2wCdE7xm2Fn8N6anezXronFZRLfqH9GdgyoLkwMrFhqq3qmFvxVwoCqp1hn59m2MW",
  "key15": "4mGvZEjxqn6bTHxNHjADG2UCXyAnZECeq1vLwdR7p5JJYXVakf2ssczC34ip2GEChakaWjN4HuMo4ynxLaNzrrVX",
  "key16": "3WjUo1Wcp9n3NMrs6jKgdfV6EnsK6mFnH83CknecTTiteF7M4nu2Yk7LFRBiA21Ed9Nk1VLsgXco6ksBUPqorpKT",
  "key17": "426MWPmu6v81fNB6VAgHHCozXvxa7YijZzuMwfaw5KTX28kfp5J8YXQHuPjzH8mQC1GL17BfzvHKyWCVpeDQjSoh",
  "key18": "3qYe7NN1e5qFxaEvqgDe1p6AFHhiUgDZZCRuPuV2DhoKKdwkeEw3hUUoFwRaqNyHnwxkUSKpRTasfKo4fzjcT3JB",
  "key19": "5Gbb6Fyb87DyEtFQQAnRQyS5f5PAKUgJHR71RiWSFbmYWwpquv7aeMvySor7TL4EUXvvqCchLJ1Xva3VPhEnZZnY",
  "key20": "5vBLS9aC8wjtSuW3kS5F9ByteXYqa7GkMhG78XQy5hbXtQN6iMXm7v5Ro8SMzEP98s1AiiRRNWDnL4a6RPbM1MW2",
  "key21": "5AFbyi8vMwTXVHd26grYjpUU69UbhGVkgYnjiBxXN33S9GEJMFkVPuAuVetgN69jhxrVtSDPEyggZnkWdmFbTA4b",
  "key22": "3H5vwFEXeN9MnvnYUf5jJcwTCdMbFENCHJC3YZSp67iaJKbhgyLhfo5KCcAa48mVpogX2ft4Y2BF2KbHiK6oYXng",
  "key23": "3DxyGZfvFYnTNZ4N3E6HDMRqDEFs2BarAky8g8gSfSMnbm3zkH7RQ4CePQEo18uHdbfZyBx3M6aucqmHtxFTGXbY",
  "key24": "4B2RB1LwQheEVkj6TFZGRcZ9fKj2FxPPGMeb7XhJo1CSxY9nwjyMcZA7QzxUTjgy52SzE5iHXL9qXYRqvvadxopp",
  "key25": "48VW1Lv1hqZrw88gtUiYwHn8sPZMPwY3gGLHuCj7TAtMc1am16ATTygnTc2bD1etAtpQFbK9EcmdU2kuSPCckUnX",
  "key26": "4Wi1ys6aj3zJsbBtTHJhj4hGTBmEEmq2orJLLxTee8erKCR4khEJGXzsy4NTUKPFs7kUL7APcXc4iECsfdPxzHMt",
  "key27": "GiMyR18UiLeXRgGAgiAeCvaCQfw5GEpFwhP1CctnYjATkLxwjGG8vR1XZ2FAnykYsA2gdcNhQq4RfRMvwv9iVTq",
  "key28": "53LS1H39vx5vhSGXfRUqkajnwDCE2DWjC3USRby6obaLiaUnQK8opJ4H8uv39z4wDBJg7TKvQLn5pEJ1Pghxupfg",
  "key29": "535ZSCTpPjFsgCNWMs7c2DMHEEaDsJpqDqihAzMPp7EmiSJjNftboGNvMuuB2kQU4LsizedsgR9BxvdYR1aHyHia",
  "key30": "nDUkJ7gvL29BPDX6jggKzDztD1yGhQTNmxxoWtoMqekMDotSuNBBAwsASk3Q88cJAG8ycfKHaL9meqNPRAMNWJt"
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
