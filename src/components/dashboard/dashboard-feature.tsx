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
    "5EygkEDQvxdtVSBnE7iCLbhGEbkpnnSL75AX6gaenUa6juXPfxAvcLT6R9Gcge8k9QSNmLPpRccmcFzzXZZ7A3gZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59zXPVjKkrwwcfjwXJ78QU4hRfJtfGUHLxeVonyWgtYmTDuxoVUQFzzpxxunkWbc4CXucGnQcW1F4xfACBDrT3NC",
  "key1": "4gnHzgro51hxd8tLKkaiQ7AAsY2sL7iPWQpG9AFbHZWWcJMD5Nvps6f2QuXQotQn6REfV7KPqpt8g6QzzuUN4nYW",
  "key2": "41sJUhcTnjh5uLxdxndNzWNPtPcTt1h1S3ohC5EMxY3B6LwTctenTVD42vXcZFLGpUffecyMoSV9WeMCRcKibgMc",
  "key3": "5vr6B7TR8PUMuTx2aqe6VCGspbREMQDCyL5m9YL3f2bwA118uMgwU9dsmNYxxqhWh9QAsePzCaAqFpUyCGKHGCrc",
  "key4": "3eGyyhPFg4NT1Ch4UTa8gNFpJ3YXYjNPqaMw6F1MZvx6RrCAQLoeYrDuVNboQgDz5jqNCkfY9hPkvqqh622DW4C8",
  "key5": "26EahQKNw1pxG9VqL12ws1ejVYiN14qivsb9B1PpTd7MmuHS6V8pQvyxZvK74HL8xv8jaXs92KsqjZQj1nQZd7gU",
  "key6": "2XJRpuh8z2phPheGhbSXk5yqM8AbtcvyvDCL82UJ9owH4asjmGYcrbyn3JZk75B7LPk2oq5zup2mAbEABuXPP2uo",
  "key7": "123UWTP34rKiM3tSYTRtx447jUWDYL9PiijZXnWM9cypsgdoucdpcUVTy41BC7hDx7KGLooUMsmNBmaPoVZpwuCy",
  "key8": "uV3Ck8TkpxNJVEbTnKaErYFbqV6gHL4qbgT5LpZH3E58kUjCCcaKtnVtzxhScLfTM3ZHt96gma8hLLqRDdqXXuA",
  "key9": "57WtRE4HEsMD7a914gLBzSaycETfuiEnzK6F8fJKJeiKmThK6JFmR65zBBzVWZpGM1Z6BcugR1Df8MRUWbwSnmgY",
  "key10": "3GMTa5YmFP71P2zVyvR3fepRtkgXkhECsz8dSkAkRFwvJQ4NWLJgDRXVkBpLnagQyR8s5Zp4SS8gFWwpQstDRZAj",
  "key11": "2RG1rJGXjuBhQfMqpyYsM5NNqyTzUxmVU462kUbpxcWzUtFSTUoWuiHZf3wtHG4phTrD2amR4kvdu1sSvzNL6t5a",
  "key12": "4YLRFRuS5nfPCNrDs5UUDn67AvWF3yjpw7GK2HDzu2DZU9rN6xWyrAqrXHT2StW4VPHp2AxtkqXfvaWwvPxDPuM7",
  "key13": "5WamWJ1tcaer3XJd7t6xDaoq49MJGfgAAjeKStE6kJLRJYj8CVPTEq9vDyDxSfmo2mkhjyr2JHBoRTd6aSqHcn8D",
  "key14": "5HCBKiy43uovPiEHtjkZ1UKr6p6LTw1ryrarHFfqqMi5Mt6RLsDfVgaxW1eC1TQkTy68Bh2c7pxTgyH5QdkkYjos",
  "key15": "3mHetcKHGCYGas23ZBTSqPPnze5ted2BSUCmFMxgnLncH75Yd49zYTizHiKQG3CRPoHc9sYXEkSbh5g6EW5ejAz2",
  "key16": "Mpx4Ni6KWwnCjSk2JN5uTrj8BpKoEDHBETMFDey6YvNHGG7HsDTityEzeYUZ6w59eCX78XktznpvvH5MxJPRBYx",
  "key17": "2qW1tkuD7mEAGGi2t2gT2ZWUgpuGs6xVC4e6Ha9dTaKUCv3cKNhabCUVvv3bBndoR7kpyWpUmrRBdrnqACtjQYsF",
  "key18": "jYthWmsWqok61UTBXjSM295CocSE5bL1SMQL9vyAT9U5ktohCpKUn2DiyeGPgmgDBTjoH44CLVeGSnzY4yXwPUS",
  "key19": "4RjpAV1wyvPZVwbSwT1M5RYuhn1zvcYGQqFRfjjxFqtije3gxpLEHEZgYUsLWD8M8J1xzPE6wXX8kVn6myzumQ4Q",
  "key20": "55ViqoxRbTfLSJWzqmAVE9jf3i9ZnteX6XW6FgZq6Nv5wdDXRp7HzHrtXdv5BxmDdP9nTRQDTfvKKVxdf9qhmLMA",
  "key21": "44DMns6kq2wZShbLnywhoG6zvSaCmqGhmwdBxRhQUqvkyKnqwfXzpUd4kZaag9yyp2NZWLBZku9aGKbw5E8T3CEK",
  "key22": "2hkshxMhqvkMC2qBZFtYP2NS47KSCk4GCKgGdzHBjLkn8DXRcud8oyQahMikAUsHrxMWycK4ozSH6Hzq9D5Yjt2M",
  "key23": "3q9wP68NSkrDLzRkenZUTupsiRHvjxEi9iLqdfy3k35i2G9DrPFvJNX8BqB8ZxcVDQi5Aw2XZZvrFngpNZWjdzrC",
  "key24": "4hCygaETJj8VCK1DDFH96ivUMrhzycw48hWL8jqQM92zeBpC4dq9eddWdJsWmBTQx2NwVqYs6z7q4NnaYffLWZH5",
  "key25": "3S3i57vzeBbRB6MAvgSDarKjo48i9XtzotgewaeqWTE3ATGAaBjt7N48dmg2BY9q6JPGJeJP1TpNQZxVuWYAQp29",
  "key26": "5tSBMMQairm1kpatZS3mxRtoq1eZYDTUBeMkdJH8mQrCCKP32of5nUbWRdX6EymBJmTBaSQXev8Smh8gjJsCRC8U",
  "key27": "3Pg9KEfZjLdJSfHhNs5FoWwnPsSzs9zazBQwcy3wymnVNkDFiEW5YjWv7UopeofBC6V22PcTGJDabpUxYYuhu73B",
  "key28": "2JFBdYBpHz1vN2EHQ2PJRx3iZ12RorqahNtLnynK8cNrs5sPPgUDVo7c2fRgA3ir5AJoGT31zR6sXHayiSrBa47b"
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
