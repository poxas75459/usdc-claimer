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
    "2CQXsrNzYaYCKaWVrDpEvBgNbDfBaJL9hFCM8tGyAGp522Da57burkxcDidCsADyVLpA14QE5SgUghtBTrnnt3Ff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "peBzAEFkuNcrtzr4sxAhcP5KWK3pYHDp8WVWBsCJ4UezK9M8A5UioEsY66Av3Y3q3VSt1EnRk7H3jYC9AH2Srjv",
  "key1": "5RS68TNRBVXw9Yd4CGva3VC54KVoDzrLYMCURz7csvfSGPzcxzyVEEFD3Vus1GJn7vqkTSE1H9PCWQdknLAsguX1",
  "key2": "4R4vadsCCvMmZetgcCik2rc7edtydPwQ3PoWvYKc19yWEc5qXkaMY35sZX3MsqcFxvznAQe5PokSZ8N2GwpV7KKX",
  "key3": "V1Ce18vB5557qzLCEtih8dP8ENM7dtGPJ2jF9bzynzZLktPXMvrpu3wy2HrBrJUpVeUSMSg7jHBZyDQCmspoG5x",
  "key4": "2BBx7DM4hC2548nppnDEDZtwwiT1TRyB2QMAqcbhYfx5NycP1X4LUexQXDimXtafqbkr472W9Fh8KkyFURfyMLVf",
  "key5": "5wtrw4vymPcC1wZuuPqMKGYr2MnkoX1Vchq4qTg9mEfqCLsm4KSGbn9ZAvB1XDLWWvXF3YjQzNoggLom3CKqzW6W",
  "key6": "59AnkYgChEteMCwRud1uSiZWSux9GiwruyfwxmkUv1YrVwg1Q3dP9ktmGm4oaj7UcFG7CvHwP8dYcB4coKmsEAJn",
  "key7": "5YWXmBit6Epxdq3cNXQ3mZ5jkHraYBNZ3LC4rw6ja2kc5dBc84myzLqFnz7s2svp2Z6LL7MQC5112JGvs42mtG9G",
  "key8": "MKy8TqaPQiQqLfDgHWUE31vZqQPa98YvzDtA7698HLcED4mWi6FBLCcctS9gTqdyRmu8HjQKih3H4ibajaxbr2u",
  "key9": "3V4xXpVdN8E8rE5HQnPW1RFeFeMWzTbX4QZj4fSwVc7SsvAi3VxqGAaNfHmZe3kG8P78JjNEdRYt4tLYS1pfF2W3",
  "key10": "2ssG1dfLdxpMCu9Gqf1k83uNL5ndoy2xMbX4gHw9soLguLQHKuutt58S2fGQicT6oV6Q3TnnLxunTiwa5CdrRYDQ",
  "key11": "2j92aPTAoPC28uh6kyZVk59ii9dgDKvGGu3PpaQnvNsZBWFK56jZBUec6Pg1Bi1pfP6pcP7EfwZWMSvjXKg5AT7S",
  "key12": "2RivhiRCYe9akEjsYG8audoEkwRAd3kvvbma6prt41Lcn3gVRVkH11Wn2fhZ6JcMYWxECujLNdaRCoKFDdqtvWjj",
  "key13": "2yUingzg4f63N5mHqSvMCbBpCSxwNxALfE1q6eFFX6VGyhsULNf1upykmguWAYWKQNb44wmu1QVKfVfTgH6ayvme",
  "key14": "T21rcUPZSTyBcPGAS2D5o3ZwicJTwQ9Yzbd8N5VY6a3G35M5pFR2aLPCGrrXrAPH8ycQgjRFrSGoYkTckLYZzJe",
  "key15": "48gVHkm762r6JMm6me9N3Skad65GnqZmWXZoRgSQ5pdAdPviWxhs8u7deUJrxCAu7FcYN41W1vMY1619fHViy6o4",
  "key16": "39AH4T5NQ7cYEuJzRUcM6G4P8TJCyW1ioHUymZhBpbzV38pVdoQUpzLSsCiKM6nTG6G3ZDJ7TzBL4fJJhVQbBpv5",
  "key17": "3LeerSR7cdRNkQJu8VkHKZx95s4uYqZawprivBPDrg7pc4amiC7wcpEx6w1KNbeTbBmr9Pvx9H3M4XYTbE1XPG74",
  "key18": "3VbMEJDuAgXRGdsqdeYtCD4xWefNvfECHxhnf3SuzPX5fT3oWfcpryueBpZ2MC5ELdFHTnRX8pADm8hKUaq73uYV",
  "key19": "3chRNyUibw7oSygbMdLSFWnKWYEhDsBpyTAvWAytgCmgi1uUPTrgCdBuFwHgbDCc96TRFbJ38Ly3nnKDAULW1EdX",
  "key20": "fKYQdi6jKWPRGzs3DFFiPbnXHxjFyUAqtypjRzwMTijjDoLg768z6Q9gMBfnxu1PEzY1B4oppGVGVW59pG5Eysh",
  "key21": "2hum8nC9r8WMQntERWFKUg2mVjMs62PdhXkrfPJ2ELkJ5Qd3rJTycDsNLKvXZ2bV6QvWxmkd7xpwaBZQt2ThRTSn",
  "key22": "56vU5zDysSvuCEcXjiEtzvGxZqy41Ewk8UpRkxxGRTvTnHVr9WXJZwmwb2s8k77wmQYuWMZgjUq9ZohT8hVLzfZB",
  "key23": "4btu6CALpKFwGLaFBcLYTt2qeM5uZy78amJ8criroi6gdpRJ318aPVpxfpnb2sUvhKZ8Q9g5SyoBhKfkWruEHm3n",
  "key24": "3T49uFwYuXZyCtdMK2MJtRisGye3NLMPiMX9xBwqLXChV7pnoVZLQeFZHwbvRFtkP6DtVmPUS1aZoZJMt9fdWq68",
  "key25": "5kGvueQsj2h2ooHHiJazNNgfaLbkkSmTDtUMB2qjGh2YbuBcPFUz6yBe7eFVNWkd9bSA1j6y1bCPXYxfKzSwYVGQ",
  "key26": "3YrSEQTzHsK5rStFJBhjc9BFCBBQAh2aGvaLRMz6Em7nVhkf2a8762o4RpRa7GiZo25ZwRR8zHoH1Kb73kF7gMNi",
  "key27": "CP6vbzxaQfCcLnTuosoKkN2T4V2HqXaNZ3BynxZT4mMZWozsdtbW1eU3hsdFXwfuTvzpGFFKYJdGFex6u5hvE1J"
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
