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
    "224L3z3KytXnhA3eHDczYVe4NEeZag686ydbLKfWMW9LQcRDWogNGzCRHVEqDieEJFFqrXA6zRvzH3Sd9mSze6cH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mDFcr6be8vCadMB9jYHQyuouhHAo5zuGGY5bc1UXzJzArnLTqT5xJPd99sQJsQcyox1efiAerpHxJmAETaUuruD",
  "key1": "4scgZZNeKGjGJHgTVHFb5yhu4kZdQ4UiKzyiX72AqNfdpNbyUJy6oQv9dMupWo7mNzaV3SNJ1Ddd8NrRLJDPThkP",
  "key2": "4qLMuegnShRpt3LpNX1dpLbY5vd3BQHrJ9qdonGvECpSBc4AeAeDfEXfhoKRPNSpcTLAmjocwXCC5n8Y3p9u6tUa",
  "key3": "3g2Kh9oQQdtZ5PSTRhM1MxFkjis5oprW6Kn7b81NDV64hnaZNq2q5dFyp7nZ3WwcHxFRYXpNrW3NHjYRT1rxaUrH",
  "key4": "5Popd3xUcQLQzdb51FjsMEUHPsim9HC86rsDHMqzS2Gh1d6kH52FPGqC4yEZjdADUgUnkDd6P2hGY1ZVuHqMH1eR",
  "key5": "2qyJ8vL3mjdSkg21MAUzBAxS2AKGiMiSsx9kKRtCN2bL3nq4toPjQeuq7PxELg6spfj8CWSuf4ztpRYvCo5xqDhs",
  "key6": "jN6NbcPHGfuT7D38j5BbNjLjFYJacYme7xRyx997djvYc1F2FddtackasnFZpm8PdwW2X6vRHBtGaevNmvibDHV",
  "key7": "2VbwUje8GSMcwXTENt3aKyqqpBuCDszyBKAeLzEtmQvyudm4qQRWCnNfU8PUwZ43bJyeCPZRVXVNhMk1Whzevn1j",
  "key8": "rnmfXQaGG272BKMU8CP8eV1bHqeVGemsqe8xsi9pY5UXZpHchyyrgb1UZWSdfvuK2He7fPmuRfz6gm1AsMCTGCv",
  "key9": "2bChdm5FhKANKZC8FyU62PASCYizxmdQwmYJdB5SQP7d3SUB2RjrG7o59V4C1T8X9ugptoB3PpFiqmbnERBLcKo4",
  "key10": "4J2fTbdEiKxo9LtoRKZsJ2xpiH8ouS9bz3Uq4ntTADgF6L81uKNM76jgK2qPUyn9o4KbEucNY9q7Wpzxt8RVqdJY",
  "key11": "5KJHzjEgok1bEECsUmKfvzSsWSXFM37pJxy4Z9opnN8Jhwr3BTHwjZearsLyaDPFKBTqiuCSFBikyFkGzWHwjv6h",
  "key12": "5bBbP3QTPpfHfMRadGmdUxEZbZZYcddsaxiPtBMJtytR9PmVRnZGzgPw9XpZ9Ts2smQ9Bux54LnGRq6v5yeMaiC8",
  "key13": "5pBKcbacNQvwPxUdgohntedrxSWeM1Z7j9HJNkd5coJk1nEXaeEjjML9EPtN5Hc1QgxFfz5n7tBK8PW5k3fLdtyt",
  "key14": "2rTdwLY3Mn4pXfE9Pf99Wkn7UP86QXLFNrB2jNJ15y7kyy49XK1seBcudiCns9GcaeBw7qcN1EbGAC1KcHLZaxS",
  "key15": "2HMWmhTmHcxZPFmbfQZbfVUvu3e4vKr6Ufzsficv1dChDY4S3DLvgKEnujgBiJG33rR2YnE9cjFfvZLqkBWr5x2z",
  "key16": "5BLQJqhaKnEoJHb4GtCa2qvGJHwdQys5cEjGf5eeRwZuambE7SStrF1DqGGdeFJ9ib5nckFo1FWUqrMxcNwND61J",
  "key17": "2ia5G3k4gdQ9mA15ZU5Mmf1oiAqKxgQmvxMa8xnFLQZPZeHR9P4qeBkZiqRz65fbGXfDgVzq7bnThrmqAFUAzCiM",
  "key18": "4BakvhCj7cZZFJ3VvfPAmpRKAjkeahufo9ArS9bwxAeiRdZsKJHcoSK9XBhFpAjLkwmP2out13VeckdXahnPeMC2",
  "key19": "21JrgpJgSh4nV4iMEwUo96418m945tUWETwWjzJS69HfXZ97EafbntUzxjRcn7DeYPqMjENdwwy9nJCgh9zRpuiq",
  "key20": "2rRg25QExHbeMx1tZC5HkvzTePqqMzxVsJWZKC5rUyx2jegjGqGw9MA5aAkLgBZL4oEKnnZmc9s6k9hgnvBwqobe",
  "key21": "4iJqyPP9FJdurF7Dxt44Pt3NRCAc8fvkinDTpSR6upqdwMPjqpainSc2c5cBFU8ackmzDS4sZt8RSq2V8Qpbx1Z3",
  "key22": "4gaLzGmuLXAQCXgtCZmY9zR8mwnKMLFr6axigU9i8mF1nZFA1hfw1TJ4JiRWjJV63BeipB53RKcubG58Uf4BfyAK",
  "key23": "2PhTDELabZJqBD9FL4UxwFd4hgGbHzp7Yzgcdras4o1KBBgtpjBmkzoofyevb44HXULkdh4aeGB66FHnqtNmP2bW",
  "key24": "3dhSeWiYKdyFaNdURaFhUii4g5vxL5eUDDGKMm87NsCUi5zMTsAP1dQBGBoMZPZErdwJYZMDXgNwFdTZki2EfosZ",
  "key25": "48Jk47S4rmGEKDWFrWXSdusUbLRPxxxfBCBPz6nMaXzpUgnVZdJFWkRETJg8Qw1uZ7N4PvWHHGagfh1CGyJdJL4G",
  "key26": "WuHhzr3ynvcToyLGCd3iXqj1St2TpzWZxFKiuFqm8JhEsiyDbK9UoKu2DRzZqqEtvc19BgmTJJo2B3xMwrxx1bA",
  "key27": "H266maXKcZ7UtQRqPPfCFE3Ww1W5hjG6CiCw4n5sSyNbBJYi6Uw5jQXov58nzFEMg8LedRZou5bFSTTahwrAqT9",
  "key28": "5qce8dG6CKtXfBaYL1Uez8QUDTQxByFci9iA3wWtrsxDhreux7aNwrCrBCNcpyaXNGyyFWVxRbECybV5zREwvVZi",
  "key29": "4WHN4vKb1iCDJiK1m2wD215tQp2N4evdw4cuJ18V7sP72Pkz8SN4qUynoBnY2Xkfd2pA4xQRUGuzL398ePJvTEWG",
  "key30": "mGaC9MeyEMXchT1rAag8znXKvY1zuycdcAVvPWR6NKRhuVXFJsaEoQSMLGU3kyfYTYXc2hQe3pwJxAQ5Mx9DLPM",
  "key31": "2jwMEZbbtxh8mfywVgw4TJGtM7deamcZUmvPqpPTEFHYBh68DHi9bH5y2cjtbE4gcV1Nch9o4QJnk1uJoNX832w9",
  "key32": "2SWcn8rynV7udxr6xGaQzJJsoaoBFFraz7eStgDF2ezbfydLeBXDEryK33TfD531c4GGTZon37WbSDddFKbbH1cP",
  "key33": "2yf1mv8HUgLsyC5sfSSBBrwhP2Fk7x5nJgehe34SYWaCGrygMsocatMswtKi1BAejFf1qsNUU8UFWsXmiGg1yAGy",
  "key34": "pjgJLmUEBE5k9nz42WB4UhL1QHh1dey3783t77QJaXurE6yca2jcSMm5BEbBVzVeQq6DR1qt3jicSfuYhiRdMmN",
  "key35": "2Vk39s6zirM2uxGvPtiZypN53QrnDz6qyznSdCLXMSGrWx3zKSFHoQGZb74dD2pAMEfYxdyMJCEdAnZDQ3Hcaysx",
  "key36": "TnwdryEXrjS51V7yEVr1nRg87VTkKQyMPWiDG8sSFXyiLS4zDXjEGvTGS9FTMYbiMz7L92brXuBuRE2KYscmiA2",
  "key37": "5kZKorY5XMJPhs2RqHCcmaHuL4LGTTv54Ry64mquzZjnudhofD7wsyaa494xauCNusHvFZx9AQMbu3uL8issK4VJ",
  "key38": "3tgZcrZmhwfymgiZFUdbgBqQJGntrHE6EKg9DrsosphsUww6L9YJjjoUVQzzEKGEpq73N4ncn6ZPvPYypjKLEtas",
  "key39": "2wtCN5Q7but1jJK9vndU6BUdeJPmbEsRdKSxDgzkzMVW4avrRDher93tVLcUjYZVnrUfxDVbSQajdroeyKaEKrS2",
  "key40": "5fbWCT9BzyCkQDqzapNUSRgqDF5xkZysimsdxUmYnACMsiEWUK4StfuNpM51MFJjsdvPpa1aBsmLhp6o2tzoKoNL",
  "key41": "2eSnSd6HGr9tAq9mFpWhZo4YsSSDDEn8puaDpsQvT2RmVZ1YJi3Ai4H2hM1PrGu6VCBVkQpno6yusoupZsfosvjg",
  "key42": "3VUT7sypKBoCpubqFbv5rfcMEZwkT15BFtqETTvPEv4Aeg95W2mndaTgxCZMptqMwavKzCXVwuGBYm9k8X7JVvhx",
  "key43": "zTUvL4UoUXt3NSM4snBjq2x1QU538bmFRu6tr8d4JGMdgCFeMJj9KWBt8ToVvWrNvCBhhpF1crTFb7wMoYP9Dwt",
  "key44": "2EbtAowxi3VJxU1hpj4ycsfn6oZbU8imeHyfGoiTQH5W5mnBHzvwMxoCstKtYaihhQLsCfNuFD7mcUvFkszcRVBk",
  "key45": "e4euv2e6Hrz4dSAo6TMq8q7j1Y56BfGvXDFmeqxQfotpxR9LhFxf7vkgJLGMt7HxCC6eemvfFLKfwTAnZLSSSWg",
  "key46": "MYsThgtNEq8bWabA1v9Q3JnDvDamf15Hwk4oBRxCkjbigrYWuuPx9mxL4SJNfcV6YrPgvcXr9VxtwhRz4odrshJ",
  "key47": "5YpKGN1q56SYA4XKCcjpwzmuuvQYMt3WZt2bqKBjjaihM7PDRhRu2dMpsgBUQRLmFBGnjRYLCNUe2mZc26Ax6Ff8",
  "key48": "Nfif55GoFY8kTsp8v1D1M3mQYktMtn6TpsCFPoSAU4FUpYi8VbfodNNBcwJ14rCk5Dgx9LpCLT4CFB4KtWnjt5h",
  "key49": "4ZAEGcQbKGuis9cqMxtouiLHgXouxdXQMnNnUw3E5c8CT6Wk3osmyjFVXBn8wxfYGpScCEQwfy6MA2SUb9JtCHWw"
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
