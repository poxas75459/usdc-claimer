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
    "b7dbzZ8yS2fJ4PbxwAMPej3rBk69ivgeD34ToXyTwSUmAwhunq6vCKWzpKHh7idhofn35MyksWHNuZXSAeqZy3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h1ain2oPSrg655cDtZt2af7K76EcS9kDQLWje5rboBaJo3c3H9piXhm28FFWNFg6Md7ztpQUSPTLT8AmqSQmDS8",
  "key1": "2WBvjdntBJNZRaULZxwZnDmRjn3p4C1zDLffm2LRZy3vMCPPuUZTw2RquXw6FCZ4LvGVimyFwAVR8L5SWZ2k7L2z",
  "key2": "2KKG7oqapcPnPUVSqbehMbLykUiBHBSnZvhZAfGDPhTZL4VAmPz8CW2r1pZ3jFgzq5orx47m8fq4bXwCjyKG2CRr",
  "key3": "4x8NouQaNeqfs377KdYLmj2PzhJhZS6aRLFMuFYEYrm12EhNxj9QxLpy7fvHQE2N9APWvU64qPoDEgJFYRc8psqH",
  "key4": "73qjyjJRJenj2Jp6MnibHkoczzFtPZ3kVVTNfGDsEqdUr8Ys6y7VukUKihPrnDf98hS5UGPZfmmQc3ahYgHjv9S",
  "key5": "2JKoAdJz8URfJvpDf8Ywuj8YtLNyrD2qvKeBPBbHtAEcDiEbwLUGYityuMEfNJbZfjaL8j2VjtL9AGsfUkuBpkCV",
  "key6": "EsZAf4mVx6EXSumTRguc2mZtPNBYFeW3TTNNUc4YqfaabTyJ3LEQaETJWdE8iP268uyixr71wYHd8M1WV97E4sb",
  "key7": "3BEfZYbxVPB91FPxEGsvCYErHZ9YsnaWaqJ5QrxUFPXJgf913QhCb1eYRnfxouiGWNPTUPSBuYr9nzgsBGf2gSNQ",
  "key8": "4hpVzGp8h5w3QCmG95HPEyDHrEXxGk1gv9qBSnkHmRYJZwoEVNtNxY7BPaCV7uGMJ3yTjtvcaZLMau3jDKvJBWpG",
  "key9": "64k1wZFCTkVTcs4KiSBGp2Kv5xNxaiwzEb6E2W6M119tSc8EwMSQvzvJSJy6RFcoSK3anagp6Pp4if9hH5supCBU",
  "key10": "27rkn6xRpKKXnHuGaWjQDQC6XX9TKEEuMz6g4wJCiMzdvDZbApPyCeDKn2kumXi9syb6zuRBQYA2WfoSw83gUne4",
  "key11": "46e4pz78VDY4Xz933B5MVmmt6QnuWoyeUnwrfqmrZXyuJRrSUYv1ZcSJB3jv15JB2wsisfxgfkBqU1H1ZGvRuNNg",
  "key12": "31Zjq34bUaMgTJzn1e3PLSTcGGUgL1RqMXwsWAU8KBHn9UUUDMoScyxy5miPSG1Ztrh5TG9T5jczTd49r1dFvWSJ",
  "key13": "3BNAXckHRaHT1eu14SUYwgrj1oHszm8TgLucNbSgdET5ammCswgcodn5eVv8i9NXQuCqU9HxAWsT7xSUn8Pr8yxn",
  "key14": "4rUYG3DDT5G3Woh8ie6YHFTVbWS1uoM7qk2ufqJyYnVGidyJvpFw8zjjSG285qgJ7Nkx54xj4FBD4AjVwVdaY9H3",
  "key15": "4eMMR8PWe1ve36XNx8p4ps4xvS5K5pboed8hMpHr6kM5ZeG1ia41VgvjetSSkMBmAvUXfN3n2F343uinSM2hkeBU",
  "key16": "41yWAQiu6HNqSGqVyfiZQ4UrTojPKBDS76EZ5BGsTLRKaXUyrrtBA7AP6KDaqE119rtGj3nUxcTCALxXxmK31bRh",
  "key17": "4hrCyq72DuztNxJLzb1UJ7oqnZbbWTf6w2s82jpgKy8sWw7EsA4mcVmHs7sHtzKGTuiYSX9qmc9KCkpaa1PYztkn",
  "key18": "36j4XyyTyZnT7nLofZ2j1pTwBcY7No1PbVSCn1wDHgVSCeXq45JAjBxqiWKuF85hrrvJ5QAvPk5RFjADivsEN6V7",
  "key19": "3mjBaj91NdSP6zuX64rENx1xDm6jYUGouTHyVMYGtCU7oduSMxwX5KSYE2ZuwcKf9kfjCxyrTqT929YdLTg7HHRT",
  "key20": "HbDi1UxFZCK2Lz4WbfmzVaTTQRADYSp7UG8czKd1DpiW35FEMcAAZsYb7r3VVpnErBqDLbN3ip5iCViCQMTKRw9",
  "key21": "6749u5E493xgC9Y9xRUirWFK4w5dWJaN4xE2nUV1zm6XEwB1cFWnhAzbQTUnxEDJBk8HVByfVHBoXTzbWNiJLzi2",
  "key22": "5ZbvHKt2hEVvDAdikDWLD5zPNan5Nynhj9odVtJSPUaG7NM4ugEXSFjSzyrWEFXSGecTQXwQnc3kdR7GVLEouYfb",
  "key23": "CEr6QD2Va5xeGcRpPi8eqJc4gvN8hSjonMrjn3bBB68bxcJuWhM1buzr71XhsRampy2GPD5zinrY98Zewc7vCf8",
  "key24": "2DVbkAzN9nq9vG45wrzomWeXAik9pfuCM7xCy4DzMVm4hzYxhpfraA69tnPRp7YaSc5B72ZsH3TcmPjeJ5aYnuAT",
  "key25": "3zxeywQCZVVDYM7KmVxxtF4LHoDgFahpdGT5PLzHW5XF93mdPNhfCdakmpeE2rRcYhdkrgMZ5ySj7HAS4W7trjHo",
  "key26": "5xC7BGhyeZ4ZhFYAC5ndbbm4yeQvx7r2ETFiJNvz7EKBuzXwqewMVViCPP5JkmZbfQqLDQpdCsLcqPn4JsgP9VSK",
  "key27": "56moLxd2nKAqs25woFifojGHebSKVBUmAq4aYwNumPZqpDba7547kxD9fn9eWzTA2iKon1WqMPDuHzam93BD2Qf9"
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
