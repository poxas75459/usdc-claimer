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
    "cK3XphvPdJM92pdanTR4zRbwiBpCNvMnqcrcVqyw15A1g88DeAQFxuVSWm9xr45bUrAjgjDbtx2EA4fEmrJxScG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63LteJBuFkGnHfec6U81WQ8TLkXNzceMxaMF9DeZ2PFSFVekw5q2QQvyrkFso56fCxXc44WC95o758G53M6Z88hp",
  "key1": "aow3hu1QT2kZPTsiZeiKZ5FT1KvdxmKJ4LcsurmkX7UyGUkCEeQmiph2Gd7VYZQhYYSTVPgFFfPbB9DuKNLAWpA",
  "key2": "hsv8V6pLYZ6XhvX2PhJChEDELDT5iUEQn85MJFDApLsCiSGZ4HtgnNraFuZ1Usi1FQJBtk4cCBi4qT5PjXueHvq",
  "key3": "2ejGzUN1XJKNfzW32LnHMY9RCsZTLoHMfMkkigQqzEWzmii8XHZh6VoV6fyhRDZCd6NotGnR24g7M5EVDnJpUdvs",
  "key4": "2BJMMAqrun8xRSJuqTzh6pYXKJDgvmfE8keew8YjjicbuemqHg1S4hatgPMqzto4F6TLVx6iUtSYLtuLKndiwK99",
  "key5": "5os7YPcSoxx6PBdBV5HWBP1zYARaXg2GcRmVsvpU8o6PRfsLQDs5cX5aAPKhgNXxKpqjg2XY9tgvjxUdUT3hHXDz",
  "key6": "2bpBnATy4Lt69y8dMoZu7h76tQFVZGnomQjYjCeuZqwFW1VMCY4uqhAYfiTb67PQrCpnUXbPuC8NWTzoZCiyGW8i",
  "key7": "2Bdu7x9vxxJMRTR3E6wGwpa2EQef8LkVYUVSc5ykcRwZCdQwbWpP8mHZy37BBfjpqtChqSbbeK3U8P6vwv8midNE",
  "key8": "5zX387ZxfKtFtkxUG4Qf7c1qQLx1QxtQKFb1mdVkAEP4zqgGsfKa9K26VSgWbsJGzhXQSKt2nFq85cfiAUqs7KH6",
  "key9": "KCyzZksnF8VAd8MjvJCq3BUF7STixZH6t4yPaq4T7Mr2Ex82YvS93Lx2D8QmGZiAw4WxJXRyxXhiangwn2xjmxC",
  "key10": "52e8u6CT5kiz6rCi7vZHrQLMjgbjshdtCKsfvvzssocUxyJsiKF37aepptuYNocgsrqxbg17NArZRo18GK4R2VAf",
  "key11": "2z7Udoec8DAhJhQBZhnNvgZsrfxv1JpUqheEBssQAfBgewenoCfjbHAb7VKJFeAAx4oVTSMQLWvLF2tA8RhENFsL",
  "key12": "3uGWbMY82R7ZbMyUebnf1pMsAnC31ssNdLRH4qDiqy8fQ7nHTFRvNezZ2Hx2xdmHq4oD5rfKei3W9yVkP4DNcxHy",
  "key13": "5GaB7TkHdc4962M1XbETfdN4HrKcM4zC1iFN9RaqJci8VkdYnS5UViA8jXgniNzz3jHuF7chv2294q5GzHMCZSVi",
  "key14": "5pnkdsERbrRbDWz9LeXkQ7gbfN8hqE7iXNmG67u7NxwHy374ChunXX7i92apsyvRpKMMNwAMBkZhAFvnDgwAAhXh",
  "key15": "4RjvDKXygLoViduQxM9Gkxmji6fUe1eZYaXBeq5QK9wL217DgBkfL4X5GbSYwxszjdRtWLFKVHtCf5qNLwKp19Fr",
  "key16": "5dSaDrmP6EeBuNPrSgJ4aehsK1dkawQ5ncdGjyZep6vby7L8LL7QZfsX1t8ifmSgJnfw645rhhf1nuD49S6quHj5",
  "key17": "57k7wpeccFsovL7mRaaHKBUXj1t1TztuAkG3mxtRka6tnT4FA8q9xUpbz7ij86m3o5xRDY3fEedRqUEN1BQhQqno",
  "key18": "3QcuMwuQ79Gv1GQMVPuFsnYr3kEr9CNQZ6Q4W8UcnUZPHY34z2iCC811nXzsuro4KtYM2yTjUNJrx9bff7VH2RdB",
  "key19": "4HqSF9dF2BE1KCb1qPNMkWT6vEKePG2t8AFX6bx8aWJrhHdodpRH4Z81NTfUpBR5ssuzQfZqXQs1wdTV7MjE5LJC",
  "key20": "65YSuzim14EygUDvvKyFm1bPckex7bYU2VHjYSiSDv6C2mBRdHw2oHq7QiUap1majPKdz54cgKdfq7akYfiGFPRz",
  "key21": "34h6DjWFRHhG5gXfy27sMPZq5jgUA3jGPXXJWWs29rNjcATchgFMzkRuKCU4CyuQEAN8W2SPXydxzSi7DVbs8spg",
  "key22": "4FvyoFe9HSddUUDDR2yJL6sJo2pwPKCsvjNeeMMCibACK2i3zBjrUK9z5aKLRpK2HVR7kSNPRgbd4tARLU79BEHw",
  "key23": "4D6aEvRKcxaifnWvtTQ1DEhcyaMze8Am3HUggusxHvQqzGpoVg6KUDPj2tkhQgU6Dyi8MkqoCQdeLipr2rH6JXoV",
  "key24": "24Fuzhzzqsdz2qwHTVqrzAP9RrHB9Zji2kDFPpWcehMBNdm2Df2pUrrJtVQZ7TLBCdtAjZmX7yjwUK8M99XWPTHr",
  "key25": "3xA16mHQ24DBjCf5CDsHxymy5pkAYnogJgmGg1aBLaebk4jQkg6JDHqxAL3vABgFxX7WvfoZTBv9kzPneasMzEMj",
  "key26": "2Ek238wS4yM3VB3DnnxsNPn4KnjYMMGv8BdQT1uFqYc14i1efVQVxq2GxdHWmnG84E7oAhJZVG1g2M474NEoreR3",
  "key27": "3yGza7yLjYLgwZTFBAg5NSYa5rH1ru8sfe1fv3xJH9UDHpAi97cArvbrZM61MPPY2SxnUMhynithcfL7TVb2ypps",
  "key28": "3KCMDpVDLKksPU6jT6dX8BGCtPxvCN9xmiE6tmBRoHXJYirMsY2HAqN7Kw3deyXKu8J9P41QHTHUK1iGEuL3mbAV"
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
