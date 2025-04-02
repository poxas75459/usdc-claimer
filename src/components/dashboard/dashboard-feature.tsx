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
    "5YvsU6qzLAeBvtDPndHNys7dVv2xUY5wjYCDdW3CkbvxSZXVTACYHkRyXmB7FXUZenXk9A1vMZWrsfnDWgNCGixM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NVRga2vFpJtuSSBAYBvWkR3mzJduq6BoriBUiNQmfdmeBu8GUJQoDwXUrPF9G7NZYJJSEETWR52WwdP51fQ5T13",
  "key1": "2p4FWb6dxDhzsCoaQ3i3ktKW677wquk8eEWz3rLyBNnbMHZcUFEi1vXSADoCjKn1ntMKaUJK5hR85eUaC1TQv9oR",
  "key2": "QEneBLvf2yN1evQ3evM1uroyqt1eMVLqnnjXSWnuiNqQekrKnwbGGZX6vaKtjvhuQR8B2A7CPVLSkXq6QD9p9uP",
  "key3": "3fGLWbj5oJvntXbyuYbM9jZXUSFVDViwoujTg8DW1HJZpBksQj22e7z1xRVgZBDa32yjcQ1XgkQLgKd27p1a8CAx",
  "key4": "3ChsV5Ufub52zYu5fDmYYLufxVqjH1c6UKxFwbmmEhWkY2zhrJysrT7WeMoeGoWrKK56tGrTCwfLLM6Q22PfFau4",
  "key5": "3wf8v1LMXgDASU2RXmae9RrFu3eK9Uu4REsfuRe3hiyYfwhT5FwNVYwt2vGmEnKzSAkGF1DioiT7u5Ch3RrcfiG5",
  "key6": "ZFuaHjnwyNkWnsU3ycCaEhUfp7cF1VYPiEd4gvcCXydD2QUk5kcoCT2mDxWqXLwHWYPafMEK7ijv8fzx7XyXPaR",
  "key7": "27e9CSqrstP3tFZAWKHVdKPKhcBu9mByKfq2CP9HRHYb3KuxidRWXDkkFhvsLbPqj8wqSUgKpa5PfNPGGTK5ngDq",
  "key8": "3NnEznj75hcgjdJEzSrsx8n4qna8B6coy65WqTCLyyNUTi7EkhPZTZfnYBo5vv6t56fnxhM3ApFqw9zMf3xf4UrA",
  "key9": "J6MS1pRGXaLBJFiZUcshhbfMdpzXt7BYSKS3cZ4aDcgaQbJDVvJsqEYVMZEoJkxzRRNXZBUXmVuggPMUTebEn71",
  "key10": "2jkCCrhKNS4593R7FfLsnkuNu1VuafaDVvC5v1SUp3oi4UsxEeDCx2UXUed1Jxtth6oEgUSQKQb4gUtwPQ6iSrFE",
  "key11": "4gu6tfK44YhPVVC4svG6b3Rp2PPFy5618Tfb7Y1tCwfKj3ZHhUW7LFv53XujFTrzS3t4iERtvu8UptLyePAb51z9",
  "key12": "DSmu6z5xyjttVkg2ygGZBKdM9ghL5ttGccr9JnvMXRitr9oxGCsDBS2pdrSacZccnAYmtLaBfkCoyfR53SUUhie",
  "key13": "gjPqpWsuNQQpAFR5rqYhzzwZbhX3NeGHaEZba5L8hzqhNMrggTdjv91VzFutYzQEWUz8Ju3ebbThqi9CUykDr4T",
  "key14": "3e4K8qxZtWmmg4xNU3MXVVQp1wnf7oqrTawiBKQS9XU8kFoCNiB7vPEGusNas1tiY9ZwUXWUFjG22D3zHRNgMDAd",
  "key15": "5c4r9a9QPXGbyehPDkY1Lv3J9FmzqhHJnTyXwoKTAZrnnkiubqzjh8fKXmedUvCTUC9ScohiLQbYQ5YM3kbrsiNF",
  "key16": "4hWRN4p7gzxgLmpjiRaddSUpMMvBUvVQg9joR9BP7YTjE3xhZhYwV2YQhsFvEnitnvyeBCK4teoM2bTrBx4aBBGe",
  "key17": "3jHJVrh5ca5yupRgJaLjXCbfbsLj1cfFKRRFycsaB85CTo1HiP91USp3FdxKoFfdgTyuya4GgYZaMhoJ6MjTK26d",
  "key18": "4bJLXrEj6RLb4eBKaxr8VGmMWhKuhJLWGNp9gzapNSNtmGXonRhcGpQMUpcRgX7tVXUS3LPVa6UK659ah7C53Tjd",
  "key19": "5AXz6yCKqPYEdc3nN7rSqcupBtVaFKajVHfYRDPWyAs1r66gYwtE12zWoXBv6dKtEmuqqTbDo8RX4i1ncC91cmxK",
  "key20": "3fNmMRxN63pycvFPsq5eyN6qXEPJy8gZVS3YnH9hBKsm9DdWioou5eUM9wCiFJFuuCGkV7pFPS6aj3CgChRk2njq",
  "key21": "5fdxu7ka4ABEcziXhqc9W71oX2iCRcwXgxjRv9UpAeyVFEBkBKTN7TW523R1fZ1sMdqbWd8EcunNXbwvrHMs3Vkp",
  "key22": "4XYQU5Uh2Lsq5V79UxX55MwxcK9481z3UFgqjoGxkZSibTjgdF43dfowgCCY5thq6xqPYa5Yzno14iALBf4XcSvT",
  "key23": "3j6gBhUm9fMFbQHRdFh8eiskz5ngutcUoqjKtMerEp99Q1AFqTCXyW3GTHcvWqP8CzGMPZ8DqMNo8mcyJc3rwke4",
  "key24": "3ncE3QgtoHyH6sqTcdH7eaodCrQnJZRwMptx5oNfj9V5DsFdrEjqZCfR8Q4KfjH3SJz4u6ZqqW2wpAyj9Bqv7c3b",
  "key25": "3SMBpNTMZfqzdARg4dGW1ZYuNLuBGpcn6GrnTf64ooDzTb6yddvEtw7fgnPWBSsmkB9vvtghibjiYgq3Jmqn4Pcj",
  "key26": "f7c6izQazTAncQ3zGxYQyCR1oUo8fxZXiBsjen5L2eYDbAmXCFbBmdNLRwfFRom6gFodWMyurdYb1XRs9comLQo",
  "key27": "5MFgjUCwvFtesZzLuMK7DxEDrLEPYRJRUaXJWbgykscejSoxgRvKnzficWRSa6SCeHmaZkjkkiTtAY4nsQpbGeC3",
  "key28": "5BCgpAh5PkufuEVLKLeT6ZURQVZggsifZvz8uk47uB3tuWq4ECjvFeEzdMN6xx79V1BuJbRDraxRcb78bfKbMC8Q",
  "key29": "3b4FBLvujArszDHUZKkMoCP8LTZp4GPYNTVwJvw6UKaT2eEiop8q6arw8hMcFENMVp8CVK5nh3gboJc6MZB6GP4A",
  "key30": "qNRamncmGgVHsF8p8b52cdAwAkD2jEYq1EHKHLZbMeSRbp7jsDn2f4etiGYYUkJBy7umb18vJcxAk7jchrTNBkM",
  "key31": "BXPsnWNynd2mY3j985k29tRfgZQ3LKGBfqQannnjeAmWP5ZiuUfBQCdtrAESLZW2259sGhdw9ENEJuEYdXxXMdu",
  "key32": "4VZYoNCDPZMQHBVtjWBcSnFcn5SA6biJPXgcEhjm1FhuiCQBNKwBW6PUYSzPWfc8geWszLhbyNUPwHsB2WzndTU8",
  "key33": "3jDqXexEE7ztest1HMFJ1X54gFBEj5HVreBa5UvyQQjwQdc4ReSvUGmJ6yuibE1SKeWJSrEz7GBPuevRN4Zdsmir",
  "key34": "4VLpT11TwnW2sAYZ5r2jTdbAhhqav6LdsjxW1ku8hJjgjsM5o4LgKSKCdQMjqTEkxdYHwxLGTLpi9Sdwr7RYphRv",
  "key35": "3hi6346Nb7BRjZQtXWYUbCh1JUwF5t6vZLkDGQTFRQzmCHHBVtcxi3g9wjiv8chJ2ZV4av8xg4nVrXsZnmUcbe5",
  "key36": "5645dwVNQeY951RQLyTWCk1AYphE6ez4WrLuMvUWnk1Rur76tFrf4d92yRz8Z5BKy4vqsui5FdAYgArpDCcNTxKg",
  "key37": "53RpoFaE4yYgE3zyZ99NCvgtioSnzJo7NmFURvqhbuY1334X9gv7SEo9Tpmc5F4A12ZoiLMtTHtgRhrUUeQ8YciM"
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
