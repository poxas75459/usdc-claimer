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
    "22vEYwsVjAuFsXkhn4FhcSNaVUZe4HMYTkPCr1SWLnAxUKWJZ9H45fTMRsjx4vbPKFmhLHLwKDVY6S6DnL6UoEvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y8eriRG3Cb7hqEdR6f4pMXKtvxQsYtStx3FgXSfpAypNN1DNHmHDQiWwQfND4jGxoC15shDSGKrwWoXnYHEUAiA",
  "key1": "2czCcspDVfKvtoQkKVDdGGQaH3DLvxY7UpzM5QUMX9K1rFNjGVtrAeGA4EVi2owpjDrqLkSuma6z6txiCjAEn9iz",
  "key2": "4QQ2sL8nLwLiHMesVsAbWcbjwPgzYP2StJ26RAxDLux3MZxg2UoC7hijEsL5GjimjxERB39kiq9juGfrQyjTgV76",
  "key3": "igeC7b41pzGbAmGqyx8KnByYWfiyNvVrud5HmSmkNYTRtBcJmFDRWbnxegUnDDCKzpBsPyyvzjFAQQvwhiqMoGg",
  "key4": "3txGRjQwEfGjLJUhnnfLFuPsHZzZR9qBw6bULjpCLT44tcjShzmpWuyFGpGkFENRNJ9CwMiXUDQUXXfSPyitTZCi",
  "key5": "4UCEXJxPkypDuF98LD7yZE5tk2jyoVM2sgZNUgZd16h5DFmquBQN76BWbEEvzizmriLDyN51edNNKWyueRDw5gBn",
  "key6": "4XrJHXKpKEfTWp5jMhXU98F3ssGWNH7B5KSnbeNm36H9VTB84RzMAkL75DQARZ2guCwJ3K8wfD2DrSKN1kkDJUee",
  "key7": "2zZWc4ETpLDCuvPQ3dC5hA463S2gYzsz9h64HTtBLRgU1aDkzuqj1jHTh1dQmEXwfhebvC6k6Lk7rUavNwQ7Wpbj",
  "key8": "2pV4SfrrmEc9ngrkLBcpbb3CHtBobRiMJRKeqvJPn2zZRt93cQwnQpe571bbZd8XVoUQnwEiAAqkoe5CvxKJC7o",
  "key9": "KKohRh3ceSiWqwb8Ht9tvD2v9td3wJYV77ysNJer71S1UjKtDgBYysSRbDPxbKnGJrbqzyDBYeHkwsmvk9MusCv",
  "key10": "4o7P4P3zuPxbERNQNEdT37wKveAiRJDZFvK88CbRMXyZWvcetpR9GDiSFhisc7QYyaUM3fRHUX4UXbH7YR5CeMZz",
  "key11": "2qMPoxGxauMJQf6xWcqsUiUejuskUS3x8x11y3zQ453aSJaJB1gYUSA6kMZ96Kw6mGjn6T7AmAdUjomk4bwKjCNm",
  "key12": "27sfyjmpodzRtXLoLGBMbHCW7QW7Hqner9SbL38GkedFzJAMwPDWZ2iP1s1Aw16DAFXX4Rr7gDqRG7sZaTmXxYc5",
  "key13": "3A5K1WZzuFB95XTgV8X19B39MpGQBanehL3sWRr3WYxRYTwAGNqipee3T5ncj1aDsS2NYp3yMrjXZAScEpfhpwj",
  "key14": "5MMqaUJ2JCwsF72y2XUC5fBG48KNUNNruiqBnL4WwY1hNEm7D2zm1cYdbhEF7ktC5ZGkRxtcaC3oHVzBscfynuk5",
  "key15": "4NC8ci74TRy1mRvTA1P7a4AMowqj9aYxKgBBPtzp69ajqRf12s1TLp2ceuVJEPdnFBB3eg37p6Rr9SGmGd6hv2PY",
  "key16": "gxg8SHzRtkcAZdSzRvoGN915ekuco9KibWaQZX8nunsaewNDLpQ1G1dEbrFpyEPacZP5tv8mDx8n7R4CS4gEBFD",
  "key17": "2i8MTVxj7G1V2dgGdMMezSXrbhjeZMBAnWMnPFzzKhMhxD1NcDgYDhxb2nwDwW2CXDa7mbBHaPEjSJvyHDum7b3s",
  "key18": "7qbyqyv6BdQr1YzkfycDvfRSf3rfza6BDjK554EaaPon7ipQpoZtHqokife738kuRrfyiNQ2RP9yrbE1qTP58Xe",
  "key19": "3MJBCWQcEFCiHJi6Q6z47N1wUTKyHx13n1cMV3aBRybDxpmGnU6vQMg9E3bCwA2y7H2Bwr6RVj8m4ZGG1BhctE8n",
  "key20": "24om47VFSiwtZe6De4aJr6gHf2tejU9pSYDs3YtWct7G9R1T795VdBWkMgh33ztQJiP1w8wHdxcjPVArpQ9mQc6X",
  "key21": "4rSHBw5Ztpfag1VC93qanaDE5ToSo8xpdcg5FesgcCZKYHUexEaEj1n7uBF9qdXiSDipXCV7HwjPiuGc7kyrVSHm",
  "key22": "4gyWsBrYjbRNrPeDDFQVFJoALMnB2a8QmRKfkZTVZoeiZf7MZpa6qmxsTTXqER5QoKsdH5LRE675PECQavPP53df",
  "key23": "64mcX3ARz7AjtwKJu7L7MXJDCjAjrNosepySR2eQL9UGHxeFU4cen4nQ5HGJDuiomywNrUnMeLG7vBFwCFiyZNb4",
  "key24": "28cX8UTN5K4QKFzbb3VuYri4wZU3e92a7nyPgmSotgeQKYV3zvgL4roNZp5kaATyBFwfWy8XDPKeMpfmvhbw8Uje",
  "key25": "3rAhw2HKv8bmt2M9NCt1g1z9GaW7AxMjmisyzMNqSN2sdGHuLyUyVrxBdgeUw56zfrgRGwwBBZr5Pba3qzCzMZmw",
  "key26": "2AaJUQHVL14cDbXXEHotDwVNX1EnJCrNf1qq89Xzd1HhgX7vFbbTaGLJs3AEYWe8ddMiTcgzyunNXzJKrmoDQNPk",
  "key27": "2XRU8i9J6MexM7a3TTx5je6fc1MBYRUu7Pf9YF78uwZGgXnXe8hTvwJTDzbkmwTAgKakXf27VJqtP4ujheP8dFqy",
  "key28": "2DMi42ScPnyE62LfYDcJ7cmpnQXPEoDZitx7gnu4X9T5s6XE2g5hPtu7mbsoCRSMfQwSE6ZfZzY5Ej6265sv9Vtv",
  "key29": "4eMgt81vWrccwgidW7xgiGhhtPQhyxt8G9RJ2BR1V1gTpBVNeS4hVNxsUso1MjCXRryjEqmWkcJwBmyHZaWXskxw",
  "key30": "FyRBndYPbBV764P9YWxcanyyC6uGABL29xyALyHD8Fdcth1QmWAjnbWKR2XZRhc3tvFvQ9dpHnaSbzoHeXoKfJc",
  "key31": "3PMRmc6aonSu1T78wvvMW35jUJ6toZrEB4ec4eiEQ7Vcsr19K2krZA2RPxtP9DEZQPSKsJQwbn6MFwSYTJZTW3km",
  "key32": "2AmdZt7JaJysZmjDbzWrHb5tWr7zLZP8i67m5Lgq1tMVqTjhXFh1uDuXFe84o8T9F94Mup2Em8QdGTyBm7gBfqb8",
  "key33": "3XxcVxpLVFHvfqbaipKMN8krkhgXTL7eHAZse13pyNV73T75FnCkRvJ4D6vb4hDQ9ZqAC6ppZtynuMFkTcgkSDfW",
  "key34": "5CTdREtRagXw45UD5vdnNQMjGfyUJXBoRU8s13LARnX6CksnbZgRE1sWhZ6WcXBuanKfuff6Cduc2v9UVeDYnV8N"
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
