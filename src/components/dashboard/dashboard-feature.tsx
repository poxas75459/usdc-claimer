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
    "aHoTJgtYZoQtCtKN1VZfz8BfHfMjYwR6j7v9C9CzptrNiLeKNN3wiDczb3WL9exeA2MCWAXmyh5fZJBc9k6EScu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aXh3wVCA5GS5yQLPkXfzybab6GuD3jeu6Uh3kLJXob77MeKFqvUxrLfVsfjj17LKrSECyW2EbQ4BxbQAGwavtEV",
  "key1": "5hH452M8MbBb4Sv5xFT5qortCvbtUzMNkNui2jiNtzHG9erL9xHXGm2u2iDxmrbxYgCGBKTbNxSWNe1RJjdj1Nvo",
  "key2": "1o7KpNZntffMmzAMGvPntz9riQcuTjKPsbqPKsuLsz7RGBqkC96zPyHXi5MuWeReUxnnnbkfx1D5ipmkPx9FxHY",
  "key3": "5gfRzW3i2BHAjz6MmSDgUKmLPRfKB66Ru3drDbSGiSzW1N2J6UViV4mv6PWjZhYQbnPsfwpLAkdBh1ZEwPRgjE2X",
  "key4": "4DeREnP4Md7EcKuDXLA5H9KB7nMY5ZFNiSmRLhBXaCvPzrUbQM38DquWgBwgAbM988YNM3rTGdTNRD3wv6VQNpQ5",
  "key5": "4fbRmQMmNsuLVGQHuZvn3bSLU39fNN9S1b2kz8sEBQ5UTjw1fQ7BbFo9vTSoWZTDK4KFyvZWxVjWwdHxgwRMPzJj",
  "key6": "64H33vZQGrfJZ2EZb1N9pPdbFHmp3TEjoYdqqM5ZX3cMfKuJrK25PpVcZTiKmXKAEv3wobdY8CHMVeZ6mdK8Qxj8",
  "key7": "3GyoSUJKs8exFmM8SuUgCXSbG9ShE6FMdKwMkNbUoC688m39YUWs45ciUBvaJSAJutP6zd7LqVPuNuEEeviJbevH",
  "key8": "5yjpXK3Pkp6DkzitL2B11jeMK7yaV11CExY89EE8u3rWM3tscHK14H3uDQC2sNv5EVH5Vqkm37WVCFaGnRP56bTz",
  "key9": "4zSqYwB6Nj84WPAwmiv4z1hH34vXKvBLqpZSzR8k9YksG5nDCxpoUsmb3B6iJdJWhpK2a3CKcFpDXAPvDvbM7qDH",
  "key10": "X8LmraQuVLgfdvSiCKvjiCjeEwUTTG6DQYeDRodcXPFTtnVs1NjnhyLTMKsV1dkoEyst2TeMBNE2KScQgnXb1aZ",
  "key11": "4FCGTgdHQfePGUukWpPQ9Ln1ZbDeCHjoT5pz99Uj4j2hZFSVfMqHjpTkb3sXicabaaCbQg1GZAgYTuoszBWgzAWf",
  "key12": "4GkfP5tq1rGrMRgZVM4DzaRZ5K9JxzKc93DRtsfk8tw1vgf3ogM1YUm77Vy5gi1HmuE8EtEZZX5obPwiEKEA5jq4",
  "key13": "cYG3qpeM3B4Dza8UkqfmFgJ7Pzg8Uns5KjfxSeokpdkSHtAKGKURLrQFqUkbFGgw4YWJUGFEwqmnVgX7s1kNb3T",
  "key14": "63sfcfe2DMaYsAVpHxpMaTNDpvs8vAqgqb4GjS7JWCbKxxPQG1YtGZEYXryJbrwoLQcY5HpFdqiLorY6NmsGc7Mz",
  "key15": "5ybmGBVHRABQyapVWWceWwsAjpu7vm2CCdQdEfZCSzAfEUGaKYNBP5bzD58RrYCNAEK1vn5u1Fwi2fte6FFdfhn1",
  "key16": "2tfzkgaXWQGXxzFGBuJEACQGroc4EVF6ApmBFGz6PnRwiZJkqqY9mQeVX2iaKWEyK1g6wDN4tPeQU9SAicyCMDV3",
  "key17": "KRUGXnz8T2qKTFHvchobQSSDJNgmJHApWbLseGNwycYBYoNSAmZcpLByJZHTLcBYc6zXNYMvneKG71VHyVPyDvS",
  "key18": "4kehkKNJgu5xMBeEWKzyM2WaYpgetCpM88fWjWfNx18A4SSK3LCCuX4DspexSrrDVRcQhCuDGBu6u9sSPKLM9xi5",
  "key19": "3KSS6YkiGao3ipsb3ehhamMKDyqSSqYx7n4MWvYpDbvtVw4NuCBUFKUuepn3SoUsiDx9LKduTjQuvF5DFEtZKW3j",
  "key20": "4zSd1BHALmt55yUfL4cmRf5TmrVsjPmu4YGR2qLrXidGhvP4ZWCp5oVoxBPHnDq4xh2PGtLrVced3QqYaNFh2B63",
  "key21": "2VaM7sgyjmwPV61GKZ9Cdefcpvj1yHYVTqXXrPdnr56VWVkK5grUc1gNN1ib1QQLcDBsATtciFLQwbNbS5Qj2PeD",
  "key22": "5aJ22aJ9wcdFqR4gUZvpUhDeWMBq24Jz8S947boozRJS2V1APzqLvmzU8wbDvHzJhCR68JXsWB4EcJtTN7MWR4hK",
  "key23": "3eYGoCaXUEvJSbSYU1XaewncViWnT1tYbbud95qNwNeAqZoPmsaK3SnvGzSA3HCSNZkh1xedXHpFfoPrVVpQp4ko",
  "key24": "4QPNBEgqoWHjFGMzWB2dLSY6dqTXXLMRTnBj81dyBaCSSakzSGk8myNZSxfNq8PbB5U7XT5J1aZLYk4aDw5aMFgb",
  "key25": "4b9ZTZfALVjUMHJ4V6LppPKNWh5oBkKPnvjRtPRdVG6QSeaSC7XcNbcyUbppumv6KnpH5DZN4Cu9tXv2ZW58eFPr"
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
