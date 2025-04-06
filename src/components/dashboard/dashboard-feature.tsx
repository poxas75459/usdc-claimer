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
    "X5uQEopfrg4WMRaE2kYYiyf58886aGQm5wo3ZEWbPPoqJB2h84DYVgirVswkKnW8dxXoweFN2qnY2VZFYAZLCsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yGVWuDkmeEaR8AFUmcJJ1EfagPXNYavLn98ju4aqtjApzhrBgFg5n9bUASouDoNsXW2hj8fqvuZSF2Na3uvRkp1",
  "key1": "NcBTxqsL4Yr7nk5JGLGFDitKyPsUzi4JpEmwHVHauXAD6wUJCGj7dqxggC4c5n2YKaGTWj98w9XNuBonnv6FFbJ",
  "key2": "4MdYJxaGmepBsSuwVV4KT11wfwiHsF8fqgT3dG9tUAHwPcSHpnWg94EAA63qonrS5ukvvK4C4XSquVBCdGQWr3LN",
  "key3": "29UrhSkBgVCXpwiBCSH8YVEKSKCVVgNM9MTHm1F19bjNyANU8tiihuCT4tJfUqhtD3kbjezVJGZfGxF1pwWvtVwQ",
  "key4": "FVwZ7QDtntEBZVBXhGkme4HGQNrzWcJLyZy6Y1RPhHGPv7xuA1aLaVWQHo8rQ25TnGkrFvH8rB9erPYwVnpQ1cT",
  "key5": "56mhLQXyGzjdhh5p2WniH5V3jMexfxzVtVKZ6xEnXP1njMwwjZQyKuvJwwBk6i9axD3td4VeLf2GNQY7sTCK2tV7",
  "key6": "5KfpkqVCqU98Ku2dTwowHhdwfX7uwL3RynJ6yxshecPdfWNDKWHzi5pRYYJZ5niq7i979eMYYyAHwkk1UcvLYDnM",
  "key7": "DnF58gC77LD9uAjQSaFVJJFhf7FMBxgNtPGZwLSAVPYu7uCCZx4or4ERyzNoiQ6YAfDV5ujizDYN94br1gGEt73",
  "key8": "3qyUjbr2y7Z7MuifpL1bExMjuJpr88cPMPBUuG4PPM9fEQxXXDGuBb5EcaZPMt99TwFC4wT97qU5N35JM2yiRCsZ",
  "key9": "2b449z46d1z5kS92q213r4dbjZDPZxCg7ebqg4Y6r7Qgwgf5aWdtPLYHiEvPSTvj4L2ABuk2RyisjiWxrcUBfB9U",
  "key10": "5gcH8ECwnQ9thHBQ8YrJWVsSaxtELAiNXDtceAqnmzaT6RH2pDR7Eg28xmQZ9qRqx7uw5U2bkEZa7jGZrqZRSJHg",
  "key11": "byBZsEy2RUUqo2jhdsDn2Thd4XqyyotXaK32no1PhGdSvZthUxhKiC7cXRW4DqCfCHWZgroC4CzsqXssqnpY7Hh",
  "key12": "425G9497u2x43ennG99zXZn8gjtTLQhtPrQ1Ns12Y7RkCkDvi9Nh24sCGvoeFGjM3oqSMLajYUKUfd3d6XhQMuYC",
  "key13": "5KPq7MLCDHGyLNpXcctCQUSXN6rJDhbdfe47GNQa86y9USonJmaXq18usAZyhJngDPJ6bLVzqErsiA3HMLM2e3jR",
  "key14": "2Xr2iaKN37531YaLtAtGfgAhkbNjuKqmHc1cZccbjaP6tpXH6V8mczYcDeQy4S72Zmo9bSUgLpBQra4RTxibygci",
  "key15": "F74egt7HtfRswCQ2xfxLEEK1p2PHwSVNMixy2b7HHV5fhKYat6gH76TAFjcjEjS9xU83C9rX4EngsSen7RPSWgN",
  "key16": "5whMGBKmcjQ6Lx8ncgRfJa7SJXq9ca1jhMQeB6yoNB6Br9cdbkqGKu1cVHDdWigWoqEvGiEJiLTZDBgagHWvgHov",
  "key17": "4CC4PPjM7tkXFA5ioaPePNC5DhpJ3FByw46GxeY9sEgZjvhxVFYg2uMHAWk7N9UMBeKsEeU8hQC24BXZfPucmZfS",
  "key18": "4h44HHLee49h7P2cma667QBRD3vYNwruMfrcD6TfwoL3FeHrUuCMtYfE3paefqWEVDp8gd9fqF9ezRsdLmwWaYer",
  "key19": "54F1cGYBHHKryN7ggD61Ad29i3rADhQZwLtXbhuHMfwTPQd4J2eJ3ouRqaRPzusLeBAkqXCdfd4Gbs6HsVwFkNnt",
  "key20": "358wENk7D1hVsq1boiKujfysFiTLSp5EgtC6vPzj1Nyb9zY3kkTKiJib8atcRQ6sucaYcw1owiPtvB3a7oDaZf78",
  "key21": "2V43pMa1X5wHdUK7MvDBRU2QmXtosquoZe1G2URboR8ojLDxoi1rtddACxqkx8Nh2GzCMf5qxFZWq4UbU4hnFSMs",
  "key22": "4ZdJYJ9TMVzwufK2XemSdxRKBSKgDJdkd8mWvnnHPqDJgwEMAwhQbh5A9BVFFKgKcenry1G7aaTsmiRo6y4LiDkb",
  "key23": "3VPb9qj6KBmN3Sd6PzMR9MVdzaDD5j5A9g8eWQkcQsUR6JUGTTj577wtqKMFEk82jGaDvqFUiMvuwLF4eU858z1K",
  "key24": "Hk2orjjcToZUtk4jC75jWFTYnGmwbjRRxcTKxmZqHDuuqDh5g35e9aFnboQJGXyaqn4bdMDZd1ik58SA6duZiP2"
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
