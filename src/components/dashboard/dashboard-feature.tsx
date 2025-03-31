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
    "3wc9LfuLzmnup1SuYCAg3f6nidMkxMZnpTGcrNyUWuL3NwmF4BeKN9XW3j6pCc8fMFUpt8H5YLz1CXQKt17yaekL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "619N8fdb7migEZgbschiyTDzsB4ZBZnGKQpZjqcg32osfk71QEmtaXXpLXLaUWDwCE4EeWLDcmzYnpV8c5cp5wA6",
  "key1": "4YyUjzGLtKgAW9DookZyzeV8RLkdeodqU4fVvt6vfLPv6NV5NCa8XN7TYXpwhDvzauLyan4wSFArpmX8d7giNZCo",
  "key2": "3oc54a41A32knchNA4s9vXLr2XeVGde61yEpiXFvWng2tbVDqftUzHJMckUaJXJdUEAeZnnBUdy3XaULM9vtwxek",
  "key3": "suqVjfS1HX9iVn2hbb3bFP4f8oN33bqSFejYdETcJTVKYxRAaE33h8kyMkt21LY71zDCF1Q57m9gtEXyQfcSWNJ",
  "key4": "WYM4xXuSysmwBsvBUYGetmTaY2UHy5PGGqe57LDkbktWEJ4bihHkfk9aTxzpKudnDuStfR41yH53nHzL4sfdC6M",
  "key5": "4Zq9GRDPUx5pwFHY1TyohqSe6fHF8ftUsGyeutEBnXv2RbrRtFi5geepb9gm3CddgpHyt1FYgvrKzmdXnvc5DXeR",
  "key6": "AEt8E3mNP1tMURsiVDQfmn1YQwYXzsHdxVjnJXAbA3a8FuScx4MgMumdL6VD4jZHMxQu7Zo4qt4reihyierUzcQ",
  "key7": "33kr75jTdqYmq54bA9eEyMeUP4iSGenarHmTSSzoKF6fsXZxYxofqvxnG54C5UzvgcuFLQ4xW4ZoEkDXBRgA4aJu",
  "key8": "LQNibTqkQgQLTik3og9tQgJDDqedKSFZABfLiF1NC2Tn84afqaZisDz1NeFC9RPSESdqK2DKX4EE4RuiMn9UJr7",
  "key9": "4SGMQUgLXBovxW8v2TubXD5WAo2YczTHoBxD87PqBoH7fGTmG8AD1GfZD6UAsgRunyHuYBLFgZcRP1ekbM23FkKt",
  "key10": "5XjrzsAnebBQ9VkwJL9AYKw8VLMTLGgBQV53XQaMQPiuxxX3a7rVCh9wSv9xPxR1WkSyHeistUHmgjriQA9TExoW",
  "key11": "QKFRXrqwWPYYExHxvdZuonw8Zp4z6Ekz1frthU1D6vKy3j8EzE37S2yHZ9Ud9nW9yEtFjGGCG2pybPPNC7jmofn",
  "key12": "2ude9oruzHf3c84EzoBGi4tzibyrSbjTGMmSPtM7UdXpjvuaMqbE3NBRmSwhaMbNv9Mv411zKqPoF2S1zyy5wkFn",
  "key13": "223KBBzajEocXoWRsfdNBSXHaTApmsyiBbVASTMCvGQgG1fPx19oDBfhPChL9fLf6bWyko7rvJ1YJdPDeBt4PkQE",
  "key14": "2swaVWavdaPwAxHa9MjUx1riC4ptsNd9pUPxWLsbTmSbGhxVjpxmwY3yVcPeBir5FjTRBT6WUR227GqRGnq342mC",
  "key15": "2W3bV7fw2tynzMRBd5y173ewrz7jhGpHFACciRHnqfCoEvboP3NcNFcoQtVFekZn1YpWwZRGZhp45zr5We4eyiun",
  "key16": "4VuyDnJARfE54LJE7K8jNt4v6VoECmT6Syod4YZdmv5AmCcp1v8QvZsWrGAdzcahMeY5MaGHxcQzgSgNfKmmsKbc",
  "key17": "s8UuuBZgm8aVEu59QZXABsfrhLeLSEiLm861ttpPCTswPzTX3HkVCaTVj42NjtKxLJ4S6zMJtwSzm76PVffnoNK",
  "key18": "5QvWhTghhpact18fjAGEgDvo7MCtdk3BwpxfK32hLu2BsWc4ioctVA2qCNpkyVTPh8N6USX14sLabDxVyMT5wAdT",
  "key19": "49UfAa4iXESXCAcmDh3mrJBCRhH3DpaFmuQF8W2DeUu8ySJjWp6Mrwsqcvw7aMtiCGNqrd2pN9WxuBkLJiU4dyYs",
  "key20": "2SAVovTXnK8ozTXdzfwxDfQkFpKdHJ4PUX4Zdtw671kDbh5gAAH3vNbTpKrorgpP9XWobpiyHFd3aGkVp46LFNP6",
  "key21": "2wECSEUTEpnaznqJnNeLvjXKQSAKp8DYNXULadStYQMEeKb8xLrjUd8LjLNa6k1ekz3rZ55hWvk2PkW5cX3ZAQm3",
  "key22": "FC6EXGhZVbgKzi3vscokZ81b2Xgm1fH8DukJPNXTABCCzXJ1VC74S17w2JVaZrR3sVZ5of9sbmUcRnq3RUfRWdc",
  "key23": "ybRfDNKXk1JmnJk6XbEQ7MaSJsnZd4vCtCT3qvLBfMbi8ZVidHs6yr1QckU3zqFa3iyMUiDsUptNbfu9122kPy3",
  "key24": "2vuHcfiyXRfgN9MjkQ5hEpJLqnVqkjyuyjEp5QsVkdDHEjZ51j3Ku2LatzzRGCPtsRR9mmJt7ANWy5dki3YNisea",
  "key25": "5JXbDkR6krQkcLjFiYfjSig4YfCoSQ1AnmHWrXbkLZNuAYdWozxRCGakhvuRFpS5JY78AYTb32gBfCjq2vwRvhQw",
  "key26": "4ZWipvQRqrCjquSmpgjas37vh4CMB7RgPdd2ZVoAMm5eMjfw8Yt68oEU2heuTZ81JSNAV3ct7e37rKZLTg8Ke3vQ",
  "key27": "3BcDpXZvfCxAiVXk5Pm3J3Y9APJyMcMxKXRHS6Z6HfUi9svaj7Txhv436BDmirP1jPULE2X4jgxQvh5FbuJ6szh8",
  "key28": "5sBJLGMdK19vrVTE2nrLGaMZ5J7kpAbcWockWKNxYwwqfFHFKpMSsZHir7sXrrCthPiedKuJgSazp5EXBreUfKGu",
  "key29": "2B8P4za4x731cCvu2GZY5sLNZ7nZBjBdixPcB9P6KZX5c3jqoVwNGgjGdXyG4AG2ZvQBikvVhhTJDS6g4dES9tqm",
  "key30": "42Y36dfNFck8JYcfsLPudfaJscGgna9NESRUmK6ivHGpSJthjJBR8QMtzyhtypS9U8TEUCRLX164bCuDo448sP67",
  "key31": "517vY5TCy6etCBkXbRyk9j4kmQMdB4P4mGoQDpYTCr6j29bXA1E5dvQxaggBE6DZqtvkp2ui4c4i8hW9t1GVMWAK",
  "key32": "3RmnK2fws4bzUAvwJYC9sFBPSx2k7VEz1BwzpMx18GYQk9puPsx3E8hPyh1GYspBj55GN58aHVWBgtAVjPQXNh8P",
  "key33": "4XhXSbwAdhjpFUE7cTDtV6YR4x8K4G9R9usKxU2iGrPvdMP2CzutvvtbrHZFRydHrnbUcLV7StHSqnpj568WhC31",
  "key34": "4DGfcPrPG3RzheoJCH2b3uWCm8MRft2kvCdzDguzBdhmWcvXa4rttruBpE8CMm1QwDgDTGYQnGEq6RT41gV6ju3",
  "key35": "mGqEFdCHszK8TXcLw99TeuHxWsi8e7cL3pL841FcGygUfkaJ5YxcFGBUMFdKesMiih2N9UYnM1jEGKGQMuYao9e",
  "key36": "7kapPcAdeRAZSPms1VYuo5TsgqppUY5CopjC2RPzEpufGisgLzJ91L7MmELAr34sBDUozbDXgreyMoJFQDHiFJE",
  "key37": "4FYvfgr1d5UycNNP1QSap5YNacKa4gNXGCt99XCXThvB1dG3aSqNNkdwshPnNRYLVx7PYLQUiepZZ87xXVV9FxZ2",
  "key38": "5KUw3AQRToBtPG8FX5K4FnQ64B6cB5tm6S2ooopnbqmyL3AQYixjzXWDPwBQc3cznfBGzrY3y6WsmrUiXQyW3GeS",
  "key39": "57Akty3KN2LURkgqc9AUzmb13UrBJJDP6iPqtP6cCv6QSJs1eh1utcg8KX2gLvS8L5sPyEgcbZd6hrFS2f4kt9eZ",
  "key40": "3s8GABUTpcxgNqiXoT8DVsqd5XrnTBBZDPDGAfJnsCgaTiY8aHMUdx6YfPsj1VzvkpZTFWfzEJqptKSzrBgoFpdg",
  "key41": "5Q7Msaw5SeLyLQaogoc3iH3NVwqxyNgSrovNQysy9Hy4o8Y2wrZeVebuWc7xmGHayhRXTH2LWrh2fgsk8zMmbuB9",
  "key42": "4vkeTZXBusAYyLZdm3pijoUvdshvxEU6Aq7u3cnvxumaSKZ31nczGDZdHaoxcc2oPeQirRhatCMm7kweXgPBWPq7"
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
