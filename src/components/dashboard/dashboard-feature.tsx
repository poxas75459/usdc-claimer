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
    "2PWq7Mn46S4TVNbQn1QRiXdeYq5Lo5LTvWz9HtCpvWP8841fKEuEsXdsWoiFgkCkmVYS5BT2EgUVthCMWNoxp1Gz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ej29pP9ceZ9KJL5EVNdh9iPziQPWBqcrmbLsd9dSb6j68LoqKh2PVDhFvyZ5MxHqYqcxmnPrFY2V4iMgRzUzxFF",
  "key1": "4Gat3Tu26iaxGnMPk4VSpRPtHwCw6abCHMy7oM5cTF5QdZ9VFkEyMKLwnDxcWyFZTH5fKxDfMrVotzyvKCy5BMCo",
  "key2": "392Qxen3C3szvNYhe17TZHDgLD4Z8e7agSgytRujpira7mnDKbUBA9R1khj4geNHgZSWaQGVyM4ZssD9XpNCnAsG",
  "key3": "3tBJMKEvz1U8E4Q6vWRWgLfwwffSoydxXGEMGUns7FWGX8zo6WNfCPEn2MiSXgUWzXZcLDQrrjotVTE2JFisGnQB",
  "key4": "25dXyadvCvaECoWzoUHTwYgzRExhYD37bi9KRcUfJCb5tdF1c8Qcig3vJpjQ2aci4312SU86yhr8FtD2eiRHiuTs",
  "key5": "3mfjBbgEX1vkMsPZU69MME6gEE75Xp1nNnb9N3Maz4mUeftjizeXPxRMtWpYE4pZ9hjp85EJPPN3uDXf34knDF7C",
  "key6": "2ufxzAWBFtvoYHoEbw7PmmboN5ug7DR5TFHSvEhHDNpsjd9ZTabfJwcHGAAZwpELXqwHrhZ6AE5Qizx8rKdTJjnG",
  "key7": "5LPxGCb7bX2oB4o7KoN4Tv8qhfHqX5yB4pGCT9eiax9F8w6PWyTcH7TwmSTSNqQhPq7AhAECNpwEMA5E1e99oJtM",
  "key8": "481AhNJWk1znP2mMhVPJwoiFPTWzK8Hzi4BPoSe6xU8bSvgyRuEkA1pMBYE1To95BnuLwuWto6bbtsUEpb4o37UH",
  "key9": "5FRwqaS4ksnTo1aiotqNozEhKEuGFzGF8NrXpqDPecMaD732BHpJGkVJGc7ran5MNJUAx11kcibtN8KbnTq7U7sY",
  "key10": "X4ppf3XMUoAAZ3WE5cCY526XkPxBL9KcsCtGp8tsubGgVb6CrfVKdKN5H3dB73HPZpCxDpDnzEM8n83dBeGZDVf",
  "key11": "395bsCkWHdPwpMpr68iC57ndLxDqdDJD4Lv75QQtbHPkRJNKkbozmbyz79HmeHpFsG1EcC5fSU5xaCP5u6kJYRRc",
  "key12": "4wr2vQuSgX7MEARB13qZRc4Kynf38DzCc77Kg2AzUx7wUU9e5yUKCr97UsKqgphj6a9G5uLDwRdwpdQG8YWBuYni",
  "key13": "4XLMkEF6TdPsLjYdzL5y4jvmmJcXbmGx8qQdJiykDy6Bp72zokd9a9f6qw9zogXeXDZLb7GoBTCoKn9rySqprvsG",
  "key14": "66Dr3Da2nim1DuteQHmVoefBEbQYTNmpLdtTqVM4Ur6T4QQwS3wA6Js4PdUj45J8ydKgacRA4wu6EEHZtKbvq11b",
  "key15": "5HxoiAcBiMPuRn6HQRga8JVkzXC2nYE7Z6gddQ598yWvdiKptn4U5R2dZucfw1TSvTWcAxDBrEsW1yzPejKSXAy5",
  "key16": "ATCm3CjVtuJM2iG6ZnbixuLGtFPWRrGvbgaRCaoLfKnXDvioyUqeWdmhdr7kzuYUdGdAXRTySdCBiZ77HuPrjiJ",
  "key17": "227GcPtr3ZFHiCR1tRqVT2a362ERfBdg12aAGyw3GNZsEXknQNT5SLymUNmvKH2iy7eXy4DKFeYuyPLKvaUN5DGt",
  "key18": "2yegfazKGjLGBuAibveW3VWuttJQ9RWnMYJ5tFERhunjmruaaLzWSyVZTCdTcccoDrQ58X6NnUtKwpFdnbft1rPs",
  "key19": "zAjF234xKX3N3QWPGkhotvDZNDDeZdqWx5UZD6wcX3oLfpW55esPijSPTaz9q2iTvFmN5NvD6ReJBNFG7WwacTi",
  "key20": "5kobMKhWMEFVHHdFyEy9Lw1xgmgSQVaE53osU2NF5KdK3MdydscqcnF5q2KQyXcxHedEANbDcC9HEuYZJBH94rHj",
  "key21": "3Kbbqpj7EwCLoEtWF8N4UADhEfZ5LDNxSi7dd69Fj3YQ8dh4k5qwPUdkfwp64RnLztUXFqnE6QntXMmakXe2q5Y3",
  "key22": "3qy2YVqd74YFaBLxztpbPp5JAknh3CxcGqYoDCiArczhf5TZqgHwAK6n49WhkHHNzfsLgYAbh9qEfFyUrLuqhBkW",
  "key23": "rRQ8wy9FSyuAXVagKYGu3AztpSykRvXZtZZ794B53dJiSBFhwGMg78gHV8sDCi46CrzXyZHksaNX7D3Zi1L8iLm",
  "key24": "5oNVkcVqdRXXErzg8aZ5ixHUnhg58NrZfGbpom5aPnTTgm35QyfGjyhUmNaLhpf8YF3VWDExe6t3aujBGmqsQXA8",
  "key25": "2Equu13fUsd4teG2tL5nhgdYgnN7taNdjNVkMsD1BbNNZ9xRzSZKWnrFoGkoFNgHifs7uzPWz9QC6S3Zm99sEdtH",
  "key26": "U1785b9d4v9W9DgZ8J8UPzpA85ghFEMr17e7PhHgZsiLmJPy9KHPSn2SGxba17AWSFVRkMyMGbbsio4fyHFaYpm",
  "key27": "2j4LGdaYRoPWUkvEBN68hNZowsFfMEuK8eN4NrMdt7y31S3GMyK4rsMHTqRrTyv78M4ciq6ghDu616iTL4PFe1nV",
  "key28": "2SPYL1aMnqhGY54o3CGpEniCWhhd7JmRoD9qyz6B4KA2DXUYAjPrRjN1tBJLvkDyZP9HHLHm6ibZ2sPd76U3vzeM",
  "key29": "4EBSQTEq2JN8egGZak6hepgXNHwoPKpqAAdULp5Qe4YRkQAxSbERg62TroEvQCgskERyo3ynaPtjLBuxGpiDuxLc",
  "key30": "617FHcq4VdaQJqbpiLkzaqYeLTa98b4EmYmmtneriYqaTCfE4aweUQDfTm2PEkDmibvDUdU6Y7BkNrYrw6j7ZqQD",
  "key31": "5YVseyXzC9xZ1HfDbJLK7JtqNgZteGq3KGyUuPaRsjZMTxreGEe8JC5P1s5okNoe2kGfa9E3x5YzcSpnm82aoWg4",
  "key32": "38yW79BCjXj3FuFCksnG7gFfYiYx3fBuaGwjgTGTQ9UDtyfusannxbx6p8wuhRECtbqbeeW9YphFNXM6gQdeuuhs",
  "key33": "4rCLvoVk4MHx3tctDRj6k89WmCbxn3nHuJCsXZDMJ8PYXnJJXaYJiq6aBrzbJG7FcX1QwEktzVwwi9BmFsafXLU5",
  "key34": "Mu5g9jHVkHi3n9X8ZK7KoFucMt9THmghzeYjurvcV5ap7SPJxAjbpaQeVapp8JttakqxwizAXNna8QVsHnKUHAF",
  "key35": "P6FyQVGXa5GkSWLAKdGc6PQ8Jzs4u85R1BLGuQ9WpoQ23yZsJC2BntZiyCrxsYbXR1BSMACRqjW2RZnA7tZmJGi",
  "key36": "36bkyTDwzychTSTDWN2foSxQy5fWQLzXQhXnUoiBqtsWVBAk5Xw3EWoRRnW1G3nvv4o1yhEXzBE8EXRyQnZ3Egw7",
  "key37": "2BNG1EYh6HVSf3woXnFVLH7nBQxHiu4pGs7EkgQZ8cKnuAz5Te1zSgSVL2jcv2kf6LmNFNWDzLhVJzpMTqvWGBTD"
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
