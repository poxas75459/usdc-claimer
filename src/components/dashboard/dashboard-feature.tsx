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
    "4fyGkY42THoH9aMYwc8wsfeS5wvSLRFRPw3DA1LNs2SeDyWbwr1yupBNZLGaQT9AzjU7H6HfASDNFrZpMTkL27NB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jWJkPB9WZ6jf5jHxXbfmqyJfJqYQZySyE1APZstnCVEUgxJwouBs91yrenYZx2XqBdhHKoTU6sA8FQAMjhbq2W6",
  "key1": "4zijsE3jKb66UfLwhNASb5SZsubB9ftX8fJJBMCYRkbwMWdix5Nv8D6c3Ri42F2vpeusAu1dtZJQKk69B52qre5m",
  "key2": "3fkr9VneKaaXDh3C92ogEgGqEFfgkGdYtygYPqYVztf4wXxzEmGopJ5e1z8DE6F18BcaaqHugc6ZcPKyv9ZGoQkJ",
  "key3": "28u5yNgsNTh3PoKYzB4TncpjwaKntwEpwDrDBdqEN3fnqfTvpkkX6mbHEQuYD57T7Xamjc8byUbajQnjfEkJWxs8",
  "key4": "5UTG5aJgw4pdNQe8bF9fkFQCEf3tVKJFkwSnmVrgGh6pRLLB6QGu23Mv7Rw6gNczneh8gCpv9Yi4F1qF16gkcxs3",
  "key5": "3kmMCqcTUoZVUHJHvnFJr4ENPpUKiFuFinnb8Qd5noHjTw5CHWiaJ9rQAEBbjRHd2WvM69a7zXGmgGhAAT6BjT7g",
  "key6": "4kPCV5GVHbbUcZsSD3rqxBqBvj9ve6V8BJo6eFEZywBd4RSeUv2VTG6QJFrDuZyk7oZtN2JzbmHYZiKbHpPZV9zm",
  "key7": "4g7P8gLTANNTwNUwChH1od4TrwxbsdxYnJvbDEPewMzaGF21wvUn1Uzh4JZZdkLiWRBLYXxNt2DN6kPcUrxjN9ys",
  "key8": "4SaXuesGg2fXs3ik8Zdhx4h9VfcYCTDtqE1p5SnF7rSeQZc1HTGUoHhq6sUnnJYGtosPn88GxhoZipQtR5qtmuLS",
  "key9": "563htp6GtcGwZXFFJzAPHuumHa6qNMhqf5v1S6qr4jL33CSH4Nt2oum9VMxe8V6ipQKhUFpTgukQEVmfcvQ5eQZX",
  "key10": "219LcDbPHaTHbzNtfimhU472QxJguzntQhiUfVc4TzJ5rLRdB8v8jTSkackprcDuBV1ZWWALDPwdLXHb7U15tgjW",
  "key11": "yUnoY6ZcicfCB4TBspW7VpdfX1SDBYSZcxpjBqh5m94JoJrwH6rtDRf9ghFCE3rJRXEzoJpLgeruaEtnM6La6h9",
  "key12": "2iMt4YbGsA7iHDZaPjCrJK3YNytMs5xtK75o8qT6uxn5Lp16qNnFmYVpzGmCoe6DgCgvJ3roMHS5hTwdgPXd4MvW",
  "key13": "453XSMHs8dQBVzpp7B2XbQq189SVkfhbTHEuojrEcQT7YGedPa1bf9VYNgzKP67NUBFyJTso63fwGumY6m5vwzdh",
  "key14": "3xSxtRSywcjonRSxZQVLzGFNGdaj9tJ6qSsHDr85oB9iQZMMereGYD1kJdtz6FsRCVHA54QGJfUeZbSr6fPqDhP7",
  "key15": "3w8nVPiVoRCDLdFWRY1phPn6jpbz6vor8UEUwbDGWEMgbKnoufCUG4ubjzp8RUepMvkCWooNoizQiBa3MrcViLUj",
  "key16": "3EiWmkLo3eJoiZxcWSk9ouiZWk1Afv8SkaZj9QfH8SB5uitJn2L3EwQv5SrUg29CRpkEGW1BVFPvuhgCcyCPTYr1",
  "key17": "2U4rnsaidBgAMP9XNSHtUcdDWS5CLaiJ2BZhiwbATDg1XECJ4kqg9aXXeYPHCJenSnbTxjbjrtYjtRRJS2kW9DaM",
  "key18": "uiESUcqjxmb7YyQQgk5rs4ryJrgsERcHzvKH83uxkCqsv7e5ZrioiYj7ih3pwUoXgJP3RLpheyf74JXDi5ZDwtJ",
  "key19": "38LVoLGb7qzihrKfDzQ41HxxpjdEo3sQuqnSYyXW8XhKokgmeFMAhJZSoz1hRQbAN5EgiCSNqKrUccbXsL5f73bx",
  "key20": "2HNSRRrzdNbxVjGUDANLhTW2hsdFXt1TvWYA33kwvGim8fApGfZEEuMKqqVs8mXAK9enNh9SnzwXq8SvXYLCELAa",
  "key21": "5dADC3FoZRLsaEBppdqW592Wmrob2eoibHYFdnS9dy3JQXH5RaCqYVZ69P6z8uc4eyzqpyjr3EsguzdTupzwSyg2",
  "key22": "5Cnjyxrgzr5rZw4g1LrPDFTcT1rhxfdoDzYsj9gQfq7t3NJjmQpwj7JLRnHdkPY3scJq1HWsePNQcXKkoekQjDsG",
  "key23": "29SCo6hWwZjQG2WxH9NGEfgaMJoEc4opr1fJcT5Ugp3JB2aMJCPSVPo81tVUek14jmY8WX4i4Jj1U37GfdbDxUHd",
  "key24": "mnbyJqTh7phLoF3N45NQdjVDwTL8AAkhGkmbTbxCmauoCgPGQgzVFDX6CNmFf1tZoW2xo7ezv6b8r15FTRCCTva",
  "key25": "2nDpSUcu3TH4iX3p59CGUq1iCAQefQTwEiFT1jtFkdJ2KBGNW21esrpjWvLpbHzdSHEAB85mvYVCu7FiHLmnLLim",
  "key26": "eU8EYQbnAhqmj6Q47XnkFhVAMWNTUMGQ5KG1Meq65qNhzi1veUdXEjcQKKWCCAsZ6sUKdVHZUqZBDdy4oNK7AKu",
  "key27": "3h3hNYepbPNkmLRWqjPx9mwoX5oEgPrhNhPJi8QgtJLFnqeAJLVAEcAsf7ski7PFvC9ooKg5kc6iXxLtXxZ84jLh",
  "key28": "2eevwjAPUfNGSTShJnWk1jp1m3gnezNP4PndhXFVaBSBSSMzoB3SSqqnDfzm4Ff8HpfKUKhYZaEJtfJo2DmNHfag",
  "key29": "4s1nde6jwFn3g29DLvQ1bf47XoNNvAr9vHsrYhKn1wTRPqLy4jPWbxnkw2renfnb1FLVWT6yrmSUBiDrxKM35e1q",
  "key30": "2mjjBxXqw8ByQq2URgxEpTXNZ4331J8N5ZxLUY8MZGbrPeg6E8zpiLjGfC3ccrCjqjUwmt1xof7hBtSdMUsZsmPj",
  "key31": "iZkj4Wc92s4kextPf2DPSGwMySAv3MRzaN2x3XxCgB2Zqp6uZK3dRSaXWCK5jo1trNLowTn6PSjr6QyXg6nw8rn",
  "key32": "5uyL2nNYhptT6L5iLx2wbBFnAtiEgfadvUjT4teJUeZNKs8YcEz61LsXxBx2EiUTMwyAvh4Ayv3X6TepUWxc3EG1",
  "key33": "rKZVJKXansuWcmxoWv8Q9WUwmhLK2pKuCxrV9GonTuDWBd4DGhe7XJ5RS4dMthVoYPgKhzoAWWC6PcrKFqFnhVG",
  "key34": "JvkC7EdcXoTU61d4BSmTtXBqGpXkE3zqXMryY19WACc3vHdur2aPd29o7TeKotJJu4FkoAwZk35byqdaW99pq3j",
  "key35": "RvnM2i7oCoFXjYiSRLRZ8FQpJus4s3ESdpdELL3mADqoRJ69DCgrijVwJfVbrHGAF58xLVTVZ15M16mK8iK6uK8",
  "key36": "51W6irB3CMYKfkTJVWSrzCcmFeb25i2bZAJen5kzHJ4ycVm5ZU9z29cqrFUg2MdnsQDNSbTEuqDXekvC15s88GXi",
  "key37": "FrC51kLVAF5rNNJ4ZkgLFs9EHmGCccp7NUigEyHefrg5UpajLP5MGV4enULc7yToCyseTo21oq7ssNzRNCZvRaT",
  "key38": "5qitCGovCA69me7ysHee5JP4fQsVwnNsJf62D1Kwk2wLXWMXNaGh6MUiDEsNFC7nmioGzaZms5gN9ZxPtrYJtiZW",
  "key39": "4hGrzgxRiDU4oMQPt7apu5HqEDoyeE9gzB3D2ZKqYojA1S6H6tNuUkMGew1BWge3ky5uwu6t3AQDh9AV8yyEFCf7",
  "key40": "4zm8SzGyQDjpUuFdkwES9dMqYMdqaNyjLJCdQGxhaKNKW4K6fdyA6zjs1HNxs55vfVGAQBiwtWkTsRnnGQ4MAf4r",
  "key41": "2VA5GCyhnGcKjvMsJt8LtcaVNaMK7UPBbGCykuJuMohS6VmJ8vrQhhf2nGCsv6DR4SwvxdqTPkNQxXnCs5spkmky",
  "key42": "62MSHh7eZvyPvcnpcuSsUNyxCtKwwR5pszPwKLwW8nBGLGqAsjzjUMqKB2KERychMPKHXiTZLLYxgRahzUUJCycw",
  "key43": "3o1qaW91fRu2gPkWUTEpKH6Fb3yVAwNJNpu9rR88QxVwAtbJ9sNPMuSb3aqzcs9gSLHjfvXRGDMB9n2kLm83tLM9",
  "key44": "2bo6YEhnFTNFMuqwp88P811L58FdTAP1kdBwfNkFkFhfjUiMrEAH2cVz8kcACoNngNNP2qi2W8f8ThMHPUfsK6JF",
  "key45": "3xpuXk8NxHNb6pN3KKigxAgHsZsGf2a8rqPKPPb55cBh1gqP4V7C2PHwe2MEme9kc5qyek7XECZ2cxLY9q28aeTC",
  "key46": "41g9Jr3GkJK4fmRnBYSWnPyEHMRu2yfJ7ogDZLgt8EyFthhmmqWqETKvvmZFKN5Pb4v9WfuUuTx6Kn6U4q7rp5Bf",
  "key47": "8dUtQ2ThHFp57t7D24JCR2zJUJ9J4htt6di78CeoASvbF3yhuorRgNmU3Ec3AWJB2qZS2SnWkDL4dQRTxgQ2tGn"
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
