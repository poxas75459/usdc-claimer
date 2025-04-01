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
    "5Cc6kmFXEfUopwEfuTLa32mSi7gDdTxVU363joT267ty2U83m3btdUbySXtn4EyQHxZBoTbhqeVL7cZeP1kwmJnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43VQUDHrK7WWXqUobVFKkapcU7ewPr3z3utnhyoDi5MfG6TJimnG9F7KHWMnuUUiU3GV8q1KCVyXeKcy4Ci8ZdAU",
  "key1": "SHMfCmQh5UvKRaahyWouGBMzP9ezTuaGhD3di5VWqqf7D4kwWB9qUkoSNeHmyXd2rah5n7Q3ramqNNagffTad1i",
  "key2": "2BxaubxwPDT1wHRCL2i7ujAGPxXrigV39XwAbdfzpVJrSHGDBb2ppd6qmdmnrnpTR6WvKf1boJPC6LE4T3sKVGEB",
  "key3": "3MmGpME3XeS79q5DwvCSU1JXa9wFhDPfwVdS2JB6yw7fth832dtemAWNphFagkWZVGQJ7PFgszfb9y1JoKxTcSE3",
  "key4": "5H5hhmZAWyYrBDipvBTuJancCfKDp6yeNob4ubknSN7wqpfQBMeShaJwEBCJQwX4xKNe93zPWWwceP3udowCY4UU",
  "key5": "5X7G4q3pNKtuLs5QszRRACF32Ydegnscse6Fo4BhVgNSyXLU9atpfqmCid9gV7MiMHA7J2asRzBnErgNZWr3wQwd",
  "key6": "tzQ7RXaCCAnyTw4az23TbGzSVKuJC5gMNHEfgyPeqF4oTSHRAwvgZzZD3Y1eK5sTgsncmAH5nUJfcy8GRKqy6x4",
  "key7": "2EVBo7miHjbmngbTdykbt7DhmXj2ka8eonHZbXXVmerBrcWs2vmGG9LjijXV5Qem1mBqEyMhhueomJUTA2xwWeFF",
  "key8": "5haHsKr6Fk717SVXG4nfLoiS6n2TKvGoU2TSoeMCy9uvXXmLxgANqkih5phGAYXh4Sn73Gfm5MtpPDpwsNqhTcm7",
  "key9": "2GKzBHcdavMXYPff7q89T7nNEabZ9CbKTtFDhzxLxnRdKZe73q5XRaWGvrqfGKstRHCyarGYTdtTLpWjAzqJFoBH",
  "key10": "5bKFjzxj1BtjksoVom4L5ZE4JWXiYkBmEiuDCpQS1abbysBd25wTKAX5Wp4kqxB3ztC4SGRgrSCCQqnNwTyDG6ww",
  "key11": "4hBNqhD7eQamuf7Umi7MU3sU1jmjSQaAhZTzrpYZuecceMCJ6epZcP2xg3SWpxBMWiRbmE53DTytsLGNatGfKNtB",
  "key12": "26YWVVfNmM76n4eVp2AWbrCiupmU8Pe5fnVRNmPhw3ST4EigqoKNLkaLgkxzY2dEaMQgqTYS89LdcwZnXEaCCve9",
  "key13": "4VT4UF8d575htjBossufcrLzXjhFDKLEKNLK4tYAxEqFU4dzrJgvVv3LVNZ3f68yNQbPeUNvxuctmAsk29x7pQ3S",
  "key14": "46baCxdV8XJwgzCNzAYJqT7vJ2yukjo4bHaX1xdku6BEwBqcHVimR5PTtuG7vLPv6rXFAFQu2ZG8x7ktSpURZEqu",
  "key15": "3Fp6VTGFToLWsyy6DtvZtNpXTiAbFRP6JTdhjC8VUTzVhreJ3fKFYstKBp6XLphJyNquhqQnEyp6p28kFJpS3NfU",
  "key16": "56VTANp4MRAQwJRDmCD14tDwczempC7ME4yvV8VgY2jbgoZ8w71uxc3PW2PauyAw1LAq3keVdKJjNbqAjdjCNfxC",
  "key17": "2f5JjDu6yUPZVjikXZSbwHSCYCbWayxqYB7QMNuEEXPBVuRHmk7pXTPpULY5PhtfnLUaVr1fLrkGHP32UD5FADsS",
  "key18": "3hAo6Lyrqss6YZwgZ8LhqDCFn4b3tkMyoY5mnGcpzfFsiad6rQmFmbmDtriFfHCPXbUK22TuVWuvzcARQqRTuK4K",
  "key19": "5sXUVc2aDrBYBiM2ZBXYoX3m6WwT7Z74Dp5h4WrhXU3kJLakNpZUFrEq6fHFfjGgYQVHq7wNFyr73wAzuoNVrmpa",
  "key20": "zp6yHHoSR18nUPAyxQ93ytox2oxHjdk1MD88DwPtNqcvGS2snHi9rLpHPEPm9U4ZQyTMAChuWKQqKbWkQBgnDtu",
  "key21": "2WtkpNiCYGqFunZUsVCA357gKPwZuaCfoEFstEdKb3XCuj8tGHiQTprLW2FonY3xVdE8NyTnZ254fSXs7YbA4beQ",
  "key22": "3Txqz9jm83FyYgf2DhtAXZXV46HbYFzg4b8zwKJH1V7joFYbdCG33mfW77W5ZNfmYcNComHNMUP1AskvQHpo3EmB",
  "key23": "3q31VqGFzVUkDFWSHz1JgCy2PT94vATiypm5DqppEuc2RPZgwm1G1JAMwo6vGxsTQPgHFU3RtGS4J94B2MDfvmf9",
  "key24": "FBZf6FogBfWPhd9CrGgEPRedqVChqsNUcsvPxRVYJYgNTy2Ci6Sw6hnzfVBtFdFfA7krkSqLw6Vq22eQ5TWVdQk",
  "key25": "hFmi6d2d6DNFHMGztKaVcQQbmL9GntjgaWyPmj3yFbrDrR8YF3Cgm4cZdpWiYP4sDWW2wVCdzUjCoDRdhGDyD2r",
  "key26": "4o3on2sGHgTvUUzvN8DUSQ5ZfDNNq2gM1gmMUVD24ND86xKspSiQosTKyHxyNRNiPaDrbceu99js8JeTkZfKdkAU",
  "key27": "5GCJg7QuMD2C6AL6Kuy6p1rCiKpDErzvuyLRffvShDytpDcTwvoMoWGmez4JR5sbnfq3xQnaxNVqhHGCP4GPD66E",
  "key28": "Mi9xbV5j8gUXg6RnQ6me9wV7eRpccNKtZSJ2VkvbnFY7tt17EdzAMzsDM1nACd2t81m2MjowwnCCFVM8efn9Foy",
  "key29": "4SqEa9cNe4rYUprcLBHScFPjfeKBWvke15nVjb2SKEYSsE2EgdhACVd1h47RgTZZhs2F6n4TBV7emFyUT2AnhQCw",
  "key30": "RzSRALXaEgr9882n6utepygcwSwtYBvv4gLdDxGmPxABBhgP6EdiQdJkA5jq1rgdu1z4mrhHjD8rTCASHGoqsPp",
  "key31": "ezvoSaHvEbksWgUBxcFVzZ4wRtv9n4nuxaYvZSMjhfVzQr5hxByPGiJjqqaedPc5om8AthJ7gPJgmHsk3VuZDSE",
  "key32": "4yQHbs8d6V23dQpSiQXPHUeVAsEWBYGLf9TnYsL8FkXsokgZYNNJNxXAXuSwjcPaRRA1j8fpYSMQuztgQDUo9SzT",
  "key33": "4MrEyvbMR2zaAjwdoTpogWZUjRheoqekxazVFFfihNFMfx7Gn6KpQTKET5zq6r9B4RuaMTwtqeK9ztqmz61mz6pR",
  "key34": "5wP6NxCSJey6nYoSztGDB7LVxJdizjhAZCY6Trix14oqbkeb6QCbpKH7QoZ9ziaLteNKW7KaPxtWM2gSsU4oujNe",
  "key35": "WWy2L9uERpvXfMEtv6qhMzJBhn8NVu4L1QrBDzkhn1zwkKcEbPmFCoQUbquCwb4xYMSgSrPcxGDHmdNfK5bdqBw",
  "key36": "pRuLxoEzcNaUNmjLpoPybEoEsVTEyiV1xjnUq6vGZ4D83SnvYbFrgjZqsVuNTbtDFJYnkH9G75cs3nEaLi3m6Ax",
  "key37": "4J5bqt97DxYvfwhSXyuga1yjyxCszL2pmh49fjSeTL16YdTEzYub1v9wx1NnriMeiCN4Ag7z49yDy5q75kfYjA5N",
  "key38": "476BwodhZSZEzmcStxCymeW5GSGhaTzXVAtKQewfsbQfbu7d9oJ7iifsy8x5kjxEc49Zu6xmYmnEG1N5BEFYaD7R",
  "key39": "49w7eR6VjkVziv9W5pBNDuei1KuvNMSQTtDQZ4JAQXUcJPwVqZfsXWdDjscjCu9i9nymQ9BeQHauVzDNzyRU1Vgs",
  "key40": "2NDwX34T8kmBGJ8urkyGoe28PPFVHgaacn4ePsYUzy3tfSjMt3DNigTZhnYejkLGGLAnXvJAXEjgqDWbcAzm9aju",
  "key41": "4PxieKm93gFyPf7oBfA1k6A1f2hakSpD8oCrpkt31AfkYnrMxm9u5Qqq8zYtoGq7LKAYqz3Kh6BQKeHpL22jWY5z"
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
