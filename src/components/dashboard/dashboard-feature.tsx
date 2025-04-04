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
    "3TyMw8nNi4V9jo7txsYYgStnX2Y3hizzGnppHF9gncaRFcdxDX1sLvtbNtdiV3ok6LrPpBSWu3JoehEvPGLbyDLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Se5sfMjriFS9zUvXEvpzJJVu4t3myXMLYmJ9xXNbEvQ5a7C7CP8PzFEaPZ7MCntHzxsF8Fvt4r1rck1xpw9gW93",
  "key1": "3kN93hRcGDgNeWNq4nvKwAzH6BZ4PpPpJoyVH3PiTFBBkSMMD5nGppEehcMCWFZiMV8C3hc5ZpGxZs1qjwrfaBKw",
  "key2": "3W4D9zKwZnPvWPnc4BXrHFxyy65uV2qUUtMncJAsVC5pM4jahX8ARpmwgStCVFnFC6PT3fg9htLiCQrHFCqWsEUi",
  "key3": "2Fppor4qrXBULnXjL86i3umC28oCFLKzm6HUxgkXWeVHJvcbeCretKpSg9RjghBBcf9yu3mC9bXcmHfpgei8eNdL",
  "key4": "8xNPoSn9gNcRDSWmQAuTMWfWArqSoDZWWceUxce2FpzFygL8GGZWkbJEVjrXDWccwpopj8GxV2XR9r3oTosfEgX",
  "key5": "5MnqDaK4DbYJb6PoVfFmZv7tN3Z16mkPMnFeYadWtQKgQNtE5gpma9UrRG3ua55n4LVGp1dpW1JQ8VEHV4o1J5gF",
  "key6": "X5gByGkKWB9BnHf9y93JtNWV1SsewUbQ6fuhQP97sUWbT9xyxrgukbcVq7Dwm2eQidzvP2XyRSxhXWdxUxrhXnM",
  "key7": "3GNDtSekWAza1c3JHd5wrwXmGKqhBVtp9ugpFBnPCopnKMbd1MD9xui4KL7X4pcZJXaHXx8DoHin7zboMRYgZiFf",
  "key8": "2woh9HQfCbD5dTYzz9n6PvQH4JmSrgdRNSAyn8ieDUAjSLMkdekMG3zwR3syJBKzkabrmyytK2gKp4nu1uuz7JfY",
  "key9": "5ke672ztMZ3vfBgoB6TQcvzNHnnjbPxg8Qx6HrKAThJknqtj6GqAtFtqoRkkWntPweyHW6pgVSFoUAmeDbPt7pGg",
  "key10": "5oGtgBp7nRMRa7auqEGs1isyjWdxKqVHppcm9RMvzfyVr1KsC2NGACDTu8x7HLowxsC2p3kBXkkrcdeRg8zmnWiR",
  "key11": "2YwUC7zHGhdX9YPWtUH8RwtVMkRgHyY2WJ2N5jXSrMMma93kjcM1w1K22bUwmyBYV7Mphqt6cfkqeYjkiZ3yStWC",
  "key12": "3GGjqfrDgGYtCKUh8EPiby91L7JsL1rJEpdnyT9LMxkGJqMjsFbcDsfyYVPevHy3KpTXGJFQ84fEV6cFMpkrizmw",
  "key13": "2y4YMu8Ln5vF3pwcdZAWppN7KFTZ6X84NRRzzQWYx8pHVSZrkAQgKkwAvEuVJhPG5ZEPadzbUyam39ggid7srhCm",
  "key14": "5iHmAGaLFHnkQsU6QCTwwfZ5jbHBVR1ZyQCwngCfz8V8btpAoFn7CEfikMvvrrSgSXUArEbnQwftJ59UC5ciqoHt",
  "key15": "4Bg29ELnvRL1XWVeKNSWsZNwS25Nxg9GKS7VjPxJiSdtbUZmYmtN6ZQVTDLwAehUbh9vNDRnL916jDw1HU7oCeaP",
  "key16": "FDpmtpgAKCDj3DhvrTNgLFcoYJNWNkLdTFv9WVipeiCDA8t6aCviKmsK7MsGJvYQbC9YZzjxoJdhTK2rCoPj5k9",
  "key17": "51e9BRYUckTJbNsuZXc9hfMUzzEGfr95z5Enns7MGPoUroBJXTByW9zgS2BxXwy98WHzH7LMtDDdoexKZdhkuywZ",
  "key18": "3Z2vDJB4EsEsJmJJdMFid3LRPcYiMMN26nN4TnukwSZN2dzVjnzeuBMpfxwS3BQjZ784oP8amUZjktL5UZhxAsa3",
  "key19": "2GGL7j5QJFsMRL41GQ9cpDv7yEaK4GFf4uYmbB1HoLwzxNkUPfZSWECNcyCBfWDw5rg6Trg9kcVxKkQPwHaHsi1k",
  "key20": "5oPmXRwJGCNk531Th8ie3wgu1HsZjV1mr43ogHni1c2NsFghEzEMGPmD2esFQ8U8HEzGfonQtPzLzzF4ngs9Scj3",
  "key21": "5JQJ1fbYn8c6UN5nVq4thXvxkse3zswHz1GPcSQNSf3b28VGAV7JBu3vA9Zk2Q3DzopNFLRon6WKhVFeoJd3z8RN",
  "key22": "5YZKa52jBf1UzUN4Xvuzj1BAxpBLi4TeZHmViYL9Wh8GJgQKNPpT9cXDXThxaSeoMVXBiKaBz8QPrHAaWvK1Q7ug",
  "key23": "5dUV8DroBREcvxsiPu16E5FeHg53ZedajtxRrvBdKM3vBUBtzThiQBcMx9VEgkhxQVm7JhjQBpVauwJuShZfT2vb",
  "key24": "nNKW2pC9vpSbs8MNRoEyknH9wQgC7jaUZmdbRmJ6DfwvZutu61g5LqwEpvZHwRZU8HTz83PWwieq6cFiPupJUCx",
  "key25": "4yjEtWrcQ6iuTCT86UiR6mVRPD5yxW8aRvXS3wrnGh8NvvFqCMAKsQVi8z8ST2DDzLVptzZr8t947F2FUJyFU7SC",
  "key26": "65RnCCwDtoLWfCAuZWTApD72DUfoVr5bZDmpkwV9v5kuVnuLcY9T3BqbMzDD14KHuBnoEgHai5amnk9JtCivfHMf",
  "key27": "4kuTeHuA3CQN1ywRz7jKUftiQHcPSQhApFBgFbPi3kfVNpowrqVZU8yuRnKiVCPuciEQVS19wpTTZqisqoLKRXkY",
  "key28": "3ERtjighoL3EYrcNzMUXZL9t1jgNPEQHsVrKWRiW7vgx8DnUkMxf39GAyhYAHYtdzY8gYq2PK7A73yccJuwNA8GW",
  "key29": "5qGwXwcP57invUB1Le35G8ARLFndFsBm9dP66hKQeb6bXMJ9tjYE9E6R7HMFzaYrRT5WwM2kyE1a8xrEv9WMhgkL",
  "key30": "2CFpGEfU9YtJvEQ6s3AFh5wSN9FZyavpoxbeghcTJEbAt8gXbrFNGzDc1G95VFTCXYWjgK7S6KhEpdXGaeabitkd",
  "key31": "3WCgSZ9fpbAjEdumULXzymcww5pbW3VS2eLUWF36iJ6jhzSziSk2dpnU76F6EZxYmRbbdzTaP9EhpLprYaxTM8Uf",
  "key32": "j42MVYjX1cEQHmFRVd69XmkDHjTNgFqt7UpLPmSkPLeitoMmn16M2uHQjXf3bbEoiwYgHhgDrWdc2rB2UTDEKe7",
  "key33": "2yTd9JREaDebCoxMpNWg93cvhKsL6dky1puLfSBocUpvLkMG4Sm5CoXVVdsEi2mmsRgGddMSSpAvCwXZUA7ccfnP"
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
