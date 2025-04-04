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
    "3k3hZLoQpuTDzrnStpdbZHVafE6tsVWXgatEXzZxiXjuR46yHvnVacMQvFK5oVEpZeV8dpxYdXRaW9ncGLh2W7n3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i7XRisbGGJ8Bu7m2EeHEzco2crcLwHPLhPxrWiN6KoevCpAgYYiv78sb8o4LY6wDfwXXYir9vQEHd5yT6C98Pmf",
  "key1": "5A9zt4Kt9sF9mRNazD8zpgMN7BoEx4DGqMm2dAM1ewuzdorwdiWiRVtfu9jrdqFYXLaiGqVaRvhFDspmkQgkmT7Q",
  "key2": "BpHS4hX26xRegDrsx6DyLDr4St2Wyv1ReZNxdEJfcdgArnSFTiMjPJsM8FfxtEbAHxHizg7oLPzNyWgUdsh6QBy",
  "key3": "3LqzPZS5KCSvH7n3K95GJC1B79UxGDNhtKePh5kguNcA997jMARbncA7rhWJPeWq46qruWZXNhjZPiUtFkBrXNpw",
  "key4": "4etVdLL7ovyFEzzc6FcmRW35CvziEsy56KLZPjzhkUo8hYsMiAhZRyyGxfknYYFr2btvnyzKNsNJDxuh467c26jj",
  "key5": "4Mf9XEx6CmoUoCbZXBbE6bEj9pJQYEngrdY4ryoML3JX2oZPY2bghuuMPBEJAqRzSUprmDx584KpZCbtLqoyMGVA",
  "key6": "4wuUQjoKSLE7HQEYxtLSc8JHrzyFsPcApQM7Mjt9NGrPehWRZ9Zg7tak9z4yMZam4HdaEtVL7EHSPVeP8v9ZG9Zj",
  "key7": "5bEqengRAEdjDHPdFBm79r61MTepyhdK2wojkDgxiTvKr2AjD8Yo8EdFreoTGqzsnG7Njq1xNYxiw4YNZS3JeLEA",
  "key8": "5D8whPPSUD53gshar5Fqjutswd2Tbu9NjKfBe2ZNQWdQbWWJHHqZb749m6ayUAhS3KuGRz6eoXXGgumn4My6E8Vx",
  "key9": "4cYpdtUoxTgdggUm4qFZymMEprLDV7FLuGqzSMYi4JqqmUMdcyANt6MkGfBrPYpkX3LBqD4og2HiUdDQTKf8dgCc",
  "key10": "AQ8ThNGfdytFQnpNCsnyV3ndwLsho7frKAFgypqbkzW9hCixkiYdsYWJkZ2S31WGrjW21QcJm1rsxMjJRvrfV4R",
  "key11": "w8w1mELXwb35jkevHe9Yq1JC272H9uZcH6KQjFoVRNbyzz2G8YKMgV1DYwsNEHzwEY65zY9VSS9hePJJkTe4S61",
  "key12": "2XtNUAWrcBf5AG9dpsbevMF4b7JE2gm5kZNUHzoRJ9c8C23qQqkob3xFrvnAXwZK22FrnLzc2kQ4GqebztbwNhRd",
  "key13": "2wKsYp47r8fGQiHPcZAqevbiNg3ztNXH56qFMqFmEZez7c9ja38d7FSPxtW86Y1qZYAkE3so33JHnzJfZvNBPEzU",
  "key14": "3TxhwMZ9pHBj8tagUUgcvV2qno8dHoBLNbKZdpgdBdmY3vHJW51Ti9Y2gxXB94invWvL8szKToEEXejrZUiLfuTo",
  "key15": "5wRV62uUEd86PdqGTwiJyFrBpvk1ij22ue5KSLcf5LdWRtawnsStK48yg9sSEow6jrfxccmBjSpzZFr2wwRY7o63",
  "key16": "4wkNovrmE61RqvshLWczj7EiG2GscCmnDAUSzgjK7BauufQ9ydBR5BUigBisH5nb3LKuAsGGCDAP9TiPZaDVGRZ5",
  "key17": "5dvYXDxavCYDCdVYAZUPUAKgGtyWheXFi7iK91pHUKjPoswzHVRPEML4giHxLBFuJykijz85G5dKHS3q3riG9Ri4",
  "key18": "35WPfaLdX1XKkFNmnhZD87KHP6eZ2daQfuhzJjmfoADkD5Nej9FjtGvuUA7Too6b9WXHgMNEUwnv7FXxxX9aeBdz",
  "key19": "1fr83e5qjDh4zi1qh3ojmCQKNZdPyHnm1m4NmfVNKNhH1GJskTDVadCoZpHC7VxeBG8W6ZBFx8ubfgG888FX1Tg",
  "key20": "53xM4GNSmvCCwFsesdjteRJV1u1BZbAiQPqE4qKKjMJBxNxefrtc9RyT4pCWCx24LU64TvzRFJYaFZGqyttkPuAy",
  "key21": "39TXtQDoJGUJ7uUbgPy5MpN8WSCjwznsdKcxd56s3EYCHpiNJSuuXkLk8pt9unYhTyc5YxdnPYiUqDmeXYfoeiZo",
  "key22": "64452MLPVR9KgV34X7yE6kiw2kt7mhFa4ENTD8Np6gXqdt9JnRLwmYUPFnx5eszLZawaZb2GYSscXp72HiaWVWq2",
  "key23": "2chcKGfBJv3zy7nbqeC964j1xLgEZFBZGpt6znL3KgRaohPwHpoKXdy7ygrCuBhYd716KrKVbLSu2crwUmutiBtp",
  "key24": "GkmmcETEZVf5caCSyLuSxEU3oprDmgeLApH85Z4XugKEeG9pGozTzJ1mHeFjbopuXJD63Ztbv64FngUL9uNpZSw",
  "key25": "5DACmqi5N8K44UNGXPqouUXqs1MrwjGQxhLZGL1UMPNFR84R8iFjzYKSZZy8gXU3yiMrXJH6qzzZhTkDiYYfJTzT",
  "key26": "4hBQEXFRuiTKQKN3Dy7N5Di5hd2LCsGyomB98mUrSXv1HsN9fgajRTabqH7gSVXCianMxAhJB2MzZZt4rjYw9Vwp",
  "key27": "3ie34S5QwQTQZ5Er3H1Cpi6rVVLVPmziiXv4XDtGBUxdVFgY3N8werJ45YRYk8YQhEAuHGdPkSW1zzx333PabiqJ",
  "key28": "2vLr4ukPtegTgmEx9LpHp4DePv3UAMCPkLJVTAxWh9Wti7Va5LdRo1knysGNXRor69Lizag7GYAbBb5oPyga7BfG",
  "key29": "2SyzXHrh9Ud9vSDvb7dc3VGfwLYkVwTq7VAvhd92t9dfKtFQzRVfkyg3Lhpxft3XYNQqJu4Dj5XbHg9er1czZxuu",
  "key30": "3DWpXDczTHeQgBaU9i5BgxddE5thUe86ufYtYrfx3t65fVbvYYFJNaPkZKJUKSNWPEC4XnzHnXm4LiQuDJo1L5a3",
  "key31": "1E6B1JALKHg4YAHZAPwM9djnFunDDGr6QaaCdEt5Az19uMTKKPKAFdSsV6vAxEaM3yqYp4bRQ1Nse6tNx32TPP6",
  "key32": "4SrE8hZUwymfV6qSRkyZWZ3Dw9Zjz1awo41RwZ3cPeFbEFJ7bshCcGGqR3ATgYNFwDJ1XQE6eHfrkuycEmdGzRpu",
  "key33": "5pnR7aLsETjq3pErci4ddsez2sDLbtQHyZ4FsEVKqseYEggvuaR72ac8u52meRvBVf9ZeQrYUR58UuHVdY5Y21hu",
  "key34": "5beRHwja7fDhN5gNUvktc2TiUzS5ZZDYXFUuwKdjMREcxooNn62TiRJXHgobkDc4AosJBE45rVUpQSPLLvepkxtx",
  "key35": "2eC5EkyhAviNeQYhbePZ469bFWcMBFBqdBXYuPwYpetL6ZHxHqtEK76L1RFvjVXNCm5x1LbXwj4bUmKaE31w2wXr",
  "key36": "2swJtpLTuFsMbLWL1qJx9SmMNmtXHr5KowBGSU87zrCZMWbmooujudTMEB5gKswFEbwcNQEacK4uGFMhQYbxxWZj",
  "key37": "954Lm6TCQhGw3oncPPQ9yP4MaJ8FipLKnve49RSqHznggxbsVSbVJPN6jnh3P3NPfB6g5pULzsMqaptcEczYvZG"
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
