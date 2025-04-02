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
    "4nTRkwiAkoeXNvXP1GhqhJovphfaQPmoQXyeKKKgaieepLiciVzb76Z6SVKn2wK2ky2m3LNyuHMvMj36F63ZG8Az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EJg13zb7RdMwUPsmE64LcvXcGUDoRLXt9ec1EtkkvCm7M833u8a6m8t7BvozM17X7zXshHXfSuQxQgGHwV1LNVc",
  "key1": "2Tnzp2HgrBtXDCgipQ4TSRSDiRiWx2qcPWtMHwDVmjHS53HkG1TVNHpWosQTN5p44FMsxsrBE7Jarafo8rjqHGwa",
  "key2": "QLLdtDxxEtMkeSYZ73YgQXpooMtnYtwLADAajj4jBG5JmacbUeSivMZK4wQ4Kh9yDh4qozHaRYjHtkB4FBWYwLJ",
  "key3": "h3Scf1X6JhkynvGBEX2PUhrrw2gontqzgAgHdYLf9ReJNry6V8p4vG74tWaawLC3Us5s5kC81DcjPtYGzbseK9z",
  "key4": "2ABvwk6tK2N2EaarJfAWSn2v4d93yKQAUKxQAPrRkoKqYdaT57JzUvJgBDjLjmqNdU88wvDEAPTr58XWEsdWpWTS",
  "key5": "S65WJcDdkRYuvtyJPQehjfVvbT3pHYQr1hkNW1x3HeU8D947RrqPhJgnfgpur3TtH3NfQ5PbdKsa7RRZ5fSC9LH",
  "key6": "5UPnK9czufdUGgyFky7BA6oPQPTJfiUTS96a3t6gut7fGgzpyaMQxzenBoq6Gxqk5xj49ZBfAsEFEXF1sjbjtjE9",
  "key7": "5J2bwmjEYHQw7Rp6GeV3nS34oAmdfyWX3CmDBkte8xrrPyRJj3vvheAdvSqhkMRPr9VpqHSWJtYry5bcfEHcUvnd",
  "key8": "MMrBxh1kVhQricjnxHGQJ7QUrsvtj1yKzgvz4q1RmEh6sz9nb2yysTaHCHNRyHmCzgQD1YG14GEKotVjVZQSQTC",
  "key9": "328zSfGcb7N5qM3zgSoxn9CrqYQjVS4XA3h71TmX8t6VDkBgb4NXtvFL3MCfrxiCecrmiMG2MEiHJJHv7u6MWAKX",
  "key10": "5quQFxG2YzhsyjTJtPebxznLPojtLvRHNoLGouLzMbLW4VWExh4CT9prsXhZLvr3qDnSyQx9gL7cSBsMazKnVdAx",
  "key11": "4Q71ixmAHCMjgTV8SwfRybTYZtb1gCdbQMe2WC5rj3mQtXAobskPMXXPZrXdkPTTsk5jj4K6mx73RQrD6ZKe2GNM",
  "key12": "377xpr6MJPjhFz7za8Wc1cbNVq3gFSTL8Th6GXGu1SJoLJgfSdRxeZJrz5i35uCSTttTbj25gTTnuivD3LkMuQfK",
  "key13": "PV1GYegt7pMvtkLVdgfbqA5ABSQ37Jw3B56NeFyeDsbGG1kAx9nqUsc8AAW991tJWMKLKUPGMomicv2eiU1iQUb",
  "key14": "5jDqz8HKQJWtfKHTY1AauFrTXxDBRZPqyGQja5TxgtWZzSiFWrwW65JgaPL5aM8mcAnhEMQes62ftqGn9QMDCCLM",
  "key15": "xVz5Qv8Qw9xHZHdCjfiB9sTx9UHmCZVZsoNZR4X2nXX57mDTxiZeSnTrpZXEzF3HYZiEwQZNiGcpA3Nhomu1Ngh",
  "key16": "484t4EdeSxa7vLgchDv35ifWs65ZTFqvMX9GsvqfZNxSZJ1hzSsMQBsuC2CL7xtD3DPbay3gMXmLtFa4wQzTexKA",
  "key17": "3a2Qvqr7Grq11QAKGoiMrbps8eVoF1qhqMbXYbRzahJesn7qqo8knCi6Litcoywo6n8YCm29UQ9LGrcB3eddvMMZ",
  "key18": "3NsNiN4Hzu8R31gQxerkMoG2PG6SEtzDtteziWTBH6mHHYJ1vgiwgJYQwBNvBSRVfrNbjm6dMnTqzGQ7seUMF7z7",
  "key19": "axdpjjcYUgZfUJ5vRu95pGtnCnJV4mwNkotLp8d7B6NMRYxfEjZ3SnXARpwF7ksF6c9Knjx53tQEJQHVDLfVNdw",
  "key20": "2M1kJL6ANa4nJZ3XXq4T22hEqcvuXCEmv4HVfdZ2bCPF2HAy9s8vogVowxEkKaZU2u2iww5gsRVAuqWmWBvQD77T",
  "key21": "4fpahMEaRv99h742Pbk3PMb8nXxzRGzMwahKsgNUNGnDDVibfz7guRLSvXTNm6UTqJKxNjg7VmapRNWUfrCBdGEi",
  "key22": "4v1dwWd3gC38Q9egjrCTaMhsgiHkWGYBjRg96EoEqp24hwaFxt1FJihPmhsJ87Nm15zNHRi3bnmDNZFtK7jCJULb",
  "key23": "E2A5nANzfPxEr4oq99T38RkAjX7qw2jMuXWGjPL5QAJtuPR6pwgm4cKNbcLbMNsqrJzdtvfS4kKW52aXbT8euYF",
  "key24": "5S2mgHuTSYCbTH6UFwQ7evBgRhCetxj1mpQ5mTwTivtSoM4ZrEsK3Pm3S7Nb6Vz4NdjpEPovT9X4w4VMJHuR7Z86",
  "key25": "4kdno4A3fEqwHtfwPMrkcgMT6R6bhmR3yCpe7Hv7wEN8PuJdZvzPEPZjroqpRZ1PvxvzXrJHXmDYZc5XHsmpdZvW"
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
