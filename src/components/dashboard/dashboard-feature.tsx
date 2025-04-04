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
    "3FosmkzbqwpbfGGnYAR6nxYp6oydHixqTCRdAZ8yee9b76xmpJEzRRBKULh9ttZiVFbXd4E4AWNmBxuixrFNWTkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YPPf8FzZmtDWnQrTrtRryuWdWDQGPixtKsRkaTtD8dw14hkRQ3fiw1ZRoGj8pcv3eqCuSyZYURe6HKUjXJMZqTw",
  "key1": "29fGbTV73T59ApfbHYKuHWCntKja1fXq44imDqeHZezy2sTpW4rZPbKQSi8RZnNRz6Znb1Tr4fnmpUZ4bga4BHEa",
  "key2": "5aXrWE9Zp7RzTWofBzXQ5e5CRCj221z6B14gqk8CPcpgv9tLUA3Wo7VukCtyyoR52LJ8FQcMegK4dtH63LAyjkc",
  "key3": "L8SfaA86DipQSVGSfoRm7jckUZurHzbJQQ3328zLVZpbaTXN7N4UFCbMf5HHQHiVhgyXzabUQ3G4SG1H2i5e4Sj",
  "key4": "2VZopJYqxXsjiTZSVH47q44Zuu3SpjmV8enod47abrAoDc1eRA4n4JDav5sczsAvZMg5vfoPdoBDhvKyGkAtsDSr",
  "key5": "2MPWkTJggvnD7VtKVt5Z5c4jj7aE9qcYDVhJtVAbJRGEgz3vEHxgY2T5UwdxuWmN4AqcS3sXYZPVpYhDX2B3dMS1",
  "key6": "2donTBoxQhTGj9rTpxfN1fJpB92sSQFyDpZ4fgnwRisEpo1MGkwAv2PYBxWtcYAuUZjyVjGmf4rkz4ENsCqyR4jj",
  "key7": "273WethW15cGf17JNa8nVK4rF8KUQHj2cgWZpsameukvPMourxZPFh1qqGiRrwsj1n47cgw6PE4wL4XEmEnrJQvX",
  "key8": "doTrhuc8K9vynA92yMs9yZvJ2VBcv54uUzXDpGypP6UGbRoGmhdz6jbmrjnsoWJzrepGqNFCextE2LrCUYLoRmx",
  "key9": "2GxG1gLwoVs4TjFYhoejPguQ1M2XU1KJUA8KM1TXnA9zzi67Rh6MaVqxTerP19H5m1aCi4ksTY9VAHoZKn1hFoM4",
  "key10": "558dX3M5562cDQ66eXkuj1yvgMo3NvvFJxAhiySoRCbS43P4rH4w5ficBiXvm2WH4WUFwgfAWwLxyepn5xop5SmZ",
  "key11": "4jfeBr3KGAuUSwYwPifnKWDHZq8C4KM7we8BQDPpNACevJdFtWFHrea1BvLNsZXY6QTf16BAJRuNhUaZYGVxBZTt",
  "key12": "2QN8hRJ8LyqttR2CJ4AExEkXJJvjKCKxoyidjTzNDvRTRYauy2cHRmiA4V2wnKVmZ2RhaKa6T7UbCj1156NttJhg",
  "key13": "4DR4p7f6W4ryPmX6YHz6gSgovLH8GjuvLKU35N7XfLnJPz2J84TEAasj7PJU3LZt1rDRejiqumPxNh1ALizAaiuW",
  "key14": "5WiqpkRoSpoJjcRxE2GhbbC8CvKxzEFD6ibjjW9LD2w9Hpj6DJBW7Hj6YDGZib4VbiNev4gDGhnFjsANRR1pSX61",
  "key15": "JxfbERM9FfqCrTbSJKDKS1UfRUkac19k4zGwaB1DJsppPSabt6xttEBGvSkGFwgVquJFbJycZZF32XiV5HKCtWA",
  "key16": "5K7yA5sULNW9P3XuVKeycMdot1hpKFPJuK6xTVogfbTC7B2hUnGMU1GqSL98h8u9DPgUiEDTvvLcDrVCpQ2LQiVK",
  "key17": "4iy9MkbKWPCgwnHUhMefXMf5hP1kbr4Kx9LpTjHKz2VdVn2uZvg3Ck2ucFw77ULbefusAmX5hgDyBnhGL6xPKDCy",
  "key18": "56jQcjkhTV6zSoW1LaEoa2UitmrfC6BX7GD3ooWxLvoZtzFvt4MZ7mvKy3JaYkzGFNbEyzvJgZiJoXnH6mWLajPW",
  "key19": "d1CFLymADPnkaZiKfcYJipxauQAmFmoXbRRMuFTzvQtyS4chxnR5Uqb7TkxWMUMRVmQtVHuCyfCXikoKwRLPyCc",
  "key20": "o95CqDQjwASrhnY7ytC3fA7ysoJYe2HUYM2EPUw8vNPGJgSnUhBB85Q8WBHmhguvvZB6sSADtZ2iEn9FvKVLdA7",
  "key21": "K3ARy3VNyhymXQMP8w23c8pTCjEqzAXWn3KwzVvWVCk5oUARVAu4YXdNnGqKi8xTpRHYwnncAAjMEyMGMhxa6eA",
  "key22": "4BmCjuyJaE4FQ7taei5CBFtCsWBsd1e5gHgZNjmXNFbNWEkNytLaav9mm6CBtuXheKetj4FYZxuoJ8uvfCUmcAdG",
  "key23": "ncsMiaADZSNKGM2WejM2avVWF62kdPFbAZPRtH63iKkDo2HyxwnuHUuZ7ZqyaV1npxbrbYGzaztia7ZNm6K3wha",
  "key24": "57tp7gNwUQ8yyKcrMyi4jPf1fryvVUfxemvwdDVLgEMcezX3JVPw8WF6YWDug37stcr9fa93Rxn7WKLNEWYfkmEc",
  "key25": "1P9haPuf9vm5dBpVAXav5xaqFUGh4T21q8tuheMe7pwDwPhXBpvHSFBQorTnpC7PupioTtiBdB2aPvx34vdrQby",
  "key26": "3cWJn6Wf8EfdgAJzk4WgoFDTVwwHHXiPM3Uf5vrfHL8YUEpHtZQTCwbkN6ux2CTvgKYpGs8XizJfbCJLwpC9SYp",
  "key27": "2V4HisPWyJbXQBpFNv7HzbZceJFLD57ZNxYgqyPrYDF7NktSpCb4C6Ln9qNTNewn1kkfmemMmxNSU4V162kPdQwB",
  "key28": "aRJZgD44bqhr3AnVBgPTmACnKVVTVpAk1DGu18Z4shn9h8KKA2kuia4r8MK6HpH38FpRb6jvPsZcWwe9mBm5Pdj",
  "key29": "2ZPkedNpDdNo3eFGDDsfoA1CHshqUokEGY7AWHzTXcPGsWk1fjUQrckJbMYnQwCMV3c1EafTa2H8ioSz9ZeJ1BHx",
  "key30": "49sgYcPTrCMyvTBMCyjNbSmA5nKQcALZK8dZjMntHBgVFxSFCE3TpZL6UPSgAXru6uJ4GC8bpPCzCvLm8dSzYMV9",
  "key31": "T8NAjiN24veQwrHNmm7gyPeez3xyNfgHuqrQRxvTC9cmdvhsUwgF5dRS8dng1aGitzf2wRG4dNtNxyMxabFaEAS",
  "key32": "4aDRMWpahLMYGY3mvTr45y1skeGqBMRKtc4uuod37vzEQ6dph98gjB9aexwercbj93Ut1hnG4foMKoCxfuN52hT",
  "key33": "inGXjKVBxHjRUHEMKF4LTN4MRMkpA9edHVwFJYgraUrE6hf7nHLW3NjxLoDLEbY3cxsqeT4GRY4ZTdNzsyPxFGV",
  "key34": "4Qt3ZsEcmbxWWdFMY36716nxQjxkye2nZZpiibrG38t4JURSXsDpGM3KhtGeTjETNHHqp6Vke75GXVEqdvC4iPXk",
  "key35": "41r1eSFwk2YMTjsdZaMJ3sDMrtVtcJ1dUGQngHyas4MXPogjwp4RKYW9x73AWhu2vNRS7eSg5rckf7WxufppCFid",
  "key36": "26V4p3NAxgk8RDKB4LRL8CRy83GDAcoqJBJ8YwEt9w1cQ7JFatkyBZvyDDgQkWqpppJPbRmzAF89eo5cyw7kCs9j",
  "key37": "4DiXudvQtzyK92y9xrYJ5A3T5WUvjTLEyH4EZNwX96wjummedTaSPfxC7Uc2MhktkZAMFgwpqCNozPZuUnSgwheE"
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
