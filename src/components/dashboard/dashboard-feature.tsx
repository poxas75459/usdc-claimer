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
    "4GgCPQ3szBv7ceVQrqRAJu76uieegt4rseWVuz6W8BaUrjqSQgDJcpyeF8dBxSiLtLEoq6dPFPVTL3KoLUZbD7Qt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Xty6e3q4sgyYAeJJJMpGnjcewUwoSFnpb73SeJ1V81ekVGkh8SoCGaLd6Yg9idKuFffRHFNy5qxdvc3iiFDjPz",
  "key1": "3MnB7EDvdEH8Npg6crvGQxbATnv5ygok7KAoVTQNxVXdowuw7Q6jkyQTuHDo25sVMKSsXXh3vGYCpELinzrGUu9W",
  "key2": "5ffdj3qNkLXf7316ZazNbk6EvRr9ip4HiqRR2TVCFWj4F5RuRiq6GPVzxScmcudbogKmKvrvnVJXer9Aoqbyyhvs",
  "key3": "34MSHvgd2q46UuYMEiHerMdnXdzYcWBQK11gjjQPQM77WSG9hytt4LbyFoitRycLBRJDGgg8i9FP36GRNEaFbRJU",
  "key4": "3SBvPWaJ2eXb2kNmewkiv7NzurPJHCDLhsZitveGcXhqBvJSpt9byjN9WzrgqXHyi56ankR17EbWLxLj8H8t6qVL",
  "key5": "28nDEkxTJxYKzPg1bKy5ayXZWFH4BBSBhGxKy6acnRxwQVmJWhm74KEutvAdz7UGTMNUZvdbz1n29nKUsiagoozS",
  "key6": "d8UUHpmPuePAnnCtAXca7DchhMeLCnJt7mfVKFacDzuvVQnnK9qFjBYA8dmEXoCSjTqXmeZBT3rdUZeW4d2EThC",
  "key7": "uG4hEWcZvrLzHnaxNq5nWdkg7GHDK7yB1UhtJY3GH4j7BetRtHANjvPvxSnR1qbKdmLNXd7B1rNmK99iYEkAsAH",
  "key8": "4998HCfK1XdBovxrat7uZqpbDqbKTLGvHWF6SSr69hkseHbX71gnWvhaxrERGNDDDT1JAiDo3FjEzJTyUE9mA7iy",
  "key9": "29ZVXgRMMrg95qBdUP5aJ2KjGbx3D9PtUUsrnRtLeDAtzbP4AzJwv5JD41nhJr51ZrP1obF5zZBf42kqmiBr55Rj",
  "key10": "LvUkMQgkMSKRXcg1pNjNSwo2g4cycyL59KPTY7z6vbeEbd5TYMyr3MKBGGFoMYFsuMRm6E1H9UY4uuUa7L6LGxM",
  "key11": "4AYSiSbjSADbi7STXVmi5dR37ZAs2qwk7rBJUiwjY5QYtMU5QDuAUmDR8RjsCJ2Rzk3sF25ZntvPYJoRQVurgG1U",
  "key12": "2QGjPFY5jKmayqaSaoQ7eydtLUuSaSxRgyN3RUfDweMi1GBeN9xeuJKndA91JEUpMuo6jgSdGWfCZxk4XE6JH1i5",
  "key13": "5yWPXojkTh2qVX9bA4TcAkx3VuYADpFaQtQqFkc42umvLkEgphfDZ7qobFJmEAhXMNANYGCyzYWtJ1kW7Szxh2o",
  "key14": "39bFrCr8qyrtAF7grZZYVNDJ5BDdSkW7y6SDFbF87XCVLsEDZox8sD35dtYKbNmmsSGew72aGrAm6fU9Mez4cJYa",
  "key15": "1fUgbpKrCKKKqVucmG4ApQg8vzchg3nVshFLtJtxtLQF4jvPBnMttzZmmUG3Cr7893fijNLnkoU6eTzbYXCrMxP",
  "key16": "4UehfZ9ES7RzymjqFQLxkCUQttuNZvvHSNLjFUiqfduxgDDFMxorN6ZZhCdQPMpQPxDwKep8h58mnHwgmCNWFh1o",
  "key17": "3iZ9GaGp8SHgKcpoBAQAqCeZDU4ugKjN3DhqYBg4yFjdrmgNqVDRiwRhaD6DwWi3HwGwDspjJzczgMA4LNH7fzkr",
  "key18": "3Db5mT9P92VYkm2yjtRSx9jCm2b1vzVe8sKFzyYf3sHRBwPHqcBec9jJN7Rd4qxVZwZQMoYMamP3LNAio9Tqx7rA",
  "key19": "5SK7VnKMCkH2sLFajRbfSNqndz16fUoBbEMjq36hTJ7Yy5grzhHSdX7ru1HcvLQAxhwRZ6GFenubMqygorkszCoA",
  "key20": "3G69HuU9AjSgQKZfJpdPnUjPVVmUyskXLeLPoumBDqPU4qfe1ZVr7qtj83zwdBKn6HcX5QaMrFBcs9NL7RDRApus",
  "key21": "4h1Wqh7GK3MUsX4XtMizrqL8zsweDZSs2EHYBqLw6chGnmspPWiPyoYPkpjKjo1nxzUcVUspi2JCdkfpBvTko5PR",
  "key22": "4tGGApqg6YAeX1MAsPDPyq4UsCaw93q22bgxtc62ZDNx185nUvQLkfGaGyp3FQKehLbYaiTfm4Y3dD3Q43UQZPP9",
  "key23": "3D2tBQR7btuYzo1ZGLnBRUJGiZCbrWxBMfyrqxgcxpJ6abd1vjmJGGRkYuvegyJGZ69RiBSQRFjENj8BR6gKe53c",
  "key24": "gfamsguPVhLKBeoAfayHx4gUT1gkVzteZbKv71bcvPiUpg9J36Fp3SmR4rKAwwKVarhFZSvXhYxdGwrGQwacVRD",
  "key25": "UymqZGURTv1inbULcN4et4XXAjbRqso7fFWFz2LwosgJYZ95Z8vtvdSBLbSkSJRocKbfSMKh69xCoGMudZeNgBB",
  "key26": "5AX2araCbGnqf8hfSbVvwY12LY8oMc7aAwTKLTehDztp9RGa55KV4nCFWY2FxvKGKs1jzzxWJ4sE52n4FY5CgYcP",
  "key27": "5ciQmRdapjsJcSz3QKXmG2pTdYpmSedjXnnbRS6pFthigHa25feRsGFia5YgfhidYRYZCtL4GfBqc429h6USfTBe",
  "key28": "53QCyEHsqrntzVgQFPT4ELo9QdFwJooKtEUXsAaLgwjAWK2Vod28LxcEdBvhHeFJmVSsirTc7YyzkCUtPWwMDmEt"
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
