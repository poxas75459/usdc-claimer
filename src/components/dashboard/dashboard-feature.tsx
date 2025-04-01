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
    "57tkZsM78GihDn3Kkhc6X59JKgFVxoojfLkwuzL8tELK8x7WEyGw7CmSHRCcH4i24QCj8jLigug97ze5iHAGm2sw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q1YsX2vr4X4dqbQr8W4CYExBzEsoyFb5NcyHySpSq1hSxxuAXpwFVer8hZNegyFFSWzDKEY5NbbAsNPMjq8gVrS",
  "key1": "5yeMyWKWCs2Tpit7wAm6f649zqY6cvSALJ9pdWwRvXauPYdB4Dms9sJjYEHeBbhrb3aStnLkQe8PYBgRCchfaWQP",
  "key2": "2DMmBhoKp5CKCMd7XtgTmiPkYoBZnV9AmKgFTmyzknEkqTsPuv33E68kNqr2crMJpEXcsidobrFVahucAGxohHuy",
  "key3": "4yE1Y6uPdgNHdYcYVrsxUPeYkkprH5RwgqZ8wkmxciNXTxEjvmdG3X7AywEdLggiBZQswtSD3NXbPTcUESdpKC2S",
  "key4": "4N9E5SNNEjRw4xnit7keC3rsq4XiSnxU1EjjjSEtzAMidVVBMEK5SXwM3jjkyQWapUFxftFYrbvxNT8nsVu8ESeD",
  "key5": "3yjHHZFSkHiYkDmuytCZWS7SpA1aLAfWXGK8cxp5E37PdvyiBohhrcdUvjuBtzxEaNYX5uh6rj5UvcTMTAwznLjJ",
  "key6": "5FHDhUgyV2rYLMiQXK5ebW3oLxrpb2qXSC7hjHe8cFBCNjCE9sjhCtjbyEtCqWdpM2LCVcB9xG3Y1uhAfnaNxZ7p",
  "key7": "pihtgGTiDiy6jAzfaPq569fTndG2SG3fLSgGYimQwff9oGKVLJUFepxDqJxJupKhUNraVrKEPnmV4W98NWqXiE4",
  "key8": "2vUmcUzgmBoSwKBaSZ7Hb7jt7RyaFucBnKnCVnGGiRrc3Z4bFu7HrQUztdTN2pmcQRVVhwoRfMRkj8GVWYGNv3CY",
  "key9": "48AQnQvDsBufahqqLv5f9x8RVG2BVoU8j6Cp6Je7vRquwe6fbSvBgnmoNEqzQaYeSX2EDtmHeHCRDrtjaENvxMLM",
  "key10": "4TYbgFqvDKhGc6FWGwDGmwPWUk6pAeVAeoenJcCcVDFraRB9dHT4ojthZ7JHHVEKhz3RMr51kdDdTgaqPi9DZ4pB",
  "key11": "3EXiWoAneHgsoswrZercNVtoXiC72dBVmhdCRgTpK6EMW5ojp7RBW38puBVjkarM7UtFrotpbhC3VWstCWoKjwUh",
  "key12": "g1ogSkeYRm36rQnQng7H1KAviYAhKvNeZKZ16ZrJLX2eUNRRCXMSjQPaHeeq2yUC2MdvveiyGVXESgUWo1uYiZQ",
  "key13": "55rZfaNARz3FQJ7MREQYcPfim7FqG3Gz8ZEwGbvaQkgCni78YTZhiwPWnqqBmNoBq8YNs9ehTvFAx9B45eTKMG72",
  "key14": "9LP9wF6VyjAyGg8oLsNaC16xZWVcWwiMyYS7sYHwSLj8Ds6PbxFbGDzcCxqeoQ8nv9NyQpQtD7p8fBf9EcRkkru",
  "key15": "2micGwgDK7SwHygzuo792rQzsGFrjjEqATWZPtZuTdXqijGf6fpWQdCiMF9GKnuYTDXw6TXFf81SLEAHkRVd1AUH",
  "key16": "36dXFsA4DbEn97DxPFv2gcUJPE8M5YZ5UjjUB7kHr3ZH5pXoB6hcAXobaXXY1k5veW9gv59A96Bs73JWwMmzT5hJ",
  "key17": "2oVeeaS2UyvmpFCG2XSxC1FfJueCYkePrkYcgxhxj8BAMaF3PaQW1ytLGVaPJETFLWPWWFwD2GqbrxaTtEhiqdEL",
  "key18": "6My1EidCRKSMQ5GcXhyEYsLNkHs7Wb6ZUXb71KijmMgBw9apSgdVmq9sfcy7zodL4prKfrrce2b33HeZmhkgqnw",
  "key19": "5QML8pgTvKcETXo9sU8zy1vBtnxfi2LvFeGTymZtED2EcbcWerZxCGQo9wtVNXgqMT8szzCH3rrWnh5fhRjLQTus",
  "key20": "Ffes7B3h5qUxUuDCeRFzUbk9QAytRMvRMafiFfomo4R5cRM1vRti2zdsskAXKdaNS2rSCH4NbtrL2fMmUxxrkd4",
  "key21": "4xXPxEuZVKSBuzDgHEDArhoPWtUt7pRJfQjK9Ns1KbuzTsDL5ig394jnDDjHSgidyUrHXuqpRmbAiS74XXB4Lm4E",
  "key22": "2QJjRB64dxxG8uqLC9XrsMH7Gf9AnQ6Xze8W4qbrcU3kJWupydUctPU6QPSTPd6v3prPvcFtU5A1QybX5gWyRzWy",
  "key23": "4V2QE1T56KTPbKbbomAkT6bLuG9Duauo82SyeutRiJvJZyrSt4G9RT1C6AETzDYxhNW6RxD4WprLnXSZajnULsCV",
  "key24": "27i2qSejy7nccKy278bqy9FWpBvqwX2iaC7i2GdHKTCqa5hFSZLpZSN5NvBNZKvr3caGtXJ4acSERTNKBgaAHpNc",
  "key25": "2uzVPcBgRe8NbwHHFbyMWtrwuzCNuWgi9F3bEFU76Qg6H27Xh6ausTtg2Sve7xeee1SgFiBQCh8fdBd26o7PMR41",
  "key26": "xFcsQqtTgUpp1W7PdD3Mat5oCU2JHbnXEyffH3TCi13BRCydn9shQtMLjGCqm6ERMsHAuPREagV9BQrHbnF2jqq",
  "key27": "4yYKj3LXbD614P38qPsPev5hdeLuUTUA65Yx1MHaKjsvveuR6DaHeskzJnE5mV4GAycMdVQp3vkKXGwvVBxZnc7v",
  "key28": "4ruK6AyJZCeCJgi7fKMbBhuvjgD1hFLXorZFHMcHPo9BRzK6KZi5xkcDwLt4zhet8KBZ7TErTY9mg6K13Tupwnkz",
  "key29": "42Q7NtQbDcwmr7unmuJnatk99X1wLDvqFbGRmkZ5jU5LecPqwMhUdfeYpq3xnCHZeR85qfWn2DuoCWZWhPNyvjc",
  "key30": "4mKfz1x34M5A7bWBRQk4qa9ipHSwB7iaww9EYCm71LygK7kM6XefN2wX6LuPcQ2chfMEGjc6Zp87s29rdwkVqajV",
  "key31": "3uNwuUczRBAqmdqYK2CgrhTpmkBezf9zdA8GoYUnowHCd5duoXEVjSoXCq7CUaFpgPqVLj27gY8DHqNukZEs9sio",
  "key32": "4FzX1XVR87svnCS3eTZaSv6XoYfCuBCe4wYSdxVPbbiUB1TZVndyMPxg7poWapNvyYJK24DA14HbYumFC1jVJKPk",
  "key33": "5AMSfd6ifYJmZNw2LkSGVtB25qbTDNRFDyQFfcznpEqFWHPaG7Uo6Vy1o8Y1rgqNZKxSoNMoUyFxazhSKU2CBXNn",
  "key34": "5B5Cvjg7BUyjHaSsAM9kYA6TjsD1YPFd6TwcdSvkvcfqaPqBFv5tLssJFW7RoXg65YxuEZ9Gt7FAQt9aJZxza64G",
  "key35": "5baZeTNqgXaYzpJNLK5DQ36BCKCUDG8QHHGiGenJ1UpE69VemwA5fwQ5W9bZaUgKXLNLVECBB39sVYbeZW9CpDad",
  "key36": "5DXak71wj569Jbu36aUWnWT2qiuVSJu2Nk9HmZAnk7F3P4RVHQAMv52kPwjZZuUXexi35oLtuFAA9Rffh1F6Bydt",
  "key37": "5F2CnreKwEpCtRNq12CpX9KDjZUycs71ebBvfeBbTurEZveAxdgXE9ft8VpyoM9zW8QgyZ18Gfb1HUMXf6rp5h7i",
  "key38": "jsV9R5NEAL9iCNiMfv6aNKZYztuCxSf7F8vEJXex6LebhYJZA8cLRMJqGGGQeR1ypxLzap6VAMJNvEqaC255G2L",
  "key39": "WY5Eq4pVbqTqProosft5XeGuWVEA8eTvmVWsCgDhN2XqAXMveqX2BJzpwNtg7mprYRutWS4shLcQwQZquPh5UrA",
  "key40": "42qxd7T4dKtAjdnuE23pYtZKWgWjtBybimA7FwfihwMhqa1c4yXTxapF7FgUKmWoahQtmaJ9re6jeBF9wtFoeoQn",
  "key41": "3YfbFFULzcS1NxDB8pJ1GoL1RbhQM82ZoWauj4YnfBVRy61gpUqW8jhaFcjAsBVKY3WXf9RE2K5tg7wGnm2bKUht"
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
