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
    "4WyQyQGFox5gWVwN962hCNbrqp2QuQq3uPXeMiMA24BsD1CjNUZg4SpBgcYTx9qBDMdU74ZFdvZb5ofybS6oECZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SYpnJpPkqh1H1NjtAEcYWBDKNMWYUdLeRxJWUe16mZP72PR75yFGrjC8jpn1c23hw88YEYmZf193YSEcwzDEBTF",
  "key1": "eYeJCCwcmo77NEETzSir8j4eVVbUDyCPVfyXkLeSpV4QbzTm3GTUJh9DtvgJ1VxRF9Ft1G7mdRnTamrV77z22pV",
  "key2": "Dosg5dsN3t4vs3r8PtFnC7HUMXN1X6xqbE9i4JDrkA52iyTyUm24rjFZKwDfUjp2QFZmhoAYAXEhR9jXFQbi2LS",
  "key3": "57aX4HiC27VkoozQE3js5FqKkYrS9PPDGBneEHgQ6RpHucwwd1D64hd3oy67sf7uednAu999Ctdk5D3TJVL5TXem",
  "key4": "2EfQTHuDESWayMFhUaT5iX9pzWukQ2zfxZLHq17avhTNG4t9SLQs87JvJhpJnXfPDfVviHmYDXpSzFK2jfjrbwqb",
  "key5": "3gZ9hLyRw3wDyJSYJXU9G25Lv9aafyQhNFp79wprKxAudD7nYsrmjvQ3SVtG8omPfN3qzHmPREkrNTAZHz43aFBp",
  "key6": "124hCyyKJa6dpKpbGC5UAeRQ9UqXw5HPfbJ7HmxBCrRCRve9V9i9nD1372BTadys35uQLoYA7weMG95VWk9TqhLj",
  "key7": "hEYmyGDpPCdHyS6iZd7LHA5bhhPMrAfWat13GEhFMkEsNJ2NjJWsXBt7S8Qx2SKHJUXLZp1XQHtxCuEcXVtQQX1",
  "key8": "NK3xSUMDRHbFu2z2NnHb9wd1YFnwRzviLjtXWcMyjEoXC8AcuXURLMgqvMXwmX5Jr1FJtxK3BaiQjy8Rpv5Mscc",
  "key9": "3sbJB2thtLHaXFScaU9xmN8gyLA9PmjhGjZdwMdizNPLvnjx13vVrRD1D3wsNnqm25mfKtsR31RJ78HZvb24Coik",
  "key10": "4RWiiQFaPgxtDzc8ppnrQHdNujQdSQLQ2EFLpf3YueAA6kagAi34s4fokdp3ERrCb8drmXRcPi4aNJgF3GxSQx29",
  "key11": "4dScQQiPChF4XV5aorwK8QBsCH3MwtWp4nU7mjVcytTpDXrYKcqEVrdBrrWh2QxJ2i3DbH5TULey4J7khHpL2gZG",
  "key12": "3RLrTzR1Rqivvq9dMXhUo4UkhnwRkTcDvcVgjuiAXMLRby1VGB4E8GYMwJP1a2JV4kwmmKw4pf4zCbbHxVhiWV7H",
  "key13": "5vve9wtg3k3wnc7vaG5dUep8jkJzPs6HypyKw8PcwzpcGk6fR16NABqmiX38fyY7opV1oJcT4Wh8iozfJiK9MVRp",
  "key14": "DTnC3BLBB8onsYnpuQsXj1fR3C7s4dUPZ69Y1TBjbRHztFxWpR4U3u3qo2wZ3XWp7rXUeY1BEV5JyqjhoS8gFLw",
  "key15": "63EQZ6BgNXihv6ZPcJNmqoeqRZJQdQ3V5469meSi32AuqTircHfqTQBxPZoKPXKxBRTWwgdTCraPDYnHi2GELRuo",
  "key16": "4hKjhsAG31LvKLXQkjSD93zJM7Ba6zjjCuSstH6uF69K9ZKxHRujSJP18xZhkxQ1hn6kSx7P5v7Gg4UboS1rotBo",
  "key17": "BKs43npwU9hXbveA1TTGsM1FkdbG7Kmi17c6vNXMnSgtgJr2QMAHFqEY4QAz8SrJjW4BKN71EcQ5tZVkKVqBkGj",
  "key18": "jE1UTFBZJjpMPEvi9jJAFqa7BcUzVymxQcgd6sGQMwidmWCMdtG711C1cSDSSQM29FWYTuJBiJywHckEYK9ph18",
  "key19": "62HAFJSAAboeNjX1jcHTQBdc8oSuLiAg4d8RfHxDiWCcm6GaUpdMUXWLpVhE9zaqfbHiYUNaMUPyyoECcBFgfRd",
  "key20": "66MXYvnZJG5QvdG4rkazpPPU8Vsq4bS9LqtKjqzBVBJRnu1JJaGungE3rMspkTHvXuZLjU1ppkjpMVYR4genzfLk",
  "key21": "3jX5JhytH7kvuivVLkuQNq1XjdnZuYz8pEoyjhadfgsCtn6fojDfk73rb5CvtRPLwgN3Wb2XydetYXvfYndAmdLR",
  "key22": "24ZCsb9Kk8NK5gr7pAkuDaEejc5cRNrGmwSyJXeXzVP5i6w71brfRaGwbPuMhvvhsXcqDTmtPmn7ZcUzY7G3v9ea",
  "key23": "2PLz4bEjYv4HAqgQx6VpgjE8pPsbi8ymnGH7gJhwcEmWEnHdo87dCP3nChLffwLPT47oUH1MDCEbVioEryFL45cc",
  "key24": "794aR9GpYTrkxtLBc7pgRGAfbFAs74K2JFUDbFDRZHs5PHchsHxDs6sTttMAv17jK8exaSzbMKFGtiGw8AG8EXN",
  "key25": "oSvuLCL7FeAVRhVwT3aFsDe6R9hRYYz6o2M8Yy8hJ2LCAFRPfjFJEjoaas8yMXiLAmnRwBm8DsFkuXSeujrEEJr",
  "key26": "4pXP8tuz4xbdr2zDoHn3HByCrK2KVVD9m6TripYFPBoBijgV7xEZ2sFHUxXtnb7Ukc3Et8DWgxDRejHTHWdZb9tZ",
  "key27": "2UJbFiyUuvhC6YW4EqcR8LE3grTsPMn2MCtFD8r3ZYQ2qBXwV2nqMnmCmWvd95aN9ByyaRKLphFRMVG4Nr3YFi2a",
  "key28": "4nfmk6na2xMsRytjJX6k3hZ4AxxzTs7uxCQ9pv5Np3KuJufPD73YzAGWwoocQULjS7pqLi1WoocDwV3fvzVPfApZ",
  "key29": "2P5f79JRmFDtBRrNv211NEASoPymzRAViSjUXw8mG525jC8hBEeg9wWVA2hAemPPw2PZp64m744AF8Ywx4X6HK27",
  "key30": "oGj7bjxpnDQ1qGPaTmntQxFUnFR94PWJSwv2FpMzfzqtKEiB4QwTk11iqWhB1V4wVBkFjtcdrFrnFpm4BSAgr3F",
  "key31": "5UTV4nrs63qHgYDQxvV4u7g3GPZ2CoLHAFamucbxCxcstkvZKtP5GeZxR1k1whvbdLJ8S1BktMNQZLRghhmSuMu4",
  "key32": "5rWkby57TVJdoC1SYW3gjvJc5UGLYBYvKeXGPbn5Lfm7kJr6B1ZLoE4ztUYATTEcXjZFYqv4m2XybJ8g9dXQMx8P"
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
