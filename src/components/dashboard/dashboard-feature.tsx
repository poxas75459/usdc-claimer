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
    "2HcWaBSYZeNozfiQJKPD8HnGegyJFL8t9tTLAjzTPNW7nsVCWyr4hwfj1XmVq5e2hgQie8ziGHjZ5Rzrp8sbGFx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w92akd4ug16GuZt8Shmi4zYm2r85extp1GUJc4wMpUBjmpYCiRjNxj36zL6a7VWhAhVfJsnJci8QDgL25gXXHjb",
  "key1": "3UnKBEJyku3d6LFAH1h4576xLYiBJjVqjKBEQXt1cZWSH7MFsdmcHASrXZKEzyPiQLzaRnw2CRuR2kGQ176KxWuY",
  "key2": "3767nERmGiKPRFRStagHTaDPvGa15MWFz7YL3vNA3Nu6YiyF8BbB2LsW7ABcrdunA5uGxTfwAgtRSpDhoRBiyLdW",
  "key3": "3LsvdS3V2BgRJEDdtH5nUfWaYnVZSuJNxqPft1BkNhb1TvhhPNcKkL1QZbwTwH5zRXKDjwi5cXyEdQdBi1SqPz6",
  "key4": "5zryrJ5tUqqGsw9eGC2XZ5VrsMujRdv8vtPibjUr2DqTjtCzQwP1V5QvveLBjQJY4FfW8Pkf8ScrfGDxi1VKoSf1",
  "key5": "5iN6svXgifoMeWqt4EPhQEHYRT8nGYVXPejbHavJ1oVtzCWKi5Pzm9smGcxpgVhFpDpHVHRJLghZ5axSXhnot9k3",
  "key6": "2ZgbTNRCXhZWwFQn1UbLxvefVy6djFMk84X3mTQ3SGyBG8Djry6LURkQM1D3Hf6pw9JHb9oXEiKK1v7kZgvv78yf",
  "key7": "2Z9mwRFEyUq2vnNxu2J19TKGsVrnoAtCaPzQU3S9x9ofUZV8QErfe2trV4JVp65bqbVaU35qtbZUNXkU9hwdzstk",
  "key8": "5edMXxK3Axnz2N94L78bBoidvezyT3q45z94qpRkNJ1E4P93whZh9gD93ueKTZpWc8X5ZFCUKVbzuRv6x5jPynm5",
  "key9": "5G7rTvgARTWJe1VkttrEZsspE8ZayWUpJEuYrqEsEobT8jd7jitKu8Fw5d1EsmyMq1iwHF4rHYNwNXRnzVtYPF3t",
  "key10": "64KacWVaMbAdUDgVBoFpbf7P6Ni7ASYPZKjdpouAHfa5vxNH1L1GfxEf7VC4Yy8E5Ptp9bZA6Z17HuikcMxXwvit",
  "key11": "C9ychztQDP6XLHg7rECCtejATHcaKmpYEY7TMiKN5eJSmSKgcX3mf8fiPweKhnp1CU62mgCCqqCVAH2DL8dVdG4",
  "key12": "3dhFaf3VG1TizFzVoaz53Hp8bd6RxyN4ZZVSwT6j2H8uqqjL6NFPuheVyNynNHU1bjN8HKkduWmcN8QTBP4PsL6K",
  "key13": "4N3x1WTkiC9Ji3tgweZ6Zyvejf3fnBQYq9L6E4pDvdE3h6ZQYY6dQnfE7nu7cFngNmY6a6pEej2LQr2L8wenPpwv",
  "key14": "2xMircSxN1vZ7wCQYySbahWanYtiEAUT4ceK39Reaobwsrbho1k1NhwUdbsZueQriLUGHcH1g9N9FebmQpZtu6C8",
  "key15": "3dMhQLbbN4knfUp56avZwkwfojwZ4mDBEbtfZ1mXcZkjEvVxHZBXNWoVBko2hLx6tAJu8gfBLmKpJAoBTuifkN2Z",
  "key16": "5d9Lo6t5abahvq7XECTJigJAyoGN9xiYcZEMALGjDQyXX7RuCc9tnGptkfWaWPdRwTJikuwfnoNDWRXLnrw2whug",
  "key17": "5edgd7tDV1FPakKaas2aJW9VspLjDxDyLRHkVFSxHmB3YxpTxhgfbkKSQHsjdx2S1iHqcedcDiHDVRXgfxFepJH3",
  "key18": "4HHT9zZdL4WiAxSYuwfsNZs9THymxPSwM6WvREdYrwiad9pJ9ezV9aUVGyaCBrJrFh8BovGTk6XgmqbfEk5Re3VM",
  "key19": "kfN33fq31hEsJxZtmFfGVXBdJXZn77MDfAruoVUGkwWp9GswsWpz8E3NbTaahrSbLX24GWptJ54PQrjgbMJBCi9",
  "key20": "4UipzttrCfE58X9zRdBFrExQjxerY1JaYHziojQ4rcqpaKzAbietCpDpuVDvU1EgdYFmjD25B5SXPKVa3Ch98QrJ",
  "key21": "41gbMKNuoUkpQQxfLtVL4Hp1ueycqyZ27KSAuXPawMgwo5mhPgtAQLmsr8BwHhEQVmzXPg5VFYwJsR3L1e9aYx73",
  "key22": "S4WPbE8gEpH6D34oie9g22DTybsYS9w1xtRpHVaiE7ApftLdY24W3YzR7WGPjjdsCWpuWGAjg7LYdQEZ8CLauin",
  "key23": "3Wq8tcpA6XTfrzAyvpNrmhd7WBHHYG4sdDTvxxs6EyFE4QWAJaWwh3A8Z9TRQdqLDT3gPrU7sztq9vYtuH4skLXK",
  "key24": "3b9vQ82QjMWZhTu8R6QmSrsr1ENdqgLXZMixjVoEJj5x1aFTT9bGkJTafXfwV5EfcXS835yDJ247X16M9p6Gs1f3",
  "key25": "5UHBj7UD9vQRevR8px4oxhT4GbgB7A2noYQbffs4ujjXGUveBtS1LcmYBNLX9JiUUxNCtRWgdppgaVxrjxRdZrHb",
  "key26": "3Xm2Wc7X6RRWJJqFPKPmhY7PTW63Z3VtbGf5CaRQSk1phTm2WnsGXE8B4TLoMTUSBXDr63DKCFfSK1KQPeZWWMui",
  "key27": "2GmSEuw8pimXNc8uBsMYDob2Pq1uWP4kUNLXFJRfPYdXvuAS5nyLsZAHyoo5dHhfxdPcy7kChwSmWBZHJzybqsMp",
  "key28": "3TVDK73LA7y58gLhS9VKoRThkoj8g3iNBvconuM8R3GrZykiukFBnXTJiMNkajnvY4fp88dBGxXay7vAeGequLXh",
  "key29": "4NbHZypMDgbPBKd1ZTbTUWo1q4r7q3senpRPXZ9gcZ6gNL8U9Fr8t49ASVjj5MgZuNDq5DHQW5YkUYoGxrFdZhCr",
  "key30": "46xyqf45BnaZ6iaWXbpT5a8zA4HehVj9FEKJ8uAtZpaapLVkp2Zb7cZqivqbZWsvTLd4Lp4BhZrs24q7Sb7AwTuZ",
  "key31": "3ty44mnmGyHXyS7jdcQBE2mxXh7AsPrN7M1T7WKu71RddL3d1qz2TUwmsA11i5G4jWY1MXsuSPQe4KD1FP9UmKk3",
  "key32": "3V9z9eexvUa9cLWti9kmRftfWdfkrrLnjuhkLvqfMtp2iWV86gxjZ2Qmvrp6uJcizb1XxDVc5Ra5UHGwn9WQbKXz",
  "key33": "4Qg4MgYApsfJS5oMD7ydFsHhexkqVVqxPFV3LztJtJSHoZUm25mbWpiF5DZ1mDVSuyQ5c56AG9VtpSDFHPbVoCaa",
  "key34": "4H6on2RJzGo2QyK9KCxHFW86qDCMu4H1zmWfySaed3HC7p5AT3jarDndt2kdvicHQZbAGrbd8VhwoeGmdvHYpx2P",
  "key35": "46RWrQrPmUZevch9UzcZVhMuhytJ6bNtHXVhbUVxbKbjYokWMafzsX3GUYMEBr1zbEPDZzFzqAfFAH71vLqNS5H6",
  "key36": "38aj87zQayxPzxtyA8psMxo1fG9NENAvgdnW86PWfD3fqNaCZp3r1T3qXJidcb1yiszwfm4nFkzziq8aAx8shqj5",
  "key37": "3coD7qa2g26f5cbTijQSUp5ruGiWdN4MSYqYvRPwgaXPH5Uc4mxUVmFPEs8RBwCPgr2LCroJgCX9yfAVFKpigrF6",
  "key38": "Rd86BBsLf59yctJbxQTp4eAUFzQ6REKhgWxcuRzFpAQQQHVfwCkjmEWu2xNi67y9BpCq4ajK2CUbZjLdgc6pmPj",
  "key39": "2xYYJ42aW2rUxutqXQGu8RiBNHV4B21yv422Yb7H9j2PXvPw7LGxQSRSFmKTe7CfkcHGaCzTCzrqRdCrriToNsHb",
  "key40": "3X78uD1KCHePveYxjiCmrMCyy9Vqx1AXKRh9rN4PjFhkfUyfJdRnaA9djmW965VENDR6irvrd7ALxQGqjpbYnic6",
  "key41": "oCCGY7Re5hLieEnSakFizA3P6Sd1XffYn1ae7ruRWjbxEgDtvUtkmxoJkwYJ5VvubiRn2sQdRivm6921Xd8CopN",
  "key42": "4uySSWtnPrwvg4drhNht1yxkDX6PzjXK2smzkcaJgFFN721vjgPD9gAtqTcYgRfDbxAeLi5A5ReMgSsQwnZoneJv",
  "key43": "52Nt1FSKARpmeLedW998DSpGr51dfH91EmJtCqtFngmdctrYCd9fgnH4tWA1VQEgLwc6dkbB8EUPiTZ3EtiCWL9s",
  "key44": "5F1Le2Vsn9GYMi14oRvkGDmMGbfzyyhfaA77ZU97AbZW1K6ugZAfCHt78nacjjdPNiGd5P1WcGH7ZYcFB1Co23AN",
  "key45": "5j44kjhdaMhyZNy4h1rvcqGm7BLKs5nbwyKH4HFgVRmncRzyef6qmBWTYRUfkMyg4N7qGR2bu2KUFAxdb1pYErSd"
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
