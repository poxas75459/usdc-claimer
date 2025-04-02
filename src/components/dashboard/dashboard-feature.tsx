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
    "5TdAqB5aZFW3CuVWgjnaJ9gDfj4AHb1yZNNm78mec1R43PDPX15JuVC8qfp13eWag1TEbFNbMpQPhe8YQqj9Yp67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UsqfK6ur8TBrg6as4TXfpGdg2epeJUmKL6nHTgCmQvxm2S8zaNYugPe7ratZaha9ZHyyH8iqyscHtzEv4AcpYag",
  "key1": "4pHShgcuQqh14e32K2Hk38WSeeELAj82qX3Nx2mddvCASnPneufN9x9AHwfirfskX3UQArfoUoqBHtJU3CVwSs5n",
  "key2": "32uxdXuLu18mKehGvDihrqKn15CrEWrUeRfXvwMnzXmAGYJCEky9o8Vk5jZ7AxuxnwH5sadTw8mSCjP7p2mVqGpc",
  "key3": "5M1NiYN4g5DxgmFbTPTFAnVcmXjefWLMwGrvt4e8Tb2FcNwigssLEfEcC2EvU1PbEQftZqHeNpZTWumNwQwfhSYA",
  "key4": "3D66ARroCEVqtnL3oKDnJeJGAntk6AiFJzAVGeANA17HqC99iZZY6Y7upuZmgeQnKFQx38QkH3Z4YD2LTH1zAryx",
  "key5": "48WBoZHqxHRmaTjRJh5MT8CBjobQMqA1ZPxRpAPGzC2sUs3sBiZaWa4tNpU4tRpPvoHu9rP1cWKBVknpz3wBtweU",
  "key6": "2jzDUBTQNK28yZNAqX2erRBLV8YjhnR3aqVyWvJjrfZc1n2BCEp2tfz29E8rNCXLjWXM3aUT4GTJp9aQ29zVR95i",
  "key7": "HXP97B2vZo5PRTh72owLvA8irXyCvkJZe6wHZAAt9hLPUWUipXb9YEu1KLj2doeJSTcJmKwwitsbqKrVPKHiz9s",
  "key8": "DsXCXWU6Brb2u2HBAxkP9rTGZ4xTmf9NakcpAgVaxSwP5rXVYuaz2VnLiFEVgX4GBiSKha9dfzFNAjd95aKmJmL",
  "key9": "4753Y5UwJkTxQ8csNRFzEEC2FrmuJ6VWagqCtBZUwwwvcQyw1pfgg5dD1wnoeXAo22jVGmKQENzU2282WAZvjCzK",
  "key10": "65ge9WVmx4yFaZ5U1FJ6bmz22acmqiv4yQFafVnGmUL3cte9mzD8JEfC6kBgndUuq2iQjmdQVJQn4odLxNjqgbZQ",
  "key11": "yiLucnoZFeK9XyZnJ3iFSkixa38YqW1xoDzTa63ESxmTaE7XZd2BR9hGpWvjXjYwoB9Tcqfg4seJB8X1tBtMzXS",
  "key12": "38YySthxnXTAgbhokTMf9p72QzNCbuaHM3MXBXUvRdtizgN7oyBz9jnE3jgZeeahdxbd2fPaNGq4mjSRSh1wkJHP",
  "key13": "61MA3UmtBre6D5sfzottUm9JcVRvwVSJ6Soy5UZTttFouJWp1XQ4YDg8DEV1vh1bdzYcPp53EQFDjmcQjWpipgyG",
  "key14": "57PwGq4sW6WqX96iV9STyR6m4jHTH45DSnQnFXxrCetKM9r97B6DVPTKVYWxRGACqpa7evp5cYYznf4YBxfTe118",
  "key15": "4S523dDV7iGctU4rNbf2MHrTWoAR4n7SYqMumEihP7G6cwxuPD2TF5kHDcnr1s16mzGzppBojgPpjXzrvzWW8ytb",
  "key16": "2iS5b5bVYaoq4Bp2o4xVfdiyaUY4UdAuHeZK2kGoNJxkY5zVurjSEbaKPAiDc8JYcyMv3W1R18MpMQDte59yGFmG",
  "key17": "53rhB4UbJhN8KfcAFmjMUif5bjPvkMEaMHkhh5zKhesSY2uFvMQ76uREGLj4x2pQazPvhKATWkxAz3cb4vWkSQc7",
  "key18": "4cMcXLuttY39UVY51H62s9jUf3FYmyQ6D8HeNoDE5Fhe1s6Au3Q5Qb1PoNkm6ZMiT5CA98CajW2HSzpssiGuVYWj",
  "key19": "3bSRxP7UY6qBwSs674p1qQkKhMudYjFoQL9oAwiZY5rMwEKBhAxSCVeNxszSj3S9pK24iRJoSamK3yiyQaoQWH9y",
  "key20": "5CmYjN39mJdz89DTsQSfmmAwAuHdwBu3rhZhw8w4mvQsmeTjxm2dexJ5TiJ4fXHArtFr3QdFe6v8qG4ev9P35TZR",
  "key21": "3YqnLBPXC2yGQEf6poUxoDz36zxQHCtFMbkogJxooQrZREVKNAXbC5coFPUCqKARGtXwcd1Z4tGRAspQ1iDcSb4i",
  "key22": "2wP6SLagzea9UDnfJGz7opk4uzqJF1jSZqfTFqH7az6yBKnXvLTBiqxi9z9Ck91Gbidc5jjhRZv2TSo3XuB6dMxF",
  "key23": "5oNR5fJ8zrSFFefYyQ9A9H4RjTL5cs1Zgmdboqhu8hh2txkuJm1mGhiLfkX4Ysogn34WhmBxURM6ukfpe1krgeKP",
  "key24": "5R93R5oMvHd9tzvEUNPTkHKoVmE6JD3QJ8hUG16HZmqSjPz1mU6vmQurh4DfEaru8qYE3geX1PCa6G6PpjEoCXSE",
  "key25": "5L5VDPqgSWnv8xvC6TKHiyCqWm8CNUdq6ZL3YGiWguNgTtt9TA3DzFPxXbAigPNHUjuQmAMJ9e25LWv3cApSEMvB",
  "key26": "kf2G2YGvRzyCuX3zgWoDzcbcUyAo8iU8ohmCo83WwAJExYpVu7Lkd7VuhDittTReqh2EVjLmAkC8UBqgXoXRHmo",
  "key27": "MBXTHVnEVE7116bkarE5xedUv7AaC68XuUXnkMuVhVtUvwiX2ErBMnJzndNAfU2ca6kstRYgtbhKUNyG4dDC8kH",
  "key28": "254Tnb7hGtyRappXycgdmGX9MrSJkA8XCDhpwAnW3QyweExfWSwaW3wQKobT9SmXiaUeYAnVwQup8gANXVxdK8RG",
  "key29": "3HYaThnFEbbxiPZ7GD8V1GE6pAcsLtiAm31Nzxn74gdkGReYox1xYFbUubWT8R1BJrf5iDU7sraTtPrGB8cMXKAh",
  "key30": "5id9knkBWyYVNmzNGwAsGQvoxwk7ruCE8yoJewHDMAkdyxJXzwR7PujUrHBbFsgrCoBriCjLS7Yy3K5KVouBEds",
  "key31": "4p6coWeL2rV8k6NL598biUWbWtdxTJnivNBWKpRJdLtZq3pBbFBe13njaUnAqof6eqesj4FjTaV4ZpEpep2nBf6s"
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
