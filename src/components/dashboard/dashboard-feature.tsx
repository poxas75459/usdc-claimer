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
    "4ChSsydUiFS6GpXWCwkG3eUR6B4cRZBzaNPRp8sTgqPXiLmSqKnjwGj1NZKf9wXdJAwrWcgSWdWvCCGMm8VFaCdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26DekBSHtA72xJMNr687m31EHo6LBxhfZRGSwSm8q6g4951svHQBiJwYSKLb3sW39JCCcbhPYgoWiJDhARKbeyrN",
  "key1": "5D9qFMXyuVzQKgbm41ndi69NdaFWXMeVnoxz7NK29sCQyeVn4wxiA5e9V11G5Gmezgsk4NmAahGx9EdtwmnoPkkf",
  "key2": "RBDP3pN9pK2skh6NGe97o6rCaRF8Q7ZSH9AWycnTSWu3AbUysifY5dxTMkBwERMuNJ681GnQuJn7YQJ1V9uV4iP",
  "key3": "EZH7ENJEAzphppxCwBKrVVJJaaroC1hsvRMRwqTYkLMNkg8SA7NUnDzALbPg58Dtbf2HodTYHTPcQEHREG46otg",
  "key4": "2jpD85rS8MHT3rxofdsVVxhQVALkASjaJzuCPmcYHCPGu2J8foZctVeHVnkaBk1xGYeysUmg6pzNH5QkjyvcqVJz",
  "key5": "57kkxs9xJcugm67UU4Mgk5quWd2XXs3w1mX86JhRbTSF8sGCrGrmLNuvUFE3u6qH9fvv9qrJfsusZC8mEivSPPYb",
  "key6": "aPxDfoj2tTJdPbVaD3zzmxma99FJnz33WRDRKXvfaqsbiUXDgY9EuwQjJCVcjMZPUUfEvMEgao3ckTyH9uKNVYi",
  "key7": "4oTxjj2VVzdpB1UcVjJdEcYpcpjkgmwFQ3pXzU6hczyzP7Doms6UpS6Uxx1pCZMe6uVjiXR8uGet8fGimuEFffKa",
  "key8": "33NxB4LAjNgkyuk5BK2QkbqoNxPa38g1158zpCiude4pbkkuGoDLTJy5ymUAAMszNnXA8ShKsorhFNJA3qWUm2sJ",
  "key9": "2HsP1rNRV6adC7iU3hshJ84PsAdCw5TaSWv1hikW4uC4jYpvi4LF8fCbQYSXZZ3yHKfBhPnQqVVXBNQUhYqB4NW",
  "key10": "2k4TxLt1XabDg4UepddFvsnDGak8Myg2YihhWPYSeDNNEgHFCNBQMZica6bKLna48rekD5wGynR4y6VFf9iLizMq",
  "key11": "1WhAD1kGwoHqX1AcYKXv2wNhMBaackcYWmtg7er4uJxKLZva8KfbvoYm8K46KJU5fEv4oB9QeSn789xKqk6Mbuv",
  "key12": "3cBvQtd8wiCjqjuhiGroZC2H6xMKgFS86b5d5iXRvc7PtWq7Ws5SGn7AecGJD8bUStMAcJ4W9YoFsTMjxnU1SxSJ",
  "key13": "39DF9fTfDNeULQ7Qk4eWSKKiGXGR7NqLuK5stiHrCii6sA5sSoRL4DMpyPbom5sp5TbxqBiFxxBtHrGPwsKFLVmY",
  "key14": "2PprapPMwZTMRYVjnjDGftsC1i9AL1fD16PmNg7y1nniGth8hpq69fu7j23FP8b3nW1HpQbeGRzn3pAyst7TkxPM",
  "key15": "5HYLYcChLs6P6rH3YxhgWc2dqbMENHccuYHuzXJVMwJW22oFkX3nh9yJBXdoDEY3Jz36GqZhAw2gfbcRhbR1YyUR",
  "key16": "3ZqMNRWT17FnfjQdHssCBurdRBPdbqV9YFVW2LHUU5FQy8kb5S5vYQgnxX7zddfP9Lod843MdSjvKE2R5jLL6m8z",
  "key17": "3eQm1p3QHgqFWXU5JcHk1Ta6w3MjRzBAcnQxZe3d7owXhJJ1Bvx7RQb6wXwp2CzEHCmpeVDj3GuofvTp7qMh3i1p",
  "key18": "2aQnxxbbudx4239Z8k5KCgUNtKjJDFViWkW34Y44GfUvUYn69man38R8D3snq1shpF61JDSTSay5yXho2sPmdKke",
  "key19": "gD2FyRqYo2WKGgRSNszqQW6rzYVrhNZKuLzTCWBpbg7phws9DqjfpDXncKtXrBY42YsGbg3F613yxqfUsfXmiJF",
  "key20": "3SCRntgNe8yY3PZpVJPTyoQBLDvhs2XrRCJr9L4cWXgH8mYk9HSFUN6coqyaC8c1GAnqxqcuaLuXcVojVbDkwCed",
  "key21": "2jCqwmaWf7qTBqTy8JLqwALThGPjozHKiLS1jJ9HUzHrjMLDt1ueSwWZEy2C4b9HwTj6HwZPoocjuCysJ92VEcsA",
  "key22": "5pXGhSn64WPYhCCHDnyAMWWGXDigoDia55nKKXPMahFcpuGD4MjchckAH7fHm2voxgoKEyTR8SRAgCAACxSPkDV2",
  "key23": "5SLsKpEYtVYwEujq75xe5LvcFEhdn6qi4Zv6HYKbHr1jatfN4FWmJ649EZnqw7KoyPERd883TXAq93VoHngR1rJN",
  "key24": "uc2z4HW8ZWgyzWDfpRfTqysFDaSkhGMW2QacssUh99pFoQ6RnpdqhZFZxxbnC7F71ET7PMcrNDu37DECUjTUNEc",
  "key25": "Cue8n8fCrWsXZTxa3TPCCLiyCeoZJDXm3EQz2qfYyXgnxCX8pcKfWL4ncvTuUi4cUgtLXLNfuvynK6Ag3bA7u5Y"
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
