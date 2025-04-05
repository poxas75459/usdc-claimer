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
    "3f1YSpTTgsbPrxWP9ACcKm3pqBySvNLgbupYEqWrBV6hmMJaQafNf64XEQ95tj6ei15eLr3fUQzTeS3DP3i3ns3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q8zNDK2NYCvRgXqkeVYdyEDvzRP64FkpB2uozccCzujr3XK3LiKKdEYYPBeTfNV1VmafnVEdyPum8YteW4mH3PX",
  "key1": "2UmW9qVT5dH5ftdgVGfFLaSyWhNXYwgcQhyVETijcJjJu9rRSLMRmibsrbujTnD4hqUajXeJHkHoVhpDWv4ypu8E",
  "key2": "4wGoS3T3HrCFmsNFbpYFYJ8tbUHRdpq661eRdtnNkoNNsBdTcdwhE9u5MxxL8KHe9vLX4CbNxQ2EyT6FPRWNs6Da",
  "key3": "hsJ9zjtTveAH1fztCTc6q4MQTRLGRvTzpYfWqqg1haHbrhuFR8JMcvv8jLLbjusJdNryTmH96fRsRcMjvRyK2Dm",
  "key4": "4473NjehtQAxgqC9eey5vEPK8XKHoaboRGGWh8FYKUdeLenjubLjHvKS4Aw2hEJXyrNgFmVnmb9mjQGoDhrJLLdo",
  "key5": "2zPYSENVtJgSoUhaYeaxBWYQjcmbHzp1oeQYC6bK8hHZ8BvEkZkhMd5Vf972xqY9j2bj9bStCuPgmiQuTSf249jP",
  "key6": "3LGaPPkfvpwCzj7jvs7MeufpJH54dRjyQL81hEUfEq79HNFQghy9XqRMxpaqHB12ytmsae4eXLxQwz5Do5zQZnuD",
  "key7": "2gJsf8mcZdEVgP6f45bm5dxRPuwRG9aBUJV4pmSVjC9H2Xbaw8ri6FjJiqY5VWnFo6jNkBG2C14G39x7gsDo3dvB",
  "key8": "5mwBQCjASperW7D9Xkn3g3i8KhiPFCfDRcfXhZb3cEZPPVux5wEXvMfyLXFGrCuDugQStBKtJBuk8NuBkBXAq2B8",
  "key9": "5umrYHmWMrnuwaGXYSnP1EtvmXsz7BicPrRAKHJqhPCZHQNtzVr11DDHFnbPekVTqmXTBigj1rnuqJHtXLff1EbZ",
  "key10": "2N4aMx4JGhbJYXPodbi2pRn3CGTe1SCZfmgTKe4CxQ1Cx1teGAv5urQguwvHpT9CTzLayjg58gUzFzKwsywPHpF9",
  "key11": "ABZVyNBWJgnKkuZbr8zv3wbnusD4NQsgw6HQL2sDbQNDhpDPMn2Fx2RXFygpz1dFMCCu3xPd5m2rqVDctRbKDN3",
  "key12": "YW1H8CJX7NXSKMJogbKaV3LNYezY78RNB4pib3nnBXHBUP9Rc55HnWAWxHcmqzUNsZDKsVtXt8H9Tp2oMPyAKfk",
  "key13": "2GBWL5zqQHQgPcpjKe5HiCJz4mjBbpV42WrA4CVt6bEbTNfbJg4LnFuUAmXDXHDbd3cdkCVVu4NNnD2EWafF6X4Y",
  "key14": "3DGe39jUAuREMYfg5VjqNz9pQ5eKA91W4fjzMmPufPct3iKDCJ1Dga5Vm5zjYNJd3TCY6QCk4wTuqSxgyznTtjeg",
  "key15": "ZpTCztzHTs2Srd1NK2tYgPXBEK42nxzFHubAyqeA8M2vEdv6TkZpA3xwhepxH6e9v2aawJN1nepxdPk6WHCCWtm",
  "key16": "3RpxMmEoDRVTJer5nSKUAodp5sp1tXtkR3cvR4AUknxEEERzgxK6FU1LK2fuf7Y6RrV8dS6Z7dQaPu1o1SiGs2Zf",
  "key17": "5ppmqmQZLDfdayfsUMpvc2rMGnTbe9MfAz65nSwj76WHQ1Baz7rTGV5dwRp52iPWqQPijh6Ls1pxg4bq7WJRJNgU",
  "key18": "2xrQBoaywqn7KHjdSkotsujDnX5rYSgUvtTKGA94qmAzFaTdi8FRkcd5qJ5hvGBeiz9qtnebawP6h4EYZv7RLLky",
  "key19": "39oHPgCZzmh3Nn7uZaF9T5gtNssHRdbka2utyWQ7HQZ45Eo345ybrtBTHTgPkPzWubvxu8HXna1TmWZu4bqKrmvV",
  "key20": "G2ttqvVDwxhgmndYVq7jdmRfeL9p4AKFGwvCW7Tc8Vh9nSfGwuk8JxtV8cwMGJYyyoWkmtgdqQ1GH7v1Vcof1rg",
  "key21": "Y91vMqzr63RGAhG4K5KPFvyKRFGuuD2ykR6PhjhfWc7wKANyEDeED6znGSWUpXxMr6FcXAs7qA1NvXkpEoJsXDP",
  "key22": "3AvrdkPkXYCfncQKBQDx9Xi1qKFy1AdVfbSsAXmkeVVhKPJKhBByVDY2ysghqL4jzxzPAFVNXWytQJG6rytHPaND",
  "key23": "4BQLz6iSV75yo4KiGDrTWv4ArbhVbsDKtenPfPiAY5PtmL27hU1r4GeLqy3xmPbYBw6J3sovqKsKJWNDhaP3sBeL",
  "key24": "5RGWpYs6aXGVHvBJFdA7ttSbThtZDNcZtjaAuisbVUxoVKF6C6JVzu6cBsQcQfpJuS57HR8Bo4jH4zuLMKkPqkUV",
  "key25": "2AuHuwHoBAxjXe5GbnaWzrb2itRmsRA1pH9YUHPqGec28Kdjwsd38DME8xDW4LcrvCM2iiJWtj62KedDjeF7vBam",
  "key26": "3F6UXgJzoTfJteki1j74SJv3GWntbqGSmjSvFS6i6PAxjS4ZAbtMZ6sT5pQnPdZBeLB21uUX3bmoDBjhtCTj3UXd",
  "key27": "pxSMkLDTvMhbj2oA8kCpyEn5ZqEfb6fg5QMPJpuGMw21TNgakvzc4vc3tv1C9odRuimm6XepuiFUoQ5hZfx4QHb",
  "key28": "3BrXe9Vkx99Z7uCjTq3RZtSwrxum9yuoq6ZmBFq8asA7M9yTYyzUVaRswbqGv6euMUbn3eu39dZA4cCZGAjCkayj",
  "key29": "3bdHsfL5k7eoWnEWF1c7zWiZWz6rfns4LyiyBHtRsS2X91boiW53HStUwDoxhg8Biev2ibJa6isfA9tyXc3JiKtq",
  "key30": "dGYCW5Qj3vrZscy3g5ySMQSLstVYs6aN8zehVPoa7ebrsrrpUXJ689PmbHzjfu9iaAW6wpVvfJn8uZH4TFFD4hM",
  "key31": "4aFWWta3N4fFkT8uSk2P8PgKmu7RBjRt4UKt838FcK82gSw1sG7wdXV3XNmm5rZBaSwYzz3qxYZ92FiJ3L5oDkcm",
  "key32": "3QSdoeak3Q8Ts18wSvN3atF2qBz9zADrynXGokKK42FgQRohaTXtdJWdEJmebyNhZP6xVoZnb8rM2n9fzr6E8h3",
  "key33": "4LsAa6k6ALz5qBKkLyhiMdeyD29K3RBTtnqq2kBM8Qx4quYyQi3Tp1TxLxtVfUxyMSY8rbR1p6yBvs1ap6x4J51u",
  "key34": "3s1s3F2bwgqs3pVQH6zqUhdsxtH111pbGw6H55QjXAymsZVzBd3rxC5gJbEFizMRb5McArouM8pBxCYX6DxaSCEj",
  "key35": "kgFbmii2yHWyT6pvyVC1XDszuZg1oaxNNiDZ26oa53y6SUWZfC5V66PVNJX4Xeiz6Wgc2fHGkqCHGvsCKpkpdhi",
  "key36": "NLME7QVGYWcQ9jUQKYrV2ng6Hm27vanfUGrAd8cMdbJc4jMCPwzZPZ6ao3d6gfBthAjAMc4ET3mHYrQ5pEw1xFc",
  "key37": "3i5eqhPD1R2JPBrVAjhBGCkEnsYaHCDQZJhy4YSUN5SnB4gRE7ixdddivzP6R4sQJawvbVVtXbcvA851xyvXsAMN",
  "key38": "2tdUCTKs9MAogidzJWKs1ewq2pF3diGyPGAKD242Faijc8fQn972nd6zA1r4M3TwzQUjyxfVHTbeapobk8VxwJ8",
  "key39": "49Zhdtzdx7c8txG9Vo3PaeN5FdkTmsRPH1yQFRLoq2iyyPiYiUCSjxwRXhtJCYn3Vkj29ZQhdd3o85LHX7NqJ2Gn",
  "key40": "3PSjgnLjH4WmWL1ZbJYhVsG43UU9QcZjQ3Akv3FgJvUhsnKCwUP8SULLM5nQ5mx71PtwLvpPLu7fWJmpRce8U4mW",
  "key41": "zmXkZMK3vPXmKffeVuNc89nuRSwX9HS4EocTXLnjtR7tR2oLLCBieBjZWonzMLXRFb2V41jTL7LowK82YrwkM9q",
  "key42": "4zsTmUw4QjQWu5hn8dsrsMEtegzzFUEVTfz8FiUa33zx1vSv9gR4rCMYCx3XbWWobPVxhW6EXgek5Y7c98C7rkQK",
  "key43": "47UkR66NzNPmmJURVYQvvrCiEcUWPdHbSbjWaKDaaMGsQRBZfVX4W68VXa8fqZbeeZgFbeBewb6biXcDTpiBRkQC",
  "key44": "4dPQMgdFbt6mTpjwXRG4kPh3iaBv9ij8reziQGUaUeRQ4z8JmuqdyPXtLVKYD2yidUXACRBNPEEw4WuCwECRznga",
  "key45": "o8JkUKTFWtojsem1DTK5sMR6otpny46Kikpz1X2BrP2cBhvduSPp9cBpypcwSamio7kGVUqeY98bVZ5DVBjQT64"
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
