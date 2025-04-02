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
    "3BnWhwwpUpPmcJJxNnRJaq4AgkQbZ6q5515kp482iHrmV1QnLvSm39V8CzncwsuXbPtArXJhoxC85jsCx2LBFySr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wWZxNYPNbVh6wW5muo1vRvBbBjneDBoHeWdbW39d93JUgaPQwmPpfeAPBpZRsWxr8S6q51yW73zngjGnqWxY677",
  "key1": "PqRQribkD7R6ZN3kQgaQQx7FEPqfHd5pUHmMHSw1gXtibcxHQ835sk7ERDxpPp9rpzzAmXPEc8XMvPY6iACXYRg",
  "key2": "4L2ZvyD5xy45iGMCPopNFTRH3EBK3u1vtrXbe5YV8GArsvb9j1FJ47LdbrKn1BUs2yYVftsr4MGEyWLcsgfBsgoc",
  "key3": "AAsyYXDw2pm6KD5ZP1iAuuXPiojBbKseoAxD9XkJMhJLRAyZkcYskL4hKNitwBrmsRdWThDTTZtYHUmWw9fZcEU",
  "key4": "58eZv3HkKGJuQaHSc3Pw5dtcTGz5kWpg7hUYht1u7g1UVqWgkQPMmGsP8xntLQwYu663hU33wgqXfXWx3ywGvzgZ",
  "key5": "2SrZBKvKHd7fKV3R3fja1ft5yM7j1Fyk7NDG7TdtaTjZJSBvLp9zE48raWzjpteBVQ7eQGkdK4Xvq4YADCMArDkz",
  "key6": "2XaU7xAQdtsjV3XpA4sevdEoTg93AZpaE6gmqzigMFbP1pexBJ757LkNhbF2mFLb5ftmRjA8rvQBPPLWKmB9hZA5",
  "key7": "2pxh8jb8uzeNeRoUwCzZCdBWnnJFkm2WfkNuS7vPp9oTB3YqBhyP3vTYj8J94PRPFFqWnRrCgXg9Sw4rw4uJaHUM",
  "key8": "5RhPDZQswACRWSbYmjjSdmTxWugV14ruS18tFCXSsPzo7QQdy5TDK2HDnrCDyWhhqDcYo5vj7fkNZ3zhZW4ZTzKp",
  "key9": "4nFmnTfGYqMTipBJZpqAPjNVn6DBTpqnVbij5XuGK7C5FdAQdCfAtabtD7TkEG8BaeaHpvPya6PKSkvCSVccKaJk",
  "key10": "2jycyV2MArfoJDWZGrn3XnXLeLGQ46iAjNvMxQRMp7W4dAfnmGuwGfaTFafCFceLfoNEYSA2BKiW2ZgbvVrEWTWr",
  "key11": "67fhHxnj49mrttvkL77EccJavfNdrnA9gYSAP6n2zxbXvPEX3nVER4LJDFitxZdmrzTBUZ5HPjZj98mCRYtzAEKW",
  "key12": "aNX9yDq1w7SB68xeAY8JQdytsn3MboZ4XsXX6TjWPTfgk7GiDLyHcoQrbthRA8xcfCYoLyGKSuUvjWpiVnMvf7n",
  "key13": "3vTNJaB5aSLvfgYPyTZqpM8k2wGfJqmemUnTAPhjBTAQA3czCkTWWjBuw6HydjAx39vGVPJu6w9GBkdxSzsffJbH",
  "key14": "feiwreMo6zVS6qhWU7NZAfLx2e51Hz1Gs25prqmiWHf2Q4yk6d2vbHYFjL1jaLJrMkacGHu2SBZSUHvhNAgpn8p",
  "key15": "4PCkQrHx1j4QMUAJ2ewVhfeMvcK2b2HDHqqpgncToNaJiwvEPUpDV8hw5totPxwvKYcfzA2k7dCtt9dc6pqdAVb8",
  "key16": "3yxYh8GXCdjNUcxgsR63sjqYobWxxcLziY6NsB49qsfLjPyDG7GjNqc1RzPeGY3mW25jEPzi7qsoEE3FkpbrWuJR",
  "key17": "5w9VFvdwRaPPdW8PLZEBW9Ke1n88FMKhjF7JP3BSfdAkfKw8PQKnrhNf2UXdVJrv3286VuHzKbYWgbr38Qt8fzGM",
  "key18": "67fAUSASepjiiJ6tHL5xKUzMvW9bkkwzrkD8n5Vr894TFZ6ovK8onnteb3Eo4G2gwh7uThXtQtzhKAYLV6NGiqRw",
  "key19": "4osjoiTVV5oK2FTc6NbchPrTupEBHpW11tnHskqdmendwQnAabXkeB3T4WddzfbNW2RG85Lg3UDTV5NGCdBD2VBw",
  "key20": "5vvVSbSo2gWC8sgx9WHwdp2Fwo5bXtLmcYEX2xatwstz5KVLbT7YLT37sBBAQDnAiuF3ecwumFLvfucfpwLN1a8H",
  "key21": "q3dYzYKUnPc9Z5QMjALzSscNapfwUrCc72vGkQAWjH9wTXs3NfLoxKyMtrFdZfaXmPvb2cknrAKYRFCbBjTqfNB",
  "key22": "Pdc2W2fpcUuP3WD6QcVcHuJB7L14PnkYbreAKfNWPFXEjKotkeNY7STbXoPgPJJPzohijARHC7MZSJuTDPYjvWN",
  "key23": "3bdbt7WJfxrm3uDMa1wmC7jztMXCj4TyFqaU6ew3PtAkxigr255yEX3SopMXyYbKgiS9H3u8FMX1JkxkzasWjk1L",
  "key24": "5ygM2drCjKMYTA38u3zSAX3N6MSsKj9SSbngqsAGU1MLgpu2EwzbNep4JCMKruyotEwBxu9Rs4vXbjDBZ6QKmzGa",
  "key25": "2b9nhLmkV6tdWek95uxmBXcawt2ZJVc8pPbPJSLNXbXCfWsuRqwfEMjKffmY1P7mcp1bmE3wTDiJH1VwEgk5Hdz7",
  "key26": "w1CvLAs1AwYrZvGqtsxqEGgtA2Uzgu9zQXtvgypJcmMoVtAjxGG5gCiJCP4N5JxZmDip3JaJVp5L9cgnRAQv4z4",
  "key27": "3Wu2bwjKBnksnD78yfLzT6MEbdDAezVdHVSXpGNwHRvjfGdWJZoejVSYvBBJccQiSog2V5GRwZA3qNjkNMQBh3iD",
  "key28": "3xoSzBG5JM2X46ShEU6FKPaXUVdnVKjAkmejx5nvrLBMyigYbxDoMSP5WVAe7xVzU6hnhHy2dqggKAktoxztqocD"
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
