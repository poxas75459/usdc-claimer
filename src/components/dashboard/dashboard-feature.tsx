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
    "4K8RdLgF7VwJMrc27nzQBJPPAnMLRpG3hA9Cb7fWe4Xej8jCDD4XmFvb64U8ptPDYzpECYbZGbyzCXbZ2CwCva2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v1b4cUVkL6uVoEGN3ZwKNreGNfrRvEyeuW2h1Sriz1Sj7XGCFHjkJSLLSxSyXyvSVo4wJS32xJ6jcSjJQ6LBicD",
  "key1": "3hpLPrHu94MHnTF2MaPrc4CNopFa8cct9y94w9oAhzSoXCa3eFURsmjm886EkB9QT3iZAJbwdkvjnnAJ25MSFvNj",
  "key2": "55hFkmNVQcDXmJfsZPSuwCEcdFyWcC7zGvGuVvEBRken6MsR55NTJAn7YFAKsqxeyKDyK6CC9aNoSHbdbYXqkXLR",
  "key3": "2cfEx9sYU1jQvUSaeAo6QtgsxRUQZ2FeS7pJuk4oN1UVvHkRotqHXpECrg5UtkwufBcPA7MPRtn9eujkGTxTwbGB",
  "key4": "oQopXepRcNycmfbw4ittaJs3JKo9qchQAcSeNEQK95YvQv7BR4xKzqGMFsDzidXXCQrxLihisVihBEswHToG36v",
  "key5": "2amKbGD1UhUXDf6DgFPeMYqXHiJBynNhFqdLWc3ptWW4iXGVgj9e2UvkcnsSBCDr8Wt1AYzmTjq5E5fHDAcnAaQu",
  "key6": "eDgXnkoanveoSj5pY7Vg5h3sB3Bdsr7ZZSXMGyPJ2fSxFzTAXA5h8uyDfPVdpFrsN6ZeWQptQ52APoCREqsYK3P",
  "key7": "4yaDL5RRYgjnoqxW2gnF37pWxrXfjrFsktSJUQPzSeC47cLH4EMqojRuiT89DRo3tPC1ZqgkS4rjeF6gRSpmUeFY",
  "key8": "3x7G3ZFoQzBXiFtbBqDmNoioPHygoZSQ6QUuh7Mb5HKR1B5b8fRBRzkEdd216eQKj3fGGH3Sxs1Zjg2eA4vJ7CWf",
  "key9": "8esFjwfVJ9sv7ryVcaNWQBdxHfUycCrBSTuYzn34z7nz23atAwpefCRQ4XNZBsHEdEdUr42xKJuFjX2TTyt3CG6",
  "key10": "44LZ5gsKJ6syGU2ojw6Djw6uUHA2oi7yVe3AMZEKukh91YkfwjfKJ1MieHMx6EcL673r67akBEokkExzZU15FNra",
  "key11": "6AH4B7EopacPbrNXGBPvvtX1bG2snQzE2yfnPVAx8jG4G1YnL1TwibuD5ZdWYLD3gCAHB6hBDbMGHEhzYpSHNKg",
  "key12": "2s58CaFN68G5UAUV5xWUnUsGYUBxgk6y7NjKKUnw3gazwwg2eyQFqjbpYUNHuFq3pvogRhQEqUuurhtj3JzoMeqy",
  "key13": "3ACr3xEDXfsgTVDpuq8kgkwJg9BfwG6fSkHGZ6Tu22ayPHZudfmWZZ35A74CDTpnqysrafmtjdMFUjpszEFCu9iL",
  "key14": "5kdeWgszQJshU8nEofQsYeuSuwaSi2d7qyt3TwFUxh99AeUSaypmRXW4kzwvB9JgJbncA1Sv3vB1CW7YXvrxiMES",
  "key15": "2eK6k2PVWrwQFgEY3t4Wqy28cV62pMggs42cuMSRLN4C6kDhEtdVdM9mNgMjoQVVQ3BbsX95atvXhyrFpo4NfQLo",
  "key16": "4JcdGueAdwMD8tkmNguTgtovAVGPPR5hpE1xbuPgr822rseAc1bJgrX754vFMsGAUBLbCDx6XPcc3WPyUePJy8Ra",
  "key17": "5qEpEUqem8MyvjX3rJgd6G1S1eYV72tuLzba8bXtSfyVC2uTXBvr22FU1H8MJG1gsLcUZMEQdhyYs3cNH7DhTNzq",
  "key18": "5hmyGTv5Boc6DXrqVmAwZyx3y99dVJoHeUwupLt8z2syyGMCqQoFTfaSZadNU91pPvsBiZSpcnjxMQxqR4xPKZFF",
  "key19": "RG36batFvMwjDZ1xdkaUL9aaPXYLMyd2u8RSASmTNk8pctpDCgvveN4YJ9mC4ic1JvADqWPXSzw2xTLrviJnvnQ",
  "key20": "4Sk7Gk1VE1Y8TgnG5475UYkbRsfBFG8P7nuApom2Yt2qpHR4fkRphX1SpP5pmDnkzC1FfJzjkDJTcfamN6aXHimy",
  "key21": "4MWHhpv6mEW4JpEpYYvy8sv6SQ16wD5dsKEzd79bqY9BkGD8MdtDv2d4DH9kVWFGRDD5hdfdaAwV2GnYE6LmKRPV",
  "key22": "5KKKiMdQdqpaTW6uNHJuo5JmF54YnZ4mNKKbnbo29w3TJWU9iBbxYraU2iXvxErUDBaqvbztENy3bTQPjquEZUx1",
  "key23": "CMszQMh3z2bh9AzmYtJkvimgtHqXoGjZKAA2BkmuiKY3uh5fWs1c6L7ZevVwwmU9eETKy2bisF9SvqeBYFDSBQG",
  "key24": "ngk3MgsrnkiLz4siSmmHAEvc6ePwdRtVjcuDWzp7p38QHcjxPLcNzEYAofy9ZLSnTM63gB8s77KgiS9vT5SizEH",
  "key25": "2EqziMEn6rz6hNa7Z6CCMB5nQRrrZaUMcHoUSAGAAKWiFo6peDAfY1WKuhcPn6yVv8BDaVPDLGZzuFAzAUFh787w"
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
