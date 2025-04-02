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
    "YEuJooL6yDKD669Gp9DhkzyxHd846FvAiMNtgm76DLYdjGh8rQxCo7M5vK6fzectd72pNRmUK1EC8BKzuBDedeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HZG8Rboy3pwpe6iwQ2vCdP1WvXmHTK4sSm4cD4R7ZZ5TuT7ZF44pbJdUzvdLqqXcfsAVFxxpticRd8CRrcGVWiT",
  "key1": "3y7qES1x9ez5UUFkjL14UC96zBYFeKshH6mNkFKzvGqqbMGiKfWc37hmbEdUwLCsA3RfVLANpnQe6saLbacxq6dX",
  "key2": "5ug11126wEhJgdq1veATbd7n8VGv8efUJ3XBivzig4fcwyVGiQNKBGbe1mYkFwiqXFqhgNusWDmFUt8p8pbQ4M6a",
  "key3": "3Ksbw9Ryp9UfQkrjMyziYTodC3SFdcmTWXzib2gmQ82QP7XhNTtYno3EEjkiHeLEAvyFfxpvdzBABwFySf27vTio",
  "key4": "4mYL76qqteL722gvpYPMfgbPcH4EpHJ3M34UdAAJ4JnztYiuwgXsep12p51kg3uVd4RZLVVJBCMwH7rqAuJyWPnU",
  "key5": "3LaSu82UVRyrxvZSYCJd2xNWJLvDrrVXyBh3Mq2XDzFp7DrpCfBX1bQbzp8PSaxYbPPnwjP6yNcSj81vq3Rebq3H",
  "key6": "2wHT5YLXmyuQbeMQQg2xpMTR1jrL7yV9HRW8tjbFV6L3nE3YBHGXEojvCUEM3CcBMWN4icWhGX89gm6ptdmCZCGe",
  "key7": "2ZzCm55mfwA5Du29aYUEJXexwQD2qKceJLQ6WM9MucvDZZrbKfep14cKVXbsSqgrrGv2xvjQV6DcyHMby4mkJcJc",
  "key8": "3jS6mdr9DbZKT7PqXAZ4ZXGLGwZUp3sa5iX53BAzW2wUrCdvVTkvYy6rW33fYuWpHpgSWBtwDRiN8kqCVWt6Jonn",
  "key9": "5wYwsYcBwjivFozrHPATgpSMBU8v6WfUZPJ6UPJfSydCs1v2vYdcrK5BEU8Brx2FwfdQRitv4d7yftH8Vnr6M7un",
  "key10": "4rJs9Qy5B1KFRskwQiNroCDkoapQb8nVZ6exzWXVLzbYbU8jTkQng8hgdKWeDv21gMnfB5XupuPuZYNrWQVsWuaC",
  "key11": "2wKgT5hJgX1bhxrfnoN1CgDwHvSydo2FSM49VzyNAqBZraH4n7oJB9zguPPYbJySXM6ord5EK9YGXTfnTaBZzwzf",
  "key12": "2nG5DQ8KjDRKGWqCYNwY1yi5nDG9fAoKWEuKRX5FhZvvvRJb4JAjZaincEdajREvzfJHurDGSRWkPBDzwqpupKsc",
  "key13": "3huPYqrTunZWpdejaNAi7HTGtuRaCLybqAAQgxaFgqj4aeuwDn2RastnRLEjveegmHqT4TNFf9Wikz2JXwQRAs6G",
  "key14": "4ybkjqMBD1XeXKNUPDJZUhFsUprZHjaAW16JRUuStdCGv3nM3AphqotG8znptH7QH8iYGj3NpPrZesuMqaos1nAt",
  "key15": "3e8re2vKT2EYU9WJ26LQVLq2WFkB7efRTRCqjsWhdijDJMb4gNScsJzJRkcXxbw4Ms1gvRX3CzVBSuq5srPsXASP",
  "key16": "2JLHBfPh7nt5ZRNY4Uqg25z2YZ8NUCxn5QR3eBivysQF8K7jTpuRdZD1NrgjfFDoC3Nfhgo8xrzeVsEktuS3gSi7",
  "key17": "5vDbxUaosqUckGyYGTJzYUkjWkKdasaJ37ZUPdDXYe5h3cqCsUuHjGYE6HhnRbnerwq8YTFp6Dpzk9us5KoSHKQS",
  "key18": "BhVzXnm8rR9DbSMcxjUTiZ8PEp7Q8tB2jaPDiW8zoqHceeP2EosNsoLYAfpMFPV4enUcUEpSBL36VD36gW6z4Uv",
  "key19": "2JE2VYd4EnpjwEtyDQtSoQgzfUfeQ8DZmmwkSkLAGh33VdrexGd1SfDvB4dwUgFqZ1MN1DmGXogXnunkhnmdfPLW",
  "key20": "2xfUEx5QVCqbKnKrwq2pZNrDDvr3o1frL6QZmYwEaa9XCM78zRxknbwVdy9imax4TdueotUaYJkFGEKVmeDL22AJ",
  "key21": "3ktRxodSuWuJH3yWMstMqFAg7aeypeDU9oNTgTbNCyL5bQtA7zVU4TUa6oEZGydmue1wnC81xPHr1JPuujFgfYDr",
  "key22": "NuSDaRZfBXcGV1RbYKP6BN7khb9d8jwbL5o9i1Yak2pYokJsriYVZDmNhPeMd5PbcFfikkhpRZHdDazanL7uDcj",
  "key23": "2RQUn6Ga998zQi5jfhUG4hpuzHTqgaZCjEJoSrm39VoE34ufyjpgrbAt6E7hKDWJr8KaHwaEQ2RuoVg1iBztn7s5",
  "key24": "4PWFkVAD6TonLQ9pzwfQCGCBNJinFJgfy4cYt9acnb6KZ9cHH66Pu82pKR5DjdWJ5jan114cnAkC7Udd5ZguFNi8",
  "key25": "kEfmZtz54ek5bPrPFmSdNSem1m9bzJb8H3Y1gkkit4o334DsnKCqrGRUNKk76Y9TaT8hLTJjwTLzvhP4nn2yJYC",
  "key26": "43zxq3G9dky7nj6UfXPES1QEvHA5VKFEgYD8NpXWbbhEpf7b9D7Z6NUqtbVQhQrwnrmNMMKBGAK1mrasUCdaG2gf",
  "key27": "3BtG4sJqvFvwiqXRhHdY4m2tQxJ2sBjBFHum3qjyV8xxch13NK7ZHx9PJwrW2We2K2Rek3xKEwzQK8Y2DvLnuWp",
  "key28": "43zWGUQBbtmjtHfbmuMZmAPqRC4kdBPTWMsTaNNUtjmP7vNKAbfDaFgWatvQ9r434A6TQJDr9AhDZ31sRLAm6Z7Z",
  "key29": "jA9r7i3BimXicMbRtJguC6vKFX917jyQou3X5kNy2bvvUokk6xB1bzpNGQnRvbtJ9JxD5NRwoRssovZLYEveNJw",
  "key30": "2FfHVvLFkx6rvyR1zcmJeMF75WgeTRhSTBYWi2HEDhUHpLBAqwyFByk2dqf6vwzSoRAoDchAe9gKpk4SeJGgDvQE",
  "key31": "htKdpopoA5n5D9RyunZ17ZAa4e3eaoFdUKdjM5W5Us6nLQERb531gcuPaWurj7Qs6zxPfbDnGxHUF9RmFA3sSq9",
  "key32": "BRL8uTtPjwv12AHM4zfYbUF7QkCqADjNkafszcEkzG7iE7vAKyAmjYmAMq4voGtbVHMBNi9WUwZZwKdUyLCSbaM",
  "key33": "2TyrYU5zPwbY6RskrsHYWmdWxsWgdcUvqYgFd6WgLqUyu9qokaC8vHyxVYgrsw9fURtUHkh39txgFCnpeNa7WT9S",
  "key34": "2CCB3UAa6p1UE9rNKPHc2cwSCZ3aGKbMDEJfcBzxMNEuP3w3drJi1nKgJTcnfzwXP7P8JWRE8xwBpWmipRFa2Gds",
  "key35": "xH5tV4NGgg868uVeFabPeYg5yDhgbFXrae6AHrMBL92nN31gix35VPvbS33S8GqKQAwa72UzLjEHLqP8jdL1vXA",
  "key36": "4jLUwt1uM14po6q69QSGNzoFXPhtP1SsQUEGCiunP6RMCRSKjXMLPhSAiFt9ngpj8ZLWNicdunTPKHMmKQMYJPVk",
  "key37": "54fkqGZKYM9QU8MRwA2CfreN5BDtrUoN7s8ZNtnn6nw615saLSFPVNtkJweZsfhZ9nC1np5YNdSM9x6i8SY9E4f6"
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
