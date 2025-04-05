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
    "2Xoaes1FEtYLcAPs3LpGvdXS8WyPsnBwdSXK8dyr8bEqB3dCZWYunJJo6HfhrMMzfwL1bD8XhX3Jwd5smdqE2183"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yJVMhfS9Hh7v9sSN4Qjadv4hFyuTTKUueitQLC6dhULvYeqUJhEb2cNgjQ77PPcEYTbd8nitXDNw6aknb4Aot1",
  "key1": "35FfMPzgZQhPP4St3i2vs15azy2RKNHBWRyJAHQwuhpDCDGd5CZt3Tdsndmd6eMfMfe94gRP3kspxeZtvSEWTjb",
  "key2": "4M1XAUDBtKLqxVSchqnP9DxJTFVzcpLZmxhkdRimKH1bXhEomUgjNDxdR9TqMtRVJAFM9RxCfdGxSthxqS98QzvT",
  "key3": "5rxvMuRnMhdAbGfDK68DUqfvDfr56pJFVosc24etJvBdxvnpq6MrJzJuxzg1e8SdjYFwL5wDwcavFGMpmAj9sssu",
  "key4": "41KXH2tjcsuvnc1Mg1djifmHi1hc2KyQqEWWr186b3Fnh6MAJhAQWbqf8saHtnvKiqqWSBzMqRMov5GVXC5sh7La",
  "key5": "43SeAzdat9ztSfSkww1Ump2RyFeuXPmCgzq5XoDTPZ7GdAt53wGBXFeYgN6nuHeBvz3Py2sTnVApxexhbxb56yaf",
  "key6": "5anFDwCasmH1yvJ26a8E99xDczvJJ6qrZLqcgihGvgMCGzTg19axuoxuxCofeHoeGWeD4SSeBVjerkBwd7U4Xb5A",
  "key7": "3jo9TSryBFqkwjWCBaCt1cmkDadX5AN8wLNfTX6EXiDya1FstCBMLxuDUNHHYHUVcnNHEWQ5TWHsHgkmtYn58gFp",
  "key8": "4efyxdSAuTaQqsgPhzHhg1aQD1Af86wGVm1bNfJnzpz9jDaBcfczxgSeKEEzbLvN4Fata1h2NbcDbQTsQSDmqgn6",
  "key9": "gtTkirTqDEFRhZcrLy6tAWXqD3zNytdJPAZq4xaY4YwpxH9tM1USKkePaBaQo7wN2wx6Y8QsBLQYGziAMfJHJ3b",
  "key10": "4shQowjshCMAj7i68p4HHCsdwLfeJH1MyHnPfg14gdkNJuKPZye7SQfCh8M41PaB1ZEQuWJ77q7PxBJ8LfiRCue6",
  "key11": "DiCEEa5RpSZkfH9kwrNebFqc4pWtU8QFS8UomCEBCrXQS7hwyub1gsPRp5woJoVoRfZLdEdwbsyAnLgfZM9reX5",
  "key12": "3R69emzsLnD6vWHJuRtbSa3YtgbqpvzqwPcAdSSDDAucFfwdCvgBqsvDot5XySEjogaoPTdtmKbBMeKqo2FkNPXu",
  "key13": "5SEW5GTyLveU7G1uv2KEMSHR7eKRoA3BsRQQbHDBVEEJCk2ta851NYPJnt4XJhuVwZM73F2DAgp95xeKn9b57iXr",
  "key14": "649msnpqYJqsAxia8J1n47sXEx4BK3UJuR7Hryr12cMqovEUNvFbLeM5DjeiS9zgTzfda9miRDpAwytdVfjovP5Z",
  "key15": "57yPWG21GaTpCyu9WoeHoZVKAe7nZa1PCvyyUMwiBF2wF4a7TGXrA9PFYNKSxWqXMTPAa2UyMBmW6L1KGNQoigCC",
  "key16": "4aHdrxkfPrr7Bwohdj7mBunTQS2K7wVnAMPis6pjHe1jPT6Y2KtMFpXqWyegT7aSbh2nTfSMUN1zqtm6jNx1i6Xe",
  "key17": "63paurqJ1esAQdon73dscoHP8QVbTT9pbWWM6ExngLwU9D1nowVswdVf6kDdfv59YNb5vkcLSs241Fh7jR7yFXxD",
  "key18": "5V9gJeEnnJKLsststu4GpPu3JStxWdU7Lzt4YAEhmKwBZSxyPur2hs41fjqisz3s7zYAin3ZVd1QibfhhXSnb8Ka",
  "key19": "5iw52pkMTjw45pzbEdiN4mxoDGKCtnuFJCzkZWKz8Hf1NauNMqR1RcuThHqUAQwaDYjnnESGR2FzSTamCvm6sH6R",
  "key20": "5mmaj4yk3PPsDzXfzAz3N7PgqUUXCXAgcyz3YikTVAqiKU2ur7pthGCRDGgbGAgGEFB1BzNvGbeZ7zyLVsTE7XmY",
  "key21": "3vCkRp6VYKpMTVvLjWbKqUJW8YzVNaqi9bFmeuuoSFMUHLxAxd8H1evN4s9mhEZKjL9xq2qmSr29hrSbCQBXLPSj",
  "key22": "65ywuMRr7pLLUi13dKESNmqtnANx8euTFnb3QH43K1rf2naCteJ8RY5sX7dgqzidtHhyrXWQZC6SXFd3JU8JWCtu",
  "key23": "vyj3jD2TTht938XUbxtQN3QzjNsUW9H7Va6rGaSNqukf79NTioDH93Hf2swFG1ugVUf38HV8A5rMJGTUHTB41dF",
  "key24": "weSjT2bcgijsy6BA8JPk67nPsjJ3pVqcY3KLjvLYJgM3TVT1nqaCekPfzKyqxUmTEqHgoMsyr8dq2Ry16m6Q9u8",
  "key25": "5dYZd9A4cQUCYUa33vjyUpz2jhRj8j8MuoZYV5a4mhtS4DQsuuD8JEhdBdqXyWNZRYkxdmFmNN3ZNH7x6WF6AsHe",
  "key26": "2UdbuBYMWudGF1snhC58J7nYGjDye92okNMfiEmJ9wrXa7xY4g1k5pykpg6EQDjr1rMkDdR33Guc3mKssrahmwHf",
  "key27": "31TNPzBNCiz5EhFms9pMDzFkyrLZPmm6CmiWxm2GTNr74xVCWi3imixfULHDH8ffK2YHifc9N7ZpxF88fUQhob64",
  "key28": "2ujMmkT2Z1HU8rM7xXvnFeGVAXFXhw5GVmFSvJrXqwETPQZGovkFN7PWQeTg53GvVw3WkSDnCaT9LVaVNiAoCeE5",
  "key29": "2zCaahwttvZUxZ5rvu6z5VABZd8aPvXruP9BNh84RVVfELTTHNS8ZeqSgWqM5KCm8hExh59yviF7ohDK2dAYdpRe",
  "key30": "5Cd1Hm9GTDNpRL9MX8WcdSCimFeYxpP1LGoUnKLMhdoeMLGDbeuHUWsivBY3FFctH6Zzef42jf82BogqRXB73CtH",
  "key31": "3p1KU6urw62GNCpzUtcSRj5mgbxehGreU5z9W7QV1aW1Ui42WAm9d3LAzJbj1fpNUSrHhcvjTceZ1zXDqFMepYDx",
  "key32": "4djZ7tuvuRt6Mv8q4RuthBxLLnxii98nNqZnDx4sDwTW7RF4nrcxdLPgAUw4vZXQ2jTW1d1uMGDrv24EAt9Y66So",
  "key33": "4WnSM928423jgGu5b2CFbJrc6RLXsUG9Scf473ZS6kqDMeDbY5iAzNiTQW4AszD7BhuXWKTFrCaNRXvAmZgUrzm6"
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
