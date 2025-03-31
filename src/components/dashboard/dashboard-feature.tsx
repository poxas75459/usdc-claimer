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
    "5rZj6qh8UEJ4Wsbg9UyDss1ppvY3q18QXT4UHK6WeHD4kPXYntX7BN7g4voTh4FiK5j9gAFZkCrGwyhRnu1Q2Qka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uD9rEJToErmL8CJq6Ft1sJDEFkp35nXZHzbn2e5GHBJWzkYFHWZZM3gMfB7g21sBzy6k9j8Ci15QC8Z53DzKCqX",
  "key1": "DrwVZf97DaX3h1odwmZJePPXSNDPBC3y2tTxDzARjZUQMgV2xTHnmrdw4H1uw5RSEQJrWsuE8PU6UmJXAXsq19i",
  "key2": "4tT7wv6kdiyX7v7rgc9LGDsS14zWYnn4kcoMxPwUgrJsYa7A2EUBDaGWUca6TKfyNC8EKdquTjfLHnySdm8hqbek",
  "key3": "3Xcavu9EjKAdhiNxbFVBXS2MaZBroXgtpKiWhMpemCQMp25nNHkxfGYQ5hug5D7qk1345JBnDZS8aZPghVCZmSpw",
  "key4": "54CgWn4Bi8mEGHWF8wRK1gdu5VQ3S184LsA3NLduf7QB5UmzBy5BSshg22iqSP3zWDvyiySKQPmRWaoSc9VUP8Cq",
  "key5": "32GE77JWtjFSDPgRXh7V35hypMe3chZ6yqQySK8it818XN7LpZrKxc3RHD1UhBM3489DyRa5cHf6kdUD3v2EDJye",
  "key6": "4meYa5g2f7FM3XstdnGAgTFMXUHHjLEHRhj6scpGenkPvRsLohrhvzr7MDudmo77G2a8VA1B8j6AM46EwmdfqPDG",
  "key7": "5GPLMLNtUb8vetv62LuC3jG1fzMZDVfk3XLp5qRor3EeEeeFUfz9a2qvVxejMY7yG4crmkGS4vZXmghHLiCXpJ5r",
  "key8": "GguPtoqgmomrMNP4JSgjDZawbcRP1X5pj9DcB4iSLMwkEKKMYdzyKEMVBMUzNijFYvXmaiwf9B7c6RYr4UYKF6m",
  "key9": "3QjKEgJRacazSR5d85oKg2Z8hEEiqFNeAPb5XqhNJQKjhEWtN3X24meDvxvHbWsvD3AEzBeyqXozD8jzudqrLLGR",
  "key10": "4X5f6XmawPTcvpU8yPuSsXaZW4Le9uHUXiPY3LpDwh67ipMkykxaprAnHvtgvrzktEkWo1UKdvwUqvzwM3Z8duEf",
  "key11": "2xP5P3hE123s1ygzPvsnrpRYHUMUZUUSr85oHn1iwR1sv2FZtJVqg3wUJcuC4xQjtxSuizSg4yUZEbcjXJrZWvbA",
  "key12": "4zAmNXKhBDxiaJAhB4qUBHYzza3zNDHKQcmpQ5jNnr5HZVCAUqJJxNaiVGNxmMaopbmjL15hZTot3a8WJJ9r6DsY",
  "key13": "MdBXZ1t2zjCd4GDp3FeSJpNAzh2URPfdz6DNLEsoyyThY2sU7p2drMu8rQTAsq7fS9FvzMoYEG3w1BX12cW8cZz",
  "key14": "5d9hBdg1FkJzYRLXaSsnQhbqVqA2d739bwpd5thcVdjTU4ANyCndEP1oKVDjWBDUG7utkostYCDFXHHuXNwH55XK",
  "key15": "4PFbAmo2pwBAB5KgpGig5hkPeMMbVVUaik9tbFoCJAEEKmMpC4tY3T9RhWkDPxpYsXVUB37Pi1PAgcE9qkUtng8P",
  "key16": "3zX2bFUpqJbPvVgYwUdwks89ALb5GXT7A1LsuhSgWmbeJzVfWR2MYVtApu2Cwc2qWRfbEwRuhRxSpBSoSLFmsyHr",
  "key17": "5UhZuvAfuQ4J78YhjzAYCytBYeb27Z7mMWPg9N817JBsQ7jcoTEsKfdRmy6bhouXRQqEzW5gd4HTe9c7M2gYWDpw",
  "key18": "5LvoaS1Xz8vYT4WprNCZhfWdiGFiABir18nire2GVgJDU4YiCa7pLRnQXb1H738guHhipwdFfUm33p4yhx59s2g",
  "key19": "3eY3o4wkkMWX1JUTyNxPW14RGQYboT5fDe5draPNMd3mJVm4cvBCyzxhn7YCfFpEXLqHuwQh8cmcdtcw5pqpRt3e",
  "key20": "3x6BAMPaT8pXpJ7uyq7rBuKmei9uffzsyLKW22TGgnszkjDm3pW6eRpgz4A2LDdnT45P2PPknxDX8pHVLDJ1EgZZ",
  "key21": "3Z4ZxcEpQ47RKF8qYBauchaqqDiEidKJQeaa51PCSinR4pgsNJ3KWYDv8UBnZP55nDu4nndxgSAWoHvVLvW7s9Nj",
  "key22": "2mdu6vkvAaJ1dHP92atftNnpcBGdGtVw9xCaUqwZN2rWmwxRxNs6kazKGkhGhm7xUs5p7vYxPhfbjg2hV4eHFzT4",
  "key23": "2hvfFVH4NvPVqxTsxbHkedP2QVxZvx8VZSXVp5WXisHLhP91iFsCkoZwUNWsspD4tK3EiFR4xZyPQdpqPLVufJRA",
  "key24": "64xfyNjnq4nkSgCg15fFrv6pJcKEN1F8hT2d5S2kicJwNCgihUL4T6rWTgxWGXWLV89gShsEPC2Vz6XnFSmpKotn",
  "key25": "4u4ZcFBPJCBNkun8hDaRtRZJy3dWKjPDcWgUJRQdU6dUBroMGZZVWeL6jKuKMPKCk1SiNacDs3KuVb9n6DR4wwNP",
  "key26": "2AAxVKdf5Gn5UJnur9rjXhZcvp2Ss5VnvvdRy4XRt7ac7Uoje1w1dyddYQ6yCiJ1FBpZaFHEif3K4KCQwzdbR8E5",
  "key27": "2xDCcddxdLSHMPi7BS3L5qWLsemLUqRKkx1MzXu3AYNQ9ePsxRUFC6nqmNmbyKcmWE7KTwye4ujHGNXE418qinBX",
  "key28": "4L3PXnjqAzcgkXcixq7B88u4Wivpkb1vWLnwKWMyKuuS2hYFtad3YDQyi3ui9RAvXWCPu3UVLKTMHo48aVzxc4Jv",
  "key29": "3RqtfrN7dYkgRXJ8Mbqn1R7Aprdyv3EnArsY6QiCnXpJVGra11DV1hUDx3FJ6Qhxr43RQLvChQn63pK58g9Sr97Q",
  "key30": "mvquLLxfNEJMAVftjBkuKYiFXnTNdigPMCLbeLweYEcU8NMvhNdZprAMmtWqMPHxgL24TZFRjb4tZzTbTZcnkdz",
  "key31": "29isJcnoXoSXpQd8AWuDESPzrqL7PJDoYNR5coarPiVN1ZoA5Z2ZcbxhQbwc1iVxVdD8Aoqtjvm4gZwwptq7YrkF",
  "key32": "2JTA8KByKfghP5VHR2Kih8ogi7H8cnhh9uTeNh5Ducgt7gpWFbiG9NCBiPevViy6xdFyYZGFfDbqLJ6ZN98YWLmr",
  "key33": "2vpcbmtEqHERCDCVEm5gr7gzUK9QhcTo7bKCruJeUsMWhEAYNYb3rwWA3yUHruyQdhNenVBcpMbScCwEokqgtQ7G",
  "key34": "3EcaGzNpjEyK2C6BbMEQKTvSJJpFCwxeCf8CEEHMGSuY4ZvzdYwDpvVBXfzFJz3iXUXW96cvCcwgLcqdzt2oAbbR",
  "key35": "2F17xr3JPBopS4mcSSa2mT4PZNw2YjwPfjcLgDunM6EiUT5Viitx3g54Ri8r6VHho6ei1QfXkamJgzu9ypMYRAHr",
  "key36": "39akvYXyLvZYJPGAwT6HNUNZxjVyWh3pFLsShuVYgXS3JpbeKtEWFWQTDevCQzUBfGSqEWZCygNNEX2yFNX7dKbN",
  "key37": "vXuwgR88LJzKNr29aGgca2DVAWWUYMiBFxE7HpARExiMYMhpJeSXNVqUXQvXtukJhjHnWHotTwQtNKk5cexFiDf",
  "key38": "5iDDnp1EbvGS26AQCDbVAaUGh2GAV6Cae3dzcq8sLu8c1PaB1RjnegB7xsyJ3Baw7VjtupAGcW5BQqg4Dx6wknUr",
  "key39": "5QWfdGhnTsNXmRKBfAyXjsAqTFgaGuavrcNAuKZiDXWmSDvWxfMAZdtkQamTS12LdjbR9SppTQx7tv5XnPZaFsos",
  "key40": "3zWkred7L399RuVtE6a3FghHVLZETjjC4ZFANtAVNKvEucjqoDD12FBCGQWucQXLgrL1mcHbGnwSLBGZGYAoZJ2R",
  "key41": "UXwp2tuyNNyFC9ZnzfH81DV8WDhqXrBd3DwTxVXpnqvTMU2VkHfiyyEakLfTLXGbd3Qtt8mf2UsQ1ZKbbUjRLzv",
  "key42": "5m38VbuVSckQvMtiQCno8z53fCSxbjpiyNqhvdDApNjYqxWUZ1Lcgjqix2jkpywHmgCWZWSDZYrwKndhb5qopchx",
  "key43": "5ZAYN3eJ9h3Q4TCudnkhv2Lmbj5SQyb7Dp9YJL1PiCR8qHanrhdTHQjSUeBbztMSAYtKmDwZg8o2qAHgygWfojeS",
  "key44": "4tNWRYo5v28gE82Vk8wN2DQGdePtoyKLLUtvNNwVS8diGbrj49h851uWrRPkmBRN2pGyvTVmNh6A4CVqpF1Fb62K",
  "key45": "3xpm9G8tEvLjPDFzagsUVATr37jPatiahvhRKqt5qP8wKWv3v1K1FAKa7BS6dnJ5VANrZbixqcGWUvRLYY1ZbcHJ"
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
