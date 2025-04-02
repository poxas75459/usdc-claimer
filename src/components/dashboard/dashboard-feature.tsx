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
    "4YFWAz1BWWrD1XC3KfXV7NV38D1YosN27p5KttVu2o7AfMoi3vGcZL6f97q5CTeM7uCRUbL6N9gz33K1wVdYi49z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q1JYQa1SWWzVwYSUjDMciiUJfxduoEJZVPq5Lv9o5m1z31odcL7BhSpzCA59DTguLKL53SPKowrULZ55ZeGKTVx",
  "key1": "4JitLuzb6xLzshLnfoDeTZcPdhqKrYsKxrgKH3tfS6FBLddrBWh1iNWFpeWkghEFfMZEgtJZwHHzzZqmgsfM36nE",
  "key2": "4R4Y8up1Ta8eJj68m4izRKqUmVC54nyqcEN2R8XVU7VtAgK1S18TrHvtQYJjkBKsRZQLTtAE8v68KfXz2UHeX5aZ",
  "key3": "3QeA2L9ZrtEHDPTBzCE5j6wtZbTgTzEPksGxbFWNGueGfeh6zhqdWGkHXf6EgGnsVnxSgK1JKG8tdjeAbFcKtuAF",
  "key4": "3qvYixdTfEkDYVsoEHhtuRBismn5hn2peUHqYEeYvJ3VPiGZ6qYKMcoWTnWnvmymo4jdpippZZkecEKfvtMGrsuU",
  "key5": "4tfxxJ1qRpgAJZTwpkmRkTK2DaWPUsVXBjm41cJxwQk1LQZ7pzgszFJanchUUR7yTAi3GkdtjM4qjRjJX4jomE6k",
  "key6": "4dpS8YfyzT9usXJTbCZdazabGBrAidR95GU6UaxarYH2GEJWKrtiEdXzAKtx2aNDzDWukbPPBsChnkrXiKFcJAaf",
  "key7": "5M7vPdpem1U5JNCisj2xEdZHCCTL9wSU2smvmTgdUnrp3DRwasknJydyykZUiqphv4c3iAhnssrZtugZfbyj9tRd",
  "key8": "2xGyxEpjCrEF5TK73rbmBaDjtkXF7abjywRu578Q1id1w4cd3w1PRtpEBEuqpLk2Z8ZjzgXv39WzEKFtwanD6ami",
  "key9": "5vo8u7uRfnrpksGMQozC1UqAaCLDHzTcVTjAWM4Q8uQs3QamN6ni3yWCoTbmrq81eMNEs3mmfCusWPxoPBGq93ft",
  "key10": "5DSkHm5PUFBndnPS63T81EMUL2MN9EWNMu3m1yPNAjAxqNwEai98v4xEhCh4EfTQmeKASHfrrPV72mmkHpKSKc64",
  "key11": "39VerVo4JPxprnNgMkpk5vD8n7fbU98Co1EgdghYL5GMxXWjBDWdcYMmTE9mSciHcZiLCLPSQqPpMno2yyX2qQ4W",
  "key12": "5obRyNwM6noq936GpQNuud3DD1eZy3SjayQu6TTUzajPqD6m5hMf4G9kLKxqo3ekPThHiT97CT7cn7PCBm8ifZSG",
  "key13": "46e1N9R1e4abdPzfo5cCut6FXVn2sAMwp85Xy3eGJJBvfQnd2G9qmhmLDcGJ1zzRs8v8i58i5yTxDtwEyi1RGXcy",
  "key14": "32WmXziTrZRdgXDaySwGgrwV5phXrcrviAEdG9WU4ftedPf6kvRuVhues6YuvSBkuNZf7PhhnGfi1yeQP7K8WQPA",
  "key15": "5v4JHiTGYye1NNmP5T3ENhQGHQ1TrwctgbSFb5rmwfsJGC8CHHbK4Sfj1RLjFEh1xrJcxNnVViRg76RmzyA7xfxw",
  "key16": "5txQQmyFoFVt2tnV1ZE3VoaY8TKwhamjtQwhBjAQ4igrusav8DwaJw5UyyJvzVxgJbry5EoqazDjtHcynon72Kif",
  "key17": "2jvM32QhGWDMuJX6nQoJLYkFTMTTPNh9WSMH4tyiDikTSjhPSMs6kn4gCa14ZqKxdcRmqVzW5cs6ZjR6jNMqnpsz",
  "key18": "5sWAiEeUd4GMNviLKnrJ52TfMwdtnwgRDNzeL7WWg6rseTs7aMYR7V7v25LYYt6b8yPr1tSA6nEyXUNjnL1QcGkA",
  "key19": "MKeAxvdze3iozkqji7MkYDotnsXMRyMM2iwT1JeMgtW64AVtnu2LUmsmDkz1mSurrUe3Lx6zBKpbd87q1NUDZfj",
  "key20": "574DrkMPTDoxBkFaeJaznyNqyt6HF1eX21Dmmubw88xhMstwp6dic1unzgTXEe7EH1VrpKpibzFBHv4nQisUPfiK",
  "key21": "VPHoiGdf3P9wnnp2UjtJ52hpK8dyEdbiR7nyAsnmAN8VuqJgWVFCUTVsDGdT9SxEbTJ4mcseAELXc8NbX57caaa",
  "key22": "569kCbHuXF7UoVNn45mQWmfqMs6mhXXU6A5JvHDqAKVCSbhB8T8i38jsdKBEJwkS5G1qygJc2BQSYm1mM7UsC19P",
  "key23": "5wnbK1jtJuEdb7opUhW6xvqtV1XiVUQX1wApU93RkYh819TMDZQAiAvabHiZ3YVjBmNPKhwcGbenCG1EkSrC4uNQ",
  "key24": "49XqZKthhw1d8tGoR2pB4NKR7tv4TJv15tEDjRXBzksiFiazxPvXvgRRVP6sPGA4vXi14t2ETzNefsmgJWQj96kV",
  "key25": "2qoAa3r9xwjnEPRbRjsdZmdUSVxFmMcXCBYd9dwS8ytF5YnBFVK3SsRC691D2JdMCqQRqFyJne5mD3ESrSGJt6ao",
  "key26": "4yXdyE7pio8Ke4KzxczxUF8JDLW6CcUFc9sXpc3oLuP7okuVQ4Td7gBfUNomrTrtdaFKFJcojQJk9bgrj5S4XqPp",
  "key27": "2FKBJS6AH4DbjKXk7KaJ5tfrpugwkeYS2yxwKdzCA8uWvGBVL3i5H8V8fqiERZUHoKiB2MrDqp9LmtDjyPEDpUDC",
  "key28": "oyzu1kr3VtJ3c4cmvzVHMGHZwHKaSKE6SREidANxST9o1koG8WareAWdkWW9pxEX7eZcqpEFxsX8usFcgPXRw61",
  "key29": "2W3eoQr7jJasyZdx58Fv1uaerjzQqbwkEuVqJs11eBx2rB4r8ecJ3Z1FXCzeJtWb2HKMqT5pZexyytQL2L3zzsGd",
  "key30": "4pgL2pACxDSYH2TVFDN162utGBPeLoEzcEAkGPFQot2NoXZSy852QU9H1H7ajTqyPzkTrN25Y6y8zbf5PtRuAKan",
  "key31": "3rVV5Pah28eSX7fw3s63iCdWUwu1YHTqMFmatZHgVuYSbNwCVrzLd2ggZG88SApNPFjDigaan9UzByQ9qU4BUjsP",
  "key32": "2gHCaSohkmFFptp3QKvWaxv88KtcQnKv7rnMbfdrNzsCBhmYUeMFUrVQc2vnVVQwfhTqEhCJdgxUq8usfsz2pZ91",
  "key33": "4FEAbQBYghF9XU4BorekPB7LBwz5MANawusDWS3TuQdZytonfGop9WqBeCtDoQhjftdM356DPXcChNfjAURDHiLo",
  "key34": "2RWD8noDEbcuuK2ePdRBNP6JFtGuBsmEn5VHVrDLL4Cm3YhFXa62tEvaWXWRppKvTavKxvsLdwJeEBg2824Fas4d",
  "key35": "s11S7LkwtiNnVRSwfx9jdmHNfMNGDSRGzGWzYCDntasUvmcDcdxTCrVZgtxQr68tdHS8eSSwasZK9Xv71FEhR6E"
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
