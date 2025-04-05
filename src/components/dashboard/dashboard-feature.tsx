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
    "4wwqzpAvaKhfFwweM1MXzTgs1eDStsP72CPBgd7obLtxZSSbfe3ZYSq6aq5sHVm9UdasKz7aEy2XE1wiQw7Zrsa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d2qMTuUujW97EgntpLZDJ4DYxdnb2XwMPPtaDJZkfnrVvTgoP2tBHFSFnBnZeyEL1fy4mRB4g7neYhNSCjUvok3",
  "key1": "4GvMS6sgmbXpmHbmfzKvkZidcdGD7ysVjQwYhchkzuoQHW5zzbTd4F97daTSD2kdU7ffRCuJv2r5QV11YXC6AoCk",
  "key2": "4jrNRXxdBMxngujco6pspgp9tdFEpMex3t3Xnoha8iFQLdjDd3xCrA4x2aWxKHhqx7Ftcn6uFiYLkSDjNSrQTQnS",
  "key3": "4hph3DeHNBRL9sG7py3tZya14nJFunzR5SHKpsSZJ2V2B2UyH3qgqKPjdudaacLgkSrD4sH5QT6PU4XvAqFf9JWZ",
  "key4": "2qNxpGRrv9bxws6Hm3vH7FFdy7RzEj1erwNpg3VnoQEtEJZ1dNNVoJ4vq5YMh2KRT12VLXAyGpKN7myYq2fuf8wY",
  "key5": "4bqa8NgLTbbRitF4vn4VDHaJETysHEnSp2nkmSQD3192tvHk697xm2oQsgFkhmD9gEPnR1h5DHhE2F4E1Es5ButQ",
  "key6": "2nYVbUg7SSNBN9ixwsxrVT95fksuu8K36q1eRS5hYbL5Ga52XQvxro74CPsVRz7hjVHy4UmNTfyMnWvbbbLXKN4N",
  "key7": "22jyFaQUzsZcXAPiKEdMKgLEuZenr43L9qZvXqQ6AsHBzsvcyVgjcq3xuFXj19LGDLGqa1XCzKuZqADsbj71Rbab",
  "key8": "4K2byAW2FT1nxPmr3wZJGNa8MTsRqun2ZSDR6rpohWeWNMsqnL9MwTNKXfPSghDTNTDrHQNro2s5m8MiKp5rSth8",
  "key9": "5XVYYXFKhAiPgXTbirhNkk9YaoANes5qfpCDH5bAfoyfLBL27myiCvum3PAEwmLTLJu9JNL6eqyURvt2o7vPQ82i",
  "key10": "DUxo9TrtwPKQ5uU6ppSrqZNPxLgnQHimhYMq2TYEYmB93eLNzfa4F7PV1GZfmfBq4ad1AcjdxvoUXmtpUrMB8qx",
  "key11": "5crz55a5jp4WxhrGZeN1Z2ke9cKui82Kq3k8icdW7jmZKqvwsqGXe5DBaPKxAT1YSyGjLW5cXtQ5Rz9J5sFMnqZ",
  "key12": "4qxWSBJov5zd9WEcGnKuF3stvJzQib4yJicg2J3TENKq3TdW5ZbCmuoWKEjDjCuHDwUHTkA2rwGBA8ei8XBAcwKv",
  "key13": "4T956pqdVefA1Ha6diuYtuJXq8nQdcBr4YoPAAtqGnVsa7DQ9M9fMw8VDRzzz7zZRzp5mHrXxZXFqkV8RM6uuRVK",
  "key14": "5BHdbUEu33RjevW8ixwQatGUbb3jGdYMQMpg6JvDigCQRzMD3HGQiFjsi4VPnFow1efVekDErN6FLUKUx1K84V29",
  "key15": "3KFv5MzDLFFUeadX3BTEEmcC4B8DD8WjygHJUBC38sBR5mfogFepbxkBQYq4oYnb31mVJYQhsrm1kASETGbmZfGN",
  "key16": "DVayomUTJm8fvDbppHYMPHSJzxq1xQMmPdm9WTN87kjstFCmhwxUbEJfgMxotqJJVHxpxteystm6EuWQQ4PoqF2",
  "key17": "3UhgiKBWvPowH1ffzMJeNarqx5VNbNHo5rSqAtwfVZ3y1aD9KR8y7MD7sKXkW4UPFvHkmBJfjEdJ6n7gZesJHC3V",
  "key18": "5qSY6xFrncctRtytsdDN3RyrYasX74i52jTsDT1ZEFmMuUzLVRokUQX8GFwT94gAhgSaedMZvADUyqSFHs2uxhVo",
  "key19": "5pJPdRFa5VA3ixixGecxbZj6Apz4rY7kKbQsLuMygSELaHnJ8A6jb15mediffb6KvKCNR3rq2xYHhpBabNW5Scdn",
  "key20": "4NAfHgnF5JZUp9DEWj4YLdeHL9L24UozUbn7gnAnWiHzNxrt4PJLVQmPBr92VKwm2VL8w873BkrcQTdytjRkoymw",
  "key21": "2sw916S9ynEEn9r2EZFNrDWgKpSdoECW1SBmTYmsA1snTwNLPKokGjpVgbq4TuBECj4E9sPXoMKs5VVRVey4rTkY",
  "key22": "5RA4Xga7s6pnB2dDVTjY3mMBrKJqmPn61ZfjqtfCQ1TShZ7DMAHwbuXXyr4HnxjpoqEJcmSu7g65hxuMNiSMxZgf",
  "key23": "2ZwvuYMkSEpz5K2dtXqmdCUfKQRTimEbyXx3XYBHzxmvgfVb9MyWYi77D7tyYbrJLoKvne2UNDVi4cDAvsrmCPTB",
  "key24": "2doUsQteVJdiMdmGtpGmbcNENBx3yuifnq4yWKh2gF6bfHsAevkunqfDpVghPW3oCECmv7C81GRWqAnaxuxajMKZ",
  "key25": "2erWpyb4JrdM6b9qr2yvFCM63Bm1cSifjnPwtz4xDgwoUJ8ovjdymHDp5tSY6j93iVhfay416Jsddic1irTF13pK",
  "key26": "2ePh6d6zVMfhgzF1rjMBX6EfACHwwBvhQiKXENv5RhgLNYVByE4sj9xJ5qMnfkvrzpVAhGR3vLEmnRbrkGoeLgt8",
  "key27": "3EqwbkEcA9nsrswt9oupF3kLxXFWbWx3c1pbv1pLyb3bLoWHx1XUtNxPoohCxxkML8gdaWxCmAatHsyM6zouC5zh",
  "key28": "55LvjUcMWzvwpuk2gQu5xUK5QdaSfQjDLrTQ2sexAb9jZcswZVsDQ3xdFgbrky2t6gbntGEHaCgTiZLanSiStrLU",
  "key29": "3rwPuPmTteBVSgcWAsghQBHKHELyaWR7e7BRbkszXHDh6ML6A7YhtU6XqUdQCnmUWJwBq3ZhapbbUNNWv2FFxwLt",
  "key30": "25WgeGKTGTHVqvHz44QiBH19tSWUksaJcxkUj41aFFvr6e8cjHEHYMPL2dMbHgsnepR8FPXhnaGq7nKwgi1GHcMj",
  "key31": "2bZzt36ghT7x3MP5xE6LAwQd15nz8bX4MfLmMHToYDhPGz8cWpG44WvmM9vPSNfrt6jhSZx8uw8AbSgXexqKLb4Y",
  "key32": "5buwszaAQHnma6eqXMXnxovMSP7GmSPuxsfjaAB8nZSjEmv5BSHuCJuaZhGC7hWX9xeSRA5CBBDVB6hcdUFQdyBj",
  "key33": "48cEiNrf8uNDbx3MjNXaUZ53j6szetjRkVGbaUZoEvmi7AG7Ldk5z9qAVeHNzvh1s1XRqnNVrQtBeMHftTuRss6n"
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
