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
    "2RWCf967r8xRRGAaMrfwzmCwZkPapRNsLcqgTGaRCfC3JyrqLHwo3CEDfQfoQdAtaKkZMooVJv1eJamz68V7qv1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57nz8tfrXuGo6eQB2pxBtViyTigVoiaP9gyfdZxPfbtYdwZd628jN44BszcearBuhsoJ3BVKbTVQAP6sEkooZsvp",
  "key1": "3hKSgisWndnNVkWdcjimY7zSRucKdwxMnyiej5XLpdRZasUGDYC5rjiLjpMwc2AkNPbpbiF2vHXuvaqf7haqs97f",
  "key2": "3v69Wpijhpj2gPjQtjMBBeZuLYoTEwhZGBeb1kod5ek21G2t9hQZgtUEgorE6s1tnnpcFMeoFtgwyraEFoUCrN9R",
  "key3": "5tRmsTQH5GSuSfV4wUGJ92bojmgBu2RvbWZbxidVbJ9hizdGZXp7NYPKJzyH4nQAbaxCiSmhetuBb4L7DdBLLWcy",
  "key4": "5vMdQCAEuFTXC6nrearRVUyg39qws1v8WZLgeAaAmdUevNHsBME9MaRJHKaNbkSrDtuyeJJSb3BoN9zRubrzTaMv",
  "key5": "74c9NRR4nMXqajmrounnZyzsiqfkRstiRcaMt69gDKUWf7v6iPydtJbEw4CTTK6scJhWyAi7Ao47Eq5qKVBX8cU",
  "key6": "4snSJAg5Aoa7B1pXGh8qhth8scdcBZW1kP8LWCLeNhmJ2ieesCydqaAoUDDKcRCksPvkjVu7MRoLp4qTZCsv9i6j",
  "key7": "2aTSHJAs9s5ymhMPf5FTJ2VujmX9Gx1fFxVnfUjCttmBHWve463qipVW2hTqyN9xXHe2n1sqep4zmLmHytHGmjiW",
  "key8": "2zD1bWJi8QRqPSqjunu1LRKkiDnyRdZ8yWSCGGVhpKQqSTy879PXNC5VUSzL9D3othTzHwf7sLVH2DvtEFhiXrXo",
  "key9": "3mDGFoht9L996nh2YWuCRMC8wEcXssBdxzzZyrW7CiWtPLn4doUQb1fCkjRk5Ac1AiX1qFPozpRmTPeHJ6JTJGk6",
  "key10": "3wDoUBHKRkTh78AyXcNAG7Y8igo1yM9VGxxLE6RiYTJC4w3k8VzpaFCcipuuaPMmXUTfJMRKA3UBdX6XZDUaEa3u",
  "key11": "aQWWheHSFqrLKzJJtuAsaA1SYzvogKruz4MQRpEJKDHw1my1wAiB1J6rUbyYpvcMwPMm63SZXjqKjJCcSzce3en",
  "key12": "4uv5B6AXLH81FdCqiwCCDMo6qFNVA6858VjaE3eHz8WftxCiBrQQ2N9mHcuFtq6WJ3JZApXHegcEU53nGciJ3LQM",
  "key13": "63zvpztUGMQHqY4FEccB4tHmRLF9g5v2Zd5QUM2UtWBWiJzYxSZDJGPJPpRTRuYf4Cm5mWoUvtjZumjLCVKsBe4n",
  "key14": "5cXBAohbEroqZ64h5qE1LbZeiz44KRSqdUo4yzq5Ntumojnvkn8D2ktD8Ts2MdSgvhr4SkmVfyCQunu7SjbsutBf",
  "key15": "LMec4fARqTY3Mhs6GfsC8YJSY2NyB62TSoijrULLaVRyN2z68zHHQM6yg2gEA7uNRdHyLWx3j5HhZqhTczvRS4f",
  "key16": "4VjT8554c4juSgy23bCupoYez2KyJUKQdszBZSsDdhxUwNqLHFJ4Y6Jc7ugtuxSwUbZuH1Sj6Cg8yye4pyQ56kaJ",
  "key17": "275MAjfuLsudKuvWcM7ziZkpH89yowqMvQACLDX8KHoSaJT1AJDAmszMFubqypgz3dAMFHn35wiNs9vzNpU85MvQ",
  "key18": "3VZUZT8Xxk1rwWTaC29FB1vp9X6U6nm79fqoqiAZjxSPxrygpH9L99YFJ2AXZjG5sGDBrSvLwiv485MvQrdFExKT",
  "key19": "4K8oXQQdiw2SkRLhKtvEaPSdz8GxtMoMspp3HvMb6VJyGgsBvHX9Q8eiQ5hTCebJHVcakFwsBRfKgjYbWuwz5N97",
  "key20": "2y45PMnNEwfWL1H1YfhfWQ2cznEneCVKPwNqLX8fRSGJRnSPXCgnpN41hGMCJ83ouxEyEHWU8GZGx8RvXjApZafB",
  "key21": "263ksQp6rWzWdQhiCDtVk793gnGX3RV4PbbRSWSf4ZW7RxtuK34YoHkY6v16bDwpCwnr6APoHQnS4TPwz3YRg2n2",
  "key22": "4CAicDBJgZ59JqcTrnFhr5f6kKm711z7NFVcRKG86JU5HRBr43MkrVFMWeK5DQwmkX7SS5HY74qc9Bu8RUcqWyMT",
  "key23": "2zBKrtiB5bFKuX9Y8MhkjaPW5CLWdPjiAEx75HMViWuUM7CBkX2ECW2UEbRf5gtsRQTR9YzDLZfoSUB2Ltp4NNgZ",
  "key24": "2mhofweBexkVJvknqoeT531YDrh4qH5razVkc7rF4xCVMaHd1THZNfp6DELdpxCE2qizv3Zs73RtYCfD1rnijJMd",
  "key25": "5HB7NDp8Fcn4L1KWLzAeq9u34HjfCxhuMDrpDbsAkh11gE3MAyvUcRZhHw71CvivvD5fK2kHzb8yLHu6Amfs126E",
  "key26": "4stZiC879LgSAYHfAegvJBXdukR8igsDvXpdzLRpj6os9xLgGURsDTZyC6PAFkg1bFTJTwjo9dxxMZ75kjC9b119",
  "key27": "Y3qgMiF4uPivxqEFfrrBuKr98bb3Vn24M4j9bMyGxyPx44Ufp795caLdn2y6QFs4781JMHvE3AFhGRFg1okefiL",
  "key28": "24Mt8HRdRWE495HWf9Vwk8vZGK79MwdDEohPs4GPEUihhigyZgQ8RKBsDeMBDYuudHUu5UKGjKkRe8Aexjtvufpg",
  "key29": "4ncSJDseLjKECsHEFYpY7i75DXPov7KqRYhNoq7rbKev1L5Ekq3dmz2MkpKLxoqe5ERCHzJbnP1yWLMkDrenpR2q",
  "key30": "2WqMJU4Fa85QerCoCKfvm7S563okq1aPaXYdU9kupEghfpm1GcQ5ffSAv3Tu5oSGo5jYGm74oXX29TpUfPwUVMnH"
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
