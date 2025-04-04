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
    "5pPdxvsCK6CXJCFiHDXbWx8koCr3PGHmbcbT9wKmrnAuECixCNxTr8svxDCuGtzTRQSi3bqTYsV7gbraGvN379DZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PVYXsfE1vDHaCnFcz43dJNnr9tiqR9YHJKB4oZvpHv2MPnQ4R9j8e2icHBWkvTpAFJ97Hwop78AAfL7J7beazsc",
  "key1": "wQG4JJSfp1uRbKz4JbVHfhgxjtxutjPwzBrNN3MQP81pFCgMrx9M1jTwYeDcvUWXfE5oDJ3SzdVig1NuLgqJuX5",
  "key2": "4DRA5v1B7i5MzEaPKxPBpFJth9qEB3kbnuXb9HM2WGcrpvmKQBJ2pbqZMMTSxHddHhThrssLr5m6LPsZNPPjQGUA",
  "key3": "47zfk7bTLJwzHaHGEhELAsze2RZF659EX42QBzScbchevW3DtkuqJ9ZxiccvNjiaRG4aiJavveNVvpvvJZQE9wY9",
  "key4": "626Y8X33FeJS4pC37EgcvftMrhdP86yNUE6hQRTsXrsoCjsTbFWpCe8ExpY5t87sd1eSzRcSvvxwtqYoceRASVun",
  "key5": "5fiFfpKNM7M9nUWtdwBnJzL5s9ekZNz2gg6CRStM9C5UC3DR8hEBFRLfTrxtDhfthnuKeMyUBC6PJ5RrTvMWdjkU",
  "key6": "36t8MGeHcg6GPgs4K16r7hfgd476gg64HY8K1o3ASQs1B7xy4EFvB9WtFhkiaUZJ4NGWvDZR5ZAsUN1DbokG27f8",
  "key7": "2Gynu3Mo74ip5ndLdoDot26dSdmTVJjuFWHWXjtQ1HfhZFptNZjtXnxWoxYswaaRnivBiMm2j1NjW8V5Lw9At9MQ",
  "key8": "2GLBGZDx9oUvHNgMunFdHFA9r2LEH78fxEybMyikB7GRtWgh8LnBnjc97vYWpkM1M2tVXEsDEmLTitSfdHhCcQ6G",
  "key9": "CCxiXQBUf4vjAHtTEcJypwCeacopqNaqnxqz7TzhHPsXyoVK3S2ja5i6Cx7rD4eemMiQHSuXD7p7nkkKNB4hoz4",
  "key10": "HpkTCCYknMLuuhewsQxU5FTjNzCS1A2sBHqJCqv4BDT4GK5U1pjQJq2feeBh7Q8BRP75ehLBchXnJCMTozciKKe",
  "key11": "3zt8Uj2zFZiPyoCuojFmYUBVHzjaXncvpbxW4m8bSjkqLQZevfRTYK4uKKchQEosrm3ynXhRHZDxTPcqs1nnRSXT",
  "key12": "3xSfquhkRDg7MdPjMMTabQS1ECZRFUKVd9cvC17DkJaaqop3Zxr2ALz2zFh9XMrFXNCBMjmaZq1WQtPCQJisybF8",
  "key13": "4a2fa7zt2BFT6iwRbzPHwyVVYzkKKQBcDBXeFTJGEwZkRmbCR8d8uj2G2QUDemNXQtQ5uyKqsccwRKvg7z9DR1wM",
  "key14": "55wyu4uLaV2nzMbby4eMbqoVDZEZ49W4fsNv8aYx3wyTzMqzV9S4RCFswwwUz9h82WynX4c2ERidTmBWuz7LGMSC",
  "key15": "4p97PCTxKwh4yXvKbacm5v2KdzG5cgAx2VSEBMaHwHRVush6xnajAu6myeVhq8h9HJv7geB2faFVSegYJm22R7EW",
  "key16": "3KKQkxNgNfoCskJcA4DRTVVk1VHDWiKVv5MYrUpEztqhnjGkJ3uhNZDGn5SuYAaHfFUyWUY6qafm66KSFqtM8sty",
  "key17": "2dXqPCvmZrDkN81SDjm8e3xcAXWxWSzbL1CGDafZi6EyA36VfRLQ5Jm8XqZntBvh6X2c3gxGUkhmXQaE2Mk8teKX",
  "key18": "4KXyNjKkxcbPbDn2QvNEfhJFbaKhNcZ6VzszfPKjVXf9XSX5kv8gDQjqeJhTiouWtZ2MA9kNDcxEc3fwzttuumM8",
  "key19": "67DRcMDdZLnueGE4G5iqVumFF1kBvpDSyvUpn2aEpNQ9pMQ6frF1nLp3XJuBubh88gmV6MbHRU1X59XX9Vtqza9e",
  "key20": "4wk2QhFU2YzdjvzeMX3EvP2rCFVcpmT9zPVVKAeVaHWAK2uVBsgK1SAcYnPLHWHiqRD23KgChQzCh2CvSurYS8vd",
  "key21": "5ZqtrKkNWJACrVjG5qxPAQCW634PNs3CVieHBaYw3SKFHT9Q4QaRCbsjE4bySg1CaP8fZFU6wSTBfx8N9iXuNy8g",
  "key22": "fnbgEzcWRkiPnXt1ircNAaHC3FMfKjZPyGMkAmkUWRWTKs1rkiZREKoN5mabKCY1A6Lq5CNLRnm4nrXF5kmzJWy",
  "key23": "524tP2JEN3Ae2koB8g19R64ABX7Dx7BMwr65tB2PUgPcdvm65PEDtAyJsjpE41r1ZwunuAQVzKNTCrSYqx8zZFn2",
  "key24": "3nJL6nPydy14Ktnfvk52u5htb6ip7QuUmMcY1XFenRxos8VbzRgFpHMCv5dp7eDPfKt42zYJqNkJkFBeoQqvdLZF",
  "key25": "5aUaxRva18UXBnN56eC84aaAJF2TqwXCwZw2xEjU4jQYryPBeaYZzPBo6c298qWtsL5CWpQBLibs57ATeSnCU16m",
  "key26": "4xk1eeKbZqf2ZqynHmAxcCAzHzy9xHypj1koo2Fhv7z6fuSBj7WuGq5b3n5d3MATBX6KEeH5strsneyv6iWxRGZJ",
  "key27": "4RBTBrsXvts2fMm2BhLB98eEMouQC6rCrSkYgWKcKnSVNeyer8vWpQ2eHCDykvyxA7PAidHpCmZYW9aYxXqRPFt9",
  "key28": "23WhEH3jzpXremi3iR5qHPdUcN4dKq3mYkngiRhT1ZEWBkJcSTY9xMYCyxmpLfXHCm6kR19fVT4DUXy6jyyH7A6Q",
  "key29": "54V8dUtSnvfubF3S5kEWiAZPJBZ6qRAeJXGp4UeAAe2Koyw4iTTmWp4fDk7DeHmKKokccVJnBjgCM21EnrfWFmEW",
  "key30": "65gUsrxfgsVMVJqWU3cC3QNszAHR1G38wSy2ront2qjWHV2UTPMypTnWukNFv5qKg6teoVb1uGQM2sJ31YigcKsB",
  "key31": "Cxr9kw2zyKb2f5EfESXU7cjRpcKUXr3boEBJjrV1pyuAeYpBWNDA9MHHQFobNdAUVuNtJGhnFffMk4GwgLjjJND",
  "key32": "64AmURUPgchdK1v2ytpY9qmf8QyvYYTwB4vabcMLpYDduJsuJnw5bLCL4AygGxtmFvdVq5wLYnRhq3fWEDZm37S9",
  "key33": "oNw48pVAT8E6dhxmBD2DbEwtxPt7hRB8KkDhjPcyVp973qnG2CNpPwkc8YzhMRx8fRe4vFFvhJFiYXNSLiURDG8",
  "key34": "5m6w1hmybuVrriszrgWYpVknC3bxNkMwAarHodFRNkNKPFtjWxDf88EAt6VSB7qG9HsUppDkLdokTBmAfymQqEom"
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
