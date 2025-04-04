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
    "5sYXEk63rAHqBeeb5TqPza96SkG8HRRj1r6PFXspU6osUpXPemnzBtLAWbkXCFgPqbSNyBWTdP91aot3oFSiyoV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8kuBKaXcdufy798JB7XDx6YFovqSK7oVYZB9ZiTaem3Jj5Pm39kvcfvxaRdV2x4Wuaec4V5HYsSQiekuyqQ8HwB",
  "key1": "4mCH8nPMEDWfLvJaRDwyT39teM3y9qvuFV6bsidK3TK5Lbe3KMcji3ow6WhuKocwrgQqnx5jWJsMzdCqkSg14fdq",
  "key2": "4eZFCA583zj7qGbJKJcVCxa1uZcktUPqPSuunrsKkL2rnLW99eiEr8a7LjXh27deY2yxi2CyJqBdFQrqdNS5vaVD",
  "key3": "5E9CaqVg8ZnkJYBhVn4jqkrkB6U3r6u2GLZZEJeXgQG7uf4CrzrjGXpVfa1vBu1d9ZFsfuXtV1MyHdmQhuRPkeF3",
  "key4": "4zduKagtYZrERWiD1SKqYHPcxboXFrNEhpRDUikQD9Kjkh3pnonFysDosyg5UGnSgAHwhzfeCy2pfZhALf4ZRvdQ",
  "key5": "2vLKiRFGSsvkwqD7CU7gx3pZYziaB8TSiynPKWMKMWcAVcgMhzW8Eqdqjaw9cgBJRoKgcV2NeeaVaXRegKVjHtHq",
  "key6": "WhL8UypsXqiutmsz3p5NeNcHGawWzyKb9NdTUXcCJ9EdM1CbWymLNQ3eVKi1GrDxtxFhLcvre2YGFKDL8H19QHq",
  "key7": "4HdDWG81RM9sTN1ywLC65RtG43reY3BLfo8fCve5N6cBW8ghxXzJcbjbZpK4j36yH5gQkiVsFBtWrzPJcwjZtvZU",
  "key8": "2Zx3DmTDB14zb4YFDwake5itVY8zNZatsmTiZTCjyu1vjcFSCGG5wcxJTDokcRU87szSC12dsyKr93U5eRMzjV74",
  "key9": "Ex8iKjTBmwMSWCFCogzhwYJJbiQ6CSh1RnuKciK29ooFQWhVA1MoV47KYqQdgGPVQm4htHpwhte4KgMLncy46UB",
  "key10": "3Gp91UFrcyGQttRaRCqUXgu2prGU4dqLsRf931nXMLLTEHYqywovZkZqFgevFAChqGMLh5d5Qrhybw23k3RGw2Xx",
  "key11": "3cVSWK4TNzg64DtFJ4GnYAHtfjonrspetXqQjcjXkSGKSnvDS3Ybw7b2PhQ41RjhGY9WvRPDyWB1x4aQMH7aejWy",
  "key12": "5FWG334TRLDPruNzAnVAVTXZcJ5x9zfPWothouqgzfN9Vv7FGxXZ7vzcnkoWf1pTkbr6NgMLFexYgJHcBUck157p",
  "key13": "z71SLevth4kmapKMvPHCF3eRBv6KWEKkUw7qXrTXXcq4Ju7vQ8XftAC1Wa8MEWG4kShEh4BcfESyWtJgQWyY8hU",
  "key14": "5iaAEQNEAk28xjThntgKxXKcS8eNSdhg6BNpKtfkGjarsm79d1LfZYVk8r16YMERz6AufQaqAnzoziEwomWU2XRq",
  "key15": "2yYJePdCSRy8kAhNyyGPsu6Jcug2SEFbpRTX8KGPbQEbnnUFHSExYsCyrKYQpHEfqSddVYHLQt3HMVMLQsdG5A7n",
  "key16": "4HuQc3eERwJnYPkuMzvsWCw3BEMmfMRZTcnMDveXHz1gVXPgK12F4thmDBUG3V2B3syYdtKnA1xnLy97g4JkKeK7",
  "key17": "3iLz2in5nr7qfFeULyR7vmxc4yDp7T7t5u9Y6vKa8ymxUiRbcVYHiwwF8Kk5eo1DSJiEpzcjqik3K3X8FU1W3Loi",
  "key18": "5D96VtkK69ueopQKs9GJqagcnptCUbkwTQGdSxkcRPkGtWTMJhq7uD4a862NKJFmCNVwH4eCiMM9SGi7KqQ2xv13",
  "key19": "mZ5fpLEsyjZ5cLTLXrxm3CMJFYLTamArRuN9AAFHUiv4KzMNaGv7MCMvtaDrgaaKpn89hDDkoJH6aYHzQxCXKue",
  "key20": "3e4yGBT3Ezjir4yH2yTDKikF7pjYqv5QxcGvywWRTENw1HsHAd6fzUrEZ2cMVLepnUcSWsZ5DaX2THRma8e7ZY8j",
  "key21": "4EEpShH2aFHXSh2YyGHZXndsAgist2oE539y7Ycghyp9TxSLkewpGn6UnbevkTzdcRsWZxJWaYYfP2pg3FkydGyC",
  "key22": "2dg6pbtmrRj6j6GLH3wu8ZpSd8UMHpTtwAgdGasmypCEi6K5ppx9M9iy6hCPitpSD9fxfRG9tkkvBTX73guXf3hC",
  "key23": "5ypuUqbGvoeZLtGsN7BuDsqeFsgu17SKRy75ianPkBSto1fpSNMGpDFd6uSSJBY8eDUcx4Sp1DxWwWnvEXKjEzYN",
  "key24": "24QavYN5dGP7GUaphKM499wokTUDEhTHGKE8hewNvTuwq3ts4vaEGr6KtSrdweUx9caaxKkwPSwfTxSPRkwbwozK"
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
