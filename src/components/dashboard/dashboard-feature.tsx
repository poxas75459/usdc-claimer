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
    "2ycmbFdBLCuTUiEJuBk6N3X5CBW9MCMubpGz9rdV6adBZja2osGcenywddhUFk3WmYQF41jCHMsHmxzuJzW9JjZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43DTPL9ZrcEUomN9satF5PPtHtxJBi9oGvyhWAu5hKGZ1Y7rV6r3EBwL8oaVXo5Cev75ranneZJPUqTek3M5QPeQ",
  "key1": "21P5B9S1T7web8RbJfVgKdoHBDoo5FZ6nwsBpcryLfaUsfQeZ6tTGSyWKzRfaE2y2C9jYDTGkwg3Nnqb5VS9kZoi",
  "key2": "2g5HyWgaSaX4V4x2wXLR1SrnSAyZWQzKfQD8oayt2j1NoCUv3F3HiyskAfAmrDsMmy5eUW1d2FMGn1KtDxHkwVXR",
  "key3": "3mmeJySwpmjg4PDEBiu5HUbrBLM677WCzzZQpnsJrYrRw7hLSZ5wjmXAZZkqULwVBzvybAHgayxBWtqtgiqV86hz",
  "key4": "376SXBCMFMPDHWXPRp2R6vPuHPv4seZrSbuj9d4xXQkX5YWGBm9ZVavBErmGYJSQNnRB4PLpidC34F51t75N5eSL",
  "key5": "2Zr7jFJhiCwdY9uAtPDwoMpGXnxbQCTRnW4ZxteRHAxe2qNtyL4EpA4vUHoTAYYxSu2SwJNyyd6h7wGfYCEFWVe9",
  "key6": "4viaKFGCcJQ2TztnJ74CvY7vqqJii8eewiHzUguNomJQGJhusFTGEWQFchcXWHXx78QEGBL6CYGTsx4PWat5QvXh",
  "key7": "5RgnH6FnGCNnXKy6aqomBtUaVtNXMz7MK6vpXrpeytRYVJMW8abTUBLtXB44Zruj5oi2ky3cP6YsU7VXWvubEAzq",
  "key8": "3V6k1q1Cq5QsyXKnNouaYQwnWfsJ6T31sthgDMJuMCuPisLgHDutry36TPWgmD8ctajN1xXLdQeGC7GvReNP8Q5y",
  "key9": "5zXERXmqXxizKthn6d1uteZiHPGGSrdXAjcd5Psy4Cs6UuKrtJLjmCnZABiaamvXnd1neVPRJMsRZjc2psaeZ5oE",
  "key10": "5rEfphhZ5SmyWnGb4STZq3wA3H7z4z4JvoaxXQu8Wiyz181eUvXW9uzDGT8QCsyAAQH5cst3rUEvKo8wcii1Y1WQ",
  "key11": "5kPriGY4zTAkwD66JmrgvhDDT6zG2NBNkxaucUAbfioLcHhTjwRL7vovH1qqZPNa5E9ihm1c6Be5DFsLTSYY9MCV",
  "key12": "4VUJDT4A4oaeZPeDmUBdGTADePqzMoaAGfP7MyvjHSxsbaRoGa13yi3Zhnv3YwYbeEkTwKo8c6Y5ChbA9h4vvVg4",
  "key13": "2x9aqsUTGTrndy1SNCfjPg2ogUVCLY7si5NYPwgpSqA3bxvfGreFUDog1Q1Pas229xGrvLgiTAkJ8xWNC7fzP3oE",
  "key14": "3QvaGgtaxD34TaYszoqEnosJwN7e7qgjvs8L4yvhWaBxJ3hjvJ2WPxcBvgcyBY71KMU5Su7o9T27Py42BUep27er",
  "key15": "55bQGNuPfK2q9H5jkVAcCRLuWkqiTgjnudwkQ8UixmGsx4PpnCRQYFiFvi91ABu1wX5c29f4YhfDmvq8PnNRMoHr",
  "key16": "fkYJvJMbb3wXeBt16w7LwhM7fvaTPw7Bus2C9hHFhxTCoeq4x31ppwMRUKkHznLAzKR5AAktsjyKjBiC7HLWf7G",
  "key17": "3kazbFHRV23o4TQ7zXfjzXCS11F4eNqVYJwwcvUjrQA6kQCRWfgQcfPVKM11tv14CRy9imUhXFTCRrwmX4KeqGg",
  "key18": "4pPHE56qQhkAQAnsxi6Xm6Z2PkNQxgG6ouKBEwx8nf7g4fgi3ZiQcFPZVw6Rbmo2bbtfnDszVTVTWihpQbdUF2q",
  "key19": "1GQyFQjVqiSE16FJ3GtU7XhyKW3d6Hc4x9dLSEZwMW6bcov4paM6gRFTytacjkzo8fJHpTW3BcNqmyTUwBzctpo",
  "key20": "5TBGWW84gVjNhmKEgM7N9PnXFjT2VJ6nHsFrmMEdNmM2ucKSws4s3qqZnqaEKZxCHAMDxoA2JaPKAszqS1U7R1V9",
  "key21": "3hPFRh8pQN34dw1jpf7wXFG47KXUBbU6PQC7QmdaGQB28Vzwpm74Vrdvwwinzu2BfqYj2dcPHUCN4RwnoDFqjZHt",
  "key22": "2WwDZkji16fTL6bCtT9UWJP4qtSuuRMBkAXQ31yXfZES2PdsbFxmX55PoqvnmDV5bF7gmHeg88TCfnntM8dkgg6h",
  "key23": "37Q4WzHJc7mJTDUtrc2aisL2J1yeCprzuoZwFcTNFHXRbW2rMrBVr6yVV8dUK7y9uCGGFdWKUtCs9YobBDZ7wMDZ",
  "key24": "4YibW1UAbjktGqFTgePKD7qDP9vQfKNaCwyFC6joSn59WUQeaswpXH39kCqaPrRdcjWJfEBcBHevUdXrQqW53bk3",
  "key25": "36U2HR5hYkfUeZJFcZzf57HszG5iw9uLXPcbhHMYUiq5TeuykvLcWzRfk69fFGnjLiHCThGfTSB9z5YB8YNb8ehb",
  "key26": "5nRqidDAU4UYJp5nYT6kEmf6iBD74h86idcWMVkoDes7uxt5VVELhz55NXC8kdkVHSE3hh3Q7QkBx3NABjqzNLX2",
  "key27": "3orrjbCNHHCBJAT4utgmfrV9W3sFeE4JpkHqj3UZJmKBvxfCADuwLaQjdu3BVco7FJ7CL238pTxT737bK3YNPAX6",
  "key28": "4DMKck3HXqpXK3kXKx3UKPTP1RqRU23CXBMVK2ecBf5snDFboaj4CgzQh3zJ6rnjcbYBizpuHoz39CBDAXDrXPdw"
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
