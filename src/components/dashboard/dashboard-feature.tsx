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
    "2RGMYXBrYepQx8WQRRkVxf13f4236cCpBCoRqGEPyrjQ1fvuFSiYMyR1ZpzaKypFj7FRyv5zC5S4DXT1hc1vvmY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZGpESuwyUcSdRr3NByTwdKxMkZr6PCbTPLGuGfVkf9WZa69JeUQgywecoQq5Wnk74jvuJ1JhwmWGHXgqu3LGFsK",
  "key1": "26JkVqqVoYDBMVR3ckic1LxfgmUf9gruZyuGkRDB511Z8wvfdvgwAwZpEaBJ5QkUrXfDjskMu6jjeGycWG7SLx7A",
  "key2": "RTYDByBrkLKMPhZbmMo6ba6YXTbqVRnznWKqCTc8Xu6w5b2T1zAnmzyarMCCPRyFdWxNe9BBrT7os8t4DnGNhqL",
  "key3": "4k9KvZmB3v3CC6RSvjdg44WvFVS8vTiu5T26yPy8QY3NdN4da6RCJNAFwiDsaxEThDMQpQxub6aonWKhV8PWbZZ2",
  "key4": "2QT8Tmm5vuFkhPJCWFvpLV7dNSFM7SHcfDoSk7VvarJLGJs67TgQ3EH5P83Tkm3axtxVEdeL6D5korzuwc3EkPzY",
  "key5": "5PFgFiEqQ4SBR5i6hq72riDkv5ytJgyDnxTrP2rykYtoeDQkkBvxUHEE3HQg7ftdmEuFfhtjb64mirbEg6THCKC6",
  "key6": "3bm5ocG2F9W9VFmxmS5CYgWkdZQhyhWG8qjXy35uxSnFtjK5qTzk2GzgYUEAYUAhMDFG8D8WZgN4Ymd6GnrdKG1s",
  "key7": "28E91vjvx9Jje2pVR813TY9h8En8ifBNQK1qpNJbFvHQhrv1TS2SWPRqPDJMacEzH65FmSJenGhdKtt77F27h6LJ",
  "key8": "1wZS1k1iZBmokgepqd9dy4fKcXux9nDv5NCcBgmSjxgovDnrRSRU7BTJ48RugXX4bPHV6g8u2F5qh1SdRdbTPk",
  "key9": "2axG8Hjp4ptMd6LFtrv3wVP2SdScEom3Lj2VYQFbVQros9ACMoB9zTzHbpcopE9KwmVuRUaoZ2ieDrMUp6h6Dzkv",
  "key10": "2XnxhDQLyWQoMKETfaWPHWD11kXtUBvnvqr3F2f3D4797mo9fFXV15aYSsYChFwC5WB9aFxC7UN4m3Po5ANrMN3P",
  "key11": "4C97whnm45npnsGCEegstXPqX5X7WC52c4yU1YuKjaF3RyC2xYWvk91GxSR8R2b5Rz5a5H4fDjxg7ZmpKEcUBLRd",
  "key12": "3RkxpX7a8VSSBzicBTGh6LQpy8Zpanu6cbpX9d7VCSw3zHeCnvkk1Q6uRhyySibMTHbuvqSRXjUEa3exfDBjMHwy",
  "key13": "2mijeQumzZsPuUGsRQFBSroGZF2ZQN9roWWC7DoczKQBjNFAqSzo1iVNLzKx5PSZjZKSwzikN8Jx47qQW354cnhF",
  "key14": "3SJbYFx1srNSd4qcX6MVD7pwyamL7iBCPdd5TiUW1N1p4zhSEwtpxDFr3gLcpn6zUsiGcEYr8BjBz3gnCca7T9i2",
  "key15": "2APKQZLjkvXwzBHH1enV8BRiUuSDrY4ZDUGhk9vdZVPHYAskDg7Xqk89g7p7qgjzDGr1brdv52Kxbyzfgrvq31x7",
  "key16": "3FaUB1j4EzMejgmh2xRtwWXCJjK9Kq6KcGscQcWm3QmhCQ8dWzBHDTfBwQBYhABZ4hkQZzAXY4FrpRNYFpZ2FGKB",
  "key17": "2AwuyEAz139purxb3eQ2AdxCL7SBZv9e1YK6rXWXwTGsWN9s1aPGTmpvmYKRJbB7hk6YSrsJnqXLutrxjrRHL7fQ",
  "key18": "5x7RdZ7mDQYMFotVMM5DFxxaijp6d2Jri3qj8TeXL6dttHnG5e4SA5DA7UGxLwJRWoEb5Vth75wgv4kAGmobXuTL",
  "key19": "3agcBwacRof7Bn1Wf3xSuWYgTvquJVJjErWioRbmmPniieQdBtHev58VGWVgBaCABnVzvHsifLifVpXSBZ9PJbBx",
  "key20": "4jFK1sELbn55fChNMvZ7zJAZBysrkdoZ7a6TDrkJ6fn2zCYhP3fgUEzReMER828v6rMLmrKrjF6jubthytG9ALEc",
  "key21": "3GZ8iAocZrqCMRn1eztrzd9SZ3qwfo4JE3UejT3tjqZqCLhv4irgkLxRzHMyuTaAbe6uGMTdsuoxE4Us5UHbUxm8",
  "key22": "2Xq2sNkpbMWSAaeKMrZ78LtD7766JzEmDctCUe593M1cRBoGWKYhRBDQscZ1RASFDL3wLgYrABAThUhRtYaA6Beo",
  "key23": "3KtB4mWd97hjNtXRiyRfKCuerWyyPnkNiCPZvN9oB1umgWoqEnw81JLFY4qePRyj6dsffLbCKv74JM98FYpu8MCK",
  "key24": "fZ7YhzNTG5RnaA4oMJ25WgBKZAAwLjuWeY7PrvdMKmJqV8FQdoQAWfQnX2Zvm7KA4tfKRXk7fHBGvNqQD5s4uqB",
  "key25": "TNCyjww6qKwQ3kt2TuuvKjZtfEvq3QWMfn9YBSrFVJYjhTN6WAmKbpRjXTBKWVM6PcSqfYnTASb2fNCUM638mH5",
  "key26": "EGrpAubkfaXDJV2c8th3ctgYvBLZxUrg1Vc2dUQzZLzvPge7Ku7Rt246Pp1BUxKha8b8kNFsrJpoaNd7BfqmXyy",
  "key27": "4SBki2Zhce3jXiYw3qsmjhjCfVrZdDDzq3nfmwG56UMUFLpdC7ksnvukNvuo1A1YZmT43iWtkmxpfEnYkBsHDyTV",
  "key28": "3iyF3HwyVopvszES1GQS2wzbEzinKY3d3BXSKZKMd99Pc5Anh5P5m1YwiaLceFUxk4Z8gfNGvMKQDTtBENaq4XJp",
  "key29": "3xAj9at8HDnsReEivfUJFrLPt3VVMsxku8uPf1797cJXQGSoS9pMSyMYCp6JpjCEeQDPvhmBgGXYjFUqXDZ5d68D",
  "key30": "3B6B87zt2LqjaogppHsRBt8AYMfJfLFkrgD9QNfgL5RyoJ8ZAzR2XjPQQHjmqrjW3XVZCnhTbN6tkPbuGiqs5C8b",
  "key31": "2NL4dUmabqgnoF8ubnh1Lth8K3BrwwS2wh9tysZe6EjoDufj32twpCcFUa5XJqa94cr5VknQEEjjGuovRcws6Y29",
  "key32": "3AL8k3EtbpR3PTu2Pkg2fpadsbNXwU6yKVFBdhBDNc2qc4ygwFC8Zvii1o6jd1awpjNk9uBam5tJ6WSuypH2F7gS",
  "key33": "67mkB96TtcnaQgJMw151uax9T57mnsA6hgM2cEaHTVBUbXjqWUtc5XWwtUzr4EkNJ6AzqQf5iLjddb71q5K6NBUp",
  "key34": "24skTYqw6Mxy6vsoFwJTuq9DHPpMUKJveK1hX7r9y54mit3U3QkoCrp7UrvoiKqizeBnrh5xG8DeYkqDbgU2czAp",
  "key35": "5UsQBu8HbVwnRep1gj3rPe4kwksodPYWXyKoMEF6e5B5xs5hWEwNFptTfzcWTbAH2ckufRFszRJasGLsGKEGSfCY",
  "key36": "3gScgwXJu6AuTfhznBzMmCtRAqY9yp2WMkwhgcWVHWNhpFHuvFyBJ3jKTuBXJY42m9rjWSUEFHMH5RwYvVSoNCY9",
  "key37": "4hBRSYDcJkS3FJ8gQPnEuCNEn7YmJhQbEorvW7ReNYao6ip8SjkcpCAwpHa8VGRD1LeG5UwnBEntRP4iitdFRRot",
  "key38": "54N886REML3o4K5U16KQ3tDb8hAaXTve5BdhouwEoVR8ejnWGSh7n8nr1BMbwDyW69PjtLb6erJBwdc5L9jtm12P",
  "key39": "3ciVpcZY5Qhj17CMN7UphmSB6QZCDKMQrZDbUEkvQsULKieUK7MMUFx2xGGgTzoZQGt91GokUFGDBBTxikqP3kea",
  "key40": "2yiKct65guberDFa2v5Cdsd2xazkY2czsN3oNaiKmw5i8V38ZiZ4ti9G4khmeNCLfgijWuhB5KG9sfJbXKRXFVZ1",
  "key41": "5HuzYuqCFbKxagxR2ZDD99o97gNsR3HAKh1oo9WYRADG5gR4dPZy8rg3WvJCNxMBWxJZE3hjT8Mj9wJ8kXykzvoy",
  "key42": "3KzJDszFdvpxGSrUZzHbssdVjzDUPRDncpEhCDJae4QuASAoSddcxNzQSqPFxE6fUyP9bfifjgzsNnsZADzJ68bg"
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
