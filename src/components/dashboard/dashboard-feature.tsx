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
    "2bXThCxFdSdFEewPykZ4JmZN9kbCr3kxptZpUxZhGXYvAYiUqMq2XW6qEh4usrD6ZfnPo8jARxBCQzRGHuhDfEib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L6AHxFMA6hjVEjAB15Eo22ph5EEcr2DAYfRWgUzViFTswsEqfYmW8Jb2nC5DJYUae7ntRcnVHuYRBGZQ42YCTmF",
  "key1": "uy6ZVQtx8ipuwaKXUdZVqDA8aFYGnHF55az5mJ5Tg4zwdK5xKkhQedxvFV75KSuuWoGeDVn2GSdhNf8MBQzgPMJ",
  "key2": "5sJTbkbKbXgmwQBXCfF3khftAFLpyrRk7nsvKB9Jr81R252y9UZ9Yv3yjFfv5JZSzsTugsRmju8DKdbKA7J6udZC",
  "key3": "2dLPNAYjVY2HJ9WSRpftGUKWB3yKdVYmCw69exGe8gbyZ34gJB8xhfVEWN69EeNKupwF3N7vCs8Da6FrWcdoBoUG",
  "key4": "4upJUJjZFyBPuMoTdZUPacLepNfWtqD6JZuoUXfawGUGFXYUyB26CzcbavwEssuDgXzPchoVjd97sPtYfRZfFPtw",
  "key5": "531FJ5GvGw5cevf2itN18NzrGdo1E93yEyzi3YjN8Pd6qFLpN1dEm2n9nR4SBEoqkSZ15hCvyvuGopF8kjaxBiVf",
  "key6": "Xk6N4mXTDdYnQUfcLWEtcUTLiuHrAGorwJqG5FuUj72s6qX3HwcRA2gToT3pcNRQwuZYRAdeYvPighyrB3HnY5Q",
  "key7": "3mfPbJRpfrfV5xYWoj8CoTFihvfQQz97DFABkNhMGYF5xEAQcBZfLhdi4YajryZwfgrXBqMyVVML4rj6crBTjrd3",
  "key8": "444sK4C1vB7J19QgmD7XnkV4CadcpHwu5TzZvVmyeZsifNo2HKjkJY332HxgCgQmWtjqDBwgw4HFbazVKFCKC68Q",
  "key9": "5qrnbFJ4FSYbiLpsFF5QSjoF6dH5cqwPGKU37QK9bc2f4bmtck4PWp1umAoSkNW8qdVgs6V8kG4U6G1dUwQUBjRp",
  "key10": "2KDxAa7q7usHzpqGU7ijuuwUsE13J9EdAb6khAgp5L42B5FwmUUBUhJa1uSiXPmd2zYUFihJh84TRGFBqfTy1bRZ",
  "key11": "pfJJfyXzy33tbnxJRdq1W4ncnqpTtjPPEKejv7s8Ltwcwo58cuvGez24cqktWj3XHZFCEnkpgyJZgrM994FCTpC",
  "key12": "4uFw6jRuRJiomMNvfUuKbeGCM8PDpgyqWGRnsY2LWrFG1q1oN4sJBfVb5VQBVWF2oW6ZMwARymVyj7FEHfJGs85c",
  "key13": "52fGsC2BayrZbou5AUVvYhEr7nGED6bX7f9KeZDFMDiid9X4JQSvXCA1mceRc3HQFnXFxkMNudfkmTb1pxrdepKT",
  "key14": "NMLZz72qWqPY77PgkWmkBpqitDKfhbzDh1xVxL9BkfEi2eGuho9BPEYAFFfHsQfjLnGrZYTZ6SBf8eodGxrhKfF",
  "key15": "3jG8MRoM129CjdAuxT6q1Fj1xkGNQ8pEG7Rzi29jN51uUEQ7LJ6Yojg56wWWsN4TJZ4HiZ18yZZUkmgXiH9UcWFv",
  "key16": "jcs9V3Hyd8KUyaJgzZ3ELK483BrCwJemnSbMJZh4P7XcDYiC1PBWiN5dqGjRq7oJ6ryEpT4ge1A6uqcbY3w86Pe",
  "key17": "5S5yzWro3piHsFFa6tHootQQ91RDg8b3oWr1mak9KA23Lc25zD5mFE4jsEh7L9GUUEKX73d4R33ovwPZaHZj9qMB",
  "key18": "4qw31qFV2bmDRrpZyxfaBbPMF8Y11NVAZwjPhYEvoK81j9SiwQ8zwkRcaARgFBphu59hPo69x35oERqSrB5QrcWt",
  "key19": "3KRJgenJ6NRTZ8geb7eaPhbBwtb6CQHS7JmWvZ5FBBtsdpsM4B73ToiUDjwadA378wytaiS8qMWBmgdachWdomX5",
  "key20": "36V3gAwDnZV3Jbvxz2tgpCxEwtxR7c3B9rSHHm6cYS1XK2CanMvoBZwY9EQ1h3ePRcrZXNpK5vFDoLmdJxApZuLQ",
  "key21": "3YbWK5xucRqW8KXEPGNnGsqDTThnYLeisfmFft3QDH1CHLbDx2RpRV9ciGeAdxrN8c6K29itdFbggKiduRKuBb58",
  "key22": "3aH8qrMRcAKMLV8pAyiqEwo5SyVCWJdketQA4pD39v1JoqeY8USKWqZFjEt7zahe6Msiim6dENC7SNYbFigLdMFN",
  "key23": "3Nmgy72kLkKuvUUWRv49jgmRrCkMbhYPzBMBfMquvK386UxRvNDoCdsv2JLWGddKPi7KdAEZDs3APcJLc8GS5tsJ",
  "key24": "4mGSmJtuEETuGZWFothpjHmZYQp2E5jCybF7L2PLjpWujgvaCe7aKeGuvh2rL3ZVLQTzDApFDCkWFHEZrvkhpqh8",
  "key25": "4RZ4KL9Dh8CDWNwNdFongQ4MB9zAnWLymcBsV4TLsYEZkxtkXVTraMwKJEQ7dTdTgKyjfJyU4SzreLHFYVKWUjfr",
  "key26": "4sNqyH1ZSYehw9ctPR7yDvsNb442gVztPkLYDhRzXdMGgb8EYQAfnD5BaVne92r8hTvmPBM62rVszF1mj4awXbdr",
  "key27": "4GDB85QwcJSjJMPvua9sG8SCbQ21bdmgMdScDB6cNE1MkD5uiQQMpKum6LxDNAJo7b4Fwob4SEj2uPxudapv27j",
  "key28": "2aomgmaNayfuTFJFpjT7UyCvxf9EMad9xWMbcUoztSTLcuxxdPKFNwGwReWSSy7TuheNedthsH1J4WNv3TpMDD5C",
  "key29": "5ft15n5zSU3YH9ruoBjUJ3yEWZ1C5mpvV5qtBK38YXZ5z8oTfJ3widsacKpqPYC4vAiFwobr9qpPq2QicGD29Ue6",
  "key30": "mgwYsDZ7ewkHKVHZzPbBhDbMa2dAT5jmHoNkxHsPo33FzvbQ5ZyVWEct8P1jGKtwQkt8Tmne1NUKBVxaoNBny84",
  "key31": "3A5CtRcpLNZfPbnd6LeLLgauKobbW3JojA2RPHoZVMi2ztUqQmBRvLp2jSpHd6HJwDNDVkcW2kPUZjRuvsnyFHXW",
  "key32": "37d3b3kfV32kgAW763jaeqNQAQR2foWedaoQyWUeBpwn7RgPDL7WLKeAfVB4xQkEg6eNKyAko5tMeRTqbPdvmfB",
  "key33": "GGHDDbdt9zz36Q41RcvM55fY91TF3nTp74wxmFeAvnPgjXbReK12krdyuJBxSZvc8fy6jTQSpcEZ74risSZuSo9"
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
