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
    "22QcfkZ7SKn9R2kJrBXRK2vNFJsPUJfn5CTmc8Jk9MC5B4uLsVFc2RjEpecmtfNpCxViCsG62rPvCHUdZnH4khBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tvQ67hw56P1Fo4428AAy3fwevQmyrjtG4au7BxndASzXwiMxamBbVj5SCiVjK1eKQujej57iA8EtkTvvTimCmk5",
  "key1": "3f2x7f4ZDj7aQgq4nZNRNcKCk4Ub6gMXX8CTwB83WE3FjihXshxuUM2xsD8YPZDuGuNzmWXFo8MERSiaBxsbmaMF",
  "key2": "agBRSiAYTjgS4x9TYKVSUWVcbkTrhHGaDyJNfc7RuKcoXNS92V13jBTrAc4aaEFJcZwbwm7R9WnMhY66oSkZF1V",
  "key3": "4USqkfZ6dD6VTxbmfaKAR9T8pygxSNDDdUXWY7VwS82C2a41ceGvbXPEM9wQNU8KVvw9YTf9BHVFEAwfDCX9E5q2",
  "key4": "3J8dJssGYXc636zG4TvMsiaasXPnpCYdZn6q7tWiBvd3UvDQVM4yxtsog7aj9UuivAWB17P2YbM4pjTZBVCqUEJx",
  "key5": "2ymE3xFvkmfL4AA8rWynxzri1V8SanMVJqScfPUktp7pFb3BqjL7v1kdXqNeaRPp42rYPE84gBU7hrBsMuptBkLX",
  "key6": "3PPLFaUzfmU7doenFaMmRoWH58RVHVb1CqGapALLxAdwzgAiYLYNk1S2uCEY9de5m4DSesXHgcqAguKeo3tyWn2A",
  "key7": "5yryGoC7pxcLR3mSrjgqDbEcGChcFTjRQPQ6KTGdBwcUyxWc1trnSL6c9zseWzj4R6iHbZJLdPRFirsF7JktfVt5",
  "key8": "57ta3z4veVgmKkMefWbPbwvhnTbyB2LBw5sXtEjUAgBxBPZZtETTvVD7B4D5Wq9FLSpFY2VBamRGdaATyaLehS2u",
  "key9": "41WMvGfUuQfJnbymB9mmnk9JqC9w1D2VATg5W41ss3yPE9JHqZAqLJfWhcCrYTL53hRE7jhbjyL13Pg7XjF54HYt",
  "key10": "kQNDc9TGAMenbXFJKtGBb4vPi6zcmR9vfteLh9nfXZKGqxot4snMU6CdXyvESMYArgtbiqdu2pboibaVZHXCoML",
  "key11": "jnJHb8SEaJmgZWEbLdGtRiUHBPZ5NoQKkLEf8tYJGbJTKPzcUF353eJmQus7gUwC8jbUC9tJdeeTp7gFLqLyypm",
  "key12": "3YhvHXQ8iqCrMjXD4Ft9Zqo9vz7iaDgdMn7U7Zmqr4g9XVFY1FJ2W3s8JRi7rwhhygnv8favp5rzd9KvFdFVwKy",
  "key13": "4VZi4UAEKjq9koWBWfN3Fquz8qaxnDQDURtAh64pGj9uxmYY8p3UUWaFqjWHMt6ZFz5KqMcwHicpFpaiNDFpzJBR",
  "key14": "3AdeNMYfjTh2XCF6btsh5JWYAdELG5H4Hyp4bpaNGxr3Pd1ErpLVApJis6uk8Ah9pMfL1Paf6zqS9r53LpYgf6N4",
  "key15": "4hiaHA4M5n42rVinnM8pwSAZMS2te5d6rJ1ncfujDNkr9kpJJEFVFWXiYCohJwAy5bgGCTnDHZVr3CZuzSuceYw5",
  "key16": "3WXcEbv8GpFTjNTtCcEKZi9thKcGAch3W9yhtPgXUtuw68hSMkGTNwV31mQxaWAAn1PBi72hfWUM2UgSD4PZQLh7",
  "key17": "4QSLfmrrtPo3rtLy2X9UJBcCG8UyvvS2igNXbLHMPFo1wqUGeFGoPdC9g3pofhCr9FRvBGZN4KyD5ZMxiPzvHTkp",
  "key18": "5K8Bpt9QPfNR47UYNjncth7m1xQNtSVgyvLoqPYrfcCCShe6op5BBPizZAV5Ak3LQiroWS2ja5EWsUp4aCBoqY32",
  "key19": "RF2J98Wu8ZFd2iQx39B88yoxrKkQVMhYF1VAmMGeTdFBFVauE9t5hBfFo5K3w6kqTr2Ue7fGzFSRcjLKFEfB8Nx",
  "key20": "4y9wNjgWh8ppjeTjSVKkXXYxyrnjmpDHEXBitwoTd13W57SkA3MXdU9io1brc82dyz9Quxk4ekthr3UeegMxnkuv",
  "key21": "4PQCTK8KZ4N7akd59jh93osxCLpYdn5X8uquDBUYvCV8kVSpb4Rx3UzERph57MEFWg19tAyRaWiGdq2aM7WvKtzy",
  "key22": "3zjRtBKNpEn1Eb58vc8hSx6S5mkK4hokmbhW8cWPAZi4sXtY9tJefXRHsH81XWXaturhcLJcEwohDjTez56nAYW4",
  "key23": "2Y4fRJWAXJ2JqR8kJG3asrQo54mhVLsjKfW1a3M9nVjpgSR3no78J8vJscmNV9dL6aTuX5bcrC342YQssB7dUVmm",
  "key24": "uL3fsdLbA7fpY6a9kEmvrTKMAhaFjsft2DvB7BsiprUnrHHzvPqMRSt86Mv8G5VrQf4ag3nytqEsBqNjzZVieip"
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
