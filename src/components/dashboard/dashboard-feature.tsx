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
    "JUdXu9MJVfP1EQi7cV8kqNqFmjwgnt2NWy4pYVFet7iJCuF4F4utagh9E4LbWrqjphaygBvypSAJr695mzc8srk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r7cHXgpeFcNcEuTpUFk4J3pHNhVEizZbEwREYpR5SMVSrWEA7NQYTiFtBE7uHK6FixWo37NgTZDBoFyaUyjv11D",
  "key1": "3ndacNB2RrHVQVYaWvoLwJHYtnNGwpAnKB8Fqrf1Cj8tn9Xp8vaxi4si98XGpFbtQYa1J6kv1mbyvHthgAV5WnGk",
  "key2": "4e4bQFaRUySLabxy1isN6YvyGt5szu5xjJb41GMk6hivqhw48rXzzCtprxhbUaa5WndgUsHffeeJKEXYZx535NoC",
  "key3": "4mrJhRmq4BogkYmkCveL1ZahXnDv5zaktgZQSZRcPF17F2ZQ3eacrM5jWe4Zoe1r2PJiTdB22X9DL3cTPU1SRz2S",
  "key4": "cDkwCwLTqRNosyWLrcKzAyUGGLfPUJFEvcY3hru1NKqyxach9Hu74hSKwocJv3yB3R41sWYQvL9t8yjNcCmB3tB",
  "key5": "24t4fvdRTg9DjMdGjFTiQmiYSNzm4fQzMnz2kb3upQVEcTPdphAwjneBvpwVyvk4nkYFVeecjHUG8Pi5Adifj764",
  "key6": "2pZX8YYHmbJWmDvo3GR4BVroZtGJbxtgS8h5vAHkAYdP21Tjyz2MA3dMHsQTZKfxngqJj3jVxDCkc5sVUZbnSTEP",
  "key7": "5W5LYfAe6X2YfNKGw5QT1RGBbZzL5G8sbsJ7snet7ZeyMv7uqD84y6oMGRCaA7zPfvR9msBrfHvodbcwwhbeiw5d",
  "key8": "3S5qnD9pKFCKhuDuUyBiYQRXAA8wE3aVaayPw21r3m4Xs3wW1PfLFRoyNKX98ZqvK874wZRs6SD3QQgJga9ySwHa",
  "key9": "3vh3ptFayvwGungqthWTWiv18RDwYVb6WLPdB7Ys7c3t6YdFVcDKr3YpPDMYB4F2HHbvbE1nJdBedc8hmBXaJUqL",
  "key10": "3dLC76gPPx6mjQXxVZx4bsUK7vdF5zys693mUE8ti4hxE1YkrWavtkp4L5ENZW3Ck5utzXxHvFLv1zHzw6rzBRa8",
  "key11": "UTtjMsSto4xBPtGq7RuNMCyuBhbaG8E6gNDG1gDQ5uTMUM5YgPLUyxcVPivXZFbiDyENPpzwLzY1tutVmfvZLGd",
  "key12": "4J9QE7cMadXwLkHYzwymQvudAaG87VqFkLveMkdXP2vaaULi8M5jB9AuA6u7o9pHr2ggaWP1E3AtV7jhsnxDb7BA",
  "key13": "5r8m7iHqoe9kLA2RrsVAuDYJzct4V6C5KE2Zxtj5cW9r8mzSibV9YX36FPETccreKh1xVAcRZrFd74D1avb3AHbk",
  "key14": "3bkwqvKnmbzZPCTPNJLtgTzBAw1WGLmQ21e7stoVJHCM6K3qEbxk4LeV8kiTEiQxBUZsv38o4EiJFm2q8L7Modnt",
  "key15": "3J9VVPnfHNr2gMef9ZUpkEPD69Dy2RkUVUeGfDapDPb3BvyaqjLNzssJ8JqfKf57pAk5rChLPj7N285sFsVn4xhN",
  "key16": "3CXw3Ex9ANaNp3gXjwkMo7e669DDnzebN3hed9oT2HURc9U65MjzwaT6wumA2X9UPwzorBPMT9p1noQEdtGY2Pfw",
  "key17": "36dT9QUh3cjffDNqS1MKuxbEWD978gjZh6XfbNp51dKYyWw23wqLvXXa5jWYBRfgzyjusj4p3QYc3T1j5UXmnUL9",
  "key18": "4AK4xXp1yq287hso84wMF3AoWmQpqXR1mVTCvBC4ZJoFKiBuyK71A8GLU2iwU94Hfut7Src8n5eB7pemWQhR2zgU",
  "key19": "5ycwx5KnocZLpL4Pbmr4WbnHFDLX1bjcDoaimyuEAj4dZcT9N6gzWBdLQArXKmwVwovriiY7Stekp4FDf9fjxvvd",
  "key20": "jUon8auUTc8kCmV2kH54qRvzrUaZCqZKAPmfXPcqV5X2mTii1VTbFjEA8gPGAg99PuNuSyQhXdgZQfowwy8H43q",
  "key21": "2VMeuNzLsvfQF8mAkqVyKBnJbiMgLaKpWFzrbjwMQM6XwQCz3A6Cx9pFjqibBbCAWq6PwxWzj7azG13HuWZhSR6",
  "key22": "2Tyo5XrwCcMywyvzF6Yipzqc5kXUWwvNiHZy3RDavHUeG1SbiX6ySG7UD3V99idb315jPAGZeZSmMvQxoqNGLoVG",
  "key23": "2KNzTChk29xBQ36wsA25FLcF7V2jHybV8ABnULwxhqDsCf6b15Ca5c1rfrnMNZg5unXt5hgJCbaSE1RExFGhZBW1",
  "key24": "64ntGWCf3r1CpxDMLYCryo7hBKjMUrYTZawGiCFoiim5KFhqDLVFTChPWRuUJwyEZVxxp43zn422iLAhwL4ffhyj",
  "key25": "25TXw3qwThiQ364meqztY4iYEsJDpAZRwYituV4WmtyjhetWfXrnu6tgYbd3QSNkPjusickBLDS6AhP8Xh9BccLh",
  "key26": "yuwoTasjEYJUJytS13FVfZUJK1NaE54pPHsbW98kaWTh4TYjpFc4y15wYzQaRTYTGMsL8MatQiobaNsN3ADo9pU",
  "key27": "NBzjAaGHtQdBtsMwLSomy5GLs4zqEagxczpJD5juY5s5newQDLdER9T5BhAM1bmQWwYP5tnocjNYRHBJmGooMAG",
  "key28": "4LZu9qvU7pNUE71iCo94EEXgXkAauXXkiPyzzSno9VuGTWzKvQ4P9eTdg2seMtuQ9Syev6hT66aKGdW4sQ4CBWx4",
  "key29": "KVEw4B1cawKmXLYoEbjCQBsXE42zU34iCvSfSsaLGcuPbsuKymoQMZ2ge8DjaGexQfUU4KCq83j2Dw5kibvWeoN",
  "key30": "59WkDzYurU38w2H29yBc2CPFmTiQcceHDvjDzagSgf5fxirKsrvd2bmAKEkJAKsDyt8UF7jFLmeD3MaetkvvoNzM",
  "key31": "2P91845fR5aCk31v4daqAkAFcdDwNzuiTkdaAoXg92Lfvh5GssUQSf1tpbbyQa7SpnsnG1nDtMDrFMEvUHN9tpET",
  "key32": "2RYH9GNNnDo1M9wE87grTEP2sUUi5QitT56f1SZ7Na7vqrihnsMwF42DsXfA7YPVqMvWLArPGZJ6M6c2QHKuR7Hs",
  "key33": "2fdoUYmYaW2VckVjzoHJYtbKaeTzZ1pZUikn8gjMhjwgpqwyXsGsRjSS7a4A6wymvv7JBgBzTsoJ5DcrndFgCRFt",
  "key34": "hS4tiLh56chKFwEnPigWYgRRpT7gNVsNNeosrn5iLiFEiUCm4TX57kJbpKFALiirRHJmZWaaSowsdHCAKju45uG",
  "key35": "3ncivk6HicByJpqBc3WCwVomUP65CgZvXFvnGTxTytmNhXiojb2Bpuow6A2PTYedueanBbkktJ7YQeZ4VYFyoG6T",
  "key36": "5N87jx4VsKcKxvnaCmuSMLBc1ypwvajunxJGjvW3Zf2JuDqDpXiLARYqN54PqnhChFJSCKEsSujYrbrEUfQ7Lbms",
  "key37": "TtDN39pmTd7reHjWV6QTKpeukcYfeoLNndZZD31mmLSaxC3ASXdHPS5H6vXD9LXzCuc6jCN5PafAX2DRYYyBFXq",
  "key38": "3y3kZY39KnSF5NdsKHR3cRCJWM9q8Rq1NS2pG8ASSJc1iH6KYeqn2EfDJPFez3q6gZVFp13rWmxBncHK2daVybgT",
  "key39": "2h5CqhXck7CSEEDv2m1ddZiihUuvPmd36sHgs7rZDdoukY4BSSvVuENWzA5DVsv7Q1KN3jDHg4evWjE4yVN9q3VS",
  "key40": "5xvyQWTofuoPheykZvAzLYBsN7jBXkamZofsco44q4skSWSxBvJBzXwhQnKBeUfUfJ8NyYBQ1vmBtRsDChgRVr47",
  "key41": "5cTHw5bM8utDKXmdGWP2tnY6AjQrpoi9vB4SsRXJi3x6B45AUgVFygZNG9nkoEqy6hhX9JgMgupZgBxyiRzpm5Hn",
  "key42": "41LynJpnNGvtULtYPLHpbfU8FNpPq71fcfR1EBS9WNP5pysv6odVcLeQdTvWo9f4CSs4Ft9hFVhKqsXn2shoLqrv",
  "key43": "3NHWUGBw6Xaz8pzwPAgKMHcPaKhEsF7Uq4Pa2nBW862ozGzGYxVCDNcCwvcaseBBiopmAx13Uhm9XeTZRznrNqXA",
  "key44": "2VwjGfmmWmsGWw6eBS4HmXkajDaEx8AnpbiKwnwKcyj3em9kxwPCJSt33SnwAFTaoHjLo4phCGAT4RjuPqLzMjPZ",
  "key45": "63Gv7V8KCYsiiLVaZXPbFvecSKJcv5L3HQWDXixcYsWwsUnTCFesHZ3EV4ZgZWW886iDTTgdPALvKiL3u3EuaWad"
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
