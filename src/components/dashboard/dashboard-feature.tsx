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
    "4LbCKQxjn6hMWh7hZW83aEVkerZ2KBTKueiH8AoTSEtNpHSUYKoGAGPhxPBJ4q4kvmdqrX8rtdhyx7MykDkuchjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xRgH2vNA5RS5GK74HY3LootmMtooUJFA2k2tP3wLMpzz9u9gDFBzrxe6LRStVHrdhQtSufmNxbgXSj8vUreM2Ay",
  "key1": "4tSucNgQNNZt1A5dTuTo9uecGsfWpYBCyU7njpXuTxku7wM5ey6c886pXoBjXvWHnakwuKWZqKoDNbDgt4eELWwH",
  "key2": "2Jm7ZAgEC1dxGq9NQrFd14Ain5G5nuETTs6jz2CntowJzq7x6ejTpsBBTBrB9k7vi2xikzcXwBCx7cw9apnS9Amn",
  "key3": "5JANaKqAqAZSfVjWryxiMbPXUEKHXuCser6UmRJHx6ZHKwcyew8fMCzGyp9QM64B1ZPL6jUxEq7jE7EqNyrqB9M",
  "key4": "4gxCQHegeVLZ5Qy9L6u5m9csRffC2ZvRkYJEPswaCF3RBUZyjwCRVjzaHhtGMDdX7Ppu5eurrLQKTSS6FL2Zwnec",
  "key5": "3MAdwPvxbehxjfJAQbLXGJyychGBqAjzKvLidK2wZeLB3JTQ2xNb5Bq2FyQPxUHfJhfyHPkJqnap5WuBJv272dVN",
  "key6": "3enSVfpzAFBT8Ey5TytbxJh8BJNwzhyTncsNqbSTipas3rdh2heDUd7tBj51uJHLdGczrTAcs3zsZpBxwhget4vX",
  "key7": "4U1ZhcropEaapLZggidvySLdojRZAzdraRvo3So5m84pVxsNx3TMvnSTeQpAkEriez4wkf2oKnvUQwXhwQMDRQ9K",
  "key8": "3xiLT5a9Q4JyrULKbHSHf78sxKKRQtpzAj9ry2aJYDphBeyJW7kNucoML62CJP7VHpW7WUVrHnZhw1rQUF6VNTps",
  "key9": "2GuxXeJtDdxZ3p1dptZTSpT2FVGGdLL2XpSo38c5Ty6QKEwwjvH6v5CWr22uBg2opoYqe6mxFBFuic6wat2HaN3G",
  "key10": "3WcY6cQ7HtpFWwaMyHQ8h9wXjViGW9Nx1EoMMaeimi7vY1QWpsBo61k6wNHRpYdHn5fQArAoeJkcDrdArx8snNaf",
  "key11": "2DWMnNPWMaMR8Eyf5pcfScQ71bo97vA1XUcX3CFGFdCMdbogDXbM3cLodayNUbCQsQMktH1MoL48WbDhttUCd7RY",
  "key12": "3XymUr7ryZAp94SdArWqNeXjBAfPDwmsuksSjNpanCHaNts6jpBWt6ZP7NRf9YxwTfcNNeQ48W7euG36vzuy1iMZ",
  "key13": "1ywdNx1dC8Tb3yAqZJUF7R9C4qjfZoVNPjjPLHoAA9oeSbgQ5jaMrsRmx2eJ3CfD5H6FBDZaweuxCAn65tUyXHq",
  "key14": "fTEGJwgNoD87vDrJRYpDxRGJnSiDKwHiex9k9wLkLy92qPg3vU5n62D8SDLKg3GXDadJQFcbNdAQXXc7GVacQJ1",
  "key15": "2k9hQv4ZbsbKqs8MHLCNbi29ti2na7oCmMQpuDQRPX65A1x1mgBAS9xm1Q6LekEcZzemx435aL3KHpLyhTAM3jWP",
  "key16": "2BnzZni6gPxpgLNTzft3E92pHZgAgz8o6aGwDkT5qNEgv4rUUkCGLfrei9YSXD3haeF71AGaRM8E28JkP49j6rTx",
  "key17": "2qmWEu3Ssb99rxpNrvr6s6NpDXgiS5219nipqGvdrzJs4hQHajWYAscvirkB3DxtYzUNdkaoJZyJW95aXcWi2pP3",
  "key18": "3bn78RK2qxuTTiZS6u61iZMvJxVPYKvyFPaEzusJ2RsgkQE9UEqq75x3nReYiFs22F73QqCfzHaveZ6BuS8nuGnV",
  "key19": "5x959ZpkRCHNJWQK3w87fy5PkoJQkjX1tW4ndnEpLStGfwbLRAkYfKCsw88nM6U4rE1hHoYyrbLhrQ6e7GiUJaha",
  "key20": "2F9YdgUer4fYQtxDcNabPUcfzV6DKWowccpQfv4kB6Mon5FtYGerDRiXkPPXnJvk3WJPiMnNmJFyzJ6QfbkdnS5C",
  "key21": "4XUNN2rfMECFg9wQYuvx1vFgD9xwaCBWGVsbBDxZQC27iMfUC7QBEKzXBaabQsFiWG2QrUeacu78UrnATJPeCaKv",
  "key22": "2rxjwoN5TpRbSv1QDpJxAkAxJBRMuynNcZZcA7HKLJQy3TFMxmesp2MADQa8uwqPdkqPzKSDdZwGetBtV9w9Xch5",
  "key23": "3MuoKELDUXCmTrsZawXcxGjNEQrDAMVKSwGuHUmtL7NLe52JK2P3GStYt4ectsVqRfCPtsSy1Jv5Ma147axum89K",
  "key24": "29JQjvUZ7WQu8qo6YyB2oMMPbzyu8pcnqC9evebqgSHK9LDqoerMPzUtfkioYc73VeGetYHiQYcJduHR16EQUYVF",
  "key25": "2hPV3WpKLSmKWStnNXcgVHawn2S1oeL18NgKZxMXvBAL7xaZxbiNA44iMKAmfzukoKse1CjF6DuTZb45Nwj2qfQi",
  "key26": "5v8pUPJcNwkpUe2hPbnqKrTUiQzaWoiry14rsEeiPPvLML1UjKioBEPFbjomSkvXNf8meDGud3kpYFEL2guzj7P7",
  "key27": "2MCpqaBfLubRmYKZ6bUjCmDTG1q1HkFw5JdkzfhBjbM7z4xJPt6jgQH42g5k7Us5udkvbkRJGKkFfzDEGDiCdckq",
  "key28": "35c13GSHHzfQcbfRuqf7yg5pSDUgNrsRVU7bX5Cg62gANPdNUcXBMD5fPHaDtJrPszTwoxWj1z9EcRfGKgsgtk9N",
  "key29": "T1eGXTUBNMX7GXV3AxyARSXp97i6zqon2gGeNyPP7GHtwvt3rEEKx5bPRXugZ8fsNyvZ7d8XbPvyThHFcMuWTep",
  "key30": "zutScpuga2tmEMBydLNhFkuEhA5kNX1JFHVT5bScm8P23wenc8Lty6UZ6kt2DoXDRXsHnS4smVV4cEGqQHs6ocX",
  "key31": "4gFAqbyhNdicZPYnV3uLfNEwkLgwveLALqgJjS6WpvLjHUTB2WYSoKRoMsbbG577tGkZmrdPxbkgiBvGKXoQNFiT",
  "key32": "yeHuxaj1nGmGLfD1wHAd6V938YHs4GwYudb6nwnPHewCxxpr63FKvZNiY2tWs4Knvz3MmfNN8zSbuQe9PS9RCAf",
  "key33": "2g8w5oP7txBDqyApqsQCWE3ry6ybnrKu8KUyB3dijbcxkozsL4v1RtxKycNxRZTkDGNoLps8MVESx5mhYbbZnum1",
  "key34": "2YvbponUAtg6c134WWFMtrrHd6ftbyWvRP7hJRTJyscMef6KKGu9MTtn9F77XBq5WPzXp1CAZCrixkQuTMYn824V",
  "key35": "2xjdhBMr3RbCxTwqm5n4AGuaEjC6nzgna2vn3MAKzveq47rtYFVP9gLnzrH31h8c8PbLfsZok8B4kMVYqHQYiqEL",
  "key36": "2hJAdrKdYVZ9VsLVaCKezS69Ad1wD2HS8ufcb533hYbZfmBUppdSDVof1mT1rSoT2XDkkt4kEMN6DtqXXKfXBWiR",
  "key37": "3yhda4uanGoZ9SgjQpGMxRRF7avJ1uijwrs5pM5ztkepi7XKUTE2wwYLtUA8C5XyYNQYw1UnnmJ2VoCifQK4ATdz",
  "key38": "4XUu9AkzhtR8WJQWBRupFUyq6VB8sG6obuB9CeV7SC2ybP6ooAjg8HWGri6oS3cErvFJHob1xJ3ToupbPsLPcB4j",
  "key39": "2zUt33FcGub8iFUZrAyKpAinGyFMfRTWZQtE4Pdq3dzjBxegnrUgBfipZwS2oZywHJCPteM6z1wJec7wpQdV3WQx",
  "key40": "3AsDbc3JFdLS9DCukEvsf7MVedfnXs2xambfZeVCbJB98W8qtGxFtuKeRc2oAywMWPxK8kQWzjgvD5CN5PXj4YVi",
  "key41": "47jW1Fygj3mmDC6FRLRznErndhA2qTwXUAGg5pvwkWoiLeYHMoSZC1A9RcR76gNKoZK5v6N1qHBWH4eK7Gjpzius",
  "key42": "3qXBsxuM9UoezxRviGMcXCidEYivg9TEmLBvsS3ayhesk19YMZE9Z7hiKuxcxj6xRDc24c52znMPvq6Busqx8XKq",
  "key43": "5vTAgcU2Tjo7UUy1xSHCn77Yzi2SBDUACTshWNQcbjWjg2CfjXUppBPdneL9N8yWsdY4mqUWYuCmaP8SNM83T47t",
  "key44": "5Mr9GpJydY6r8wS5uVVnzXRR3qfm5ymnoPV8BhBZVzjWkAxdSwBz62SwguDqGWgiAK7sj8ThYhaTVx2M168NuZg1"
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
