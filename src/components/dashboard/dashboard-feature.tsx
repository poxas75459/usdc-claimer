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
    "5PBoqLsNNiQkJKB3875m91B2kidQuZ7ibkric5cGvS7616ZN9pgB21tJrpAsQoNkUpTxHpUJHZ6cZFxr9eir9xdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rq2Le77pRvLeP6MdrtxvErcPVFU6GyK3ePej8B7XCxhGypryCVFMpFLTHZnmPC9jC59GienjaHpEd1a9HB1UGMK",
  "key1": "62wYrDBpqHrvfjcPHSKYmjpsJGEdyunBMFAtL2SbdurZqo6AkUBZip9M13vZAxieEabNPFNZixhXvncuaisXXYuZ",
  "key2": "5ioZhhfVBeXKK6qY1HzqZ9ShDGmyU213iJVyd39bQHNUBJFdewKTnRLR4YJbnBz199sKBxgAB1AGDfUcVFc6yAU",
  "key3": "53pH4QT8D3VD3ARGvUSJ3ZDPn2RdWiLxo7g3GRuEPoqEH8ZRntFXmwBw53tuiRMcQPoDSf75vghKmVRujuTvGWNX",
  "key4": "keAqoTZaPDJ5yJ8VPuZGqFmf3nNiTgo8JDpn5QZBmhZWo9385Xcevd1ntCpH7HS1mN9H4bvW2NMNisb5nxjuUxa",
  "key5": "iGK3vqhUE4WCZ1vnGd6g7hsuUBSnH8H8AxJSRtWr4DptCTzrAiGiSfp445ZCJCoN3Y7gcsF1sfknLM7aawRqiGN",
  "key6": "XEdN4YzWnAb68XQhAYRMCPM56Cyk99TRpzqH4eWTt6dumVBnRiGb6jjHrhGhXsmSyB8VqRc7xou5KmJmfn2Xnta",
  "key7": "3RkYJeAuntLmWQRHNk6Wh4JVwfME7zBW9cy57LQUmNHuv7YL9YLs8ZmVbAgj1Lxdqf5a9ZzQhwijkD87JBwz4tzX",
  "key8": "23XCJvotpxrLQLe81t1MpeE7LwhzdvwTHrxAZwtvYTKmmEZcPsFezQwTsDCzUnddzahYbskZ2s9Fh16DxPqreYu5",
  "key9": "4gWvtsbrNmh8ygicUJrDdqjiKFQJ7jkWmEqjDeZCMPQ3YiKuTS9WB5zEBrbgoxGT2R9JNoyG6kmThBMvh8DVEosE",
  "key10": "5jTMiDHrGif51VKbZEbi9Nzs7XmenDt4htQvHdC38jrYRguLLfM16BbyMEsu1uMLRzi9kXAj3REkSRqv1b88avDY",
  "key11": "4tcMZMfKCf7f74t34Ai56F7cYmXci8RaXF4rNxJ9cmycJ7b2faELUeGc6pM7YfS8DHmK1NwCu5Ekv9R5S1yJHgVx",
  "key12": "5uBsMvGeU6CcfEGZAC8tNU78QvE5bJitxVGrw9U639VLSpB3QdbWXK4cgYuuJCpx6spwwRTpYArrwauEpx63uuvG",
  "key13": "23mcuJc79thAA1sYi2trn5g7TMnNNAT8DeTL3qccwkKJ2aXVj2HCe4gmqNmwTsbdkJuaXTiSpHTu6hvjY6Uoc6qw",
  "key14": "5ayk4ppy3fcTPp3XrPwRceJzcRwRfMSGdetbeE6AdjnaeyfA7bfMX1eWfBa2btQie3H1EDYU9mBjhVTT4v53P34S",
  "key15": "24TUVoXNzWqmxuR8N3zK4VN1mFAhgLZz52B7FvhWohhdnVvhdAXDJx1eXaWCYUy8k44YZRHpZJQMpVCactqAvtRB",
  "key16": "64TTx7NqCNU551P1pXRgChVFpBVTUvFkJJ8VAVrHEqXTRhAqCfGKgurK5sEtCQLpPeeVppMHei7UnqXfnfzLmq1",
  "key17": "4UtHSAtdmLAZvUDeJHS5b92wj9Q84UNXSnh85hm2N6mvUPNmJxYnLZ8yZfs127q149vkejbFMrnJh88KFaxQ7fmt",
  "key18": "oHyU52mRFgbXJA6eM794oCq251UhDdfnfgNbZM2ozZe5xqz48zprW6JMvms2WDR5siapZHynHe3oghpRqXRgEDm",
  "key19": "5nWiu3SBkoiGK68KrqKn15xqd5327xiTqThBAV1agq9jr2DYwoDhnUAYH7xRqHHKEFUBqzi1cTgRGnTyvQFFX27n",
  "key20": "383GCDSAEfCKr5E9EJqd3kKtezHTYbqrEV5rdVFvuc9rzB75NzfiaV4pPi6JtdEJmXJJkGSDxJVUZf4TjPxmkSPT",
  "key21": "3MZcTGGkSAvjrPDqw9crrnVv67neiceARB8XPKMfXSe8QXW8KVKgfEVc9T5Sdp16pXpwQGTwf89ypHL61ZZ35q5d",
  "key22": "3EApHqVDwegivzbJQJCvUrJcsgygY6o5Ms4tTMzHMp9JXKLJbyyJjFCJdVFKPscwFXTQXM4sqfNMZvg5rKUvAxe1",
  "key23": "5XvouUpBdCdzRefVjAmjMsxQfdWoCjDJzVv3JwXVHH95QjJRhcLfCHhzP2GfJFaTVReqrvrpCHj1udePRZrWmqx9",
  "key24": "3VGett3ASUpmBrdo6F7w82KBWQoPg7mYZFjBf366AXRmSkheMJWA4SwNKZxcUeuT17tSGVgQBnUKK9B4ujCeti3P",
  "key25": "T91KkTfsMA4i2R3zmvBV5TGuEx5TsCqdGNtthL648Nx3wCfQ2QKnwGL5QY1iBEjqRBFDWkfXPujbtYKMGp3pAt5",
  "key26": "4Lm92KLep9Vkwon1wqRSoStKHuDPxK2o4ivHg8dWLvmWmebzmKug1gYShabWkk5rJ6E2XSmeusAUdHFbJ4H7BLFx",
  "key27": "4tYtzUKwPwmS2HDBzo9w7ik6PKXSBd7TJJ7nkHS8Dg1zUxG5rku3YpbHWc6JVU1SsDie7dWGaR7qGiBgqy71YTuB",
  "key28": "3xHYd8KS16tP1Lj3HNLa7V8k4cbFS4SmD1D2PXbK1wLPggW5FPnXw6DvwzENAGtGrZGnSBqMYt9CFr297oqV4487",
  "key29": "4k6L6hM8rAgQGmGGkmPeoQfVUZNtimHq26rDjhyKhfyW4JbJUN2CPm2rZztvHvm4qLTQEUcWe3yHYChAeGPGqRtp",
  "key30": "5BJTEALugavrBp9Z1EKx5KHDbDs1c7UhSdgcaFaW2oBaidFPiDM7JJ7jnKtyX5bi1ykVLjG39wViwX2JZWjX9mDc",
  "key31": "55dofYHVNDwwKq4tjTyj1zUXZQw9eCKrDXZPv7ByCK4TCX3SyXesgkFyPive1MLXeuhW19GJXPTFyHmqZjkXV6vi",
  "key32": "2kpcfNR3L6sDHKAFjkyomz3KwWSxzwt1BJqAoK6hqYssnF4QTAnYXSP3TRcC96498wqRcEBakeVKkEejYKmt6UCm",
  "key33": "3iLZSKwo3Vwuf6poCacHfvFMeFQmfeX6hSvuqBrYrvPaXhN7HX2RPqfdybsbJFibsYH1ttebRjZkVFdTkQ9KT3XZ",
  "key34": "4Ysh47Q8MTFT5FYoGhij8H1pJZaaqjBFakmrrpQPZkt1sLqf65TwduSrkEmXdyiTHowGrMnHc7to8sLKKmPCd6PP",
  "key35": "AQakhHnTbTfFmymQe2RRixz6ZzSBP2Ds74bpNnu32RFZeFLPzoD1deQxXAJztgWuP46YiVmbW63EQQ3M8siwisG",
  "key36": "4548NSyKkstBRbEYYs4h916LDHcP9LCbAs6eZe2YdM1Sq59gRtum5k2o2uDSUdZsUf2VALhGkiNEJtgu6hE1nCJR",
  "key37": "2csewSFvA4yk4R5BAnKGrg7yVF9N7sKvDALvszxF9d19oi5itbpwGTCotXYb2deyDrhPz1B84sYiGbo3uDjLPNfz",
  "key38": "gEXAgyQ22Zkhs7TboL9B9C1zoGyTAPxHydUxhb8VG4vqjQLDxTNhUQMfFHHvq5K1nL5NapY2dVnq3hK5P2Bh3aj",
  "key39": "2KXfCmkEsw9rqZZdw3Nanf7JFHJXVhCJxWFwUJsUGLzDYTPZccnM5BV6dtZoiU55kgGnk3H8jNp66h6LNJbSf2NC",
  "key40": "39Kf5aHRxD6mF5HXdoimzT6UzEzE8QagfjRwRGQnfPGvhuK9edUmgnYEgPWLZEW7vYED5hGPPP5t5Lp5LUBQw2YW",
  "key41": "oeASAZeDTynrZpF2nsHMUUp8BSdHXG1k2eDZfaez4JUDjye6EFXHSFNt3xESaNaogh39DSnDFLn5a52LPjobEsH",
  "key42": "58oYfLYBF5sg131b2ZKYWcyxju3G7vu2mmoRwD8cqYZNJ6TReRHJQSutHAzXK6Afi3HjrZaGkMDYGu29oTa4qHcR",
  "key43": "5T3uYQNK1pig5cqYcaMb6Wn449xWdg1iSfjWUVVnUj2RGabA8A3hv1gBZ9z2BKfmh1odCW9Q5rgs4h15XDSpVNsD",
  "key44": "x3UgZoZVP4L5gNciZfCygXywjoXaHXnxtbLzHDvhcGki8sGrvgGjpXwEH1DRt3KNGDvCM14Xgh2bZv2zDKEZnUu",
  "key45": "2vAvJoRYnZ2fH42hegEe4dA45k2B8NyTMxGpjjymsT6FHoGdeXg2aQfybirG2cpxhsYn9thwJEdfuJDN7Wp5LVgk"
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
