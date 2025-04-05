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
    "5hkjeUbeFpV472ioxPopUvH22y2EoZ9LgqFnF6KmZvcSRA1u1X2oyCGEtZZHhFgQ7tWXGxwJA3rQzv7uEUMuvJv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V2vTYrodWDb9FtSAvT72jS1pYxMoCtzD4xeNatk9GuyNvN1HHzRpuAFUtJSErTJqp2PJwSq88MA9V1pFSfdHbQf",
  "key1": "5kJVvnRDfbaYZxVBvgEJe862UEHFxELGcpv1mtF4ekNLb4yAD3tJzu57NX76qeG3gkDBnYNzomk6zhYFZo3qsCgc",
  "key2": "38iMfLPNXdvZCqXpg4mspkDdcshPu697A2u8wcynsjvsdYQgWJkHeaa8mMpAa6Mmq6DQgypEu6zp6fhQchnu6vvr",
  "key3": "57zoeZULr26ZRa2MxN6mQoxdE7dxErv5nq4EXA18d4ACGbQeMrgTkGk17XuHYf97X8J9cWoBwKmpS74QRd5Hnyt9",
  "key4": "5jvUNAWtkQdK3i6HewNw7uG8gHWKhAj2de2sjyyS5bb5aDwykHcSBQrpbg2GWQKtPrm49DPAd17uqjaHUbDSWJ1a",
  "key5": "En6xUmtpt2k1jZvJYZNn3i5vdkGAbBy4Zmoc9NGdhf1CdCd3QgfJPXa68qSnnqtT8omnezknfdqgpS9rcLqreYo",
  "key6": "2BhWaXfn5oC8fhyTqX5P8Rt7oFCxT6NRxz7vKPBtDmXY1DASHFReQz39N1hvCsVUTwMng12D6sR2HZdDdk8oMrpw",
  "key7": "3kJXRkaEs3u92oSWgHTRhTarkzH1feavh4DcVviwStJw1MkuErGojooxLjbARSsvxssdsfTsg7ZND1VrzZMnPTyL",
  "key8": "2YAHPX8fw5DD4qf9oqtynfKHdR9vxZj63JcmWnBrbS7zsEL2idtts4f8nqHdt6KtgUsixCvWfVDGYXwNNxMh5ooA",
  "key9": "5WdRsm6EbExzoDKrXCH8xPUG2Lyd8jwvV3iiueDzUgAdPGDBKN48RPmEwPrQEqC2CT3D2uWC7qgXkVznXW2naWbQ",
  "key10": "36XnNH7UjVKLPLciNTBYpgyt2AKjPnPTArW2wwbpcg5L7bExEfVc4xqb6x6d4gFnHznqoeH2swEPjJ2uLhNUEfY4",
  "key11": "3qsHtPqEVXUj2gthxtzSy1Aaihh5Qxn3TMRt3nsUbsnmZtfcranVMNtgh251cgRPGv77FuNmtmsMeMnfw81C8g3C",
  "key12": "4fFWC9TpSJREbdNAbLwU7a819Mo5ubdnHT25k7GhAye8tUs9xgnzT6Bf4LCtNmhN9JPCURxGgrEAWGaYkXG8Fnab",
  "key13": "2oMiv9Y7DbZXnnPaZ4P4YwruhrPaKCsnP2w27ZyZv1gapAUqwUnxJWwcXdrbrm2T61oqLyu4yNmijKvej4YAVCP5",
  "key14": "4Ns861WSctmf4Fh1SNCzBNSfnxurY81iXGCctWjSA9rH8q614GQ2GQTSVGTJEuxqMeAxUymE2oz7xJQtxty4qHrW",
  "key15": "3cFyNU4qVcE4w6EBd58FZqFvK73SBz3RjT42RjTd8aNCj5oFpovi5V29rk4MkQFsAUnkFZJTkVM6eJ3c8JT9fSqK",
  "key16": "5LkTHwAc1Nv9DGxkwYi7ueRW7K84KxYstiy1R1CnSuFPijjGsi7By7QFn1P2auQfTwohXcMBRayRy2jr3jifsMoN",
  "key17": "3Ta9MbgPrQzoEFoq7vrwsJQfZKUinb3ABbsUXXk1NGjj2GfWKeZiD96qkjyTGbzQBC8HDWhXiK5ZxsMbkj8cUjME",
  "key18": "3A4guXwmV2ihwCogjw8MyPK7sSLfpjGqGuGZprdBtxv1nchHvH1JUnk6JsfAb35kmLbuv3p1KhFyyQCymRqLjtVR",
  "key19": "277xvTgfx3fY63G4kiYxBVk18wn6ScAjc9FV2duP2kfZAZ4vXk518Mcev4HxznB7ByHAp79pznDXuXBC8bZmwUfC",
  "key20": "4aZLDjFbrqjh6whj2MpDpWP3dmUVnhXZKHRi6itnJoXGgxDAuPEpLokocAkfEC4LVgzQ3uv65XL6WvbWRXAq4CGD",
  "key21": "3tAnfT4ckh37j37nEENhsAifXGXqyr8T3tLXgZWdAQ31XqNDmvVsiGFovXfq28GNiXZyCEP6A355u5sYgQ8Z8cwf",
  "key22": "4Do6YdH7Ld8UMEQGXDVMgwgEwVEoGkjoRPzuAfnLzT7MjVeLXQphQY4bTkrGb8tcWqiHXa9D3x9h7xigteEdowrw",
  "key23": "62zPweUL4Hug3UunGhzJivZQ8ZDCEg7DshDYfcacWuDN5d9DQDUp5avc9CyXyvtXP1Nak6b2vJVK6Q8EXGyaTamm",
  "key24": "56A4HZBfcqoUwr9qbuqTigNn6x3RcHK15fSjvnrNi7qjpnqYxD2yJ5DF7wHFVyXJeWxo5H3fPq2CDLN7XR1VZXF6",
  "key25": "24v3u1rienZwLUNVR6uTE6TX1QUELsxRrGUXr7c6B6T3tkQzyhuJ1439DPLr9XxuRorSDjK2g1HVYP5tp7VpMHyL",
  "key26": "4TDBDycmfooRGXd4FbvG2d1AGZqo3Eq6cU3v6r9EC1TZpceKvD6b8LQJvHBD7tUeCgZmmb21yCTk1iGW8XtrqjqZ",
  "key27": "t2o7iUyGdqiWdCatoVRAqZcbttSq3KmcTBpcwSRCmHXCsKNbwaPrtzFMFDTjBTwgiECmUq4TYbrfCAQia7N2EWP",
  "key28": "3jDJwgD8TCYTcHtW615b4qMiWEsMzPrwFP8QBzU5SESq3bC94SYjaiFb1xCp6MmyyzZRceth2zS5oUxS7SjiS7dF",
  "key29": "5xv1d33bZJRzpEADFQiq8K7tRodGo9ywPMsAN9iWdKPEaenGryoQGiyk6xsnBx2DFoWRVz6eYbzyUdmKCmY7m3Cg",
  "key30": "3jA14T7npkMtUThAywfQzycgvmupWoR4MEhzWAL2y58rNs1JnQrgw4UeRbYF8aZtUbKQEYbgnNTSenyjCbMUPkvw",
  "key31": "ZVkihK4sF682k4gM3gty2KNtooG69JMpmcSyrTiLA4A9MmwUGkczpkrDXDJhMoVy4yesocbkTMZP5My2PGGs8AE",
  "key32": "3bqm6kafiVppyksgre8XKWSc2JVtiLsLcQmTpEXb6W9QWrqfGtFyoCiXH8DrkFkMxwmoxnqZg31MaVHvhdgUSVKJ",
  "key33": "5t9h1uvd3gV9DeUusytGRGNFoegzJJsFnwBDhphp5uMh8eYEbjh2V6FMbgoFcoQvnDT8A3v6UG8BrZziFLvrPYqw",
  "key34": "5ML43VPgXdAJiR6upJExLLMxu25vJVn4JJ4LqZpmU9qxfxG9CN26Ba8CEs7jbSDXENntUSiDG8q5vETAFdmYMG7W",
  "key35": "xQBSEwDPMSt9ShK29LUmd2umk4bC8hrJhTYgqbvejKtvF3ub9X2CpwXFWe8YWfAfoonF5motcmP3KnCNBT8Nwd8",
  "key36": "zfjuzHZLt36n1sY3Nnq76Gt9GwVRTm5yHGF7V3v1rgeY7qaYSXniV5TQ8fcCsKPjk7Wg8TkUrKNLp4oekq9fHip",
  "key37": "mDVUzDdCAWKvL5oM2jqeHPkd9homRw6fdKMsG3SKApzUYUVb9a5F6zdz9n7wagAeyXnsuJ3jGaWtrbGicCb2hEE",
  "key38": "2STMBvta2fMwv3ZfSTgAbfUb9EwhgVq4UacZLSfvmXXCX5PRNzGPMiFYEGYtFnevzF1jasHRKkhYn2jtYf1rUoBV",
  "key39": "33XRGbojKvRL14XQgmzx2iBauACnJSLamJAekwAgGif7KmQoHRCAMaAPin9gv9sjtebZhgxkWBvfBghadxEVVVsu",
  "key40": "24tsvUipTX62be9qYKN3kCJhMdLHkVo22KVejRwhW1tN23tQaL643rRmRNH8kdv3znV4RqSnC3GDCUvUMzbQURqm",
  "key41": "5v5mtt1rjaAdDtXPytFVuNPmAfa9dYjtbxHhzdtTYitGZ27RutdsnN3dELXZ7C8Bj8WW6jmicSF6B7gKPD1gEdZ1",
  "key42": "45fG5ctFFba6RzY3wFfT6tzMbzQLXcSEqMmvgmthEPdpADsgYDgtTVDoiowJAYS9Yv3x3GtAsJWJe3xKcyQTtepm",
  "key43": "4wNqJwP6GQtibMWqwtRaoohtsHDH9RaMKJc2EwTEQVRdbpMDtXqgEXUY4rw8D75SCmrhcSG8Kfr9jHJTvei9WFCj",
  "key44": "3jr1XFRqHeB8iF6rS6nXvcUTDE6cKfVjgL3HyLRpXh5Gpq1HQabwgnjMzGwKT5Y5Sju6JMj5dGQz9Sk1tYo9Eqti"
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
