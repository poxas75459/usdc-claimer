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
    "2vmWmDgySD4euCQkZvjfVsW5bHPEkp6yfYeZWxa9tSHuSrYHg4jVcLXL2e2w6RUWjhsdvTkx3pHf6aGGGdFbCWzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CFk8P4qECYrkqMJaiEjwrpNyKmdqKPwudYUyCk2r8LoyXGCiXohxr5WbCcJ2j28h5Sx2fqfhKSe9j9PvCVbFtom",
  "key1": "2BpVpFWdS2bt7XuXS5ocPdpxChnnZn34mkfoxif124FKd2ndTEnfY127ZfCniu6AoKeyDCGkicoW5DE94anWNiQ8",
  "key2": "3w7V2westBGwrPZ4b4nih9jtSAwHtUS3UsXbaiLi252CinB59ePRwXEMKNfKYVWY1rfbP4xLan1UP7o84mQPqeWP",
  "key3": "5QtFcnEnqWAiu8pdotbMrnzn1WQffZqxpLcmkBKM65VpEqeVtCgqdGviRg4BRq43c4eg95XxYzyakqyKUuaRKvn4",
  "key4": "4GbtF25qqov31i2o49TAo2ySbbSMvMKG749EojMzShp5VXW1zsz92ZMmwCLmDVsypiyW8NaCTReeCiftct5zWvyd",
  "key5": "A5vfFpop9huALDWNJPQugETzZc5wJSfikUJgMJnH6Emt96CHpDSz94xbpBezsqiJF4y5jNzDBZDdFM63MEMMs9f",
  "key6": "24SQgfzFNKDpSna9nMKqejSQhNkQk4Tc7hmvbNv9Hqe2G52yHtoBmv9CEavoHQqx74kApAuQxqvJtC4f9YNpmMha",
  "key7": "3XKzebTgPm4Z5qjJykMcLegdTF1nU9gkvb8WoJtLMG78Zij8nzdscHKBYDD5QUAB54GVjfh9wz3wFx1y3LrLdRbw",
  "key8": "56F5wVhyLEDarCCbuf674JWfUQssoXc3YhWcFJjAmnXV3hkNX9BuczJnVMk3CnXhufErd48ZhJGxicMe6BSfCg7h",
  "key9": "2NJceH42kRfDvzH9cqM3eNKp319D5rEruKA2vrTKVubQ11bwrPKKL2Frez1FytAcH85U86GHkyWpYAbG8hdBrfru",
  "key10": "3CjaLvWf3KXhb6mXmhMoVyCrM14QcZVLn6jvkjyK1hJm85kheufn2xP9JvteyQ5NWdjxWbg4Dkp3XWwi5URXhTei",
  "key11": "3iP4ZeGyuQzwg3y1giTTFYYaBnPTn9x4YuTWo1YTosrG1ii1pWzvDCvgw8KM7ZnR5MoKAiHnecepB4mqkA7tSPCD",
  "key12": "4QJBXwfCTSxbjpNzqfMQTtqtfDy58h5vi6gPHzhcVzrc9gfnTUAFeR8DMZk6SoU1RR5kfap6VJd11u5TJESbsNfi",
  "key13": "5qEDdAtY2qCTJr1ZMVcimdWtEUtG6jaguYL1Q3Ti8sBq2RJV7iDHK5nkxPzkBvUSoWnPoZLZwJowBkLvpXco3xcr",
  "key14": "325kFyTKoyfQaFKUYbfg3MZ9Zgipgrz4CSD41eqfRFfbfkoEfpiGumYtKqhD6rXSV6bPF3jU2EZyHA9iUz4bwwPR",
  "key15": "4tnYgoFmjsbdcVpTGet5JANonoX9ZxP6ZSYr9pSFPQVERpRxyrYw5H3wzyTJ6JnG3PSsJfD4SEQsSohVL99Eecn6",
  "key16": "5PdEmNm9SnRDxghzPaVE25dT8KD5B5dFcwiYVZdqQNwXQeYnjWiedgSRcuVu9MuWXTEcgwvs8YLNHZn4c5LhhNh7",
  "key17": "3JWamnFvXrK6FHWzeoep68342uEUzm1XDVt314rqZ6uHsPasrFg2dVpXNX4EHAL5WBMNBX1s6UzqL3KydQiPrnH9",
  "key18": "ftcCFC9jZAwKGFGcUgHxtG6bGSw4ffwyfhKquoSqhK3BMEGdid6vMgt4nU6F9xCAEC3odzn2qpucje5VBi7L2ud",
  "key19": "akguLSbWLCnSYnDzB3YiVM4ndtKqkcg1RUNSxjDDFgf33AnA1VCdsuvGMKwH7DwuyJ6JXCWPmUZ4qeXfqk27MrZ",
  "key20": "5YtJU16jrouoWSSPbqsZEtQwnv3LqjaN9BkSHGaDoQUJwvwtYALn6BGvvtZv38JVUFUP95vcu6sJvnXfsFpdr9kM",
  "key21": "DZgH7anivLRNywj6ghgrvnKTziFYpRvVM8nVNuogUf8yMbVTu9yLtEhbF5VTkbbtu3Eq8NVLcHmCn8ufXqzVdHe",
  "key22": "XD91UHUJVEzZTRv4g1ndjJ87eyg8X74etfW8H7AeZgm7HvfEK2vSNywkWX54nZBve1qeKPSU7LNg1XPqPiPuEFX",
  "key23": "2CeJScWniPGU18hmU5hdCTDUN51ukZDKFttAfgFBK3NuSHPLnwRMr8VGAT5QTKHxn14hNjCK1sCb5N4G1UW9Z5m9",
  "key24": "3tzWz5b9cCk4dk7YTVzp3wabZnh9B89wh2DkayFRBVk2vzVhvuuXHEdjqqGH73mJkPyTn77AcNwDa3QrVg2eZn8L",
  "key25": "535ezhwRBXcUCeFwtRXZVwePaGvmPwLxAeBWCY5bUi9q8vYZ3UwNcBHtcTPKk5zDceZFcmXExGZo4F39wtRCLej4",
  "key26": "3fmqTYVRH8apkwLPkE5P1twD6Ubp1wSepp7vzfwgddpTL9MYT9Vs4R46DnkSeNbKGUGuuq67AmMQdMQRtJp6gaBN",
  "key27": "23NMKfTXSBFQsndrQtoQ7taMkcKUP2H8U5CUU1mARm4JtzgNK3BmTRVq7DUJySrKUPokLTsgMfDcuwUJZG4Q4zTR",
  "key28": "5k8gkrxCZrXLeQB4ahXbCDANkNzXqs6ZVMBX3NgwTSxbkAyDNbCbLmZpzSRkFukC1mjxBkGM4c3GaC26jJEqgaQW",
  "key29": "4M5MQUsfqzcasYHukcRbqPFWcKHeTLBcpLKdxxkCNJTPFdm7X71yDHJLGUyNXYiMAacDz6A4RjzZecb4xc4xKTrE",
  "key30": "4fMpmfKGdZPtnhvQQuBqXuXzgMVRjZ6Hksi6z561HFRVYuY7uUfCjGCtV91STdj5mqgwRbz2B9aeWWLTtcXCvjD7"
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
