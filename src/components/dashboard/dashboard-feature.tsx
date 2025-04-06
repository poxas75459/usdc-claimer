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
    "4eApFJ3LDt7yjGvV6Z7nXuYMikKCrpQVehpKdGt7sk8dSFadjvS1CQPWZZUTsuG2wLHVu3a6TjzjAYKEuByfY83Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yuBXxWTvmy5QeiEpLPagzDrCqcTgjj1jnYAUYbowMg6XFAxHMEPZ3XX56kRiPxb9kCehk3cSG11srjWD5maDS47",
  "key1": "5mTjABntyQNcP3mesYxp3aYJETcBtHimS9e3nwwEsUuQaT3LaQ6Z8QUuq5jbXHniD4gwJzuLtAcKJ8ZoUNwRWdLU",
  "key2": "5bTz6FgeNJVoqywL78hGgt6zWZrUumjCXCDSbUyCshRgd9BgvrnyDMK6uozS23R24MWMc1JQScEnsSNmgcxJ6Qyj",
  "key3": "5PEVpfPMv8LZrsqjxGFb1DTSpF8AussckNEMmh2t7a9YnMid8pHDFctsDgeVdzCMTh26i2A8bREGar55bMhakBPK",
  "key4": "2ZF7pMKRnko6fE24cT9SDDdXzRzLoozkkaDVcEe8qwAcYMHZ9uS4TNEMrTNvdydyHkPPFCM8NuWacAM1cSEbPScx",
  "key5": "5UooeRCJR8vNsx1HSAZiSv5J27xSMdJ3gD4tZMWckzVEu42L9n2acrkm2o8iWnJWKnZzMgBHp8kxpTtdYiq5pjBZ",
  "key6": "4bcxZenScqE3TyuzYuDK8fnYQYsiq4vE2JE4s1oZu74VGYqthd4hJXoBwxZiibTiP88M7kP5rut1RhoHKdDGbPpe",
  "key7": "21Yw6tJHa3kQmsert6zA93wb82hvo6EBKX4nQpawyaFWnmVYQ8rTPqLPiHPTJsk32Bja2o96ki3ReX37YmQdKzfQ",
  "key8": "5VB8TFQZHJsymNLXNeHTkLfw3vnWNZbELWh1D6BnjfFnVtBLEKiv3tWn5CsgcYPB4uNNHDy17Y2tjamYV2b1NUfW",
  "key9": "58bHM6wpYhypuZiKv6Qd2RnrctDw9hnu7TdwcLunpqGeum8jxfL8NzMBxVfmBnd71Y8GpkW37CGXPk4DupYvtjyy",
  "key10": "oib2KPo3xAKgaec1oA8kDvxdRguCfqNh3gBSXYXSGczzbN2RpEWaN8uDga88DAKNY6G1Vw7G4AnBnxb6tvVNDb5",
  "key11": "5wGEVLFHAZutqELWCgikVNDKnV3k2HmApMKSqeT6EsbuCeU9AX9hoP9mEwQr76Z3spCyiE2pserk4cgmRm1VmtyA",
  "key12": "FmowvR4ZyA5NTg3MDhB5UCtwLKg1pTmVv8jfJ6vUUmq7CkSTZtvQmaGHU7vKaMDvehEfN7PcBUHAXeRzhFPfEnu",
  "key13": "3xHPKVpw1xPFaexinbxwsA7JbRzwEh3JLw7Rf522VTUr2uEA8SVMCEEsfaLYM1qNJRprwkJ5J3MPTieH92RCmZQp",
  "key14": "5F56abU8o2NApznCAWMvn7EhqCB57Uyb7r882BYg2YrFQEywhkEGBKYPWzr6hhxdCHvTNWnj2y1j8GUmEj9JXvxv",
  "key15": "4biB7XazLpfJquKWkaDRPswcj1fCMYVT6FfT2RqkJ2J5eXw837HR8x6a26qouLutJs7Sbb6HJShBiv7esnZB3iKh",
  "key16": "3p8yqKrEJStCdUxqGbe7dxxUHFBaoDSgFYoUBwaPnpPatD7tWR9ZvK4SArugGYKpgZmzhSFj9eypfqDYPQq9avEN",
  "key17": "2bAJV469jh9XHDEB5KLiMV88Sk6da4yMnSmsqATnCgvnND9N5DCWEFNZFLaWBot7uY1911AKsPiPsDiNdv3Ykr7x",
  "key18": "5KdJqKMYLAH3GXjfugPSTLrj4h4bNonE7BxwKG2Jh7vtL1VJEo4QvpaXtRFWjoXPRuzjvmBCTNtDGn2yQqFyums2",
  "key19": "3hePYW6VezQKT8HZpRYNp1cRnHVhgsfFhbePtoBDWjkJEfauws8n6Wap9gbLK9Zwtui3NoeuoxbVEcnun33p8dXR",
  "key20": "wG2EBburyL4tZVhyuvqN3ecSviysatGEsZZaWDemEmQSidhHCrNgpBHWzuPY2wg7oUFcMUQLvbdP65dRcACrd4Q",
  "key21": "5hioN8Jc8yprWpK35es6uoBXDshZ8mSvAwH1Wdsm3j9jYcHvYjHwe65FAxYEK8YLepXVAiNgSicTDXVARHK6xkBp",
  "key22": "4cktXaoFiZSmd8P1xg3L7TbxVenRQTTrMFtkYpWKUXGpNdnaWwKiVH8RdBtTLQRJz4SzBCVWfaTwPB5NFb1Es62E",
  "key23": "3mREMEoaJDTwfqnMEEhR7KbZrNvaAW72QtTnHZZHku9buz4SaRkAS7bknSYEjaCNhMD3av4Zpdc8eiWGKptvJeum",
  "key24": "o6p6uAcTCDYZykRvWUH4g4yMU9rUzoJTVbPnKzxtSMrULkrQat1faivNZ19bFRkiMjVD6RQTzRvBLxkqQscaJoW",
  "key25": "5a3VqVBEbwCCofXvURQm1NHMe6J1xbndH7BapT6kTQniTQA4Y3hzWgkwMxBbWY1ZdQ9cViD1z1vZfBEeUS1vF8M4",
  "key26": "2YWrY7HLVSrhvWM8Pngyzj8WCaaNzwhrAfwTRN9ZjJ1ucwkR6FMjRiDZWNuzoHieWcJAnLfjVoXya5qJByQqCarB",
  "key27": "3yBz8Yjpb1L9DMjwArjE4rD9EH8P6yzJpzyBbhP4ybreH1gD9oCn6wSrDWNjJRMqe8Wb9aSKHBfQ9kC93BvDr7Jq",
  "key28": "4pgMQmGSe7YgKjF8x9LAR9ZwuwThLNP36iNhUwAoDuNQ5HrJwohbVCHexB54x2YvSyECwEFwx1imuX63VSyaFPEM",
  "key29": "5zMw693vVVAdnwvzrNb8isNwrfsix5vjfEsqVvuZHff7Qj5spLnLcy2SVdWKP5FYjSULZgRSemrGNq9yKaag9vsc",
  "key30": "3eyzWEyJ3yJ6xpypRwBZsPLkBzv4tfsttdBhQju1uzFNFrtjG7FioCx26qX6x6YTtipHei4HUNrR3mxTKRiJUbYV",
  "key31": "5uKuvRLnPUHS5vwqfwQ1661jaVrjXfm4DBwgYRnHGC8ceMhxVSRLPbfrFBWf8aFDcmfgX6v3Y44tmJdqb9CWosEh",
  "key32": "5p6SoepZGQo8d7QzutQmEkbH47EVDTgXNDUoTVZjXPsjhAXZeCPNBYNsP6Rg47EJhFNt3M9SwMcVHHp7Tyg5Rr4h",
  "key33": "4g5ou1FurftrxcynpyAh62ht42fbag62mh4g74Het17q5owshrvCR5rJNsYbEjXTtXgimQzTNZSJRvaPwG8nipGn",
  "key34": "2rRn4kinP3XrQWYZVLUVSqnLdENTdhUoCH7zqHSeQdQHf9Ae2V2LnZDvAXtaRwgBRAZyefn9R2xcerfUY7wKcHTh",
  "key35": "44dyEa2V4B2wY3MJ59LjK8dSoMGSfNqkn3McxsoRDxUZnGrVu39KU8JchoUveF8H2wAy2JD4c2pHUJqYaDU3XgXP",
  "key36": "389TGNtihY7Xw6D8tWGJD3MP77p1fuAdEmhUT8zxwH9jALwQjxCSJ4AvJFVYzT4xnSYkPZkr83ppSWi9jvisdAeY",
  "key37": "2Sxe1qiMNSNwGT1iFbXbLeSwpEqR6cDBTgWw2KJLGEfSbABLX95vNtvG3EPcZDkE9Pj7JaovTmvHgo9ajPwyjs4M",
  "key38": "5jVPvR5dFDPhMNPihTBCgjFeUxcF9YR6PDER7ajfmaWu86kwvdnhLmxph3RHLRQc4TY23yUVZTp5Trf7n76x1fLk",
  "key39": "3aZbkM8bmGnBG3P2mbW6AkksmmLMUyA3F5HzurmmZggv6sM9zM3WjGSt4NeCCfEZdwNf6fJSUvGYdLJEFmmW5LXo"
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
