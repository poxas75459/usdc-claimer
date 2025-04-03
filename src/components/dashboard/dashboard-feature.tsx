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
    "eRvJ7BmhgbE59wdUS1XFrSVg1ok4za3pr5uP89u8MjSphwnWgv87xwKNRwsM5ucfhK3EsgURgwBKSJ63zuqwKFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mihjx8j5CdxL83qA6eigSU8PWtma1jE8doYmXKnWjTZi23HFqpcCEgAavkR1Cxu6ZsCs4QWRvUHD9F5gTnKhvDx",
  "key1": "2eYzhsmTreY5QoXWb1MSThrXy5Ze4KHQwCFrLmArSYotjQGbbV3jkLXxKBGFkmWBwm5z6E8j57qAQMaFarjLmsvM",
  "key2": "4td91uqDbRqsGGfbJe4HUP9QkmDFQde539NmM2bpLCb66KgzyVwXDLQDnjs7oWeNFGKX1MW6T5uQvvGDEZHYBjGh",
  "key3": "2KUm8SMj16KJ6G4tucjxfHABU9bNJg7P1N7itTG59dDLNDQwthy1iJzZxm8TXreobXNK1GWBL9SXruP4NgpvZcAM",
  "key4": "54JYRDt4VGEkAudDq1m8J9t1mVJM7ru6Q7QLLZ9mn7J9FEmCPQJK8B1jpNERyQDpScdWEYjQzHUqtqepT2mehKUk",
  "key5": "4SjTg6GkC4GuRV5bWSuZze87vyDpfg5QqdL6MttYiD6kD8xqwq2haXSzZttpTX9GLZvPg35XEnEfDqSwd6VNmNSU",
  "key6": "5V8oDBodJ1dy7XBocpJrB8g5D3c4kQNyHdhHMdE431ykvyM28T1QrYh4CtJPXyd8KKQzN29oaBn4iePLUEPtWLQ4",
  "key7": "3GTQXFx536jwV4WCeirVmcLwyxNagywXk5kJEsFMHBB9AMrG49YVoJwG8wPhexDAdan5kVhG8wU4GnhifMrEW7dA",
  "key8": "oTKzjSRVJZHVMo4gbYh1wSwyDSFQoEaLeoT8pRxpSdMZC6Q1naq4cKuUcSjFp9qnUgC9iCakrDryKLdBoh8X6Qu",
  "key9": "4ss7Dfwn5CQfwhf4dr4iDM83Y11HuvJWpQGxPJLFhfZP2zzPQYTDudDFJyRjikruiJ94WYoKRFTTpMHEzJyedgw6",
  "key10": "5BVE5VUtGEoxUdNpM6vDZyVwXxvskYS7Cwkm8G9r4VXwb2cSCP9SVrFvbqRgaKTkgtvnrhG66eFgYp1uonGW7yTL",
  "key11": "2xj5uNm2GewgGEsX3yomfH6tnrtMKzjg8Bw8v2ovBy5xbrpVAjsrtFYqdFbMNCA6DXo8WdwQXko6EkAwaGx2WbKY",
  "key12": "3Asg2w2cPorQaMo2gfLhs42YMjZCFxUZGC9U8HgFBp6W6X8c8xazrVhfccemumsuqC7HTYH6ERuw4sbxmhj6ysBD",
  "key13": "5gKos8fBvN2jExNYeh3pXruArtYidk5EQAFeBmLLSafH1ZHRu2NEivgVm367DEXfJLxryebQjJ5STbmDKNDhmT27",
  "key14": "3qN5sHkBuGdgjPGt2A4JtBX8MXWF5UGebtpt7qnsgfa2zPiuFMCdkHCk6gaMVsRLz4p9uBfVeLviTjqAYTy5nQrh",
  "key15": "5Lcr3D2ndJ8MVFxtXykyUGat8qYLbKpWbLPfkHjrYV8Zyjmh85UNRNb8TSReQFPdUSWw52xtH3tnbQkShBjLe9JH",
  "key16": "2h1PDLj97DjevsqA7gvLYiucwJfCgGsbg3agwsY8pBDeqBxoTfFD3T8hSc34StYdi2kHUgdwERDiV5eW44Fp9Rm2",
  "key17": "4BDfdZV7cFP5RD5oMhUhcSMPzbktz2Yc4q3nsJ4deQ7SycBR794hb7jkwu1aW9oLkYC4JsxjTca2CPBt7DVSb7Wr",
  "key18": "3BqP1V4pP5PVFeyKC7pmvidNUarXpB6aAqxYiTmEauVZKz2qQFPD7nHYz4ttXMuXQoqR7DbNBmS63bUXE7wgryv5",
  "key19": "293utqDaKnZ51ybekDpwBDjTomzJZPEEupf1aSxscnwuczJ345svdPUXi9WQTCkVR5h2FZreQTfeC6KN5YmC7kzW",
  "key20": "3AgQU9FdJ3J12v8t1WmiyUtJz1nn2UixBRwFCRx33i62PvYxDdmU1S52tXY6WN87Hr43Sd4ZCcZ3zBKauUJ7UUfe",
  "key21": "54s6DPQaupV3zsYzVuPPb3PetEa9AEGykRnW3UqrcFY7BZ2o1yo6KHDdMXrGahT3xHsJif8etg6QkgTkAwNndY6R",
  "key22": "4Vm8bicaWmrg7XcBkmZ1MaX9TXCH4YBdpRHvXouZXQffUAn9SME91tGiTWsiWTmpDVXFCbkBdMEcm9rWSuTFGiEv",
  "key23": "h1SeoqYE7u3V6jtZ41yXoJ7K5cNFeAruNd32MGh351XdAw9nQgK1Ky2qL6Xevm93SKbic3APzUymiSXr92ibNQ8",
  "key24": "5BaC4SUcB6dodta5Epknk5xyqPCx2vYWt9meJwNio8ZeWvG9i28iSt9FPzMG91nidSsrwdF9RE2qUCzhsEV92pMo",
  "key25": "4JEsT42BWN1oUVmKSV7nwbogMPM3XsCyeVXUhcqoabKuwmqzJ1aeTFLJ2QCRqNk6EtRbVHHi9hb6UBigUzMgYTe5"
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
