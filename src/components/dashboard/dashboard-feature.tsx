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
    "2BSCYBm2K37wRG9rUtDWRzjb9eb89cgQnX1jEf6RDZ41jSXMyuT4znJJasKWq681pFNNCgPzQdpooV8MmYmdPhCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63VHdS6SotGchVBdXfgB8q8HmULo8ccsTVvWdzjuRHGity2rzmm9kEi6DfVs3exjWhs3aC7CsxyUwZmc7DshyGCT",
  "key1": "mXCBKBLHFURZq3z9DLUH7NEis69PZNV7dck1n8Un9rtmMdzvroPTDj6iuFru6dBFE7wwt6USYZ4txH1j3gMEii5",
  "key2": "44o2UmygU49PFPwVGfCVXj1tQxXq4b1KZ39JsYebnN8aP2kr3hQT7CvnZHhEqZed355etqdagz4ae84JPWSESbGj",
  "key3": "3DB8hfcdoiFMHm9nNGA7ejsv9mpQJwADpidseWUyndQ6cJqZ2a9Gu1YNWr4xqkEtjsNazBVKYUbRMNNyzZm6PcFT",
  "key4": "4SWfAPyQsQeZTt7TKSLmfpv6VgV6p1LMKs8g8KNWoav4tns9eGra8Um2SPnfbBEqR5XmPAJEQ86K3nynHF1AQ4nv",
  "key5": "YR7FbxWzKsYi219WKuZMxeDyneJQCCGgoA4QkgRmqMpj9nqx78r5xGD5Btp9Ss2vbKYHRsSzUchs1xo3eKNMyoF",
  "key6": "5nLtoxd5GLkLyNSXMwf1U8hB74doY7oLWi4MBzi76obwiCSU2yiTBzjL5xeXvHuQUXuybjnhNHYsHSJgpWLphVi1",
  "key7": "2jWiyKTjjYhbZnLdwDE5mCpXfAtDQRaZGeLDpquHDQwkzjmULbdPrHMs4GV2aiTZtTFpdHQpMHDgYpfjWS4tZYPu",
  "key8": "5YxFzeCKWGM1m1YCMuTwEu5wCPXyecpwAdgNB7TmxbFmpDBiok1Js2vp6y8y7SLM6sXVAop4MdP1Tb6AurVqWc5N",
  "key9": "GAtakFqbXs9YmBpnG354edoz4xkKDfGcEn2HT9PDqUB7Fd6pw4Cgm8Jv513cuXv64bAJVoydDXaMQbw1Wt2birW",
  "key10": "2pSLR8MHcDM2FGcnwnRAQF9C7assbjwCq2YqVMwdJhYdqtUWUQsBRVfReSN8goqBW8p37ZRnpyzxQLGnScko3VDB",
  "key11": "4VNgCr1b1Z7euXAfA6QH1tV5fGjE5Q92LATJJQsz2mRJpQWVRGPf58pa1H2L7cpEA9UhcC112a7uhfUaz5f39gCH",
  "key12": "3JnF1BsYZkEtPAFgfmZPVEQNyJfsbYk9syZL2ke5yjyxaoFj5BpLQeEqS62SFWoTJBkhveRLYHecKhPjTogT9jFm",
  "key13": "r21orh7aPGPPepG5qiw9meLHk5ewNF88aHXMQ4EnuiNcxwLsfug5YFnpkx6AKUdhWVyUhprt5rpEZKXixLhMuke",
  "key14": "2oLFhJSgGHAPJXQ36ybcK17AphcpYxdHn8LqLwvrZ2eQaG5CBhPnRcq69hfE9YiV86wBuCQgtxj13nZs4Z3xwmdV",
  "key15": "3AcDHrj5gHR7ZpL48utdoAwwyCqcNWkj85VXe5RuEd1V9Rt8hkxr2YdeNmft1H7UYg3yHm74qs3SB28De2if9n42",
  "key16": "58PHJ26dtuMByoMimjs3FPBCeDh1enwCqgvdDtka7m7bvrTq3qKi6NdY4kKRAyFJxiF9eyt9EWBd3nqDLMiTBxuD",
  "key17": "x5odpRPAE1p8tNanugUPBKUpGhDbMEVYsAfog69M3HpG31kEx3EXQwceN7tdBQVgNtwo6M2UVAFdSMLqpWzRNNb",
  "key18": "2fZPKbA9qHP8cEuUq317HKYn19NksC1PsSYJLrq5idbCkzWk8oCKQs1MCTbRGggAuwNxKYfPWV7vyYXhrMC6Y2NP",
  "key19": "2NqL95i2mkke93tjNFwFmHAJFHUYjB3XmJjru8piJyko6ZxBgYP1Cio6SwF8ozcV7aZoFotxMQM3ArYjf9ZXdRk7",
  "key20": "2who45iMuuhGLkkr4qNa1qtSd7abFvH6y18vtyHnmcB3huqimkFeZmgQrDr9wvBYmNkARX1tonmgVkR3fUxoqmdi",
  "key21": "3tu2hw56CUyA7KsNerrrqkMwfQNay4GU7GddavwJGauvjvFgoUrh229S74NMKaXdH5BkMJNTxik8v4bH8aXZvtTJ",
  "key22": "22sRCoNmcUQXtdo41dAWqpqjsqLEg1F1KZfq8tKMpFqMtNqJPg2FCyjdGppYhQb7e8zrSLAkHSYtYv6NucUzcDmM",
  "key23": "61m8DTcu5Y8Z2aydhrNbUu6jRDY6L6HCerUe6F4LhW3qo2afdGK1yDUSsT1bj2KeBBQNELH9QM3CbQ5F8mg1s59t",
  "key24": "4WEgKiK8e9TfXtFZiD2Uyyj2u1LAwSa8n8Yx5bv8tUepesk73sT6rcfRJkW7oypU52yLm4XuqT6DNfSB6SiSLJMR",
  "key25": "5hWGxND7ENpMXQr7RuDaV7dmjqSbWc7SQMEoj4VwftPTNw9PwHJyQyrGkQ3CqtJf1Z6Cuzssi1wmPNLe1E9Yvueg",
  "key26": "56yhoUCnbyDya136PJsfNM3zE1DLymmxpaHA75Q9xU2WQHhQQaKdiFKnhWVEkcBMUmDcLbPC5StvS63bbTyKnW2h"
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
