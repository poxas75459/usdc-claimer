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
    "5MdmnqwwN5GwvhqBeKNWpM4am6ytGrqqun7z3efHuWHfnGRPZv2nM8U357GQyFqb1ETQFgo4CaddoWo8uX4EFp9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M2VAQxkDbaHsAXZV8hXYeDUzgf3hPN5eYojSd6pcrUsCJCy7LBa3Xv7eBmecjXTMWXkx6sVeicpK1VftnQ9N5kK",
  "key1": "2UurupB9FNreioGd8WFu1qnGLNV1SmC9MSGddJnndAebCJZ1LLstGQjKMMPp7sLDFquttSN4oqCyJ68x5WEgy3Lb",
  "key2": "3krZPtoMCaQEZzY3mCwEz7oTVCskxzwtotRhbRMY4wTY9AeQwSHqe7ckuG4nsnkuL2vqpkbQVtKzKKdbpagMxhTa",
  "key3": "2TSQ7iEkmu4wtrTeMa773WEWRCY7qVK93Y7Zi53HnbWQ5BHw3GiMnpMNyG1cvtRxMM1utfNqdP6tBVZCzebT3ngZ",
  "key4": "32ZmT3NfyFHS7qgdBz8yxA4BmfyyrMc4UcHz7WzfZkEqCUSa7k47BLcsQjkHKvrSustjcBozn1EPBGvrQZzsfYgE",
  "key5": "o4UhpbtS82Km94zTQsALKM7vpRJNjaU81eVM1CnAfFHgtVWAgBt2ADy4qvdxGD8eH74N1eubyro66kkMHnCfiX1",
  "key6": "NK68kgpUZsWAvwr5sTJE8VGCvUHYu9Gs1JggP3JGHLM9Vk6YUVJL8MVDjxhFdHg4j4f5zqP9vC6viBJswR2BUw9",
  "key7": "UKmsziHoRxU8NMkfR91TYKwvWYwGj6c2hNsho49duSTgFM3VpE14DTkHUWCM69GemhwCSYQUAR9hi8hEnAVAyXb",
  "key8": "64YAKDazxx8bridJEPdGXmbuPNoEfhuNfTigrVHueRZh6DqLZMMJ2orMMN88xe5F3iLPdGnRRYKgH7hwj7yxK59u",
  "key9": "VkQW95WjPuE2Wfc52m3QEvDetGX4hU4Xr7U3kbDNBY6wsDR178Nk41FQ6eEyzosurUikVdB9eiB1gb3VGRgQUzY",
  "key10": "5SzpnTf478xbx6jdwizzhzu79yJYeaoW9UqQpzyqapKBPGth9RykpvY13n6GVCWS8MoCb4hVwqdroxiHv6Zcfvqg",
  "key11": "5ACYSj7fuzqQkksP4z5wu2MmYv43pV9Fuca8bBHogxyaP8TxKZFXHXUHd3c3ZyUX3WoCrEWYVTU31UAyJjPfrhtL",
  "key12": "287rHA1pKifwPPzPwwRM1oMiDFMUmF7z5cNasC5QdL5ij4MCJHR2TRTqeJBDPVmQqTLTE5o6Lp7ptNwnCAhxRSfM",
  "key13": "5xaNrCSFJM42YmBismrwSGKhCYzKck74aAQrnJDGqBo3hTubrEUKZpG8WSPXWJU5aQgV2VkTgnKjeYCD6yNVq8by",
  "key14": "4YEqC5xRZZMHj6TKec8dzmG4Rmp7gow2hzdA2j1PwaeEHUHpmEQxERu93LBLmUPHe7oJKZqrriYYhquHwvfELruT",
  "key15": "GaEFqLtfUgXkPkk5YXeTFp5Ymc4YCApc91qXxgL6BWtNUVvDs9JamjtVeexJThLtG1RTYgduytteqD4bdC2tmPa",
  "key16": "su4WtLE6anM3VmuxiirbWZf6UUctp5mYrytU1iX9Xrexn8N3nL8Ycd1f9HUX4YwuFVFP71tgXkkL31ChFz1ne38",
  "key17": "2xBR7WAdcmCusaq1UihMZtJBBUBUaSE3JHyzJSSHbQ7bvG2Aa1WT5SCVGbYB2aCsSX41C3mqm2kQeFH4vUY2UR71",
  "key18": "3qa7SCLr117VZCkHLwWjYgTYURs8CGzh3Y5AT25iLFqdRY6NgLj72zstmNiC9eMmQExKJwwoaFNDi7FXN4TRVdhr",
  "key19": "5ue3soU2evTGNkirPh3kEzbDVWMRbsaQa9aHu3gfSdmTiU8ACj6Jvj2hVUxToGp1hAL8LQBSNKMwghNfefNzCtUc",
  "key20": "3YFvfyzAW726oQmU6EqmBdtxpt83NkM6RCKBP1XRVTWSPpBjjDqqoTL31YBuM5o1rQU6ZDa4buCKnGJ4t3J5j1GM",
  "key21": "2qMNNS7maP7eLN2Bzr5Vr6jdcj7xemyBtj71BftiVF39haMYW4TPeVztBLiRPcVf34aDZrBxj3b8NkjufWDqfmdS",
  "key22": "66ZKYwJNP3KpxmAbpmjqqTk1B6pRa7cKvJdgJ6TV23b2dbaNg7G3WiaH7zqijJXyTEoa7FJEef7suTxzyccJWmFv",
  "key23": "PZRsDuBsh7kZxHJrehoR4yVs77aTLsnsynXYk5A9pRhqM34A7f546uaaJEtQFdSDHM7cPxtU5NgLtnjweqHqR4i",
  "key24": "EQSpkkmcBeyz4Z8esT289crWXJcdJ7FFC7PF9iv1hRFBPnDG4ggWVNMCmkc9Pmssqe6aTWdoU3Tb3CRoUTVn1cH",
  "key25": "2ZBugQkS56CnPCgmJEDryJPeiQbR4VJfoGk3SNYn3gHdbzzq8dPW8m3EfUQTq2T8gDVaU49hR2UZ4UEguWAfBJyD",
  "key26": "4HrV1oTHgvSGCAiBGLPiJSwXvSQk4E3V6GopKD8vnbjbxSJggmnFR9zLaXKGBx1uPKWv8N3rcGVyHphCHy1SP7VZ",
  "key27": "37F5Ftq8mdQ5xYKfE2PweuQNtSSGaRHju2CdtrcUH1KuQBc5gBxWcSXux3h4WzwjFMvHhsn2et4KegQvCcGF16dS",
  "key28": "46QU7Crj4BtyVTNufBvTAvCvjMCsmn9BBaTadcq6ihEehKaPWY9SkVFkcCujV5CS6M3n12s3PbCmVLQmRSGVXeek",
  "key29": "67NgTsCUVyPKvdtPWmFhNbK7Sb9sVBXUQLsKw8M9cMzQbcT5y5ucLeg3ui4HDYjqAmvNG33V2FF8YvmiDFfwjQeC",
  "key30": "51Nn7bTvtDp97QCQTZteiJhfNnJJpLem5fPSQzt3aDjMhv7u5oWud29Q8s5aRGHayay58booQfgeDvcViLbvekV1",
  "key31": "2niS87tTjFD4B7GgSRdBaZRoEjb7ypEpZtMZzueU2fU6n6ax8RehLSPDiiswX4wCAs6gMCz687oJA2F5kAQEhL3z",
  "key32": "4fitAiq3Y4juZCcEBEBN5pkGX8TvZSM9TDtxNZFdSHAVYYogJeApf6ppvgsTThKLXd9x6fmPAtoa4NEhdPGPGnAW",
  "key33": "3isUj7n1irRCnAsAXFvQ9RMGSigPJ8k1F7mPPPu1NV3d9EhL4fB8A5zqCEuee6ti3AYuR6QarLFiAy5qfDX8JqGE",
  "key34": "3aAAmY3tBgdtWs8bgxgXfmvafqTsFwa2v4BB8HWBSjgBn7wczn6ixZbcJmwWYK2TgsQNce8nmEB3Btaff2aLg5Ev",
  "key35": "5rkAFxG1gCguf679ujazmzDAV1CthLmzgcZiyRrmAe3TqMeLNwy7YdsvMb6yuzZUuDzfQWgFWbLxjrdPxifMV79p",
  "key36": "5dksdczqNKuG7h9FUDrrQkrMBZEu616R2Pq4G9MeGPBqtLdCGC9a4KnzfdGGsn3ynFwJFDoVzWY1XvS2Qv2Po33o",
  "key37": "5fwmSVQtpyaLgh5ZwJH3AUMokxKYrQow7SEyKPwjLn2RkMj4E45K2Jzd44XT1qA64e9QyhQ26yUdD82ojEtcnkst",
  "key38": "ddSheiRL7HmmNyrgCXaxUDDgQbF8gojkeheDnKBTMwoLWXT3Swb4o6YLj6BLLoi1nF55WYgTAeDvoSmwUfmobJR",
  "key39": "5n4UfQpcf57LpYtQdR7Y13vSwMGiaBEXwgdMnSuQ8yiaHM7NW8ygjZmbRB7cEmNxgnC8aPbVLk953VoqfAwsPRkf",
  "key40": "3RGfHpdHB7Njz6ZrsZ84aLhWs7X1u17aMambJYeJvrzuHpHdG5bprPPeTYmSR7gM2AkAmenZuVL7subFdnrhAMgA",
  "key41": "epbDoC29oSgLScPRWizCxRjPSFs3KiBWaZDe7x98qVGMfi1jMM4iaDCoAPKRkThxysMVYhyNCiNjU8JEUGxqmqM",
  "key42": "3mEpnW54NFetPKyhrtvjDaydfau82sNA8p5AdbV8ErK8YuLN9Aa62WB2szmHu43jiVdQKejhCWrHh2J4nFBgC4nv",
  "key43": "4wL7LszWXmv4PTxwZiKnA2BFDkTCJ3yhbbdJHM3DSF2B29Mvf8a85cshoqhxtBPA1QCeDZcRb2h2xNqY5SGagudX",
  "key44": "5cS9NVYcbWJVtsoUaLajrV9Bnj4y1xxZSkLZ8hsF6BdFBjFPHXzYLnrzcT8xojPfVHeYCFYGXZrJims3DrRMMFWV",
  "key45": "2jLT2g9ReA6Q4wvQ8BeC3PLKDj23wRvPHF6iZg8MjLHj6kXuaXnhvNaG2dSdRDVpPaCJ6n9MVm1D61vxxx87JyW7",
  "key46": "64Q6gna9fgLQ1pNuYHqyR7mSpeAdWbNRRxX8d9nQaMYM4zoL3WSCCa3Rob5ahJTfrxBJFT5uobMSgRFJo2pBVw5M",
  "key47": "5a8d8sjG45Te7tYMwJMz8hsWLc9pFWb7o41D3HgAw29YMZRdBZuYtZoCHR7AaNbMxxFeUgg52CokhmkmLfp1KCUD"
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
