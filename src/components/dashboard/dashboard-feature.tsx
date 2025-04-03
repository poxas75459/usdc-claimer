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
    "3ge2FbSp1pLTMUu6fS7uYRUnfxZP75icYE4Kwjd8A9wSyh1SJexmQeYsoeiHuMbV3dDtQ2zDPiPqv6GjFdsrb2C9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ra5YWAmEoh8EZaF81wPBUNtitSoYcMydavgsUWUspM4bmEzMHhsPktJv2xJYqD1mwJA1JYaG5BRZHTghfM8Jqfp",
  "key1": "24oRQxKduezhNPy91K2bn51UX1dtM2UMmthJybwCevkARtJDbsGRuMoYijXohpEBDDGuKCd5DR38YAzPa2NzPoec",
  "key2": "4Av9PkfsT2GFeL93YjrEddYBqgqZNL4CnnCcK4EbNDQFqCvSPuv6xFFf5UVMtWbN5HAesrPk8oToA6SarZpa2WBG",
  "key3": "3NS8oAfugrBoFhDn3oMkGabZsDsKbUBqsixe76wiVJYgK9WyJbjTUHFhD9VftW23U6BXYELNV3QHRh41TjmNiVQ",
  "key4": "5CoLyppDZys8Hc7i6Y3UcCzewGj9ZAgMxXaxyZNVtch3PsWYs2JLchV4yAj31kiWrfvVEqU8RBRwtCez5tF8FXCb",
  "key5": "2AVpjJzRsyg7Whqn9DB4P6WxRfBtEjpS5U3rSvAwF1FNentDRxg6zawqrwBGBQinDZCUftr427ZnXRfhy19eeSLL",
  "key6": "qTh8dXfVjo6YafRRK4U8ePEBCPkXhcHtu7JASmff1b2Kx1UXD6upMHRtf1kokJBF4cwxbiu17yb6P4p9d6eSFuh",
  "key7": "3LDexqLTnzYa7fnEf2XW2X9ZBT3ct4tUrrM4hDEqmZRbSWv5r2PfxU4U3yVqsSEtjQSnNcXwyvYSTYrrGSL4dzvJ",
  "key8": "3hfapD5VHiatffwbxukKkwSi4G3ow1ud3bYM1HexRchE1DXzrauRXiDKn2ZBWbjoYJzpAD8DvKZkwQHfubVRSPY",
  "key9": "5LK9uoCA6hPpgVVrBdJDzcqvF5EfWHWx37D7Ggd3LhxtBKFQCdh392VGwjmvcPPUBKMCBgPxs8KSDZcwSiZoMdFU",
  "key10": "8k59tsLMq6oQLZtYpu243F3FfxZCRBxbcTmGN81b9nJdNXHC4wBVgy9vQxyesrBqzhMBiEWfEP7ifzwmvUMrj4Z",
  "key11": "4LT9iDcByvw2PYBsYoRpDTe2cwYCVfMeh8AapGBXZbsDwpa2o8VAMiAJmfVAEotH7qhPpNFtMAyk2rLtJgFy5rCh",
  "key12": "FQ1MSnmcvRAzkwUoHgQ3YQyvxXwuBm17kW54SenkpCD83k7Fv2vTZwUFPqwtnbgcq22C75y5E7YirPLBjEzLxET",
  "key13": "48nD1XFgPPcTd2LUy3XheQ6Eeok4JCTo8r6DgPuK5Wc7aVCoCKPjczFCWw4uPU7ZMJ4Q9EcUzc6xcUUqyT7FMNgG",
  "key14": "5AMLG6EEkidNT178VcLdFhP4EvdyXH8QGkesRkSRPqtp8KLp3pchPcbUKCkSp2FfzxAq2NPkofi24Jc57RbUML46",
  "key15": "2uBbpKDHmtnC53PgdCrJqvVbEP8XNcQaiur83He9X4dKgs8zrrFmQxAJeSULrqbGDBbXXCd8mM5poYyd37U7uCyk",
  "key16": "5yHbq9HsQBbrUyCcaJE2bws2b4p5SnwKYy6wDRLVLmMGSpG66mnaDmj867xxs6jwrenXto3GAwbxtc7BS9AdH3B3",
  "key17": "4xKhRA7JfmPkwpBGwZkHRFH6FbUFraZCZNgLdLXdbhm3SnwDKiTFiP1DhGohFcdFtsqGJjNjY6dnDAB6RwLrU3Tw",
  "key18": "4iVCEqNLPqnwL8MfkTYiCtagYsDdadgaHMAzUkqNrSJFNaW77XLzGM5rkDMYKHc2dmgsQDLef69SL2Y1vx6cPXH8",
  "key19": "4GdSZWyvV8FEAXbdovUWiqpoTdsMk3YvtEEqr1q1WwvK4Gk3MFcRDUm8aaDYYyHXJKJoiBd6qaSrMvxBgCbFZFYE",
  "key20": "4Lj4to2Xu9Q45oXccbyTnb8DGW2g31tHUHKcrPybtAFpRpk5pF6dUU5weAZVVbWmSPRFg15nnaXo3btmQNuJnpqp",
  "key21": "4zvH7sdp1bP3ro5ym3cempAdA48DJLW1mUaUF5i33oZgHEvSA1bSgU5pndNU3dLhJJ5MsuYXvTpdwemQsYULGcYe",
  "key22": "5qDUa1k3RodiBXHcb71FJPoFY5KM4xYC7wCRiUk2NAD7Gjqkr1AyGr9MghzuZADpTnErTWWGAnCLRAYStrkR7mz6",
  "key23": "4EzysPMKYpMaikrAzdctnxKfQ1hL3cFGPhYBVeKfhhep7RyfXCK98FCfjPMLsj6MRDEJEt33pywifQruks8LDagf",
  "key24": "4vBkLr4HnuTkGjFbAkxSyMYiutsEba8xvAoJPWbYt8qxoNKi99WAFJdDcypXnEKv86rbSAd3wbHKB3gmsdnNqr9c",
  "key25": "3cb2c2Z9XqdzkV6CEgxYRpmefchSZBLte9U9dG4YRMNGZSospZhEYFYtNzpYFumwdnGPa1R5ZHDZzBhQtksofg3i",
  "key26": "4cfKfzWtaHPVhQCRxk4RDQQo7f2cNqMCvVkD52GSkAX2y3QXsgfrctu4g1UEWFGE4gH2vgEuMP2TXi9kmtPKRDjE",
  "key27": "2KjvWiw3TqQzc3PRYdFzJBaEKysQ4ZAmYogS54suiirkpMur55r2nJieNc8mkM7Wo3Ms3hpPXFvhg5dav2Tyr2WP",
  "key28": "2WBWDEnWY73Jdp79Src4tnTWmptTyPnXXyMdWAMnGVuifZiBmY4taLH1kVa7P68arovkdw8DCfh4TiRAMP1hFMFB",
  "key29": "yFxiXxAcoNXtPaw44fhFyaGZi1vyx7U1NbfFuR61z9Scf1o2bBoZwbZ5rzYzjcdPFfMaJDMz56nUEozyggKo2S4",
  "key30": "3xAgvVf6rWoEMz6joFRKx5kWctxwz1zxdurHr7Qj8MBqxxhoESDomFc6kZo6oudjfNqHyxvTjzZVoHJdWY31nPLm",
  "key31": "2gwDZjjdXPyTLYHKMfrQdBwKvEtJTUVFnH1quCniJedR9R4foKusGHJQ4jYpYGt4oUa1a7wG8KFePk3ZL7zqSq1C",
  "key32": "2XvrmJoXGfuFodiCuvzmSbEagPbGUezJXt77E7pNHwxH68ZSYRb87iNwPdFwvCSD9eqpjE26unHkqAMJuwTGnMHj",
  "key33": "2bWkJr4hz6ZJze3zd8Px5Hxi7nGBbrm3qd8x1G3zFtvmZnfFeWzipuokToaYqj8QG9UupPnMzmYnjU8n8Z9CR1Ca",
  "key34": "2MDrfLEHDBgZrkXgEFy9UwsCsaBfMpj5tf6FA65J82gKybgB2gnEDxAz3QT658Rg6g5HKSUnnGKXgV64QkefM782",
  "key35": "5CpGsrfGzWeDfVycTwSyUhX16SKYHRdYofpmTQP3LrFD89zopaXdEJkp83ZXM1rCvQYmbpLkMiWhHnDa84cHjDpj",
  "key36": "3uxtQ32dCB6HXGUzC6EgamxCCSjczKutsfLG9t2eVWCQwiSspDjJfyTR9WJC6fkn86jgoVXrRQd7EtdkyTGtPr9d",
  "key37": "529zBvrBwCHe3hka4XmGSzW6d93Z2UstmrME6NpVkzrkota1odMPppb8E3bGjddM3ckJGUJEUFraff7VJD9gY4i",
  "key38": "rQtjPHESYeMwM7FbJKxXHrQhjRiNw85e9B1GbSkkjEnNn14SD7EXh2deXZwQo1cfPWDLg3sN8usjT2WqN8X89eY"
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
