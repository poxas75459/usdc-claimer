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
    "2ipUaYvrta52nWsJVjW9S3M68PoxQt1yALHVSk8etCx6CorCmEGxsKsVxiiwUgzYvsAocUp86zBp4hggY2CUAsZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JfKrzgkVBmN2iTBHsrPyxfVGGBWHtcPjcfaHsp688Wyd5VTXNw2Wtdn1npykdSaDEj4ywRb5AZ6MwKaQBSjjbr",
  "key1": "6rrNrzURLzvTvQunF47cfS34iwTXnUSnELhNGWtZCXvjnFpEQL9eg8mQcchYumUatogoM8oKAC6T8sGRf3jQ797",
  "key2": "5Wf9N8YfCAtwXFAszwEKwYnEZnAwghGTFUafzvg5La2eHKmsghvy5v7wobMqMTiuho1a3jjJm35vDuVLnpACsvnN",
  "key3": "3Gz7sVPMHcz7jDHk24xWLHFQTJSVLVX8QE9mvkz6EJJFM2V31D7ryBvhsMJWzoAdaCU37jTNzhqnVyxk1gyJeS5A",
  "key4": "25nrxDdwFGe685VRBpFiyiS8PsTYnDHPutTQoZH6D1TXn4Bn4XyVgVtFDdVopcn6zwYUNUvgQY3yaqA1qjbLvQs8",
  "key5": "3Niwsv7SwwF2yDeGnpnDtUnUjPqR14Xw7qUpEfjyj7v8okA71mfrYSRdQJugGREBp5sEqy13tBbVuuM5watGMeBB",
  "key6": "2UzFsqMgyUH5w6KnqDe8vtuMrFSHttG6Mip6g446gyQkcBTYaJBm3tsBAZwf1M7MZLgu2ryArQ9eTc2UiQNh3Rm2",
  "key7": "65JViU4XeN2KrA5mNeoEaiHxVArJxF5FciMpciCTBLadXkuR4qzpLda1UcZSyiRTaMpeKiAuN2PDrPkxYBTXuPPz",
  "key8": "pxHTZ18kVVUNswrNEiohgnoqDojMLKvN5CMyrdG6BDSEmYuFYChJP2kfyPdPdJWQrdQsEHcvkbXudcHY5GE8wmF",
  "key9": "4KqeMtUsaL8QuTXBjXMVu6RSzHEwMCM6dCvHZTn5Sff81HJtbz9CFG1kYjmDa3tP2YcFgLHxVShfaqDZmWJHBsWr",
  "key10": "2dCjRhh6S1fA29soL6rFcYEAmgTmHHUdJVbWjfcyhwxcDwEdPDp8UDq55N8BfDiNfCzvEeZmvUa6AhedhCjeHdG5",
  "key11": "3SUSkoUSN6iNDpG69Fmr5fpbcaz8wWoLsUd8i42Ftj5mpzzJS1WBuu1q8DSMk3tSWjKEjjBxxoTC7T3JGDhthPj8",
  "key12": "JRPxir8Vkd3DtwZxYYB1EDr6QvH9cUWWh7L8m9cUHuYf1Z4Z2JjNUucWLCCRKrDebJSb2LNvDMCFs5LXt3qXbK6",
  "key13": "3UaJwzbDE8jiCnS1ZWCezK7c5Gh2wDggZzWmRCLJFTPgcxCC3qgUTB7GMsSLgzgkYrUdBgoHaNggfCHj1y2BrMxG",
  "key14": "3vseE2qj28Yo9E6zW18LdYoqarUfLoaAYBz87Jw1T7iWeTSk1WQmCFCwYYoJJuFpYfDoicHMKk4jRdFy59uiM5kj",
  "key15": "2HDn8dCaQYwoYX8kWxDne4xiXQocy7YdhNboHjcA1bu6tRVgdDczYZNCWfL47nW97doKcmQFueYN4zpAnN2joK96",
  "key16": "3LNxkYzkjLhEVECh5KiC3oxXn9iJhwcx4hqd5Hph8A8QH8SPgqZFzwWh3Q6sSS1Wqgt4PCUi1dyg6TZHnYo6QT2q",
  "key17": "4JqXSmzpnUMpg5pmsYhmHHW9snGreyez6WYVuqo3A8jQySL4moarxju8ZAToyJApYho7B1gNHgspJ4EVKvkLm5YU",
  "key18": "3JS4A7V2CqdGFGmo6uMeMy2nPwxQt72krM6DLdQQnyCaxMBHdghs8ri7hGFcyJG6DSieYjZ18ZhaugsGKj664t1Y",
  "key19": "341SHAARq3u8tDXMuNN9BageigJ435oUyR77xW8z858j4bsvbC4KyKV2n4wJRsNSwgt6Days3PfvMQjqtYvnwAjK",
  "key20": "2K3ND682Ak6Xf6MM1fQhUNSSR6pZ3iLYRY45ZsDFUHhr1L9f6dYChBwu35dM5gM3u4Dy352VW9DMRK98Kh382yxw",
  "key21": "2ux6DbmJ65pvhr38pQApU8dQ5xvie4WoZPBw4vH4TRYqsWsTSHH5yCJ5qmG6BLQxAguPncrvoZfEpvNEp7izRjxV",
  "key22": "48rA3GqRZq32Dcix2eE3AfUKxk4iTVFeKB9KE5iP8XBoDD7EtKmeKAZHnJTE9onAfwfV5is6BHi9XK8mQM57zcvj",
  "key23": "3ocKRnNvoAvMoouMf6HWTH9JA3iEef7UCfas1EdRgC3BMVCuSKFh9Zsr3k2EzaDtb2isTbSZXAnYmgv6L5XPDXAH",
  "key24": "2FSHMr4jphJxSa7gJtMHHxLFPGa6HMNyDcayX7F8ST5sNZKHD2VintbdaHq9ftuiHNXJUoYFAdKNjJwVqJfGbzWQ",
  "key25": "4W9YE5VG1ydzbGmC1BJ2Vm1vUTrJrr3ywt4SsfFT4aKhCrjEgs3zvcVerCfKRpcqsiFuiPggfXEZWGVcUBzGHkBM",
  "key26": "2EjdSs59X7vyiPJewwhGmQ35WkYEH3JJXrnnbJbRXp3sPw31xdq5HoXB3bSJuwqfMBqgzTHLtditaJTGe9uBwE1B",
  "key27": "4wTuxGT95L8LHL1zqjWBbwnVdEmVKZh9ETxr3BTA9QJZPALtCq22sNWt6yqE9WRwfxFVGWFPej9tpCEcNuoUnkUT",
  "key28": "2E9tgSovK9Ghk1YfCwaZU8nLog4tQ3hNY5dvCYjBdFDRnUVCnwEyTMre2ET2HCoKSeDEhudyapSe1Uc8AYQ35tw6",
  "key29": "3NnAHC9D6UHgKeH2fNpQ5SCU8vUNBsua1NxZP5Sn2SNPqt8KteaTucNXu5JB9esvZhxTjiz9gVAXkUW4jE561znr",
  "key30": "2euD4rYVbgnKNGTDnCe6CXwmpVFr5peKGELjmXPULG5DJ8fuBBDt8fF89sxTAzbj7Upw8JYTiQXTM1Eg4kHCnX6C",
  "key31": "38zaT2FhUSz7fSPyuGDA4MRp9sgiuY4APHXggiMpm33Ebp8AZ1HzPB3BkWsPNPN3boj4GB83sFHzcUjpdM116Ast",
  "key32": "3KJRbtNM3vhryntafiQ3c2noadpP3sPcmywCQsdNTVoT8tYBEhBKEjP2YMFSL3DaTE4oQdAkMgQorxuUmcUBTv41",
  "key33": "3vbx5zYbMfaBbmd2jdYnxvKY1zqxMnsfrVur6gk8RXVVd9yUmCCuvKu69irkrAMWci7ndCHphWHdGUJHk7tuqScF",
  "key34": "5zyZGqwnhE4wNsULufG6zwyZC6zXtMPFyD8RQLsarsWVBkeB7rXFdF79SdSRF5JB7E4JcKQBbVxUyY9J6pyn17mF",
  "key35": "3Rqa8HPPsUcmeiTnicsCvmprWBQYtqi6T3R8jvryeEBALcuYmv8Up5XHYGuYBLG1BYxpwUgCXHoLocJVNpojFnT9",
  "key36": "gWY7iCsCrAiKG3jsSbGYrsd9TXkeZ85gRuWNHvyy1gxh3s4FftzrNUCN4yKximikRzkpe7Q9DJMYETdGd2njZLF",
  "key37": "5x795EsK5Vd165wW77XHGYfvX1cNEQJUBmVKmWosUpD96aBy3FBq26uuk6NtXniaAiU1AmtUDdcUuWvmDyhA1XTa",
  "key38": "5GK7xvH8QR5x4Smu2mo8QYovt1i1XHQ5L6Am9bLEJbGfEUwSmLTM1bpfMeCRtzPwqxDP1xjnPasHKgpy4SaUcXAn"
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
