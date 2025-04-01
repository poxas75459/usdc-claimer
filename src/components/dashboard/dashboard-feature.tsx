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
    "MjGqUFGWzUnjyGKyLbPJAjVHJX64sg6hJN4mP2w59VJ1EG9fZ4PvieyX49vhuUU7N5DGQ9Z2FdvJxKJgdGufHET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SoMSfXMym2vS3z1nmKmue3hpc6z3FezprVSLkGRtAywFUggp1TLmfgryi3oEL9w1UVGPHyxLMgXAbUzh469mRPk",
  "key1": "5XrK8H3SLr3RDA4V99XnRvuDNKwCutaSBPqhhUDfLEGjsQ9DTNnaAvc4LqxvQAkfJgZCDhAre14oSh1kTWA3nBy5",
  "key2": "44DTUPSePzLf6UxVWiMVshLWKjzXFxFs5cbtbxXx99xq3xYSgMnjXuoSu1gfu4hwpctAvMAymkfHdTxf6TxooB6d",
  "key3": "22pkZpuTWDk6MTaPT6nBxx5gczdveeAfqiXagW4Ho5A91JiGdkKA8pxp2C4qgkm2YiGBBHRYDg2FD4qnS6jyAatT",
  "key4": "3MQrkk7BaX378j1hRLTsEtQxXJZAPDJuz9wHpTJFi6WRBmoMoccZ13wS1QxpwVghXkSyCcYNZQVLM39kbt7CavFk",
  "key5": "8ATyXbBbNPUaEKnF1grH4Ax6Zeo3M4QVz5ZG24dMnYE7m23VaSFR5azzBDgT4gcGXD5QcEiPRokG9gtqxsaK99m",
  "key6": "5i6ay5q2FyrJyhVGPoHw9Lcz6JEBrSZwy9b1ZoYYas2SHvZfLjq8ymfKHCbjZAgrrYwcyfP9aBktZrVuZPAHxt19",
  "key7": "4nZCmQ78wkgmLAq349J7VbG5nwBY1BC8dsyydym3eFv4kyUeD1U1wN63yXcSgAe8yfxgj6FgkMwrgau43THswyfX",
  "key8": "3UdF9pjcxe7nr3DusB27n5nkVBX5oQGryMmLZJshnPGCwNjX2D74Un2YNEUCsWLtPPqZcvUogWWcg5vMhrTnuiXx",
  "key9": "66YnHjq2bXBfHZpcBadappBCQJpBzw2coinMsy3b75ksjSWy3ukZ4YSTujzdg4i9kjzUTAxuqyMQwBpJ3TM3aVgb",
  "key10": "XCdLJKQVQhf7z26w3j97rwPj4KMhmb6Ciiq99EPTrHs3y5zuT8GbnXHMqp33mv9857JDAZXTKwrTnU8Hmxs55CW",
  "key11": "5QSg96WqV94XvkJdkB3u3uZe3ByexPknW4vusXTv5qZbPLizbns2yBQQsTDteyauyjdTr234tgUivzhPvywZPdPG",
  "key12": "2coktX2e3Y7kH28pCTmDGFv2E5pNpbuwD4R15WXxEycrc2D2FJQFSu7aDsfgutHqSt88AutTwhRgPrCJBmMNawj2",
  "key13": "3xcYUwiatzSg16VQ3yfcsxU9mM85t3NbnJtDGJzQPqLUQD8f89sZTc9aJBjs8goBH3kAGSKyQmFWj7LmTBKqB2jr",
  "key14": "4iae1qt14SJm79CSdEEcdHnUDr7Ehpqwedu2XgbzUqiEjxBHV99XC448YLd888ry2TZ7iK6hSybK6kvtWbzHjj2s",
  "key15": "5FsPwEVm1XBhXTqsoKF4N41HqdJGpW1uWoHXcK98nurfUpd1p3YWsSCqiEAcza1832jCYmk8VNnU8F5EKNpN3kFR",
  "key16": "5xXgyMhwJiF2QHGLrZY5idAeXCm8eSf9SeM68xds2RCYX5oeVhu1jtydFyq5Qj6gofZnZPBZrCWGZN8TytPjBvMG",
  "key17": "3uHEGF5KKEXfAszyBboE1yHAsPvGB5Wzam2H5Bx93owXgB55tYNBZ7qcs3wEwN6ZFETMknEjsadbRK3CtV8KHBAg",
  "key18": "42bgcrkA1crY87eUTPTYB4WLJgJ8fMM1wZK2vh7Uo61YWBFSv7GoPi2fGi4ibqZ9JCMzBZgbwDRWdqZqLcs4zT73",
  "key19": "qAPcDiCEsj1JZNEpa7V9wir8TTNZwcyLZjKhMy6paVYiqGQPPE21zUJNoTimjtit772HpaKdNJnpLC2zu1GsDFa",
  "key20": "eDCvXxf8yRGEfRKnV3RtM1iduzQAPu46TQGc5iQFntvkh9oASuYQrRhLkZK7B4GUT5iWG64rZx7og2pWuwxm4Tr",
  "key21": "4ZvuDPSWBwFXxLMuLx6rgadkSDiZxMUAZqkrGtx3Bnkty5LLGMKnpZwmXikytH5RLGRzf6b6jAMAMPvcGTbn6W8d",
  "key22": "4WhKrTRg6mmHzDhzNFxG67k9WjZk2wVNTGPJUMzo7d9WjnsKbK83zoC1kBAdqitCvKQbZkRza3Dfgf6dAFJdCPD1",
  "key23": "2Gb6gE4a3imo9o5odtFu1Qa6fqFuayy9iRi8cUZiw3Dwnwy3eBLX2ooNnL48AYzopAnXDFNAVheJUixKfXFB5ZNG",
  "key24": "3ezM36WMPHbw5PR92ybFqnAQmfATvX67ekQrwSseMTEo2pHLNf431ja1Xb7cVN5rNhvedeTSgdtmLoNdhGeX3p8N",
  "key25": "5oijc2nzsEbYTahHv9aM61rFhii5YTuV71H9bZGLZLgdqx3duzpEbjWtPQqVzJkGwBvL6ANJEuhee1ZAEiPX4Zg8"
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
