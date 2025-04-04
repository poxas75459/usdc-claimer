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
    "37mHCamxK5CVcoqjjtrMazVXqpLS3peu1uHCR4VYvu53pYBmCkSkuuGbxn9SEJsej4G4fKpetASMmAo5cUmaLn5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eQ3ZcwtVw6X7FibnBVu9zMbTpTsQC58PGuF3rS1UnmjaN3bjqLGYqBS9B6SRgoSroUnbhpZC1PYDMtW33QPW7Lm",
  "key1": "4Vcnthv487WficSq5NB7zCm8rnNtfFUnnzxHNmEoJ68PxD5or4AwwR2MV8ZiQskabATegvppjnUcFF8HinMgMbB4",
  "key2": "2Vc6Pb8Qdr8vd8ZL6cpUAGWHmyxKKHni7LcykfCvLzZELKtzRWeHH2qXdiWHDDwpMkrosPVd6JetkhvzXc8dV79S",
  "key3": "2VTmYohHYRBoXwbS4r6tpANiqMemnwWMdrqusmPJeir38Zugpy2J8sTpuwh8hjFBXT4xyHDAbqPxQdkBfrm7w33B",
  "key4": "4YtgojqSeqxNiKRUtEeF7ig3fHsrBCsPxZt6Nw88nJVRPoCDXe5CZ3kNG2yzCBZKLfqbLaeRfiPt1PTDJkszXVjQ",
  "key5": "dSKHyb8kve5twii1wdN3f9KapMoALrXPmC5noeA9VcC7pQg5EoUTatM9ZAisp3pkG6WKnUs9PSzkqbsac9vaK2i",
  "key6": "2BL5SuLkgbi1YjGrmiTSZRrcnLYuaAMrVY3NgMQYudHUzcHM1XCxe3D257v4baWGXRKn8arPnoQWKJzqzEneGWMc",
  "key7": "pBBGTEELFYCQBuQDzPaJxJhbQ5wftqvdUJRkvmpNNBoPB5GXPNzRzg971VR2g3MuimWvGvtZtRmGfdB8p7MWsbj",
  "key8": "4myfPE2epVSxoEHRjRThU15nUACuj3sjU62rb4hsoiYeUrfmwbaA7ZtdSge4gLVLAcf64eNw1f2HbbCYEC57kE7Z",
  "key9": "NcwHJq8jYtudpSX6bzHFSNm1H7MhaDTxz6g1TZCKaZisKy3WXycXMGJ6qvUFMEQ3K6c5sqAxLfmDVimHfj6ViTb",
  "key10": "52pBAqtGDE44AayEpsQPbYcu7MPK1Xo4L2yQy2TUcMJsFCKbaJ3bWVroxaXZGEHRmf93MFejdyMxRie4mzUFJ8kp",
  "key11": "2UmRHAYHGSEAjxFgymz9b8bGjZDignLK8n8kf8kMm1FMeWSdRrfzzhZzRhuN2Kb6LLJ6p563y13uqSnmh5SZBDgj",
  "key12": "2FQPgP1p1CFcQWPbmEzRygmfg7xhMMNgcQczNB8SBRZpwBfwaswySVGHTWSzDFMcYfxQ42AfCwsrC6UTt8Wr2uRz",
  "key13": "3FGjntABAm1XjJxfgw4y2H6s9YE7pZRyrMr5cZRDmj7XgDnoNCx6vT2dWEaXKrxVeDJWmx4FMFbF4v542jX3tCAp",
  "key14": "K1pgJEEGA3MjaJzFVxxKkNKFmBnW7gvcjx4WNmmN9vpc2BD6yGm6dm9dpEUKrrF16LDHWhhmE6yJiUEhUYvdzM2",
  "key15": "3cFCenLiKvUt5p3mt9iH3a7KxTB3E6V3MvzEJkKyimuSbA7sNzyBKTS2teca2E2aJU6ZxUZ6316VEYCf9p6BKVym",
  "key16": "gaApB392YNxB7f9HNDPesC6aU6V589qge7tU7SSeqGsKBqvg1DEUwfyE4C5kmHzQg3Qi1KJ78FXY925bEFb51rg",
  "key17": "3Aw6rKG2gYDAzKPUD66XB36d9S7mvCxHQkjK2tuRBirZ2xZTX4DN1g3Motr4f4S6BQVZz4yPbmg8oTszBsgXBR2Y",
  "key18": "24sioMPog69jY6EZkMNW1F995rPx6XR4Hn9d1LqhaztH6KogvDk5vBGTZRxPRH1Pzsb2DUYYRfczMq5KWXFZHb53",
  "key19": "4nqXk9pNEsNgerT7WuDRb473KmDkcgtU6WASMb51skdg4WFUFQiMRBJrYBhHcuJD4HbVBdidvKEYbzAkZK3D7JSY",
  "key20": "2rQmUjh5WVroTZdCbWhVxs7z7oHubXdNVoPryrvd1ZTa2AXGp2Eiy8un3cuc5vJ7XtGrYxJ1Gv6xBHKDJoF73eXA",
  "key21": "2KQ7TR6GAtLC292xwShLDCKqpqtGBtcQxaVZhodxtbLt5JEk2ToHRtW9BB9syJk3nJxo743PdXk9UBMf4BXUVt6g",
  "key22": "uMP9h6UFZSwS5HYweHPXAieUYoxNcaKjdJv9e6cWTQAsFemadYaHKhYpYiBemsCBiyWeJcKaW8P5DY44GKDeE49",
  "key23": "2CMKoLHmJVZBA6De8vfUsvpAaZWvuzfA1kfotavFEmy7rMnU7qD9YTmudduCbjfTfcrcGagCH2crD4empzLsP5oh",
  "key24": "5QQvFdPzFPNFnpxnGt8wr7sQAVqwbxGRJ2Yxz1Bcps1u2KNY64byPPEyRcCStjNPdRkeds4DU6EbcX4itdhrAj8d",
  "key25": "2HH2uhzkXZfVWBQXSCkrPbCh6Nd7m2JrgWEqfT4giG6PbXGxJjjtdPtXGZCdWUYssywoq4p4q7KcA3vtgyHaPKnc",
  "key26": "3m9utrWL92nepTfZp6iQPUrV1MFd4tsAHRv9X6yEW17B9baWtpMkTDYhCgqHpimxWDXkmsmwYtDBS6KcmkBaGt5b",
  "key27": "KUQvNE5oxvvti7NFzxGvWvfugFrWeLU36egZKdmt4yha6HSJWYQB4VCexNSXcSW8f1waos3sSD65XfnNrenqz44",
  "key28": "5k5V8AKw7zzAfeFuUQAmj9Bary8MBzNpqh2vpqMgFY8X9B3nizdb7zLW3ajRryv1M9aCXiGDLRUQxL3wA9ow2fx1",
  "key29": "5CwTNip5frMLCQ5eGT2TbKSShxQYnhuPMydWLVhU43hc3DzYzzWXQ7R3961sF23LXVcEpgLMpUxtSL2duxVSD1iT",
  "key30": "5NGsBZgxDXRe13hNdcTEzSjAg2FcKsBVvQp46P9GPovpTcB2zAa9PdqdwW6b4WWcwdaHbssAar2ft6XpwuFKHeC8",
  "key31": "uicTyFn9iQ7TsRbR3ksWdFikyTnzT6VH2MnWXEVfUmtKxdWAubtUnxsHHMo4A9nuzfx2ezcAkcGRRnpUyUWbFiB",
  "key32": "2jKhmQvkYuKhT56kPo3PdjZQeWoTRWqx3a7JLsLebLSysrCSDpSAyzkPysx9oHupJDYxyemTAYTXEqu5Vdg7Gk8D",
  "key33": "2zkhgwD3WeGC3TBsak3M1Q15qerzfSDvFPe2mSHPSjDWxPqYyGZVQgkQrNoENPrAX9adt6qMaKimp2ZE4JD6SyWg",
  "key34": "7M52bVn3okVj3oysL1rv3ktZqYECER5Vuzn2cxFmN1ceZ1X9dNFAQWhvXuGVt3krLCnSDeJ8YQ5RvTG3C2QzkAc",
  "key35": "4V2UzeXuJgBS87G6oyXpeCXHTS14Bsq6YwjdBgfxowdWDcFmVPHxasspRt4dDid1psNN2w9qxTS9HSaEBeCkf37t",
  "key36": "2gLxFEe6nvJ9icEMWDS5rFfCRTndheTd9HcE4m4hKS5vUiY6YpYrRgmxr6wTC1rUhbBjvSpo1mhKC7d1meYiKCir",
  "key37": "4tFPPzdaGwj3GJcJX7UG8BZAfahWi42A8tLckv4x3Q7w9t7e5vAjmnZ4byfSyN98pVUb3aMpGFamGLCrucv2qPRL",
  "key38": "5nhpy24jCS7kfhknPLSaDtkuD5eWRtP1awm7oUGcDSViRQzg3UWLr2vFDcVGPDtGsTRHyQA2A2cgaeiZWqkzE3J9",
  "key39": "3fSHYy3mPc4Spxov7hiStJtn8DrDCTtkATMqygCgVJi8HQt8m8vXz3ZJ3VLwkGCsShf3huqGfsJML48f7x9b49Xb",
  "key40": "3eoBu4FZgaynJUHTxroFgjvddThLG2hVAEpRSUNFYmnsoQbgWN56PR5pe57muGLyGuN8BNRcs1npCXbdFmKNAhSX",
  "key41": "5km2xSz83FSDA5TfCGm2dWm4gLZ78EZF3nLeihFsg9oqcKGyocJp7gKTubrC8xutZrUmQM8U7m3Xvx4VNpQAPahp"
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
