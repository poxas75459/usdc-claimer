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
    "26CHHkHFUFXpyCnZTZHbvjCzn6tLEbv4eGsG1ZcVrd6ivEkJYwpK6DkXqLvicE3o3X9EJf4RYXw4LVUrXKpWo1uz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24gQfnZtXXZJ1KGcoVSR5GBAFUdLASBMjq7tze3vjqcYZSPHqW7D7dDDjYsRzZ1Q1yEGkHwMVTQB1DZKrvWnsfym",
  "key1": "yemTuFSoXqhkPGWrjY6qckCmJejEEbBVVJUVzMXw8czM1sTLNFbwT3Dmnp8s3Waw9iFM2NqywSmFKSwDBfBAh8D",
  "key2": "3giMfxqDZSQmmfB67fSyvCMd8nLv4SagDKKYgeKR899tuQVCeZ6dXeAtp8xcLVFhxfH4A6f5UpuwD1AgWTYJpU8t",
  "key3": "oKrf1SPCVyAB5mG1h5imNUh5p1izv23p5vXaqhdmyXoBKp6H6QBtpMmEAvMcE7kmpRXvGTsczyW5nLtbZ3YQhy7",
  "key4": "3qAfy1YnRpn8TexXYCF4S4ZUWE74z6kaK4UJg2JR8o7Pt3y49NTAKA4XmGoKHeUXK8w8gSXwSVVNQ3wu8X7WYAiU",
  "key5": "3k3nZUrdCLjC284cJrtCxfTunEXSCJg44coKnuGwQ8MZfXfUo1WaXrQy61CHkMQzdqnMCjXQXi5a1vSJFD85hTpX",
  "key6": "zgup3SR8fu22hBtUdcgvSspU9Kf9FxTw8v69ux9cERZs1YvRrb2eMy5v9LnZhetwRonhg2oVtkvMBoi4zhrwr1v",
  "key7": "2iWA2uciDX6oYZZnNUt7Q1unL7ki7zGmNjehAcDf1vjqzHYj1HRShNn6x4sPKsD6Jrd9FpScFmDi676ZLtnCvGzT",
  "key8": "5XztUrCmBNqRQZ1b9JDFjoKe1PBTVkbtQCbWYXu15m6F5fq3aWsVjwiuH5qnLSFgeHinbEjgq2QH6krVM1MnE1ev",
  "key9": "559CDvoVKdF88JEx7nGoCQWCBC8tmqiL13VT7BDTMxEeqnoLXqTzEtkSVJfB1iyoojH1jG5nzafbtU2kthEsD6PV",
  "key10": "b28DMEK4GS1ZLrFMXm86J8jKvoVLqX4YQn2cArNm4576iRczrXMDsiCsiKXyiooaFEgb1Fj7nDx6nSYqqdC6bzq",
  "key11": "Fu2ADpYQGNpuCGmvk3ieeDQsBsbnst1RQNGMbCxM4ZdzrbSFfJtz8HhaFLXetm8FNHx2X5Wxaf8NPsg14pP6CuZ",
  "key12": "4UZboehYuyN2EBJmTpfFo7SiFr61HXjqmEsgsatpHHWUm6Mbjd6yem2vGsCDfRrtApo6YHCyh6MxqiH4HGKhLSTm",
  "key13": "461oBX8ZRzFLkzJPKXSCnhqucqWUBQK18KyJQA2rmJPKwB1qj7QVXCAePpwwN8axCqPSsjbkXGCwvsyEd3vAFu3f",
  "key14": "3RkLBcfJbbPVtarM7uhsFeC8aKMQKkkeecXjBKwk74zNDZaiCrrQjWQw3yYVvQWmMrQM5bvFwNXDjUMrBvkapZLm",
  "key15": "2a4tV7UBF52NAsGLx7v3eHvEzEcgd3AQL3JDdxU6TC35q9HNnykSfJ1tQyuadqSxsPdT5kayAtmby1XqTx5Ndg2p",
  "key16": "2fVk931ZhqvoJuuasHDCNWQD3kQqK4WU3bqNaJbVzbSjKGnHfd5sViua1W3uCN1DnwCatLY1edRZSVp9uNaZZZ7b",
  "key17": "2Cmr6BEDnwJSBLuhLXBeTHSEknwBaZMEzkukuBL77WGQeEoyihCfbRorTMWifXCr1jBGcN894bTm39XrGTz9Cxjn",
  "key18": "3xvM2E72JGANP1DWWSapSZVeb3VLHSTiDsjXXtPaU9Emz8SxakUdeDEBJBQe4hcDxfcqbcPbhaZjA7AQ3jorPuyS",
  "key19": "3SafDbB5kGmKSFBsHi7fDBCvvXQn13h6izNGdukKX8hUFVEXBEaiVpDTQky72LBMGCPWAqViEWJeaUXhKuBj75A2",
  "key20": "29svacBAviqgmXdU15PcoJLGaf7imfQHVREBCaVheqXRuDUYaaEUPXq9x85jhoVuVeyqG3scimsk79PNLU6iqNTZ",
  "key21": "2fjK2agDpAPBwtxBxwBmEfwCDLNBdAKxeeyr6EYbZeYfBgnbM3hcJrekPiikuLy1ihFnZErmVZQZNpMsWYwrGYAs",
  "key22": "35ecpgpgHLqmB7szfnPGFxYVGJp1ZFG32ZZYm2pNVdPKNAz8KV6FzpNYSDBpCrvazzFvZHC2DhWeBwUkUevPDAjY",
  "key23": "2Lsri5YeaCHJhhekkDmMM1JjmoovJkEGwHcdtNFWhMrYfs8AkfL7S5cmB58SGA4wwiV1N1r6one5tf2NQB8HceU8",
  "key24": "3npTdaxM8S5bR12eNA9kzkFrmLhkAu4C8rNk5SJGnvKB6jPs3aeFdkcP6kZ1cAfD9Uh3DLykkHMNAv3kvoBeLFyM",
  "key25": "2RFhQfSnWJMq9jJowHKPhbp5EQ2VhdDSbdnDcuHLbxvmxaS1gHgbw25tgannocTH5t4wo2xfyB4ayqVLUyYotkri",
  "key26": "5tPT3LYUGJSKPEQnKHM8BpSHUjDc8j8k78HZi8H9pbp9rSMqEJAo3wF52k9579Mn4hiceQkQ7hnULNeMp8zvkKRj",
  "key27": "2XWZnrexQLR7GXUCVhBmu8dTWSBMnrmajRwPW5DqoLDJxsv1avA7n7S58spWc64Wf17VutpM7kKwP5NNy3V3Xf8E",
  "key28": "2ydoSrvVDBqPqMoXwHUgYig2uKQBPdy1TSE9U9oCrnN8M7qnZP9VHCUSiwVKZkjDWQRaMAr5qBx2GPUZUSpvCguv",
  "key29": "2vBvTCmbKPaA6Pvk8wFPTVxsutRf9yeVAjoc4iZsCu2sCuq3cfpRbi52UrQ2eFUceFi9gz6gV5irrRTpE85WoXig",
  "key30": "2TgjdggZ5Qw5tJYmKaFkQkLgqhLJynJgz3VWEKRjdiDTA716ZuHxQYUBu82z5ACwU49GQ5g4ipgFecNC3cys4h9Q",
  "key31": "5NNgicgeHjs3qb16eCB49jGzpkcvFNeeSsooqUH1WGUcT5oHQSLFZ6ntrTdH9K9wSU68b3zMH6UX36Et4pjd2KVW"
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
