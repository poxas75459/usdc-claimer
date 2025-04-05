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
    "2kTckxNzNi5firZwaYAE4VRdtkf6uyguUtvJPGQWHtfJ93n23EUjfwBKWVnnWjF3tKqPNPbWUSsTVWNvaYrYdAvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aap5AU77APbSnw5FRP6rwN1ASYMfs7oNXoMHshg5cbTEmKgY7Wpp4fcRMUGGQdNMkz7Cyhb3grj6MaLfmHWQBGN",
  "key1": "4Q5HnBqkqM3VLsFCZhv3q1nbB5L9B2oTwedBKN22rsWFzVQ7KNVyqBKwgUwVqwpKvzGLtjWNUxcSHhPdEz5CnpnD",
  "key2": "5ArGMzg65kJcth7b3JUbRAMTfDbtVkyXdZ1fJCJBjaT33uY5vJgdytjFXv22GNsDCCL91ahwcZpWXomBof8qmXJL",
  "key3": "5BsKyMxxejwyaxRTAWAB7dyARCwuimsQmGNf15muzq4xVp9EExzkGmDNzGuAU68kss812UgP8tqyLcmN5ZpVfhBw",
  "key4": "Vc3BRMuHsPdbjxHtad3eyGBF8knjz1WATG8XaMDQzqos6hR8cCNFMM8HKFy7oJP9hYiU5uFNmxLLRXtMRB6QwpB",
  "key5": "pdjTKCT3VJ7TZm5ukuU85qgteqcPjSAre3pmcEMikTAnKKdrLF99zDDaEDqkV5oRv8XcgjvWY2ik4DPV3Q5TnRn",
  "key6": "2pnxEvutgy8Cv6yEHebg5iBmimDFff1J6VRErcZMQMqqQzDc7zw9LiCHfLW1x7TSeis1KAH5H7gvMcnMF4EbxRDJ",
  "key7": "4d9ivgupDk3r4piF5z8nk3apnm8Tjg2YQjmh7N2PbeQcjDkAZNAWKDcA5j3fAC3nfb1pWLJi38p1B3ZZAer9Hi2a",
  "key8": "3wB8U8NgCBLBRSsDYAda6hobAZ1TVX4SBVBsBkTfDC1dpELFewum2JEycs8XCNEtJ9ub9j7kjmLQ8Hi5p14ubk9N",
  "key9": "3ySCWH21Jmh61sQ6Z15K59XBEXV9jNZ5WM5QGATXGs8L8v23hQNr3jB4djFFe4d7nPvXGZS2BYX5QbELZbWvKJzy",
  "key10": "4uYXn8SbPa5b7LtuUzMVJEFkysd471vToJVsQizZUw459Q3SH9UVwZYgRAYz96yhRkwXW79xCPb6MT6oyBjpVNu9",
  "key11": "j9odARNJN4FFRHpUADQG5vGtnuzJW3YPdPZjxEdqPNoSEWKrGrDPPSjopKdRqLGzJLu1toq557syt8vRrVTMyvY",
  "key12": "3eJ3VxNqx99yKFLqDbEHUkFMXeVrg2BCNak317FAwnLf1xf5c84edENQJacomu12Y6ZkPMTwFkDFrhzBtVr4gCke",
  "key13": "yVA83Z5N6usjzyFXSJtXc6eEdAcH7DL4QZD94Af23kNN3Sd1WRBcyfGS6t1F2oQAYa1QBKnxZcxgjLDTFZf2Wy7",
  "key14": "csc2Sz6YFhYvR21k2VMVBVycQFEPxa5hZ85eKcghQaTGcXdKnx9oGd12tLhFPszvryZbKYBxRYvqbYvMmQNdbYF",
  "key15": "2PqgWNQ5rAbHQSWkgSBeDnoKFinBq3RC7Jch8HZ58xJPa7JW8NYyii2iwCnkESyjnWGFnCNZLazCzXvoSviGznVk",
  "key16": "4BbVsgi2JUn6TXiEzcC7e2hFKmbf1K7M8cZ3PiXxWUC8C58tktz9KD6V1k57FBewxpJc19Px6EJWiA3eaftYbGpy",
  "key17": "d6hbKBsgSfYPLpuWtaSakhdqyif433yUiNKoFDSMiBvYMqgPUUuUNioTmFwPvbhioo2URHK8cDz3ie8difanZsj",
  "key18": "5A3UwbDefmoRcqBJeqru1sWCu2gsA8mnRHY6XgViBtQyTxCLgxDGuxq2bnK2JK6Ju4ZqL28HfiUCKzP2Uu75ZK4T",
  "key19": "4RcMRmzk4gYg7jnz5JSJcEi8mAE2LMLocXDYJXuZn3mvyj2brdktTEYHsV9q2spzCjt7NnLZnxbaYrJFeGZWHuNH",
  "key20": "3rivUuRZdKRRj8BS9AQPJQyJL1xoV5YE4tQGbbifpLZXgJXYNYAwhsEDvu9Gywbc3DXmQjH2F2RZy4D72c7Da3Em",
  "key21": "3vX1pwiwLYHSmudAMBVsYLozzDHwfdEEfRSVPq8bve1DBkxyBX8gdkCDgFekhcTvUcPwFmeZGEVhoVpnDyZbXK2L",
  "key22": "JNFthSbSPnCYH7ScZvbwWTaKXV2gsf65bNraEd6Yq9RYGzAZ1jSmjZBeRzsHhc8gvwMxQHPbNkPmVbVKuvoHNdf",
  "key23": "2V1ZpxXVmPFNpjUMbDB27JMiNngDvZcxeX4kehgRepBWXpaKr45E6zG51Yho6LU7yLmjM4iFPGgcQNCKokdmHnUF",
  "key24": "65uiJAYTgQgVfXvXJ9vf7ELircwfzCEQWFcmUpMRpzmegqeWvqP3ae7hYs6hy5yX9GSLwTQ5RWMjJnp9ZwqgbMwv",
  "key25": "4fhiCJxFxYW4BY3o5P865RSXKdbLpwcs17vP2QQhaSJuRMRaLkoTY2jtFSpU7GbZETjVtWby5J9imZT3hXFKgg4J",
  "key26": "3Kc4gFnG75q3PeVhghszjMnrpVpdcNJYfAG8DX6J5MUAjCnuhZZzoSzKDogiSzBQhhgLnzw1Vtef9JTeNPJqYqQK"
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
