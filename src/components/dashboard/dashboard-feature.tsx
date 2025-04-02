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
    "3WJtFhoHGfdZXw1sHNxK6QGXrWHDcBuUTuMEoiGrDcVHr4CSVVZwA7t15m1TswuZBSBex5jtDPJ15bt2h8LM1pLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yzi5DK5dQdMcVtZe5vyXTN5U2aFhZa6gZqcwu9ToqeSQntdhUU2gwkRJtpyPa99bGfKNeQEf2a3hZmhx8cWUKwB",
  "key1": "34eXMjKFAhEtjU544EPoxU3mm675fouVR8u9WAbTQ5nTB5zYc3WUG1Kembeo7m8Ws3dtkWZM9pM6uWUeFohChCfE",
  "key2": "5Tgi1xiizR2WAHPUapy94pi7fj198pfdBn73WDN4pvq2UMLPt9WiNyALkqGGqo9EjgAbyNLjMQpmohKP4PxNy8yA",
  "key3": "WSmecUW33nF1ufBo8fhWp5gYN4RT6KJiv2TBLuyE4PDAq71EfypZ9beciyZcvTcX4TZKepwLorkA1eHLzKr5Kdh",
  "key4": "JycRSGyV7xCEKUyBTTATSY7zxn1YdCedzqXLXx1voLZabN2GVJNuTGJTeA3wVsZj9nNyZZMDvCMszLqM2wVsjtG",
  "key5": "qDXa5uVgr2yGEe42G49QEvsu6FwdDouJ3jCB5kLN31J1y5HiSJqCk1C8Mo8JQNfZxN1RPHQgGCNLUwZkpp5FFAt",
  "key6": "3QuajkpTa7nmQ9nvdZfPgcbTTQSyDLVR8vJts23gaYYsnUBNBeXnwYGABvkZy2EzvouzHPJr6m7TtDb6KvgYqLS1",
  "key7": "3TZn4PR9akJzS8P4rwoUBG8YYBnrsgU9Cwskd4yYCMHX2LuZAw9qJx11HDfcZ9yb1FoUKxrKB5qsCFyBRgwB9bNh",
  "key8": "3hQafotsnh5f5KhNwX9EWXuHdgiwz3APs5VgsJrspd9EiprYNE7ZtjaDUYTZKC3UgWAbRXW7VKxeuyTbNFx2EKaf",
  "key9": "4XJDoL8Piaop42NqcqCeKAELZRsgPq9qZM85KXvMnfaTLwx7nkHxtKRkEQJVL3KJ24u6hnCFv9CwU6B7v27AsHC9",
  "key10": "4qfUeH6HPtiuQKF9MLdBnXqU8iM9LRFDrncgjNoZuoinGiJYDfeDqFXKmeiXnfLUxuarHPN3eePG9XXMCppLjCVv",
  "key11": "2qyKpV4YGhFpdQni7iCgTtCsQwogHH6aPdnzt1nTXTqqVjrKtaJsK1xeTe4TDBkTyeKewxEjn13DREc62x7sTKSt",
  "key12": "2TmyHhbtPLvTPTJapyA5bjEhHbZk6xCb2LLaSqrcH4SoYxB227Gr7aNuw6KbPSHshYLHaAxr2XRND19qWvdNFtyN",
  "key13": "4GrDEpHgoF4bzwuKd15cVeKYTTK3tyJHgeMxa9x11ffXiH45aRDLZoCArXspWkjrmVogNnfSrVK77WBZ1f4VTqsd",
  "key14": "2hbBZbD2WuP4bNsFeQ5ny92jUTkQfZrhgrTosUY2p1EMdCmVsC6sinDRpr8jW3knAh5m1zfhv7pcgTQ9sgdzqSrU",
  "key15": "2gMv7HPYnxgvHP9RJCRn14rrGJMfqmHDhspSFxE7r2yUidCe5oETpRfHBMUqfnksqbR8JfidPrTmXb2dGaZB4WGs",
  "key16": "3mmSPBgCi6jxPA5NNzwKpisKsKNrPauVNRLZgX5CwatAcqqzKBWnSNNsLpYEVX7VUp8zrrgYs94A14SR4brJtkrH",
  "key17": "4pG9dst6wFzgs4kDyeTASe4wzZU6TW2k3hv64FUJEWH7Rkg1AtjFHm4TBTgXaoxEfRf9ehkVM9ZUF1f59VbH37WN",
  "key18": "5XFo45YecDQAmrsNChFrburBu5V7EFE9ph41jKhNrXTH2U5Yb7ZL2T37avHkY4BcP2ej3xUPiizQYrSzxCWQ7K3W",
  "key19": "622XYmZZU8tJtjvq9QKWx8xW6SgGAARHmEysGTcehz8SRfqwu96BBQkskimyYJgDnxYMohE5xcX5zaFPjaqA2e5E",
  "key20": "4TQjWJVCAgFpTxWuojPE5TFZSARMw1ARrHFyDVcZZ2SJXPkzviJT4nuE74uDCmMyLYFcUP6yK8E2mtq8ka1m98kh",
  "key21": "2aWkY532y5dGKANZmQSfivuo3NpnPSRuMTZvmCWAaGRH1Wajnx1P3nbxFd84gJUF2tYX7ngpLUmL5aKwkDf1RpzP",
  "key22": "5Xz464kcd3Bwd9KCiHvztFvRwJYJdjCGXy8sjE9iicj1ge3DkUhePdbxwwAHcHZT7xEYsJ9fVu2cNtT2QvkhnN1F",
  "key23": "2Evkq9cH4xcErmSxvAK7Z7Q2iEUdZYRWcFrSJ1MnbweeuRApcphqKCPFEq4SLAZLdDatQqyFH4RsniQBTVeythDJ",
  "key24": "44jkZdhr8CCToj8WA44kA6bCjzSZaS5LxGnrqK7vXvbD6Co7CX8QKa7ZURriYqWCuFRgt7emZKtgXRn4LTPf1iDG",
  "key25": "5z9WxL6h8Q2Ya5C1vZcYbXdP9ZoDXVcqFJANsQG8AfHjQRcrLyWFZuXZRivpyhvDS1PBFoEkmBPRLQd2JFJ56Fkv",
  "key26": "2KPGyMoJ2pxP5api6LHX7ChRKTEZLHT6HPatU2eFf2PccTdaxvwAr9oNHXsVxXuAQUB1ahpavsuPskFzbo17Hg3k",
  "key27": "SavJNgLnun944d8vAV9Afny5UkGZtvXAu8Rena8PvDdqtp5kR3PM9QRnBZvhWj1ueKVuwdxstWhKacNfUgSsPFt",
  "key28": "3yE5ddb6Lb7cdyfPmNvM991aUYPr9Gj7JnfiwARmatFErZpna2JFqVmCANQdeGRxg4eqCtuoioQ4Mj5pKjPMgiEo",
  "key29": "3yVdRjWfuPBjx9EyDvDLjupnnL2cf7KPoyyJSMgtQQsEKfEuPkYchwPgeQuH2k6HgxgYbJkXbg9t65uBUU8mKjpU",
  "key30": "3WfFWv2SByx95LR5UZUTKGPMo1gaxC7kNSyKTLpAb8DeZAs2FYd8cWUq3BMd1w8HBQjR7STczteoZe9FDWV21sav",
  "key31": "5LYGwFBRTVFd4vPtYEs7iKxQfUZhbsD4nsuveVDWfzpURLecafAykAnDMRrSropXJyyrRXyU7ps6aALEWcfNY93e",
  "key32": "4KKMAsAAdhSpKcsvgzxFQXqV7bADGfVCFqqpbBW2i1dXymhEvorByXDtoeyFQ47qEKEFTzLthudmZN5EYh6kBhag",
  "key33": "5S32eCZAcMPPBfhPmjXNpTm7EkEjt2iEFHLaMgqE5pN84ZAhebwK4Ds4Ysw7Ty4d6XMThsmEZumUaxp1YVr4yaa5",
  "key34": "ubcupPQwvLZNod22M1jHCRkRNNY8KPsowXNC8r8aaevD8L13kzxzBhkGquxb8f6zCjQ2NCb24Z8R8ummzVqUfjd",
  "key35": "5vuPv7Ba4PgauvwwVFewrr5qXoxkJTEcznie7sCQzT6pNmz7xsnpW1axLPM151EBomLmgXy5TZxfBWgx1fdYmNru",
  "key36": "4SasfusaseSGDwKS5p5nzjzp9dxpg8P6Ep4BE9vNKUDXZqCEeC29WKdqfNnQ9bS5nFZgBEzyp4HgB1f1uKRJdqyJ",
  "key37": "5vYon8WupbGpydWjvgQzjhhUsQ23mcAvjeWAbPqaAoFov68rTZNJSRaUP1hFbFdQzZ9zG4cBqrDzKbCtwtEUS1Ya"
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
