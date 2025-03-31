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
    "ButGNhMehs9RCCyRCoczFzHT3h8KTejaSYPthMGfpvc8j5giGLRNFwL5TmEPNajQvteq6RKegckPsNwGHxbWXtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pPa71HQjXvsMrmg6eDfahUaw61R573MPAgk7RSWCUkeqwhCeYeVw49FEYewngCJ6vDrKzSdg2CxFbb4XRe7cdgS",
  "key1": "3zEWjmF5TY48JD8X1Fnzzq8WRCHksbPrNX3ubMcmGCvUP1pgpqPipyZiv64cuTjJxZLsvDFMkEt8MaqyXWTEoHXV",
  "key2": "er82RMzTkqeTDB8QQK11zsUjmRG9cCRebSdFt7B9n8HcWqAVJAYpXzqjMjj1eFLBTJmeuBkpBbaJW6VELfGYQoY",
  "key3": "5NL77hCfYoZA85TaqJcV12ADCBRynH9wRSLZQhiPZ9Xf1Uw6Y7edXDGoQuBiCHsWQPY3dYUWniaN9eSLVE78tW1v",
  "key4": "2LTKkMacRsSDwC7KibiZ6gEWKJNCVsP914ovGALFtNyTcMM7nX5199GfecEakHa9pLZ5haLpbaJfWquA9oshzSUj",
  "key5": "mSMzrqxkNEvCsPtT6NXcT4VV7XZkGDiVSjeR6E2FSSFFxWnpTnqNcjBBFFFSTvUHU8FMRLdyXC6riUQnVG52UVG",
  "key6": "5xp9TKntR9rTtpZqRvVssEikcRGKLa4No7vn2KNEQ7EsHz9y9Kwpv9LBAXgN2hNrpj8EUDbTRxzcZvZ6fKTb9m43",
  "key7": "5TVTLQXtqXSQy79Rws3ikQcKGoR8bBVShZGUtdKDYNwVGCD3fTgVqt7nvt9kFxpiz8U9iFDN133T5QTNnsFVhgZe",
  "key8": "3bJ7XgsXmbzM3bACC9WVZnMSATVsuLZXPme8TzuuhGUS9AwQCkeJJbEqQQRSz21P3KQmpLkFoSmL4S9z4rcX66jg",
  "key9": "5AoNWBKZH9MnhHFTGwSQQv1jxYJKLvjCDg8bSaMskH2h2g5tgrUeEPgG7GNnMBUPSEF3RKehrG5qBqvTXA4ZTXXp",
  "key10": "5dwJi9sx2MTMxcczGAjSRatVwmNsa7dg2wnAz9ZCCbpbMxccGWKEUzi2deZZTGKgobFdnR5DjLptTcgZpSrqDozu",
  "key11": "52yW6NGYtT19MbPgt7DsfepkTLEm26rp1J3zRPs1fhsg1L9JS5L21hLajWf5wgAZ7Fr52DS1w3pvLDkgnveSRCw4",
  "key12": "2DYPRJwMLzaSKLxP2RXUx4jRxGLi8f2xAEk769Lv6BkkxdXo6qyYQtUHPEcM7uPukroEcgcjrW6Cwekth8sqdzhV",
  "key13": "3UhYtfSQUYVYj33p5FgqvaqPteApATmd4E9ME5mHp1QS64GijvQXSxWa4kaR3zTgVYJnEDFqxf5jHp23gDq4TQfA",
  "key14": "3csrCA37ynqCDrj7nyj3m6Zhq5GcfwRzkQKe2YXddNdxwHhLUEfynpDXwtwLmWCXX1xYMMJw85CTp7VKbtb9fLg7",
  "key15": "QMTnndJjQWzJu9GFnhC87aSuzkYjMU9nCw7kKiD3mDkgq1FByYbMv7vMqRDuFCfCPErqi7xxGcPvdBZW7gqsJGu",
  "key16": "4PJyzbXfzmvwgifQ7EzBioSE3w6vkgTwMX6T52aHaAnuTzDvNsVYTbfMbN9pvWDfroSG6KzB889T2W1V9V2xsuAb",
  "key17": "2Sm8Qwq8c94aSD5qFoL1JcFYMgrjMjT9qzXp64FBbn1a4hnvBtY3SqZRdUethKugQYbggayUayX3sC4LSmAjTsfB",
  "key18": "7t8ivnWUyv9CLVEsRNGJzDcvBWRyeLNB3xtyHALoaXUoeKSwLnj7cmHhFBCQz2q9enb6pph8qa7437o69xn7LM2",
  "key19": "5K5dN1TmZFcEuVy35nUv8B9yS9wmXLizcvjjmgxMX3BGk1AHrL7uopYRZqfavaYhj2oLoEBs55ZsaBCfcfdTCQ9X",
  "key20": "2shSAmt1eZPkNdwQU1KrPwRUYGr1SAWyFM8r2kNWyzG56p222yBevgKggjzc1c3SzypcKpG7PkWp4dGQDiMv29tb",
  "key21": "5k2Nf1nktGYgephztH3o1rpzMgReRrRRqMjYRdqPjH7aZgFzzQajqLgTiQ4PW7mU1KJDaLdFGjZdymSjb7QYFtEK",
  "key22": "5gutQLcXK5PTYnzm2gAT2hZwr9pP198ACKZp3r3vjzzuucir8DpJ1qd1XuRgWfAB67Y7NX3wUAcbQb3PBGUKFreu",
  "key23": "9vLkYhC2doSVEd7RGd4Fx2ZhFPr7imMjUo8mG1h2wjpS6Ph3Xkpw9ogPq7KzQbfPN5LSgh5s9tg57P4RCu4jQgg",
  "key24": "3Dhng15vwGbfFMUwAvewfZtcuMTYyywWeGvJ5NyqxxFfggZe8Xt7iKG5KTzMe5TTRB2uEbWNug6bAUswWSzqRtX7",
  "key25": "48szbwcuYvEaYTXhKNLXWYaT6kL7x4eEMVSYud7XEiwQ3eacRJN8KMPX34sn9iK66FebYR5LiT1jorSFCX58cPif",
  "key26": "5aru94dtu5FXWavATvuTGtr5AVHhoh3EbEsq3Pefje3GZ5M1VP1SyANXr62mMLRu39ymheVDyVTGs6EdLVCEqwTB",
  "key27": "2nEwYW3ZptFArhqimMGvku7T3YnmeWquwwvQwDPFVSfpmMxhL4BgdxjGik2vSwqcFvs194FLQUX7qC1JVAKUr349",
  "key28": "4mL7Zq1D5pPv8jyY5yhg5oZ4tzLCgWDFpTpvGqRRSZvvsaMFKQfoY3hALTAApGJ6xkry5hygF5iUeFvQJsS9TyGe",
  "key29": "3do77s8N8dy4vC8Lvcct2yPgmENfzmWjY3TdNnhdM7rWSnYFEY7ckjXLmtMNLDRLf5udBcitoCTCqg9koeAhXd8A",
  "key30": "42BNiGUsawBPtevd5WeKj4K4CfGbKWRHecCeuoZ4FN3rzGuPLe8nTeDtwMyHeYVgB5qM8sGKisGv75u8u8SMWFVU",
  "key31": "ZcbpMKPLwE29GtfMQSmNrjJECgyN35JiMriT4KM8PAYZHa2aSokdtGk13v1A6GCoheTwZtiBEGBjfjaTVKUrDAo",
  "key32": "5ugQcbVfvi1VGbup8Ka2rFFzvZvHJDbCCBbcFzNx6CFdKihkGVkp1jKY3t7PMWD8LSZckbEWPFZnJH1beTWsD2i6",
  "key33": "3vVE57RBnejAB5jNrsTv9XZdWgLqVkimxmyaWAmoZtN8uXmM2dCMLaDwFDaUYgYmFdfN9CMgsw3CUXjjkcEfS9vV",
  "key34": "61joKxEBd5C6YYrod7vrTCnCziCf1vf261amZUaTmBLZ9dDsZBHz3nLTX9NjtBTFsXuY5H9SFtQRUvVU6HEygC69",
  "key35": "2LDYLPHxVfcmYzDwfwwnc6X817igc42NrjenzM5Yk4nKfMCdCxhUpmFedExKwE7vTwjsiy2iuPvMTCyoBhmVq6zN",
  "key36": "4KZ9dNf7g8PPow2borUqJoWSug1ZN5QXX2n2JnafC4Vk5MP6MUyHqEt9nBXMp9soADxuDo8G3yNeuHwtrBY97oGd",
  "key37": "3NiSXuRWCFkm92nb7efx28PSit1DUGKc5t4kyw82xK78HVN996ne22Sw4YdRThLoCQgPy6Gt8HfuEBVwmkrtJM5n",
  "key38": "4oJ6yE6yKHz3uWbcMo1Nw7Jev87XkC6dqcumjasr772JruRVUoU3LvTP5wfxSBpFocGTujiDSKhXsLR1R8MhFL9a",
  "key39": "4UgnhXhFSdeE9sXtMrNuWRWTpz5JRhHXuN7DvnfGG5aCzoMegf3Q7ECaw8WBz1ugDjncFUUs6QTUGDait6Yd7nwC",
  "key40": "4CUiF3EXyqdn68hsdPyLLL7B87Y9xT6ca3DnKMZiyzGftcp85DYZrSkhcxppwPQrXJ32e4WUDUawk6KurSMVVyWT",
  "key41": "4oaTv4UHbJqqmd2vDtQp8uCLHTDX2Y8unHjM8nNySGGhXbah6KJ1sNxVQLBQMg7f2pMthYiJe6yKFx8AL8RwmdxK",
  "key42": "5JW7G56o5DVBPyopmAmP4Fz67WTukWCFCE1WmPbFANvwNQwLXJ7TtzyGvtRshcdpZYczgetLnfTPqCHKvJAY5ZSa",
  "key43": "5qMQxc5XqhnamcG6GfECJcEagb2J6ZUWZ84h4LCDdT7E9AZaFRmokPgYHAabKPHMVjmmiTyFsqmpeAk3J4yNhikd",
  "key44": "2sGk2tmdq2SuDfLa1Q2ME92L98TnuNXcp2zSZmWRDQjpyung7UgKpChKpU5TsaC9y2mq39xnoBXFKandW1R65sRk",
  "key45": "2CvtSbZN2YE4KT37HPL8q19ift4expvphpyjMwbwiWuHBesULLae8qw1Lr4R5Dk6G4bfvrJPPGo5UYhsT6pZZSTB",
  "key46": "3EPSV9QJXJwfuVRBQ1Dhz866MSjvgqjqeA65uFU4pbEJJzhx3RwXtdZqZ2KhrYUASMRFKXNEVVVaUCVmB2V8Q6Pr"
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
