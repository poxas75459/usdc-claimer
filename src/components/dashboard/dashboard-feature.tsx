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
    "5boPDM8U6fRZctAtLZVBD1FsXQeXen4jMiYcpiE1dgSvCCDLKnjUWSPctA9Hf78EwYiwtChQ4eTShajqPDD9bmuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23oJ6om3fgXjvZv9DtomvXYJFwE21wvQJeGyyDjmJXnik71yD6fzy8pRi8AQTuuPmXwJ6oSefZv99VnewciQq1J9",
  "key1": "4VVfe6ygv7dH58MiyndVCMErXXuWg7qsohHopPbBBAs57ZMap4zRtQXM65gzNw5NVhAN4c8wtqXymqkvNLKTqUdW",
  "key2": "qax8BeAS7Hi7ry4Z1ZiUeB7HU3ifUqdHVdBqSABT2j6BHCojHBTGe9uTZtDvBArgjWc99KzP3LtUhjXwC2GcsM3",
  "key3": "5WBKkBTWsUg5NNgNe78X9epvY13imucdpkXwvemo7Sxd2BPnZecirEkaRaMznut4xnw8qfdfp2yrurtxvuWepeZS",
  "key4": "4kEDVDDw7vah7KSxrH23gm37dMVD911CV84pGmVTeqer6GqcaqKKr3U2tsW1PEAGh5nj1RNro1JXpBK7mFs7o4vd",
  "key5": "4UtXSs7QUpwoAKzwdcz3UWMwT3u5KKLP4dHAZkd76rQYuZXQ5W71Q5FbG2v8CzVkps2j6o2wYGYfJjwNb2sK9Djp",
  "key6": "uoAYQBasy2PAz4bgtTNZN8gZ1Bwz6TYKKWtuy2aHhnsCZLHzdV29uWoggVRHrtfRHgYcgPJcrxZnoYo4PDhpAcz",
  "key7": "2ucXpF2y4jVSppWT5dGc7sBxNAV9gyVEzD9HhwL5d9ryfVgZV9rJ9pdiEC4peF3bYGygn9amWhR4GGNAaXQDN37e",
  "key8": "2RNu65KEHUSdNpSzzBybKEuoQ6e6VGxa1G7B931pAvQnvDQXLaUeF5e9an9uKAzjb6QwzfmMsANntxEi4u1cRBKw",
  "key9": "33cam9aj1pFrnFzNrmwGeevjBJVrsV8B3oQw1AnYGZiveM7FFaSXjkt2zZxBWJcDivYS7CaRKeZrziwv64QxkT2k",
  "key10": "4omB4XKEgzMChsFwDKdBLycWLeGHRYQSHK8LYPAqea2BjedcJ4ZfvNw7gJR33Qrhwr8YcE3471rXdk9R4ETepUue",
  "key11": "2W6KtmEYWMY78gnYxy9rhwHheyeFfS7zyJNKcYWVMmJ1yNi9VzYyG8VRZFnN6FsEb4YPyxr2tNkxN56wDKG6SSVL",
  "key12": "3t61YWfLMSdZVTmpg5HKaADCxs4Vhpd6hdsxJEo3qYKFaGAxRC6zaAhc4hUoz5JDkBfnCJeSeu6RaTSyhRS4cmum",
  "key13": "dXb4j977fGCCzsf9G5j3D9xmgpcFecyyXYbwQTC3q9TsYoB3igLQnnNt7b2rRGun41S5mHbhjrcNWAoXKHnfQQL",
  "key14": "5VbT5wrAA78Cob3xfgKFUkynr4xmG3nMAz5oKjgFDyvcT3fmG6C25CnTvJbZhg4q2LFyNDjTM8nm2XZidhUfuuhZ",
  "key15": "3KaiZpQCEMspcHf2ZFzNTMwJtYALgtGSSzTb5mh496cpKtaiesbcCA5esaaDJ99f3SowF4u9PeKqc4DfjznuVzAN",
  "key16": "3ewCefB7Xpw2TVC3F5qDd6cpRde78LzDFJoSHezu14BHE3c2QZAomZivvgBgPsjDQUnZec8mNs75znG9ZxUF91se",
  "key17": "4ApXaZj7AZYfJHQKVdwsqa9Uh4yf5oJk78f8HKqPFQSPLWkYj7SJE9gNxUEAqY1BRFByGN7rqCBNUJNzqEZh2iDa",
  "key18": "2E3582S1bzEYiFrM59DwHvWRoayqfJikGtcET7GU6cDG43U1HbUv7pbuW59nHyfrzAPTAZjoLfNViquKoHBKP3ig",
  "key19": "5Fu2s9WwkXg94XyhL1R7uwfxsrvKdzpiRFxbQDnN4LENBZJtTeJndH3bDsgFgnt1NaxHvp5MQWLpwESWNYD66oxP",
  "key20": "67MRYzKLVqQPdzrs5usuWyASrcBAKxwEPTvfLp5sesiEbgCSUoMnP8J4LcB3w1vzYgiCPRXTMNCa76k9v1jpWv9Z",
  "key21": "3sGsgAJXp5WYy2uaumdnduq9SnvaBq22kRQn5q5SHgDTAGSfGbAk2uPYJYwWGKZurbcVnu8xQTV2gaCPqhAcDR1y",
  "key22": "2GKSJLeSnjZxvR1S9F7woWdpjmZE7Y7u2oVyUmhUosHdFcBz9jf1AhtpaYMbdeeSH9wZHM1jg75sb6vAd4KsRaFY",
  "key23": "4ZKboyhJFcsXabpHULKPwMjH7NDuE2CzYroYj3SWjTcT7JyuhVH5sue9czSwSrtiQtZrMc87jRi1t65tBHFKTrSo",
  "key24": "SZJXCo36xhEoLzWrp4RHnpWvVppUGWH8xuShWkmQsAtsaF2Na6f8BxqdGMrxiZ7vZ7sFkRYPqUCpPzL3P2qV1tu",
  "key25": "5CmBiyn2Y8iXzytBec2CgZ4mD7SPkC4hogWfQd5F2m8a1FSGRNTdpaGdDjkYt363gC9hyeCzmPZni8r1Lm9X8d9x",
  "key26": "4fHo9kb9JhkBLczZHqXQqbhzX7WdHd39pLrERU2quhvweqGS42Sc6nv9b4cQManfSYUwcWCrjv7ttBrPQ3WVmNRr",
  "key27": "4qLkx1cs26Q3YKtt9ySypzo5UR7Tvg8N8G6FCZs15CerxPsQEFVJiCMLn9GyPiWStf4Px7m2aMkf4MhCVgdKgWDo",
  "key28": "5qwyKH9ApmTsbKcbWKXxmwLmFHJe3dH5XQi3LoDUR3DwQ6W1dpdtscnGmwL7fNYBXB5EK75cpHDMhKVpXL8BGuUY",
  "key29": "gZ6oN7wpZtbu7pVSJ86SpgFFQJbJEYUTJT5hAMeWvNT5Jp9X4v6dQLRGo4FXvot3QXVrZ6XCdzxbhsynYetVhtT",
  "key30": "2BDDQYgzMh53kFuQGb85sdWKWBF16steaFV8zw3MrNgr9Xe5o1Bdxiqaj6SNvRXhPfasmwwCbYxgfTrbjZA6BZBY",
  "key31": "5HHs9dn3WNrr2Rf6JkXYEGyJZinDFRAs6dw8PgXuW1S2YVsFfGZPB3aG3aMF9AhvVZgqG3dkjXsB6sCtbLHDRiyE",
  "key32": "5PpQCLMKkvspZiCyEehJiD8wchwGCFyVTF4inty2pbvU9ny6p2de12mhyvTG2GUnYCxjYNtq5s3cLBHTbMVGupRP",
  "key33": "48wauz3vcTADhjiDnYy45BfnsqMdexTbWDw94BK6RiHJri3y6X6C6s9p9xgw4SfhkaAXarXWhVweM2GZikgMzEnw",
  "key34": "3DHUaM9tprPaTuYtmMBk5BDfwN3vC4btSmEuLfibJ464gTaTwqXBc6DsYW2QrwaHpSQn4w4UaJPxCT92e6i8TAVm",
  "key35": "qUfAeZJZvaeXV9vLbQ8e1dvtxtmyfcixGhEhAW54HGcYWbBunjEtmd6SxwjPjns6BN7g9mTxy6AQFAdMKcf7TaG",
  "key36": "2Nrwqumzud1FAX5dBehDcxHtwaQcE4PJc1YMBPuc2jm9pF3V8HbvPTWSjSFFcdBF8qsCLv1wjAZ2HYjX8RLNGsBv",
  "key37": "4c4rXzrvf2CgVmqyHRaN86H3Nxwzh3VmhhCkwTZJrbWjdAkjMsyXyhKpG1JPzucrL16VhhzrK8TpxQoAsvcnaKL",
  "key38": "29wjbrqhw6gihJFyyvmPwWrbsvH97nJBre3WZGGbpN9WQvcFRNkjTCfxdRnC3ZZEUkxeX3VxJk55YsMCEWpjJ2A9",
  "key39": "4ofNmPXHBq5jWXb3rzmxnUa4Svo3ZtcmX3k8d6yYAZoXYPMj8teWeTiFu7gbx1Zf9RoDhedcCQUCc8Z8314kRrcf"
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
