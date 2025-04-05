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
    "5Y2AGwEBMzeeaZiB4bcEShKWrKKzBgkwA785LcfyFaWaRU5vaxjtxJP4Jd2PMS3eHYrBL7TqVChCsv92aG1CmDkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NSmEUzU1bmQ1tMf8oZfQKLMm9LdmFV6XNTLZzkNtexy11oakSU53B9Zofu1v5TKrgJPmznr1NWMSG48qVHLF4vt",
  "key1": "DP1pKsKfTsAMdy8TEzmBPSaHhW7x3ozUwsJaghP9j2RUA2xFUFSJfR456PfPSyN74QkVUQeAod17XvHJvASkZVJ",
  "key2": "3TStukHrPpwzMHkPoRu3H4VPMiBgfRk7BE2gNya3RA2YrC4oMv2tiWFm7akhcKFgEHMxzuF5DXf4PvcBjz95jTx5",
  "key3": "65CXJj1fvvw39mJ43TJA5nwaGodnFbT4vDPz2CrmxRy9K962zGeSdkm2wMNoBfgTafXGUsRPKx4Eqps8Jt9VrSvm",
  "key4": "67DMmGu8DDNfQvkbYj6Go9XLWe16Q5AwDyee5iiGc4iXd5zkw5dLSsoyheVWvVsmtwrZJiwnaFfoHpxWopJUu55c",
  "key5": "2SmhN71Dfy4dXTEn5CRxJffCQ7Qi9cNvAmHPYGa5GqA2Sf9KdYViXdkffP7xTabgaPX9wA6BGWWMkLaGyEyHwiL1",
  "key6": "3ELXccwAYDt112pDW6wXpjUrje5JntcefGp1hSXqgiuoCmdLbMtoY7fLMbimUww8axks5fFGh8BAZD5uYUekESLz",
  "key7": "LYptfwxLhAgV9cwLNFEe9F3zP8jRmU8xKMeqUP78tGQRZFAHTzGYgEHvrdwwcAXZvPa342uLexGWZG3J8JzhMcu",
  "key8": "mf23tV55cvCzNZBUnUugf9XUJ1T2LgZzog6WTFvp9yQV5qPJp8opCHPuBVktGt78mXWaWZfcjnd1TwvUtPbhDPX",
  "key9": "2K3xKAkviUcq1PpyJs7MLDVXdtWPoztNpqyh6kM6CNJwNCt9oJEJpSDkn7vWJkmayxJMc8RvE1g8mgHH55fncd8",
  "key10": "445hvvJhWJejmjuKnm51iCa8tohybPa6rTEWADM7iqQuGFoHmjJ6u3EGd3etAkdaqkdsQMUnUNDm5CGsyeAJ4cvT",
  "key11": "5yQcBDE5GFv7LGtKePADUWjisFgwRoaHELCuoqpaDLPG9xGQntcPS7KNsXPbiU5R9643BdpNTaNkjf3fnWcr3yCo",
  "key12": "5QJEmp6M8eYp9pUS8PemzaA5XG3kYAEo1zDG4AaFq5hvF52m4bdBmz5vYYd3CR16HCwccnU4u23hpYXeJ9DAGJuk",
  "key13": "5w8EghQo4TkK5uhR5Bg6oAeKUu5J5XeGy6D7urE6u6aowf8t8SSrp61HzaA2R4EPgY4qYHAcNQUsT9RgoF3ZpzXb",
  "key14": "Hh2RDetcq8xtEj5TCtbkfL9HZtMgwVaX8dDDcLnvgd5Ggmu65iVF8bghdD8caajsKMmPFH85uycebK5zmz5scbn",
  "key15": "282479rvsSZG3mv7ZBahBzKXfzTWpV7g2nxWY78VRbJGtMYdTuwHCs1Pt4uoAtP1G1fZ4mrry18Uh9ET5PubkRaL",
  "key16": "597kXSbvk4QLCgHZdFqFBDa4hD5NCcEaVz1U4mnmsUWtu5311qPBWnsc97cThpDHhC6sLqc6trjK3gRgV1vQMJdk",
  "key17": "3QWPWwtjBxUzBbxTBE6cJDKUMBwDjKZYfwqYbfUkuBkFPti1e4MgDmdG4VYNAdhsMmLbWwJUKbA7h34f1yiPS4jW",
  "key18": "VuRwRQpss9CHCRsCbQkWyUWrigWcVg4yTtRUMNmKZTXtAB3iXDPg2eNrjtJGG2MoXdZaW49E4gPMWMX1NpQ4Ey8",
  "key19": "3p7GhU3g8aNRbLde7dhRqFvVWdD2fDECQkU2UGJHreg1L85PVKrt5URjUduzCkc6rHLDcPB4vFHZp4mdLMmS5cM4",
  "key20": "5jjU41qd8W4LakVQuH2nikMcXrA914J8We65tFLt6b3BiqbQSMSEUpi2UEa4MpD2SJAQaaeEG3DKuoxMXg2vvkUN",
  "key21": "46LHfWDm7jfMChzk8YVSzUemhfLErXMyF2bBMnkaNotCyZCF4fZg2aNncNwd24mxjJNQ66iBMYBnGmV3B3UGv9No",
  "key22": "KnAPjvccwMLzGTq2ugdNwJ1dPjvY542SbaG2ibjj7R5bPBooVAN4y1pXLzWTAApE71YN4EVSQmz5yVgXxKFm8D8",
  "key23": "3xrCe1ep4VB3sG4qoYeLVfbkcCqGGmpWJDRx8gi6SWmQP5w3C8dhf3JMY2DkFZmBp2EuuYgWVTTFfEBrcAuv817W",
  "key24": "47X9pzMrYkg6mAkPQWv4scgVqaNNE8LgdPJb7AKBJEkcN5pkDAeYyuhwCvGzpKthp9q9xWYnfjn5Ke75fPrm7Pzp",
  "key25": "TpoG7Cf3Q41ha37gT4UdciWDcGfhvnYHPuvarsF3dmcVFbsDxVrGQziDxnQuAJ5rvmgwAZoatSCPBEbEKJWDZb8",
  "key26": "QR7tscGhHfY1fDUfzc52jQKX3PwYwdPkazJDjK2Nt8RcVgkKh7EcJ1H82Y1m5u6jrRUttsM2f2kcRCpJxwiSoDp",
  "key27": "3zjGdJtgVFqdabU69UbZdS1mxFGAXHkkBxcGgZegX3yWHSUrkvEYcKYsV5tmKBSAsvQ8dNw4Wi9TBi8nnVPhzwPp",
  "key28": "4wRTfyxTSbhH23E3oADXJQWDeHrz1eACqiqKpL5qAEJm1fWeJyS4vfENsjTVHERVRyc5BcyftFQNrJvng5zddKQx",
  "key29": "5mDM1Sx2BwDvJETv9WCbFwAHHu3zNiL3Z5BY2geVzHDKkoGoivjNbDqfxLMgFN7LQA4R98NX7KKAYjCodJMKcJsC",
  "key30": "5U6LFJK8hwZMqjrhYtwTkcJtQzCDtt9uDDBVk18c7LKF1urV5WwbokwgJKrJsME9nePvCbqMfJ3RFS2YKdAD3QqN",
  "key31": "4fjEhjVMT8LhKjxcPt6BzTovXYMJBbvGjw51n3dJKyb9EwRPHG6ESdG2KYveU6U3uZRJknmZr8CWFMwTVzBgTiAz",
  "key32": "2aqHtLZH31777pPpNBRexRc53pykXxRyWbRDCHmJqByYyD1sMhhXiMWSaVyvPLBUGzTqv8oA6rCS9bh8QQq3s9vQ",
  "key33": "43HYqUEqQndDRpjqfBRSXd9rp92wbYheykHVntyp2NnspHDhFm1D95NfhfBBPmMsqF7V62R3mhrMfFeYgn6oQ6ge",
  "key34": "5UAzQDo6ejouAr9yG7zmZYcsAFRktdwobhWkaNdP1114JnwWikdpcGvPpnboVnwuBAytvidaPBReqr7vAJG46CJr",
  "key35": "4aA9ifexcnT1MnkPnWUgh1gax22jGvsyuiQ1evSThoYCPyRGDF3j3VKkseBtA2UyGTqE85qV6HaG1oy6PDR9KbYZ",
  "key36": "3zawPCrLbXSisdVLfwW2VMJ1o2uBxEyX5WVS8MGXH3a8C8exQbkaAWNJzYaDttNogVezj6PdcPkya5D89U7m5axk",
  "key37": "3G3V4Y15z2aV8ZCD7oP7dQng5Ygx2SWneMb6NAzQrhBkSnB6ZfaFqHTHxUtKyBuDqwhFoh35v9J5YEmH8r3Mngm6",
  "key38": "4XwGcKwkRWLPzRjs8TSEaWRf9E2H1e4a7bnfrPRGV5dcbVMMeL5iW3E5XoTsFmqE5EPhXasVRf9FuqVbCgEmEoe6",
  "key39": "47LjDd7ubgDPgAw2EY4v3EkMow3Vb9sviy4CB5aWDg6aNhYmyq6e3mF5KMDGZxSf95jjjgHP43k8gLoeRakJWs3w",
  "key40": "k5L2XftqJy2WMcJjjVYLHjPRf2ryhBLGFv5kH8uDtDbFGMXQ76Zq6ybEmQ4nBwR8HasLVMLWzZU6v4n5oebiTsV",
  "key41": "2aS8ZFCh7ykNJxp7HpZoMvckpngb3Pj4TyiwR8uDy9RnhcwgwpBtrznAss9Djo6g83VimjFnSqUqWBiwV4kcSuEc"
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
