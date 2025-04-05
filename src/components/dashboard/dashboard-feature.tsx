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
    "3jDSzsW3FtJA6W3Jjb7YuYQuovJFxq85LnCyfakfRcPbhEzv4q296oJpYUE4W6VqpLZ22w2pu38nQ6Zf878FQJLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "575BbdoLFiPghJkWbaiVXVvtCAW1JdKCy15ctyEfybbPcyhged41u4xsetQVdGwihJp7b7Rgk8PG3tFqse6TmjeA",
  "key1": "5icERkDTrSfuJJ3EvLPzXSJrFcqFcn1KtN83dc9KWNuSZ449ttynKPfX3oTtYEyAEV6BuzzdPHCYQhHczbQi7N2Z",
  "key2": "3cw9EN4YxFSsmpCs9skgxCr3XHdLv2sPj9UrKW1nRfN9yNytNUBAZcqeBbUDtdPT7hsZzmf7YHCbcxHM4V58GFtH",
  "key3": "3eujkPKwGARDv6z6MoFFEqdFntwBByRcruXcwQAeebYfeQnMmntuczQAVDVUDMVkmGG6cJLEFE6w3wePTbEUKWpY",
  "key4": "EZdfTQMCRBRANRBj835cgU9ygcTCCsw9zG2Zc4vSPWSQxwZ82rifxCveJH4XYHWU6UcYJJEoZXfDutC7tGeYFJx",
  "key5": "3LCzKFmn4PaQSMimqBdKCuinS7oY9c91DTxGN4Hvypduy2kyLkY6FndBtWZSpQf89C61QCZ66gqSVPRfApuNhE1i",
  "key6": "2BCsZuNUXnwqjUC3DvNemmow5iQrZzn5CHmfHEyoW4KTChAKERi92LGHXsujzdazD8Zn54CrMoeQ7tuhHo1DjZEy",
  "key7": "zMsJ6AtXLruL88iwnd75Jzeww51Mec5bqXFeJMLMiq1GECFcx1EUXxtdzXYHU3fkiCvQ9U3LDPU1LxSHFg5L7ME",
  "key8": "2cqK5LvRVUuRyA536JpXBU4ZGbK4NThtPrEAHK9r55LJAtqBvd7J33QV5SAbDQchDQFYWQ9ycjmSyou2B2zgheYa",
  "key9": "ifXy314T8yJLrNbw7VtGaSh6BwbEU6MdcFD2mN7fPe6B57YNmMTsHxhSSJ3pYA8ZWzTd1QBZsiGJhUA92XKCpLu",
  "key10": "5X6RfzX88YwseytefFqxA8Bg3HLqWXH9nvL95LT4XiDJmBSFVA2zqsHVobRt5doYbwZuozdxateVqYXaws73nSGY",
  "key11": "7YmNYZUc2XBBwV2bxGx2oYvczUPrmaiARGEp7wPnQb6QraTRjooVJEHWMD7dvyEwUTtFuKTuwLDLRFNjwwCs5dy",
  "key12": "65PUKDndK3siKBfEsMjQ9XmFo9LYKfRo417DY1zpmaXQZGAUagze9CWwEC6xJp9TbTLNjxb9A8KrqiKgX3vAiKvQ",
  "key13": "2BkdWDkjqqTSUkUrds71AtgZqtnoG2yQ94RNidAQWvodmcaGehBTUZ7zAeLXmXTeYmL1XJfVzyFNW7QDQWKYbeJw",
  "key14": "3BAjpUw8myq5BtNn7aLEswmgeGRrXdXtMGgzDFkQdWfFptyRj3GThx3utLrUQ2H1hPneN9P9CQqZCAAPG3EE1Dw2",
  "key15": "2nnbMD312xzqCFMhm94pKc3ZXS5eHVyRumjXuc11wfLbPqK2DYW7rZZMG8Ct2LDQeZF37CFko1gxvo6EYZ6LEsPD",
  "key16": "43doLeKeGDENFeWkWhtA8MA8F6F28EeBgg8kQzj59dmMB4VZXnt7QDyGNYmRTZP9neDnFySbddbaGL2VBaR7XCJm",
  "key17": "41N2WomHZz2cUPYp6yCBoYoZt4iXsUJP1hbzDWtkJ4Q3FK4F7cKMZQVv3ZEg4jSbqJyc5JXLYmLRqr5v5ZE6gEcB",
  "key18": "zfxc8B2JefcNrirSo6jTbDjynm5SQea35mRxy16VTg6A26uaDZy43zYxgxjxFgtupuGJoqL6D2JHwi5GUgWBRtH",
  "key19": "4otBPGK5rooFfT3RaQHXrHB5LyyNEhSQR1WzTJP7T4onhsiksoAGGUerTwd8Cp2cRTddc4UdVJtnr1E7QWbaS7Tv",
  "key20": "iAzPDpfgZLFuZe4nyexftdpm6U1xaTcmQFpnMAdkapCxwrWnNMN6zfmksbDSJfSgVDNNQkvik4JrNSMKpboUaco",
  "key21": "4DwhSbg4S5wPT8zEEFmy6C8PFSurddPAAPsxP17CJuTTwyYrj2MtkZKB3Rd9Sq9H5RPNnnVHzGSNLDJ4Eh746BKk",
  "key22": "4fGVxUhwYrymoGC91GaXUFmS7UabBgYndmLjTRCJV6jMMCZGLbamD4qSb6vSzTHpzAcvBw6c9SvwVKeYyqXYZY4M",
  "key23": "2Musk6pU5rWL8ijukWWzpVHhYJyKCH9zAyRDJrYm6nTB1gBHczcBg71ymnBHecgqbubrmYgaJp4Y61bFaqMqXYiw",
  "key24": "3VbhgkkCumkmKkRbuvPzh1yDW3k1eE1Xz4PfRHqv7CPucwZejnukLZ8q3UfnZMrvtmYCrprPyWakxCdkYVwtn6j1",
  "key25": "9bnYp7Mx5tGzbi3fWP7XUNMLG5BYFD4CP6UzSD7RsxTsZF3Jp8b6kozE4hemXLGp17zNAEtjCufuAXgkV4XSn1R",
  "key26": "4qx6ZABDRnQ6BzvSbWou3LtwD4FRtwmiRoRhquTjimAQxWLKDsuY356oo6GnyFkuxX42qHQzcgmAxQaL6ziiGjuR",
  "key27": "2YAdUaayMBCVvBcxqLPzpAVwsE75haFtwQHu13HZTtqG5GdRQNMz3BwcRUgyCDq1rokwitSRtt38Jrjmasf9ySvC",
  "key28": "k8K3SvgHDD9M3vHgZPyh3Ch66pPMRn6wXGGuBFZuZP6mDejMdoUoa5prgNJ3SD1Uq2LJKbvu24QxBqS8P2QdHfb",
  "key29": "47TXPwgZ7RDbz6kaKfk2wnUsvKiW8nv4KeqBoSxYZ2bEEeEigxhkkxaMkxpint3Wnp9wGRYQxywduzhC7xkEDBb7",
  "key30": "3jHuWmNGVtbHfmb5b1wWHU9RXZZQGKDW5LQTpKsPrvoPrJgB1nwN6gRC5jWFmnkxUbcFXRdihJsXS82n8RkvDeRJ",
  "key31": "UGv7J71TcPRJr9UQJot93VXKjh8DjB6gDmm1dgTyE2VVuQNUwmcGorA7JHAUTU4orYvSV4PzjJYapRiuGRgRdvJ",
  "key32": "5ZSriutsjuAeSvVu5Z1wYqF2WDgbe46EMAu4sNLe6QhWcQdJeYmRVqZtST8xU2N1Vj8JJ31thJxkSi1yLrjb2FNo",
  "key33": "5ndTZ3fnGso3Jv4ZRHqk6rQcW1o4aw3Bcn5ZSt82MeVgQkBaHGhEhMJ9qjwR9WLjH1qcJBaAv12LP8dfG1VRgVwu",
  "key34": "5NvYgFyhbrNFg6qqYNYR7kdc4QouPDZcorc6uwJmoeKH7z6RRccgQ5aDiK9rtbKU81vKCf2HZrVG1ejDM522Twtt",
  "key35": "3NQ7ULGbAaYYYiEMq5bGbLoAsYk4duxuGtzeUD6mYBRGKuZ3TxFubkptHZmZtryS2qgveERxkVb98vtPxRp4ngwn",
  "key36": "GFXpfPnvVx8TrRxQbmdoStPqkxfLuXmJZyedsac6bmc5j387rSYtKTCQQXkecV6mx5EvwqA6ZM1x9janSKEKxE8",
  "key37": "fcr7i1gjmCkuuDwbrvzSKphe5UFt6JnbSJiEWwnonbXchtgo6jGTeXe2xMSnTLrv4RQcQrjbYrF5juhL59imY7R",
  "key38": "67jdFyVSXTLVS7fY2eEEM3d4xUaxmJk54vwhFFV23yvPzusneTFKBPZZtv8C6vYwVwHRkdn1gyFb4WWnEUeWby7X",
  "key39": "2m4LHp3H5EeEAp6PBuEJJe4gCFscJjXiWekDeQurqpB4vGibRVVAkUrWzMtqykppbvRya9tX5tvhXJxMb52142c"
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
