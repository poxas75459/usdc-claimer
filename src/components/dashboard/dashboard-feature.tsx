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
    "58PXCJy1WU1eGpumKEigLP8fPPfGBmUZtEWJFSB17JxLfyDxELE2HLzJSB1JrL3WWTNZx6J1m4k5c4SoBWTzH9oi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pYTSEiiWJHvTSAXTshVT3VUhpKQToiRxir2crLLsdt8MRCrbKPSMgFUwMRmfWyfc2aJVhFmBKfWbeVW2Jb8zP6W",
  "key1": "2aQ16LBmwX9Sqeu7MUmziD1d8yLAbBV6QUCsXJisCEjfrMgkcpLBdvFDpqVHSzxVNA73tVuJJQPZxaaMPwSXGbJr",
  "key2": "4xRy1LPokJEfPYaC2J91via1qPCkXaFo2Ti7cx7igxrQuqNzJFuTK52q656QzwLFyqPLeWdaURWGW4kHMt8jFWHi",
  "key3": "5RPimeqft1NMWNzM3PLviuWTPn4SpuG8xThnMWrKc5BPzAPpagAxgz8EBgRQiKLx1SSuaoND9SiNe4q1y4DAh3LZ",
  "key4": "2bkRvqoPWj86ws68wMRALctmRj1oyLyk48btE1ZTVoUxSpgBr5od6kwfuNM6uSigwrNM6gaa3mTBiucXLixsN1Qd",
  "key5": "4ifMEqweBvCY35ZMqCEaKvCox3p448cQdtmeaEoUZ8KkBxPBKpTGtAqJHs84VAEFMACxqdg1tqhsq95ttjq6yGAT",
  "key6": "4pKZPqTuMEVFvDLe9P6zvERScoZosyxCYMRmFFULpKHYr566bExDUN3RnCok4B47wsbRHdFWjU6KzQ24mpVLoHF8",
  "key7": "VFhHxnfWV4QE9SA4EQajuRznFLHfwt1rGvcDF9tB1NkyL96w1vmbPzSsLrT7DgbirAD2gE7V3ss1k9KtN9C2Z9D",
  "key8": "2SzvKdmB9XgxK5sDtU2GnFbBBe9jdUiFRm8gYh2QB26sYnXFJWGb6Y3AEeAzbrmwf29WuD8YbfgF7WdXSivtj4RU",
  "key9": "3vjHhKrox5gQbYauDHQxsaoYvuRzZhgPQXx6sdamiFFoZo7PoJKhMm8czSJQgfwqrnHDw3TGWGpaZiGsXYYHy2oK",
  "key10": "zTro4za1GyBErFkvUVAuj9Md7WCiWrQexFM1S9v5SPsfr4dkxasJqfvdL4ViWrBTmXNbSsvYaEQn1vs9sZHajPR",
  "key11": "2oRuqc7EgFB4cCiLzNyg8KY6NNH5wXdySLW4SmJxjxGSx7YVPLySJYyP9vH8jV1EHQ17ff5LfFfekpU3FdSW3nyF",
  "key12": "1RJCwCFL4vP8vioGbvMeZN7xXbHrmehw1CEeVGWU6NsgsFjSYjnPRXAUJVNFaER2s83qWhCABP4bAmMuSkJPWSc",
  "key13": "2Bjp543ZPFAXhFmS41RPVTr9NUb9NMNPugh6UzDyYmFdqZ6N9nCAxR8K2kNkazkRnc6bnFRQKqnVoYoJW4eoRKwc",
  "key14": "ZwfceuDuAMyQus5HN1AN67FCch19g1uSXqLMM7K5XptvTUS6FYW2hWtCxHuSzuhbETemNX34FST61avSxEELqgw",
  "key15": "3C3SrLjCpKbLshbFncWFxkPMSzGtCCJgmRDDSNwhGg8XzCLt4jKF75RdC1ZKauZFjejR7BbV1QA961grHuzue1o2",
  "key16": "U9aUZ48MESiQh8W4kxtBHunbVphKe1d387CxENRPZw8bLtAZNqc7jydwohuqwA3XkN38SJMPeD2Cm7uZQp2mmFQ",
  "key17": "2BmUnCbmyJaB3MxjCrnBiMWY9mN2ZL2aLXa5Kq3Vg7G16mzXD1kckE6caXTjQN3kaUCvX3S3eoyyQj4RsjUgfZRe",
  "key18": "5PZ2hrEptC2adN9xTNgu5wTy5JV7XSZxjkGxnhAwg5wUa9boyrp87TZhXypaZx7oMfqfqLYXVUFmVALsNKn9XaAL",
  "key19": "4pxt4Wk15CTd57C8z6TT42hCSLFi81b97TP33aMLF4MK25eTHM5Qgt2Ri4UALh4e3Dfg4bSXVZJPgiMp1FeAHnuz",
  "key20": "2hk9L9F2UsZ2B1UQ9qeMKrVDGS5viE3cnP6uuEe29zSYsSh1XqS7mcbXiJEczQ8S6gs796fKe9sNfncPVNzsDmip",
  "key21": "2EC9dqVMa2RKsdXd2SUPYSexASfLHm1VYyN6Xfpr8j2N5mrs7rwCMSHfnuSko7tritMr8bRP5EAFB1YiPcR8oaN2",
  "key22": "3cYVt3uM9dizqFNPPGscJSMHYRzkuEAUcBbgAM94ST21Z9uCK5t6VCc9g92UiGYxu6UK7VPPFVPFiEWGiFByyAdX",
  "key23": "3XfxQc19QkYXFLVaaCWnb6Daq3y1DYeCQ53fWxjCCYLGCsLMK3d94fKuL27HebCpV8BnLRg7UG4N3U3GRiWZXY9X",
  "key24": "5ZLzkmE7FVWmWD7gn3izqEjHuVKpzGYVUMhET7ycSfkkN3as3aYKY2q9GcZQZ4q2dHhbqZAr3zpq89LkwS9CRtMf",
  "key25": "5B7wF8snvU1phToy9LJyLwDk9oAoqLcWJwVr4HY5m3Xs6Ts9kUugTRw4UF2zLaRF5pL9tcXPFRtRUJ9CFYm7qSR2",
  "key26": "3x8DWzRbZeuLUSX2p5DSzzP7HMyGLff3Y9Zr5BeADEYJVvyoHWVmjA3wUMK5XkDof3yJxj6Qq2Qq72va67RZqmmm",
  "key27": "3NDvggo8ma6poF1AL5sfA175rBs24gD1F3LcSBbLpARv2gw3qCRWK2KeNnsgdVogdEkRNKiY2SmPTWaEGb55e3fj",
  "key28": "3qEjRGK9hRAMAK3H6mwV2tiqk75ihpJxTzAEXiKe43EQDWPRkhbaEPDMq95NcrZVd6tkjhDZBkxqwUiHNhoEb8Ho",
  "key29": "3Kwy6KTpamjZmAXCoo7XTwHhbo4HekqnnTaRCQNcjSsJVp422p1fy52NLeX5i9urc1sWT7ZvySN8aJdNnRtNNWUc",
  "key30": "DRRASdJsLE3R389ymGXsLdKK7jh2DvvmGPjc6cpHWNoamjEU2HR3QCeh96TKZT1RZH6nkDAMbzegwiAoPyq9EBK",
  "key31": "4ykRy4X7Ffmocowy2kapsdpLBRuCugfVCmCTapfba4srUS7qHrteu5ZiZY7kr62f5ExNn368wjH1Pmhmsik5zyZn",
  "key32": "2jFgKSwLg6Gx1LDpi2oBwX64DZ9pAVDUpfnyqd6hJfAvyoK9mUCn1RVgfuRUCHbzYdvkgtB4tLTwReZcp7rsofeF",
  "key33": "a2auKPTQxLp2Lmd1coLswSYpQiTND4uXYbvaQnyqz5rtE711a851LbGdzmdALLCGfMM2hwTdVpBJmnmoUyFRLvD",
  "key34": "2TQvzeh8aRxFFdUw2wEhkdzj1icTFWYwcqKzochHpC2b4gVh2mS5gHR9iCMdpEGpqizUeHWhYdpp7ozV9XRGc9vc",
  "key35": "28Bh8DuwTosh9YVzc29J32z2YdZug1wrHZVx34n9PncSP4e5dyEX2SgCVfNLYgMBBcPmGG9k2NJUqzx1abSXnCHk",
  "key36": "2p9NTLZD1AtvuJPTcxPXRta3hPfGEcRXweP47uW5wnRgVCv4fMvFrComLtb1K5FaBqa1dAoP23EjLeKe2nQhQpau",
  "key37": "q5jDsxx2AbHMbj7LpjqdM6uzE8rruKoqXDyKuoY3ogUdY2VMcTs1QUrajfxgmHBVj2AWuHNrqkAmjAWhNmeMYvt",
  "key38": "XPUGqScngqctmQD4Dnmvy9gACVp2NvM8kxLmYv52cvqU85P95b35W5xqqHTRR85NhH3GyuCerNi7goJBTwFiqB6",
  "key39": "5GZd6QRjEcRCAzfzpjpzki3AYpZf33UnF3QQTMZaMscm6A2HXkwSLswEE7HRd3VBpPRGXcAFVSN1SqxbmdV8DUhK",
  "key40": "4z7soKGWbh6nNMyDUYnW6QC5GJEzSMsnHfHkmPxg619HZsE7mQvAY45mcdMF3PJFDmQeuz5saPGPA6qWofniNgY9",
  "key41": "3F3WnLPH2EYT4r8Wx3r4HeGQsikA6D1jPUXkSJsMzfRFF39hazksNtUD9zBtyPAESxJ63vPH3QQqomvokoyzmgYz",
  "key42": "5JWgcJapntq5DPTh6hDUmcmoy2YDEfnXrPnc7YzM1pzR3HGw8UnWUX186zGHpE6PTPech9WmjmRiejUiz3xEqZCP",
  "key43": "2wLaMBKX4X9CTBdvZC2gGEwFBqebA22ydShKM9Dr8YxyiK3r9puFhpaaez64oxhhsKddXd6U8WLbdD95mWBVe5qr",
  "key44": "4urSpTGnj2WviVQ1MGoUgWQ9Kn8jYwCbuAoJub6Fp78VWJDKxLU5hmKkTajUSKiEjEj2SN5gL5gj9XkWZZKkY9Zi",
  "key45": "3PQgCe8ogMbwDiUbZExCQaKjpbQdviBd2PAT3YUYQGPeLZ8edTNKjnVsL5zBj6k94Et4UpHeRFD6ewdUkmNKFXj4",
  "key46": "3in5tFWWzdBN1NxR1MpUZx2qt6qq3e4rBRrQgTqXhdpkeHz3bxuRfhkkCCquo3jSWHF9ygkE1257C1HxFFhXPpUC",
  "key47": "4MLtoBT228V5t5Qo8hn9Wgq9CcMfEDegps8KttrdB2ZncP7kwY1T6QwkjTCZJ4hZ7jpiZBirc6ifJ7PwSPs9FWbq",
  "key48": "K9G7S8e4GvVRLyGPiPkEmrF3UKZ7nqbg9b2ZdiBANPF9sD52xD3EUc532o5FBtKDh1gyjniu8kbmrTDMgXX8y3j",
  "key49": "38uenv1kbGKtozbWGDGywTbzvghszq57pomSj2BY5VSaL3j7eVA3uDgUXrbVwU4DHRNCy3mho4oS7Bn8e2Ps8Kvd"
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
