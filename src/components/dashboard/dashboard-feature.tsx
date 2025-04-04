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
    "3qCKhsv3jtzaEBE71iTsadxfz2mniUY69ojjF2qmHaXC33Y3tDdzxvQCgqqg1jWHWqvRtFLRfEkgJmYVxHiaHnDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bwdJtPrGTWH8APbSg6b1Fkc6SdHwA9Z821LPVTSSEagitmKwhqWGuQzMt6RREdu7VeBZWu9xxEBMcEi9cnRsb1n",
  "key1": "63DoTzednKTgBcMeFA117HD4FJimmZXJUHgX91JMPHpDu3DDHsVXzE7HzuES42DRjMVihDhP7DeGPG1w1576t8Pd",
  "key2": "k3iEKMSUuN963za87eWswD7BTeRtJQ7Ac1VVcMmdg5yT93Hzt1KffzeZFND9RUpztD8hbnoFxgMTC88dSFFCmb9",
  "key3": "4f6MR1TKaAZGxyNZim6zyAAoc9JxjsCJWSd5rN4dYgY4NJ46wYQTcMSzXhrMbxeUvjqnrphFBizFRiVGGrhFgf8P",
  "key4": "58HbQ9srcRPC4u8KCtg9gGkCi64kJxf7oPrghVi7nPi9YqfkGwbj8gve9BgFpHxoRiJBGvFevjh2Pi7Lqxie6wQ9",
  "key5": "3k4mnjREG5utkppHBHemLQeWzd3KNoUpsUM58s6ojdGAFs91ezEsB4uL74fh18whJaMh3GJMcnz8EbjNBH7Z3MiW",
  "key6": "PxdgZf5dMDezqm8onHiuYEvtp4tvh5PgQ3951sQrwbcTy7qyjEJCUSY4jrWKr2s8vJbdfA4vjEKM6jyu7agsrzF",
  "key7": "5tadNBnCf27ZbGinNWPseB532zGCCp4DVCgbcAS4pnoMYCMLuXfjoT6NzTrfGygB92LrK2vPcMJdsSeobA3noCYP",
  "key8": "1icCEjxaH7kcxR4z7ogquE2DjsCREfRgcocdY7tLKEtvWx4eTKUhbfQqL5keqkAoZiXoFCMHJjQPhEvsVkxyQtP",
  "key9": "2y9kyQtWabATSTbU7rhjm1kD2HSYiSXtLHdyoZiZxkBRe3mJGXmwiSEELZaQZzqWMBM3xkQDDhM9rKs4e6taaWHq",
  "key10": "28knAZ5HyD1ShQnY2hr3cTGFiTgmrkD35QS5kn4ViUSDj5XjDL85xc8gT3ZFXPWyXkPJQRJwrHAjDmrkJC6BFQkg",
  "key11": "3p31z56YmstdrL4DNQSEhtvYScUpTVNWTS2ZZjPjyfP1UK56ZZ7CLkT414PTJJndRfmtXJthC4tugaNdMNy5vqBR",
  "key12": "2KysGrhxuU1aFA4pSQTgvvTzxYaK5SkKGzoPKYVmYgT62KgQhum9qKqy6i7pFZVtnrfvr35rV3yjkz1Lja6grBrc",
  "key13": "5Wd5SmnMD3zmx3PBVvt6uwvTnMfBJZmrMho1xNnaBwzykQQTSzTyQvwjo9Gk5Y8DV4BPvwLJGE9ARnythcuRLK4Z",
  "key14": "2sMbppZ3kJkR83MmS5ywurHtVeEB5Y1ShtV1TmVndRTMF5Gfzb76bjWuqbS8JY1QAAoaqf2uDraJr4HsPcVeR39P",
  "key15": "amhPsrHez2FYNNbRJkE8sTgh5BaHQBjNHT93g2TZzQNMdtsyipWbnU4mpt6HC1ZF5M2oJrzyPWXdh3JGN6uZoFm",
  "key16": "5SC2QSWpdpPyK6LUabjyX3t3cMNny1ycSEG8mZd1Hsm1D8dKdDAMXo2Nggx3nk6VsuydSEnLhVQD9QdCoxZwDX7c",
  "key17": "a34ybjVLqMWt7C4xZmwUvnpvdxTT6X7CHYDcBKtTrtpunBzbdVTXieMsHzPL9D97FTRYNko3wr7wkswE7WLvbKb",
  "key18": "2gQceu7pB5GSFpkCZnv5SSQLUDDUBK22Mrbo8UgJB48YAtYxwCAsh3J61wnCHX8j8wM522DVswX5QZuaQSsWz9ai",
  "key19": "4Fxjz2s92wVnCEuU9jfDpojogczZyzBHhL8UufBi7sDwkiEdL6Srgo9KqX8SkVpnT1PATbdK3W934ujVJfd6kJfX",
  "key20": "39qrpWsMZMPQ4Xvwn3vLUdybUfxRwoKirQTGthiUWQNnBdeVmNgfMDv3ywS1Q13WQvuuMZ2CYCgMzUL6wPDHGFTK",
  "key21": "2knDrEGmv7Pj76VvkpnEocxPw9fGKUx1aYu8cKBAxbgmmX6vjJq23JGGPMYgY4Qyw2HH6qKEFWMEeCE66YRrWj39",
  "key22": "21Vhtjrze4ESD2guVYMAVZ2QTAwwJtyyN8FRLqgQyQjuhrBgJR2LnARw4uNovnsBse3mHxoURuWPpfb3R44eZdu8",
  "key23": "3tYwRsQw5iQtxaJUWnE1XsrV5pQzbbJttkxxP6vxYyc3kSZP8JW6rB3WZZYLaDSN7StHBzZ9QAe9TtV2foVGKeq",
  "key24": "2Cd5Tv9aRUPzvNtDbqVpKGc3RoKswVS4Ekh2dG8vKjzBYfp47iaBCXSTMGy5wbLi1KvZf2UDHibjdibwD1GrySBU",
  "key25": "4UNTJ1vLXXRuBTUWzzKKZ24bPfRGHm4ctppjp66suvvxfH5marJdKiLsh36gVTg2Tfja1ptfkmbHRrkkrfsCq9rt"
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
