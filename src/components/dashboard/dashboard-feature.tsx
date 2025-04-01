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
    "61vqpRNngFGdC7iN8jmR7XNQy8wUfUjwkeVdDbL1jSXd1rhSGF6J7jMcJfJRPS3h49oZicu9tKxs8zAXKDMTWU2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nD2wo7BgGJXGdeahmwiyZv6tR6mgWaVQboWnEzRpMLZoXHfcMhQEKVAVyZMrSgiZA4zjXK8j8JaAY47Yjs8UuJJ",
  "key1": "5pTxaQU33AEdPzGgRyKGpQxnhbmmUXQZFc7fAQZ63GRk7pV8YmbPRnPeDMMZhPW7Sfx1YV75FjmhQ749dekj7PZN",
  "key2": "49kXL1XYSSun3ZV5TwLjAnSX1bhARLUpUuwEeRC3etDZhGPWMk68g7STToMr78MEmv4yjjpGTnJHmmemMWwrymEc",
  "key3": "4Wxarrazzyv7khrsnyaHTe9NqRPivshGXq2Bb4DBrk7TyDgQFp6DNecozB9YznHnBs2htV3fKau2LciBYgRToN9i",
  "key4": "frZeRCg3d7Rx1QjATzfQ2i1zaX6QeMEGYXKBNQSQtrDe2p2LtLK8V9KetJxCXfqFMsaxUuQfu5WxLDiTCSsoYm5",
  "key5": "4xawie2JM2UoQdzwPpRm6gDDxaGJTnM11WR2pvRkuXWiYM3x5Zg5569cux3sRjCmAZDgbdyWkbwEugB6DMwrtUke",
  "key6": "3WzrtZQqaKWDTzYJZex4Da7dm3yKv2KP37zm9cTHCzjtvMLWWNwAHECKn4FNiF539PSeiU9FK4iFHscQVwgcX2d4",
  "key7": "5c5WxzVSQKaZAYvv6HgcQdPE8rj9Ayo2aot9Et5vJWGaPyr3YiuoszbPeM3iYkFoo25vUx37y4WnjQGK5A2jhvuP",
  "key8": "3XjceLX5FKyvdTA9NfZcxHVBWaBeAeN6h8chRMPYh37RZ4RSxxFAiS9GNG7yRaZ6m7fR9gFiPGeNPncG42ALacQC",
  "key9": "2ZafTXffDZqbYLpgNMu8x3uVEDnudzgu9ahHDmP4ZqZfDW4ReANXZzR3A4RnUrqR3BYnLiwja3N1HSQ9H5DGrvVD",
  "key10": "5bYLt5pqydaW6nZxkYwH6tPTc8Cs4d8VNK1w12xhMgfAoDMr1Y4aohyBSwKBU58QSxjyK5gc8m1svBMCojj7MuG8",
  "key11": "5Yu1Q6S7xzEpafSk55xp8rSL6WSe4EqV4EYHJzzFmbjL88iq8BUbHF6eF2nv2F3eKYBwAEh23WxVG2LQpK4mnVt9",
  "key12": "3RY41ikj9YmLzEGgAtBs1BJUhBh9RuJRP8pCNwgteQMeXvPYRjMzBWvxi6yEmyRzq6tANnvZS1YKoDMz7W7J2YNM",
  "key13": "rMFxs37QdvcEqRN1mPp2dDMUChyfndXJyyqD5CFcwk2wyg3Z3TmpJQHsWNprNXDwc1rGUwbB32ndPzYK78qEJpi",
  "key14": "tU8gp6C1U56eEnj2Aby2KCjFhFhXSVDKv8GW7bxiBX99oFmxqtyXTBabTcRvmt4cmxsRaHcwoENn4rsa6At8HRN",
  "key15": "5ZYSGFVS8qjJSB9C3gEJqknds81y6zJRuwMbt6wxL2GS4JTVxPoaRnVT4dVKxhx4NBpBaFBa55ukNxYQidYoMmex",
  "key16": "o7aiUNQfKWkCCGMgAkGkYmJUKmij3ceAhB8ViPe4fQycu59P5V2TwzPvjE5AiNkfSioT6aGLRGemowEZQX8eNLe",
  "key17": "5UWafacfhsz3NgaP4FeSSoCq2XkDRjh8ZTZLPwhUXBNtdyExVK4CFUaqdHgxPryvBVju3bJMxhvr9KAMJubCFS8M",
  "key18": "izgiYPifd1qukznEjmJ5ZFY2hkrDAHwg3igR8bge5g1i982EqWq4ywxzAsGdJNh5pSFytJ5vETSQzcQNCnYTPtS",
  "key19": "3MYWvSPH7nsyznZ6qRq6hDUr1TzvJ4YfEJHcWk7U4CpGanAhx4CsnVRMhsUoS4spvZRpZE4HcymcLVpbNS7jPBq9",
  "key20": "2GPeigS9TaLENCU4Uf5UcxemASkRp6FYqr41jG93W1BkN1n8BMU1dDbBApUniGD3ieTzpR9tro9Uod1zqSfZp2H2",
  "key21": "45LXSjvQUwtuLeG8wa3wNoLNXbeAp75r5W5DFFYSiqChKEUsNuNxdVeFDos7RFL7YEMyXpzu3u4FkzFX3TLUXZJ1",
  "key22": "4obgUacUDDq8jQPZgxrPDgc7SUZiYLHUV7cYCzay4HGdz7pV1sujioMiTrVcRb1j4XTfs4ZHZhGaQCdsCgfuqmAV",
  "key23": "2JFvoZhdhCo86SDc4W7WWEQEvtKBo6PxrLZj5GmtixyyoFiAFfyZYdZP2jEiwQR223APzKD18pHSotte33mkEK5k",
  "key24": "3LCgWpWy8t93ru4bfuuP7CHGE5U7jk5WJW63n6GrrCbFCbuyxoRsifmWCnGCanmcphYjhbK8szgvF5NWiRNhK5sR",
  "key25": "Y9mmosrcUCH8SibYA9TzmfpPyLs3Abonb6p3rtMjJNXaPzJGaqfF85onrgGwiGmbKNgtq2yVznTNR8EE7MK9kfn",
  "key26": "gopcLVvHiJ7pJpUpTyT7JebixLgdT3K1uadzhmykeT3VBS2ztEzKUMPP9quKYF5iwAoQ2KA1mHkzDvWBc1zVtzV",
  "key27": "4no2nXRUyL5CMyDbhfa2aZbFz2M7DCzwvJA8cUGgDCzcaVB6ZqjbRd8JjTuLpuxbYQHKVtUp4yDtv48UYTDCrmUz",
  "key28": "3tXgPEdhpKqx8ArwNgauoXcbf1KGEpbjm81cLqTogCG7dpkFH7pEarXYk9Zgtf2E56THVegqC3ZfqTKs7Lkrd8vc",
  "key29": "5rjoF53kHED7sA2Vcd1VCMNoYb5F24tDn8GXGKsiteSvK8WNfVy8Ve6nq8MyDv8rX9gzpi59SjWMLddbTReqCuxA",
  "key30": "2qgUYtiKnhcjAu5V4ZodoijFUpFiMES4gu6uNkARc3EN8ad9yMbXaoqzvtZB1sZ2Wzx85ZuBFMcfiUp4A97JAfu3",
  "key31": "2Fiy9aS4Bn5zpoqvnkkAsAcWMFRB5rz4NpfWJahRrSoeuGAmpJd7PqiqmtWQy2xuYDFzjn8eugR46LKXgCDPQA3K",
  "key32": "2YQsP5V66z3AEXhUSXYT5ZZ8GScfWQk2hSHa65rvhX6MaHuFE8ctYW5bpxTqx77ZnTt3DLfjx9SA2xmg2ET89C57",
  "key33": "5HdaU7UtAvAsBxb1idP7Hz7ajXFP1c21UACxqrU8gbz1BfBwtgfTA1gKBYzEqPCb2JEGB9cDpqQt8Css8Dqdr9FB",
  "key34": "5JNgMfdWH2om5YsU9zoizSotL3aYcrVse6mtXJ93SQorT52zigGTM9ewHacSZmN7XoJjkcgVoss4WtQYMCoRxWSG",
  "key35": "38xNeUrRLaBpuLKUYoesMcxgEP15DeA6nTakqhwEJxB5LAudRQg1mupL7i9VRpqBFbcs1TPdMoEFBBy4iKq9Kw99",
  "key36": "2fBXSxyA1oEeXTiAvg9HYR2XFtUFt9VShkzqYVq6aHENU7SFwKuz6d7dmWEEiCrzC8m6rC7zFeK2FENmgJmhRPja",
  "key37": "4yvn1nzdMQ85QFF3TmnGi5pscJsdtwDVu1gDT4phoWk8PrBFexxB8V2QxszCZnqBhAuEYsx3jj8DcjaXiE6gYmMg",
  "key38": "2gmBCsmo15Lhu3YkQSTYYU7tKjUWv65jcaR6QB4pKme9aw5FDNnjjiyTmZWtwTzcbpZbbFph3kf34jJSXY8U3Bew",
  "key39": "4RaBFSdcihvSNPpyhkg695F4dVq1KiU22wnoucYZr4Jjie3TUyVfUjiTkZpbpDj3CmGoSZQvCJ7REoByUQ4GUhS3",
  "key40": "2cUyQvy1j91BKxp7tksenxWoAT4nerPdvRNEqn3AKezmAzd1FBH7SK6PitCPeMrgyhAb6gcyK4KKDdrRKKG5zPz5",
  "key41": "2eCvVdGwa7prWSdP842SfgpsAkXtXJvmG5bXS5ZefKueu6NBixVMwgxBcYfprUD41Et8YzvdK3YL3Tw9G2YyVAWe",
  "key42": "2VGiKyj7BzxibkFom1GHB76YfHNoeVC1tMR9yPgq3uQW89cCSxvGCsvZDWjFfbuzAj8rXHE39tFHn7CmB6eDDusU",
  "key43": "626HHHsS3meJs923UdCnp7xM1Gwvcc6vDTSMFmN9BSK6oPNiuff8MfB6dEz7GpcQ6qabjRRxKCSUMAeGcG5XrSq3",
  "key44": "tcsP5fo4ms56hdtvnH9PZYct4gaaFGm5jwFHp7EmWWr3rUmwGsXEdvP6JXNgu9CeKqwAyeTsdMU8sjNUsfjABJP",
  "key45": "5oy4XQcR26n28stoLyVPmbyE5JyV4UPLEm9jRCwoxi6CpBEYj9WRxLDxFWgALyne2BFbpcH5b9BF4iyCirPRAoyM",
  "key46": "4LCL6ZnrXUPT94kNYkvbdApdni94Z1eeoq2tKn8GLfSkjsxkT1aUkFxJQePrC946E5HpUAt2zSKLvc3Cs9xhHP4G",
  "key47": "gn7YpK3UF9D2KmpokYue6ofVRYXQ6QYJLHES7PnJZdtdVtXHo6upgqfmWPM493E77H3KwfbpYfM3rXhoT96iG7k"
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
