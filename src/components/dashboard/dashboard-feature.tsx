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
    "2mXGqztbKbLNtMHjW2evPDkYQuq49NVcaZbM59K75PFuPt4TEm5ZMsQ5VRgk3JCABVsYAM8ZyN47pbbFHTZ4LT8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jcmD67wq67DAQTMe9LgyCXXmAQLtP4hz9vmEK87S1WZtLjGKq6V4kztdBpUTcpHWpU9i8ubz2zEMZXQz4K9JyL1",
  "key1": "SgaRBDHhq3iZqide66bLPSWJ99LkDAX6TtLPUa8y88MoW6W6tso9Vfun1pznEH3x9rVwvpv69C9bwaXTC1iDBNh",
  "key2": "3yjoWCHk3f4XrsznbNjrHf9QvgrBJ6Qud5cHpL9TSaZqbg5GNhj79nK8NiKfdqascmPJcG2GQDF3vFTRjTKzu5cq",
  "key3": "28E8yMk8MyMb292D2Mrb786DSpxcMm87uxRfxyK5B2U4e7DKU7UbaQyNZrLS93cQpZ3BHLSsbfCb1NXu21wmbPd4",
  "key4": "2w2SDxUumnBYEusUPzsy7A5ZRUNVcSWSEX4iEeoPBTDn4gfhmSvdSSuA4X3tzsZpoFMGDtzSZAssKovmEmu5W9vx",
  "key5": "2az7LXF1QbnfNGo2aghuJoJXtN4KFQFrQr4auBQsu6wHFmsSSyQ8zWVvifvGua1hpBWy6462AYhG1N6TQfzhZd3K",
  "key6": "4kAVr4sMAbvFB7gJwjE9kXvdVZou6mhkVxzpLKdwncJbfhB8PmEaprZAvXWn8VgjFFAWkvHrc26Tjkddt6dS8AMi",
  "key7": "45k71WBUyvmuDkmqWfqqMkEmZ9xMN6XCvDdgTtE9jyKscuKBRiiEgXbsQy5BkBu7JkDWNsrhUsrL2GdX7CH9baYp",
  "key8": "48EowrrkhUDNZfNPNrWaefCfQ8dP4taNJM6QYAkkBn4tCaUuHzNeD4niaExf91Tm6rH4BXak5TuEF5VuxTMZ8QoE",
  "key9": "4t7D2XynKFhYxZzTqPkHYqtuMojQs1rANDi4y3uRNDq9SEraBPKwep7o6zorefoSdbPqwber7WEcMTmHT6rQJK6B",
  "key10": "36PZHFWk1h1N77ctw8mQZYXM65j8DAPGvdhRzqKvMxiNrgXpRBLHkL8FbSQFhQ13QqoJApxHqLz4xCnPg9WDHeqR",
  "key11": "38WYVrHC1xBtR4HVypaWfyUiyK7RXfB3fMQW9xiU2GKBe7Lgoyuq5LgN7rgRb142vkfXC4Mn7UurRn6NbcKX8dqT",
  "key12": "57uRzmuvktSXxVfLcAMp4QvPh5LnbfBb3DZC4d9vuZ9oKXZpuZRwZX2QyXMcT5fLULxrJo6xNa3PvCCnsHhm3hhT",
  "key13": "65xn8N71qhCXPUBZxfR2wrccidGh1RWYVWoodhshoBX9tkLJuT59FGixv1STcBU1zSffW8GG6z4Uv5catb2W9qYV",
  "key14": "568PH5cUuwNwEo5AA2JVw86bFzXEUaZZm4GRkZENbVv7vhrxXdSLxKSg4PjqWfQcK62wwKGUpcC6xsEgthyNgf3x",
  "key15": "2Hosm9utjpLtKqRi5gNvpHxtQife1UTag3uw3NC2NuzPdwY3FpR2KsXkHLRtb2aPQtSD4GfdTok2MvCitAvr3HNE",
  "key16": "5iHgeeMAUF63SUa8Q2PwopHMw1dhgY2eswjv1wtGwFBPYc1Z3JvgzYSVDgiLSd6nJQkWkCoPVmU7cMsUJhbBm4ic",
  "key17": "46PJQAzVds7rcRV5htaUEzyeaqpeVhNwD1Jr1cy4LJ7bLHeuK5ugTRzesWBYjtBDmdhXNQdhHFHfoLFZ56KZrgMy",
  "key18": "2RLkLaCnj9fEnjTwVWKg66Mh8zmiuPsQUqctJBGfUjXppPJ5VkEqyS1ioZedMP1fNxRHKLztzLxp6nM1Aiy2c2AR",
  "key19": "nfWMyyY8sABErSrrjPrY8H2bnpg1m7dAWcWFW95VB8xT14p25NuowfNxH2SxS3YGVLLtF9RhSKmW9fJQVfDbWTS",
  "key20": "63kVzZPLkm7nFCvAgB2ZAnP2vZGvhbirj5Cp5YqAF9tStPgnTV8ML7Jmm88YwBnZSEgg7HpNtRzZCSf9GZJ75o62",
  "key21": "3W6gsUZzdQ71dDRjys5otxPkoZiZaV56dCupCHvummo5cQR6X38UQjHPQWowTvtwSDi8dWh4Tk6RhaaHrgdqpB61",
  "key22": "5puYMDoB4S5nMGVZJe9oX6joU424KPSgCGWuKe7ZU9aoHRPFPJnR1RgdAtxSs4Rmnj7gYxYFj81cKCwA3xeZhxdN",
  "key23": "4Er5CCJPSaPdPoqtQ7n9QhvmuLNZTwzGcLCRvpDvqwAC3n4pLGrXuU4MCs86faBHJEtqP8dG4HGuzoNhuJYyaE5x",
  "key24": "3FKwLfGWseFsVPTPubSxTr4d6fyak7kPxKCNdpzQbC65nk2hRKixCsBB3Sym4z5NFzqQ5UpBbtKScF9UXd8GLGyM",
  "key25": "4pN7E3TAteHpM3xhCYHjSZcqaomoQgy99uZDAFefYFNUn32W65xzVvesj65aUVbvLjkEjg67k6z8hwcJMKv3K8zV",
  "key26": "P1aiZ1XTz7pR81TYrXLy1eBFBx4oRxSVVdqYMucjugMWawWMW5kaAbvSBED1jfDEDSagUC9hjgjZJRcKppGjGAJ",
  "key27": "5SjJRpBtVkvFxFqnbvPCkfFyDdBVErthnh5T1p9xPuEhZUdAHRUqZ523RbfMnE9jDh3coAtBaPHP4jwwhz4bSxj9"
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
