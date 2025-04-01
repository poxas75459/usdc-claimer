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
    "keKbzxeqbTny9jxcTLkCYt342dET1Y8W7iPkgJnNhhXQqD6aAGCVWALjDS8vKq1ZkovSDom5iLN5HQie8nommtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41gdpRGxx7cgaVPWnNWhDNXdndKHKb1vQE5MQA19SiB4tTMeUUtqnYgzC68apyZGZZ36b6pBNpfnmJhmUBWwuBEG",
  "key1": "2nAH8ns7JyULSfiQQM8S2jxi8uYZg3PiekKVbr4W5FEF3vmJEtTsq3DVecz8x5fyacuxyMKKna11FUXyz8T7M3N4",
  "key2": "fbPrFzGfLtcbiSLU7rPGPAT2dxxcxztGJwzjBLFkQuMY31EJ3yKeCSw1BPvHwkpd7ZzYV82iwuC7jJQQoRw6np6",
  "key3": "3DswuVsJ8STZpYg22w5Gpv6fwoLtNex4u8dh9c1BH7H7wNNT8YTtWSx5j26HZXZppAGowjJ87bRgTpmFv5dBBc9c",
  "key4": "3DsNTGyo9qQgTsKc2cZBmc8QmVrwnQNREdsmzh38AtWgG545C2i9Qtr6wBdL2NcxxTYFc6UhCcbRfxeFkvmDDoqd",
  "key5": "bXdB9LPjXMhrAod9Dcym4xfvCX2acbp2AGzQxHzN98GQ1aQqty3FkT5JkiXNDoorWHNGpjWxHQ5E7KtiByYxByx",
  "key6": "2TDedqjF7ER55yQHJMAPzNmm6aQnTKBBQuuSNwmRRDPsXYGFGBxN2RuJg9zqdSyEbcHPCC6XD3co9qV3q2w5op47",
  "key7": "34HDsxQRdiaQV9skyh5maKsB3MBHyowEbQsJAP8FEi8DpCrVvKpYDzD17biHANXUq23pKmqKRLyHpP8gqrjHfEYo",
  "key8": "4SRCYL9tQdfZpwzdS2sw8mHDMyvpPz5TGCvcputftepwcV4hLXezhu7LkzV1kcqTcU2P6c9F7Zdt1q7vEm4K2DPx",
  "key9": "3h24bfUPG1DxhRGG2Fbp8s1Rno7dsWfNZkL1wwjHR1Tyo1TwozyLggAHLSStfTMgbFA5g9LK4PRGhU2LKmRo4MQ7",
  "key10": "eHTA38KnZ1GQ7SMVLyUTX8UkaWLjB2bqx1GRcxbdNJk72MVMT6gnazp8DLWwW5ixaTPCpc8yMW6ez4JKfGdjeGF",
  "key11": "2g8Vf2YqNwwjXTrdHjAfSZDUXF2kBUcJzDftvFDQDrH18873dWRNM2LdMBaQX7vfCyNiXomAyPVNu9KHqhtUM5YR",
  "key12": "bUiMQWSsHnqvfGJwFgvqCbFhHgwVVTsurM8BjRcg486DBsBAKLCguevi8bdJ72bU8pzn3iBwpbYuT6xKMyyrt3G",
  "key13": "5MTAbr9aaQJEEj1GsCDaAE6MGEdXrYYc5BNbDw3Ggwz7v8vhz8uZA6iQpWr3eYaRDnynHfGbSUTrfzrMz2smFt7E",
  "key14": "5CdxwAAacKhZWV2ZrfGHU7PE3sNEHWP3ALb1JY7CSY2tTbumB2QpjUykAUpwG1gsLnpKNdQQN5Ck3s81Xt9FTDFV",
  "key15": "5HnTihvSPGm9fEMN1iMihBavQmbLYJqdfZkieKS7jbEBkQ2AgoMc5zMrEUwB4Zum7iUTBihf22XeahV9artC69yc",
  "key16": "4DXCyuYg5WZYxFPY6kaHnr6oNZCfs63vS9yPtQnaKHndGFcyasvDoTD4L8SvHNctEYkMU8rjVwZ4ywbFS6M2TyUp",
  "key17": "2fdJWjhmf4H4WNFYTzXoBVBJCF1MRY6mYYbfhZT75fa4iuTZBsggAH84XtvNGDwMGPS5NKTW5Rz7TCfijDSdatyF",
  "key18": "64tYzwQqxzaLUBbP24AMTTL1T8RvxpXeCxdJ3TiwV43wWakurjMgXFLn2uz1t1j7txyRSfDcpMpcUS2oHQjEirdf",
  "key19": "x3apRwFcx67FN5GqsBeoeUmDZhEavuSz4SdyEwiEfexdHo5eWS6CRCYYUowNiEeDC1bum4Xtkg7zgUUjpPsiyr7",
  "key20": "4yeKNQ4Bpkwa1GhxywSZS2KkhZvRj66cFtPsi84pAWmJNKVHhk33YBCHjWY7VREbDkzYhxQ2wMwhVGcebeeMdozF",
  "key21": "22HXPb9UHuhTSpCzw5HGP6fS8nSFquk1HFnXZEwu44ZnUfDjBJuf6x8wWcckLV85P1yiztCDYG2Nrj6doR1KUjv9",
  "key22": "VbHf5ckY38Gz9u9ER8aD2gqf5nJ3gFzZC5orjHCLbVff8zhonY8MMHhvnpQm22WmPpZ1eCC4sGrASR5DG3AL3E6",
  "key23": "38XTWA3D2acTtSqpHdZT8392T4eSictafBR998q4uhcDrvaS7uKqt2AmpyVoTAioBZnjh1eEVSnxpSASo8BrWaYA",
  "key24": "5yyb6aMHoUWfh8KJP6SxvTN6UdDYPkwVeAboWmPq3Qq1k8SToMRb8NJU465gXuuaUdhu5Lp1e3R8zVGrQdChx2w2",
  "key25": "4eUo6NsCAHMevxf2WNhMtoTaTwSMwdVNvbYgB6LKYEQ8c4KmQsLkuccpK1degwHecCqp9hSSskutihssoKYKjVAS",
  "key26": "4dJYhtVQvBSMN5FZkTU6KjR95rS5mLiowP2BRP4Bq3unmknRXvejKVvL8M7DHQQeXDXMp5sXAonexkdUsWFvef6k",
  "key27": "4FBPYkXBtg1fKTtjRXNR1W3rd9oVLinghLVrEYnE4oqAPhg2VBDNBru1tEVyd38UMZbcrcqPqHet7WEUibs8H7B2",
  "key28": "4Bc8Q9BJVTDrcAWNKsuPtURiGeAcZqum9nZ3ESCinReuKkBzPbQYykmVMzQw8uY2Z2afMz5i3FL22BvXX1VW762V",
  "key29": "kT3jXiZpXJfUvetsH8R6JdCX4D3yc6uucbbWPijvghZYc1CDattbJz1FRt8ZkPYYKK3DKPrrajWSobR8L7fxxY4",
  "key30": "3SNAvyXabokAi7W5SNs1Y3oCJG2BjkSLmJJJZZTg9BEZimY36gNyfkyKo5d9Lme1UZq2xx2yojjowA15Ad2msefS",
  "key31": "4aaci1opFtfECZwg1ZyY2Lm4ETRpV1nFmJbL38pcHXqjvyFzkQEWDTA7zy8cZhQaeQgUUvhc7ns9Zs4zJYNzkAmw",
  "key32": "4meh2pgJedpoiX1ZC9QXxS6436FJxrwS52xDJxfC8JYMeBxfvPKgAQEDv4MZTQ6MN1ug7N2Gx458xkHRuFvygggd"
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
