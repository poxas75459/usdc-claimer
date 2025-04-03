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
    "3EzvLYjCV5gkt1uH61MtS1QKXfXXDwTYZTfRKNKXDjCs7J9HBQwAPwAd5VQMQpP3HR9evQLzv3AdZjer3J64hBEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52TkYQj14ibsMED1scHTi8nEqCmd3cq8ouAfbuooar2Yn8oEx9uNkdA2TsnwUkM73jghmSZ52vSynghWAPXox1YZ",
  "key1": "3NGWukQhYtn5NGxNmqrCG4jFk42Wntq4vJN3V95wLybbhjYQc11x1ZpmmHGGDjmzE5BfNShzEdkszPSwyczz3RzP",
  "key2": "5ntrncnQqEF1R6huaa7MFSSDtq6SZxZUrP19cEtFAfFC8jocE3VxxKDQE6CJDMUxJnTes5wMbZ19Nod9xmB4kR8B",
  "key3": "2xwdk9MKWgeXdP85HmMYsfDPfdSs8dJknCDdwCW34qKBJ5ARgkiP5KXsc1htQg2M7okfFrKhV7mDc9Tny1mE2bwD",
  "key4": "tjY1oiprZJDE9ox3z7GByNqcqNZD6uVWpFFWC4ZmHuJNJyHp8JctfpmyJj7y2KWiCHb11tDaccjJCnHEg2YZZoM",
  "key5": "2oQHZKCNPiG1kWr4yEe14SeA135pN4DEbAh3gEN4V4v5Rwph5KXVXaWbirFswR8da8aMuQx2QRuu4s8i7kVBUc9V",
  "key6": "5hGoMCrzACZb5fYZBZ7rvN26EtUt44KXtjTqFCF1bZEuL8Xf3bKvRe34frDCz4pwFgi9VtvsxnLGMc21DBD8r1KN",
  "key7": "4D923YVJQhJ9U2uvkSbbiESsB8MWmE4TSDnrQjNJWwdCUBWXr7aKymugfWw6swwKNmCAMJWghwvdCF2SQvEh9nyC",
  "key8": "3wj7PCKeZaCCF7d3RVAf8a9uw6V9iZ2Kg2yQSrLSjycnUMwzw8uQ7u6H72ihYYSLAucnsRMmqCTz5hwBfXqK4FWQ",
  "key9": "ABEyYeKSmQLhSmuGN6xtnkWLjJ1YRXdJ4UNHkgg2jGPnGuD9uQjwPcXg8ExbdHv5CxRT52zxVrytPabJ7pVX6kd",
  "key10": "4f8f4etKiwStr3fvTb25zVsyy8XMyfxEeAKCJrSUoNBgjRP2AwGUfYTWjW6HrdDm191tVYUpHJjBm3ivWN7qU3go",
  "key11": "5qd51yCiXiHCwWX3eDUHaMet4H82G8DvedbHmRhSzf3R5HJofBQoCwaMWioYbniCZEy6w4194M1z3MDbXQGVSaE5",
  "key12": "2NLe61FjgF6dMXNjPS6mEqx8akPXfHhYE6gnzqQABo4CsWdcTPJx6QQpuCHGmdjVkGhWeRZ1T2nVt7wxMdyBpDAM",
  "key13": "56qWpK5f1hMksUF4sskscDM7bUdLSeHb5x1jRpkM7G6R88WVCU5AfAXnZk2meT1byZgkYoexKMLLykTkgPpqSgD3",
  "key14": "55wWd1yJBVHxm3fX9jgJn1xktcRLK7EuASvcEkbwUK8Q1vmx27tAabCoieCYT8VFjoPD554rXekCt19GXhPsjxDq",
  "key15": "3Zrw7kcn9AZ16yDpXAPidfsPBbtJMHZrCU1oYYMvjV2whQM8tjwrGwRJnCbm3RZRhBm4i79mRJW3LJ1H4gU5Ke8G",
  "key16": "wf5ru2FkFfEDBwr1uTSX1A4MeucDRnzPbJKnifmLaN6MBqYrytzRiZsB5iq9Vf9UKJ54nniUTjWQMcJQmfHCKC7",
  "key17": "4AaXTF3ekvYCaL9v8yHEVh8LAuG6TUQ4iRh6cWqSuG55QMNw9GgoDRU8NUX54CzQBNUjMw9d6vrBTZfDx6TLFctq",
  "key18": "DKFpHqpNjuVx1iUwgAwfjcgHRDSkxfuWv3mWLU5V78joCULmDQWgDNcnWQ69yD4vT4W6u2ZDXQDJPifrLC838gi",
  "key19": "5NvrrWtrSn6KTXefZkiHE4XryWKBPJK6scK2kvNCXE9HwRCawgt3BWSnPDW53EQ4FnoYqbLQGvyxv4bpPewTdNf4",
  "key20": "3uBSdi8YV4u7ePz8cVW3Qx1Db2BL5awj18WcdetqJ3gNxsfd4KJKBEVcVeyX7tamx8h8edvG8jhJQHjcNgVQzHwJ",
  "key21": "4eh9pm4mtK6LMqQdWgZifsQYmNCWwJ287VTXqr1dtCHQY1TCG74NqeHddLH8aDKZnvFC7j3gtoRpB3RjyEFn63gE",
  "key22": "5S5vRuSvh8zS1bSuBZnbqSBUQwY4dbd6bcgkuN5UyqTeqdzTr81weZeUojQfSNLwRBwSMQYULhp1VxrXYY529epW",
  "key23": "3qSYp8oLLQEd2CL8QRbK9q3nbfFgWrg88b4SFzzAagzPfkpVhk8RBFnUZ5eaF8wankC736tyc87zPGAcpxbCUEwQ",
  "key24": "2drQAqbKpekah4e2fBqbnPcS4EgiYD2aiAkb5MS9C9LLhbaysjVm9STeDqFk3CbtnhGebjBFv455bwPCT4QLCQCU",
  "key25": "8M2BhkBhyPQBxX5MvmNQtNFnh58vgMUHZTSJ2kZWkFbo2JhodRvkLDZkHpXwT8Gs6Rann7u8gavA4k5pFrf1oVG",
  "key26": "5TZRUAd8b221CroiuhYgrKLP9Xv1tCwQ291EPnWxtfLe5LKKqADuUwFiy3nfHtjaNTQhUcJAA9WBFH1eyi44VEcf",
  "key27": "4jkrfGEXPcDTYTSkAmXRepS7JeoUbLY9uRG7bRtBQD4zjg6ZWT9JAvq5y25mn15oQynCAQdcPV4DCHC5NsCg7iJj",
  "key28": "3N5JVxN4ACVra9qBNCTPt6ySSTNudwwVUjt6WXZUHpvcqP1YUDEQUcYbWMY1zxrrCuTLMQ8dov4NF3g9Zu6S4KgN",
  "key29": "5ieuofoohQDvWakyN1ku8AMVgUCUA5DWX9gE6BiXD8QDB1NiAJ4ZePscDPiB3dqtMktWnSvRyNHd1h5HAv7ZTXuP",
  "key30": "AzRZrzYSsxYHsi4AswkNVTBvyZjCBWqQempTtef9w3xWkcx8vKrRvXbZ66aiJkBdc5gtjfDtiwZttQQ51iC4EK3",
  "key31": "BNMqFSoc2wCvRsCsq5GsyauypAgkkibWEHFNu822XYqAQ95EyDzgwsZmER8erGZkNSDBmU96c8dtVRFHKzKuuZg",
  "key32": "achzdBuspwDdXEXfmoUnF71zhwLTuqZHH3j1qPJJrsf4bFsPVks6EmdwZZYoL1XxeHK8XeTEaRpKYxuopm4DQ2n",
  "key33": "2EUVYR7z3xDYpiSEza2TBmzy8WaKEyxkxRrCVJ4z5r5Ym8C9g1f4DZjd6S5fVDJWREELiAFaR7gSuiAJrcQznW8m",
  "key34": "5boW21WfcvBc8PcpEfbUw4zsJx4QVwRgdUi7SV72aN9mxtrbkH16C6KZFbiNHcCeFZ2eCmRRsUhNURBtZaPF5PN6",
  "key35": "3V1waqbG9dhpo1E7vfpC581m8x5aqZ4MeDz7f1Skrxgf3jyWKVvUztP5UVsREx6ZZ9draFjpo6ENPX7rgZKptkRg",
  "key36": "39mmhKRWddmScuGDVCni9T8956218TWhkVQvwgtcJeJDP3VTjykrhHdNhSEVq9jgsYE5LhefrGsGTAmZLAtkD5N9",
  "key37": "4JbYT6D8xQpWBomSTrcYvmC3t4YEvkD3P1vmTmmuoCokjtMwKDRzQtkKTqL7nw8EJQSyQonRvXi9mdyHwgFuAofp",
  "key38": "2cY7fJZKvZFMTbghjiJZgxwdaR1yd6QqpzHs7CoZ7Cf9t8A4VGnVra21qdSojvpdtnnZJD273soS7nAFayy8dLNB",
  "key39": "5fUi3EDSSuy2QeYm4az8r6WDtdjiYgt6BS6uCUUj13BcU6ky9qDcisUFGoeuwKaUW4tPGwYTZhZfXPXmCaH1sMZt",
  "key40": "4MqEccUnpXnEXcutiQChFZmTYP3kJwLkfniPuFpnBvJdirE9a1x2gnSTS2baxMv69aMyyqW4tsgnKwT18LQu2Ayg",
  "key41": "2tFRwj1C1qWXSMDZUBWZkEogqMTk2RVzxwwsiZkxpzGi9pYWAhQwoNdSxArdL8yU3cudknueBjKfRdSecp9g9kY1",
  "key42": "4UQdkdXhs7w1tc29E8T6DMPAWWhHBsnZJaPj9dbdYMr8v4r2uD6yUHtprFkEYGTt8fHLf2pVe9S5EZt9zK2gr9sL",
  "key43": "4UWRLintPgRVczn12LdCHYDgFgsbqf1UPLxkWkXbo1J4LMLRNFw2f5V7uwrdzrHSbtCJ5fGCgJ6HBavPLMk8X9fb",
  "key44": "4jkDjwoqt58VQUbfVXVSRC2exxfzui5acZsWrZkRj1JukHiTuE9soFDwB64e9uEdRQ6NzNLKYtuaj3tggqLyRLCa",
  "key45": "38qRUoYU5WS71A7Dg2yg5q8ecXqfYrd4a5JmsFnVxJP8NNFLh129XrJrRHGpPcpACXseMrpstLRTzJDbJfxgwwre",
  "key46": "5g9ygr7pybEYb6Mx6o4woa8dAn2SoTP1b4XXuStLLQRSe2ij8KwFg3prDMwtzpcBdH7D9RB4WNGtyfSzoM4VSWLW",
  "key47": "4N8ykfNdJ9NejX3cZ8Ksh6WruEL5oKXNJmgpvxaasrpAVqvYQsUzMm1osWB8A1tYrPJbe7evcbsiKkDF8CJ4Rsxs",
  "key48": "441Nh9odYs4oN6DwwcRTVVCRgsdVM7MB9MgSfW15EkYQZcRTUcrgSGMNbCwprwaWCSd7vNdT8oviEQwHjff4FYu1",
  "key49": "41L4GugpKA9dVpCCZoX9AU2DFkZjNVioaTt3csfrowPoE6FsxZXtPX8DuDqbBwbvXg8bNAXp7EnbdyzdZbSFFQ2Y"
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
