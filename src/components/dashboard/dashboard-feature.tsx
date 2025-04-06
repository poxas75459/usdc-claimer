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
    "22ptSQQHBysb3iWWF5YGArok5Hohk3N6cif4vKayQHiC8kz28MYGApHhDsca5DYuxWJPiVnPnLwnAEZBh4j6s2Fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vMki6tD2p2G37TA9gjCWBoQVQGwZHqvM8Wze6ngHy92kd7dAWyhMuyMGBGpSnUTD15iUbnHr8dDb6zXxpzGqdXZ",
  "key1": "2XJj1AzkrSjP6WoLcUoSSqiTgFxkYNVmJTo87XFEq8AsBbye4iNiCQ5smGhAbEwCFXjeWqcCK8cdjsp7f61rs2WS",
  "key2": "2XGjm1szLvSTLfXSjYng7Kxe528KWbvyyVPEFoULCmQxiSNARVzXc9SoPsKB5KZwZcHH4q8yCfDi7EJRHDxUzaCm",
  "key3": "2N3qVRbPAzrwj5pabbA2mwt9ozGy4mheDoqo69UH8VqfxYeuqgM7RrHJsk8B9bPMYEgmWYeesq9eUPtNBjpqB81p",
  "key4": "5oLVN6ABm19DXKyaUehGdzQjhjHc5AXe5pPP3qG1QcfM4VXPYD7qyoJS4kM7n6r2Qgq9bTkp3ozTrAnaenNWVkBD",
  "key5": "2VHJigJUNszzKkPtzftPb56EJTbFFq2ptgqQe4QYCiBXe2anpNJLdCvDxAQqe8jvt6vpekwrU7BS6md9EFUBtc47",
  "key6": "2ccwKUTZBDXYXM7NpD2Zv9Nwk1BWQzKsZqndYyfKjfeqpAPAdT6wbLjUF3HipeXR8turwLW2shQt6Fepf5MU2W1h",
  "key7": "4wsj6MHVZz57LC4sgtPJXvJEU8zacztHuAaEFk4j2jKp5igiw1e534gkW6Xq8s4WEMzmM9QhoZ6vSLpnzRiF8CmX",
  "key8": "34pW7pqYDciYodQ6KefGXY6BngJirtj5LUGTmbSRkAP57ByEVkNmi81DrH38gneJ2eXELBmteGUvaxBZiGAoR4wu",
  "key9": "3r1vuH81XGvy7Mw3U1EuLULU3DYSx4ibKb7VvYfXrmSmz5pNWAtzSaR29MLC1TFWR4CWtcECxBWpPGNeK2diq9AF",
  "key10": "4tfy5rKS9iLgmfhkqcCKwmK3XAR8HYTfbyiyE8efdmv8jd6GsCpD8KfGeADB1fFYLg4VRgZZqohXsMzHwQybYFno",
  "key11": "3tzpCtd2yCaECHXs58YuSV6v5pRhen1bhAnzpC22mnwEWmKkKdvs3DDSgqKs2ZsqGcgNPSkLasH9yKhBPCzZErui",
  "key12": "5NGZQR2xuU39rrNAVjaQtBJ8HAyXo6ALoejXP7VbKkhGewRvjppscWhU9SoLkmGT7zhQpDj7bb4hmmxNeCnwwNvW",
  "key13": "2TrdTgdQRqeaCrJuTzkN3HuJKzNCTdvJMMhhKoTFfiZn6jWsnQH97fzTaMZ6PfRLo9Vcph3L831szNibNhBxRYnr",
  "key14": "2WkGf6mXSJvtHpdWtTpkdjf7CRfguZatyhzQbs1RL9JoaeUbfxJhSbjvU6UtcFf99unZFHfPFBoii1h3UfDMWpNr",
  "key15": "bSr5eYgP2sJ4fmdPREgGpxpU6jwRSEaFX97SLgQzk2d7wnvuVg75GZaDYphjERkS3DLaefsyggQZ7xWdCjKvDH2",
  "key16": "3Qp6CM1PifEVMEqvThGzbZMnYscGKN951Vcw8BS1k85EqZR8zHNndLrMY7v5qUR7Awp1mKN2pickZXqbUSP7rogH",
  "key17": "5FHjXsRtyMwvxFtM2WiqXm4v5BvmeDCRuzwugcpArUhBfcqmrub2CPTuCKddzW43wEYjxMKpmEieXCe4BgrxRk5s",
  "key18": "4fH6ibTYmeXS8awQK7gmUHcMbhgY8d9fttkFiso5dQTRXeMk9qfzZCLrBNfVkRwyMCx7uewDKavqxaHpjhdYX38p",
  "key19": "Ykwm6CZkdEXrgKGYsnLZNvgL1DEEuGb6cGpXPLXkxQRxpX7FcA7hy51MxxqiQoAPidaSqNybBbDMkYSbe8Jesge",
  "key20": "5ZebeZGsndmVNqATCGiwC4oL79eQRgqnRAKfoGBYDTv2a4NabFDSYv63CYnEwrv23xwwBUCfdTq3GgTucsFqtW8h",
  "key21": "5QFaffT7F7a6HoudwAS8xG56kobzRjVf7563sMJe9AMoC941YC5oSojVj7iL6c4Zr969vNwHbmebgqs8jJBmjszT",
  "key22": "3rKUfNxhBGz4pPRoD9ZBKSCABtsnVv26pYhbzR8V2o6ef7HtmhwAPZ8j2j9oMnFwsntsweSTd8hbcjE5acDRrCL5",
  "key23": "4LfW5aopgpx175iYtYgWxGeMj8YhEPeUHuPAVhvhFuPns4KWoWMzoZ1sEcQWBN9bGCZeGKwNr57hYH7JkcdV9c6T",
  "key24": "56B9BrVdmiptqcTnYaSCqRxv3rSEZZgf1B9hiXBJCEJHsUGdpB14tt7TZVVxSYyU3NSDxsbhBf6eNhUY6DugXUno",
  "key25": "3eSvoSk4rtADozM9yhaeeAbAXdntcis71DicWT9xLvNZQPcaxN7Cydh6qoRwnmxuMXxHrTZdRkbtFMXje3W5d92r"
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
