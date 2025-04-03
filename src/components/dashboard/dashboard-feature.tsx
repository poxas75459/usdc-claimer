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
    "3zQFaS26nR6oDUMviGkDWnXWkzP5pwC1T72cNNoxPZU3pymgiDdJyCogye5AYRubpbWyZkKPVBPyvFHaBG2BkBhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3enB2AwPdy5GrBBvGVwXTbAnfMf6JSoUUPfMoyaDavRD5NKE8epzsQX15MEr7g834SjAQaK4yPNr9Efa5Vkh6uR4",
  "key1": "2smwvZ65HzUV5XT3FtCWSFxdtKR4yA6WrneduddbtvbXUn39p8uU7LLbchzky1e4ETu5Pd9suWCHQhTWW6ah7nYm",
  "key2": "5pVa9NTXvMApDMnbvkhXnxngmVriMnQezujeUj9MS1Brt7AmZauQGVowtaRL6F1bEfFEntWfquNqfX3RY5gPnhyi",
  "key3": "5RHTbbxXWPX2ynWinHFtv3FSAboGyUJLjBndDkVHDMXXL3iVZfZKFGsnQCRPPHUkfnndZN9oJwhdSWRziwPrBfnZ",
  "key4": "632Mcbeg94UE8yW3M3kmWtGbkDj9KNcF1JghdqiGChUThJY8jwf6BnxMZL9oTBv3sTXgqy3ryBXt6vU1T764GKjx",
  "key5": "5ggUrH1hwGSH13pLELCQsHLhsJjR4WGHtaBcgjvHHyQfQvZLFLQD1mALgprqcmKSZe9rm3HbonotnzQaBuTin7Cj",
  "key6": "2p7jGU88ZZ2SDr8mG35Fn27abAV6EP8mfYh2NUt8SGVQ63D3NVyZTJbBh8GQT77Jv8LqsVAqCm1mpirV9LV889NY",
  "key7": "3G3TnmAbzsEYSpmf7Yv2yfQeW8KJwspQK7Kxer2GStxezcaxYtUPCWwUXF2VkDREEozZzQgBnbw6j9RHvFHyPiND",
  "key8": "4YqWCGp93XhAGcfMhn7XqG5TF9zSLJnD1yF37r36pM4uWZ1Z6ddvXMfLtVwHcXe3YQiqK6AW2UE5bxAihST8Kb7x",
  "key9": "5a7ZSXLwjDHXKT12u681qvGsGvRM1ePEUDHqE2CnJr4RmLsftdu4LHRcf1xCob6bJaJpuUeM2Chi1e38qJzs8p8b",
  "key10": "1qBjd9gCN9HwJQEs9PJVqcMURbu4XdvijN7JT1KBpHsDmTDP4SVybtNmvUjmXAtJmrHtfnSw5ppQMv6WbgTKtH8",
  "key11": "2eWH6d14p1BxYScFarCAGf9UYkMFdHyZ6TKFX6r8MTkWH4PcepXHmbutkLCEtizKrLrvDqaLhY51QdYu2CZG2KAQ",
  "key12": "3gXH8RNEjTNJSKecXL5mdJMCCH4rGJvXKfjhw8DowcS9GDeLFEbghhJsoMGN4HVfUZcHbiRRbQK2YbpTAW3aKKuv",
  "key13": "5oBRT1n4Lb3jNjSBgnPjs1VzFTy4AK4oZagDS7az6KH9z8gaukXbeiA4PT9SmgtK9aSbAw57pW4rY1WkVQJoEebF",
  "key14": "2ZvK4vcwXSyY4TVCQfqfgjXRAk3v4Ajai6yNiR6XqhNRs6VLWdZ2jTSAsWVtdS2ddQ7E3UDVCqnX9EuLY93Lss2G",
  "key15": "2Zan3YdZu7hCXkDDbo7Pyfy2xMVTQR4yNEedH7DWTh5muUB8o7bXftcsksoDZYLAtQFSwAiUHuxunV8WpPCJAhKj",
  "key16": "63gHkPwYMpaQbWpQRqAuBHXGnNPxbg8hoGgkAHNrkBnJEaCh9DB57Vh1MMFaYGsMBHyhRuCMdFwFTbBHDxgW7SSF",
  "key17": "7T9fFSCtaSkhbwfM8k1AqnHXNbg7U9via53gMrRsyh4n6AQQkRLek9XsYALvteCAEHSMVJabG5CdjQz5UHTePxn",
  "key18": "2e2QcD2niVuSFoM2xEBxMxuxwEfDvTCHDT33nx9UBdKX5SaQD9tXLpXi93QYtba4jqqW1XibpJGDvRc5iTWVxzDV",
  "key19": "bwjwy7KU9Fsry9rgCjfh32YpJkigjLd51hLktswKAnAuLXZPgqHcfCfwhSAkpDPppivrSkfjYjaboDsSx9znsAq",
  "key20": "2KGFybaDD79RkLQcWh7VMUM4ve7KrW5fUPGVV8mHtGV1NdK46dXeaEZdmuVSXmtbYuroDe89jkhcpyRae1cLM7Ry",
  "key21": "MgM2dNChX8jJeRZ8dF6RH5FkwbpPXf5LWJeHhuZvwBQ7huuJj5dZ3xF5JebVF9A8Ry2wEvhVqqMq42cWQgJnDuS",
  "key22": "2VniP9gBffJGPTiSCsnSv84qA4p92jYSuU3UJn6JXgEUTsDZVSi9JHCHGwsqo9ZLq5H2f3vgKcHwzbLDmeWhg6Xx",
  "key23": "5ryUr1AF2GfExzu4opAaXxC2T8q1Ff9gT5sspatsxwekLsk34X5yQWZpdneJtgA351FLEm8Z1WxsQ58Y6Dkb5yan",
  "key24": "484XLNnPDfeNhSB2bh5dNtStn1bLNZKQ2HtrLNZ9uKDBBKspSg8phs7BzCQaXeM6AZLRgwPvtEgPFb7zJoJpoSpU",
  "key25": "5naXe6XTLzqVrH4aoQcj3br9sh2PGLHbv4UpHP2vMZuinQV5dGEqv5s1echv722TgV4u8HZEpk5efQQf78AxB2qK",
  "key26": "3LrMmJrsgxgGBohxqRfaGg9DVAfKMhrYGbRMfXbZhzRTf2mC3AsNdgFuNa3GpmvpEr6PzcXt1CF6LkvFX8ycd8BN",
  "key27": "2eXcLZrbnNE89zjLyeMtENJfchfHWQ9cnPvjucKUJJBpNSeBDNGv962Z9UCdQPSBN6U9nvbTSJT9ZU86rZF9fZdi",
  "key28": "3HzyxHuQG5gLpna4DtjNW31FvKY7vWKXEsyfsx5yKvuTbLSRtaAfztfM8wZi3R6edDtQqwGvk57RvWnN3LZaStkM",
  "key29": "GKRSZbkWTg18hGYLJLUNA599fzU1XXDPzqabcZAXwDRANHMqeQMMY8AnRnwouyNAJgcdPHN2uvDLLygdL5hLBHi",
  "key30": "2DmDueEeRuiC1ucfZ1HfX7utitxa2gXS7GRC9QiKBG4rksmt5o1XH16N4Cm3v8nqdEhhAev8TbZF46S9TiRhqaiL",
  "key31": "58u3CgukEV8ow27xM8A8pPDcC3VigKQxq5Z66pGGpJKpvUooJ4nY1MH1zSYPhrdYhWGJb2NVppwh2JB7UCp8Z4Zb",
  "key32": "hbeLFBs4CguquJtxp9HiAL2Je1SKjn6UWEtF48hkwcFML1Zt7eHWdXnoNpVkaTLoNwd9cbB1MyiuTVw2Qos49G4",
  "key33": "3S2XsrHAfafLzaMyis65zJBcfhpd6Q3D7QSGuwSmsrPgxiCevHjsvBNDHsnjrCiU5M6f6osGtV9f495W86dap1MJ"
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
