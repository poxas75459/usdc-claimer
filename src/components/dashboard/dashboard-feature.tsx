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
    "xJgbGBL4o1UXPAffk3Cmwc9QPdoHGFF3Se8uxNsDVXq5aHHMz2RHjE9CyBqSMHH243AuqEgiucaV6RJhyGtRF85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xSvLxJZ8tzykwkyVYcLdm6z5aaU23kCAVwpuzKGuqp6SXH6qxEXgvsVUCMvFwLEeYaN7az1i7P4qGgq4ziX63gs",
  "key1": "Dek6Vfxjz2TT85RKCPHeX5b8TfMHP3aSWqLPgW3gCLBsSfzikvyPwH6WGVrGfJrmjFcwcjH1ZS7WoRgzjs8N8ev",
  "key2": "BbRTXmyW83Uab1Y7Rjo69wZYgSd55Lqs6k4PFRSDGCu4h9FePLCzdhi7MdhnVTtJqCLubWpRMt3UWJG6tZEiYfZ",
  "key3": "5o81eU3DZSiwrcDPnQXBJjXmxvWQNYyDKFWy4LZ9NmWWinxMuN1rnxw6LUZWAXJjRGixgUDH9maMoGJqebaYSxXs",
  "key4": "3DWvQP7dPT9qf2V1Ptix9nBWbtt62iSTmQCjJAYZtdbAenzgXahzXtD3ev8JoNB61uYkfaEGYoLBWoVUryxSgtoP",
  "key5": "26rVn3gHftAsn1haXQeLLFjTEfKatnDCgCiEheoXVK5rrJCdb99RzaGAmLg19ozyXC1pYJss5uS1Qf95JPQN4oBY",
  "key6": "2Aanpnce2CGuHc8q1xNKG27UjWycb3rqAFMjM1HQ9yY4BZdKRkdRwfqUiLoR7LJMiwbc89erpHrLmetwPqs2sJ5q",
  "key7": "5sVW4Pfo2ar56wEnU2UkEp9enuTkZtUffWmy3hG7BYXHWB3WWK343Atdxmy8BmrxNrxQ3iStE26ADwNdiMLFcnpb",
  "key8": "5SmCsngSZLHh6WNDAAquouLyxotnQvWpsZarqHLKmUxfMwJfiSkneCuZRJTZ1jmfFv8czmM8rWVL4yk5QzRdR64q",
  "key9": "2oz6qRND7ndV4WCsVXyCmgD1EPksz5p2wf6Wx1N6zMbcpp53SNSetB4oJJ7iz6dhbDWcPreh9okbacUAQiPGxep1",
  "key10": "3uX2xmA3ePbCShZ8UA91N6c7KoCts8T9urcYM7h3F7pAjLWeFXdUfgGLuxJsC9xbrFGbxZSX7uH5a7fnKf5ph5c1",
  "key11": "34rDSZa1zhEVQUB8E1AfhSUG9U9BkpUcWBg3aSUastFB4eHbL9Jmur8vqaqUSSMTpYELMDhJnZsy8cDvWbcWfzRP",
  "key12": "519iGDrViUw8CfKEHfQWRaf8pwh892ZmEDqrJtq1nL5cX44y8g65CxZuXdEv98dw6b44kihjtD2iwBZh7e5FYYiz",
  "key13": "4q3ndt7cta7mt9zRkCcsixeK2U2C39bjVNQD2cdn24ZoopvNWXaCU1EPkryJ99eqX728S59rWSGkzQSHdzCnb1mE",
  "key14": "483sc1Y5uFCP1T252PTwT4xBuZQv6UWPf26p5gMrUP6HUikLbpmSRCoUoUWU33VVSxy8eKvz71Ex8E9yHssi1Fyi",
  "key15": "3aXE4j5n6zPbAxXa4jFTthYcXjFGUoWstSbB2W4s7t8ByizQ25XZDP7gH2S99J2VCA4zUkGgLi3gN4fGD1NnpD4o",
  "key16": "3jkxF66ZCFXDyd7sh5T7sXatVFjpPKtP8rCTsE3oLXEzpSxpkHFYNUiayGMNaLzJGym85H3doNij1QsYyUmiKMqs",
  "key17": "5a1KQML2XuMnhi3w82tdeKG5i2D9ftzKCMFRMtt69UDdjWMtM3mAb4fXj4d94bnpnHpAMEthKdMJCfF2WLH37nPa",
  "key18": "2B4Zrqg3asYH62NTSkm17LX65u915M6Wiue2qjkpvFzF3Q84jV48FpAHydur1ngpFZvS1HSBMciJfEfSverYLLf3",
  "key19": "3iqHewWf2NHyMtBCQq5U6z1R9YhPvqoRy7sqRumpyP6aibW2Guvg5fSqm7pG8Y2RUUmbRE2bBffqr2tzTcY9Mo7y",
  "key20": "4BX4scfSFrbbmPr27zGzma5wCNJtfQVv5eXmrgZHhkrUUqJMJJC98EoxfVprVpkZpktqUifV1cTuWsP4oP1e2zjQ",
  "key21": "4BwA7xuVaEbcKjB6EwegBUA8edUb81ikMjmv9ysPtRuoc8vskye1TZKRkLxD7LxuWZBB7xLYEnaHs8YW3KKvpQMF",
  "key22": "37PcKmYZyxHFMK72dVK69GvNmpt2ryauB6HnscNSMnWEdSsozBNeRLgJ7SWXQGyyD5YQ631AHTLbEfw37zYfmAJS",
  "key23": "2DqHanC8m8i5sk6rdFwng4psNHyR31GMYY4R1yr1nhLHRRsAvz1HGSBF6wmsYCMnkXFcJupfJP3ky5qR8Y3dySFu",
  "key24": "5MkKYPFYARKpvZM614yxJupAMqRYwBJio3LKPPbkaSB1HPi1oxnvZ1Voyofjjd1XN7oZTiuC3ciwTeiuXRg1UjE4",
  "key25": "3CXkdc14L3gDtv1o74JpLnTF1nWGoJDw6ZucbLS6NxbQYkzW1MRHnCXUNEQhazkgGAHDT54a9mX1mHbAPhy9YDt3",
  "key26": "TEMcsdPFo8UjWqYvWfa9SumgvFdyHbGtaug45dZq1AFeNYzmra1jaBk4erQrAZ22NQjAkczC9aEjteDUtwMFKJP",
  "key27": "2WD5RVjPD4nnTpKjTx6pq5qbGctoDAbnPuSkpkKmYuNRyLh4VPW5Mnrv271pAojpeqDhntv63tTmBuAe1PpJthCV",
  "key28": "54qBJiVrGmTg6JNvsdZTdZPWo1FC63b32ETGqAtdmt8x6KgMSvjsyGvyeEa8hLmH26bSggA1mnPARhUc8ZYuygRY",
  "key29": "2CKHa9jjsJhd8mvpGpNJLwS5aq31FejmzQfzAvUmk6j5mto2UZLJTP4SaNR6Tet6DDcmPMhrMAL6UXmtkuxBJRhb",
  "key30": "57RikM22tQrrp2gLnaSW4sbBx6fJmApg3SuaGhvhQsCHM2X1Fr9gh1vt4hUddzyXz1Fu2ouju4MaWjKHSnVHPPRL",
  "key31": "2sPmUPdEKCxWPfFZHRHerxWrZ82RhZaSs5qMSP1QdEUynYdq1M4fj5Ue7hNrgJ9Ufvd78yhEcL3Vbm4nb2XaF27J",
  "key32": "2aYQiG68tLu8vWs86j4rUmBCgh194QtUuEWb8d31RG3m7544Vndmtz7siFiitBgEchrr9iCsbiS6v8gCdMH6oY2d",
  "key33": "5ZcwHbrS9MCDr1gbsXne4g4BQfg1Y64u2CvefE6pVqSYyrA1w2GaS53cymWpDjxdvASAXeWhNYwMvZr9sx4dzF8z",
  "key34": "5wkdTESKQiB2Ks2N58k4sE97RUVYqY8mXf4sksVDccuRrM7MKqMSBP4BMschtFeRxC6SK1kzibT4EvGkfkW5KEZd",
  "key35": "2mKoDHPoZzZHMAWh1onqQiTpURyWySpXKEW6ovWXVJkAC37DaXG4KHYMykpUC7WFUqkLU8BxP1z7sxv3zoCjqNve",
  "key36": "3CDFRfCNG1YMCTLJbK2mucA3rBxyfYuuCmCPxUshJNKhjUumeH1QWSGmEFrUuD47d1AYNBUcP3NzUnVnYtqWFTmp",
  "key37": "4f4jZTN6pQtf4EnhbwKPYJq1jKedoKpRegmKj9PWrznmXGjW2rvj6mwnQx6QbQGhVUyNH8z38ktscQ87UYwfPezX",
  "key38": "2XmDqsX1khm7g2knVKuQLkTWmJqv8CXMDFnmDM9yNnEbJ6E48FMzib4PNqSbtE4Kzue7EiGjYe7Zg7NonEUkMcen",
  "key39": "3K73SunkvRbZkzTkZf1z1hzU6qpVe7dGJZSRLE5tZizHpHTs7U2FxRo7qXCxt4NxCdHh7N5nBYMKNr72C4DWqAjT",
  "key40": "2DZPCutXSvJ1xXeCfpgcZ13jBa7jT3M1FxCDnBUzxfcjip6GG8HeNtm1dhyivHoG2P78aEpzQnHEJY2j2phxBWEA",
  "key41": "3HLuRs6Kxu3dow2xL2zohMYMFcWFdD4SStNBF1YCS1t2XRZJRG2tU1yDpusScuskoxyGsuUFHMVYs2fBFWY8Ppkt",
  "key42": "3vZDraFY9ius7RyFFGs8UMQ4SYMcBChCxomNgZ38fjfK9GHagoe82umaV7a9sm4wxodVY8qn7FUfZC9ciiAtTR1t",
  "key43": "42P33bpQPx4CkbSxfYhzkrNNiEt128ZqFP2oDgSAVjBgbgRetwZwSamKBcZVmdkvJMgANciYqwaBEF4K6zueJm78",
  "key44": "2gpdAdgTuULuguEjmNZ54wQmQgyULmxqoncXbbrVPs1HMZ93wdJip8Md1z9Jx4h8DtZaCgHN9yaMecfYEgwCQUZx",
  "key45": "DCX5Dk1CBpPPjMvhSUr7bt6PvYRXdtZy3NjG2GHQYu7iSCdhS8YB4vagsGamcNfV3YTUH9enmFRsYqcMtt33ajY",
  "key46": "koCDtwTqZjdxrXgbGWurSYk62281gNZTsmG5dDfF4AvUGVjvohjuUseRtw5FqUFtqjBPkug1d7bSG2oSDkmCY65"
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
