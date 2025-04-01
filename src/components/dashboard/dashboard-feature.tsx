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
    "3cEJysi8Gxw6CNVhTyDaY1gvX8pNz4pJikqjfchjxiBDrLoc6mkDp28E5d5w4sgUiXZcwfezh3gQN75uFxhffB1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aHNXcudYzYuFjbziZyDhEZ6gfhBLh3PRphAjfLQ2cEfcUfHfXnxzeGVoXRURgdrxgnWUBqsC5KEzTfd6s4UcEu3",
  "key1": "4buPXmNzgxEQyt8J3r86qJbKsRvbb5M5k7c7ZBGKj8HTBX3WT22CMv8HLRV8N1DuxymGeVK8XbT3UpiAEv68G9up",
  "key2": "2EwrYGghmHQHgmBjNpD7dBB5PZKKHWNA2ay9Aqz2yrevgZhHWxgq5KwYbhLDFdNukcbcY88tQWjx6QxgJMcbH53k",
  "key3": "5vJaokXpC2EWNLsoJgLdbo2T4zKxn7j286FF33Cq515xRdAGxrMPr9xB96LfKNUd8RciC9Yx66ENDfBnmqmtA7hQ",
  "key4": "4ZGcoPG36RrMK9ta2s2YZdkpa9diRzhSg7asBCLJn8rQWu2JUaYRd7qTREB2uwXZJHQLbVGRaEfUX1jabfnYYqck",
  "key5": "fHUa5sVCoCBQzsAf3AiUNwYSKs6gX3FEJcoTf9rT1pbWwLHUw7DkNVzhbxZPMYd4c9jjyzehifva8NvPtYc8tnr",
  "key6": "2Zen7P1xX8kTYjoLCKV5BwMXxec2izvFvgBXrUwjSxcrbVcYioAeossHzMLjqGoZX1YXtyTk531s6Lo6qXkL5Hbx",
  "key7": "2LEB91szrwAFRYs1Jzm6142i7mk3Y5hRsv7QKBhoJTPCGVhbbo6PNV3zsepdhBj5AdiL4YQY2X3CuPxBqjjEahqo",
  "key8": "3jiaJ45tKzHtSnR9oFw5mPxbY51ZuFFh7LJGJyFf9KNdMmue4KXUPrxNTbU47h9duZABX66FpL2PaF9cPxxPwriW",
  "key9": "3EDZ9sA1nVC7DE7hGSFANm5HNAzM9JSZizNHpbJ8fQbrTdtL9HdEu2WWknU9pPS2L16dkgEwtAvvB7dEE91A718Z",
  "key10": "3RELAZ5TMwPPe7EwJFWgmVvqvDjREf6AXbsRr6rDscAbZGydL7ntbWiLeuXTr9aueirnrabrzrdn1Jt22ZtvmJoa",
  "key11": "5oe6brjvHSHMsgxfw4PnfcYEfgvFXwJgqeqC4P3GxEjgPSiFGLuNQJFFDdSUBJjZQZPGahVocepUtbZWFTsbkYcw",
  "key12": "5te33pzWwzepVQmoVaMZpQ9DQDz4gHvDBSv9Rnw7n2Eu6q46FxCGqXVUyRE5Ek1LHrYXaZuq9WwxRRq53dppxTtm",
  "key13": "4sKVVjb1mH7k1j4VD29udo7i4vrTZ9qq7bd8iNGEfxAWLacpSbzMgiMzPArWjthapP4X64r3iqamdfHKrz6zhVXN",
  "key14": "5NBBnA2mwRCne5oPMgGcuwKxjWnCTDiHBWiCdZt6nHxd1PoWisVQ9PdYcWWDc9jMcFZy67QVDECWkbvz2KzmE2cK",
  "key15": "1dSEkQecefLtFt6FtoQeRMeCF3DXb5SgkAGdCSgX6ENfxaqP9SQJKURyT3D1FBMSQJpkw9P26VvuyJzCzryf3mn",
  "key16": "5g6w8S55M4TAcFjURxmMvX25vWggbjx8o3SGehviv7Zgmqkuysjf1zNGDvo6JKyMSrVLWB3cCgNb22h1DQRo7pF7",
  "key17": "4jTAyLmkmsxMLw9TvpgFjzjEN5vYXv42318JvKghrzNnToRjC45JRnKdiezXj8bgBXKd5MdKBsQxcBkCcqd4c8YE",
  "key18": "57yajzoJH8bpeShLgJVv4vQMvvzKUn4gSnFHWBBN4JaSAC3JjHsWHFfiKFT6sdXcRtFkv2D2FfgZXi87HzrX5Gs2",
  "key19": "3zeRUdAF97ZqerKTj6snGQwHmooQnbHbfwtb4NaW43GESKbgFPGLkCupKN63bEbXoBNRMFoqsAniQoAEXRqrBJK5",
  "key20": "4PptE614ekQGXQ6Y5PjSNaFBBsDZt1TBZYuQvQRrygbpg9dqJ9s66nKo3CDhYaihjjMBZAdJcHQyXPMWZJnqJpjt",
  "key21": "2v1J62NxfiiUS6QAU11zXQR6Ejq8N7fdBWk18sQS1k5NXKU2vVFS8M63mfmrs1PkmgosxjHxGwPyYnxTw7kT6qGw",
  "key22": "3Z3aoQSEPh9vPYSudpJV6keYfiu445YcXqDB4qMEEajn1fAPHE5NjaiAGWhQxfeuKUvuSroadLDNLeBgfdgBjYJM",
  "key23": "2aAR3bGpKRkrbvAwmGbgNAo9NC1rNzrzikaNTYFFZ6RWJfnRrZWcYywTX6924PXQWcL3ca8ZdW2JuFEebAPco1Kw",
  "key24": "32WKhaMXWY2eGn6refWDA164fNmVCfAkYxicEiWhRxuprJM9QU115qjYCbHGSP6sdUiLrfWsJTjQzbpWqdE13Xo8",
  "key25": "33KSa6digLcB6q6U6bUjPrptLRvLeeMnsAHVpmNxppCJKPB4K7FVreWpng3HuRkc33CywUDMniN6defSqNhikP6U",
  "key26": "2whZiQMcGVpL5KiTZxfxfWAJqsjFhhPLNivgu4VEQVJtaB1wXNcNoqULX4SJuys3EA65DDrCqqTFjetMM84z38fs"
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
