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
    "3iz22GQ17hTTRuGCy2HjopipfDAKdDy8QXL3K3N6wcPmc6cNV9SfZD4NtreMPxzuiW5rGGVfGMxJZWFXtBPNxZJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RJB2HPVCubTsMs1bDiYJvL7ZCEvHEvNR4XpweUWfwnN7HiCxovnXqwEJzF1Q4pQM7ubSakdZT5b7XJHErmnobPN",
  "key1": "585mjYzpCaH4gf3q2Ad2Nkd6EX58s3DEUL1Fns66mY6MFTkPr4cjyjDN9zzZA2secuouYfmHenZ4oLNWeMPqaEmb",
  "key2": "2mESjwLUarG6iuMMfHwAiDcwDFS4TvpYaRBiutgXaQJm4BPeKMTmATATwLKUUsQxT9RjVqFkyqmAVCZD1FiHCUKV",
  "key3": "Pw2nRbYJjwXSYr97MMLXucqZu1YSv9E93V8Pse7qzEDM7TirZF5BF3Y3Rwx1EMjWpPWMPbqCozEijYMzFLfSdfn",
  "key4": "4WJ6CsKMYMCazS6pavwGgsxEwEKJBWii1zh9WXmLnTMvdixHdypHoVQfeWoJodFVbSz5SaRtuV5WH3oZ22shB3Y9",
  "key5": "36AATCP5cqY53wRLBEMb6yDnagg4GaE2FqWuVLZ5bUbFp2J6HqiUK2PCMSdaSuEwK6u5MUhcbDcDwfexhSiyrA6U",
  "key6": "sEEuWeMgiqwVNvU9gFbc516qZVmGNeFgMBuAw4YRuA7MU8uzUpRpfxUrQ1sDEqhiFKFMPy6NMHjCWtV5VY31y7u",
  "key7": "3rEN68Jd6iCTPMetTnoDoL8pTbPk6CaAU19BcuyyRYtFGC1bZcS5RaKrjjuzPBXe4Cr57oLQiqNqBkPz8fFycKvD",
  "key8": "4GWnFfEd1HzZcW1tBhvhyBTrzk8RRLS4SZX7yNaHPsjfMT3D3fQQcCyz55in2j8SMB44JdGYuYrM3uQTnfiNqdZp",
  "key9": "5U9na8SPLEgirtASVyChE37hA2BAvyeY7wcK1gGzJ9AwYABA81jA6uhmvDSyao8WKGLheouPAHMbhko42hFv86x5",
  "key10": "38NpGtgiNaHa8TsazvaKSKggg4VWrWr4ZYvXEVR67YBxt7sPpu7v7TohuMBWsmNQDWaHZGvQgykpoXcnqn6y4HkG",
  "key11": "56JaMbjFM8HP4bG1QAY78HnEbL6ciykVkn1XNSrRjA5o3fnpmBtG9Eowi7mJ3eQJbtm8kPZuEdo8DQ7vt6Tm4RNm",
  "key12": "3rZL89AyLbPZuWpuXEoLHygbo5NuzrVFtJdoWKiZ3DKwpjai9rWoBspV7GgLpsjzZ9j3mjM1Y4FUK56ANpwtgrLX",
  "key13": "4VXNwMZxrNsLEEZrpNZim56Gcd3QTxzuiyXnf5sgWXfDtRwK4tnf2qPnnfJMRxMLykWhwBrHotA9fxH7XUTPScbr",
  "key14": "4AngWsSEnpQSGYpsHZMaXMCm56UZgw6nkLgobYDiy2Yk6iuJGXorgtqKdASxX4NyYfB47UYGMNbU6yzjT2bhaoPL",
  "key15": "5uoSFjL9xvCgViBWrMceNDfgcqp2ZyLbufXYh6mbKuHfG2VybAcJUeK6JK7ywyatm4bZ6CghwTuzJ8r2gGcUY1MV",
  "key16": "5D8cW8y5avtUk5pix9hXRUc1mJBPfF8ueX4fFDJ5GykMLXrWs2bsXJoLQX5wyUcgJyM12JATkz9FtXRiBpHa49ED",
  "key17": "3xEudEDnekAkrHf3jzNhWJxnEtL7E2GGhiRekURBYX8YcSEYBD9XtXUnugUdoUwLV4mdfwd8dNPreMPq6HUCcack",
  "key18": "33dn4Q2qeE1ASfmCBnN3eVPmeNSY6E5y61nd2Lb3M5hRVKCPAngm69ZaqxoJVbTJRKnadJzCviUbCkTBUHApj6vE",
  "key19": "21PYNagzybUvh2DCAnx9dJ9cJRnQW47HAtMHDkt35HVSQHxXRyy4BpAL1Zny1b6qYChroCKgMgFWJgdUqppa7Lk1",
  "key20": "5Y8DxRJ6dJ85rPtsRAfpJY6DacHSAniZcbf91NEqYNdY2y6yisDNSqm8yNJXYxXn6jdXQE2gXScQqashf39eaVP3",
  "key21": "5SSbtCoyKMQpM98Q5K2n4miSvjaSWjFCY8JEvMs6kUWuMDRegq2jfiVSQby4rZ1ZY3BsjeKVCovqwzngMtq8wfuX",
  "key22": "3WyRcFT471GaJhTWtEgjYrBRLL7dpMwibGniw82MS2GmH8jwvSUKXwN1EW8qNZtqwBqkiR2uku5UZzfMbsbcjk8B",
  "key23": "5mi8it58iXFMTDPXrgmLioUfwgb2jdMJCZ59as8U1xbBZ8zUdEEMxSzTCM7Z91LG1vtbGLTakSHJeJtRiFxTMFU",
  "key24": "7DS75QuycHjVKFS5JQ7rmXiXkuq7Qz3gY9hx7BRU6D3coaMMLq3aBauiTNSA3vPb2XiZvhRrMedpdAAzrWheEzX",
  "key25": "2wVRU7zDqZRwAKWB32Wuk8b4PWZqDATWGCAVKb3KWT6AJsVPUJX8RZJpifrWskRbEHQ1ssTpGVJutrBCU5RtPhti",
  "key26": "2fhgV4f1cuqazdDZXzaG3GJXYJxhdoavz7vphZP7SYMMXmiDYZa2RXTjNiYW6VRtLnQtox6BpVsLen5vnmUPiDVW",
  "key27": "2TFMmiukZyBHdypen6NWXBaiQPRr8fJtZC9nsF5SHB8w1gCYL4pmF4Dwok4UuuKk8Z26v2U7sXBC9kfmqvaroLpL",
  "key28": "3Fdc6HCfrTsAQdkwLNbkJieUgkVXrgztvJYgV74MkUyY28m4byqpzYDRNbq42jv24hZ8a6TSJF2rBZvrFMjFmgUf",
  "key29": "4hKvCWH2ScW7wBSqBCcFqP44EDnn2dVPMQyPKYdMxu5hdN9Li7rZvXPjGdNRCWB7XQ54JD5tB6n7k3U9KZYPG5Sk",
  "key30": "34egA7qQxFzEwjK8488tBrudbUq3kkEpP1LcxtAa94wQusEZH7CbUV6AS6AAhRMJUCPpCJthGXkurFsBUpAwxLnU",
  "key31": "2TBegX9BdAf1RmvR4WRApoZL6WbjUp7jEFM81po9ufW3Z1csi3198atmWWsjKb5fDgMPopw43SR42nSypTaJUW9n",
  "key32": "4tgQmGEVfATfGW4yp9ojgqgmE87cCuGADZHqa7BfmBnAdgHD2NVNJMvFkNzVcmC29pPCkJedf3AaYN89tmBGKTtF",
  "key33": "5oTJBA42Y1tNr9UzHKvqXiQy3caWdx2Dp11HfsjMRs9Redpp8qGDfSbqiYrDzjS121H6UroeVdkqib95iFQK4hfL",
  "key34": "2EVViLveDceqcCpTgVuT1PHVnPf2vS2Miu5XPFJZbuApj6inXXSGKv4TnbWpKJk82UvFp8TKmoTG8YQ8YJ6nu2PL",
  "key35": "m9fCH89SPapREWnBPLVQY77HmmeoSRNkZvipiG9v74REpGzDzLMRribPSPVBW6uow5n16rMavWk4hMz4xn3wjkp",
  "key36": "fRkHrrBrj7oQ8B3urzp89rt5jpvfWLAJy3Tnmxdo8TTwK1SwqwZCfTyZgGWNNtbs4Fa6EkuNbhEMNcia4Qc2Dxd",
  "key37": "26R55NVeesQMJ2J8cdCpQW55JBDWqRCDLd6vgALpy6yXmQtTtvnifbBfyNn4kjLXdcendQzusfnMyx2PwQQW8CP3",
  "key38": "2q56mdiDGcBbUpNgUbF5jVavM93i4qUQ2Xk13ujCK8drWXUTBySG1MKD3uLtYyLNPQ6T5qJAM5jahqMqmyatbVdT",
  "key39": "4RqcBNA8LEyufYK1VxdEqbCTjWu3f1guyRXLRxwKkF8kJpPgf2Q2BTSqn1y3dUvHHstkqDS5d3VnXUQABnfKHDfW",
  "key40": "5gDF3yJH4pHoC9fDd6RMQJZ5tD2nueoS8vytriqbD97zddK3BRyX23faE3aZRUUs6Vm6RyfjXVKcDVWNF7EREQne",
  "key41": "xQkKYyEDvDM1YsBrh2E2QZQwFBpivuu6EytBux81f6K35si178uDnNppdfyRYGkdqjPL7ECGKzQq6JBrTEQyNDX",
  "key42": "5KgLegFjAhw3HEQq3DcKhhXonnTigyfeLTr14FUGHunEy9y2FeVgHLcLwrfVdSc2qfvDTayvVL2w2zYLRE8FpR7Q",
  "key43": "Kvw2UoxWYiSNJiK25VSGki4i2tE1mBS1tzsyYH55S4XfA55ZF5znN8wM7jn7tGuBajNi3Tbx9BiCsrLivruMsAM",
  "key44": "7LXFh4P2dRBHpmzBfHsaDHikhoBBt8ot8LfuzygZoy73HdYSPVtMKNFeKaeWZxk8AnbdtQat9ZK1P8cJBwiPbkf",
  "key45": "8GWS6WTk8aNLUxHm9StXz54aU7HdwgPAuQ8BHNjMbx6Q24TMhCfQRPr9LMX6qAEPHhdTNxCjaXnkxfLaZsqtA1x",
  "key46": "5tB2tdPLdzgRY9iUHV7pvYvLaSJHBNUVXuUnsb4WYTtdzTbJ1bdvfNeqEK6y1XvqKvzMqCLxED4zEic1zYdoGdzY",
  "key47": "3oSTnrcS1pdetmfZxnH3U9df9nAJp5niW7pX2NFS2XqEZtapcm3JpuyzvUWUZ9JbnYXyGDFtGZwhU6jk4cLDM6qW",
  "key48": "5DbLHn9ZVpUX7y43n9N7UyWWgp9p3HFczUJJwVgr1C5pnXk7Rgt9mmxbdU24d2tzgDhEcFoWTnjk7kX35Ug5kthp",
  "key49": "4UPMqLwrBYhfineGjVLYjwYYXpdmjfmi1ALjbSEVGSfkhk3Ges2EaoavyShagCpeyt2p1K3DAxG8higyxSFW2ZQT"
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
