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
    "2PAy6bS3WPnqKaM8mF6hFaUnQpghK47yy3dBXdSojesMbeAzk8JZ9nkoKAr3g7KyRbLwBmtW4UqmJy4wJ9MBWQEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NBmHSmWaPTWY2gMUV5WKrgfZFcBA8u97hoUuUt4W72p4Pry6g97sEbs9fs5RWLuU4kMSWjigip1HLfHzJ7KjGBY",
  "key1": "5uE1Ax6aczWVbxsNebj6Z1qPdn2KYnekW2ZxCVoAJtWJ8vkWhu8tFdW1KJRm48sgdCG7eH5WayREqA4bUKWddy2h",
  "key2": "2B8WogDsG4i4NGihyBeNekt7t9cYurPeASb6Vaf5Bz4YJqBfv9WDkgoW2M4mSb3Bc9P2XzQM3J8EA7J4p2u571Yg",
  "key3": "2ZJxHK1YKyLbxgWZpLSiUQEtnRubog8K3JHa4TWCrKPKQbKpuxopvSzdqfudTRD1J1BGnFF32Q2fwHyBxoUpqWPD",
  "key4": "4GegwuQyPm8xqbYASu7V2mF7bx1fqvcoPzn9vKiXnzb8k3SWaGTPfCGoBx6d7XFLPg2B4dB6FuFhCvZCfrdiagjK",
  "key5": "41YLpgGA6Wwa4xy6ZMqwUdMHuKizUA5yALkwTTMZPDU4Q1Mgoq6UkUihPKui6azB5kAWWfKNuSXPJGX3wJxzsCe5",
  "key6": "5CR5invSzrakxNtSZDNbawZEPZMzGwreZ9WFEbw24UBYyYMB4HrAk5Fb2zqx64dMgPRmhnzH116cvHaKKCsxzaid",
  "key7": "2LAHtgPoaupJpaTw8ifd1yuPytmYmEXZhbgGsRzutSTKaPeWQWjumHugJvZwM6WEvXoeUaXKmk3nVMhFV2aKWhDa",
  "key8": "2pRaGeDWNVKFAhwDhwV3maaAheBbmA8QdGsPmZGoasDFqYz3Cy9kB2evDr2ZwXBVKTjBA91RrgfuZTWgQbeMLzQS",
  "key9": "MfLW5JCPX8SCnQ4e1NeM8dUWQZmzah9SCoRWAjkaTDbfKPURyvEKkCu6D6hyZP8KBanzeWGRHaR4beaLa6qjDfk",
  "key10": "wbibzLhxCsS4nVrVayeMPURTup9jnohqe52uFSioUSngpsEMPoGYmzEpqqMiiDqgxEybcyfxsyAKGPBG2ze8huB",
  "key11": "vTCCs6nXRwGewwzAqRkVeoCLU5FbGPEjkdAuCic3oBrEymeU6sXm7bX81h2tpjwy8DXmsL4ce7LDY5GnJRgiXis",
  "key12": "63t3v13kpaGWvbu8hHCeAPTMfCqS5FiZxxXKGJ86Uqp8KLqDgTk5UK7fnNbARcXUkVFcSRh5K2fn6H3KVGK3SwGH",
  "key13": "4Z2vdHCbqzjokfWbGzAGwEoZ4sVRUmABdEu6n3dAcfQxs1JSexg426QB1WpWuUpijFncrtWqEdkGLn3jzQRTtu4t",
  "key14": "Zbihnz1xhiuTJfD9sVGXiMR3mTkRXasVUCF4EKSVEibAdzSKsMxE2f3PDdDaA4XjkwqnYgc7zSUECWWeWkyHQbc",
  "key15": "EGkrocArfppaWGeCKVz7AgTxV5gYRVFAmk1AFLqWGtDr6e2bnpWu243ppBx2U8i3BibzwFrp6AN6Ur6Zwfciqku",
  "key16": "4uLSUvCNoYzpj1PaTSq897to99DyTTJt71Rvpjv8d9jG3pJdP15mgN14BWSt21VxrTuyiiYhWcp2gsjdp2j6RhjT",
  "key17": "2FrEuWjq7Kcguos6qQ79zGZeuB8vgELL75qBPf4ppqo7Bt6SBfprkxoVbJ6ivEu41Azr8koufj2C9i1pEeMRqDar",
  "key18": "pFM1nU6cG2SXK3VkaxUFKQyy6k4rqwhmDRuX1L95Va7ppoPHKjeTpRmgo5o3EmpMVGfAwJw2JGuP58ZqY4BGYJW",
  "key19": "43yKnbEBwTyZU5mjvDm8eLv5gXgZ9qgBp5CEvb7Zw9u9kotGM3ENuMMAhXK5G1FXEU8EsajrF6dgneVTephq8yQp",
  "key20": "5BLRFowDYNUniuYHWwnwcTGh6pzjt3VNvGm6EPrStUXuX4ZTpuhxmyxyCPNA2dPS1aHofbZh1XWy493zu7QiCTh",
  "key21": "2uRusQCggZYDyeDU4VBVGQSuYfoYr9mZtKVnzZPPi9wnDmDGz95YbXPDgR9GZM542eRsz4BuHNFrHyTcrvUoTpL2",
  "key22": "4sryC2FqTrtswYtiaSujpgsr8KJm3NLUVZZfXLY7pv134DQ1XXEXnsFXv7Pr7oNpa9DyL4FvZQsASh5CTL9ZKwkN",
  "key23": "4CHjnXGgW5eF4iJFdiaw5MBjJpgjUQ6c9i8TXNdNSyKAQp3motfUTpA1V6aQAe8zqwz4u8XLpttKVfh6j43wAqP4",
  "key24": "32fGNkPaorNcSrrRJ53tqE7Wq7t5mcfZqDFpH7fe2RQVSy4DJ8qPsrSWWvA3mAi5LKFbL1krGm4cB9dm2vjiSQvq",
  "key25": "21Yhq2LgdksXets1r6Z1ccVwpWiDcZQHvi3tJjWRyDzX5yzuQRStDv3JEVHJwHtuW4uJotyFiMxBmsWE36QL5qFR",
  "key26": "4snH4kKebWo2odGWVnrRZZTHoN6mRoRKACKXMq23fryVLXKPMbuNmLnoJNBhzKbMx3DNYfjJN6sxxvDV8UoM3FbP",
  "key27": "4c47osqaY1fZQhwqJqMDBXi9JtJh3t4DHBPBQwEyDUpNMUCPkSFZfAUrjoJgAcE9dSeVFDgVofeXwdhPHGLesXf1",
  "key28": "3baahSVDqWHv6moo8fJHDVoP3aCzuTHUqqqjF3YaQbRCg5gQWXjwBEUZyDhZMPQhMdTRbM6BBmETCr8yazGG3s9f",
  "key29": "5Sk5cAJ4sKJrAYxMyhqF5vvhovk6oEoupU52DL4F3WLgmnNQs8iueDD24X8MPoKTs4fTGDKh13i8UqdD49Bo1ica"
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
