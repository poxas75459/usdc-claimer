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
    "ZRSqATBCQjDDt2rMon5HC4NTBCmTWWw5wFCVJUS6opU2Jzadw6nCFimmgQRpmMVrYP5TwfzJnZGsFD2HS5cQ3Ax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34tsUsMEpog45oUoz7X7JB78GdAWka4Ry8BYJ9FAXbJDygMSxAdY26Q8ccuoPt71teXhaBSP1kSw6wLVpn8NccVA",
  "key1": "55iPtnXCodS18hw784BzBpVxdyUGzaDT8pfnSJkqeNNWJijb7XTLh3tHmDuM8E5LsqGqLvS1VqwAUh53mHyGv9bH",
  "key2": "2g4y9kU3HyMRv7KffE3pAR7Ac6A36TWhVUpeYAnWaAQy4PTbkhGKwYHZ22PDV1SmW4FKWWkH6WBD8fBqCWTHVDBt",
  "key3": "3tbvmSrPTMNgNz2p4ioRoPrMwy9vabmGd2DvwJdFaG649TiKvZGV9W2vzi3QJTesZiN4f9LVoSiWStg4DWX4czFT",
  "key4": "3A5eb2CNG28JbBcJ4yRkwMsGeyxCnYMDQvhCbowSZtxTVQhxhWtqBYLHphsD9wBxV4SLUUEsn8B4QiC6T8aqbvFH",
  "key5": "RLgSZNPS5fksKyGh5J7xBFDFVLhUNn59ZJ6rNQevHSjX8VVQTdfLruKpWXgVrbum5aTvg5AV96z2r3ALMR4UWna",
  "key6": "2XNva2P9c3jPFxdYuAeuBmwja22P2xmThUozYDwgo2BbKkHMg1ENyyJvKjT5f9gaLqwqgJ8FLSNKAx6AcYddBjLm",
  "key7": "5Lhutt8qLxc7nUPV2sv6G6DVb3Jmk3giyap91W5WzM1PCmwraKoPxznV43FQeYT4AtA4nUseFd2NwLJAsXdiuJPP",
  "key8": "36LofN5QFC9masviUpcFTJXgayAmmtaybpHKxVNSqopr3ob6Ex2P4UzjSseA5mVPwaVMQSubCebJYzshLuny4Pr6",
  "key9": "NE9Gv16DDuDUKy2yD9CB3K12kvMrVmGKTG49GAyQyB5hLfKiXmjkXYsFo8nJcqtBqF7RXyoxfoG8L88jkqJR34r",
  "key10": "4gT6dm1MXfG9mkMsAN7LhN6BMBsRkj7Fw4Y6AXJhGEZFfyhbhu4hmf5LhKgtMJLzE8or4HKsvi3jqCHzoweoNPXq",
  "key11": "bnvLAjw96vbZQzFDm5Q4E9yiSETcKnv2FZcMRiwYdHriFDYaFn6hjWMyivMYswLiAJ7dki6k3Ubd83QPhjZFfVF",
  "key12": "3FRagTXRu7CQehg2zQvAcjoLzoPUWYM14Gd4vRLF1UzHQMnTWkXbXzaXbLtLm8Nchp6JxxUsq7EtSon3SXy21miZ",
  "key13": "4Jx88pwFaJZKzMdSstifGtowxAqRojdoST1pYuYEcPa9YZYtxnB8aN5kc8UChpCNjEVxHmXiS7wUkVbzy8s6Fcyy",
  "key14": "3SPVHkWsEeMnrPwAHiCa6BypLnE4PoMjK731KDba54ZBG3mPzs32aGB6AK8LiLbRBoPtUMvrPqCZjdB91BXhR6Rw",
  "key15": "6797g2nHYMBJyzU3vYbKXsazW3kjeTTQ5jV7ksxhJU99gZfwM9CM46UKWSqjs8pFPficsexXDjjZGrDJqP82C9hh",
  "key16": "45KqyTdWZUKkahpkj3BenK799rQMCsSHwrLPF5L4ZJfP8hByHEFwCGLYQejsbbzZDPq75Uq4RqoHu37xctirYRnp",
  "key17": "3pu4fMFMrb7XETiwf4hMHDgX5tLPKA5ZJ5E2SCA1KnNH3Q41vPES9Wxk2PicLaye7J9GjxL6b1Q19EptBokdf2UE",
  "key18": "3C8GecwQz8NjmLhxC8Qsb8G5WajK312cEvVXr2RVuwefW1WyYW7TDnJe2Zcgjh6BULnKgaXXEgrxdVFHctVsL9Ro",
  "key19": "4W8kWQL1PB5Ue8E4XaeY7me9RXoobxSHUtFcG3EEiLupR256w1wmqJhhjRhgkqQ6qMDPLqqg24HNPfacmkqDySso",
  "key20": "3j5HrwVpkyqKBnVNuVNfWfv4q9JCawZeWZDQRZL5QL7sMfoimwVcQKp6sEAz3JgEWYFbfJJai4zchY7Cqo7CbNLA",
  "key21": "rYY7iUutkX3jPYoQquSkvALcraT6bYEha3BiEBXC4q72HrFrRNex2d1hesKaXMafwEi23pvx5pB4eiAiARNbqBC",
  "key22": "4ouei5BxetHwQNJohw8AXsQMzQbd21aXMLp5FcexEdANegFxFxtZ1BcZ5qhR9SHgK25oV4e27HMBGUQVEqfvCbMk",
  "key23": "5dUt3gR2VbgYdZersqeQ4bsUNF28VLrJG6ZNBdbAaau4jNUncNmwAEEd82hTgUopkd6ctny6UGgXXHNSXGaMaYTT",
  "key24": "4RQ6WMW8X3ULLSmW6uRM7nmYdWgkSGfsF9nfXfgPaeNGmr5YSMLfniNmbTtzRNqNbP1GvqEBTPykKTThEmTfZoVt",
  "key25": "45QNcvHZyXNEZvCpdCwLxqrD7oKZ2h8PTkGXcBSDRmTLkfBNPBJQuLmc6keLEjTBxhrNScrh4aJ2fkrEKWhXvrcN",
  "key26": "3rbzkoKxXHf9JeHuKZx16JQVZfUorqcZgANdv1wiPUGPt84kZ8w7bqVjdiMzheFmTHzYK3yMbuq4NgRRRhcJPkRB",
  "key27": "3HYpX9JeFfEw4jrn53wS4nfULxEgKhQsVfFY4PLGdYoM7pFfg52CGzgstNYu4sYuhto3upLdxoDDmzjDkwXt3y2f"
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
