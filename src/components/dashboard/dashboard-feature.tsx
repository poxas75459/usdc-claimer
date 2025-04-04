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
    "DNUFHbyFqjxunueuZ2Kvem5d1qpvd5PtXjBSqRi43PrrAjK9s5enEi1GfKrRYqUZn5yVUBxA3ojjM8XsoUMsHB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g6nZbdSven1Kaam5hRCSAnWAK7u3RKJ1KgJkwtZXLj9Tm7GGFcopAEnDnNNnjNrdFDa9FV7S3HQAun6zLjCZs42",
  "key1": "4NcUXT4N19mX3ebn4UAY4Bxjx89KjuVctfJnYssR9aACWr7mTn3CtsnmwLyArDL7RYoRDNj25i7hQZyj61s9m9WY",
  "key2": "3KipsDFvf2vf5EFB7YridijV9rVN1J93QoEGHfYw2r9RCh2fqhs6JmfdxvBSSm6eoFGHHXb8usRD1S4FZoDCgUhQ",
  "key3": "2cVbKmKeyrNm36p2A9u7PiYu4rd65pbDhjPn7omcGKC74z8yLTfSopuc8iJYJTmbR2ATFqoBGvDqZHeRZSsiiXoj",
  "key4": "2RW4wdum3PD3wLtcvyBZr6drFsNb464N9wRZxKupmEJHbmMAcaq8Q3A5v6Si19WokTV3fjwQAKejHdK6ndSDHYzL",
  "key5": "5rKXqkqxbVu3cwonN4RiD8LYMsEzsLAhFcExAMm3zACpFA2jsEjjtDjiZTztx2bWGGWZ2uckiPTfN5Eos7b78SuK",
  "key6": "5TQkCPDs637SUxkRP5zAu4GNLg5ERYNkJsmfzueJ5Ad7aDwc4XLGReCBGK1SeARtYmk7cEoahaGs8A9EUUYkhQdB",
  "key7": "5mQ8p3h2AkLR4DCAkRnY1T51yJrzJgz4XCpGeZvwBSGYcgfF6Ka1QMk2YHfp6Cx81o7HqE71iXvFdCtVshv6BJAF",
  "key8": "56MKT1XeUu9auD4yTPqp2GSdGUUnVphojyZBfFsvVxBu28EihkAKRgjULxLkXyuSUoAZQYd1TTjjk8XocKqiV3BM",
  "key9": "4H2JHx9WKDPgsdMqsY5Skt6YJpEWpRMZmAiqpEAbshXuVGkhrFWq1g7HNA5Bd5xftTaubf1g3dAdSLcEESEBd3CN",
  "key10": "48EDuN61ZDpekJXM9yqHec41pLo2mmyW9yFVSbQXCHATkZq3JRbQaH24cZWHmVWMBHCHh8AT1DPstcEuFdUm4aeq",
  "key11": "5u8it2TaopiupdP7G3Ze7onUCasx1dwgbRvc66PLE5FoJLG6dFaKcn1EwLRazNXRMffMJTt8CZ5DmoN555kem5jw",
  "key12": "59EFkg8wxDsTsk6s626Pxiy2XKGsTBAVz15vmzSaRFqpDU7eUaBeMTpgVsYJ9Skb5de5KvWhtJoXAWGrd3LBteZY",
  "key13": "5AA3ZRCnNspvY9JP8ptmaBqFASw6aZ5a9UckyTyPTSHAjoubTFHKjNN85WBzMp35DgAJZaViQB1PjHj6tjxu2ixh",
  "key14": "3ZHEL3xD3K4gCUoMMQ5kboxAxFaNrxcvD5VRFdQodEBhHTWA7DJ7q3MnPhMT1GnEDdZYYT1TB7pcFDrpBgxcrmGK",
  "key15": "2juDWg6QNspfnKkYHZLBYvAV7ajejzzpJJZhfe6c5q4c8L8so34dswCbb5MC2v3DG34jgJEPtu21XPLmLaTKE3xn",
  "key16": "65oWJcigiJzDfHEPfwY1Q47SbtLY3r6erKrtfzt2vgsVhHSxWHkqfjxVMvjPHFGoGTkvoWGh1BdWH68xyLF1Kji2",
  "key17": "5RAkV8ABNKAto8PzLP2wyVmczgNwnKnmDDnrrxczgAdVa2XdQBANPSh5ggxwBk2YbGVLS1civGJxTXdWUaUpiaMZ",
  "key18": "2HjdVss2Bi1RmYmAGmDgL75a7XBcwWLcRhALNjBvPFKXrNM9189AAFVQjQvWcNXTL4WETQMXv5qS2aAxivdS4SMc",
  "key19": "4RVoviC1aiDSxscfecYJtxAZrEM6RrB4dMhi94v9Qf3WQah9P8mKiAdZ7zXSyWbwK3fpbDAXhHeMiw9k6i9hAuTP",
  "key20": "3touKFN5RJuMPSVHG9HEdSnF472R6PFEdUUbj4A1F6zPRRGGbYQoQQWtiG2oo7y4DwTGRmB7Mo8pj4fbhbFDt9Jm",
  "key21": "iz9G3iEndfYpbABhU51BeJnC28vE75Qa8VtDuM2QqbSpDSpjDUG95iRpvXPQB27N9bqeWJw8rSXfH6pshMmFR2K",
  "key22": "4AxswUzWB2cekSLa3nUBMsrqYE5DdEdo3L8PGgbh4tqvWLzp4u2QsPB2RrpQR4LvqgboAKyXsuKLDQYuC6KsKJAr",
  "key23": "3ETMUZxm5W1SKn9AtGhty5TnDTPdaANUPyfsGjUX1X3UXUVSHiMWS8MNNXaXKLkGenG5uKtuAnFkXaD4WhFpY3tt",
  "key24": "3Wyi8tH17mrCMHy1NERsH8wibHvsttWnPBwh6qWvvkALaJVjyCSJauUb45x5CMsyD6QqjLMztVgMEKpEdD3e6n7A",
  "key25": "5sWeiK32ZqZ61FcfAP5SZ497sPauxvquXSBh5ddqCum4hHc85Z6Frou1NrZGuAzSFXt9y1C2Z6S4j4MXHth1Knao",
  "key26": "2SQBkGjHRdP35cBcC4qkH7bYoKEcGg8H1v653MpQNQgrmMWCWCA1cBHHJwSeFhrW98rnJTzi12a2EkN17XHSHcyp",
  "key27": "4VAvdTiRHw2cUC3dxng6jHfnqfxhdMfbUgFaDrDxv8Egwg6y81RA9xLQMrPjjNPpvCtD9uh2zw6iVqHv66cZW3a2",
  "key28": "2V9WsvTcYnyQVXxkNEzy2JKGeRwv6ZK9RiqSRHywxBE9e82MRNccBh6zVKG1obE2vvJxqHXVf74K5QJuFPXGSWpw",
  "key29": "5JZ2cMkeVrgdgCSbnMEp9ASnHRox8a5A1my4hqf3AKtT14Wxgz5PiG1bD2JUaJVeRhaTKDcrqpuZqe8iD97eJz69",
  "key30": "397RPxjCoYgMiz9xt4VMGAKFxhiQoipPPT1JhMsra56RnRXLo3Q5ZDPb3KG3Vv1jksYRJSQ8x3DCKXBhAaxEP96Z",
  "key31": "2dth6ED8A3amXXzu2td2PBKm86x9jFcfmS3TeQfjkUJLP3vRdpSTw2A3LJX9BVbJLeVFqB8YXsBpnYUJ437SJCJv",
  "key32": "2sfRfM1Fc3jcVLdNsXfVKETByNLuXE2wMrJZd47zx2CHx6DNc2ed85iDLnsUBUBwZSTBBxybHeF7VSVWUxXEM67k"
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
