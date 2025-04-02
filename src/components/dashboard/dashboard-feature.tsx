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
    "5S1zRAqKXYqRAxSt2JczYEYrE3xpkMrAVgdrzxUicaAYp6EGtwKPEeF6eHvx3rG1T9egk4zSHuXKczZegr8khNB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Ecp6UaGqGt8YFcAWe2r3EQTmxUi4wEm1SSL5qYQmEQCwKJSsqMce3ojCBeWhd2nawnmQ3tbtXSXKHtfaaRe7mR",
  "key1": "59vDh8PNVcggyPpDFP34JwhWC4zLzG9Bc7qcgSJMN5eMSF41xWJiqFqVRa3JRxpmzTmAMNVwtEfyqH7iS19JKc6Q",
  "key2": "2WNZ6FfvVxATJkmyNspuToY52QJaSW6LD2XNTnGjCu1yGMyYgZyn7uBDxDRjgsdUA4bTKTupRaxGFjzNtfR4FxQx",
  "key3": "39ngx7QF6h8HfzRkowkRAfdZyTHX3tz8qHuTvzk5jLnyv5ZZNVgm7QBPDB7GiMQ4fPis9zAHwibi8nvHXy4cvmVh",
  "key4": "5wukM9ASeNNTogRGABzb8HRmHdaYwdCbZRcf5VrP3Q8RKp4boyDEjd92H2RM4z2j7TjgTLtsTvqm4qPS4DU1VQMP",
  "key5": "5nkPvJ2xJsecY59nLKrcW69ydrYrqJUDYpmQoTtvoT3fiR9w3NZkErYKikyfc94UbVF3d8Y3ay9MGoBznduf9gmc",
  "key6": "2ftaBS26DjWDN6iu6caJg5F34obsK15PoyB86Mc69cReN6aZ9kaqjddCVETuWv6LEtWB8CfuYR9hYTeyZnZieeq8",
  "key7": "NVxjZe4z1MceqRTxCxSwRT3ApLxu61csgFTQV69ujyihSSy2xejAzPKm4NvbxvLApSaUhEshsA36AojV6oBYVEk",
  "key8": "hKbXBvWyRyLdcPsYpwACkaH9J5oCic938L5QqFWa8FJwmEwsFXgyERYzAVYTdEjWuNjm4bcBo3m5i5zzVVP5QCf",
  "key9": "5UDdXpN7nUXRxTEJP1bUfEg64MDHitZo6U2yNSPgMesHa2nWzx34MYXpunai6uPC5CM4o9rjKzY3pybictWR46iS",
  "key10": "68fDFzxFk6nAXFncWuW1K13ukvC7GQjXpPCS2JN2tJYPkjya8tuihS7sMXXRicZPkHAxK7MfzfUkr6tqWjtepRT",
  "key11": "3YMozxsfr9cnnj2isxzZNAoMviP4eoYqb5Ph2UMPbbPAtEX7LbKvekC5wEJ4PH8juQ8ow4Z1zVTeTVVuWx5xn6mJ",
  "key12": "2DroBFdbLFFdC9nZaGpf3jCZEufZqETrW1ivY5V1kmNDuPUo7RkNxqtMfAeVQeNzQftfGJwPwodhrEcXAJmSRzSa",
  "key13": "66kbHkrEFpNPMtWFyP1Ro521ffWCD2ZbBfgUhUYvXo1a9b1ugVGKBB3vPVmKPJXLNbjAwqEn8eGWtvGad7gRfKhA",
  "key14": "2NYqcY5mu1MtTHHQY13YAPLu3JPH9FoYDP2f8xYodFNAK5hMQj5vJcRmBjSGgSDZa4FCyt1hdrkYhwX2UawRYL47",
  "key15": "47Z7pX2qx2acqhvMAqf9MQwDagBxAKmDRLyik67UW9GsAezF9iD3MHMVDNnPvPDez69yDxUGeE2bCMxs4txvMqEz",
  "key16": "2MTD7GGcVwEXxyWT8mrJSvZeqKkpywAmAJztRJgzB9zLgFHGJ1xdUHJLDiQNohdaLdVjs8iZBUxHuNPySkCV17hq",
  "key17": "4nnfciGDTMax3JkDpcbwFC42cmjYNpSK6LBwkSX4My6fxZgRTDqph9KioCLJAAGBox9n537nAXpJ1jzLsX638F8F",
  "key18": "3HvmsLYwxNvkQk3e6K8Em76Pre7rAaKm3WGPxErvLmfHr8AQPq82UC4xnukjswyw9sgSVLgJ6Qb1qAFcwC11X52P",
  "key19": "5B3BEAyhz6F9jujxPDcbKYnaXzmxXbvTHDuFAm7YDA8gJ7RHc3sbMsU3YchEErUrSKAwt1X9kuLfXccP9yNAL4BZ",
  "key20": "2XEyQ1VGETatQoBe5sY7czzjdk6bDu5TasnjksqYn1AVLiexfHXdyBXJkdM4D1aaG2kK7Euhisj1wf2xfRMgB1FM",
  "key21": "2LNLy3hpkc6v7wnTnG47zCULaFVRdhAZZoogJNiexkVFajgXD5TtJiqW4KuXemcDPu3ASuUWSiG4etZin9EaZY4R",
  "key22": "2eVSTXWd4ga6tAt2VC78ZCnw8fdf6hujuqeqgXrEiKEXu9Gyy6SdZWyf61p5pj9S8uENHXtmgks6Smv2dhd5sMhj",
  "key23": "3akZrtAjrRgL9ukHmXXNdPLcTLfRxHGrdoMRzoVrxDxANqdgaj2ydSsnW4hPcZsjhjBzqDX7zJ8saJDisejsG3Np",
  "key24": "23PcyeTdfzzGyyZy6VLSVHi4eWd5N5hiW7WtFuYZkmQZurToFfXy8d6TBLXiDnxHet46ycMdUJZG5MgSAwGgZLeB",
  "key25": "2FG8eXveCdTP3tVwARXzbeiNx8JxRb6sufiqj2gzYAuLfnntZtHN5KrYMo6mAA5d41PQ6J9Bu47bE843kVpGVREj",
  "key26": "3ur3VaAbsxv5py67RCwStYJ7SLdKjQ6zBAhLFHze3UA7Kw2wExrjoPK9jJkGuf5TNdiYhipk8G5WKcKFNXShE9Qy",
  "key27": "3HXnbHLdf5SqD2XhSNy4ARbozKsyaoZUijUeHYT8XDLp44pXNhmjuydCu6g8ULW4i5r5kamfXSYRC68vVRxGwrxt",
  "key28": "6bVvyc3vyVXsA5Tu8F9VZh3tgKxU9oWLq5AEnjHdUcA9tTL9jAiw4F7K4f7bgp3h98wG54fq24CX64UqmXqEByY",
  "key29": "4s1wNXwc3AiXENatScRJep2gnDHw16awkkCjpDeabVDkB5a8wUVDZiLAKnYt1ys6eN8mMAnPRbx5R8vPngZZq9kK",
  "key30": "4gyrqVoywG7XXey6hz3AYCR8vzVEh7f3jcBkiCjoWmHiMN85u9nLnpXw6yiZKiJpmhrMDKhyite1XFgbKDXwechA",
  "key31": "2BmFaxzNdPaeptNHupBu8PvcLh8DomJcdrTkDSWsnKXmPnYcpk7QS7ZgXT9LA5nWXnVV7Ud8xc1TrGmd84U6JQVm",
  "key32": "2Lb6uKaBYypcmgC186V7VzcBwhMAR63fphq4PTJMXj29GApryPokhGy9Xrnc55aL1Cn3DRVFWENZsRMB4cRoSPwG",
  "key33": "5JHz2STdQNAYhPMrU971cfKoU3DSG8ihatSnAMjur96XSgu52aSPjHEpU61GHo75zhHYZxj3KAm3rNHFSFnNtMC8",
  "key34": "4XiuXAS18jatcGrsXGKnrGqVmtfwKfiXDRiQM7RTyHESu68s4XjLb4f22bUwNGueM43sb7TnoqRGyZpgzTAMK2KU"
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
