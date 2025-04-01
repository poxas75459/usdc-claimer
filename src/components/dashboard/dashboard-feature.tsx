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
    "2fLpGpf9Zvi6JKo97sjFFywgrsP1qC8H8aPGvjmUY4VBMmCiuUefaGhDYAdShHvQucGgMdkJmEzKDKFF9qRG4QcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YSBNtNVAzzX5FRfr8A8SjAxYixU8139aqkZ4mWRfLhWAi3pZ25No2WkQX3PQtEoFhu26PPm71zXSR2bdAt1H4qc",
  "key1": "qiut7Vi1AjLfweqCNunKYiyKPm5jmeSPDAuieyqykXKnTgdNszZbGJB8HQMJ7fNA5cHFiaWaoGgBBQeLurbrPu3",
  "key2": "2xybPmn7SN6E1ZxiuGgkCiFjgPB9MJSaZQphFwpKSu39qfypSCMeUDB3PRjXV7a31BCghiDHme1JT4b1JyeNDBw4",
  "key3": "5P8rcNFCV8wnzo8PS2XKkaYitLPC1Q5y5miyBsuEVmqQZQtaDXWTKVUqUSPh3tEz3UHCtSmCUXwD4ni8P87pJRxL",
  "key4": "3s5gUJoW31wb7tioGi9rdTXCWDxP2hGb34qwUhWNztzSBQpay7eX3b1L2gm4LNvVhp1mpyYCEANeXM8CMAP7vGfB",
  "key5": "2UBXSqRWQWLNYGWhy5hcRUNqTupKLzBcLgKsQSscDpoRa2y8QckhpfuQ5cHAcWHUmPGmDPeH4JMd2B8X63HpxtYd",
  "key6": "4z9dWK1j9k39W4ybGE7dzM26WsybxwdwSCZZuCWx2JpXuRpVq7itGuVZAMA8wXi44YW4fi9MjiqEdg3bHtTxafL1",
  "key7": "3SrTe3EcFf6zYS9yLLDYnzFn2mBaVw7aTtr57tvbecq3FPGdxQ6sDe255m1uMkhaUgN3sFYGd8ijYdqjFgJgJSxJ",
  "key8": "5iRqjVPjsy4AYJ8wwuQX7tSokNtWiXwqKFM31mQ33mwjQdZRbdDReHiadsMJBmjwSYwMu5iCzye2zrpMPjhKkpXZ",
  "key9": "4UKAyq6d8cKhMM2wAuCyASU4zB31QEcQTZWdHoQJopyMgKNYyd6dNGddSn2imBirh4ggkndGyTzVfjzVuH3u7RaU",
  "key10": "2dn43zfpgQKPDq625obq9PCV6UruZnkhRbcarFih9BEPSxmgrGUNF3DaubmFR9vcL5sqFFv5YkqSCQT4NLwmfC7i",
  "key11": "ipYHtGeoJGbg6RL4npcYEgyLrtvENUndxGbHzZkk8GPuYxH3UTZwf3dmPtUwhwPij9R5ksdJLpCUV92QnbY2io9",
  "key12": "eKaDvkttMudaDtb4D6N3hY6P5riEUp5YBEmdpbf15JEyJuh1AuadXzzLBguzNzJ4DAPdJBQGU6Gc5kU4wgaQ89j",
  "key13": "2pDDtjaDFZwQCkH3krjd8XVb3zLB1vpxswUFQmtoR56ctTusokfk6oGYiw43KC5cgUtaAUBB33XUfVsooy9DYLjC",
  "key14": "2HxNJfkvp6rWauxYJe3wxxRTFXSjVYEk38L888vHbeFhQLy7WzkzLwxZLF9YHLkGY4aynmk94agg8hwGrPgpNr9X",
  "key15": "3iVJ5kJ4uirhAoCwvBAPuKNDGLBWxXD6quCeNZWBieQR81bcYKPdjTdpQJR5yHy1bVQ959bZb6GWQPM5Zee5sGDu",
  "key16": "5c3XfxQnZoCxowsCSBgsAyDwc9yrZxCh7hSdJt7wgDfKw7NpKPpYCZQV6qgZiPSBav5yDHFmiJ2whEdWWBfEYS9K",
  "key17": "cdXRp69DK9LdyFgSgYRAcvC3QdBEz6m8DBL6487aTfKFE34xxqaYu8tUDBUFpyn5yvaGxvKprKMeoZi8tVwhdp3",
  "key18": "3r1yF8pnHKsCfJ1KKPaX6TnoREpQoiE6Tnm3NUugEKBSjGWYs67VXA9q8rgNeUUyareqkTGMNvHki4H29kVRLiY3",
  "key19": "NsdRC3LSpScUMT2sUbfftdiYBCQv6pSmvg9hbEC2qscbUKWZfEPaEMaqBnhZbmZ4sjXmbtMxUiigyLKvpg5wzFb",
  "key20": "5Mw3rnWhFoskdgUF5QVWDwfW8sGUC7XEZ3BuFPDdnigitrVsBGmDpQTfYYMtRf759dnT7Et2iDRq5wVCyWmCitxu",
  "key21": "5DxNL32o5emWTbKiGcoubEahchpK5jNpvmDV7etZdc5uwWJ8E9djWeo4pJpe87DyzuQ3PKyKWHu21xgrNo8AdKjg",
  "key22": "56cm8m3qZQf8F3Y8vhB22Y2LVCHQixF67kHGb62n1PrGnfCSsckQxZq7UhcuMcqaKQB4KqdeqQjymoM5dx6W5Wf2",
  "key23": "5cxM2VtgwnRLBeKTZUVL8FpLb3d7ZtC9DZw9hkKHoRFGwkayaa92tKpP8aG2rDXVVzJezUC9sTxB5NyYxF1pn6KQ",
  "key24": "65pJyNimLsKuSPAx9hRt9sbQ35wWNvGj6dHbKBJQYkM8ZsnuaapiG1RwhjUotGrSKDovYCe6RQ7cJqvfBHkBfsa6"
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
