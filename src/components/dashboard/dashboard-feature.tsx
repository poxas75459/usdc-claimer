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
    "35PbE9nj9ykKMeQKW8marebzjHfLdvfxchGWt9uRQVNSaAjWLirDPF1SYUFFNWPaPTmfAKVHMdLWGEc6SxXxUr4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63V1WskDKhhumob3yRhEUaKEcQrU4U5b8FH186J4KXG3M2FerSW1abGawFdsLUWi6DVBfqU9NwNLg4gqkfyXK44P",
  "key1": "4FXAeWSWedMfEVJ43Q4ktXTdoHZVHmZGC51NPMaysNWCd5G4cHV5fgpqpbvFv2NbuDKiib53uhGUiEPkaM1H4mVm",
  "key2": "62bUejnhkmvvU4gbXsVzuRAEnrtTCaKxW3v6HiuQ6dGbAHZ8dUBTDZuHxwcYVxqM33Qg6bzssts8eTWySgz5UsVK",
  "key3": "eGncZBHMXnoUo7HZu5Uc9dYNnAEWQNmJvwRQvrHHDEUydpbTkpmgrjVkYEq99EbRM8LFyWKFQ1dtg5nrmCsPDSj",
  "key4": "5LyxyEvmQE594tN2DJgoWrGQSZsyyiRJM5Heu5DjJg2snqrnhif4e2RjVD2tNrzLJUDj52CtQCViiYRL2DxoW5vj",
  "key5": "23BU5TYqfcZL3dhuPiXUybihtVxgRRjuCHN1KjDpHuwFh3Qma6PVJ423UfQEg342cfUmUDg6VfCAngVHoF8jLm18",
  "key6": "3Jjp8ZdpTpmepiQr7GacNaJUAiMDJFPK2ye5GxCZqwdxMD6zrqcMkjbPYJ5mEGiawKoigw8zgvNVu2CNFoDq5TEJ",
  "key7": "2jroqTGRkPETYHprrEEUDwpkfVwcFNwdVpCyVKRDKjvzhPeu24bSzwXAkbS7Pzqdh88pVf7zqrfDibmqEGDym4AA",
  "key8": "TwCiDLd9AjJr3MnbkiD1ESWbQhCE3Ajkj6YQbJ8n78HpwwNgY4bhSC9P4nfFtBA3fKChTj6pz8ngWNZM2sRyDtt",
  "key9": "3LkaFgn8zMyHie2QsC4DM6XiFiEXQecgN2dNjUMbnJbwx2ubYD4kh8aH1ikig7Pi3EXpoAhctY7jgbCEyNQPdsJY",
  "key10": "5Veu5NdPGbGGfpiQ7ixmRC5N3gTNbqwuGB3Bw2ceiTU4Xgx5hWq7vnA9g3tRwsBGVU2krzauZtkQNCzBoha7qVgn",
  "key11": "KNP5HPaqZTuFiZSUMoNMRb7uC8haMDmSRwGBLQLme3tEcSUrbwJ6tN5dHPw2Hk8zQmxU9VQG8415eSKyzAnTg9J",
  "key12": "4kLNFmVXLBF5D658jQBefnytcbNKp8gxAMJND4Vja8zh4owr6joGHTJPWkf42Sm51WN6VjF4bwYNGetjYbvuxuHB",
  "key13": "2fmVsqZ2KmnDLDmbsXKPyfAW1PGxNAohaU7eudidTYVviMQ1PyGFXz9ZLeL7rkQPkxQWU9bvYQh1Li6GadjufAGP",
  "key14": "wN4fMbq31FuxFYXe3bhicWDMpLNAwYpVF9p6vwBJN2G8Pau87qRicDuNGpjrTFpNQbzmSdyjz4Po8biLjqACeCu",
  "key15": "36VddnY8uQWLVnRYRxU8PBmQE7euW6NA63dkghJ56mJBfDYZevTQdt4aFAsiXnyj5K5usPpQZQGFMtrDRSy4fhhW",
  "key16": "3sqh24hdQ7awt16anQsAqN6FvgLDDR2qPgYmDaseqKy4wPoRvfV4ny4WPykkRH7PJdtJrm1e6QMuSVxpzjzQkqAA",
  "key17": "2tzGXUaxwyTnuP77Z56Qqf6V9znmGuYkYcQsLCu3nwfRVbZjTG7dXYmJFa2YFpwLdCBpSqzUpzvxzcyfdWF17o4i",
  "key18": "2qoX89XkvXmMN5ypYpacQUZZ3YkYenshuMVDcoamZ4GpTninix523eiiNJef5X1pVcWqLQpM5T7P7xcZDRSi1JYo",
  "key19": "4iisCzyHbKt3ncctST6K4165KNYUU31bA1UC4xeFHGoHv1CGYfQY3s7ffraMB31g7b7Fz1Txam6rNcyEFUjxHfBV",
  "key20": "3GCdi1mUyRQLYaMjCdsiz1QPbyGT7718CbTjTFNfZ45eJeCsntfLFdqo1x6GnABCKNNyQaq7LxH43CCUHcrMKH1h",
  "key21": "66Rj5TwVc1HiFBkPeGMaB6asxWRzaRKzhzsL1kWrJQnKSnhPMqKuaBgd7vTZfpxN9X4iHciDxR1Qj94YgQXPKTi2",
  "key22": "2WZE6RJ5xbC4bGyx6U6hj1nDJAWsZePmhHatKvU7cBgyJe3RVGR3VVaR3q7rsD2kuABK62kR2Q1icZ7TjsaBYmT",
  "key23": "5bbPc9wuHMFiBx667UAJaQQ9d8aaUUkgARYHS5yZjAC1chNB5eXf4yD654ThGGwbNQfqT11PTNdiuFMQqCrrWcnx",
  "key24": "4UWdvojVGMs3iGcZZDTFikUPUhmGqpmJjmymWn2Httmzop5DuLYN8wyMaFXPvvy1PQRdTMDnXBeqZSF2W9S2BEBW",
  "key25": "pLyscEn5Gmjq9tLzYDZVnfVyLG5EybPajsbfYLcdrxUKSFvdtoUgyLwAJihdnFeJY6HPAgRKqjg3r4TPmzct2vr",
  "key26": "3zXEjR2GLAnKEvseYAM2FxkhgJTddnJaGFLq5cCUANFf41GEsdGMpvY2SZMtr1AD7xCT5xtQZa6zMy8DdvEdo6fk",
  "key27": "614qJaQvtbZL91VJGU5217WfWm2biNkYJ8aKb5yYebnSNtCH3QbvNKGtNFz3ZSuerLs28oohaWs8dzKBhYc3vGys",
  "key28": "2CPKF7haMvayTywqHZ9uduSok15pJu7yAEraKtmiBNDbKxitoG7p9v5Y2iUa5y8GXXoKNGV21p3hcx4LHX8FYKEh",
  "key29": "zqivojezKJ6g8pmL5G9vKZ49mxqyzPo6anJhXooMd2cJLdA29vmwCC6zeYQEnwnbxG8wHgX15RcokhN3aNoPy9L",
  "key30": "poDJ7bzEgECAZG86DVkQs5rezZr6L6MXLEH45xzRzwFoKxFELcft764u19jutRiH2ooUnnXxBGe3uXxKyEx8ji7",
  "key31": "4BMPi97Pf98wzbLWX3XY6gUSYzp1P8TDNjgr6wdmThLqNrVnLWvSj2YzM2fm9UfMhfkbJgtZtabALcK5f3gcP6k2",
  "key32": "5o2up4fyFLN6TksESuCJiMAFSrj1PavVaJkW5ecZL7J9HjYYTqXUap2B2PqVJLNZPpiqwpDctBMPxniW48YDVNpP",
  "key33": "5znWpqRXs4P2Z8eQnrMfsRzFS23VuknzvefxQAaHKffLDzJzzMQ1GhEo23xaaBG3AVL7nE3AhBXGZ28jnwa8vho1",
  "key34": "5LLVEgF8TX7MbnZSJdHJ7jcFd32YFZExSKBW69znmXxLspkTXmjHLEBmP8riyWBy14jFNwUehawfNj6gzGCHmYXa",
  "key35": "2JPQ8cpDBYbxCqvMgJwsaYcJvLRoKZGXQVwmvG78i8SUuYFtNKchabGCimyo4gQdnnGbMP4zduuFHKU2oHPMC5Fw",
  "key36": "3dnEsCcyPXQBiMJdszh91W8YC42CGzedveimEkN7vjSD4cZVMitiW2SjDm3VnxjnZr6tA3qLpS934vxYwdS4puxp",
  "key37": "33GqznhJmytkWhpQotxBFK2qQH9izaBk4wEahB9Bd2UJxft4cUSqxD8ejo7vp8Q6Bo1mek2rbQvXq4qRwpu2867r",
  "key38": "391DVoyioryh6y43mxgjt9XQ3Mbw3oSU75MozQg1gipGsJXYSTKUT7Q9sgLjSHZ6DezjfEez2T1Rr6VMPW6AF525",
  "key39": "AKo1dRHh7WaY2rK9PPx7M5PdM5d7vHQ7Zgk7a77qUBb6d8zXkQdRmzGUDqtA72x8pu2MVWGxWWWzrVZ8fD25qVX",
  "key40": "5h8nJrzMCEvsfcqU2zZzJZeu9pqqdbKH6m2LyUDAAaBtb8KsCnRB9RdqFhWp7nr9u8hMsLKShsewDRvPMf46Ucaw",
  "key41": "5iC3XC42uvYMxZGQF5itc1gB4DNusrVKoXuRY4J9MUNmDRBNJkzLErP9VP9JMdvQA1MmqXRqfFnoSXUFv71NZWnA"
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
