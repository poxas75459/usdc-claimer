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
    "2p5LvUSyGXevhXeeKNpz1PmRk7YjqKsLa3yH8J7eM5DwN4rXmEozWB7h9wT2FiNp6EzB4zfBVdfSv1sMfzuAn2G5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C8NoCsaNioniBxneBWggnYu9J4rQMNTCUAAaM8MEVcyfNVspVSHgpMxxAFiL5hPsjndNae8RWkr5NPzvR7kKdQM",
  "key1": "ma9hKakZsJjthZ5AowmLSQr5E5fG1hXUkmiiLV3WNw3urDjSLK5PRhQvFzLe5qqbfu8rweke667LPLvT8EtN81s",
  "key2": "HoJDijmjBE1DzQJYMMrwxeHiu7pAw5UUpwJdGKQC1ZRz9QTeooqmCBixJjY5g41RN591bTwrC5L1VuYwbWydrdE",
  "key3": "gGVWx71DbQKRNfsD3QXbdrhaUjLvawz4DKasmyUjhA9X4zSNWDX4byNUAoeQGegBjF2mX12eFe9byuTJqMKYwos",
  "key4": "3HFQBr4dkWdQWcbTa9EGUTgJGdydFBay8No5ZsxmncUSVSH7FeqNQgAmBowMW3L9FoXD8rtFdMgGLUE4pipQExCu",
  "key5": "4eVPcXfzEcjZrUrJpeQ3KcfqYahkPXd8YnmE6C23tRrPofBYYz9J9uK2icEUGZ7FBMRVCsVFXkKaWafka36tTiNw",
  "key6": "4kmhpstFnUpjWix26KZrLnJRnFE49QoVUyJEyD2cXQm2jPFQ9o5tiNaKRYMwM1KsrGvrauEmEPQNKpXRJBzRWGti",
  "key7": "5jpqEzrojm1czVXdYN3BjnciE4LFaoUrNZhyasRuybVsivGfGkGqra5fsZiisQP2Ko3oLajaXwn724LiMRKuXYKB",
  "key8": "o469hTw2TqjRU1jUxUSydi48YcADXq1jD95fhCDq6pfvJzL4xCKRbwRWhL1EGepia9dTprKXuVGxhXofWQbFACe",
  "key9": "4awjFt3RQxPFsBj2r3cXB2L1B6D2cJwF3WpqBTDZUJ48Jg67QpYTrj2K2aFE8RFGpecRaZPttvUHTfrvJPxLxVi",
  "key10": "3qjkyZFqZ1HchGj9xaCEJ2jwBwtatccWKhvgnGoQZj3vZBLZvEdpGAQ8cBgGahF3BQJa7uwv7C9tF5JAVgfy7AQZ",
  "key11": "35mxms8WtUwfJMbLou14bkngSdFuBZfjGkF98crLsDkCefpeJWR695fwBj1L2JwMxaGKitHcgYkFFnGj5RyuX4Jg",
  "key12": "5guj3GEJiBYC5JAtn9YC4iUj75ACHAwNaAeTpDGpvAARW6sY8tUurTEodbW5yPkmqWA354MNML47nrn2nfw4GPd1",
  "key13": "3BiJAErajJS7fZWVQF7EvizJj5ubep1dpc7pFTKqTBzSFE18QuUJj3R1McuFPDBvEmnuXMUZvA8uKcM3LuXyr5HY",
  "key14": "5bNdtb7ia7AXW9E6oBHqvkCj2osctGTgtUvJCXWx3gsM86mGCEnYApmdZMv8ikX6AxN1RRNd7euTLn6JpuqJntDQ",
  "key15": "2aykpkuwDmGCiahCzRoZrFZfdtgE8zppU4tkXZRPJk5YfQpUpZz3KrPcVB7vE8yH3Lg3HbPqqSS4uxpXQUDFgU3V",
  "key16": "5n48uKuovv58svF16KuXJccsGyJPcjmXzVL89XUHD7pygm7MTLPRaYwA1wGehFNDfWhNKfba6ErG5TdMNGE6iX2C",
  "key17": "ZNqS7LRuLcAoTX2kyuQT43brVNpKDz5RCnH5AyAgCmM62MgWghs2vtnad2WFhQBGi6aRUmTUFpRD1vp2ErZadky",
  "key18": "hkdLbWvwzBVYs5nwvGb1UTPKrFKhXTNhgXUvrGsXcKXC9us63btypWix1nGNzT8MDJBtNsLktMruaUiV1Ywi73U",
  "key19": "vsdgiCX99UmmhQ2afx6Qt7pwnfxcxnnEDXtsTqszV4k2yfZbfrt1kpoi9CrmTzQLiJFUmNzfbC5i5uSprhrtx89",
  "key20": "M7bWDrfexonggd5aP4wtYZyYMviemH8seDydiAssJ3CKaz2zevxHbbm6JwnzC9cofwsizKc1HVmzGYcDWxKHYMs",
  "key21": "3Kr4Jpyg4izqapbPfw9pm2DLmetjHEE3EhFTXPDaj6tGa5qVytXDVBHSEEj2Zm1V5tTs9LHsEGzHv7fS5BkjPsjw",
  "key22": "rtgGGJxETtaUHjnhCX87BrtmNqEERyBvXMweoomQr5wsbcKCYJpB69r6SgjCQn9oxjqfJs1TigSJqBWPcHbqZq6",
  "key23": "5w8fEazz9Rdomo8wcRsgGPQx5VRmSVBLZtke1L51JwkuLhmUsTk4m3RVozqjJ7XAyCaLzYZYLAeerknsuPo5FPtd",
  "key24": "3qKHaLb95sgmKKL9uByi4BXfcN2bVgXRe9L4dBbW8zz3aouBTZXFxm7gR2XafgjHf6kvhWHqN6JbDi3JDk2RV6jh",
  "key25": "4VULddsujw88bL8doXpesume5V6kwZko88VQFw4KHxjpT2hef4MxfFKX4YRQTVGBuEgbQxeRmqkiuoMzLBsDYiqU",
  "key26": "2Y4D9y1rwcxVZ1TzCxFdQSWm1Fcnnb43rf8nxKBazVEVKiDuxRrceyMdheVcmk2e9GrU5akgvzWwGBymgpEKgGoP",
  "key27": "4Qa5qHa1LTzRPEBwdVreUCczJdLWmYrcKCR6Pv2Kn7TiKx2quAfjRPpHc8sggYMYyf8PLuYLVFZ1mtdbsNCuiobs",
  "key28": "5VBE2iN7GNk1ZoUKdaDgzMsYL9VCDudBriGZTf7uDypaYYbLRgureH3HxFeKhiStiGa4r2F9GZVStc3af6dx5usU",
  "key29": "532SyZXUffW4xeFNsMyEY7ZJj5PLg6oDr8rREojJCbdovsU8AiegmP4uahHChNGdFvANhaP9PNx52fk2iK6Mqkar"
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
