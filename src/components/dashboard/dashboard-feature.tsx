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
    "38vST7BLNLboaeJ66jvdspraEaf7Srv5FSYs6UCVh8R9r1pifn3LjF6n1ibfRM3SFgCPqXv4oYSiAcJSbWAL5TPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ykA7HR1s3fP2kGktVb9x22z6NtVzbAcH6RbLVAtjGVn46AT5DbUjQ7mkNq1iUjebRcCyoHxyeYH4JwyejWRX1r",
  "key1": "4uvzGSk9xWLY1NMz7dvH9hsEXVNDnHn8xguQejNXDFzw1dxQjxs55sdiQMaWDadKRsUPErb51zHLNfwwvbXJyK7K",
  "key2": "5J6SEXV2iPxkdvHLVLQqtn48Uk7yXFRpvxJLDFYr1GssY84T6BR9RsZpTQ1RKfKyi18VLkjnTJqAeEf8WN1Ke4gd",
  "key3": "5vmznVWq2T7vXdtYVXX77ExJ96oXc1FZ7DSojtrBteMHxpy3fF2bNDznhQWsbiEYJXgAQR9skuD6Xmw4j1GKqazz",
  "key4": "66Tm88hKXgUUJ4Vytz7APibZF3aQeAeveGH6SQJNu6gQJCqq2oZK35By2nh9jcZM7X9NuwvNZ1MZ1mvhUVjjFHm4",
  "key5": "47gvkxdtyUzroFnG4J9AMySL2Succbj8dQZNgh2PHHuik69f9RpFK6qdRgGH3gsv8wZEdxRTqGYhe3fHpt5w3xY9",
  "key6": "2vcnn6kV6R7i9JwnUk2Gy7S4S97ghJ6isnXVbZLZYZL2ZPL9aNvhJTZaSavJh57Rnz7JkDFT3Ag4WMnBAuueTEeK",
  "key7": "5z1oxHteqfJEgcHtUzZNjfpogxunp3mVL4zkNkQYMAqVfyQTjFrUviKtKpgrKbVpMavcEznGaqyF4CGKZDWUHH6J",
  "key8": "65UJEUTHTHjxRXCdLqSLj3ZoFGBRE9TQG28Z2dmYy7fgZ6PuFB2rjWf1VTwMFWnXDadUjiHFdc182JErT7L1GtUr",
  "key9": "3ah4ftFTMH7RWtq7zvESxvQTGT94VQmv8DoJhnpsfLhfwXfrAAfg6Tms8q6JaLbBT6kKZt9PRa9XMub9TdD4ubiB",
  "key10": "49qdQoK6vvTmGrEmZtyU5jbxTMNmqDWUHA8zrd191WCTFpJww2n32tqQaCv9cWtLwuqNyBbCaPMjbZJCZkuWe4TA",
  "key11": "3VbD9foTqm9JSoBo1aYPFhGk64BoA6r6wbiVd9pFacHznDTcMc5PycAzH4KgwK8eJJi9ZTguJVYdE7m5KAQxcngR",
  "key12": "55hQuhskTBNDHSbztydkorW5xLAAGtynqb9y7MXbFdZarnuLxoa5pphmKFV5WGCHgZCNPu4tVXoV42NYDeyRRZND",
  "key13": "2bAXngeF81agvqX9UkHYXo5gbXFAayL1CZHxzQ9D6NmCZp1EwHRmnAGDQoXJFKsPtywrNCFPqSyKwaZpaHrRSLvn",
  "key14": "3WjrzEoMxTaJWQi7c4Zir9yE7Zokm16XwQVFqjV22uG3QNyiZobaG9HZrFrNN5U3PNBo36bjjXZbB7uZEsS9s3Vn",
  "key15": "rUBdUkwjsa45oZDreJReCHNzRnJunFdPkcyzeFpwYNuYCBJwhZ5wM5Y2rZ8PsWFiimaiNPpLctazvAZNdWHt6PV",
  "key16": "MgTqcoKhe8Hka8wf6nDuGBkJc8pK6Qv1zkwdAucP72Fsn9GZufTY2ghXHmmzSFkAK9GeYwEidfzv4JTtPKeDzr6",
  "key17": "8FprK7tvRzobUNqkpkUuQyraMFAwpqfuC9wDQzTeAqJuetZXwnkf92MkUTG6a74v1qsk3ZXBGxxva1RyL5d2Pvz",
  "key18": "EBrqHtjwXSMJQti7Z9GV2tKXUABNk2X2JBzFawENowysA4EPHM7VzpCPkTpPn38GS95fak57GgwCha3oZjtPPTm",
  "key19": "5EoFonyxyKPPYhGGZGEDTHmsR8Piv4hzbXfpvujf8ZY3VWjzVChfKbLnGHJFCbf3xi6Vwa7c33amcocnzpmZVRNo",
  "key20": "2vjaQHQG3uG9N8zau2B3h6qikbHLJfmL4GRUEBKgJAKvPoxmsdNeGJY8bDBZ1b1CVxfKhhYTEgRMdWtkRTL7GFbk",
  "key21": "RoJH3y5tdd5mE9a7THVNYEFJjvN3CyTcon6iABHbKdvUpu779Z2bENX4bqETUWDp6ioYaFSPsaxvo8EdYgS7TvK",
  "key22": "aTsyXzcgHjSW7gGqfta2bhcWJAFJvH8DBfXUmp26eTmKktCFuwoTjjZRsXNmthc22v3GgATHMVwBj3cftTDWqnH",
  "key23": "fs55nQqZMCZvEgawrZc6mECW7t4AgziLiaJU7rKGrRrELrpTiMXknG4G6CnDLKzBBGNhsSoS9EFXQ29rGSwNGbZ",
  "key24": "57Z2bBHp2CqgXE4WJsSihhgTtVjxLxkCALrqrDvrPQ9haAdYHjscGaXj67KSjKVHdCfAMZPCAr9sNTFGsFPJmkt3",
  "key25": "3u5SmYgxj3DTF2s43jmoFqBX67phXvoCH5LgHKrg4LKsfDwbJSL99UZ9s5WwUVfA1VR3asc4oJFsXmNbwroXLFo6",
  "key26": "4gpTfYe4gevcmXDjQvWLraQ8RyqxFHVuFmQDJ2A86M4qGor13AhJe4jx3h9xPuoJbTTqkkrnmZXhG73g7TKptA4W",
  "key27": "PPxi6eMSJtWRPxvGkapp52CMrc5cajDAtQvpQzwbjxM5wFSiCsgKireavtBsAdD5G2hRYuEAYcLpYXDxgag2iQg",
  "key28": "58qh2LMXLgNTJthJFoTyUAJSszMUVLRNwFeouA1tBDFNjSWRPXvi6BAH9KbgNcTfF62RyFovXjQzDdn1J15xDArH",
  "key29": "3vLmsbSjQyC5NHwqi2Rct8xuDqbS8bg9aZwikdEEwwAxPeSffBg8MXRi5TXMFYEZGCahM9QUhCCbUfYW4t78Kngj",
  "key30": "5egaTPLayUaZdGDtdNy6aRTGe2zq3ND3oFfiYAvbqYAUPyqWn9rNY3GoYucrjFSWQk5Qnu98rn8UkfjsJ3M28VV1",
  "key31": "sWXbfEJaaWMfTakiFF11b8HLHgJrXg9a5QaK2oHeFuHybRS5o7UciqGsFWgvdkzDrvJY6Eg2vd1WBhVBYSstaCE",
  "key32": "4GPZaWVEj6RpRNg6j6DXUYqGWwhvj3jLaLRUHfZEcx8wdQffeUsY91hua4Cud6zoSm9u1DHrBsP7cHybRCPJzHaJ",
  "key33": "3x1UGu3HfQqjUEuU8WzzuSSpEwrSR8vuz3ox5fLAchWcTF2ccT8r7jRs94iZF6mwJqkWzDGU7DfQeDt8FXxHhd18",
  "key34": "3hg4Zg8UdtXU6F5ZDk1nFF4DUYWE8myyuoHFcmF6tWt73Lb141GNz2oomeZdQX5rfYSZ1qWoXAXxsAwASCF4EjPk",
  "key35": "4FWoSsq5CZyXPduGHfiBiKs9c8gr3oXmcEQHrdzBZBJBj2kDWeUYJDfbP1kbaxM8YcwddqekEjGNXrDBykSBttme",
  "key36": "2wvXAzLCVPCCt6oYF76AL6mu5UXu5UbyhJamMWVwvUzzuuZNTBjMjt4JbTJnEz4M9TgspdE8pZcbeVUoD5xLXDFX",
  "key37": "HcFARwDZ61NrmVYK3c1V99i6FSAnUyYV4geMkMxg7b66CtW1KzVCAL8WStX4nYRCHze4Qxmp6hNe5QBRYKwGVJN",
  "key38": "5UHBHNKYxTMm2b9CwkdZqtoWnq3tSAJMEPKmwN1hNLkZFgHhAkYJ9gG1CimQ899zonfi29SjyhPYJps1GjiExBMR",
  "key39": "5HBEY5ZFmkeVy3pStpswtZkTLLuS4qJxEoxaAbXNCr6hLjoy3GWdG5pkAJhum8rhm92BqoGTsh6P3L3o6f5REPn5",
  "key40": "4LSvsusnue5iCKEXjmarbbfTd1AepM8fNJ9V2tc2rGzE9cT9KuPYybygw1TWk3a5Ny9KeTDdEBZgWxwYFk4kcnxj",
  "key41": "5qTBFbcBLBu3ndNn67ntXk3D2vnde6zEbuPnfcDkFSkecpmTsAFGt4RQnbqnfYwTsD9EqqYtiy2hVBpg9QuyPxsT",
  "key42": "4qVudiqBe2DzSMieRA8UUPwZjKcqYmwjd4EiAQk1v6GSEQAjVd1nWezmX7WGGw32LXKrPGezw739wFe5ZvLDU3vU",
  "key43": "54TtcTTCZpdsurXrkuvNTS4jNq3MbcvLKvNPLy1tWpGTK5oY8A5XLWnfvR5TsaebuswZ5pyf4oBVabJbcQb2rHsG",
  "key44": "26rwB22itcMQABgKWAFBVbsvghfiCSyxRGWQymHVRpRq19z5YVdbqQsca5dqmDEcBCdBADfNEWZtG6joyf1arMG9"
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
