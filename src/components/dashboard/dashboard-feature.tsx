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
    "2dCTd69nKSbMTfF6KrMVSwrjXXZBpqYwJZMYwGpNs6fCUtDwUr8MUTeKUGRDHxRRuW988uQF2XhYpVW8AhhDZ1F4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39CfPAcQpJs25yvhzZYYgdaDoM2SA2FKLpTqgg8w6oR88gjw8qRDyQ2kwhyjqP4hxSPBTr6QNP5mMQPpMRjqJB9B",
  "key1": "4bhYyuPnvyhobefg5twWVQYVGCZEKKCDqV7kNvX1bTahZ8n9DTiCCir3KQa6jcce7hqNdwkR8n17m3Zx8XzqXpis",
  "key2": "QKQSfUNA5td8KMC479fDj5tpmKPgZ5NxsiinqRtwiHcUZgy4qJ4ZeqtWtkpspEgsjB2edJsvZPfeuMRRkHHr4PV",
  "key3": "rZUZitP1AxMtia4mbZHnoEzXkPwbyA19dVDjFPct3HrEV4mP7oN3xjF7YN5J7zZvHBLukuqa684XBPDc4xLU355",
  "key4": "5Y1UTehjvCYfwCgaQhFecFCheNbQSBntV6t19t2ujQAkYZLoT18rPZBD2C9mcbGWAXKGNMv34WBNYsSCTom2ABw3",
  "key5": "sgLUWyp2FNDEAf34qStWk2ovYP364CuYL4AZgYow4qpADLeheSpnjwpBpFtAPo7uEUGw8HrPB5pvjPCj2a9Z2Ht",
  "key6": "4GuBbwfsVHQGD2cwW3ShqCuhHqaFbALTDg71nPqhDpSxJLinccvNZMa3cqCDGHYz9U1v37WjSnU45DpyWjcyYAJK",
  "key7": "2u9afQsBCxMBTicgM372i9JudtErpWUFdG7vicdLejmUtr37hpmWqjnWpbVst62aosKTYg8AkSDTyCT2BrqYS4G2",
  "key8": "2CLAnNFNhFR4JXmeLSYExhUG46ken9BwhpBFB1MegcoWaqavvPExZjQMANGXPEncuutAixwBwvxiNVrdmGBPfDUh",
  "key9": "77SmSXsWtAYSWReYxGHbm4JkEiBdGvHfVjN2JC2afRsVyXFhwyu3WDnPaGrH246Lz7UzfTFRNvAp53YPDW9JQM8",
  "key10": "RnJePjgqr1Mx1onEdBE8sUMcKKLtJxTuV68F7q25ksWZB1jU6CaX19yPLknwaTUvyyHTBF25gX2g1uGWcYCq4QD",
  "key11": "uES8kf1rL6wL4ANoboVAtsomtoMLACwmCh64eAjHW1KVwKUGb2JSNrcjuKSWvtJ7CcML4ZYr6HxKaN8NQDuChni",
  "key12": "g1EY8PVP5Mh85ig9YMSpVVQnpQgDWJQtthKLDL7kVMU5TskMNCgfDqXifWxjEqvQbpkx2mYDjxswLTGStQtmyhi",
  "key13": "64Gc5wBxQoxsxPfGtx6p7y7DXhuCELvajgCBdqqTu7v9gzjTWzmhB11pdTb3YrwrNq43T6dTD9R9mME4kRDsVrpK",
  "key14": "4pE1WK6QeLJQDHXTF9kNs2msMNjEGzEip8Q1cMPdyhcJKKCwkkT94cJq2bFatHcq7veU6hUg7qVA1N6yvKpsSZFe",
  "key15": "2R8cF1MGVHf67bQunriDfXtsnFMSoaVScyYthsry2woRYC8PpKLhzxNFkt3z1sMeXCaUzYdw4bWj5nY28ccJbSuz",
  "key16": "3zsn26DmVU1quwQiPdxXn3FLkJSmnmtnURyB5AWBmXpe54biYJDMYBmbWuUkknErhHAT9R9AvcaX4hz3Bj4SjGHc",
  "key17": "3KpeWv78tco9AxmJ1Ly1Ejg9aVZr3DFuQbj8MJVFJN2PobczxmocYj7Lm376QbKYNchN6UfLogwqSjYkzQmr6zFR",
  "key18": "5tLvcskxLgM5VCSBDtbZuC6kgXUPgr7KAPPJVCie7yUW5xCst7jauH1pSNNsh51G8gxDzfMzU5LeWcZx56ojirqw",
  "key19": "36RL1iK2PBYJjM6Bd23AfBRM6a9yor6bPSkwXDRvXRmw8u4tTkm5amVaGu9d39nsrCpGX9oS68UVPDbcdAC31bkb",
  "key20": "5Zy4AhhYFiAjir3tpAxgVjdbc6T9ewFysko1W1DtLdQFHyuU35bBdxgrCR6mWA7fJp21EZdSV6Pnn734SLAiq2Fq",
  "key21": "4LSevh9Z9wSZS785ffh7ejcQQRadiWxAr1Q7PMspdJBuGteyjA4WNMaFNqwJbboMbzB7iPpquQbAPbcC6rC6L4CC",
  "key22": "5LBHYmhC3xSsEpDVAPz5f4tygqtDHz7LKsE4LMoHbyDsF3VvFdsZVjQ6xFXQirjgai2bDiez76vpHrZguCDoXKgy",
  "key23": "5rRTMU5Huq7MviQRP7jVWkMJCViVHQ9q4U6ZhZyW52c9jt3TcyzHDxyyWeHXAKrzNUUcY56YrsWQAFiVNSde8gRd",
  "key24": "4oDuegQGBxzcMCX2yX883g49N7rR2jMayziq4TomefPthY83SNsw1ox6h3FLui4hR5SEyYPbjAc1rWfHCrECJHWv",
  "key25": "KyYa4e5eFcDVTUDJ7c8w13brNAGv33VUvP6uyW4efjAkGnHeAGSsKqPXcW71xEuk8PAn6a4FLqyr6i4ZPXmoK3C",
  "key26": "5SEC8J1o9zZnfK8s7n3rCPikqxG2kHPhY9J2xhxgWkTq1hkQuDv2RzD8dnWcJtMH2M9RgME6aJtR4avbAdX649kx",
  "key27": "1QVp3Qc1wS98JA7D5EtjNEALq9tnE6b42evcgoSpZzTW9LNcUCop2PrycwrSjJ9BuJc3EPGcNapyoLXJGb2vCGh",
  "key28": "3JkvJduBGA4WRDJJrkDab91zw2a2SGwmRkCoyVPgibmiFUsEVGSZmSz4MwMjgao58n3bbfUqVxgZdMk6QVLzZc1V",
  "key29": "3Yi22aFFzwythyKFRJCijTURS2DvF4hxygX3yhwXWLxkfLejvnBzmkZad4A8Y3HpEkzM2sZTujvq39bY5hhTvgqh",
  "key30": "3irHfw9Hd6Gnxx49nvoz6PJvTEKx7vWpC1NrtPSq9vFVmL5ymhHuc7XZaiqPtY3cdUVz7y3G6dYAj5YFF4mtUEVD",
  "key31": "33TxFHWDST7KXzJUnkUxK5vgCfRccq3nSvVtZZz1tQXpYB92QNs7Hg8XW81Vir3ZLBhe7kUQudCaHbxFqhYUvgC4",
  "key32": "rpp6Wkdq8rXTuYixfxArTp7jqLsTUPRgzn1386iLgtVv7enF8uhVsk4c7oP5GF6U1V15GAG5YUeiz2BJUmyq9N3"
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
