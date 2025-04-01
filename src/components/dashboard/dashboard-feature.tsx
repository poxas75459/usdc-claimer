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
    "5xASTYhELAKKzGZoFUHgyEz3BcYvDRQmni5LAXo8YJWkRNnwFrLPcH3JXX35sPjX87vBFaXTjXZJNtH9DCsuiHbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vAwcCiPxDabXaYfahee97X49AHT5yD7vkdqPhbTFSDD6f66GMethpgyXPEmYKE2rgr8emBy15hnUUw5ewWSxnWu",
  "key1": "64JcZBEPB2gCqvkaT1iJ7qC7L7ScGj7kq2NdpA2TWRwbcjoq6Hg7R6GttCTBdSemRGA2xvxj7zXsaVMvtNA7tyyW",
  "key2": "eKV463SxBsSyHq5wLrCzt2sRkFamoyiuTKvTy1C38EF9FTuVQYSVGrZ43vHkD2JuDfj9KrdVvSiLxTYQbECCa29",
  "key3": "3MGh3T8b9fyXNSuk1QVGTPUUrmLSG5b7dcr1EPCcdSX1hD9UrSBkfS6xobKkC69XdVWV6TE3Vt42m96kmH9P9y6y",
  "key4": "2t2vyGbW8xPAc6qMXJhSnwF2fMoctadhQPWUWbSRgkgWFY8Tcc5ZGyYcYdE3Ln2jp5CUMkv2XLSeEuEjh5veRYPo",
  "key5": "5KjM6mN8HmZozB9cX72PdETCciUZDCcmiL6L6oZiLSZeE8Yy8FD8bZTTiSdcxPbPtN6sk38FD817iWJytRUtKK9Q",
  "key6": "XcVA2uBoZMo17g9PUCaXbvvorQ9pW4jzCPFgjPABdUz4zBSy2D2pWteBupgNzMnJepWxV5jSrzNYpQBihSiN3je",
  "key7": "4tAzErua3Q6KTq1wVXheX347CevXhkiA69EYTSJ5NzWXs45f6FEL5yRknDW8bgcUnuPniEEYqmfVTrMypu1FY79e",
  "key8": "CUwUFKUwgUrj2TPkKL4zMhDXtYfhMajWBSu5Hb2PGfSYGjga8xD7KdwpTWNdv92rHXvg97ceMGCBNT8qTY1HgMt",
  "key9": "4J4CrkMGBGi8HMTK4PXvReHjEHoVqa7gSXzJ9rzScsrfM5pHCJjYChggh4P3ND1gK35fsQPpyUV4of5MaynKoGq",
  "key10": "2qnY78QnkWoBxVNQvATCwtjgiL4EFBnvCjFHsaJMna3RGZrsmmNX3XdUkxyKVB1SUvtYiETVJG5QLCHkhFAYU4gm",
  "key11": "4m6aB9BzXsXQRQGiSnWqWPcaCwwqeaBqcjq8YFLohasSq37SrVuQAc6iN6EHVFryvg5PKXoSfnEVpVZMp8WCYZ2",
  "key12": "3HSJrD9s2X5LCVhWhBce26AGeKGmE5Gs4eHmw9wNKHp1YStxD1KxTXz4tswbS1M9atvFW2PtBdEfmYMYsb3EFkpU",
  "key13": "h6vNKzBNUSxGFLGKYCDfzHZuSiG2X1XnvnBGtVgLZ3qfWZ9c3n5qjvN22HXJVEjub8jR7yvLYZq5sX8PL2uCdNh",
  "key14": "2FjFYwm8VoRBzR5KEAN5M7omm13kytv7vmcGsj6uBFBECfDmQfmZadbdgUqZ3oKhauk7us1HxBfUhkQWqEsgckC3",
  "key15": "wCeoRY4VAhVeHNnx6p1qxgZnq12p2hzARSMiCEuTP98KsqcV5hEHF8dyXPP8JxM13cLhYwV3e8m7HenRHuXYmBZ",
  "key16": "4eWnZRGr5qjEmc3B7N3MucW5xaiV41cw29NkkwsRAP5vRE4FzqmCPW6zBJj7EdpP3gagcBspqa2za7UoR6XcmWMo",
  "key17": "51JNMejoTpteXeM6AtDsegXMM1qfwf1xajyjy5thRvVPSchpxpu7oyrkFWEEhRM1CT4qa5iAhnWXkNvj4dyAfTn8",
  "key18": "4TNLQxRA9VaSQmkrSgAPf67wTPTaja9uScjRD1emygE9haWnZ9fJwSQvDUgnfEMdtzqYHzzmGCXC4jzW5TfQjMRN",
  "key19": "4rXExTL6mC5XwDqmczmqjWi2BJUX1fd2imqXRDFNSiRym3vJ9axrYtXBd7W4rkVVEUpS1VGzLL97TKZTc9fpMndk",
  "key20": "5YtAmrb6Ti1YeBktiuPuY3CyXATnSXTBWrgWkNg1ja3qbJfSqWqp9j4Su4zF1c9JWaqn7REKirUKWq3nBYe2kFng",
  "key21": "dXu6Qkia9MDstYradsdio49ZeD6dfwXuvwgKJFyao2NSw71tcfvSA3PwN9Zf8zAqVi4xYffy2L93igiueReuRca",
  "key22": "221yo5Ki4eQ8NM5DqTFwJhsSm89hauwgQ2G6yapEithU1mq7kvvzG46occdtRS2km4KZ3KEf4zrrcJ1Dx7wNvCjv",
  "key23": "537FjX93BxuZQas3jD1sNWGPFR73aGsiWxgr61s2oNuBCbXFywtJn4Sa4yHw1Ge3L81SNKreMWU7RXVvst842rGW",
  "key24": "2go6hLDgekv9RSCduHXq3eGr3AQZZ2maFidyoBmhnBFgepc1gVDeSKmKhCgoDD4eGmgr3apW7j2YJGQP29txRcEE",
  "key25": "2uaw1RigHX646qCC4ztR6Tt5PsZtxh8pebFTDns4QvaXkrbArj6n6QCSsmqHs6SYvEkmpB2RwwNcwKoydhNE8mzD",
  "key26": "3Ac1vBWHVvjLHPLpYUAJQGvG91ADy5cJ4fg4EPo3QTrBBHdBdPQVWBUYxJs9u6bY6cFj1ecP7FtXpTjY5AAx4rku",
  "key27": "2JrjjkRccSGJJJWcbpWrjqWUMqXPGZbyUdsPBk7EZELXchnafANPXyw5LFw9W56zQXbJzx3dWzaAMnJgc962jbaY",
  "key28": "wPLQMMnSALpkU6k12Fh1zHFTzDDCW7jGgi3WHcUKghD78iwA33gfxMKUfzfJaX8mWUpQheoivSCbyFqbPX8YRHe",
  "key29": "5C4HW67M1VJQoMR7LdTPHGihioBM2LJs36w5y6Bo7uwxkGRp9trwozB7xhCCR5nkuuuMoWjCTwF8MQzy4ow8oTP2",
  "key30": "46pXw7TTs8Phu3kBJ7gmgYMWzgKdnWy1AQqJX7eLpD9wi3BhYGUwU7u7DAiEbGTx3fnwPqdJ1xBUJC8CC3zkH3TM",
  "key31": "5EhjFaNwWRqujewJ2g5f13btCkwJbzhyTT1HVQnC6Tmy4eNWhPH97GQfgwyyMgqyPC8DkHcRjGGfbiLBdedCtKFB",
  "key32": "3UhDTYyaVP5fnJTtQ7ydGLSZQzKZdinrLSCx6D6f6dbrsWVjYJ76jAUq3T8y7XRfwBanwruXe2UiddYbnsptvLe8",
  "key33": "FzuKxrRSSStHviFjhGWdsSh96fjyiZcDCyq3W5ai54p7yh6jnndRyqHT8CcmhTPu4V5Hh79WFWjRBVEKXjWo1V3",
  "key34": "WUuWYqyqJaVwZXnWD8ZCzBbm7M7XHAkZeWzUC3Vh8LzSGBvW6V37d7YXFdB6pwGm7q7kQpHbEXfwb5G3c5SE4fv",
  "key35": "4Bxvbe72brfVXKGq5Sjah5Gi9Xv7QLgi7gt7JWLEJUCBTLnu61ccVKAeJ7zkcucU3PJvuW7vj1MKGm8HhHZjg5AN",
  "key36": "37U5UrXkZ7MUuE2Wu9qKZHtK6RacdKQEJphxopBRKaDbYXLTFhosoZTptArjXg2xz5K6As4snoJ7dgPzqRbw1h6g",
  "key37": "5FKmr8RZL3J1Q8mnhcsApfvGbzF7kd8BWZHSnT9bXQtPgvCSqYB9EVyBHZMdcswnPZJRPhyC1BqAE9oh3PTCsV4f",
  "key38": "5QTRQdasKZAyc2Cr2VaBz26Pew6DNipAnFhR8kYQrGwfykDurpidFkCgd47QaEbuwdfAmmpzYBF53AFnrnE4mvAM",
  "key39": "51hua5zghUrrhbj34FAMGNM7k9Wjq9RBC9gnEfUL8T3Zh5XL43FfnTbpGkwTDmaRCKqeyfetDKXNJ7NrV98ZEg85",
  "key40": "5CWzwn5M2zE6cqJnRGyFAjKkYsGEiPUaqy7iMtib5XtzXBCDR4apnRxUtw8TGuTxnDPf57Qo5FWQRATEmBj5NM2w",
  "key41": "5JrzwPtZJEAxpBk8GdS3W76hRiaERFES54XPoMqZDjnHs1gKvom73eqMhyPwg5jESLFyAav1gNxd3K5VUcGE6fG",
  "key42": "4H4wEmRv77RoAWYtNyDWy6aSNQSRGdRYxNhbjvWEWbajsgjPHecUCnKYSTrhtYnyau2mTVYa3uZNZggFWVnMu6Wq"
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
