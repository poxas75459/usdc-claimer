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
    "5PL8zxy9nhjmb2FSx7yUDpaKSRHmW2HumCvg7cSXzHcLXv2nuGkrjo13FF3hhpHPfuf9QeftHN9deiC56uhyGqwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yDWWW8aXA75N4BewZRZB2yJZ1zPSW7vcbYkJsEtxgYPdsaPLW4chJNAKFK7JNh8Groksgfgwrx7yqGbEn3A4G4c",
  "key1": "5dnG8mfZeTZFaBBUxsQfrmx5S6vLnB2orRcckgEy5ofcgj8jMxvRA9QMxUF5dZzihUmDp18sryWz2K8VDHxyHPNX",
  "key2": "2jBNxCkFXrQipZtZA4ncb96iTSdFQusaRfTzG81Ha3M3g2fTPd4zT91EtiesoEMHQBxu2DnAe379hqgWScBRtxaP",
  "key3": "2NQeRxcFy5i1CRWzWa3fe7Wvsh4wmwmEiC1ijFCKhXE6RJpHBCcMMpPoceMfdUK3nWbJhvH9Bws16D5SvCQR1Y6",
  "key4": "3DjbyxvBQtwdmFEazFbCT6Hg9PbJtFR6RFxJx1ymXB5tVL9n2bghMNb6yVmEagdFQb529JzGDnXvMVaS3eJyGyx3",
  "key5": "5HJe2fQBqr8Fi3696eAHBETe4rRNQYfgYfm2taYYVbBM3MmeqaDGngkqG5NMPmtfTjxBK6Bx8f23SGZn1GDbTLtU",
  "key6": "5ryMeWhwAL7fnsYF2fyJBiiWWdfZHxPi6wZXHhLLuG3gXryyC6QuaDVyAWhnMeHMU9KMS9zKt99yfx8aEyNeNznc",
  "key7": "5SUUonDKYUoiRvMz9FacUyvNsiY74GQ3CVcXkjmA52Z6utrnCo7Kkz2xpBm7aLyjAAirD9gDHEYjE1tof76JBDkf",
  "key8": "yvjuB5gDkxxKY3hYsreoVyMgfY4FKmMCzaYewhwNqqFXWueLeU21yHnPpAxcVhdmhykGdBYLdnxDhTN3MtEpAoy",
  "key9": "DyHVC8gFuR2HspAmo6PXkrAa4GiTzD579rfXTxKxNkzY5KZrJ6GFfqVkg4KXdUiJ8qCPGoJ6jBEjxbLsPQ13zXW",
  "key10": "3HvCkJmtxdtAAz38zjbPEys296B3XyhMvC9BaSNfssYCJ7S3FhhTCLEuyhqSrU9sLYtnKz6QmdtQACoZe1BtNTZQ",
  "key11": "4hkt81CACTerv6F62A2gsmpAhAuyqGsB6JMi1wracR3KwDv9q5K1Q24aaT9GjkfQvyD6Dk91hsxW8Du89fHwaGjJ",
  "key12": "2PmxhA36VEFJRXrC6t7hjJEgEb5opMXoaHRxb24QSHaFrwd4iJc6we1poQZEoYBDYjnwys9xFYE7jQANEfsC3CoW",
  "key13": "2sHzBjWUVDmCQxounxySpR2zSgK5Hb8HJZDBQGMN5Non5Hb9RGpcKPiSXuEjYTZ6SWXDqRoyCKxH1fiAVkM5vFiA",
  "key14": "5BPJM1LtRVxKrgv35PrNRD9Fkbi3BFBmPEiY17EgAG4x5ycYwwFdRSm5hNxviUbGmKVCuEPgS2vxmwcXtmt12KCz",
  "key15": "2FLgYuJA8xmdcQ5wtKEYqv1b4pGAguMoSd58aGDK9n9eRvPgPFjm3MPeEgpdmfqBfXyXeyQwLcferh77FrqLCVBi",
  "key16": "2FFxEvnqboiEqrkgtZbjP1qaeCLT5RrTiaPAV24FQt6a6YZavt1CUjWXvvG8C1JCXT5dvYPiuEUCMo9MWzpwnzy9",
  "key17": "22mdhoqVErjvER8H9pnHdj8MjL9PMCgWtHMhTsFT5TRFsV9mWke7Yi6ZSDdnxgU2k4ZJmzTHa5y1m5V57UrW1UVG",
  "key18": "5YvUMVcMPiJCNMdRUPCHaKTK7NfvdikkygDeuRDz8UTgrH3LrLhYWj9LrEi1rL4zVF4nbZ9vz4zzJawaMuRNBk2N",
  "key19": "3JLfku8kfRhmMh5Cehpn4C8DExe8DwXbegX4kJ2JrUaxs1Zb1ZTcpwFKCmehXSSPz4ih1jYASHLM6wZHBPezcZGK",
  "key20": "6VBWVYGP8KQeE8NTD5QH67tBHr4JPsDvUNf8NeXJe6TtjQUp6jb2sqx8BhSiTkkungNvNRaR3dWz9UFMjDQxViA",
  "key21": "2WxPCULRysPYSueqMXpA3LTfPt72BU95hUW7zEQuTdm7JbekLgBiTh6hquRvExiaE37H62zpmiQJxg52YeF8EPGx",
  "key22": "v83GJqdv2QpEnbAtnJrTHZQgCfpidGBSmLiq5hDV2nMjr3mTfwHwGeVmRdhdHS2y7dkNr6ZmouVJCno5NK3FNPH",
  "key23": "3Y8v1YfkrDagxAYC5fsGGU44GucpmZztjhZVN3uY91eTyg5fPfz8dRLRT5EFHdJhZ6GRyzqQko9rZXv23sVSr7zq",
  "key24": "2zH2F5XHS3Dj9WychimtPNG1JFSz6JvLV8cmdpheDhXJ6WiYYD7MRXWXYtuVQp2XCEv9BeY8xjDeBbji9QrAGdXD",
  "key25": "562kXfj4h6r9vGu6B3RcVQpff92moZNs2g5T9vvSiEgjqXXSrn6j4WRB7DpAJXHaCHtcJPPgYhTqCQB85D9bGaxf",
  "key26": "5D28tmhGUh7TeRNtL2CXUMdwWBnPiKRN4eAF1woSoVmyG2Y724tbmhMLLG3SubVf8hayzLHnRPpRBF2GYxS9PHzs",
  "key27": "2AqPxKmuW8ke44rkqwqoZRVKDZbYMNCrGH4ipwhECxtGaKGePC9bmaqnVsq1vfYrakME1McmW2dMNjivWXq3CuQz",
  "key28": "353xNFxFRJZ4tfH2m1BQasdh1L6RqPPL3TDDo8w9JnrqwfRw6Q4Zeo8ZpgnGJxFj8AiJoktgoqniHRXnpL2G8qHS",
  "key29": "4eSyRQvCATDgCqwnLXzNU5k9w5rUzT9B4UEympe2ALoF2AtBnsWEFxR8cwiCRgAkZVt5fQSK4XyWPThupKCtff5K",
  "key30": "YYSshxEqeH4n8qBzGsCQGdmKinscXPrfq8WtVfywxXb3p6MBV93HAj2PU5MxyVDzX2fMetWbyHrXXJWivuSDkJW",
  "key31": "4dyM2xAGiaHRrty1ff5AczfzVJfxEeARP4rD3YtRLFY3yYP7SUXE9cqxpM1ARPViVY7cA8JU5GVtF5Qg5N1kGGfW",
  "key32": "48AnSkaUcdo7Z52oYaoeH4Ltv5X94qz4944gsZZYBYXjBg7wutbiYHags98Yzsn8TYtp4j8FFMr56JkFGfr4JPwy",
  "key33": "2bd86V7nwzdZjM8kSYjRpYAKiYJYQ3EVzbe9UDr24RSiKoQ29pi7MZQdnQUPrH9kSabCRPKA9SvaACm6qL3ZrVBQ",
  "key34": "2M21AaSPKNpPDHmdwuYCPCoZvYeZkbweBaHBKGJSD5rWcbVz313TmtX5ViryLVYCSvKKQPeCrpyer4Ko9d93J3DN",
  "key35": "t9EC6BwQQ5HGa4eogCYNwdke3eWN3KTm2t4hx4AG8xdt7jo9qopFQmfix4GgRwrs6PAcXjmYvERq8DR8yL4RqPU",
  "key36": "5CzBXANDg4qP47gKXmG3qordFfXs39deTZaA3YNfdPaFASdgPoVGpDfE58GXzGxjhUMjVX2GdSjKsx9H4J4K7FLj",
  "key37": "vFPVoU9KzkhZpEXgqvNGQXUeEtyzGqnZjBxYjxo6WosBp2ERrjcLRQa2cgNAQweRmN1gFMEsuctrJ4YEdkvA69F",
  "key38": "wuK1pAKmGiWuMNS3oQqjE6d5VXncJZe8dkbVmYzwaZgUdbEDFUMYUUihAdQk6gkGF2XiMoByUDDPvN1vtkYZMYk",
  "key39": "wMTk8uCsZJYKFK1TCMggCkQyaFPxJdiuHhJ23NSevgMijXu4UFEosLNggPdSy9Vu8b4WavRRB5Y8wgXDFTJzMUc",
  "key40": "BzhRMwMj4ifR2sMNXewKGoe55hKDaza9jq2uXjwCrgFyyeBxTDnhGQVqYcT2EPbvEbywxDzDQzXWkfXiZM1Rjp6",
  "key41": "4XtUGamprDXDMqfq5rfdEUhGpzaD6YGDYj7SezxaaGkpwjRYMnEKBjQ44NocUk8KxptHpuKrKgR6BXVcCL3nPj6V",
  "key42": "4kSv7HWALKBa8dQhyhZtW2bwK6Q6c2gAXHBQjm1vytFnK7piCpo4FJudb1BydVXS6WgGw5doA7CAAs98sCoCPkKd",
  "key43": "374xUW3MPZeS3wxYeink8WrQkNJSMX4p9dkbdu66kRyqVFwZDYXFq6NHBfkSJQQt9TQ1AWWnLxDpSWT7WN3M7oh5",
  "key44": "4JyMStj5f6jxeChgMVVEWPchjptFP7BvFoAZ9A7uXmMQFEMLkZtKPsZzomuENwyyDfUkcdFp33sj8xfKhefqeLoU",
  "key45": "5ePMduW3PTN4CjeQ41vHdvnF9LjYrDMePxyM6VjnM7DzwwsCtK18kfcUBqomKqc2eHkm95PZryYvr2Bh6SctX5DA",
  "key46": "5haUKstWag2wCES5Jbh2uTx5Yay7ceJmEKezMMfZEn3ChktMm3f8Da6zJJunT79BGXxk1J7XdYZYG9zP3Gzhz1S2",
  "key47": "5kiiZrN6d9RjkSJyLmi6bgp3cEpvN7DF1Fgc4n9Tt2ySszFjygAaYerLgyHbrSkGP2JebCxoUJHPtm4pGpNikk7U",
  "key48": "RKYA2ZsMYAh9cC2Pv9tYpnWmUYZvY7etBRs93Mu1YBhHkLFdU9eBL9RG2Yox6vKXfKwoXFoY5fMGiVDmmkGVqMS",
  "key49": "4CakT2Y2ARhGTjS9bHyCZZkG1i5yn5MiJWW5LyVsW9fGb1fKvWFZAuixam3jiS7vFir5eEbxKvGY55qyT8j6sMGu"
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
