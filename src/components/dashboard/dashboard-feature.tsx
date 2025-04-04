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
    "3hBhevKRVDNjYQ51PPTnrozPrqTwbEqDtvNg3RsEDfHUY6hWbtFL65PDVJmbP9hBhKGPWAYy1qiz8M9BuLo9WbRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f3BSuqcr84pUnJ9GtvCpCT8Z7gsK9ygEfsqpbqTsCDFp3Z2t3VeSmA2MszaUk5Kjg9jpmMoQveVBtV4jvYTJNVp",
  "key1": "5JF38dvnzSQwh5sa8yNF7GFhDBbm1gt4Cryvk7J1ComhJZNA5RrqfPPwGkjXvWspkfjBQdRv8VTe1QqvvbzcTayr",
  "key2": "dyTtt7wY8yazW1HRsYkiUrEY5rbFC3hTTcbaebwjSUG7kW5C6qARE8EFSc5d5y4j8jUGoLCqfzMUnohA1wgrKzG",
  "key3": "4VBh2DbPj1HUqPTzzR9MCp6Ep3XRmWodk4yHq5KbF9RBVXRoLMq6wmCnrccPibsbcHrwzqG723oqJ4rfMhS2BEti",
  "key4": "2vVKgVieGBdN2BG1tj1wQmSjFv8xd9YBnLWdpK3FAD3PnSmosYrdnYA5CPDwmf9tfujQZVTtaGtGUV4cfDjRycNJ",
  "key5": "4ZpmzYWJsR6wrPw9d5JdnFGK5zcpyfvkE35Up9cy8S5fK24fACfvPuqtimXqPvaMtJnbTNVV3KeHWx7U18uBdbUA",
  "key6": "2jX1KKU8peNrQVphojaB1qnu8w2ibYbvTKmGZHdctG63zc8Pz9iDANyoWG2rnZiMdp6yaFb6NzsTWS6bBGN6uadU",
  "key7": "btbMZ7BgL37ZUvd2rj6sEAA3azu4p3eXLu3qbuuH5iZrey5rVX36Ww24J4pc9n7mA5nVYs81w4RbPGZf3QbjE2v",
  "key8": "3SuCYLUU4ufxUTR4sKPAmTFXgFh36vkRYtMmtvU7NDQZ8XWM4ntWdqvsV7HQH1TjK7eytkZe5AmZcJwctwKqYao6",
  "key9": "2RqmeckTPtvA4iokDMnTVemgPBrtESr76WgpnqJ5A387GRr15X46Jpm8ACrZCb1DwceEqbc38QQB1Y7tBwb6bMRt",
  "key10": "5fNtxRmLPvGerB5GYMoFf4LS4wKokmD5YDQbtZU6FSumqUWZVEe3CS2xi14z1hwB1qixqRnd2Ejo5fvoPwBbBUTr",
  "key11": "56SFrPofFZde2YFcc1nkYRtedRaLiQXMpvvE1MMRwsGfApFycQvEFzHbXthBDSTKHkdcvc8qa8wrkqQnBGZdTUmB",
  "key12": "543XE7GHRkuUTQm389NXiNjMpwb7aNY5xU4YrqMFX5oogNvoodEfHFe48mvySQQY1terhhbBSe9MSCi2hP9ZrdYE",
  "key13": "2Be6fTyhU7jLGpzoJS9AcsYV5EwZXkzd4LQF6uaQCCo7TXPFAUBTSVqquqBNrntPzbhTsY8V93oz26gFjJKNG6uK",
  "key14": "3rRKiQY3RCKK2iFZa7JJisTMp164PfZ3zWZ8NnPjwbRj72pUaRTba2ZXkx3h2wuhcJG6HgtV5wNq11UwF2HKnc8y",
  "key15": "2nh91FhBSGxjZF4E1DhJwPYQ4ywkXKq27di9EehBuVhqsWoSrtEzS7ymrTs4nsH2MoXwSay4KTSfqbqzAUTHdazP",
  "key16": "3WLKmb9gEXGQRSqcEAmVnwS4ki2UCnAykNxLS8YcoTk34dZY2SQfSCvakzUAny1LMbe2i6UnQPpcpjzaoFVCxSLJ",
  "key17": "34EEgVkYiBdZX63MrUH651ZSKcZJ5yFAhC4Hj7YxMLhfmVbhUDNJc2koiHjWAsRT8zx1gUnog1UDYFpnSD9kuzCF",
  "key18": "52VGBiHn47FdCNCMc2HSE2R8adGk6ybRQxGFakyvYksbM5SxAQXXQM9YpaV4C9PNZQd9eiWLk6ehbiWc43soEkrh",
  "key19": "2gHLUQaLc8NW9iNMMVWGFHAXBzEFeuwu1wcWHFcVG4pt2NNLUKiuyjWdZkWhET7KAsgnqDk5QHfq3829LLaMy5kf",
  "key20": "55jMP2SNpcq2SPdtt2E1upFo2E6GuKBZMjzgBWx5wJnkokwbiCDKcVxnijbgPFxCXXXNWDxLCk2VKnzNCRmWX3Mi",
  "key21": "5QZgvEhs6fe9UoEbdBGkDSwQAHb9SW5FsFHyUrU5quT32kMpNk3UKGA5J586xRsYT25bABi7Va2tZ1qvSTeNELmu",
  "key22": "D6EFTCidavAbKYo1DqTjRVrcS1a8Tgpoj5SwDt1GeswoKWCwn6mk9fcRBzCtbioJHdQdWDZuuwmaqqkgzbS9WVx",
  "key23": "4V7AZ87AcuHrHbTgkEfFWG3fxhCUxXDJSpTLFnsybet6krZwdPXoTtMtmzZY7TLYiAkXx959AD2tdRNRuh5Puoct",
  "key24": "2ELstPExngz7pNoZHG1mpsGkVf1sxBsYpUPMHgbMigv3JpAaL8t26Xrd9ERpHUTgVyjBzbmpVHAWJsvoQsbV1tCt",
  "key25": "352cPaLGWG3wEwvwgF7xr5B6za4GaKRJmSjSWay4o7Xtp35yqGiNoRy4A5VdBbZoFPdKG2AGeKYHGu9JCntTxHnZ",
  "key26": "5zonh9Q5noZjqUx4Ywg4SPLVJUaYWnEsBHd7ohrScmRENWjf8kP91iUboz6Y1AeeVse1wnGN37CyQ9gVZpHKdyTE",
  "key27": "ZehDbuPG8AEFL1iN6hpxuTdDUonekcFUm5EcPXwFdYGj4YF3UocyaEBiHEZBUFtb9p3mMjrJr6ji8u3ThXG2rSS",
  "key28": "5UPjV6VCSXfCnvtxkMwr8JjtHDKBuohqre8XLGLiZRy7zGmN91rBku5wo4TaGXMa2TqwrjGxvnS5cXHLK2k1ZxbL",
  "key29": "5bsFwNjVwSKg5bBBrnK27igdSPJ3wCxh7yWFrbP9DZQuWJn2HUi36m8vQxpPky3ZYdvAT1GVPYgLQrf5Eo74xpmM",
  "key30": "65hBrkVfs1tN5Ds6oi1BZbaRGoKocFNMNZ2pT7gPxEfhGQKuPXdiqkSEw7ZNGFjKWQBpm2BsakSCjbWBEdgP23xY",
  "key31": "2cggJej4BUZmfpEfo99ccpRLWdgBknoAS9ZPbwE3nYVWeaAJuBfZtvbygRHTFGpxDK6YuVQ4Dt6X8hoZfamoVJAX",
  "key32": "4yVLSn1wWChjiV8Mn2LbURRdwqnAGKxMtGQrvuuZ5jGEBV3rTfzxU1TVbKAusV16WM1WkHRvSTLXsVyLuaksMrdv",
  "key33": "4PrzWAoc71odr3jFzNbDdMXr3cWgwbi9BnbMHGjw6P5zimivZf6idMbL6rmrxKd8K9v1mfxWcvJEUB9aXGTjQjA7",
  "key34": "i9MK5AhpFUYLjDrx2pckAbHexgBZtYHCL7FiV5sZVeNu8rbdPFic7znGXtNCCExKMauGLsQ6LTA1xbQnpZPNth9",
  "key35": "4VqpsPbyvc5PEzYbCn3oVmGkCwie2cLR4kkEnkYFCyKTSvxUkQSwfGMvBqXfS5uAMvWYb6cdN4aYF8qgkQxKTZGh",
  "key36": "5Pp7sccQNC78ixnXn5Cu6zgx6FHMte9TDpEds92GPaUTaB4Pru6JFCZU13JstNVpSnkxDusXUuNaMXirTi8DcUyh"
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
