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
    "4KvVVfEMQMzQ26q4HoFxDVNwequFkGt6MxRAPBD3tsuvRdscvcEE7aCn1iteqFnDstusnWaxgFv4Znri5QxB8Wx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mJLipa8VApuqRtdZpmSqe61w9hiH18R9dboTaSLd5jMvP24WgJtSyQ4p3KQC1tBVtBEZiJBUo6BYNFVyb76K3Sd",
  "key1": "2QUGkzawKN2mREfqgjUrA9A9cdN9iaxAyg53PCrGK2kpf4ere38kzDV2TQ5RFA8nS4GsEMG1uJgAtzbuDaihCioz",
  "key2": "39C56p52Szv6F7PqeMjucg12KGtmGvPffk8HbXyc8JBv9FxKGjauz8M57Ej6afyFE1g7nnd78NQR9sV8mfNDSQx6",
  "key3": "WtzatEqQjpHMaFFJCe9fJibYB4McMmjLjrN6tLFppyvC5XzzZk1MLa5j2pR29CJkGTgNDMLYimonBye6uff5Xey",
  "key4": "2aymNi5xcptTZV4UtQK9FhxuMAXMn1vDX4kHSmRq7j1pLW7xno4xtqC6C82cqTcbJhm2sMjziUxwohZEJHE5cww7",
  "key5": "37EDQYywN3LcKhGXPXhMAAn37jgCga4Vxn7nqeWqeLDuQiAxgybQp3stv9kgK2V9QTLWxfhYha8F4XxGQ5xqairK",
  "key6": "3owQBcGeu45Xo6hWSf5tvFiK7y8geKrm261hPN7KMoV6tvdzQJG63KVWrAAgcC7KMshcDza1SZD6tSKL5h8fv8Bx",
  "key7": "5ebThQvBFLj6Vx2cdq65MFSEEfsuBzTWtYibRS5y2RE3RtrY328uMG4B1vFXBk1Zc5ZtWeUAThnJGkSz86AkrhGg",
  "key8": "7V9T7ujZe3EppqZ6XGad6SnCYdJNksTKQTRczh6asWdT9WpMuQDWDArDnoKR8w6nDLArxozL69ZgWRvK8rmze6H",
  "key9": "49d5xDwLwREeMhzF6GpLGaDcrmcj2N3n9tKSZftrqkdjfvMfACRCpiSQQQFUEHnRywWQLXQLmxi3E3gQ6Z1kmGaT",
  "key10": "63jFsj51qFGp3dfVbsZFThjv9y2FELXR9Zno1g4b14TE1JpH6BNhe8MMBQ2QyNLDufmg2T8noRfpmc35zBQAFcvp",
  "key11": "38Tp3PXVufGrPiqyFuJAbtGkieSZ4Gz1nJaapj8kG9iJAXzpCvrMjK47TiWozgYayuq3tCeNTMGnS4zB5KUw9Bsy",
  "key12": "4Qn9CDCKFNWhyoa3vxtzkGwN38rWeLSjEegQhCjTdax1qYqvktTZkWYEmWs86EJovwrGXj9sDtjyPde15FpMKUp2",
  "key13": "4To6gb81bsPCLJ4aFqJJafDVAcQSF3VPbqWneyxaGFp3RTx1USTh64ksea7eBfaSMv9V6MRph4bcwB37McMupsDK",
  "key14": "2zgZWbPMqRPgDKVGkLgqzWVfRhnG9RbaoxYPCFXrU9WJRstLhkeu29LvBZQPsC9buEDLxcPSLniEon3RRwGWmKcU",
  "key15": "3NdMY69JMMxsW9Bv4GHRLnPiGYrKX6mrErRAJ3fiTEiPFtkFWep9YqB8oZ93PSFtHBf84xPrDuEwTbdP7zgx3U8m",
  "key16": "8b7CXzo2LcMVXC3HAaBW6StWEhAeCDnBMCpyngsjjxaRC632moBt3RhnAj7mAZqTZUckJrHyoA9GTAc2JcWZH9S",
  "key17": "ej4Wf2trGsEWEweMsNrNFSWihSAFUatx8U7eZPRWzWQp19ABnSxnM6WRR99peB1ASJyTkRWK5YKtxZoxHWyxRkQ",
  "key18": "24Pc3Fwa7HUv7ngFfEVEZpPo4uB8L8EemznDJVyVNMV9t4TJV2nThUwRgqWQgE1ZYGQ3tE8YM4wzQCP45ro812Nd",
  "key19": "4FEyHYE7MaXRR4UuqoiKigvSAzj879QfAt7XQ1KsTjR4TBxDXUYAJHnvV1VZd89SaHU7ah9NXUhySY84WXRebdU1",
  "key20": "5MnD5yAgZmQt5weNVotWBomo3i76CkrEFotbmcqyaS3pRGcLdmcLCfs91rQBKDAYdv2GUBE8eZDbJ8pxXbXKX5qF",
  "key21": "3ihxLHCu8qU8oU6W93nrnbeB9Bj3ukuaQJpjXFP82yt8vhTzq4SRiEKJR6XG9Nru8jEEq8WpiwrJmNQdYrHiwmKU",
  "key22": "42Ae7WnmRm2XYwPzxQMez1FCzWhX5r27Yie67VwNjPyaKmvzJJKLJRT77kNDTBQtAjCxcBUDm6fJEwtXMrPGZQt8",
  "key23": "4Cue53YKnmuvLd3RuV7in1SW9ocF1r3pTaL3XPJDppMUdsHnZemuFcpKUGAqihgCBUr4i1Ht56cuhChRwiUvJRQb",
  "key24": "4mVmjywAdchebpdfPc5ZNL4XtbUApmrZVQC6CBCVstnhSJLa6aMDiSjDserJMJDdfwdP5Mutr4NLANudNywQqdLb"
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
