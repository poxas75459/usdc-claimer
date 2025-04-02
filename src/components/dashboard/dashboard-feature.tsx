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
    "47GrTgnaxe9wCBcdUUpMPBiwojr5DeHycGjcWWfYYiHLCMBrQGBmSrV9ixrYDQXrA9nwfdoMrbzYvYLt5YH92NbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o1YLyVSEpiJxfdUVY4nWe9X79f6qq5neMfK8ZmnBFxqos7rEyvbaAVquHovRTTyoFHaRLSraNqn2WWVh6J8UKFR",
  "key1": "3aFZYwdDDKYoEAe6V6dYDbdWtwPbiGKShrdgLSM5DKgpXrDEtXYP1rc9U116eBQL11bBs9bQGSqtBcg4mAHxbKMn",
  "key2": "3cyHXGtZeyQNQ5URnLcSJe5JHGGVoAby8vonVQcSjTEAEbMehFKheRK2msKhBJEY4BYmtdr8EFFxqHV3gJqKVshA",
  "key3": "3wJCrJkwntHwxqWY6inZSHLLf6ZxjZtEyHZLsUCfaEtM4qxxFwr3g3MTGGXwSG5mpjKBBUsMeZHPksfB6RTRJBnz",
  "key4": "4FUcC6YH9K3HzwJgfTqTxmyYGRui1kavSJX8mQKbuKxvoCL91dfD6kQZNkv5KgyR9NG7HMHEErQBa4BH7FhkkCnG",
  "key5": "3dtNU6Kf1N66srUCwZj7DGpJ6uHB3K1oQH2c4kSd3FJHDgcLv8JyvnEzitGAwpraLT5QZ5Wnc4eJ82P4Fr5A81pi",
  "key6": "26Uh4dptjNgTY77gv7LXA3rQuXgjMvP41iBWV1ykawEA8mwMdcLcdqet1mEaaMvweqsc5f73gkyqBfFHgCDmpzGW",
  "key7": "F1BLaHH7KDAzojmjDtj3XotRDMJM1SRfyRhUgxRG6c5UKDwUohaJWiqajcWE64LsQ518dU6X3CuCNS7sWK4ctHD",
  "key8": "4ZifzFaqqSuXvmiSJBv2AQXXLDUsTnhLoLg1Fprec54Ueamuiw3yJt2v2G1Nc4Ufc6eMNy5WaGGcmaVMCyxqHgD6",
  "key9": "3586t17fA7ahVVDwKt6DB1tR1UhyJVL5d9NmZTVQdyDY9mZSGUhGqoxjLq4mmYiyfqc1Qnvd55MKAgGR547SXa8q",
  "key10": "42GU6j8WrNeU7dwzej758Q91qAytT1DVvgKWcYPRaBL2JobE74Xt2dEMX2RJTXJkzWxwMJ6gJk8SyqwxJ3nojfh",
  "key11": "4eEGTnm2SuG4H62WtTyu1aSBdMws7h8rdRBbGbNyB1K5KeiiEBsG9g1xR3gshobP4o2XgyBZDuDChRZvMG1JYneE",
  "key12": "rL8zGXMiW6eAMKSjkqzk7c2hYpgY64v8KbWonHbWNbfzENK9omacG83WMRanRVMoxaddAUp5NiFxxMXu1WqRLJu",
  "key13": "4szRmy4yyqt6f8MFWTQNg8uFUudHQDZTn6y8gCmnfTmtq8zjb2uVUoAWbb6BSss7G2PXU49JsNdiByjjA8JwLpbA",
  "key14": "4oUKK2wVfzZePuFwpDnBiWREx7k9NtEr1CiTfcDUUo4Ar6YQUB4dPMT9rcuMCnokjh9RMkjLyVjpQpMBD5vTG9Jr",
  "key15": "26QjnLkYK2EGGkAaEV4MKE5gQiJzdfnhrLGaEr21VLaUbEWhrdzPF8hjiJz1GJsysieMeP2LgYfCam8RYdWZ5o4E",
  "key16": "4QaR6mkGPvjafTXHyxWQMbLXTY5cZfyMzFdn4nP3EevNbMimPAFBwP2pv3FJBRsTWhPjW4FdeUUXZbfVvdfkGiY8",
  "key17": "51B3tb9Fn4wCFjagNFe9nw2h4tTygfSNjeXdZNA8VuLTYdbKY4D4qZXwPaTYHBZW3EZciZ6QFE6tgNVwihfyVDYG",
  "key18": "2ssESmTiBY3gddJmEGXJgzVNEhdmLDCWRLZpP2RbkLiJrGcFY52QTBYqZdR3WdvGgHvu5TcKyRPp3BSxG8MZrezb",
  "key19": "4pKpdVq6DdQewiLGLXefKRetAXxgQVJgN13bSwbNJeeeje28FtsyfFtsQUHfPLpUcRKKhoCDJK1ATNkS8gfL6PLC",
  "key20": "AfrH2bt4uS6kguHoBMiawMNqT8EY2mfLM3mvrLeobBDUNS4s6ojwz3qfsfjJS9DosLspFHkHn4gtocCLfL4GS4s",
  "key21": "3gGTDGq5pYJmuHvyNqYs3TKfKpBriwR7k9DsPz8rucGZM2V9LCyZ1ZQ98YnXPXBPMX6NBRpdDQFZvn17hqXUkZdv",
  "key22": "5zg51woPWxab65vLjopoDkmfnj42ffgUi26NT7mLCpaJqyneieCZvrA6vDF6B7jXVeRwGHBRZzSXh2qFAYoQJdDu",
  "key23": "5RbHtfipXRcjujzFXboscjgx7ZhRBKEQERLFTxD3pQ3hWx8vNJyXKc5To12hPq5RNVCwmmKeTYjfpkct7kX4oQXx",
  "key24": "w47WkDZ2mSDmtd5mSSScMU5aeD3ntGsubyGu7DG3zVGXCyxUJwyi2jMifSs4oqhKqM5mYrocMsaSb81fcKW28Bf",
  "key25": "127Ghd9T8q4EDGHCDudnAeqvdDkakdGmWhEt8Tt5rdcn47LFc4eTMrJ3swvhR9CzGYGP2w6EczvogK3zJP68efHi",
  "key26": "49HiQ7eTKvmyezs4VZsX9Xqe4Be9SFsgQj7DMcWhh15doWxPraEd7YBRt5p7S1qCterCAc9QMCWyp82u9HTQZxua"
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
