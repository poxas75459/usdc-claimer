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
    "2LV9LNtgYrQJNjtu2hHBWDJ8zBBkcRyDA2gPPmhRxA3ZJfja7D5qeCRzGC4XsqW1K1LpR4nAbkySZYhQeQkhx8qK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PR9zVofGGcXVEqddXsBJMKYwFdenBzgjAnvAjdZZ3vTST4wSfTXvNF7rX4tBzE99NX3ftHwUmcWsC8nMCPFayFL",
  "key1": "66ZJ3ZyP83oDMz2K3McxsCGzKsQLp49Va7tkL6o37t5vtHxQQpTWeP8YBb1W6FF582NZTCsWSfqDEv3JcidTeU8k",
  "key2": "1B2Koxs4sC7JGyKP3WkW8P46vt5oqeNzx35nhjvL1n8ByEigQrPUL9vJvXUmh2sudrRsrs8xoUTfM3fD8yAv25r",
  "key3": "5Mc9Va1NSBBeqGNzAwruHruBzAAve9Lzg5h6v9aRZ58M4UaKbdceMzLM3A8Hn7wwGEUsSchhi921gt9qLchoXpHh",
  "key4": "3f8i5jQqJa1tzwdfVo5V2NSVMtfSgnRmnCNRtM3K8izVmpvtfCncDMHvJHKq9cwR2C3VFAoQwqhwd7jx1tzWdCGc",
  "key5": "PtgLRLtebKM5L22ZV56bF3p1V5iWJi68BkCXkDmNvGtQtYLL6Y6DMmwNr92eXoUnHNuFquJEJ5pK6GZTbDzSJav",
  "key6": "4X7TrEo9sDyuHRdwW4Fx1gGHW9YszYCcjDtYCuNvTM6onPuusKwJT7cQKYvmNGK3JB9Pto4kNVvmmiMmPjP7VRMg",
  "key7": "2q7zRUnZHpYKDZ7sgQ9YE2gmjNYA4h7LFmvGvzEG2Vt76xQALNbYHkZrDQnT8a1dhoJVXNVjA1iwZKDsAwQekYDk",
  "key8": "gMX65LvXrgJe2yM8U3sQ1GWFaaNzsrcFWdbxRy5uTQSACcj4J3SPDNgkDx9jUWbx14FQSGduWs1k7ENtgXVZ4se",
  "key9": "JpsL4KuNJvgoJiGXwAhLu9cPrmBB2dBg4NRUFojGx96E5Vnpub3qwdBUtnrq9KQUWmKiGystHEhHrBVG7sdxfpL",
  "key10": "4tyaEeiqW5XJyXFJiVn2wXfzGysneoWTqAh3rkkYyGVH1akeu9QAwdN7SgGkDpvz6kYXBedF57MMXmMd1F5f3sG1",
  "key11": "46dzWCjdRGzPBaw3xotoQJtoEjFcYx72qtr7NgWK9w52XtGepmjeRRzht1UbwYHvSUCo2VCmThQu2ZgKwUqZb6Z7",
  "key12": "2ZC1oxQbkS2yHhTwqpTuMqzhT1CpMqTYYNZRHiKQ3q3Gne8hZ9ABWMzF48Dh1L1Xt4RZFmtGQR7EGpZpfoAbwn6n",
  "key13": "2hQioudWmuRaX2fTGxJ7dV8zw4u8547pYPggBtHrAXE3PQt5Xashh5zc1g5LVpcSRmZRe8W3HdhSGBQcQKWqMZmJ",
  "key14": "TVHyUEaTchzxnbEb2GUrakpjHv1UyciCREm6z7LaDDmMHhsLG9BE6YxJr6A1ovK32ALgMG4xNaFyT5XSnp9PaVx",
  "key15": "2Y6TY1c1HVJMwGeGnTD9M8VYvYwmfT57xLMYy3tsxGiyVJzwnj3CMvU8nZUsURu3LPYPg4U929PoqZeEw2QANnqS",
  "key16": "3wHnfYMNyAs3sk5oF12c7HdqfWQL64DUFtycGHhrzUpZAY7qkkjYpyQq95HufJ8AGD8nci8Ty6M6FsFrdMjNqZTy",
  "key17": "4Q5WQiyB7N1yy7pUqpZP6dd5FHgaoFrsnRfCZvqR8R5xoefVX7HQGRkvKSsCbWiVzKe5aaA8Ag7EPrwbWkuyEjTY",
  "key18": "5TdPd1QBycZxDRYyd8Qi21NpJ7ZW9EkQ1snk828VWBRouVhw8Tdp39a4PbAZ6yCBmRr55JUoCLMTiacWTqRcTA3x",
  "key19": "642Nb3XJwGAoH9vTbynmY3nBfCXaEDGXa7g3pT8F5zNP3c6qHK4ZR33wj3dvFBtKWLdJC93kVVLnechCQaju72gL",
  "key20": "4emtGmjqbHkvCQrie9gAKwyEtLi1SS7D25CSBEsPwvYmzLe6wFvspUxcw3zj5VSDSWH6RVDGRzZwSJRbDKJwXB6C",
  "key21": "46e399d4X2HwLsJS2X3P4EXZGkRp2KuyCYkhmU3zTUYGrHinL5zzXmhFUuETP6haNunDuGC9bbyoA7pCaDXZnTyh",
  "key22": "3tnQicqaRFRaxvooEGBuaexYmrLHHWHUB4DAdTVmVZKftTAr3duSdAvESGXi8pSPvS2VGXcketsNgu66gsaUQifi",
  "key23": "2gHtc2mc2MNNJHJLu2xbuMfUntY7Sss7Z4nfVAWAGi1AbPMBogk7Hur3coT8v6L7QWMDFictG6MGhc1EzkrDfuR7",
  "key24": "3gZktWXsRUAdJwdVDm7B323YFav2UUghigzguBUy1HuofCDMRfsdErZRuGA64xmqAon7fHWRRcz5XhczBo1v63h8",
  "key25": "37d4pQCqi1jz7UBU6mTxGX5gZfJM3fDWnDf2MCUQxQLYwPHEu5mz4ihTYXMPDfSSzJDLWsm7yqJoYkmfdggTdTPP",
  "key26": "2BvhdNCakfctkiPwB5yGBCcMDbzrzpjiz4JTGhc5sVSrzctbcoxC9Z6rGjYZWFWgVtXL9caDXFgY8nezUk48nF2G",
  "key27": "54aBEUKs8TfXYNJX4fWoEJcvEXUMeYYKnBkW3LeKQUyAouC3DPriScBWw2sNBs4iwFDNJXkvoPg5zokxtnMD3BQY"
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
