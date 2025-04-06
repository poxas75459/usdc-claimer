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
    "5kcUfNWA3uxQvtCdLkkp9s4yZGrq8sA52cQ9W9TeV7JzD3WEEQh3kp8XQo9s9oWLdt5CmZKhyFs523mvPMEkUmV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ctxSi4qqEDsyakuccVs4o7Eu9yodnDNNddz2J2znjniikCsBNitatXfjVFeN1QWRkRFcSZWNLMPk7UMRGVAiznX",
  "key1": "2R8nkiu25b6h9rooBhVNuFMkrEruufSuDaQfvUVzeL9PTNpquNjNeTDtgN3AWzWyFsei5F3wsPkFdFwjLFqSmHMX",
  "key2": "4c8QYJvS3tsDe7mJUVBKLtP9KjGdAfno5PfPfN9fPTTB7E8uMTn1LFPBNthponBdjg7rNM63d4AMowhN7wKHnSAm",
  "key3": "5bmKGxVfviW4z9GMr1U8GyY2u9xUuCV1rvPe862rUKb6MZLkEucWkW7fBJdxvQbSA2dz66XHG99ihPrLmWsYa35C",
  "key4": "2mw4maD5XG5grQmJagJ6L2CP3qdTZyjxrsAo4i1jc1CoHVUAngtX2SGvg1nfdgPMXRcGrybVy9G7nxFmKc9AWrG",
  "key5": "238oaZYyxYu7AZNRvGkMUujCmGvSPUZdqn9eUi5i74qPTndacMWHPP9aRoQtzjX2QQ7GUuNfCzu92gRD4DxSgpsJ",
  "key6": "Pd17A7TBp4Ly78k36T5qsHaw4LKf7vpb4ANv5JpcF93XffwSnq7rN1choCP56jpj4HXhS3r52CGaCTHisvmUWpQ",
  "key7": "3EU3eKbTEsGeMiMvSJvUmiWLFQ1LrqS98geogw6L3yzVQRNLxmgC7S89EDBhCojf8GA4EVfw9SCMA8MAntAMGDXh",
  "key8": "2ME1GoEmgaBPowxYPtB8qf8E7ySKsQHhnbvRDz7BhmEKg2xPYKrw5L2VdmiSpVbWH4Ubp2Kr6DPnsRH4epq76m1b",
  "key9": "4bTcnGku2VSZAxt2uQLAGnLZuhaYdLHehj39kuLNeozQa43xNWyW3mmhc3rQWGgWC7AGVGBLdhjXME89J7CYrzya",
  "key10": "5u3unEm2QVzH3WPs9ypinava2upxqjoKZMk7YJAcziKYdiYrN9tsjMLG452TkWcBis8USnoydh3ugGjxAkyxSuLE",
  "key11": "XFLtdSFoHpmo2ZLvBcxEHfD1P9B9ULmoQTXSkf8wquMwo8wGgxppJMGC4vmegTk1QeFb7koEYtD4kZekLXYhmqU",
  "key12": "4yJJGku3VWGGJmbLt9RVoGZGcWWJWAMBDDewpBjrzyGSidvfmmZ9jVm1dC53EwuZgqiNKE4Lhv3rMPmE7DByEc4f",
  "key13": "2sDd1obsPYdrq7R9wVQ4S8u6r1frDvyBUTQcMULfBao2WwKCHeGTMax9qeXwxoyvxTkYFSDfdj7u4XwL46d26gZ8",
  "key14": "5SG8SM89trXcDJGr3fnbYrydRMXUC2BcRfKeES8GdPbUA1oYNPMsvRLGbo245MwhBsDxvRbmQWrPyY9pGcDWdZUu",
  "key15": "2VpfveRTN5F8cyFNGbChnT9zmGgxVFNqjk7LjTSqkG7DY8isiEF6ykCgKa67M955kww57hUSF3Y44RxAZ22C4BHT",
  "key16": "aM1836MoyGHfwvYyguKZft6kMqDAco9NkRhM2b8MJeTnfkmbGZ64xVqF4VRqLSqnEb1fEbBnCDmZVdc2SYYUDTG",
  "key17": "36PExJH5qpQyfjLtrtWLZH6gNDTFLTyJkYyfcHghXcaotmvKbhkfb579FFR89RMoEYcZFeqctduv6dFYeLcQZBd6",
  "key18": "4Krtj51Scp11DqDzRQtBYeij5eVAXHCrvbUAUmNimQGKNTj9c1z8vmRFLo4wPf5ihrsCgwDfoRCnsLZVfvoEjEQn",
  "key19": "2TqUSXeh8Q7ersDTSJd6nhTBeFSrzhHEsHtX9bDV19vzoy3urZdiXV66dW12dxyVyME1TP46W56GCB56koqNTiKh",
  "key20": "3PSHPo9Ym4DFB2c2XBo4UcRMYrkq4RaAbv3jhLt3ZxiYRsfGYgd9d8bnzcPVJixfvXEsUUiyeXckGynh7XSm3KA8",
  "key21": "5q17qH2d5D9C4rNSwVFcaoHAWoke3Y9XmvnrNkgi6YhK8YDxgbLMGjTD6jfE7zfYHcxESbNZiTgtbgAnM2CUChcV",
  "key22": "5nPcQH2f1dUn9UitYe4pjGoJkxXZyisUXvMuJs3vdb8kYa86bCww1hkZnjVKaPsEzZTVs3BFk5BAe2BUUnYEK64X",
  "key23": "YBBFDxjEg4AcnKQzqpWR3t9g8UtUr3oXBbU4UXWn47EZDJAFg6we67D2GkRzkin73MY4GY3MqaeDC8wCAgiY2Xk",
  "key24": "3tbJzrYaTkNgEHZ4BiN3g1kBLA6V73MdUBh3MAhGgVnV6mC5GjduK81N9FosZgJneCWfyY6rLN8aSBLwGyshCi8x",
  "key25": "56ApkitCpLvpDqz3h2L8oTSfnSbq8RoQ1TPrtBDgVTqJh4iDy6pMYPd2TNF5o1h6S17Dv8LbfxvbTcguhrF2XE2x",
  "key26": "53t7ivPfkBDpjreNrCTYwcVMaqKxTe2foPrmh5DHd76WgNEHGYkdc4rSf4H4CMqwkXS4GAgheT5VsyPgij4WsNAk",
  "key27": "2eByxSBw417XybMApisHkfaWbrdk8TJMB8WN97fJXfK4DE22cVUzbdLCwqd3GMfmbMpot3zzRxr1VGwEyM1FnAvW",
  "key28": "3xQKKwtPBkKUNDZ8Np1JP5Yp6mUvUjJqe2VZpnMbPbd5HTvChtXPccHzG7pnee9kb4BKy9a8QyZ2RsDa5v9HpKi2"
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
