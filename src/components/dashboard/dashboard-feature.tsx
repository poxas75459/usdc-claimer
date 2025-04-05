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
    "tfmL27fDYwuc17w1aWhjipGTXFwvLPHVyuGXyW1gQ7jfkziubF5dmUAX5Dh3rtrHo7bpUDFFhTNsWn8itmNm5nY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BM5BDrmuKWJWSGgCM376yXhmg5i9rDbJe7knhAQPn199PvJUshGrHCLNcZcMTGcozmnEJWQncMfGcV2o5QBecCS",
  "key1": "JtxM9t7VnEF46QJL7UJHczihCaFzUvGUNgVs9jciSsrP71A4Y59C27pW1YAbYoowGqcXKuEJjaaiY7ru5FBH8Te",
  "key2": "5deHmHbPJNUiW77f7nCK5g5BjT3Nksg5pfvd4ehY7C8UXPk176tr1nitmyX7hHXUhumYWmGvFMT2Bcs3pwsYA8Wg",
  "key3": "25Xq3hXUUnhaBvbQKhoYoK7nNiTic99BeS1vz3Df6aE8LHogJKpy3P4u5VrMfVGGo783AQsca4nxTDWcPWJnH3Nu",
  "key4": "2eW68xTRhbJ9NLJsn86dCF8nEkrrJYgiX7CrAPFYi9VshQrHobhbgZZXpn7dZMuPVpxut8WQVCTaKDFYkaufxk1",
  "key5": "3q63R92sDLZR6r9S4q5LdSnRGrFm5DZWUyzarLB2JtctHG31sGnNksSDLYe4hFapJTjhrYFBBM6hCegV1Y6NVTWx",
  "key6": "4iWoVm9DxPEPT1RivbcZmXgZQ8H7kRH6jNcPqvEGXyunXjSQJ2CyzDZLnqDUuJdaXN7xg3M66UdedysWAoAL67LS",
  "key7": "2S7hJtvg6V2visTcTCNmeiYP7j8w6KU2j8P5VaC4zc3cBfvhn2DEAhx1MLFizBbcd8qc5kyeV9TFwLcmW66cdhsX",
  "key8": "478awVzzgozShieGCgur3wiiy3HiJZPRqwWvraoSmCX535Y68ggf2jgcExYfDypkXhY5REpJaqA6jzsWDJoNR6Tp",
  "key9": "5X6Jqke5xsN8bkPpYzdz9DqK5UmQrwpRUgXvps1w7u4tY7mFMK9GYbkLJpEGxG2qZHA5BwyCj9RTwUQv1hv1wbFM",
  "key10": "4ZMCjbfHVqVnu5yFpHrn1r3anf4GkdPZqGn8mo1DbbcUkSmERuf41jgrrJogwtiZphSERYaVNf9yTwWVEojwEmbr",
  "key11": "2fsK9aune9VEBFqTG5TAib5TQc1HjE5quGoP2mfgTPnPY3jfaUxdPjdEi24abjDKVyXYPTYExTXq7JEbsBn95C68",
  "key12": "5sXgLsXfZNrdsXbpCE7diqX1vddgjjWLQNdN6ugCcPxHFHY3raLizHfrVgW4TWb7NPJvSFz1KM5MZDDNWYLWqufy",
  "key13": "5hHkG5PSjVt3CsjbTBEAu5BiCLcXS8PBhkjn3sVZ4b1qKhSoNTP6sM1jhyEJPU3J5Kdp3Gp6LpJUnMHHmNv8dUtK",
  "key14": "4CaAXV17se5fwKtw2vYZJQLvF3froak8y46KroxtCeMRzFWnuKe9UemRf1wnWJtitd6ZjtqrugTHpdhd59Yeu3Hk",
  "key15": "3guyc1DHFSSxWc1q95onuBLgoYh5zb8y1UowrG3C5BP2xDNadJdzoVGsHTgdmVu1FKySHWyeBhTLXJkDfYvqzEMc",
  "key16": "3y98nzPn7FN1LtCbeFBDAgWQRRG9ms1sqf1MXTXbUmnQUEqc99CrThHyZqw1HMMNFKsU49EDppmKah7EyAUYzGu1",
  "key17": "5AH32NJghVHYUSJGv1aUWSLdZjJ8ccZaLaGg8G18JubJ6VPTMLf1ZKBhHmP1DUfKSrR8w54dNbQEHRCnpxakMbfg",
  "key18": "5u6MHEDsp9EThd3a1MCzQVFnkbvrqhXgNPXjwgTFiMqUphCsZYukuBswxSJTcDVBQk3YgkRFEiE7aPHEfxsSv97N",
  "key19": "28U7hh5GtthTrfuQSXzf57GXyNSxL9s2Vduxmgu5cMXdEQgB4PCcnxuCNvjbpKFhEyi8BYaMwHBbSSYAojg593jQ",
  "key20": "2p36fybVXX6Lk7itaT6zkKBUkitVm9CrUZGrDMHw2Yy88dkvBCpr3YrQ2bUVbxz1kLtjb1qt485wb3ad4DxCPPeE",
  "key21": "5NQWuUdhaUMk1m6FuYx85ixxHsK7uBZVBuidWJ6x98JuBJJLLUrn9oFkXD1g5dztdnFUpgeSSmJMfGASue26ayRj",
  "key22": "3x4UfKrsDWWs9qkim7tRHPWi9eHGMc1YfcKMaTYSGNLehtPdyv7RmogB1kNyjRoH373ypGPwAwoB4d1De9KNbaY1",
  "key23": "5LnC3rrNmcYi6guoH1GnXdPWaKPmqLsxqHDHSu1A1zzUJoaoRoCCvYpRbqCdTqjwpVfwNNAXTuJkrCeqtv2PbgxQ",
  "key24": "3ULLVkCDpKdrbYdd7UF7YNQ9y9mWhtFzrt7fVqUfLy7f3GAf1hqYNwsRkVDpRoceBa5a36Rs9cgFdBmiDiEZKc8a",
  "key25": "2TkeYnnvnMTZoRjYdFq1xait8sxSkSLbniW5ezASzkKjZdEwgtHWJRj3HbjFVER8wnUbi11bzXJ44vpiVZMsqEmZ",
  "key26": "ab2cSnG3vBDexKqo3cECmksUABkmWpKVYFRuJcqaiub3xhoSPbowuBqrof8LwL2LiDkAAHzaedJvYwH2Wz3eQJ6",
  "key27": "4YHLgNZ486ApQ7G54S8Ver8Hzy53TuhmCpn4dasF9iWEUUbSHF3UfSbdMVqFHPsvwqPXrDWmcNs1pqSHZzyXGVYx",
  "key28": "4z4Df3qCh865hMYHRBudqpDPdMkbyKwxUFSbAPAFEubpaoXvT6onht7b7W38FxLa8vzQaNR1MQH6FJ9HNmSXresg",
  "key29": "xB9x3mnKVJhfqFUYDg7t1NCiCbu9b8UxFjV9UYNRQJVTU9pMznp6pkZRJtsKrABXby7nfJnKEZJVZEMhNA5GYqa"
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
