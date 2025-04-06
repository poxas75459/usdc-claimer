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
    "xajRcq3p1kXNnEAc6ibqTMNb1qSzCbwVHeTD9qCR3NCEmUW5TU7wiuEFzt8Q8iU6SGiv9d2x5KWntcFipoXirgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wW4Mkdigs5xqX8s9djd9izXyPR6ioy3vdXNXrf8AiQ91FBivAYxoYGAXpoo9waAER9QBUhpuApnkvrTU8d6i4sD",
  "key1": "2fCkkWeJbtmqPvNzSwVcZFgEr2wexHfX4JL8BnmLNqmUnkuyEYTE5bKHoBQQsmSrcbG68ednDFJfUQ3oVjCK52yP",
  "key2": "1kkwQgrKys9Cw3TRPYZXGQpAvmkrj7UVCK73yU185u6PsaeSt6KaytggXZUJjZahvM3jwKKPqZMmSn8C9Hh7Crm",
  "key3": "3GCAXzQVcmwepyzrmimHgQLScXSgkhqKdXd1EVJdtiyqZLpUNqPe5K34DA3KdF5Yib2skWUTkUTVofriAxJV5FNP",
  "key4": "5uqPm6X875EDCTDaNaBWXVmDfXdae48nR7rxrNE22eg3BAywPCtfpdBiYMMJ8Y4Y2GSQanh8s3rDLx2tn6qDVYKg",
  "key5": "2BfLXSXnq1wcvpXzHAfgg4U6KF6yz9VL7kwg4XVdRT4idWTkTTafKES3e7D3afVAYpjMbGfuhb44nxiBe89t9kYo",
  "key6": "2hwpdCY4Hd1Du5JoKHKJuw3cXC5982Q4EggYi7Kq6f4NoZjeoMnyJcvaS9bpUozRPzzsGzx2fwyK7TDsAzuS1SXW",
  "key7": "tQuYomMQF2YMnp3GeuokAzBmw3RNAgdJgApipuYKbt6wpDrRqq9iNaEjkLH9WvQGSfutwxdKySyTbKZCUrVQBzj",
  "key8": "2CaUrpTJQmPEjz2bsC8seWPrcaUVcKkRMUmhYY8MDPQeCRAsqGXD6hsQTAq9aSmRf4Lzoz26eShDqmqht14o6BA5",
  "key9": "4xu3PjXLhawR7kuYYqJdUDqhnSWiV9jxoA7Tk88FkxPEacYmQa8P2wgKftNxgH3rEN42bTzb8BZFej8xZ9Jk7aWu",
  "key10": "Jzd82RWKst2MwbDnSehgjV2YUspRWyd4KLQcNZQJdxwFm2j5FMqF44hNs4Y3LDhQdeBFKTq3Lr7q7o49TAb7jkX",
  "key11": "3V8vXZCP7DAk59GviXK6dkW5sEV3mVKGHVWX7UUXBjwuggpLwTE87iwApcG9w9xRqdaCJcJGEWqeoFvyxCL6Q4Vb",
  "key12": "PF8AeNdFJ8FDWfphpAzEWD6Vse24yuFLZ7QBPjAWAGfurg3yAAcP7koJNu1XffQJDt4vUbHmhGQn5H5sZDiVc3X",
  "key13": "h2Q7oGrL24Ypptt54TWfsY5iEDuVpuffxw1eDEV39BABDREt7DB867cf4E6FatpTLhFzYNjkf6z42zGQJHYhvjr",
  "key14": "3YAR91S8UugPbGhw63ZQ7T7MtE6rZkX5Ar6gqjWHF91uuqnE4SZLw2J5xkSu3RpwbjGo3dTsiRNHYmbVxhdFsczd",
  "key15": "i652Y37evXutUX1ScKwZTW5Zit7jaXxKhaz7bP7iLm4xsAHdtzVu3W97XAoAmGkTh6QGebAstChHopsi95Bwwyk",
  "key16": "2bUdXWifoeGmk5Sm2MmrM2B8ZLunGRiC7XtwpEpd5DdoAdAGQ7HrQMBUpas82UoGr26UBvN1XjjgLvmYWrfqxK9V",
  "key17": "2Tbiqc1zSQtB9grkPBy1x2sa3EzbK4jaiQG3Xz8afgup52m2tusTrFX4Ha5hQ3wLCzQbiRc5KX4NKRSXsoR3vH9F",
  "key18": "3kwPxP16GQPhQBrCG39GUxZGvsSYtYmrb8BXw1JcdUwpj6iSgdHCVd23o1mVwm31qN6pcdj6MA8iZfJHzuns4qPz",
  "key19": "26n3scQK83zEHGNacfP7NQwsoWjpPEYXPkUDLxjBgUq9CXcJDt2dpUUk6HpD8eGBj2jFVLKUUtdBJ4bc6sTjxhbD",
  "key20": "5n3yWMD8gqDRjvMCkbuNeBDonSRTrHsJ63KFLeZCi5EZAsX8Jk5SCmp9diLhocYP9xASR3bNoW6ZeVAPjXGXmEZm",
  "key21": "3MabE1ULWMmHvdW1FFpTYKguNPYZrM2YnV838dnuX1wREQzretoAFb8dbLtne26rQBRG3tfQww5ytLUTpTx7uDja",
  "key22": "3ahNgAEoCvimLtbG5CvJejGT9n9hXnX9dckgkUJaoyZ4hfyiyhXzE1Gu2G7VSs5XLgyBApWYGvi6zYqDt1uJnmYV",
  "key23": "57wje8pQoLa9FNy9RQuJ2yapJiyCPEZcCwYH6ajBFR8R4Rsm38hnGeywSu8PaySW6id5PeRzZBbBS8SHdZcopM5y",
  "key24": "PdjZW59a4EJ54LZFK2CeEtr62CQwhDvmttvFGFo1k3SzWHYXzrJfGq7NREFzREpPupRBUFWCf1AFzHQa1nXEr9n",
  "key25": "7HP2NPHzsSmfLzvvGCZErvmpZjLDTrHRg7DH1h3tJuYjBHhtLcpZoh35YfaYGRwzyzCyFdhM1mDNfkdLEuHFnp9",
  "key26": "4h1QUpv5ieuofkkPz7v4cjFTitZVjLPkqHVQppb9cngRa2BnbYS71vXiA52wKgzUTun8wgPEML79yrDv4Xrq7oEs",
  "key27": "VadEtg7pzX5ooSjG6Y4HzVMEGjXKWyEkqqzQEJvuaRtjaCS9bvjy4JCHNstfLqocGKGD6hRAPwvNGKtPsoA9jdu",
  "key28": "5KsRmkr5C8GLNxZGo3Y25DPHyf4K93oftzrPFFMZHsooPWknhveRS5DqDxdNprkyhQfgPE32XZUggugAaAJwWJfN",
  "key29": "2DhF86EniWHFnu98xoEBNrrrus3dE8DnWH9oQXpzfYekMxRB8D7Z57JPhhd8ppdFWJSPfBcrV95JR5Uo36JdVnGe",
  "key30": "2GqVtBXMRvCj8bQpGKd2WJWJ471Wj1Xo6DYZoe7t7vvN8CT6ELfS7siTfYBARQwKpVsnqxo9nTu7v3MxutSFvoVC",
  "key31": "5Hd6gmFUDDmmxQdUGq3oEAeayt567r9GXHWqWmXdn6TupmB4hc7cQzPLeGQj57tpGQioVphRGfJDofH8Y7jataiL",
  "key32": "3GfTjc4RDk5pyk6Ewi4rwRDBECZAYoqxk2ftcxY76xLa7J7LgKeuDFaj2UmofESat3oV7Kno3n8yJUtRv7DMc6oy",
  "key33": "7ZW6TFXLprXAqRpmVfxeju2GsxBfCP7pCjb25aiuZzscQ1qFvxZZocnvAkdsQJ2fyn3KdvmEMig2qTWPYmD1AiH",
  "key34": "8xpTjY9ZveLcGCLUijRiDW5WEDZvZbaWfmxV47Srdta8wGbguXqWUxDgByGJCb9u1gfiZ8kbDREarZzC6ep8pBS",
  "key35": "5W1m5hPE4KhHDp1B9ZTsPWi5SugXrq6xCy7ufWTJQyLTTk1QTKmnparmyHDNs57mEfe5VFTbpYCHXBnwcUp8PCN9"
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
