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
    "3RdBZ1nugFSvdQiX7LR2EtJUTAuYarvXC4NMDJRui5mn1LkUEfSkxtCJHHFHkc22NXUzkUgYggtskubJYyPm27dj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xa2ncqQK1Zxm2bCA7r1tbypMWNj2nyCabbyMPNfy1GMcQdLq2uygaGyT6uhVXCmqkWZY6fZGFtio24t5S3PJKSi",
  "key1": "JtsFj8AMzNqBZh5pTrHDPLTwk2NuA1FhEtsyEcao4y3SQKREaSPHxSk1Ptcn27K3PEfsNtVfBBUSVA7TyoQGbC5",
  "key2": "2Ewt9uLt18egA1H6Xqv67WQhyxvc9X7LhwDQ3zVY5GzDy2jFpYKT8yyjmGxmvZ1BBEGf8xiggP1wb34fR4QhVaCb",
  "key3": "XfErrVJ2bUvKPYL2Fvfd865Z36JGepvXya4DLX2DkDa9VrxaTWW6dexVpm4jCB6mCHSGsrLjGZfMo8zYSEzN7Z6",
  "key4": "5cNgxVE4cLdbW6XeLGjFcaVRvqTh2dZatUx35nJ5Q1dk7Np5U7Q7sSdTMRehEv5Hgs6WUh2BbFemBVojZoE1r3Q9",
  "key5": "5oWgseYPkMF5JiMu9GyjaYVf3sw6D2cnmgdebSXqXnZvWbATY9x9c1nicdh4ymUUVqrHmdGx1a23PkMAp8UHbTLS",
  "key6": "345tjU3xKgS84UnpCDSrdqR3y7uAARFBjD38qUQdTT58aqNvMXaRRiHjvfTBFjPRgUWHnytHyXmQKjn95nJehxbQ",
  "key7": "4vuWndCo9pFmmoEkUqxAoVFVQouDVRQoF3WoCjK4BoUvLVPE4Lxf2GhfjKW5aVGiz9tSw5b2mfdcKEF5h1Vi1y19",
  "key8": "DVsHYSJ6msdKnnVvvNf9W4YzEyyWEdjrWrdUZ8SXb4xPaQSqMY6wLnWd6DGR5Dy4bqxVZQgcaUuac4mr4AtrF69",
  "key9": "3WwBABrqLBRSHdpknMw9tynsf2EYBT3xY1GnTT81zSj7N1YzvzCHRdo9f43sfWJGQv3c3FU2T8yMHFfiv4eMQFHk",
  "key10": "k8JU2VbeBmSofZe8gQt7LJxcAqDaGB13xA3Kh2878QdiEqNB5swiJFekx1wsUm6sEv6TSJSDxHqpPhWVEpvxTdj",
  "key11": "5QkbTJ19NDjwztppQyUt4puKShfMDc3JAcHcHWaG8PuoYC3J7KCoDjBs5RvAUeb428LrUt9mu2sEr9zbzptHpgPt",
  "key12": "3opuuX83YDPDuTvGD4EogKbMWrM9bUUykQNMgPfDo4jF5PNyFAx4t2TSrFR8uqi9VQkvhgfUXhFaZrns5nLYVvz",
  "key13": "4bXoJDFyoL1qVkC23euvbDEDpqBYj3CfDBisFhGk857SxpKeaCBLJHmEX198GGh7CHmapKHf3xBjh5MWneiYchJ3",
  "key14": "5DG8ZXhMKCmJSwKNFy1DVBCcRaNSchAo8v1zhkF26xmnFhELmojHbi8EMKhtZdomy7fqaFjuQ5YzfbJDkVY89QMV",
  "key15": "2RgEU64svShxoFPzgENyHqyDBxYuEhY6JXQyWvFGTbv2Af3ZeXmF7hAmtwPnhJQZJNPNiR3zU8TcvY5S1W4LL2eM",
  "key16": "2kpy2Nh3Cri2k5LZy53kLydC9pLuV7nd2SjyLf5ZRzEQiDVvpAjSzX2XdZS2ekpjXv8269U1mi1fpXxeHBewAApR",
  "key17": "5cVeVMfFBCoWLQGgXucYGBFzYwy4fabKbfg5gqYnxQXiubD2VpnpfGoYYsjpmbhwRXu33zEfn3ycsXd4Z27ABGpZ",
  "key18": "4qf94R5Q9ox532GxwJiFvNKrQS4HDqR4V2YhJ6z48qk1DFfoDrqi5NhEhTwmD3doCjiAKaAA95wXzqKL2ByCdtxS",
  "key19": "Wa3n7ncquc6Ciw5yjzUaBYPqZKdQE6SNZgMRjhgZ2ogycAVkeguVeHEJ5yREk1dQ4Raz8FvdZdKka4TzLJ2eWc3",
  "key20": "6UugXydkL3VCpRZpAYohHBYDRsfZp1fgbpdKuBgR5h2jRcK7mztnYRYWdksGyisLaZuE5QbT2h5yGn3EZZzee6u",
  "key21": "2PC1Po7yHr1AwXXQSi8pb2M9DPoptSeh21WhX53uhrSV6dcmdy4ZKuKqnfe4xfs8uno4cjHN5pBmEk56A68gXDop",
  "key22": "3Ue2yhgUuouYAXsBnEXxB725EKpjcBJCcC24jYndaq33xkWkxp3t29PsNe7DKwJPz9hsBnQxgTbva1fH4J72Z73m",
  "key23": "rESkrnsvogUQ3KJ9T33tRDLq5K59WhVLLDFMaYUhR1mcgicdJAdjs2npHJAWVBBLsot3FTcQNCikd9mxF5nifTE",
  "key24": "2eSM2ZND47Gr5C2aKTm2tzSAAfUkT8jRyjBSsALSWUw3xid3R4sF4cLuKseuLDim1pDGaPnTnzYZcJhvWDVjJ3Ya",
  "key25": "5kVoDqAVCiPbwLDDSNnTHEAHUDGXRHHuQVDtatb9NAvFQ65T77PgBCyuY5NvT3U4vmNAZY5YdPjN3MfASkbMCjD1",
  "key26": "252HkRkAtYTYTyHpF4Si159mwro6ePJJRrHvU7PJDJEXipWoPTw3JZBGs2PARFaePJaeTremQgpmJqkSxBdXmVvq",
  "key27": "2qfN6DAAW7FWPrccYGvc4U4dpdBBH8Ekwza13ZhceSpTYtidQhsa3ToxviRfE4bogX2K1dyCaHKkDVrvNJvxUzU2",
  "key28": "pqLzd5F8VjfngQmhFY4wjJWHBzW8Zayr2F27b7K9fjSFUQK1rvpQhn5nMWT4y1XpGpK4f2mbckKi81CecwYM3Au",
  "key29": "5xfHt41D68PTUzwaixgNqNYhqAZ1WDSsCKdoWPBYmtMDR56NjwCsQHp3VNEtpse2mkHEmdy2Dvr3Qw3taLMVaF1x",
  "key30": "2CGMmqygvEVofLP88aBTMQTxCS18PrZXoSyqkypMxL4BCXvvVDypSWbcKTiQ9ppyQtTzgnXDrG5ZuR39mk9aT3kb",
  "key31": "63EXDPzPLiHqemRY92iiybDXbxbm4izb1GsU9axR67v7iTvejDkavP95Wt7t1aokwDf4ewLZVaBopKUGhV1zX5ct",
  "key32": "iyHogRASXUX7hfH2cng4xcHR3CxhAn4pzERYmsL1xquytCwVAnndFCWF3aAoigJX3QruzxuLbyHziiiueMTTg6C",
  "key33": "3baTtHgbjLQRoTaDhtKcqF6dZhS4icxzKVnW9C8jKbe1Z2RhizsZv17YhBfgikQZLeXs1YxDiZuRY2LhMpvrHdWi",
  "key34": "346ksj7ceq7SnVaKwss9NLyJ61wz1yo8DJEe1p9VW833ev9mEmQHMMu4HVsUNaPJQFe5M4FQyA6qGxqMCcEZESPZ",
  "key35": "Nisj1v9AivMvxobqF8HYdNJe5x9LVdgNyeT9xB6Lwa3YHU2JsV11YzampeQmQtFJPzRe4jebBwyTDRs3Xpg7hjU",
  "key36": "3VP2kFeuYMtSSSnv3MVBmihsH9BVu1SRD1KioNJGF7EkZwMvcgednZxf3ybPGV45sQv4s8dFwuCcpzsu6UfiY3c",
  "key37": "bXHu7JUxbGZPsPRpm5NpD8NXXxoZhpCGpvycnAcNLGUTt4an2iEFjUSynrXmpJjtN8c8A3zwSE3mebMDX12AmEH",
  "key38": "3V8ddSWoTUraBc22pEUwRagudDZKkRa7of8oqCk3wptdJpwxxhuzEK8DCcW4ttts1X8VEmNh3sZRBD7es8CKMoC8",
  "key39": "2NE1Jx7HDmjeU2wquUkAUtMaiG6M3b8nu5vmYGRf8mu9Rkpoz9rRXJBPtFmgfb4KU8uZ1MPNna1kXwJZUDbANxgH",
  "key40": "Jqd7KHEksREEnjPGjwPXgNQJG2rZ1cskGXti5BUFMfyem8LELhdt2D8129PhZXVqwrV4cZpk3PyofqTmELveqpZ",
  "key41": "R3dTrJUS8LoTLinpEXSmsv8S1A3bVFk3d3Dr9ZjzN3AACVNTRJy9bW7cNXVUy5aEh7n62gwfe2Beh5iyjMcZm58",
  "key42": "371LeRwyzz4DV7hjNsXpaReEFC5MbCtohExNDYamayU6BY4GgwVuZWuAnh5b4ppyQB2NSdGThp3eLk6xV9xZGHst",
  "key43": "63jFiBSFRPKPt3nW3MHAxAxyJfWoFujBYpSa67PRqmvYgmDNbXEYyfGEEXgAjzBGNW1JfTDhyQFXNSy958STpmMv",
  "key44": "4EL5KkuXwVYNQLEmhsUCkyAJxUrnt3Rry4cpRTZwhnGV85HsZ3E8td1SeaqowSLNcCM4gYyvR3BJBwupwh4zV75X",
  "key45": "4x7ySqj7UH1CmvLaztms9kycMStNRrvcyyYLnbvnWbipTo661NN4fReiACXQd9LcdxyaW6Wyy7VqvqpE43D8qa2B",
  "key46": "4mUcM5U4KhyMUSxpCBuenZsQi8SNzAK9ekkiTV1Vrp4RxKuWyGh6JE3VJtRnBAx2mRjKvPue3YtNihex57HHTfu1",
  "key47": "5KsG2Fuwr27dViUVeoNti8mjMvLNcJBW1qjT4YarT2HUMgQpmMNs4gLm4irgVAmDMmbNirfk5miw9ZgRAn36pF3a"
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
