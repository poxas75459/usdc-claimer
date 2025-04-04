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
    "5NTFpPYGrVT2Thi6NbQAtWdykG9LWxpg7aMXvdP3a1URTuA1DXDqWwccYzXbHo3XJMojfLNEwuKZg16iDCijKwXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d9jWNEM7nEpY8ezZhwR7SwPAeUG6sQZEKhUgL2hG4DHYAEEVtgB97XvBMWviB9v9oiVuM4AU4ZXBt7r6QgMVW9m",
  "key1": "4KwbsVh6SXQFKPviUj8jwgqMGCFqLdjLJZGF9y8Ym9kAkLM5SEyPCjFiasuM6oa3HbP3v1iPCb954jJ5PgVBgUsv",
  "key2": "vWDY1LimKxjYhAp4JryhG3ZDWRoCTy3LYWQ3g6Hj15Ez4NhJ6xs9mAfEdzPTnLQs5noSoUzibnfdhiPUn61WYx8",
  "key3": "4TMwAvz3gGFQMTXSNp9bhoc4o3huZSpQczRVA3tL4q68zqaVYih8xDAEvqTVQ65EXSXokrcreqv1v9zdP39yHqQC",
  "key4": "28FMSspy6ZWPe149QPazuuA32cFwpQhkoCHUYaGdk6qPhyxFsviE7A2MMQLtCpdSRLQYdci7V7WR6JAr1bz4fam3",
  "key5": "2hmWNBtv7EgVxPYiMNNmVi2Dm43GVrSiU6FXPrNLgT2iL9nDzmoYr9rmrfVsjwo4nhVm3xMuxfn77NkdS2JupeyM",
  "key6": "4Xzsp8EzciXBiXAo1B8jEHPWCxcUS4QitrxFub4abn3FtYaYbrYbtJXG8CrWx2jjVXHr3ERag3Rr3aXAisPpNoq1",
  "key7": "vcYdQ4sr4Zyy7nRP7zEKWsh1CW5k2MDGq8xS9ihAEWq5DMTKAMvzrL9EFZVft1vS31K7gRjooD23g9B3njodEEP",
  "key8": "2tAtVAz1yjBd9zqVt4ECmUHGxhyUELnY3hV2pAYAWWH9CW3ye467LtoCE1UHUSk5D7eQiKUSCyngLCzQDakQymba",
  "key9": "3u2d9r5DZj616NbiZ9ZTbfXFUzmqQonTyjPJgB5J77Xyn1BhaCEXrxsoa2sbWzRovt8sfFpF4gb1QKx7oRng69Mz",
  "key10": "5VZXBgvyTLhddX3FS2mn8bURjdY6u2hjieciaRH7rqjcKgw5nK77uoSoBsuWiAZ1bCLGWM4ZpaZTxovHzZDEdfdu",
  "key11": "ruLFjXZk3p4e2VjReKtGvfaVa2xBPTojpJvHC9iwLmxMQcLxWTs4pNgcpJgrLzdXEaGU7qcSyeaSHQ9i9J5y3un",
  "key12": "4rL55HBzU45mm5xyQZaeyvaQvgoGD9aL2gVY3primSUJpuNLQfWwxc7zaqqwsPSpdDptxUkxxxFD2PcS7vtF7CDR",
  "key13": "4FtzahspkZ1c53Fcrmh6dg6LQewVqaeHmN52EgaJtdixnnJFUdaEkoxDNV5u6fb8rkd2QLpzULAsvYNMJjoFjCmA",
  "key14": "S8m6ugBcsy923sW4Pk2QbHzRVUthCSSaSQLKmgVA6qHvQwtcxUzBFjykKWQFiUGrPHzmk3pCvKnR3BtoexVnwjY",
  "key15": "3ypy9mwz8zWRdGbk3S1otujFjT3KV3pw9CNkseSQ4nu5bwDGyafiYkLeq7LASDBvYtwuuwXZ9tjwJGuiSpca1mkw",
  "key16": "5hiecWJ21P1s8kciDrTCu8Ck6qx8JQkSZoAZ3fJck9YnLtoHrxrzqmpRxsBdqZjvVQE52arc1e8t8azbpsKofBRP",
  "key17": "9uNS7mPp7prk9yXCBTSf2fjJrnDinT9aCVAR5AtbYFAiJ6KnKYb3pVPkeQg8UL3HMVgXMHWq7vU8XftmwVngy3k",
  "key18": "TTmedtw7kys7jFMFDygW6oqNaTCbS3brPPswN5REcenW9ZYVVxZDSdJVsAZMc3Jj3EgJfAv3N2KUgTcdrv46Hjw",
  "key19": "2ErC5p9GndP7KTiP3bSYHuXsQ4pB1G8ZRGit2LLqoUyFFZdJEa3TPNkz6njRi5Emc8ZxThXKj9cmnNWauafXZ6bD",
  "key20": "5AspFXXMuafR9K6TLNDY9R18sAEKLaDRonRCJsJWwdrjQE2dbZWVhrwnnvBBhaAaw1gmoZXHCaxMyLhv1ygdEj6o",
  "key21": "Ya8WTJLVu7CcD6dyQBPhpCyUgoXBoTc9tNDBk2MKPwEDqN1CkRD1gNp7BjB9cuZK1Dnyo2f8NHSBm1tuqPs4VPM",
  "key22": "2AWbUR4PdNr1xSZrGdNyksSJWPfaa1Djzu4ozgDmasioBbUYs1rZYuQLRR3oc9C2Sfw5ueYWYtbWW2RcgYCWLA6J",
  "key23": "57Fu4YMFXtJVptPPEJN8mepoYSBR7FG8dyDzjVqVBQCuge2BcEDTM7DLAWv1BfBkg6YHpPrCuvVZihq12DLwwX8r",
  "key24": "uL7T9f3VkmPXmE5ct66nZ3v3Vp4HR6ManyjNpWm8jSdJAPB2Z7WB8Co96gYYwn8RJH8xXQB3H7Gk5QVuEuZY5kQ",
  "key25": "5NVbwiGtag4bQjjNpc3ovB3pHhq9djzEgGFnNZ2Wgu6D8QKjhVVegQ8gGVFrFpsRF2PXeGXfjEaEzUYkQkF9H2oi",
  "key26": "5seWai9FMRv9oqoDEA8zqRmjKdzwYkdE3G2ezJkK4vxpcMd9YhxpmqtVGedSnRRMPSsyK5Smt3WTUEKBc9sXZja8",
  "key27": "65BqRqPMt4Ztub5LU8hqN7D33TNdmV6GaHmQaXiwHnTGqfpuYcGwprGLrBUATuirwQEY3G13BxjYHy84gHxK3Xbc",
  "key28": "6165RnE7H6QEXQdANgxES4AnVAFryMySB9XTpBV8EbAWJv4Hpn8XSEwztdrVRBVEBSWK1mvkZHTDhWQY1CVud4nj",
  "key29": "36C5RpTU1ciDViKRCCz9PJV5NGQ4FG23qdFHwdzPLrp6Tc3gLu7W3n7B8ssrz2VAwFFkRKUe96SKyvxE6K3oJjgD",
  "key30": "xY3FJoTixrEbQsjVxDwaqJ1cvxjCziNGPFgpz122GhbJJP7kNr4Srsv8TUiJkMGBPvgAs34jLNAKSpCt54wcS55"
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
