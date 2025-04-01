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
    "49oHpHCVG1X3zuABqpeN9QjgLXwitV2CzWx6zg1y8G5pAQgFUAzevmuPNgCeqC8pWTBUdqa9zFYgxL3V36M3qqp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KUo42nTNDukC6vDhgn4M7XTdSvugfHweTBeULt1JeXQCGGXcx86qse5Z192LtkMj8R4UvAuumGwv3LA5QkqnRpT",
  "key1": "4zzRRGM4mkPMY1Ri2ATGJK5h67o33h8tP2UQhykcPhpard6TQg5vb1QqEdcBB9MvgNVz53MdSkszHd7XxHPftrgm",
  "key2": "fYs91aZpPiWncWjDNnfxrGwERJpau33pCMQJnHezhtno3sms32GR84kQAA9C5XsrFK384fj4TEZAyTSh8uqAHKe",
  "key3": "2X1v7c5EQacuftYQPWPxPWU6xx3iaSjxgavvhijNWFQPodMhmSHtxqKjYZyQdQJxDfw75c6sdQuqoUqhhcxstUnC",
  "key4": "4mdPDAQhQsWhdUkDWTofBZBtAgQS3H1qeY4gd8uSheRgTf1kBUpKkVUNsjeMH3opLf27vKPgYS6Gs7G3v23DrLd9",
  "key5": "3LYRBV128mq2ipdhssEveRLppBv1Qz5Yz6kiJRHXSLDjqeCyoTiroEod2fbFNxLyPatQK7h69JJqVFQa5AfdoNpJ",
  "key6": "TdSFVVTot75TrUvYgBZn91qWRR9FtTu9ZSEzZ2MdEzy8fXF8iwTZQPG5JQtrJtK7KQg19kafF3PSxqBxZsRcaSP",
  "key7": "2GYKoJfV4YfrfpzfqeH1pEYmRNqwfdFqK7LuN7UUncbS3fqNaocxz6YtVrtkWiUJbZ2TyzzTH9nqNGW1tTgjJ9NP",
  "key8": "31dmPcniX2amz5qDcYTEEphpBPrUji5Cp5XSdEtH5Az34C4dgvpnW87fLf5yupbfk715LiHi89JQJS5gusqAQVqs",
  "key9": "3XySLZBhHiLfV6KaEvndXU5Xot2Qyy1hwwPgvgCffAQWamq1EZ8Mtkv2tpMN1QVzrdj8KPa4QcVgpv2KWV7hzG1v",
  "key10": "26u3eyirrdscQ7XFdGmTwr7LnfLCuPWMkqTMjqqe6S1MLV3miZFnxGJmptMw2Fz365yZSn5fdZbWHKDRrLjdZD5Q",
  "key11": "3D28eU9qALcFNou1ookv9ZtMCXkJZgXGpzUurhSZRcL3Lnin118AvZzx58qGEUF8UnyqXjpoFXY8L4nzPkEpfhZx",
  "key12": "2x5nu655T2cbMYGV7wfS7LwMCebBLgzqtJ2FPrWXc9R6JbdDv6qUqN939advQpBHMgTy7SNUeAE8RMn1pA1c6kHB",
  "key13": "3m8i576nJhC7HfaKBgH2VJz9jjrWyBeMTobJ83SEsTr9AC587ihMNiy4zfJmiF8KXXsjCchHjwsc1BDKN9HEKnKN",
  "key14": "5pq9jvgCPyoa2KbtRKGzCnApa4M1NTBfXPBzkhec8zVSKmYgojZ3mYhbn7xesMxyNFtRAcSwrrL3Mmyr3nbhWUsd",
  "key15": "56YXDQ5xp13YCiSRuCYqio1tUgMEDEG3AhqDDAbtEFwMBxLJHdXrYZZJbP3mhxZFcNsCqEiJDmtxVbUvEedRKAow",
  "key16": "5E9kX6AnyWDCGkq4c6iTUkrsaGRzAPpGHxrAHYE1FW9HQdiVMnddwZ2V9CiwosDfqwMpErzBP9SUZJjtLh2u5q3c",
  "key17": "5Yni7AXBot8Be4PQeS8xQcrzNJZZbQ84G64pDQzuQQUJU14ucdCcRro8niM7pXi2kZaKZWgh5sVCML2U158WpsNy",
  "key18": "5EkM9iXwEMcRhTjtfhbygx1j8fpNXo1xq4y3MNWevN8sCPBMcGyyn7nb18bkXApfcDeaQH3xm1rkpn5haTcuGhwr",
  "key19": "3KRhm1Dy1btCY5VWhV4EmpdfYftfvDcn56RrT6sQnLC47wvjtFLiyj2Rt3FQEdPG9yhvNY1q7mRdkyaJqo4AF4ie",
  "key20": "24T7CqH9H7JRxqjDYoDNshfCrVNgj1ZvemXHAGwaNqKVSmZwQyZNKTLGXnLNuW2E856u45ec3d7jvg3iLymVETLa",
  "key21": "63F3ZxZy3KmFkBSNFwWFpoFLwNDbnA3K54aj7fxyubLZ2B87kYivDcBGSTKv2JT8ywDa8nRKF7UibDgapumFtQTd",
  "key22": "2a58B4xX5ZWwZDbzHW7p6LNCG5cGcYA5HAP94Y6MduynJwjULhP7iEHytZXfpWYiXaKdW1XhwnkUuqHG847wJtZA",
  "key23": "3EmSHbj6eKD5K1opS3RvvjZGi8y5VAyDwVcH54c3s2AFkRR75jiK2HC7wZdgDyjUq47TiqxB46Ug3PoDTCcppX6L",
  "key24": "4wRnaMPFRaiPk32b4GC7VzgGsHeeSWBw7YGbdzohCQTz4EEKYCNdFNhv8DJW2H2kxyaEKJ2wN2iRtNUo21qwDi7x",
  "key25": "3q6dyp7dep3ah9WuQGvw4c397D3LqZ3dJ7CqkLyBk7bP2ZmfP2BxP5Vk5mRdseWyTefTAwDCYBHgoZxzDnriZB1m",
  "key26": "53x9kPSNhbv61PUge3VMTJtAVkr1LUdGCZmvc3Hg6Dnh2UrfhJKnKF1YzBhiRoQgj4d4HTaKES4XskQzcHUpoPow",
  "key27": "5j25T3nuy6fijyTWMaCZu2LfoGXRVypmunHk1xiEnoTZhBp1jbjRdCWxWi3uJnVP4wzpzBzkQhidNihZoP15iQuT",
  "key28": "iduU4D2TtsJYVmwJTFXMYfmwRApbqxJGGzxU9yybK4umP1XN1zMywKJNczhmfiZKJ4SYp2uLEXM9wFqJfV1F5sK"
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
