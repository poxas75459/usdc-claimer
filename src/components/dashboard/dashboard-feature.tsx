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
    "3yV26gkMLQ7L2UhjfEV4NPXoxeiBYo6btrA1ywg2KLacVpQzoyQx4CEdyo4s89rQKknCykd3VqhRXvgCpBBtxh9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cTdmAu3nLhoSFRtpAMVPRMwTM85RndwgAvKpx5UwtctANw75w4vSeMqtGS1pfspHLWYRLjbf3vunn2h34A6s2WG",
  "key1": "5UAt3cyTtDum59bvk5SmbEYrrptD9wBaTttZMzvnSLwbqvZKX4iH3oLdC8CrMkinjrMiieZ9jdwN4MSLm95cjQC8",
  "key2": "2pAo7FBZZKKi5mVJJVg3oGbCyjoJnnDTQHEoxPeKzeT88iHUSy3NLMxiKrS9pWHaCZpAwntBCZbeBrnMy2DN7Aa3",
  "key3": "5yKwTdrFsTbvU97o9At7d8AK5QR45itc8zXreJi3AjWqmvByuh8K4hVSGBZjkPh5zGKrAVecJuMgYQVUdCZZLkqD",
  "key4": "2hGxiTqkcc2BgaoqBf9nbkhh8M7g9TUskZmW1gx2XLHDFsSpaAprnUY3bSxbyVXpFKYX5JN2iZDh1A6w3CZ6DWF2",
  "key5": "3oXi2gTMhc3Z8Mboe6qx7pvpWBWaGGygBTrAQ3LNXN949jF5RsQPCwFJ9Evf5UWDYHcRMTKSVc7FWhzvjsdYeaVz",
  "key6": "4jyjEkvx2Ej65gixu7vr98wEWLxFJ1R2Qafyknqq59mTvhXVWLUoV3pXr7w1n9NeiTyTv4aviMGTirixnVfpVKmR",
  "key7": "4rxi3fhE5qztbJmiWXhKKs1XL2U1jr5qB65YszRWD7n4ptMbXTWTsMTz2kq7xVP97gycrHB4k2tfCrpBVeqogr2",
  "key8": "3ApZGQ23oN7y4ZuXhc7MoHAPqAadwmuMRdgdtU16Lr57w2LJnDHA5MHroFFAPMgrRnu6W99MWJmk3Giq1pfVkxXL",
  "key9": "pi6ZyE3Xv6EzC5ZCkJq8ASaYxRJqhMjBEFZBWwTdvsX9K5i1JoGz8p3c7sLE56QoBBNSvAqbePGK7Uoe5ZJW84y",
  "key10": "5PAZCz29YtKNzJ2CezEm8BkbqtSDhQE7N3StfTdZQ3xhNrhk7pPBj1ddYgZFddQp6Yauf8y325yKNn8o31AL7Cb7",
  "key11": "3naWJnEd7pxfPu1J32H29C9V7fPntefQZJ5mNNR1uiiYp7izmP89WBYfhLBNMf7UdwoKG1MmoLTZvwM4iLLurMKz",
  "key12": "A7mgR7kewN8CD3zXTGxL3wYLaW3XCjMKJJZa7Hdr9MvuSDjtceHpGtvCTxXJdLAUpTpdeTBiBZQUDEqNmPjCBQL",
  "key13": "f4jeS6orqrcaZLkFmuKr9WRkTDWD9WGjRfa9JUEarysXZVKEeVSuTMFVb9ZjhihTtRpmxUZYGVyZguCVrezNkN6",
  "key14": "2AvjE5qtvYLmxpvQsFxNpxrdRUfvVTpEM4s3j5V57FgzgdonoWPsTLgGuiB5BXt46nwzrgq3jqLViKigMTvNMh65",
  "key15": "wpVinWPJ5c58JnFkuwpByGjtWApphbr5ZjTMa7g1YFWXHa4g1NBkzgdmuoHAdnXdntq4tsoHuwfVKEHGS3UYghN",
  "key16": "5LHcVZ7Ma1BwwiC4gDDWj6gQaB8ZyaNwgDbkr4ThTHD4XCsuqMvT7BpXbZ8zjzQ666Zb25szm4UzLkeE1SP53b2b",
  "key17": "UvVSfejAPJQSpuyfK4wiFUx91PoQevnLr5QgtjgcCiemmfSjcQRrGrVWfERGmoRuJYBeoRgeTefYLe9uZ9FcWqG",
  "key18": "2jt4zHNwSvXfhCiyEesvRBrYg2orCgn69QggtPhh5tN2njRNQjyVp3LU1ucEydyZsdHyYv53wngNq2iphpKwnrJE",
  "key19": "4KN28UxYVnGKpPszxuPGS6rntcjoDPt4GeeohWgqPYvWHgD2hgD77WihhpHtNy41eKDkkCv2eSt4Tu62CthkS2jY",
  "key20": "3fecp5igMsn8tS8HopvfzhJ9afGYJfQMSiNRtubLbHhGs6zkBnMgWj8xiRgQ3FKVXw1whkvETGQShURd1Do2oD4W",
  "key21": "42RkxvFGEPgnR5dwgfh7LHr93eCiTRZjkkJMfuhSP3gUJZ4dqSHT1JYHKMPw7REKBScDnU5iUBspPJyALJPj65Rs",
  "key22": "tEiNVAdeM3n7zo7Nnu1SXAYsx7iVxK9ri2H1Po7JpnPtQyfmk1RkMDzQDi2sewFfwvsjTNdkhmjZMbWB9LrNdh3",
  "key23": "4LxQg2My8z6jnwTeidPY8AqzsGwiUVQtd8qqae3HWAmTPsyqHar5JF8sfLc4DhtBqofJ4Dv1b7mxxoJWR9xaN2pw",
  "key24": "f8enxRtv8UcLAcab5QYBbpdZCeKZJNnW2Jk7itDKutsKsEq3JVLjCtYsUME9buFSzkoYpa2vf9CAW82yp8N6e2A",
  "key25": "2f6N2z7aTdb9FndgPhwAMDYZhRjYuBQRhkr3Lez6jsRRoRWsjkJjF1XXgqierHsRqNPLTg6EwRGCf4wmDgd6eBcg",
  "key26": "4PVePiySQ1FySJFrtEmnCJjnHpuq5Qu7NZz6VHQ65YwM8Qxve5BTECjsrqL7LjM1cPA43RoPkcbMu3wsgxc9oTxH",
  "key27": "63SP6DzWRKJ9fooeQMNYEtkDHsnGsDXUgXqyPna6BEPDBb5yDDemNe4YqN2XzKHMBR1yhrpRKKZz38Pa5qCiPxPT",
  "key28": "mYy9VSK1TrN7Lc9wD5QdQ3yyhiF5kT96PDwLdiYoWDo32NawT9VfAXKWNEGtVDiHgvjDzvTBVojadYS9eWe77hg",
  "key29": "4D71XcQNggCkh5eDuhfARqnS3G4bwn8EY13PQw9E4DGMAdiwb8wZCwkEpXxPVbzU7sU9hs9TszCiuHVaAjECjBnq",
  "key30": "3Phz7Q4RQ4vxpwbqRMqSKrPemFMFAXS24EKsGM8jqYEXiEN12UKLAT3TY82dUYTqt7PBcvUjM1qBrsX18T6wUm9T",
  "key31": "p8WP8Kj6n1Wfv2Fe86D3rXsmKpdGzAL6qPDw7uK7ZqQAV3pLtivHg7jt12H1tiZ1Gm8GUdqs6CVFMZZLsqPAThh",
  "key32": "361NubqFy6u5u2RRbP1ZS7tCEsRrh1bnqTB9cnU5HjCbLDCKFsouqBDAQ4zV9uCDkP5vAM9K1zdo91qkFxQnrjJA",
  "key33": "3s9s1AGcNPjEDThGVsXsubkfCYD7PNN6iZT7g76zXPjFAaaAUsQB1PtxosLFK3PEqoo1pSMz3bdLF2cT276A4ZCW",
  "key34": "23ZxVDB4WdGpJkYdS7W3CQuB9zsp2CC74YSrmyLTinyhGas8DDGTEbFfvicPXaY1YNofruaA88bNe9qPenYJmC7P",
  "key35": "5ZnCb3Ct2bGa8dJ12svhezzkQjQ4v1JCS5viDdHQ5qRh1v9jKq92jX1bgvrRyGxFLtAnS1RoqXHpPhJktj3Eqjvi",
  "key36": "4Tx7KtagHhL41Wg7rD35WWP1C6ubXz54xPSkKvDb9XBUUrpDu5Use5hDVngMTgKQ72BXwytzni7UbkccdmXEnbk3",
  "key37": "4AdD5ZP53h1aCTtCR6R3T7DcPDWPoZThffx4Dfpejd5YaUTH6YC4AzjmSjVQW6kZbahCfe99vjGXhpoUpkZmhywu"
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
