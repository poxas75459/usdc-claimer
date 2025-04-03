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
    "3AiEEUQECeqGWza7koKbFLms2BHHjdQcsx1Frjz1NG7ixp61qSj3EZgiMV3C6spTta3V1z8Vt7bzfN7uNGWqW6Uy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VVmPoEGPCToWu6dPsrPgQgnGkQ68XnMCxWUUzor993rg7iXRsV6cmqfiBg4QXtMbmpNvqLLpPgrHa7dBqDuFQth",
  "key1": "4NbaLgWsNx8n8cbhmf9Z52bddX9cuzZD3QdJRDviM9kpxf2EUPTrbbRpK5tvqhJhAciKwUYYLM11FAShvaFb6eXR",
  "key2": "21uYRz4dwKWmsDBcsQesWU2SZTpxka3CNa22BeGFr5WFzexqfoxaT3DWGu48uTgGigabaZFGFwwQ3i34LL81peYW",
  "key3": "2PSy6Y6cbfP1StScoZ1ZHYM4yttXes5p6CChsoAx7e2Wp1nLRechmhrDA4tUwT7n5Fj6k2DBPfu2USfJWUGJfapr",
  "key4": "2b8ZkjQ3yxQ15y9bs1nhyAyb8T2SksYJ84X3rES7nfo2jvrFW2RnYxkPh643nkQgZzZrfSzFFk6fY9aq7QD94kQt",
  "key5": "242ukciXDKsdfxraDLi4h6jTbNt53agPsy8wvKAKB7Zsqssf7Y3zAWAr7M9cJmHYXvXGMKsdihSjhaYgYo6W3uu1",
  "key6": "5zUFDzg1mUFFw25Z9Rp8zfb26Xgs5yC8nfYRnRVodPUR4iauFU5kn78ZWv13x1crQFEmAwJEijKAGh5mYjThyTK3",
  "key7": "4h5P8MyJGj6YoTfmiDd4At2239hzKd25nbf15n7mxkLohjLu4KceSndsqc5bqAJ9omd41RseAhzhNobUshP74RuH",
  "key8": "2REsEbFzQULRTmvxYEHesnyZwPKpLtcUfKZSWqk4iuhFycJ4gFh7EDqCU2sdVEtN8p811kXHKCaWtXWqnPFHTd1b",
  "key9": "3aBAjPjisZhjhjXcytUZD3biN2n3XZxg4UcTkPioD5mihUn3t2FEbZxeSC2XD6oNS45ny7Mf8vn2kRLsu2uuXhgD",
  "key10": "2th7ZEDGPSr2g3NM5it3xKoUGe2CCLw6TSNf4qdvVE3CkZzpLzyHJL37GjCzbi1FdeSsUHhwukSWPRmiydX1BzPJ",
  "key11": "5DdrhrrjrKTuLGgfEWxSjHZ9tncCe6PtUgH7dWdf7rXxLjKDrAv7brykj1Hwng488ovNj2bDkRqXWAfniKUgGPg",
  "key12": "QjCZS7ccXsGh1WSZcu3URuqcwWDNGaFL4LvbJYWP8rJei5QT85EEnHEdUieemXwnvQ3fxe9Y3DqQSSeYhtWDPwy",
  "key13": "VgtNQ8nHAxDASMRGikviYPEuU4GF9K9AtAC715A2Ju45J2CtmoBGvfv5V6zXKCQiJcM4tRJ2BYp2vJyKoufb8Fe",
  "key14": "2gAeJCPKWrE5s8E2AYsenp6x9swLsnGSGoRVmaotMaSyNMquSyHcC7dbFA31x1Z5iHSsSGNSRxDxEw6TnHtTAQaq",
  "key15": "3nbjxSK3DJWuUNQdCx2R25y4vQGeY9cqTGagXepYEVvnoPWQpNxk7Siy7qjAHLQnZF7SYQyhPfnsabjJ5aK718yB",
  "key16": "5pAoCgBukA9DLR7ufYt42CLS7RL9hACV8kMUrS6w1o4Kxw9FfaLtUejNKSwJFJspuLuYdastH2hgUrs6uEWMhrmK",
  "key17": "2U6XECWSyB1JViHmWJfVqYGnH7guWXH1FfFgPZMHV4hhQksYsySvr7n8bDptRfzXGiH3zJznM9QfF3SvcXyPnCag",
  "key18": "677kCU96orN9kSFZQ4y28pyWsSdBJutKikLnYJ3YdN5Fr3f59ACQy8zGqQCcHRxfngkVNfwasLkU51BnR1Ucpqrc",
  "key19": "3d2DnAtpyG2LTAtKkxgZLVXkk38DEtaBmzgs5pkWgBFay7dwjVKhH8FTL9Y8Sjq1SADD9DbcDT7tiwCiRiK6Gv9V",
  "key20": "1NWxo9oxVVkChWttEuFP3yb65teQQEE5EPYRkcosWYQuWEjMivSJmeevrKDqKEa8nNQcmGZqWcFY2SfyyRfNHFZ",
  "key21": "2R6U2DXDheXT81wZo8DkzSHL1gHE7MRDXdW4KfDkZwPJGjRjefvS2hVxsZUKWMpnCcx6TqP8S4Nfif85szdLwKKc",
  "key22": "3n4F4TXei3SfJe7wi3HBLNVUnaVtVcoyumNM6ikz1RLp4xgTTJ7AGhzfxNnvR2jEiiRpSQSd3mqybaVa2qmSPiVr",
  "key23": "MYUiH6jKkBsA4Pnv9PzRsim69LSNbV2qoxxfLFaTCTawc3gh7tNjm6s4JbhK3dKVxgFYXBjUXR7i41jHgeGxmW8",
  "key24": "5ybVqr22fn1ghJKEnS5twcAjwpXVEM4CRgc8sv6Afu79jMrJxgdW52hfewFy6GRaoL8xbaDUq5aiV7gwtYpuZiiA",
  "key25": "trXyXuBY5sZ2ASQdBy9oduXxmXxMhavdohhL3jJ4wqQ7RXHJMfyeUJGirFNF2Ms6bmKeP9WNHYZUjKdeW7zUss2",
  "key26": "5xrLuwk1t1hhexVR5t1a4eA3AYDEmLkjfkdzsjFyXsvw4EetJQUQ5JTTWsDgg32asxFrLg9fUQSbzMErs9ssx5hF",
  "key27": "3FTF1TU8QYmsXsbaMiEBEi57N61T5NnJcEaNAS74UBdU1NHCTy5bDB7oHPAtPVeotrrsq6qK9Emw8Mb9vYMxxked",
  "key28": "4uw6qXzEwK2X8eUEqf671o4BiFr9hznkVNVTiePZ8F41JuYVvveicFwtD1LHQECBotLzpJVKisJvf5cYzGoXXgBz",
  "key29": "3YvTgRZ9BHMxyDSDZKe8W2egXqhvaGjwCs8XKQhZyFJN2HbxwvaJZB5jddpu72n9VAxhWr2exVEf1XVrtBjQQcw7",
  "key30": "4qrouYu691nudZjaAD3DCAVdJhvn7RzVHhZqTrUVncPdWeFUfzwzBjKBxFBjpedadUQrHmYqb87kZ1yDm53MndvJ",
  "key31": "iYpYKK7qEQ34vVRzbqFvwbBrsvAC8jTbmCgiFGKVid94nb3aZX7CwCNktc8PtgkJDNEeGYqFKquZac6GiQ3zNxt",
  "key32": "5JF5A9rALRySy148AG3wY9aK3oMwBbfJMmdevxZdumzSfmWR6dev81ZZHViQpUj9pjHsuivDPW5yXXHMvka5Yqqp",
  "key33": "vDBn7sz1ypuW5iyYBYDnwS1Qtc2ayNKxGrP2tQdRfv9kjNP4itCMNkhw66JwLPBTYFL4Cof1BKd3QFDrcavQoXG"
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
