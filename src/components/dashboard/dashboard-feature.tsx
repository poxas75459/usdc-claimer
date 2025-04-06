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
    "5YBQm862W7ByovRmZs9CNXx4RPJXNZa1uAvwMjLpCW3X18oKicp92faBwyZjQAkQGiNSYpfDMUuJX5umE7yzWbFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BPJK3Upmy9zxvP2Lcy7Z6PJGKBTuVDo9M8yAe2uudx2mXvMbrBwSAPnWihL9zp2te6s8GKcYR9fgVnND1QCJxDw",
  "key1": "4xvtbzQ9wE7Sv5rRNi6P2fFfTVbzvN4oFkoSFBcvEAaEbaNVUq4KU4btkCQ9B9Nvr3rbwQV3hfN2qoAmjcrvVAMz",
  "key2": "nBAyR1V1a2MBF1q5vTXVde9bHX5zgzYzajBq12wdCJLLTxZYy4eVcCSm2vT51oUDud93Q6m6Z4xpXYoLavrLkLM",
  "key3": "2M1fT7fTbaBnWnXxr8nMjvyGxpvTbZVpQ9uTA1efsapfXUaMkFBspXLNQawPw13g6kpYfzpy8XUxQCCeYp6Xiom9",
  "key4": "4WfMR8uAVWt6XEqzQjbAg8NSzf6Jse8Bcm3gPScVRkP44JB33abdwiS6PrVDtCv9UnPLqWCTu2y3oLWfCiXzZFca",
  "key5": "3hoERByiwHdGu7BwuNXAjsuWf5LF7Hs1tRCoE8trDd4ecnNE6csN9WnVwqF2jtaCuP5PsGLdnypv3chRwKAvpLib",
  "key6": "5rmJjgKtzX3sQVecgCHQUXpbBzeXicJWHa4XPjwtvZRycMjJLRniCcoBT6SxqQJgqKhV4S4NvwAYHg9dkZBjj4cX",
  "key7": "sFsz3Psv3yqB8eCrxhgGpcLcgHBUFYWoMUKF9pxWiEYhNtjmjUGJfaW5SmSg288m4zCmEcjguKtT4jnvZCPGXxL",
  "key8": "3L8RngZcjt2J7y5z1YyJccYBctwD3H68HwBZuVWrt8NDUDyb39br3kUyngULGDXvXkNTnYUjWYkHwGVxdW5xnsAu",
  "key9": "4t57mVBgVt1w62vcAMeJZQqGNFmUD66Q43uVSXDfqH6511vj4NgV1AEGC1z4kmdE3SLYfRDyJwaT7MENFzsRSAaH",
  "key10": "rQZuTyWLpRhV9k6S9GDKVCS28NW9nV1H2TBzcdU5QHpBLQZnfw3K1wWHvkjNcHKZyC9EAzecFTRnK1XxAtRU191",
  "key11": "4gAheGe6mD4jqUbdV5C7Q1UuCEkc5HuXXT7NGGUbxkEQU25Jnfi2sXBg42GTePppLJf9cNvyn7WqvezHDxXj3LtF",
  "key12": "446haHYTCfuztJk3waxp5DYv34U3Dwo8cHbWTdUbG47yAQeZFqgohq4oNmYKJZ8oFhyJ9JTWLuG38agYTgKojnVY",
  "key13": "2yAsibBrjPSTdcFSC73E2Kaocn21WJoHzd7Azi3PepK2ouhRsydF7etjXWWSZvS3JQKC2eno4iUeRwfURBYTkM2A",
  "key14": "5LaV3o7vbRTeHR8XUZVA9vd9RrYEHjGgrmdrXWgKAYUAwM75eQ8rKACyU2BwJmFkNwEWMMU8DZ4cVVoUEg5EuK3L",
  "key15": "5DHDLGNcjTU1BNKttQB4Kaj2qYT9Ry2t6Ai9DpKJc6pvYQqYS5cGjtF9CS7GdACfy8J22GT7osZHE49LiQswPWm9",
  "key16": "56gNPhxTsAM2WgxNJC2ayDHyCaSKRJVHDnhnRWpUncHQBhqYFmFoUf9RXHotYTqFEJEycAnNzDSNPWF4niMeDFF5",
  "key17": "2U1b1QgCPFBVbN6vVj5VrueBq5PrhgSAsoqM33L8oGSG8xYsgCqP2gfvoHuXkCdbxr1NfLkeX6etj8xpDGyAn3BY",
  "key18": "2zwQsBLP2KDskyrgX49TWHQpWYLvUYZKwWZW5NVzX4EZ4ikZyhbb3afvwFpf4p4MQiTP4NGkTF1pPQcNPuZ6UUhT",
  "key19": "3iwMM87kTVqoebCTbyV3Rw5QgA9QEtTQpeWgaScmscuxG436sSsg43txmigqhF3RudrH7veELXM22mXNYTU7Av65",
  "key20": "PYX3DLwnSkEG8fMoJUZuNdULHhb4kCjXptVQfukqt8T1LkcFDTgML4SS3SR6k4jDToYFdb9a9rFFdnx2QLgYV3e",
  "key21": "3FAgUpB3GpNqs8meQaSoBDit5FueF3sJhaNssXymZSsDYHjYPB4DeKYg8JAA5QaNSmt15BERDJU3aNi5EQLQpHy4",
  "key22": "2jjQpVUMsVui1g9ZZwM2XUgLYtFDq5b7U4tMHvMpTq4te8fHR3nyv9gnAhJM6MdsCsLQFNnST2175SF1Az9KfgVS",
  "key23": "295fD4jWmjJCTUnPxUnXMvf4HVB5yHF4qjgFQZuwiko5LcaZ9e5o3eMrMMt3Hwo6h3o7hSdzWBDAG6tMX12sAvdJ",
  "key24": "4tbXmJCBvZ41kT5hwDEvzypZ7Dtvb3HVxMrse9HZEpcnAec38TDMKyaTAJkZaq3EpJ3XJtnyMPRUttDzBRXU5foT",
  "key25": "2iUq2Cfm4RiogzssLTCKeASWkrm2VTr3bmq7fAH9XhuZeVqm23DhN8WK56csTttvCLop9A2SCzhkgXGcGAPPyhNA",
  "key26": "56D6fzReVL3Av8ZdMsMt4da6cmS2Zures7X7NaJtNSwWfquMeHffc1Rd8PgXSgiJUTVdJeQpZzGHHSJ8p6uvp1bF",
  "key27": "517iin25D2LnyHPPkamZEb24qJMWXAsZDMz9gYyEFNp7yHH2x7BdM1dFta3GQctayxNSoyDddfGcAwoyoQXCoxFN",
  "key28": "3dAmKwKNHGCBYNjffMfLiiSS7zDNvMNuXxxVG6mt5L8HTWFvvzaQ2MYDMDJz1v7kgHT9vefBrMqS4Lnre9GFkWkN"
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
