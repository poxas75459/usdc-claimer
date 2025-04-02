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
    "3p476KcpRCZYit4HEUp2o4QPbcVs7z6ARgns18nkoyTrEVeDkPvziWFqESoLNgmm4DXRmiiiatLwNgZY88UMnHQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M22kDycE88Tm4qdfUe8YP5LuQ2EcQUUCFYGL1XmULiBTBJ6LZEj4WcQiVcT5nqb4YekqLggWspUM3E5s9o2Fuf5",
  "key1": "2foXqt4ysprRC1FW2QZUZkVzPyTBNvg5fjgT9KksGXfM1SE3iJhDksyEo5gykPvfhCHFBxnoJ98QPgfb3dLfYM4u",
  "key2": "4u7iUi4Vr9U1CGKtUjruAmEfLEmZ4TGoc9mnJ8q9S3oyLDt5aeHfUt5NGPYLMaJDeGdT1zQAF153fSEuJLjp7gEi",
  "key3": "5HrHXe9PbcTLCLT1GsLT7am7kppxBvWnzeSNEcMFbjnxUDNGCFixVWe6FbTBjfxZAJ8r8pgyQxMtg9nAzHfJvfrQ",
  "key4": "2o8bkBnLUBSN3YHoV5CAMqYa6CD2Qz1uwgPAArqrfAKgeEGshxMrAESTbWLoRRNkZVMmpepffnD98EivoYsoNfuN",
  "key5": "28uDNf6EDGthE1hFhjQsCjb9WkVpi8y4xXeQv3w2ZBHsxukTkEC95ndAEp5BTqEd2z6HiZu75j1qiXiUK6r5AC2J",
  "key6": "2D9TZvrttjPAvmioP4NV1cqYDVmTJSJEx9bkWnDDEb3c8sTJzqrLcGiLhabVwB3pKGY6cbDtKpUBvEv95JA78mrm",
  "key7": "4Da7aK1YPMhXo1QTxkaoK7ApqGFNAFfjZBYQyreuRh5q6fbTDSNMoEwpEMJDZHgczDRxWisNRGaXV8WwLnWMkns4",
  "key8": "wpn7RHHgicnKt5UdQ499yFk8jyoAUzZCCZVwz6gqdXFSaKqfyE3T998S6Hap7EMtJMmnVpsPwE6YSJoeAncgUf1",
  "key9": "8bs4X6VufkfK1bhp7uyxFbq3RVYN1aTyT7LMtuHMmekmmT3MigUwTrFfkTpT6QayUEpyfAXK4MHYe44zFajpUCA",
  "key10": "3bnHwxXQDNCbwdBbDC5TnY1ia4LKvoKZkaMyTQ2rg7Z6yEMvoHjwrxP5AywCg3uYuVPJKeYVGxGZkAaDa8QqMXkE",
  "key11": "25mfN1ySGiFHfL9bwErzBdQa8ccVSs5Ese43sAAsu9EjnVEjiTW23za1S6vLs9ZHt5673Az1e3xh3oCCiZVq27jJ",
  "key12": "5QcjtMrZhChipwzA26Ms9WW5SBVYmFHef6VAW41T2xpqinZ5sKEDkqS7Nvu5xP8KLEu4codR5evr78aPQ9D7cTGb",
  "key13": "54mEZ1LsxpnRQ3nd6j1syQi2KgD7xwtDdjGzyihK7P6tcdA6GjDu4LsB3owCcei79tkdr1wGXnDNpZWsTkChNHnp",
  "key14": "5SCAxRrfAtgnL6AZ9Rg8JgaDZHML5DrUDT3Dv3NgeCshu4bfRH5VQBpyP4yGoqscpy2J3WAxj9TJXnRD4wvf1NQm",
  "key15": "YNhtSN12QKDhPSZVZkj8jb8w8PZQ8uCGU3dmx4R2hm8HyBLdxBTxrLLBPkF8FHzeDe5RWocKUGL8WUqoRpqGe7i",
  "key16": "tW7uwPLA7auRNV6QXb8cnxteGGA6nbXmg7T77PWL4h5AWt4dus5xBfGuSCnkgDrhNjjV8CyX532hy5J81XTRdAj",
  "key17": "2Y1K3UkEwXeVNGu2L9WWwiXMgS24YzxTmCgoC8ePcy4mJ3x8vLxUoSYdXaDN7Fw7vAvyAA9u5KDim34CNtSYcTPv",
  "key18": "pG3fnnSXBh1qXeRZ5WYe1osybdFpLj7YW5CDKAvp31bPAx7dXogKrEpmv3ka4c7LR7VaeAJrfCZtZkimzBj5NSt",
  "key19": "4kWbiXNFk6Tt12mgTEaxPrJ64DkNVVim7DSTX6QosGj9TyaGvsRHG3uPqntR5CmgRQieXQUGGticyMHvWuQonM13",
  "key20": "3jG7EweNrWs8hQZ9uCBkH9AtHBjg2twcbL77JQQUoTy5bBTKmT5geUC2pMyoLEfLvmmkGgSypZ2KoJxMQqjVo6Un",
  "key21": "32gVoGgCKJ5uPEej9kHfP6aPpzwVBDP6kH2XneTDuHnz9cLF4VvnpuhqGidB5XiCR3MLJgSukfqdtameJSza88Xp",
  "key22": "4KLTh88kGuDVh1BwGCDSfGDVzXaTEZjh93XiEkfuXiaXG1Ts8LYmBxf1FK393Kcr3RRHgPxGAquXJawRLhVjK5bt",
  "key23": "5SLEhbRGiogyiqCfZNZVdkGpP7arUXPH41ndFYREXaYw1A2cppgP2Ypj5bgp3rktevwmaWdtugJUN1rhdMML938P",
  "key24": "4No78LX3FPi7z1jqi5zFvYvQxaCz8qS63kin98WvYsY5X1RruPUAwNF2zfWyuUECDbnCwAJWXr4KVsyz5pTQQHrn",
  "key25": "285gtk16cUghXb57YPwCsoLd1rc84NuaCT3KDdKHm9kWjBWZ7sy8SGU786qusNk6CbB85FD98PUePW5W6i6YAFKj",
  "key26": "33SN4PfiFWg9sLhERgPF7fAq73EPj5eiNsvDstMEB4SDLqai1x3txbEQP2BytTwYh9vyaby8opYmEqR9MXjxDwFA",
  "key27": "5TSMhzHTNye1TgBoHNQepFXdHg232TYHQr3dXTQ9cakccyjafAipLfCeA1xaEwkvVKXdmhfkLDbi4QtyohMGTaRi",
  "key28": "5xNoy4dVBTJWFF2SftFK5ya1fWp3syrUSvcT5e6WrJyrfBVDthdmp41DQmum5neefctBMNhFJ17HuLA2scqYYiaC",
  "key29": "4S4vf7t2bDWhfUqQGQ8ZfB1P1EtEsaakHdAkxakxjkP6axig6f8EMBGgGm5T7eRc52oeHKj9F8beHFFvs8KtBVs7",
  "key30": "oEzvsEHndjAxssPuna2Ns1Esue9mDdJK8yNv5hAJPUgcfGJjchZBcz9n6jY7Tw3TZZxnoR6krWXuRj2yycR6ETt",
  "key31": "2nMXAH5FS8LdkvhnbScECfK8gGs7R2yQooScTQudKpRXon1H2ce6q2dkyg8sw4FWKisPT6DYLMNGVZ9hyMDyoJfR",
  "key32": "3Rp1VHPQxFpaAJZ9VsHZ8pUqM2PLydT4wJMph7LBZGA7VBRde6y4Me1BJvMCYZj6Ke2DZ6rgptmBUo6PQVjbtjPr",
  "key33": "5bZf12x3ShewUcMbjAUbpyeMBiZkVsj9zJhUZaAgiSUsnoBi2v9mRhyxtXp49oFDCDikeKK5sc4rBiQMEjajkTxm",
  "key34": "5ySrY1i7tuSwo9u4a8WhJW2jLg3T7q1x12QhzZLnUZZRxV4kjUmS2MSfCt8fWaRAQvRa3CKa6aGP77me1kfo8rBR",
  "key35": "3u9dF1uzWsUHTyLXcUkAdFTUpHsJTnYmtmouXWTVL4uggHNAXPnzecyY3rNzwBKxyivjj1wj9bbEAZhvn1cEdcb9",
  "key36": "2tDNDQ1mXxTDsdaxwWoyPa8efcrhjZuNp2Mob4WSBjekqLZU574s6ExH96q2jkse96NHPU273foW1a76QBuaKJBj",
  "key37": "3PJRhvbfrVN2AMuJET9TSSUtYojR1NAxKvpSRuox9gygqiUa3scBb5NbEi3H2wQSG5Hg82Rurq9NfCqqd5KUkMiS",
  "key38": "4UAQLijmokM8UoZ2xRzcugxtV815D2aMKJmuFSzr5ACzP7Uo7ovr2pnVkv7Lnt9Duw33DMdA35wSFm6oDJdLjt5d",
  "key39": "4X4vwquM4cpcgCV4KzRBDXez4kzbab78XRJY7khG9hq3Dq4Zzbt1U7bRkMYefbLF3xrkJji5fCHDFnACiXTk9kaU",
  "key40": "4GUpN1T9jHp15tjwUL4Gu9dWDPc3RMDZ7u4rUmdDoLEU4EGsxXyn1n2aeBd1rXc8uJSoafZbYsfzEzFghqins57P",
  "key41": "4TPZAfcBfRF8pRnR1z3fAa3qZW6UrE544LJCLKuqzFQjJBVnLcWpWp1B4odohgEgc6pUU5yrLqtubWpotVusaSvC",
  "key42": "4ca4CETkjfS2vfWWPr7buuGQAXmQ2iLaynnFqodMX6T1HcbXUtm3SghVXQ7skxkUWje5PpocqzfC3zBJeRoarSH5"
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
