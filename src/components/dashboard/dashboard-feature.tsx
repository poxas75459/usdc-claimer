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
    "5aGwANLQ6ybp9sshk7UjKZ42c8ZHGQtztGYc3jq3skupkRqmXyS4DYExtLo6KRZvRAsg6Wz7nu4H39FTnxqKfiJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E9Sahta5t52b5w3UtvoXGvhi3N38CcFnXDjbZhzayfgqT22EwStCTkB6erGY6LoTDVgRsuCdjosnfdTP63dTkaZ",
  "key1": "64czU78KfnGVfQNEPQ5bfFasukbXZr12J6C5vLGn1aECdkwMqsEeqL2h7q14NkbzMuy2Com4BnwHT7dsew5kZAcG",
  "key2": "3n7ni1oeQiTVReeHPv2FHgBjZuBny6RUZjVkBhFRBTdNyWc7RcdU4ZP8596uhopyy1tZF4KEzEvLgHVLXpwWxUDK",
  "key3": "4bxTKddYAkyTyVZeV8UGp82VLngQsmWABcM2ZQrmbQNi7gQ6ttEkoBebd1DWsyR6FzfHJgWXreampz7mt1aGFvm4",
  "key4": "4SGjKHjgP5TwZ8tqrDZQCPLwXsMwSEWQ9KDKEokPDJKphQGaYt5E9kj7AcVPqaqwspUNok8zABJryqAzDmKy3Mum",
  "key5": "5vVhZpXsAqdUV8epqFYGzziA5RGAKTtqotDMFdbaKPLQdV9Z7nVVEshHAqLx5YNyUP5oLaoJdbfhR4xvoCjrxsSC",
  "key6": "2nekacPvnAQwpdzB97NA6ip6yCUGejGsiSrcwXfhe9PfJt8o4voc5zdYgbY7vY4hhpwDszRni6h5r33tHmURX8ou",
  "key7": "5wgZv2inNbRPPMNsLTtmFXoPxrMvwmmvM6JXncyv6Dw6K9B8BrS8MJU7EohwUbtroWc4bQEyipE8jd45s7ThHMyV",
  "key8": "21QfsQeYMos2GfX9sCzJDrxy1dFPixZETtyZ3NP71RKfMbKb4CZy98AzSRMwQKtxUUj799Sr6TpfTNxt5QWQkbCt",
  "key9": "43MrJkbTojmC8S6fySJt9Lno6KmiYYp8peUazB7yCmkzouxEsMbF3SXeGdeKVrD3NYnEN7bm8jFty7yspne1VMQ5",
  "key10": "DmrPrhBveKRjPCyif9xNFgoxcRZuxAgG8Gb3TfhBaPtco5Erar9ZW5Y84PeZTwJFJsjNRpr9shMT3oW8GwnaczJ",
  "key11": "5VHLcf3aznoJLKUkFY3MUd5Nm2NYVQCAR79Zq9Yhdwq6Z5QruTzzZ3ZtYZajbeAVXp8wAFF3HfTd4n1SmS8Zcyo5",
  "key12": "38iVBWMHHuZeurdtHHSeiznXCkvmkYA1VDke9z29TgcPXUrCL3t7H1Pf4wtwYJgHk6UFqp96VkSWbRa647MBErCT",
  "key13": "3hK6qqPgSEGaia6VQGQDmx5iT1L22F7yazYyimbBobnyjws53FA3XbHF5uGX4EjnYMVab3sknqg6ys2HqjVVgkkm",
  "key14": "4HS7xvQYRekhPP9FLKKQKy1AZr9WyHsS2EusNp5AZ6vdiEmXtvLNHPvegwCCSZSLwcZaRy1dpq38s7D1cMNMuTXM",
  "key15": "3BR28J2NHzActiEZBc17qNUEoNw6nE7syHvtC6AhmQMZdJdmf8R44D2TpjcScZx4G54ct9H8kFEtTUT683EKUFXj",
  "key16": "33oF7SY4gtBTFBFSFkuNZDyVTwHzuwgoapMRBECc47UZdKndiCc3g1xMDxm4F4zwutafdtiRYnYoUDyA1p5J9FXU",
  "key17": "BP2NBM1x15TphFsjZZXSe9PP4AbwLpFCZuVoNTe8knqdWAnXdnkc8vo3suhsxg9Zv5ufyEiFaPwRhcQiPowu7P5",
  "key18": "3FdjDfVGRGt6YdQyBwP4zbMw3Lhm6H5C3xGY2FpguVqDqEyz2vjE7N2iWBuwdE4Ni67s6B4VJNa9NBwV15GdLW3T",
  "key19": "2amP6WZrH5vo8tcXc6kHMKmCq52ngLs8BpsAPoXuwHwhqFWjTW4K7MSHSNBSYps3UPrxE4EoaPvQvhXxxydBf49p",
  "key20": "4um1cWo9Beh2BT1WPfDpj4zMa6MtkNz2BQJaWrdZew7YxcXTRj3CLJwHPSMmhrmqxMZs6ewUfpCSDrMpp5QEELUp",
  "key21": "2USk5Lz6adBMWzTBfhjH95ZFtJ59HWP6oh5vdvYb2HsMcAYTyZzR7HNvRD2EnadmuN2ZJxFtiTZhGBReZDjFDuNf",
  "key22": "5bqa6JYWj31bnSK1f6EBsvZWjw2Ay8Q1S9voEUTVVFBpEQ2scEKNmWvwDLYm4G5WSX2aLEzFsqJePu6spG7GbNZr",
  "key23": "4SJiN45oDHNCRpByw3SLQX5UJsk1nTz1V4zWaLmNtavgcFkFmzYKREAYiQaaARUZSd34o9tA7KAiAwm5H78dBUkz",
  "key24": "3EkecYx4Ev7oty7GygTo6NQdq9ZstAWNe2DBtQ1C8M5ZjJgaUMpsFS8BfejRrorAjAfLhVAvvfj5JK2gGGpE9caF",
  "key25": "4FFXXaWGyWjVaC1dp1Xg94VAv3qvTfo8L8RHNFYaCHueWdXq5uJxjstCxMfS2X12F32J9BfNQXJkQX8514PmDe21",
  "key26": "3FYi2YmYvY7WHaEDvsWpKMuHKjvkB4howPsC5sDmsSaG6rGzWxaRqdkj4BzWEuxxAxycA29w6i1Tv9xkZWvvg97Q",
  "key27": "2yEKvFBnqJxkRFoid6HhPCmJzTysHwMJS1yx3RmBqR3MntwMTmgLgRE5xVvD7gxWxCfpU5JvXSWaqPPKdqe6frZb",
  "key28": "5akb2oCJ6Neeuvva8a1uF21yRushNTF52coiBVxDjhDcG9ejxAAPix5QyfbtxihWDbqHwjBC4WpNteT4bD82bbbU",
  "key29": "3zjezT1oNGxgVEW1AVASyPusf3hGSxyQMXo9bGY9EisvuubnhyzR6b6RiPCY22Gk9J7ftuYZz4D5pHWsyxygy8JQ",
  "key30": "3HkSubHH1Kdbg4kgvfpRYoDqvBmc8NkgrbV9X85EGSG2BdHjivndFbwWuY5shU6ZFCxcRS59zDLmUrcvkySX7F6L",
  "key31": "2uoSfs66q3q1gVY8xXdGLSTkfJy8W4w7igLByZMeArwwZCpzXc31PEUKKvAqpvNYkuMBQGjCZXVJgYSQvniMuf2D",
  "key32": "gUYhHPecK8EVUE8EgRnTFhoFscq3w68LjPZWzTXJ2M4JPRXxCgFPxnqXDihAwkfVLQxKFSbibVhr8jGwR2m5iXh",
  "key33": "4qcamhmdj5VLKYQdPaVSbGX5SJ13cXJv2BEpU43hvR32pT1LZDFHzzGxgpJm8G8GbVfeF83jJCYevskpa87tQqDt",
  "key34": "377KQt1K7kMdoTy2JEFjJeA2E3vVRfbLdjxfFjiDn3Lz2WfAgrdNJQ7BTRmGPgsrb4XzgKVQyym5tGWfaadnSfh",
  "key35": "4hyvwPmMmQtANHUqU5cZSn8beYScm9Y7vcU9syjsH57GorApfrBmFPdDjEkChzK1RG9yjWxjTnuWwH3YDZ1Cr74a",
  "key36": "5tNtqS5tPvBWwKpaQRbAJogEb1wXe6gnRsU2GJzZakZSGi7M3ADUgiZweVuxg3Xfaocd96eVfznB1xxU4BynxGJC",
  "key37": "5FsCrvmHkriycjPxaQAdoX3DebiAovoDrqmVa3ejFSJGZUPu7dJSVa4UsJ8pSnq8Ps3VVdbnSE4uViuxvRt8ha8q",
  "key38": "3rVwWHgChW6FzEm2eRm6atNVtUGevefLo4BiZkzmYmGxih84kotK27pd7gJL4itBsfXp3B3vhtDseMB2FJrC3uhZ",
  "key39": "8NHdC1LbxPtGEwAHDfkQBVD6nWqwYDRBtxyrVZ1Ph8yUUFQ7JuUPLEg98ULmisUdDE8bV4sX8a6qnNGMAkQ2uCf",
  "key40": "2y8do5z3fNdunSbMdUE5LtAafKGjxzWWdjjKYHsgfQggprij3NrH8VUGvcod74fmHtBLpFxqJUrUo2XaHvJQtYyH",
  "key41": "3vzEgyvcvzMRTHog4eaxprhRMPyvR3uhLkyuNK36frbVQYGVPDv7EvpgBcipfE8QGW9afgGQkZenYYf13uKNvP5h",
  "key42": "4MyDXTX6F17LSjraNhJjW1YhCFdd2w4CxvAbr3fvW7BPSjvp7CFVXY5SGeQFDg6LpjnJoDrTWh8sF1SG1PHMJ8d5",
  "key43": "52XGjG1miREcajjPwr7zZAYBcv8w7hrNuxvUvdH146bLGsCRihXsN26uLQkXguaXBi6yXTKer2kRn6B3TYVbeSRT",
  "key44": "4xyvtYBbWVTFcNjWEghRLKTEocbX7gv3UDQALwSTmGLUFgoAAVHp4XSL9TqjXztMH9uC8sEzDTLWsGKPkTRShSxz",
  "key45": "45yxFk8pQ4ngNw7rAhom2GfecpxFKomLvPQQWeVh99xWyqkvjv5DhzHeLMVGgeqc5E22MGCwSVkVPxuEqVMrkMFS",
  "key46": "2RhBGMn3ZuhNfDzQCDcguRaT6afvjXA2pZhjqJhxgzDtQzxNLXyxwZG8Pm1F7mTnz5bVkWuWGYUPKqAiQ25Vw9kp",
  "key47": "2zFT38A7YtfBuJ6d74fAid52N5XYqn3Kgj1mXvERQJBwaZYTcBJVFNtp8rxPXRHFkZHGLS2oHj3Sz5f397qQ2oSk",
  "key48": "3zkFSKv4tF2a5mXVMTuhNLeN16pawzRH6dw4RJWVvCmDr54ZTyqqQpStJVUr4f4ANc71wbAdHaFwBAPgSFvmSibq"
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
