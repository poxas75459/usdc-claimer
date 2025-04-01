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
    "2j5Zgyx9bxyy3oQvz5uByzvrvtHesDTQHkmYc5ayYo27tuX47794SeFuww4ZUHzZJtgW5oTHP7W81LW8MX1hayZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tpHAk6v3v7S4BtMMiWrk6ynaoD13Xvuy86wPXEPBNeYxP4m1GE5bnxGKRsdQoxCdqfeiFxVMC27NScwuTxGADwC",
  "key1": "5HdTXdnGBGtvyJmZAU3sZeoBrxSEV5FRUYhwdeqiDwucaxsRzZiM9uLX3JDf9ExJ8ZaY5NqWP8yEh5pLZWY3rBpe",
  "key2": "3HC3qUKEGuBK9MFDPLeNRGE1oeG6pyYTrwzWHnvvPwdPHghspSFmcUTX2dtNPDw8oDK2WEHiG7dXPekmFAC7cfrH",
  "key3": "vADaFz2asHXAUAkFtvN7cScLjKsh3YUX31piukxKCWGutfX1aBaZs1rrD76PHPzL77sCWv1WS38jcRSQ5iE7pUF",
  "key4": "52XKz9AtipQ7mkWDLxq33vHY1GcACnFTTnMQtv1GSu2i9xUvxZcaBcjBJNgxpTR4FkitdbG9Q6Qgbh16jm67ZLpM",
  "key5": "2rmpkKxXFFT8ZtuX8LNY9TaRxWi1Nd1sXnpQM2gfyUHyQpS7X3e6WNS2eW2823ikrHHJwKpuRKbqeWbJRbhD8xJE",
  "key6": "5mDZZmsRjNZLuYA4DSNt1mo1aeK66wsoypgu1yqyGuEhnLLs1Afxrp6H8CJd7doNa4EGpbJYb563jMiuR4BosRAW",
  "key7": "Zb6G6G3Wkov3PTXv8Y6ofSqMxhQTNNvAqnQXvWJc1WJvJo8vpCfx2Rm7QQSG99BbXwAdpEwWSmgoySo2pCFAZ67",
  "key8": "4NFAs33PCMoFWbAEFLddBSrHgBLsAKcG7Q1RqNafJK64Wkr9kThR2h3aPriupvEYofdavdMA4RkbWkJVcoCE8Uot",
  "key9": "2wAxEeMon26qNFZeVD8diNJ4MNRPX3ZgGAXmoQSFKQny5VYEyUM5Zb1DG4HzXhp2cLEQQRSMTzNTB8n8MfZ5nzWu",
  "key10": "j7C1qkZVRmPrLVoBJrYQXiEv4dskSgtAaFyHyanymBvb7rimjivW2Xn6RnrbTiU6UDt6XTghXpmHFJv5XeF5BCt",
  "key11": "5UUnEzipdN6nB1cha4WKtX8KoGJimiLoPbVVjf7U62P254ak4qQSRr2TzXNcbK6k5QDCN59MMbzubsxaFBDtB8SD",
  "key12": "2newuikXdJByp8SpAL71SNTxmR6y74w9Bu5p9mq9LEjC2dZuCEQBAaKse2kpNQLvQY3t3mG8HKdS6YLob7bs7Dw4",
  "key13": "sgrWEVRofVznTexhdzJZHzxSCobVdXrSUwpjup7eJnbx8M1z6eVowqJQBJzH2ehXpoZj6FeCrByWUhb7ECz36AT",
  "key14": "ihnrn9QAQxbVj2sydP3zKmNDpB8LFyYcNHJGHRdZ3qmss1irWsGp446u9yqH8m4qAEsVdC7T6qgb2ZxcFHYn5FL",
  "key15": "5dPPd3JAT1pXJQquzJgaSQooiammo6F16aXfyxZ4d27mzSRoBZQyiRR1FkAaZ2rZeHXqiznsQmbiPGAmGMe7diAu",
  "key16": "3yKuzS4ASZRpfFvbWqKdGwHx9a1oxLAR374Dp4nHpZFk4YPRvhjPi117cYoQ1gytfuBLzygC3Vu2Ugc2b6GceDN6",
  "key17": "5414xwShKeF33bQsHb3SmeNu7xPWyLWbgp1AZkjRVeASjrS4Co5WsYPfjTXN6YJ49ttUfc6KZZGNaUqZtGWAiWVE",
  "key18": "5iMfHCZbFPr1y4rBzxn4zzBFrwRrTTS2g2vp83e9Qdi13Bfhu2AzCVypdhZ4JoHV9QewuhqQXv6QpbDXF4DGDZJR",
  "key19": "2vvD4UrWhpKW18TmgRVwZLzYHL8Rof8nidQ2exyxAuUk4nHDRowHZhx4LiZSFrqtReAD5hYXP55DP3od4gihchkD",
  "key20": "2nAtkfS5WrNBfGDXKtGt14kJGHhPX2iyyx5KqBEgWoBRtxT7FSQcJ8sEjoogSN9kNkjfzdmGCJTJ8p7UR6mFKAMe",
  "key21": "4cRTDwNZfn2oQQygFjV1dELPfFWCmGoNPHg4zW5eYY4dupGg1XAfqnZZvYgPrT8kvbUu5S6QfAzkuTcat6okHWsf",
  "key22": "2ayr1sLxPrpgdDEciBfLZekE9mhqRqwLcuqeqRgm5VcU1rovhJFA7bWxKKXf4f3CMQziwBPAtRAco6u216QNfny1",
  "key23": "GXYJ5vyc7Cu1VPQKKnQtbNB6opkcWSNHvNzaSKo6Hp5LLQ7TKHxN6KJCRj9BLyy2n84VRf43QwcQtxcgSrbCZfh",
  "key24": "462WcnPLC3cxSDXE8CsDyVgN9dF59KqCBsJSr8g8VkhDAFJqWiDhCwmWLBfQqrs56fLuhyo3SNz1XHR75idxfPq4"
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
