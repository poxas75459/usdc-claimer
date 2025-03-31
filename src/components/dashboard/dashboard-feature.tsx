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
    "BDVJYJ8tyocAFrumK22kuGvnVMvfDsBmCt8zuRftHUNXxXkMLf1rcWWLY5LUofGtYbTUJHxjmH4CLMVAKEifDSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u35ZsA5g2wkj2XQozyzhRdFqUt3ETFCgRWvFd1einkUzr82GaohBujAKqWpThJTtQfmj9heheUa54MZagd2mdvY",
  "key1": "2JMdcrtCfDmfm74dsxmodXLGGYg2MuJNphKsH5yYcH5aLg6F4BX3NzQWX1FEYDt3Jr4bzvNetvB2MnCqDyCQ8wvH",
  "key2": "knZ35NexDcmCRQEKoJ7s5fmB2S4MEJSY1stp19SUkwCyP2dpe3AwmtD2usuaY6kozsnKLEmEkxee3k5mrQFtysz",
  "key3": "34ZeteNwdV5deTf5YML5kfr5VYw5ghYiYkbZJu3BjtCg7FHBG7tpVRYtWtVHBZuA5FzNgTVreHy4AxbTQC1K1Ro3",
  "key4": "3H1RwdKaiWqS2z5X97rz9ezL51PkPwnUCA7Q3bhwBCJEgArrLHkHiit6ay2KbWpzpP68H5heQxoD8Jaen9pfRJAe",
  "key5": "nJQvB2c17sCDr9nevsWwZiVR63A3aiMZczGRCFyLppWLwyy4Rpdcmf3gipL7APJUYbLk1wXVZtzcibDMC28HXgL",
  "key6": "sW4awpGioc3m4rqVbjhqKZEp98NvU67ffkVcUc2qSMaL8Qy3d9ecB5Ha3DxNJHmVfFH9UJ1xwAF7FhochrKKZDE",
  "key7": "5tWsmMoqUpDEfx8GXB27UcZ5YmQ3kFQX5ySGsmYvmBzeaBMuzkdumEVUAN9MUHU4UdQJXxN6qBkXES13BKCMHk9k",
  "key8": "2PHrz9gZJqA9xNJhZwfngbNc9kDHGsSFdcZWXe4rzsVzDczFVs2Fr3LrFuA91k9fWsujQm2vKGqAhNBRL8foo5rs",
  "key9": "2or2SiLbphiNFRSEAb1eizLcgf8otVa38WAj8WHNfUQb2CRLdh37DyM8THvaBYKcwiRAXVaJtCes93EBByU92QDv",
  "key10": "2tZ9na3sCdorCyacwsb7o3tY2Svgu2TVQu9QLEUAyfFRVuKY37S8uCPTYaTtPH74DDPd2RLAycbtBiAR12dohKm7",
  "key11": "3cRj5h157i93mb4LgfwGFHgKj4v6RdiGHP2WWDJe2yksFitwwYKckUUFBy6uvgifHXzkCE3vDX7bbTwVKUmC2MXi",
  "key12": "5g5FYYmxoR78UcBEDJe5pX74hamiwAEQWpwisfiZktE5a5jM14JG2CifT7VEB4yKn5B5KKhNnTwfAMMtyCYruLqx",
  "key13": "5zqmbKqUe1ctt8RRfVsu6ycYjNm8UjGBZwyquD6r7V9mxPca3a4dWbXfQxsRQUmeZkSTgSRLPRKqpgkQbD2Ez7KF",
  "key14": "c2nBgm3rRZxBzoCt99JNcpSckNuLhPewai1GDpw9HiDCyuZciTZ8yQrNwAvzRXjxQNbbR3dohofnX1334foekMz",
  "key15": "4z1jnufT8oCvBMXpQEBVa8cx22QSCtpQvnK4ot7jDu619C1NYmqhsc5A4HMgCboChG6hzDzZKzE18Hrm5kaSf2yn",
  "key16": "57gVHwF971opWT6C2ACoyvPz3dX4VV9ChDt12z5QRMU8BBXgAo8AbsHqLDtmwLuVBWv9tC819ftayc7JegVKeK2J",
  "key17": "4UJVgMaLXZWNZqwp5K3zDNSrdb3efVA9ETEkgqJcbUah1dt7SK3uE7qpZxTi7RmoivMTuhgxiNUCAHcYt5Gsj9Mk",
  "key18": "4QX4LLrxMQm3cFD2QaDX758SKUZdyrzXdwPKWJZSnZRN4mbFgtA7ty21TEsxw1VBzcWHVmhV9VKZ4PtxfmcgoodZ",
  "key19": "4ry8B3A1CvkrFEzJyGN7TGvKYXevmhtMx3ptMzoxFZEGah4mjbxaj4rq8eoUQ8a9YuRuMQDAsfkxb2Grid4QiiJB",
  "key20": "4E8RNXFrETK9tWPmhCWgsax2xK4rYhTY5KCuLmoJzhsK5CzW4qF8qAKbRQuszTqufW6qPSNPnrApX9s6Qo3DfAty",
  "key21": "3eX2ocVod4HgXG7Tbcsd2xtXacpgqMQoVqaVNgHiuTqEozy5EyFW1Sw1DJfZLivMsFbEmKWWTGYpDgYXZTxq81Nw",
  "key22": "k7F1myN9s9AU5Ykn3pRm7iHTJByosEe3ZpyJa6DyYEyQvPYSZwZTZoQn2TW64zJL3K2xccw6tSGqP7jdXi9BWjY",
  "key23": "HXkYLyErwJQTBcFKaqAD2o8w83jVip6oG3gD7JLAAFyMKveVbs4WigxtSnWxGJuKbnQvx2q5swmP5NtRBtxttes",
  "key24": "2RMV5CtFxvVynLzAguSBhFpqFGwghFMTDs6YvJeXpBFj1Pzz2kQUq7HBfdui7NiQxCkWfSmSezQTtrnp8kmpwXTy",
  "key25": "AYR2FdMNfKir6cPqBjrbxywf92f992xr8QDWRkqPBy13wkpk3y7jLZb3LapGDsotsmJvDSgkLkzrdz618Ttjoqp",
  "key26": "4uqCEb9HuJeLnexacJxA1SbagajjVbZ3NWnVi3GLyCVGm7wNib5hrnJKeEbDmSBhFkPg1fUqhKobwbntrY1UmZaR",
  "key27": "4e4ExNanNwLNSok2ekJPBKDJcwMCrRLqjLMo2bhCiu8J5kwxsF1xEhtKL9qomTWSsQnmu5m8NXKNuf3LJUxvnNGj",
  "key28": "3ZF1TmYScZ7is1yT7XMBXk2JdsAUDFLVGNkuzCD5dJQ7c9ug8KzKtkePF2oHRv7jt8s4sVqjARz9pTGJcUkF659X",
  "key29": "5Q1GPC4cKTgrSoXxKMhmMPzQKe6WyXtHrVvfQHAkBFbj16Ux7kB4Uaksv7yXhvFipfamPtfUsX7T8BYVuEpJRZRP",
  "key30": "58oVQY4cs8ngB2dhMNzqLUKPLrsLgkHg8ZiWkRKCsTAQvbjN8jwgxfB39W4a6vSq3JfjgPNYRNsCDkwMPrYe4a7p",
  "key31": "5vqAk4b44wxN8RAmmm2Y3DX43kZm47pn51esyJ845CdYuCNPfnQZGfqfFRPB8WXa8mMvARi9sykFYM2j4oYBJhc2",
  "key32": "5RxmKxrUe9SduZeetsgFkG3xQqsYSTrbaGYqTFfJLvMHrYycKizkT519efA699XD7fmEKo7czmE4XTxogPWLQ3xn",
  "key33": "3tFX8GGbVxZvcYdqgoCJW8qzPgJG25t3jUW1eELxsRNcRCvWeyFWeX9XdqvLqjBCrmLAgYwyJk4hiRbAk6cPGjFL",
  "key34": "65z2DFws7FgBJG38nd4W4Dvrdu8r3r8WzJ4xaFma2iQNqCfDvSJDhJB8FCeqpR2Nr6WWTbQWAN4f6ykwwGWNjkD8",
  "key35": "3sJbsWvE3je7xRL8MRxoDZGErD2x8JGub6qPossxcCRecNuTF88nPdSY75zWfN48AifFvmrxAvPff2Sz4qxbpGdQ",
  "key36": "62mh7CWVtAQKDi1vFpmjGJq274hCodyuRhTUwbi6f47XQanXMM3dENDnoS7KgUKsKJMHnYeLdiTVcHUagcQ9J3QD",
  "key37": "3doPqrQsLJUTtgJbMWYTxXr7iRvKrVntWw76BBsDWvvwdHAqRpSEWgiWR6Fx8rakZadPHzb6kyXFMRc28V6SxYby"
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
