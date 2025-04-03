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
    "4tS1tLiNbWEyv8s7EL8XjrYFeoV7BeC3ZpD4xEEPftcMaMEZ6qVa9jCwCPqWe1mXWGoCYL2UHxoK9xHTYNGr3gnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52yVtfsNXso4dPnUJVtBSEtJf93xEE3gWArTZ1DXMGQaPTrXx2m2dgGzB1yqPP8dbZLnVYv8kWLJU7MSyipTe5Cw",
  "key1": "2MwM5p9FZJ2zaF4AVBSLfhBAQkMXzaMLdcULp1WAp4s7ePstRhvUKTstvmfHKaqd8prDqDMrNNoSLKZEEnjLatue",
  "key2": "3TNr8wGPNRUZZ9WF3MueDYUGgFQTxxy3gEXn5nrfEXtujY4a4zPVmuQvswAZQLcoE5vFc5DmRJ49ecNte7dS97kr",
  "key3": "3aXyawqTUmB8kTnev8SaiovSD4k82i91fW7b6WpeW6PnGYaJSHiU4qRQ2St1Hs5fTE7wooAsGTAezyZGWB2H2iCv",
  "key4": "2qUz9xGbDeAEaTmpivKZyMbT43DexrrbdwzHpuu9xNN8G6nMMF6VKaQH4Lbz2S11HX6KkRd3bH8h3dPRX6jZRLkD",
  "key5": "2Ti4yfZoVTYHt8oEst4V8hE2czhW7yjAfkWKyWNxdBKutbVUthbSgF9A94bPbWqEQV2TzoKB2e9Vvjor74H4jpZx",
  "key6": "4aURGFPiEmiKYFiLDt5ZJdzdMaaACDN3qLuSn13mgCwqdGJf6iVggKy9vQkNXiQXKk7QQMUodcMKJd9KWCjVFYY9",
  "key7": "3JFEghPp84ayHBeYkEpMHZimyCt4aTWsfTCajTkHVXuww3MaFooRsAmyQFMcvP8C2fTVbXr2dVJk3BXtnjStYjpF",
  "key8": "4fBpq9FbaK3XR1gcmRGEKDyEi7o1tDKN1Xw3iTwCHuBDhJaMKoDkkstuh4tippXsvHLaMqV7dDtemwvpFfaHT367",
  "key9": "4LqEBY1zagaHakja8CxhB36LF3JJPP7XnixvVPU4WCz64vx5PM5iups6uwaui5sGLznQDuossLYs3uixdtneiZC1",
  "key10": "4KtTDw7AEzeBruPGHTn3zy9fNvfKu3yUFmJCcT3wMpgWys6R5mYZvCHEPwru1SYr2JxMFSBtsszoU21TBFMTAW9U",
  "key11": "vXWEWL9nwJzAvXW717D8VVp9eyiwuTR5JYrg2s1U57ATKGZ32RXwX9XtCeBg17C4DdBi5NEx8Yb9LbG8onT8Vea",
  "key12": "2iVDjm2ftb7RKAGvpfjnRzoHPTyGmKMDvUEbYWtGFLr3iDbwgUNMiUPF64j9ToiY4XTmrTWaHAk8So71FnVQXrLF",
  "key13": "5uat3ad1STzKxjd7pce7hpQ1712tKeWTU7HyaWWnnsbcbTpyE3KWNzQymJRuJfbjp4kd4dBLus8LHasUnqfisQFp",
  "key14": "51jJQWjAZkpv2whBoc1DmPgZcvqi5MDT7xWj1u4XuW5B3m53WBMvGzHM3nxxYKWvuezH92tJ37aq2D6Ntk85CAr7",
  "key15": "29n6pYgc5vvYe9o5cGkQEr8g2XhojQiuxPcLkViaLP2TAPLAwfG3BnyrwPpUTQnVygx4Ek1vXnNtRgxHNbuzqPoR",
  "key16": "z7P3yWzoGhiM55MQDAsPds4yVZN76mBAsTn8yMc9t238xVuqg7J2kph3C4vDH7a7hS6KAmsxStDcacpKDimJXCi",
  "key17": "4AKTzQKuuDr884ceQoemzT7QwvXgVredcc4uvA6XA7svEAA86kbdszQaPn31ew3JWeGc1rBW18JTsyV4iRHs1F8S",
  "key18": "3wc2ibdHoCrmh2HYwxFdtTbBr7jnyfWFEq3AByZS8oysHVcEzCBD4ER9UFuTVwFNHHeDa1xZwiL6298fQeBedK95",
  "key19": "35oCeA4zyZMjhh4f163vKej9wUmc1179zriGmmEssUAvvvJ7f7xMT9RLygGBphGhLUwGdRbRAeDwgaxSDu2oQ9Z7",
  "key20": "4bCycztEJRydxmfhN6ZWT7zmph3JPCV4iA1W1M9HNdtNZb3geUhwimSAx87fmv2j8MHK38dpDpqGqUBd2jbynucb",
  "key21": "Yetj7zQSAVUh8ZmmyxMy1EVSeXWKM9Xcu9uZAbANwyiFMtWK6NDazYWVvGKDaZ1r5aiyPgrTh1pVgD867fCmQU9",
  "key22": "3U7FndgndcfXHgdfD1mA78i6QaXNZCVYPJMxrGxPUmWZYXqd89TsrkxND9kJHCvcpdti8uH1kG1QZbuJmijCot7U",
  "key23": "2NEkRKXvQ1qH21a2Ph5SxnZhRwFYome3w2mQsM9jCfz3a3upmk4PhboefuD64y86K2HuXAv8YGSRydkpnCJhesMn",
  "key24": "2k3x15oB1e9wxALa6b9akSPCTqVG4QaWGHhApw2Aa4PzgVySNu92oHrQ3rAqSBwgsmbyEZNxBvaJPAbyGSL2EeJQ",
  "key25": "26eB1XjVAFYddXksZwMa3H8MXDYWqRqgFcUiJfqduyw27eJTaLqcJnUwC42e5dL9zSDhgUYjofmVRpmS1RVsMTPj",
  "key26": "2nTQZRUxef8iFfNnE1nxeVECnvWfggDKuHsxCepR6NJ4CystoEF3iDS38VftvmGt5b2acpr8GiEy9SqdBfG8LeJv"
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
