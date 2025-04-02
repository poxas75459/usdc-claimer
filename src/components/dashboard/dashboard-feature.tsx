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
    "4CpsJ4tMsUu4R7UAYYH8FF4wjn3yEoPc1AqBaBPQWpu9qBdrCGco8BppS1hmeKkcq7rvPUgUyj1rjFdjWCzfHPup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fUWFfUrHmc3qDMhSueVtTVjuFeUwVUJabTpJUDigAU4toRBa9iZTsaccTpUNZWwQhYHxkjJ7bpXmofwfsAtA3fe",
  "key1": "5bHMHeFFqkZt7dZjtCe7x3BWCtbtdA2RNof6xNez8PnmjNpZNXs4r1wrE2HhUcPVxy54Ktgo4TaJwQivTyLDspom",
  "key2": "3UzhYW9HyoKSAokA5CyuJfVeLqoAx4aS5yC3ynMbCfkL5hCXaFeDRr8hyymArVoKUU451dhEKYdRXy8xjG6NoDJc",
  "key3": "pbP5ghQAUUfyMmewFRJgr4tyRt78aX8XNvB4a1JwzNQocsq4TwUCsY2bHC2VgAYDfKCNihcVDCVNvGRttsWbQwk",
  "key4": "2AboNoNoRoRKDxNCRAhZgUEt9zvjfSZWo81AaK4VgystkYU95NEteJkhFADPTztSkycb6M7YwSe1gTt2Q6134xLv",
  "key5": "4sAXSYAm5ZNHpM7nxaTgfmKbWyAmAf9g13Lsp2MoSWRspcNzZ419mZb8LX6R7F8sNR3HEdD9AeQLUUX73Rcos7hk",
  "key6": "4xpUVM3g2UQGLyJm8Lx3EZtQcGndfzBPzaMtrHnAGUfvKfY7vtpQqZbjfgsRiLCpXptjC5szP77zUAfgRCjFRxdu",
  "key7": "52MvoyTT3wwK7DJSBpUbLbsTvrxvDphYfjtWLfyes8wpKPLDbjetUrhFT1Bj7CdZpRXjzr4fD9FBVTrFYnMpLe8u",
  "key8": "36MxQFhaFBNmEcBeCegtsB74t4mu7E74bmhLaq6DCtPEfDLhX4k1Niy8E3U59jsf1RwRuP8MziiUHbePXAQtjGsp",
  "key9": "2Pq5hNafemy5hgRyfiQYFx4jyBNZY1saD6FAz2FujfjoQyv7S8bZnweQgk2V1PN8FSdwTM1iwCoYgwVW24DdTiyJ",
  "key10": "3cG67dKQFMf33mV1JpYX8Gct2iehKSDnvHjL8Dj3e7PSJKzfkKgAXqpXrH4uaZY5Ao8sYyQ9RuZUgtxK6uv6rrRL",
  "key11": "2wEXFTTL6tvjHSXjYFoeF17FuPAjcM35YtqW4h3e3UgcLsDQs12CBzEkNG1RmD65tJj8rvTVMMsQgz3vbPkoNcMJ",
  "key12": "QubaWwirhH27KqJjFPmLGFebxnrRAEV6G4RTDqwDQ85rzJQ7zSxak5oFfJjpBJEb336Dj26pKMx9r4JwPgbDJ61",
  "key13": "3BE7UQcVEf6sndiPBfKBqSUGq2wng1tHfUb9Rr7f4viB7CG4RdYLpVoA3oZncG7PW5ZB6EsGH8N3kbSvHVQgX72h",
  "key14": "2ku4LMp6NjxsoZtQGxUdmmQd4uXXDDdHAMdLVec5HjpZmtxMS2hdYmTH5PPMgpFR9WPpp5so3cJQQ6iyjmnc3EV5",
  "key15": "4aHMExr6CCx3hRbirLvc9FofjeotbpTsY2Vs1fomayChfLGLoJHMj5Cp1NLXDkKTwwqJBe1Bf4yMhMhfQtxEVM24",
  "key16": "3gtAUWPGqvdL2WtBEqrWxQNSamSsovzYmfwKDqGxMKtDuafYSr5GBogKqewDAjGCodB8k35sCKScPbfLpdurHUdx",
  "key17": "2Z77Edqwxh8d2AVqsGPdM9v1nshD4opNFgvisrRRURTUqKfuZeyAQq9j4mPswA1upnBSRg3Ku2MVBHMxouD765xG",
  "key18": "2GgnCAFFrur3WujULz5KR9kiyU1viZnSTe9WBNTbQ7UWTHEEiL1rGJjqusZBHZKqDiBjNpiv35QEGFnNBnwwNHXX",
  "key19": "3JFkR6qi7RoHnkCTHFRW4Gg2H368w34Ttzi321tiiaryQV95j4FApZoYPzz7v9jqkERNaWMn2swjkSQnq7d1vLRS",
  "key20": "3njV1A4KS55bWQ121h8sqijc3V515FoXCR1jpVRh4dirPfSMUV8TwVvTs6bEuXRaLTfy3ayiEqU6rinbXb7SXBfX",
  "key21": "5riLMXmtpghqMfjr7L43o3WyZS5w5cG6JGL42bXPqbKct3GQPgAeCoYynKH9KbinFgC9gTGYrB5gj3FUQVepx4nr",
  "key22": "3D6DXUfUM2fkppJLucaUCRc7hgGTk7L8Ek9VxHB4XbnrWJNvvTLfKu1Lc8rLyuvn7ybELWS3QDC63KRtg7mXjyLz",
  "key23": "VbP845sstYi8hWCiHkLKqwNq1aQB22RLN3Tg2eHpvVChznM2UTWKA8n9XpDhGcq1sZeJy47x8PSmUVFrqxVxun4",
  "key24": "3GuoGmkFKyozUK11EuiSfpwqffF3okKdEoneKw2THwLdbrb3n6vMPB2iMigi1Pz3APWeNtA4Vn8emGdEmnoegxfa",
  "key25": "5EyXTFLyvpVVTdhAb5ZK9UfMnvUqjEmToNzUrLwEzGpMhjbjyfzh7nM9aqfrYzonjT1ziKtvQt4zquNrMUVJC9uK",
  "key26": "stGUeXmdWUWeaWksQcCvQoyqzctDrtLUjaK2xxK6n5UwpVnx9VuTfL7PNfhN8rvEab9YkPa7yzzcwGC7CKzkuhu",
  "key27": "TTbY8sg5LtWNMYPGiaog8nLvZVs7eLNf4nxfrAbcaf8Vrc7LZGZsiFL7fNH4QTxnvChJgXWs8mEcfF1o1X8He7J",
  "key28": "5hjqojXHXftfHapAH5nDCt3KFAC6k9Sk2heZL9SDxfhUEMAw73VMbfXzeyyvqNpcMRnL11xi5TaxiE8shJnHieoi",
  "key29": "2KeMSheD3MzJFTNmXuCnEZHd8K81Snv5g1RGUFZQVEpnoVJyfy857cDLP9u8D6FsKqfdH75F8yxmrzN5UGaGcRD",
  "key30": "39ikU7P2cWjC5Y9brKTt4a9VDTuTJozEPqUnBrDhJEa4z4aZijiVGnLrMjENAH3BdvBrguyduCsnb6m1udKVzQ4v",
  "key31": "3HSdrgvq3JMV3sPhebg2rEi5B43kCWFp1AJrkNTJCSZRkKPYc75qZTgQCKVK5SYQhVa57Zx1yewzuQGfqJEubvfU",
  "key32": "32n1NziUT1SvjVdgBbM5LUwo21e17A79Ak7yakPzSJRiN9EChpeJC9hCQAQzr8jDiqhFX4U3kwRswn6aQaMXfXPk",
  "key33": "4CeXEAfu9z32FwF57JXUdbTZh98xTe9SAASeNWKpws8Ur6V4bqUMiwMSCsjbHgwLnAeNXJLHZ7XWEKNLKRhuorvi",
  "key34": "5siGii9V1DJfsQPnB8jxovtGrZWmVxvd3okohcavPCotK9jMQeL8bFxAUhqVC9cC4msqMPLFQWLta6SjakBQgNwY",
  "key35": "5JrwXj6zVsNQM11G8HZsCSzxYQmzPx8HvU9gYqxUTYzVT5U1fT78VmuvXer6PP31tgcBeDrPMkkcBiqAj1DCuMmW",
  "key36": "36WPjm3hkVF2qZBgnAaNS58amxEp5G7fKsLASgqHxZgiPZst3MGgUU5sJ2q5T2hFn7dqkZUGqAisy9MMLSS3DVis"
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
