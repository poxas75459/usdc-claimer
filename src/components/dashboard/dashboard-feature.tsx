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
    "2KU8XC3bkFubaJm8kAqR6vGPpK495T8Td3e2HPJ73ZALA9PxQKJeTZUCoCX7HLW31Wf25yzw71npjAiR3YViRSbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fcmDdn42wX4Gh11uxMS1Qhi9r6LAfGbdcynr11R2q4PG1kL4B9yUQnwHXvw5XJT6YcmTnWETBPphWiGhud5weBu",
  "key1": "4PvYwpnDUq2Shg1hUmw19YJv5ZGesqk2rpPNwdrkXdCzH1UjVEMfKpmi3DEauqdJRLEXLgfLuRFC4nhrxvFpfLDT",
  "key2": "4gzQSMK2sD1ZUxhWTaBeuUstuUJDLsbs7vJK9W3SujZQsfoG2egJimPNGbQGQzK3RcVxz1gwXkcLogUCiNy1bAnK",
  "key3": "9zxKp1xdcszZaVgZ9NhPL6CnDW8ZAxJVNZdySQqWETkvM5BhGduHMwWrR4nNJ75nLFsXnRJrTyeUWYPU3F5zt5t",
  "key4": "3NW2nZ4yFwSH2hKzjHFDuzZVuTs8vfqLHcPDWHcDxKLAVjUgvYLKnfyS4jq7iCutcvywVVoJ4cweaCn6pB3KJAtV",
  "key5": "3m5yXCt8jJwiAJevo1dC29aMYQGuzkwD4jyQfQ6Mkaght64ztw3rKxwJ38sM9GdUJDhRPWMJGnUMV9u1cKLQ6ooQ",
  "key6": "4irhpvjaxYG9Tiw9CV9FDSGpjJUJ48uKYzp93smUuxPqwwrXGzydUwcRyhKza25zh3T1nxVZ5YaiWnvVXSjtxMzs",
  "key7": "36tGAzU71Bhp749k8JtRMYqAwWGrqXNeWsWah6Mc1daXjafuMWtnrKutJEoyuPcMHgCvXMpLut4fvg9boxGxJZsV",
  "key8": "2QUREAMjnnsMb6S8b3dPQ5RtYBd8CNmuMKK4SQQyynhmrEBPZWojBUx85crFjeEGFB3hxy8TyYLFvPvAYfdW2iZt",
  "key9": "3AcYiqbRkiwfPfoGSqgH6WeZr7VDCr7syAddLBQf6DqjnmHKYoGM64hjK3xJohQ1RmTgQdZ2Vdr3zK56RuN2ABdg",
  "key10": "2kp7hCSLdH7s2BxYFaaUqPvPY6WXC9gXBuwcASYKBpijKqD3ViGZM1fxbuSP9X8WdepZXkjxLkhAwKL9Fw424y2Z",
  "key11": "2BV47mqksHVDCUFxGz6JSNA4r2v2VxyLLwrEReMAMxi31isZ425rtUFDbCpRfawEKWShMSaGX2vArCXUtTnR6MHr",
  "key12": "2eQFpkDs48iN8nfDcevoNEBFzJsLDb7Xp1m5LUBW3thvyy72PpeeKWKMtRyjrT8bHJnoRthNgfXDprtupav5wtWj",
  "key13": "4Jw8VWEfP6MMcjeRZtqdQ7MzrE3Qr4c1yYb83jvXYAVDb7xE26i8nDAQGbFdpqhW7QbJ1YKkfUPCPzwetBpnfn6L",
  "key14": "26N1Hd89cKMiQ5ThNu3y3rbtE6CYMnBegin6TrjvoCvMdBzhrFWmVAM3gLmkFMGmJ7HY6oJRHmfK4vNyFeN5jw72",
  "key15": "4C6KggC5DTvuQaYheniVZ6V9WgpML2k6VQM8bQGP1Y1ZXznoTf7siiDA5JnLvGvH75wZyTzVdhPnbSoA3hZw2wFL",
  "key16": "479pDtEkxoAtfM4cjuXJN6qEf3DVj5MiMiaAp7zWQz25LG8wGL9Sau9rrQ85hvTN8z7QkXr1mAdr1gXueumTk5yA",
  "key17": "5TE9xx44PNPJ8uPnt3nqibszwgV3kf1Y4R7sLu8E2284E5erYNucTFgsK5WG3KcQ8o644Xtp9oRfHVMxGmKDHPYT",
  "key18": "4mStQCiAkLSvBLPKYewwDE4U7JtoLGGrEaxLtVT3BcNSA88hD6nRZ4GCTEVxxDcjnySEvkk6wjd74kvojZ13ykKV",
  "key19": "5JmTJKWXkJsLifwq2oKv8FGpoRvAAhBykUAcT3ytJxHHT6keXXvaV81F6wStGVUj6AiEPbF7nswFsbYw7fP84mrH",
  "key20": "eJ6quAnLPVQ7Myj75GEfUaixkx7jT42FnvfgY2jy2G1pdZUu8UzWMorpfeKCK6ShseRP9eP69SiWzNfqJtzH3xo",
  "key21": "2R4GZnf3GR486ub5SXHhyMs8DpPVbZSJQKoHjgX8usbQ88EzJxvRjDAfFN3uMK68S7YPzDscPm1Kg1h8ZU3P5w5o",
  "key22": "5HBn7Tv3kTyb4ZSvo85R4quL336WH5VAtA7dkeGL494VhgL3AmQJEMd5uqDrPdA1wWUNKZUeg69roEMdL4YDRmKn",
  "key23": "oRicMNHacbZrX8LKDpA68ysryxA7qBHLzJkKjM3ocYrGCBC8g1H4raBGoJRUtiS5vfpTZMzK7ofCiyX7Y7B1jzM",
  "key24": "2nf9HQk8qLi7pG59h2kfMf9biyz3MwgzKjkm8Rb9qZkMHFqpoFFNvMNb9hJp7TxuHQn8bRZYnbjNYGLVEpwET54M",
  "key25": "5QnEmsC1V25z3oBn42DaTMCNBLgKBvwWhcaFM62hzExX5bLTN32YfkyGufKatJ2Yk83V3bfFTdX94yFrAirX87Eb",
  "key26": "5YeTcTTKT5QYWBRKj2miz7eK3ps9fXf1Coj6KTY4gh3RCLuKAXF2okFGbPTuHBe7AiHjxoUYrc6wkEj3wRcyPfov",
  "key27": "34RaBnskUsrbF448YyYS6nPw2grEZ1dKUuURspGRuEhdZqaw9N2Q1eXqszBATsJN5oe8aFm5ZHw67MM5CxaddWb4",
  "key28": "2t3Jw7PFCc9XJLLyYyL3rEvz3gSqW4Bisf4w45S2T2iU96H5APvURmjPXvana1LFGbrVRodQ8yZZwHMCaUazvwoV",
  "key29": "63ughwooTEAQ3n5iac4PM5GegDA8R8ajAtjhxTdgKbduPyzs2HH5hewE2FQNSK9n5sCniuWMyWr2aaQ5MCAQAaHS"
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
