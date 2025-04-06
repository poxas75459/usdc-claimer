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
    "JZYf7x1CUbQXSxUhKiWZ5yD9dENy2zp6yByDx9Scm3y312bSHoEJ35wRmnJJnL1i3HRojNQsQcwqBiKAcAyt2Hn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LtATMwwfTzRBZHCkwGKPVEUyvK64Y9S5PACMGCKWLuyB5RwGnswCkssDKiD2Ryf6PAWGXbmUA4RHLjwVFZR1ZSa",
  "key1": "54RzQKdm4Egbsdpmxvetg2NWdLHse4Dxqe9UmDKNjoavvVApg91w6tc2EsmBoFyB8RRFo2W6Gs7H166VF1hmnjmL",
  "key2": "4RQsYVh49BQiu371y5FRBRqjhpsDreZvMt8aBphCaFno42poRrKNT9UJDSfs2djgftCjS5rBHg64vnLpR5JgwBzx",
  "key3": "2Xn1TDaCTnBaSY6S78sofSpXAPMFJn41V1pdHUUSRLreK3d3yTQrBbkEmqVCgq2dpreBkMFdphpAhS4E2f9PdwBf",
  "key4": "4StRU9AGabLrUUP8ioz1bpc3trxqqodu3USsGEEcNTCyfK71PSKWtNLpRxciMA1suPTwH2HSbvWuwSD2BpcorktM",
  "key5": "5Hd5RjhQTGWi6CntokcJjupLyE9oJLXzmPtjBy4se1SwB9DyMUDp3rvAUwZfA34Tsk2SjfCHxvrFWSgenrA8sSMs",
  "key6": "d1qnTZFXkqgtZHbmS5ExCS2dVz2w79J1EiiZAKJxgTWPD4bg5CpjmuMiYjkv554QPLfpFmqLFNKXoR5Rk6yd65n",
  "key7": "2N9p7BFTgCAAGf8U3AMhui8tj16ddhoZ4hXaQMvHkgB9f9MQqsdaiaaPGR7QCPsUJzk3x4XG8tM5QX7aXNuAhQtd",
  "key8": "djcfH5SCogwMoEfemBq4E19Wu1iLKNpeXT2ijo9eQyTh8HM7tEksoGn6BTgihBsTH345fkbCqaxWYrvTz5hCd6F",
  "key9": "3LdaECMEEx87p2Y6GpJBugRZmFjsQrEYtkQF99WYjzJhmPaUqbiyCdMUcrYAWWSLNBu9dswVVUz9FNSfNiSUy3Tx",
  "key10": "4LBBBkbEgNG9RofkcPY2qhzZE4rbQsECDtQ7WbmVSvJZ9pLbq2zp1UZAo6VwnhEANasM5PNus2UhPcdBZMndjMqG",
  "key11": "5U76PJXjsjzbfTXeax7HFnc8Y5ANEp93k7sP35R45tv8quL2Umb36ozuqHgbB2NEr44aVdsG44kKqjLJ3jmAuQj1",
  "key12": "4vzF8DSNNgudCGE7fBYFK7iS4Xc4PmxxXNFGaCnE1YHRDGVQ29CGWdfKpkEaUpZn2UYJyCp6yYSiBvfT61KT4hzL",
  "key13": "3wYuc1ZHz2gkt3XWzt3gCnLD9nXnEizngBrRG6wtPae1EGzVuhuKTHczNu3VHgJsNiu225z8Taf7Gf7EEUJpLGrn",
  "key14": "4VwPCLDCUSTovnxgziNwF3UVeTSnBTXBwrZoPaDtwcpB3taGJ3GaWAgtpCP5FmPVwj7zHGMcSN9YZhGnSXeePHU2",
  "key15": "H1ioZFWGny8kNMaDCJHb1oCkrdaSTLaqMLRgnzbExyC3q8VVk29hsiNe2E6Vr5VZoPqFFcuR4cwi3ChVijRy2TN",
  "key16": "5Ynh9QYdbnnWzLjxfiafVTQwPYZZbCweMcyd9EDKohNa39TN27mrYbSaSoRB3ZDfxwThVXBs66ZgBCchkMM9Cq2H",
  "key17": "3bWvudwAXJdwiRtpiX8h2KnUyJj7HR3u4TLYPSC3JmBT1uro6TRZFBxrMsve8747bJXWN59WHtM7miQidpCuACQi",
  "key18": "2YF5gGjzm41UtGGcFzp6yKmtCSfVXfBCVw6sFV1Vzr663SnK5i99x6bvVQFQ6s5Z7mqMfmkHk2L8t6Hio8JaR42M",
  "key19": "2goJn5tbJaZfcs4WpQ7HaRow8DANuD544d8JBTKWMVuXbgZMUjU4cWeSpqEGacL4JBfTqHkcwfGt4Pca2gY8qNp2",
  "key20": "2TccbLnHvmp8wSUPWszfHo4q74D2Y1ppW4QWNMobBkAVufDk4rDrp9KKdS4R1GvSRaYHrQE6BXuTecgqN8HkKLxi",
  "key21": "3xF4kpLfZCzhQuwhLs9gBpvwNBKUTPVDBGemdAu2EFK4T5YmfzgJ7WL8Cevot6AuigNgQjcBpaJ7rSXsSq94Zgts",
  "key22": "zRbva6n4yM6hVVn8qwUgbDfm9zyQEZzetUSAkt7SihWqRNHWxhAduF7qN5TH68ntkNNWw7horkB7MMHLMLuct6M",
  "key23": "3Je3b4zDSyT8pC6TUCeuxukr9gZtzizKXwNN7mZsnX7Ko5TCgbzcD8WhR7PL1Rx1LqNfqNm5fBHNEMDS6sbjj7eu",
  "key24": "5EpWyZ4d356NeGUt8gbhR7BivMyGWCKHESPSn6tNk2Tb2ZiGTfrpWrBkZsk1Wea9DaWqAQMa3wNV9LWFjFuNVv2R",
  "key25": "2oYntzpaYvHaNiHrbm4W4FSEGZ64pnBbW9EmAbZP8hS6Le693ggKKZtHaBEB4zdjiFiNqBFczefqQNMYxZ2dNhtH",
  "key26": "3v9Hp16qNuikEF7b6tSiqeWBknmiRHYGZsDFabXCFD1jsmRxKoc68UGe6A3eQkLD2CzRrjYJBd84xchuzt9BjAZT",
  "key27": "2ZhRoeRZiCSV8AV8HzjEuKsksCQebp2eLmvc8S915ep38JT8ZbYTNgzUq9U9ie4SSjtzpkRY8LADNcWnMxu8mqex"
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
