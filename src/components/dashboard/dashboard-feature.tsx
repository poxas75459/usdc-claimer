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
    "tuVHNMs7EYrX5mmrxsvLhaS4NqkEZ9rmgF6XEFfx4GwzpBLxBdzVgfTJXAmcAr52xVGV3ypeiTSELkymi33PBmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q2R1yFGJy6j7DAks3PY6M8fTAicXhe2gERiLev93rYGdCBJvtdUn37TiWJFqrmWB9nqaD7BwaD7kYoUMHNiJDxq",
  "key1": "3YNygjZk5DhC1c4L5SB2QDVG5edxjSLdpcbsKVMQRtxVQ1Rs958zsNjhgbZNAwT5iQiPSGtG69GNwiNZ22f1z1uc",
  "key2": "37qhpiJAEoQ5SCQhCDnAMineCSrfs6xdzNVHZdCrR8iseMbHpHEUBzPF4xP7RLMo9LGWXUMGn1FRof2wPN4Sb7Nd",
  "key3": "2svTbc9wQAV5GcNAAPUqb44STpbDMV6SEysvQ7CeVjypn96VVWhiCv5DeNbDKTyHFEq1nEQy1FnnK7aLG1XoKREM",
  "key4": "3ih4CkWywzEbjZDp3spLLh6p9KWPMzXXUL5jCiyR5wEgHr2mm42vmwKsF2KXhhT5sHDgNMyDPG8Xgb2QAjR1wEB9",
  "key5": "3sKk88qNvp4iSvDZeGSWBXSb8m9c1xQDCgpQrW2PLEmJj7A4fG8sobTE82gWJaGEK2RvFiRaCB86SWc1D9r4nUs3",
  "key6": "3iVy2oRBWidwAk4amvSQDMmqPmxVWKTcsRN6SMLfSPLkskXeyuraM9nq3cyDsBCgdRiHUW3FNzsb5YJDnGhG6wWw",
  "key7": "5DCeyNPDtW9sYrhVTiDkPakwC8YNR1PH3UgADKdYVnffCS4HbFX6YxhvbATTnVRtJgg74rSwFTjP8MgZYF8E1WaC",
  "key8": "2A5rU2fAgARs1LGQYDwCZ7NNpLFpPDavUuvzTyWzTKgpGyEo2Z3GfUm4Ep742RBnjp2mgDwXyE18HCZuqoNY734W",
  "key9": "4JHXG3EURYGJHZ2Fa4TE42LoXouz8ycJFCisHgHSnBCYrPtnby2jntxgHBervhReZ2iFqkUF9RsvAd1YrDtnfjWp",
  "key10": "4uhhEuG2FifENtXiAbRG1r7VYwRdNotqjHKdFocnqNMWDgaAjshiszPj22gJyKWvLq4AhhXvPkzCCsnaHpTRY7eU",
  "key11": "5Bt3HCmKhz3woMRYPTYHUxTNRpGfswsx5qkT5MQb7sbGcMpxffHWFWjWGD1i7Ts3YeR6XMvMRn2AHrJikNZLHDJg",
  "key12": "66KmdX1GE1rqGgyR2rojHnnmx5BcwQ69M6s8yR7SJexr9Kx7biaaUS2SrDrz7qghgW5fmZhbt4SVwwNmwyqNagvZ",
  "key13": "2RGE19LNpZDwtMMj6ZZinjWRhkxcoFBzMuMj77LVg74niPDm2pw8ZUqtNTnH3cG5rfrStgSRe3vaT3fWBnyofGTp",
  "key14": "3qoMxfG1ZyP88DqoGGCFm4tuPaYeQ8mtp3CWDLjvT2dCXuVaR9eKRMz8wWuG6iVGTpwmEtpbX8EMdoD2Xg29jUha",
  "key15": "4yCh63SK8SMsBvDTb4RE7ZeSQK62Gb5Eg2he8FZ7hFLhm9oBCwZasNMJc4CmbKLFLt7eUwU9FnwmnR7VEAGf7DoS",
  "key16": "p2Hgb3c2wCti2wYXQVB2FZjwKM2cZ7555PrdmthNma9jipouS4FU21GpNPATrdyGBtos2nfFqUZG2h8iJWDvd6Q",
  "key17": "4NtXRnMzHCBLtM7B7in4xe2SeZRrKUpKTZDr9NBZmmnTEr4sUaUcnfWJNfKmCe9GEmtcS1qdbWxrkeTB27ijbTr5",
  "key18": "4VjKLtpADUqiWeFGSwFYspCYTnT7UnYAzgJBcU2K8zZiExoYiwAWJrP5sqtErzzVrLBkG8TfrrZiL4jggzYAzBLf",
  "key19": "5E2714nWfvikJ9NqWm5VdpeZrxULwUUzmgunBeFEuWeGqhLdRJx71z8b1dmZ2z5vVY6awf26j2e2nXD6wcCkJ44J",
  "key20": "2AUY3G2ohFDbmjpiJoN6xVmSZvES5ccRPMQeJ1LJaiF898DNbJADXFuYU6j12ZbveLiuFoS7z5rBKGUCQdNCNUHP",
  "key21": "2bj9yawxJN47SwgtBKxfVz86pLLQWKXzBQbvJnxK6QcyncZB4T3414Z76rqmdTVWKfTCWzM111GErBr7oVdJq3xc",
  "key22": "2QJ35F2dihD5zQwvitMMpHRjTrh3tj9ytepR5B6UvHHCRg23dao5j2DaWHBgbnMeop8n2trgyGtAug1H9egHk1vf",
  "key23": "KPoZL1voyGdDpsmFWiYHtTBSwZov9dVRE5hyrKUs79jRQYf4vmYmqtVhR5xzein5XWeTyxgcGV1QikcAfA1W16E",
  "key24": "4kCfSEAYXe3NVCdPPAtNmgHzG2pHmsLcFsqKvZFVrbfv2NQZwdebPmqXu3Su6nqoNB8Lsz4RMrs72iMkJP1ceUtT",
  "key25": "5WRXsiL7EqANR5CJUzchkNRfwfyuLYe54Ju4xqLBiyLHwrGfC6aWDgyFnG62ComnwTqa7KRrVeWzyjsGTn15msPn",
  "key26": "3Dy4fEa9uoar7gCwEpVoKcEamQcF2uaa6RNdXiJapHj8CQki8vA3fgozcYmWqs65ajYqGPk6CvzUvktQhDRVV1rC",
  "key27": "3u9ReAj1TsxHBUgC4na9NU6QqpzhaQTcFAszsVCXqu9kmTJcuab7amqd9HuoVEtkqkprcFwMAi2f4wM3VsqBJSs1",
  "key28": "2t3gvaGU9fhpvGLnpcssrvfLc5JHaEhSR7AEs8UMXvSaVVHRo83ogQNsZimX8Nz3ycLmqBi5qh7WGuh85UZoBQmn",
  "key29": "2wHqCnoFCMnuKwi26pnFX2ySUjEF6xEhtckzQnHr7HD2Ttrqpok1kAeviVGSugZPSuMPmB8jLuJvdtPepNDmBhzj",
  "key30": "2hBWg8fhQb7Ag9bDMjopu3M9yv4qvN2rtXveJ52fMbHtjEnnwag2hdGnc1rtnAypmTYys8Hoz5CLjbypZpKjxF78",
  "key31": "mcK5ckqXiT9PGd2zyFQHpM1etjB8piGDBy7wWKxaEGdGfKmB3SztaSgEVme16apzKxbPRYB3ugU2Dg4RQd9KBr5",
  "key32": "3Y2SjPyG5UMXR37MHQs29doA6nRnRTiefruGYtcVJNRB1eR5TQzzeAfWP3GCRr266dANWny94CY4xcP9x6P6Kygw",
  "key33": "5viuqbFth58ri2GgosW7uUsSC21iKM4eVad7uUayCAWNoFX88HkbpzBkfZYfRama2d5sRAxh7znhGYGRMmzLrkSf",
  "key34": "4GEFJkpp37CXknGvyej7MeJLPe9uM7DvLphuKuuxLGPoFGvUaFzBmiH8abfVPBfCTtfwZVkcmuuQ9k8DKRv72ArP",
  "key35": "5msqYnLVdv83td7ok2MSo38qmcNzTksLAqeqgrJqX9XM7UAVj7KrWBjaTbjktSarUZLoMmdLnaqWvvqM9Ykoqwzw",
  "key36": "3Fz6exxLS9uaNdHrFXMT87mQ3Vy2DzjF27X9UyMP5VtSMMS4ZM7mupwPPR6RH8queTtSygGB6htpuagdMCHJNagG",
  "key37": "5unEhDRaawBBh3YWXTkinxXd7cZpMUEmtbbAYCm2ZeXp7Yhrst6yDb2hyvjD82Uf83b1fC1iPU4KdtnRVqfUCSWc",
  "key38": "58QsaKyKgAX8HM8tNVZ6QSwvMeg1jDx5DzTXuhr7HyT4F9FnCVPQTMx78BHJZyTo1Cvheckwj1YzY26b1mTym9Q5",
  "key39": "4eB1jjo1RCDrNDNSEDdohjdqYNrjFqN7epKo5DF6vvy7Z2BxxwRXNTdesNvUFa15VCtsK8c1NQMyPL2y8fhvDctb",
  "key40": "4CJUcPaZhWVGfbe8g6HkKCsr4aKB4Nx4QUXUR6rTksQci1yg4JhisDt5rJ12ZKgFPsxzjLefgfKvpXL8oWEtXo1K",
  "key41": "3Sd2i643PB4pL3y6dtotp39JtzgZz6fNbbZNnAopNo3g1FGB5Xk1ZY4tjRzxHjZyGRNpD6Zt6UswQth2nCYrJj6E"
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
