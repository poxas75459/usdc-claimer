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
    "53YwoJBXe8JVxXzg1FENA349aj11c5HhM6v2bATmT5b4j3FErr7zWp4eSbPNxf5Dbo6nu1i4QDtgayJstLGX1jbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mgr31h6PLQyRLEfy5g74rGrYyru2AqF8cfguo1aC8cu4a59gZ87TMV4kugfbqwfpYM18veGPuezwz2ePSHnptVq",
  "key1": "4CZ7CgShMNF4JKa5hK4FtEJpEAY8FhUbBQHA8pFUTc8prtK6USfnwwJyxVgZCKTSVc4x9grmN1tB8gKzwxMFAuax",
  "key2": "4pYjAqxo2r7e6xVNWUwoqMLxY1thtnCPZPjLY3WX3LYtKqEbb1EebTK5M7r1wczaBMLFpdKaj53CMxeRzk3JenrM",
  "key3": "5cXvkHcUoR156NLjEratU1TSbs4GkYw25PLTMK9tGKYn2pQDxVUUZ7x3mLiDSNRcEQTDtLiGxDJftzWZHXZ1N6EF",
  "key4": "2NhDA2UBwmx2hB3Xpc4bH8dZiuixh9e3eWCwercugajBWxFZjuxHW4xxk9cVCRejt5ieqP7q7Eu9bA1xNxgJaJtU",
  "key5": "SFaiA2U7rZ6bMXf3t9cxwH1q3twUQWtFebqZhcmEGEUv4BacCC2dPNoQ9bWZ5movj51GxrfxybWLmQuwx118VNz",
  "key6": "29pMEJxZgGuYKpn7yzZhSRHUeHYEdoVsMehQYzDcNoTqJA14CXUaf5WJAWSiD12rt7CWJFKjs3JKWEVguFfBHmcg",
  "key7": "2wVtvzaS5xsErSsDoTianng4FTLn8pcu44AZBKHXvcSAC4HbTSgpSiwSSTzruxobS3DUJqsocFa5gAubLXnWmPNH",
  "key8": "2EnBSFdS6nx3urmbJ7uAuUkTb89KmJYD8UgNpKrp6KBy68mLoY8e8gQYJ827ihWL53gCyVAjf2FFtejKXsgrKTD2",
  "key9": "5zxJPDnTSRfZvY39XkyenVMEQ2HFr6jobZZm3WmDiDgpQurMQqo2eqSQMdYcRTB2ZZarojceEXJFjfX7WZhmM78v",
  "key10": "3iuD975QoYZG47H3iDWJ33rzcWF6CoN8qpQmAXF2NKubZ6NVwDGJtAFmv9CBoggmHzrsuP6GnbRAo58uQGcT96fA",
  "key11": "4PHBrJmN6xdx68eGq3zbvwd2m4HLgDpFH19YpKn6e5hiocKdQxeNHcD8aVNpS11MD6nnJoQrkHhxAcAksBW1dL68",
  "key12": "5A43Wo6tzTmvtnsFu5rgG3cTENmtFpY1i6sewVkiTibZmU7YM16qoGHX5NJNetqBC1GsQZSwYqfBmgziqbcm3oTy",
  "key13": "5s43euBN3ZRrCNjrfFwp57MpzpXzFXcmP6udCjJntPnJY7q2dsao5W8hgRRLZUfUPbzesq47zyhSUNxDvy8TaDdo",
  "key14": "5VZS7kZxc8v3aGvXrULdGsCPj9V46JXZdaPtFfzpYNMNxnNz2qXapEECU9X7to7vRTmkyqdheoST4QqmniGxAy7j",
  "key15": "31DcMtNrDDhcuS159ZxbqKEnojzKHdMgYA9dmnQZ9WmUTwetxVpG4ex6M8TyAkmCipxsEbjX9vQ55hpJFKr9QDFy",
  "key16": "3YqzgSrRynq9gj7xaFk4dwVgV97GJwzFc1yc4HcrY43kQKa8v6MS5iRAYok6zWSpRUjXMFSQvbHB2tQYqcW8w4Js",
  "key17": "2HqRvEfQNqiUcgffWkPV4sYN6qkvdogw6z2jVgcKcYZCKezPdQe6ibvHXmLzNvTvW2JDJdqRH2eN5VHpPXCxM2za",
  "key18": "5U2nkh52Pq2tvsqKsVJdcZbsBEqHC3umFTJ4vpfgakcB8bGL82F4TSxf25fMGnSqhJjteC4DRQEkLjvKQiQRaoAE",
  "key19": "25orMkcFtxhUiAeaDYJmeTqM5QTA6zQksN9oqqBPPKBWMVhhvXYicWQvhsKiZyKWu6ZTg1YouYLz6hvKJBhdPoij",
  "key20": "3W4w1u3AvGD1FCPyESHKdQUa8YJNWhjkwRCxzZ87ydz3Duqd7ZLphTbXJJ2K5FTiFbqr6UjZFc2tf1bGXenyki1Y",
  "key21": "XYYPyoJbkkSyx1PZGyTokgWf6ScYQAMX8uPbA1bSjntzGra9s3e3ZNc52NUwkX5AF62gAPTHHVaMLrNeBq69Y8Y",
  "key22": "2EdVVPYzqnU3QtFFy9xDHqYL7Z2Hp9Hm7xHcVXosXvKwZwpCk2cm5ve5DyJ9LcwCxRzaubi3DW7A9Yny2eZ3Bhyo",
  "key23": "bxg1arJbmWPudkqZGG6bHzMmxuiPBpzAdPBy9SfbriWXPsTWNQD2U89touJQEVZ5vENBRue8kzswXT4Kqg58BGR",
  "key24": "CWVih5GZEv3YYM1B5J2fS2bYrQZGk3BNyUHwmbx9UzBAzqF2s8uyhAe9UHbTpwxzjA4uyVKG1vQijEPDPaG6maY",
  "key25": "4dN75A9aFPyGb7pA9mu6cBCkMYFhatoW8YaEvLUJ5qC5BfJjCzbCSUfcXig1r2xSFtDSm576H4piVyS2pDs9HP7s",
  "key26": "4wu2ShYSNVdNpdL97UaFznsbzeo17ibrPrC6j9EHxiPJyDomKBQgmuxRNBb27wHaNPXAkL6cc2EipYjJ9PXNxX3f",
  "key27": "3QDozLdDoJRZrPaDJdtrHtaXsPcr81AfZP9VSqYHwWEkyY9pCPXmRGS76L11quGhW68vQN5L6nCXEMYcv6C5eQgg",
  "key28": "4XPfjvffjbBC9GW5EEm5A2befiLYkv28JoGD5Qdkuxx91EQLu1f1kBUfFviUq6acA31NDH4krYwGEsMSnajMrwhS",
  "key29": "AREgz4RbxCmmwC3suDzDn1vtLyD99jMoKE7xPiUTDC5Ez3j3o3nX79opmcQDdHhGc8xpATAAwwV2ghjZ2CdCNTc",
  "key30": "2KPT7eHohQoMEz49qFpNfw8tyYQiAoReEBjtP5h4LhkM3ARBAYWUFnPaN4YTZzpzCbLnkk5hz5TCsZr7EmevFFad",
  "key31": "jzdHrhD3FU88eXtYkdNp9xudeeyoCiKyo9ueM6AVixUSh3DBzWZWbNmoqHGCMzEkHJE239b2jj1RwVe3VeJLwz8",
  "key32": "4k3MD7vHNQGzCYjLW6PYCB29nRDkkwJ5LrSq8dG5ksTmAc3TFs5G12hCpnpM4Wfhw1oRjpszoTtvYx8Am6teCVfH"
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
