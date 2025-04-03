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
    "Lz8Wpnf3CbNtBHWfDChukt8iafJZVsjCtZgq26mgNSxPzGYjd6cygLnYN8qQ1E8TCRNLMBdYxH8VTAGFrfHYAUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Sx5KBk7UwJ6sCcpd48FkDBLUrQ5kBqV5HU5tfTJAkgdX9XPAHmSgpfSp6y7mW84oyqZagTZFmwT1roEzY1P4mY",
  "key1": "23dMcwrevcDNEB4wj3p84vWvBnT9CNVBYb4i7ds83gbs5Yyc7DhsXJmDVM1ffnhguouXX4y8f2EsnTdmAFLqMfCi",
  "key2": "4RuSANPYpyiKk3URqEevatFUraDANV7MRhgsPhubrtrYfg4ka3yJPSJ4LX4YdPXYhBoPcb7SUEJyzqLPFriHaXyV",
  "key3": "2R5vjbbDzNBtq3Z3VtL7V9BEh1V5uPHWzNL34k16scraP8yCW5dMJaUSV4xdYuVp9DTjyzP1yTjgxnqcYS6FtaFb",
  "key4": "4tjasnFTe7f7tR6TUkKi97ENQgT3Un4NfAYR6E4kWe3bMyr3BRCkz3rWk13P2ri6M2pr95wEgT4nuy7jkZf3JfPm",
  "key5": "5jBc2xGB94FqrycbRXKhkAq1f7SGu1DJUtnWbwBTcBUnf9CP41Qf48nyPnpsE488EuJ9QyzxN5QDJcWtqi9wsM8V",
  "key6": "5YhQpnGeS39ussHxY4nZUD5PWpdY7kaeuATMn1wTy1ju9s7n1uscC3Bi8X8BuMQZZHMjb9tZKjsQ2228HjmijjwN",
  "key7": "opwiXCRNMs9ypEE7rBHWrYSUwVjNzmHkFjA94YA43w6csjzQ7AvzsJyM9WPx1bBpukWsdKH53SnFkmBoCPP8dUW",
  "key8": "61g6a4wLWPfmLHQCPzJ2St8eBUPqwZTH6HbTFUWmWD4Hdpjp1233jnQH6FfCuhJbEfH7zpHd6dTfhQiBcw1XMMg9",
  "key9": "5EZ7ETwrgBN968ehPtS11mHPQWBMVNgHXQcqkA3BprnAGmQEh3VbirNDm3ZkbC7A88TtN7C8g7Pfp1r7XRgTpm9",
  "key10": "5B6S6ymYeVAA9nseQp47oHh2u1MNbzQf65dCWqoxE1GqppEfMCAkPN1bqy13XGBngWKnbBrqTMXciESnNE9y3wnH",
  "key11": "4pyn2x7RxEid8WXmLYaVyWGLgdtSgGmj3hK6QyNNgLfFoW7wfSvNh7adHCLhM2agQ1ZL6SNxjFJSQ3UGr4FAcCd8",
  "key12": "2tQFxQwWXDxSL3WzLwv5ZpuntM78WS2FYiG8mHKTmAE31xRCUWeszeUSRV4eUhjRgKDeXvcAzTwsNpCPpvT9EDEe",
  "key13": "32DyMWaxsGEL6jkpBjg55YQihSG5Qz82h7Vcqf5ngFc6wz4tV98jRGT9EUogNmrD9DCrw1fHFNXjkYFUxx5xZoP8",
  "key14": "Qa2JAg2HU2gGzLRZhamNA64ghgUKwxNuyLAPeR35JxJevmEkHJCe5xMSyVrHhAe3t4y5bD8sU4aCp6CoWPp3d2s",
  "key15": "2JgpvQ34ibC4wWPKrMPEfNeuez22xk9tHrzUqHgSmMxCwCbv8EYfBror1e5VDtHGM9jwrGEm7PAZCSQmStAQ8ps1",
  "key16": "3C18GzopVJLDCw4b38cpvjEVPHAXqSX9v4vcwuyErSLdU5w1RNtH5WUhNpFTHqjivxnj3oKBSjHJKtALsi9eBjxW",
  "key17": "MSBjAvqA3WyTRhmPdQsSB58YPh5eC6ifz7dumcxYpHsNgnWoMEp4wRZswuTEi8x9ThSPKV8gAkTSHLgNpSLeJdp",
  "key18": "5ZJ5JifUHQ8wjSdnb1UBdTmq5XNXp2rzaXvZtBr7TzgF3aQKyDkzFeFz92CFy7Q568irkCrSeCGyRfmAgjtWTM37",
  "key19": "5qhskTHyqz8PLmXX2833CuYiPGCNnh7Go1cSuDSwSAntcTFRcvKdaA8sNY5QRVFPydBwZd7fRdTG2s4GcKgRmqKk",
  "key20": "2JqXfzdjByqv56YtX8cKcCppGkUEoqY5ga4dXaP7Xbv3FRT2x2JfLAAAuf7gsXpWPLoTKFsXiUDHrmCPKDPqivh1",
  "key21": "2MZkpANqRYS4D74GiNrU7QxHcMa6WMipYDN7B51zF2gyWgSPFBJ6jMYzM8X6v3wkn6NtMK2bLMiVgdqcYi3znszh",
  "key22": "47kaaBFYAMy2XrBv8SgFF12oNbZGCL1roaHDy3wPY11xmWbmr9YGWa7wmkhNztwksaGMzCQ6k7TTAf55Fsx21Egn",
  "key23": "kmbBuzWDWXwsiCkrgVxVbeHEy44rqhzz5WHR2yB4xWVEk6vwbVR764zkLZiyNinjsaD6pbPNWqnpTe2GkPGjJz9",
  "key24": "2T5ap2oxBdE4TYr4D9Bj1xCCR16BYB833uFk18QiTmEU6hj1hPD6Yi31Dh6qL9C4753yDpXMdmVrfTURK2m2KTgR",
  "key25": "5WZKAbZwQBayhda2V2NXn8AVmCt46knfSSw9m9fDVmudEori72HcsrSgmNqpnyr8H59pa84AXqcRGPcHvPAxAjP8",
  "key26": "ao2tw5RkzGnpfKhbjYrYjRdw3fUedkTxeDQhETkVYTb44TttM76sXBm6Y8DCcU3BptnNEiymL3JDooxmJ1Unhrw"
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
