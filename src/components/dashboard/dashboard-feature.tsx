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
    "55bE9UEJkKhu3C78vpKoi2oEtvp8QCg4vVt6ztPadPENmA9soY4pz6oMU3cW24dHjx3CaxjZB9QHbHdAptSuNawj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N2mvVawuRiFMex5apKpZtTfGFDPay3kMdLcTWdcqETxvo3EreNhoq7pyotaqSyr34CC8gwkxgbFHE2Mie2ssNou",
  "key1": "5YKUEMLWsRrUNYg5MfEntKiuzr2mLi7jcPpymMpBR5BtdhojqJTk87ApWqFTcYBYLDVvQ9c8gQjr1RX8Hp57zcEw",
  "key2": "cwcfDpLR11R38Wwh9AuL1ToN8WEaaTjB9rbAoG3inrmGRyKshkxxR3Td8oBVzgrRSuweF9jXvpPCUQexT4MuGZw",
  "key3": "36cn4rN5ZhnDrwDViDzkfMEdmbetD5Qqs77YupvcmQc8U6GWj5eSK1BYYFMS8xSfSJ5F1EqDfehHcSqyGv2iqd1",
  "key4": "5H71pJaYnFHPotj7rKjANtT5KkeHBb4oLmrfs28sKstTa9kx9FK3DB3HGnvBw1C3wjgQpzG4EtzjRQ7YVYdBGNTs",
  "key5": "5KipFMsgcaoobS7mVLNwFEzAQJkdKqgKjhKVaBiWRYy4pvzF8n5j1Af7bXR6nmECFKdysBaiiruCGrw7L15hYJ6q",
  "key6": "4wS76DQRfrQSqkAHceEYeWfTnSs895xz3YXrR6vdczGCipfMDD4gybRxdA4bn8neDqQP8gDnfUbs5KbB3fVwZEw1",
  "key7": "43VNSm3fFJKtnSVB6oif4jndowCqWYZwSbn8hq4T9ypsUFtAKKjeh9oV9i5dVMdfALhvPuKHgoVULP2xxm8uZc46",
  "key8": "27RRq4FZ3Wmpfn7qpwECgbrsGkt3kXULTGJKG9tAfLtBTLb9EgihZXC596qNQss1oAgrcCBaKQMChhcfTdvuVu6w",
  "key9": "2DqaoT1HTtsi6BG17FADasAWkvxPcxBYJrMA1ernG8gMLuuX8WmKGNkZD76KEYgbFNxkHKt8W8TYFzjxuVPWKzJU",
  "key10": "i4imbodraRv4KYMAjR1m4wrC9VV8ZhNGF7zPJRZwDsobajBm5vy3aGCAqEdrNvzprxw6pUhxUQpim7vwCYR6opa",
  "key11": "5uCPS7Kt4qQy9dfckmqj9GRipV46X1GnYiej7QZdYLqyNbfY2AjiStJMLFNpBVtxa1BwQ7ZqPDiabNtY2dav1ZQf",
  "key12": "3NcfjEJ2rKSRmmwTdTrBi1eE8BsG7ZoCKMs6yvASgYqRpgvBHE4WonZZDPGiENivcKnCicjnSGCyhtNmjWkuoT5n",
  "key13": "653eLBK7hGBzGRs3ZFjmNtAxrpmVYWB82v31g9DYxpPGe9CXKPwSogn5wSyj6iZqdxihB2pyALP118qMk2nch3fL",
  "key14": "2NwJ8JncPYKPp8BvfE6vuKPPDfZH3bRRpJHjGNewqjNnZwusDzqZeZrpXnnWZ3Z3L83VdU3czWythctHSR4NdzKV",
  "key15": "35am3GuU5PRFvtDCAnjMszNk53CSEW1zzRaX898v7rgB6xmuka2iA3DMkr5GCrM27aSpdT8zh729pevSwWnGCSoq",
  "key16": "V2D3v15UQEtSKmGa4CD4UC2WxshhT6biDhiR52B8Yw7Rkj9wjd3TLRTqivb2unQ6GtRAPK4QdAo1M8yi18QDiqb",
  "key17": "4gjPfea5R7ZsGPtXKQVBm7SePoegyv52UYYnpXLVaAoLfNRLAHxLXJFucr1H47KwcCR2JBXVhF9piUPbbUiG9ATe",
  "key18": "NxFMhLCSoBtUGatAAFeoMPWJARwYoWArfeLVYZBM4LRKk9dtGjCwvc86sDqSbVPiXUHzDPvorYEJ2hyzMcPSqVQ",
  "key19": "63V6UpvYS5TEcxoMKZmC2rsJRuirSbnTkeJBH3U7Vj31X9JJ2BpedEgggPHerwwpwX5WxGfsgGvqrmhmD1t27CwE",
  "key20": "5Sbqtv4h9TLuJ9Zn2BNNnBBaXVGm6o39LG9P3rjZZPj2ewgbomPueqmzRsJ386iKFB2WQjDgCXkNDJ5HFBXmJpLh",
  "key21": "3xaShae9bLNeMgdJjUWYCuipZ7mgw3CYVH1WEmi8scmTdfVN21ryypgpfDyFswhJhmTtNmhyamJj6N15eFhSPFRE",
  "key22": "2APQCn9sjZXiR7fBJR1j5WxTBB6qrABcUPRNrvxNbwmM5JjoLWjaTHFT1xjW16T1BUt2Ji79Qp9o4qKxzZhCogpU",
  "key23": "2GujXvrT8GWbVLXwUYBWqpUUkXx2u3CztWrWnU9oXpWVFg5oL6Cmij1PT3fq2oTiQrwvqfF97njo9Nmf7tGMsfoq",
  "key24": "4VWw5odMSBZECd6CXkZCZH1EoDNLvqpeFz4tNcxagLZuvwpwT1KPch4hpPgU4U98VQr4YS4C8QGsJgaLTWrowU3",
  "key25": "5uHDsEZ1wDNN1wNnznTKD1VzgZ3HzjodY4xghQQ7YH7hWagnKyNSe5t9w97LyvyJaS5pYSBxvHM18ueJLHpynUWh",
  "key26": "4YbGEn5ChsjV6ots9aap8wGHdA5HuphSTyvsQLKi9RkVtsvkqAPCvgEfRBskMhRsiTxgTEkissMtHfFMenasHHGj",
  "key27": "5YrsSc1hhhVj8GhV9syG3ZrAwNrBJKqpLvpB6rzsUr9icFSda5rM3APMPdQ2uLHKq7foMVYgozvJeMBKozKe8wNa",
  "key28": "2QdXUfRXhTNLKVeo76QmJWHTyK9DvR9NwiQunzMTrZQxxXxzJ4FpXvD7YpCkWL28FgcpnxYrPi1jeWR4KMykHVTT",
  "key29": "2fKuVzRTY8T8ANSdbUF1HAotdAUERp6wd3x7f2WMb5jjoFrZar6FowEyM8iXXCL5MGqiZqqGvQZ4d9CV74HjQM9t",
  "key30": "4qMdZvsCrCgxSfeyCUyqZNmDqSr1rM1vLvRvy1AggcJpK48Rq5xkVMmgFpihWXqkfWVagFbrnvaduQBVcq5WYbF1",
  "key31": "Aox9dVBxYwZXJaDBzey1zeyf2wNZgfa1b99rkUMgBtPvtUt9yvQxn4videWsop3Qe9P4iUGNvTDbpkmzAPUiZkV",
  "key32": "2ygc1ceeYKtv7jBQRNVVLNcHhsDyxa2htaSigsaoai4fGNWMukCkMpMtQdQrdVhJEaJWt5b87KrWY7XqYU6WP6Qw"
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
