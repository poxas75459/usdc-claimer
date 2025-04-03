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
    "2AMR1km9uEXaQcGxK3SodYNBq5ZacusvXoDjYqoNt5iTdCtBrcr7AdkxAzQPDpd66p7MKAELprz5VJj32r7R4gUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48i2JTKZqpQP4Ez59xbvvsdA1PQQPGHn5tt4k5W4rFVxjen1BYfi13qaTpASSXt7n5oLkFr3wR96EJ5FjjvXAee",
  "key1": "5YDzCdtYqBYnQj9uhfkUsC3g8joEHcjWMX1Dtr57EF6G4KuTeKgNViyPAW1cskx4FL2J7SJVWbswZgeMYSP8n5Qu",
  "key2": "2PDkTGfPV6NQpNzbmYzWnajNz6Y5hCVyU4SL1Yz84ygWYJsrifMSQGmnJWqQ2qBYyqES8Nqo6GhAMHbUhhfriM8",
  "key3": "5apo3FUicEiSEzb2eid6F2NQCfKjXMquWaMdoknfER5wjvbNSnNDo4e97kT7VgTj7w4sZmRJRxcsHrk35BB8DKbW",
  "key4": "58yBf8Dy9wh3P6hvc74xqxwXjNPRnwybc2F8KQcbgb8VHsHT8c3BvdGerRjtJTNV2mynbTMKSCxugihfKwWffWCC",
  "key5": "4a8nzhPjai8KaC4tGYLoxezryMThVSAnT4KsunHQ489GdofwgrmRooRQhBLaSXkV84W7ieTePJaPR113jeUjEQ54",
  "key6": "55aWvYa7KXwA2zX1qU7JnzRP1jTziLXNzGUo6Bk76t8LToqa3t2AE4kPd2V5ZS338QKeLBw4hQTXY26fPo9zjBKG",
  "key7": "XDVcXr2uoxk5FShCpq2CTjUBbhrXpmcW6S9rD1qEJQ8rj168ePXBCecKJ7D5yngsSGokFWzNDox2rXDMRtVqJAe",
  "key8": "2W92YZxN6oTs3Lu1ipjYrstxjt4uHrTJ9c9eew4GS6Rmwvk6FsntY2humMQzALXyuJc1BdrBhZUCFexDKRMKos1S",
  "key9": "5foZgMLyVwhLLZHRJeRN2BKUWuDXPMzroAStpMYBKDRu2u3826CxXqyX5VZi8EDoUuG4zMKMCDRWbQcMYMre9eFN",
  "key10": "KFw65oCACEcvPFzgB1QMz6ssZuoYnuCecZsoo1PVg8vg1tBSNBkJkNPM8LsWfbL7DhUHRE8W7M6tzDfbwkHP2vU",
  "key11": "22orcmEm8sWXjx9BWA5oxnJyNfc2NYfTVioTHxUqgAUB2c9vNLqXkHTdHGP9WXkBcKuYb2SdXJNjtidWj2tFuiH7",
  "key12": "3kDQdY3pi95Zwai3o2qToimLxWEmLcr48YQra3GkVFQX3FffwGSUUf3uDWBHaipqjmKRRKBDyNm7FbSEnBu1aRrD",
  "key13": "2tZ6FeMARimVbcDFoqPf3NipLL7YeyrdZRYjmmKjB178cj36Wn3mfLHYsERPBFuTH6sNC9EdKLGhTUxGVAjjq8Hz",
  "key14": "3Hn5Gf9xMAALPGDTTu65wUijuQztFdneMbr5HZWmJZJtfTYse4c9Uo4duTtyJ13JdhPniJpHAx6cAxq8xtiSoVDg",
  "key15": "3sYrj65HPRDH6mHCTYGzpedQB5mCGRXVa6TzxoaWTSw2xS11s79mibW7aF16XStymxGJaJcjT63b5NaSuq8ukCMo",
  "key16": "3BSxpQNb1CxhZcrnB42cS8KPmgn6y9wGXi6UTg9Ms3cXY6UhfbkWDHYr7yddtLNdzXHEdKackWGrmuLJn6c4nd5w",
  "key17": "pxyQmsgVPHbzd4L1SSpx9WEnjnFxPPt5asbiXv7viJy3RPgJ5Caans9zDfG39KMmX5PmTsnjBdJJVw2vME3JmY1",
  "key18": "4aUgCbCc27BaLxAJ56qSZFdyDLtYZz1EWJa7dWs7vrmwnFgp7451aWfaoYwKa1oMwKG8X2yzatFSuzGkzBJGwaYr",
  "key19": "62ZZPfgaP4B5PPdJn9UrzznmWRZfNsxQqE2MGwfxDhMg85E3LtSbsryGfGGLZEDMoGgUwrUfe26nLzzXDAqd1nx",
  "key20": "5ciuUSNd6yL7KCX3hUYUK6UEPNAgfq3i7FC33Hz9oPCKFKuhmKKDCYh4wsvR7memoLzagYLFErNN44LUYVWWJHKG",
  "key21": "5JxsfsEp7cVCNthm2stPwJE3WwqkPfsvSZ5XwEdDJCrDkPg7XuiaeT4RPrXTWNXhjniH7TjTJmhmMToUQuScpXir",
  "key22": "XPkaj4R3vu6hGMNgFQ8VjMDhtQs3Grc9NupoXJYWUFh1ARRmPfvvP93kvAc2b4qFUq9bypbwgs6bxbzWWQ5FChc",
  "key23": "38kUYAW7bo4FbeihmQaMspgiyXzGDZnwwzd2nXRRzb3TvE4tjDa1W94zzX77fzcoB17hPjsLAioqG3f1iJ6gVbvu",
  "key24": "mhPEr7QUPWNzBvpA1ERSMGmZ1u9AwdS8mrRThq4PFj2xaXiKtsMa5MFeFgwCNwhfH6Dx4jsyq7VdT3CfETaLgEX",
  "key25": "5ofrKGntDJu9G7XGdv6969yrs8gXvJS8iXh3yPiL93YyMpupuMqPUWkqnmD2fSVpouhUhG4ZzTkXiXe5K6hjS7eV",
  "key26": "4TqRR1W9tarKa8oRbguLWBMueruVZeCddhYhMXpQAszXks3Szb2DD7vmpEuJgdYC8ZGsZmirt34sPuj4KTd6MH6f",
  "key27": "5ZCeRPFFTiGMrW7ZfqTC3opwcWEgf3qQce44i7hJP2GTHGt7Mi19cgmkhKAQnB1PKhsRLwFun5aduAxuqBjnABKU",
  "key28": "2fS7Sr85UP6mmEiKWVsNT25ZFKHQjGr2XkUokF3urNTWYCNR11ukYNwLhrbntqGj2EHQvv8amwJcmdLgKJuo1Ny8",
  "key29": "2SBqSEAMGtfCmfpzDUtFDiUeXN6rkgPQD48mRJkttQxMoYsfD6EBNTo11NDgFD4iF8RKwZ7GU8dV5iV6wGP9T6jK"
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
