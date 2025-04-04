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
    "52R9MCMstmNgRG9yv7eu6cFxc9JNG3M7GwRhN8tSjNFQpwCnWEEnRpFAERfg1D3jAqcQjd6rRbkFv7evNPNhtbn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u88izj8iWUoSLLe3YVNZSWWwfAUzujxjWYfemzMP3b8prxyJsp8viTxTte3XycfB8KKBN9XQjPyKV2Y8h2WfurY",
  "key1": "25JdN2KBhB7m1MmGsYmdr3TEv7dCaJH5bb4x61ZNPDwrCqjXesxVnpZUyk3MAKDJMvwxPTQuxtWk3QpJyBcya91J",
  "key2": "2JhaLS7dmfJEEeRbaEBtKDaf7BSzG71D7DY35YnjoJWuaV64mZ7dVwpb1TWR2W5Ac4ud19VEJwW1SFL1fvpiSDbX",
  "key3": "315EJYAkbh9mcDJSmK9LdrSpptof9cmUBa2FXowex6VWsaK3CRTixpA8kXDHFCK21kXvbPRTXyoxKV3DMzMZJF4L",
  "key4": "wiQSju1yREvjioPATaPhULGhguRSyU4nwwqS1hCKw5SX7yFYroxNZZ5JZkSAbbLC3NGpoJxdJbgU5LsHinNaEyZ",
  "key5": "244EonNJzhHoMEPEgFTT63c95ko6ocBYVwRyiQnhrU7CWCw5VGA9jADHWDLRTQvYrL1pELYHnp1WivTtTeRWW81b",
  "key6": "2GcdxcqeAQ5QdKnm4YYkYn2wwjGFbZCkuTz7P7j6984gngNJ12H7qdJ7EET54TofVWBebPwEyNDCW2tjCM2tzgyr",
  "key7": "X3VX7eMfojPPYPGgrMeDfk8MRnzGUsswXYzvNs6YvLhdoiWkdNjDbPuPQ7bsLDR1948onxvX7qo8YRDvdEJjfzi",
  "key8": "4eUGgx5yBh64Qy6D9ZG3PBa6Ge5dcypoXrkyb22P33awYdhZDgjMpxqwuQbr2c2mXRP8yEyHvrbgtGw3fw8NWDkY",
  "key9": "3zK7zfw7C6o278mAf787QxxCcvd39tDuCTv4m268Kd4zowKwb3rhmiprpTapMR34jm5QUskXwe2RMRAM3Dz4bTSL",
  "key10": "5NBv31CrMuJaySpRKguDeRoNzvePgy6n1HbzmBwHES6RHV7kvg6MCzZrJE3DzGpSfuYfvV4x3RD6wfcgzB41txpj",
  "key11": "4ieMCdvnrGVB1o8NwULhLMCCJq9f2TS5CYJSdQSLxvmtdfoW3Chx7V7tthy4yrK2LK54T5ccro7xuMyLnojrm4S1",
  "key12": "5ScFbp1nFV1misksDLWuqoJ8qpR12hrPWoGdXJyUxXkif28JXQndMoN9VQL11g9GZ5jfRJSoMPfRCc4iN1vEfJ25",
  "key13": "2deoLLxeGDEofTpJ1WXmTsXBV6dRmDdgqp2VEMG41QCNWNF2vnb52dCij59mdUDBMpBQbc7xEFccHv2LSCM5B4Kw",
  "key14": "VGLYywuHEURjGf9xPW5e4T1EUcnqLpg1x1ZUrnrwQgGrcCrV29ECGYKrwa27Qzuj2RDpJqDg3PuSRsHMNz962Ww",
  "key15": "4Xbdu4iwx6yFmKVtLBkbarabphh2tuQLXqD9bC7pgqvZNJs5qGBWbKQiFjLbZvw8eo1QjLGR7jeuL4qXukH2fBTY",
  "key16": "58xWTouX4CsUSXMKq7AV3oBY81KLyHdizmPZxhP4h6heqHiz7X4KUYDkejNxuzNKqeoz39HS87DB25An72Rw6cgp",
  "key17": "4kZSoiRLCTviELGB4DTNsMbkk2jHh7Crg6n5Hs6QfPFmD5g7LFUfcQ5NJHtiFRi4KoCsvAV3gEsVUmPqhLcz7A1H",
  "key18": "4nBkbicGtHiDrb3c8y89gdu7uHa2SY1myVH9WyYwCG5D8679FeC5M6euyD2V4GKRwvhsYxwvELXvyaqnwu7SHTEj",
  "key19": "2UmFStcccjVCaF3BJesqH29wqiG2U8p8U2DDVgbXQxDFmXCx7yGUhH7TPGjn4znw7vvnEBzD7NxFdGskaGVyJUn3",
  "key20": "65CTaMZy4U5KPUwK1GipcDqZW85CmhGzEiTvyi62UCoXN8xZfb1ZLtDT45TWcsceyvpH4vCmsH4iEvKi1YHTrRQ5",
  "key21": "rw3bnL4J7sb1cjpmgmnYkrhs8mtfJNJda4pkHM1W4c3C6pgRjmTwb6vYH2L5G55K8yeXsoNtkthr3sfMVNc3sBX",
  "key22": "3UP3cA6yX2Ah2Bmftbu88uRWfcYEuCzxdvtS74Jb5hMhVxUpDapDJUYvwSBu9W8qRH258jtXneTv1gxcWCmjw8cB",
  "key23": "3U3Vk2BZRaVQYq2YXyQyJ7iMnFZWgbb9u6syoWgLS913bQme8VEiqn7UQX14mwZgzwD6h9qC3q73V8UbZsT4zhoB",
  "key24": "32gMKdpGNsM4eJGiSBveZVF8yEX2zH8YPHXFkxqCokWSsvSvGmVN6AzZg9fjR8xy4D877qURHbsVNTADWfakZrUP",
  "key25": "5jBEBJDynqR9uAYPZojd6ELu88aVSeZHX4TLxxJuU87xHdg4fzmyhqfAmocRPMitTjBV1GVmRxTMur13fZzZ135u"
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
