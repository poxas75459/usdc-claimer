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
    "FmALHQbyb1yjPunx3eMvZ4YUuzST5QyYVEfz5vDdVXstFzZJB5BvmjaUj9jnWH7YTUeVgmbk316Q6AP3FLg7SjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jweow94iamp7i2KF3RK2zV6s7M2ocDCmf18Wo7hECVGAudw8uLSSF4vM2f9h8uxJnzE3K38Z2uQ8XzTNABXDm2o",
  "key1": "2dQzxma4WvsiyvhFLSyzv4UJkMSgp4pPKXAgEAtmT8MoPDEeLxiL5CE8FvpHXK2De4vWpjdhKCaWBdn2WhqZSu1e",
  "key2": "4aTWGg4pheMcsHm9bLEZ3LR1Tugunv48NJiNhFYnHhzBEe1KQfW6TS6uTHawovUwup3c6xEZh68RD7Nqf7grMsWi",
  "key3": "2MnskKUfTwTCru6CG84KbxiCy5YfWZQGzBrXydyfpponWwsZ3kNcCAgGH5BMUt3ttHC6fh7BK5NmYsn3qm45k24L",
  "key4": "BNsmnKxkZ5GZVeTFPfdVdfP1h6g2aRP6jAGmykyN1ShC9S6Raw41x87ZShDEdTdP2VfFK1ZuvH7y7H7jxX8H9LC",
  "key5": "5rWxp4pxjKXejWs72p91gnKREoL9FPDDcUdTVDb1oKWGofjowSzhvz5uV9Hvuj5YhwERoeyt1ha2UN5vchJLJ2Nf",
  "key6": "y6DN55oN2W3boYMbTZfdons6QbJgQAqSmh1gXdJef16cJzsbccdmAnfb5mCkXJEM8J5UYt3HdjCGSe21V3rKMj9",
  "key7": "5LbzUroHGpAN4irYE3AFarhaVWWKczXXaGPV1KVXnFwkbbDEDkdWQiSzrXQr4jR3sPH8iXW6s3RnuQuixHpfd1S7",
  "key8": "66158Jc4ewENYLeL1CdWoeryzVC1MWpKLPnzHtwia97iVJ4cJy6yDA3rcrLUkgmWQb2hbY5Am8pbS321FnbZLZMu",
  "key9": "L7u6vbjwbZgQqoijwHjYgYoKbSrqbBbNc75EwdfxPC6FeBF4kSAHhk7E4RW9xJjCG1GyPaE3NvsYiqcCZRPrzhz",
  "key10": "EpEbcYqrWKGEgaaqM323nC3g1PPwe15qwUqtzmCzDWs9Sbx9SHQw1oR4WxzwtUTc55Qx4eq9dL9RnqpRJwHFvTs",
  "key11": "5AunXyLVDLAp6Mf3DgRLf15CS9JozpPrBEygDYAJ9ZNdkN6YLi6kCNa8sS9ec1rU8xCGckJhvuA4BmGZYysjbHeH",
  "key12": "5rFsbwaTnkUgLAS2RyBVKENhyKZNGKXFEEczfyk2GmFmbmfsrxWs8NPhyh8X1c5J5nTqwHua78G4wj3xNMHRn1RE",
  "key13": "5LXCsWZ585i9uogcvRwK9AEH5CyvFweYQwB7smsQceCZvsNj8PwA9fVEqgE27qqtMuUajSh5LBqFUmNVat1Zue14",
  "key14": "3AcnBtJBvKaSusTimcFCJ7SDddr47n7FV1dmnFiTUzXwvpWKWk8Yyr3YNR3UXRLWLW2xjkweFefvLtJrHn1PZFgH",
  "key15": "5Abv8roJ8GpEvcrYRmEnkHkQFb2WcPLx6XJvyKknQcPDVF3ZiQn3aj6hzAc1wZNjEztHG5ewcd1EmmGvyF3nD42j",
  "key16": "5V7kRjZ5Uhoy21Pq78k33dEx4gPDxmb51d2vAaKZM4PeChm1y6VWwnyBAzzjS4o1K1sufkNCQGPC3WDnW1buguiM",
  "key17": "3CjBzQkkb9GnL6XTZQsWRYnYzu9t1wUcARNb5ukSAV1M2n77u2D2omix3meQnpM3VuaNboGxr75sXKrwFy331eFq",
  "key18": "5fRBJDhbFUaXk4MbyCqGYgQyFjfKqUuifuXDuRXsM5xupJqXRjC8WYEXaKsdzhjg1E33qHaYutygFuLAuMi82GXy",
  "key19": "42HPyuXLWWYTUpPq5eWfZDGXaGwRJVQbp7scJUjWdmTwEDwuRkeoYZ2yTocHbGvb6AQ8EDTZyC6rQPpSxAWDduwa",
  "key20": "4tBoNirUfWFdoK2X3FMTRbBa52v6rqhHCLqdhbsQWpqACqLLjaNuaR93WYfGjvqy24MYef53T5taeXUTj2wER9ng",
  "key21": "5ZVYP9KJtP2pL4PfsYFsqD1gYCQ7zFozcUd2mdL5yJ5h3FooP9KWgyivDYDjTg74XcQjW2RF87sUPiKxPgHvJmgx",
  "key22": "RAnUk1cBXUkycbruxBRywQk3WUeFeLn8BKEY6GgSAs2Khk1WTU5a5D5T2j9i6abVkKL9ypozqgseuHFhZnSS24N",
  "key23": "2kznqmYLzLVQHsetS9H6ycXPPbzF141H8ncu1D2nDLREYLgS2m92nqRjaxctatePWfR8D1sHoV9pWpkkPDhBfnhd",
  "key24": "1223rvmoQ7UFt3EG5gHqotAxtUsGnKTBjVyu49vU5mmwECii5KgN73YN4HVKGrsj16h2WGU6yntBdasvbxTCArD6",
  "key25": "4ghNg46QktvJ1DtY43xChsweE3s9EuZkeL6Jiot8jys2Nza8VAu2MQdwmaxyoAz5Q4piLXRAHnVK6VTnizMFPqiC",
  "key26": "5u4DkdCTu3ZqoRdy6hQpLaAt3TDh7Fb6KgDPCfMsC5KNkgqSkXHWp1rScVGXW5wKPs98fvvXaboDaK4WEm3ugJiX",
  "key27": "Ee7o7yFfRomQtTrDUyorg9ZLyySVidHWwtbLj9MpuBr3ZdfKf4srgpGAbsuFa7V4ptNKz5CTaniu75kGSTjQbee",
  "key28": "5UjkugEtYZ1KAbJ2BUf2Uxi8ft1Q9pYMftAfmuQxcqCxpuiE3sfJUtHWVE9gqKbjVpuNmXcV3KT6SPnYJdcpHUVx",
  "key29": "22Bvdf467V7fTdp9ezH1fGydd9LwVPUNnzwpJzwVCWPQEqxgzRhTMTKihCs82yK72akiNAWBztfYRj5Z7LM4oSTR"
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
