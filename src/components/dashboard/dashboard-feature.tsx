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
    "bgZNFvoZi4kwRU293neQdy3JFneX942WNSzSPstZJZv383b27L3ur1LFa67XLYxneV6JNVaY4PBqduqW7PkoajX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m28q8up31ed32imat38aKvCamwb6N3jTfBQF8UJ17LeruTwcuKe8iEdeNo6rnjEUxwMuKEsuyyLhhnSRsVUBZ7a",
  "key1": "3fYB9GaWNwN6VHxpkNnM13rdEoBfVLGSuK1CDJrPo67bceAUkGD6QFBoVzEYY3tovdigX1CfNhVfUWgkqRFitXnU",
  "key2": "izSeMBbaYf2SqNJBad1jAnewc3S6TdqSFnAmJPufEvNW1PnfWKUa7TeWaHRuva5dcFPz7odafZyEpqqQdwu5Awd",
  "key3": "41924sQT679VFQxd6ZrkCs3sCTd45VK3Z1HtcagNkRC3UfUFyN24ZPcAnxb6wU8ktvLrUCErE1F5B5Yjp414FtMp",
  "key4": "2yk3GsAzyJP3tMepVvqifs2rdD61uQUqkpkntDavZNxMBYPwJFZgKNXLmxmNGqA7M6Xxp9mdVGetEZPHJSr7V9n2",
  "key5": "3BvdHHgstovtrk8snr61Vg5qcpv7u1UpG9E6c3NeTgjiodNhQLbNVfGJd5WjhRUzNbDSTeuNdywncvqEESZ14rmP",
  "key6": "5nPE9Sv6w1EHoWgMckeVrNv35p4W2GRfj331eu5ffR6BFDsZmcEh3KVqSdtKYicSN2EUvjfio7AaaAfHCP53p9rJ",
  "key7": "2sxGVjPLSqNStb3RvqmGZHxnvGcyESKj3C5fLzHgDnVmTYnRiJJ9kwDXiqFidxNw6guYd6bdBZEd744yzwUNSpiF",
  "key8": "65QQaez7gNbRzG5JDadY3skwC3pParQToapmQDr9GgxsbxCBDpHjpHjWB8y6di8UW8exfCwkU66GbiEpQYNxEPVi",
  "key9": "5DWeSf5GVoD4K2bk52nbPoVzRBLjZahZmMXP771kBrWQwEnGzYniC9DAd579syjunyDPbEqs9ypJ81cpkD7QoYq4",
  "key10": "4Wda3RcPp6RiJuSBVCEyR9LcfAaFMfLpYFvsTMeeBUC3Q4jP4Med6bJdNiT9AGB17iU3Q2FEjFT1MQMX3B8KE5bh",
  "key11": "5TwXKKu5KdB8P8QVqdHaw9aEPXtB5MaNjr7syCYiLRvn1mo9y3RooQaMHH1iVpvzja2Ecv6zcE9F57WEveiQyMDd",
  "key12": "525n3vDupPdBsWeQzcyEpUA19rwV6ppVWtLcaf6Wjt7xq7ZJ3NXxZfgb7ArSRcmE5yi7fuP8Xay9VDf3QhaxJgj8",
  "key13": "5mADSuDBeGVLJ1vJbk9xSaxGhwqa5ujZkPaxMfuY6PfnNmqDZj64AiiSK7trrFg1otZKXp5m3XvTNFsMpS4GwwQS",
  "key14": "z834u5Jy3eGFrVQBnah9bF1fTokBfkYJPqd1HGtvWauNvyB5bPB8rVCW5paPmXk6TRNkVnkTBRb1cvonHahRVy6",
  "key15": "4JXoCq11NkrghpMFWASy3PJZW66jxR7taPYzewQeuF58PQtFPx6e4seCCMd4UnyUaPL5DdZuyyb3fEtrnshrAVtf",
  "key16": "5xokFkf9WtDvvCvYRjF5cczfmF36BaTfbrviFkX7Qj5M97i3CJxphmSiRZ65gJz4DtiNi3mEJrZxhUnwq35TjKhv",
  "key17": "326F3cbrxAEJMJwbPtRUqNG4eq8AWumupRSw4hBP6vjQExVTVGGUJQKB1Ko5ESqSUKUvzT4RWZ5J8zN7asekYno8",
  "key18": "4mvcDSQaJQLi4CYKhEXa8vdDAtQoPZmx4Qwre93KRdhySobdpFS78f8Hk46E5UUq2xEqbHNq68fSXRrntgecp1NB",
  "key19": "3CiGnMDGNmaiRTUBiyHSXrv9TXErRswVtXzWxKTj6J9TqJgGxLNWbR1tGCH9mwhH2MLhS9Up7qGcip1xM7jaJMET",
  "key20": "4vR8inuiqVknmW2gSJRESZ7qgVFV53QDsi9tqqMKeSEKD1ecwaDRnmrxoxzhSepLwCB5c8LviJ1XkCKuhN2Ey65T",
  "key21": "TDiFWR1VXb6mnesahroZyLwsf3FkXUVz57qXvDxsZKng4ZpeJ7LLug4p6dbZ3NEaEmuThYHKic3JAw4qfNLkZ9R",
  "key22": "48zgcpU4YR8nYpxKbQd5Ej421RDEnV9GPc3HZvUQaDqSs1rpyqLFLixzf8r7jwiNBLqZskXoqE5ecR6jsYazA9iL",
  "key23": "2gx9EueFhKzp5ECjdYacoNdHu4apPodwVkJvFb6dfdtLMRcUNycMcYxuJWLJRKBjKbPc7fVV3vq1TNri8X913M2X",
  "key24": "41sKgoQBTd1RD5Fh8cEPXwrhxTewAaT3MUBEebm9Z5ZUQ1LYquN5agKwcALgJPhrfc2twkSjrkTDpRN4RDyuk1ex"
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
