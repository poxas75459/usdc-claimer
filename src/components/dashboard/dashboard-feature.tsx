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
    "48fKJBxRgTa9R3pwXGVdkcrGpn4rFUasMaAVrUGZpwMsFjR9duQmA38hWuxWbB8noQHzgKF3bgnokfmrUmEdhNud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h3KkUDvrjj2yLubWr4nbqq1uNVzd9LWGXzQ6At3W81pqtofTrxNkpxqMHwuzvtmDmBanpUd2Zcigeo8NpTGciLX",
  "key1": "4vYjoWsLPL8dkEBsD26jm22zVxi1AS8jjtzkPt6zZwivuPgfgYXgQKhcwx4rAsaHjnzLxqQgjZZBW4nkxyKqAvhT",
  "key2": "4oNgzzYNDZaHpr5dFUVpRSogGF2r89Qc8GkPPiyK5aEye99nya5v7YQhk2HNbSPy9bgcxaJMea1TdhNzHriQAacJ",
  "key3": "3md2VHdvU7hH4fPgrPJWPwckiKaCHScGWM6WYPEy84QBR3qsF29jp1fw6NCe42dbXPkzGXbvMaUTL4hcE1ZrJyjs",
  "key4": "5r4RHh2tYPpgZbU76K52nS5m3sRueAJbivVAs4S9tD6qEc7QQxikEYdDsASWbREhEsb7WBjeDdqKqpRUnpqfX9gM",
  "key5": "4C4HwTK7jqA4ovMXtmxc429Com7JwY9XpvPxBS8qywZdkqFMEzer8EbG421pA9gy6PUjy6JQKY3JQEiS3Qccb3ov",
  "key6": "48NmNyGM1qCQn9wxxF6y3zEef8NEoL3mzNLiRASVJftFtRyx5hpWW98YELc3QGWiuxQ41ri8iu3U4ZjXKL7oy7F8",
  "key7": "4N8GJ7yxJGpKyA8P16zn7owUiWjuaFr5wFpaEudQbtWqSi34iQaudNcAZNwk59dxCvXimFzhyw8xy8oCUA28Wadt",
  "key8": "3LrNu9aD6fAFa4HMSamDNCfCmiz4dWivur9fhyCz4kwnyRk738dvjUmgoGCg9ozqqaSZYMmPeTsC9vxA4YCdURjo",
  "key9": "sTfZywRBTB46EWkdbsXtTSHRZiawtBBnC7njbT2gDiFSAS3sNryKd6keJEuE4tPQYEgvMjpD6tmP5Dhqw6w6H9a",
  "key10": "La7sprhsDSyjPpcPaydXHC32WQT8fqExdvHq2RxQn64MQdrkHgVsbRPzMiBXRDVKC3uh8J7bwyryyEVwhvW37sY",
  "key11": "4MSoVwnsyDhcJKnHpu9PVL65KkvbaF67Mok1N1Ws69W7zD9NvVTxvFkWT64cTggHj61FLrGtzFLBi1E3S86eRLyn",
  "key12": "5oTupe6cts7rvBZRZrX2FuUqyiAAaz2692sRUirSBpT96YEybmPRd9Tf4ncHmFuSTxPPerW96BAAJQGBCtDzYdqW",
  "key13": "5CThEpaUC39EZCFffftJiztU54NpgwrYT51jKRwcmyDhKvsUZu5caftYSaqpF2VSufu1PRF5HqRziUGPWcVwmvDL",
  "key14": "2rayUWhMYPTcdKHbdfU5hUxXFLomquE6BVozHsmcX7WAHgDxePEiUhKQEgtddVeKRYAE7Mj23rX4dL2dujD536VD",
  "key15": "3MsYYmaLWgCnTr7gXMcHz8DfacdpncqeH67W8BSkUAtwg92cKMVvLkwFWh8RVacq5PGbg73fpdagD7v1hG547TrL",
  "key16": "5uw6i32Ek77FVAVvcYp5NJt9zSTKyiLLDPDg1Vc7UKAj4Q9XQ7deqr6zdqJqRCAe2fQvjywrCiPJjhodUc1GxSjx",
  "key17": "3Y35koUSXnkM6MNBMVZuDeR8CNfFkJdF9JrC8nTzVFh8AVZ6MYZbF4p4KFy7UgZtc6A57uKNxcbZyvPHLRpmiJYZ",
  "key18": "zD9ejt9iJXmyh9kb116E98JeCxztsECzeexpTvmxdazTcoJbKMvTn7WVTrH5RcFWkTRjM9N1BqmuemSBujpfFGQ",
  "key19": "2MLpcpCC8Jgo3x7qV1EnUhBni4hozkYXHbbWx256GUQeRwxzCkDeCtRYBR5CAnSP9KguzcmSDYXEEywRGrJqA8T2",
  "key20": "4qBiMF5PbispfYzt6hwjVnpz7gc9cxPh45bkRXvnwRT6NKSYVGbao8NjGXJAAv1KgGNJHb4i4QedjAkVg3Ngvvxd",
  "key21": "55nEeANnTZqchac7XWHf5KCz2sAn78anomapu3ryE2T1hG8reDnJ7jwpxW4gNEqsHQ4Ae8qAwdJ9QgzeAvTsX7sD",
  "key22": "4iEqCfce8gCgQo4G1A3TQ97qKFBGJyz6x21N42g3V636gvSWykKWMny8UBqKasSKVnYukU2WJBEFBrmeVuyKCYw4",
  "key23": "3pkjBzMLxxA3DDDRdK5b81MnLL8EV5VK7yKsfHj4zRSyXozfbzb8cyEWoHGJfsoSiX7Axe3wcLecbvnV3j25ARz1",
  "key24": "3g1ncWmkWeaoakCddmmSwS45NasEkLudFW4tXyVmd6pGn1FQncqE6oLWDJgtErNgKMaqVhKuk3V5M2ZVdacdy5Et",
  "key25": "DLk2FuDo31PzDzq9PRczoUHXp11pn3npsixHRAXuPJR5YFQScDSxtVEMPzJLjV6FqrUYXfvai4Wsuu7PJYLyg2y"
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
