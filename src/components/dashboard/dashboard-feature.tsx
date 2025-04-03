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
    "4R3QTZakmbjD3P3ww6NP8dkN1Vkg6soFrafu4yFcMLiWJS6J76DK7mhLEqoUGxBE4Ct61kTfoceAsK98BUEdEVYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XRamMrzbD8rVuxjueatLTXynKwg5hrwB6mLHfRTKPCVEShz2i6bgsK6iZxLBk4kysPVfnMVaLtyTR3VbJVrN3Tb",
  "key1": "PoXMFQ4xoCaf6N3EBq8FZF28ngdwBJn99VKZRAJVD4cJRbHSAh5Rx93SjecGqichEpijsQKhbkph3RLAkUJWnBk",
  "key2": "2NJuwPCtu7rLF4DRMXd9W26XVR86MWvn91RwboTQQBB19FjuaBksxJiHk2evE5WeXaoQQgZRoRhHN9PbFZq8Lav3",
  "key3": "2pBxVbNYoeX2iP6oCH6atRk3rNCUTxnxd5B9uYJQwgnRq3czMsgU4XDYdioMMtFEZBMwNGpcVPiYbnKYVEb4ZYwL",
  "key4": "YRxgZx56wmz7PYBs8YS3dfVKBpGf2oEEE6tc5htUvM9dMGD5GgqsWZ1kCVCpmL2V2SoKbmbsNTe72a99gE4h8B4",
  "key5": "4rpdjXuLeyDiCDtqGUSypvs8a1GLtnjCFDJQKdGw15CJXybNTPgHdckWZdiqnb9aHvsKbSXFwQDyL6efHcuE6W1n",
  "key6": "3JN2Wa2MT1WCD4fKaxY1PozjUEg2Sfyowr1BwYcE1piwkT41bYhN5PNJocmrdhZvdhTaH9rwsZcLdNUefvasGjH",
  "key7": "2cjUtprcyX6Y6ErTdNVEWc6bYq4pxUscvqY1Yw5a29zcRpuUGYN6FZwWDeXLb1yAZeyCQ7WGiRmnoDukfZj5QnfG",
  "key8": "5rpcZDUz8uuXe5zWTLwDM6niBittETZdSnNQwJ1RARPFovfCahCpr8mdVpSDiRts447pjfiRkizcV62SpQGWMUgs",
  "key9": "5ifcw9Q2w76oTt35xYqB6SrgPMn8bFmcRGwwjNn1b1baPLrmSiZSei6CRVaEkQBKkHmFtMymxMpxgHWiBh3JXSUQ",
  "key10": "5mAZYWydH13c8tT3QidUzBWbSXPwvS6m2phEdB8NRjjZY1Rzi4EAoCeQ7M4t8JQiyQP7X1q6jdw49B7h31AJNrbw",
  "key11": "2QdQMuU4PMDHvE1RwmPCJvMjLrvhctKPA4E8dTuwd6bnknWndDZkVVd56nuXvARNPwcxgj6Ls4z93ym9Ko2NGsX4",
  "key12": "43F1VS4amNZggvPnsFCkmkbxqhBccT3bVsMGJ4JkJgM7hvYfGebMbGxVoxLZF22HfaM4dcjg5eRTVZLTcsDkne4A",
  "key13": "3fGEEa6XZwBqPRnjFDAMTCVqqyWf5J5Zc3YNB2QUCUtd1WSbinSib8XqiDaf2BEU6QfUS91q9SNywjnxuhnHzXYa",
  "key14": "5Nn58uu67EKQVFHLG6drArdWwLPYpar5mtq1hgBqow4LkSrCAQCk9dtyKiCsqx1pgRxiCDkCDraJq7fvCfamTqhw",
  "key15": "42Wy6xXtbGocRj1JZ4iJxeV6peWnw3UzbLyfX9KHMAnjhBsHzCm9MUHYF3awBXk1Y6RWD1eGvSp4okFLFnBg81mw",
  "key16": "2K1RXEntVHYHZSEXDbvmebYcu4Qyub4VNUK657gcQKDsqPQsYWYoPret8D8BeBxLJkkoVeqkt5UjuogyJGdBHhvB",
  "key17": "5YXLnFgHrvYyGScZuMRU53SY3qupEVLBfnj1JhcWZXjhNM5Cx7P6KSCsZqvUcezxzkaoeTBZSLaQ2zRQcgheLQzQ",
  "key18": "2XpWr9zbAefV3DWvpECNFZWMs9F2LpvqGc6NaKuhY18x1iWj4XtWXcteV4jHpivUQVNsxbGCYzdNzH3Sa8irqYak",
  "key19": "3j725M4erQP2VcY1SMExGH1EoZAzGn4Wy72CnXkKg3Nj21gYDKFEY8g5ZmYBUV4fJb2MTsbZ78wMFDMnXWPocoTk",
  "key20": "4RVzayFaW3bRKsSeKKsVXS4c8cFSbVZ5E2dkYreEkGYt4rQNbiGqw92CNr9TXHiKBqxPWsMqskVGrKY3TybPQUYn",
  "key21": "2WNzQ96RVdNUuEGxNLVds5hPph7Dw3jQWAcn4BZbFcjMo6xvssjTSxnxqX6H7jwn1GecuFUwAeaqRiafgkF9XzJb",
  "key22": "ETi3cwRhWYWP26q76diuBWa3V686G6Li2epAfE47BtUQsKeD6s1GH7xjhP7WwVRKGyZYh2ZeJxh7KBAmTQNwYZh",
  "key23": "5E4ciatRx8wTaao8MsSKR5aiKBVEH1EhNRkBJBjS3aouZmgbmiDyAjrPUUePAcK92pCayWbXy9wgsBMnz6QrUdEE",
  "key24": "2o5aevw2wgcCEJsDZ2v5cuu2QTksWQLWY8TGFZFNn6kopCpJY26HkcpZXVp9YVHUc6g2HpNMpa13syur4W24k4Uc",
  "key25": "2YtVzyPeFyguxyubJGfo2hLtXAJywaNFKKTf39FYaPYFpzoBQoKnJSWyVQnV88UnQnNKwC4PDXm8My1FAaBUbAfH",
  "key26": "4aXgfRcFtMHyykq41LD5nRGWZPWbRwMuo16FjSeFr2gs3NJBBxq133sTLFUnNmVXA1hp446w4XSWaaTj59faE48S",
  "key27": "2Vu7TuYRjwZzXhgKJ5kMSDzragKS5DK52uTWHBeLcSs6H6MVaqLxvcjf54D471WUfM8EGEV1hnk1DqLQ2yweikaw",
  "key28": "3UJVJ3Vf1M1cFNk9vRDzgNJZvKfh4FeV5ERptszESHe8mfBfMA9cgJedA5mjNCkVmohp9WVWM4jacfEPF8HZHU2B",
  "key29": "dNmeGwUgp3eEtwZLimgTTiayoEpBSe5Pfnaj3Ugqak5PeFu7XR7hr2V3q15oVmahJSWnQCkxHz9CFZzSqR9KRWr"
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
