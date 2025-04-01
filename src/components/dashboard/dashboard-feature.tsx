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
    "3fNtLa6FMCcC1xpvjtACsF3dLGtJyq1k1ezw9pr6LYHpLMyVTjbSEe7eFbQUA2BRqwng5PmffE3aXakdxuC32RHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fkxW2vkYmXbbNni1fYbNBT2MyB9ZzymieCpksE5hRpsDM9Lp4B2VRJmMJQae6BPxGW2eH6h8YoNp3HhnVy4UDs6",
  "key1": "PRBYcAjYD2BeBwsTCGK5WUQwyngd5jYrpUvbPREs7ASTWAtDWvdKRbH9gSP2uTTNQEatUTHoaJaMRdK21PEpbn6",
  "key2": "5KRN2RoZC5zvpFEM4uaeHZikWFwh4oKB5CEnGAvjMinXPdT9EksWe4Aspq8e8XGd13fKXKAaYn3kzegxCvUoHfAY",
  "key3": "e2R2AjkhWPCYTb3TEiHCQZN1w5kJfrdzukYQH6sak8GJrtaAGMoncGpU5d3oi5Ghq346iydeKtMtehNXLmAY24d",
  "key4": "5FdREdLM7pJpfdx8KjMxSZrSfTrfrtT2oMcDJwvGXtDsiGfgYLz5hcN5t7vVTNuBAyhmr1MU9icpKtHpdW1xMyyM",
  "key5": "29EPGMmK7YfV38sHXSgYuypCyd3wNyEx9GLvHqiHrcM8tPsNziX6zUVmvWFa9pCPXBX8paPNKzy2xuA2oTN5mAGv",
  "key6": "5AV1Sd6pPrUufpNGhhnYY6r7Que6M5238wowbrDqgYgwp4XWvMcbdVqiFKy1wdRwjzf7jnARxhcRiqrVTcBiWCiV",
  "key7": "2ESXfba9732BUWtcFVs2uZMtKR7rHLiVb3gMxYMtc8kuC2Nt5UWJtcUUArTexZZ1DH6c6yRxM91Nn4UbxQ1aDfWV",
  "key8": "2gNyY39LMD5FAfpPVYhvMauawfbBLajWRzmRnhXTDfrQnakLpujz86ahueYuGCyPQacxkMPDX6TusrgWXW2Ad8mF",
  "key9": "2V19ib3sriVgEyFRNPhfKdp3SRRYDuGppSBEip5T5HcD7JUXPANsjtDDqaaFZHCWSmsYmP8N8eK7mUd1SM3TkRng",
  "key10": "45BrYUsgZForV1a1hZb72yRFymyy9tvxENShhGSHduYpmzU5FFM1TzzFkcFcJFhjLJJ4qppjUkwP6SaJNUwVLTCb",
  "key11": "2JmxXQWKp5vuVMmG1be63TY1vhYZ457CzRpwcJ3qUpyjvurqrAswa4ZPdY8T3SufNCgdGD4AEferTitvT5fZzjPC",
  "key12": "4binS4hov6FdJyZawPhY3eBVJLNd2kPkpoiRDxrKwSV4e5qphwwW6i4pY5ikf21eYjycLXry3kw35myCp5E8JnN",
  "key13": "Nn4Qu9kdJqm6pUG2GAuGvnR8C6Yft5eQeJYNQwuEt2pavuvfFYFDafcbZSEnGt4YVuq3ToFRYB6pk2vSdDbxAUQ",
  "key14": "58spXicSqeAUNe9XnvQALXdF7JfRHsqsFVkQXjw8B3aPYymtH7VSPrBABNp2MBLx5jgzc5U1vbWvD6gebzX94YAs",
  "key15": "4j1aaJGMAWxbx9TuUdjMED7JTTsPFHGvR1ptH3DHQPrKPGS4TyRDKVpyvpCrsGXKHnZNPwBbhXiSxpj1h6NsMcYo",
  "key16": "4E3ruyYBawdRLzB6oGhNnKqH6Jt28gBvrPLrdJGXoKM78RnE7fCw5X6je9LZ84CSw6ELQSq7w7Mm5MmVHrz1jP3R",
  "key17": "5Heh4xxZ8PKjjVYFpW3Zsg8k6k2oTVTZaHWT8GsN9EKcSnXhCUAJpVMPsBpByVPsv71bzoTkVoBSqwjZLW15SDfh",
  "key18": "3b2jpbScEbpqH77HA3EcSTURioxe52M7AZJmFinMXheBgErrBYX52HJk2i7fxztLK7Expy3bYuEqTdreHtjbvZUt",
  "key19": "kShtwj2Tz1NFooTbjirCub5gxTis2Qbz2SnxxE2dqGK4Kc2RtoXZv8imfHBw2BhtJySUA9t6GW3dqB7PRAzBKk3",
  "key20": "9kVTiJybbU7PmdDccvXEbqPq5ESWTHaYcpijMrgAqrRQiG1YkU4ymF2yPZpQfKfUb11mWTUNwbTuxvuQjPy1U1u",
  "key21": "3Y1c7qLHuBgdhzG2heAuwVVaCZJExXocE3qvGWoCsZWrsuzT1YeUMBtnCPVokWYCEfYNdc3tEgzygBve9c5ahBFK",
  "key22": "2ck6AZntU1SuqumxMVgt5jvhq7rGj4CUeTG5PdJdN1ZdsMGousm4Aqmohd5fxtnRUSUbcKxNitU8MxXKtC36VpKC",
  "key23": "HGNw2qP6KhfRDGvZAhbqp8TjYJXtEyi9Y3ypY75EWFM2NYwQzqyTrqMoF3mxv5QtxQJ79TR51U9RwPUg33juKtj",
  "key24": "4Vq5oNgRZzJarvLZiEkL3CmRPD6eUrBETouP35QRKT6Fzo1bpzogeE8cVaRr2p9DCrCRcYZtbHZT4DXuyMUvN5Cv",
  "key25": "2v9bY42eN2MvnD99f1u5hyFyGrFpb9q2XEH5VcAbv4yAipEr5z98nPtc2tLzYozvc5fwKtY1ij26LLBVrhNxeEmf",
  "key26": "5R8pK1mE7Mrivms1rLFjskZ3gHACJqg3UMc7b7BXgNHKVHeweDV6BjVAeSTuwuX2WVLFiuQdg8dYKbrmZEEYdT4q"
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
