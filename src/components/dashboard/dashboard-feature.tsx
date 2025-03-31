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
    "63FSwyiUg45Tp7SrApP77pH43GwRjaVB4isDiTpWAofk7dcqFaK4Qch4MmRWi5YVFtM6YJ912vKs7yzWg1Z7f6cS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tn16YcmxjzQ8hDbXMkfpNLi39PS1KP5PGgmrKZC68wR3AuAN8vmu9avR7KWiUJgWyS4ZXCGfKC5FQaVEfzyTA1o",
  "key1": "5cgC2Fb531VGjXrgMfubqkxnhLH3XbSxobZKWaB4HCxe3GjZTXmf2nWAQQJNRMygGSYgAqHAqam9yHoQyYdmpQJA",
  "key2": "3bqCHn5Ju9RmnQARzt6gEGDEzyoVzzgynhMnG2sHmSNgs7rJR3WsBn47qPR32rpR53mUXpeC7EZZMUGzFCVABKZY",
  "key3": "3gRQ18Qu5zMvm8XtdhAgRrwoVL9oMmJpYmxbb2XwbMLUW1RpspxqGM3jC9eJaqesahK7C2NxZxBEzM2NnLhpDMwF",
  "key4": "35nDn7PYz2Lgh1uwtpV2JhunR1eB7wpRcmiLbSAoALbN1g5fXC4JbDcuDu6Rmcrj6awJMruhJTkEL3jgzpNvjEzW",
  "key5": "2fvQ7xamWyo9MBy7iHWNTXv2gHYX1JaAaTx4PQTQfpNCnHCv9PHVqXubC3JngNhBGEkaDmk1EZcYkaywMPPro4FU",
  "key6": "1foRs33XE9Fd6ezXi9c6NT2mdjQwQPx5gjg4nvm9NBiPSaz25D9uWmsYr38FSZe6mL1ViLeD9Z9HvccVDPAAaFB",
  "key7": "XXiT8qeYYEhVr7Qhze84chmpJZCX21Pgi5s9HGpyixCjiXV3qCeprhgTiT9DypE3g5Zf7eE2aEukDGtRb1GB4w2",
  "key8": "5x41EEzJixao2fDyt6jDSmwAgsDRrXa3WdTrs2oVAPQsPbLeeLGjRhGnSMMzXFk6SBTBWFW3npZjDJGNgAw2qsEb",
  "key9": "wBzc1N4VbVyZB49xfBAFtU5tG84YtXoopHDFw2oDt7M5rht6PSYc7GjeqH9917LDqmJnPUkbWLdHggpRKgU3bHC",
  "key10": "4wPqj9viySpuPMYXgYZbNEgfF5cNPyEbupGVpVQyvLoF2iSbhan7nBhfA4uKBGLd895JkgB24pTxZmJis5QmaXyS",
  "key11": "2hm17YyjaQpDFVTdoi8GTa6jmASuoiX3CT1TDTN9MnBHgSvkgy5pj7DjNYSGfp8SGu2gQUAsPCFCaeMhuYZtWYA4",
  "key12": "28qJ1PoNy36b14G5WcQw5AqFAQQQMcd8vMySfztfRDeznKJmQhxhoSRzXbdBhbhdQLrjhjkPiPkQavbB6EKMzGsC",
  "key13": "26bCVSDFcecGXwu3NmQkqAk8sHskE9ztjmXqmwEzdracd7VYUHJB2M4VxL4x1iLDDsB9nm15C5CYHk1pZUK8cRD6",
  "key14": "3mWCzgw97dLNx17Rq42rrbgt7meHLf5H4SfZyR8Gv9NpUrf9V4RLWQBitYVcNjVNzDx71vBBNfNRQ2Uq5WuruSFT",
  "key15": "4yj8BCGWMXtgJP2c15cFdABC3LVa5gXDZ19kruNWQXsZzPswjqoLaD1Kxay67NKNNDUY5RP4njR5isojQurJsgQm",
  "key16": "44DGqVGakoYUG7zCs2nYAhLaT5c8JAMY5CeZLExRpi7C6SjPGLVGqH1wXrMegtitzZALsHXd5TKgjsdKboadxwUj",
  "key17": "F8scppUqytM5KhdpHihkgmYnPDoQ9qyxUcULqERHQFWnT83tTZrzodcERMrvY2BzPABfPrvVye6KtYbEVQR6SDs",
  "key18": "21Q7UHknoknitcvneCD9inT9SZJoFMFHMuaiCQo9HtKefb9vzXVwbUG5xxYsrC7RZY4MFKGrMdLhDx9LJDNzXaks",
  "key19": "4KJ5KsLrss6TzXswokSQaBJjVKaBjECxgVdkvXC6A3zUuvHi6PcE2Ge2sPDD1dhX853bEhxNxUz1PDzivYaFthgY",
  "key20": "2chASHXtjCL6e8FeGDRs4MzJvJ4Ah5r8KnydYezc9hF4FLSNbdLEMw9TsM4erzSShrnVyDqFox1SMCmwA8Yg1biz",
  "key21": "MjL7mzamwHkCkgjp6Bq3bk4A8s36P2brEwArLWRf8hfceTyg2PhvKAMfXrQvqTiSdXs9a788fEP6y8szQeXeP8M",
  "key22": "527Bai1vRSumPpaFtjtW7v6rtYXh3RQUwcptK4NGniMH5vd4MJTuwC8HYYT5nJfbQrU8pNozrL5ct3Da4Qxn39Gm",
  "key23": "42VHggX7AQAFWgAQZYp3vanc5PJ78UNwdFef5CwSWCkwSK9BFpFzPRtNCKf3nLJ6xH12UuYgZKuWu19xQv6wo7Cu",
  "key24": "3JsM5DxbrkE7mrBFgBrvKDe5Vfux12HyaFa91gv86v5JLtD3EakNkXyWbG1zDMHDq93WtnzTV4itUugPYpQKFXjS",
  "key25": "2hobA7NGQiADMYZW6vz8tYgkxK3ApowubnhM5pDHzm2eLfgzYHF5Yzg9nhSky5X4xFSAmWwuMTgsLKY8p69Tc7BK",
  "key26": "3NEUSc3mucbZJzDuajeNE1kXkJocLAcsAJ81VXPxLHpmHd6CsJ6w4X76ift4dVnV8GNDYzhwnEuTB33z3PYvhLq7",
  "key27": "kn1geU2x92fYrPmKiVvekdXcTzPJGBBN7RG7mKz4kcbrqkVvfhCnRET94QKuaUN3WquvYptof6FmiE2BZ4oJ6mA",
  "key28": "5Aa1uAUo1oEQYHNhXrEDLUgULVVYLvkKPKMTDUfG3uRtr4gb2QQAcrorvy5JA3VUUz1d9339CT2iVMG7jCNPKAAA",
  "key29": "3mBDkqZmKPUGxZHhCsG2UiwFkA88rFyUtvLyqLnnjRXHHakT8CK16H2rTuxcZ8mNFFsyLQxEmWTCZqDY4WLQxHwA",
  "key30": "2mWkMd5o3y3xkANTaStoj1s51KWdTFgwf9HMho83iJ1q4nZn7HBgdfh2iSLGaKebaFpFLMzPBV5RnssX8JsgqJ9b",
  "key31": "5dEyqk9Qtywk2QLsZASsyN1mrzNaNJyNbADdJMCCrZwgC5imAUpBdGkt9i1xZuZjniydipjKPgJvABSfsgSyKLnH",
  "key32": "4VaUihTp71DASS9sZrmBBZ3jaFx6KWSpTDZu1Lqv4VobLCH4DuFPsJ6ryAegmCr8PC9eVj9KamjmruzNo3px2yV8",
  "key33": "XSABHUfMgw2VkZeea9QvJzSnLG9ysZoE5kXf96JyfGpu8iEF1aXvuF36X7qmfVJwXSNkPfjZAYRWCC4FyqURgzm",
  "key34": "3DhiwSktcPbVHrDgzaf7Aspr2u5k5jvUYZEP8RaXtyzgfx6Ps7crkkmihbTMQBQcZgQQEm9MXuYhmssFNGaerGpn",
  "key35": "2RzonUqCfgjfXtx1GUwJsrJtRrB8ny2ucjXYXTajphXVoUpvGGDKYdK7DFcnPdgn3Nye9XWrjxE1PiD2gDUkLeZr",
  "key36": "41C7T7SKz9myUVrUrLnwAP2aXxd3uau2MoDfRQG4T7BEh6Q4WwjxCYgTG6kS1PwRh5TjhcnTjFJP2SMXq5gasq3u"
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
