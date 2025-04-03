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
    "4gJrsFWjDPoyx85aH3fqcQVkgdAUmYFaQxy7QcSYmFovs1cA4TUFptjomduHZRh74GoMn5pb3MtnHxdya4BZD9k9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oC9nYZ1Ey2KTbw4N8nVeUmU9Wm15UhCuBTWMT9YHaRayDeEUL5KNDc7Td6Yd1fSgXCB29xMLD1T99JczJtESLDN",
  "key1": "37GPgu21dhLUsWhjmz2HubdoKkcgp8aGntp9vG3rfEdSHYR8TZnxzV6VXsj79HSGQCqwPKS6EqXuqA1fjgjAwqCa",
  "key2": "51WnB2CQcLYibNPDv8jZG3w7Zaxo1UCDFmyLuEYr9bFFKoZanxwB1VpjjatgPa91VUBWRKnosSd3B7a3D6MXbr22",
  "key3": "5jttakjnv6RxhEwax6BvpieP6YXWRLzJ5GhTbzEPu3DpztNziYcsugikH7TTt6BubLaiS9VmK79EmctcxQnn814F",
  "key4": "2hEMAt3RWeG6sc1im5vCCx95ko7vDELVSBYbN1kRPDpGSaTxLdicBmpkMmsQr1tFAXdtCtHyvNQPrAToP58MPSKa",
  "key5": "2aEdXfAv8xhi2pAmKX4ZJSJ7dBCH1PhG9YGPHJ8RXxEaEvNNfFp3jeFCXUcwGhtCwDmViYrkRME9Zr6WJ4kJNfs8",
  "key6": "2pjwsgKoyk17yMx7rFw36gDi1whzGUKkFhLbifXyMzG1VKunJ1pgKq3gA23vsiaTBM1qupwM7DPUz2F32J86cMei",
  "key7": "4LgLd9E7L7kQrKZrGUci1VsJkKtXDze3F2nniLHj41kojLQUQJxNVChVW15zwyDVXcGFupDNrf54ohEoyBAjd2Hw",
  "key8": "Dzkwjtgd1Rt8VgUQtWsAcMq5zBpEv6ia33CVxVwTJp6kiV2uY7VZkrfQt9Uqaz9JnJeTHNZauP1Ym8ezpXNRZfJ",
  "key9": "7dgdikBwK3SwQUMunLPwJKJrzpYhWXMHviHjUHWwfELzWLLiQQHrWTyHppADduFWL3LS1bmmwaEFpW4srSRXsrN",
  "key10": "5Ghs6YAHsXBLG5UoF53cT3Ry94CngMAwbL4SsFFB4Jg1WBjiF1jq9sEtukG39xm1GvXMmvJ81Z4nvofLdMMtDMAV",
  "key11": "5ZsuLiMEefDnrztS3sUbcwd2UCCEHpALwf3VhdnrQ15uyPawCL8Kgk79R1DCHrDX4H9NMoi6BqeF4sHPd9E7Dhey",
  "key12": "4Xk4MMd527DmssQscWhV8BVWpB11Jc9RPyfeU5ghLS9ZhR6ue49Y4wqFqYrL61XatRVAyro1FuaRvfzTKidFJnfs",
  "key13": "25bZFd4fEEVMhysYD5UYz1Ms1PYDu1gootiZ8EZEhjR59bgacvPxKzLhn7Yj8XJVeAcTzi4JS1sNR81iQQqZHQb4",
  "key14": "5Lsuo9wVcrYA4bdtRgQKcgYCyKT88Kji7jBsPusnh3BBuGkzWcJsVzeXxBXyEwn7stWUFwpL1WzSNT2NMh1MaGuf",
  "key15": "gUFfHKjJbcCk2AxGwqtMzMDHgN7DkrfJrWvSP37tu4jkZRa5ei7fQ3qfGm42UR1HWXabQ12yh8uisKhKcd73ZGL",
  "key16": "4ksY4hGFf2G2retHxtyJWeXkA3Xim1sCXYjJ4gvoPnwhgBCzBA4YdrLVvLfr4kX4d8mMeHUBBB2re9mipwJdeGKs",
  "key17": "39sFGr5y5r13goqav4ytnast87eBhhZxshSNXhCdePQSt2HugM9HSXuqy9jCEtZbB3UAYN6U6ekda6pTs3pTD5k3",
  "key18": "3ewBLztW7QboHovL8i6Uyiad7ia6dkyfmmbgsGQAGT6VdjcUcSP1JYMf4DnnyuSCpt4MKWzWLEv6pSLBjYoHxDM2",
  "key19": "dysSZVn1m6UJY2g88rfe59GtWkXae7vZDbDPcnK2yztyU1htKhDyUvsHZwTSw2f3Y7YHk8FsGzaeVcMZGkizNei",
  "key20": "4SkNjTPr3P7FXwASFPCSqk77m33hbb4wjra3YnuUnAiHwK7LqNtPkpNkr3utCqm6T5wvptPqSRMjnNXvBrM29DtW",
  "key21": "6z561oFpr3u6fkgbTpBg5TjCbsMsGs1RCyY4zExvPvz8grrFAR7yKmVZJvshWtkyfgzAkycXgqva2SkKqEeS9o6",
  "key22": "2kvvHPNPaU8XgZiQic37xi9hWwxNEabjwf4pySLd57SGDUUZSn2M2AYFn25TCGVycWHmAgFGMVGcdTG58wpgwyNX",
  "key23": "3SmTq72hjEd6jxwFw6aMqn1XtprGVitnYuKYbySAu4JvdoKvTEcYgw6LVwgpnmP3RVMnyG11BxRY2WSWBtA9wQx4",
  "key24": "3dU93tm7NHESKrxaW1gideoLDgGZyPmwsSukfYCJEg5CrbsXLY5jgeZsJifhNRbW4h5Q3ZkTSLGNEDwNkv8dqbRv",
  "key25": "62SadTgcze3kGTRzybxNZ1toY6Db13VbxmssD9q3nzQgRzVeQ63AMHvZaHzHdCWYrcvuBeQdTyiFC1ngoDQKTwCX",
  "key26": "PaC2LcRM44tfz5SUsYNe1f9z6xLNbwNWtgJG5FJvg1xY6mYwwHaTt2Lis2V3HoL8rDG5KATYf5HNcJwMurJ3SWf",
  "key27": "iHVcKDuMJB2sCYmNGDMkBno1rn6VE7errMWfukbA4WcohgvQjfsuBFsweuDwtCgiYvbTa6yW4HrG9e35FftpEsf",
  "key28": "3f3gd5ogc6KbhJEjUYQnK8WFNZ7tAb5QHdu2X77oUy4LPpFF9jVMyPFWfcZzwTfb5w4pHdpmgBRstie3nEsgyeY4",
  "key29": "4n53a24inuLUUuxaUJPMrfofRApx2vMLMuuV6AbPFPxgnd1xUimxHTFuqr7ZWmPx4Ni6B1QZAHSjEqsrAnPAnykH",
  "key30": "eiWKrHrDYThZzMugySLFNRog6aPq1QaE9dcKVC2824M2SybyyPqwQ9FdrwhGdswwBhDrdutu1YDXPPFHxANJMYg"
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
