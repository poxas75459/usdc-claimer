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
    "3axGsedZgJ2NvcwxXHsmbSL4R98CR5syYWspXRJVpbARVxi8GaTQbRFhqzgqoHvZ2FSCddAiNraFYhXWVL6pZoXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dyNyfNi7vanfvQPVerPSVcU7M3io2eZmesqgiPnqvuD4j6CgHdK3N4pCaFi6s3eNtWaNiU74fYu3wmv94sicKRt",
  "key1": "4us1cgd2M2raVuswKJs9zUD1s3iMrZ6WGXhZDsC3XgBqbjNHAQamA39XABRBZk8qNxtnDaZ9owQxi7FHS5o7CVhJ",
  "key2": "4XQnLdUixijGDyk9q32dWhbctPDYC6ADVfHCS39as9rDfzefF3GvDbVtsTWwFzci459t1k8ZsatwEBWi8fNfd69",
  "key3": "4idwKn7Jj6Em4Wfz3CxcHFNm9Csib6woai6eQxL3RtKFLBqV5jhahTB3YMWoXEFMebSQ2K7U5yjpHqCnWVkLNxmE",
  "key4": "4BDXirvTCFnWKK6idcSq3jbYBgSrzHWeZFDukRWw7FDPnkxwqQPm1qDCaQBp111Nn48djp33LQQWYXmmHawhWEHB",
  "key5": "bZg95i9sbQtxq65t1xXmwCo3hkqnwFzinZXxPBhZ6auzDz6TRXVaag4ejdUgskp4nQJ1XaCt54ucsRidBkdaHEd",
  "key6": "fztKzWNKZ4TCg682k8ZdFXj2HDZv4NDiBYqrpotM2hdesRepmA6txd1jrqEn1PnnNiDinuEXYdm8JUtWNTvPeiX",
  "key7": "iKUeuhobbcQdEWibzbmE59zLYzz8zusmVePiBUUNVeMCbsFnkXDByWRAcvvYtEeF334vU256mArxFWzYQj2zeeR",
  "key8": "2q2HubThAKW4Eo4Kmw7dieNjZA8udFbsUc6JJGK5aSWEvirEd72Ws6zmD4TEs1SSUnh1SZZ6zyDqSiUAjgyHbNrR",
  "key9": "4HJDjui6V6qGah5pLkKLGcggwB14V9btRCZsnnL8HR7XxdWTNCvFz4CQZyqenyJbWkpQSmhvimvaqpdFgVyURMnp",
  "key10": "2pxFLpNyveB8nW6hjtAY5vxZzGZEGAtpFMiGEdrHUy2aMBEc8NoV5g9PA9FSXwQrVjBoqKYMUtcpzzovGdXus2eD",
  "key11": "Y812vTyazU8uuCoXLRCv9tThvjCjFv4RsKpNF5deMA8fqKdnggePM4ksjBy5s2w9wQaJyvmNKhY8L9utLhauVSG",
  "key12": "5nveZevG1yAQRKgGZTEa4xWTNdRnoxPxWd1orTPQocgAsToKKUf931325M8miFEg4MdP4QCtNvpe4w4vELUqzsqy",
  "key13": "fivDVBfK3cfE69LgoFkGXaCxSy2uVqeMh934z8Ewa2PefGJEV7M9z76VYENLVdLh1ekbTL9YzYfBtiXyrDAqfeY",
  "key14": "2pXdvjSDWyNJ6qA4puRieswEpCUn55hnDv1uDkD7RhKNXUjS9hjndjcXVwVz2QWpunxRdZJWdADMorwcQHfQUx8p",
  "key15": "3KN5nxeDaFX93VSjAXSF9HH71KKz9WKXWQLpR7H8Xe5oiCm2DJYj2ZdAa5mBfp9CRxa5R5uP5ZYEo6o4DjGgvA7Z",
  "key16": "4E9MyZs1mdmqfNM4FvsG3VpGMDEisG1FoNjNHvGCQ6FHu4QLftcSK6AVxgoSJoYxEB7tGzQsLyrEHPkpxZ5Ln2cX",
  "key17": "6BSyzd9GPPVyzZPLh2XvpReHLZ7U2rSc4UFPVkpz8fzSRUjFLVwNpArWQy8SJ6dZgy7TkNqvivemgmyz6kkwGYV",
  "key18": "23LkX8hnRWg8HMjPPMMDp8H3M3ywepo5CUHa11hLSPzT8aQrNaDGaR3DPGEETvu4QDd3Wwb33V1pjCccFvpJJXNo",
  "key19": "5Bsx6UA2M9JMkd53HCmkFg8uCZKxVCEmjFxuVnbdVMEAir2WRBuKuU5VHTcf2droEPaXYwrzhiCZr9kdvGzJSwxD",
  "key20": "5jRK9DUZxLW9jsyEPGX2ZJgSfzH7xX52XRyCsB3wSBP7yUQCecvKPL6zQ26gSRrsPm6vHmJwBZRmGaersQEWvtR6",
  "key21": "5xTqAeMbs7p46yjCwCfg6vvAdbfiVaTUxHJauLs89RHMJDikRH8hG3XbWL5BzFTujzUpqFLsE8ZwkZjh2v1Zcfoa",
  "key22": "5ckgeAd2XasdYB94PkUfBpK4BteMgzKrRdcfjfT6aGsWoNhTLKPjRooJDdJAajzQGrYpzMbqstN1gBvbAFcesJiY",
  "key23": "51YdmZnfanuagzkvozfexnvcLxWh3QGFDdGVhnKedamuFkMV9rCX1ettiddK2ZzUdhmNQf6UCu7d7d99h8cbkQWe",
  "key24": "4PhArk6Ua3xP7SoEPmBFhvF47RKZb8BuFgDW42ddWVFQdmstQE2V2uiavy4JKkvMHFf4TKPJQ7Hfu9DX3pYk9m7W",
  "key25": "5dBgjDJhs2tFN1atv4JLp6dX6CwrUrS3PwejAZGSLwgP9uiUAAc8azvkrPbNx1uwQAnxNxMexJym2vhhE7Y5QLMU",
  "key26": "5A9pBn7Z1dWbdnYp7FzCPL62gyKbimdfpQe2SWgoaH4LB6MbqL9dhh6zPVVQRffe7ngLAr8wC29u85GEhdGGvpQU",
  "key27": "5AFP2ZAiSRnrzziynbCsiTvcDn8288GWRohxYgD8JTEGojCJbKArEWBfbSpYCZUG5TVD6FwDXzRbJ4MTBhjZsW9U",
  "key28": "5aaCscLCyMUWoh9fXsL3wLwJKbVMv6ALeR3q8xJ3faNXtCwDh7KJ1AHuZbA8pdAvZX1Eov6hYL6UezUkutWq1ADi",
  "key29": "nwXVCGWnyiw8t7KgzrT8qcEWqPUp1aXy5ZQ4TS3YBLYF6NsRpwkLgZjpAFooxGQNTnquD5AeVc2z649sUoHPfNP",
  "key30": "iahujAP6yJZAoLPuNv6fYpekUnE89mLN4g93KAVLEgdubvHUKucKVwTKBTUguAdkAZhPhNpX8mYrn3ukK7sdqqz",
  "key31": "2FvupbeKcwNkYHKhJhEbfr3qznntKFVUv6ineAsmEyDaQFQfLngMYNr1Av8qubLbjPT4JMcnVsbNWRNrfQLmGouM",
  "key32": "3goKJb69pdxfeDPPt7gG1uqDCpvCH5nXaeuqRp9kUGGwtqGYS6XJYQEBxhs1Lo5x2fbHucFMDJC2xVoyZJT7NDzK",
  "key33": "3bkrTJRzLxCsSzvqrVr3PkQs9bx6xZLbYpFnFDkEFPRmQFYncCRf7fQ5HoHra5DLgyywmVrcsHuzavySTJMiNvdX",
  "key34": "5eJcyja5Ay3EQkMYREgf6hWbZM9ou6Tz8W5PYqjpDt2s3XdVdmtAQVHxeLtXLvy8EtNpRdjVgpWpbSKKiYskFHkK",
  "key35": "2d4hVhkMk2y9ybEVokQiawpCqastBQ6QYUZRhN5182aus5nrEuVyA75DRevQ44hQY6gUWphqVLX5C3BaQuSJQ23r",
  "key36": "3iy3WNEx7F1qYT64vWVhE4vySveBKYH1SQg1ezdSkCfH9k8qtFNtu2B7X8PqnhBAPFJUs5SLt85PkiQszyLUp8fg",
  "key37": "37qAQdwN3n6uFBULD8MpCPncHjYbQyLjVsVky55hrax5tFhyPC9EyaKaqxB36U9WJNA7wEav59sHGsJGaeLM7qkS"
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
