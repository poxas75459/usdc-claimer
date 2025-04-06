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
    "5X8EZBW9VG58MYEJG2KjK97GErd4BRLMCp4ZHBTGsswJWYSVvjpzphsVh4jL6JyUEb6krRpjvTmwwhX92RRDGh7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RW3hWjraw5HnJWAhtEgbM56R9YYHGKwz98tQLkQVzdYxG2ZPWeEm7kME2xrArJozYSYo1MDzpp3HTTowJD5oj3d",
  "key1": "66aYgAvQrXc7HEdyNunUx5gF427WiGA5dApihZ7E1X2yp9cSYazt8X5MWVDyS396SZCj8pWY3gP87sQtiBHyFczv",
  "key2": "NoiFjD8NPQChjV23LWJtRpMhx6jGnuiVqin5HgkKuswK5tyMghAToNN6yCANckoVgwnWXYqTVuojJSfNK7gLQMG",
  "key3": "49LTbGpKorFqoyyX6jFRSzxYV4Q6j1vF249h8hJAmAFQRjxuENfX7So3k95nXoBiPFcXcjPPg7Xtp3hyJgH2BjFC",
  "key4": "2hAp56BGicgyP93oa6r6BNxkFznP8G1hsjs3VWiAR16U1Ap9Fe5UrLsfMuWWsorXFjAhMu8n6zwXpa4zRyGoDCG2",
  "key5": "2UvNgkBb8Z71NX5UhRdWSrx3Rs3y4VBd33wyZFjfu7ENFCrN5c24JqV8VvY2aMy6ByyTKaRGU5SWY5HC9jLqg3QD",
  "key6": "3oZUf1xX2sV9KnU2wnR11saATSJwchNVGoqDnKuRSJ1sGpredp7g41QVk215qqPPPzbAE87RgT7txb4iyAzDhcJU",
  "key7": "fzHShMqCijG6zNjK4Pun4gkQZWimsRiVdYysr3aCMPf7h89hBuLZCHgcgFHGCmeuV1ELZRwVF2zdxGJj4cga6i6",
  "key8": "2ZCLm2JuAJRhnact1ynzJwUqQup3EpAzPbneuu8As9vfVCw3NhAjknMjGhCpxqJgM77UHquj6tmzMREPqquUR4qQ",
  "key9": "D47aefj23NnVLFZFmbaVmcJBqVj9C4MgtSxrmZaGN9zQBeUqeyZBxse7w8HeWAM7nbVKTFCpTTraBwf8ZjF6BKU",
  "key10": "25x8ympFmQMeRsAyuSq4NKTS6HikrcWuE245jq9BSDkgZnAT8ViFdrpuXTB2ZG4325kECZd3h42Y9EFzCKgjWs8F",
  "key11": "q3EgNz2BP9cEVd3TMYC29YrmiqvAVhoSPmo6efQD2WacGTugfXb3YLBUuJdwBiUGzzNy2tM35UxKcC6X5YqRsgb",
  "key12": "3QKYHaGns26LYyng2ovMAanE3w6oT3quWShD1TD82V5dQBUBrKbYCgGhaXZmBBcWyU1g1WLm8vam3ZNAvmmp9dBH",
  "key13": "3Wwpoegr3QM6W5E9gi6Hry6qWMMsSMxoMwTsz8KsNo4muUN4T1maWB4PWFeBfFKXkwqYAN93tiejMGfwgoHGTr6t",
  "key14": "2hfJjfrxfTrS1GBf3BxqR61GMHykLp3XB84qR4mjs47CEUvrffQqbS5aXyURb9sZs8DbG3Zqxmwez2sVsjF6BdYY",
  "key15": "2a8xnNpaXHeBCQzYBjBg9cPniQaGW4NgQpBKgNea6wtjCYqt17JQYvtiq199Hi3gQx7fCGuKPiBShxSeBojASHz8",
  "key16": "3d76Rz77zyqvbVXvV8JNg3u95fgnBgshW1nkmQhZdKvbLctbgupGJeZVP2NdyjYvYToaVHSrcL5MFv62EVTxQHVA",
  "key17": "4iirJHB2UQneRwrkKUCku79KUDbvseDX12JgTNLqN1CmccasR9RFte2BmDGTPC3zUc7GSQ115wxNNdTQ93LBFDCX",
  "key18": "3t4RNYXiAwEHTEVSpx17LqjXsHXGnTpZPjFGoRYmufDBz16KEzCLu7GPXp3Lw7XN6gvW3zjDnbp3xSbdRQbYDqKm",
  "key19": "xExVSFGYTToVh78z373JW9MdwyzoZQbWhLsuzHz77cLv6xjngCmEZMoMcQxeRDoW78BogeXhPAuCN8r4XWo1MXe",
  "key20": "24FJNAKnJ4MCMAfobG8RSUGNQUfaPZQTgMqrZYZ4FEsaJDZ3siRZStbjR4Pu1Fb5ihC4crJehNNry8DJHfn3iNxa",
  "key21": "2CrLQyurTNUSaD1TGCk1vqyhg4ppn81nP6qo5bk5U1JsYTWLNZ7vbAFr6Gq7HwDpya4dmxuJWb9eh5o7v2xxkMz3",
  "key22": "2AKF1He7kLooC9WZ18PDur8PcesZtRyND84UvHhDWUebqE7aycZU561qc2h8ygnyjssjT1LzErcPPev43t8oeXQM",
  "key23": "3PzT6kyXWsG11aR6BQYhQ5mrz9eDHJ3vdkDL7kF5WKkvYf1uxfskVasXQtZdeL5gjs1rF2qpdZVZp4qeHniMSHvk",
  "key24": "5X6ehfyruis9Bo9VKrqF9SXAMAENeajJG6uBBYhUAWu4mbnL499qgJUtPtLGMpw3vzH9SzoFnQLqoGnUyYxFkWn2",
  "key25": "5JAEzaGXong54WujzQ7bHQhRddiGTBCtivcVXuavNmDtbHpUnnd35aCtBZUEUotSGxWZZ9dukNTojJZxPUwzptCg",
  "key26": "5eTv9iszEKCNJWsFUqbyYKfok1tbMzHiH8HvQzdDjuanZ7FLr1ZiuCUP6pjL6rv8byCjXoypgRYrA9xpsvkTMg4V",
  "key27": "2JakLnWxzbogqz8UucZyPP3x3WsXCcrTeFtS8cTpJ6NjxaUvnyLvBCyYozyTyK92moMi4DFkZRLcSM71YDbDSCqn",
  "key28": "oxwe2qvLW2Z2b4hHptUghD7Sc8K2Umkyj6jG7suWDAsfsB6xrGwXRsf8eaBmsTwhW58j7etbW7DyCByxVnN1vt6"
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
