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
    "VPCdYPjPujagA7qaczDth99qP2AMSuAdgRZdNiZBS1fonevyDDeh7zurXdAHNPd2awGf83q2DvXSeKAxfxNWDwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RwfDnkTakJsTd9wZVfdZUEjBg7FpRvE7euWcQdUBPYuELPF6DbqCAspExp5WYVMJCMVzApK8LbHAESJK55e6NBp",
  "key1": "yx5wF7kMugVTDTXsAqE6wzjHsVESNC5KD6HAVbDCZDsxT7s5e8fwDFUwthxtY1oUYXmbc5FqBmoeDAbYzqQT3aZ",
  "key2": "4M2pXvWYS6uUWtvTjcDTSUhbjAec3SP1XbVL6Se1jErRqgTUzdZ25MoeXyfXPrPDb56eafzZVbE745hCsoAw2EgN",
  "key3": "4Rr9ji3PKtP8FSGtN6E8ZXvm1j2HFZFaaafoAinEssiC7Re4n5wVLpaa8hrprACQiKDGLzQJLxa4WZXrcbeNTSxm",
  "key4": "4teA7bZbtASgmSUy52ok8mnL7iSdCi5YPjucd7cEgfpa3Egd2TuyLkEExLHHCgmdt768KMye3QfDTZdeX9DK4h9S",
  "key5": "4UzCgPRSa1fiDffWjCKyomHg1nPrfKuBuZRdwbjy7FSMnbjzLKAj5aziSEWPMJmbbaRYhVJ6z4Jd1imhBAnwCb4v",
  "key6": "22d5NHYUh5WEm8NZodyV3zTimeEW4um66nNULiaNcTNvbsTdKkYAD2cnh4j4J9QzUmTiqQnfBSPJMepFPGti9nFH",
  "key7": "24XQdAc3E5U74k2f1f1NULpeEAnKwduTiHZRhoMbtiMgPqjw7JjBYrfZLxfwRf9anpS117JvB9P6dmTcaiDVn4CL",
  "key8": "4L4zEHaEwBB7T4JCkWF2eqL88TcyPyCf9yzabJK2GHwf27nhLyQuKvhTdXbMmKnKQsAzowzpL3AGbHVkK5vpabDz",
  "key9": "4n46c9Lymq4ELm6rLx7yLjQ9WRwNbTPM3hkbG4gXvtyfqmqeYENpWXgGsSDv6KPDH3Z9HL72rm1CpCaZDxasYSsf",
  "key10": "5FRDhiAGuL8EysbVpY9iRTJX9BDEHPkbLr6VsWMEhKKRDbMxm7nmsh5HcibJzkAuY3maFMK7A1Xtq5L6G6NK6N9H",
  "key11": "5CfxSK933gmtvKcpVBkZTdmVEMtF6JRqQGdq69RvKfuSBCrKLXHVqMnFysY1J7xG3PSE1oro2p4hMX9a54jfkkBb",
  "key12": "5wP7z3LFtxKZFMonvpBJmD3jsZH48U1ABUKUFjLk7nknRDT88RaLKaLUitQTV8cW2CEziEqTe614emds6Uv7rdhS",
  "key13": "441LujyXgPNEQfLmwcUAJytfrNediAdrdtx6b32B8PBShfm2YvZ7yeYaDygxMiyXTB7HzKKruuSBdS3pg1WuVncj",
  "key14": "5PAtkx7Fe1uzys2Faj9Y1v2LPFpnpBW1YUpYM86rig2fhqLdDpyJXmv1pLCLj83u7wF22Ymyq6qct8UWCwCSrgfo",
  "key15": "2oq5SSCbMAc6Jebj9PTnRXFzwtahkigtEFMEi3FjjEJHSUUoZWFw2iVwSP7b3tUUBLS82yaeACoMxcxtyHZTFK9o",
  "key16": "4Pm8iGuuTL5ZFCcTfnPXE8eXY4PGdtTNQ4Sxtk6o4XoJW1A5yLB1RHyeT5KNzRChG8AbdKqRVPdBq8V4WntHiczw",
  "key17": "2r8dhkr8oRRTv5jynG3BXjExAR91vpnT3LD5Sj6c4nLF3b14oQWBZWuHtokmGm3segR8LaA4WVfxxVPDmYBodwRu",
  "key18": "4KCHLsfBURA1Gx3Mgi2xB3AHy7HMXDF19oTWgmrvw5mrYK7Hw1iYUSkejVvwBwJDPQs8mXtKM1fGCwDbxNJgJk4Z",
  "key19": "3TmvvMmsyPvMZGkdTfHwhzi7vJ629cDesrJWoePb8eBB6PACbr8du1RxSYXcmFhdKaZFeR3FeGJyTLpQiYu9K1mv",
  "key20": "4CboNRJKaazmVRgURRaDLeZ3qXosPnrxwCFdEF5sW2FrQ9bhKc3JuiLgPJnhsmQiVNZhNj3hpZD9tgZ8nHV9qy5E",
  "key21": "3NaWNbXxUUHqGAgyh3AJk3Lo3wagsN2tb3ZN3gGYd4YYGNCvo7WrArvGpsQqCnzP94SbV67xMYCHLfTMjtQRHkg4",
  "key22": "4p7Sr4EXMGehcJ1ZYr1ZeqZXg2qFPPr5afsW59ie7JaqUYVkoKcfQCYKUq3ETC8ESFjMkB5fRFfSaAwrmd9qcu2d",
  "key23": "fWNoRBuhUaGdmeNe1L3Q1ukEC2M3d5qbYkTuiHHLBeCxgE1zVr7zWhGvdvrfRkV2fMdsoeyoBUcxgbEECVyxfQj",
  "key24": "4zpn7TMyKj9uxwgj2ndi5U6Ey2PDdthatMdAhvqGAFohBLi6PAPNEHM21jKgBf3xiAi6pPRkmruRwiKnY5EykKtB",
  "key25": "34Gs13fiwh1GpCxgGtrupDfmLAz4CiLzGhuxGCMpgYvZb9a8B9rP2aLqbUkyepsx7o7BfXnBkG3VGShebpKttFyd",
  "key26": "2XWAXH5eRzgbjk2gBwvrKLQjgLUSDDSbWxsmJBymcuvJtEsbvdDKrd69iRXkwzJqFMybkHy1oXNFDiZZcNbRQ5Y8",
  "key27": "311S4Eig5ZkWYxWJfYxzdv6GLX5EbR5DJ4CD62tkqqUUWmP95maLpEEM4rWdzLnemTZWWQBYShZhbXJgtTL8245p",
  "key28": "59Lsu1UUFHNn6BKcGA4hACRWXxMCE4XNLXzWzBvCwdtriYkVJ8Jdw6VLP6gDQ44CqjAhUCz8L6zpgrSSbkXXfane",
  "key29": "4oyXs7yPj7xLuaezAkTFXFFnZD3bzkuRjycLmE9rcHcg9vJ56D1G26DmaWqCV6ajfX2EGEw5TppmUVKcsYAxQAkm",
  "key30": "4Z5y2oD7DVV3S76TRZXJJRnQz39GTAstwBgw7jHYyMXYhPA8rZfXdoMetqRK5GfVziVTVo2Qr53kFdvAG263dbPC",
  "key31": "5t2obbS2mnJ96Y457bsmBQCja6ctCyHvSc1ho3Jb2DTgdCDDxyvgtvSLbVtm3DrGc98m11DAdC8oSV5LnoEGKgLt",
  "key32": "4CsVcGT1sLxWF1Tc8EzBDjBG2yEVFXzvb8g9ggieC6CPti9ugypdhYDD1vKidine1EBiQDUpMHQJSXHaiupe8Y6d",
  "key33": "4j4xbtBaZZKwmWW4LEmcqpEZoCk3Agn4M2SddLHxGmtRmUTr2j3tTELWPvLCKmsX7F9ZFr47C446Yp4AXexeqXJt",
  "key34": "5mnhXRYvEWwt1K4nATAVr38a2Z9WuNqChcyD3zwpZiTJ2HJDKQ49FT32S4YShgpMph6biDhfD3gSHGZFY3ZTVe3f",
  "key35": "Q5SG2UwvqkTR6Ht5Q9nvmvJvBCvBsezUn5wRA3LvGgVAmcBMtxhciGTMGEosnkkR2EbwNHgnWL2YpiJTAQEVzGR",
  "key36": "4rECR8kS3Bwqaqo4oPtbxsmiNcGEnHa14qtesXcTWyCqKvPKXRau3NkfcLBNhSBgRqfrM88peUXriwuk8jz5cdQX",
  "key37": "pYEMoQ1GXovLEdnN1S3g13eZosxN8XcSRhXYXDhxcFoswdq8LswJRHifrNg9QsAfUNpsgopbgViLWdsQwd1qnxs",
  "key38": "QiAP4ZSZq6NA8mTWdVFFyePoRvDsEdhtYMasUHzT5X6wKSyZemwwgzbFAhmUooREh2xt85puQzp2XyFaRVsWeny",
  "key39": "5MCKiYCoc9gS66CfyddqNP3ZLU3TgkM1md1vs21N9axHpx2PJh2e5ESHiVpggE38GAG1Hs54BhgS7JPkopRK8oPo",
  "key40": "5YxKAxVBpeuxsFX3E3YVway6ynEUrWfxnNHECXsfCHxU1Vkf9sGWkhez4x1wjYxs9PEPHh7QPmkaZnsiCo9ZCPGk",
  "key41": "3wBweMDN46Fj95CqYxmcawohBjksYkvor5FKfthjUzVDbYbvqZqptytcyaLrjLsr33ztw1UcsjvCsnPVrSHre1vX",
  "key42": "4mdeJArygivAE8VePkPjERcrjwKa4Rs2BP65quHj97wLJcv6HRs9QbrxusXEfKi5VgZZu8vkEH9VmcL6KQk13feM",
  "key43": "4dBZ3RVG5oMf4s1mAybkrcZXm5j67HbRNAeA1TTwxpxBTEzvuR2xEpHmce1v4AbxFbC4fDQTbTFuueGpSXUnzRLg",
  "key44": "3Fa5axPyNrsf7tgZeaLZY65Rj86d85cLZS88cY7C7udBSULCu4zPSgqHtNwQHHdUE2XnEpGZ5XdGf6gx2X4P7PcJ",
  "key45": "5avVZzR5z5FxZt5fcKbtNeeg36QY8oaNrMz3Zg9JQHV6t1mGY4JMTgsKb2SbKfkAPFa9PtzWACBDutSdtr8SHViX"
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
