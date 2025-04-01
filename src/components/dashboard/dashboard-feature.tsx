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
    "pFd5n6VVFde83gHwaq82oyiCNKkZ1dPW9cu8u4GQVcj3szcn8zupbUKzdjFyycsYNcNgMkqt1kMwK8q6NVnYKAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n49SX2xFJYvA6VrGLqz2kmrCcmenCVCH1EHXXZDyX4D7L4DbtJTSvJ8DGPzZkKKugB8mNKzfMuhK1TUMPki2dTU",
  "key1": "3L5VVDNGib8obChwgGAd3WRC71vsjsd5afoRsp49Mhmpr7pinGTqDi3UwLqNP8AmExEQ5cgMU69foE6XuW1DnQC7",
  "key2": "4UJbYh5n61o3bEJNwCimezRF5UQxm3eRAtq9AB79izwZvtLBSCcf8LSyvb5D6NV1XFddTsAkczP6czVyrEUFfTSy",
  "key3": "4Z9y6jH6vtn3KtEGVoL3vMW4DpUX1HuifBp4Pmz6YRkw42Tszb4yzPtymVC8Zgwh51AX3VbeXLNcmmjLEP4chFcA",
  "key4": "5c8xKekm74QZCDL6WQeJMiCWLowsCfFyweVY8cqAqkJYbENAw1u9yeX41aWNrg2KrkLWxWoofns7nf9AZ6Tcz28z",
  "key5": "2x5Zb5ShydET25zFt8yJ8vQ8AEsDQF7oaiVBtH6CmXP8euaFc1itbqxGxUg65pUrgtvAD4VX1yR2KHAyHd1mC8p9",
  "key6": "37z1V3u1DMFMznEZPvMmJWHmPpqzxMWVWVWRt4XDmmrWKc2ZmSn4yiZ1qTHh8qRFTYf8365qMN5ahE8W1yHQLhGA",
  "key7": "46m8o4XwBNvfkKrRWRm9wCXimBqdn5e85DQuXfU1Y3A3PdjcnMh9afsxGQyUKUdq23e7qJkZKPFTCDennGy3gUY9",
  "key8": "38DmyaurHH3aic8HxcgStVVY2XQ2AuAMXHpwp8yEJeo2eTThyPnUK8g3F2KetVnDS5NBesFsMqQVweLgtPFYTrbU",
  "key9": "23LupCptMbn5pyCRDra3rvcpKzKzoR9owm46VWS9TLtkrK2VCdDdd7RQ1fjH5d7TXc7xXSuT4xh4FnEZEFEL88bn",
  "key10": "5LyB4MeVYDSCdhWb9g7kdvHVUEPbhkgU6jHVk9kQFwgG6KCjm8wjp5jz2b3idbSqvw3dNZpfVKVRopNPdj2RjRg6",
  "key11": "6mtHDHfVVEqRcPtvtYq5XqmkTAic4ySjByhBBCWB5k6bksqaUTVi6gPcAsvzUW49jdZiXYAD1qgBpjJgzQjzt8X",
  "key12": "2giUkrXS1KY1pDHkCVqQ2erWqzvBpASsEsiqYu6S8sBnSaYV3oirye5yRbF5zwUFy9WrwYZLCuC7MH6du9zdMrtc",
  "key13": "4zC4opZ5J2nNpbBpdmPrXRFrFoJyTpHPpzfY2ZJcUaaVJ8iFhMC7bbvuAkZiggvwbsCiAsnPLj8cFtkVUf5S56aw",
  "key14": "teTWkqJE6EnyeGPHBy5ruzyNAYzAu9xz9Qk7sfRxCQrHd2PpUsMXzCCYHuiu63WyPiGxMmULRU7mRHD1PW5EfT6",
  "key15": "622KRPWc7R318N7BjGCjtAR8y3AzYE2nYod9LxWvuU25qSLWXmnN7a7UETcGVHnBd5mXCAWDnS3E4AZgVFuk9FFy",
  "key16": "46YqCef9F5LEzbiwTrk6zK1cScgdgSuKdmbEEF6NrUnpnRzL6sAw1XtM3LhYSz2s5YSvSAUFDuKUBgG7bRwE2YGE",
  "key17": "257snR1SDCsudEoFcWUXSBuKgofEpJCmkQwVSTtMrHpGFKobhngayp5pXdqnpaibu2rzrcqKJQQeH8NB6LDju9Wi",
  "key18": "52zmMFxmTPccZZSk7EeLoVoEB1TMyZWUG3Cx4dEGSSGQaykBv1yZ6MBAt7phPpDNJiC2oB5trBJKh2qno2ixuNAs",
  "key19": "4eAeR52f2hZFUFeyRgaWRba3fWE9Q192FwMJwtsy9VzGgU5rMKpSKVWhoiYSaAzfZuwGSRr7ZVebw3WHwBuQPi92",
  "key20": "tM6Tt3sUmEMbtc2xzakrr8VWkoQdvMi2DiKnstu48GC6HGkMwacPPQeZgtE8C1egtwd6jrG3Aqu3seXkhtRGiYY",
  "key21": "29wzUFYUHFkP4ZWLA8eVzxRMDwSuWr9KYzKoJLtTgUVyZZKzoxLiGkCsPvK3eHjGCDtw6e3SqoucbpwW2oSypwqY",
  "key22": "W8igCc9mXKxKivpwkwT7dMsvSoU63xsoZkm8ayU1dZarTsL5ReHjcGotQNpsabArnXQBYFP3SXkZDxqUqwXdtcP",
  "key23": "5DViuebMT5ZaDHexCsFBRgAZ4iGT8CF9QHSguJJRUBrCcDET8zgYVkCagmiQQS1iP8SNYEEcDFteMiUu65zDB1zS",
  "key24": "24u2BqSHFwEHHukUyvXLtW2Y7dNjQojYNSzfK8TLFRv5DTYLkyCT3MxPBLnuCFwQk8nyPBceASYqaiz2r3TtQUum",
  "key25": "2qxjLup537yyozEWsunJFn63TCFKLf6VR6oRzyH3yakLfH1RE4ki1s9a2wcyGYQh6sLkMkeYiYiuDtwrZRXftGtj",
  "key26": "4hm72WTN5buoZRwyNQFCP8HssdoPiMNNwBb8entQf8SwVP6DCxkJVkYx7pMrt6hKK6jZ8jrmMuQodNiD2svX8no2",
  "key27": "2CqFrC5wf9KT7exwVdCMty3VQau5fP3LS6yff8Q4V4ziNVH1BHzRZNYNTBuHPBM2J1VjqX4RaTNCwQ4cVAkSSmhW",
  "key28": "2p6Dk2ExNmWPUcLBL3N7v73qAbPS6kC721GZ5zZtpeVC6KdvTSYF1DYTWo15cAK54R672LDbc1J6iSu3bdQ8oLPp",
  "key29": "5KaykmPc1YHLLDL169NyxLAAeYm6sYUc6nt8nfz34DivTp5Aj2ovHzpiEcJyY4dSwex4ij5oHZQ7EGLfdXSMGZn"
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
