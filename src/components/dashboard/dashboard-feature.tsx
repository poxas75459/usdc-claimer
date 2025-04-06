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
    "4LmGssDUus9xtpYAuR7JghDupBDRCJz5ZeeFQE6gvQNfAudPcqueTRj3UdnNjL21CdeoYCoyX2NTdhgSuw2Bq1ep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TzKspM9PPaf8dbB1a8BtX481Wh3X3z37xg2YhcCHmHTPJpknqZkycWQjYXW66E6Y7jUxNETeKcVoJPgr1BLodm1",
  "key1": "fPhWsFnXELWwzs5tf658xcK4RBNmFJrndinqaG6Dy2nB2GAFGjnMWBU2hRmzYqSekafULxmB9PBRnyH9rzCCyLt",
  "key2": "2XKPyHRtESHM4G5HnzUUMJg5B3i6DHai4VKbWQcfMYdNZUxfKGGPq5tt7T5NwfRochzno5vHeevoVa6kFreX5j1f",
  "key3": "SxpVwPeywkmuDjr5awgkYHsrKc2XaaHj94rELoipEidUjBim8yp9dFMMTAFioytXELy5WLcfiYyfGNvu2DZ5MLK",
  "key4": "48qYXSr8rCgEfPZJqSHgd8c42mXucmvqkRT8LTYFPypFpbN7rAmunfsYRK4jAj8pjeqxqWXAxGybenHtttzdWbyd",
  "key5": "48SXgeTiVU24U9fmjUzu9RkhzA56n9CFMyJbpVD7KvJPV1y9aNytg6w5vdDbgTytmFvRBmev9qodMMDFX5UZHXze",
  "key6": "2DoB8gMF63WnqkFQCwfhS29BX6qpq3YSa3pq2AVQtxNHmUWEEnY9YjA7oxu5xNRhFTe5NuKMmw3vsZ4dKuuSwbvX",
  "key7": "24bfcbJz3ppNyseer7cZrB37uKEKfvzRRFYEob7cZoW7Sa4MSm4sPt6VmrQx11xae42L4kVVFusWdX6wQyfFNCcS",
  "key8": "3UEeotwB8BFqdnK3uB9XWSAyZMrxLxquxFxRwiGaxSGqs1hvfkfndAjDaLvTkxkVwLBE9h3S1uqG7rECGuUoyJtx",
  "key9": "3QuASGvDAmEHqJvtN3zL6oj3dofkpvzYaxq44Dt3XCZxrCuBrqn7fe1sRvadDE66SAevjBja5LkuxM7UNMpn6FWz",
  "key10": "4FtJ4ojpT3LUv3CZidVi8KgpG9eCCAn7d3Z9bnUfzHzD1VGrYaCgJ8J1hRuuHAnNTLbypa3Mjok3PXRT5K1dezBg",
  "key11": "4bkvFBWEkqScJ3yqcv8Co3LaasqqfvYXs9xJMfDZQeA2jHPLRbuvkJZTvZUgesJYquNsKJ5VCDpYmt3RmSWHHHLe",
  "key12": "5zLpHbyJ5VXHHM6239GLAKDqWv8SJcB2gT8C2DG1UyKqhHGFo72xkMgpAiJpgLj4tjtioT3HciGAYuhL4xfrbLw",
  "key13": "5bENw1rY3EkFCEyuWuEeZ9Y7aaF4CQa6gaKwx2cnLCD8kXj4wqxmJMi7vjQVmqnkum9fQueYML4tfN9GK16LEfZJ",
  "key14": "5GYmFRx42UmNmGCrQmdbRAXur8t1qfh3WDe5L429tmeDVzPmj4mhPeZ2TbhxnuXLgpZd65cc5z6qCHLSfYueybsk",
  "key15": "2WNqg3JF1WcB6Zqy7p8NCutr3NdRKNVZC7cE5CZYZwpww4fbNhiCigYSqqajnBo2kQsmw6RPPrwwgjxqSPNFmPuw",
  "key16": "Am2YcRmQ1q8Q2hxN7Esx3sWCtb6LyzGXdSBm2TaR3NtJ4HUL7b7bnQj68PNMPm8vyLDWePiGJnpZzpFoYEY4V1Y",
  "key17": "4fLhYw3YysFdjpB5iybTmwMaErashxPBHMkap1DgCT5yws8M3rKgqVnfTx4NTyq5EQaEZEF3itBXusdyVcinfaqK",
  "key18": "31LohXo623j1gnpYqbmR9vXpoTQKdGgVumowXX3kDwRqz2MJKVDwShRLfCrPBgM2ew8hBpVYESU4iW9w7KB8ncVu",
  "key19": "2mUFFFgByszuLp2UUZjUyYWiXWmVpp71QNQR7EqwiFL4QiKfmJdmJHsdHXuGYrV5efjoBzRthpNaY53m9EDE9XRg",
  "key20": "44RMisfmYvAbMy1EfNXYUxiqzTtbHxe9xDFn7cZYgmnvt1P9YNKRFQxe7evKZZmELQ5xwY6qSmEAReVoSBSDccTn",
  "key21": "25FsYdu5shyqjTtRijkTnewofxZ1w9EMxoMEtFDuw8QoKEAZ9McNY77hvbNHdgsDu3DjXFEKqJ5kYfw4sGenetxC",
  "key22": "EfaaJgxWEBpFXgc4RNuM5CCTbKzKciHqhtCvP3ctjWADLc6sjC6CaahC2tqz6agKNXDzWTXJmWcYZJ4zVmJmMxR",
  "key23": "5wVWP1K1bjZQr9j7dTajzgDpbCXADvyN3n9KKWCT4EDHvyBBEVDprpFWNr2Bb3WSfdu1KnpjcCX6cSd4GNKV73oc",
  "key24": "h7yqtW868a5iHzJakDECDyC43VNPJf3cYqcUgaTY4AUY1a6YqTDnLYjuRYvg5gVdYAcmWNThmkjp6EPPkN4MySQ"
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
