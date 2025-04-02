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
    "5Y13XtAsBZhyWSsNCcNX1L9fmNXtCWbjDJuBhwP9PqRQ65xocaCnj5BmpDM1S8u58Za3AFa6Vyrpfif7be8seL3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DyEifNd7ngk69n24VxDXasjzwov6KTs8KfdDTSbKSAojUivDc3w8nf9Jk9mwyDDTnxzLRySCFqqxFrLjdkJqKJZ",
  "key1": "8Pa72rgx9U1mNk2M7DxDJw6nNmCzGLhoqXqNp5W3Eb6kAGa3gq1Se6bcDqDhPf8Pg4RSCMs2HpHD1UvqfQ3iDx1",
  "key2": "gXsLhWqfen8B9gfWx4JdkCQ28PpUtYf5pTWHhbxtC259jDZiUxztKuLtvKbzHFXHbbp5dic4Lt9GUfpk5CUUoq9",
  "key3": "4hje14Zrd5qbGobXbFcivpGhFrjdhCscgmNUFFvMxnrEjGFX5Gb8bTr2Sm4vWuXMZK2FaL5uK7bMWKcaCx8jc8Es",
  "key4": "3B7pxJYwXkn32tiUKNVqqxy2P715cttiTyuGohd18o3sUcRsSZyUGzCA1DwugyJVx1YGUQ5QQKtgFjESqWjaoytA",
  "key5": "2cTN1uGYxaSzauRR1LVxSWZAgtVMmyzVMwYcPvD7zhKL8kw7CyiJKonhZT6JLQymfcN5MqKBTdstVqzk5No2at4z",
  "key6": "3kG2MS7E6L584drG52ujV7vcWfXuiTHYEGAG5KnRFSm1GRgh3382gJn3TfHPVPTDrpsrX5uVd4BjXzmSZjtbTBwg",
  "key7": "4JdWLLfx6Kg6w1fmhw7W7ZKv5RuMCzgwUcas4MjNGdhJEC4esJhvGDYTJJw74tVWVKhCPYbNqGgnEgphpa5c9Myy",
  "key8": "5WPL3F4P2vukZwh9s7XJ8jwmwmi3FgJbvJK5FXKNq5DLLb3rAMXYE2TqLkLJBsxCSCh8XA5bBpYVBhsEUakNa58L",
  "key9": "5yFxRFEXnq42qLBpJzoTHnUJZZgjzXiUgLHDHq8WmrMtdPzAoYNasW8184GtnnFuAFJvLJ14A6vhoB4hb9WdPEz7",
  "key10": "4tqksCD8o6QhkPSaqM24ZuUYixoA9QzWvA6favbok3tLrZEdtS8U4LsnnVNGYEP1nScghz8UmaWAvKuRvsPcA1Pu",
  "key11": "5ESUBoQ6Zurk2kyUS4NxjeTXd5DkNdxF3xiRconz7XNckesWzab4any1MySUR9BfShsE8o7qz1JJFRkLRnvTYu6K",
  "key12": "4GmXm4EUMxTSWGcRfMVXD4j3Egjpk5ybnWcQCFYGbHjYVfUdzFcrhnuxc5NyJnk1FLxyHwRpZ5DYE1EAd2ayKHuq",
  "key13": "jbuDLfoKGkU7ai4qev1HjP3A3aYD74fJdqYsL9DUapWfFEYXMB6Zg44ef4LztJD5nHCfwSSbCxDWaSgWUG3QVqp",
  "key14": "5Aor7UVqhyqNH9yvTMDrGJHGEPZfyK49QiXuwu6tqX8kYHqJuAnajhNvrKtEhYJtzfXxnpEv7ZeN3pphpLcr6NM1",
  "key15": "VJ5sfPH4mCUKY51WPcmV51nuBK7XUXMGFjuobvkmgPYRF9nTLq17UJF6j1LHvDqjuThpQTpt9jbsEuafzJGBLhi",
  "key16": "4W22TPHrch8FaHavoLRmoduDCsq1H5qsBSfHrFfS3zwnWiX81KbfVos3PRGVnXULHNUwCr7raP2sBykvCYLCt1Jc",
  "key17": "4hRSep9p7bjqs4FYc39wirFc4VSvQiPMp3qneMuiF15qhrpSWQnJEE4Au8LcCdYVwQ6sBymCNq1hAbTXqrsiaTC7",
  "key18": "5pFJqx9Ro5eH57Q7amPEq1jSh37f8jzRm95QBsmshuBntRsiThxZDmgX6eHoqp9Z8cSuJHAVPjnYDXMaAM6BXJCe",
  "key19": "2GXSh2S7iw4r7zbfU345v1DP1VNdC5jWwBUsMsoC4zyyLL77mGGg2pTFqkuEBuJywxqyQvKbSWQFuihBKDdf55tJ",
  "key20": "6rtJwCPLFJx5KUdXBPiV6Eco5ZfdLzhSpCg3ZeHJZ9EHjFfJ5zHGsaKHN2fR7jUfDKeQoSTC2LiexvH3wfoNS5t",
  "key21": "iV2Vs2wm5XXJiBYfJF34LH8dSHL7V3P6Taw9Mjj23jbtH3LNeTUg6CiB7xZ5CRpFqVZWwz1tpXyWNtMeoJb6baQ",
  "key22": "2JTRSXEPHi5wqXDz9E5KF7YyAdiQ5aT51VZKV8W6yCTG4S7WHgk74CxcfNKvSk3gnHxxoTXFJpeBfsJSQbdaGxps",
  "key23": "4ja47VrAijB6RK3nVyPAyuq32cqTTLTcjFSspU5Cd3yeVJEHgcrQf2AGJm38mV7psfERYJVjHWtSry4EQLeTJG4C",
  "key24": "5ZwvxjTnDebgLnGDYqBQYvu4W8o8HKCT8x8Mxemepi7Qp8XZqKyVZoUMBHafWTZLtZZsPdwDa5Sf8evSCmBevJp8",
  "key25": "18auzJdurZYtZN1cUgvSrrSYmoAdG6BQ9zGN7qm8mDjoUxAzEMqANhbTSAw5ZkcS1av2kpVminE7evvywwkHAKM",
  "key26": "5V24Qduh39Jo4c6r9wr4tTY23KXJcai1wTkGmadKRo63VXxQaZagAAR6TuH42L3RTV9cW4RUNHgGAYSMRKH4G3u5",
  "key27": "5E7bVgEwXqSqUGj29u6cTBqAsxS8cgVRNZRrAFjytT1LGe2MENmWckVmKQKyPu9TW519YLmVmf31BDS5FmwfvY3J",
  "key28": "47GNduAmtd18yEqihiwqRAoifwPbETuRKh1Nm3mHN4JwVyvmacrQk4VHB8p157HJbMSkUnGQBRrapoSAn1EE3y3J",
  "key29": "KBqVRU1L9S83nwPNc9enetJfnbmhynB6tnBwemqQ7EB84ocyCNfxfYxYNLVebmZkbZFNQTdAitE1BtQQpriwos9",
  "key30": "5jRNtVEWuokDZKu5zCEtFEySyTCUxZMJJZ98wWLVBhk2K8UcPR8GqYwispLsSMVqGWtHh5c3cvzCv2NqvpZKFKaE",
  "key31": "44u8yyHbfFkRkZVidEaQTviPigncZDRQWoFATLXTDYxZuHCtJUQJafWdgqH78vNoqNTcqS3k7LXqHwm1b9iuWGfg",
  "key32": "65TWrDnsEDSSCnNy81CL2vYMXszPZvBCQd241P1brLcf4nn8D7945zrZjAsUsUCEfTxQSYoALuHvqhPQGUDzXcGh",
  "key33": "3rMFn4JWgbwyDevxA4RF9GqPYSagkhNPuvoyn2wK3yCE2MzKpxV811w1uDb6mE1Ajrxe5ZTUdfgnm2nTtrMoe4ge",
  "key34": "3Ehk812Uv46x2byD1MrV7i2N1Hx3CAFnZdmMwTR724MAaSxG8zRDSg3yUAbYWWXyVnRBJzbwmrbLDcNgJMhkJ4kC",
  "key35": "3bFRrZ2ipg21LARRkpQnrUtsyAudh8gyHwPLBcxeMCucipFXxJ1mpvV37xzpuwfc7gKzU864orgEnxPL5Nq2VDZe",
  "key36": "iNAZmHVNG2rupvhnb2uGHgZjPgo4Sox8DTUxGvZT5yXgFnXNU1BKEWcbEp16qo4fWMqZahiEUJPrdGysbWzX3om",
  "key37": "4UN8szuLU6uxVi3vpZxM9ESCrV3iJqED1TxQZ3THjiYJDLLNd4Kdz7zUrLjkDBWK95Ze6vqxyQSRNetBNf8kPc4x",
  "key38": "5692tN7fjjF4cccF9KY4NZgNABoPYxW8WGSiYDQ2nL5ndr15qisdNkY5iBBtPDJHBcsvRQxQzFYNG9VrHpKWk8Ro",
  "key39": "3gVEnrkjGS8fp4PdaYb1mDHmaeHeDYnjxNNXUJi8knFVGoXUsGyo3ksvqcAVjs1dsAycWLy2s79obpqrTfYRTvmH",
  "key40": "5ew5bfGHpTcDNiR47y3v2wjeiPKg8L65iRxbUdtRgaHYSHkKTytdFqfzfYiDBn2HofzVKAoMJtxQpHF8EiCCg9bc",
  "key41": "2YEkPkKssuNzccrYSKt3MiD1ytJAFpetQfWXvhGh87HdPEeE4qJ9aoizTNZUokmL3uaS1hqVb8XirEYmRpgA7i2m",
  "key42": "45kxR9yxp4sAS7iFHm97EEy7c7xqAoswcj3btLmXuzPEVb5iATjj8EUtCh3ZfAJK8R9igR9XkUjfHBXAVxQ5WyuY"
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
