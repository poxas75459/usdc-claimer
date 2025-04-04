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
    "4fhff9KGZKYKiSWTgfsj8WMfFxYs16We5Ruy1RS3WEJ8sGxys1Nm3k3srkDagWN9oQ2HQQEjbSoYhPpF9NgXuqdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2czQVz2SJxQqMW4uw38oyRZ3o5NCNLLSjzqQgS1XEG2QRXxYtSR2gh2RNUuVj157BmVUjMVpEZLddQ3wwDMXRpXM",
  "key1": "24BRh8dupBwPXwF78rzbDNPgpSD4ZmcZ1DNeXUZLDkhG1LQasFkN3xttbGCmJZMdnPDd6RuzERJL81JpjZCjKTnZ",
  "key2": "3tLJLzUXZBJufGqdUzVXVTPjHcMWSeT3xVMmp41T7qdh7Xm94VESqw34CXLpkji5MNcr2Sr1ToZiRspHAK3MfLxL",
  "key3": "NM8xwcsUZdaBoErZVWkibcxJKRUVpjMnzuP8q16mChRHF1x6ZCKDf2oSiRRRjMcGv9jAn78wVSQuRaZYQZTde8m",
  "key4": "2QwK9rK9psA5xXYNh1Evh82BUzbjRQX7rPihhUcxFegY1pcwNK6ZdicZAnpRsgNhMea7rBMkcusHADcigebXs7yr",
  "key5": "4W1gMdzFjfcwZ4CTq6T48wHht66xBWDXxpmAK4yKgoBdXMi3dryHWQvN1xQw2fGeXi7Y5mtakqWHHBUACH37vGbZ",
  "key6": "28GaGevuM3NKKRsY28r3GJSVR3yF1c2TKRsbCSzx3XGiimBMuWFtaMb1kpGUthfsw7SWzBV6xsdQqSEWFxnRcNKT",
  "key7": "4gMsM5adgTXxLtEVX9nNaBWNFTEbLxQmhkj73xWrMZZfVPnNBFNZvbhYTkXGYuTw7eMoKaEgJuVYyZmeZsNEPUzo",
  "key8": "VhYKBrE8tU5evrEg8pXc6MfqJgnytnWvgDedKJbodmNGcMU24N8P3SfPtSwFMesKSSGobEFeiqaJc8jLT5DdAin",
  "key9": "VUv8Vm7wfc7B9PncgKetxDSX4ReHPpWrg3nr71mommak7RbMZsU6JoiwCBR12R81x7HxUWFadGop6u4tWFCgdVi",
  "key10": "3hYCb6PL3mN11UuwKbkuFtkHd636kTzeYTefFY1HRvh4EtE9UWpGcJG72ZWeMA2noi9TWmU9ksQQr4d28CNnLbr",
  "key11": "3RxhikHA6KVx3s99U2YqLwqLGUcvi6WPikv7ssU7Vm4M3NejJQtnBZHY3nEmwsancoF5N4CYcGxwuPJVg2UK8GSv",
  "key12": "mMeiYzpqU2xun8hnYBwFRxTjk6KD9PMu5eAwYuUNhvYVH7zJAXYGaGFBxxzD8WeNwgZtCuUQ3UySrGBFyRuewXW",
  "key13": "EusAVdZJNxZDVKQntkSDi1B9hdsUWzBE2Moeki5MJZmGfWbrQTFxjksFUTDX7mo6uNJhjWGfGjwbFQVS2Z2Umic",
  "key14": "Eiuxs8VpyEtoibJ4niaFbUZxkGk96dtdy97oD1DbetBamU9j4WfLFXpPZFGSNvg3Yg9UaZqTRrSzLrvBA7fTAzp",
  "key15": "2XZpEZg7GvTHuz8p37dvWG1HBXSQykF2uVWfap8qwXvwokLeA2qXs4MMXirvooBTBRPmwnAEzC4sRcUookTc258o",
  "key16": "ovrXHV4r5JnJqFcwbk8xUrkrW5fVWmQ53s11bcuKRdE79TmPMKMSSQnG6dYwmAFMEsQFkjWm5G6Zg7iUxHsDer3",
  "key17": "4RbS9qxkMFm6tqYNp237W4oDksg4EaTouvBGbh95qG6Py31SKMNFTMRhtoYL57MXzR3D7JvbmfRtR4cgGTh5yAwU",
  "key18": "45hNfonztALysCaDD9AvErJyMakYE9mBQDLn5sDrme8GDmvQzUvfCX7GGeU48yfppqeX6RhoypzaUKfWNaoZWfbn",
  "key19": "5q9LnNnisgAnrtG7Jb7Fv8WMbG9pgUedHPCvc9CERgNzwgNsgRTZ6WSRENtUQ5DuNKmJfBcRLHvm48ApFMEGWvct",
  "key20": "jq4gphCcCFY9QAJuR2tR18Lk4iqXzAXq9Ru2u9Az9F4268fxMQjyMQVe9hgoHd82RXcfE4U8LA4tUrv16Hcdf94",
  "key21": "t1Q3PGZ3kYMJBjSRjFHeRRaSrJfcsu7FXUvnvaWcHRHPdkf6DBC1obPERgUzmY6kiZYyzumhu4TdUj61E6PXbn3",
  "key22": "2S9eZbk61AkLDnbwnJoDthT8zzdx1hCsHjy5Tp5CtCnuBRHSZds14q3HXyvwTMkMi7FLkJ96EHtb8fHGNd6rHAAK",
  "key23": "5bHAdFnaNyqAfo7oRbYV2KXAQ9KgNq2tavHASGZwxv8eEecTLffd6QBD7r9TSF4nAsUEd7JFKtdF6MHC3MMAcCT3",
  "key24": "23UQm5fE2b9XCqSxM8N9vtQauDJVxzi5W8nrNCWWXvud3x92fzWpd9BeghBJaMesyAjoP2Aydp22PtQYXqn8q8uL",
  "key25": "2jJojiKYBy2HgQFsrZZG5EDQWRoeQgF8FVp3wXTR3VsCMg7AFG4BkGp2n978PYaQ4YHqbG77x3GnTBuqjGq3N5Dk",
  "key26": "2VbTDf2X8DUjaRNeCPn6DaxgVs1LsnooCpArd7BHq32qPqVczpPS4FHd1kkr3B14hj7rYmcvH9yqpnegPcF2JFup",
  "key27": "3mZCrt8gBLcwDDedxLYc6xv2Ya4a3n53VZntQsDVzPrvUqSZtCnhVKFXNDfYbXq5hrXgzGs8kMKL8CxkhZvE9cqG",
  "key28": "2ZU1bgKbGnaX6jh15uVuq4y4r7bFhyeTpN2HPh2mqQAvfSSfZegu1UwM5NDSGyBBQYR167FtSSNvTkatXmBFpEK5",
  "key29": "381uhxaKUMfsc1PQrJoPwiG8ULaQcz5mszRa7bZpZ8Ry6GNyu1SsAwVhGucMU6PdSudxErKxYrwexWt2RKPtbWmW",
  "key30": "jhUEp6Aj5Ba4rYzEZBowT2QuwDUk4dUEWDVD1WwnGje7KPReRkXXZfP5iJbabdbe84jGh4rYAFXecnJEPGRkWYJ",
  "key31": "ErRzYxJ3vCD7CWDGZUKgjRkcx6rPTfWo7eCWYx563GC7dFtadaWTzKVthf8QNPXCHbSQUiyTpafCcgrx5aYnhqG",
  "key32": "3e8neUHT2PeGVftppFttKK22cwCpiwPW7k1BLQUCc8YUC5rYpnuoQxWLKSPGrfpT98Ueaxk1KeRN7jUYLyEoHs9Z",
  "key33": "4Qyi91mLuZpKzEV6fsTGEayY4neJkuPEHnWYupcyF6NJ17VgJYVSZNiC6zhvgh2BTkBGzdCsWrLxyuZ2CJdu279j",
  "key34": "2vBJCEphYFNMCrUQq8TBuo6MVwwPZH7q7BoEnsiLqTZ9i1NeHKXPZvKYcpf1kn8uNsAbWJLzQU8V3UpM5Xo3teYf",
  "key35": "5Ck7ga4f1CoUQFXXHN92n9QADF5HdhSRz3PVQhpJ26AZgqobLP3taCp6gLJ23YKo6kGigcbxLR5xHts9kkYNMLhv",
  "key36": "4D267xy6SyGF8SWr7bLJ2vR3YF7KECwx6Lqdosgv3VarPDAqThYTizjuxqTCZJuWFfGmLJSRsUFKzkPiYtx5ohNE",
  "key37": "2qRrpaXh3nXCM2zMzmwqbFQTtLrRXR7Z5YN4iX1zra1F4dVqnyVDmendxqZavTF85jGqyJPECELj9jrXAfVpgd9h"
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
