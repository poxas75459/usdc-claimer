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
    "47Usi1vdDMuPGzyTWKFC9uuhjjhZm4Unb9pp3LcwwbxQqBVK6aanQ2p5kL3erj7wHRQS9AASBCbAV6zzAQ51dV2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MAd5dYqhVq7EUZhzdKqscxfvGx53GBRMUQkoujykrnEaYtfXsu1stg69fChimY3dq9wrWyLVYELsaUHtbzFYDpK",
  "key1": "532f6MxCPMts5Zwb3WYxoifeWrL9oYqc646iCu45HdABxjmhQErX9SfAcLyS1tgimThxSckb7tmeeBgHFZNCsyAY",
  "key2": "2VD2C1bcHtc8Gj3vZDGk3NDwL1tDK5TYTV8s5CDWidSuAMm9rrLMSSWgWPqTyaisukaXuCFhBBVNwSkjiwrFseqv",
  "key3": "4KC6qoEcFFNtq4vnSsVzfzdSYJi1ULdTBRTHzsZfqiCtvYawHvHhbJ2yuxALJvv4Jq64HJEPo2JSnv8NCTPX9SVE",
  "key4": "UheVBttrDPTDdjezrE6kEzy8o5eYZim9HqjBkfsWNTXzFCSBsMw29BczkpC7kbS1G9khb95hTGMV79iMszsxEvn",
  "key5": "4HZY1QMSDHV5oTBMbCgdSRz3DjX4hYxzZQQyvdPGhXfXa2K4rE9STkNL5LsTGujRhytRfsLrQbLtV58ZE1StKp47",
  "key6": "2TLjjE3o2fPMdBrr4XegzAkzZmRQD8voAHjf7G1QyVePDjfzgXGnqBqku2pWouSG5xEt83cgmfZMhhhCZ7cmD67i",
  "key7": "2PCqh7tcoVQozv8RzbFo9UXEDGhA3XRwX61L1E2tFH77RfYvjFpU845hk9ZDp2nnMhrrVA77gCjwvGGtnqpZs3go",
  "key8": "4DxEwkoeL3WLSC6mKYPhsSgnDfZFVhBA13RGV1Jvm7HYCym9fjTq8qcPRSHy7fC4xo3JbzFc8MjYAMkmQNSbrRog",
  "key9": "49HXSZV7fFYrhTN971knFJmVzj5quVDHX23DN7cTekcP6yLh1uSdXXMZ39K3pmdwRJrBwxcxy7LMRke2twfXsm7T",
  "key10": "3VwXW4pso6UyZxvn21Mwkvw9ob3uF7c88vhT2hk2Cjg1YW5mDTSSDtSXtvSPTBnwVS5ZzUoSakmTM8uAcrvGdZDi",
  "key11": "5LgoWvJmLEyGTtXzYD4KX4Ar7KZqPKHB8omM9gKfHbEYU4FYcKRrikor9SWJ3pYpaTV2xuguBZvaS2UgcopY1A9G",
  "key12": "65wptbLXoeoidmfRJuuLJgZtb7zdu8oHy1mMPnvoeco5hAHosMVVLTyE7bsiXqj7VrWg7DFjgRqBpJx1tfrjWPZR",
  "key13": "66T5SMkuPLQoPQBR1KuHENHcxUnRTWTLc5VEXUP3K8w2z86hitVLg1fydAdADvrPe6Rzh24UjRieu4fmeJJxdSZw",
  "key14": "SnTT3vxCP9PcRatL9vRZFyCYKh26z7K5zVF3MNQAH2YdPthWEGoxmVe5gRNrUAfU4qR1oXRivoff4pDanJQr1wq",
  "key15": "2XmPeZiFg6VqiMpRvobMhiuptD6GxcDqVm92jsktJjmSRetsQ2xxhiaqV8cyNrwtLY4ZUdSJPxC5EnyRwJd5RJk2",
  "key16": "2nUffkzoRKH2RsYXk1wgzCyCfwSZ6dP8D9ieqyAxmBzUmwh8aqrUFTZhuEiat3TpMTsdiUFbRX1ncbjcWraj1Xoj",
  "key17": "2KiZn4kXYJzEtq8wg5RBaY2Emm9UVWRbjTKrA5cMqKHEqU169aE5zro3j6sPQ9TuC1xh9vm7Ky3WTmeGUmVdXt3j",
  "key18": "3Frnb73X65aa8iCWQVTE7EiTrUzpNMUWpUwYNMYMyr6KBdiPwUSnTEkzqmEUBqBBBQpHPFKE6KBH4gFQskwZsBzx",
  "key19": "Po68TpSGbM6fy1YvR6uBLX8NYM3QPcdsD9U3BvjCPK6cnTFxBWggqKKzAGaK4ztzkApoFnCzEK4KyBWQYo2rri1",
  "key20": "5xUzzB9sPmajUsPYKuAMVeWpcy1BURtcBsxm5xEgFMeGETPRpZjeLadWscnWfFjKD8iKt2vzer7JE88bSL9kMzBY",
  "key21": "FwGVzCuFn6GtuncSV5Hg2cLEGWh1RtDzLSNWZmggXv3dxBjisijyH4BBTfBpSRVsNSonatygLyPZtaEY73XPGuC",
  "key22": "2F6FLXf2KruJdk3EzoFfSSh6kyvkdK4RhVA2ULoWu5P8wNWezGRxv9CAWyrYn2b16MWupxSq1rmxS156yefbSHzZ",
  "key23": "qs6axysiVo4qU79ptEesFsTMvc4W9Lo8qh7iLaBsQociozQPh3bZkRspP3utxi2nEnimzkvJDKjvRUugvWaeBBK",
  "key24": "4aNzLULB5XjcHXaYns3wy39iBrHsrg5vuq1CdYzVKWnkpjH9kAaQM8TSshp323zSarmE3g7kUV4fVQd9gxxi6zro",
  "key25": "QSGxwJ1ZBSZ3QU8DQaRodiYzbz5L3qik7Acka2QSrLuL3HdUtYxqdFaYE4BLF41gEdE7KFxFKSCMTbx2BBrpmwL",
  "key26": "5FBi3vynPgBNxEALJBMrjxJUwRszJaNjwXRiE1Mc2wkQ3KoWy5sDGbrB3wUzTUn1tDHuYCDPSYyCnyxXNhDSeJPM",
  "key27": "2mr1yP7QtgAQ1aRBRaZsKgXuDgjrA9WFqtoaf4SWe2ND7a3LJhTnHBqZpoXMxcqv14HvfnruuAyHuToKmGmM5Pfb",
  "key28": "c9AZsiTmgEB6TcrTeXYD8NgKuQPQ9cBYvEXSZEeakzD9uF2UaaF6kH72LZXMmvtYKh4rrALSevg4gM3sPmhL1N5",
  "key29": "2anqfiBjGcPf4bhvg2TothKoBJD9x9fL7HjxFPqcPNkGptDSQCoiQbYWic55YjmfyJrvLZCdFXPTLHtzEZLKBn26",
  "key30": "tTN2Et4pJztnyqD4WJAVbnVDTncJTE6zBzLoNSQ9FtnZfy9uNbjxSMx5jqqBwfEYmxaZEpUvfvyNdeZSZGGWv5H",
  "key31": "PBeDJ2bTDa3Wg61oqPbdjK9NrGMiLjuuEUunEkVa736TVYxBwn5cbRvyK8ka9oAEyWLXQBxKuFhcVZpXtYD7EBu",
  "key32": "yvnCucGP7cP85cAabe8wCqsrDSnKNbBHMUyDrTbSZvpTXjmfA8May6pbBB4XVfXMaDz1CN5EeMgxWeakab4LrXM",
  "key33": "215CjB2kUa27B5baMJ6Jy5doSQ1e9fngfxDdUqRjme9T48mim5T6e11ntuGTohMPAJCuWWqp4FR1YuNRdtDhsRbh"
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
