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
    "4SGJAV9Y8XQkR1qu43V1rTb1mH2Mw1ppNuByv1JRkDLAa5R5WYZGzHRY7Jx7PTXBRB2padc11SCAELQFdSYAZva4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vvfFq33mnwXyE44cKLrodbiJJJb2LFFJ42dpLcY5QT6rXMznDbggXq5FjWzm6iJUwBeQQ1m5m53pVffXm3DxuAU",
  "key1": "4TcupVGbBJoqwFTVtQef9U3EJxtQka8Fg4XmPUiELtnD1oPeZVT148qgeTHhCkhVW3ULnbkp68qKVxzw51soJP1u",
  "key2": "2zKcHF4DCxTJEZXAFSVZEDdT3X5gLuTZm6NeZg5rUV2VpceP2J7EhWwehsTBbsdYYNJRtsuwNkzeRhiMZLBTyuKt",
  "key3": "2g27oTH8u469EHSn9PqpvZgHT8smDA2yRiL1vFMh4rnz46iGRUKiDyhPp43RmF5NkXeAvgSZJNzKNcPZoAaXJK29",
  "key4": "3zmFbMmjRfAHU6qAZbrNfY99t8KipCcJkU7h9Rf3QnpkapzBo2YMezhkxhwqaa4NFjFGAZPmPC7VPAfBLEaqEYgG",
  "key5": "2iUrTbjGnx8TEWUaDq1FKHCfXWDUTB9kt75s3HfeSmqrbc6W8HQiKo5b6bBZxVi3wHVBxDVbMaZUNGXTcJ91hJEV",
  "key6": "4BvGPPostM4qBQdthq7Bz3SHw3AX8nnSkhWjQ73dkABtGaoTJeBmNaCLSCihJrsj6dPg2EzUWCCxdF9XSmVr6gBF",
  "key7": "fapJRfuzb9FNoSuqCV496csTs76xSPr9WafxaZbzPpkCGZEFtfEcgskqjMJ1aPmac2g8VHVpTpcE31WQGRFpeev",
  "key8": "4MzJFTsh9pJ8aQT3tGcyi4zAd7JsTLqoDqBRrzXZFYAd9cFCADVUqiEUPX9c6BCPs3wm21qvPWPbkA8BGczAdmeK",
  "key9": "2K8dmGXwYHyKTpYShwAq5d2a5r8Eejm2yoTptfturYtQhWpePi4LfHbqhZUfY2oVf2FJP5Feuxg8YrLAeMZMgj7M",
  "key10": "63BvpxijzvESmknDsKJvQV9L1PNEPP2wq127RMcmYVZPLon6SXQqQWUtPFVsV2s9z7Bh44dQjYEapSb8Gzr1hH9J",
  "key11": "2F9gmeALcZf6uPEwd5rjTCk3K93x68vnRkFwG7PwKHDE1XMBRMnWrNFHRvoQ2zkpzEkxN9UUgypRHGSjCCJg3qL2",
  "key12": "3JWr3pYGprUwas38hukNt4BcRhtpX4AcW7j5A2oumxtm625xVf6PxdfKbvTSUD9JK16UyGA28Li5MTrpBNVnpG54",
  "key13": "3Mtai2r3arh7vNtMDtVVx2dz8XqKZjZLfhuwKpTsCxwSQTMc3g3S9r61a79RLQBK75JR8J5PLaWJRCjaiaKa5wY9",
  "key14": "41AVKRKUwtws1vVYqNUA9aZmJUCGq22ukmv3zGovcayTksesyy6CgTciSs3tZGCUmnTJVyjyjQqNttWCFwHwM9Tu",
  "key15": "5WotAqGRNgPCeQBfE3e3uwFGk214AKzUU7ov5NNrJtFRF7KEKMo29ARuDdW5Kv8VysKw92HQaRasnH8Qpki1MT2V",
  "key16": "3AAHTpogQjRhwWSrv61L1eQbcVxrk198B2HN429k7eStNjvuFmypvuEmYSvK6iUmNJFFp3ouq6yEygkjgxw1zm65",
  "key17": "22BANjMxWFWspc47bvRhY7n9y7D5sbvs66AWvaE7QbRbgQ86aKBHHf6xwftYAF3BmCxWZC5zj6rzuHGxEfTPvmx1",
  "key18": "592zgsfP7T8vxGpATCqEU2p4K1dxtiETEoocvJTVMLA5ppUCmCZER2A1pYp8NP67hF3bsCDHMJCcKLpeseYVXML4",
  "key19": "yzUR646wRhXaiKXbs4xkTCcKLpS5fsi47kkC8uzKaEHjK1r3xHotExPgGiKadMLPrRs1prR5BekEScJoYUVKB2p",
  "key20": "4Bk2TymzWEpxYzGFPMJfqwQdZUHwoh3xoLU5Shn5dpFnmNNDqQ8KrsgdqChTpiLPbx9aSVN1WiQnfE5wGds7moUy",
  "key21": "3oF7o9fckvJrn4cF2b6JCFih48czaove3WNy3kuDoBWdBdxvieovC7JF2uNt3XtntJGPY7juGvTgqfUiMm6DrM5v",
  "key22": "kJvEBhxCBJti3kzPgZZSMiyPuVopEk22LnzU5hznMHsesN4HDMxWDewLnyhTGEAYQeUcgKG2DAU89iRnmPp7KkK",
  "key23": "2B1r4GU8rk6e8ciEnkt2bXBM1UrjJ7nouphJomc18QspDx8pYRbey4kq9nTyDXrzThDMJegt6ubVWQsf7mTMfy6j",
  "key24": "3ERdmQS6UFZTXj8scJsee9NFDhgM7s5J8dvNZvLLmGyubmExuD5VG4Z2Rt5GrCrnqH2nymKCMoeK5Jgxb7LdvsoS",
  "key25": "4iUpyPP3hZ1VZD5J9NaV5Sr2J5B3qZzbt9K2E2iqnDhhu4EyM4ThoANkNyMUoh4upJUqA2XJkPFVqBkxXTNSQsfs",
  "key26": "5vfiPyGGQF7rDN5gDaHSFLjzmCEnDthoenNdK6N6123BeKVLb2Qh9sLbzFbDXmvK9WTsGbh3j9v8udpxegNZi8Uo",
  "key27": "34BZSx8fh7LmLghgyrNdCEd3CvVx4g2M8HdAHERYpBCsEraLMpk94RVV9u6mkjvXGG9QRtNWjJY15mpr7c4tpRAa",
  "key28": "5EY4r7Ahdxd4xNtgHuhvbsvgzWEFCpcuf43xEMAbM6ghnwj7D8CLYD5MeGzsNBmphxDdk1QUpfAfr3V6bAa9fZ2A",
  "key29": "3S6rSvTxyJknwoZvPyKrKJYxVcr1PucvB9dxvSCS3QMPZdL1czJKAsXTkMJjbxqGwD82HWHAF7aCsSCMBazZa9ta",
  "key30": "62ebCc2W7G9ntf2pkCznGs7GBG3eVoJFndkAwQpZ5JxD8JRExS9yyFAsKCapJLTRKKQrQcSBkSiovLNnpMqZhuDy",
  "key31": "5kxj5uMSgndPbWLHZNAqrnZE2PMUZdTgBa2PHZwXB1UKTC518G8yzsLacbNcSPqoxVcngpPXSPsAhYzQ3DSS91WE",
  "key32": "qrkJsAjnArftuunSL2jhCpZBt5gzyVUkeD6traUiq5UfBQeUsmKwneTTvSeD3Rcc9Vj4SVqyZAUXAHDpbzq3jfm",
  "key33": "3xamT3nmtuXKoeUC2mq1vgaRtpvhYPNhMGMxEuPo35EZtLwEDXyKJkNESnWoWFAEkzJfX2XqZRBB9CEkcBotaegf",
  "key34": "z7i2zssjhyUhWWSLQed31D1SpD7Qs6C4nVtUzQAr5NMchDcFvFbV5oY7HsbEjtxTJoUy89MbJm3TUF64U8cxLUe",
  "key35": "2Cf3XUCzyEBwbYHVW1DYGyGTi42ZHx2MqHiBj6LDQ4Vanp1HSFRdPgCht3KsKdB2o1PaXytx9o9ZMZhWo6sf7Z8u",
  "key36": "3jrax2YgkD3zgSLWELmhn5m6yHmyt8sNKxexacXtdM4u399MDTMDegWsR7xJRF6UZYooseLG7A1RZRTUMNc3Vrsv",
  "key37": "49BvUti76PBEMWBzFsbAzTBx8YRvwL4P4JSuvxtJwF1WhWUQZRKzAGH1XQihkhxeA17EBtzpJZanesQoT9jiTPX7",
  "key38": "4HHZA6SDBn7sMKxUkRTZdVJ8rm2c36o6LtLbczAhUoGgjdcbPmmyzaaK2W7girYW2WSiCmKrFv2re8VGSXZnsgyH",
  "key39": "5TdwE4GmnRfSeNmUKnyZbNpFMSRD4vRWtDxX47q2WvLKwqMcSPArHFJnEjE2LuRwji2Srk5YYF8VXvw6mLZak6fz"
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
