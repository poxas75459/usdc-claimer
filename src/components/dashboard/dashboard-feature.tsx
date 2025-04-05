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
    "MfPZJ1DFVfN3CQCPJvCnYetaTi4bjYzde2ubhJkpnngnsVRxutwkxxgfwJeHr7qD3oUGQWZvDE9EvH6HBMH8uLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61bmNbpHMVaGgJbuABpy9pX1bHJFcPMPcaGvKbbJ6NsPf4AYBGhd7LLDjF73mFL77mfzzRHRhQbjiKhFcY3gKGRc",
  "key1": "4wJaYpqnxqFcxWHS9tFKngEEYazxfmK2jQW8am56VqsqmgC8rkxjnKUAY3VM5j84Jcbhr3aJX57VfaYTSPa1QdFQ",
  "key2": "3Nj4J7xrpcPo3HTiChFVS32ZDTrER7x6S277ao19coDeqDFXnCzhDNSkbt3QvKHB9uCdXMet6eXyimNhGpTYZJdD",
  "key3": "3nGP4tFDsXbChi4eZcxPUhGE2KVz9txoyZmWr9xYBPg68J7hSDtA6ST6sTei72m3sWGumF34h77p8BEbg4NicoKV",
  "key4": "44EECBj89mboxTEugNbEsgWCpzwBtZhJFk5xjAVQWjsfEBbsMt5gzSkZ63vEB7HZ9L3ZWNXUKKbDfGhZkDjuLWML",
  "key5": "2keSuBZg9rFqPgvn1seCU16RMDG8SAx3WTLW4Hm3rczt6CCGWZVYPTYJScgGarWuoKJe3JhqUQqSSUeT4zLMgJea",
  "key6": "2uTDB5j1XChsvht1dbww2JGw3hVR9JbUu6V3NzUm7v2m7wi2qAx4G4uZydhFZdgL3zgaXYGxePQjLDQfFFMUpTxu",
  "key7": "44wZbUqfCNCbEYbxduGduVj8TGkjgJHha7hxWwW4JFHcS5B7TUN8DVmUusQ6mJqbq5fkc84cFpQEwQQj5hVSLKkQ",
  "key8": "4wEKdfkumyn5vv4Cso3yTBbA4QjoVqJEeHUzwsL3HzTdQW1QS2y72WsHAE49hAN4vktqtkhv4Xzgh8tAAgDkm62E",
  "key9": "5rejdA8CmAeAopf5EpFBEpQkCH3vnoFRd2JVm4jCG6PtvCrtWEQ3wkU1jo3t1SYAE2pZEbRQKkQXXsc79Ca65iZz",
  "key10": "2cQhZKxktw25xYp24gdsnpJ72XG4TQQUQMEGGnuVdxiSWK5iaAUJPVL5iCCLo7nN6Wtw6NMxX3BzeRH9wGaGc2Rq",
  "key11": "5fzZ1PpvJ2y7rLfTPU3GxSvfi9gayMbGRzCHweC9Z7tV3f3gHKi91UPd9jQfXPTqRk72jGCh9Dnvmzt5ePkpKtpV",
  "key12": "4C5jrwG8P1vjqdTL4CNuyZtFfPM2dmnp9CwKUr7p5nUZgVsjXfWpMrTT1YR4u3ncA1tM56Y9PiHJBFfAoeniNyCF",
  "key13": "3TGdqcPhMw617DQxPSi9LDGE5xmsn7RgZGgTkoyQfetqRdWC7RskeWBnYXFDvwMWBhkCaQKwTgEp6eWh62YZZWt4",
  "key14": "4rMAPi4YV1wdhdvxReUBPRiEq1UNvxCdaoWhCzRM8tgv6V1DQ6F6NqrWPYX4nnoW5ZMqZnr14focSMofRqq19Czw",
  "key15": "2pFnxErM8JaqyjtLdjVNaq2tervp2NrygGkxRN7xsMr353svQkRRsvrBPVqoPHiGjPJ2EaPVfTijtRte5f6nzN5V",
  "key16": "5NhkM4LtwpBoFgYYjPtqzP3qNJHcTY89251tBBLFbFavDHsssYWVsPYZukmSn763veSi658uSaNwMiiWhShxraic",
  "key17": "NmZ1wEYZ9MpYbgPmWejK2haLGeC1d29GfVf988KXQQ7R5ojMb2vCw87vMURP7txDnaYa8WsP9nKwBGtu8iwAx8P",
  "key18": "4PGq2FWn2F34hQSnF6mAAEuJh97pCeav5apDFAXY4bXHLBMf65xjPCdR31TYFauHh4BPKpdA3ApXYSkvAdLQH8As",
  "key19": "3QR3UEQzyHmrrsoi6YMXnRKf3zWtj15cx9oauFovqwi31YWtuAeziZUMcrL7PWvscX4eodg45wvdmvF4brbNRX4R",
  "key20": "29tPi9TudDwCJiBq85hFuB2AtdMJckFEFVgpEmPps3B7wUM4YhEsoeaaSWqv8LLZoMXTyP2ynPD29SbwhG2GiA7t",
  "key21": "5HQEPysWPq9zaJkmVJgmQf2dwjaE8PTnxHwa6hpir9VK54uSAwgudC9RM2dkifjEXccjcqJu1ntxNUnT1Mnd49v7",
  "key22": "3rMpMA7svzsmaewXHzjX2p496rL28BcP59FoyzusojX3fHvhX8eWd3WWVDvwc3z13bcu2WjxySwzJu2n5oZmKeDj",
  "key23": "36s8VuGo6JofKphMCHnuSPn74Da71pRbr9EhcmBAojT4TkzgYYb1hsousybGtPVce9YUJFnm463CQS6ioJPCvuSu",
  "key24": "5tuUhMQ7dkzFNKEzUr2x6ZvmBvSHa1A7hUkvTfCGzKbwZVuVCgnrh9DTj2U3qMk8DDiQXQCKEYthD2z17LTC1KuB",
  "key25": "4MtE8QpywxzgP1Jpft7SKY5YuTmcb6mxQCH3zG4DtdqxBUcryQP4oE59oaxmvRgNsCZyj418ehLXhD68L3N2MAvS",
  "key26": "4B4H5yrxPe3KAQG4ez5VnAfj1M5QxaFZsd82A7dfDdTevDD45AC2eYdtBSdQsgNAeLVLW7N3oJdCRds63fsZb1wi",
  "key27": "4NMvnZjiYJWAErrVcTx7o8J8ezX8wX9QPg34GCYfpovJPEyAm5q6Xdz3QigUSGsCXK5LYXaKzyafaJ49TR27j6nQ",
  "key28": "2BW1G29UqDp6StVSS8aVkxBq5LWY8T4QBvyKDYmGWMv7qRNY6TGtgGrFN3Nysjhx32aYtPsukjC62gHuGsjbyFj6",
  "key29": "2i2SKu2Z15tniEijrBKKHRr9qEYnBXeHfV3xUEMFQC5HoJDFFmfcvNbousorRhecRqrWeftmRHtqbd6r232Qe6fs",
  "key30": "Ds9DoXnzURtYV5nSHCQL1juxsjFB4PPQgZZh1Fymf27zvvLNv8bky4Eoe7TJsKuURdyVHj3NLfzTtxehGDdP8WU",
  "key31": "2EGTH1ta1mH2YHrPrSeGdSrTJ2W7wvdizyvDrGZa8jfFB22wJUG4pPGZeuqJjdVfSURL26TMFBLEiTtmttFJmDp1",
  "key32": "2x3v7QKJC1qPKAtvt5RuqSPEz7TnhzYEgz9DFahrGFEQ322KunRuThVFCTaMXPxDD2CzjmW1u1xd4ivttCSruShg",
  "key33": "2AaabREfPDDbTNAtKtoQm8ip7U8jHC62Tu7hk2wRHk4kS4iiB5QjAtFUdzw5bKGj8MQiM3j8jeZX7SV6wf3VPio3",
  "key34": "3wrDrtJ7nJYXkrNucg8w9P9r1sgafqVxGCrvZtb5Z7P8yH8yrCnUtojrtoyDMxx3pqxKN3VmAcmhUACXVjZMvY4u",
  "key35": "2np5obuQ9b6LxXRLCesnCSnV9hdi6Le65KT2hd5rCUg7aXscXFHjmrKPaKqqeABrsG6kMZXDzSgrJLzggaVZRUBa",
  "key36": "2PUqTgLM513mJaVQfqFzctXkDYE71Ay734Y5GrsqHYuzZs8Vdrtpr1bELzdwKY6gey1Rr4Eemjm35gk7HK1T28PF",
  "key37": "2xjNMCFUCnxkBEtWxNqUika8Y9AVyWpJ47YjtbDHncrNxQNnCx5b5ZXttUQvEpYEMmqBRfji3kUBqCiguXQZdKgz",
  "key38": "3F3yxdcuMPY29P2KUCgB4jcprcu2Dnsx6eY6bdZs3EEU7CJ5egF3D2T9up9biKwLXXbAszcC9HZFEdoDzDH8Kvyt",
  "key39": "bHva9UHiLvfBHLCPkJBAxJRTohqUUjZHFvWDZWLP3dTJE5p2u2QKoRWAncC8N4ACr35pP98UHm7kfBdfipr39sw"
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
