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
    "T2GAbGh6rst7L7E75yVFSxafmkorfc9MvjdpgHoDrxUrtq1q9MCf5HFjMnEH48NG8QZ8W4Kp2kS7NjDA9XnyNyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NR7bBm4dnDWBrpmNJqkF1mBCjizVFdMgVtJcKfhr19CTHALykFhfknUmCzVB34Lu33sPZvMCpHAqyPoeGKFLDkm",
  "key1": "5fjYWBJce2oQ3y5Tk7emXkafoynhUrGKN3a63qZoGnULncXXLupfz6sJ8uUayC5UtT4ZKc6uBAaz6dZUwgbt8thT",
  "key2": "41xcwK57gHd8RDz5wVj9nCXnMJUjHr4bUVB8wLcdE3tpmQem7PXcAttYqXRFpiqELdNsp4tq8DZbJzbXD5iPvH6H",
  "key3": "3CMRmbxKRujjxEacNPBYnB1CjP8nh8GoiePg5XQBcJw9t9q64FwkWzCnnE3MN9LkmmSdbkdYyPQEfY1Npv8L4pUz",
  "key4": "42dY2jCWgeDxptZfbC7rowNLNNMhZFNgqLEanWPofX9d5z2fxHtELsfaach1X6BMx4HBcJ31mcJvFiCtUExoKsi5",
  "key5": "3Lw8KTL9g5eFFbgGyJgx5x68T2Ea3uA3WHjAzVSQprNJjLSYS3SADsfBsvm99oEuxj3mxDVu3CZh4r5NammQLamA",
  "key6": "4SbUPJkMGbyFWHbqzMGo5W5tZaKBQJNWBUdPgeWrKsSEuzC63AcxCjRjem33G5CX1ABgKxyeqa7R4MRXMpNdL4Pj",
  "key7": "5Z2Awas3Luqz783q9TqqtCpmiDRPTrZLat44C9CigKMBz2zEnRstRkq1yga6xc2SLqpXBjgFzjmvzYCfVyDW9NDc",
  "key8": "cNJhaiTMJZB9tHyH5JyEtxTFwo1nbFLemJVgq2jRS1DfSMr8tjp2PDyKHZS1rh85mHsTXRo9ybYzfskDcLgJ6Ve",
  "key9": "311aCQEBkUJLMsKYiauXDiqkvgsAdJqSUu8Ppkq6DTC1DiGQFvW168PVL2VzeqYu2durK4urGVeRLmMca8V66X4z",
  "key10": "2CWCHZizZzaEt5eCcKPpfw631sJU5hva51yhVUoXmd65AZiqW7GaHMUiJdUadcMkUyfH9jkr37c1LbXJY6bJmAWq",
  "key11": "rdMiyuTgDaXmrFsKVKLSWofe5assqKKshJJoGn5cjijficwwyXPdCiW1TRu6zY9d6FvXMJtz9fTujVaxLiwJed1",
  "key12": "fD3sRWrexJwFBy5G9uLdFEVAb97JrmxPYZ4kbc6Uy1DgPuUCyYPUAVDaN9vp1C97vvFp1oUrnJjQpAqZazCnVSK",
  "key13": "AttEYehuTUTUB5eKpiTqL9ViyDWQmZogzhbjn73XMYsamAtQiZh5variiePidorJ4K8Ht1emPCzUrzPD8NAfaXE",
  "key14": "hcQ5B9pW6LoRcuke9s86uWyMVTjYJynsaSGAQW5aJKgNbpsvgCyfVE5xF1VMoN3Uu4eNvqi8efvBPDyfxcqYbMp",
  "key15": "3Seqp1wGTGrxK5biyMwA5geg4czhBQh8wi7B2tFocrF3aLP6qsXJebiekdcUYXKAQpucac2oNhvUAsXgb8oBXduz",
  "key16": "5k6rZRRPkXV8qm73ZeM2rDj7ktfEZ53ToDtHTQcGcAyi48wuf1PY6HE2kxrdZq6grz9V83DeaDq6PJwqB9rkRnDG",
  "key17": "5tYyFrM3stepyG1Fr7PTZD7mpMSxxS3AYEocgTQbmLogEtVt22sZfbaKJ3Bu8SkLkYSgLuJMW8WpiYHk1kf7B8Hc",
  "key18": "4VeVPboJLuSs6YtxuSjG6P3RWP9kkJA5AizgxHwMmb8hjUYuxKds9GAR6jAK7G9QVPjFRjqumSkrGhHWUrpqcdCP",
  "key19": "3TtG9xvq8GV5PgKwCbSgmpfQG9mdZ1cAHsq8gbokFA2dVhfTr3NZcEKCc9CV6gJccHGVxwhTK48nv1a7f3c1zUzy",
  "key20": "3k6tYoHBY6GKmAK9Qr6DVM2Cye7qCfxoD8zmwS7QVuzU4ofTYjxjjSeoZHJHK8P4qasZstWZZyLuvaU2XjY2iPdh",
  "key21": "4Vr5vVsnU6ebTbXjWUz8bUAQAje6Yu6yTw5k57xRbiEsiQ5kQxSBorZbWTAWrRdcfaD13W32xNZWnsSVzJgsUbRv",
  "key22": "RAuptjoRhVYpLCiCnXH58AQLQPXYeDiYRMs3acELvNX9PFA14xsbaozgYgvEEF8e5nqkzQGxGVbk9byn5fDu1XB",
  "key23": "3XSebM3L7XRof5XTQHLaH5PV4QSitSYWGcKwmKSLAhEfXd5wkEzGXjjY4ortVyZXLNHdgFkTRy8tuwGAiTGa3LTv",
  "key24": "3prsCNPhA3MMbYvoQhf9sakxQ8FmU8897zupQoTiM8EbHaXx3rWN1wKNhEvSnbi2eyyBxBN2EBSdKdoDTrinQAfH",
  "key25": "3rt971EGz6wxto9nCTu2nEfre4GnTpPP88SrMxpLM7XAJVGN67bkp1hREPAQU4xQabcmHgk9bPkH8u5pSetffdUS",
  "key26": "65UbR1bfDFK7SCTAsDyRAdWHUstsvhpAGBBcF7oUYwXDBbe5MseuwoZoWWUsfUEr4Rn5znZmeNimyA4ufU6Qudui",
  "key27": "3fGhdbpSHzotJje3xwLWdPaFAEXhFGLrRDxM3VySHF5d1pcgzePYfB6h6UD2z16MN9tMKBkYWzCNgngRFg6EV5nm",
  "key28": "gdEoF2b7Twta96XHoqhuYixKfrxtSwsCn7618P5X3MLGnKERXhsPBJvJGndK5rXbkNbSypq539JKEJ86L8wsAP4"
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
