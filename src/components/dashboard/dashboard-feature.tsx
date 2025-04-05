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
    "5RyY8bEsx2AD4e1qZYEVtYasKSnEYmkz4vcaY4RAAZc6cvERWCPB7MzqzGh9dwvh97BnvNyPQi6VgZcGL5tWw67b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DBEvg4JKxTudEXingjxRrj1fiKkKHCW7eDvVt6MXdACs3fgCRgA3Ubr9LfFX1Lp4sYRa519iyEwVoJ32pgckxZU",
  "key1": "3SnW7S1ix9vxqi4f6SLjLM6Svru9YaftP69uCLVkshEdsixwQfyGAV3eQaBxB4JST6M7mVomBGtxxZExjPve3ysZ",
  "key2": "3fkJvZEbvx452En6dB8TabBPpp9x9Ry1ke72vCSADKgifrnqhK7iGCaHG7KoKvVAJUPN4wyCG9fFU3kZAg3DKzbj",
  "key3": "67VUW7K3ybQxoRwLE11yDXrdsMppnu1agKgmvfmuNPyvknL2df9an3KwUeZzGX2rTEJSAfsGWWUrwWMjzyJTs4nh",
  "key4": "5AXNW8o4TQQ5cuTZ6HvT9KDBLQmocD8FnSkxtLqowuAD6XXDSeAUH9eCygwpmLhRFQK6WrPDLJHhARcBoUjDWAMx",
  "key5": "5USEBFBca5eh2mDiX8zKM7ujjx7WZiPsTEWcLFp8jcaAn5iWeD44htDAsztFfQK2aj2AUiD4so1i9RmwJ7nD1qWZ",
  "key6": "44foaRwmxjugmdQo7A81u4tVjdTex9o3s3b245jyVoxjcUMmmKyTdbRnoTcVbUJDTxPRT5XAdD57fHq3EnCKCNMt",
  "key7": "399dd4jJCAKyTVisuHyheNRm7PejuCX1Cax342oycWZyTgh6TeBTkxV1cKnUdBbEFM4r8xEtvtAvHRiXzwKmYubv",
  "key8": "3HibCaBP7NWQzNWZcJN89UKqyD41VbU2YM1L3T2Jfmqx59k5zDAw4oreJ47a8TMgGN2zHW9P8qwdg5XWAvVeocUt",
  "key9": "3MAt8bLDm5Brwmd5whxGoFrPLosJSWsUaz8Hmk6gqFgXoC4tQmyxhPN5h57E6TCgRhi32F3QR4UCiyE9gf7qgHTc",
  "key10": "3p5FhfAdFBDG8eEPneXe9owtXbvTKyxmsvtD7GZQZk4mwosc3F2mLUqJWGpm1uazLX6c6ix3F2RNh8EfFCyATqhz",
  "key11": "4oBXGNSEdMkLQopE31VpFtyPs6CwuQsbgL78Q7uHZfgUy9tBJupcn3EWSkStXs6eafKfTmXbMvs8tBXg2BGAUPZt",
  "key12": "mvoaNBWYKyRy3NdQHyb5d6rYqZgFwwmuivFuMkYfnX9yqsVbDfVTjWHVWD5xyvxhRqrYWf5VweUvK98hV2QziKJ",
  "key13": "4SeyxZPKpM82MVzyvm7nXNx5hA1vkwoGazMdzUezeUwcUrepZFbmQmH9ERwWopBRW1L9xBtS4gboPFaZrdmUzi82",
  "key14": "rkT32drmTYCDonLnipK1s9oPzQRr6hCCA1MqfTVZf5p76cyejAhGG33RYchzoMQVRPHC1GmAtBTSQEwP9D2K7WL",
  "key15": "dMMee5nR368JLV9GhjsJ2zkkrk8W3DQKssDEruYVSaHn4gz2YvxXx2G2F3n9eCzGyCNq2VY8r8hCTiieu4tihY4",
  "key16": "5VfuowLUie2S9LJKkG8EWxPsp7YytAinTcdxXbS7oHUDuetCeBHfW4GKQFKrmfoGjLWPkwnUEhuUjeHLmWNM6Bv4",
  "key17": "5rcC8qVh4UPBNUgKH2mmoyTUnfM1A6wwvf8fAXuoh6JT6Lfpp2YWUfhjQkT7U68hq845r1CttmXku6kwyRLXeBk3",
  "key18": "52mjDT3Q9cGxHQDxq6ZrWqL9CyHp1eg7TAJsv9bAB1CqiyV7UoNHYdPDbWiv5xWScKytXCUgSVMgcCmZm7AU5Dbb",
  "key19": "2WJVqXDpsAGVZoFPtugsEdeD1bgtF3pZ8bBzmxVq1hMz6J886EHdE9j1t4Hzkkzcj99q1PYBggupLtG7YRsf41da",
  "key20": "4RCRCDRGGfpEKAMyXk92iCA2157qjgDNs6ZHbrGARq2t3MbzKVRR1VdnTk6hMCu62CxfvT8vNWkko4DNcnBQSrDe",
  "key21": "UvjDxjrhH1QYJTChcRYKEK2FQmfdwVumZRY1EiKfmfRSqjTptnyFoqaw5LNpKRGdWxYmKzg7h8PCXERPfvgTNU8",
  "key22": "543Gv2m1z5DTSaebKtNGMQ6FVB8hcpL4d63WP3ruHvAcKnGdikdX87ubg96YdBJwDKdUf3CkFtmW79gNUUpwGr2Q",
  "key23": "2pxEvw6gkzAzSw3r4WEg9antxH3S9aLzmn3W11usgRTqswJdSEtw3TPD3HeEcmACqmKmrxi7MeSZAKCa6M2Szfbh",
  "key24": "5WhwxwunjPRXeYpkrHwZ2M3gw79Z4eGwWtW7q7uTdnBUni1AdBEqsp9nXqWNAnxg2dRPkMkK4JomWBhw6DGgYw2D",
  "key25": "ykgK61yqj5hHxozAVMTKZs2r21xwpHPwYsAfNiaR4cqLezdLqM463jnhJfV3W196KX3UNRX6BFauWwQr4YQGEvT",
  "key26": "6N31k3k39pnzfKBjkkzQ4jV1mL3uKvbZJC6Z8sJFhVffeg5aMqUhvnNfFX9EdoY3Ee1KRUNXQbmjf4iwrvBTWaQ",
  "key27": "ctYmNmNLzgCrBgbKwQ1M5YR5WC318bptLVPbzKb3N6vjxq4HLu8xNMCcw5FKcaGx2356724hZkBTDvKCNe9WcZx",
  "key28": "4NThJwZ8qz5MGG9N51m9wh2MccLAZnoig57XSzLyfGpzW2k8h91kPz8tYtYZeQbKLMUF6tRoFSfLBggfitUy2TYq",
  "key29": "5njx5XtKwRHzVjmcoEPcwnLUMvQoQJuBkm6aTsawBsuKTjb7cEXMX25aUL93Gixj5h5onVEkKF4QZytwQVhGijx2",
  "key30": "5R5Q63pVqVbh77KyPDc8bPvbWrzLiSLdwaQBPV8We8qpvWK8Ad8Qr1SBwvWbgBuamj2hrjmoS8FF4DGQkeQXVpiv",
  "key31": "f5ok2PSULmqYkEJNuRXfk2uMbfFD3hoRCMTy7VMHZ3DUzYwYYKR5Z4weD11SwgKQecKqL2x1YyrzdE4BTgaEhWa",
  "key32": "4TiudbwEFpkepeSyUrLiKCDCF1yNmK4Hs7t5zmD74xboy98vHxWCTt3ZukpYkWaWqcgjtLNmrh7biSXAy3mcsTJk",
  "key33": "2R9qJ1mvVASX75wcLayBsWY9JffVLLVY5vmcvc61Hh9APJ8mAQ9RGK5iszuGG6DwB6b8urT5p2d3MQhMxbJiRtiP",
  "key34": "4r7VPiAQvikH6LN8r2T4kyRnvqbRtxKZ4rqu8R6NQGKhAALZgWycdNXLcG5WrYamMgJBwf1qACSheYHAygAwWQWC",
  "key35": "3Voz7jjmaWMmuDc6C5gnLtZmmMpPWrKtkd4pLVeXk2nTbEAQzBffQ7kmQ7SzL9q28rvTxGbxqBdY1Cy2ZJWbh4JR",
  "key36": "33pb6PvA5MivK27x9uGEK4fFDsxuBDjybZjiuQ7RLcUQHyS4K6KKP5m4GJEo92ANVoMtCetq9S2ZG84vcMbgHedH",
  "key37": "S8PtAgEGeif6gtrrFvdY6EehBfDfSAR1HLYacTLZDGpJNNe63QTQhiht2dTgMQBWf1HcfA2CtA7hiRpEQjtP6oN",
  "key38": "46xm9yPnSoHdm2oxUveCWp6Yi3HCBFhJ42tVVqG6CqELAUaPC5Jc6VB3n8dNPVKMq5SkfPHVrBbUMYn9pnReVxVD",
  "key39": "2vBr1pxeznZuv4Be4SPmXiyFNgXL1Ekph32uDbejqvrqz1Zay19XikstsQKUd5JB5JfPxLPA63PTbENewAkyfYEy",
  "key40": "3ywEJYviwBgpcqUqNTUmQiXBPCkjPPpr9spFJSE1aC1isK5fZ4etXibnZGNJXLFDmUnMXCqW4ERGHNKFQ71orJuz",
  "key41": "SmupHjut4aWbUKG57HxwfWcrpR6GzhMUZ8KN4mP7QZGknrdNr3DQnUstFD3ciwJpzFSN1dAqLGGSsAXjMhFNDUy",
  "key42": "3MDPVKMeLN7hdW1PqDaAemxQcA9sM5GtGGJYdSumCy2rpWAaT2hyoD8nbnvJEMNP8w8q25WuW4Biidnu7HeCwFVB"
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
