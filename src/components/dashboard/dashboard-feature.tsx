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
    "4vfT7yo7ipzdfZEAvEqrZN3F6VHstYbMfe8DyCurhbuWLUkPPAd2TUDxRz4Hw8ua8RUwFZYYZbnPVjaR91PHkJa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gkZYJWSnzDZGHBYUGCAgiXRgjSEjGxcCc2137a9AXwWZWJwvw1Fu6arSoYUEtRfA57cN2D3sU95hiRAykKUibFT",
  "key1": "5Cmed3Dc41NEEqvXYyst8USEY7Y4LWHRWSzgV6XVAuZxd9urJayFQvAKDpwn7jWdFh887Re9i4kbUDGuS1nrGgdF",
  "key2": "5fRyTfYsjwWMRPHFiRvV5HpGcVLfBTkPecahCNHX6AJKpjbP961cV8qqn88oS6eRyVUJW3ZLFxcxX25NWgFxLnAG",
  "key3": "2dTsPopfHveH3FRi4vbEqbQV2W7ExXmt8aeFd6fYWewAUzqZtvkFjMotUq1kBbHdW3jY6RFuUKpM56Yqaawvn7kG",
  "key4": "4UsZARZax5ibx2ZxhRB4yPNjPXhXGmCMwyKsBFfaACQuUKYEjcMuJVqyMMNKe7Tqx8hyDsuX7BWZubJNyiP4T2UN",
  "key5": "2k9bssEPaBqaBy5ckCrFyprEwBJ1aGg9PZQYF58PPjJPJG2d2vM2ktNaKpYkYaubUz9N8dXgfJejXTuG8zpkB45N",
  "key6": "5vxahbkwdNiQKp3BJPtW95kfwMxXEPB4DJHwLcgRdSmCivqiwvwa2rXdJnbHRxNdKW1nT5bRvbvjooHykqLc4aTh",
  "key7": "UT6RjXCNH9xWMB6rHuDe6zUT9ct8BkZtPy44nkbpUvqU7oatBUrqfTfEk6Q1ZZe6waAhryNVMpA78FUGRtchJeB",
  "key8": "2gcMfamEc8WfBQG4EytjQZpRNyQWYVkLMbQTZ4PjmDyHSY6VmjfRB5bm5naqDBcxcAXVinBWwM7AMCEs8gzkryvi",
  "key9": "3x8P59oHDJLogBL8Rj9P5uWydUL2eWB17n3hR9iYQBXotrubi6Xiguwwa91nvZyBKNkPDtE6XnqSEzcn8i3DAbFA",
  "key10": "4KJzmFrFrJGYez4ge1v6rnjKqpAkvwgpAWL48S8rR6LPSrd5h7m7VYeQQd2WLAJP22o1UvVT6HSLyYywzuWWvthB",
  "key11": "42A4MJgb4gct3W67T4gktr3PBRDvAhSMvVzGktiq22tQ8NQFq88EkXAS7mAbKSLhxaoGvVwsgaKAGmFw1S9uYHoL",
  "key12": "5bCLC9J1mgTmZyWrK3kZyqNZYrogWC6xbVhy1R9Y3FgPqeksumZutZmd3HWcpX4gcTgecpko7PrDbuikJvQXpYgN",
  "key13": "4cTGhWAemFbicYS4tDcFZhwyXFGFqsXkd5QhV3PQtzG1CSGbCXgDEf8hey58rSybpqejLgdS6Gg6s2brs4QTNbb3",
  "key14": "vuk3NZJ1cGBRfZLZcH6DNFDM3snsPLDx7pYLvctT4FZ5hX5refLX12fodyByE7ABcu4pdtV9x94M4d1ctcEAw5x",
  "key15": "bSPJnUZbKVJRSufp6RPrqkSkc9svFjhysbxZZdbnTNbgJ2i68JYT6mNaVLyEQcY6cM6v6zxECdYQYXr35bENa4Z",
  "key16": "3tpxh9tE2BxJCtKjzaCb7kDZnKGmAxvh5sWnAYUsPnnXf5HUKocyqmnrgEZ4jGMfveHdcTJZPMfgmmzkHbFnWY5F",
  "key17": "61dj6vTAHgD18jNYjKzMubhsRYBxcFVWfpPeJ69uSeCR3fWvUVGdVxvDFSos52XUpjJG4EEXVwBAehambH13M67d",
  "key18": "3EJMnSRDn9KfkZxdkaF8inKqtH9h1FbqZUQKaWfvpvZM12DAAS9SAophsKr2BXCRkP5fJrQ45WnfgzhLSSvk5AP8",
  "key19": "351QKdz6Q1vVCwDt15GydJCdPTn6zWBWwpwn83yeEzpkjAmmNYYAZ1XXnG2uB2WNvgyUz2F8wi7hSXDUkpyEdzSK",
  "key20": "5Q5rgUQRXGuj3NBkffEc4v3tefDxbT2KoyQoQ6Rxd2AQBEfCe4DZF1MJCpLWy8sUAczqhFM2PU5FPoVCwczApvZ6",
  "key21": "2BnMLWboYiLcTfkqG4mo1KkFeJDi8Yey372gfz9X3bZMbDVf3mUPBSj6WLzy3WgnNjNamaeS5wynL9ARGpWGCZ44",
  "key22": "4drhRpjeeyxZCozPhWnge7iTbHnJxxXhGQ3syT78vqeZwQyzbC3XsLmhiX9QDZQGviVsEaTq2KKHVuj8UVtv1TDu",
  "key23": "5Ko5iDTiZoSxzgV4cW28WnMo1W1cSDfUXsj1LBswcF5vh2ntKDvDTkJpWrApLpvnLcj3dE9poRrQX9g22G9iwDhc",
  "key24": "93Xr5ev9RjtGZrUzoJ1rwGSXJL7iKUP3yfoFom65odCQSesnomkdGaFHCyPMge5b8KbbENcsKHSGe7ToXYWwK1H",
  "key25": "36Ua4WKpSgauwnTXJwdCZEmUmtGLVRgVv2g8mRNeeP1xKfd3qg5T719Xujf1ALpHgNGLddVQbtvGbqdn3Nfy8pdA"
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
