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
    "3MM3vbeU18TSAk46PX5Ek6gRuzABi2UCGyziody5CbE4fYPSxidzGezHpK8QGBKJiH7V14vLaPnUruT7BGBqyVaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ic6H6REReK3kExPHgZYyfKGdgKg1GHFNRBaW5hY22J9fGJMZG99LFAzHUnZEYKBy2ZFM9WxSC23MthvqVLwbxQg",
  "key1": "58UGmaLgHrnbm8RtMfTTAaJ725VKH9kdH2wW92u7JgcMYyozFaiRs6w8cCLZPfak3AxEnm6wGBWLV2VSJGwgodxY",
  "key2": "5oqFoQrRokzM6QpC27Da9uiNqcAtJnZJGBauqQpkoc3j6CVWWjzcse92BqnMtqLjfShBmropPsm89nZ87saUsamr",
  "key3": "3UbJThDLpfyPSgPV2iVj3qdjRuKZPWiexRThk5QAELUXAXTKk2aGNYLm1Gv1p1iZ59fik1NobLQ5Mdcsckxcgz4",
  "key4": "37c1vGNrTSchmBs6orPpmVyS7Hq6AqhsHvAZKtEnN6om2djmxtNAgRGDzrvJMhZNEcdkQHk2mV9qaAg4NTrQrMzo",
  "key5": "5AeR3ethdfoCHMFjsopbZFkrJyQJnD1QYGbxr6Zza8ecTZ879xq8FYSEriJ9oThWt6EhJExMTFsTGGh8E3MZDFiH",
  "key6": "28eV9LiAPrtsV8DJoYLaFoPiPSvuDDgPs7X2bn2GUFqaUayN5uZhVYk2NNSWWSph7s7sUPbbPN3Jnm4TF5MB7pbS",
  "key7": "4GeSDUfvtTydExiSJb8uXBwqrzWQZBLddAmZzsMCLsojDZvqCx5CFFPXQSnFYL2RmHBe5NWqNQorn35tmLCkDF4u",
  "key8": "3qrEd2FeEspmEHvVDQse6ZKBSBefXq4gqBXRGHVC1hoP5xLKEb7mRRcrkjfsjSfQrwPi8GMUug1rmLfk7xY2un8a",
  "key9": "cbg63xxNA2GZz1fsaQiGZ28rjVuSkQmnn2nqVayRvUaMDjmUhzFaZ4LFg1HNpptMXndcWLrs8jp3Q4Enxdyg4UW",
  "key10": "iMHQoteVa9hepxf6ofcJmwTsZV8fq7CABgXjvFeFCp9k3xeqpFp4TchCjsEJmbfyaqyWwsY8rZEDtM9ZXLUseMx",
  "key11": "4UsKjVgtyzCLRRtB672NtC8t81J9JKrxAU2hhKbFEzTiFtDie7qjRg9pjEYmMUsnKA7Cu12mFeCuNLtR3mD82PsB",
  "key12": "4XLYZdAgfMPYS5TXQVBqqW24Wk2hzUE2FHVqsCLVAzHo3Z8FFNg2pG1eeYjPvCL2rUbDpMobUynNmigAqZCoHqZx",
  "key13": "4VJFbJ7BWYspygq3KH1FUnHNtNmN2j84Pug49sGH4NMzje4Qyx3vDRwTJnqeW7v3ZNTTSnG4BWnfUyWouKWLeaQo",
  "key14": "2VW8vEDscs9StGiuyffhkXm4qtLo6Yc6wMsF3Z3bDUAmoFkj9GC2qjTmd6ump9fJy59Wjy62H8o6cAKsvpBw4rxD",
  "key15": "5Ai8Huh4RFmMc7NcySPvys8BNU4uEG3C1R88k1u5t7T2tgMwpU9ANMiE1S4bNNEx3uSZHRTpePew3s2zAbgBTc6E",
  "key16": "2PX3SdQxTyizaUayULsRdEAwDyCpXN6cW3o8Q4srLAmeXS4sq86Kqcj1X9avk4tifFHVJix7khXNNdazm4ibFTdn",
  "key17": "45QsTQkJ3EfszP4mvyRtwcrx9Zsk4Zc4VSi7PpnDy5CEHSQ4CwB3mY6kdtF34psuTd9zxAMoyYG6Boopiqo3RbvB",
  "key18": "R4NAdD6dxpXnVfAjJDcbxbYMBuECEPnLn8CQDjsyXHdpDbfDoqSZSkDfVkRxfkg4iS7eCiWkfuURCXrAun5MuF5",
  "key19": "2jvWiEzUbtiU2iMWvCJ2cLV1brG4aXBdzuuBkaK1ifbzSKBgHDvyfqmutX2rwtbPUxJGcVUmmmtgTzgpJTzomouF",
  "key20": "pTzzW8xHnoqZ86gZmvoKRzc9yekeuk9eiYi1mG8tcK4PP5Hbbd5azXgPaYM5nSxDXRN1HQyyPyCMwALxRxrNkmY",
  "key21": "3KnRLeu5QQkTW2qCLe1djbmgGEbLdCm4Vq7bx5bunHmk5sAZU7VrPdnNPCQo8i3gdXzdMMLJjHpDWzDy69feSqRC",
  "key22": "2qXSfFH1oxDUbd8zu8RvwwdageaikJi8TubKVFKFXCniWWmp3JderJqZveR4gKkBCpiELqJ3ySCXSmkieFKFip1w",
  "key23": "555zKSVev1oLAfSwnguYFKa9QQiHv28PzW8R3CTi8RrLUiEZhKLdhnHVXDUvARZNDXjE8XoKCgtcZp8QP7e74TAd",
  "key24": "4vrYULAGYx5p8gXxHotmUM4tPMyBAPWZcrXnKYJycSSjmxb5u9xrQkkFi9EwZiqv8x3SSuhCdwqnTxMHuvFD8Rfq",
  "key25": "4bZbPy9itgWF6q788Dkwzf9git7iZy8Uzt3wEC3q7KmTiAWAc6tnxCobvBV2XGqDnv57FvfQosvXesWa52sTBVAB",
  "key26": "55pvGqDYpPshCQg3cWYcCHVbRbPzeo3ZXuDpwEA4QWeF3fUsJ9oowmhdPN87SEmkuqGivb4gyAyJx82eR5y9aUmG",
  "key27": "3tUTUU9zXupjwX8cvGBaMGzvi4VFqtLf2So2bjbN2bGvVprpmjKfQAyyMTzFrXubUW6igXW5rJQJhdag4ULiZy8a",
  "key28": "5QTsMim8sD3huF4ULeAcfvHK8CPoFHqYZeddzPSE6LZSuZo6vSrYXYNqGoNNkQBzFjzZyMa4bZdKyhZFxWQLG3rD",
  "key29": "4PtJhnCS59GCwvdvd2PFLo1fuvBFXGaBZNFKTUCMTXWhfKEUhkn1VRFGHJYmNZMJWNvingbJHE4Q93ynSD2tWQjK",
  "key30": "4n9WmRLGJJR4ogt9MPDgtKAnXsRiaAYFqVFfq1TZUGWsTcPVW5jj5xWuYzPDmYFcPHyo47iH7huWWKEGceBcw15B",
  "key31": "ZhESzW5U6a7SLAhqarX48Ui7byoPdFE5gy8NnYgXSbWRYWsK9eDGiA769SwPGuzsrkeQcAJUHcs39EXRrduUVYy",
  "key32": "5oV6J65WSo8LVXEJBrTuctBQJMmGZmLwgdCg2C4FLhd6jQhVHbVQwssAhoCn4DNwUYyvac3An6mT2SWjzTWJD844",
  "key33": "2kexJtsiCL8t5wxs4rw61onZBQUx2AwJH1ENvgdTJDU6zUJWexrywsSaesnphrJLMjUU3aPL5x4DGK9U6Xe4GmQd",
  "key34": "2uiWvHA7bFmMhQ8jhr2jKCUJzUMLe8bPeQdTi9RoUpd5oKSJYPfDx61juy4EnKLjhCJMWFc9xBmMawE3pzP23s8M",
  "key35": "529joPKDQ4uy6CxeHFbKwJP4HKUNa28px8zwZmhFBfHM7uYQreh7H3W1RKasoVH9WwbEsLqNibcWxD2QJnPy3YkK",
  "key36": "2WGzksfZ4Eyayhfbizkn3ZVpX8JndYDiqVvB4RFT8cD1YFYmSqCwydgDTq3w1eezVqgCjA7urAJgQNF1hS8Te2sH",
  "key37": "2bQzXMVPyxw34TatUheXLj1he3vHKVHKAcvxo1r36rkQJkn4GWxnRrbStXDnKqM6o1QFsiWuCtTTpqftQrL2QfnK",
  "key38": "VrZD25KLXQfCAVXF8ebuzs6vT8Nyo1Fx3tppCtPFCBzFkWYB42tae8a6ZYsuWTzxSxKDg3XNHtuzmA8FxmpL6F8",
  "key39": "3Uuxf2vASkFusKFSGVUUayCRmKxvibRnhW4sU3VoRUhiDTNMKVd8jEnp81WfNMu7BTmQjJEpgFac6eiHbMywrfHF",
  "key40": "hDyg6MqdTmXWDRBZeVDen9MNvMHNYMeQ9hHCs2NDfeURFGCSKi4mNUoZ29g5AEPMPveTtJT9gbTBVVy9xBVhZ35",
  "key41": "3kHKjJaBzfYGYB4y4Pv1KboXAB4uJYQpz2JXEzkD7Q7WqusvrH13mLyNFfz27bbscDexSbDAHWaojRiM5ksY2Mjo",
  "key42": "2gdn1eVnJKdPtHm2rv43D6SzXVNEpJN5ivqbE2paJ5BAVXLNcmpvQLB6yT4sTPJoLTjRLyAD4ess3G8TCmvsfoit",
  "key43": "5Pzs4v3yQynRewtmX5ydWz3KPyWeVLdpdckdWW4awrZeaBUrEcaVaENtem8woM12APvW6epqaTGvXrxLDWCxw97b",
  "key44": "4ywQKP64mMXUFGsbBD66oXwkqMNfYTyySwqkzkFgvQEj6agyqACcYV68QufaV3cmoisCQGy1P6iWNxNw5jUp1uwR",
  "key45": "4TUiLQwwBj7AUaQJbwM3d42n85NXWo1YnBdVz7qfKgnrocUM7qKcG9Fdaqrni2BJLr4ph2KeAPpQqcNidncDsRGg",
  "key46": "22EbQXdXT8vz9dDs9VAnf5wysLzXQ8aJJimzP45XeG16MHVp8BEaKn2MMn6HW1XjQvptFS7zcrGeuZvyEWCU65xs",
  "key47": "MuJniEUFZghUBVHcakU6VUYtSEwXBR8NaQgoKDxfseS3whmZfnxdNjLykBBB2rigfNMQ7nr4ZUR1n5gec1AKh6y",
  "key48": "538FRF8QCpcBdYHTRQupKdxNuUf3Sh4VEov9ruj7SvF5J4yU6NVkiCak1vca9np2Uh5vK76RdTuPuitLA6TfQr3v",
  "key49": "JDYa1Go7bytv2uagUxJbivAaRcGqngY1p7pQ7Ypa732eiDT9iATPTGA4uaYyCEZpUC38bErPfKxkUNwWwBBZqcP"
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
