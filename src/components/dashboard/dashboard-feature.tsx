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
    "5kUo75b4Wzz7WhZ9dvRofopkcNVFMUuk44cjuqaJqEmYUR2Y3wwLqryETgroFR1qEkCQ3ECmyLVCctisEQ5fBMT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g2ifMWwokTJcNAbJJ3MYAPv8DAsu1W2nZf3yFwxcDXdMr8GjRcrWDgf5hckjrCuJbAxbH7QL6XHwzpuDjqn4TXy",
  "key1": "5FJurGJ3R9zseQtbEesSp8H8XajCQVSpXt4QBdh1RG6SEqshyJWmbtoC3K49dxr8Nc11UudDBUJdhVo1prfm8wzf",
  "key2": "4aaVLpzTHS1ptcV5tU9tD4pRKJmtzMmBUUi5it81sNatUhj2TXxgih2uL35sUehMP64nFHQS3T3yyyhF7f6DFKP2",
  "key3": "3m7t5BdP3nigFopU2a1sYqopHqAtzcUKCRMTq9grMfrfY7aG4mkTQeCRYzHctmked4ZCwf4WDKsaPqprAfq77RTh",
  "key4": "ea31qEQjHcigjtyf7ij5e8zq3cSHrocj1naq2cVgvBaNfg1rWMFHBA7o9B4WK4sKDvwHT1GkeEjYte3aVEiozDv",
  "key5": "4UwbJ8Nx4mwZJfamTrPK9CF9P8KPhAQcmsRSTc8VtPW3b3432hsuqita22YA9z8LPbpPopMZUNxntwKCAPmuVAEe",
  "key6": "54qGPWhsspWbnLzYyy9jo92aWZqUcGmFLLZCmHwUqb3vn8vRzsQ2nAAL4sZTG31U1xwyS4AQ51iqu15n1H9AXKQf",
  "key7": "42tT3pPi2UgaiDFLPUom5MAcE6ifrBAxPu5HAf4SoQE2GmKuKe78z1a46DeHEt365U3HzxR8aBHLWa3ECAH5UQNv",
  "key8": "5vWPpzQQHMKvgXZeRfGRyohdanaKDzm5i6qjhRbz6bb5dav1eaLCMTMsEEWmgybpJF4oAg4uexxX2LkQYR6k66JK",
  "key9": "D21Xwv1UGj38gCcfdFdjXuqkJ7M2RXJG4bLS5dopvNg1Q3s5tx6PRH6MBGRQUhjXXeBmYJMWAdARS7Y9bZTa6Fc",
  "key10": "3h5uxgYBALjQbNjp9mwhFdbqxQq2hc6EAiwT7Vxv1zsLKtdfJz1vU1ThJgFtcvRNnspnycLstYNNcCxzhQyd2swx",
  "key11": "S8CXCa1sWzUbx6oCEL36vzmtHiEA3F7ogaX2gd2KDk1DgFakV6geAyK9PuQUVhmhjFRpYvM7vRzDJdq3YUa8bgJ",
  "key12": "34fokvd8ijTw3dcdcjWjzC53UGym1vLB3mJXwREg1KstfCweBJ88ttaBCmupSYQrRt2aFKwpsCGwvtU3Mji5apGh",
  "key13": "5XtM6efThXZ4nFcrV2nSUSWSv4LmzA8ctTWEbumZiJhhb9WYTj76HHCw4PYf1yhw4V58WdRbv72aFQPxd2pd6eVs",
  "key14": "5cRFQz8YxkrpWCUMrPUgGt2NqyXnEKT6fd2EBpv6zBPrAPSwN7DAkdgWt88yMoXjZEJERKGkSGbqkAP6ro5yvR1S",
  "key15": "5hFbEs4mXuyV8jBHwA9HFrUMd9PwMH4exSDwQXGjNftjmCiGTAmo7Js21xc94ZsyoW49tDHeStbFeB5NmKUb8Duy",
  "key16": "2rM2qfKMBt69Qn5kBLtZ4nEFLhSy4BFF2gNHyQQ2TCAmPsV71SH46yL9waq5R9vRpJUqHMXBgMjHVCAod5aGP5SZ",
  "key17": "2AQv2FJxjcXMTcdq6XXNS5mmoH864twEWZc6dwqT3ihUpYD4UHfiTk17zTMVPvPXLTGUJUFMUT4Wv5bqwySGAkrY",
  "key18": "vhvk4XTrgdwayURjvQP3yWLSmcmNYqQ2xacrovdCSRvbJG9U1rBuuYDPmR3mGXM6Pm4MAYifkXJm33g7sHqpEJn",
  "key19": "aM9XD16aR6CAgxE5PWnLSDzx5wv7x7DeTJ4j3rZbqAx8aS1hGmZCB6VB5GMYptSR9YhRA5ipGkbdhtgWw2CvuKk",
  "key20": "63BY2kMeUc5eU11UgZPbdDRxhXYjp3fEfg6u1e6FTbeHUb46MW4ZjNRZSjLbVAg5d5FKbUsvMcxDQ27GpKBdcTd8",
  "key21": "4xQ8XRjHygqhnZWchHrYcqt9PqJYKrwduTrMKiaEzgy8oX7SovKhhSsVsXtb2uucuHhUk4uxxQ4dcezESo7TqsSb",
  "key22": "4V4CbwqJ6o6U3BFvYZhsKaap9tVjjK9NDeHYYB3Ls9388iPGWaNQZNMa8rtt6nxEnknkTTBdKQxLhWvsK1Zmj4rp",
  "key23": "2mh6djwPxp8hdwXFBF6VsYuKzytW2DdknSYAucw2HCpiFkgs62puj7rLHeHUF9NqokzmiDMvvnWyvfUjL9Lj4SK1",
  "key24": "28zkusJfm5apjZo36TwMkCGAKeutdT3J7CKw2N9BjKnx9aTtLdjjcHX6XNgEHyHJjjMn3bdQ8pFcQdj4o6AUhH5T",
  "key25": "5KSPewJnv93ZfF9oJmVyZZPcBv5UfEWxE9LUTjgB3gpjNYuKhpB1Pjr8ugqn2fS3TatJygdByGbCvYhrvWa1qNRK",
  "key26": "56jDS9UoHecESbNbkrnL2nxzGp2iTuomgXeqMh3hBvYefwRj3p5rZ1RzyJtiSLzqKz6sghBQXYrzyApPmgNkb8oH"
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
