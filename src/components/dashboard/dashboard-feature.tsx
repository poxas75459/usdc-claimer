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
    "33x5CSYs9bwkDdtY9Eay8hdPgCwXA25HyyNdHqYM47RHfj9W8FcZY3BWr1ENmsf9U986bkpyHeP6jqoaiSsGGUML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cjoF7UWerTTADVRAZ87RW61iwDBrdaXs3uRiUSUbPNUR5SAEhAGeS8qw3YmV2yiLUYsoPCs2Bt9iTLNU26cWahD",
  "key1": "xG69co5H5W52xKdKTRA9uYHPJoptPZKAn248oPgRpYdQvE4F5mhpdKy7hfMC1hTAGn5Q1xR2EuniFGKRnZJ7Xpf",
  "key2": "5ootqta9vrqvdo2Qmy2JvHserms4BTfSaJWUL5ZWQRWE1TXP2NcxLAvTVRFDyVtT59bjX7qkuskqdYFS6fWyedgV",
  "key3": "2rD1Jf5w7xKVdCVDm8sCdYnCiCpm53NfyNGcCDZkZiSNKNuRio5pCkztiZqUb6sYB8pGjBQmgrx6xSXyshA4QRj6",
  "key4": "bj9jy95RAsJfPXqPmKghjzdSJ5kUWL4JsKuLg6N2inZSTZ1By5af3ELGkHofkHPyMm3HdnBLK2BTFEGYWHFjiJR",
  "key5": "qZne7da9T3xPdB47tqsGVToeTBtYjK6e3qqgxmCbSwadju5YSMpuqTCUGfcD3UDgZ1WFGgJA5LATNi42Bt4WHHm",
  "key6": "RPuRtKXB5o88nEV1w6wtbLTcce9vy44b91YYDyYieLvsJ13H66RR6hfa1n235paaHXv9WgbYt6Qr9QBTerMiwiB",
  "key7": "2Y15tQ5tidRLBfkgfUYbVUkHGaZ41fFYmDNYJkkS8SBXvMvAurzU9BLQBKUmcAV6zwuXVeUUu457VKxxwu29bNzc",
  "key8": "2naoiSs1oPpmMfJA9dYBqFau4QnC6KgBgXMHSUWrWxUQTAKiiExdcpN2WKaogZaTLoNo3ws5MKBQCMCTq1gZhTBB",
  "key9": "4fEPSHpdjRrjBEJakcgN7m5MyrqiANY8MqAS1sXpoMj5W1RFe4QrhbHB7B4ezyEXCyNFRjXAKo3LoaVRC88k7ewS",
  "key10": "475hweV7m5D7LMHst4Z6h8QP6neFVV66YVqj95xDVJBWq1XeWJhUpUsS78jDsyQtMyexzwZ1BzgXVdXp9Qu33wvF",
  "key11": "3RNWFS1CYxcEKj8i3CmMnE8JYy8YHW1sRS4uSJPCcwgjenw3qqrXSau72wJq8sWaWEaLfmezjkrNge7yjKViHXdM",
  "key12": "34pTkbHNd2D4zD9Vi9YQLJ8QDDwVHGMW7GpMoyjbqsMszCmWQ5n2TUxPWUWtMLz3HGmsBhhwB3X8xpkTfkM5cj8D",
  "key13": "2KYQHNBgP99mx5YF4jid8Vz1bnRFt9s3jKgagwNMwm3WxNySpseeKvmG7Dxg5bs9shMKyBtZez3kTN6Sozgxrm18",
  "key14": "5pbUBvzyenwDpR2r54BnMWuYU7rgGZ3iiFtVVRDPQiWd3uYvhuBWEQKY4zRdcHzitBicZEHsBS438VfH4YW78WoF",
  "key15": "6xWTATR6YjHLreU7ybs2ysHY3MiThZBKw1BjW2uzUQE5hhtGWrgRciS5RK6YmKiEorzXSatgpmhPxs7d5fTi4XZ",
  "key16": "3Dz9zbxrnxprFZ4SUQr9aTuznrmm9s5pXtdb8FEXYGyy7h7nAvLdyZddpBxMgxr1qsEQny6B1sMv2u4rgmjwXRgD",
  "key17": "3tZLroovn6F73cD3on4LbA69Mpa8aH6HVviV7aK77VawPpozWMMzUR5kzkvsnpUC4F6a6KC9msjyWCeHyz8vN71M",
  "key18": "SSWyMmmdvJf5zvPex3obRw9m726HFGCMPtqedwUCqeY1TEzqnXEBMXqcSoKk8iMBn1GRbcFjzkRJNNMTaD1qpgC",
  "key19": "4z4VPQghT5FUTELCBDXvVbfN64nAWsnGbm8yWZptGnrWKGHosomm9CkAnwjcLnCzZXyuKRQN1zVQur5YohiVwY64",
  "key20": "2DUBSzwW2j18pzFAz28mQ7S1Y3M6XvcANaRTUgCYjJ6eefm25TWmnCTRoWvFrT1jbLkyjS21uupeW2X2LsJNSJzz",
  "key21": "34aggooWD8wMYHgPEXGzHesaYTQW3Rn33VFGcp65jGpmdP66zZfd184giW8KGvcyY2nwkhVxw1TxwNYggFt4GASf",
  "key22": "JfobMszCH3CNwxDciPBNsLv2jvcaD2sa8ekrbytPirwSnqY1u55cZCU9TA6Ki3iASrDoEk6aWfT7vDxs4y2hiaV",
  "key23": "9XeY1aEtCcnLNwLPpkGvv2w1YoM9Dh1DG1ns77rVA42wRwu9ah3u71TQzvFkdJtCGBb2a5suBWePMxTTF44ikic",
  "key24": "4ZcqtKj9u7NSx5rpwTjLE6ah76qdLxEey6wEaEqPLj6A3YQe2Bh4rgwydTbVp5ojjRMoseSkMA13sqxZ5XsXj5Le",
  "key25": "3VQBR71e27Bx916ZTQLPpyYejC3cdpsDZ6C6diYEEjdksZS6nkexUj26aG9RHW9eW7jFewsxLCqSHSj1f8PcthiG",
  "key26": "4n54ofTuBLXF3hMqATYQBmvtwobL3yh2YQ5FN859FZSxCc5NZj3EX2BAEQozJ7qWV1E68jKo8vWrKv3GzWTKGKrL",
  "key27": "58roJsp2kdhsRw3XouHrmy4SJXYeF6DRYyRhME5pqGBS85HmWBWFNmmyofYneieYarfSZfVusP3QFDTgVt5E56mo",
  "key28": "5tExetqEHk9bZHkjiWU6FY7tPGS3bRyxbG6fHsgioCqkhBmVrJdx2NVGsdooRuDm7VdMQSjJ4PW63i3dD9BjLhJG",
  "key29": "3275hDheh36ms1pvafusWgdjyMEvTpT4qMBfFzcWAwm4L7oSonv3krBxGGqD6gfBUyhbh2bs2dCqjYx1THgzUBpR",
  "key30": "5g4k4dtgCgtDsSKt7Qxf2xKNc14fjfnByGHNrPr5mUWoMN7TnHxhyA72AERocbx63F59WQUvToYzGETHQGcrBsPt",
  "key31": "49VpbdYcQpCAYVBMuYL5vN2cfDUsDmES8MUES7Fw37t7b6bDLV4nCuWJbuTYuMrzAVjAUocK9A9JxBHsLPTCajwN",
  "key32": "3dZLsWtmXm3BTLrdUqUM6twnSbuhtWkaQurmhS1bTE1WzjLv47aggk9XUcdZnRrPehwdZegH6bfBfygVSh1GmbfH",
  "key33": "NaGpQkvxVg2rUzPFzATW6sHBp9yTTKzgJB57gqYtgCzBbJgbWBeVYkSoSe4VUwvJYvC6Zfn2UBgYiTSbNUukHUR",
  "key34": "5q47f9Ma5zp1SDmhFYFUjiAqab1FHWjKb7yrwgdK4tRGHzLegHFWJRw9GgjG1PQrZv1odiLtSY6UsqRUTUuc9Ts5",
  "key35": "3g3VjWoJwqVJELipdZbkqNTjJJE3yeDvBJAh7BQgewSJYpQ9j8FXJiHUfcKa7Bzb2XYAbw1ee8Y2cpMdrSpV78CX",
  "key36": "5Z5ydjruSvk8787xqU6ZLQowCt8nphsA49SgP1ViXKDYuUbfjRxZh1TKTHahRMgp4iW4mGKsrhCSxLzKMYzAJfvn",
  "key37": "iicgU3X8wvQzwzpbCPCQ4BxQjk1VqjHeVZGfbEpa8GJ8xK1y2DNJFMcRCm7QZGP1XTReekVZSQfNgyjqLrQfwcu",
  "key38": "G93WPe9uzWZgnVkx2ze81eY74h3Mxmwq7MgjoaPPqwVtBTtwx3Thsr3XftDwbCE2CVber6VqGT3J9kAir1gyUw4",
  "key39": "3GeDvFADfCQ1Q2cYwrexhR6gG2LhjyfcXAbL4P2aqxvtLV1mzc7FGqqmb2NDP5AR4XryzHxRGzri3ChiorsE5VSS",
  "key40": "4wmDHcEYgtffwUgTfjAghVxtLpymLMftz27L3WZXGRNLbzk2EPS616A3g8Fz1VSxhn7gE4b1eYH116U6kLcdPBFk",
  "key41": "3XLE7D7fXbgoTnqzmPHnTZdx3ZBt22Qj4uLvXmE91CjmggVXruo1f5fyzurGj39T9o3AZnpSqJNryciDpb3Cwwg1",
  "key42": "5WSCYe89Sze8hanDLFAX5K13AfW1fAFzWJqB1X2En4Y6KPaAuaSBwHA4eLGa7MrDFJNiMJg9cgWfsrWiqxWcAgZ1",
  "key43": "SV8UUvwSqWC6oFfrTyZdkTKkUJrWun3NK5NGxGeVJVP8GnB92PopHViw48vTMojdEdbDkUQrS2BqoJqc67YBCrk",
  "key44": "4q8ko6ET6Nkt123CTugmMKjpm7sofZRcyjfiq4psaktQ493ccZVr4NL6F8Jtk7E6oHu8vcLJuMNhEVivkPc9i7ne",
  "key45": "58SzHjVwNAAxiaHt71UbufCXvXiVjeYE4sxXd4PqdN4agVFQ7aTTXyMbwraDgwESoFQ2er2w5C52ZHySxbYcduXw",
  "key46": "2mKLk3CzvH5BD7xk2ux4X68et1PMC8uzVWyrKmBJhVukD8FbdgSeHV2JDTqvM92eSTfcpY1PBT5jJsdzohuLFsMA",
  "key47": "VkyQ3bfDHJNRh2NawSNM9kTzeNtGsv5Tr6efaJ5WbtKUPPggGWB5SsBx49K6fLDoydCeqaNRgqRPoNkDQwTMEZc",
  "key48": "3Rg6xDDWjnrmLcrkgmuf6ph1z9sFPogzbTMfACxJKTn7YdYkBL8uswe2enSnQW8FVFdMoexk9XrVYUdGBp5hK5VE"
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
