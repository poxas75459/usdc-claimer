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
    "mCRyyqekTGkLfW1BWbhvmBt9HrG3DZVyBq74KUuZC3cWfjBZfrjHRfvbqLZN8J2UoEojX2by8MvhVj3viyUWhcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wsGpsQRPQdegUp8M7G1iCsqh5AfA9CjV2WV5j9y9kvvTgyqENznvLaybh5ny3STTA8sJd75KsSNZUzJjcpXbRno",
  "key1": "28pU6PGof6eWTdYcP2n3N76uZf4F7Z6sNV1WBcz3hcynNwLukXiPNjQm4mdW8ZPTW6iiajoL8V7zxtzHSA4XLGv4",
  "key2": "4MiBbwEpEg2PSH1jx9QZPkTg2LVXihJaM1xrE16Y9kzXg54HP69g26qgdVhMewaYDPGm2vtVieB34T8QR3WcqTsW",
  "key3": "2nmcDtAmDbnQ5oPtYigBXY2fxfDEvuuZtpiKa8PBzJMtUdSVxttumDcotGKJ4LwYsWQL549vSfdgpV2att7aV3MR",
  "key4": "5ah77xaaAqnGh5bffGKVVsHhAt6UuqS4z2GaTjrtdX5pGBVzC6oPLF3i4ZC2mnnZMXUZQC51S3LiwTzBL1dgBtDt",
  "key5": "4k5yPf1fmYr6CpRvp65HQ8C4UPh1BZsh9LMk1GQJT4mzvfCPotFtgGZiFGUCzyKdDbYZujnZSZ77uXaCGCpgtgYS",
  "key6": "4JDtZDJBZCRRfPjwUVs6dT1hKgnnQafFjErGi4c5niShMK8oarefcARftt28RWTFJ2ZzogEuv8qemxrJbKqsx93J",
  "key7": "43WipZfEkEvC6LZp4mpBeRh79W5VTjDFewdZBAFLT3fAqmWn6bsACu1dMQaJmubhQioK3Ho4VhpWUnww19hC2gNy",
  "key8": "5Q7hJqKt2Qo4DYBNdM4KTJSDLMCb8mpGD9kmAU2ve4ti2Pg9YzgfeR7o9YbvByphGsFCha7SmLnAbjdM5RQsdQx3",
  "key9": "3HjdoMCBRKoXiDzBnk9HdMkuZxNqF9EzuQG24ktL4yyHp4v1xr9DPxLi1EJ4kEQLdniR1Hja8K8BBuqfLqR5qcyN",
  "key10": "3oENAgEsA1mzGrUddXDMBu2Fn1sQA3qiAdvENfJEjWfJMNRcvegL9RfHDKeiJPa1WiCsFw7uJvVu8P6toxMRyVTg",
  "key11": "4G2Wp1dPoZjnhGxV3zjbUi9VKxNsCJGQo8cdeJoMk2ksym6KfQ911nk4vDYD8DctQbPDFjJqo2vEcf6VkN6t2PGj",
  "key12": "3Wc7KpFNxCQwaY3VTadtkmfeRGSrEGGPXFia3eKNGPLk5rkSPekBDpPNcVpuijSadjQYRHsKaUZhmTBrmQdq7pqC",
  "key13": "3AdP5ecmVWdVELwntDjATLqi1vBzTsnytyV9yc35vhrpt64QGxDEChDVGxauGGn7Bwa8XT6JcQzVnCiLCFjXijVy",
  "key14": "5gsbnBJ7K9m1RXntkS8fqt8cnsQs2Pvax7iURfvXjLeKrjmCjYcyUuzxwHMSwCY9yPpugpCqpYQ7u29eVzPZxjgA",
  "key15": "561giyGdCQ37CaaqzPAxJkcTBt8S8FjDHMsiDmEpEDKnCqbs28LyTPGgNJF1to7F3XrvewDKk3fkJ9T3ZeCT74rd",
  "key16": "3pKTf2KXSjkT9b4H4A3uVmKLziTWdSfknv72dciWubdcDeX5uiPNsM7CJvSRzi81j4ErPZajPK25AjRrqexsi3dZ",
  "key17": "4ygLoRo4L2o4ryvJyCNqTre2Gn53kg9xBnRfTvRsccWRsPfQzYtmzRAKVaPR2YwDcEtqAtkDKwdou5FS33Zwsmux",
  "key18": "3B1KcDk9CB4FrjSQBEoSWNpN9XTiDbzid1mRNRPAyG1HuQVB7bQ81UsSvgP1ptrdqqzxngsyQwT5KFqTX61cJKko",
  "key19": "2inzfkYhK1XW28F8Wwz9TCRpMMgce3uaQmFQwP5Qqt7cP7b2E98H61xdkaoPCjUWKYxKZw2yMtQfSLGicLdF7GDN",
  "key20": "37a2mEodRMEPC2VK4jCVWPJCVH4Ky4RKp8MSTKzydqaj4kdifo22a5Nyx63b5ZUPexYgBVbzQHjWSgmdXT9XmujG",
  "key21": "3Mf7etmCeQg6x6rdk96qCWck3g7eEPA5REu5NwQc2L18SHXrAJNZbe3QmoGh2Y4K5ciEUGo1zbLPHi4yyBAsDepu",
  "key22": "4q65P4hkn4647uyCTHLzjCyWB1wQg4NCUtA4UyUHbC3E7SeuA8d5Ne1H7AtobjJFqqeMNkRTJyd1MR9wLPiyYydh",
  "key23": "2HvCQkNa4BXsXEVfN6s91KLGNyfjB6R7civTmwph4Paf4PyLias4qfAeCqgfsE7ottoKrLDNWQdPm4TBs2CfZ43Z",
  "key24": "526uz4PogE6Q8cSjXA4k7uP6KdGNauMNjqbGXb1NYjWfsBg6nuBAK2f7NYABTscU9HzGe2aSTuTRQbEcHk8DWY7W",
  "key25": "3pumB3gZs832q7HtEDthsUzDKdXA4eABMbUeArhWNeqp3HRs6GCFVEzBw6Tka6nYHfNwobA4UsCmVvug7pzFsAVM",
  "key26": "cFYdR3pNp7CHTgL4zRhK6tuNnVRWi3EoUnGiniXKD4saDHfr1XfDkHChDmek7VquxuEf7ALSievA2ZWMqjHCArw",
  "key27": "5yhh5XkhYdQdFNQqTCtX4m1XW2rYS9FXXVbr5eGD1yUfMutkSi1Nw8aG5xTbYpyUWTh6N8oCR2frLg7wjz9ecYGG",
  "key28": "2LGqJucna5HEavAg3CgU4az9ExscVx1Dc6X6atU1qohmhaj8Teqei5Q7AXA65TY3voq1WojruwM2TeSVssTddHCP",
  "key29": "3j4bMN4VMCDwU7qyHfQ1RoBbhen7tx2LZSXzCiQT66kkzJrFPTbcSkTFRfVJeN3vSehVdQEUf9pXjskKkwZcPSL9",
  "key30": "MfiQPMnTfQbcXbSrp3c8DtZKVKCXGXBjb1QXFdc1DUJGi4KfXwPDDGJk6ojULJXdHG9ZJftHGk97BPTLGp4YUrn",
  "key31": "HVWq6xKabDykh1WUhKsEmRgbXEygPndMge73VjdwPQoS24CtAuX8jCudn2Cej6qPB6RCafwQVjqMdLrwCDfLT5i",
  "key32": "5PV6PNFSDHKdQkMGYmy4pTo6V2MVSBWMk1EZ2mfxiHy4tCM9W2qNeUUqfCT7hNX9yovFafMSNsPpYsa1ULUg4Uua",
  "key33": "4KGkzvYZHmg6CctJkpSMCZ7AbEmV5kDkGA7RbZijeWj8Xp8ZNP1iNTu6xEhpUaaGgNQpeCRi5sgbEsPgKumSLRj7"
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
