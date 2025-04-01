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
    "4P31VE2cGDUZxmCz6xipZWUki4UVydGe5DWSAqLYBsELiPqfih3aGQt1f4XaP38DMfR7E3YvpuwJitjdG378yUnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XFtd7VsxX7YWrn4Wq81rZGMvpSE8LFYHQ5Csh5hBGSmdGydLNNfWBz6EFbRXLgXMXRdeLUw7Yh2QTZDKFRo4D2m",
  "key1": "sArT3FcLUX5EENhcdf3pKiL4PF3MTqpp46xb9AnYQo9azpH2KhagnWMrPUmNMYGFCvVbN68eS9sH7zsMNu2HCwC",
  "key2": "4FySeWKt9MU6cTZcqbtrjBdq1iKkwjvC2pnMBCSrYx1ptasvbbgNBHtpeAqYANAs9Sk5RtJaYq1WiuGVfguvfYWx",
  "key3": "fUc3BhpXtmUfMqXLeXbUJXT3UDK52Pm6hD3FFAHYLaSktWRAgpQ7u1uUjsrj3Qjfk63y3Lk8sDvb6rMEuvaAtQQ",
  "key4": "3wyiKTjcPmfjysaZ5ij6ZkztfeBAj5Xzxr5wKNuiKWqkC8cAwLHfm3yztDDV5BCvoUsz1nWEiYRbUNDe9xw77C4c",
  "key5": "2vXibpUxNnW3SWfqbsN2RTki19JVj2UFUDku466ZjGp1ZemmBhjpZnyDMjTy8ZpJyPWq3MmJYNRJwDebAHNtvmqG",
  "key6": "4fvFFQoR1xW5Z5MKS5uq8uHfyrmHS2bqejGHjKUvW188877GpPcDRK93RbKqGR3564A9ugaxK5J6ojRufRpLszid",
  "key7": "2jyNXHtUCqnSJGbXEa88m5sewFNbUoQg6wLFAWxpG59XZrpfQeAe14ntxtFhGoEN6SqQqNAqfFMhdRJy6odQT12H",
  "key8": "23VSMk1Wcv47nnV6ZFYMd7PiH1dX8bX6enx3cf4VxWUkNmvGksNkYSEiigiidBrSvEVtptkgucvsMK3Y7EC6sQGA",
  "key9": "4JUjETjrby1bMsv4m7okkvWixwFG8VEFiFwKBKQCiRzpgS67pxvhyWEo16KCf3bSJRdJzLAjEQ52i5GCwLfQYEkm",
  "key10": "5iDoLGkRctsi8o5UmtYPNxN3cq4TXZwmp7G4AfdajJ4sfDuhJo6XQTYACvJa9PvaAA11W4DoCcdJcFLrB3h5Qg1J",
  "key11": "2ab1nbmjFwex2DoMbs15Brqr37bCmo12QSEaM5CvJ3Vq9ABg8jx5hev1YhaNoQiNexZ5Bm8feeMG8Qr9QFviFgFz",
  "key12": "2D8ktkxW1ExMaR21cEzgZG8aYCcMvAyMKp4Wi1NNRmX2GNbEphw3ZYhhGMF4KMEtFZbS8de5feSjPGohfNsjP2PT",
  "key13": "3MV6pvp68L3t7Xrjn75A1CX2QNuu6kyEFpJpieuQuLCpLUWw7mEJt2NypLvq19mSJjkbCuDv9zxTzCTvVFuHoCup",
  "key14": "5Y6Rv23c13v5YWFa6PkD2gjgdNo3hsUeWFYfb4pYq1F38Cmag9Utw6L6jtiuagjrAijELVFr2bQG2AuZ5nabEuzE",
  "key15": "35Wt1fhfcAAc1jURkyeYsYViZoRLCvxB99GhidCsMaSCgEoRSTGdcutM8ucYkhmAZMftqYVKn19FbnzSWLyd99Qf",
  "key16": "2JWMBBmuvM5f6mzjb4X45JqnGpKLiDD6YVAxJecBDCWK9BhvTqbsPEyBtwX7LgR8E3C1kMN41a3rbrnUaSALpv4Z",
  "key17": "3hfTNixGH91jxbV4aBXGtXuM9PJt4hW8uxgYTEc7gdoczpKAjNsax9DT8XpoVKynMWMsnmM9PYDvwRj7bYrN8KSL",
  "key18": "5UgTYJABepBeuaz6hRgphEUeCfLEge8q4gBkVw6yLTN27GQjqXkcQ2DAQtTBw97ifzxS3ETczYNM6V8avWaR66jM",
  "key19": "2nowTQRHGLLd6ob5MqATiM6252Lv6HmbXVk95qLGdwXVjkBuTjg9F5i1jwew2uYebZknWWofY6APHPzNtKQs77pu",
  "key20": "5zsAcLzScTBsZWzdSESehbG9pg3goD4SihCcyAWTmiRHsJrRyKEwQsWVzw8swLgQugwLS4qw6fJbiR1EBm2p22a",
  "key21": "3kNQ8v9cXJLt7kwuMxMPDFWcSqqR2yE7PPfxJ1D7ZdyxXBsGsmCM1T85UE1YyH2pmkCqVJK9cvqWtavXUcuqSbrm",
  "key22": "3CSXaYArmqjLUp22qfCAtAsjbrfYNaDzkeJQX7TnSEz1v3atd3MBcuDxSyaQJaEVUKyFhRzhqJMSRbDL4xA8fdii",
  "key23": "2VRnAqUFiXep6PB4vSqJzrJU3ZC8KB61EzY9Gmj2TR7wS62RbaLp5wjzR5zjSnxAn5FGUZGS3ijif4BogG6kSHuR",
  "key24": "54QntanFRsc6enbRsu1US8aEZVsjSQJAFVzm4vA56Y1hG1p6wGMTyCyNNVpbDSe78qZUzc3WBKVjeT3Ctzy92Amg",
  "key25": "3vSJGPzzwTeMYQ3JyBdWv4TSUoUfYbZhvq8Mre536BQNj3RrvVkvsQNDq51HaBNvv8VBrZPP6QMb1GcL3JHd76iX",
  "key26": "5dMyDWyfVHvnKWZyCeNDcztkBNWbwoewowFMjH8YrwmmLW11sxcz3MST62sV7hG1mGN1XvWqH8tAdZM7QkBGvfon"
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
