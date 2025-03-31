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
    "28KkGKYXNQHu66coQ8jnkEAk9eQq21aw5SCjLMhwNt8FevHhefQaA7JGfxKXgzoCSZkYmDsJ5fmMKQiDcX7aYc4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XW4ebWckVg3GhCyMWVhwnxpHyqPYma34ZgMqAZbCdRanSh1ejxW1nPEAdPpTPSFax7AsbcdMmsTbod29ULdDvqT",
  "key1": "ZkrbMBEjGseJvxzdCo4x5icRyEci4Vot3368mUa7CCYMpimZ7EUxAUncbHcwscX1tnNJ7FoVujyfHrbBbN4ovcu",
  "key2": "5GntCxP9dQjmdJ49d4jTVDtPcW5hAuqHJFnXfybnkPiB3re8Vpizrt9UVgJjSUNXqaxSDLRd85ZmNbtuS22VgSTg",
  "key3": "3CzU4g9UjabnrRHAUCoAkSZ4fd9q7UepDaPwiDdNyWmuzMBBj7EZ9tsNgkvQy1jmzc6W9ss7aG7haBCDBqSKrn5a",
  "key4": "3NVJXsZUkE8XCrNiEbtncpD8qL4VKZiCkdNXFb5JT7jkYsY5MLe4w7mwbUWD6fAJmutHbHdcpdtJCPjmpybsbKgW",
  "key5": "4srnU1iokuRVMc6qFvBpGKf2jSSzCipsMLR6z2G8u41UjdVuGW4UWgDDDjVJasa25zMUhzK1jdkkmuCiRvJdWcJs",
  "key6": "48e6uHGm53eJpMbAGzWLhkjASASjtyo2bE6h1YLQKXYzwhsnvgmsaBHToESA1PU5FJNofJRKvPpKap99ZzySVAsX",
  "key7": "2Gqw3u5phg8RERtDRjQhXu13bRVfbc3ayXSRRvGdAhWCEpkcipzeL3gzE3EHQ22fnkkEMyt57Fog7B7RGEUv5muU",
  "key8": "5e49AxUAEhZoWG9d139UvBrTEtoZTJP5u3CvGTRmJmJfYYT3dPdWKijjiDvGLeo39GFEZ4CPVA5nzyi2am4YSmzi",
  "key9": "4NEEeCAaEZKHPxFNnqQmfmPgDrL7zD5Q3Et55UydnVwUcxjc6JwQrPEpnUwB8LpcMQSyuDnsvEa6YUSZJ3FqpnDt",
  "key10": "2MFWNoh8aDXvvf1MPGv4Mya91HS17zHnxinKut5SjmC5HoWdfDWcSM28nQSD9Sqf9YvLj3D5Bt4wJYNUYCRNuuNH",
  "key11": "smhG2imUKehei6hh91TaWN2R3H1Qs9wszUx4TdJ4S5rdABTANbHZhbkKYdmFZKfARdF1i9VVsfKYceKqhsw6kCD",
  "key12": "3TakduaKMf7Lt4VHXL5jfvR3KiCixUryb5ysELZ14jamgcjy8k4QXeeA7Ke5aQQ3X4gPqcmRj3pUWhwieWPJf6rU",
  "key13": "eh3MBYghG7BXj6h7QXHngKdyZxP35m8ib4UGdz3KbUFxaqUWWpiS1nYjWGjTCmeNUXVAFrkubg3qAGFX6RQHb9t",
  "key14": "2Fs9sqwPBUMcHftMYgUQnybq2jag6LydFAArtjHNUy48pSTju8RT6JXokLtBTopHWcFGAd1guDKSfMpyR2pJrnNS",
  "key15": "2fbZ83Q4Je3CjQDXRVXhN2Jw1oQo5hU9WowpgZ2GU5134wccYGhw9h7VB4PEfTENfSMx9FzwZigX6UqsvKuXiA4h",
  "key16": "4MKA4ibbyb3bfQksMK7cGA36W5Q1kwTivwHaJJScrYz8UvK8ZkmegfbxDHJ69Mh5StLH29PhbxmjEM1mogRV6n4R",
  "key17": "r3vYEYt6QX1wNU1SJEd1W9xXfpx8yAiTZfWMJY2HT5T6RzQn55JzWRwb3eh3u3r57vHpkmZ6d1VpazASVPWPPA6",
  "key18": "4SQ1RrB6wL1QWXdPjDrzA2Pb58eWJC8vDYfovcHPBSdvBaTxLLvKuhTFQJh1DsSn8fkhRWSbvUwRymzRiunPxgN4",
  "key19": "GRUCuMjZ3Vms2fko6bGvprSfbJYCggwhcLD5Eek6p3M8kAtGyJj29iy2AiDGWjJ2HGSbxgvFbnMJBGcipY79NTi",
  "key20": "5iWQLNNviHEsKy9fJLmwCpZ6eXgJCEKVAkhm7TavRfSYmjK6FgswPQb4UCusHpzWkr6waH8xemKZgTgafqTyAY2a",
  "key21": "Y8DQZsmbgWSMHCxFfiqJktGs485qQSCWL2hhkRHdZHA7d95XYXdX6EcJdtME5NSuEFwXJex9cCck26Lq2Ksw73i",
  "key22": "vvkqg1V9WFrDuJkmKUTbsQnU5bZ4jMFbLn39d57tiXqrKR7HpFHNkFsWaA49H6LZHmmHXum4dBvQ25uHQbrdtkS",
  "key23": "2jV5mppfJpLpJ78FRYwDfXQJH6TWotM2Z6u6jyWeKSATfGCNADo7utpeUHsUr1McHae4JiGDMwJMnVgEPAJKAxt7",
  "key24": "ALpnVXUgHV55C3tvkLZaEZbiMWqfFtbFCQxQPhvFjacqzQUGxKQAH2nihQWWApyZHKmypT8NrkWM7MGZtvH59x3",
  "key25": "gwSauhbagK8X5ZvTh2oFkB7gAkBfVt9hwKx24gvAYifDmSjk8LPVXL8NeWuia6rANpFC2wbcpJEL9BtQtXuhG9S",
  "key26": "3eypi571tDYzPmaM2Ea3xJ7jdNj1pemFq9b9pS6ZMro1EQsVVaZedYKVjtnrFiQ1KEJxioSHPZMLz55x988aXjJV",
  "key27": "4cJive2Qebu568CzXzroyM4Dv2doExWhtS3FADdco6rLVoqF3iX3HYPbsnP1j4hrkwxAyjSkG5oiPo1Wm6ZV8dz",
  "key28": "4NfT3v8SqRPDSoGtYGdk1QXcrvu4674fVpxkQTSGA1LmVEtsaHzMbfkqQuxYuN9c57fUy7czQAAPYkywhm2Ye8kY",
  "key29": "2xoff4GWGfkue1m7Fw66gFSvF2NRsN3Wwhnj6YqJEzUUdyUYAxwYg7DnPwdNUhdLxXbmLvveiqmRNaPcAXx8DXKE",
  "key30": "2RuxhNa8P63VVp4khfAFDBDUNLpJ6TRnwv3hcq8v7VLRJyBQv8pdGuhHgvpWjo5ejkn8KmS3gqEofLMgb8GqkrUQ",
  "key31": "2Qmp7GhYvPJgdmxmXCuubEcWcyGyZGp2So9sgQyx2rZnHAJ1KiUhDtbsSdWybw87ai8qfuXuXo3GkHCwyPnNvd9C",
  "key32": "5BVVTPs6Y7N8tAoD2z9cw9FXTZETCvt7gZi7tsZ7rvYn2NBa6jeEg8nEWDLP9X9ZxAfA52umQEGrq9njGjjtrUod",
  "key33": "Mwe7UEDwms2dnqy91eL31rQQv5iDmGdW1C49wZHEp8nzZYtd9VHY56ynFJCamZrpo1cMmGsrehcoCesRzP8WazA",
  "key34": "2WPXaZXoJYDyVrjG2VE176G8LThXAWWsuCG4ZT9wePUgpiDAkp42iiajc5pVNQ8FSxvD7CXh1RLQiEs5YwLwhfVb",
  "key35": "Mp5yL2ZvFpqELrxmFXwUtYT3se142jdDoD4A6a1zjoYmpHsi4Zk3wMrLajVYjgtkZf6aZmGev4rrtmuudfm5Mk3",
  "key36": "2sA8Tn8Jqy5Jm7N6wssK1DdPZueL91Q674T7AJJsmHd7hy1MqnMFYHN3EiTSNUioJXAZNUoiMPVcmYxhagEXZG5V",
  "key37": "5uS4Mg1yT9irLApp6TcZX5onUpWEqU6p3BxoMhp4p97rGdsQwmRBffmPTHHsoxHXVj7uA2PpsYVPNR944kXBJjwg"
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
