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
    "5QXYLCV9AG9ahS6KLdkUYvDfxiSZtQioDtvtqBqbFEe6czy3o9xD2JNKbx7ahtvMQnfkDg3bafAXvQUfvVoGsdLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z9MmU3PfYJE8CxdxiPzKT8uTrh2SkTK8HRbFCgDusVezofZEgwbgTwMeCTH31YwGyFSwvmrMTU34t4amVoVjQRA",
  "key1": "4YuAF33WnYw8EJasz9p1wNh81Dcbkp4HRJ1hmAmnagNoPs1mBawQcxQUFarunJeoNH4GRNv6JMfByCQqxhgZbR61",
  "key2": "2ovxNeBBNU2PxZFC7qh6ZAYgDwiZ5XTcbaqddEEKQ6L5TaAge1vc1NLvUeYn6aRgG2PcbbEWK5okMox9X8obabWj",
  "key3": "5WT9AzKLxWY624q7yXTL6wKtJwLwtvZUy5g2SPEthSbkMb1bFJtjkH6YwvVWU1F2GwQj8LmTyRTa29peEx3nFaJt",
  "key4": "3qSYAg2LRzkMikjCtNXqNUwtfta7fEJ9DABEFEtM8vHjhTxQ8hbh4U7T7EUiaqkae5zbRSq6ByCPsKavqJFr1XaX",
  "key5": "2e19gMUqFoE7qfCYRXmSeSA136bCgqUKyGJHmGWbJJWnhXm4yCS9smtKwD4M7RRHyep1PBBZXifdSsQM9rXXnsVP",
  "key6": "2oxqj1igQRoYxhK49MhnVW9mfJnThzdnxSDs3oMPXfGnc8T7bkDWCuYHcC3LqzEpfNo7K1Wo7NCANM8GAgzRTMVq",
  "key7": "5AxoQ6GAmnc2ukVdXmNWevyXa39WmBTsYj6ckxiGXS8viwxnutPRbsinjaf54xZiKNxonw35tJCAUf9mRPhEPou",
  "key8": "65gitF43rDaf4PtCnmCsPaiz1b9iERLcdY7kebxdrRL4wubxX1DKTYJ4XHG4x6ij7iCZh39nZ2hvaxyxa6om1Tny",
  "key9": "3j8QgmKAFkgbqhUum6H4fbMMk5AyoKcTWNPC3sQTYWjNpyNmbx6UkP1QNujw4NmzCQuqasK2zTk8PgWH4Fx7iTdz",
  "key10": "vtvt9rbReogAvubDWqjrosi6Mr4V6NXdeaVXyj7WLcbhV1tyBU4A8HH8L7uxhd3kgdY7JNMnPDp8fpDLE2Pftoh",
  "key11": "3LfedwmBWPfB1TWH44mqPtkeFwciNCpLfsKtWBvi81hgkUqBxYtbjw3t5gT4ah5WxiyRNyKA7UQeywba8FovtjBP",
  "key12": "3NaqVFFkCX9i4DZmjir4XVoBinXqZipzqjqEkVtgGEkaSZm9e2GQtZtbkmZkDYg9MCpevK1DmcWAkcejqrUwATha",
  "key13": "4yFyPcmc1NGzY1KUqhKQp84UVvh7b2WSTz3pHnX7rUDPX5wgDrjRxejKSpRgMAJ8NRRGcGo6NxEmku5aFD6sA9jw",
  "key14": "2xmPF5QGZ68koubH8fsJ5X4Q33AGWfNnockdeWnXSu9Wo2XQsBpPiK6TNE2xL1WcZd4sABWrFg9kQ1fAS89MzuTC",
  "key15": "2FG64j9gwZEGLX1JGVaBqEqBDezxUKcT4F9svj41Z67J9EUXUsdTENLXA141Tip7pKT5QsA4tygsGcFiTpdpyezD",
  "key16": "5nZ9NYJfWbBdf2FjXEpA8o5sjZKDwHMHNE9avGaUVrQYhtYaEmJZYsBaCfVEFwM4PHNCKoWbn71dfM36jsQYKhbf",
  "key17": "5Z2JZcxBXwzz6mozHuckCfQsMQCHpnF37sK1CUdmkS2cgpdBrwJdDTZBBJZ2XSh4JpYbDvUuVfDbe9JGHwz6Lque",
  "key18": "4LVzwwXM3mQXaN3MjKwShdY4AfJtNDaeGkXs7MAfevRVL1wSLS5py6rCesvJKBeC9zuVFxfVbkgkpwx7wUy49B3h",
  "key19": "3brTdWhhjPcMNuuRDEmgAp6xLij1ayCjFYdg1mRXcJr4hwYxrZcMWgxiDg3xMD74vNdtSnn4fzo7wdFABRKiJU2v",
  "key20": "4ttbxHwtKFTtny6yYoCgrxbMNFbJGnpaz2GFeCBotjTvQb8m28XLHLuDc3Mqh2ytdDmTRNTwDfnxBmp2rSjKLie7",
  "key21": "5xLJQhM6XFqenjUwtzs9Z4ZjZ5eRsmFaTyaewRPYNyAQ2j755rprzbmKeJLAyHdzt1S2W5HmppRUHUznQJP8QGR2",
  "key22": "4tEaSrj5yVSTHhcQZVg5KbNcZC8r8yaAW1WEyFM1TkGKsG6wUhJxpwjTrnZzWTUqtCgf5NzCbbpWcFfT4DwMWPgk",
  "key23": "4xdmhW8zCD8SKsEF1qpftNDP5PgWsqDX4JabV4JN9nnLT1HHw2MtoxgKTGf2EAr4PzRw1ck81DYFDsecAaqhY59h",
  "key24": "5XkveHf9j1Amx7S4EqNYuVbs9H3eRDyg2TC4v9pTiM2FHmWrCYfVv1HFtB7vAmyHpMvBG8qL6PKo616ukHzBM5A3",
  "key25": "62191gPiVaU7UxH3jaxZmorRdqDFdHoNoysT3VvPWZWJnuZumD98N4qbwaeqH4S4RuoSTRECqdLetHG7A5xJdPLc",
  "key26": "31aRCi33kWKt7RH2ZjDCK76Ya8qtPQC67jxb6Q7g4KJKyQv4sgLSpXQgnqgZGcNgtKNmRsPEAJdGRP6vLHEbR3cj",
  "key27": "4bn8XhgagNoV8KHgC1tCX16Pyr3xqaBeGqShVjo4cQmGPDw2zLVmnuH1wpFy7jxvFfcwHsBG3sXtcCsEPHXqkHL3",
  "key28": "3FggsyifqhAn9W39gKSCqniGDBbScrzw2P8YyJGA6sirUy5x2jLG3xmrqozjYJQDDhR15tWFatof8SRgKgZ8w9US",
  "key29": "5Gp321xfytY9Dcn9QuWPJoqwd3c3enXSpmDYQEbF2UTUZKWTxTAiB77twX7G4UQKyX13HnEXMyx6pvbThSrrraKN",
  "key30": "dnwb3GwSkvrdBtqMqgEPv7tsLvtmpv3QJCFwBP8eNR1gmn6kW6WxSpEYhJ3HhBS4pzMmFJXeWKmo128JBPpn3xz",
  "key31": "4auHafJ9UuKHQZ3D4RMjSTGNJohaddEa3dbBDxY2Q3CVzwgDvQd8rUyNmY31jfnR5ykbPksc1RP9AVYPbE9zVfkj",
  "key32": "4dPhrAZMajo6K5EoiVo8vcMtUNPzfnqNU61zeWoxrpnBUUBBeSgGDbscYdUsZrq54LiLtTFkBnKQXEqmrVxsAyt7",
  "key33": "56Jwh33TLPSwypr1fvj2iaZgqXMSG4ZbEMhGXvjnMirv7MSKb4CPF3dhwLYZWLwh1HyfAcE5ZKuvPSKYD9v5mSzx",
  "key34": "3MUsfpemZFYCyf9N7ZV7pbTmy3DB3XgZzZV6ezZVWCwG2JvURzrYHCA76K5XShVNzNSp7mnbmLQHdyqpktxuFUzw",
  "key35": "5YqDkiobzVYG5LwF5faNGRgmQZ8bwEDHze2psTgzMmShzthoWXFyQFsvFK11P25Hw3xkVsh7SRtVuriqErkcb5Q7",
  "key36": "2QM18ZYwYZN4QNp8FWTGHLfzBRPTrycNLwQq9a2Ya27RkndCqttFvqTdqARh5Jp9qEEZ6SsKEz79aeJQ19LwzCVs",
  "key37": "24VdFJY94bZcNuSh33C2MFqP3yXAAev7n5HkZYEkAiZnCCzwaH5nryYmbym7Gcfx7XSwtb7vWYf7qmGXPgpwfdTG",
  "key38": "2EGU9hYtHfcbUZzzUDz2c1dS1ysRaJ6sFD1bREbx4UF1bZt4hiquPdNC7VEEziCNbhHdrb31FCKCg5NfBj4zrFQS",
  "key39": "2MimcvCvEW5VGvczZP9H1gE1uUR1AqVtG2XiUzosqhTAuWfCuhrQdV8LtgZxvqKSBVKZdAE3RwBtjhtDhLn1CWay"
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
