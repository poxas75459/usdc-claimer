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
    "2yJF4DMxZFCd1zkENCHAgxtY1grYu4C1aPfPLFM6NsNYXX1TZ95tVBZtYo7PtTUQerUzyLRp2zS57RmsayufTKNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bAG8MWYR9qQoGeWrNsX4GpxKQn1Qm6FhEzdPYWRBneR23v6x96R7qHttS5PsmFg3cPNVsgXaryAN65qFxTCB1vX",
  "key1": "5682zMKJF4knW5kni8viXrGNM4U6EyjsbpQ2cgP4hU1KxypTXDLstakNCTMXc9PRfY6iD87TzoJR73XxAJUSELpy",
  "key2": "65jS3TAQZTxnayR1N16mUYjrNCkABsQcR5ShgV9yZvPnSY4Sr8RZwqbWGKFeZQc7JhW12FEhtNBajKdpQpB6wjQ2",
  "key3": "j5rMAg7yNdchhYoZK5XF99XSvDiB7EbzQsdLDsLv2Kf4U6ujWTbhetr6weELCRN1oAXsddEsBaxnCE59MhCXBX4",
  "key4": "2fbTpjTEXFUiXqxnEqQV3hSDF1KCaXUZ1Zz5W3iAuuUFJaTfj1QLDoYKysJE9dS662xUW3FDQtxTF2oTdZXbDrcW",
  "key5": "2TssiuQ3c176Z4CwYgHZgBhvMeHsQWZdYoV9twUo3avaui7US7Qv8W9SuiKVBkyZbJfytHaisZEEi4heTvFJN1Ct",
  "key6": "2QsnGhYTRjYpiLcoKnUHdEW2mjJgcq11jbJrH7UhYYwhSHVBmC4LSpbg4ndYpJLffJkJPqbUAAvDd4RVdmjumymB",
  "key7": "x76HpxtVrpHoDQ3rwqj9gGHMJzjpLmmqko5VW5xTCHSotYeAGDSBudVbvHgd9X6eqWfqgNSEFdwkE5RznNJSBYS",
  "key8": "2JNy1fQ1aadcyXoFqGmx96WBeoF88W96E5za9xJnXCrAZkSnrEQ8J3cJrY1d6DPh2Jqeijr3TiTNpjsEjerFkb6i",
  "key9": "3bP9qhKNKe2jbkSVkaxUBiYrLHo8mdZ5TEt1AZGxaFKbUndhEgCvaUMzmjDL38PBiXrULVnrFhuTgbv1Q7kSdps6",
  "key10": "5xQiQiUqrENm28ij3mR9u7khhnQjJGnfJDN8aDuMrgYZVGzihpm9ZtFhQAZd6aZ2H9nvJtKTsSr9rB2j1yzqsefN",
  "key11": "4VckTgU5BGkGCtfVW5nQkW7LBA8mJmSqzi4KYJ8Jof4C3Z1vGLbk4FndwEDMZSWnXXuAzMbHzCQneDtzK9Qa5dfq",
  "key12": "3gyoCnaFDwREYMKW4pEYQjEv5eM2VSRRKtGnzB4qSmsMsfeH4y3Y2FRPS2xhNbgtLYa2tZJRVVpJVoAsrJg4Ncx2",
  "key13": "5odLcq99WggVZksbKPNMNPtBt6EYdbmg1nzSvyTXGDrmXWZAEh3Lmcujr4VdxiHUQeseRx5aLFsFd9Stx1Wu2Xqh",
  "key14": "35fUCwneJj4ZH2GwpyygKMf9jtktY1XZpFGyFqLiTsqKPrJuZLHPX9u4pcgdNTvxPpzzQeKygvniwYGuDx1YGqRx",
  "key15": "5zzBx5y1NjxszCdpFXxMEomEaAsycwurkgK9vhxQvys7kiHBGEoW44JzocS6MdxqGYPwWdbxjWJaFbxAHrnz3KFK",
  "key16": "3D35fXnd9Awjp7UTvsaKVtwFn8E8cvYVHedoDhmNN3BZr7sKhLoYr3KMsk7UgdiQqk25NyRJYiM7oGzBiD1nQMkL",
  "key17": "5ZXzQJovDq1PzsEawZWubzepdiwxvDoktnyhbe2suNHWy7whKX27MSVUM4mA5qhCUd2fBDNUmXXDxsuQPU5doatB",
  "key18": "m9F24ZP8uMPdiiak7R3ygCGYucFCy5w6qePC8i4rRDGSfDpoMdL6efsbPG1pLeF7cK8cyGVQdNXXj2iNtJD6j3H",
  "key19": "5Dr8RD3mgX7FUsvDprRTP5BkrANmPBqTPn91qRSQHKuxA5xbZt9V7pbBaEUMxQYqDCYoJ9evEqLNnE4KWrhrcnYm",
  "key20": "4TBhxG4Ldb9CwmcG1cWvQiCER4stPK5V7KW8ZLsAaUSVdcqLTHjijTtCvzYQqFwwxvRYtQaotppdupUL2CyNn7xJ",
  "key21": "3bb21wCJSifB3CT24wHbU2uKm48PoGPXHRpj3S3mQEtyimVtf1hFFiCGGR3UgRhNvPRQPqPu9XBX8sM1w5rBoAsP",
  "key22": "4HG1YrP25FzTDn45bPcyysGsCjhKpkmrFivqsKjvMxaeG9hhSaSNS3osCd5JXSA6etNwtJmfcKE468KaFJm44vmp",
  "key23": "2KywasDnKqQPMsZGeCcAuFMjWcfgxW3EEDvwyxfJ4FofQrjt8GM63x5id2egsPgXYVg1cE1r3vcFnswoLtAWsbtN",
  "key24": "5cUpqFBNNZZMH8FvUEHxDkUi3G3DXscpazoxctpEPWNTdUgEHvU5rhjBhFsV13WQBT716JXY412XNg2n2zCfjrP4",
  "key25": "481rKQE6zoddMwCU6YtFdQyPXagydrPSqtgha91ywVnHuBs3oMFKEJ7wGCXjEbjV3vGoTMk9kKFVeko2fTHYzFFc",
  "key26": "26aSunaBWsAUEq237BZUwxoKLZdog1TJM91FfGdPMf2V5pucF1prCVu12TgWEisPB9TX1dkn52op25FC2nF2RoeW",
  "key27": "49iiuy9GTCvGAnZWcvuhHKy3T6S8a5wKueeCbrCxgiHoGieZmWNMsyAoaxaXPytEt2kPY4m5awuZeHLhDLet5Pa5",
  "key28": "U3VGQrieq5cWGxPtwMbHdmSbPvS2kr6kxcHrWJjHPFNe9e1ZmENAxPhRqnEo3QA4yfeyaqCGVJ67VdL9Cy1H5Tv",
  "key29": "wXT9JUXYVHmCXrGrMScnMyDcsZSfUv7NzpA6g5rnyz87hxKSknpM9ukjFZt9LPfs3mMngaDkJV58CqHxv5vMXUR",
  "key30": "3r7BXvMmMqtzCf7BkAM63uPCVChxivqJZ2zkGfT3kKmVx9tQSnJqiAsDrFkrQCMQHkUmhc3oioLxAfnJNDwFfurg",
  "key31": "3CiYPSAhLedXc9LG1MjRrhTQwEsQCiDYrpH1hZkDbsF9tqd8k5oxvGtuYsiGPWMt1X6nQYc1HykFJ1C8fawQnjgf",
  "key32": "3vcs1BPoSdagpzmqMSLbpv7hkoA999JSSfBWBw77ssxBA6QffwCS3962aXB2dJYpQwPiRJ61otoz3zevNPkwRVfZ",
  "key33": "3ryJepqeCgTgtLUSWnfLaUNo5xqYA7wQcmKBAQDVEcD7g8bFMVo6T32cnwozw1dV1W61fpTAVQUZNxYKdhGZBVS1",
  "key34": "2TN83a6xFCPew4NJzVGmbY654tjNW89r8P2XktPPWiouSjffW7KGFEqMyqJQJmdkDWG5LqPyb39oZbcGSr63e717",
  "key35": "1YEtcB8d9XgDeRCn38zF3DvQks9bQmhgg2qbdLvM8yf7zS54w1cVNNnwi5KMzHkZY9Suahg7UbNotECF5QMF9wy",
  "key36": "22m5cBNLkYogmeM6KXhRC7GCq4oeRpykkzMQPvWxh9Ld5pKL5fcxBi5vo6auj456T5hkhadLodeCYTsyKeFUo3XC",
  "key37": "3WWgDRQp1ZYW9HxDpMD8VrXM6Y7R99BEaLsA7PfjqWTHBfkKc93NEZHoStGY2hL77DynoyVzZyvP33zX5yoTEY1M",
  "key38": "3iS8iE9dDQZzLsB5VUshAiEN6mdrowq4bG4imatvY5DzPCdZMmSX7pwFK2Gc74JWMQneJ7tHjseJzEctQ1SjY6Cs",
  "key39": "2wpPT4Tdc1DdymgddQuAKNz1C9u5fyX5ahLYCWd7D8XgA3Yz8WsxzQwaQvkxpKamSF7S5J4xwSzrEnDqi9VWdKqA",
  "key40": "5fG2CcrExmmEbSj11XWqV2cVkAFsAfeRQ9yGP5q68Hw2y7nmAip8ZSWZG3BsAij8jVZe3K67SZBGiUHHLmdqhB2M",
  "key41": "5umQgdS9dr4ByWBB8qhXnc3Cjnh4mPZnWxxhmt7qnL9EaLmhCCoPYbapW3nWLoNcqdnFTi7zJAJ3TozXs3FU6Hvy",
  "key42": "4xG4EYnozmzVA8das5LZKwvUgCYVYGFiN88PvJHfDE89h7hX8DbXbjLKwgzvdN1u7km7ZQM5ZRoQoQsjR4szJYdM",
  "key43": "3W3XxTxezF15GRt4RPKc21Zrn3nb9vJkrqU4FscX9ff2PugQp2v2mzRsbZKxhfS9urDsTTUs3MPjcfPuVQeJ8q6M"
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
