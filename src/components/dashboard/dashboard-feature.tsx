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
    "5x37ZCWX9PrNGnEUkgesHM8zc7irc3NLVMpDyPTv8Tkt6xVZTViMpWeDvsQLjDkGP1fPou5ZFTBxkYeMJPCFuXRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MjVN8NFK2kvDe324hC7aGaB953GQPhUzD2xKs112fE5y7XCex7SsSKjFJNs1b64qTZXc7vyUiKPia5E5YC4PkzN",
  "key1": "3XEVGK9nj28cwRC2Z2Lefot2FuVqhf1dXfzByDaBTuKF87Ng3mDtsjmwHp2Uze7vJ4kxfsfHNrx5R3fGQvsQtrc6",
  "key2": "CBT9LPgWwz7Z6ViZxXt1XTdwnxe9sKGDHVVYTH64Rs64oMWyzAEnsLmyLh4xZKvmfhNbRruTiiqgw23XKFYzNd2",
  "key3": "4swn2xfTYbu1g59r8gcMVFMm6VckLZmkw1JfDhuarYeVwfLePD5b8EfnYjN7AoR8S2UrTnCShF5YppqsFXQ69ghP",
  "key4": "rUJR9vfVqorx8PSb64AAdM3QEgAsf4tPpVRioZCgCrM1f5jh2dXMvp2ZArmvmjYaTUi3jt3pwBvrJe2MPATb378",
  "key5": "4zomqWBNr1ZUjJdfYcCqzA4GZpppY3tjpU9kKJo6ggmTussFfku3ZE3VXToXVWNZRDQoD8Cmv5B1KyTs9JFvT4sG",
  "key6": "52cvNZ37EvCQhKZM45ah58sZbKBZuWyuwZ8gSwMyuN3yNHSaNCad2pU9PnBpbxnrF2yCZbx93iXsJa4KcQiRdVui",
  "key7": "3ZQyGjzVwDXkFgEKQBB6LmQSMq23LySV5Q3LD7XxavhvA59K2JGMRo6GrpDK79KYRc2xvYQdvKJj7X7FcYHVhd8t",
  "key8": "zefChY9cDJs4PeLXuEAJyV9ekk2kv4NuxTyRaJE3p3MbpKzvr14wCTUHDFmJxM4XiXzb1vsT8ZH2bgVK4vPwFcp",
  "key9": "VPVB224PKWopnRyDqcQUVLRh9PDJk5DrV34r7PLJoKFSbCTjKFyEhVitaZzuAHEcMC9dpyYMXbd2FFVB7DFSV7U",
  "key10": "67Z2qSyNrgZ55nJfDcksXDb65SzqkcwbHoZqLRy31fBJQQzAeQdmw3nHBHJcjyfgjdB4c6QzJQxLzLVFfer7oz5d",
  "key11": "3SWgXuiSGnyprLUyaqSwmfcooH2Q9dV2uRGZ2xH8Un1XZzTF3oPJNKW1qo57JvvhhU97oJSwCUqcgF66Lxia6e3J",
  "key12": "3Kaohxd9UbccTCKUNfWLE3pvDKj3c36ecguuLy2Rcj7ET6SWPwhm5Zx2dpktTLRgzLpyAXcyrrLUgoUvXJ6ise4G",
  "key13": "33U3GtE1MR81DjWM2nCtFZRTJA6VGDDD7QmPJRX6Y1ubWX1usTb3UAcEgACSR9rdTqUG6GBicWcnTjaYyx3a39vw",
  "key14": "43dAdBPYaCAoScFjfUm78ErhSi2Yir6xdkBnnWSEh8mXoc2KLGfZU5Z2J7LpN68JfHqmPpria643R3oG7jtcbMyA",
  "key15": "4RQzR3A8tUFizpoW6Q8fxaarAzFWKu3cqNEuAxxnucCrEuYK7DNNKZhrVrP8zJrc8EGT2V6edUJyytoSeUPrkYTf",
  "key16": "4Cwv56nda3MVBLRefS2UTmDusUuzQqtMDwDsLNoSc7bUFUo4jQB1YYXoAnAyMFUpMjHfPZeSfTS8VM96DkYusXGH",
  "key17": "5tXqENnoXTQdrfhL7j7ihnWke5sUkjbSRV5bxga6rtv8ZefH88s6H8DW2XqooxRu6nkLUiHZBALfPM3vQRhNND4o",
  "key18": "RRNQF7zfvfZBUdwGyaQmoS4YrD3FbB71jFK5HVJZEg79PUQW6kdErMc4DubFEgxoizq9kxfLRDNCKX8r5vwVz4S",
  "key19": "2BaAD4CGPffdNMqQQ6vJ5C1z6T3vs214kg91F71iF78HCc8BUk4Dvgj9onzdHSqKuoYrYXBPTcNHcfifdtA9UUKU",
  "key20": "1Cbj4LYzQRX3j2KqxrUvQ7PRAnrieqsfQtNniWG9GG7yax6E5No89FwUvgNDQUyJyxBjqHFkKJRTLeA3XBtQY8N",
  "key21": "3U7VXtFsaAfGAuCsRue6pYW12vK1zrNxfsVhAyVJwHqZvfEsrRckJJjgARwwfEm6zyXaGG1Re16Nxv3J995MWv9S",
  "key22": "48sepDd8uKjQ2wBja8CLXiYbB3T2ui3PxzVqQDFHbVAkPwnyi9zVWCeAMhsuvUYAzjne6djhhMuugTGXguoDZhee",
  "key23": "4akZGEsuMoMj3G7Z7YsV1rFtcXArT7qGbuquWkXFScLAoWeaCH2499FFBPaKNbXHhwAHTnJ7Y8atww9NmfVj3aef",
  "key24": "5Uv3RzCjmdan7BWDbxzmq9q5H36qkAPzrEMzEGXV6LRL6iKaHBU2rVYXj2qWrQ85hdYnLsHDbaNneXuNwgcSrmLe",
  "key25": "8hkRu163MDGZZkEQDxyJ4tr55jhzocexeEDGf1Up5Xg7nJ61UYak3DsZfYMCvwoXmYJK8oxtpxES4M5mTWDCV7B",
  "key26": "5zsdJtniTsDjUWoyUEefdEesQyi5SqP2bCTTMY3u9FPKRh5fHGDhzr6FaMxA16h7abZLECo4bQreJTL9zsLCdxLt",
  "key27": "2sCUCn5LDwfZutXftcaAdnBKzGj4NhFFd33x4i8BvaWdYcNqtjP6GZqWTkpQj8bZhf7ZArLEnCRRMP6iNBMG43Rf"
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
