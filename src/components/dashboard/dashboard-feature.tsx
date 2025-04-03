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
    "3MDVdWsCemnSryiEhaYfP4NRSXFAU4GV1y2eyNY5kra5Y54PxxAupBjJCpXZAwjymkrHCdYnjFu4MMEmsZGAsafB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nvDjQUoNSyYj1qxfu1By5NHS8naoG3aQnatGY2meqR8yuzHisvoF6xpYhEmay3avNaDRnLmZ6DAHT8NtbetYUTv",
  "key1": "3mAt4T2qLFr3P2VByQm6A8LNbd5y4ZcN4cp2AtWVzsXpcXbiSm5xm4pQkt2rJXhsngBFTE2VMvnT2JStkhXkAvAM",
  "key2": "5ETSChqsQQhacjwoFraWKnQuiApQyvtQ941L751vkiBtwaRvbErfawAQ13SME7GCo5Zms6Q7Cgmp3tcmVo1Y6NDw",
  "key3": "4Sa7nwgzx2DCJ26v1XdNMJTWwE7GwpMmSfCN8uKD9n8PYjEkmU8EtygzXG2tQUrwLST7LJmsw3VvxLb2vYraEYTu",
  "key4": "5qKaRHSzB4DFNezMK1hTxCN6Ucecx4eztzA8rARReWz7cQbMSKvfqQTpF5dNFQY2PmbaVBtGzVm8T3MLHRm2uhUt",
  "key5": "5QFKpDSkFHXDQ9VD9j6GQQgHA9zu4ZNsEWVqUwERVuD8AB3tLbtgJCAj3Xpze1riAKDXRp2d3FkGE4DFXDkj3B4e",
  "key6": "3aAXJeHr93RuXBGLBSJbt9svd2DZyFy1ucMDSXEkV71AwrKWegim4UEjmGmY2cfrSQgV6nnkTZXfuFsGsWXU96Er",
  "key7": "EQUB6F7sJQxrDYoX6h5n5TZEfNC4aw4WDsx3trgHmbdDe5gmSnpjfe6L6UpqFf4R8ME9yVZTLHBpEVSKHYRkWn7",
  "key8": "2cPen3ddinJKCNqGoiFJDfeG1PZD8Yzos7fVzTTPMWptjDfEYqsuhNcsAr7fZDFJjJkHXJNEusy7t7pNwPaioq8f",
  "key9": "4cx6SAZwE7pqvfUHuYL1PPLQv1G88ANvtPgTLaf1LVVvcEvUqiWWzSuMfy2fAyY2gsguRF6YCyvnQiJVd2jby2mi",
  "key10": "3SkNPJGhiDN3FF1GeGEnUxjLoogLxBTb5KxqLssseG27mgbByPjsBRCahgHt3hxBh2qTqv5Ri5CR9mjk4sbv1zHt",
  "key11": "5LvfMTMQCfsZ8tFRTKKSEH6C5riMW5EkMZ5rukbqpBaSkN6qkmGV3GRFih7QA1V35PSXjxKgS5FignXigxUuydEB",
  "key12": "5qAGFZNQAKKPThKRsk6KGhWmSmLfxefpwygpodHh6XvtzM9RKuZXsL94nAxYvvrPhSTc4KpAnUya5gbCr9G5QSwh",
  "key13": "5smeh16VrjPMMZyGA1qz7gUvvAmbb5TK6fwWMhM9fLfAykKEX12bBxxBkSQBPYrJDQd4CgejrL4ziJwNVs5UjL7a",
  "key14": "4kNwT8Y2Ry8LbDxoZv3gsBVz2Y4pbuP9TxZ3TXbQkhHerAJrC9Vo7qzAhM163Nmo6LjZPXcZvBceVyZHe4ANyihs",
  "key15": "5UcrdYJSGWjJaPd7ygsJnbj9UnXpw5Qcui7PD6Kg9ABccP2kMG7KyCjPEpe4FfMqi1J6CfzEgmgUh1dBThHCTwPc",
  "key16": "3m283aG83VTgTZWUPoDNXqbEDnpgbzGgMCHmbPKv3ViKEcGrfmprS43Mj4EqC3Mc7wkAD6ELcMoZsezySNTTihu5",
  "key17": "A4wuDVXyqS79CVHX11ysSSMtU7zoL5cTLzUNe42DQKaG6b82q3rWCnVjvGRWXZUFDergR9bwjp4RqCnZWRpMLqt",
  "key18": "HKVfLDW9mHY7C7KdaHxicFQVJQvS7RK9VgmNJUrBHt9od6HDSxQrvjQbtXKiqQ3NKF5KkGBmUCatw8jPLKYtnr5",
  "key19": "4ex8KtarRcGWv65GqQAe6EyJqtLEMBXCJgQQ7dyJcfB4cuZutwZUGso51m6wzff4579nUoDPjiTHYUpDwbE3RqGT",
  "key20": "4VgZJubDFDjULhzv9UEFCZ1nfmPrJzvzM7woBZskWaW3esRpFJ9GGcBhTXLKRep3x5UGHBdRDr7wRKp5MmCx2fCp",
  "key21": "2qXNRJw9DqNF4AAbzxdTuz2KUMzdd85yXB1j6C6eYrxnrCQm92VPwRFiLmXkT2JULjV6amMxkUKGjyWmYJ44Q8ey",
  "key22": "5mDw79dzey27LcUUFtfj7ioqWazeU8EXwciM1iZSZ3Hzpk7XAzYSvjgYtiqZ2jr8VKx8MBPDBVDR1paKpJvHaNma",
  "key23": "4YqyxQQDa7gYcqXTktMuVcXU89hFD7hainCoPNZwJ5oFETsS5sGqhPE5xACSqiCF1m2CYCQVPdjwusKaKHmJdGJm",
  "key24": "49S3WzBBcS8bpp5kFevQHidNvgGoJD1cZGJi1d6DPAeWsFZgvhZGfESTPdD1JeA6UPGhW6pGUt9DETYnYKMzKiaN",
  "key25": "5ZntLPUW7zXtDLGEyEaGiXftP6JHKBNz8GtmBYcYTehJGCmMMY8T5TkifA39cZA2GUqm3HEmDoneJfDX7W8S12Mh",
  "key26": "5bb9wBgPcM9nVvz2cwLQiEz92g1bcpcBuoe2VefFJ74X71EkuuWthg1R3Z6csfZ5T1veC6sZpvcfhrCR6w34Ctjf",
  "key27": "5HssC4LSmruDkYHC54DuFvJNE2T5VcRXQGDcnFpvjVjW43p6zFfgGqczWigicdmVAFseqJQUDuiwAvZgYm7m1Qck",
  "key28": "5fPTKhMiJnGe56jRmvVc9GKAESz8rAuuQ8r7hafyEFJAJhNEURM9DYnBbYAfGqzbEPgzGeH88gaxv1mr43brV9Zm",
  "key29": "62DrvHf643nkaddcXUpceaXzvMSwwAtRPshrXHejkWcf7UDKrHJwp3EVCDLTUzUFqvkGCo2VZmiRqfiGipiW3UC6",
  "key30": "3jM4NMk1qTLwpGEbtWvssJ1JB4QUWiKZx5mB8BR1tZZ9VsCSjh1e2ZfyKewCF2QxxYxKAUtEegduevwGzYtjD4bu",
  "key31": "uymLwa7d5eW14mqFgezEJJ4eLBPBps6Wo3K7PYNVE8Wtv9psniZjWNXCJ8QERhgqqqdvAnzhd2pp2CgjphX4ewn",
  "key32": "2t11Nf6PchR3noihpMhNPJff9TfZ8gsxESXcb6eRojWnLAMjkEUokNd2g6xDPmZgPj3z6PiP1RdXyVxN7pmLorzi",
  "key33": "3KmF5Uj5da6rEsJFPnCci4poUQow61eUKuTnoR77TUXCkTb9FXFZNYTpuDmuaXNriAVv6yP66gt6hHDQ6NiP1a4K",
  "key34": "5zHadsecQ8SsUFnhffm9sWYaA8xEreJqy5VfsLpWBZ72cBCX24LqeEj8AuKqBuzk6U2BjaMrvmBEtbd22pdNhgcH",
  "key35": "26CvAXRrfjpEaXDzQnuXUevYySoPq8NKhLfFoEqRs4myVuutXUipA3xqqSrr4sEK9t84YS4neDgmVSFmA4LuTbGh",
  "key36": "ToTXaeEZoC7mb8rv4WB7pNqypEwWGc4kbY22QAUbmfwsLjxgGMDLwtctrFSaTSmstb6U5QX96dPi4S4jJ4s9Tjh",
  "key37": "4ySmr2cwadvoc1kpcP74MQGvJLRiaD4D1J8wgJTmEtmjDXWLsyZ5i8iHTwvoHdLuEyqJpCa2whQCVy1Vi7G3i3VQ",
  "key38": "42PgUqyNorCcgNVZvRe3oVUrfaB7ZzkZRxcn1qRxhvddkBMpwhmQPPFoJ5y5dzswLpbtjWX1fRGRRTsNbpJAvZw3",
  "key39": "5SikDsXhQ2Aj5czXW2dS5okLm1QFRbNe9DPdEK8qUPNPX8GnrBpM2d6GAcTviMx4Hf8XjW1KEJBD2mKftJbTwswK",
  "key40": "bTxeVmuxisxWCu1jKDwFpskLqMHxKhEAiQ6fwCpYqutgEL7ekPEaHjSb9xLiFm3u2dbSZutTxiJySE2WtPqb8bi",
  "key41": "M69iVzYSHfcimYU9CwjwsfuyGoX5amA9vB6FrW3HzPGroqpufZ6uisTcuToRg4VrC4R2jDyZmCmUCDA6mcsibBf",
  "key42": "5G48sF34moMNBiKKyhounuMihxZ3WSCvXVVgnFmMbjr2Jfz1tM33KZYLXciLqxBvAVDc6uzr9Cy2KPYJw6MMKtsF"
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
