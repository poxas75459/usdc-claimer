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
    "pAaENcN8RufuxsUnc53P231H8Pv6qsiJ1d3C1hbBDp4cPWKra2DsTsQdErYBv5rmgMXwnLf6zVuMJ2ULPBXcubp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QnVzoMdCRpWmbxsjoL8E3cPMnbqnugT9UzsKk9BTTWyTo9vnRtq9sgzyzkHqWuLYKLsgjprDc9Hm4xeZA1Vf36W",
  "key1": "2axgy1eR9nPyZm5rNRj2ZACuLxAzvp7TiBv1uBTMruu8xipG3xjJNzcW4bEogcyBuGkyNTjt7j5iVwuqXnBzXB1b",
  "key2": "4SbmBgAS8zeFnSXnuTBwicLSTjU2UGD6RmHRYf6Nd1bvG9MHbn4e9YsrSKmQeNPJ4ek3ZF99mQUWtmqjjhdtiUvX",
  "key3": "38tGyq92qCybbuJhcbuEKEgaxWSQG7FuiitNqNHbT1khwsYar8Ki8mZdJSpj4erkF8GBodEiHVxtKv9s2743RgCK",
  "key4": "2KEE62rNFzCwFovR3cv2MRaqg7ooG7q8T6GaCYspx1rKwMWhQqdg9ec72KPsmdidxpRLdrXZK5yygnzxGTFjjsxF",
  "key5": "3fgETgpZLCPy65WnHsPb6oFrZVcBurjk1rQESmzv7kHwc7MtaHU1FXFcsWgwoJhck9AaCU2q9gDpSBr1bxJ6dQ2k",
  "key6": "boyNJpRUgpmtD3PYnKJzPK7sCwjHrZfcU82g5VvkPv68EixsTU4oYyV8SHNgh5M1Lnjgr3X1nPBgB4ziukTaGho",
  "key7": "45e92amf2MBY37fjEETRAEDz2j8vPJzKbsQk4uqCD6RZFofH6i2jcdGAN8CnpnRS5ci1eVmu7U36WX6nzujWjhgj",
  "key8": "3oFM6dk6XQPEZXFLZapeUCfpmUozgRjWckQnYwbg9juudPMcXxHedaf2LqbYwZgHjhhxgbnYR1d2J9BSBYAs3QWc",
  "key9": "4zYHa17iL5khoukFneFM84dd8wZthfG4gbwC6CpaYA9VPyMzqx7o76LuV4k2FWtW2JQCFpaJofF2Z71i8JTtMAhX",
  "key10": "5Lw9zoeAKDfGA7YHgdSQ9hE2tfifEzkRCnuacKgJM5fLiYErcywj6JwAFDg289ct3EjnTez7nD1A4yZU21CaFmp6",
  "key11": "Qzo6bHUocm18ckqNFt876fQRf7fTPmvD167mGBFFnSU8uX8dUyd8A99u29qms5euCsRh2pvP1Qtg8tFXkWcPqeo",
  "key12": "4MoJuZRm5fSSjLhYY7d1jxgoVS684KcPMzkTBBHavd2uqsGjxhNTnMAE49QGHxHxacawB2NCBExxXeq1Am1DUnSi",
  "key13": "4Y9dRNhSyU2hwxn41w5dLgQcDwNCYFyUdEHDX9yVNZhhFs8NgoJ3pbyvQ8uvoGHm2JosUmko3A7VjfDAKWyj9m8L",
  "key14": "5NmXB66X15yxQ41qGi1weT3NbVHey4gwwykxn5v8xPsUuMJ9q65dTPG2X9BDmnFcvsSmaw7YE5D2gM9npppgzdUR",
  "key15": "3ufxgRyGecFHmmAwtce1RTKxwBiHk8LxUaLazAC3hJ9z1VvymbAUYDvyRhGGa7WfXWM2HRxHj7hxsMY8NruHHGPG",
  "key16": "54jtAqjPGPzSoDRLdpHva1uzLi7tYrSbMoMX68BN31tx87EprGLADFxYhhrdSm4vWQdTuAwQYCPLAuVy5D8BDzU6",
  "key17": "2RBPx1vHmyczUjG6XTJp4RvTAgNLgcKHMzR9ccN2ozPp8kDoTqwFTXFTW9jQfJpWfpCbpD2wqd2SYHPG8hjWrEJJ",
  "key18": "4F42q8Xd9WdtNXQUNbtsWeCVz5cXLsu6cksqXcdAWmdXjNFvB6yftSyWETwVWThrb32azeWwQoFo4XqDPFHN5M6H",
  "key19": "3pATsU1z47YHuSPRmtDdhaiBF5vAuGzsTLYNRHqaevhuqGNyrUCR5Ve5JZm3TQqqqnZKejBHAfQs4uowPvJ5JzQx",
  "key20": "5jGSnsdfefALyiAcywG9J1SVogYVd4fvM7WhNchtDQ633gx4qwPssatFhnMf7faEShbqwDwhL3TAoUsTtymFbTs",
  "key21": "2i6V1CePX6QEd5ZkoBjPWqeGLqzJN9E5dZBzNvMSANJ7nYnShF5qTrawqvZggSSwRddCxTDgnmGedKmqcBEju6vQ",
  "key22": "53qCVW63bDbKhKxHS3LaMzEcFDTNuqJitCtc4v6Coff1AZRNmq5NCRt6gaf6XqAXmXjMrbnM3smDSP9Gcvx3DHJ",
  "key23": "2Un4E4nfTFK29vRm6wnboR3motpjgcMSLADMPpV3paCELJMQyWXUgMfaShkrY4xpkzuNWETiJsoDTwws5m8A4gfh",
  "key24": "3PyGPNtEWqFFE6TX7PYgrMLLozc8MoGPMGELiHNs78aiTCmGzExLUe9qm4ivRrW92uUzfUr64uD92ahaRLPWBh9W",
  "key25": "3dT1BVohJScEbTCXdbeJzKtWnrkA75wd7PiCRWizpceK3FB3Hm7tdvCY4ajXZKvqLwJ6eYPkJobn4G1uYgXgDjCL"
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
