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
    "2ZfbZ6rwovUCi9MJK3zp4dLveAKzCeL78jGB43QuFnjpT7DLyQzYnfhaph8JiGR3HAi5PFDkPnKSGwDdr5JActNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eLQi6pMtS5CdbAjMnuNRoWXGKwB44Ye46EpJqK4onZZptz7XDHhntQAx5v9uqBVbgMqvUjWWWuDJHDcimPDJ2Us",
  "key1": "5Jyycgpb76w39WUM2YaBUNGCwBevRbRD3rZYvkQgXux8hHzQsgRxWWNgpg9eRbENSZoXHtyS5DnLqouX8rSWBrmC",
  "key2": "41CWhNmNT8D3LhLdcc3ptUdhTteeNHSjuxHnZLiLZPsSQ2A91xUnT1a8r2R47KXHyLSvMKp4pvoxMzGQ4Nh8wJSF",
  "key3": "5urNesKspL9W15kaJgXQXePQDHC4pNgAaZeQL211THwJtn5spbTtuEZjNATvhG6a477LYfSsZk2g5WRUVq6no7S6",
  "key4": "hn7kuCAXbNXuk6bw4BnbD5xaGfHSWJcYsgDG7nf3UEx8HYik7QoTybktzZQY9tT7XqhBrf4fc19fK44the4BTxy",
  "key5": "2YpTkvJxcDhkZNvHvfZr2C2DzfitoP8ecR55fHqajuw3vCtSvR7iNTvuGnbsxFQ6S3yXhUi3F64axQo7D8U5KaqC",
  "key6": "3cNSNbWXyMZX1eN98MwzYFjdLKinaBAuxdGz7UX9x5yVMppWYrN3NhFpak56VRKPuqj8HQ8E6iuFme2zSkqvQejn",
  "key7": "3xwiR7rpVHAgGQkgDJtNsU5tkYwUJCVEhnLNPYBAPu9s7AgVjdKe4zcHkmiAbmqBRto3GCToQiPbAGmjNeUrnc2p",
  "key8": "4SVPFHnFJUQUPw1kY533S88TSvcbW7pEoPJfQvJ3u8z9SnFqEvQLckuJ1i6kHPVjMt2LT5dzk8oPMetC2MXEQ6ik",
  "key9": "5A4NLZrae2fz3kE2JfTLt5pQb5vNfSvP7iKHN6MBRCzn69mA1Bhgdhscah7ihx5WUnkjUE1gN7AuBz3CqqpsdwcM",
  "key10": "5Bu2Yfm2Xu3abT4VR5zdURyKJmoE8TNHasaQ7zSxKQsCFvrcwWBmNbR1qnmrkD4dFfTwfGCn1aKG28T4k6Cu7WFB",
  "key11": "2F9z9g2kVhJZEuT6Q7LXi7FCEox4sYJESkdej99snF3sFdn2f8Rgzm1biuR9LvoxH9KwUPX4Kg6LCiHZDyrHv5H6",
  "key12": "5tRSJZ4GZpz8Q6FmQEpwzFwMgeVLA289J1SwXhuzXjNrLepq6xnskrR92NWqfmiBhiG9gN84grr5HcXcUg1JqCWP",
  "key13": "5dq9jEXqMypFZ8jvsdFpiumUuMUPtFgHUfV2c52mRse7txdB73KFedgQSqnvVSRnuucdL4sG4DgJHLSgaCfr64MT",
  "key14": "2U2wTqZw7hfUwTy5ATkNGLfhR3UDP2PhoMdbTLN4STtc7PShFxRgjU7SRLyLxxtMmkGr2EMwWJ9QRqFBsqiuQ6S7",
  "key15": "46mXGU9J5bztaaAib8fmPXopnTNAQYKLEErfptm8YajywU6CwqzRaWcijN2XiFd44qHpmAxr7z9BZu3C8zRNa61N",
  "key16": "36erxoWCmLfLSDoQCUgcmmqfkK86R98Nz3gRo3vtiTQxFBPQTebwu9a5nn7cu591Kg1N72ZHKB1phvJG7pHiWbTX",
  "key17": "5XHLubjRdGhzYGe8dWLTHXTgGkaZpNgrL6ySdz82Ztr7syaJcJPXrdRBXyeCtE9hzR6Pcvf5D3E2esZs2w216j4T",
  "key18": "3zLhRNcZNstXSrkqpBZAeSug7kmLHJYJxS8vBq8uZzkQ58pRMAFt5GkaDK9dwuGgWwciNEXGYi4Z7Hsc8V6A6c7g",
  "key19": "5VimtwFYGaRSQvUGkBRX9eqYxJN9Y8UEvM3QeKrgy3mKEu1iwMghuhVRrackqaGd39hKgjvtPQepropPKPCxUej5",
  "key20": "2gCbUcyV7Q4rFcRaTVm8rtNd14498TdFbBeC8xUAxqyDxTbuuxpgLYPMJyRw76p2hJLXGNZh15simKoGKxEybVL7",
  "key21": "VKqRYkZsXUzvzqrcvbrd6vurXDPVDn8pjwjugvyKMALdoyB792aCqGAUG5j8mgL72Bh3NXgytRSAuLR1dLY4R7s",
  "key22": "4XEynpD7f4xsc6tzTtTxR7DYhjmwaNUVTLc76jXmND37uTbQo9HYhsXxuQ2hmncySS9K2AuAM5ytJFVxhJFeZUu9",
  "key23": "4zm8apW9mftiF3fPGw9Q9FMc78kS1LhKjhVojX4VSZx214opvKSskFTCsNMNYu3m1h7y76qJdVfknXMddgXKFZvZ",
  "key24": "iWdVyxrn3ChfQypRmQ3N53KkErMDPnqXxq3bpsGGvDqD47mgw1zfEKzGR49GguFR6rnykmsF1Tk9FsYSohSY2EY",
  "key25": "3xCjRjMkTXu7inDdsxdarBC5GTkH2w73y46VHaKqTncsLjvPo7fD4xbYWfBVd4XaVwSBUykNe1zb6fMdowMLLUZn",
  "key26": "2Sy2NUspJEXYReHvLTUAroxeBXMwCFSZ3QneNCfPYkwDVhDasg5ZssptKzQAvVj2ynHSrsiJSuRX4d9PZ9DZgkQ7",
  "key27": "3fwUgWSCzJQeeT95wEkC7pm5b84HCXfXiQSj7nY9CdBFBNtkXJANgFdrLgxZd2bhzRMa3Wd1SCPRnKC4VAt4rwnc",
  "key28": "58DoKCpyr8sk143Aq7CU5nimMyYHtkHoQEZreZPmokhoj3J1s4YWYQbiHC5tLZV9HpgoT4qTYwCpNGkwCSsC5B5C",
  "key29": "4ndTJbgW5PYHLHTo489rW4M4aUpxEspJaHYfc2E5dhxfKLYv13Umqk9tqAPC7meZwfRmrr3eFDyABMmDxeYHm3Ec",
  "key30": "5X4cHsRCngbHsQU6dxNA7fK4LnWdE3KppobBpX43RtYEwuit3W5bYq8D6EmopQT4oXWa6eSVK4ZFs5CkjijKgUPu",
  "key31": "5RRWgeXkPNkChRbnmiNsSCZ5ZuX232jWCZazaCfQonTUKNdRwQz2AYKGvjx37ohggz96iup49buvCaxYJMsGkgRb",
  "key32": "42AEpKPYGzxND43EKxzEiTmw8dYsiMpcr4eqM9xi6zxJjoYBZSfPc749dEt4gixpA93Rkn23NDQu6LuSKGBFSuXi",
  "key33": "5ULLeiKSh6zCyy3a75UF6vr5duSkUiKSig638RnSdTX1MpwEQKYY98o9r7nkc29hvw8XZfFCw5ZTssYdjfFMZV4S",
  "key34": "4yWZ9H9rVsKuRwgLSugnwaJWcj64V1ZYWNbEyckneEUXyPR1ByhQ3HYtueXxBVdNWWV3h83WiEyZrGLqxPK3fBjh",
  "key35": "3YkxM58KGpU7XFdpj7Z6H3Xb8aNTtqsUYzaXJKRMJKBudE8eZHCEmkV946ixVYX3SfwRdmEWRhTG2KnLr2dMBrob",
  "key36": "3bFznKEAos1kW6hrWRs3YwFNFvZTcLGeSt4gUp7zZgzvsjv9ghW4Act7GuHrgzQEfeNhmz3YpsFZkhTtoARiAe32",
  "key37": "4tnW6NjjAZbbX2UYJUi3FB51qpYjNECkoS5X2Y77LpqMbtKjGfnh6RaY9A4KiKKq6F2V9osA8zRf3p9TeUHiBeHz",
  "key38": "47M66RkdSEWWh2Zf3Z1mVgCRbWigGNKHSVve2j4yAhHhgxrtwHtUyob1N4CNAKGoTWBuyX1f8cNHfay3kh2Dpn8A",
  "key39": "28yRQrJKxFysi6rjaU3WeuvbxHHkB3ekarxvkQhagu1YMywCJTPDy5NB2V466UmLteELPyj4wsp21JNrecst1RMG"
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
