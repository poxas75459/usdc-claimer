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
    "4wNAsJcPqkm2RGf2u13qXg8nK7SFhUQKYvPTJSzDkDWu5pAa8XBqModaJATWKowTTi1sbPeFpWN7y57J2m2tzXHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LrSw6WDvaAtWDypy7HUV1TTFQYkov6NSLxqH3JchX1wVfMPneNRALJfRmHXtt15TfTCRXPb4wvV3QtWqAyzYMG1",
  "key1": "TJ4KBikGmgipdNEdrDu9JZv6RHrTEG377AYUwuuSZa9YJHDRYmw1bFALY5N3aRyw12SD8nR2hUDf8ZYHJ6QV5rM",
  "key2": "4XSTUK2d3DT1BEjihoa7DhVZfYSUQwqzNuxJVrsykGhFAkNS34SgQosozCuxF8CiuYreKQMczFMg3q26VBLAWjxt",
  "key3": "2qpSP8npATGquijbakHANF4qFtTt4MKRfPzEmrxurqvFyjeBZsewtvCLKe85C8H9TuLu3nkV2ShKoGJ6q2A1u2EM",
  "key4": "42L1pTFfjd7ASzJWdkYKrVJSgqk333mEv4CN5fZsPxuNNtrxq1c92Yr3o12fagTd9ceMhmiLhEKk2zHD6wYsnHY1",
  "key5": "5c8hp6g2fSJuCK9nccLZLLzXfNcUC949Qmvzz52ayT1KbFWfkRHvTNMcdA2kjzNg8ZppispQnXfxhbLK6rfbeJsu",
  "key6": "3phd5gRTXQMi1DcLFiRKYhEhSixBDbDHhgtLVTJeCysnkJrGR5VUjXmFkt2SqKXysZLUBXL9SEuqE4RGiipaTNfv",
  "key7": "4bygkFDTqc3jbbtTbGX8YTeGUNJU2juqSjbKH5XVLCCG4fL2Jhu26cGatavQhKrbYpDjAwNNETiLw3brNUyRcafS",
  "key8": "4ZSbwQi8PWBCbDzzaUJLVhW5XCvTpLBXbgHnjdVgUjBbSuFGKuDbmEceeKFnjE3VPLfMGyUev73VZGYUd2djHgzV",
  "key9": "2HEf7GtquB6jLqzxe3D4Zq2PCc6twxfr4qJfG3oBdtwdKjk8bRn82eRH4VqkzGD3K1Fa842DK9A9Hj8GbGQh6ZAo",
  "key10": "3gnA5xczJsZQ3TTro238ZWQx8azE8d9JH3xJrTk4u23edB5HpqEu48G562aGSbrJSwc4RuxmYsKj2uk9KDvLqxVS",
  "key11": "2NBKmypJvtMrp9tDzVdLHb8kfX1K7szXXj31WHQJtK1L5E6v2xN7jWCWnSTnykZSiAe5FXBNWZ21LUxAYEAkpR1G",
  "key12": "4rbwe7XhfiX9piPPCpEwJCUEEn1rK7Nwp78urH6Z6xrinCJtSj5KRgdBQF3KArtuAKdniERZBbAK1TQraydYD9pB",
  "key13": "34UbfcgJaBj5ocddB95Z4Qyv2TCGBjr98qeAFWrz753mqywuzntdijtshBsYAUur6hnHJSYhnk98HYAjznzAwJSD",
  "key14": "4uQxtNN94jM4JB6Ab7566aRMGr7BpiEzWo7BRRNGqDSvFHxQ4UZhmTuFWAWG448VFoRGZXTF6XxokNrKz6zT5Q3T",
  "key15": "2aqqP38rrAxekE5tpoqj1pxKmLSrj2PNGRevdNt5UvxwTRcQBafQYAuhZ4nrHL3FBM7DCj3qT78EVKK33h5y5Zuq",
  "key16": "3RF6NR5KEnbSppCcJJiLEGnrRBqxZGKAMwa1c2NR5fmtfE4Gr39pgnPu1b8BHA3diyyxbmkY6jmx9Uo2D4EGpEN2",
  "key17": "365dZwKkiq2jAXGahoJfSU4bR7mtZxWq4ADogfqnS7rww8tEXbkvQd1tUiBJ9gJdPxx9MocfHLiU32c43AReqXmh",
  "key18": "3TPgrmARKD8zPQd65qVuirmq8Hta8rvVQTd74rpEewfrgqLPhcxDudu6CCCRuwP7x4LN1LVxSqFUtE8FVHt69M6J",
  "key19": "2DBz6ENqaSzYtLZHAn9WqYnrWcHxgXVRN5dUn8JcwtuAx55VmhtB1PtwgjYxijcg7YVgCo8N7wmKh54hxEs3XrWW",
  "key20": "wLzRHtUNeGzQzJoVRiMHrRx7cBriPZ32b4wuKE8uviiMC3hNkz4nPNBxtGSHQ79tRZ9Cr1YCPjbs9urc3moWiqq",
  "key21": "27V7zFBXdE7fsXAEm8jpEWip9gbhNnTQ6PHqcjPxaLsa3fi6MyMtiFkAiBFCPiKeu4Yo3PXAGiPdd9bySwdQmZ2A",
  "key22": "67Btew7XwcCWACNZ2A174w4btR5jTH39Luunbq3WfM1dvWhdnLaFTYDFywwjiprDp2vBVAxCSUFQ2YnPukvBRrBA",
  "key23": "2iyxGehRZeBZGL1HdrHbr47G7N15ktf6D4psvbRTGij5dpGncZWLWHgPxTcGwCNsCZ5ms4Mgju9P4rMfZQHhqafo",
  "key24": "3Uuj8CfAsgGcx9NKqGwmFu6DVtzFXubzfHb2SPn3oRmXBbspHTSUrW8NsrhcNp68CrRexkycfuL3K4XSqoc7ycAM",
  "key25": "38aJTbcE19eGmGucrMLr58wgTWYygcGKedhUVXSfwNmcyvk3LD2k8kFh5DCrRk2tw2zrxCEBCDH64f17tApVXJ2e",
  "key26": "2z8fKtKtcBSxB42xXmEZqMNyJu5AHUfeBXPfC78LueCcHcAiTLMSd2N7eE1BSNJVzqHHW7QNGU4LDPiJgWkpXvEh",
  "key27": "5kvLwjqo3LuPXbmDoyNx2AdDAAZ9qUbegjcpaohsMS69JVCShnRCHjEGwvAFkqLnF7AvVRG2UWyrdzbVAZMS6QTV",
  "key28": "398R3HQNFApHTUDnz6SR2U6SDTvqRfnhsQfwfgSPWXv8ZvgUyBmSD5DiUx18BimSet18JecjNm8AetGuhWNZXMj9",
  "key29": "4xqY6fmH26b8SoLDrpghASBn7dDuSbHQcrCJkWnsR495WUqpxFu6UXLGPJDyyWgaE81gLfDnnXzRZW7H87FB4CZv",
  "key30": "414jGDSDqC4MssNruQVkxv12ryBpZCeYgG6WgPGKD9R6jJyDqurgHqnJHxHty7yNyJUEZSUVaWSLvxzZjKuSvTjk",
  "key31": "3AYnivRmTCJnJXM6n54tyQvT33KezHyU8hZKGRaznJrANDUSUanYo7YxQEcPVz8aNC2PpGUJwNE21mfwNdodHWRM",
  "key32": "36ZRh6egehg12sqhkfUYdnS8JQhGmovrTMTbZpvQDzweyzFWuQCT5JcYBRqcBcNgXKNfb84FeiEdJnaaVyo3vgFk",
  "key33": "SoX6HRci2WiJsa9t8KH5WpZ2igYFXrPy9SUmaxk86Q7zQBcEsQGj8DiZszYcokif4pNqSfdLbJaz1K1JMmqQgVD",
  "key34": "rhApkWLDoyqcbJkS5xjUXMLLU3meKvay8R7QrE7kSKLHw1RJszFyLg4AzHKeKPxQ1trKLfGJKkbECJYBCCmBNce",
  "key35": "2QhQhQZ7NKRkkYHWJNFgyakdnJQZn8ngRq9235nFRdzZANeJXugqSRY9gQRRYybwRdkUM7h1dUR7Aye9kvwnStuH",
  "key36": "4CYmf1FDm5FXHbPBzCsj3Z6mYaPnGMJYKTy7mWCUqVUoCh95QSYz1j87oMULQATdaQmjJscT1sUUDGaGknL19X6U",
  "key37": "4uQiPAS2X5dMPZVcvx9jFv1wLLkkyh6WsB5JFXY2mLBsBcLUw3bDV3LULxhYoU1VH9cwwRJVxGni9ezVozK6rvba",
  "key38": "4L2mDDi6fxXWGwX81CpzWu9ZkXus63k3erbwFTUHWApg611kaZ4pUqjMPhw4J3hfKVSWxZi3nA9Vx2ve7emwBdGq"
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
