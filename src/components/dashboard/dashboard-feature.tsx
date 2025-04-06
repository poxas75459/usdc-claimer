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
    "5hHFKRivj2o5ZSpBjHSBZ5HJ31gusTNMdDWBgbfn1GiuyJJhZC8NPGbziMrdY4HN6jtoQVovp9ewREaUqubvrEFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cb9tWfBjRWFNqPJq7mnN8P1TgM2f3mx95jwrFjZjrvrZTXxKcNJGD1XnJR5TBjRUPYRGWNgRheSpT8JFRoiFSxc",
  "key1": "5KYsuyxyayYZBoNQmiY4EP8R54MJJZWBGhVmeHZ479qkLydRZb6w35qUaLwLtdCa2pBS3p7QFopL7nS7sDoskEMC",
  "key2": "4g8HXun3kkc3sAUHmKjTQ6JhoLeJ1zP8D64YfRSFeygLR1MVuFj4ofa6uFdic7qyzWd6WRaR2eaijy4C6bHbUKBP",
  "key3": "53U9JKbouvrZhmSUBWBR2a4L72VNgf8P2EoWV53j9iqUGbJskuzSZ8rJqpstKcArtiquX6duGKz2S5QPs5vzFTJS",
  "key4": "3B9ikAtAabqr6mSTfnQdbYEgA2thdksWPdRPxpjDgUnwZNFbBTasYXZEkQVRiHqriKZTMxnwUPvUsGypyHdL5UaH",
  "key5": "4RjBwa59xeguWd3UHmiJgBWhnvN38D7fvtXHr9gR9Hd8MFE3VaFTJQDabmYB7CHnEKt671WTiuwKt45utGVCqKsU",
  "key6": "3Lkwkvjb2KYetgdDh2mciq9iNBWnUm3ozLW1VtMcRhiWBLw2fx7dC8CxwSLpK3ZMMmChLMuF3KNWXXJF4GC2H6bX",
  "key7": "47CPMioi2yr5jDcimPa2StxYWVhGWpsS7SByRvv1W7RHyKSKfEM1wCGcQEL6YLCRXKi9DsnBx2RgjBvpm8Ttj8ap",
  "key8": "5t6qSuBbwbAoLkf8yuph59r3UjVaGmNqY9D8s2CdNkbNKiuSJ5zu82AWXMR24w74Sget1CiBSXxFSgWS1p2H2jmZ",
  "key9": "4ExsxybGXEPwDTbAXiyNLiEz74unKYsaAVr3Ndmf97YxnU2QQFchdgP6LxSc89j2WRTKMavpREKt4BHNzaJWiZTM",
  "key10": "nyMkGz7rmE1ngwfeisnEopUrsEsLXhYxQQuiFeQLDsDyEuxjCTCL3Vt17V2oPpJRWA3DYogPfzmPsjQNJk4Da58",
  "key11": "Zac4yyyLNuVWAYuu4y1dA2B9Dcfhmwm6uqHvgvBSUo5g6GgKoaRmNRLJB2K7TeqbPSGDxGm2jwP5iG8YjKjnZM3",
  "key12": "5eXgCt7jM8TgYM84HjRFtY8hhpSsyrBmyf3gEHD4XW76YgNJTxieCnLovc48N7VaFdsXZotJVACgJ8GPthDNMvWw",
  "key13": "65DYzhiGhA1QokGPKg2zgDQPjzQwe6eS5zFcD1LHZyr6ATf2TQNnLzLVMWvoVUwZBntXH8uCAxNWXsqxK9YR4hT8",
  "key14": "4oNsJUhbCxDbXbYhhDrYvPXJsdvx9HpUxkpxPrk9ZawjUbFNQV9TH8TWkbNtv9cLpcMtia9TsoweHPgdv1v6Y7dp",
  "key15": "2HoMqiEdTSX8yoB1YnvNTWMG9SuZMHCS8ranLF2tv1eeDny8tPyRMc8QWRJBvJDGLxBPGU9qT7iCFqpUoJF8hKfK",
  "key16": "4ppXvwRqPXBUFjBHmYbXR8fboKgM3LWfogbcfJ4WvPgH4iyTUV8X8eCXHKi1uz6Bk4PnToJC5amcxDGH74x8Tm5V",
  "key17": "4Eu4F9UFBvyyzUCuAvhGkxsLrB8PFrZMaygzAsB26iynRfpz9rAs5XJc5qeuXzS1eSZGemTod9eX9d9TZ1kCaxeS",
  "key18": "5jQwqjEXJUQ5e1751j47c4bJSUouj6f8nzBHwkRbwUZjuy9barbusjLDYe5nAXdM6WV9LJuK5fnH48AX3zQ6pbsj",
  "key19": "2uuAzxf8Vrs9yEKupmbrZDtagVu36JkrXqS3KcWnm742fPeD6wyv1gAVUpYZRB8YEDe9LbWprTcJuo1zMc7hE8yq",
  "key20": "4MwfUWVpNpCLuwfDnWA77mWrGTvxhVgHWEQHTtf9TMwYs7zs2bLYRRmmFUajMBqW1rY38Q3DFNfZaPcrD8GXsnU9",
  "key21": "35vCwxpKALbbUeAbehEZnRXLmfbYhs6vur1VNzT7vixWKRVnPbDKg2CNLJN81GSEFMvmiArEgwuHXEuuJYxi5pDX",
  "key22": "5FeuLucr88Sfqc3StaZN41ZxgqxLPpbdqhebtK73YFiqUiCHMZR7sdtnKRaDbNApBriMtyUJNTmNTnAfu9ciVtxm",
  "key23": "2a74qcerYa86tDbE453n6Dt4ELEiY87hp5rrdJTUMa2dFnSmZ7L5HUfQGg87hhHEiktrVdtVmiujCqX7TotchGKD",
  "key24": "6FCKnzZAS4vVTetfws1UDeDHMRfTQAcewUB84zumuVHqLxpi1cPXwvjcpioYQzthDqs8VSdYC7SzS5CTpfYLQpn"
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
