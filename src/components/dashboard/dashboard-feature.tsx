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
    "5oyc371eRWj1A6p8eyuHRNKJrpRDaaUanEy3Jye7gPokvkwcTxPrkVtxe84h1y4wwspb85Eu3EX4HgtzZDdWUV6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uJemivdQCiccT66hxxU1SsDfEFyS3ifXzLuzFf4neDKQwCS78NioEStsq4rY9CMMqhC2UTVqHrZccMvw8py7sk2",
  "key1": "2aydLe8gJTW11ZUCbiqjQgbhN2bcRxDRSxvdP86UKZCAZvnkJdTiNgJgbXFQXSG6hsRrUGS3us6R2kmxoo28fSDf",
  "key2": "JmBs9kVithM1NkiKfuD5ZcCmup2ScQzsPorfZZ5FHeCEWsN4oXgnztLkJzrEVFCutDSTVKf7EcSx2F2okmciqdF",
  "key3": "5NFW9aqzpKi1GUmXezPyJhmyoVfhxqq8jQUMBSfnwxexidoAnt2nnAEECbQjkNbtanEQhFhuQwiYPrHteKhSkh8o",
  "key4": "5Z3kTiog3g51AAF9M9F84LVmVBasACrQ2hHHoegX7ztB2qJQpe2G3kneiciFa4h1Mk5NJsHfQPs3e1XPtHKry4K4",
  "key5": "554rjrQcMqfwyZEDnnnzoBJZhFgV8RMHLtbkWoS6LzwTL52YkbY3uKXg1Grfw6RXJxmMoCGtyiiGvQxDa93wsAse",
  "key6": "562aKQb6E3eo1XNAPcGghW6y4rM8htLF8ymybeB5HQjMBzmCxkhWEfsUHU1qhoaC6Jupmnre8geGwtqiRU3c9wNT",
  "key7": "4P5uS9WubjjMyigDm56NL44Mj8EfPADS8fEvVdzWFqxY7VHkGeGsPCy7Br3RHCr1M6fM3njS9rrpToFBhFE1cyJh",
  "key8": "2std4ynJEEsLHErw9wUxy2AkiLMPanFgWdLF1NHmXjWADYhxvvtYhaM1tnTNNFr7x8ExrNc1mSTVAq81YKaXkTCt",
  "key9": "5PmznAKqe8kfZh1pDKNxQ6LHtzWddm39tk88hjJPNiPEk3wA6XKVs6kzrs3a1rQ4m3YuF5jTcXvyHDifrJAwreaz",
  "key10": "hLAU3jRk9GqjQQXn5R6Hpmunu13phTWgAwU2aHPCBr84KURTZ7b2vPjC3TEsjrMMbzMyJsvu4j55GdKmqdjx6fd",
  "key11": "2viCSsKcFdvLpu8AJDBZfaC971nKMLqhQCkPn9kHT4y4JXZ4WtUU4MsQgM1xmrTdtdYag2icVNxSuzQCemfZ9JrY",
  "key12": "2REVi9yASPHZcyNjMxUmfua73bq91w7j97HjMb6X5muXXPmSASJywMM4ZnhfMw7wrNQpJqLguEApyR49FkJguqYV",
  "key13": "3Kw2fy8caav26bRDjmUQfErFMyBk1BpB9MeKiRMGftx6QtBwaRQyabEhRh4qADMAxPMREWsYb19mu3kuB3TXKFQt",
  "key14": "5CVfc7FisjhJDRvkipSrNjhCQGwSfzfLwD3Q7ksumdeZd837Jx2RadNVt3e51HkP286uYSDRqkfkTyvGQpzoNU62",
  "key15": "Je6SwmuLMk1HiRHXoZfJLFVteH9CMJh1yZtkpJp8GAp6Zsh2LYPRdSpD1Y1GjeUFo4gXESjVffuYFmumt4HDTT2",
  "key16": "4TSqe3dKqGt6VTtFNxwZYcnVh4gon6FAq2ko3fWnu2GEnhPdbK6TbrzBSCa64mw3MTb6K5FpPxcGTAWRSDv4oJQp",
  "key17": "5dRLbcx61sm45U6rEEcPvEcbiZaE6TdVtiNUTrqMZu9hdnEiR7HHCmgtAuyD8RsjDXQKMyCi7sjSx6BjP6UJqsGL",
  "key18": "2Mg46GijEUKnvhTX8EiqtE9xWcUEH9vkgzdWf2rToemibrDrGKJ38xgfbJTiqX5fBAKCwQn3oo7EhZoDWM2dP9jq",
  "key19": "2jpHPoxi51LttEvAqiTUs4NULkMkKwJKtn48h8vSwUeSU98MVdUSbsaLHWLPAF3Jp1PVhCDgaj7hdAw6NVp4z7vP",
  "key20": "2caLEp9ABDLgfWMnG525VXXaQMdsNar6kSfLMaGwCpWaYpAZPgT6wZaoaEN8BahMbjiQDfMsXQKUVTrmauZyMF62",
  "key21": "3FpTFwseLJ3g7tBBqD46GbWKN779ACnJSB7M2uic2zJ32eYcc7eKUbvXDUpzgtTJMQCK5dbEqFFjqhBK7YzEF3At",
  "key22": "3N22TGqz2meaaf4Vcm1tYeY73fLHiyNASzUZxkm6E4swDzBg7Cc8QFymvUdj1z9aJGBQSj11N1rDveEcZ2prhwAR",
  "key23": "5tkVQcLDZ77eRPFKtH96LcicVB4KzSeVDCtC6RmVr9Vf9mFMV8fbcYxukykqgKLmML8wXuRHcEzhsis9NvceEkC7",
  "key24": "4X5wEnukzmss9hh6uSGDnhSkcMqCQfj7YEHwrabz9boCUNdjbE9jDSyWCnXurLqtqikhD9GUzQEmdR3WMm8Q4G3E",
  "key25": "4XN4Gooah3G7xnjpLg6jQFp4HXuYLfxqdV6Gk33MSLqFZFsZKjoPsWHNe8LLJnVqjeB8JgqDgjepncVcPnx7eHPv",
  "key26": "4B3MYWb8iLsV6r2WZZ56WaPaCHH4eXZoDNC4wmqnadQH98pmiFd7rKmohz2f7uNLjyrk6r9duhLYNTNZE8cgESCV",
  "key27": "KUEQPjjNdQiwog2QSjbLr48XJ4wQ5NVTWEssj7QSskyZSVpo9JizYFGpGGypMAUt4e7h99tkGzjW896TRhVk7T8",
  "key28": "ZYathPiyTagBRduGQEv79ku7CyZc8cnd2nokcw1qPoutoY9Ev1dGPzk75Be3sBnqPfqT5aLSKdWcs8b74nq2WaG",
  "key29": "5V4fUFtZ8v5uwBL7u4nx8NQFsYrZ6obsDTmTwfDhAFJ97o9Pm9rYLXx6JGqXQ7cZ4gwsRqZRCsBg7DuxHyDefBW8",
  "key30": "3fpjqDvNzSXsmh2NmddaVsxjZ7K4RGbcQi6HrgK8k2CayXqwdR86v1x1c8Li3JPx5hwkeriwkZ6qzHW1sctycgvU",
  "key31": "1N3Sd7Q14FzVzqym6eyYxTwNKmTqdR2AWXk7NADeoHLRWgBZgFt45bTjrQ3PxuZmTC2wXWicyc6UYTMwPhAZBoT",
  "key32": "3AxS98h62LMu8mqQi34VqrCkFFg4PB3NRMc8CaQJY7dNVJdHhLjP7bTBxM9mLfS4U9gsBSWXd82sPfpN39ST8HKd",
  "key33": "2KGuieoeMdFg6gFNefRHGxNaFyrPLGormSWcZHjEx82JnDHHoDUSCBR9CojJo4dA258fUkaMX2vmV51TQjW6aFLu",
  "key34": "458CPs2t8JN8BJcBRyunhfZaMAjdcwqezP7s8sb8jEAuXq4NgKYFm3fsykpRpDh4qFhqrzkbd98Vowc8SGuNARUf",
  "key35": "51TJWVm5d64J72FrMmNz2bv5VX5NAH4cNEwtR6Xm4XBGbi54hZrwZbJhCN9QQEEKUiAAiNPgkLrXEqNS4Vr4JSVy",
  "key36": "2U9uYwdYss5q5QSsm5YEnDFBQSoF3W73gGb7MJCrb76ep2iW7tSgCbNkVj2ahQ6kVDv6YdwA91HHHkACYKGenee4",
  "key37": "2k9oC53msYJDNW7ArCzCMLh7VNKCrrhTS6QQwUfDJmJMEP9vtKrzXy8PKwhzAxuNZWsHEzVBCmHDsWA4xQRvdQEk",
  "key38": "52rPfCKp3SbzPT5e2nWPGa9n6MA4yGFAE4A2WczhEneSVdCucUn727HsMzsnxPxmRbHLoFEn1DXYNYhHjHHfMr4y",
  "key39": "4bFa7R8xXjN5gJirkGuGA97XDfMU4Az3iGRPkbFxLH2yjubZu2edHcP68bcW3UXFLfPreY5EUZNCmXkewtnXxaqn",
  "key40": "5hcnNiP76QNGXcW2gg5P7rTxRT46zQokWnukB7iZxLkzHUaEmQLEXZtpHhjPezEaJV4QJo1JrfwXbR6RkGbH35zr",
  "key41": "jkM5vUZk4hw6yDyHFzDWXYcm6ZNJ8EfFxW3gMLgyFWvRi9VCVtNfSZ8ktBHMcSpgwCM282KrydFinLgi177Ed71",
  "key42": "3vMVCzDx84aEnMU55Xcci4an71A7Cwb9H3krEzN59x5SerCpiWKTgoeTkMqhzG1ozxCsusZjvEUvHD2Q7yPKTMj3",
  "key43": "1fodDTphp3ze1xULFJWFR7cBENGNjuvxJN3uNNLq6w7yU6ZDVSVPaa7eppWP3bXRtqzKAovJJ3G6WyiJJhvjFbD"
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
