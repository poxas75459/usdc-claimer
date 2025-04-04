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
    "2FQBiTjS1gQcy47DL94FPZnQBjQr1ePScu9tPGwJ2Jy5wj8b5VVRBqXbk9zL6ggsd2NJwH6LuGWKhccex5mKZj9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G6wvhUUmfFy5tMKwfgZa5vHWziJFnVLPu5Fnz4oPUJ3serERzeBe2qzHUgmimxxAf2HYm4neEVFb1AvH9GKiMtk",
  "key1": "S9Wn6bdPhQieA85TjMrTudJeQau3eRZHeQpCuJisxdSBikm3nnGQ6xMyRx8gXbExKSF83hKC13up7A2iYehvWFi",
  "key2": "3pY6zjxqSbskAmABD7YxQmCqvayYapMdEZXKtXzMuDKwiNpPFvpCUrLCjpr8HEZcS2Fo1rdEKr5Fs6ntDTVU97du",
  "key3": "2hhB5hgM6HCtghTndfszsYiK7pTYwhxx9cMmqp9LK7Sg6DsRCJ2mjZNkDMm9tiBd3JsT4pR5F6jed2XGrw9ZEKg5",
  "key4": "4sw9gnX9WJGhik859vRaNwuCPPGkZVNazQbHZzVCudMpgnKcyVY6ke2u8RZDM7dKs5WNrL1ACDCMdwGJrQer8VtP",
  "key5": "KPZ18QpG9BHHM3gvBmBuBqwVMYT5WxvoLxN4jnXj2T6wRAaDnQ5BJ1FQwGLDHHViqBeXvEUfhVAeUrwRxaHMiGD",
  "key6": "csAHB5UK1FBcgecZ2MLYLJ4kzS6toXzgV74GFSQz5fPpiCf9sHj7j28z1Qq5sEpEn5xVWb5Zdk3XieEQJT8Mgjx",
  "key7": "67XivjptmjGosfwX8xtzYH2r8ETezHHD6ea9FXHSYhNzGSnMQaKKoriDqXp31caYn2YcNcv2U7ypGm3Ft1xYSe9j",
  "key8": "3qLAgtRPn1UPEyik1FNwW3KFgZjPSGB37gJEigXUGvJomUrXcrkU4eDW7PUgb62gS6DWSL2pS7JG7wvPdSc3YpY",
  "key9": "4EyuGAxGYTm95gQQGjM9zBmbFx17AS1smpdqgLo96MdRGBgnc4tENiLxiqE6w3TKriQhWptLVvSNFdAYM64DJ9qi",
  "key10": "jHw96bbMxf9PQWjAExAfn2nqoB1cCQs3WTaN4YCxTeZWvfQvmai8zFnR87LDAMzvdZiqCNqEXioxf8fB5QNFJFm",
  "key11": "5Fhm5KBFN3WYn3SZVCGQo3vobbgDbzbhfPPTD6JZLRJDXdRtPEeLU9cvWf2BZ6WFUonfJmtStMLA8GQRyeFBv92e",
  "key12": "2SjrmycELRJs8gb8brCMi76seqKa6RDeUWu2KJn8dRNW1yAEhLK92Q8Lyn7Knad8oaLoLfsH5k1NbGXBGAaKKTB",
  "key13": "65PacsLSrM1ohMpuMpokk9WB9CW4c7Zi51KUjtVJUgVVQs1DMh4gE3qEWMrZCaMzUG3ZFBXKKEGaJcDn3hipzbhd",
  "key14": "5TGtR3e6CjkkqB34zEhrzhCt7J1vwyLbL2WGi1hTn4rz9VUEq9Qdz2KfDn2QzfRWo5hA2R7t95VxWK8Hs7Jst8Pj",
  "key15": "3WKB8D4T9MrYi6Dgo9Ee3MdUP8jeGqfvw9g7h8HEbP1XWZ2tpiFztbDbj3CGUxpXTEe68QDMKwuPvKEPWi5VaFvu",
  "key16": "5VvPgcAYBMpxHXN9NY5L4B3dup5Gu7opTz2oZU2ZwhVP9k1nwNbf5BqK1X1FidwxjjKWErzr45s4WP6XbD8Pe8yS",
  "key17": "W9e5b1A2R51FvdN9DMoA7XPJuZKitCZtrcFL5b8UYP536TCR3f7GRCR5m1Yvvo9B9JsN6umkQTzeay6DhgX4w8k",
  "key18": "5SuX6aShkdM2iCyhgGeQcrhDLBLYFuGfarR4MmR1RTb4Noz6rtWtwvfimw6xXRhJv63zzZPcGK2Mn5nvZdzJuTLN",
  "key19": "2dN5NKuedWLS73vFbVeSvxgroDjCZuG3Lc4hrjdpBAWG6BQgWDhhXqbbmdmZ8V1Fz6NWvCYrM99w3khhk17bSqQT",
  "key20": "2wqPonc4YCMgJUd9wqdW255JDWn25r1po5WUike4Ct1skMuCLyi7XVQYokfAaQ2bKBavtxVKasMfHSEm8vkPkhZ3",
  "key21": "3XvQPQpuw6bJFq7pcK6fMjKV3edA5CzMcBgdT3BMqRvDAuGjWV4SBESdUazf68WXBcbgohvU4RW3kBGvq9MruaDB",
  "key22": "5niSfTwLaQ562hM1HTC1oqemdyyPeQ4QRMgKiRU8KnSh3FhrXoBXC1o7eDLxX74ghRoqRx24DeEtkcFVANuZRTRw",
  "key23": "2dihi5x6ZnrbDZpWAtPss9kgcYUT44fK8UjuSj628HXGXnfDrFPrU23xj89fftgJsEPnggMX4AodVsF6DhUA3RDU",
  "key24": "5TiVkCPptTBZWxEdx7f3A36ri3QHGZvfTqZRsCX1nkyxkfyADUHCmJCKneKW7BFQ1DHpBvRcBs7dmM1ZmPpwuUwA",
  "key25": "59CVXakLsc7ZB6ofnP7vQTnBiwQfdbDZKByApT7oAfGJw6qQ8EgMU8VTeyoZRpFJwYFbwxdBcunE8PVLEvt2GKZw",
  "key26": "23PASnSHDLCfqjaw8HhZ4KaPj7eNDhUYRsdJoyHQXibnTEzefyeGfFh5d7ZAT6Ffu1bTGxy4481qb7FyZ5Puy5eP"
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
