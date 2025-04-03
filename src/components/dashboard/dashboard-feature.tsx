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
    "2ndoLsXgcAJWDrzzmDCVA8D53YEgiRV8HbNkqtNTT2JKLZ44nTuD9zwnTst4S1wyoHHsyMczb8ssvuJcGEUFtsay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H59yBZ3iyPCzwxJhmrycwDLPALJuqEFNnVdV9gYppi3qgcYjtweXXBRa8KrEnkYciHmriG9uSXF1oLsfSGHGVKZ",
  "key1": "5VkeoRZ5o3k1GzGXj8yKJUAwgEMSeeDjnBdRKreaUAMiov3UksD7J932ESkRGXVyUj33dVLHvPPEhTWJ1DYcySq5",
  "key2": "32gson8myXmeYLd1qUADdHpD3CdDi7kNyeKZewCzyDeaFmVdi1uTrfJqKMAiiPYYvc94jxahBPF71wYTecZxQKd5",
  "key3": "5MBBjZyHPuPrAobu7XnmZegjBCueKAEEmdmgur7LnyYkW8DPdFaAjJPcr2aS1dF2tzYwgtfUVEnXrD1WQR2sYXYN",
  "key4": "4bqgeeU5qf4aXFoWwRf8v3edqbpzPGEHUSLysnz2zrF7EnyUGpL4BGcCkrmiFFSWDASYBKkVhCCRKoMYVK8gCmvG",
  "key5": "3Ngr7aFhmrnAbc8UPyMcUBuGPoQ91RRE7mFdctaWt4iqTyvBRVmK3ARwXzFqQTGHN7FFYNraTB6ugEZn4AKQerDy",
  "key6": "2vjouAGtonhbMEyCWJivaUC54DaSvuk14Nekib5gqSr9DQxZ9HUkBHmPpT2nwDvxa1i9oyZkg6A7n3RCwUiYNZG1",
  "key7": "KCqjvNZC3MLLuqs1DKC8EVDRQiWu19AdAmd8fCQAHXBcxqkRMfd1bfmVjSXjAypcqUJQ3xqPjbSaLZnPMMnf6SR",
  "key8": "eRgJu8tFQWH4A9fiws6xjAcoJFShGBRZiLERpiUNKHw9QcmkHpvUYPV3cv4cnpWto96t5ciKTrAFdueR3RawDMA",
  "key9": "4S4ddLfbr8cDZQxPbRFukNypz9PXuizJJJo2c4sSiFGeoCdNi9aouh6r7Gfx7SsQNabxrgMC2PeYZVb7UVbDSEEn",
  "key10": "HhZndmPvUEKjWQKcwaiLuagFFs7HHpgBgZkK7AxU9yYCPXGnKeC8rWJEXFy3X8XLA1bj7ZbhQvntDwoVxZKgCp5",
  "key11": "5zhZXkF3xCpSmMUno4RsiGT1MCrQ1qQHFYBEAB9DTNVdx87RoBy8icYbrKnnJGyesSoH2Ewm5Tjwx8TNaudEa4v5",
  "key12": "fdximRR8DfwG3ro8hBmAkzwwp7L8KjSw2bEQXVv5bhzAoam6PX5jrqCUWkgdvPJcaFncYT3oHHGQokBesAY6Wbz",
  "key13": "4STQNs6qeKusAeXaLj2x1Txx3F4fSBeTyXSYiwsbePCtC9PGpWtR9ZRtoB9AMvGak7J5iGHjqrpDH7whu4yCW8za",
  "key14": "2uCga4hh1Bv1XWbrzWznLmAvw29LWsyy52jhKPSnYLZq4uL6rX5UiGLEe7GWk1EWmwoagy2aUp1BMmDBxPtsPana",
  "key15": "5WnkJKsEVd1s5MKcxhAdPNHP1yCTHbzs68SJvVQsuQHGv1fiduK6JWDkYM45PfC3um6ncdjthEVHXrGVGXABpVLX",
  "key16": "2LUPZsKxZuXkqCzJSZPT74GdzL79cQLkCMoHF3MsgQPchxgVB6HNDcdTUgX9DE8qUQo9kAc66qMwFFgX4YybP63f",
  "key17": "5X1yH1qhkApthPNvQiuP7y7EE5hCu3dW37NtxQQLcScwDGaL3B8SyuTfq47p4KY3psMd4XdyGuTu96PeiTQ2MTwP",
  "key18": "hyZkvcfNi2NNUDtc7BMJTkYTyGT3xNaaMZVLY162vDiTfh2U6pHQUjBbDPtJ1w9x3x6erTfDKaTMa4zW2Pk8EFG",
  "key19": "3c3yCHdABqH152uDV9FbN299GjvbSQFgrfN9KvKUUSp1oQDy2gxEUEKTHMAxRFjYwFKm9unJroVL4mtPMnDnnqBC",
  "key20": "5RomXtS1STMHpXGk4H9fb6wbQSZ1xkHycEhZ5khdSnzgYKoK2gbydYpvHwuYRnmYmf8vRR5MDEu92UdfrpN8Nh1s",
  "key21": "4iyWxMr5Jpu4iu269xFkmk41i1kjvfRNqyGySQbVTi8pa2fNXrdMRVeJqLMjYVjhvniHa5nAabxmVrN3XDMkxPiW",
  "key22": "4LxDYqoFs1EJhhSTxQk5NHwa8D2hiQa6Zf78hbesEsutBXbUc9zWh5rfLbKtZ9To65gcPGfNb13e5nbgwxqMw6VG",
  "key23": "5YNVXkAfU1kruQxVErj351zuBaSoftYjkL8jT95gXYm5wQqFh4nhqAqr3sr4tZddja8YwaZJm5syuDKGLgKnfqbt",
  "key24": "2WjtnJ5ev1YofiZvd8gHvCMkDXQjvXWLxxw2Sg3ATvD8ZPVaXnmUuyeVg8EKVBZrnhxb9f4YVUKBe7ZtPu3DuQC4",
  "key25": "2kHPfj8dXTZnHvKKEwC9ZF1mMAKfiMknMyZjv1LMDgrA3oxAENZMQcJBTJ7h3ef5o6RbHCa4khRXfsViwyQrKPpH",
  "key26": "2sYoQXmEg58U9wARqTgowQ3dhYG1qDFrVTUDfKFSromeAjtq4GTaNNnrTRctMKSBoWutK9QxrryKXDTsZVXMaNPf",
  "key27": "3koQY2JfqK42TiQ6nLqY3raDpoweRZKSzkCeijET5SHRAAGVpuab6wRFkhybTs3M7zu2EjhLPpu2RBzh7pVvb354",
  "key28": "44wGVDTvLApompqxochzA9JzrKaGT11AhJAGj51Lwot7iNpWTWH51VQ1oKBeep8dbbsMrZ517NSV58pXW9C7C9Qn",
  "key29": "5JzuuL5BAemSXdqHwMPQDpQjYox9JuHkFx4hAhPPvWFMxzGYLYAPRwt4CY1w5CuCPsCZK33G5nqCAy1sJD6mvQHf",
  "key30": "t4HCrKcDrwGGwyLdoJv9hBb4R3pgveMWMrkvsPyzUuHsMcnt7vBKo3ywxLdvMMSqZeNyMMYqRoqfWtJtTahMuTa",
  "key31": "4HKzKR5JNbeyevuPGDegwuGR2qz9ET9zx8q2PBAz2MCJLmzgy4hYdKfH6qSCJxjKAthNV9jN6Y3viAamu1reotdJ"
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
