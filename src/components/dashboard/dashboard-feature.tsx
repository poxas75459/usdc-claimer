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
    "5f15Xewxnry8AL7ciA452CLuxufVLJ1hpDh1RXdPhLBYGihWFkEtcxqcCaWJ2J8JVMH8Cj4mKkStRHsTn13Su8nW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2awdnc2WLRo69nVmRHTkUrhgjT1QGYB8UiEFmQ2vzP8zYXY56baMpxAZHS3sgXbuaufUkXKCwHx6pMe6UyWsjrVE",
  "key1": "BUx6EbdDRzUjWA9uWY3heZgiM8ztvk3QwsodNei3aaTFkJdZyjxdFBcLJTxj4SRZ28rNNmZh4TJNPn4F4o5abcz",
  "key2": "4u9uHjz6soFiisAWtGrZPzzjj6VJShzQyHrtkmskE3njkpDZp3KnY4epajyesjsZo8rAfNeeyfPtE44BTTHuWBeY",
  "key3": "2cuoztBR5tgwcNaVtuRxMfKP6DxZrHiJt16M6bUrBEWNFkeMZzcVjxX6n5xn9iEexeVmyf4ejzLQMLrXsP4UEVHT",
  "key4": "292Prf5TYgsyH89tTc3pAisDgLTi7rLCuwEtaY1kaqEtWKbeB5wfGzMs9bwpqrQm7STHH75zGyepL6UTBz9S2h5P",
  "key5": "2Jxk6CWx9UJCXznFci7DAQTYcmdd4Sgi28u4RiEPDwo1CE7K34YuLvnxoimftgUbjzdA9nnTv3a8RiRhiJuUrXfe",
  "key6": "2SgMUkZNck8BoxjuDeVf6M1Rzqk1qLKbbAekYie5SbbRay3YRrtRpFSuuKZff52x5i8LwhGXmvJYonPZF6pYnVGv",
  "key7": "5y1HtNbMeuAUB7pGyWRZGGpmgyp87VDQwkG6ZDqomV6d5ETGAdSUfLbs7V49WyEysbp4sZXa8iA73v7WhhEsAdXp",
  "key8": "4E1FNu1fYkHB7xp2pFNsmRYmax5jTvMLZefd2iAvx1a6DdiBa6CUzy6EDmSahN2Hmc6HiJy9pKSkpTncRM8qJDBT",
  "key9": "2hzZ7qD2VTEow4GNsgfeti2yFtV96ACJu5TDudFthJ4dco2jzYgRx6U4AsMBWXSVW2GLW6tmzfPJ1fX5881zYsNk",
  "key10": "4FYGq9C5AkYWv4FuwnLjQBEojgoJkJErM58uFgVYt3VnDgMkk6eJdCAAV8JEECix37d1q8t46MjvNJ2SzYjegENJ",
  "key11": "4FVcAywcHqVtwJWc7hYqMtZtLVF5YdujNjVydjyHJ6192X4FRRaDX4UGMmwDDnZiykA5bo6HdgyPhybJ8oTSjUTP",
  "key12": "3EGdV5WJx3PZ1Y3n7YYacJuY3LcbbmByfptugto55diwPYrZhcdQUKqCQDjKjEBUA2TaCYJ1o4SDw73AJ8sScrpH",
  "key13": "51trV68eUrbL9SoGNACMPmzh8V7iyXpFvEK6ZGt6UuMnW9HRBzdHe25odGXdr8vcLb5yMaBhb9SpLoNiYsw7kiQr",
  "key14": "5dsCtR3XTbBjmfrEMJ33NLJC158boqdJXnrSpEW4D6GPH8AUhbqrF2FBB78uVebKcTcvNYkawwVJ63cji7ZETaUY",
  "key15": "82BYvS5ctqk6E9ZvPp18GCsgoXKkhb42D88t2u7HV7BDvsZiN1EwyxTjthFXHTnt9sBB5ZsczMiwrvzvQjiZpBV",
  "key16": "3LbZVN6mKPKw7CLoe1CRvTrXjPC6w8QgRBEKWU53Ljnif6zugFKgyHEr5odKzUAjJN1PvozUmcn7RpqFTZyhGWnb",
  "key17": "4jYZ6nSWiaBcoWXrbLoz36Vwspyt2Vjuj2rj3N2GYQ6uAHYXvBY6FYP3Ja6T5gaC4sq83Rs1P56a31AoLyt56QYs",
  "key18": "4A4JAFV36udob6BumaHEzsJNuA2QWBa3WMSpQskiRAL5sxnepPURmyTLf8kebE21VpCrWs2e6Jx85FGac7u6hSdS",
  "key19": "2xdLnr1d52duqAnU6gevaDEnXUou6AbdVtstr496azuz3EH3aajHN6yL3ZobfSYaSGdcDzp4w7sKoHNP2RW8vyGH",
  "key20": "3qE1A6AHHKoPa4pNKLyc5soHeoT45xry6cB3qixLVMoGwjsLkhqzaetpbEXZbwMkrRh89yRfGrN6SRX3P8sJuCGR",
  "key21": "4EwtzyzJ2EGKvQqZb1SbA72kEDRpHe9aRaRMHgFJeyydcdsEn6xGWkhLXgsB2MuFf5iEFosb49o74FowDHNZgPxs",
  "key22": "3Zkw4YavPJ2eYQPEpPCduT5138b4YcWr8xEnrmKhZXpWPcDS9d7Esk2Ff3KLsjN933CAkYoCCJGskUyaHiD3XJUa",
  "key23": "2tz4J2dGfKNbb9CX9ieXgLhvXdzsRDxcLcyPYwKZTDkmo67zrn1EAap2R4yrT9uBfhe43Z1sBuPYYuh8CEwVCvgE",
  "key24": "3krSwAVWDfnWSaT5pcsmMLdG6PuGQyM83xB77L7uwufB6ZCdksiizwJkAxFRY6RLFvSLq3oNnzBaVNSqieYuG3NC",
  "key25": "wQHtaQM1u9wLx1TCUbmW91fDeP52emZ91CXBFXsZTQ7KnjcjpfxC1Pg1dgkqEjPZP6qiy8XH74Fh7yvgB31GBy2"
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
