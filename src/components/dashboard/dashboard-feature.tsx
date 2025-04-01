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
    "4KrfjNkTx4hwSk6QKTTvDsZtuLgqwXDftjhqzPKXEboKP8SZjT3nGfsrRANhmpxMBdg34NPBFcg28m43CoZAHidD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hqzjg5TbkQUBtm563v3rk3ogrhyVzEjCjQp8dGxBriT1wEjnowYz68wHueuYHRAfy2XuQKYN3tkjQ9exdq9noxR",
  "key1": "aQN2WDsRj7pVixbeDqrbyDdjp1PxKoJNpRh6yUiT9A1zxFDwoTe2Mg4wHeYaMSsD6kNDqeSH7CetaMMs53XUndR",
  "key2": "3BF84Y8eTjaXGrJwBAmW9AoKrgxYqf64umf9mBdzfx42MhtCF1yMUVJb5tnd4cTLMmSkmwitoLnTCiiPsMATf2pj",
  "key3": "QkUNoKJ21XwgkEDJwNRaJVuynNmEUNgbDiXAxrf9CfQ3gdYs5b96Duzm9V8xpJzYxRNcPBbD8HbADLnA7BThyzE",
  "key4": "4FPJ8erCv73srmZUR7ACAhT14Tqk7sYyfhSrPDmFzgcRaucK6jzkFAZYJ2jrHi1ieWx5uuDQ9nCTaUh2tFMK2Gqq",
  "key5": "5UKJwKPBEhipRiAfkfoA1rsD4MgE57UryE6omKyuBoBfMereaB5ufRxgKrdyc9ZK4Swr5GRDrZc9LYpd5gUJWFHr",
  "key6": "4huap5RofwLgxU9Hu2MPSKcKKPN63wb91pN4vDb874m4oYKBzyhEQWLhbHoqXPndAQR9bBwZh9tkiDWKRuPaSdUt",
  "key7": "emdLX6RsM1Mbu2A5udKgswB5D61TYRLjDTchro4VmBB7K32hrwDNuXcggWUpHk9GJVuFCRnkRgrKp9BaRHMAz3T",
  "key8": "5EL9F6ZL9y4xtBcLLg8JjVr9oQVR7vkkANoju5H2tjer2nBn3i4qNTwhyFaT3RsAEiRpzqc6So5cfopXNPwRoqf5",
  "key9": "4THdivZvy6jUwbJTAND5VBvcXzhyzo45ccC6bHaPzAhtqazjeBufWAow17ukVvmDxNGiMEsgchnN8Tj3FtKJ8bV3",
  "key10": "4GMGvbssCLGEf5W9jrJeMhQmghHgrNm4QhWWMnPsKM5UskGANBz6nUsxcvFXgkL2f5XBW5CsAvv5iZWVUw8wSPLA",
  "key11": "3R6Ta8hEHkDa3Dv48rrmYESf1mo2V7x9q2tPjuA6grT5eGWYnSw5zhnmDK7qkun3CzRzsAdRQwEUzHzS9Sw8H35M",
  "key12": "4LaEtd6nrHUjS5f9jVRJE6MDSbJdCX4pD8eqQ4KGehy6Ek7zk1bgUK5JkPvFwAezdZtgcAJULCrHASdBRLtScSxZ",
  "key13": "2fD6c1rcgVRHgF2y87QetMkD87ERmWMSuNFqsqUk58euBXQ5f9bcfoiMJtELiVH9cKBGYejxUq84ds8k78dSFEy5",
  "key14": "2QyyuzL5AsquhUr9FtzHBWNxT4P69j7Me82xvn3SCvu92Ut3bArxsbG3Wdpbh3pLyjsZBNNwtnFBU4a3x7h4W8wp",
  "key15": "2Aw1cYSafYQy1EiaCUU5Snd4YEoKMfM1vKKp4ZyHs5m2L9GdAb6F7JKe5hXMzz96Pv6SPCcka5WyNyPek21y566q",
  "key16": "25PK5Dh1xNvf5nJaE4NTxBpcEDgPxHGRaBsVpmKcQCEwoBuARPsRCcP5AR7zTW3ptgf5Fu6gxrUkzZpuDqCTqUwR",
  "key17": "5ostsoB5iG52y1XGFnutnCcSz8wbLngjXBAUFMFYrJ8TrRaDmb3KWfSQJn3SMukeYbucBR9ntuPd7wrzXDGPwaEr",
  "key18": "3GPL19fF76GaSq61zrUnq2ThXKJPtLWkM1sBuvqmB5VeaJg8qye6WshwYzw6ASqymeF9sxdkUz7jMyCE4f8Jbk7S",
  "key19": "5F15bTaJ3ehHy98t4xhYrDg9vpZ2FZDiMp1ivninf6SHrw2fQBLnNx159arpbz9sDUJviaVZLVsbpEAGGwNKJ6zz",
  "key20": "28sNmrNZSUPuPMUEY8rLRNss1q97dattwTeCFRiudexXZn2PR8H7L5rZprXdCXm7dmxS7A7ZeEmsdw7a2i7SMcVn",
  "key21": "4w1JfdtK9se9zVagyCRG61R5sDZdteLRUi6o9CrGrAuEDaHbWRybtLbYKKeHtfoQ1UVd4hnFcpjJddPAw9NYusUe",
  "key22": "QMfUGERUn51bKRsW7G62BFGc4BLn2uTEGV34EpzW7NnLGHFm9XJ8WYYt7sys4dD3rSVksXD1SewxGVLYZF7xQM4",
  "key23": "3esE4HQr3ykPzXiuieaCNu5a23qqG4mEfREkaj6biZ5BVBJ2HLHvNRzaLEzs3UJSoGD36KC1GzcdP96Y2z1aqXZF",
  "key24": "5o3i7e5VwB4EqHmQJYicBi9nQVuuspEW9en1xyNTEw6hUvYpdVBWDSnni1mkmEzR42gFaN7h61hU84THewgiVv3k"
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
