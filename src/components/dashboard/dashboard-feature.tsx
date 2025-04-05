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
    "45gbxH8YMKG8AnUaKiuJ9XmK5uyQcUG1SsnNXL57UVq58wsKFQY1UELxVeUHgVgc87zzjNNxa9EuYqiXwNMPYp6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vEDyJnjHSyMC7ze5C1B9SzKGegkQrkYi86CQuv5RBRW99bZ4Fuh2njfdNXKt67Jed3ZBWyHX8FzTxzbUfwtaRsy",
  "key1": "5ijVVSTsS3PB9z6UB7wJc6hMwJ1tF4fPEad3Le41LQ7BCKtUrPZGfuh6UZKEgoX98gVTfMuTNxbrr6RWdwgpX2PH",
  "key2": "3aouueT7u3CUp52mT6rimp9UV8EsR1YShi77PmxT7ck4WK6mWkhWu2deagxFCX84myDzwLA8vX2CbX19zWidzufG",
  "key3": "4QD5mn9UNgddJcxPpJjCxqRdg6LZb3vXHACVSAUUgPF3CCPfg4evT8rDuJ8FDd3MQtmyKSDydawMgw6swB46jF6Z",
  "key4": "3knsDRct33eGFqAqkXbrnjcU9x2ZzTc75YJa5gXhV3fLJCStJKdsB8xQ5rGDEqxxiC7E4VXWET98ZY2ePCMcreLq",
  "key5": "Hdy4V7mEujGSe7BVuPbd5bDuAYX2cwhgt5gQaM475A388miD6c484PiCyk48ppVXWLhFNbLRMdywL9Dge1sqaEn",
  "key6": "5nkK65LLkTd8iXknjWkVsA5fc6jJNKsHqL1JHFjXNKjX7jpBhmCV4Pjcc92A57VeemPpAn7yYHMB8ZunYbm31Gfe",
  "key7": "vkRmrN9yJpmoH3DQmnLz14QD1DPhvuW92c55S7PpgijmTG2hFg7dh115kkeoZoQGuqZGej6R9Gq3jxFje1yW9kB",
  "key8": "2rpbG3r4ephbQpSKRzQREvsHw84GgpPctzg2kQSygKgCBAHmHZHYJ4LZqjQD7drPjXJAAyByqdAQ8S9BrSLPb2xt",
  "key9": "hK3HM3G8Hqbs5xbiBbyof8hQP3HpUR7sC2eBrYw9pui6NN9hrs9Trj2Wz6pAr9YztC5jZNKBvADVeSErn65TnU1",
  "key10": "4J3Y5dW3ME1ea2r4mR4WDJxJiuTDieMdqgzQFSgqG2RHnv4sqKw57eYr1f2qF6hvkXoQMpzMba6EnsKVbYRSCkHC",
  "key11": "4ze6tvuZpawzPemSiNDKN6LTTNMMhz1Mj36KHhn7mLhjK1DzUsGfQQtezAUkBqTvFaUXYo2SLaB9vGVnecnkb1wT",
  "key12": "3yG8n1PdBoZsGmhdzcseTZcRz2YCyCPEKVzUdMX7UngMrNFpo9yfpB8UutADvoYUdjUoE76Vvr8kVkHVCVTd6pY",
  "key13": "3DgT9heoG89cRmMK9oP3f13YBrvzZ8V4kWkg232gTjBTcppuA2y3qC4cDLK2UUqvhLed6nJvA8kFrSnuodaCZXU7",
  "key14": "5Sfghte7hyPdczUXbA7Ex3KzNXj9gQ4U91bJFkXQTAiyd5kA7i6yKaAZGPpvshuwziGy3BLBDZvC9iEtje88mt6q",
  "key15": "33FfigY6sccvn9RRY8D4JGcnbPQV2qPAURKfe2EXzCSzAGWDayr6dvVqBqNA5zZ8iVASzgqzXwAa17ZekTD9yojw",
  "key16": "3LDiG6sNsauPC17UEGUUz3vUPn7dcffFvZutyvuTMwZ5BL3AQGSH9L76ye3VsVo7ogt3CSFYtXsiji1Ltsrui3ZJ",
  "key17": "1QWQHxd4WaTKnkEqW5TLY5j75Fo9T7tPEuxmdeaNWgng9Rk2TiLJ7ZrGcne5t4j38fnAM7r3UddeRLHV6J1kXKD",
  "key18": "4MXCAtxkXjMmTxGsLqEJbGFKPyaCbLqYf6KYgNYXBxtBcTb6x5nsGVUhabcpmZf2snwSKSa8mEyW2qebBrZPmC5z",
  "key19": "5U4okDNTCu2prSnppokpFSBdiD6LyxAA5LfvkoHDrHeRMZwBZQ91oUxDsT6emePELbnYQuzdwn6KmpPDs6DmUisd",
  "key20": "2LKeBuYUKpFSL6EoYjazhy9HeoD9YFjvYbdAC5hdtZPwxkpAhLdhiuodb3Bye4j1qs4NiC3RHeifKCUe7zKMhzu4",
  "key21": "4NtNoYmREBhC79HeE4ymxCMheXeijsC6Z2fJrRW4s7iFjRUXFBAnqpfiPfQ25ToTKaspvqodALr1528dUAGzNxUx",
  "key22": "5qWSBF13SgzFpX4pUivsmYyVkKkpieEj5423HLdfC85ty4sgQfwA4EodXsoBzSuFzAmVA1gjnSyABGvLPMx4V9pj",
  "key23": "4wxjgesYhekWgYy7xAhVdmp7xWLDumysbZW7JaJ5p3BgSLxGeYhUzV1CQGQThjfZi6HoMyw9AwCJaDH7fzMZoux9",
  "key24": "M2jDWEWwHYETqCGP97hHWRUvBAQYQACLGafQS7sF2ieGvEdYZFcgs9p2smF56tXxZLufxWe9CWGUhqD4VhHiEdT",
  "key25": "22yMJ2cms8LYtd6FBUuznWLN73gw1vtVvVVTFh8ZG7VVxPEaYnon8VPdr5Qocz7xBC5C9ixMiwZ1foEqbdVPk12Q",
  "key26": "32GbQitD88tAsLcDdQPx1hHdayu3hDzr7vZJzCdf7i6NRdr9YuHCgMQEVU9c6ANqthwizqxcb4GxTX3HFMW37eSD",
  "key27": "ytqxmktrwBTAVjhqobm7h9C1uWEdDpkiigpQLpiiTrKFoH3fNVtaxgV27nxAc9RzX4W1qUkZ7LzGhBPb1AdCx8T",
  "key28": "BmcBtjYC3oKLGB6nmgrcSZ39CDaHEg93ecNHKimTZRXvQdfvG5qemV1eXKki4XSdNGGCfzGgX7QgYAVuRYvPNmN",
  "key29": "2zYW1TgYFCW4NvKuWFDUXZ7jnqLMxT3ym9w4WnEQHkUrCZWnjbsKA15bo8KqtYxvXPMxqrEuPkjxYfE4FhjY2Jb8",
  "key30": "2GATtNe343BYJUnYYnWmmUiryC1twjp4vo3Pn2Dk59DmA2mAs5n2732iBMC5zjqPZEEfj5iMMzfcX1ywgTAFqFmz",
  "key31": "4ECsyWLWWftesbrPeUTYneRvfiiw62NpyWjWVse8ZRFRF3kFE4eeb8C5AubXfaezcjtTMSRr15acCobVW1GhLgrJ"
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
