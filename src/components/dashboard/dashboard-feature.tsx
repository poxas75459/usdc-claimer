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
    "2PTdxBDXRnDMxaQRDbz8hSJy8etMjCNprjg7vFCLD1zjPAaubQT2rCLHoJdfgtX1TRzqDYjxBvGyuVjUCLcLS8uC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "669Y2AdD6pJNsatgxBDyqFSuttPCfu66neLpebhmo4yrgZiu9GDbUxfyE6RjZikM7VvyvQ5GsTyxVWvunpMpyKWG",
  "key1": "2NQHZYJE197JARi7bo4xFKQyrqTtHQtztibkbF5JHgRMe96rq6YLBya4QGrnktXoNYowxxTwcyW8AuFg4umS6rbD",
  "key2": "2m8Fg8aEkSaAF86PATUrCfhCSMGZ88SthEC6arj6uBYcPNZqX9V9MXDaeQSxTomncFXE3oUreGkaZARty8RHnnZv",
  "key3": "2qdrtVMytzpwv8BT51XughR42YcVyqe431ZKNBnPseFQxeKwW3yUocBXzSHy4NXbyPbPAHyLKebUy4PoSxaNJwwn",
  "key4": "5atbd5YD2C6zWtShzpwD1e6Ma4yG1Y4ih4Bm4GGmB9d6A9ebESqKX159HNb2vbMFB6W47KQNg3w6AvSqd6HUU2gJ",
  "key5": "3EsuzytRkLM9WFwSYexNBphdx8w1tM415L4sJxtFKu6mdNwCYNkmBBT7DeA2BN5acaRR4ijNhkLQo3ZzKPVhvFj7",
  "key6": "2zsspME5e2DYSDKKnUmMfUZYW6cwwnMAnXerrGrUCKemnKeS1NQnKBZq4Wd1UTuDWBbfXnLq9DY9rzBz7LxRkD2r",
  "key7": "51oViW97xomcs21KoPXE4rGRuWyVQCGwfjHiGvTZzFT7f5QYue6KpnirPJzcrxzsjPtD1YHtGxSGMacxxVvTwDya",
  "key8": "2cm2D5fNQhK1EJp8sHqKKpKkncARVD2VyTcKULU6ptzxCvfqRtcj93q9RkPKrxs1fZTdRGrRJCEZjeAMvLBVNUsp",
  "key9": "v1b52ZYpehaWrfFM7ejeQnChNf42gioG4ss5fbLi6cZeHekoJy4s3R9graUAnB2QiFuCtrT6Ztir9S83zJWgB9v",
  "key10": "3PHuaHdk9zp35nu2KqaKTevM2oUCcEpP19b3Y9DZSz8HR67aWAjSgFcQkY3ivuPHZkAErZUJXtw9fewNFKvS3zSt",
  "key11": "4cuFQ5NikjZEiNFDHabeqpckNQUwdsbn5iJN1sy8usMgoA9Trn8pEcJqEsu7DS1cNXucvPDoLnrxkvTazviazbtF",
  "key12": "5s7uLxN45pYSFju8dWkfY2veg79NMKBgUPAxjFzKTQEdkVkZur1trYCkagQ2zKKrC9SZXpeF2RiEWPEEHKbuHndT",
  "key13": "41uvtx3dWWKnFJxdYRQ2GuaHA2xSLsTxFi2YzTgsjyj5p4ce4VggXGF5uCVgAZbdcFXkPu1d2yUwdTQd5jWwFHBu",
  "key14": "4roCSfxhpK61Gox6cUxEZUiUtv4UejbzHAJfUcRhapa68DXHwLLQVjScbqn5fz9qqvcUei5jDNR6iSAE1FHK6dHR",
  "key15": "4BudZTWS6RYWM28t8KbUbkZCKb3XL7KoN6g8toDQimLtkGRoq7oo6tXxeb5KUWv7BKGxYrTvmX6ZPSztDgaGXbS2",
  "key16": "3bpwA3cgLDidKDHSvN5wwZ3rNGXWyaQDJC7wid7H19ahGcAgMrsiHmdfbFJTmXjsFQwNjJXGZ5T95YDJDLCzZg6E",
  "key17": "5qNyF17TWfpd4hFq4whNWcrA2abKRGGjewMd2X3oxtW3ctfpfggPmYCCAuWD59xogDfMd2ob75K8KnAwNBT1VqgB",
  "key18": "2CsscKUAMnzPNrHkpf63Y8qLxE8fBoHBMfqSgokq9Q2p82FFHYR4NViFBV5Z3jZS1bc354TEaCm8uLBv1pTh2jGG",
  "key19": "3Nwa4Bv4eATD4QLnjLSf9J7CfhesivAtQpgF9fkpLDCcAR5koJstBNw2Hct7Beg6tmMaSwK1RCiohK6W7N9Lk3A7",
  "key20": "25tsKDzSNUMnVEYpLmz2YMRzvjzxxg7nDprixDwu7DaZQXJPdSJ9kMTgkfdRUe7QGZK2nai5KEUeYXNCZ2yAnZtA",
  "key21": "2ePkLBJV72NT5uAurxnbpz1uGp8ZjSegSBNjFeTXkPBWVt3zNEgCuFVbRcBnRtwkDjQokRxmoSVuisLjVkpxwySH",
  "key22": "4hmEu9vPRdPLKMBB9TDvM1DePoB4mtchxPsFq4iwuFa1JCkbdEX7gfMfg2KJfA56gDQmQAd43LuDzSEnfM1aHQyv",
  "key23": "3xFPxSC3YWnUvAcHxyrABTemgDR2vQUpEZEEGnXUW3EqBJRzHxB7VSLyPE7KJcEwXeAe4pTaXgy51WjWcj7xFScY",
  "key24": "MYDPn9cAW1bfi6VACWqGkcg5NZxxmMDxUVLSeRfyiS4zHECbehSwyrXuyhahvPcBK5unFtvfhLLRUMQuBKjW4cs",
  "key25": "2mwLkEWjwtTNe3Za9m8LwWwToQKxH71MtE76CrfRt7kQw9Eod4cYvL1CeqiPrfmLnYKbMwzqs2tAVxYh6Hs8JUSW",
  "key26": "8AhEBshFuz1HFoJdBxiQANpjtCRuQuGhFDSf4Dp5jsqqSuagZ5Ax52Y6wEDjt1dccN2xEgxaiwZQZf1nj3dmGXw",
  "key27": "2PZRKg3wMW9s8gbakXrtjBpYX2mx6dVwkEkZMBpHLojsRDWPQQRyakffCLQoRipr8cAMYAGPi9Ln6nfixt485DZF",
  "key28": "4cgQBkxUWDifb5NszKQrTZh5ddAh4Ep11XewWdM3eWRdMueczdwuJRhsDjxn4exMg7xmK9DKAejBHMTePmWBGuN3",
  "key29": "5ZfFkRCAx4sDY9ohuCd8MGZ3uhvuTcruHdSJ1zwtqw5nXPQyWRMTahoxBEiyuUdXAnxtFFXynRmHEvwW3yynBEXB",
  "key30": "2vPvyPgp2DCWcswEmTex9A6qtZFz5ZuHtb2xqsKmpD93sxQfuvHPJwbdvD5N1q2A74nCo54Rm4z4cZdyM67x8Z4e",
  "key31": "2sA3exVLMu5okya6hRqPmstAoBkvUumKxBhzezTcubjxdv6nJCfYWLjLij4qy7bxCtfiS5RDaaeucgSGYMxhxac2",
  "key32": "mzsQEQBLeCW4rf5GfHkgnG3AqNWFYjZsWkNsYeP4AfgKzPgcR36vyPytSqFyHX35jJSUn3ZcTR4FBXsxfnvwxSK",
  "key33": "3RdZhe9PdWzrPZMAS9ifiE2Rbuk787AXsrJnC8bbejD4GvHNGFynVoSnQ8GtXqtuuaPR32Q6PqzVtn4FhwZRno68",
  "key34": "56mZBR8uYdD7dVuFARsu98YzYH77qewuGmHfsKgKxqeYxrbbG8amGU7NYiFEnmff1WreijQz6wT5N2negeXYVAJa",
  "key35": "3Qq9imeKhJeWeQTPzo9Rpebc3oBU4cn3zHideuUr15FQyFznaCgk54S1CdMYxi6GeNMGhV1JZNKWxBbVEmUpnSuB",
  "key36": "2uEZ4RaMDkcaFvXSEUDYfiYxFKnZb9WZU83YPxT7QgS4rz2s2im5Exnz1VvTzY2dfcNbU3bSbcDCmMBrCdy1prvc",
  "key37": "T3NT887L145sEybXEUBNCiSvRyYboxX2qSCLYHNHv7TpQtdFsYNCiPJYqWoUChL9zoiTdGuQ15TZFE1bHcUCYvs",
  "key38": "R5X44j9Gnsyamy1o8ZzKKgScs8DZWq3fPWK8oiwAd1z5WnF517dpqhqCLDpfAabS68PmEg4oXa2KhUrDeZsUs5d",
  "key39": "4mqvUrCvPPqVXnVjgtJrxe9kRN6cnC4VHFTbEW7qoVX9ujLD9cjK9YJjbYMTXeo99AyMzADdNLXdPv1u75jxYep3",
  "key40": "mvj73bRPT34V6iKNeZHAZgLu92gzfCc21PZcNWejM2Bns32pGG9V8zcqVnwb2Xz3ZBUeS19PCvuQhjrjRAECeVv",
  "key41": "5M6DTGEtfs9qCPM9noSwCZh4oT7hZe7vn7wB2ippVtUXxSzjEpb78FQG3DHNhyDesLhvDdMzX8AvUkdU1eVJYJvT",
  "key42": "5DRFuKPrRmJoCSU2kBMa4nMGu1ZVUACRT1pFh3GUf7CFP7GEYTBev9StS2kHP73AtgKomRULjrvab34E2yzJYVRi",
  "key43": "3dUjrTd4tdYxFZR82RKi4g9GH9HbdvzYY9i34yTpZKZ1VSC5koSoXTEVYeETjBiEfJdNScmEFHChuzox3SxXGTdP",
  "key44": "ygr2n3F2Ki3JDuLhxZoJTGo7gx3U3bK2UPuNHwmawCXNARmV3GczLjMFQaxUtmnRqqj6EpAC3MXd9ZMf4e8K8V8",
  "key45": "4H8jnmC5Sjjcy1vsF67pbSxYnNaWRUZS5aKwE3gxmnf5pUPXbTypjVh49Bgxw7RebpzyLRKYDw4nMTMWJo4kQbC5"
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
