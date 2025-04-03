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
    "39hdM4n33WqZvbzPL3M2NE87ertKiwwNePAJ4y6K7YdH1ZcpZd3g3JwaX4E3MDJXnQCQYaGR5KAmxXtneSdkMkj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "231RCHw1pwEM389qDvPxfPCGv19UkBe1B4WiyfGAXjWAHRdEWNJ2JQZFbxDjTuE2wqBjahsVeZQyyWj34kEnHzFq",
  "key1": "34aFDeFas5iaR8cmxh9omM8wqh66Ehkramsra2Z54povLjV3JN6A4DvPUipzDTDXnsecvmNUQ6hwdDDtPWSZyHsi",
  "key2": "3Lhx13rb8nvfG6KM29HgtZxHurKNH2HPWzb6N9CMwFRZoTEECg4iKHHp4nGXgRqW3yStECyTd2NSD5HcMakjNxQV",
  "key3": "4EyT1QsA8iFVwKT4CXUCNJeN4tE1rGJdiURe9B1dVVTTBvLgNW2jQBK2bbYQDB4h9K3CMkqqttwtFwmngEqqacWr",
  "key4": "2Um2Q4BdBVv66GCpuB8ZopnefasmKpgi5eqvCim35fYRyZjAmtw1a7fkWqRmucMKDQJqvLTisaMrEBYtyrX2aLZo",
  "key5": "4bszi5f6o2oNDA9qHSLQVrs8NevUQKhyTusi2Tdkd9eFQ53VPP3kzVFMRxZj1EtBwdk6FRJPHZ6K48tmwD1WWTrR",
  "key6": "3bPkpRhZkBSassQ4xix7QjZbHReKPZ5Ae8XCYkayfiHQRtUB8BVGz57RjUzz9S8ygSV8XeDPot5kykLnsTYx8EFJ",
  "key7": "4ombWqn8fnnteDibB1Kw4NS2zD8A98dPubFCxZra5rhfRsU7YT5UhcGg5YKq2v3f8ekPG23D4Ze2gqWZuE4uQV8a",
  "key8": "3F5FVQjfPKdDaW3qv7sDXskvt8geJf3Uo8yCNJam6PnVkgc3gYH7crsbL8LgofDqZgzaD5fxG37DXaFhq14RiAa9",
  "key9": "261YVmAS1WJdpZz498kAv8tqkS9Ehd5LHJrcqTTYLaezVWW68teEtxwa5z5teNCLL25LoQjpUzsf6ncYYdmh2PmH",
  "key10": "5Y2NfXBWupVMrH3667sih1Qk1GbPq4ZjiCdYvPS9oneuuBqbNLSwxP2Yztsk5KbRoaz22kLkpUDLH6kxngCEoRVW",
  "key11": "2LeefzK7ZasUrnD4FXkzJa6DN1qxHWNcCoq3Qmk6c78RAMCxqXFk6GVR53n1Ahvot9hWkPUPfwzMuBg5BVQMxs6x",
  "key12": "4esYPYYHbHuvfrH9sx6oLijnsKZo5dkrfwxgVarVmgEzMGEhwsBFKAXqDZSaizLrKTBoSvXZEDGHrtch2oMhErpW",
  "key13": "4jnYVF8CXcwyyhymLvVa3mwujDqMrdJrcZyodrkvVs47L58KnqaB1aheEMWeS7VKzZT9mVWRQMwnmMH8qapPFYDP",
  "key14": "5EDBBYUzQ5TMLLE8LPKP9cpjbKPj6bz9ipn5MatXk3Tu9QdFZWCyni5gyfqEc6bQ8LRg5fwHUmHXKiZNGYS1Zggt",
  "key15": "4qQNChQZP5Rm5m2EQ6ZVtaK7GRwcyyvdYnsSvUaJHVgbtneqBdPMPt3Dy1ETEHBSn7ZwwFpBBkCxYZiM5NHxmacd",
  "key16": "5F7wYxjoGba93o2BYBQiLJKbUsSWUvzTUgYUPpwtmXjgeQVWsQB6LsBirQL2J3WS4G4wGHzNcNDRwzQjca3rHGeu",
  "key17": "3dkJdRm1KGRV6389Do6bDGq6L3XCrBD22Xg2hWreUsdT17tJDW9R7Xcjf4xqR5SuELERyPYxhRX3G2VkbcKUBY6G",
  "key18": "29Br3D2w4rLCT6a8PnhZsxpbAB8uUbCmrRs7Y9LNGy6QbvDfH2oqXUaVo77YRASpbLyKGW8zaNLBBx9tfsdxrhMF",
  "key19": "2BGgxzAiY8E7PgLPdVBhuguQfD1oqsgP79CJ6xvQeMzm87SPP7KrSedHgqmpifQ8WGM3Hkoyws2nCUrT8qRvWZr",
  "key20": "2HW5qqNz67dbgVqtMvmwGUeLZYE1aAaswhkAqV8KiQjfF75VNFPYu5SzwK6D8iUDxJpMhVjeeYQgL6KYqTmBvSpR",
  "key21": "4nEKRXRW5ayL8nrubtu68TFyMKMUJhQm1gRV65CwtpvRScRoRiMXetnETdmdvHj6sC2JW7W4jA2SZGxGq7vPFhfF",
  "key22": "vnbptiLjixNCNTGPXerZiRiRMVG4FwCX6pk9rCNHWUHfNeYskaAj5ygUUhgpWjA1Rxbn2C4sEPqGJpQziqjeoEr",
  "key23": "2Q9hKVawceCST1JNfRxv7G7WmXS9aEehvFvTsRiK9TKCPNAsWFnHRGkaYo5VXqGjMocNS1uUc2DUA1U9wDioAL18",
  "key24": "SjHe5aW2wCa2QVDFfERzsCKCrFqF9poKK4zCVysenbb3SCSHkY6TtbQjqJq9BE7He3or6UWLwGWDozGBZpebbd9",
  "key25": "271NvTqG9r1TEnDwi62W5e6JRxZngfNsgsuDv2zoeWorDmRHZxSMLp9GBueFCGi4ZdbGybSLC9rebWni45K28xgf",
  "key26": "3saGdpukgvcjruotsCkzZurGdktFYnTHnAmJYbtAKK2NLr1jGcNshbYGYsGRepJ9DkwgrUgipFURKxme4WR7sk76",
  "key27": "2Fht8bmRgK7E7xYNxF8U2e9rnLHJ6xvW64sMvtHX2RYSMTxDku6M6VLrJCFKZgqHfWYcd7QyY4iHPQSr7ovAEPXW",
  "key28": "4BwX4QcrMqQogxCBajuk33F4fhSX9QKNveSo9sktUfYaKYoLH1uohffErJM9itihpTLJvPZpodLuAE6rxUGbFq9v"
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
