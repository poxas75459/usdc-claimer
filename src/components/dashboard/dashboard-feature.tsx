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
    "5GgP5SD7g78i3ydc81LuE9c33uwD7hF6syTAdRMWTYg4QnLeGBKk2vR974x6X3FkaaLfYGCdRS6WfueDRXjXeLYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R4r7WedN4nsiwRQCN8LfwNWAE5vLuaTJPg6iHFsEvKh8hVUngDT9i7FETntNLxFk8m5CjMYEVzvagygczb7FeWe",
  "key1": "4gndBeWYUmU3MhstQtRLzVs5MTuj2mDeM8Kfg7YtdXDzKbNArbYnmuKKV5gFHum4wTQpmb6QjcjETt9SeqmS2xmF",
  "key2": "2vtohmstNGPLLqKBvW1voH777cawcANyEWaHj91xuSEVsFCUT8zK1STXqQ8hWPwBTXojDaJLT98hFjcrrNieKzgV",
  "key3": "t1CsCag3dvUQfuB8hPkv3csuroR4svHcHEnTAGSk7XVkK1iYS3yErxPuVQSQ84dwtb6dNMnddnqFux2uvALNJED",
  "key4": "5ZwoKwmv4MdT3Bt1fZqAKZnVtEtgLjRF336Asf3UNaL6FmvcAajQ5mQU8BRoVnguDws9AMBAbvTTXmFWGEyprEJW",
  "key5": "4AgWmWuHqLgv73eYWCYuypBeqWJNE1ayB3WWr9AXJMFb8xR7ucnpawHf9ccRz82ayFgKeoepMazajWTeKGg27oR1",
  "key6": "4a4f8T22k4tPQpVizq28m7gG6z2Ju7hFokQgwgwKYXLHHqXVRHaBoRDiRrdJ5dmgF6WtJJCeceUHejPm5KwPgWtV",
  "key7": "TNB1YN4MNXfKmWbEE91eKAGam7mraAsWYizcudEjJHUD5D94cqYrXmRh6L1NSCWgoKd5qqWS74vanTkTK1fii2y",
  "key8": "EnAnXSDtiEFrY2SQ8ovU1zCKnLi5CdX7TC8Eyzju7h46yWSXxgqAFeBoEjX6aYXcH9333eusR9xg4t54JUw844n",
  "key9": "3QfoBjsUCHFJ34b1FGRDGE5Zri63NG2zn14KsGWMkiMjuADpjMvALQiLKZPgUkrTk2YJBh1a2G4f5CHk3EYJVkwe",
  "key10": "VFa3BAkBh5kraK7u5i29scQrN3wBKPdHP4pqRMfoQ3uJ4cJ4jjSdbzoJHkRFG3dTj3mZWtNNbkX841CJJYMM66j",
  "key11": "61DiG8Crp5cvNVdWEhtkZDb3TCUEx5Zph4mpidiUUG4wSwvABLc2ZnacKPfvXeQaJqoSzNWJ7LcFDvPRkupjPcj2",
  "key12": "2GyivMQMvTeMqwC25UFjEmbbFvaYQtXQPUqdCpPKqCTFF17tndgLcmPdM1sgina1E5QYSxy3giiRhfLVddo1nrDD",
  "key13": "3QKk55WTGrw12NB692he7KAxYAJBnRhYwp1oVtWQnywqjxUda8SKn4RagVexFDw8tJwxvvtuUGmtY6DzmFtkpUHE",
  "key14": "4Rs81HfxBSMEZC6RZYbq1WtYdAfqjYSaVPt5GvesZECoZJKq8ytmsYtLbRcynqwZYjPEKWktmxZJFGmMk1XkvPmh",
  "key15": "MU4tbQn6Pupb3uLtbTV3NrKGF994RjjvEHxpv3fRKxZ2NksXFd3UpG1V72U36zY7EPPnBwbV12s52cFmADeUNpC",
  "key16": "5U7W5ypNgPFEM95XtkENUst7EszgWteeqeBC2Lfshnubxsd7RAw4Wa71j1cU4iic634CNFJHyiS3T22FU9eeYy2T",
  "key17": "2mPhn9pQgZyzyuJFQa3zdPCfXSkkSkxQHNZSAimyEXeMFdnoyFJCKZiyQfc7Sr4D6BLi5kqAiRuyAhasJvJqZFP1",
  "key18": "ABtmt4Qzw9MQR3zFKEvLPA3e3ApniRS3dtvh6LiUQPsyYQaqbAw9kNDFhPphXk9umgB4rAodyBmAVr2a1SrpUUP",
  "key19": "4EYJVW5wqtVZd2BzGMQak7ryiuDoeabKL6KGvKqifE283uqmo7otMaqPXr1MeT97fQLwwTZMySLY28PHw2mxAJUb",
  "key20": "5hdGjGm9dFHRbyMrzzqEKXE8dnNeUfxpMVuLoJd7XSwuwfDbm5VZREAR71s8SmZdeviMRgjGeqKLJFUiT769dUbq",
  "key21": "3xqS2nMss3jtFizLVPv7ybDDjrSVuUk9THuZ49s8nXNeuAVqe6CoY6V9PfFmtTUcBaEhnfNCAGazfLUwz8ssWECb",
  "key22": "5X3dU5RiWzWwhYBYiwsjk28ZsT1JnyeVxvrBwX34T7YFBHdD6uSbMcgWHQ6zTDH77xZYpm3FXpXQQQXtqqbxZZTA",
  "key23": "2f91Wp45ZPMdAPwdrsRBRzR6gsiTjU9tZZWYUV34m1wZm3M7Tm6wWhjMDR6UF7ZNYN2wuLEAeLL5VfvEesn4RnL2",
  "key24": "41BwqUT3B3JKV6k68R8dUQFUJDqEXGamygaVJfkLq3qm4XJTJzWWZZogm4W2mQwnLEPTANeYcSiJxNt93DYfwcaY",
  "key25": "3Hdj5FwKChXn1GaXhqvddjfY9g4ndBfzNe7meUzQJSFPUmg1GpUgFGdCMBKXfjPzcbYw67vf227txwoBfk6k46ax",
  "key26": "UPhuLgcoVNRDVE55i4LMCnNvvizvaDtL3XAhuvtsgT4w7ygM8hBqBv6Kmc6o56UXp2LmTWRtbKNpHa4XU73VtEm",
  "key27": "4CPck5XdPscMzdQj3nmTLXTRmWGCPAyh5CxbzxEwFLTHXXeL4Cy6Ck3unVKkGN6TnvyBSTgKErBHZqNei4QiPQHc",
  "key28": "4f2a7TSW84JA38cU54FThdnwKgXaR4ETDy5R6LJmiumBsiGCT75vdH8nxZAE1FexnbmKtneYM2kZrVWxHweHQTns",
  "key29": "3MDh2BqxoJp1CibD87VWhDN3zb1nzp6bUZziaVYiqwXEZM7zLZyMUYLeREA9ZgbWijosdQo7dG6CaHQAexsYFVxV",
  "key30": "2MAog1euFRy8cWbvwny5xNjtpCehbvLtwBz397CMGTE72yHFMJRDKU2si4cK3AVhwDNHQP6uvW5QXv8SK8kUTJcB",
  "key31": "4GCvQNBomxCFdCQVqpvEB8tmuqoyNc64s4JpSE9U2SJTxWbtcyKsjFbrvkGL98HomJAvtHuZGvdmSSPE3MGRMpDi",
  "key32": "4SuVQMKiZ3D9XknRtkMfvULur1SWeXZVjiTsdbK2ugYmNMiXuZK9iytngYh2XSzZfrCNsGMvPwWNXak2JcJopTVx",
  "key33": "2WsxY9xnAbaFncvvsyPxNToED5B2n737QRA9PF9Ym132vBWbSDiRKRDtKFbAdhAFK7LGC3bYpJBmBucXHRQJLKNh",
  "key34": "4DEB1Foqt1L7qPyzDmzi8uM84q8eo39J7tcVpfKPsd3uUTRXsEtJN6aFuX7kFE2VT8SbvFa31TDsF5AhFkrVu3Rh"
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
