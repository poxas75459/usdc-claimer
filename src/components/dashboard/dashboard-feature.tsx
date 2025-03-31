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
    "3hqoALwRLN4gZouB9CdRDZyAWmEAhGytjese1Y2uRYGFrH9x9YpPVsUnPJVpS9uBi654MdJnjz6EMpP7CLUsdqSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ZvK91P6hRyCqX2KemuzA81UVtVrtiJfAKJPe58CrqWgRthGA3MGFUSXFipjmnuAC8a6QywnUah8NmGAa4Ku7mj",
  "key1": "5SCnWjgf33qLiff3yJYiA4WipM36GPwKYYNFwCTN2SWPj2G8EcV2MovNvvzk1KEHB5UjPLoShHBvpkHz2gkPrSeu",
  "key2": "33kpShiX1QzXrpSbdrieRnjEU1t56dnfx7pv3LXyGTiTVk26Ddck42iiHLAgLRXMh2YpuqfEEFLqdjbYX3B3weEZ",
  "key3": "vaKxJpom3nb5R8p7rNWAoHfbesaTz9Gdxf7PDXqFcDgdYPDsU2hb5gZKSwoax4qdZLrTNPYY3yW4aV5g8trjYom",
  "key4": "3dRTgwqWSHD61QsTT4FFswyLdbBevN62TxgqxLNT95xii1agX3CHEK6eHVyymyoz1yUqPmjGnT6P2xG2UrHJm8YV",
  "key5": "43X45JLP2Y6KdLCYoTRtm5wo39VVXHmagLjyrKMpU4K3rGkfcivz4G4yREF5eDgaBBhcCGTDqLhvRNoHQyZwQMgE",
  "key6": "2csV8RSidzhu1X1qUNs1FPKLGb8UaV2YQtbm8E18VxbiepKVQWujJhCpZDBanUxixsc3ov6sfY3Q1pbpjTGnSwub",
  "key7": "URh9Df4aPan1uZBs7e7ALFXs2GziWQnWvKU6ttfiydNnXdgfbk3ECA2rQxhihrGTqWm7MVveq3bdRRwT9b4TcFo",
  "key8": "5amCFxCiDjcYSiwF2jd9sDoPbBdyVy61UhbLPmF5JmUsEozh8BPjzvorEdWf87ZNrPHfxqmP4p9tLcswJfa4Dc5b",
  "key9": "5vhJ9JsaGBBv2fadHegyjmTFVrPPstebEq2VL1gUcBzbLoGN1iiWS38pqhFgrecVEEpYAksMHDyTJJMkCpJZwV8n",
  "key10": "2rowMLntp5W6E3feUHE7oMYgFrnsJ7Tc7ScdjTR6pZVWbpKZmPNAtM7BLJX5ULBy6iSYctd1Yr4EJVp9cmmmsEjP",
  "key11": "3J2JoKxzC335YfSrogXqPe78sMdmuFPJuNQgWwjSMRkkZxNKTFMKfJyc5ZvKiJbGoX5ZeRyddr3YaWB5VdxJfNKh",
  "key12": "4eGnBjLMRkz592Wf9eixaB9AZQiKEZfVNhNza41JXpieUNHhAvfpwonZdbJKgPTaaQWbZLxQ4M8Ge4MrmWGGBCBv",
  "key13": "4xrPyahvN86FZiuGRvEZdru43dXUyhC87oTNqBKcJdRydf1wLByUEJrsQjLqD3t9vHyJt4cAmZVy6Wf3tg9CqJ6e",
  "key14": "4NJtve3PhPKDuyQ6eVZEBgvrPVQ1U8mLMPTg6L7s3JG5WhX2yE67DBvqD7TLmueEA4uQGsAczyBYFVdWu8y61jA8",
  "key15": "22sdbeZcMMTM21wSpMzH51i3ttWQq9DJdR2U1GU6DoFHtuhvGMupQWgCxEy4ioyxq1aEw9ZKrvkruu8b9dkW5TGM",
  "key16": "k8FGGxxX32qYJxgv7JxNjz4gJzGb29UgtxMD8YCA7nobuRWrTVjj2UcTz1RLvjvtSxBwghcSYPo3MfiqA4GPF3L",
  "key17": "2BEoZjq8STMF7KLkGs6HruJuHUnRSngkvNjBfPPmJe9n1keGyDitiS1mM2uUPAkU1AbVzazLsCNUR19rPY6q894T",
  "key18": "5ezmvnXsUVi6B1Vp2mDEUTxvHz33rhVqBXdCZ8NDt4gGK7DRv4YWFaL8VAGmy7DWtNmeL3ypW2XmHBengzE4mJVW",
  "key19": "32Kv9PxkwHRcXY3UvHrs2fyraiHn5qRYkMru6WsYumoS95ejAT1brQ9dpF8JfbrdtPHFRypew1FZiv5hgFHCoUXN",
  "key20": "6fEneU8wpQhSR9sGN3mAYJHHrBeiKA3PgajiRv6HGNaHqd74mPsy4pP7hfXNc3PjAhSQxpoowKwC77y94WH6tBs",
  "key21": "2pab6h9tMXpCeAnxynxZxPWEAFamk5AZCTvSqzSnM3YafsapxaS8Q4HFMSNXJEoDGLfGQWq8vChafZRAp2rQS2Vr",
  "key22": "3chTFQaHT8VhNCajK8HAGmNQzcxrxZZ9eF7VmqbkA5baeQeAJxu4thzjJi3y5vekcjfBzN1sgRo8j7wJjC6wYssQ",
  "key23": "4D9DfzH26bF6MGS9KXcydCAoZYQhwio7QEZSWhq7HZaLKsYKu59mB2MgsiMTFcf6u1NuYWcZLQqU1hteJUXqqM2K",
  "key24": "1EiN6QizxHevGxGRMN6JHPzkpVcgkQH56qGdQ9u2fiXxnihd53dBz3ujBY9t3BY8Bb4SseqxHH4nacKH1JReBs8",
  "key25": "hDpaoEtq5fu2B3AJtY6rNbTgt39nvQ1b6GsxeW9foPL8o6JTaUZ9RySMSjVLXz18wc9adZgCUpdLjep9gjSUXeP",
  "key26": "xiEJJyU2HJTnMXNi87F35K4PahNNgWw7YkmsA5owsTA7XMSMZWiqr93vVMt4CwhctbrUHtdxXsY5fTyXJRiuf5c",
  "key27": "3krxjvmXBEBfeo23vvwHWueBg1ZpL4xkvNS3iZocqXcaoaLmwVoadRSy34bJ5poHbc44K9bAFEyFXuDcCJRtFhDM"
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
