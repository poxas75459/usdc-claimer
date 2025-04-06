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
    "RYAmzcXyaLmHVBbExy7shJpVWohTS9BezPPc3peoREjBUsC38EKNYWMKYctvVkmimUyDRzyiD2wYogn8YmkmtoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u4ehMJeKy4uDSiNUT3DPcUkwZdouAtFJcLEBHqNs7wy64wyFFMHgDQ7MmBoj5UFBfRce8FKAGWq98T9MoxoFBTN",
  "key1": "37Dmbb1GPvUCXryzHY3jRgXy4mykVwiqHyV6Dp3ZunhKcYqrcEyE2VChTq64Jf5D1Qk9sqHWNDyTXgverCs81bzv",
  "key2": "zJJJyQiHpcfgiDdgPnNjnpkkbdBeht2Eqi9MDLvDXAPSVjyjdXb5ubB5f29crntKDfA69h7FBPy5g6oCTf9ZRuX",
  "key3": "5NmK5zfxv8Rufm6syK5DdNrwTdAeeAxAGZim7aisdYASbs1grBghR23KbGiyQkkT27E5uwFAEeTc5gZ3e9LLanxY",
  "key4": "dVmEaU5VQKr9S3M7hVhVcVX2YnQ4d4WmyD7CG6fKQhi4g2yxtJmCcVrpYXCJnYrgzfKwbiwMm5qRtcdKwtMut8W",
  "key5": "3PER96s7ALmNxVauCjrqfc43JJqT7DmzkCyAaWHmEkvYQM1b48qJ9gHpJ6aSTe8VUgv3cgkxaCGpfzc4GWTNMvse",
  "key6": "3U9pQaKBidX7hBr1ojqk2dvqV8dV6kCy3JBg6S5Q35DAW2e6QjwmNMphgZVmhZA3Y7vPi8cFoYQ75mgxBTnfXkx2",
  "key7": "5bY3TsQx7JDjevKW9aWGp3ZoVMAmCL3RdfZ8sByeAxQnMHyJJ7FjrGsS4GSZXighRuV511dRAWjFKGjWFvzoKSb7",
  "key8": "wUBvqLiTG9MKrR96a89KLRD5varwydaxKqzWTsb9h2MLBczyPVGaFP1pg2p7GuuczGcR4BvPVePmASX8Nhz2hQ4",
  "key9": "5ya6FmvpAU8pAqiKyA4sGUsxQvkf1ofuRCQSBYrJbMDzt2kFXss7ffaaWULf66kDvr2DDeJCUKbVY73JrCcNHJVj",
  "key10": "4iWJgWzi7o5XG6CQkUV8rBJJ3BAHPgjjC7H3NoXbj7yq2ogXLbmnLeAJgwEV7Wpz6RRTRN7sp3LHpmTcVP2efAMD",
  "key11": "SLjmMLYZ9Ea2MBxToqEgGg26C5DzhwEpUUn3RG6GCPfm3t97tHPyYD64V57k4Vpp1woT9DTRRT6rmtxwM7oRRqs",
  "key12": "51cXMyQrKLLuVSddhERSBoc87YVC94BDUJz7cAqFCtoZSfouXgBJRVrGJHtweAjNM9yuSSJzNrrT7hdyraiKNd7s",
  "key13": "2JF2dgMu43Ca7aS4Y5wcKAv43ZnwbZiWdRW5VcWFriDT4N9hZ8aAZfCfWWkRtNhQVrGdpVXSHjKmJzsuWag5PUf1",
  "key14": "KCy5ZS77xNRHikbrAoX1bGBQanvachWvG6Ezo8La9QoiB2GUXGUfp31xvrs89at6JYHaRNtJ8NRsY7Q5ZtucJ8f",
  "key15": "9L4tXFYXtVzzh6aCHY7Y45NBN9T9a6HLiFXQcGWGeLfxYc1bp7Q2oxnZjuCL4V2CPsdDadW3Pde8ku31x3e3Au9",
  "key16": "7AmumRS7RScqAmRVQv5CAqPGCbEbmWmrhg3dwAJczurS6kCWKn5hFn6CWDckYiyaXXQYaKFVUWUhDBWdXMGfCVM",
  "key17": "5WGhHnSa2uu62kL2DU54fZJP5VzF5EAAtGgHiwBmR856Kqyas1UgXa3czKMfuTCRVXbkMzh7c5P7N6qoN6JWHhhD",
  "key18": "3AuWFNoDbZJexfK5zBbXK9h2unT5snSTwQzecKeQYkF9Je98cV1S8LujWsjXHrzpVqJJSpVsqRUrnQARUvZRi5rL",
  "key19": "4vDynKYcFYCRUrvGH3Mg5zTECXeBij62VpweEMuVAuqHgE8LF9MbAuGWQnHfLWnh9Fo2TQzFFBoLb3DhSHSWxymx",
  "key20": "5RFXahoEkGTHKopZnUsDkHAztbapGvc3jF4PRjnwBncBSeWcFotjMQVfKjA1Kz6JuZpb76fMDWqiLnSrLTHpqevw",
  "key21": "4TUxoz83LvE1xADyoYR7EpLrUKs6DLRuhWN4avT8ubvC1PQW6zMcd9UhM29dukQwnwFkooQ9bNaZWMZa9B5XLVTR",
  "key22": "5r5tyNBycKPRNiGTR3JkghMZkzd2oLPem3fXKwtDS4789T8BLewYmepa5XdoAag7x6GRmbX5Xvxgj8dJCzVLFG9C",
  "key23": "2mxcG4FbGNqDz5q72ZRDqbY6tgQky65TYE5jgy3zSuZEkAebdArzpTtNy28MD1fpu58dauH7MFQhFERc2Gd7rFpZ",
  "key24": "4pR4V5KiHXdEk6u8yoAncGAeTrdrTvXQNz4idSUxTNJz17KksYorhThqEdYtoLUNeXVwcTrG5DsnN3zQFYLCbUDb",
  "key25": "25KVVd5eJCkBKdC17dJNRZMnHShWT4ihCruZCp3pPAFSmPpwJmDZA3NfR38hrmEVhG2Rx1qrcBaewZuB23moLkF7",
  "key26": "2nk4NKxmkrvUyyqewbr4Ui1BcMyV16ZpykUYDFbCmaiimSoVXrn2zUtMsZfF3Xvs3Rej1wFSCmdqpdtCvcXrygrx",
  "key27": "2NUpMmHa9Ba6om5B8TpppKVxJfBacpQiJnujqnmHCns1fpFr4jQU9WhZVnD9z1RZ8t8dRj24gKWGLy9tMn3RwGEc",
  "key28": "3Aw8zuyJbdsLdYyTsBAyD55G3phFusBk5VPVgmBCFKjgZ3FgNvP9pdjJzMBRJHWESXkddKqDHFNoLdn8wb3iuQT6",
  "key29": "2Rx8UEHjedeQ4sRP4pq53e3Mi9efH35sE8usANGxoRY8r9Ns8j7e8SQzbrzKPE4p3GvzerQEvAmA6UyCRH7z5jBf",
  "key30": "2xw45omMKs8ghGUNMuscftDZ1cKoscCsNzGcHYfCxYtLpBAVoNp66EUJzgRbJdsQq9mSJskeQa3gksqEhLLuPAz1",
  "key31": "3nrFNkUcpR6W4MgSPG8W9oqnR6pvdocwkyjUW8Hydq6UnLLLA2we7y5tgpTJxjowzbRQ3wxT7iTZwnTGfVTnZmM9",
  "key32": "5qZcFmjswTr1pLShEatHtD9fff2yjaSiGs2CxaG8zLZGHmZSuLhYPexnxSCTKfHMPMTqYTDyJ9Xhnbg6zX6pKciq",
  "key33": "2EwjosvsLma6ddbUn4zi9Uvi4nqe6Mi1NQRMrfwrvhxE3UJCELCKwSojdMXAYrECAwE7PHPozoa2t6pFbcoJa451",
  "key34": "2t3TAyX1YP2QbzsiDDamMNcnqUQRdcCQMxsyP2Ky2qoQ8DHNorfCTvJD6yDmHdJQ7ynweKoVFEbxvUw9BiU6uE3",
  "key35": "5KSCXccHp3NTd4TnspCStudPwa31LHbf82WC9LPkr71hqQFDdNGQv8vZzrpH2K2RW38DLY3mpdW7aogDke2XLJg",
  "key36": "2FvA2T8hVwcBWPR2mBEL6eH2JxHGH4hei4NUFiAq6Stp2saB7qS8eHgeBE5rKW42pqM28u944N2BTJyDPA9ijyz3",
  "key37": "4a6rXifSJUoSorizBLxqAwPCBvotgS3DYpMEQ885yeaGxiQicCRqQX5ieo7xPURDZyLAb2vH7FowTsXaKb9uwUDE",
  "key38": "4DNtDG8gXKqLfXX16HR7V6e1QNB4awFdekaBkrDTaFBgtZCPSoSMyT5GG1NxxvzsxhZByx9Vnfpzt77q1sjNPozY",
  "key39": "5u1jEuXBnmEdFQ5HBmWe7MGB73i9j5tR7NHb7y3in5R48UVGSmBh3wVQg97akxJPH33WuthzECFUpA1u6jZwja1j",
  "key40": "EcMnGRzHzWz8ra9wBoe1pK5KnF5KSGZFbBBKJv4mE6VYb666DtEUUxcgZfe3c4AnhoDhHAzKWby3WFyKNNpb58k",
  "key41": "3mBBWbkwzr56X6URCyQVtcgkcYcmyUmWf7rCU16MoN9mD5DbE9T8UxRXymNXibv4f5Tahd3CmfdfLnitXm1N7Ggt"
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
