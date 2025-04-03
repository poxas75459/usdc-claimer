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
    "2zXc9Yvk35C3QmaTsYxHvHHVEsxq1trFcK1wfm9tuSfcFqE94m8iJ7L2XMayB3FFoiPq858PeGyeBgPzbLFynb4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o68M9ygfdvMgKMLLmPv7DTBHGY3BGHMr55sC6kDvbRruyLQzaToop36CrHLsyx2M8xBY55hDPFpd6zSDTGtVKqU",
  "key1": "5eYd5LSKfg5421oAfAvrPvDHVSW7UYjTNcd37YMaBSoyd4iCaJ8xp7HdTrM96aqJ7ueyJ4uQoF9QG9xnGBTLrdsh",
  "key2": "4S5k7ZCnGLUQT6Gq65RV1HueZqCCDcjiNiZjY6TtTyavsmoBcBbkUpNqwZoYVDNtVJccGn1KZyBfDjnhTz3Ko1W7",
  "key3": "2TcrZ8r5Fb7XeatDXZug2ErxWjicYQr5tSXVyDyJVLn2qFBwKXLfrZWfZeJWuidmTcfUJXzknyD5g5EzmdSFWosT",
  "key4": "5wWMTYP9CiEJVoxxbyWmRjeGrQAMsHYsCDKQ5V2AjLdyXgZiMHTDamzKXAbqyTDoJfiq87CSDdwqwkHAH8MpWXdG",
  "key5": "4WNwCvF6yf9bVW7iFnFyQ6xcBYPL7HkgP5MGnJSjvsGgyrjiQgmd9D9hXKdDuqTNg5XJfBQ4KWD1QYZdtZyzpRwU",
  "key6": "4AbdeAekugkzHXuNdW1jmgzL7Z6xp9CJshu6D3aCMc5Yk2HPE5BDzKvrxKoY3ZfjQEVQxAfHqbqjQZLeGjCrNCow",
  "key7": "5XwXucGUAqRjeTVkkgM3rCJ5pCfKxMoXnYG13v1pPzoK7KhVBQ73aWYzyWxjL4tNQy4BwAibtbTEvo7st3B95Kfr",
  "key8": "5kxEup4n2eFA4j23swWHvUx3XTqdFx3rGZUANiA6BbBQkSVhnGrZetvtyvdqYTn1Ft4ERvr8bin8vbb9k1cG7udL",
  "key9": "2ztV6mQAz5ZbPZ7vyFS9zuG1BD1FHqv8uYHgVEEcVR2scg1btA8hzXQpVTJuMiTnDLW6n9MvCEkivP6DsqTs712d",
  "key10": "3pKYLGyarTJyJ8sebrXkA2X1BksvvEZmGkNJcWieznP1kpEueALbXSaLA27TkB41JUb1TTqLUYx2FcPL5tS2BGDR",
  "key11": "8iCTJeWUeNXv8W1QXTWwp86hxUrehNWgaYCQasLTLAj69wQVUuH1KieDDJDBez284L1eeGHvmkzF6oDBhZDiUvb",
  "key12": "2bPudXLcd6PzdaCnpRUEFBqmQhcFZw6LFH5QajfgdZtCrEF9CK4nQioRqFmoCCTfHGSyy7WgHYW6c5FoLznW4yki",
  "key13": "4ssvXjesXDmK986DgimJmgt6SRFNRG7sL7p1Eqa3ji9TFCwD3nuTYDBgzLizi1ZA1sXxrxgqRH7PDqz2EfoJY5WS",
  "key14": "3iZ5RyDMtkgLvE6yCbU38EVpyNvx64wbKULD3NkWmSGghg8rmyTkiSzeM6EMk5nQsffRC8abAhXmpW872RqPYDRK",
  "key15": "2ueZmwBDx8YytPpR2HSw7EZsXFGbGWE3V41rhqD9CXsYKFwf2YonvxkN6qPYgVZK9CM2guBsjLQMbMvmNrScAjUs",
  "key16": "4NU2PtxmukMTcRwUhFoR6ST2fmcztmzhbok927e1t3nJcsv7BCtfbeDoxcuP8fjLzbrdJmmCycpp6w9h9eZtueGb",
  "key17": "nYPJbyKwPNDPDtLtPqmxptUaLjSACXvqiH9JWryQvGHGEcs2dne4Z6sy9KjJvYAPLSyiKcFf4fHtm4UH9LginTg",
  "key18": "49og66VbdVfGTm3EnAXyNZNZMRTmDYk9B87xppPZY4pW4kzafqHSC4r27xMGx9n1jKCR1YeyLZ5FVtJ61H4qsnTD",
  "key19": "2tw7rZJCJQ6F3BPNPuJiBrZz8bXHgFVLe71oicEXioefEFtvm6Jy4scKbWkwt3ppzSLFACHTJ2pEbxY3wY5q3t4A",
  "key20": "4Mnm6xKBJUZshgQ43ctAQDzd23mEJfZi5UXY7PoTw4zbHGhE8dWCCM61KRXeBspDghHeMN8FyGJzm8SwpVGJt94P",
  "key21": "5UVAJvG3C1pyMyQqXzc5rwX9dW3mRamEDuzE7Hn71EG8vHjsnbrU2NRLT9mQdqErcSyCQS7x5kfsvPJLqurZBWSg",
  "key22": "5pF4GnLJWz6i2nTRNaNiPzJwhNEaGpUo5QZTmnTqnL5WGDNX9QFiShZXm9N5tYctPcB5Ru7tVycw8RhdQENJmzFQ",
  "key23": "j9qpRGdAv3RdavxWD9BQNEzLqvbTTNQACcB1Fzo4G3Dz9L6kjHh6d2d9CpMggTGMKbDcWfRLucY8ZmQqei6CFyr",
  "key24": "2Ce3ixkc3TWtVWERHQi1PHyjNeHNKqHo4VB9PEq47WEncFqxhfypfCM96aUbm7St25afZBmd1MkSncEJmjvUHxuV",
  "key25": "4J7sG4om5aQqV4o88XpTpXpUNCpVVwMtxDAmMwdinXpRJNdjgUnsDX3rZnkp7zCAn8FTPULKFgQdKtxKJpBAHrN4",
  "key26": "2v2zPQ48arem34VgpWAw36c54BvyATYCHU9GQ1TaqQc5WmpAx5ymFB6DwsnGzaUHQ62u6RkQPMywugaCCGmd5cvs",
  "key27": "hB8wVC7xwFpwVBCaPRE8osa5uHq9TZMY9ojobdqhtF1HKsDHnawVGh987kDPqAHC7e4cbEqHkVFRwVTkf4jfnAj",
  "key28": "5XsyC1Z2mYtLwGupsuf6bzbZNa575hE76SdFqEnjiGP3nTEbKEED5kcYbS5HmRRqBw72JMNepLmXK6p2aCCizCU5",
  "key29": "2nTmAQySWrjMD3BqiWjpXKFCXfyBUmnQ9PsQMBMtwe4XWNJUPaZa4NfsHyoPovcySNqjmTNbQ3mKPfboNZhxDzaa",
  "key30": "5LNir9pc4oHZmrouc3HJqyPQwNRKQ9G5bbT3sTYAKsKG4opShHWMn1rdokjyygPRi8mjjuiVKDbGfVxnjsHtpzmC",
  "key31": "4UNBBd7ATxYgyyCUR1cmT168xVQ6vmfhAQb6L9Svvk3KFWSbmyXuTEda5B5iFmvNuzEL85RnMkePRNLvHLewSnGL",
  "key32": "iQAd9YmT4sWyErapFd5icQvz2iowMRBCFfzCGzwXEwdn9dWsLgWNuuK9zxiYDEtAWiryPXJ4rhFDX88wiidgtcY",
  "key33": "5yTtWxacG4pkpJHrJFmmGBpkHDy6Wk9zAHMLzeLj2o41fXAe49fWJD6YSXZK5369NAfestgEqRpmtMdtBqyLmiSu",
  "key34": "X7Yhkh2NqiyzCnHQkAYrfGVLTU4XAmXALrY1pd5WBqRigaeLFU1v3jy9F8XUr97FfY2Lowrmu7Hpc8Fe2P344fX",
  "key35": "hzt4kGmby1FvMU4iz9Js9nXL7UPu48fzBzM8Sdr93GvegpbjVvXWtPhGZtCwQN4SZ7nt8F2QkASJZwxSiKUxY9j",
  "key36": "53f2wcQDzvL9Up1LSYL7mn2S49DfxyufLFBjLv5Tj7sfqejJB71G352vY8weq6AGVjM56vYqxeVv2myKQyLsdcsr",
  "key37": "2832TUFKryTA7Rif2EnicGyLd1HTavkj4xu6C6NhvsTM2UWn28K648SuPYK8qZWJbuSCi5xwhVSaUweUgacaTfAB",
  "key38": "5ZcNhxZKE1WjoHsP1s46GbFLeruHBBkJC5Sp5FUY1Cw32eM9dAxdDfKa8oo1eyD87zJe5x7mEiNzTZQXn6uaGjmD",
  "key39": "48HCzgZQ83WGFnqfCkWoHTAKHEZWpZ3bcysGa2uv1QP99xxgzD6gg1Zbm9C2KNwBnXoNM7mbpxVa8yxvGAPt66GT",
  "key40": "2NbmH7grvKzab6Vr1wFjMst1r5DBiuSpnGgCDm4ckS8emq8c7PQhbmRsB3aWfnuqwMs1cUVRcRNRXwnXMNQTksef",
  "key41": "5vEjWLJNDinZwaoRRLc6Sy3Np8gbHNH7NaBr4LeFuC2espNYFC1inSKaYzkFpcqckg1mvrhwzwmnR3dCqebtAGjg",
  "key42": "5LyUxP5cSzsn7wicpXC8oenPpLUvKpPHUHH9yDWV2xUFYcQ3MZXMhKDmE2FA5VGvgWxojwQiAjXWZUbkgGA8B3UP",
  "key43": "9uQoK3pXeCSLzfP5T7ScGuBSH9gnTUfpqrVHdwTBVv64jD2Gig8SPQKHTXYnoiQXWJWjw9igvoALMAPm5HrdAZL",
  "key44": "39a5nPYSVedRMC7tAs2oe3Njew78scc5oQ73vb2N49nxwg4bsCDMcxiD1uBKx3hzofUcW4h93m18ka3r4Y2XMNvW",
  "key45": "23WGMVu3Ao9hmt8nvkFSP6NEY6GkCLhkzPsMYKW4GUXNMeJAH7GaZawFWkk94eU6LCNx81AzrNgrNkDWvPSuM1b1",
  "key46": "2z3yUeocnhPaf2PWV4Z7CnUsY3C4mX4e6um32kUKcBR9fqu7EXHnozPHvFr5uCH7tikxLbaKGG4Zqa84oXwDXhoz",
  "key47": "2evCMXp1p9aB6S3J4Sm5zt4KTXLf6jr1dPaiECZrPzYXVYUpMLB966KT16Bd6u8aMNtKckgiArrUaLy3g1HZunGf",
  "key48": "xnKraZmAJxCkJusHzj39bVNXqAFFuKRyCivRScWGcTrpp42NYmRs1D2hZdAHzFC3XDJuHtgvznHLYx14QNCXWhh",
  "key49": "i77KcomkuT2jTfyWJsC8HUY2Ecq82mkvWsVN6twKTH2XSUnpCNNeqJioSzCE3FFhEFxjvSwxQiWEjyDXqaaFxmJ"
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
