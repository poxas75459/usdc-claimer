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
    "415dbESF6xaioLGpHZk87df4gt74jtDhKGCTxFLNbqeYJcno8BkYRmfaTfXYfbHbBCjH91XDZkM8QHpMy9r3YV6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sNREHrMLmv97tYRAiUFPZ2A47ocaU8QtdQwJgSccrcfxRDGxrbCrxtsZRpzg11NwzfbJ9CSEtAcPjb1kFKCHxf3",
  "key1": "3HcUa2HH4qd9XoME9HBkcbSrQiGku5i9gDwPc2NXNmQjzPMV5iAcFaDRTFDMb325rc7jjq9E14U9rMG6mLoZJJK5",
  "key2": "2tHraDFs8e3qfjVq8igdjZj4HUWffayaA1YSjpkj73kL4K57R7Nj9TDKi6SeDs295rtARB5j2wadxsAF4P1pU4E9",
  "key3": "3gZzYmBQVeiLmYDeVg4eDnhLRv9KE8sm6LSeCvbdbXFHxq3wK5JzHWmrKsF7YPia8jwmgvjq6z3xo1LPJ2WHmmi5",
  "key4": "3mnPAnTPMXYDyMdhUhzG9Jor8YDZHGQs3es4DNLZXD5EoijGRMR9aZXmMsXzQk7FmD1vLQQwKseE7oCxU6YJyRjv",
  "key5": "5YuZiWaq4DicAkCGCdjJmH3FyBnKU5r9WcdeDvnCqiF65MRYqDCTvEwfBcPALzGorL8wUmPiLP6YNZ6G3jewmRrq",
  "key6": "3usXKHVQcsVrqruvNKUXAyasgP3vzLZ87wnZABD1Pkyr2wBE3PBTFVMA7EP7NCcpTfk4tYC7b9dTf3gjAU6AU8LP",
  "key7": "GBjxHiMQbfYUJQuYwqBYn32MVnqSXE7cYthVyuzGRvBAvckf9TQAvrZ17MtFXfKhemuWY9QsGNwtQ4JAEYAzcJs",
  "key8": "43BndwnZs4DKrtnM3qaHFcixqePBnJBWJEdQC36CkPKHTjQLg5a6ebUQtiwJmoMP952fw2qizgyZ8LrhLKQAQiZC",
  "key9": "ADem7ikBNH6tcnf6oU7RSvdFLYHJWSwiKFLxLw3qwyEjZHxevDiGryd68vNxJsMZy8TkeigiyX1Bj6JXokckcCD",
  "key10": "AgGvpYMx5fwhMRgNHb3jUqcNWW6WRrgAkzo9G8WjLZizGjukkWg1odLc6WK9UUqU7XxUeLvZ48LMbUbtE9cUeB7",
  "key11": "5fy1t7NEasUfBhZug4kvzyEEVV9FQVTFbrkAx4qDXy1qnDpRPbAffSas1MPuMCUmroWTateEHzJDVxMq3kwPKvHh",
  "key12": "4WyafGGSnwQgpR74bTveigV3BLu8VUck62GKAZKb8PT3yDbSjnZ4Px1FiSNShjHas3Z8x6YcPqrWtU3wNumdU75L",
  "key13": "4JP3nYv9mywuQRdHfcBybVSiLj3K2kKXyuTVeciR4FPsFVAsmdcqW9VCWddU5scRVw428rEG3dBQXPPWWHrQ3KmL",
  "key14": "4AGc97S6j4DtSkcFDi88oH1bixTUSCR6JREYWK8CppMGEAZMthZTuufs8vrdrXuVWromzuhKjxCqbyvdVJRYoWST",
  "key15": "5Zp8eKkHScuoTnG3cJm1vCsP7ttASozu3ByfvfeCVBku5vAQHH1o2gP42wuKtwdDyhcdKJDSKx15bYUL4nXB35sG",
  "key16": "2vkePYWj96SDDF8gPTUXAoXJ6prTD1QriUD3UoUyTVMgE5ooh69yrYWrmLYpX6yvnuFVMnZAYnnSaGtHxQusoJo",
  "key17": "5tfG7sV9qep31J9aj9nxMtRib6HoF7cNzY2cVgfwsP6qwpJxLDWuo3Nm38USU3y3xYBLy6Po718DbZLShiLn5GwV",
  "key18": "4TXnv1Lau1CdrEyuFiy2XwodHjbjAwVimKTf4w67Z6LedCsxEnLskpuNot3ErSrZeVfuwVVZMj16kQj847VmZkpB",
  "key19": "2ZZnz2vyZPzmjXJHq5CYvjiNNVKn9MusNSXFXwCpHnX3h8pbU4KX9f2qTiEtHpDfouSnG6EcSCcVz6HbxqbWLTnz",
  "key20": "4Mq7o1KiJ1HH36eu5UZqR91QPwgFCWqv3UTkfjbX6Et3XZhTUjK9YmBPStx7AbZRADPEykp3ojchiGxQfdhNm9U4",
  "key21": "2z1ZG2116kG9yNsFcRr3h11e1TGnrRozt6rsMpDZ4w8AkAXfkEJ21s9Sb1m2gzq37wErWW8La7WNrQVUujhWD3tm",
  "key22": "223MukG3ZjX7tE3WicJ2zWuqFVcYm9XvFtUrAKWgVX8KqKs3e8oDHcLQoWKbjvkDi6R3r7w478Jge9Zu143mCEnJ",
  "key23": "5eVi624NXd7bEBudSoCHRjTMn3SksyGysrz9Zv2WSY6tdbTViH5Ym282DJ683JG5W2GCGerborsn5nw4XKN1r84z",
  "key24": "2FY9FKhaRSoCZBmnGHGjdpvtYsp4U521gJbrVmYsfnPmMWSDhDJB6eaiNCS89PcYJ9k7pWomKbDzuD7vHJv1sbCk",
  "key25": "3u6wh1rhKrN8StcwRS5sDG5zjaokfWKtkDSP5MD7T3n4vfUtRTxaQYdobR2JBH2LjM7uAV15BbPuggjoxm5xXiLP",
  "key26": "5vvXx2pjnK2kKQH592gQAEAF6BcZL5obZ22GinKcoGVuLgd8PfR7emYSPwfQsYyyiyzdeZTtAP7zG478diVyGLVz",
  "key27": "38wURbbndUoyynxP47d73uwTUDk6z1udckySbH36X2CMiNk1nqEsQcA97baJG1QV3k2gAAK8Gc3ka7MuRTJK7TRs"
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
