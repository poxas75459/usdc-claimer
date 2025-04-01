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
    "4BSS8DpvzHrKr3emjXJe64dnoC8wDTso5Ci6QMWPbZwiwJrjTAtkdcavNHHUPRCiRqvbDjiv34LCAMADq6znwEdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iH1q6qgVQqPzH473jvgWxJ7p4xbpEU63mnWUd3j3UdbawEKioDgNbbK5eiKhgk6GQd4Mdro4qxJ2tLW2MnSnDRq",
  "key1": "rYurc7t2s6B4mxxkRDjTGSwUkFfwckVrybHd8Bh746ynBLwfXZAjFGHifJRNELUANA2XNNxsXNumTAY4WFNui5X",
  "key2": "2eoqWNexjFqeKoRybtujL59o1PU2ABFXAA39nByUWuSYa2vCVfV8dstGL7LXYyTEmBpsA4tzeJy1E1f3bCt4ruXd",
  "key3": "iydYXSKBSiBRp9WbrgEpXgwHvzFHedHa1bLhiDnTL7Tx6unAbcTMBi8RUsCmN6CsCMRL52H27yVwNuXHtox35C8",
  "key4": "5gJmmqPSzbPx9uAUhjbJutSobu1SmCz77h74RMLDc3xGyYV6vxFQnuewHzenAar2ez3fcMf7FcvSMezTCLtJ1EM1",
  "key5": "5EX4BmycSSkxraN5t8kPs6aaVFPDqH8JTqypBCSDeLEcA7ZvJeTNVoLtyk9RCrFjNjRqxx9VFiY9Cy3zkKv8S1jN",
  "key6": "kRkN7QarHMPAMbmyCvQTKfNQWHkqTcF6ThD8PxLBRjC7sLjK7coj14SJTF8wfhafq6pZhDuAnGNjsxX4FDmohuz",
  "key7": "5nTtVdyUHHJpvoYt6uevGmZnaNbVEtLccGQVhLD3ZiPq14YG5eEhrouTifDXmKmMUJ8KuC7ifEyaBFDUg6KQDg3w",
  "key8": "3msCySJcNYDy5UNgwz5eoKSwHcseWmDUFhgm5hD9iL2LkxprsfN6x4PKE98AZLVLjPKyKFk2ZyteW7bhAh9P4nah",
  "key9": "2QPNkCHwzXag1FLzK4hSsxiQzut7fiyGakPjLHBEjb32WPdr1qRXDm8mRw2FSrrwZJdrcLbbxWSu68yDPrqN3DXo",
  "key10": "4J84rvYrWRfPUYgeBKjjhDhS7DzAxvf2ioZWjZHVtinTyXGfprY1ayHcDakV9z3f3bC6tpGB4RBKYDwxdHd2PPSq",
  "key11": "2uoM8uNErAFZjxunWTVLCpPT4ViqDYZZzUe14Z4swXsnQNFbBCrLeFfsBNbFKzA3FoHVB8kEHuUXwgirV4LGwuVK",
  "key12": "4NdS6xafrNKCwNo8pz5Dgn4wPUnrtT8XmMgfLvTs9Zco1Fs2DdN3vrGTcNNsJh998CGE3ygjaaB7CkcGjgVnmRfG",
  "key13": "4itf4HtwqNVJDy6b1QsWLdQa5Q36cNbf21sVZT6XJw9UKo27GAbg3o2CnkLVjXrtJnyS78p2AKTmP618t1BiAAjd",
  "key14": "JDyUPnETMUCyJcAwLDxXptP3schJJ8YkgTVXSwAwN7EmYhEAkFevJw2JCNkvdZLjGifxEHx1ghbWniZYRZqeVi2",
  "key15": "4m5744udmiNyuU5hrVeurbFDf39rpGCW6weZcWcgGdhk14xxcMGdJwSHqz3xKVq6bCFN8uXw4GpYPDZsWq3EUhTU",
  "key16": "2boBtTHAmSFPDxnhAHpvLdXBAh4qNiFDRXXAAheeExof2gF3XQwbmMg6JujYcvrfWrhXEmhzv3XvPwaFZZdNixSD",
  "key17": "4DEFCMiHGdPXYS9yLnbZPDsE2yC1VeAc8524YReDmGSis3F9PUWGjqY3B6pRLVwabSSPFDmzeqWA4d3pnhzuBaUg",
  "key18": "2K3onLmRo8yiQ1pQbtyB4CVrv7YULmcj6ihtByu4GXQTzwLE8EVTaRLnDgZXutNh1kXUpaBuqHxpmmuCZcbetUS3",
  "key19": "5SPBdnnynnHvm6cwb99HbZneg2EcZZGxgLvHVzDtvjChwKLJm1aB57Phas9pv6Nuvv9B8kQ8XhdfRdZkPNB5qdy",
  "key20": "5GQVEcHnJeGiSbKb87D38gTLNe3wmBgCaK7EptQqjrVj2RCGYiqJhb9br2hcEiwHoP6fdf6B8gPHHV7zt4UU4Uz6",
  "key21": "5Uy3Cw1UkAQpGkjy7HhnEa6AC8zTMoVmh9nEKwuWSND7KxTzj6UcH2vDg9PUu6J7U4sYtaHaFRunYFAbPnfhNo1W",
  "key22": "24xE7ZZmR4BepkGbp7WgXB3ou52ZLmEnt9Wd3gWR11TcTgJYqxwBr2BewqTA86RebMt34edbjxxsjh7DKaZc7Z9v",
  "key23": "59iEWUkmf7Xf9ybUTLqTMvSWg8YfvNBwbstsc7YfdaHo1Fa5Tph7nUirDem94cuvaATzoFRtLvHEH4XTYz7kCbs3",
  "key24": "goLAVC813BBFCwtGBbxnmBnPtnyhtHDCbDQLZECcqpDgtF1JkndPZVrCDAoSLNtZiXFt7edCfB2C575KdqDh6CZ",
  "key25": "47dENN3b6MKLDk8c4yVSTfUjWhgpfnkRDBWCSNgkV12cFYzomkQbWvkbsJJt41StGkaMqs68dArJQGgjbSJNcn3V",
  "key26": "5BokXh6H7MjtsLpRcAaUxj9XvS269oKQVb1SnpvawLQ5ddLKk1zwJM4DiVdg5yyHNgDU5vECTnat314VmtLbp4HR",
  "key27": "2VJ1UQjpDCRpVuJmu77Jyvi43GJo6yB2JnmtaynT3rCHLgBomuUakCRhQGsqcXmxLipKYy3X4RwKMKVNLBMJ6n61",
  "key28": "5UFENUwq3cjuCmeHHkU98neXQLnKAbKs9HrUiELBjonM37jNa5fSsGGngy2sDeaP341ysDQM1ZeUwmQkBtzKTZp6",
  "key29": "5UqufGgZuJfn14htDUKimKChWmLn2epCfpqbLrPhbzABmM3dWVLfmTNsZvS1cz7ES3rc4qRqmDD9Z5EVVYTTNDoZ",
  "key30": "3VBgkFtVMrrycBHXbef3SjTgPnG6RJQii33hGzNNc3iR1HvCuiS7LpMDe2wc6dmLTq8pCbUCQK2qgMtt625wvspq",
  "key31": "2Ch8LqGZJtriXWVduYnyVGGrWuadntA5A9ws6e7JiWbVMoqHhCYPXREH918zAkpm4RkQstrKNmwxicGkoEDwso3A",
  "key32": "4LzEcf8JKjZWQ6xCdLnn9hSitqqRWqNkwQpaAwK2fpEcs19tgpkAY9vqdW6f1Yce93RKfnJfbc1cDakRJs5RsbBe",
  "key33": "2WAsLAnFzu6bKQGCLhk4NfK46o12mFYSLiQDDGs5zsL1TZVNtV2sxipuHvsxrqp6RjQ5WSbmozoS5jkEqqXiSDwz",
  "key34": "3AKwR2EbrZ11G8PH3gxWSoN74P6GGm6YieDZ8dY9k4qoeJ9az9zGcfQF9MeA9dg6PQfm8UggNDNLC3UhchLN41rz",
  "key35": "5aAgdd7fngss5TAGBvjFdqnQTXvJSNMmjmhdSjmQ3jzzvUcQKwfdadfkVjW6w12AhjUybHUp84tSsPbora4Ctgd6",
  "key36": "5y5F23xjE1sHo9fqwqGLEb58pSEiNJFeZLAmkPF8cHaG6neN8dX546V3Lnxpndaj7aU51eC9K1VupsfDpyndGqbr"
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
