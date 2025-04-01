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
    "3jtqViLuBdbFWSd3Lszo4XEDvTSkYtDu5QC5kuX4psfcCv68tktwHfY15XP6FNkvugXsajE52MJjgmRJE99H6Vdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r7sgpErYv4cF4mRJ2T4fge75RZfkACrfeunyBiczaBG1L2mMjo5uLdD228s9oSAxpp4yGL3XFLTHLHULnw2qTqx",
  "key1": "5TeqzEzPUZN48je96Hhh4Q3k5CAx7Uh2DMrJK3uxXJqmmEFmmHtrC3g3MFgXYpfFVofEwCCZm3WtLLHXFz5BVpCv",
  "key2": "5kA6u54yeSJMdNBjSh5mubFqp2u8pMjkW91ks44AY1tf8pz78Rk2iMuuJnQRNAfnxWvGGyN2a9qMrtDYj68pAnSa",
  "key3": "2aKvyYbST7uxRjeEWDwpw3vcRoP63jdS9A5jkv1RgiDRokn63qphqEg9xUbDZSHLNZsnJ8hhb7o4kAar24PfgGS1",
  "key4": "4c8wLrrZw4Sa8tNkJDijWzfas65NHwhQNHmCxH6ACkJr9w7V2PURoCUDFYFu1HQwE1P8K2G1xPY3j3JnDDKfs97",
  "key5": "2DW9zgASDGi4PtTmbheYHPX8Kqd99UDxnAHAKaBp5LfCscz2MU2LQcajHjdjroV6rbyjHkyCERLcumnJcSa7z4oU",
  "key6": "HFqb46jFu4EduyQMaHkdiVd5FBtySFJGyfuRrYiYv5RXT8iGn9hMwVJNyLadupUdiN6e5Z1oFbzzBMMvTidUuYC",
  "key7": "3oEwCemFEJnhhjV9BK5bqmMPGwjyS2SsP8Guru1wcYAtv2iUD88ZHWMEMiCWknedZWGbxeyvTb8cQHUHvkJV8rAr",
  "key8": "5UUaG7yur1RoygMyJ4AeRHcZCYam6LKiN7mFVNWoZcKsdx5692yQ9bGCkA39fzR29HA2FfPaasL8AzgaH8ewGqnZ",
  "key9": "hUQPveWDjrh5zXKVj6jtWs7ZKcBJuJUAKf2R5rdubQyE5TNLUvNV62vquLVeT5UKJa5iFqUVbA1wY8ei3YBjN4d",
  "key10": "5eQVYDW73kAnM4DtgC9gaFAmYi7SmbpU3SJQPZTQfxBrbkmB2nKLHe9W9dsxAgDFuWxmFQG2fPJs2oPMRpB8eeWv",
  "key11": "4k5AKi658JQ7z88aZCoH2rU7G5GDASa9Y41fcZEPNV46hbtB1yZBFC2iRAymHwnyBZfMV17NzEwifntrj7UK7ZiD",
  "key12": "2CLdLdoCnXZHQbcgvSmrU31su813Wu1NtzGkbfaA8Squ8MJHYhrgWm2oRgkHC8LydufYR9i88WDVCn1APAFNoft6",
  "key13": "5X9HztsGGc6j8VyvLFBCxopM1DaGrmg7EEML3Srtrm2JbetiChYvqCLsSuuQbStwRS3ke2KBKrX6Vu6ahb8RDDZ9",
  "key14": "zreLYvksdENon5zGYGjumgcAt7V2hJNcqcRKaYRQshbFSBsFBQUGXpcmFMkfxcmqDNLkDLXdLJNQaTo7q6PaxVP",
  "key15": "3sASXGHV911jMEwg24uKkhUQENtspWUAjSS4YPAR7ejN7VcHQYn62iCPmGg75g5cz2nEFoZTzM5sx1FpVxV3BEz3",
  "key16": "wJeHkrB7Hs2wLPUTgvWJkGe4EESNfw4v8JWb2NuXN5RRR4xbAzUuCMHZp4cykgZYvqmQKu3KVQorcRYD2RE9zDv",
  "key17": "28fWMnfYvsUpPwVwHs8Cn2JBFqDJGBTeUNFNoqUGm7bQQNWVhbgFMR23ZTKJQ9aXmzW4eDbtbcZzYzKuDVhWfp2x",
  "key18": "5FTT9iQyzasjvae4JvF2Z81zUZ6pcQ1cc64vEa2LGZpin1ny8wN6DRCDrLu9ZtxhS3ptJue5HN8D5QN4CkDzoj8v",
  "key19": "2d99SHHbwCietWcdwNABSxvM4a1UGh1d2iBgZe6RE6Gvt4DBc3W5eUe7kde7XvLyz63gRAEWjHjSwyeo5M4EEG4o",
  "key20": "5ap1yjbizkj6CbnRcBsPqof2VP44RKisUzGSKggJMrNf1pSdjkPwft1whzBMUGdRL88FeggwS3hTkzPwLcr9fagG",
  "key21": "2Sjdi1czPf5Fv9A6PEb5Deb7Zq5GNhe2eNARCdK9HtLAydAP6ch9avJPmwqQTgweW5mRAY14LZKJRr5rw13uWZtJ",
  "key22": "284WPzGfwL2VSRoAvvXdCB3Ns8jRsDV5nfcUMU6Q7nJiPUZ5BuXgg3fmL8nooGEGox4Cg3DWZDmR9XdWuyo6Z8SL",
  "key23": "5CsquMHWAsv2qAh5YUv3Mz3GWqjykBLN5FQ9ZwoLUo2ydvJ7YBS4fZMM15z6yC51mY1dmAAhyV6cAS6E5hMprG5M",
  "key24": "3NxJ9PPrvggtgmQ1WemQacbYVAtWRhi43xkTAfGssfP99FMRTZSP9RHaDrMG4GudBxEeDnSMELmLi8XMQ6A69p8G"
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
