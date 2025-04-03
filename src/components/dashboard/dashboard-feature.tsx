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
    "384Ke9aFSRGb4QEty3vyo7Zh4VL24QbNjWCJw1DgGatdjcmu84EAdP29CpFFQVdiDtAmA4U2f3G42215dP7FBDNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hkkBGG3pRgtfHNQHffDXmoGrDNcwBex4Mj71RCZTRs2r8s66SBQaT2BLzTGK8HizGSixda2vVY4VFtNMePhRSpZ",
  "key1": "2rVJTXmaaQmdjNEwr4wSwZcXkkxcrP12GcmpjfmK7NfAGus2K9NXkWoLQkmdHNodEsAdEzDgeqJL9pwaReYhiCh3",
  "key2": "2S5ZgSpZQuELm7GDmYvJE6v3sufSRNceqWU6f11Y9om5cWFUSAD4xqVGdpkqeudCbdqSRjeTaoq9esBdpmLQCiy6",
  "key3": "DFWJN3fZe17zkg4zDTHbS3WBixpgyShVwdyetqs8kSu2do2KcgvFaoo6XAUG4cgqHeUsVvbGX3aJFgSmgBDU5oC",
  "key4": "2jV9QR6YMhPGpnfS7maQ6MMwM8VnR3WF3k3WkWxd5m5Uqa3betfcMcnrM9mty9kBkJ9Xddv16TjMjioTYj5VRBy5",
  "key5": "hzG5VdweMLTakv4HrcEnGHpMGB7R4UQYzUtfwLs6855vspjzuuYEusxiGsrRUTswjHqZcxty8CT1A2JQufmBEm6",
  "key6": "4DA2czRaytXCcNfRZ4tGSsdX4m34J7gZQFgohfs454Mxij8ThkZ2ahrwLwraizVt4tKDZ5P3oH73CLoK9DkDgcoH",
  "key7": "5etxmLgJVWWgesjovU94P1C4mBDCMh2dmfHH5NKAjto3gmicamzUmtvdrmwQQYsQZ4bHhVFd4qVS2PfS31QZQN6K",
  "key8": "4kqpZRTNG2tnYLr9JpBuWcFLXh1cxR4bn9taDxxy6hEe3aqu65Ahb9KhLvGsc98akYvTGAmJ3MFNBgg1XpK1qvng",
  "key9": "2ZcvAbxvmeYaRQySGFbV2g95wf8fi72hYSJRXbyYRp1NF6fNZbSXEyTeJSKxXfnfDHLe5Fz9wjnPv1MPXJm5joJ2",
  "key10": "nD67bF3uRgtfKSsm6K7s9hSzgXws9uvVLUUTp3DJZMtikUjsxF2UBTg9RHmMqXmEWhtzK6wBkojTcZQJHKaDBoQ",
  "key11": "2XjPzqcd8nUFLpxm27fjGejrwfSmhxrjhctzADu3LaMuqf7fAfBGtjhXAZp8hJxvPFCk3sYpVGFyRtBUZkvp5yYK",
  "key12": "5NrgjTrvtAV4579RQDTDTQKbQFhZ3JzSDw4aNRqz36St8KTsPUtug2VfCfxkpj4EkYVcfWEfxdixtECHvSx6mmkG",
  "key13": "5anaPfEQJX5E6Cn4et3SDwqdhkRUWfwpgEz68eVu4VgJvKCrdtC2gxRSEKWiZV9S4ximFC4yKAd4nXNVado6LSFW",
  "key14": "416pfv3pQXfSTN5zDWMvia2CknYxW5Eax2raMyTxEsRheE89MiHMrZBi9DAmC3x421iuosfQkNiZDUMfAxsnjyiS",
  "key15": "5fsMZL3jiiqiKR4hLbBRfZMfNyBVzD1GLBaikcjUeKLJjTUXPv9JQRpuzyrCTHoDqPM8BiFJkz8jLnHRDs621BZa",
  "key16": "5oa2CsvJ2W8x3XpJsU51g1z9WhTXNBzvhhhogs19SNQoQSYEJvBE3JbFvNAVKCxRfZEbrzRgbV8mdBYEgscd8evb",
  "key17": "1VSnKa29s2mV21XNT4G5Fn5Yb4rzfbxvGBFfgwvshXYvmUSXmB4PKLNNnF4HAFxK5buRN5HLgw3EqyV41RKVYuF",
  "key18": "3bmS1pPvHuTeSyksXLJ65ZfVjBi4EhCiK6paKHbYERRGPVPzphpQThZRi7wr9W9PwHNgco44avwxyEcV1XEik7aD",
  "key19": "65vxwhEvSYK1fRkYEXKgxVkVbos19oXhmPXjyYQxddnaGKPcbSY4ePs2xeB8i9hfbm1K9ef8TkvPo5eE8KjvTJNF",
  "key20": "3eQVBHEnFZJXw75uL9FSN93787QEGFbW9p2jbVUQ3WtFuh5arY82MrUpb9DkpeBku3vNJ34AD8sjqWwQyLnNge8L",
  "key21": "5Z8ubQRy9kgKvVzB6F6ZnmpCbaD7ynWMYzcmTkRDVUs9onACh87F216WThoQaxqRAEieCrjWeoSiwdnXqSyw7kdf",
  "key22": "3N6ncEUT7vH3V53d5MBJLaTFXt216YDhjAHiADPCuiEb3NHBwnSEqTKHJcDJUvfBzVVRS15E7u4gKf941rHrRWwk",
  "key23": "5ZZwmY4NxU74sSModYSESinjob7PfTBxCmAu8cpeZmX2fyf321Aw1WmoPNnRQG7zB2mS3nQz9EMJsZXPYSpBuAa2",
  "key24": "JiqEMpxAJTkhtehTDuwFRZ28ctq5LZjDemrcyAaoayN8eRsx3S332eCNUA9ST6YXJToKtrqcLU1B8cnzC7LaStG",
  "key25": "2Ti32RB6AFyj7od1cjj9m3Da2LqPYsiv2X1cWMR1P71GzDTGVKjLmgzc1zPxjPWzBTuyicrnvsRbCrZ6bdqr13NF",
  "key26": "3BAPVT2g16DJrGsSLpxuALpysemwJdmMsaoGeFmCdfRnABD9oqZwQxfCy3aUKndESkVSMW2aFdf2VphrDg1asEn8",
  "key27": "xoxDLtp42No8tXq4JuTRTDpCgZNeGwzKFsPWiL3eV7nAisRMs9Ev2aUdxtJ78EPGC9X9j9ids4c28vBMNvvtVVQ",
  "key28": "TzX1B8srN88t4CjrkfbmgMoNp8yU1KCL1BhRuGPTiJR6yYz95mnuAzBqts42eh7NHybjk6XF7g1XdJtR14QikBX",
  "key29": "4NxE7DLWD4eZiqDxG4Qk3ooUF6ciE5wjpbTbyUNUzEdkEKfLgs4hopQoCcMCph3vqPEviMq9JdTZdPWTjhJdzfQv",
  "key30": "M2D9gHBNkSwqrMVGC4pBVAwJqntYasejP9rjgDEwqWu4GyHSEQQxXztCyoGAhfBMLAHcbL2hL4jw32rdboChzpN",
  "key31": "8bkogeiMMUWmAcxJVtAmvbZJXcvZLazdaTckWxqqWgFnPdCxiFZcMkCwJnrkXJUAvsCi5XghZbcPFNTaGd35Ug2",
  "key32": "4RCN1U6PEx7AeZkPPBHdRyPi6DkSWdDAdxj3nvqJZvrEHyUYeuTVWfZJLLiMs6WfAXGxq8iZJcvvLyResPvbwi7k",
  "key33": "4KiJ3ErbdoHLAQ8KtJNrRHm2eSCwAAkeovBUMDMZw1Qy2nFZtBDchFFp8oYDacGixreBBDBxXPi8ooqw7QXKACLH"
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
