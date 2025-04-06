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
    "3cB1vmbgn6vcVicooEucV4RS7A5bUJrNcqGSWoHHrm99qRHBixpaLBfkEeMnHbH99GqVgWw6Kr6EtYNfeZFbhwes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CMu5p8juE9i49jXo3s9cUqYCTmVkVQLitJkurLuaap2EZMW6GCpzMWApheH5tpJZs8YXw3Tj8KBjfWLsTUsGoBT",
  "key1": "4Cn5qkmRhNofbox4jx1Wjpc4vCwPkKxbjbD1bCLqPYFWA7Zt1qGRtvLSBiDyoPg3bqZGFb4V3XE4BSCm1gSDYgtx",
  "key2": "2bmKX1FbsKDJQtvCxgXxtWi2xFRxH4ose5FppfEdrSxXzL2tNsa2A9yDaaacookf4qGXNbBXUW1vrzf4zTHTN9hF",
  "key3": "3TBaLDxTTea3CoGR6oxnynicHCSDuFMqzfvRVnPnrf3WEsBtQTR3J6QDRRHxTBTiEMUuFnbPyPY8o4EbWzAwEtce",
  "key4": "4oWKBR2tph6M9kqX9TBQTeXJCgw38hVWSzZtH6vmEoGGjr3vqMu7i5R7dvuw8hevNn5ymyomzgH8iHHyqXR11MyT",
  "key5": "4XRgwN8znhCQfBKDDzh6uRLNoWGQyLE7dQQUFdjn2PDpU4c2nYiqbpUWTcWbTq9CW8j2tqactgx37gRH14FLTerC",
  "key6": "6h9WDQvXBM8cwLxZKvDBf8dbjcSKDC7ew5CwPtr2J1SjdTMTkdgTnJtsVco5qs7B3C72VYDYif22c1uH4ekLYyn",
  "key7": "9VQapaMGHgQq8PrnrxVoUj11NaaCFbQwGWwXsMr65t6zWMWugDS1Nfud1wJz9FNKXqM1H8c8FC43h7536mRofcK",
  "key8": "FkwCbyeuzNfAKndoSKwiviovPAWPzXaJxLQqjoaT8buPZdhHqP5JBKGasvsogHKiBfeD9enwfkWCTjZjaaLPAv7",
  "key9": "eUdcDecynNa4BjhdZAWwXoxXDJtCH6cCLdicG1oYHY58vSfjo33wC8QAwnAYURs5UJKqYvxf45rgcn2BRsB9pe7",
  "key10": "2rkmE6McUgBjkZ1NZK3K9TYUGZsadXMbHLRW6WcXFiMHuWjouHaLVtBXFxL3MFw4nP9C16YcckkLhmqSrZwjNcAY",
  "key11": "4AdSaEMPUG5TMrZxc5AMe5rHkVBd8HuKu5krojyXGaLS69B5Ug6iDQJKL8SLD64SL3c8xYduyYgiuCNg9fYMDCEa",
  "key12": "5wsNjHgLqxAPuKGQkrN797U6Jk5812BgRijZoeN1YRQKm512MhnSHo1L84kvC8TGDDyBjiKhExGSa91JDUZ344yW",
  "key13": "9vBbw1K3T9gmpMrKnVCrNm4WH6uQ3SaMNHwxdkxhgUWgPh2idE4wNYcVYjC8Fed7DhSorvtU3SrKnJcQTj8t1gN",
  "key14": "2TX5WBhXfMRQLqe3gWfQfK2JNSs4iUJ1ThjACGhdzYNiyTZGFSLfp2RFsPs9AyVx84uvuxwF7kRxqyRWUartJT9L",
  "key15": "35xCbxQUN3eSV9w8Ct2XEuTboUtZHMV1575c3MZaVu6MzEZKP8Kd7FTCC85hqDBNTNnABEQTbbQFPS7efWRFHMp8",
  "key16": "4By7TkRtG8YWuKjBNrWjS5et3FoTbQyfyz83R4WCgLwEySYxViQ1LqMBivGf4UJXDgHBfeFtqPeKw8bT83zeZbbu",
  "key17": "4ra3A3MQRpWwdxGWbxuYmKQ4RrfLanfrhcF5VdYYDmeikWhZzeeNSQEc2J3jD2KZYAP5hFHQCrpRdZ31XLDrP85V",
  "key18": "5m4SVNVggcy5EzQnVUEruewFgMCZUPv51yKf5eJWGcdupGs2zdgAy6b1FYDh4F9aL1Ys8PcbM2quiWDZyTqeQU9e",
  "key19": "2s79rXCDTXH13NFH7jhgokWgjxZZqpUGUtAzKZmLfa8bxapgpG8dPk6gP9xskskuEMDUYXibs2jPhz3GB1CrEN7p",
  "key20": "3fAUP4FH2qYebgw4v6Q4M2zvZzNb7EEVaDzxHCLYAm6z3ro1eUQFG6Nn92k3WCf5axtGycPwXN7StTe483BXYE6g",
  "key21": "64EV5tQtVSd1tJZB9fyt3D5hST9D84MQ7aGgJDBxnR9Nw3bfXFchcDyrdrndLgtYLS834RDYC2E9yLnqgcCbW8As",
  "key22": "4eBZy7qhLnjJDjJAV1SvGp2QG9TQJpcWoNRqkqarYsP6P1DAmSbmCw9M4E7FaHvnr7defDQWMVeWGDC43PiHNXEe",
  "key23": "fePrSBpWuQdWXQ211ujYxy66haUo6DcCYsJj5NsRBsKrWwCPMWGmjBCbSQ3RcsASNhfckwKKEt9qUR7JiEAxDLc",
  "key24": "4QHgidZRiyUbH2aXrrMcyTHSqsDyZvezcWrZ2GaKQJM14vKpPk1x1K5bWjUwV4xN6UZcyMuUxUuTUyvEEgbi5acY",
  "key25": "2ExNoxzo1V9yFzWZCr8591z8fkBRVSzFHsTmSLMHqevVQTPLprKG23L78g3np7sn9wAta45Xe37cTxrVPkGyucXc",
  "key26": "62oMTEiSBt1kduv6YiMaLFxWMudTHPNF4TeRzHywvPqK7gFYEo9gb5YvxD8kN71Ch55EqoDeGwUCVmWQm63FHRe5",
  "key27": "61YsXZSFsowR7QkSofjnGccRExH2abS6tLkrjLGLT9ksPckFEdJH378Tv9cgaHMqXSADnovaFCDTmPHHBWzfarWj",
  "key28": "U32DXPnLH5vuTstGHkHeQwdbQYjH8rwaY2Zu7TE6NVT2WH22DDhBH7bxEKPGJHt1eMzgh3mW8JT7pe5FKeMYuSo",
  "key29": "4z7goPc1QNpscJGGgTeB1P4yHZMHWQBAFTwoQ3umtVSw282F6gYdRaXpxW1PjKNFuiz7pgW26MzQ3LjBZAx5pkqR",
  "key30": "5neVboAxrs2MFCXwhg66PA6trRLDMioTZWgAttn3owTcgoyoL7k1h3EUSte4FVxbfC13nVabH4ahoFr7U3hrAqFD",
  "key31": "46DNDXRWsuuJEM5eVo6tJsAtQFnFNrreMWY6wTsXgZoWeyuiy97v211DD8TxcdPXtP2De6PootCvp7yzsDU3WxRW"
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
