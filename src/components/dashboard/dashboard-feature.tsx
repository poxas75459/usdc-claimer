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
    "5GCZRpouFJbQLRiWJFXdMQeQA9EiLDuqmZqsBDSVPcVVA11o4jPyCSbtpxDCi6U1FLeZBjDrWkpyy5GbdNGwB3fg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nqzT3USikiFTKXanrMrSLxhj43Zj57wXjAumN1J1iqShjsNKMcLBvvripMRubbBguL15McJJujuqQQ2Prm8TQhv",
  "key1": "K5RcdKGgUSzFxrvimAJNejjn33zck3Ks6fKJ4eQtSs53WESHxQvHJxZaWqh3vRQ8n5usy7ncu1XNzEijvYD9Vhz",
  "key2": "4tb67z1UWXGBScWFBaaVQU6fPYgDJPT4CYQNZ5ihtar2Tqe1TEkXCuqhC51VCTA3r7FtuhSPDGwtMK3Yt8skpTY5",
  "key3": "TY2X2WTzK4icz8TfdsUDtpY1fcCYGxTGAz3EJDdnHZp8zVmDMba6dPZgyhe6LhtkZDYPD7taK1xDgVF2FUTXkr4",
  "key4": "325FUE8AptpnyR6iur93cL7FqS95mGpgPxjovmpGUK7K78dMRMcyUUgkHhQgEg31oEMo3F82pUNRamUbLoPcqkjC",
  "key5": "65Fv35m6c9s4XyRG2EgrKC2evJjz2LaPDN1J8KjeKLL73vzRQtcHDNAFXdp3TU8va5pXtQFQY6Fmnb2b7qP5KeHq",
  "key6": "5Pp1seuivJCbBzENFiAc3hGvn9gTZZAGiJo7cezmU739Fwuco9bi8Jz2sxzw4De4WerfZz2PuAVTdZFr6eVV6HCh",
  "key7": "5B2JBin69SRNZHkAEjabQv9Hif4x5DVAKw6NwC3PWaE6ik8y1Ya6vzdLe33XHqR5uDjtiznK99UcuBX5xadbQhmS",
  "key8": "4xzugYgS5TvgywxGz3TRtPGFxNvbU2dV6voeh1Mxd6RTgsLV5DQRo5XVcZwHwkvYmjjJDrQWGyK8xsgctLQx1BqY",
  "key9": "7Ws2PH88iT4EmnJ2XFxNAkDKHcCDZYa3e9H6svfZ6u5t1RDxr245DXNsZFjCVE8T3bTtMxBB2azoKxoQ3doVPN1",
  "key10": "SLPnbn257v5BPMrwmZjsY1YGQ3PfgrFRonJ613nBhqhxo7cQ2rsVXYUzMEWAk9MWmhm8zDcvcuJ9WYRLWpDzFz4",
  "key11": "4FsqjpH5nVgWDjywM8rdefCcNUYedhv7NEVWo19p7U7sek53S32sqTVsW3YoncrJj9BJoEJU6MpiLiKrzugoxEbR",
  "key12": "5EXmukC8KoNtVuXB6kXBZe7cyHrtKzkasU3MUUCXcEdAL5qfWg5XkA1hw7apBfmHJdxbE9cfQ3pRg5zbcQxRs5Ti",
  "key13": "5NX5LrVWVDC9VJLrSzfY8HqMoVcfL7UXdHAHNXEmfLzq6DGb78A97ZMP77kvRyLYfBSGVduppLVDTE5VfXZ8eLNv",
  "key14": "2RPZG1AaMpdsixKGat2cTJnZZSVkKLNuxLBFa76dJj4wphmbhSLDELdT9oBRBDQRDZgsdqfJxvuv6NMPLePNcrBU",
  "key15": "5LNBwbgTuEJQdppLUBkjs2cksya61wNCnmdTC39kkRr6QRZPyXHVdnZ4hwgysEopgwb8F8bzJwXmv2oAJg9EKUrv",
  "key16": "2XsknVmi37GBKJUeGjHUy5QYp3Qym2D8hHspoYt8AMQhEdU4rWE3dThGEnVNNCSxh1PH6xCYWTx1D8w4qtVtFr2L",
  "key17": "2LMrsZwbi9kv3vmyo4EwkJRDMp3W5VmfeTGzLGPXiFoWr4vwsRAQxxSVdMyoDgTLMuoeuRiHX2ZkGRuzVF2B9Hq",
  "key18": "924bL8aADkKPjbGeCRKer61b9g7iPjfvweVc9j8GuS7TTa7aSwwcjxbch55BTFBsweHB8paS5hUuZhMu88jY1vL",
  "key19": "4dwGehjC55cyzuernkAfSAgaGJJZ1VFS71DgHSjZDz5anrFpPyLUwPLk46QMwQeoBDDa5bSbXUndEdmNZtPSiVC6",
  "key20": "5imjxpRWqqWbdbq8zDwr1KGD9SKkYS5HZVzFeCiQ8jZozeHFkfQtZS63roBmaaouLVhVfi33u7NETKThvWCDTdw5",
  "key21": "4bTuSVsoAWnXkQo4yt7zobWbXZZHJXubGrMXBDGH489134zAfBCoosAXpfvd7xtoAeue8DhL5EyHtT9gpdKktyEv",
  "key22": "2F8AUNWc5iWqiGAUfXSPZPyqyXy1rymUKynBss71SySCFTHZM1UfpgLMw5x75dpr2Yyq1dkabEFKsgrHNxAVYqK8",
  "key23": "3cXn1VjFVp4zE4SAXEyL33ZyX4wFpxta5riNY4h3pRuZZsTALkc7wyiyZh5HMWAcFhGi3qrMTvbTFs7tyeQHz3KU",
  "key24": "wkUws9hcgpMGERXpQAJmLbm93jZrk635MA8ShcL5FdFkpT7AZLQnUPCCUdvxhRmkyhm9Q3Sb1cMKjKzHzKD7ToS"
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
