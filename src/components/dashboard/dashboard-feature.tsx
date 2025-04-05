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
    "5mySkS7FqqGQELwVdxnZFFfpZsiHPpXjwcUdaJ816NNAxLUYevX96pxoWEbfkjUDHfaMpJabBzbQTK946vfrCD1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WLyFAQT4NEY8eKF1JtMnSqzPgPcahzgrQ56faiicWt1RPXhP1U4D1fqMzmWx7duG2vHe5g233f5E7wdoe8hJv9Z",
  "key1": "4cub7oHbRygzMexBo6rVodHyBfTxcVF56UPHPXaF3jm5EM6aybLnqeB4yXrmmQ52w5kDagLpc4gmoX2ck1khqr3m",
  "key2": "5QiZByP88wghTvf45594KnL9c8Q6668uPQSEVmFuNHQXqKCZ4k5htVZJGEq9YVmRkZRdqnf4rLoAAk4VaVepmf62",
  "key3": "5dg5459zvZUenm99jPaJuQM4gXWuKAXrYYrA9jR58kTBDXmRevMwTbKvS1H9Wn1jHD13yfFwPBurF2Hgvk4wxiA",
  "key4": "3DUgZQXDwrn2zLm6cS4pM4yrZf4SKZ3Qw4c5CmpHmae7qr7abwHZkaDRat9FP8naPoQ5uD4As4nNdCnWRVN7xG89",
  "key5": "4USPPwwcbv3puucFBppPJeQgxnjoTrxZv31kbMF1tEx6Ewj6yL3BvTim3AguVJmV9sp8KTP3xqJXoRaPyYmWQw4H",
  "key6": "2o8YaPXGuMdWMY3U7suRkM3uYCxs6tkwdGiSu7GcEjJbsLt3MWc42CJrRg1Aw3ZBRcnzsZ3qfbHw2izNSpcm47TL",
  "key7": "2y76qV2uxJgKWnXkKJoL72QLLN9ZcxNedK7vAY6n1Rj7MzZc57wvvLa4LphCEFZpv2WXZN4eVgiww1zVbm7wWoHP",
  "key8": "2VzSFJnTeUp2hSG9JWPwbDeSF1w1EgdiHpiPHfyT8DHe2fcYTRVyVLNGdeKAGAEv787rySRdsf7eu5E4BsGPVVnn",
  "key9": "4651HRVWfZBD2LhiQUMP4z87tDumuZaPaVtXeXLwJpoq6C2zxsCpYjdDHcxHDSs71PaURhPev1qoGBYmHWa9x4KB",
  "key10": "ukbceTkj2BmvVxtv6Sjsa6hptV4irUT8zEiMexPuPxv99SpSHBgxKsPHwr2Rosojp1VeKpp1T53mr5jQc5iNyFG",
  "key11": "5omEcZM3msfNGyLUSbSj4xc3L8Sb3bPiHMBuFYTi2MKEZkt6MMqx1B1goH6uAkP9yogng3GEtJ7Cu46n7PdrMfZA",
  "key12": "4fsJUd4mysBcp4hFCoBVRgpy6M2vqKRgoSMRbgUrRrwVQzsarFUGxipokeYAKqt855rddREudEyrzmRqSrqPFAjm",
  "key13": "46iwUShZui8uzPtmwTUTqp3LAqXchmXJQEb6Gbn5FMC6fKgDyyobBZBpeuHfYDzZohqT8yoipGuYiRnWsUwusPGg",
  "key14": "4ZyhiiinLRgJCZ9fD9WpMLHTAKxmNxSnFg5jckBTNnzDDeTp69H9BEwU8AeoNc7XgrPw4JgubMj58y7iA6YUTCV9",
  "key15": "3xC5MTyay825ybo9a7tvyKmj9jkNySBkJybL8E9hHdwoq7XwWwH7gNbLijBDLcceZnAxjCS61paDFipsxWiUVoVo",
  "key16": "5v57szc3LL3JwktEtuQ26aAGmQ7BGQiF2zZtSnmMEZVpDhrZQUDdFy3Q8vFvRf5i8y4qwaUXQwLtPY9y7BosAQ3X",
  "key17": "4DEShYKNVVQnfaMPKUpp89Cres3qLarZTEkpbcLCc7a2nNhxu1u5EssdvnJAMz6d3uA5UkS8dExa8ESPoxMncqba",
  "key18": "5XTZivAJhTRn48i1sjk89sb5yqLqCQAvCJqM3qeWiAY2WDSNs8HQtkPqWK7mXewpAXo4mHu6HYnPU2Co5q2ztAkG",
  "key19": "3neXHJcz63dqxQbguLvQCXxiNVTtGxvygut8hQQts2vDtTE7FrHWrhr2v4Mxt2up8WLVhjdh5jetWBiCYGjUufxv",
  "key20": "5QGNBdUoNNXHGY5NTSekiVJNbHtNp3FnUfWFEfPC6R8WgCaVLHyVyXk8hXPo3X1DfcoYkGPmyBTcPKnNth7kTjiM",
  "key21": "3hcAPv2cKBCvJYyYHFvVjxucz3788Fvqt7iZb1FuswysYcj2eYEQ2Np1KZDmhXHuhHfQUiSYhYaEw5pkvZDRyump",
  "key22": "3WaRtYT1VGWnL9sh76Ufgx7ac9c6zRLuj2GTtHX6SDaFiaDcS7QpaK8P2pH1NXKawoLcZLeQky2jexbaSSG31QFF",
  "key23": "NZEsxCbk2kPLa75DGbUDP3Xv7ttrKLxYm8TXENPFChjwKyZBihDz34q2PPfjksjdsZYfcubg4fmM1QpsZQKDT1Y",
  "key24": "4aRkktD2iGGBLZMcom2KPTbZTxJJcEcS1moGGdz4xKoZ33YV1jbgXaDVh6Y5AtozTSCnSMj4vCYZVnL8ZYFuCLQR",
  "key25": "2JouK1BfpkhL5QU7XB9ztLeXNyPikKPuBHmmbzm9ZpUTWMZAMCK43ohpocEudwHP2oNsvWn4Zsk1kBFFPyffpmAr",
  "key26": "3mLsBzcDWkdK3hXX1jffy5Qd6NFPYSMCre4ayJVyp9HNXmLLuSgNCtEA1YSRbRhfzQZEfaawSXzxTCygCFfgqmG7",
  "key27": "3nfZNt12ZJF5pf8qDrELK1cX5227TdvLLwhm38yvzFDbVji1puVvP23xSgUhn1AsSwTBJdZsMUjdsCB7oZWTP1PR",
  "key28": "cDRUQqZVScQmWCramRLhbfTnWyP5R9Qik8gWpgwsxYYmtXixwAy1TGqaoTqwDqy59B4bzVaS2TwiGAjWppHrpin",
  "key29": "48bv6ZwEzeLtDMgRxQX3JGQGXGfYbpFQnyZ7J428DNRRXD5Z1vLfhiayra4pePGMYywYUK32bnyUTfNzxpMzyK2K",
  "key30": "2qrnCHedrtZnYR2jpbZ3Z2TYL1Nufz972z4ZRoUuSmBBL2VAyhnZzD1mrWeXxVnQyzAfdShgavuTKR2cowM75LU4",
  "key31": "3S76vyyxGPfEX7BByTkmk7rrYr4u7CpHYwfTibmW3ThedSWppj8G3NegN8j1PqqSp5k3DF8FRWGv6YtSapZdoBQc"
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
