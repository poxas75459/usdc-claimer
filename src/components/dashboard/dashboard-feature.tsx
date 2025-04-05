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
    "49G6DM4Lz8UZsRRSWuZX9wNubjESzCNhXmx3QGdpAn1Gcec8eUpoNy8v2xZ3Nva5oiPvLtoBNu7ddiVcaLddsmZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PTPbBnKtsDkfXPGoRCjv5cpkovgW52WrUtKQ724pPXsHjRDsqHPHZjXgJMP31bSJQt6FpGu31pGoqrb9zWbJgBw",
  "key1": "faFxNvXhWJii7JUY3KDiJAZfitb4YAk6nwamimaTiJVaG72W5e8d33uWv2rDzXgXNqQw8cKbUVKYw6HfB6dFchF",
  "key2": "5yCYzXVmMS45J8SmyNeKJ66TUEjRBKubKTAHLHdHY113wWRAT1fAru6yj8tPQkQkg7cqatDCP3s3QFuR3Xdy1bx9",
  "key3": "556vWmFH856p2KowY6b1KfveWm42Z1STetjyvPJoAv3RGty8iC6fQYydbUnTEZf56KBpJDupCtMkuayj3NgSxh7L",
  "key4": "jQeG6YCUDUBU7uMt3oJv6Uvw9M3XgNK2Z8qdgTc8mMpSApz5n2AmGTX1skCtXFgwKYDJLy8TsAk9qKWfwhNWuq3",
  "key5": "3Q5wzKuAPHJhDf3wPw2j6piqJ7nFmHiV4e5vt7GsHozHjGpP4LPteQqGySEy3yH6GE1gXDhyCE6pzKcwUCTwW9KB",
  "key6": "5EE6pvpTAGN8szTkJCxfCid7vdhXpSfcN8n5iKbUVeLzsy8o4W7y37Xpp1HbrTfhitaWMR6NLbr4BzV6HEeQPMQj",
  "key7": "3FhY7Kr8Qfyi3baavGXNbWg9pguEES9BRCXGiHhFqaT4bPMjpSopDYKjSj4txsnv9yRBdNJUGj13X2NMiL64Chn3",
  "key8": "31v18rnq9C9Dcktsr1ojAPJqmT2nR11y4TA2FJX6NPeeLG9FtQoQUz7eRdJuRXwfJMjShgo3fRhJVUMJvjSskMMW",
  "key9": "4xdMmZbWnQ5JJVgYziukNL3JTd8AWW6vot3y8Eiwsa23hjFEXJG3YZAprHc5MLzWPs5JV4CmMaCgVPWgazoivaNo",
  "key10": "65vGPbWd3wF97eR4da5WZngQtxCgDw5z1yZLr6YRBXW2PUi1Ru5ujmdPELLdPA5n4ri6dTXsxH7EPaSLaknTjVPa",
  "key11": "376BkDNhXoAscuFmp74fYSRqS8hhemxUrhSttEJMRyPFLTnEgexZnjrUTGambSEeYf2yyFrTQBbhTmwkZbX5F92j",
  "key12": "4JSz4zGJp5KKQF7dbN3pp46XqpbhdHRtyH1cprLn5k6ccfWGuLpiyZywabxVahoGU7bCEecwkXEWoPk55wow3Z9f",
  "key13": "4niY8VDTBeoHQhLS7upEXuCJp43cTuvYkNmA1UqHHnQtKMg7AoroA7yLThuHax3AJRgBwteBYMqNLdkVvrKDpMm3",
  "key14": "3mvvXWZwZ7i2YJo8nG3zeaFGhxTJ5wg8Ufb9mBKFvUvYSnY6ffoW2JLDmnD7vxNWV4QMtGRF715vQbH4FHCbpdqn",
  "key15": "5rJ6MqJthz8LSkwMv37WLuR1MDPZ41TRVp51pj2REy4sTGKoB7eCzQYGBoFDygrm4JnkwMGp1kaxFPEFEnaimCxh",
  "key16": "3qUucPG41jZrtLsFyED7bdFQQMXzGRnviTkZ4xRFRssQsWm5fBCycJmHwp4jFGhqK9s8UsbkYKYAUxkyXpAaEZfS",
  "key17": "5gzCf6GtkRpGYpn6tfNgMnhPVPqi3n62t7yMiVtmmZPrzu5cEN6npCchBVpkgs6z5NnKsgGDEze6n7quLWLUstth",
  "key18": "5fmAiY8ckti7EmhX9Qy9RZptVyDFwxTkzftUyJjGyLXDNLfgyeRCg8BrJaKzRdSuXiqruGwkpi4Ex9dwssKLM3Ex",
  "key19": "2MJtty4eREU5RTkyhwSBTssyuD2kdJbcKMKmVz64vEu5ZdbxkDDn2PobP5TMRBsM5e6669X9q7yQ3vtyUGyGVyBg",
  "key20": "3uSpS15N21AYaajKiKhwtHPTQcFtR1s2RhsUF1xZRA5wgAR57H9d2rsAFMp8rpQhGK8QoP3cxVzqC1XoYgurTYjy",
  "key21": "GVSWntyoB2r3Xb8j5HPJ9aqUTE8b34ATZ3Q5KSN5ef2qaRjY52dLB21dchiY22YPNa4gV74MxgpEvGxs2gY1KXQ",
  "key22": "3Nb7oRq1nasEnXrXaSAvhmQqjCjfXwvRQRH4P6jA2yYZdrCq4dhPEUdt93ViuUJQwjDE8NvnNpabCJyufiz9uJ74",
  "key23": "2wcT6UcGhjZwxXjf9dCuAYVJ5obR2wtH4YvN9W5V4Z5DRB93NtEo3n94hMRopF6kG3NrJVq1a2EiwMi7FbbPAShd",
  "key24": "3bcb6nGjAkUQNzW5z9U2yVCgamBj37NUS6Mm2k3CYtCvW5HMBBL8obeQfcjKo2X3p5Axv6WGwAgXUFAS2CXpEgbc",
  "key25": "5zfbg88MwRZa7AbmTrUp1pvM4PGtM5pt3cAdbUiNyg4UgmLMMnezRQ9hKaKQYwQNDA75BdKCUD9oAub51dJNRWdM",
  "key26": "3pG4etE8JheyQJAQRP1wYNrWFaVppUnUwysPCiYqVzxr8NxZH89dQRLjgxRYWyzgCLfdtrNdtYxjVxbZb7CZzQdC",
  "key27": "5Hxo98W9N4scnZj3va9tPHt2ruApG9CY9YwPnUvWZxbKu1v16rvNzEAkuT2ZXp3S1kNqWj6tzBQzgMhcDfMQp5YQ",
  "key28": "VeiN7ZV68NvYC26gKfC8xcX9Yt8GAupWz2WP1RQGdECY6PGp4jzau3jcypAwNCYoKY6ar42BsHxqq1GZWWJN9A5",
  "key29": "3H4eQEugnfN54VX27mmCLnAN8dxAi7G3HkM7ikuiwoVETuPUsGB4UEqqw6wCr5AM927wY6DpG4aqntARLtrhME3G",
  "key30": "5mWduSCeAS9CgjtBauimUmkdZr5R4cxFNfowBXRaJzWntrncYxzXjj7n5r5rhLVXNNQCAoLhP7Kt3adQtUbLqCMc"
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
