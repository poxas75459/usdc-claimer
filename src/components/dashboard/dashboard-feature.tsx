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
    "61qpu6cvJJHArXbKoSQAoeefRjKuCKF6msF3JeCAH5iwUddxawmofdHPXwC3KcAf3jMspTsrzgfDzcxbrCFQpn3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wJsyo3vNfD9mprDXsE65g2zVXBEwaU7QKqzqiTeQt4uiVfGXrsTWX9KtvLVkc59NHWdJEJmHxsQuf3A1CVHKv7U",
  "key1": "3wwc1sRheSHfYfgkGzQq3JZBphdsNckYBYqA6rxytAewe7Hx8n4mZGHV2MusVHaB9zcUgkszEvuTbhCzUBWM7hZ",
  "key2": "3NF2z61xyyz3GVSZZruk61QAehs9rjXhm7YksSK6iSfS6mEyXCjecToJCaz1LFh35vhc5vHaTWH4Mqfatsa51kMV",
  "key3": "2kZR7RV8PJ4chcs1ChTW6J6TLbyHYGRUr9xLB7SvNaAora3boqpZppJ8iQe8M2ZSZ6QAirFfBfQbnQ2ZHm1QzZbW",
  "key4": "2jdng9Samm2rqRgfAMoqPxGhqLjDidELANKMc41zBbzxim5i8K7bcByrG2V2Bf3xSpPhoreHeVY5utmzzR6mhU6f",
  "key5": "JHaC6dvdxWgmG21vncg8tjijUUN5mMNVJZuQ1G4zkjAfh3DSDK4GNSgapYUvodUrCooSY8aUMAfqKsqyf9ySQz1",
  "key6": "3a4ZeKfWhbgacWiXNURuRYJMMGtHik5XLU4DvzSQz6Ui36ug238kYWWMARprdWLJkMv4AuzSuevpMtuMHUVgQBE5",
  "key7": "5koMDCuZdqBLGhZJh1xbyK8C3UCQAU9vHTmdSAZacMQxC1YpaFh9ZFxfHx2akxxfVUiA6aXzdWhRM9NUbcYRESBW",
  "key8": "5ELRTrsgSQiz2ZgMaQaDD1pNGZy4VtC3ViakgQ3BHgB7FAKLdCv84BCqPzo8Fvi2GC2RKwrMNEMYRmTpA7DKNr2g",
  "key9": "v6yiAheCj2afLfMUAmUiPfLmuHLKN1PTsyRwsRnKM7JacMeYdswjz6MoRPUtPnbLGQLHx2SgoBwK84RckWkVe1M",
  "key10": "2L2dqomrouyCPWCTiF42c28kEAcUpCJMCrEgRBtxtYDyY6KpMQGuU1WqjwGsHkMZKyW43rZBo7bFMiwiNSBKgSRB",
  "key11": "4GXMz7KXPYZZQ5xtTkcPSzkfS6Kgp1PmXEhK5JjM5ZxE9gxkWAggD5zmgYHni2ZPv9YBygEbHDJCMTpgAnAU44dy",
  "key12": "4sPKspqxTyYnw7s9wHpSDP5BEc1biE1c3RJUxcToH76EYW1pM8v9Uciru9V61dYuK2QSXZwq5NrhcjazwdZpbkxa",
  "key13": "jAFFthJ4SGk1ZsB7TyXWTGzd37nkUAHKGoqiLu3eBGZZzNUUuRMhHmumaLxqN8tk3JLnXcxhewbyEU9pQayvts7",
  "key14": "LGGC5kczB4yz2iYScNriXoEz8xaAbS3Dj6c5FjfuYsHwv2kLqYkpQkcdXLChKa6XfjwsX9P2UrNRaF68JauKgqj",
  "key15": "8zTMh88LvSVcpXvDHXeToWeyAdTsszF6w632aACwoR8hECxbqnbzi7CJGA2JCvQCt9CayjJqAG537QHHACXz5nV",
  "key16": "3PEDyQCctcEymkLEHhZtaRNzvhBdx3vUUAFJ2g7Mv28RTc2Ng3in2sUZzqcWojuNqmE5CJ6ErATbYYjQk4sh2dPN",
  "key17": "S4iLDLgocqVerY5jQboYWGaZ3jWg1FN98vAPYEyFFYxfkHK5KA8NCGSTnDjFH2eTkA1fEFcNXfgqzCs2heqxRmN",
  "key18": "6WwH5VT6DEsFiGDmdSYFoyuGu4Be28X3i1wTPFtRNd6FjvQ3fdLJuiiuWunDk9Rpp8YBFJxkh29TurQDbt6rUFz",
  "key19": "4hxPcWzR9FAfn4fvANUwhp88VdNoMsdvGh6WkrV46jtRQWGP82nViXiEEU7E2C2N2uBd5cU5BcfwtLoHFneNFB1n",
  "key20": "4mHwzNVf1YGkK87Zu9iQe2BrdRVUQCCHEoFJCVjxTsNcfZM7K5dBJLUMWwJwK5Hp3coLmmrchWpWPJCYiibCbsqX",
  "key21": "5N4xxRhnw2e9cqkgzK5xVyfXUBRGBdS3tqoxytgZir5Rbgd7TLpXfPAMRBKWKFKrUcAeZLvySGZM6s5nrskUxbDH",
  "key22": "5tecuhFZwmmEbE9GroZBdHVYdPYh6o2wZ5i6ZkStTNCtNbPUoBsuAXsU5eT6Usm9AULghcY7FG9UCr2zMAbLdvEP",
  "key23": "5EH4eFftbLV5iPgWZJMEMaFe8eL5WhZRPw8JJX3hArjm8CREQXg7PALijkkuiBBhYWZtnwVdvZHKiTx7z7bnN1dG",
  "key24": "5vS6gTfAayrpB4Yfg9KvUscJ9odZ5PJ8nkxLR1bPDAexfBdXnRTAaRVz2fApGkkpCpDVxgib7zvrz7e7SazY2ZWm",
  "key25": "421ER5hNb8ficEXxeNiQ6ii9fYTUoQTLofXDzq5zBeS2r3azmdZuUmpRzsK3DpC9BSimLpBCmX2stZvarrXjz4bW",
  "key26": "3dYYhXKsmPzSCY7Q7qFfpoays9WhPxi5rU8FietyFBWj3cgojBwFFuym9VHaCNkUe9RZT5YpLCsK9ZZGZxfNLcJT",
  "key27": "4GVY1pkvwwiyjisiP1SpC5Y8rTM3feFxkVVcDYZjc5pBvJPPGu1J1z8rKNUcoMmZe3D6xLvt7pWEN3vFH92fFjP9"
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
