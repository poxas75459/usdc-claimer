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
    "4gjMRA2nwhwjtZgN5rBowqCTbYdvHn9aM24ZMNtgKZN9YuAuP3pMwCD92XEV1QAUjXUevgpwfoWVUTjy1Y45t6ih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25kJ3oMfMkaUesQzXHDk3Z85mo4HFCkyKNLizwyUKt25xHrfpEFHj799ATzmuRVppYfw6LY6wbrSRRdm1Q6wxj9v",
  "key1": "4GKMymvpEqoo3HHT6GVQC425NdechxQ4XU4T2yEJmphhd4ApqvURCWVish49o7dznpZtoQYpX1pLJttFz6JzcZhw",
  "key2": "3jtsYX3HDBL6HXaVLXr4LikdcZSaH1DgG4MQP1taDT1DJ3fSipEgxRpJXBWZPtj8D9939J52ygCoapkLM6cp2iAK",
  "key3": "3BbBDaAyRX4wiwtrLUny23gio6X3JTaueop61BwK9MgvxMsousso7oKLW7XmFxEizXJfCaRLCz7Tc27K24Ybm2hD",
  "key4": "5geKv5Stc57bhVK2TzvWPBxmAttebirBkqVFMt3BD81fNzdVEFvMtZSH6AMhDgkNnXLHDi57uuPvCCMFUssYAqvH",
  "key5": "RVwEFtNhx1PXn9LBWgqMtoz6E8mtePGbpqRs78ja1bre4Ubx5pWB4Vn9xNcBwTRgaikRPztk7Qsg12En4rBWYqq",
  "key6": "26CdbjrXAiG6o1HU4XSwtqnjue2tuM97yewnQS6DV75XzpxNoNvBTkchZ7pheTYkngLiM72wdnftHu6JF6J4KUR8",
  "key7": "3Ny2zHQpjgpiXx3Luur3jY2Mb1NjEQmKmN1w4T3R9ABGrrCS9suoTsV8QVLEJwVoScS9QZk5AfEyMYMELMP4675y",
  "key8": "4atXgNjjSErgaZBMUFqvmgkggLbZyLoe3jQzsKXgLRnMKGz9ZyjJ7mnX8TmM1se655NLhcQvKsPYfrYWVnSB8xSG",
  "key9": "4ceFpzZZEuuAem5UNqhN6wRgehxAFKdSshePNhcypr2QcYt9bmniJqP4Bu9E8kr1J5Ah39gm6G2rSvqcrUAtbXLb",
  "key10": "3iMoFpDvymTvsEbBsKhaMSJwD7533SrvxnAJRPhoPSbe4nwqB9exuojfkEzBB3D3eDky4Z3VxZgpGDjma8LaDeUz",
  "key11": "4o3spvR54FizS8PcYav8Z35s2UnxXKP96p7X51gDZ7HsmNa2wRVEv6tzBMj18uQQVLrbozE6ati1wup5X4KYvF49",
  "key12": "5695XE7eJxhj5UzyWHdTUuwfedQpSnQi69Vm4otWriUzXGmnWZr73CabX1duw7g77WkFw6PLY4kiP3JLYhi9qg52",
  "key13": "2g482WU3gSBYcH8Q4459wYpTuUAU7APuoywuv1cB5WCsRETcSEu61FAdzzzYTcciaahxN1CVcMXviWhsgis6rrH3",
  "key14": "3ThQPS7whsQ5UtvKUWUvJHTug4cQEhHYwFAdUA8y8sDSRBqiS69MbfUthpAJFDPQjhBauLt47JinD2Kjr15oLHp",
  "key15": "3WfMyCyKM5CMq6vV8uCHnjgj2c4TatJxqc58k9xKP4rEdKr5C4rtTFp92i6fC52iQ43cFFLe93WsQPsmB57oMWrg",
  "key16": "5gLwJ7nBLqs9WvjKUZhZ3awgyLQr7Lqjs2V76JgYYkPyk6R8RwfPyQ3ug68kN5Q9kiLy2XQEysM2SSJyXcYctYW3",
  "key17": "HSujhhvpXrFryMLzzgawijPcb3AZaimDFvuDf41ExmUPRC4Eb2axrHrdpbYbMqv7AW8UAzowYypoeNeGPnrCK1K",
  "key18": "4jCjHc3C9gfMDeKe5hguDEhKaVigUsbg6jWBRbgaeh3xsKQwffz22naKbCAM3t1ReFQY5EGEpX8htxh4y1dJ9fxe",
  "key19": "4rjQ4HkCqe92TeUPMiQ2wXg4pe2cCsmeL78RGtUqVMGZU1W4yDME4pCC2DQMMHXffKRNYb59eCcjb7btMhB5XNzU",
  "key20": "5FdzUtcP2XDthHtbcKeWxTewrVSs8FXh4ADyyzgoxKUJUgCW5xDYzqBbchJr1KRMjTinuPoYYTfqk2uMvVqoEZcG",
  "key21": "4nA1EH1kLtkkZWKmL3HQ6vJKWXSqHyq8mDfNEV1276oguViXWPQFo96TR9xTeaJkpTn7wUns9HJNg2aoWnLe6Upr",
  "key22": "4uU98h5d7jtJUUo2BrqSfok1VQjNQNTAu1o8C8DM9h7wDoo55FaFFiggtvs9bcgTvR26dNMXa4puzjW6t58ds1Ca",
  "key23": "3M6FBq4wQwdq6y4HXVqbXbbZUJ9agy9wooEvv5DUV9JB2ikJW6oZ2rjgrKwuyxG9QCD4NpJ8DmyYG5cwWRV9UTpc",
  "key24": "2bykfKU1pqwjDpBbp2jSWw6y4bnB4QBWpAt2a1Bp5Dn1tCqB3c8LzYiaywQyUKSghaCb9PU16aBhe1gp6vqZenaK",
  "key25": "KRvRV49bMEUVyGfkvVvJY8gZCuPWTAMqCKBRN4DEmvCLvcX63L6ibypVGHUqQpKR4tdvZAGJZ5buASphtGuNqW8",
  "key26": "3cKtRz2aAw3A5aouqr7ZzhQ1to2AwvEWuffnVKzXXaF44gT8xh1mgpSTEiwBR2CV2isWjQVZuJp3L1Y8skrPDGJ4",
  "key27": "vAn42DdmJznsEpBXccRthFyUd6imSgvA2FetBJHUcEBHkVJMt3r2mMq9CzBoQipSegybczmTmJaXMZYyjq1sL7y",
  "key28": "5RCmEdoui4zqxYKpZUTGiFHxUNnhJ3PuWvFQEa6ZEfULpS3Apj3tB42JM9oi1nXUf2yv6cLfPSbiKwZqESWiWa8q",
  "key29": "29x3yEFn1wqUKyDQEUdMzQpCL9vcCd9ozEp2HmbcQa3PQq3t9N38zYpDEZz5cAchn9TiRUaDmuKpHWatfQFXwPkj",
  "key30": "3Mp5cQo3WiATxxxH4eS7n3fYaKiD1Y4sippCyfy8cbynSjdiA9SSQnsVYeiMnxtyNbEeiTCM8Uzhf3GjwMyrbPWQ",
  "key31": "5eR65mdKyxPPyhWBk79zqxWuY5T9QGpaoF16j8s9148nfEYqwr38tT14ztvFG8Lk5DnPCvcLbwwjawwdTu7LWcGP",
  "key32": "3NUjoW2qJAah7JWiUz5CZD8eez49je38foQKZEWVjdGGyVbCKLHtY4fpGkYMya7NxvU1fakUx7Fai336gHN33rXE",
  "key33": "2hyuEfsQPJw4DKv6XG1ZZZ4RSDUAmX8vP46vH22f6uhidc71VsXeuJrGPBtuhPdgLuEbySm5Vr3jCMjR2TJEVhcm",
  "key34": "mFGfdGN174EhLUkXabphZdJXn98U1XJDrmGpkPXVrivgyJ1YUtEeLDB3BXQhLzEJuFsMDm2dEwNKXs7VebbRn4Q",
  "key35": "5AGT3T86g7tkMki1X2V7mQFHyPYcBuSK2rSWsMQYrmnQBymxn3irsy5gHFHA3NK2VtWtYRghyrukQocPpzAhJfWA",
  "key36": "4opuq3f5P53zhLumRy7Da43nqQRHxqNgusC4v9wdXTiKdtzoKdG9hnAqjm2RCFXyB7bPXKq9oc88zgJwKryFsnWc",
  "key37": "5UxRkF9W3vipobvVitXnSkZNBgpdzjKGdKMiZVUYYtxABdePekbBv3m24vsxRB1MKYzcebqjX2F5veQ9gwGtZtr1",
  "key38": "3Xywvwru1R4eWjrSB9mAGtq4joi8yKEZBp5Y7vkji5FnUnkgbL8Rak1CZZSn2Lbpy2e7hTwAH4Y6UNMjc7dpXr9H",
  "key39": "3s9eRYrhpYS6gKP9Vmhhc52H5VuG9Z3Z7ENiGvAYd8ehezMeUnc4qsqE1g3CQbbFGmAWBQcLDEvaksci5JmAEUFp",
  "key40": "3FaRhGSncNYUGc4WKTjsesAYG9yx1KhHZxVECnTVdZPk182FEgPH7GbZVKp2JwaU9h4j2XQbXAnohTXP2odBuN6y",
  "key41": "5HmFpUd9GEfrUZ64JhLUHFjtVi7xkUUPEKrCxNRZ58s8DqLeDS8QUc1uyihiFCyCQous8foZEgpYcwoHDBsEynfb",
  "key42": "4NqNELJVG32KHxeKVpVTu6H8uNkvoWXgCuAXvUvJYhqwSasrMQR3T8ycz8s87EATnGAW16HwxRkjbmS7pkqcQQ8q",
  "key43": "qwNbpg3trEo5jRHYTTf4wUJSWznSZ29Sautc9eWDnEQwUQdXyrxi58HRiN56hUZy3etcDPTJ9ddP97bYX3M9u9B",
  "key44": "5d7ZR4nHt2DXf1GXnhhLLXEgMi7J3rZWHmY7m7fr4GsNJvQaLHPwdFpDr4JgENsEw8CynmXtgrMAH4SzMaPRk39B",
  "key45": "61hg2BGaK5xkW59RdRkZqF85DD7h5garux26NAHCQ5gC7QyQ7eW4D4C85DcagqzyoSc4m6Pjb69Ss3ztffhBTFFq",
  "key46": "ddpDUV5BNbsNkjKBLyWLC5gfdMGjAh4jHeZ7Qw31D49K7wR9AR35Gjns2yZZVi6o5c5ijkuR5bQHErag9ewtfho"
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
