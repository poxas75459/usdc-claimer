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
    "4UABCyDTzeEy618nR7vB63p9RBeNYRpbMGtpbt1k4xwVXjxgPAvDn8dgM9iwXh3goYGAQPjm75vPB948Gac66ZCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66LdtSjViqYXUKJqLFY8wDteuAwtsk596Lx5Tza9QvkMkgu6NajwC896TjRookychfqe6XaGf6VxxGKiZKNFxAM4",
  "key1": "NZBsUdKnDN7m5XNh7Z5PcDPcZ4TyPxs4jA23omzokAfsKebUmAoW8sHBp9zUdwfCUQDwg5cWkwjcXAbVxJcB5rg",
  "key2": "54z7Zg37982LSrNQuHTN5c7dDRbGjSfHeRCRQyGmasvmUA3uc4MDco9ResHJbiSYr7iD2wroM8kgZBHuS1TcFpNK",
  "key3": "268Kgunb1gVgwo2U264jx8DHhBXLiAmzJKvoMh3A9sS2W1dTgwE695QES5CMTuECdvdNemUbRqTs6sbWe71PtvEf",
  "key4": "3QFjhyv14aZz7iUDw5s6GWtfWGQE4cW8uFegH6pNG6NAqh5oShm22f9bWVGW2nbEaoFRWCvbSpmWe4n98orteUxd",
  "key5": "yTQ5hMwyN1ET2LKND1xz2pRi3evku6QMVMuPLQ5mRurNEQ7St7AyoWDYwCXChEarMLviSoB2TKj7sxAgLT5HmLW",
  "key6": "5Uacfz15RbvcuuDcHqWuKMM5mFUjmpXnxH83Wtf7oA9FwTAVgmFbTEvE3xif82T2Av5Wm5aFLBdfMVs1UFUX9Fw7",
  "key7": "26PpzpWhKdbe1kdaekUgWSCoVKFKQ3JGPjfrLt4yuy8ScbvJg12jhfxArPVBpEwzuFBn2NKeUaHmSFYKXC8VCNME",
  "key8": "4AbD3ubPoJzuep2aLs1CjaA4gSLSDqB9tPdjS7Ay2ERa7Lva84FbNmPkDjyFQpirArQN1hokgcALQpaKq9RZq9yu",
  "key9": "3SZ54m3s9ULb6d1k6xgZfJxTtg1rw1ykiRxNPJbhrvd7kBF68gLikvtdrYm3xoMY3ARD9LgjkD3wYT6H4YVJxmpw",
  "key10": "Za8puMUG7Z3CqcZdGdQqNsZngxjLdvKqFZttWrJDVfYznKbV7w8oUPmKohDVftKDWyZzP4q3N7R3pHx1bfDLC2y",
  "key11": "4yFWhsjfMdHy4WSG6aTk4gEpTYNuRBS3ok5fdtjeJ2Y2gPxDY13s7UWc44JQ2X4w6TK9h1xSbTsFvMoozknu1Z8L",
  "key12": "KBioT9tm1PYySrDvgEFvaDaUyNAFUQZHFEb8exQzcP4fYcpyS7DjZtjwjzeuRDr43sZCm8as8PNR7NMqVjqdwSj",
  "key13": "4VHFnvUwmumBWJXJ3Mh9bkNiJWkbSWgp7MweZ8NEbnKtofrv3tuGxSiiyqE7W3jWwPAEGGSkR7dSqdwRdi1J5ukn",
  "key14": "5G39GAtzRMB468Y9tTyWzSAEHFqPVUU3jcMFRoJfncwiK8NqUw8SXN69bo4zGkHUbnwvXTWtDSckx1mMXwYkfb3p",
  "key15": "5thy26ZnjxUMKQTrDQrt1j6k1sGcNgMJQA7GEzHEipVbCeWpjPCu9K32opFVCcAk5EjN436fJPHrhd7ho7TpcMdw",
  "key16": "2aa1tcQtPo6SCBBB4yBwkbW5g5T6KKcNbzGmSpYu3j6FLEtR5ZmzWGQrSSPWRjXdC3Qe53NphmkCQ6ky4ErK9Uwn",
  "key17": "4n6n8nxwUufL7KiZKVYo5Wj62T9WMWi2NHqR6xrvZH2ChqLXgGVA5c9C11LMbeWaQG3VDGfWMNkXuACbsc4imuWr",
  "key18": "4PV3VAraB1ydmb99BkTsNCaAVycJnRLmpDUqjwBSkeQcMGoX5EnPniA8VMhqSF3jpzLM3sUbo6Yfnx2TEWmqWBkZ",
  "key19": "3w6iYSmXcFWH4A3NhdueavWvY95nLQNPuYwAVcY5JZTgwfs8yd7VvfjZ4tvbvwyGT19SJy5CKZ9hamfCPZU5MJwb",
  "key20": "2cRSYb4wFJKSDTDhMz6o3BVVwRCva5EhWPqXHLzAEtLs2MWZWb38GcZ8jiDCeJcPSt9qnEXksuirphMoKCT1egZq",
  "key21": "4REr9kqycjSMzWqhPeTbH6wm8ocVvoRJLrg4wjK5Jiw21bkt2QyQUiDqRBypSBbHPBVTVU2uTB2798NH2zGfw5fS",
  "key22": "P9pMDaexE9aogMtCo9ttoosULofuRv5EwtKLxLkVGrdBePdnDpv7QPNK5XaJLbXB5ijRXRzDYUmW8TPfjyxZGjG",
  "key23": "4GXMXP3VW8RPTRSRBGWRm6oRaK7vMkSiCbSuDDar573qB2rV812tiz7an6zRwcstrWr4t5S5BcPisnTw1hAsw1DG",
  "key24": "5aoYLpVZrcjXXWLxNeLNK3rrzTkcb93XBtrTVrZXafM6HCfH1q41uC99448W24hCQHeYmhMr2zP4JXLoqDAxehbN",
  "key25": "2FThAotiQ825gpR7GEKhS2aeVnQBw4G8yo7wNDjtJ5soZQnPd59jVW2CFqMcRp8KU7GoZWy4AJsXo5RTyWPK4VQ",
  "key26": "3jkbfgkXVp5rhjmvSumhLQpqC9iFdWnJ5Mt3r4eKLQn27wpm4kFCaYFbKhVNn5rTpkK8u6JBd2Kz6fvex2769gid",
  "key27": "D3R5UuJfHWZBXDUsVtxL1Gan7bB4n7DF1DEMEWabukChNRftgRybRpJsAQnJqnUPnbk7LZzaUw8LPvLQE8wKoU2",
  "key28": "5MpvbauTtbUeeiZmfTKKzXkxXbRo81D5aia2qWXC654GRGeQkSmBSvKnKLRv8K1f6PruzAiw9VfYCACdk3y5YsCv",
  "key29": "5xd4UbhCKS1Q6zRvNuVasNmnvVxfVzV4JjHPpZtsA7yjEXUebwW8gKcvB94Jaj5yJEXLtDViP818rirqG11uwbbw",
  "key30": "22gTkSBQKYqdnBSZ7kyVUuMxGP7PSUqAwuFhWBd9CgBNHZahz31738bbXvHDkgGyBVerTv3fi9bqxRw7TZAvabH7",
  "key31": "5PSUziu1RY51SSKbxA2mSQbVN1VotDXVjDSXdDNJLAzGaaiEHKq7ZZu1sCS3RWF4Rs29RsLogmbdBvcpXoMgBWVo",
  "key32": "3QWHqA8w9hddp8Rqfvt1LPs4WXNUApNjAqrRBy3FhgKCKzgSAFHyCBGb7QZeg8V3UR1tE4kZoWGPHDMNNy2Vwbcu",
  "key33": "4vLeDzkGChotwNQxdyuAePXkKqyMWAhGadwQKrHPdVTay2nESyH5eYcDPohAiruWuxfQRUTK9BbS2SHoTrCj4VhR"
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
