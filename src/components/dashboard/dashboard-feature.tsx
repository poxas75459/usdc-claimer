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
    "4GurT9DjZmpXoxiJ2Homn9bw6GSUPuz4MSMKh5JK2bFBY8SagULGWXYHn4bsacu58PpoN7yCAsR4fU5nwyrNMBUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ptau6u8Nkdj4yGXszYuVKX3bHnpWeSNje3LRuvbT5fgJkAGQufCRfPv75KAkrj9e1rNpZaoJeXc3GqLonkArtGv",
  "key1": "5FgkG8YmbkojSuQ6FzWFcHNv7zLRFNuUDLmjhdAmRYz8SdxL5iE71g4G5uPuqt7MiYJnrAiBxJbN6mUfxHvztKUH",
  "key2": "4Kmo8bJfPFMSaGdeWA5oTqHqG7vqdzsg1fftjoncxvXmxoQc68sTdJ3C4RGH1GqLspgcuU41BoNDdXg6KeC1aZMv",
  "key3": "5ZnZpKW3vnzeFVjc8ofxkSSXtgHKp61Av6Fpjhm3LeEeR5NjDH3hChBEBPa82iuXaQU5FiHbMbd9NwLpSQrdgggk",
  "key4": "3N9fBV6NiPZUsr2BMYHKBM1x1XXcwkCJpYtepvCrAtXf2vmLHt3vDvucNKXzUfqfLMobariBCVcziNWGAAqD1TbY",
  "key5": "4SQpRBPejPCrWqok9XvGcU26Yd77y3QjhdhkwxZtHEZAtJsFoeR4BCEc2kT933quMWN1PTdZeTwnXNHtrGinmVrV",
  "key6": "2S7hPzZUdsXevsQptfd4JijKJpmtWUSvSSAT51RbCn6SUNt8yrbf5x3o7Y71EJbzUHUtHop84v2Y8AUoybHvzwcE",
  "key7": "2uHaPgbwXTGMgRFPryM7t4rsH3vhVszJTjkjUTU5nnVxTodKN3qeUYjiZzjWScmeegcdgsXawxk68smytcmEHS9p",
  "key8": "2g8mvuEGQvaF21deyEjnHwNWzTZQoEUN45MdWEtLCdjLwfUUe4V5iaNvhwzxurrYNX4RtxCRb75X6DbAKFeRKQGN",
  "key9": "4xfyBFrCMP6edgQzUwteNaHhjetVnx9rWoENGBZweQUhADp78k27UWZ7swctpKny8qpSYWtHFBJoUpLGsy2PtwP1",
  "key10": "5NtPF4QRirRc1EHFnTeaJKvSMs9ZxRQLjCGnh7vFK4eH5Q1jpVqWMSVsCkAdFSD5oWxmo3By7PUW3ZcJjYm21r8M",
  "key11": "BbCwMKkFaQQi2SJJvWkn4HvpdyWLUHhVtQ3fm8tXPLWU5KVAEvFgwGiozoUg1Kh8YHXDzrVM7amjnswqvvX1ThJ",
  "key12": "64ipSJrxwgVkB1cYZJezxYBp9cASYfDc8rs9HUfEYf3rZEgcMik3AMsKUZwnyVdBVvuDkyUA4AY4mBWehYWSu3MX",
  "key13": "DXUkp4yWDYjPx4PmbXo4J5PZ5fGu7gZAkjX3VAaSsRuswJHKF4cCmv7VoJwMnVukQLcfYtjCchBJy6cdnQqSGPJ",
  "key14": "JMhyyMEGQDEFEBWbDeePrsrH3o6b7LSortA4vPu1Kda4vvZkjTdxvuWkCxbL8bVLKLE3r4ktbAvfacJ5w4im4u2",
  "key15": "jYYV1xGU8BfpZTwD6aJmQqautz1HFHsGqWjraMPn39LkmBP8xjn8w5MR561HemrVbCxs99n3EGbYJzEXSnjnbR2",
  "key16": "5XryM1Q52rnugHhrhgpJdFmUWooVNR5evJFrcQgEvERCSdPZvGkQwXExebqwakuPjYVF5Rsq9JGoDKV2Ekd2PB3A",
  "key17": "24U2KZqifsCPh3WyQYCpXVwxTBRMYX4qNLVQFZF17zPSdD2RKP43KACsXHrerCgHpHK4xh2BtK9Euzs8HzcEEQ5m",
  "key18": "PEmkcxSvcVuMUn5xYwsprzeMWhQbnwEb6gqZoJfJUJWfKMBLyuRs8FSFf93a8Adjp6LRiNVysM4fN2X86org9WJ",
  "key19": "275FeTUhU2nLs85oGfME44XK98Jk97JC69b4ayLV3z4Ad6HfDPmmVt2u6NZ3tovL8iQmAYuUL21ud1wMhoTz7fbU",
  "key20": "29RHgRoQ6bJuGsHJw2N7CpAKDBZyu2QnhjWjQFxNURjdVCK2GfmAKpqBGNpMC1FLH5p4C4hm45hsoyPvbg8hWJpn",
  "key21": "bC3Egv7swFMq6SWsVQBjTVGAFqyxNxwVWNjAbSXjsEXWXVugxmt46iy93f3oNvzXrtBviCuQKPTnnTSaL3fHu55",
  "key22": "23YBAEqnHVzfZ8JEqFXLKkU6JtiPutxfVdyD2NYGrz5DgVAabEeN5NgRsuGBdo71aQJNfyDdf5EUFWoeF7aVbHjH",
  "key23": "2319LxADcuxSCXcyNpjkhjn9hBd2YKdPeXDuSV9d4JNS5S6AqK4rKfd6ygXjVkfb4WwsAmNSrjroxgNow4RAg7m7",
  "key24": "32Vc2PEi19Tdmg9sT8o54BZJkLEw8q4Aq5Fv7HxAgCTch2MmakGDSwW1wUZb9G84qB58TzfHUMX3ahEorny9iPtJ",
  "key25": "4Xtip5HrA3AEjWGhpKQKrvBEzZyYMEb9nu3oQnNqy7GAY7TXcGP5YejF3gWapnFZ5PisuwRxz98hhMZPNvy45eJn",
  "key26": "3rwwg68YZRRqsRQFr14SoHHp5V1jz3JnDAfQqvanAJWqFN5iXefrLGTxno52dptomjv3GdQzJw5vXKcBZZzGADBM",
  "key27": "5c19SYcddsvzpu7dbp6jmhW7MEFczGQPx1yfvMdsLYjq6qcpYsCGUP6s4DiMUYKXaB6FcGeYAYTgRSF3otJbFxQt"
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
