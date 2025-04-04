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
    "4e3TSpfeYLvo3NacSy6JY9qjrKURSZ7svC4Y2SgLDTkZu9wvhrWTQZ6sQsuz19SYos2yb2j1CebwYHD145cbmuUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45XJ4nb4oPctV3JCHWN97Bdkdb6JMJ6nhAU823AfEnrv1fxD8Uc8dYcDKDiyhPFTd68cCMizCPFBQUuQiRFk697o",
  "key1": "28nPTi2ACDn28NTnk74W4dx2GuSbfdNxnLiyEAmrkjw8EZDjKqqGMBpZmUHJWsHgXnt9HBrCKqbqA3mPiC7AxaNc",
  "key2": "3fLrk6onx6k1AJUX7pwuQzYT5dQJjmQrE6KZ9NLzhkj6tNjRdQXJStK6xca9UJBYtznaFqK7vnr282Aom1t2mVcT",
  "key3": "5qWwLSwLi6NKsc533DME9JeMs74nLrnMQEchuXeeqemGhEQG85KAQN2Y5dzjBeu1bcSEGMGnivahEmnDku5amyKN",
  "key4": "3WsoAsMrVHi6RMC7d8Wr8PrTC98xYwZjYNiVip57igZ3wkQxNkBqMrXo7v4VWZDruYrkyDaVNU6HvpXgKBMdAxFp",
  "key5": "WGtXUjBCUHcBEKdQ7gN24ePSsYx9jPhcSofzhwzqgWK9hYwaDAWsbULUmjcFb2j9z2TRSq86sWuApVmAHU1mNyk",
  "key6": "24gz5J2VGiKukna13JTGR2bjxf3oLSBgKSxEuFTyyis6KNgwbT2VnZ9ds4pdMtp5ASuyQAGaiXzgyQ79nznsUfME",
  "key7": "LWXJuLaRmnXH3a1sig89GBtX75V8Fi9X4kPyp7jVrqdD9gJwLozkELiYW3mP9MqrzXHjj2ueJnoJBZ5dquCuziV",
  "key8": "4nauybLB6hKxjKPCzRtAwZs31bW7TNfx4dWQwm7Sp8p8NYyYxwHkQoW3TkaYSeQ6VtPej69Y4UALj11jZsh3Wfj5",
  "key9": "4NmStKNF9xtZcV5HBV9jETP9685YvxQSfk3Qt7zef6wcHzCHH5nfqBq5brPirKeV13dURXMNSTVshS7PXVHhs6zj",
  "key10": "2W1eQYtGWpiDzBbX9XqcT6c4zDp6uYyaDUA3btH6vkesUsZ9XbU7YYA612oiQxA7MqhfKkbmNr9aFkxrcYW2M86W",
  "key11": "4MR2EAurvfykSK46VPauRxiDwuRRWB85XR3TPMtRaNqSiGCUeH6Y1HNX67vQL3gCZWfVKaGn9bdAdBBPuhHbExMN",
  "key12": "WJ4inVHYWkMJbnwteCaSwdLg9XdehckuPtVHDSY4RW87FXvKEyzZJ6KDThfEXx9fnDagmYnkiWSiAsPojsAsqyU",
  "key13": "61mhKjcDkrpvvEQjzga1V6ZgqGaT9oe8M2qCHXer3u8J6tg45aV7eemY3fjJybJRXvJaLQpLZ1epc13wXuFpH7V4",
  "key14": "x7JBhateaUx81GU8EG9uDdcrqRocDCK25KvRjeLncDfHfnwxSrMU9sUd4SbhxTmcXwdM5ZtG3GYJdk3SdBA4Bdp",
  "key15": "3CRUc29jVRFRjEYhELv835zgjE2M9Eip4p5m4fLCLCEPGefSWWr8xg4669HjLweDkdma5uSEWoApYQtBY9E3aBPu",
  "key16": "2gaURsi3XNhh73mdAVrHWydS1qDs7kXRSBMqn1bL1rJj2AdNSgpu1Q2Us4HXTtEScAD6FfX6CSz9i6otKMD2k6zm",
  "key17": "1MMqKB4wYk57x4NF7fCC6SDGsGNnjAxdHcJX6EzJ3oCySXVNG5Q4brEsC2FSS86qSoSRVcKRhrqQjp31yVEZXhY",
  "key18": "35QSUUsEyrENhsitBrReogfkqaVaB2e7xQh3LFdRb2N6EKoiYeBihJiQUkYmbJkaNKFKLxmPeU3xczaes6rLMk96",
  "key19": "2BVAmGwD3rn3PmA84WYMmapkkJk7YtLpsZh9sQ4xHWNv1tCJjqPxgnk3Mn76xAQkaD8FVZCakkW7zBy5YBH6TL6T",
  "key20": "SJ6pbWAawUjJ3rsdjDSANZnSoE9pqnvwJNsGKPd2nmXnxNgsmsx9P2smjABN9uwSZDqdn4c9XtkEtFQf8K7cpuK",
  "key21": "451ChJ8LPfypMNo5Kj1tWQnjMNFa8KnsXWPNoinmd9QmWb8fNortu87oRRzyYxNWrkJ8MFthcmvjjGxytXN2Hq2c",
  "key22": "5JUVvWELNATmhES4rZXMVqpzFVR62nqWGNmDwkpDftqZL1b6cVnMP1JNWyuW5Zn9Y7uNhiv4xuKswirnat81LNDL",
  "key23": "uBYGxhoKdXBbyQaM4sBFKpa1eaYAQ9fAVEqGDTDqYmUaK7fHfNE7htuS3VRWxxpinfHgV44WANUa7p64jY2DFeg",
  "key24": "21YeQWVDAxQA2Ejr1VPmYGbV1LzhVYvZKDBgw5KRgxxEMUFBuZzTseHYBTWxBWsJuRRpM7CDnZVKsfrQV3LzZ8nc",
  "key25": "5dThnmza7N5Nk9JC7SqEeiJkouQkboNvx1roE7D69WsjMi5ryJDwcHehw8N6uqETzDSzTnkNVtKMu48WqTrFby5Z",
  "key26": "5RcCH7b2PSiGZD8rvp1U6cDTVh9adZUatSv2qA6S18xBiS6N4yM5qBBidc8isSw9wSenZtSgTapB8hD1BdSt9G8V",
  "key27": "2MiqLz4FsEbayGArmRDSmxPRCLt8SxUzimpf47tpJgvgrqB31KW8nQjqA67s3zKTFJcW8VupJDZrc1tWGzjXcxG3",
  "key28": "35T6NFuwW9n1r8cgC8grPsH8Z4cBbWPmm1vohSXZaD8mxes3N8v2dYVKNtjRr8Rca1wKZbRdELNfGiEumitvNB4d",
  "key29": "4DKbdPvYoDKEfYyyhY7GP1udYHYuabGkt7Rd2BPc64VPY2wAw9P4knqnAxYS52adjdwWtsBwfNk4NHj9TCR8k8Yo",
  "key30": "3CrVrZTppNSsVtVh6u7HSmd1MhthkHcFYgEsdXFi56U3MTp3poa54V6GxXfJiPyRzVde6umLjpxYA3upv9y8Dnt1",
  "key31": "5W426ugu85be3M3hTmwP5zDfsQwSiQ9L8VDtP49QhEYg2EscFAJ8snDJVX3y1fQfY5UqyVFEF8iaiXLQaxUisgEt",
  "key32": "5hAac8PSiutaSxbnkuhDrdptKHyHMDiyKMz6wztW3GvABcayVjtjHGMW1ZyNwV9GhRsqPFRAqVHQZZzaTQDHN7oD",
  "key33": "4NybdnhffhjivsQDoktrLTPSPV7Pe1krzAfBBm1rGE7JjRTePYr3ahr2HCWAExBP8R8fP6auvKh2d8vfKSwEYpou",
  "key34": "3wPSP5CwQKBDZyCGDhQGXNo91uvSt7Sn3fzBn3vos8vjwFZL6N9bpjy3SLEZdJSQvFnDNd5jcwcswkrmHcB7Dr7s",
  "key35": "3Yz92GuVCnZCHihCxfPfiPcYA3sZ1T15n3fz12KgghccXuVe5gXjfjHh4eRbWRLWu37SCBWBHcWQzPRMGcbdteBo",
  "key36": "3BxXeVz7vS3HW4uZht53dr3KDZ3SSBLEtC2WbeYUKRavjHCksRCPrBzEkg4m59Xr4DUzWNNTNQ3jZuQhV1k4RKZq",
  "key37": "2XcDRcvg5hcLuKoHxLXDCn63zDcbxDBz4trLaDxB7ywh3W5kM4bmsBukZvE6ojXVba2w3tmNds6WHj2jsS8qmwMe"
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
