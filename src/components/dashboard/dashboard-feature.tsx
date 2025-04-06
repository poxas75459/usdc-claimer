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
    "pdGodJsTFFMVoD11KFo4tZsjtL1shSH628LebJTcg7K6ouS18KRL2FG99h7UiCnybrFZPJNG14VWvPXsJrRoZga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UzSo26zVeNgtBL4kDjy4igveo2ENohKkki1bHrVEWKJhc5mMw4gze5ZE1A5Kp8R6r4EYDzcVCJQ26t3z5iGRGi6",
  "key1": "3w58m36bXQiaA41cPUjRxSxWzohAjvaKcmg3T8umsEfSETno5KcuL14AWWjdbg9WcMJmArHiaSh6uHkT4pdpYP19",
  "key2": "4fiNFeaRE7nMwawNecMkrhE2rEZGCCpH681b44xDbpofZJ7EcAHuGZFGG8t2rQZ7cp6XF7Px6jcnz6uBPh6FpdaK",
  "key3": "4Etw7pJDMFsqL8idg3eiivEn2ra42JeL55WWXNaeQr5zVpCvowXZPrsHgRsStEUYdgMcJysQuDZBJC58FTLEWdpy",
  "key4": "2Entp2JGUeaMKrUKcMcBfS7sawLnWFf2dTVD66xxqMoiYhiWBVV9ibwuYgSg6grNMt6DejAHUj9nbh28wKzxCL3o",
  "key5": "nwc6Uuk3XG8LVEzo4bgztqgPEuaLCZVQwsQkzVsvKH1d63aLDBncUDRuAA65nq6h9m95WSF7EfshCRnuAn9AnRn",
  "key6": "PSoQCstJw8KbdasKfk8BTvdzod1r8RiX3aik7T9Wn5Disdm6KuTEru8MM4xvdPiR1o6b8ExmcA1rVN7oxReArvW",
  "key7": "4ivBCtgaG22fQyzjZE7qPSe1G498z9PqQe1Trre4MjNjsaSSvoDAUT77KRMQupVyy5LpukcjYXF3LkbWtURjxXBL",
  "key8": "379r7bnzH2CKdBitMX5aBm1SLu2aV11CHiYJ8Uw5NAjDadBv4e8UCMvWvP1tMQo2xJAGdD71UhX36pYsu7iUvhCJ",
  "key9": "3AbkoFKNQU5HQQj6naTXjFoNCAvuLEbDmK6WzYPbKXtBoPgwzEFjyGNryEME2VuVQHsoT42BozGofumVT9MVGx3k",
  "key10": "41a6QuNFqypeLT3f6P6RFCwg7PuxqMHq36XV1C3e1HfkN87o8KiKuXw3QWJrpmXZ9bWeMzoCLvW9Sby5m6gPJWUi",
  "key11": "3NqrsnuRRuBpSCoqc1qfEgdJ7k7oGTJVEFwsnUWN1SbiuZxuHQX8CxWYxaXYwVd4ud4DZiWwLvN4DmnwPYyYUipa",
  "key12": "3uSttQqHYeyswyTLTEhPa9NwqgRz9Nje66FLnqz6AM63kqn53adZN4osjb7z9A9Zb5bPYXaLV446hjdYzJ7bqqhv",
  "key13": "2Ud9CZ9roeoAoEYbuFGg5WDTc9z5jQytCFEaafC7z2wr9fgqzTkbNuux73NfiD35DPXDHbKH7cDDfrfdq47W2CtJ",
  "key14": "4fE3eGyTC7jZnP6txoEPjKzf43Vqs7azFT2pdHiAoFivKXMwtMsrhrvT4kDqwAtujUFKFtFbbmvrxbdayLRDfhjE",
  "key15": "Q9EuxejiCLm8m9Vo4NAPPUFtqG97dKPZPU76Ux42eb69EgbHKHNon6kQqGze8ScSoA3i5tpfUVL9mbYK2BBjAmU",
  "key16": "t3QMGp78XzRzWtJSuQA4eAwLJ6Tzxbhd6EqRQbkXt6c5zsY7BQyhoRLfJ2oQ4tgtAocUaKL4ZA84vkGN8YJYE8m",
  "key17": "WFwG74WFCrUDYkt6GwXJLReeuUg95reKLABKWyNTuyCKk3LuxfY6rraUEdtbhQvuwLR6fF9YFXKAbmA4BRVKHsK",
  "key18": "3EniTrM6PxgAgPNQCwY5aKktmmXNHsHtC6iiDPHWbi2rVZMbvAmA5QX951YeLic4UDAPjTAv54QZwejwmZjcV4XY",
  "key19": "Hmrj5uPMxvhVjCt6MXgTDZwQJu1YouufgfY5uL1dMVNnkZLzymSifzLzL29GiphXgMZqWUJhrYoyuJBMzAVMJaN",
  "key20": "irDTW8Tg5Ld8uRWWjDEUW7Lm2rjv76F2zjpfQZbRPEzYN3osZBFYjYaDh5kLzPgrAAm5iyZKGw1Dv9Jf5Yuk1a5",
  "key21": "3zrV91hHM7YVnnPhD6yWkqMwwLvMagQDnBHySCFdsNk7Sa7rgZB1YZWuSdA7FnYYeEZkYYhBipxxPqC22ettySF9",
  "key22": "5PbgPzd5vGU1GfbNp8ubGJrg8cdCSbSwZcXKDSCMQ84TRNqD5Xa18N58gyE7WhXETPTdgha7hV7X6bSrq2muSdcu",
  "key23": "4wcjQjS7rRm38mW9j6veRPAhJjEb2UvaWFsvMHmPJtJGn8jZtH5SqmxoNbfoHCkDhCZFeAUqkjrgA4tYE9r3BSJ1",
  "key24": "5UpkPBeX9KiqT5ux7wYvEAMqzEjfgtRVBQFRgb3AebKWe8PHzD3QV7yuSQaqB6PLoBPQZeKhHoTckuNE8gf5aWtz",
  "key25": "3rYjUWFZtmWZqUtvk3hN5aSv87rQAWqGTQfYq58Cc7p2uMfGaSqiYQwWV5HBzG1RXsYZbW4T78QAhq1SVAn34mHf",
  "key26": "UmFANY9Cgx2YhmT5nn4Jfo66WmqfiUwiA1PNey5DSkbyNqbLyAyFTnNzTAKNT1XgCW4ntCJtgVfkxRoqreLigS8",
  "key27": "4cRqkWG23montQMhQ2q2bzouTJ4tnJBCrV4pgcovazLtkRzR95VXL7XDwHm5hNosAnjsSwHp8Mfoea5ZJCv9Zddf",
  "key28": "2Scmcg2cbhXaVGNvHbcY8qEauTbQuNvysSh7PiMfiRqZ6ujpTvSX2ZPQDxsoxb55hwzfPuxmCzASs7ZU1JRXm3d4",
  "key29": "67bGPHpJRxoyBCDfLy9kRrHBRBpeBReBTw7GcBj2exvokHAPbf8d3x2b7hnDhAneXjBxNwe2RCxYqubW5QSPeGzM",
  "key30": "4UPYWvLQDjKd8DhzwycXHcVuNBEckmKozviLaM4H9zii6SnNiyGy6SSzbB3wWGenpHky7evPJRmn3UUQbprE9nzc",
  "key31": "bPRAxVbSrVEeFhYEyyngkYzFZmx848iioChdFGSfBfA5bmrGi8jDmULSHMmq9WfsH691K9GerzCdSycrbaqeKEh",
  "key32": "4UrKkvMkLntiT6ypeEdjrqDMrbpJjvrPeWaCxXfHFvvUuSsnFsTBNRqgGiKhF2TDybdotEraVU7nJibMRV1RQHQ4",
  "key33": "31jXoXJMVRZFSyrG2JYyujvpPJfADkcw4yE4T5oTjBs7xFqzMgVMv3WwPV1ANmg6i3WdpoyTLxzVr9R9ZXUm92Q7",
  "key34": "2UY6sTqomLSFDGCeNTRVcpzrUyx2u9pyY5mCZfYr9UbRfhA3pZKRk11LJ9SFD759akPNGD686QjHsHH1Pigovxgy",
  "key35": "33kirocwh4zsiPJ3FCWFGvwFdfqvRKY2zjuUwsxBZtcMWvUEauNUDTuWdMHUZt3DiXAKn1RydhmAvnE9acXFM6sw",
  "key36": "2xnBo5aT9Lg2K7p4Wh7q7frpLiyDDnCXvRYqRuz6eB6ZyDVGHoeKi7TxSTfLW4QHMmKyHXziqANpDr3UMJG7Gqka",
  "key37": "21ovAoECFrLyHMNdqNCQKSLgT9BLJvt1pYjepZQ5ueYrAD2z3eMNGxCmbAHdMtP9GkzaeDEcMXYAQT71VWJYoomi",
  "key38": "5VREWKStQMRZj5H7g9RkUbmQv5Dq82pJUCuDB7hit4BTAWcKjCwVKbcKXRm3nEfuky3vNyPVBFH9HWGz8p33zGrT",
  "key39": "4Xk5qx1RvGeTVETNHEnkJgv3Ja2NHwB6sZYJJspeNvn5CMJrbYahyiidxMk6ZWgPXqKNKMGyj9Mrr2w1edfxKcJD",
  "key40": "Vz77RNduhkZiCdjjqmUgdEfRsvo6U22oNtuUvuuecfJ1Ey2BTQyBoqZ59xfHUGGR2RcqpJubtpR81WPyQ2FBkjy",
  "key41": "e3EsFyZ7ydwNTASX6WMUp17Qat7dTwvWwpz2JaD1b7YLXHNL6WABr4vRssh8z4iqDrFPdSnqJiTsvqiLayWe8SM",
  "key42": "2UZDK7CX9yYTCxfg4v7WyN559JqNZk1GhhVBJ5pF36tSwuN87SGLgw8u3hDAvKF9AVnQuC794eq5s25oMBnp7vm1",
  "key43": "2YFnd16E8AXotsBaHwBxW8BwC3auaibN2awNqQDFyUJCYBdsfFybjPpvaMg4WWyeJSkq4nMjQLF7R5czC32hWLHe",
  "key44": "4AXEDsutrUCCBBcv44m2aXS1yEcZcVmPwmy6eZ6MJnY4MRdSPsPvEXVoAezt5YVcDzidz6RYtBzafCJFPpB4nsSX",
  "key45": "3mwsEjihDZT1PNfTZjFYZfK85YJLzGdnJyELwiyiP1FzbtqwcJMvS6h73fdea1JGDsBhRWsjdXCkFTjr8GqFPyH3",
  "key46": "65SHfjuMBYehcJ8QC9kPYvH44wac2D31u9KTQRTr7JggXMnGX52sQ8Lch3bAZaMLDiSMdgDagDZagfWpDsXzrY8W",
  "key47": "49J4m3533HafU7C7gLT35zFRXY6Jcv2SJe8b99DhFqhBGtS3gNqeNXCxuL9DYwYiofUptfUAr4pLWhLeU5EoiiUZ"
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
