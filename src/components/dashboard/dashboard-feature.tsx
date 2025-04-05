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
    "2DuBYtwKVrepbBs7TBHm2FvVb7bJ8DRvUKXmiwhuDqzXU8jscjH8CPjqrHg9ndMktjgeCPgj2Rj2myWZeVqjdsun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d8Yhnngse2qrqtjGUryDdysSH43u3TCes8P1upH5kbDQaky9JawLLStbxDZyRrHKfZnjcGn43WfwWtjX3ivytSX",
  "key1": "u5kvYAUHuGdEd7cuufdgDG4Kzg63E13ABUooLH7E1xneMDeDsKZ41fbTXq9mLzGCyyvabFQdW5zno3FALLMtdyX",
  "key2": "nEwU1kWGBx3cMbfzEsJBwfCS6TgwigsdArDEUdK321uUmWWboeJiKUraWLKWx5e65YD5VGdLDK58cohqN3YJhwQ",
  "key3": "5sSmVf3q2txBfwmeXWq17Rbb5GrBdsbmhAsG58tg5Zsr64b8fPf4eWYbs8jZ2ocW1qyhcPAcyYwXEcA1rAvdYAAM",
  "key4": "2sFx4iKDKkLzfWfdMMuHCku7qtGiSQPQBDcHiQAoXMHyYhV7syv7NC71yDQ7FvjREAGACG76uLX7nAQU5QPnRz2U",
  "key5": "5E3BffUiTDYQBASyh4NxFKY98FQEiAx5j1prSpkSE1oDv1SGgXWLEZeR4f8wLWaDhx4Tj3upFNnXSCyK5jZB1LS5",
  "key6": "2GoHJA35z4K4CXMts9xGxueNkSh4AdvCFYvjbUDadyCL7DK7StGcKSqbHPxfpuR5RpgogjUqpETHaZ4e53uXNJK",
  "key7": "4ppSBvEKVyCsVnBbyExckB8bj49bHW8rTcMFAkTR89APBbpRK48YDaHNVNEs4AyoUHBVVWAvaxQG2CYvWMsNND3x",
  "key8": "2KtHWEP1kPj5shphBBJ1mZfmLmxvhkMHeyNjzHsy1NyR5P5xC4A6D3BFo7e7TTPzUNCTFfsMNS68Wymu6Xd7paWX",
  "key9": "H9jKwf1QeHTrNYkR8Vx8FzrqFF7d8gfjHj6ePq3xPMyE5fvMXbCygUrwKzc6aMdSKTtoGxBP64FaAKAFeGKJnBF",
  "key10": "2BnVepCuZeYcWpMJCG2JLJMAowdYS6F5bJYZ16u4AkDMnmFmC6d4fdsBA6CZwMfR9yogevXMKJUoGJfT6cGogU7c",
  "key11": "5yMUDCXrGyZ8y47U2QX5NpBMxjQXQSRjNLdCxGgjxhE7wGDk1dyqPt4wGTChMZXrWaYvqmokwKPjgZACNgAb37jP",
  "key12": "4NJ3CzFCARXjCuNXDfe39Ecp1bVBys7G6ruqQv3NiXD8fK3Kbcz7CC7Y5mxVpbWTCosfjFfyrgrEyecJt6y1uaEA",
  "key13": "5GnT5UXZkCLteC2a2yQxdDva5igHCzKUZRhDYqnBcJmXxi5FJa7yAgcYKiYbZhzLX6rWA7o1gZeXAxDKor5EtNMK",
  "key14": "3EsSCJ1zJZvUnojESfhDakH5446cF6deENCvXJmByqHdgnsoEKABA8R1g6phSreDmBweyfSokR5nfNUBzZvJo2qc",
  "key15": "23Bgrjgh7NVajLZjaMFvJxtdYsXo6bgBuL4DR311Smo4xth3P2482VsZXvMeCUCiws45CyCTNddkKJ5VbY3mfakA",
  "key16": "226tcAc7CthMPrsqonAX7n1Hmk6Mh8s2xQmJbRpt4iBzHE74oMXEiRtvK83Z9mvbHoNDfcNdy9xEjqSaDUYyoXzp",
  "key17": "5zc5Diyx2ZF2GE9hvvgfVt93HuddLb1zYuqNN2roi6HeHxVD7JVaCKxpxkf2iggV5HdVYM8L67fnkjSwKqeyNfv8",
  "key18": "3Ktsr1dXGyVq5i83ss5j9EwCTe8Vrtpo2e1Fux7xcmThgWWYE8aboUsYQihGGwqAEoQFYPA4EKkrw3zvyRKNFQui",
  "key19": "3EBpf72jeSDUsaFLX3yLpVP9ZtVRA6XhWDpG6ARv2k28nbcVeh96abVHQNs2NT2wZAyLe3ZjKZX5cFMwkh2GP4bz",
  "key20": "a7GZzG7uCUik81jJY1g7fZQjgxXGgy68LyxKsjcr2pRLUCrdzzkUkHhFepCP9ciiCphMo9kPskXcWnREUt7RVq7",
  "key21": "fLDN98JviaUdyewk9C8PE61SdNR7MroFsdFPG4hSfCaJjfssb9RHjJtLPe6LWmscDkEQvFxnPv25ygVP7JZebk8",
  "key22": "BM7ut4Zx8tfmYxBBBBydSYsYBRvgrcWw3K3y3yzih8nDfMUkiuKkp8TBxKMC3tByEszFsLoQqVzxFhomku2QndT",
  "key23": "jUZ3gZe3QYzhRFSiQTKuhgHsGWW6bb2b6Xj7wL7ujbu1JK8Bj2UDrPXN4D56TySk97vF6SdEE9hmxJjBW82u8Tz",
  "key24": "4VFZS7DdpTtcGgaPisGBDvV8f36QiEz2kCGj3KnoubH7uZnUU4gLjkLv2MrcTkYPTihzKb5u2j5YKLbzhQJQhkRR",
  "key25": "5ivfQ4VFUZ5s1N5TxwoDKzcw9oyqjKJzsdqkvg9puqekcNqxhNqpfaRrTNPxTAzCL96jnW9rghAMRH8rE6CnSwZR",
  "key26": "im2tdXzoGxM7KEVi4fSj9scBmfYj8cjd8Sp4yvfpPrM4ku4bvVHJBDcCUGMUjLZ6VKsZ3hHc8fZ5Ruh9W2fSCP7",
  "key27": "3ejG3Az6k6A3tNrodbphzXYDoK85uawxFTRhh7TGu2NziEfRtmb3obRC3T4ah63ds7Nn3o16UKDRt3hKMGfRHuBP",
  "key28": "3PXHQ74ywv2XmaVtcuU4f4j7To3Ni6gjXXKTBEe1KLhCpCWAQpoUmdBer5einLQiTioCYHs4uDjPQNa11vLuYhke",
  "key29": "5xF7JFXRRWBRrkmAsaFyGnAGpcEKnKGUnYSVcGShyQZSHDhu6YLzYTbaSTZeFHzFc7de5qY9J24UihuWTDPDmM1v",
  "key30": "4UEEdQzmRMkegGLf94iuKXDvtN844CAZZFLusnZUfiRkauCdaYDjp6eUSGLnmS5GZifZSYucQKW4PjdPVD1PEYfF",
  "key31": "5mxSFJJa2hDMiKhRg8DZ6g8wGR4SHeW2HK1dCwe5x84JdFdh6YgxnQ55mgRNBm3n9hCgjTYE4hXKqWc4NELjkx4L",
  "key32": "R9B6pGjyXYbbaYj4AzYm9v25gG7Ze8jGXcQJdsyjyDVbUfidiaZZckmsqBx2QeEAnYXHFCYVt7Rzwkow8FFK7zq",
  "key33": "62kj7Ehk2xj3vkC8VM4UmvwMHsXsvmTwsfJtN8zKMyXPyXQHRT1Rwt4iutSoEXJQ25hZn5wKPp2hU6xvH2yUT7sE",
  "key34": "55HbMZiryCgSKQzfQkQUYj7ZQsGVZoC9bNQMscR3BpXYtNYuTafLL4ARAy7Ssrh7DLgcfwAQfetU2vcXErPPrcNS",
  "key35": "4pCFc4V4xpFPPrnS72Ne97fLqwy9ZhUQhmuCF52uHzzw5BtWGYL6Ea9p9T5HrgNy1eDrB1ZgesM2wgMuyFgmvjtP",
  "key36": "4Rb59M5ZPnoBrFYEqF8ADhqhEbkyyopojdbduoSbkzaps9B5JJDnTXCJuv8wiy9uuqrhurWgcU71hVUbiAq6c237",
  "key37": "5WUfdSzHUs2wWkFfT1JV4z6Q8bN1YhaiQywpAx1F3NrHSihXGkLiiTBmGQHLWrtf2W89gMCTweca8evzrboDptu9",
  "key38": "2zPvuKHrcQNBy8nqqnrfxeZqCWFsgjSAoGyYbQ7wELoCwhGPf3bQVPpidFBDidTq7mDHisXoi1gwGw1426iXFDZa",
  "key39": "48jgm7BcEGfqJZ9TZy78sPmv6AeNYzYug6eAzWBz6Tiu4TFoQUscpLUnevgLNGdKzmam8sWRDgm7mYw1sfik23Lw",
  "key40": "2UULbmT8CyDdX3S5PnLkPnGQa7FjQY6gPkY1FheU8v3eoMP9A3PVRo6yf96WGgEqWCj9t82UCMHKRkZFXStgbpc7",
  "key41": "3GHn5DHLpnq9bdAUNoHXYx1QFsXEG15eY6AaQ1odG2bBkxpTDiiXSHHeox1SbE9QrFu2CCUskWBSXiF46vawrGGG",
  "key42": "af78YWKmt4SUChCJrYs74uwR7qJ2rUSKtPoTDgfykwGR2rAvvMtiivrF3fGCi7FMD8TyAseD2BzebJzhn4uJvEy",
  "key43": "5E1RN3umctiGkGpMpiASrJKFm9YBSn2k5AQWjD3iXZKJVERZ6vWcF8wc5SicU4kpokwLcLeSorHvqGHarj65kqGS",
  "key44": "5xn5DjhdUdZS46EMXTVCjhkyWG3uMm37rvE7pZA4Hf7oiMn5tKQgKr7SPKWZDYJrXYzoZtyvVtMA3N8zsGadPo1q",
  "key45": "jQqivgJDCgfQsyGji8kuN7tHTayQpEdnptwNGqyyfdcaZbK4K39dKAUst415CxLGXpTeBchNLwoUgbCocF65YCr"
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
