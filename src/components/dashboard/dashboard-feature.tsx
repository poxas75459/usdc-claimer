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
    "5WfCFBtBsMcPStQBrGyQpM9kJcDY41RnXLUTGYw53jhuvyhpMKsd4ZyXHECXaw6RFEvGxqXjkLbnRUwTJ5Miuvaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yVDXpkUpW3zcwpNaP69dpyTz56ceFeTFUgxrfmBvBxMYznoG9XPmMWZqf3ZNh987wy9nSTTevGzKxoJT2heemTa",
  "key1": "2mskzUi7W4CnSvKTgy49w7AFdLHFNtZF1J11mH21spiwGk6VZhSyBu2hGEb6EhAx2sMWFQfVAC6HudxEVJrDQZ7P",
  "key2": "2XCBrSK5eEWRMY6ePo4aZFeDMNpKikEMW3FosJsYGSUkXWc4tkDePNPLYLQdCaHx2UwttJAAD8DAsE9AaHuRskzf",
  "key3": "3npfzEGqM52fEgHmreQQPBNYfMmw8ex9BXbqMZU5dfnVgE84nAiRYbgdeG2KFZAKc9ajNErLGnfqaj4XmCFtd6nK",
  "key4": "2WrXEMuaMFLSkJNYeVwfCKmTB6fB6cQUTpA3zjs6rTHyffzRYWgnZ2qJFghQ9Q4cNcAv4dYXHqQnfRezEpfZVgmc",
  "key5": "4BULgvXbHzsANJxfidH8QxqMfpkUMnQwehN52gQFaCq8yuewsMuvTyNaFFaUFBmUTPPQgDYVgM4bhFzYsGqKoXUc",
  "key6": "2EKTXGZzF7Sw7dWRyhh8tHGrxduCcrtNLsHbjfDjvZ3uAd2Hyxh5dpiXp79aizeas61CiDFwmh5Cyq2tft7E7rP4",
  "key7": "SSNaBBm7pbgVjtyGzfkCv7JCcTNBgYefoJRt4PLW1DGTVCrt76q2VvxrWh1H7yqArp7LPC14uQ3vw5xtVoHL9Tp",
  "key8": "2sXtJYxkxoCFLo6BZZdaggGcKS5LyRav7ustUrezZjb83DNnDtnwpatcPScqm8HPx7QNguSnr9ano8hFrDt8Y82f",
  "key9": "qnDUBaPLFz26MsP9SD19AgJ56pT36TTksu3k41JesTNdp3ntsyveV3xnbpC5KVvhQYe2RQJ3oDVdGqUY3dN2uxt",
  "key10": "2NHb8U5oC3eCTFQ3cEQpwQ6xPFRTQQ8m1gji2EcEGaPCfAjg9PmjGm3QXGinkoUTkpaeHUsLXuM9vvgF5AYnBghn",
  "key11": "DK78WW4p7KwQQJ6RJUH1suEXdidgUnR3bS7rRF5sAs8E8SeuGWPyagz5QZnNy3E99bfC3hp7Pw9wRLeqytGnELn",
  "key12": "2dJchS5j7wKKCcDXxv3s1ZiqBkC1kGJkMjZ1AxvYWbHXiEW1mJaugWJpDFZ2yutnk5M2hnBWAMDfkvdjsGJMXe2k",
  "key13": "5uyV4YTsHqyQ9Hj5HT3zaf3amEwVG1J37Nww8Jfnp59uuqBCGC3JDTTHU2u2wGpkB96wbgVahPHuDCF53wP2gPkD",
  "key14": "4sZKWNLPmBveJfWp3Hjy91VxauM9YhJQQmeE51awDavRkzsyiWEpqLh3nmXhnAz3VCn8Dse8xJ2MdVsmW9F6zkEF",
  "key15": "rZgprxi3xug985TQVzwRPMwprwEZ9xcjsrjYyVW2dcvEsn2AjffaujUGc3W8DmVoXxfmXe45zBkJEGkKgbK9txA",
  "key16": "515S5oABNhewdyQGRBcTwpAHbeEJVgM3jW8H4ZV95oaD2oHmcKACW3SGzLPptZaoYXbfpYjhdsAubwn7MPgCifDH",
  "key17": "5QBbAEf7zucsxhqtDbHvcqDTuWB5CN7Tk7MsFx41bJvPp5Bvh8L4paAzzYGjkgtzmSa8rqcjaMZ3QiDyqnoaoFsq",
  "key18": "5w1n73hLKeQXbYUH5Amqa2fHxpr7T4Y9ZM2R7LNfE3sM8L5Ary7sfUbGrU82QKe77HSejNHCdWgZGWSoUse61yBd",
  "key19": "5RWPH4hniMd1gY1kuhaaimhKs9JisQGqaMMRQvv589hztck34EiXacrMNmd4BRpZxYSeBGhP2SuDi827ZHuJqq2G",
  "key20": "32sQ2mWpkq416yvv54ULc59khmJtcSusjswMp63kmLyuXopJAcAc7FPyYosgpAircTa398TWfWQ1dP8qkZ97YFUj",
  "key21": "2TBvkBRhEnzRDVTrHx652E53hzV9eQVdQaef6fhNmn84xbwQn4dWUB4wTuV3GBXsyE1w1d6mNVvoaBrMTfepPuvY",
  "key22": "g2t8CWDJ3S7M9xr8PNVHwUT5kvUDxWUKXJET897EK2pHjFmhpCLmndgBwzZW9D2MRAirdqXqHDwLjFFkjKk3Txb",
  "key23": "2rL3icjg7hvTWueRLYqLuzoaxKLAZ63Ee2A3WgDLcp69dpC4q4qSVFaCGQik1npcnz2wvswF7MFBWL2CfeLcENE4",
  "key24": "62inUcepMeitsmzxAmqookFir5E74Br78KB3bpSHccB61HvxTnojZ6pv7EdfTaSLs1aJPq5Dz4VErnx4WiksSyD4",
  "key25": "PjTSMMUK7EeKiLeDJ2w2fvhjmE9g1q8ooEDL9KyZr66jzuixvMcoyyya4ArWJJnHB3Gj249Ued1YncXL6tLSrDp",
  "key26": "2mwrVduZvLaYFVnrvVfWNGKdNLL337295qJTRVGwEb6pYKpPUPKeSQJ27Rgaf4vU7QCQUSmys4WLXsL1aPkPueaU",
  "key27": "5sXTcSQTKJ5ipSCB1YhueJUWByPvi83epmowHJ4iEMJAqWd9XozRSdyzGt9VtseLFPqZDkZ8y3fmbLqDedX9vaJh",
  "key28": "5uDmtEVEH5CYNSUuc8abSHgFeH6PWzUCECXzD9fexmxEHJJ6AvpenZCJLP9E69UY1qxcUa2m8zo5ixo95QrH5QNP",
  "key29": "29ajbFPTpBGAKNPrLs7Ha8DP9i7TTBFCoxiH8SxQjbNMLCgnAbwoCTN5vjoHJBZELCFpDvCPQapm2CCbm2pGSduS",
  "key30": "3XDFbZ369S8jGp8nBrKakvbneQ8AJBWRjcz3Xr5T2gP7XiWyvV6mZncP43B82CHr3G6Jsox74urVsrRAjP1janH2",
  "key31": "5dkUMxcRtFq2g61JQavkYzeTPUspCrMc7yDfp2NTYwSLuLMvCoUKst1JzJXXLsberFxNATgDajmHSHJwMnU3wmyf",
  "key32": "5a7w1tEz71FYHVNGfXBGngUzXCypo2b1KjuZkPv8uVZu2VELc77bNdPHNgJa6ybueH7qBUh87C2UZSdjLJxXpxMf",
  "key33": "4BUaefBb5fZ2XgCD7aSfj6ndcGz9rxksqWjrteyCXcp6TtFjn9p7oQBthajGd78aJ227GK3FXjdGA2dQjMTZ6zgY",
  "key34": "5jrjEJusetYvAujc9e6YnbGRiEEUDuWqAReDmRXWMh8VKAtwXzSht5uVNsWN7zXWjJN2H3R3EtVtPvQiaUCzfjxA",
  "key35": "4f8dJLfUFt2pPbPw4b661buAnZkec5kfkRbhtnDbNGKEbcgfbg9ByLTV1XBsMkdo86Vw4tQetKRwgKiiVSAFZPKW",
  "key36": "2SmneiXLpdpnUKSqCyVdGzaxupUeAMXSFhXQohMioUj2Trbk2w37kVbAZqjbEB1SCXFJ9Wdpj1TeE2x3FMUupqmm",
  "key37": "2frwgJZeKY7iL2i1516nXjeNGxnYndC1yznxteewrE38qciTW1F9esriryPf5DisoMPqwysLboB2Zfdj9wddiN48",
  "key38": "2Vt3VCKH9sKbBSmDE71rWj1Rvgh96y7mKk2mR39F8kLA5gANm9VmN1PMb5GidyojbZw22k7XNxdQoz19JyepKx45",
  "key39": "5DcXs4Au4prPKGVBqEATZ7LbvqTqWDrtQMLANqyk8pi85hiWWmpZi3dkybLoUH8S8tSjFYLcAokAtkXmDwRHcnWK",
  "key40": "3jJT9kfT48gTgdUQQofjK4mK5xCRQPPKZ8ep4k9jCyH3wepd1Y9oeyj51guWDXVpbwaFcEkhv5VeYhxL9idG5xL5",
  "key41": "2qZQ6ejuDBHJ8eKnBFHCkYGuhoinDfT1LjFpCvC6fvdpLDrRSyauHjki52sGe519eTEM7zuMyZHAXQqkbMHSW4f5",
  "key42": "JijhH5VmEuBeeW1He9ygBfUunXyuCzYJeJtmGSUjuAKbLs1P4RQrfkJKSigTFA6vXaN7JENKJKu6LCMirE5jkbY"
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
