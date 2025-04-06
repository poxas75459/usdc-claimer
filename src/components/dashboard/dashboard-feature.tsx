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
    "3PFwewgxTJgHKQLRipbKRRKrj33iKsGjzhrZWf6wbD42FHhJCkmkXzghCmu8esuuoC7274QFg7VgLUG3bUfdzXFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ZJ4CoeBva2VgTQNqWFEWcWsVWauvBVPEYVQr2Ej9bXbiKREWGDXpc5Pq3xTJMeKzUA7vhzLgbj97GvQtWeFq1n",
  "key1": "5Gk18bsJS8be8HNGULEKcUVvhgzRqK3eDQvj2pTFZEPrbiDCKVGDyoQCW9vZ3UxivF4UBjYHNmXJVPd2TJKzfM9u",
  "key2": "4VDUhY25HBdQD5CT6M9BvzkYrbL1ZUKtoGbMNDn4LJoqQUr1jttBM89o4hKprSKigm8iZUtqwR7y4gtmFPgB98gD",
  "key3": "3DcGkaVGeLPPgZ1mf4QvXgWQ94YWfcVAqA87rmHznHWAbmYJvZ8frFndybQVX8g5XCETSbAxYXtq61LgtFjkVVBy",
  "key4": "3ExtcVzrqHRsXFkn7jZK11XTdtbjCoRqeFxBJmNU8zPtBNLb2jh5aJ3Yk1h3DjdB3ceEEzazown84xg6LRdLWtSN",
  "key5": "3cLfMDRQPT1edZFFBZeoPXiNUVM7RKScK86JrKTEz2MPwyF6o7XcAEadD7cdjBrzT9HXXNb9CFmXagwcGUSSjLPm",
  "key6": "3y3zFzsoMxYNoDMvNZnMFuLCb5Bqoa8HpAjeSTrupmXRj8gvEiqPrU4SDR9qSJ7uQngmNYMq4xxcU2SCLeHC4BBd",
  "key7": "bDmX84ZWWGDuGLjgqoifgdfwCTMdcaLTdSAFgKhjC1X8qk5P5av2SoTWAFxhJXiMtEVsc7LcZy5c28b9VRcLi7v",
  "key8": "3RuDcJsqBT873schUMW1rokN8RR7CkJ4YiMrnFJuS2CYdvGEzkCr6TsyEUN5JEnz5wi8uuj2f2aLN1DDKnvGqJF",
  "key9": "2JxFAYEi7HVC3sRUrbu12w2zFFZDpQvzbLsvZLfsesKE4WjTcCBabAyLDUeBHr2CiLZ9jay9WHwF761QZoKrQgyF",
  "key10": "5JH4exVjs1XqR6FG6NZfPi1yP2Vga3Z9ze6vdMQvuZXushaBChjNGUQLBMmJ3o8ozYiUnn7Co4Cm3xVZ2CqHFvn8",
  "key11": "2ynQcGK6chMggzxDxnsSdmBSpK34VbkjrN2JY7m6LNtVUugX4W3L5qqooyZbZhu3xS3BWeKLRcGg1MXKpmJhyYK7",
  "key12": "2LrWHFs6oXWYvn6uCFjxDJy8vvAEDC4kdM58ezenY9M67WDFLPDNTVU56jUGWhyyu7XzcNVj4mQ5SWxXLXdiipDc",
  "key13": "wSZDkKBo4y67bFUZkL1oc7zjQh1r3AEKyHn8RjAhbBFGU3JfG1jp2uBiyyogt4t7bb69tgo7DTf9MF82zg5WuDF",
  "key14": "4XeMisq3xZAYN3wFXrTjdUfc5dvjuCkVb13EnLwXDQadXxJgq6rdEjigKyTn6yPE6vS6yA21nJ5WYCnKMzTXkz7Z",
  "key15": "2eM4RRazoBAJVn6Dn5B5XV5Vn71V5qpMjKExKBbLbvke6vqR7szYZPaQJvKQT8KKP2fqPt1B4UKw5Zu1s3g3brkY",
  "key16": "4TnpiqvjaDVksWCB7H4jgtCL3ENdBrNGbHPqDLgzoCWa1FMaosJTPqRd173ih4dDFpT8zPyAHWha6Th2zovCFbvW",
  "key17": "5htujjE3xUXAHFq4dHeWUK1MxQLWM8XwPDs3xaJ8LgBsWuYfwMKx8VcpFDUMLyiuQoUw7meNxk4niWnUg9NMrpBF",
  "key18": "4PUX3PQvcConZHmUWneatoKPwJefBPFs5cQmDfb8JPozVVNmWLW2t1zdt37q9xY7UNryWAqRq6Euzk3xg3kCTP7N",
  "key19": "4kMymrxiq6f4zAu3yCgfQXxohuCebTrcyReshZzFN3YQL1zpMNUKujdHizngWFs45Ddk1V2ueA6sD3DqYzxNiBkH",
  "key20": "4X6Dd1REfmSkVMqaAhwnzp3Zz9dJbtAuJcFBngU9CM1VH4X2QwZ1wsfEVHB4sSUyTAtkpcD4qqg8nfMtGBPqtsPr",
  "key21": "4HVJRV6DNnaeHBKWXdfDWh6rcEU2nEJfBG8afVPXzLi7WPSEY5pVr2C6A1CTewpMgH3tyAEqhKZjE5vpiyzSwde",
  "key22": "fSWA5TKL8Q3DAdyKgRakw7CdrxGPuvSv7fA9M6Kww3FNWomDvptUb3Kqh8s5srwHsyBg5hU6Cfs9LCzqiai5hNU",
  "key23": "7RCATV2zA3tEPBzUJR7fMceuDjZzvDYsCrhgjGPde8NX3K3krcLL3rQbFAUnHUen6prD2g4a5NpQrJ52PWzv6n4",
  "key24": "3ZUcYnDcty7Wi2bvLgxBNNa3VEB8JE9B4Sd4y7Yucen7zNHcbaCBQ58ZASvwY8sJ9TTcTM5NZPTC2aSom3FbYFL2",
  "key25": "3y5DoFCP2D2kH14CeURKLnXV7oLzNm3wK9QgxddQV3ijJ6J5x7ZY98qWDWXXBxd7WozFxFMj2wKNNog11yR7ak9m",
  "key26": "3CNJApgva6FSDmTK38oTo2LtGjeZkrjYDQSuHJoydbdqd9szEH6UuXtBjCJ3j3HhdiQQyDmjAQZzXsh841JhGqnW",
  "key27": "3u4M89oe9zeoWqxkwtGhe8BUjfuWt17bmzHupRxihREhNW6PvsJwqwVV9dEwC9NVBLNf4713jAxomwzHxWXtSyHB",
  "key28": "32qDSovRaX86DejBA1enSPF9GdPXkcjYEu6ZgHBoF65d2qVdSAqhsbAz3Zf76M7Fx8bh7qBtRKuHbkEyL39kbK1j",
  "key29": "2PB4yT4H1xZBs6XnmgHDLRt2yFPFjchCtRuP598UxqvczQ7joZ3i3GAfJnoHBuhnT1P6pQGifdDdKRoP3YaY3sRR",
  "key30": "D3iRUPpFUuyeqd9anezbbzSEoDkXUatroMHFPizAoc6aJ2zUPvhb6vZqyukrUgwkVhvhaR8cnWfodF8uujgi4t8",
  "key31": "5mYiwQCJg5eNBdQ8AubgyCEeMjCb1CasQgwgc1Y71v3PzWEvVN4gCBXjGgKtFQNnZeTwBDPc2stux67NirzoWj23",
  "key32": "4tMt6FA7KyChVRiZtb16GH6EZvrcJiLiJVjF1y2h732qKgd6kS4a3xZZqktjLjhWth397h5Sk3s4Vxqkgnwzn2RW",
  "key33": "57DcVJK81WEa7MbrLMoji73BXNFqgAD2PxmmBFb3XLThHFj3WozQRRQAMohoDBTVdEHPafpLJRepzdDieDeG8sKM"
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
