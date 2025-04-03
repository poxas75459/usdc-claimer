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
    "34yaLBA2PS3PNJHUAEpGuCw857pqDBrw3kCcqNFA71hXqjv9hT1aEoeVbEd7DNgrMri99eV3NX9KkvhMnfefDYgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fNnPBuuhAajHcpn1CH2aiDU21zKrK1E2sdSnzoc4ps2UUM6teRH2TR5yegQ4EY1f3VLje7NVYFNYCoPaVtAcF9J",
  "key1": "2KBNQ88im9T8dD8RAkUcUQRiFF32cK2qUAqxg1vLdonaateWBd2q251eE7fML6iMexvDs2bFUdNyugVjuA3ZeUW",
  "key2": "5N3tjeUDsno2g5kS9ZDGVogeLN4TpjHPHd2gcKWJpjbPw3x4MFHyVweBJfvkouehrWeECw2RZwaa1LiRRNftaYBV",
  "key3": "281X8Jb3f44M8F1Py46Reh9Q9Nwrthfyx1rZwwVtUPG85CsMrsQiAuPnMmj21956do8iD3D1T2R19wMkaGHSK46A",
  "key4": "4xeahLjMDFMREroCn1YfDrQRnRubVPf337zX7UFsvfQZsNHBUTswgSuBc2gdsxbvsB9s2gbB5jCHLAuBXdc2W2kY",
  "key5": "3xG9miTXiEjmFEBqwMPFsMfr4nw96kUzvju6NzwY6tV9rsQTfKPYzz5MFNQACKLRq8f2BCRg6QiWB4PGEMwfHoMk",
  "key6": "5UH8LMYoNbwG3jWjNViLULQCzyHb9bbEawUSoprYVh4tPqqgp3dxtQbEccPVfUVKuq7UEJBtmoQegAXHx36ctqk5",
  "key7": "5GeNtGCLJ7iZcyhUiX3A7TZNVWMzHQwTFfgB9bxiKNy1eu1UkKKNF8qtZLmGB2LhFQ3URubE5jshN1CTJzsz4UEE",
  "key8": "JjuQJn8Q3adQx5FgBBxV8gedR8cBW74sbiFrR8VL7FPcmX9tgoe9e1jyfrVPsbMXfXfiURh5rrAUy7QocNby7ik",
  "key9": "39fMkF7c6gLcZAS7dPqwErURJ8MFkL3v8CTdSRsJvduomHwgRJ1L7pq95378XMxV5jCHtLu2LLiRAF832Fdmkd3A",
  "key10": "2enmyopibtdEmwSwEV8hoy3gtToSStLRS2LoPZxZbJrEhCz6XMJKTt9mWAHFzQPh25yp7kQCKKh34gryamiaHQ3g",
  "key11": "3VPWkHzi5GhZ1VBvsJ4otbSLfkGavhAcXhLGsjVQngQ4GYHrb1nNACFmiTPeD7cdrEYvsnqDWg2PKN1SK1nHjCdm",
  "key12": "497tTn7K4ErWCoPvzAYynoYKaupqa4hMZH7e5drPnkbEWnvwzPQjzkirb5Mo1QduJcsRiPH22L2rh3skfUWjzPsj",
  "key13": "3hxgf3F3kxB1xXUv4mE1RTuA4y5PeMiYuRziwGoyTsVmthpPN3pTMJcrZVwVXxTq6pZdCKJbxGv1PKz78x4cEcBf",
  "key14": "5uveJs4tHLiU9SYXGRWunJnnw5tQai6U7WF3U1Qwm2936C6BizrdrxzaPDdz4dCaSH3xt1AdRiSNCEr4mXfQHoLS",
  "key15": "36joNvJhgYKoRpEjPMdRa45cZcqdRx9jwtq2LNbY6RfxLi1KBvzg8XYoAgTuaqFwXdSndHvrHxjGBVNfmadCUv4T",
  "key16": "2S28nZ9xRCaZWfvKwcrJHJcyXsYN8huk39FnkvsSHoXsNxPWtQH4R63kCMmgurSnzcWiq6aY7oz14PYCjWexW6kg",
  "key17": "4XFvbKNFeHUYCKEUMHRipRJsnSJBb6GguGD6JodhF4DjDdJmNMW1Ae84KHj6yB8VZyEYp3m3TiWb7PceznyeSou2",
  "key18": "3Px9R94pUFQwXsvmm6aztN91Fi4yatyaQYRWYg7BUgWJC1GyQbkCFKMfccFuX7qxGEYJAJJFBLnbKNrrLsETghmt",
  "key19": "39mad9fYiCJ4kcWg5mGzdLzfBicrUAtzwhNzA5ZP49HkfdmQkx9n3BJYbBeW9iuxEMR1rmHcEqBfGraYi95qAqyX",
  "key20": "5JWEQhTWiVNToJJ1bS8EHJRt8MfLzEjD3mBFNQqQVzM1hd7KTDJH9QVwayKuscWMVVZMQZ6A8Fk54osth8EqHzZE",
  "key21": "4nYd2RqJiRySGnBRmNM85fot7uqZPRVHGerz4JdGbhBzHqDmL4f6PWedrAe2R73vppYaE54XLA9mGyywu135pYs8",
  "key22": "5Et5xDhdFPJDDKJdKAsdfTq3ZFtgvCXkiDJPC88mHoJALqoAgf5kFAqtw4SN8WpSEWi8LDs78ZbmvZaZkn7g48kJ",
  "key23": "3ewXiXvefpZ8UF5TrDmdXzdhZwywJHy5Ga1sE3hY1meC8sERSxG5zkWrt9g8xD8UbWYfyLRQJJf9rCDpJGLWYXiR",
  "key24": "3QKcn7xp5ZjMWb4jkp88jfnCjBvSPxFtGthSrKHhtEBuqf3PvP2cgminpDAS1W34Wd8aqRnp7xjq3WcQ3A35v2dk",
  "key25": "21KSdzPy4x8HEsrEMzazn5dcD2RHDZeK5pGKNwUytM1rtroFZM7u4JGYKEGeRk8WMYsAc6nyhbpuASzks9iSDo1v",
  "key26": "5C6gDrk6CSCrEQB4c9Wp6vDHvK53Ke8ayg2iYVyX6LMHwMChoXTkR6vSSjob542LcdFWzfp6VmWdQp6zyYYkYXzB",
  "key27": "GEVeofaGFpqHetkG6SupPdKfJVuPeyWqbo7R5XBNpbjP2sBQ9rueQEf7JypUzNM2APJrH2eqCv3DGBtohfxXnZr",
  "key28": "4krJ9KpW6FdWXwgUuc3Y9mEYggCjKuTYdfwUTjRAELxptnwgLkHKNFpng7Zhgis5onHqjgN7te3omWc3QPQWpt9E",
  "key29": "wYG3bpd2rDn4E7E5vX8iJumkayR19j4fbZeQ4RmtTabna5DuZ6iMsZ3EJRJcuBj1GffD7rNfFkXphdPhihCAHD8",
  "key30": "5qrMfDpghftZVG3QPUxsVgd5dZuPR129bCEm2tTNQZvmor2qrpxLR7K6ibQRbELVUge9AfkrnAtLs59LujRS7RPJ",
  "key31": "3J6AGhH7GoRvrTtRSAtryfKfxeUmy5ykkgf7YYodZ8mvJQoyK2pGfn3wypKcefCWwcofAm5BK8rtVPJpHLjGmAoC",
  "key32": "4tT2KoachZUfBEuNuMqUNbNhcNUhQ5cog5ZPzH11BJqYsNGTa7bVZnZnT6Rnad3wsiQqsYhZNsyuvv8TF7wzsewk",
  "key33": "4s2hvcJpvSTXc43EFCf6MH1g5khbFkimQH1orQsdNhiMkafAGQDAwdWNLpnZJStAXvsJASQdnb3mr6qpYBg4B986",
  "key34": "2hSLVZwrjJWVtCq6nt3bzSVakV9LCx8TQEdHuRs29Hb2b7sJrb6z7JSFCVLyTz7NieGbzdVh3grtyWSGsVUCJpKA",
  "key35": "4cA8T8ws3R5bBDpwHuM1Pmshs5rtZaBFrnb1VvJiUDj4J1JN3T4qmueH11TZEQK6svCrrMhZ2tuVzXFxjWKb9uZ4"
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
