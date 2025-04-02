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
    "44mEFZ24UdE1wXDDMCmsrs2fCFRqRXthYNuiZNg3sV41YstrvdUEgoP3HXdu5z8yJNKch1GzTA5gLBnWevVUZUDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SWCW49ZTGFjzkk3BvxZuimYfeLVisQ5PudDdXpHxbfkyGrASVKUwG4uPMrrigUp2SNUi5WS2Fwkpn8N1vNE6yoZ",
  "key1": "dCQALPTziFf5BwozHqgeGdZXFBeGJ6Ma5Bz4jwxVRFNoWwwAUYcnUQ578Pi57zmrJHqC2jfbanhTniY7U9SYHLr",
  "key2": "5iptR13VsettiUjy6LuUoueNQhQECiKxnpvJzFTUPMhb6KGj5HEPQHRxGCQESNEaVFYK2G9AtPjWq7myqhk7aw9H",
  "key3": "4T937KKzUCGobFCEWHNuc632v97PUWV7FTJdJ6QZtNCXp4NTQWrHVeNY5M2xdJwGh7jTVvQwSyvEK8jA8rx4tj6B",
  "key4": "2iHt5f3Ds6SBFvuRiXSVE2GXqNwbeVbH79irGMNxu7XvGw3ggoykDjDYyRfm8R68vhkYxKybotUEZ9izSCarZWdR",
  "key5": "4ZiaayLbuMaf1hEPSxKaFAnqRQtC9baF6M9bLoTkYYG1EFcCszCX54w4M2Kz6n5d13hqzQ9d3AuMyoHpEVvgcAjo",
  "key6": "2iJYAXt9gAiYmBk6XPHgNiYFsMvkNgwBH9yaC4jDu5aqSQrQAVtv38uYAKG5JxzPRLAAYqJmPU37Ed7zuzA5xj82",
  "key7": "22Z6jmqYvKy7iArBtwaHB4MZ3SQy5iSY4px8fMLa1DyRGyqdLCAq6jWug9BU581NiW26orFpRCXnD5S8osJC8JvK",
  "key8": "4Cv6rbQRZSAn81yzeACCKap8H2HWYqwtPQhW4ishhLnXsZbMJkoJQKxy4hPXKR4CksNoP7rcpf6DcnfpAuurAB5A",
  "key9": "2mxdofbE7oSMWHvrBQZpwbZJM7aMQsaMtVV1CxGzs4nLDLXdFQKqjUet6mLBmxH2Lh64YdndA4KFQkqBACQqoMqe",
  "key10": "2GLceBCWHR1xsyVwEAFvgK5Tx68FDnaPAt8bhMNR5sHygd2Rr8udFNg25Ecrw63rGYrTaRbYfqCQPRMrbqL3WVhs",
  "key11": "CiVEDaW1AuA54MFF5y5t5cE3YL59ZQHNbBwx6Myt4bfDtTBewPE47bqzj4nuYjpiMDQvpkhoXLnrdyn9AFBf2kK",
  "key12": "4D3gLBzXiHZzGRktahJ5yfCeRoYxb6Waohz4c2LnaHiyGrj4N53qG1vvAErj1Py6MrU8tv82wp2zQAaQcbTuu8gL",
  "key13": "5VbtVvxxhLytL4vrkoToK5FCrj1Y9g836Ui3Qch3o9pd4L1eHP3BGkAEUvFhSs6qhQ7yRkug5BpnhPY6HW1h8rTH",
  "key14": "22NjJVKjCYSqrtoU81VWEexP1PuM2SHWfAM35DggFGwKncs2swWZegbBViKYiMDTHTdx8rmi7SzHoxEiT6BsaTns",
  "key15": "5oMGMGAgTyyUnQnA2e4FAeywzNQpRkZavBd2Jq9ADAZd8DFoqmW3MvfXDyZ6uw168Tdn7QkXY5rneedq9QSCupPY",
  "key16": "GFwxGdM6aL1XCkTKRCSz62tqDJpFRb9S88ktsdDMYYJthB4p9SWNK3SNXyxeQSFoq9HiC1w5KohyivyQcwof6wr",
  "key17": "TjSwXpYUHHfa4FNAHWCnBnGMAdeZnk243CWSVPTMYfPxv17wjc1uTAvagcw99fDUre9BPD7fdbx9zJC3J3wnmqQ",
  "key18": "2efwm9ArkQDUXzbjpzehmtdQ3bQdpgmcid4kVeGeyxz5pXn1ao7oBL76JDoA5n323nPpmVP7sQiD9bttPRW9k4pc",
  "key19": "2fA1kpaByG5skZJvKNWSoaE1QsCDwXrMQpLaPzN5YMLpnYTzBuhk8HB52beWue6rRd8VMANb5acgRhKp2NnRRyVv",
  "key20": "4ZTHbM1R672NgEGpjBz4suSf29DrH1ChRfxkmn4NJXAwerM6pYu89P9bLxTEuRLauRBCpHk721DpKYjJEd1exzVK",
  "key21": "4ewhDbwj9pJrxsh9QLo7VYNUbbGgM7WwmhRMHbUJUc4pc2pHwHwKugeYjfnUk4FZmn2vwMThTdLs51h6Rhu7efQU",
  "key22": "41WcE8PkzGJCWyfF79M7nPyZTPHGqfeKBsS5G6ESU7v9nScR6KvqKaJSpv8qhcpfciyRm2dqu6scxwFpkPFr61Gq",
  "key23": "2vYFm4HQZYaXT1j2x1uKwJN3MW2mktYwuEPaW2maMeMwWQwMWCd8k3hdJCNPL9jCu64FwTVDzDnfBffbD67bUp6N",
  "key24": "4sGkccWwy8NkTHVCNLFbUEXduoZTQe2UzVoWw8cE636x1EUqVv7eae9PHfwmvMRFbWpD1WhrWEtfZ8NvsVg6EJp1",
  "key25": "zgQbjH1TyLrJWhNViZztQEZAi1uAUKoLfvefkKCCDtTCvqUjt8wkCFmb13kV9oqwFgS6E3WxzbgzXBN1vmVBofc",
  "key26": "53XxLoQPFWbgeyDpJrEejUmQyFyEYCfnPUhGVF2rjkjWR9kX7GiXseKWKhAWvZzbWs6bZXwMwJPAJKMacWQMSnG8",
  "key27": "26m4VBGWEo4hmWNtwYuAxxaAb9R6qHQ5frnwD4REJARZjne9JWA3ToTpbbLYi5NyexW6Nh4YsZ99oU41T7t4xPn9",
  "key28": "5V5bshg3Nyqu9pqryT8Xz4nmYRbv8KRQ31jvXLhpW6KmupMD3qW47AS3aEfuKc7zdMRnQs29wo9eFPm1uSjP4qjK",
  "key29": "e3HeFEPWJ6cQNcJ5xJ4fKBywLetMUdzTEL1v85iNJHeLQH5HNm2jn6rBGcxVVEZKFCRYAYokYXw1YvX8mGPgAzJ",
  "key30": "45Fa6R4c7VARXgiKi1zvMw2oK44vBbecppu5HkCfHv4CUJSTzjb9yXsMMiHcJk6MPKYC21Ha27jhEpK9icnwsEyN",
  "key31": "2BwdUqSbrJDKmQG8J2W5vSoWvYPrvPEHPgjqUDiLwuqhXTD81XDgiS1vJpXCNUi4fE8Ryd95ZH231YP1beteJmnF",
  "key32": "5TfKHnjiWv5hFMPWdm39d86eJZGScewDYMx5dnUxerNDPBEx5kC1MwbeQaEjyk5BShFJDd7VhNmnsvtVXp2kgJ81",
  "key33": "5RAkf5qYBH1Tei8WtoD3es7nG8Jzk6HULHELCJ2cqSeH5DXqnoLpFSn5uZj2JfXFRjcixkyKaNUcoR1VQAZbdZXt",
  "key34": "CtSLmzAPF73K64dNV8jPwjQuqHm5bpww4XpC7fpQftpricokwceVRAVaG8LgfYoNy7QkeYjdP6vTvDEPoRrBqjC",
  "key35": "fx5veNuM24AniDv2m5JKjzQnb5DgWtoQ5BQRFsimHdQ2kXEiRqTmBXiujtA8ZY3zMEwSHjAigF9pkrhEo3X1xK3",
  "key36": "3tqdVds6yjoQhfzuGoPWeQmRZaRXXPkzPd2qkxvbijfTDFPxHvsFHSgfNANdmYqYP1Nc3CvECvgRS3rkMHY9QG7U",
  "key37": "3uUYPcHDcxYN3ByEaVSk3kwrDrZmCVEapD9kw69hk4NowK2PF6HKxtHagzdiTYvUkLy63iNhQiJLJmeMM4TizupE",
  "key38": "3gZAgqnXDkjE2gNw1CgHXewyufMqbxBn6gQCXErvzq7E6Cwb2VEwtnQK3H6KHxdTxxF2AgUfY2YJ7sA5Ub8xa6Tn",
  "key39": "2uycA55SMDzifia3CStq5VUAjWx7Xmvp9ZUiPqSTWQ4Sg5FusEFC3X9UeDyZ3NWJFBcZJzNsvn1SQKbRgxyJPBee",
  "key40": "5X2gX4SktUd95fD3Zi7Hkpw2gH6mhH8LT84hPFcJbgT5nH1Fsm38UPZW87UFUot8jK6G3RwerCbQKei7z2ZxATzs"
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
