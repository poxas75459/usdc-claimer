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
    "4iMb81xMJ9XhFWf5kcJiksHkpZ9Ky7dFVqmqJE1WbFD7kWQAn37UvLuuqZ18ZfLv3Cy1aoNBXSzM9KTpNCCA732N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cqR2RrsKA6crxG2jPN1g2mZ6vfjfDAFGbjZz3yF9HUsUaeZigzmsJw62Ce2cdi3ikaftrf7XUbAp4Agkz1Uvsen",
  "key1": "3E3nEV1SzY6QdVtFkpGuPhyThiTVf4CnkP133CpA2qLK7Cukrh89TiCWktahZj4ZH4fAmyM23ZWeQw2KbBzz6qGp",
  "key2": "5vJLzu4bgGdLExvRb1GwuPCCAtyQBQviispAAZE9eZnZ5TrviYNiNWRitAy2GiZJK47ZfHhkmQ6NAtns9SteuqB5",
  "key3": "3A81VG6V64GJEVASCaRr4p8UkgD9TZouGUZGhDgiH52YpzKqkT412keVo2AN1Ld4eDnbbBGcVBXzHFT6y71kAqnL",
  "key4": "5YUhaFA4LARdS4Xp1pBpfmk23D5TE1AeBsi7i7b9jzmdgSB2bkxcuWwMamH1UbMwiceLcnXqu1RpKvTXJgbLmzMQ",
  "key5": "3q9F7PN1mZQg3nDGPHXGDaGpxQWK7jxc3QuMRebNu6QGkWE7NEtABUJJdz5NBhZC3HnRefkc9wBkfCDn9P6vzKUr",
  "key6": "2sGzrhmaxAYvrPwZrq57e92criR1dX7eXN6poPvMgceWqW31n1V2vSgVQn8war9HeehkUEYX7DGLKFRSJpzqCUrx",
  "key7": "3mc41kbHczJ7S76EWmpDQjujv4hNeQJg9oVhVNCSo4jpYRSUfrEt7dXcE947c1E2vygb2rsksmrfyGwFRCttq1Pr",
  "key8": "YusyyYswvZBPPirwDh5omw8giBT2Ln6zRV1FnMMkgSBpSeqsp15nHT3yXtbtazbDkRZicg75icnsHnBzNpZ4rpH",
  "key9": "3sDcjdE5kmFHKAZb4MUdvAaHcvshPU2P3PiSpwQonFXSPAVWSRyoQyZmTJJ2fkpntDrH41vcCjYqKXeMuRaBbDgL",
  "key10": "4VvYpLm9dVqV5U3bhWLs19y2qw323CSSLtBsT815QQnRJxNLFrZCXKV2uvafrXPs3ESay8vDPVwmvYsxtEL3rc25",
  "key11": "mLoiTcYRXS8vgUAz9846rG4utY5NW1EEvXKbHjYKkDy977MAthTWKpa5C6xtyhZQJtdDda2ocmiDbxE7dhvAdoP",
  "key12": "5uoDLzRetZ57ZQpxuztg34H1e8xgW2YfDwVmtqnbjALQodaA16YWoj7UdLj5ZmsTn8t9C687BzXX4Ya9pdsjz2wn",
  "key13": "bUqfZLkGzp35kptLACujaa2LomKv9znNqJ3uKUjrqHRWjgDgPYMDCTHpuGb1uS7B2VMT8NpYHbFAAw1Vms38Mrw",
  "key14": "4Uu9AbeYsEpWNKpjfF2coZufgjxWv3Jj6nZwVSgyv7uDxW2DDFmGaiwhXWjyGq7A2MGdvETXiFUA5Prub1jqMSso",
  "key15": "56ikGLuPJfsr5mMEgCtEfEU45rQyc98PLi4wTqm6FraPYNxuoraJoUAzmZ769Jr7GkH1rvLbjhDCowpqkAdAS1Sm",
  "key16": "3x4ZboCyMAMDQBq9gUH8MJUow5giKnNrCeZVP3oW4NMQk74ZRxGjpPJcQqA4kKBAcAR9fSZi9ktdw1SF9v3N86r3",
  "key17": "3csPZZ5CZZQtRyD4qF8CxSGA1xqSFMkf9vmdG6KEDGC6H6WDw8HaPqjhmaMSnAqdXs6sjtc1u4de7T5dNv5zHVW",
  "key18": "2Fe8aHExEgpS8SDVF9G8MauqEP9YJ6bnmuNdWmbDYAahMec6g7VXw3cKVHdC6fqutBYQayJivH9H6k6sLqDcEbh4",
  "key19": "3iuXw1T3BpbuEbLfn6zECnCKHysHyfu1BtDpdBMs614zx8W8ttPsAihPA2HPCCuPGgCYPxo8BqGpPGf5ftDVjePr",
  "key20": "5XV6zYingXQAeq5BsS2wvYQ9QGktSFw1ZNhGV2gEBS62ST6zoeYSHRvb213aCN4GB9QB7AvmP8XdAGV6KAgzRJUi",
  "key21": "3Y5Jf7P5B6FP8rT8K9FALBVzWAy9uUt6zzYMqFN32u9vDih4nBGiB3aDPkqKhMpuKeKA2v4gKbLkuRoRgTovDAs",
  "key22": "2nLPB68cLqcudUQx2APE8aJ38ZyKBeMn2KgcGKzobbUzoL4n8X7A4jBDbQbXkPhQMvi2aNyy6Yegu1fU6nxqLcwp",
  "key23": "1u8L71y2aNyGhpmJuKfGWo5Hvw2pJUP6PRAs5oj8fkoHXWCyoJpWpkK83X4xafBXueHfkqMnNzkaqkZhb6L2S2S",
  "key24": "31uTtkXc9XGwbafKvmJ8dPM34UhbpKfkpfkUh99EyNGu7iXidWQhbBvzJcNLnBCC2JLDmGmpmtGhou2HnxVmCLfa",
  "key25": "A8oDa5VGUr4KWjW8HfKPftXrx6woZjCt78Hfdmh9hAspGKiVSuXMFkR6gcsSKf77F73mnTi5FaWgG17MFdx1P5e",
  "key26": "2fNQrSdWreEM8QzNG3mzG2CicByrqT1hDK3Jpcmt6KAZHepLUzPfHYaNQATZg8wRrbn1Vpfetb9nCpj6ThAsSixp",
  "key27": "2R2M4y6caxsE2kMcVoSGCFqrr9XAEYkiEDErs8Srw94mPpsn5CDmEkiXPuywdGSHiPsUEwM8gaRbVC7FWvBxwCqa",
  "key28": "5xLc1tM5k5ktxoqCqD3xnTdEYJhD5aVKuNPxZypj4DXZBhSxqJsLJTrncjrsXZLGPxmoUbgAPJs9Rg3wwKjj8d6R",
  "key29": "5HHTWmEmYoVYwMwRyttBzNRexRSY6fHYmFct85MtHmz9Umh9ny7TpiM9YAMjjtuAw8gPKerU8NzuFwHynMK4eFrd",
  "key30": "2CQ14guiDjHD8rZ1LEnckd3yqYijMxQ4q5sXwaZ7k1YJkZT5YA9DCHyFZKzwtEL8Pus9Y8JSjJ7E6sz7TLx4qxzA",
  "key31": "pAwHcqWUUaFZEPSx5f1j2doH4j6Edbr4dbkzedEDttU9c8Zb8Lx9WrnqUXUmXj7np96girSG4i3PwehvwNQqMZS",
  "key32": "3Jn9QZX27oVHLfcUWJLvCHKQYh6St6gKJVcM5Ui6SxBaZo63Fc3Uy8hD74SS4du3dvbh3ujfqE4FrpfVgC15Cvtx",
  "key33": "3eiXZgkNu5iskaGVVx4Uabwxv2Q3FmbdZkCD7TiWpNhFBM5m57V1XAm74S2xBQr764CsNpAzk966cWpCR96eo1DH",
  "key34": "D7fKPbSytMGqLxzqih1ruca7PChK6xgr1x3k7QmURGr84L92p2MPcBhb7SupxvmgvQUVsrYow4yuNXhwkVzEBaY",
  "key35": "gbKPMyr6jHqUGD2ASKr4Bk4Y6URnw51KMoDQ2h6YEg5X8cQXZANWAdnhkEHXbUThgD8gT7hwa174rWU8uaQNRYh",
  "key36": "4gTzenN51XsAdGkQzdJnHp5duHEY8PgyHDX7rmMgaKRTvdHXhR5cSx6Bxwz8gdJ1HvAnXQjU9pRWgdXepkuv8jmc",
  "key37": "EYEmDzMvj99PUJzCjPbaw7o2yv3AdayC5HwjHea6Ty8KnuF8qBWra4b8Tn27CaKVwoqSr3xqx7HA2WJVVNjJgj9",
  "key38": "tz5FnwJGVnpYhJRjgkjL8yUnAHXBuUZ8Ai46FWKWi2PvdhB8Ap8Sw36UhhfRiXtF6UFnRLD8AAkzBav6jW9jTNn",
  "key39": "43FCAVR3yiFphhQX8aovuSk2sVxDhnFXwJrDAQGXDVTZKH69vJieDBP6Sn2jUqpV5fvgK99xvsZN7R6MN7zgGA8n",
  "key40": "5zXuK4tDSEP6s72JNYcVwor5HCMdzFe38X9mrUHvPXvgLGozKvd87PzxZcW7gzaQxzpUqhSs5fxtxZB4RpUdCbGV",
  "key41": "569Rv4tmUHN2BK4JHyG2Sc6j2TAjnR3nyWpDo6nJ8nqF1uZ8dy3EV9hjNgBxJymtGySPtZJ32ED5qapnwydADs3n",
  "key42": "5K4nZ1K1i33sKgpYmMhctMYtxb5S638MY8UKjCZkgx3DtS9Gu2nexWULAsEFuoVYzzArkwuV8QtLhsHsMfYkyq2X",
  "key43": "4kBJyXkMCss1s3FrSeGF44DbhAJsaeruyMcGt9QsRiur5jJAVPHU9WHsA5oySN5s4cHn9VeypkPsUps3kzxvvT9d",
  "key44": "i4udjmg1SvsYVp2Cw79yeLk94W6z42cG9nYD4Dy7i6gHMZUVJS1XRBUMNnFpoxE4Pi2JnftCUdFwGZPE1vQhL7J",
  "key45": "bMPgYarGBJaWYNtJAV9hC7NF6gBGYsNJX5LdUjGYw6MQigZJEqVuA6mCxnhm21fFFV4xaF94FTNg3ET4ycBn6Hc"
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
