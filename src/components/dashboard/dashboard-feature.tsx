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
    "5NetRXhYe5F4NyGh1dgnRV2HVBVCLZRQDAWPs1HSZkRBhDtbyNos5P4GEVRyVy148sZdMVQmrB27NDYVu1cZDh3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kWRwCytnvMpf5do8LRzD1WeBfLvfw6JQ3U3EMZRGVgNmEBLwosNvXp1y16rvdNXUrSNDqm7jdkN8dVdLDHJHHc7",
  "key1": "JpawR8eUcR42DqKKe5d4z8DVomXqks6bLMSXhCVrHmV1mgEq3fCHfZwHcuZ9yzs3wthZev5dCWxRxra3hWTL64A",
  "key2": "43x5xa9hyHDHkrSyuxfAsavczGg8dFmDZRVovnp4M3FUybwtUzqvPhy19foDa2i2uA5uK3k9B9TMYm87H7EKUZi9",
  "key3": "3BbnUEieXARnVgs3WGEckq7Fc16mJQZ9vMUAff9CcdKzRjJKKQYC333QnpkK1CdXGQD4jWPck4d3JwstFSRdtEdQ",
  "key4": "3PRHzKjvaXHK9dn8TDZ2THYouMwYkajaGTpQpZXf5n6r8zufgRunLWKXgczvwB5VoJeQxrgBTcX9WTboDEyyFbMv",
  "key5": "2oXWexjDjeaYCHzWHrWjSN6FdUS87GXbdG7NCEcPY7AB2A24wj6ML12mR9YWqQzHc6YfeK4LcojXkQCpUBqjmgVp",
  "key6": "66dvtrwzZfaebQMTRh37CaB25bbAej53P7zWbkvr7QZHPJU4WKLfGpFFUEVWVhUm7gNSQiTvWHnWmRCbRjpNedTq",
  "key7": "HZqufbWg81sps37745n5jitppVHk2oVUfQPhyKNMbDKcfv2oPH1emKs8t8wzcS4MQA8QSDmwF4c2DqmtPmKZAxS",
  "key8": "5MqXteJHLPz15HB77KTbLCgy5VzqLTp5LvRdkiUpyfsA459B91WaH3b75px5DtHCoBTqpzfLMGM3M1PoGpz7LbVD",
  "key9": "4PfocuZ1sY66ywQZh3yazbp5aFqAhRquN8QXDUbiLpbY7NtCNesw6ZcWKQmMkR9LJSFVzokLgKGM2GkL8uM9Rkto",
  "key10": "vHaWxmaHswJ1ugsqWkLhe8Xd9JHGPFSAvu6CNWecxPKb4bu1JNTaxiBf9WpjUDS8HUrBFtatUuQMstHq9XNUHHq",
  "key11": "482xko9vcdnNDRxRQKKprGWX6GDqWbUXQS5n27XBGaweZPtoCcuERJ1oLZ97H66eUk1ZSbFot2K4gDKxTE3XcS1c",
  "key12": "2k5pkVL9EShgbQG84E6hckBptCTccpgBvb2Me3SFVVKqtA8M2G5Pgmv3G3koty31Eue2CA3jiQUu1rUUei211V3B",
  "key13": "4yw9fCroGNVHTdZkxD3YtetPqvamSqhxAeMQuYR1RbdYHoDy1fuARnJab4DKH4Ms6JU7uSh3bU7wapwbaJ1EUex3",
  "key14": "2GQSL4Hb9nuVqK7YJQ7wVYxmGaV1GEs4cWzpnwi14ZDpDWbS4xfxQAemWahzjK8eapMDnxA7Ar2hswuAgt9HYkV3",
  "key15": "4x2FD22WrVB9U44mXt4Y3HgjP8eF4HF11bDRcLHx93zfoa3gDpw1KwULfM6b3pKfvUguZaKVUMkuMysAofVynboQ",
  "key16": "5zbkAC7YMSRX8LUV3vxPdoSK3KzSKdpfPWRX1ykct2UUpgSSMrkEonqUZ4fyW6QrzgDkE7qfZ3WsvHQ4gp3humo4",
  "key17": "2bM9ac2uHwEj9vyBr9PL5pFrwJmqiA7in9f58nCmoLHNSZ2eFDJoYZUs7jdRG1shgdjmVmuoGjvQr11dgeDKe8TP",
  "key18": "5XF7VMnw4wwpbu36cDcaxwGsZVmmdg2vecsoGBQfGHPLVCVbYdNKqbX7PXCMgzQADgvA1628WaUrZgmqLWXdydyR",
  "key19": "2ftX4U8uTmyRdahEELuW1E8ZEFHQpfHNrKK3jPMzYX6VRcikYFdv8eVtQ1nxwg2Erijqd7Udda8rjyLMwUNnFiiq",
  "key20": "3BmgM495KeSjfGSC947Dwhf1jzv6gm4WRZHcvuQfF1HHABzRSXmqoBqaRTa1Dpoj7TiF84YTnCH1YEjtbB8mBjXM",
  "key21": "3TphdwinL5zZSrPpWQdgPFn5b7LxwfAA8LJaee4jYu56q7R6zMNbrX1PtwsUy9LGuhqFqva8jwMyVQgQwqaCD1TA",
  "key22": "4bX2BogcSWFaQCnuGU3hu1ZsM8Tz1cvyEpsQXbNdpramXEZEuLEX7eAJr1oSEdvDvecgKVJudYPrvNxtrGM1VsBD",
  "key23": "DqQGTDidmiKH334Rv3zP8gGcyo2kARAtuKGniFRufxArQ4bbhxbKnLGFQHz8PvmocaZXsJ1FfS9DGi64iVSfFS2",
  "key24": "4UZ5cAXs8Y6QtrQ9wP5caHC4ZUWbkedeWqAvbxTXaFAkUgNkTZkw6DRNFLeH9KbmXQMmFDLTiwLqNTrKqgT7G3m2",
  "key25": "5Famy93LYmKcRqzfdifzALp1TL6RujKFCAE2wHqh6DHqZnNcW5RAQJdhsUgtkyDswXDDvcGcEtJB1ijKJR9K423Z",
  "key26": "45pX9GULRbHK7raLT3R2zQoKvFAMGGBXfaaQVyuu2FvHHJSUnGWRJjy2Ka8u2cq3MRZ1DRfu5RSLjpDbc5bMMVBM",
  "key27": "45DNpgxzmTs28zVpaqgQqLjReGjVwKN5uiDNgcHbZTiGyJYA5FWmaWi3Do2g3KGbUahK8GzqQdqaG2hCDQ5wz3kC",
  "key28": "2puSPmwCs2fXhrN9PH6TN3STY5UZT5VkGYgMqXMVsSgKx52LT6pXzghMS44E6fEedaWMPKELRXxntMQa7YKBT25R",
  "key29": "31AQR9nY6kv3uojGYBM2ja5yC4PQLLyZuHcxUoPDkHtiYPs1679QwqZRo8i3ctpD2uACkJER1JWUH7UbsSRDtVui",
  "key30": "23T5GzFcHWCckY7RF3D6LbHntC85BVVERJax9Q3gHziDy7xdw3zML7uNFbrUm6w9UUc5iKWmiSTYn51Se1ZxKLhj",
  "key31": "5ACpbpKAeeJbzRUZV2Xx1FMN4HquX2fzX1xqddja13sAzSydWQ4tzn1QZ3TwPtvNZJVAuNjLUFAJ7zZJex7wcrt9",
  "key32": "5rBm3rXMLM4FDm9s3bCWG7V3TBcjGPBqs8daDMarV2iGCuHQD7go3ZzAzHcRFEfFk2Pd2JTxsfm25krbd1moBPYz",
  "key33": "4ciacsWbtbGCjZXrTckJwutQavkyEBUBsYQcStv1ZGqZPYvRCEZ7YaDRgofySp5b9EuNtQo2Q9cK9uqBXqD6JWhi",
  "key34": "2cSka8KYJnHb8DybsWEz5JBh1Kih4pqoQvQKYcp2PBMQDwZ8fGv33GfQ5NuherLZuYHrTuWo9q8VjohYqjGpSxu4",
  "key35": "2uJei4uBepW8wiwCM1hmcS2ZCJdGzFcQZMRzPxaZwEgKRZATPevKzePzHKbAdf5st4icMLALe9woDgWKm4QAPEnH",
  "key36": "4TpH8JmnznHeXeeypW9Nw1CfeE5fs4a23MRN62zY6MsVQCuoyEgsb7PDthJiyXfEgckmTUJv2wpSG2Kjp2fDYpgr",
  "key37": "4YqnCGzkaaJY9p5EaNUNKT4vSZBMSZLpZfaRdKj1iMQp6mBBXFiwMe3cvP96WiBYSA6y4PfjG9zCxyZhuwafmXc2",
  "key38": "2P7Gq8PYB6oXeR4k17HDv8BQPUweFC91paW1xCBDvtwgVpReQaTeVvNqKP2hw4LxdrFftr5miUQN5kGPXxoAtq2N",
  "key39": "2tM873iJoDuK8ieiNJ9zRvuePnMw6DiXiHZdREupSvNGNeir9m451demun9aoK6z3GoBgjFZQyhA3rQQT4ZLC4dV",
  "key40": "4Ei28QFevmy9cVcnY3cLARTrU4EqwoZzFoxnQnxD4eqFqx7MuDYe4yYux9y9FkFfN32e3YFenvgqLhfwzsjyFgF1",
  "key41": "Zxn972pT6LBCFUuo75sPHiV8YNT2swv7nCNnhq4zv6HX5zHENCr6DSyAPzrcFoDDY9VNno4ACA5E7txyA53qrop",
  "key42": "2C9WNv1qEfCm5HatEon4AX3iXQFSTGr751CWuyTE1jaWQQzW5ZyNx6Cc5jPD2xU5co6dq9E8Hwmqkdn1yEQfqUT5",
  "key43": "4WZXhCWrQY32qe5heNFjFjcGVhaHXbPF9NaQNqgJjkzbux51JYBZo2NFZNNabQfviUcaE5JvUTHGbJoPAjiqWDwo",
  "key44": "5EKkyNuByczNQMKJzqi4q2Doh2W7bF8rvGGTakBpSAjUACnLQES1zdBftJX5J5mZe9BMEHpH9SPimB8VSa1kyEvP",
  "key45": "42ZTEtDMtXhEJbppm919uioWRbVsFP9138Lhq6tjksHeEBuPmKC1YLCJqHr1uPw98ANXVPeqEbu9E25UfEgV3D78",
  "key46": "3rXEbUVaPJqdchVcGb6uLNbVY8kQdfmAQjW4EghuviHAGMQwTFCeNwJmgYgK7r43dBktz6se5pbEJAasfB5SE2FG",
  "key47": "2iHqnMk358T56QY4Qq4oimEugSd8mcTXkkQQ1EHZStuZuXi5WYFRzP1Qc1ckdA8wKgqJVeZ3Nx6nFyLGeMw4zDJE"
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
