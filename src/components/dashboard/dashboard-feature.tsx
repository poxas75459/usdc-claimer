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
    "o1La6s55wD2y4AXLcpk5ksodKcPVE8gqaXVe7TNpJjGFmQP9Enw2XiNcF5FDapHwgt3SiBXknQZ2zQf9cpFATAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "478gMgA6PtM2PqFi8KBQ32QLNxoTN8gsAMozYnZbatv6LiaRUz6Fi1KPEZmCtNLKo7ZFRaXhkN3AFGEF2aWiBtv",
  "key1": "4RaoaQoCLHGKB24sfiPxHyczgwJvRw4DxA9mTHuzNsS91FVQW8jdJnfB77QjKCS3DPjeLmLYzsGtLGdAV1TRHF47",
  "key2": "4WmAYqcXpTaotaGSRCVXfYhzkL1vmGR437SjwrFsuQRjfWDkBnJ8YdE7XAktjqaoi85M7uS6RgGp3hMtR453k9PR",
  "key3": "5qg3RpEy8ZqttHCqFxDLfHivHG5X58oKZMNqpv7FT7umi6tFJBYvxFgig3ZAswG84KQFEsz1zVfCmFscy3eScU3L",
  "key4": "4sW4jnMhvxTvH412fkbPoabhLDyfmp4mqV9W2PbqJaSjc1peh2KKwcG2op7bPm6MtRDWNER8kya9fj6W1iu8zqQd",
  "key5": "3M9P7A14cwSqFA1LCFu7pB9XAog1XuP9JxMU6AS73qwVE6Z9ZG2JFdcsSeCpVctbUWwn1TbJvu3v1TTYXurFuU4D",
  "key6": "4ujrZBana2kd8Jneh69UVykXBgf4JjQRHPyvUJj6d4yJMv7izoESCbU7RVXn9nGvoa45gdaMMpcj4mgb7VvKyjYp",
  "key7": "eZSVEFj2CcvudEX7G83zyTTGnJNyXDJcVJeu6SgjU5G72ZjQ9DoLEJKs9U3JTHLwPZECnbSc13D1veadpLxbKoc",
  "key8": "5jz2bCqudLKZZCxo5FQ99MXvCUghV5WMhk7Mzb6Vgo8cBibbxZ2LU1r8JfwDmhDm8DWgdGbmc88aneTZvj3wwbUg",
  "key9": "QY3Ms9GstgJJa7dJQncR17incgLL1BvRkmgxJyZEzodbUqWWCAxttLEV31bkzpAPVSN5SH3K4SDDWWED4kN3uy1",
  "key10": "3riskAi9R6ugBGCWnwvkRGru3Sc8DABnTdMCuLz7MDuc6TUJtZN4QikvCB6491ijfhy1CLejkmVgWfk7b9kFbzmG",
  "key11": "5s9se6dgbdajhh1tzSrQfsG1SdKnhJ3KqHPUSPbdJiDfS6otizxHuBt3upVafg5Lv3fyQR8b2XxqFmi3wmdPzHmX",
  "key12": "gyipzvnLDszD3gQCzCf4nC91C57o1bTf63i3jaiyCA3xa1sDVun8p3A7LRnBzG7kW43TQD7iLa7jL4T97t7JHtA",
  "key13": "3xES5PzS6tnxcTWFvRftbbBnB8mp94Xzsx8EYr4i74H5f2t3xb97jJKSrAGXW9jPGJsLMukQbxxx26kexDDZZ8NF",
  "key14": "2oTeRTYdNeecGHMen5iUKCv15eU7aPaA5jLynqcyaKezEwrjFyaBoENZDB1FZPyw71FEEzT2mgXsoe67YjWJQ7Wh",
  "key15": "y53Q6HmH8GDs3CqD3ECRKe19Svmqvg6JE7hwaxbotYtBxtaHwvk9E5Pc9P82GZgvrVXwJi4Rd8tYBZD1gdsaAfc",
  "key16": "4R8uUh5W2yvwArGgctEsxaHTwqxaPYe8bFCyAz1CDTLVgSe9rUHTS1zH5U5EcMEkkq6PPum7YdmBbocjsAQ8LaMD",
  "key17": "4nxJctCHoFxxfxsvarafq5YZkNKqor3hHsJTCgHy1RQPTyrtrknjiu2QDJ9pcQgfPjyqvQDbYnTMvj5Pu1xvJdNb",
  "key18": "n39yK28HjJxYWpjs1WjgbTPuhpTxX4LfTe5ysCubVCRsqUQgwoa8xbn6km9MWsx1YbyZGpoQSPomcBvBnedkKTv",
  "key19": "4crsCCCFQRCS81Crd8mXm5Y9JqtTbwgqE696rLYgZ8Uf6gFiD7gS17Fjzdc74GroMyZp5qeVG1hkXuAXiYCHv956",
  "key20": "4Fx2qfxRe7YxS11sWbQCc3Vq6V6HveW2uSjmdLuPq9MwJdNduSLXds7o8BrMUNYNsk1uoHuQqZciLr6XttjtjQKJ",
  "key21": "4inq1343PzEgnEkx2MGeFnimyfrMqRQUUE7csFtDtnn17higxJKt8oNceLDio95S6ZQabpzwMbhMHQQdkPUzuRVp",
  "key22": "3txrgg7czr7rerPBMPTMq6PPBxyJCv76DzuWiCRwLRNryF4KLZHen3z4ELfMvmWzsUMpNcrzGHtQfrYBry4mQey3",
  "key23": "L4FjPVBRdvoVUDxoDsQjsnRCgYjQBT36zSGhiLuSLuMeVmUn6JNiTJQhGeLwot4sgkh7MsPF5z5TNzCzRQgSsvF",
  "key24": "FGCK7GKPYAgLx3AAzXnqSZJmhB5J54sDv3MJCqDoWArHrkgRQ9KPB5yGs6vH6BcvpTk2v5tLfSUAohQxCL76Suq",
  "key25": "5CoTFJJCpTTEiYegGt3CiXaaYWV35Z7ZbuqjGDMcqhwLULBJWxmj2b8w7A8Rk6jAgh9SNXGuFKvoWoo5MMX5R4y6",
  "key26": "1fAr6XTs45sPtuQhYGhGomELDYJuSEiqreNaEZsj4bUjRz9vnFommg9P2ToHRMNnsjnvM7cWPC9iBJ5RRABf4tC",
  "key27": "31aZoWmqLBbJvog4H7QMNxoVdUnZxJrgLzadjXx8H6oPwLJMniJ5TrFrSGCWid1BvVtPcQYom1jAu3Hff5ePzDQc",
  "key28": "5KXE6jj27MbfDkSn3qiqJphDz6uCuUGQqd7w8i7sJV4aeRcUM7ADvA1BoppegjQqVApeSEmRXhM8c2bigLVdxb8n",
  "key29": "62vVgws5U4PwsBBQJyYkt5wcWJS9D1T7cc6yfce1o6rPHxngukWZKckoxjNoKYgU8xQPrqmCCT7JddanKQo4Gf4L",
  "key30": "3oZuetJScKCVDNYLHzRSMXG6bopJ1CXgay6MGQ6gfCXiYvEynbUMXrU67DXvDM93ECEMsLvKS93tArjxx3yLWahE",
  "key31": "4gcobDJFGLq7k4EKpoLQHskUMKGe9UHVSywGjrfXsK1AXKKBJ5xhZjCd9EDJfno3y8FyvJNMBQbjfkDcjveNh16c",
  "key32": "5Ufgj46h1rxx9EshSEMAbsU6qZK92rpi36RMPmeEZxUTVVtT9Zi2rb84yCfAR527mEb3A76wDHAxfEUQeeVG4CmT"
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
