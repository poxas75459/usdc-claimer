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
    "5Yjm7sZtBzrGnmBvUoUtd8x4ASjvw8Pu3ZQyxnneSYPAWYNuxSwinRC8YNQ9HRx6BztWygPBqiWHAm4Rxuwa3Kd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oCZ8W4MzHk5nE5T5tywUSKk3cwbEu1gXdwWFVcRaziynMncUXDB6ZFiAxZqeqDX6KNHNZ4X2jeqErtfyJjdRrSy",
  "key1": "4oq3uwoKaT3MahzKWQ7pcwBrTFWg2M4nL5QE6tfPw69uh8E87igd4AfR4toJsDys681X2rMPSpdJm2LQLGW9Tivy",
  "key2": "3b4j2LyVuiaE1FDj6UAJDj7hxuwyXgDKJuWSfeda7AzJJFXHDVQKVit3iJ4VDDXA2hT6hwa4EiSkVN1s4iH42tv3",
  "key3": "5NyZL1zHYGEjko2hmcx5nGNgwFemnabYUruhZB7wALSRNT2SoyLxkMGDPGootrZJXGisFy9CjBZddH69pEQAFECL",
  "key4": "5dwut6ASKeGtob8zwCVXv7q6w1E9m9Jm28hQzvXntBFALZjaXz6sWfc1Jfo1hQNMSLodQor4H4QayeiRopxrgu2F",
  "key5": "2eEErVq2QgJqacGMmZFsQHAdCJeKJev1TQkfftcddTu7xwLN8GBfqz6N5n4y4dkRNaoeA5hdFQCDnToVnoVJSB8f",
  "key6": "3MeVu694wu37qPvWd95NkHcr75FsefV8dr5AF3JdvfdcYvkccpGCj8LDRnYhSyqPmMUtsiRQdQAVqRDHFEkDmV7Q",
  "key7": "3i1Vny9FuEPJ6ig1t35Edkz13WyAQLCJzwq4QE1xt7NpfojyoX9NfBHHZ1SJC7E8VTpwUGBVetDdwBZjj9BSvuLn",
  "key8": "hDdc7sg5zhuZzPev25nuNtSvY8xaUYeH8grozeMjcnE5Y4jsU2bMnNc2bxktsR3EvKzLPmwnwHXEqWKQESpvsJt",
  "key9": "4D5CaThR9Fixc1hAHygZFkuvjodjJnfiXxj7oEcUfiu28naYyDMvzHPC1qZoqausMVDgPMKhkXiMkoHxFSV3uYdA",
  "key10": "2KDEK1XUH2F2Ph2VbTrQ9rAe2zqHkxjFgpykrgaeFnTg1WZeukcPWrNZM5bpoesTfXj4UFfrV1HEodsUpY2Y9tpm",
  "key11": "5xHoWAD7aexU25ja4QKQ4KzP7sMHANDrsRRv7euEutUVPzGixNdMQSHespumGt9r3iXRdTHbNpynzHEfyQoGUWDW",
  "key12": "2FLBjmBLznkiUdMaJ4FCHxvuUYphJ8JYgaVVDKgu82Ct9gvLZk2GNPmpCB3pbV9Pt3GJyBuEbfbfpDaAUxnxMJKW",
  "key13": "2yHAGKoT42pMe1Y6XuQAaXuYK612dGEYA12dtBw2FbtaWs4MKFztXdb2MBxKouBFLvQZHBdc3Gqoi1orVGiAQ8Qj",
  "key14": "4RxqFrT7v8UozTPFQMNYrP5KcaGFvwdaVaUj1svba9SCYXKBX5TKfULv3WqKQnh8vWN9yS6VqsGiv7BhsocWsm7L",
  "key15": "4DSm9u4A2inqNFF2KWFiVvx2BQEDGnsS1AvzijWyGqPDym8SuofTcEUZ9b2jmmhPeAxTzCssisGnz2b9GgCnduLX",
  "key16": "36q8ZMSEQUQaWqseSaRFRnst9bEqw8r6LzQdcbu1YqpiB4A9yoAGxyZdZkmTLNGj2igPQ9uLRnW3ojayb6e6KVhv",
  "key17": "2B9BuscirSb51WwZwN9LnfWYcVs388UNyMPVeCHAR1zCNjLhQMLwxNpgKUsKFZ9ADSybPojDJFWHTbJ9JxDEP4qz",
  "key18": "yDz7URSMW37gf6UUr9MZV3DL3mYXrTB1pLpaKebEz7fWGftnf8A6ks7CteojwR36RhEvyDHAHtaSZ5eSXgVPYcu",
  "key19": "3eYEPc7QtkZhppnkcgmsJECiiM5Edvfio9wNi1o36ynVTm7RzxvnfXwZjZZXoR7QtN8p5UCp5AGxPuRgh5MSzz42",
  "key20": "4Uosh2Xgnr4uk2dfJf1hM978mxtPNfYooqnhyHa3MxUfDXxRUGRcr9gH7Jjh2Uh5VBTjYmTFgKprKvR34gDd7NYk",
  "key21": "2hN8mx8Fn9Bz7k1JhszqimzSQ6D8hZZ33XoxDBazg1bnMgc2inpBEC8wupYYjm4WAshNVrMvZrK8snCinwRJrvi1",
  "key22": "fdADiazGDgABNRLAix9MYjqLiqC6DogDz2Qik7ML5AasRdgUQssLULz35dgvniBsGAYVXmhSDL94BaWn8P3vB7a",
  "key23": "3rYqgKdRd1XLN6Bm5giM7LHe7oKjHgCEu29VoPw3f653UqjZus3CwVVt3HaunvJT1oFjc85nc1ctA3XB5UwBoS3X",
  "key24": "2kKgs9maQLvhS9sYs99vz2SnFsR7QpEwrcgb9Y7SUH94W9XdaistsJ9qQGXByVM6wFDxGkTEQfBDX4pCWE43NVNx",
  "key25": "5sBZ7JCQ4VzJEptURk6WLn4SG2voKMphPg2wUKn49GdpSfgCvXszwrANJJAh59jeRWPnfuoHv5qcDKfsFU4oZjzU",
  "key26": "WFwLpjop9CCzh1ND4FkcmbCajALFzN61aSF2CUTasr9udMhcDceTnrvsm4QF3UB1f22KM4DDv4KJGTohy34CdrV"
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
