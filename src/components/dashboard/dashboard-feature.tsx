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
    "2FnnNaALTuoEf8HpR1VjPHnsUU1CE4VwfvhVWTopxd3xWnsSm624A1wt1EpvMGjVRKX5hTxExLweJpZ6B6BdbHBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u7MNJKxM3vyP3nPuotuKtdrSa6wApSi5UpnvgZjgoApLM318Bst34g5dHZqC52LmKHvPPbyQUxPecPJ3jkRDo68",
  "key1": "2VDYE86XeWE5sNu7ihG2Js7Uf7a42zvpAtB8NhYTWgG5SJVmirFiccyA6jAJyPA9FM8MA5zuz7tr3RZk2sHWLXSP",
  "key2": "4GXwtTCCob2mMcnjHWrfFMLKnfqS8GBoJ598mqj7AMaSAocJi6q5YZ4THpyrBRioRCoLdchzaPFD2WYoRSEFnJqf",
  "key3": "5gv3fuzzT8YPNBkzgixo3a53ARdT317iXCkMauX1JFKZk9L7phaY6htAJdDPFAh6Rfexq2wirnPvUjhyKEZu3oDd",
  "key4": "mzSVK5BgzhSKmienkYTYWYeDrzPfzEDuoapuJN1V3nzcS9PS22cSRRxSKZRG7dWHqYVqGfKzE93Y4frvUmLarTa",
  "key5": "2ejsEsR1aBNFfuG7z9c82psSMkBtow5Qed3Utm2d1GCup211PkusVFAk92wLPwsocHc6443bZfFfZZdWL66SSVsW",
  "key6": "521YBm7NhUR6gBKstVgmQiCY6vaqqChXFsipv5pF4oQ2D7MKZi57s8KVNiSUkAgitu3CiAX7Uhkydy1kcEFfUkxN",
  "key7": "49476fa9Dagg9JM8XXZZsaJQL4gFcHZxtBEYwp81jCV1VPVyQHqqz93u9bx42TfVbVYH7YW6qrhyVgsu4pi89CpH",
  "key8": "qDJmK6YCNdGLBYhXzzt64W2EA6xSkQRuqoAFqAoiGRRnhq6PkUZ3KF2Ztoepohzt2x6XYKtBVPCaKgPnF3a9apK",
  "key9": "3JEcMhrKUEsw5xe9sy2JUjTivwiY5nKpds5ZMyhptURnRx5jvN48feeWsc8eAnjMy5ifDQ4SotoeuMwM8FfGFCUp",
  "key10": "2R7mzFWoCTkGmZDLwqcbVNjGT8Jd8qeVdwedBE1hDmrbs5Mz28QNQUDcq2d7DYsvzueksCDXsxskVRHwtbb57Qf",
  "key11": "aeHu4wTKR31Em5VmWWX3MwFeQANfs54mAD6AQtgb5bb9UwYiLv5hdyfH9RtXxZiBga5a6FjjofMcBSSjYRaPwWB",
  "key12": "5bPC2GreBzhkbL7jCKVN9thJL1ZXMqyoh9ABntniW6yrGgpK3GJcm23ywemuh8Lp1iBcMWvQoBDU4WZ8bQRwBs3g",
  "key13": "2Z51CpmyhGAhNCrYwmy5SQ1x8KsZyiT21McJGcFXMH4AfAY4sJ5VpsUTGK1y63B51RTJm3GzRgmkqbA1Ky1PtHfA",
  "key14": "4cULo5Lcdj9YnpTLu4QTt96ggNFFzXkMtjPWT2UEikPBJMt8Sb1ZZmDMbZgfrHouWkPhDkhxKT7HYkb3mwhSw8QH",
  "key15": "2DDEfMQaCtAvCHZa4PHsC1Rw31hktv79Fis7WSV633Qfb1ruD17NQuEvAC5gik6aGdSH3yxf3cNi1ibR9Z2As9T2",
  "key16": "39p9dZiryAdsHqwr9oPR7LB3r5Wgs9qbWgR9LgLz2ZXRHanVVPnyBchgwNoM9BwgNAF58UBFRritScEo2Zop6wF8",
  "key17": "2QUVTudZS5qFrM4ERYPpiyW4Ne4ZeMWKKGew52GgPpRBu2RkzrGMpxHuiFxaS1HrJ14ukgZNFR17cvxX1yVEpyzj",
  "key18": "5zRWbSLbPJQBD4LirQyZPT9nz2v9rv2WidYhuM32XtdLv8QDPvxxnMSReB7JXwEBPHGhsAibBs5ywQ69q4Fs3dt3",
  "key19": "2NNFetSssVS2Tk1FAnV43d47a2dWEpVRqDJyP3kvNRC7LiyDMrD3gnoupYdsN9GNjBMmK11U1B7EQewsnYRxup92",
  "key20": "4sER7kqef87maamBf1tcECg2AnMcrP8jRQ4oAJPqRkeFUFxJGEVstrvifk7WiHkWLRMHy6ApUVToqtesBuSubw7Q",
  "key21": "ovYx3eZK9wfdN2dZBAqYP6bGqgw3gwqtKfF4TdDi7UJEbq1P2taqFZN83HAdhVGKRaTTiEX3CMhsWEKCMig2H95",
  "key22": "5cxBnWw1x6i6vzQQ3gffVRtNqpqxnyZd3MieXXiJ2TvRi7WbKrgsWcpMS2pKSEiqcFitFupLttgbBCZHGpv7A9DW",
  "key23": "3tzeunt4kX8xxnZ6GtD9v6o2HV94Jwx9YGE6z9WE6RPBQpyyBdeH2cPZaZkR1bB7T8ZQxjQEj2rAHNs2yDsNFeDk",
  "key24": "36G6Z6QsyfVuMCAdAWjMjTUzPueCK1jxpAbqDiZ8BJoa55Kp5mc1oFEhvAVJzNUQZp5aqCHNbCxtvKrbrdXsxZVJ",
  "key25": "5vGVNsD4NPFutDXiTYQy1pUWK3CofpcjnFgBErkkPMvm7NjANeeRDZaATCzNWbY3sGKWt3rmnQLqwUHkXYCvfqgM",
  "key26": "674fL1tvfuAHYyT3tTvxtoKwfDfkFLpA1CVb3z4yM7UgzA26XCCL995wLeuJ8aa1F8ZSPMX8zhLH89DFAFyEU7ib",
  "key27": "2Mvgik5C6Dj3qVDPbKjjZ3ndRuUeuWbYZLDRnKE9i9sjXunRdzSB1zsnSifyijTzPhzyNvq1Nf9RaAgqwWQHLGSC",
  "key28": "4HmecurynaSPQiV2WmMcafqQgENpAjaVTSGSRNXvDo14KcHiW3RZPwcuDYg2XmKLX3PAfNEVSMXhp8M2s67xo3X5",
  "key29": "ZsqEjBLGCXCqoCD5Nn2czsCSzXgMBVzhgoqp2VDoXcLRWnXQAuAmH6tmyLEV2PAhCJmpu2RVqPvMi34H1Y3Yzzj",
  "key30": "3oRG9iS2oneaaLRJZfBG29u7CRxRm7D24uTGcxELzd2a53HcWeSMzHgoM5z8aPaHS1NpsSvQqRWZLpEsJF8jcnbY",
  "key31": "hBdV48q4vNHWu7311zkYMGrD1wuwa1sRP6DTEYN28CgA3xCsvZEMEKfLrM9FVB9s6SC8yEzEhjAXFXNzBtj4mDi",
  "key32": "2S41AhBrexT4whkV4yAx1aAQJp2WFCzMhLimfSU8e4dUPugR33DJSHWsbqGhdemfPPi4Mf4EimwNWNzPRYufAmwn",
  "key33": "2ZDfxmBZGa7MdvmoZ1kuWE78D5ekjwgtf7QZeF9E4SeCKqiEArV3fVoCbfNuLpE9txfq1kgiVMA9SDoNy97KsFvr",
  "key34": "5ba9eYBZSyouWjbPTxVDR2J9oB2fVnXQDvrVd7rMDJmsZRhAbsTXjmTtEj51VUxmiv2Z7YQiMdChEHGBCNZnAGHp",
  "key35": "4i8c1HNPcnNeLKaeKSU79PLxnWe2EvRk3ADtqBFcJrdmE6FCmB31j4yrPLh1XmcV9xwC2r74WkXR9DpbcGervEi9"
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
