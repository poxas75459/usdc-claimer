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
    "4TmzScFmYEovDKM5kZLeNWRtTAoUDEHGpUC1yoGbW4ehAvjvSYgAirFJrXzNZtZkqKfQ6t3GPdJY1tuycBCt38SB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zsrKzs6RRGVBTKphruLZ9WShMZzVEUhKEo3uzCUkpPcAgejmndK7y1StYsm3tkkNpFeyYe6TNqrUxVA1AcGJEiK",
  "key1": "5jVysiNR5NkEn99QwbrG7nSZp4iuDxPobAhFsv5B3jp1q7emKfbVidkENiCNw9ZAfRc5YcqJ8de6LggPwSBsewZT",
  "key2": "2ce6hdxZ46Xeru188K9SpEziEZLwiVfb2ojzW76F61LU4kkRU9Br9UwbNrmQYpB3fzZTXcjmhMAjfezENE3Zn4Df",
  "key3": "YENRhybZDYrEpx3Dk2RLoJ4cJTGtU8gxnDfYpQ1uVwPfKnJKPFcmkDkd8pSgFf5zLRGVzzYVQ73sKUhcdGFzBTs",
  "key4": "nE2CEjPsvZJaTJt2bDBpWa5RSSgcxpfydfvX2uvWABURhNiZUpUYhr4SEJHf1C9Q5fWJAwM9hkZJnMhAc71VSaG",
  "key5": "4epAjqr9sqSRccy94QhVSSW8iGVo5wbxDdL8BsnmisYESXr5SFMce9EEjK5dXnynML2n2sovhuR35dT1gBXA1hWx",
  "key6": "5icueq2qq7FhQs5SgEFrFe6VAmHXfNCQ4LtHp8Dv2APjc6Ebah2MJmWr7buxPiJkRQXWFz6bqi53gsgzrEHM9Yij",
  "key7": "DjJ1JPKDDg1aB2saUvcNv7o213kaPjH9wiCn4YddEPuGaYnGSn4cgxPkaCdJ2bC6QSbqYDrvtzpwEQjbDvRjgp3",
  "key8": "JTVcHdRePRhagy9dhdZ1FdKgGvkzvWeEvWY6chxZ8wAjP7gR7uf6aq35f2mY6vBtXRFhaMaaND5Ua3Rx6i5LeVx",
  "key9": "3hyA4khxD6Ya1sUxZZCLwLub4NVmof4VEHbXsxijEQ77kEh9Xd33RNZvMM3Mw43feGmuYZjxthWaK35rJDwvrG7s",
  "key10": "UZq8sSbSxCMGP8sqWrCdDZuxQLftVzNd1KfbSgyhY73EuWeD9hu3tpgQsPyv7aNcNJu5Z1u2Pe9dTVfio4fv6zJ",
  "key11": "dDRhhKift6SZL2uhEGxsJvuSzq6LyKnm2Jofg6w82sG5v1pf8Wa34HrnRAK88oe14GnijeTQJAe2coiLchSmR92",
  "key12": "55K6ceQixUx1q5rRL7phKkWZx48sDZVDnAsf4R8JpaDxqCY8LeFdB6Qf4AAekx1Brb2upTMNe82jvjby2mRrFAeq",
  "key13": "f3dERbSk91LLyxsePa4LZSLotLjpCd28kqywGhXJfHEZ2MievKuNTEZv9gBbpmBE8x3wywct6Kn8Kt37baEwrhA",
  "key14": "33P2XMGMGL2HtAGQdKgPHkMyTS1jmkAjDcJQRi98sbkoxL1TYBjHCWAPSk3x4E1fep4fFXWVnAbNZ8TstEPBRCb7",
  "key15": "5N9X4ebV2ApZFm8ZjztfVqxP1qRUGnjgbCXUr8JBKudi1oSpijK7fusigX6GsQr5MqcG5rjgvdYqDyz8Bbiu7DF1",
  "key16": "4tzPbmagKtqFyXtnYuNfm5SvSdQv4aEvgVf8hBfYTB49Hwh4NQBDGZCgdnn7XgpjZZuqTZFsjyyyhXV4TnCQSXoW",
  "key17": "5CSdg2CvtxyCPstVgRkZwaFqrc17HfpBssgc8xC9TULKTNP3ZnXoEidQ3SWNhfTdyYUh2SdfGyGzHedG7YCcAjzY",
  "key18": "4HS1D9FKYh1CpDyr6sYCUeJQMN2LDEqJH9PzdFXKtLKRqhPtwWk7rGko7fHXGSZ3Fif8MJUChCQJLfPWBB9s5Yu",
  "key19": "27kZWbYZ4xujitCwkqQN1s6r84Q4hTinS44XCe2CnNoERxJoHvVuaPZ8iDwzXL1ckfYxj1SrBVqskwFYVsdcHwxf",
  "key20": "5c3JEEmG2oQYWGqbWcs31VePatjq42vw2bdqG14d4JZor3aGYGt2TTGKiRb7CvTgEPZoRRNSsi23byhcg2Hs9kF3",
  "key21": "4G3uTJ6muQMpUnz6xXFSA3UA49d5eAnqkj1D5CpciKZn3ZLuZvRcb46AxFnEhCfhpUiN2jpBZhzkwmA95GV2sUQZ",
  "key22": "5X78zTeHzNkPmm5sKvgFadqcKxZwRYEjLsVVtonEqeGLGrHvpLNpPRLNHL5RqeTHhZQKTPd3kpT4x49M4gVZtUco",
  "key23": "nwAgBAcyNVd6jJJVmrEKUxG4wgR5edbEEqQPe6CMoEYwwNTJAaH7j4RQ1Fsg9H6rn4vt14Kp6N1g5AvN5ybWWjT",
  "key24": "4cYY8eCBT8oQNvmVMzpvnrtu1PBxAsRFSn3bWjTKjmKJKWynbAxdrtJRxBTX13KCR4zNiLa29T4XQ9ReWaUbEUox",
  "key25": "2JyFWFZkjcWhF9X2dYLPZze7g9JYUZaUqFeqBadTtRWDwB7BR9PUQvBnTWTVxZSihuGaRCeR59DkrP5d2a4n79xu",
  "key26": "2oKcC4L9vHbaUrYNoga8zAu9QqQEt68Pe6aGgH83rQgrdFtN9psn7LXzsS5E8V2ZwoanAbU93nFkuugjpJotkzF8",
  "key27": "4wT5eUdKhMMGaD4EaaAB2HED3umgYE3fMH4eraRGYojgqbXCAHQPMsNiG3ERiC1nXHXLHKeov4Rpbgsrc13fa18V",
  "key28": "5JuczWv2K7mEqYbPjfeDHJV7SN9Vr9nfVfzomMUToJX5kXbeVVR7hfXgpNgTsGsiQ7Vdwk4a1BR6s3HqpUn7bqAB",
  "key29": "3neLYaD1ELatLR7EgbrszrTcbgycWVVD7HtUdGaWtwkTtGyMHUa1PU1VKsH46EDDfZJJF6njBkvFgU5VEPNSQWG9",
  "key30": "4AmfZxgSQ1aSbhGs8rB3kCN1aMpeEuiJbDeFgE34bdf6pKAYLNs4A1FtZhyRDCdmqehF9NZZEYtmYkRBStZLJteC",
  "key31": "3qYN7YToNVU7HA7DpKFt7z2o2NRXGE2deWTV7hfktHGb123Nq9X4v9LUtS4Su5SniinBvy5FACvwErCM7PeiMkQ8",
  "key32": "3bmXXCt8DFCCoshmQ7cg5wknQWccLLFjcB3sYPAfR8XHiT7GVoK4oYJTVLPQchiNGuSf23AJrb34Tk8CFCUjZQvw",
  "key33": "441FiEaEdfnfeoj6YHBjbEhsfa5DQgJH2BYzaGcHcnT2ahDazzP4LYGhnmTj1N5GqHSFydiVQ5FYmbJVFTSEUqxn",
  "key34": "38NXKQqmuYQ9mipTXHsv2L6ZJyksJS72zUJbbLQsLxvWJ44YJoTZTi2CxzZNUZi7DTGCLbZrGJinwWAoeMbg2moJ",
  "key35": "7bQXpQBR6brwACzaj7PuQhMQS71ezS7WnV1Ve3FUVArLmPtZNQogHFQvUt92UJRQR6UnBYyj4n8fQaBQXksRDtj",
  "key36": "2G2yLCtKgem7M9pQQjM5V2fY1V7CKqqNzwfypF7C7Znzj6dz9HJvy79YjZK7MWsQUfmTV6MK4yA2NjTY5ASPMLeM",
  "key37": "5arYhe5aWSedWTDFHnvnCZ851dckEVVFw9nUhDg1mm244pFaQs1uH54tot2x3qG5XxsZy2zvAUn2xYdAQqTBwsFS"
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
