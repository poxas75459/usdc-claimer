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
    "4YjaZejtdTPjvaQGTVG91SuRWFEmydkcgXdLwRdUnKkiyJZUAV1x4aDtMPLrzSy254Zu2g5xWiknrQdCEMest1Qn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4doKG4Y6ejEJWSf3zS5GbAYD13myrJJhVh1r24Hdxg36VAjweEKzwhuWu66bQCiX4PFCPKhUiX8w7y77KCobMxxW",
  "key1": "9981op2CxCSBYda39ZRcuU4BfL9G3dyxviKWyQor83zrsZDZxZau5DNaFbG6CeePWWKKV43ULbVz4SJVWwfT3at",
  "key2": "55tfqQoeb6uc7KdCN9PnC4tMiZUjZerPnSdbKBEcgbFRXSNiZ9VEy5y7s9Y2YgSawMdKJBTyKgcfxJ1hzJwGhudH",
  "key3": "266Y89XpFyHucZA9UBR4ayXzAfLQ5c27jHQvJn2wk8XkDj3r7q4B5MBngbATQL2ms8D2eB7mn2vYBUjWug6ZC81e",
  "key4": "5evWepB85pz2cFkVrqeCRMUnaVLgRWAqYns2h9wRUwqc1QK89A4tQgReZwefqa9JSPcSfuwCJ8KivppFknQncqb8",
  "key5": "Ma4KoQ6Njr47BtGJ7JD9DsHyShFwVjfRvRLF7yYgYBGV7tezyHCbD3Pc3MgQhajMpCNGTfkoAUC28KX8B23G8Kw",
  "key6": "NhaJJ1bfDgjS5GZiLtaZJkg4firHXWH1GDiJv4TRe3adwGYM7Y8thsgZytu5dt92sbwipbjSCEpKS35UQngLqtY",
  "key7": "21QpYBMe5hpGpUH9YHXXDnDnHhmQD4DxwgyVWzra4BZDiVMnXV4RL84fZ71wUbNML5Z2a9XmDwjkYn7TVZkAnN5H",
  "key8": "5VsXb1dYf6FWgxiQSiQc4mxj1u9hWHgAmZzs1gstAjMEJj8VLaZmJ5vDgHsbNpWpFu2j4fqgccdy5Te49QGGh1cz",
  "key9": "2muqP8w8jrwbY9exV6dF1DUJ6oZXodmyqbF5DdFD7j1P7E9xSWJWk3Tf2Ryuvb82ZZAbygqedvXcGAQLYZe1SbSM",
  "key10": "4qTenQ4nWsu3vyK8FiQyKd9YM5YMSFEijJnPD6m6QzJbPrEhmqek1QFENHobnikMaVq8ciLGF5rPbmfLG6Yzb9Nw",
  "key11": "tBjF4Pi86Ko3vnTzvsNoU8EGNesCgFQMyH5JpRJ3C37Z17fveGDuXEGC2dag14PBXQsvbHV6zXd47fy2xsm7aF4",
  "key12": "5vBdgKNYNBzPZooUbSRJ6TTYbXQRarcrGhUK5cNHqrS59H7qSxs9zRWyr6rkBPiPGJ4nzztH4jB1mdm9oNUdTX5E",
  "key13": "4rgjVWBX1Tt27QmpGFzf5up1PupGi9Q4A3u6e5VRb1cVGwChsz345qbumxD7VVMbrFZtWYh2BSuXkB4jRZMKpzzp",
  "key14": "44tujbQ8D84j7JxuE5G1eQaNWVH55fTyQtAaQqvrXeNiqJFre5wUky4Uf9VTjkpWYstmR8wUbnhj4tPK8GDqgLKD",
  "key15": "4SmHpwY1gy4cwP5KQvFbbfziBov3J71vi55n47UX6gw4ufLR43rMMW9cfZZqg6vcRTXjPQe4YDHEwczmp5u7DvUA",
  "key16": "RLSR9RoKpLJKqygy5qKKgfUyFKqYjG7jqfRygo4E4c7cnxTezsY3ZQsgGKc4UBjktG9VPuccv8F7KbmkdkF1TtG",
  "key17": "5PwqqK9Bzx34M1vFwYzFdu2oSzqoqMmGfKMAosPzErehAUVoSQvi1BxfzEhAF7NVACCTdCg9Fqp7chJuUySRxv5S",
  "key18": "2bjUM1QXV5XnyhqWTzPCRtZyHy9pb3pRtRg64Q8fkToUCZZPnfbn5svW9v4MLK7pCEupeTm7ybaNwemUjJnsBh22",
  "key19": "3hYz58eQNdnbSDTsdPRcXyh1wRavD8P4QZ4ya5irjq9H8J1gzdNeLsTMXQxRtcU2AtRf6Lk242kMmnFXCdEfbY6N",
  "key20": "JWEz2iCsosRamAebE3FAXs9GKDomv7LmkC21PuAL2FxXHQSKSLyBLsg9c1u6wEPvx2YSpv5duD8LwidQmvE4jXi",
  "key21": "3sffVxtxnM4YZJ9p4eKNHf3hNV1r1FDPw4c2JXxR4hyLqYQYnWCNFKxbagUtCdEiWEzY2ZNCxDsp61sfkRHuJtYJ",
  "key22": "2ATWKaXDLxTiMFRu5Nao2xcR8vwGxuLh6evk8dpjyNj6AoAGMr1u6TSeLmMomnN394SoMUwPZZdSmNRy12AsAYs2",
  "key23": "GnthcLvKeuPuh9GRcrnV1dcG9Jeab82fDjSQtPHq11SsV2bZWkcP6a4D54qguqeWa3622A9AV6ybtKmQGWewom5",
  "key24": "2jg5U4396sys2uXTWXqaKAcyJKfBewRXYA1HUjUCVgdFFBke78GUwRLQSxKraFtgDWR2PbNxzHVkWpA2p6PDdefz",
  "key25": "49LBgMUcwVH3e4XEZqa3rpEQq1icAbN7Xj8QJwa38DpZQ9jEYwppTirCBpqJ16bYzjFH9QapRb7wwXyZ8aL3hzG7",
  "key26": "5A2CPgvG6swTNitvfjwNDm2RXS4UkWybiw4QWGNmXzMPd57uZSJe7Uxon8VHXBnfVLPsshUoiT98hbCGgQCKhBzn",
  "key27": "4zyM4E1RZ1nXhpVsNU8n2tqcNDGNssUWT81yQMFJG2juCSqUbrE4Zb5TLa7HDjWuyTXKfp4J2HdjLGJkbwdCuQhn",
  "key28": "5up3Z4yDVmYmZg8wpgdWYdeSXvpgw1sczbNo4sE9yfw7RB2tMs37gYUoiAtBvd8VDDFXLCPAto2YZspJgcVzPDGi",
  "key29": "66oWU6721Dg2hqwcW4Tpjb5g2pLBWU83YGRccTQySpxHSxrBhEs329rW7irMjD7YCyaRBYZwL9jsHGemfQtsx1Zo",
  "key30": "4naGVtxpsb5RG259C2gc59cLfYSuFAwaqmPf1Sx6dVGbgxbqBZKmUVpWwg75yJAnvyWSQjwSahd63EXd7CFZvjbo",
  "key31": "4TTBZUjYjBcfhMxmFYSPrKLoAevGzYVQEwTiq7PC1WAvUG5p9wXabWz7R5cvwfPmNsZ1aUiasUkeHWR79BzrGTw7",
  "key32": "4ebWeubFE1Kzg3C8xRyZkkXoUveitjv9Q6T7FrCCH9kd79HFZ7qxyDeMQCY5dcnGp8oHtrrX6gYhnWyR747Zb9yU"
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
