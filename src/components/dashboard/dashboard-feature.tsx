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
    "5AMF3hazXWxRbTuSRzKyEcDyXQHaPH5hyrm1tkE232uZjt6ciiLhqAW5A99ENF6FDVkynxoBPA1m3KpQfCarPcBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fgxtbCHyKHEpDKBqpTdGdLgofJfgqsdpuhE25RYs4rqhosVnUkEFqXuVXyHB89JsrGKscUYnps3B5cavVEGL4Yh",
  "key1": "2XA2oXZcdQGPwfBAKYunCqMg77hKCaVdwVQSqcmej9dwExRzEo3HojvVbHdG46YoWFcyy8MqjjTvP25Z2N1QWJt7",
  "key2": "nGcDbG1dP5xDUgPmBH74gHGSYFQ6BiedWrncExuCp9qffRhhUHCxMrmeM3Ti3rkEtnMW795BBYGSe2x5LmubfU2",
  "key3": "3kbkKaZhqBak34irBJiJcoyFSkZeSMkvS3Z3KDyzP1WXt1qdUy5WxJhi4qyy9MJLYV7u1Wto2kaNQEghCZu2akN",
  "key4": "31cY5uwShKA5dRb2X1b9fR9LHGSwdupM7sEvbJUZGSp19Vp86HVyLMzyW7j1Nip38AgyXiJ9hPQzm1e574ADFJR",
  "key5": "2CfPTXTmSMGRpDJ9A4fdxhfcYSE5nHL1FHwiqdcihwfM8w38AecvEtbYq6eKdQDHnwsRQZ4bFjdJ4sTEjnFGZ4w2",
  "key6": "58cYHWgdzjjvJoqjfa2U5A2a2CekAZyRkZcSguLt6TGzfxyg4xZG7EhfgY9tPpRnLXSBgj3bFYEMDw5tcA3jjcNU",
  "key7": "3TP7DHG24m1ZKv9Nwi1MUYt6aA9SsDRJNwDiBXCptYBKr6THrd82SD2ydxq824pEfjFVNi2HdpUaAk2vjUSTmvC1",
  "key8": "5F6X38dB1sRQjrWf37tb5Vue7cCPYi1woXX4V8QfYL1mPbxvQYL2BXr1hsCXJRTNVNPVHrWQTMUifYNz6EJbxkx1",
  "key9": "4q7nWmMjdJCUWfCWqV2dX7uDZHzKeBxP7zrDC6Qaxwvn7AttEPHmE47sFcxYu9nkaPFkPGEiBFisgZbA42PBMnqX",
  "key10": "5xcnWGTv5n5U7Zj58ReJqLVBhXYEvZ2VNbFu9BbW1PJJeVvmECKbzu12tpBn4ST4dm5gCSp34pHtCbVrc2dyiYhT",
  "key11": "2JTUtv6kTCtKPHEsdF3F58QzPqXwbeauW99rJkDRpfnuUUL4to6YKUmMq5o5DLMCtvig1CcaQDk72wfHRfcPUtr4",
  "key12": "5Me3AtSKvCUp3SEHCqBxRn236swGCKQHQN64s8fkGW4qHHeJbHzEMxvXNfkd1KLnhLB8LKNMqNdyGNo1A4WEdNjE",
  "key13": "2z6iEEJBx4U5TBmDtnc5SPSFuawHmvbjEyRCSG4ze4fqXT9TL4UwFwu2QG5Q1GeKWQ1Va9NtkpCWStxv4bNCgLns",
  "key14": "2g9wMAwKK3cH1TEwfjzKuBqJBZgg4bTU4yU7BvCRpYXaKH4rBFKX22DA5hbunyRc65kDofgJUVWB9RJXN91Lu7zM",
  "key15": "2FB2g47RxhpZUC9NRtEtQmPgpDa23qhiuHcuSWCAx8YrrJTMhvcBo8fB1cUirT8Rr9UFgZuEfzNNfxcuTj3ESaG8",
  "key16": "63YXE4SybTauNgD5RpFpkpPaxjT1NYyRaD1huhZCFASeGRw2eqF473LUtMDNt3bt6seomAH6EMh67mxxyNz3tc11",
  "key17": "64SvEu8EdfeVDiqoP7GE68RENPd9uTh12H5A7shhN31E5zoraH878zW9bL4hXhW4Wn4UjQEumWrjdSnGGsmkN2Bw",
  "key18": "52vgFqjJXtATM1mNhqYUSEyZvT2mn4BaAqzu3cqJPqScij8vHKCY8r1aUxYY2CMF71oxK3VMjoLP7tFgacuL4v3j",
  "key19": "GBUVgxc4oBRFumufygxab1S9ArvPRvW2bGx7NNGEsJHyFL7MKuhqPgMuTVS4NkSa8xB9cWRSbUWpF3UMN8UkVAi",
  "key20": "2mkH37wyoDkRwD97QSnC7bZCzzqWMX59pNp1MtTom3rrgoVr8Wkv51oSwcG7w8eMRJrmYNqSg4F7rr7TvEfsuAXs",
  "key21": "41apqkzCS3xGG1gVSMqy4FSh4mhB6zBXgbQ9QdPXzhien1Hsu3fTFZFjCHmR3uZGqkn7svPuaWPRo5DZeU4mc55Y",
  "key22": "25jHTn2bM77znoy1YECFREKMWGd2nbs7y8c8Z25EEFE4Qbj78B8TEJbsXR979WNd3HzaLuH3mkTWx5JT6PFxHRCT",
  "key23": "2motGHaKKw1JuQGJNQ7NA1xF4vbZd8x4ETUp255FWPpfBZkNuDABBjpExcn1aru62YRTrZUFAkcqLVjzVXxUA32K",
  "key24": "31JtQwgPyo6KWJebZSvzU5S1eV12qjU81SsHWidH2yDB9uEG1bJ17fz5CdREJXr3XiThSQ1fwBvsLBo6ZJbJEuLg",
  "key25": "2Hxe32QAAFgotLSFWcxCFBwFvioG9MypSmwuzSGe1pA6v8Tb7i7gdis6JgQ7GeJZwtdHnZT4mNp3rzws34cSykuw",
  "key26": "3mkWuM5m2YjD1KayAzBBHBkniu8J4pf51YkwcjAapa9SfvhhP654hAZKbFbWeW3mEFMVXkyV61L4CUdk3NuMz7J4",
  "key27": "j9N1evgJPHHrtk5XWt5EN9rmjsgzbfR4bqx8T2wANvCgmRziUttK91qAiUCA1mAJE24xgwN7qKPsuyyKaBfHR7H"
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
