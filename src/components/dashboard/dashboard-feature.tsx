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
    "s4dYRz9ZW7tVzo6WzyLx5QLyPW4HhuFCAFYiZPYnAL2wZwRSCQFXfANAZ7Pfek95oQw6FxbQTW9b5WmS1pZJhDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cidy3Bfi4g2V3oJBgLnL25ZmzRfcRSsMS31W14MdiYQi6gSHwFn7MjN5shswxiSJYKLHkCvCXjPsn8JDXzc3Ma3",
  "key1": "3PkzrfwG4y6o1LLMufqp8b5a63xgo33LstxwHJak6mnzZbS3r4qxMgc7HsjVRhb2JdVSWD4KZLD7uPfwPHzEF32o",
  "key2": "zpd5kpFYHk26AiwHey5jmsJ8Qsqy94CboXxWUNcv3gitZD5XLbiDgjPduePTBdi3KMS5e3GSf8b9W5kCGjy6A3v",
  "key3": "4D9pAsiUevhtWbhNR9JeRECBq3m5zxxP9FGhP7EyYVgGf4w5McMSyrrxrqRzXvjcskk5WMWZczagZA8cYsnbzudL",
  "key4": "39TjbPTSNEFN94Py5CawcfBaZQkeDndhCRhfsN6eLPip4zUDBqYsvUGkuDkFhr1xoE8QJLxyCvC2QLE6cMSVP33t",
  "key5": "3iEysqosE8msa45qUiQPEZNyjBdc9w62EGAmV5gYWriXpbVYdkBcLTFPgRmiXnmxQuGU72crKZffqT8T47jW1G2F",
  "key6": "5F5woxwJb3B3pqGzkV12MSxQHARr3K8RtwQMfxUW2demVUm7k6BJ7aqnQRtNnqZ5sM47sbe7s4dXrjzevzTZTy8Z",
  "key7": "YfTThzDNE6XfhNYfaG8wDCrGC3XpXhdjmd5BiEDy4hUguVvhdanzKsp3RBiHBdFwgDQyrGjQQ97HSMG2nT2T4kc",
  "key8": "3Bg9dhA85eAVpgVyUYjHWbJmYT4d4kbSaHDRurX1uPsCR6G67yWKjSraRD8tth77Drdj6aY5bZhgBgWUhsxgzs4S",
  "key9": "5kcVxdtTAS2wE2N9qPwdTvFs3LxJorP8KsAmsdFcSNMqWCV2vLAworMmQkgB3XvVk93UngRAESAccGKUi9RJXM2",
  "key10": "39cUrATtBWUNBGtyJJbyXqNfUoUbpxD7gSyoXyHDqRUPMRxmAfz69H9eLb8afK5dCNEB5dNv9mqygrr8BEWTm5YQ",
  "key11": "k3UCsx6UB6ZWGSWxEVtKJrE5aVMZxBcqMi9tozzG6eF7fGi4bVHvSWDXp1hthHS4Sw4zcvuAzjUJJQZ5gTZ8nTK",
  "key12": "2i8tT5UQtyZjq5F2q9vHRBtdbh3ebZeoVAzYp8LLKBrLBAGEKFCSix1pSXi7rX7rosGrxvfhwtro1bzDubN7S92F",
  "key13": "566Lsr5ktC8HBchNXqLqtFwZojMZu168K1XMqZe7t8E7QUKzfqYxDCWTwRp47okoFb8EzBXRCZJXn9di8QM1RiP1",
  "key14": "24BzJhLsgavLPxcBWEYmBt4aUZoYHu3jbRDLNvoDtsx5XyfUvXvrPfVc7mNgkaLnPKR6NVP8GSu4eK71kHkccobS",
  "key15": "2MzuiGKmUvcnPbQAp2rG4jEpNeGM9Y5NLXkfv7e57ZYaiiQqjRChMGFA5AmQJf2cdhseu8mFsSQw9eLdZsNeNcbj",
  "key16": "5443jwj5MXF68ebTA76zvUMHUyJaRfdi1xsnMRLpXRAPHGSW9pTstEmoqWXHJJxSftsbkJCEMpKqCDDRoMZP3KEc",
  "key17": "3Hh5J4mhJsEfkQdFH7BmmR9nMF2GuUSB8R8pJ16HCSWKiZPi1DsypFCVBGBJo1UVMNpKjb3rbes5wkbXY5qXpbcS",
  "key18": "2zBUA5Z12vre5Zbhv56eHqTTR7YME8h9dDkqQdy8JRm6tcZiPgDthX9H3satm16mYdPUi8aGxPxFgYVomVWKBxDm",
  "key19": "3k7a7eokyCB2E2WiSutDMvKtRY5TwNUqjpLuWgXCpprWMizgxsjB17ExuLuq5DgVygCv1jWGHswhxCDs8vf7AaP7",
  "key20": "2ZRio9QcaZka2q9Qc8GUMuhQGpmCSpvsGZpshGxUA7Wf7E9XCbrv7o5kPNMY7Cb2rh6VCHTzvtX8gCE65g8P9yig",
  "key21": "CxKaSrGWhJ2fBwXUL6fvFfiCbmR9WFUYPZidRjdQm5RCvnToDN3p72SNF5NkArDikdmw4kWRcjGoSxq6tvQHRQv",
  "key22": "4MbMVPE8JAF6apua3XdSD1LBdoBs4FvQtkHXtbuem2ogkYKwNHix6PjHcPqhzsHVNwaz81m3DcFY7LtE7X14Efpb",
  "key23": "FWDp5LoN6A8hjtzbSGzhqpkuN7aYfWLfrNj1Ui3SuTGZBiYHsHdqV64AHvqN9nsQwapXa2VJ62EMLJu3TR8e5JB",
  "key24": "sEgCyjzD5nJXbtBz6J38WpTFiedD4e5CUVHqMxDcq888Rw2haMue29Tes2w9arhYRA2GMDuum3K9FiTs3aCJgpQ",
  "key25": "2Szzuxrpf9cLCKiTobwEdHwzPiqxUT3iytx2CHSDtx54chcxRv2cunQtsNaWSZ27yYNjNUtQYvKa3wMoLLrkGax4",
  "key26": "EPtrGxuyb6E2YxHFN3vfPBqVJ41LaiDrzYHmeue4LSPWMcEfAPYg5eeX7eiC5SZPZZEh7ytKBBJhZu9aFrBR71q",
  "key27": "rCjy9ifwVvZyKHMeyrd1nU43r6HNZWWu1MNX4ZgVb18DXZZ9CdmMACfrAnDe5yrsZMbRHPCnZuZBq26bTnvKYHa",
  "key28": "221FXVhPywUSaEF17PmW3CQ2F148x5n3RwQfYiY4HF6EpGHBUovakzeF5Vrx4KAcZHPqJApNcGDftjR5cMXe7J2Z",
  "key29": "3rX3GkQjwAgdSiErttQKdzzu5gqkT2Nzff3kkrJFf71Mf77prztWmUGcXM6LvkZDrPHseq4Nu8iV8i8AhsxfKgse",
  "key30": "4PNDEaQcvdHDPQrVf5k8j9GCs3Eti5xAkhqArfuNEbNfsLU71kPoAjxQFUbhacupizkA4ya1GEY2tRDNcTo1Sxii",
  "key31": "jkn3HYJ2aRQgS1KisGWCQECY2mn2tzd9bY64RjJUMNeKUoP5PnNqY9XkqqThbu1n7xiAfxZaR2ykzk75AjWsQq1",
  "key32": "4XC56ppDJ2KrQqgGUvbwKxzSuyuES8mA9CGsHVeJHJPTMrtJJ7JRmyuVTC5azweeFLLFWdobQHWRSrXdbfQzFenU",
  "key33": "PiCt2BJHtukxy8wcAAov3PYRHAAgHQsbR8qwLbUH1K822HEtg553J4sg2HT3u7DUTpmvaud6ZPXAiyPe3A4xQBi",
  "key34": "4dVUmHZLEH6psLaqyLkDx9JdvpVYizUUf4Dxo8exZHejEomQyWJM3GPCCwEkUqXgFf8sW2EXFsiKF3qu3tS95j4d"
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
