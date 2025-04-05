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
    "3Q8fM6ciU6kMk7dNapGZiXWJcGtW8uRccGJi65CJ6aPqQKrqVvDMJyR4f27dUWi73gJKHLpxTKSf6ruEwK1JgMsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MnP62fvt6kAX9r2vr2LKnM5Fb2TPmm6n13G9V1VGZxYQ9PcaAZKM5AwUJjLGWLtCTeadrqPuyR7MNJLKAy2hroa",
  "key1": "4Kcx18tBJRADNmDcAFzskhnrGUvWod7DV4qsk1TNgL4sRazhSnB4uaVHfxqiPFhNhCgw1PAERuysJNzpLpnxsaWf",
  "key2": "3CeaZttBqpnJBiMzhGUPhpixQakMoR5TLJ6TgCydxTv7cn8sUh2Vi63bs3SN65KxbXAtgwgC4YvaYvwkHZiEiLqM",
  "key3": "NJ9DLEKgSdpnHoeRpjegUG25pHHyYxZdUHbQubmnLb9HQeMgBPqdCWoRNEmrHLM3Wnv1yJJNKfoRBbD5mhojs17",
  "key4": "4QZHLxPBL3RALSrWAFmGDceaC6Vt8sWZ3sZuKssaJVkboLJCZHngtZ67Lb69z9iajGX5TVvbuRjYmseRXXPawedK",
  "key5": "4NyW6h4fmQyGpkGYcKhiiBfppvPG7bpQj9HgwTdyWB9uxaFHm13PjqV6PqRFULcmkVVNXzdViEGPJUEit5AqHu1S",
  "key6": "64G5kod9YLwCBd2rL8Y9AsLEisT1JtUXBjSn4Jz26BjAYgTMDfTKigZkkuqdpBSSz6GYywWsh9hvvS1u44uYbrup",
  "key7": "3vL9pv7XWqSf5NbA7gNeprEFVqrhT7YtoMSU23AYGJQSuhHg8cQDDw89k1mDPWYMd7EeA8TGboewE5VsyK6WYQqv",
  "key8": "4ehTK8f1ct7ox91TdTWfuHjKSNhBXWmuPupN29eofhasfYMPAC6daD3iWt7xB1SgvFcLkU4bpf9mtiZsPHUw4gZM",
  "key9": "DB5mLB55QxXqq7ec4WKpmuacsUJngA8CEKAkipWLTpdGmXkPMRoj8REyS7TKdMDyZd1AX6kB9h2akbjqK7uyZR9",
  "key10": "65eMbM1uLx6i2q9bEXo1nm5hZ8bPeNdDbj17ZEnkSbz85v9SrJe8MTbT4Zcp4SBeDqezY39ACvicDxJXFxi8pq56",
  "key11": "5Rpqx4P47FhsoMqsKMCtqumNWaVRu4zU8KvFgtj7CsStbS8u6pR2wEdvpSXWKhdZLJ7nAwMqQYG6GgGbsQtvVPbJ",
  "key12": "5vNxhmqKt6CTY21X647PLSWEcryqywvpkrU5i2R8pcj8jkdQov5mhpFfWsXxM8ESA6sYnJUHq3xr2TczUec3hgUu",
  "key13": "2pH7LNJ7EDGMban6EpN8DLcqr2beTQKEH98FnhsV5iMoyy7trPYnqMe33hegKnoc27h9iougkRZntVK196E5zQaq",
  "key14": "3xs5Tg9PwvQ9ZxuEwktyj5Zi9BPHTxaoNMDCHDH1ynaHhoDd6eHJJkLT5qQ4heYe93xo9ZxUCC1z3eWRSa1NMqsT",
  "key15": "2DfnR4raTZWoGZ3gPRo48ahguN543EvyjP38j1T7RncWnhtnVoeoyxz1DhF19rZw31tHD5WAzYP1gDyYAPqdaj2q",
  "key16": "51eibM8ZcUre9915YBcFULd6nMdY2h8mntCu31f4df1HXuN2ugQrVACB37vZgPDY46FETB9xUSsu8d2xKF5vfcmN",
  "key17": "qXVcH99BzaHhoKMHgykpn2kuNyQg27Wm8fdDL8i5VK8GyeDf75GgB1aX8xuKht9RD3gsVeEYLXjWRiFNfvDmHaL",
  "key18": "fVxcmKaUWDVRm4ntdXVcoGvT73FzvaL1dgtLRV19mbK5hbKXYmWcUR4NmXq4wSFqRn6vkLcv9Yxcb9XjM3nKhUa",
  "key19": "4vtioTietnjD66pDnDWwR5TE5SLkfqgK29AQtHFWhJpQ4Tb66aHndiwvWEds2TZrrcPTAtV3M1RxvyPxDA6ws1MK",
  "key20": "5zd3mHFCaERpGvwssMgQrF1sU5b2TTo4XCUFLXfw1AWaM44LDaqCrJvWBrxitQk1eLcFjgZKFq6k4zGsx3tEu71g",
  "key21": "43Vx12q9j7zkstNn5f5GWDtozwDgdXSqQPLW46Zh8EUDktUsHRJnMvtCFYvfMXEZuFGDBuYNvXDrsvGjr7HmRDg",
  "key22": "3sLeMpW2er6HkgYsVNvR1qhFhPJ56p93uZheaBwUKGsDwXHRDqZTiakbjUHcpQfgQuBVdejgKXdqXVU5vxdtABi2",
  "key23": "3oz9T4R5qY8aAbypoqdi12FssxGkxQenWPuctg4zxLg16MXH7VbTvg3dfhCxJXUHVnQLWqrCn8FupfHPerJNfkYQ",
  "key24": "2UkztrPUQ2EC559CaJtBWeMfteAhqmVnQt3yyn5PzHD6E5Fg8NyZ1EWXzrtFYoqpZHFjx2YWNfH751aR7uqCQ9Sm"
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
