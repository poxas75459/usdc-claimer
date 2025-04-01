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
    "3YBK6Cgymp8w75GWa2zr3WzfXyuEiU3HVWLDncqptre3noPaNLn92kxRvQ47s33rhswNxL6UcW5AdFFrzMEqSUDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jgvja9MTSVqBiWp18HqHcLwdMXvPSw1qXhbfRXWVz2rgGtxRywkT8Meo92AGF7xMzvUsq6TVy71YkHhLryxSeuK",
  "key1": "2xqycSUnAFyGxJrcs4YCZATdn1weuQXVzmNBRxWFkx1zu1h5vZejVFCh3Q8cCB2d8QM3g3rf2fnjXGvfYQaXQUDV",
  "key2": "525UMLwWSEQa1UWcJk28jW3gidrcFvexxdL7rZZygRwZwBdnyapWoKNtRgcQs2a5NVM1XRYZWda87TmaE54tvbRJ",
  "key3": "5ojQwfLkQ5nWaime8rG1xuvY5N3U9u1raEpRZmQjsyYEYFCK7JpDhF1a1U79WFXtTSaobzX6U3D6WATX38HTy4sA",
  "key4": "4cy1tXyMTXAKKq3DWYfzaTerVqmYy3Ca268DsWdhnubWdvhg9EPANWtsNbccnQm2JmhcENUFvUX2ZJN6aqdQvs2S",
  "key5": "2XkZuVrovXF6LBWugBGQJGVGeC5FfPVUUrDjW18h76MiGbGJLuz4yrtwwaNYPRuCSxguQDQFirrwnJsBF4Bt1cw5",
  "key6": "3b196itj8fMNGZLXvzon6ddoWPB2No8R8BGmE5u7hRa9xLB9MRsig2nmzuDdRz2aUUWQ3i9WC1AvjZXy3uNSR9if",
  "key7": "5tCCYriLF9MpPPLQPneiTd3Xks9126iaij2pLCExdmNWfyBh9Ug1JtvsHLUj9xUy8mfC1wkp99yxhb5KeB7oRe6v",
  "key8": "ZTLPNMmb36TA3BKSwyzc22inW9NTiKJYJpkZSR5jjR9s7tKf7mBpzibAR6LhWy3L5XKmJu5wm4BaLPGd6ekhbCT",
  "key9": "5mCszyDX9UJrRAbdTNFmNJNRJzP4nV2wuUJUCrnFbZRpwcV8sb7agHmbrb3hwBp9oKksiiS7zKmmepjaDyFARq3S",
  "key10": "52J7mhJjJ7QD3mruX3uf2gE2ysHML1FtkTZg4JuEK9m6pQpfkqGUG1rRkQ3REtnXGmceAKSdxNi9yZL1PzuyGJUo",
  "key11": "5GQmhiM1achjm5QC95tCXTxNnY6oQ5tEBhKeREKmN34U7c2oXVhUH6yhPMLsqA5qypTX4qQCu1fmFrHW4efkmVFR",
  "key12": "221osT133bLZDP7Tde9pdNB2kKsoVQqkz9JXCutT1r4mCTk8QuAMioMFLrJaST5s6nvriHY5G44pi44paDTJNTy8",
  "key13": "6513xFRftfYUzTXNzuY9dhK1BXu8nkzJGCk7Ak31dowAW9rcByVPQKB6kLjKHmbXAxUq1Zs8DHbTutAk6RFVApMm",
  "key14": "WyfKgs7i8GwpXikoc6wfN7qNnmNFuUkhRFoYcJLcm6twqsaoBLDNDCnsyKoEpiVdvASUa637uL7nmaMYTgRaEaa",
  "key15": "4aX1PoN3zV3Y6K6j5WctWNfwyuxuZMyfuJodk3Pi9AfauPTJS3fu7nv7xfcUsc2xpy5DWEjuZHoSMVhLLkNH12hY",
  "key16": "48igt3LKiBR51writotYa78PeK1w1RJ2g3zQJoaDqkKr4rh1aZ9rrJrT2WQTEZrTQ6xLLfFkof72SPrMNLLiUWJw",
  "key17": "2X7Qe1sYdNL2queyQm8CqXuu5DJGzG5nEV1tDJ3siT7GdEh2QJJgwgCoDfbj5A1cHcMPXbzKZ7MqpXoya5rSHYef",
  "key18": "2nP3KWBUmnmne738Wqp9Ho3ZJ2WMTA9Wzu72oMuAdqA1fi2img3RwcxFVvqvoud4tWixvfy8hCxf2v1Rf8AXhpGm",
  "key19": "3HTVxxS35ScL9rFgwjgFRj5FttixKb1iyaBLWBSJT2rzMXMdRAtD9GHZxUKDyjDHU4FEGuVNXvxtUVheD3X7LKFR",
  "key20": "3PtfS7Kt83LbggFMtJeUVSFeu2AuSFMW9DP2AReLLAeuh6WzeCHMDhiJtFkZmxqB1DTX68u3ZN86P8kgmTaJg9Q",
  "key21": "5dMdUQSUeVon96m7Vyb1rPxNPMp4ebsuYiHcg7PDJ1KraUbTwXA4ejiMmCGb2Jj1XdAP5YnnGqFCFZnDay4AqibU",
  "key22": "2nAwbyk4cCm2rah8gzxSXivy39FV5v3DA4BLQB2PJk3xd7Xmdz5cJgz9m7Amm3QfmNdqwmDnZpaz9PbwpvC8LbVS",
  "key23": "4k58sv6yufKYRisnPMH7QWP2VM5d6qGpzXfNxjNqmfxABFJhERNKvbkzJPeCWCDiJxFBSVozCsyNaRF9vpWqq7Lv",
  "key24": "2kwqwNGmJ9Lcv2Tgae1sHTXABzi9Rne1izQdYfyzUYVR3ph68uTovYGiTgLDAwevMEBfw7tiBhroVxm8bapSRcRL",
  "key25": "39RdWU5zSqnq4yLfcs8WKhFWYFbt8cAriuieXqbX1dK6yr288fbf3Tz3E7x2zemufRRfHGWzqcJrci5oAXa1apnd"
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
