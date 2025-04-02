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
    "2U2rfYe33BgWWd4nzTdscXjLmnSXczNTRK384N2Dr38PJZi2CzJhY4NgAjqepd2poC44JdUVqA4LNDFFwzsyK193"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eWSvAnDTo4EytzqEsj2zAxNQX5hGPxKpxaZ9sYhweFmBznkMYKWUmpHqmqtgDdtDRgYiniKTT6XwaYKV7MRGbsM",
  "key1": "ef9cw4hjfJxkd9NSHqAzfRn4qmbaN3ss77oRWiPx2rSs5SNWBmQ9JbzBZQroH4QyTdmP6k2EkxKP5EUXVRRjZpE",
  "key2": "61zu377kVaAS6oUnKi7yMzLaVhmQ943MJZNxELs144fucrgYsj5hQ6butfPQHbSgVeeCRKUGxs37tQNFWDu4KC7e",
  "key3": "59Vth3GVmgMpL5qAAmRmSQmDGVTh6MgP5b3ZPMHgDJCCX9B2a7xhVhpkiZ5PaHddX4ANwAJ5Fv5VKnoghqh3QTNr",
  "key4": "4R9dC5WQNZkjjfmLHzMZWsQ3gcKnbkQRGXR9yotwypPcKfQXiobAzyomwoVKkdCNc3mvb8SXBERhn5c9MvY1ePWz",
  "key5": "3K4qVp8KkA3g5xsb2MPXoXRtfg32oCURT9CpnyJgCqDijxLmQAgGQEteLeoW9S8nT6xAMz8FRu4PfHdVr5rzS46P",
  "key6": "41NnAdguoovZerF8KTKwgbL31UcPYnEN1oL822iZ3QmFnyv1iemLnwsmUZQPr2s5F6Hk2u3LZcHCymqxvoSKDeZZ",
  "key7": "4YHkUUibJAU6C71FZYZwPYHptsR4fazXR7Ls4yQnJomN6A1mP2KRrm7Bwd4tE4X2P5CCKTvzoHvtAgDysjCayQUw",
  "key8": "5tMC5nkgXAbj8BRxzAuRRxHfQxMi85aMujz28Y2VTaLHFu9HGE9uyfHXW3SR8Uhf2XB7nwWGKRnCVbd63YRvSvGq",
  "key9": "Kxz1bVJsedVCdxtF6vYsmeQvPgViJuDbdqootM7Ki6k3iMrnr48UK2WAfBefy8igPkYivvFRhtWQn66MbS4gS5q",
  "key10": "4TrTy1qNue2Mp1vfKMMeUV2DALMUgxWYvzJJ3iK5j75EQYLRYVXnqpAW8L8MzcSGB1SD8d4WULK7voXNkZWfwLrD",
  "key11": "4U82Uf8SA46FygkoSUC7KENqMBkiYJ7vDMrzk5KXVieSYDepLrEMmZp3LXKpZ4Ns3fU1oQNccFF2WvhRo9tQxsxe",
  "key12": "5QK1yw4syL2zjjSty54CSEbKtCajmecPFs1QTHKBqhUhgfqmLAxx5GCfDuCXZSNhJ2nGFkQ5yyB96cdwA7SsRQrX",
  "key13": "5SGJE5YXPisAko48KMRCM8NZYagfCpwj439nDL1c2ND4sHZBx5Jit9gorkPmJUFWnK6BoCt1jsug4vKuyaK4BgPa",
  "key14": "4JZFiAw7Krkcg2BoRSLgsVpwy6BiFt67sCg3DmMxXusKmrCxS7a8DSuLU2cdP1uAf36vjasdb99MNhvGTXHxNrzJ",
  "key15": "3HxWDxdGBkfLCTAQS5zb4R2YAQN3HLX8pacUiSWmwmhH82qr9KnxX8AWdDE8DJrjRwcvNuBouonQToT3dqm8i8dD",
  "key16": "2Xnsevbp3qh1va8NqgJek5if7yqBdQerMmYpDbqVaJvusYFB2hXJ3dYd61zabVgv47tL4cyWRXKMFV9GYnRdDjWj",
  "key17": "4MMWiXWsRWWn4aYedoFLsyobGHAwQa3KXzBh37Sis1eR7RPLtxxKJjpr8cFqyRpP7T4R3xN5gKqRQqyPAr3TzTC8",
  "key18": "4hiNKuX5cRqqyMV3wahPvdVEAuVRGV9JWpxvcA87SkyDphhkYpZW62gz4wxUnDeD2KdEbZTRHcRb4VDziaTMeQsj",
  "key19": "2Ne61Qnu9Gzps9o73TEphEQmkqyCHUhqZzn4ytUchGEKRquZd4wg92R3vegLLmGwRyqKUBKZouGebtztQB3B83kZ",
  "key20": "2pjmsYNbJ4AcMjhh2dahMyTMke9zdj2BbwunW1LRgjjw24XYSX5ytf9vr97xien7PjXY9LJTQAupEDbDQNe8gZWB",
  "key21": "4cjyfcxecoTRoNAo7KM5M7jx81H1GqswvgVBuiWjA3s1PF8qSXjpdkAPdyDkgYC3zL5j67tsfXKNyU1aVFptTWsm",
  "key22": "2TVpJBfVNp7yQHT9CtLcjGWxFcT1ERmM3oUQm8BrGd42Nia4ZVLF5tiHnUgk2mm5LXqAwWMoKVja4tz12ojRJQ3m",
  "key23": "5E58zTW5hwjQb7Zgm9JMixT2Bfv8dEuabNj8J4pQv9gbgvxouZDoA8zux9HURCVN1BM99FVxWx5rxPkkDPzL1rKc",
  "key24": "4JMrFA1XgdpgJoYfGp5p9iMhdUdJR8mFSyN76v3vF3cPjeXk4WsMrDM7ePbCZxLYf8Tu8zDtcS6fsQXjFGq7EQnT",
  "key25": "3NQkh2EPrQW6JN81YADNTKULXHJWqSnEDvrEHDRmfcqhHsTfdFQC9UmvbeVVGkGh4tZr1dxkcYRpPGmnivZPirYr",
  "key26": "3dHXUe6b1QhDkb5KGEKgfjHJQrNGCt3sscLwD2MTGWigy3nwCZRZKoMBrRFUWW8MqzQw9LofSHBNZshRXFrfTMm7",
  "key27": "5gkmsj1Rw4Ff2iGT1JRSdtXkRnvhwidaE3nH9ppjqCyzeUrRaox6HWDQGS9mr13Xp3uijodxLpFjduJ7g5KDnwdX",
  "key28": "hxqxzW1127gBo41f5pbHTMiGDtcynHWx1eTZkktDqWKvyQ4HxpvE3M5yB3mMtTyZRBCxx5W71C6B8QKPxACiKZZ",
  "key29": "3AF3C6A7APProrfoY461kQC83BG741ysdtF52HPEfFwTC9H2ihRgfHVPgYzsy4oYrZyyrsuGKZ7qYrEDLER3knoW",
  "key30": "4bdA6m3VCh6AVpNyXSkJ5FGacWLfUFqEPzXs1zoL5nL7Vk1B7hr66hWim8ZKuFnqzTsxTx2MDqKwyx8dJncMDG5e",
  "key31": "5EPwEVxTi2Hi892oy1A6PuzZZUnT5zwTXktC9Zvkv7n7kaXrhg5uxEzc47SgB438B5VWx2AGuZxcQ9xVnHiFAFLw",
  "key32": "5WDvSDF7JhAQTXWJZwDsumcUiK2vWMX7yiRJfsfhMPAVerdCTqt5zY1zdgjBa6An7m7PUgnZMDfomNqy5L1YzNA8",
  "key33": "JPVCWKUKrVrDT3TPMzj6MtvaDnb5ro8GnDLw8rXNFncm2egpnGBkVfihNQ4dm2rWL1iiHWzisLh4sLSprhD2sBE",
  "key34": "3cc5ZDmevp97JXg5Vk5TQLuzG2TFiMn4k9QzGsB1Qamoewn3CCwgAWxE76Dz5dgGAexXMmvrrPPcaQYvRuJA8oJN",
  "key35": "37cEi6txNVtvwqUEZyEWN8ySi86c8iR5ioLwho1jSdtBH8NsbM7votjvEDhDuEpRJ9dNmQ2hN9gtnyM5gE3TT51L",
  "key36": "5BHipvgaYj4YtZrDjKbMWJEBfd86moHkJZafBsUPrCppjKXnWMzs8Zr6vbEPnFEkw2oZYt6gNWNgwDV79FATSEgw",
  "key37": "qgyb7UTznBqKUT7G8ZbjSLRcSgcsMmTTMjWCvurhTqfkgiRLYBCyYixEyS4KVCVyAZG8CS8ByCGwjSaVbF1vrTp",
  "key38": "kqPicN5g6ygq4eyquEodiFCTuUfwXrjx7s7z9RWoahfqWLU3MahetpF6mUckmQoU9kh2z2PFGwMYujDuB6AsdUG",
  "key39": "25zFdV9XjG5xQUK8rnmu66DRFMYjge4MRVoENZmzb7BeaadWZSA5wjyYHrQyQGMSxGXKto23FqfwK1hycMFyxzYE",
  "key40": "3jmEBgDqdGndKXoQZGa7prHoWCkjGpEAsnsXLwGqpAYDfFzSDoubCh8gfGiXVbpD3sMeDXtK18h8ger5NzZKt3DC",
  "key41": "k8aEyn9xzcf9ADm3emADxrJoQd1zTCoMGstsBffDJ9MdMaiNx5eyny1XfBqcEBS9q7HW69jjxfVEWAxo4YSZgS7",
  "key42": "2KkJAzTmjFdx3DnXvkJ8B2nYh7jADfAD2y84jCKiNY8iaT1CrSPFcu81uPGmAE7sxkDJsykL4YamaE8FqsAWZQ7W"
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
