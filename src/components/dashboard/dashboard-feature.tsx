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
    "E45ey4m4Y876VPqxMqaZoGjsvki98vZEK8CbEfz9aRiXfa6yfPGgMevh6h6JUREs4e8T3tuL3oPgptNyAvCKfPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J97fPeMALvJsUbuWXjEg9yFQrJQp6SrT2BQqcSzhGRVPxy6UNRbV3Sr4woq9WPX8w6pL6jznmLNGuJgo5Sb9wve",
  "key1": "4PDCpPjnJXeVLthyigjLionsj6zw2mGaFG7GXrCf2vE8ei8ZTpR1CV2XS33xF3z1JKe6v3RtxEizt6nR8ZtMe6bD",
  "key2": "4nXaPXi9SMzML5hWgobUPyttwKRwqcMBUqhpfyzR1Tm1iZSkZGeLtvtCTRbBN11eX1ZtRRcAzhVGrGSxRfDXLb5",
  "key3": "3s9F4o1pPX9aBdm79y8k4icVFJWdwwEo1en86spZT8o5YoPbwMwBBCrMEJD6FDzTxZSmJbZQunjS6yhv53Vft6tW",
  "key4": "2NCXwUQTDKNGFoyyXwEUq7piA9veowkMp2LeCetGNnmtdMwzR5Wodz3GzH3kGQ9XZapP2ZWSxbdZnDSsZNQxaWed",
  "key5": "4wtmUjrraMXJxePsdF9BqMX3p6aTzGRFTjCMczhjQizMCRzxaTrEZUpyNyeoZXEL2buknfQHB6nbRXuBpVokePCY",
  "key6": "5mZbViWmpRPab4tDD1CLPuK6dVgBvBqSTSxk4GLBpUrQDJxNNPUjUNRz2ktdn72tvf5xJK83R2jqAhwUzuW165u8",
  "key7": "ZnYy2Bs6dyC5sfSReyEvSHKSmgwriFZyv6YqhmMgGrqByPy6mhBxsLT1HgpCfaqgyPEwF8TZiRbvyEwgzuE34Wu",
  "key8": "tV7fQuJTj1QfHR1LnHfc2ZwYCa8Rh5eEWf5kNQty8GkkgBiX9JZadatd67JQ1ipQDyNHJfGhpNC5UU7RkBbbb2m",
  "key9": "5z3Vuxmkgsu8EYgG32BUvzvda7pKWsXkhMDZLPMoNKszCghzbAnnp26mt6MNjiRvctwq6nApwfFhuGafCBaQKzTz",
  "key10": "4f5ab5BJ44oqLyqioTCNC27HH7pcsxTvmYD47yciKVbC2F9n5HsPiDWPz18CTCaFJYiTZMHtWXv5K4PqcEJXLrHv",
  "key11": "66bgfiifbXz12QQWUBBgxEnWKhD6HZmMJse7tpv7MapmoXGVSFhVZB6QHKNqPcEGNVSbCDL8X6GBkc9LXg1ReFav",
  "key12": "2aQWCto7uR4ChoYVRih64qvUDvBQk9AvcukCg7CBhPa6sAnKuuKZ1qvPs83P8HqqqMUbnFeSyjDEmpqisrFnQHHA",
  "key13": "5Y4JvQZ9NWpFj3Xt146FRqxvBCNi7zAwgqx4tdN4NikT9AeYp9zDeL4APfs16KRZdt1VZUddu1PRpU3D32My3LNM",
  "key14": "3bXp5FNTfkn6jWJhZ6PuMtcDz4hsgC9VHZooBzwHmo98nMSRsEyHbkrDVtC4L8bgRBHpFCtgyBjVyrPaWWMdpzos",
  "key15": "CzVhQ2umQY8ypzvYeeKUWFMdGugvETrs9DyoJSUNA6x7rjrRiiMe8wwwhNhoCNydqBKgUen9CFZJXyawDASEdyv",
  "key16": "5q646Gp4LGCwPX7mkHgxbJTx4outHAYZLJQJzxLqdNxjQYJi3bR28hb6AboKz1XS83Rd5oMgTScaRGC6aQH6aXvL",
  "key17": "2s4gCXuFGmgT6EZokxpE4y84iSHm7E7FRYfqQ3nnKBpNur35dn37mbwRUwmHA9vhPgj8BuoueDauaYvAV1bt7Zug",
  "key18": "XbE4zvHpGdRmxLFkLDRS3k5BSRTGb4eD6RZy77J6ey52n3yMdnBL9gctR12TkV1MZxs3sEHiS7B9nPjdDXMrvfJ",
  "key19": "3cmVWkx1kLswTHB85658xprcMvdayzfdFPEg82GMTiLYqAxZf1chiFRonvLx2irivvf2AVdnoptWLXHvKh5zLmLv",
  "key20": "24vAfB122d3DzyiYbcPdBEu5VSDzHkmCnwpigFCemE9rA2Bgv6g8zRwDrJU66ZSd8jJN3kxxQgfa8JdAbqamz4wh",
  "key21": "2C9VAtvuGVFG3Q6RboV8g38VEU2S7gwZh7gCBnZ4VtH9KuTqD7rzzpKtmw73ezm6k3xb77y6789RFAAST3TxLyXV",
  "key22": "3qHvzJdKJBxpfRvUx2WtyBdrah2nB9pBL2Bns3SmVoaRhNUymHvyz4hUJu1zwSHSC5zkVMimt7TuJ85gowGRmo3U",
  "key23": "3tTGdGPMvnHUjzDVnha3bpPsti6KN6wUUX1rQio2DTjA9RgvjoBEtd6nSh2LG9Z2CLzfNpiyyzJaRxh2a3L3i88D",
  "key24": "VNZC9dJXtuKKPrs91SthCDy5RKxhAZm7byQ4m75zM4zNoY1JfLjMDo9SbZZu45oUMMr7MJmkBTjNdVP1XtXYp1k",
  "key25": "qYSDtu2a2QvXd2FuC7v4pTDfBhJ3jL8aYZuD4sWayH38RQw9tjJ4P3a8v1srpxRXiuSFFCkrc1UFUcm2DxZZ4ad",
  "key26": "5kkYDsqBhsvgXm9B92dyAec1cpbYCmXK3Eq86vCEEk2dpFTHMuukAGtE76E6LjqgekqyqQzNbrxHwmXxZyPwWLcF",
  "key27": "m2btfiTTQcrs2WTgic9WzN3Lk26B8Vo4fREULyQpWUNZKMLkSkW1sKmKkpqch6dVSEnkCuLMtaMVeTS3r8EHxhs",
  "key28": "5L7wvbeTKj9av5tg4ksQe89Hw2JRyh6UkTRvmE1SLAeE3f77gH4M6EsD3R7QJGnWXxZtaJQ2aqVMQj8NcL22k3nf",
  "key29": "5sj2LQ9N9Mxy3Hs31fZFzgZ6K4FGqZ7SKwug374dnareuh5Bq6pQHQaN8jkkTePcPbArxMvczuqa5MrmdepJjvww",
  "key30": "bQBr1deab7rvrxKfKRBSNLXu92YmgN7jxK7PKjWikEurHmyNvHH6LSzj2aTLZ4gos45UarAka46xnLEjAoQpoCn",
  "key31": "5VXEY6e5dogDznBXaK1eiAog64XAPHbTTPzQsu8VKeUjgDX2ExYgRrCoBfR2s4Gjvn5oLzeNB9jAXaNc6rAmrvYn",
  "key32": "2qHjm9rBwL7WUnneh52q4NSbH5dXr7KUHkb81rzJjySZBZ5w36N9J6VbnhofAqRaMMWpkZCMVBC5CyvakwKCtSxW",
  "key33": "4V8om2KKtdiZ3AiPkfEtaqrQp7vt4nxUtyfZMpHLzsYN4vVnwLvJQtLbqTkpHZNYeKxXxfbaLiKLz93xd4QNvDDv",
  "key34": "5cXk29MymADawoQWC3wnQgq3rLK6gWfBqMFa98tWBcg99gyDjMD1gALQyZqS6sqqKaLHvHm5D1FrC8wTv39eykRp",
  "key35": "3DZHEn1FrShNAcX19M8WLRdcpZgPHG3u9c5X3jUpkksNwp5Sjc95ivVVPAvoWpJTvpwWbgiwZdq4vC7q5VDLvPrF"
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
