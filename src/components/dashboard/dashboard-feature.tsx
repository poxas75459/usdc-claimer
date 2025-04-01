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
    "3taCo7bnuYrR6PsDS6vwyHMWn2r541B7JwHAo5iQETy63vC96D8VAwx4NUKBMhqChbfohccLzmsY4HqsM5yg7W5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U3d5qkPyAoDDUbCyc8KocUKGeX7N9yop4t9BKFFihhMNL34qn3LZ9WghdCynsSNDcM1YcfZmTrfCouZbcUxpFa4",
  "key1": "51yxN8YTGnsVEXsEEyzBjudokk2qkTovC7MhFFCo6DjtNWXYGwbRu1yisd5dNUavxe8SoSh2fuSQ6q4kvtxXDGgt",
  "key2": "59zjYiwcknGF7reyDSaGHZKNK1HiLKZLDCCAuCPVYJZPha5pXtBLFHiomWFnuPAhiFKXs6c4MNH1JyKH6o2XJLrH",
  "key3": "4o4BaLXCo4GDP3Cx5gkp5qr79VXh8o9agTUnVPMdQMZA7cSD4Qxx9JjkmFHRu8xzpmMr4AQeqG1is9toWA8w7BwF",
  "key4": "MrSpuMezWffYfjMCJVjF8zCfr5NCDXx5NMGdEAMWB7HQKuWbgCUfkGyP8PqaEqKCuZpSWwgSikEQXzhjuCXghon",
  "key5": "3JGpT9VRvAFhCjQo6JKgLdxT5psQpdG4ktc5g5VTXdGFNkYTUbF1cVbQ64XKx4RbdvWNX82UdLoGpWKqMHdFdZDF",
  "key6": "3yDPmxpWsWmsPNZdv9BYYzqng8f2YaHtqVfemqEDHQqq8RLa5SEpcyoeWtYr3D9rzLxohHZKhh5VPvz5Ja3gmAeh",
  "key7": "5bMc8tFjTXt5gTMbkyErw7JbSTZzknPoPk5P5sXqVk45vT5ucUj3dAyG4zv3cfCUDdB41JhbHY2oJVsuQtPuSpiv",
  "key8": "G7u8hFV8m2mi2x6wv73WrCY1cdHquChx3mUagGeVQKburrAccqPaGAe9KoeDbjfVutzXiWNXJrgaQ7AATPr9eZT",
  "key9": "4mfZsgc1qREWrPMoP4QmuQbXaPP239RALCDLDpEqUgYDF13twQQ7Da6xK9sFRrYKUvyS7zVortn5YFqAW69An7rQ",
  "key10": "uUmWRELVUoiLwPCHtxeX5FwykL8qG9TRjBDA2vs7EuGTVkBsrrRrNqkchdTL92HhWUfDt7Sz7bDDNXYomSbpFih",
  "key11": "5AEGkpSzjFKeTK7hf4HxFmWNnN2F48B5yiP9hzUHFnPA8ziQH5hnSXp9zpuqjZzLnjPAzJLZw7pmyQni6vEtW2Yb",
  "key12": "4m4kjaNXih9A84tDsvmejKvNPTjNsh5g35GDzWYTdM3yxX6vKVm6wdj8RWVft82YYq3e91XCfpbnmtU6vSXehutG",
  "key13": "y4PX56pdy7dwiVmMEm4yKUwLDkFwbKTw5aKJiYD3AbZxVEyB7MdYajumJfb3cvMFjtiXY9aFDqv9xjDPA21vgjb",
  "key14": "2g42SpfgVZ4CtGQtwKyXMLTPNgNMn457nzppr4mzaH1H38Hdgm9qvkiHjry11QhDBiuXLsRRjqjg9EJ5h8Gx4rd4",
  "key15": "4gC1RCegMrJD9aL2om6xiRdrd7mprEcfavacN6uikSBvCjosSNgnwfLx9Y4kQcU8g6Ch8NQpmPxCrNrg3JGbhTna",
  "key16": "3Hi9UjQsXcDGd2xz1yYtwZXHsLK8cdXYBGMbWbYo5MkSXAJd3wamAztSxvBc6EVGSW22G9wV7VCKkxm7uA5nPjgf",
  "key17": "2c3X6Vn8i2iBityCSxkLKdtQBx5HMe7KNJfcVU3oVw7Tp6q9mV5xxoMhySb4MbLazAcoX8RfCWb9drQZoAAsqQcN",
  "key18": "35uM1xqSss3izWTYHyNnSkoWbxugvigXFfYDj26meeTLwKNe8dEze4XBXuVaRswMKiSpVLBgfT1VMLCwVodw98Ym",
  "key19": "53FiNs4Msi2U2ajp4ZGJVyoNLpDBf8Ux1HBR1emCSFZg8v2zcMjCVSRg7Qxt4mgS3rSTrs9EMXfSdMfQaco3aeka",
  "key20": "2egMXXLMJGQhyCrJcpVXM7VSmmXiUJGfCNvFztaB74dx9YrqKT7G8jK5dK1fAtvgpEsuTXo5aXeNgDa65zPu6o1s",
  "key21": "24XYmYFZrVAaEHToH57PuGfcJ9FTJt99iEj3hCQrdjus8bg4PvN5pGxUSgAwD15bGazyi3ZjAD7NawRVyYATkokH",
  "key22": "CUtZFEhH15HmBniXp8Ls8LNHZLCwAVKfwg6CxhYyH9MWaLmKcN8nSCrftzowTMFnZiHXpQFbLrKGoDAeo3yafmB",
  "key23": "4wCL4RMaGaJxGqLHn9V1aZ1uXap3qKCFrSczgo4otqF53BxPzFMCjQhp2HqgVEuVDEiu7x7N1NGrNGonDo8FgWDK",
  "key24": "5yMyXotyQLH7cM2ErqLw7PoY11K2RqoNXGXfajtRaz7vT1kD8WvqQuvtoMimg7kidEc8S5U4NJ1mh4oa9x66AjYF",
  "key25": "3qtAoiivr8Tt4dgiWpX7Hsy9derHhsY5A6ZVKFqueffVjvYrNnurSW91uAbqbAFfcvXtHL7UYEJEuLpJKE45MCC7",
  "key26": "32w7RjFeufoTJFYMS2cLzb3oHF4K8rkiDTrZXtcHJTLJx4EddWh54mZUEqKpxD1jJiaAGSJZeuxy7CXoTCWm8DvX",
  "key27": "2R8hd2WvjBMu4x44e4U8yZ3xy3qXYRYu4BJzNXHbCbXRXZ3xpMuMqYgLQFwVJFW3Z77a3ADc55x3Z87W7yDJG9bv",
  "key28": "Fo6AX7ZipWK7K9LpCmfdpvfX5hCE7d9y6J15kMLR4cXtUjP5i7Aw98RFasMXDT7pPJHfbgQXsC5SwGiqSPjXvgw"
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
