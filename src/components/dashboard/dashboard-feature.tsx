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
    "5zbobyeTNQDfMd1B8BmQ5YkzQRkc2Fyi2KuhEMePPNhQgcBkLuLJDDSX9ige6YazJmEvaTSVtuVwmC8fbxWm96dx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xbkNJcjEtbnq6N4X6srutPr46VYy1yrpd3UtNgGwkUFdmNC3TAyY8bYSmGkev9ySvCEZhYyE3W7ccUHEeFQxRJd",
  "key1": "3PsntDwobsnd3yfJN3pH2v7cPzefoSHc69bQyUTGDMre22tUae3q1a38CNMaoVPwe37cEyQunrhuqNNsh5txTrri",
  "key2": "4nb52ktAVT4URU8hAkjjXW9nZc2J3CtjDmYXVDawk5zwDaPGqbNFVo79JyrZWxKuRokd2k67dnfMkjxykcDZupFn",
  "key3": "oydASugcUbEeks89pDQrVbPhpakD5gmPhKDtvx958GrYN6zLGo2Nq9eGrS6vBwCTodpEpqxCJbEehzE14NCrshC",
  "key4": "szxGfpEio3XQwFrVHANwTpXBxR2bxarewHd6vS8BrmRW6iYey9JzwBNtPevkHygcDW4hFsNJ1gCCBZoWgXK1yUY",
  "key5": "4BnQNwiV7qtTPvpaHcixHNtBk6jBJoWnbtnvamNGwaSBJCH1UrXNkDFjWAQhdsN9ebSRD2oFpjfiRxJHh588sJ5N",
  "key6": "4E2kvVRtzAki4xvjqn7mwbcTkm5WQhEycystJ7mRb7rZZCBC3exvmV6qpjymyLTaNwoZH9aPpbT9XzqGr4Y6r2A1",
  "key7": "5BUoySiW5pesUx16PAtHwwgHpH7VTt5Ub4hBfikLgvDRC6gmABc6YSZqF3iocGUy49YvVZpiyCkBphNUDuF7FjdL",
  "key8": "4m1GqyQDQXHpm8wS2XT6mSYpYemV9FxuZPywETpQmnptBZBZ8SbKbwb7v65iASihU6wLGzYU8JVWDKeBsBmPE7Cd",
  "key9": "4t1XmZdW87hkn2chQszxe5otCfkWxXhEJg7hpEQ31CAQWozQQQPpVSdQUkQ8zVKpSRdaTeoDZQB3389PnXA54mpH",
  "key10": "4fgmqtgZq8kNhbaeRDGsNEbYUzDff2yi2MUvMJcZU9g9AEkEgvuV6AC52LByUMDRGtwpEctQvDq3tDhJsAvrkuEH",
  "key11": "GfP7sLFLR5iDEnCc1knfuMg4Va2jpwkGaVSgABHAh1i7wiGjD3NHbegztQzsWDRY1Z1E5y4nrrFh3ADfy8QY7vf",
  "key12": "36KkXn3fARtgRDHYEpgGCHzdN9USHSudXHyDuv7XmAnHwkbe37sqSV2nbUohFWjTgzWSpRPVWtnJR9wVFN7JZtXK",
  "key13": "2vQmybxp4gXRmzsLBT1MDpZyj1mt2JXcyYBpgfa1UUkuwc9Z6Jfa86ZMsdCvBN2RevtGJAP2cC7eG2h4Vf8hpENd",
  "key14": "3osnthiGf7SUkHZY4EddypambpwGTNG58u4yA4opvHEyGUN58ej6p1CXquNzHr1jk4RPLxEepvvkczNTDwHfKZ4P",
  "key15": "2dsj7HwQ4qbiVD9LrKV9wa1NGdk7mVHSSV1YfKRJpkiReJ9LoaEr7HpHY7EzHebpk418anZt389qjNGcK6YWQo6",
  "key16": "2DrCE3eNWajJtHkG8LMAGzpTBwk3oF11hYchw2nHPGzATmpBCS5Q43SBMJyLPocFMwu9gCMSap6aVCaemj7gVkt6",
  "key17": "4P8iaK5N5aoKTvfLLj8KdXFTTmbC39NEk1iFqZqibMaPS6JFPZtU23ch7fwFUYsd71Z9FpGbgk7e1aabHboJF58T",
  "key18": "BeJYuYhhUsSFokUyJ7bCEcNbJ4MiCE8RZzni8XyjsA6eq4qwg754ijgr2MYX11pZCfs381LApsMcdaydfmCmrth",
  "key19": "5vPJDb2Qy2oWBpT1Ceffxjvt2c6yNwgyDtwe5vbkQhAjbVJhn2nn7iz74YgPrvprBh3Unq8E9JrYdpMhzykLoKdQ",
  "key20": "37MnKybdNv5hh1m9To46gLfZgo6YA8SXobiHHHi8f6vEhRRHZ58Memk1L8ToSdSAGEes8mKtN9nYL4D3wDJubxbd",
  "key21": "qq9kJd9SNonqeDsDnSoR42Ps2JHywjXyAt8sRhbrhVkGJARCskVewGC47SEo3mVsoVosqqJi9kCxyKzoSwhTvYH",
  "key22": "3b8orgBxmqdYCA4oWyJZcaY6taNwkfNQH9A72B1FF4nFsPNyXcJeG5DuvvjCUMLeRmYEHcai7P83xHcYrNQXdxPU",
  "key23": "RabX4KwDefva2gDTrSWBTpvrtxyVpziMEAiE5DC53RyR9C3jEnxvBt33N36HHB9CHKTmuK8yKU7V4T5pEtfeUtV",
  "key24": "AGFB5KGG4j9AvPQavBC64E2gFE1UggknkXyk2hX8Qo1jDLkrV2PiQyWrALqGzrpcZ8M6rc8g2fq1ef2AkVEo8NT",
  "key25": "jgdnevLjZroF8Ryzi8nrnvbgCbLTv9kTki7m59n2u2nv9HAUDYQpVoVASHyQUww99PCBABGBF5otnYs4czdD87v",
  "key26": "5YucnZGcEyrzLcAwHHfG5eebZX16arHEY2NsX7kvFYdE5Jvx7YQwR4tE9E8J4eJCzpww4cF6LDjaQKaHBgmoeeZj",
  "key27": "vj9q8YjeKVhSNp1fyhF8QDnBH6SR8avhVxS7LD2CMeyLstUNNdLsyPSm8f19x4iFVqC1wDPpWHgXHxEMhG6qxLo",
  "key28": "1ni5rcSLY2GdD86sMQdSh4mm5e63pPXyuH57ujUA8Y86L4Vr8rJki3iEWghiiqzQTAJ5JpC6xjTNSsUoPucM22R",
  "key29": "4H7iDw2XrKyqBe85mqK1up96TW8fmFRZe61PG8PHuXKDSgMxteHtuAAiPXXoybud4oarU5xVup1P2teLhWVut4Qr",
  "key30": "4H281hiEZAZnQo8VAeY8yHuv15hTKSa6ypEG8dy9Cz5pDSnSfy2Jxm1HxqCNskXUUDAtKvwH52eWXSThzjmFPFGG",
  "key31": "3VtSX8hmcZHD1tDShfBsXaeQD39WDyp6g35TMejunUsNLWk3frkR4URkPzTkzyGGKZVyZUshptVHRBW2qvvx5FMk",
  "key32": "34EecTxi32GJXFZdnXU4vf4DsVR4kPgqPZovLoVVbyESccv7pc3LFkoWvCGXiCDm4eRLtzM2s3jqdGXZVTkQ3pXb",
  "key33": "mb1xPqXBUtVmA1esEboepJSwudFExLWPEoeDmMuqE71uAVCFnkfYkNhXHtxEH7GQZBsvNEQHgphgSXBWLqBNSWq",
  "key34": "1G1xwsaSZwyGLyLHneES7ZCSNByt2d4D6g2whYSm5sYoXnf85acy7H9Dbq692kPyF8cETNDk4iSLH2bmDUPhAcn",
  "key35": "AuPMVydgweBpr9na19okHJwTviPuTpRpx2vTVZzWfCx6HCEKS3UYJdgycjyuxE6JgD6pmtF1fSN7GAcBsEaBrCk",
  "key36": "5Pagwuf9qYa5W1aeGdW54z4izAyiusnXeVYx9UQyb3k16aPKZ857bLA4ZrFoa4M9znS4QUf2RTFyK8cB5ryzaxPe",
  "key37": "2nrkbq4ZixLn8E9sDRzHqfP6BCeb3XEtX8b293rbNEEvfTeAeXX7tUbpCA5Qmrgi8aYc9exqdNvRn5xunguppikG",
  "key38": "xeSzSNr1ivLTFL2pme2EXYKvD1mL6a1pKUoSHBEUCA9JZmDDjhyhyniLC1WauJFt6JPx9tvxMBcCpqtdFeS2NGo",
  "key39": "3ix5yrdmi4dUFC6Z5gKzf7ZQiZ1x1hMEGTQNBoWWSeCYv6QEBMQT1XGh6WXw4KwY8gUaQNprrrnyH2aAuKPPeyAM",
  "key40": "5ojrZWYpVTHGZbBGyoW3gVnuUT167XAixFDprbMqMDevhJ1YWdZskWHGpf6FPkrSprmSfGZwYErcmozZi69hNyHX",
  "key41": "6QdbdSNjNX8ZiRixDGLWUKG53TZbyp33MXBkYRJK3nVY9JXb4qjQNaaimDhRz48bB4pdTWhgLoc3KgD9T8zNQV5",
  "key42": "4BvZYquGBUGrhsqndePRfgZGNGgg4AjDUbmn7phFRUEpw1K1eLMEE4NDTCMrybhdVE76MH8BF6zAk5VXNRug7mnG"
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
