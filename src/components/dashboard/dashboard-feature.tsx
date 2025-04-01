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
    "4kQCFwp8Ph1BGjuAT1vVTeCbE7gA7rMYtogL9zdM9ysFyNyykyEb7c77VNuAvoQJLwTafV7EfBEd64Bej26t5euH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6tL26EfyzDS8yYUqahxqBapWRvviVgDQatnWaAg6sBFZw89BqrB2m5RkGbp2GRjyDh6bdkkbVZaZbab3cYqyD4v",
  "key1": "3wZdjuYowcYiMnGA8EBuAGqCMsJYRMSEavU4h2krYJq69jd1K8fHrA4xVH1p6njb3i356ggS9s53XTXwDDynsP7q",
  "key2": "dVmCNqUNdFr8exSVx59VUHZkzjiMaXx67Ki7ZUWgweiHDq9Ektbmz9oNMi6xCnXULjUCgaZMhZCe9dumnLdxA2M",
  "key3": "3N6oBpEcxEBf1rvUXnK73Yh1VwkwBjy1QVXG6L15Kd81KepmNPdL9ADcgczMFCQuvDaR655P3712zFVMyxujXKby",
  "key4": "4qZxnH8PaMcCatSVxmjm2kGKVthjqisWvRNWoy6ePpXbyqwfisyxbP4BKiswNgCXzzgzK1aZZsgSa76mVYyyuDXo",
  "key5": "SnpGKcwcYqhTJYTQHvyKfkwhjjtsAQeLmp6RxG7rqvppPxAuDwcF3ZirQXHDSu4Hi6Hcr4kq3Qe5y2yv1e62JqZ",
  "key6": "4Mp6q3EMnf6P2BNcKETbyqjgQp7MVED3pocPyFsM3sH1vWYvFPiiVDmSzY9umn4i4Ri5NcSuMqMHyRHrimKeczjp",
  "key7": "5boAbQsyT2oCj9Wqd9LbxMqgSE6gGjK9wSRA2ACbfy2qrDKpzSkKRcXFTw53C6vhwbffhcb7MdtX3u5pkrZpn4G7",
  "key8": "3CutgVgtN4CrUKWuj8sJB3cRkzeLqz5SP8acwc9z6Z1yEZMTZPeD3LbsfWWmKnTz3zvkZx7wcw7Hs77j31bcMhdM",
  "key9": "dfthQo8FTqmVHH2CCFnoGz2xBAmtwcvuoMQn26uDdhxBUvBEX3io66o3LQksN1e1iMSHbKwQMs34cg9kLsMRSaW",
  "key10": "FqeupvqjmBKYq5anPk1K5HVqVMriVp8TMvQp2UxM9M9CqUJfTfYzv4HNH4Lctia52Cz9p8Lf6C62Z2uybF4WS4y",
  "key11": "53aWFqnVkv3B74uLqnBz5gFfLbmd9UxuL2JSybuYFba4DsL99C3bApDAsULF3WmJ2AyZJ681FxaXMfaG2fWjY2CG",
  "key12": "2Ed1QSR7VbgTwnrog8jqFqqV32egbmNhCksLFAyUQbrN1TGkhKjUGDzS6cJqMTugV489yF4ar1Vmiwagcz9VQPLA",
  "key13": "2hesWYj7vsJ3eHKmDQpnF7SgzwQHrEkYNdZh1GnfNkZaAgwu83yb6RNzLUAohjrEuoXMYLoQRBhkhCCD2cqiDQHK",
  "key14": "DHdJ5JhtMnpkHCFTFYmw7d7FGic7AarUvNbaiY9CLunGFBRADyZ83yAZPAcL5qSiokxEbwPkSk5xYhqvEsz6sH9",
  "key15": "BUkUUS2TqMto9m64zvFQehaNu4w1t2c18XQtGxKmQS62bb4KJtywt9yySvDRK4ZPhciXcaRqwphYPwHVzJbPGc7",
  "key16": "4oocT8wNdCJETovPnX6h39rkRfXkppQGEWuMApEwoVyz6hEXnpQf5ghcJ4n2hFSyp4kGpawQ9uPJ5odojDnxpGN5",
  "key17": "3MrG3RZ4VkYnsNQ2zkLsCxhdur8ZR5jv83K4nHNG45GHWjjHx3baDRQSnZkyNcEZwGTqk8QRRHr5rVxqbn6rAGhP",
  "key18": "4k1gBQD6WaBV6L4azuAj1qhTAnLSzg9bWr9eEXugZy334eXTDSK5C732QgVJrVrkwtHSyLjNnYM2CDv9ykpWH457",
  "key19": "aCWErxfabUtyDKRWh62tz3BVHMn7iZeNrxFBRPaSb6npBaytHyp5Moo42pafnA4fie5jApftuM559zrfEL6ifgd",
  "key20": "5qN6xhUGJETbe39cWBPK7RkKgJfeePZtSSz9GgRcQ7dwuHxB3am4izqx46ddwJJy3orb5vTd6jUjtnJV3b3T3haP",
  "key21": "2Vaom2WS55ticVgso1NSFvrU5qxtaLYffd8uWeCquNBTkAfoqRedhYKKVuRAYjhaFaxJigYdxDDWJpj6T8A151SB",
  "key22": "5A2mP4FiH2dWgHTJyAX7km6Qh3Yp9EaQzM1ZygrG1BaaKtrDdzuhVBEYw8zur68Qn9VuHbucNruDE1oQCLZZBQmH",
  "key23": "5GWYXUYtDwXHPCWHpUK2eX5nmp9sKpX5eGxhJb9SjFdJfbnDxwF9ZCyhjJkiupfi6JDCZSXEoSZnGyYHdRFj8DAb",
  "key24": "59uwUyXwPnMPgjMhtX8c86u6YFU3Ut8tTTdf7RneFrsCdWaudH1jExSLZSzoRGVAtv67Z1c75HFybfAQPbURFwtM",
  "key25": "34THuwiMY5Mfk2j9WYkc2BuBg5NKFdNAeU9fmywedFSuTKueRTvqi7rqYhzMzqFBZKkvnNJeweTPtKGgkhiQncZg",
  "key26": "zcxVfiETpwFQXL4jJpbDsT5e9fA4Pd6sZu5BVRoQNNA9TTkHhUBCJWiNGNvaHstJoq7sW4goFnjzeEnJ14mnhqi",
  "key27": "3kmjmFPhrUhKperYJ9K5ZUJtaRZAxK9viXd4j1B4Ke5PDXPcnbdutPfcRNHRKE6ULmjhWg6poZiCBXMyapKKdE61",
  "key28": "5PyLaTYLM2XJphuEtaxeMeRygLx5FDDjvjQDyoLUhA95q91Awz97dWW4bo7ddw42w4S6S9YCwV8sTXuo3Mzu2NEG",
  "key29": "38yfQ2WUmJjfygGnFk1ht5rWddfeTy4rZN2eirX6z7gtZC7wcQqzgAr8MSFjsXDsFjnk8KDdUQLjZF8nvViwLqiH",
  "key30": "3TseytcYJWHcdWcpdxazL6aaRHKjbrTG3fvZmVcCnnkdcKss6m7g7VYsmEe8KnSLv7qfKPsdYRbQcFwsDvo13PJU",
  "key31": "3M8UmNayRc9oUaMSLn6g9yokjL3qZ72n8BtSK7sGxd1tNP2gHzCkf77hSweRohDtpZyneQqL5MBpzJQDssj4vJzu",
  "key32": "2j5nvuLJwAzH3m5MvHNtSLWkHwWb1jFM5XY3XCMKMBgnj9RjzGMXhZXqayVGxZQaM6QxWYePX2pEsQN67ay4fdzY",
  "key33": "4wojcPEkh7kgainLtfwappkTPLQiX85BjsoNM7XxxkVYYBYM51XPLf2mDDRumz2XQgXbFBdrwArLYniMW4tK1ATA",
  "key34": "4wiyk8JDao7S8jCjKx1JGVzPyWnqpMRASZCH4uMKvcNAfsNaXDBwYGoZUeNY8q6CvcEMqrTacGch6wWZ1g2NbMQy",
  "key35": "522ZjTfjUopPUBJEuMkLZ5Jd8YE7tcSc26hsAAd2s9uEHDd82UkbPqyhNUeLY6vCQUQf4ioo5thD51XEHtd3D6RC",
  "key36": "4oRo1WnbhJ7wN4r5cXaCz4ekKGsZoUPxURKPCm441PVs9hi71Lq3b8oNBqhPhAxo733QmUXnrNmzLgpQE25YyNS5",
  "key37": "65wBA3KcE8dW6KXEy1Z4SE1Wb9ryhQXFwDSQMWqnNnKGmxvxwSDN4jFVFXwvDmQzUQXPUDvnZZmQQsL8xnJQzp1L",
  "key38": "3TK6GzVvgqn8irr8qjGtNn4zGLPmzxDcpaCHCAtreWtVcd9qTSr46zMLrquf8e1QauhEuidcQMnQq6hv8VjqZoz2",
  "key39": "2vzdTTa18GqJZHK6wjHDQw4psMbubwxxGyMuQAPCzQBWQ4mSVajCJnTqTDbdY67stvao6GxU5pkMMJVQJYhTFXPk",
  "key40": "PesdhUTGcxecFsPwz8sSEtZympT2J2jbUBoF3P4QngPt2UgFEK1nhYpBmnri4ygtf8WosKZLx9EqXrXidnD3Dz2",
  "key41": "3ywdMBe4oD78gnzLKnNpbaPvTrF1gx63txECmo2JKoQeBkrgEXJDqh6oo4JPLAW1YfrCQ1rJipuECeZq5xxEhsxM",
  "key42": "4h8aNorv4CSScJtLxBL8kQDL6Ffepf17aoH857c44X5VjezGqbyV3AdbfDPLZC4rok5JAAe1iW3fbzTgyjqUCLBf",
  "key43": "2eSTfaXF76cjtNSUiCmQFBqm2n9ajuoctpAPqSMPzWn7u4a8v5yLgcwXS5xtAVsbjDFx8vwr7vKyNSTRCFjfmpCU"
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
