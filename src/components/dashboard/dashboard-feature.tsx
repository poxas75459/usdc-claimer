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
    "5FFpKQ1tBwZy6T3N1mERg8rR3zAwHMhnFum8bUjEcQ3vx3nhSpBmoYzLoTZXmhbDjamQZC8SQtNLn9EgnVpbLHgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ivHe384N3GSYsX8fwAPJugzrPd5gAjtPMciyftfkpJbkYhAP8wjWTnHF8RCSecGj3xRn9JWQhPhVhZjZ6rjNmkY",
  "key1": "2ZLi9fJd6ARLfyYzqYeSwB19z1rx9vo1Eqhr5d3UUs32iraeYrkh9skkMH1BryE3vLaieYtxjNpayWhMsNUjaibL",
  "key2": "46AUzoGy3Uv3Pqnyw1EHHGGinUX12sbDMNQSDpMqDf95KhuFdSyTyHzrtqsPkNRErZ9oPEHtMFPgGRSy4WN1XbLD",
  "key3": "61BzaD19KPz9BykSmmNrkVnU4qFRzZSNJmNLZJHDtdFgNtb2MAzpkocehJaCFhsfQWsvcvea7HXhEzXQZZDLdHL2",
  "key4": "4bLrK4LahuFpFYfbNzBfC9GRsfVrXm7EF63717oGmJ5GjCURBs2XmxW1QThoM16kb2a6zo7g7TLtUoxTS1zUnumH",
  "key5": "u9SzK5vbkSAcoKUHm7G5BNLoPJgFLWWwSq4yr9dqLa6NmPgvh76rsVZuAptBkgmh8i2hZana3H9cUcbrfdJG8oD",
  "key6": "5RZYXC4iVNjtrafDDcf33BcARmwu49h4MU8oZFeZRDod8b2uDks6uHjBGTKQ7EfvsFQHVWwLbjznYedq292Fxm1p",
  "key7": "2YwStuNRhs6ubMweH2ogZfKSa8QQbCL2ppbJkJGn6yucrGgQrW9fFcyFFjqzCQMmXqNWDcmHqszczTq3scmyV2Xg",
  "key8": "5T38xNMDCnzRdRWEDcH68r3BnD9mwn3huhpWvY9Hd6G2kbxNgiQ4xouhduXvNoN1oaAnFhA57kjRS22moQGGEjx2",
  "key9": "nr9k7LsY2KjCsMFBFMognJ9uDqjVYdcksdcmaa7XUxJmrhiKye1b3zsupEuixKtZgdtD8vU3x3kJL6mkoQK5CTP",
  "key10": "5FaJr98gJdG33AYJjLkokr8ZS3JDWNcQp9q5Gh4vvgchuKBtbRGrcZfgAHRqwwhcWU2GTQHTXm8KTkTE8s3hmmtz",
  "key11": "55hPsK2aU9G24Gpz3gbPWCdiXMfi5Hab12rX6zE9ef2ZmLGBmgjiCWWz8VCouT3rQH44RXY75PmhyhunECeECASZ",
  "key12": "Z97EB13f2vbHR5dVzTKBuwSKRBuxVcrdaXUJz67nagBqJpsh4uv5WxbTJ7C2rz4GCWxoW2hRzKJuNHuSQUigji5",
  "key13": "2B8LtAMvqLiS9U9GP8BFiCWdQxnsj6vdpVKwPi2EojeTFqYNAqeaHiwCzGC1Me3k9TA8kyyUu7c9vuA6khpyML84",
  "key14": "5cD2jQxe34LZ6FZfKN5iJzSXgtTXwVLZVcXmE5itujzA8xRdevCujuPkbEHabg57ALC3fynnJafSM1ecjqtF7roh",
  "key15": "nHLSegqwWAxQyXmSXXarYAJ61uv9WaPBQcKZpn4737cN3FF6r1vYdNnqrLaD6cWpdqQeCUoiD7n9RLMkkTKoeUq",
  "key16": "2zjqC5guKS4JBMhSdmjpoQnPnzXrze8DvZTajKxN1hDaMS6YkqGNpipCcvCyRgecwgRYr5eLg2kJwYaQdUTBS1P8",
  "key17": "2jF2ErfvpJy8vk9hqCFNv1Ca5GN8v9r1Ve19K1Px5ehbeFp7CmRuLrJYjruvcVRWRKXSoKhDaGb6YNgxkChUPY4m",
  "key18": "33rmUo4UDCA5v5qVVV1hY5oGGhyrcVPMJZ6C9nDAvvcXB3m3nEHzJ9ozSvDW1Hi6h3jXKKgUe5fcDTAqPKLYsni2",
  "key19": "3H9T61WhTzGmtFbtqGSogGn2oRHxdidKeMQJmAzGhWf4XSMVDVJmgvk2kRzFXrdYKaGqSbNDiSWQpFK6SDrUgf2j",
  "key20": "2Wz9wTvCL1sXHwdTj1B9i6s5E4GDt6Qw3NayXcz6VFLFpqYRvkvbsFAhDzTtsSNJi1wiP15iRUnZ3NTdA86uZuZL",
  "key21": "2q4XcvBRS4K63YQfWHEw9jUZhrm5wdqVfSG34fS9bCRmuMFt4dSUhkSNFuNuR6zkiP1JWdTuVyvYpmj3KaLpDYyw",
  "key22": "tbaaA8CH8tdnHWt9aBMZWmRmF2BGoyHcJYSeSyvh4g1VF8uXYKA2XB99EXcFT17Nyc2bknRPi3XKn6E2WEY2LUu",
  "key23": "3yykAwd9wve5RuLdoNVXLKgyffGRUf1KFyz8cMnKcfFEqKS3HkMzkaFJgfxMfeTvRchhz1cqKqc2wGarv6Pbrfw3",
  "key24": "5SciAa6HrcM77PGmzbu9F7tyeTXKfRMztH1wtDLJZskE7aYHeVHkhjs1tmdqnqcwqECuS39bvmbaso2s1jdJkDof",
  "key25": "tFkb2rc3sSyhMiR8k1RYfndRQY53wbRpmAgS41nfZXwH1aZA3LPG5EVnuyGaNTcfdv4wVjWcp2eXVf8XoXmBG2n",
  "key26": "4WJx4auqkjwZWkC2j3mFd5LTjjEPbDK2hmHkPJYxRK6K3btiRGXYgWhpEhp5gymTKm8KUedvDpnhCFikwK7n18Yu"
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
