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
    "3hv8wnkMtBWvGmHowcDu8H9MxCwLGYUw4azBcc7G4S7sPph8zeha2fco6rTYz2qNv52GLCcuK2qQ1i48FjWnr2AQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ytCCWWY3wQoam1P2AJwATEgqsfRgHvHQj7vNwh2GeCCkVtRbSmFwp91zqaQa4hLcRWsYd4GrDaFhN3U6pMBLbRv",
  "key1": "35QqFRXfWviAxuDQ1vbe6pZSPoApquUfgWDdTintS7mMfpNvyTsWenNYVx5jHsdANaB6h8PXZRyfgiHn6vpbidtW",
  "key2": "N6bWDnxuQ9gvDsGwmnLE7mqLrRh65Vwm9rDN3GQYr5SUq57AuoiyGmyh1sFvLaSjXhf8gTN2MxgAAhgRH14uXMA",
  "key3": "3vyJ5C9vsMV24X6HdYKJJ9916yWJcPiXgThEzZTLkj8r75RRBhjFB3MzkA3AUdHGxPbVLsSRRzrEszfUGojqbL9s",
  "key4": "3hFULXy533vx9pe2sK1ar5WPSwqmksPgNe3GvYewcUFYpdTUZM5tq9pQZF1Le2A8UbvBmWHUDZn24iavNQhXxbUU",
  "key5": "63ds9ZJXNG3zDa5fn92QZD9aqhuY8SHwFmAzUYupGVvQYfca2b7kkvEdtEmZPHdGjBrx7Je3Qt347Kv7E999c1Ri",
  "key6": "5VKJ8oAf28xVNgoTigGmrrpNEdv6RLYW7vsDZHK8K7xqRX4ajLGvhaofuCLjDHUAgRAdsPtBJDtBQW2wbUnRbPZA",
  "key7": "W3ncpgLcMD61tuz2Ry4znVoLAL83u1oFGsTsdC4DtoFCgyP42wc9Q169Vc5StQULXu675XVZJas3TNQ2atWAj8K",
  "key8": "58FF2Nn77fcQx9moXHQBytsX2Hbg3AeeA5s26RvSDKqLKP1NPoQLsNDApLgKA4xpZhZQzmtsBis49cpXBQqWeeGJ",
  "key9": "3wkP3HxTro9194m2P8xwyweyAaQXNKCGUGZmKG97CgTqVDo9xf15r5theY1pYjipoBXCj5w4RnzYgo81XQS6ueZc",
  "key10": "3PWsFxQBPsJ8geQXoDeYatij8PQqpy9uh4befzEWxKvUiqVD7XiN622dHH8Nv2AZZAajXb1xB1d6RaTE2M6ktf3F",
  "key11": "35RGTbtCh8LzzpnR6EuKERHrGwJXfV3wkFVKGpCyrWjdrqfpgYsiSQ91T6j4HR9CXxFERPDb8qBxRJZh2V73MNd4",
  "key12": "3C9iiLuX936pyQWDYnGMuVqczppjvaGDRswnrsN7nUWPNS55mwuRVuDQqm1Nn7XpmEgDoHVpKgs6ynySidzs8kRu",
  "key13": "7TTxgg1hERh5EFGhvykBQyeHMmxKutUKFKTMwE9AcbVDvXoMjN7YjE7YKUVwk47ZDKneLaXbqXdRWYMt37SQndi",
  "key14": "5fLuydfkV1NAWbf2MRPkv6F2dkNTHAnmf6ot7Ci4CDykqGgJP8zPBKidV8wucbrtuSFFhCRay6JWtNiJicDpRNZu",
  "key15": "5VPzrBeP2DHwz7vfmowSJp86bkeqheqLNPVMEASmQasjXh9nx8mzAKZEwrGHfGBSMCBAwx4pKauvC8HTjJsXkvim",
  "key16": "EBLSzKkvTBSzwAt2QGrVrt3DLRQc7EJBKPSBo5PUF4yDuRa3RrJrYPAJwShehwwopyqdPVz3omcUiBUpr9Daqb6",
  "key17": "5CE8ZqjaVs3A8rfvjiWZiEoFF8B8ot3yvnva51QT7C4p9BFfp5ySWCQ5rkEMSsw8tYSRMzDu3waSJ5h5hxiESxXM",
  "key18": "4TAuhrooLZjwaQYsqLVZ6qbehd1g8kfSvfqfrwC1ZZ1y6qZnH85BpYc1W1nWCGtB1brg86wxynuCK1uiKthGKtr2",
  "key19": "2uxzctnRdEEJTjNW7my8iqabYoiAzQVTwTkjtru13TT6ZvvzFNQFcc3WqfrzEpCL5R9cf3cnj9LfL9VN4JMRTcXh",
  "key20": "3Ekt4egPfFJCmyWKYFmHVaxVjwfd43dp23AHGdxEfUjvGXnCYAEfpRAVZeE6dJYugsAQuRzagtEWzT6mG8rfVQp7",
  "key21": "4RhvNhrA2HUnNzUnz4JWvQYMdPzW7W7dabmh2eEpMwemRTGCwBFyFxBfG55SZe5asVytW2LeBAUbtEdRXmorAds1",
  "key22": "2QZkofZSbSzokm8C9Xmpznm4bMJSaaf3pAamMumAye7kUzb5NPuhBYuff9QcBWqtvs3rn4BpfaXgAY17AFLxKxDy",
  "key23": "41TtbLyEkvW6EBdrbuTn4H2shwVTVWe9fb2MFwLr38AfBVn21CXu8Xu3fNi2Qq3EsMK75keLEd26f9o475efNmV6",
  "key24": "3P3WqWMmEoQTVL7Eas9bZDHWs8tJbFSBbMo47pytwSgoVJ6aDihFCXgVqawe6gp9B3PRveNTPibxFcozf6GcSux1",
  "key25": "5asDw76eA3XJZwZWQeaxc1bjaWHpwiLimzAVEzdpkhS3KX6SNSdz1FJjQZxhVfm5Qf2KEJaJjeoyZ2XER9ViGYgd",
  "key26": "3RW6MQxmY5EkVdjJVB2kMoYNqikXGQveiwoCTgxfDq1GEkmeHMCWye94ATEE8xWPBbuP3s4Y3dZRJXQnVNBhwKvY",
  "key27": "ZwHRTV6Vxq5Ae7HdL25MoB6MAjbixXxozMA7vtHiG4CAUxGGQRHcg4Kya1mg3uTtPL4M4nDFAiG7kcjNvMXCtP3"
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
