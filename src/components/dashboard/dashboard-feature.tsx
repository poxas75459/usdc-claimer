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
    "3FFM77Z845wTt9dVR74ELRwb14VSdJ8di9EQ3h2477PSZgcfukPA4fP2XByaDcdBQCEWY8LzHkXdMkFGBbeLM6TH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JXeCKhtnei5tWb6eN4SuiMAky5BZo6AhaQHxdj9oWh4WjsRwVrvEnd69BiF5scTkpBUVfqULaeH5XiuDaYACtSE",
  "key1": "62vgWgHDU3ZLbmxJmymMvXPfj3SEmkhBNzBdeMU22npgyzF3Wf5PWAbdvB4jm4KYvsUVQS9yNggyUkrKgsqCaz5q",
  "key2": "qqeia35GdpDVXxe6Zpw5awcQmo3tt9UityZWVB5uAq1j3if5qZsbfppHqyhMjvn1v2KzRLFjybELMrUPMNqeMdT",
  "key3": "5hFZFdKZVqS3CxM6USJVg9dWBw9YvivhgjE7N6oxRspF4CCWzWpasrpJs7fZXnbEetCa9AniDqBgj7PbjYG7zv1Z",
  "key4": "2RJj8hUaLcMsiiDYuM86Cbwx6UcR2ENUvSqh1HkU4G4v1SThcEV2sJRZMHrjqjrPQ5s7qx6wHsKnh1YAhJHzi1SP",
  "key5": "W4jBJ1mUgDiSEUM1JMsqVqbWYeJoift898KhCojSEDoVPR7zVMDXsGXFGj86HjGMRqDrZKjt6R9rV8bhpcLm72P",
  "key6": "qeASK5QGeZH49sSd74C38FET7VcivrUCVeq9DtzS8DsLCuH5euGRmtbYT6zi3cadxEkZ2TbYHZboJNYAgBbVkb7",
  "key7": "4VNaqTnB87ZkvQ49UCKh8AoeGe8XS4xWe7WjeNNaVwfjwYExp2KPD4ASeNZCR3Y6ai3phmZkUgJHd8QeJS2VTV3J",
  "key8": "2gNxvMFa833J3ZBJLT4Bq5fvYdKZWQBWbfvDGbbHnDdFN2qXw7sfEMPtmuQMZZHbYNU8s8ETpnuvxH9yduZVmXjX",
  "key9": "2i6m2WN4MthnUrmXHDfPAmhCiVCaJXjiGjoufqqPhbf44VRqUQuSizxfMHB3esv2veAJVDaiUwg1h4dWakEcjFej",
  "key10": "39UtLdK4YPCiiXVoZMDVPKLEhSQXAgovjRiJVdDuMk8jpFvwE9WGeZYD6VwwyDQMvgsrMUocdCpn5YSpRQj7xrvh",
  "key11": "4r4KWhsBAgpTzPmQTPkmSv3mpVARCvSDEzcfwcRne44xV3hvqZSVw4XPfxp42ckkScGizUiALgcW5XWX9U8iM5Fu",
  "key12": "5sxrkCy1pjVpZ9zFNapGRckE4Sg47K7sjZQ9mT8X8dZ65JH1TQM5e41K8yFKWD4VH2Ms4vtXFKp47eAsysWW7Da",
  "key13": "4LTWivNk1fD2UqgAig2Y7Rr2vHfYSEok8MsvjjRnPPSRdGA4FjXzL6o8V4JU6RM8UtqcVQzVHhSbhgusHG9EEjGL",
  "key14": "ddGkfv8dzqsEdTrADSHMqJNYdQVnccXTpgUSAmgCXhTqvXWTv1W2kT8nnmwb71woLmpjYhuuwvR32oL1zTqz3e5",
  "key15": "5otJfhz5erSXCg2E5x9z7VJz6gDW1K2DwoxZELJ5RGYsBLN1GxHxLBY5WTLHL7tFocqWx5Nxhu7ACjEpJhmYZLKz",
  "key16": "3ZYDTvwJwipv3pMemJqb9a6Rra5JwALL32M279MLMup15831SQrCySeQKbumdA5AwUmBF6BioteNDkFqcYTi2DKs",
  "key17": "62PDeMQu2eEVEwLLVpL3HYdXFtNty4uyVqAHvTHTUbpcR7WzExAgZVb7f76Xd3QQgxBCddysmdtGjijKexxmT5jz",
  "key18": "3P7bRjyYcubyMRLCnamQikmeRUpMCzFh6B646L1HrrvRb6ZjnnrM9sSTQ5sCVMeLVgeszVNBbRoMbHmJjS9EMbR5",
  "key19": "2NHZ1ycJAkB7x8oaB1aKWq4Aine7apJSCEQYmXL3E4Y2DXx3XYpxdM8o3AiHSUUsyovsVYXpfVkHqBKYGGJfLUpy",
  "key20": "YuEczTfez7wSJ3Cpb1aqXvXDRDXjHmHQFfwYzwGR4dyBWAJ1sf12sappjGKnNpXRiSJusPLjgN7f8gLZ1dL7kfJ",
  "key21": "3M1gh9XTWUwoPDuKEh1Av8zvTnWwkyJrRAp9f67XkpA1vwqd8xYoWoyPkQ5Ek6WPP7sRuVr1T3nvGFUtWhLWJb54",
  "key22": "6K6kNLBu4rXLoumnMcqesvqe3H1nLdo1RMyWovsHrHDV9tfgYawKMDDRFGARdxLsxxgUcTTTwyHDjwxbMKasGbe",
  "key23": "2tns7Jj5PPkvdQynizDbU9kNJRLM1u6Hkt7i9C2MjiPE6qFPSm3ZqhfESSjiQecthu6ujWpnY381iw325TiFPwmk",
  "key24": "2pcCd6j3JbyKedaUS2Z9JbPYcyje9M9oHTCtgiK1yLHwqEM267a5eraHykduBczRk5CziMJ5Uvat7BoQT1ABYx6R"
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
