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
    "9ER6gCotDL6oaWdP4uYwmyZkYyHF8q5Qq8EyQ23ExE5JsWjJUQiBYQUXH4pwEm1KSXXajbDjQKEC5d1Mc4ZurFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cTyP73LkS1p1v1JMcU4y18YqGm1JEGCdr5VRVbLpWjdWeoXfKnRiaqHHDgTUBFFwv3QytpDLXgXdQPqyFqNR2RX",
  "key1": "4RWwPehdZQkRKMa6DjNyDqHT35Z424sRaAywxdPBu3TcHXmcCr1gborkDohsXivsUzmP3osjHYzuD4ecvxWmc4EA",
  "key2": "6LzKQcPCnKCBPhEzqWmDM8eWhPJEjzJ9Ed2MGZCQKLWquHJUdRZPKio7W8dLyipcg9yrNiUQ72H68iurUtpnqRr",
  "key3": "3ujLkK39DsUQtv5npt6rwDjPaXRoWhLY7JJDwKx1v7tQYBjsTjLqsnzAMiTxR9BvtTZnqh7aR6cuRu6XmHxVCPsB",
  "key4": "2pvAPtt3zjS7qGD81PDQWLH4KSKMfMGHW7mnkmQHFuXkTS3KRNZsKuhZy3G99xXsay4Lw7BuHCdXrvYvYqz4wm5u",
  "key5": "qx5kfBrQYMK3BXzXS4e2zZP9YBa8yGJr8kX6FHxT3Gh86Du8vmmgzz7oASrakWQeUibY35Xw7eybYsGtZMbEzH8",
  "key6": "4TTHXTsRQtmUT5MGkGGUoNpEqXsEKzHtyG866NJtB9xbQ2mKZ1GKrhGooL1ZVFXLzsnpRccRFSxwZaKGc7YAih7T",
  "key7": "3xh8hnBCYS3X1NyeQ9ZRHbypNozcGjGNEpnBgMMG6tdaXJX1kXpsNnXPaGVVc7WWZMnAhcZcnFCcHgC8ZeoJ9tfd",
  "key8": "2qxEhCm89nqB9bmFb77WsYChRWurGKJs1mVqAY2CXozZcpDgvVL26nW6GGNXuWhbxuuqnAvhnts8dKYsnSLwJVQj",
  "key9": "3MGGAPGdVbk1sA2ECqhNJTh5iHy9PkZcAySEPoVgsFiEmoo7d2mMsmdNZBMKmMyEsSouqah6gVExm1qZPsAVTehm",
  "key10": "35Crkjrru8EwtWp9VLPob5qPnWcAuMxiwPxFt69FsCM2CmKdfrdCBEwdorkSXW8pngnVuc1VoWUA4fqVokBsGXLb",
  "key11": "uoRtcPWKEnSBH5N4haJwRRVkDPAouVx8aqApBwP389wZ9h63o5X2AW12KVgbiZW7PtADhvHyUc4hvWHk6DcGhLS",
  "key12": "5Vo9qNRjDRUo621beVBN3ZY9k7i7iLUqExfCdh9T1TrEfC3nYatAkH8gcRJTcTcspJpqibetjcNcRVo8CThzTZbM",
  "key13": "2QNxocQsgfd9RBmvybqdLCLNXDCoaQC6db51s5kUkr6J2gPDwXKEWN9QkXeYW2f9JSHqFxibfYtjvJvcLQaQs34a",
  "key14": "21PG24eQubmV4VGyLX5YfjG4yXhaKqPxMvQnUCwQbkJme6st2SpQJbpepcdykALvYXPmZxoEBR3UdAqxzD4SE4y4",
  "key15": "3NcnSKKAGu9ijAN3Nm6d7UEABFfi979yToLyznLCZq7c8Fuvqb6EQgJz46Y7Rfv4tbxwwF419At6fC7TVud4nffg",
  "key16": "5fkup98ksfkjoDwPjmiVsZLZJiqFeu5uMHn8MXS6XK6hiLVdTUJQKRNmgQ231Ey6LTJotqBkjw4bRtyqCMrPdRNR",
  "key17": "3WJYBbYoiXNZAg883ssYRyLSDfTDcbZwswLA7Pv2ooEe7Uw1CKAFPWrGaMgCcvnaqUjs6Vwf1d3snN7XEQXQzEYa",
  "key18": "4yRQwcEXcFM6ZtU6MK2H8fvQM6thhV12rAtgFiaL1zUE1pH61i32DUog3UZFoq21FruDHmCa6MYW9PM4oDzQk1i9",
  "key19": "JxM3EtK3A2mSgQjc5shMSqQEEKmGM19MSZV4EqQGUdHBFeh8RKtBB6jvxt8nTiyqWXMkqN27QEKXFDofrsf26m2",
  "key20": "PvBNmg5yVUZaobEE9PsDDdnAtMiAZRmWPwvydWBY6sKg3oUpMirB7bSs8n6BCZdtxKRXF255xNmhU4nQN5oXbs8",
  "key21": "43Z7x2brN4g9rarRP2Qen88fKp6jWKadf5y8Y8F67VGjfuZsQL6CFGoMjxh7A3f4rZn95h2bTeVRvrNRzzr9RE3h",
  "key22": "3metbKdoy1vSCmrenoPyPhCtmJwQVvVBtuJHtnh9Jp8DmGh1yZp2JfoGN1a6JPxVxhUeMDcp3W1yVChfuaYqrH3M",
  "key23": "j3Augz2pK3bXoybXePDTezQH25AxiTSYNA6Dn1cb5NVc1RzoFmJSysFPfDMMdgZdyVYfEUx8NSpBMvo257rgzSo",
  "key24": "5pRXbavyHibxJ6bJbdanzbNMnJYnzj1zXr6mMFQr17EJAdcxUwNer9coiPr7mU8EsebU4HTkwZSg3ZEgFtfR6hf9",
  "key25": "2fjeEPF22WSdTFkzWhdLPjfihDVdDQBWU3CQqG6N1CjNCZZpUuxCVYVpqC79ycrRemzHmtURB8rjb8jgNPYYVLcj",
  "key26": "W54QjFcQgAJmwqYfts6Eg1tSiRnKb65GHMaDqEzxsusRrztwERDYG2tefhSMgETQgihSigjCN9bNWKeoN2EMMi8",
  "key27": "Q1zw8W7sDPZuQ9xHAM2iCzFaFMjp8N6i34vEDg252YVg4F76mE8sizEKxT8bhGyvnxTSqfmEZ8q2qt1krrw1tUY",
  "key28": "4jPthrrNZV9A6pHryoTif8mJFkqFKUZKbp4YgtwfaFH59bueLX6RhfdqfiFD5UYzawuZyjN4i6qCNHcStFn7WkkS"
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
