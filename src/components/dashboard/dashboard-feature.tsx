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
    "3L1sucgcEEkLvffu8c8iD3R3M874xhUVmYjdFbgtyGVN9CvZzEcsqZHrnFo183AS3epHLHAkY3aSobXcBqK5EwsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pgnbBfZreUNTYdABkUeTD6zrvK2ohv9mtewVSJroYA37BvA8SSs5fdwJ2Pn7BR3JmWXiXmbhSyggUAhiJf4sKds",
  "key1": "49g8t9C8tTwPRyBskonJuVJJVVJjbptLEBgz4uYsnAFfKapXYrWDtA6fvwkZnqCTKUSHqUzdpdnPvmhjsr8g5s8t",
  "key2": "5uf9NN5exijPL4BopPk6wKdNMHkQ6JqD44xQhwHJbqdvXisFDe1TCzcCSc5kWGWRz3BR9rNUSZYt3E77rapozjRN",
  "key3": "2cxMU1VsAZvmd5M8S4odUPwnpwtBipaRAqX1N3SD83kGLxnBBqrCPc7q95BDeZWw27Qg9qRSW8JqVE6UM8sfPqNT",
  "key4": "33SkHnfsKkBtPUumsug9c4vHnj9oZmYHzour9FhQv8H6g3N6L2YyN8uTF7qsETesFqQKchHT9nyZ8ZWjxGcWJgUR",
  "key5": "2mDob5UbBRrWJC7Q2fBZt6dPmajyrvGonJjuENUNFUDQSEFjdLZU9WbiwfcVRwbnLeT5cvpugnpb379ZA5Q7qi7z",
  "key6": "KJQ52qwDuYwNLCoxZDV7NjkAweE7CY5zFyckKgJwKpfdrCKJgb6nKRjgV2cQVNuSkxpUwdJdzepPttmBY6ERkY5",
  "key7": "3es3PYLRDYN1PPKencLtt8QSexWLgoy4jPub8hJq8BdoUGBojNfxQ8Q6AH2TGZZPK9VC17TnCBdNAbg21j5qLh4e",
  "key8": "3VxwhXTCfgCMDAv2Ybzo4iUCXoD6KMbdjaFuvrTQ82tFn1a7o39jYGPECt1BN2YKdV36VfNk3RS8o8SgURyQn2wb",
  "key9": "49jCbPH4LKXJPvC8bbdebMpa1r4jopRuCX9hHpBzzFijyo5WQwL3kis5mc7oSH2yF3QJN5ov8ipT5qKxvBYT1oez",
  "key10": "5ZhwsoKmfsA5Y66cEXrD8BLc2Eih3Pa2kfKjw4pm8HzueMWQsNmY8r8DUKV4ccZGAXjKqMH6FYF9gu4V4L5K6uin",
  "key11": "2bDNVHShPUQ6UZWPYoLT6bRBQGj6yJdL7fnakFLNWgSApGJXBJXCj6FNqjbYdW8JTgh3ZcLJqPwjNbBtfDztXHxE",
  "key12": "4PeymcokLwUi5fhkw1a8qcVmG9LdbC5p5W5WHidz82NVMw7jfCFsdJFR73BdWpVewrfSQP6ayi33BDqKMFaY3t2D",
  "key13": "3FEQRp7GjyUSgnt5A5MgzkP7pHCyB3DPUMqwwcmR16RChpQv6NEsTzXe5yLpgV6HmuZmGHTz8XmmpVPa8g7hqBob",
  "key14": "48HwhWwGXme6a1vuSJqWuN6aTs6EzJdifiTGYroiUDzALh6oPogzVqP4E5ZMKVS4fqX67HiswXKtqFghVDTng14h",
  "key15": "HD7KvWjxT58sTbNNTanGoF2vhjK9GcBnrgs7hwmqKjACKjAAn8ymrHTMHDCShgg6YekyXbLg2myv69vNRti9scC",
  "key16": "3XR8vfMKTd2dMjtsSENVo3fHZxcFz1EMAjrisQP2Z8oLGEt54i2g8CnFevysqtK2AixnM12LU7bMfkUBkEQGBX1D",
  "key17": "51yo8CShEeLEVxt9mvtQFXEyg3AU4LwNcPW6MsHcAsFby8UTnQEB3oFqxiPSr8oVJB8bEw1WermsaRUhoxCFJEdm",
  "key18": "RacAZjL24nw23GrrvLSsemDMK26sYQfJJXP4NJxPVfVW9SFRpdWh6aCtNhszYYKCTNDL2uRMHNepXSLwzGSxVLA",
  "key19": "5jffwtQqFst3PkVhiesVdADDNuC4n7g4rictqkhHc41nymJtYVM5p7L6U6F5VP5ysVmUZCdnajzy7WoU2N6XQRQd",
  "key20": "4Gx9WRZjv1rrJmQYFjwWFvgdNEguJ5nKRjaAU4Cnzc4xvkbLFHqsAtz3M9EjTB4MW2WfGk4aDDW6szsnmZcDsNTP",
  "key21": "2YJcDVCmC575aTLJNdJmKAxkUeDwKWJZfZxFqY58TWMiWjAdnw5XT725HyjXUcWYFg6is39ktJDiYeKewHpEHBM5",
  "key22": "2iMJ4k7C1jcZxyTV4iousxwfVdExu11sKnViKcxYzudKQp2pEUWWhoJhWBpzsGeijKDnm2oepMQC6s2fnQx42gn5",
  "key23": "2cQW1hXHJ1tVGNeKSRyGgHkagGyntbHsP4HGctzNMamadDcF49SA9G2P4MLHx84fXesi5qLd7bhmkkHrYmcxBFL4",
  "key24": "2ibred4LBpi1Ms7S4wDx7UuMV3xyd1hjTRHY8RcGPyECPcHgpVS9YXGXBUWm5roibVhzZP1uCAGrxW1km2BAWMqw",
  "key25": "3mEnTBH4CLyF56Cx34boutWSjCoRvNYbVDS4GrHUisNF44xtjW5oBxmTdCeQC42a59VEAoLjvwbxjQ8RTCreagR2",
  "key26": "5PoDH6rBSTZxE1TTVuu54mPBq9hye318RxZBVWNRKRXp2hgfjUH5ZpZF7RHeBLp7mncy3d9by8pRH4uZojGrF2AG",
  "key27": "3TewQfJ631QsutPhMNWkHR7feYKmaTEcgsPuinfxhZrd7nSX2udTUGTHzLy56Fyg3Niad5cQuUVkCVNh5CNRtA1k",
  "key28": "3uQbsdPXoJn7YkpoNjsWR3PcFtLtLfCrBZJoBS5NhTBTbiZmeSzqbtxHo2uQUhpNz9D6EfT2xGYr5BtFMspDe3Nd"
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
