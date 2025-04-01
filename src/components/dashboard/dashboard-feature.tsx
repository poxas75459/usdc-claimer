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
    "2RfyV5GTLy8jsXoNT1FWYAxsiVQmoNC9JWtzLaxQDBMUdPG1LD7QDbWEgw1jdQTsa5ZH56vzMyK6cQn7sAE8XZgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZGAb75dYkJvwa2Zb7j4XvCKcJ5MbMmMADx2LoB9uWHcH9rBU7fSg39urNQcphWrwrWd1qb3x7yS1tptPUbsG5jL",
  "key1": "41S5S6mUK3giptSTtxMfvdSEEGVhyejV7tqUmjr6nFywtR4utsXL6FKmD15wEo3driQ6mLVSFNAKSAU3ZMEidUwi",
  "key2": "5QYxN2RprXXtHejbXp6rAqWFUVUySWrxz21fyFnFPDrN7aGvrRHFQgS8ie84deyeVWU7VNQhRaGwJbohuF8UjNUw",
  "key3": "2EURzAdcb7egnBvQbge2HSh8t7RQLES71zCGKqe3mgsUtigojjqzHNiCfHmL2SALkuPq5c3ceC8HYn11TnWXa7ZZ",
  "key4": "5PTzqptWnv3ydTAo6DCLzUWKmTf3RsvfDeetM1o416MwjstSMuf4fY9Nm2DJYZsyoMd7rTFh1ktdGGHacLPDJvkC",
  "key5": "4qTGoobZDhp7fQC9YQ9cCq2xmtFAVWVKuMA3Gr5w2EQfXNBMtMyfRvkJxGVVRdKNpEKa3x1GGP7axzSWpWmr6PrE",
  "key6": "62z7osETNuw4NpC4fqTAgaYgUgR6z3e7VDtUNFwrmTrC6pz7eACs9DZNbTyEvLwE2qtbKKPLeSfjLopuzM27eHu3",
  "key7": "34T3tGpD1UwJWMPjcUMsi7JQwvCf2Jb3JrhBoXYao9KSsPNVELcqKvYEdJcz2ACiWrbiM38g6xR8zMqsr9Pa24m9",
  "key8": "3YoYsbTUBQdCiRkGoaJ3xdnNTHncpAVGVFtvToGXqAEk52AnqY8gTotALNEYK9TuHtKoyXDfErZhDjvEibGTAnJs",
  "key9": "3W7kWyrp7S9pN3eSCb9sZwuxgvzDUgDLwXSNpGsm3rCdRXtwKDkFqtd7rfA7bsGGircWtZ1hJs6viF171fxX5yji",
  "key10": "4iZC7DF2vP346RkpmHXoe2jteBTPL1L5s6eMEwMd9S8JCxjHSHoA7pDqQQZdCCYE2U3sEek7wDr33beeimDs8yc3",
  "key11": "4K3So9YroMPoCyhU2VLhPzCC3eiv6hKBwQiSLxD4uRQxoVW4GcqgTK7t7m8BP3BTAWdWhu29ZdtThet7xo24XzC9",
  "key12": "5EB41MXokUTLBqNiuUCjzBodrvk8338CtAvneZrSUzFs2K8Nmpikf8SADbHkRRvrDwmDwLzGqpsawRwm4ifEzsSv",
  "key13": "5hR8QdWdvNRNuRMXkXUFPWqTywhLgLspYYzEJ2q2ovCkVbMPuJv8xEZ6PAAgiYysmF41ho2FZnMyQG7oB4DDkfev",
  "key14": "4XLMjDaLwyMgK1JYdXftEfh9pwSfF6VVCuhVP9bMyfgY84ywywbunToKw4V8UEtv75EBiScTriPp23tUPgYwRwrp",
  "key15": "5w5M1RTHGecnq4uZPyLaJbd73KPtdjF8ny4m3dewZBjq4n8LTvwWGZq9Z9cHWic4h69FncMVNkbmMum3ywYVcNb8",
  "key16": "NBqrFz5keNgYYm29vmSt9EQoBKrT3jnEmyfRsgadkrv6Pcg751qW6oemQvZWgxNjRiHAR1nkFnY7adioEo4oD55",
  "key17": "3evHHtVTxkYwt32D7CyU2h18nDHwCcYUcJQVBYRdF4DLgqsNY7bPTFqC2rwPALwEcoYwW7CFA8DttTVBdkoeYRe4",
  "key18": "374nAxh3fkhUCHfjjvPWaqqZvLwDE6kjWXAgofLKvaLdhzqDBuMAeaJpDJDuHKynmJn3hoo7dXqWSrLWWjFeCF2Q",
  "key19": "4HDcA28azLxRo76r8pbncZmXLZZrDcAX3qKvUzTJqW57yDryPsBYXSdB255T6jJddPo3UEwgMpAySsH6bXg4urAs",
  "key20": "3sNdatwecF4jw9YPpDN5qiPgJp8DNuHujzofWqSJJjMD5HbmJHcKoU5Bx2k6YTmQ4xk83NDEVysChkqr1P87gpxk",
  "key21": "bNFViLqLq8KpJPqzbir9zSM1NsoDFbvCsRm1Z54zi2kUszyaVGeZ8swNz9PxGDahyFbcaYijtQiJD4r2zMJgc6x",
  "key22": "3U5thEpHFAQK8kBSE2TGBhtGhkWjbhX66Um5b8xRN1a3VTyeyxBKFHo2icXjXUKWzqxy1skYoiCkeYV1GPu5fJvV",
  "key23": "4BjJE5KiQcwPac7aFBMguLh4ikMLs7gFGN9gqmhmzP1S2tcMdavJHbvvXKWqnDrPJx21my51WwrMei4q7LR54S2J",
  "key24": "5vugnaJg5tqoP2PVgmfFaBuoEJ5YpuEi2QtVnuzCq3Pd65YUP4ngky9ijhc9kmHSSTdAhqd6cWYBqJR83buSgkf1",
  "key25": "KkwFUquqYUVJyAQ7WuZoeT79Yupkn3Jep6panWusE14woFRmiMcC3dpsjBgpG26YSdYH1RYxkaRqzmnFhtXq9V2",
  "key26": "bTnMLVYg3vTsxQhmGcnqEMDoTcjcsarpjjSnWrn6xQMevEpMMkppKkUQNVZn5b2QfbPUtwwhe423d3zjurkuktk",
  "key27": "fNR1PgNNxGVZtYAcvA8TUUWKUcDCAqEJ7uouD4LAZWks84aZbHA6aB6mCxcmtaD8kqoGpehfncDdbmypm2REBfa",
  "key28": "4bjnVGdXfMautxe8dBkZqKQpdTaSWEu9L2srjBFsrFNqxBKwspw2iv2kU7hvf9qiQtq8NoNqmW3N9gJvhChnmTeT",
  "key29": "4jVQyBQhaStckXozSqhnJUwKz8YH5KmpgvTbRhdhMskyo3vzVKgd7zs8F3ZXNRvAKEgavSf2cTCRUfSi9B2CnRct",
  "key30": "27khTs8vvQRoJ8qgaZQCRQkz5Jwva9shszaZSZcCho6RWjJtu4ew7A9wwTyHNCRcDzKHCJ3qoKVpQo6JuUaaTsjn",
  "key31": "4PZEew3hkLYeAKefLpkFcbHoPqiQZ9bBZMTDWwMYXgGiRvtw5eyC1VGHZ9BLuiWeoGpbcGdKvMYG2FYRo2SpkxkF",
  "key32": "62CaTBPZxH8T3MHLjMDh8RHz9YhvDPKU8XuRUQy5wNfp2V5MPMg8TwS2H9YZnpNxSGhXEenoZscZuvee7TsZWNMm",
  "key33": "eK3RAj99w5HtGGw2VfwBmKf58UJ7LkWoYyX6ETZrHQ9aTqgffcCdrDaxiLamh6caD3hAmuwF6PDZoWM6tsq444H",
  "key34": "4SsvGuMSL2NC2EBJ32Zq55EWwy9LcZqcaumhpozNUBnv98R229YgQPd6DN26zE2NUgpzzEcRXLpvBsgi7nfLwaTR",
  "key35": "ujyRV4Kn1ZQyQ2VzrpL82ozuK7W8qpooj2hHqNfVXssJPHBiwWgezJz55yKjbHfRa5ZWx88K9gE3i7KJ21McChd",
  "key36": "5yTKSTFtnSf1zCy8NrgbVgSkB8Upte38XQTh3QJo7T5cs11wFHSdVYWyaVaqQbmo7UDbNzNdvhq3pskZt1V712GQ",
  "key37": "2ysvinvizZfPxUPSzZkrCVoDqfEMGwigLixeb6zKemRGcwHLhjtt5jkb7XnkLFXD9LTA5VKtWzmBw5wgwdLwE8qN",
  "key38": "Vbc2Dxtk16kSTkmmcRdM9QeWUep7YBJtdDpAoqcbSCemiWmrFdz8wirpsFV1WjCgsxDs8PT9PsafMvsQTfeyCrZ",
  "key39": "2q6scJS3Bq62vsFhyhSZWp7M8BdX4FJJzTngnWzmmPRacqmm4ABQhD9XAuRvbgDHf8FVFfoa2YbdtdpZgHicX1yU",
  "key40": "3AbB5CWm4wZiEcJz48N8cU19v3gM58xLdCiqARuPErekYXpYU4Augqpryuuyb8KHNkFhkszxziWpacgjir72aZvm",
  "key41": "5NGLqmNd2kz4SrBycfujB4FNXBpKskXfZ1rw1BKLqKuZWvCSQYkGyBc97B6K6NKojKdgGHwTL3CtV5tBizS3wUK1",
  "key42": "22fs9VmjrJodgo5fgj7hvNqu94urvFGYgacspGbNo5eXi2mzK4knGXsgxFGAWofn1o6GdwftFDKQjpFhjSfe3fGR"
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
