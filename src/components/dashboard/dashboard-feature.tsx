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
    "2guH3qhcaWhKedhDwwnKUQxKbwr7BoP49Sc1SfPXvWA3NNEnFxvRUVimSjB4BNCm4HecDNnXroPwQJCkxZ159o6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ECcXtUi8jwgpMMp4kBBFtuQyE7kVxKJhG33DJEyZGbJKjxx4C3VqbjhBrrDCmyoZqAsQ5aHCuEK5cpMFLmRQqdB",
  "key1": "3cM5VLpNZMhb8KfNvjKYaYmxJprLRXTXtquLMEr7c3JAKZQrop8DoUTPrbNBax2HQzJABvVSKtKHAYGj8kvgRAuJ",
  "key2": "2eQVRVuoMtkCwKP26VHE94wAYTSFw7u8k58K58gFbpmjagAAkrY85a6YYmHVpLfmvg4uJJ1KQdRb4thNoqPFhs7u",
  "key3": "588BdmV6beay6EwvbU1TixFthkmnxjhJEqm7NTfnvhBKWZC6uT11kBMAfmE7fELbcKvcFALCgYwWCBD7B12mJptc",
  "key4": "22Z7wGw7g6xWLPak7ygBjSXnvkuB5LW53WMk3KSoN1HnsjfQeHo5nrZcgzrPRhw569umq6uE9MZoPkvarg1ke6wz",
  "key5": "61C176bat4DLu828nPC8CQEQVnLeR2QGbJxot85LkyLxWeV2PQih1PfKSSsNeJMXyZfhWVxiL3aphn98oNNW2dHQ",
  "key6": "5g5Qr32YAHXxVcACrdZnTcn6u15ZAoXuW3aKdxvHYUDkZUXdoSG77pdUfrfyt6peYVf1dFLUYoWhhqLNWDbAhryu",
  "key7": "2Ni1RAtGMdh5Sug5xkficR8QNvFSvAE6yN23N6KYrbUF1XCWLg5dEysDMNieUbhDkPXXobxtbqsko1f9wEBUKwpt",
  "key8": "2SsY8UNQx3r6Hja4c3uBnSx7bDUEDXgk2SX1YU1tV8RBv72LL47iGebsro4Pmiemx6Pu6NCTyVpaWYh7HbNGLKMc",
  "key9": "k1D5bLbdZoXQFBMu81qGSy7agW9snQ4nks73Vg77yEAjRt1FeXtt6vV649C1eMWThUdNZLG4q12VKwZ2jNt7eKn",
  "key10": "2XmmmdZvJjCzjbbjyL7ghfUJb5FF3y9S1xe1rrLnJdxtySjXyNsdGi6dSbRxqdK42pnSLdFYxxC2W5dPjNyCJZcP",
  "key11": "8a1WcWd1LVWMVn5mKK9jXmKMgVZriryppe2Bhi1dtSkvGsUv8sX2eKTjgjgPvXgmrEKjuENxUWSA3XVyyY4GoN2",
  "key12": "1iVJ2BkXEUJL5h5HasfHEikAzsQojAeG4asbweuhLvCVYC51HaqL3QmcusqZzvo295jL3BhQ8dXCjUjacRFXmpQ",
  "key13": "59DRAbKB1fE3gkvYkM3Wq79e3dhG1p1ZEXDhFJLGXWLXbMpNc6r2BW33uTeabdPwaEotMvwym3DzCjrFM7MjmnjD",
  "key14": "3Z7aM75apS7mFDGL2j3GKzuS75A9Xc9KcPxtpmRGpSdJArRBs1g7aq98jdY8FkYD1oGUgwwisdU76phgzvLenfcY",
  "key15": "3q4qUbowz4PfikoVUpLnZcWkjzB4xySZnZeSPbJv1zFNtdEk9QBeVi9umsREoirk8sPTvAb5LREv6YiJVms7tCdr",
  "key16": "3DqvCWFmu8vTKpnojgNPMg78Twou4z1LvwJ3dgj7savFga24BgejaxQKa97UvSQTdAPZt8nUTawjyb85rNM3eL5Z",
  "key17": "TYDsz4ZgBnztpWS3pdH2AvbmPkpbbLn3DCf1bWDnzxRw1B6Z9xfP9bwccY6Ex5hLb26bQMaMhQ3cnVzYxwwHnLf",
  "key18": "rJhN2usr4FKEGEdFj8tHXvJFWb1DxinU6LC59J6fg2jpBSXhGDHkS5JaGeLLj9WtwCr82yuZwRUUbRAR7jYgRU9",
  "key19": "2mhhViL5yUmecCKAee2vxu91Jici3qL9H9qgKkFFRBP1J2jGqE2rwrznAu571DJbMeJgu5vKRgAKd1XMfwNn5PiD",
  "key20": "4VLN7kmzBSVy1GtgmN5Yc89rM6DrK3ySpXpLZDobQsxSPpj5KDxTydbqQmwcpnusErYRU6N93sfrkWEzdFsMfoy3",
  "key21": "57pU8DDY28mzNR6YGKvgWMrnej5cjXUtUxCyQg5Qkp8NEcZZoGxmeC9Px8c9waVFAu8kGuuyDRtjGuc1jnifPhSN",
  "key22": "2zfKM8tWcuV6wndUa13ntcQqQy8vPJti4XeYTnQ2wjamHdKgovjhTP2EK8quESi7rHDVHYCXKAkHCen28ZK1bFMv",
  "key23": "5HUK1hYpcXE8Phi6kgEtf37zJZtxqfvNY6sFvoyzRdqnXNfKFhYUSbU7kiLe2LaWkWpXtPLC2uTjbaEoGyxtGK78",
  "key24": "23ku3EChdav7Aw4GPAfqdfqvGRVantbtoqxYHCbGYpC2UDJMNQCvaD6kJnVaBSxxYazu4DEDUcSoGuZFSo9Asyju",
  "key25": "5pGKy3WsZg9Pd9qDWq4V5bJ3Nj7BDi7e2qfXKfMWshoz93ea5MFYqrh3HXXLw6a9NHi8Fs4aqTzhGkj3Ucujs8NN",
  "key26": "RUDgrN2XP4BNKRzCC8LMizAoF6rDVRkk3tr9fe9rN8epsxQ3RAwzeqkGoLDJstUZbTrRjNVavEWucWD5AUtxjfH",
  "key27": "qCAHckaHArS8hSkc9ectvPiSJHzeXKDGbn7wBSFszMTZLJ4WMv2a3RAfzPPFghvrcbgpNjSqqJ2g2bmm9uh2ynM",
  "key28": "53f1m5XqgE8Jx8smYxxgd1Z6jQ4QyN3dX4ubjrRqjHrxQiDkKU7hXZmP2CLbcRQBpuWs5dgD58Cu3RwPcFcEJY4z",
  "key29": "fzLfshaBUTdDYt19ma5xRpegovb5WWS55RnqQ1iMsu6DpdAqHafCmGoEF4wZ4zqQk7kvhuD4ZCnUwJf4S7UCM85",
  "key30": "5e2kQUMRAkP87Fr3fdRLhvA9tGU2acryB1zEyWGqMGpMFcvBGJT9L2kfyve5KksDUEmbcqKUbuiCeUkyu1zEaSV6",
  "key31": "mjkqphBj3P2hzt2rHQZVezJUK1reqt57tbZTdtGoxFLijHp5uUkaoq2L2gbQTokq9kCuUX7kmMucmg6kvLwsffx",
  "key32": "62YnNrTNqserJ996jMKp8rMj3mWP8yks8q7GQeEXKiMHZGc5vnsEfpUBGMdbRXpwkkoHY2u6Qo6sYmvb4VuNroF1",
  "key33": "4htgkfX9n3geF9GLbLtoU2mEzts1Q2e4i6RkCsURQ93PvE9qmfNepy3qH9Xr7UUCnLmJu5AcAUFevGAcXzLWMLnJ"
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
