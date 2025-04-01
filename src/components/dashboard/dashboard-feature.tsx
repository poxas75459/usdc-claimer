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
    "2D6L3pBBMy8rBvaN8xQuiXGKDTyoF5tAFrTnBTKCU2M4yWjpbUdsJqZvMT7M9gWtX4EMvyJEiJNownmnF6izC1pB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MntDbo1aoaJAsmQiNMvitbJ7d3T5VrQfEe39xXRa9s8dV2uNQon88a1rrHZic9hZxfjUba9J44nTgNsZVzY9i29",
  "key1": "32JKoRQZ1e9HRZFar5nqqbPh8k4zt9cRtMMhcR5tmmVYjWPG6thQf4ufhSyLXTN9H9pTUXQQMKsHtKWpy4DWyKi",
  "key2": "4SQ6f2uY29d3Bv8Sq7jGdYtWAZMJqeHX4gy598sAMWqahMsvs46VQfPx44QHtYxdFN1ZuvHTXnM1swkVx28tF81c",
  "key3": "2UnBt4igtJofSRKFgkZtanj1cs8oykdKivPSSJnWq8w3wKAFUCwTYXCb6Z8VJTF3Qz54cKPYjSjohT7wcTSNrNqo",
  "key4": "5Lw6Gfos9kEqKKJGxUBmxT62XywoifE49yTABXrPzJAyj2u5xBG3u2eW6ZJYzouhubvoYrjm8vQczkDyhwWNQdpn",
  "key5": "4AktixtvuWwNNRZqEnrpACPTfQX7os9uwyim48muNGtYzVMgrJ8wiZ5esX5wPPnqoiX2SiSHqmGex1yBZCZfxqnk",
  "key6": "5gmBR6yNHhigBcdu8FwapKsmrxXoFGa4NrvijaBoNKzAVFE5HtvioKmjX1BFRH4hEQKAQEjEpJg94fpmRXaWoK7U",
  "key7": "4NUQLhnWHhQpp2dutgEiQVjEunyofVS6Y8DofqqyEcwwW1KnUhDdzyZKHh7Pu3SpqaNL6wwNHtogWGZuAAGEo4Vj",
  "key8": "3DUjqBUpZnsa9MmXeXYdycbDnjmehQTpDmCUhCS2nZGcicocEzyn7skyDHX57WfuSpTbxQ7LSNRsGmpVZ1Qwv5BK",
  "key9": "LfJ6XhxdVP3Mbp4dH9ZNFVkFyoaNQR8jYiXPpgqSvoKwpJ6Na46Yiwkd9ADx8yb8iyBcY7DitX2XdXzkjCMiBSp",
  "key10": "cs9JHqj6WvYZbqHepLCwvcDkx7mRuCW9qkiFEn2YXPdyhmfdqEPYFTPV4mvTnWJYwSrETGVVW5EhFvk3f6pAwZ9",
  "key11": "36cgXygoMrJtmcDXRMeg3En8u1rnQv6uwPeVC7HiMYm67oURnH7dxtRbEXdEPvFc7i8o7wfYUuDhDXrNxu9bvMbK",
  "key12": "43Ah7TyNa7dA6LKWzxFrSa7HobhPknCpV4erWBmm7qtLpbVCoSgBsoHj6grkewJV2LQ9GwFX27TQC1ez8SRWhzPP",
  "key13": "5FEmppyF7xbnMTgQvyUefCAerL62mmpgJZbuMevEnkwLZMyMC1FWa8B7UXzj6GWHrqg2iUyYu4anYJGTUNpgWEam",
  "key14": "2m9HyysfodmhUCpGRpa53DgjuGF1Gm4NEG125WRPyM3kMpy2dGysFHjUnK2wNtovZRA9DABrhEJ49rb3riY6HpBV",
  "key15": "1Xyx7297evvXZuExud5xCDG4kuH52nXxZEDhr59gLvXR3w8DZzx5UVwgWzcVKBnUFgH4PDSWnarq1PEFoRXxbE9",
  "key16": "3zDui27RaUGJjSmA6n5LevXgAwiKuPHdzz5yFYGqEBazTELKo5793qxSg7QJhXcMTAPexdAxfmZu8dB16fWBJuj5",
  "key17": "2jd3dyAUxLmJ12hUJjiHxZtxSho2d7EjMeH4HowHJHg117aSaLkTejd5iGTXQqqq3qwsMAbGHFCTwhJyWVyVk33t",
  "key18": "4A27HAY8Xuc56Vzh1G8t7bdqzffWEgm1tDMmjEr84ZBYmJAJAD3wMbqyrfJpjfMucowa4A8VfZ8QSkfH1RjcE1fA",
  "key19": "3Ti8B3URqanhGXbkL6yxkqH8E8rT2VUKdbkrSUNbo3JLXLhyij5tB7EWZPyWJikm4MrvuAwLpqbDZYbi7xa4PU5h",
  "key20": "5CuWaqbi2yqUSFpQF91whYisgLbfaeFZPBNtrLhjpiuCXCCShCaFf8XAhFNBftSn6fxawwBgYJJm7YLy2cvRaJ3q",
  "key21": "4sCkyh6Wp9F1wMuwbPhAk51PcTnbVBETVYDcmDVfN9dvC1GuJ3jEssddissJoJSArb7XRCnHcVrc1AwCrzPhoCxq",
  "key22": "2AXfZ2ctCCi4tvg2WvPWjDFyqeMGejTrvLE7Tzj6Ahay1TSBCUJ2MJa4DLyqtv2uZRrw4A8JkJvo9M3sHZhGRMco",
  "key23": "2k7UPJYB6f9ho8cuNrE7dQr8GHoM9UqoZjgapt31FkW3u2qR2LpkrFi3cFugSjyydiGrppSH5vGd9dGqS87kqHvK",
  "key24": "2P5xKuTm1i5NvowSoW2KLczjpKgGjqhndMctyW1BmRaqU7qLRNc2YE1VGZSXkYCukb1r1dwUW49pdM1QYCTkMsvL",
  "key25": "5uYFe1m7Mt5iRcfD68jmzJJ4MLbQCaQnwriekyzd15aeVDhkdcEbXVaXQ7f96WhTm2W96rbQkNiRVjY4xUj8TG19"
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
