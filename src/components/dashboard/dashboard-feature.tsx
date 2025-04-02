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
    "4PPx94v7XrJwNGV37VejYr3o8ikQDzCR7LoDnGviPc49PgBryHBCRqqksMAhFsG59PaC5ooRcE4eS9SLK367WNXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7qxrbQsiF5ueKttro5F6dUJUQEpj2qSZaTXfyTcG7hLVpegKnfnpU41dK645YfP7Gv3J9HX6bJodtT3gAMPqiMW",
  "key1": "3eA4rX3ajfoJUmhmgwG71QXAoHdjC7xT7o4N4NyWDWrfgxBb8BBnotHo1dWnQyYjDoWvZmcv9a1tWfQTFm5DKsjE",
  "key2": "2u8VgLZ7N73CiEUVtFXUw7siBgc27Aee4Ww9ERsQCipG4sjVX7HewwL1wGxhdmWJpKwysid6Bm9ktDL8uKzvYhf1",
  "key3": "bV4V41ufgoNg7AAdB4GX9t5RrBdkijwgpZQGu2ZnfVH78vakx1wu4gPkd18YeBnsaDEDGpVAS3eV642UmQnqnBr",
  "key4": "4bZ1q78FhYtKDLQNZrBkvTURGFc29hN5bjRhCgJcHtGcjWCh4tHK7N8JAeNwHNKn1dnRzypiSWZPbWUqsvaRYwTB",
  "key5": "3iGj8Tck4gM7y3rTxxzhZAufrBidcNmnCDzwkfSxwH9zGog1XiS2RkaMLUZhLNSHxtMyEBHeogveEe3JojpraP6b",
  "key6": "4TmrBriE5EdXpee1QZ2ACsLhJammrErrsZ6oby4rtQPRUT3PW3NUbRGEAgP9chEUCSLVdFJo67DGwaAuasmVNqyg",
  "key7": "37wyfw3MCwzzpCv79AXiVBuGNcoaJV7LPXbKCK2uGZhPCnJKgoV7wtKh3EeFRZ9ofZQsvsQMHeCow5gghfaTxCnG",
  "key8": "53GFzFPi5hHkxDGwmh63o1w4UWnPeDAiLq5a1en4hZib39BqY7xouRjHSUm2pUZBPdAQC3cZE1PBfyKLjtY64GfE",
  "key9": "2MQvCDZz1c8X6eGqiTYwaMh6oaEJSyLiLraEAhsvMjmxUinim8eD1mbfEwoWbiKaB7oHRYV4Km9D5z4sXnkZ7x3j",
  "key10": "JgCcQru6kBLMgBBh7wxzF7PzWdjHPVASPVowZ41N8MwDb93XavS3ZZ5Jhf9ioU2pWRA9ZDexmvfCDUAwHqMaemc",
  "key11": "5HpwKhGWBbMk9JbGn8EHGsLH87oaJesCjemMAQJ89vvLzKo9NkytHcgkA7gYZ5S1S1YpyB8zsRmbBGSqx1F48E3A",
  "key12": "4jQeE5v5ihxdUKu9SanhubkFkVSJrMhvdrstnPQuDKjE72RUKsuFDJhGd3t2gJWRkfeeVZVoLgAuxJVk1S96TCEu",
  "key13": "3oZvrCG9kkiz7Y491XCULsghg9hWAtsJhs1HJA1uvWQddTJBwvQ2npia9jiHYE2UVEsEXws6iZRYDKmW47dqKsXR",
  "key14": "VvDmgaWTPzzEXQ8n6awucLakmZqf6nX8US1cgYk89sTwFDXrmBwKTZfRxc5R34fZJMtxrmasvZMupRDeqVM6R57",
  "key15": "4UXxUychXBdE6bsR9c6jvfnRAdzYpauAthqPv1UMjYLcVGPagZgye5kMt3WKCzjdrku7LY2GRx7nEZjMNej5wqHp",
  "key16": "4WeBwDPSvh1VLAK8C7rca7UgsLhgdN7htq3hSk6emmQVFzL5DgTJPvpF2FrnWTKqYZsM2w8NRhRotPT9ZUDkTMLD",
  "key17": "tsVPtfSUdQRFAbLLzoY7obkga1SakenpAGELZJS3X9t5GMzmnA8cQKTiwNVY9CfpRv1JDyP4ojKhfU3q8Wytys1",
  "key18": "5ynMBcvT1QMTNDaDMtSnGemsG1XkPphiiFRwxrKDJxzeC6sDgAfAXNdmSWYhbqTQRvWXHh2unSo8Ywp8uK5VQRK9",
  "key19": "4sHqG2X73PUsHH8mqe765Gw29MM4NwHk3m6G7bz47QsTtqbVZVjQFQKmJFEFHJnG5ohPv2PkqZvbefcy8DbhgzE1",
  "key20": "5Mp7tep1zSXGGcgUAFmpoQ8kvUkKjDkE6XV3gLbUS8bmvGc81HuXvhCXpCfPWFt9ierGaZrp19cQMp5MPtQZ5uLQ",
  "key21": "5sgTG3uMUxVfxk1fMt42EPQZMg1R8G92VL11s85tzTc9zuk85MAuLULDwLR5D7Xd8YMNdfz65WPhjEpyBgFhKrRY",
  "key22": "5ancXYkEWydAzYUcXtqZdwhUqHhB5gnhVZCjH5g7jjXchXWEcnSg3r7wTooCU1p8fkC2Ha7NabGHoCkJdwL1N4tY",
  "key23": "T5RFh3qsiDmfAPxyn8has2V8F9gduC5iFUYZNtFrCAxjCnRka57ofwARpN32Q8azqG11DcmzNGdfAHRH2exAkXK",
  "key24": "5QjLpQ1UTaCZkUA2e1LvGbNYoyCNJV6MXdhxWKaTAR2kZXP6C1pS9N7bXQv7b7QGGeqVb4ymzso3apitjyizxTs7",
  "key25": "5AoojUbeqW7N2K1vb86f2QeLGg83BwAJymcFTy78CJUpi3N2ow634FD6KLee2zKFU7AQF6VPzHdcEdoqF8qPmM8k",
  "key26": "591SsZzoSZttYMun5w7SGHdLWrjfUuGWiWAfwjnA964pWjMpximGjhzfYFi2Zm7T4tE2c1gUqLi2EbitPYZzdHte",
  "key27": "2oomDdsNQbC6EW5sGt2ikDGK8EM65Kws7m6B8qHsPaYow78p2KHtfo1aAJAcMVLvs6ZDpuQ1ooRjjHPRNWXjiWTa",
  "key28": "3xtRKLXjgyhvZDmCvwMcP5os1wACRUb5t3uXFaaexqKEbEqBUWStfzKfnJkpQXE81EH2ApoVxZGc3FaJooT6Q7vW",
  "key29": "4q3oWnw5wqps9wMARGXLx2L33QF2SuoammyQHyLg7TDXsF1babPJxfZYHWHbseNwRwE9E8PUDpNLL7LoJh4R58Rw",
  "key30": "41joAy9sJsdXut2Uku7j5gk9GWsRuasHmCdcwtmWmBFvQrH5H6zTNAmKK1R3oCQATEkoMjEkV3DGtYGRwYfA1sGr",
  "key31": "2oUU15pmv9WaJdgwrQos2rzejB6PWBEgW9hzvWNSfapDXTBnXJZsLatw6xoYoMdsPaBDHfPxx544Ctc3wjGkwdSj",
  "key32": "2naQ1AqbmD4nRmZ23TStMttw7eh32ZFjZGTkxm7HeKRd1xWN2WhGJ7DkN34qDf2qX4rzHU99ioD9sGigLd7b36u5",
  "key33": "3TZUpyVbbV2h426juRnqCpUTwcgqK1Apo6cXUjfueB37pTNWLWAS5c7NcAEei25P1qw9xqi87HrphPT5wQq8T2WT",
  "key34": "26jN4ybFsRxMKDE2PpKNB5MpguJieFEkU44JZXacSmkHUwgTUWdPdC6xcsDB5sSyri2sC75vZaHSeaKx4Enu44rT",
  "key35": "2YCwFNbqKS9f9Mg4uyyo2PaDUx48qNrRg6H9A2VhC9mX7vtPznb6BY5nFvJvdYiSCUsuPTA1CCBvzAVjZ4KMLMXG",
  "key36": "5pVA3NDuUtGzS4kQs3HrX46BPNRHJXSTS2mcJ7WTgFpunWNGEhMiBxCXG2wF18BhsSbxaYVTgprm6sphkguPJQzp",
  "key37": "2xR1PG28ue8GQhSAAZahnFeoB7dbjp767FPybtDjFNKvrGXJeYTat21X7kA1ZVNvTr3KiZgQXJoQdJMCKwCwiXF5",
  "key38": "445xKA6UEYY8JBjXM2u472Ls59YPg2KNq7VE1W81CchRxMfud5UbYC78bk4Y94qV2dfz7pEWC7W7z6EV1htXTbrt",
  "key39": "45HZqm2Xyc9tzijxCiL58pEpqzs7KtW7b3nMysN4v4cVR4qHWyHVcqxtBGGy6ycQptD2t4SdvPb38brg2SuYcF94",
  "key40": "3bXT69P5xbfLyFaB2Zm6hrAMGQtjAcNmdH7RcM2yiFtTMnKoi47SVFihJdAzBJf7gWofMXHAXvC4qsgMDHbcSHSJ",
  "key41": "4zCmkj1GBnnN9cNVsJ2BPrsYrojZd14BtcPrFTJr69KY6xAv3ydgk6ULxNDcz7UxgX8Ji1G4bbz4qLJRv3GxUDpL",
  "key42": "2d6HKSSfUbsn62WERvJX7pZxuw1Nzj7k3ozxxAwTTBEH2h3XSUdUQjVgJTf14ZQbFBAxGJgyhajc1sRT7ZH2KDh7"
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
