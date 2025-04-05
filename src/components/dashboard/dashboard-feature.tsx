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
    "3JiXzxRXMU7XuQecedVtL2Yu3RNNPGHzR1h36xb1HF7QT8Yvi1gyDKybMUgMTb1PwfpNYLDiBSLTz1jGKk7SAKdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4isTwCzrNMrPtNXhEbAYhRpjeGKwH1MjVi7xUDDMBUwAPXJVmwQZGvCqYzufhAnLpaafsJ71K8BNJBxThBCePs5T",
  "key1": "5Xwr4vGnUjaDMtqXKCfiqC2G44avmcR9cvHXG6mfeTnB9LBkeKAQGKcqaoxbJaWPhgybtqi9KonxVJK6uDUydpAP",
  "key2": "5Jy1xgWjou75eEggSMArAGEV6fiPPeDQ4cLrCfNDKU8jHrA8n96jMede9k9khgncLKBayEigWVxxF8VE6uJeMxVX",
  "key3": "63knRE2yAn2B9b3SpbLV32vZRCRM9vZz55EpssCBiPYYGQRDr3KoXbmQwjSutmWShaBvVMDiN7DxPC18qb7VtMCX",
  "key4": "4GTtPrRgSrkR7EHYagwT2VBPSqHqLMQnnj4AQQQWe2uf36ykL68hL6gFXKSxN1nSogzifDPEFgRMk8rPc1EYTrD8",
  "key5": "61S1d23Udsk8P9p9yH3Fh55TE6HLKvTeU9bn69NqoTFS1YYch6xEY58BEDzaNp4AmPfoPiSppKTyk6bzvqTyBkuP",
  "key6": "csyDRCY1WVwfMzDMicpJqawYX57MqZHcJ2VnZZnVngq3TtWu7TvpPMaMBRozwTAfQfiqSPLeoczj83Zd6dwZ2PL",
  "key7": "47eUJVdP3gEhjiSNoxDtaPhxEEgqW2BAj59peYWEVmgidJ1Bor7RCHJV11nCcsZgXw32inYpY9Y6ogvFR8LsATDE",
  "key8": "4WSq7D7h8kp1ZkyfGpU6vwWSp9yht5yJ5jPNJYoUUm155z5aPMGTsb2xbLcZmx1cDFSLmjV1JqLg6dN6tMfpnSPk",
  "key9": "2Q4iEuGseNa8Dg7nLUYrhWWbbFrW2bvWR8mGmbM5oESNy8DhjCv8bmYK5QRrSDffJK7EAKhCB8YuQYoSC4sxr5xS",
  "key10": "2arL51hKmPXsVk9x1UZ19HCSPegDa3KLicAzgeuAXSixJDnaZS3Sfn3req5vZhEzhXoiLnwpYMbqjnnyKSrTmtJW",
  "key11": "j86nF419WBYApE6vcz86Gh1apVUTDW8T8z8btnKraXMKAbFkCGgxceTbHf6x6A7oFu9sjsHbAaznsC9dkUcBN9d",
  "key12": "4LYiMKX3NNtuMHhb5PenrJj2VFSbL294TGCdMNzrb5MfZMTqf2RwDDz5PbatddJb4NMiHn8tEuNbF4vBXrvBeQiB",
  "key13": "sh9KoDUwHsdGA4EW5omoQTmf6e8v3yTAEcPLy2geCx96rf4d8t9n7tpxzGJmB41cyN8gbXNfbY8z31sxAZKzNhr",
  "key14": "4AXskyRfid6jydAKpPrXqWGdXLeXZEYiQogSMVy72Zsoav49MZ1Q1JjyAhkMewSd5uZwy7VdG5HJ7CHeqjzg4pgk",
  "key15": "tD4ViZgef4WetwPoq6Eehhn2M5xxYZ1QoZWrAWNFiwd9Up1ebrVwwPEd5Epn4MdEuQA3fPGSY2WACQQEGhZXkyj",
  "key16": "257UJxvSVUKeEhse8kdq92tibTWFzzsB3aKUEnqwj229CzbwKMiXXQE4aaBLq4Nn1CbiVCgusy9BP4sZPVeQ6DXA",
  "key17": "4NAFhNUbkxzZEUqFTrdwsBWbKEB8uB3xxUDD9AVenxEpJExpJdYaHUrCPx9cw1dQXYPrHMs6CRrXZdC69gL2kx51",
  "key18": "gvygN6CLUX7P3kJW6kEF75peTo3aGBRfQ9zDag4hENdJbDrngVpEfdP7K8a3v5Kp3iKMejqFQcB3RzkXpzi8Hks",
  "key19": "5Tmc1HrU4mfb8h8fhFMLcU5wx533uQNdVr6mvQR6LvTaz8YRsCQrgL9qES57Ymr37qtAFTomp9Tm9sEQipq1mRjD",
  "key20": "3Ha89WXCkqpVBkYsRoTbC4fowmgywJHbZcCu9afhzZ1Em73ChSymanmdB7miCfAC2bXEDQyT5EwLjGB2iUtsUMo5",
  "key21": "371PhDNKBHjNpEDXZYjWRWBk5zkrbzJh8kpiyjTswnDgmkNk3vHpAGXnVMyghSyQU3DvweTb5Po8fGthEM7aMvZf",
  "key22": "3GS2XnMT8Mb3RkCugdxxKGKSHzzghesekbxiVuqK7BpSQtNKpJ7z5ovc9R2oywMAY1qsZAgr4XxNm97EadmTifCS",
  "key23": "bF3sx8iRxNnWnx7252DNFK1455D5w7xfK5moHPxHJKYmfePMS6v4hvCaCbDhpvY4RtHet4gs8AiqGsVXJCMA6oL",
  "key24": "51yUYaEqEgbEFoYCzVF24SHJg7e34iBfy2gwVHhRpetg1sUo8SnF7amj2PH9E1DbBcNi9kDh9fY6dDBJ2xQQeHTX",
  "key25": "tGooeQDHHY7YLyCZNMJTKsCUbfptPxno28ncJwc8B3g9pmfMDFMo1GmLZdP2ft7iuTo1yFmhMHscb76oXnDjrF3",
  "key26": "583aokB6jnrD54eZHSQZAaqb7RavsCnd3fCnHUduCVvBMhkVt3ptTokcU9Uhza9ds7cgZYj6hMBhDzjTS9bh5eXJ",
  "key27": "2hZJt8zaGML2CuMQ5vEKuZ7fv5fQKMF4o4q28iGQQbCJPk2jgUWTfTGSjtxKL4tktqdR37ChZv8XZGF8mX48KFwT",
  "key28": "5kwaGBmDbnZB9yruZmHdWCDKhscECN7SrkggDTEWgMCnyhgWE6i5RiqRaosWdVUDq2Hxcwm7fmuaz5kRrtEEqGMX",
  "key29": "3Dean6f6auU8zE4ACfm6PFhTp1jGf6dfirLmb3DR6CMU5h5qNLQ5Y7f64kCJTRJnRLcH32trZNhzSsFx38zNCZVp",
  "key30": "uvKHSz4Ju2SW3C9XcW3yiCXTCUGHS1H418HQXj9dDfBu47V6Z7vwBxyimh23394XHgr1ukanBpuNhDanvna4gdt",
  "key31": "5JRLTYxDHFYeSCbnmKQWaRAArDqtAh8XRJx5fFtd2s7dNhnUSugqFU9FS67Lv3gGsWdRkKgAG9xfD5dMn254a6C3",
  "key32": "2CHRvgdYSeyQzP4mKVuRJBL6UWozKYU2xToUqfffX1zGb8hEa3LxRAMRSUYX4ZthWuFXDMnYw7Uwm1vy1tW19ozn",
  "key33": "4xyBwGNa8aBBq2BBPYgrApoehExvzNs8FQmNhkeV5Bfa6nqdVXV6K5JiysRN13qvyFtUkBiaPy8mkyYdoVoErP3s",
  "key34": "3MTzSUVzANyCGCotDViyga22kRi2Ac3GLqA1Jrub8CkuKQnsMDw5y69JuYcLeameDfYzW28GDjeXr1MA9xchvJQR",
  "key35": "2FARM3SKvyeCfzoMZ7DAw5y51abAPps6GAvoT7Qujs77X1T5feH6RWvwR5UHn2EtrCs14q1rXtzm5qZ9Vksfgdn8",
  "key36": "2J2PK4V7Lgb2SxSbWhwT7kHgWc6qvyVHSBee36YGUTUUg8SRY7Qu6znVBah61ofcbtSEen5XeFSS1Wss73obB9R8",
  "key37": "3BGFBW1YNQVxBiam5sk23xen2zVWpJCzRxJLmPB15GEc7XbMnmoAq3CAwQhGjYmQcwVPrzGXfNAhFCQjUqVgVJV6",
  "key38": "2XRVoU6bUpJcHG5KQSTWsUqddWr91R5Za1GB7rcpDDtBPW9DkUKNkf88wATWmnugERobLiRknFz1SpCDLnAaWmbF",
  "key39": "wJ8TiPWiHtawv8TAvtobxtmHiG5UcKAcsWk5T65ByZyvbxxM2S9Qie4Q3a5vjBjcwiVM9oMU3Km5ACikfbaQJfd"
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
