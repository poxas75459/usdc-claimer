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
    "5K2LATzUEritZvuJR9Ftxo5uDwqCb1ad4EDLRhXtoPFo3X5wPtsy9hWySEM4xbr2PcuySK4KcZtJN2KsMpQmv6eV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dz3mSYjLg325voBAN1b985L1X9hNneGybvVRGtFQaZ7Wrk5iUtxdLSVXnPBtQHDtaELtX42d5PMSaGUQnoBzhFx",
  "key1": "2Zu9rbsPyFibW1i8iw7hmugkY4XwSyKhdCMGf8UpoM2t8awL2zJhJFac3KYwf6GzMUfuYTETZTcHgpDsaJ47GxrF",
  "key2": "4khyYK4ZTTapehiofoNch8tEx1VmZXXaSxZb1MotzTseSsrgCRVkU9oKjgvE4ubpdwY1RgqBNd3nfFyC87AbirUD",
  "key3": "E6Yj2JAPcVyLS5noqinT7JTQaFGLYFGQCUU7XRvxdbqMUhPJWTvwer7kqZzk1DdhVvS1yZYJsZHZXbyBvpNzdYW",
  "key4": "3iSJG7VQooGJqF3CqDWqWEc8EzzH6a48WRSy3KiT38eBkJ5ACv5bP8wnA7ifNen5ANSjtdNvkVSfB9F1hW47NELx",
  "key5": "3Cxg5M8qr1YA37UCytGrUoVubejj8Fu4CdhNEkEPZFxeFdySCxmucKyPtCBRsvgDosM3CD2pFDnrwtRcHTNr3AZW",
  "key6": "2hP3LEjddd44By4RAUY1fjnuVtzeVw7QGKCgjU6tbJnYfafrEaewAe8tz44r94x65ov1JfPuSrycDwRAk17nMJch",
  "key7": "292kErZRtNy58xog7vqLTgdCbTbVyPqN2Z2hRYnEVsHJkWemQcBLxnj6ZzE5Hgga41iWDKMMUcptibaEPxEAhRb1",
  "key8": "4HDEyEbQUTLqEnQNBJ7X4QZagVGsNnqjkQcqMuBSRzvSWNodBEbhuCT4xQXAW2zZs7eVLPKPLE9v45XqrGZoZDmc",
  "key9": "3EBpZoy3YXX7b5FzACLkTQfZCu4Nw4eHFN3Yd65gSdzmtiF1CrvvU2eVESeU1TJwgbCuB2mmvD17anWMwLBmLQaQ",
  "key10": "AM2d6oFkGgaoJ8kTxZn8PPMrDJZQ6s47Bbw5AWW1pM9mbisbiBTD15cNFNkq85RDnr3bGq6esTD2zGT4UihdjH5",
  "key11": "2LYSUmuDBDjd2jzPAK1TihVQgeaZ86BPXisyExCZ8CHzerGVn1RMg8bySTMgQvjhVJrThX2bBPoXZikMPQueXguq",
  "key12": "5P8RmL39BybvSNtU3HWvwhhSL8adiDgAbj1HKTCKmkqMpJcSAV2sLEy9nGZszP7aA43twJh6dc4q6Uok6jzJEDM3",
  "key13": "2csgw5SqyFuxBy24oVHaf3j152QhtW2q2TPDJgDG8mDFkjms6XvodVM2F3GebdCnTJqKu6tqQhWV3XBXvqibW1Tg",
  "key14": "4jTyRGDwYnwqgMQoHNyzeiNM9hBRswW5ZPeg7bwrr1PdX7P13zNRPLGPFpu7DWBWCQwCu1zgdPACv83rzx3Sf8mA",
  "key15": "5dT7A2y2RjxRDdm4BieifbQpE8UvJXdWJuBX7wHg8pNuoeXD5cSqRW5ysYn1h4JJxW6GgC8MvjKuBKt96xwsR1Pt",
  "key16": "5EmKNtumM9CLnjparSD63cL4HYnvxZJNoBwKrTbbCaKDUcbYPBQBgLj2KBzsoiSyXj5TeRov1BM86PNvkvF1fF4r",
  "key17": "3LrVCgoAov1Y9J7LgNtffedNxariZkanXzQQCMmS9Hyk3xxSqYv8uTEVPy6JAvZTgP7RHyDrRZz8qZtVT9CHikmE",
  "key18": "5W5rYGHSV4vmLAHQXepgxyPbLdCiZQhmvfjMJqBMdhpr3XJyZwhGdUNhXZALD4fCJMne432P6eXpz1yKYhnKFSk9",
  "key19": "26rKDo392u6MHRnGS3Q5NHVRUjoU8zyysZU182YL3U7ksNwyGDY6Qhfqh5y1eXH7jmg4UWYaCBbwvAHC2AS8fpB2",
  "key20": "vxsRvsLCK2GkzX5Sy28x83jkasjiWMRaTdRh553tdECuE3PAiUaphRUXyxehAb8Z8uaPmCc1oES32s4n9cmZudi",
  "key21": "2E5kH6fYtg9fWus5BghNTKS3dTr1nsonR7KUyWPARzhnXSWkju8hMjPecZqJBLeW95rAoCTpaG5mu2yu4tcgD8Xd",
  "key22": "ZZ6KaJdsiKk8hCNgBu5NKPc5Qjr9h3jBC7ouYGCEiEw7xgRU1UTHkg9t4rW1yDmPNye1PhTyEWeinhSrVKdeF5F",
  "key23": "2SHWoGLUf7wNY2Y4fMSCinRk4TGonMA2oj9WCihxjpqcWCN79ZZHtZ1PTFUQEirNDhtYo8UAgPK4ADcEppdAPtBV",
  "key24": "3hAqisnaP6ZyP7NHqTGUPzfrh4vzCBdpm5We6PZSVZZtubuNuZmvbu5DK3FLpr3BfmgWRJWiWSuWjaSi71szFtZu",
  "key25": "2d9pc8FtPKiJrANXMQ9GgEJDGBQNfGuq5EgTL1Z82xn7KodfwiYqPrjv2wX5fCnqrdjpdKatgWA8yRQcbsHVheUk",
  "key26": "jv2cPqdPXXebfSWf6cYieQVBzDUNdg3ssQheSiqzVs9vPhznUSR6QTi64yWffgvTKcUVvxXTzBoqXwnk5e9M1dr",
  "key27": "3DfnakPidSmTcqdYAGQ6Qe26JMNLtPMpyQqKCqTh5tM5eZgpzbJoZuxcBiEJRyTb1khSp1MDvntQKNL9giqw6uAq",
  "key28": "2XjUWnzNAAphWqBoeu793s8oQHnPU1DUdRkfzitbStuEXWGJBGqLpDrvKZ9bkhkzh6GEMGQ6cQkU8JDvEPEZoRiA",
  "key29": "JcsfxfAZQT2UmQ93Pf8CYJmtAonYDqwRmDAkPtnHzw5udhSYXuv9HfDUoEfLExxs3tcRQt7CQNR2QCa54DHVDDz",
  "key30": "2vjDUF35QcVP1aHGHiGya9JbxHfo4cg464e8nNbtVPgJvdBkfTcdNBxqkLX5ekgUwzzuFtwXnd9kAjxB1xmxKrKA",
  "key31": "KFz6L9p3bj3dQuKcrKarGjGB5XsnMYpu3gZyYBUTxagg2Uwj2w6TzbWcWnM8EnRtGTPjYi2e7skdYTCDhEqcdVg",
  "key32": "3WwQcSAwkmWQWAgB3pYQzy6B7DQfianqN9JEFV3FnVRLHKXrNoVstY6zrHQrGHbrdnGfnFGjKiEV5ixQuGrLLvCg",
  "key33": "PF6WrTuYiiJj47RciHUyox7MqD7b8qqaB3KS5CKrk4TtHbYqJhCoDzK1CjEoSH1yU2jq4FMsFH6Fh5tZt7BFHtk",
  "key34": "AaARoabiErbWQxKBcELZ1prF1ETvGdvtsdLg73ZWrLV4Lc7zZZodsJtcboLkmTwfCydL4HhAqsXWwEpTmszienj",
  "key35": "4qCCZhHGrATffqLzksQf8JLAbQ84FQ3XPKTkSH23CjdTdwZ6UGnX8etMa2shd6b3zNJDKSsMmWHxu7w4zygvEdus",
  "key36": "38cCeXypjkFAmw5kwgpD2bMFsMeGGE3qksjNa2dFNXxB3x232bBkbMutSEGtBpNXtGer5sD26kBDejxcS7rLMESh",
  "key37": "gme1gvPRCGezMUC7K8dPjo9dps56X6KZg7Dp9eNYVoH1KYkFbDVkrDfBoGtPCFWn7UTaW4NkZ2KUQcZAdfZAJa4",
  "key38": "5jPDnUDeZxvH194eFL47BmSP3vZMAaPdXhpLpac87omeptzwZBHH3nbvkc8mkyMfzpJTW8zDuBv5cNf9hC8giFMU",
  "key39": "AV2mum48djRtaGewkrNc6em7NuJzQUWY9qenk5SVMDdXw2Yuvam4TtSkodXgZ8KykXzUtqGut9ZeAvcoUJvyxnC",
  "key40": "4foFfzKtf8nD64bK4ptk1aYukdnqtcJLzBuk432ksbvMSNNKfe5pzW9kvoXp6RwBaG7yGGh9aBKTVyCKtx1M7VGj",
  "key41": "3cSEWConDsBjyMFnifbBCCkMC13Q2WWpJw7cgdFjuoLS7thvLhGBSfuqnFPRWHopVj4jF6G2K5oCGQ7SzCpjxEFr"
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
