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
    "5mLzdsRvF6FoNxppBL1WhXhhTPrHvCoTbtDroW9Xe6n364DcbyTPjcUXfmgiFHCUCeJck7irZFBpEyPP9F32pg2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JJU3MCPPTBfVCoGgMbLxWyqWx2RfEp2os6qGBFnpJ5GiqDaxdLqDtFdcakUVYvdnVUP8qZUtQiYniYb6qQUWgqR",
  "key1": "kKpopnetDXX8c7XPhBc1d5DP55gUVDNdD3f5DSVGdGHzPBfWqVj2oCRyaee39cS4MESeq6tMiDeFKM3QNSqNfjM",
  "key2": "4eQ8DwxtkMus3btzJkPFv2GtrX5ULcUxAmrKB2cuZuRinptKTb1nGEoCn7qvscEi7XNh2mT5TC4UcE1x6UL82JuM",
  "key3": "o9qwnk7CthXYoHQVuhi1ZjfkAdrbiDDUzw12EBC5TiXk8J4DyowKo765m6rCGphq1oNzbB935bwkQxo2MLMwe1Q",
  "key4": "3Bmr5iDVuizeTsxLz5jkFyst6EHDLbzpLwBeTWen9pEnC3yd9QPLuVsgAtnU11C3dtBdNFqJSX3gwVf2cq7QTsCB",
  "key5": "odygFeir9CVVCmrpoFcueECAp22Gy16Ve49WkNS2c1nkacaSuVctra4W1adYX8TAWMHoebf2uqwRjy1WCCupsMC",
  "key6": "FPkbnn8PCuk1uuaKuLYxxLvyL8oYHJ9t6cBnZzgEGas1ZD4G79P91VTiKPwnJgMgpYu5gPt3JBdqLZJpWtkGZuF",
  "key7": "4yUVPtT91nU5HBXCVPAkNkPD74tC6BmyrD393tf2T2oxFyeT45DfG9nE5qCSNC3xdiGx7Ve27qw9KFotzHLV28Ek",
  "key8": "64KBkXmB6L9eTWvUvmz8JRLXBv46RRA9yPWr49gYtQMedHrFfM3g8Xuv2jh2mZoUvETabCB2gwqkJZ8yh3XqzzDq",
  "key9": "4Cj1LzhG9fCiQUBwGu9DKQrMGet7sqts7qGroMuM2jfV845KQvV5r8Do5MZa4TeJFGweK4CTJmuQNDdRDkGhZk7W",
  "key10": "5t927XwNu64eq2FYskAGB45VkCTSTub7M3PfFFjQaBBQyvvuUVmq26Gt1F8foEsTw3jDs9V5ho9K5RUSpgEXd9BG",
  "key11": "4offHvUsze5ngi5y4MfMZ2wCFi78svQNwXKqZdFSGU39RRE5U5hqbRK3mYpQkxKYazfDZFiL4HJMZkvDf4aE1XWR",
  "key12": "22Ks4NW3juyAzgBVZ1jkrJBwJTgvpnZmNTbkrE4sTKckKyzMxwmKTazxP1RHnu6eX3D9KhG1aayyb3Xu74fr7n1m",
  "key13": "3fswcWnMg6psJ89WQw7yHoYr6AFZqcY9V86zg1ZVF8iAkqu5ZaixeCmbULmzanmkPUh5S2HGoW9D2x5ZEgJ9eyGD",
  "key14": "5Ueri49zMG9bbscQbMrbKqsHbYP8A47hiFDBFQZTHzADe946veFbSfPYMQ8PZjFvMQdfLohWdicUjMxq5LFXa9Wt",
  "key15": "5psXFF6BVNcbdUbMb34FjxawgY2iMyqAZk6iBKiiUwkvarD9oD3U7Mx5wZtwyF4cbRLgS9MTPm2mPKJFAmkH9KQe",
  "key16": "2UY7J25a7yHVoUqF8UnUiESabJyVaDJd7AuYcTDfcqtci9xJ44TnzimuhwW8aWZvefUjJY9Nu8Xej5GnH8RX1Jzb",
  "key17": "23bGjNbTUXW5wh7vHZSzTr1MeGEKqnnJi7Z1JWHtBVXsWTwZirW9SvFSjvyyaEHBy433dGyc3pYCtiK8ESf6sdQi",
  "key18": "2Z5QZFyi5ZdVjZAyyWThbAkXHTf1oZBQCHd5EnYW1cmjTTe8Y8nBqpiPBnHJmWjqdd5P3GFszek26niC49TPJQYa",
  "key19": "2UqDKvrRDbJP11UBPphwGkjqL7RHaGFaUhAFUHPSgzDfDfLkQqrhQMbQHDH6F2UkxuWXfEjfi8iZZ114rGu4jRx9",
  "key20": "5rWSJ7GF98FhEyMrGaqgmwsTPDwYmeqbTY7qnQq5EzbMKaPiibHFr358bWQBHzR3MzzSzzA688aHCfg7DaseDdPv",
  "key21": "3UbRJNUKahT4TbZNURiPrsTC6fe7sFCM7icXyvevrmZ1y8E5BGEdFAmooccxz4HUUFKyj3fv5QzUXLKDQZq1qn4q",
  "key22": "piYk3hqFDiHvdbxbQjQv6a1HykkT29tJXDR9yRhAq4w7HZdY3hQQCDuwmmKKcuHYU591LSwG7Kt7GhjP4oEYhe3",
  "key23": "3djJ89JzZhXsHCpzHXnzkS1L2KfpWU7GotobH42oEB1igVghA1Z1igi8PeEQ6XVmhM4rsgoPd9T5iTvXpjSRnXd9",
  "key24": "4YgtMn5tfUxBdkHZHceoWV4U3cd63W3vHRptH6CaU26aqYj5rFksf9KTbprL3PoPPTwJ4WzrK6xTK95cRcTAyqhP",
  "key25": "FDnfUgYZutRwyZuofYZrYUTQUN2SqE7cupboTUWC2JZJufMjeHAgzoVg6q1F3GTzCKk353Xbb9wVdYkQmZ6R5hV",
  "key26": "3MMSihFtrWM3fHhN5AW9mxLa8jJPsU2irxeSWUrwbXZSsQ6knQks6mYeJpcedHzha9dWW9At8QTkiv1BkJ9q7G9z",
  "key27": "35sfham1krrSDzEL6kfsbs7LA71MVUK5GYi4ENrJeJ4fVbD2vZUBqhHPPqd9UpJECbd9kYkcYSiwbsaTNmNumHZn",
  "key28": "3DxmeZeGss5TtB5C9j2Xpvyh1JQf6attowkdSa92zLUzfF9szoK6XnRfpSGPFRCEvwb2VBjjCb7tvdf7spsj3ET2",
  "key29": "5uc5wtFsZAqx5ErwkwtjcrhjmGrPV3HAd3CRW62XTvNTdBQBFjwS1fF79fc7rD41iSdhEq6NTKBdee6YRvHJF2uG",
  "key30": "5N1BdRYEQ8Vozd9FwLPheTamFymbtXceuiKybssEXY7B8YCQ5vKpS4hmAwEFWFkpUTcfLmFemBWkcZib8JTC61zh",
  "key31": "4XXyjiB9NUVunqoke557rY9NEpo4nSMRoSWcSJ2ShNkqZXLCCEjfMzERJ9XG2c7DbX6sZ2QcnEnmRnw4nLfBpdgV",
  "key32": "4GHH1h5aeQ3EvPkdgZSL9kFY7xMvH6kSqxbwV9KN5dKe9jb3mbBrevMBbMGwbGJ7jFNLPDb4tkitRpEHdr3Ae6Na",
  "key33": "2YRGVFuR1eZbzBT5MQ3htw9Yy4f3hA4ZFeiiG4ww81Fby2Q44rFuCdRB4A4cc4yAHFHNKLgN9JGZ6k6YofkEvhxV",
  "key34": "31muXbvzEwHMDSom7dvUhJgPHAFGfCpYYQPmeFg7n92eg6roiw1RmEL4rL2qRBCKRvrsMezLefY99JEqSMTw4JcC",
  "key35": "3xtMd7UFm9EJtva9QVyAhADZsiAcKD1dLVKu3dfcNi3vzZc2bMYxzFiHNazCuzAr8wp98yGYdHw9M6dLb3xGh4Me",
  "key36": "32xstPXpc49nvRuou2MkruQegGmwJvYd1V64uJt7HKsT23JpNqwyzwpw7JuejnhZFXmvxJfybv4sQYcVMco2nCUP",
  "key37": "2FmtZtua4Bbi7NnyqA6pocqx9uMBZSf2RwySQ3txNpUNgdMXwkmophLb33BfjuhsNoK5VubJmpuEwewphAkFH7En",
  "key38": "3cRr5Kjr5dEZxWDN1eYGnLGMsDFUHoyUK8tXedhftCzzLnxezz223p4kBDtm4StkhRuPeQTcTv9yzGi3Sd1Xa866",
  "key39": "35sb8BBYCueShjAzGdjqrz4tG8CDXEuTjbpENAteH1rT6xtMsU3bVkf6U6MTx7UP7rdNtMdEec8F7GGDLpyho6VJ",
  "key40": "2zubr1nLbQFno7U7Rs7gcqi7kzA3s4Pktzoooir92KT72fzFNnBdsp8S57F32bbWxgaE3fsDv4zu6577aVcDWia1",
  "key41": "V8DJpQ56Ja6E3RWxdYJUkYyRAtNTKmA7BDVuFwbn4ivZdukQkTida7pviDkFxLkv99CMgyLShpzu23oi9MSDR4Y",
  "key42": "33bznRWREsgAKXQWm4HEf4sFf8QyBvJKdxbXoYwixET4vRoqEqgvwuHeQT7v68FxjM4YU5gx3EB8ofSWhF1CqznR"
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
