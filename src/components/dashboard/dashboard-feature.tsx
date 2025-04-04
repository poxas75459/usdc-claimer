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
    "2tbXA7nodrWjjQNa9fLz9bnaHvifo4twyEZZQFLsyKsb8jiGTuzdZdKygocnv3mnabmPds9h9D1sCdapV4tCPd3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cBSxnnuZxcRfkmh1nktgWKTYUPqLKigXuXxzFuqRBd8bXberMECKCoApp3LNdTp9SXsNodoJN5Q3rcthXFW5VuL",
  "key1": "2DCR9u6rDyXLia1g6P6HDSun1K4Ynwd6GMAEVgzjwz8HGjzujK9kU8XMfF9eHZBxyHeQCoqw77Wc39YpP5qGuZnY",
  "key2": "4fAnhYtnEwYu1NAqxkE5LNVu6bLjQgAYs5N4tn3qbymyA4HcpGt25HQk5r7asQ5hdza8Z5R2DuUZi23rEDP3RDjF",
  "key3": "37QSbVGPVr9getCumxF8aYS6ZAB6pqE9pJz2kGKh24Xxpke2FDzjKCFj5Z61ZxfitTZ2tmDJnKqkqP1Z4HUtBjzR",
  "key4": "5zmYLRVDhwqAZV4LDJuDxdbAY5gMRHmgqRqXxBSoHA4iZVMhk9w7LrSm8iSEkPpNhNWfKtoa6LGz4PH9aesjjFjN",
  "key5": "UoEJf33EkYijePagidCgmm6zmD2w5hyTtDFcurRDS4Zxrbu14QkL2XRmB2vP4CNj99XMe7UNnrhu4JdgVWKABk5",
  "key6": "5TJmNGCgmBYZRYhjMpreycdkbzCcMS2wKim7jG8YjrQWShdUMRKGECqS9wGdAsFwvC8WDgy6BgU3zUDyZPwUzPf8",
  "key7": "oBr1sSpCYCQTh3B8TJkX6dVqvo8VADRUryt3qgiw4Cfy44yhYsCZxLTZ7k6tWTMSirFfRegVfZBDRBaJyFZrRuL",
  "key8": "3rTC3Vu2TQomJ1yLgkzG4ckYqD51JBwHw8dKYkA3zQz1ySeXb13JPD3R7AWgMiqpcJuUfVn21QwfuacXU4S1TeNv",
  "key9": "4HXA9HcR5oKNapcfZTH3qfxLjpH53t9PQdpNhRRWuRXawmjC1g9uiJAp3dCgS37k5KUtq7PCk8pF4AW3M47qLchY",
  "key10": "3CarWJzMK2d56bL5mo1t2WBx2cM1HYQqGMD9TPdMHdnF6T4FZvH77gYLtRRHYa9uNPe9TVyaxEaoV5wBys8J1hH",
  "key11": "2e9ixSR9p2L4vFzMFTQ8zJwaWVkjr5qske5cpKMTLfYG2kPACgxmSAr1U9U29S3aQXFrT66aonVAet9bjSDD3dpX",
  "key12": "3jaofBmjDWv9imXokHDXTZaye1ALRZupBPkRt52aCVgMZeJVU61vy8UEtVhKytdpmdsPmNvkqU5JcFaDd8g4AcQe",
  "key13": "HXK8QetQnN6ECwN9Jmg81BvtoUWCF5j95b6m2qzcgnoaLdDRimLtoKKiEAFZmCjzqpWPfNzAU3acqq5syNAW8Lf",
  "key14": "63LrUsU66gFckiJFx1NiaQSUHZgH1m9G7o9U6dvVbJKRuHdkv25PdcZGCyJRiTRyrqW2tCMWY5Gjd3pwnoWERynM",
  "key15": "3ih9bfoQHiLUj3HbvaJ5wUZFx46NxjJq56e93cLrQDztMxyY5a47ekf3PY9Fd7KVYf87j5YMvby29gh2B9QDzgPJ",
  "key16": "263TnFSjrAQFK4QqMCQ1EN4MjpooHyVBWdQDx1q1dbkZdzb94akpLv2TbVTh6SUk8syrou5QwMN1xa9wLKgUKf6C",
  "key17": "5r5SqkygUqWxfm4sTYwdQk316Akh8XTucJtEkyE31VUW1L6UbngND2yZaHonKLUyPVS7uLMqjfi1p28VDJfCKB6w",
  "key18": "3V8UzEQdeWc2NmhzvXqWTfdtb7pQHNCPZHACHh8BPAWLCTxChidoX8EwG57pmvTV4FYcKBXVugYjAnYfWcztjESw",
  "key19": "21VyvhPCSuTJCUVJx2TBaMYd7o2UQqgLTKrzyG2GCZHgX8XQtFFTu4fQSH7cwMB74y5AzARFbs6T1Jfa1Rf4krQT",
  "key20": "5bJbZE75YzZoGmwS35EivZQWfCJjupgHc5bHqyVx4PgwCEHTR2pH5RTLF4QJwZQkvnhjoGagQFXfdWWhmDh2o2Za",
  "key21": "5mD451eog1bmA128uAc8EsKHbXWWCqYUYbaWJpTaDVEccyPrVuztjos7UTSzB9T92BJdzVWFAJyTxdkSQskY36Sb",
  "key22": "38JDSN5eerhYQDVPtr7gyujpVm5z9AGiBba7XbzmL2XRyhdiwmEqnS4UtunXzqHPq89XyjHBfQuesQW7LfiLaUdX",
  "key23": "C1RAsknbg7rp73fNS9XoeDkdP76aovXdJdiTLiAkqgqjwCLTBmXDL9b4ZEAJp6MmeaLQZEscrHovMEx7nxXGt5u",
  "key24": "cDzCZSe7Sbaj4EkApHMwVSmZE6EEGU6RCPB1cdZKmqpQ9g4mKL1gJ4Hfn7W4XrTUDJVRAjkW9EhCFKAh31ryeDK",
  "key25": "5KD8LHVMbA8dzTyBaCgXUwP8zTFDYy3jMx4nGjUeWGSjVhHEnPW9QryDat2e1WSaL4MLdXjgm7Y6WcY5vVw5Y3ZZ",
  "key26": "5HLFTANWw5GSd1PHPwJYCxGGsttpg4WNyx2h3mQzA8ntGMpQ8Er2ELESfeyfoaVe7p3rcTGaT4woYQGpZ1yy11ef",
  "key27": "3frbEZ8ozN6CXNq3C5mEAVv1Wr5jRmR77gsLz3NZsoxVNpaDzgotVtBegCqViGArWsAFZWmfZqQHYnYfonLTezVh",
  "key28": "42ZstsM5jbsa3yKeHAvuXKWmK84ZsJ2Rb95zHWdtgbBrr3ubxVQRvGjZ2zgVEfnSahthzQVowDxGuQWLLdB4trV8",
  "key29": "NgD9ifBuD3Ps7acWpgPyNZcKY7iQxj3oTvrh4TURzhUdPB5gv6b7117YzeztUqqSh6oB4JUSiLsmL175aVRV5H1",
  "key30": "2shyNp3mwJNuP7cNg47Y1bgyPbaAPeTka8sY9aNeo1RDdRfTw2D2hct3prpnx154feeDDuqBjYSJYJvLW8gM7xa",
  "key31": "213RcVverUgdnK3PbqUMFG6DVwz58AmsJKP5wUutGixMQ55mKb2SzJEq5GXyuKjkRE97V7PudqXgEqGjDY2Qcpvs",
  "key32": "P2cppG6rDFHJPxzx3iV6rgk3VrS4YJnuVH3FgAzU5av7ZRCtVWpecXKHyeGDvhymTe8X2Qo8TwqQPPaKs2fn2ko",
  "key33": "5DM7hRHvH5jRh2ttWuvYs2yEd65DJ4Tdy1Q8U3u7zq2C1NiujNfArQUTjmmnnSqdfM6Sy6qZD1bgeQDoMjBhSd5s",
  "key34": "4TJv3spMKVT4RBm3JKTghmveRSFLFs8R1AmB4aDWBHnnBkg9NWgqTYAEGrodnCdb5DqsBTUxQNyPvy5PznfFzCPv",
  "key35": "5wYG6vx78ZZghmaT3NDD3KuEy1cmLNr3ev1gdQ2RnKLxEHNevsUCYqBzKtmvSsP4gzvH4tBDuWWBHjvsWe12V1A2",
  "key36": "3w9PEHuoNoHPBHjjdEAWVwzCwnyEjqxFTcE7LReKQYDtg8CpZfg4wfeX22v8MHE8fQwcXYDj835Mi28nHmyHVWx5",
  "key37": "if3ZXPJizfD4f7YzDxFW7NzYKsKGNDdYYBnTJDshA5SGuXe8MCJmgfb6HgQgh6JnKg2DJY8CVTTg9hHwEJX5k6S"
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
