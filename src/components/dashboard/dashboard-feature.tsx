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
    "5KYB9DcGBJFdwxuWqbTQxLoRaHnWsFL28tVBkqtDuKGLdnEsE3X2sHDe6xw664ttG1wKqfc5UZxuW2apxV8qf17M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wpFMNxV2fjRDLnbKN9EXjptPKVagc5EkGGzMeESh557r5NReS2eDZ7NsZTtCWc2HeAXzNhiVD5n1de4ShziQQcK",
  "key1": "4Lzk5ob3dbdbbV84rs8UBgJFAXmonGB7t8HFHYyt34YPGNdWUbo3yMzjrz5LqEW7X7jsxx7q7Cj9NgHWcw1Km6fo",
  "key2": "5SQxof1EVLWU5TU86bmZf1b1wFX593m1haGJq1zpQrspogg8ikCPY7a82YSUkz3jGwEbpsFAkiYyzwKbNpSxCvG",
  "key3": "2Caz5GwQ6VWmQjfryemrTb2bfKXhPFKQH6PYQaXP2savcRaoAUYzSnk8QxMaSRDa9Rhbmzpn9rXUDUnRjJubv6qH",
  "key4": "3PW6Cw9GVmKiemw6P3Rc1PrVNrE49HqsgN2XZn9M3FeariWB3ZJhtySEB9UxazACN8o7nfrcNdNoTNKMnb6mHrjm",
  "key5": "3K6r9zBHQnNFvLhjoajUkmP6LLbGS1sgTTQR1cdM8kDgfi7GM1acCBdm7s9PDjMqzYeYzKYhyMte5nH8q9XjxRUp",
  "key6": "XjRLrqzKAPq65KfofJyqyc37CkMb62zvqxYCeAZ44LKFNvyf9bDBHbyyxgVBfWeuGWjx4jt6Na5kajMfGQdNumi",
  "key7": "2c4TqRWPky7Yj7NXmLGXsWoMEd9X6qcEjpZY6EfGrnJ1Fa8wCPBiq23AafKYH3wbcRQijyxPiZNUu1T7wApBD9ju",
  "key8": "268TzCwr9ZT6QxyTtaXs97sDVVqELPtGm7rm9viXRTX3ZteQuHxQKCrHtWmzzttTyrL1PCKW4zrwSou6s2mYh6Yt",
  "key9": "4W4myefQpAUwfUUHrL913ViUykW1w5g459qiZHir57RtxMdV68MAhkbeirHGREmdCYg277PaccBZPbyZ9XiwYgLU",
  "key10": "62JrWg4ZRzapXVFk6EowYpEJtL7svKpFCYeA2H6Kmboc8bLBLFPkUYEHWhiV1n93L6mGhKBU3Bedhm29ApBvWxMW",
  "key11": "YCPUUc6bm49MDGycQr5YmpfCGQtnjyHHeuRCf2EFZgij1teHTo9NLmnWToB6PSqvKSBTLSu8gop6gXBMeMgwzQk",
  "key12": "3ik1T58rGa11pc48MxTYAvZRContLh3LA1kpeiF31EWuobeYpJFAjYsetftuf5bCQFme8eJTTLKhgC7voGmgHGCV",
  "key13": "38Fq7Qcmp1EGz4wetSmSngxmDUKWSDEmTSz4QRSyxthWR2bGw97KYD9JgejBaxNS71RDkTtNKDKHYsbZxexYbTGA",
  "key14": "k134ASZoM8uVwuaJarc4Dw8mjUFTxdtoj7cW2LrrasvYC4GGgCw2QnTHkzbxHbisqRM8QBifBJwcq915iidthrQ",
  "key15": "23yJiyZibxciPRUsYVYGeJw11bBQ13mjcebnfZezbTDQUgA835XkTstzJwaq6NhLKa8qrp42XVc61EEsxrpLmxYx",
  "key16": "3FiVz1iLYwQqg7CD3dkn7qrJrL8WDXZuEGzRA9QH3RVMaewGaRSJo3nq5aBrNyvx2st7fufEgiFsyQSqv1WvjNWg",
  "key17": "5FPWpV6jNsZ79F8iFhoKkB9WcmmF66BNSsUexdRXLyyU8rh3cTQUWnxuhZVdMqDBNNZh7SNwGb4R7QqvVX4PDc1K",
  "key18": "4A73Ea7PGQxV4FpfV35iYf9mXNemRhzBrTgd1pLo5CYeFgFMpeeRS8jGVREuKU8EKm4jfyNekevkdR339dYi8W99",
  "key19": "3KWVffedBPCMCW2qZEKLcpM3Px2UpkW27XWkz9SnpMXLCUhhWM7a2sDg5p4jwrpM37GSkhng6SEHYiw8c19K7v9d",
  "key20": "63eUyu8sd41CumKPtjiN9WX6DWgPB88TLKV7W8JteyVQGWBu6C2EAF6MG73Epjk4yVRq15GdaVehgszvKxqdyyVG",
  "key21": "2wU2nwumuxMxuDiFJcpTpUS6NY7aUpE1jNBL1artyHctGJ5csZ8zBpyMgJ4XFkeWZY6jcLzdW2Mccxsk6rJPh3mw",
  "key22": "4LVy1VE8P98w37fPc6Waa9gC67jPhLBzamMBKyDLhJ6jCsvwjTM7oBeo7op6AzTRq4N2Cgfi2dwSnpfmDHz9Uaw3",
  "key23": "669xQc3RWtdqsdVNK9mprBcPngrbVwFMJmjBkp8WCZWrvxiCZoMLzu1RAV6vwAzvbGqqMXY7LmAY2biJCX7oeEUh",
  "key24": "252JcoE3DU8TE1i7i8gSYwJbhEwvrZPZjTmxhkeSLyERbXSEbJK84PAMv55QQCj2hyvJ9Ecq6xheqULSpd8pj1mK",
  "key25": "3rL6hTCoYfh5UNgtt72aHwVSR7xhcPKMC8QyD8YMaBttYJJRWCzSmSePSGUiVtHzLGErNyGduDAwHrcNsnzWHSwh",
  "key26": "55HZxQ7f7h45jT6AVhbqD18CMVMFsDVgJXmsuE19mz4BLbFbTW8ZQvksepMeJFgKgGDFbVUFczVPQdjEEJjMRdGb",
  "key27": "57PYqNzG6iJ61z9bYZL4ghZkBX7wTaKFh6ZVw8Ny1uHEiXoY4aa27TJjQPbtbJ5YvPqkEwAUPp61gTxMVoCYyowc",
  "key28": "21qnrMA58DFCJJBJzFkReKca9bJHM7FaCCe5GNysCRx331NzG6RaN7jsJdtyxw1Q6FbXxCCzFyW7XktAkuFDHQzT",
  "key29": "5kDV1Q3y741fDWU4AFmKpCyrsXDnZsHnULd497qoUzPRmyWrjE3BMwJDEqnbgVFnzG1k3omtEzjCQ6BZEbGfmrkG"
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
