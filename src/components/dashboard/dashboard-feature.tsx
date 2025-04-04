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
    "4Qj5nJUitSTUxfgqSy9H2R3MHf9WxQjpcNMsVkWWEBgdwV1ebs5yzvMSJVfkuXJystihdQLAeegvJDky8q5nnoix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mdPvMTbyw2TNEqJSrx9BpUx3fz9CNhqvg9DVomtAhrpj3DQacyZQohMaziSL7mmoH31gn2MpSUUedYmz1P9DFfj",
  "key1": "43XY7YKzKJxCPre52Ev3mgoCzSbXdn9pzCRLu5zB4P7PgoBNGU4Z6iSC9NNsJaGWkgwXn4nFbSuhVFPXvmjdEP2m",
  "key2": "NMcFAba4pgZzSdRGPVeFC9xrqiXbaE8scaS1UF3LU3gZeWtohuY5NnVj3jAcnCheXB8599rxA2vmhdstzQXZKoQ",
  "key3": "4yqzjmvdyMA7Vbw8L71oHPsQNUeRKaVTHNqyCZPrUWZ7hyLSDsmP3ddnQmLkhsPgzChpV8iMqSH9hQ8xmKqUtsXS",
  "key4": "5Jj6iEaxYutPu5aLdiRnKgSYj81k4P5mZRcFU2FUS318MUFGsvz9NaGggxzBC6nzeeECVzPK6EsBoyvKMz7LDqGE",
  "key5": "3wzmBVom33vZPTFRZvozvu2F51NZU2nmeKFiedwZ4Wwvn2dDRg9uTtwtsqChNyKAFYX968f5SvjF3bSaWcEamRB7",
  "key6": "3JeUGhD9ZUM8fwuemvetcxJ2twUJ5KBf3VNWTdBn9DyaVLr1vejwRtfwKNGy3rvGx47ttH5kTUV6ttoSix34SPP3",
  "key7": "5dZJpFaakMsh9NMfzD8Vqpjzwf3mCqvNK7mjcMpeyfRs2M7TpRmnXccJX7zN8p65rvN3VjM6wHaqWpS9ESmv8vBd",
  "key8": "4k1DdAvCg6eZcjhV6npTYB9Ybb3vJxMKs58jZuRgAj7AyV3ZBWit6v9b4fdCWekKA9Ew6ccj1u1EtaGqJHCKjVBK",
  "key9": "4tEg6CFTT1oLTxcFAeR9ixQapCraty1CFzYq4RNHJyRxWSqawvPVNaiBfGBFPbNJrUCgh7yD4bee9RwiBqe5EKwA",
  "key10": "3AEmgqXJrn6X6PwPQ84sH5DwFxkfjxkPhQpSCCok6jnFt42AopYfEuHQskj6jGBCxDyvP2vKXnMypZsrcPQPrLaG",
  "key11": "4owjMfbESqphsvhuPgTvoZvULeWtSgvobL4Nbj4RtiXYUdBQUMAXMhkmaRo6QupPRJk6j9yppRun8pakk3HQajDo",
  "key12": "4JnNFHDwKAq5iPdfRre37bX1kdx2KUBK262Rq9H7BnqKLwdnJgCHCBbpdUkrcVDYm6cjyU5WF5p5vs9oZCUBhmoa",
  "key13": "5N5khWQRGCcin96hqmuyJ6vutQFQpLwsAAeLzG7rirqztbfhc5EXDhHcF7k9JG3UXDQwH5s2TYUCnma6uABTw9f7",
  "key14": "23C8JdnK8FAyduRbiFeFyG5vF3tNBReRWxRSrsupPgyASU3VvYyYWzcnmEQmZFirLb1Z3rccTiKWC5PVyi8tXDYV",
  "key15": "3w3fcjWJTP9QSWv7MSrMNhqSdGgY1kSMDyCQrL128h3bk1iutbkiiS422STt2wqnQjFSJSMLbPoRw6YBmQFJigcP",
  "key16": "56M7wwmMgHKeQfL5T67ujN5VJfoCMezVoL53RfzXe9W6sGE6jvQLD9169zqnwxKczeGPwU4hSu9Pf9EVW95o1Kq2",
  "key17": "WZMQ2iTCLQBjdWUKWiMSxBDVGBieM9BMfRoiM6r4TPauA4P2ym3FxSaiLFQkJHsCFh7G2A4nmbpM4pjK4bX6NLp",
  "key18": "517jTP2icJVY72zcgYX7MCmSzBzRRvuQwHV18upQ7HFeX2fYMJ7JpFYfBLZ68UjDujLcWsprPRE9QX8DUDsBCfFh",
  "key19": "3qextsDGqEnziN3W4ErtUNS6PkWqycPs4CH5NU76yoaN66ufBn2m3D4UujLGfVaKCo665knBZgUFKQgpi9MyyRnR",
  "key20": "yAQazZ6QizVcuGkuhFo92Dc6BmPCt8fEjwiF8ckYQpRDuHw2DerKAKCg4cV5Z9RhRLvnqEnqXH5wc2S2ryje1ED",
  "key21": "4Nr3UTtqMvPAqSZisDWANANike3zRLiD1HeEXvHCAyhhBtJTTHh5se28txQasVCmJXKRgidAtsgcL9ym9yThuPrK",
  "key22": "5JmtCZe2fugQjfH5WXTeQdXWmXzZJm7b2mc7oXpZE7mQZSJ1km6wBoXKD4TMM2B7PahEef1cy4YxGm7jkwKANVTn",
  "key23": "4WBpwPxJR78UcCXYTXUHWj9E9kCusd6MP7TJgX3X9wh7EQCnn1zxCfAntufM1JV1ycC5eJw6wDtswujp8AA7Lz5o",
  "key24": "34U3F3n8HW7zw55ySat5U4XBinXe9diTvo719uBCVYxe93r32ox2DEYcjrVbgHTZ4xK8D1aPKSCgGngCXF5FKQ5J",
  "key25": "5EseepbX37hh9u8ib5nyt8qwhsu2NWnn1RgWWF3dPruXtUZgUg5XW7mkqrsS73D8DfoSweGW54viYNZ1LHx3ZLxG",
  "key26": "5RjXWfg4mMQjoQDyo2VuSxoax4nXhduvqtyTfp7G1q3Y8uGswQMnEASBW5feFjseJGwpSG6xPureJqjFYtkc7fk4",
  "key27": "aQdDA7ikokjGW9Lm57AVd2zCpscuU3cVduFHmfNSm9W6Wi6wb42fwbYMerG21teUqHjUb75zdCB9DggxpztPPRw",
  "key28": "3JT9QiqfZnxSB1tMotCLphSxxB4prpzXSwfopj1UhZvMrcNKp9TYA5zrFiqCmUNZ5qv4kv63oe1Sz2cxKQisBrLa",
  "key29": "5Hb9Wo2qdQb7GV2ZnKyuizDrGH7TsEpQV8NqW3jPwMNHyWT6odND2cqrKQhh97VK7mJy5dCMu9hykViaPwPsuZko"
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
