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
    "4v1btuBXD5r7S1nTSUg7UPdpWoSLhE3JD6BoBcKtXdd5uVDLvpP6gwTwbJJUK2q1h3NccKS16VXRp1uzoA5agBnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nPMgF72QRKcNnD74EKwGMGeSef9ZmzjnSR9zgkeAAsk4SptwYEvg4KUZBCgXfR2VFQmpameePbHs6dE3LDXgiBm",
  "key1": "4QJHTNvMTtn7db9Zb9HGRd3houGSVSway9C1pYTukXSkas8ksguRVrD1e8yXfMCsZKApB5CE3jWokDAUrJspj5MS",
  "key2": "2cipBAQyJLujqCR8n8rCALA8suqaK9Y1J36z4u9eXCpbPdz8YESGfY949DAdggWYShqcJa3xYFwwwKFGxf9SJc1H",
  "key3": "3HcpvtuEEvvaVtcndxYTeRua3X1R8VDdcUw8XjWnghgCopBTfFefGfMzcUVo51nrVDgBZJkkZXyZ2a1hmo6dhRcV",
  "key4": "2biV4WAMqkhdVSmwTvbLxb782LoPpVBodkzecMantUmoos7FDkYtx89vDAFRMarNPduVM1giciuQS9Mhq175PNXv",
  "key5": "5JS94RTWM4b7fego1JKxdkQydTGgNfCiJxMQGgZ4vqfLCZkxLcXpq6C9KCPw3rfEKtcWTavS6xviCsi4UgJvtizh",
  "key6": "4dmLJiUtBcePsWpzrngPwKseEwu7t84S3DfFSVLyVU7oN17Lm9KrFMACu4xJE9qyYrGEk7YhVcVvQ1MyAaEvR7uc",
  "key7": "RCZroj9VdknT1Nt3omgnjw5RkCt3FhnDJFrkcL5vtfhh8odqDWoxxziY3qTg8DwRA6yiBmNdggfUvSpidiYoQLn",
  "key8": "233veVFxBDk2vHa32LJCDktSr4bXPo8bHPX2eUHarxibo2ftQLxQC8iPXQiHdB9TP3wEreEN2662NUMwyhhMQHFG",
  "key9": "2bcxZjpWQdGxijwP4UKBTY27KRcRkqsekpyES4rUps6tv31C1tvHHnzrdSLdXtX9j9ehfqW8yzWdTwy49YkGF1qU",
  "key10": "4TcEZLJoRXpPXzQCNo3PWZQDn4QBTpCKuc5iFdZfkCy92DkfxSYTNVf2XV34eQJcPvA6T8bxxNTmmTs1gSHhCYxS",
  "key11": "3cysJiw3eJeyGmiX8mjfrNbCH24EKzjRDYiraG6gBHtKxa27myiXLv4gmGwFRDoW4visSXREPVEz6RNXqr6GX11Z",
  "key12": "GfifcTjr43Xknh5Qyb9HZp2zFyWDfFeVAvSQKkozLijXCkPKa1KHjhi3fjyURs29KDDLLFrwevEddb1MsWhF3sv",
  "key13": "4JL2QZq126oVp8n6RofdsjCRJyD6NML56p1HEMnovy2kMTJv9pTBvuCCbYodbovJMcELE8JkwZKXPhJEesp7u5YY",
  "key14": "41CG9FxKYqoBkNX2tEKX6XtsmWZtdZASw8UMBHig9pC5nnhNkEAFV7bpy7jX9826tnVR1NNEjNZx3xkzaF9uhFBr",
  "key15": "3vabDHLphvrbgbNcm4cVSXfMfnQeaerrH4Bm8eVGBcBQGM4cCmiEm5VN1hPvMgTwisN6ARZMLe1cbuq8RDSKF3XK",
  "key16": "hxwLbHMjZd2r14oMuhNqTHVT7AykmEruPZcar27qYwRZQjWAeXp6uwLpcBusEJ8Zi5XWwsgYSisSrSCGeg7Q5WC",
  "key17": "2QJYd9NFAbRXNrHswamjBe5KJ7dtUbvNeSdaEEDEmi6vmcoszVds9T1mprGmWNBMqmFskDH52FBB1bMAFjQgoEQs",
  "key18": "5bQ9kvby2jS2HtfPvbyqASPtgcGunvDxNk6WDDeqmQVCcwTRw29qyBWXHn53cDun3Z52ZrNFR53KWfkCKqk1Xtv2",
  "key19": "3AY9Hrq5z5UVJsuTXBu8KJDApyGgEiVB4Pim8NRkjJHhX37X7NaKd7Evz8eUpPmpmPDvgSLZXJ6pgay9VNyAqrVe",
  "key20": "4n5VemVtY1a7EnhCh228grpguarcCGpBpyHsVLhQ22L9fnDhZS6hFE88NiWdEdpQqqWK1uQp2qGvFdK8Z7Li8vQp",
  "key21": "33MfLV2T7qMvP4XeS565Eba44G7DGtKVmmC92VBf3JHQ847AXPtG76bT6yjsf5t6MpwzKqMVhrT8izDovWdUKHKD",
  "key22": "2x2i6NbTU3MoRVzXbJTn8s6h7vPurrfAh5jDt3X2pgrZLXfo2zuEHr8AkEem73ACGuDvgaYL7VGKfhM5M7K2k71k",
  "key23": "3axVMVDAMbmENvMWFtZDk547DpVmZgHYQfUaKwUMLz9qiqRicE4LMdL36ChH9k1Jau9p4u8LGCsAcpzTKatwnGGL",
  "key24": "7ipj6BQ8PRnLfbaFT3U4FWe5Tf9KezizJaWhtXDvJSWo6EKSuoWRxNQxEZYG9Gs46NWxNYG7dKeoQP25QHbT3Jw",
  "key25": "5QdM1YuLWZzXMuRyUUwR6AEsfV2vTpaPZFPafjRNNpFhMqPcakTuGZdR1m2L9pLcFM7G6bSvemC69DXZfdUH2Aow",
  "key26": "2TXmTRgpYoPTmftVRjh6Cgrcjypgvg5E35nnioV9xRr6p53BCurWtFLgrS7KcfgaAKQub15EQysU3aHMCEeHGMAK",
  "key27": "4DgKdmSHJ1B6MGauhcSpJ1PAwaZT8CXTRPsP9iMbtkYAYukA3MKJV9mxqwkRCgchhmGx9GeDeWtfVKcgKearvn2L",
  "key28": "4EhbsM22eYnQ2VrrWpyQkKCQRQymJS5q3LSrnxEKRu9oSTSdSMRqvSc3mKrXhS32faWGoiEXXAhuggyegMLuiWGY",
  "key29": "33Xhqjj8CLUHa99bdfV7tBZsvYcwUkfTDxrotV3B1WnYo1qxYtvNuAwKwB7SLEoV3vy4CNoHjxBfJHnf2pQqMNEp"
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
