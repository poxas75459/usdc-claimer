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
    "3njcXPp4wpRojvpBRp6fJG41SEMBT4w1iVGnB1Lsw8WX8LsjqcUAKUdqerTZeAUnQazhPhrHjfGJpvNopj1pRMfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V1VHWuvp9qER1h71ARWpG6fjLyy7op4PoyYvi7vdxiG83JW54jmmJ49X2VYqVd8KpWjFw1af6t4atCqNgbBsCNA",
  "key1": "51dKdQDk3NSohdogvqE5DWn4SefKBe4nCDHXMnxpXQVG8cVkQuL8kbjtn3xAawaowAPfFQq7YEL3GPXiwPpQbghD",
  "key2": "3KdDymsAaQoVduha5Kb3nchdygBaY6nyRASnKiF4RvHzCPcqzMShY8fycZMCRByGtgMQu6GxSo5AMba5PxsQUS29",
  "key3": "2rpgPvgTfPhSw7cWkBwGKgm4t26NoLWNdTxqXknM9GjbG7bhQ9wLum7YHidHEq2SYwQSDsZtcTw4b4PMq8mSNHZU",
  "key4": "4cV6NL5WsDgAAcntWDPa46Uupg7j5s8JTJAvvEAWM8cBAPfbCfcje6hYjFXeQmV43w479cbimLeQ2xPijpr4TiRo",
  "key5": "4aiUELmCUaRDwtFsdef83vms7sirRhhWgAEeK9duHDj7beYFxDFtWj4YJyjV68sbrEN38Ztu4kJ2Kzi8gewxHXzA",
  "key6": "48DkF7v8SQwwHur7c4son2ebMy7ckyfS1nuSJTsjwMYiM3Ha94VQSVag1ZAf7fLVj7xzs3JVa8g8yCQQsu79fJ4E",
  "key7": "5BWxQD8EDhAmCcjkFG5ns62n6h3zsfVwB6ATAHtc1dCY7fJEivSbPExeuWnfoas8RGzP7QN8nzaJK9Qaam2R6a8E",
  "key8": "2ekMvqrmAfJjPoHWXuQDvKSqKt7etKNstjA8Mgu5kWP3dz1hEXncF72n72juEPEjksG5qF4T2NgKzDH8zTujGYt5",
  "key9": "h7Bu8FRw4Ps2JeGJTLZhb75xbDuLvw26QyNNpdDFDy9deUoeXT5msfe9i8juF9zxtMLKfvnJXBUZQf8Z9VwsYj2",
  "key10": "124o1whberTh4W8sS65LNhSLpBiEG55bwuU5iLuL7eJqmudYEfvqWTg5qFAWpF42PxxBVV7nt5xY4iKaUYz8PWeP",
  "key11": "4dmtg319BETkZw2Tr2XYKb5qSWBX3hvqiAHtp9jjaVwa7TLH5sRes8SMdmivJFH57wVhYwrAEMg9xaSsTQVgiCwj",
  "key12": "5hcTXpcxcLszCY4E5gi3HmiLXKmkeGt5r55Pi9p7McgbTQxoESqYSm3XJU2hLmQMdtisd9sBvYTfcQvRDPjLG1wo",
  "key13": "63udcY6hky8qVC5pBLvvT65tKQNPtsgmVfr1BvJwzTQmVHncdTo3ScLwqCzk6MkCz9TjkxHwsFDHCKDEYxWJeoJc",
  "key14": "5882eKXQQeRUjYzSFLDkaWss8aZZYLvM3v3EPtRFP6nFJK1BFdsCjat2XCGLRX9tnTbHvEtodzYbk3XUJAm93vaP",
  "key15": "4RYMyiDaxWntLhZcr2ouymxZ4udzovaxtAN8eByActnZKsBABYZ4qYiRkYRkwXYdh8BoX5NNZgpbd6dXo1Du5jkh",
  "key16": "3479aTu2mUNTsx8V11dNRinTMChsryFsGpoAZkXY2nK5cNndpE6QeC47meCHzprih3SYC3sTVYvdeSdhaXKS2eyP",
  "key17": "28XVgkUSqdBPvpEtrKuoDSduXthUJG7XGZFdQgvbHYYnEP3NMcMHD6YcLtgULgoQaizM4FZ7CzUV9t8WhqVkkjkP",
  "key18": "CoetL6o2WaLB9YdYZwaCoz9XQH5x4jmAo3FUbmBAoiMjTeTRS3FXocXtKyWPrN2Ge6EhixC4QWJL3cQHRP3RByb",
  "key19": "5NifN28HNr6FMwbMxWhNKtLf9NEFas5inXFut13oP5iJX6nh2yNYskBXoLwCoDr36uk8BNdt5F2M1hvdy3BThLMD",
  "key20": "5M7Xz5EcPTF6H8grhbj1QUs9arHiFjeQHUMnqcTixh5Jp7VVw1zqPoQkzguu1iGwGQjZpafBqZ9wvE2aho1ESwz2",
  "key21": "5dmsaVZ4ESX84YMQbjG9GmtmFR51LAQtffc1Mz2bujVQc8wrQRuEGERVdrtoLfMGEuyYCVdXDnxAz3iC2cKZQqMw",
  "key22": "5aT5kDYFoFSYMrbusNYD59PenvoWj4HwCwV1mJqa5zgsHvkcwvrjxrRUyonCR4jZibjNpcLQgTDGCBswLmHkT9Ec",
  "key23": "5UFiGCmvbpdToPyiQZvewtV4emjwCHXT2y8a4ZJ2LwBvjN65L8VxoSjW742NQATqNZ2y3xN1YVvf9f8m1trJeVVe",
  "key24": "3cnUZKwdzp25QA8aXmfT88VND97jSuVT9SGdqyX6ChbbeA5jnyYMJLyH7dyxsx9FwySbUwXvxvZ7mLrw6nwRVTFB",
  "key25": "5csSFUVgf3UvsN2sha5LCDNjy8D7PK9enCSDYgRtDkr59f8S16T9qw9aKGtzT42xF7BfZYbHxvC1zu1UXVNykrij",
  "key26": "KmZeqbx1oreoQZ21kDUkJq7SCPPXeQCtpAX2vkcr5gpQxxmirw5gf9YCHNod4yAMB2DV5uhMkuNYrtHhJzUZWUN",
  "key27": "5pCLDhu7DSF7GYQgMRpitGJfrB5ohQSbjCKzGtXdxmY9fCEtBFPHaNALtGpRJQsmFgMGzBBZDKPup7GXP2YZS4ok",
  "key28": "3Uz3XmV9B9fXVwXrHczjoZohNhE4EtayPsiDTirNkmjymsq1HJzXvnVrxZWFDCVgUDfJRe5sBJ6KDM8zF9S9CQom",
  "key29": "38qsjZXSZSMDq3L3Ph8jRMRPPCqqKAFH5QMV6Ptzh25gcnRunruyx2L7BcpaofemxHBv1gBN8eUMPFALktufBatn",
  "key30": "4VroPepPb9RRmdyzEotN63h8mUNSySaZKHwKiipxHXVN3aT1QFEmFgADEoeKYjDcN6Ta5y3dfspuyJJrwKeU689V",
  "key31": "62oMBfudQTtWrtHDDvD5KvyUv4GXjpYHs4Uytg5Zve5YoTwQW6rLaF899vnGfm6zM9ghmmyFVeA85Q8uAWyJhvGm",
  "key32": "5H2K9M2m7PfupngJGJBdUF7nqWNCX72QWH9u36t9gQDHQ9R37Q1asQLMM8mXmMvz7W7MJcSvjaaEcooC97XGaTQP",
  "key33": "3N4R9hocVapLEPurHwYYdXJ7x6eo2DJTLGKy9e7dpPAM6Yc3qHKjtHe5tfRWZ48q9QdS3w1TLRi3HegyUoFXJYBy",
  "key34": "2VfThp416HUJfRfu7X2gH2WGQH55n8bdjgFNV3qnSMAvBaz75Y6BKBjpnuGoUZNbqETHBQ4ZsB67dTyqF1UD9Ecf",
  "key35": "4GNpv8r1stDbjcKbPUxCB6SgVBcEEKxy7hk9qyoVpWLQHLoPwHMKotwQmfKib2y28gmTh1AiFxVt9VqABXmVfciw",
  "key36": "31JZMCysKWMn2MHbraAva6izyZjY63zJ1JiYj9tnFg3kP1bGRVZpzJGcjrxEdq1mQp286rXw9VQ4g6wEKN4qv42P",
  "key37": "2uyAQxs1JKSeD8XYUPNVdp9Wjc9TAnExCHKoyeyxdXoD5fVAHm6mA9JVLn6S9DNu6hezyS3vgoGSjVcoevx2odQq",
  "key38": "GiwcWBXM9b88JSG63ekPe3xvGbMQthF5Dsbc1RGRpT5mDLpbhUMTyVrYNBZagjz9yY6Zhr9taPpvT6KamKX6ukE",
  "key39": "53C7yjNdcDHj5gV67KLRjwDanSfWTmtd6aVnondhEUeQSxiX3efGujoiT3ZdnbgKjHdkXQoLy9kGEWXTYwnwk9GR",
  "key40": "35JhXQsSUcR3Ye9X89hLSPStonz22zXcFHa92FWwHTHtfcH9Xq5oQxdFKyhH5ejWo7MAthfSahWhYkPxrzcZmfVn"
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
