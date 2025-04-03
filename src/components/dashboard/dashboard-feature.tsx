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
    "5XTuYzBUXVVMweAQ8C5qGJSEAhJaA6BvcnC3xBMETzKaU7PiqEADeBQmYtR4QCbCnst9WiXPZfgbgQ1NNgopacvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ii9YGm4wVbCsdmpTJQkeVtDHczUqK4QqBmahD31YDbydDRsgYiUzZ8BW7gz9FFZbwXLsbyumEf3jxQd62purk3Z",
  "key1": "3NujMA2HaTKT73UvqA6f7jERSY3gmJSZ9rzKUWZ4XzoPhwjCuKejwUrmyMTtdpJe4uYW4phsN8b26wqWkRsr5azF",
  "key2": "5HisjpfHB9SRZWG1Pw7RZSJsmvMHzWoa1d9LeRsiExEdjG4GGao21ni38C2AgEo2SJF18q2wdsMWWoJ67PbNZW8q",
  "key3": "5qAVy7gmC34wH7kJDtpqDBxhTVE194wxiCeCPMkEZoZ1NDwY4fVrtSaj218rgiWrHn8NnowBKAPEfCSgWPiK4xsA",
  "key4": "2ewwQnnb5NLKbMGubtzSqtZFMCwJAqPWEWnnw5q3xw8jGoSApDZ1Wd5qm24xMEpeWibWXJmfmcFMVHfsboy6jwyH",
  "key5": "sAq7cV8eAEHYHdbMGdhEfpnzJJ2J8J12fLAnCUEBB9Vzd5hWUzdVgRPoyH1XE5yvaVV2FS16joFXdKdSebTEvBj",
  "key6": "3Jc1Fac1Fb2B1MT9eEJrmAC193NKxy4SmEw7wuH6xXA3nik5EP6rG7BnBr8Eot2zcu9WhZBRMbZco32w9pFRckVh",
  "key7": "4rfpyLKz3HZpeqwiLLKXKYH6pvJKt3TE7jsZ8HmkHAxteVqLxzbr1FrdnL9Us1BWMYMAEazxfMBYvrhBT4jk2wXU",
  "key8": "NcFfX6ACMd3cmXTaR3YbUBG4eR4LeDiEjKNWhYLShF3Jrw2jBYTt9shtp346D32Cn7UQKfkKG1NUs3yMGscG8DP",
  "key9": "3T88KbAcMUJDf8AyfJzL7FhdYhao5wo4sWy7FrENCQ9XDGwa62jZNZbcDqg2cARNmGY8svd5qChMHTYJunzUVhEp",
  "key10": "UgWSjs3X6nDhFomaW4wDU4VFRYqHz5SktLEHv8dBwfi68ajMLz5Ek3aBX3tVCBTzPzv1KYwh5CVMnWUqvC9z1bh",
  "key11": "4nFtQaX1jANT8VtatshnLVWeJFwWS5aBH2xvU81SNtHdhCvgLC8PkFsoHVoY6r1HmEyk3d1qn3184fKwZS7MJR3Q",
  "key12": "4xCbzw4cS5ktwJt6713CEYdmMbswushTrgXFJ5rqiRoQUsWiKZNfr92bYNVD43iDvbxPejzcJxbw9tJ51W2nkFjN",
  "key13": "3fHS8xTqCBcZojP8k3vkRtsM8cetxsL1We1wFmBMB9fD8LN9PzCusndk3Y8xovAJyzsBhLSe5ygEXQb2UBGguuJj",
  "key14": "5ck9UF6yTpUPjfBQpxkodt5FdQmjodWqfXRP8WrxonkoaBXxnpVGe5utkwfw8XpfSepS8vH22cnK49xHsDJhqCS3",
  "key15": "5sNfy5zrMTi9tH3Ef7XTU56iH5QDhnmCWH237NP9p8VSZKLuns22JzGcLx7PuyMLyShZ627jB6JdRFhPBLBXHGtP",
  "key16": "VYRLZCmApDQYFL4xgXV1rc47SDuvzbDWy5SuNu668MGcsB9pLvQXsJ2oDAnrhN23n8Ngbjvx2GRLxbpQ1hSwNeq",
  "key17": "3s74Huqp4UV9vRsw6Tpuec8mnj2jrAuz876wJkuMEA9ohYsfXyLfuhViD2UTLcDP3JUy96fhKgG5NdxN33WVPgv9",
  "key18": "5mcocWsQxnKFSx83z1FUFt5Z5tAJpHbaThyVcnnuQecagw7QvPEuZteUTEVo2dcPq2z4KC5KDXGoKXGXAmEekwMD",
  "key19": "299WokXz89fTWgKLKVyJmiyFWVWfC5TLTjWwhTRxBK2DFukTeMjdvJ6dRK1WdkXjZY3htN5qfdHad6r3B28ECqjV",
  "key20": "XkmdXqaVenoHLPsTvHufJcEdss1ovqPHLaAjdgKwJk4H4fKNtNzry6v1wfezdVuDG25R4ktBJdn9JtmXD12rV2R",
  "key21": "536V4pou2pfrwnna5f1fRHcXmdZR7WRbuoQyQwprucWFoT7WK9XJxAvJitfaSqRTuwm7VXFox1WqdvUG4BDM79gm",
  "key22": "2Nrc3Xzkib9ZjcKbkij2XTLFZLu2vUKe9GCEq8CbLdnmXmSphkpMt4sTQzXepiQnH3cf5NGsaMg3EJNa1T2cpNiv",
  "key23": "4LE85CNrs5x9phYZchRwfhk96Gn3FtkX52qoA4Q1MPRKiTN1c8NJHrQw5N6kaZWg5CY7iAkEjvtF17XbwFbYLNHo",
  "key24": "2z6bis8hCddYw1u7YwvCbsJPJpQY3CN4re2sbeFWsZpQf39YwmArGe2NELAq2mKjMsHbUojYVFDyrDEwVXDqoPWu",
  "key25": "346afwLJd2CRKnuVmbWjuDvn4XbFAx3ogUHoXBvSU7Gzo1GMrEuP4X4WGhCw2khTKh6Gcp6MP7eUvLtHsUyi14YQ",
  "key26": "3MKqP292kaVc3udAANgsFwPGUhdzS5bXiW9itcFadMFEEigyp4fUn5LKFWaj9Kse1qkCAZXkP4Pvp8yYWia8spQz",
  "key27": "5u5eR5LJZm4ZBPwjKznU6wjjnQwz7Td4v6P4PRnR2wZAq9AyuFQb19jbqHuLzVxprZtHMTLLrF8eVCQ5uZYZYnhh",
  "key28": "67MVWtwNFSNpXwMUmTeuZtsomLgZ4watjZobLxneSTRLd9rcmNnfZATL26LgsdGmgCoeGTWRbD71bHBzB4rfnuAc",
  "key29": "4y7EzYwmZTXEDM5zSm5r9iPGZKRUAZvBGjUr1SnJsFHES4oAr1Trm6s6oyaQmsupE3qYrBz8kEZnhVjaZpChptQJ",
  "key30": "3TwdR3ViMLxBFReQVw7L1nGhNQ19aEJW2QaQuzDF8LeW7iq4E4AFCoQ2vd5MGnUCxMKcC8w1rrkoKLKaUy7v3Czg",
  "key31": "2DbfqTshfXbNcJrxP1TgvifAT3AGzg9fpeEKcFttrojyY5UpYqB6fcpfKQEZo18tLYqAQpLhK3DyhvgHByfDMjwb",
  "key32": "PtmcBM9vaMNSdpXNfinXqp3CHebCoYmkUn1QbSzGgS3NzvdBKxZqgzHbnSmeRo8RXEegAZFTRnShbbGEeD1JuB2",
  "key33": "V321jpwEK68TqGLL8aoT6RHVnkpP41t8GtgpENsc6kdbx1G43NP3uuBMNqiSTLu3FpGHzDXnmCFwDCd5nHrN7bS",
  "key34": "5vUxjuu4wsVnd1o7jM6kigftSvqVrjFsf3QnPsdEnxPiLvL8LstG184YQai8qpCSQiBdThLr9dVuVtpfzwMSSopi",
  "key35": "5dymB2fz1sn8U7BRAsGWWtebgPmaPGDJe9H8jkPNvQLS7rdEhVCdcougR5BDbL9SRd2NEDtAumtBurGXpokAU87Y",
  "key36": "2emdZ5Sarjy5sAjNb6wsYZSFdGjR5GTm5fxzyftYDtqbAVWhQL8sBQMxZ4paoAmMCx6H56LgK5f9NQu6Q8w3PqTv"
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
