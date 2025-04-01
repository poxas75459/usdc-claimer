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
    "2ckENL5kqJGMoRPsF7HHnGPcUpDqXXsWvPsbLJRfYwgnunafsSzSwZi4YzE2VaFPDBjH1fJnSqVeRXUNz1h21cES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HBpRQ8TZbnxHAVQadSpCtiXZpjKph5omgwE3LXpYBMVGZBPsSaQtMht8DfiunfshspzHshYc3qdk8a8oxbRdhXQ",
  "key1": "2UJvW36H5VveRoaF5NQ17kR76DzRP4jNBAKBr85Akn6GoLM4NQ8XHiViCVSwcvs2eR72ShFM3QiNSgq4RBrGj1tt",
  "key2": "h2Dagff8Se75PjpLvaYT3DEZj5E1vU55oEyPnEGuqqdGShXSQyNtXan8y4HMBPJVUiUpHNupS59Pfs6VQvzVroE",
  "key3": "Z2iS7FyEMmakxTLARC3DTreUR9TLAf1S29HbfSUtp92gqZ79Ctrkh9bE6QYyEKRrTvPpKEVzQEdoRgJ2LJWAhVS",
  "key4": "2Zy5X239uHYKy36brPrgqTtwrXqBDYkVVRN4MZoEyMyW68kuct3kgBXkTcn1Wek6yqq95WsD8tzktiMjhcm3rWzU",
  "key5": "5vKHG87irmFyB437Ltwbi6Uecx5msMCkDoj71UMCfvHXsHg7Djpx3voXP3yR2quLQGVjPTtS3ApJzcpjuH4Eu3fh",
  "key6": "2aNkUm6jYFDDjtXd8T2vVu4GP9wFiMtubr63nEeKJF6wnwgjU4KGJd81zkwnNQvcqnVLjKqfAF8Pa4YjUCpJ1vtG",
  "key7": "3j2mycfAZSWqo1znUZs3A16TEZ23XFpGwnKabfdLsR4zLRgaVpSxV57n22f6hSyeBFnPCUKNqcBdH36X6rC2T3y1",
  "key8": "2h5fDbyaqB1BZErgYM812ovvDmsp4vzBJH6edF5vonvHeyNtvZQY3FpfJXWiTPibg4WXxTeYDiaMxQRsW7ELF4Ln",
  "key9": "9gx83w4D6b4tgdArX5Uw3373kd9QiTTGWthYEEeX4VFqmdvuE2egQN8YwgQsNen4QjGYc48Nb6S6A2UECLujtxG",
  "key10": "559seYJRj5R3DQiy5GmhHQ3YFp9yL8EkSuR9yv2XLqbDAXXeU1st9RNzKbyKLoiz7BUYiELXSizdZNwDP65tYNzo",
  "key11": "4p2R3SzcsvzxCt7xFZcQU4CVwG3DUotbtV2Vi7PGoDPqMpCSDxZzAaM2taWXrUSk27aiFsXpTc8jbwmano5NGGAk",
  "key12": "6s1BuZV8DZ6vCEmV8NzmD5ip15omFRYXAj36dUkWM8aoyowtF5rfTt136h1SKrigqizHnbP74QWWoqJ8JD5TvEo",
  "key13": "64xyQDiT3D9t3WqxYmsgHETkM6VUpX3WLcRgZ49uzGRMUkHrqxGECcjMgL43H4C4rCEWALr2wd3CteR8eN1U7YDn",
  "key14": "5DqJS3WATAsMMSaKPMpjqmAyGozYi2DmmaXtUmpf9HQFnvkRUVEoCk5kdu5PnCxEWTpbCUZk2HHdoAq3TrVe1Dk5",
  "key15": "2eig61GN2wJG4qD3RWMe3C6ENEoBx4xYJguM3AFFAHjWXX5Ha8SL7fDM2QNr25uG9QfJZA7WMnqwoCda8oJzz4tL",
  "key16": "4GsH4usVNaULZeC5TwRHA19KePsESXyAo3aTDjyu2CHY3zYKgBnxCmTDR7A1Rojwrp5KKkC7d5jZ4ZMSWoFNSuPV",
  "key17": "5Zf1NVzvS2a13K5Q89AGfD84Mmd6hm6uDX6rww6ZSXdpW7n7ehuMado6xqjXE2k78JxqfYobwz7B89Qg7jXEVpFF",
  "key18": "3phH93vSiaJvaYT8A6ptfrj5PW3cfuKtZP8wexymi79E53NBdio8oc1jhaiax4CysRfK8GbsnsW75ais4WpyeDgG",
  "key19": "49W3r2Wkfvx8K8oBZRACf4vgtMhX19oDaMjRF3u6vgW8wMgMhzNApAvfnBbDSnNMUCFH8EZTSaiKo6zkWzTTD3Sg",
  "key20": "5TPQUweUnXVQtoDakoRK88GEKTR4mGGg343sWDphp543xrs5cB3Y8rVky12fZ3TKoMy6zhXxSRZvHq6f7Wj3xHeG",
  "key21": "5D2G5XSw7E8UhiDuYmMMLW2ZxtBP1YpAXha53MxWDokKg3wzBt5bJcU6LESEespSziSrALLHbu3nRSmqN4c2rSAR",
  "key22": "4hTN72tDrLqKjVvD4jv4eBh1RRPqo8w9fVqNY1wCBSFHWN9kjjDXSGUDxVcuGxAkGEwD7F5ibox56uUgDfEm2csA",
  "key23": "2YqbkmcHK2uSBuGFwJWDADutdSQ22ZoN79zXa8jqZkJT4qsa6SCdeq2Joqx3bjjJGhQ1KAJCGgTeCrqmzhowz4U9",
  "key24": "2wnx63cRyboBzL9QXmMGQt4GuDrinRubdbMvSfiBgPGth6mY2mLyGfPDuMXR3S7uEBokRLCxqnVdj6Wwt6ZxFhHz",
  "key25": "2XvxeQMZJsfDoSkFg9qXLepr1qw671w3KAF66iBBof3BvDe4go45bo3BSfL7MreeakAhcaLeqDpyWLXfhSGyf8Yk",
  "key26": "2KRjgidxdbZxW49XvJyGBJisSjWVkx1ua3qXFsPrZPi2pP9JRacunr7oFZjteXPUcPvK2TLRSTkrZ9L61frGvFSA",
  "key27": "454wgDwRaFmmAdHzF8sK5GzhGq4g6NtUiNTcdEY2EtjtRCXdkEXJMzxLYV2mTxV3DFYHUJanZM1pz72CdzWVnVDx",
  "key28": "HT4T3LPiteEH6meUNF6AC56nYzxDb5DknVdK9wD2tMzgG4H8yAQsHePwdDrjDV8ABQ5Dt8q1sxN8FdBcCQXmJWg",
  "key29": "4HHztAkfyogYp6zquQBvd6t5d3ziSioy1kQnNXy2eyp5zye2hC1grTjmSvXCLBud6qVuPjq9nCwmKpQcum9BsczH",
  "key30": "kA9uhQxhfbCJR17ZPP6DNjHnmQ6Zp3wERnFZngu1iV2rxgCQkJWb4rfs8mqbwMpy8T3uUqB19fW4LqfQGS9SDq5",
  "key31": "5GNZxu49agzZmLYX2LLFjZ6UdFvy488UYg6UwMuPw7xPEW1gZevXTXHYb9pNK5zDXd5QC2QS4GS2MfkW5b3bsEo5",
  "key32": "eSweL1eWJhkL9eDExMrobtooAFQFFbiBMwDeeXwQpZZqkyexu55Y5juU2ax5j6mzKkcC5cVCyzxqD7WbzmKQhTv",
  "key33": "2aLMbLaSk7ii8RBziKRpG85e8oCQSM5sxdqDZo1wBAKaqUVoCKELgs3DxfbbKUhwkZJKHA1uGA7XWNYNJE6AL392",
  "key34": "4CRtZBVgqVrVuU8R7zwKPbxW8aZWbH3tABWw5gLY8XrPXETggvmYDndpr87yBdZ95jUTB6J1Qb7DCucTAAk29M1L",
  "key35": "2rtqMAqeFPuB1nzAjKVnkmFbM61aBHUCTmrp2sBpJAJ72GNWHyQWTYR6AUAJhYFYvZk7fVTbishjfkms7XqQeWE7",
  "key36": "TzYYn6zr59s1YmWGp38KkU2cMV1n5ibgEuyuCSu2ERy9WTC4ZZDYWcAKBJK9gaetYi55C8ZWUkycQTguQFH3WJJ",
  "key37": "3oSk6FPJ3zDMY7GtSWp3KEthk3izVh5hNK4m9YJvp4cLCqQ6kSj7GxtPhJm9jhCJYKL51FdovkwSGPtBT9jrX1FX",
  "key38": "2Jd6rSVBkAH8JsSaUekSyDummxktwQRmjUSxCUWd58viKPBL2yH3jBoNXtVQWVVtaHdF22oPb8RWHqcSQ1FeqrRg",
  "key39": "33XqtsJp2zauoBrRbnGEF9dyWSn6yf6qgRVPDSDgDgUJFxz1bXUjahCMRPfuFT9KsdQDpGK8MiGHjfHAyZYrbe1D",
  "key40": "4Q5wBCEhsS93RQa3jYCKWHe8Nz9rr4Chkfg5TpANqis2VQTDHpe4kUZDs2vSi4ucd4jTaLcycPnUVfx1bYGmwoYS",
  "key41": "5mt6QrAc7SPQbg4K1eW2c22BfbwwuHHpsvXgDscxxrS5sB3n4tNdBwMFpGrHpMBwmNvZFGc5tqRjCUx4U5PMbGGc",
  "key42": "54meDbZxwtdYqRpfomKhkqjfWShkyCGXHJKtsLjF68PGG9arosmpETzLGnVNzt9j3bHa2my6GXbDnT3zZmXKx3nn",
  "key43": "2WsfFsnPHJBYGc2z7z93aLXUPCvoqbW5vMbCzjV6cxzDbGBscMAUHQKbKy3UxixDhey77HwivBYaGkJvXcyaYFKp",
  "key44": "5NSHHGEF2Ds2tjpTixMficJq8hWXxgukHU5j3mKbhBbsBN7w41WPrx8mqWMxhw7Zqg9wUdRsUcrr4KiSQrvkwfHT",
  "key45": "34nJr5pJzdMMjsVjpvFfVcnrYZiUL3EhT6KiaigXNgW6kqBpKAqMPwPCmp2JJE2VYN3QtGP16sYLvirH4hGEAYV",
  "key46": "3GRQvXB2uYULZFbwRC9Ftu1UdpLuk4zEqRBWkSt3uRZvGxuoxkWbG8bMXQGsMZdEQUDKppHdmrAwquJLx2KebYnh",
  "key47": "2ULhCiQFDG8iwzFKXpuP7joUdqSNkyrP2hPsSLUjwcrzqh7r3c7dWJsBZtGpLCFHDV9wPZxgdhj9LZ6rxRHRBxCk",
  "key48": "2dnEowqeMx9Nwmtkb4B677k5sMVeBstRPgoQN2A31whSrkTJKCvPMLaWWyaX3G4JEPJ7578Pgsy2kMg46kRm5ncB"
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
