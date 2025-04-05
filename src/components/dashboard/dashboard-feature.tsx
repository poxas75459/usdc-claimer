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
    "5wczicGYCDn1PyjqbPQK9RRhUfGGc3v7tQgt6WnNGCuSLR4wpWio82mYu7Gdv8nTggWEJ1xBcVy5UHECV1v4Ydth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1oKeCC4MktECQvQk2h1mF5cAJ9T7QfrXymJRvfR79CS5PNiF6E79W1hhUX8cSTHe7QFXvuZsKUt2FvCGoD6CER7",
  "key1": "4pyQ6WSA7XEK2mgrVExsX2jZDRe3rDhcePJqD2cFC6DYaSweAxxQoB44uxLhj9ccJG6zQhe92tut8KBWJ1AQq4cH",
  "key2": "4tk75Ctt762pcA4TUTYTR8QR7P9vW7rQRCyK1xFo2Q8ywvrcmJAf9sR2ASdgTRcexFDkQnxd3X7VL9m8Qs4VjjUv",
  "key3": "3vJeLawmCiFuuWvD9iTuCtifsnaj1Qfmg14RQgdwUPp21YGdjXLGHm3xs2LNy7j36opLzVLVabRQaYD9ujbTVUMb",
  "key4": "MtYmnYLx1yEtxGLJVtw8bmcMmqjDj9b34cCnvZYnJABmWFu8Q82rRxpfdgdw9oawmndBdtLkK9oKqsZKcR6xT83",
  "key5": "QdWgwggooberW9UPHX88sRfvrbACEV8T5ugHNfDD3YNw82iHaPLLwt2EqSQuRqm86wA7qHmke5Lj66P4BD34YvL",
  "key6": "4K5hgE5pWrEB13chVTRsPvLhKk5jPMDsPvLVaNHt21KDQSSwo54shRHiQCWGhDQQa9kWNSrsYjQxPZHLss4cFRLP",
  "key7": "4JxbgodZFBy7y8CgRzecxTXbM9B1ezaA15ZFdBAWYKWCb9qCXXWKxiFUXdDVZK3gPwieBuFVDgKWw5vfjMbMA53V",
  "key8": "638k7kqGaUyDWJrHWGNRLvBXEvJAASCzgjmi8ThzjrKKFfG58GLG39Qd2HBDppYnECJDKMXxMBSrMmFt34AL4hYQ",
  "key9": "3ekJuW3fFbJW7Epz4Sau3Hsdiz3FkqL5fDuk8dFieJc5gFoZHfR52tF9MjXxuwANDVDd2zJYKjCjCtKVt4zMiCSJ",
  "key10": "3fZEu5q5aXev46V5av1asLWPY6Ms642Nr1xAjQmSv4WuYfdcpwR7ySz2a8bMRBSF7J7eeLKrGc6F7s9abnENQH3T",
  "key11": "4ETpRwCnNfKcApyUsVFfwktdqLWpsDgHB3QAdi2u9f4fT3STXqbWYiThCSeVGZnZWap9kgUu7paaaJ1D4jmCGq42",
  "key12": "4WjrWMpybrEeWTkJZNtXrjscGnfdLrnu98GvrQ2DLUyZHa7QJB1Wt1gtNfPY81uyTKXTXH6kwAMiH1NFj81tgiNT",
  "key13": "Qncod6FerooQDkCCwC9mmwKyYnH2nUVjMLn5n2ydZLejqdW8jquh76mXG8xNJHeacPJggBg9ktjoKP9Ni1tVcA6",
  "key14": "2r728cNoedcYRmzJTP7WYyfzdKW7CCofE4ZdyLAB25CwGdVuwXbw5ZnjnkdcuUiZeCbFXnVNvU7t7AdM3s9M3XDb",
  "key15": "2aRdkPxBBLJpfVbMgQ6F2Cz22CA8B5VKcMig7JMkTNa17NtjmmWMJ2aLzCHmKJZD7Ncp2DCL5UgeM3b5XDwSskKC",
  "key16": "nQX23ZgxpwfAvTriWGm5RqFqZ7VYSvy3pySBxNVHxRsfceSMxJHk4X1RX7QUoG3vaMWSzJYMX2drxP8rJ1E6HeD",
  "key17": "x9XAf5kmZyJtBfQk7KChTUuevip5UkTZLVeDitZf3bbNfWDjMMzbt8dTQXRr4DiJM4TiHSgnzNvV5hko29Gf7Fb",
  "key18": "3h2XCmzKsoaFipHtiBnhxaS4poUciWtaq7UopuKJTsjLn9MNicGY1kxXvxSeJWzQr5fYd6PayFiyPS3TjotXdrsP",
  "key19": "2irt1F7HbgWrDygCPWksiSbasg1tLpmuEC1XDRZX5gqLn691nLKHQktAfXx2VEM8PdWVnFSprGjV6sfy4KpyCbMU",
  "key20": "3H8Rb4GK7h6W9Phwwd5drADxzC6rAqxE8sHg6k4HDFsFyz1iBA8mdfYabYdRNrVmdUHGfvPvcxAWG5MFkgA6NGih",
  "key21": "4k946j1V4SRxR6GPLMSBaS8Sf7tVCWDyyCHPrW9Jt8wQcUxx3CEu2UVSgi34FFnnyQVzi1aGpKJt1QG7GDDWYWHz",
  "key22": "nNwiJtRzfuYb1CbfogtXW6udqNtZ6mpFhyjES3mmUPv8CNjRbWhWXqGAqxhHVN9JuZ85QPDHZK7gUcAzrXjyyTC",
  "key23": "24kWepg9Su8G28J4ApXJmxPk8dVcd5KYcfGKrgf6ug4PQCvKibmMjeSiL2G6Bz9C6nRdMfmqQs3ZjqjcNobVTfcn",
  "key24": "3Uxs1fAaCSSbx9beURKZyZYiogmpSrNSRFL9rssh4xe7akV3pBhWhqo3o7fkmRd2snqYVRAjaXEJ7MoU25KQ2Waj",
  "key25": "4TRQpm5AMmfPjVA4iB317QGSQFtoyqsHSb36a5Rx5RGByhT5yQR3ux5gb4jbYiAT1NgMNKhuaLCdVgjb7acHFNLc",
  "key26": "yzRTRYiELjK6mHwpkak1XYAQYqqoehpWg6DcFuzCtvQiEVr5hrKQXBvtcYxaMSoqnSpSes7mYvEpjeHS1vJqg7s",
  "key27": "3Y7vPXak11sJPkbg6wkPtWNXYYKCSZjM1ghwkrT5C9oASVMkDe2bw7Gz63mu6hnfqaqXb8bToZZSiM6w7gZ8ZA2S",
  "key28": "3QuwF2vW5E6XVQ5xYStRKUtpz7sb3H9jX4rhuMykk8zzAuB1qrV7pbmhpC6G4JEdxkbec3javUrZCVqbxTMbjz4t"
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
