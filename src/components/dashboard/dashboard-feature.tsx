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
    "dm6DniDJjo9WdSmD1rhXxGU2xyRrwV2Jk9HCBkMUVUnuDeYxT1dFzkWEm7efQfou2G3NFVe3hyntpi9d72ydNn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KytHtxrgdGM479fGtvm7yRVL6coCsLvV3gtHVSNEt5DH9Mwb2rjcc2Fo8TEqp7pX6aSMjXBUE8DpM3UwDndQBUT",
  "key1": "gdfLkJxjD6sYL49Cz32jwVW8gL7X9TDFV8qgk5KKPam1FNhxtX2Mt2NCLGhbSnCAUujNUZvMQfBtKoyPqTKKSeR",
  "key2": "2uNEN7mVzyDaPFRFH9g6dQ7er44utCQ8zCf1Qa3iy66m4um2HyUcaoHm7vXNJuZet4abqPje3aWFT3qw8xUpEmSC",
  "key3": "3S8orF63w738YqJJJJTDenjUSvjwSXfqPTCx6eAj38mQEudousduZSvKBahYzx5PxPQFAdYizL1stdHdDEaBgEj9",
  "key4": "5YGNmohNMyQ3TS9bUoMfvaByiv7Rz869xNKA8UQGVJJRonZwWJvugc3VreDG2R8D9MciyF6PEUgqJHkJxKCB42VS",
  "key5": "VoVLc6rGF8wBzfkhYAzSsUPC1o2EYa2KrbrnFgV6bVnfFMcjRorU7wxV761JKpBjcbMHQ7gVG7tzzE49BtfXgZZ",
  "key6": "3ypsLqxBnJEozcRGKesdVgzjFSahz7F9Ct8xqGa7MHG4F1N24L7EjianE5F4t4G8NzonaorUWsbB4LMVXV4b3L32",
  "key7": "3bndzWQ8d4KYAqo2gZV6oeqwcZ6U5Yhwxm7TyfoBhjVPT4Fqe8TiZQmwFjKPmMweg3qiEQ4dF76BMbSMbn4NzJCh",
  "key8": "5NTQsV25KKFLM3H7LBfVn6LxhqWkC4cAVCL7fYarsnQPLeFAbbCTqkCz6HkPXm9HidZpeRgssy48P1Qkug7EEfv3",
  "key9": "58nvYuvyAqiQb5jkeU618HzP5rYuwHcK7NcKQoA4k6rhrBqs57o3ezMc6DcAe2Grm3AF9koCJRgNhBHVs2AChsEy",
  "key10": "F1zuCGCYJcPTJGhXJAKcCmUcdTdt9JGV8VisCwMjyudghPQPgVkXJbTfy4bo2ud4kHfePJy82spCxukbMeJE24m",
  "key11": "2Z3uf9cKzivyCbZ9Nj89qSuGRpbQD3Tp6H2GzVB4x4wHGC5BdxNN4Zg1fDfS6gEhma4RsedSyhGnMTY37VeHNvUo",
  "key12": "5xj1cTixr23A3xgMfviY9sWr1HBYDFwYJZxWL5x649EwAoDifdnLoQ547kL2gzm37jnQch3Ep4jQo26pb4yj3vwZ",
  "key13": "2XrRzves4adXcvBsyv3somLXDLaW9kE1UfKDuSMUzqukyTL3ZTh9WrdRuf8Cin2TWWzf42FgfL11vuFqVBHMvxAf",
  "key14": "4wFbyGXXx5Ur78x3Dq9f92m4u1mbHiGj8LNm7tkpobVDpixahPvsT53dKLZMhKnG1oHfdrXZWjLxtG2p7av6stA1",
  "key15": "QowizdrR2vyrTU9Ef6JaBidZTrNPjUTw87kHwkDaCqneWahPuqTtGCtn2XD9ETshUA93NMFpyAJLamm5q4eiLfr",
  "key16": "52CrpXd5yBA39EKiZyEbzXCJW9et9JfPUuVuhysNgJLq7xdFpR7n5aP9bBVwFkQDX2ZYkQ6mD34m51igm2NoELfc",
  "key17": "6489ADLEmPuKisXeitdGtR12nSc7PKLN1gTBDXsFCSEAUDc5khyAd8cK9UWbGXRabhe4Ndev3H3ur64oGwYJR1tT",
  "key18": "XdjgPe1tpoDn844nJcohS7EwqD6GLgrmjUFA1GxMxFyJnKttdPk7XXzqLDHMXg5Uqt4KcBXargJEZgyUm3wWatE",
  "key19": "2mpFGszq2mMfK8bty6yfiZVhuWHzBiZR1aQdQC7X2dp79vo5bWRFAXfgkR4kUQA4ma1BaSJTYtRY5VpXrF1LgdfQ",
  "key20": "48Dr5PF7rbE6Zf73DGoekt88mKgc2xwTpwwWrQM9TQAG8pJEjbbsSp4axihwzkNcB4EjfXbHgtPsWcxXmA5uK361",
  "key21": "bXabHYacaHKpu1eNgPVoePyvgQhQ7PgZgdfjWfGHsHcnwbKVziFBcErJHtU9u9deZ52kKn7uQMNa7F7bqZkBnYR",
  "key22": "H5t7vvR6e843NAASrw2RbdijRv1sCtbiPDBguScwkCzjigRs1tF3Ep5AxizyqYbGN4c2FSC6bdXtbNjK2e7MjxU",
  "key23": "59zp4ABrAZwWgpnSFt51jkExY7Kc4cKzXjCJwjQrn1AeKB3amktYLs7dE8wr5Q57YEv6sq4RD2WEW1aGYu9VVmfT",
  "key24": "3o2czUw8kY7sSU2j6aytfsv4bP7ucaQR1wUkdiaLEuSL1WscMd8cvCjApw1NYErYWATRtJPd4m1t821fiZ1aMftm",
  "key25": "455UM2gpdq9ryv3u2HQWiVKKnncPZtnWQF76VP68aGWpbNxQy2AVjjkJuzmohrNvSKj31xizKez5D4bcM5F8Mo1K",
  "key26": "mrsvA5FFGKYkM9weBdWY8WDWdbo7deYxh9N9qBqBVmgvXXGRPiZQUbC7n8zNLBCxmbjHTPQfomRRTGmF271ti86",
  "key27": "5XQs3dtCyMiXJE1A6WPqwsvruoUjymVFfkYM59xWv4CZmHow2U529KbXn4vQX5ya1gkuirfgLWvuUw6DgNoh6Aio",
  "key28": "4XWNddLg7tPza3i6CWSAj7gDE17t5d5Zby8jhkkJSMRAmCwdP5VbSrWLXzN2MSLyCzLrUixAX94bSSuyxubaZTDY",
  "key29": "22KxW9gU5QLA7jtoH7NRT47des8K3EiTMhCsCitfmUgNfiAXXNEkeVfHdYcbiFhP7C95BdZGqVfyW1zdGuAFrsSU",
  "key30": "61r1WN4dvZH954J8pT1cjD2se5UqtzUauybCjR2HgPTeXiynrGtCfsrmCymCHEE7rMojBZyLwsaWsyCGmdfiLCDE",
  "key31": "3v7CdACG3omufGLMzwB3Qfmj3LzdyZ5WVRbtznxJjd3hsjz7tFdwpTQNP9488yDmTCGGnNpLXWnizvpjz7rFmwj4",
  "key32": "45WbhHR4ABn8WJVyKbmtYV3PRg8wXX9BPveCbSPTfizTwEhAN55BAT24tgqrCFN74zY1wPmFpjwLiGUNQk2UQs4C",
  "key33": "3QtZ8bkABaGGPd5ovTEcUEKLbmvWTT3fd4Wqfq7wjidCDFrrDb3UvJJMSuDByLqY614xKCra8GmhfdJkfALouy1h",
  "key34": "3YjjuFjaTeXGTaX5oSxPXDyX9DomLc3bPbZsENBVUqv1LTmdgSAwMQhaQpw2omaS5aL3Jiaro4aQgrnRPcbpJma4",
  "key35": "4Br7rfeuTaEn2LQ6Sgv83ZNUEFDBRce4EHFWoJzcn3MG1aNQtMoqXUzgYgU3wAAY2cAku6hABsU3Szy2McFowGuj",
  "key36": "2gzoYVtmPdUP8GMiLrkmsWQxRyZgw6G436kZ7nrrNTBA1Ykzg2iJa1QvYJyXmcQobXVuvjrN3ZJREJAoEAER6JdF",
  "key37": "UC8yrBrRPtxVNaQKhjMGdsWoXYzPtZYdeCzVtMALx8nxoHz5Y1f5KaKAvk3qQVGAHHVN5zehmyosy267VRBVwDb",
  "key38": "2FTgPGgaYxDKHQY8XayS7n6xBoBRfbgLzqrymhfNd7foogtWPWQtoi9DaT3zqAPVR3rFfsa3bYCsVbPpqTjGP2cA",
  "key39": "2ocPmJPsgVkqAVSSWUQQNPmo4nua3m6PF6HSJ6opU2vZA82Dn15mRfsztb9uvUjeDLz63uexveGiUJBwMKjrVcaV",
  "key40": "2YKKF95ngnMCNJ1C9jymZXNgMqn8YbTFjmFbAxxPMs2Z1j8kkBe4cU2wh5Kwi5HThEzQkMTXaSsx3diUCKWsp8TF",
  "key41": "HJDgtjRuJ1tGfMmpBZqyD8up4AiGFKa2RKRwe1cmkn5GgVCFHgbbMbWyNhUT6ZC3cskRvK4gNpNMn1bPkKNuahK",
  "key42": "2LPtnt7u12RyYpY5LtnoT8sqraY9foyrA4N4pzRCdWa5Chezu6EzTk51SzzmNQ4ERQnjveCPmU4aWpw49D28ipyY",
  "key43": "4axWFU5ryheGzMWHDyvuamAFgqbiEf6wrGGVJtSP4dJN8SYus4RHaR732oHGouh94PTYt2rbevgeSrQNn6VKGDTJ",
  "key44": "2dNMCK6xxryptbwgNmrk1Ri7f5qqp5hEstmHs5fGs75bSr7c6E5ZVPLMcJb6cfmQ2Bf31LuTUxgszHjAShpqBGYx",
  "key45": "2im7ptBYhshpCGwEnHLQNc2E9oceXK4zfCProLvnYqqCsEWQnnGkVDLefMpvWPLbUYwuFBzCrSfmsk5Asy9zS3YK",
  "key46": "2za6zrqLfnczni8JHJeRwyBND4vuA7xLH6CvTe5U5UNUDUXLygWQ3khqdxBWsWw2yefVXc8vdcC4tDHSDQZhiCAM",
  "key47": "5mmHB38gKYBsLzGmnT9Z2AMPiZw2V7rrfbHmd6DJaNRr8hTNkEHyr7rsxyv7A9XLqf8ie3T7zfeGkMzJvRp2uVud",
  "key48": "34XbEDGq2edLqeGr3ABu7thxrrmQZcgQ5ZyscSYmFhBTGfiW4R5P5ncS1u7MF2FVKqinXPoTAcXrY5vRH7pfzceC"
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
