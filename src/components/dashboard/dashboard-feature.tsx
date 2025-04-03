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
    "5yzFqSDdUhXTm4nySfRU1TieHC2t9CE4kJa77XkV6NxGyC5ocCF65C9NvffaU3dja74D5Tpsm4yrAKcC4wh2ptVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49K8F16nwxYpv3SM8Z7kGxKdCXXNy512E3ruwnmK3pb2JHD8CrBLz9WtzU3wert7cSXdFSeHboayW8p5WzmKMtyX",
  "key1": "aXiFeTc7zRiqzu8bCsAYHxQdJqSGuZWD4USebX2DBXSKHzwhmP8SC3Rewv5mv1s1XQfAo6eARivfQcBGF1RiKzJ",
  "key2": "29vv5FwPzyjvp5xYjRJPzGBFuSBjtCmqgUT42Yh4mMUbyMYGox5LwX47NVnx1uxWvpKhs1jt7tuFGADapRjYG7ua",
  "key3": "52hb2tu1hqsbKj12mozP73uuwmzX1PWPPT88bsdCRKKfpe3XZjaHrvnA5ymqPjHMSWMdYb7Di8fqWF44hJUgW71f",
  "key4": "42zVEzXgcpZKfvaDwbyekH3DFA8F3tZwo98gnpUWkBud44ZMmqrBxj99EGjxZjCXANFs2W4CuENHB8TVg8VSmcqF",
  "key5": "42VUX7zxCScrg6b4hHKHCpKjp6tpKtoKtVT3MP5U8PB7bCnUEzw9G2TL5xrnxN8Drq3SjJSV13Gxx1ACBGbDHvMW",
  "key6": "2KuUydCVc3CDyVTszGPNdNrwtsSuXjkdL5ymRzYdoeth9HdMSuRPcWd3ZZCxpfAKqw5frXJePfXWeinuRtbN2jv6",
  "key7": "52xhwzJ8Pi4Sz5Z9R6kUNDyujVsGPyCfcq7RNvdsHzArbLhwQP2YSBNkYe16i2pnmoAF1LeddbQNLTXMtc7bVCxJ",
  "key8": "UKLMjw5pV1xpqQ6fZ1u4J2yGBQZtaVfxfu2AH8ru5eafvYh3hXTPa3gXSywes1hjjXPJnmTxmboniZPnCahRZvj",
  "key9": "5TPZB6fmB32VK5nYHYci2eqqoEEA9MNxxYDV6GdHxtdQ1yzBqpoDDQSNkjGCDYxJa9dLnP21L2Z8JudDK9v2xDue",
  "key10": "3Uoe1VsQmBHYKbFRDZCs83GgmfS4oB7JDBSA8g9aJ2sGawUdewByPyR9cSNo4BmfNAaxgBbL4uwke4roP9uDEuBK",
  "key11": "4RxaLN5QaRSQSYfrL7m9jS9RCpE9pJHwU9UKAxHJhKWrCvRUk8vy3cSGCisEJCNXfAXCp8igMUCPcsrMAdazGSGL",
  "key12": "2cJDaFLMPGDaa6VdARbTzvt2rDyxN7iSCihXQxHKEQuynS1yVFZcx8FeD33nHPVQL1YTR4uKq16TQCPWPH93jmTm",
  "key13": "2CWmhotqNXqqa8L63K1yb4pjV7Kj6z7wyWZsKew4CAhmxWcLcRHLECjtpkY2dPqEySczZykcRSQM8CKaiacvbgLF",
  "key14": "4PRJ84S9kf77UYZbmq5fNdoQ3KHXTW5gfDz6sPggQrC7s9gT36YkMEHM7mg5fMyUmc9DWUyQmi81Rycdjs3LhQgP",
  "key15": "4SuD7gA5Ljssoi97cRATv3zVZ5KQa4gHsKUWqLo6ojuQu69oyZftH7ZpKptjcQwJTCJ5zPxVjmBw9RhtJSMSarJk",
  "key16": "2ykUhpVKXwCzqpBd8tpQfpm22qXJHodzanwZ48wdrH1AYgVmbaHjuSUAPgS4uBvuEhvEUNE87SnB7KFz9U24UmnV",
  "key17": "4czASp3aCXdN7i1JgMtQcqhD9ETxREXrDXSnAxBpgi1ym33N9XhnJrgmHkZs8ddEKiT7XVSzroXg2b7JyhJn88ZX",
  "key18": "5WBZRRLxuJCTKv7vwZwHhP21rcxCrZ12wqcQvWNjET41FjVpPFp1NLACRHjfn86zFnbXMSWqxKFoavqUkNZZGat4",
  "key19": "3jbSJw9W91ekhpQPLdTdiBViRsJkUawLziWLwu5LTxR2cSjKn3r6JxgqQNQDQE6ruiaseAuLRrxxfTaREHKoRGsz",
  "key20": "4cZgcTL7EiHKHRfBkB96cgNWK6KDZwAc8VedcYcUGQKbUjSXdv4cC3BzteuCL96jru4qMYH4G2g5KLHnmYDi6qTz",
  "key21": "u6za4ddAWQmMhgfVPfUtShbvZ8Zeo2hHqGyeUuaJNo74R7ETAiTe4cH8gXvvya8W4kRzwL9M9D9Ee19egG2xsTx",
  "key22": "3n4Jiu2jhhTGjpn2qQo3XszN2ZnHEG1PuL4QJ3Xbwx6h7xWyAR9gJvaoDr1tATGgiTeuwyQfash4FzZEnsogSYvH",
  "key23": "4YEAme8pS5LZqzrock7S3h41GBuwe1AedADghVB9jXhkudKVEAiXTYtSitXdTsg1qezde7QPkmdoXKP6RXECQraw",
  "key24": "5N2nXDxP6twgt1yEtLJxPcZ4odJdeNLdHEo6Fxcqb4msfoVn1CR3vvp4ysCNk4CC7TQM5evZQvT5iS6xcjCp7WiD",
  "key25": "4Eiy1bvPLhFSFoxE2RkinQuQJkRedXQdyqRXFQRwjP1gTrYA4uonTh4LZXXxBuE8FfBWvyTaLftQKgS1WzDoHXZx",
  "key26": "3JhExsK2fMezBTuNRaLXMoAAzX8uzU468dVj4fvKEuLCGFBnbd283bv3AquFC4Xsew8pMDb1PFxR1pQo7rtHULoE",
  "key27": "2HWkyzqCddef1RhcLEAak9Fb4CKKeLYCKuWTsMWp9TcXegj5QL2UFFhhVPGR414cyzH9dMoyBDHcwhidvTJris5F",
  "key28": "3hcsxWDWoP3aPh6CnKQN9wJgC5c8JjWLudd2V5nzK7wwn9YMU4XDQyLbCVna66pgEoeRTEq6G7ZGcjAmQxVzWCNf",
  "key29": "4wFf88HdgfoFG4MPMU6twum3eK366RCsgtQkb3ocxCJNwbQjcsgm473fjNUw9ZPwNS4bS83bkYdn8y7YSTL2SqpQ",
  "key30": "4UFanWRGVRvixqJq1dn5jMC3feuv9qMsTYoxTSwGEirscBbRYFqhNJX7CDa288RL3hTF14zJaihbFxCCRqScASo7",
  "key31": "4ooVBGgLMvpiLPycCB4H3cEbFBitoqk75sXQCHts5T1t8xKpUfBpbBzmf33DC6w3mZp6rXVrurLwczu4yAkbaunX",
  "key32": "WTF8QZMmUKByenGxJhbvutRWQbfiEL5xJ261XTeo4xnB65WifV4LJ9CNpkAZAsneiKYGKXTHjpymjuu7BdyX7x7",
  "key33": "cqPW37zGCzEY4NMW5K4Uvrx6WW1Q4N4V2YQFAC4a6kvoQZe4xkrznWFS3ZtqVPhbJ68YVjvRRXFejsxp71npWxP",
  "key34": "AB6ma9j7FVbVuUy9aRqcwFLcWYqPEKTAbSm4WemBHTWk1ioWwdfRCD8UJoLmWhHDh28Pu66k5nTjWcaStHxU1CV",
  "key35": "2o6hP16zfRiNcrVpQDSGRwsmCSaRME1xwNpM4hHwtitvQ3rtDasxFiokP1YFo661sRq4XwL5gVeK6Q3tsd2kZnmr",
  "key36": "5JBb5tc58B8znVx1PwCSnDiMoyULRkHxh1HmKtEK68ypdqziZPQWu51gaRyKN6JZWhfrJMK3ZS6TJW91eZDnkfqf",
  "key37": "2M1GjfQCZ4AB1ztsUncBuLNFom5gyK1iJP9opY5M347yrvDyDb6cNRG5mdz3K2K8vRK7H93aNUQhJu2bd4eFnkyt",
  "key38": "Tv6ERxMv1zpK8NwoWEVQdcgLQmfu2ULMtqpheK8r359GZdEcWkXRXbN8mwytunfkEADD1rXnPNfb66kyaAM2vZL",
  "key39": "3XEges1K83ANdsbL4266Rzgs67GEGLhsvBTgHWJuWmdXbzE9w1fqDvnmn4GevvnHRppVX5DQ7RLoKtTJHkzXZ95X",
  "key40": "zz9Vi55wxAReTjgitUFDXHQPLzGTuEvnZiUa3AfUCjS82X9nmF3yYQH6Mj9prSGgY6EZQs5RQB9xEtf1R7ECn6J",
  "key41": "2vhjm7iRyM58okx4pPBDLiLM6x8cNyTcNKTYd82EshkgMATDZ7njRxxJc4XpP85BHWJaP42ayZHcxW64FcbgX21g",
  "key42": "3CcNYm3Jtm2Z2QJpcEVFjw6VaNnHrh2zQmRLL1LQacAsYSqLx6zqkZaWVmFH9voWYTFAJTkNCDE7fRNDutL4TjdT",
  "key43": "ezUUG9tpBeqya4bWK3bL5oPJbtz9oL7JTKi4WCXfzQjSyon9CW5KZ4nsArSGx5ccMD8AV4Lnxu1etmQEU7G9uaA",
  "key44": "2dE4HqBVhHk2MwndyAqZnn6CWx9cjsS249KvH87vpAPku5xpeGeaUnDpabQHSY6i5sZ3aia1rHBGGTzJ15c6aVg8",
  "key45": "5FfNE8fRh1Cduo7hY4FxcxxMY1FCNwSJ5GNWRFZ3csgnHu2oZ2Ko6Z3dnY4H5nKXeuWV1NBFYYu2yVyjDfFHmQNk",
  "key46": "jgHxj5m6j2mriwpc41jrmbA6enGKNDQjKoziN54eRhYGE5Hpvnxkvy5GQWRSvVYcwCrrgauErr7daxESyyEtU4f",
  "key47": "C95HwhJL9QHsUrBz55qiHwEiZSnvA9xCRSQgVKqkMcdh4RBXNVBu4TdkncR4g8WoqwJWEcNqzafH7zkiSd1Tfkb"
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
