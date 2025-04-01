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
    "5FaNUL2bfspj3n1cxeCPG5T8jVwjJr1YdGZtA7PGAWdVvRQE1VzDqA79gWYLJ9JsPg1Tih8q1BxqH3U9rmcvQxHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "467r5EbiHVAPK3Z9bHMgyKsVcXsn8EQhipaKMYUGpYnvmyMwJFnenDF3qpzWf18DaRYcgEEdw9wfQCSYwZw8ehgh",
  "key1": "a86V8esNXfWvtFFFWmrvaHGSVmE98sKt2KWsz1Nd3jdkhE7JHR9ByspMSoha6DUHbnMfFZVndDyRXA9swRw2X3b",
  "key2": "2EvoipjpJpHHKzdbUWNr1bhu2sLUderL88yqrpDRGsJVBtWZxD8m61RQ6J7yFyMr1YVu13KdNXfbhXfoRzh1pHac",
  "key3": "21ARTDd5RsMsWbLsifP5XTo38jqrnpSutGapSTEcngzQy8iccdXu6Nb83FLTc9iiTCHwoZseK1sJQbbmyvgjovjQ",
  "key4": "4FSoUtDwuQVRHMQsEkiLKBbPWYwnpAfy3wdg5HyfLHieitAYksmZ1GpubtB8pYiJxNzYkk2rSwLr3PtgCTUu4GtK",
  "key5": "49tLWGPJQKnu9SAuhA5jzbTDH2EpmpzGjagGotNVG3GKFAQrcx9DzCXpuMvTWwvYon9Nf23WYh8jJxCUnF9vPEBX",
  "key6": "3PoJBqdKR5WyDaUR7Ekgt5Ud54tuvXvNJZjcDEzb9HKMTt9qfuPBz38ooTX2hHRGXSZr3TkWkdYLwRnW99aVBtk3",
  "key7": "4V6ZVijGS16argPTkatt4gEhKj4qVkAYqXpBy9h4bseqhFh71fjccHS1Vuc7LPs12L5etVdGfC9TGxTW3kjo4YvW",
  "key8": "UGjWu33vA3b9Cd1obmi4o84SzfPwJnvPEUE6rMmDUioeehCaf6UxJJtoin155MoktGmAuaYasaFdXaTtZv5wBpn",
  "key9": "4bGNrJEgr9jUcs6eg5mFfhWg8oBvCiSBaPbTMDPebksrXpEbACqoN1CyUkLwA7FBGRWSNf5zhNTFPnTJ8xxaGh3r",
  "key10": "2s3D22vhdiJkVFMveByjCUnGniWwy3qjHEw2EFM42nScS3pjS7v5Bar4CExszYm8NszUCZkEFZDafpRQfpDfw1qm",
  "key11": "3BK6wtqH5TVHtLCAd2Hvx4azsDqjH8UaZwLrdQJwVnrm1VKk3jveYEpZTZSaMRNxGpvMjuDHqq3PS1s763hb8qNX",
  "key12": "5pCfWTd2FpXSy2GsRFRuvFDKMtCwvwiLjN74W3G1SY6QEjuwrRhUhd2sagQHKTxnVMy8HrWXZtwCjcAL3ZZVND2R",
  "key13": "579u8C9ay5BYWkwspwektmomDNZ8irNsjVD5odFVq6aXhphAwqQeqHXNWZTU6nJpUYyezq1SQF9MHLcd9wYr93yA",
  "key14": "46eAzWmDKRungyghqjh91DnfdkBTZG4z4bH8P12dmZYXNWyvdNw7GDFuv8cGKXmRpfertLRJPt7NRfScp9RiMv1S",
  "key15": "3eLp6rLx6PDRqmrv23cJYy7Kc5pcSQm8AQqd7VVrsnHqFx4Qk8BW2VMVjDH7DwscEQtAqBspaPMhpq55si29VJFu",
  "key16": "5vqxCuZ6jyJN4W7jH6tZJVdCvczFrtLcQ9UqcZazY1WnesZn7zcfX75PzkXh7bKtdEbQrFhaXjuFqFyCuuAKnQrC",
  "key17": "2oZJr4e5qNFnfGAQNQe5cmHGpMem6th4xyq6kqZymbAtfApTz4WZwKNZ9njcGfkBM9GJF7P2fwsfDAxXepWvQZYR",
  "key18": "3rZ4T7pL3LJba6XmBycqNLDx4bphFJw8jiSZs7PrUJSPkS4CmTJa1jtaRK5kLX3h9QYFg5V6o2r22bbP81KKNqvH",
  "key19": "5KQtKAa6ZQsqsHjpKzLxNwK3qt8nBmVEhVxcfAscCGXpSQF5uCyGLkerhZzmU4pgEeJGxjZ6eh7v4gnqGJ3PEcFp",
  "key20": "2PAMVcGksPEuqPV1gAQt78KzEbTxxPDJQ5YE8tukHGQ4tbU8N1ia2i8L6UFPNzMnYDtN8aFULsoPqSmpA8fBBqs",
  "key21": "48ZNDZxjk4dqcQv9UQ2cfsH7zu4EfaokCKJ1R4a6TLxXcxMeQE22tkz6CjtR6RtfQ4fLwuCBRKzTWgpkeLNK9kDo",
  "key22": "MKAJ7jbUn3pvCnkfCsMXzPufA94bbAwH9u6vH3qSrTsCgwiyidyZt8yqe8gevwTNBY1LGyvgdt9FsrkZEaLLHDL",
  "key23": "3GLKym8V7W938kvmBXCqVFWbgbdMV66VvjGQdEAvTXE2TqQnBHrFoZkRMKXw2iY41ZY88drgA11oBJmwzg9Tu68s",
  "key24": "QJPejN8sDDsv2Enpt7kyvWFPEy4UoPDFUoALsW4SL57V4oUXPCKx8JsyY6o9Y8fz1gHRWzjJpq9mMQNGkHTaiEQ",
  "key25": "6Bn7upSSqdNzCuawMRaoWZYwMK7wHHyhWx11XPHdE1dHurjKjBVigwDz2bxfPWH3rsWir4X1AkXuhBr17XpkhdV",
  "key26": "2Jhw99FbHiFfS21FCrzeeqivhW8ccj4BN7erFVEQmTHu8VJju4XR93j6eDwTQ8p6kTXoWbGbcCEoojQgJdsgGBD6",
  "key27": "2jV97azYbBZZt42dmd3kAqusSYVeZJQoym6yqzH8UgPxfKBk7eXkDXoqdd1A6xsBYvKH68DnqeS4HEaiaxT5Roea",
  "key28": "6mjo1fGdC1d9UvzekTB5dnyF2r4oLkcN3kruNMdcy7Ez8JNk9hUJdsY9Mm65Typ9xkMuQKHkidK7MUMfs75dhiH",
  "key29": "4obqDmm2cy41umbku2PgL9KazTfiMoCtXUQDMszC4zhiXYDPG9TsK8sEV1UKutybLGzkPu4jagr6A6rZvQ5n6M6m",
  "key30": "Saz9ATNbd6tuWG1pF6q4GtkSGNC64bg3g6Q6mU5T7Zr7giXnmDiJMc68DCDwthByheLf9bb5tcg1scAyVM39MJb",
  "key31": "3G1o5dASihHcM2BkvT2ttew56YEK5fLJQPvA5fWm1E6nbsai9gMVkbmX4Grzx9KwFMcwDLVWHvtyQYoe5HYM3CyH",
  "key32": "4z7HstQoD3tsJ9vxHR3EP2hvTDP4tDZqe39iGthnkHgCF4H1xnrL5Ldvefp9PPqCUTQpbtyeeKuG42CX221T2F1B",
  "key33": "3X2MwZqLy8M11ccY22mqUw8NHTzG3uLjrY3MkCBC4UbZ9CPDw4RpjCZjE62PSzXpwGDRvsqfXaSCZYvKhSDsUJFQ",
  "key34": "6t8XzB8dn7BzeT1XmyXrReC4JjsGwv8ATE8o7vJSujZAG8ChkehoMbY4LuiLF2nTqDdNsedM5jdJD6gNmgKkGTv",
  "key35": "3AA5S6VdzeSAD2pu1ebJqESMRqv2nXTT8EDCg7uDL5jygpmc2o42PpVpEi9RPrVha1a4XdEf9WRYYRMSPQ4fY5hk",
  "key36": "2pKpXgCPSV5zx4DfKKJUV7ffWBYPLCRjPD3YowhbANe357Gkvv3vk3P5HhUymcbeha4F8SY72zdzmw2MACDYaZ6M",
  "key37": "5Ds2h2xfjThVbbSLETem5QCJpoo5c2hYA3nsb7Mv7sorAF1CWHxsKyz9H9pR37B7f9yGSqTiDc54sbqob53b2zvd",
  "key38": "39S1KQDAKzsEFGjjTWYNQkahmz3tWdYe6qY6c5RF1BRbm1KuWYqoxA2xuuyFFUEuvxn2pPdhftGWSxHTbf6eNyTz",
  "key39": "2MuxAdFtgkXYmQAGwCMBKvopXQR6AwMkjLgzVCdEmraQTz4kmSdD3Edced4w2CThLuw1QzB3PLWf8SpgYnK2mssM",
  "key40": "3cZzpGzB3hoMAAhPBwu42fwR36HJwcoueNLTvj73mqvKMT1vMbQqgThKw3F6JLYW6GaJqkYzE8NpV72dbdowsaBy",
  "key41": "5GuaAquTaRBRU5mdfH2nynWLx8qxUtHg3EKbpwmhuShhpyWGSWvousM4P1n3SANFKTweisWiunAac9xdBXNLRStd",
  "key42": "29cKKYzJ4vyAUTUZtu2ymY8fC1cgRB3N5XQwtn669xK4MobQSMwGtznWgmqYYQ1CbcQqXUwc6N4S5EtCX1RYF6J6",
  "key43": "j5oXgcifjZcpZ3DxFwauCqifYBxAp9xJ7aTixFfx9xR7Q7sU8pFQ5whytm3do9JQKeYA5FLWKZEnwr93x5radTe",
  "key44": "5VswC24z7Egwk6P7RKrnKn6a8aTgoj1j87Dd3zFPVZfC56966f8M7SwBCYdm76MbsfrkWBUV4ExR8qN3zkm7wQMR"
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
