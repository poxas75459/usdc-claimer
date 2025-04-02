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
    "61MRs4kicH1xzhdowPNk27cfu9s1iuu6C6XRQf8vRpF6jjes5dJdHvYtJR82GGYjagKyumL2K2Dp747Cm6ug3ZCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NgVEuQaYkcSvJV9yqJJMtq2sLBAbFtdyqdVAZKY2mGXGi8VS2QthyZhixQjM5FfFSMWyNU67vCyuex6PBKASuhg",
  "key1": "4KPFidnSVAfn3nSC1TSYwP1PCGrgCpsQrJaqC8yyaEuvey5bsMGa6MxoJtg68SDG45UUsTV96PX3MgEkxY2LtJsK",
  "key2": "2eVfa5dZnoULrXde1iMTL7AQTV7xtq5ZHZWeTJc8QT1obYdpvq5izMGGRNA2vfq9SXL3aPKW7KYNg6xS1auoGHE1",
  "key3": "412fnT5Tukr7SrGLj1ftUimwzoNcVi8xe9E9fBfh1acniw3Q6DLxHT1h3Nsgz1fdXgF181crVy32LyMQBuDScSqX",
  "key4": "5NMasmKj68jz7gAEbGQwG7vc2Bjv3kN7AbEUD6kNjUFBFX6NYxKx4X1RpuAKFxYPLQ7uFMdfAByiprzoHD6u9tkA",
  "key5": "3D38K66v2o2RjDSGvdatqzbYKVtFzhPDuQUhEVSYTvPFVCQrquwoAyqPXf8rACmshZceL3W8ojmwEF1eWCLmVCh4",
  "key6": "2XFTCxFanrA4YYd4DRqoN3PkmGbnkwrQLQo4ay94y6zzkzFUMzvLHMT4xyPgDZ1ppc2EhGEFTYY2n1Haj6wKCb66",
  "key7": "2EY7wKsocV6aBiqvQxyaZihHEM5SyaYYcKrJEa2TjZAkrZCC15B4FbjvdnS2SNmvzbYM8jQtjdZFtFzHZhdJja3V",
  "key8": "4Jr2mJoxPxWS8opUdrTk1wmwc87LyHWTe81oWkbehEnDhDCFahuGQaPjuPyBWB8EyErzNJwCAZA4oreuvsHbVQcc",
  "key9": "34Rc6zY1BzRe64enEYL3fepJuXDKoHvRE8VL8i9p573NNByk29ngGMT87gS45EsBijiAnftMfXsKsziiCSoSKmbx",
  "key10": "4MrfShG3Ghx9kVBccmDX3U6YzUxd9XTuDTumfNc42njdxEBj3v4CbB2HBTbNF5uGpjWRMdYv3MuRpRWzBegoAV6v",
  "key11": "5kGJsX8zMwVmGtB7xDkFzcynPnQe2W9k4SHrhgbkp6GSvWexspaYtxEzoADefMULS3esLSC6xfszDym9g9xzHoXv",
  "key12": "2fxWMuuKipRhfxHNXacEgFaU4CLEsebgyPKyatRWGyWDWvWuMSuS3hLMTLXPhpjuPCcnpkauitcto1u4wMDNg8dK",
  "key13": "2YC3Cu779bWGsMk7fxB883eG67VX72TAT9XVs49a1hLr9pjLgnzj5ccj3AkViquW6ieSrLoaRQfaZ9YRbs6UHV9S",
  "key14": "25RTnwx377jB6jDkqeRHuVpqtdNuKpCqndHUiJ4i97JDyTqpDgmjD2bJjJ7JkRfecKEy1JWwkYgzQbVNJGN3uwHL",
  "key15": "FAtPXRHW3DBbH2Dhkgq28Mtk87Wn9A98ELuigxcXsS1wjeAb9g5wt2MULP4gw6WneVZHTSkwchcF6XnV6hoyaGY",
  "key16": "2HhX713xJfF1jPGkkKzejc3WLKHcCHrTcCFeDmPcgomTPb67q1PG91uUuobWCiBaJ6AJ2EuEiyYBfdEWzt9vdKxY",
  "key17": "3zEMyfRHauzDeTRZtSQxNnR6wjrUdZAx6H6Vg9D6bSStFXCYkfQE58DuW385E1xbjBdvmWKvcxGeDR2zXxrVh9aR",
  "key18": "5Qq3ziJP3eYgTEZWnt58QP3BWnZhhnifmfzm7EWiei6ZzFut3f8xbfkcfTNxHki9DdfzzztWT3dJxwhApG2GNbDE",
  "key19": "5wK94kkfoxYAJkyygucsyFa8tMGuCQQfvkWRxMRNDhgHd3E7CEfniELDEyAkEpMFWfSU36wumEjGUrN8vZkzHgEX",
  "key20": "4HdYHjLvAaLEy19bU5BKW91dau4TM9UrWXCpTbrHECzqYtZAdXcPa8o8CtVDpKMLEjHHHPCSB3ZheG2TcWZPhwgJ",
  "key21": "3AYsbqk9jf2EobR41iLFPTLEapD6nRQn4gVNydTseWQeeBkdmUVtwpcCM4c3AgXGWk3j6J453keU6ZT5XdfMFn5h",
  "key22": "4yeyzGyVhLAX437bXg9ET5Ex6mGqB4z6NNb9ywpBBXyNEskUgASN8SqMNhMBV9Fx4LftyyxBLSDHoW5xbWickqwV",
  "key23": "5ZCxPWK1ZnEZDcZA2XRBkVuGtFHr3aJoANgu1TavcN2rqbstdY9JrEHRKbJ647mdJdE6H4TBfffFZghb2uVsY3rk",
  "key24": "2JtJ13DLDiqk89QovAXFraWKZbZ6jViTTF5vFGKocg9tk3unTGHLcE5LWtrZGTVobsUaAQiFbCU9NX7oKtBoZyjh",
  "key25": "45qpKsN95SBfXRf6CMHgC8Q7zaEEzdPFSGUxeAwtq2n5DcYipxB3Go62JgRFKMPsAE3SGSjpesb5AWXMS8Zu2BsY",
  "key26": "4VT4u7X6F9HAnLh1QVJuBVsbxpuDnMg2ZsBWXwZgT5CdVGZ3emmwFYYbCnfhECaBJ93UCEEtzxTbgfZeWEvigbdU",
  "key27": "1XxcFNgUNXpX2df4L7ybicYvSTysutGfkoFVqbTYMSSLYGzT3zTzmNi6r9qUy9F3TLUhBsnAjX3gbkaH22eLbsK",
  "key28": "2fRriwR3vUBjVkCp1HhqKyqKapNZsS26BUUuY5Vj6DjVMwYTz7XBJudnnWXUNxoXMpuUAw9EC8fNSUagbhorccEZ",
  "key29": "BaANeE9dLDjNF6GNxoEPm9ahCMjLB9dYNYDNEjNK2tEmitpAmuy1rhdnXkLHGxwe1gX5Ci2CqDvav9neoyJthM4"
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
