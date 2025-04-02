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
    "3CbxaRG2Ldo7HGEJn9xK2jYCSQSDvsqsUU7Xa8rtAdxy5dBWj9czriCWaGhY4c9fh8LXFFTpAjkne8Rhqne83ore"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24VutVKRdBEbWing73LDBmDkFYFxDppXq69ypXsgvZp9LGB8EdHJQSxnepywEELrVUmR8p6RwZxVPQzYXZgJTnb2",
  "key1": "5dn9zB746zscAs3397L5t2vhwqd3KF47XGrLxYpuSfR9tKuRWTydTw3L8McgWrMv93i79zzskuDjdipH21eWNG8Y",
  "key2": "5JcAnzZmzuFYQy4KwxZiYUHpjgeNrnRWXc3SjVLeTuNtbWVRbRf3jaWJMW6Aa9sCpmqcFUPe7d61ZkgXu9nZmMsj",
  "key3": "65cappXdnKVhPGRRowNkBibwrFe2HK55huenUGhN2tAhMosbbzyXypRXd4atU3C19u9e28VmPDNtAckhv6nJ3a1a",
  "key4": "4nCyHixXFyDyyaqaEXy7CpsNL38hJTpbW1W4AgSKdhQ4Xoiem5p7SjkYs37ccY8Yfn6A4EmLchbdZaeNUvGYVacT",
  "key5": "3k94Ey6C6JYgdcjrXGDvAmAMNCVc9QpVodYWqxjYqoHEhocXxxx3sYryzY5uHR3UorKNg94ShFdt8NWNa3UdpBkv",
  "key6": "4RyUFGaC8hc9649XxprdjPeXoEsibc8Nd3jgfEzUZ1u8bJtjo221BTkAEVgjfm5ayKos86BuAqpVSuoE1s8G9mEo",
  "key7": "3Y7zojKfyxSRiBafr5kQGrE6rDJYiBA2B41KdvqBmQ1su4EJ7gZYMLkPdkB2YDgQWeKkk2KdPDNZNYgv5AjkfuS1",
  "key8": "5T9nSDXE32ZdRJJtyhuwSEbjjxSGtNPcbojRAbdYWCgimidZyJB5txECSkJDntjdioa4UPSxDucMtewmHghR6DWw",
  "key9": "2xyKrrs6FkfkKURbZ5ukJHL76Y9gn7jwRZtmPwLfw3AiaQPHaq1DbTVTzDnazikUThFMrEr87Y4f1kFxeTVf1rbj",
  "key10": "WnYkJmDHHCxE4hboBo8h3mHib8RFoqrqGT4HrQu1yfRwR5VhdDWBKTgQ3qKxJ6HNdq6JyBHPBjvy6PaccYyYB5E",
  "key11": "2pajKBBTmfWDK8U7yds4wCAA1VrxptRTGrnyWzm2HP4PmqH1Bfqx5mV3N6wVKNKo8qZY243z8z6JFwWeiN1Fp7z7",
  "key12": "Pes5EJbDvTgN3jgu1mK9gAcYcYUZCmWzEag5PCSqNTYPw45LF6VKJJPttW12Jfxnc8tF4JNFfG1Mw6qhY9ELDP1",
  "key13": "37excKoMBnVuMciQ1Ub5tDVJU5eEEDinQPcciwp1N8Wj9bvZAd8x9YBrTedNH4BKocJjKQew7okRrY1931CvFS59",
  "key14": "3cs8ebbErarmPRRabvQDFVjw2UN1M3aq1Zfc7p5gzUArSYURY3owbsnxPWk4TBYrE4L9n2Btd7sKhoGrJRA8CFGH",
  "key15": "vsyoHgWbCdPfDMPy47LewNR7nd8hf6JE32S1jPtb911gbLzeNbCzPTpKteXke1dKUAoAPFy4NTggE6dUCHGvCAm",
  "key16": "62tNiR7qHozg4WzLV84xMK4cq6J5ts14hu5P8phhyak5Z5gDW1tPaq1F9DSBW4KAtacRTNLYzFQv11LSF3zWNgn3",
  "key17": "3DcmZGjdrytLXicMTshteY24SiQbPGcXaAfFXnfzSVSo7QVFB6Dy4ebmW3gwoaXwLxJw9epjmPG3bdqYtbz1uTEu",
  "key18": "3Lf8Yna8kUnTczrXjPvtTnXsR6MNGsAgW1bjgbKdEQoVgrX35pXAmfV1GT66ctTmPowrzpeZCt6jnKMTf6es6tNP",
  "key19": "3sKoKmhsvjKzHFE9ZDVNyz3npg3FhxYS3cEMuuDjvBYQKvzHnRouwSH2bCKYcdC4UwQ1EoiZ4m8gmXNT9N3xRXnp",
  "key20": "3rPxbDefxBUNEzyxDNhYaAA2S4WVpZ48KYEZvdmmzte8zgFP5xZtDYASM5TSkkqAkD7Wk791h49icKueQeXCoFim",
  "key21": "4EeSXr3RsnPeYVtkLnrmedemkhihrVuMV5eYNfanzWexZ6LuF3FBCwiPJdmYC9Bn5zN8iW2FV4YTrvewzhVXyMz9",
  "key22": "5pTNZDbvFKEPk6y1iogEMd9D2HiWm93bG69asVxohJuJ87TyD9F5zVYaQXRms77zHKxCvKhcu6QAmfTc4Dk17XyZ",
  "key23": "2NE4cgzPfS2Fho2uhHNWDLqwZGtZp7eVNLY7UXQrSMVjPemkb9D97nDQa6Fco26PZSNzzE9rFW7XBzTyo84kacmd",
  "key24": "fxAW6u9pK93kqD3nZUaZD8MVsLn21ZwJPncS9PoUYx2dk8o6R3rkoNRWJ8WfrF72emQSDSbYfSpja1VzB9CAZGo",
  "key25": "2CMWq8H884nmmUESA1UEk5cBVLpUQQ4JXRLCeZF5YuEeLo1kw2MMKygdsncE9Kg7vA2qhgZExagV59vPUACnykum",
  "key26": "4vPwCZzzPL5c88dZtFUA7qLt5siJBY8n8H5VRXqi59Jyah4P2kXA41pC8kgNbjXadwD2ADxxm6ZN25M4RsnAtNQj",
  "key27": "2Tb9HWnZS6Fsv37XjHWMgMY5yRCMDNWkMixuzLjLJ15BBxV4SppWsVSgMNpmM85Fu3xkyyFTmaRtNcoty68DrpCQ",
  "key28": "4exxbcRNSubMjhhbfDi14FVfR8fvZE5xKx1HZy1zQ7Fjr5V8ozMM6XNGPqwHiRaQJwHRmAiX6iDxsGyFUudMC7qj",
  "key29": "2kCCTvtdU2RcEoTw1ntqMKv8GUMPVb93VFBz4kG4oBAiWF3JAuBFXtAhps1bzDJSpqux6PzkmCrqUFSxQKNePwtM",
  "key30": "4W8xAM88p7k9PxsbdtCNZL3Yi7iuKrrLmwa42eJc3xEfGd5aXaVh8xwZPD7Km5wpRYHu4Vj3rk9VC4UUiYWdgPJh",
  "key31": "62yyfg6FpV2xM3hqNfBrC27R2Cj5scZoiRkzvVi3v9NJvKRBHA9sNcdwsuGKMohA9d7MdHsDhmK1X6XUmm2FZFcp",
  "key32": "3QGyd8dkUwRyDhwoiqPrxkwtjkVvW2ibGHmRnobxn4wwSDv2buM8yV1gn9MDFEwpRcr3yPXzaZLGUHz9tgus9zXa",
  "key33": "3c6ysEGgyD425NYZthZ9tRo4aqko1yazSyBVkDpP4FEdkxRdyNkqSnCEFU8HTStuXvQaAr2JBD9jZo1hJA3vttZB",
  "key34": "443zEuuomfT7DUhbSoinMoQYdZUET9ZnU7kmVvxkxTpsqbHv52bo6B6eyhiN1S3SxWkJV4C88X8EzK56uBMPQfvr",
  "key35": "43P3oDiQrGeghepJRY9GLxPpE1SEr6picWrbkpZv6KhDeEFxxvMVMkTai2X5gpxb98wyFsUwqc6RuJvEN5xr3UbA",
  "key36": "5rtoqE39ravYspRuo54NnPbfknmNogpn6xbC4dKkcmUkBgwunAxAp28P5qTd7vWaKgyVWoJ5tjDVRdnAP7qXX2tS",
  "key37": "36nzx1hhJonZaxqgkhYxDyDonZ2ipZpNTk15R5enqWXCff3TjcJDJeJPaNDSg3a6KptWCNZatNqrNajjzY7Ec1ge",
  "key38": "57qGdue6YhGdFccA2FDm7i7UVhm9uwiG9ztt2CoDbqj6HfqWxakFbSLnK74MmsodRa5JWQ2t68ipT448mDGgA24W",
  "key39": "4KGn32aes4T8kQuyFatYZvfCgk8ieNZ7o9AuKU7TyQaJ4f7jFYS8t4Sz3UzH5by3TUCktYJoaEDZQ6BCkcG3VSUC",
  "key40": "SmJr9w93SNcQ7LPZYCQzBxbeE8s1UKZAEb96KusVznfYP92p1bitk4kWm7ivNNHhpCRoCJyn3GDzAYqTtkpWB23",
  "key41": "445A6CoBXSwxcqKJyUxTAZB8EKpwBJhbv2hjeHmJuivtxnPX5A635hi9QXuHxDmCLeSvAV3Hb7p8hBc3MsEAxRff",
  "key42": "63xUVgt69je1Dv8PtNont3ouyPGdPUTsKqDg5VCAxGCdfpGgFLdc7uHicUor8TzDVcRW2TqET57zcmVda8ME11kC",
  "key43": "4STq5fQvS6YdvfmLvz9e4tNnGRH5XDe59XaTEeqrazM1tECqy3XdRtCmzgpZifyyft5cG3jqkqN6QyfTrpVnwpxz",
  "key44": "438gwGLFMDjCVjMNU99dTeWsU72sMjkR5tzY369PHKdsYaZ3XCrybqxnKF8AfHAmC6yaipJvCPthvS92srfxYp9z",
  "key45": "3cdh5ePMRgnasUEEjk9k3hwfJXEgET6mLBkykaf1AxcmwZSYepyHGL76A7Jski2Ftj1XESX5Ug1pCNZqyueqz3Sy",
  "key46": "39QwGbk6RdMeQT2HZsVrqU3VCHFkVLPCnmZYJjp97GcPJGH2EaXd974K7TsPTYxbAhdU8hx58N4jjUNYogGdRULp"
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
