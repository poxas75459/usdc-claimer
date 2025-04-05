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
    "2dmJjZ2hswrtfN7k1V8qz7YsSfwf4CQgfUuKNivPXurvNR51mSHAuUUpACiRVMM7JqPURG6LjKQfxZKvHXyqFWVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RDoiPWuLDSXP2gWwcZ3WBWeb7qNABtcPE6XfoeTtaHysLdewBtSuqkMWMCzSg7zhk2XKLxgbtvWu8gvH2cxoMyT",
  "key1": "2fugyNfkas2xWqrw1DdCfuoq7Bo1utu1SPu2STPXPAe5UsCA7MRN7vVhKtZyAAzXH1wVQBVJ61iJu9jB2bs8StBR",
  "key2": "3Hwd7pygftVUsJ4KtgSvuKA9PK7fxxw4oPjMNBLW9kHB726nbyRLL1tyS78ojhZqshF6JLKfmfGfCU5kLkykksDu",
  "key3": "5jHGjQHQWZQ2m7CNzxHzJzmaViPDHvRhYTE4rbnei41Nco8KfvgyMGrZcD6iHuix9Sx7wwpwv2vXA3PSBxQer8sF",
  "key4": "dF2ZmUSz1sVkQHkVdciYN4ALaxwBUQvFvpw3PpvFeW41Tvn8hLNjKWQ9dNjDG1WdSv1wW6hc5LsJGYCo1ZBwKJk",
  "key5": "iJN6HqsR9siyjXz9g9BZvDzSYM57aScAVD5ZqQcCq7JQuaaTQuY7ibhjzroHM5ZNRi1oZhfpBjmpKQKn6sS67qs",
  "key6": "4e9aGEvkG3fPaYoqgpxyt6VXRrgG8pAYScdJaKKE8Zkw7yBagWxAJze2k8bZSLF3rRfxrUbhdgKjEmVXakHc4Yhz",
  "key7": "4TV5Jy8r5eh8StqARNt1uYoVnk4EBkyoAMn7SE48Ri5zz3cx8g8mCRiK9PjWcN7gGubG61H6Mt8STkH1VcgBHKz2",
  "key8": "61pW8z4VodRKgxXkH7bp8dYUEa8mmMULaxJeqtrubQEwk4593RtH1WoQRKcf1S51s3tqV7Fkd7Pyse3cWzeTzguX",
  "key9": "pBfUok2TnGKFVJugMfgihZZjdtuA3RiTapRMTUhe55NqHJJkxkreoaeh3SvbJEMLv1aox6njPusGfvndzPZ8PHC",
  "key10": "HF1QZbDSDwiVsmsSfrM6pFurh9CKxmVC7y83KeNgYGUi1wSdqtYZ5WLbCh3GcdCkwTsxH9THh4nZz1sUuJM3SPr",
  "key11": "jK2fs8R1ePmz93Qb38pF6X8rkMmnEgLVRTocVaF8UfGmJuuvcGqsuvq7JyE9eTMAWzA6ujQHjAfByT8evgCdv6S",
  "key12": "5kovjvj98uFQf8WSR7gfFkDfna7KsWej9dGxCCnmKGr5YNWjxSRqXuC3YxJ6Qjhby1xNkgPuP1u7byMrQ9CqWXcT",
  "key13": "2fziwDCTrBoSaepmVUb9q27Uaom3zqYQEFd6mQ6cvAt5Kf3j9h3Eu5Wd4wBU2fcZsC94W3gG9nXJcmzksuW7jsvV",
  "key14": "QEf8sGsQftBL697fV1uJpecWnistUAZHNLHYXiwh4Rpe2uwBdqA8vY9B9eVErZgEL6Ky9YbxkC8JCLbc55aJFjh",
  "key15": "3Y59Nu2p17MBiH3i6hs4CsDiQ5C62LsWtU3QJQoVVTy54PrNdoSkdSxo8uqeyztd9YAeJdQKUp5qY3pcddYVrwLP",
  "key16": "5uENE6NaCbzV4uae4tUo5vBuTiCt9LGAy7UBPYQ1uq5oUmokVjjttopN9zXKg8y1ucbV3XrhzSzVeSSan6jepR2K",
  "key17": "5aKyoiWE61AoefKCURC8s78KtzcA4jqBHUCy62LzEnaNbb8dkFefZwzq84nL71n5TGarrkKYR6K6P5C5hjNQHVxM",
  "key18": "3svXDMmw1jiKnghtz6kzg76X7ti5bTs5qPC9Jyi8QS39B2ZWDwMsAgU3cZDfBKHxwW9tUpeN6iozEg4Z4QXd6FNC",
  "key19": "2NsrUKiPNEvqtKb2YWUKEUZv75J8qcW4zCJeudNKfwQ5XdavCaj8Fn4gxxqMEAycvX21RU5sGZJRR8ix53tSD45p",
  "key20": "4TydwYUSR2HDcc2XwQAAtdnJvyYdjkCEnxDBKLqL6Km2fgRNt3ZtJQs2t3iTr5FuQfeRUZESM7CGuV6WRC2Cf3NW",
  "key21": "2BuKooSFb1emPVmoqy5wEUGnUngjkFxz5XFqMPKC2K7FQFVZARgTzNCHJaJKHjMkpFjGRW51ZiKPNvUtiG2zNhef",
  "key22": "1NtZVaefMCV6CSQzoaaadDh1MF3AUH6usQo1qbNxdztn9NPe62q8ewRXBcj28DSGGpFCm6e8QqSipPhagKm1iKP",
  "key23": "2j4V9MsmTFAqV82AdepGeRfzK7wkZBrSSwcMSV2j5GF9M27yFp5H6UYKj2HzvsaURDPnCfFYXozQiuSiqWJpvkMb",
  "key24": "2AKzu9LE6SoXQgzhdMiXbwoXLLiqpfx1TQCMuyA9nBcRLwxzt3Ty1KTGegYxg2dZq5J5CRtk7hGg6UJMbsVB8mwG",
  "key25": "gxzFfLSWS1sJgtrPEuKQqg9vad5Ka8y9dxqhjB5ZvYtp5BfH3ozjAe5PEr6ytu6inid1vLM1Psx4C4e45ZCXuWY",
  "key26": "3Dbg5RbwNhZ2rK4sFFuCxoQeSyEsB8sWMfUqYnWbRNigkt5ZAUvqvwA7k4vQdaxCyK8sbE5kzJ9qXM6ofLnoRwT6",
  "key27": "4hMEBoFMvcqZT7FSUMvM2rpnR9pDfP9vapPnEi4mSHUKWK5Kk37Xst7Zv1ZN1mMAm6w6MmFGetziWakdv14jZMYo",
  "key28": "4gDR9ME4KGENs1ZKiDHXiLKtqVDSbgoWis1Eqt5Gk2GZyofFuFY3Vq5hw1Lui31L8DBzvnqURH6kV61zVLdqsnxd",
  "key29": "5iReK1bqL1JFzUoQbxiFy9DTQ9P2Ui67uSoGgkFoUNSRNkvhoeWJctTUdut5djSKWVDzScAgiw8dLECNd4d4sr5P",
  "key30": "3qvJKVqsC9yB4fUaio38V5WDfL1vQJmcrGvvnhAbk5gTKQSP4FjyrgaJQtmA2K1RctQmTsJeRpYTevQU3f8K15CX",
  "key31": "jyBR7kX5UeUBEL3C81xNE5B7mh2rFUJghG3RQhiF9aA5QCA7iTrgxbUNBzvoi8jTosLsuNSRJGTLyMByg5DuMXo",
  "key32": "5e7ayYSjWcqtV7EkmkooRCcycMP44HwvJ7CdJWf4vhmwDJg5QHCiQER1K1fGczmi86tsvwwCvffGsCXaigAoFyMa",
  "key33": "4Ci1hwf2EAFdJxDtWqEZFKmA7wrvWU1J4ZRRCHeHBX4ndboCdbGSXZQLtb87YMKSAMnXPpkPsthxn5sXWPWYyLAm",
  "key34": "27iADJapdeSRfv3xXozkFfmX5otLE95HgEJW3JzHeq7URw65YtpNZ6oFPzSdnvxnb9SA1ELVt1FspuzohWSUu4Bg",
  "key35": "4FDGptAvsdbHPiQH3V4qeMBiksnipKAtewhgx5PFGysT6Fryguior25VeQcYKQNSNpxHuDwuCfXWs3TkFvdJtMYf",
  "key36": "ZcNGbi5M3FoyvGkKVXjxHrTgKYCJMWgXUbeR9DMipj7Xcn8PTqA945GXnTWRrxbE76SSwN8ggeDxrDcCKUvcdTL",
  "key37": "3G8iXRcANBrDg8oL6fckVGKo3yJg6ki2Ydc14qNn8gSWbwX59P64sxYVDaeSZoRaN7emVvdMhBHKNJ91vWhPyrXs",
  "key38": "28bUuzcczHWp2RvQvyachAkPQgeEpszuhM9xzb52p9iy4yvPMi25xsYKkheTSrANH5bvtp9Qj2rgtH6MpXikNsSM",
  "key39": "UJ7tDJTCLisTmzUynt8jgF4XoAkgrDfcr1eyMU6YjKzhGDBmebiqPNWDyt9hVM7tiat8V4kPndp3shcrf6NQnnZ"
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
