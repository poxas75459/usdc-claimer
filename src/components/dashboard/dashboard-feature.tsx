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
    "2iwDLQBPmGCK47CufUjyrevcdT2SiRRiAxAbpfGBo5wbLyr8HPH48r9K8F4cXcQR2WAxeVNRGYzAACpXiAmqaoVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22JRMTnwB5zhHHB1pfhFZvWLbuayER1BdEBCbRoGBjKW9Rt4x1h8s6CqzcKnYEBfLL2eu1VWVMRnNgZTmMrZK7cE",
  "key1": "wgUbDKseruL8vLKGRpkxBeUhRWoqfTCrUPp1yiniNxL6pirvCc7JZuej6UmqeYzKRcHa8E412JFTTJD3SqAMCeT",
  "key2": "49ciVyfzu5XKt7xeLFw5dEEYG5eu1vg6h7V3c8xMJbRg27FANWS3rpWDQdEkWsjVpaXxi3wayuWdHdMTncxAhksS",
  "key3": "4mE9hw314WXvWGDHPFUuW8LcdnGCvAgf7oeK7Rsn4qiMvxeWdN4GjUmE2w5pQ3oFkKNVT8zEV8ama1KGoh71qzXR",
  "key4": "5KBobZdRtpudfSacfiLLkZenyBJLYYukBRRu1DqK21TbcBiRcVkmEaERvjAjwyXkkpLz1sh6f3TJfQabLe6bF2Bu",
  "key5": "41DToBc981jt6nmPpVuw6AnyqeJGjkeLrxF562tQMe97ingwmBvdbiTr8Z8H2GFwveJyy4eCumVRm2PD9ZAqkhRA",
  "key6": "5a1zgpHCetTFPo8HG9V1YvYG6vVvTewtWsELQdQNp2RqP7PputZQcMadjGFkeqvtkRsZ6DvF5Cyh6Qx88Tc4seY9",
  "key7": "in5mpuxQFGopjCA2KNk4Sq4Cnb4k6FfYXygYM6JAjpa9Loc6h4NuVmzbKHB95NrKpdaQ4tTkF5NF8tZ24S59J51",
  "key8": "3F7sxcnYiU2JmhaVPLtR7dRnMAfDTTsgeCAawoCoivWVCGWFvF8WfmGn93KexeDA7274jCyxWPytfGMPiQmAYi5z",
  "key9": "Q2bm6vGGbSm9ZokEhFwq7Vp3A5qQgNBX8yQQdkaVZtcbSU4PnKtER1DPhF8Hy1Euat4LrG6FVz9jpjaFVG28ZDW",
  "key10": "2rWm5bbhBYQZPBzRCUnCoFocRS4BKWKUB1XE4nj7PX5xDx9PPnGux94vQ4QRbFrkPZV8n9w5wdzbPDtscN2sy9d",
  "key11": "y1Q5fpNBZUksyyzbgC7aGBvY1mXo94KoiStE1kBaHuGdo3g7j7grRs3bcUkPGXGdJf2Ri5F4m84n1CwmLYpt35u",
  "key12": "3rgUN2sTBNosEXr4aAAMzRo6WZu7qykmwgXVu8kXuZyndKSRARhcVsq8dgF9aZ938EA3smAQKznpCdymzr5p4nfH",
  "key13": "42JXxg7Jw2PmBKasWBriJ65ptH8ZhFkdt3uBgTh62bcL81ycSuvodb1zACCRW88fK4WZJkjCWv5e4qguPGDtUc21",
  "key14": "4sSc6k9bgPBkndceAdkz26w8yL3VDxaa1BZnjqp9orZCrLLeetQgPqf6NK9yPwLYdzT91xrhUdneubJWDKNW9Tis",
  "key15": "4vpwahVXsvm8Kifj46UsBshkYbPVvQaPi4UGuVCMM7YjTjzGK4tQ6m1oYWfy4DczhjDDqQsnUhegawDLVWWLCbR9",
  "key16": "4d7XyB8FWGCpdNha192xT3MBdqqBhjhptXrBtWc9Ms75Hv5pSn88NMTdLHg4yWBTvocx9RyCZPCp4tJzehE44goC",
  "key17": "3aBe36fMHvPT3UtTyEJdHtR81moNsDb9LKYoECUiB5B8A7tukWhPmJ3UZqLhSd4aSpN7mXUCbPZPbFSS1avs11Py",
  "key18": "3jSVvMKi25d2s4oJQRQtrgY84pmiqPQA9RYaMnhdfGd8TbBCgPuZ9udknpWiXNiJARWJRMyMRRXtRdeM1auBGcHu",
  "key19": "5Xctq1VoZBEZ7BB6CVpCo8NccvrdjT9imRkLjyBxXBpfjCCaXmmY236i11uCZomUuZa5nD7FWdN67EEAMpgWNwG6",
  "key20": "3qGGU6ktQLBJj1DZGak6CTRrGrEmyb62xMgpLFv4FSQ2Zx1kZ69wAAmSbbQHenhGNdn6nZ1Kr4ck69dVaGmeCgcc",
  "key21": "234rqEVTowD1FGzmCx1fb8xSnus7d7rtocAikGuEqyFq7BAQzD16oGnoJYB7cUrdFq6RqiD2LyyVUgysBT3akc6W",
  "key22": "67hpzaxnnLgbuAZ1fZF58on4K7McVdkimNJTWyscppBwRPb6QE14GouWoPWViBPMeCqbQQ48rkxFjS1AnoTo17yi",
  "key23": "XCuDxMXwitx4bxmQin9U6ZYrCNtFR9KujrumeddQMnUK1qtZK61vLeqWUDTEwJfcKrCMD7oTYWUHA2iGVFrC7WF",
  "key24": "8i5TCKfbAYtwnQWFEkeaGguw4qzLJMgw12oxAkftZLGa3JAVUK4QRy7AdXdNGkqU1bcykZwamWYFFfXqb7b2Ndw",
  "key25": "HADRPqZFBjg4GZ3qQEdk6LbfH2ZS68XGgf8B988DfVQ7StHDpFmdfnMrYQjUL9K87tthhY19aWtsS3oeHRonna3",
  "key26": "43hL5GKDQCAetZRJrATTredHrb8VNGprG8h8D1miBU8w1zcSChghEyB2bFQZkBvU2tcwJZrUkugSsAWSNnqnBRsX",
  "key27": "3fSAfnaTCDM32tcMBYSnR3oRMpAqSbtWrXomehwbgoQz7UHWdoEYDwt7fsmfAGuZL5jxbFgYsTxhgjHutWygRC5N",
  "key28": "28aEaazisCXsRatQrFq3vKGpF2TpU4SQVFHh4j7m2WLAjYq2t4Fu4kraWv1ZMt2wigHJ7BZGDWxSBXW9Tgkov1Vh",
  "key29": "2QmLa2ye2dhKBL9hdUhCKiD3yJ6hot3oYbDgC19nBXVmN339TUGEKBbdiB45fakzMHpDKa2ahoM8XWkwaqCw9thU",
  "key30": "3WquuADtcafiHsqzrnHyCi5dRe2gHzz9A1u3cDjnD41JG9xfxMn4tguoKB2ATvjMM2AMLHzPeUKmAabPqJ9L4ZN7",
  "key31": "4jEi3jDxykZpvCGBoqihvduEMUtBiVoaBS9AbDBH91VJTgFF8LEYgHxYLDqofFMan9c2JFYJHintgT17gGmyLE8E",
  "key32": "3qRvWJa1egMwZhkF4tFSWfGZFmyXezVjQ1VSuALBRDGTrhZqJ5p4JkJrT7gDaP4wNK4Cpdqj61E414QVEUw7YU6",
  "key33": "58HrKpp7E9ZFhhymFL2csNAMWGLdEjyHSikApwR6kSdzdKmQcMNdepgPgsxyDUiB8fWg2mrWQZ2e46n6Bkdghr28",
  "key34": "5wKnA9PPm1LsDgmoDuA6sQzjTFg2fNrtpqCNN9aBj3dppofhC6RfQfFi35AjBwRKuAds4a4VBEkvv52qTFfSGA64",
  "key35": "suf2cE9Wz6FyXHKeSLrv1k5rYZHCr8HuoYH855i2Lt8t29Dwq1KkXxyVRuhENRTqdps42prukxKoPXu1kyiXWqr",
  "key36": "9novrkmyWJ61zSCbPvMWFYiKroSeS4QszkpDJpGE3nTdvb7Zhuw9MN5KVrDRoSN5pe7eHmNCFEdXZSkMVDeaPAZ",
  "key37": "5Z66tWwUL3C563RJEBTs6pWDfCAk3BkZVCRpJnoDBJ9nFg5He5sGs8NuBB65JGaw175NWri1azgrcn4v2tRcbFfe",
  "key38": "3BRLpgoa41a37tHrtXth2pj7638MLm93sHUHBvQoq2FmNrA25u8WWGxQ2D1THALF4nv4aR27Gmj2rf9We4W8KyhP",
  "key39": "3NcjDLgLeQrE8USpMFWTJLo3jwv58B4zzgnAHdEuPStytxvJG6zDw2Y38EpNTSP7K3StmhUA2Bh45fcosFs8MhwD",
  "key40": "64jkdzNSFrB5nPKJnyRPu1RfekZdgQprnhjQi2M4PvLYTNkeka8G4cgzfpg7j2Yxprf71dp8kSoiWyRbrv3GxkFv"
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
