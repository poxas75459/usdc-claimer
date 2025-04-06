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
    "5sWBqobLSCHBHDovp1WfbfrAv4WAACC1Rsz4XNgnp23Q3Wypi8v2cq4YZ3EYjEygW3Vjzb88nhizq4fmJL1npdUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mqDTMXc1aQWWPLe5gVoWExFpJ87tgqUBzxHZndXKNycWmwPB6KJh1jYEdHXKyBvjh25KkedynHpbF6YxuaS6NKa",
  "key1": "2hTNSha2vKJ4SUXntiCwCGbKWTmqeW23shWmEuheXcQbH6MqzoxJtPA2dVTnZXpVKXCAamsd3oSwQgCS3QMEgE7G",
  "key2": "nzCNbqsGBHn4Xgo1Pyi3czGdcKAaJeysqcchZG6uhukRgRZrymtKiN3o5aaM2rvYT1mJUoY5mYE46wRuXJbBdbN",
  "key3": "4UAJSnBKqspKpiw5M7XvdiPy3MFKzBkEMt644NHQsXTroUFnkFwu4vTGN8yJEK6ns5x4mtZ78Yu1wGLQQnDmixLL",
  "key4": "3PvHEdp1dRMxfu6ver8UQsqo1zTWvU6q4YsWh1CEcSj92GY3ivabmSi3eWpLkRb8gRk42X3PqgSfpFsLUVNHPyNf",
  "key5": "8wekKyzATzoXvxbKUYe5R7jPby19e8FAA15fzWVeZrdxoxubnVsibx4YjcS2CPQMEm9b4MWhFJ62aC2TVqZx3Gy",
  "key6": "2S1MCQUH3uUPPcxecG76Fo38APySvUxzFa5a3dMT8xY8io1cMKnotcS7Q5SeEoXTurKvhieoPAVHGbYjTVMDhb17",
  "key7": "3N39QL8v6voDVknfe9v43yptwGoA6Rm6hfLzsg2yvD2bAs4eNdfhug5HVTedpbDgwNk4quDSY4MUVioFd2PC5Xqk",
  "key8": "2SvWuXAbqcSmv9JxLi6JjEnWQmtD9kJ1jZUJUZmr5M5MdBffm6wJTXutCuMxC6btguJ4QsSmCQiWXW1cpCRHLNfX",
  "key9": "481znuy4XgFv2JfJik8wxAtWzxSaFR8F51KrpwAU3LdPEEc14MNJSpPtRvFNvYfud5FgX1tg72efutVSXD3Z8Zpg",
  "key10": "3uwzmaY3sDdTDMMNB1wh5ZA3L66K7J1cUDj5zkQaPWePvVjRQghDotD5HiRMfJ7NKYp77fpC8kFThz9vr4qNATek",
  "key11": "5kqPB9tcXHMPFQNQ8UnHJ1Em7FTyfpUhhkTvwkEsQz8GZSBCchrAcanpzRWukHYPRUSvyEzvERD9RCfyoNq2CLAt",
  "key12": "4vsA56WAoA7scLt6KGMQ2QBrs8Dv19t5brVc4Ta4KEoB84afM3EWBSUPx3cakYqRN4Up2zeL6E8NVJQGUfY7rdYb",
  "key13": "Eff9hhJW98VMY2U48bPcLxwDnEsLgAePpkuPg6uTzYZFcukhM1tSueGo5omusfgLiTC35ZDfrAW4eyYEHYDqKib",
  "key14": "3bbVC9pkNyFtfDAfuvBCdKFbcgzABWoSCHnSijazf3G7QvPzhypf9mgcAVkQoFoPcniEMBuoXNSwGpXgXZFMSYEn",
  "key15": "wkv9VUPsR7b2qjAJHoTeiMLZNBJyP2LCSVZ7cByvnAxBEX89jJoaZEDhpXUPFxmaijtVYt62HsHpaQDLfTtVHbJ",
  "key16": "4KVTzuAosVKtdZxa3QhPfjtqXrUYMf6GPRck8e3cpBGAuBjqc736mF8uLew6RswdnAdbdFDpteqrFgEuRRaNMzXJ",
  "key17": "3cQj4FqSpzxB7y7dA1trp4Jwd9qWaguNaWtZvmU5uSpFnMpQ8mgFWbBdUbZHx1H6YgtBoGA59PagZjGYKEcFbQV6",
  "key18": "3GzQQd5ECEf1xeRHNEEjLSwLfGzxGiQPgohvbH6T7fmBQGjnZ8cEwQXz513s3v17RDLbpv6XnY9baWzLLd89SW5h",
  "key19": "6tgRdGV1oVxby7ApRCYYjkdobHUuhkDAz7CxgwuDCeN7x9C6tZs7W1mNcEe1jCANJubdp4hoa6SvBxCcjQ2uxiF",
  "key20": "XKGJPKj5d21iB5mrW43jKhcdax6ixfwjFvAYF2CHwWPtY4xeW91EtfNDStRw82tsRgGNtdozgo2VaHgGrtbyXA5",
  "key21": "4tywEEmGmceAKbrbQLKiEnMhr7gYK9wFuDn7gMfkwGjfPmhAuwn2bmk2rDH72LyngSWyECA3z8UG2C9vgjM7T7ky",
  "key22": "431ViT1zCcYmKP34SVs4KhYA5Z86rghPneEFa1QPrJJK5qm5NtL38R3Cq329qHr7pPfG1eNhWmiki3wkxfnF8Nsp",
  "key23": "3eAQtgrdS4CU877NbFz9ew5HGrkdoGKVVukFmtTN8eTk3bYNjU5nbFbkWVWa5vpxK2kPnZXfhb4nLjawYM6Vmi4H",
  "key24": "64BHTTU2VwrNnVpFFi9hh1Q6P6VCZyKRCVZ8LQ1y7nuWth32dSsULTbm3ArAWcpHuBNabYSPTFqnv18voTB9qLCQ",
  "key25": "4R9XQGQ1AmJZs58uYmEui7Ei7yfokfdUUcaL5P4gCGM52avy6RXEmejruhgCddoxCCa4UTtWUYXgd97Ak3tyUnEv",
  "key26": "546u9ZKmHUFw32E8MZRQMmwgBn6DZYoMEzGN24J2LKbuzRTLNhZRF63Skkz73nCongMBkZbuRmENK16wcepUgYho",
  "key27": "2ZaGEEXQS4GnZVMaD8VK3hZBnVaMkNGtr5mNBdpNLDWPQfQVMMDudcrJvxsSArUpn43RdDXnzLd8wP4TUrgMz9Dx",
  "key28": "3aJdCAASJStgKGHCZC41JLNf4Ca8oFi4qxKkgUBstGKycwgGnUo51PyBt9rFVeAhKeoPkYrbDXSNH4K5VYof4cCk"
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
