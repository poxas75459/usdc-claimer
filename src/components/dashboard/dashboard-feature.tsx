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
    "3pX85ctvVrBj6NaRHVLiJUqTRJqbP6C9uMKodYayJiZv92ZBRRJoXJnQJUHk8EoqRJyxQQgBksfg3RQcokZNSjg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e3fJracrsHje2z5X3K6jubqJq7Sc86TowTfHvpKJntDsdNAwkxPWXo5Rg6qLhrY7SHk9iAeca6rK6C5NmTgYksz",
  "key1": "5gxWntRoXtcJ6fVDFFENPKBqFVroEkBgkan7DQWVkf18XAagioPKdTPQRdxb1SHSFLRpT2rcCDRvkhtaXwyz2Arj",
  "key2": "4ZBWE6JWDXMoXs5iUjgtvuXBe3bB9CZT948bdY3GyrrXQh1ui47JpTLumnS1hpU8Lvwzze5i3ykc2QrFsWQcGGYY",
  "key3": "HrpCSyTgKJJME3YacszVEk1GZ54yZKBajSnJmi8AuHEyZpbp4JwxBmXhLZ1kVs5w18CTdjNFJqAgKiGUoMEtcWg",
  "key4": "31e4KubScquxiUXsKf3z1iuFAhFJCNibnV1keyoMNLcrCkRKGSdztNnBkyTXRshTFbG5q1vTmNg7yBBcqpYVCgs3",
  "key5": "Aifj1X8DV2g8WUf4eLwaDW78M3Z14auvzGZdwDCVwBP2g3tNzvjr8iAKtCtKhzrbYQ5ppK74JEhH2k6mTEqkgyb",
  "key6": "2e8dxvjMqjFwkuAts2StZ14UZj9PqMaDxrnpFMgCUh3btVBgFhZoZ3CgpAj3gDsmDRc6knNrcgU3CXrdMat7Moyo",
  "key7": "3qGbMHarS4Wb9bzv4RjjFfRXEuQ33B7A7DWASEaxJg2ePxviaYT3x5TQcDhk8AQUJMN69bWy5dj6zryLJnDNyiUy",
  "key8": "4mmsTsMjQKo9PFHHqtCS89wrFyiHm8pSt7QDpgrj6ZVPHQw1LxUAr9UpACJWWmzv68FaESRNzB4uTNBQioZJVEYX",
  "key9": "2KCa6w3ZNVhesNu7HevWSwhBhdCptaTreGP7puLqyU8CpCw9PBZR7WkNbzgouBEcqF2UCkDaXJG1kxXX7FEhUfXV",
  "key10": "3NGhwHTpGbuCzc7wZ48cQcvvML8zDSFjLNywY1tJei211N3whnpjETUPPQf9mkJLpvfHd9cssuzxMy3CwurJ7bdj",
  "key11": "178U3Dgfp7Jn6czA5bSzu9KxGgv4MZd94Gnbnkh9M7M5bTZZupMbVihYXvWUfobfpVoUhPvV6Lt7bFDmUX5sYoL",
  "key12": "27fWddemGfCBqhFjAno9uYHFM1MK32qmNWcx3npCo1qLFsJiW7y4hXADrCvqVKNsnoZZ8iTbVxQjsmUD1Hd4YdvY",
  "key13": "5BpqwK4gvHnLRkFgo4H6Kgc9Cw14LY2eLyfky4zPF9BcKcdG2aGQL1PwkVHBex9xFxgC4oZPZaFBtGZaoQyNhLR3",
  "key14": "46inVwW1oLMZPmvX5ddNZDZPkPMfujSJ4GqvnHCGQaycnVyNjTNTj7k15rK6vV7dXU2HcwwGhdttc4WjVXERdajB",
  "key15": "2THyY91J18VqQFenW9eaJzQqqgXi7tKHNrXoekgbVtMWaRGFXNGZvAr3ELj9E9S8ybME36HXVj679deWz3EDjoZe",
  "key16": "2DU9fd2ALi38fUFViDPcvYoGxTTigb7J9jHkbxK3WQvcE6Y5hUAY2H2SGSrnxx23p6VG3mUcJc4MYWvghofUNAVM",
  "key17": "3U5ff6VdLtSeQY85x19EWnRxyRNnrShn91CUu94DGnRo3yiBhBFCECLvUJ1XvrqV25S6ECm9Bn4kKiVQr8Q7QD1g",
  "key18": "ctAGJbsaXTynGqERcCTpmEAtcc2nj5effYyES4rSuT38TSXn6zPSTrzj8vzfASTJEu373cd1d2A6vKGgLvQ6sZ2",
  "key19": "39kGNa35svZiwgrGEW5bk187vDzNhFKYmcxhKxjKQrReHfhEFzAJRTmnvLpo54JTh4v5C2hxmLM1cPP7TzdCNm9T",
  "key20": "3FZMkRaAN6Jf8Dwo7yLaxpLJFzUBoYX29QBgae763r9FPdvcSUMo9q6DmYNHCrvau2YuhEHFMCK4PpZy9L7wv8He",
  "key21": "51chjeD4wvcsFiBtZQygFfR1yJ7SQ1enho789Nv6Md71HaFC1ogQUAg1P1EGYr3xcW1KoaZWsQkZp5MqJ94ezkWe",
  "key22": "2QAuLasTG6jffHQSLZT1KgDpzrqGWpgph1ZjsJXsNzaxC7foNtbrfhVHxpyKN4uQxFgMNC3sqbMye8W5n4DQ7k8n",
  "key23": "3GnnERg1J23pYxz1igr6EjT7Z96HeCWBcLaDBK1qmvdu9k2BD9oKSzza9xNRi5wVtpC4FvpudMGY8prfaW9PdHUo",
  "key24": "4pbj2FqpJjjPkXzb9Db6wu8zwqUrkh5jkLokcFj8PBDz7NQpTFG748tPieS73WT4SZmUDEfSbsT8LuSyJX7Zdubk",
  "key25": "LzBBnXhm1ZWKtd1B5FFDXzRTvtDhe8wfdx1mixgMGqsJD5Rz1aFeKSnQNyobbeNb91YrUueGGtSnoiLeXo99PEM",
  "key26": "125J5oV1wVQ1YEKbm22y4bA5xPSDqzF6MRKmYThPziityJNGz6GqTmxbzQpBChmbfur1KGx53aRzhbGbiHe5k1Yu",
  "key27": "Jy8VGFvGjjTS2u6MPvMyyefZAQ9rScHiwaKk8AmcjLNSZZWhfEHJwHSgWKWD3EKQw6mPUvU2C6uNjwgn1SASqwt",
  "key28": "2BFogbUbZssVcb5coGoZFCMJGbVPsfmyYM5NNvvLGjRNXFTbxXgiTQAUCmm3DsMmWnkKU5pSVWrX2zBcok2m8e2N",
  "key29": "2B66KM29sFbfVTqj5sEiHisfbVx8pca5eag955BUgJqumnYTkjkVSzfsEonxckx6MWunUo1JZC4Y9x7RcbSoUwcj",
  "key30": "3KRJyxEKskmTs8eUp9Pn46E9pqbCvXYyuZAjBF76uk4j7eXjxrrZ41Jd8fpSZvCvvjeWzs78GfmDLtNG9iLrPhmB",
  "key31": "2BsHwdMmdaqMY92k43sD8R8cNhMmQ5F33GKkh6dFTPCbWMkdb7FQ398XNYKpNAes2hkUBFcaWGQD98zpyg1p9pj6",
  "key32": "3KaKnT47HXq63oVSRniB8jiNd7JVSu3srzDD1RJF4x8mp5siwBjb2HAjvEVf1vuR1SVSwA2aVjpVHy18adpFGi4r",
  "key33": "5wiKrjGZwwTxw7ozba2srrWKYdLpMMZkL7GG9bzPGZNcxxE7qScks7YjMepzcY2jXZSJffa14VGYBDKxna5qTLHS",
  "key34": "rc8ECgBuRnd4tNc33QzLFvXDKfYw814VTiRx7v8Zf3iQShzTsMLhCMagL3ioVruFTuBFA7WwR5AqzyfPwTsvqfQ",
  "key35": "FgVHoNWYoLxvtcsRVuTP23XThLidvw51ZH22rR93svqb9JMQ1evYYULZ8zMoGMbEi9wWUVL9NmgownPPxAihCs1",
  "key36": "3btrhrqmzcYCRrrJFxBTYwXmWvAchJ5LoPTQqRiMdULdJ7cq7YmdEfPz2Sf1iCu6j9GKZhhb3bqtnn5uHptNHYrC"
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
