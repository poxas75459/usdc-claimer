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
    "5TcTUmGqnQewNbBcWRqiLAUW9WKAWBa4R2eQ8BquecB3JNFVn9y2jGBrQUkiBjEDLRBsABg3vA5sNAfEmxCai5Sp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bkm2t8ECDtiu5KNc4wvXuadLyLDHeoBG1V6BPevVAXg46qaFSMMMdCKbwRsyeT374Pn9iWMgPkniYJvhar4LHkG",
  "key1": "23Xpq3aUH4yEX3FofPJkfzpTk5k72oTSgLtX4QScHsYXGQM9Zid2eUtey1f4NxuqKusDMdiexVMwiRSrrXS6fDZq",
  "key2": "5L7BkZgBa3ASezQxyN6TSc16sSHSn7wUFeaionQeVQVi2rCTSaEbvKoDiLuKjNkw8T2eU2zv1Mvb8kSHQibC1P8m",
  "key3": "2bpzsRcJzwvhEPJXDqHe7NoTS9spTFwKsL2wrrSaebYfwRTZbt7mo3VEREYCRt4FsvMNF8sP8U979LEwinJUaN8N",
  "key4": "34FEa65jKUA8EWE2VnKeyyVfC7KjzQr9FY32nbZPuF3E42iYSoTHjmo3dM42FvGKaHwNENEDK44eD7JNusDqRi5W",
  "key5": "JKS5X8aiEPHEMcWhxAGXPKJKYw4aVS8dvFqHZK6bQEJCsAdXzEjAUodLXyWVi3U1dAJCVA4chGaQr9KYiKS4XW9",
  "key6": "CbfMkMweLMYBiqUoYm8Sh8fbjCe7Y85rL1B9tqM3hsqppdqttQHEJvrUp9ECo67qyFk1G88HzfR5kHuvPJ7gyxu",
  "key7": "4J5FeARVfYR1wAPTHPTpfqtVQKabVTnb51xxv88Duz684ReSM1mbvtfgEKo5u7sPossKBWv376ZnPfx27Mbr3HiN",
  "key8": "oTBMG175yYV6AamBXCrDavZACTtSimYzXZ2HjkW1qcRpctvnWWVZhnuas8DvbNuHiWyJ6L5dGYRnhjm8BgXzTSV",
  "key9": "3mYMoazzngADMkBDnwduxstP2TymotDqGHqCMjPJWei9XLi2BtUjQGnSN9PLcqYfTjDM45ocSCT5Jn7gSNCqNNBy",
  "key10": "5co4WkCVcnAYjtJ9JbDxr7TzikUYcU8mmsz3myFZmiRmVmgZUiNadXuohLvkmWhfSBJX2Wr3ENtvUhJMttA5Stxe",
  "key11": "4vkdHgfkh3iXE8wtfepCnwz733sHfTKbSjQg8NutiL8ies3be1RuNKVojaEEba2qvtEpM2cTG2eedshEQV42QVAb",
  "key12": "4WkTVycB675MRSEFEE9544b1C2e4pRqJFgd82NvieD3swxXQJcz71mv1peod42cGx53hy5i21XyQDdryqh9DVZJi",
  "key13": "5pt3d1AnEaHBEiMLCAFoP47aJthbXWaE1bYGaEMFHr3PN93YEQxAVGAvGHWH3VVQcj5GunZK2fPyLbtyyER68pGR",
  "key14": "5MKgGAwJZF5PpHHtBJMUEQwaF412TmfvUywENAWjVVxaE5tF4yLjYqV7KTYYFbHTbfdbaQewgGT4yfEwZCT4W9uJ",
  "key15": "4KZeiSdpWp692B2BynjGjKhc2EhxBEbb69bmxqQAeaLHAtUS8Y9ChoFVvJEDjp6mprVyqiXYmFmhgTGRZzRAMLUo",
  "key16": "4iiYmnqG5mT2S5FueFj16A86pmhL4gQWQcM8h8vh6z6wAysVbBifsTnRjb7TujP6NGfPoTQ5rzuSyT4kX9s4SUGs",
  "key17": "2Wj1KDSn6kjcMiyBU7LX7jhMiWwvSbkF1fv7tb7JXmBiVVLDwZ1kb86GtGMRMUidLBw4t42ve56oR4irZ5V96Khe",
  "key18": "3TtLXYQiN5uSWzmaTk2xPz238imnkcudmZV6QxooVqUfisPmxakmy6mGFN1M8niU8QfAn6Fjqwbj3J2kp69BYiPw",
  "key19": "5DnoCRaS87TZ5zs2XBmD1CSbdmNtGudwiz6pECLHKQEytMRFKGHvsDiiPCgm2QpJMbRkqH9ECVJg8bpRBjyKogzj",
  "key20": "5AifF1BpFboCdf1TqwEK4ir5kr81KThZc9WPoVpDist5cbrycxX8M6pfEd62SN8zuV3vjaFCGNdR8CVknCvf22Cc",
  "key21": "2sJdeTYGMVmTfXzFeq2oErjHV1hjKCr1yTfgzz1PBLhFCvXq5Nb7Y84EvFt6jKrEjTYpuAUPfmtPC8HbF1u1zGtA",
  "key22": "4L3duRjHwpkvTdBk6pctrM5WXkoAjH95rpMzLsMFm1HdiGDKoqSpmAzwDL9BUqQnSKprDjnWZsv1TTpX1QAt3UA2",
  "key23": "4yE61rSfabka2Wc1YCHVrESXcL3J9yeZvoZgwkxevvVmBkvHVaQkC6dMthHmTjRdwauUGSwR4AuL71VRt9NQDhrS",
  "key24": "5JEXG5JhRdrSN9TLf2NsgdaaNdRUniCtXxS3eNuzqQ2oDhowYey6ZM866wZnZgwSwuNjkBeAifk1dKVC8UgFmyAY",
  "key25": "5Kg3LDUWgAzRcmrBU145GZGD6DcX99m2Frb6FkA94Y88nEEPKrxmgJVTP6emGEaFUHjs6aHNww8kHJeFnDwHAzD6",
  "key26": "3EpETkJF4EkqsfHqnYTr8mzdTdqo6oC7oearLkgMcKxZeWw3fYyhE1v8WVwHDMVRHeRCa7VzSqfn65xR6hWk8oKF",
  "key27": "4j5E18n2FtWGpoVSCHKwDGSgJvnA7WrpftjGBZxAKVs64H4CjZH28XAMNspokSQ1keBQgHrBxwuoAzhjUrRnypNa",
  "key28": "29cBMWZBwbHZRzAb8yJQi3faiMNm8nnPW75z9XUdsYJ7gNnyGN5Ty6x7u3DU1iJfV56J6Ru3s3TRXFNf78mzTqLe",
  "key29": "3vGHySVgdbcS1hGoU1nU9NC6RLzCbuGyMVaj1Thswr7aSnjNnBLr2rp99P3kHSAK6tmULfgZ4m1n6xrhf1Av3nKS",
  "key30": "4PqUmxAgPGGSWKVERamTb7GuYBTUQLoFsgQmeAdoXB1CdkGxVSLNNCr3kTkds8rp9UPaL2zDpPr9qQMtY4NJwkPQ",
  "key31": "5czmLb7Y5uNCr9mg23hHFQ7pXapokPtxpWiwG4JtfrJCfeS3miTM5eMLg8YGJBKLciqgQnNBEbh7uLb7NsKezUzt",
  "key32": "aUfPyaCMzDqG2CFQpFwsSMSPohv4JoXRoZtwvXr2LaajFFnn4b8PVqHpb3kxtkPJtz8hiqyZZe6CNsGgMtZyKqK",
  "key33": "BK1mRMRNYVffFa5822csyG8CjYH6HBWf36GFqfmmGcZVLQAq8VHgRtg3PcbKNAZZBYfTcJh5Pyn5s4JNX9NyHDQ",
  "key34": "5QzRUpBso9BnvN3P5feb6YbCy57ayKHHhMqzWSijWK1rnJVYB3kXSK9YqPw4qobwUU12zTwh14UjkobNE1Z8XDJ5",
  "key35": "5SK8hhzA5qqedce3Vd9pF4eMBAueggP1GTkxPtM4ViT5sRwapzzgPeCWPpQa2G4fCQpUezU3FotKypYQW7YpaL2r",
  "key36": "5Vev3oy8GB5h3Bn37S8jbTY2HjfnmZ7XWg6fZin7NPRPPYnGrPYeorUptwKgcFnqm1HzjJCKnTfFjnpNzQJeTVQ5",
  "key37": "3WnoKDy3HoxJ5YbqHbUmXkRBT2njDDco4yKSmkeqKHzgcna8ESCiTcPEZYSQNVfWDxTnEwnDGeqr87ubjQXMDjtA",
  "key38": "5Xb6YuhDFzHrs3MSTj9kZTQJRNMLqLUvBFCmD3ggRy8Ws2gWVww2HBw32nxRxYkLsppeZDDLJgW27eV7yiXDEH8R"
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
