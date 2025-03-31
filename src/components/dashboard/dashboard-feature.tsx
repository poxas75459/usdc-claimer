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
    "4Ve6eKFUpsgkrGrsMpR6mJce8JW7uM7goHwPXVipsrLCagPh91RJicoGProAa2PrTSajT1Jyde4LL5kphrQR9H4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SQPL77UhFyEWS5rEc1bYbAEJGAehQ7AaujW2ogL5bZVRPH8hU5nRb9LT3HmnQSeqCSybTWEqTFrPpJB8kMqEj1A",
  "key1": "4TQNXLSgbjR3aK3G94Mp78GLST8Uyv9CkXuBM2G8zhiPhWFDa8wrXGnVSwpJxNuHnscFPuX4dxcXdxP4SMU4t8H7",
  "key2": "5qECzYcQSaW6QtRY34Fw1ajdHLunQWNRusVm7Q4HPPapnK5ghuEoMQ8QR15N9EdmoLeeTN6YgCg8XxDXFDpykmJH",
  "key3": "26EsXMqDQxQh2vWy5FtTHPKZcZDHZFwScUD34aFHGMABhTvi68szhnjpA1RDTkVG6CXRhJE5yuVotjRwTCaaYjw3",
  "key4": "2pvBnh4CMwpM4RzF1RPtngARCmZkX2kLyqQSriRijNE5hn2Md1xKkYuR99tZ6KE2oWv6tmBMkW8AS8pskhJcrsDH",
  "key5": "3A5uxhekVK8NxGPEAxkTERTbfBxQaAuUj7YtJm98xskPhcSKTtcSiPRG5QCnXUfEEy3ShLdAq28SfEs9dTHjgR36",
  "key6": "3KB9GGYsRryptqt4VP21fAKkbwDKDab5Xy7deypEiHGg9gcN11oNhsPDV4NzY7nsnsfawQ7q5APxY2k67feV2EpS",
  "key7": "54a3eHDzbSPgVKsSocFeKAFttwnk8ttfMr294ZXWmh9pTk9kbYfKGRffqsQ9UxRP7FBQ8TebKeFLk4RmaAbbYx9c",
  "key8": "2kzkgWzi6jYnfgMHxbhmBQCHHo3r4Mao4RJKNPvKvVybz4EUvibFTes39yPVabQFZLjdgB7Kyn5YQ5CiAzox9LMT",
  "key9": "5z8WkfEQEkkcrgK2A937JUatpEp6HRL8hHCnBDHPdHBmNaBcnd2ZSfZwqoNgf711Ryfdcm5ZEzJZbQt12uNaSCdx",
  "key10": "3u1iGya6TrBSDCkgqwzk7HA9gQiPussvdG4KSbXjpqtEqZ2vkbFKvtBbrYpFq79w8onkGjcsnMKrBjzT4jHT7KMo",
  "key11": "4c1kfMqmvJpuWAGjGXqV4ySzY6p4Yf9eLp6QEfftn7gtC78Ge4VeNe4iTt641Wnt1yccEQEkw5FpYYgZSsjAHvZa",
  "key12": "5UMvBBqsosXSBhxANAB7ZeuwNA3PGJerr9f6GVdusRqRnr1kSe3ECau79coVf7U4JTFXep6a6YopAgyc9FnUVCdy",
  "key13": "gzQAp9WwQAvXmYWjkoz1JMv4TU4Z3X7Agkgy9pJHzKTiZ74bxTggVdWyfDm5PmH8cNg3ZuGtheFSmJ2WaDit1D3",
  "key14": "3jMaeqVpScpxfEtktCea54pNmffTjbM8SbjezVPiSeujMRquoLVVDSxLA2m3AWACB8HM7mBo43pSBRjTSUd5juV9",
  "key15": "jZwSjVXsJhu4frie5ou8VpaEo7dRVZa2AHgAUYrMSVxxAVMnx5BxLxvKR2pwZHRFQ8cwgPRniv7B3xf7rQ8PzM4",
  "key16": "5UdFZBdxB7kExdqcfaNqBcXHdydVXJAAffg5ue3X26hNg6jFp58ZrLeBEjeLSPxfViPggNC32v93Zht8JN2vWKfB",
  "key17": "3ryWDFNPsVs2ASujnFjZTyvNYxwLMKsc5o6rvkVXetR61irddGaTeM7SANuW3KxywE3CkSx2xgGEHxyP1fXj6CSt",
  "key18": "3DiZncXuzUnn5Ybnz8eihvCUdg6HDoeY1baAvntqB2KGnvzUy8ddsDVNAFqjxdViSVKvR5PNgUESEedaFCXAX86f",
  "key19": "5ijGyKWh7JP1F1WMeZh2y7kwEanPAtNpwf63K7E2foMpDrNEqzayZvYtjgysPwLsgVxCJhARdWokventzvXK8TNZ",
  "key20": "DEqZ9Cj6KkNiE6SU3P5gfobTw52Ztt4ocK3EU3tygZw7vcrKjyg1k57feVQhrykEiv8EoJgS5emFYxnPbsmug48",
  "key21": "3zMdCqfcTQRjP6mZavi5Czirm7HM93EKkEByavmioac5sjai718MhpCE7QAXiTbV3DqfWdLYLDWHyKUznhVDPytZ",
  "key22": "2fqyZrN32wLbgLgpGNZk4bo3UNfs6Bdt6YVUkURRRx6ugkFQqyMjzuRbr7mttc3TbMk45Q9M5vdNMKTib8GeSNms",
  "key23": "DYa5G7jUWf2TgxaNcBV2L4bdxTAgTkvPXZ2LvLeEyQjpdxj7kDhQEaP2zpiDHDTfaBHqR9UkxwBWEAgsjZcfRnH",
  "key24": "3fYJDv2NjVZYZpoXDggtfy3h7wUJzewsiuZh7nkpoAy1qpF7UnVTRqMRpEicyQrz3zR89S5Kttpv7cEYbzLdi5BD",
  "key25": "qNm228punCS3qXpuyCPACXjBd6MbXFb7wmjV7w1xAa4keeBBDCzhXS27ob65rtB689zmngy2rkJtXN3hWTxNswt",
  "key26": "3C5KeXPuh9z9tEpxQYUHD21uRmKbmuiydX1TQ1meZ67aVbhzuA947a9UCUmx6ygugSEs6uvZpwM2R9w5n7JJfWbb",
  "key27": "4myWdiQPiwdNA3KZKjmZPtung28F98b521NKRzWPGwBPG8XkgMUURwdnmjY4G25g1atF7tNQQTqF2aK1VT4ZuHqL",
  "key28": "5rMDyb3npWzzy7xxqSHdbDRxjb6JF8wT7BUZhaC4LqrK1e9kebGyksAw4CPDkgzavJnoqJRmZF1tsarmbbiUGFXw",
  "key29": "eizeDRhHsU88sboCVts9dZcfy6oAF8pQegihGYM634WuHQ7FQSbLNYVXZf7nEzKEVuwMZNTfYMM5dQyXAyk1vi5",
  "key30": "55bHZzDP3J9n1XDFUsBHxBGPo2VGUebzQQhSeo592sxgErXRvUgfN4NFezGFWyppZJrQczZjL5jd1V6yteE9FjfE",
  "key31": "2Yu5EKaysVVhTj9FWdHJE1zav3dkD4sj7aM66aoKNgrQQjpmAdUAo4b5gHWSLzewhyz9mjD6SsFHHzBXVEvZdPEm"
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
