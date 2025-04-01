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
    "5FuTSBHMn5FPnbYmZHG2dtsApsdCxiF7Mo5vJrMfjepc57YsCe5R3gyTdE47bczNa9er2HdoL9T7gMXZqPtyrBPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31uaxHfnDPLCKZ3LWUzZm4FivuDLAwvbxtNHrjtwCR46CRXWCrJgdq7o4wdPpEYh3GkZGPUQVnwqPxgBq6aPqdLs",
  "key1": "3zuHzxKGfTnrZmyb1cKc166dCNPYJ7bmtzFeCE5KGfQdkftb7DPmtTtNmRg6RpNVKzmEs6mPYib76265hE6oKxg7",
  "key2": "5WNRFTu9XZXkWGuEM8MsPP4ZvfmyTSMZvTSoMjdhqZ8V4ogj2TKsjRGcQ6Mna32RgrLhKK1ykLSFF929MhhjpeSX",
  "key3": "3McDitB89czfbC9eVVvyk6CwQw41FfRSR3DBGrygv93EZjYcUFXicfV9FgpBrbARQeP7nNs4C8p2DcZfgaHrud1B",
  "key4": "5ipcoRvQvGTnoHfXYiKCSLZYtRLeSBn3QCGFS7NqsBQ8VPcFtaYgNHSxxUV8ZW3be145qqVE5bnhzMouc4Zfu46y",
  "key5": "4Svf2zre5gPqMsBd9RGKB9Ya5jVsFhm7GTHW3W4w6cGq8Dkx8PgSwVy93L2AU8kMaTZXvjtxigd9LFn7MUZK1kYR",
  "key6": "4HAr9XxKig5A9X8cSNB8f9hNKNk1ntE9Qtdh2h6FjmgEDrwbMwq2n7qqcZi8ALoMha3kavM4GdfPMLnvchBLkKWp",
  "key7": "2vPFzpnPhXtPTUCguHC1Jq2st35ntFaqb1mdsZZwwJ1Pd195X8qjqG7k5phS1xvVEoDtsQYLUaSJTD6iLp1ajRUh",
  "key8": "4NyLwcySExJCoY6Knku6ue5eAdLkUsSni2pfysyyfyUeFBeCNDU1SfhUxFgYL64jX1ej6Q8j5cU8xgNzJnUuEs6f",
  "key9": "4uCzei8SXkwQUFM2LZWNHh25mxHyfb3r7CNSKNQ3FMn3cPGwo7GhPVDVdfvZivFJas89M8132aSPwBJkeydzuBbr",
  "key10": "3AgPTqVY6PLnxBdQys8gd8oCPU9rRyZMWfwrUvFPJ4zMeTJAQeNe544aS3cSaqCRMpAU3ivFwnXtgFzj1nd5onap",
  "key11": "3j8EiyFYAaDLUyZffRmygStc29Q8jEw68g7ReYwW42kcZygDkkSxmZrArLasVVVb8Fp4DuGYx7Gp6yqaT6LHRFUt",
  "key12": "2PS6ue75oM3QgUN2HfaxkUJsfjcE2LgeGa9F8FEFYfyjGWgd3kp2mZbFLN5BqFzT4a3s4ZDJCAL2jxzQ86hzve2E",
  "key13": "26k4G1YmTHb7myjw2hFzNe7WU19GTWFuzejVpYrTSZZovYUV8d9j9P1EKGThqemZKmgkYadVYCxBbkGwKUmHxviS",
  "key14": "2EUNbt7epKXGGxVK1X1sy2bo7HLWDk4MDYuLBZFqH1UzCoe2uTzBn4bfTK7a5AW2BsrL3DY2L8hLx7uY4eiTpSKR",
  "key15": "58fVgp19WNWyqkZKBxjwq7nEv7hV7QRLaBgb5TrdXzTFhT2rmz2haceEwbcGGAxLhkassgB5Y5PZ75FeXNM3ojAh",
  "key16": "61XvdYAjfDsNrzDMhkGRxUTg3q1ff4qkLYVQ6FpbeQ83EL7aCgMYGSkyNM54ELYWSHYU2HPLAMGHWhmujUjPSNWN",
  "key17": "2jFTCUztw35R5XDHnatURSuMQQXcPnXmMSsVd7J7mNh4U2PNGJvVSKSph2bCtA9LXyACJCqkDU8nN9UDMcio4uSG",
  "key18": "3uftySAWQ6QnQXqPrFadF6HKU6U1Ggk9warEonFUMZeasQvKWosnbfBTi9cXnVKbcgW1fhcn3oKocG73WDDA5Zm3",
  "key19": "5QL4B944S2JkPtt8KX35RtyjrKZAu1J2qbNEFMn6JXARoGRCtbqytQwToTD2hPCdtY4oF4Ejkw17bCU7mnFv8izz",
  "key20": "5t78NBFC1avvnR6A2pscc9VP7mfJeKF6hugpWJPWibWhqzGuUjoW1CACeHku846XLByrSnujubEmpLzG76QtXiMD",
  "key21": "3xac3Ao5oZ3Go4fVQtFzvwgh5uvGrS8U6Dx4TmXcjzfohfGArYYyh9teWUdkdxn1CDoMTs5MQd2Wy9K3Dym5VxAN",
  "key22": "4XULzzTJT4LHGfyKENRLMeEe7fWPdTQrEtm45rnyQKKAp1HCteXXbEKNw9VRtojzgKFQ96WtwtTFYemVuoxV8W2R",
  "key23": "5HsJX4D1RKeftv1GW35tSRkJ1ji76ThNRofV5zTYhvDiNFsJdxF3exHc5A8PSsKVtbsYEGDUuDNimvMtt9w3YEvv",
  "key24": "uCrWLDw8DKFA7w2FnHiHv7HqWcaqVQcFFqRkHphzdGPpKJcxBhiXJ2TdikA9HEHv9koULx1W6fburiiWk8qPUoA",
  "key25": "3o7r5AkAiimwNspvmndoZpFpX6uWGSXpjfQkoCf41Cws9UeeDzhRfBWEWn6ERh8dfZby7G2x257aKeBCD9sCeFzM",
  "key26": "2xueQrLGG5hnwShyCYa7XNaf16xEuG47XUzCVzcjXjVCxrw8GcBzG3TUNfLsofs95WDvZxyRHisMSPxjkBrdMrtG"
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
