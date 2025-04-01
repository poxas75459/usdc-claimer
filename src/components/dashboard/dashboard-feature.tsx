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
    "35cGtNnpuoEKfgrZSbi4oW8rpXsTos67s2AhkyraQfgGRvq4GZyZ8nPx2Vy81hAHnnYr7ttnNcLCCfb1yadECH3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "245nhpBxpEQcbaDp2UVTALvQe3wRv533H9L8UV6Jxnpuqh3vunw9zsbNPxbxxeiiBLj6vJJd7Co5m24giBSYZrDg",
  "key1": "3u3d1g8qB1UW2kMZdfsbZoLTCLkCRuzrTAP6Fc6bN4aZ59bQtKSE5FmsbJbtFoujMb1j5o37BQvRq4gsuEBummgS",
  "key2": "44vHFNs75RHvgF33bweraVDtNeRtdha4tmchYvMYvWdS8j6W2Gbn24UtJks72kBsFNhTpvVQMgAMmeh3ABnWc6Dq",
  "key3": "3z23s9zAgg3TCXgXCx2ec2dB1fN3Gv6jFdfRdvjGzTYSoY6usAskGjhDSGhpkw8mq2QRGCQJmKkyHVuwFqg1vHB3",
  "key4": "4vEMBmvpdpwh5vhyRA8QHF2YJE4DGLeLrMwn1G8MoEgRSgddwPzqgvVSWqYfAaT8SbpLum5TNZRSrNW43vsSUymH",
  "key5": "3AF54MqH1DYzVpP9hjsnnzyxcoCJNFmhE8MfGqwbHiGM1ZiA6heqJBTFZ6pAKa7oXB6ckSQHJ3hX6Uqt7TgwNa6m",
  "key6": "2DLieNVwHMjMKHa1gKoHwTzjzYbSNWGfVbgLTDAssYvemty6fsbyhg5eDs837MKUFzp2oKLDghWyNP77s3oXv6Ra",
  "key7": "oWr6bYPBnah9dgWxwRRdnZaAHzhNnU3SAtJ22bY5qiGhYoN5DzmVnQMtfYKGriUo2NoWuQGogzPJ5gYCT46mu4J",
  "key8": "5wFfULempu9iJ7eTTnCM1kd3jeUkR69RZXWQ3Lon5Cw6tEbkMdMfceeuZwoQSifm7sX5nzjroV63eLSdSpaqpqfw",
  "key9": "3YoKcNwN1dCJfNUzQJH4evkTCK3w7XyurMp1Mo7sQkHKhsRoiHAqgVx67uxpjymDseRHrqHd6RjWrLAuopjt3Uha",
  "key10": "443P3EGQtihr1fS2dg3Y6ewWgjC4sn7eDuccGDdc2d1MRyN2eukakbLc2cucurjarbsTeenTQBu2TrzvZXX5qHVg",
  "key11": "5DTj76bYnMdujb1qDHqzvSU64iH8CPFyofjfXBnhTzeXg5C4BHiwYU8ttSXHGTpg9DxXKNVD3g7x31NpS5wVP2Qb",
  "key12": "3Djpkanbewhnu8hDo9RALVohbkJRyaPFyHFdd5wDNu6c4HaMfu7J1t9XYc1K6fGA4x9sJvqiD6jBL8fSWS4uQwW",
  "key13": "QuQG7CfVdq7wdcJ8oQbbuWP7Y8N4DoS8DHdnUSh7RQctCSFr8GQASMfN49vocrMa7Nu4yrf8CZ61ztQS6RuqTx2",
  "key14": "3ZdPUtQFFx2XrtsPk629tHF9nteu3pCF89KApijZ3PHHthuYupwnfBkpsPHsdHJSotvB5VFmmXAD7XQA61JPVMjo",
  "key15": "s7Bs73rkrkE8Md3aNNs1ZwTXmRd6ft9jyb2nfrt4L3hqVyS9WhtXPBhDkHaVFdEyJWY9Yt65rtd3PqVrAmiWeAT",
  "key16": "dVYmeFErcTWD2mstiXDpZRYAct5RSDnx1WmMgo9bj2g7LatpUSFuegMP6ZikbX1QQyXYxEwGh17ntoEL8XYxu42",
  "key17": "j7DqoWW9ZrKMjfMr49KNRM3jGLF1jnQdRJH8VJziGuFrv7y88DiiiDS7KVmMMSgTaHAjYB7aBtoorjEttQHHLRj",
  "key18": "RubRcfwrvebrWjTVvJE9ABQTk8RYwKYoXNQiUoon19grLSRBGZMGn6NTE4Su8cXkzgcK2JDcALAsmrZufZoMaiu",
  "key19": "kNp2upHQhb36csk7MS6XNUwdxQiymnthCTV1itnM1wddrH43jgyyzHqTcUx4wJZueqLr58sZtLkM5EsQsSQQSnV",
  "key20": "5BepSLw98mAF5Vb5kSRRZH3BmJQijtjSSrfas2741SYNbR8YxVTEpvcSnoG7RbQ8kMnkzGHrAh7zQoAMWSUJDGzA",
  "key21": "4yoBz68Rc13tJS41bdm8Mr1sKBsnAbTCncrFsaKrGK22nLNgTcja37CUP4E5bwYShHzLp5YcwK1Uy1khD2Jo92Vu",
  "key22": "4DrkTnR3776sRwxXdKksBB5xPsPGwEbQpirgEhf5SxEGKmd6TcrG9JDDWpfu9pYJXwPXBZxhCcAFvyp22SeiGxkG",
  "key23": "3YgE4nuDJPcUnRW3fTfpc3Tgg66Nwcfg38waEWVXQbHDcsh8Q1J91nm5DmkZEAzFxFGmGizYfdf4M7VGXGDqtNQr",
  "key24": "34aRr1pknXesTvree5RS7Zdc33NfBVgzEmwRmTnf5RP2y6F6RFp2kLu7jSZeQYFAF21dHmuNYdn3iuEbZs9jegLM",
  "key25": "63qBxgSLF5LcMFtWRdCRkUg2DbTE7Z6DsnpL7hwcGzWRbdUcFSCQEQgnoT2x2Lt74iKH48aFf9QXJVPZz2pM653X",
  "key26": "4G8qhREq9fWydmgnrRajefRE1iVcyFpA5eCU9GAcKMqSCPBqqAKMcGxv1rioVm4EnQfTjkaCYn6KXuHq1tRfpZT6",
  "key27": "4FjAYjLby8W883Fvy95eeiSTMijkqV78c9phriYXyAJWmdJLbgjYou4jRNJDCJmouD2ZWxx9iaaavmCz7fwks6Wy",
  "key28": "5eMT8mRrSUCbNPuDE369DMFvH5Q1NWSQMi5UeFsGqLdN4vmBqLZ7noK57PFXjrSArFcgiqaM7bsgLeaxLTWNnnd3",
  "key29": "5co4cgSSYYBwiBXBRCNo3c6RfvE1Sr5P4B8zSgUTkUuv5SUMgxut9L9yhoQFNe2ae88Po4auvLrLG41frkp83BkV",
  "key30": "574464EgBjBLGPyHbaFqeiNNbaQfHqzQy5ARstTYbGN2LXfBKk5Q8WNsV4zo9tvdKzYcAfUbssZ1JkUNNdvdTzD1",
  "key31": "5jrPWMu31BYyMmiWKRXX6wn97i9sYeXMoThnMXgahyrAceRNzXysNg7YLNoBkbv5CnU2KbM4FNg2FVD91thsGfGf",
  "key32": "3JrcZu36K2EnNtgcaGZnBoZmaDtXbXULdo8nCmh577QAjQ7aZZjq1pEJqKLp6ns1WsYxoJEQrChkdMEbJfbt8Bqm",
  "key33": "23nYBZL5GF9JQjhgZfKYEzV4R71KoTsMLmtarmkMBP74R2dGPHqU4AYuM3vAN5gBK2Xiz68qfJLKGmZNzFeBP8eD",
  "key34": "57uPbyzCtM5YPsSdZiSfb2CvYoEf2HNWty2G4g7DzcY99TsbHSF8WWfhMwp3vT14UXiDtC9oDfbkoGcY2ZeavrqA",
  "key35": "5eXHVSkvtZ3WkSXuwsUUJCAemMt4CKFfJGiYBQLkWhFERB5Ea2KdXxYnbHxQcqGQnB2fH595sxrk5JR3c4jRKr7p",
  "key36": "3TpgWmxhwAsHe466MqfRyFEU9kUDP1Y2MBnpyFQpQVbMtVr1LNMy18NyPhApvXxLHoZBEtNBzciYTUhoDXY6xKTV",
  "key37": "2UudXetJEQjQjpSAyVMzzvZgFmx4KD2FxH3nTvV3hA19KSzM9npRsTSEyquqKvyHsa6J4MsgmLzEy5xMnBXafKKo"
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
