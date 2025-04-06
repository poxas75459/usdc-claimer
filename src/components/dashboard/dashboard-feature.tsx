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
    "5HuwE56cD7oqVWNNvVxkgGaP6SoEErfC9s9aaAdidBM7WowAjtNPdtASJpoDGwDGMNgLGgsCDzBeYgVy6m3QA813"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67mWA7MkRK5h3FaYtoFcFxEppQUVa1xFzLcyB9BUAFpYLtL12wACKrhjUDBNf5mWAmZbjFaRuVMSSqPBj2W8kY43",
  "key1": "58pLjCpvWxU1fQXoyPgcta4dD1NJL9yrK6sXLyuD4LqUvKnu96KjNBgVg71CtsYtUwfdpsReCyaF48ui8FJaRKyp",
  "key2": "5CkcZA3ZcYhWLXfBwnWvn8CLaMyEPDteX1p1FethsCcCobzscYpi7G8XprHJcocyjzny26kcWMuRjin1k7jnLd2k",
  "key3": "26G5C6hqztPmtTaCtzRtBFDGMTkyx8tiF21QbUh7QNzB2yt96k7xTMyFz8cfcgvb4axKPE7EXzhtbqTA9kZRjtUx",
  "key4": "2sMfvmPZwN2md4QPAaZkMTGAogDexujGsx9ukHXxABWvNZQSaime54C8WiwzLroGr7bZ6j43Yu6ZR98jUBv6XPRM",
  "key5": "35DzSAAgBXqH3BPsnPwn1zaEmD5pmm4F4LRUwciADJTB2kHu68j1mKAsHeFkEFcMB8AfEjrvSvZg5FZv3womQckz",
  "key6": "4UWrbBY2ty1eDL2kkWTG3meWMDjgnW4AqYMppkL1UaURHjFr6c4ys25u5gwCgAa9Pz5rJ3HAds5RM7Q9U39iiGyP",
  "key7": "7EAKq345bS9SnsQCL1JTS4fgXiNiL8rv3AkjP5JZs7iiYFEL9F12P2JpFmLyQ11tnQcK16V13dji9dEFMg6HnXC",
  "key8": "35j2Tn4pJ35rtpHX2GTfHeiY4DJy4CdBzaMt5YSLFqQ5qdtWKC3Wd6iu1XxDhYYhs5WwLNcf5RdpxTsNz2397qqW",
  "key9": "5Wjgj3HY8qZuAqLEJ4ywZaDVEqoTAKSLG6B2oCoRv2LaSYSy9ZtwLwj2MhddtHkSbr4kuPgHduBr5V17Df6LHRD6",
  "key10": "4Snm6RdoGnPWKpQrzPTiXcsZsYFVsuzM2zJtvErv1Z6EgtWNv29SmRz1RKwzd5qhucbz6B1XadJK27g9J1ZbZi4V",
  "key11": "3tugtUjZXxeVLVRJmQmxSSW4kg9YbALfsyZNXH361HUoAf69MFn7hWvrkNqf4xXUAzmBeB6UjWBzh2okpJv33vtm",
  "key12": "4pK9mGF3bPiusPKZUp2jEpJWnMdVLtFsvFyezgL1HpW45Kgyfcz5rEet86mQAa8km5QEKixW1goJAAZcMSghuCdV",
  "key13": "3ERTsFuGEj61QF1zZEsWq5DeVD5kLPJ91uEtw1FeVdApKTqDBNRZBeK4LUmEUnYP5LhabQPTZj4fb7bv71bEtHHE",
  "key14": "5BdJNFTtfzG1ugVELwwfwNHGEgh8i7VupRGsaKCUJ7JenCFYz3AHXRJMeuiLdDYnZtn4an84tN34PotD99UvsMwh",
  "key15": "5bczT8JcfA8qLee98j49VFgYVS2FpePcbheqkMphHWJA9nDLNHDCND5Lg468qxZxrz7s4ZBvUM9kiHHWz9zMSJas",
  "key16": "4WNHY6njJUQ31A6bZxdC8RhMeZK54zEEQRXVUooqPrHvaA5i3JAYDkGKsm83WjELUTMUyhK6GFXh3fs6bSRhjPdr",
  "key17": "VLzmBRTgjSjXixp9mZWRRRUvUyUBD9tDXWACENfSSSjJC3dsEbm7wbcDmZCewdrW5bSoP3dnxt7Y6yhMiVBDcfo",
  "key18": "351uuwN6RAWQuad5dTm6tLV93AU2nxkcjxnT448c2xmwDyZ8hKSnCqB75W41H65Am2EDmBaa5YBLpzCMyLDK9htH",
  "key19": "4pwAFQNQ1UfTNQnj2ZhAbYQhrA2ZDKDQ5S4mYtNM2PPkK89K9jgnwVx3mpVEK75WUytZPMCvjsGx5LGR5HfAbhCM",
  "key20": "4WdivW2Eg9D6aWuupZHiw2HT5KEm7ZqWoUgnwh9HEBvUBcMGfpC7qoKU8RpXH8AKTBPCNNhPY92dGk3wmLN3kbJh",
  "key21": "5F6JkT1PGbJKCQENgsjMnTrpTQ9K5AChinm9jxGhamD17ohXVZ2nfmpbJMYmm7G6NLrye1ZXinKtWXJADTQcn6Z8",
  "key22": "MyRgkvyf3iGeBmPoHf6ppw7TiKAG3rBpv6zsGtWWAcKQWUhJqWoEM1ttKynm1wyF4D7u9GVqxdvaRey3d2QdqRH",
  "key23": "4vNnq4iMdHmYQPvWfR58nkXtyVNT9V81W9jQKc4nxZDyE9gRDSNv2zop2zXKp9wdwyVhNUQRiDD3D83PVvgFCVAD",
  "key24": "4TR6UAJoe8nijvtyhaLHy5Fn4AQwN5jFW6iif8gR93dSmHGryNbrEEYzdhin65PzyQy4Y68mVNuoZGoxGFmqujAw",
  "key25": "DEHYr2oVWPbzhhBGaEQmoFYLc7V4ULyEe8jgKnyoawJd3TtNdA6bqfax7o2oZT8fHsvm9fc4dBc6Dxi9ybQss37",
  "key26": "P2tEqZMceFN8o943ZXJjr3ArA8YSj82nL4gMuQ4vBiNcXU36cMg3m69wSNCnBKYEnRoGpN579MSbWek1Znz4Eij",
  "key27": "5ZSEJGm61eboEApvQTNg24Z5XmRHVyje7DfMyxs3nf1FhPhcDo242cMx2ddU1UUkpzbfXWqWZ1M3e66Gx3Uicky7"
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
