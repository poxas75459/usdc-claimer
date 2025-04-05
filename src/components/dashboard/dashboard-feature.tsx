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
    "41LewAfDK8nM1iW663HBTeBuMPh1FNuurxhUgyn7FYEevn4AeBfEtouejnHiyQnrJkHKKVfSaJikjNFLYU7TTf62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k234PcuquRy5ob5NwuXzfwoYPEi3JV1P2m7z24SoeAjqQUSeWWVtcFmTuT656KQCAGvSseLU2wr4Dh1bHTfof57",
  "key1": "4ZXeGPioz55SCqMoYzM49HiDxmrBHFck5XVQQThjF7hjfDPBgbtP3SawVCPkQUL5tbHSbnxW5WQj8oaD8MG2NC1p",
  "key2": "5paKDAy8Yn5Qp18DVaeyAuAG2Lw7GAHdBu41DV6aReLQHkxJkq7bYFxX39NkwXvLTA2uGLhL9GD7DK8Y5KXyc8DY",
  "key3": "55MVAVp7fWpR8efeUsPz3LLSXGGSGMoBqev8qExwRyNDQz71kBcmZcJCM7vwrRCsbyaVWuqzTR8SKmQHemQ3iK3A",
  "key4": "2J7qC5hjdyUtTg1MFKDnsJqXcY8CBR6ftmPdKdzGQBeKpPjiiuyMyPWqsgNSMhCtUkQkYtWKUy5Ap9mVVf4ZnR91",
  "key5": "gkWCP7shXM687hWirA4EXBnpR8WgrYDw2UWc6wjzMsgLginCLFLCFNHzYGueAAwdXVayHQBLNuQBAxtDMKxS3yz",
  "key6": "2Pn6shYXb3gj8d6DqFvSpb6E2kYUPdwTx51RB1o65436fSfun8i9mGKFDks6zp9pmXgRxeGmhsFbK8zFUW8cUYL5",
  "key7": "5WaxNKRZS3zYumfMPn59raYBnE93LfvTouyoE1EbCEWNqhyUZzvVvC4cCzVDmYxdFha1Jfr97jzb5ve8Lzwvnyp4",
  "key8": "4XzjpdU37RBZekfjGnZKfc54asJC7yk6uKFks1yGqS2gN3ABSLUbrTg731xQxRGjzHp6NiRsZZh8e86MASLi24mf",
  "key9": "4Bj6kJgoQ4ryYM9Mxnq7DLFepyxMJ9vkNfxpQS3ytW1mWnScxNCUdfgVmxZcrp5YyhuiF44MVaV7iyEx7YZ39Ksf",
  "key10": "4cchUAZQLiKUoKx6zQ3NES7v9MJ6GdRRd1zq3MEyLbbj3CJbgjpir7pt3oPD4vMgrxnmb1L1QD2v9KM27sBAmzm1",
  "key11": "3nJeeyyo6PqHSFBQ8DLKmxZrctwdtZy42Jg1sRaBM9yJCDSrqf7H5dj6Lp5h2eCucCbWxMRTLKfdgvoExeeNiEg1",
  "key12": "5ZpJPPx9dh8G2XhjWU1nthF6UShgmaS3qAT4RjnTg8JQTpJgB3bSZbPBhrYE9889x2VpqUq3DoCRgrD226LNXkPE",
  "key13": "3Eqj2b4Arp544Nt6eVACmZkVheXtEMyNGRvMo2nF33F7xBbNoHC5DvZoPyz7c1w22bcMK6usBKLLyURdz8Q6jJWd",
  "key14": "wQP8464awRLxdFXZJu1NoKkvPKvXMHoS6TdfS3j39QCp2w4gxSFDTkAnW5USK473i9ufYJ5UPHbUqM4xrMCuFra",
  "key15": "5R3D1oPLZ87Gz7b4Rjs9anRGGGJrKmrX9fqKZ9fUxsae1MZQyLEm4bbnPapPaRuoQXhuZdmvzM3n6qn4BAqogVbF",
  "key16": "63JR7kDfUzWqkrvhyQBdohfG443tEimdvNKNALY3WyFfbxqKpomhscxm7UFXA1WW1ndTFnLuf7c6NrqQqg9aWKGb",
  "key17": "21GRZfSjeKnXiVBmB9oUe6F81U8VJiJatpPsNRXBnkFPGHm8VkKjDVDNniqLHFgMsrU4bbq4EEwZTmN2u2xDt3sh",
  "key18": "5T52mpuEQAvUErhmtHybPKofQw4m79PwRoTGSudDtRuCVbhns7K78CWdgoRfxs6NBDVDn8v8yQEeQChXjHPBzckZ",
  "key19": "34g98tkbB9a5qq65eN6ZVEgSftNh5tcMKxkQBq8Rt5nUGL3JwK5QNudL8cy8buFJiq6hWo6Pi5oTM2C4D6SeCCaS",
  "key20": "2WFPgrpQYAS2pobGWAAtLZevjmU8XV1zVKf9mc3Tts1jEUukP8Fkuq9yiCCfuhYGn6CK6jMF27wDoBbFpf2ZdXU",
  "key21": "2MaKs7R9b2b8SsbKdMgBc71CdUHqCyLEtes3sLPdh5QzCsqHDPEcPcLy39fY6Rc6qvkSwh3GSNv3ireRXHgjJkhJ",
  "key22": "5CNU95sG7gm42MZNSF6XwEEs7huEQZiR3MMKXdvMeyvgpVmaEqba664ucxeeWKgNBGMnh2Mj9z5L6yMXvXQWUWsR",
  "key23": "2AQhgiCdcfUxyjRCSLStFuamGKE1LPQqRt71enNp3wxttiupA2PNP5XcEbohPewx2vguSpMN4kwhrc1N1ExgRRs6",
  "key24": "39bJAHQV5pK4oZXxFp1ApcXB17zFuaY3wF9NYzaZ9c8i3L4L5CqnqLrydaEy4Z1sESHcKN4tubwqk411nn9TqUsh",
  "key25": "5DyKCsT5ArQe7Tbjq184PQhfsZ3JJHLH5eny3gSgT2RV11n2VWmZKMteSQEb44LrxQS58yqnoHnJT77cWBevbkhQ",
  "key26": "3xz342emJKHk5w6dMkR3obCdihbbmjoLfV6HYkitefxt5kB4xfHr2FnZZ2MPLdXphGvRkghLA7aZTtbRgWpXKKzC",
  "key27": "2FQf2YLuwa5zg7GWKcFmm5Po7EYgqd4RjN1mu1KPmiyEZZZmrXL8W64RdaaXeWcqNMKuRARihmqSmPrYM9FwnUUF",
  "key28": "4kWZkh49j4ux239HZPbgzLXJxmN743ZcXM22wier6MGWk7HwPtPaxqeTC4Kvh7RnmCwhg2sgWbo7zuBr16fv8GZo",
  "key29": "LNSEF5J7pUTXTptKYkFBFwNAtQwvsx1Crq17T1gQALzEbwWUa1F857AxCeqhEcyRnaWJX8Q5d1X3se8jxh1dT3r"
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
