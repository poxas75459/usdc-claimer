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
    "5ib8CyXVGUmMoaVXse2MSCRprQZK8dKV6NVbHWYjF6qV9qXFGfBATUdkzYuRwpFTmoFZ3Vs8JvQCTcUgwuQUsq4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7TzroSWrrn3ynEqKnEA9ix5RVa9KqSLeTGPHUjPcCpPnCRXTTDLCmTRrHvS63Hd53fcgtKiYadX2a98jH83AtEc",
  "key1": "2KCui2MjbRGZbsHaBQ9jDjooLcspg4xzR6uUsnjTjXJwmgDU2fW5gHsCuDSFUWWfTrR6UYGraxQ3zjD5tG1gSsM3",
  "key2": "2hYjNxSuFveCDCafnJVvN6dCUDkkEtbvLy8ghwvrRPQ9nAEkLj71ZVvVems7SB7QzgWXDLMmuWdDvYVBUhV9hVpC",
  "key3": "56vXWsWgR7RoH6Hd11wrueK9F2kRJ1z1bDijEcVR3XTSfecdf76SFRkswWeY2SswtczDW83tieQy53vh2dUTc3KC",
  "key4": "3zeZHWnniR9rDLmkLMXCD3ewG1XHSFuixU76JwPLBaGQ9D43Ya3uEwZv1AdvgZspW9cnaafsK8pThiiKnMv1k28B",
  "key5": "2J4mdn5VAxfg1gwsFLerMAejDSByKbAUPA5x7CrrwZAtmRxo9DUDK8rru8njLAFJmS1qz1qDc93TgF3sUhmLXuLE",
  "key6": "2o7eLf4AmTXsfPDLBZbnf6nHXrg8KF3k1sjx3p5s5AUv9Yahqn8akGWSPu7Du7hbcYjuvqVBoBC1jGc9pvoomZ1j",
  "key7": "57vHtHaubpoxz9G6UVH3Wj3T8yxbGN7utiYrLQijgHwWsW1kRuYXaj6bZEnXNee9AHc6n7hFu4MUQ3jaA4dZvC38",
  "key8": "4Dc2CFratuWv4tY85gtZyaizEokthp6jwPcYWvdw8YXuyKfF8JvMxKsM42AdbDhJ1Sx1nk14YM5riigYDbviguZv",
  "key9": "3Te4i9J3gMX8iRtufRowaQNcWqSFfCiofpBx7rv846f1AqoFzKWHRoyPTkgA7KQDS98gUHGT2AviCmzeZMMAQe9c",
  "key10": "4nTCwokT3pKwBT1DumSLLW4uA2XZM2JoDUyQJawUBLSFypj4pxQWiBTVsx5pCgW5Lu4FA27TigpdQCAtYkPweqht",
  "key11": "3LyLxk9YgdPKLFJs4a7XudKimzdsEa2mph5ifaLwaf7UqjerhhGULR3FWZYvgk993EtxoMm6GG5vNFMSW3sb2UB2",
  "key12": "2Pr1LhCbRC7epcdRVSXodSrGVMjNKyUYL9dzZYvszUfuu7suPPaiYftb9K2CpbA2FPYgGEMukmh9SMkFxpKqqdWF",
  "key13": "hPh3Zjqqjkmi2WJHYkRe2SeJnYpo3WpPJURLwsHkFz9vLtb5j2rjY2EuphfosPjTk1Gmk8kuF5o2xrmS7Xk2GbV",
  "key14": "4YCdWcvYD2361daTBj5ayyZEURySW7aN1YU99AyMMJwk3nqYmDkKzsKpb7ffByyBixKWxUATj7P6Y1tiwuMoDz2F",
  "key15": "vjhye3kHRLovZj1ucLReCbhQG3arsUJ2rVVSjPE4Gro8wRUKwwUiVLap3MxaKFm5qLdbPvegLfeCnbRHdpD8i1L",
  "key16": "MJ9yCVBzxDtHYZVPAX1mw3K7HBgtz5E3r3yac1XKXNsmweKykMGQdi5r5o3EycHmXah9VJxRnNdWyzBUAHBHM5n",
  "key17": "3DJ9RD2FPJPzcsmZGWDxxS5fvvgSwXjK3Rm6jLWYSYMjvxnvth9QpZZHzmorB8F9dWc5FQ2m4BYx7w1TMnFpwnmz",
  "key18": "5bTXyazYfoPneeF45reZMnbUTmErVgnykzTEcA9EMXh3fhkkG8Ys6negXPTG9orArFDdV93vj1T8c651SeCeYfsP",
  "key19": "62ejB8K5AL9M8UbSVdNrLbXMu3YRhCZDogLsZwJ4neZ2mqvdpjg6Wh5KUmoxsyZp53qiure2ctC33vTvhp6s88aA",
  "key20": "5jEQMn6iW8fzDzonZcXNJcHGpRJvqJtSeDqizC8L3L7JkKNeuioVrZutaV6MeL5ZS6n2rJ8jbYWE9rmyv996TcpQ",
  "key21": "PYfJ8BqNWLTxC7PJiwaAPtoTwAosV4Yr19twq6vtBpSeEEb8XkQ6wYL8jqrmpUDrfVE34KwZNvdbNvcVexL1V3U",
  "key22": "GQCU98GNHEuM8aEvjosrM1Gv3gBiKc3zX4japHcPBRoHwFbXHnrSaAHaVbafBMCBySZ3n7hHgsfxc8nj4DBJF2Y",
  "key23": "3fuPCymxserL654PTwGzTP82nGjTBYMCVN9kyVxzdcTCXPU7udR8XB3c5LeV6sYZm7W8gY235XYU2jAoqzWSiq9i",
  "key24": "sdFeCA9UpebJEDTCa3NxPeJXxK6SRrJWhhjaaZM5cJKYzMc8JMepB5irgPfizgBjS1fpW44qNxaLa3e8c1nhiVW",
  "key25": "3Jv2vH9oQTNYkoRTb3ShwM2EkiYPBiFtmijKBTL5mgMoy7EXUshP17fd54EfoiDtJHe85jgQC3vwQc3eXXPHyq6o",
  "key26": "4jV2xG9XGCQFV2KFsC6Dot9dyWb5x67sk1RFVy1hnhKYq8fT27RMHeMzMwRy56rJ1zEDD5EWwxKBbJvdy6UdNnkC",
  "key27": "27ZJJewjy4gpHjPcFfc2abygjetd8zMp5wWBynf34Z1yeFj882rEf4AUS9qS2F45x3nzymqSzyHQQ5mNU6euJ9qL",
  "key28": "5n8oVyzNhp2xXHjDBAhjHnYS8Hvw9QMrgpuKz8TE2wJrvQgHEqo5nGz29MXdYqzDkq51Qm2xHQhcNyRZjjEryzz4",
  "key29": "2hHRRTbd3mcJw4iCFw7qirwHZaiEfDsApSFd1Gr3ME7vTQBJrYMrM1m365rLuh381jyt2DRJAayic5dt4e6cMLPg",
  "key30": "4YjNFrA8m8fB58sY8FrMcxjX9SWiLwZkZzL2c7Tzzg6zx9p63aftZd3YNPCGCuUBzFexoLs1zNweM3ZgvgnVSu27",
  "key31": "2cALJM2zWQxBL2wriW3W2T1iV1QwYxfq2KHXwPVLGBYV4xmWnH1Vd43ns9UNsABbEk5FCBQJncEgrL17UopRCc5X"
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
