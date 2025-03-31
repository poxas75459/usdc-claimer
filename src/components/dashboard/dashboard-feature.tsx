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
    "5giEmqbCAXT9QCK1HhZGw6BKmLsKQjeFKG9p58WHDfwWeAaxWo6qsQwbZGPQWwkDmW4o1n7D6N4BLyRrCrsdVwDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u4cVEc2QoHEXTJDbmJUf9YAzKEGGbBUgNroRMfydmAhfNeTS6q9rqgMcjuEKQPWwyXyeJK89svZHfBdWswppCPB",
  "key1": "4aqU6WVWVZX5EQ4ypie4vffgpexKuCR9k18zaPg1udhbSCg72E4bPfAmH2TmrLouXu7jAGLHT1BPQzq4uKXMCKHA",
  "key2": "b9NoNccByHt9M25axzCVbCpUwbjhEbMxRPLsrLTGhb42o4PJKPfiuFzfNEMu4RdJArRX184d4umHKHtbcRJbgBw",
  "key3": "3Hxh3Z2fWwJgpVhcCcUUdzKqWQMPrQVqaMvPeKhZ2Qrh2gektRCMsE1fzS3AATsAEUBF3YJ7dVCovw9EKeNkK5Yc",
  "key4": "2cw3w4EjQsBcH6Sc7Ju5t5sS9QAuADcoYpQz9zhZNoEa4xz56ri56vkE1myrszG1RiBrbLDdvw2zJpRvmFUbQyie",
  "key5": "2sy3PtUPKwDTaePpNcuqpzPQAftDaMKN8UtL5EaaFZqR7S2dFqJ3LPVyNCBY5egV7gMmWs2DjzKbSWQxsapXodAY",
  "key6": "4WDFbs6ANgFSVn7o2UjbivmMWXnwcGfL71oW7z6F77qKJqTdKeC8EbsHjmP8yDM9nQ1rhY5Fh8XNBujeDKx6t3Li",
  "key7": "CZzjTKaLAsH39qPPAJnJGm38GrxhJLnNvbjEdkLayPo1GPG9hLuD1WEfvhtNqxJDrbcBmhWr8FWVGHaxhZ9fMCS",
  "key8": "4PG1agLk2oABGrBWkWevzGP9CaGDMCXrGRqm8zP5UXpM2Zc7ZsU3Wbt9QMJkf2rmVGjKrPox651PjGkmzWoc6ZAK",
  "key9": "EY9Zvxc37ULyinFxugf4yZ8VGk9QdxVLK1cp5Sj2gBo7LPvFDExDASa74TqEp7bH5M4oriPLDk7kJZidVisxuvd",
  "key10": "3aViQGU9S2mQ327DJeEUTk3xRtnd8xSEbMN2hN1CW82CrYdX2CYgTF38f9F8otttuv654av8M1qkZDAkgjoxAQpv",
  "key11": "65KjmGGstXzbNc3FX99AeCRk9ZMmiNeyUhJmtzmf2fch7A4gmpDwZZtHBv3nVRiUtCDC2tyDxeLoS6M8dHGNc2aQ",
  "key12": "2Ar4mg86SLU7saxzY8MMsKKo6VZXGE428wsKaHigyo226BVVQUdVS8GZ9qeMnq3JJbXzF1vbA7RDJaEuKPN2PqVt",
  "key13": "41RxyoPk3VxgohXUHaSj45DsFUEay6aH9A1HY1h43pxuusqRvdFbAs6nx9A24rZbEcSaAeUL5NPdjnDFxjipF2Uh",
  "key14": "3QdgHqMYo2oZLAJkkKeKAFc1t7gYmoS9jXigy3LJnkmVuprm3dGMjzgkY5VJy7AZS8oYvZNFwRribmNU98VgA3Sc",
  "key15": "2pokH7TswvwWF6KtvVB7mEqjKez23sUxs6EZtS4jNZFECsnMnpt9vhoG8VbxoYo3DVwJDwCWZRG61KGRWfZFnQZj",
  "key16": "3RvUjX67HzRsEMKFEsXYAxQ79dsZtaoRfExHFKSvMCmuRbGW8vKp2c5xjRE5iYBHhtyrEWqQaHXj5T6BP519jaqS",
  "key17": "2pVqk82ChnJpQ3fQc2ypLZB8PDZqMc2xsfy26bfKXnXUA7L5QBZfywSCzjVFBeHSPb6AY7mXq1o2pemrKEezepPd",
  "key18": "5wFayzABwxfq3VYcSQDTSPHJd4LcVKmD5sPg745fzZnaTBVuYCxLgVnYaTPS74g2QCfbvUaC3CA5yq4Ja8FyXoWr",
  "key19": "2FpEnaZ1irh7qp6HytkWK3RbZoZBsSb5hAuZGURTRc4XUwXHoYcot3esgFscR8Z3rDFF6J2JPkiHFAtn9Czcy2b6",
  "key20": "2U5NJYyAJXpRdU9wpLVvwwQ3yQuFom91VzJVWJHGLLkuPvH7Mrs1nXesbcKaUMf4DVoEZ3DG2m12WswLsHVekAnQ",
  "key21": "PCZmPvRA3JHCnEiWBfEBwofNXHyMxWVie9cwzNjgdMR98aN98ms6PfDMVTXA1E9Zn2HpodP8S9nYPYfUXq8Zb4K",
  "key22": "2TjAPTmcshNrWHkgNuwMNYhvYuvN5i76Vas26jiAkoWqHCZej4VGkFg2i5yoai5FCvxkUL3E43dV1WQVWKnHbeSv",
  "key23": "sbQbZM2FYGtzb372gSC7jqHAat31XTeYvYdeoTN85UtZbDaF9Cib84utVHyRFQiPX6VwPAmag4eBdGBB3FHRwYi",
  "key24": "AqsV6LonPDsUDWqECDwXKRtCAoNLi1qQxvCG2w7mx4xiGrhwWYX2S4di4aXDTJVEQXp5mGJLv7XHxDRirk3zxoy",
  "key25": "4QMjkcX4wU9tyMyPbz9dy16uGqWcj2VPPZvQdkx5j6DteZ5J1Gwss499zsNFUeFrSMp2EFTK75TUkGgecnf7yToj",
  "key26": "4XX8mscwf4tjmRR9EhQzz9RguXUiJWD891vNLYpkzNiPJBMALUwAnWXtj9H8HmDQYjsDUZTERWavtKJhtVmDiNVd",
  "key27": "3uDjLLPS92BFue4Uf78VFKYsrNt8TyRzFNYEPgBeGP5cqeKddpuzpaSvzrUMUZw2k5avmDL85pFkpFj2RooahfzW",
  "key28": "6vKBNJF9cEukoxzET7hdFd64wxKCozqbonxchzgdUh4aANsHJgzG32EgdAqo9QXZnPE9XmJMMqokXkMTcX6R8Ar"
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
