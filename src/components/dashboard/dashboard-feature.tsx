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
    "5PGxuqfTtcF9c6Zkbt72ABBFjvapUkrJkZgTEtKDnoXvtiPsqeBpvjSwHcFZ4YXs3y2RShPfJS1ay44m2aCW5yun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24irBns4YfmWv7VXxUH6oVeMHyjs9piMAw2HyAREMJGfu3cFTFj6dvPfAu7gqKwiNNK3pNspcMynuBTDR2AjLexN",
  "key1": "4YkRbsCaUwLFnxJ7b6qkXvDnwerqTbSh1BwNWexNvWZbckkcdvYVypAvG6yms5Xed1B9zWKAJEvyJ4a8dDw8zZ93",
  "key2": "56MRzwG7B9EKYyaLHaoXeL141C5xAYbYktr6gFd2R7DSGXonHR4TQTv3Q16ZSxNdwDwmhwAabGsHjVCtgzmdriZr",
  "key3": "5ofKE3brShmH6QMmL357dKKBwwMDus37tbzK83Mxm1G9wCpJVAbZsu5b3GhgqzMb2zWtHp1A78ZHDpKkDq5Szpnd",
  "key4": "4tgZS9cGSQbtS1mdm8pRgdcqjm8V8c2jRW5Ukq3fnU5K65r3mijR4v8e3chNqMEVnx7wtsdYsiNiFV7FMuN6Jycw",
  "key5": "5LUVmwjKbuKeQgk1NxAnHi5fM2QXASWbUPMKN8eL5Mr4gJPK6JRSdFqBVRJCGaKgHr38pRuRy2ePvbHFcm6J5Ygz",
  "key6": "627uyp5DXUKXWwjsg1Tqa7MeB1enFNNRSWX4kXz6nwD6o6VPxP3ypaYKwbyHoMYxzxyiS8AkV1cU5au8A2MJ4ZAx",
  "key7": "F9uJZ6V2LsbTFjLn45UE8oddtco1f8CRTUtL9wcmSRvNP96RfagV1DFAoErdatGvheZJxyRZ8FQmdHzXPzsR38Y",
  "key8": "3LQHdkKt3mPwGQSyoP3pPeJ4AGtFQKPq1QVNTadeUYf3CXFDhCKCL7GuydKX7q9PvrMTNYUQf9qN33zcUbYcj36r",
  "key9": "JC2uuZx5mKzbcDy99BcUzUkUUhSsbCEVtve3sywkfQJ7LMLJ6uU8Z9pUxXfKscodo3GX2smcwsoY9ChyY54FYm8",
  "key10": "5TnvMbHCDwK9w94HdanJpsdq3VBpyd9GQxVRMKHQvSiYxP9g82PhnnEt1wBxRpcTZ2QDiy4RQ72VUFe8Cqa1HHbe",
  "key11": "w2zoaFfXARJ1Zn8s5jDSEBcmGZpboaynD2yk4cpPQyy5g5kk8V48yBUjcQFDiDvFAPvsxqkmWp42X5LfhBR6gER",
  "key12": "5HaEBtRUfRArXzoPi5J1bjpMqFLYpSWK11VMSjaqAa3Y8kQt73bcqyHALcLyQP6cExabQnTeLbVEx8A5jJKJXuLx",
  "key13": "29iJRkyoi9Qk9h9LLSk2Kje8gJwcwSrSuxx5hEJP6MScVXiv669b1SWFy3nA5XCY5sW2zS4T2SDYmXh42hQuMuWQ",
  "key14": "FvGhBiA992xsf1rRAmyhMiF51vf6B2BkeBABqFSGbBvkhPv7AGrMSZTwAA8x4fmcp8fR8yypEYUL6vSBHm88qq6",
  "key15": "5EpZAZkUvNHkt6ZGWgSFdgYNwrHBum7Tom9GNAo5GgcomscKnBL8KWNaDtWfeVmA8NgkgewtE8QrXVPPmBtH16QQ",
  "key16": "2AP1vZqcCKgDy1veuAEuCuFX6GMyjLP2qtqjzMZxX4h8jd1f8pbMHJ1w2t3mjgA3h5Mgte2XQsp3NM61AmCcTers",
  "key17": "A7x8T7huVPRNGtLatNU5d25RgvxFnbadwoTFVqKuuxuNypNoDJoqYdPdgEdHXBLHnaRsTvnUeEEtjx3twet8jFx",
  "key18": "489WuZz3UK3fsbwaxuQFb1y7PwssZpaAXSurJXqhaKiVJsknEN3BvJqthoCXc7QnfFWDVPKChF9yJJJxHK2pvVMR",
  "key19": "2e1uG1aFxay49fuCaunT3LuaGr5UxJ3JfnQpQDHzsWHsgf7wMK7tZ8sGgnJKtbpiaoXctLPG2r6wSEJzyQKVDzw9",
  "key20": "5fxK6iN4VJFtcdhiA8Wgci5bAqNFBAQnhMGZe1RhHLLFc2KTCnoJgqBYQyqWoYSJh7EGHxfZw4s3ZBf2TqfXdTBx",
  "key21": "38ZJBonA7vbgRE9HwNyYorWQi66Z2X1msUoBeuQi4EPcKCzc5DocPT8fHr5ZuuzZxMMXbEiUDFUWmysneJZUErdr",
  "key22": "3EdYrpi44ZjA9H2ERWgbh7S4Pd7JoASKYTsjUoQcRE3wwVDFQmUQBsbuyEk6ryiDyi5mXySinbiYay8TtzXejNXP",
  "key23": "64qhTHUP6Xhu1jicNfSBQa3zbfqLYYkU1tYtJmdbJmPrks1tDVoMyeMmEL22iPg2mHhSPyb2vYxZuZ8qETys6mq2",
  "key24": "41sEMvZMStbW1pfLiuC7PgN1so6oLTHAmDtsQ1XNhBXHAPstTpZNedaXTE3gVRBvQqmfJGavrBYCUYaLS4ZAsq1y",
  "key25": "3Asb2wJvn6t6BDTBKsKzjRuhUBy5HfZPLUUhodqiRMV1LrYpcvSEnX7ghqm5bFvgbDRR9StYsU3CbXF5bqY3v9wn",
  "key26": "V37GDSw6mhg3wMHT8Jvomf6sskBsGdD8E24GfURbumRVWfS4VzvmLRTTHTiqVoFi5TKwamSr72pDj8B7UyFYe3u",
  "key27": "Pj9oT2U5kw74NABPnt6KGXsDUkNEuMev9Gmzjp1BEurtrchp1KMcwCoktXz88XYBnxS1SHBuVrSvMfwtQAEPVYa",
  "key28": "5H65rywyiBEvZ61ERcVNZL7RD6rWppSbCw1nKv67tLdP86no5ZN1jUaHAD5EiYmAxegNayAmL1eDPW9XEd8f5cWA",
  "key29": "38bfxcv14F3WJaTjTbKamvz9Krhyq3Ez5Z1tVbSTBDn6iDNLPzRkKK9ARF1F5ryRkMYXoEuSZJUtQrnMLEtpXCDW",
  "key30": "27bhP8BhCvZXFZHE2qJCrL7c6wNfpwVCaHSxQz1BbjsN3xhQWmNrRP4HPRNfid5u79zB3Z1Y3qRm7LgJKgc4kJJV",
  "key31": "3gYHV5jSQ5rxkL9kH43oirTh8wBRfGJ8m8m7v4BNrnC1vGNuVpKEyYtnJxWNkkzeXBpCr3tpASFzeSiy9AjNuiFS",
  "key32": "2CtQD9Swk7HR6NYddq4k3KiDTmNbmufG2SVknDvvFvcMgLLoYUAjFYAtuzMrQytGwMewgJpfziVGngBW1CtaYQe7",
  "key33": "5UGLbKDwFRvYn6RyEgewWqKAAZ5YJBXzqTiZmAMsiaPixLoDkeDftXm5GNWndKrGFTQ3Am7VjtvmgPeDEHaepSFi",
  "key34": "5zfnPwHJHYmzudoF8yT7vDSDQ25eV68yAVyFD9ZNHxt2Hf6PBCA7p2vvW4Ksi8i41ob3Ud8u4UoYQL8PwvX1a2RX",
  "key35": "f6mJ9KRq1G8a2GShEb88WArogwevGU46sAQ53jEvYgVKgbWc7m65nhpkF6ef9a3oxLoQe9Xs9ZY9BHDacQ2nrpa",
  "key36": "2MxNiyEHkq3seXQieQFQt8QRJ2Kb5roDj8CjNr1ioNV89bywDnKvMhMu5E4bhF8oNBZv6bAaPW1ZeBfNaNCr8RmL",
  "key37": "4ZpALEsXfiGrvGch7meC8xGQTBPQrGnC7Ap1pAWvfJbg5tD7k99CoyrZ68dB1uFM8GpyaExmuyvBoaKdsNHCuRWJ",
  "key38": "5keAkqsenSX3jyadwUtn23CjznC8NWWjwxvXPE5Nk3MTB78aNFq1epodoVCqAjWbC6c44iDYJBqosGE8WdJd1QmK",
  "key39": "2h2fv1uh77qAyXwmawZKyPca5duYG1E1FCS8Up5AE1e7yhoCnktmQ2QPQot5j7vhiXMDiC4YTP1dqsRDFbaXLRXZ",
  "key40": "5ueeZPbRemCRMqHE2rsYdGkfm5BbsfdaVSLtFTXaRuP7wHuenxmp5yBo3LM38QHbZqfPV4iwmsV6SsWUXNg1ujqM"
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
