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
    "2MDWtbzUUCGTwR9iMZzP9zeLrjqH9aYybg34SQ35jbNF1qnzpb6ZYcHRBW4tGKM7JKSEiZvcjBtu9Dp9ZCGRLTJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GnPRzVjgctS6CQ5k19hNwheC7Wt4rGEpsPWf3DpeZXgLdLSWxKc8e7mWCQzqHCcmPWou5XN8Lfgw6urZzWQSePj",
  "key1": "5xrqebhXRVWBAU2JeTjYFfHnbPVGtRMswJmnuRXJwgyTVoYEA7HGh5zbp9PCzq4qU88DXXF7USo5t3ZQjHcHvYkJ",
  "key2": "3xyyBPzLzpD7Yg3c5hKzygEarMpK6HvnKybKX6ziANsRF8JmzREDsVrsATdP6aEQYb4RwpZEFkqR64oqATFvpMz8",
  "key3": "3xGDYjVUxgo1gbG8vzLvp1aoAMstRC2Lgy1sMco3bhhV5J8A9Ge9gStWrxH7PaXr4g8YcYbYaygMdr44p7BPFzQ8",
  "key4": "2V6wQVwQEv3DXb6iy4beAq998YRsDRdwiTiqna2wTXNU3aEoQALaiyZDChWrCesMjshnoa5XrkHS8tHu59Kxj257",
  "key5": "4tAPEJZw9ASM57JdcHuAuDFuRrAVcXNM5X9CvALTz2iDUeLrgrfC2VHdKAVH2LC5EgYJG6GAiZv1WbKKXLaiaitL",
  "key6": "5DM7DC8fo5FsCAVa9XA7PYy5AgbsxjZkCtcrZhWyNnYHryKmEmjY7P5B8bCaM5tSUJr7XuL4cDQx9Ct7aGVZ4jAR",
  "key7": "3JwLLfFjAudb8Spw6reGDh6J5fUDiAohh5G2Fu585jNqoabQSfmi6snsXLvYkGzh3txfaCLpvXxYzTUxBADGi7pk",
  "key8": "4FJioXwVdSZNgCpx1HGDeRDHUyaiYknepLxzjfd5j1ar7AmciZ3KNs7AezKdm1nr4PBG7LN4rk9bEPbMDuP6mPY7",
  "key9": "3peWkcPHaPwWtQpAhfunrSjGt61piZ6MeVDfLhnn8GY3wkE1YhaJA2pz3Hizi4tuFXpFYWK6YsdHgXxCAsV1qn4m",
  "key10": "5jtY9uC2q9fs5Zkms8ac7zKrfe7NekDCFnQRxMt6K9ptraeRLHdCeUUtaTp7B5uKjFhHW2ympjxnjbpn4Hy7rk9R",
  "key11": "32Hqom7Wr3qP9hiVx9yTEsLQAfW2Fj2X8CF7nLbTBj6ksMAetW8biV7pEixHPra64oATJ2FSt1WhUR1C8FLst8B8",
  "key12": "37uhvjNztqmY8399ACLDqackC5m9uLuiaJJ9wgp1GZU8c7BHRRt7F7b7RWDKjLvZfRac1S5uuHfbUj9cQCZEW8B9",
  "key13": "2pxSSVNccvWYyMCySq3zrXp8kXe9pHvuZo8mpZhYo92n5RMVAWdFsd72NPnFDGRcdcH25Ukyv4fJunfv1mnsbN4H",
  "key14": "24mw9CcBmVnyX3UGcZFD8YYsYbMXy3xHhgapFuppQzEZrhkfKgNpW7J7EgddZ7ybdwL917V4gmhBTyN12L5cqHMR",
  "key15": "5GifP5oYWTtCVTrePnChyeMBT8SknpYLgewBLfWi7hcdzsGECqE4z5Y1F7xW8n8XEb7zxF6DSV1h8Zj4MVNNQoxQ",
  "key16": "2YCd4qsFzxjBzguer8UZBb5gwVcDpK1ydUSvQCkSwxBUErbjwdzsAn5qttm49cajxgAjuTpJhsz53AiYQNaDRJPv",
  "key17": "2mbZhHAb7YqaQnMichMs1njqrAyC9z4Cr8i3f2mkPWkPZQEBZTptSeCrXoJQ6x4EnVGhhaKmyF5aYiadznzjMUL5",
  "key18": "3Tqv5jmK96s984DXJ65AopKSenRQ5aQveUC4dABik9KGpmPjE7JcaRdSjBo59DzazFsfFriEaNzsHUxaa9B8xsLm",
  "key19": "5ECYSnk58zrUhbn8z7hR3n6XyotuSDThaR85qk5LKvRwkLU4arUmLDB3Kd2i2VGXizidJKDTyatzFP5aTXutTiY3",
  "key20": "4uKJLkq35mMr898Gm8Sj5Po1ktWvyG75vkRESnyXJvYZ2BoKg7F3if28hqqYEvNSaMSSMyjqU1ciutiX8avuUE5M",
  "key21": "4eCCpam1xNBiRMRZC5sqMt8mKSncRUWN9YZcwfJrzhF5CvJBmq7HNmqRpQ4SgRkqVrXWhQpWLj7UXMJiwjguwrpQ",
  "key22": "23oJGaTTRRujKT8t4dLV2KvRQWDvQaLFBqJec6bzKJeSkD5w8uZVNpTUgi8W8Jiaxbc5LTbzAxc27eBBrzJ3XxD2",
  "key23": "53YijDbtphrtbtygD6neFZQ8sLP4zJag7yzAABE8Vhq8FPC685G4wubWYh2LuHAoUFeWs5KSyihrYJgujvSTJVdv",
  "key24": "39vUFHLpkdqBttAGSJcWRQ6nuLFz4w1UDxYYJ4cZkhaUvLdHCenFqqMu4MnvCdgUs3jXmG84mvLqSzbRupbysmTD",
  "key25": "4mgTRUyz86qiGntVSphrjSWXDDue7geCZvig45MwpZLc339PTCC7BpWm78NarUGJ1MycSF47aCT6TEowtHmmT9hi",
  "key26": "5TgZ3x11yPMjUwcpzracuA5DkcvRn45Lob8MH2KGaJrtbcBoq5WGHvj4mTy3VnRfDVdZ9nQHwpjWR2mcynkWwZNv",
  "key27": "2857oJ84fHzJ87xojsKRwPHcWZpN6oGUCpvjmfE7NMoXC6FxSp1zMW5qKfKCoTBDBAiyetKoFinnk7yBXyRgVLZ3",
  "key28": "55LGiqryLVcoYYoLjVBmsVDuh9K6dUPEwgJRQZcosWDTT9p35hwgzL1K5YSdbCxHQZmjhf9ug19ZU83wqKtHGySW",
  "key29": "5J678dHHMuMowsEQXXEcGgAHMn7MEdiEkXtvdgnzFCHVktQMhdkDXRn5S4QZZGbzD4h4JxJCEcN6pUnwNzonimf7",
  "key30": "jiUaEgjkdkkjXjuHxD39KZycvjezyscpukHPK8DCzwtZrdWfURqqhjEojE4aZ8byVS5kNvbopEpW3F1XJ6eKj3E",
  "key31": "49aphQmov67ooU6c1Kbu7epLSayzDeQrmMvza7ZtiVE3hKxnGmWYLeni381soxF4qmBAskNvWAzJ5RouZvPA7H2s",
  "key32": "5nd2BcMR7Xvc7UK7ADxiF7o3EqCjQJJdCwQvbZhhWLTeQyhrodcXHqTXzmpREbu9Y5ouPbg3MJkAUsWeTu8S85e2",
  "key33": "2XjcTBU2msNYA93nkfCtMK9BnKS7NCiC2mrYGhN7PpMikJZPsh8GPPoukLAdxCQnsEh5Wv6H6XwSubr5cR53h8xD",
  "key34": "49FPxKsFTHKFomENeVs9kfj1VDTsFKjJzoGzjY8gjnWmpXUEAPkeVZ5hQ39pQqL9YUQbTH9Fkk9hLLcUGvsPNmSf",
  "key35": "63tsuRobH5SvVdRA5FYAURTx9gY8jTnz1o6qDWXTAUshA6E7AUwqhZw2GpgG9uDY6fM7HKcavUZVqJi7f8SXhiJY",
  "key36": "3qrFmgETNapLvWZwwbz677FwzvGefEF5aqpwiBeCg5qkFuBWGKabub6Ud4Hm2ANqZga9FnuFgw29Fc5rHEvakPzp",
  "key37": "7188pv115pWfjwqpUWNg2ygxZisxSUBSWwPuurRY4TAbCkz2UnuW5cb7qYMjfT551zjnfhS81oZLRHNPNvmvxXU",
  "key38": "2RtfxJkfvDXBmVUV8tWHeXw7fgrmREJPSWczQSMiZQVdh6TBdpGfrCBbdQnhrHEYRtCdz8H5DqEp3bdBWGCa6Tiv",
  "key39": "3b2EdwBHZWzkXAfkE3skz1zQ7fawPmmJjhmMwPZiqob9tLmGgtHigTXjSWj876ejYxhnbfbUiRGgCTKyoqrKh9sD",
  "key40": "2aJjqirexyzbgdYHGyYwoPRNjkJxSENcxLiX44zv7MkDcK5ZTwBj1ZswfPriYAgogYnKzuhfK414a6rJoJJL3Y6d",
  "key41": "5epNZQpUu3Q9F7T1b54LbJhSnQwZN4AZQyRCkvVZMG347mQqQVF8rYbhsSDJMgJH2n3vRapfDpqdu4MFFTXPfRQp",
  "key42": "5Qwbd436qhrufXNSWRDJPV6PfAQujkYsGHFaumWUv48xaY5anrUqfgQAtzpVrpE6MMSuLYXXpMYxYCXTQdFYjMMx"
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
