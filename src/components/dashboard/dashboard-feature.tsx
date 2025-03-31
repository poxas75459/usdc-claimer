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
    "3vAhQ3gvJ4eATM1uyKocUC9ea1Za54NmXUAK7L1paAWkjFDMBMAyMnrEvpcRQPJo5tGx44dymd8Pa35Z9HpC8deH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G72c3Y8Amt3EjW6H1wiJTmo62PYgQeWDqnoSbT5gPYR2EMyH135sjGXtDbuntUCcmhDUedLtSLfzHHZNUrvi17y",
  "key1": "2JhMKfoKXCffFS5HFacFLrMCFv5ik8HdwuU27wKWYoTr6UiiQbrrpwzpMy1VRv3TEJruXsxQbK8acTvgZaXDs9kS",
  "key2": "3iYumgPwQhe97cRc7aE3S19AYuSFza5UeXT5aMuArR1ZoHJxMZfTdLUfwpXVT4D9NMEwEdNPCTVpd5grnHSBMAgZ",
  "key3": "3bmfGLpF25SsypVpD8Bk6rT3cUasrgEP3wKxPSFhoykzg2WDVSGyT5armpUNbYv5PQxxPxFu8zawXgiiJDbZKzwm",
  "key4": "3V4P8q74eksDb7D2QQo7hNEF33GomQfYJhrXqWtS1JnAJfkLjpRGNoG32u2rBgGYVpuTV8i18cyRJanKBNLrLKrH",
  "key5": "2vymwKUnagdLEMyPShcvtPXbTgzKVKqK2txMBriJURQus2FW1t1fCDBH9266nUVeEQcRsBtx9Xy8BB2bKg5smvic",
  "key6": "2NnfsgzsHARpEmRbjBw76Sey2aSr5s8REpFoxSfFnEjLUsLYAhpMwYYq9EUjznAnoSBaNtxzgzLY2Aaw1NbA3vyi",
  "key7": "2b3hum4378GaeFXneQ7P2FGkHpTonTTfEBe5Ytzx3PyJ4uUdLHtEb4zeAkix8dnVMt9q9FJEKrt2tGJLbzuCETFC",
  "key8": "3GrEt5Bs26H2BwDAJ6X1PQjGYMXzeGHsDCWayKqtW32cfiPQFfQHrMun1zFWPNQnYQmdB25ySJWCbTuuLwKAfNMQ",
  "key9": "3zPXM8rYRKpqurw6GHRr6Z1MAdUx963hoW5oBa48fofUn3R69YwvqoGR3XanoF8vbK4BdVD9DSzQPV3Rm4iQbh99",
  "key10": "GX5QqiKj9yaJJTE8tKiKxJ5EiEnqtGosdteiM4iU34Ne9uyJFAGshcmEWihS8Ze4ZxAmbqioRCDkzKmTapmGy42",
  "key11": "5cATDai6V12KUsTUDg9139KaCNjkJ2yyuHEcEQB8yLfzzi5S35nSfpCsExXWsJaZafdYQtWeDfiWqdCS4j6E7bV1",
  "key12": "VhfqgdASgUt2Vk8bxwQRdrXHKSrfrGWNXreFq8sW59tv491MLZRwLiyQXU8Tp2qL7bYNDYcYxtKoemvccUKYnDU",
  "key13": "4H9GSrU5wZQqP1dkXohu594QAVfk9eEmjxuAAyhazrVz7SvVHh4VDjisNuPz76xPLD4s2gVVBGp1ceSyrSz3Pydj",
  "key14": "2vXCvd1acj1d9D7XMJbeCqY6QWx2jhVNUdRXna4eDNhj7spow3eUXQR6LcF3qp2B2wTP4iZPxc7o5V557tJsTR91",
  "key15": "33K5DVfgC4mqWsSLTyQrRU3TaEQT7cinN5fGFyWkXvqepKCyAjFc8Qu2M4u5NZpp6a3BRaPGPrHkfuXiVJzZDW5G",
  "key16": "4qnJABXDxryeff4XLfGXvBNryQ5NQGpCH7FJsWh1xLBXvJa1TwnD6rjBwg3jeeGZgbPQEavpnkje78G9YbePrjtd",
  "key17": "5kAJdgJdnmLSCiiHNTg6yVFm21b6aDUzRGpQQHHudqWSgTM4YLtzAcJuJvzKssBtPNutXyG28KF4HXE4DjNK6pop",
  "key18": "5m1wjCdX2N7fEtMfofapnzTKx3Fu8FCsaetRhHVnyY8rdy1vr2hVqNBTncgvrxRZrbkTBEhQ5XJrMYPiAcuVQZii",
  "key19": "4oMWiPfnq58k3c8aWyepi1UZjc2fU4QNNwdqcYP5YMWUEFLER3YdVu7NTRyykzbxwq5vUUtTQ3Gkqbrh6gwCEtj1",
  "key20": "5cnWTtfUxtDdcxqCuYnVXSvSHxxd41Lg8LvBPZNsvmbkecNF8LMfZme5hQo2TeHPhsoNFjMV2JGX4Tfm4TPbuN3u",
  "key21": "4R5zkm7aUtLyqnVunyVKG94ghoL5tM9v7S5jqyFUgbb1g3ErbmRMDfYwtGddy8ENSKy5UFbadxZjtcpode3em53g",
  "key22": "kEoJTyL89RjS7ycWVGWt1PWMDbuyCH7DafAiq7MoMFYDajs91xVWA1dUJzKrhaQCVsiJYBBJ5BTuc8FH6h9cwuA",
  "key23": "iW2XPxpyA5EJ3SanAvVrsvCzECDKqXUuQ3hjC5Co3T7ezoLAk3XC2tUstLj3G8ot9VaNLvhB7hZTkUS723qSgRp",
  "key24": "27WijMJW77xvwHc3w4A1pAXfKc8J5FztSqD5qyvv7BnJoStL5ax3Dm8MvR5TQ7zeWm5JfSDWdesRTZDdBiLqZew7",
  "key25": "FTyFdR4NAVhKXPGmngiRThmaMP5RLK7mzNQtvZMxGrNAFQheE1qPLZfSai19GJvvVbFR7HPCjP44voa4ufLgo8M",
  "key26": "4d6MkRrxzGMR6z1MKiUP35bz7g2VdK8ePxNR1Rt51s9dS4JkgazBkKFfMVMjRW13Yos6AhRcgoonGgjv8EJi6tFf",
  "key27": "5S283DyNYRF5xfeDufak5SC2Qx5QNw2z1nnBFUrNWnbM3BVMc5R4bsWwGjoe2J59daEHrQf6btDsLC1ctKn6MYTp",
  "key28": "42Xcuq3FZSAax68vfiipvpURgWo9gE1KvG2hJRMcZqmHRohSdo4TgnStJnqFb2sGWohWKCahjo956prY7XiwwVwk",
  "key29": "2qQFyPH4dr8pFwikccXbPywK2TDE5vVzkmDQwAkiyQCcR4EEt7eddEn1pRKd2pHERSMYBRTb841tN3PwTQUBGDcF",
  "key30": "2PMWx6k1V54qmsoHYCEDVSmoAQbKpStghFoL8Z4UV3FMDNTUDkT91H9Rj3rF9K68tYsuz9UUmTMRTbh9pMaTWoF5",
  "key31": "3dLZEuYSxkxFnLBpMc5jWm3ZRjA3VKLGjCQQmYoEuqFNc9eq2Dd8ir6diZC3TArH3YLkcsaHQrxCmmQKTV8VsKCV",
  "key32": "2Sr4h7gQy9cZXFjwrSie7HSB1NKsbvQxFqSPoNCzv9EeC6mhS8zCVgfasjdhPaTCEFQ7voKvUuisPSuVrtVc1pMF",
  "key33": "2XHgp6YTQuHAFyju1LSpWqiUhRJroVtvGMhqRvVK6sEWRk3XKox2cTzev3zUzTzSFjwuT7h2aABSCpKCipEfi8x5",
  "key34": "4SpXrFfesbRLCL8eRH5xooZ1dq9rNDrTnYV6Pajn1aAX67NVx3J3VdNx2v3yy51Mv1YuSM38hDcG6HhQbrNt9VGd"
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
