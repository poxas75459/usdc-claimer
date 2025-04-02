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
    "2eJ6WReY31nwEX4VNimnJTgJARyzVGqSUEai7SVyamE6PT6konxvo2x5k79oDGGGbPURn5U6UkV9tb74pg5w1Cyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41yVXbEzwpLGiPEqHjh3F3PJYY6sin1imRwhkXSuUKqk9NBRUU4uDbn5UNTnKs1xt6eyVDU63aWT5gjh1X9LNa51",
  "key1": "2yoDjosAE3uena5zWCPfKgdvqtKtJQ1hWkaZraWkmDzFf7THc7yy5769UDARbaXewJpKmwikXD5p7ShPxuxt3cR8",
  "key2": "3CCtCSuxXB5K3zuaAcWj3k53Ff2ExVUSR3XY48B7RUNN78tLqPKVGeHaHzHo73yej5w56XTwbjWcCWguB5mPGyBt",
  "key3": "4VYBYR4SUhgxwvXEBAvi3pbMu64dxARhGFTRa1xwnCTQFUihoQAL5HmeP1umFDSbKZmuwsEsUicYx2JMFfiHRCmF",
  "key4": "5h6cizpS4YD26euQMBNPHTRiyy51kxLyKZLd2fGm6kKX9yYBYvnARk53Zun6Hk2STL5qWULYmiUrMC5dZKTL3xhp",
  "key5": "654BdFe53Q8KDdX3JJCbPRz5QyVPhBvxufeZWhcCArJD8tDzJiSXd4rzK6dS3Ef8xt7pacRJ4wDj4vNc8dpgZ7ro",
  "key6": "46NfRWJg4pW8Xa891QJZLzFxS61g3qwvkAdUvCkoLFdDy9WpRfXJ9hd9nqeSwPyfbBTVe6ppgyi5zVomJnXpob32",
  "key7": "47e58ztW1B1StNiCu2i5cY9FKB7ig43LPYWTTfef8YdUxAd2BMYXtmkjCZ2HF3H7QDthgyq7w2HfJoJzfd4f8pkN",
  "key8": "4QxUnS11fxqXZxYGw8Ky9GhSiSBDUJwbs9oUSePhEawjYAN9rRPL3CzazWorbeNMbGCXFvTGXNck7RgUbR8gGLkh",
  "key9": "51jSCt29Mpemj131qiqMDx5Nm53CLxJ7BMXZj6KEyaP5WCqrd79V87XBjYArGd8LFEChfSPxQVDFvwwsfZv79tdo",
  "key10": "4YyVum2e31odsiH8ij4z3opSUhonM9v71zrsDwxGZawbw5MfTDQhfJJM5CozgQphkHAKcXwh4ibhq6CQgtLU6aSG",
  "key11": "5WfyWVwid81xizuyw1yWAd8DU4X1Yf9QXzjmAcT68fTZ8PvsUKJvxNp7HktwdWn7byet9tgMbaHmsiL37aFRGAhV",
  "key12": "5FPBajigk5fNuaRLhWr3Q1ntu9VGD212R9KTjnR5sE38ZHPxVtjEhzDWhXhauejFyfeehd8qyEKGnAZZcB6oCRz1",
  "key13": "3CAgds24e3d9XsvLwp8gjLyA448DGQB3qWQYtrpWt2xqPxZxqDhAe6PPT6u2LhQbwNLZJLGob3rhmh7wuonngu6Z",
  "key14": "3gGJBDcvE4mMxQhBTPuArg9RUk4tUgAbMoVPk3eWwqzoNCH4ME1ALnYGDro66QPsGgnhDznSL2bjscfBkFJH3gUA",
  "key15": "4z7CPX1sK2dSvK8BakBuQpz2aSoaCdvcx5byYbeZYwAu1pYcj2XBsgjD8MkDyHoWfb1VrdmjbrroDmqa6oopafkf",
  "key16": "4k8ASc1E6xt7xiF36su9TXLY4wz41UtyqBHtdQsPjvszDcjDLokaPGjRY895EmqUnTzV368g9mSMoKjgCwVTbNSm",
  "key17": "3cd1VNrH5BAiXGQRRGV5KFA9o9uYWy4hnxV6dP5R4UorWGRUdsZM6uuE3Q1aX5TQ745dYkDuMNBVhcobJpPvwZyi",
  "key18": "4f8JSGodUZbaT2MrHDfxNLPTWQPQrexgL3jZo643Wu9wHnM7TevacoYoFXqdn9f4fAMAhRU1dGJ3hgKAyP1bjnBD",
  "key19": "36bGWQrkceHKGLH9Fx9g1eNoAyY8eQX4kYNLG1cvuzNJGpKrqusQyMoGFPk91TWnmbbXJ7pj2bGUAa6KXL6moGDc",
  "key20": "LFcogpXStd1A9iqnx6mh8R5d6qPKPBfgXj1TFdNT4evDPcv3K1m8dKG5Wxt68HKKTy6LrMeuBFySDGziU3QHvCg",
  "key21": "4oMNBgKMW6c3JV8LNEyVSLcyrAB3uDfN4VEbC9NfWHAyJ7HhfLRcHJHcjjkCudrhvXSTRUxZYTNs3CJAjWDn8RVY",
  "key22": "4qgeBDWUre4x26956FcC2b6zCvi6bNmQZ8i7haEG8hj3M93t3WZgHspsDcM6rNsvcVwR2RKcihngE3jSBeHZ16VR",
  "key23": "2pGASXBmv8mmEeTxWSkz3fcFT4oTdjqXMxu7pBm4q6qphMBK4CRFZNHenvqDHEq8DteMKG8HGhBjUmLuhaqxehYM",
  "key24": "4SSX3DnY86f6qwA5kPv7iDLTxnqfu5AbXSKfW21puPU5jQ5KmA1QUwFfvWj9tTDaR5CXoUwgjyoUT8SU3SDAW7Me",
  "key25": "2oiT5K5XGeSxRjLRU7gWE48yaosiX5WdBni2dohzjGiqo33VHwkXYGcfziLm3UKWQZAMPvChDn6uBXNvYUVNf52A",
  "key26": "2yiREpn35X3h3sdzeXexmtPfnWBxv8G2CiqAJSbEDnoZNpfKK2vHfNVJND6HbLKTtms1vbJV83766jedGSNv97C5"
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
