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
    "2FatixQPWdM2Ts1itZPrPgd43jYonhzhuDgdQtmmVtDm8sfY12V79Q2uBGf76LqjG7opTJiVFBwNQnMR6UQFo7N8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tm4CuvCNQieCJeJcybpCsWSrunCzd3RVDoSZsN7kFEEzqRaQquboTAgsNWqrvPyb427QV1xifVDc16PuZnViu3m",
  "key1": "LewNTa4AgbQEhDQpWRsPB8QHiDbjebC2vC2vSvJqJkHceVZPusoGWyxHHeK9RQyY2bcXa19gKvzUiwoTwtHyx6m",
  "key2": "3MmhPufQq5pnucj9AU7AEJ6KEkSxvbeckaVF6Uszytv55VVvsfWrfWNnyxWXsg4bf3zzKeFwTPYHiqCRqDc7PBS7",
  "key3": "4V1eXcNmaS6HXnCFDncwyT2J2RmUU2sctwrMpLThJcnF2UweG5jp4TrHFzVjJJNoxDcVXrMftiV9GhkjDBGMYacv",
  "key4": "4ytg36X9dYKFq7bxvDi7QwDRkLRVgS9yqY137X84ne7LQPSGEbueeW3ffpYJ8QZZUnxzVEiCjLw74APTSeWY5orV",
  "key5": "3Tx3aAwaF6pS5ejzj886LehXdVJ2RQADikCTnS835XMyHG46N3bXGuCYaEgNwg8wMj4Hpqd7iULWMPSNjoSNZFhG",
  "key6": "52b1awhXHD7yZYgt8wJNZ94iipnMt8jnEcYCYeKfjGBRMg6zoWD8fGUnwgJTSkwfpKd5GifAqPbAU2WCsaALwUe2",
  "key7": "236UYHxUqrQuGUfxQYaVz6h173eXt1j48sWGS9a5YPrK2K6sAgc8DK9BkdTx5tFVJAvLzB8uqsmewrJ7LBXWPwBy",
  "key8": "XiMiCiCxzua2DkhHF9mFNnwH8JpKLfyDtKR3aSQyUtv1joke78e2U8qNjsNHUXQ88fUhvypQSEihVHNkft6R53T",
  "key9": "2ea8SPpqUwhGTFeaHSxpXMrRY3m3qddR7Yh6oEwa3phCYxfmDJQ3Jiu7AbPqX8r1nUdjF1PKv31y6Rz4jtbWRtf5",
  "key10": "3MCTB5BzFHhae1pBYFTrLAjyGuwLVWZpDhctGc5rmUQM97WVphnyoNUbJDLp6AHUtBEhiSTzTmshy7AvavP3Jrq",
  "key11": "37uo6qRNuUPjTW7iCj1TyuDzDr9RJwJLYM6qzPQ1ttLyhLgqRPiD5hocfkpkds3pVYckPGYdG8qUBg4Wjn4ShwYB",
  "key12": "575vs9NUN2W1v2bSPETMqTjgLxtkkXMhhvCLBvFsRMZMrrReQoBtmy8A1BW8fyKuktar2AUS7V2WpPygfgqtkbiB",
  "key13": "2U7Zwo2aDb8Gve7kZD1sL25QiBTZVHf9KnSwXHaVgqe1Lxy1FkKFEn1dTv6RWWFWkoYv9cEpGZrXqKsurCt3YfP4",
  "key14": "23k8nvfKcxFVScCjzCBVQ67tEkbJCY2MCtcB19d6TB9N3p3EVwUA2wTpEt7tfhg6Pvgq3JWtyMUzsx1NbLBmaim3",
  "key15": "25MLZ56UL7kyrU2R2BmVhRR8MvgFNXFzXmAdQDEG2iEGvajyoHFZjJ3oXkCAFi5EE8wzcdPLwQFKJStb43S7gR1b",
  "key16": "3NDLgBusEa7x1JrwyBexGk8x6J4LJ4m8CP7z485qdi1XLoERJqNUXZkSuJepsvay3UaiQt1uS2KTuQ5vfPAMHLnq",
  "key17": "5v5auofRukx1MixQyVmQqFRJMU271hghoAvUhdVmyB9k45KcK3KwJk2K4XP2yAxpQL5fNt7wEWvGGyF8CxpYDnkM",
  "key18": "4kbuVQDHPWsEtCii8WFEWTgVhXsHzrJ6DPei7wVTUXF3UVC3LZ3ggpCw9TAoGPxpuJVsqPMuECmG22mofCPfjvRo",
  "key19": "38w8qYhBFkcR2EmcDFveECHP7mvNJHYJ4LMveGT6jLAJR4dmEDwVkkVws1HdPuFXjA5a99zXC49zTvDGd6vrKRW",
  "key20": "unPQDpNxeXvBNvLiSbcScxESSjs9UP2ZkTw9xa2CfN6DdapsjvNysNfYYWrcZjSd1h899BroAYB2HxpA3FEkeTF",
  "key21": "5525jDC6TzFKEn5yk8QxnG289PEE4NkP93FsPtQWfPDKuw4SyW7hPSDcwQdwH2SBPbBb2K6xpD5UVq84zVVnMiPw",
  "key22": "2epMy8BDLwNmSYbN9cvbbQJuXfp84ZUaq8vUkUapsRTDhrrZkG2VdUEvWzWPA4a9rwT2ZbacVFB6njECCE47A4pS",
  "key23": "37dEVekzXz17m1u1WmcJLP86ttozp4qWz3r2LFvBmDnn711XcFdQdT54pZ9fcshScExu8nWzUY8TkZRfsdAUodWf",
  "key24": "WWzbsVoMMj2NZF4tbktpoMNDLYBmtw456Ux582GmDwMeAfBYp9JgYaWDnQrHmBrhkUsjCPmfik2s9RJcLVyJTy8",
  "key25": "469UJJZM1SDFxa8hUKMF2mMhtCSxfKDR4uR8PDcV2B5yhAiUVQ4fAJyRBGw5QSxNkvDg4e72TyREbSAQ56VhcMrr",
  "key26": "5P1gJXeHMYNSeirN1QxLGH2aPdmUQbjTEEn4vY35pCzB7v1MBbUzs49xcYyQpjKjKMQWHRckgVpWsxTT1U3Y4MGo",
  "key27": "5HWJbh959Yeu88UyjAYzL9JErmKbVHKK9gdD9JFQY4NbFPfETVCyuFAQCi7MnGqHuBMZcrfteRFtQRtfUhyGVQ4H",
  "key28": "44uLVe9rEPS6FYKKTUjHUmEFqyG9DFeWLXyx6w7JcK84mXtUgG3LkVKDYc1WWfM21wmFFBWHLcWzTFzRpn44n35p",
  "key29": "4nMqcquLCSAnKW9rcRjqz2NjKhVvTVPZ6pCghNQXK1JWU4Ssdv7G9B2H24XkxwRfVCvhrjDeiYoYUuVDdqPVQCt9",
  "key30": "58AMSfrPqjvVwLPcc5b6aCebELDuhv6zNMsJNDmMiGQurq8HDZNzYDDqChGiHyyzKGhoTyBPDXVqJ2aixScG4RuT",
  "key31": "3WqkD5Q89XEtZ2ynT1K7ZKKrKpKqiwztuucooMTK7Bdcu4EmCgbPGzkWWbw8qcr8G5QpmEBnZvnP8sqtqpVLiYqr",
  "key32": "5fVfspx8w5sr9ph6dwiu5rULeTidoZXf5gmSvrHTAFbwGWfzb6SusCKKgwhuDVo5E3ETPv8drowpKwy9CRWASRGZ",
  "key33": "GciQ4YfisSaH7u1LC8S1x8g6NDcafKdUpcsi7QF8dNLWvkSNcqCoZmqLqa7LmVSFysnKRMNaJbKu9ZaqvbTXJmX",
  "key34": "4X2ESDpu5FnrC55usz9TEvqSWamjdQmwLjg3X8YnCBNXnfz5S78PCxEJKcXhvmq8B9Qc5ZCemQuRmpqu3hn5SC1a",
  "key35": "32GsxZCUt98BoLDGSBuPLxRcSm9eNkf6RVFWwg9GaW3qdoUZJBUq9kbryCj2WjKmrk5nE2xgbxCiqMdUJTUJUquU",
  "key36": "2nEoS8XrnvrqkES4pWuKdm6rveR61Qccoe2B3su8CUMnt5yLFVdhaQoFxGUiuyuTvhZCHQuuxk39bXX1BgXNS32b",
  "key37": "25d6MPRmhdP4HNJD6u5XCeY2dXqXWe61eHbUoEQzPvPSiYTtcGhCwLoWH2YgS2nFzU72rxhJwF2ZUvVmM8dwaHMA",
  "key38": "39gcYARWXKnxDX85K63xapDP6udaAgsKcE1ReBJNDxC9P9Wn7Tdib1rDhYSs9qyzduVeGNW3TB2tU37mLZfaNsRf",
  "key39": "4zJQAwNAMk8eJKruLZrHZfSFjeEMdZWtgByU3pPTCYPNVeEgNZY49YzRJZPmWFj2mznGsXidxKdkCbuaRs9nW8hA",
  "key40": "AivNTiMdM4CUk9ukXu945KRGQaMr4BiPp9hXGys9m3byiGuSfk1U8mdmMt64xav66sB7JNBzJJAHJBpoVZQXpeb",
  "key41": "5LbMczedNFNahrXzBighrpjz4R4FGT5kH4exT3kjiNVnsgfn6936iSpoWWeVhKGjVYYfdUEPkqErAsJ4TEuBpLLG",
  "key42": "39txYAx6nSEBW7x14WfPjP4Sqg3xAUV3TQK3x1ZgjV3nN8bmLQN8s6Knh8JjVt79cZgM4cFmNspJ7PZmxX7mHKbr",
  "key43": "36qcr3bjbsHtcpW9WBEuBpKnddJvKuoFAa3YatPmhwaTA7reiCwZJLc4qaiEQm6pdHiCPDHwFgSnJYpHnjqEctYU",
  "key44": "D9D5EBdqhZQFGaLDDeVPChkKHDcFo9fMsjs1TA6scAwSM5qyXQu9UgDK7Vg9ZfXAjv26XciFKetjMtD2StTRkY5",
  "key45": "5BDb44A6gSFWDiWVuKgirWQpNswzGynqXQLxd3YtwjZ3H88SCJNCb57f8hCzLzQ7VQgump7u9kbfVmdd33HbbPUe"
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
