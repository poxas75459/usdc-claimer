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
    "2UXBzfWVHWjt7sxzoXQLhM7CELf86CAkvqhcHe752D6VL1sLGjDqoWbkUViDMRuGvk6GWqaXVz7mn5Dzazu4Ydte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zc1B2G3wMXWRdzKn87URnJvSztYTuDNMtqbNo99rm1Ga8W2Chz1HB8WUzaeKhGrP2NRNpFqw3XmcmgfhVS5bUrV",
  "key1": "29TzGPvqxnJwQN5D48bJXVcCCXRPodZeh7RrLxT1X2PqmaUZduHUurBX8SkFvpRDDBoMUpswaAmsGEHxCT6pfvfY",
  "key2": "ijBhw75oxjsk8NL61Ltp8Tsb7VV2Kx1Uw3BBcbUciwwsy6nJW5YiKHomeu9Rs79eVbdYt1HZ39iGFPQwUr8aYN5",
  "key3": "4zKCvg2rcvBAPkMbX7wh3XCh2oXmusnRKpUi1p7QZhwX69fyFd9G1xPereUYvY8BS1BfJEM9VqLPg6RWxKKypta2",
  "key4": "wpqf1LBaKvYEjeXoLuWrKRx3VzPVrH98HMVSWw8eMwehWcts7TseW61Hpf7zuR25tGcvTHvJyJV7rbFwKibLfgC",
  "key5": "36duFe3e3pFTXhoLGkTLubkZxfWffPnf6rJfvcEgLekrHDALJvegm4FZJrNmFWNSBkFEvXyM6wbaaTp2oyMEULc",
  "key6": "XJdRSqVUXycYadpGJ2443kPmnkrbrQk64HBr35HkGmRjvpv4SN243W8o3JU7sud6iKdn2fZxMk7Fycz68J1MaMi",
  "key7": "5o2iqBULAqhE8ycPpuiVKmgierNoi6HxGhXS8Ew7G5ac4pjPWxxZvvx42uRwKHxsvxVFNthSDgqPqsVEYzKCxYPV",
  "key8": "4vGFmxckDHoJF8Bn7kUwp8ULKnJhwmJdSztaabNKv2A5kqTFjESj88qHUA1jyCanrfuGzcwCiXNYUez88SmK73TC",
  "key9": "xPuqWunVHomVcbWMxbCPDtaPfSk7TT1r6JESHQFL74KNouuNctf9mnV4EUH4fb3V3NhANUhKYEFGDfHbz4w1qco",
  "key10": "3qmmGX83rqNZpSTXgTZunt3g29R1MxYrA7S7JpeRXauNWFiLrRyo3j8djUMAcGxDU1dLv9D2gxM1t6BrJP2fU7ar",
  "key11": "2QMDHEeCLNLgpkBAQHBeod9Ve7USwsC38eHSiMatRBvYny2mLVbadPeThh4GHnzbXws7MH3bCBjM69GCW8SW6U2P",
  "key12": "3TSzGhc4u5cn43rrhRMipaMHRhQ4oLXJd1y55tFpjaCiauzbRYnAEW3yvF3sQzTt1akn6srvzQpTqJuHSGJCSHFd",
  "key13": "2UE6KZqe31fZZ7PwGckMjBdZHqQxvphQxKK3eS3UELir526yYHo2MJKVAsziC4p4cpAwvfuANnnJH6NTgradeU1y",
  "key14": "33uFWVXdJ8oYu6DtxscMBK4AgmFmXJtLhTBs3xc89HZtAMUDRP8eKYR4pbCpdm7EYCkHGPQL9gCMX576HbtJQjeR",
  "key15": "3dKP1g7J2hf1sbJ52kkQzRBNcZ3A5oT76xCoLQwE4Nr11vMdB94XuScLUgxaQU3VPxTsanB17eZa2gKoGdDCbuVE",
  "key16": "EnG6FK4SzJb1kCbPuG7aQ14LRHM9mXKT98zByXbupkmpnb4eBR9y1w7npFiLYzoAuPyxpNfsBmgRRPkbb8ADQLk",
  "key17": "2ebrnTtQmQChWk3LjNaCUedaxYyzdYkcxYsFjEKfoHdwj7CbXNLqSYMFWGSAir3XR8EtaDRMDwYniMVZtcWLmhbp",
  "key18": "3R8SDdUxhH96PXWFDEoLAGXKtax9926gCpyTU3qEdjJn4HMMKbbBiUByJkydmFe8in7g6d4F7Ye4viyRzsUs5L2b",
  "key19": "63afER8zFkrqwfc4np59we9e1hB11RcdrX1MsMEtbYrsXrnYJaJSrML1SqLuiLt8PhD9woDsy9E8nRxS3cGkYjGT",
  "key20": "58GfiVyGuUwTjQKgidw8QFNzht4FVrXsjx4xhHceX5Xk2UYiGX4ehxtaCtPzGdCNCKyN8LqRAJWDLAZ9rV4JCoab",
  "key21": "4F4sS9w1vTvDHWUD1Sis8t7ce784NoRmrS4rKmfHxhTMWhcc2M1sKVKLhFHmA6VS8iEFaxJAYEM26zHLzQVG9CQ4",
  "key22": "xmEKkohmaSNNCxoenjFKymrXQb2TiChkUJKE82JqGNtjjqjmcZqg76ubUcbLHadXCLeZq2QSsydxrVFq3PkwwUQ",
  "key23": "5xjtkQSsSDXggeB6vr5HkWEeV5h6gTXVSoGhr4QmwohUC5SQtT5UfvghFXzrySPxew1H4TqJce2Uf1Yj28ckcDA9",
  "key24": "2XbB8yVRnKpJ6H5UqXb79BFQae5CgACquNQ6A4wJmiyNMye5WeLg5L7MsNUT3S55YzQC3o85oE84LGgWkFDRNTKM",
  "key25": "3wTdD694us97TR8D3BatNEvCsGkdbCLm2AFeB8W5TfoQjbrzEJ8Hw58fYLXQzus5Prvx3mgQ4zDSpPkww7rGaX5b",
  "key26": "92hs86wVN1ovLtwHp7ptdx6Dp61RYVh7FwpS6L5QYkU2t1Wkg3iza6EWPr8ZkcM2KusK1ooqS4toKHUbdy2g1Hn"
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
