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
    "46JYWA1NsbqVgkXjQggR9eRZ2NxbVq8Z3dJPALc6VVR13ih8Cf1usq1FYUSJVUNg9doCLDLbm1C3YHwwUjB8qsSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VJs6jL4GGY8fRotiTT9eATUMHCWTguoZzhCK8a8vT48dQzoS5r1WjQAvNmBvU7HQLebVb2vQrfKDCZzarUirGoh",
  "key1": "5s4LfS98EzWG16SxpTLEcqcMcXs3DYUENCSSWZyKLQUpEaYoKU25h73BxizVFjT7eSvDETpGvgUQWYXnB3dXnSpp",
  "key2": "3RRBw9Y8HMN8kyC3L8yV8sgLKy237Tq8i3RMo3Np9oAUCR6NCEDrFhHWZkPgr1HpAbSYx6NzioFbgMupaiRU9Kzi",
  "key3": "zWsiXjoQCnh3LLcZrNpLFK7V2wPHdxFnaFZ3pzRH1hcJ1qVnhBmpQHA6J7r92cbJHhxDtu9hzqk4rGERp2nyYbx",
  "key4": "9GdWTRmCdorubzeXy5MT2Lq9u4nELj1f8jvoH9gaCmvJbRKa4SWCuH99VhmqsEcngB6z32uUvSig5nTFXMWSnn9",
  "key5": "427akeJLssahdg6D3jwrCXHJZrHmQ29PP1JMfx5357tCHSfTJ4aYoTvUsRxp7ZBF7MtijpMRgBMAW9kw9rT2QzeB",
  "key6": "5wNm1S3sNmw1tUpmuH59oriUsuFW6nf5rqJvGLNkw4efZt32zDuec7RYdDJgbVSrJnQuAoUkmWi2chfs9eBMmtyt",
  "key7": "4EugaoJArZZNhpXhjNDivdQgASKzXnbSanciSZK2ZecBZ5opPigKA5Yt6pd3XvE4mn6bkdcLuFP1G2GPPKuLZq3y",
  "key8": "5fFFW2XiKiAN2dz6HQzQRYYLNF75BG312FY9KUkL8LP2FBY4MRckMCwF2L8rvzMKUgwpPNEvd8jFKD9g5nMDqfsu",
  "key9": "5LVDQzErmHi4SQPs92kzdQMpyTS6FN4iLUYyDwkoivjegAxTKtdQ3d6MedbGC2PYGBSdrcBuDuKhDoboVtLRrP1U",
  "key10": "Nw9e2sed2aZMXfX6CzAQ772Gt5uJ7JsR2L6tt2ozaRg7vcQUpwiPhsWzHXRZ4AbURqmcymT3zzZ8NSLh8UCiKC4",
  "key11": "4tJMQSUiz5sKnameDQ9gKziefbBMDjtHbXLdqQv7s41vZfURPaTqsSQSctQ9CGzmNtPRxiBaMYdrWsWCZ6x9mRgS",
  "key12": "3zEWhs5UEgCbyxbVz3oNyrdsmxygugSLGLxfxTHvGL6hRXrW4aU97CkzBwW6DEAeUXvkCGnStUEGvBxiUcaQG49x",
  "key13": "34Pme2z2YZaz5oFegZRwrPNJ5rh1gyktkGy4JdZguxwCUEmScs5BJuzqv1ZR8bWnvTCPuqUmzksYsPaP35aVjswt",
  "key14": "5LFWk6cPoYqKCknwXbN4cqzdzkuPsLsFonZsPidkPYak2DtULPYZRBh6HPPsDhDZysCjZFzXCsPtinkYKfdLDpo3",
  "key15": "2vJchbGusF6yBkqqe9rPxA6dyh8h1rgFvRkL4gF9GMm3Bb5Ro8uvrWjXpmZK7oGCPTcVxrTQGJJ1NXAbm278JPoA",
  "key16": "37CxTz3iNJJDmGWH3cM4k2bSDVVMk2B1vHMuZpJFsiaYxFeTobtvnyS2ehQaJrERW2uCgvLn7kdj7DEMpVsCmhgA",
  "key17": "3j36HyP6nyvZKHx3LiouA6SCLxuLsYNT48h3HT45t5dNkVtFgi5AVXN7EChHLLA5Akp3P4jJFPEwjmfkBJRpGKbA",
  "key18": "3HwujY5DC4BtAEsM82pBdGAiP2xvZAfamFDtjsRv4oMFDHz27vcugkvndWFN6NWogctCCAiXkYcMQftXqpchcii4",
  "key19": "5amCZA8qaLSaDpVFsE9eWUFhPZQraJHFDGp5V2UR55xa8tF6rr6pYAKqNc9UzFTB7TKohdqimb6gcHj8ymb56Zzy",
  "key20": "4YFayUsZWjLhsNYsUrQmuiEiND48hcWcvkiKtB53XfmRKQqP7CJMqRZg19U4UEgVPgapsXDLD1EeKHg6Hr7tS64X",
  "key21": "2mUFQczoa2TWZ5puKM62izADdu5nFjDzG2siKxxRpeE5AdzPn3VCLEm4CBhBMeprjbYyRvmAnQ9P62k4fvdFEAis",
  "key22": "TFRxxR8c597jT1kSZu98K554Dx91Ukv2Tfx5imoszn6kMYfxq1ofSwf4GMsD8DsyupfPXesfAwZ4VfWt1Y8fFUw",
  "key23": "4tUVkKHEL631hGBwfkWCtTBPgptzUU6R2FhJssqDSRz3QSA4VfX7yKrLGimhi1FB64EmVgGNi1BaMrrxvvKbh4fc",
  "key24": "3rWFpsbjV6enNhQrUfmJ6FaoFZ8JpA1NpYBHagc3Co5dg4MdXTSANfadhm2M7W2974Bbb2hHqhaXSQS65g1DD2pS",
  "key25": "hhBp9JTLMuTtsRLySLYYFLbf3h8eRN9nKcELnq69ejBcKcngj4bbuNwyfwPdbohv48fn3MA4XYpsnNt8vkks1ry",
  "key26": "2di2fnDMh3D62zRzWTT3RiHoy9TSk9nGfFNxa6dVf5NwjdRekUYDx2SAMuNTpfLyTZWDLiwryQKi889qgVSmZiVB",
  "key27": "8naY5ZF6vgy8j1zoo7EEJCeubEntLbn7BUwJXuDTYrDFifrRHn9Ee8euXmvEzopy8GXYkFJHhLhDxQi4JMZsA6V",
  "key28": "383wgw7pYRt8hB231TRRo6LcuQHKHP7Awd2AezaHMr4YWSuVRoffmdao2ugspm1wAqo61K2CG5uR9HTu5BhXHf23",
  "key29": "3NPFAuWxym814NB6fP1wBU1NU18kc1AV2mY8Yi37YqcnRtcY5Fp1UgBWsP9eUMZhYdSARA7cLjw1HVimVGVZzFeZ",
  "key30": "452yfrEN4gBS7FsDiraAwzbZDjyX5e4wfonszpgiCAFpJUM2po9yNjh4HY1Zk7QkMTdCKo7ceB3zv71xqLVPbsX3",
  "key31": "2xcpu8tyQbm1SocLr3VsAFWqXh1BSRskMEBshPeZ3f8oiGrgtCyPafenEqNmKTfXyeNU8XJbG3T7BfCYw8wTZmye",
  "key32": "2xebFck2LtkDTSppvCC5Rj3cK7WDwL9pRGinhPG3hEEniVLMgqTqcXSUTnzwoaLBNHvUGWRh1TEKT3pUXKTZCvei",
  "key33": "4rQxvT6FF1KNmxBnwybpvZ6daTBqTxCBtLHsEtZQ1PwtT6EqtuZn1iPf1FGfZoYsYTYuNbZGtPhM1LAA3yExD2LZ",
  "key34": "4ztThC1gXVeya7En7xVpHo9kidCNKfjwA7nV593JngChLxt2gxoobTUHep7LBSM3r8n4Tn1wuyuekZE9TBBrmUDa",
  "key35": "3LwPbVuxu2RF8b1VzbAf9UmNQnMcNGcy8kfJ2TinJkZsvCMvw9vFMBaUS81zoxLYQr6kWgamR1CsRgsBtpEH56PU",
  "key36": "GoW1nu59Bgap16SWdFyoL51tkAwQps96dPTaCy2gm85SxPGrutA3DuiqmCMgpczzf6njBSn4pecpDDSpvXnokkN",
  "key37": "5vjyW2gbMph2HczQLVBt3RLHBzW1rATEkMJZSPtQ1wxwdMPQuMivwYuVzTMhpERMsfqjD9CopYx9wTnhWhbPCrAW",
  "key38": "3a5os9EUHm5NTNM7xbLXasWvJu2YNQZdw17DASUpaCYkZSiUXr6RYBc9JUGnLr191ApAwpFffWd4YTh2QQutxpeb",
  "key39": "5s7JQepvrMi6CWVNctph6bg1LMF2Uc34DknNCPJ1W7twFpkxtgDLMT8iLiDKZwtFVVfYFf6gy1pvorDaWvC27iZG",
  "key40": "G8Fsae2MUU35zuNX1QHUcvjmnieB6dDg4LnYZUqNffoi2NV8MXngXFhAgwRuFgHNkt3miBntMijCWS6JW2fYiEM",
  "key41": "4LsNe2gBNuT9hh3rbwyQ3NTUCHg7UMzQRNwW5PMxa9HKFaqBDFtcUi2XQgPSbLcs4UGY9AEvpdEMdDtwedFjUdqN",
  "key42": "5XxwJ14g85n9Vny7NW8SAzb4YoCJuxuzCCFb9WSjgovMfSc84aaheF79Qavw8R2GQfokezLt3dQfVHVy75GFehgo",
  "key43": "3oTrR9AF55hkQjZ8Jt3p8LQ2U3Ha7C8a1kKZjbt75mv8jAsGsmyqdgBtSVFr61rSodyteVoqwWaMmj5fBipawE4v"
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
