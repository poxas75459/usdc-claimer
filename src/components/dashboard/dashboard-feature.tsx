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
    "SnV6VJEayL17w82n5LmU6WNMW3FBEU28T6TGWaq9n5xiXm8fNnS3naTJqZ1PLaz2bJZ29D4oyNFuAswNXBmuRxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S4iE12R3TUxDGUtvLPLm9fVzfv8oKneofqqub51ocRyFdVDCK3HdaDh4psAtbiJbQYwc87YkH5bBCFrgUbvFrUt",
  "key1": "3Y2MieTuEHfCtxN3JgSx7dHMuje8XVLxiTuidHYbpsBDSaxTJ466V9KHryD1tACZYqYNTbechdJZt5nmuecVLoC2",
  "key2": "5kofqJxSz5ZtQxiY1Qp56tsGkRrV3c4evYQadvMPwdt6Q69PyVuqL5iDey662bYNbF842ikCvKWURvpzoFa4TRwM",
  "key3": "7jJfraMD1YQcsqkZs8tfuCLNuT4RVooTLY2cpUQGRM1gzSVSqZJWKTw8i3WwnTjuZV1nThSDJgSyQiW3EjTBUmQ",
  "key4": "2g9U2xZury4GYs6bnXobrbyaZZsPvbEFwQbwXaBGpiZD6LuPKpnPYENLUAu2Vu8SZJxC4Gdn8bae3Zum7UrhEaa1",
  "key5": "3uEKVovoJFS8ENw6cDeYkG7XLB3sctnfTJLvF7yKmPcFQh7NU1DRvhffPmB5DrgfYVwLc7uYu1q5Uc5KyMtvc9fB",
  "key6": "4oArQXSsgYo6z7ryQUQnKqFgPqf2yDYMd91HbLTW2bwGLwuaMTPtx3GEtgLHDK36XRHLkSACVofsYXnPSpNjsbED",
  "key7": "2Srp9wb3ECU2u29fyydExbNakBqR5iARZqwP1k6ZNENR3skj7DhfBwPu3veb5E4fT4NpvfWU1eosUBdV4kycTkwp",
  "key8": "48PkonhM1TXQeYhYSvjNRkmDQQTkjTEBde4S2senJA5ukHPzmHWKD565qtxaN7xmHMqdaVVf556zhX5LRUgrJjG6",
  "key9": "384KScM1NKgCaHuozySFzX23mfZAqZSgR7qKqUCUS3Sh3H7E1dQkVh7fuZD6UQLB6sN6dUqhPwkvVZCCaR7BvuFe",
  "key10": "5cqkZ2eCL8SixxbM793dzSrd9HWxfZL3XJako4KonbSs7sxbYsPacAMqjC9zoJ2Vd4aRFL9v7AM612QBVaapphCt",
  "key11": "5wotNTsBWjsWouYpc9NnVP32zzHc7BuMeUbdjDH6TQmHUDv8tmFK3VhyJEXybDU5smPnpk9kVTc94b7Nzcdebwmz",
  "key12": "NwXzZww1kMDJ4u58pHz6ZdSxt5D1YqJUgQBKZiXuyKDjjXKoXdA4wfrjxwRKsLhLNvSC44Mkee9L244fbadyPMP",
  "key13": "2KBsc7Pec2otfwmuWatwYceEQKnXEH9BkW5T1RHKNimDGn5frM3muWSFDUwunrSQ7hLR1QFF7pYJBzLegmVzjKaU",
  "key14": "5Qv5cMMWrb22Z5kgT5Se9trV1hc7Zbrp1M6BLi6CrhJ76LH33zQBFD1zZMAsT4Ymy6n2VtNmg9ckkhcBx3rK8NxQ",
  "key15": "5CN9VHNJfRnvYFvDJmyU98icQEyvdTNp2tUPABFUh6ywC2YVDVhyhDksaFisG1eP2uqZtP4E22ZaWFHd6RBp9WbM",
  "key16": "5vp8XoBLWSHWVywCqqYLNKx95rUFsAMpsQiMivW6TSpLgDpgHV3krwDk3ZNRKpxJqHxfP2Qvtw1zcEwkZD7wFLWX",
  "key17": "ZHd9m5oVzchR9Q6fvFSnTni41vu6WwQGTkiZyspCjKngXqFTo4Aj1bKDyvu9rMsUnjAnWo543yVUS1pmVdJw9zG",
  "key18": "41sY3x14vy5gE8c5QSBMeBgfMuhkYbG9V8uYetheueQV1TACnmmouii97NNxKCvS84XGz1ZNBVZwjhC3ExHAa5i9",
  "key19": "3RhooyFrLpCkQ716eKFjWTjgzd5pkGWBQjCrFB9m5tcSoYJpgVVPondgLRd4fiQU6LXvatfKEhn32gQp9KKo9aqq",
  "key20": "GDQyA5JWK7o31oLFVV3fQ6mCKfFmKZThHq4c3nPXerBS3qgP7jNpihVtJ6LtLbwjDZrqRfivNpbQi7pb2YDBMER",
  "key21": "52ppgYgXKP7wgYuAGMW3huaE17GGWDoz19epcE8vYKHyA5yHa3QmK6p6Avq4RKuHjfPDhBanckyinNKk2mYxJkMx",
  "key22": "3kNuPg9Hj1kWrgJqxXv6om8W9YBQvzob5oSMoFMijbyirCq5Q6aeXgHBTj8B3ZpkoKdK3s7nA4qcg3pV7BE7Mq3w",
  "key23": "2L7X1ujHiz2FqttBreP5QEsAeYm5P6dyogvbGRd1m2m89niayR64K8Scovy1ha4vW9QXdAkccAh2DhCzt9NCXjHP",
  "key24": "3Y5KvzGSY9vUJ9UdyVAesyUc7EvTw6xDKzgVK1MP26Y6T6zJZebSyoobERbbgRW24K1Kjyxvk1XnF5XiYZPD7Qgj",
  "key25": "2kM448UvQyMzkYcp5KQ8Ddy5K1GRSTHhXmD49gAeBB91BZ3ubMZPtWtGz6UXZahzfXdBaD2v7HKSCihLkdU2GUNG",
  "key26": "4AGvmqdTAMBzmuRnar4PretnMxsNT6kiKXLuJWWeSgrVLAMtdE92wyHDzrowGj9yCENgGE5Ls6LiciecH9E7eZaN"
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
