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
    "5xUHjaZgvBfLRfdbqjxR6XG8pCb133ak8ympvpKGR6WmKHe4srk99v1FuqJMCPfgdEFSVdG38xUuZpbKaozQGLnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49dz2SWZwH1y9mmAdayfBEKfsKk8nx94Umajgz8X9brsKr5BMxR4KjWB86ihVYrosiKKwoLKLqVZUX2guroBGFnn",
  "key1": "3GnkGPkpUbedeiSknbxuBe91XBHMAAiQ9gLR44F56Y8GMojiXFtrdXsFJy5iiAGUHPu14VAynD9QmaLcBFR5mhoH",
  "key2": "4xfmE17gjgdQydhxfXZ8C4f7JF8dLm4E9SiviFJtNcmzYyvpKE3oKTccU9P58FLytn7nVsrg5VabFipTdcqpihuo",
  "key3": "2qQYsxzJpEE27p9zgfezHchBfEGC2S2Gr4PcvLRKzxWErgg3KJiedvorsbJCzeeaYoqh5rtM8esc6ZRVK2DWu1Eu",
  "key4": "3QxghJvtrgf9fFUd2KeCYbSn8BZNDwvJur2Aj1fPnrp38qMUN1tJojW99oHTgUx8xnFHJ7HmZV8cYmBhYCf836k7",
  "key5": "y5afKBk6dAjNZD2tAb2YeKtdHBn1vq6v4tg71rrw9FiPNw1UH9HkG52cPyAk47zzTicF8xxhq7vAazLax5dGa22",
  "key6": "2b8JBjppPYhftDMXYKqaEYb9otKWyqGmoD7DRR1TsEL97Lhv98EJFYBxiEKaRLzrMrY3nyq1iTRqS4zv4cmtsZmo",
  "key7": "kpmeSoRcPaiH1YHoabEmgRiZqg32sdAWfrmNq9SubxCpaE3PAikSSc14bchurkJ2Wj81c6bK7G9KBe4yotQi53X",
  "key8": "PhDkmo6w2iRaYzwjXCimF5GhVjeFYxC3jQS5FbHGgt4Xav3BKx4cjaruM79K9NS6XCstJuWEWrboQ2opYZLC43F",
  "key9": "eZv6547m47o38LybW1DmPd3imwWBeUewue93AQ3MLDH5tpXAVVoExgZL9zGLHZUrGCR1786Xmuudzeovy9EE3jW",
  "key10": "2tQtC6uQAnSTEwMmcfE2kp3x12XwQ7vTst7RduzPXgcjBETSwzycADKS5TojZijy1gJQbaefop2xacnmYMckub3M",
  "key11": "4Y5vVEueLpfZr1sxaB8YihEjBntapdihjXpQMjHovubrLApXwczQbAXnegKSxTbDCZri1Hzvv9Mi7sAQUMmyNhcg",
  "key12": "5C8cVWnGRDxNmHX1NFSycRPdDgJ1J8uP7kjKkQdcKtPLM17hed47GVUFKRTiPzz9JKfHoXNZ2GSvbu9uxdjew8c8",
  "key13": "v2YYbptibjttdJht1wc5tZESkUr57eYXXttqGGf15bkhmxkbma7jFbNHhkXZfLBxTAZYqNT388A1waZGyBteBXP",
  "key14": "2oo3DTnrXsfmSDyK46bhdwvxZisjMUBhHQLahez6NtPxvbgMSubJnNEvcRf8pqUj8S3RSTH54pRb7jEax3bZa8CF",
  "key15": "Pr7kUezPnKfBgk22y8qXAXtU87YsBR47nvPiDx6Y4KkmZzx71SEYv6HyTDhEkhfdyjYfte8YpazVwA9Xa238LDg",
  "key16": "29iAcHsWyaU8bK78YH5WYibssxFTYp1FhV6pfHwChHcxmC8TCsCHmcPg1FXqW9j6BwuHgdsQUkWNUzs1DvBvWyNM",
  "key17": "3tSK734xwg7PFSwGBWL2fo5kFicVZh94gJ666wgD7pBdDPoVLgCzptFbxwU31NDPaTWTtx72LUfo5ycvUU8UJZnJ",
  "key18": "ca6y68N1WujtivdDhnuxvRujVwgTSEFNHif6BJHnPLtkS3fruXmeHwSuHWQf9gw1VQneaTx5MZST5J2GzY1Uv29",
  "key19": "nzPqt2BKHW1s5Mxv9szW5PeWgiKKQ1KYdKRvPsYPhPLZD5EGQiZ8fU7x8hj7RYB1FAbRFpEfWnjaWxPGN8CoqBs",
  "key20": "418kQ3z54KCAyHCwUcKVE1q9pPpooQtZA7J8AMa1JACQ6jV8RPbFijVtBhupvtjRXBLizFFgqTafow8FVrQ1RuQ5",
  "key21": "3sE2dG7zcKuMKvnQbZny7NLbvLNEA4bwAKRfZkSko7uiofHhDxakJWykQMNdPVxQTFSKDHbCjnP6nmvmdm6DLcX2",
  "key22": "3FgNFuf4deW7pEjmu1gThx6HQ2DCKPAX4JQkL5314owKXHJGRcjcbDc5SzC6nDgjybJrcwMVeiVEUdFzHf1B6abL",
  "key23": "XQy41NWt2z7eFmLcYgTNuUUJRCXRcvbti5A39933xwSGwHpc2KAThrqGRSi4ce8vBz5vq5pd5RWctj5BjKdhv9L",
  "key24": "2dH1pKPv8tv11zuqcUyC6PzaouGFtxWox9wd7qt9NzSzLHb1rUrZUvwTrLAGmER6Lh5NVseHLXo13SmDRLusieQC",
  "key25": "2xTvgSao4MqonpXUQwdCxJGMqUkvHySCaFZ4tpsU5pjgu4x6x7cJcrQ9eY9cZkYKCEeF3BUbYtQwATQvJv3UCNVD",
  "key26": "5e5Kqe4nb5H6tg5gjJu6SL4vRhq78Kwz6v2s7MfrLkumfS946Q5EUbkBRSDaSsWNQErUj13zfoj7VP8QPnmFWWL9",
  "key27": "4C1A3x8Wfiv61DuWeZRk9GXTjt9Xqg3DxL1DaeD4zmBd2RZr3rN7S2SxewPqu5hhX8sVFFdpBHFJ8M3iAXxm6kLj",
  "key28": "3kYeAGPaigQkzS4AUR8kqMGSBHBaRNPZjW9VTJZHvcNxUgCLC5g43pdQDGQpZNLzXdVJvFWSuxvutN4xVjfaLjYH",
  "key29": "3s96BzmugirxSbMYgcVuWTo7MqxyvLE3cYurnVHETdnyvaqDA1bTxoe4Lir77Daz4f1E8CsvYDauU8BP83P6pfcp",
  "key30": "26tcy6qtm3Av5n8KyqeogrrQN8SUgkPUBXBN6zSUgWy6sEPfVm6g3pPjBWSLrvu9YwJEPdQbB95QyW3QKwBazkPo",
  "key31": "48i3R3N1VY8BCzHDEH8BQfWiERP8mdZwGdupN6T2tZ2TSp2TJTYqS8hdBy4EsMmjfCEtRoAG7bD68dV2VdQE8si5",
  "key32": "hFEwNYQC4Ydg7vmx53vDu3nZtu28abuQEEZo7gdVqHEnaBGVnyTmhkPRG7fWtm2tbqpgh6KDs6MmXLnGTENAwKE",
  "key33": "4HJNa7Vxx47DEjQJTzqeQAcjd8MBKHmNTdXqTVGwf7wuwrFnqeQJEVNvrzEb6tx3JDkR8Eruom3oYzxRmEh3mEzj",
  "key34": "5MhpJhaZMxKuZAMLsGiPwD8dSWvpgNxzvh72QnxQpn9hHT3ENL8uvU4GHg75coQmir2eBAMLZG7brgvUY4mUhMbt",
  "key35": "4MMDCZWameZivgi7sXgfvWi3yVV1EYTLrTvycpaQCZqw7Y56kBmVnFjer3jC8s3rguMyKk2uQh8WG6eRWELwELUw"
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
