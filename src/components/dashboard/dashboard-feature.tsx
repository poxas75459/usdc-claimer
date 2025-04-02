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
    "vfgYPRR2j8dxtLLMvFFiZvttrbskX742Q1V35Y1G5DXBntf6copmCRumA8NUpiA13qGgkcHuLa1zXhtvtt4z1AQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SimuiMdNJu5fUeKYzWGjyFMjYWPcoXHbsdPir8N7yKjQZcYgxz7UyAYBYdsrdrU8rqzxb864HG42xXgPVnkNRPT",
  "key1": "EcbgW5fm1mSWw3Z2uJg4543JBf94eqw29w5DQxuQL8QiESXDjQCqbc2kZdR8WFaQX8qM5xSB9Y9CbbD8zbwyTha",
  "key2": "5nS8jPK6LQyjTveKpxK77y7HoVHBX9UcbVw1s9QXdehfx4KyE1bSwr91ee1BDxC15EkEBQh6cAZm5W3XXj48jEd7",
  "key3": "5ZNdPe2CVCBxT5AJQZghRQxCXrchUJUXKDdP3Jev7bU7zq9mQ7vMniKrL7cmF4PfBCw5JpS8816MJz1nSKKUz1qG",
  "key4": "2rs4PVYtVkgjL3chFrKP31WR4wu1nV2HYS8vTNPZ2s5yZcAWAkCqbDtL39eHSXgUUtzL7S7BLy3bxgBqDsr325R5",
  "key5": "2HBXsrAwnorovjW5MYBSfQrnVHckQxKBgG6LLrApeXMiRkSdyYctor7Rrj5zwjGzLEASCxhBh6ANeWeNLLc1hBhV",
  "key6": "5FEDDSDDobPE9ro12zoV1QJuBM9itBV4qxo11KiwoMhy1M8KfJfR1wZt1MsP432DiNNHV19Jc59mCGnT5hHHEKPe",
  "key7": "q9oNkc4Bu1KQEnYxihSCSGzG3V7Wfy59mc3znM7oP3C2ceKdVPiSpYrbxeFDXVKnYjZH6zdjVMJPL7KvUWNRi1A",
  "key8": "cQVe3utXqsW4zMt2aJgrcxdVswVencXzhUAzwYGen2i2L5gMGPAMpz8ij4ow8Yf19q7RUL1fbtF6W2ZMMjAXtnq",
  "key9": "3B92Z8VEnwQRSzNyxYgYFgPB9XfjMY5PfSpVfoF9yAW3VnxfeJu5c7SGrSFmdex3YcLCyqkiRuS6vhKCfC6YH7jY",
  "key10": "3ZbMDY6gKu6togGRiVP7Eci8crpKUHCBTMPzacjkdkm39GqhUZa2WmFMCowa8i6p6PxT45KHrUnSxFG7urvTmTm",
  "key11": "2Hyh9VGheCH2FvKDAzAJqAMxXrBdZUUFoVYMjEdCPYo8zjadwNDfi9ACUf1bLPerG2W4eobCis1eK9J2hUfBAUuM",
  "key12": "4kF4nrcfpHYjGrdCFrT9DZdwb2qWfZZmSs9w69PEiEeb6dU4Dp15bAGwvqTtjUMRspy81ZCDsCFYkfL6KnSJ7GPX",
  "key13": "4kzeWLs5zkwMiPB1pc39CS3QS5DcSfn4zXEvJpPNE6qEscuaQGVtnFUrsvB85RZTAocQqH7mhytxCz8Xhz2s61pe",
  "key14": "2ZNARhoS33RpAd2LjuhVj5dG6N6pwGkfz9enjeNjo98sqBixc5TVEtBPLDVMyp6i2iUsc7dEev8ZQFYTjfVP8sV5",
  "key15": "4eEHbiQeL3va1bPytCD1KjcjtDuLNpM6F5NNLBYvXFTCf79UKt1YBhxF4mVVfyfqYu38TdZoHE7ZfiTXYiS2vpfU",
  "key16": "35VC88BtPfKrxGzzgGghmnCjsyYHAkwdfxMLD5u29jj7m5K6xtwaVjrxw44F2pUAsrVN8HvL7jQ6reY3dP1tB16K",
  "key17": "2bvYWTSDX9eMgVT4wSoCk549pDgn5zYktUrnNh7X7DHYRNSx8tKxNXXWRPDTb3gjFQ2bmsvmeZtqCHdfaVzUkdA4",
  "key18": "2NMp1GEuB523yVrBBFxgUSAATg37vkWtCdpsBA6J8gbYsuiXTyrmQwheCKXm23wiZDG81hSS2CsrVC9NhYwMH9MY",
  "key19": "5hVGnGMeQP61C6FZQcRUkvDuMH7og7VLag2FHVVpBeo5HJT2VbEpLMyxZK8zESP2iV2WfFtu2EDrYaMrEVtr548J",
  "key20": "fa2CcGuMRZesHMajebEQFfvWeZCucN8sq3p16amGaxa7Y7GAu8Xj1VmHUjTeuQ5aJSsAANj5dhFUSvZ2JQC7JgT",
  "key21": "vBPoqT4fxUf9iWx9Vpems5bmsevYRbiTiiYkjRMCvhjDXvoz2NWuCjrW8iX8YriqU1WnLj2QoKzuhgFG4QWkuio",
  "key22": "5ar2FLAmh7L71j2q2hAx5C9WBdVtPr5hHDudxEycqocyzdqApbEvr7mhT8LUMTx7kde2RyxMk8KSovnL8KUA4fsY",
  "key23": "47sr1mXaMj38VBwaDbVeYCBeySxPzQQwaoNa8opv4HW9gqHxhPrgpotbiN6MHqVYdBuZAUFs1ALAnYuAbWySwjsP",
  "key24": "2kZ2Scqa6Y2h5EikbkR5gXga2Hicmm4gXj6bCJp58qtra53hqmF5gGaMKedj1DtWh9kAvr9DroEKi1knibgGtYTb",
  "key25": "5zs8SwwLRiJjuZEAyPK4Z8oKUxSxwriEFRvDypqpJyDF6vxUZTkuhNNMHQSdgVFr7Cti7itXSA1NgKSn3n361iZg",
  "key26": "4VmR8baoCAKt6JVR2wvLQXnsAZnW3jSMaULwuJ1ntQN7u7ojcwy3SZo7QHiNeCTM2CGwESGHoHkqdUbAUtuHNPx3",
  "key27": "3aK1jY4Sp8xqhZRfUtYgzu58yhUBeuVBTLikvsWGFBVeFf8J55YDmtdYKNxZvLKkw82h47qHH7fUkD399VrLiucF",
  "key28": "27CaxtS4bZMZo2rzZCWPbAQjsYiJWKbCbPQXxVxjVsukrhFF8Xd5Ykmn8W5LQgGntC28u8UiTxnbSx2w2r5rPpbp",
  "key29": "3yTdPNDJw1KWTvj3LGivs3YH4uzWhNtXGsnKjmGNS5YSsL4pDAwbHZtzHLRVYaJMkWbf3Udqu6DTPMpBBx8N56zV",
  "key30": "3U3vnoxY9vcNXfvtVCF6otbcaxt46fF4RJNr8hMRKXHNeQHMDw8V7EK9ycaMSNTvRq6VkmwU51r7ctVSyphVGHCB",
  "key31": "3uNmdiwMgzmaPiTe5iXjLoLBJQ4iYwxTrmTip8NMjt8DrdvQySqDWmYccYbFVbHZiyXF67aJg7ASEffuqdQX3m4t",
  "key32": "4WDcnRCrhwgWn8uTfMnkG3L4YFq5dyMhR8f65hxgwrMD8e8VhuznfE6UXd7e4g58uXUzqt4cjVECDjf84YhkTi26",
  "key33": "dg9NBvjTTjvaQcaDnioVHCt8zjg7c9JXpF9owoKiUG2JbvPB6DpT82U1GM23syhbCta2F6Ritj21fU9mErvRp3E",
  "key34": "33e52jwtVuRvmUfUsq2LCmVAQi6PzSeXsvYDAZcMTVq5fZchd6jcfUCDgBC5wTgcJMZ71y8Sn62zin2D4rg6Sj5Z",
  "key35": "65Hs3jBbNXgefei4WYzZTjosKQZ64oxP6WrMaVM6n7X9iSQVJjQbLwDJw3MNHYsUs8Vq7Ft3ME8pv8CP3vxGngbg",
  "key36": "4qgRctF7W1pMxBYk8mimN42UWh46YzEDYrj64AK3kHeEvBSSkNF41Xj6pk5ZzKTnvb5Q14XW2cXah8bWXzEx15du",
  "key37": "3T5jWLA17zKMA9phSD24XgEu6XeTj3Jo2g6Tm46wKaKLySPeRRnYiszgq1X1JwRE37gE5PKhuZCyyTRnJZwvid97",
  "key38": "2P4kwNXjZdX89zTn22fMaq5ikWZ4a9jaQ1S6JPh61KzeaaXM7VNPoBdcPGjfmqgutPoz7v6ee8PEwYHiT1LsDyKx",
  "key39": "3XMNLwp4SmHnFiRgsBVLWh6pFuq9JwFDjUGvTCK5bifkD4Uqj7To8rPNDP6nd32CvyxYwD6fHhgqz6ex9wvHeZ2F",
  "key40": "4aM7Q52CZ5S2oWbg53d91tb1cUNDjBJ3xf8YNgXHciZVfLjKG95rVFRMdy3PdnB5xM5GPaBHiWRaWmrT1HxdyiHi",
  "key41": "ry2dd5w1uwy8XnPeYSpvcDaivxvVyAALaDdJsjxf4Pd297BQaHz8GejvMidBjx8YpUxxyPoCu6HZctB7rLY85am",
  "key42": "31GTvA5sToqBkp4ngWytme1WB79mtYFME9KsmcuoVpZQko9ArzCy8zg8QtMWW8MDqPXc519DgTFzLKS2LGfDcnRk",
  "key43": "3FukdkU2DngfC2JLRR19YkerjiLsz7bbtWeoFBgsUGwEtXoCdN5py8ovXCyvNhFFVgdZPeqiLhpTpL84YBi1HNG5",
  "key44": "P3kzW4TgE58R2UE3aBfNq5QT3NcyZj15NnNiNjFZJFM222zBVnfdFfhExyoTyNXrDXtqLQz5r15fyaiJs53sMBV",
  "key45": "zptRmMaWZxkMgvrXvQKbrCPUZ5gXdAEBqMk4Xa5hzkvcRRSKf3GzDtwfBKYo9MkcgDqDVyAvedZ7W9NoCrWLjRD",
  "key46": "2Eei6zjV9dnadu6aiZijUQRonuXTjpCPmxmUU5BQhsGZXdHfSYoH2Hmxi4L9k5dUPQw7p7nR5rL7DYLj9DJjbEuv",
  "key47": "5UVrCUs1FNn2Hr1symDEStqUj2cUEi14E6toPm7s5sA84Si6DyCfhfUVG9cxH28mH9gfzyPXdrM8Wi5KUMqgqYG7",
  "key48": "3zRaL15HmukbrVEkBk4rZBYCi8rAfHRnQzrYNZQeX4yZBvKECEoyddEU4LXQB41VLsKGuQbbv79QoGDPPbcHBmNt",
  "key49": "3rBRbxn7TvTHkJpX9SveTzFdBtiS6FTWEuwFJAPJ35nasKEe6w25KSJJeGaqnwXaMq9EporiA64729EXkpwErHqZ"
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
