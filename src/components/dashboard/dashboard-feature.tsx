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
    "4dnctCJCNxMAs2Gxg6aDnbEroTUJG3uBo9KJat34VCh7tboyTo7XNLDEtLPUcYsqpAc1w1CxRdeyq5oAhhtrjvJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xJwVQ8K1iH3XtovDb1URuswhjrSxSFse2HWGpZgqDiYmhodvqCwcwqhEnd5qZPtsPfgRmDpZvTbEcfw4dbK2z36",
  "key1": "5BSouKgyCeZsnMd9C1LDZ1oDd18jTKy3TumXSAFKJhF42oTnEHDbTy44esitaV8EfWj7KH2KRtXCYyRcrhVmrTcy",
  "key2": "54UtcUYoX4jSBHL311HCiKUuGjBrZrjhbEb8Bd2gmqN3g4FAhHzDjRqr2GwyZknPYbMDGSLKescmTnMemvCrycEK",
  "key3": "2NHDqPAtQeDiq4kH6KBXMo9sMhGfc3KHzoZzMnxpk9AKKYirUCRU4JUXXy1vhnveSXFFAnXfLVo9iykHsWaVfcfV",
  "key4": "TDzKPABLaTkBrN7Cea3r4qXuDKSSPm4ZaqD41jgdRwPEGSAAZScmdazwPKteQHQTrU48hciAgKFuMg8eetSGkeM",
  "key5": "3grYbHTVa5vibykg1F5JoZZKMUDN84nPoy6L4xGUWXAUAEVuv9qkARKB7nhTojNS5t6E7L9PnCnzAyfqNup9TR2r",
  "key6": "2P9hG9HDbEReqM22CeGhwFyRCPGMEhkZAjSDMtQbcPJxYEiC1r5ThPN9TdH9GPWx1gkmdKcTCmQVAyi2jASeRAa2",
  "key7": "H4U1ZeNBQGdUbR4M9unpnAttcvFzYGLMKKrZ54Ngnk2jR6RGXsEsLdPRbQuesSB1fMkZxomvTjke9CWLf7sp3Kd",
  "key8": "oNy2zZqE33ZoURQiaFVDXAPN5oA9U8ZwEsL7uwgN4rFLiRuNcgcw47HNFTxji99jvoSKcB4E38pdoaShzxBiQQg",
  "key9": "23WdFMALahJehq6kUG4wFAC1d9FTLqizBqWrwg4KRrLGJDvEgownA8EZXPayTTzms21kgdWexeZ7q8QNyiWx2vzR",
  "key10": "4gDJhXMjUcz6U6sMdFhHXSzerEzneoBKrE2aWNeDLpJEVbLPeQ5mAVza3Menc8xE7KzUdPqmmTUQQ5cCRZwb1Ybn",
  "key11": "4oK4G3TptQHDXmFEvUGxPdYpFtVkbFojbBeXFq7epx4FFcR3eWDxvTYJmzZxrmh41urhmJMZu2ts6tkWSGhpVDq2",
  "key12": "7H3mUsHwpfi9rF2b148vCVyDu9AkhGTv6x2E2farDBtVisvcN3neSLfBrGgejreRendwzeiWf2ksU7TkaC8RFpf",
  "key13": "5WrCQExJB2kpkr1NrmHnpUuySRur2YLXABVoUrvfMPxAZ7ZVnm2NK3whgereos5VR4qiumwbNPvo9TQkjVSTAZVA",
  "key14": "2ACY6kutvYFU1qaBeri1N3rvZpzEmX99vBM2NwS3h6ZjHqWvoXxv2SrGg1YYYPh1FgRWELpi32i9XZVsxZ31rVPe",
  "key15": "3dZPzozMAhTDaZPZ4r9bVGYJVP49B935tH5A759b8LvATZhwdZwge75A2cQr4EajnjEnKKaZr3AKrWjNYiaiM1Pi",
  "key16": "CuFFM7vvikBUWpnPqd3fbB5Jiddawt43d5P7aoA8uueJbSdA9AxYLHdMfcAu9PmTyT88jHS9A4WaeTUT2AktWb9",
  "key17": "aMXunhbdpXRxN2x2Yif7GuFzo4UxMGVMbouPkpAjUs4PjzcTf11aSHNTK5a68wznbvgXZ3nsLWqfQMdtbH2oZWG",
  "key18": "5y5zPTJBsAcg88ZwDtA81eXXp4PZQ8KGziNMyZFqBu3zkcGPkthMfqCwTgMdgGvGWHQ58fw8wgEQhgFUA894cmsT",
  "key19": "677SbjS6F7uxmmbqza7nFmqcS8Sm2Vtvcc2HCKD1cYnC8pjrXHDjPU6e3VWLuznh26D2rAJdwVHRxu3suhYpKMbi",
  "key20": "4ZiMUwJPG5nisoU6VD1RCb4vp8e8aj7ggQyPTdh997UkeH38BH34L9M2dd3VdSxobXYk33WfkRoe6euv3eDEoA3A",
  "key21": "2KXgQBfFjf85zn9fAWdTDiN6S3RsULDnmgAQ3VjPcguWJqcEYB2QuJsvfUHFnTZXTBcwbnojTEzBKfYXwDSau6zU",
  "key22": "2TpLCobA7jUmDYgYTnjxZH4aMX9Bca6ApQZtcYCmCBs3wTBPZhCAzCiYD8HZMXvAgfkBqGmTnQgV7WzxX19SXrTx",
  "key23": "4v3k6rJz59qpkoGYxTGBzbryErmEKrQ8CYL9SkXztiAnWWZrZwxDGZa7MBtYuee5Ccnf5wnHdMamUkJn1FVauazu",
  "key24": "5rebA1CxGumcvx5dUztZZaSgmejLFKuFBh1HCRPTEz7jyk2Ay7Fo6VkXDyJPbGhNh1zbPNMiYQDDGYHoKAZvMxa5",
  "key25": "3LeiaAxFNwnTMqoBHfj8iP3JN28xwhKjmbJcp1pdvvbiRmasUTQJovK8qFyrzDWVoKa6pjzyWLwwKUsE7HFzdXLG",
  "key26": "Vr7zqSr4UHqB7zSkPg9u7m1RFRuhgHbUAvaGcj1wH4s9zK61QJB2PW26ET3TWbogkpmXzueKrN8Z5QNQYHQAzFx",
  "key27": "Hrg6WbgDaqAHgjnBM33FhXissFqohHZ9tcvnuQrya2kVFzGcVUjz2TJzCQaX3P6t9hTBCv9WAjBXHzSgaBTQKAD",
  "key28": "KoseMhL8kKqNrm5hGvpR4hCybZC8WUdn3ySuSC5mgthtbCc13SyEts33zgJngZHm9u8neZUGeDHPfZmSw7Aau7T",
  "key29": "wx75933YpYGCcQCgdRPyVBK9HjL1zk7URS1EqB8j89Wh8kSiu6tKEJaXi6596uos9R5BhffFnDT89PstcDa1GCY",
  "key30": "x9g1KHnjweZzSDGNmUGcB8EFnQ7cj1CNRAZpifHe77xJYyEtXQmAkD9LTC8NQqrpDiCkmJNGT4yn67b5gDuhWtx",
  "key31": "39AEZ6MFg5AEgA4J6HdujQ6Y5EAPuaw1Z1XrSngVXZja3HGAV7rTQb54iHTaaRJpiSayvXH14BeJfyBDFeB8f8TH",
  "key32": "2JKgs2mcreo4ypE8V7K1ACzrjMxWtyVEqqJ74MgwPBZhHZJq5hsBn9Kc8apTKtTi7DmdynMdSMakU2UD8ugyh9ib",
  "key33": "3MLkCsz3MxQffwBtKrESnexZVj3ibp2Grc283tYdRSZivvonMFxe5fzJf5i35MKUUyWHEmUZNqxPJCyFZQmLxbSE",
  "key34": "5afFSH4ztGSa9PHNhPNF2U66MRsdECtKUN16LxgqvCJkFRexGhfHr3cnbH5KmbAZR2dYZYuGWXKbF9VHdAssTXUo",
  "key35": "PhcvwPibE313ZJav8VD482ZyywHCsrfEgiNJw1EMB3yL8QLz641eDJcYMK6Xd8jSEknRK6BA3cHh5VaAg4yK8KX",
  "key36": "mSpZrwceQG5EaY7JyTbr93YY5ALSnD63CSk1cJLspVQvfVqYwtZzXi4fmmThKztEHx8iPdQsnougCdeQsDhfvWg",
  "key37": "64z2zm8ggAJqw7pB89skHBudqAZee2qHLoT6j2pTfxsXK7CcfpYss5yRoUG49hMtYgBnT13iRtcWegWoGv1UsgJu",
  "key38": "2ZCqFS2eu23hsCQbZPc48uLD42JV2eW5RqK8KkmHtqgKui9arsxKNu8kNYiajRHaAcMX4ktHBW437JwTgN3E4kgg",
  "key39": "4NX7axcLDXS3Vq4bVhS3tCVSBGvb3vfvmkcVontEZ7RoWG19NuosbWnQQSP1tD6GcdeBH7Kpn7noGfv2PB6go9m7",
  "key40": "2HNoV3XcL5x1JXxMMD1dVKx4MHQAJcswtpuLLNQ5FMJwkQFY2M3idmNXqnJATrUZnfNxycmw7zFrCfNbgngJ9mwX",
  "key41": "4VBcxWWGNstYkxdHECY8TCN2YTXUQgLeuEfUSuqhh1WoCoqRsHtZDVVXLzHNCHj6qAJWqZpQb1AqxwsEgphEBS2R",
  "key42": "5WdzTqp98TmtHgpyvL2x11dq3VxUTujEokh62qWBwbfApxMw3L72od1hnqKivwEqj6t1PxKeoxuujGEizFci5up2",
  "key43": "9o9dGb3yrayayt4hUaYd3xqxoHs1nttRrLHW891tdsstzyFmBmq3KVLXCSdwVRdTbSkCUZsrm3rUwpGiABN33UJ",
  "key44": "2NijsCvGtfPdYKzHJ4G1zvd2CFxhQc1eNNZaTJmmRx1HncySEZBaz6Vg6cJqPH6qwVihemQ9W36bhxeSWwCKMUf3",
  "key45": "4gW5KocxzDn7yZfbbeZjW83qUi35PbNqa3cYhvtDTcXcgn85CELxx1Y4XCAFLejdZtMFWu9RyGLVSs1jxGN2rtup",
  "key46": "2aa1n4QsJr3ZucxDcpCvwJAwtaRL4EtAFTg7cH84RhYvHP7xcN6KRfUnNf9scY27bGF4wNua71Jjsi1HPV8mz4Xo",
  "key47": "3tQeW7weTc4rabN5k6yHdD3YktnvxCzgY47dd64dFapvxhkcwRUuG8FwyVr1SkK9Diwz8E4muKhptiNBRUKaJdY1",
  "key48": "2qb1ZL23bhcMcuCDUcAQqycG5nURZ4oW7HNseJAJuorMEzsUoN6fk4CAsobA8dqJc1ne9Vq4xuc4PJrZbDJvwNdB",
  "key49": "3rjmLxnKaMUmTnXyRMbSfeyPk51CCpptDDVZcXhev4raDS42CopDuajmR7MVNMoS595ToPFWQw4rtDt6eqszbJeC"
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
