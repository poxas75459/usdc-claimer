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
    "D1YSGz2t3tAJMvGhx8QukrzLUAXNysgC9eBbJjbgBXvP8AnvchP5kSWK29N3ug3euD5hzVaRmHY1RJc6phjdKMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "136X4w2PeH8Bc9DMsTD2Dt3P28DwMUfAYhN2w84mJ9renDCVMcVmm4tsbDdoAHGK1n3bhRB4Nri8Mf5SYgtAFj5",
  "key1": "5ohXQfcrvGQ9y5NQyALz6KrEdzF8rbJKWTazdAjx1wzQNxjZPL2J7A4oEKoiGfFduoHwdXbfzuX3wy5D4gQYtUgx",
  "key2": "3xS2AfZzbybLg29ZYs53WsxXabKNL2HJR6US3GAoYL6kJXwVfjPQ3ja9BimBDax6byyo33wWCJJ2xbYsAWnUfuTs",
  "key3": "4y5ukLLw6jttjviHjZFg919igoGdb4EwMmohgurgHfepL3F9WGygeDQFJrF61iTszpWANeeZdLfD7jYEzjgqJ6Cm",
  "key4": "3b7LBhNB4JaEmudUTDGKRp2seHcVmT64UkmRZX9HGrHxauCvdkkijhBCBCfCHn4QKTkm4ZecBkE2AJJukLMxW5Y",
  "key5": "ACzuMNFLJ1gqacbdnV5VjUvDRmGMGjjEFsPgRYeuQYx12isvN3C1DooJrNhgutQtUKsPEEoinj5UAXMcRwFehrM",
  "key6": "2tyLFhAhwXdHDDvQZTTawTvsBYwFVJDB9D4FsbM5brSzUB2KzpKfUwGcS39kFhQHVxLFACpGJ5zyD5HTT2NoKxMX",
  "key7": "5UqHEAeZZi8rKZeWdYQDPd8Nm4dmbE72y6C6rifvB8ie1AKrL9yM6ouMGdaTBCijacX1sDDbcU2cLG63mVDvdHJM",
  "key8": "2f1uqLfRwe5T44MUdeLxzQgbBHfxunKzP5AYWe3JP7rWEpaYxhU1KMpT2qy45GcFYDqscNFnNtdtkgPQspAMWPFX",
  "key9": "4gfRnucwjZJxTtrHrogfdqwJvbX4KtcN5kEEse22DHUz9HP3rSDpsQzZRsVRfpZWgwpjvXWJtUX4WMyRZc2A4fb9",
  "key10": "5zW57NcDmN4iM8wNvkksHNBNJzFjTQqkSub1YX5xe5HinqBGNy3YGYWnJqgdpvqo86bUcDtD1rNCsFY9GLEgrfP",
  "key11": "3NDL2vJx3x62dS9YPRLvPbNxNbVTihM48AKxM9k3sKTzTtvnTwJFyQuYzJSGJn2J7pDF4nEHFeSPhsSSqBsVgUDF",
  "key12": "4jQGVir3aiWTL3Qbiptad4kzLuz9szLjZje6kxxFc3suxmJP8MBhLhz1wFgiKfxStg7Vw5AUTZwaugEQqSUmDstZ",
  "key13": "6432qD4idAS8RCpQ9Jjd3FwRpSCzc3KTadRzsj9mTqEq3Hb2boqp8Lmu5sdTdjRdApSLUmdXAAr7x7qALFrg5U1h",
  "key14": "3WnSJJgGLWAhM8MsTC5kGcDgNah1sNu2S1TMrFhgQZd9cw3xayS4ofeuNK7KCuabxrQiMM4KS94bvBq5hMsKnQ7z",
  "key15": "5NT4THWJk56pf4tgnChZJPPLScjBY9HnZ6mknSZpMp1bDXK6gVcVFaUHqGuK13mTFGNfQM6i7r2DDYxBxdVGSRJ7",
  "key16": "5vFqNPTnNuukVdRxM1JUqLuvC7yKDkvmHJjLcagQszkSrvvbmsAfCUyEvFsJ2hhS5m4QApjR3Apvjve6xm4hkBd9",
  "key17": "4FokRDugAufaozeC35JRMGyapDHc3mRtcYbygRUq3C8vBvRmYoi3pQUjAQNEFtAF23PaRtrvTxK4YxqoUnpdbGzP",
  "key18": "5F8xjH9za7nQ8TeBv2eQEancmmu2FfCW3BKBf9shXefihATkGw3bd3VGvSBXGXkuFhKKz3RNFH8FRCwgKL1e6Qit",
  "key19": "eePEKUuriLtboQoyDAg84icRSSmCt9e232cbMuSeFDWrKsHKYSzha6awLKcpUgPCavE68RuZMoNNBWiX9kFT4Fy",
  "key20": "2wBiFN8gNWjyGgSWUEQg8bnFLAkDLKzRW7wGAXpaffkiq14TZyPz3k2FyBhhijjVwko78BcYrAF1N7VJboJirNyQ",
  "key21": "6683yskhv97YuJXPDr3TpsqBNCeSf4Xvwkxg7VrgwopJwMtELrcTnd7Vao2NGZyiCKoMC2gVT1vTLFPBPUSZaTRY",
  "key22": "47VnASX5USg65JYhmYvdVQYdtF4NZFiRyeY6dawg8oPDPYw5YTspzZMwrLxoJub28bGhaM2eUG7T8fVW4EmXSpjF",
  "key23": "5SQCrwMpCdaBogmJGtRSdAXActzpuUMWg7sMbDXc3oL4UsizWm9vPi63CUyeKXfgLZ599NXEpSDadQfgjEBEokX5",
  "key24": "3UpfULViPsNtaoqKCikBR9sGNH3ewWjiaERfMDzCcUt77qww9BTswZE7nLvNkjo5tBzWDsfewpzqaqGDNb87ALJr",
  "key25": "vicn8thi9oEFzsDgT9k6qrbBCnnzp7bNjopqDaNVxv5Rrt48tGNRj7wKCJRASDBEzgdGQWc9ZPBMuYqbRyCosG6",
  "key26": "5zqaqu6vztmGq2fpFbnnSW8Vsa3xfg8XyvAMvQydGTjJnrP8ZrXFsiKZzxiapKyKN93JJDm9DBqHvj74eVn8Lzhe"
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
