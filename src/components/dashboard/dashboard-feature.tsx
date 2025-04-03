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
    "5Zv6V6Q5xrZC4TZDcdtgXyTgcMeypHNb9uJzEmYtx5JnVctx7FwXeLLB4r9bFohhW3FNQHPGPrsVRZpQjsHubG22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iSFmbSzzYDKY4FQmHWs2CCxeXTTzaJHA1B4eJdkh7w5eQeaSFtiBwgew5LAqVf73ZMcKAubSwWih7AVMVNYrEss",
  "key1": "5vS6TQwGgiMXn2FkAcDJyKHvAvxgW2uPN4oH17Wu4gsSaEKjh7gqhvo5tNvXUCdJnGTi2exX1nw8xhiNBh7EbRXz",
  "key2": "4iPQdn3Yddee6rXV4JLV3RoBnqYJE8MtRJPQxv32MF46fPBJuA2J6oNisxxK4ZZKJ4rZcqWTw8odniW9WKhqr2PR",
  "key3": "5jbhrxDX8mKKciVoanr7BqSZEMdQeeMEJfDQFZaYRBBiwnt142rnoKaujjBZWSmWzaoF5aghnFds19q9RV59DzNK",
  "key4": "ewo67dT8htL6o6fjB8LeDmExtkXK7USAbJGoDZrXAvN625A7ggnFYWTXAaHttzJmhSbbhD2YD7AcGjDTcL8vHrM",
  "key5": "sWP1mtnBG68auoN5qvmQRY5ubYo1vtL2L9trNSpSvSmbnjspVcQZBswkKZZUZL5sDCDTyHDMVMjmqqy6DDkcA34",
  "key6": "rmCBdVbxgQ2gyWHRT1pza5ifrS1iNgaDmXgcdPf5LwVtaDh7isLsKzCsBTYXekYwhrWMJEEdXmxv6khNPHoT4vj",
  "key7": "3JL1S3mfMiqsyNkweHonFx2RPzSKMHt8nh8tiRLebEEr6Fi7s5ihvgNmKRG1wjPw7VVewiLwje8LApWFVbpbCi8Z",
  "key8": "65uRS8ZRyaqFFaXaUNGa9U6sEPgEBSDShq1dxj5HhXmNP6TaAK6eMnqgWZMtbwzW3FceFpuZo32MyBactrszD7eL",
  "key9": "3WS1X9ZHDhvLcnY8qiEM3HnBnfGYreb6JZ95Msav9VF1VQmeEFaaFcb79pxAZeREJzdAMVLFoaRtLkusvtSj9SUf",
  "key10": "4pQ98DXHjamrCD61dhU8UVnA7jERERRA3x5YvNbMNPour1q6u1ip7qAvYTMEm2P3SHekex4abBvEVo14RrHaaRrH",
  "key11": "4dSmVcAnxeeYoqD2DuHCUk24ypAy86QQRLzCztzYtqBkLs4NXAF6Z61B5ZgAh4fU451v9WaVaESRgZk2K5WA1CL8",
  "key12": "44B12Sj64SMoBRPBBGxq8pTnBtWEURB5tSJnn2u5vSthzgiB4GqVJweDzkHi69pW8Lnjx2wprA1XGg1ZZaD4EfJy",
  "key13": "p1d2cJ2mhFyv2rypdz3vNb6DtFGc5Ruj11Ri2CFmYGkzj7ip4axv8WkNKfq877B7eSs1NepwGJJ16CXAt3EE7q2",
  "key14": "3R6TFMMHNDPEsrWRcNSvRBLyJ51UYpvnK2zB8xXUqnXoxxRD9uZb45GFHzMXKrVoyxZV88LbmwwATztgH37y8Pu3",
  "key15": "4E15YY7ffvNJoBDwEJM7FXLmmFsZYFgKiXZhuPBQvP5bn6pgFMJRxSCB22LBr85EJyX7Q2fYJGgPwS1NLwiUx8ud",
  "key16": "3EdkhDBsrrKxKNBASJSctcK2b7rev8ikaffLYSwQZbuhkKjdVreBToNPvsHH7L2EfHsT2woYGRuxzxPkomZVoV9f",
  "key17": "2oUwBXLtMVGBq8n2kEP83GMABB7Lhww1Jbtf7qbuqcpQHB7opmFdvRoxGKkpyat984c4iWXc68pQuwYaP4V8LE2W",
  "key18": "pAhKdJrHZjh9dXqxEKUbVWwuQF8QteTmxZXkdFmtGyabA7SXJQZfrbWU4CFMM8MD6E25AC5STNTsy8V1NpzX3dJ",
  "key19": "5bhdr9RFabnPC9c7YR46B1WqyUJQtCnAWgUVc4rXtJXvRcdVpjwaZC4Am655ESCew2cPkDeVfud242w1LmkwBKRc",
  "key20": "4JJxw9Tqmf1WDHWgZFTEhYRkYFV532cAgYG3giAuypg52ERKAJnxW7FEzoPgBMKNeGEtEt6kkMPtaQeQMvwJQptV",
  "key21": "3me8oPTM3kfWdzXqT6rbP26eK19miGy4a6iQ5WTMp5vo5yX9y6aAB7s6wqQ5788KGU5TSfX4ewHn8eZn5TK3Tu7W",
  "key22": "TdbGHpZ6EfrrWsveZMkA2Ks4HDjgWTgDcsBTJhDXSKJW4Hg8MhuUg7a9JZ9i6DmNRA5mzN8adG45CeunPVwVqFM",
  "key23": "33LmU7ht8XDa6aj8jGwLYiezoSYVZRk959XQDEbsnZFo3iTYUXpa2M1suCqKvZCVECnoqbfGrwyEttDkXsr9GmeX",
  "key24": "5L8FsWhh2JT1YCwzgQdqqCD7m9ZesNbUgNqQ2wmWbEo58ZF5YK62qyR4fVYrNeaMKYaTPKprYrVTCGLSQ8z2Bnqr",
  "key25": "2iRnBebuwSJX5PVovH9zdfG1RU781z9RCNiM7bM9VcbocxM87yxjuaMatsyGPrn2fKEFrVSLmrYgQY3XQQibaPJD",
  "key26": "4e4eJp7ku5WMMpMTtZXQtL8vSqyykuV9P6zjuZu4dQB6U3QzK7J5bTwrcGYrpq3c3TdbvTLCc7o95ejRaXbKsRGa",
  "key27": "r3J663MsZJEu7PK7aDidArL4jWaKuUWSyTF1aBqe7LhYk6dwZi1WWttNz5kuoVBUZishs1ZidyLp6GAXHJ9jDRY",
  "key28": "jt5EtoF9i6pRoVHmSG7W1ukXuoW8NrejWp688z3sfuqjjW161WKw1iiSdyK1xkc5mNg7kfhpUWBzwNDh5Hy7MYu",
  "key29": "3JrT5V1nq6899A8vm3aEsBUXUvUFL1ZdDvutxL7zDeENVBEC5GV6Sx8wSQVu16ht2NWcezsZv3VVZR7nU3vY9Pzt",
  "key30": "a2QA9JeZJTnShg6kEqyWsu8GkKaUeGNmZj33rMdskUT1rXgghN67exULuvgbTdsRrwaDMYYznmYqSRETkKMDpbd",
  "key31": "3GuCpJrfqy2PAUNJQgw2yi9iN3cnkXayrpZ3a6XUpMgRpfbmX4QDobDdMN293yTCTQTCXv9xwogWjFfLZvtcsegM",
  "key32": "UtXVZZP4mu3XNhn4wVZ5rMpfdXkbA4BYupB6qPkKf5weHKsiLVdSghjJLg8x8SwTGoQv5gJpHhpYju17ugtWXr3",
  "key33": "5yB1XjpzxwHE54UZDefR2Cnxc4cPqxR1zYUeo5sxyEmJZ1tHWt893ffb1Bz1MM9FsH9QzfnmHC3jUQnacQxP5RcF",
  "key34": "5WMZyXcnYhA3jMQn3m2xJ7BY5BpiDbF1rMdNakLcQNDxQ7umgXiJscijp7VJZdHVkQUXwgpfMAqT56As89tbR2Gh"
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
