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
    "4BZPvZ3cLXUQQAVymuSt5iqg8oNfrJSj1kGR6griJB5pfjiYL7RMvuXYj2yJWkq4PKkexZ9oNZpGPF7TW6YLb9JQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R3nGXKuVpVGjxtx1pspMbiAhLGkCWyAQURmtckwzgqaYvzA5rewqdgyYpUNGhbKH4FT9cxpdjDZGXcR4G4sjW2b",
  "key1": "5LW31ycmZCHKRUAM7UYjCPgMYfFofqV9wc5db9TNgsV5fAAVZmz6TKAQosNP17VEGKscEXrwCUCsmtfJUcgYuRsz",
  "key2": "57TZ5nCMjDegiQq3z7WmWdYmTGQu2XsvgrGZKtHvz1rXTW73bY8vjr3JqEvy3SgKLWjcvRoTDsJP5TPnNMnz5k49",
  "key3": "5p4Fjo1qLh7cuTY9kMGhN2HNN16x7qVruqPK18VSo6JTsT9vuYm1MrH7Tcdg4iFtDvuat5z3hpckUAxtZgMuXPkF",
  "key4": "66MVNjGBGRo67m31H7KWjPYpYq7Ef4fQZFDxJ1FmZcqJJ4it2zqAtHAdmkaW693VnPgp1TEKzijZazV55gkRkM41",
  "key5": "aK1eQhwVmvhvdvbJbVcSLZ4KMDwnjq9AVfCQNyhSG5GWCajFWxfuXJAT6dbpDqwq94DFBF5vNdUosTN6L6eNEXq",
  "key6": "jfwJhJpNzHYAupyF9NPE6CJ59A7bvyeVgi62xaV2cYusGrjKp7B9NcYB23zoDxPRpM6DufmgXN2QwRkqeBsrftp",
  "key7": "2EDjThuBe7f3BxqD228iFLVvoJY3AY6jncPdyTCTyLaAaVKMD33c4KtgZpuBgkrGSdMVj4fquY3DU2kmXHG1tFvm",
  "key8": "5MTt6FaHP34xqFEN9jrwXNPe2ZWb7ikzrnSDVqexajDwibkYai3UHDj8PyzPetbxW3y1rYujJ5bUb3g9nHkHXRB7",
  "key9": "3wUNmRa3AY4yAT7kAnHmRbMHRoRQ6Hgp92suMwuEvNVeoandm7gf5FtmjM7qFZi3q3x7X2PWnpeGQ961XZvxVxS7",
  "key10": "4j7J7H9e6PuR5AJRNaU3mzEpNa63qQFMMxJKrPVjtAJrGSRRZrpnb2UtwcLZfxU5nWtHNzSYwiW8udSpcx7xZ8ae",
  "key11": "mkjFai1vUFzRrnspxH5ym1rkBTqBTQtStC6irCae4gAJPAxYQMuFBvx9aMaTiEzMm8RkR5MQUFuc8MRkkL9eUVP",
  "key12": "64Fd4AEmuNJPV4y77RW4k7z9H1JtPfy5fwFDeYPZ8B7smriqycEvsVbZHumrLSiR5o9RocBKEaAqwyEZL47QDeKq",
  "key13": "4fbTkH9XYh5ZdAzQd7exMTTajVtJNVaCA7yB8g8NZYjhCEqHXzhKCdWfMYJCSbVU6BwsDJgtF4FQygyn1bnZCzjZ",
  "key14": "4VsNii2LH6vXVfemwM58nQCb7A9piVzdPri2YDSUd4iwNzUFjNewrtsDfjUQB585Z8JHcfrh8W3M4GrS9M1Yff8t",
  "key15": "3j3Qp5kMqgi2t4c7rGu6gRdg6YLQLCTxDXRVhAKSRsH6JR4Q6NqUuNBQuhQpQmaYWeyj2cgYMyUUyuesMs1mgwCR",
  "key16": "2zL9sgPk9XENaiPx8QCSHKSwwAk2JdqdxdF9623NNK3FcRtaJiCwr879n6tjE2zEExkpESorni1Buba9mD6Pec6r",
  "key17": "43DTDSh915RsYhFUibKmJBLF8epY9kdMjcdNM9rwAGdNEDuH6A37ZAw12n14x4AavTxzt4crct4kbw4xbyMJuY4H",
  "key18": "2ggC586TV6UFe7XnQxQVFnVHS3iHp1j4m2LRoPxHZBYz9vVJcRzaQDXXYwDqqzRdHykuMy1ZzYrkUc1r571myX1S",
  "key19": "2sebV6mWhsQTAMkoXJqVpnp1V1XdcWKermTL8EW8JcZfxd7z9jnmisCKTbaLWTN7yaPtVVmTTmrYF8S7vHWhkHYz",
  "key20": "YbYimkgeThryTYjjTb4nKpVbCa63L7hq4Re3rrXkjCqGdLyMThR6TmEj1atPLVhzCdT3CQTE2GjkfXLBXrmnyFa",
  "key21": "4QFqMuFmaG7RBLERFSpqYSMEpDWfBn5Gpe7Xrwet2ihzUsYYjFv2siD44WzRxkhB2yvuokdgjZim6NntP3Hyn2XN",
  "key22": "NyYnBCwxG4KSp3fdgfWepWMVboPfo2khnqHhFfPcqvAUbzEyvUrY3LYZagpCLFWrZ9Yzr9nN6o1XCvaXRKWtRtY",
  "key23": "VhARiED7ThZJBGMY1ttB9nZPT4XCSmuW8modngRhzEVBWE64Tx6H9PML3kP2URnigD4Ls3dH2zGtRjKUeQJxSva",
  "key24": "2faXLeGVUc57rybrLKEoV5M3agNxvehgLy5rSTFqyebnoBSD6Hc79aUdeknyPhknX3jDULLxNjQ8sNbznBDx1j1K",
  "key25": "2ahAgyuAUuYRGZKQrptificeVEgDz7zSzHdVGW7Se3rXNsnRK4Mbu3GMEcAFT46FUY7E8ZCgFWAVaT2NLHjJxH5S",
  "key26": "5RVGdxHbyVB1sZNmB888txkRnAu78QitQNWTYGH8d5CMiDoNpyLi16BVrjrmJz4VXwA9ExRGvGCdnVW4drwdc8E4",
  "key27": "oJXLrUDVyRdVAg6XjQLNuUwm3fvpkfWMpNPLhTEnkzzgs2KAxitppLTekg8AB8721W5GdQXvo9z5Qdt8gEyRq1P",
  "key28": "2XF5am5HX1abWSStAJ6xLVwnE74DxiwfgMLCKwb7LyFHDqD4Uu54E31ZYGjeojfe8ydXk7iL54pScYuZEPp7UsZR",
  "key29": "5TER8m6J94rmWsDEZyxqvZ5ruhYjvou2uvZ8qJqv82AZQBg1ZoGZ5kBi276s6Yzpe67VxgoztimVWmPiKGBLWPCo",
  "key30": "3BM4aJT44Qk3X1PJFJKf3SMAupFSRv7nCEc4b9CpeD2Fdy1McTadKKBg4VBTanWSdmqLP5zStMTwbFFS79DhMS2f",
  "key31": "5S9VNMpa9xnEakLnwo9v1kgVNeSWBg2SsM9urrzAfHzSG9BfHAfC59TKZXj8AWs8npgBW3Hq9KWASMLqf4uVamqa",
  "key32": "5DmCCio6q6p9rjH46bdc9n3bHmW7n5F8iGNSELX9abZCE5Sfg4C5htCaPCVK1sTVeAxtXfibQ6SmAV9vrtEAsQbX",
  "key33": "2b4HZ927uFBiLwd5NBiyCe7vkBGaac4eodPEnHwHzFR4A8RV9wwgcJzwGsSR9iqyaCZGA7NyZ7RGRofQDcAZGAmV",
  "key34": "4mbbWKKLj2nidxpiSb6W8AqDXsmUN3nJgDkSdBvNHb3TQ2feh7oJRrCmgVopnSGmUYY8GXGgBk1NkiT58jW2swDa",
  "key35": "2CsiTaHTkHHUP2Uh41sMt46X8Vi2KF8fsiTBhbU1CyLPtXgpjHyNjNEwCMFC8hKjVKxNqhb9o7M8UEexGzhxGKy5",
  "key36": "43ZV1L1gUxTDpwHuwVpemJJrKdCZXxxVv8PUUkRAD2PMeAQ2rE34z4k8WYrqWkFx5Hk7rU7zQTUYrghx3h52wuYN",
  "key37": "4v699zUw7A7T4in2Mib9xBRBttnoVoJa15cyPAcYZFRF2ZSyqpg2kLTxkSA9ifyKK6yRSH8F4Xqn78wzBucGQbKx",
  "key38": "3F1kALxQRYFd93Q99Kb4L9WEQKfyBqwjoGrPbXakjUgBReuxtHtZJWNYwpxASiWQyJBNd6YSPxzVszrzpzJfay6T",
  "key39": "44qpPYVyPL6WF1BCCza2ACxzCNP2Mu1PQAnDGhbbdrg9VUysVz4fSECwMekYSryyuCJR4ZmMDse7ozAxXSM4on1m",
  "key40": "UV3Jn2LZbnBPMaryZ6YmzsMm82DSUyMGUrB5vy6HtktGZya1YGX2CcX2YbSARYgrmAxPHGk4X4JZbyq7JJ1Kedd",
  "key41": "42411W6akyH8i8d2oCco6Ehsx66kg2bE7sLHLPfR7Q8ea3XTXH7Efni1JULF3bhhtcomMNimgSBYyz7FKwHKvMeo",
  "key42": "3tur5sMdKPsQpDibAzRN3HRy2swif4AyG3S4V4FmtKGVzAWk8mW8XKsmZWbMVhRsvXVoXRkLDXC2Cyud7bof5sub",
  "key43": "PpodbtFcRXqN6DRvt7fBQGKcCYuk8ojjz48RPFzewGh8dUnvgYv2nCmnUX3wY56n7enppUYtbAKeWKg1dqFYqzD",
  "key44": "5iYNoqkUN4W4KCzaA1ukbPdQsAV8C2qj15xPXSoiQoUgF2RJ4D5hHEo9hqNWt1QL8a13d7GSpqC95Bpc1PPEQdt2",
  "key45": "2xJn4tbWdGrqXBN9EV3JizZ7ETfuCZ2PCDcmAZRmi2M1rTT15sxyEZ9Wc7LVAkrs7KMsvsbymjPWVUnDvWazbDJH",
  "key46": "5fLeg7Kqxd9W5oCMpdz3PqkLEbQikzamN5FT6Nwd1rV8U1FGXvreq5mnXE9PCqiHsu1MoSBrzQkRsYJy3KN2H8f7",
  "key47": "2Czve4HDEMiDhpJNjWLF2tqSdMArHgJxHTZByYSgFxcqprvN7NKfVeEYEKwAknGXhmVqYNZEJWhbjXspXuDfF9NY",
  "key48": "5FF4GrLTHGkkkBAreTTm5D4H9jVqxnRvsDAfE7MeZJXStLU1KBPSdxLzjxqSRiygrDQAszEEK4MJkawmqC9DocS2",
  "key49": "4e7yAWgdinCZMX5nEzvuZSrgqTBo1NoaecLWxTsgJ6PBSaZ39cXPLnVmzqcNwktUBmA3qjWxsBD6TkgfBcXMxJDA"
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
