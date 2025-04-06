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
    "2rGSCycShFxxJwLDVUyps4hHbGhrXbj4GQsP1wK5t8xwsHVKEt66Guuy6Z1q1Li69fnJwVyvZoH1qu3VE8pm7pbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N4gXkUiZ3HBrBzDgf61GBAHHxKv6qc1Sxthy6g1Wfiut9FX5Y27i7CEXetBKRdthEBRfmC61BtfEw4HHLJ3ion8",
  "key1": "4LNNCebgnAvx9Rry1u6zh7pyk56v3nyutiXYev928o93ivrx28wafd3tTdL2fzfKGAuDDGoKfu9PYq4HLxkrq7NK",
  "key2": "u1qo5Kjnsr14hY9Dv9QkWbABSpSFjk8Dk6JTzqTxN4GnrxqQiGu6FTykVJztHaNTSydkizahbdKUfK3GNoTvwSq",
  "key3": "4zgrzxHf3DJaGVYCYNKKaAogHa3UBLhsR7RrfrstPHAjhQLV79vVXq4uT5Juqb7bzKHHhekPK2pNH7jbz5RQRzun",
  "key4": "26DVGtM5DACQS2EosM6sQd9PGu917ChB1qtZ8DsXeP6nRDHDobrtSHnEEBapDK4Ue2u5u8AsVn6Q7ouuayxdr7SE",
  "key5": "31oVqHPTcdwrrmvYDcK2DXRJaBVPGKGdXXeqMLykfLDbTXV5GKLRNrgH8Q2aN7cundCN7bUY7CXteSKp6EoiHDPH",
  "key6": "bovtcCNDqNLStEmr8Q84QZvN4WLRFMyXvz8w7MMp7cBYFmYzZt8Yu7K3PHELrrr8ca5zusWBk78S5dqsLsm9R21",
  "key7": "5622ULNiTizb8LXdUJfsHGzjTBy6VkmVDJkG4oGVpzEFuk8pBT6NHtjcCEEfaVBCotQYNza2ACuR2EhW9DXtLD8Z",
  "key8": "4pWTqdAev7cSytwY83M9jAqDJNk6wuMwSGDPd7GMyKmuCWSvec8CYSVvQshHMvGb9jJo3X8493W3BNrxwSGrfJTt",
  "key9": "CwbNmWoXxppsamBYbnSjfTpkLY5QHy9ivVkTX34SgFXhhaYPD1aSDqK4XNhorBrWfcCdz3Tu3ZuKCKXBcDZy9Hy",
  "key10": "4a5VdmbZhYzvg1PvxeiQvqFgKmTsYRawzmtG91BukSqPxR9mSLZNtLQweBewkXozvpCaPuKcdHeZerrNafaz6tZJ",
  "key11": "21bxTh3UKuGTHiMkYW4DTJDDNNjcPr6iQH6vKgWsiCzuJ4brwESCbyoYRpJSXYjB24UVSM4fWtf9zqVWWGE466x8",
  "key12": "233wjs5CDyDdiMBk8uj6H2GiFeJAsEaT9BFzcbprgNtwLhtDwn385TrXQd6DmD7nsdqb7zp7ssB5NE1yqAG7H77C",
  "key13": "2hf6eerMFbCVA9i26ZGPCbD6v4Q46n7LkdSvgxgBmvopZ6J4mCoVyPzxmjspMC31nG7f2e1BuaB9NAwFWuhdCoum",
  "key14": "6KGAUU6csF7akCcPzVewMDFrLcPtpcCQsni5iHspd1eYMUNPvd4YwcqxRK35VWEEBZNrjr98y1ysb45Y8BfjnMt",
  "key15": "2Q4PEnD8VrpyfRTgH7QxScXHu1PpgKo8T8p7i2vVgs6bGX82uEQ4W51kSzEjEoDqpK7Zv7s27QgjFG7DP5PcVsFQ",
  "key16": "2SzZNKAf7N9mus5VPdd7rmURZq6915tBQ1mM5gZwVg3UADnns7fRcsfr1EMeBY2qF1WJ6f8834HLtofpDkF7cV6Y",
  "key17": "3Ly6HJ59q7fNbfwDLAD9YWPGLWCvtdSuePN9XcLazJQ6jiHkraRK4EJtMSnP11mAeY8B2a1jUHar4SrzivMyFVHA",
  "key18": "3aGNhFsKMDxNMLisqrh7NgHbmCZEJtduw7LvgD4BLVNkwed5UQTzyDiw1S1vPPPq1SV8kTvx3L2Tv27JubsaohFE",
  "key19": "56Q8Hc3Bj4NLHwYkUUb2zUsfaMjMeoP9QyzaRxBZUyC3p71sKmXoiaDB7XxhqRqZPSbKDY8Lgd6wCPznXqP5Gq4U",
  "key20": "4VyYrMTwfKJmxvbmCy9ACALCwhXTs5sVDst7ax8MQTdBLvqxHDYCEMSZmsANLkNQ8FtmRJ16xVz5nhVa6AWtEW4o",
  "key21": "3hLwsTc7TxPgWkuZvyYNnWSnixFmv5ghTxFtfiAxvhswvUE8iuQFT3TP9on9czrQWhyNV2T6hD7Ey7v8sr7C8Xaa",
  "key22": "4D2tYWw1tc36yNKHz6zH4S7rxyAD3YPtXM8LB6XuEiHa2oLnsw4NnYQD4Bb7g6XFM9F6svcCYhfLxkDm6ByrsCR5",
  "key23": "kL2HfYoez91GeUne3XuwXYJ6Mb4jqC9k1dnCVKiP2ssnoywcYzF2d9GdULJW4w7Zq5FaY5jeoYGhdw5LqZV4wAD",
  "key24": "5aqVpw4qdCzy46fonzSfWZoSa9pTjGSRMn4YPA6n7fhrcKNySaGK4MMR2bxfXc2c4E24AzN1RAkajYFXkEQ4H4mC",
  "key25": "288TMBDaxiMBMdiFwBr7stA3YbdPFD9ajYAYUqf7csRhWvbUm5dEZpBg5aGfW5AsoZyPxA64ZVZxzZp9dqid9bCo",
  "key26": "46biCXkeFumUAxgf138VRm6mn4KKaRCkyCwsqhukbw2NA7JG5xWcDjhKjrzVMRt5C75DjzyfwrDVGXgtEHUc9R74"
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
