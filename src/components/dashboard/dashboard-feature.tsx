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
    "4EYrArWrLbAhtoHJDpQN9tmXtdVSaTJPgDyLF4QJHMTsybsj9yjxLjWj3JsDvG6rzniHxmphLjFWHAXgi2F3MYug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uFdNZKe798UhfxhBGwV7gj6jUYjZQKgzphxHMRFktWDBnwFp6gwCEs7PYbXCud3RUqKHxaUnbiZQRm1kzUJbLhN",
  "key1": "5WsGNyHsAYm2aAz9erjs8ScgsX2xA4ibnqHnyhghrvZPbMwUhzypRUH8dzj3PZ6JiEZzLL45SmFyaTfPB99aSfLW",
  "key2": "5SDi4A5UfupYBXF2oM1LsTiNLevHuDiZUQn7RK3sYksZzdUYekQqKBqjqQcuaqdnMLgb9SagMgtdUPTPFm1ic1v1",
  "key3": "eB57SVgLxouYP4c3FEuD6VpQaLWuaDvkPYD6qvdc7YufuJWs6X4SipxdKUXdzX1HEmVhxN1jmpF6sinws4GMHKc",
  "key4": "nMyG59WjwzZSMoLK9p4FF6vmkcDdcpj81t9XL4YkxsgHxELvsZXk8gYEUcevVvkn78hUU5xAYfEenXeiNZ1axFh",
  "key5": "26xMKKEXfoHKPdXrWHSUtStFwRY5qxDc3CsAcfCsqdLS9yobXzZVQ4q4CsYWA211oNscvk6LCe4Rp4ikRxk2oY4e",
  "key6": "4bnwRHzY7own1RbGG87mbJTFKrwCBjLsJ6pmWsMKNmJ7pttTHWQS95XPBXBz37qvwR5cDkbTfne3NripPKrwcD71",
  "key7": "4aAVqwPMVt11FKez6USr9Dm6drHmbTxjAMkEzRrGXZVEumZsRQW1zFTrCiycHYS75WzQHEyopo1fPSCdm88dzniJ",
  "key8": "58omWRjdBaxoPeSskpjAqhexKnwi5ZpFooy4ASEsHRw8e6fC6RxJtWMq2JUJLq8teYoP1tqEc17qGCSXyerxSVT6",
  "key9": "k2vgqRtuUGEK5sBYPvnWdATLHB1hxgaz7akW6WjQ3UDLAmkw59EnDNYFWnwn6EhoCJtszxxy5a5j82gmTVQrMvM",
  "key10": "2tqJ6z2kzTX64s4dCFrSWnSzn6TjvB1f1SBchq8JZ7885oHFQtTGe4DJLda7YHkXcEGuWr8Ct7n1PHowb2k9P2tQ",
  "key11": "2B7Sxfq7nV3hEJ4v7u4t4aEFpanjq7rs2cZtPB3WLDnk2CZK5VZfGEPrpVb9dxtPXrmpt7V8nn9m6qP1bqSRbhjP",
  "key12": "3mpoLGH95N7TdT8z5rzwWDuE19nG3cx6f1DXuLME5WRPzEh3nkw4GAr7wYpw42BFahYFzQDtPD8aZrUy9M8GDPVj",
  "key13": "64xEgnhvYT14Mhxe2BVWxbeZT1cCgxfvGcrCGs2G9CSTfqx123EM61K5qfFJSXPGmTE25W93scWwMNdpjAhfkzyb",
  "key14": "4thfai39V4YdqiJzgUWcnPuFXLqCudWWdhLTSh2p7o4rgRjQb4KfXCXP1LfxE6emALXaadMCPW1WiZdRwVUKpjbJ",
  "key15": "4CC7VUjA3v2uDkJex2mqpLkGu5F9Zum7B5f1uMRtnQ99SJ5Nh1gJznYLLdwoe73c78gbohPTVRXFZTiPPEZ5FbUv",
  "key16": "N5y9LF8F2f1NhvQ6wavqfJXUwo369jVtkC8DVZ61autWzuQgE42kAFafudQPxyoqKfB6eKXvdBPDGoS3mMGrRx2",
  "key17": "3f76zFZBeQp8rsD46AK9zhHogpp5uz54ceE47it7vB25fgxJgffYBL22xC9AtYJ7wVb55aestGfV4SZVUhvD6rwb",
  "key18": "uJKL5YbKCJTLDxbJwie7FFbntjaYudX8ZuJJxoFvZ2oeZskYq61JYsqomFH4qQAyBvQvYu7ck5peD5pNze7Zdyo",
  "key19": "7jyLzTxSzpWYnuaCaTk2Y53hJBjFauA3ftJzwS95utGuiaPkygroWW3WQqUBbjgsU51CoDFQD88oKdwZjTJkdbi",
  "key20": "3uRsQMN6dCQV1NF6X6RtFQmPr3dKGMfyD9S7CKcht3mEBUPHehfwE5HAdjUsiud5sYLRbCuYiLzEZgPwPU6uwsET",
  "key21": "5E3GhC5gqy6TnKyyarwCbBvKxheiLNf8jzTPg3fR4aDNkCM3TjFMSufTYQY5HpqJG8N1ibEnZ8APix5seojiuBsc",
  "key22": "5cQ5ZNgLXQEpV1LbSvEPJ93wYHGjCDbozQ5eZcjaiymNthvhxjfVLDRpopJmEfwpPycW2DAtKMQfWjks2UjrP1Yy",
  "key23": "2rCUjwqzBU9S3SH4fe9np9RKzPjhB9Mv8rsTRJLK5xnB18yDNWQmbAEGD36mVvLx3LaDAsm4BPVoDXYyrbCX7oxd",
  "key24": "4xgiczkf9JRrSRp4XTMvbCjxs6RSyd4k8KVuy113F4qgbkBFzmkXYbHeQBoGDKSh26udc1JUDepAZyBmHGEoFf1v",
  "key25": "48nJnSafVRKy7mELdHWuoQ25MehPT2HHV4EBcpzJWfs32P8UP3cKj2trwDWmDQ2icjZuEGBM9EtUqde2Bcoi6Qrh",
  "key26": "4QzVGETVXte3gATD8Z6vgvzYEhtHfS4A7U9MCaNJmMeM9Koxoiqf95Qc5DvUSPRdny6k9RQ6JUXAC9fnj2DuJiNH"
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
