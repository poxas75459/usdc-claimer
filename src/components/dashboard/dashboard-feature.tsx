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
    "5rDrhKp8V7pHMjcLsdkqonz2cBcpP7W8eGBTLVriHW922scbob3LdzdkPokEpCPKcoT6rnrUA8PxHncxdrVyrddH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S2WYHu8uKswkEFdgDCTkjQaNE9khyXGZRpBSFiwFRv1FKJHjwC9T5PNdUJ7UEqDYp36WsKLsBPq73igpBP2sHz9",
  "key1": "5di6NVdHeNGAmGrmUhgWwPtJXQHvbi9d7Pz1TptEnJ3MaCuFzGNifKy3Zm9qn5B3VNWDffMaUxxPH64WGWM2RPsV",
  "key2": "3MLnR5KLzU6hi7AGbAcTgQeLPXSyernqB64VJpocG47D9YrCprrVVZAbtfVSH5G1enTv4pwgsVhk7waDNURuLZa7",
  "key3": "2wugEXCpYzsTYCrvX8aEVxx2rU6xX12Hd3xbEyXa8sAzs7psvmioVwHK2AcH2avby7BFFhpiAUHwVH49gFDqgC49",
  "key4": "3YGf4YLrAJYqf9fXEHjQRc7ThcmwZ3m2jhM77chsEjrkkg6HcMirL6ebbyJLtFhzrcmSSzJN1oCirpwUow2uRaLD",
  "key5": "2TgjyZU5PGYiRkgRD8Lo57H49amrfFoMBLqbxQnK7KeU1uQ73cW3KrQmS65XinB3mMAXzjJtiAaRHkcTZ7wZn6bv",
  "key6": "4nhXPsWRkgjvz6i7AkMfwXFZ6FmJWuXv1zsQRQDob8sMJsfFZ6jbzCTmwCmRz1EsMaDX5wQqZvEwhbaox2LuhYkJ",
  "key7": "65PqRZBviK4WuSDuzTcceGGaZMEjokTYokfb7amQgC5Tkq9d3S4hGS8zjPuiMGLgQHtunsxTXnsE1uXUf12zkQge",
  "key8": "SnkTG3V2WmyLJVbGnUFk3pdKnLrsKudRSQ4TvmGY9FfssNFfHFmQnK3TKBMBDYxjzsyfpxe7iveTsNnhxnJEzDo",
  "key9": "5gWQ9pbFJ8homsnf5rNgT5yUKRbTz8zQqTDyaRSAJ1QakrjCT2LuWK1Z366eWdTucFFeq39x21d2CJNHNx8xbtcS",
  "key10": "4KWwnodpiZhZwF6wWvia6vBPYgpJj48QLDE2c7wpbFo7sTgHEmMB5SxamkmyyWoAs35aKE1KcbkyT9kQdvfye9vw",
  "key11": "wbT2mCfsoJ6y8a5dRUyXfE6kxksotcYxk9fApd4YfLdikU4dT8CsihBo965MeqCqPn9CfXfmypF1SZrD1oYPNrK",
  "key12": "3QmEe3pY24xJw5iLcst8xmti4Dzh83kiLg6pCcGspJANsQEuXhDWmcJEQcafTfgyUpaZ3UcwSzJuQJgs1K1VJPcX",
  "key13": "5xHUrA83qdEhUv1NBP2XT2Yy4B1DLinzNRwV2YrKKpFMMqFEc77vZSswpYzyvFat5L8yAm7JCVr3U8GcJetTS522",
  "key14": "Rr2SMDpqDETgH7Hxsg2i51jSQ8fbveeZBuZ2uKEHWoNQvKtsNk8EBJ8jJKS9cwRaCcRgRktfsVfwKAxAzyq35CW",
  "key15": "gnCBnPD7JwAaCYZcdnSnS7BkUFgNGcSQdTnBULKwZejT1tpjtaKePF4rxDMbsVF5KAc6xcFJ7L5CNgo2vWVZfwm",
  "key16": "2HTKWJoVabNRdf7sfXg7tBVR5o7zrLv1apVWTmFWmDaH9DALfXY7prv2APurKa5Y9XyrbByapvG321wEqr6amdRb",
  "key17": "4wHPJRfij6a5T4gbhqpNa6KzeBCFdnUHpcs27F87fXP3JcKj3hh29zkdK9mADEurKgj2cR2SX6T5LTFSnFxrWHhC",
  "key18": "3Z2xpAPp1KuGU9QZmtyJ4z4wQek9Mea3Cer9Q7yVrfnjnJ99ijCbzNpDu325hrcrznTZGHvsFW9nWuLjbx6TFpGJ",
  "key19": "MYeJ2UDNbqAdKrXXBGoxQzRZTuffgJ5iQpMcVZqtpEmt4HigvhUuheYpABRGkJUC9pdRfnctxWuVu1cHMLuW2Fx",
  "key20": "5yu13ukoxTfJNc8ZdMkNpGucUKMWkXr4k7d3HyUtDM123nWzibDnD53T9UVt5kYPjbpQZT8e6fFLG5Wr2eshCW78",
  "key21": "42hPdtTVBGSDNUjt3uHm1rKKsn7tUmHrH5FZs6wbXhxKXsbcgR9SwA8W7GvsK5ce2wcXhRQvdZTv9nqsUFXDfbkv",
  "key22": "2mbGLi5oqajmLoWFNzxQw3Eor5gJe7QQN3LuAYQYykcZa6TEeBXGiWZyp8DV8csk8CbGCf9LJMLPNHjUGdShMB7M",
  "key23": "4wK4kZnhwC3CaGs2CGcrPRivGaTxrKUCm7M3KuDLmf8BhekqQPew8UL1SWAUtzE8YVNuapuk41BfmHvXiBPwkN5t",
  "key24": "5odKE4K2dBs3BP4DHG2uzkVgZFRKo1wyqL5qQa3gbS5KUW57ohjwNiJKZdoCK4t9uBDMxQJ4jJY19St3z7TJJXLS"
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
