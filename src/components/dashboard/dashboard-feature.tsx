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
    "2st7PwQxLj7NUje6xN71CvNmvTRk3WTRzj5a5KnyFeQP6uJyPFdS5SVSdpKrLxEmtPmPoXQiLfZh2XsxHicf7n23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gXVw4e931zpEj4BKiFqdssmC1KbsdFj1Zzz5tGFQomZ2rx6KSzkqbtBQEjEwLANAZxFhMC8yBfuAbapnoWFERtF",
  "key1": "4VrJj1kGraQdwVSgBmToU7Ub8tEvonPhRpoYr7BHfSpc1k3CWVH6rSGuvcx8QZV9DEbZbh5dwMAFK1hZGtuV2ZLa",
  "key2": "2puye3oNZJAWmEVwwdhjzv99eBiEQwuV9QDWRB3qFCp1i88RXzmjX3TMs8P3QGyYrxm6qZXGKYtXLf8ZsLw8FRXD",
  "key3": "2J3hhVfm6dNXuTV3tVkZKwaCxMvm3s2ftui18PmkHjARdNJZhABL3D3QmE8rf2VBpZKyX5ruHKBenQA3AkwcSnv9",
  "key4": "2jeKdFwpuXbnmDBuHBNNsv9zqckFpUbFtYqMv3W8bFSWupxtVtunGzwcESy5uDFTMUWZBa8RJXacfvue29YAAnx1",
  "key5": "2X36CByXWthQyUNNhqnuKtbECxyFPp6LGRhyuuDaUxKjZETA1L2gtKU8Rimc7RmR9zM5aHMVQ6Lis1ga4a1AGFCe",
  "key6": "4nuRvJoP76dJ49NqbiKLLW4sU4fzoDvVh4Jm3kfRsohFdwrVWKMVFGWQDbhXkG3eFtJbZwMWn5eh6o71RbuUSKxW",
  "key7": "46ZqLy4XZd41maD5icXWY5xALNNZpU4nWrSNJm6BcauXRAACB8V2StM1g6SPTHqKLHhkgjGvQRXymg8i4GExSgwn",
  "key8": "2ykdvmBbroUJVjjQiAtLcN49pNYvCfdcZpXvFFBBZGdX5JZZJbpMAJXGqNkHXXBEvqaBq9K4kRRs792Fzzq7i1wt",
  "key9": "4uH5LRs52d1DYUuy5bCkPZTZoGQWxQz5Ww3S2MU56NYKC6KLj5gdtQYJAaTWrPncpJ9FoyvoUZHSSdsFAir4CkD8",
  "key10": "5WQR4twLYXcFBMipq4wwmyuBn9Sstf8bvxUzC8XXmEPTjLd4zc8pdH7oSrGNeJYkKSje6ocJVSHAGUf9pRqk8PLA",
  "key11": "3HPtWA3kW1ua4VQd3mEZBNkTH6mS3xg6KpAPshpbMSv3eeXz6UH6yiDVSVDQur6v7pjZwGszmHMovyJQahYbbzUv",
  "key12": "5cSg349rHbR2ZGghyJ1cUXB9kqtFyT9imU8vRuS6T9AeSiZaxSi79SLhJYoprpHjJ2nPKK2FQBQoJWH37s8YvikM",
  "key13": "5hwLYdNaTh5gjkamdF8C6GH1opgCHetnR9Y9aqm1ud5tz4EFopQfdZd9C5akLGRVFThUoUzU2JwBpd31ctjymRyz",
  "key14": "4rW2o48brmRgopkSXeH2JDaEjM5BbyS6vz43qVLLE69TeUquo1MxsmQYSNx2UG5eh9HuAY3Bwpc6KJY5UELZb9xh",
  "key15": "3pjHooNMeKDccJkrveCZ2mRes4UaekwsVJLNVtt7b7knhTYsh6MQUNesrKccjzNYDHEwPT8TUKEpePkdZgBwZdEg",
  "key16": "4VkuU9kEhWt88zJ274kReM8GWB82RxaAEPnMFHD6gMD1QP85WW3CPx8Hx78sMBHWf1hQ3MRw5m8jNrE8m58hSVn5",
  "key17": "41Xi7XNgoq4o7bvGZJMCfmUMXZGnumEVaYudWZZh1iUk7V5w1MwHDWNbMzk8PUYSms477XHNeaAvK1p3m3UXLuDK",
  "key18": "3E8mKjjghx7xxR487dWiN3CpA1HidDiMeUKQrYRUwV5rkRcwK4L6E26hgQeMXWXNKf1wqXyoAihPLutqqnX1hHSp",
  "key19": "2PSAFiA4GZRTvcqgDBs7yvL7pXnPPh9iEG2S4Azav6mhzKHe6qnHvYsaRThZPhDH6SPummTSnSq14wti7KBzZq7G",
  "key20": "3k5UFLtey3tgWdGk1MfcTYtx26aNkhsa3VK9HfPAwBJZFdFqBjRMkmdyr6L22cgZJfay3dr3dCeyPEqdya1aeGgx",
  "key21": "36CiPGVyphBa3DZ4xEdDoXZEAJk1LFzKodQG697NxRJ8LZFr1s3tpWpE5F8wxUQeKTCP6swZoPmDpJfqTzuDhgoa",
  "key22": "4u8XAEvJEDPyK3GH13HS84YmjAqxEsnkAZTdGfs6zYpoWeCkH8fn7iui4ZgiwjP2VryK11XCY1H3jLPMdVjvYEre",
  "key23": "2oDj14w2gXJBbMi3DqjxymS2hZzdbiuWSh1ZyfXg6RJWqFk3RHiwdECSVqJyBm4ofyPZnxp4MdfzGB9BNUyfwwYR",
  "key24": "61LVp8F28gRfuhX9B476YRZfqBcgm4hyTGmfhrrbDwjd7snqq5LKFHqaVRKkSNegWKdP7WymPDUMnL87s1q5wTKu",
  "key25": "3oBqVk44VL3EN8cm3awpsDLw9fKBZ1oPukKnH264XJ7R1nRhUNPQrAVhs2gn6mm476tMNx9uhuKZTWH5cwepucdE",
  "key26": "2qsQHz39sPDX3sN3SGDjXtiaV8HgXdEiLMker4LEhmTMZmDUHXHjxrESAetJJHki5gY3uv7ZjTDDYZAthcGdHh6F",
  "key27": "56NZ71AskxWpAVfR5hUMXtkGciUUYUvKaUTANwuDHKZ8gYT8GFwy8DnKXE77fj4mjfdmejder6DuEdUAMdVwTyKK",
  "key28": "AkdpgE1LZXth1enw5CoGfGpwehXHEbVGNetoBE49Z9Kj6in3r1g41QwGm45ZquPvyiXtSRJzXHKcF6BZmxAb9P6",
  "key29": "5eED5gkguJ8XitBYdBsebHCiZnk55J1KKhdWYJFbCPHLSkjGkYFciV7rz1j8jkgkoMhRdkW8LnaF7YbHvihAmG3q",
  "key30": "4ZuG5NrupiGV6gNNhU4UeDNuStFx1HVhj42Sig9J9uqLpixAAQq7bdkuCTzH6idsdyLRivN5ubkdkwHsANzJSXp9",
  "key31": "4WrvEwvNDA6zL5vT6Rg3Pv51rcqafeXtfrZ18VhfTwwnvQUVkck4jSpwRCjhwHQMZzb3HCkY4VHtmCHSAf2mEC2M",
  "key32": "5xrDxxpggUzbF6rEe3A9kTRTVoSVKVD72FNM3DvBMXPxJacGVjAwoEeoUYK7Naq6hcnRRNbVHGcLaBpBd7zoaj37",
  "key33": "2gSfHJckQoXDh1gSsCpDgjyQedCZze5QEQLNkjzPNquGFG4wMPkSEUpAjcfwxZvjCLqsR9Ha4LQNUUJNnoHKvuhE",
  "key34": "2s4iphBUrNHTHqDzC6LHSVZQf2pen6jQ8n7JAX2mnZ2VAesmG1UPRedf4Txww59pn1RbBV1KfEJGNTtLavFdKv3V",
  "key35": "3opQzmcHqrbfc7Z4PhqFYNgCYH37dxcrpgsZGdFMn5aAejrobyd9SaMGLpzspMpWCsxzN3DCaPNaTbrsARnwfDTE",
  "key36": "2snmvLy3ZGegfgqZkJqJKqRoH9eS8kRfk1K9bHJPBJKD6XWBwGmzesPoi25U7ZsHEmg89jLfVqK1vvqiPrwznUns",
  "key37": "2MWk7HRMZmSa5SoqdR7VwzS1C1ZdvetXxhURJZKx2kopvgzC6bAjyzV5hfzyvCPF5ANzveWYW3Ahtd4ymKEcYNjw",
  "key38": "5ACi2gmoovMWsepMAuuZ9FdpazRZw4ZM59ezBLaqG9KG2xQ9eNJNhuLDHZpExKwUGNo6yYBv9bMXSyuNSWRANkgZ",
  "key39": "3rT3EvH5Ez8BaZueDfhU2Co2jF7s8ZvYmygTTGR7vZKLn9JTgxSt6Pg23t2qycpd1dV36YzjZMYC5Dera327hKe2",
  "key40": "hzXYHPExE1ygd6BSwQeNXnuRjxwuXL3AmPVzygcsKNMDTYWTrCypYfmFhSzDxb9zyo968QEvrXDuiDcKFGPv19u",
  "key41": "vbfLw1UkMAYZRbLA8seVSoUioiBn9yuF4NQiKEch4xDJeT39n4w94htjob4xj9MhMwsm3Djys2aCfueL1x1r2DA",
  "key42": "2JwwxT3jarRsHJ3ShEhgL79hxo52CjbPGjC5gicyeGcFKeAVvKCtpVN77Z4j28jPeqTPvGgwDsJuYkESJus7TCQ9",
  "key43": "2EWzqzRhUcCUYxLHnX8cVUJdaW1ydwS7EmAdQWk5kntdWzHHfKErjRYJG58ijAbkHiAsM1QZC8BztqRtqYh9DQqf",
  "key44": "3YyYnCpu28fHk7AxXSTzheXrNQEciMrGUm1cu3PiPAr8WL8wEJpkxFV4hvywAC8xHCuYQAJ6V1XuiTrs4dxeCJx9",
  "key45": "28aHyAUfzFsy6vzuyTPKaWdh6kTALLmtRc4Jsfsje8gWoxZCnGqeky6vXCHmN91CxtBs1s6FZQvPyzoCSoiuu3Sk"
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
