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
    "5oe3iobPooBA2j3uDgrWVjtSEDPyobyPos9WrHoL4rLYAoHqq6gQrcw42k5sEHpQftw9dGXL1YScDmkb1mDSBuFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VAKztc8WGvPbiVDK4KoG6yqdLGHZLejUzmi4gTAnDpwyh2WrZdVKgLK3U79ZWwmK8yvFiew7Hjb4giUEQHp9RGq",
  "key1": "4y9Z4iikcoFK9TD3zqGA1AeahHoWccB4tFv7GgM19t4LKQ4nKH7YVyPCbhieoNmtFwhxEAXo91NpDRGSYPdHRrhv",
  "key2": "5e8T7GG3rP3BohcSmwRsz9MW4nBunoJZo8hvzPFuwgHYA74CB4LTmAx1bfw6r2sbrF6XRFxwKhH6jhTfJne8WbKb",
  "key3": "3aJbKcQvMxhqbaEywAK8hUGpF4QEQFffRAnyC3Fyas9VfP8RXwihdFVd97YywJcDNL7sj6BgmEYCzJiUZXJKA9Ef",
  "key4": "4xxQ4YEQgQCbrLErxQR63gzrt2YZXA9ig6vEBURoP79wXumB2V1DgA4LYTmXHuAVMDymBswQuvMZ9FS41iH82sAM",
  "key5": "i3cHM3G9Np5yo6r75X3U67CrxCf8BQjJx8Aib7U3PWVwwQLpJkzJgtkmEqXMyNhaStmuYibPHTSDzxhVfja3DD7",
  "key6": "43vqMuabX7t4Hg9z81641Bfd4NKZ23txUCumweHY4tZK9dhntm2bFjScHDGpYrz9K5NRfcLmqxi6ahr2jVPVeQ5a",
  "key7": "5huk9nom5iJewNte1Qoja2RZMheQwquxUPgAfvssV3AMtqTmA4Ur1p7YxjfzZKJ5DmuVa1btmkx6JhWFDtM8G7bU",
  "key8": "mB3Geha26TGSYcaR8pDyoissZBrZWHDfPzKXJwqQEYK2NPdMx8eUZ5KbWB4ZSfVZ9JjEuWUeGWrzBqQJLFQZ6rV",
  "key9": "2MSGhmcwrcJhRxP3VjKUpwZDrpU3Jia7ENcfjmMRNfUEASTKfVfa5xeeTbNPHs45hVy9nPns2XmyTsmypPn8a4Ch",
  "key10": "5ghqKFMSbk9XyXJEiRjdXGyxsYxzCLkGuFM2hLM6WQsaLwErU8RZkebKVjCNxeBmKNxShmggDY1LTvihPPGFX7Qk",
  "key11": "2oJ7dpwWJcSxd4CVqovSFZNh47Pjd4YDucREJKZL2noY7zToYBNA8Nk4JMKgeBzpLvUZeidJ3PGmzZtiMeJLXfza",
  "key12": "5SZ16Hsos1ZzJ5HfThrhnDqYkvKeev9bp9SAnergnFLStUfdQjj68NZjp8JWyChHXhnfAV8y3b1dHr8g3bJsiHHk",
  "key13": "g6z8UE8w4wweKmNs2k7cW2u2Vg1mJtXM5CS77zDT4EwJo1Qxjpzixp1W7eYbQcP1Xua26QAmcSEa5xFVVQMAdu9",
  "key14": "5m434Dg7fC4GwXuVs39W7g4D2ncx9bShQCcvCWG25TQpfAMwJUZXY6pmJD39uxihHALrg9iRu6WCrhQrk7bdjRga",
  "key15": "3U9MdNFYv5YtBiXnuT67WettDAxHkC7mWqoQeTfcPg8KJeZ2NrGyYVyXAsEb4SYE9mWPsj6mTNGAcyZiGEJJB2EA",
  "key16": "3EJkDZcxezcEAwKSufFPksUTXBtiXFL7xjUbJXNoyNKdPHeXCan8AYEw8B8sXSdamaJ3hNQXJi9kTmFxwrgZJPEY",
  "key17": "38kTcsF8ugPe9bMMwa8Hp3DLatcwjSg98R4nfyFSAW8yjDiFNn5WWXDg6gZK55awULqhBit7Z6qZ4Aug5r4TTXxp",
  "key18": "5BMWLDDTMZw2wHCNJuqNiGuF3xqAfKLcrjiXFuMusT1DaVrgrakTG1CM9Qd7QAJcX52mE75NmM9GoBaSBafsjj8u",
  "key19": "u3wBuU8XMKFstfLUsmGQomEydLmfntSTmwcpoojD4RSUBuawDvtP4QpSj5RHXQmkvKUqwNxZDNc6gPYY1gH5iQS",
  "key20": "5Bjfq2RJHapjBdJgrEi7tMqgwkzA3U1yX9r9S42RYc81SEuJpm8MEbBK5jLwD3J968RRHE3oWsKuRvm22E5HTWnA",
  "key21": "37jvS4BSb7qCtKoFDUWJCZTUSr939bzRKaKH29QmyxoJzymWM4EwnSiGJBK36H2kX2qxRwvLgrH1ret2kS4j3PHG",
  "key22": "2VWXAe8Ld7m66Dxrs7cJREJWqTjnXwCzYbxKrWzPVjxYQwpwsUfWqMdYnBD4L6e4qNWSeUeVYPidj9vJV6xUDvtc",
  "key23": "3GbWQ5UW6XQq4se8WLiPj2S5cLQw9SAkArpWyNXyTPNDu6ozzsHbpeG5nuV4Ux2Nnc5dK4eFh5gsi1G5Y2VAGWUL",
  "key24": "5iG7Mj8MJQ6ZLaHku41CYy9fwi6uT2mVAtgV7W5nq6Pb7Pr6wwmuDiQfWHnsQaMSzkS7XVG2zWi9dUAzbbK6edmv",
  "key25": "3ThSXz9pBcNUccEFPMCjubupQFtNNNEdmyQtDd3Ty5uLJkRCyLrhFFFg5sbEBgMu1UQUp4zxw2TAVkRzG86yKhY8",
  "key26": "4pyMqqScTzTdqkBjGCNisNhHhDA35i5rP23BXqMUjG1x3HDTj4V4WmXGWLnCNTqALRMRY2GWzyRioeP85J6iPYeu",
  "key27": "3iMhDzhyQJ2eFGH415aPdKaTc75WSti4Bdr5eR6zWonKNB1duCHh3Y8BWGYEkbJDRkJLUepvWGqjUymB19hxkzCn",
  "key28": "2HMHj7u6y3ZBkdsiSWXxy94PZDBrHxqv53MHKsZgN2sRV6599nGbRehpiCNjhRkBft5hBEbyKcQCRAECYyN97Huo",
  "key29": "2eUvjuMaymf2EBuqaMzdFY15WSKstHixWocFynoqGV2kEd1ivaedgNWAoRqQfh8uXa1Fb1LTYXAN4yLCEhcg2B9G"
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
