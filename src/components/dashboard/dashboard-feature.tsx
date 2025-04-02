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
    "674CFxPsFBxyDMXZHwu5MEmGzppdAyEiuB139wnVAA9zoRq2adVoo4K6SnbqALqx6cp1kRVy3hkniDKqQcv8d5w1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pWd57q5CoxebBq7vkXtYcq3MoKj3Mt3avu5ZsQTRXNFnGrZADtVAg69rgBXiz599VN2mtvGewAUi83seRwxnPHw",
  "key1": "VUv1jC3prT4uQo7e67UJSckYqxX8bQVKi527cQvSV2m6r3iZsAnnuGmRjZcZ7GwkgZrNZKeiXTaxznRegM86BWw",
  "key2": "4uvW513MBxunZVb4RCN3Z1CST9fqQXcvzXBLP1YPKYNDj5SsQMoNBV1RpaTfmu6gQCTwmQaoNbejYnko3QybHfpo",
  "key3": "4h163JirHoZis1h6rzwQPPCHn3Zbd5coDVaj1Efdo6K87CXZV4uxZBk5QuDVbqwmYvy8EHhb2L6VNsbcP3wE8Wcw",
  "key4": "62DKr5NdpgLksYzZnSN9u9ZgTZMzMCN5wVN44TCeDwhqWnwVkrmba812MkYFVEDm7ZUbW99pJ137v6w1BFe8MXXa",
  "key5": "4LumYtfSKQBpUYfQ1uWtHj5gKGnWj4nCXcZK7k4yr8fFPc1EcJTyRn4qQKMbUM6oTAMbHJyNQ8RUmQRdqpZ3fHry",
  "key6": "5zjSCqE3LawaS2MFgezL9H8R2MzgA5GNpK9UsjwSPVDVJNbAUXXtk51UnP7nbaKztMvpUpPVcCZeFJ5D6DJj7y6E",
  "key7": "5wap5zU3VpkoxhVY1hx9DHj8SvuoK8LEyAFYFmQ5hCsFf6NTnCdeqihEVsnEYc8NPSesHcvHsQ7UK6yuHTFYaGXW",
  "key8": "4CQNX41yEHMy8zwBn2xf6uTTXzF2fjs1Lkhk6XFeCiML2s3iABzgQHvfLnVkW5RKsM9xUfWNx1Z6vTieM9y4h2QE",
  "key9": "4tLmsvqYm27toYxZ7RfnndVrf98SuS9RDpeswB6B7ekmZ6sVheZgvFAzwci32yGsD5i8gjQWzsZYhKdGiYHeQBPg",
  "key10": "5SpcvmPivnUEQzZ3jXp68XwZxQuiwnhFLSM6vSz6vNzmAsik922z5VmdzHizTzLDJfjokJTqTNhtQVZmnZtBbJHY",
  "key11": "22RTGAhMdYJLt97XauGka1KCUQyHZnNywfc2jCD7or5UD2Z8Rp2aci7JxXxLT4NMLHm8U2srX7rRFsfbRsUUiVqB",
  "key12": "4FpTc2uQPA9a2TwxVqk9kK1crsvJnPsZecZFUh84GCAWEDQFMKB7T3x9QGUV48AVAsgJ8nspj3FvzaSfP4W5P8kS",
  "key13": "3nFRB65BAGj851LEfwW84QZHhA2hGRqfyThyiogxUt15f9aYd8LHY9wC7TZNrdGe3uAdDSYgGwTAND2PX8eeyL9H",
  "key14": "45sLLxsey4nQFUhJCnPaecLZGQ16Eb1HUE5a9M4EMRWbLV4KsLkVdtGvmsnP5oW7cPZ3YpQT27R1X7GQBkKexKvQ",
  "key15": "4xKmRpKBryKSmdP1HH3vbdw6fgAVQwoCbiGmQjWAu3RTRFETvJhUVCDQZnHk762UybYg4AdgD9Gn1mzRyVNKKQi",
  "key16": "528W9cHmxfMsiyxdQq8RQQpA2msWhv8BGzFg31niLTN2rtZa5eFxWs7xFYxWerMF8U8zaUX4i61LxFWQEQcZMhja",
  "key17": "PspQhY62oc3HkWjvPUYHGxgLoMXHpoySfdHkop8GuyuVYmsHeCaFacGNkDPpMKZDVoe6Ax6SMepfKG3WDynTGrH",
  "key18": "4o7vRFesP2bH3JRzEuXz1R12cZQYrFiwbDmTxNqVfjRcESCZJyNDNeN6PmUcQHhNDudnF97NUG3c9s3pBpNM4G2a",
  "key19": "4u88LpCYy1CpR1qC65SMY4nriJmMQD81FRTiq7Evzxw1fhHWmcXwCqoXR8rHWGCBQhcGcRm3gN4RyeqqpxxHZPgh",
  "key20": "2ADwrcGJbx8XWgXnSqwA5HuU9p5Juzx33wPA48UWBTMsgQWnXsNmKYZKvip8rTGMuieAbsn5zWeqP6ho2my5RGmU",
  "key21": "4TR9nfQSTv6mmMqYHMjs7cix6swWYBLt7YQGBZhmdJvg2QHDxve2qZpY9WCtPCKjejYPcpWT8PjrMz7VdiRstxij",
  "key22": "25pSNLmVyf5UFwnbTENRYWQaoHAi7GpYLhXH5GBUXdrQ2iJFbugAhAEvZrw5cpxKcbmTr2x9MzjuPc7kgQk2j1Zh",
  "key23": "5d4QW7QRsxJ3TMnEArzZLgNjVSRjHMZssbiKHs46mMgF3urVTWRMR96LZLQWdUGKAz4fUEMj8i3U5wJCa38Diodx",
  "key24": "2XSbFBX2mRUmSbMJWHQnv4T6x2DQu9SUUTNBSdTEzuWX8r1Wd2y3ERoGdjAPeA6t2VVtCu9kxoqxs5R6jQKafVbW",
  "key25": "4Sii49DKMiVJ7X55kZwPXPhmj38Ke49yuuwoWVPBXfHML6y2SaAfF9uo8YCGB8Bd7jCEYvPYpSF3Lq8mmB3oQF7w",
  "key26": "5oZiskmQupXC4WjCCwQK3c4RbMLPqf5GS9qJBfk2F7bfycZxz5zm5sYHZjqRtHQvymfWiB8rHjJ8RYLeWyg8ewGv",
  "key27": "5YDTMJbVqVsHxUwQZpYigLCaD7aRxQdoW3kFNK1zn3LcqwpxfCyJyvucSu8VVa3jT2MBGh4s1U3T5PPU6Yx1cnsE",
  "key28": "v9fafzdgzPu6NrRE7H4z5HjVRrfDPKP8SSWJvrnLMGW9c5YhbuuonkX9DbsmTMZJ1gJkjKsWhybJawyxptqDfCh",
  "key29": "4zQ7ArbBZkdKsWECZ3YFqVfLcLq4becizF1JKpaoFmHUyoxqdGYE1rNTq1rgPHDvh3ikVagKwrsxisniBLQiH4cr",
  "key30": "512Tpbo8ZyU5CRcwDn2t2538av2paZWjR8ajK53ESnWX8Lpf5W1cXxEKPQVxe4ziL8nwiTm6DQVvw8ZM1Ndqg2Ni",
  "key31": "5S1Z685wQ62nKLPy7bVqWicCQuChQomPXtwL9RA1Tco5f6MvYx6czNkhQfAxxwZQz9gSFknTpNLCNwFAe6fzaFL4",
  "key32": "51KpDgu97ZmMqMJV1KwFZEV6AnMNfRRrzox1pssvSMvWiZ93n57ji5mGxpAVWzqLu4Z67auFK1GXT3jvtadRXGPq",
  "key33": "5m2RkYW7cKhCFDukPFRguiXiHzVcXC9CMHAaqvuygBHijCaVpccwEqk5YVMNsk6fnoG83ufpcAHqSbCF4eoo4jU6",
  "key34": "Rb7KJxFpQWi8oPGq853hnDfJ6on7i6vooJ1EdPmawQWVf94rycfYZcuhVcsRE486K3LE82pKPP7qUMu2cDq8ScN",
  "key35": "2WcwvFocy4STAreaEi4hiMPNWNAU4MfoSZruBUc5i6npPpQNzKNUVDyWnSCkpp7cSTWvyeDmSvCt73pao5oVa2uV",
  "key36": "zPuuZxvPx7jzQY1EcZFRPWArePAtV1f57FYtXo93JVjuA5X3eGbNJLF75rQjzMHvH6t3AzzN5Lx83ftTTJYv7vp",
  "key37": "5FRSUi9aTLnEZThdCA5iJfDJRgeZiragjgLiWkE6iXAC5da4FZp8FgtxsmLaCBEjCboCNJnATGzxmaVx4SaH9Ae",
  "key38": "3pkS2361kKsugki5uZ3KcqY2y4DWt1PDK1HxXcsVqRwLJfLMMxCzqYVNfvqNVc4TNsiytfwbhoUZXsepMBmWXh4Q",
  "key39": "63PvbxxpNp2vFwjEVozds4uxwBALx9F9JkG51wJY17KzFrwYgK3MW5NcqugHet2fGdtxzZjh4RVWvUeXux3jsvpv",
  "key40": "2aEH9sWy651hqRkQZQpAxFrJYamTZwJaARvXzR9SZDhHmY7NreEopRR1FxMggDrf1gaWUPc9f5N1b74vV1zfD4bU",
  "key41": "hP9wjHZG7kAvGMrAQ6o96ykwNhSGTCDttDV9Nnq9DGm2LAiMh7CLwhNZXFZZLwf89iuaNUD2DEUoqoU3xmNgUeQ",
  "key42": "4nqLVgw1cq83gwKZ15NfoHyb3nmAz1NNNqTD28xa3XJY12mkP9H7M8sY8MtrvaK76KyPi4hPGU91SeK2D7ULjRHu"
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
