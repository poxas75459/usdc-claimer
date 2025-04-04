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
    "4gTBfiJSpfw152ifa5LTDYXn5jij4snD2MZ59JMwWKLMCNbxxoRypY2EntRyvZmzJQBK9YRSMz7Zz9xW96aDxdzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33bcFDqTp1ZnGwhixqCo5k36d9e5EyH5VsXu84jpvh44HYX8mvatNLeaLrK1XM6kQECrfdbHENN5VfCqkBuph3YX",
  "key1": "3aNHdLFsbNYbUuiUogJmyMDUUpFz3okWjoVrCEcEtRyez5aBzC6bVfHN4wBQmJ5B5enPxb2UehdkA1dXox63pGbc",
  "key2": "3QT12S9ZmfHZbU9RxneJvnWspAVXY5dAm4rNKPR94AuZ7inHZ8vH8VoSM3HWB7iFEWWxq6Ng52ZEG81RNqb2kSHy",
  "key3": "2c34jK9FZSKuKCBPymYd5YJE8mX7iQR9KkVnQ7KY3MmPD5QBDqiTZ4tt9roSw3ZWE2vDdts9DjUbfvA6dapUDE7z",
  "key4": "SBri2kX1w7DL7vCMTCwiiHc8KP6rMz2mHGth4TzVpc5FLrpJMSuRHkgp18eefc2abe27fzafJgjiARjQoZj7CFh",
  "key5": "4bdPz1uqR1UuDySr8gpWLZgYS15ikbJaePTYaH3RYy51W1trtrPdU257GmmuRqt8egW94gUwcRBK3NAL7Livf2bM",
  "key6": "3tySJBH93YBB3W42oZ8QFNANRpRjx7Bxpk1RRS7t9DcYUzmKNqC44R89XbEKm6djDT21GfmyFR8eNfE2hSheVxjj",
  "key7": "5TzZgrWk7dUUE6Bn8ToUti97dKjUCYXy2wuYykw7jks5q6FKin79zUUZhwazFQUwY9JWabGGuFfMpy4qf1W3Ah25",
  "key8": "5UryabY79kkEJ4WvNMdPBA2QS5ByU6k8cAQGJdZtQBeRwcnExhKzdWjUM57RsFBM5s5zYhdp18J3mGrDe8q7iBwY",
  "key9": "4f2gSsrpae8fGu8M7mDLHexm6qjfhec4pK2NsqYJoi8kmtDpQiWyZ331dh4iAZwtufYYrXsDN3cL3WV56N4eZFT2",
  "key10": "rxHg9bJV1p9G3KvfGHCiiuz3h32kzevsgUQLaVyq1XchhqDyQmpqocrXjNT78kUcKJbuqsppqkXxr3vkwiBknQR",
  "key11": "4vbSYHQnpWu7npNwCYFdomg2vLYQqefZwYm4sBsbjLMFe2tCp86WHKvc2iC8xmsbsKRZPJUdUDqbYUXBHcLBztBz",
  "key12": "48VFrnFyLjo6xT1AMd613k9wj4dtx82iHyjttA1YPoPfyrGaATgNi2p4tYP3rbQVHU8vQRqMZonWiQGP5w4yh6oE",
  "key13": "2TXv17JdMJVwdjzvoKf5Cmj8tq5hU6P1MipFd5FuxJZtLwZap7v6NG7DLYpK8z9uFMcm4HABnT4uW3ELh2N5dwFd",
  "key14": "2MoNEryL2TivCmR86944tWtSBaAKx5hC8DZK5XR9xSjTuwEZe1vzFP8rQTJZ1M3Ke9mgjcrMyEZyMVNaDwCjybAZ",
  "key15": "48oBXA2bJu1Qf17cfecmCrp2YphdDvu9npjDaoq3Hpqyrq5QKa6iieQh6Rsc9qasxmcvEc1jRGEz9h8fXfM3Hmuc",
  "key16": "4iXExeatosQjBSyg4DgfZK6gre2CbUXShhP8ycWd3sJG4pVYnsuP2iDSKGTBqWpM1GUPd5idXnK1MTCrTbG1aNxH",
  "key17": "3fbpwTxGnakT9EtkU9aHU7v3vkWRs76gEoQB6hCp9Btzge69wSZk6DVBnWvPqghJDvoWGmXBGhyxxNEDS7W4ezya",
  "key18": "xE6idkXt2w86eLdXWkNu7YPxFof4YWMGsowGtv5KUGJxPem9GMpeRbRKaLrD9ttN4b9F1AH6x3PuwLz6acwQDFt",
  "key19": "5FbnZLavB7XkxbJ13Q46WVEiqj5AMVMPjaqAopFj3FRg1L1w4SZdw5qAXB3BschdfaDTxvR2uwbiLba4cuAg3Mvu",
  "key20": "33Guh5zM9Bw3WmCVLM4FVmJPdCcKYU9Mw3uaQBMTyrBaHqrHKJ9LAHj9XNaFBT1NgaEbqDgfiKG9cmsAvBVkxFLB",
  "key21": "ztTKjiKwLbSfjpEV7kSgwW2m38MtKYoVQ6gASyYrrdN6JHQfgBXToMbLwUxxrtAr1WcK8R6fpC6yvhXRqdHZ2MA",
  "key22": "3pVdosgwWSBkZk1w2zpqqr6H2UBuBv3F5koWXb62NteDmwPy9jUKiVxxPjDx4m7bSECaToPt1xbk7tVNeLpnMzfU",
  "key23": "4yWCeeqmixQy8BANkNzhP9Cb1JLQK3T6WNmab29bMR1DQMC5VuHNPPd1meErNcWcJj8owKxRHc8hXVbqrtnp3ZRU",
  "key24": "5BHwPJ2gDfKCgjhBuPCGhiaPRXFy7ex7zgxwWDeuZW1k19WhzxUPfHpATDNXp3jnhX8NALUwE3PycVyFAWPtpBo6",
  "key25": "2sdTMPWuHHaTGwPMXZ2VDAPGjjXevJ6zVBHVkFyu384oCdSHXt9BqVwCcyjxNSc4VavCNS5spBJUNBZvsHwBe439",
  "key26": "2VmBBnM1gLc5TpwZ5yKBFGcR6evkRF5m34nV13kcZxxhsNqa98ZGy1973ZXeYe4MBycxAfYrWs432X3jjzuyDoYc",
  "key27": "2iMkpTVrEmFHWTo9vyoF8zwVJgdLvp8PxUvFfSo8xt6xkL44n25X5Nqs23PE4v6Ky8TsNoS1hbP9PF4uftmttVUb",
  "key28": "4T4Z5CGVGanAigfW9hi3L8J8brxEV1GgQf4xPWSeZRMqFcyXJY3Pq4SCKRNygva95AgrX3WmL9MNGqzZ3p44AdQz",
  "key29": "45hq6t3ZJ2wpwfd4YXbNmB9iS9xPAWxYAA7PcxLhHupDbsbqbRkP1PWf6Sc3rw5fYRoVPEyATdobLt3CDVefw3Lt",
  "key30": "5ERppZzC7YjewRZB1Aefc9mMk9uwKHhkPBANzPo9HCCKnm4x4cDvJ12znfJWeSNxHL5J5kbFtts9ZwZEbDkGRULS",
  "key31": "625qp4WWf8yZJXyhXhNnK4t5F7BBL62s2wTfwNSdVQzCHzBCxsF7AqFy8deQ2BdqVVTMtmvza4LLXwrau4S6AHEC",
  "key32": "2BtEqDu6h2t3oR7mWpa7MmtTaqE8yUcL82NPcYpEw2aaHUkGiJUeTGTKUMMSgLHTT2b6QreLDU9zUUbGLgh4tqYj",
  "key33": "5pyQDeUo5mRyDj7dxnHbx3atMUsZ1x1aSqk58Yrezg5ggBQ85CUHdbzQiepyBUE6SgAD4P7L8kESnKKREJXFmRx2",
  "key34": "4MgVxzAcGLMrj6pe7Y3NWVQdPficdSNuT6h66XdFSgu3XGhbeBoXA1A8Ct42BfPxRWsGR1QUmiXL5uvcbqHV3HrL",
  "key35": "4Daup1iWVKwuRuDB9uXbncxCBkKgt14mk8eBmYedeZpYZNweNNXhytFZ8djpBCDiaZJdF9vGdAQvbK8e7ZX4vBmX",
  "key36": "4whD45VeCg7oxmHBd9X39SVwD3Vy1TaGnM6vc5gGV7dGnBxAGJg7KwvGBvkdJTrzmja1ZjZvkSktqUsXJttKiSHD",
  "key37": "2iqN9koRyEjxUitXCzhRkuJ5ehKEFtHUNMwqYGkEMABLYWHX4LR9WEqLTNdMrhSTBRc96tBva87N6Z85zGrYSev9",
  "key38": "4vdS8B6cn5BTHAHqjkFFPqfowVqQ5TU75AfZwoyhjids8WecGLZhWceDmWUHdv7YxUd1rVZ2t3mNtoEF2esri1dW",
  "key39": "jEB4bQ3aaRhZCELYjTB5c5hkZG8anJTf7mZHq6fYUmSwtSu1yGL8WzHi4ZANn22UWEUbMP65HxHCm8TboabrNj5"
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
