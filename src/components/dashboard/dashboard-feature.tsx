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
    "2xCQ3MAdmjzqqj2DwrEm12UqCAuhVvSkgAXyAAakxiTsAdKjGJSn9f1gbqt7f265bLzQadn1UgUw89ajhh12H6a9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rNWK8PrWzLY8w5gEh7opLypyvkkwYQd8xbymRfccah5VryJbjsJMdJYfRAKBrrtFZgP6xzajR7vkJtDeVGt9Bx5",
  "key1": "5dk44jpfQqrzArSfZGU3ak7CpsSE1yJRrqZGdAxvZbBJ7oPJqqULHctEo29SEwG1ZCE9tUkTftNGBDa3TBUurTxj",
  "key2": "5DW6ioDVcRu7pkxaLdf55eRquNdhGscsaywVTsiyef5xyVCy1cWJqsdwDJ3c7JfyxgheqnYaW28yDkrvK6GtnRrQ",
  "key3": "5gPT5YFe1sK6RifPTPnfue8jyiht2RwGP2toomhcP9sxv5Pi2WBmAW6Khpy4hurdLiXtszqAfotFo6SH7e5W2VgM",
  "key4": "5Gze5sQ1HtZxkXs5DHxNhwsJsUi15Yzr4r7CsBVfFo5kauNAayBkoQU6eMnW7kwFiJLVpZzYjZZTy4gEPgr2UFZ5",
  "key5": "2GQyLAFHKDwVoeRyzppeFQ6LbZSBhVKUQGiXdJaExWEWhnxsj3XKBzGKW7Y1hWiksdScviqJRBDdY3E6aVLMf2TZ",
  "key6": "2gH1JSqxSvLG71A8NAJ8kw25yjd1mA5pTrPzRFuj5JATYMFo1uC1eufLe93kV3ZHp2SHZgfrB9b7zSDt2bGoEFej",
  "key7": "638NsVWrzto5ay8CgGz91kSqWsgtqmPWj1mSZCHmVZwJfVnUyVz8RCPMcmj5TZK7ohhB8f4RBmXvCJkthpWcHKDR",
  "key8": "3WF7csqXzYL3dLMVqVENExwAFaBhnsiatHaD5vPEC95Ne6LMiMgezobhtqJiLWmGmiG2YG7YCbtNzT4chk5GdaMQ",
  "key9": "2JJ24Y8LsTFz8y7YKVYS48Pc4GJVFcUy2h1wyirwn6bwQoX6c3Cp9KW271SuEuuajco4GPYTEs2dSGF38K7PGgyK",
  "key10": "5a82nbGjKuq99LFDjtp5d3N8VMPHK8nywfAxvCJqDxcSWReeZzDNjZev37Lzpo6Y6Q4KWz8oqBfrbiHrK1e6Jn6b",
  "key11": "37u6Wv96FfAWpCEhfQ74so9mf4p9E4w49hKGGzrNen43W33Z2hKSXmBMC1HDmt5U6QSQb9Mo4qDm1wwcgzagRFg4",
  "key12": "3Ls5NTdNm8DuXLUhMtMaz9wj7oRohoNY1xFWzs2bJY2AkXKpcTDN8qTERDY1hrioXdbMcQsJqnxZhL2NnxuXN7DV",
  "key13": "2oy87H44nZP8Zh3vkfVV6V33wa7jSmCioBv8tw5T1xbtEUtFB8xDAWnSUMdbw3F7SFUFuEXd2MMSvi9j2UWrU3uy",
  "key14": "3j6CFfZ4p3pWNw2mpmH3oCVABxwe4VnK6n5DdJe3UMtmaihT6ciWeHPXPsB9XAW6ckr3FwzDjGPU38hiW6K5W2Lo",
  "key15": "5K7NATSQivpx5CQAMS2bLTfYCzLx7Z5ngJNhSncHh1daRKCM2BQApofRoD7JBfAC7u13v6FKmi4trwCV2zGQQnZo",
  "key16": "5mr4CuZUFQbsntxzhvxNf2yXSynq7P6dHCmtCdzBRjc23JkrrAY5ukxx9w3JeSm273R1ZXsEXcJeDUW6EhpiHaoN",
  "key17": "2t5Kx1dpDJyt4YZqDeCrWHtdcJAdNrfkW5YFRGNgtqhuPbLF3Q7SYNz6WeshVnAzHrBdeCN3FEgyxjgAuF5sj7cS",
  "key18": "3KhuULAnykK2Sfc4MRfAdFkZmaTFFQtRwHrRH5BYs8qR3rR3AX97SVtZAp17BgYi7ePra5RrXP5dWJK6cPeKDYGm",
  "key19": "3Bv4PQiiD4tJ21gcCTcoYhdnTAnQQk8QuBU2VPnF3sT9rJLPHLhaEnnPA8Ym5RDfu59A9wdwZUectrTgosAxXUYF",
  "key20": "3m2ZcUyMo3JBmbXn2Hew3yLhXDUBoEUDN14Vf9ZRQhwPiMozQqSgz8EJfqA4T61oGro6dcBAo1RV7mYRQ8KVx9zP",
  "key21": "5stSB9bHDMmNMzvtZA3bJvHizRUy8d16Z7oLmVRiWFJo2WGSUGtSm6Gb36rs9i2mT7yT5r2aKmevMNhgL8zUhucV",
  "key22": "zkXPb3P3AhcbrNPrbPvkW7Hkk8oLKPC3rwh8h8KewFAMt4ihDMkLTAw1d9cyDtEikrpPn7UqzfRVT4Tb3Z8W8EB",
  "key23": "5QFrSsJ3YVbVHMsAUQV6ut689RLPLgScJyddkXmkLyUdmzkVFLtNN8Biu4T2ZShFQ6hryX4EyKpd4iNsXwvJvtzz",
  "key24": "2vM8s7z2zGZDQ5xNnDyYAjb9KJWPX93DqJRXPwtv6axydhhYNaEWQ3xBtLPnfEuxx3NzZTXZjTGQerku28qa7xPK",
  "key25": "5rGNvwwtcwu7g7xRos8GhDDHZxxG557dkshgyVVMSeVanNSAaDopEerVBiaY6QCDXXWde43G6isZ9bzF23CRFChg",
  "key26": "54kxm4ifcjPXaTAKJ56J58pW5YYwuyenZmJuocHnQVbvYsyzHWkVCKv4kzFkE5redjUJ48FxxYMrCfBdwu4c29HK",
  "key27": "5ocQrXLB3cWkFRbQLstxAdBysh8VfuifHsiBT4Di8Ud4YJ9PGxT4hUU4Shc8NFDRrsX91tkWvnvvoRaVEuWXxWwD",
  "key28": "3WtnQ2ziJkwAxMBaPdwvtrHv6R2zKSY5GaM6Yhnae4zkV3HN3wcMMNzwBG3Q782GGz9KhJ1SMfqbGWaagyNNvgyB",
  "key29": "FJH1CX2fkgCoQvzyaVFCYYWkihf6r1HvimaAqLEahn224ZLF1s3pHEPvPyED5m5KHswxLpLBBpSECevgjfx7FeU",
  "key30": "3v8YSc2g6xELQ4C6Cs7kqVhGh3z5qC9Vp54Z8g6Tc5RZGuVqmmLEj3wmzxaTatBPU1fGPbTszap5BHd4oKuTguer",
  "key31": "3iX17g4qmKTYA5rKVe8oh6JYNFzUHkD457ChVEuwwD53ND2YWEvbWp65rSyq53miqHAsJaN2Z3bhkYxH3HPmVWt3",
  "key32": "3Xkqgo9AKpobjNLWX8j5HfjTSme6dpBhpy1DSYEFfD6vQCtmWk7maV4ps9tYPG8xSKVXJSuSBRNL5CQuSB9VzBk6",
  "key33": "sCKoB4YTafSezPoJWWXwuqH8Qx9angTdvtnGg5XLLkyrGaubvvVrUEbkpqoaSzRVtELhLxx1txvuQyhxLEX4eSw",
  "key34": "2L82CmAD3ai2tLHKyWFZUrHX44AV91v5sEMTRv8PJskhVAZBB1hWKjWZ7S3Smav6HobZ4AnD3625aoJtdWtE5FMn",
  "key35": "4RoKPtPJsUpcfXGmdfNXUWsqkv9smgbsckJ7hwpEF1NSuN49GJyJt5WTpFJqwX5ygko6PVgZS2gz9krSM17gCayW",
  "key36": "5v7EbtgVVGMcaEyv3jYcSm2n5ZHEfeDn4K42JTLURQi6nCrzdjhSGFQ9WxQQRtzfZKjNwHsh87nbnR8Fgv3Krmrj",
  "key37": "5gh6GYtsta8VS5J7sAmPkVLfoeoxvQM6ZoR4ERy2PgEwBuJdWSHP88H9GSEDMt8sEPVrVuR52ZfsGDGYDH4fJjgU",
  "key38": "5bNVuAEDUJz4wKHyoBWRg3u6JwxmEVLfWtFqkh2B1chrRtWw2yaSHeyuFKNJ7UCt8WYo79Qp9ueeaDV4PE7UJzdY",
  "key39": "4jWCsBHzMwgM546qAEpMSMYnuraMTUgMCGmh725AYPcsffA7xXQgiWfF9owrdLfiLkNXH97baMtkVZoUocDGNQvN",
  "key40": "2WU8xRmcg7L8w9NKtNh9w57zHqzYddd9fnJ1D38RKJ3fKgvwS4s4qp1sQ67ZdgJTCwJNnrJJUp1nSK6oSW44yrpa",
  "key41": "4WbLBfvwcRGUTXZrqGdNaBAf3tvaNHitSQsFr5vkH2EjKo3b87LKdm1s3odBYpQfM8qqmAq7496sW15gBVDob3xf",
  "key42": "T5buK6GtsN6UzRFVbq4uCtBwmCyS2GB898RUgp1WDQ7DVrJbkRAsoEkRvt5iXkeVsYNEXqBAxUyFsE1kRzNNmUE",
  "key43": "2PGJKsozS8JS4RtfzseWU74XMQNv1nPYBtsayzgAV2N6ZuaVJF8kzMwDDXwHMWrpKXWM86cwirsgLQZ8exLsMWzY",
  "key44": "5QUifD747ce3ieCMoshQdQ66ZTpCQxjXN27N99Ddz7WzepMHaLef3GqV7gVU2WFz9AeBrXeG1JqCqX8N6cCePTUB"
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
