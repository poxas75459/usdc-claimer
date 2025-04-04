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
    "53evLhmGf5di3KkjwR3dWDosredhiwGhoSqVcuCNxuPC2hKztGV8Qg19jYzoMzd4iNqHyt8nVPwYWsamGLv5qWs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vaoqv6MAk2R46QHZAzSTxdw5jMNsJMPaN614tCGSaKaXZHMommC25Zh7FS9U3fAgN7R56bggkb1BY3FrYuQC5PF",
  "key1": "4bNqb1ypoeMVcwQKZMmE6WACUtNXoc3JBcqmZ6YfJJfTskLE9tDchwaSKpkQHdYixeHr18PuKKWKbducyeSdQJ5R",
  "key2": "66ryNAgSfDsddDZboevjhg1jiuzLLM75K4nS5VjhsvP5BANPW3AtYrdhHxVieYgJwHbL77pZXt8StTagPqcq9Ap6",
  "key3": "631ofCEyRgBuG1bg7TGZUL2wJL8FRSCabePQhq3j6svME1wHYMSZyf1sc3aTjVVPjHc4BWiHJBd1y7m8JVtoiGz9",
  "key4": "4phgSbvdZkPovURhpZGveR8zCy378bYfRUCBvbeXdz3JNbjBXVHBGsGqX1fR9197yKbSv6toWfFNyHuLDscLB6ST",
  "key5": "2u3HLjxfXPbjRmvGTqPa6CS7uoX9wVah7PuiUVkBMVr7bFwgSFHF8yPv9TuMXbWAo725yfCEeBFSYGh9EtMZzaLW",
  "key6": "3ZicpmN2WhTGpYv7faryaJSSv5ZJAKhXQA1N6fooXr671sDN8vuYwwBYywhUNWwp65Aun5yByCjbZLZe3vw3aUqC",
  "key7": "5d3HKcYUNch8YCHJxHbG739pS4zTnDqGf1m7r2gGqrWLc3da2trnK9YYUET46PmkBJniJr4Kp2xCA3JGsMkLkEnE",
  "key8": "2nhnvpnpgvWfu54DWhPjENnXdwyFEFstjGBEvts2GvSqJ7TDLKAEeWGF4Ltyh7wGEJyFgsGjp6TjRHo89aLPsyd7",
  "key9": "2HsGNjCtASfj4bb8ujHNLXQAj6ML4iL3asnVrMQR9eeKsP7Wuj84XHxQJSfNpfJvDnGvyeBf1Z9FVSJUWM4pLC5J",
  "key10": "E6MSYbjVjzVZnGV222WEkKKwmzt5c5YPFvM9QSSdbB1RNjBPw1fg92uU223F6NymsmutkmyWmRJesLnKwJVX4DZ",
  "key11": "3pcizH6PZjxQRrgZyktyN2ggHpewajrjV6Ug855kFryCbhFR51EGxx1tbnwwDCMQcVjGnzaLw39crmPxBYu27wJf",
  "key12": "3FoGEv3voGtLDhCYDkEpgfbQYkWsiFr7pdX5TGCq4DqKrRiArZDUBS1kQMDiUMWzFqpP87aDKWB58ocXtm8RAXAz",
  "key13": "3Va6BnBsJWpam6seeiUmtgaao3Jd1cefXJdT73UaYcmFpH1UQV47ZSeQoHxaLcd2icmSAgW8s6sUgJNfx7uEP3uC",
  "key14": "yT5vApk7T1K5fWwQW4WPygg6bXmXwXvVM3cZWCwuiJptbPXQgRzK9h19Wp2ejkjsZn9Vohp8ivH5seaMnGy27X1",
  "key15": "3GvvREVH8F548wVEPtRFv8UpUa4vgPCiTbgqLQLd3LcRmLCkgVgjhYKU2iboa4StszNhNUn9yUKvQL1CksbQxeQj",
  "key16": "62FfL9bhuEwBmw3qEqckXVdpJNgdEH6fYdmYyY1aQTXsDoYvNSQP1f2H8aMdoVri2FCje5MhF6XLSpVW3yffx96c",
  "key17": "2r9VNewhq2k9EwiqtkksXcW723PLmW41dTQqg3mGeq6dufV8JXfzWtjzQYfLLyXz8C2iiCkCNHjZDzz2rmQsv6L7",
  "key18": "4XYGZs4kgFczsijnkDHosUz8njB72NXwcyvpbrqfmY69Xmp6f2mhrSxrhR57MGHH8hFjaS22AUFryKmUK51FiYtP",
  "key19": "2twvSBYFK8GbdCZoy8hScspCFkxNbxcFSmuic1XxkubTeDRnGXu5YZ46BKs8kvPehyaa7fHkipcDMwvr9arQsc92",
  "key20": "3jYz3L5c4ezFNyEGxJjyR2ku9Umm3LF8HYsJDLMLZRe6FPbZiLq9p6JSw9TMRXkAM81UQbqx7QAuJtUdjiPCCUhZ",
  "key21": "4rNEYfZMXCKABi68vqZMJnttykfmcpghJ3VvNmD734rewGzvLqjDav9biksQBFMABd86ExZTQL5Q7nQD8bzsEzon",
  "key22": "2RS5vDGLHxTqgXchDkuo7YRyb3VLXkUJRj4FezjokBdwGo2kMkieKJdAtKRwLPMnGBtJgtapXUwUY6RTRt5Mbof",
  "key23": "5WdJ6VrvierN1s8iGTfGWyoBG7eTZ3yZhH8saLYQrLrjQGwPR8fWYXczo3XaFnocTtxRyAc9SgEt8hHmkYNe9fiA",
  "key24": "3HNnNGM5ix2H2eP3gkc547DfVSemc8oB5XAoUYHsjWMkfFmF4XspjUpjnKT6axJeDFyeVSEWjnzBAufr9QnbXSwb",
  "key25": "5zoJLeA4DkNa7fYDSkVfpDpL3KiQRfKVcbuVAuimT3poTNQ4t9PnZRpPgQ5CAHkA7uXnRCfVskwSkUx4p89xnsHB",
  "key26": "21TZX8sDGPW52XZ6eTyb7QRtE12AJZGEksHKiFqwdUkKPwFtReHTesz3mkgW227CMhiQrFuJ7PjwzmrNG9Hndwnk",
  "key27": "Bb6vQN2Z1D9Qhz6Fm9iCRoGk4wfWrBpUbo6rrxtEnLsrymsaQ2guTzKX3JgJY84ANmfbKpyB7nM2RJA8hR5WvCE",
  "key28": "5ubQR6BmgDuPHqwuv4QwDhhNEVgcWp1Q8J4yv6AWiUyY1C6X5Ma6HYSroB9hWpkpv9YfB8rNUR3GocggRYvsRrFw",
  "key29": "3bKdtRtxEaj8B5QLewsfS1JboxxbQASZ2mLfJNhjGaE72FhGTsZfx9RAzrGDNagrksRNN6thmuk3oBMK5SwZ1Qxk",
  "key30": "5ycG6yLNAw4WyQTtA3mAaR9fYFCahweFP7JpVubxonfU5wkZm3kk4nJxNzSWUMF81UUGBGxNsSPVq4fjvdPrGDVS"
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
