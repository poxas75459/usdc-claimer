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
    "58DUssJpG2Yn3zVsKnAAcLF6cMiBXjNUag33dHW5c23iWBQ2nTNEozZq3QZBpPjmTL8UNmSeeqRcnBBA4JLqeNST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eDNAf6MTJ2Ni9qSNfGRAyBdPBsYuCgXwrQd55ntTm1nXWViWSvo5Ty2AcTsqrL66nkKfV8YgwzHtbmXvBxksD1e",
  "key1": "3DfpoZnKLD1s1xjvDcEMaABJuFrwivaekcubkgcpVxaEDCA1byg5c1WX6gckYTg4nibXvuzrZcXSxXjtiNzrLPty",
  "key2": "UR6xq18pKupyJTZburZEbC84y3zTGLxaTMWqkax3xSdDzVud9SxyS4mkc19HZsy1LFq5fCq17TvF6uYDS8t5cDg",
  "key3": "3FfjDKC13xTogv2qzs7dSnCXpjZ4uayHWz7D7Sw7CrnSjQsL8q7TbTmHyar8wtBUmL5g77GnRFcVevbnaS3bSTaZ",
  "key4": "4qHKzAFDQjJaxWrgdouc6AW79VBbHG1i6vSpeJRY7pBBJ91Hf1mZqemhb5XeLeymfPqUJpqi5Q29ZU9swY6qGEXU",
  "key5": "aiDFerKkKV7ZjsAy6aU59Q93ofpqzyLzGq8pU1HEokY1xqzzXoN4nCYUvKoGgwzPRrrp8ikgwXYCteK1g2UmXk6",
  "key6": "64imdFgGQx2GwW1RqK5KgJ6ASRQ9ko6Hb1X7u3NjwGkNbmrh4PpGjojisxL38rjjpaArU3qfaNznMUFZpXeRpCJf",
  "key7": "4d3BCvxtpweie48JJe81nS3od9UHHU8hdaaTRhMNtSXaijhyHoygwr1tYhJ77KVX1a1fPevyajNNKv7FunAw93VF",
  "key8": "5TaUYtG6ijxcFEr9TwdGSrTMqRt8bXqn6bf2EMfbav7nfQ76Y4cgP3mKV51EzMhtmCccqK2GJKU5MV7aZxbAH9qQ",
  "key9": "2h5J2syfq26buvWDnd3JMT5qVtUV3GtkfpDuU2oS18GQhtrHtuVKPzGtissaC5XdtgTEGttNkvTQQDwpxDkKiF63",
  "key10": "5QBfKkPQ7Xs5zwW1LbqjwfAVvKSAkqbq4NWwHp918f92a6L8aFQt9Shjmb2ygcoj9a631VS3mfra3s82ErAQK7po",
  "key11": "2Qic9ejTX2k5Eyw3RscMtZaFpVt7UHsFST8H2JgD431J4uXzUx8AdB6QReG24y38Hd28ayTRednFKuAyvXXfTo8t",
  "key12": "3TJLxsHdcFJ8J7mRDUj71KQSiJsWR1rm4ocUFj7PncEEcCHkccJi641bwz9Bafusk2bZJ69n9eBQvU7Cq39dcsoX",
  "key13": "3qAk136A2Ew9k2MHjeb8mCoohTMJJjPJ8dKKABXWcJW2P6bUkvpgaY6LWFRqkXcR8iuB39U43VnSDSgqSLGb7oDT",
  "key14": "25efuuffiu3aVKbRGbX8o67PqLP34cggYbFJRrsRLhEJpQzuhsjUJZJf5FNg2Qg45xRSqY9WMJQzM2DwtDnfRAdQ",
  "key15": "4y3nEBvbQciEUc2GnZeNm3NgMUyHDq8k6DGtkzR4wYqagW4BfmgFK4HsVtwjzbEcs4Dk1shU2HFfGTngngN8zDEz",
  "key16": "2MN8eDWCjvtVZ4geQk8Z7f349aYYFaUKajXBfGLy1xyPmDWqaq5Sk4ftak63P3rY1cxRpH9i48H6rBqvs58HDWU4",
  "key17": "3jPwVHKRevALZUVGabkrxQhwiEWmQLmCyHfGLZxAvPVZEddmKrZUcua3ZwfTFFrh72EUz9z5PMqxasuopgBkFMhc",
  "key18": "sEgRQ1rq5kvKNEurJzwuUCpkkq5uvJCfTPKyCKCa63vbLTcFZUqjqNiq9vPBEokRTHQCEaomVmxAnbcHEVNSQib",
  "key19": "3dJnzNHcmteUS4BcsepxK2L4c7wHvsryhkQQDMgSNzQkSCyPJR4yy4LZFkoX7z9DPsRRQJ16UHATrXgepBcKfygo",
  "key20": "4EeATixMGmMueqZNvW2CMxQQfGXj5TPWSWxFMcMsMnfho4Fi5kvyoPua1A549h36GfyyVJEvmvP5ysPymypRLXi9",
  "key21": "3Wi31hk4sbJmY1JizJpW7uKowow8gBsq8eZECJiPjj71j5u6ymf3BjFKrFFNuUGPLxiqFmkbEdMcrvpUxFa4eT8W",
  "key22": "4vvYPwhLGvP2i7hSULDxQyMLqcdEzyunApJqHJGJP9V5kUoHzNsKWYH6zegoZSHxGu6m4ygBh48ugy2wC5aj8fLS",
  "key23": "33v9W1EqsCULoWdRddVvr8QK3V2KwpVsU7zKs5RAEZ7LHx3G16aEM7Jnn8xyz6UWnxiynmcAnsbnPUFPqRCE6bSA",
  "key24": "4AbKGuAhmgC3ctYHGHqvV3WzZhgpvQDiVHSnhYapfPXnAGw2DFj9eyiPHudXja2upHXqBbZctVLZYkNckprzVon5",
  "key25": "5PvWLLy3fk2XEJ4fFUGjEToC5QBAGshvwbL29Amz7ujZ9LnqMqGXqDMETuez8YSp3N1v4G2g6bdMsWE4CPjbQabi",
  "key26": "5vMMBmc35pYi3yo8kjKt9Lh7hDZRSDDvLcqCubyBUJg1QsTSJxeb2zQz5RJ4ZhWqE5qA43o4MsPNcr3zwXCqRA9T",
  "key27": "5F5Xh52ae4e3r4vo1g7dQir5up5rcVwsz2RcgQ2af5GxPv4C1fLPaNZoxCfXXNiaogLuRH7gw4SU9paAJ1cYjie9",
  "key28": "34SJ7JCweveHtzVsnfkvQYwVTkB4tW5iRnB8HdLzv4HdHnTZ7azraV9LYTS5bssd1FPN5dgnce94E1YnG9XyKtxz",
  "key29": "bC3TRQhjTcXzUXxCVQX4jYWizV9X3JXt5y9LNHUHpxcvz484UdKqYs9JUCQKa32zBAH75mrBh4vjdPzhZNVV6BB",
  "key30": "4vDjq7pjp1ivKCMTUQvvJsKVN7V1N9ANGBWP5cnxhnUzyt3Sn9MYU3EUKH54JrmcXKXCTyDZkP25akoBrJGPsYsK",
  "key31": "4ecPyXURHkzHmHPvNTxZDmE7aZmJRwngy5ELLC2PLaWGomFtGcEx8nGUVBm5CX7bTFr4NTpW2TTQXFgKB24rnn9z",
  "key32": "4mMsXtik7mvb3uRtGvyMKpqHYdY1qkbdizvrH9u316rtTohrjc2g3RwaCjKftm6uTqHRwr72fzhwPd1mYtvuLsdp",
  "key33": "ic6NuBafoFTMKjQ9Ao4PVea4hHhjpfEZMbfecZBEvADPC3DoVA4a9hqHxFELXwzmyQqQbLxfkqq8bCfxH57xUC4",
  "key34": "uycArZSQSqcJdhHQqc9rQFSkVpc8ZDo8fD1q1gBAnMiYPEVTiuLUW56oiBa5k9oneey51RWhupCpinZiMFPbQWy",
  "key35": "2hc9qNDh3UujNmtCqZscJ3xbjiRFb5MRvxbwJmkfykV9NkiDmxbAMxu5tP3jfvB6ghqZtnXzwpcMiZ3DWbZTHCSe",
  "key36": "3JK7ePvuqtjBCxR5eHqRxtz92Zgx1tU6kFGjAokey5r2FeGJZbHtU5ftBCn1FktXHC7GYBxycYWwgHjb9zUKCMD8",
  "key37": "5deisD2DyhQLriQ9seco5CAH1PPGaSEpE5nQw4Mpisto4944CTzg8fJgNvEocKMfWyD7ao561Y9c3JYVePfwh3QS"
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
