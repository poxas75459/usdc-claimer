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
    "5zo288e7UbLq9BgyZ7XQa2ovwW9Tkbxin6iSKyTHR4gTUSF7NKUBUV9wbdnHSBj3bNQMrXEFE25AKwTUf3CMww5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UWwe4fzWqD1y71xe5yYFLK144fpuZ5himtBz1KN7qpe8ereiNp7Zq9bGoVBQQSK8kqS14KtPeztFZa4efWrgodr",
  "key1": "hDXksaREKu7YTiiiNRKNd6ow9h44dC7ag2ESecZfWEbkzvC6MrzU3FBnumXm7muaCsCDxSosjUGdX19Qs3iPhDL",
  "key2": "4UcQxTExRVEjq5VomqFzjCqxU79duPfHRNRgZZQkxDUCjgme2tZyK8KLVy9eyrdua72i74SiVsYLziAxRWuhQXZY",
  "key3": "2qs5m6Xsdrn4AzRUKqSm4n7qeBywQjCkN91P48pu1xTyUC5MyXKmwLxNq4gMiRLo2wJnP3A1Dc1qCidvFwYpo2Bd",
  "key4": "2SqcyH2Lad1NVQSA9DFJ2LjBSRupT7rZeoYuzb1ehRAPXtCMQrkUdT2pi88aTzmXadb3Z46GtWbr5s4yXbxEeevd",
  "key5": "4BMTiSXQ9WZxJFTZg55fuyi1QJQDv33HhBcurxqBp7MfCihk1hsA3jQ7oh7xVTTZiceCSP6i4JhKNGHXnAe4dVHH",
  "key6": "4Hw5WjteJDTxMgfdGoyEn2MwwX6g6dRgUohhkVgchW5GyxxR1a5aKxQVDW3wnCQctF3sUnYtcvxG8wj3k3rGqvUR",
  "key7": "CC2ayCJZzFmBqtSQ8NBS5BuEfhwAMHtYN2ynuJ7qqh9ynTjbrampfhDUXkSazGTJHgKJjET5YsUnxEXgCREaniX",
  "key8": "2xMZtGt6hcBb8N9BhrJZeYeKhBQaM1J9Rxf3uizFdhEq699wzBnq8aVYKYDazSoE3xbZBXHmwZdkRiCArGuswbs3",
  "key9": "2VMsrJD5oy8KRJ139W2w6V2dn57HkL1NqXdefQfGqZgCTWPFZgYn9M6yEspR7kY6oruHFvQov82bU49oEVyr7E6R",
  "key10": "p4Z8hYgbSQYqCwLKRPUhHJU1SjYJQNQwS2yUwf1JWeMmm4tEEVUhKFubBT41s2Mw4t9ed9doxQB433cAzfJVdTy",
  "key11": "3t9EnsN6mupU9vDqk3S8TQEfyCFYnGw3k8imeKwK1fP4u7FiF92ZUgnnp8QT3k9DEiz2U2LXvfnaCSnyn9f2YW2D",
  "key12": "5aBWMRv6EZhGBYbbkT4rVktzDP4tc5vn9tGvcAsopqwLgryuzyYqSxYZ7iykGpZ5F85cQS3dhiPbzEUXwAWBxYmh",
  "key13": "4VUNroUmHArykAFKFGUXepT6Jb5bS3fNjkjxCRLM1E1ED2LZ1PojdGd4ADAZ2LXibsS8BMLm8EKvHpSJQjVwH7oA",
  "key14": "3yUpQndfs6kNkaXWqAQtiTAvYHPKyLKhokLyRq1RiH1iUdSJyjqFsW9DRqX2twkCW8tDDoGXs5oMer1cxHedusL8",
  "key15": "5WZ2csTkFTwc7iDmaGhwc2mWaNCCbY2yvpV62JG4N9cWnkGh1E8HWbNyxbt8DXYDuoo3Ua2AQNCmszMwZXSDoX2A",
  "key16": "4a1TvCAuXEq3Lm19z6tcm97xW9Gb8qBX8zmsUE9M1462dhccVZcpK8jQmVRuCUMVEBrnWPoyYjFBvBisQNzXmRi7",
  "key17": "8mWdhGHoYT1AqrPXkqbzoVC7PUsamoxJU2hzpH747E32ZV3Yz7XK5gb8spXBd26EFvQf7ZFW1naYUmzw8AbGHQn",
  "key18": "4Z483kxeVQDZ1WWUnGL1URWMdva6qQEQj85K7qV87FvndHsn5EEucB3cAbv9T4j1JMCQi37m95tiFZQRRbbP8dzp",
  "key19": "31yq8ngmuAgi1twB6LAEH856c1Shvmhod5hH2akqYeud48MXn57xE76oUo6D2P3pMwNMLv22z91rpNCQxY4tyYHR",
  "key20": "45YL3eZbf7cXVk5KtA7woZYKnCUnKMxy2CaRVMiVyPQJViZpiZDEQNAM5S8A9i18dxaUaSWpw9Z6sD5FCQEBkZq",
  "key21": "27saVnKywokRdVPCWusEEn9mdEKf7iEzg6z6nSMezuY3HFvFsGKZSCCb3ywN6VCkxgKkKtqzRmbeUbDxXKjoDsiZ",
  "key22": "58oSaBNE59kKm9uYV5QhQY4ZExvCQXDDm4m9VhrCsgyNedKa6gQ8vh2jzFrT5sQVcx4F99438FyNCoYgywfXKb42",
  "key23": "2L5LuUywqRRDJ5EFTDVZFpGWarAkGGNkcNckaooyaPuBuN5s9whY4HdFLJy9BpDPpn5TTx1aLbDX3srvup4VhsL7",
  "key24": "3yMjbYNhtZ3wABHW83jNBUqqi9FkYN7ASs6Kojex1SfXGV3oXqXtYEFv4Dzu5FbRMkKo9VGXjzZ2oijtCSwZ62dE",
  "key25": "4GfggVZNCBMGLrHW1nQRMbPcRMCYKzsy1vRntwjuiULarpbaUpac49RDXz3Qa6MgdYbUH28v9pYMYbnzyDyFmPfb",
  "key26": "5SAmMZoGLsgkk3L9hcgymQhEDUyLg1euo3Ch51f6vfWSfGGASPhcDARLK4NFGjcbiXDUT1SEuEdfrmLK6w8XhCBR",
  "key27": "DpJrMwuEp2T7JjbyFfYVYZdZPN5HbGzyFbkt9iHrdb4q6r3dKCbJ7V1RSNkH2WXxQP9Js3fs8a5V8BAYSgmd1yj"
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
