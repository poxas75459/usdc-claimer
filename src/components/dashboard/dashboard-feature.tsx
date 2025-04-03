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
    "N6N9W6BK4jP4UKP6fVQAPDJTEAPeEkTegfnqtzYDNjpKB1JM8HHjDc7RipmDGFjr7SShJBHi2Xph8EmMQCgjQCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bhf9eQQ2Q6dXUSWxVzh7C8rHvMQQ9vGgv7zSRx8NQXR7Srbb9ZP3X4vbVXhDigcDV4LqbbPN6iGAXN7b9TWrTzB",
  "key1": "iwNFW7sM1rW4jEFBiUPRurwwTsVDnNWXn3N6hNaohDUb7nfAtFNGYG185hR63fRamqr9F6AwZfLrWudZ6KEM8Jt",
  "key2": "AqJF27NibmUkjhp6uRcTiiwwV81gZ1VJciSYs4u9VrJQVRZ4scjdCJfy5HT8SAKXRhKJH8eXbHS2mqhMpDB4xJE",
  "key3": "5EQUMVSMswCRKGN7rU7jgHMEyKSvQpq1f1vvF3Lj1VSSXRo9RE13gQpcauGbeMhEHPuRwZyCP77kK8p3s613a2tX",
  "key4": "5WGro5mCXJWtPVaKB6ubVyrLfZC9qg7Ffo5TaURi5r2VReYdNresY5GcZ2L2PquC7KWTKCrkRgNkg2fMTbxt3ucF",
  "key5": "25YPd3uQibB3Bx3h2y2WugGifMpNPqb1MFhQLTtZZobvvNqkWcRbpCrrUy2iZhRrsZQnAfoDocD6ucaqX7g55yux",
  "key6": "3xi1k77B2G5ULAwebRPQNuXU4923uvDUsGesop7eJtL9GNDSA9jDuezrMzz6yx7mWyXN53C4QPJQJa3nQvb6ZC1N",
  "key7": "5ATxVQS146LAAwHhoJfdSdedXWQLTeNhNLAzBowBdaShrcwLEqBYbnVnhHgmkn2uui6at6sYPaWXgYcxgx8UhNNY",
  "key8": "3NtuXS5QipB6H3fBV1MzUE3j5cLKbhKSSFoMUztbdhao2VGSbYyN8fjsqn9L5pvBSNQvAz6XuE5VdxCTQeSSJWA3",
  "key9": "5Mx9Zuk43PwVejPfeQ25JLEbmRnGAo8nTVf4PrGNy6orSEauVGNKbWKdJsVUGbzfnSDvRWwaawHvvaS1scuqRzr6",
  "key10": "5fgJtztvBuiR3sAjwNTvLD4SCjuvuXHywEnnnnZtLA7Xn4hKJPRH4WKcaCmRAjMimZ1FDmabUewe4Qwch6XdyyKP",
  "key11": "3zZX7p6PNDSDGUGNmLgNWNMcWc1gjp98r4VSAzi6Ev4oJi8C5ySWmxhV3LRnVtuf8LDqUUuoPoLQwJ6goet5WhZs",
  "key12": "5erc3BbVUXuypMioPiWig7MKoRoDmFrumSjEcMqCvb549ndmipttSadBRA6nWJiwwTMUKywqJEBNPmcAqmzqhGeT",
  "key13": "5CJrDauSXimuAiSwai5mGociQiy6Fj1Y8wLLVyAwDjpZWe52HoZXM73xr9aKSSXW2ED9MEtiSBoSnQ211PFcHwGK",
  "key14": "2ba3Es4GDqMnx4PyVVWmuyZAy6nDKobxrfvRfSCuk5A495XCFgiSJ82mgRzDSKhLPcTyKNDE3HYgCmi1P6jDBUmN",
  "key15": "2yESWkZ1b2TMdx5YYzA9isbGuMB1XrvwozEszFVCLRVq9uPxrzYZTxXFbKMfrHqHVLPNzzKr94XjidwMJwFw7Ti9",
  "key16": "5dvPiLHpSTxTHfbak4wzFxNW5jeCgNbXrFjNPo8xqGYPv23grZkqPTin4vse31ZAEa3nJxWJVfgaHUx4GRJHNuTC",
  "key17": "2KvU3785CkkWMpaLAm3GCJtdaSWgyLs3SVZTDoXzVpEdBwLamAHqqVV76HAMokmffpFsCfAQaf2JQYpjW8qS8kz3",
  "key18": "4tswACrhB4LVhVHMCKgKeB8zQrTdqLJWu3aibCUZa8Avc6cRynAboXBmZArZmTQkBxY3CCZCXUwm6jehVQgZBjhz",
  "key19": "3Rj49ELRY54jnrY71pJuu4uSRxn6KeXgPHoTrQZtsgjTUSia3kTRsiVijLmhcnsuTqHGnsK3UhLab99QTKU7WUQG",
  "key20": "xDLy5nbVj62r7XfzxZGXHThsefmXzxPqgPEzGfRVG7Z5GpczQXYgVjTCQaebnrqBujHs2kujHPxruBfiYhwLqkT",
  "key21": "2US1zm8RdsikVbHeo8oV28FBaVMshppLMrUCZX5hjeFtqTvKiWBJqaGXH9rvuGubPQDTam4FJQwYCEKJc4QeBZnq",
  "key22": "2uxKUBa6NA3dNgBr6PZL3uYDYjHXBFxBzs5MR1iwVoVafepPKM5M4LTR1G1M29kazRTKyYwbchhwYc6yQnLdpCWt",
  "key23": "HpZcumozkGr8oPiVMU91idzW7AzDQ84ZZ8mk2LgvWuKHNcrWqATeVNTfimiTurn1sANykELrn63yAS2pwctj2p4",
  "key24": "2b3hGsuToGyspCRtsfJEXgZYzpWWD96CWqzwXsGhqDcRpHt7CYGt3zEWKjQkdr2hk81STCadMmcPLk2ttRPByQxQ",
  "key25": "5ozkCo5HBymvxUr1p821ku6V8HxPYHZ225i2Eg1x2tsjHToBPnrzmgrnqMd74JmJJptaQPmAzLCa2jrdZ5EQY2MP"
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
