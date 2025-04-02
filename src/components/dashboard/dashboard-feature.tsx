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
    "3tipRsDru96i4mfXWRqR5hpZFFm4rpKtopyvZRhtH8Gy92P3adKREXi9nTrS6gmrapRwsZGdDSi1EweeqAxqJyNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FKVNZHjrJTPaZX1pUVQv4dxLDeNCGNcFE5JJRYWbDouJDjJznxdgrxvvFGD25UqmDE5VmPFuvMcWb8FLor5W93A",
  "key1": "U5wuDNWq2S4Zs96NWASf4jMnV44xjq5mqNAicKyJRDA2HgShJTqSzDPTF2qWoJbbMHNDN6eMT6vjcpBNMkUpV51",
  "key2": "4B9JUuP8m4LefZiCHFU18SVS6Ut9TZ9oNyUsoNaWSZnu2xjQfA2QYwREEibemFyuU21HkGufJtwdkWL5Xd2vkkfy",
  "key3": "3JV8W7kWZjoRTFR82of9hNZsV2AsA8d54FaxTAtBDgopV4Xh9fY6CE6QcYihv8BzNnYoQKaa6s5fU7DgyjU94Zpa",
  "key4": "5MfGA4AtBq45dvBjf6yruBgeMQiZ9HnVRhjjPQJHGz2ey7bTxPGkmb9pMJjnFmvZBjUg2pRXFezRgPGMES7hoYeH",
  "key5": "2BrwmvGgL9JPVtCioZUjFQaFzNv9DWuQ1SL7M6q26qFgrhKvqzmFacXmNtkUXQ1YR4MSLGMzssUTKqZhiRu2dCqM",
  "key6": "5pSHZZqW14rSiW229JvG2j8MWvq85yhfWQP3xPNd1LYyfUXxh46cmCfGcwZn864ijVrzjLkh8gzSJoMtusQE3D8s",
  "key7": "3YgAZmiww7uTgem8zajnjisx8AQYgE66NenjMjxg9nagMiXMZcRPBhdCHoggMYhwYaFVKCpHx8atxC5rAnEQwxjv",
  "key8": "2Vcf3tbCvkrkAamPtDsq7iphd5MXLEUKwfAa7neHGv31APjvrKniVtShHmaUktMfQa9hMKx4y5SrsWS32Ewn9cNY",
  "key9": "3HuGRJuoQpm7GuKC4E3ovCdWtkLVfkbJLtspeFW1ZjsjtTrTfbPaAPRV2TZcsb1beTvDiAccFP6hMejeiewCNvwB",
  "key10": "27T7Vn5DC4x5LhEXVhKUDTa2ak7UZNhK3Jf5M8fXmK2rbCy4jvcZ8c3HZXMn7gURa2HLqgmv8ymYSX87i9BsLZev",
  "key11": "5GzW58doVkpUf9ztQH23H5x7Pj8SeL15MwEPHAkTJ8RVZLduJSuU3Yu5p3UjMLoQsm9pJUGrHWGjqRaiyGb2QAjM",
  "key12": "2W8urch86GLZKHTAjwmkuMnkjAhDbpXChJ8RQRp4duHrfB9xBaWKhQvBWMP7rm4Z9pDqNULeYdkFAvMyv7YkJ5AQ",
  "key13": "5ewWcEBLy3U9TGyxAEMaCXBEwebskNpF98Wk8Xr4zuuT6JAV2DhkCw3nqppEwLYovN5PdoU2a76tc5emi8bY45Ei",
  "key14": "PPTCkafA2pkLLWWrzaPzdo2d3Zji4AzP9BYxF1xvKoYGpt12we8yJCsVfCTwfw1nKumqPAqyCJqessep5CVXL9J",
  "key15": "3NWnDARxe6mQ8szUzLGBnNEqu1aW415jaHSLrEbmuPRLqr5vjTp8PxsoYkta6Ja5sETrHLcKBh9K6KyWC5RGoP5m",
  "key16": "4R6KhkHqci8CwQnCvjSUpy6AnK49NCRv5Skg93FuTbVD1DBMAfuWq6jXNwRs2EdB9o7xqq4QVcUQkzB9ef9zq3iH",
  "key17": "2ojL8mXnBzzAVH9bW3MZi4nv1ppjsx7jPE8ZahmXCtwx47jEPd33LpHHW6Yp43xVM85bhqCaNsQuKuD54a9jQnzN",
  "key18": "2zm6HGuq3xCRXDDp4X5hjLnqDhpuZTxu9dFn5bBAfiUseopYqrkQrUzGXSDWxxUFSJHSQwLzm7M24DPsbiHVsY6W",
  "key19": "5QHnzzV2LVjEtnFoAPa6FEzobxo2JFqqU14FrE1Hvn34VHn7mDAHTo6iKDA9EnRxRJhqiM8njT6nC6zpicF3U6Z5",
  "key20": "231NdYTc5UipavTF5A723gZeoRGEMkRbM5t8PWpxVDLSJ8hoXouuKd7JdG4wk61Acr4FR7MvoWavaE27Tg5wNSNp",
  "key21": "4giwebqXDTm7QC8R6yrt152hgfmAuStGq2dfpVzB6eCpQjatHvd4wnRzVV59LTSdKQcXm5nuaEQ3YfWRWHKVc2Vz",
  "key22": "4qpVEvdxSnFJDEvVPSrpaytKqUYwefBBwtzDGUUy65bNdhAVG45xdnYQjSy75QBrcARa9GCsSmXaDRLqkCnpoJAA",
  "key23": "5SzfS6t1HHuH86e1WDMeTTCYJ7snWJtHeirQvr2bZL8rLiMuvcBjZHq1ZMhAXViGWTsKgaYnCiNF4EToSGdG1Ews",
  "key24": "4EKYpKK8Cwrgeg3CA3HQY2WksUdaLjbW32oZVABavSpPFhwh2HKkhtekMfc1djtXUPDe5HQHQB98XyJRvdAh4Dw4",
  "key25": "5wiC9SaPFvtAuacNqmNwGKeH9639qGhTx9L9aq7sqavXaJngXmMbAeL8scmfNB4YSovWQ1J21ozFn9qEQtEwPDUJ",
  "key26": "5d84mxWjdkN7q8X1aqvEmUNV3zd83bBqbbWRSzBf8VJmHg1mvdrs745srE9NUAgVH2cnkbMhqkgPBC9pkwPXz5vK",
  "key27": "2jibvJcoYHCiaTueQ3i4PuokfNwf59S66tw1muMkRpYYw3ywXb4LUJoMmNVj7VLJzVvQxtJj4JmmH14ErCK3zDMH",
  "key28": "3Noso4iJdhzE2TgxrGncdfNkX8rp2vmhNukZmumPdasL52X2pcAnAkywtdSPcnwE9f9wQzBrRqHKBmVwoXp3CcUj",
  "key29": "MRiJe7gWFhTPiNhuc1YBLvzonFXF5ua5Pf4A3VHrePLPJexFbNszTiNTXdaWxoHbaTKLh9nPSX4MsYoGV6o2vX3",
  "key30": "4NqeyZQAvFiLaGVyTbTr6JB35efKmLV21KAJBPqqbcm8Lo8YLj4TnpwFigsfc4buNcH5VsUdtwQ1eHVvbLutn5K",
  "key31": "2761TMKRmsWokSpqVcUXugZr1sMqCTKveWNCiJ7dGcq3AQZqPY58LV42d4GnMnLAhCjH78mNJaCrvBoXuMK23Vav",
  "key32": "4JcYq91QrG6nbVZKXcA6ouUxxurfHj7yJPNs4uybUxeYqKQU8AaoGPwoVgqd6mbhbtVjjqDtPpeuabZ7sUCFcv47",
  "key33": "3CQU6yeK8iFsWBSvieKNEmdYdPRSPs1o4jnGbV8QpqvoXST5S6ta8XRBqvnG5CiMMJhYfw9fBEQ4AT1L3coSMZ6J",
  "key34": "2MYti59G6xNWP5Fpg88hiE8kj5j4e6fCYhvkHkoooyRbiDDWCtbNcG672NiXnZHJ5uTGBDsAK865c5sCEAsZoGJf",
  "key35": "3MDR6yjyeXg86Gi1SjHJDu4hJHpJw68eSGZJ4zUixBTivf4i3EYPEjMBhSXN4B3bH5HfM7J5dXURCKCWLurrTLyg"
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
