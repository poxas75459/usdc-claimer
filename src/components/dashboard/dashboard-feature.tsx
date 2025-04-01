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
    "51nUdUs5Xh4FU8Znvd53AFuJrJa7DDpnLGaaLycnG43QYhGVTGzTfxEu8J28Bgw6MeY4JNSJ8Dqax1U2P1atEhqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FTAD98VRpCkfsAfc7sejKFsQZKZ211d333WT1poJL1VNsQeeVVQQeb6AWRyctpGpZgVQY8fsmeCcLg6A92vU3es",
  "key1": "2Ct7w9xbXpKdrBMAkPxph8tJZxzJzRoGG3VNFQpSTV6Rx3Wey3mFp7pUMUBJ7M58Rxt2a1o5PFc93rsfvnjrwqY6",
  "key2": "3YkzbW7qQvEmhaGLLnyPMHoH3Y19os1p5UQHMS1nCfgAmLfu8sKSg9GWmLBg8GVu7d96bqZxUmKK9yNhqfHdQzhY",
  "key3": "3TxGtqFvCMQesDhkVJL6Ghrz4FBCXr6Pp17KpJ987wcEPpA6etjXoc8Qcnw9gVQxRQAAi1hHLh1pmaJGoN1ThiQE",
  "key4": "47haaZMCzy1UPD6nqos3sb8ovoD3LfScSiA3sta6E5qRQJVP8dUec94hj98ZAxrpesM913VfgmZBRzZuFJkroRvF",
  "key5": "2ohGfGdEC3HYHe4Xq5NQxjpRe6U3HrTCphNse3XgBdUbnW4n2k1fpMvPKMFz6xdV8DsqDC2KE32a4TzsZSEGuNMY",
  "key6": "5V7n4WP3KU6dftBA1VWtyr5jpJ7SSvHaKqYzcAjDVtYfY6ZL1uJda1YsDdatwkMAYhGrd6GVqqWhu92WAocSZJ42",
  "key7": "3qc9Gi913wennWprosqzKXqR553FTCXqvQA8aZts8iPiCfM6BtaduNRRcT2PVVuQtnTh3BKeZghmVz8hH26a9bs8",
  "key8": "GZkwgLfDuS41donxU7QZHBJQdV6Ka3BjaJjVRPS3ZNEu94NEY3Vqy3w1ebvLQ5w5iSLbK8vf5icbUL7kjFBDmf8",
  "key9": "2dhyjbgm3k7PgCsTuGiGJPVa2XXadsvz6gEGt3tDFzZkpm2y4tMJbr8JTtSJDftkbZWKzgvPkQ2NApv9Xb7yPsE1",
  "key10": "3rtHUWNvJNjNXCa2A48GdW8EY8BfA2BLSa7gESwK9kNLWuRsVC7T7FTp1ya6A1wsRmZUodFvDCcsEJNM8D7Shzh9",
  "key11": "3M9PN5Tu5fN1fA1fw6JahL9hyANNKTdvSRmBXzTPHH1cZ7k1nHL56HsngFGSJUj1N5wk7EsSek82QgjkNJSwdAu2",
  "key12": "gBqAhJJrr3hANDvtCiSCwsPT8hToYbC8vubiTn6kV7wCPxWVbwA8HLYAFkUWp1occmegy1rNv14sYA4tozmxGNw",
  "key13": "4LWZKWiK1vMttb1riGHT5dkyUHrdHbivF799rXBW6rtQMfx3N9NNJdHBYjb1Qj3eH8XCi2ReMRrSnL7eZdTzphtc",
  "key14": "3Fj9hT8vavjnbRyuiwtbHZqD9BRd51m3Yz4o6m18G4DNjk68WnYCXKerj5ugKvCHgYDSGddvcofdVPQC7cnE3Z9N",
  "key15": "5PriiPRRLyyGqd9LgHYzhD9jTCRivfYjtfzx7d8pMcBByvi9MAfjE5D4GRXZZfGNHzRRoJ6bFAxwYZ3YzFfM4Nm6",
  "key16": "2C4Y9Hvr1WwKignKAqgdLoWjHeWvbkJFfpaUgthoYjRzHMBYw7wyx5rktMqPMeddr9UumzKixH2fw3tAkXzpY1Dk",
  "key17": "4MLdASF45VZjcYNG2vW8vh81M7WpDGn2a9cWgNfrkNEnE31AohDbxDMVSxpJtNyPsSyG9fVGktrrLhmvs7ZuAZfm",
  "key18": "3AF7hVL4zspbYoeDDnDZ7y7ynZdVWSctVQY3TBPW9AAm9HNffupaoYNgUn73gSXHApbnrdk4jLcvN4yq5BcUtYxY",
  "key19": "jX77nbvhgLRNvdA9odq4cEtfG6MCbVZTSfqiWEXRpUtR7r3Egyp7Ljg3K8iaiT8iqnrdSG5S32zh9P7fEUn6ytM",
  "key20": "9GNwnYXyASMyV4jxygB5XN64SzRcdY7Jurh3HJYE6CfNmHBGDHuVagbq9GKYW3oeNAh2prwH9tNioWdhU55oYAi",
  "key21": "2U26N4shyjhGEhsL8N6UC5ALierHZPXqR4kmScZ3zSP9iBgBYb1rhX8pp5mvx7oXxduyWvUNmcPaf454QiswEj7a",
  "key22": "4nnS14qD6DA5Ab1vBE35Cda2GfN3rbbahr2wP5rE6ZWtoMq1iXEQYauxf9ugBGz5FV7nA2q55MN95sbzk288xTnK",
  "key23": "52qvpizrJeHPHghG8WpPoMNrD9nfsYNzNXUL6wvHbANN619VbXVUcizmyfFBK44E7oMQz4UVZwAFX78EuNQDeW92",
  "key24": "Ysn361A2VrAQv3DWQDGHSE8XQwL6uVyKfBLAVoz1bmHiv5mW8T2knH8uXwFTBFSvzR6Qsoe8uCNBFHzHkqLqtmT",
  "key25": "54SjRT6E2SDcsh76f4rVjPXfgDRj4mXcVr6oPruEwxKUBykxq5DLR9ak2HVSscKkM4s33sDK86FZtjTVywQn7yMs",
  "key26": "3SBikRf9c96XbLUguAeNaVmtZu1iLTnvssHk1uamthfGYfyzwn4FskFuEK6ocwHTJZKzWiPT1CQC2E9Na5KiVtuo",
  "key27": "2aN1WWUuitwe7r2E4KoryUe9b5V6dLmeKt84sL8HWDVgVr5Piy6ULP9YLvxr6fCJHmFSJuyzpsn5HFA87annZE7B",
  "key28": "2qdge1NWGvPGqUvxvFR4J7B7xmUDFBRi7EB3PzykPGdCCk2odiv568h3FjKeaB9mRm3W6qx4FHcnDL1t13QqKa6B",
  "key29": "jn55ssESSKfa7ztYXxyk9q71FjeLs8ttb7UW8pxNvNYsCanDegqeZCoq8rHM6mhDFaLH3k9egFAvrJbAoJ5gJUD"
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
