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
    "4LYTMqNjiBBWcvF3UfMJCURTAj2aKf3S8mXWuhKjYAdn9nRoY9fGRKYpPpbz9MKXRkFhyfuvdTVvvPGzRxUa2bA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CwXMMisz6HaePh61Hu1iF9akHCi2qrtdprQSYyT7RySPQm3Vinfh4CTK2zGuTxydtWC7jLksELgHejYzaTAcASt",
  "key1": "jwe2J7H2CNKoy7zVYpLeyr3Ek25bHQzFFL3jXuph4XBMo4yUkQjarrniRDaEutkiva3Tch456nGHeFwA2zCDHJx",
  "key2": "2kVPdEB9R7m2KDwupMjeTBPH4SNqvtQxDRrdvsje264g5NuiVsD2PzWFsQMtesyByj2S4nSb2G957Q3YZ63yFrA1",
  "key3": "RAQNgUZaEcEWfCqMrhGjDrkiyYDzFfCEyVBMxzbZNTj4NYCzbGe9SkA8ZiV3cJefzbq6tAWejxzHym6tm6BEUbd",
  "key4": "pBVr2FDnGhZN3tuj8xFNfegx8bULppZhYroFscMpJmB6faeQJG3SMF5gt2w8DNSBCPbRX7Wz4X4GtfPXQwDpxtr",
  "key5": "67j54yqwmDfJQJQ5FWyWzmT1QCWda7HeTN7cbKBnU94H4kfA1DgcWVKV9Lt6WqntnJwA193wCWs2kSwihntvjAVK",
  "key6": "27JzKBJXAGLb6FNLadyWkfimaCEHuYa49Be4BrAkmmyZKUDiFjq9y5EfjJuGKfz1kArfaG2E8eWUCZnYb61EpJ3M",
  "key7": "344MRv46oUnvXKCtsrFNScWAJNHswiNNsWbfeQSSAc3VzTPxMM2o9rKqARmfzg4awcuJnpMRFdfE49LrWgVtwuvi",
  "key8": "3eKkF2p3EAHvJEpMXXJ6oGDG5m9tP1hmiEoQZGHMEbC9DgvEpW66u2LCKaAVqKdbjqkcTdbyRZV1WWQ9JvnjknBn",
  "key9": "3zvVwJK1x2pyLNL785Bw5XGQx3dq8C5YsJ8RxHtuGTbLViwFdWQRhLJWGeL8KvgWGQMhvCa6fR8ZiviYiJcbZfvi",
  "key10": "32iErwESTZW7f1L2kv1WT7LTkKYnsPBGTgVpqQRe7xkoqscUxFi1tn4t2sfRgGsCqbpV49xz8YmJU9W4A2iqueE3",
  "key11": "2ZADZu9Vn7ASHwPPUV3S1Z3TY9AXLce5WLQBWUwZS76pYCTM5pfpRz7YC9nA5mpykhZdDe2uQ6j1hLZVKrp2ouP",
  "key12": "2QyAmo2D92T3rrPxAdLpAc5QbtvRDikPgNJumewKfka5qBKM3TBixiTMF7G4pwQAfXnTTBR4iWEi2qA5hiHBCikC",
  "key13": "2p7NvpARMacLbM65pBkLTWPgC14GLbykzE3FTVALhgDh8V9i6ZfTuJrNFKKURdocAG92cQKpt7Aw4LxYLPFRx23x",
  "key14": "3w3fBqirGG4LJxvG38JkJj7EJs7URe2wmmrFJQKahGGhDcsLkgkxcqoUgJgj3tSJS7SngpD13qx4ZXNNj8GNBqUS",
  "key15": "3rNMc15CR2vFCs6xtb5DhzwYG7xacuFESYks2aNhkKk1pJaCH3ojMKArrvETmAeaqwGnBPZtfY7mrdfpR8QJxtFq",
  "key16": "3wCehpV3CvVUnwwgz79tSR3QQygRBjmoZRAUYbDcWmjHaCEWA3QfmhAWApDpSUguMrGUsX4mfFGFHAUCRA4JBgPZ",
  "key17": "VoJXw5f8USDabmwqdnFAVy6nSQWuToGU693qoTDzC3WxdMWcnwLyzPTfPXpysA8YARyjupNVUvA3ZVVjemqYTcy",
  "key18": "5PksCwevbZ6bqfoyZXKbY11E7eewJXtgtFVhUCfEupyxQHDAZNFRZtZrXJ9JbXP5KEFybrpq6nkf2FLse6xbmMNs",
  "key19": "3dnQLtb9evcHZ2AgRhhfpp4TFVrUhM6wXgW4YpW1o4bKYfnsTaj95a6G1B4LVnrXDxWmCDLDb6PvwqFWrsJWVkd3",
  "key20": "3rRhnyv6aarQrofmcYhep7VpUBzkmMZMsj1UJjDfsfzPJvhsHZUkHFPZJycF1g1Ntw1pYJGRTxejf4AqyepxUtid",
  "key21": "2YAFg5crK52mrW8YZfRTVCZbFNpGXK4nohkyjAQgNwR4StmE3QDivb2T1JvMQfL15eGdWQDftJrGsrwYQzyp9yjm",
  "key22": "4kd1hNRjMS6g3dbBjoHacmaxQykjftjDEu51YPsQZUHfzNJxkjh75H2fG2kxx2sAJzUvGun52Wre8ALDoPGTXqzr",
  "key23": "2BisWLN2SqGJDgQn2n7gwBZibBzD52qFRrpgcw8Eafex65zWoxAMcjm82GrfsoVU6tCz6m3GJYKULxzjA52eDgMy",
  "key24": "3BxDu1EdAN1b5kvVu18b4czXeBvudgWR5Wx4BkaGyHSHJgQbf1Wiqz53383bpRekTZm42ZHLD84nyuCbN846Xerz",
  "key25": "4QGu2NtgMmkuRBC7CzgE9Bd6qEmmJXZnwiGSfh2JYJpApCuxfdfXtxzwEGwV1GSyDzihqisC8CZzMiVbcsKkZA2n",
  "key26": "2jVQpLWh7Lq5Pbiu7Ktgw6MZvm31TBJ4T5k8JRpQzqDb1E6RwdaVoDE8PoW3J4xKvzhEFeFx3XU9W4jAx8rus7Uh",
  "key27": "MdmnGj1ao8DWrf7X51b7euKAgtTQWYkv5s3RvyLPyR7V9WqmXyESz5wW6Mxvvb1Ru7EET3xyjwDV2r2spPtS1Nu",
  "key28": "23foXTD8dKX24WXe9NwGydw2hdWNRSsxDST9Hqwk5Lz4yL3TRuGdMEe6gYaQ1s5hWW6AHbNXxmBfAiMU3YJJuk1i",
  "key29": "3VrwxSjNBDKQBYKQMaEsqmy7HcPCvH4XFzP5ipFdQEZLKYtKqHnsA8JY7nwnQKXEpX81pbW7YWRFHhSUZha7u9P3",
  "key30": "49TsC8MEQE7TTFEcXjMCRamtDDGR2kkBLZzEni6eXCpAcJQ7stEPLvmbT61i6iQRYsLE7f97PyxqkZe9yZJcDB2X",
  "key31": "5ijTDXpeeUdHZRA6mi3ty9Wf2ESRgLXR2ajMyy8NqYy3eB4R6dqmpbvCDzoWE8PPzPxwU5ANpZY2XwaVzuDG4PfV",
  "key32": "38QUzFVHayasWTZuyKGfmpvs7D8R5V8F2sMRq8LyD5K2hhWTMVUSvJzGh3TEz8JSxKyNUj9AAWNrDPvD8jpodCAJ",
  "key33": "55tcWb3pCYMJRKoQG4LkSDpgdQneL8rC3yP1jibjLi7jN2t8wbQypStkLGsKeJKVtNZG6ZhWGwP3RmP8CeLr7FYx",
  "key34": "4493AXREz4aLKsSsHfau7A8ifcPdDLxQZW1FS2DT72MpVWHUQh3M19774QM6RH18fGvUbUhCEBYRcSU9NngqjNkr"
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
