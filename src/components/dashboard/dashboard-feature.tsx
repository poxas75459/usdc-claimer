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
    "rpxiuxUtPtKnTyUHpGRb6owt28BAheZ7AiMjvr7YgnfVeeNzfGyHLzkTGA2M2i7LAnErWmhT783fikB4Uve2rTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wPT2qvGL7qjCywMHjSuyTMSSZhAbZarxWn7pPs24dqUGc4s59XG53h3bhErg7Q1b7zFLtmgzeLnbpfaQEY6scnp",
  "key1": "44CUT83C22w4rGrLZBdLWQscacwsME7bwba1KGNjPVn1MofYWLtKv19YaJ3VopZZuHEF2XLttW4Bo1YUmx7EEDeU",
  "key2": "2tB4DbH5wk2W2rQTvZMxvnL7sz6D3xwmxKrJiQxSfpurFxVTKwGdmb7DAd3GCVA5Ha7HWZ8iEprUCFsnv9dQ8NTj",
  "key3": "4rH6wTYBippNgyjaMXvenAadD5K2CwrTr8hAmU1xuk6hBCS2GR13ntmwd2TMKuYiQxG4vGK29gDyfSDEDjg1r1MD",
  "key4": "5NBh4CLCfEneAq9NmAiSbteRtYTHMLgtRsyv8p8yWirgkVh3tEba2Z5h2QnC1oXD8uHRGeDY5g6MTeYLKLvuR9Gd",
  "key5": "4d2nUikcBayX2CNobswD131vxNcM1gervnd9r9pQHLiS2DNS5Ap5uD7YFv2397hv6YLtAvbXVYRHqy65bAju5wZX",
  "key6": "54LCHk7mwEPpxvYHAGGj316SNba94SFD21mjSp9FzRQnJ4XkQJRsePfhbw4WMeWBvoZNxScdMNPNrobCSNbHy7kj",
  "key7": "2kP5tU7yofmUfLbV1YYgexduVKwqAubjaYoNrRL9xHPEHCLrjvVmDyrzEDc2Ea2i3rsgDZ4ZgZ7zL2swzyf5416y",
  "key8": "4yP9kTQkcjc6LXL3QqJ2UhXi1P6VPBkq2fvaBEvtm1PRS4En9m6KnY97YDffcEstnYTEpHxozbDaJGRacGA7J1SJ",
  "key9": "tYVEVoY2R9VkX8fFpxN3Dw6v8AaKEwMc3DaygTRaQBQyw18mZhrPWAmM93x7M9pgZk1B2rNfef6LZiy8kv7SeMQ",
  "key10": "5JFkT6PtD6nySktxSe2F7yh3bSXcKBzdtdHmv3H3WQSngqRxA3Zpnoq2TZrhBcQhNWgaEZtrQzrf39PTtzzJ6yVv",
  "key11": "YcnuXSyQQVdsM6oQmB7oke3ANEMBMDw1ko4bsjSZUDPNzJdHyf1dm4ays43tzeY2M844KBgaQMWj2g2GwToZVcX",
  "key12": "3pCpfjo4uhepZUb5zCrH62mYWbYdp4bNTQEYeacLo4isAvZbNpGRoQpZckBeHDKxuHiqYHY7DTcfcc8q7f7ycAJ3",
  "key13": "pM6zi8f66FAnJ7SffZrRXoaTpqyFbfKCFyNYLNBehEokvd2679HZK4zGcMkw7QkMYESYTPk1yhTkhHjBR3mNCBG",
  "key14": "UZVDYNxJyvDQRG4w5wLpJ7FZz8S1GyCkiYxh2xLfnaD4YXRf3V9Sp2pkKysZtXcTC3UNLggusPvoRWgdUznnePB",
  "key15": "57w8B5m6TJwpP6bkhTctPce6bfWks6TeWHDbzJ6jfF5D3ZiE9YBxyRxgnE1j5jbmXmFyVVxrwwFLmr6UoCbCHqUz",
  "key16": "4pFYgawspT9cCdLZ2WCzZgVnRiR4YZHzFQy9cfdXXWcPrbHxUL9Ak5azDmHirwnUMGmm7DfoqwegYyiSCmgMZsNu",
  "key17": "41tSzUf46AFJzuyau8NN5AYLRuPXZygNaip7HpJTCwyv4A1UupnyTAzBt7pB76SR38h6TcvNnpweoHPE5Amafv3D",
  "key18": "2a4nMueRgo81vWkqRRqCw4dKjQeF9Xn6XTEHC6vp7J9p89Zw7gLGmt6tHPjYdQWAqgT6zy975xpzESq2ryuTxWDv",
  "key19": "3RiWdgE7uySryNJMA19Q5vNwabjHuucdDF5o59ee7Ur1Bc1BvLdDaVKYtULc87Tx5UDRy6LVBKvHZvZZNdXokAu5",
  "key20": "4pi24v8ctiTNa1VKMioN5MxMnmFRzaHeUVwLSFfyL7xzXu75cktNXkyDwvzGQ7ZR3G4iyUi4S2dNjWNnvbkMGf6c",
  "key21": "2rHVeFGZ4mxc9czpzQpPrq6BDkSL4R8PNNExw3SKQ2fJkUTYUfKSDmDdiMAmdqfUaykYevnCweo3P1BoeUBcFD9r",
  "key22": "4Fp1mQTxT9G572M7bSrCkY8iHNvw3vHTDystmV67CN9NhFaFdnjB4Wf5mMZbrF6pQ6ajYG1LwNiYoZaNQeHZ4nP2",
  "key23": "2iJisQMQSb6ugc24q6dvun5EFNxwBu6SXtYkW259MyTCbRrYhPrJqFFvBVUXcceqxzRrkxo6tBTN1n9Ew9zTA9rh",
  "key24": "eBjNbcTG5sgg7TAe5MTQFGgMkCY34c3DJt2VTDxLfVFe11xVGNuoQkZq25NDGUBSqZ8SUTvv47om7furBourNYJ",
  "key25": "4roVc2xhxKmxjN5NpuBfwfbSXoxtqezXiBBmUjxwndW7oM3tYfAsrzMhA9iCgme7UiJtPgxMqWDmQkvh97LA7oY9",
  "key26": "4FZQbf7979hXJrDgkEMMBKWyJd9zsGH3KLHDjJjMAZyKH7ysnotTDXWiKhWHhQxS59uUBPJJdCjbAdfxYySg92r6",
  "key27": "2mAAZiPJwh9NGJQY1zveeDraF5NUwUuibRK9ob2cDJFCRQrTAqAfSQyyafd2br1kCEU6C9ZboiM36NtnbPL4b2N7",
  "key28": "48ZY6ZrQ3a3cH6zYGfijYEVrfPu9Vcj4WuqEdc7x9DUwXorEEkNwS9vG24GUv143QvM5Ht2Jprkf5ReW4XGKYYyX",
  "key29": "4obiW9cnMqedzVhUAHwomeb2jaAmbNxsMZJQ4BmyR7M19zLoMfAZonaBM3PTEaCmxw7VK97HMVLQAMBsU71q4ZSL"
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
