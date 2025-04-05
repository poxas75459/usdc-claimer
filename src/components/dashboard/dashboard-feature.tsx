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
    "3KaHrHDwr96nYchr71TETmZJUs8NNrmLyaYTmLCin3Ct3yX4PXqxhDZ5gRoKUvYCEujzzyQUWNhUqkkAnm92hJou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fCnWCrFcVmdXufA3kM7i2i1NJswMt4VNaHuHvQJyGPLSFuuCsoADRzp9CVVsdcDAb93gGqRsX6zYqz61YKKND2f",
  "key1": "35oiRfE5FgLwN7oaKboSkfQ9gGAbaYfRmaxP9zcctAuCGemmqAyHjSL7FYU7cWkNHMFoMvFs9Y2wwtbpTVPknF38",
  "key2": "4mSpDZbvev6X5LDxhVcbtVz51CEkEa32EFthFiEfawQPxqzb5UAWES14mbKWkCWSbRvje11isxsdTXFqgkfVEQDe",
  "key3": "5cVqsAUHY3PyMMeztMCL5fPe9Xo7WSwHbAPp2pc4u2vZCHmvt1L8Shun2M1h65a7LfVwAwLZ17frTf8hjFpJ5f7a",
  "key4": "5DDXUgwYn2M7FEgYvfLrdrEXu1T8jhdieMdMZaBZS3v2BeE9p9KUiJf9hn2xRHTAJmyyZQY2YtegVm3eKfPtPMt9",
  "key5": "bRJEnBPoedubKwK7J3ezz1As1VNkw3LNXb9vw4QfBisyDEFeqzEofV4VhcHLaVJzwWC5hWZz3dTdih9b9S8ab8S",
  "key6": "rqEmhtDE7bgSZFiBoGu8KvCa8hSGUW4RVFi3GePMf6F3Ur6fXpmRDpYtqAk8VXV5exdE5vhnrhS6BVMjrnfcuTM",
  "key7": "3eEKEuKpJnwXvu39ccHukubKAsW6SquBeG55xDRkMYEz2YUmsHZ32Qi4eyb7TrxHmxpX4sAaKJtZwNgFfEGKC995",
  "key8": "5Ypsnzywgo4bGf5uC3XdSNqYpWqUzjt9Y84WhquryE6ED5ybKP5wPnWnvKRD93oCTMusugaDtTZ7EQgn1gnLsnYj",
  "key9": "3p78mEbnUi53JuRDUUxjC2bqmgTJgqUgBQkEYeuvdpS1ezP7enRxaZGcvv8LhczacncBjkrpHMH7fuXBzxW7BRnq",
  "key10": "3wh2PjseFr7zBnKWcxddpta8reQUPRKYcFSaaSTkJtJ6PR4TUQ6b5RDDCg1tat1Qfyuz2QoEsutQKmQVTz5KmDGG",
  "key11": "5y2W5XiAXB3yMwSMyBQ3aebegZwbPV112bMbntjYDrvpcfD3vQy4nErrkv9iijRpRGUSM6v5XttKRiuTSdi3P6E6",
  "key12": "2p7216KHDgPjdSRS8bHa9zoLSfkG1dvHpntqi5YVKXyxUTUjknGZg67tDoPUaApMX1PCNDtywnquQ6g1xjecmGVQ",
  "key13": "nDbdwMNYxs8JvxqXT3xpuVn4tXpVkvpC7hBE1dBtB3kw6L9qvSiw2CQmmCQM7bjTq4gtzq47HmYNMbYtBbQRFEJ",
  "key14": "3bcWxWdsMZBuEjtmkLg8xBv72rv91MiLqnB1FuCxkV3XU9fnTFCJLVMVBVzoEGpBMNRHksA2y61iswft9niL2Aph",
  "key15": "5zWiyxZfiJwyJK4GDtN6cHjPimfn3NS4dYRcRZVESL6jKE66CeQJHZitU5KqNRyCvoBr1k6KrUcdFDPMannN8biM",
  "key16": "Cc3kkY1JmzuYNAZBMs6fi3V6jFBTNtx53qKXyrtLjLpaNGCXYD6i6CSdDTTNKe1wfm51ATRP1hhYbv3nhC59ysC",
  "key17": "3fjK2RYhgU81ZLBJAagy1cKGdKpoLqzGjFRcqL1mG2q19ktfmtvWKjJt96ixgXWADWbDM8k7KTF791sP3T4fa8a1",
  "key18": "RYhLnw2iqA6wFRCg6hcGeSczbaxxgYoUU3Wx7JQWAHshVndgUCdBrSZf64JcS9EtkZAefz5qpVCmYPzu6XHCu5N",
  "key19": "5qRVj5yVvisySsxjcwj2seFunWvAXQouvxkP21S6yAtrXTXKtcfHLPKA7HjXc1ajLcYH7qdyuSdkYBnSNjJWPCxn",
  "key20": "2fUV7rhUUVRNNwkj3tF9Ry61YUXuF6osCgHh1arBZsXh7o9YwVw53RD6s474B1ifm8kBe1WUW46s2rrfpUj7LwXk",
  "key21": "4P54UmUMMb7AFm4qjSrNMo7ntBBR66X6RD3Zng8Ex4MQ1WtudNgqTYoKpX6fmNHpgCTFftMtqfcCTY842bhi6Zuu",
  "key22": "bw1bWZPNYBgV5zptstCYJrRJn9WRGAWZtjt7WCEYhb26p4mM1JFF1NEN8xs58RqSDRpFV6YhCdZiYAfXHL8uZ5C",
  "key23": "3oYrXo3oMhuJ2GiTspGqUYVZAMC81yZqYKTmsQn57Em3jbjLUNSMJ72G93UNvaqWXsd8EcAj8UdYmDEv3VzQ84EN",
  "key24": "4zXmS5AgnLTAG1XstQV982eaat2b451gQN58wPduLJvC6Kh5LBg9Nw7qbHSXnHJ4RSK4HT7MzCYiiZgpfZYPD6Et",
  "key25": "fyATrFySYHLkavb3S4L98cUHvReH8XPBPeA32VYhPR5fvdsfmSeAMD5MRuZXFhYN7GKBX5fM91Kwuy44eKkkTcV",
  "key26": "4p9ykqPKBHTsP3jStAHkk3icR8MM476zXQN6r9XxHBcSLNTXdFq4uqaZ7GtPhxhmF5fTbexZaVX281J6vUxAserg",
  "key27": "EB8atewdcberhfc7u1fAkBjCbJthPLmW52xi5uZTnRC8D3mj1ehjy237Zva1Hn8QzRfkFvCChaa55ZCnmYsWXpR",
  "key28": "4npdMwn63VcXLMUTas3B9MUbPcfiM3u8e4QUiQZS9ogvPKy3rs7PdCyrcqNPbJu62mzVQUoZXPeNmQQyxRdbF7ym",
  "key29": "3fPHqpPhscXDiqgUC6yQ9tyWUxv72i3G6mwSr5X8r63CT7F4o9vpXD9889hccHPywfP7WVyLuhCqFjGzJ4iuoBdM",
  "key30": "4EieokexeqVS4uKCYfHNT9oseqknSw9ep3TJGdRLeFwZ84DwCVM8rdgjxxwUdWACfYJGRPPxaqtRw2UdkFBXy3wt",
  "key31": "4rGNhh3XfGyW1RSZ7TT7Pd4RJAAgXE87xaui7ftHH5YW7XX6BnKVWEa44rHxqdC4wtcQQvJyTm57VMTbKpn2FeAS",
  "key32": "gRG9tJUTpwzBv6yhpBPQo4KqQcmnnYiNKL1wsBFksStwzFMiFVY2ARzPgBaBFRYquB7Zap5RutctdSXh2VA46e2",
  "key33": "DL1RLu3r1wFfgLbxEKqHsNuJU78hJGfdpD8A4JJRbcm66LwnWEBukt9Wdb6MZUXZ8JYLynBwAzhwBvAxiWEyyqQ",
  "key34": "5dtFkd5EqXxDSTgNjwAXDETWbwo5bPxuveA1uktfJxh5X4TTBbezSqnQNXAUr2BinhvF5dKXeuPeHAJ4qVSJGH3Y",
  "key35": "32bb5G4j6rTKfWRyGg8GszyJaXx533YDvnPR5CNF6TsjSjxZbcWY8tqv3a17cfT1zZM9pCYxgLzAFi8ZqG7oCjZz",
  "key36": "2QtPu8US7h2P7zimkvudsj5Q6DJKZ1zTRLHmQQt4e7nM7rdsZihphF8Q3YUUvGnYNyMWkkd8dLAzX94BogU6xEtZ",
  "key37": "5wgq2spqw8YMvoNjCJMETAKnTUoSeaYjFZ84RDwtJMHLdwpwLweSmvMC6RJwsaJS5osdD6kczVsf7mL4QQJBzGUd",
  "key38": "2iRuimaYLBzVfaNPs6VbeDmJCVvn2x2aKs4sCinWXRr22ntNJThFnhmhtKVgqG7cZ3jTmxQXYSpSrnNyDH3ZQBrL",
  "key39": "2foai2KFJ1HKH3YZ5YNBAdMxHmUJLjjzkxmikzdhAc47PywJ1y1JKt3Y7KaP4wVMn2z4mW8CKoCSL3W3boPVXYYo",
  "key40": "5d26YeBRqP3aKP2i3mMEP43YSRZpQTpeBhvvmEwnGgWzK9sWiq9dvonNYnVCnd5d9oQbfUxWrdWyXNC59rFAFvkD",
  "key41": "8yjvBjcc38RK52wMZaMu4Y646SrUjtG2EdQyEhmeyPGvTgSWhj7y7VSeCyJEebCFXAEntwmKsKwppVcf8KRDXtn",
  "key42": "3TKgTzfZGRygDuspeUcoLTGccBQeVo74CqykMMaFF1Z23NWywaao3qXSCcbLNbbwBnwaKMsjC2RNHG8VaRSPFnQW",
  "key43": "5Mg7HMvemDeYKHqZDPAYzYMYcFFvb1CYSE6SArCbVs5f8rYYeohhUKLN17XAcrNyoJG8vgiyV3JmtNjFYxhy3wwa",
  "key44": "3Lzr8sKbMwrRoUBKBB8Rp9UPuSVLrpkKmhHgtL1JU9UsGiG38mSKZPGUTdCqbK91x6HFxerCxs8Wa23ATddrMvdt"
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
