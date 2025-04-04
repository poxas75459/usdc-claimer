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
    "2E5V6LFqBaAUWumRvCybKCk9Uaxvfrt2a7UKeYtN87gjKrCqAyKLM25eakFrQavDoiJyyPZjtzFPdLULUbnZN367"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ABbTuqvhRepvkvTDXGjqTLcn8yqBUga2xwiFXauGdimEFw1dVDMLLJQhBFT7pz3dzseTKLdUCv3gy7idkEpq8Bg",
  "key1": "4zzCneBatHZefTHkFCEMo5mKUChQHXt39eUz7vGHayQcjY7JwEiWph7FWefCB27tzwaYKwChgWnBHvS8dCoFSF2q",
  "key2": "5T1dtK32s7YUjBYcN9hCEegguY5EN59GFUCT7rhErFyFUVxJpnqTMqKW94z3dZjPVmmqmJ4PnKc7GNAfyfpC4hP1",
  "key3": "5niCwDDE62KvF6quvJX4ZzfTBSgwQ48vc7Pu3DaL1AjhiPG7Pr9WiRq8ftMCUjVgt5jN5G1XdaqbQBU3vHNQgBRe",
  "key4": "gpVXkak9nJmLd2bmznT4zyJtMJYmXguvL9rDeEvH3HSUzde2NAKoeMreswDPupRgd464wSmLNgSzqMzRKqxGMBJ",
  "key5": "3HF2unfFQoXUBf8atJquAwr3cWq4eP97VnGE4yudC2dctd1jNNiszHWDtErfCQH5AFWeBxa6FprtWmavokYe5PSk",
  "key6": "5Xo6yg4x1gRdCYterAwtJ9BqjVhQ4bEbTq4JesfFJ778B7jqyjU8qaXq3zxsFWcF4aMCHQdMa1GyX2hGKBZxKe7f",
  "key7": "2cwAwHb86hGsEFbdABnaEmF26kprcZaTTw42KXySUMtHcFzK3QXKYGr5etLreTe2aZ7EEGbM7CQBvZThHuGFkYuU",
  "key8": "4u9FMbsyKVS1Xbcdjs1xAZu863m12y7ypYSEwTBsqFrYStkw4rgdyHLN1vEwS3ZMcdvwfiv2786hTGhR9Gd18yxS",
  "key9": "3noPzbzbM3uMHFxQPJBYo5kNuMB4fBqWYm1qeGL1zLW9AFW25dmwgEWUKZR5vZDad8QwWsZq9EQF7XUY7FkxZBmR",
  "key10": "2mj1CkSwiiTQ2cXBa3Pf2VVyJdAhpsHnv6LeRnQo4vTuuqaRc8eMig9zK53FkdVcdpAyov49nVPY5SGrs9Pv61k8",
  "key11": "dTgfe4L9oQohrqio81tkjvjccEfwBaSHyHXJ4p9EKHdUGLMYkHQ92vKQ8TkKDUkRHjNXstt8RbBQospJNYTH6zT",
  "key12": "37qYiqqhwsbtibp2LsrsMYB55ybeP6zphWRR9zwXnY21aKNGBRyQYbDSsoTYt6JCdT3pFbJBMkKJdiKpC5cLNPgD",
  "key13": "5K4XvoAw5go1DcCjai8KidoZf1kvSndcJegx6vFsUshgvPayu4vRqLZLgmswG3c9qt5nrjWJkrVVkKBXrozo1iCE",
  "key14": "2HQZBS2ku62cHTuJ9S93WAqNk2rhHh5we5iXWx2DC7oLrXoYWbufyxxWb9PwLUgHeZkUEwuJagwE7eYaAXEZv8YA",
  "key15": "35uBqWnX8xEwFUkg38bEtHBtrnEHUYBVMtwG4ZJ9YsnrnSEnx3E6HQfKuwkhGNjtQvaXmnAT88H38X7TDHcYzjvH",
  "key16": "2yQba4CrMbEsW6Kxr74v31dRrf4LNFUZKvZDJZ34BHAKWDP6vW9HBRwnk74Ga7mdxWL1VadfycTXDukWRUDETR4o",
  "key17": "4gWEprHWgtc7vfRNrqieCdpsZez6wkDBUF8eq1Y1bQKcQqkpG8wounpJnJMe6s6rJiggDNyh7sedE5AMvSLaWpPd",
  "key18": "3Ak8HMd7k6niKKZMo6jTjHbUZ3VxSXqXiSezw6HxTy7mqzsJ2Vy446ByuMATMKzhPo5TEKyoGjLJdSJak9s9ZgEM",
  "key19": "zBnmS62Yqd83Q8RuCos1e8Mx1szdCV2fKktHzbMmfc9o6qLyAZ8cWCrSEfMiLN8txANXkMWxHXpFoJMWC4BzoDQ",
  "key20": "4Xz9iQ6xEFkzWrMLUaJPk9198kHZL15otL6p6CTcthYcxAqJDmTrp5taY3mFzaQ8YSJSTH3p5izCLMx2PyvTxXLz",
  "key21": "KzWHaJWEsx7y6c8fJYRvJLdhLAbKZ2uHWYGq6pbdLCQvMTjPstgVxbJnkwnH668xVce7oau8n8aYRm7y4xP6ArK",
  "key22": "5VyTtFYKwJsAHt1j9TKmA6ogehGrPqYjbzKnzrTAd9RunTEPS766yG4VEW1sWpmwWwYwZibd1bd7p8gzGbyerkGu",
  "key23": "kjvaeFe8mxYtdL6eNMjjdxvinQPb2eVfg56GG1PfDj7N3kQcLSSYYsSSMRFTwTBUAL2UQESp6DvNNYonTMkeWhH",
  "key24": "3inLYkXd1h7oHgd6wK8JEmPWY7p9NVUARpZg87F5j2ovAsTEkbpk5y4aehcCtuLn8QHehQMm9FNUHuiHFvsksGLU",
  "key25": "5K6aU2FqtEJBNrJjPNHtFN7x5MgFNVhN5W1oz1gQchHDejEPhW3VWqYfYhgi1fmiFD8xJ4FYx3pW2As9HtzLq2zQ",
  "key26": "5k6rs1cfCAfmrLJkYbZNj7Uqdc3KPvqEni6TXViA6epbUbrp4vd2qEU35PRRfdJXGwoByknBkL8Pg86K5fN1i1Qh",
  "key27": "3KPTnQUTmcqWsfhoBQjpzXaUcFsCmKVWXsF1qdieCieJfPbuXbMtW3KZD8SKf9gFcX8ZQa5pMKDQYck5wLFedkoZ",
  "key28": "2E2Vt6LDmtd3RnrajMoFZGzwCDg7j4DiSxyGBpGwG2rhYvPEYMf6MviJ2mvZLPTqwsgbieZwRSFC2GZaLuZ1KEmm",
  "key29": "4Lejqs8oxuqGe2p9DR3FRBfSPQAzHxyAiURB8ZQneDRDztUFVU5nEZXi1iCvspDJSQjQ32sNbK7gUZftbR31FJmw",
  "key30": "5vuPV6SeLhZjcaJmcmH16jxfeo6NSzBeZjKHuYkswvKvwx4uCz3cA7DBh46fbVraZrn1SwGzhHg29YretWkjHoQV",
  "key31": "4MR5ZT1NbSYWWdViPLhW6HpJZxXiiHJufCvprtYrh8GDC1pXTDTMeqsXQZNh7DgW2wQA8zazd2Sxbgn9mBTZLNWm",
  "key32": "4iCb2g7EexCcFUggRK58a9kiHnntRHaUuncSfgqMCc1e1mqJdV2r13acNkZDET81cSNozNT8SNXmtdKraU1xRya",
  "key33": "5VQszGdUjkEMgZsdxEaqFx9Qqp9rVfFQhEkTCKPr8aAUTyNj6TUKG5qmDx1DkLgJ65G4KQtMnMktFP4abkFEhbpz",
  "key34": "4ytgQg8jqfwpMuUJpdqSXUebQrugPbdwAZS4au9JhkSKpCmyk8aG2GVzDrHt6MrQ5uyE4PqxMrzinLaRedLatkLV",
  "key35": "4oMG6StKGvS486WJHL4qowSnTe91dKxNhLN3k5cLZvh3mHRTpRhcGoDsECyxX5W3trp1cXdi69x8CTM4d7p9A4W7",
  "key36": "3DDHnezx92RTJsJTmN8Lcp4BCAc6ZkhMMbeK5qD3gR4raMUUnUSt4X8hDkVvy81AMMi29vPmJXBL5KDNtHyYrYd4",
  "key37": "5t8upeY8czG7yUgCFrK7B2RhtieC9yWMfrxKeTgPPrLiyKubTUiK82rPMzZ61RRcmqdRYwZw4kpWkD8FHnKRxQMr",
  "key38": "3it5hWe56oczndx8dBtzycyvCJqKSGGC49ZL2iasrsKyaWzxdhKquVnBkSs7BhZvgQmsjbzUsDcmioPGR8AvjBa8",
  "key39": "3TMWGHJNkogXNCyHcS4QFxB1cLTuu4gsrBx5QSviUhvksm16DccHSkr6XBUDxCp3Jsb9xBPTUyC5LpVpuvg943os",
  "key40": "3d84jSzpSzJmY8ALippFTxLcoKwSxGa1ERR6Sjwp4ZGKsEsqdJVyJr1gM17g7PCGAeXRSwkWy3GFPgYJChh4A2UP",
  "key41": "D5i3PhhgaoZzjZehrEQp1vtEq6Qe9G8UcsmqBzmWNj7LJcnFQoH7kWAdtDBoHrC9pYfd2LV1xFBMUNJ8oL8QxGL",
  "key42": "2ag9bsUn1vh6UdHZCJp8f9VDqExKFQYuCDLvWh5dsgeip9xDa3RVZAqvpmh7eB3DJzStHyqw5iAojfWZphGcrbxN",
  "key43": "4aZntYCmGT4Mbhxcr1oK1Y3FwFdDEnA7vH99htxdqd6k1W2nwAnoWycX2xVNDH6g7a61jiXZG5BY163RJw71iNY",
  "key44": "4KgtdPoZBsFqa7pGwqHw1N5RpJuSqy1HHpSMZnYTc1UCg4GUisacqzsSW3xD82e8jVZ8P1oHuz6oTqxfMCBZpNa6",
  "key45": "496wwcnFDPcyCqUuiUuZsvmD6XwteN4TxmBN2bNj6mPfnV3xAtEoT8Jo7JxGLgBntkN4xdPbWzWFJeroQChMwZar",
  "key46": "5e4AWV9cKPezBkR1PMu5wqZvP6XZ9AJSCbVk3YWaYbSATDwwQkkfdGx4FFtw9Mm7ZksbL3L1aDWLQowYZL8sL21m"
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
