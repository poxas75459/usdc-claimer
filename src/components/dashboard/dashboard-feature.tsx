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
    "483i5Uk46RahWS6Rr6EqqbNdgW1QSMXH15Jhcon1Pq8hZBafy9fYX3pRqYfrdsmR9t2uHu4yacRDjEBZaxh7Egf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ZZemApGyP6KmBnPj2foNLuhqeRSdkWkhEohU53KEjR6wcZqyBwMzfJAkJi5gW6VCvpAEHdpQQMqwCQoiyApqCb",
  "key1": "39S5XTyFqjzEQCguGQBvxUc2r5xmTDq17kBkE62WnUFgzSCt9BxTysP4Km7GRHwPzMQcFe8Fx1zoFdJdjENw29GD",
  "key2": "4B94wx3NVp42yBLFKLSUhEWy7ndfSw3kcjUvVSFN2gVA9ownHTNPfmyimULxwcaXehAUtdoiCykD2S3sd4izajAV",
  "key3": "5Y2SY2jfdGQsMBNB8JbJQe78uo358KLdFZwcS3E7543sZUWQh7cWCxX8byrC8i6cqVT6VNopEHqtYnX1y7cK3haP",
  "key4": "4wmD14q73YvmRn93necon5sJ5cvjC5w4SLWY6oTmPwGMdE2pkRbZCt8isMR83m1UfFSw2xxq1citLdxF9XGSxA8j",
  "key5": "317r3VNRgq6YAtHpVXnovFjj1BtRyrf418BSepLP6u3d4TPkjwfADXiwuUu4KBM9pvmF5REAn1zWF2wMdZDo7cmB",
  "key6": "3SMi2ZSRq3sFyHPh9VDRxXHNJig1ceNiWo7ac8xekHgzPkTouSBJmMGfHPc4bFrEN73tmEp3v3SUe6AN8zpMJCuY",
  "key7": "4xR6Gfq89Co9tr8kfbSt7WLKZrbouBxQHhi3SdHN82XYEx4qoPWxRQ34xmWDckTUpRW4tzmGMLjz5HkpmjJR4ios",
  "key8": "4UkomJQwFgASHUjnP2c4DmtHeNWnXUrL9PuVQrpiwnT2mY1m1njVuiUTrWseectAorKx8czvVwKpQwNqyU8VsWVx",
  "key9": "2wjFCgE3HhbC2d1Knj67jr6oL4ryFnhaRUjqgJMFpb2J2HQJZeDuUt5jWjES6rVVA1QqKuiVGHs9uXzPeadxeexM",
  "key10": "2jkxiPWWHqrkyoGNkb5axDHZRbqimXkLuXGBSj89oYdSZkxtaAj879mfVXj23ZjaB9kDUkKEQVr8B7vPTZsYZSka",
  "key11": "KUgh69Hfkb5qucHPwk57texMF44ifon4ynhibRKPPJ7tEe8quS6x9yC465w2gsyeZy5fbnpWeYrCfhHykWjdzFA",
  "key12": "5ibgCNfjYaauAdnfjFDVDybQoQYb7USw2wQoG1vBCGHe4j71BUQn52eVVRLfSgwqYoZqJkHNe6jWQoFbxGT7YmK9",
  "key13": "63MUCHAYDq2eEszp9c5UQep1TM6qX4eBjeyisdGsHi3eJWZ3XGgSsUWtyahzCED4ziJfTDV5VRomS2GjDLwSHHwU",
  "key14": "2n9CvJLnnwJp7j4CFNLsU3AEBU5cD1DHgSM7xHTNkvpK8EeTj9RNuaK6BTBavKKiUNbquNuBkv17ZwQ33sUdKr5j",
  "key15": "5kdvxsR6EjtDs4eN68qqdHkJQQrfKneX58tCZbdyec7S5jvEzQvWYr6JsAH9bDBoFwiakqVbaJpw45oZYch5Duss",
  "key16": "35Mb3aXyF86A8yHPgrtqvKtUoPT6ix8MDjeqWJTA6hrdGCcDEAxXer3TdtDdkiFHc45QvKUs6iV1isi2yscF9Eeq",
  "key17": "4NtdFYXQiowJRnsTj5dvzMMrxa2PV6BKT1gUWb9hxY1FcMsUceD15seTnd6NU8HSwvn4ykbc9MNrf6AUJ3PWvuHL",
  "key18": "2MkpDJNoe7eMVwjWwrdauHoSK4ELztKEooWF9tSBewYAY3jFa7JowegvGtoHKga9fiMmS9tc7tiruz82yKWGF4p2",
  "key19": "5kdGpo3kFV9HYTuck5LvB7bAvfjK14sdAp5wUBkyVXaLRH5ZG54Mr58fmCSgDxeupbYNmMGokfsEDZcNRZrPsv92",
  "key20": "4DSV6K5MwaCqdUnbGPUdb9D65A2ZcW8phSskvVDEeXYAYUd48T4MLEVepCtB7yYDfU5Mkib5SicSqRnPfyZmNriY",
  "key21": "5AMhj1jDmrjkZsuMwtUgfaz9N3DcJYU2qC9epz4oEdtT5ULvPocoG5SsiyctbQtgxo5cd1x1jkmu5ubAeHq7M4G4",
  "key22": "3gJLFUE7DrFDWVw5ntv2hYMxhehWgENkDXmY7bqM5FPhNDHpjLZYdeJQxpJmbSuHqispsUR3zhtnLJYAzsCn6FuJ",
  "key23": "3GTZfzGwMmHWFm3HcfBKmaqF14bJ6ZNFjXXLnHtAu8HavK43C2ce6cLddpcKx5wBgK3NikvWRpNcRZHq869VDvJ1",
  "key24": "3EkVaiatDaFLgPisVahANCpdRturonuBeHLbzWqxSJZMxbYPCUFTmiqZFbzXhtoTaoHsrqCZ7dNs92drFpVgJsn2",
  "key25": "2ocupJWV26qLP6A23zbkiDWBEjYki45hpphaDcF7ms6Z2e348padyfN84AqqKzXuE8MsSKLvkF5UaSLojgk3Uqs1"
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
