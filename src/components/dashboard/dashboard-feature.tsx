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
    "JaoLDBxX2QLADEjT2sBP4P1rVBKSNiaDUjdWxzykrHCvRBuAkXBmFwiTd1y9mVX8KHWSrEhc13wGp43Jxc5hgYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "363f23GTPmjLNAvsLgTZ4vAxcM7dn3otzASENc7HZZoRDiM9ZsAJUWKnwK4xcnPzQbc1QJfszpMZsj3Tg4qD8Amv",
  "key1": "4frGF2VtWNTCmv6oUAtq7TcXdrJTgGv9C2g7hiys52NdV5zybtfpgRskSoCfAbS7EZnAwu7ds2ygNf74YxZLoqCk",
  "key2": "43pdbgk63tAidxvszVYHMrgrGcTqHtzvAJjagRJwV8niJYWaNfLGNwGvpMmj2nfjT1MEmENq6HhPS92KXwhxVcrD",
  "key3": "424iTt3ibEVJspjDYHDXUtJ1294jRmVwVcy8VanKkHhjqr3WRjxxsdAiCCW4VqkFaerDP9xGBRmsUmybwtTNsqYD",
  "key4": "3uCTkBNdcVzBVF1anDd76K6DesJKTSKLvezV9TTUUtnoQL9Vi4FGZhusABn9J4zgrC6JyNzPnSf4jTWDmotRie1N",
  "key5": "uBUMdwAyxwZYPhii5bSHqK13MkbCxAJr54rYEbUQVuginqMqSBaukfmZM3w5e4eKmZkymaSFjJ6rnYspyuj3SvV",
  "key6": "3ohYXmGEyU2HR5sMtNCcXoGXdSiBygzCQGrP5qTabywi74LARLQH7t8R8eNihJc82HC2A3GU9L8AfpxFkcpHxFyc",
  "key7": "2nzyN4X8faMG3y2pko74bgM5FByBvhKzZhcQ38y88RywCZdaZqKYXQCguoytbdekH6c338sjZXDRV55xypkjs1Cr",
  "key8": "3yWNnu8dB8zgs7orKLJdnhpEWRpMhGk4AcP8AYCMmb77ymJuLG1Z2rzB3hHEweXj5FwmKxAvAirRmVMVtbkBgJ3E",
  "key9": "2PUEJsfWDeRbRFFaNKaP7jyL5otAusZbHnkQ7TCYoQWLgac8kYiANf3LbEy97QUeouGLWfYkWSrTGx2CNfRV3AaL",
  "key10": "tAmATmoiPbMfjgfXbUr7cXojsD3cqG5m2m31WkiWUNEsPmmKKYgDUEnTLfNShnCkz54bFTyLZkTKc4AgN47YUBy",
  "key11": "3mPwbGnPQFAYcaai8tgvxMDjBYYAdotKfbxUfpggukVXKV8xScw93qB42rxx2oVc7xPRXfQpXeCrmjKLzbmveXbx",
  "key12": "3rgiGfFx9RBaaNcWysDQRj3PBMo623zTSvBrHTgfiUom5REV5NRfyMZFgKNTfUCXwwZJXGx6sJC8LC3Mrk697kAo",
  "key13": "jEZvcyjcckhunTe7PmFLjo9AfeWMR5iT8tLoBs63KhaVnsBPtidytyuLXZhG1fRsjkVAXzeT8znbans2pg1R62x",
  "key14": "5mwhLCxt8GRqdmY8YRdQh3ftHu4TucFnsNuQRk5fZFACF5GzrtaYK25C8yaBTJsdAbKq4NdUA9dJ5paBsfMTtK73",
  "key15": "2pge5HvZK4adoqNgqeTfafzsZT9QrNYnphjDoKuhurhuGdhq9AXY55x663QvRhiMkjQoSVnLXZYxVBeKgejGVrBK",
  "key16": "2MJM83AzAQjW2VD64c8T5YPq7Jm3h1X6JpLYG81wHGkNp8hw6gpynWKjt8Sc5Vxp9T352uQLz5JsXEDvXKFfAo1t",
  "key17": "643VScdn3VDzX86CjwEZVPUf37FdctNYuD9NTfHhZS6piyLBtFnAQa5FTWVR1ZSgPNN7DeEayXNHvPsZ9S4Qvv7b",
  "key18": "4hisT6v2TpyqpfJTjrCUsMrMNNosv3ZfpnWU6xkiYxKkLLvjevebxdUCMB1zDmz4tPepu9vYdWN1WveZSnrmbYTD",
  "key19": "5kam57jBLvVvoSo59mzCi2Adk5xUe1P2fSceDj3Pn6dYp7KFQvnMbkyGj8mkyQoszjTPqcgafWfa7J5FQiXKVBAp",
  "key20": "5LUR9ACNLHH625K9oMoZVhHyqepNFvavEedUXHr3tPN2LpEr93PjbQLMiQWLGq9B57PP6F6N6vfghqTLVwSDq4gH",
  "key21": "46BTTCqN341Cc7uq1eGTDmLJ6GBF4AXCjSs7UtpuJ14WqzTx3eTNogTZby3SfL9xk4XBEvYAczg6nNeewJRtAZfk",
  "key22": "4xkVLRQLgQzxoxjumWrHhSionTyDNNVWfwrq7pEdJ62a6fPiztNgByf7QFKHuQJdq3Dup9L28yJGn23qg3YZ2n4E",
  "key23": "5EqshYnSJeMBL96GpNhbWfEax5wwjBh3EbpbjF3NzMYWeyc9y8f1ewQmoTg6fwM8h2B8zJTuSsp6VWnU56HtQEUx",
  "key24": "4D7yZduf6bfBtrb6Yhpv8VSkeGaBfTDG5GBURBdF7Yywzap9CKYmhaMYx1zKyeWtEKN7mFAPut7uDfQAsc1Hff8W",
  "key25": "5EM5j1oW4aR5FDE82Jxuu7TbABg74UbnV8aRrZEgZXAUaysphmKLwAC6WHKNbeLPvhgc1iSsN3P3GjJaKP5v2fru",
  "key26": "3QGXnP85yh36Ndk5veoHETrcJSk2VGSt4EFG1whfryF5BkCgYYBhm4qWDWXGWckWfKDT2FcA5U2xSmbbFJpn3UbX",
  "key27": "36weGJK7xqwoMKx96rN5QVYCKjkowNTUS7PLARcQiEv1VwtMzfRnFSWem4KrzVJjQMoeduoDcy1XgVLyb11RssZM",
  "key28": "4sMvBgBG6wgYgbvDaJHQkhosiMM2w5vGS7uCrvT7n2SEiqyLjMBb4shm2He93rjMVufc9Ag2DQGPrFkHPAcpJeqj",
  "key29": "MKx6Q6SeRtb6EQ6xx4EDoWwhBNrSudcTYeRQ4RQTSh6rh53rudHe9KaN652hby8ue7i1RruLm38qFNUypJ4ptsx",
  "key30": "4v2o3SVU9Vf87rnngwVV2k258Fz6bX8NkU6mu6iwLe2H2bkkaNswcVZa8ms3Arr41Szc2AMKRVRN4w2CMXFX1rqf",
  "key31": "2BZVkUiKPkqHNCJcWCUDMszGDTDQxm8RPjq3gJpj248uSEuUcuKoYLYVvABewNKQCoqdNcFrx4BvyNipXBpUUWbU",
  "key32": "2mJSKEn7zkvjwxnemVpPJ3iypBbVXHnDvcL67eyyiEbkKujHNZuHh7EoCUgRoQKScUPrhph4BMkCo6xFNkispJjs",
  "key33": "4eKXJpS4tocpcshRY1BMvm7mXgujSRaigRcbXGUYjJtucJfFxFTbrc4qbMPj1GH1xypmErvYUigkS7PEP9W2zf9A",
  "key34": "rYEKkqtjUjgS71j7HgjPpfbuJ4joYaPqAryZyaFDU5rLLxhVwPAf8VkaW2igP7b1ExbjdVuFEH7P8MGkRrAkd37",
  "key35": "25PbZjG7vDUovbR2SNLcKeRnrRP1roWdBEevqQZdinoRuRUEQqp98URi5Xev7TnaSWVEaSxTxoKW5xietKBRyiBr",
  "key36": "44uL53Kdmo7dWPugnQa4WQcK4ubyjiMeyRCbibwU9ZDjcJmn8DFAVp3UmS8fwms48Sd1ZiNwE82g5ZHJBcsD5FcU",
  "key37": "52uXPt1p6HgYAjTFdC2G8Jb37ZngwAFwYiPTg6ovH9NJu1ZiGYbUgsUeD61gu577Thaz2Jd8Q6kLcAmd7Wt2Cm7N",
  "key38": "GVACmLoSjaL35bJx4oym8evbyqdZVqkpyppffMje6X3cX7HhigbTz4sygV9asJfxh96Dg7ddP5TaKLe1zFTmjip",
  "key39": "5fKr1YSJwqxz83jqJwTYeZQsVDn1eQAAEpYxRhBMjqCEBcMNUPhEBZ2yntrL6WAwR1Wt2PW1bncwKPwc4rXasG6Z",
  "key40": "3qEAqDPU8Jay9h9VcRGHD3RKcCWnfsXc24ziSzdybSsLAMubMsV8vCWsb5t7EK8UaRV9ZG6wsrQC5v9x3frVkBHs",
  "key41": "5B8ZFFwegM7vUmCeqDUgyu1LLEG5JGx9wYwfpjCyG3XuzsFKCnYYUqTNDsQ6YcaNaYX8X7J8cyPvB48u1SribVAj",
  "key42": "3DacKtBgvmbnjC8Do8ckoRSgGyEj41ia1bgtyCYDMsoYXt2e5bR3Qd3iQJM1uAeXdG7V7xAggZCy212EsVXp9Lq4"
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
