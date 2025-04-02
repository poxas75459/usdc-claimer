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
    "WZRPXBQS2ELkAjDn4PsUpn81XVCtxLbQLp45dgCw9fPxZkQvZUAEuMVdhpz4N7fW7uHk3sQ6xF1uv6hJbpyQ6B6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RdGhHqFSCxfWZaqZLzqboCP7aW2rvuJ6SoC6diH4bhv9hPHw2BEzErNeeDBbWxLapZT1cuME4GE4vYvoqVSYh4b",
  "key1": "xvyhkCrHbXYRHS1rnNj1WyMukgekdxEirvrFTNc5ZBPMNRJjhg8JmtahCT56b7JYHmPPn7NMXKJpbZFBZiKwq9r",
  "key2": "2WpXQ3PivfwNwtknGngnnwWGUqT5vUVxtWCB24ixL1CC33MS2uJ3EvQFywKy46DgmH2DaCDjCknvY3LUtTmk3xeR",
  "key3": "4Hzt3oVuQ2zhXs761pPH3MuvGwzJkBJNnEP9XdwMf6bf8Mc86WqcHH7ZZ81Fbx5VkLRZGL1DbPVNT2FZUVqXbUpn",
  "key4": "B7BiJ8VP4Ci8mXFtsv8rEKQeLxM7WoYr8Nbg4wEEZLPg6vRzNDvtpxxcYY1Uaps3XQkhN81EzXPpE3T6y3eS9Yz",
  "key5": "61xJwAurorEJMUXbvnGnjkuKmZnfiTKvcBDDHaGeZRCCYdZc4KWsEZVpdhBsig5dwxt4UquEUWgjESLR5X9iWG2q",
  "key6": "4LxfvJHwFSeYWkcyMZkN41SDJQi1gcLgPh4e4YHpzDFRdTsaer5nfogaxNuymRVVA2RAYe9sGdv8gvqE8E4yNHny",
  "key7": "36gyBcUgVijR67EYGLkcydoysueg7TrP4AWEZZaddKTWKxeUtk1RZ3NNWhM6MQ8trPSB1ACDrVhWNgUktEKcRTqt",
  "key8": "5EQuknPBsqoMvrqwVwzthPE6c1h5WrmGjKASm8DWxEy2XJZdvPktyCSK9KpYFjtPLvbUsgyFp2W3oi88DhRrDc8B",
  "key9": "5uiLfENDgQet6EkRJQeamQ9Ea2P8prMPgQ3Ur6epnmX41PLb9BkKJDfE2pLPerS1aZK23ungd6yGsF5kZ9Kc2x21",
  "key10": "5vD7hEepog7uebtXsYHH8UN77Umzx8yeX9rYcd54xU7PpvEAKyRyu4pcbQwvJaGsmrStef6WuwY5raEGbaKN458K",
  "key11": "3oFD3R2Dfab1w56BBhwP87BK6cVs6k3kT2PsVmTED6iBTMMPWWBTvD6p9BZNXvXxPR215tpgZUGNPycxyeRCCiCD",
  "key12": "5AHKmLwjS63KWydmwcMVt4H5BdmPFonS3XePzaxcbUMbM5ngcTYVyMPnUatHte4d8HfmTsbT6Fr1BiRDeZYfbAUy",
  "key13": "4qtKGhx8pRp54bs4Gyq3NZJkH4RsnBnx5UDSWmfsJr3NVxGMhWX6RJBzpUpMcki4BZ1TKAjY8TC1GaWXDPz6Jd8s",
  "key14": "2f7ej1gAn2TJdFQ2DW82ECu7wVCdNZ1rZFwmTX3TWaRVjGuktPfngRzsNnLui6KEB2bZY7cfrF898yR22BPrwttF",
  "key15": "5aGWHGCVn7CTXFwG9cCoH5bMcWmVK8Ti1eqPwgREM12mNekFUJJJkU7cM5Yj5mqRJ1DMsnGuJrgLPf7mQME23FMS",
  "key16": "3AWhPcosUo9Se3fh4nG9A52WNzug88Wg2tnC5QRvjXC393fgq42JP4uMMH5tL7HKzSxjYJ2o91VvkyvwqguEgy9B",
  "key17": "3QUVcoSx816nyFhHJJba7t5SHpuoPqdUptu4LEiYV77RJirKLM5vXp5dkJrMLs4RXeB4yNoh3yHSmJSUC6oFmd2k",
  "key18": "UNy4tgSc1nnNkRJAs8wkecjyh5GTrtyiG8yfMFimwcswEe1T6yYCeWAYYeLB9YNyeiK1XRvv8scy8rVsrgqxPAJ",
  "key19": "5A96dgJwSJ5g9djamwLHgY6ZQHdEFau5PS474e3QhuJKipM1R8ofZJWBQ5R18Uf27Jm5P4Y5CbvxpZQpq43WUumG",
  "key20": "4r6wP9NQX7sGRPvhntYmv5wxtEWo53oMtQgusSwMhYoPVLBrhoVufn36y7BM8vz5USVTv7srKGiske1mw9B1sQgv",
  "key21": "4E74UttatCtNypnuoX8AmMiEN2Ud1MwXXatqo5nuMBNJrWG7vdUnDERSjqnAJ7KgshuppnBYwTEq5iJ2EseaUS37",
  "key22": "3x34tKPgbdgfgNu12TLF8RBCFx4SYyWsaAHdvk4PniSm9aZLHB5kwetKBgyfnMyQ5yYTY6b5M6SnYfc7qEGkCNum",
  "key23": "3K9CYspYoZLVdfxz37p9XtRemMudyuesKTELzCkvKD5UfpkzCJzrDYMnRSk797Nbzia394nyEbv8A3XMQzpy98D8",
  "key24": "24XtYy4eN9rgSrmDhmyW6tBXMH75KHLScTBGUSBzucKBEPSGAAakNmtUNNDwPo9LSe74RQkZUEFFc716wusgt2tN",
  "key25": "2uXVdUd62qcX2hqtPe2J2MG1ce21T1M1bZMqtxMsDb3tNtj8t7WCVZJJFM8YzFxD1EgBWcDAaYPhiiVZAQ7pYSDT",
  "key26": "LdqmPBPUQ1hwsR5Ke2vobQgizzw87P1x3MgiLE3sYYbdMaLRECVgcsLvqsudRgiuMPLdpPH8rPFDUQQeuvxxpYL",
  "key27": "5QEejx1hBgGs3JcNLHrb4buNLww4CAbrpBDWrar2TM2PfzdiQjdT6bBCgC5gCP6e7QuerevihTuqmS4SWqAUMKZf",
  "key28": "4GC1mgLn2fLZQQgDca57ReSAfVGDCakaF3Gb5oxxqYnNaa4P5AG3tpPRYAGGDmvb219pTDM8jSiYBmZZxDKegsD4",
  "key29": "49bcqKjox7bGxwweefhVDWosHMDGbUpj7pRzfm6AwyuiwykXbqeFyJkpsj1vzAqywAhzqfcwGD4nccDLXk7yo4Jf",
  "key30": "dU8o5b9FRqBg6koWhpDBwWcyoT2BsMCZvvVqEq7PtM3KZmnKXd2TEmovsJNY2qqxWadyunU73YRjh51ms4z4f4u",
  "key31": "3pkKg6AqK4jXMJneH9kNy6jLSZPG1azhSdwpGgVUJZmmUajjPU4Cz8D4SvMthmNXjoTCz5WZEPmkyg4dsUm6AC19",
  "key32": "gHMwLRyzcrVUa5EWna2NadrN2bvUuMt7Xc6g7gQXTvF3Cb2p1RUY82WXaUCM5EuZxueSpZ9yx8cmwz2bVJ1x1qd",
  "key33": "5yQHCK5ZedmEhVgLEyKTzpxkuQuGfvewbuPopeo3bYcP61YFfzjJEgQ1tAzaBbnoGhCUbQ4QFwNLU72nVS2SjQJy"
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
