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
    "2nM8V6PaGB3mtpMSPLGQscUXbh4u7xKo9DGbvk4kvjoBu2ogEDixak69crT6EXHE2GYWHeedph1MrJceCzrF95ZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49fPpw5C1BtrKrW5dqZtbVowFq335E366XEb1ScmpX5GQE1A7c4YQCjEsaKjqDBWbd1Sf9amsjzt6QweDxuNDESh",
  "key1": "3JvStMDnmfWtD4rqhPRtHnrmjSyC7j8iA7nN4h3eH92RGsUB92LTzXFPyV1PJYGBA8jxpQgtZgDHvAFHPM6MUa2H",
  "key2": "61hnyQiWWThjrsoRNMEhGd3NW6HJpg87SLak1jKmEFYoUoFhSFPqrrUDsuCLyopnae3mZ5fbVEQM46Lw2DyVh6TG",
  "key3": "ZW8sg6QjGVezq5ZAdLineQEQhjXLL3QJGorYC31vaLZMB8kKcG3DYaBcwFCkWXXHFSe5ZFUG1GRMqyNw1wdmKbh",
  "key4": "5Ta2xBCysiHJXyEhpY5B1KaxAuMKpSKi3GNVtfdXkrPBSpomei91qG783E8uvd7oDktesXfhys4vi6y84w86Tz4N",
  "key5": "281TwvmLcLxnpp9U69zG8ukvvPbm2SixcUehZztWkS8WbxvFkWbcHMuFdXQbMt7Tq1adUbmrB8jXMwGWzNPjUMd7",
  "key6": "5WG4nRJbuQnse4CwxLPgm2XZhvFtQwgJ6Zye1rTuFuzDcPwgTcLk1QuqpVrkmuBCqVQbaHvuCLzCQPoeE4zJuVR6",
  "key7": "4JH8VbTayr6GznYEL8NY9Z7jDdN4G1TeZDheGhvkBVLH6398M6hKueiQ2eYWJCcAVct19BRAE1FeCo1JLx8YQaVY",
  "key8": "dFYjoVJoeJyCQJ8GSCCoeFshzrCC2rnZw1ysR9P543JXkZtCkQSE1Nviy6DA3Rc3XihYCxdUcVKqaiREsMPRksn",
  "key9": "3ScFcCQuykxCsEqF3k3n1Ycd3CfMdyuHeBwsPGU82z6FMD49oUKNeoxwSMQJ1JECX2jRdiD2Rqd1zPyGqXoETcp1",
  "key10": "639e3Y6FBb5YgStoJKaGsTUmu7M6ivYrNdvkGMx2tyyac5nRghkqMg1sTGvo51k9YZ1MiToyY1v7aRrHdyhfyhh7",
  "key11": "3bApQwHtaGt2nhAk2nPBciZWMcvAik2VZ8hsBc3GMsWHnUFSKCDexZfbx2nfAHtijVqVPXEBSmGfVTUjPhND2qjB",
  "key12": "2TWkwfqf8sAiYxfrVvMJU87s8y4q13zS2AGA1V5YQs1pxPxxAk9AjyjdjL5VaiFiTXHpjQWN9NuKpRbHW8Zxk5wv",
  "key13": "3fkhF1v6sf6SCScc73FjarCS8hSum4MvgpZjnzJcm1Gg4bsafkcBK7YJ174kMvtoA3sqZzqK1z1nH8XRfLE82wqx",
  "key14": "4iMM8VEsUhywGw7trofcU2x73NJ2Zjoe8iaBPKhA1pCwqW2JqMERSSCq9HY3TyVMrKutiEGTxxCuEbwZPu5HKAci",
  "key15": "hr7G2yWJguX88kndimN3iXr2m1Pgz2zm8mxVosUqG79hrQZnFe5QVVVvGvUaetR5QQponZQZk5ozSeLLp3RDj6R",
  "key16": "3zL2SuSPq5A7DhYDrVMpoZQFmNhYe8h6EJfoVfRk614CfX3aV6R9XFre4ZdZt2duyvgD5pMdNCJ4gJK9Qs7cdBFr",
  "key17": "2Ywt3egxiDpnxAkNTvqBUNezreYrPKnTVKFk5xEPL2qeaz41ksb5F87VQ3k1wNiLDXNTVkZoS47oDT3tYefubGQH",
  "key18": "5EChJubPZjuHhEGucDzShNK42mjcSLqgAUujK2wzvz1c2aV2DddZ7uGqugJrrcRbuWc9eK787ydHtr1CFZ5jDTGp",
  "key19": "WdpFnFoF5aVrWjnRsDUogxoDU9czN4c5STWUJwu8UUAaWEAKz84QfSy8GFes1VfCbbaHe3ibMZqeW1wMw13YGgd",
  "key20": "3VjWHbo5iFyeuf5RpgreqqtVmUuaNocFcfcW2Ev8z5rKWdP3zfVFr2kpiJi7fy1BUY8UH7eN2UPMucYNMBNmxBkr",
  "key21": "UxiwYhCzGWwmHkcedg9xGi1KsFijaMnTZfreZxE6v1rLA7L5x1RstAofZevLF6AyYSii9ph3n2pvDhkYxSf1st4",
  "key22": "2TKbYSzZXBdwCboRTQFJ5eohXRjMrLD5EDDVkzF8HTGUzQpknzDEieFS1XmdGZ3Zox5TDyaQfyaTRaknHmn5ehhb",
  "key23": "4FsSCap2cTxs3jchWTrVG18V2mvRFR8uQD3UovLGrycGQoeTRgWJPxTFEB3cCHYLZ6jAkBxwi9336Wjoc4cYtCFR",
  "key24": "NFYwd9hHYGqaFJVhQ7Qehz2S2VjvyHU5yZV8Z19TEaro8X2ok4Xev9fQeAT4bUfES6EWYLfXB8Tjwuwz7d128eH",
  "key25": "6A6heq8X77BTG32ZFWEL6DdqoCK7VP5foLUr6eMowekDhwFnaUCcC6iRsAvPocNE2gXfBsFB9tGSTNMQb922XhN",
  "key26": "NMo2mf2dX86dEWt9yNWhVGopV3hQbVnn35VMQLNUTZojY2p6iJ7jBMoB5AbiEvMzzvPnDvtcNzSGwLcBRSP63ra",
  "key27": "5Wam3pDTDMbXqKqv8zG8bZei3Xa7QhsvfNPg6RbCGnr1TveEipd6E37mBap3VgjMZStyGqEDvW4JL8MGpsiuyL55",
  "key28": "2Kwkn3JHbJmvKZ1gPkZuzb2Xf3DNP3gRk4mQJScz4pwHTpKgaAi2tp98DXkJRf2w7QJm5HzgrXEpYkPp3JriTLzj",
  "key29": "rYdBSqip1DXcdabDuSXzTzjAYUwfubinUrQXT7Mnka6XSVRUb8mwJZDYjiVMbi97jsjF46MVHs1RwXaWzEdKpkE",
  "key30": "2JyLEwwAZgWJnhRVLazPxPjVLg7DaPL6tHQ6bmmrj3Hx9E4KSNvEXqgdrLDegB4Wd5uUPaDMnZAYUCUYCVgPvVoq",
  "key31": "4EDv3DkVdBmkHDM1Zigo8fnmCzTMzLDXsRjRzMCg9yf1EC5JQemMPHSuSWBNVE8pmB7qWa3yaDnLPRfbsRdqfDcx",
  "key32": "5iTjd6VJnoyBBkEUDdfXpCKHzBLF7YX4kWAWDJpF2NppmBBQ4XTWgyUhyQozeJm6s7ejPHJ8FxcuimU5FGv8YB4q"
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
