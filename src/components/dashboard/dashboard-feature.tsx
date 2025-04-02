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
    "45sScXnovj21LUs8qNcsGUMa5UYUWfubwWZBjU2KQRaFRb2LeWzRPXfWxXRJmhP148NeJ6ck2xQYg2YE5kfNWM5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LMJvqxqebNrn4qZt6BDCgwuMBFMhfnfWF8Gcec9LB4vkTJAYeWSRpPVkX6pB6vx7MAvTNX9jCWJQvVpy6BGvywB",
  "key1": "3dmC5GtKTBrDV2LUjiMk59qV7Lbr8xtNtiGTuXK1QD247yPySuAjb7SvKSZP6HfHJDobdHEZM9p5RfWkXs5p3VG9",
  "key2": "2T858hth87EPUZnNRfJjFNbCTLKxqqD8iEYhMUtE2m7G8vzCnfJf2XiGvCr2WJjUZuVuP5o5PmWMRWy2U3M9d5mU",
  "key3": "25KE97bNcrPVb6h9ohrWQq3wxsesFS1DtBA4sabqRzeYBn9kfxCmK667beLzH3157kTM69LmBtsbgNzZPJCWKFCS",
  "key4": "2zyWFvoxCEzEFDR7f5CJ4QpGLf9Bc7Jnr8red8YXNUxnU7NMnyqBB4KJVEJSUc4r8mNv6Ks2rZXenGK1eWBptcTW",
  "key5": "RvrQHnu5iiyq6kudsiGFKmUHay3hU1eMQKk9De6q3CCRakBHSX1i6fMYqWLHUsBsBvbTr3W2WB9xQmCtWAdSkN7",
  "key6": "5qAW9p84tEmzGiWtHYA6jHiCEyMUQR9uNVLcWGxatG4fr4edKc2gYpwCd3hkdXyWJ41FEWWxk8dLTtQCE8jVv9fV",
  "key7": "249DVCQg8qq3ELKuWiqyGdMW2SCNqaKkwVstANV9uGwiBAR1gYMgpNDbjJ3FgV674zVpM1jziTpgQKeV15GsFxRx",
  "key8": "3njUXzqnmEzTUqtcHESZfqoWdxP3i9GLD6kq3qoTmdZuepPMasi3zxht9GeWxxb81ghy2fvknvmg7NdMMJqaZg9D",
  "key9": "5yqxtx7a27HL3t9Xpvu7wcoQ6FDAnWMtgpXeQTT5B1WngaFG8huGtx2MEjVpmEVxkRznzfiH9436PCQwotkHrCvG",
  "key10": "5XhqVVBXasLbG3Wx84VPJAQJaeWQEk9j2XKk6oN6AsRVaVkStEKLbCiAc9Y8uxqQRqSVD5WjVuRgnufFX8K4XzSe",
  "key11": "5u4QqFThsfxttX4MyjEjXGLq1izHpofahfTCY4R9xmTtchTAYz2YFz6cbwniSprs1HcBPVtRCezbDgW4FUxWMQL9",
  "key12": "2kdCBXLj5iBsTr4rqViFdGtp4Aeaxx8sTJJweqSo2BKzZ6Q3EW4pdaS5FMCXHE1Eq2sACbjLVEWCUe5w5hvLQZKc",
  "key13": "4xJgW2KA12nphZMxTwzGVxiwiySySYoXfYwedDUiMEcGAypMom5T3M2Ra1HZjmki44Xryy94jJrbyNj1eqKhDLJh",
  "key14": "53hTVr7jhhCjSJBVnza7hNmMA9HFQ6FRnSbJnae79SfNQ97v2T7jH4dSwbNw2wZi1KT6pvHooj9ZAjr75gjf9HPV",
  "key15": "5dQ1Nfry1VtCFfYeHW9v5ietFifSeyEDAGVibHk1Jh4Ma9umBjScB5q4v9izbwgwzdgrEz6vBv9HnsVwJJC4QtRw",
  "key16": "5Degvx8d4T3JwrHuL2yvWnGtFbSUQ6yrEkLUqcUeQoo2LWb6Pfhp2tB5amDNWxuSTqRgWmGXMmy9Prhcz4EvWeFg",
  "key17": "4YfWGbDdr2KTkW264ARn8Lckyfj2aYEnKCAskCmaxsvwaCEKhSMaUb66YzbWuLPuqamkSuCn6XFj3uY3CYEQV5gz",
  "key18": "4WzT61eJC5iqxNe21sUWVEDvagxNMoAAzWSVVAxuNW92EEXv3ue2sDJ6UXpnF94XfPJsNEcU7W8Gy3kSsEiWqAGh",
  "key19": "C2oAGk44UMvqLnfy9NK6rn8LeXKLDqVG8VhgdrZv2CqX2zWJkjknkCjc3uJEbXLt8XYTPxvxDfip24Hubq6wh3Z",
  "key20": "3MJ6GKpQytRv6JoqczFEr8XenewXHmgd91dpj49qUgjAktqZSsBFiuVZwmerjcAptrtUVR3Z1R7jBLEiF4ZehkcD",
  "key21": "2BHDMt3D5MivYMyhJPrZXSSvdBD9WDWBuUNm1EAoe6HqitfjE69kmkQqFNHvjX725Evmg11Dg1AtKStRxeD2QebB",
  "key22": "62wjKaG1BZvTNe69xDvjAUzyJBB1ragZ55PUMVvDKpsNygERL1qUVuStsbNyEzyMBN66SWsuvunRmQbBGVLF2B3h",
  "key23": "3RoVRe4oJL3mWB5D9LQwBEgCRh2gAsRfUEWqRxGz1DZ5f6YrBypqLeKqgxFNCbJ173xi4wpzbTGRWTWT5Ltb4rv6",
  "key24": "tJ63eufF2t4SHaXksBbefJKw2SciadifcLbpjPb7BXiJJezHX4yMctGRabgLQCVb4QTezpCiinzsawsZuTgVFjZ",
  "key25": "4YPssS2mCRbqCKSTSbSVtSz5ik6FLWVwJubcsbuzLkYNpv6xkAK4ApFN9dqp1UGGVDZhnnFQnggALPsz99hcdYEb",
  "key26": "4rTXVQQ4Hj3DThYsd8rH6eqfAwch68g1vZ9FopdPUEQp8sVtiULDkP1fB1PxnsrsP89viFvHhe6vRbaZYgAVJkxg",
  "key27": "3G6c6Q668REpu73bzZE6EXVFTuBHKqq13GvuSt4ghEYMLAJBs1Pp7h6vDJLVU6w9xyYFj6wMWjxHad17Ui2MU2Gj",
  "key28": "3sHgQndVCe8BfTCq6zj9fRx8CapAWH4fPFsr7LjM6852xppfEEoo2mWM8cquuWjoe2LAjXVSRbgt7S18ebCTxucs",
  "key29": "deC17LyV16vE8JLDQep4db8DyisfzEiMHqR4nm63H1j7DVGRZNmpkaRi492DMj1X8mc1hPVtiScB2V3ewso7p8Y",
  "key30": "3DR3gqECigS1mpk4nVUh27a4fcHCvetM6rnJM1qxqRA7meveh3xg9U2J8DfjzNsZ6wZM9yKsRbbNLqr79wPywK1t",
  "key31": "31rhJWaM7qznDjNweKte3SbmCYJrjgQ4NANFTHhbE8Qgmen3e2HT51aUR8eKowFpLQHfEwXCXSfiQW6bQzCc5Bey",
  "key32": "49AxzSq71MCTgHvGvNd2qmt6UxyvkFDHCSqbpp2dVGqxDQrjq4oBkKPGkuRhDSaVVeqkjsg4ZPwTQUYV1MWJVrA4",
  "key33": "SvetV8seBCbd3gRuGRmxUkqxXdBS6Yw8xdQzvPcGybSZ5CbEa1iYGFAmaYGyoNVEpeQYBDJxYrvkiwuveBwJDLC",
  "key34": "2SwfX7yCapLyVd4Q1P1fQtwLntq8261ZGrAgeuSxdoCzFuqXcNPorKnZdeXLayXdb5LeECFQgBM1GoV3fExoncme",
  "key35": "5eJUYjy696j6ffLBVKDahXV7uyHoDK1m6FdbZB8xnPnThYmd8hHhBQiviRNEx3YWPvjxNyoPSjNZYUkig7DgCKQG",
  "key36": "2KZZZ7o4b9bhdnmQSmAMnUGPFAWew6dPFd5koyMRcvPUVFXyA9jKKUgcA7CmX4p4z5LdjAE9CxoUPSUGSBVcECFU",
  "key37": "51awSgYwSkysX2r72isstSCKsYxWKuQdaveR3NWP5RRDSHtyncvwzUgwu3zsoocFjmasfdxmhhtXu2BGWq8ivkAR",
  "key38": "xGvXF8VCJc3vHDrHrVrHFhXoL7VK1rkjdxcgETX3A1q5i5c8pYqPWFRdHG35ewkaV1jjRdWCtcRxqSB5kujARvj",
  "key39": "5v7r8Q2uhdffPyezpBhEBafiDnw8XBkNe7na8Wa9M7Fu7L5MGJt1DzT6ayo33ib5zPxjHLSEt9j6opCEjtRThsWr",
  "key40": "5aJwZ75f8SQ6Ba4bxBUhcijysFJSjHUKBJi2H6UcRB7uJ7mgWXGJkmxsusWUuV453FrZnjnm2M1WzMkSqLTwiw4j",
  "key41": "35PpPcTyLHVQe5pnJVtUNQHV6q11YfqnK416yUttBUnhG8Xaezx26XKaqEymJcm6Hv5ypTz7E6i3zvoCXeSJRvKJ"
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
