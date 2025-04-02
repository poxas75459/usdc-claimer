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
    "jxcsarXKaq7MZgT7osztbJjtP4U6kHQhkjuvhjWHs7K7rV15XyJVopAQR7EwJsmMY9kRcnkzxLVAEQbfXMdsbaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UcqYMP25iDPtU4ZQBa3a2yfwYKU63Y8m7tzYy3m2UWunsssBzAGMFtYcfGHXbsehfatGFNo4sDQYzpAJK1oQipi",
  "key1": "2Devap1S778JUieFrvXNXaArYrBSLbhzSeH5xDxcwgep8CpiDYfxPALhazgV8AkT2T8M3sX5fDYXhCV3fvx6BRSg",
  "key2": "3yy6mNPVGY3qWKiDX2izmjwsxD1Mh2E6Zw6MBS1riqM4hAAybhbR5ajqxmDi2PJcXgXPrbqnSHtwGLi52n18HDjM",
  "key3": "236P1mNtFk8Di1ntXVo1AXGg3aq3LLpoMZ9kzbdvpFKZgsgzvT9NRtDicgT9Bzdn1XRWU558qJjyn62nZYjPy669",
  "key4": "2aTUMAiH3DUQnrRGqJ2SBGB6x7tGWe1rWGLVRo5QoXi7Z1UqqDSusm4u341pPQDXKLughL8jmJV52KuJEWf6aqKy",
  "key5": "4hRxW6VPRuTb8shErLAFbAE3JMCPaFMA1wmB9hKF7tbL3Kac1gzwTwBZmaHRmw191GnoLrT5mRMRz87mpN52qVRD",
  "key6": "sFmmthM83Gd7pYEY1rVMeTbQCjL9WYJuYwKDm3mT6qPN9QaWTPtLoteTjAxrnm6fszkZEtBaV3YHjnyrZKLwpHo",
  "key7": "3gAwxorEdQ5CzJjBNeWu4Nj1DtLmV2brB7NBnuQCtbxBM4bq1RtETtjs5GNuETuGjjxD3B94ezXQVSMYP1mvTtMz",
  "key8": "d6bX9287UKFA19RfkvsK4ZUL8Umr9pFyA1jEidcQuoicwzPVmQyoKCRLhnZZY1GbotQUroreMJabH3sQp1PxseL",
  "key9": "4MzdaQ2z7jFbRu5DPLAhnVFcTDs7zJWu4oVLyocaHccRgknLi4K77y9XwL7aUfey3Dnsy8kYEfxun4NpMCQUt2vi",
  "key10": "2FMxNtpb3tT1nzUaxhthXPS18CfF3LWkszN81hB5NszQfgEkA76oGNetgkqxtrxbjbSHjMKthisMLzNAuuWt66wk",
  "key11": "5sfuZpj14NuLjNDdPWDimQtqVcCebcpozaJgvNXJkb8wU3oxmeQw72De8eUSdTi29sD8H2HeCwX6dYo9HtbGbpt",
  "key12": "S9YXMeLhGEixSf4go4XJ24rZhSorqVzUZLNQ1iifWp169VbKBqiHNugm64MUBomPR2YbKvmgpLggffTvqKJLKj8",
  "key13": "5Gc97As6wSNHiG1J3a2ZEJQwji5EjMe3mF6gLWHZZodbakuzVNN1AUs6b2E6CKc1SvQZbQaS36vweXjyGXXHUY67",
  "key14": "5Kwvk7mVt8tdoj7KTDg5G6LWE2q3GiH9i7LU11GCm1iN2Vy1yZJNk93uQYhoyMLUxPJLmsxSVMbaQwwcE6SEMsNN",
  "key15": "4CecvRYxtLidJ1sXZVZYu8tK4Sih1kAa72JxTikHJCvK9urjinoTHcEzqpVpvd2AtWWBjjE8s9qvChEmSFXF7MJC",
  "key16": "249nL5XkdnkVJtodjX5NA52HW3NiNWnjLkeyDCMQ9EN81DuhXrhmNLpfM1WTxsVvVhPCCzFKoMKNToik5djnJjpw",
  "key17": "9id8XdD4sH3iVzNtV4XH5htixJHjPVp5koqxTqdfvU89mdmTeyVLoZZV56rQuZ81f9LDim6qZxrUgTLCczDipr4",
  "key18": "2ARVJHUqRqjBZYxe4ddDJp79TQ9BdMQsnbk9PJaN5DwuNN9n7crZEZH1YdnPiK32qVaC1aVxdrtFi68qbgcpAkqW",
  "key19": "3CTeLWyBj7ojnPjFZdn4zXTCXW8dG7W2Bs8396bfS7yyJBSqUkpPUPgG8hGhGSqLwjVs32WdhisPAUnAoNmn5ZuY",
  "key20": "QrqY6XK5j9ksTXAy34VWLbHm5jQUe11Suo5r65WtdKdbgtfJcy4pb3TBGX9erTsRJCpMGRanCpsNv2Rp2amCYPm",
  "key21": "51SGviZdeDBLKFtWSq3r4PBzWojzwKmKWvNMsi5qCmBxQvWinMa79vZCCtiic2Vsu8zPntH6DVPKNz64KEoxjiXU",
  "key22": "3DxChxBVoWjURGLhKmZtQY1aHRmTtSJJc75CEUt9UrjK8WeozdkjLgZ14tbQ9NcMbvQrUZqd7UoEHCEEDXrzqfxM",
  "key23": "5F9F3VhUm7KyyrdEPwHCC6wL4xhBePtPYkUudkYfBVvvLVGZ4E36SN4Qyn49zHZ1kiuAqCqc9BPwDef9XBq5NDax",
  "key24": "Kjv6G9MJnVt3W3P7NhK3rBJvDC7J5SqZDLd7cSdzp1J5BZ8kMB5cBF2XMPCzGQQJZAmfFqDwxWntNxBGAgwn5tt",
  "key25": "7QRrpKQwdNi9ZxycBymJ9ko6ZJPnrFkXnGtWTXpqWrHejPF5M2t1GLn5WAB2e87j4Z1WiXVxAwTrGbq4LWbbVCE",
  "key26": "5DwdvLaqKtJLzfezM5oJCVaPLLosv22iosPka9UNV89NVyF39Wo9hUDBBFGLAhEQ1ZPjix2WHss8bVoMbDwGG7Vs",
  "key27": "4r8rk1PxwhbtrkH1WvACMn9DQftGuY5GPyWXZvzMAR6kSSGkNjm7uv7atSfH9HzzA7KeFgC8NHrgP9J5M5yQcu2u",
  "key28": "3RprM8gcYdz1UbTjUmtdzvUekFuV7RjGS5S5JAGP8aU2ZSyz3xjy4Ydg1m9hFhvuLVEccP4J85GBgBjmGHeEDRxq",
  "key29": "Yj9jqP6HFLn1awNFbjruASuGcvetVRKp9AYzLzCgRbzszzpBbgYbCKEzvdXE1GcDHJMRi9izDiJQgSpttN4pSi7",
  "key30": "3sgLz8tZD9U7CwtGnaZH1VCwYBYyyZmXDWTRLxcJbb5o2v9RBwN9fKem2aQNd2nnKcbo2y5wgSzHkjeKzYcPDYWd",
  "key31": "gP8Py3FpFBGMoRftyarTBKEDCwn4LcVuchBqBAYADHte9TGdWf9RZmGKMqsRZgRjbR1suzVHjVfXiAjaqhZKCtH",
  "key32": "5aV7Benoz7ihsJXGr8VEuP8V4aY3JyUXPM1Hwq3aYKDqA45aqHqW5JMo4aqHvijkJVuaipKyncnzumLbmDUWUamA",
  "key33": "5gXNd3Sxsf7NzwMww7MQUGpPLPdU5NcHV44dzTdWgd4wUPR96wHqngzDC6MDywbXv22c8SzQ6jDCHDQEFrEctee2",
  "key34": "29VXaopn9G9xje2NuSiHs4igMmzyZutYGb1nYPMohZ3DWAbe9ZhD5KDkWoHDm71TbBsMmq77eZ7PqxHUxwgSG8i9",
  "key35": "4foAFf7Str21XRCyLzZzJDX33APpSnf5Kf39ZTRQ8ftGyM4oMWisWPDhyyRwEdBos4fPyjVxo58M8bgHEYqNzXdf",
  "key36": "4Ww4zk3n84YSzCYxVaSsp8TqRcVEF6bxVgWXPdA3BhZmDACZMX9nSPvbKKr9MhJXJZwuJnvyckWENGDJMtCepe4j",
  "key37": "3goKUCBqp9881kKdTUXHXNRx8WAbXaxGtutx4bLTqDL8Hmm4w7uH11P4QJUp5wEZgfScd4HdjiimRqre4kkpvyd9"
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
