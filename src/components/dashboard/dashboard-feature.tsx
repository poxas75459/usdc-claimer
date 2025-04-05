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
    "3QCH9YrARsCLNy9qGVpRU1GAgUEiG8EvNkqZxLJCv6ts1Hob7eWiZQfwfXR2GuZrBVHc69GhRS1M2fYMNVgNstJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aMts6ZPBtuWhQWmF7DMgd3LubZHwSCokSMUGtmJEj7egnrbgd1PD2kux4xPfR8K57T9Giye7MoAEKcsppRsAacX",
  "key1": "eKQe36Dr6j7bhX33EqGoJWdc8UwfzRcvDTcEBZCHvEN13P7XprYnh91acFWeau4ScTN43BvU3AFPabFk4tdbMaX",
  "key2": "4FrPYK89ZuMpyyawKbYJ5cfgx42zbnWEFk6Fkpv2rk6R65D1GPfQgYoXhugJBKTMfp6pPPJecKoEsmLpJqzTFszZ",
  "key3": "2tfxZbdtjD18isgv3ZNXTnMepP8bgzVAirFFiSr94iyThmJH8UU9RC3mJnpRdCEew8iAfYprdHrLLgrFWWteW8gM",
  "key4": "5jpCiknxGpQawE3U1Z4RvwA4c12uivYQF1rRJD6fBzvHyzNcpQa7ha19fsuCDjo44Dg3h3oMrHa6dKLPfv5qQShg",
  "key5": "A3Ra3XfyAUPB1Tgn9Smm3PRbjzbnRiA1Ngqiw4GAYC19PuwgNvXGmUVJnrqTikHGzYzgVkBmkFLmtW8EtNBF55d",
  "key6": "ivvXCKCzU9S16DqTEhYxSJPdCw5urYZKaqaqy4soXRM38diH57FNG3c4WTgpcGght7jzueBApwX4yMMcsd4Pber",
  "key7": "4djyaLxHcj7uA9oexz7qATt1VdqwrwQfWRRKNV27HET4xjvJhVNxN6L8FPag6retEya8xcXZRiG29bLksfFNz1c9",
  "key8": "UrLrjnuy1PjrXxPwK5E6A2JLJ5PrvHVpjQUys2tRPCo3ru5G4JSivMAqMG72A1ZBDuUJQ4F1gaM55adDdPuDHsE",
  "key9": "3vEdiKq7hEq3g9SwKywqFnMZWGv6fYX3bP2YkXTNXC5y1KmQwB3hf8XVF8sG8SLVhwQkrUJWqpGc1v7s7Ccv7Xgj",
  "key10": "QqFCHToLAPVBC2vSuZ1W6CzUQ9euwbEZb3d2xorD3gTTSx3Qc7EBmjGrpM6a1wRXQZZ5RvGAPi6S6Y23LqZDAL7",
  "key11": "2yW8jdcfXCXUbYFncmp8HLeScXx24iAjJv742tjXiwfGTxHqpxq6724s1Cp8zVYWAkTrh1gzp7yMuJBAw5EWUfGj",
  "key12": "3QujxmDJUb7MqkFL85TML2FVbG7hN5RsXEHToUKhB2Y3yuhem7S4q48pNvYhgR7QCCa5RzkPBQU3tLvHgyL5QbXE",
  "key13": "2ojn4cedhK8KVXjQZeaGp7FissQLh7zUFRqZFhc6U3nNBX44T6AD6NkP3nL7QXRcLKuARLGmBqhJ8TucE3TpMx8y",
  "key14": "4AFjA8NLZjbetMVGrwK7cFLuaGzMfxf3iXpmxAJqyHn75sAW61f6rgAyh7VwLMtF5zCGCRWNK4uCaVNSSKb4pat7",
  "key15": "5U9oMpZpitfi7XTj4NaSXt4zzPG8TxayWGuKzQs2pdBud9HAi7fKnHCZvfamgJCkbfuDvsWvA7KDAiDJxWsCmaTy",
  "key16": "33PfE34Ns2YAnHfZekUHYFG6MpUjxSy5JbAGN1NXfD4aABYcoVitqj76XUGxfGTE4f4xGVHtQwZX66Y9yKWCCPwq",
  "key17": "3GiUcPEWCjpj4srFuMiyDiFKeGfgLCt7sVsZBJ7h9sU6YBVSdWfKgoZrVYfMULyuTSWd1Jmb1wkPwvDy267ALDjo",
  "key18": "2emGEe1t65tQztwcVu6AoH4G9L2dwMEAvzmXJzadB4CgusNkkYKtJa9PnwaqjWdyTdBeQMLSSwG8oVeyh4HPBVJA",
  "key19": "2P76tVkRu9hpHnLp159UGxY4kVvcqxy4QB7SwPbcdBQrDi16DAY954YuuJu9n3fJCQ94adcQhj1esK797ftjuwC3",
  "key20": "aBHHTMbWEcDWZsdDjnkUrwxWUiAUdxD6jZn16QF6NvZ7QVgRGPyMim6Krr8n7BEWdHuk3xPNeRcpZvf8upMn6AF",
  "key21": "3DQK6zM7zMKskAWj265vi6wsKzgpAWj1DcQPcsjVhrCXDjFVvZx5BBr7AXpFv9yMXgPMcFqr8pLMWjs4p5WYQKEz",
  "key22": "2rCxidSG6FHCGnHZedo3URQfYgbi2ppE65ZyQXNU8jnD71KKUG9byUP3mx75bMDtiokm3VqV35x9CkGGFhRAuPDr",
  "key23": "5gmBGFxFD9w5HRmdnu7YbPVqCNketgznoV3dFbs4pvP4PoPbYYthx8Q6Zzabmu2mYHXxJszkSK2b4MTbPbjqzdC9",
  "key24": "3hQnUvGLhfM3PMPjHofbRzaXkommowB1irHfKgG5yYs2vs4by8tnYY2LmYReFKuv2GeMzMYe8zH1scAjEC3sDSUT",
  "key25": "3qWzDYNAbuo5XJLo6HrF6kPENm7JiGQr23mY76LdeATLmXo7ukbxgjvYVhHTPo5KTS2GPkn2rhMG1ndwSSWRLFNe",
  "key26": "4fR2zxNAVj8ArbLbLxDjQ2uk2un33Pq2KDEUJK5Nrbcz8Muqr3r87P8CC6gykMcCRVaMmfv9HvX8Hjd3L5xE8mj9",
  "key27": "3qNfhfKQCv9Zeatak2C3hvJP8tsRdFwPeffc7sLkZRMrwGYpM1uojiQzr8wAxR2xCKJHdfCYrXf2KV52cosTGQH4"
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
