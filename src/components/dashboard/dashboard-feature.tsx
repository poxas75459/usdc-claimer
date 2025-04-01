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
    "4tVngZWhNBUSg37rnYy9nSh862ir7Z11ws54gyHuCJaRWjrJDuTo4C4h6nnmvQiHfzyuBnzzKptNvXvA9Mpbb7oY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JaUpwBy5spZJrH1xJBMpis5WEn9orqSvaw7tJToUf4tyEu29pMHhDYTyCmM8WwVGch65LsGVfNU5HdqasDhphoK",
  "key1": "3vrHpFeSEucfcC9rvbz48iAWpqGridVAErf4ZSVt2DTkHAn4Fnj8sStynvGEXAMTTMgQR9HiZWzjntjZxjgBZcNA",
  "key2": "qGVJK2DoLpEdJkot8bvxBzwMvj9dbitHo899715Qn9cu9iBHhEevgSxv2LEkmKxqpTM3j6BJ7BASWZXCCS1mkMs",
  "key3": "33sRCzA5cgjM1UnL2pWLpUYAwW442Ur8wFMo6scw8NqGEQDMh39vbDaTgR77rxeabCgWqp3o9HS8ybTC4VWjuWf2",
  "key4": "B6T6t898avnq7DsNy655Fyh7ExGQ1U8y4WibBT7zH31wEEJRXoMEDSMF25oyE3CNk4k9zY3Ca49xRurub2WaSmK",
  "key5": "4oF3wrFKrENzC2SgoxAN2hwbju1st3p1hk8GSw9ugE6FHgXWjEjaSp4nZajNR5dsfnVERp56qg3iGQSkhNkTQMVG",
  "key6": "67dGAcEZkHguqpQgJ1aHbrjd55nDQ3zjSrB7rtihd8ftTqJcdC4z4sumUmQHytc8aZvHmXavUyyAT2oWXaXYnY5D",
  "key7": "4thvUym2QVDR61SVRzVcwUH9gd8tDkTDuzk5VotjLzBcCvAzfRPq4jZ7HDsnVs3m2pPQ21upN3m6kLo2m19HHE8z",
  "key8": "3BeDrR5Thjz1VYYxutEJRsyb7h2SpB2Y1XKgyCLGjXEXGx4Jsq33o39DUz1pA8hvNv21HnnzQ7hinYQsCz3kSyL5",
  "key9": "2WYY97LMh1QbstwMmWkpWbTbXaFXdqvBtS1d8u5MDraq3DFJiXsAtVAwYEwE3guLVh2HGssPQL936sDvHCPqN3m5",
  "key10": "4Dh2Sn1geVmDVe2qPQezR2HTqCBj2NxegXUhp5BRuoouPotXNNdaJGFsBHaPSqu8c7XrDcKvSWy9e2pVAXp7hP3E",
  "key11": "5AawGgAuDmNEav1SheNDihGp8JJEbmZ9eUQkt1nxdiHp9cVvgcAfxH4qpSABPQAYUG3CUqAuzCkU7gFsxYTeyKJ8",
  "key12": "5Y5snRriDEuAwPoTB2Hzq9TYKyyPncoxFo8boodtgndDK3vdHtGhtyqsVh6JdAno9mYQuDpmGfNjjU7rcWtXaG8k",
  "key13": "E37cjhBfPBF48KJRXE8Vh31YQmMC49yfGgzvHcQ6hvWH68heCC8TZRhTnZoFWC5qcK7Vaad2Xrn3t4iXdLm16ZC",
  "key14": "2nn5N4GxanTRosuJchhzprsxKaJ2m9fSYjCeBDx7H3c9Cztne1iM59poVv7xp6A2Gx726Z5WSDAMiZZGhJfgwsVt",
  "key15": "32BhAHL1kFkv7TAFFLLYpXUq3CfwsBxjrPvkQNXaokMwH6xnh4Pn4XhRyYMo1pkc4XyaPVQX44Ut6NFDUtoo66Sx",
  "key16": "3P5ze8apGr2UUWBfGN5baBVtbQDz2oWiSd76Zdt7UPz6kp2u3X6derM2LKsKSRyqGSJDvqkyUzkpQvoJ1xoepuQo",
  "key17": "4FVfnvpAz8xbgJvuJ1CfvirWnG3cqcmJB896nFp8Dfg6136nRmBsLdQStT16wS5tvVjbLYK4G9THUH3z7iMKEx1c",
  "key18": "2wj8uq9ACsEkgTzTxtu3fmnNxQLX6ohmbS3iiQ4bmNXSuzXkguwdjHXjxTyhUkJrkEXj9UapYxJm9s1UPxayJShb",
  "key19": "4iNJLCkir6ScLgw9PdZ1ZUqJrPZKsFxQ4RyQkQYjRbrte13w1aYaunZjQ7mVsP4vYPCUgN5BEK9dQcBnhuDuuy21",
  "key20": "2k5RVUhHAxjrLWBN48P8zMZMRV7NzUbRG9S7kutZaDEpCF1KBKvwsF6HTUVr7ggRopK5yvE6VYEWDAozLpasVciu",
  "key21": "n25C7ciPoLHmWvepu6byW5AGcnH229fBBBVm5SBEHj6ekuvmY2SqfduDxPqSujp2TwPeYKW2XcxkynBxmxaLtuZ",
  "key22": "LjCVaYVjMxz2dSJp9ZggAEwTs5yssFP3PkvcgZZiKYRS5dvUZSTBr6Se5fHvFkdrCb478RW7cnprcUE4V3cdTy1",
  "key23": "59mRRSwwuoP8DG6T79RbuTrcBPY3yQ9WcDW1KrzKAs9fvwYh8uLyBLfaWUn3Bw8EE7CpiwCsfRT2rm3KKti9NmZm",
  "key24": "44rgqiLACVrgShkvUdJ7vifoCFbQP8fS3EJA6W6oCN1TLaYwnWWVggZwLsynwcTwM5TrMbNNHj287s8SjNgWoKKK",
  "key25": "rLU3oN7JY37s1qUU7A8SC7ALV4iL4M6hoNXYSNcPGD7pBPM1EzaccgmeRoodYCzoaLGr7gSGty9HsepyKJ2mU2Y",
  "key26": "4rpfWmoVPqrqBH7ZH5PMGr96jiYunTHouTC1dN6nYMdyyaFEkAvswS9fg8vZNHLE5FNnv7r1hFqiQJR3SLPT4XCm",
  "key27": "5fNp195gdXZYUMUukLYnXBn3ULn4PiBLCZetuGYVrXgkms6cFzVtUWkPKJ8G6uWLcbw6Z9qHoDnwTnUG2uYSZ2Uw",
  "key28": "w4ARyZxooXyHLjhSiqvSW5wiCFGr6QBys247F6vxKDNHWivLzK3hcAR9BcxdVTWMpFPfm2qz1wEqXtK6XMo5t6D"
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
