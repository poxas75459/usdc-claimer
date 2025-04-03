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
    "3zRrf3J8zeic4bLVFrjbYE8DxZZ1ZP35Cx9fwLApZgdUR1asL1ydjiVUYx81KFfjUNzgVhY4vcmzNeooMh2qkY8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51GJa5Rfps8RfLbuGwYFMqqghgXa4KES8rggJS1vJNMfGANr1XkVSBMFY6XxNoRSCMEujfXeWM2uhRYE6io8o2XP",
  "key1": "3n4oJRuHkGrjjqUy5yFigpLfQ6vr6KtumS4CRELDqnr9NXWujWnz7Rn8ua7akXWRZg2UmvUraGt4seL4XP5T7pWH",
  "key2": "2SYTtzPpTnv6PVfFtA4tSqm1WCSmwMMwqsJubzmZfJUn1CEBrB1jsdgLL45qYM1ZzA7Y6qTJHWvi4CnYBLnECtTh",
  "key3": "32YyWXwu6sDkG3qLVmPzeaazaHbxw3ALnnNwMxDPJ2pmEDHiA5Kizbt5GSBpJ4G872YqARuBUrMntmZ5eZC65Noh",
  "key4": "475cnsgzm3P9dNb4zpVWQPYuYTrXfqJRSCp3o8FUphp84h6oAZiLv5iwtw2m5FaUdPsxs9hN5qdFAQEjbDX6DbzR",
  "key5": "39rqUuXzQUeNTGCPTu26CmveVSimr9s2z2wYeQ5Uorg6bZib1PbPqcjd9wmgNaBunmcnovwACkn9MMz8ocxhBXMz",
  "key6": "jcTLSeMfAqgUMiNDkpr6pR2xe1STMra9FPiATuvEzUgqo8a7tGe6VvM9GVsaPc55VMtcnMRW558M7LFBUQ5eqaT",
  "key7": "2pGksAGiCNaZpm4B9KskLi13auCXHpGcaRTUfLmDmEkRoch9QiqQS2jAw4tViTTAwLUuDfnTqXwzNuN1Pv44BnLf",
  "key8": "2ffCSiRf1atN6LM8PtRmmg7eB53aEuGWNwDGa9QmGRpvCmxRPL7VwAWUUz4acyRcDs5UZZEZoVbWGPHMHmaoGb4o",
  "key9": "34uzJTi1LDL7hU8reguzhrAMmpo9yE1rzYFS5dNhAqvKEPEhywTGhMa7uaJwA9bWjCwb1RB2VyxxT6iGwqhkA7cH",
  "key10": "5apSzJTMgu1UmEyVgj6iZjmveGqn1T5rdBYs4Api4XFUFaQWKqkDUEKxr1Ux3LBUvghkH19LUjS3Vb6rpbcGC13y",
  "key11": "5h2EHne4y51YHupT13cBZ6JRLGzPpP15qFw4gqPGHegYhLLZcqohaG5JXGfKTnbhtuHQKK7NirM8cZB9q3o3hUvP",
  "key12": "2LosYVsWNMDMNsyHjyQUgwPqY7djMC9JqyGR4AyBrQUXj82NJznfZug5hieBK1rdTt5YphF2ExzpXVq3mGUjjeS7",
  "key13": "3hG4CUhGKg32NCbim3cVdtjuZoXKcr4QAQNHoGw3ZkLc5SptZXyboo3HqJys4wixFWshTRPYmuTGLdRc28GJ3Ae2",
  "key14": "4fEvygAeeRdjxDyFF99LLhigYRc1raqz6vQymLAFY6MzcxbXEGZg3su1u68rAG7iRz5NJwsgPsUq6f3SJuJ2UVLo",
  "key15": "29gXxwfdQ2HdoKptPvceMmVrfbCn9HLsTWJGPLzeFK9Lnh1LAhdc8ZVVniYPxxuJZ9NYdrrdT9KDkcGkxwcmBa5A",
  "key16": "3Qe3vDscyRmbrtCitg5Lt7oRy1nU1GwRiGy72X7v6qetSAdxPHoue4pAQ8HubpkRdmEya5b6WzUZUZNfH6TT3eTz",
  "key17": "4D53nnMsFwNhSRJf7Soe9u1HF4EEpCUT19vR4RaauqUanqQeuszFJvsEEtYfihmfD5JGvFGspAZf25RCuwKiBmoT",
  "key18": "2P6skfmcRGf3g4YfZH1fc3497CHAGrZ2S9x4zv5SChgP36iYiY4yU5U1UKgRkTpFBvsLKQRxxCeGdGbHoE1tA1XG",
  "key19": "5PdkPfDxLesKUgQqLyFiM2dZGNPzNmWMfTGJjE191L4WCmtoRuRxU8pDZR4S3eLNrfmx9A9n4CUU3ig5WtpWssHL",
  "key20": "2Azk67yV3kq64ZnDhyEBftMtQRWNHASKqpFZP9L2RsAVtnxsbw5i5bKPM8VbAPXYsTJUa7TekAvNPJaTDst3spN4",
  "key21": "4fEystwri9xDJkj7mDe65SAZeJEGqJr73iR5AaKeNesHts6BHQXfXn9XKYXkS1LSdknMyn8wbgZbtbUqPd9T6UMb",
  "key22": "3SseqC1Zo4iUikc8VEn3dJetMsfcN6aywTreWvr3eADDXVvfYKQ3gwJp8CshibWtjxnq5XcWaRPstCuZSjkoXevB",
  "key23": "5YKt1iQcRTRbLHTN1Cja2WnzsN9TDQqrHpAk3CTfhmtV4Ug6rre6J211VSaAUHoVxhRr33ghcZqxm5raodqXDsT",
  "key24": "42fNzrKns8dJb4mtTxnpzAo5MMHDukonikXJh7ZutEeWwQzT32p7wsuR2vdEzuLpQMx7eWcfFtpPXbGCE2iLut3t",
  "key25": "3mEVFSA2GrDw3e5kjn4ppG52pRC74CuUSFf3aTiFq2r5smiaksxmfC2i2KVS9o5QwBB2AsH1AJh22SyFyXJ5jiyg",
  "key26": "WdoGTNs4iNFTJXNjFku9bdUyqjMug4hNKs1jW6XAcU4enPVdSbPeKidAHSNBeNU9ELASSqVKvW227xwSEHewSg4",
  "key27": "4EdGz6JQV515t5XgSBFoz1QYFZdzCP68MD7wvZsDUPjiDPCbfwms9cg83csvrDdPzEmtg3HgxFkCXtgQJKy7C8PH",
  "key28": "5bvFCCzrUumiYbj1Gi7ak99VAyLkALv8fjqYSErrfHXqeaWzddGmhDVgSWtDFeNhiGoGwK4y4ZQNtsxDTb8k4ioJ",
  "key29": "2hwt4qUDDDD4dbiaW9CJJNJsxi9T31hr3aDA7Qf2oAKwmyCenhCJw4jgsAKmG3NKZLiV6JXTgSMqs7MJLBFHTE9D",
  "key30": "2x4JHY8ysJTHyiLg5bKfdiHMUSdfTAGRdCkPtzpSPggPEPL9jV35uSTayPAenDDmggnJeu6GkMZzKndttaeV1MXM",
  "key31": "2swFjm4XnUvJpwTgeRG482PnQk5etrCAjuruov974drLWnAcT9wtA6hNzrdqLniCjtaSzdd3U8tbviXY4wvNwPem"
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
