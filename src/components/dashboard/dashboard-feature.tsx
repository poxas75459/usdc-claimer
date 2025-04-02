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
    "2S1J3SUBT6ggB92652ctEAuEEZPbv9AACahZpX6nFCL6DBCAnULQqCT8w4FNTSahDRhRG6yr11c57PwjXMbA4MEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mg7ieg8Z7R1WdZb8rkq6uvtNry5tMH2cHoRwNZtYsusMShtEvmish4PKGpPzcepYEmKxFuwc7PWqiemDcDGu2Vp",
  "key1": "4ZPzDu9no6wz5q5mYvFFZuRWni5x35AT8264rvcg97wYMctckix8nz2S8b5ajk3Ffm1FWkoUbHoRAbkxMd2n2X59",
  "key2": "5H426GWYgX6rr4uNq2eED5NhQ2aaRavqdC6xp7Pg2LqwnZb63aBH1XULtDzz4P4T2rB51MC5dpsb3KtWHbqYPtzm",
  "key3": "5eQrfYMKPmok8n8dDqerUFaDiKqGzkjFkbYUezwdFdSnKZCCvHUDtyAHMEWcUgT3qUUN8k28zXqsRLPdNDyesXeT",
  "key4": "2cfW1uYa3sjC1AW8tTBS5eLur1YKhMJGC9F9bGUqJnUD7zCtXkEXuuMMQtxW5PxsSVxzrHoUwpz8SAJsmRqzccsW",
  "key5": "D7aaCnjoQUGr2gi8dRBWgw8gfJ7xRBccNbUNHGKWEdhE4xARxeySQLMJm7rN9rrWo9HUD6p2mAuJdxjaGLyTvJT",
  "key6": "5qCrjbsbq4cMGHAkt3xjTchehRQ7FRep52pgDD3MWCkBFf3uW5oftNu8ijSWoZ16ePdTu5v8WiPXz1UVqT2rSQWb",
  "key7": "3ipMf4kY3471aCWzx4GGVyVwi3Nv5WispBKC5QiwGqoo1cHWmaWdb6Hqa5WLiS2kHTVe756jNZmLXD8nU7oyQ3Zd",
  "key8": "NMDjfsDsgYMqdFxB6skZhKkQeZXcqgsVKTj57YJLY4NVg9HKc3j7Ld2gGMGmxY8bkQWk5q7YSR2j1xL21RAbiWh",
  "key9": "3pDMfKDn144oZy4tUq4pHDVGYCQ94CEgV7vYN3uxt2gJxAK8r2jqUDYKn7EcTnzN2bS7o611dUvfmoybxP91NJT",
  "key10": "ZMujVRhs6ophNbKu8Lrctqe79GGcRJ3f1qgpktnnYkbwfcYfvnAXU7BiPQ8PotS9JNp1ttFgyuXUfCsvomKPszt",
  "key11": "3rCMz9cr5HFYWsR9XsvChwQo1NicNxskSo25rCESRGs5i1EQGBMdmrGa6nyPaVP3nfiMD5DDSfmd8XwQ3vqETkCP",
  "key12": "4ia9Fqbtz2aEEeQHi3E4qvKntaJfjLa6EpWtpVs2dEvjyx9nEH3HQ1HK6G4jGTbaF32vHKwGGrzkXkzdiqMZ4qF5",
  "key13": "41eGnauCW9HXdPqMjZ9rKSt6BRZou8uTBV8mHnpeXeB7aQC1SjFQWjjmbPHzARXYAFN2VmKynEY2shDq2EmDiWat",
  "key14": "hUSxjgDFLjXs6a22W8CbGGP5nh8oHet9h1SeW6LFJjyv4yRGfshMER5h4itaXMp8nFUp5sfq8pDDvo2bKhFmAtC",
  "key15": "2ZsL8WrtfWe3Gg3n63C7L6nWjnXaLn54jbf9kjqWnH5uNiKDunwPUbCj5EXPojoS5rkhTVgrhui6Q5Yt8gxDs9x6",
  "key16": "t2CXx8y6G5n5gVKhSPRgV64mEyVpW9ReiyZW1qhz5GdyxkWDSUQ1zxw26EPkYE63r1PE687QJY2eMVU8R93PBPd",
  "key17": "2eWAH5DmdUHgk3MBbph6U4PqkqYbimSxbet4FWHLrHWuNagVoH2uK92FfphdA4FNmM94nFQBys6ELd3Du4E6DXC1",
  "key18": "5cP3W7mXCTyAR7ivUc1zuknj6A1RzNik71yop5x6B4bkgZeBNybyCzWDvgJdkkmFzKECV2mG3CiWrgsfJ6kwHrvR",
  "key19": "4R2dVeqRWGekweeXdeM5XErCEvcravdGGRBbc937C8XtDLstgU8YPAvErw1k7x7oyRUPdG8D2PZ8wZLqo2idfqro",
  "key20": "5ezwmUHAEfV5apfZBxZShKP3F5Rg9bWASr7GszPFZne984JP13pybYmVHWtXVaRoiPm4v3gm5rhugFdbf3DGS1sx",
  "key21": "5zUGZQWrPPqa5oGdR9wv7ykzWu3hrhMiiP12pCxP751bTbEBZeNR62poww5hJ3sCnJ5Jkd5hqMKHDTJ1mYhMa22V",
  "key22": "K9MzTAyFPvSSVBKkuZeAmqG6vmCGeC82R7cMK1Ct25njGsdkoPxbm9HL4pXukxzbtDVDapKphUaGaBhmbVq96ta",
  "key23": "5qjubFaH6WksBzRmJUufLbYgT3mCHebPJPzDtZEUKsX4QWNn7T9Ecv9S4WH7aV5QxZt6rGifM3h6nrHerKWrdVF6",
  "key24": "3bYAeBZuaczxJ8okc76qfJoWuYukT1t3Q4CdFgTHuke7yRnEcNB5iVL16JWxdXf7YkKjqgChRYwTw9z3DGUBmzuB",
  "key25": "25QxSAayGC8JK5E8MnN522pYUhBfLLEbiX2PyvYGQuuYFx7CYG4mw9wozDUuo8qUjjZVdxsanxoYFJ7FuaZcQ6Ep",
  "key26": "2bNHMyPfA9D1z5zab3dQM193BxA3fX1kSH7vQpSVr7ESdS1x7qiR3GeWQMietGSHhu7v5HpdYpEb1tMRDah9NpqC",
  "key27": "3JoJHNavqYqxhZTUvSHRhQQLxYmXRbekJ1DZ5bskeLWeDzV4jWQwgFQLZ3f1Ngo1m9vnuEhp1i1i3FefFChxQJtX",
  "key28": "P48nH2QMRpMU6ymeDV8kih5pUr8MGbEn5ez7XFeysNC9iFQsEezQwP3FvzdRT2xjoT3zKWFsGZhnBZurwrEZNcm",
  "key29": "gfmtFBQG4p32dmKe9cZmKKxFSLm5Zrxvf5mqFur6AaV8WUN2yNkTAzyic6wa9tp4PmPvbYUydj5VyXcNQkZH3w8",
  "key30": "CZP5K88VnrdVwWqELXDEmjebSUnJB1B6dEBco35i3stHQujx9hBTvCJ21YW8Nu5akEi2nsB8vYgW2xvDfHnRstP",
  "key31": "3AGNKqjULRt8NjxM2sedkcfMFu13CfrzTxvWmnwUqBRtZ5gX86Q5Hsb8fk66MKbBeF7GV3wGEaz995HnpV9Mvp4n",
  "key32": "5aWsHNJ8SZpiW7w2gGqKGYDzeGnGXzL7THd8zQmm9oN7662aKW6CpQugRY4oE8PJKR33m3tavg9f4s53LuAPGSvz",
  "key33": "nFGNxXSDN17ZtXhtvXAPM5VyHoMqMzVK4UxVqxS1bzfH39K6Q6aRrLstCcB8TWkDJ6c91bWQgS9H3j26dKQqtp8",
  "key34": "rphBrFK3csK99TvpSHANRAaCM3dLmFTP4GQRDRkch9tj4PXQFXympHdwtknF34pubstkVNhPYkJjHuAVMt5pUse",
  "key35": "3ywcB9SgdLY3YABrAXMi86uhXrcFqS2jddiGuPQtxv3KGdqRw41vGy9ybsJjfepEjoiXL3xrnb4eTXkam2Sj9StD",
  "key36": "uro6uYhMLhowwG1PhN55wKCgHvF44XuhmPPqid6Ysj33BVsFp6pak7QyAKg3Po7Z1FNpe4GTbnMSM5NHEfuhTUZ",
  "key37": "2LYpL2uWZNLyrh5v5RjjLWcrWYmaLGj6Wcgy4vGeGnzu5F4HF36zcAFLZRDJ6uvhVxTH6YzgRwAuP8P3qEwi1ULz",
  "key38": "5nBCfbRCzA1SHUSh2fv7eg3s1jw8pNmrmVKW5WmU7vjRbERUt1VTn5wnCfathFMeEj494tGNzbUraJhzpkC7KQXN",
  "key39": "27Xvjgr4jjymaFh75KQ3Vj2XUjPKKNzPL5DsTDBgV44R8KAJfTSYcvBKu97SigeyTdy4X2yT2WoAMDLUYxRtHPAH"
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
