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
    "5CUyJNmC9xPit7vTwG29Eo6EGabckQpeY4NoKY8JhBPqo5HRa3vFWXsKRi3RmHA59h1TDT1YuP5ULHynU6dyTB7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AmdAuBCvz6jFmPm84QUjPkHMNxpujh9AVmZkChMmwuX7vqoDLVmdgBNTpUBQj1Srdpvqsi2hrs1ePNbKKCUfA8e",
  "key1": "4W61YgQ5qhwUXFbeuJK9iPpUy4HfghDSUvQAStFvfmX5xkVTQuvYRsJD4gTnCB1xSowEVkuyi2xeMzByXZbXoshR",
  "key2": "44YjFQqbjHxP9ZRvEneWyTG731Ji4ndgcHSmhJmRchH9AdseBMuXmdYkgGuXELVyv8VwHogTt7xJRVaCEqxA7y9j",
  "key3": "4bqM6TFzp421DjiD89gmPNzxq6x3cUL5sRoSkBs4wyzizX5KzeAHsCZwh7jMkiP9ErwKwDda5KRv7FfHbAEvhjRd",
  "key4": "EJ9NsWDVgVxGd67KNuEqukyFEwzyotriHoXmGx6R5kganWx56Vx2826DVcUoBt4wVJkTNzod3APp2AXjTX9eoD7",
  "key5": "4mSH7kV1aiEcE9nHaaKG2zWP2pzE9fAqfFmB6bAxpjipN9AnUBdQ3VY4jtwPCCCAUKH5w3Ea1bJhprkQbFagPZGV",
  "key6": "FCX9sVEaNzSwR7QBGhj2PLb93cNDSZRZUzbLNiCGKRfGjyvunNwyUkLWx8CRg2zQNovNdNDTthpp6a4LNkf3bJK",
  "key7": "4CgEbuinwHyJP8vHpKSkkxGS6SL1j52LumLn8VN5TPjzcqgjE38negbz9a8CUFLMmrttCqdeB6hUdRPY3NsWwMGt",
  "key8": "4PE6Jrk3pkggDbYDSCiuLq11gKyZjvrghorKDuF76mphNxwWkeE76MGPTtUzqu7RzB7rRMYLUzBCwdXgeJX2RKJ6",
  "key9": "2oV4gWS7vDd3r6uvKZYxv91AirGcB5n4NRvjUxUybnbiRDaYocBNedrzipohxUjm9nff7XkSZBnLUzcr2wtpBk4z",
  "key10": "3tzDMcoBmxqBrMkVmpWHPQRXhTNetZuhM9tCaC7etQkUrBe2F3pDfo2PtVDArTBoEbx7kyt8rMRKZHHR22eCJtMh",
  "key11": "66DtXzwm7QCSfLCbwGaCCgx2TUcd5CueGvBBQ91kW154CVqtXSdhbtrKjnoeWJdKMfDfwu56c3CHKwFqeVgM8aNJ",
  "key12": "2fj1bg9zXAVcHT11fVee4UhmCtHXjYP1nL7vDgpPTsQyTgSi3WqXUu2VNQXaXNmdQ72Hc9ReefPz613dfW7QL6zQ",
  "key13": "23wuxD1jqWLc9ma2BCdQiMf1WH16EByUWD36jjTnCSvTjfgNNh9L8tWxsfqqZgkSpv6JVxKoMagt5oCiGkQpAqgz",
  "key14": "4EasrR8hZ7nRzXzpgNN133hasUeNt2MWLwqcqEZzC1RvLEJvwwUVwvQTUEd7AYKNKvUbfNFc12FuAGBFCXDqiu7f",
  "key15": "wAswZofMZRYzRZTzxGPiZAAJMdfqBrvRKQq2gGVH77vwEhJadUFkBAHaVbAapaHMeWMnjMQPELA94QT1rP7ZuXt",
  "key16": "4FATDtBivif7qU92L5XnpSGMVAef12ht6PAtdSx5v2ZnsDeQRNDSA8Hu34sDf558fMEuYL67ktLVLNqPJD6WzU2p",
  "key17": "R2HCHng6bbhqNBAbHAMxCxD8EaHr3pJcpAjz7ePcwsMFeMACgZqG1V3jong7f4oi2UFFbizBcrqvfFTRYiHEqfq",
  "key18": "ALtsJcY9mYeY6aLx749YTftX8abFsGUJrwCkaT3YNDtgDubZAwRpHuGjGZGQLXZb2Pqa7vfrAjmrCUQ5tNsY9Bc",
  "key19": "4AcwDqW7rB3WYmpjvpmVqx1TF3NbyWfL7UPtRZATMik9yqbo8Ei58TjhxC1KQkYCk155PpGKJEyruWxdX2S3q3jG",
  "key20": "2piPMnqbfmTwPJbTC6qfg6zPvY2nQfW29a78FH7jsoqxdo9LfWjGhs21Qiq6CdyYkrhNhNCctn5CVQ11rGnbFz24",
  "key21": "2865GTs3Swab5BubYWkQdpyzvtmVgXS799uc8xMRYKdrT9EU6DbmwqMAZyyw3GP6T2qAnw5cfTpocDX1YvLqpAAi",
  "key22": "3kFo4tjffjUTinjn6BwdGgoSjFxWuUCZTdLddGbQUKFrESgTx2cCAo45NnuECcGoCK1c6NY38mryXbxkDAycypfo",
  "key23": "4btYV8o1fndwidCRug3NatD7nc6EvjQK6Wbbens1apVkZx3gdtsPMAJRzvziiU8D65gNv7eoAgu61z68rSPmmRG4",
  "key24": "25LsxRyExdcGvaDGgKp9cTWD8FMgAXcsrMCmTeay5KLxwhhAgvAQtmB8bmwbSUSLLEf2CxbfiwCG66qxHwFF8T4i",
  "key25": "5n3EzwAp33Nd42D55e3xB6hvy7WqRMbbr7QNPDQN8hx7vMRPK1FijG4mRgP9wLJrns2NdjmCzQzzgJTXKYpApH2K",
  "key26": "3xkSSbyYxsrSAqBcLGgQP6hoDiHR4SB5akxinQvkdhy4YqtZ8Sggd4NZteuUeQKpVj97N2ovPUCNP3qhqhs2gXqa",
  "key27": "CZ3wVUV1eE52cUmDJ138uFL7xZXe1YjXbb42H1VjChHtPYh9TrYuC88mfwpbnKNoarGoK2mK6ryTzQzBQ5mAhxE",
  "key28": "LfZmw7FxdpGsxn7PEteLzUaBFHJwJBPbB3ZaTcA2DxmwMYxVzPsGHp7KK6A5KM7iCu8gRmZopyuapcpLn6Rcb6L",
  "key29": "2nDSWQbRhGMMMo8MnS7va4TeZyfAS27wC6UaQAyWBwM2VnCgZKMNkhUkTDbyqdbiacnP5pjvtQPgbP8S7EZn5zsX",
  "key30": "4HpGLo3HexdRCHqNqEMmfkkPRQ9oXKVNX1TWR3sXYNLCrBWxJRNoCjej9CXLE4GJzLMfgVaDnv65gm5RVuEhhsf1",
  "key31": "PZZ7YfsHo3yM6Um3wqZ6UHUpGx68Z8e3cJBnFxvBMsdX7S2CQKykGXy1dFMxeLCeJmnh6amxrMoUTHM52ryAbiG",
  "key32": "3nYcnqvpEJvoc8x8Q3XpoVQjtFqGs2xihgJZo4pUQKjh2xm3py675a1Yayd7J68UeYmobKz7edGaakKVYj5NEyPm",
  "key33": "hFY9fzCQbspGK4MdM5eQ5C482Kmx2Pi14uwP5VX7okdpoUa1dupnJNZApBFivBGu69ew8SaxozG39NFTCdU7eJP",
  "key34": "2yJjtnJJi6CKGV1s8u7tSDpYPyh9AumPYgQxVrzS9fzuC595su8h1PgjkKYTsDgvP2eKXypnz9mcJ2TADau2MHjf",
  "key35": "3fyGVSVhjiWS5jn5Sh75z25TJzJEtU1gxGvZe2rbGNa6hZWYNdjJhY2XYeNWHcbNFpqsdBmy2DvX3rkotKW6DRps",
  "key36": "5FZp7gLiTWZdZr22D2PNvNENbNTrsjr4EVCYbiwznxjNSs3eqtiFAdAVSyfGR6pDkn7PnMVbBbeA7iqWLEXkVLJB"
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
