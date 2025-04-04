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
    "26i19sBHHVHjM2bmPbNXLVC4d9CYw4hMw9nxneCc5W61jwYiHnUz5gdyo6CvCfLYCjnuf9ywUmEEiLTuegGZKgSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZzF5i1kB4sUDSru7NTRBranuMSSPNog5ZEv8wksDPEwhoGHJpf2RmLcFD7JYkv6LHsG2RLAEXZJ6iayiyX4g33s",
  "key1": "4rx79rxagCGazCBuRWfLuu72QtLVovaaykMGuenVeuvuCX6k5vQ5gbnPn35Vpg1VJ2T2fEw5zg7sZRrH4duNYGcZ",
  "key2": "4CAdA6h5zSfn5mCwKrNRBGfEThC7Yw7BBEuthwoCiPj5kzWgRdo98HfSUkkdVhHyyafCC4S3MokmFhp1UJpD4Edz",
  "key3": "5sVcQ3URyHcWvkJjsZfHwrDXzy6Cfm9DV6UgEUU8GSZi1iS9N5XCHrpNBr7BZjWBf18jPnPzNekuoXXKNQ1HuxEQ",
  "key4": "23Zj8FmvpL6bQ4obf9PwhcDby8Z7osyfks8vEDcMh2mmAqHFZUSont4pHW1SYWgcuKteiFjHk2qjA4oMEaN52Kdj",
  "key5": "5cZnAwbGdzyHoq98CeHPtgJNRdceorWtf8AWdAkZ6W3Kd3TRtRUWxpWpCTupvK3PyMFzN85chS1CTnR4YKAr1TED",
  "key6": "3XgSNqu59FSjEBVtJcWVevcr7DjPqC99hfmxrXTf3t2MTzMNuTK88sbzEzDjfLSskAuqBS8rGASfm8UpX9ikZZZs",
  "key7": "3bn7H7b7Qa4a3fDhz2XMU8gmRUmSKTrA1Uy7npoUoMRdmV1SrubzdtdBUVERJMCW9stqCiThV4wTszGWteKnc7TT",
  "key8": "3QV7LPSd58p6PJME56LbzmfmxG5uxCenWckZp7ZGxmSu3KaPr7eBuSYtMKsh7L6dUVnxL1WmHVxzvpGv65oUjAyt",
  "key9": "62zWkuzThGQRtBeDQJVUCvhojFkS1Er1AsAAXSqhedyPxe5ergeL4gBUH4Bb44NA1nwLQ36uj9yRX8BCkSyQK1LL",
  "key10": "2q7EBR1UXT3ALJGywisAQmAp4nknyvfasD6Nw8Ad9niM2mS7utsHs1JTCC1uqQpiqjYjPT2SNN45tcH3ceBvdkzd",
  "key11": "4vfBec7KQBKgJsfdxguBPCPsZoiuHaJ5SRft71riZnHwGWmwfvguB1MgneJkp6HT9BnawBHNRG9riELvNDrkC8sx",
  "key12": "4vXrBnYypdMkPCbfBEGVpQXPoDD8YF4KNwZDkZVJG1ximeBmbVfGmdv8Qqm13UaNCDNECWegbWrxPV12gC9reUhD",
  "key13": "t7nSaos4v3Z347qbNXaC1QPbN1fv4ySRaD8fBPVGFPaJ1RTdivzHm4vnZbd63E5c2itZbk4boYZhEBYwJgCS3Zb",
  "key14": "38neNNKypAoBGEtKCShjPs6PKHh7mkqtmWfRvnParj2TRxCdLTfNNZ68T96MDbgf5iCpBXMzXBJsaygFSJ2EMDnR",
  "key15": "3FMdXoJ1CYv1P8mcfYyEDs6yQNYkjMvWH8taQ9sw3HsT41yvzDk3TJYZ1E8xiQSaueUzSHvJR7h5Re9AYrC7q2LY",
  "key16": "2xiG8DkfEFKoyywYH7XkQfXmo5kWod1jjHUCCSD2i5XhgStjTuKtZ8Am6EBRw99H7bLJghungKvKjVRTATYYZz7N",
  "key17": "3zNLhNegMzcnikBEFUvV4iRp9QhLj8ub6Fyso3dxZJqTLCtw24fpR3PHEBPAbR3kEdn83RrvHaSnbTx2cytQYcDA",
  "key18": "4w48rzDscRipCfiVPhmLacuCo79Uz9wdMnkLcCjdZhgnXfC3EaPFCQBteHV3nv6dMahuNbdY5MUxYsCEkA4EAvBW",
  "key19": "4du5DV9apPqRMvseJoDPkQcf4rwWyhekUuPZUDUrmykB8PkmZU6ztq2uoFixmeq6j7L7Mqvb5BrZF6NicyQbDszZ",
  "key20": "4kxAeQwicJjjokbdGDPFyVqUh85HXzkmrJLzFHbLVm2xtzvSSLnvAEjQLLxMEkmPU38okAcrsp4w3rEnL66foCCd",
  "key21": "4kyrk1swbmipC4GoNqU39MFzsUoTeGxk6pXc8WUk5W8TPucTVL1nVHjq1VSwa1JTnce8V3y9doMGUaYa2V7qjxM6",
  "key22": "3tn651fAcNHuLJucnbd7Nozh7iZNqY4tUvZt4F5UHvx2nhXNe6uyYvv19ntDLj8ZMXi6hR1p519ohywMFcNbnaYu",
  "key23": "2BRMG8ctDWzsRxMY6eCvtmoByp1VL3QJADbotcdnWKzCEnNs3CJQEPuKvu8Ur8bh1JpdBSEfeCramYJUXYM42YSZ",
  "key24": "3br5mFnPrj4t7CSxVD3BJWd7YfBGDZTJ22irU5Pcp4mDxDr2BbxhMAC91m5pM9u3QGAU7RX6kpeB5RGsk73xFbdx",
  "key25": "2vJcnyi7bp5CGf4iEUHbsPoncQFRzRVEEQUFpX32aDNzqubFMw8kN5ZSyzBB5yxn3famF1zhYrGhypnoAw9MAtWt",
  "key26": "3BttZAPpbZr5FQL58zSvEj8EcPM9r7UKXkkLkEGbGThPBNc83if5TrKTkgccpSMiqnUShFyFD7ofXcqSfzCYGRf9",
  "key27": "67Y8mhqkvqpNgLwWjux93CiHZ8pkQDWCC3swvSNuAZMtnAF2GPigVePv8iD9yw9V2dc77mutpJsQ1VwAs2mNHHDe",
  "key28": "Y1deKNFgiMNQwNJt296jbP93WzeLqvV7FjV1TEKiyXVMc7WKxLsLUJsM5WpfUbQy5be6dQyu67Ee6sExyC7jhns",
  "key29": "3LU4WkpJxMe7Zbvehnud5ueMqR8WLXMxAiPETbCX3W35FgLhqQGxeRfYMZj3sn74wRzh1CWoybrK3w7WqYyETbg1",
  "key30": "3oordYuTHHtS24aoHjH2M7Qtr1P9k19FRMRyZwLXqrte35eed2qX11cFXtP8evagvjqL8gdpH8N4wkYtRSkRAZcQ",
  "key31": "3KG81gHM9fVJy7nbhXUCq4f6jp3PnU8QGRnUmxKbE52MiiQ2ABZCNT5Zrd5cZPVvxisn8XUKpfLm3Z4jzqyWHZM9",
  "key32": "4yZSgCTjVNUcpYLv6oqPRu76FQVx38N3J2qsTs676Vrcvk7PK6dVt935epdxz6yZWBG33CfuMSMdx5HPDbtKMQ1q",
  "key33": "5GQ6AFyjSvP9YeTjfjRrFRNgeRKr9g5sCgmKPATuvSPAK2rNQ8PSKTcmMpvE1ZvCoe7fkynhJyBhX9udDMTgNneP",
  "key34": "4ce1EfGgvD1kDybKaqyUjmZvMWQhnUEoPw68GNHEm7bdo2HcFgrQZK6ECq1q3qdDfC5VCJocG24LJ5152Bn24SuV",
  "key35": "45V1W9voDq9nL3xQj65Ct94Lmxg72xqeWr5GtmDpvozcvg6NWh4DwsfZYtG8ynQeSAaLK8cCN8EVQ79MBHRitjcR",
  "key36": "cpMVHUPYkC2mE8AQ7sfDLsbkzSxhoXZ9TttWv4XXcFDHDW8tEf5yDK8uV84SrpJBuTux7ojXWh7ppTV8FmaQY4C",
  "key37": "2qcQ9w5wo3iczZFoGCah6heWkhLMhzgVk233wtFkidFJ4FJt76MDtuJ2B9afTSumoLotQ32xwPvymU6BcoL2nMBe",
  "key38": "2TQW5cYcCMEDd4R1SuRibsFxDifteyfmCGtEq6FB2ThHriK1pn4ADnHRSoyPgfFq6LJ67ugVUtbK582eRwQCmHsE"
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
