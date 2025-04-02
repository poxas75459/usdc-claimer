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
    "34Cgggqhx4Vj2sVLyD1rYC92HPpbQhRRFV4EKtjqVtYa4t4HF2N9od3xgBSWnMRq3PKXPXB2rGW86RrrkjUK19si"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bZiVsWrcQJUg1nY1xrzj93fJ89WmFwVRntGNXPdjRiTYzFsbVHT5CJSy4DBrkn4PdjerN6MseT2tc3MB7D5czDn",
  "key1": "3gakFGKc1YoFiJEeMAyvG5j7AMC6FoDCrZi3cv7KuphHELYHkXfZLkFCixH8Dn5GL4qc8zfa9wq3o49aRcxk8pbk",
  "key2": "59LgjkhdMyM6oeVrxT8RotfnRtt45vAYyv3XL7MnK42dzKD6ekPSitsXJD5pfL9xw7sD2pWeE8wibCpZKNNpy5fo",
  "key3": "596U4NSNSXzX9LUYrf3SCznwAaTN16xvCedrzszyno9uAfzmRTqrrkcmJUzs3dS2XJHRHq4iiUA2UARNwWjVFkCP",
  "key4": "hLYoScKg4aURifj7agMJPhjzS2oogbkU55X1X2s1f6VN7qF8n8uw4wRsyh5ApZXf53JLuWwEaEiwPgpCk5x1PVD",
  "key5": "uHLHfQ2DLax54HD8MzCac2rUFEQXoxA54gdmWheV3gMt9K4fYGE5LD8h6kjkFv86HU9YqjFSTq53nxWq4FeJmmr",
  "key6": "ApmS48L94Dg85CfZeom292XSqicyqZs39cqsmx8jveuNotjgAWJsKVX1KRZJAVKSu2isqNcFw96VTg8FmFiyiwA",
  "key7": "4zgznRKVuB65D6SaW8SsGvYVcHnMFU7kPQPU53v4ekH8reuEp7aV21UbpAvFGzQ5Fk3C7qea3V8nDi1jJSGNfotY",
  "key8": "5APHqMh9TEJ4mhq86dAWhBiEuY8uyK5pz3vm8zigag92FRtqbph1byPLGhPrD3zcXwkNqbuTpgbP8vcbqrX2beNv",
  "key9": "46GXCSjG84GhtuenfHgTUMv5UQEinmjrXKd8AZFTiaU1JC8eYBo73NaSCXHzdpEWhcbMVK4dAJEtCTw9tAu1wBSV",
  "key10": "2KRPAu45sRQ5HFBjexcK7knx7A9X86EhYQeN5z6d3K9cBToRFS9F9WiQjbfLr7gcFwDCS8Dm4qGtPJnAZSAjTdLz",
  "key11": "4m1F7chUrQAMvaVCZoRifoHNgB7PGiRxv9fc3qmtGCLbpEJNQrRAtqkefJ6xv8tdFCGVBHVFtHXMFng1WqDompPY",
  "key12": "58BkdUsD59nF9eFjtURSV9Neb4Jr7JgTqeJjmiaDuxFymUpUmz2Lurf6dNcywCM8YXNdxjSMQkKmv23Ha5LXbB62",
  "key13": "4MWgFYCENsWQdbtYbkadQq1TogDRdcW7moWmLXap3qjtr8bM2SQVXFRWn78u3gCDUTp992cUSVqynmazFPiqr8aL",
  "key14": "5ysyL574NGTPEHEUshfwHw4iJ1ucZHz9fqM34H71hJnUeycc7sMeLAYBkhxha84QKTqKun89gg9S13yGyDAe5Avt",
  "key15": "5sWjhaMkiBYXDo6oGm2oNHzN1QTuPeUxDGqEWHAzurBp173jDT8Emk7r2kXAo6Jh98Ev8rkMSGGZ1io7iJ7cWGzt",
  "key16": "4MFubHoL1wDEf1gdjZcgidu6NdWF1emDb6Urz3mVz5NxBruUoPKqf3chRjo1kJEpfoh7SdgAKPswmp4LQUaZEqrp",
  "key17": "4ModPFSji29MvMgpsvk2hT2ZePbkeAmgRkUFXNsF6i1qRdDM1EhqoYPJxmuLs13mCAEFMnLqE7bcNkXjMHxg4TsY",
  "key18": "3naEcDzsH8ztaQBNpYtShUxDPrdqLmaYEzq5AWUyrYHoK6ytLUPJvmjqw9auoC5TapRF9aAHxrVhkXeZ8ghrYA2c",
  "key19": "4ie6oxgTea2WLeajtANeahVGP8pwMViPZYgQ8aLZoab5EHfi6CWiNa2wZD4W3MKomSY2ieziw1EhHzUePPnjT7Yd",
  "key20": "4Tv3Uu6fUsVFLjG8wVieqtx8pfKYKSAVomFpeedJWpKQx7UxzH7r7HTZ73sxpTXyfc4qvrhevtqWeNy3pEG4RvLz",
  "key21": "5bAekWo2YmoznSSB2rMWJQiq2FL4qFGbJXGPSc8rAcP85Dw5SKPWeDj66YR6w3zo5YUzg8fFKQ7m3moVUunECDo5",
  "key22": "63LZWmKKpF9nEr8rXCfQ2YPNJ54TrYPYh9dd47tkJMXS1qWzqtbbxByR6S43jCFoa3vwHQu7qtKJYZ6nBj13rdwL",
  "key23": "51FfRvn9nVaYmciGdBhdPJm7D8reWZjLL9VxvWA3b9P3MmLSDJkn53NqLNJqfPduTT525N1qzVc6XXt6YeeNEc9u",
  "key24": "8jqe14CMF1v6yJPFP7GhyAdHPA2qHSEQ56JiSzTFjCNb72oz7kpgRV7JyMDVfLz5LcgsgcEAwjBB42ng8v3azBr",
  "key25": "5fiGnVWtqR34UJnBmSMDcTa7fgWhNRtvigv1oyDQDGHrJyQxDYVGV11bnRE5n6C4Z5Kxu5Bx97fARuXT14cWEuo1",
  "key26": "2xbHwAp7JqN8jfQpLBvdY25UmLe1oEr3wMrsAfRraUGbQShrTvKcednyYTfZzBzFtdsUTNxt8sMFbq4pKPixDjpa",
  "key27": "35XZBuNdAzsneFLSnATSUmhx3kR2dLymKKEqQorLVFFL2AiLZ5R5fjEpCtd8ckgStXZmEKQJghS74WmXwzRNALjA",
  "key28": "5GcHze9JtwYsRoykhVyGD5RkV2bRBtbrFRkuFoRyi8RsZTZQoMSrSFxWeo39t6kABn21FXDsMhfBLuueAfa1jGUd",
  "key29": "5karfVFV2wg64u1ttUxbXHeuzhNtpzJv9prksgqbPVy22gQ4khSWexWvkfMnJicy8FB6boioWPjTkQ9JgCAp1TVH",
  "key30": "j5JRAyY1dDjkmBrnvdbMo3gNYHrcnQuG9ptVYWftuMYtb5Re8hr3GUpykhwiysvpKTw6ULCnoQpgD26G6qKMtY8",
  "key31": "495HUosAvNx54wMHqNR9cSj7jsYzxPmaQdpU8SbdTUcMKxRF1m9UQFjVpwpQvar7WCG4nRZgknXauV9jYkPUANYp",
  "key32": "3nTDcweeKzJ9rQTC5wDmfcLSycbSBU2JsSa47RtcW6Hp4exRXUDY2Ur7wH3moBcmgJgW3hKQx23zCpsHuEGBeDtc"
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
