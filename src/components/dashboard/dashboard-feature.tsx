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
    "25eHs6a1c8U6QSiH96WzbqHzgqaMvB86yHP75uouqJEKuD3cuQV6k7RNW8eCedU8XDabSYcs5gFZamidYpRYJ6Ev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QFejbGsaZVmdesh772tsXXHseSpY22SgxhKPBB7SZMZzzx5wTTC1cZAGBBiNQHqWPwZK3oLYchPgs6E5PUNVYCQ",
  "key1": "4yLTLwceaiUzjcFoLa29YRXwkv35kCbumApVUm1ayamiU23KhaHnFHeyBwAKxZ24wiNSeXfxwCzzB2TTPcmsnRHb",
  "key2": "2ivfDpGUM1d9LfV6gJBY7U9fFNYinD32GnZ2xrhEbwT4QznHhGSveCjYfDNHCZ4keXiFeVuUpvaE7ozVREQJrnxi",
  "key3": "zbz1d6HBHmRhcGLVfVFD8fjCnVzotk3Y2Q9KgCH7ihizCYUNPhidKTKUZ5NzmvnGVMZzn4TjR1kwCNJWZ1zhqZs",
  "key4": "55tmQCEtEtUnZD8bxf4AesXQPkyVhY1JQbyh8f3Dus9xhRmn5ZrNTcridwD1tNXNyfchzBEp2RVSeTBD2ZjcbNGf",
  "key5": "zbGNPzF72chhT9AcamyLYsyXtyPUCcA8QVgm3NHu8J17PVHWA6i8q9sMmB4WZvYMHqengaivhC6reU2wSsAmUQa",
  "key6": "5yBVfW7PexmJwYfDFEuwZaBbzzzNYm3PvJUcYU7Y4X4fRgSXyrhnjmBJg1f3BdtzvjrR5zuRQmWBRQLSXS3tukUy",
  "key7": "4N46qAoWeoGU3M5v8MHwRDXHdJT5YyCiMamnixhjwLagAYHcKAXcZygg4c7uKc6YcZbacmNLycgNYx4kiYPwEHHk",
  "key8": "4pc1pSd2s1ZBgBkXNjHkpC5niSCaE3xUqV28SSxXHhv9p795EwkwCDtT5B2XfAoS8RCWv6bij88dD3LfFxd9Vj4g",
  "key9": "2u4Q8ALexzV2GjcYe7eFDJCWk8E2o2HyNDs6Qu9XLYjvQDwTaxqoHA8jV6rfmRPk5T9RTU52JD1ngJ1xGYEwQ8fT",
  "key10": "3BzzH2znReoCTTJtmSV3zwC85JbhTkD6KrhsGdQzV5fqTSyYvnqiwcHKn4RLsFJ2CamGSv6R1ftsKByRkhgNbiZZ",
  "key11": "48UJ9gh3utV4bcJ3N5qnzfGGYvoqzrZQTMvHHV6rVej2fLavwkjqNVQzhRC4DxLatXaA3bvS5zGGJCPVtKqFGdRy",
  "key12": "2rphBgoVqqq2Aj1dMYhs1L9zKbkBpr3wQ94GBai4UV4SGyQKsHto3LjuRFx8E5rdsrAhXkSTSz5Geq9aUwuozNjc",
  "key13": "4qozy9YEeXsPvLp1bAvjrYJxm27SYGM6zrmCs16h58SyCKMwC3JtGKnSuAUUNYgzvrsyQTykWBTR2UbbsDY9X4iw",
  "key14": "35qtmMKgxYe5bk3atXe5vgQNkURaCZrJeXNs1UcfK64ZqeaCzS9ALjnPS6QuGqWmwp3hmZM22qKay7Ff7CADxQXp",
  "key15": "2NfzTmZJPb7o8EVg8SNmqwBWoWNnSs32FwRiHZEj7vam1cojNfWntoZAKPufNzMthbo1yEMojJ76eT5rbiDWCwQd",
  "key16": "2hQ3yTRSqseQpBiXqdZDdWtBLXMnw8QE8mgbPLDoATfd3r2og6ADxCoHRPBrxzDiq4XppP72rwWcqTtpQ5gPzQsQ",
  "key17": "3XNci25DHEcmjG4FdzbjJwyWFmXsb3BVb3XSP28iAA2UVSUcRXpwYEum8kXj1Q3CwVavABQu3auFCLvTgKLMFtoS",
  "key18": "5jLe7i2usEdQxfdwwSMqFCYrYAaVgqB7WETgCwd5LqYxUs3wkRwxxgENauev9jVUmQToUmkq7tTAsmeEjdcr4xuc",
  "key19": "TR34QSQMGFkWoMG6tBdh472pug3R5GZJtidDn6hiZjdpXFoGzwgwVpKM9FQkdLikR1rh1JJL1gdYmKL8HDN184o",
  "key20": "3ZbaLMxv542uuqFgVLf8KhiPWEBzgREyTYqZzVufuNBHgz7oTQc5ZP7MVw6XU3fFhAm7boJJYzHCJysW11pYYEtE",
  "key21": "C5vJV96oznM7z159dikfiQXnuuUbrzNBpDT1cBK3rrcEKzoUrv7w5cnZy21SiHk2XwzDquwysMXKgGLS2CXkuxH",
  "key22": "hV4tGSQ5a4Do6jD7npEe4xKLHs5Vca1B5CGNVbqdgKSbVfsKp9EnoMLJbA8krwjSJ2Ni7NyAHNrf6mLY5QdYoJf",
  "key23": "5VUfXD2TXvP2VPYA63HzYAsJT7qQRwBGt9pVNCJ1Exg4feP4A3ENbpTqZypLa6wxEuQJfrX5vw2cDcpARTURDYdj",
  "key24": "1reRbWdjg7zQXWdJEaoT4RZ8ji3WkX6BdNUr2kgj9HxXNEKAwSicyUsbkSuJWcXig9VDBeyqNXgYgVMag1FCQXx",
  "key25": "2iij1bXAAtsfQAp8RofQSLopR2q4AsZmPNFGX8EbXyZqjMBZkU9db1kjobvVBBUR7s8Pn82PVEGFgvSZg3JpAMCh",
  "key26": "2sBZSsRVL2XnVQRyvEuV1uJPPkco5euzQmpiGUsQdNBSnp8aAYCudHV4z4Tccfu92YX3tEmxzPD4kbXxrijZuGUT",
  "key27": "4D4v7CEk8it6PC15i5rgWZfJt7JdPsqdTEyMFypT1Wj1rZovTXCTs3UXp7YU28SukYe55eASvvgPMvvEmAxQwenr",
  "key28": "5krvZtj7hNt3x1WirvSLMmLkFsEshPJL9TcBtr2dhtktp1XHs1qV2feryPBwugRiJDd63JpuaHHK4ruxtM8ktDVk"
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
