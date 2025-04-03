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
    "5xWZUYjRa4HhPRZdtDjGfbPxcSWNpKgWq2qZx9WWKc6uYKVLrGwq65gWEnGuQakPLVdi5KHdFGgNkonPYAJwdoyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7qBLHWP1BWtBH99E9HFAdqTJ2DAuQbdqh2vB3e4fD1Q2KTTpjrBQm2ghHJZLabmFV1FXiNukqMbPqJf3DUNQYiJ",
  "key1": "2XJcvSzbFw1EjjkA8hcJBK4Q4qDjyLF6sJoisV2Czqnpw8oVd7c7A5TQ5QAEpcgYWnY928vSV7FtUFUFdPQKa4fa",
  "key2": "3rmgCViBEyLC6GbCnXgV3CYdnutksjVeSrt68HWxTFWtXthZ6kXxNqzRSjpfoQmKZpmShwpg266S8oSfEPJpMy2m",
  "key3": "uM9cwUqnBbjfV4jj38rDhxZ2uCfGr9MUUoTmkFUKE8nYaQzEAuR2vyi82kEtd5qG6FFS1wTAd1KSrnQuLfkWeeM",
  "key4": "5ybjd52zxfiBNRQbyXHrV95JdD7dgAywsUH1aJ4VU5ECVAWRttcRSHZ9LtjvdzGzEHPKfprGffBeNiJhqJgNEXvS",
  "key5": "5VhouXubmCiMabehuSsEMieDW5z6S45cZvA4BmMGzNmktZ5HHAJxb1sXF7TTGonJfSU9cFBjq1oxUbb22KwpG4fx",
  "key6": "YFJmx6e6x5gTErRBQthHn8w2629fUc88gfhj5hD9QyJQNhNBqcaXVmYLrGwLthrJz8mWzno431fSo7aRr8eP17x",
  "key7": "47Hdwditv2oE8uGwWLxNV3ddrg6sUDJc7DS8XxEAVGSvCKSg7z9FZtEEaELNCnKCsBBpSS2ypMAUbZB16VCRh2RJ",
  "key8": "hpge7tXmi8co7PGEtNegEe8YZv1c1ctVtGvR9qQ8pKLZoZyB6By4sgizy5CuwKhNPiAoimNYKBZXtNYAxDJHFeg",
  "key9": "4ZTLHvCvPTbB4YZqBE8DCQA3G6MUVAu9Kjszk5kFSfgBU6gBqwSULRRRpN8QZ7zrmDedYQiQzraTvo2J71C8MYk3",
  "key10": "4yNxzjUZSTBB7h1jVFBs5sk5adXp5eLBDX11JeKPH1gtGxf2LHQXpqhb2aTfmQ9th6rcbZfP9eKjMPxyPu1a2Jpd",
  "key11": "3NRwe5v7vKefviS7GgxFwwxocafw5kMyapVBVPDHoMz3VECKpqkHAVNYPabhQXEoYqkrkKXUKSmuHhFActZzRB5F",
  "key12": "2Q1Up7ehpEKxPKDaY5idVBkx4okdJKaVmmo1bA3adEynABwt71F3ekPkyeagWfiTFDSucuRLRMcyBewe2XXH53fj",
  "key13": "4E3xJDsq48ykND9wCojzshr7Gz2xUaYSskf5HvjKEpG8oUu6d3t7SD5498uo5bni2HFPbJQCTQrJsq9h1MZRqq3k",
  "key14": "3xK9LVWVZtJpr2ZUxd7ghLDxHsPjKw2a7cGqgcAKtxcJJvWfVonZ1QhF7FnEL6Yd6M3s2BKpJmkzqSeBskXEPNku",
  "key15": "5u2esnhXZ7daYj2vVdS1wZ9EXmq6VBR3Djj4nQQhASrce3HLqDiGMQ6D5uMLbyLNongRSxRtpTqvRLBCCgG9jk2N",
  "key16": "3VNpiDghAnVm95DK6ttE2z2wfEVZ7ckGfdWgqdDTAhJSn8fFEgZJztGnKaJziLTAMhyTBfXAwkJ6JovDhX2GPbjN",
  "key17": "UeWtwfm5H5NnnLqczxHM1CoEhFrgXr6nNNpGJv5stSzaPRyJkJC63YKniLzAvCjtb8Dtet8WXdUnEaqHJ3jyxAb",
  "key18": "3orXcwSPRVbTCcgVFf1amw421pwYpp1E8dK3L6wxd6P12PCHPEBrdk4zRPV8ymEFWD9NwiVPx9vUoSoPYz96GEXa",
  "key19": "3xhpmX8CRe9dPaMpCpsJcuoEzqLsaz4YQxbKz8RHehohJgYHSvUjC9epeavHVx6GrczhffYMTCCC3pA1dRXV9Ec4",
  "key20": "32h8XNhmk5KT5QnsD21zWKPsXiDmeQAkHgt9sVJVb2DjypT9sn2FWxVP1BW56MyPYHgEDtDHL1uTM6oDtMkcifHm",
  "key21": "kCxWrFLHAc7aHSfsSnx7H6GT4HfjPK4jyZENZNCYjjSAXVpErZNTbSE4NDj7QKRsNZztfUeeHuo24a1FNfdJn6T",
  "key22": "2dJHj2kumMRqjnJZPYK6yLNbanF6mmhrSLyhNT9ce55dmdmYPzXcEzZCuYzfeNopdjWHp2ErGdfZuiQmj2icVhZQ",
  "key23": "5jBRVXtBuSev437Gd7x5THSzy9nt4x54CZs5NEcAA2HYuXNiv7hHMDCFYDVe5czHLSY7coBVzFEm3ARBQEVFRXY8",
  "key24": "44vuM866QtnHxK2GVqpQBZ2ABWJew8nFrQMkStkBZKWGHUiA2tXPbU7HaSEH96cezkPv4Vyu6JLyvKmXPyeTo4Gp"
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
