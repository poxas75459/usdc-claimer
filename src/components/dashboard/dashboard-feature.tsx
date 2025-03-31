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
    "4K8jeRZwg71ZQp9Nk8pg1QXC3shf25LTxPfUpQhJi4bhULq3mBYfpNigYP5TTAm8WAkNes3xdDmXyNtth7iY2iRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZxWrS9wmzTq6UsQ27duZ79hANfjh2bVgLm23yqaJt2TFvfJ7inyP5RVAySGmhtKAUrqcwhhSK3HtpzWgQDM9KME",
  "key1": "5tPLLuY9fXHnYsEMFQLxGH8ncgfNYMqSQyGTe8wJioAWawyjCMEntFYdWMFF4DmzQiRS52CKMQwMHLzQEtChUCwg",
  "key2": "66sH9opr3xUtiZpkCrvKijxPodwN2L7FWbNr8xMPGRTvu4rCgrhEnCZs6MHseU19sA6Jw8UrJwKheUUBG9Y4fL42",
  "key3": "2Ytm7szYCbazJBqoSMSvmshLodfV2PZgSkPyP7na9tgzwz29oQJXXDhDA3uSbESgfgdU9jzoGZ7D6gkrnU5ZjjVW",
  "key4": "4UTToUJu4dkyV1EZ4DupjiZreEgeSxrX9Yejpo3eUt5YqFsM1EsDFSFiB79nWQTxbb7zXtFhZ6ZamzHtdD5Keikg",
  "key5": "XkuP1QHeDyBnUiAf2RNutcQXEvBTqGAgneWJasHb5VyGkGXPFmHeoaoqkcfoMdnZw465uGbrHT5aceRUtX1a1yh",
  "key6": "3U96iwKHLuzGSZbyuP2TdHjXDXG1fedLae7TEPxpFKPjjPQ1pxGEenh4TeCms3i9v2Gm517y36ZrcnCx4oZPd6c4",
  "key7": "5dW9YMaS94czKi1fhUmECSXSLYn7KAMkJR8kxdG4MafGKDtqo29Xb8DNuX8ntM4JtAEVvjDWdsQaxUtGd2XQ1h1E",
  "key8": "3WWbdtyeZCPW5LuSTFemW38LURtgA5WFkaMmdiXvSZPdAsAyKh86yLpcUivq2JGBkui6AKwX8hd2hRrgAwMaa2xb",
  "key9": "3eiECasKTv1AP1Wp8phVd9ge4uoLVR1baQu1ND1M8SJjw8RQRXMGd9Ra4KM5Rf9uh6uhxBy8qcjgYJBEnCUQRC7v",
  "key10": "3BnmbNFumfbfRe4ChQYpHq6jWCsUsvBPDyHreEZyorCnvxTQKNTSoWLsAf2iyCLuWu7iB9xeUQ27kqQDt9L2nQht",
  "key11": "d2BrHwvGtcjAC3upM7qAYRYUCDzt2QqFbvehPb2399zyYsjH1hFdvRrvWGRWiF9hHhgMxDWmphCjFEgjKJ63uAF",
  "key12": "dEn67xKQPmjeVXLv1MBvr92aX2D8bkhcUmW2W9CC1wNcs6ztCWhHmHco8kVjXRvBfbwBpRweBcMfbsP8PxXsyQP",
  "key13": "5ZSiZBSZQbmi4axBVet2852aRPZgQSNkZeUEKLu9sut2GQQEXuS2w7PJ7ckCzpQK6qFPnWfdLWwbGm3x2b5xf5hv",
  "key14": "67Gxd1MYmTyEJXqQPaPVLPoUPqZzGbWvoFR4Lu3qG6x9Muj6oaDskjjU2Z7MokuX7LKoE17E6PLDyiULALxt4yAh",
  "key15": "5bSF3wgjeot38FgErZ8cQ1Leh7GTMsmvRbJrjznGchzFFJM7dmnKTFuBryJPpCwF2enTFPtgdgoFwSVpSJxY3AiZ",
  "key16": "4i56ApET9oZxDXZKSSdtAoi8Wio2wTKHHorB12tccDU2zKQfaYHA1VsxSZEHVGaRq6oAzkozaKm28temApK5CR3B",
  "key17": "2PpCyyoe497d9jA9MDQdKPc6yZUxU2asepNRMGAyhrbmnhdiqukY3hmtK2HYpVx8cumhyRBFbYfUb76wwyx9hx7K",
  "key18": "XssAsqmzwLnvLxpKbGGrUnbd5M4qY5uXKZE6TGcWfxP45S36rzaPHetnVvson443NmPtcKLVejMN4gmfWWxYiDR",
  "key19": "4mrcPK3F3ZFUwutQZywkW6ffWTroND4bJwAgMaE8gxRbQUGjGFs3Q3GQCNuy79u6stnb5moZ6vuVmATq9L2oM59M",
  "key20": "4Y6jT1RBdREG5dKzHFJDSjPmUSKhVjzMoGkvsmX1hQ2w9EVTu5B3JyvaZT3gQgof25g3JG9gRVAYoZW5B6vDxvE4",
  "key21": "39xVDPDMn27ztmP2Yyi8dAEAqYeEf8fZXZDi1fcM5ioYG7WH7zUDQ7f2f8vKReNhvumJRAuLMn3waE9pN1VuzPgb",
  "key22": "32LyDFp8rGuQvJkZHaYDJpSziybR9dW2Cg1PDdvuUCcS3jV6NudPr47vtHZ4RDnTsM8WTkve2V94TeAgPVssvYqu",
  "key23": "3bjjie1rbExGDZipCFCzucyKMDvo9dVXUDas7NonUJzkikmZEXNfrQEVL2zH5KnK564yuDB4RYwY1Dn4pB6cR3T3",
  "key24": "EYmCYQJhW9raFDhE7qsnBLMmbh3ptRM4WKzzypBE1o7xLiGQoeGzYVfmrVt8MT6THtDyTjWNM28CtFqPXnoiknz",
  "key25": "5D74DkeoJxdrvEjPnmzcrGePp54beYVc81oyKAKDJnRxv2ampyuKFvLbvznMrXzoAeaM9Qp75SDj35raUihxDyLZ",
  "key26": "3uG9AfEW44zHKNw9pdDsSuMbvDf6Fe7ektSgKCuYpR2ByvkfNXx7sdtwdmcmBtTGv67FkYP163Zt1UGeAwg6BTdk",
  "key27": "4TTKHwSHSs1KkEXqxonjYZgMiCC2MeGvUDD6WMCzRGqsUBpMTJqjJqpuSG8LZDHb3pwsvx9YLunvcvdRXtPwf1GP",
  "key28": "qh44Kt7A8KEQHLfyESmzwe5PXcuNRGSgjzdnnmy5WTg6xrwoqMW13CzhfS3Zn7WkVqBTtaK12zaUEsjcSUSv1iS"
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
