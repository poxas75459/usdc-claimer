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
    "4bSBBtbvHYpTyn7xow9j9sP59NzdwPwxVSqmPzsAQADN4QZrjwU9jPJ9dPogzjwpz7H3NHYAENWMgmXjtwx1fxbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WiT2xa6AAYkET4nync6PAuDWNckDRx42s3HAW6RyZ4FKWujDAdGyGfKpKk7REsshYMEKETWSu7ApiKg1yUaoUDh",
  "key1": "3FP3ymQh4C124BpAb4Soa65BKfyiwHYHsh96DC9Dc5w4UC7S3jzQe2a9SciefPff1jrruronGcX2Bs8MVmVE9MdY",
  "key2": "2wJ7tpDM7rsztsPNsqbNqyhQ2xRhj3U7qmJKr8Adsdj2cB6Qsbb5DTdr75DwGbuTyn3f8ycPRHb7s6a2P4LGnTWN",
  "key3": "3koY6BA8mYCYGPpqcABJAnLuhUKVNBfBjKy2Qf1efyYFte72EtsnGaM2UxpqFGDRS4FSwKNuafUyxTEtRW4KS6iP",
  "key4": "4C1bi1QL87tXZNwc6k71wpBPL65iTiM8xFJeCY9RVrrpVYEJx454N8TjY3XiYP1LaN6HLvrxasLNkgaAQQgxRRBQ",
  "key5": "5aYeBZ8UsYkY8RUFi7kv1nzU4oj4K58Jy3ASNq5hVQFyLE1NfmFd1ubmAhuh68R6whofJaHjj7FAtB6TQnGRBCQ4",
  "key6": "2xnH1xBHA2LqW2kPdRJVEizhdgvEEfQ87XobCpR7vk6aozNLa2QuQdmqaHb83PMGWK9UVAG48DK47iAhL3eSuUmL",
  "key7": "dcFpqeDc8od6Aq3pSyRfkSaUHD5Ur4EhGErdWt26AQCc4MaGX7CQYNp25FsC7gqhyHbXfsqgVuNKQ3qiJNzLKkg",
  "key8": "3T364ev5Kw1zbSJZpuCwf52QzqkdaU1hZW6C88zT9mSZPtrjBdiNubjmJYbhf6w5V9tf2KNKNYJAAgNRtGK24No4",
  "key9": "2UeTEUR55riEAGDEiEPuQwra6ismNGtrjnuW3BMygg9EvUm7hr6pacYaPVTsijKynyR8LiRgNyHD9DjErkDDbQ59",
  "key10": "5HALHVkcCgA9epUgf7SisHM5TaMMVLpXjtxNK4M4U9k4sxicz7yLZAY7bXrSzzBD5tD2f8ERF4ZtFrYpn4mFtMk2",
  "key11": "Gup3BtfuJmA6SY56d2h8oocWovz2G7GhXi6EzGJsTR9ZMrMrj3co7KHtv38gLqdBjEdbmWTUsgGzyaQGpqaBYMY",
  "key12": "4zDLxZEXUXRuuuUYqig9gFZRmXKng62QaLR2pvvrM1XPBNtFcVAhsyRy3ku5HZ6gUkcpJdKzMogcrvXafCS9LJdr",
  "key13": "2tcZpeyRDcVgiTTdQx8mn5J6gfGvorGBLrkBoEDeDxAMdaPsPVEFq6tCzVJGB9N4eXzVc65n6DjH5txvigs7hU7X",
  "key14": "5SQqL23moZ2MGJQ6JCU9dGbZmbAWrTdcgK4LwgrDDTz5EUKzApUiRtudbUyNkuDE5V2La1Lzmd89LH7hqwW5pqx4",
  "key15": "4WcafheLGwtG21fZaGf4Qxe4jpeJ1QeP45jC5gHWNUSjsGf9hGQex6BC7XX9qjaNzRvtkpnY8qskbY3Qqjp1PZBh",
  "key16": "25tTQoCzzJso8mS2ctPquRgMe9LRs67oFhNGWhqaKwGRdwbntaF8KsGwejhJj7SZw71RmDPZrh2HJ553xwccLLa4",
  "key17": "23hNWtV5YxZTuExQXqbMdcV7p7UF1VFteH8nhe9YrqAU1ZvAHzc9z7KfBDsjf7Mzq3489NeZzE9QBoax93BBCdPr",
  "key18": "2fAYhTK7ZYNYG1pvLj39uxmsNeZX4EgcvHsuN5i3GrVMi7SQYmGdruLunfJCCSK9369aiNXs6fU4mHskphc9ZbFd",
  "key19": "EudbWqTm3MECHXabF3d2A2kHyjJhoiVzPVYaHbu4vHrLYsx5TnheJff2xU8o4mzAKtFadPxXpPrkiAeBpdU7kx4",
  "key20": "5u1aGYJtZ8wuT6ecq2oZwuFKmxPhutDD6oXDuYyEx3Gaxm1JFBsvMUc3hajQSCjqhzSGVmBYRGpoAYke3B88bYbg",
  "key21": "4xaPUy7uSG1RdeuHvvwtriKFc7QPaeX8CKnUaJnfP4YoSudoNEBi44Nr3GXhpchW1h8vvWkQqr9pbsSxfuwczYEk",
  "key22": "5FAqqYHDWRMhRhBdhJC8ycyG8VhgNKEHkV8X1nWjPK8sj5MsR4mPDhBxzbVVBpiFAJQpdCF45ZeEDmqKXxiW62t4",
  "key23": "5tvBP1pdf8kkfVrMy3oeYxXSy5PqhaUCMHY4jsntdLivHYiZ4hW6rn1nyymhWfosfH7gZ8wPmRin7xt6ovTmzgNP",
  "key24": "35h1P5xtRAkRsQuDM9eWtKdJ435Bz9oX4UsRbhhLDjMebeQ1KjSNFM4zsqJyQ7PDjrmPaCDe4r3EiTHHVdpkB36J",
  "key25": "5FuuF2Nqi7Dv2ypy5vrp5nGaQBVSaAerULhTZYgJfyPdoJiqGzfXF7nhmufCCcKhJ1NwRVS2xyvgFTFxmquvdwj3",
  "key26": "5NVMdWa2C7FHSPmtB5BnEfHrXoLsp3ZZRhoeUHdGrrPNRkZKCJCmrfeyAPfR4wBfbuiyaUZCj8Z3NVJ4NsdCy8uo"
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
