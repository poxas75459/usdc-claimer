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
    "HAcWaSYVxNFjaMjh6TqvMJbCY1iLsE5raxEbBUMn4ML6SCNWwpCA7PqKkyhDFNzt4h2a2fwoH6V7Ly5czrhcHtD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dtbQ9yFBZ3pgbCX4Gcehd47jvNom1UAENx7dTRnGDjD2BWpWgddoiG9rzrPHCLhXVTNFR2HstMtkEJqvMRqZgQ3",
  "key1": "4x6fboNifeRWuTpY67awmiDCrr8tXr9KBnrJugcAry9yGuANa2tWSYTengPBQVn5wLgbuM8ZqwPuyrHe1CW2MBhC",
  "key2": "3RP5ZPr3fuXe5rtcUtNiUmzBtWpgVcvw924EuxCECrH5YxHBydstSoq7Ejto63LRVUQZ6a8stNDXBVWfZbGN5sgc",
  "key3": "5Cr9fqbVBuigvse3UerYvj9EirMbbr12EPJ2ryk38PNSHgCnLmSFsNUmor7fTW8NH6tpQ6ad8uNkMDCrx2dAnSj",
  "key4": "55QGqScPc4x1vXVyyvSuVG7Ea2gkQqPhm9Z3PELmb5WJxqi5HubEhVhMTeUWHjcRa4rDyjjuxiLMBfB5cRbw8rRy",
  "key5": "Etb6G6nycyk4dbQdBVYzV4Z3oFQEGG1c56vifDG2vbC8TpzKtqzz8pX193M51B5xn72czfSgJzkWb7VfRXXdkJv",
  "key6": "62RZgr2fGXY2xgUrjWhkCcDPfEzn7VnmsXQZhNZiVtVi9qPyVRipNBEC92tQSiAzeKkW452CHk5koJJzobK3Sq23",
  "key7": "5h1xiP8opekPK1YdorsUeFkcX85Wvst9oiqENAKqa1uv1RvdqYzpEHpTUDiAoLu2uRoRbvugJu1jJi7eDQTnCh8",
  "key8": "43XfuWnNFsg1JWyJECSwMS5hme27ReSi9jiSv59f2QzmaPnYsAXRDj3nWPTsBEXGaUx59rwatzW8cL1ajZsvA5QW",
  "key9": "3ULEpYcDv3Q3XFKMV3szWX4jjUYoiXMELvvf65ABHqqXWqisBLERj6tuqMm3Y8V4F5ngciPuftXT4osMtRvyPZ5e",
  "key10": "37AvaijK3RDV9CHFsEQbfP1zbEhz9xEu2Cuwc32bAguDoRX4noyW1UhYAsWYYXpDU6TRqZUiHMCykGUsg4eZW6x1",
  "key11": "4nAsSVfQo4LDfvaRmbqPyoaZgM9VyBTrvBBnJgeYRCQ5vcuumYLoHLFbZ5bCbU26h6MhsQxU2G7iT2K8CBhvkxZS",
  "key12": "2STiZsevhahsMjcTwoNVwdyqDaSedfVqKw2v5goeKVPizRsNHFt2Q4ubCCC4xZXXHEHXQEwHhv6A8sNRQqsdmSTg",
  "key13": "TxE5RnFmMfX8qkBAP3s7nCacamfgxyuopZVFi2ALG2oApQEY38hdrBFptSUxWrZdXNUMpAxfiheGvZS87ssMDXL",
  "key14": "VjqKZiSuVV6hvmt7mAaHuyEJNcXf2XwXzXdZNwx7AkmgpLksfCfTLGNSR58ieHn8fq5whjW12cB8YSf7cz3YcGm",
  "key15": "3DajvYLJL8evjq9sAikZeEPrjjAqFC14gwCbQoqSMyb5ANCFkdhBKuMBC6mDWprRDR6KJn7wvRYMASByW9fZ2h36",
  "key16": "4Pm4wNdVajfrWxUeeHX5UWzeMGajwem8xYkpUA9Z7YvYje9UowDC899EjWRLduMJrbkBDofj6CJgutnEq43Yp1A3",
  "key17": "5pUcseDzfJdnwGx7fHbtmhznTPytBjJFiX3jz7UnzNfzD54D9jt1Nu6vwC4njdU7G5LA4prPfGktrvJ43Cc3LL9J",
  "key18": "pYAtsAg56A7XUhPMjVka1hkRsEMgHXJBkMUDEjzguWdhLHurGFfiNmr6LC1x9YX9Pnw6brUQmJb4t7stj3WGNj6",
  "key19": "rWgtkSwDWpTE95T42BbqJC8Bn3mvZCbiRv48bHfR5FVPZnNxioUgw9xA7R61EAiQaLmnU3xdJLpXw8Mbio4Rs7y",
  "key20": "2TfUNazY4rqdnqjePKD4zVeqyzLwZuQ1oVzAY4CV7khRKYExVjzg1K7W3gkZKTyCw8WYMwd11nnjYpB4YEiaCBLy",
  "key21": "4AEsUtDRKNCqfsXYTkRbiQ3L2sG3j6AVjozsArzrReQi3w7njJ2vRq49cHFPCBKmGq2mLFUf11kFYq5f3RQhGstc",
  "key22": "5WRugV8vSP6q181KycfzKSvDPE5nq3qAQVc42ksDuzbG39BeECuDtFjTsQ9hgP6RHdSrw77zJEciHnwfiETN2J88",
  "key23": "2GnggaH32cF5sdhUJcD7PRwHqQPJUa8rEbH1EojdiZJRqYggNZPtRFvwfqM9SFs5crYFbYUhaW43ydG3fxVEFfjD",
  "key24": "4Qaz1RLR9BEse8ErK5FH3Rxr83yKC8X4BuwtNzto6BGDduKAmz182mQXuF4sixKixErnzNVCBHMgsN7DLMPyCbsK",
  "key25": "2m16K4MFjUm5BcQ1XdJTEVEr22urTuwYEJayz4dNC4GdqsYEyRV5Aps1rRD7T74jvTDKeuRjCq2mnX9r25zLckGK"
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
