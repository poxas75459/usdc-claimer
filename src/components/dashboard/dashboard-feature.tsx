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
    "4DJaBr2cxKiJXdJDXxSSdXmxN9FcxSSM32vkrdLkWF6xJndRUx6nKeXVSDyNeTmjTryYCnE57e28xUeQD3i57pc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gdWRGH3eWamyCJ5CVjaPabVdWJoPtkrjPSvDkYuRT2cqHyo2gCMwHWcjaXsbCvsf4xZT2D6g9JU1d1umhMjRGtx",
  "key1": "5GMGjnEXhGkrYATfGKk1PuQ48Lg8YVsr4EH6EbTPbhFc5jzNabBsC8kRoZYyFTzSumatkWTNASVQnkwCbbCBEvnp",
  "key2": "2Q8ros5xCYNCU3Fw9QzRqmBc5aPWh6yJUTu51f6o6Z5fQpTXjmVFZfwozPpt9RucdYDGJZ4oh1zMmidatJNTGc7L",
  "key3": "67jz9BZgF1gNfL8iFeWkY7VZEjNtCmq1dEwaoAejwC4EkKhRbKQMnxC9sfqgBxa8RS2BpfEdfNFKd22xuX2Lb1CQ",
  "key4": "5Bdj3BEcqZu8DRXQYaZaG6qXw8AaJTMfeQDBTvg9J5DTPHM7YZcSHg2zsHn1LKqBkBuCGTLwf8pfibJKYcn4gZhZ",
  "key5": "5TUTEh5BhurC8bmSLtKWZmg3EngFQ4vRsfLXPgnSNgXqqgfZgzhyYv1zMm8UptoxLMCtpgZFhKTcx3H29GSYJ27M",
  "key6": "5vHYjtetLeeE4iwAhL1ifySvouQg1GgFdA397CkXQwLSFRYAvuNBA6Lb1Po3tsqGEHjXcy1mQpkecMgqY5wCZqqW",
  "key7": "5V9ieaTgs1icB6T1aGsgWVkbkP2oTn3rZtxiMTUMiDdn71fCn6rdKR49ARk272eFU1h1NVDdvVsmWo9yKxMEnurd",
  "key8": "7Ktp8118hjZcEdhSVrSzGftdjYigVXYWM3dKRH4khRbniMaXtkjHfBejqgTFxpgdkkfP9p1rWjby1pioP2sLMht",
  "key9": "2vLYtZALuBMZLJYvdKVRsXC3jfJs3yV4mbvsTynVujDZRQN8wHGe5Nyoz6V53bF8ZULNZE3DKYDoic4yov9gkPa1",
  "key10": "3ZGc51z5N6SxDsQNMzMCBx41X7aqgZzispnCu3Be1H9RdvZ9NZZi1g21otzQYEgL5ubMfga1jyswMCcQwrr6vMaC",
  "key11": "URhLN6CnAb4XFCxFMP7NGA5oaMTaRFShoz8nJyASZTYVZMEmEqVQvdvMffqpmN78fRQAWNXoh1FNT5dV7Dg2zGT",
  "key12": "47nyh1nC1QF2fdNSuNnCRWfznBLkQCZU1yTxwoECzF116tewL5zB5R6kbp1YcPqLBPtQqKeio7uRrS4mUWPfagVG",
  "key13": "3wViHwi4KrxUfH2SPyvJiQUBR5WvK7yNn21TKcLFSvZJrzgwCtRNpuuHHmZRdWdccv59bepVEgzeCWX7AkpHYjYT",
  "key14": "26kVJTCR9xcJdM8amUke92DSQG16BFgLyadzjdtXGcqbqSURS3PpfpbauyJ5adCrX9RyqSNrC2CtVPasoxwh1Mbs",
  "key15": "2EXbxGGovemRhUCy5XaenCjAJzQVE4LYbLR2nFZoJEbAfg4pA9RaMsPWF5iytiZtBNWPuLXJMp28G38F2BX1cg7L",
  "key16": "5w5jcisKC8mAME3tXHPYtjpk8sj4QdoTA4oZ4aLYwy8xiXpXUCjSojHMqfKVXangUPjyXjUfhF4QnAEMqbBGAaBG",
  "key17": "2nvPDjMt8KXWjKJfxfEeyYzKCzC3eM69eMSRyhHkXGT2KFkKbV8RCyxCgWegop8uyDWiALxGZKGYNGtqAJpRRLfa",
  "key18": "3yuPzkjensEmnGrC8LRAmQzGXqJPZ4BEJgYfdzrmSjd5p6RRcPG4VzGHKhUc8EC2JP5qDxD8E8ye7WSnuVE7cuqU",
  "key19": "4YUxzJXRR757UcqbSk1DgoFX2kWYv3UnTvixqmXyBvVHpssS6Ly3sTdv68Ku7hVY7VgzmeFB5DUHo2darSSo1NX1",
  "key20": "GU97MAepbVeDpAqADaGe1Nh5PzmCkro32XW3sFhPZq9vrruNdGNUFKsC9JSLDA6A6zeCziQEb2cfSaBv1AWwHBo",
  "key21": "4CjXPKAP4NmgNu1fYk5G74BtDrAfmYgwGNg3dnsphKXMo4WxgWmUxC4qUDeh4Y38MsWRL2DwukUuL9KzmrW94Zai",
  "key22": "63rq4nYuB8w7DV7y8ir6yh1Z9p2vhfU7tCHtrajxqKbqotsgUMwQcLLrQt3aHKH66mAtZxi9PV3XbNym7piUNd8u",
  "key23": "4v9dQxsrUNjxUgYu3WTmbkgyNL1PT4cr4YnXLVMHNwLGwudZuj9dFj1dDT7pgkPy4S79cv7FFFptaszZfDNF4y48",
  "key24": "5iB32nLR9xhUJJvUmoG4GeVZfsZpvarA59yupTeXVsk4nhNAxjUXsmKYysY1ah2V6yhQGoLu2buLAuhTeagwgGaT",
  "key25": "3hQP1RvLwrNYA9zgURhHLNKbjtNh53HseJBXacS1GoG2KLwBLYa4W6hjdY8RxUq9ci6HMQa3knXx4YoxVTBzWrZ8",
  "key26": "aUkwTGPSJsLZDUZ2xMd7QNhUKNqVtxC2NE5CTiB366ZUZhxGnN6i3hi7LRy2ztcQWvCGnTn8ScF8Q1TUnaKTmWZ",
  "key27": "mqx4xN5yFVsQkYTECTsVo2trxfeqpC7XVx1a9NRXKdFS4DWvu2ArZdFyP3xgJ297ibHvPKUrJc6bnbrvd2anDc3",
  "key28": "32yLNwXCE6dZqKt8bDHMHftgNWwYB2ZMQvBt7LcTb4KrV9QpCQWSdp9Vomq32D5e8RcAKQqahZkeMQiRAa3Qeu3D",
  "key29": "5oMrMeeukTcSo6bS8qFbqWW2hewA6k3RuXPQ5fkEJMQpbxk5JT2P5dLCC2ymtWrrNozv7BJYuUoeqXkoBbjcXfow",
  "key30": "4q8r7SWQcvBpU2PVzAUPQZZ1mLeQYEv88vc5mrzwAiwPVbjyES39poe7nRYMdNBS7FYyEHwqMx2VuxdeGpW8TKJD",
  "key31": "4S9C4gQjmKXKzL8Nv29ZdjF9KP7YBq6ckfwzg8nsEBThLkf2wdu5UGdh8PWwspYwmhNfACxAe4uzLpq5whm2kD85",
  "key32": "5u33QsEsvPFQ15HmsBqx3uDNb2dHSfPw4XeDjojDrG1fA75ApFdNjrpNH4cAsAdaCmssSTCFct9rHvpxUmZZ4i5T",
  "key33": "4dgiVADohueV9MwVgKjVpo5Kx2uwMKZvApgEQAoP9vQSPV67zjwN2gzDvpTHLkuDkcJEPEXER9qCRcjJCCojCq63",
  "key34": "4qzhmZKPgdY3h1dteocWYEp6CUKxJ8Vhdb2bXYGdLWp9Zv1nj3UkyeJbaXWMxnjih2MLApPy5Yg79C1UNaMHqTEP"
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
