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
    "2PGyHkDHjU4d2e5HSRPoqdWoqHSCuF1mbyFXUdmiaJQDC5nwDzauqXo4nJkLpwFaYJ8J272M68oixfYnswH1fHUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WAhfchPw4biS2XHJVSXxJH85MJgGPfWHLhNwpEFY1LD4fCoYefDxPJ48cPSTcxTuuhANNj3msX6LQZLgwv7PPu2",
  "key1": "3gs9Vifw52vqW9rtYjDfnotym4A1kSwYp6hgnQHJFKs1ExvGGGY9uF3WrBnyyWppVwNHr6Eo7XmaMCNkBaLk9USV",
  "key2": "2kspYoUXM52fmCeZZ7WEQirQrkLiRS6WaRJvLU8dK41bXcn8mxfZvkNwwLv2kjTsejKafvLeoxbN99ybcATwS7pz",
  "key3": "2mZo6Uizfh1xuYMjvHTQc5W3vNSGzazB1Xoa6ww1zUn7Z2mH2vKL3tM7VtE52FQUveBwZ3K23HJUXA6ecYSdGsws",
  "key4": "krMB6THjsZfuHob9NpgwLomdLbAi4tyxqHrRAJ7osbsdmfTxER8idiz97Ww4LPqM6DxN13PY8UaFdAeFoXTHtUm",
  "key5": "ttzSjPPACni7hQ1AbixCLErtY1f2ReLZSAM7x9q1DA6n24LiaGFeHq7XeWZxd49SU5xGZHFAe9XFuob1GQY1Acg",
  "key6": "4AYmTJBeZYupL33iG2anGPRv2gNJnrPm57wHkKxC4dhJ54o8KcnGQACw1TLPr1XuUGBUHuhGsan7ydUeBKvMG1Fz",
  "key7": "qS6KJvMnPXVUBqyn95L5yhmgV6UKyAgeTwnRiw7hiiYUJBmurFbo4y89hqcVihGFag19TkT6sTamnU9UJstHtR8",
  "key8": "iJSsBqXcy8hUwj1rh34vUkF8g6h8DacjinXeMiubxrugeCy4EGHxJc23HuvRsfjVgGbAh8kKDUaxk8a3QY6TXqM",
  "key9": "2S5VT9i4K2Ptps1VJxX6LUMaYNKGEKb6rddZAMSJNUvXiefakjxXJWNgedoX2WaY66AjjkQ61qaPqDAqCBtGFNhd",
  "key10": "jyuA8BS6zgrMqd6k8BmSKfxy2wifHAs927SB66Mh8WpmeYgyZ9fRkKPLtAJKcXdGhDfkGUdkmZaXh63BYA4jigr",
  "key11": "2Z7cYQ3ue7Ga8gJCeq2URiSawC1oyJKwWWDBS59YVAkrEdomYVoKdPGSqYPjf1m6uoN9YSJ62rthHJcHs2ZxxEhs",
  "key12": "2LCs46d4DGCR9Qpb7aHkSAsjygbYrjD4puLG1op1Vt3WYSV9hAhxWGb295LKfJQk8R8tGp6gw1LCUNgfxTGdmVHV",
  "key13": "35sR5LEunxMyNnTkU45VnQzDtT6qDPboV2jTipo1BnGRnQBFF6oiu4eLVT7GYdZABFu9qUomBT9urdVP859zvSeH",
  "key14": "3Nt5AQd14VJHVnTx65iX419z2Knf7ja8oxYD5vXXdzy84VTMSQvStXoEmBqkN5yQyeVFP13dQzLLiyPhgze935KK",
  "key15": "5Ri7p5KT8jq4XrEdxPB3LFgjWBzWeZ1w8gocGtC8nkiZ3Mj7bQssPGt6ocgNShsgMUMQNSt5o4utqKGiUwzXEVnF",
  "key16": "35kYnh9ggPVBeugaARfS2YE58ppmjsbXUSHhbWkWiyySX9i1cLr3DC3G8pdFVXPwQ3foL13KguMrE2BkRqcuuYT2",
  "key17": "3nBMqwZEZsACET2W55No62TkQMJ1YWct4NUTuK5GuiW1JYEVZqQKsTHR7HBsoaRaB1XDpQvk8cQmHbGa5KFFKzEz",
  "key18": "65YL1oHD3hTwSKWtJwbb3dmSTNUgdkpLzq37DXLqktSPv1AgnM9aQ4yKHvs6B5j2fnWPLrREET9tbfea6cBfKhgW",
  "key19": "66GajvgECd2db6MEtN5JzNPAvwQLx3UN2RAJB326zGWfQqRWVmhnW6TTUhQdtLKNhmha48fJEa5caMsgnHqr37bd",
  "key20": "76UZsqmp4TtgeXdNJB712yZLVKcfwCSDFm3QuFnf35xcSMtWUd2Q8sdmpyUikeQKyMGoBgu6CMiKUocYRpF4Zvp",
  "key21": "5Kf6cCCBAXQkTKxJBdop4MXdXRCSy8cBkjDtSAwTiudLpNNtF12bY8k8eM8tREbeWoxX8mEH7ZANaQx7hnpsj5kM",
  "key22": "4fkKBWX9pgasGBxoKadHcSocAqnqmxq5VWZ3hLVMmTHtC8BzYHJhbRNEpw7dUgaxZBtaJFwLAYXE2XJXLTnHswcg",
  "key23": "DMGN3ME4kFvhhaqQMYfWbZLd4QAjwsz5uDwj2mjr6iGJbQTzsEezhUuFNrG3gk1YRukQNAd4vheywc79XCjfVrc",
  "key24": "3hgFvEW1W8ZCY7KGpghmULy1aW777dxxr1MeCoREGiqxu5EutLnDqsgmbfcp495JaT9YisCbyGbswSN1gKqNWvt9",
  "key25": "Ftespds9nU2ANJkApJuKHC5q6j9zeTFe2sJEhDbRzAiyUme6YkGuDuXwgFK46YCH1a8rMZkeRFMQaoZsFSrFyVo",
  "key26": "3uZvBoCKbsn2DGLcTJs3YGVWmBrjYJxk1YqwxmoctpZE8YgiuBPqfWY96qhSNaQRScMKGwHyDDaqp26cYKKusk5E",
  "key27": "4kg6U95qpSkD8FVNNujHH3DtSMr3QjbVzWJbHck1iJknx4cANXKnKJ5suxSZ9NekB1xsf3as4fZaTjR8bUi5Wzm2",
  "key28": "5QyYDtzjgh1pjASnDNEMbuVyBDfTLdaeVv3xL1oQpotE6cVh19uSpDW769zGVzcqpkGDhnxTBRcCAejgEUE25Atx",
  "key29": "3hty2cV5UbDFJNGJ2JryiD6Gcg3ErEQPaWo4bryi7Kh8v2oquuZz48XmfQDCydPphxWqhJNK8sHvRYuTBwEBdnHY",
  "key30": "5r4jhyECc2mKvDTzsHKR71HbkCbug65D8hTQRASuj9R848ASDeJK6B2PhzUez5kiL24tehiHvmF8YJycovYtkgss",
  "key31": "Bk5VRewYYQxKzSLJDaQe4ioH8E8ijysMziA4V7ZBQf1DihnZukBDuiaQe4nezYCX5PEMvSLpS3DCEfiN7RM8tkj",
  "key32": "5tCe8v6pUuFkZw7wKgWSAKTN56gQRmgDgQ8wcH7YtqdymVnz1pryeN5a3bGZsVjefWij8raX9ShaocLw5yNwyJM1",
  "key33": "4R4GYgnnCWfajEtyRiHZvNPiWfXuucXk7hFzWwEjjNRVaYzwfyj52Tix5hZZWLyhdSRWuRMg9u5MQkWbAs7e8WF6",
  "key34": "guRKmTMtWt4Y2iaFGnqg8RbzYq9dS4jy5NpNVEDGH6WTmNYbwRoadPdoarCPqRFDu8rJn8RFt5kTjjdRaPmbg9S",
  "key35": "2adQGehqc9xDTbCj1aNmovRsebdrvvjnWszTJ6ZC3TogUkejPkbSQzavmcXF7P46j5H4qzvcydpjyi7maobtANWW",
  "key36": "3k43mmDkSHtis4zhKU9gvvbLVPQryiVXkBK5UkM1uJtm4UjcMAwaQjKvBD7fJsFGXZAcF2dJUoA9By2HhXCZDJgz",
  "key37": "5kYKkQMsVjbTyLVjuBuWvSPC8UmAXB5uZ3zEBwdZ47jUKHSm1gKXQ7WyAi8KDB5Y8b3ZxrkGBgkMnrc2fCpbK376",
  "key38": "npnne5dWnVW7fpdDzCK1sY3ZMUbYjqQgJrWEWVNt5dq4xbdDpTVuSwCBg7Pj9rij62FstZtSRYii763Zr6dLYsf",
  "key39": "5jymZddm2aTu5JB7e1UGyHHPT9pDNWYN9eiqC7BJ1Ebgc9L9LKgdWprNXkvcfFuTtwweqjvSH6tQ6TJz8PeCUpzt",
  "key40": "5WE1bTwJrWi9WXATwjr31cRqZov3y39JemKqkHJMjDYhizpEys13QQNwhUgfj2JhYC3LuRLCGkGT69APkW8jsANq"
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
