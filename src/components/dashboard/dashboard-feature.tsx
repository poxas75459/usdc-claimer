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
    "2TiZES9LrW5b1zusgEntxoGkK62pcVh33EvSGSKhATv4WFxy2Je1HVR2SnZ4Faz7owQRs24YXXoT3D1VNvFkEzHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GMPj2VHvYqfbcUyuzvLfH7q56SCJ2M2qSh8SDsUDegiDaqjD1jRWHT4u8fa4WoQaEgLK4DGYAvH94HYSJoFcGsX",
  "key1": "2YBcRBKBRSxtKmcx4C3u6zx8DBh55vFF4GKxQHCQ2msPkrwG7Pg66hunafTdpgeHDTqPuZQzT1gEyQd3VUz65qc9",
  "key2": "3Dk61m98cMJ51Ejm1xf8aTvSmv6M9VHYLJtvxe391CwdWpiqJTa9HneUdKiZCCmoeJVqMrw5Ae6bbz9oB9VuRyuu",
  "key3": "5SDZNVr958VmjPvK1cng8bZDFKHmvWcpWUqPgXTFu9VLeuykg41Xmxo5ktJPxbPWTdM5XKtdSvpAcEwRSYfpxJkK",
  "key4": "5nPfgNgptKGhy11wv22YGqasKLYGa86jibo5mpmqig3zHjwdXuaDg7uTCHUywRAZ5MZEwBoAcGN2RdR3Ne9Jq5BK",
  "key5": "3tAG8gR7YkmqWESQZswy4zZdHwkrXKvYHQWAvmu8ZBLGkLj3YxkwfZ2KBohwfGnmvhgrXfWDK4XqtNAssdVDxKPb",
  "key6": "5JnkGpkJW6LwscxNGNbW3pe6ymbLqywpAaQ68HixMMjk9sN41zNgSiZ1axkuw2xUcYRqBJytbBwdm8bUHpnABCW1",
  "key7": "ooA3ijk5V7CqikdgYYv1sW5MAmx8MvNUav9pgVBHLKBy1x5YA3PoBez77a2buX4e7Ps4mgQCbWr8MC4jmhP7MHi",
  "key8": "54dDQsqVuNBy3CKBsjhw6kBDeRx3A982BT17mjsyHVbrbXGjRWsT7HjMhd9WsQfJi29cRfNecCMCvkqPTPJ52fNF",
  "key9": "5jV9XCNjrhSd1Z2QQzQuFwjosZfY8gjrVH3MWMbXXhcbAiufukksRU4ALtc7AYeytWpDDUooFPdk3TCScS4ZTWdK",
  "key10": "4VFRr7UQbfEx5tVhXMDNcD9AAbuDpMWmzBBiti9B89cU3GAW5RNoD5WWsxNj5N522MTvbGNGBHY4TAJuFQsLd79m",
  "key11": "5MzgMEXcbhvNufCRaCoXk1ur5feUVaUczEbS45GW9zjxnYEhfWR6XA35qDLb89mpeGZtBaauA1716H7rSGQ64dD5",
  "key12": "5jcwGmyrEWHaYYC3yVAjCVcFmePySFHdx2r5rhEu9MNyRrvzTEFJbKakcHtumpFvch2pu2oYFwCo1yVfCvemx22V",
  "key13": "55srkN8Ea9k5Ke2piv3GykPv8Bttuu2YWv7CViHyWFvoG7jvNJmeQMLQnsNtooNtBtZoG8JJToXY3pg2cSRHvsRW",
  "key14": "5yzqECnFcKgvXePbGNZGqAbbZuVnuSc8SX7HZzZuTrb8uoQh9HzZHPiXCiA7gEMkbAWLUr3TakHRdWbyACDYKZGr",
  "key15": "56B5A4B7yiXyZ2fhx8QVikreDrbsU1UCgJd8WgMnBrV2jE3kPcFvzMZYZbm9ePFHewnySPdQ8R1z4dcYJXdq2LM4",
  "key16": "5gBjANf5C2oTNH6QhSap4xsFjpshLJufqbKLruz3PmmA87ukPobkPyevBEWFufswE3G3oDvmi4JzTeQ3fvwNcE3d",
  "key17": "bB96oqRYzYr9ANxqcQcuHXZABgmyv3fn8iAxNYP5oWfjqmt6ie4A8VWWF6K7FPPtLkHjKKjSjYWj8gqh9k2yA18",
  "key18": "12A1dLLXWVGxme2jw9G9wr7s9LoijNQraaiHd6ZkvmfAW2M2mtvgcofLvirmXytgWRvD9a1s8ptzarfsGFnX3RZ1",
  "key19": "4G7HTHpYHMdZ6xLXScPp3JfSrAyGdzEPB8E9hQGBtNNx8Eraw1KEb4kRmy8M4nfzbtEtXyVePPEwmQB5i74UnT4G",
  "key20": "v9KjqznCMawRxwvAffaqoLGeoCQrYe2A4n3JXwENYBXxrDyxwerq4byD7JPoMAUrPHj69TtbxyYjG9tb2SP4zZz",
  "key21": "yaitFDU8NTmAtp9fMeKWsmXquzP1UQrJ6WC7pmpytPEk3CLuF72rJb45DzvgscmkDegjLHmcfcLFw5pCoXSWdUG",
  "key22": "BXLTN5kzQN5XVkuRrSrkwGPYDYPyeuTcJhxu5XbRDG2g3Cf3rMMwv4Ajn4aNJ5KmK1UAnJN44cr2rEB7uXb2qHF",
  "key23": "3Gb4bCQ2Z7DKyZzBHjSsPUpzpdEZ3dVpJ4TuQRHvy99L8VEeCFqMKKEtu2VQ3EoPy1eKry3HPCtycYgc22ns6SNT",
  "key24": "3M4x8tRtbKLrjZbNbCxWazpTk5xuuPLqAwihq2bWTEqRM2E1EF555XJcK8ofLMNSPktaosHyeiBvR9CbjKYL5GRN",
  "key25": "GKhwDHtJWycQU9gbfhDfg9oYh8BaYfV19gBK6b58Z6oGuGJeEe2b8qFfqxN9uMLhw6vFD9R6aYEESc22ebrSpdS",
  "key26": "4HTiA899tRrJG7HfvcFsV73YjR1TW5PcYRRqAtw9c8CdHz2XYbWsby9XUMk1bB1CizMprWioeRPhnXVVC742pMqW",
  "key27": "omb8123EjgJHvJDG7iefptEomRqox9RaoUgG288466jp5vpynz2Q7EzJfPiJeT9iLT77Kykd1ArKrp2sCeM72Et"
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
