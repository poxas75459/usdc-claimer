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
    "1SUaEoc31EACkrZ7KLsfiy45WnC8Rb9yePKABdMBgv9DrPnNsVDuZYkXKCShdq31zw4R9Jx2wyq2mStJzgWa8Pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4unwyz3VREDXCoBCXL7afKa3SvjtHSKEtFsGBhXLJ1NJ9ND4FZhwBP3Dz8fjAdskP6jzmFGM1XU3Zq51M9vTSbWg",
  "key1": "5nkFzFrB2jMy5WsV1njeJ1S8VVbojt1zBc9byiVGWyca7PUMbZ86tpnw8cZHdBCQMZwLBjhCgdWdjogZECStvyor",
  "key2": "2CqYZBsCq91Ku3GQyPbKzKYMKR8Vyv37KhrPxqbrJWxN5EqahAFs2MC82pmji4PvxKNZPXYYxNmTwtZWGpbxiCVy",
  "key3": "aFwnWAbnA1mnnMkdQMU4kmQBRsqC68NKiEcDfED9fZMuAigxG5uKL9JVuLAbdCwdVv5m4MNioUrmkssx9XrTNA7",
  "key4": "64BauXXLvPEXWRXRftxtiRjHCcGKQpzTcSD9We1zodp4d54TPKSPJoBGNnviTL5LZGNpFAZHprpotLWDoaEZS2Bz",
  "key5": "5XXGxP5npFVXV6UwSD19XQ5RmMzg6a9k22fmouh5u67txccD5drw4DXxgeSu7S4TnDkJ82Zj1X3U8VnDUL2g2dcd",
  "key6": "5B7db6n4z5HDF1nEdp1gS7qHrpzSNe2aHK8NwNXnqWS7un59ijxqLbqkhukxr7ipiczmQDS1YKPZEZFvom6cXUpD",
  "key7": "44b26Dvuv5ZjmGNWSsLhTdEqwJ9hV6oRqoQmZvSbiRZcU6EAq4EPXRVcK2MC6SoNNU9ubQS9kp1mSMqE5uSm5bbN",
  "key8": "4AKSUAYEvtG7Z98vZwjnhYGw3qyZLywqukU68EYgY971q6LQMhxnD8m9Ujod9GQ9XXtrXTSnoWq6w7v3BxD71NnX",
  "key9": "sasunWVCXAFMs7HkJ8ECugRMNBjM4tqK7ZXiQZpiUfr7QJYEffsmCa1ubynVyaFhEJbjxPn5RybSu87ZLXBDmRm",
  "key10": "49Mox6a1p6gqRQqvPXYWRGNdGKGomeYRoP7Q2bsxFdKMfa9sWcy7cAvHtcESpY82V46dGbRy73DjYM1gMY98BcPL",
  "key11": "26KWU6NhorHRZF8Bv8fkwPPfhy2GWLYicZXtABfCSB5Jt7fFUHWGkxYzcH6rqTVzx8PKro6jFLNVHePTJyR9dxKS",
  "key12": "5pv5qjbAeBJQ64bcgSJExyqgjxVmyEJRRNCawBSJG1n2KeqZs4dcXF1pXNCzMTe9ZgobVubhmTP7YbJ94KfADttZ",
  "key13": "5VK8jTQJeGgvyf7KtTU5kS64cfCYtqySRDuukTuRD1SPXgfqcXmHYJTSb6t3vDKpuXH8XKgGwUjyyTH77k2zdX5j",
  "key14": "5Sb85qUys9UuKgPALPWNxmDERr9BcDJzZZF1Ba6vLZFLqG2Ru51wq5ARrfQU3q2HxAFkoxkRESRAtMqiMqqUeqAR",
  "key15": "xKcoGa9iMx3eZtK7tqr3CAarYMwcCLgAxFtDFmd7hGynnVUjQ8ppV5YsLbbRXF4s6waD7k31HeLKWvRbN54ihvb",
  "key16": "3dVSNfhYhhhAWiZ7uYr7qhcdzteLohgLHQSHmydyH1AfXiLH15EUdFZ5FwJDhZArTZHsKiVAx8n4wyxZYfNfCn8k",
  "key17": "3NymcJm65ntqmsRqa72bhy5YMj2HYSgkATucSud2mQdzXxoBV7EPbMawReZDYxZGtR4cCKEcEDLV85bUPjgZkLo1",
  "key18": "611bBaK78wUda9J69JC1SavdqZtfWrKbJh3i9HDQBMzNw8RTjDMz4Zd8gxpwurzzSWvaUGo9zREsLmJMYqf8Asg",
  "key19": "3JJTmRH34MMWBJUN7HQr5vR3BVufDVijgndXqsgVjkCu4beLSW4AUc57meMCxugS2pY43kB36VWg8yBALZVmF1DH",
  "key20": "4uAtohzi4wxCNNkJPpVymr4Da262s7BgfkQDh8pDvr19b8ovK7HYwsX2VKd8jrZJ1MhQqmJKShPudZkE81mecUZ2",
  "key21": "2jmJY2mUopLqU6NvwEtN55za3mCuTdAb6uuinZxQWsj5myJwbCSvXxirej15JNXknmiXUVaCiiU7Ki3JAVhP2n9M",
  "key22": "jvMCBHG3mBNCuQuvU8LyNYYPQtSxvwc7rPGY44vdTay1keAh8x7BBa2jdAoEqmnqFYbA3zeytSdiUNhrSpAB4JP",
  "key23": "3cbS9LjPu6iFmjpC3Ap9TPCX4qkJQcofsensgJiAs4Uwh9oeY2Mr9GH7udfuPsU1vp9egibuG6m1T3oJAZ2GLjKm",
  "key24": "4UYNDZfLTjSX344goy2wKfNXWZFocn6xuF4nSxLQqCf42E1M3NCZ69m6axqdLESMvLbZErSiLjfqWLKz5U7vppKh",
  "key25": "4u8knAqjy7Kp6zxDofLGHLLD8f6cAu4SoMNNJQm6LKtsJqnUA2eqqrpR6LLnN1Vynu3gq5iWRnFfr8iYDVPdVnEU",
  "key26": "2DRfsX2hsq6NPwMMGPmdrEYnQrdCkuG4FVE474syCYhSeAQbgFRGtfdj4ZdUD6HgHa9uHouPc5zFDMhNtmnRNA5L",
  "key27": "39KpUPCZy4wPWGvnebXCYpnAWmAa3KcZ7T4RG6iYHsy64uLMFZkAZjpAb6uSvucDv4mobR52LpCzKK8dJSLFUDLN",
  "key28": "41ST1F7dP8xbBECyyFSM5Qm5T47dE7FrmEfx93BtfgFzfowLoLbha8vNLEXQqsvPo8PMEefFHtb4SnyRtGBYLT8W",
  "key29": "oyD3dTPSXTMKk84hNzAw9qCGfq3NkiCmEPQhrEbgJ9EHbtfegqdHNqBGKKrvy3vYxaSSrhc5uVQMDaRBzgCmCHy",
  "key30": "5zkmn5yht6DQCivWDEzcPAHzdcXZx4Gmrwntn36o8nhuFqwpZpKmdAs2EAjg9r2duEGdNqgX7GxDJFQAq4VJwC9W",
  "key31": "4weJJsuDv8VHLqndKD4NJnWC4EkmQaqAGwGwQhagTQnrfN5VgtBQrvNDjsc2ZmKmAcoskV2HdDzSXxNv9Vvwn6Nx",
  "key32": "3PAHpjdbUWPEUS5yYKb1NZEBtPzLh2ghQwirioSyTxHfe957Bq5t84uvTWEcdP93Gwn3ba2XDtdtJxHJdbFRaFQm",
  "key33": "4SSTHKzbqPVUfRzNScBpmgCPaWddF8HfwXpYYzpeppW4VjrdG8aV9Wtk8Nn3YpEurVtehwQDdYrmhTJNHojEbR78",
  "key34": "sHzXjdj23KMcc7fvoCXPpMtebeszwy98StwGyc9ogRKRpQ9CJ1AryTSW3z6QrvKUELjPLohK7z77154Saqyj49M",
  "key35": "38EwE2PeJCfoPUGnd7TTFUmxP625Xd76x1CabHVLj6aUwYgE9gudD4P9myWktmBxaNY1YR7vgaNNYsoC9dK7Yxes",
  "key36": "phJCqRJTrKpjsEnxs1YdXpmFhfUZrhiUESdGVCqqotku91fWKNr5rSfxJ5D25gqjaCxNXymEGa9A7eHTkf9WveL",
  "key37": "53aU3a9VfzuhtRcEExVcQ9F2T7ymbNKvtKPV254K4fvpBA8RhBTJKjPwx9Q4NyPZbTYH2pUX7hTJNK7iFVSyxpL7",
  "key38": "2rwnCAQxhiyMTUvBGyg2mWKRDEQav3BS7pV88N12qzJUa5RPjBPuF5QBBDsrSSW31M3spKkPq8GrAPXkwMsT7UEx",
  "key39": "5D8RkksNAvxuX3V6FMuCuGC4H4hd44xWzEVgeJky9gEgg9hcErnJvShmyFRcoMBDRT5MLJQgC5vaW7RLQQKAGCiD",
  "key40": "45gqFBtzWhvfj81oTYH63rMtRA4twrza51brmpCsJWWAjrdR1jSknABSGp9sDU9XXWqS9U9oe5UgjpriGGLWDp1D",
  "key41": "43vWsJRcJKfGyR7qzjKnXYL2JjcoXuC8ESXgq3Z3oHQEX4gcxnbd2GJc9FfHccpiVd1QAK8FLTqK83bLMbALK56H",
  "key42": "wyvjYPnCh625M5h2uoSfLpURW7gSPiD25VprJSzUCvDSeVTXHLSnqaHDXrLrJ23i4EQcEeS68hX3RHuooHGPQCp",
  "key43": "VihcxSoLALwcvHcrcn2aAXvMCyYJ52r3nLVw1SmsD2xPFbbgegwUbvyuHQpmpPDhZreYDKw5qndoVwXZuRhYXb2"
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
