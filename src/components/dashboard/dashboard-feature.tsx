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
    "5ZDW2x9SiZB9x6qy2Y8UXw8QMrTGicpXhg8c2KJNxvLurv9na64q4h4dwv57Q8DMG3pKu4w7aTVS7eVeXQ7bpekf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fumZkbUEZ2XMiQxVCnWwJhbLxmfdp85jBuFEj8uTBcHPggXMwTLciCnUd6QrnaW5zmjF47QmyjJN7X1c4iz6jZw",
  "key1": "57BykLeQourSF4fp77HegXrgBHe1Ny5FxJYHRLbZhvSvU3VtByvHrLP7bv2bQWmU4JgShWu3vZqpNLJvv8NYWffx",
  "key2": "5rwnZXdRZ4v8e7jYzdjn5L6fwTea9JX5PQ2i2q7XpYGbS2sXbVt5TH3sKEHCqyWW3hq37SPw8fxy1axrSVW8kPJT",
  "key3": "379urNTQAftWLsNMg2sHQaskTSaSm7ZrMgrenVG2S7Qh3WiVzeEM6kxhQjAQCjaW2on3gCLzrbwNjbSxNBXygth9",
  "key4": "5obKWPw5HiDaR17YDy2NHofPVKTj2hskFDJTVbJe5J2iDvR2g8ZbBzDLi3JY2SN5ETmZoaALkihJgsevn6kiNreP",
  "key5": "HHF9af3Ck5DTJ7cTWnKPmgD4rFemifumTdsGrzWNTWhrvbght9sTA8aMWeygKHd9RqySzVwymvyb2xAfzK6LoJf",
  "key6": "5THd6xxSWSL1CdRnrWJEnCNeHxWkC4H5o49Z1jjyE6hKbMT1cXoyDKQhpfG192P1Ezcm9wL8geCXE6mvhspHLsoA",
  "key7": "3ngr2iVuEC8GLE9KY7ArakZJtF7SFjDWSFDfmayhXbe1DbSA5EwEfy9dqnMQLmsq3PXSDnHqwR4YvMY8UoVGjffy",
  "key8": "2Nvrt5caqTKZPyNtLNKAtwNv93HoqG6RThEUzgjRekw6v4bzEhn9gWjSpKH7mS3Eb8L7kVjwDg7qWd4DaqsZwQvq",
  "key9": "4RMAkApSdxq66NasCZhPEWKSLUe5xoNiwBTg3eRYR2H3rC7R31qjGakhcdHG619Ya195a5otGsBey2PPxbaTwB3",
  "key10": "5VBxfftsfN767tpUSE3KbihqnYJL7LF788sTspFRfwPPcUGHopwxMRCUvGnS2ssL5JxqaPcfFr8nX1ENcLphrYdX",
  "key11": "3RhKn2tjUmvBfbzmCu814HDqgSRdQTkEgFzX5F5wXo33hZaHRxDtaudmwKx7BWTgZ4MqeyzxYrV8vGS997cjJ2Q5",
  "key12": "42VEY3GbFouGVf8sAmzy4zMwAhyfiepULB8T5EsbnuM1onhWZ99C7cMZyVHq8t4Xo8tC5u6idPG95yJo1mS5qw5h",
  "key13": "3UM3bphiV4zxpX5yqy8XpQk6rK5RBR4BaiJHpm1soEyCEu7ALVUiXJ4uoNfaXNrmBLqFq1Jv4covtwqmrS1eNv3j",
  "key14": "5fUZZJsTU1DyGR11qTFJPbHRyAx3Fi8QqYwk4jFJiQUVY3d3ikraXNnPeYyWeEXaWLXveV8zNhk7DTBpnoeBL9YS",
  "key15": "4yA5xdqvkQQgGzoHNaBWQeNf723UBacVqbsa53xUYn3NfCpQrxuJhR1t9Bmrr8XWLoFSgUAa3T8dkkhgVpRabLKZ",
  "key16": "2Kq78yEJFAftrb6wq9NaokBMen9xFBaMgNRZTQjSKBEy2JZzN88CGUZWYbhXhgMjzqsjy8mgyQ8fHxLn8UthrPbV",
  "key17": "3D5TUT9vpuQX74pp9tAjmaNvzzkmS8UTcEkVirwd4JSjRccuFZzGKYhZk1YHzeHbmsk52YaG4DUwyQSkH4YjhgJy",
  "key18": "49nsZkAuZwDE1h6a8HsWPoyAHxJFDmbm6BUhj6nE3Bj5CLt9NWkvBtNTxmdbkqjLusdYrraAEDxfy1Rck9nfRCk5",
  "key19": "QMgmHNmg1PXaZ7HgK4iow9G3jCJRGCbkmSWp6MNfuiwdJzYdsN8irsFysezEs4vRvWqN4A6V4tmWSytXgKnNt2N",
  "key20": "2wM84zVtuLeXwgLUjSCJ38Uw6PTpkTMzYG5rdoRYL4E8v4dXCHPzhQ9kjE9Hq9c4JazSiyqfHaaQCUy6RBnACYSA",
  "key21": "4maVZhw3tvn8hkDWkEFBZwpQLEPLay6anQyhmywPRVEdTuevi2Kppr7XVof3HzwBKVRsBtD2BbCkinTYyGgrox2z",
  "key22": "3T98xd7jaspbodfakkYWJooHV56tGBHndGaT2D6h4xwsYe8Kdb5ska19SwWwrNn8GKUhNYtVoybVYxyTzR6DveZP",
  "key23": "3wYim5dbMx1yjvyzSu7bCAmRVeF5iKnqmqVDWhN6X1ptWc2iKPkoihLFKNB2jSCoA8WF9K5Vj72NMGUvHcN4J4QP",
  "key24": "4vJcKQ5qRDKt2bBRyTo3wmRbZC3p4LnkmiRD5Rvq94CKc4bAYdeyCkDzFjor3Rf1uttTqrj9Fr2PXCcJZgRPXir3",
  "key25": "3hLVPFhR2Jwa1rKZnCtufaDBs3i63CzhUeFXvsCoMR9oWGK8TTnozzS4YAuhbFx1bNi8KGZ7DX4EdVUwjJ1Ea9Uz",
  "key26": "24Hzdzyb9GEc15AucSc3e8UUPCAT9WPNXRXQyzusJ7XWqp2eYmQpMafzoBcgLULLouSCx1bDxiQm9GQRfAPyeTAq",
  "key27": "oKx1DRgeCydH7jTGa8aa714qvQyKdkt4BXnMdwCdPRZXpkRUPx82dCLQ5aaASgRuELU8gHErju4roGKmaSZAzBc",
  "key28": "5c6hQEHBWfTzN7dnRSnoBCWnTzhZw6j5qtY9KL1XMsdfA4fGG1go7r1R8ExBiLKdE2wJKAmpKhAi6fCCiYdtArSW",
  "key29": "2CiXF5chUJRwLwM8rxtfCmhGxWHoDPrAxNKfWMG71z59Thv7VW9vEmtG4SM7KCzvpC8sAt5ckewwARvBs6sjhiRp",
  "key30": "2prmPq6zinnvQFCQJYFKDStLwTeToQziF87W94eKZgKETntynEp9VDvfd5tZMjbtrVtsqfs6iSd2vnXhuBNwoEfx",
  "key31": "3D1NhN2mmKB8B2t5zJ2digydVoAfTXnZNaT4C5p5ruw9fuXvvmXgeGV39cTg7CTAFnADSTCXHstAUgSfVrw9Vvef",
  "key32": "UdZLcjYSSQAjZ4kUKHEutWWckFmDxbj6Pz2zcRCybS1cS41Ng8qeNttR6N2B7njRxEHeE2hbafednUQbETKxFzU",
  "key33": "CQqKsC4eEUVxkvSTDQNvC2vuqrzqMk4QEtgU5b9cxbUPWGHojvQXhroGGwPVfLmtWGE8BUxaggzbSk9k95nvuDp",
  "key34": "3v6nVV9BLSBvdsmhmzRTgvwfUA7Sfj6bEqTinsvLfZxTmwU8rXrV8QKRzT6XAUYBjhk2miGTikWkAvMNJi7ooSQz",
  "key35": "5jf5sBG5Qspkd7p6tswZJyUkW6QshqgfwEmjpqxwh4CCsP8GmnyXsDuDGGXiFyaM8Rhbbe2bWopKgpQYUAxLued4",
  "key36": "QDTMeytfzXwR6JATKLpexEYFmERHhG4r1PSM6inHFgbVU9bD28KUKFfZuZQdfZ55YkAgcK1L4kL7nmb1fQgrXoN",
  "key37": "2EPNTmqyxDA5BsSdSpyDsascuLBZ4oHp1RAdoWGouBoMumg2gs4RnToEyBkghEXKLCmXbGPzUkTxb4a4pE1TRV9h",
  "key38": "3GjopPDyXfiZdUT9mSo6oabk2iSKsyxUaXFTaPyXXsn1rE4cnXGVwQGtdyn6BXLXDv89EqUJbzDoaXLAdmaZpfkt",
  "key39": "2sbjCJogGPTsQXTnn8TtsdtBJ489A5RFWio189KdyyHCtatDysnPMYSGMKz2TJj96axWUjX3oyJNyiiym5UsMUQJ",
  "key40": "3ehctc29AHwSxhXaKDd1fxCrFcRb5yWaC9Ly52FLRP5tXuTxecsyUihbVazFJSfgKkPuxGsPKf3ZTPLytsbvgTK7",
  "key41": "2W2BX4MYLVhK828VJ7onmkaCv9fQQDtnFDcJkgkBJppx6TTLpg7T7RBPHU6HcrxmekFXQCWns1Ao6g8dXrcskvVy",
  "key42": "4BYbnQMLEwfsd9JStrUzKsCDWhbkt9tJbjBWKkTcigyQrVNbCDb1E6Tos88MsMsPecWEHwU3piNsU5qbjVK6iZ6d",
  "key43": "5p1gzrZMhrbKLYD41gq6nxknRCZ9mb1xw2k8EW6uZ9na2hg5oaTGXp8KAgPXanV7UVVZtsBusTo9ZAEqTxpSZt3s",
  "key44": "3iyfxM1Tq4fcTn7yDfxNkBMGMTWGEqdzoV4SgqCetNdhXMMNT2k2gh6SadAEfhhFRYMqTQBwscVEPW4gX5CnD5kP",
  "key45": "3mPQcydvATV7MMFYcjNS6gcvt8pe8V8sRLNPNbcceYxZ2wBhfapbZJU8D6i4W1Pbfkdswu6c7MEViodvnBn9mz1v",
  "key46": "3Bgf5GR78hHZcY9cujmEXP22dUvBkMFMZ7h4ijqevEeUn9CF9GTzxW4oYAfzhJcPCqS4FNNBjiUzs8HCC6ncU7ii"
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
