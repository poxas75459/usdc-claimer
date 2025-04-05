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
    "473vERVp46nBWHbDkpireA7gNgJ4FCSHLsMGsPLdaRt6KWqaW8LV41WDkF2iw9UGFyhcJVuGiRtx8D5byF4Rh4hW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LpkHcrkQtCZHgtUNyvdRYy7N5r9S6VE4EDHNKLtzY61zKQzCkWcJWsLcd3PRPqQHGabSjcdAHcQ2RpFUcSNqe6f",
  "key1": "3tpPMeFVcSsBe2wp4XAFLXEwHcNaxtw8CXxkkHVgMfmZ7ZEuTTJCAdtBX3ywZY2jQquwErJa1xMGhZZnZMTNJFs7",
  "key2": "4iajbRdge5WLTPUoukCRhK3n4f4VwrajiXTUp6SGw4W8L459iLbnBVsyJreQUU8SsaXRPR7eXLKf7HZ1tixAXk59",
  "key3": "4SmwbQdQXxhfiemGkhUYue14hU4qoZQCFPyRPwADepKKY85v3aD67aKfGF92x4LNhfNDPV66DraWBrcAn3neZbnF",
  "key4": "TrvdXgo9yKcRhuK9nHjoj7h55j2jLGXKefkyFzY9fHeFHBNLA4Hp3uSUU9dCHDYY2uwgFr1KX6k5dj89GP4vTBQ",
  "key5": "zaMBDeaXGBUdrcLnGfR4Kviptbgz2E8Hv1fHwpTdpJu1M1WNyfCY3UyKjPC3svc67DXKA3oVFSrAxUMpXGrkhN2",
  "key6": "2XqNcbMpngkCfMxD4wNLibF4R9dJaahjZMo4fKtJFJYQH6A68yYWKpKWPqogUE19b6dYyutPWX45bREJ9tqZJjcv",
  "key7": "73VjuE686EPCo1MYERDSRvu2KkNedTPugBbXHf1eAzinyDGie5c22WHiAUHg6sZL2iQiW6QUpFbA4xU4XD3Z7VG",
  "key8": "2f7PkrpiuQzXbVgqWUd9T5gg7taJ8nRjLPUKJZt5ba1PEaT2h91pi4yefbzsKRWcCcw1RZfLwYX7R7KMEHMSRGuz",
  "key9": "g92YEm6gwfE2zD97Dwt9jsqS6EqNwavUeetVrLtNgYdgRF1hHmneQvXmybLhodNicfB98EmSagRk2ZPbMrJ19A2",
  "key10": "2Gyh5mNHb8KmtsdBqnHz1awzpPhsRL5mht3tasSXb2ZpMQ7JGnBnZJMbyqHiKYEMMbMhS7CjiDoVZ4aFRDtrebaL",
  "key11": "3NEyemfPRzHEnb96fYGsd4Gdf6wfUoTNjBkAkTrKgbg64X5bsGiNknGSSaeuH8d7VQ9z7Roi3AUSE1ySwR9reFE9",
  "key12": "2DmLFVygUHo3MxafN8hvkbuEhAW2K7F5our4ZAnwpk7ZZCNwMrg4NLCrAbHHsZbAiaErebuAsj31v6ZDko9BnsPz",
  "key13": "2Q4hUscCVA5Zn3LACVfygoEGeKPyeftR41rjbk8fDBhoQJriyrZ4nJjzxTFF51sF7cdePCmqdXJUk7Ayzcbv2AVR",
  "key14": "5hEsitRBjxUGdkUYL6RP96xpme2v7PEH9eG9prLRrLZSRRFJRvQUSsc34rVX2j9qyG2VPAaJ8tHkfy8JrnzJEoMR",
  "key15": "26c6NiTQ9sLFSTdLgiHPxBtMB5CQqUSU5Gen3pDgvU6HhorwetZCHBEy2GMBZsSfx9sh7D3V3ouH6mAtTYRNDsYS",
  "key16": "3wYoJpHr1ZbKEpDnPwXLNkU1DbisHQMT6ee7hED22BqdNCAuuSYcib8bHJLoNy2SyyZ2u8zP8TqV3A81YFq5XgU9",
  "key17": "Cm1ET1VtyHEYXaf1kjcaJnLNpKthT6DXbgFhQ8xCvFZmH48r5M5dee1LTRX7R3ZTQaT7hWzU1a98rNwnRjszxQG",
  "key18": "4zgdzccoRYV8Bezy4rzJBmW1E5RP46AiMDSariL7Q6kodKz6itLFLFtTAvRmzTCgakv4hyD537ni1zF5oUzoJX8k",
  "key19": "MxxJf2q1KQUbdWkxC5wHwXPAN8FRJFMkKFA3i35GEFPtxvVzotFs9rEhPNsLNapC5YEPDX1H1FyGBYZ8rVbnreS",
  "key20": "DijniSutaNUUQSXT1JjQQs26fTc2eiNYocSAVA9FoPvJi8uNPPomozFx55Qra25pwi6bWku4KmzQyZU7aK3dnvt",
  "key21": "MeFVYGyJjqNaoqi7XnrTdUXdjMN4A4QMQDxjwjjqD7G4M3AgryQXDLe5SvAw7U8nf5rUYjgDnkWFNgKKRxJeeYY",
  "key22": "4LFpHttmuqFifoYh5mettn5Nuvg2wRrS7bZ2Bn2fNpgTDDAhsYZuywzEv6L7JZQ5zLzBmVqUq15UoER2Qy6oQB9t",
  "key23": "61D8HrTDMyV2wBzWekaPFu6twqLuQNFLdfNcknqfXdmdTgUJuMETrC357k86JTjcHvMq7fAkWCyGKbGdJXtQgv72",
  "key24": "3bZxJiuVFNcf1KWvF79NwWmoWSpzTnjeJ44GhbAbvBxLAr5yeJtR8Y27QCEfVHmVJH8USf2kMz5rX9PicAqNWNiA",
  "key25": "3DqSqHkEpEv6rFH6WeNKmVWsGrqVYxPGcbcqkJBThUM6ZCim9x1oLokYfxraCFbUrA9j9ZHeFzf9YBPvHU1Cfnhk",
  "key26": "5jpC9ZoGJKmL2mFqKz8cJeDLwmQxTQ6RRCtnpX6KZ8aEA29U6vi6TL5BiN6uBFWvDWcw64dVoBPVBsQZwXT51wCW",
  "key27": "4A4JcqKN3DSFaeVFnSwLwXQzvELMLsSysCPxW1e2qQu2hRtFYv2vXx1Ygt7vBkvyQ7mJFfV73wxUxKAwY5oxGeYQ",
  "key28": "efGusFoYvXinq9zvhUUgAwH4CSN6eJsAK9uKEXNVdoaNxRgHhfSTAvNXGiwoWZpmNoFbUSoKcaMb4ApiP8VpPeF"
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
