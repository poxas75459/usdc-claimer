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
    "3gBnMNasAxHB7FvoSn1CqCHBwcgTiqkJVLr3xWGkkHYV7E6CcoCSFiVvDDYPkxiyzvDWVMtXr7HshVtZ8BPP2buj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P9RvsCtG4rtvgYFjb16WmQ3LP6YAtArPskRvv7GcAtY53VjvzAEAexjtdyZ4oKPEs5AtNsbR9fbrmSGSkJwEZAn",
  "key1": "5Q5Dy53HZYGDz4yAuCjhX8NV4seHe8G1ui7rDeaoaTGBoN9yzu3QPNKrTQ8ALritUNc4ipcs2hRtpbep49jkprHe",
  "key2": "3D5tqafrtjbMq2gR3ZX6xqkybvWhg3c3KhJYkpwpGFrKDvbtDzvFrnp5jcyNnNsQEkZAJJtDuYndVRxP96gGrxu7",
  "key3": "279zSVeJ3Nim6YanH56rCmCaArVawef5QUF5cozneHRnAK75fynbkVfM5CX5jQzL7Hfivjr3UunvUgCFYTdXzcLm",
  "key4": "34voyU4Gi3x9YaJCjef4eMieXExw7xfi2hNevySxJu7tzB2fwuoTNnsQ5wuk1yjmh76LRcjM8uWswM7VKLoD5Uz",
  "key5": "4UroFQ83FbsJTwEXi32uXxtGHv5DAbTk1YLymvZjKP2VcPbStgSHfmdbgTu9UzTr8tbJSppZCFrduX9S9DzkVxjV",
  "key6": "3Gn81wiG9ZWQjXY7BSCYNsdmPnhSdhE71xACgQgHoPpgYBe948qkz6598W7e2JKXc9FwYCSTcPLQ2adHX6VDhArP",
  "key7": "5uPyaE99GWbxVxJB43URCh52jJDz7TGJUDd25CDPsXQZA2nHVXcrnVHrDbm62G4KU9cduwifCK3F1mD9DC23aJ92",
  "key8": "2veXVLA4zcoKx9zYqwSez4AhEUUePy41U72WRrsy667qXJeVXKAVjhSYssBLW4yq9XndrUHbUwysCPZuDub1QURB",
  "key9": "HMaHbHhHiDvrHFw1z2zUA8VnSUQwTqVCHNa2qrJHji9qKXbumdA4LEHxkttznHbbbHc532nsf9c6ZBdHdgkXhjg",
  "key10": "2GUYhUdZAfi1jwKPiuKi8Zd7WXkEC3tV67ceyEKijuzaF6b8JG3xPmLEz4Dit8kXFRzWFToVddW21yaJsJWYwzmm",
  "key11": "5wfLDKFSRNuigQW9RYHfofSTEiwhpkWf1jhM3NcbacHjTtaBoqrYrm4q8dQvFnyDgYHHZQ3scBZmnzeLz1HDeFvW",
  "key12": "3UGYQL5T4hkuA2CNzFAoARmczsj9kJuUGQU4uLPN33aZMnrr9kPorPrTS3MgUS5r9H3Q7ck1AwJedP4t4EbmKSn",
  "key13": "4r3Faf7wBausktoSPZa95VuFDN2Yu8MN7WFS52aVKZzmR16MAfaA9DuVwk5W37RJKn5D9ToSUVGXwj3fUvgMQPwz",
  "key14": "JTWpY4JsuzWb7QzAJ3ezCGY8Frdmn2CZXTGAAsMfNZtpDPgxUDnMFBRoKkP8H7YgYP1ktpzzHUWEn6VsUmgpuDj",
  "key15": "5Cadhut4p1bLfTdbQqG4ibB1rkYsreN7RvTSY6LtUDK9iPCDwN4agPBERShQGDQwpE13FCn9sXpNzXSXgGVR4cuG",
  "key16": "DnZBquyB6wmdmAmzKUhyxYFDLYy7piyBXdW1YiEKQB3nEGu28xjhwRnPrjxa5vkwhMgGA8KZYEUdNzkxyzXQYXC",
  "key17": "63pmGvs5sLNwSvs83t51EdcHGHgirUv7uBdDXvB9Ptx4MT89wnmfMgdP2Js2miGaWyebGTGYqTzp1XMiSXk4uMXW",
  "key18": "3jqzBLC2h9r6Gvdh9x766kD1ayfWEfEnc7QKMv6u54UUhPnYxwi3kBDoGxjMxsPTfJ9LpvQhSHHc34Aq9Bebh6J8",
  "key19": "aTpjTQpLFzjbDdCzcBFreDBEtpc7cWLxrj9ZnL7KFzMf3tk7VEFSpYHBC7doSktak2rA8DaxLb5b8pcbE6KXo3Z",
  "key20": "2SQtAxZ3PAYD5iahrsiptL2wHgFq1iyMt2bSjJsqhvx2RdfkjpRHMVSWCoKKKZwNjPvxhdmAmP7mh1fMZcLGeEHD",
  "key21": "2PrcTSV7mwKnwVkgKCaqCsj7tTReyaxydH8h97V8kD2ZT2B8q5a4PvKzN9K4x79DguM3vtR3F4hrBi6nMhPBMKy6",
  "key22": "3bVfVWi56GzksD1UGJDMQy95dA2ucLFLvnW7n2qqT86YMSALzc44aKgSDavmCs84MMrrHUryjPQjybZKDLoy4Rbc",
  "key23": "4CyMmwXxBjWm9G99QwQT1HwY1U9xVAKVKsqruCCYkXeMHHuvS2HoFAM5WR1zBZob9CvmoekMm5p1QDszbmTvpx1j",
  "key24": "3iVCZiynHPhGeJ5p4QTU6jLaLmDmPgAv9nD6toRpZZHSC588HXPQaCXMLj29P2EXXk3zkPuGCD4cP83ottyq2eZP",
  "key25": "MbiMZtobXmvGkfNaRqxU7kSdRZxKhRRXX5sF79TsFgspVbuRiZKVA7U87VpWjWV6YjECp5L1j95iHbTxcpKPQg6",
  "key26": "3bMVY6Wb722NgPAT1p7FdaEupRCDa1doj74V7yYniWQviHhtXDVV45HNRBxs36kSye9E93q8PDVoNMTrN3GtyNWy",
  "key27": "22NH7Yys1KbNqqmXcYk23PSh9uF3CyhwW3KsoSSc5eMp7eDSQ4PkUezysZ6L1n5jJJTui8g95T3dweoNDdfAdJco",
  "key28": "LMPL1vpy9cWeCbDaBdYmvs2CWqLBQKh5RfbFeiw5x8UYJ1sP2SfTQ788F6m7eQdSsU9svtCwSZJhkSPFUMyWi89",
  "key29": "3V1ru9vq6JLURmTaPRSP96b6rH7Gg4ryTAy69nieCTaAp8XYVc2VKvJYMCMbmPijReejqvdQfrwr1nM3hdj1DiC3",
  "key30": "5UB7dxESFRbM1Ek68XvPPxrqEoUYPqjnWirgwUYXx9MV54wbVNfY3ZUD14AZRL5refURNBk4QxWwquSeXdQYV1gN",
  "key31": "39yfYDgWqZ3xmmtHUQXoGyBrDBspRDiLTCZfbLBB9YncFUfCqd5VZSYW1WLfdtNCpXx9aUH1MS8ywVk4iU764e1j",
  "key32": "3aeYTsMb7EmfD6njNGpzHDWTB16bvzbbVbtR4yi4LHpGdgfhRgrufqUVeJ9412xVHZFVpmpQMGDAZuLV5DzGcHfY",
  "key33": "3BDiMC2rBYgDGUGHYbLmfMpAkhNaiuJybwdoraKGJoQgFmFtj45qiTgTEQayWtJTVqwyuBB1fpjaNmxfEmuZseaU",
  "key34": "BBC7ggpWAEc9HPKGeGQpZm5gSTr4uNNmuhnxGcnTbFg55jcZX4ShymnpNbWgmWUY9aRRQL1X5kgJdmvaUiYBzKr",
  "key35": "31k8jNh6ASH8M4QDxFdrSYWBFyNvPKmckcxp3S8QeTqcV31VeKDySBUkjujMSPHaKbgSmeG3vjR9TEXSJmm5J4DV",
  "key36": "HqedGazdU5eT4opeiuhHnzM8tta8HUyvixdhXfGrMj6EG4Cnzuv847gnyKjbYEKuJY29j66gcrCDeBo99fjfndN",
  "key37": "bYne5FtvLZCHXVRBRszEXMUEbPWuSPb14ciM7z6eZGuCcLGCSc1SGjmfgkFJ8uK16koYixcPq49rcSbhP8G9tTU",
  "key38": "5TYHegpYHhgLaKetF5876tnGQEKeU7E3v9ZJhR8ZFDB5rhJBWQNFbadjn2yBe2FZRZTeurE5jNRAE67df2as8eGq",
  "key39": "5B6VKjP73rtxr899sJH99anRnEwPdt9sNm8ZyBnFvjMDB5ZxE17cRkzJ2cJiMwsErCT3iuzsCHErhbD3nJiLTwhc",
  "key40": "J6MHHrnwbsMEpYXYkSvqFjjfPpqoTCYeKLjGEW2j8HYJegtFETh1Nna6E8eiKnEgQxmGrn6NXRq28TPbthSxSfW",
  "key41": "MZEBLUThcg2ddBPAL1s8ngqB3GFo6uSc8raGe64zCzVsz8muBpWNJxLoDrEVa8senJPmWvHhWPvnHjwV4AcXWP1",
  "key42": "4VLn1uaYyrr4fK1iMJek2TtFFhCoZGc1AqnkwXZeQHhY5NkajY1GbGruVgZkjThCxKToeUv5WyQQK6aDK2J8MFzy",
  "key43": "37sJUc4qp7AzEBZjt76a5rkk4FVJ9Mt5kG4JBbNowB91sUyBAV1rbuvtwDU2LifCismbXttUbUP1KvPqUPkmYbz7",
  "key44": "5teS93nTjQJxYKXpPVBKcebGKkMqdjy64DuCw9oSQRT3Y5EKigHrehXQttevwvEwf86A3Ho2CFKibJbyP7vXhpBH",
  "key45": "4XbTekgsfuhTGxrkq2kUDBPQyXTocojJKZz1mkU6bXvSYskQW9jZkxFoAHToddG7u1rS49WAnKR3rZ2U5b8JxBgS"
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
