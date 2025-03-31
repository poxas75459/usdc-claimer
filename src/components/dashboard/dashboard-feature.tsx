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
    "3CXNP9fPW8WeoLsii1YPcd1xmnoxBTRQuLQtGJ5ciQpidLuDtnabr6LKNiuheZdk2T5g93PHFEtfvNJxwA1u16zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BLkpQsPVKQ6pGxbhgZxTnGwvFK191DdFpPndtxtDNEsJXrcRKkzVVwHDc2GFCrqgsVn6KHxzaRvXPodPsLdJxT6",
  "key1": "sELVzAuEBPnED18QeRxeWwbBDjGH4Q4Gr3miJVBAwT3n9Cm1WbiHDhP1v2XbNK6P6EqsvEUgSXrbn6FFGB4Mffb",
  "key2": "62YVLTRRpvwng7TmJnX4HfpS8MohWbBLLm8gZc6xbghqFFmoPB936D6VLaZbbDHGQE77S3XtZFda9GREuxNkbQoq",
  "key3": "4TuDDQPuzn5gEsynT1Sp3dWxzi9mVMgNC5ndqz49Cv9d7R2wmzapdWLwNfZBawSjueX3jao2sa9Mvwbt24cMgPkP",
  "key4": "4LeHGBbhfMjNxEuPccffUz3Skwcjpie8TDQvAb7rsBqGLhjN87gRAwH9WfaWUH9yPkox97HwiLJY5yxYRtuPsKFu",
  "key5": "5K4UWpwhpFsTmzKDjxgiPEq5Lm4mp9R1GJ3hygfJiTnVZ8m6pshRAxcerYujnVoYnRECYwA9H6h1hB7deezWpmXk",
  "key6": "3iCkp8Vmc86iijg5rR28BRckrUpNZwbnbJ1fNbk6Fmr4adNwCnjqvXTYNti7toDGBGx1x68aRYcy77efAXrDHtGX",
  "key7": "2bJYS9DRtiJ6ycKbZZXYxcb5cQTCgkxMhUDZEpzNokGV3d3NZ9sQyqEEvpGQryC5HrSAda6g5RfEXMzrS7onc59L",
  "key8": "oasu6CFG2tG2ZKrQo7Ad2f9BeMbC86YcAcyzJKaKMDYDH387qX814b1cc1LBm6k91V4SA87FRPGeUz5YTDsmyhD",
  "key9": "3L1axTL9HhnGYAiVSBNZz3BstvYdD5Fk4SfUGHpamLvaKVLDbDb9GSr48cWV2GLB13uHu2thBo84sKzyu2nUEp96",
  "key10": "3XtHCTFp8RBXWsEMJskWsbAzXLLKHe4FostxQcKMd5U71XFQQ3kgvFQW6y1LYxypygG5Aic22Hba1jUNArZwVmNi",
  "key11": "5EYCybjrgVUca9u77gYrQibiWp2jLw9pkUVLSwP1soQNcsZwLVxqQHkGbXp2bR51fN5R1AAXpsMALuqRjFnrMsDb",
  "key12": "3jt8ZmXbU3ZdmnJ2ZnUeMtKGXSYRCsotUwVBFPkuLXBiXda7Cf38tRnwGYgzMYXQaYE8xmnZ5MbBAuv6qZsJ8qUX",
  "key13": "3LxpYBaK3sYi3kmUd1ySgcmDcsYgPNkZ6BjGcNFamWgmQo49TmNBoZumnoUAVvqsWkyhcrh4tBJkMpHUj6WmkwN1",
  "key14": "539CXhRJSwTWe5PbLJXtVYMfT6qjy6vZy2Lbo1RBgCEHYtL4SxTpgKgqn2AoATuDBRfbGpnpd8ZMMVRXBd3Fw1L9",
  "key15": "5rTzpxumPTMXz42e9DMrHZLsoajmcrV8hpjteA6XrjPwfymhLF9uX29bw1qXN48tawDpSDaJGi5DyNjKBm1yoXVQ",
  "key16": "5J2ocEmd1UfJRcLF3tD2qnw9ksgkqBvsLe7Zkd427HUQrQwkMxTyAb3U214pad1jBN2FkXL2LBJePd9931xsW2Fh",
  "key17": "Kk4mRipocqYtF6NdXgdyGZBZv2FfXqxn4XtbbiqDxLzQeq4NiVULt8AHynf4S3CAfABFk7hncxvnxWUumWAJeGx",
  "key18": "5YX3C1jpYeEnzf1fD3CDdX1gnrUVwksBVTEQH8HvpraBtAt19wu1bSq5bnjiw5j9mpuJPp9bePcSdn6pewcEEm6M",
  "key19": "29fV8pukYkCoab6TGqF6vEYkUJczikKUJg8UTu5cVDxLhgWhMp4PNfsasu27RUSZPha6Q4kk92povj8oXPiiPJjT",
  "key20": "5Zrb2NisLQBZFEba2k6wRBK2vcuhYPR1cNGr31hqGvwNM9uSXjkDSLJx2yXS3dFh5CaVjzdWemA21hBPSUoU4ZSE",
  "key21": "5aFBZYreyEppk6r57fr7TQGeAQ7AhwadAhhipdscgKRczjpzKmiHHe7XsgmeGLx59kfvwGT7NydwDzCM9GpVQpFh",
  "key22": "5NzAvBqVDZWFFG3bSjmn9DgZk59E7oYzg7bd5tWKEvwUPoa6SdtVrLDng1jpXxGqAeMvS59SEPjNb6zHHVst9Vv5",
  "key23": "3phL2BHTkkd1GmKBsk89EDVcN95fApETzyMwEAS7ZHPW4dqovbhpAZWvT8Geup92KFVjTaTqazUEukbCpMDpa42S",
  "key24": "2ZU93B5arqftR8vSgfEBVhDhACaa4MEeJvb8ax88efCVpDnW1XoEJZDPjvBnWpX8rAAosoWHxZBxPqLhgy2CDLjb",
  "key25": "nrtd3KPwgzDWnUTgWauQW3V9UZbUCvfTuDfcKqeernS2dtM9LzG1H2s5iMeSd8DtWrGkQKYJ51xka931A8QVMHt"
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
