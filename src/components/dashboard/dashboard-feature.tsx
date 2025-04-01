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
    "W3eSeVGozEj5xEczeDa1mUdbDe3uL5RMWNMnWtCYekQ3EhRR2PFea2nxNwdVwek1ayvodgEKfgYj46FkP7wCvEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tkFKSDHNrZ6UzVHthc7EdfvCFE7iqhkSEYgoU3YtToZ6r3mRJ4p7w1kPgBvPdgcSm1QG44CQwGcKHj8PeUiVzQ4",
  "key1": "2qjH5CCCLWqHf7yuXzPKtQCX3xXLs5JFGEfNaCRd69b7mj5gkd12rJMNjZe2ubxthdcf4Km5XUss2dm9Kzw8YzVY",
  "key2": "1NT4uxFxvsaZpEm49M484UUBknhd9Bwc3T8WoabG6o4DnQohUoFmv1fFNKeZtFTwqqCHTcdMvSkadjnxq2xe83N",
  "key3": "5iC465uoFasBfjwkvUBDLPbKg6cz1aD7Rk6n3CXZfyTgywFLUfujUUZCxm4J6TjUTEJQWqug2dSHAnjozyJ29VEW",
  "key4": "4WQe8pWoqFYYaTr19EaXf9DuiE7ZmwZaMPFC5cmUFjMnLu36btnYWCheHfkzWXebRN7wiUZj3aRCt21gdUvyywoD",
  "key5": "2ZvZ85AeA9PRtSqFCHg9DM2z15U4kDXoMsqMVHyBZqVDrdF5ndV4CvTQ2FJyNCrE8BiSeWoVE1khoWv7gNroraNM",
  "key6": "4T9bA5L3JeE3mz6Yin2CnvscryHU4f1WghSZFXXDRNWEpmsYDWSZK7QXTqUvAvQJ5JACgvgph5gyd8FA1Dm6Acr",
  "key7": "4hJ8QABZfm6xMyYHp8N2uKc8EyiDpSJzm2dd6PovcGxPAdSXdhNEPmRfXUQH1jHSMnzEBDZcS2Hu9LwqGu9xFL1i",
  "key8": "4Xz2qaYtRgpQafCDHF4wDxgeLkLc5df5UMdzCja7YxdzuQ5Wa9QtRHZg4mCjm7hpZ1WsrV4mNXPg7BCdRLCEGWAV",
  "key9": "2A2ubQcjepaoHogXEaxZ3eXCxqS4wDbfTs5JStHSoCaMKtFdXcvqAfZXCQyhZo1h8msx87wP1RkdN65gL7g5MZtM",
  "key10": "4cYArHk6rRFD5Lwef7Hmc6AhxnhWcXUj6nFBgmxCbWBU2fKpqGxvb16Ly1FgpCe8E5QQCJe4F2VMeBkHE15EWKAb",
  "key11": "2RLZuu1iUkKA3KiTw4TY2rN8sfs1gRQkQJChn9KEmzp3VhAZWBY7wboiHokWmv2FWCNwUusY2bk42ktbA8B1iz68",
  "key12": "tzGMnHzRtKY14vrJ5mhbLsL6ZPUQ9BADF6zDNaGmFV6PLgz7t9KivtyYevLA8QswzKgZGHkK7foWzxCTyztPbdo",
  "key13": "5K3qLAEpgAnfrW4eid6NQKJ26j9JatH1rZxkUFWpAhN2jMNFYugm217WH4B5jYhCiFniJZN42r2wjWTtCL2yGVGW",
  "key14": "2fv9vSCzMtYpEvcG54AoK6y8WyC5hm5V8zCmZK8n5RbbsiJaG7eNFdfKqQ5nC8689TkPfHmmRNaBS1UD7CU6becC",
  "key15": "3dQ36j88XJDyb4FwjMTcBQFRfh154HEgoaS3MgNeWXPaFhEsPcMdd5k5d826rWeMn2CyZSF3UrSNmWCmDvubaGb5",
  "key16": "2jp1PyxdSTkCHyPgFWJxE2TfCDv6bNJB3TrURiRFbQvBFhQTbQwxYzuqV7BoCasWCtGa8NSvzhDCLoSriR3BXKUM",
  "key17": "3JKZBB8wAzJwv3XBAZTzUMdcCfW7FKcZnzkNxFcdLM4MognwXiSkp97em9Th6yfkxvL7E2HHjoJCSaZTH8yHDww2",
  "key18": "2iv2jrMLGK8otMGH8ePDB2hwe4ibGdqUmuuJz41Ng2yub8F3qmqp8YLJhjECnDsvsMyRdEWeFwESGNgx5TrDZbpq",
  "key19": "47wb8ZCgzmR9UzW4EzBG5yqnfopAMPdwaQbmTxRer5E4jh24Gmg1cdeL8i7noq46jkvKhFcmiRaVeFtVfdaz66GC",
  "key20": "2jUckU6FhAjKwYCRoQAsGR46TePieYiZxSUgjQx5e7tmmtsSrEN3D4vvPtxSi9LPLSYK8ne1C52PCbqFGHzoTNV4",
  "key21": "3bez1RrX9LdwfwGkKfxRbtYjrKwYewLK1JNLDaA3Saw5YfHsBiN52AZhExaHQHJ6eRt2Wx4HWxfzE6YV6QQMaEjx",
  "key22": "2e8hFh7auA6YNUCDpw4oYgHxnVNa5DM77auunwUzGwzdxxCZptwoQ8FyKxqcPs8bRr4C2Q3KTFZrLcUz16EeuvEk",
  "key23": "5SGUXtpgzkiYmduojjTVpTJe2Y2Rx88ZVMZaUY9j7aX6wtowkvdCEZChVLtUjhzYyv2J1td7PMF4uJZtaEo6MjMM",
  "key24": "WEMbLWTTxvxUXDtNbTsUvbZfznWAC6h1P15kq6c5phdW2wwq7nmtPz1fDrDHdpZSPMbYybeuh91QEzMmpuGNXkU"
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
