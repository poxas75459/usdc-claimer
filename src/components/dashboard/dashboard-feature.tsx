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
    "5fk7yApcr53tdsUiwQtooWCc76LDaCadZkBtPPGfqKMahD1r4GVHcMXVonJqhy5mVZKSSqsejnP3Cs7WzqwiJH2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YGptGRYzryq3NWpdXtt9w43PvyabkirSoKXm2tzikpMRKG7NvewF4BuRnE8MsQ5DTNPAEX7HavLc9wxVAupshyn",
  "key1": "1gjoBtiN3E6fv3tyLvyZmN83vEiAEpnykUq3Lry7Wi9WnH2kookN6bMKwghtobeBwLL7bR1SfghJX2WEC6J6F97",
  "key2": "3TWNJr71MHr2JJGS52EgvAeR7F1sT29keiDJcLyf59zPbfanQkcg4jjvS6rm1RNGCQTP7vbND1KpDrAgjHFbomkM",
  "key3": "EZQFUFWhtSfwfg7f6XTpyTefLhZ7xYGd4REbdAoyyXpaAy3ocwtxwsihe3aKZiHiGSyWFZqZXfjBgoTWuMXm7kf",
  "key4": "342iAgirbNFhvyrvt5ReqDNPM8m7yJnoS2Jrq9hBYoceVVKBNLw6DfFrzhzcE3EYGGCLWUpQXY4kc58Jtdmb7gMD",
  "key5": "5ux6K7iAhQnPq2PSuFzdt2ndQDwZ5Z62LmHPbBjuU8xLyidajxCLWw5m9Ab1CjBRfvpqMH6dcdozjdKfHvrrA7Z8",
  "key6": "61npcXoiqvTjDzVZtoXBRHwBwEyoGSby8EcNPkBYPqmCj53oDfEfSqcHPXUBRutbZKbNfJkb81hVFXvjbNKzif2K",
  "key7": "4QcLvGSPW66cKVBCN3SwKJ9Q2WDgmkRgbnsCAaWfQYqDVHnPJqjteMD21SWY67jN3h3pwcYnLHF46otH13EjnHzh",
  "key8": "5DY3Wuf1oFxSthfyYb9X8KY2DKPv3QTvt7m8bkvL6nrz9HnSd9NaVZSKezjDdZSyz7cLz1YBsheofqjViMZbfAAs",
  "key9": "5C3buDyyfasU56tuaTKPD4FC6hGeGTj7ikZoigEm87MtPoLSEooAhuPZRcpFTAW59ZffFoMc7PtBk5AcwHyRBywt",
  "key10": "3kxgQpnJkPXEHCYPJkKfUEcCteuM73sAmr7LqN5G2qwDjb3wMAHGXssFM73R6FrhPwEXiSSm9NMa4nvinz1yZQhU",
  "key11": "2YzGH7tbTWc4j5uq1wpUb9pds8dVvxCFBEscNrvseqExHFMGbac5hPm28GFZCbNEA3xkWzYzVC9ac3iqYB7cgvBK",
  "key12": "44XuUkZkXNDSCk5KJXjs8M1VGxwHCboNdyHjg976jkjcRgwAEfXdeayzXSyET72oc35YM9wFbEg12N8zQkNoMzoq",
  "key13": "4aDmLaomXqUxk1YqftA3sQzXJb4B8X3mRmWw3t3tKmjpGZZuvskibzuWqtueePjBm8saDs48f41KqQ125S6nh7Xt",
  "key14": "33rR2Wgh8t9SbaP53L9C4cKikLgR8PF3MwUSAkWxAJEoK5gbBUoThLNoMBjziqdxCRMPXtBeWkHobWERfbh7vTou",
  "key15": "5aG11iGfcfJ32sJu4faSQKrTw2svdFVJ4FBUfz8s9G2uVBFzN1A7pVVAsZv5YH7i92PXCLAxFHqPH3WcfFkME8Zt",
  "key16": "LXH7hXAuesMh1xchPWuE8cWwSVDKL2AyWs1WRiA1GkX7HZ4AbyQTCvnRqZWQ6ndUbdRb8f7omVHMDxMkh1phxnr",
  "key17": "JWNME8ZzW8AoyGYWZcauri9f8iM3VXoHLRQ97DzGmYbMauUxNYvP3uJPsL2JMraugmTZobbRFQNzoG5cbfJMqiY",
  "key18": "4fxupHNhTwWy8c32L2D9PKLNgC3ZorQa3v6ehuqEf8FfTkFbH5Zynddj8whQcw8cK68WGkEmDJGCVTNTjHxxUFSw",
  "key19": "5FsHyn8EER1RsdhJ5s68zXDxDkYwfxo1yaBRWb9H4eBGk6n3e78PbfBgUf8Ry9YDfXQTKBrubJnKNt2FGcwrfAeP",
  "key20": "3LKRVZWpAXL7EMQ5dHfT2RwDpjwemgHVR96Dthd5XwirXUghzBP6zwVbquDTWWgfwTK2nAnLXfFXdb6FZqhG2acU",
  "key21": "28y7N8EP1pwznVSByMcCKtqCSK4G2ijw1g3gR9mCaysvitAhhoWmgLzN8n631X2s5EJMA5BzS8AG5E9AaZRpA6yo",
  "key22": "2PVY7HeLdkryZUve7h3eioQTEYvFSwvJGAWki7ZW7v4wL4VNTZvXzHZP2go7f6qyM7HnpqKxGftAUwzGHQuwpRT6",
  "key23": "oQS6uhVysaQEgRdfvP6hHW3KA7PryGXqGeWiJvUYq6VjGWVtx2RARV5wwormwTH4EgWc5ivirKCTTeCb5Vf4LUA",
  "key24": "65MaLE8ujbvK9ddBmMshPtzGXSGtgcFSMuvZwmvk9A14FQy4Qx7nTgbcZ371nHbvvFeGAEmc65zTw5gC27wBDbwT",
  "key25": "48HafjQH1jMgdxfTSYXXUvtLnW3f4VeLGXQmn1NAaB2Nsdi3AxhHBTnEdA5g7eNKGuGfBZdtEffDVWQ3oa2mK7zQ",
  "key26": "38zF635PwQ6jb19zVBH7KzHCcyiHVWV4iGmzd3RpJzQRuUFGiqzWsXh6q6hZY2ytYtxEQmeCpcyLpKgrK9xeXHrb",
  "key27": "5ZdBNYxAYfu3joNUH6H1B8ApTm8yFByrDX4yheTVonP3EMKLPR5ZXiUA2vE4iNFHUNks5FFYnFZoC5mEhcNqFgNS",
  "key28": "4tjR28SJgZTavnpcbQsN7pPsbHkAi3o2t1Z96JrNjncfNFu8zCr4wdcn9QNKhLiRgSshkefhVDpm1TQvnDFAyYog",
  "key29": "4FULcf8KuNdq8VLujYcsQDbXai4p6pbSHUaBGzzBjdHXeCTdDuuH4kXPHet4YDo2639oBh2L1NmEwAKCqBiPQvEC",
  "key30": "2mv8qdTAQDWipRsiTeUanKtuP8HiubexKfYqY6d6pXN8M2uenJFFSusBGoSv2AMsjWz6bCKRUffNqeLN76LNoxiu",
  "key31": "2FATAfucjmXC58QChX9eotZhLYx5NXtPbh74sy9GS8ugKoqCR8bFnfKaFztyGx6LNopaLDonzMGTDde4ZCyAH8gL",
  "key32": "qwGzULAFhfZwecGz7mnxUBW4D69ywFD67NA8oShomJvM7uEsyv94KXvagqJK3T538JqvhMcNMLGydDjhDV2tcxg",
  "key33": "21wHqn98R92kaM1CK4a76kSbKmiTTZyEPTRxs4kCtskhuPCuXR6vYxx3uk62g1QNzGBCP8LkBjRFbfCBNZMs6w1k",
  "key34": "5xsig6QCBb4oa9w2y1rT3avNRck4m6P8U4s8TnwaPYHHxi2zFSKA8CJ55qDNkDrSgR72YTsDxZivJcG6EoJG3LXS",
  "key35": "r75W3BnkaP6eU7edYAQDuYnnbfk39WNhqeDqHeYEBARaG7MjZdAKmpu962YVpScNLM4M6LQups8K19XrhpBojcJ",
  "key36": "4LqhX9CMdTu4dMocZGjPTYQG1Hi95dN32qdjJ3q1vQWb6oeBNL1mtkhHGd7zDW2NUvbns9P5vU9JJigFpFV3BsgH",
  "key37": "3tes2J3fXGQRNRUP221c9qZYenDaw9PHKUATXyki5hT5bEu8HkrbgYVobiXe8Np7Zb7KvLAVPAtvKvU9pBeYq6A1",
  "key38": "58uyeX9y9JJuo311eviftjAu6jNcSss1DZGGyYP58sxqesx2rQyDWbpgVtxuMYxVugPBN7vbBbXZifiCxyKux31p",
  "key39": "2PLKunN9bvWALdN8yb4gHKbNyNsCpaJoWJWED8iqwrVNU7vbZ4vDtDfMPhMeKdZoyxLWFu1sNkttNqFHHRkze4rM",
  "key40": "3F7jAo5twwA5iV3XrtfshdGV2RwjTj1hzRjvupogAxgEdh1YJjXt95LmiRu6EZPwEE3rX9a7jMbj8L96ZJuLkrtB",
  "key41": "2gx56rnzygTougFUdg6H72c33VbC1nxGSk6hWCzw83nC5vqCy9gG6TAwVy71YtVBVkN3XaS4kTdjSWg1Drx5RJx5",
  "key42": "4LfxQvyod67e8hy8jofxqqx54ccy1yivKNLAg4RnZRB9hPJQLMzEriTr8AezBYs9YmEix3TLyX4LhZ9tdkSSDESA",
  "key43": "4P4mfqJDhZ3naWpXQgRbqqERBeX8cnF2iYbEwWVcCRcpY1ejWn3BGqY8viUZiGmS7w9hR6FYskr7vHL6HQzvrKUu",
  "key44": "bfg4mEMAXx1jfFGmfEGJgd18VrTAX3Kw8wVrBkCeKyKLSK7QpQ7FbH3KFCSr7iX8ZpUwmbpfixAKQX44QMTyAtf",
  "key45": "5Ko32NDGFfskXiiGuJZjvPXrs1dGHVYo67LS9bByRb49dDrCUDqH1PVMaysFVNdBd3vnUEcnBDhhTjiLBR8sGmGA",
  "key46": "46rLopKhCv2oJ89xz8jKBLYE5QReKRAydh5ADGQiwYFjhKQiW354h7pnutbPnk1GaxXndkxXXEtsxBRGhQfcvjXy"
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
