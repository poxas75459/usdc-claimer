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
    "RqN9vAVJLDZkZZLzacFSuCZ4oc5XCYUJFDMkke6AXiavEaCtLiUFQdRBxCnKxYRfYkeL2FYp17t7qWiwZC9wBgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e2SssLD7TxsRbabvCUCCe9xTSXs6tJokHsAz2U7mQW2EhCekHT1tzdybaB7M7aDtkHoAxn3TRBYR5XqzoeyWQYT",
  "key1": "JikhbiXNQ4XFWSy9GmkAVZCBJ8R7sdEqHuCo56jpA9U5uxsJqM7vJQUqoLdfLquN3Aq3bqbL5svJKsBnaFEMPJ2",
  "key2": "3wfzepMbpAJVfvkA2j93YFUUyjn92XVWc7TG5QQNZDqQFzprhipaKPoaFvVBd6LyTSSqVRQdUUXuVgDVGqfkvUxv",
  "key3": "3YytLs2TWoj3GoRtbpcbTzJHisaEYuhfEXeGGGvDsjXHfsXggsJDQXG3Qem7H9YKfDiFU7kqLsEpJwF6TUx5S4oK",
  "key4": "613zJ4Xk2gXumKypB3QDNCcx5dbbC7sgjv6EK6SRWLmL1mvc64SVj7qCY6kRB21uF4u15q9wZ8BxVB4kF4u5ebVp",
  "key5": "2FW9CfQhaPHmg29zDycrhbc7y3xWRPdi6R14gv8zY8S4XsSq9pqSehL2JhoR4QenGotFsQjyJzw3EvtYxfaVB8tN",
  "key6": "wYFHeEC9sBfBDvSGXbJbnFCuDGyd8iB8M7QkVqeRk99UaSaPNBMY1YJdsTCVDStSCkimYCD1cos3hEUrgk6jqXw",
  "key7": "4UHoXRSsRcLqxEo51mszMKtMuvz6DxrVjvfZ3Rq8YosHgJbuuniBT6g5ES6GFgGqw4CAo4KoHXTnT4dLDKWjfUVb",
  "key8": "3XUBYvT71Vs9DzapK7L8TfXgsTEDHNNVxXTCgVwSet1H8SHzg41JBpR165h31rJmyWVmAXffJ4K8bjA2iCtHYoEr",
  "key9": "594SiqCZNnVjfr6WxAhRwFZCNMVqbMaBruXyfnyBNkDt3o3YGTwDKNjL8NPk6ugcQU8wunzgh51KNWoaJJrx4DnL",
  "key10": "2wAzDdb8jhya1mXJT4mhuPreMbS8efZ1gSrmTeNobHdhTdrZ5ExoUxyxqXvVtyzDHcJsoQ7wpC3RaZMDtaSG9EKt",
  "key11": "2aJUU8rLWrDTPTGey4ZQ7m9xLhRrZNEX7AsnBNhqLktoR9isfGhGPGmbrnJtGp2fYqj8K25irTgW7qmXBgow1vux",
  "key12": "3BmeA2vmcubkKFxdJCUMTzy6ZgpofZe3oReb1S16KUuqVsDW34FPkRvdw83ihQGebwu4vYGRn5pk4YA2DAajQHft",
  "key13": "VvoBr9N7PXoatPovWKZvnDNssqjkgtLAm2BB8U5BcWfbd8wjrY7mK49j5GbKY9xMiyiMxzW2UkA19uxbYjRYohP",
  "key14": "33wpth44wcfFpWhwLH3Vm8i8drx2hh5nCqe43fXsm2uCkYj9wirne8FNSg7MDZXYjHVQ2qT8mBurV8Fke9bQPLiT",
  "key15": "3mtzHHTqqtJ62U5yknCgbvdjQNWeHjY9yaVPiiq8XA1KJuvfhcnN466HugyRpj7Qg1KNHTGKvh8rpSEhd39TVZJP",
  "key16": "5ZyNqKJg9NMtgS2RsByPamiwF6a7Z6ymykWiqDs94ooiwji2b1NAUNEAgdaHEuQT8211k6j8oF5dwbLyJRZ4h5c9",
  "key17": "3Bmfqpq9v1pDXWhmJVzHicdQYf32T6XuzNY5URyHQWMsfPovVHTqQThceD1CUmKaYTD9inNwHwrwC2BALDvGbD6H",
  "key18": "vF6c724ovZWN1W8qQSVh8dFw3n6TqVeKvFvt6Y76bRUXeqquzWV2xC1yjfWpjPoh9WqF1xtouQiyknSM7uaJQvj",
  "key19": "5ATUiVEDPzZP45jeHmjurNEUgr7NZQvtZMFmfcFtScaXLa9eDtvWiFj54CKN1LqFcuLrJQ2zLoRW43vFyeY9yZGE",
  "key20": "2eJQg8wmwDSLwfFGfuD2nbTFCe6sBUN8SAAX9X1V8ExbcEZZsoXhJ9CiPUTqJghycnUsrJ4gH5HePoY9hidfJXos",
  "key21": "2j9N4UKKpk1ML5K4kU5h2BxNhZFG4j5DwZAG9V1QJXqAq7LUoFEihajyWZwmFdavznKbdayiWMJJ7j5idgTT29YY",
  "key22": "3iRJ9tdP6fHBVKtoqubyQCjc6rHtRVcHYPcLrLwrdw5NQSSPVzBcCF4M9p1QoPud6TZ3v6Q9QB2v3osDfxtAfWMg",
  "key23": "5teTPaUeErQKpddF7XEbHN8rYKLvCyWCYd22Txta9QGrYeW5Dq596d5ni7N81YToMdvSRR3Nhy45PHWcGLmxcHz4",
  "key24": "2gZhh3ZtXhRUajuXZz8Gzx94KK1uFJEAHWkX5WnAsmLwPuPoHWQbsgfPNoFn5b77qATnRUFwpXLYbU151ZfpnkWj",
  "key25": "3NQ79QMmHW3STz7k1i4HHUQX69FxLZbHEsRoCWB9F7hoQTmgCJvjUR3ZufuJqxdC8Kr696cNGyAY1NhFXfLmacA6",
  "key26": "f1xRUNzSYNfHJsHeyndAcgwubS7bo5oJwQYLqbykhZYnMdKHPUAWZj8Gc8d1i4ZeTGKVJMBKTRn2CRB7MEZ7CBS",
  "key27": "2cHEXswWT1RMRZ9K5gGm8uUztT3wdJWMipjQ614R2TZXi3V8SJAQMNhYJX5BoNyqNw1pSFLcPk71foiRC1dHUfvT",
  "key28": "pwVMWFdbtVoC3p2PUciSzz8XijKu5eYTpFGfpqgq2ZyXLHK3TjYUXzcBKxd9nKeo37Dr21FNycK5uQvNLuPap2g",
  "key29": "24uVw6iaK2KXtEZVLsQez7aFaMF6Pr5kZ7vdVwCjvaEjUNsfRP6Tx8sCGgfoht1q2d3bCBE86htYNGDLQfbniGVd",
  "key30": "3yH2dZQK1V1LNKgtcj95ysSgauDuaLd285Hd8xstSEDe5KDaCk63j1uPE6aiZCcWGoe3RwfivDUYb4vTdh8zP4R9",
  "key31": "21M8SWK7yVDkTtum6AF6dY7jtWKH9eectJtaBwqqHVWjkRjvFm4tNvYTyxS6Uo9pWJyWBmA37NqhvmY7wMYpT6s4",
  "key32": "5mNy2MJx49HBVifVVmJ5BxuSC5tifpUapESThT9i88vBz97pVn8YJmiYtakaDDJkXzrAerNjeESc6idDaDVGCzpf",
  "key33": "44oxPb3Mp1kTteWwywfxWnS2uNG92kPmRtAWzzWsMxuBrtPqoVVQrykDwuWpcbcuPe8gYDxLJW8mKkdhrSxzoeot",
  "key34": "5PtF5GDCAdR9a5FHa1Va6HFy36SepeHMbhVqCK7JbNaTAmvjt86oATtqijYoR6vKV7gpnExPWk7gctwhkUyytkoX"
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
