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
    "RFMFZ99LXRXrbAgU7EskjcNRoJ5WfLQY7zp2aM8UPdodA4sR6p8DeVXdTDPmhgqkE1ELYiTMcNY59sgzPTxpYjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NBDaVJKQYoZghUEPQPyLLXKsZphFZjdtdPiq1datou9eHR2DEUXgJJZz6nCtMkqVsa4Pt6PB2Pe8a1e92e6bAFi",
  "key1": "35nexxtBwCXviUt1kWHniuHuqXPH5BnSqwTToDdZMyVkn8XtJMV7EpUTpTfDbGsGVh8fkKoz41Gk2P57vZ8ka4tH",
  "key2": "3PqoBa9cTu152YNueQeWNVjGjrNPc1KH7qtPCPccKt38SVYMn7ybj3oPrNMGwmFL4S5ZAU16xaStRUk478V5Gk5R",
  "key3": "2jiY4ePY9MYcwBcZhJAfpBSAhsrGruUUstFE8PG2tGPNs1UuKxq5hGzALA3ChxxyZFr4yCQ37fXmLoocNZ8h3EAq",
  "key4": "4pyciHHmkZVvpCuGMSiD4aguFGQUasNA6EWAPfN7LJrzwNzvzfGJA38shi6ENCQZT4QU4S4VNSndP8YqxvjWd1b9",
  "key5": "73Qfm2xFEM399MiAMzjhg1p9tc4BXtNaGF8M7mQofPdUfsvhKsZQUqWt9WjetMYV1A49DVDshRGHins6bbYU2s5",
  "key6": "2ATPRRMoEGqg8v1uc8rxh89pPVNqTd7FsJgXXaxG1k2x4MvUocJsLXrgKcg2pskPo2imoGkcrjU6bN9RUSthJsew",
  "key7": "5xZSCiG5oHbaLcUHAmVzHGMyJ26x6UeTSYAvvFeyMjYoxcCNpmf3vfg3E6jvJDyMFQfrdeagvucYLRnWVnSxgrJZ",
  "key8": "4DCsdw81f7KWReLhuHzfQmkeXuDDGRYAK9GVojh9Zxkjk1SFbcEQAAUo3pbcKTUBCSDZgddgmKTe2Z78YbEUzgz",
  "key9": "65o9EiUpKgn7Bc9DtPeTX3FBt4fpzpcMH1Bi5v4bsVVNUhXBsibb9qh8YbMqxUYziWs6FDsJNgDd9D9srAy1udpi",
  "key10": "2zFFgEo7rdTYpm9N9PcjuUs1Hf35jtJiKeFSrQi8GAqibxEEBDajREb5CaruiZZkxVpUQN82Jw4RA9Kcq82KZQzg",
  "key11": "qeR9FA6eZqM8JVLf3cu7mV3WzcT1i4kjAER7bQXpVhunGJc9MZfoephGpFMSLRkJnxxGEjAzD6DCChiimofr1Ba",
  "key12": "5EpMAC83T3FMM5w8J6z8PsjScuUkUTaymnU6JmVdjrtS4tCQRyU17UWW7f1q8jdjxYz4ZRCU9Wc61t9nCDn6oYKz",
  "key13": "5QNvWxVoHTvzCharpWxXYmPrtyKukDyiP7S8JFT1JqRrwP9jGMWyLXYsivjwrdQk7m7MhhWjjopM2uY5QHWNwEz3",
  "key14": "4LpSPpKQTtqPXU2y4vVaHvzBfayDrJxKLiDTRMQvqDMcL9tfYVr2ueRmEWk4vYRDHHbsbMB6U2p4YtMZTNYkdwQe",
  "key15": "2JVETom4V9M7QNFGqVudYD8fcJWQqJaHedpe68dyJ8FWNK26eAd6vDgD8Nh2zV6oKuujQgFgWPFWnWg3rmLwWYS1",
  "key16": "4z9emdMapGxRNVtD8QmNF3XuJyKd5bRmybXKqb49EkTVkYybtG1QaTHqa8eTAtUgZo3LpKKNVTCj9m1C9EZDwBLA",
  "key17": "HHFFY8fmaKefqaAQUTMygCasKg68k7WEpLBv7Jo8E1WCWb5szYGGnwPqX8SUrnKXEnwyzHZAuGV3R48Aa1SHwb9",
  "key18": "3BFdTNC9vvodtuiVBHRCXB26kMSrBxTRRheXrowDdD1t6ixTbqKdVvJZvSucRjTLjYK5xvG6TvpSqdhyPqQK1zBr",
  "key19": "5NKvS7UspDXh3njar4E659NGd9dJPG5dVMv3NWyjPpArq5zjfNPAUs4C6CyABM8QyYVWfjthm5Gh5U9LUV4Si5iY",
  "key20": "z7gSaiQa828eG8yJUABs7t2L4Mdjs7DaVf6ZPdF3ekuS3hrxwufcZYTE7RRZ5jJoCWdTM8H7mC4ztKgMt3gJLtx",
  "key21": "3xSuWNdRJuwECodT8CP6eEN4szeBWMTvKuSXVQ5xciJ9WFtjKbUWfR9DyvPNzdnJzkd97RzFAWHWvhTGZycbHD66",
  "key22": "5WCBJetjiWTAuhxW1NR8n7JDxicxQoReyQrRcTq5sRKUNiWHoRm6bLZ7rAHNLqRrejqXL95wgcXw9Q6E85nesVLX",
  "key23": "36nbRcSpM3giRiLZe5yAbwTFqa9JUydfveqj9vQM1Toj6Xy1qkvzhjbCEXhWytHCfz9hqexnwWHXMnvuKnfAp7nw",
  "key24": "T8RKzmpiwLEwWFoNCNEV5unym546nDHbMDP2wuvVvsk7LLgPB7k3zSrzWeQX8j77VWtQ5okwGJCGCoftLwDqZyz",
  "key25": "3jGrSVjiZ2SRuRFQgJ4ekGtc9vEkigBezggdGKCJf6Xay87Wvk8noYFky2iDP4qhNyUQPc3bDE443gXgo346wjnC",
  "key26": "RWrAiMbArUjp6qf7jvunAd2r5wA8RN8Fx1ivHVd7exQERDrU9z5qmR1sLKyTEUUyvx3jVM6ACmQp1bEACGjHg7T",
  "key27": "3D2mS8yf9jWfP3AnYXqZLgYePuhvHh9LwUHGNgZwqvJEVHsuieXxyCdQYn9AkHawais4LhDhWkq9z9rirEhYWh95"
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
