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
    "2Lvx8HfATRLDgJSjkzMwHwGTmEKcvq9dzet5ftvX1TbAvcXx75SKU95H9wchm27vC5mwvY3dhXKjCAqPEVQHYTfP"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "Bzav2nZhxk3mueeGo4Jec9bMfZyubjZAARsyeofL5amHDa4n6T7AZw3WbAyPgMj2NsAwDGD9RUCDbgagp6iJ8d7",
  "decoyKey1": "3sFBfU4FLL5XebLH1xgNSiY41EpnUgxAZBkN553ajxdqFifZSuxQzQbmUqb68zFPLMojbZCLLzKgW73GPS5Py4Hf",
  "decoyKey2": "4M4gqeusKmPUKx4xegovYyPgik2p8UBitYq3AHPdDoPt269tCrDqX76CzCMQ97yvhAVRLDNE76RrxptUaYeWqyBh",
  "decoyKey3": "4oCQs1ukeANYTR9B16Su1rYm69VEpdwXuvpoJ5NbHb6SPy23o5ud635GrBDgctncmDnuQSohYPTRrUnYHKpVG9CL",
  "decoyKey4": "61KpLLtLwEdvEotxCKAkqMbyHMj5FUVsC7JYhERujf4oKB66n3uBarEErJSGqEMWV6aq86vbnpWqG4XJXCrXuTJq",
  "decoyKey5": "2jUFpoyMQ6s3dMQNEWuSoysZ8WUzxFv72bDMro3UYtjoEAENgWiFZq1a4ZN6nXL9bBVrjcgBkZy547kandGAkK2s",
  "decoyKey6": "3Zk2Q25cbqUmH6575QYD1LEfwKq4iLNprc7dvSvLUoJmWSaktc1snT5dEWVA2kwU94SgcYAjAytjBoqybK1CHkcC",
  "decoyKey7": "VkHyr7Pote9v8bYUWUtCvvqrPjqLTVZYFAYGU3mM4mTbruRZJJHf8qJF4MbQyMW1gEncnqn8w95R75t5Rz7D7ZG",
  "decoyKey8": "3uM6Ysv5YrsHq8JzUd8XctqvEtbiepJC5o4K7cze5FiNxRSvgaaNNaksF4Eo1V6V3QaxPYTAyaGpSRafeXjJL5fj",
  "decoyKey9": "2PFEe1F43ZVhb5HGkAuLD9tL2hHjukgdfUtPUziWoGqeqQMspxzxj8DBgaSCnxyyEicv9TmMWUz6bwmHkXR2v4jf",
  "decoyKey10": "2PKPM84ZRvaApZbKHxCRgGGMxRoSGbaLeYvam6w3nAR4eeycn8zFRW9CNYFTd2Vc7Mimy2NsKa7t8BUWfPhd9WN8",
  "decoyKey11": "5SBEXdyVU4zcG3i9DNk8ESD5LmfAbeVPoC678h5M9BECtuoW6EG1dvvU9Tc9h9Zadh6LYKbjJgsNkL7vauioWXjm",
  "decoyKey12": "4kRX2MKhTaasmGnYN53ou34iZumroVtqq6GQu1SY63BySnBPwpY3GYALGEkUpvqVb4kCskyVd9iMuWGzjLjxgiD6",
  "decoyKey13": "5JsZhWpKBjdYHXg2RFbb8dyHsL7BSkGgUNhJQzGucwgstRGJ9iKfb4WsAYbT5QVnzQm2z4U97UeyFSJTEJT4m4WP",
  "decoyKey14": "5KXTkLqyskePMhiUB23tJwTfhZDcJp7tTgRCH3jk1qjkmffXUifefoJuFnzgDXQbHNQhLg2B9iia5312xzxUUitc",
  "decoyKey15": "3MX41qwppgjUgUAVnYCuvqLQGbDXFXCfBSh8zvTyBMnKgtD798uYYy9WjEif155HoRdGwgasYpfYphs7yCwhWhzh",
  "decoyKey16": "5KVjiPPE71ocDqe5VSdbtBmQFMWNqSXxSJFMe3C9gfDXNxWac3WzMpkj4VpRfadWFLGgrfvC1yQHanP1aGWCncaL",
  "decoyKey17": "2j9d5xsfULc6R6pV4b4JmwrzRByNw92e7AdsYSm9v1pjzMSmWpx2fTqTcb7idVVwYaZKvPknt7qmszFMf7oDmjxq",
  "decoyKey18": "4mKGsoTjx3eba9q2RAKBXeWi7b1yHdYfWCg62WNeFbVVc16b6BffCVTkSR7HMZ112M6Qp7Kra4RSSe5LHe9zkKhu",
  "decoyKey19": "5hrchdrwpsGv1qgXiwMC8QJ1jnhNWWCBf6Smt7VBgUR9Wxm4DYqV5NF923E9bRfbQ7g1MntztUFugSiBKfzHMoPT",
  "decoyKey20": "y8dF9nqMWrhYXs7h5zWUcnVbEKubDQnVZhNhu3A2BgLpYzrEm8YWgzRJwJaoPoWQZCyusbUhjZS87fiYVSCuSLE",
  "decoyKey21": "2rEB8cbrCYK2qmJBEySA426RmhB1WjnsVunTV8Con3EpBVW94EqEYAAvnpvDGjtLkmmvMBbNgitSr9B1HAT8rsrP",
  "decoyKey22": "56zBUwWLdZ3KTWviehvCi9H7D8KFhfevhiy2vNRrnWN9wiz46UZqVAtf7aVkUFg8kxJHHPC8SzFDAhfzpY14tJcd",
  "decoyKey23": "3jxDQF8YUftoY5zzyUymzW4TEaYUZUZFevGuzmYAfLmC3kK4qe6YKMjdteSGxjLCyti5Wa1EEwEnocK1MDqxq3hF",
  "decoyKey24": "3ahmpof3nJGXD8MRyoF4E7otN4E6DdLyAitMJyVZGhA5yzAmfpKnm4B4jpMzsvRs9hZGPRVJBkjrYfD5ZWHgyEcH",
  "decoyKey25": "mnB1w9Ey5aHeqkQLxfdsED6c1RYYSn7Gp3sLKthPY4WdPWZxV7AaNkjagGGiN9CbbTs8MHB2tTeaiSiq1XeDzMV",
  "decoyKey26": "4CdjgkJVgRewafofZXoViv1FGxw7y1Rmaq3EgrJLvc3ft9pCqjRvJMofT6WXawTnrD8iESUGA3SapbfRYJDfBwzA",
  "decoyKey27": "3B4TzGujWHmxUAfuSPSrD4u6htKrgoFkwx4wPjnhx5sfws4uwHhsF1cHX4Zdhkw1ft2fqKuSzA1JoDdGz6Y5j1Ec",
  "decoyKey28": "3bRrcBXAjWehK31rVrUeiJaeU38PBCTWbD7ZxoE9Agz5AKD2pDcYBGBsagZD7CQ2NKEtqrCsFU1T98JJsSEzUcXt",
  "decoyKey29": "3LEGn6V4KYxkaW6et4Fg4AU9GEFRh23PWwXoWGWEzPzBoUwAAzk8H2GoxfTec5kTtiPDtxzEfM4QrSJb8QSddPkQ",
  "decoyKey30": "5SY19CERH3FQBCDAE54wpUbBYQnYSVaU5DSqdtEcdqYNUfXmpZSpQ7HkNcng4MGwZiTjVQwiqm7u61DqwsxncXoR",
  "decoyKey31": "3G53qnC76cXJ4CVfjeqYBKfmXFbiWxozn6FB3a2RCzvVJ6K8GxbUKzdCXif7UuAqmWwc9SJY1iQrHNxc6CLwYdYH",
  "decoyKey32": "383Fox3LrpnR7cpS1yNQvEiv8mDHxTcKEwUPrLKH5ovvvxuQXwimYdQE8ijiWTguC4M3WrKeBWogjwsFGPeYEoRF",
  "decoyKey33": "2dpUhAPKnRzjVa9YTgCp3naHjY2cZwg3nmxEMAyK82bohCKeXr5puFy23jC2q8MJGxUec2pBvpXTUwB4NZutNFbG",
  "decoyKey34": "3144ch82guoSNx3SAg8qUm3MSK3YjWAieDQNU1dLpATgCzi4jRxAsYwM7FhL5cRhXjHhYPHLebULVAhMnW4vgfXy",
  "decoyKey35": "4oE1T8fRyTJH4ybqfjDujwZTe7k3tBNUU4CCTc1wSzDJM6G76qX5bRgegqjeALbZkwnsrEwzz9B7qKyeksz1wcts",
  "decoyKey36": "623KMfzwLtgaa7dpkxEML8XLA4vBzNUaYf2Jp6KHbQ6Ugc2XW4EnJq8uvnCc7V6KrUKcso3aJBDHssBbjTo6qdqV",
  "decoyKey37": "m5i4iwecFeD2eAt56GSH6ZGMA3UoGpf413dcMz8q1y3EhizWhCg4NStdSjKco1iMuVwn8eWhRZ2EWse4DCY6qWH",
  "decoyKey38": "49smHCrMStHz42u6PFgyavMhbV63fGMMNrNTPGkZk2MCuMX2ftYrViL4yMMp2wiC3fiZrx97iMNVkZJhvsDzFQ48",
  "decoyKey39": "23CSRSXwBzdEUZqVzykMkGnduiCC7Xgk9VFHLAqgUJYZnToRKsdGahrho5GhTu6rjkKP1Arks8n4emyS6N8WAtSc",
  "decoyKey40": "65bbUVgRGV31Yq8uB2QDBHoaqwU36tpzw3ENdYrdgtSFh1yGvm1CyK8h4ZVQaxGtLFTh7zNMzu1UyMatViVSKCoV",
  "decoyKey41": "5zNRJYiZf9uLoRhKbH2mudVDCo7j2kvpZZBKfuMy6Uzp7jr7YEg73wudHbmELQCsauf6dPFoAFuMjfE2HUmLCWxJ",
  "decoyKey42": "5VDnvJUKJ15ubKfJcM3TBQ6d2Hd4Y9M2ChrdKsiSNFXmmm7BPPXAkRHGfe5fHBm9kwZSr6aD8C3dvgNeYfBLHLbo"
};
// DECOY_KEYS_END
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