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
    "QeN2RzTUA6QLN4xMjSLUv5Bfby1uuuG3oJVs1QhxHCLaQauPYiZLHjBqtJMJKPkGNoKySM9xaPpQXjVgEfSh9q4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27dLxdXnLuKGNYSYFx7jZGTMwA48qQLRWZau8mc1ZUQRMMZQrb16H7VT9kVXHg1XfUVYvncpuLu4Pq2Z9SbiVtoS",
  "key1": "2qGLBV5f2vjWYpqM4uiu6wZ9XStysMB991vULWkBsWZ1dy3BtMcGrDdM1R6mRiJzi8B5J1dAUSjd2EF639zFAw4c",
  "key2": "3PHdcMLNnnS8t5NdXbBdbeey11KuCtqtvGUCCL2s3JqYWjmKBiKeG31pcNDFE8aNhhUN8o5RPeeHK9xfokcHHrgt",
  "key3": "2zPyTLjWYcqCFWn7FUQcVZgE56FJ1BbpNSyXViXSVDsN7NJxwPJQXB6PMbbKxbZC32FEvi1Qjbc9gdBHmJgGPBYL",
  "key4": "3eGtB7xs9u6Jhv5Smb85hvipJ3NrTz5oSLj4UccP5biknchRFZqQQeiEL1Ze2x7fU1rebYKmSjfy4sMcwjfsTe7e",
  "key5": "57ComycxTgm5mWaaDS3PWv3rku2JQpzum6MeKqBMb5BHwbWAi1P6JvzQQk7fU1b8XUYoV6KQFRYFyFuLj55i8cLe",
  "key6": "4rEcaGV3LCCNP97Zv7FpnUMxduDb1k3eYPQUJQMYz7vJVEFGStBSmpStTMXgb8PgjZVRTMYXvTeSa8HFkMdH2G3g",
  "key7": "3T3Yp6Sm6zkq8DnwjNhKu1HrpAM6H4qGqEzbdctbMz3xXwJipdw42nmFNHXvHvGdEr1NJEnK1jTyFMQtv1Wvmv6e",
  "key8": "5LSMHdSfxuYBgHMMEew1GGCoosVNQ56mSbiospcBjYqs39xWghsiC7pR5cM34ywboT1pS12F7qZ1BsLv9zdDU4E4",
  "key9": "2FUSdZLkhBVuonWx3QEMQRjusYf2kkuMDKDqdQanUqQneZYi6Uf1rYmBShr2h5Ut5usQPpDDjwFnJwYKCrCnNKA9",
  "key10": "4hgTAcyMRCFw4bNA9gSBXE8SKfoqNrxPEMuHFvSSwHxa51QXUyBeMy7vfpFVHvmwa3rqmHhCtD27tVLb7aVDZbah",
  "key11": "224kG9sKU7nKp2qKbx8bG8vTs577zwQVxEa6vjG6MepmEketJWbieVHNtwayjbqoAwrMRhwdffdFPcXq68LdjysY",
  "key12": "2WrUkpfBLvSwQmWhDgnnwB1LHFRgigNnKhQrPa9h5vzPJuEWXzucaT1BAHrDZZrDoj84oTgNggC5b4PS77tmyYg9",
  "key13": "4brBP3E7PdN5cfGQSYNrgiN6vFTM9hu6U6RBjX1UpYwRgFj5KTmA65frhUdUsHxmUEPF9bJpNNdMY3eJxsiiZrGY",
  "key14": "nU4GnTwoTny8HDXQjvyGnK399jAsWyWfwaiF2DjaZys7zSTFT4H7T3ZacGWbNqjXPRznpjchfJCJjJGaHRXJndu",
  "key15": "4Xakvpc3GfDVxuM5GinSkbE5NVbtVx6SKVWFmoVV11LFMxX49UufFaUJHAY9ER5njsNcrUcctTiF5inhimZWvesa",
  "key16": "33AHVc1s4YsSvCL71btEFHPBST8ZzRmNB8dp8Jknuw1NqAPdWarjGumMk6baV2KynbXERrzPohTxc6vQSpyUhrNb",
  "key17": "3Bf3AhPnouB5u949JceAuxh9deZFVayXNJvkXVsYkFamb9xDsjg51Yz48TKpiyUFHt2ZtftATDA2e1c8ojWisoqi",
  "key18": "4WXnhDuDsNnN1TbrtsEUwTGJNhATLsodysUqnxRfsHggwuHep35cfnRvZ2o3WWi4VfPNkD2WFMFTFTVXLJFxVad6",
  "key19": "2uaeMnWuJGGxSumP7pQKoZS5ZvhTBt4YWk5aJ2DeWUUZMEFJWkNnTeVTVFuVehWBruFrKhjcH1aKX44oQsYSPUPt",
  "key20": "KbRbaDbk91E6mSq9dPiuvZppEYjwbHpPAi7tPzS6QkK8AZxgWXVjZ5xgtUErFuMD9GJN47136RR5xvGKUavgPau",
  "key21": "35LfmVEHvJLPYU3BncGutpVMWysEABs9kKbaYJvzaas5hJLsvX7QcP24iLATbFsF1Qks4emzxDeVBgzBemtBMK7M",
  "key22": "QErzfwzbdMM7xc2eX22u7UGapB6V3GoWiazUAHgFcpE9qbvWjSErLwz85W2VWPrH3CTboNKtXzCuBSHGEDhHRsu",
  "key23": "ghmxFVPzxCPZCVBysi5WqW5yAutntEuEAJ6UvJDFCnTHXFidVf75ZhGxakSPHqFmmZFt9LNdwCU6UwXbgzZjfdC",
  "key24": "3bhCBwTCcsV6jzohMyFYUEpaqCWgj4S2PGhVSLKBWXS2ogjDog8XDVQ336dZMfkH9NbEW4GkhEobjujb5Y2A3o1D",
  "key25": "2hWXA7BhSX6zG6onSPbnbJGY7ye3j9ZJAFcPptRBWi26WorauqTjmzseJFJxobTFmgrARCkum2xuUksxHF5KJvCL"
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
