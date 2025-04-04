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
    "59SmCCUunPS5e7Nb9X7UkygGQ5DPwgzr7UXzMDzpw46moLb4k4MeSZ61Vgq158JCZBN7KRupeQ2U8oyKZebT9KG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34xAXNrH3Xaxunz5osXY5RUpDBrTFeqAVUh2Es1AiAVSNS83xz9qwWzy2SKeHwxnBUBuUegDMdosA4XapXgfARgp",
  "key1": "cgf1mRu9nxNyGxMeYQdKHkU11J4hcNszLqWad2TqJjjt27dBBnfH8gAUWdTWZgSn6DDZ697q7p4Jmdvp4vUEdE2",
  "key2": "3bcSv3QDAsxuTqX3USxxS38aCuGdUumWGVCYBRbw8eTAKwhHWznqUYmM3tj4pMSeQRJ3NwkZdVf1JVFTsTyNLuKY",
  "key3": "anXWDKMsQ5nekisiC3RpVEbpaEQLBhCbYr6dpi8MF5HuQLb3hPwQRC8C3uPsQUXqNeuP89BFtefV84Rg7z9jYGi",
  "key4": "AbJ32ZBF48uTLYbyypZ7Yb5hN4pj1eUNFqY82yib32JJRKekDxkDt8kWTL2LuyiwYyiy9ZBFhxtruA16PmomRpQ",
  "key5": "5CctKba2WU5rdEszQyLHek5TYkDQVv8zovM6ear18qXmRJNh9yQqKrpoB8fnoNq95NkGUVaLhSihVXWbuZiQubgG",
  "key6": "5rncveuCdr8QRiswgQoh1sLzAq5eBwvzJYnENu3MoLuWLuBks7tojg1Qu7owERDJRnyxk1vLH9GhQdmUSHqStcX3",
  "key7": "3mwD4ZkPykziLT5oNd2ApHsJUpxmgmAAFQ4ahp9AcCKFSrCS5iZ8spuS2QUpzd3pmV67q4HHuaMzebiq77WztzL7",
  "key8": "k1Wte1TE46oaor8DAUgg1CLRJhybTLJUogxStFqGU4aed42iNYE76ExngjHEvgXxPMsDYrAPnuffawDFWNVNqUg",
  "key9": "2txEY2H8qGzbFdUzbCkdj8Ga5Jhsm3ygFpXYqgRnpftYahbSsRUsWjpJJVxTyqgi4EScGySCujPBV7vSyDmQyTya",
  "key10": "mWNuVikfwk3ueAmDVZfhCcsUrTFAyx2QU5B8gEen6Rmw9MApMPMw7iaScpVo4dEB87ZvPZmfvbT63DNh3nTmWSX",
  "key11": "41qe2qHQbPs5wWFx9gBnJm8KoPCqRFEQp7MyHBaiSHGdabweMZkHrYRUC441uqLvqoepufPQ44RzwgBcYMRFni9H",
  "key12": "3yXeGxc7BYkruFbBiTR6J5WHg7TdSFez3mzDa7L33exAoecQR7j1rKeAQtPVbNAAZEjS16VGoJYiN7yifre1fqYz",
  "key13": "zav7nzYAwZkBeKQ9m8CbxdMQBTiWZL3VYY1tYduzryRehJ6D45he4GDB9nXBCC1LoyL27LMq2GPVsAG2dEUSfua",
  "key14": "5WYBRzS5nJaHBGvwys8YGrf5Z8XyX1fjdpmQgGkY4RScvCr4dNhBbZY24rSszcAakKMwkFHfftqncTDNnCDWoHfq",
  "key15": "2NdZsYjd4a6e9BFaExwTSnTSMmgPQRSxxrvzku7mjpJVHkzdhfiz8A5ueRqd3hk1ww6if1PGMKnzTMoVWdM5hxmZ",
  "key16": "4ZxnxdaATr8fUoF1NETC1NdqmV5S2GCsz7yw9x9hGJ5mYJ8QU9S4y3peFUnXov6pJGkpDayBctbPjcRHfRur2Xec",
  "key17": "4Y5e1uFdRMb2exzKCcMvFtCiz8EPeF8Regh6nbzYi95ZTBbx9HViYByRDBhDsn3beP6abigvEnu9GhApj6fZX2Nj",
  "key18": "2GhS6GJqKDHHuQrjhKe7BBQoHMFb1qQrxYnUZfh1cWeEgctcEyNLR5UehbxfHpBRP9iaPqFBDeg6Yw2kAyG7qkMf",
  "key19": "24XjqLvQL9CSCuSjuiECgguttEu9SXhoo5VZgQwc7eZZxE65RgzoXtCN8QD4awBodz6MjufemmbNuzKg46EJVGx9",
  "key20": "3W7hqJrdCu2t6EJ9G6tsYmzbFj9fNTCmViwjxjz7jaMVb87h6tfemVKcbtBsBQtLuDh6hPQGqTEteRP4tamPTy86",
  "key21": "MDj9iuW6VxpVoDqGkUrEQzp5gKnfE7u2BQuu9QATySVnSiME5P7LuwfZ1TMK9W5guCVTFeeJdG3FXmZq49cU5fi",
  "key22": "3a1wCjK5mS585ySEetxAu1GdJkcQSYAFEsSQ1NtdF7j7n4v9dBhD35YckK1tVna1Cd61iTpdEczoXqMVH7NPBgL",
  "key23": "XMgfJUc5ShHhfyCGsZMsVFwh6hW86zMfFNZtUs2aXhwSvtfKphutLCQFiAFE3JEUwL8itaQSShqvzqGwb5phkcP",
  "key24": "4XdrMtGzTNCDY6EYEGiTK5ka5xjjRRUzq38LE9f2cXcZgZoTAGKWTB4gDa4vhffaVyuRavF8HwwbCd5Y1soQD5bZ",
  "key25": "48kRtGKCr7AAHrZ8wSRN6abTq97iPgdW1Qi6wEiQAvqFp7wtXNqXZtNmWvgohEHeoaMAiSFdDHBA7ayGYddpJvrc",
  "key26": "3ie1ESKqtLHgaaKpYrXR1rq9iYUpRcmwUfUiufaw7LXFhXpRf7upxEzYnnFEbi6AhPAtoxxh4cbSKYXTdyhbcMYz"
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
