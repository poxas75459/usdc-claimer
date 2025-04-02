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
    "4eVay28Xrwi3LB29mzGL3Hcos4LoyLyfsNnX1BnNiEVYBXYFrAKpjJ46LrkXJB21Js9h7UsparjAJ8fVnMiR1TDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39BWqBGjcP2mz6mMs4dx3BuiDJmk3UXKpAv6KqbPAf9N1SNa9LoHF4NyfkpLUekvsirtmJebqwjcJhCgXdgiiCW2",
  "key1": "4m6zacRzDpmBuqyBwTJ3GyRSrhC4Gm8HEvBdX954UfCZZdVg81nHFn1GnWLhtCFBuE4cMDN1ZH7djsphGj6TrQ6Z",
  "key2": "4D7eSoXCNezNaLhzVPuXMoFsrPRgfbQfj5TtGKZE2FXgdUZ2LkyMmxL2AyQFCqs1cnGosWPAR8gVQbZRGbZ2VV9V",
  "key3": "5X5bX1tRNqiyTBr6JuUfBcGSm1ryaxtcix8AZ57mBif6XGRkYRBFYyxCW5t3JkLcjzDhaHHq9E3Jy6ScH9n6243x",
  "key4": "2Gh9oXuQTaBEJA7kijDhEEG2wHrkSdGEkWr62NCzDeZENyjD3MAFYbBS3F4qRGrgVHwZtnKw1dnXkFreXRjsnoEr",
  "key5": "35N2F96Qt17PjtmUnLz2KBNVnzp9o6jBEbPS9bPT6YeTCDWSUyABb2V7eJwfHcC3HyXAWvMwLsGscwKhhHJVaquQ",
  "key6": "MqSdjsHDTEY6s6YLohqUAYrj2vbytz7FMXGYiaJfrR4YRD4KLxTkWXrGvEqsKMPy6X25DceaRbvf7Nd3G9Zt4wM",
  "key7": "YmNaP44HUBUqDQTKB3uCFYBuDLjBjzLse6HTq6C9dA8qed6jxkQ4GrGihQDYrPjckZemaEsLSnwRgGuK2NB3yAP",
  "key8": "oTJgwn4hPMQGPbg6AN2PnQhsKzW4gWbQ5sNVTsAjHA9KvC3AtSrVj68BFqzzGYcnTj5zLQzxVoHzHBVmGP5FNdd",
  "key9": "TfWUobzLiu5KCsjuRMD6AtuWdJvbEsFiBbqtQmqUJqfQxXaoFoR5eeTPDXRhMoBwwfEYZwrvkcwj81LxRF4XvVT",
  "key10": "3ELdeSja6AiSAsYViSUbsh9r2KpVZuQCgHPJwbDUBS1Ge18Ys4dukzXxEKfWDgRBkt7uswRz9so5EGk4BxopmDT3",
  "key11": "En1N2Mi67MfYQ7yotuw3EFkWoJwf9QLtAroRxJcY5aKeskpTSwmRdHhfc418HiSTX9MD92RWPsd6DYCVmgWdfmM",
  "key12": "U7VVKxTsb9NGYRYjg3npuZax9TvihfuGLznJhP1pPvJQ4vfvsifk98jFdUfyWfFtfhbkuP6c1DJamBGJNtp2NPB",
  "key13": "5QCGYJNHECXGSuQLSsuW6oAygb7u6JPhXvpntnzGsebmfqmB9KvbMaAAgzznQYANECJRSnxbUDmHere7V7o6rw7",
  "key14": "5bgSmt6JMpp4wMayCxZP2SxZj8uFXotrqSjbdN4xUfYtn3uqTgr2LJfphrfgToPYWG6osKRwM9Gj8Pa1xQ7w9MT3",
  "key15": "3PiAPT1hJ6nYFcWLHmHv6Kz1wZ6wYoH4XLgusSkjK66ALSiGHi7cmmPRAdpyMWrhmX9FFQ9rfdrMMU6xrnve1tg6",
  "key16": "679mhR4Y3om92qV137qytgtwELmy35HDFpCoxbQqDRWPbRmox6AVuriPHQyctWKpHsLxwCFR1cvN3eAyQDfcRU2U",
  "key17": "qjvhdtKSnmKNFqs1NyuvhTuxcKiHMR4bn4uChw7H9HkH5a2HRNx5txHS97vDvMVThu4p34pcm85o3To1sWRihHp",
  "key18": "36njArx5LY5LxDh1qeueG6oNo256opEHNeVAUrhgnBLYzZdgNkaBUbLBtWdfE6eMkSPQEpB7hk8ZFBah34yaPtUR",
  "key19": "2LELyLBBWLxp2yRKY1WMkibSgN7Y6xwdCxzQYkmkpdm8Qf1XZQiv9m5BbyrETrDTRnXtPeWE8Kq96jiDsQ5EiML3",
  "key20": "2327bWAxjgZwBUwXkM14D2iyU5EBUMYtvBJck4Ubk3khv1VeoEt6g77ssWtzDiaoDD26PyeRuZP9L94y2pPJ94Rv",
  "key21": "2VFLkaPQ8ttfHxLbiBZPs1sLfHp8rT2Ug4ZFevEaJ8QZjk6JpUbHCHhjR4BCZkVZGE4Ds9ogtRa9gCs916ZnZbpX",
  "key22": "5QpFPKEWLuo6cG7qMFaEsQxbfHcmeaDcYGuWuy9uRP7K4bRVAvR9XejegmbDg2eaLAdnxDwhLQaY1qsCVxwGSgmn",
  "key23": "5Mi2rgjvoyGSuEbEZupiXhFRt2SHnXsNB4RUnpVYEuPHRdYXrLpM8GCHHUQrejjxGCewWTDKRcxEKozBxey3io4f",
  "key24": "2fXdJJPC2cPwGedHHh8uidtuGJ6215hnkLh8NxoKvLr84ysZzrN6EE3hcrxJEaiGXxCkVRigNV6jC6GtY2q2yxQa",
  "key25": "3kQEchk4LcaTQxSEytuXE14LHkxnqdJrAUxxoh4LcuQFuNG5P2AZvLU27zkXqKHsHFPctku3bRe53tEThEpvgZgc",
  "key26": "2kGeN3EgFLoyChkKP6xQHGLVGBuZCAC6MeNxNzQX7xhCuNsGCySFHGnRj2XsYSEjz8PEF7gi4ehtTsz6ZTSLWaC7",
  "key27": "321WdNbHVdFAWV3Tmf1U9r1yAm7YrJ3SSPmNgF3EPdQYV1s6gaZykgbZc8SfatC14MqkHSyr8gV1nkbVufxYSNyQ",
  "key28": "4RzypqKxCuCe8Dn13E65DpfPAUpQ6vR6wZQPUrsXfvW5PDS26rDYBtNc3Y2wagPAm11khEgwwyknoHHdQpmSXi9w",
  "key29": "4XCpPvkjMo3hkHkFYz2uAA6dbPr5JzUoDtbE7w1dPbmHYfBXdTDzmiZtdWAPMT6bJThHgVWyGNjU5SnLTcDj139Y"
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
