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
    "2h3SgRY1qj8kGGHvJCZayzMe5VDBu3beqHrWydufxBczMErWwtoeq16qgW8LaexByxTpwdyxCP4LPE2q8qGo6KHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Xhqw2xZusZsi6epvczB5KBXvdimwcK3BHMsUAdT4zPx8ZmLtDHXY2j3dEKtMvbARR1TxmP4QmDBZdcRvFwrEJe",
  "key1": "4C1txF4kGTw7pk3EqPaXZMJhBsu1ftmnGBoXoYCqJ5CR7fwqXYu81UEs9C646AUszELbvTdvNCYhKWtKxVpN9JDj",
  "key2": "4ra8dgkW5qSnRXTdfoYPAtKY5Cy55GxYDoBFJxepu5BQkrMdL7aSewxrc4aBXLLahgb2iVE9wjHavn32vmRD2Dvi",
  "key3": "5q77hfghLWSAZEQyKRZGupba1ipSxagc9xn6feZLcdbr1paaNkqFSwrqbqh8XTG8SsxZLHL38uoEAWUp5Kd2beyf",
  "key4": "4iRNx4SV1VcpX7heiXwp28VWVAp6K4y7owZ187U8oQ5zi1JaQ7Tj4LeJnvDZ1bY9VREYxtn7pRNq3oQqqthgy8rn",
  "key5": "4Nr1Uafdz4VcciL693fYabEA6Esfu9KuXy4HCr8ZhqYTY1P2C5jGmjWqBmsLTwT4cvLtytN4zvME7c2X332ALmF8",
  "key6": "4v7kD8t1UGf8xShBhftsM55gHFCSEP3bBGFjqjKzkrFQ3wqDyD1eVYBXQFWeGptUceyVLRVivuvREWCZCXPWR91M",
  "key7": "474UmvPBFxGX7Xyr1zYLx5b3XsdfUUZQ5z3UyRyT14zJFn6wtt3pCmfsiM56CGvWK9pqQFUeePooirVRnv5KNjoU",
  "key8": "4aiwtMArpA4DteddtG8R1bZWmEz94ArMpornjGNin1EdLFEqJChqCYijsvygT5npNVGDZMu5N3C9kpELQbWJ72Zp",
  "key9": "5hsuewaXEyEwEDnVnLgnTG6kSKfqk5PhNnbfTJponH89Bo9stu7NBzsjWQpMn2hm4EWrTif9S9ULR7DzUS99ae4j",
  "key10": "nFVjGNXGCpaHMovugAS2uUxHrfvsDV4a1NjqrfjUHrhpfeQJqdaqPnguuzMMSaGjEDKKR3Me6Yue6juPSc6HbVr",
  "key11": "62aKUahimZVFEm2uRDKC6kg8iZ18zjfGe5hhdaBaxhJypJQbiAdRUJZAdvAWuEPv4qgNK9ZwgmePvPiwahAzECze",
  "key12": "3auwLmq1MmwEW25gA6UXSNjUPT2MBqabiwiNZTVoFgK9185jzpxQ3ZQpsTiuENhZEfNspUyPTTWsq75hLkFM9iFH",
  "key13": "ig5k2V9T5kCvkFGhKXQBoxQeayAwkgA6Sc8muptwRSktE71SUoTmTgzWdyt3MBZkBLsir8Z4udNgvrZC2CfxR95",
  "key14": "4QB3fxkRZ9H82ysse7zDaRnb5QhLnFLQCcci6NsjRuxG9ya2UoVQHJtFyfJT3o138RwGAFAaWdke3RGqnCrePvTq",
  "key15": "2NPvP9TckFPSE6R3uVPVpq5ykZpLobQs28z19KdBtUhTkSkVoj8AhhXCrJHoYbHyFQTdbhriy4FpNCTyQPrGJUx6",
  "key16": "2XGM2QdguzvKMTo1j58obw3Rp5HkTvc584jPG8E3dK4WTCEZiPSP8eacXMp5e1ysLTNuvCEZTZ2WMCr7njzfawEJ",
  "key17": "2yxvPvuXM55Jz1bRPYW7NDW2HSstc4aEmSoRuzvCHFMVG3FmBdLeEFkmSyvYrFR44LcDDi3ZLxnThzPr7GFRgnHu",
  "key18": "5sFpxhQmUyixjGaFDajZE6Robmjpx9JKehjDtf51bGDbKE3QmrZQPvFNcwc5wKs1eCoGg9pseP15ouhAjo4q8Rv7",
  "key19": "4qjaMsACjqAa3HxV2fE84pcbo9K5mdkuCVCtzFL5iRdV7NXjNG91cbNAdaF87GmM3o8TuuWjuC5kUoqMgsDTCiHy",
  "key20": "47waU8gETzdFtEJPwQouXQ3QYDFhgifVK77XMR4xgHN52haXPDpF1LhSfLitTS2JAfHN1L2dMLBoseP1rcNCsijH",
  "key21": "4QN6qXqEJNXTRprF5ijXR33PprSXqu3DJGRky1AAGkbMm3hYoz2yapghFu4HPKWcV8zxxXJ9i16V6dA1k1MTbXop",
  "key22": "3SvNNrsdviSpeUpHxe66RiVHFNFxe3jjPbALogqHvJnQQVsHsQg1B9vE2JyQjAeeYxdcHCjshXGrFkaPELwEtmEd",
  "key23": "erN7zWEwA1jv1QHyxjhFpWUUiJU9DHP4BDGRZRe8aYxoWvWGYn8iRT6cdF3x7fVoYfzaXwhQVXguVKqrMBUxMf1",
  "key24": "4oEdQWFaghBYeEKVceHthKFLKg2U7QZAJzaKVQjUxgVves4fB3nqyN1fpqdKga1nUqiguMLrWKS3XtTeoeZMhkkK",
  "key25": "5hsmPayBZ6V4F76VWEYtyuezgr2h6ezmL2VfEavEiwmExt6YrG9wXqfUhtHA3n7cX7vmheuGiq4sUZAXC4MaKhxi",
  "key26": "5Px3j2rmj1MR4ZrdKdyBKyJiMg1qA48HajfHBejzPheycsP3VrDecqvqVyMFiKB8esYJqvZSEiXtVtpeLjmMjX42",
  "key27": "L4cC3gVL1PS7q22ZYHv61dWLo5pUm5vpJVSfRaUDjhSuVULh1FBzqzBVsqRnJuaCeyiZCw2PqQcWJ1ciRtYXjgq",
  "key28": "4gQinhbD4MsHXqXxgAsNYU25m2joxVdPsRta8UsmgApARo2Mwx8DEDdCA3jRzbBhspoSkxu9fLTxdHG6NXP36f9A"
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
