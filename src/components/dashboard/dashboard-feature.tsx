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
    "3K4EXWAZBTi6nRaFFt7JTRBVYQkGzAvfoLAg4VJhw4Cnp1pV2Z77Um9kyiYofbkuQpY5iJxZ3GmMXpFWxoRDtMqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D6JkqFccCaFdmqbN9ZXxDUwC7EWpaMpEXMyeFrNCvzjTS22TytMSRbf52kXp94uGWw2Q3yf97SM4sqXdipwRErz",
  "key1": "3GPccMuYWqwoYnFhJYDXfiPkHuJtjPfhjyVchzPTHiPwEGRiLrXKShSiirGCYDxbw8XQvP6yiqzQ58u4GGrMk2XB",
  "key2": "2S8GZ7wkZ6exHfZ2dRJPeVM5Ji9bvJ1xkuQJDYfTmpGP6vuGP248meq3C3Z5QX8CdocD38doaquLpDkf3gCQWx2e",
  "key3": "5mQBenr87ArW4JYwzvN28Bkyt8CM84APKEptsEx2tFuqYYXMMkmRBCQDYh2CQjm1CoNZRMt7mAzxexQVh2d2op9F",
  "key4": "UPuKh2Nk9EnBLQ6kKTAYxjxWNCxL5pqec7uW6sV2sGskEYEcqVZYtGTc4KoWxmqxRDcKNdBLJhV2uJEet9g91T3",
  "key5": "RzmfRCrFbzyCj7y5vTehCrJHcghiJQ84Xh1GtLufXUGrg3kcNd98iKKKJ5KtP6E2LX6kpaCXuUpNS845agUEmjB",
  "key6": "1FQHaxL8GKccayHEjmfScoXmCqCvPAjHEwEAMVmQe6UBB5NKkg3aAZTAJ2VTTG6xGsDijS3iMxjdJad1QhC5FdP",
  "key7": "3DU3iuH6jncrQHnuY1ufWVsMz78rwij6PJHpbe6AxzUdVVxkFbojpmwBSFMmzir444o7nKcE1oTaQbrQgi7EZzXp",
  "key8": "4FYLNgwL7kkonP8Pj3D4tegtt1DF44BbvwEHDpyXhGVssMgjZgWRGYgQ8VrkdDG6nGTi66QPr8EpuYuDMrp4Gy2i",
  "key9": "2gCrqSdcw3tJeGnetWwLWMdsHgt75vjCNyQ7ptZAfmq5WeLiSHZHn8QEz7t8BEXncEKbeqEd3gBP8CBNRFGgHU5H",
  "key10": "4mquXwLqe47iiHEoSvosiPAfrogScdCr2EUFwcAbx3aDQ5RBEG8yywB7mKHQ7N3MGHScqG4vkEBbkEAtEBKBEhyu",
  "key11": "34tZA4gRdfLJqMJtYsmBRGQe8f6i3V8omDm84A7yJLv3Eo3iBTv59KHrgeBDzcPUuFYZDWqGMoKw3tRXMLz2FHTX",
  "key12": "eQXdsjxh1sNM6TwsSmQgvcqKTFnteuhCbwAzRfwuXKZi8vKHSrwiqrKGxv9gpiHrThmYZ8Dd22Tw9s9zftumgEY",
  "key13": "63PiL8nchXVkYEh1PYiZ7MzetFRBpvnwTqhKjwmoD9p2mw9Lvucwez1SAgqKz4BnKz3Menz7NPp5rdTx7jwfkjj7",
  "key14": "5u2euYhRw2GD6Ggfh6Lz6JEgamv3U7B4PhVrcK6Rnwp4rezm5Wh9pQJktw3wDPQiQDPkbeyHVEcChSy6p5oUnPuB",
  "key15": "5NJBUSCv4Z9K9TizpzZwvqZDR4MMuQUEqctmDzb6HE2aXjQeap5L8bhdPY38JEDSKiJ6xus8nMPLqH4bGupiqJJJ",
  "key16": "5dAPCLDT87Xu9eiyJhCqetqSRDh8tbiEMg2XAHX6iZeFjcGxhJLxUvb2erPWA3qUgPbqWkiXEGeArmSiS4cijNUU",
  "key17": "qhdzRBPUZ14iiKed68DGSTQ3WWBzgR4ZNBdYuPGDPSAKpJLTraE9ktrkkbkjRPjBaF7trzjpX2iY2WQPW8kTyZK",
  "key18": "3zETVNCLfBALRHsSiCsRu1KFy64DxebTY2oJMnaQHkT99teSwFdYYE8EZKzYYykC9tH6bCo1Vesnh1oCstH6sy9E",
  "key19": "6p43J7RJMdKDuhd2WmSvHAz2ZnjqYCfRk7rgPvYN4yLqPUKgN9vzxtz7Lmfao9hWvuS5jaGEXxCZMCxxnAMxTUA",
  "key20": "7vxr7qhG2bNqvTYbm9o4QH4pWLCG7CVjCmCrPqE9tSi2SjxTvQ8SkkbCLmGbg5VHDuDpfb8aW8nuBvFBjeYRsGj",
  "key21": "3CDRfnw5xvqwAC1ipoPfhUu3gRc7wuN46BGBhD1xLx8Jkduf5JCnevjGBo2SpWTUevcFbJidE8sTVt85xt4oePAU",
  "key22": "3LGKoChM6KgAcrE7NxLMCVK5qj7DXV5S4qBmEg6jSDTZFEbQqGdvzfm77dz3AumN8x3UjXjLZvhmG9q5MayyKDtA",
  "key23": "2UjpttBh5kLmWFpCKXtM4cx5abHTNLH8BhV7nBL7JNEP7sSKBqdKJnBWmmGsTcGJ5WWnJLuDqxb8LbQUGtd5NCc6",
  "key24": "ynxXAxzWNqqjuzeGKcm4c6ZjeaByHNeErTVbgaXiMLxmYjTuyLSYo7Y1oYZaMLGApojP2zoYVDoAzeoFGQjMoni",
  "key25": "TfKykmLEqMR4w1HyM5yvazqa9D5UJ3Q8V9So5pDJ2GURAzgQ6JQavfaTJBmz7UqZkpePFs3YLbbDa4hMq6iancR",
  "key26": "2aiLbkxK24fYV6VZqLuiZ7Nz9fSCDUck6q7inqmtzmiswFRRTjKzGjSY7tQCg1tPDWeuTTZxYhCMM1ipzfJZS6KA",
  "key27": "4ZBBkXocgALXLzDAoakE9LvLS5dj9eDUcbEmR9jtHEa1n7XApWFogM3M16kNygBCzmnxqQBVMXu549DsWUN5QfgC",
  "key28": "bf5b4haC449wr1Yt4gZ6PSm9R5Kihzx3YpKCjcDPaiZpih21tgoYnksxDDyuYB767cub4UDHPg8f2dzDrPnqBPQ"
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
