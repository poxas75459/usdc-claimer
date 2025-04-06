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
    "3CddHiMNGX2Mg4NUiEyesUmBnRhZRtRKifYu1AH7h6SbrYH6q5bErRAJsUpvLuHkaxw6XrcPKYXMFhd8CtcyoTtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Z9vuHx7Y6sTSSxDprpj5fgh9hP1JQN6nAqxBLFRzzpq7afkU78dHvUNwnckDenuGSFVaFmqk3sd5fzJbxhNke2",
  "key1": "4qhAsyic7cBofyHsM3ity8P76jT24fejAmtLZta18WALtQvg67SoeLZYPJRGdML7vMGbyMcs6LcmMZCWPGPUuYpJ",
  "key2": "587V8vun5PXz3Qg9Pyq5xbmL6bfCWt2pqA9GJTyrNn2vQxMtoC4xWS84X4BHP5UrckHY9yyn9RfAy5gtoZ5b4zke",
  "key3": "5SSY3BsbhGVEgWsUjwpfhxFE53rDEbmVPKdxRGNHuJwhnLetCQDPBcpTAz6fBfLvywMZFsYtbTBj9ZsEUFh7Skg2",
  "key4": "4bHTN69R9QeShodbpwDZsZwraA3mtbWNhAssV2ySLrTXaD56yD3ghtJUTs7k6HYpy8A8zVsxmHPn4ubLuy3TzReh",
  "key5": "2YUkZ5K7oYmVjQBgZDKjjdQ1K5CYX2nNyJYPfybCBNTPsbJZ4EWoSSrMMy2yRwA3viKhh3dy2fM3StvUHtUhCVi3",
  "key6": "31NMLaBwAq5Kk1SzExjKQdM5CAYTKSC9S6gRuoJaoDgGWCtVPwy7DTz62dUktFJqqbUBvDsYnZCge7PZbUhawXWp",
  "key7": "5bgy7P38WeoL9gAtsEk5HbrcDec1eDnTcF2eaAtRffbdK4kwAtxUSJRfmyuXYPdQWa9AgL9Eib5Bbn5tbhzEJpYL",
  "key8": "gtSN9pCPCimC9Vnyfc5HiphnHAYwQMdhtUnL7zyN2juGeA2itr8gV7q9ips6NEktXe7oUi1My3ELiCdmVo2XBbL",
  "key9": "3KTSCGYsjBJjidCgfULVwRXdaj9G1jCPjBGdWWoNPew4Vg3S9LqvcrVQKYDhHiFiEHfN49BiBPV21JX6pvQ5EqRM",
  "key10": "4btR2jMSEcCciH9dqvxUQV8JEr9Gacm2u4hZrtC5Vjj828PS5dTBJC9VGXT7gETAYWSrM83QAiMt77t9eJE39adK",
  "key11": "2McipXicb6Uaxfv5e1rriMcFWzWcHNTy7WiRWB3n24cfKHkFcvun16mtaw61sTj4nEmRA12fzTyXcc65GoZFxgrb",
  "key12": "5RRkDwbdFW6dkKtnCzALShYZrzqvH18QEQttsDcMDtebmK3NoFhMaAVwHpxavcMN2utkSVsvfCJ4FMr3bdBBT1ec",
  "key13": "5BYsqXKvqcmj2LEFKyA9A2isUr4VofkehyAXwebTzXjh1wWdLeTJakaS41AaH6o9AmNyTAQjHAp9NYXCbpzmWHFh",
  "key14": "3RR2j2LRVeVaRScrN8diBnAbfpvakvGbL5pvugDQ4KsUyxciJxrszLcz22dyLTY5FTb3egQjsxhMukpsZsiZxXjb",
  "key15": "2yigaGDKVyZTWpop21Z8XLrRrLnhQDSNmCCMdq99cP2ap1kVLN6PCkodPK1vTLd1cV4chdMjHNraNLUZZ5sbLfKL",
  "key16": "2zRnKTsEUyRoJZbwzmJCfyxG9VK53PUZGaFuvZdKmkbDWjUK8cdAv6nHcrumnHWZFMEy7js4tPzgMX45mVjfmbUw",
  "key17": "5QudfH3zdwVmpknhkZpqUEbfCkPfuCbSSvETHtZDXYntdHEg6dRpDHBQgm1MRUAUsYY1GxagsSTZM4bbYQh6GKuH",
  "key18": "1VUk3Qge6AYXSpEc52hG69ziH47zPgD1jMQ6weTk8qtBrMC9hd3kvVgpcK1LXNCgoZUUksRy6razxC4txx9PRBF",
  "key19": "3F137PKwFZWJk4M1mxpXxrMWhUPqAUtAs4BnfaETNys8NSKTKqwzfoxBDTryEH8NSaNtCm4HMhqCnGrdGMHVY8FW",
  "key20": "4zCCRw8VMBEJedEzq5aLxjazsTne13sRCs8DyoqnB9Lao3TD8tjrRSMvmYhnrwyVaV3qob1ztBACs9gWuuQ56vhg",
  "key21": "1YctaDZs7Rf6LVU8tpXFmdqSepaFwtwgswb9aX47e92WAiuFVW677o2W8QyKWPzCqLb711eP7NFp1KU4ULEtisG",
  "key22": "3Cfgto2dJzWhkT91WBof8vt7gvAtgZ92oZ39ncShrqGjpfNRv4TMdaya7beuRMQiqLNNKNRtwPZSL1pTP8thGvpV",
  "key23": "55k3Su6nMHybkdEriGMVXVxbLiUjmLzYrJ6Rb5kCs2CSqkv65AwgBHKH7FVqYVBHUQBgDUnexx1gbaGyuCFR1Vp6",
  "key24": "2pbGZ7y4ADxd66TNX4NLN6U95xRVPsXRTFjZFfWxSPh2VWcHA66VppLwNmNnmn2VX7fm4P8VL2EwMBJNPwxMLdYN",
  "key25": "48DzUUBzcXpJd2UEuu2C6qY9AfmugFp2g2hWKjPAYXEi7Lrf74fLFLuV8xP3amF8iXA63W5ahhM1UuMCdy2y4YrK",
  "key26": "3KDxAT1U4sxiVN9pBywd8aU3mZPerssEmMY3V53oM8UT5CfG7K5off57UivUay6d283AgQh5KNr1dBaAvgVhA2pp",
  "key27": "HkB23PRUHFy1YeMJdwyR1wxJ37grPvjGQzS61wvdfZCkrR5DmjfgmUKWwmgFd1Z6kJKjwG87M5wjgCGe9fnztkC"
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
