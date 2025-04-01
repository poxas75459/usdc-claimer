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
    "3rpp2R6tgn6UAARf3UMhXx2SgqUpL6zNFhNbfnfD5LkweHEVxmMkzvnvhMM5wAAeG9b9jKkhEZXGnJckBtmQRmQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YadLCp1ioFVUzcpx3FwZLAZBeDJsDsadDCwnKzgt21M78nnFsrddezxe455uUjsR7wPhs2noBxLYhgLzzcDQDU7",
  "key1": "23xriHBwmBRjbCoqxmr4iopRfR9rGfgtzkAcSGbEAVqJmte1Ng1SE2JeT3GAHptXJfmKThyNykKYSrdJZ2J63pni",
  "key2": "5swCXwtrpiPhMxchkPqEG7UR4gy34GNG9k6a1vWXRAvhajDvLtGZusqg4zLwgWNWvN5dYf1BB8PrPxZY8DvCsL2x",
  "key3": "A2DLuUTK7aHngfcuxaJHSiLycbm93vZFhcaoeMwSfGrLL4Uv8sqi6FzqLawGZG7tw2pa6Ft1P71PzqiZdtViBFu",
  "key4": "26Fpj5tCRcnY7pzAZSeU2VzR4YhtBKsdasjTAPXx5LJgrF43NQLFjHr6uQDLBsbskPQDj59zFWMX3MfEL1uk2hum",
  "key5": "2T8REkZBtaYReySH4j2R39YmjQo6bTqAxT3TH4cyhKR2nXRyFCGSBuX6J8apYHrqbNJZLLxLCheoA3R1GtRE3Lte",
  "key6": "3EaaS4gFM1E145SqMN4aaZZ2tc5DbHPohLdWYXgb1xJ4DDLEE1WNLGE6bonRBYBDDgbSCK46oPbnMQ6uK9xGd5Na",
  "key7": "5ymyurXyRTotd47TnBAkrt5z5pXCKvtztrn1NoWTnCc29MjSW4ZhrihrHqoVP3aTu4BD7Fno42mwFc97thEMdzmu",
  "key8": "67XDWvyssVNkwYSv8S7oUfzVXMZjAZJbEfDyGyNN5WmY9FFvnh7Zf7rca6sw6sBsuHCp2jmJU7UQxoSW2z2PGAEj",
  "key9": "5rC7BEnwS1zQrFRct5vRVB2zBTRqo2wsqGWiPmrrDDFLDD5gLstxYxvEQGP13aDp2pkXMDy1YXrPWC3nVWPQ6gmN",
  "key10": "opebgoWMbGzEMWZuneUdNP34uUUMpphBYVW3hL1NTH7iPzk3WbayxDFv4sdfosMbTBii1DbEGc3GbLotY7z1vww",
  "key11": "28sveNqyv46dDoSerBeNShm9QN2QJHdoQzkujAGkpQGUGeVg76ME54YGKHSpb9zSvLY3eRipJAMqe8x8L1Uxk1oF",
  "key12": "4eiCJQPHCuEzi6b3fiDG2UW6FXRT1WHwSeaLMNMqDsrzMNLjpTHR3FbbytXSbuHuP5vcxrmmMs1yExx4NsM6xsoh",
  "key13": "h8mUH3DU39F3HPWuyUoBHcf9AwX4qdv8KUPKYx5jcGYjV6qvMbpyzdKUGnG4cSjkcNm2bFvoAfnw6pTa36HZgd3",
  "key14": "UTgHwpdX7Ls3fvw1jZT6Sp76sLvQVT7pSC3oXQsydMEK6aAh3PWBP3K39p1UMCkszieC9z8n3YQvYeffHXdyABP",
  "key15": "5qAKEDJyjJAcdC8MbugVqKbsg45qAed4T86D3K4ahMVAKHr2nx5TsdE7auEEKZU6mEwiEJEig1iMBbcT4zzsTNGj",
  "key16": "ZrSxUmRc4C8Qad2eELdzzbbibwqf34bjrFpwhoU4y2ffhAzoceh52uHZMe8nb3WcSetcHARhFDrPHbjd4GpfZ57",
  "key17": "3ce1Zxv2enpFxZkZGi3cVVV297rRzx6TbnT6RgvXwCpc6VyhLmzfdfi2PJ8ERtqqKj7CrpWipdZoWMgZAAb1Dwxk",
  "key18": "2Pj1c3jELhr2S7V2wqBDWDu73CtgXv6htJHnDNyfUNZqHxBSXQaJCH3EJrQnvGvoxjGT59npqj3aSy6BDYnguijx",
  "key19": "HdyiwPxwvHbdZD9FM6o3VbyHLaYXgeo1KoEvCTM7U6WFk2EymXP5NC8SL7pvx7PPdXKGVKib1Rp4YEPrL3HjmnB",
  "key20": "2EAe3337G3aN5RKZhUbhutf18MtjzTJPWFJZMkZwXk3A5sHXqbwowy3RZiahspmqg67HTrJmeeDNjB5Ag2AKz6w2",
  "key21": "417bDESAr99UCkhETRC6Ky7wgzzpw3sdZ2sZTrXj4tJtrnauMJLNBfgXgGPQ1BJW2jnDHi4D5xn7bxhxaDESP4Vr",
  "key22": "5BS21tJw8ft8zXkuNwTn3JsH4MaFVzdQgC1a5sPxFofVFXdrDvb6kySnnJR8hngXLU43PCx5q2RF9xE9RnJkFLqT",
  "key23": "5KxGBUbJyN2WFtdtwppcvdvPoM8g9HMxb4MEjz5W4CBVhUvCKUL2WUR5YcFXfWtocizzqHbmiGAVaWDhfu1yLQCv",
  "key24": "Ezgv3924mBNgWPrhRy6dRtUwsMfS7v8E5d1xhGvmqHucF3oMpsfrXs6TBbQqEbsbv7KWyGCunK6He9vP2auKyJD"
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
