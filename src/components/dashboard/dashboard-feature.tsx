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
    "3KHVDDZFKCPfh22Z9be1qarSrkR1mwGUSYoCMSnmcU3y2VqaN7wBCWEgrbD8vNuXpP2bb9ntFrMp1tPES19appsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EPFi3GtZCbdozqNo8xLKMT6QmqdSeK8rfD7T4YaXveZDjx8XAX5muNvbtmjhjtuXQBnegeB71QcWf79mQa1wwbt",
  "key1": "zJs383nMFGPcPKJDJR7wFttfHEJdBY8Y2P6LwerqMwSFgme55oLYyGiyJv8Qpknohvcavg95Vtp6B4eHfvHMK5C",
  "key2": "4ZfWWGJqQhVM93LgF9XZVm9rGfFofZUuCWjvzudnfyrxpWD3ihRv9jjJj9EryW74cLcYbMVj2uY4Fo8T6nMhUvJs",
  "key3": "2zEH3wQ8EayeSYYfFNmfnFzEwuRD4JHaBiXLXoKSF8HAtrPcVbLCcmnsx9g6XwBSGog7hXXmzY6kAaMG8VzNDqBU",
  "key4": "uKHH1krh2fFx6Tcnr3DtA1vQ1D2iUnMLoGSwcdr9vVW5LTBQm2YyvturTekhNbAKoh4Zawrm4WrA8oazzG63332",
  "key5": "4wovQnS4Dkc9jzGd5NyLPsDo3XPkjjU9gPgDvGbGMFvyQfrRzmkxMMGJL5wR2vkdQ5JkU5BY3BpGyLGfueb3oViD",
  "key6": "5Weyz84GZHyBmmCFY1WU5DiiaR7DNgS5SHxanfap2YK69vNFpsyPtCmkbxco17idjwfyHUCEqyu1Y5SN3JP4KHaQ",
  "key7": "48ud1Wi2nyagKj2iiHXuq9JnYsrHqsHEg4LR9votKZtKurnKBZQUJ72LXJtEgL9sWAYqTCNFAdTUqCcLePgEaP6e",
  "key8": "3GbmyDAn5ndgMQPSP4Z7UaS8q4CSbXTMu71LUKKTnA4autZ7CSANsM28AT6BQ5fi1kM4yVFjjKJ4dbTwr3YoxR7Z",
  "key9": "5aWhJgsYZrKi1cxXx3nmXVso3abTC2j8XCyPLmbgqN2gLfkYmCDBCuqV5ZW3ecfiYntEKk4k7FPn6yYNw7qkDAed",
  "key10": "3VgSaNMdeapUHe5UGoCaQ9D2sMxLRtBGyN3C3YJAifk4FT1r17JQRZw1Ff2EtgzgVmSAHNgTQioEVVVs3NiAchGE",
  "key11": "h22QGvs9VD8tYSVkjBifqNZ6AaqYGJeKVH4ES6nzCNbMpZV4Lp4eTVfnLKZDBwPiVyaKLp8EEbQfDjz7zKtpve4",
  "key12": "5xRP3aiiPKCmZEHty3nFRyaNxgmyjseMJhwd6zaawjbofxHTrvKCmCZVfw9CgFcdjfyYg5RZ3zUxsqKVqgpQCndP",
  "key13": "4XoYrCayhZzhtWU8SqEs2srMNZAPMgQDX9ygNHgh6PEfZyL3PmATy3SBbwbTjddUdG9Aoo5EjjzUaD9zXRnMeQqJ",
  "key14": "3FrWD78YTrbJDKfMQ5KkDA2zsnZQV9Sy1TePGfaJLm6fLYheNDweSrBnSSt9n2Join76nRUZkB41PzaDK9xzVgXH",
  "key15": "3FjNTquFyqWjxAG4uVxMewBiSqC2yG21kHQPrJLchS1ekcgrYxPFuDGePy27369S2A5LAVQ2DHkEXWAVqM5FKBa9",
  "key16": "31XVkBMvERaSSrFVncmWnxKSEcuQu59UPgQcynhQvgXfQEUVqh1ZxF7fWwDpPqR8kw4tvryH7QYxQGe9no6Lt3wt",
  "key17": "2EkdqtaCTsNMjfVJd5Hj2DMNqX4Z9ks4J94V6VPxxfJBUoSmbF4Kh6M1D8kPNqfc4hAaf1kh91hBLPX1UXt87ct2",
  "key18": "2fHQLriPH9QvB4FSpDgzq1wB9m5p7AJauawm41Zj5SFJUsdF1gJGX8Jjo2Jni7oveojmzcKyfejKpXs5erFmqTBA",
  "key19": "2onsnHr7YB2hc35uXrHeUUuj7Zv2RJCZzzN4sRxj45QvF9SvJAUDanrstYw8vVYdCMgP5nAuewi6ruvjjBJkSi5X",
  "key20": "5qchWvujFUN2RwL4YD26TQyZi9PUmQ7tLgLJ4yyx7nGWG7Y1oitpxS97ofZQFEx7rPHNNZboPzwTUPWx3Qwv7qB9",
  "key21": "2weBhjrSJ8N5yoAnaqWcpTmFSPd5YUtuTULPXCMTukXCVR8Fyx1Z2Gy7LJYp75A2UAVWMpWqkTij6LUJaS82JZt8",
  "key22": "5JsMiBc2kUwJ7DVQEifUScNTSpPNe4SRxKeUovkJBpu6dvrP7My2gpETcJ4jScjSJYPFAn5iqjxwhmAGwp6iVbWV",
  "key23": "2fqzGmgf6dv3F99XZP1dEj87565HuMk1THHZyhH7cnr212HaZhiRV8P24dts4v6JQYS9LMrv7R48rsGMm7kmejFq",
  "key24": "2woiFS87zN8YHMeY59LVrUeZjqLJnNuEZEtZvEuKSba692hUPTwKnQwuHqwxFUeK3UFksuoYa43kNhFuqkDhFK4u",
  "key25": "3U4prr8TzjiSNoxDvBKVo3k8c51vPpJFhcrNGDPs8LRkFMPuk6u8uKpxeA3GYwVD6hyxoCLbUSasaWb2hJK7GiTM",
  "key26": "NQgPCKNx6d56GaVfjhsVQxuM5f4DYaroQwhZVf6uE9Sb4t2RioDkuYxikFuLbaUosTpxndAhq5jYvJRcvCoKqmR",
  "key27": "4J7xRtEeiYDapbVnMkqgyWt9Qw4ZQKDz4msjRqNbtzWTVqdUDUq4coFrJjoNaxxKu8pf2ptnTrnRkKnS1vkESyMN",
  "key28": "cfP4CoWYgc25YHVkvwjdn5uSPjnsseYsDhvE7duKL6vxmxbXQhTUZxNioagtFXDpm3tNv4SCK7PLDRpcrTxbqzW",
  "key29": "2uT8Em3eyXPXdVJXWN3RtrzpC8WoQPV5U2HNzPEKdFef3JXNc6DZttMR3LxGd7mDHJmPAeUp8jhNuK258XWrpAVx",
  "key30": "5KdjJfgK9KAiQeuopmt66765Y6uw1RmvumzAPC6yTXmJ3hn9iXmU7kTLusqdEFTTxyDpZjEUDxs7MxyodmVhEgfM",
  "key31": "5J3rKeWRHp7joRTSpre1RpvDPNbV3BYSozsS9YHtQ99ZQq23vtcA5zTS5zXjbHgaM5X8cZ1719FMBeFK5kSiBDP4",
  "key32": "5mNJHmBzxTsV5Pnn78iokMffkqVLemufSWDBMMsnCZFAJBekkMbQPSu4aeC98KRwuFvTYtg4XbAS1vkvjtFWuN7E",
  "key33": "LUjAujkGMq3dRbJ7s2JrksSvych1gsTESGENkRUo1mvGzjyGnFxRpNpwSohHoX14vTY2RbLjraqmw45sgzJHa7p",
  "key34": "3LHdemYAK8n4PuFdmCBdPnj5C6TyNuLm2kz8ebFJiQ48kXaNPEJF7uXaW3dktBFkvYzrT8igofjf5jojU4Tz3wpA"
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
