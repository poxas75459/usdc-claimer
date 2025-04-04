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
    "3732fK2LvdWnjQh715VWHJGJpzDTqmK2ddmEAKZw6S8tFv2ZhpUxg5Zu9G8nfD1wEHx5DKhpStXwhnTCzNNDQieP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gLiBMP3QEvW8BZnwD4sv3k4758ctTaqnu1qtF7M5pF6iJeqRE8FSH59rebCyPvCh7vuVgb7NgQQFYHtyDYoXYCg",
  "key1": "4Um61SWHzoq85wypF6P7G3mTmZ22Kv4zj5PXMGPSB7Yecag19sn44pyfiUK3bJ258ekCLZL2LqZkM3cw6xYqhTLi",
  "key2": "3B2CqSS8orUhgraf8gqTbK2dCWwLDWWMDMUwH7hbwNDyaCiSZaFGovT2MepAGZXc8defRitFpsV2yuxtQS7j5QiQ",
  "key3": "3DBEUbjJLTtV1GMLgwdvggojENYLeJ4Qs9Vo6raw3TbpsRqXCFEXHAHfYCZF6Pg1Umzp8noXCSo3cv2tZHCgWx8E",
  "key4": "456wR7QCBQ6HLCkfysRDLAeBscwX7G62TsXmFwjK819jAgwi5SvVrMpNv4rEuHr3VSr8X18MngcoxacAp1tmrtwt",
  "key5": "2AuzVKtzXSp2Sch5ypxDEUKE99uLS1Des7vpxAp8CxpFCbewfnJoe9tMw57xBa5Wnj2CnwVa9JkrZEQdye1xftJ",
  "key6": "62Y9tUmw3UxyRLpxRCznVggMfRPErqpHCf1Ufz8LBgc9zSpfs5USn5hRGHnNLWcdaULmUH7dre8NWygh5sfXaq3o",
  "key7": "4tTyva2dyYMmchnafZMGMWhgQx3fs6b9gu8o4TU4jfCr56TUndSGWRuVdhddpNmcRcFHvgdaHHzwYDNwqcePHFoR",
  "key8": "q8ADWMpHpsNGzu1qFaqF5SgrCKzABeVKb4o1E8UfHqaB5e7Q3odjS5nprNbUFB59CcWzch9nLWjTy3MgmJNw3wx",
  "key9": "fJkK2nXHnytVtaSBt164whebAkx9xCV9h5L4YzB62uwe4LpkwkBbQkRM4im7KS9kqgEQ9KD525xKMQtZFda9FvM",
  "key10": "cVwv532oKnrd3XtVnPLw8APszE5UPSfXqUn6irqczsxLF3iVjdvBgKZyqztfuAv6QnvdrTXim48QVkUeN8r1He7",
  "key11": "2rMZK7ueeRAgb9bqhhEFvVQ3KHoypCnz8MUmxyft7rTgxs5jSzX4tuRWgDEXgn84Gq9AMCo1iDvZHNMUFM65agZY",
  "key12": "2bAgdEotEMchnYzgEsBUCPi8n98NwLrJJ3uivAA3kj47SwK3h3xRzj1LKjHDCEVHiEjV5D94B1Ts13yWqZBDT7v9",
  "key13": "4M93RGZGxoAD4KB8spk6DqtAKerjNR1HjkHwupnaUudCVJ9kGsA9iaeSSHdoydmbnYV3a9hZpL4vaGE21H7Q9GAC",
  "key14": "5j4jZ6Ly4FS8pctvAVMeJ7buQucjG3CrSjQHZRq459fHPKMUwefSsqSbkwuLTLNv6uPba7BVt4Sb9zkepxyervwA",
  "key15": "54zrPNNyS1Fr8YfZBudYhCgdiQGzbm9Ej5mvHHQaBZiFdQRYD7v6HSY8H5HDPY5F99gg4pY65KDMcbtPProznr33",
  "key16": "4fJyjyAq3XKKnpjJtpVkahH6BRcvkzD2bBB4ng6BUL2AoLjj9vS2wNR3ucvVbzGUbSQ7sRxiMfS27MpNDyqisK7c",
  "key17": "5PLvXiBvHAjEKaq2UDEu5ujv92vzf1sspmsKzaTxdmpdcGD6BeQ6w3apumR36FDf1RXa1oU3Bb7PJ2FYAZATubiD",
  "key18": "GRAgLvWLN7r9KooDTdVyBjmbZZotU8f6ADr8yUMGD2sbxhnWtXftENywUZLxdCfKaSBp5UFVusUfKCkocFjGqif",
  "key19": "3ZTmYy6346zynjb8kJPfqinCLZ2j3aXiNmwfWbjSDwZvEoiHKxtxyNvzdhFWYamovM8nn8RWgmvFdUBw7Si6e18L",
  "key20": "3e9WAsMtfUzZSEYTXGeJxTHTwbj4JXadk26uvcApUmYMthYeQo5e4TRfzQQgrLSyrCj1qqT6pn8D2nZwCXN3fC24",
  "key21": "3wFiuAP7uu8cKMmqfVNX6fFAucgdBaxv6JWC4tAAQCwZxMxgt3CTBhRZfYRsG4JiN45v9M4QznT6MLM6bn4eqauj",
  "key22": "5aVwt7joZdZva6no3M4PQ3t2XopzQXzcQ1fDDLDaoosFodvZyVyFizk48KDccK8FWA1xUEkM4zJgUJbkvgKQKug8",
  "key23": "23Rk7GnujduNeoRujsPb6VgKuJtLjwRpdp4NpiAHjQg2uWUAHA9pa37w65sUsGqCbirhRQnxEq6jNYzEGEYczg6u",
  "key24": "2YiYb58v8vKRiQNAqDv6dXnZjNdPTrHvhtu5438fm6RgihzDk8k3KNRztPtmjTMdCiJibdeUu1Nks2VG3E1FyBNu",
  "key25": "tt8bAkvXRWo9Xg9V97pU7JDZxYxoqQDrKJgFe2Teh9wxNuHcbPC9fpNxviUVdbzMyUL8R83jzPygVAuQHy3ZJpV",
  "key26": "UuahHWcATBz1jAnNaMfRUnFU9qT8yBfX4KKUtSXVASCLYdAWzFaMzxisAhmUT6R8H577A3B7iST2ECFxoMronZX",
  "key27": "KQ8HSJsex4GmDLqt6kPs7CD72n1qNnZF4eW6vxuaLfU2SyqjAj9ZV9o9yrSKuUWCxSSzL8unGNXHUPktjQ3jtpG",
  "key28": "4TYmrTfqp2Djr48ZbQWvvKxXbkH1Z5cwqrVHT17WALEQHHWZczQ1uDhXBjg2NiTAtyJRSpP6kw9bbo7ncThWHewB",
  "key29": "4xBc7wKAs2ZYJSF1CMrhdHyBfLm3WMLdkK1ZnBsAt8ZordXco1jZTHwGakxELjfCSihcj1hfkxtEph5Hb7sJERzP",
  "key30": "3np3P2aYhj8bjZf2fju3dugQqeLCDtSnTYw9mZvctp8Yyv8dom1x55x2vvGNEx4hAn4Sg7dY4dKGCXSjwo3AEA7g",
  "key31": "3TxXMegVaPEiLefXuure1u678UhtYcAP2aKtPoC9rRrkmuG3Au229M9jJrAAdhXYX6DcpJK4pEoyN3SU6YoujACs",
  "key32": "G6CEaX3nhpuKm6BhWQYMVWTX5dAgZCF8LvT1Hm7mMAiCsGQg3QmQtEyRTsvRt56ZeosHxCgxB8xy7EfMdyqZhSu",
  "key33": "3df5w9D4A4dwZkYMsyYPj1FEdmZzMP35VS7NdrnVx5NyKKALuRBFMcstUfBSfDnnQzCtzcY7uMmRXBs934RidRr2",
  "key34": "5cuvuVEBoJ5Da9tvrK1EtVZNHpRfu4ePDy3nLcv3mTC8YXGmwzHPktzhhrwsLkHCJLbBPFKr2Lk1dn4RoPDe8toa"
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
