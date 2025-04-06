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
    "5eP7etzji9ZAHpgYJq1Kv3Nao3e9APr4yYed1o6EmcTaL3UcdBWRVDEdX2Njq2dUJGZvzLjSiFw6dF3eZjubu7jj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MkuLboRaFX8noJZP3rU2ko1Kt7gDT7pEVeckJ6mvgzwPrUkqFNhgm3wWfdSHzKvdAR7UbNuTrkWyQoayanT737E",
  "key1": "4r7R9jk4rTv5vChA4qQoSktujEcRhSZo4JQXbdEG94McBoHdVgu7UeZkMu2FNVfa4sXo3w5QBtR5oXdgGqhocSqB",
  "key2": "gr9wwCPSH6W2wDtBAcLREguxWYi4csb8dfW4VRXzbeiv6HYoRqz37pN9Kg2kD5bqnmGPUsDdjB64zehGjCq5pEK",
  "key3": "2ZcoubNkchk26gGtLfx8YaHvo6u1ZK7c23oyEZchPwqQyRTDorPbayZ1WAWge7CfwwmPBkZujWFXNYPhCppw1x4S",
  "key4": "2HFef8s2AbwmB5qnDUKXS1tsi3RuJTzDZSmEj1PVUraMFjgygu2amjgjk3pk5BpqESyXfnvsohGWBLMAt3781pWh",
  "key5": "W8wxXSw2NvXEJWA9vEW9LQtssqZBAyPTr83iRcd4uRxz7xeXue3doLAD8VwwnonqoRhH6GUFCfW11EP4tJMnaDy",
  "key6": "2ZizTqha5cJbmQapUjZNcsMJKHbEBuhGdGczzAgmippX8jysNnnC36uuhnwvsBX9FoZ2AqQyHo9TRBdB1swgrvo3",
  "key7": "4DFCZtTGWSKRct1SgKQ3ZShYeTFBrCwPUm2wzcdqcZAXgXMo6uKGMXxfKHLcMyMq1oc3F2w42atPdPirAubURx6w",
  "key8": "3s9E8uu8yHhkFYsAgPHwaxxsfWAqBBGNridaBEsEt3DrnfbmbTBfuHr1RQR89uEARgaiYvhNhFNiSNpg5tkhzD27",
  "key9": "3u7TfX85tWwHkCPHsJiJaPiRyQR7a7nzuZ54VjmBvJtP1p97qae4NuxWw93YxFziCRX8ESg2ajxUpGXPt1RYNsvV",
  "key10": "63BpfLa5Ko9Qxbz77mtYLvQEn5zGgR18v5ZJiayPJqzH3zssZmbCyAT5qG16pemrDzHurKPJWfrnNc5D6vSunNMJ",
  "key11": "dtyn64GyhmPBpHaqxkJpgMAD85iacEn5J765JMU5czmesXECqXohTGKT7M5NYncA5HtR87VzWDJ2cWaNZ26Zdyi",
  "key12": "4kEX56WEknYTX1vV85bU8qQpyji2YcKLnqhuvENx5UoJLqs5Ush2KRzzdMdJEeo24aycnVGC8bYEUWKYxhUwBjA8",
  "key13": "4Er64NVoECDtPXvHFF5JZGHfB9PjAF1Az7KDBBxmoBMGuhi91WngjnYASETVjPZZxR2aeWAiJNjfLqx2vLYYXc1F",
  "key14": "5hiD5HiTNvx45bDcCmRfqTNpxafq8ncqfmJnjYNf3xmo25tccAcGGKWppTjA6ynfTjKE7Fw5ZqH7NcMY2JarnMG2",
  "key15": "316jnAKMGhm4pM7gFyGmXega9UoYx24TYvgi3wxt7zbcV2zk7VY8Ni712g2HRBbzrSytUzcXHV7e3n3xpvu8gYTi",
  "key16": "SzfeAriDtbx4dJZu48BRVAVK5yDXjtNNeQNY6JMsvFrdrH3F1JYjZ1yvTTS6zSvwrTbxHe1TiUZ7oMk7P1R7b5s",
  "key17": "3h2Uiv5g3frcZB2gcE8eg8YmjvRCd9UiPrVzJKL6JDZNpKfCEj1CedmCEa2NhTUC9XsvWFGgm5pcCJx7fN8Y5sjd",
  "key18": "35MQ6rMsVVbbxZcSMkxDUQn72YP6NBmAsAK41r1MNKvAHJWisXGgcHk2We7v9QTZt3L7BUYKAKsfsw8V8i4ZTJoz",
  "key19": "5LdB8HpiSfbpBHQnjQTuBjH7KEn45wKET6Ly4aZTWGux64xPTnLTgG15H6m5UCAZtqRVnVxnVUNJiRvgPQKWHwci",
  "key20": "CRyDi1MaRDgTEFoNYKiZ7ZM5v1PeN6nGKGd3D1vLtvV9bL69PD9VTkXip9ygwgJDfTAtvq3VHhDWr4mqiAqaNuZ",
  "key21": "4CRnnjvUkJDRjF9eGoKfJGQWkc7LQXDSMHSbp1xKiCijfnodggPFMpkmbZWgxByjJtz1pHmRarNCD9xsSySBcke",
  "key22": "2hc71p8qFcErxQXrfdmRFy2NGc88eAo1oasNbwypCrdHb3Ajo5wuzWo9bydRR7bzjDZhW7yqKx1MsA1eXkrKqZMy",
  "key23": "PGkSJ4emAzrnPuYZfzdgxrcXoqQ6kUwm4W2gttYdazmXnk92TzXPTLWrNdrS4u8BfTPn9oLnpzNiPoA1tYWvTn2",
  "key24": "26KJjLYyXJ41Xdh3rDzyFdK1anq7yEFaLAxkLwcWo89Xj7hztep8ztvNCPZokpBnDE8YVnYVxGwmUf5hDfncqevb",
  "key25": "5P4wmUAm9VALcktep6BNqYxowWZy2wHtJrgngMjAUGWwCKoNzvt17W1HzuPuya4aA816sZnXUg1Wa1vnqoov1SG6",
  "key26": "A6AarJsN6WNcTdGLGkTvKEE4wdMWXYsfszRzFBsaiMjschq84xKwMy4meUVYNAb53a2SxwVUybE3pUhGtRC1B7A",
  "key27": "4q6cx835X9htA5rXxFsuxJ6LT6a3RxvoqJh2SLN9sgmSon5UmLhqi8JWaVnsEEpoYVw76nChMdAM46duv3NHSvAD",
  "key28": "2mRYNRbhnCPwkPJsLsrgW4Mg3c7hcmRxS8eQWWPhZL6pqSZoQHRvFtwuSfpmj7GnecjgjTyb2TFwWHYG2NkSYDS4",
  "key29": "2chH5qgEXqEjSutxnx7SYK2F4aBHnEk5vAC4djAXwodpA9fUQN1rBMUhcfoSykyUSff7BR8Sqb6bT5LaD3TMAuZX",
  "key30": "5WrR7w7sQXkMKYHm7EE29midY1vsYDxu24heLJ4gxYz1sb5cdafrwP2rePHpb4he1mv1GpU3UJ9wBV6yxbvkzMRk",
  "key31": "6fcFnYLGSDsN4R9mv6o2rD8x2rvNQXPaBA82ANwPnEeW7JjsuASBbgJ8ZxkqAFqj28vsABadfiGTCshU5Hat1qC",
  "key32": "2vhKTEyUkDSVgoQpJW39fWv8rNCkzbYK3GYqSAtUY1Mx1DcJYJmgJCiaPHnAPvtZaM3t7a4KnRBPtyQZNyiyAT94",
  "key33": "2SzupD9zsx8tqWs66oXhChYCWNgLwKt7ShgffPBZ785yWeQm9LzKFhcaLbqpMJwP1MfwWhfcTghSg3ABkcSgSEbM",
  "key34": "3o4xRDZuZ73Ea6hd66gudp7syZfUR9jJmsY1bg3zjMhAXegKHtJbjEDsTV3tEde3cworRYPEYNWwVbBUzewbJL4K",
  "key35": "62tnwHG3SUaZR88ddU6gDJSJL2zo3iUtEMPPxhp6RL9AD8d55o31eNcU42na1r4Qto3UiohjfhhxFCNdqnvcY7Fh",
  "key36": "3oqYMgxFrCvEJtX23HbDsHJw6uZVQoYNpTYzgkz22p5ZK8N4V467eyXiK6VDmn3vFZjKuMPqjwtDdbQ5PS9HBJip",
  "key37": "2eRxBdBmL7do1hLF1wcL5J8D1PCYM7WPdWGKMX2sS5Snz95afYtHFao5DXXbU3Y6arp2XWV4apPFSbXW169xmCA2",
  "key38": "5KRinKSRKkBJet9BsHfd9XypbjWPbAGbDmY2JMyUAbhPGXEM3XBmWjyuTU3SVtcViNux3N9feyt4TPZAi5qXmu8b",
  "key39": "49NjDtXUvJgnhA8gkXUcBjd3Pbr3BHbAWGiQo4wTjYpXJDfjQ4YEwy9BAWmVwmiXzrVhcSDCz1QytjDxp6AXnE4t"
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
