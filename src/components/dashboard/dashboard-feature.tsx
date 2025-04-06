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
    "5NqbuPs4s1n2FMgAoY7rqr63NAogg73GjyMimNJvreJZ8LHpqBKLEfD4rcXrhuDHK8Fgtg1kG68aukxtRSWz75D8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mA4s9jMGH3FpsZCREQ1epnxnR7NQqvX1j81zxZQDnc9UHoAPTL7MFTyQGmBtKMJb8xnqyRQqyJXNcX9xEyEbQpW",
  "key1": "3RqxdXbvHAQrD4gFGsNVMmrbAStjQ3RWTnLJMLqXgrQT5PCW5j6vRW9tu5RUoihBNmchY5WdrNhdxZPiRG6gr9F4",
  "key2": "ndCRPscytHGEee9R9iG6pYzAs1X3ZprBbRDtSZdeh5d75p45HbAy21hqt2coHvMNxqE8Q4LkYBfhjVUkeWXoB7X",
  "key3": "2S4MJKm35iBa6MBEDcpUKgmQNXwMwjUazrp5bQnMU8gqMq4ixSAaFQRa3BH6Ty11FMKvpfSnJfqR7bvtxfddUX1J",
  "key4": "2vJ9GGg5qawqSeQeJwPJufJpVrJtA1wghqmHFemCtmFeWKo1ks2Ti4ijvSA6M3k8Gsb78XSPx3ggYaHMV3iYjPuH",
  "key5": "4Q7KmtbhbRF7A46Kh3TiumeXxotffMDZE3czYdDhntPVhXuMxukcKGjhVy2Vrfx4o33ba8BmfnUH138NjLxmazvd",
  "key6": "2Ajdw6KUGucZEfy3uYFQj25zUfdR7a9m25PpfXtACuQqNGFN3P3bxkXNQ6Cz1sgdnmRBbi5DjfJ7tEUqTBKGrieV",
  "key7": "PRJdkunAnKDpCMDzdiu5bNVqxa3vs6MWKdiHct9xV4QB13bmZh9XQWxtbmHTUvZY43ZM8UV6BhTeALCVzyzKNZd",
  "key8": "3EHdyS24He1J5w36R8SxcCmAPts6CVCxSTfykiLEr6mLnhQif8AUeF9mSuEzw32QptsHwpZyTazh5rpdJmB4GbvY",
  "key9": "5JZUHDVHjzyoDW2wrF3fDFu1C4Et5xDJcfrMgQLWBv3kiNDhXdrN83jamPN1BVEJHLEZ4gHtJjKr11k3MNWv3vJz",
  "key10": "4acfvii3Va46XudiHt11YeTBUtfKkzJrLwZGi16MJhu6WJkZE1nbSp494NsQL6PwynTcK8mCYRGnaAobVw8WSATv",
  "key11": "5NdvpXYzq3MpnNQby8bbq8RjssGdM3uRVCWrdpiixPCapNv6od66RyfAgwDjhrukAnybNNmK9kMGHyWcDKHTFoT2",
  "key12": "4c67xNaNJy1FPaQwrZudp4xHwF6dW1GCCQ58cNQbK1zCXFfNUFD7hhN2f7UJ23gZ4XwtpTdAURMxLm9dbepW69gA",
  "key13": "3EkdLEC9pW9kgZGboy8qS9E9aYAdvdq12rwdPTByh6XCgopoNU9sBSPCQHGD5ampFHjYUYbqsf9MLUDEndEinvWa",
  "key14": "5YJkJGhA2HtEgQkPJ6sGgbfsv24mMovfHLKjkmFbjx2ZFLDmKKeCDw5T2kQfa1pqEXdDTx9qwkptMBTgsYxanBG6",
  "key15": "3hVYoPVPyWPHVmRsnXgzUHTiPYhC4CDKqvDDos76pnhFysdqDpa8aVa5doWgh6UoLmWBWz9iCSys5RhswQM47twk",
  "key16": "CBR75MGDntCoVxVmJ4YLmyxXFLs4CpdM7p4nisdXjumcyEF53dHJ6HYpPQYhinHq4FF5igqYU3HstuRoARDRqFc",
  "key17": "593WfHPrcdwg6qamnCYEjSJsXo5jWAAYBhJ52hoZAM7yCSmm4c4fmcCfLcEv3F2BbMaB67vw4hBS5PWYjNabSxFX",
  "key18": "cZjHDf4SeafMFeXTHXfXd5ZsoFjDFruvhgUmdLaXGnrSgQNoUHy3Fu7QGDb5YojYVFCFQPeFWhpKAJMNnMxk84M",
  "key19": "LBYJGkcsPh56VY5i3WwJkt8NN5jiPqr1iyUeseTXFut43U4rPmUMih6vyBnysadjjhrktbXo4UG1SL1LpkTmqxu",
  "key20": "qT7cN36auaNTG2dXjCfvXBdVhsCyMnNx1bxzqeDpQ1zs2wtvwMsGfZZbLVHinNqmYMoJmgvQ73GNmc5x3x73uXM",
  "key21": "5Jg2MUS6pk3qnxfRiKMFf4bHbWbfKZVF2YsK8wemousKQoqdQrN3cxWj6MLC68deBDiAxFErpUnqeFYXbuLFTRVR",
  "key22": "TiL5ToB1JZEma9pS4HeGHit7LGys4vu6TmRPCoRxZChj2tRXQKJ1pojVquGSp5hRPmCdbupGFy5MGzQ4vei27j7",
  "key23": "atSpCNgPfYSWeWTPJRdqits8ZhY8hxwaGt5wWG7Vioj32azdi2TkgNDXXRugnshh8JKFtpFVNT21ZxAWiSjxRRY",
  "key24": "4goFdzd4P47geAGpuptnYNk2MGG3bWXPzk8cQKeEqyXnbvusQTnzGneV2UyENdufSfuS936JcFAa2RuknUn347dM",
  "key25": "49a3kryq7AvHceV1Lj4iUcd76ed8a8CeY1knDacX1UmhQ1Th2mBjss7v8KmeP8UVE4kofcR9oZA77iLXoxF4sBpG",
  "key26": "5stEvnLez3Rov51Fod6Jggq61ophAXZkbCSuPrrzLkrfYvhdq5GQ93WhbFWibGVtPKJoL4JJ3BLzXVBQvfUsR3A1",
  "key27": "63XT1jWtJ4ZQJt6kiRofxSDGZFpwBfiXgL93Tqd4QBzhG9UUg8Xhh1ntScdSJog9XQtGDKcWjCkMAcUjjb84cGWV",
  "key28": "3Pfiky79C1DVSLtCnVwTHah1XEp4kmorfKLXja5Wgm8iHAXpAjws6sMSgbVEPoZu6mavFojnLbTjWeXfDX3bkUKa",
  "key29": "5C9q9yNUWnuXJ9S98oaFpWNpkDuqRAK96TGXVFMTgDMVRHUraSeR3dQysB3BoHPsaegM5JMXhRnsuaiWFo97mbP9",
  "key30": "GL6sK2f8QAoPUVvMCcVdA5PtMpia6T9yJ5nyr79Q7mZTavBMUjr7c5HnnJTHzJxSHRjuT3YmCq6g28R4HuWkNTd",
  "key31": "53dVyPCMsrbm9RB7mbMz15pp4ABTDcBUjoJUMYt97fu7qE69fWCGb86E5jxguemnYo7DZgYngPVbCTMog5ZR6NgQ",
  "key32": "3ustYLjD7xme85zdFRjFqrfDpSenQjCrBT8dFynkxWGbePpRWwk6aHW4cyg5cJbJNQ7aFwTyhkctasCvVyDopJLA",
  "key33": "3piXAxhb93DdWHFkknbNRoPKD1mdKtkqd3GLsQrva43pAcc74bj1QNczykpEvLd53EMuchkbj74a5QpvAvqNKyJr",
  "key34": "35mtWboMSZiSvwStcoWxPyS3EvBPTeuFYwE9iqXnw5RaQrRHmWuqn1zY8ngfK5YNgs9BTWxfX8hJA3AdA7iHVk3m",
  "key35": "4W2EajqtgfrGroWRNfEa83fmy6VWZuZqV3TiwBXTMkUfEASpspQJ3feH6z63s9iaNXvxCX3XuHAuPYfrL3Wp3vUg",
  "key36": "51PaB79AUSszYGczRGMLG4ymnaTFGKAgSm86JF6hcSpNo7vm8y3kkiZScHNJ3bRyom7SMpTakoHwdFxbYDWZBLte",
  "key37": "rPbbUSekWkD1jHFyMsHBwi7NJvTb89ajaeZ2gw56Ataw4SNczo7kck2zMTb979m6Rfj9zcGUEr6k9TPpvyGpYkA",
  "key38": "3edg5NwpP4HwDr9HJa9h3ULGg7jXjCRaPrbECXDTWLTmf6rTM3HKG935PKeWZMsAuBYCUJTDzS2dH3PPrMcBXDhs"
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
