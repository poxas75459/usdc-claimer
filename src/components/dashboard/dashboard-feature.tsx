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
    "42PWaiC4q1AGeo1qPMzPfy7SvjHKW3LkAqAMiscaJkEtKNM7SoYqxKVvLLas94tDWxVaByeZdV9AfequUBuCi8vL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FxL41gyUNm47kDXewoG2UGzXb1TwPdm36XaYJ4pdUnJqfm9J7f5ow2subHjDQXHTEMzQt9myJ86chz3RU8vyt6u",
  "key1": "2YaWSnF2yySf5rnDyMkEviapRkkhAqZLGbsFH6TmUMF7FgH3cs7QG1P2yhwM8HjP4LsHaCy66F6nNFy1D2bWGsqE",
  "key2": "2wtdHEWGqzqTr38drijqnEx76efdKgnoSeCNMwywLDdRkUZCWqivgB5zM2DdA5pwy4Z6T693KaEP8tu7WwmWcBQg",
  "key3": "63t5QZvnjiAsZypd8c6SiKY9GNUzHaBvsboNGY41KRva52Bui5G2WoCCGyBzxEqR73uYfyFwYK3CHnp26Xw4h8N3",
  "key4": "4f8F7Z7ykEaNTbRL79Uwn2MN4WvhDmMXwk6UNww4FyCYikcdBwEbqfaF6hPwxkFBLvYdRWr11djb3aJWu8cmZ73c",
  "key5": "5xrc54GrNoBXRhrTzn943AQnotmGLLCz2x45AaAeAoExeRM3AAxdYkULNtMVzCPXi1TqesM32syPFdPhj5PxG7dj",
  "key6": "2kGquXHzM8mkPK3Vtn5yH467h7HdX3EUFLR2TYGz3ppBCoMdwFHfEMigeSSTrEhPimNPDJgbAjBJCrpU7WtiCSGA",
  "key7": "4443btV3RZj6FDoCKeQsVdzWamXCfTdhxCEHJkSpnQb78J54M7osVxMVKPxvg5Zk8kjPs24LSYPbzgQuDs7hu68X",
  "key8": "RS9bQwwt2jDGYXmUrosdrKvvJWHk1Yw6e4dMbpMnV1dCVFifstbvKHK6SGBELHcXiPe4WyNjFgEVD2TPEFUEs9e",
  "key9": "5j2Jq45HYMsyZZyJH5U2yXPWwTt4rSE6QGqyZqxfWSyubNC1H6wDfau35r8TF9a7mimDDwG2RJWDQJVNswzo76jA",
  "key10": "BfxfRPgeb5SiWnxkoK1ycuaQjs8PJ2e2rt7aAszoJmrz9evYcQDSEA5nGFrzTofueNpizWXBHydVigfKgDAcYXx",
  "key11": "3zRLrqv6fV9eDYsHSJKfYV2joLttY1NNMU5ZdjZKKD5z2hV4ZqsenicP4PzfpgGZH2LEmn3a7P2q4GRnkWJqS4Wd",
  "key12": "5tmKoVTSjTw5B2NBP1zU5jc1pDVfdhQGXgAPbJip6RXFWD5tYuuh5SYy8bghiySUP9Z8vnos5uHcxgPm7LFtN8hs",
  "key13": "4wqpUDtKe5X8KoGyMXxu6pBaWGAPUXxLcyg1ojjEvzq262Dd9HowPdGDzAqj2TyjCga9d71K7W6UWrGdoJMdjqc8",
  "key14": "4rSi7kfVWn53vvZkrNtdmVaVfoqrxnR2vPYtXJagqTssMg2Yb6y5cevSPLRx4P7SCN6izgEmDKnQHH9MoDxK2LeQ",
  "key15": "3RyDktkRvBQxt4JsM5moaqHiPYxixoRdKy7dGESvdLbFNSLXEQ9P7eQA8tfLaDKVW7hq8unhmKNAiokXS9eYMaF1",
  "key16": "4omSnhUiBX3a4gXpLUYGguhoyKDZ7iNMcWQYdUXTHDyTSZSSBHTMJVpFWvVhyje9QWmZWvMEq6mqS3PkWFgFRTtM",
  "key17": "54qwXtFhFczVkhBQsJKFRcrGj8ryamU1HcJuqWvs44f5KgXUEp66RCv3qySnK21TNvsKx4oGbcBC7MrgRKG9kn6v",
  "key18": "2SPxgFVJe5vZXZpJsNUUvf6GFBUqiRn7jKWe56dbRAKFnYRYyHrFaveJrWSZF6ZFBTDZxh8MT71KLvszdcEGmJna",
  "key19": "5Agk3RZTC7bPTi7APmVR76DjmXgcKBFiXpnFyEkm3axP5YYypG35Rdeasw5TRxh8vGPkJQzu9PTrzykcFYNEHyE4",
  "key20": "2HnLqW75qsSWu3Rzt7z9bwW9wMMEcdzmm7i4tYerEFMbUhxSC8R9gy58gXnLKEKTCKWs9fiCf29p23GTogq4sqqY",
  "key21": "4Gk2Eya9us9SCq3zmQ4RdJLjYcJvknxdjTMmLn1s3yDQSGrUD1qmC9xYcRq8yMnDeni3eSrrwJJKopWoaqTw5hCH",
  "key22": "2jw4ZVAGyCWNMpwSsvbwHrPPqtKZgyaSTNBhP6UVbBNR3xUosLCKJZiaCJYyAh8sEaUkm4GuQftEaTbnvS6sipCY",
  "key23": "2af8SjYDYvEaY6CR6FqcNS9sKRjzifrnV7r8JEawYBw43C9Uo253gKAx8AGchasAWcPMtzprZ2j2e4QT7Q9aSpU2",
  "key24": "3oj9Esby6z5kgRNQqRo6i4DxfXFVQSQi1KRUAVEiPoVkt5bfUmnjwaWW7fdVmnfMjXwXrvBMn2uXoJiwMA4G1NVU",
  "key25": "3o5Ye8J791sCTbt2gaY2e9EtCohFCPUwctgWYKK4uTqLLCvv8h7ntKGQpgcDjLpSydvYY5F2wnSCPMugGNrwsrYj",
  "key26": "QZfSkYLGqHP7VTkDzCQb9KkfwxhbvGC26ShR2KMSBGp253RzeN3hW9qpGczeVMwF7RVNm2NVHv11Wce5ceWHSb4",
  "key27": "22iMyqbiCKZTdbGeD98jwkv7B3TWG13xqynBi4rTey5B7j6xT2nTgJxfWEGJ3KCMZEvuXMSvB7yb1vreKvjQU2GP",
  "key28": "Aj8jT9R2Au6dNJxWnp35j5jPCRBnaZHmfX2YpjtSgrbPVDnbKmJSdwL4ZifiyJiVMTGKtK29vqHCFWYpH5MmTsL",
  "key29": "4MDzQZY2JjyzKSimRn9CaChR6cFsm3UcobL36XJ7Zvm953Fzn3Z9waxrvmuPdToqAZerM9xsv7vV6fNh4xDRRtz2"
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
