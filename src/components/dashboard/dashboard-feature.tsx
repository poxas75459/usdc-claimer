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
    "bRKTraxy6GawGvmFzMUxqTdn9g3JD1CLihHgKcDobb9QCrNYSWe49oRq3dJDrYwtvxuZKcxDVonqkpFgcbiuNfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ch4hUaz17YcbZNiKi1xFrPfZEQqiyyjeTKY4enpAxPnFF7rvJCqidLaNiDDTW18bfm75KXwxG49JaoU7qKWtwr",
  "key1": "4LQ56UxBiBgr4qhswYMAz7qUPoKqME5dT9sgPGkjQjxFMVMWZ3jpU5YozfExUsudr7TFYCfuWJiL3i4YB4CwLzEy",
  "key2": "CdNAJSXS8L5f6SX8mN6vaHpcVGRNZSJbfXRdbbcZeYtZbDWd1iFihmWDGnetQqm92FPjzWFxoBj1kukCT4mG3zd",
  "key3": "4TNVtwHWpzWtjgEQjuDqCbbyQmsHWkJ376XiyK1G3tS3ebQ7aZTagqGFGN2H6A9eTBLfmFYVtiErdaQeP5DmYCx9",
  "key4": "nngueZwUFyV9a3trZ7xasBs7osjU8fKB8mN2EJTGarDRBqJE8fhMCghwPAcmAErSf7i5UAD9EEmvxUvwuAthZZ5",
  "key5": "5AAkoFRCn1vSvSPG9meaNwvEm8C1CMVuTbmwvRomdJhGYfRpbdHNZDAYwqHDCnir5PokQg1FDyXPuj5E77c8NkJx",
  "key6": "2Gxh4hVLfv81ZTk3nRBe94tPeSJprRVz6ZUJKEEYNgeEfPUeimN81g65vsZd3u2XKBwTcRqvx867n2NUkZwnXiyC",
  "key7": "2eUoRfna9VjBK4FuNSkebpmyqXAc1bWwhRB2P833uWJAmJ5Bmx1f7PpixRQHwmw6nqHehwy4HRikPzgurcZXkAhk",
  "key8": "3dPxojTJc4eDufQMAnKcEUVh7ZDAgnpUPFrZUaEMVTwtZKKZcw6jC6tHYdR4FPiWsCmDJPRowpjQ2qhuWea4jkYs",
  "key9": "2V2Y6qKvkrgDw4s33BKeQBv6HFzeGSmntgFQchdFe8YGWGkdBKU3UcLsM33QkaM8Qrkm9wZ7UHj3T3THn4TUkTHr",
  "key10": "MXPDGDAhb7Jo67egutBAF2xr1yQiGEDXXGngTAgomq9UCXLDSLUG5URg5VZCKA6uji4VCAfQxn9xsXYiRRrttL5",
  "key11": "3DqpkG2VYtwAavz5LLmS1EX3i8ogsHj9dgxx3C6h5JqEbK6KcBiGqeTr6LWmdkCtmvLdJRixZPXb2ymtcXJ9pkhC",
  "key12": "aL1kkA463Lty9PjWV1Td1CUbhqq3Dx5qbxctYUcYzcUdx75KRAMU2p5bj6tKh5WufEGEiERabmZj18LNuyJxhSV",
  "key13": "3KM8SgRPtxuYUDMAmCLLiuqSZESafE5zSXEdAJYBSYg3CchzAWDV12gWEeDt4yFmLMY6nxouqFjSTAq6yBMDG2kC",
  "key14": "4efmcfvEh5sB7d9FWdgQFXCcZtGScT8ARNB8up4kUVZAPb8ZAh3D6UXfT6s8nLujohAskkzywxtrLaiyoRtqBWAa",
  "key15": "3vH9LuBLCbY9bLWdzjawa85G4D2nXkPzz7EYArqjri7LaTsjTEN5YiAQFhEjSiRNkfXgYB3ZtL8Zgq2oSQB7BSa5",
  "key16": "4Pq3UQrpKLHtGTEay9hRGcNfPtXh5CKHpTopzvsnQNjpmoEW985sdq8aos6SzEDKde14UfkwERLT6ofkwF6fz7Gy",
  "key17": "5DdV58PjHAeCQ74w8Ppc9v3WEk1tUrfoGWnwSgHDjCNf7uYqwLazeJVYsCZMzbEMSXrEAe2pBXFQBEvsT5GgmbH1",
  "key18": "3LfG1HbizrHom5JTWJBw6GCYYNbdWeeevzYGJQNbU626GwjGzgQiX2mTGtyoA9fK6JVUXdj7vmpt27DCcquD2Kod",
  "key19": "pyTMFjjT7PcgqnBA2jMdoY6kYEMpzRHij89VtQtWxw23GBwKxoU15vvaW7BTikVNAVBGAEXvc9fZpSVAvtknkmy",
  "key20": "4jT295SsUtEqwygWWxZ49XprBNrC8mFJWAyMNCjDjcY9HqvUfGKPSfxg3fd4pZ7sXQ5tg5HJ3JEcXWNEpf2AFDqa",
  "key21": "r5ctc9WL4diTnKo151bceyq6gfupB9t7VTz9wUXJjTVxXz7sURrZ13dwMr7584FPv1tJc6atGVvVjU8Dt8RZaSe",
  "key22": "4mtGtoTyyjA9KzVxkYRZ2JSfd7UretA7bq429Jcr8zhytDfin7zgmNB8mogEVej3r2RjdibXmPqYGhetr1tWgR5Z",
  "key23": "3ExTta995JAQ3tbwAWT6jHNGAVqTpzcKCNnPF9tFSYspUohNBJwbhVAGK2uLSKyN4nWrjH6ENpW7tZz3HVasnPr1",
  "key24": "3fGrpdvCpg4M65Ph8Xmjeg2pLHQ3haK2FwDNztEfEMhqF7y9HEZYTmBLwsQS3pcizFKDMmmwwPPoBBwqigecJhN",
  "key25": "3uY6tgxxnhDQX4DGcatqga5bWxfAkBjvTxT1qeruGQd3kyMeFzx97NK6Kk1Janh8wLBxsZtLGY2Hbhggfy8H57DE",
  "key26": "3UEgSBzExeRDsbF5et5sqknqT2oMKpZoNd7g9TTRWCHmuh9US5mswHwQNvWzjUnuAJH7k1Zt7EPnCQtvdmDUDZRV",
  "key27": "z7M8NxracpHepCdHSV9QupiFjC6SdAwvbXdBp7kNJqg3ZYKyWsNNAiqcdgoSSsng8R2yAZMc2dqURk6eRNJTU7p",
  "key28": "511j7vXDMQh82J8szSfxWumt4ZqCLvDkiyxBFR8Se38r5urgw5br9heRntG4Z4Sgqwi4T5i4P7xPbnpTTeEefDmj",
  "key29": "35cMz6kZ8Ck6qvQd7sxYx1RQUMRPPK7BJZUFDCDmemBsfwsoZbP6z5ZNQqcx8PxkkEnk7Xf7miVNJb7Gb8SHSgNo",
  "key30": "4RBxt6LNMNoLWe9HdCYfW4qYMM95Wwy2snDzGsSFT7TAFw7MicU2VPcYhNB7ecTF6nFfTe5UyVqgMGT33nYB5ZVQ",
  "key31": "5E6jZ26EximSPGqj9ma3fhV5F5A96bCSTL9fELf2xT169ZgJDQVQKNrRqR69TcobQCx1gncZK5X56BY42YNFWSt2",
  "key32": "4rKV3fHtZv6kWEadoxbW1gXgQxT56VA5d7D3PFaTyUwk39aCZRZm3RuNYg5ibxk73UJGVjdWjKaRAdZ2gZNrcV3V",
  "key33": "5388HweWST8yAnxkEXuxSLXU92VnCJLpkmBiSy9MxjPqqjcwzg1Nez4kb1dicXod7AFcvgGEwBEdg9NHg8hGXp7c",
  "key34": "4APXSmSdoJ4BP8ZQqRJmWMuuzQYsbsaDPt6gvjDjwphCn8nWzx4xDqNrH2yPAgRaDEtPzK12MsDHwdNnnhA83dSS",
  "key35": "5mmsFi6Z4ss3vaFuW5KVxQ8hirbbHsgNKZm4YZ2KCgU2yqDawbdPoB7bDaDsabXnaA15AYkGLxrAbJZNyGLxADWb",
  "key36": "bMohF5FkbnzgMwN2jWbXhMXBYmqNbDBmh2SEn5E8xDaKoEsiz64jkP8BTdq3hd3dcAXw3Z7RAiyxiHJfeqz7BAm"
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
