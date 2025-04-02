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
    "4NUTHon5PqrXsFbQe3AAGx78isFPEnhskL6tra6D5TFfqSTj7BD7FXZ59PJdDZhJcPrSy2haewAL5XSkxXuFHedR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64LAp9fb489UR939bn947qy1Bbw88GtNMV4q4tPKDNqQVjcBcD3WSaE22kMZtPxREAcsEva4L88ordzkMjPMiEa5",
  "key1": "5Y7exwAyR5VGob6i4b9ixxAStP2dwpyggkvSCCzpcsqGa8doRFMn9Q9ktqAYv4nkEBwsytwkkw3HSifB3Woyg1Vd",
  "key2": "3rmc5GUf5fnV1J35ce6RH4PcKFaVmFUdY423FjyjEU8Qn55JXJU8SNZXvRo3AZiZUoF6bgnPauRtjMi9EeXzTM7Y",
  "key3": "54vKni2rQqfLEaBLQTye2UfFiZdkQcsNerPGtjwNanDmDtdWnqiXK5C9ht6MbZG7PBDCaoBGDXZXhmtwqjrazQa3",
  "key4": "5iBHUc2UZn4DnPGsn1jZPzswu5eemb3Mzp1hkAMMPj84YGnatXrZBWpgSBWEP8Qxgij9N3J1DDVWBEbZH8jPs2gG",
  "key5": "4xMgJe897cJCMpzeAJE2jGyLTShTzKQVkEUAn8TeDu5DrqQGoB3d6eJTbXjQQMqwVF5s7ENb3qM5eB31UhWMTuuM",
  "key6": "4sbTxaUvGeTHJ9jiYCHFCM4pcBzXi2TdqwPHwY89x7NJQFwtTGZ36NHmj4M7dxtm3PFd6bcVWtCdHxBVYnh3Bgyv",
  "key7": "zC616LhmUS6AaVewrijGSrigRpoZ6snKtR9jrkmDdwd78anAfRNnLjhbfsynXFRxBsvT5iNu3PYT5Acj96pD8x9",
  "key8": "2SKYUUg6CyU2TVi7hgbebeL7U4jK9xZHYSQLsFGoTx4T8hKggggmy2HgGetaUo7HuQWk7ycq6wB8pbdnpLK6A4aQ",
  "key9": "2snp6P6MrsrQjEPDPAWtfx6VeqZXF32eAwtajmo9wiFPUuoPNWij1ae9xj9Z92YufPKEESf4YifunNgfXVLukLd9",
  "key10": "4qWgCpXoMQifRdouTVg46g9hc4vJz2bvofAw4wvyRWgakMiSHDSApdzrnFxwPwfrijNhPwtA7JeyXnZN7CfFzm8c",
  "key11": "5cTPRGVonqzGFCt1y4FsSnuecvrcr3VbzbaSc3dCwCUsP3QrShQdGxwTL7htiUfdHTxFe8LEjfhPfQMw7mm8RhSW",
  "key12": "cM83nVjJSg3VHRVRz8XXVTahV6dxWae3KxYqob116UmtGS6X99wqPLGenpU3ZRWzFXHPEodDARYnKCcRa33JfSi",
  "key13": "5E4tjWymEcZTziEqwNoq2ojYBo76BRYgjm5N2HASqJ3d7FVbzMozkAdjFV5MnwWKXAdC1C5YzgxvRMFtiGzmxD4K",
  "key14": "2EYtEd4xxfHpcKtWr1AdZrcXtTTPyE4eRB6p2EB5XicVqkRconVo4ZXrxjiQJg4J8FuEg57EN6kntpbGjg3sARJb",
  "key15": "5VVSwcKHwVY9MBhbmNbQSZanUdg71maRedTM7xFBKxqJ1c9GxyF1zyU4JygDKgCwcQNk1FadqYiU6muUtZCEY62z",
  "key16": "2hhXNbTT1TxuJwCERcayVLvWUM2X4h4eXMtsYDX9bKc8uUMnDCd7vp1WXkkK6sJrv8HcKEUQFE7nZMD5sThahnH1",
  "key17": "17fRkcacekkJ21DnU7qj5DqiRZG5L87oprzyEwA5bvGi1iY3DAqKdHPbA1SCejiaqRfCJQtfTM3waoxegm7VzJC",
  "key18": "54vef1Q4feFs2hQdF2Xcrtr8zgJsuSAyBYUVKp3JRYYj4Tq1o7bkgRLkFn5h4w5NVgbaaPCzU2qPuEbQ9jaFbK4t",
  "key19": "LKPKUpSzV8msJqqaNuBxLZn6kMqp5sJ6MHKGEdRnAVBrHKgZsYzKyoNo3ud6cHNakCzZapzeQaVbPk2JDE24ucA",
  "key20": "2MwuyQKjMzHdyhJzvbr2seTX9hmCKzXRWra3m5thBaCFckVNNVzUQSAgxpt13BuN9Q2tiXjFB2432vjt9RUa2j9f",
  "key21": "21bX9YV9QgWuEk8khgpweNKUxKc2PK9KeYdXuMCGC9B8XHMzMfRmc6ZeKz4owmbefeav9vGmqvR1Ks8TWtvf4HYX",
  "key22": "615ggAnZhZ3z8tFB8y1NTJT2DZsr48JoriPZytPyDb2687EmM7ChgZoTrNujwd6SZKwFhNcnFPV8aMHXymiQtka",
  "key23": "5NVaJRhaaJpta9W6JRVeeMq27YFVCgNGnbRFivCpj3LryVZ2rz7SFUeHvtZnLkwV7MxMQt3FmbA7X3u4fXToeXUk",
  "key24": "3DNCuTz65YEDKebUdsdqErSQCziuePyNXdME3n3zWU2wcsuCq3wd1pq9qFTHSie634bMXt8mtdfKoKujRfYc8AKz",
  "key25": "3A7fw3yeLYE2FWhjoMRwhQ4haJPpe6tb6bkJBnfBmCh3AL3gn7mLDa3ZFUMXghX7osfB6dLKxC6yVzQPYHCbKAWr",
  "key26": "2Rjoip2VfvhcfSnQV9PZXfrYDrusPqzjcdx4zx4GLMRZqAnaeP4TPbxWVmEsZ3x8VQxVrPNEJMAyXioi9FGxTw9J",
  "key27": "5t6cM9AXCkGDFjeZheufWaZ1eCuEWnUTLGfS5hVz5CfYxvg7MHVoTEnTHRa952wQvrHXCbW9TiFzwZK4wKVWNCVK",
  "key28": "5nBQYUkVqGYMLVBVibhezQHGkr7nBrrYdYzUGjefmhQ2H69D8EkL1GjdnCW386ixASwpK1HE9iRU5VWLQ5GCQ2tU",
  "key29": "2zfHKK2XmygrgFb88L4xTC6meaH7ZHu6aVVkkuUqmbNEHqMnE3DUQDB4Sr2uiy9Cuz7c5VmEgttbG3zSwUppDQGs",
  "key30": "32aEDdppt3WvZaYFAQyBtS3NkPR3HWo79ZYEA43G3gdRguN3uYgfP5GyD8pZopQMYvmZoy8ZVShKGHv8KhC7fF8s",
  "key31": "5ewQqwUbch7uSr6Rwi3JXpoXPUgseUA76cNX2dvQTjHsG2eE46rS3tNbinXmZkTMukTVRsZxWq7CihzE36dnPPr1",
  "key32": "a7WbeM545RgLr82gWejGFmnLDAtMyJCtzm6uDqMSmL2RpHAhdruL9QdmLmrQeYnxqmXeKUmVZDrTPNfppgNsLgp",
  "key33": "5YLxLRfLxKASpk2GseRVVWRVW6GeEMEStvNBLNw821PUXyCDhUxU6rymNoFiwZuZKLXFUFEfkQ9HpAZGGS1ewkyX",
  "key34": "36Q4oAkaCi3Yxdqz5Ss6i4J7hvQXBa1nd6tgXiXVEBaYebCvJAMXZ3B3xKymoeHS5xbywd9LJYcQ2ff2fyA17Sbn",
  "key35": "qcn9MJjAK79JEdqUg6Xy3feM1wGfr5ZBQvLEeAFMr6BQv6MPyeJEK5YHYLYxRbx72uyEehwErd5eryXFJwbyiPh",
  "key36": "B81mbEMLeWWGPRqrAAmDtyKWnfNn5brmEo3TfF7REFya1Mg2RBXCgxMq3AGQptfDrNgJ42oofjQF24oPHG1h5Nz",
  "key37": "3VL54zgK35zeuX5zfA5Jm4UjK8WEPGFpBuDmTfyj4RaHYsSYNeXrwtd9TF3tmvy9A2w1GoE6NrZYK1xoj3sRFbCW",
  "key38": "2PcTzVDmAzzCDrqgWdUM9q1tTMr8umK8mgQGoZjUeuhFpF5J9bDbR32FXX1To2tizM613qDHLXZgPg5KKzGouvta",
  "key39": "5HczbmiJZjBBjJktTk71KpVdTxJkqWq7eTywc8yWAnFHnebE3tmdD4maQihmDNDn83uBkQF2CEYzRjs3PFd1m1GN",
  "key40": "QyvxcgYEHuw7ubPu44iVd91pZDvChpfJm88tX5nTDUKygcLMSjh7RSpHuyzyBRXsjbCNVK9XAB73enDwFV8Ugfv",
  "key41": "5BPfNbAQx1yxMApRtx6pPvESHGtQFQE8ndJQWz6VA55z3uzBc43H1YAkE3LpqQaeXz43BytKYWmvUNanNtXfcTK7",
  "key42": "38zixzX1rGfBonpeqFZmEzfXHoswtU1Jq4G8YobAXWDMuaX1JG5D8vTpmPtdU3F3yL2pyEk31xkiGxtsKgS6AnWf",
  "key43": "3pA1tsfn5AZGModfKEyLWhAt9ekYyiFF1E19kMHA7PuNyTEDksKqLqyo9AE7xAA4zbQ7Ndjth1N39dXdaVqK6Wo2",
  "key44": "4MtZ9arTsGettahfsAY6EJKF1bR4fgkYYVWHCbCFxZsMkg545vMEH4WSTuxZWJQZEr25CfyykTLpvrV5fPCEebaH",
  "key45": "FsNuuW7iPVKW1us6PQTcDECDRDyhbqwGWxE8BfB3cptHqmqD9J4ZTmwS18NLGUzLt3rxDVxJaDpfSZBT28Ws2GR"
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
