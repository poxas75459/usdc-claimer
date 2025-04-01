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
    "44U2wut4hvwLxsB5SxENa5czWj59V9ibkwX3TDCumFb47UuSnrQpAYM6jpw2PsoB5QknNHaSVjMMa8sXUJJKNWZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iJQWpVB4FHRJKHUd2jnxYVpytzvtfGfVFZRXjF8g54mEtqJqGbtd9Ngz2Rci2uKiTFApksLYpWnHG4KCDpnkNNG",
  "key1": "2GNg6cxSQYXKADj6puateEe6JETFnuzVYAozv5AH2ksqG4src97QZDhDAAEAAzbBQZp5gZe1KtuApo4Wf4uug13Q",
  "key2": "39nfbJH5jEgGsrQTBE2prDtH8kuWL9k3e7BAcyhtf3KG7fCxdPfioARZsumR9sCyoT5izzEc9VQeHc7rFMhCUMYW",
  "key3": "5nne9M4KWthCaQimUmWf82k5guh27mfyxpH6FD69AGRyvcsP33dYbi12yyUEHGoN4Bobi5vsFFnZzbFAoxBmW9xz",
  "key4": "5gJoHzk12bQKCuPby5f9pgXBSCYSVwDzRshjknct9b9TsCvxxCKBd5TgBNP1V7Km5LDatgrqY12mM3wCvBX2Lt3A",
  "key5": "thVUyjXR4Gkjpq6dzzikbTPn9ixRgdmRsBdKspWUmMh5vJuGV4tPteBNpDm92ZrvqoCoTKMn9CTf8QZYB47yYbD",
  "key6": "3Uj2JUHtjJitzWJEmK2Jd1Jg6YPMLg9Kyo66cMi3R1PoSopEqFSDSVAmF8Y9zmsG7tfM6WH7JwHFu6WEU4D5Wr1S",
  "key7": "5wHve133YNp2Hq5RHyUgEhEFrRwhPwdRJkZpsdKsdw44EipbTEYUDBSMs8STgQvGAcWGnkPcf57LsmQ2aVJrpfeX",
  "key8": "5nmh3gPxyqdJiZmmRuAGKjEji1dwDkXtj2LNpmyPeJrYF47SMXd449HTDHAuhp35hEjJG4scKbLbzh9umF7TNKwt",
  "key9": "3g4J9PXno4EfsnY4MQmD6SYSZ44dedJb5Nb6bpyWqpxjymwb1JtYjd3fi88Gikmh3Uf7fCVnSKBkHuVhmTkJ9ABG",
  "key10": "5FfPLrHzpr9euia1stNKi2YgcQgZzJA3tVXadWj2kSs4dRBfdzfyPGtvkbQtR4wfWdzZBSeesQbYEbJfv77CRuR1",
  "key11": "4iyr9jtYhFWCa5n7njaTkUmqdSrLbAUoVE8jRWPJF6UtSBa8VdGyz1cP9Epj4Yz4R1hZJEza97Urfh62kjYpqQ1d",
  "key12": "4vZnNJQjXXtS81AEjW5QEX3DeKaynymuG5C5t9Lq3Yc5UT1E5Bs3otbH456EiBczPb3KZCmrCkGDrzGkHAgnLapb",
  "key13": "4XD5EhNzjkAKgxiadQF9TmzgVigF8qGPD6qnSM6D8JXiSminVZYWh6a6fNh6Gq5WM1dqNXzSw92umTYTE2KiipTx",
  "key14": "3aihBEcQrT5m2GCjXTC1LtRVvc2TCvAHefxvBbF2gctWiTf8Z6wkzsyuA3eNhEyntRP7HTPrrti5RpAx5Pp156tr",
  "key15": "2b9puCvgbwEVieUtfJT5N1TN1aeHeVDzCVj9i3ibihJGVRaDfGaVT59MXSiLP3iapyH8oLo1bAK4K7DyPbXh6XFe",
  "key16": "4uS6y6QXxCVDSzYkmZKEabFoN6gZEFT5Wcm54FzMREJkEqeACukD9ayvFFiFAoK2Q5PCD77JAfhwnXvV13R2e8HW",
  "key17": "SrYrQccRW2n2A8EX3YnkR4TSSDnbfTTbtqwh4b79wXaTzhgubfPNuQzCJmzXY7QAGBLG6MwsGdJnSHt3sam4beZ",
  "key18": "5ExXBgccUrmd2VE85hopapYnfnPtkXmEoiQ6dTAq1XDKiVPhTe3o4gJuh8QYoccKgTHxpXUsQ1rFVqA1uzkdPsK8",
  "key19": "2xAQnEVJVwvXRGjDGTtYa8uMEAeFPxMbPkrXwccbkoeHfP4bL3qrjECckXCwAb764TLQrWEKGDaSejVrKf1ArDxN",
  "key20": "kBCFMRcf6yr46SyaL34Vy24KP14rdBjVuc9paKqvCybuPaDvHBCwVWoEduDnToeaECyzCukgq72wtfMU3cjiXvh",
  "key21": "5x3Nxxjr78Hw6f73STFMccpKsrgEpmVH18f5eGXpQ4tZJFkxZSAkCKu6Fx5EF44LmcXJV8ge4z9JU6MA7CVjLRLf",
  "key22": "12392A3Gf7aQVEJSBgvg7qKbSKjqmNqLHEW5cmkew7AMznREHQrQgmbJnaZtBcmj2AoRwspBf7r6JZeUHgLobmBN",
  "key23": "2RJ4yDGpgS6PxN2DGpCKnSK1oyekUjNxcVt159ciNwNzMCswpkgLeTJCRhxBJZYrSnRjkaEL3m6uC4G7HjZ7bY5D",
  "key24": "5WmMajfttynCgMfwwJ8AkeNCLzVDRg52EgCN6f6sug3GQZAyCw7ZjiEQBx8yCraoKbZ1ErTaFgYrTRSVu8HyEhB3",
  "key25": "67mZjVTnJrtCGngY94BodTjiF7q2QnSV2dk5eYmy3NQrizSLa6uSW7gx3ffzK7FLdw3H465fgyfQNtsbaFrW88QM",
  "key26": "4QpUZFEr5fhdWjr8FmYhUnxTu7Baze5iLUu1hXJ946xMYQ7P8QDEeZeBG4n2A46ESeGRnkekgSe1NCZjMuMSFSrj",
  "key27": "5y8MbQXqW6UActg4RYx49uotxoZ4BWp89DJ9PhJoW8ojLPNbN4ZyJQnQ17ryiJvXHLTbf4xwgEDUhK6kCqhrp1XM",
  "key28": "3XWLFgrUUfEWaQWqKTCErMkdFiJCAm4xckMiXKcBY1fBcjoxb2xwRnNHkPP2SeAKeuJzuGL11K3DDNiFH2R4HMmH",
  "key29": "2xrgNFyXxQu1t8CjZpBUhs3mm3A7HgzmetXD8ZxQNLydLhvPUC9sJ6EyuHPVNvouzwkAbBmSSpj9NuqKJvD4EhPP",
  "key30": "sQPYJNkaG1RhyQMu19UBJC3gWhsqAbgghtUwbf7FW26skTQHp61oHDCX4dsFQ3StoWJccLcV8N3jTFSHVMe8xf8",
  "key31": "2jGRfkfF2ExwZgKkjjQwAMQ7FCSFV9KkqBH4PzzvyvrhrzGBjUFP1Cqk77Mzxw3D9FueabthTXoWb55erSqQYP4E",
  "key32": "3Ke62Z3wrEArAzmfPf2kNB7su4XeMZMex435sJZwzvhXsrVHnfLcoSdFrgSMGpg85RNPbx55VAj3upymUSjQx3Nm",
  "key33": "dzESPQBRYToFioTXtyfFDwGpqhuUgELQFDnU8t5ZMkX12ZVWjXYf81N8Gcowa6YcqgEuixbjuDQbpYDJ4DqhLox",
  "key34": "3EYnBDJnvXR8DWKq7yMPhBzz9dyK73kRzmBWP2TvZZwYs6ajm7sRZ2kTjXHt2P8CuJRx2uNZ9LH9MN5UChwiUYky",
  "key35": "4sfbYBvPWfVPPLCEjYrMgnqdiNcMwy2zfKyrEiSjyZaCMGGNwSSwWAS41L2HwHkdnJ3KmpjrCkiKhaUjwYyyvW6i",
  "key36": "2YgNxThgkceYLiznPkx7xHVqrMCt78UyBFvWcAHgK5NBhnRRuQBipjk2bGTPHB9HYcFHDxCVkytTRkSYLZepTd7u",
  "key37": "21qkSDVfjbwJNaZTYiDjJzqA7NTSoumwerLHadV9s8nWVrsAn9J9McJL2Fk86cxUdnr2VpEQdg79vcSL9PM3aDGi",
  "key38": "3pfM29zCcpsYuAYR84gqSBDyMkmCsk7FMhxWvZPby3Hu1dCVcKHdrxrtqjucFW2HdfiCR8msEidPU7wxRSNwmoUt",
  "key39": "5BVMYDFZnSuFsVpVaUtEwpY96kYiy5hAPfBGNRZurbSmFsq3EKzg4P8XVKQGPWhonmVaF2MAw4C38Cx6aPjGkszt",
  "key40": "6MpF9qWYLgKnBmsyrGTXPwq6vwfE1h84b4kcdojy4rcjMhdGNBEMQPQLBTQ24bjX9Ny8rGEYkeXpRS2zAFvtEhd",
  "key41": "2bLFqs2Txys97xHfGz3dagwxghfPPAEiiVRPGKSTiLNaL9LcxXiBkAjYY2pkB9uDoTrYgoiMX7WiYsVcVFkic5Ft",
  "key42": "5mQPTHmZtVAG9uNrWHXeqSjcVY7t8EGUQsUgEsitHvqavTr3ekg5nPFNCuTnpgp9uSW4catR7BDGpCZYpVemFS7A"
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
