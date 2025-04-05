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
    "vbNHJ2Y2UCDHLwsvy5iEy3H2hnsYy7pkzcCd2qdHZ155UrtQ6k46WwdA1syi1Kor3Y9P3cdF1wWQXhs9j4D6xvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z8tivx6tu8WQTdTEd73t7HfTsdUrYpyCkVP38aULTzfTWdadQtJZciRP6GCpGjPva6CXYSHZshiqrkBL54bFWUk",
  "key1": "QzXXUYYTzqDmzTmcaAZAab5h1EwywLsBEUoyVKbsgbHeWcNdRRnLzNb1KpXCxLsH1GBJYknLaFEv3juDjDiGugD",
  "key2": "5MyApaNZ78uLPjhNgo3QT36J5ieEXHTshDXyDYzMxnrovGpgSouN1E4ZV1Vq1hvq98wxEgJyZHQudqeis3mEW6AW",
  "key3": "2Tnx2bGingUgfFVYf44q6AM7829tz1nofQYT4qoNHoafgAE4BaijywZQaNS3BzWpn7TgheCCR9Eib2Y3KyKmEoRJ",
  "key4": "5ZKceAsWNhi1SAACQKKNkxviZ8JVbhF7nWNbLiFNp3q5NfTXo2PJXZvprm1VU7F7JrKxdG2ym4Hoa6w65ky2CKqx",
  "key5": "32USGJwimjZNGKRHSEFqFPY4dhFQ8opufQR5xt7vmAxg8aVPxuJdzVt2arT7u4Rheoa5TKEyD8LpwuudB7uQ8Jtg",
  "key6": "2D7H21PY3HVBjSciB97vFBFBCd1KFNiUb5uRVRGJzQgJ3hdBPP1WCBnbbwXovJMufasvUnB4gDsbQydGYpMQo25p",
  "key7": "3aTqhmwqLqnfPdzBBuCZYcBmnnSud496LKCD8Dbdm2fYXq26g7iJB5aBjFXacwwXQyoLPuUV6bx6jk3hiQzwynM9",
  "key8": "3Z1mi3Wb2MrysVSJw4r3S9BvK3A7jH3t4MHUwSJrAvX2JHhcpPrAnK7LkbBN3Z28DG824syPoitKzNwPMbM4Q7gp",
  "key9": "5GGJUhJLNyCo2nvQfHg9E8TW2H3PtANBmZQ3JmejNhtguT2an5sYm9Y92tThMg8XDYJb4tXArJmoT3hivBFHYpc1",
  "key10": "5BcUfB8zNgHM8dSfEupyD7Xs6nUrmiw4PP2gb6uVBmtKq9bt9GC3pTXZAmEz25TPgwnmvMvDLZ2v4TSFdVaADKS1",
  "key11": "2t17GqCiNcqN7zjxoFTgfUEB4oRFb7i41GmA4gZHDLWXq69RksLp6bzAbDa6zDer4sr8wuQ57B97KUpD7TXZxsAU",
  "key12": "rS4ocmFQDLNX3daPYiZJsLBLs4J3vefRmv2kmajHfbh2w8S8iaux7po46qEokf4esoRQhxTeL1zQDPm3CwFbvd4",
  "key13": "4Lf4wNxQ9zYyuqnd9UURYiWhSBnFguJG167UHEHYNgwxta3BB8mVVgx4D1N1QrEm1m6RH7r8Wukej1jdMgq43py7",
  "key14": "5ZSCN4jMNYeTpCa61rmyxKe7oKevZAGJuxv7Lwwse8mg6MXF8DWMD4FJdwKAaZYgDKpccdDctcuQ2jABjGTJkuCk",
  "key15": "5R6zf5tFWNJ55fLWdytP85r7h3vVMDXjcA5dd1GnfhVKb8jMGiE8N61z4QMo2er3KiBvkZE2zyWAXDGLgCeNpW2y",
  "key16": "VxoSdZtY4MYy8Wep6X6zWsyPfDjRJpW8ed62PG9hmaG8LACFSCCxaiA5VpcbE6PfmepneLiu9rkeahacw9vMz4E",
  "key17": "3DmHzXN11Nf6ifdcZvRRsmoKpB4tToUs6MZhW9iezC2oYGjxyndQ2NYZPWWdG7o8kX32a5yomuefE9R55n9dGc9",
  "key18": "2Mqkn3z9s23kyZLBySCDvpih33k3QgczTHwAbTLT9HBsQctotjEPaXDw9xXA3pJHW1r395SN1FhKvm8xzvPHtPYQ",
  "key19": "5v6Aef5QzdFMRBM7yTBgXtdCqrWYM8c3HyQQUupMqyiD79h2JPt13s6L8AS2LuT1VZbykfK7Hf9t49nLd1uDreyQ",
  "key20": "5BimfA7SbsYA8moCNqMrdEhNRBe3NFL8RKmh9jKfRfEwYNLkJCrhvVim26zitFXrpnSym1zDGykzm9HZCSfmvbTk",
  "key21": "5RVHaKdHBXGny7mjpCDc4WHmvgksiCnHUF5TnKsqHuSKRAywecGcMjX1Trx9WjuCU2pPgVFa2ChSt5XYVrHexZHb",
  "key22": "2BCZ8PuV5HbECGG3MLc6Z8HLtKjWkRbgMw5YdAKrnCUfG3z5ymekaiNPpVQCnyZiaYJZRWgNUgu3tEbb4h5U7YBY",
  "key23": "1wu7Q3zkup8oZ2mHpDmDgMTp24YsgNjRqVLNB1sgnUgnZrgiVxN9opGYej7FY4QEkZPAHv76Y5cqa93RTV6dXGS",
  "key24": "9sqGzdwrtexQ27EKLTkxHsiegNtmnHNMqcXgW1FoJr5MGvbevQCwEDKMKjT9o1uE54jG45ggPzBXfSRBxokzfhV"
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
