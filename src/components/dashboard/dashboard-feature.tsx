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
    "53wvZkPUVFtPzow7oYAdbV5ShDYLyGJidJSogHBmifJBgTUDW7F81o1UhnfiMVqnJA2QGVAhoVB7h3pmAN9fTfwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rs967JmU9hqD6zxmEz45VGxpsVod6cYPmL4JSfNLR2NeMsBHTx6XpW8M2i7DfqgphhqTpfmQMcVF3PraaVC7EYV",
  "key1": "2YdT4hvutpJ1fmWa94GsNin8kRRj5nccX8txmyygq3yVVQKUUgyDTo2nCkVhkKy4zPtH9RhZ1XmFiWhZ67ETgaYP",
  "key2": "5d7okpHBK3r8DbfDxsxhEU6S9FvmC5GkVu3cViTv8nkUgBwTbPLGmMd2iBc9tJ1ohRJ4CdATzrcxkjPj1gK9hpYH",
  "key3": "5dNZghpiAN54GbB3PfUEAcz5xxDF73NMxFqayBa1Ghjx7fVxyGr5uazENPo9sjuWz2Tty26SyJhZvpTKqi98v364",
  "key4": "5d1G7A5PCtTMkHuLxrA2WCsFrPgVjvQBkJQCcGyAwbCNYMGsXCfaese345rN51bPzyKh2MTmeYnig79z1nS4LrjS",
  "key5": "5JVuMsfXg1JSmgCA45rgb19LPmVqMBKWYWyGZMazSD72WTTeCVA7krns8quwMuPYxWjaJCiKb28if8sCu6orM6tb",
  "key6": "TDQuSwKhqW3v4VSvm593hb5TyGTc6yE9AZiwUCv8ojkSSiuV6PkhtAFf1hNu5KUv68vKuuubNPAMzNAhN2tvyLA",
  "key7": "5rAysGJguxvEhHogLGkqxw8TCLiQNbTmSuU4N9DsStFReCoXe1HnhBWVk5G7DGRdVsfyUWoqcJbiWRiY7EPpkKbK",
  "key8": "aYhzHa1hPKcUzLZxGdcH1Qp1sJvvL8sd15FSBHS2zjyc7i9m71uPYW5UwJNd3puv8DP1DJa4MUjDfG6WUPnH1gC",
  "key9": "3MkREM9cUZxMhVSmJo2fKMy4VRAbdRbAgfehoH16AhnFDve7biKvbaknhBD7B1MXbcKLQtj432AoppPumPd87FT7",
  "key10": "38cr2Dj3RTseJEdbsKzwXofz6zry9Cz1JvThYeTU4dwAGsjnuhE51CppxQZzYk9gUp5NN2YsbQ9YxuiYn9D1j7bG",
  "key11": "2X6pr76kEpxGnNGxpQuYQ59APsvckKp34yQvBfJtjEczGPeL6BCYUHdz7WcaNeuhBRTJ2qF9ovEC6uzhLAY27fag",
  "key12": "31uKNLK3YCJqSwNqSBpnXjKZwDc6ZZMrqyAwjFjr9G1M7sPzbryZzJrW2rpzzXYxbUSM3tZbHpbLZPXfEMESccsa",
  "key13": "2T1LDuSMVVJK73iTUFNNtSt4eixqjkGZX426Hbtr97Cd94NzSy15m3P1nZnzsks8PUjogWTLnX4cBHUghaQr1Yx1",
  "key14": "5dkHukigSAmcy4mAbidAHH5Jy73hT5JCUJd8Vx8FMRb253cFSj2jbrF2g9ko2wrLnKsJYvLsEsxQs7BtqD26PFWb",
  "key15": "22gV6Lnbb1YrkgUyqYSwZVRKJo5i8hCbGBMCZNvBur9T1rRs9jZjNG7D7MxoNafBdvJgEc1mNKBavKHhLiGye9qL",
  "key16": "3XNt4PLKSsQcFTn1Gf4hby3sJh6rEPjDQwqUemqQ1vZNgWANA9ZP2mE9x7k1vVLGCeCqzPqnp8DhrEkhohJ1REnn",
  "key17": "22indVFf8pEStdkAgrVV1SGCike5SGzxhRjrEKv8v1BX3Y9syBhpMk9nudTyaEb7f1CmZ8sd4iWTEMuqqF5MyvQz",
  "key18": "4c6JP73nFrSJhtTWPh7sNFvqBg4zhpHR5EXijLoG8UquKoJX4HjXPjN8CPUDgQADmwUdKCEQMXuU7QEqCE8UEQ8D",
  "key19": "2kKsjM5fte9S7scAyaQagMkYFrfSBFcA6Yn5QVPn9tzUz2M6Y1c2JPkysoxyDfnJvNZDeVtK1XdFqX1PDBRQg6aF",
  "key20": "5shuDNiVFajJzd9srwcdkc99oAk2uVrwo4nkCWxQ5JmUKE4RwSzjhABtuftf3R6CoDPx8bBdxJcFGLASFTQwKPuj",
  "key21": "5nPZEVCWv94Lmxy8WTKUj3z9VrR7d2UDftKZqd24aS49CGfr2LE3ixVKh94CgNcL21gJjHsDkmWQqV9RJ4cHj6cA",
  "key22": "5gf3rKUqDPGC2j9MVi91aHPUhrCzsDF8iv2Y7sLXBFYZsWdF2RuKbjsiPSMvBWF4m6iSuR2uYF9XwwFnodfTcxzi",
  "key23": "5LTqagaeokCXYoGmhx7wTemk6mC5iTzLrop3dgJorhfaTFyDFWpAg49iCt9Qctq8UDzP2TpsDvF5eAqyk5oDQFgq",
  "key24": "3guzHRomYxuA8hcXqcNZhciYLiBhvs9PxqQgL9gUhergTM19XmigotdCL5ShJBjEzybUw9pumKu291EnBrHHJccw",
  "key25": "39RnpVxV2BmdibsNNhM1eG5xHG58kTeZbcQyWspghwQjt183NZ5mB7ACsFHNPgonToFAipW8e4FgC1EuysMoftUV",
  "key26": "2wcyMYRwHpFRKhFa8CfTjiyjWGfoxr9nnkC4k5VWsNDk7ftiZkxux4nxUpwqAJGJ7GDgFBQpBUwDF3uY5cLCac1r",
  "key27": "2SMYT7bi1cthtbRdcUeXDmKAA3uQkeWWdTWbnaJtZtDEDEGB9hrBXSozTnmHbb7k4Xa2tZ4Rx2nethxyf9CAvc4E",
  "key28": "29cNNRBk6iiP8bZ5vCFd7fAm6UxQc2Erp96TtDkypjY6Ltxcs5DbGjS5f5SofKRZWaVXpBFVpnBFPd39rrvjULR3",
  "key29": "3t6vbeSvVS2fxeey3mVFFaQWxxXgXzKNrN6EpjANi5eo92KVGrsdgRpX34k5kuE8chv437H3en2EPVYF77hDhguq",
  "key30": "4Jm7JZmBGVRdAer2H4ZvxC9iaZF1DiFosxQCue3ZQFNJN6E5jWPaHC7xje9NmckWVtJpmTfgtLX4hayWUYgSJa5X",
  "key31": "2HEpaDm2KvnKxbyPFYZD2RuHGLa3iov2fHfBzMvkCwPNc31oAVM3BKmiXt44BqYb7d6PNFwxJMSCyD6oHjNcLk1V",
  "key32": "2T5UFo2weLsE5Zm8JRB48rqgBU3GhrAZ8HrX2PVhwwCd6LPPRtA8jTXzNYpcZNjBnfdEJ7QuPPvGdqTAaLweTDr5",
  "key33": "4ugW4neGHfsTkWuZsMBRxbpcXbjCB21Fs2efZCNP3j4Hes3sgEMZXJwNVK3wT3Znp1XVkoddLpsDcDq3eZ255BWS",
  "key34": "3Si4qkJ3Xxg2aVfSVmXfBUW4VyMcX6hV2QcXBnxmHF2T3WAUtF3F4LgKehbWCNoH6S7uyPVy5WTVDpJj9gGT87A",
  "key35": "57e1SjEJ61gxpRXasqXGfqSDZ49jwx4w5Ae1R3QPtMzvvqMw3hajwbBEC3vKkrRWBUBg3i4eMNWCnA9LqYBWuBoS",
  "key36": "2hYeGNjXjcPNGHCRcfiPUJvLaazs4maWav89NKChpUuMXPVUdRRsgY2jxJEW3BQ5STwod69FErghunXNRR9Vurao",
  "key37": "3TZsFhSXcvV616p12xC1GsW2uLsR6g79hc4UQ8yfSoE4GpepQieVfgL2L5stCGwV7RrmB5R9HszX6W6g3397wHdb",
  "key38": "316dRHL7dGtDNytAVcwAghvfcP7o1hfnzVYmcHQz9V413PXFUwFwJ2UyqAoGhr7ZP948CjZ7MmKxPN7USvCiGSL5",
  "key39": "41Mv2iTiHmsjaqM2NXRBMNhPw3VngnP9nCdDNfVFb6bGm9f5pTbXS1Jbp4mAYMEGi1TcetCbtaxKLdke3K9fxkDp",
  "key40": "4tZiZoX53B3DsuUnp5Xga5NjfRHpz2McrembejFZHcMjLqTcjSzsJRZHW3pZDhbhREjikJQwU5AfW8RDX4USPwLA",
  "key41": "5WL3hStGNZc6wEAcSD1Ah2XvMe3qyxQA8ZEq3jRcNGjweKHRy1DEbQ7smDG5acdbkDA26xwYNiD9hkQvYVGktX5Z",
  "key42": "5Q7Px16PQtak855pgWMvRA6itwaS3mR2J7saLAuWgzAGff6ptzyADi7TEw5c2GrxtjsR5MREukfhJ15SdM8j6yVS",
  "key43": "5719aw9niBsiEi1kX5agMSgDoGLP83wFq396Eos9BEieoA5T61ciV1PgfSqDJEAwgb8wNycnGXtRWVhi8X2t3vvm",
  "key44": "3aJg6Sg8epYFL1wVHjQ1sErwcKhKCGbfWiiXhCwbAaLaUPWjZqPsoh62gnjLYnUoWabWurDqiQae7RMSk6pycQfZ",
  "key45": "4J1XN5zFMMfr2GdqiiYQnQXj1pAJdi6NJMvWwm8LASMF19VyXz9ggWoTZ6XhC52thyNuKy3SB3enqXpsZpWsJLyM"
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
