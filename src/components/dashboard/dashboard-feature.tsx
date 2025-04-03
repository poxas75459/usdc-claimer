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
    "2akLTCKpnA3pLrFBWJ96UTgFD4V5fbJs1vXACNpTTzbeckEUqubHaGsEkdn95U7ZSxcrF9oS4gE4jrgvDeHC8xbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24WPdJhCcbbGLpjDnYsP6scNHhiQqhTYiNVt6tVpoeutQGNmVjEGPFc12vq4caV1MCjix3VMC92Wepf7N9L52yv9",
  "key1": "3jgSRSbFFmN4SLaDCECc4SUJ4Vz7PC3DwcdZBzQatGwFQixZp4yGNb7r6Ch2mv94rT9jKKepgk9d2QqJBPciFapT",
  "key2": "345QAx4SExsddJBjqWWmWFbazd6rjPLqNDux2caBDhMhcB2L7hqW3PsfQGGonCzU4tXqV3KN8GevgsXo3hsSxaE5",
  "key3": "3srpcPDVK8YYqWSArE9hqZQsFWmHMpd41WY7sa7RySZMDM9RQAH8DSwDawXE3LkUos3r27qmXLZVuabagmaviXKa",
  "key4": "2V5JYipzxDXvcohxFogE416m6dAsLvQCHeyGEgiPcqobJar582FivC4ryqnYD9s9PQcmzALmu3EyBirGrQ64B8x3",
  "key5": "24BqZBnip3DQs26eLwGwrt6uULHjS4iZRgGnhc1i68AQHW4aGwuaAMnNqNquewxndzCmnhCFttetZdpkkdnszfi3",
  "key6": "2Ry7Qdn3MUrs28b4422QGoVmQBwKFs86jwuneFKoE8guWieNkDnmMUDPt8st9bmmBWQ525cz2CH1XGn4roRdT5uD",
  "key7": "aVeG7iyemhM74t3fU1dJvBSmJXEBniK2XPxQDt9mn8qjuHxZvYqqoMVYVU9PhToPJgx8NBS8d2P3VkF38LckYnK",
  "key8": "4WJgSudpU9h9jdLPo3kJi4TU49YaQZx7PNWqmivsHfBqQNzHKFQfL1BHGWtmQJ24JWzMZc5n83MAbBKkrYeNxfk2",
  "key9": "2a79rkG3qtQj9CE1Wed2wKJoYdG5zbzVMVyvHKAs9UViK1a8F2N2ciFxqNm7P67g8oyrjzimzCLFUby9XsdyRBav",
  "key10": "46aXKzjPqBevzBVahM5CQdeCFSS5VXFn3FhWTqyVQ8VV2AbddctzwTF3LYMp4u6NGbez3fbGGio8hsPZFykt9HFA",
  "key11": "4pLa45vRobXpVszsTNbM67bjZpwiGSBveSH6hgRTatmaYHsqFHPUXiq9znXujHC7BSrzLzy4bwXQs2MenH31YjzQ",
  "key12": "p7yfNgHUmWkFRhJu3zqR6KS5rQkJUAfTQ9asV6x2uVwmNJQ7UHEFLc6wAUt6Hm8Ta7eH8YuShMQvtUMe6S7k2DZ",
  "key13": "3LEY1Z1AneXAyN6nNormJSq4LfWQDdp4xCset6omuhqHx79D9b1S1M3W3nHe5paM4jLW5Ef2jZ5XgHq1SHzy68K4",
  "key14": "3Z2yw6qtoCEZUb8ovoxaUBE9erzQyDKQgSsSBvQXmyjLbA2XnU1p1JzmZRDhJyoXuz4bQX2Qud3zsHGLD22uevdq",
  "key15": "2Mq6fYHqmjbZR2tYW8FYxgLYuzPcEMYh3U8W72RGjkYSNWDx5FBSueg8uFvUdBH2NBaiKFXCoAGXExxHGVbBJwAb",
  "key16": "3zmz7Fbj9VszHsddMuqXjmErkAwfev6QuVGDXU54z2D3RFHDN2nx7x7iwcd89wwaDK1fS6Xk4Jb5bye9To73DQ7z",
  "key17": "1TuVnN7L51ixMghKbD4c1AMxQQsY8C1erytPWTmA1QTgdzZyFEi3S6ZoBoYuMMho3jemJUXBNjGDwy1aMJt6Sv4",
  "key18": "37vCdvoAxiMBLh9PFEHdTaJEo5SKiELX4uR82XisJiWGCVesdbpeT1URKatq9xufAihL4EHxh4DW9AxmiaSVAHyL",
  "key19": "214JTAu15mZTjUaUdTB1Yr7QkcB7KXo31zRecZkd6PertnXwYYQF6G3Ky64PYH3V9TwPBq3v4YK3xNde3VrECtgi",
  "key20": "2HzVHoa65BHANWuTaZULNds3354Zjb9Sc8EvE1oKmX8bRzVZYhicr41Zcg4cwL6yWjQiPo5YN3XojiGfMepErZxS",
  "key21": "5ZsfwukkFYgfSosA986gxiNvSN53ebYGUpcZiM48Gxw6gfdhHo4ejKwNh3mXvu32L9tfyUFnjV2CFTxSUhGTeruZ",
  "key22": "cecKDESSVJN7rJ5JfS2ezqs61cDWERZoBkUzC3uosMLkTdmi8bf2MkhsuGFQKMaLoSabbtxdoinfnkAbEsnK8ag",
  "key23": "3B1cX5CYQLrCQfuUSm2KGNJ7n9aPtvYXqxtfLgFtStY8b1icmZcEc88udGEFPkfLwpTAVKRi6geQJQvrf7aNgQ9b",
  "key24": "s9bSRSAqGAU57B2Wie9hcRJQ7eU4SdEMbG6tpYN7g2LQr48nGjLfhPJrsv8wVLKLfToRgH5KTfKV9zGZpJmFjiH",
  "key25": "bLwmBKakUeAfRQ6w6m6UuWhVQiqEtqgopJsY7rjMKqojgodo7MvWYrzr79N5D4YPjU79M91b8aAPbgQ2aEoLiyK",
  "key26": "3Na5WjqKiXM8YJhvyGus7VTGsrg1LSCBpAx193R9WZ52pdefZN3DFhhD8wfAkFrrNTAtX7vvodFqDCUocbfZLL1w",
  "key27": "4pUsZQ2Z2xUPAWBzcmykzo6vY1GcTzDL5LLaZwRc3Gw6xmx3QH8rVGXZmV1viNfeEdp2Za149tbu7nuESBWoWH2F",
  "key28": "Qhy9XcS1Sgq5APZrtYMxX2hPvfAzhNh2ygzPBqHKmuj7SAhLJPMDU6uiWr1r6FqdWcc6uVXkkELfzodcJzuRDF7",
  "key29": "77PwZjsma8hiYLZ599DB71w26ThWwvf2HPiPw6pPjQXA2AuGih8U3nDfHaG8w8bXXh1u5bcMByNPuP6isqjXZRR",
  "key30": "5gHivpBjmjEomNivj9cAXv4eesN5S6TDZ8qFPoXwnykDQE8kqLmLRhhfRnpwhJjXM1vT2mchL6PJyrPhwfQaxJxZ",
  "key31": "g9dpyfFPhsWVEei9wYRNQCPL3emn8iCZz2dMDiDitp3oiC2jSKmBvVMjbYZ3uxRYCMCKUVtxGAF8dKTM7GfjUQ5",
  "key32": "3kgWDMDniPaR7rp5j5DT1k7KqK4wnXjt8JTbhfMU8PZ4wrZQBiS6xQh7WdgnJhRwufcwV7YpKXpCj6gkWcMi93RC",
  "key33": "2uAqN6aQD5t6zAJzSFDCqnD1RhGJsMYrfdFNJ6912cZ4mFFqBQCAWbo6adfiPrBNtJVvt7BJZSYeDRjZY5qJ18We",
  "key34": "4WpJfDLt5s8XTf11yN8ZYGTV4Nz2a78oUrg5amhujqngfL4oEzYByHYDG6s6scD9fAqN6R8wJ5ekvBNPQMAnMB43",
  "key35": "2gfgAiq4ZZYmPqdkAoGjZfBt6viiNWF2hKGE8iZb6jYp3XrioFkJwFvs17iTwPp5LRz4nxLwupfasr95Bwt1QRNG",
  "key36": "5t8N2MdiUjBqSG5mDmcM3W6uxPLFFRPt9QEvHf1pbCBLYqMs4QhXiAVgAnwAznsanTrusHMhA8jeXmhEP9YDxnor",
  "key37": "36cUSSDzBt38vMfY6uBsJQHFig2iVfztnSmZ71RP9xDJR8sQha2ej83oNBHkhYLVWMLnkzR9Xa8sUpEpLh4CQ6Tx",
  "key38": "4uN8s77U21XedvKZW1rLLZ2n2CbNxqGb8qo7uHd7BKo25Myzun1dytBK3gE5n6n1i8R3MyTxgcZBsY7ZCrmCVkga",
  "key39": "38Ds2F3dgzqG9my1ZHoF8MQik6pVw99U8LzyWB5NvV75YbURqCgGPLmTocMEq5nYQKztGCbE4H91hVoTonT7hXPk",
  "key40": "3G9jujkX3ToKFK7WzBSRAAj51f9h1aW74fo9TwzuJPcvYjgN9ruRRE2izNWhzg3Mgwz3CSmnimYUzLSVi6k7jJCh",
  "key41": "tvL8UfW6hrw4qehPGZWgpVfUK2A28itrGXrHhk6J3ZACeGiMpc7Ggvssf14PD6ioZf5KxXgT72ESm8TxdTsfvQg",
  "key42": "4qZ6nmW4zD3spqUr1shaGcTo92TrTVU6PLFowhvdJkS218xsmVdAHfC9VF7dFGPdD3TpYnLXRWEaxupoauG3NYzx",
  "key43": "3wQhDH4ASg9nu1qFVy74s61RS1LFHvH4vFw7sFzHNZFeVPqkH2PcvNuGJ2M1nVEpceM5TdiA2SD3mLcQWKQNHVkU",
  "key44": "5hxknYvkLbKHVeaCrXBn1NcL3cQR5G6i8ZepyVNLXqYckmDjDoTWS4ybpWnxCE656DUTVJhW8PvTVJxKUQwmUgy1",
  "key45": "3EyvZdgWZjBvncDMmm3a1F9htkUzXWjckbMMTXPV5amU37hhjdFL6LA6UhDV3uuuEbFD82vJmDAm25oS6oZbJceA"
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
