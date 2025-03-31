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
    "XzLMsGkKVYuf7mxQwhJwE4N4pdcA66cafMBuC4cR6Yn8hAXbX1irdMX3rnnqWnQwHVKTarofGxyCgNCfPoxDeYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zhXnmxtfYZ5cidpruzNacm8piUnMnivpBqeGiuE6TmmFk6kkoNEuZM9BwsyCWz3NPxYjo5Mj9m7k4fcFvXcoCqD",
  "key1": "4i5LjxC3MejZ3FNNdDbWZUudzxuYgXKdprbmwBdNiRQ7xTnSx8K1f6Upgy5qqoarScsvyXZcYUba1F6b7wbHJBPd",
  "key2": "5Zgs2ZRDPeVuzvnmbbTBp8PnAdpZS95ZMH58ehiaASfd82QdQ5MpzrNzyRTKUzYoeyaRogAmMjdjCc3NY3MwTJN",
  "key3": "5AAKRnHjoE18jvasAz3THWY2SacTZHHGQgvqSKuUbTkKcf3VMpRb9yGYKCRGSESWTbMmHViWUjZHBA8hPqT9na8C",
  "key4": "tm4L5cJ8JuwvatMJKbrrfwc2SissQCFxua41xGyVjP5djweQB4ez4Bxf4QfZwkZv95dqBdKM91nk1W24e3YJksX",
  "key5": "hC4QTvvL8AgvWnoVb8Y2KZYCb9Mn4QCU2Df1hYPzynHDHUiwq2DvJnodnLoAe33PWpFfVEhkdS8MoXAmnEZDbcz",
  "key6": "4uoq7NrGzCKLK68Sx5fZK3oEGWS9TYaz2a7UYyCEjwK9m26NM9ZnuPdhjdLNaumEd862XpgfwDDpvjTwPJSuvm3C",
  "key7": "5XAmDfaY2yaCJSdqeCqjZ5e4cuR8LUEj6LDRArgucxFWZffUTddPawaCW4ipHRBMe7LZkhJLCMjwAT9L9XKSZ3hL",
  "key8": "5Pr3jcqtPYC8bgyWMCwqH6LgmytTGWuvs1Xgg14MkJdU4p1JhERoUobV9ajhERFFUbAeymJUWLCNiJ6s7KZGhuE1",
  "key9": "5EHprANP8gJNoy8JEg6heZbCWr46TRuThDUMachcnDi76PCY4MyDjxEKK7Jjn27vnxRJViEP1LuExZp8dwh5eATU",
  "key10": "5T6nHMAPUaKvNCkmDedxppZHqahDrayzuy4YASAk9RxXjUEQxEG1N5cXWabT1cgjFEB5WN7PX9oUTPPUPR6Ke3Ux",
  "key11": "5ENut2VYmYchgiwZ7MVp4KjX5xSNAjm3yzBgsJ9o3xcHiSm4FJ2Cjpx5d4bHpC8ULk9Rm77nzx1smxcPm28RCYyJ",
  "key12": "23sK9Jqyb1S2LJzzroVTKcYtpS7zUnwTE2JKRThRTgStQPqMhmVpw99Sn1gE8aNVevfJNUoPHHKVG2kHqbqQFayo",
  "key13": "3b5M9TVUBxPKFFBQuzLGiUDzVsRKFPsUu8RKceQpNR6bMxt88BhSPDjRVBRcri6Mt46zz2AeU44UB9nrb9XRzroL",
  "key14": "4MxGGoMpNJP181BUiMfx8UaPt312dobHqGMtwbxD7f6RfBWMjhPPfWqYWns3BUwTQY1MTFc3pu78bn4aEBcaGwdf",
  "key15": "4EAtwn7Bes5UgSGf5Vc4BTB8SDi6f4PofnrEj95ACLu4XNbU8tfLJbQEkjFeAFdZY5wNJEwiX5A621fWQTCAKaYe",
  "key16": "5vGWgv28Tt3AJv3WN1umG5Jq6EyQQ6tLbb4gA6vKs8j1PpAoBbGFMaaMgyspxZQwNdDYfq83VDD3j7pTj41Fw9V8",
  "key17": "3ZGdxf3mDFSqZdvo75A4PKgvupvFtxFfB5E3HftaNZmWbhjjeU43N5JmaneSz5u8y5yqCXzz7Tj2ey2hdUkQD8T1",
  "key18": "3saQbXdkixoiTRx2hmgcGrKwX14AzvTRr321AsVtKn2KMa9ZLJP61vp5eXm3CyWvYefcJmVMdjWXwHKPXXQW9uGY",
  "key19": "3huxiqRUCvSHh95T3zDLGW29XD7MNzrkQc1CYthigT6VdxEgmUdDGBVnXc5SPUCcNhgj7KWXNJhTfHuRuHuUrJdH",
  "key20": "nhMXLie21NDrxJ2ZVgJFujYzWBtpJaBnY3TB4SQ2AH2Pn6XeyxuXJ6dARFErcYDwVGhmuoA9YVpWEzCanDcpCG9",
  "key21": "4vFoGJDTSkqeaAvMguu6x7w5sBrGMYAxHuvTVevXe2SiNYADVtXhPdpRAT9pmeC9JRRyV19xubguwh6vvpTt76tw",
  "key22": "5KsRMr3m5fX6yL378YH9rhnxv4KFFnnEkkzbZm2phS9JfoMqqNW297RcfS9xfKAks56FU1Kkux2G674zMNcbv9yT",
  "key23": "5DrfUpgUpbMMezsRyUHQnAnT5ZNo2obQSxiPC2rhXjmSaHi5mdNKh2vC6zD5Z1H5GW4bLAtmQE9upYNbvEXmF4nG",
  "key24": "bJhquMpfV5jZLPZim92HkUNpxMuJTySZ2XdDaZwTAMc8GNRGBxC62s9tbobSft3T6j9oCZUFDPKXG26jNWaG724",
  "key25": "4xuuhA6Kfd5QAPxJUSRTkozh7zAB5BWe3iW4qzW6ivHi53cjviyxygGJPVyaRZPUD45UgEF78QAFpWehnKS481xU",
  "key26": "5MWix4HiwnZJ1owZdtFK3GJFKVcCrModYjhzKRfYycCshtw13iYpmBgezj98DMjerZKjWUXsDJpZZgqww7BZby3T",
  "key27": "5PT8bzEie8XDViAoTHeJMs9zJ5zHR5j2xXWa4XoFzRakDHZavdzjjiZKz3qJNgdoV6py2RRJnCbdvjGKebzNjqwt"
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
