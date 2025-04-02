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
    "4PG3Jc3jtbvhHBaFv2k9E1kfXzEKZXuhPAjgk4E7y4aQD3cpCfGrJTFL1FK1msWkg2Ut6toAyymH2rFPYdJXHZoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mMw5Lq1q54QTJ7uP4fwYGr3dTG5xsmncmswGZzqJRNdFfqGXoZqKDWdTiDs2uqZxYbPC9cMfie9z2p8GPQbV5GC",
  "key1": "3RFUCcYs7u732bXtxzSz4xKmod7Aqh4DKjceaQLPvpTsREHXBPp487SF1gNjdhKFfhScWZV6gKcdqT5B9uRfQ8Qu",
  "key2": "2aVcBCXrBuGFfVeXxKcHdfe9QrQCfnZMGsh7XUZFo8uumzddunrZiVgYQARPc4sGKuWQuS7yi15CW2c5ydq6Jrgt",
  "key3": "2y7UETpxFiLhemydZaBztKqHX6JJQ8zx1ogCJ6hkHyLUUSsmXM1n48iyyyUdMv7rB5ec6CxuqX8sZbB4tfRUASQr",
  "key4": "5B7kE4vBrTUoDWavoCeo8mnPyLQ52LMzTJ7rm7gfiGs9KdF6HjpW1U2a5yyJFeA9H1FAW9eGutgLNjrdLHdmB3jd",
  "key5": "ZrVbEL7ysGZPg33xGgNTPNq99zxbQQyekeCtUSSgWRDR2pSq4BAW8ut3hJZDEESkvEDnB6773vLR2Y7XHDtg7jE",
  "key6": "AWRC4hPyNQQNo4gWjiYALWfKpT51rmCe8DL91nKi2Ba4rwZQ1zncSSgxua5Bmkv9Rwt2VrCZCtEFjiLCz1WvEMs",
  "key7": "2yavv9Uiqx5uw4dgh5thDKZT98FukMPLJyqDMofsWx5qmNYJabW6M75KpKyZSrZbvpfEmNps9hWGLp5PJWXWE8pD",
  "key8": "38LroYChhQKWeThVRLuKDUE7VhgjmbEkaUw1CWHDWmqNmp6EaAy9cfm32ddyeNHxVBCr4qrn4ib93U6RL6BQD7Wj",
  "key9": "3sDZQn4nx7ordDaMFRXnhw2XYAvmSxEmNweEgdkKSjwThYbq8HNuXY9qPDxzHUPdJftz1GvdpPuYjkcuhbGKiqNE",
  "key10": "2iVAjEYdNd9487SN8DH68XYJSk7pE8codCzxqkvf2rAN8aCwh9KPMSCgR2n2iyHNN8Pg1GCw4E1QtZ3m4yezweui",
  "key11": "33EHGZ1EKvg947WFG7ERse8RvEptQeARo2GyKuk8Qjdtw2mArfoCm6PAcb7QRaKESL9icW4uap7hNeyTd6xfx1je",
  "key12": "JpTSMcE9pWduVGTL2AkAjyQC729gDRyK9kzuQMnEmahFscP9dGMbSPvBkseqaoNAvZYreekKHgf4y9tgcWnhRZK",
  "key13": "4iCFvRWiJM2y5QjUfMby48MzeLRhUHdyp8GPD11FueQnbRjdkoNKksuxmpDFGk548iDQtoz9Rz5RVDEiJZtdPMmy",
  "key14": "4pLuAvpMEVPzJFXgNeZYmuf25dMs5aRMjca2Z7U5igio3u9129rnFkmHzCHogpaqMk2U1uEWuntEcdTUuf2LEFz4",
  "key15": "38FzG5o7J4MPjbusPhE8K5S1SvAxC3hkQ89x2TfFC4ZFciiRadzZfbedrTA9FLtpH6x88ZefEszJuVrGpzFvbnLp",
  "key16": "65QAQE1Px1ZifJBFaZRfwqvV9jTRWFHiqE4VmWJdcgB9pRxxkB7vpUPDxKiR6c43UkxwtqaqnVcc9NEkv7sejRYz",
  "key17": "WxDGPEp2HPZBun7zEqEoQWVz9WNy4153RovqJ59ot6eZ6bdxWmQFShVaHcinsMhzh7816KxBi5HGX1mwjyG6zf7",
  "key18": "44XD89UQhmEqptHmTd99tRTvMavhcpUrohXsy85GvdoSwJz2TJxYno1NCejT3mTtpNdD6HNv1giYMh5sCrPfc6Gx",
  "key19": "3mEw9qSQuEzheb6ZJCb3MvpeWW9tszMcSaYdsFkxpX18CTueaMWjYkPi6Qnj4J6mJLD1Cx9Mcew1RyS5Xhh3v1mC",
  "key20": "4BqfGfLcVcAdyEFuezKg8QiYkH9NxjiNCEsNUG1Y7DvdAsLuf5rdBY9vTspHPrAPo2WU7qTEYQEMnBS4iYupAYuZ",
  "key21": "57cdp5PUFeKtr2ioEVks6EUBR2nMJ92Qz89XNcUVeNUgP2yQVakwdrpveav5seBVeyL62oEFUvgRBgztx6quiRcA",
  "key22": "9uHsQzy3gmqpiTZfkiYM7kJpXMbk4HPqr1upannomBnU2FQ5XD9FkuvweWUXmBvrEsRBC7JQSQWjKN1iG1sHnrp",
  "key23": "3bYZGG1imTCBZKGd5Kbyw3pjPqpjeRGvuTLP4NLZJbZsfT3eRKexdABVCepWwnff4Uk8ToNiYyPZETAkf8VQKXmm",
  "key24": "3omdU7hgp7sL35f9BTv9yMNE4VJEqVRQKQBG8B1xwG7Su8EFYAX4nw6TtpeeRXciz2avVQxVSsU7nZLvKLxsyXtE",
  "key25": "5fXGBN4g6NtuvHQoHhuoQtq7G3qFRjtzUnbk8Bign7dgHeGkLtLcWwNPeQqq43BQj92YJV2hEdt5qKbDPvPFqjas",
  "key26": "4rwSaKoYxiuvE1FkQ6GzthhxQNy4owF6ZB5UhB8xcKScsV56QsrrGZDRx7gXdaAJuvmtChEckw7uNe8nzWM1CM4X",
  "key27": "2np8s6wJjGSpo5dTezBUa4TTNoEz3Kf3cKbbU7TeD7RymueMRDjCrzaTD2ifDNzpdFz7iq8XZFygryULbKh3JDD3",
  "key28": "AwvjmhXxhKjRk1JPGSRHw72U25QC1LA1tU8ABwxbn1pvmqD7at2SkMVfxrFPZy6yXs3WnuibS1Z4HngZHPXRb9J",
  "key29": "4uKuWHL7vb5nadJGprvXBF2EJrrVkMDcU2QV8mXFkPRnw4kRcB4iS4zJQD7JWAARLAvFPHXveZy1Aq5xwC7W51Ei",
  "key30": "2f6d1PcEFVmHkvH56LmQdDDikRHxTuTALV9tpRPhtVKhW77feJUif5Gpx4hf6Ee7foXT2TYRDyQkjRBYAq3n3DxT",
  "key31": "3vvEgaFSMWUM9qxqMHJpFQAuguktVTX9e4eNJHydbY9Ka8BHv2ACBSZobmWGXH9nMkybiT4YEJ4UdrSDiXAzbM75",
  "key32": "3AjHxSw1Np71if1HMVw8T9dTyGDjJxWDBwEgPzwB3PCNTCDSPPHxBPpox7mdJJTvSmkNKvVeivS3SM2XTD6JFGui",
  "key33": "3eExirMsfR6XtRcnuqBDykTQDTGBe2tsaVv66GHf5FYAsmd4hikXL1kfuLujBiXU25FuCbwEHmfEw3V4A9dMUdZC"
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
