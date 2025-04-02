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
    "34qHEvxggwUpocazEcasFNAEYojmRyrkrEw1XDHuV1z57UdcsYcbQsqHYoTaN4sXR8fkqhRH2r8q24fnYkv3guSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GDKWGukjohcbUGVvoz99HWk3o3FX31NGRSagtqsTbANbA9AHocE291v95dBBt1WQAZzTJ5KVXWETTHpjLZmqedu",
  "key1": "28fMAMUxs9BJx1wURoWHmLUBkVySaPcAA9rLfBKY3GDMuEe1GRD9uoKAaMe1sXofQTfMGf2w2AcuPsex2VhjsuaY",
  "key2": "5PAYfTwq3Ho2dRgsrKmE4zBusMCcNRpstSv4gunpUtjvChfjs4P39hjPUGP3td6PDpwMwLh1bqHQgpA2f5Bq9aDw",
  "key3": "44ojQMntQkR4XunVNqhzN73NwmXgwocpx8MzmT8BR2CCubRZscFNP44coZZYtG7EB3DVSJ7NEgZi1U3KVZc75ASU",
  "key4": "5UEVUMweZJDCs9KPmTEqb3Lke9XoZam2FhZVRS88HoofV1evoMnairRZLrQxKt8pcmoWFXeMbuxymsQ5DfrToDrz",
  "key5": "5RmT8fz4V8eDMNMSLckBsc3AYxBQr8PjYZAM35gXqgP5rXoU2FRpio6gX4mjaMUzqH7Rb8SqgRz6PS7teXzVPGB5",
  "key6": "5Grzj72pho7UTYTCEA5hEwBmtRgZ3WQFFdVjGyC71VA1RHGnACbAzA3ZRfPrGsjk7QRQoYMJMHsHA5k47zvoKivr",
  "key7": "jQkRpLwovwY3w34Hp4VuVCiiw8zxLKHMhTifaLmfQ8rAhCuLNohWrmYeChw9bMDCoPGQCT4a8bEjyxPfuAjoYgh",
  "key8": "5vCBCX9tXtzv7e5Hv3dySyMFX9ngJQMc9urVvXroBQuMfR9As7G15TqKTNE6mcRsdAR54vuQkDfWhj3tFZH5h2C8",
  "key9": "34VaHvaRcedtMdcF8UPYWgoGzqumLAAuywfhSWz8k3BZfDDPZEAstEsrMKrequ38CQqyXGawXGtnGKpLcMNPw9k9",
  "key10": "3heCDaVjhPPwoFzr1eFvpAL5Sx28EVyTWZAYhk3rKtwGEqLixcmvF1w2BEXwiNouEJW6Uaiaheu5fLzwoDqd9jiG",
  "key11": "5ectHMXuVr2HsMve8AaENZmVwvrrxtr3dUJQuHNsw1zi1XsRqjRni6kZovowrmWFoU4PQcJB3Z9GLgqFyq89VdKt",
  "key12": "3fMcSzrLu5ycSxf2mgrBttuSeBDpwr1fjS81KqUhuRabF5wd3TaeQ1k6EtEvEQKq7EtWfrqRhCRxPMXxubTNrNES",
  "key13": "3xgpV6q9o86HkhwuXfbibavvJe2HatG4PPgRvE2mxbjvUEwCvox4uHYzd2ekqHCtjpoatXgkT1BSuS7poP9diyy",
  "key14": "4bi7R3kvSwrtnryuob5P5dNhaVdKH3w2bU29772QS1e1Y372VQXXdCT8AoeWnpHxgQ9C8LUUTnSQay8RE26P2123",
  "key15": "4Ps5jawkpH59APwbvJ6KjdAybm2pqW2eZjduNkyS1PXueHqoFLdua2rftvDAJ3WTmcnhtVhqLxrM2xSB5VpUsNbm",
  "key16": "5sw8sAaoQxaZXPvbSRihgMv9AgFohAWeqpLuyonnb2QpXqxvyLHAjJ1ZibYV5YYbAQ9ms4BbgjJAwB8BhVf66jZq",
  "key17": "4K5Ec42ifYqTWU6EG2veVjc59Ru7Hnj3GFbW4actUfcSVg74UN3t15pkdrE5mnJZsKR8jaTFXngoTz85Fgp249yt",
  "key18": "5usiNUzquFURXytdxsWxB3h7sMrx1vvRRqkR1hCccdPFHPwShQ6XSbsV75e8q7LC7rwhWKGpcLJLyz5YeHjKTzzY",
  "key19": "2oEoMibJFCCVsKqS16YQ31z2DWeD6pNmMdWXUKTJVcdos9S7GWRPLZuDQ6z8KtbZTZ4MB1u62hTu9rH93Zt3FGE8",
  "key20": "h9Ff42eaPbRUhbo5iA9qz9D7q1gtgonMLapVvEjjw5DHFdxuMBddMtXETCaGL8ciznuqoYc2toU2BaQ55SqAopL",
  "key21": "259tvH4GX4HgHaq8MJAid1qPrZggSKkvaoapTUbdvnLFWjU8ehsLkhe4MpSp5zYsdJAgEVL15qBPEqhyUG21ZHDo",
  "key22": "QPEwijron5GNwpkdKwVq8dMZCAy2uy9wcyBmewyNfpFsiT4dr4tycW8HyMH8G3h68EbtgL8LHwudZnvhFKW5yy8",
  "key23": "3H3CqNkpseJKq8o6Y3umHA8A5SLdZ7cJjDpfY5Sun745k9foHToNazpGMEuXz6ybmEL4jCgBMrz1fKBT8veEtaPV",
  "key24": "2i6T16qAYyU5DAJip6NBdBAc9yPyHXqfXr2GaQJHWSHz7cBrSfccTXtaEd3g5qb1juPsPcQcT9JCPjoV9rcQaqiH",
  "key25": "5jnHNxHhSQsQkYSMrh7gFiRiQ89MkwwEtq8M3MkfQPfFT4UceA6UGEiJJbhkUJkiBjjDUTZtRAxqsf7VqYwjD2HY",
  "key26": "4BznLX7V4HMKXoA4f71vYLK9UnvLQ4myNTkF5yjUU1kLSuHNkbxpCxHvzJoCX2DZgK6obPAx25DX9Y29JfAhrk2m",
  "key27": "5NstDsqo1feRCZ8eU3wYjGvHi94CEpkQhEfUgziXgxVQ6Px3ZGf1GHniFKChczrZZ7Q7PQcccjPwkoZ5wGRaEAg3",
  "key28": "2ErqBpuDRjF4pe3rCe3Qt5MHYToegHpSrZaCXUvXYXkuvszbgQrMSoTPEbgKrqgdpkMivYo18mFmd6QSbcRzj1mq",
  "key29": "5pfPXXFxAgXPLLYqJzWijFLT8BZpuqy5jsy5FmfEC4voPKsoDtad5hmqsyKLnGGbjCk1GAyn4EsjG3gwW6AE6NrB",
  "key30": "4MqEghTd9d5BMPi7mN9UN4BnbMDqsz6sbR3ZMmUYsc8tZbSCVFAVfiG2Sb81EtfFqgc5CXZYTiijxgDs4VJx7vkW",
  "key31": "4MMdmTmSbQ6wcv8x3hCnomhzcoWnVx7XX7ZVwSQBxxXc3Ry4CJpx31Uoaqy2M9qJ5uHD5wJQ2Nd8YDBKoJP86qVd",
  "key32": "4Uv9jnSDwJi3Ae7EZgLiFCSZuchBmGrUtoch7DacVZLPipRdQG2xH9if1vXvimXWZRJWNZzv6QWJExBm2fvjipAF",
  "key33": "4DGUnBR8v6GVC9Jyjqqi8EjyZ8Yutjw2CXRNMG6z42xskEcMoWgdMa4RSd2ZoMyTdgKpJs7XMv3r8LLyjBEdJqoK",
  "key34": "dNwdXv2uiofrCFKKcc3K2VD4CtWVfY989WR7aiyMmoKag9nBmyiqGUo51F89KUSzNvnsBP3CbFyX9NkBNEbpbwJ",
  "key35": "5x5EKzPy5PkE8vKN7dBjgFmtFhzFrPcdeX8y1WL72fqfLdve3mE4NUoCcHsNyhY8MbUQYnExq5SvFSLCTBe28SkM",
  "key36": "3gTDfQzaQQUVgDEd97zoccbGLatT4pig4ccjbo5pNoTf5YF7hZNTT2ckcMEAJkyTUfEUf3aCUdkEJ2woMhLK4poT",
  "key37": "mGmbqYrtoMJ7e3UtgqSSJ3qowxNnJzXj65cC9U1TJCYGR2nrHp5EycuhZv2xJDNju1Veg7nxatsGQyFaUk2Jont"
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
