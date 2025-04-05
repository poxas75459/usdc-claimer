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
    "27bUg4Yx52rhFCB3c2GWyKxZTKGHqH3f2vgpSFmPLUVHLgzok3N9e7zwr744pDufjtpuJz7wjRGVkk7mp1NjSiPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xzJXWLCEHYJcFkuhBU9p5pv5TtwRdRw98idLfgwTNjCtpV8FAardJdkyEy7fiTdT8WxxmPr3Cu8i94mVZ2hknJs",
  "key1": "54noPVAKjgDHrqyk4xSpTMK823qu46iyiD7nv7uigYErLUndywrvZsgrEkRFmdXaL1uK3pgzikGoL3e6xNqpJSxv",
  "key2": "ybgKJJqg2mqSZqtrmrShaaYZXUy4RJg7NbQbTQL1RMRvRCPT45QzdCVNkNkK3p4XpCXobkN12gY385HSXMpjY7c",
  "key3": "4jXCa4DGY6poCDQoEht1PJHX2XUehcKL5tP3eNcRcjVpd3D1bMnnuf6ZAEi8RPBvw21sShKyrTJdk98Ti5EWST7J",
  "key4": "HigreyAitwZWCs9G9K3tY28y7B79dG9N7j3TynBeHYis6xo1kW7tKBzkxzbFE4VSj5Kamq3kBjUWGX54yx9FCiF",
  "key5": "AWc5GwLxz8pR7NntivLLYsW49UmZxvXG7tewFh8rtLCaa1hqmrYuL33kUwT4XKsrJPvqfLRswjUK6cw9Kg2ATj8",
  "key6": "7ChbXZnygpThb1fAkRuqZakrSwq3Voxu9RHLt6vBbx8jwRXU5k9ySbpqdB6BsU8wMFenAnb1FBsdefeuHVe8Rt1",
  "key7": "4ce4JicBvqvtyP6eUQzW2ntubLeTGQ24R4zH57QECWLpWhxnoZJ7ATyPcmmzfmWz4CbSQxyA9SQAXszReuSSpwdm",
  "key8": "3PMmGucxoCdggNfMvnZS7mbZkcv1sXUhb3PQ1V6SxGn5b3X4gJ7nuqYP4MBVvPvhpbiwoT37fE537KC6EYQcZxd6",
  "key9": "4rXWhArPXhA7iz5Lv5VX7sMGveNUSU17s9LmLC6UMAXgFRHX2B1g7gFVyfByA2dr1L1u5DPMigr9Y1UKAP5Ag7vG",
  "key10": "mukPUVxpMXnpqZfpc3C6gZoJdhALAHNWoeTkZ8sBPfFrEazpDVQ89vVXp2ofurGkhMdfL6dNxr4vNi3iKZgoHZz",
  "key11": "4jYgohdbSzUsNPsZfSJak74dMhfsQXvZ9BdinV7pr61Ybx7BDacWcaPjTLZdYCAVTk34T1i5S4HCviyoG6m9Y73A",
  "key12": "4mKBh6FN1NdwwM3r3GuMDqRLSRip5jG9TGtjWxa55613XsggP2ENMioyHWpbJZhs4KTVzmxHvewrRQtjPgU1zQXg",
  "key13": "4tt2crpQ4HLKQ8hdmhzTTZ275LSRj86VxojDdK95WAwmnqFwjNzP9NL3NRe9tDGUCrWfngopWCEEnvn5txRLGX3M",
  "key14": "2ygxk94fWv4RQaABR8T2J5UFqkZWoVdLHoBopZjNLiphey8Hdsk7BiDhywnk3XAejJU2eHryYYd8j617ymEw3WAy",
  "key15": "31LtwH3jJZ7tnXs348HKpKnvkZkYhtnJhkXz93AxW7zG3ra95mrqKnrXf68KLxjovBWVTiyF8fmNrfq8jrHX2Vzn",
  "key16": "33BJs175KH3nxYVTM9ZPDtUKsMVL9RH9pxYgmWuSfCoGucCXgrhfpBipszSRw2gdEMjeraZQ14PadEsCuKjUxPq4",
  "key17": "21q9CmpiyJh8xXUytDQSEryYAncATQLfvCKRg2gUgw1Z5GvWWAFgFXwJG4VcCwkjNZEmiz77qq8H3csfgJcS7WT2",
  "key18": "2ZQ2kB966Rg2zf7uKDzfQ1qMFGXWmDeSRukUznmdRPRaKHPJW4xeC9agBpe5N2uLoW2iD1Kp1WNQQzMiWNcXjchj",
  "key19": "NpShMjGQykT7sPAzoj33hmGo9dk4dCeQ9qqfdDopyhnADJRETJEE88rsDRHRqJESYwWQsDjG95nkJgnTe1VSiJn",
  "key20": "QTRaqUgYLSteiNiWcdHXRvqvc3ZBXxB8c515GkVmCkWy6p3feU49rdYqy5CRFc1Hq69ixuWLkDDVrEKKuViPTUP",
  "key21": "2aTSmX83uzso3MaJGSqz4LyuNv4aESP3DV8unYbA2hbMVBWR4e7m36WsM2bewSTQaStFvHbSTFgE6LtRNByMmCPR",
  "key22": "3QDgF8ycztcrG4x2uZ3KMqYPXK68qFDVaWuFSDTMfi6xkMvib7Kf3xE6dCTFBmcCAQaNFWp4hvhmHCQgjZy8T1zj",
  "key23": "4xZNATdqiYwgbMzf2msYbQdHmpe7BVFgVbc77bt8j32mtTnVMoBrXLHRn6PxD4UkuYDVcV1BM9mTLrDiHwW46qhG",
  "key24": "5end9Xa5W5KEz422owjTsHAi8YMVsfoV24hEJJ9gxKcU3Mdc48W2PHpbW6Z7mAcYVQPE6yzrXrP9v9bHNhMtdsfK",
  "key25": "zRASDwyhBvHA9BPnWnRZYRBmNnXshLsicdeEQViYoexugaNkcYfd6Utmqkyztn173k6pDgxbee1TJ3jxGAXau5m"
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
