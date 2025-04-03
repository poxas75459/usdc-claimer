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
    "61buYzDtAHsEJe7ZcgZw94CnsALRjNBWq2EmmNXF5FYsQ47qWtF9mCp5RaqqPMA6w58kKSdZBCErQ7T8kKRMSX8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u83HSzfk7PkwZooiXs1mNqP5k71F6buDvHVrC3UcBnQfxPa9CgyxWMLuL14RAWom6baMYMmbCwKeZmMiab2FGWe",
  "key1": "UNWQW9B7v97PGdwEgbR4hvh58nAfJgzFHgx61H7ndo4r6FuErpL8hdUuqvcKZrDVvyfPWSbxhCYaVpj6erFWvUB",
  "key2": "4TGhGzdD8VyCFWMt5bntxDorBKyYZNEGA6cC9M6Ku4cSSaSV7tUyvfa3ASqXE9bK2Agf1t9hg4ua57vUSdtgmHFe",
  "key3": "2dGmeeyXsnLF88fTvpgzajenSzG6NT645d7paSqWJ65XLviZK9LJ9QJAkfJKNkXRbYretaVVwpnBNgDEewMQbPDa",
  "key4": "3w6eCM6yUL8aiANvFFNSqFGYYoA4D9r54m2sq3SBdCWeJdtWrusJVgZYDudpNqHC5pKdfw6SQV5nUrPQhSmvtxyR",
  "key5": "eLS7tEFgHsJuUsLt1VkKPfos3JP4neTbneF2ef2SmwT4bwfxMVkCXtxo1tMYURVoJJGAjyGCeFw95A4jhpPFTJ2",
  "key6": "2H73Sy4C8Hwuq5GoZj9oGEYZBABvaXvnraHEsc4FEhMRRw3YLw4fWZtqJsBmHRye7YTEGWjUhnmranbpDeS8aw9E",
  "key7": "5LdWF1bt9okzoJqPjmpsdehccHcovSa8bxRQxP1e87rbgi2AmjvpWBHv6iSq7ofPnU4dn8rHZwP86Um5ZvhcivdJ",
  "key8": "3pkTqtCyz6K97NPueKfdeAakj5xXh4YopLcVMp7WfhQSPNwemCxE4U5w7ifW3qMopTFcksxUuJzVJotxpVpDDMH2",
  "key9": "2tZPFj2FTkvkb1WLedQA952xxW7UmvFoDStwPna2Froj1xDAJRGhqPfQbcXEcfE3G3B5y2NGFB1tmHJgm5uwgthp",
  "key10": "3CRj7p1SXRPjw8AWQB6DE6KVZPzLjrSzYgjiGYJKUxxB2uNtt6eyBmMztGPFXiT4mFPYc263y5GNWi1FFzCWb5CJ",
  "key11": "2jMc5NkDxbEWznJH4LCoswcZSyDV5cEVcnRKZgpyAVStYzbEPkYmciRL7RyEHTqvnRyyAZFjLPsGHjXVf7seWM5p",
  "key12": "3YYvGV2BHYDegNgbnRu7FJHn2turUfDQenpAaGeeih992VXHwFq9jh3uUHzPWkzBkrJU4v69waRqK3wLCFoyyM1E",
  "key13": "69FnGYctrRVU8nKVQNKowruWgxXfdGfizG9sRR1bFKm9q3zQm9N5oh9CFCexacu4S9ozoAua6mHnJnZZFpxvL26",
  "key14": "3P4z8JDgGFt7AAdJQpgeYrx8Fdjiiqy7CPE2ANLE9AUAJw4bfJKbXkxnCBQf6ZV65e5cwBRjHcbeo1hQQdcN9hRN",
  "key15": "5vN7CjYmL4pyGYMdVUaMJAjRde3DNbVniz7JWNywPe45r9gfDGiUWe1mLKLQ29YewDarNRhug5CV4DySj6eK6FS",
  "key16": "5yhN7wDimd69quE5nncLLwPBrRwQHyvo9q2YonGkPGucq3V9fNiygBL4SCfyU8mmxAGAP7uF4EVUjTezSEjUxxBB",
  "key17": "5VQYKbdTDeHKHNwCErv8NsUUCyQdpLdiuFMnUEVNytqCun2xM3FAURQmnTjFZgFac4kAUpCU29YEUMGoJcHRPTkX",
  "key18": "63zoWELSUFbAstRMc3csvbh5veoQm5Rxb5Jfoune8a28d77CibwXRZZigJA4e3uRoEfqXsBsLGgNdVQZsgHtJdsm",
  "key19": "JetjKgH3M2V6MN1bPe9NXjP55h58buf1BtBSkrvmsx4B3NQ1YQcEnwGV9BznH6ypExsgNkPup5guBXSY9nRkrzs",
  "key20": "3Zv5GVWDXSV2TWoRA6uPRmwR9ZaQFCY18rrLP9VsYkE4r5MHFhmUBPgEJc99XFa1LuCVEDDwUtqEwdxvfE8dQszK",
  "key21": "4vrrDTQmv2Hmw1mkmF6to487fTDBVYsAfknGKErTkcXuVTHnNYNRLxvgxZbh1dkufrX7yV8JP8mv2bF9wiYMewc8",
  "key22": "5uraCJfsyrKfQr9tEM2cfpUKKYPsEsjWMVH1kyr9A8aFNKHCYriEQWruCyaw8UiVVnURBzLfnJAY325DUDit8aL7",
  "key23": "KdCKocpW57ixwdtgChnGwMzXrLPzVmB1iB1ePcrpA8sug6HwnKpzxUPKq42b8uJXncyjPCL96pSCLyjN4VihVxG",
  "key24": "3DZLy7UBEQa1vbuk4dUCXXLRtHf7sDVCSettjW5useebo8PDFT6D9GjohqE5oDi13yUXPfY6fJnvJYJwPEVMZw5v",
  "key25": "5AjTGxEsemoyJEMeeen8BCNuqj5TAGpbkjEK585kmEY3eFgpk5NzH5nmDjTEQSfq9uVdH4Gu4btcNZ9jR5JpCH7u",
  "key26": "5YZiVchdzwfTAv2HLQqcdy9Q97vRLfnVVGSttfnAsGGBLhzbiEHNsgdo8EEdrpUiw4HTZPfnXzr5yRbkG8cPCZYv",
  "key27": "5CwTBYS5APh2YmrcdzE8tBXn1WfJBKaTvr6m8TzjPQYXPqmutJrjKERPQqemDTqgbMBRzSvVfGgwqeX8buRi5HfQ",
  "key28": "2dLPtoju6YgVSvTWXEGBM6Uagfv8kUTLb6PmpJZDxVNi2xahMkHnoyNiacSL1k2wBnThwxMtLEF8FH1g2svk6UkS",
  "key29": "4a2uvknWChiRhH4uVDKYEKDCfBDg4qpRaTdcQAZbxejj67meL9PLL97vigiQt8D24CoNWJNpvEv7XYgV65EhmWgZ",
  "key30": "5UUgcLJH4t8Nk2qQ58rhJ3yoteNFJuWXNLYtSAaNsKJS32bgZWMkUzemMvbrdgMDQ7M5Mk15ARYNTQm1yPWkfJ8e",
  "key31": "2kTgpQ77ZVVVwYiZhG1AmfjTexwn6Zc2bQXgd7pVAHqG582JxaPBYWUSojPH8FyMmfyCvtppjLVW12feXbBjz7Gn",
  "key32": "2AhrJcQmMuL6FXN4KaLzQoMnRJgNef1kXGodfz78hhL8VfkfXoNbaytU6z2TBGEQtHDEZ4uJi693vJtfotUbYvFC",
  "key33": "4qNNjUYNLmyAxMB9RX9PYtrTQnVzvcAULDvsiJEgUa7RsuLDeZ9yH1c4U266piLbTzCGeNRQUqS1nPYiBYjPCgoP"
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
