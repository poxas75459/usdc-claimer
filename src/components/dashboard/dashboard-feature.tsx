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
    "4ftDj2SbS9bLdTPZrnH5vp3DEu9xaXBZnc6fN4a7kV2knBsCa7Urhcuj3adou8p7Kg7dR5FW8hTVyZMwG8xK6U3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "12a8TVfcb7StQzJfaWmHzKe9Gs2ZbMMKaNVrJfd7AS6obkEdudxKVTaDshfjvPmto9RgNagdFh1ADFKzDPEFwRg",
  "key1": "2EMXfpwJaKgiyHjdLKjXiVjNVBCg4nFb7XvAZU1dgYn8TPuMk6DnuDSMCnTqgNZJWjFCpvDx5AtADjeMztrsA8jA",
  "key2": "5YJoPeCjg8iD8RgcEfWpAR7Qa3bvH1ce5Fe1AHrBU2kmqSHtQSqXh3iLGJeNaiu2QWehfeDtCv1ftG3D9PGw4AJ",
  "key3": "2QbdQCZYutw7haR9C1q7dHnsJzq8MGp7Cc8M9KEif1kqYd1kuH6EZv8vys52issSLMFWvqSucgfbx2wKhJ3gcbqR",
  "key4": "25qhrnRa8z8y56xvQ5NDHMr2m3G4HM4nrGhmKJsKPQSJRydAFZEv1WAvB3JUtL3qGYZbbvE9AqRoZUNTQgZp7uQS",
  "key5": "5jaEWURszyub7NTjSyS5JTZjQJHkbnYHoCtvuV1CvUqS8n2fDwjm2hpZDCbtuFiSicNsivyMygre5q2jAFnoJkoG",
  "key6": "5dn1rF33RXYvnqZuYXJxufYFVxPVLDxbxFF6pWNT88pc8kTGghsPxkszBQEDpm4TE1AMmydxBX4Cqfa9NF2vutyE",
  "key7": "2rm5hUApUZv4B2n5vrGoUwCEtLTPPt3bNm4cpURTVcLPyLuda1XAAJ7mg3jAHAN2mFn3SyXPtxmp6qxwno56xNd5",
  "key8": "3J4bFFUowZ7MraxHtVp2nGeG7VZFp28c9iVEh2Uz27zg35deaZoCqsdDTMrBarQZTx22twX7KUBUc2qQAjBtDQUh",
  "key9": "3ijbTmcMwvCme5iiusESzyz7qyABoRp9cApSxYmTZ7Gi9jJYDw5WhL7g64gwvTX1CV8MiQRq4cS4N3ESTQAFNugk",
  "key10": "5LAUkFd26GJ4B9yZAsv6jxAuiQqsbgUhiZCJet8qtJpGqPupxxgwxoPwNrzjBQRhyn5TqWYcEVRqMzmsBEw6Vaqi",
  "key11": "3e2u74nkCN1r2oB7ko6o4bHS8uFfUukMZKr8uKuZfVPNUjBewkbthp2iqx3RHht1cRcwZzoLASKz65KxJsm4KBM8",
  "key12": "3aTJcgXCbdzFumHcyWWKN1GQi96EQMiJyvEZFhMrnLCEYD3GhJTdxwvwbTLsZPUrQTbsRu1JrzfBGKZPqkXjVLcm",
  "key13": "t2yv4MEW34UfjbuKpwhVEKb5XTwJsBrX7FRXnXRYKS7H2DMKnLeejhiz9oHhVMr8wyVM6jr8QXHnUC1MxTSRipE",
  "key14": "ba4hYui9U9z9KAhNZy5tfdiHfcKTsNK1wQjMtBSB8UViZjVyM1GMtbdfEJLUG89yPUfGjPYHNnoTVxo6mWQ5JrF",
  "key15": "mjv5uEbgLnj2nScCKeYwhgXbc8EMw1NoxdZBk5fRbMFucbQsYDLfx6Xn9JBHMR46xtyvtZ8yBNva9eX47Y4QyVM",
  "key16": "3TtPUi5aFyzvqW7Z535WkpFoVibUKx8vjRyaF1ZPEH3fXFmpBnuxiBiCwjsoj6Nd6b3o6gAyiy57e1NxRMkT4g9s",
  "key17": "26xVCpjFsV5LMXrTeJxfekLJv1U4DjpmjCcLiL3YK34UsMYLFdKB9aUm25RNaucuViJDjNQb9VFVhhAAzYtzBYsG",
  "key18": "3XUWAa5PKb3xawGScaZQcKiDDukgYVBwtqipB2fVqvp2Ah54D6Ext6aAFnCuEJ66J7bA56415utErpQfnH4LhW8D",
  "key19": "3YPWjRXGmK2EgXkHZJarDUosotzvrY9vxFAi9uss1hZmb9X5N8s4KvSngYed5EmXp5xwwwLzZ79RMpi9RA9JZyp5",
  "key20": "5daSJAGTie3vCWxuNWEQ5fKBCDKy3wUS3dYP1xBbkZppai5LpVFZaxcoBDpZheViuDPShkWQJv7hpsEBSrj6Lgsy",
  "key21": "5dNAHXMzHBWgFFGm4yHd7hpmYEUzNWXc1MRS8iLZ69n4pTU3S4uva5ShxN5MhBMQdzmykahWvZDt2zQB4xm4MPsh",
  "key22": "3DBATiSZepuVUQEwuQPJkLghWU1EH65jguE6ktx23sphmnm4XCeTopviUWnMe8wXy6MtTsTKK9PfrXgE4TgJUsCn",
  "key23": "3zJnkfiuge889kSwW7ixsphYZPS14vqe5FQp8eEfK4HRFvs55Ta14CsSiLzz8BHVpP5F2geazvbGBvr1k2HPcxEs",
  "key24": "5kpqYBBwajx8jWUYHeSa9nN9K9iXotRYyHMLArpGCHJ7Sch6Q4MbLVXTNtrQGPYtQFEkV3wwWNNhAJb3tnKZfizV",
  "key25": "5ziXyYbX2km1WErminpr8bLFtzyK2eccUkNYDSQwisVSa5ENLFrJPNyYb3kENp5mC4BWj833cW3G8mp99EMpTPix",
  "key26": "3qtvw3NA5rKcXXt6sVqDnEvewf7Hsm2r238KB5Y4XAaTiP2YaYEYaALxfBmHfLFdALFDxiJmqGSjL1opMYxWRMdW",
  "key27": "27ws2LzLqj3Egu15zv2o2akZ8NiAj53KPtvXVRhHCXFdR3CFosdNmnXNrYScq7Ttn5vrGNbvfR5RfxfpNm5vgH5b",
  "key28": "zSrTuCiJdkSyVNX3dNBknm8NgRt53uukKcubVesk8nCik8TN5bfadXNYJ3bTh5MpGNwKcXDxo8WSusXdR2sekij",
  "key29": "39GRnakDeH3EATkj25WYvZ2D8ErTmZca1Ggu7UC7mrN5Ag7NxeJi5d6iJJTPRChyjGnzaEdcMpgRYqHJK1AVaTCc",
  "key30": "ePNBHSjpawyoNow3YExGVVWhrgNCC7po6xATQtWbDKn7Y7Msjr94ppAYqUPYG88Gsg39cN6w68VJqyDFcy9TCmS",
  "key31": "TzbDqR69uUwjPJeKpRaUkNcDQw2gbeXRa4Yh2AY3Zr98oD2qqhYFECANVLAyiUGDxFvtUPozxCZe8DGWMS4e1cA",
  "key32": "4fRnhG2zTe92Petn3NharkKuLJH4rWZLT697RGtGQqF9vLrFak4W4MTghZqKXWW65sEvbFaW1Z3TUsY1L4WUvoGG",
  "key33": "5m8WtVLCqnSP9Dv3FAJdS2W7ku3QNzvAFsR9aqrQHhxXMGL49GvvP41yiKCqNRZ5VbCjVfydhYRdytbjeuqHkrpB",
  "key34": "27HSjjCnhBvDmcUq7u2E5jG6TdCC34zn8TjywJuuWgVC2idaU5ua7RSsAyQgXLhejhfgA4X1ctxNNLg4ph9guTLA",
  "key35": "367LbwJtcGYUCHJqj5uhh5M8x4sT38j2pbt1gqecZUMPaJXwCbeNxQvVQzjn1RExDE4T7BCREyZRaQ76Nq4jeYCQ",
  "key36": "46Y1U43B2hNmp9NiYBbRGd2xNLMkk2g6pjzhzsKRSCfYTd6NWKsbQ5o9Wijx2xdGaWM822Z8oM9MtEFeZwRHxNi6",
  "key37": "pkkuiS89AmKqQZKX3BjRNBc84pRZTGKCyBD9GJhq7igcsows6iNj2px7aM2kXFZbFKjKeNLMu2WFN68Xn5bJSoN",
  "key38": "3uWbWpoHa691pKFhzEocd8HxFZ6f2myTfxSnEqrr7KtM7wpU4hxK9DtMrUsAcF1khmUqFufbC3G8RGYg6rn8Hko7",
  "key39": "3HL39z7ijyx68iawjHrmQsvYbHFDM8ci8gX2jDtYey7UKfbucsD88nFLpHHb3MwZaqWWiieP5BqJwkhTCURWDrhS",
  "key40": "5ej5LisktKJkNjh5Hr8FYF52UY47uxReJBRHbuwegf7C6zFbSPQgiTYSbK3Qbr7swwh964daW1vktejHT2gk7WD3",
  "key41": "5T91TpA1ZJZBJx4nabZm8MixmwT3iWyuwA6epkJ1JHxhNX2PJC6qqfkeRsndSUGY4HxUNHUvd4ci8RHPXVRxgBXd",
  "key42": "273K1KSqmZeLBfC34UYFAFvB1mbMePdRGw5PdTrDXqbjcDbABncbLVorWhpRVd9g1AAgyRbE5VPp1fvxFUftJviu"
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
