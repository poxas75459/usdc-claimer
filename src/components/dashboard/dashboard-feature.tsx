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
    "ktWE5JktF6SCQ4H8SzGL67i1ZnFnwS5Xc6BWQ8Ci1inZfDtATj8UZNjRim4Tyyumzqta2f1YT4G2tfjw7EKTzbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M8qsY6kyV96RWhMa3DL2cttpFk2a73RKwVtcJvdLHfokPKwMuHeLyvw7y87xg7c5EBjC7cuKhwkygLrMSwSaJ43",
  "key1": "QMDVbGRrHaub1AcQ3NLaHgz3cZQhc8dg9TcGs7mgDUyGrQyT4YWfi5RYQmD28DsViCpaSV3w1N9PF5GPdP7KxWw",
  "key2": "5Htuj2j27NF7j36QxPoRyDBKBy6zE4uothfr7vDQB782b2naLN9U2k3Fcgr8zDwbPS8rPdq9G9JCAwsPtp7VNdzU",
  "key3": "3TdFxRNHy8aR36PYs2Fe3uazAifWBF3AczwvjaqETvFrdKtJv9nXSMmPFif3Ufz1VPMr6MLE4c9whhGi6kNQL136",
  "key4": "3z3mXzJRbF9riXRmeH6Me4EACNQUQD79gL2bnGT9ar75rp9UCNvxAApGn81eubAwyyMWUQJKDcQKnhihoZkDsgrZ",
  "key5": "62v2sbagGwkPVRspgeivC9Fs7LqwdsomWgb5dg6zdM67Qs3WZDQ9errhwnAk3r61s3PcQ2JFSi67mamxfXKbYr16",
  "key6": "mP6TukHmGyjaKKUPC3kBgHnuDE5wu12VoE7ikw5ymQmHdooAdQiceAaBgHRG3W9b6bkBt9vgn3cUwY2oAMcXMTo",
  "key7": "2p7T519jBBsTaqDay8MH9ZAXWotzoREquRfJt6HdMT3WHWTRp9PqGfm4dZ1CY3LwD1NXwCDnimRKEeTkFk7H8Vec",
  "key8": "29nAwQM8b7mENYEatZVJDgeQbtNJjTaKTpitQgXtKWrU8P4fZWXycpo7tHUxfjgpfGcb4nBZ9VQo3bHDT87tMf6c",
  "key9": "VtKD9FjMaQkALFghPFzME1Nz3pajVHZiuHccg4Kik5tNnGk4tLB1A9AcacpBsGB5epXk5YHvAnCUVJVWzyRm6Jn",
  "key10": "2T2oZwZn65s2QYfRvGBhmHhhoNZVHJmBduT8MjdsUefKShQgiiVvuxLRo4qg7XDKAYyZCssV6buyz2jdVFgChyX9",
  "key11": "2zN8WzNib9couAFjYy4tQ3tu3z3vBkd6PEpBof3M5KfuZGoqMBK3D1bs56yR8XVz65ATtwwvctngJfoE1j3YABTE",
  "key12": "5JbGrrK9XKUKeUTnHqshRnjq1H7XzLLHcBq51khgQAMewYBtpasjW5Cn8CLQ8kWyw6Pw3qfuWaFQ6p5aoG7RhhK7",
  "key13": "2yPMoJuMYVVFNtwS1tEJpkYrF2GfvqFqEM9WMP6xjwnTR5mw3ewvPCr6ijGd1E5EvpUvD8bPk2xGHQZEN66c6DNK",
  "key14": "34CkCLU9mDWzCMRdanezRxETywRK6BcY96wA5CHQmqq8Ez18daCRAs4BYX7GR43j42f6u8Xu6tG8b9NaXQ1nYEiG",
  "key15": "41NKTXyarHxdFKYigss49974Kpv8ZgsztfP9ZfULzTQzNd4Gj8dFGX7fjzCYeL5GmAyG2Vi2ivDQ6zewgkF5ACwk",
  "key16": "obNfVck8r5zcc1qrn9D4PzkkTAGw4mWb1zCXKJ14JFqCW28yyW2WQfjj4mqrJc2WrREtJCPLwmwnS4gfXS7e18w",
  "key17": "4bNA3osW6kF2B8vgVcwBxDuC9KPR3UCJrFDg29fnT7dxbTpBX45rgT56XVfUMon2PWwRc26SRKWhj9UWs73wALtQ",
  "key18": "3X3DoPC8F9Fzg13UtQq3xukRPxEfuZaAvf4BqVKNQ1YxCzJbGXVB6bLJWAnFRfHXXVnjDF4EoCk1qga4RAqMrJzW",
  "key19": "5ZckxF3tfwK12NUdUduV63mPVhDusw5xCMKTjRfedz8NXCckV5poAvmm8DkQnSck23Vi66aBTGpe7z37vtDsHL81",
  "key20": "5KyhTVM851xTwDEUSbV5QUvmSy4bzmaE6L7xpWDZvMoeHPGGCTiLkC7W6Q4TuXc3s374kWkLaLyfdQv5azVvF19j",
  "key21": "5h7k7zm7u36k77vSqh4mme6F3Gzw2b4u8iHtQMp5TBZMicRAp8m8AXrfyGuTqpCxBMoUHsxVf97REdEAiuqznAEE",
  "key22": "3h8Wmiyxr6NZ6K5UD8trKaSuQyo6AuQjji5muYNkyAXsWpe4WbekSAP4FST6DwrCNmeizbgx6pkhTE3fn3YJfpbo",
  "key23": "qx5wTFuLKqG8MxVPpbg2VjsSAVRbhZeG5ZAqZ6NNtZFpHYJcPf8QmPs8v8iz3QJ4bcEqCAA5ZpTxatknqvoeQft",
  "key24": "5gkEzwMFzF5zP1sxCEGoVtdwzgQQLWZM63Seot4GxnaXEY95CcZcrjG5RBUduVddpBRHkQU6N8HxHvPCfUrZ5PN7",
  "key25": "2bd9RdP3fkejQqcCWgpChECTCLGmEUxWD7kxrWSNjWxGPHXUViWZH5UJe26TTy7YrHQYDqFQ2gGQr7W7DbhsLVuR",
  "key26": "4JZy4dKBKJtE5wQd5y61iNjnZXPXxTG2pGhGhghYA1F3btgQdWbntY7ax1ZVrJYK27v7DypEuSAobDcV2rWS2Vwn",
  "key27": "Kcmf3XWifxGfdUn8hmWeZsmUPcmJsuZJ5pHV5Gs3VKzgiKew88wA2viLF24mJWUyvDoisnPHcg2oFyaGUWDGGuH",
  "key28": "5Mhc1UP2HTBJWCxW6DJFusmwP2EUAjiMxYSZ7sV1K3bSbrHBHf3oJ1nv66BHEtijxWJxd7F9MqpKTjkNL1zfS1nm",
  "key29": "4xVopWWcJPrHKqxc2JVvHVUT43p8nDtxvUpE8zrjtNFLgHvjyVCn5Uk73TbEvdUZLTrYeY3X1fWbBm7cAvn5zZZ4",
  "key30": "31kcMVihGY9LuXXsaYCmeiNXviN4TKDvdQ5g3TAjWGFvHYp15BYNRt62HUeJ9Thk9UZ2uDoHRMrXVWdeYhYUj8Dk",
  "key31": "5oaLQ1YMeaQGgwgkpNBUwWPNuVaNBy4XkKoqXZ1QsX9mtB7NuDEd7jHDpagGvcRNLAXDtKmqUfDFdtePYxucwcLb"
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
