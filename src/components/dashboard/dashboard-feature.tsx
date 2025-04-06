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
    "26YKMv3bXKNhSsHpwpKNtaYsQ8QWfMvBqSZNKScZwSVTA63M68cUszq793t5WyTicni9kXD67yDUd56muRbSwpi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kJFB4dCAMimQS7E8hdZHu6QfjgtX7nB5zGYyGaqTer4KNjoBNnyYJzK9yPAVntVG72Qkf9zmzAw99P7XyMbvMf4",
  "key1": "2CkPbwkDYbHwULBpAxk1SQ2ff73pgowFx5VEZ6kEtqrqJrPSk21xeANip1vLh4Mai23G1a6KkPgBE9xVR2W55KQK",
  "key2": "5g9hs65hdNVL7HeG2tXbRmhDL2tgZXWCfqKgKDypNfw35eHoppEPVkuWY3szwV4oxiLEMnKejWpM9W7hhsD2NV4p",
  "key3": "4Ay9f39JaCkXdCJMeXyvRk6N2AWPz7Emv3aD1w3hgnnjUhDWYFRwjpuunHoxhD5G8mruPDHMGnKTa6vksyBNYWgF",
  "key4": "4QLU4Jr6CBYnk8m7me6v9mX3mkip19t85HNGb8AgndBmpykuhL9xFRri77mKmQBUS4kcNrLazQ8CadE5w83jLMh8",
  "key5": "51vkW76ADfsqvz5JTHEoCYwu7uyG28h6mcY7JuEGuxjxoPHARasdaRQzq6sZzLoNaLtQVYZatPco6DG1mci7bdEe",
  "key6": "4fimLfBRWDKp9S2dbDe8f3dev7ZD8fLiM6SYwC9PhMmDNcFUpYE3TvJ1jLnDGpVeXy4g3m6L1ZFWx9m6LLiYhiJB",
  "key7": "51gQyF6Jv71ot39b2r4tsT1YfU5aFRBCkaYL3oPFbiZcm3HE7fa8uYkz1VTD2RYgt2VHEEjqW8DXsEgMbMunVe3x",
  "key8": "w74cBs1PqDfF54zqoEHxmozJaQT79w5ALjmDGcEX98p3LjxTeMTHGWY3yw4j5hJxi1seJKbZTLa4ruTrfYiNHoM",
  "key9": "M6F7TtmbHjh91Rk9TLnbaUywUqSSXxpVkPad8F473NiYLDDU8oQfDYMJf4EkfxB4nThQXnAG3eNsbnDvPUBeU4t",
  "key10": "dsy6jRn9ChNmRgmyNBWm1CspkeMGFrgCkMNTYoWtbpcMu8XreHWU86PLrdpzrAoFbEw5LR4Be23MtDUm4PPs3h4",
  "key11": "2R4zLqtME4kquo1zt3mioR9pRvT8xxPbnQivdScng3DJpXMXHgM4izrvzY3j9pUXHoikAxfuBzoCjV1YGzKoqmbi",
  "key12": "2DUbJAm2XK6uLuncNq1PnfLnWxpcSoHe6ybfJ4XVUQ1wBzf3riCCEzvow4TQtk4gDYcZeiSowY45CukKZcbKbgwg",
  "key13": "j9u7qM77BFtdbzMgfh22WLnu7Q5gGYshvtGjUsQ1BDA3ZLTg3ucsdmg29hneLRhVH2TmLfAPekYg4fELkbaA7kp",
  "key14": "4FyHPqmBdpnr4gMQxnHfbjn8nG93t126nAHAWdFWqQbzaDbt2acBaMtCoqwsb8HHRvpN3mX6QJcCSrmfh5q2hT4K",
  "key15": "5iQFq7eCYvnXwQ2uf9mZJxB14uvjKWLPek4ymWTSVERVghehVRDGuNDxch9NLrcR5bwNfJKTkLsqqH3VbaUxCBGu",
  "key16": "2vfnCzcCKEK7MG1KByT3zRb91C4r2EptUC6dpvcqgYKysDD5hCjSGHdhcm69U9pFifM8vmj6iML97NB5sKtuDTmu",
  "key17": "4g7QCcNZp8xkrqBAi5E8HgYNpqGysKLR9pFQsSTDtkEvaesG9mYj4NuMiyN7qcxha3MZAdTqofFLLcd3msjhyKYd",
  "key18": "5aKAVtYainUFznE4VZ1HnoTGfU9ANNohS3B4YDWfmJeHuwpKiPZdExjnUFwmhKyaTYiGeC5ouU5bqX2LaEtPyov3",
  "key19": "5WCRf2QyL8ZrNiYJ7aSix6yTKENu9DGf83qba2TEB32E2CUGraoPxcwropbD4SbMzfS5Dp68jdu4wJZTv9ETCMg3",
  "key20": "2F7esFxr2sPTKVoAniFT2DFAGSVm1Bksq1NdEUBR76VCampKviFztXq9vyXnNhHmNouXVysJ2zqhFxuGeZwLD48i",
  "key21": "5FsbSCbUpDVKfTa5NdSpFkHuULyKfScw5Grk4Pv7VtsRv14n2et3uTHexLmtWxn1JQhgmUKskxXqbAPX3ivCzPkw",
  "key22": "5ZDTPizsrqQ8sbdqFTYJUUdzRu7BvuwKCoPqrCycQCtR2Fnfn1ra4AHtdqdrN2sFebfnDPnsty5LTruvAjGnRYt7",
  "key23": "5VZPpyn4pJrtxg2RTETUxdHr7GqAP1qFaPXDdmXKz1ReAihww7dGNXYKk1xAvxfaN6716sAzHjQV4RQDPCSdCa9g",
  "key24": "355WfhhZD4mggLExwpj4DcGvTgGgiwyTGbbUXdyibvFMEWbmP9Wh5BDQWRTHJkqtGSjG74m74KPVnibmb1jPh6xc",
  "key25": "2DPpcF8QBD65MJncffdTTAxcoAojBZaHJ3gZynHpgUmXeGvR4HYHtLvu7spHHygbiERXq3q1LSF9eZJ4ktQGApw5",
  "key26": "299tADQp2QfE4KGzNwLH4ujdAFybzr7azYvf4ibXZ4tE76mpq3XZCS5e3RvQ8LroYUj8sjWd24Z9R21GAomcS7Vy",
  "key27": "4Xop4dkFwvwgV3YPq4b8id6csv4jejU8zawSq7yymZRu2BRfncydQLEEYmX7xwWWxdjvCyVyR4ViSnDCyz2qTvgq",
  "key28": "2DhcPZ6jTDyaCf5C6pE4iwcR5RdfjfRBQ5MF76VggyHLt8jnrsjAi1igfHfGqdh1My9f5zyPukPx2ic9uAC7RBhD",
  "key29": "3sPeosoz98KUdpWMpWcr9DmpQ6nQFiK4p7cmA98fb8Q4sLkNJiL6M3nbdyK8xnVySfxXRg3VNrpWSNqEXsifyftn",
  "key30": "52RFnHy2TipBTtf46XrtwTSb3CAqeg6NMnfmjHQSPvMJTZgpWp4gYDynWFCpHgvb4LDeqohTeDTfArxfskh4cB5n",
  "key31": "5GNhVsYmd1yJafKYxtuETnMKjd5hQDB7HLuYF49DqW9nupNdnESMApckkQVPhWQvtKFVRMystMsYyTKayrirT1RF",
  "key32": "2jgwzmHazkWt1hPs3Gs5vo5TAwm4jYB5oZSCkea2sbHwapNn99fFy15LSxQBSBfYoVya6avE8K8xnmY2KbYKEgnc",
  "key33": "5CQqgCKP3ZiAkqSs7138Aaoztd3bqwCVksYTJNTu694t4rnNpZ4tnLb8QjAcf677pAUHEMa1RRqTkoz9KVcnWHfx",
  "key34": "2DkbhXVrVbuPYyCiepoby24hQVahkW9NEda9ES6Hi3i1XLVv1d2mwFk294KXtRF1Uu1RwifHzt76rh25zy6uV2zE",
  "key35": "4tzLJjBwtGrfusPsyVX9zBzWAr1CsdHRiADiUJEQ4FmH3HBgfmdvyyoEhQfBtf7pEHTy5U63mxucLiqhkGne93VK",
  "key36": "ytsTjo6hApBVgWorBFDtZft1g1fTKEBGLPVCXrrtuExTAWojqEaf3RSdggfoRwKqegCasPJUpstofsQySXQ8LSn",
  "key37": "4sauBiZre7BkwXDyiuVk6Ydk46XncHHLac8UJ7xSWqHdXWr8sd4QTQ2eVbcsanCHdvtP7BQtDxxLKMy98pX2THoJ",
  "key38": "63UeAHNQQSHpKTJzyNXfeLWXXYmEEx39dWwr1CfTbeeHgohV3fa9YunChBDYfwrHpbnoAtmH3BFpVDVFjwWsYFPF",
  "key39": "5G7zJzVWySMEY7DRZPFSkWPKULTm1HAy1naZWcWWz6dcnmyyzgFBdwVWdiXasagy4hVQzF7TZCQWaNA6BZUDKtuA",
  "key40": "fEXt15vpSgTaaLQcE2zK35ukcfJjSC8wN4cZnjCXKqUoPmuS2vgSEEvfV2vXjCeP27M9Mf4NhJKjjrrX2dqUWSH"
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
