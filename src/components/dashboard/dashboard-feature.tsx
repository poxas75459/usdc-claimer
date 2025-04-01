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
    "2yGbpyze6MD9kBJvipwh7JkMVSGnExh2hXyXQFcPBSKKzXdsLeGCmuMtMEPe3QSYmenZdPF5QbyXGGrjMqt1kVf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wTvD2FsKpEKWQ1RRBX1ZXLdjjVj1vnqdDsfeB3ZDSWpk4e6EvyNpCDM6DdaGbxUKH4h4mWHSh1r5qwwakqZY1D7",
  "key1": "4PzDYhqRVRvAYDEzhn43PjdyBTy7zVV8yy5Atr2Mq5pWWnTDMA3HRYpv28gDCFoiTdcQLbdok2H3kJJ3mypw8UK8",
  "key2": "4Vb1g4v6YScG4FQ3LWPS7TgoLhwvYVbggXtLoAjwzVyHwS4BDAH1isTmxS3zKQJUPXXBHGREHs6BhUd31pY5aDze",
  "key3": "58yVem1AVsQcSFRgeZDMKr74D5NfXVWmqF3QKeQ84B19ZbWJ3AJ2GFH2Tzx1caUNqfG8PpmPr7YcpKTb76v6LxDk",
  "key4": "2wa3C5XQYrAaoYtXCD2xYfV7mp6r6VxtCRepPdqMGCAfJo8QNgXGuiXxCHYhmVHNy5fC3uLN6bt8Q1qUn8JgJ5sY",
  "key5": "546HosUSLLMHZHNVz7xm2bcyXYkwXYKG3cdJdmzUcxtBmVgU5TsWbMHmZwGNECpwF3z5rpvCYL8fuyyrP7stHovC",
  "key6": "654JAZwdNh4F8XfzwWcUBetJij2bzteqg7EAyXYS9zKM84g3ggwh1XmZQqNte3LinPEwHQuwMstEJnL1oG9HhQ8Z",
  "key7": "tXjFHoHtUS85U3ZVBRYup3WDXbZwUP9to7uf5fHehpuZNmXPozkKhmU4wfZhv3tJSKpYwUGtdX9P7nXQdYKXoQf",
  "key8": "5zTcYUs5VzaKx93e9KFryWiThRZJVoAtk2V83VebYzhEksKrpH3bcYDXEYWyQsstk6SLsLBMr1WXyFD3URpVEjQc",
  "key9": "2Sf1jzhmZ2hBRXDm2zHcKaszw4DBesbL6ZMUFKkdFugBmcUhi7GiZhM67xLUwD2gU3gTn7CULbjoVVruWyXSiAMs",
  "key10": "YfsSU4ozSxjZVe7vxx8v8gZEBc8K2GFsJjMMWKVFGVznPsVvrTezVywZ9H5BcqfoKXHcVXzZ6sdkrH4dSScvK6X",
  "key11": "UfouAUjCABCVP8F7hgBTtEWdnmSM8aUAhNg2ue4x99mDkRcB6WDLfMoktrqAGyqihT5qmB1ueNFMGgvtiSwRpbd",
  "key12": "5cHZuPPbvk6x5MTcBprHWRYDHWKTPE2e2ctFntRmi4Tt5UqBEswrXAnTRkPo11e7qv5BHAvHAoZkZGyHSVac3jru",
  "key13": "2god8f47Jdj1bNEZ4CoykuU6rWa9SdnyRuxYBVqNB9u4Wnhnwvbsr9fTGEUiNCsGnKqL27uyzNkV5VC8kE89ccCp",
  "key14": "wsRgJKfaSbMY7fi8QxhE3MmoT47eboYCqcv7gqQfHBhcxhsUUFbysNtiB3aTTuE56X1wooZb7M8NjC5QWLEQaAj",
  "key15": "2GXfo3BxJY7THgZYNPj2uL2SHye573XpbFcA6qzsvcqcsbdiWLE4617AFnZxYwtEFaorpBWE6cu6mN3L1ZNYr33M",
  "key16": "3nFrXWMxo75UE7bLRoHEUccraYuAA2MwJ7LayCKHfQaxZXqSi83ia1K4PqTpQuvSbm4ri5r8wUaPwczvGgRxyGeP",
  "key17": "2KPrLPuvAS8kNHKVJbZ8yuYwfcqBGXuAobzLzm6iNiep5R89BXnjHgEs8sUnhGpeRq9umwWd4CCusDtimNXnrpiW",
  "key18": "5JMtoWhZykwrdq2q5jQ2Rr8riR34jVUZKKJK7r8SXuGvBG2hK8F28nYSdap8UEcvjZXEGLkZsL8JHYm84uDtM3oA",
  "key19": "48tGUbeN3eMbDkp8WFGyY31b6fXXXA53k7ou1b6TFySbrg6Z2WUQbbEnACi7mfASmDX9wdo7bDNEQMCeXExwkxkt",
  "key20": "4t1ReqdejahCDnpnm6Pd2MdgjLp6DKmHUJAxY4BPbjAsQsxXxz6XdAeXX7BbgEahw8tJ1DDUDaTMHF4eF8rCK2jR",
  "key21": "3bsf6njBhQNDyV3BZoG6SXmMzJyzLhiFedeV9haxjsYc4BxW5Rp433SLS27reQaRkHzz5tKakPVgi4VsSpQhzWL6",
  "key22": "5DXAFe5e8xwtcD4aHk8rtzfTMnTP8GT5jHVML5fWy9MnqCyX6LXRqhP7W9G276pqWYyN5N1TtG6eVgu2V1tqGPdh",
  "key23": "LN3m35sZoaqeHEVeDgiETMCemZQ2ggytrCLtPndNNj7KXjT9xx6hzYY8fs9sF1p2hJXBAnZMpzaqnAVjricm9rJ",
  "key24": "5U1rvxB9aUrS72tWcP7zEH2yrsewX64JCkvB1CD5F5aQSJ34PgXrxa52NzABqB3Qvg6tyoJk9MCcBSSugHnAXHuc",
  "key25": "MSCnXwDYXrgMqrDphBvqxLpoaKtbAQfLi4zvKkvbXepsngMeTdZci5xvd4pcW2J6gjaCp4UmEVHfwTKuaWS7YvA",
  "key26": "55P1FF2bFiDXzcMwRqyzvt4NmMCkVXRNZz5gzgQokVLJ8dNF27QLF1CNdXwvrvPpu8nztLnE3wsknqpgWenUS7tf",
  "key27": "3NkV16JfgAFvZaxsgEMWXsYR31FxCAdyfQizCKhJy5q5F1s1ipftbK1wEALMeh7KTfQWRaJTZ9WYFBvgcRdCwFEZ",
  "key28": "2sStdpcukk7Kxcs4kThftF9nSqnuy5k7QJxh4w3WBgKj9xXdtdNpqo6yi3uCzCZhhU1GQUNt7nc6q1VsaxhDqJax",
  "key29": "21EEAGxf17wFcsBKwGcfs3cxB5GhUrBeUGucq89K5kGWe3C8bYA983RobKNtnzPAKtmiGvTZ1HmKtzcL6ShXZKKf",
  "key30": "4HQw2eXnbUn55sC7k69ZVAn977KhU1yuuZN7AaFRLgWa6QRgYML6tQkfGSdwPGyzjwrBPWyZXj4VkPMnRgNwNATQ",
  "key31": "5VbUamsin84HHfRNnssUM5GjzE3WmDjxwTwErSkuGCCpDgwJE6ReNksqJpMy7acEeg4s7eXjmudV1HYqoTF2MeeD",
  "key32": "5A8kLQEMdJrEREDP1CbZFKBEHA1VPJDQETZuYkAKif1cFrpkEJLJ1ZP44GXsWv9abmLunsBjsSGzD9mr5w8uL6zN",
  "key33": "2WX6r1hkkJDCcy94GGvUe5kMx3x1jic1gXptL6zLaZPkhf7Rxz91CTwNheNKawXYefEME5CSr6gUgsfahMMqLZLu",
  "key34": "3GnCqYPUHFCUpgnxhXWxCHaSniLP3YVVZcKiTDP1KfAQ8qBnHcdrHpATq8jRTfLHqasQ5RZdbJZJqGKjU8CRGph9",
  "key35": "9ByrgpzwoxUqAdQT3gPHQqCNQ2ANEH4skv42zHBqhbLVfb8cv1r5UvP2iqQmRpHPS42WibCnT2fAtwbbaNMLGqS",
  "key36": "47uxLyaG6atA1GqUVeW1SbFc2CsGoQzRbjz1QvotpZ5xdVv1JEBWmyhPw3Uq4w64fGHLFCN83vwYEcJPNhCkXPDf",
  "key37": "2dB1DrynaDyUTviXGMYymon2JArroQ2BGhRgv4AXw2R8sCWmFM3SZjHrQPWfY61uLrBz7Lh7NKufYFhF7HToTMoH",
  "key38": "3o2hDazKjELgE9epqZuYcNiQjV79UauLMvweW1sYoYKe3KSU9Q9pz2c7MW5q4iWFQjKSTq6VKDCzdoDQzmmSqqav",
  "key39": "2yjWpVRwYcRm7xti2ox2m89hmZ9t4kjN7vMYMw1QK5xGtnFB9S5wYqXLnWwyVxiT5Dr1n284Cttg7ACkF8YHbTCZ",
  "key40": "21TRFwHjTzxfqHaYvTpbUtPK5DY7WYqgzQhBcF3P5WGnVnfJwfSxar55USPwE5QWc15gLVz9V2XQ2LUNXetk1H4z",
  "key41": "4nuiXoAW9xNyX99grfu9pZsChKW6EztyZWK8bQCpcdpkkvcuF3SceARgu25AqJoVqFoyg8192ZWfCq6itFuAAzF9"
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
