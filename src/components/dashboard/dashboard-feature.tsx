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
    "5NfUmsgUJbEjBXMbMHhZC4chFSuobu6bxGbRikfWYS4XmTVC85HLsdanSgarya2fwxEBu5Dsw2Skq5m3Xm8BD6Ks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CkagcgEBkvZALKmj1kLUEGW55LAVsaTyLyj1jq4p5smPH8qAq9ra1Yj5YRAvMu4rpqXBdeLBX798oVJ2fux2uTi",
  "key1": "2BppKC4JHPgx8ChANhiw7A1BNPX4AzLwzaKj1rFQuZDo1hf55fJHK9cKvKAD9bUL94dP52PGqcgEgDFaepd4iD17",
  "key2": "4qpQmp6BzDswub2KjJ9thARzp9Kvmb3Kj1LSg2bWLbqoLmGNqhJayPZYXBSMrvYDXP5fEVtnYwdmxpD8he9D47Cj",
  "key3": "37ppbPQNJ8ZF6UKKw84pT46dtzvRtHArszSG9xhgjtmZbCrs38i6aHrHmyKy7dmd4JoyEvor2x94TMxQuJc5pSC9",
  "key4": "2wBcPDE2sraWUtHNE4WpQL8kVm6R4tuEJFQAvAMyj56BMsCfTZwgnoWcBKRNiq1z8T3ssbt2y3kfG76pJPc62i12",
  "key5": "5x8MtzmMBbRD2YmUm7wjmk8GMbS1Qf8szh7FkebgMmC7LM4hppmKTjqeTFdiQ2CaqnmbM95AxZyaEyk6kXuVspzt",
  "key6": "xQ5SiyJVbKvnu2RBj4frwH2wQepyYEimToycDRRcZdTUxtHhUxs9qmKq8P6ensS8XYgkHZvYkKRz9izFLV2mHtY",
  "key7": "5P4ZqE3Tg3gW4ooDmoDHrYY6gUPzVEKzH4Q7ewbzHWKmNW9bDsFZYw93zBK5a5sMwZyd9Non2DGwRBq27s7mW4pG",
  "key8": "2AV1ogFc3aFYsTfofHdKL6zP7CCCj8Fra5ssvWCVfLXxnMBE2Qbn58cBY1AzARzvfbeKGryW1hcEetp1g3uSewqc",
  "key9": "4MAc6ydKBBpDocP8toN2zuuELdxkNu8cU2w83Hn6CbKbWdxSCcMVAzvvA63ViKG3PMcMGqvW1aA18ULQCLUU9ug1",
  "key10": "XBjCFokYsgpf2jLTR8m4r14FRsAC5SfaY2GVjo6V9LvrocEwKbeyUWYq11diVw8AfMSz1VRkkCoEW8v69mEFbWK",
  "key11": "2R4TtbVM7mU1VvQAp8YTRE5kgVZ3vxYfbyWDWmUGKn1AazdchnaJvtwbuxcd9joxUP6y8xsePsE8p2mop2qV3Vab",
  "key12": "2yUQ3ehndHxZwTSmubkA9RkL9C1uyeQmf7soKAoA4HV5pECez66ReGsByfqYt8fYYbiEu3k8ZZjNsr1bDvq5eZa9",
  "key13": "3xnxwb6sjyxL4oScteCTmXwVkXmJWzgkeHWUvSQu4wh52fWUjoN7PRJWXEcKtv8PKZdV8CAwqqqZFD2cUDBAjZfC",
  "key14": "5YkfrAinP66JkpdKrG56iohiFJmLXxn2dcwSnkrab4YmfAHkph5Rf5XSG8N33u3ZBzav5bJFSRR2TJkk2Rscp7N6",
  "key15": "6FA3fhqKbmUbVy1o6eFrVSLAVyCMK3GVHrUeMiuVHrY8pRghdQm4LTarayAkq3aHFuF26FMfbGvEdSQYFXTNcRr",
  "key16": "FpQbGe8zUHb1BH8Mt2DRSxT9KqW6KeYkRzjcpbLSdwtDa3WfM1SzKX4r18hAVbXmwBnfbXk7V2XMdQ4MNHs93Cd",
  "key17": "xM6sVC5A5rRmzvGMd8pUgyvj7yboTXc3CrNQymcjVLQrktQzabUyhfa8kAU1JAUaF8jxmQ7McygCRJFtqvY3otX",
  "key18": "5aWdNwB5f4quGRWphAYtPJh5k6j7eedXbFJyLi9M2n5btSEuSyyB2uY6q7QatKdGxUuVTLYtk9M68bc1bctrnK2J",
  "key19": "o7KQLFFSDHQuymV9ZW26YkqETF9T8uHGaDwMaWoicCo5zNmEVCWbo2QHy6iVrihGcssQc97yvnRRmBfssopqdD1",
  "key20": "4tTuAhWtDm1UsWcY7z186oTxZdwPnHGVNEBBRbzRZjDKCT4BUifNAovi46xJE9HWst8qwxZkDcPDZxc4mYpDSye6",
  "key21": "2LNxYKTfYu5JMsNdYiVyXV4FCGfYwhHzcY6ZYMChqNqVXzcbfQmAWfu5MQPz28k1r8BZFmnAzyJhfi18mL48n4j7",
  "key22": "3gwjREPx1DPyhr6wP2FV7HneJzKWTWThH7KiUXPAKmZ9hfNo21LJeTz3KLpNyT8SRNJQ7XY6ZV2f6gMHZKVkg7RU",
  "key23": "4GEpBD7hWQZ5YeAMumQBiZ5hyjJ1hSi438FfE2v3Q55Erheg1kcaADzCVfeoWx85jeY3YuZNCic4vDLpkJT8QiFU",
  "key24": "2i7i92924xedT1EnfvJgCg55621HnRcPUvixh5UekeoLpzU8t4TM3EHeDtHwZaRkiSTj4jCKdQcv96ZcNPhaTHCs",
  "key25": "433Bg4pA2b9FAqgZbjXH3YHuUVahDCg5Mr5GTQfyoFmQPixkDgMcK1v8iJtdtgxdCsxxAQZHLc6gvGeD7kxSthRG",
  "key26": "ABQ4dgEZxgPgW55y7nbJ9WFSXM7yPiprZwYneo2ndsKf3en3QtgYEPDiCy8DW4cd1eGQoNrroK9SV4VYt1AMkbB",
  "key27": "3i8P3dF9um4LpBMCA6HTbhpytGhGmxU6FEEqxaum6oiTaPNRU5VoeeExRdZgbL5KGCRiiv3wgcCHaz4Xw7Pz3zcG",
  "key28": "2GEzDrP1MczQJcEkBsRWZ4wCR6y6mFGkr84KThqXvonfNgK38hLC1e5ghi7HMBBDxrJKEkjAXDTgCnLfc5bqShCC",
  "key29": "46JUCoUT7pScEJqe9ype6opmmrzZgvSqpzRcVETyYXyA3tAEw8uEdGWREFASh7de6n1L3B2oKxam2LCo4GMSK6jp",
  "key30": "3wDnCqD8mT2pXqkhqwgp2Qi74tHU5too2LX8rcvfedAi8YFJscDSmsoiUtzBE4ZgZLpLyKGTe8G4qRfVr5MXS8oD",
  "key31": "4A1FJNZuHJokyb9ikwRbaucMsJ1sdeHbX6tiHrug3uPVXVCidi2bqRYxVBi3v1DyAQcVn5GGQawJ55vpexjHS3zs",
  "key32": "5Zv2TFfDBvmymphGd1fsiWNYwqysZsswRCqP933BWd3GjVLZidBRdFKcqULsRSV6XM1cTQMz3Eyy2dYsfSQfcDaa",
  "key33": "3WSfyCGkrFyCC5sf9mMAobcFzXfUigEaBpJbFNyZF47qVtG6iUFVAXXeUqPKno3neK3bkLAVQP7HeoEqxxgGmzvz",
  "key34": "4EvTmEQnAfTB8LSSD3oRRb9V3wFisVcUiXuq5V1kxkFS1Uv5VPuYdiwHUPxNz7m28wGqj4Vp2qdg6C5XsA8LdytY"
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
