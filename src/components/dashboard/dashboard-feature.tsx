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
    "5KVaKbNd3nAfRtDP54mLejK1fTLJdxFT8WZxjsJRe8Em1UcBktQ5tEYvuJ9GLtGCvdiEPzdHBgx98TP119Z3NeKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hgtP1vPK4EbEY9GijBwuan6oVw9jsorpD8fWEPadYetYEs9vXfmskrv7sb315c1gyxSdLvHeJXFga4ycMimtp7A",
  "key1": "4Nd2TTSuXfKJ43WKivzHJYLUbrBpoDMcMW45JRE6zTajjGaUdqQoVxHngNXAYDzkxLdzvi3shjA3QEY6xpVmkWaj",
  "key2": "35DSfHpKGSB85ZMyNwnASGSess7bzm6Ajkg35CVu881L48wmfRRP78vpf6f725e7DPA2WX3uXsVziDGbaLjw8w3y",
  "key3": "2TibZCEwj4nkPmdUdgLSMqEc6bmde32f1K4Ep9jCQSbqJpXiMbpjYS9a1uLFrkshMksia5GAkXDhby3WGcPXJPyr",
  "key4": "3K2xMjS2eZhqhH1rPFTqcP1bTm2mAjmbaDRuhk45dfTUYtqiPWYSS88UprCffKq76hszSbXFEaNf3vGikn9RV1di",
  "key5": "3Metg2mgFrcbGcFw3FwvAyH29CHiuMeyrsA7JCf3psFCaJpeE52GC36x9LfD6eCU4QHjokv1dpm959J7qTRv7U9F",
  "key6": "5MYhrzHzEfDdkpWwqgjr2MKwAXiiHkFAhKLp9A2G55kniHwUWRiKXSFcPLGs4Zx3HKzxhJ49CaJbSArXZetD4UzC",
  "key7": "5kHhvuuWPDC96c9W2EbmnDY3DaUZErdiEXk8dWrUuJaxLFT8X2WZasWMhvnUViGaCJanPxkHr5UbzUjkkSfCfieL",
  "key8": "45SMDMPYcxMi3nxwRyMhw7TZwHP8AyC3rEPMLy23zehMuavC4RxnUsiJfm6qwUSnbDcaHHr1VmTtKkhao9Arr1P2",
  "key9": "2VXd12wXB1JWgmW8x8SBshTdwXcf9YDchAfauCxkhRMi6gYs4tJL4e8NNJDEaY7jeQyHuKehj92QNuFEa5h5oS6y",
  "key10": "F27Nc5e2twEN4vGsAwgHDULsFCynCXFxJkX95eHgaikQz87LSNCtq22awyChycDQnRF2FPENZ7bHnYYrm95J4uE",
  "key11": "5QwmieWsiKCZ7ftqCWqteYft81pixqFR74aDZbuVfSu9XJ8uBs8VMKNZz9QaZTyrFDZhg9c4fnwS7UEXjhvdrKW4",
  "key12": "E6gRAdSThCNS6tnprbCuH85vKvSPxA2dnHKpEyWhBHakuj8XXz51Ay3dWAPnztQBqLa6waLUgAzaFvGD313sPsn",
  "key13": "5N8gXUStNiL14VLiD9fD12jxf32mapjSHXQDtuHTuKvywKFicitBWDQ7kgxHaQn8Z8dStb21PsBGHXMXWYd3vpW4",
  "key14": "67k2gjtGyw4VZ8hJG7P1EKup41Q8cPd1YC9fz2TPedzWM4K9jbQHRT5qXgWpEwS1RSig46jpW1VS8oiXqpkv4g8f",
  "key15": "KDsZPDMB8QaeQcJvbGST8DJAy7P44eUE7TLYPAPjQjSvRPccN9kmXTk4a6yvtEs3MTExGAyDnfNLd6RhnccQco4",
  "key16": "2oRkyvf5BrwgNQUc5qt22wdJYHXUR3XGnQt8EXFR2dYhpSfru8uuobAELZpzvVXhdQqFVBZtRWs6vKWnA6xJcEbe",
  "key17": "49PW9JYasRvn34uivZ8Qemfs7QcSnuHDMEsTFjDswhdKycGJ71jWwGc6KdJRm8tzVs2iP3v7Lu47X7hP2STuH9Ng",
  "key18": "2j7gYbCGRWfG7UFWxqRBLNzN8caAM4MGMzs1grFVu9GNBrbxKBeutN54pcjxePwCv2WpTTxfAMTpnZBEXXEMLnzn",
  "key19": "hXQozgjvf3mDCGFSCad7j7qb4i9mYNdUJVJDoZJPATNBitNjZGVCsHMotpkt9JaoAtdxUAUSFxoZGhHQ6UGegC2",
  "key20": "3z3gGtXE5aBparBQ1LpeJfPQQnJSDVYVQXvHiysmZuFEtenPHDWDLNyAV2Jn1kzaWwnMxEJxsjAw4yH7siRhVp9a",
  "key21": "5TtpxpYM31fUMVWVSfsQAWA1K25qCtQsqp3hmLv145NUBN2FL9FHg4KUvwu5TRGkNZzTF8VnqZqP2RnX3NYm35nB",
  "key22": "2osXyc5EeAbCBinDGHFWnYfHw2XKZmKhKpNhaaM8LbF8nhiPPXayH8nVLqBSESagHbNEgT5hdpSkgs9KieMAw2So",
  "key23": "4EGKhT11ij6ePKBsYPafXhjvGXrHR2inw4qKtsXxshaito1rByw5pC5VvuPq3gckvmBjk68dozyh3FVBWST4qR2x",
  "key24": "2WKfiwzoTd3oDZSk2uBFkgocJ5ycQgAwonVbGWRf99jCUQFZJWXAu6E9wTq7vMPD4xJDBJ9pwN1axgWyxYb7x3eN",
  "key25": "4C5UyYHZBtKSQ3dAng2AxvYaXw54MMosfDwXhgNXumzZUVcdCgpBMqonJJt8JEgxCRy1nNTcZF7UDkw82EfogaCH"
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
