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
    "22uqTSyz3soNWBfjyuKSE1E36fWa5HZdQYyCAAi6Loep5zi38GPKbb94DcwhWPStR4qY4eoxqimU2je2KfsNfcsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RfaLcdMF2UTpAdDjVAUxKB2TCFNJTQ32Kixn8iHiioXUSMECrKJC64FVaXaJKmpQXQ6ZS9yvSFadCsFLP6DE7dN",
  "key1": "5pzdiu9v8XpFbxLWY6gggPDQ6kDVybjirEFCw5RiRccKg9Y9p4MUk6wgh6AgTNuPKYJ874FC49ynBYSP5B2GhYbS",
  "key2": "N7G8ypnJDsUmbLChJ2SaEmyHUGz36TxAxHuMyjCpuuampWiTbYB2Chx19gs2Cd9fiNGmvPQ2LQu1sPmU9XGCChv",
  "key3": "3on9oeGVp9MQjVtMAp5voLKCpiYWUC7fYQNrtK6iMFkKWxYfgdssxGFaetevQ4ouuQnQH9dPQreegs9DHjLCHWKm",
  "key4": "Uzvg7dubxcxSm85ia1aCqVBzEQ1aM3yi5bUPnFFsHeLU4HdcWKc5v4shZMwunTwKJTmTmES8QEat81AoNmSTr9G",
  "key5": "KrhSFS7DfS1gZ13vBcDoxdHrMpnhDi6VXeE2fujNc8FYEGgsGpmmp5xhGCkF2aCw83oXtiaDRgbtFVtuhgYgfJT",
  "key6": "3XYwfydH37HyzLeQPV58YpobV417vU2WHHccvUHXti7An8joY3RXDn2Q5svpczq6AQVUV3Ai1GqvBus6H8VxnB7G",
  "key7": "3A5EeDV3FnFJCL8xrKhUVWLfQYYHp1JjtmSWGFjtu2spjrG4QV5CB2pj9oraeixepZi82Rbx6cZUjiKWrTK3fmDj",
  "key8": "2dbxiWyTGFukGpXz4deNbW4DsTcrww5D5CNtgUFPBhcnx4kMdk8Yv49hUtBvf4ptYSLguLYUzTumH4d5BMVYNW7V",
  "key9": "XyQLSE12sgdBSXcWJH5F55QHAmuLdKFwpb6MnEYHBDmBEYxh27bmjBTdFdQZWnJKuTAnAYk4bdFpAVfMCvk5DMA",
  "key10": "W4YsjgvTPANwniJyv63iNv5NqmxUBr32jcExpdGLWbqfGArCbzLPDvMSCXUEhY1isJNbK34yfBzjaCEZt9xydmR",
  "key11": "Y1bvgYUnvqYvmxnY6GG1PwQVfVZFu4kbQ8hk7NteyMU2GmJYLGRwNVdU2CFqYLwN29eexet52LRTc3oAEBHuk2Q",
  "key12": "2fJH893jdEfmoWg8KhCydsLydCD22TSxzeRENKQucemHxWDKSyZDW6ckVbnbAgAUBAXiLiTFKxTNR6xJmTMaJ64g",
  "key13": "22XSJEmnDaCnKWibcaD6nUoVdbePx8PUYgSRrKX1uavyiaQYordsJGdq98cuvFuA2UQdnVjWhTNdA1xfburgzUBF",
  "key14": "3NVCnPqfJuo6MLt9qdn3KK5r34AuoMcUw1CyfXApnsMVSdrisU2jFf7Y4srSamngoPbNkDqV9HsLDTg8RgNYynni",
  "key15": "4xLzjKCG7XAaMcuQMPvoiuAma697d3cc4GYSJvCyBnBSuZH6CnFQ5rduzCc9CWKwWUsgSoXbrj8mwvJojdxvth9B",
  "key16": "5NwXb6BaZq8Fu7gGCcHdwgSEEkVqajezHGRNyWHuYjiMN2PWnh9bNGxkZx8w1Y5ho8cBprgk1zrnxYh7TtmKePMs",
  "key17": "4xkweswjpBhkNv4HAue5nkbvqdQwvqsaQfB9qgnKJWSbv8Xrg5yKwyaBcCTF65iCLw2ywKLY1JoXbJ9oPqhvzH2A",
  "key18": "3t54c5SooCw9MmGUaymFvZZQoPSJmsPNua6CE5AeZPtYTcJNQf4UELrnZMsa1C9KTUW2JKVGaFcCNzq8knxraepL",
  "key19": "2cCDWd1S7XCJLfx6yZQ1mNrX7VKEbuXwXU5ZfT6RfRciLH4rARyeXExbvc139hFDKRZEGu9TF5er4nAKF6UqrPN6",
  "key20": "g3iUGhQuAnRQPaNgcGRgQD1u9sGahR8VE3unztu8V7WYLwRp7XNQbdFyzZcS8r6i3LZ3N6j8YpYqyBQZzD5rVZ3",
  "key21": "5o5BccmqHxpZ7PSLhj95hYF2GNSQWNHHsW64QpSeKpVNWsZefV2ZV6RCW6rzicGApz3T7GxXCArYzCHeHaQV3Uoe",
  "key22": "ZnVzBp6U9CLjrcSvAxmDTdM1BwTgsRAcPnnyuBgvPX6PzsKyzY6p2CasfXRCumduCPaDM7FGVdSNm3wtKWKmFER",
  "key23": "55eN5wTauzGvWuhp2qojhRFSB2APUKnDWtMTL6Vpi8MN43QztmjrZWneNtqGmCNB3pWKixgZz7VUhdjeJJRQCwAw",
  "key24": "2Tpg6y41MYF93UUCDH3YArt4E15YFjYyNoSD4wo3RpDpeCMTf41jc53F4U1DuoXUEmnGbRR7TtJ43CNBevB2S9gR",
  "key25": "2PV9DZANi2pfGsBsg2BSGcwePwyguQUT5CFbWXq37iQsH8FqPoTejYyePKHFjBktkBCGM6SpS9kg4b1ooLHtLifb",
  "key26": "5taaudbkr4mkKTLRyxewjbh5FmL4MKpK3NnP8bXfqoZyEKhYAvwqYjRu8ASLgbwQmJou87iWqAECBR6X9n1oJ9wf",
  "key27": "i9CPs9MeCnscH6V57SkGWHSbBCeAA52kV5hyGtAha3uVVAbNhacGkT1NRSg9EHAN4WqL2755ZUwdmoK3eTiKE3Z",
  "key28": "XquxYLsPUoFnYtAAfr8sLRcJMrTvQqRYEWG8pnpSRFWj2TYFx3h2B3jkz6eocT5jwyg5mPAqEX68Tjhbw6N3FGM",
  "key29": "5ge7UEK8h6nMzfH4XamrysAUxv62XRLttgxGhCngH6XNgVVXvMFkff3TKum4F7Bs8Jsh8vg9EwCiD12maZQsqpVc",
  "key30": "3KKjzP38iYPkisoCim2K4XJnHwsuNBYZonVeqhqfdqYN1rR4x7EPmCHzLDiRsk6JNSvPU1XHJtCoTkxT3LrSpqXm",
  "key31": "4duDd7Z3Bcm4TgQsApb52rbwKp8xHn9fcjvvDstTHQd3htccpQ71wJPUS586HxGsJBFf3mYfxmePL92UyNYNeBiw",
  "key32": "3ExVjG7WrqigQ7eWfVdxUQgGL73NqMA4xNhThpDpKHTNpXbcMPUWPNUfTKXbrb99bEPxjoDiYaHJS7sNfrS95Poc",
  "key33": "2fxRD5jmzRry5J2yhdU6GKUFDgWjfvNDkPs5xjqFEPHv8np3hTgcPGP4hB4ByJ4NN4KJ55oMadf8yVoYP2cAmCYi",
  "key34": "aTjY6FFLuemDkqf6xAf8DnGAYJ6VVXhCkcGSNCpT1axFq4yueJH2bRRTwgdE55nNhG1zKX6gs3NREw1oWPHrFYK",
  "key35": "3bm2PsNxob3ehLRZFzShyduDvykbN8Zy4awdygyRr1pXdti8zSXUDRepJ7GR4q7ay796z69sJVDGTBW69sv5RwoF",
  "key36": "2DzGyWdGycWAMonbfwakicZesGgZR1Lhqtj7JB16braZUsMUtA7oDtC8vkDoGEFmVVVw9kNhUbicJNpFXgbLmN44",
  "key37": "2YiDJviQA2baA5j5RF4mbrxRYFUdSmTL831PAm4oTKJ5MhFkBzsN4vJqJSKkReYkxMGLT2HjHfSyxogW1rSCZJcN",
  "key38": "3LbdVVnsyPeUJBe8Cw2v5bJhpAP5FvF7b7ST6VVVTo3ujc2JkQGpgpLBc7DvvpV8afhYePUWuWWHwobxktGUb975",
  "key39": "2DBUSk1JC3oekALSGU1SCcpGxtGLEp9rNVPsFwyVs3vTCJGGbmNdXZM4VDTSobrqtChDU6Ggu5FSGsYYBAg8Khf6"
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
