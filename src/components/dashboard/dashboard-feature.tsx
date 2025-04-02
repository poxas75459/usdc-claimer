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
    "5qe5TVVKaNmQ4p9PNBThRJHaXRWN6UGQeLuGgb6G4ZLEyKrZnFa1ucL6YewXkmaSAJe3etXHgcpk2Tf3NvjAV7Sa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J8FjkdphjWucNm3XTGxgNvtph28sX2eGTQ1XDCnwL9XQTgvWz7pExBBns9C4PnSR9zDbP2ndVUonqR6338cWHtQ",
  "key1": "4SfUnh483cK4CrGJn4GzkF3rcThoFG7tHkcmpzuLDFqCR2jZ8SQT2bqEpV7UDvTwkzsXVfE6HjcPWSsiVAbxVh6G",
  "key2": "5A9AjMcu6KunrZiyb5QJA7cuGuERv1aWt1VveKvVroPoikAuDCnxKohb6xx4S91mUe4zewn3b59Bo1nmge6LmK9k",
  "key3": "4iSetgDScpKkm64KrFMtZzWGhgsPgUrY4kyeVYdDpYzfwQptpjfj1ZeQTqtSo6WFvnpuQ9CTGoWsjNSCTPJk1bEi",
  "key4": "4wX79VLmwpxmGChr9zYMf8PJ84F9cQreDhMgcjPdhkG8d9xGnuCovtP5CnKTUCdXmA6tgCKEMR2v5rNFAJhACKvJ",
  "key5": "36HqYfACSCztfkv6aoVoaNrsyHRsSTYZxsTDVEG2T43JYFvzPLKTTLzmHtNCBMz6ZUCDdgoveKUcipZbXQF4t1po",
  "key6": "3nEurTdgHTKYtsg5JJsLGTShuyda28T7KiaQAiSWpqgjBzbNQRRRGcaA2wBPdF6ZHpksiFaHLEDKUw5teagUwt8N",
  "key7": "3W1P8wBX4wHG2Cgpc83eNLwJxrJgJTkAMPCH7YuVLwFzXnkdbUUZRJWBCVn299GYiYjmNDo7EW5YgieXVTEZRbjv",
  "key8": "2KLPvNBGmCebymSCKbamDGSAdjzbbF3j3BGp6z8n7AB4Vy5Lzh4LvAW68TpRxVMf5DYidGnyTSCrnTMY5i1drrcA",
  "key9": "3yGX2wVhD8USSxHiDomJqbWUkqP8V1bpyVxmj4t1MDoP4HgX8YFKG9YdMeD6DjfEXTy6CoEQCgfgy5KHWAAadXFS",
  "key10": "3LPX6uo3zNWGKgSAa5RJwJXtvpPu4bQcd8Zo28gJdiQkmZJ7P1gQKh73p9LhSWsjBJoNci4unJ58iWMZ51DT8hmB",
  "key11": "61oPNZTnybWiAN3S5VcnZuToUkXf9xuFWdBgY9eTpkyxZX9h2oXWbsXD4feEZ9f1jMLTJCsqRgSEBeMm7NBTEKtn",
  "key12": "1mita4xi97KVzbpcDizy1ENH6U2cEmpjcscmXEyjde7mr5BtZ61Eey2QKXBU3CbGceBKW5GSP35bZo18huoXuwi",
  "key13": "3f2pt48r3kH1SzbyypW2y9muxu2vTfzwY2oYDAnQgq3DYKFEX9Mp9ahL73SGU6XrttwMamAmnoqhcGzmyufGFywm",
  "key14": "3knoirZoWbY42iEZ9yTC7DAHQpe8fTyZannNVa4kAXsQYhqk4eFzC89tEgQ2ZgVEwfvppHgrMcP1xcZx4WHAY2fL",
  "key15": "2JZS851Gid9152Rb7DFpDLEQcA4RGJo9aeLiWrvCpjWinZs7WWnzjbYxA8udbgRve5RFZFYdvDixq2TWSnAk8tq3",
  "key16": "ajPSV9QJffriohb67j2rtZFRcP4MqLsS68X8TRkmQj3J18kYFEzY3YXqWYDgmHhgR65LfizfMktLMTAE4K2JEm6",
  "key17": "DaGz9hvYdmH9gyerAmmGsfA76gG5RcN3rxsWWmhtWf8BeK7AKYCrtnr2w9FM8EyeDPs4X4nREqRkgCKC9a1m6tC",
  "key18": "2EeJ4EnF6jJC3qmEzvX7t9NCpTzmc3Gsei6MRH68WwqgCjG3cyycT3W1WWba1zrFsR8QGD8fzevu5HgKGbEBJF9o",
  "key19": "5dN5zraHCVkMN4cJrQA3sYKbPxFwmgypjAiXmp3BKQamX4sMmgXwcNrkRSTYpEkFRXoRTjq1BrnNKUagPfU1cuWL",
  "key20": "4iD4xiJyJFXyxeCk8Yx5MtHnhT68oRis4qWite7p4n9dgPgLiBfey2VoUu7PKLoxfgm7wLnN5kbuS9Gm9aS3vds8",
  "key21": "21tEHneqos4bBsBe1d3AUgtgvdKG37gAVdGMezNPwJeDeAnUhBofrpfdanFATMyQWCHH9hojq4qfs1cac7fuBCHa",
  "key22": "5GoSu4LF5oeFBVnKGqrMv85sFv8Lwx8nfs4HabGicTMAYNTtf1b2bTSWLm8KSZF4xwBRQPdYA2wF4Z1P2nugsch3",
  "key23": "4Jtn1N8VkL7tyy9vwHepNtWvuqb1visPMiBfnRaMnnGfujeZppc8Q8HmQovNYz4pBktQgYtbJx37oY1Zt1nZbE1v",
  "key24": "oBtX1uzxrbtpkyLBzJWZUKR8cb9dds7qqYtQivqHWy9hNV4GpX693fty9TsQqFzGVrHKKtv5NyGRnpkZQiQVNwB",
  "key25": "32FKsvhLUPSwkacREjKRJ4XMAqRRBnaHi8KRFKRPXrAmMo12W4nEoLvhWdGb9EDriiAgBiQuFzTiVWARvTVVXTVt",
  "key26": "2uqbTMC91B98876KVqk9MwcPbUeMS6RPSgtT2dQhrManibV5VN43Ayy6HphThPLzdRWYUFqRzHBNj2mVp2NNwXJo",
  "key27": "2hzRzr3urYxddzbetNeL3hR4XFTJxjqdgBZ5JXQ18ZFuNRCrwTSjM5gysSxEkgnXpeobJiWgCxezNcnQ74qZFCfc"
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
