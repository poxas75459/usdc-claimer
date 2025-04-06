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
    "2qsLLodYEpGmWkVmAcdVoXbowfEaV3zEYrqHvnjb1MHgVkAHUJV7YMk2bCbnwBTZUpdNBFVWrLWngQ2LszQjBYtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tctU43FgXgvVZXhJ87R5JjWQx2dQnWfvt1YuTP9J1fDKbFLeKL4TTa1jbQBLodfWLwHb8mL3Yz5TCfzKMx6MJWh",
  "key1": "2fV41dftWGMBmamh4r4Xh4EC7dbs7q8FZUp8LvPtuSMLuboqxarXpEGxgwpkTGbDrfsRgbRUNP1MraeXCwHzruqH",
  "key2": "5KQ2JZeJVng2eWhhm5xQc7jxPWti8dihVBiMg1BrzgEKFTkvqLNgsVHHAfmz8vmJ3DxhqriUfJA43jmKyCWV98su",
  "key3": "fPjUn2bTGAKWh2UGnn8h8En3rB28UQv6NgpmH1uLirKe7ny6SgeSNDDqsmxcS8ezqopwDVQXB63JFWrv9dg9bh8",
  "key4": "4ogEuXhiF8rEgV3kgviCstCWLVZyJQpDxGZxz1rARn2A5RrtucU4Dze6V89TdkMk1ARyEusZdNrUqvq3WS1dkjAq",
  "key5": "3KxXujy5TXqzLE4sFYisXAz6h4uqntYiqmLTu8uqbkxCZ2UfzqLg3w4tK8GPNo4jM8bH9anPkxjvSsHc3z2ZthMh",
  "key6": "441ogSHGpGvhwBV2PE5X1nMfXmfSsj7p4PiWBmeCphM4jpmWngkSmBTHKjVSjLH6GzoC6yDZkfznRfiGiiwS6rwF",
  "key7": "3rSFH5H2BQ32VTps7kqswta22TZzFAkhUR8CLunwyc1Eqte9QaUvF9RHwnpg3qvFeSEAZR9vy4KYut5saW3Cyti9",
  "key8": "46nHcnR9NGWNVCDEgy8GtQYP31XqSPwC9rYQ2TGGRNpxwzwTSMoPcEyY24bBZhKK6hkiUPxzVww2APLKSvKJDwNy",
  "key9": "4QnapajuVy9WMZ1SMYKBYRZq6XA9T4CfffDwQ9C3iShL2f2BTs5ztd2cRL41waQXdBZLAzY6kYokKcMquTXrNFdy",
  "key10": "c7RzBrzYPdQPQjeeR3mEgSdgRL1TKWoamKb65MzsVxR4bEeCr5ChEQDfCjrVAu6yuY3pUGp8teKgf6t6uDdqLWy",
  "key11": "4BrgVLprkh7b96KEGgmZktPzB3vLwWyLGcTZMTCmrinsj7GtFetamHdhLaoEdAKeSzYmb3fdeN8xGCY9DchP23kf",
  "key12": "cU55qbbZ3UYVqoUzVhAmg2YVsUcMJ4cpHV8pTQo4ube4iPjxdq7XyjaYHu1qHYnC2MrYKXDk79RA7vyWB8TayF7",
  "key13": "5jrVjJUHsuZWkiJGohbXEo8WAKz71h7SHhxcVC9cCQRmdW2SP7TrEGEiUieX1EPVPJsQkoqd156vj7u8jQcnqdb8",
  "key14": "5ZdKfVkz2iiVdWfebLhtUAbTobLD8xrsSvozkH6a7LhkcFdKLKKRk68rxBMPipQW6Vaa68Uzj5QVPTSgMBWMKF3Q",
  "key15": "3fairCz91xCJSUgzCFPe2LZpyAbDrJkquz6tEoTCFcdGgUZAjgU5DEycfjuHxBZCJs7r9yP5CLZu2N99baqYZkPD",
  "key16": "5dmkkWQXMwQ5TVy8KkyAYjcGLsNNyagb3psAzgF1HLvxmumih3sR3KpoAAYp7dzsonLyGdBkwfwBoakBWoC3TnQ4",
  "key17": "3SbssYRecne1SAU4FV9UQsQztBbUAjV9Z2cfzwZ62EeevWG2jqLWHpfVp5wXCGpvoKCrjNFhEguMbfzcRujZV1Et",
  "key18": "2pjtwvRhu8MM3w8kSZPeymaURBwYKn2pSJG2CuuQVoHmnN1SxcFwxuhKcEDd52oECswD8xcUMwW6U2FtAC3eyLaY",
  "key19": "5AAkjENHerPKiBVWuBpRsbVtx32UfjgyEwHiHPtaysbqFW2q12qtMavmA9LAcFXbzrz8Ckg3RdAFwc4ZpqEtMuec",
  "key20": "fPAHsakvAHaRrB3QQ2awf1fonfnZME2QTVANfxgfsLGEtDwSDGNzDksFqwzMidicUoJFunwk78xwW5QAJzvr1cF",
  "key21": "4vAB1t6pYaQ6ELQnwHGebELTRueS6KWazaDNyTXgvvG3C3xtxZFaYxKp1uxKFeMkos47sYTq9SfzA6pvMQ4w3SkK",
  "key22": "3fBxDJ3UxxJpYb6PVF5JfbmximZfVeRdZC1iH55bQGiyrpvJNFpbhuEHS6TKPSoXWmsaj7xs55VYzkz4j3oS1Ujr",
  "key23": "4XUASmBrptD4n7sXsCjLxKSUKMWcsAZj9q39gnjpmnpkD6CPRkaLhhpTZtX5xUmzZEvhQwzjqcbCbv3ZrSHrjNDi",
  "key24": "cFZnUPw7FP9ev3HNKjPCGdWnroEec9K8qUmrE32NLuzm9N2YByixcLuhS3sZMiSDJDDVtN8KAH9BAve6Xa85MND",
  "key25": "3mjPQTGXxC6dkbKUDpJPuTWqUfN12v147i5N7ayFiYEt7WeVBGzEUwzizS66YxiooTcX7zmHGv5EskiACAcDThAR",
  "key26": "3JH1WQsTZzafvWB5jbXRTRKdkiHCbLabD9RLUcwjMZPcUdDeUq8NVH6bFrSXijBn5Cn7ABLA3eueeTMj5kyv1zoY",
  "key27": "UZk9dgspbnFxenmkWc8n652uBeyAUg6JbuJZN5hCAg3DtAZPoALRE1efwfR1LAx8B4c2HYJaJWzeSKGhbUK8DcV",
  "key28": "3pqEHpTqaf4ukXRRjtqZ2R3BDj3BEWNjs29eVucmmzpafzzLo3JkkJDtmQvRUw46G3gogU4aSUzegwNbvgsomLPH",
  "key29": "5LqaHjPN5swC5SSJ4er5izyEXBQWZuVjnydY6ae9VB83azAZB7ktFQPK5UXnRMEs4TJqK1rpYNCxLzSqdXURT3M4",
  "key30": "4Ei3rGdx7i5VWXJDB18tmfGDKCRxo3pCs5c1MXE8FSnhaLMJMz11rzxGTRftpbjCUrZYpveAR24WzMUMDi1RmzYG",
  "key31": "55fE4AJJDbXTFv2aenMVTG65sPMbKGrYFnh642jz4WzjLetFtFdRowo3Sccgozfo3psjGXY4sLRPvXu1CzzxwqvT"
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
