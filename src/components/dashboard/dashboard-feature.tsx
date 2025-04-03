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
    "4GCcnVn8AALS8TiHKzikFNdeZRDMZekGfVxukKhXY82Jq2qPSgL1PWtTSvyR1ZGkJqkLyYxjewRHUFErswZgbL4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y4Pd389vH4PDD79ThZqbc8QLTZeu3TmiMDs11rouYWu2AYRAhd69681FW5Yx5MYL8pgJhBLWz5q62GuVYZQAUSC",
  "key1": "2kakaht1GBWHiGweseetMs1hMyaFhaQFqmnL73Mb13m2UQDpQ12MUFHP2YpxGT5CtGCbUj5Zz2VbpUUCRiWzg6UV",
  "key2": "5kfpXhBRXikB9ngsfSyMRxp28q8Tg3gKz7NMTJtbrV5nF2fBKsaqJcKMFPvEjnxmaZfobatHkfUbvEpLV4nKTJpb",
  "key3": "6X6ntWHQY3TzfPiSyVaCKqnGJpXBL3H7W5Ad8yVrtCEsNm3zKG7x7nCTjkj1v92QoUwGkAk8HaYXdTm4wMSdReA",
  "key4": "2Q18NRKAY44Pcb7ub3z781yNV66hw5T2pzKvPgjH6wBuAMqZGY6qygmFGE5ftfG1sBVD4x8hP18kHWEZLp4rXdbg",
  "key5": "4KcojEfeXWpbzM65KWXpdvX8CumH7SgSXjsdttnfGRW5yYogV6rUExHFTuuD34WkiRWgNGRyTpk7TZNLsEgaW3HK",
  "key6": "2voP9cUvYuS9j6uLqtwiunBKyE7A5mzAoszXHvSGDHoV6garuW3f8vrKLV153ELjC9SUH3eZJYdT36WeMeAAcAY9",
  "key7": "2f9gw8YwRQppzyRnVENUdPvHbBWXinjxkkuUnnT8vHiG71GMRw5pPZeGWc9MadQv5RL66xVi42osXGm2ByAckFMU",
  "key8": "5DyfAYvmkfz4wDAXawene55uMAq8y63Uoy7yZv1wkM289c1PpygjgKVr6raYihNAJBbYo3MVehts15MMZ6cQitkk",
  "key9": "4x9U99xM471znLcT3xNk2rWJZDzbDZE9QNZAYyhqoXhfy7u9Q335gyWmdHG2iFLJnkt4k2gkLRcv4MU7zyt7Zayw",
  "key10": "4PbS6aLUz9wwpJwM2sQcg1MdHbWATYhqJ6wbU4q6VEB4g6wa4TwF7zNH51AmspXJLKWzfgUv12CjWsQLdxY9W3SK",
  "key11": "3jQhUCu4HbyBv1RJFTHqeJfSydMaXaG6ZDKdz6mb8cBR7izirVcxw4eNLLXzU1hHW2erWBHYjQsb8smFTtFGMrxc",
  "key12": "EvMUa7rug2N1Jinw7aHU2gqJxMUtX5oaPKAaC4ZbhPJf2KX7vf3g6UUqxL7vU3xwRZCMFCJiVvaNewGUnti4sg8",
  "key13": "3wyMwcSjXcNKp9UYkgwUYpdkYrDdXNsakMFkyV7yA8EdTmyVweEmf53svP1qeddrX41ZRfFxUq8BSTPZq3qCtaz7",
  "key14": "3in4DRhcdXmCoYSSUXBuWGyfSAtaUCzh6Y95oJeQzyz3ZKUsdbwoXA8PAvX9F7N996PXhEuZ6y4G8yDp37245bfz",
  "key15": "2hJDfqoMw793YDwiPPgNL9hD2kWMt6W4QVqCLL4DNJ6rWXsw7KMgs8qyGKL7BtxjLHW48cgUZVu7UwbdB4LNM5w",
  "key16": "5KLBf9vNxdkW5TQnrKrYcg2vh88t2fxZBXSe2ora6coutXiR1YodAczsnnRZD6oh1ZsGmjYZdPyHGkrysBhNK9JG",
  "key17": "2weeTRkMVg743FmFeuyncFVWWydJYPqHAH93ue5PTH6ntTH4vEf2GzvxSX4TcYUq1ob24SwjEs8ngFDW5wPztSko",
  "key18": "Np658v39GoQRPSxBYzmVz4mpbnahon3upmCkpVqqK3uGuhxjxYV9HjrC4q57PAMHMxqAHCqzDJeEdFkTvrK3d7D",
  "key19": "33pGQbdpmQFr43QCGajqVZ63hsfXEk879PQcHMHCuGaHmxiQcWKXdXS9VY11z8Fom3m3UP7vCfqhtHEuLwDPHvaB",
  "key20": "HqKvAhDtPYgVHpE6VgCUtYSWFNHgZM4MqKAd5n1uvHLTByNuPPunbN1V3NkvcZtWkBppoR6wAQBQfbNNZ2KZg8F",
  "key21": "5GwBNA5hZCfsoS6XeDoda88FUchQBZqS1im7ssVBuRKjZhxDWjDx2W2gq32itJBaFseRF8rfLUWn8Af6vdvtuqNA",
  "key22": "4oXiCpKvCdCmrQGxADaPPEt8RXNZautPJr1exB9gPPz6t9xXWWsyyF3huRtsCX69LgMcuCYvSJiXymaumpWVhQSr",
  "key23": "3dT8KKjCBtfqqdT7RLrVGCt8972EwTDq1gNcDocH1w38FqXuKYnL9SvNitLFU34214oLE3aXpfECkmHz7MrSBF3U",
  "key24": "2mKBJyq1fa8dusCmRNB59iZEb6uhTnDDvRaRmQhggccCtoVktZagFL6zuP9nDLo6fX4sH3VeceFwA9Mrexq5k133",
  "key25": "4dqtGSsXUFMWshfKVoeJ795KsVTX8xLaxHT5p5PLNWPkqareaRdgLAsCKVquyYaAiv2nzv5aZQSMHggmDqmgEpst",
  "key26": "4SmV7AH2FmzSmm84ZGeie2CJnFSmqiXoLnVNhgmr8EEcZm2YrAHoED648eZQPHpAGfYnrBXDq1qhSm9xn4kdxgk4"
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
