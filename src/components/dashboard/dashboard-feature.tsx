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
    "4Ze6mnEHeDBSA7W5dwuADAizkepF2BrE3e89AmwmGyXYgX8SJpmMukGETcA6r32ufxsqzPKddwqUKDsJdQA13JQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WV1oLNzUmNBqncov8f3qzBbNog91dB8QZ5fCMNrmqbYkHq6UZPeQ5hVVG6UKfUjSPxe5dcKw2Z6JhkX45w1ci2F",
  "key1": "kPTHFyBJhZDE5fUFtCnQVLrTUxesBHCR2udfNvvaVh6ESAHqQGj8DhP4KBvrbqfatgYCnoc7bnDgQmQL3bwrEik",
  "key2": "5U3Au66gEHBdr2Xt99NMX3nY46F9TFR2QmMvdo5a4yF3kTd4Dr3TyEDvMxLcAH1xbgAsSymWZ2ohioXhhPn3Z6xp",
  "key3": "7q3j2fGXoSoUME2PdrNHST5XFj6VNXpa6EbrLpgb2cP8HTXcoEf6Ta1aSTknp4hBvnodCGtyw2RG8nvonv6PS8J",
  "key4": "3TmTfFbbQRurfLYbPgss9RdVSUk3Wijr2FCSUJEEXP5QtK88u9kME8FRBnrUo5rpdFaMAHhcMg4R6UZ1KK2gysQL",
  "key5": "3e2bcY4ZdGBekuubuwjJQX1KVA6h9fXxLmVCz3RnnbP1uj1woR2MUUrPgxY4hePoTgAEuyMPEhRkT89kG2DjNima",
  "key6": "2z4GYwfkoRu49EsxcRCQXh4RReuJz19afDBRLK5SDcB2ynrtJKTxtiW1UsgZ86rXBkyGzYHqqsTS9iLEW6ExvnsN",
  "key7": "4bHdVPCcf8MezTFHZPmBBkD5daEMgQXy44r6PinraecYXgipKtk91V29VDcQgyHdtMrugyYP5N9XkRTvwvR2WnNk",
  "key8": "4v9irKaYXnQvW5r2j3seqMyYnEwQfJ3EACiFgtGYYViqoFugDzh3tTeiYE8vX1f7s1w1AaN37WLSSWCftFL4wvqC",
  "key9": "2ehYaapY4xDEdG9MxFGvsfRKB2HyoPue2bJcFFoYxZwrNoUGYYereQDurJ6VHAiKMYN4FWnQPab8JzZauBrnkDw2",
  "key10": "w6PGX4dsYYgyBEgqoCixGrfRRgv2XdLEMk3eDqb3m5odSHssws74WFdvZPxXYAHEPWpvEPGYTYZpQrmEejmH5uW",
  "key11": "2CGz2hHaNxWNwJgk7swYbbG5cn3XuKvpmqsd4Z1vvxn24CMaNc1vasP63KgM4KXigzcrNFyuJbhNcDgeGHg9jDBY",
  "key12": "4EFw36KfutWua5GcRFB6GAhsofVBZkUNNDPf24e4DCBrnwTEetuXS7yHWTXDEBXS2492yeoXy6zycCVPiFnazHek",
  "key13": "5DE3uow3EqQ5dnbczjt4dvw3QoziQkZMXTLuTLDrViShCmbHCR8d11tqLZNfrjuSad5NPzCVCDKAoy9xnVRHdZpu",
  "key14": "ccgeAkPz2CJebaqyEq1Khnky1b4GZor1AZw6aWv1c2LsRxMnxVgniimdzXcMpiQvvkaRx77ovWsnJamYzzTkHJP",
  "key15": "3Xo3QSfUPQ4gdyUGXp83fiRTfUQjVW5q12vz6DPWVNbPX18mQFcwJrp2KLLMEkRvZoAB7UArozs6Rypqg3LNuHno",
  "key16": "NNo1aazDyfoQjUFKjtzvV8MCiZ5vy2py2q5gUYJVnV2Gwm3NJsQdHzcyBXF6hsS1nD4VpiAJ9xTQSQy4azbboS7",
  "key17": "4AQti24EZkviknvz1JpRkpYHHqb9qQv5hFxzQecJPAKyajFwhdCboBBcARtYJPjeHDxbp3EbDvoGMF5nXvcRaLvQ",
  "key18": "2CbYXcyBDY3M4KLpF8jBn5MYxeHMECPoshfo49ykBtSC5vEZ35pmxTDesyq766o5t5gLaoPPM4DekbqVtFrKjsNg",
  "key19": "4heZtVdB99i4KzHoPws8pokWPvBQkDXh2VZAQoPpNbNBpjp8Y5YuqcqC6MH3MziMfvCELTEdj7MYk5xD9kGZrr6E",
  "key20": "s7hE6nwVqipJV2eRH8EZEHZuBLkTyrSNHeEqjhMNoejfCQfuGDK51UYGspRYoWsMg753udgeqGaMj29cdNc1Cw6",
  "key21": "2fd4ea9fCQkYxTu45AsnTQYsC5ZQUQBE26WYkXc1PvA4cWFSQWcy7TdUnf1optJvWTbVqz9SHmMQ1HJCiFfQ3Q1",
  "key22": "3a2gTCr7sM5G8vWcRjREucikhTNzpdtu6cmv6DyVrqs3G6zNrzgtWrofFgqXc7fmTAKdGCr8FDv5nafMHhdUJkPA",
  "key23": "2CmUxRodpuAnrexEWWVTh5VCWbVCuG1hux8s53Npc4vEYrueU9wHgPtvKrrWaBG4KXTEJgXKCxh11GgW3npXS4VZ",
  "key24": "5sZwjyV29pJcTMtnjgHLjsc5V4iDZcscWf45d5S9Tc2qbzu7MasNqgXZwouvmpNhrL1tATaN2ZDK5BNg1nWvT5VS",
  "key25": "2wCkaGsGpe4ZkMCDfqfhkzkVXQB22ahzJ7HBAhcFRunY2HoUDq44f8zG6o7pPPXcGBgK2f2utUVdWvNd9KMiteTc",
  "key26": "4fKYy161PkvuMDrSvA9PAikbnvfiDSNT3sG338qdSMocGnkqc9EpugJ4akMuAKjVY6jE5LPM4LwGYMusgw5gw7uq",
  "key27": "3gsGqp2DAJEfqBpMTfpvXpKXh2ARzJoNgqPSHPiXFBZnbFavY8yretBwuLkGqAtX8TsAB4vEhj3Nv1UPn2Bjy1L2",
  "key28": "JGSuZpz4kmkypFqge8jZxwMhKymobc1KUYhiAZyreThhGM7wiMLR2eJNKf9xZEwgaffBxb1fTwZ8pPk5LcjmqcZ",
  "key29": "4eaDujtDCdxspZob9625MDBX2EUKfEh4qby2ktxjc3VJU1ZkishC1X9ZJ9VLzH1HCJHcM9xNFCuF5oEeiYXWbizE",
  "key30": "4HtYsqPeuJjTePZYQauqdK88NVmovkoopScVeLU6aA471myzG2qv7erruo1aTVzb6bCQm9gDZFZjJPAQXagAzm29",
  "key31": "4QJXhAKkMdkrS2FtxHioAmM4ne4X7khskNgJVisdrEaSZRToKSvAvU6Ki4qo4LXq2ce839NcCAXo93t9YNPmSDUk",
  "key32": "2g1gyZAXA6945SPtotNeDTqK3ToXxJr5KnTFPBkK1JZfn6BCVthyT7sDyUxMQk2CsBC9dBBLa1axAfX78UymEmYf"
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
