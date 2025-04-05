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
    "2XbmHP1mwomSErRHiaXxqPY2WdurYL5J1QWqBEPgpvfBuaVQ4PMcxiXN7Ar9xJKBa4iq4cPfcKGCMPqNJxoyzE4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4px5wgLwAe3oNwEbYyyQGMoAqGcZRW1QHZX41nvWNJGyWfBf9oZyiZcs2HagqCaWsexwVFCoNb2pnyn1Frr3NTUG",
  "key1": "S4sqGa7GM2jG57pshRCvWHcNKRgkRfYiaRDLQEuz2P15k8ET7uDf339KYCCTuCdMwL4wq3LF1XUxtjac6pSiR3Y",
  "key2": "51oLdyM3NUwKVDqqb75eEUw3xrEcKoADYxrgSzUjoj3hvfUoufTowGnX4vRAmQF6QVBm2eTnF7GhABs4vWqvRS24",
  "key3": "4vJyYwGGKy793q6LpXk7S9rk2aiwDoRSc533m7mEbJKgkNMbhWpWvuyoeN9HVHLCrq5tEuczdPGRJK8en3TrggZN",
  "key4": "vgLiHsy9LXXDFqvZGX42RFkdy5TwXvdhj4wgkntkdm2XUcQ9cW73bhrqNJt4VkUmE51nfE7xNGYZWFDcy4Ce9W7",
  "key5": "2AR3m1hFvEiJkkRTLdmmjkBngtZ3nGDaqQ5zLAYSnWXtzywHKgnoPcJzaq73czDcmVUzK1ehWWqCT9mmsvLCBk4Q",
  "key6": "Dh4ZFd6aTm1rgVDJ7YUyL77e62zdCTCYVLdeZssbikzfxSzLcvKboYsAdqYRcnhnE1NpZ79DWTAt2FDPpFtqR8e",
  "key7": "2Gd72AyBMxj8mG8kEjCR5W2SFUUQDQqtnCiqvmUZLnPgPuyDzDRYfLp8CHQUhH63pY761D2otcGbxSce7aRpLk8L",
  "key8": "4DwkURmtqKGnvB4ntw7hMqVLKruTFciD9L3rYB6uAdM2oZPgWg1vTnDDsJL2g1TWkzxdgTgcEtPEQzxnuCrnbme7",
  "key9": "5hvMstHzoWNpVV1BZVshiej2qvqtiQ78PtMLQLoRbMLHYBPVmNuYBkE66dYdDM9RsVAGo4QSBUdrs3tXWmVhHNYF",
  "key10": "4EuRwvHt14hcgQSbx7ZdDuNeo3kFcpwoosBJx3vqJDFBn9t9FsmTYYcoc7XZhmW8ett7oemHLk34PeM1eSg74xWp",
  "key11": "4JHA2DG2TrET27aN7i78ZpseLzUPvBLW6T1Rmd1xR4AUrjjcstFbMa9FsK4HJ2iKZrRtUERdhbGcWnfbCt3Q369E",
  "key12": "ktbPDsBU8Ga2HpwvYqXZCzscqkZpqDE2vVdt6rpdumztSB6rK2sEGsgw6J5yZEUXxHogd1oRTwzk7e8huKLfcYD",
  "key13": "4rrzevMS61nueTeUPTr6fSDPDAagey8CE5WNKP8eySeP93nehhNECcHNX85vJentYNos6313P6hPNQPmHoQSGT8h",
  "key14": "39PPJuwRknPrRdjY9GH6cggkLXp9gE2Uk74RTMusMAHq6KA5i7guE8NYdSnV3Z5qJuoBA6JtubnvJxJf1eT58eZQ",
  "key15": "5sKfZREp39ScF5LDjX4gWJDqkhqhigNcCDr2bPTCUzf2aeBqrAvv7g2qsXjGZnLJxWUhRFkkiUs3aZE3cfYSFPzm",
  "key16": "2GxP8X2zekDDGM5WESayspgZNs22izoJYrih1bTpnBzpmL7CqHdw9U54nnTXRNztq59yPYnzLcHGPspkoPdYghxU",
  "key17": "4hBZnFkMmB5Mh3P5BVcSEPrbc1JGbLFXTSqy9eDRyyygFhxbBnLz4QdjPXy7e2DURyX6rCg3fzooSVgefUWF8PC",
  "key18": "4R5Jb7aHpJ6U941WePhkcr3AXBsS436B4YUbDLwo5S2D4MjnvkfUUW1y5egCw9FCxkMY7duptbNcsk52RzYiaLq3",
  "key19": "RYstUsJePoSvjWTW5XD4WpXU51Hh6MKZmL7Nk6N9kSXmU6RznCJFLW9qrCgNQ4kXVFt3gBkb3TvhL29iFrDUTZk",
  "key20": "2QCnaqpGTxwuR3vhmkaqvJ3ZFy5Z98seTRdNv23DjGqKEs8VWQRTwQj3uRfteCu2JUq6MBvSmYYsmPp4d1x1EZsM",
  "key21": "4hp51RGi2WhC1vZQvTuqrVVSBVTFb5SMdRQAjoVyMcnQT8d9vruBQGc3m6it7hDcxPYjBRSvgKEG8nvci94bq6bS",
  "key22": "3xEn7F1Ex7hyqBzMMcTeeLLMXB5eMU16hpkqXP1HRDmoGFhLrcbB1YrNkZ8mgDicUAnkDRoLrGE4Hv3Mfys18Lyd",
  "key23": "4P6iM4tySqG97ZQWFDsLuWS6DN4mGQLXTXhEcrwM5p1sU4ELEppWik731x9y1Sp1hPgib4YSggyDzLU83ZWFoEhx",
  "key24": "3b7UMRaGFFoptn8WjjGuJB35or7sakZAY6FaAUTndGMPaKaYyXszdMi13eiSu7hi1ZdcfXCCncJgvd2DjYmNgEYh",
  "key25": "3puhj8oh3JQbthmAFGWPtrftKSUoDMmxPsd2LXmCUFtLLXjjurTe4fL8CocGzyzXYJMcQzCwSwd29xUkidKbWMrd",
  "key26": "4Zj3sKzgHwL6wd9Hu4PAqYH7Qz1rcdm1R3xTPszsNp3S4UtYLWmpqphbvfb4xCfbk88SavikbHvje3GXPyGSoPCe",
  "key27": "2YLu2ZYaJ73obkSdQmMXp7EyBNpe6XaBtZ8QMSDUEuyeoT9tRxVRcZBmpQiCf11cMt1h9L6Q3GReeU7jkz3Ns6qx",
  "key28": "5hTijLvTuwWjUd33R2Z4GkFKXviFNcrwEf4Vi9hJ66FsA5BP3PmFFMWLbU1aFcmPUBtrvGCmJVM83j7MBZvn3fJ4",
  "key29": "AKbXeB8Q8rJ55jdf3KGSx1X3jz1TLJgXhsLhXB1zynPRvWTZeFghveT9TxUKfDBtMS74Mh6qRGQec622aLcZ1Yq",
  "key30": "2GdmPfYHvqS4ML37euAwMnW3h8Q5eJKFKU2VUFmwuUfrMEmd82tS7ZnQjfa3nAkPFwEF3ZgjezCfGhtcoe9y1D9p"
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
