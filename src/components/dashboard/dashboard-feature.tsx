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
    "3RSiHVfPLfvWMWAhTubUWL4Mjnw8szkmeS8udkSqLhm13VJ1vpPXsHDWbx9niomR64K7VCj1RNu3wDAAbvn2uJwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vgEM3LMHrGeFcUmVW1TMk71Rv6uitVmSewyqnoTpStvcx9URi19D3vmwwDPECtjfxytnqYLuvpPJ236vSWQTMXW",
  "key1": "2bbhM2cvbg427h7gx2v15Ak4TMk9BgFFn6UUtkdmsE1Whsh7yjUCiqcHadSVC76nxLjvRD32don4y7WX9w7tzmM9",
  "key2": "4FbHiK4pejEBeZoYk3pXV2e4Y5AhPyY22KBD4tYttzEBgUFmZpb4EZ3N4q3p2sZZUoXHkMTwb8ybg4Po9kdnUbis",
  "key3": "3jqLSBTzKJ71p3hPMdfX95CoyjR6GsGwc2dMZ6NpAQL5Hjfa881JEiWanw71rPYRGC6aWpstJTD3zDQVXgiP1iSP",
  "key4": "4uyniWWSyFfAUoRgyEXZ7sjLY953DtXjzixL3JA8qRJjgNgdJVqkkrgtwTjj5PAj4dubnpJeHQmP6sZwigNRSaSY",
  "key5": "5KTpkVQ9S7BNuAib7JGaA7bpqj42GeD7atHsSXjan28sD2DZUPaRhWhEDw4Q9UvbJD63ZXbv52eqbWRhpb1Wst1Y",
  "key6": "hyGSugBtKkbS1nG3eh67eu4yWsvrmf9bFRpbHMcLP34zFbfUECVvmd7YyfvepWKANW27vvdStyYGMnRCwhDAfvK",
  "key7": "2kLvEzTHVz8FMGzbmyw9kVpDiJTQipH4sq6wWckcBQkJFT3PfDFs6xu9kV2c5BrKPgR4i5NLHk4JiQdPr2K3YwZu",
  "key8": "2ZiqYpvmF3UrWir5g49hEtBFdrG3hTh1KGbSBms9aqffgPUVVm4LGuQKtzbDLVA3KrKPswTwvgXjZjyUeYEAbLuN",
  "key9": "2Sz5xVDcHKhx5J1s2FrYatEcKRFjvpw8rvopse39jXLJM3CM7zHMEaLX9MMpUtLqHhbMEgYgmgPA2K19JBSRubt1",
  "key10": "2W8yw2tUgBFmkNfAMxMF61iayoN87cMg9Pb35UeZNkXNiaUHuKbktmZjCR3whgkJkTJhb1fLoPmvP6b7NYEZaWNX",
  "key11": "3bEz4FsZHCZKPpxxdjE2uTKuHT7hHctu8zueQkqwC4tBSQMX2aGYhmhC5RU31QdNcuszeaBVJS8rvjvLAnJtfcVf",
  "key12": "JNF2sBHd9PrWYMXnzcv7FJy4TiGVSSPuE23545JWqK37TjjHV89SJmeYDcoy6yRMpQvmhCbc9hqD84XpN1Q8EK4",
  "key13": "4gbSSp4aa2RDCLMmnzAn2g7HJVZTWRrGjMCkuke9AB1ogiVX8L5s4uvGPhFrmx2Jx6cbKHdNodmJLbKDpTfZ7fci",
  "key14": "4gYX84moibHNFRqqg7W52akzXmrfYi5CCM22xf3P93ShzQjRq99dDxS8CM7ZZu8txxXAU3uXhk8GigwnoEkXarhj",
  "key15": "4HhuAFzk2ecwkVYvkg3oHddifXP5wzS2EvDEHY94DZh71Xd83u3bt1vLCvyKsY7Ho1BL6S8nmqHGXh4VroNnCyxK",
  "key16": "4rna34qjqZg2VkWhAyjsJD4xNXYPNJLV7GAfBn1N14x8EXbNzQ4bmmDxczLkhA94Ummgw7eygGRZCJJSzWp4RC1n",
  "key17": "5LTTAYk3ZKWNrzedGP4LPRM7YrL69tRqEWPoe2WP7ThC1H79ExHJC6NGmzWQV9hQUHDZrsrymaTatqKhn1crdfFq",
  "key18": "3jw5rGgL3n9Yqp7hJvBmh88nrJnpWBLM17BBf2R1ttUYBA4dp5Gb2Z7xMx7Qximw4iJyjannuxUd2XeBoe63Tcgw",
  "key19": "4C6uARsm4sTCnwfmdLNLAwcsmAkTnvUsGVgEGc4m2qnHNbiDo5MinDuFFUWzVetXtoBGHX3pWvdY4RuN5m1HDCV2",
  "key20": "4VUzEp1LJeuJknGwSr68ZvQuw31Xgfdw3hEVjwMzNXPAftcbP1fQjcMNU6FJozqh373bDjagQ23n9Hdw7d67BAZG",
  "key21": "3ZoEc6r7HmSwkhDpag3KSK8CbHLiVHzUXLsR6un5GnzAVsqcBN8wHTZaqr1fudWvXwfXFQTi24ApHpdVMkjXViNM",
  "key22": "2mDpi6f45PbqvkmWJT6TpjJXmbjigi1bAbWWzUQk1SCuTy8JXs7Yv8fhzoqrLcjsxuGAQ1BVMWDDACRwTVZtZMDQ",
  "key23": "3h2HsBfe1WeLcnqNMzLtawXqrk2PtEL4sjUfcmM3awnirgaMZ1c8yfu1aymkCY3LoDmu1nk7j79Jk1RcmttLe643",
  "key24": "5FPjSrzKEU3VSFHQoQSRkNG3ka4sps67kqNrUw7N3mLJr1XEZk6F5i7vKe8LkEHdfXAMy9tdfb6nwtFPpUwfkVZ3",
  "key25": "4xwgiHkdkZCzhFXZRvU7GjXrUQuAz1DhPt3cCwJKRAkYeGj5pX1fAsnxb86C7aBqP7eJ3eGtBfn5wUGiBYksNcf3",
  "key26": "3Dhvt9hJfuTp6Wz9eQ8od9cubsZKMgMtoFRVyY7pP1dPjhoD6bgYiQPrBcE4c4da22vXx15DTAFiWDMm8skQWr7s",
  "key27": "45wcXeL8qryrEjkPZU6QyhyTQ5ZgnYoBfZnRfDQBH4L1msRu3bF6vWD937A1pbHsgFmf82houfaXrtJHtMb6mwaP",
  "key28": "61qYvjr2VBHrFqm4YP3PDjNcgRiKKeUNyevZbSyuVxQy7FPFq1XPU1EuNngdojSw3gyreXBZ65VapkiXwAHn4WiD",
  "key29": "5HRQzF2yhpyM743qBSDe3x74hErQKu5f5pWywvmccinXsd5tN5kA7gPLRDCqPZBiBQDrcXFtEj5CoB61VymBWYBv",
  "key30": "3K6zURXjYf7BaUbGvG6Hmnvgso8QG3uVqGPkjMiygsf1ef27X1JQcsSCevx5VGSi8NK5CpyPh1T3D6sbm4BSiUox",
  "key31": "mJmNa855jNbXjJvJzj7T5EPZQJ75ocr9LzyFwnVPDvEqZhsCcTZxueqFojt3CTiBGR9AC8ckjq1CeRLAs8i5Nzn",
  "key32": "4jM16tU5tAMUWwnfX2sNMHiRQK9PrdQKP9pcJTScaCrnVEstHaJDVcJhsmuCicg2fZTscu8ohr6cRfMgPuGWJDM",
  "key33": "4hNiVMRZy9LtgZZX7TmBBrfGqJ8pLf5KYCVu47wiN6LmKx2CPd7XK1ZWRFwLLgLuc9kpZiHHN5CNtDZbe3KsWbM1",
  "key34": "LD2fQ2kThzTqpm9hHRH9iH3fB81XMc6Zn9h8xFFgBCRghMofFz5njqDKg3pgMXZ2BFLBpXLnw6PoQ4aQQjdmMGC",
  "key35": "4utJpaG9UmmYAeUsdza8vUP7cDtdHq4BZh2HwgUk9U1HJbPvugfKwbStiPHbSu7dv6HfQKioAzrerXLtFDscfKGt",
  "key36": "663qq8SFhQv5SZXFRVXB7NoqwWGSvbEru8McgKU3qw2zt1sxPbsia6NoK6JUPUepmvwVaDjhSd9MZxxfQbdNXXpj"
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
