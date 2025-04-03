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
    "4yFoAgrKk7TGcE8JyPA2bnEQQd3GYfsC5wsvNNCQqBB22qyoyonmq2BnmQQwRw5dgg37Uirxz3fEn4C4D37MdXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28WKuCoSsSUB93SoAJyX5kpcS1u6mfxyHnUU2BZZDqwX21VVMNscQdFdnbiaYMmaNQDdQN9ewXspSYRPqZrDtWjT",
  "key1": "3M6xG4BLPbdKwiJU767HtbzgyY5qUpcxvAiPNpmMGu4To22NSANveGHKaeez82SCth1bAZkD63mbFFWk5ccg9gxZ",
  "key2": "5Qh5RUMq73vNbjoRdKhEuaGayW9KztktXxf7Mnorw8UQAkxSShhWDBc5EquZYG2DvGEg34id6cHLfVK6uFJzZw23",
  "key3": "4bTJn2offgjFP55Deo2XKBG5b5rAA5U97vbK3Qe312bwyF7JQQkm94ECe6rFoPKMgHrSfrLeU1cfKfs9HBwwsfgF",
  "key4": "2ujALHCywyirxmufvoKW7AyNCXo8DNRXcs1DUCE7CKEsjSHXa8qf2Df1KoZpppYQtnc5FFQ7SjYgTaLGqzJ4NsRs",
  "key5": "5jGMdCpTVWWzBuPzywKAD7AmaNDLJ1tBPXX1eBWsywP6AtXvGdeapgE3PTgE1hNWEddgumy9fowJQ6GV6d9bGMi4",
  "key6": "5K5ZZ9eFmQp2scyfWYEin9Bt8FzF8GeL1vyrkjYjSydCqun43uJ7nmtDdQNhhm4XfZSt6htmKhHZLDW3vEwXFBNA",
  "key7": "33WJkRbyYtHHM6PayWdrAj7mig9d6gaYVyZEq8fHvxCGsrVcf7zzNKmWt4wCbaZ6BpKG6Zj9z2Gzc7zA9CvgncgX",
  "key8": "61jNLtHfcgQvLgPV2CfR73hWSXqGjZ3bJgAGxa9QbpJTtKiLmCdimpm6qM67fGTwUGPJ7wEwx1CwZxtSS3f9P9C7",
  "key9": "2SzxNVTrNpVrpFd8KX9kxWUbzKxY6kh8EpTtsAT1eFPjTwGus21f9bdabLRsk4Fgq3SCBQ3FiRzW59aYLqvJTr7L",
  "key10": "36gkXbjxmKHsDsQLcKc6B6qWvuTZgTfjJt96nGw2s5Xe2TJ9Q6QUqkrMNAe3jHVE2fowir6cDH1N8FzTUdUG9uxc",
  "key11": "4gmASRc1Kpc3xbequHgKbmg1xrHkZw1xL97UWKsmBRd1vEaCKDPxDJiNByw7wovKSVNvUGVFRQePisjcWKjFLBpB",
  "key12": "48qoFKw6QBnwES5AvTj9ULSUpuNdzhMM29kv8JRv8FzDJRxwQAhksjXpQ5V8iJU7atZp4k3U7oVrLCYjgUtJThcE",
  "key13": "5hykd1kTPvcpUQtqUYaF95sPJ1G2xsUaoMS6nYCeSL6bdFMzwc8gBp8ceA9hcPpLZTdzy2vjwS7niA6MEXLzGgmt",
  "key14": "5jcsjrpV7pJHr4gLSLh9cM142dtyPa9RkJaKgGpBWxppUVAd4TqS9mAyoRoaYHL5zFDdpMye8yPDhbVfjUFsSvY5",
  "key15": "2TB3arAZLRn6ZMaFFAwogxpiSZ8eR9E4W3kWGKHfaQBWTTuaLSoouutzHbcviH4kz2EZtBFuK6CDkHKiJvANSAfH",
  "key16": "bZYYsXbQcjTMtpx8foazVPADPe8JPrhjy4cyiu4gv8FyAeAYRS3VycD59QFYv3oyJ2PqrGKueiizoYQW6t3EfMX",
  "key17": "5r9XcuffqoyfS9GHdivp52LVzmjs3mFjwMc7LkrBPVKBXJESTQ1NeML7h6FotBtbMv5W3hzcCnVxVS1eDpSKkyyE",
  "key18": "61dBL7b1M7ioY2xYH1rGWGg1yiADCnUuGCfSNQB57GKwzQQsH7pqFL11EAGpvP7GTNmN79befxssHRgxjN48eoLz",
  "key19": "3tMH35aXm47KYeoJr2H34sXMitHL1hjk3cz1RDTzFWzRKNgbqVhxVbZeRSerX4xDEUGyU3uG2BBRtmJVWm9mAxiJ",
  "key20": "4jpGygU1WBgTboGdkasWagAvsj5dRoKyi8akZxEuQj5PyyNz4AVvow6yRCMjaNqmzbnqzTDNHjsHZG9KBJcXowgL",
  "key21": "44GuXAwcEh7qhTGRbw7zg5N1DSKERuTH2QCyCU1uXfFgGtL9C2p4aV5YGQFe9ANkEZCFw7dNAQbA7L3dTrRxtM1c",
  "key22": "4p5D2JJCMFVA6V5H7v53vY2JaFrRZT6sYpBRoUFu8sjFnYsTWiXcaBuRGfEWrVniRidrDqDz9eV1C8QrHhzpa8XX",
  "key23": "xynuLKHnGNBsY4S6DpCRefSRbUe3E9M2vy5d77NvpRx1qfWmYLwczkrox5mAm4M55YwYxjoWkCB6aScgQM3Ln7J",
  "key24": "62QHLLzNZDhrjwV79u1d9xt1VGNRL23LcqFbrcKXCC9k94nkVzmZJuXzPzfqNiic8gBGtZNZHzme5q3xQ6u6W7cJ",
  "key25": "46a2Ah9msNTYLX3L4WDYSDZVYh4BxdPAjwtWm3Bhjf9E7ZhxsgvzTCnBZ5HXPox7MEy5b2Zbq3dEP34v63bXVukG",
  "key26": "26kXXVgusTb7fHvqoKNkNr2nS2SAeLyPAgy2L1nXcsW7pyqUoJ5h9VxMAm3CESUXLqhYSit2srdHKS5KTwbzKbHh"
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
