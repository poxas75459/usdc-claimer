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
    "28rQnepRgyoBXBgzFms1wLEVJPRSqY9bympt58F4L7JqGMm6Zan4UGiE9Xjk9ozP2zbkr8AVdy2oWXaq4K7Xs8Hu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mDu7TRRxmpbTCMgBv7z1VzijzrUW6fxcT8bmHpZc3bwgCUKWDF3UCAqXWYQFYMC6M23Syjs75aGTByhvdkFnu5s",
  "key1": "3Eqb3eAqMDPNwmPEjAtSkx8zUY51uWQELWcQbVFYNFKbGeP89afmkTmse9DXC7cPswe8aGic29AhaePwB6D59u2z",
  "key2": "2iY44i2Xq5826LKJrorv6zjpbfjCqoEZMo26f97kiaiBuU6d71BPW8uTrJrxctPzEg5mD6BrsWbnUHotAMVA7dwQ",
  "key3": "QKCRGqAwz37Jc5wU5tTxFGMzfSt5UCRQsDLnMWULBbbf9pDmnyXJSUx2o54di8iF894yuWAYSgswrEVv6vGkP4E",
  "key4": "2fiuAq2k5pmNwDQ5qxKTtUaTZRDyprTkgoiJypL2jNz4uqD1MhCyN88SN3wBMTmyX6QzaqoQmR6gzAGqUEfmczBo",
  "key5": "5VgyBc23JYPbrR1FcD4Bbz4ucNMdcZn2zBtPKNrPk4tmNVh3oj8yeBcWQRWoXSUMkY69bQbajRYHg6UCejN7FXM3",
  "key6": "4g4cWV71EiCSX2VX7wKwQFJn3UAaF1enJFWv2uaD7z7SfCSecd3qBvUVkTRDcUGrwJctDhCscYem12pxp2xdXUrD",
  "key7": "64Mj4XvCZ8Seh2RFtxVrwBDkBgpUN5MR6TwKToMcZaLwBV8mUF7qY5oUNgFP9eB47hdPkb13LvXG89MaAudmvRbx",
  "key8": "52mCg2ySthtcBFTGXWN6ppascDidoh7z79vt81hsdbXYgzhSp43HgGhhQ2pmtbXagvUhehMgJEJb6NDioURRunJN",
  "key9": "561rwru5xrQPyP4cFHiUqJPs5Go2uPVve8pwHVntYtN84MSpvU9whyM7pawJBd7QxnTKBAxZQEZWw7kFXg2pWD9h",
  "key10": "Knot87oqEaDaYiguHpd6zyAggyTF4i3C4KJiyKa5VkCAMAsarYRB1dsUxnq26QRd2aSWUhEpwSU4NHo9H6C1vKX",
  "key11": "xSeWKkbJdCd7N7REW8EGhvdGCc9M6Fmb4AVK3Ng5BFViB9v4txxFFe9cYc8MQj1EAV3Ue3fLVUxQZyDZFAtpwgH",
  "key12": "2NGCkHtxRJqB8Ept5195Tagp4RutV14zDZeqgRQTuK6gsisodqinRPP7H2DG3CUiodbeAPKbgqP3Ue4EAtmCCpnx",
  "key13": "2e35qL2qjM9DPP8mCvvHmwRWoBmY71XixD8qaX7ZHf715TMXwVGoc1MLyKmVozPMqTescN2QaaMpPRtSUzf2gZQL",
  "key14": "5c3KG8eeT5owN5NVr8nyQ4wuGsVAGDxiCeBicf1ad27i6DzjXJ4ZYLKqRXz9md16C9FoqXFoayjiQyUSVFTbvPnU",
  "key15": "5EYBVmzbSG57KKygEi3wphCaGBqds1qzwPePAarXZh63NokMeuErHwCMNwG8kmA4VEjmm7mSANj6zznmBG83FbTR",
  "key16": "3DAPcrE7wT6Gy7gpBBBHmucnGM5wGA9TszfgGT6YJrmzL4rb1qA9nYGjP4TVCUEcNXDH5dumZKcwWNGjYrb4g9VN",
  "key17": "2cwETM1jAE4FwPjb8s52epcs5jrcGakfQQkM38fbvaKoQCi7vqfAWud3YAJfjjiLeL95p4JaWdtDwtqEobqKGBjQ",
  "key18": "YLPdBU7PTdyH36A1ZqfD7Q5bp98hWLfSUdSDHcSMAbbKCSW29NSiL2T8sSf58kQXyJ5Y61d8dvda4SNpvvFL197",
  "key19": "fy8a9TrBq9s9NGt1jqhdyEgY7L4R1y6yCc6NdZVGMkkxN6qymJ4JzWXCPuVA5XxZWAPa24SZ6uz4MT6gG9zWAMX",
  "key20": "3VU7qYvMJTNazPyWmr9qqbH2xUvYKhG6zbnH74hU5ejqcbgDmZwASmxZnLEFfvYbnb8mFoXNKhbqkSt59cCKvzTH",
  "key21": "53PFh47bxHeyxs73gPngq2iUGEnETFeGv5Bp3mrGz3Rk5DQqFNqwvjtbeFyXjbxhnwXF7Mp99nwJPSk6nAsVUHAW",
  "key22": "4pCC1yQAW5XkF1DdySU96ePqbHowMzxaGKoNnoRxcNxQEujfjtMhvqwbGoZNQi3U18rTeJUNNesPNtnMXZZHMHTP",
  "key23": "3jPw5oyDR8wPpkqzcMjmgFTxYmKg5X9aChCLpF6ocF3CJk58EkmBdw1SsKtwwpXgMvk7SGz1JS7HchAXB7Wu7SXF",
  "key24": "51xTGA2zt11vwekTBF8tikH1pqb56oC9G3jSEKTreq59av1qWkm6kGLTmbGLaEnAxsRXMFFvFeogBNKjyYhNpZ3V",
  "key25": "57eK5DAfhuXseoc1yaRJnhSpQCRALoCBTw2pUCySXBFwnSD6MesVZToycaLi8NMeSAAD8HTj55h7ycqbTpvcvaTt",
  "key26": "d3gwfsF8N5F2DNwUnx5dpdXcrg8oG8B5j32Qe4ufRBBaESRbdVrDbT8iSbMAXTHTaCWPTR4vyGcRWrGr53tVTKY"
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
