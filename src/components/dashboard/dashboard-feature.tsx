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
    "5MeCXmDbgJub1hAZArkHTMNdBcJ5u4NoBxbKjiX93ZtgxHSPHiwbTsJ2htSBTvT6Xqm5mQ3jNjqpnarrksSLjo83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "216uDUcVDnq81TaVkqSdsunpzLbbxEoyCs7Q9h3niAuDdGAFGEcbogdc1ycMDv7WJ4xv8MRLCZa4yJR5xa66szRy",
  "key1": "64NPsigw9sG9fLJJhxaZyqtH63fxyL29eaLdQ7X6HZf2q5gWZoi9nsNdzWvGV9z5xn1NzXiUz6WsjYKjXbkEn1fn",
  "key2": "25Jjq3TWdy1SHpoRetzGoU4p9EsZaoBjETsKwmTPRGthiEUHnPhAwmduCdRe2VFFEuk4ZYFs4mUJcKCqNfqKBHXH",
  "key3": "5sbaDWKVmehL2d3dRC7odANiagP3o8oKHH9q3mcJGMxkxR4E84MvF1eaJUvUGEFx5YijeFK5mVEJ1dZhvLGrCMLq",
  "key4": "4mCyFuECPPjAYtmoKDVAZekeWggn1PT99yC7aCZ8Hg4FR1isEaMW3jvmmTJHjhvLwoDJMKRiaD8NmAibBXwzkgNr",
  "key5": "3ceBvz4K8YAdupxhmtfF2XBmPam3cFsTehBgx73wJzVKP8Fnp2buQnmK9mKKX2QJWPo3519ApxFfCUA1jStmFa4y",
  "key6": "rvRLEYzA7aTbmxZqDLpRC7jXxcGRjwuoUpWMLnyjp3F3uKjp3dugBzae2ndbcKusFnkGbY6ewgfhF4i8oLbtRsP",
  "key7": "2FHBAmTZhCUxQp7RPvXG4e5E3o2gfaCdaKZd5CybdzokGme45aRYbE7Ge9hyhEdx2Hu517SXSfN1s2ukSvMuvMB3",
  "key8": "rsRhJSgMtV9pbPgugFxsAeGDYKyNeLRqCamJonWZXbS76T7EajuPNhNSDpHbBYJA6BAz9wQLEw7Kzz96cayjcFm",
  "key9": "AgQ7fT34QKNYBw5XN5fc6ckDCAog71PfMJiKWtYAUREiwgbSRa6rpncLGaWuFxwjGEzHEJBNc9ESZPg3L2aSKNo",
  "key10": "5og3fKZSmSUns58VehdtoG4bdaPghC4vArcHazbPirsye5dmwFFL7gNXuM6q65TimD7kTKNgXBsETkTJTmSE8Sms",
  "key11": "j2L2BtQwrvB7NBAYPFUPzKKjrRuarSdt73U3fSTvsgnFG16BMvWRkxJ2RXSUTiVLR9ahnXvEdQNHwqTQXkUeYi2",
  "key12": "wJdPpjUCBUU6an9rLwa8xyoRGsoDy2Gu8BTjUtw8LaUXcm8eRAzxRTBdYMM58RR5dTMwvKC9DitZWbF6eWWFc8T",
  "key13": "2cNDNT13zTgCKsYovMR67rv1ryen7KXWtAQhPKGAzTsMp5L15cicVGorooTQjbJ9pbfCE97kMD2ah7D2rgYfXyKk",
  "key14": "HxG42hH4VuLE8nLBrjgCkgn8347Boc9cB6EnBBxJ6KrFbFmdd1HpjCy5X6tBqHAyQmGw3bRBoeuc4jZxyTQeukY",
  "key15": "4t2RV3BUC8k54hJ2AY4zUFibhw38sNBmgeHtuBy3sc17UruPTqVBZzdc6g4gDLZhMmwb8m2dFzmhaiuFpeeqmnM1",
  "key16": "CW4YPi7EtLSHeDUVj21f2AeqpPJqfqMrhRQ4nK9cVWVKYWuYUADYZ5LrGNh4bejBd7PDbTCYFFhPB87TZFuB5Ax",
  "key17": "23Ebe4Y2dr34V1VFm9fZsKAMbdduAtQRHr2FTw6mb4PFq7gGGMxUG5kAk3zUmYVAbXF4F7xJSYvHV4dvXLTjXQAi",
  "key18": "5f7yUCFd2dZdychRB7QrBEQnMnnmgk8Z8hUJgz9LEF9VyEBQ7miAvRuhgo8KpkXJwWFnfNX4ExdeJTXjHJT8rkBi",
  "key19": "3Ac1du8WLgbRiYxAS1QBkYYVP5H5EMnCSTVDybVq1RDiqa7C4fEX2ZxjFebvSncPLcDbPtmjLLgcHxEU8GTmPqkn",
  "key20": "47jXms1E7pjRZvWUZsMcQqD5JvpYkVuMcazPfq6tf9w8QRa2kKzXiCdcittKxG7LiwMzo4B4JPd49ci7KDtKCEw7",
  "key21": "2hgymkasyFGLmoboYoCKGZqQ3Co1MnjAJxNf3GqKrt6ijRNb2bFHbY3r2Tok38e2btSbrHVUpRYgoAWRH3g8GKkF",
  "key22": "52rM4sa8yAL4sSV4zc856He4Ezhx1wdLu6wpvJGZYrXyu4DcGzhJjsNcdEoWHZ2mdCmxZpcKbSnw3KJY15ui9u7m",
  "key23": "5xpsJutREaDNmTpn3r34z2dzrNNibyfBhAcWjaSrjLzKfhudggkV94g9crW4cRPNYNqskcwpTAZt4U7g2iT6G5te",
  "key24": "4KjWBYUMYBumW92DaWCqBXYc5ECRunmap8qvQ298zbvL8UTtnJRTAJgcwTEHWtFKAPNMsHVvY3FZNviw3vMPyd2B",
  "key25": "23gpqnDcsb3MKK8BWSjTYiQk6q7rgRNij7uExaGZ7TrPzmLL7Bfze6q3vCtgFFjcDgii9MPBt4cd6cn8ChwGfsdJ",
  "key26": "4fcp2uVPQpuvgMvego53UDGsmtHLrNucAmvmCAaesnnJbUDWBAuuDMuoQjg7aj38aCKH6qoeg4HwrzbphnkQ93U4",
  "key27": "4VvGU18rKWGzWfuPv5HwBBgndJ4hxXLpHSB49MtKPryGdHaF4FytpT7oAsYopyW4kNNjWF2KbL2SXZnvmKTen6dX",
  "key28": "3WgdynqRUnaH9veDhRUc4J3U1mqt9z6Bh4iXm4J8Uqwnq7qGodtxXFkEtPA63YDWDAHZgry3CuogKQyQMssXrqbW",
  "key29": "2JuxheiypNAJ1XBTAjWLSQbBx7zswRir74r3cEgYHGvEkBeY2Lj4B8bJNaBf5yX7Zv8KhoBk1uM8SuZDvrk21K5E",
  "key30": "2KPdJKW8VpX2R436Kz8vZEXbejKSvnYuieMjgN61bVcmUvX1VZTZhYAhNpELHkrXWnNuLNky2xuxGNxUA4i3FLVX",
  "key31": "5DKRQYfujwRmtfTihqzed597rdegZBKcreUvECMG4no6r7TPfMYfzkHtyZzfir68dwtzMi2ShsvjMMw4bHcBnoRp",
  "key32": "5NtCa93xcmhevGUfkaHYdbCWkPy9QKreawt6uwKBqsBf8WpBJZqxAhTtktmWLVwh4itEUFJFNjnK6nsZwg45btTY"
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
