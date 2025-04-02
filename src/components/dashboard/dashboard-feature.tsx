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
    "Qte4hY4cHsF5CozptFS4E7tZ3RySrzbisWVcYRzY8KL7RD6zNqxD7kynzLCurEEUtARw4htGy3boEiuxsoPBzed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DkGy5DZmcMW6CJrjG7cxKdXLCWG1DchpnNV6Y1S13zxNzsod4qKdsQiFaJaUAqjVnAJXF2Ei8ZLqqSbCyjuu5op",
  "key1": "Uru3a5Y1fuPg2vAWZwvdSEa4dVWvJwucEPXWWP9o4sPyNvo6MKFjaAqmbLsDgj1Roba2P4ZDyvWWnJmcGbkpTCo",
  "key2": "TjX57z2uxiuazu5xfFfSpsX6eSCz8s6Bm1zZr1C9XywTfnJAiSCub69mTt5mfJEnQbknvJ7YJTfb3Tf8fkToYoh",
  "key3": "2ZEXk8SLJveEDuz5LZofx9gvrbtzqaNqoixwoXGUL1ioCQ5fUmnonAVBeqQ2KFSH9UsUBBptNke3jc6eBUUAnNBj",
  "key4": "66XVpCUrmbnybjHUbe71UmLoLR5gHtsWk9wp8ytpCz4dtytXmhKZTm4UxSt29qsHTGMDYPjHAiuUc9czBeFNU3gQ",
  "key5": "5Fp6jrFaFSmZvMLfb5zetsiT3mm1vB5HY7KMSiDAJqXkJgR8JJphXD3CSLEi2zg3TF58h4s5Spz9nkquNH1kQztY",
  "key6": "4PYWrhrJqYi5gVtKpj7rhGoetykncRJnC42KcidtRE8kdda5BTM9UbtMXbdnbognvQnvEgmw8EAVr55H117dwbWg",
  "key7": "45bx1FZP4YWnYGRDnpoSauaKP8S6N4uNXjysJfZbsXSRBB148tBqCVFQ5M3KExCA59HWw9kqBDXHmd8hcs6HZzyA",
  "key8": "5x1mmwWF7Ggvs1qpTnJVT5vFmyC6SwohCUtcvmFt5kCPvE4uFnbmoHydMwJtiFhKR3qqnaN6jyakef5ktcQc5arZ",
  "key9": "3LpvU2Xj6MHriw5FteZVV4HtLTX1wvumxqr9tPiXPx8uG8Tg6prBvLS7oGWxfBGKjvKCrCjzuP3CpQwu3Y6nzvpB",
  "key10": "4xx1EkKkEc4hGeDotAp4KErbhYtqoLoQR1byPsyQEVG3NyPmPwSDray9gUM6X1vcFcwBydkTbmk8TXmpJxRqUuK8",
  "key11": "UEsCKv5UA6UgVyVqD3oNASqAtjmHySD8jV6U3wfCoVVV2Cb6VRQwazVoLjAKZG9jsDGcrGVcX5pesYZDteJnuh3",
  "key12": "5W7jYWKgE2wVdJ6UzWYARsMCXFkBiawD533KC9htju6mBSGjM3xvmRey48HF2zqdCCFn8KrvHqp1VF36b2vAbvFd",
  "key13": "4apyGgZa7aRWQ8PTJYHUr2w7Lag4YfqFAN9DzVPt9T1BuHkP7A8FMsYyFpRw4LGCKL8j5USmeueQRnjEJTtUyCK1",
  "key14": "4cKboCSxPKXXicBMHhPmAeK4XuK5BrLikBmzQuwSEMmgCf1KcBXXu9A5UNjCUxPCyyLbZHoksU9mzxHwrRTXzmHY",
  "key15": "pTxpcVXc7jvKBBxxTZSM4wLaqHN2i235yzjangXxnaDZpavzV7XJSZsoRw69tWnP9BH2vPPcpJ5E7udYPmu3rXf",
  "key16": "5RDhqGGXyTLSdrkT9oeJTVJByMEvwYgnm892e7L3UUKHVNzvjn7YwKCmHpnChCChthz6tgB7FD4QBtxMcNRNFPEn",
  "key17": "2N5HRjK9dnbsPs78sCZoPMWGbQPZ8mkkroD2DbRebZiHnwQJcFDbAohEiaVggTfqC3fzdCho6TaWN2uTnrgUXnRi",
  "key18": "843u7BqNtvBGD8aR6CpJsyRJaqgwipqCAFSKwFfTTUpZN9qd5LShyXRKQdNCuWz11QtcFExBbZD7XFNuxt5p7Tq",
  "key19": "5YA5qgA8gg8hBgpchxbcb8nL7pNF5nThwtpz6TYttCwKkxoYoQyLQ3ZTyUtzB2y9ohmJzeLuqrAqPoTFNtAt6GsM",
  "key20": "2QGFnYoy8a75nwowwv2Cm6571pY4zosBsKMKq37Rgtb1ec56gsvxNEW1g6MwQmY65Z5v9HRkWwt7nCeUzJAcpJ8E",
  "key21": "4ju2BHA8cp3aPKqiEXajoZFZakPhvkhzUtuJ5kThi8jaqsrEPSVqBoBpT97tH2iftSLcbxwCzuWHeBaLPomeRGmR",
  "key22": "28P7oCGQt7pRVwvXmt8rCmJvRRM1f49c2vHQVsJZ52oFQ8YK1XnkQMfJ8p9yVHiutKPEYyr8QbfPhJuziaYbWdxW",
  "key23": "spMSSc1HP1JHqMmtgauwaoyxyx6RBjE3ApDgBXzkMYGZovSsxtcdrrEnh9VZu1G4ZGBkDGqiqF9SgsqeWTnCWzQ",
  "key24": "5av5w2nM9ZtpW6GPGYgh3dPMPvotXAXmbqrYtFGSGx338QmznzokEi8G36z459uQxqv9FqD6Pcz2Jcx3V65C3jME"
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
