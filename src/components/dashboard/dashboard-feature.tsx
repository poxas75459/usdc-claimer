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
    "3pWWTPrgN8AJ4euRZfR5obzyAkvF5qBBKatqhjVyAtGMiQktDe6HwaRC39xX2SGidvLtatgsEbsjyQgBUoZMd9yE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53XPgZhPBGekwbaEhPSbR2ir3S2o4jNLZC7t9DwPFBRCgaVwYMNrdZnfDQ2L9gPp1Jow4eZ1hHQcarfqPkgxiFp",
  "key1": "3HeYvWzFpV7RwXpgPQSfLV2ouyqhfeRnDSmCLJEq6B2PgJS4jH5BkgjDt58fvxRMtHWyCzqLzupdpcGXHymvBbTe",
  "key2": "2KkoGXcawZWEPgjhxnZLmpNQfdpxLsueNf25Gqt74XBguXntNg7gWuDWsDSUSfbeSYPTdACti89kJg9vopjqb8rr",
  "key3": "e9yYx4Vi1CmXVfFyfGS5CZ2LdnHa5wLtWHycrfmRqGaPi78RNEpCq9ARAgjhZ9RNn9WUKgvhjukScygtwsvGLiv",
  "key4": "3o2shCZxQT7XxTzNMpeVLN1nR6eyn7m3fEEeA7Uj7WsFgjMZNzQnsqaUJ6arjB4hTeQ1h6JF732cPKkVyDzn1CJ6",
  "key5": "3wkTG5kv4zvM84dqT1wVDuq2EB5VXLWf2ZgRAjLMZQz3x5Bb1c4L7bRCR7kMgbpTxKZ75jLQpmMUdeS6HKmjg6gq",
  "key6": "genFutwcRG4vn2kNGfAdxLSDyJTBkdHAahLFx5wps46WRmpP5DgUvntdccBtDrRfHuyJSaQTF7dJhYCM2C3exne",
  "key7": "5mrj7XeVUZQniXWBVuf5wZ8rJ7XesZML2c2xcKe6PmG8r1VrKyQDs4hPXchJJHyn6rgz5GAr3vf2XUgnPSqarYLb",
  "key8": "2ggaQ6xn9ihvnxYiHupC3TgZTTi4VC9XBNR3xM2x2aKXTvUBCKFryzfyymzKvyNQFbEwPBFC9g2tqTeMQSXN3Jhc",
  "key9": "61WCyftYx6PhHKoU9XtrLFdkWKRpsx1r69zesPrTCHcsobAw9wLmM1Kmqs5XgfSNXqehUryAYdVXdwvMcqSPejD7",
  "key10": "3tKHgGWrEdLXonrVEstGpdhkRC3HxL2GN6QfPuHqRBPmi59Gvc7YrZG5p2EoxjWEfJeSkbS8MYjX5fYM5MsBh33C",
  "key11": "44Vq1wv2ZK73Fh3Sxa2fcakBG9p716EWqn18tRRLR9fBkqYSLWT7uFK7DbfbEbRPrWHFPH6sbxiVgYnzgMeQeaGo",
  "key12": "2DAY9nVrZWwB4SB19vsRoSE5fNUQB6CNVYPkqR1e37tsvyCBc1CYSpopsQ89VnQ4VYGtARZ3LVp1qgbzUk4Mg9kX",
  "key13": "fNeVmgoRX47zdxL5W3BCnbaaui7qGotF51kc7X8WTKtXQ5stJ6qfcTe6afCXUAREZQ7WEX1SrvnjgEHDyfErDCx",
  "key14": "4kDMqkd46DrCesYWsC9JkfVL3asg8TQhBQtqZsV2xobNLUEBatarPK5QohLcBEnDbFHY81UrRN7ydgkHBnm9MYLk",
  "key15": "226epMFEfCYV3C8uoo8GemMDnczMJWk8aVCjBb9WHaZDn6YTCKDHgRgUtRQhRX4jrzsDykdz2sPLPfd2YyfobneY",
  "key16": "3ZbuHw7uc32TYRmi5pFKu4vbbMQ62S1QpnmAEuwHD2eerE1FGcXqNtb8KkZwveLjhaRr1PWJ98quFHUyN96rWcE9",
  "key17": "2svCHHgw7BScGxWdMS8rMmbniYJMrAvQqieQZFWmJNEFkVT9rm823pbaRXE5qiDi18NZwCevZyMP4B1ixN4k8MtC",
  "key18": "2VgCUJQZaf3HUgupz8e3o5bwJuxq2smoYyyVbdHMVgtBX35fid4RLvT3tTBvquvKViuBeMnPd1AdnFGUPTxzu46C",
  "key19": "XkRWvEa1UT5FYHkNiJq4GsfS5ypxYHgRZ6cmQcxqjCC6dptV2Tt4cmaKSLHbctCYYAQBzgRzGpas1wR6WWPmprg",
  "key20": "5xQrBv3BbewrG2nYYrY7EWw2ryqhW6Q6g7bzoXGuRoP6fM1GbjGvy3ReXYMUZbdLJ1Ju4n5JR7fL5KH4tczYyzwC",
  "key21": "3MR3LB2GHGB4xQnmL61y3tgJ37MHidRg7GtChQHatPG26RU6QPweHNBwbtgDrwnXucfyxjpYVbFbnYEaHBbkGg3J",
  "key22": "4YNoXKpRKvtbRUe9BTLo6Dv4k3h9pRyNJfvmtvfEP8X4QeWyx18W4DojjM1ezp5oo5TjwvuNjZsWHK5He4cnA8Aq",
  "key23": "3vjGiC2KszUDXUVRXDbjH9JteG2VoJpNGt24mFTYxQSi8nw7gHTKb66jHBqE979MMsjEmkAypDG7LfRfwEuFsD6V",
  "key24": "21dbYFSrSpNYN223BFz76XdCXjSzdMFYYmmLwXwwMkuBdAPtELjPrRpL12RPG43uCC7heWQ9J5Ygfdoi3s6dhB8C",
  "key25": "DXeJFQiZ7yGRVkpyNtvQf6XXpBtg4WbXvHWimsQ8kTnaS469P2gdUvNQq7VXcz1hA8MNnopPgWzH5SjoAhnpxMU",
  "key26": "4kHnkvM6PVrNqt43G7AxGSGZGaxubVceSarKebV1mBHxDbyky4N9CU3PUdsD3fB81c6fEqqxn3pGxHbVwQMMi2en",
  "key27": "4sY9mYSTSr4Ari52cv9hXpZMyyVdbNDaqoDo3JVXLrZGFrSrwNpijopMCVwTkcTB86n266idMuCpN6MdCzravD3c"
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
