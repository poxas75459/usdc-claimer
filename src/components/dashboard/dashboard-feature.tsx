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
    "5SDXCSXk2WhqFh2Hum9yaVAMJuFmgNSvcxpTMNPwh31ZodYKpTzUNeSp58n8FTYYXCCwZQZWWcuzYMM4zHXTMRnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MyKm8BvSqYR2qfQrVcQ57mdBG69nQ4q5dm7faWjvKTbLGPdDDio7yzmkCLc1SrjFYfD3bAijuzb6YjCGTZCh3dE",
  "key1": "5LUyRLNA1R8Z3Y5CLwfd7s1USmcwAa1XLrzE99AwNT1Qe6eyiujex3J2cBKiPdRgRCwbWVxmBMhJuKLADNCtFwsq",
  "key2": "3CUrzTZavyR9sTxEUnzyncbNYoEM45LDfzafrhpNczMLjXBo1dU39FVcLPvWtnB51HGCo8nyd5JXu6raRPTPqy9M",
  "key3": "4woDKs8N2B3pyxcULmcXsKL29RKexmi6eEJMwtcPb6t1iMAC3V8CbkcPJZDFwnjZiD3dTYXYw5TiL1QcWT8SMk4U",
  "key4": "7ZNU9DMS32byfLi5nz4UjV3Ygfxi4JrMJZqmfZfLgYqFns5wkk9bwk3Vrn8JbQYtR3b3fusTx7V4oHEXBXK97WS",
  "key5": "2ALt6JEGrnbA8KpFbhvdZomKJuQeH12N1jACbsbpgG6T7SLXDw1jRYf2NSbCe6FcqTyP14BmB4P1yWWz8XvosHM7",
  "key6": "4fRYUaLD1TJxD91brDEF3GnSD1YJQXeg7n4sB7egdDyQaafV2vRT4Zt4yHugJqqYsBTEFWjFm46me9eo344HCJ1W",
  "key7": "3BsovfQVWuwDW7iWgDJTfkdtLHSYY7PJu6eCeDiCZVqukSNuaM8NgpJUvKmDjG4szqX8MPFd99s93UQMCdqdqW1z",
  "key8": "2hdd3aUJj3izz9UasVxmAnrMAahP5QNHzVeLf5pG2E2pJhgigoSeJdGKkpquveAq96boh7g2DjtSU6S1UkoRaMWP",
  "key9": "MZYncjxvUd49hYzesUoSnQpFpMDemj7hsQXH9eFBHpwsuvm3NmcEiv6YKuQEo2d3oj56bwgfb8xnEADQgfvMNN7",
  "key10": "A2fHwSbTYyDuKGM7EQ4VazyCrMZ2LfTz1TF15ZiqYnbXLsUMkQyiHv9JVAk7y3bTRE1xKskD9darVo6JaPFvUXw",
  "key11": "EnjGVrjn3cubovSkkTJzrtmrQAVfKTLmDj9DpBQUgacGJZFBaax1W5SFM9roZeZnGaTZEdv92ZRBZm93LcwaDM6",
  "key12": "2QZsdqU7bQwmXrDTNUcB6xbwXoG7ejRnz2tVMW2mg2aTntFwYNkuK1RjpFoyaDqyXyRVur32H1GGmFP5T62Y7N5T",
  "key13": "4uwjVxByvFTyguDtvZmQcL9km7dmaTj18wdpwD6oGhgfZ1noHskSMyiuAkVyiL1CSBpV344VMQmnCBpWNCvmhtrG",
  "key14": "3DuQ5zkARG2jQPnpZJVKuEo2xvd81kzwz5rpvC2ApKd9EHGjjprCjDwYVbc4T9HgMapojspjaxuDuX339vtzyc6m",
  "key15": "2j5AKkDkt9wMiCvPP7bkp7t9rmuyUZQtqigj9DSqhyKa6AiUHZRLEeCNBjRPuqSzsBvEeZyUsVr7HEtVfkUaCo6i",
  "key16": "4uPyVVWvVLBczJSUi1duoF3Z45gjNjKHLxAB5Fh5qpT1W3ceeeZ75A7fSdikSJR28DmzmpvkiPVvVNBcP1DwqrPs",
  "key17": "5T7Eez1PSTFnuUu7Du69GDsgXaGD49GCVRXEhN8Ca3q1M5shiUD5SXT5zwcAAmFViPwdyJQLCNsvKcyvTsgK8uR6",
  "key18": "3113j56GCniqy8NqocDVwmoPYFFLn56LBDpMEcXPn16zoF1JNNkfiDPTEBkFYDTbLfE198nFw6WZK1jhFduTu71P",
  "key19": "5UeeKNa3CNGMv27Lb3ZYBV6TpRpwhxpxUfQ339uspDZLEp3UPkzHMkRRYjqewhJdnHoRyqKRC5XGMiJTQU9qoy55",
  "key20": "fi5MFSu7ppKzr4jXFwAgmqJHBNbn2QCKD52Z3DcC1FgTtL8TjQQxKX712W9oEChVsrMVuBJJvTyc7ZrgHfPjp7R",
  "key21": "5yQnQTsEDt21MDWhLfRKLymjdyHaumuUdvLPK6eEvmGp8BW7gbQrt7EcYp7HgFrw9tE31fkL6XHkYxK14UeHWfNK",
  "key22": "4XGFo6Ab5b8VaTYFs51tGvf7MHFskfvoPDpxntQ9HCbGosF1U9DCNMnj59wCTFyBJqX1asL72aejohv7vL4d7s4a",
  "key23": "4mVXA8mXmMvn6QdErvaHA1yZ8MRg1dUur4smydTasioHeqwjDaPAnj3iVE5NZsTPxFRhVN4cpieC1Yfe1nm8T77H",
  "key24": "3uyjy2zB65k3CdqnCacLfBv31fPCXSjqMFzf9d6BgnHivAGdrySroe7765hyNC5hNKp1a6bdJL66NGX7SLXRhSxE",
  "key25": "3uK3CGjBH2kkVjziUrCFBJLwTcC2qgoyWmZqsUshoeMa9sbLT8G9qBEGVitZiUv3vHLd46GU1BGvi8yj42NJogWy",
  "key26": "4wozfbNR34nB4MWX33idbdfwDzNQXRLfqaL7TLm78qCNf9Rix5siJPEcWaaLhC8HT2uDTSTPmjZktctmN72GpSra",
  "key27": "5z4humr5LjeqDs7GwQQNVG83aJB6bqKFmyZaZPYsgFEDfLL9aGnxKpNxP6BxmENTySy7qY9eL6JWQZahN7R4DHz9"
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
