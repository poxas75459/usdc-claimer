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
    "3Ed1uUJNx7bmLmJDFDNW5UdyJfg1cvDyTAN7fgemJwFzGYRnVeoe8JStya6BBSvTqiew3oCcrSVUQkWW6VYq4pz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZinLMKcKoYgs761BFZTANhBYVGnLcPoPEZvNXw72DwqNRLHivdLdfrQVqBkFvLRwQ74Jwwt84NVNUY9cYPPEbxb",
  "key1": "4cN1QZu95z82W5uy1YbSNsCBCCYCKF7LrGcaZ2ygpxefor8LrvQ7mdYkmWK2Z9nFiUoHYaPNXwgBxabSAURp9E3F",
  "key2": "5rBYvSpKeWK8CX95nwFsaVNW68HSWByr7WryTSPXHdzRGXJSfuzxxSnYsPVDKCakHx86YucC5E7XguMMbPS9iMNV",
  "key3": "5pN4BX4GtgQACoXE4zu6g8kYVp4h2gCvXyk9z6j4aobLbs69x45g6m8ntVNf96zFV6Bc63m3XuZU3Mpt7xfw5a3P",
  "key4": "CaxrQKsaVCN7kDQbNL4FSba1AAZyrxG14PoDi2UxueGCdbCPSZKYogMgXq5Tqt5Py5HZFSqqVUA7KKiELWN647M",
  "key5": "2CcGRryAV1bSeqQqBtnjcScp52mGQea5Cx8g2zdT6EzkBuzKMMBw4VQHHrP6fFJqUVY8SQ1cUqnTpS3WJ4PRNjd3",
  "key6": "4xixgu862HZW6Y8M7VRRQvF1WKfezxvQVjSH2rAfJZzdjG9LdaejZwm11wrAnQW1VfukurUytS5gmm4qv29AaSGj",
  "key7": "5oUH8eUZz3kAkHtCJUG3YcQQn7pivWUzKm4jqCJN2UMZzkyB4QpKFNDHJgeYBgm4mFGEHVyY1RG2uUNeTTLjvHgN",
  "key8": "45wRHipshRGL3wRtCCSMzPy23XJFc3xaEUH99oeKHVquVVcku5sSCagJupj7uJxfqE1gXxcA1b14dEerCj8jLb5B",
  "key9": "4qhMc4m9po7ucKpxX418BBnpMAEwYh6M944yFNs8gKgKjAZmRpxCT6iMJ6TPdbmAYJgFoKkyrYKuTT5brwhfBfa8",
  "key10": "2rGAut9U6bQ5g9E8JvVitQQ7R1Myao8VWVzhvvwuJuJ7so3RpAg1pBa8YW9zmHHvJwQmyAt7zQacUYQkV4h3Dced",
  "key11": "3Et9tfGk8Qe7k4xTHNrNTrJ3TeybBSZ2soJW7KmpqGDXkMpkLFEVTA81QGuLGoGd77o1DFh9eogfg5VeXQsMnJqW",
  "key12": "3vUFL2xk6JYRoWTomUXEo1CPeprGsp6uTcfXVCiEDNCqUWtTAca88G3NXo5dMQ4NNMw2n1f9zrKRWFHXNC3RUgWu",
  "key13": "3ekGpA1mqsUMzkpu714hZ1H5SmmmYaxahSkTJ8zG34KBY3zGhoCy4U4nt74Em7Kruk9DksyBz66aJkAYoHgYieM3",
  "key14": "28kG5Xp6eu8mk3jbWcLWPXYWevxgLSRvBbEybqZVs1eARyAKaSYQRQyzPNBLmN3ASCHGqQGW8s1ttTdS9q8UB1Gt",
  "key15": "31hBqxzb2fJW8tmtyadzxu3ef2PqGmMXFAvdWxT33iz5hNdP2ixvM5HnoqCYyikzvwaxedES2YKDnmD3QfWcStZK",
  "key16": "4WxMDFx4Wt38G8eiUPUKt4bHxGPgEpqwq2i45s26GHV5JbuXXmJVrB19vvhVR7uYJsEgyPxFFBkbMwRc4PPhNV7w",
  "key17": "4DfYFnUajaNJ2EKyFrDP9whvkN7BEYhRaydThQbZsdPvyEmN4a1CUi3daesB1dL5AuU6tWKdcatEFRH72ED3oVWZ",
  "key18": "2By3cL2xdScbgSCKoqtJWNc6zLMrGW8P9uNE4bmPD6axCckv2mN8DfYqXnfu5MCVm1wJE93ihvGh879zboCVY84B",
  "key19": "2oZ78puBHjuWUDNrnogB3HFGNiVNiSDGsmcy9q6xUMWJLLMzqDo3Sf3yfc7ifNgSkiqnt2KR4N4RY3d8EMEypRUG",
  "key20": "2gnWQDdi39qUaj6PQbvtJvdNfFDGbApCvB3PV8QqZFMXtrtGF1tfPTGsxJ9jo3QbuDPiPYo7bgybubH1CdnrXrN3",
  "key21": "2HSxHsj6SgYN9TK6P8b377gb2mJ2cG46XSJ5csmrtaFX3vHUmfSMsjePPETaDBYVcnyCBjcwsZ6oJAPURXQR4joE",
  "key22": "kJZrHS6rheYYRXhBteKL7j6rzqjRinZLdWLu9z4yezHAUyDZcNKFsvbgFZWbJsFybj8QZuijaowPpVhCnamCasD",
  "key23": "2ccMCHiFLzLL5KCKmkVUd5qSafcACcBDoB4nJrcAKqLkiFJdhBanLB4hEjQEfkFNVF7qQn7bQWfyZe6NuDMCyG69",
  "key24": "4k8ZWYNDi8QvLWXQUjzPgvJJGAgXwtES5YjkpEirkibzQbM3iS4SdotccN2WtuANxTvfzea2pRHeqwig7xCK8wC2",
  "key25": "2GEakMMDPtC1BwXm94QC1tcbRNKzpitDZ9JHawn1jy59GE9HoqbZoKrVTV5G72njPDmAvnrkTgGzrmZBFkpUsgqZ",
  "key26": "2qwaeu5R4hLK7TdZ5ga6RaxiMxhy7s2Amyf79MgNwzq1tgYwZhY4ng1TTsJhmTDCZWWqkZNQbnwT3zqCTFvEU767",
  "key27": "5nvK8FfJzY7mf5GqYyXoEhfniRgk3W9YQ384jZNgyLsFV4ibt7EWNekDn1CcZXoQcyuNZDo2NwVTivFZSLgFXbAa"
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
