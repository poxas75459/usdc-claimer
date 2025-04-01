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
    "5bVxy89Z2N4S4GFGN9FanM3VKXhvwLkrghzErCogKe93pwVeUoUDd4jdTpwzFQdgtWUtbQ4Nk7sQ5zknv4nLvsX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DEvrK5V9WZFBcgShMB9QE9BSWQjWnEG9TRW2QkxFGaQysfYLJzdaqQMWMsg53TghVhDkBczv8yp66Pir5nxg4GV",
  "key1": "dtiEL9RStYk3fL1oTK3MERcgGtQ58JXgEPp6DoHs2Ln1nW47HgzuFphFhTizZg3XXVKdMd7szYXKRd9MVPP4cHb",
  "key2": "4tr38kJs6xksXF852K3GXCURYEqHm9fVvobykQcyov75cY3vCKy99j8q4SJkKPDBPkzxkDbAEdBgGgXk1h3BaHjD",
  "key3": "m77ipx3kPLEnDVqnx214Ru7c75JxQviQ46LbqMWfYgCQyHqqDWyzGK9XKrwUax1AjLPSx2KedWgX1VMbkAb8tYt",
  "key4": "iPqpCa6sExARWsjgRdenwfwuyxJv5NYNaq3o1JCz8A7ApHbMcAkapbysWDwXoZS63BkVGdK2P3Z9u9fWMaiAnDN",
  "key5": "4a3Bfg9phDehdSCVMeShca43qYfnmKAZijmGRqM6tK9Lths75WVGf3dG5N32oEsPM17azRHsWrGSvN9q5gw6dwaM",
  "key6": "3mgkTZE9U44wKtooVPAXKDMWmWztBaJJyfWmbGMSGsHHfmYauwkurRF9qH3XUKsrBHJo4exG8PrT4hMF6MbgCidF",
  "key7": "54SvV3v7zZ4T1mjEeFeKEABLfV9nnmQaCw2FThHtZSuuQQ17UY9HqW3UFe4Pw6EY5zbNN6KdMomVY5XwzHW9QM3e",
  "key8": "3MysPso266CLXciftJZrVSbFrSUHgVjwSWbg3wsnLtU2a97cH41V9ao8brjBN65YkYR26rXGEHcrqMcTeAY4Aqxg",
  "key9": "333VTMUVUYDkj44idv8PC7zWXjHrqKFf5JFRb6hqDaFoM5kE224rYuSz8Atm1PyFQg6SVYyGrH7SSrJkxYSAEQ7",
  "key10": "HUHsxKvfbM6iaJFuREvecT7Dspnj2cY8eyrYakQc3dikWF5b8nJ7g7Sz5eJmDymeZfNKiVWGHfbX6hhGLdKZFpb",
  "key11": "3VzXvb3KaB291XBeh9hqyz4eHRavviB3kjDh6mxPnNpjPcXcVSstUUL5acQRz9BnhGPAknrkvkDHUDJM2vRwUjPJ",
  "key12": "DyoAquDnDoe4qW7njf6todnRAKpn49BubbsNhTKWNHYZtyfcE9wPb7x2gXDisMMVZFxPtFqcUKMVbwrhbTxAPKg",
  "key13": "215NzW4WqyonqrzmaTcRgMsLVF5voEJeF1iCQEKd4EraDCHZ8uJ7E9zQMuhXDxSGLKLZVApxkyQMeqqbx2mous8E",
  "key14": "39394axy5qSr8BDbfZhBLD5NopY3wV6m3KrgctBMZJkKo4WzwveEwXjnGfsAruyY7AEhEZLLncxPEddztFLpHx5b",
  "key15": "5DfNkQcSQkv2dqkzdD1YyKL7YEztEpi7iTZBgUQpdZ8dSZSY7bjG1DouBbY9dtgbfv5UT3rbE2MoaFfFRhEY62rN",
  "key16": "5nM7on6FDseeknTdQi9kh4YJTp1SF8FBQhFYm6zLw1PSv3FKR5AtrfknVdLvgjJJdpcdwsnZg6mdj96vTbAswhQ8",
  "key17": "33vy6saA5NehwrjnmBPPG3uyhq51DnwTEzm1zNfMXPzAFXGmTf7W1QjsCtHN42uzafJxQpjGWhoNjQcMTu1uaT89",
  "key18": "3n61Uuxr39MsmFwbb9kmWGT7rTQkAtNe6ezLwFrpQiidTGjUHNcb1g5QeNcPqwhM8RhfrUVAukRQ5b1zCu5cibYF",
  "key19": "464SjrQT8juwH9V7QNSVxnbkDkptCaXG3ECPT6o2B9CLvCFJ3H87N8N79C3fHQ2VniRfD6XwdWfP9aXexDyucKri",
  "key20": "2Hud5f9a5bL1eT5dUKE6m6HchR6ahUEYGwmqPmEAcx7qDa6jsb4BKn6PMuGZKttDYguahb4PJkad45n1Qat3Y7Uk",
  "key21": "2RdQtErjfB7gCxSgt8A7KycGkNBNjVz7uNdxs8gdyxNKM4KAwbQN6iD4E25861JTaYi8gyFG4ZqbiKeoUz9R4idb",
  "key22": "QTYXsb6f67ErAA2bUuVprv2g56GKw9BPYLspZ5LwDwpZVmT9FGTZpeSxcc21XksWWsfKNXTBHEqk4CYieGCmXuy",
  "key23": "G5muPH9VqsueX5AWmSqqaogH3Rme8RU8BxS4rvDo8We3DoNXY94QwR3tSuC5LYf2qfDcGinJzvzwa8gg8zv7GMw",
  "key24": "47EFWQ8ietgbNZCfHtXsM4kYhJwWQcPb3AaL1gHnFD52JWE5BPm8SDdiszedFheQbjPf9woG2JeUx1UApcDv2TPk",
  "key25": "3KVsGPNhzQWSCGRrhFZ393HsicMA3QHLQxym3TLH6jN6L6mpZVuTtS4eNNDT7HJFpJv4Wa9yM7NPCyjVKVtjxBQC",
  "key26": "4dXTEeV81hW6HPfe433mqMyn8bmimHYfxqNBhhpw3SyxeQkB2RHBxCbtv3MbkFqe9W1bpAFpRvYqhoUnzgVw7RGs",
  "key27": "2PuGY1xgpFaP6dQDwnBSVyjqV83vSwdJYLytuCNK9zmpg2EhEnHp3aH9BUbzDe2A2GK79iSQwRpfBX9596LuT1Vc",
  "key28": "3B65ipJimaz8cV9YTiCRSq1AAsXus1qfMxUpCWUAdRirC1svfUmQN8BFCUtrvTgYkqUpFsy6BdTRJPX3998AL8v5",
  "key29": "4yUJy2LEPZ5qT4E6mzqZM12tcv8UjhVhuiQv7GiyTZ1jP7wLCHrkXWQJEFwTnJGBXWBrREetsGFYxdrwKXMSL3Km",
  "key30": "2WmAUBziEfskkQRBdsDFbzh22MRTvAVsF7zB4Bcf1uSUJ2unHhXudAqEY2keHEBEjWoTDeQyekYG8nCdLSGaimA7",
  "key31": "5XGxJbccabEi6hh8BD7cFJUZwF8d2SPULkUQhuUhduRTua5cfEWWFrag9sJKaGNzkmUqaSEvLzuDyeoWKAC7gT9e",
  "key32": "3qNWWPR13WyTAZFVC7mgZb9zMUEx8RtSQ8u9StMaKopZBdLqCXVJTbDHLBUtTgsnKwaoRNNTYRuvVZTiLa6D7Gm8",
  "key33": "4NyPRHt62wPcqrCWp24yq5fYoYMRoH7KX7xmycsLZnRM17fH2hGDqhH4w6wu2fVqh1oL8Qx5bEiifHrFu8Q8RZoz",
  "key34": "4h8sPzzECPE5zFj1XxELzwXFKDM3zuAPVZLKdcKnA8AGZR9L4Nz3yoaahyC1onusXfvcKMqWC9ydhQQixbAdg4qg",
  "key35": "2hWcaEytXt7Sd2fjvbtcdMA25bMvR4Ku3si9YvCKtTL1ygrtm3a9dX1jPsAKwnGg31Ltruy15iWPMPnbfYHcTZKq",
  "key36": "3ttWuuTHo97eYHZ1562wzjPRHQXxmNx8HfNiFStQmzJ9Fyv91BSYaNNeEFkLXK6RKQchJ8tT7iGciXm9vn2fPKmo",
  "key37": "82rNab7ZsyPFT1QBrSmWmAa5kDHwU8JwNjGufoHiU8PQxDH8wXyCR4mreR8jrx1zBMSUHN33Wrhdz982zbf8Uub",
  "key38": "3VAa9vVXZHdSk9uxstDkjCw9UHy35zZ14pesgAsvPo6PN32U2YLDKmu4sMKch5E6dXxf3fgX47afkpr8RQ6aieJX",
  "key39": "4iRJn8g97znCjtdNS5QquqedrGQ6Tne2mNze8LZzGyetNwGQgxRbERZm8NY5PbchU2tX578JHJwRsJ7EZ1TrCkJJ",
  "key40": "5qgeffgwT6JUYEg6WNfaifURSrAhhFEDa5U5PmbVrxpjvbPgnZyND3WFSBc87Gbd4nmpjhmUdexbssVXb66YcA6b",
  "key41": "27vsXFNbVcaMjHwN9HZwUaJNXqUB2Mk7RErsopT3QYXoNycMiCwXP73ck1cgpQpSqR8fBnMZsKLwhDM6Pb1jBzS3",
  "key42": "4SuvmpTDjrUphXHTtav6qGL83Sf9hMFjZ9SwsbZnLQe3hnsZHoWzNo1PJDXoknrwhies7T3PfRDAYHHx3ie5nyry",
  "key43": "36yBZJ9iGu7dA9pKEBYbrnUftcRrcR7tufYB6qgSPqjMqra4xBPRUzv711GBnMpWqmWZAmWj6MdTNnuBjw8zPcFB",
  "key44": "a239roiJ3K9qd3xCGYLyaViAqE59JM9bEVpCUadMz2L8AtxPL6wmdmRrGpwWsrdJPwhQUj4N1ycjhQGfAGm9dRm",
  "key45": "2cH3gk8HKjNFQ6NGPm7DUM5mm2DHURVSf5KEjExrzNDV2xLaF9WFtJqxWUXRB4DVKxPu262jkbduCjWMx9SweBKJ",
  "key46": "3tqNiFqrsfgHVsMdSoPcB7ogbNRg6XQ3ccnsC9RhwLUfoqeNjt6QFzGkK1cRHctnL2RbbGruq8ELk5wGVZPy2bRX",
  "key47": "4mUNQ7XnXyM4ZRnRG3CVwKRMbBR7iLZExP746Z9e8ohSRVipHKKub5qAsGFcQ6RwJyznVvrw2TxUYHttZb9t8Zy5"
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
