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
    "3cLbvPyyZKuVbR4WhMYy4j1ko1yiJVZkNr3zKFYPUxHXmibYZNvAUYGzb9Ez5HhCk8CXMX4x723vELfTJ4xqv4iL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RoeZoaDmgnFa8PsQN912R96uZEYJq4QYo76ceZZa61Xe56FFWuCc3MerwqZrE8fnEVLj1dSMU416vQR3punzbRH",
  "key1": "3pTzW52JFVS4PfFZpUt1jBUwr7FYrRuoAPoDxzmQRoAMkEyeGb5LdtCc1WiiesSHQy9CGTFYXuXqQrZSqUH4EKvq",
  "key2": "2FTy2KRNhQpV622ujyhvqbsvckgUwNuQp5suNvbK7WWVGLcgAjLVZ4mGu1H43wQGN1kqsfgBCPyESRqCYPojFfrT",
  "key3": "5MHt1bBjH8QWL4aoULQtrBeJMyd9tLjq3ZEHDDHovDLTbrFxSsMKSDSFUneHRKLvmw6tu4rsUNFQnA672V3eAFyy",
  "key4": "5uwd74zyTcZVo4oBd21uXX2wL2p2zxqZ9yyrKerZbwFGBCe89qLsKLnjEJ6i4Yqrfg5RM4P1kgdQTRz2PfwEQFFe",
  "key5": "3M1Yft8eHwB44DirA82MNNH3gNvggneqGRBTkq5J3UPh91o46bKRuSoR9cUXULkKMTo9Yj6hnAEHTmJg9dbms9Yx",
  "key6": "4UdjJtNYYQCUVtE8SxtvCrhecea4fmbpdtketnZZCCgfvcRKidw4fvUcw2m9ayz5LDMaYhQ6jEZXRs69S4zqRebs",
  "key7": "JfW8dYzd3yx3JoU1DhxkiwYprFjhV9qWmfLCdU1RFKAzPynVCwGtPvsE3AXWZK22d1WWV6rfuMq52cAQFJqg6Hh",
  "key8": "3dTj8ZNY1KskEJyMmmNqejcTtwpkqUUwn5iG958FVa74junQ1rPXsuLwT4GQEF7Gq9GQxrXAgy2enAPyDQUqUAgz",
  "key9": "669MBfqi9WADQgxHh8DcdLUxCVco6DAgXk8hVv5ZgZ6KsVUX2cF32umNV5zKhDTw4VTM5QPdutHMHaBHxiV9CgRE",
  "key10": "a2kCpcStXYHUHwZ8Zu9fpbySg4S4jdScpBvXJnor21AnySXtYbFyiHakPmngPoxuQtXLXV5WMSujG4u6Ah4R8pz",
  "key11": "4qUoUfQFLo1iwKd2CWrYWMJduieYcqDg9aU35Baj9ieWmavUcjMq65WYPMPPyYjJA3xxiGa7uiB1UcRyL33GmE1N",
  "key12": "5QhFjddEz3JRhhdDAiuh8nXg1ziBGTfG4HQX35qv5VtkSra39pE8buF6DH3d69GErgm76m4WRvxWYzedpWobi1ks",
  "key13": "5rAye1PPjMKLV1eXf2MQAm94ngE49Sbg7qNENSerHFw85zCey68nAcstVwrTcfs9ym4iEsQaT6GzWvS3fs2dvCGh",
  "key14": "3DqQxH5BRRKooqGWQyzydos8YAcZbURU9uYB32Ur4AvVseu8BmAs2jQmAWyjiRL4GmjnQRimKx1Up6eLURZ9UM9",
  "key15": "5zc63tqJN461MD6dDurb2z6FPCtyuaM1Qv7S1JfiWmn44NWnFJLTrYANBkovLgtSnbFFSEPQAJ1Qs3ubsCLauXZE",
  "key16": "ignTdJwiHPin2NoKVUJZg93Eykf6vGoqwUoW4Y4kRAmCecCDPaQFeatzGQGD6BqggScuqK7mBxWkLoFhN2Zkiib",
  "key17": "4PhBWD6tgGVfVt1HZrxcXVRrGqEV9DfjxUrPkZ6FrCBFXVMXyCsSBsW9NqMPMU7fk9P66BevRRVqmLGZ5xaFNjfR",
  "key18": "5D4MyVZcXZ2HxiYpKqe7ALVkxrXHmu6QRV62RuQu2ZeU9RXBF8hVNMahewfDnVyoY3VM5juUZPfwLPE964HDLp3f",
  "key19": "3LpniQBUvr6oYn9bQnmb9aCsUiGumvmG3yyXwgXdTEaS8ALoMV268hJMnyzXLQPqqhy3en4EnsygehNKwJYEHrQ1",
  "key20": "5pmYpX5WNDbDyu4bJnYjMDxiKpJx286YudfDe963UUUBWtpXSHx9rnv4k9pqWoT5Rysb8vUBkuUG19zhvBfpPdpL",
  "key21": "3ovspQdUBDYVtnG4vqvywfkxqEzQxMH55ZAppJwtXfesLvddnZrFgDcLZcGKTqXGJFkfcHmczmZB68efYPGVM3Gd",
  "key22": "46q4KDenGt6cJjfVdGxZmXRVATEVktmm45FGX22iCQXWmCgzr1QAYPrR7vZv62bJGiTuUUHmfWUucnHZSHw9HvC4",
  "key23": "3i1SrM9yAaWjbfgirPv9YMqLPCANASUFxVbn4MjiqG8w7c2BUJDce2tQMhYDV5BMQnhGyeEB4jLvo7zEEU4J9UNE",
  "key24": "3K2drguXBexGN6mCnYMWebYYoRq4x5NYogUqgRAYMxe6BaDorizqf8vxQm6JWStgpKCASyK9M7jvRCqnQXYqjLNG",
  "key25": "2bBo4fnEfs4zBqkRpJZkHscBLqEPXYPkAB6NS2WULqe3AqTz9yzC8xkTPoDCGdHy6dsvcxuCrCC8YFs99nArP2pU",
  "key26": "3pPtGTPtMmhTneiyushjJDwwCk46wRzSAptQgx5xmqzWbTcbyBa5BsZhcux4vYDqfeJPEmq6uAGNX9FYxEtPKgHi",
  "key27": "61YT21zP6N4fyhGkuRFj4xkQ2V9ozKa1V479J5Q9TeeT7B2ALwvgAGh2vWinZoGXhfamF8SGVM8mQd8nghaZTRCc",
  "key28": "4ztY7HofYkkCtKduBKMaDEigwHyv4xbefEb9umim7Nn6YawMBfaoWSH2No7Lf1v3SEEds1qVPb8yGz4nXLF7wKsG",
  "key29": "6dku2fLdkcNjeiN7PvgZoBA8R4fW1dePvYt3qu1Jsmo3N9f7NpXxvikDBAiB4d1aCKWrkNvTAH9CqZkH1txP5Sb",
  "key30": "4F4o5pyr3mR9zo8Ehorqsw1BikcCjf9HhT714w4u3FjALLBVSuwVCoSqLd7E5eGA1HKjXYxhiDDrZzXK4Y72uHJx"
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
