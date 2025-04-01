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
    "4rQ9XyZFUhCSJi9qsRHVKxJ2xdWA4x1mMEmJ1TqEajQQ4HcVehuAda2nFVBZnLirrvE1hg6DRPseYs683odVKpsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x1Cq9H3pPwiYazvSykPrLRFPQ3v4yZtZ9dUqwVqyPX7iVf5dWMmpanyuNmvWXNXkNdsZyJf95CnGrK2XRhZzCrf",
  "key1": "Zz29nH256QZCJPrXKs3uc9tKbRGB1DihiusCR9RsHeukQNYZkpn92DsYRDnYAf8wbzm9BubWsfh5REapxTGnfer",
  "key2": "4TvZCa1Su9pqPsY89VoQDH3DoZDxQ3a85vRCdLGYqpi91xB1y1Z5K76LR6nAGhWHfw3UQ8MmBnn8P8ecpHWJ4Tkr",
  "key3": "4BLT3ow7aDrDxKYBLianENCtFVNerC8peRXNc1MGbmDKfknu4oPTEB4eLhhDVFaVV19ZyQxzWjrT6zADqcLX45z9",
  "key4": "G6cSFm4bAzqNfKWeN6x5QqsKESK29KP5gnMb6u84BgphQAVgWeQQzedPWRZczwsDXKSM9SbTcknuaXN9ned2YJW",
  "key5": "2qiRtrwHHoJpeoMQg76ZRhHFko9d9NVLcnhu76pds26K3yzm2be2cxajrHBS1wWjmE3cyESBM5ntx3S7dNwxQomP",
  "key6": "V9VkwfaachAC9tPPRASq38risMPJwfhiDJ6NG54o22at4simauQEgNdCWPivjHb8XfvYvf3JtPuwjN2vhbmziRp",
  "key7": "2iC7iMZQQYSPha7mjtrvm8Ubc4wquFQpBxCAWA7RKhZ2wSosm9hqJWzHPLK4Q4RmRUbvpXazSqbRKajXzc7ycX2Z",
  "key8": "2PCgY6gU1gBpiJsdyXhagPHrLzRmPLNZ2xs52DQ6CET9HdMrfxc4gojy6hdy1gSfY7px69NetvoEdmruXka4kGVf",
  "key9": "2FBPN9NUYPTJKDugCUFVbpua1guf4UdU7efCrsRSDzYNBdDi9BQtwz5DZPhY9QGmva4fQrdfF56ZQAELofXkTyiv",
  "key10": "2U17RZPmtxW9eYmAzMYNNnecJTZKfTa3RAtskeWH8Xe3WPrX7HC5XQvYWQZGJSwPWEun2viygE6WNdE8fmQUYT31",
  "key11": "5MYVZrgua9zdFap5TBD15gRE3MHaDp7TdqRnkL2WoK54sWoFCxLqhwDm6RWr7ZEQu8CMUDEpWvcJF9PzcmVuEJRg",
  "key12": "5CSkb5WmSeCaWxPAX4qhpa2JRixcq1o8TfRVw5df7KK28cxAKtqQ8rxM6BaBL9Z4Nip4ZW4TNDwSfPu71AbCt99k",
  "key13": "3yfkEgPgU6VVMzm1omePCUmXvze2MjwcDsp9CrPqs1ZWob96YxQaqziE6pFTwwHVKgVjMjXPWxhh3WxPswT6maNm",
  "key14": "5oe9qdqR25A7eRYHTs6hNWACUzQmgtBZazyGSF8G4RpMTn9wmHU9c5cWDeomsZ8k3hz4xb5YMAvQsSdXdWRNinj3",
  "key15": "51yiYAdf2XMFDBAiEivrUML6uqzyQQaiJrRbqx2LP9GtRR2ZVaAJ6tYhvZUZtRtz9FDoxjFAWnqn4UNW5xPEbHwG",
  "key16": "4PUHX2gSxn3eiuS6WJGAASH8KV1CXpm54Pzc72eH2JhXce7UV8gAZ7URPmLdwnjEo5Q8fKPnHz22QFrwu9x19RFp",
  "key17": "5M8pqKXP3GqG46W6qB6NDWfzxiSsDxk8yxpqWv2ErfMGx9hDHbSvKojpu8A1QhF7HdZiHjDAmyLh15Yi5BgLpMHK",
  "key18": "5cwXCK3ToAAi53MzcF4ny61EGPPYS2oExbG2iWdn3U8iSsQjUxxJyHvzUCtWYJFeLziwfbrvMn9iGAzDZNbU9G2c",
  "key19": "4LfjxEEWmHStBtaUTGSkYH2CaFMmQxSqMdpQU2vDt3efUY3Stc5HGEXXCqgzD7rbh2xEeVPpZFhCXeg3odqXvzRL",
  "key20": "5N1P8zAzZ3nJphAh5CQNW1qkzGNGoxmjJeTRzJX9Hs7wFV16YEyCTw3ZvfR2t2gVqXp9LcNxEh3BSebJuZSkRDh8",
  "key21": "471nWmPAPtEBeGhiXXp8RYZG2oxedyrSgQAa92wNt4WcDnQrzcAF8gboQTEaKVpSUFbTrgCU9wHUTFo1gM1AmPaA",
  "key22": "HvBF7JnoQztx2XTsYk7fiQuN86vyNg9fUiR8H38G9pu289mbyLzhnGmKHJK5t4H4Y1R42aPGAkPNPbVF35p8vCU",
  "key23": "4dGs3CmeTx8cGF3sfRHtSrETZdzE2ozP2X8xsn4kioQQcEzYCLeg36YQ7dAAHy1MYgFBKwpaNvzzdxQ7dq7rnp93",
  "key24": "5csJ7gQUmaCvPAPzvo5pGWJck6PfgDymqJ6FTHydx8NG5w1WhBcMKopKTFj9Jmjpm4d7QuVZpqUeqpkjVWgXnYmn"
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
