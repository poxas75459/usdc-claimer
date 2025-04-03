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
    "4bU6gmdu6Wf2f3zM9Mbn9gMChjoC5WR4gyVHV5U9uWM8bh9C3NQWK1XzwNmhVwUdHzy5ckyenXRkumEeebWRxsYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vMyBiD5Fx19LHrTtBmEwsByMJT1tDHkhqpwBCixokZr2Z6EC1A8A7qmkMTrNL7LnP8aPDxzBhoyY7zmM3V9jEQY",
  "key1": "XS4kgbgbpNKoiRjmr5sYZ5YxjX2wNGddTVPVJWZeeDxcZ4VntbBaPqPyXHVnPeVQWAZBFc7BsSWfoBqBdopzqsL",
  "key2": "Fm8bqFYoPxhuXpjKUXKJddBXFKjgFtogyAKC11iHheSY5oLCWrNYvhtcdQCE7T3brACXZ4pEzRmjj18Urm1FreB",
  "key3": "4Epn6r37A9GSA4iXaJaRH79ktu8ZbB44WLfZosrNVw63pgpPTbM4YfrcmCaPGQnweUGVjhLedwGypA8fBpSk64dx",
  "key4": "5EqzE4aRVVoxjKg96i8ygLWd72YC3X5svMeeKWBeBLCmYB9P2ReSxN4bDZNeQP8RLaxMNpdiJWwunYDEsT1sMDLr",
  "key5": "5CjzL9YC4heqwCRTFd51Zzhytu8f1XDePdZFRpNMdDxu3wjvwtpjq7GxcppRkz3WEnuox8SiCHh9Wzi6xmqLCoPA",
  "key6": "3xS47GpU8jS467qXyKNwJqTA6cS662udh9q9UcEbR4GSwSgvSm9pMvbpkyDzWGLwWRt2TKVWSkEYSwVnLamSD3j5",
  "key7": "5CNcjRE9SYtmCegsZikUYo9tXyyf1wnQnVumCXkuwzHVqRiD6sjwNUWJC8ccmyx2ekDSWuVRnBfATA1zxghotpXP",
  "key8": "3guoiqazZH3eEcL63uAwmii3xe855WcGdSmqzKYJqT9yZ27sNbdrYHYWKB6HWsS8rXU9y4LzfAqNac82MBUsdHQE",
  "key9": "JABaVRCXx28kZ5NcYWurruKQa1u3194aJu4kcK7QbTYX3NGMWZFSspk9Se3UMTHNTjTiQeWM71pjDtnSFNUpK3K",
  "key10": "C82za7Rz4TMZJ5CS1oe2KdTrrJJBV3Hnk2iTSsXJQHxmXjvEmUq5LexfJzmNYCm5irdTc9yjpTeQtBmQ823GaKV",
  "key11": "3doPeKaYQFfnZ6UzE7qbP9cT9ju5gaQ254ryPtyrmu4e4Z7uXizixETgN4L1hDnwSuFsRWRPhmeofajfDvYZNToX",
  "key12": "4ubVBuQtmiTbR8qKf7itU6jv8TuHHRYRM554UoJr41oz3MHpaZtsTiVVrnMiLvRepfbkyCxapLJ6jrj5FRqJprLk",
  "key13": "5VymYqQuyqVaAPsXXFXz3WbZYaQbGeAfs7KYcmaFsbDx2dwwARiQpiyK6dbgFzco8BTxfRtSwLYrkvdAp4i8Cg22",
  "key14": "gKyHPoij9r6myVp3NJdcjFvqKpj1aPuofWj6KPDFmtZpjMAsQKXxLpQ4CzU6UAgDbZSoR8KWBUzjqu4wh8Whey6",
  "key15": "25seChTgNRe273yy1i2RFnjUQKKhSs96FYkSUDxzq53s6PFoVw1Sn6TfhWi7cfbQ68vZjextXMbSoUWw7HizohRs",
  "key16": "wvMfvh2xWsmPVkPzQT5qqQsk9kYH2T81xahrKYdEBBXXsLBZEHEYs99rgytyPRFSAKyVwhgh1SAd5WoLSRVx63z",
  "key17": "b3n5ptKS4pKBJGN4Rt7WRxQfctH2J5EZb4JNC9MQj3boegByXp7LCJmR98t6F9HAPngMVSj9uF36aSoeG2mDQ9V",
  "key18": "44AxFvv8igomkgLt9j6VipGEngrLBnRSpUmK9wsWMpgnfmKtv93XqoV1DVC23rtrpRriKMQFU2TwpBBeEMN51gN3",
  "key19": "5RT7pn1enMDZv5oWMGrhmFJny5RqjHM5bZiYAQBduWCDq7K39fdSw75mTTuFuNYrgo1yrDFXNdkS8tuWLkJDNWFJ",
  "key20": "2bNGCamxndPCZNL464tkMiqeTXK37CWfoKSuHmorwJHxssZa2Zs6Sopm9cuEth1zPSJUKqQpxUUQeQunMUejaxyc",
  "key21": "4BRmEaVLpaim7AtoVu7H7CvzWamKB4oZGpJZ9L3o43wjXruqcusESBYmwsJuDrfPtvozc9Gz8cp5HxgrX5J15VEa",
  "key22": "5NRzLYQ3revYdS9oJ2GT6KSpDAZQ7GZGTD9d7UJH665fTb2tV3eB4fqewyoZg4nF4opoCb6tLTcd8gMqbXuwsESY",
  "key23": "2a3qroLMvFe4fQZKS11k3YZzm2Jy9psipLav6CpaydsvgJsh2oqzBJLxE8iXkgXGmEGTjuku8gzjoPDJSp8e3YEd",
  "key24": "uqmWsHq925UeBVbsx3hYRFJqkDncS8g7uxfLfXNL7bn5214fYX8WwD9SYeVkVW8QvwT6jVpqhnQhScF7KtWAQbu",
  "key25": "3JUfagJnc6Jf9nTH3UiMCtPcTWUD7GWZrrBL3mgTRYTvsF2rP6Gr9CLMUaujiou8Aih2tAbdPf8nLkxvPmPsDqHY",
  "key26": "5pq4Z1vv4mMP553u3xiKpGCCH7CN5i4CB76uGwdbrT34kyXyAFrB7DG69MbUtNZmomgAye7ySWrBPGvL3gJ62Uix",
  "key27": "2ENXZoSY5H1inaYB5uA11psaG7A4wHVMMd2Uu3eS8TRFTHk2BBV5TTynbnrL1YiGhcwvbMsv15Y9w3s3cktY1h5X",
  "key28": "273CL9C5nhpTEFn4AVzTzaZphhbiKL7xM75QBebMUWrn4ekLhB93KiPBKWxSkJuvK1CdnRFyzRk5ksxavqXgbjLt",
  "key29": "3ya2RLosEUMjKaQTb4zyfCG9UGorbRVyEXUh2Uky8jreSQy7wm8Q2dPVHNLkwhKBmcxakygr2UC1BU8zd4eoFYyv"
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
