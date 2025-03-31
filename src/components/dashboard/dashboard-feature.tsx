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
    "4A6E9z35zrMnJXpJMT4DjFMRRkQfsCq5vBMHpuvnm3G7T7rAgb64Dg2MniScBhKHe2Mnfvn8XAq8GdBdujuYdZ8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gYs264HEubnkNWr6XuuTgKe5vgui9TN5yxteJHphedz3gjpTj2qaAdwnf9ti5DLviQaCYL6kD1f9YCYd5X4BQ5j",
  "key1": "2TRzVSbKzWSE6HzxKkrh4Yz4gEUM6TGAFr45vgDwft4zQz5pUnWSQR7JfXtgCsRr7qKVYZdYL8BkxKwXrhdpGxvG",
  "key2": "DyvWgn8EiBbRxkL2UJN9wrnEAoUvpoqtg2SqwJBMezLdcL9eXTjxWBYFCE7j56mCEc1MZeGG5ax9wFS1QAJVdSR",
  "key3": "3588y1u7fMdZA1KbmqMjjH8NxA79hoPBpbYatPpuFTREXuWQAJn4KU79EbGaWTwPr1LoPV1ZWJyNagcuE4wNLEXS",
  "key4": "4ZQTK8L6bXg816eQyb2ZrGMrTCBMLMhyLU2Db3jD6oXFQzJ2xw1KdWeiVAgUxhgy7Es4cigZ1USuFFhvjw1UU7yJ",
  "key5": "ohbMUKiudkjun3VeSPfBTcL4QDxExjiYQGomUpawPTBB6vMKYTQyAPPn79YL1FATBUj6idSwPMiPy1LaXKAdjnP",
  "key6": "2YvuCuTiLijm48H2LeQ29JSbARi6pGrSp2pJsarvKYGVT3A51hkRNZS35tvzBKVLyJZoCKVU6LLXzELT13JgVhzb",
  "key7": "UNZAbpi1fYJrLJvZh45K497P8keQc34gH8zoQBrccp6cCsoefRFkAowmSC2j2bB9Bvxnwn4U6ujUSis1ksbqJYg",
  "key8": "4vdB3gA5G5TArk3vn1NPRC2CPF85WSypuYxVbY4yYFabCxkUcaZSGH6e8X7yKkuPqG1dHpgaNysmYUVWmK8xJTaY",
  "key9": "5a7aS9uWz9Jy8RCgagBejmzndJDFKajbYfAye5CyUavNMsSSYUPecgdpVUDnj9xE7yRBntS79SRtErwbRpkDatrv",
  "key10": "2VX96kBUggQMJ8WyCbnicehwnXc1PzcW6oxnvrvag7VjWSrXobwD6vY68yiME3iGQFkZrtMXwGBjq3Q2vuXm41SG",
  "key11": "3biUnocrMy6cNj8xNZJs8AauCaZLHRMdMg1QF4u24Dmpo6HUi4sSLxPvVVxKm5QDxJ3UStkJPdxzQgniA4e2sUgn",
  "key12": "3ncVRqz6BhWzX65yok7gfnqSousxbj21jFXj1WrpSJ43Jf5BpismvM9sW4zhVfF4MYsye9ew8cW43RCCbgpwSaaS",
  "key13": "4ZUmBDenNzAqFpVSR6oMUMDLPx8g56J5pydfBEjDDsKCpJrS5W6nNHrhpxJyxeULskjWSCtAh9WjT6xJcuFpVTXH",
  "key14": "5RCTxuEjiiAPUwsCW2mdNPDV7WyiWTYzrZKfMoKLdzdgySujdZaBCvqPGrVp7L2JtDfmZkrTmyqiihhGtvhVThZZ",
  "key15": "3GXGmrd66BWYpDBtRZR9QCQb21cSbooRwDbd6yJvaje65ayZZkFtvbn9yQ6xZ6ozYF5ad1veEs1v1YspdSw7eFES",
  "key16": "5ee8ZudvBsghYFKHfw8yTB5wqmz9nYbuxmprGaG2ypgpnvaQotjh5Hfc4T745b3ibdeLAZHbcJQ2x99i8KhJVmcd",
  "key17": "597PSaEd6YKaPEDwpFgP6sBUjGRCq71Macv6kUCmegjLau5pc3sEBB68jDZzEoZjp4cyYADsmrCtYHNsvdvXJMYW",
  "key18": "5pwtthBCge1cqUWWiy57Wien9RHgAAiz4BKJ8c79kDoFMX1wJpCD8MhW6bcKcKMzFnwe1Mu5Vy26omdABEeArDGQ",
  "key19": "4v6KGTiqUymXozomHDdfVCcV5imEbjMGJwRuzr5byvJ5gdr22NaUXALiRmgYCjfspkooY5Vb6fRNkF76wkkAhLP9",
  "key20": "5gvFNoAbjHnb1Lue7bb8gDvx4y13SnQUpFiUzw8bUYSw2S9DgB4WYf8y8VdpWsD4ogJ7UDWw5DBgkuMrUWi2RUwm",
  "key21": "5Cww9PwSSn8vyqA5528t917zYacyCf2MCR8beid2SZxLQLVdNvg3YHm4ctZ3CanSjnpn94esmr3dwQ4VvbbL2EgL",
  "key22": "2dkqisRGy8j9PyPEJEcMYHZTY2sbnDcgPKCSccDfMcKEGicQBmHGZqsgfZ6X1RVynSrhApYqpuZvyR44Qca5mHtd",
  "key23": "5PfDsJcR2m7hMTVFdjjUG3ycPm5g71VmGTVRYcqcvwwBLwcEBg8kvsXT5Mdki8A4SuFLkaJKQaktadyUiXXWGFB4",
  "key24": "4wo3d49pxYXPJahB5uVumaomhMippcMvSuYvUQyWxnq76KecUXsLeKHNwahrx1x9tif4enu1XBcgBGCtcz6rrVAp",
  "key25": "4aU3JZtx98aDzamz3QhUKcwhmrkRm13JPoxf2bqLD7KBv1S4JgFtvxGuYDCYp6kjpLxftXnFzCexUA5uKppEskZL",
  "key26": "5GchX2YTxoADZAJd7jznwhVQ5SxDfSzTqpkZGhcP5gpi7kmcvJHt95jebj4vyzty13q1qCzYzEgBQsaN1UnGRAFy",
  "key27": "2TYHtmXAoPhejjHEdYPEDXs8FLR8sfKLpSDPFxQekAfo1QwhEeu1KVNCEJSiApY9GDYb5BgZhN2p88kKJiqbfCsk",
  "key28": "3HdbQh3UwfQSCXgBzWbpeppmYzstPHQrsZkJafav9nxUDwCndpCs3pE99PFnR1xidqc2iFwJ9121sXsL9M33T6u6",
  "key29": "2ZdmkCyrWZF5PxMBSWLEwWjCbLiDvL3tsTTDSWUyQzyGG5sT5GmcCkga1urJSXbMEaqDA1qhbEFgkcK4ATJSXvp9",
  "key30": "4Tjbimzbn5F5mR8eoHUWE6sScwrEcoyJQ25sg3Xw6G5jWna4aCNsi4DfKzp3GMA8XzVVv3ZUUA5q6tiYBysgft6V",
  "key31": "Ph4y7igEhGiQxH8Ecnn1Fz3isRwTymCz77EsSzV6fcPNdtiWdcobsoLqk9EJgfK4t273XUFvTWB3nAo2HZmkB5V",
  "key32": "5LgQxdSJx4gyyKFFFjmUXjoQn2FQPDVpHmYLRtmojT2HdDWdZvsNM1MHAVA5HQ1TN9EAxiAR6AhowC6rKvNxLzMS",
  "key33": "3qZsG327pYiBAicMV1F4v5NAFYGfTDLLR89cpuMXcLX48eQWmsAnMR4jR32J4YMMM9PzhwLD18BKv64C5Y4tgwQF",
  "key34": "uhZ5F8BxuAja9WGWo3NW9zwZLBzETz2NVjKhJNsYKVdJV7H78PD1kN3pgzB7xe6aoy4LSqQC9TkYG4121VqhoTp",
  "key35": "5uA3ykPB7AQCBLFd4vyiRL6g4xCoN52RHxvE3erdH2q2snRKpskCU2k7uHVfADqXEQ7AiQxvGYgvW8Q1mj3MZXxP",
  "key36": "2NPjqPUS7jTniVs1TCbgMeVrxJSiTvZxDeLceuZM8wfRDbwyWS6UCKARacWZdJ7Jdrr93eKrKE7XJxgZ4CA256JJ"
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
