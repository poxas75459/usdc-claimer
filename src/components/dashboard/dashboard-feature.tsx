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
    "3DMvDML115Ek61fGv46yFCRztTYrupmTQXj1koMddGvhMkCz4r3PfQFSmk6CqFcDNrTwH7HRKsmXiqaqmQPaLrwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h5Rv6BPWz9MxcEEbKWcYnWgMt13duYzWm8vQFQtuN67LZ9P7k614DboLHtwPmZkcxsRT2dw4QgKzu9uw8iWrTwZ",
  "key1": "3EzpZGHCBfGY3kBuG3iZHZY6U3BMrwbfxtZXth3BV9hj14gC1kAXJMr8HWqeZ1VQ6LmeQ23nagiCbbtMfi2XMVnH",
  "key2": "28iHVj5rpcEwRXPwWDEmUxUGpAnzZk4NpqDwz3CAAJvRZifVfJVMNPw3svBiRajfFZtdwB2RaKoNcb5SLmMVZ75a",
  "key3": "3RM4DUvpeSArXx2njJu8ai6kyESSy8EXJSdk2yYVgfWbKNsrSDmT54LzpmNMARMte1Rc2kkNJzvLJ3hjCuLEzF11",
  "key4": "xrMH5jnSxfFvS2Pm858nXrdpQY5FbXtb8KPy6D9AXzGcp827V6Pobnj4GrWBG5saqYZJDnGVr51PfMPYwHLBKMb",
  "key5": "24ntQd6mzQa6tz6M8NdwxMiHUsYmBfUiXbKHJGsP5qrE3Us3Hs4TBK8TaFHpwRwkUpUaRj3HB5CmkN2Noru1Pbg7",
  "key6": "34z4xxpqywHeDqnVxtUoscwyWmqq7gnEKyBpbWdWArkSpy94mFbUUWYij2gqSk6QR7PpFjwXteGvYN3nPgkiNP6Q",
  "key7": "2ha77aT9DmnwQYKcwBgAoBwkzhWRsmGuCddhyPM3rv7j3hwA6UqzSU9wEptu6KsTTEXBgSAKb1LpcJv2k5vrmU3v",
  "key8": "3BrpR3mPC14apV5z5MASRQHFAs8gYQA362b54q5geys6wNaPFEdABeNst7FqZ4LWenoWC7QivBnT1QCVzUcuzzAd",
  "key9": "25Qbs3cG2STShfAWjCa42pTA8DNePAss4JCwSBwmM1cMUn4pFaw8wZiw6KRFUqnSKUxSZ26sXf2tPBYr112i9Jky",
  "key10": "3K8MnnqMA1CccB2t1jrsv26WSBPkG1VxGx4YzN24gZYuD1wwA6xX1t9hGgtGRJ6mPh8sWCucBtbtPvPUUVk6ZwTs",
  "key11": "3Txw8wugjJmyztvfwxMkR66sE5zMmDXowX4inQUqJ23CD2j6hLwgiXT8soRNhLK2mUpTCsmBnDg1ugo7vQsqt6EA",
  "key12": "5tZUjeEAY2ZfqhpxZyGCvsWx5YJ7MPNCu7ymVt5Mc2L4mCLTewS5RRqpfGZcMWcxWZj9ERBHCFfzz73DDM1WuuT7",
  "key13": "3dXPHYu3M5TAX1x57gCTkf4TLi7uix4cn9RD18hDafpXwrSbrD6mJ4Hk4K3XZxuTrA7Gt6Ln8aTdm6A6gxCtSnUS",
  "key14": "2fadrQHX8g6UQqLWxD9VNWrjkzzZhtyjXya5B2Rx5Xd7p2ZEt1EsnZJm5joaBGzocajEsUHqbzQCBiqKLFev2iyo",
  "key15": "2TQ7x7HueV2FauH2QRJ96AR3HjTHRPg6dfqBUzmyUd15zRaEtFwbHmDkQSMoZSLEoX92Bfh3reeJoCMYVTxpWrfR",
  "key16": "okPMybogroEqJH2bZtZpc9Pi7DcwfphadNj21kd4J4eNXDaDCsYzurxQGu21PVewmQMeYB4XTgEyBE6XHPvBn7r",
  "key17": "62sgTnEnv1EBjRuKChjoRDzvVHu2bCAUqNTGMJCmPguBSGMJsUXN2MgbS2Sj5vaMjJPL8CrLvJrj5A9hCbARmVCe",
  "key18": "4DcrWbyxnFPYNjq8mvtbzdEpgvF7xMroHmdN71EC9cKP2r9fv6R8AbToGTaSr8ZwZFEqE3W1yVKt5iheoyTQtFsa",
  "key19": "4EUGsKZuVnrHLp4knvRZ9E8HFMLuJpTDm8nR4bNz4Fj1a2GecJ98PCPentYH8QbALq5ZAJQmMmEK5Qx9wDquj57q",
  "key20": "46iYF22iSvsX1DDJ5efa6qPpB4959onNLe9krA9tTDuPFBim95Wft86FuHJrH1afZXaqPYF1uFQhV1YoqBk3W7JV",
  "key21": "2MJVuCDJpwrrcxJi8SCWrQ4FwBsCYqMbjSjVPwPKLQwyzHiUkNYNwuvDaWtsewoGZMePWe7KY93vMSHMTayHNoGs",
  "key22": "31wfURYHuatC7nJzFL3tEfVHDjBushZt5t2c1qDUEbKJYU3d4QmLcQJmvC8HkZdawawb3LB9q3KaeaednRwmq4p",
  "key23": "4LxkCrbpGsfPZiYmDDXVaht8AHwDR5v5uigG2Q93qkrYXVU4LkDm5RVhZygkkAudYzPUGL2GRa7k3sjesctEfAZQ",
  "key24": "2ihwZBSNL7Eo8jnwwGaTeKmoRatJ864FU9aufAEMMXwv3thT7wAKnKomzFNaapKNzwXdC5HD7VXUaxZcUMcoyHDQ",
  "key25": "64r1UAz2yjwvKfKmoSmbtzh4ZT68LYcpEueBqia2UTtnMrwGcthew5kJK4S7YtQ9X6XkHYAFDCbpsHtFhABjTKGa",
  "key26": "X4mVF55qdvRBZau3S8UM5BNigDQ8QubfaS1tWEVMcLZ2jhSXyuiG3DDejnk5tLXFSkWjb6sVnPvN83oUBmrv2oH",
  "key27": "59X3txrFKBT2Lr3gd2Eex1u5KTNc48wKN8MuXDmUky7on2TMzSfbThoRHR5Un21WCgLmev2maB11A1knVnUbwobz",
  "key28": "2dH3CwgWJeFPsXbaVKaA22PJwyYBuajjaV441K2E3MfHJ5mEzwxBZZTZVSeXPf1Jf3ABNHKxpK9r82EnLRBg5nvm",
  "key29": "2YeP6xWJ9vR3Nke7RohrbCVX3zvSv2wj3itxh4NqN3Vz9CL37WFjmhARpLDE9cScgE4j1q44TLEyjiQywt5vWrkN",
  "key30": "4aCxhgPWcMZaqts58Fr7KxE9rajHrU68U2qEmKQBLqXptwhxjiKgyiPQHyk87K6aKtdfzVd946N7RvEU9VY4PXJy",
  "key31": "fNxfbuDNcDzRkZAgEU5Xp7uzyWzCmyH19UwqdjnuU5dGYWWDpY6cMBRhwKvzwBuZBM62nqL9UMYhL6BUzGKqFwT",
  "key32": "66um6VWUmUjcAjNkqJSfQsJNv9Y76mwSoYneLrURPpmrbJuPw5CvZsGV7CPfV8qtz6xPLHhtdWX3a2itaxQkRbF9",
  "key33": "2oTp6y4uo5dqmzABQkW38bEYFn5JsvHcwqrk2DP2ChPPGwucEtMhfQhhKSfwdXaYCS9TCnhJ31vS17PpSAXL66LB",
  "key34": "5CiALgm4DQkuNfFEpxCLMjoiji3CCB6r9Zmv81uz48fHe3KFs7ieoPJJxCj9q3pydqQ9o8sLJTpJL7Jc7CFe3Lqu",
  "key35": "5NYWNJK6bmsjE6KTJkUeVNMfQ7CTDFVt8r85KgsUBjJ6eQhvedEZLXD2UfsNv4Fnfp5uNtfiL1nKysgicLMf3qxU",
  "key36": "3VfixNFf8JRH7i4ecKoLouwtjYQTsm2KxQEJgmPbAeKMaa4QLg7pdoeG2DNcV2xwKKtNLwM6Uj1NBBETewq13Wdz",
  "key37": "4BBDTFWL75m4ESr2xFKzprZUhNeUvMEYZw17YrR73tTuBWS6QhpJLSw6Rhx3ehm7KLRwueZz6N4ZrQqpy58xE6KK",
  "key38": "5kNEmTgvWxCbF2igfFLJ9wapbMVmi13ajrftB9kAGXGp4hGzgjCSy58jvg26RsJ225FWq9CMHKzzW5H1MjHn1cE7",
  "key39": "3UofMu3MCfCGKdrinXrvPLXqSe58PEgBp9xaBMprrqSZ6oJ8kFeAWMUYecPfMRCn5wUFmgTtxmNLwCz8DcGx5WFg",
  "key40": "4uQSAAeBDqXmJ48ZAcbXGDVG6awjmDfctR2Xr1fuT856jqyYURALjVvCMnDudp5wXWGbFqK8D6dbUYhAzKoMi52w",
  "key41": "5VVgmP2eTLMQgo4Fa9BYxbDET5MR3AmwXPHS51uRmpM8rDDCK4J8rpSnPtJfbobTBLozs5Ybc3XgmGUtopxW4boM",
  "key42": "3h9HgHnnQqGAknvRFu9B5jskHorPmyFQxn9cEubrs6Xjv3uvwQi8peAhNFCimnuVp25G8WZbRjUjCrpKHaMyp1Gs",
  "key43": "3CftJarXBuhYJhRisdk8uqrrq49ELEgnDsmGriFuW1MAHc6WBA12gJxfPvM4BpXFwobbLEaaE5Fs8UtxNWj6FQ1y",
  "key44": "2RpDoSxdX612JmufBeSvF7ojBBME2F4gF5QyfxqK7HUFcwq65ykaBMWQJWWgoyd9hEEQMRrRZ4MddqZUiSR676SK",
  "key45": "34r6rjJf2Tgg1CqH1j666s8Qdf6mBUtd3vBmLXXQCBwvkYHZSzk1Hz7bvhWPTnYEkr9yCQaiBQWAfQeCmkUwBbTB",
  "key46": "RNaWCu7UuACSosAXdFThwcDp3nsnEaA1EPfTq2CZbrwonLRjUaPehXWGr2BDNAUhdLYgTTqjP3ZsRFabGazaLdb",
  "key47": "3c7QTMd7DBWGFKgYGvBaebtzh8sr6XWiALn8HmiMQRc1fhWu2TGLwxNZQfi39LKScmShGUP2pjpNWYzwduKDrQsA",
  "key48": "4eCwfRT5f8t9ZwB4QvzpGLZqUbe654oizWyoSfHgeyx7btjxDsR6sBiMtnB1n5voWLJDTeguhch2k3oJwK5WvPFf",
  "key49": "5MM6RS6hcGjP4cCPkZQ1dbuKhcVnznZxSv8df8ZAvNxRThYLNP2X8Dveh4g8MTu2EYrxFqNrnLGnqUvokhq3G6Nc"
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
