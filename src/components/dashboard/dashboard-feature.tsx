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
    "2yDMp42czJqwuaphKQNX68t4PqjuqwsKCgbtD2txDK1fkrNow7VM58ZhUdzAhkA6PpZTcbiEMvAsXjm25hmciYiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2itF71Rk81aCQ31jMB2gZtNsQ8FzEcSLHgWoYnoY5iXyRFT8sZb6AXJyV2UnSydfZFfF73ZuCjMTu5QFyzENbrFG",
  "key1": "3Z7fnfMRNfLQ1vLeBMQmCVZoBg8cWh8NdgyG7ziAofA9fj5wwkk9EtD7YjztTQwqHLAM3XzvrDgNFsbQTxCdJMt8",
  "key2": "5WiAzLa1XUpWF8rEqKoFETYM2L5MjTU8hhdVLyBdznAuoiWEceNyDnNfQKKwQB66fmMMcbBocxAvvgMXnmP5MEJv",
  "key3": "65f3fsLkpt5XhMauJHr8KU9kLBtoF3FC1L2LtuYoL2mDTnoSsnuNBBkQmF23NEp3wijhpJojzwmBGoGWM9wEADpP",
  "key4": "3ae5Fxkvk6xZ8AUzXjdQQXjjQXAv6yB2gX26n1YfnM6w2SGWdK1QjxGKDgMqbomuHqUFQQz1PCgnv1VWhQG37khN",
  "key5": "36nzq238TGq9ppPd9f8oy4mQmktFfHDPwNW482iJxdDQ7Xsvfgoo7VhddNj5sK3tvDK4ubAXqc2DwAEFku69vqt9",
  "key6": "i3oQcLpgCSacoEALxi7y4Qf5jmKNnrG3fs1wn19AZj9XffoF92pez1mNrfMuUCqdKkn1YBn77N9cJTmeXzcLxeg",
  "key7": "3HucRzMxzMb78ssotrpLmraYtWGJEr9BGBwfns1vV7jBxo7Yija761TrvSbHnD7UMtUJdeZrqDJSsqV4f3PQYJ3Q",
  "key8": "gnqxUodAtaNsGo6mAek4FSdfYixS68ZGGmzezVLRBxL6kppZqtdfssLvnYUvrFpRYuyFmffAp7gmoehEVC3NEJs",
  "key9": "37CAexqmpH9AMm57G9pE85zUsCHkhfUbLWPvsZK9T2kUXCCwB7swDq1GQ7QuAhGnnwgmjad9oHBYgYcxKTRxr9qx",
  "key10": "cmxg9AJwWxHUFQtPEmnaQRFaRuuF6tm1LZAu6Zi66TVFQ51cjJsbyqUmGK7QJy6ryH9yfm8suQv8RCR3eyJRKxA",
  "key11": "64to6rXbGh7nQbKhVpXJVj88ft2wEzSVXKoJcgVbDEzQwNfEvrnThXUxwBDi8kEu9Vpe6Cpj27mA2bnfaGQVca5R",
  "key12": "4zwRa2Ny2cbjjHjPkxFqVEjKiCNw1bdMPGDTArahhaMEbEnzBNQQ19jN1hBNt7QgV2UpCWwVCrQkkbhz22o9cRrS",
  "key13": "2SSW7ChoZJkrRfiZxxY41PN2jrLeGe5KnLS5bZ4dYNoTM6Stsh3U1DrPn9zYFWgdo7b46ApZyNuQD4GDKHNDfHoh",
  "key14": "hXZYBPBQokK3KbTy9bm3XF8sxaye2k7r15b6XXq9utE4AfCZcvh1sMdLBHbfP8bXE3yCjngSgDr3dVvQxM5qNeB",
  "key15": "ER7sZTdoStL12ZJ6SCRADU6Xqg3roXEiGwMJ4unhZsMyXknf1Krivey4ctJ81r9AKTdRC2b8zZPnheJffjhmUe2",
  "key16": "5DdtfA8d7H7Q3Uykk3xTK9UrYa6Em8mZkW2Fzt12AkNY7KkPvtZa8L7iiE6zEQPT9aAMZp41MdW1YyF5vDx3H9Eo",
  "key17": "3iRTF7TLsxsPEhLabn2uArupY9tV3V2Bc6fbx2F2AZyj5Dj5myUQxS9eF6RZGkSTNWoQSPmeEEFp4ZubhudnqgJR",
  "key18": "2LVAxo63KpTyBxQobTTWdzsKnbBJ9yyewENfu91Usg6ogcJJatkN8ViCHSmqFeAyxxEPdvsry1Y228ZtRExZRCq2",
  "key19": "41sTmZ6N6aePDFGas25wrND4XHnZEnjCGqCkAvqo4yHy3oVeDcN8yr6s8m8r5EqS8GpaTjr8iN7BKdggZHpVApEM",
  "key20": "78JD2NENuX9PnFKM4D13HeCNiqBNeNHhnKhGnGtGUaSixhHeEqgNPkA9EtWidboPdwBkNhqr4J5qxdcW7ggNHp7",
  "key21": "3XzihqVHLHEYHJqdLoDp2eP8axm9wY3VheXYqyLricyzcxAMLQUaBor7GUeREE8or1DEXyqq1ZjLHd3fRheaVBMi",
  "key22": "3Neqsj6jGKAfr5kZTQRpetktxaiaHVpqqchnGNVggbo6J9mZhjrmhmmuAxxcPSxyMWN4AbzQnB7DZDBAw2GP9Fdx",
  "key23": "2gTYUdq1Ae8t3KnrujsiT5Cg2rLcM37LucPSyosFTroMkeuivTzzHHvwpRojcJVHiC27EB14reBP7QbNU86vx23G",
  "key24": "3ZKviqSUBciWp2eLKjs2NMXMZxexMBXUUPp1fauNdHRhQScuSj6PLryfdhidTVMm9rgkvZW813niPv5vnxsmXnVw",
  "key25": "31QTz7o1VhVCdmvp31fswc4oVAN7FsjL79rmfuse9n1vS3Ax8mA6PKuNy1hL5T7mhZhMGKWBcBevhUGHbwFwxq3M",
  "key26": "2CwYVaze6AZwk4wh5f9y8Un8fcbtPp64gZMrdvZxD3n6nAM3TZTUHyDdwQGaJ5BenNTfv6kQF3zHNTUTGXV8k6AY",
  "key27": "cGn5Y1y3Q3hC3ZpQsPL2TNppkvJCer64Yv5KNYUS6jC5w3JEwrB6E9FLtATLZjpWZiT2fhickXE9E8PVNeD7ra2",
  "key28": "22UD4Z6Ngbp2G9oEzaUmYAYPPPwRa9Su7buJ7hCw5JwZ2tm6D3U6Hk5nxRQQPvssXs1oYXbEugui31W8qxjKAk49",
  "key29": "4jLD8TLMtspBYT3tg9MXnyH4mBq7d9DbhcCnuGpdHR8vQkBBbLNCtGysaqXghtcskYUiVQ452qSKqnsNpQAdqws8",
  "key30": "cBHvDzWd5g3NbqtGsvjBQPaxBGauhzU71NKcRUE9VnNYK4sP4HPzNRjypDBugZxXMrNqb8rjFKm5BCBDFc8R5tF",
  "key31": "xEbHM5BFER1KQsePU2gQyPmVJh4JCeuvJL1HNK8ND2yrncxRraxwDMggkxjd5AuL7dj4uY6Sq1Emksk8RFajTMy",
  "key32": "DwzYfHJiLWA6xjTriTGbzxvDcJGohsPujs5GGoyZP2GhceoccAPLTA8EeedWjrPCkZhAiCJGachGrsGX8RKxwQU",
  "key33": "5Vm6zHW1BC41XX8b9Rr9cbmKfDu9D2RBWTXbWS7yg4TJ6GRfD8FmVtJ2PU8fvRbj1khufKjr1mQLUCnSKZhsdnHx",
  "key34": "5H8qWG2Gwott17tceKDBwmekPeGD6iVrFRqKwFfjN8GWgRaE2PriHJfUEfphZEVUgZomZSPhq1ricdrawQAbQfan",
  "key35": "3bLSaCuVW17bXC74NpfcCtKSwietM3VP2hcuDTDvZ3YheMKvksfr1KdSkkbMjrpYX722G5yysqVPsMSLTVVMgx5V",
  "key36": "21sFFbsWBtihDPGxTxTT4c5ZP7MK6d7YfnimVbrD2HUu9nooYSDazuudKxWNDiqZXW13KXEZJZ8fEwDToUFthH6L",
  "key37": "ZrVwZSoyQucSXnsrzhN5VvXvw8ZKmkfnn69eRJSJ65jnjU92cCSe92W5i1uRWW9cdJLEJJa9vaRDWLeAH6PCwb3",
  "key38": "4mCLigRZXKHzqBfRAp3YUjtK4aCbW4w2KEKk68eonodifx2iHr1Ud2XR8wiLSkbiQiW9kApCbpRJBehsaXxDGWuy",
  "key39": "2anj81xT93SrtkedMPiSzswaS6tvXLy57X5czPB9TtS9sNEDq5MREbf7HAyWRJjw4npA1LCzFhdMxLW3PsbE4EbW",
  "key40": "MXQs4uY63AJ9ooWWHepZSVgt2MuTN49yoM4CWsYCD38eXtzB7GCZmrr2q1gaTonc4gzBMnKar83V21QrVmg2W27",
  "key41": "3ANhEMUfVRfD4NBxr6LVecYumvqhrMUSqDMC1jR1WFXd94CSL6Y1c25g3dvy8QF4GTf9uc32qijFkjej1LEJp5H",
  "key42": "3bRxkLBikq1X4hcW8GFvS4RDsDr9uxNDCgVZycWgJBoAQ4ZPSabmAvNPHAt4BdaBQm4BmWggALPLKsiHmoqFf8yP",
  "key43": "57yZiop64xJUYvFU6S3Z32oK3QxfF42tgKKd7S5rvg8CP7BenB2FVpcX1iV9u4cAsoiq7bbiadbixMQ6wBAnKYJU",
  "key44": "4W4NVh7yY9qWmXJFE8YCS8ZR3vB9oRk2BQKfe8JkYZkJRjipsFJDJJ3pnUSKUDF2h6FTQm7bwoX8DvMWN9CnS2Nb",
  "key45": "2NWVQezsbjrvj54i5vDTW5WYoDaD3Ybu6qmhMA1PcT85bvLKFrwC31pdEiwEoRV7jV3hAM8Lp8b9Dqvc9uR2jNHM",
  "key46": "48xGvg6kvz5PAJkvJqJW6XRhWLupZBwFKiobHktj5k54V743tcn2k8T2A3ke7ezp77kKaXTGCegS7dgJSj6iWHWs",
  "key47": "23HgeJ6f8rXTYygsQk2mRbjyszWCZZsmXgajz1qESvXQtaL9AKBggGanMNcoruAUGXkXdWTD6KCZ9spHpaXFKbVG",
  "key48": "9zUW4mBHirGHUQVL245Q4JJ4CeRLowT5vwsXyEdod6uX39k3THVu7MNueWtXo8CNptPYF4rikDG8Hjw6c9WQMaH",
  "key49": "57u1TLXG9geS1zUV9F3pYLW9BwwYjYmz2tjJ16gukem6NoxUSMgEEQ4BFtwZ6LPMYKubmwrGsEHFFqBAUDCEHVs8"
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
