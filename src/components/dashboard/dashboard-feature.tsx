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
    "5PN3kdxujppaomRuFQkhxfine35JbN1gD6zrEo3WBeDbMRPFeCiWZynZRBb2hYLNSC9xTFiuCdi1oFzrvj71hdMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fh79ySHzQjE86QvMWm9RVo3joXaz8McZAzQcv1icqdkJfYTYS5uYej8v7Guniuevbqf4qGxAqpSXYDa5ohtZJTS",
  "key1": "5BR1xjaVXDEB66SQRZHWpZjeGAnkuuz82Swtec8mBWcyo5hJTpra99YApCBpobJq2TNXVmw89fhwLWqp8VUMJyBr",
  "key2": "3TzWRwFVd1wbPB5zjZW94BurXF5U1mQuyBZ71m76z3Y76sTGZ3z3czVcH67xbWsBnauPLpa2rYBt3YoAGV7AsCm1",
  "key3": "3hkcmfDmWnppxZJkhEJvc32pguPYa6wfr2BgWgNAjNvrKhswsGkVoziMSkfGuETQfRHroUuV3pi7gpexW3QmwVEw",
  "key4": "f34Vs1CCtXJZDZQxpc3v5Vb6CqcdSJ3CLwedUysCAHkaEATT6G1wnU2Y7kTQ54gup4uy5NhA1tsUjvWr76oWvMg",
  "key5": "v1eYyLjDcqPhMT8JHRn4jQAU213cwcGNss1MiZoePhnGcHnmz8NMWNZwfChrGviJi3jf26N2dm5hAM4X5MUzgEG",
  "key6": "65P27fBZRcG1MwvL5tj8qvWxBhJesn3ABed1ktZhty8RHXxZnJto3v4XZCFq2afcZDFSq71wVtiT498r7qz6ATiQ",
  "key7": "4UZ3KYwwtWQB8uDCYnYqmtsUkCCjzMtf1nrF5SYqm9DSJqCExW3pApkgf5kwXytWVLiXnqr96nEyuJKySubtam36",
  "key8": "LZufBrQ4JBoHYWKLc8hQ2GKgXEcYc54MqayiFougxVgr197ChMXYJUk3bnGXaQ7v1Hx55ykibtUCo7omakqpivL",
  "key9": "5BB3Nmy8yBvpieeP8SxMnPMD4bnZR9rQ3Cix9FNwvmDv6Q5jVgXrsW7NhzAQ5nvNn23XBxzDkQmqATF59HC6G3yT",
  "key10": "4dz3g6YBNW2DMqu6brmmR7sPQLJzKm2kdWgwrYz7CDV83yiBppM47FMGhSUVvYvcTku8HLzczJExiUPmT8VrR1ed",
  "key11": "NEY2nQsE5BDrHkVjyCwZyb9hiyeweYiDXGo1g2WnW2iT8w64xfqoiq44HbvNhR8bRtcRK4sRGFFnJHoyDL3G7cf",
  "key12": "2KTWtnzNR5yF9rxdwXX7JWWvxHEzUgB27XtEoU3UHHkdp8XM4qzHNqYX91piuSXUx134aHvutSuwvQfSL1vwxe5G",
  "key13": "DkFcs8iftsA4xqKN3ErFCYkWLpbsdcruWikmHL7VUQNvdjncFDUi4CysLzBhkfogV4LzhHukxq3oXMPwTK6LHXa",
  "key14": "3iinUSN7y5no8Z6X3n1cTSH8SWzJzpXourcdMpRM4hryicu8v3fbhGzRFtDMqdiGooibqckCYa2XQofw97aAsA2w",
  "key15": "3pQNw8zsoFWkhuf8NuR4tkiHrYos6vbQkYBchm3zCoGpNph5u4DxMH76xEUMsZLyqQnLsimCezGzeU4rEDJZWzkp",
  "key16": "czVp6W72XFugBb8QLe8cXxygpCs5arZDxeM9nabZJgsihJK8eNXPdwAubtaNx6t6tmK9TiJKP3n2Hmpa1RCtwUR",
  "key17": "2sf9sW5GEiLZLRvSVjNFso7jG1kAzK8rrXYZgsdbmc4bD2mgKGtP5HULazHhPyMgxK8RiFfaXNN5rJo5JH2mU26Y",
  "key18": "5aFy49tVQ4yA63MYEUzGg1c4fSe9on2HbtNSNFj8Bex5zzHibGJzRmFqNQ4UCo9Tndd4VGsRpJ9HPkWGkh2LzdJB",
  "key19": "5xPjfmYqEPzNW2C7pQwHRFESHq6tS838SWh6xGHoTaTT1qzwAbiJqUPbbGKTpfYw4wcABZGGwBkVgSk4TdtZsMxa",
  "key20": "kgDYE2aUrJdWX8cZbeQRsNMAeq3KgQqkWDKf7tCuG4bHxGAF7zGEkQTMssh2LqFmDVtMrwNDVAmHWSKWsA7ufjH",
  "key21": "25oVFPHCDY7cNYT9yApGbwgXBc8oX9W8QR2Wztgp2QTKH6VQP3bPb6C3MCfCrMiZtMZ3hEGimgts4m22cu1YUEty",
  "key22": "435AnqvBWq7gaXHE9RWuHDk9Yx4UtsZ5PsxJn4EcQCv4mexPfheVLrUP1nYZGzqu9xbeZNb2Haynoc2NKfTbjAyi",
  "key23": "79ivhoUK5H8fZHGpocjXXnu5bV2eowmwr6MraD1Duco5KVPFQ9gYBddsqqAgGv3RCAUkm97F6C8TfzFcbEUAPzA",
  "key24": "L2vD1yFe7jM4vBYWHBMi7FmMZTEK65ZZ5cf1T9YxidU68Fs69Kybjvt4hV9e4g9YPaXsU3K5U5nvxAHPnsnhDeu",
  "key25": "4zCFpVjCFAJ1xxbwYAFYzWzSXJgUvs1o8rLcx7WVXTXjGFXNBww7wiDngK8z998h9GQvH9ciB4itAkfJuqzGNt1A",
  "key26": "2WqwgmSV4MARoaEc2fLYSAzMyX5LM1XAgPXMec2UKt8kV69trV7JTiVfpBPRMByA5J6w7VUhK5hwPHESkkogS52x",
  "key27": "3VyxZtpF9QQFsWChU4K2FyeHHVSFXYjcvJvdvM14ANWHa9BcAVzFTY52tzdeTDVaqwKCvMG8wFYuxcLtk9UyVrEp",
  "key28": "4jXk7SNP3CWg35gwXhvzsb4K3vryMVpauw3P32AS7RhbAsLF9VTDXB1ckGCfvnr9cnBZBWWCfChahiv6sHayQ2gc",
  "key29": "5XiF95Cqr1i4z5civ2Poim4Tw1ddu8DjgZ5Jfp1qZMZLZYXoPWJq1P4tRQ5UZaort5vrgvP1YCr7ymQfkPBxFqTX",
  "key30": "4JWZ3PLx2Vv3kvga2jy3tYMygmdYBHqpQxTN8oPYRZA7owu4LTp3huuagrASDDf4CzYRYZB3KDTXw69X4KZAXgKt",
  "key31": "48t7NYB9W7S9c96KkXV7SbWtRT43nUrU1AFMqeyYAbNV25knQys2wdxDjuXEZdSuc88pRPvaJKHDz2zsqgiPmmCg",
  "key32": "47N7sfnM1ySKYfLM1G3RNQ58nkjuQChBHi39qDZyJvvZz9AetF3AFHeKPqAVtEHzEw8xHH5st3nrS18h9xvun9xZ",
  "key33": "2421ZKmqH2LgMW5X3NoiqToCgUeg2Bq5p85ETtPTwuj2CWnZVQtuhvuctae2GALG4YRW8rVfS3xWPHDJnNuLWUos",
  "key34": "4RE4UzFbViAVa6qRxWug7xronvQN2DR9qdUYmmD8HP8CRJjf94o6jCmwGJq6SUQ1Km1mzJfQvjCcsTV4BJPfz5yj",
  "key35": "ryvDzDJoHHSNouK7D7fnWN19DtWJX7kFimrFsyRCr5Yf4s7FD7b1MhCUes9RVoq49hM3chuGBFYQBJFo71s41PH",
  "key36": "3Scn8bq8hSNYo5SocHBUR77v7XHyK9ajyeWpVEXrZs94dWEghARDnAHwG4Qok8Wvo2cBm2DesqhCCoUhsdcbqKBU",
  "key37": "5fA8Taompz945PBifCQX2c1xAgCp3jBLKE5TQApGxo7GtYxH7XvGY1WnSkJ8qkqZ3Ee9bo4fpEyoNLxHvK9YJBjN",
  "key38": "5NGjd1zRepWCtZvyJqyQAdfYXJ6iD9N2MDnDcvEvJSomh4UToqXUQHZULN48oYbefkxyTj1ogeinuGNnJKsjU6sf",
  "key39": "2Tx7BePBXyn9cdtYi8VjgbzfBx39NmNuD6juNqv1nACWKpWpLdNVFUSheo6D9eKWSMmhzgQkawcwnQtCvd82Vpq7",
  "key40": "WXCoATdVHNsfonuzV2FzdLsYfk1BKtdLi6azp8Pf3tziLaTQ7MBd2BQFNGV4ibHdekF7Lf4JgtJKyhNtTeVH2yX",
  "key41": "234mHAV65sJTeWdAwySgkQAFLhm9j2TmAbD45VAaQicTGSM4zj6HNGFT6MhcUR6hdGHAC4TsWCxrTLa7sHcSNmnk",
  "key42": "4FZnVTc3N5MV9F2S7XNmVApwjX244tvji2fmUugtVeMi8znzT3B7nqH6feZ1avEeUgr2nzmcrsEK3quiiuNXNZ4d",
  "key43": "2JQkfz5YtnENPLyvF6whQ8emgiv96iD1LRgmRo11gMnJnjK2bPvoGXJFfa4FnaRcdD4n42pLo3HPDRa5XxAsammT",
  "key44": "4M7x4r2YRPJFaaRWRPx4fXBiTyRHYdKdERqe1xXsaeF3QDBF3PRswso2tFzR8wpENcn7jrRFysJmaxWbUEWKhCzQ",
  "key45": "3faWFjFEDGBiGKwCuxG9iFEiukJsxjZ6tVDyvfqxZTHqfpsNqjHU8QxBsS66F5cP2PWPZv6oLap4NvmJufzuKAav",
  "key46": "5SfoYug6c5LMDzWR5Qjxk2LqiUx3EqcM3BuVg5cVShtLFctT8uzcUgTKwWLcgnSotF6RnDsevHsNTP6F1rc369do"
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
