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
    "2SFS6R42nDHd3AJxjSPuDc94u7NdpNyGMo3suy8C1fskGAUFCHNcEcfyWkVdbRnaZBjgZiqgN5FgHyrt2mS7wtQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FFDDwvUt9hyXrC8U42c58QWtnNZeKUP6kuVApM9PreTuKtimDRtDDW4KvLP1iqeBofEMGJKRgT9PcsxysYHqc1A",
  "key1": "4Y2AGcfxs7MzQbZuyPt6ETCeptV9su2aBJNc4SKwbPXJ1LjeYxCY7mapmsRhUcGHKNLuQTAfe2NkV2EghkA4s3DJ",
  "key2": "2jiRg6c9JDMUa9RjTjZAfjr16P7kHLFSkGWQAcwoSyXuCn3K8V3UxCBtsVbWCBVs5bQshgAxJ4CLBCJ3N5nDaMqy",
  "key3": "3UKcMkMGErc481KCu47yqjn3FkjtShV6Kegbt8GfPWVnRsBgKP9n41PyPAoPixMfbW2GueWAa58nooiHx6HaYGSm",
  "key4": "62KA73v8rV46TXQ3STarYRrrDC9YHuox8NC9RYTKR247V4j6wYFLsxW5CZd4xsL7LnUZ89F381szB3T28ho4BLAV",
  "key5": "3nLbU72hWKfTc2He2s7zqQ99jPexHr5nPGChNxRJgoatTDwMZphM66ZscNpimxQVfLriEUur1ggfujxpXQ1x5naG",
  "key6": "b3uNi5hHHML7zG5Hd46WDHJponefkqEauxnzC48X9w3a2epSCYXSsq3CBLdsRNscdUbK5WBPvkd7xzcaSSiaiaU",
  "key7": "5edZzkjAxQoTmR8HtYGN6FXQFx9Uv1RcAJagmQN5q3bh5ZWxsUAGdoCwJG7NYHjnedDJ1SDJG9p16oBg8yxT1PS3",
  "key8": "43uh9vnts6EPe7tVwHy2TgKdQ16cf1PGoTRi2NAmpd2qVeMur1c91JVsfL5MLqG3rWty7EGZgSy5BWsiEWHmP65c",
  "key9": "95KgZ93DFvryetsbY8o885rQoJWGEziRREf9AUZ5cJfoB51AbAeV8dMXNvNeXBjT3y3bJZAqAa11DSpqjPtNUj9",
  "key10": "2berRCdnkWMxJ5U7EkZVht4zHqqJd3evNoATmak2Dww1qBKUHo741UsLb1p2U48G41jvAx9XX4oumTJieLzcSb1B",
  "key11": "5T6fSkZ2xtPReQxXpsTugvnX4jWy6zGjkXHW5SKVFFRhHHxQRGsQwS1CGA6GtnRWw818xdPcQPcmNijMGDBTq4MR",
  "key12": "2frMTpbGHs22HgZYiU9whhXNuuvNCsGeGGH6THsy4yteS5K17AERxMeSNMxvR6TRJTNQtpwoPwFVPMYFdjt6tsVy",
  "key13": "48W3HJSFWQhPnzTFVyJSVgUKUCFcAZTwRRQvRVPiBvwDHj8hfingKk2eavKTQy44E4ragJHstfrTx6fipjUCDnAe",
  "key14": "5jAss66yQX7v6WjeaFcVFnDmdKE2Snmy91Qn4nFDsRxBueoQQe9iaiJWNBJAQjocpcnExr7cNGNdG2Ezx11FdKK6",
  "key15": "4176KmvjfkAaw2yqY52fjsyqgo2jcKx41GpCJ5xec5i725ujyj72CWREJoMQLypySqfTgQCprNj5SE1TeVMr2DYz",
  "key16": "gtbxJNqmtxLmw9Vu4c9AzojNZioAgpr1QBShZcJDNqK8GfjhAxAN9EfdawvdhVAk7s6Gk2jpKJ4rGQFyeHxDpby",
  "key17": "5v5fUQVQYnxtTgFxcKdbCWzco8FmdBMPeAqbvyP43BduAmdhVqs1mD3R1W4zWA1fsPNKjZCDkhZNXU29SCngEr8E",
  "key18": "2zuJWj3TEKEMQNETuee6wspb7WwmaVnsGETX8ST84TD9cnc1w8aWkmNmo95i6h6zUM4oMMpgXrnSwHsKxMghC9M3",
  "key19": "2oEAANHz8Z91AE2oeZtkeRYEqCVM3NnYxHBBFF1NG3CaPHVyvE1YLXLosaLF415b8tci5uePhYwHuBKjQwCkEWiQ",
  "key20": "LL5eTxzMvbHVtoPC5fiqkvMm83XeLiZYKLgVhGTjppS4JKXgVXg6nW4GBEMDcKgB7GrERswCAhZYFEJzt254Crc",
  "key21": "42rri7YDksfHuvhqsrC1KnmxU9BhE5YFrLzLgfUKQVr663TDcuc7U3fo1U6Co6icDumfYtzXALpickZ127xuCYy9",
  "key22": "2RS9WHLfQezSJk7xwfGuK1o8Tu2z63oDXsVru7k5rE3rwDwgQ1EsYixVj6bs5mM9DW7MjdrW2xs8f8jjPfwUVY2Q",
  "key23": "3y5kNXcCuRomfQjcruNdWnT3zGzSnWvQqemKsppdUFQsKzTaJJM9ddUNabBR4SnXn56Z6LRnL4KLQqkUNS5qp5Ue",
  "key24": "2GzpyoagGujK9KHNLqRoLcH5J5r2Aq12v1hMxoMvWEbU8fvZzcWco2VHyiP4kgVLmn8572bKUgippWM1zfocLQkr"
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
