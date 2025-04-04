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
    "5ZmQBBgAPeu7aHi7ic3C3UGSRCGsY1b4CM93j4MXrPe1tkRQ7WeLsj5BiXnuEdTqfdsVyXKZUJGeGxBtrqnpRVrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56614icFueD1worhV2zvQ2C9tN4jt7mUeBKUQeFBoSN2nPrr4jwVyEuhdTzwa1hELpWaTRp28XvQ8GdZohr4NSh7",
  "key1": "4z4asHVVwyHKnGmkgJHYYsqrf4egkzBWyhx8W23UrMX59kUBM4DTWMMdYrE6pvknpV1XUaUM6LdZkmw85QLZ2N9J",
  "key2": "2a4JAS2HXMsjMyqCy5JutnkGw7LpwkmExB7uLTchpG9gzbW5t4HddnEzfws61xLKs6m3UfuP27xKAaHK8bjWkGdb",
  "key3": "4Yuhz8vgijpRKharoG2ZzuaPNLwe31FV7hXWtGGqNjJQNs9eGG9tR2s1imgUfV72pXaWsFStQfYVoh8gqPBCyLyu",
  "key4": "jYEcGTzmT9s74KG8S6dgh7BnAaVXnyuC6JMtdj9DACNtGv3629LxwpuQ5XwB6VryrYR845aapk6jariwuFvxnye",
  "key5": "SgvNFcs18cjFRKT5zrr6268zC8EX6Aydc5bpCzd8N1XRzhcf9MF9p2nK1RuRnpeRA8veahx3ezvbXf8WQZnQ2qB",
  "key6": "5dEHU3WJCoJ2CFRByY8XALzBssz2DobVPBftxR82bkP5g3dWvRRFPsNwHcXG4Ht5fAUpEMyb5rifmnvtCH1TGv7L",
  "key7": "hSvxoGvZiS3nXrmzXkz6zTGUSPSwGQbFCamhLSj3TH5LMVw2tsUXuHHrGbC8zk8oF3bhKyZqHKNCYPy5ptPqZEr",
  "key8": "4MxRfSkxVhYbgtn8Gwv3JxXDGK49WYvydH6eSX66XqRuxK2ztuNsgaWM8WWTKQxDr9WZaYHZYtSPEodLtZ7gQHd9",
  "key9": "4pMMirNtSA8R4Nn3AFMN5mvzNYjrJ9nToaXRt8rKYRfsWk8bvbYq5Ja1pEamnhpt5Y1pBA5wAVL4revcPkUABqVK",
  "key10": "4UkhsAnRJrezuUxxnE3T41tEieQ9YBtEDPi2MbLh2PQxcHFTvS7hZojUN7sq7BjFRVqKnSwBABKia6SDXKfWVLHw",
  "key11": "2g8KtFBsDvM8V4yro8o9ojkakeub4Bpq8Z2aJUNNEMqtYDfVajVvf5To3iQBR3xvuTUtmx1oz9QNXiLwHXPd5YWJ",
  "key12": "4Urjr1rVs8Ubc6KdRfVEKrgJEYFyzRrFDLBctyn9B6mLw7paHMFCWGAMbhm6avNt82154GAVqGnRVxk6KwffYVSK",
  "key13": "4V7ktf3t8dB2JfE4ss1q6UQNZKE5qnBgi3bor6aF174CfqxsoZW12TCr9RgZttmz3NVqedPs36zZE74C392do6LG",
  "key14": "58ftbjq4GhTtaog33dtPU2Agosq7RPXPxSFQGDCbsxem8FMiD77e5KNzM36qeMKHTtqWY1EaVxNqbWpJ1LcQs5PP",
  "key15": "27tYFJZp11v3UFQrYjHY2gkp94FZqLZY6K3dg7E2PbXceA9AS8c5tSvDh9Zb8JeegEXTVexocNL6o2fiGjRqpuwF",
  "key16": "66VeFrQFrUYeUfQSj9Zh5FRCjkXLoWkc27endxK8WcjQginFHgym7idWRoaHWzZcZW5mbqKekjHNPsGAG28jbE1n",
  "key17": "k156JDnUHzMewYryyU6w1vs1Z2p6nDWXf2Dh8JLkKbEX6N7JYEDNVgdEUsu48fYUuRWv5u1gf3cRaA3NxR2EJuH",
  "key18": "4a9Kvu6nghjdz44CsnfEgESsYPHZTBYetuUaWowjHLERrFhtQKuWQxK1MazritShP7CWHsiAm2bDzg3AAiGENxRy",
  "key19": "4Ys5ZophiiZyoyFd9Wk3LUA1onG3dPHSDLrrGNriBB6Shmy7R7i7FDK5G928vdSS1Le8MQyXTpPM6pyBLqSXvE6M",
  "key20": "5aQhpv8qx12tX15GSJRQb6kC5bS9NmhoTGKNiSNpjXpMTu1dRhkzJZPpF77GE9t3S9coBYxKikRbjmRxBgJLgrmC",
  "key21": "2MPKDC259bBR9XcoTig6TnkzupMoTgjs9ZwdxXdb45T8Fj7KZMYepvXy4KEVc9h5hoxiCMPL7Vi4u34YG7vsLMR6",
  "key22": "2raqQY6FhFRhn8Q3r14zLabgXGq7Fw7xiKFkN1mYrdNuu9XizaF6GSomuNfqXGBgRs9iU9JgfbVTNjsdx7CujqjV",
  "key23": "3NWsUiK3m16FyuQfNiDmsvQ59YmA7r4LnsCjcTGFbCzfWjAodETH9Ua6PQ2yL3DAn1XeVbc4WutD8TMGGpfW2Azz",
  "key24": "Nqz5VLMc9C3dPmsYmDiZSb2yjB94ZouvANTKAP5srySvWAfy8zYamPB7KiSF7bGP1pL2gGRQgjE9ex2rS9srf3e",
  "key25": "4GhBxSyDMetmb18A3YBNze6eTxoMLZUSLNnHib4kj9rDGcAM1bkTZ7CYXEyNdCHyPwNX8R64pUcfRNPuFiKbQxf9",
  "key26": "4UMzqfJQ83WAHtf4wtAV92CcWNPfRHuxaEC9bSZ4w1VzcZCGfUeGEgonpuSZdGJC1X5gBtZmuGRMZxHUTLaj2DWB",
  "key27": "2vPCeXgwuEqpfZ3tpGfyn4C92kXoBZwtHrrot7YbJVNdTeXwcuLyfwGngDDLi66MvoUoV7KUXU75kCJYqWf7G4fV",
  "key28": "4pFqUHQihFRnDJjP7NoFTMmzpW9w1QjqsvDT3aW4ZdHtGcEB8UP2PJvXutM3v4jhHHJYgzBy81yjP4mofuiHM5uc",
  "key29": "2yw5qZkv95T748DHD66ujSfu1osVMmxYM7MZUqfbeaTNSRhtzeTJzpbYEZ5aeQSpNyGjbMgNN8rto7Wn45RDCb99",
  "key30": "wcSbd8fAx6YDvT7ABESz9wVQ17pss2nVr9EeAkP89S1RzUT9kzn3wDTp2tTMuGJEEUbPcPW2g5bK5M5gTcHSiZS",
  "key31": "3BmzwxdVfsp84cHdtymC2gPhQYjqp77V78g18Sby3jjXSFb5c3SpYWiKTarGfHW7Em3KaezERhqNVDE8gKuPDSCh",
  "key32": "4J9ViX8M9MHBeVrzaMR6Wk9NxS2f4PFPiTS1tnM7JEBEVm4FjjkairuppmwoankfM1LDzcLtwDS45LgkgSdQcC7B",
  "key33": "4mNtwJj6wShM9dxSjLMCU6cQMaHV1ytG5jp17fuGEMwY4YnCmerRHRsDfv8SyBiLrZktHMMPHJGatYHvPThbskqh",
  "key34": "43wu2NTqpiEVQGwg1zwS6kfdDA2T3Cav29FGWpAoMMbMPwW49mqTZ45M1TxdWGqSPRoy3EcSoMz9HtsHTFC6Foz7",
  "key35": "3U7LRuYb1DL641g3MLRNfXG6Ez7rYxWGKzNvipQpZVKgEmPSNXW3fYC2Mh5bU9be5haWpkHgD3SsakPeXnK4sVzt",
  "key36": "5oe2ywqYxbzfuFG59BsfjQyQSkDwa2fS5E3UdvCsv2xwyPEFgbdmbgSWYDPYXRnTK8GnV5XEHuNudoJbXSLc7ngs",
  "key37": "35Rj33RveQns6fHZJ5XDB2RSty3WGnx2Gp18NBPtxVTfxTX8VEDHF6i4Q26sX3zetNoxapgb1nQhpKUCdMHBXJ8d",
  "key38": "41XJtkzsJT2eccunfP7kKc7TQ7ZS9Cb2TcyWshznDZDJZzfLL7dpr2A6kohiRd4mGDmaSjEgxcxBjYqSPdTid9kW",
  "key39": "mnUMaDHsFBvd8pz54NKUvNHFwpm5RrsdX1WBVVUjAXC5L3ZUre8A53o9V5A2xhfSvMASNGvr4XWsWBmgjyqvnzy",
  "key40": "4QXW5GnL5EXM7iH31FqgHQLi11RMmCUjouJn5QwiFbkqiDtNih3bzfnca1dzWqR3WioHh8fjLNY89dUcz4ZmAyUc",
  "key41": "3tqrsCeZikik6yoE4fmV3WcdDX61jFdU1kcYUgZDoEUPmjeZjV8ZjLNExGTFLRoBXAFSPpyRgHr9XZkpGLXUc4J4",
  "key42": "57P7grBa7bgYxgKTRYu7yPK6AcyipV6SduXGLoPiGsxY6qdKTFxCFTehVfmqQnLhBEDc76hoXEPRtbeWXbMcnhok",
  "key43": "4UkZXs7UbAaFQoRUjNqcgYqfKJ6XqSr1vDzX91M8sRpMmEcmeTifGfe8WyFNDdNRkVGw8YoWQ5gSnGk81ukBjXha",
  "key44": "maTcLauDkf7Q7y4AxW651xBur6dvB8GQN8b7A1LnpN4Ja8Z8CU1SXtEwP4ZsgoFJWtzzQgzX6kNVYXSrbntk2yR",
  "key45": "4JY4hJrAxAXQMEusJtrHYMDrQeybtoyXKQSYXwurajbJBc3GxTM56xvX3nujLtCQkGtajZFW5GCTvEYZMHmPgGNf",
  "key46": "3vcizXEB18w8aAvd2pg2ZZEVD66eTwdKJydU9PixeBL4E886g4V1kp4WMrH2VaiK9j1ywWs9djGLUZ8XQthd1tDr"
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
