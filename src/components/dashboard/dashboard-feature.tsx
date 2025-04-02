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
    "2YQRHnoDJAdf7Fdt4856ry3wmiKz58RjfZwWCscCUosutRw7D8YfDgfhuEAzJexkBsZGeKy2dQELG774W1dHTWMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5992NJRaE6f6EtNzPWdZA86YndfTg5CcMT1yAeUap8vykjnQWKdNEfqA4zgmSqepbTnthSFbZ3S2i74PKwdv1wma",
  "key1": "bAbG5nCcDCrdFLEUZQJACzuzpqZV5ccHRydS7LFn12C13AVyUQ9Sf1zDy8dw7GHn1QWqF1BCgL8jivuNjwArA6h",
  "key2": "ce9a5pM4H4vTRvsmjswX2PDMztoFjDLU6v3un2fzWm5FmJ1k2fiwg4oSwdPELF5UgrzmBfVgmanQvEy5TMXGJRg",
  "key3": "3NWoS7LWmtbZjMqqcZDaCMdABfAn8a8nfeRtmVmn6XLq3gxeitW5QorLTGNGUfgackMw65S1wRgi8cE7QvoY4WPt",
  "key4": "5Dd8bKtH6VG5V1jrgFfUxg7riM4G87qXF2xKr3APHfpZo7hkeHbU55safi6zWvmDn2a2X5W5Kva1mqJQtrqkJunz",
  "key5": "3V7TM27U5teGzqtdGyDzdAtgpqqoGKN79HLwLx7Zmn8xBnENhdGMgeNrRK7TgzUxc5zUWs2eFa6sYtENxe9JfdMn",
  "key6": "5Wtyrrcb3arfjKDxBTxv9U8thxQJjUDoLAed5Chsg8pNWWdB2HKN6bac6xwczvKxravxau2D2Lujx4go5G7nNWHu",
  "key7": "2AUHFtNbfke2X1fYjg1FRnQ71G45tDCqBuS5W1Enzgj4UAP8pUPhaS253kfLdpKx1hCsqPfmJEzyfb4zW3DkHjvg",
  "key8": "4z22wcSXDgAvAAUwQWSHVEEVTQwRBJc8dcZzjuD2PCbQjpGuXPFockpktr1WyAehJboZ5yAS8FTXebyMhxyDfFtE",
  "key9": "35R355LTEyZyq9YZuUKaw9yALoE37ZyE6oHekuqQKNEJD4CchxDMW2crTiAWdooaq7HnRzXNJzGri6yPuFJh2HYo",
  "key10": "qpMVFohWpGCu8sebvq2wPMxATYAp8mHVPSz9rZxFV6dgue9GszGSHR1gFN2pcouJzB73tRqgD5NJx5WhkNEi8Bj",
  "key11": "4jxN96qpZvXEZwqfj551knLCQBHKTuoJpj9nzQdDoHeWxY2ocfjQRT6wgjHD2hQ7PDZVYatxPhc9RcCrHJD7V9b4",
  "key12": "4rkskLXBGhi8EUwqCvvWxYCrR1pNYFB2vDYJB1dbMYW22coZui1PARV2b4zyzuC3s45yhRP3zL4Ge5SSK2rsaAr5",
  "key13": "4ZX7m5uDDpbEgi2n5stjf6ED4uJyS4Wb5hbuvvKvK6ni5HPmcG2BUQZhmkuSYaejnxTX3MUpWYXqQcq49QRSgQvX",
  "key14": "5r9tXPBX5T9P5mEfSNr5XkHd218QMHFVouTmhNeoakTXEKnpgLurKrEuhmVfdA4iGqNjAotfBteUXdL3pp8Srita",
  "key15": "4rXNGWh53XLNEGFMrZtKDW7y7YJKk6LjT1cCbxqtvEEukv2DKVE6CMGhqjZcFJbxdNAcmK1GcKB3e3aZPosF65Jr",
  "key16": "2Y4sotEBohnGSjnh4H23LGEUsJRoZgScRxrtjUjXFHPs1381xqfvrmnGy1a4YVSAr37GwjrF4JfdvJg3VvacPhdF",
  "key17": "2qqocHgecajuxVgtBL3BVJoEEQPD9AxHpH2YkmKWYKeHtQSazx7TUEwzpN9PxJLDKUmfvJUwGubKfdZNj4VsWEwv",
  "key18": "2mpX1pWhvXiHc1sThRy3gcKjgZVi1jHxCmodvXzMrZQDKAAKHmbfZnMLuH4Mg5JrUHu8yFmyDdNk9PZCZgodxYta",
  "key19": "36LDAnZaVWkeP3GPk3U7GXHv7niA6mT6Lyc3CXjy6C2ECECEWhXKK9b7MNmABSofrgpHGFGXKr2wAcP1ayDd37Fm",
  "key20": "3CouusZiTfUsSbLEMX5djK2owN7Uac1maqdSDfksFTB7wP3sXhRV3GNRkQiiYMQVhMmNh7Eq4S78fqF3dR6UUD5c",
  "key21": "45Z6nH82TVA8VKx6WEmNmmiLtAg1rc4TCehzGWKHDvwmDDwVBLvUurDuqBX4fNeaQRkGMos8sDDaErfSHS9vGhFG",
  "key22": "5TwRYV7NC4h7upNVe8QeUm1g9rJRbqGXzfgvRtCCJ7Lkn5PmhBwkJq12aFXjfJnisZ1b6ES8DVC2oNGiGGm7Lcim",
  "key23": "3z9zyrEwydPKXePVFxeT4Jp9DawQsTK6saWGSvQZkpVUzyCQ35nFyK2tvUYA56UhHUDW48HxEjwpnGv9TFN1Dpqo",
  "key24": "3tB7NyDG9oRg5Le2aWXbEkUj6azMRSsQsp7ibVyztVYWWQqEtsk5WXYzqZg5iZsTycXYuTryGaX6t4z1yZfKnA2j",
  "key25": "3P4Ttqws66h5FTyPfdY2kiiAjmLEh23G9uJsbVjzjubdE1neJcaGMiduLPwJRffq2Y55DnsQAdP2HwiFVSDbUwxE",
  "key26": "3DN8VCAtYbAHoWodzpYcSNA8achpP3eAd3Rf9GPBnd2ZGHRJWbzd1bet5p9h5sqenXsJDeNpGZoj2WcKqGpvCo6j",
  "key27": "35JXSjhsoqgeQQxQ9yv7ejPGdBG7e5UzLvFfEuUDqCSg8aKDH9aLgAEabNRe1PqTeMx5nFYMsMuqiSxWFGtBgLhw",
  "key28": "4UYR8j68vZFXJ4KsABwZvVSSfyWiVtYHGSCUsuNrhgBQ6Vu77ePRCv8xuR57RbmUwoccgRBzqn1fHJspLMFcyiez",
  "key29": "4Z5gSyztezfctRkQZEcdjYCGjSzGYiegt6xgcTsfKUP9kg31z53RcJaymYfpfCjEojb4LmznG2xvbwbTDc4UbMCr",
  "key30": "52XCwjpyofrK5eAcs2MS6nY4g4pXWXKv7VqZZDGKr9oCFBu82KKDMufnqXFLZTecNy9J8GHE1Hc5mnfR5Zn5nLCa",
  "key31": "62koogdTtuHcq9gRrd8pNaNyvYdHWR9oNdSVAJHtBq6enDzVa4Xy82UHKHtiAHPSogUL7FjByrUzNe6B9eQnANnX",
  "key32": "ydYYc5ZvVSXD1XeSXKHLQyiL6ac15gjbvjpdQtZGvPJZPUCXrwnxcqy688LSPacwvkcpMxezacXDxHVUfzAXi1F",
  "key33": "5LMHXrGscbGBjc1VjcEVSkvp1AN7aUoAjEbFcHzDE3NsnQ88BgJ6CriAmqp5sjgdEqmyTAsWQfPxhMZT9wNfF4Vy",
  "key34": "5D1WDcDEso9qrvAJsVKrnbwE4SPFUV5U8MkQ7XmiWqhNRifA56W3L9Bg47ALUu1vobzsXBnuAj4x2XYBJdxuVmcx",
  "key35": "36XnfWUFmXdxmgV5PgzEk9Tp1YMtaUm8dxcfwz5YTQuQ5ZEcgJQHCcYLuYJeGCHTDQSsy3fbqcUCEtEKJ8mA3QoT",
  "key36": "5YQkUj3hYUBJyKBMoy6aedsrQ4s9P6SjPoy3XyNJB8RrwSMbAGgcgp11CHYnooEp8f21JuL67DqMsBGuG1hCJfPY",
  "key37": "59NYW19MfDAQUWmvH8aSTzrraaE3h1oTkurqfrKo5hxtXYXiKDUc4ZXjonkWsjakJ6i8fRzhVPnnXacvwcc141g",
  "key38": "5Eq4XUSD3sRP9ua42SFYij2HfVkt3yricRX6MBPQKcWU3CKJoE6R8GG6eyYpKe4j2qvmMuBgwxobPF64JLeHggCx",
  "key39": "t5RghCTo45xGWk9653nekaYkanAvrVrkoPjP9vhZYimSFupR4Hq99YiVoVyA9BfX4AhMSUTawc8C7kpu7tb45t4",
  "key40": "54kqphQJG9txM9BedifxZpmyxZE2zkX4VaK8WVMCQ5RUSDWJYfzWrmSTRxZcKpVGpCWdtUkHirbfQzaNU5DDrb2c",
  "key41": "5zP1MwggrKhPS84k1dggTtkAfTdLjXYpDpFZVSdciAng2egrhCWV3YJfB3UXNAwNQQ7UocYjWv9TjdLHFHi8LDYa",
  "key42": "44pVxhkwQJNt7u2MRJvpVwvMFeRXoNNvuXqds9yTFdtYLJWFvjHa5Fgmo2HHkoFepyjEeK9bPW5GX8MsgHeuhNNE",
  "key43": "5wVP5XDRMNbXFx9DXeUnsEDcbry7gbLJRbyApvqHRWiojnJtGcam5H84E4GTQgQ2BdweufxvQ9REFFThaix544X5",
  "key44": "5GtzpJXyiow65HXThWsy5ySnkKDLDys2nTuirdemkQTYSZ5MiKEeGxvXjVcRiNVCbh9vcKpoQnzC9A1MsnbXSmR5",
  "key45": "4rENrGks53H8pMBvBRHYvoxmvyMocE46nmDpgcpKD1rdy9W9W3uzwHssM4CwHA32w3i39GuJM3tJ1Qz9D8jFrhVP"
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
