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
    "4t5rF3WChbVzjKuqWPJvyvjwxsHsH77yNTahX4mDvFRSTeStnPadky6b5f7JrfBKQ1n4kLBC3F9548n5zJQ9XW1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44789RGnD5RpGp9sTVfohQNsxVYCf4FSjbvzu4tcr8tTZW99665jYPXm9uRNbDc9WkV6NEJjGHih9T5GVb3jQkZC",
  "key1": "J3Fe3nRMDf7Za5uw4HGsJF4APfmsP7N1wEKUMT9cMh2WUHsLeJ2iuLzYLXHHQafcD6JxoGfPJFbyUNA8Hfya7e7",
  "key2": "2fHtjX8njG1zWmnJ7fncPyrJYtoP8uSeGQ97wXo5VCzeVZo5Xfj9yAWzyLRjyJ6WY32FLzVzxtd5vKe7tm7z453e",
  "key3": "5XVbEvPmkPz2E6uYcLVJ4WEYgibR47Vk7SjraiineGgNrEroJARnyUXSxfChU4B9QsxeFwKS28Q6Ftw6d53Br7Ux",
  "key4": "4wcW2WNBqnb18SaH9iNyabEHHoiCiWqAEtJR5v5nzupRpsDn7oYmfnYcA67PtUwSVVCzVUkWWbiozpVRGHBG4Xwy",
  "key5": "2opetv8RttDC2JLMrTAkEW3PtQJYeKzxiV2oB6TL4pr8YaPQuW4CAURX2hXL77SDcGbZ7yEk8PKh7tLy7YKPQBoF",
  "key6": "vt8QZL9jmo3LLeZVrunipUh9oshaD9S7HfLsvDXyzGGMwJDDuSczDzwnsNkLewtXZKMDth1iSoHPTwUbQ1HEaw6",
  "key7": "5ZRZWn4CYSCFu2zHuN6ypPPjQkZoNogt18fFgVameSqaHBuyRGjrTdUbgVw4BzMmDZwVwAwYwgHfnTRcGZH1QmdM",
  "key8": "2RkCnV49YiArtdSf3pS5uQqziuZejAxeoxw6NUAYQEH966xXdtYwFdLR7HCWekjqLtQuP12gnpfhUepqRqYpjH6f",
  "key9": "68LFWxX9Xwq2AApEUEtaGaQogtvBsuTsF5buXsbuG9ix7bpHdYZRRh6R21V1yZePdceivw5YJxH9kFYYHHVz3z9",
  "key10": "4sfzCMPqh85dZUofDKxzfvkvXU3B8JdNw9rT6Eed6HTcgwzCcuf1vZqzSNuvmPFXiMiX2Qd1JQ7GaXJnv8wB1oPe",
  "key11": "5BPBafnDsygRwwRfnv1gRNycPmsYcQoyWnMuVirYX56KDrZadjixSCNdwfUSzVX6D6NKB7S4aFAjco2N8BNUee2a",
  "key12": "5762ZtXEJv9wrUJFqAffFSFz18e336hFQCdt5zjUbCQrSAeFWWVFvbzVKSVM12GuofWWf9dUcnerPdnVhmcd52J4",
  "key13": "5ZSmfVHZNBuaauhmpezS81EYEV8UbFED6fvVosgZy7zfFDNHhNCu3vQ1v9kebc8BXYA6JQ4LBq6Gy7eJYoXk7Ew3",
  "key14": "2dm9mRbv4BzSMHrP6PfP517oPhJGzZFjFkf91e7BEhWPUkAuHzjxVcLW17LzdCRzJq3NQADsghHYNicT7ZTjzsFy",
  "key15": "4viANVVBrDXuRWVnYsh9CBvJUw6TXwiNR3JXmBEkCfN1qswPD7xrKeBegv5YFtDWUNAJdkmu5eq7xEjyn7WLkMwJ",
  "key16": "4Jzzpw3tP1ECXevoZ7joa8qM1U857eaXLqtNozpUbTDp6qD7N7qnrNqdn93eDPVd6kMPWguLJnc1mtpXzgWgyfVR",
  "key17": "493n9Ycg2X8fkDvJRWcQYv2BvXsc9R6J5rsdrQoP3XM4WMiGamfkoiyWTdvx7duv9U5NWioFKzB6xokAWC9QDQae",
  "key18": "25pmpUdNvy31wK7ijVGj5odePVpQU3vKiFBmn95trCsxz8kHFsmYFbtfq4SvNoVL4LHBwiBQRks68wvxh2SHjFpB",
  "key19": "jAUMFpUdSXxpi7uf1J5phDv6T6QHYM89gzhWNjEFx9FrxTcHNSP5TKMCDfCV67V24VmNPVjrTG2pohppXbjawHz",
  "key20": "5Cbx3sBUGwLht2oezXaqywELaZ4TTMMoR9phEyoUuAsD9j2gYZxMU9cVWKyzz2XWGDSKFFpgr5dC7jLbX7u584uW",
  "key21": "2pEP29goHATyS9GG384wHKXveVTLn3kdoQrftWB6knVgG55D7LTsajGX3JrvnsBPnxfx2WmmSg9qeMb433719odq",
  "key22": "2NKvBuThtMX1Thse7WD55AqPJEkVnjrnoVX9awmK8W9a4g6m7FBTDiXWBEEkqQGJ5LsBd3c5R7ND6HZHFDqVrMpS",
  "key23": "2ueKTM6s4BHM7Z95vTdmHkur3YKNY8efhDw33nkhMNLk1sp3sqPyH5aaJGDpSmqc4JaEjB5LLzbXtnbFeqbQgSB",
  "key24": "4dyR4LAxLTygFikrDJkprgYLw6uPC2446PjmRP9GKJmaJC2FDGW2JcNkkjeqHvxQyewsPtpD9Ho8cGgg4tJrnwQK",
  "key25": "5f8UJt4cP6L3k3Tg2FpJjNfacEHe58sHYTzmmy8HFx5rK6saoq5FP6rgnMmtEVEj48vYafSQia4si2Acbw9YTHJ8",
  "key26": "3UNGeprPxEsUgej9THoK7ZFwWK2cvXmjvVDn74zELvnBRHGnRrMRpUKVtuC6AGKVRaLp51jKcXrWBe9QAxJXkHyB",
  "key27": "4DCqjViuEdy6rkQNi5z1TSfi4PBDFpWpv59MbQ7KQ86nr7JhXVeirBCGWsVqxderHgHi47nHeqVbjtAQGTQVSBzY",
  "key28": "55xGHr3MGdrH9HSG8PZZ4EhupFYyB2bXtq53iK5wQXxWbZ6wAU5WXHjPGtC3nAYcxU7ofvwwSMxsTqpemzrLQoEV",
  "key29": "4BkWejTVvWcG26BcrifGQ7ArjFCvetahoa6ai8ADeyaUUXLnWDmT7BnEF2wvjbaxvSjzobe6T1yBX7tfTg5ihhG3",
  "key30": "WHHVYZ3NoessRtDg3MypoPtPHWAWw6zZrPrnVjHkTEeFfZtGwN54e2pczcLfb6nuHWeH42wbJd42Xuuyjttnq2q",
  "key31": "Dt23EqwmQpiZ6ft85qhkSkpZUhe4CbWnCELcVuLvdMHNAoPwrwvqk5uKWvPpvJ2kqLXoQkfz8wg3TvJ7osTsWAL",
  "key32": "4w6eJP2koawF8ZPFwh73uKAJvr5oqgN1JPsbhAe6LgfVLKoQ5r54JQ6B4e6qi5PFoyeuHS3JczK2uZKRP1CBdjum",
  "key33": "eAE9wTNYFcFd8caq1FchZSX1evy5yTga9T1YwqVPLPVjEofEsqoymoxmBum5XeZoyR37UQ2DGoemSCtoKicUDaq",
  "key34": "3b9qMHWCweoEdzQXmUXgkCmWUVrfWjZ4nEoMBbbdEHCPnN93g8nVhy4EDxTzSan7i5suQmRPmeaXbGxBAfXiTSPo",
  "key35": "2zrS6BE1RT3U8uPpzUbkFTzJRRxqsEmwjA3DT1syqZRde2eXDyBQvJxnXNmjFyW7t6LQzWR6yZ37AVUqwcww3idR",
  "key36": "417waj7mPrxBXb1vt6fGng4i2dvcjiGdvLdXHPSH3iYP7ECKAyjxAKuM34teiQ8rLikKdHqCdt6U8P1scKuz1bGB",
  "key37": "4bwxSj8Zi8ZqShhQfPLjLNXHXmK5nUZmczCJ96zeNbgLngtnhdtzSrG5SfcWC6Ghc8Z5WHhqqWNy2nFtzpKzJiuQ",
  "key38": "4DcB9R9bKX2AifunxekSNn8vgbmZWrGdU173KyDw9qzT4WevdHTbha25Y2rKqW8FKPHBAxhsoCM6FxV4fHUXGPMz",
  "key39": "5DQ5ZScucMM3vSndUXzeGzK17DFaNminUouNVzzbYNuj8fXkaXHBinMUZSfcCv1ybdxHPopGgzdQnRpi5BRaENN4",
  "key40": "3spC3YdrB6yX6qrdp3bEMvLZWUxXm6EJM32WaNpre6LNuvebqzpBcK6ta4Hqx1GrpitDybJuyarSiV98Lc587gnv",
  "key41": "4HjD5GpxFebmbQz5WKkM5nawBRdRjjjMgdBVsRpNCfQUAJTcwNkAb86zmieKRxxdK7ttaKHLHKvKWEQUKGscdRut",
  "key42": "2XzdzgdEKExAHbDaZ8ZQxN8Z7pwMMYKJp4Vcua6qWB9yTvCFyajjbYBgLKVVj2KnZgGngEBX6mQVE2siboNgKhtV",
  "key43": "4o3ujNohwpt1fWZ39ZUeKG2wREXXwXC2Wd3ZGighJBFJCr3Rk8Ha2tvhaEywSL5sp9sdmFpcGGGQekkNc9sJ79TA",
  "key44": "5fKijgwrEjKQa7cwek16BRFmeAD6tpWs13EyyoZ9N9JWSsHpycQBtg8eEwJX2VGN8FKRDrUvxbQDmCWaMo4zzQvQ",
  "key45": "t8cChCGUrkJNgj6CA3MzMFEPsXCSN3LZHSky6p3Vt2vP2gbMLaSH8gk1oeA6sxCkfNkEHa3WiKiQC8fLeJw1UuD"
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
