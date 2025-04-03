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
    "5VZv6UCPYa6NZw1NsDV8mu9hTLGb1cniEHE9kV7YvoKCXFwbnQCKQMLxm8LgN7QyufUZHpJz4gGpBaAvMXz5NtGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bazVsM299Nru7NxtNLiUmG5hECY2TUJsCcAGc8XjJg1gYuBx2NUj31XnARtzE7o2GPTTrA345CcKYpH74CcBzof",
  "key1": "3mgQtAE5pJZz1VMANwoMyNHzcKrf5DvEqxivNNRyM7FDcczuny5UyV2JSVx87L42pu1TgWkXrxAUwSWEHozsMQsr",
  "key2": "3biwQr5ZvLZhkEkELBfK7uZP1picgMcsSLeHZMNivGFJYmvH6HzFhBEcdA2TMSrQMvehrwHPd1GcE1wr2knrhaWr",
  "key3": "3GnUvpGL9jCUYj2QG9NwjkxrfmQtKXVuL5D62pGQKCYJwDcKcqMv91QCMBqu4Aqn5h3E251AfqNM86sUejKSJZKd",
  "key4": "4MU1vstMwU9nY4RL6tPTcfPCnucmHpXLwWAXdHV9XSEWqGBqUPfgrjueRppjDx8BS5Ctv2a5HNrCF9A4Gubh9fWK",
  "key5": "4cd3Xdzp2XQSxrZfba8x5Q3SXoHQcvVp8isTMTer48PTzPveb84qYXsV3ewPeAFUSHoTpbG1iDwgfPNYjS57Rtbb",
  "key6": "3cmHtv8CHC6ui3DXuX5NJJqVxVtzxEFrWQN7q2Cu16A2mRivkag52xAAZ8oFhLffaiQ2DrTnm6MHYa7xDPiawmhc",
  "key7": "323SNXkYWQwg6W5fT8pcaAMRJUDfFZuzLLQa9oD75ad3QGFifv6ZdRycAQUu7RqV1nHLMQhd26qgvCWDQ3sHF4GT",
  "key8": "5ms1sYkW1tWy8HktcLcmKhxAxdvq6hCZ1Xqs6awGGq63hNtozjAtNhHL8P6B1pR12MdGN6y1JTcY9zxr6QdCCs8z",
  "key9": "2Mo6HrWZQAx8GigCJ3RxcmpBWXXCJmYZSG2Cx1MxX6Fg6xgAy9hg16pdMig7RnM57hcEiWs2J2w6D2R5YM8nTxex",
  "key10": "3UFLeKnJhCbybb9rmfVDAABqxyFDcD1vaNKkwwTx6dfnEy8DSmGKqcyEQi8nGWJkLLLLuyyDCqeM6kWGwKQa5bs7",
  "key11": "4TAvShxMrHXypgT9zPW2jQEM3DSMaCYLxGG1hSoCcPvB2oY8jbynGEzaFWicT4czthinibn9naa2uDS2aqRL5Giq",
  "key12": "2DWCjGFSsBPUotKkWQpDfkP1Cwzwe38LBrsT3uVhgmyDuhX4xmDkkjdJLdmxN7tXA62CM7LJMaSqLsoiwn5FVmwn",
  "key13": "278bMQo39BHKfKPUzuEKgubZPegtnDa4fQ7AuCA5qG2Rjyq5M8p2u2midp4EUTiumLMizUP8WHSB6PX6fpwhW2v5",
  "key14": "2G4bfUYJs9jdhRJyoW6uuvXuhQB5125KLxv2gV4h73SHhXa69gkWMifCriQvCo34NiyDX7eFfz2ZRFb4AZPiqWo6",
  "key15": "3RYD2pdcN4frtMH7bipGBfeDz3ZsKohJGERkt5AJcd8Pbgu6QXUzaHUPpTRJ1pZuhpEepUk5NLdioXxT9XNWibUG",
  "key16": "4ZHVENUFnXCqusBUx1PkgMQTML3zequXaXGcKC1SeN2qc5iDBRgm9c7sc9A5qDE859brw9rX1Kdri9eUiCdf5181",
  "key17": "52hVZueSdshXTZMHHRWhnHhtXFurrsBBqgRRWoEBfW7fQtw9rNRCdapAsHoju3tNXgFpouPD7LovnuoQri1d1Ecs",
  "key18": "F1LiUm76izFBRqhjCFTPqk7fpafSD4qMhEyULMqYL6svZXxMxWqHUqy3bdNmVNtLocv6QHT4TFPdZS6vkLSVnvT",
  "key19": "5cvvdw9sFo2gur6vriwi5tmTKNYCb3DKCqUmDwWnDgH5QitFD1YihmQwvwZ5jeGMYNkE7UTzNNr5bsDPfZ1CMy1X",
  "key20": "3mViUNHLgVNWKUZmqRVy2BbJbppo41v2ToCtJGECpNeAXktGE6ZMeLUEnvtaRktG43xVP7Q4qYWyK34zF2Dccbuj",
  "key21": "32ykjP36WuGFL8Woc7wFDwnEoS1CViD4qfykjFiCe3pSFwqNbskovsJSoNbrDSV9cxgEFxUmwtxtKVc1NVzpmrxn",
  "key22": "42LzpKXBsVjkqDpEDBDJGXNeBdVih9m2jLLXrHL76GBFJ1XEgMYNEsUvzL6fqM4FCkwMAnBNS2nsBkDEEFkJKU3a",
  "key23": "3v4pJM8Ekc6fxjVFMD2Gg3FqkJguiogHFxzzCrUV2TLypoQT9Su9ZTyYwHrgrxdCSaoVP5rD9eKs7zrPXuusAn1d",
  "key24": "3TEyEYd8QC2oCvmz6oBasHryDtHBEZUrRBx7N1ottBEVz5NMxyKfexsmZbbzBKvmzstBLkES8ozMjbC3B7mJNG72",
  "key25": "5taB17rWBny8HViqHzEZSL5uVPBE7nB59Qd1fACnH2NYrSidbA89raY5qfP25zUT37MBhBF38n2xYGpZsuWBoYKH",
  "key26": "4QhFXX66v8EHsdQQQdKS2QaNLrHYfGnmS2PuBADYwdWDjc9199wShtCN1mrHPL7vDvAFjuLkZbdynMkerHZoaxJ1"
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
