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
    "36rMMDcHTzqb6sk3QJb5SZbm9ySxz5QHFfqJQ11WsfxeJbqGhhFHWzGhRyhovYHnP6NsNCssPhyWYQDZCSPVeHBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3azRNkKQE8Rm3VRaD2iF6QGUAFQuNH7ft4Z3PWeTNx1duJNoRdXnh91mSr4kz1GBcK6drSXqspxrNYMRKahRDZMM",
  "key1": "3SCtSwhJwREFbT4S2m5v2yY311mow2fWENK69VWJjqFMesrQycdMYCw4RoFREpn65VXRCcfyrxZdN2kwF8gi3TpK",
  "key2": "5bT8QH52xr9LEXbEY6KcfJnbm4ZuwfMXv37ZMLndmLGJnTLHXHLnpmTbGm79dTS5fGwM9xxwm4Rqg9cdFZv2vnRf",
  "key3": "5aC1DGwAgwzamcWFoa3TfbGXhZRcgEUgadoCPsrTEMCGGHd8KptKG7H1fDyQrvfUxYLzJNDhdAbhC77oE1A1tLin",
  "key4": "2uRbWDB11Ckoi6e7LDgHuszNf7x8wCBPV3n4hWAqFpzmp4R5VbpwFruZ4tS7nFgPt8KZATTGJsmCiihNkeKiXjUM",
  "key5": "34xo1n7mERsgU4EKanegF4cboJEiuW7WYMn2B6cE4ArdsPFEP7vuW6pYMas8qDVVi9TP9fYLUPAyfEp1Ty4x41mj",
  "key6": "2RcLWGF1vrCCYH6CeQfmySj5xCXSEVYnwQJpu4ufJvMrYsWdUXTs7b7qMvXT2gaK2MEFrebwQTmivc826zQQfyDo",
  "key7": "4B3NSGHnfL1Ro9HHH7XKKxwGeyskCzMexqdjSi9rGYxX1Bp6PbPUDfBcENk2YMNNJmB8XqP615DyJjBt2v22itF8",
  "key8": "5DASmQ1CLFRbyjTq2U6b9Bng3WoaVA16HjWpjwkQC4wsKBGPdgigLf1YHCEtuuLxfHE5pH7ndG6oRwTE2XrUQExe",
  "key9": "3xyrSWTQvxeaw7QwtKTad3j3w87bmyagLpkhLVTCr5pCWFA6xuKFprmZSHpqf2VSWvGcsQmkJazPxvKHVGLb3NJE",
  "key10": "495MgcSL2DRe9f9DwSx5AN2TkUe7PjZt76Y8VqUt56bmPGAdYzEUymj1yj4PD8nj6pawnnMrXc6RVTw9scehYk8T",
  "key11": "63oNRj8oqZivKF5Wevp5cF3Yiu43t6fbzMnHA9DRBMy5TueN8voJDcPzdKWFHR4EAR94WXGL83bdjweX1HxkvcHV",
  "key12": "ZnUdcFUZ6q7hRVJ7d8kPwyUnaEDFXbALkx4rGBqAxMHi9zQPdeTyN35hVmECD5h8yvLTwBq1W64hvvsEnNka4ut",
  "key13": "3DWff3G3UiGFAJZwrT5p8dnqXSQDFpQ3zXoGALGU65yw171pKJ3wPezRYQMSVEVBodYRtBMgDNMWH9FeAsWAexBy",
  "key14": "5jFjH5HkgQC6AhEixhJwxSxzmjsYBcr9rrgu958u5yZCRZZDXPW74vcxZMgd4WBDqHAmAA1efs2UxUfALLXNyrkA",
  "key15": "e2iH6P69s1gSQXTtw6vzNFZsBthTfXrVxwx1h66GfxGU3po1wAzEpfR6VcLN1e8jzkxdEmB7uRMdgu6RVuaC6j9",
  "key16": "cFGLWktVpcWmEfd4iaafppEcHDNjEZq6SHh7BF5tbzDCNuS9agHWYdCN2U6CLbxwLzw9qmzcFjZQL183dAEFm9K",
  "key17": "Lkq3SagX33vSzPXZN3WCFUZMtff4Fn6VnBTvQntz6pvJxgC2J8VRj8a95khDp9rETUrUFJMysNnQCSZg4TJxBCL",
  "key18": "4sUveuhqiiGLs24YGcNMBwgPYTNbdwdP7Qz7Rat7PBdeDhbtJkSPBa9oMxGE1QDc1AM4KFUFmmTVbnnEmuy2NpVM",
  "key19": "4VTZxtMKnG6LKPjwLXXUJ3v57CPuzymGrRaFw9nXFxRRJKtfiZbWQ53yycS18DRxDiVUB8QvcYA2QPPK1sR6u9YR",
  "key20": "3oorM3nod2o91mxSjoQYFznih9kWEqHLHyGamzxSEPJ8Y5ajBMF4JpRCh3hjczn96zQkE496P4RV7MgDUbPnEZ4G",
  "key21": "5PoK3HC46HZ29MVpKDmqVwGpyZEEvc6yoApZYvUgdPshau5D4KJPJZjaq4po5HZHeu61vBkkV6LxwW6MGMmKWv6P",
  "key22": "23UhuVGxTJQTULnN6CurE5P4Nhgogobo4EEr8WsRQAH5AJ9tXcdKoD6ECoSQNRZqHWpjTFKFccRgjisXyJ8NaPmC",
  "key23": "5baukfJqrCpJV8dD5C5qxd6NGv5noDwZFRmiYicLAUfQxumZ1QP8fnbzbN1aPyr8GjbNHmzMukrqwqv7QeLEmVR9",
  "key24": "HqAXRe5U2hz3aD17HVq43tk38ccFvR1P15H8nMG8uuLSYaih3y2QP4qF6TQ3kSyStiC7cWoUYFomuPxc7jvxJWX",
  "key25": "3xWAjUV4DeuUbEpprUCoabP7oVPzJKkDELSsCBRbA9pWBzUJ9C7PJW8FG2SdgeoMoex3yoosigus24bzhdQBG2Gz",
  "key26": "4hieABQxNm9taxEQDPtzyAgcfPrdbMYAygK2hUEiUqdvqwLRMaGBkvyNwcsdpRUisvhNcdNjgDDZCALZeVJe2vDw",
  "key27": "4zHZXjV1wGBvcahECFBzJWwaBsvUFcC2exDTX9qZPFpA1jLz2VY6AKf5Lt2EfqZ4QLbRXq559VeVp3qffQPE1taA",
  "key28": "3BUcwjbFUvuEMzPcYsGqz8Ku5eUmnMXLKkddWfAodqF1knGnqZnz47PknNkstKMaYttBNz6qLTZe95bzHDmtaaWA",
  "key29": "4RGrHbJCPKNqAfhxWVhuf8jGZHbZkZU9U9agWxJtxg8c8k95hkGdV6nzCDnvZb8QuyaP3ZmzPAojKytfYAbh8vY7",
  "key30": "4LLJ3DDNXwcd2MLcqt7yQ53iEcprtom54AjztZjmBSPiKhCnCsUqYDjzrwpsNiYeakfVxwQwNADozkcTg5dYtfES",
  "key31": "4UaG1c7wH3uVwqPqSq934RmqUjWrw7RRCNvrwkvQsPfkmRv3X3cfxH6ogn64VF4hxCPYy3JpChKT5VtpQyNfYhm3",
  "key32": "2bDuW9rC7xTFvz6B8AoggVUwdxbZmgVDYoAoNN3tKSvfdrHtbeHxLUQpjdB2qjjUds41cdETxn659i7EDbttCEfb",
  "key33": "Mu9R8N5hnjjJzmApibL4LxRs6bFPKE6nJhYq455nyXN5gpBaNngbXAV5TynBvbMMv6oLtrESa2Rp2MAjjaAwZ29",
  "key34": "2ZX2STfnhfCzqzkCQUXzyVFi7gzYTC4CxTfoyJaZqThv8KmbhUeE7hht468q64hzxBPGLzKo7Y7ztDvHSuhVr5KP",
  "key35": "4p66rbPpDMg2ZUjNxF7Busa4jedmKLQ45rrNRoHjGA19cxa5xyDCaTN8sjpVSqoVFjEnWCnWMuy6QELcMSng6Ed",
  "key36": "52kaHcLhcQw3ULeQhXVtQerhHTmmmjXBzA6dn5HjioZ4C9B8wEhLsJGzvywaNXTN9uKyTJcD7yZAVZtuR3sYX6BD",
  "key37": "4hw5dZeQJ6FUpuHASe2fbu9VUL7nXjuQbXgZYVLtM7ZNhRudTGcfVVJLAkqQ6DB1SkLA8FPqSYnpX4w5rAdm9zcu",
  "key38": "439DWe6j4EgqcgtKWB8nUf1z751Jp6SNq3bzKQ9ixdW7o13SuvmjF9mu94dUnSvBqFK2Wq1iLYbYZtnsThs1h8QP",
  "key39": "WzHKhKJtRSVSA1AL3yNDRcNHdD771MhZ1UPSAaBcGD3jiMNGNLrmvPTb6p65KJTwdzN5tW5KokuhebCYG1FMFEa",
  "key40": "3s18rH3efecYHk3Mj6fTu3oyKqv5DesEdJ79MjQYnssseQHF4dJHrcqhQ4RCv5uAeoFJ3jx2zuNfXy5GHttJrGtu",
  "key41": "4N5G5jB54HzDB4fmk32aEpiKuUiqabhTKuAdr6VEFgCBVews5UwUeCQ9LnpmYM6wLGkmnmUXAHQP5jTLn4RBTNmU"
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
