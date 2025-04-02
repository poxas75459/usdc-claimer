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
    "644PajPrkWMyQ4aQZSMCtWuraLZd4Jkzg57wiEZ2yA42NQMPFcKRFWnAbCUKfd4L6ecbC4U6ZxEEMDmuv77XVRir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cJNNqNy1FPKKkBGphTw7wCp116Vik48vzw2YGueyKPtUR1UTZPJLqNDdJWDw3jRfBZ7Qn4THzJYTPkqmfEueeeV",
  "key1": "3NtsgDY4KTaRR7WdcaKjWzR88aTaeS4rpRsUSPCK69asx3puJyUjwLHUYSJCnWsAVML99Bb8Letjw6KT5zwEtCsB",
  "key2": "2ekbXjP76faAvKrGRdGkHE6dGVmEuk61faLhadVNfiDDTHh68nnouhcyenTrp72o6J4hQnkvswMa3uVcvjyvTDVX",
  "key3": "3pQ7Rik4gtFCasaa4ckat5KGj2UATru5wbkXzMBWYaHTs6ZswV6T9X1TWewAdFzFAGaa671gxTZmToKVyE33xoMP",
  "key4": "4gSCoqfnYj94fYBN1KWMofpMUtk3FVFidx8AiExUek7HtyLCE4T5t7LAe8aRK7kvYh1Ue3aeJyrm6qwHX4JEK6jW",
  "key5": "5FBhCUKrHv3w2coVK9azzDxN8kdaNF1LpU1cTgt1pD6YzrR6fA4TaLs5VimuRmQFGAeii6hrn5U1C1PhRab6usJB",
  "key6": "4VJbSAEX4dv7cjtzRoxnVzPkFrDuSJShhRKDM1N1B6qwLfZPgFd9JQvaT38uT2khrDPf2LSEZv5eo5pD6ACyG7zD",
  "key7": "S71TXFNzb9cgKZuxe9omKNE89C92Qgm1VzRT9vEsLaF5j79SUJhmrEGi3ciNU8dQk1gm2TLdh8jLBvxjWwTbwbL",
  "key8": "26xLrFAHtJ8M4mREuwddavMJocCVuZ3T7EUrRrfQvCCxenw1bjm1JRY39kE8EZmGQN5fYqkkgxm2cQwEKYa94DQK",
  "key9": "2eeAEacV57rFp9KfJFnwnagjHhRyDYdx4z2ea8SwWRssq6XH9nwp5Vh9rcHB2CCv9bgFtbLqRTR9eKTsppQE8Xzs",
  "key10": "RP9gjS1W6ZiXjAjYwamndseaMJfUr7vpZUQGAU9D38sY7zhfL2575wPqrTtH1VuQBdnA8DFDgQkJxPXWUMowb5U",
  "key11": "4q7onz5aVP5wfvLqMWufAmsYb8EpDUUvKxwePkGkKATT7h8yL12TYibc2kG3dj4VcmHwMCN1Qbq9iXiY2ajp86JP",
  "key12": "63SYqyWwqqyfF1dT9vZyc6qUPGdYRKZ4FTNHQSjsvsJvu3KDsNAj9qyLdWhbY33fNDe2EjUrMBz7UdWs58zvqqp4",
  "key13": "w2z8J3nNLY1h856u5j9T9N4ujgFJPPQF3rzyQPCfHNSRzzHTgmAnkZd4ARePmy5oSi8jeo7UiiHjy81PsNeYqV8",
  "key14": "5qcAuEvYgg8dmUTjwuDecy8Xda1H78GxT7uZbTw5eWF1AW5UztXk5P3F3SLfP4LXMMXPuML3ZDrVJJmxf7GWH5fx",
  "key15": "4FLGJZKMqLo8PJDLJgVXqCTRDKs4wxn2qKhRd9q1bDYkuCn17VkEtQhgafemxiBX5thudY3Ln7JfM3d98sv8hUGH",
  "key16": "P7433NnBtnCFTcXuCErka1LZWWYvQnKA3vFZiSe5tTEtwC9x1fMNocL2moxTx1twmQMGCy3hNKbdPa6kr71mqeh",
  "key17": "26ejGYkkoCQiDXSyHZBUZv2HhfjwazWFNq5vAR3Uzr3rNXpBVSCfFdfvVBSyLxGT7Q72zfEhZKDzPbNUZTyfHhY9",
  "key18": "3aL1wSZe8yaNmhEnuymc183JeNjFngwEkvfwS6BFQKvpiW6GQrokQaHDq17yrxTuGt9ZK7Yh9AuzrLEkFcnboFQJ",
  "key19": "3C9thH9fcJTs3ukkoiEqy6CAnspTcsnJCAzCJK1dGCQ7UNwxNf461AZ2YtUfwiwWtj2Linop19je1y4WSHwpLLnX",
  "key20": "2gw9qer2xLunqPFpRgSXRQXu8YM1EyNjjXo5PfcpwpiWYSZMBGVT5KZxahUMvZC4jehnrFc9R1H8jnbMU7dnw9kJ",
  "key21": "5EPHKmUyUahFdgYDFiCFduftiyp9CyQQ7YFrRxaNFVngn1jMxmrEEgr2SJW8v93zRPHkRcxfonGf9vao8vRavz2J",
  "key22": "45rwXzG7sU2Uu926wA7uZkihS7GRdH5uAstFS11555pUcTy8a1sBQ3CdhnLmnbLJyGrTKCbfAAti5tK8qmTBiADY",
  "key23": "4bKZGhYewFXFXrEJTjs6NFyEteG4KCfxAq21JGL2ifxiRujVKdncschx18yCvZR24vWgwne32r9vqjvUb3fRQoMF",
  "key24": "4vaBenDXwMHEudGkU8a5hxff1hERntpDZt1YARC3RNbvdgey68oETz9GcLVqXCPPuSyDNHVN6kKhgAH4dzioFLDU",
  "key25": "4huWDLeSD6k4yoi2oFjyhLa9meqTeUJkuY6B9GqnT1fFTK3mdPBdxTVzPXFj797eNBkXuNZqhxkkEQm7hdJozMx6",
  "key26": "5SMw3A3zXZF3WfAbz99YizcY3frBSCDanGFYtcu8dJ9mURpAR5nwjkyojLTn9mqFJuAGKmaUpDcgz8SjQ3L5owr5"
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
