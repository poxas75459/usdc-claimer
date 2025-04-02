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
    "4MBPW31fEBrKy6gC33iuJqvxkHytSZvWzfvqtgZQVMUg8kcjyGons25vXV5vL7XTVV7ZMpEbSJneADXwyQimEXPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42J1cRBKouXuRCAPKip13VyPiiMfGZq3HutoQjF8iQRJARJJ7998qZJvfvwF7SbVVpLZmANQsKvdpifHkiq2JEFt",
  "key1": "3jqbeFZGKojN9jMhLe5NZuvES4Mh4ArC42TxMxDsNncj84KS96ErgPwma7MGSRgmQcc8xjZgghqVCP4ZAkMmyoEE",
  "key2": "2FNZfkSgkhoTMbjBPJKoUYZjCcfuiZ3BtzTZ5ReY8V7e4qS4NtGCitrpksqKXqs5pN1rxG4WDJ6XZakWUYvt4CPo",
  "key3": "38aKKtnGzFw9DzBHcprMb1b42CJaCMDuTywQQeb9kLKGDyMqEgA2uNK8J4LQ7WJRmr5dcQTVsu1jJpdoQG5nW1jY",
  "key4": "2VJzAt37UGpYZhny3fvgeVaz8fdEiKKr4wuaixNbQJP76NLEn5UUTtmGZ6CkydyDHGjojZ4whkascm6V2X2sSu6R",
  "key5": "5jGuB5gCjwjhHKu4TwTMtZycqQiQnTosHH7JTWFjGg2ZB4sU7KLvi4zAu8mYK4icCij2iQePbfvbyFeE9WcBpirV",
  "key6": "rVGFPndWHyAiFD5CiGR8oisTNGNTmm434bgNym7vNiK9Z31DKPrHQm66ysBbgSXNYDvTR6ob8VZZR3DNLai3y9b",
  "key7": "2hHNZTN9sJCUgdrkjcXb3zoqhPu9p89R7WgVNq3rLsxA6CbApxggD8poR47u2us3FpM56BShNLrK2qKbohHwChY6",
  "key8": "3BvJEv3cesxxBE4eQdstYDHDoftpmZYg2cDBrSm3X7kWiVsXR4ah5wTiear8hv51dqTdS8DJXZ1NqjJetBd691Q7",
  "key9": "2GgACHhMGT7brUDzWdnWD7aTDBXi8ELXxcdQLTcVzpYCjynNeQBzjf9f4rhqCV5icShbQHr8KeCbii5K1hVmWqq3",
  "key10": "4jeixreHogd2pqWT81QaMEp1AKu8iXnPgBeLZyPc2DdJ4TBX5qidHcWP7M5Mzd4wCgWToxcXMEomneX5DocZckVw",
  "key11": "3GJuCE7gLjAcQyhiFvXEoyrJbZJKmaaUESseUfxVQEGm2i8xGdDxD81u8CJun7E1f1P2sDdnzraadfUfsj14qDQo",
  "key12": "32hMTxdtpkq43Bsh1zq9Py6h4HgLUYLXdcxTMbCozwsFRGWyYNa6GyeQQ5tdvmYX6XewzFVjx9JwJyXssDv8pK5T",
  "key13": "2Q2roTzFGvDZ9pS1YQYR5p3opNrkU3my8LfmeXvH4fYN8MAkRixfJGmCHiTfRkD64PJz8nCbKRkKttXAQj7dykpD",
  "key14": "ALw4U76Q2LC7BSFCnjXnP3h6qPVgyWdmzgn2E3LZLsqPhbMvrYcNcMwNa1zQb96t4WT8wSZUQUMN9VNRXwzcnua",
  "key15": "3Z44MVB7va4CivUeiaXYh27NB4bbMGUisCKUKMST8DK8Q8VcUKkb1QMqb1cfWNLpmL5HD8kMtoR4YRgiApcnZf5W",
  "key16": "r1bxEEuRe1jsTk4teHo1viTCTBt2L5d3tt6ynUsh26FfBES6eXK16RLeFzQKDLhJvDABBbmKPyCv6Uz4W5z4i2U",
  "key17": "2vAiYciAWbkrXsaZfYvXtoky8Xnv9WzacKRDhQrfLurmahrz6teh7DR61JzU5GGccNp49QpyAQt1KHHu1V3BxKaD",
  "key18": "47tSq9pnRc3PhTQzEcPgheDEtrZ5XSP6QnaZoHBjLnfaNNzT4QfxPTdDA1SMe2tBhjaqCX2rpnf4Dpd5ZsAvW14w",
  "key19": "pM1cHhjVDcFoGgSJhUczogJrYmjg7pxgWgAUm442JtkRhYpaS5zVXe1joLFpAzvTq2KUJMXZwPrLF44rLWrgxSK",
  "key20": "6FZ3EufYun9u2bRBv4cYqQLvady7j4mK529fAbFexXdFQA5Z9mkvcPhhuvod5WcUeH6YY8pRXqES38xkvrUbHPg",
  "key21": "4PntVugaiBsBjhz4wE9cQKV5oiyXVpKSDK5WJuPL1kM3re4nC1UV1parxgXUnHRWbd88N8RD4CryfqtusSNE7BPu",
  "key22": "2gZvqCpwkUwpVgPFsmWXSSMB8q84cs3jXa6eN4BkpK1vWTyn2kBgYikvYFFZbHL3oZja8Xyd1tr6C2sVsWg1xpe2",
  "key23": "33M7WQPgCe9SpzMK3mX9yuUSJLXxaXrmezybeGMpbJ2TMfT4RtwbU87jKvv6mapYJuCiY2CYkR5SKacR6kLBvmn4",
  "key24": "4ga5BNC6oj38aBs4R17gnnuY96ZXupVNsG4QmihZ685CWBXpsnrUCVJJvUspe2w7YPXCWBmv5rjT1KzyEiY5qRQ7",
  "key25": "4ZLWTp4vNeRai5H8QczfFYjFgnNq1ipc2u6jrJC2DokMdDVNZSrGs7XEo8Th1653H4ixywnTT9awV1beR6DQ2TE2",
  "key26": "35Mo3JeeTKTYAUFLGLdg89F5VLRnhQPXbd72mkjDvY3CKYoBf1zcoe1GerJ8NXu4eNVfSnavDRFoWKfak9ScLTEz",
  "key27": "2Yyf3FZB9iduSAhSAQc27hgfpPFhDne4VJokug46Cz7cRbYNG4K3Csewei3xEjPgmete4XnSCTrz7gihcagjhWEu",
  "key28": "5jpddYzmpR9rwrbRkaczRndyNjqjWomJiZAmE5gEQEDkz8BhbCeWifLrqG77i6Vs4qwfhDSQdDKEYcXxzfsHMTA1",
  "key29": "e12aVu44UGB9hbUktemNd1LzVmcvETg9FbVqKN4mmZEDcneDezNHPfU4BTbwJYpthvTuk4yFpcfHPrVz2UYCGtp",
  "key30": "4MVRGXN6KiwNcZuJxjEKUgQmPNY1p9dvNXy1Ko6zSe5AMpDvCMQ2SARKsWdUGbTUohGNENb2RM2Wj9q7yqFyYbGW",
  "key31": "3DekJrHiqRtzhJxzv5oPQohWnPdSyCWibi7CMKtBUpm5bD6uteHBcz11qFRwcHQg9mREeqG6o1Xa12GQy5SUG8K3",
  "key32": "5FMqFpSiKdTXvj1LzQWcG7JSzcRnscNNdTKT5jguKWbGL4XMrWi7BHPrPvqBwRwuJAMSijSrayFSaFycYtuA9zqZ",
  "key33": "pULGN8GzVTje3XpKKDWwjZyVej5G7oQqk9ynqZmyGj2gNM6w11c7gn662CYnATNjW8P3R4hLWDkGRy1VrkbTitS",
  "key34": "fA6mFZeQ3gHkySpMgL1eSFrFsqdMNdo3itrJf89id9nmdbpLTWP6Gt7FmvxeemTQWvY9EZeCZejnVjFJeELVTxb",
  "key35": "45JQGhQErG4f1BpHokVRs88XPdYfy2XJvMHfg9h4QbszWK7EWNcrZjRCvr66aS3NY7Dzwa6VptXTBzxeovovSJNy",
  "key36": "YErPZW8m2uJPhg53twbXKPpcwcU4RWmczkSfYorDR5E2xELt2MZRoiPEgAeRc6DM1n8KZU5CL7sQFG11owNrBWf"
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
