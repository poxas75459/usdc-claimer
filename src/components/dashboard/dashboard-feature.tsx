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
    "4y2BkKBPJfjQ2Ba72tMKBrW5Mhg7E6YLoD4EVZUrFm9qAZuuiMjqHnM1YvmJH9YJ25UDtuAWtEafhrThbBTid5pa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zGj5XFdfVsRDifHH6b3zHgtq8eeLbkqNviKisyMJQhg7TU6gVpPvnEgDKMGuvunJWXbt4uzy7fbYU5EPiLNRpNJ",
  "key1": "5qCgSxQVsT9KJXNRwUmk6GFxD1F6V5S8u2fTFkCN6CL77sHK3se5Rk3EXGmduWnhcV6t84kMamNjS8u1sr34mNzS",
  "key2": "4RQta2Q3HdksCrs1GPadoBtCpET5ykYGGuw2mZqYwqBU93wq4DDJpUbvYhauoBg8p6KExa8rFEpBEJPDXxhNx4aq",
  "key3": "2JHS2s13qq68Cd3uh66c8g9vErkgqxdPYgQGiBWBKSEQ6bqNUBZHdCMyvgtPzgBAgg1Ex21agCtGXzdaFKxrvBqs",
  "key4": "5vzk2L92DAkGL7Mc8MJ3moWg9SXAtAfU6k8JQNfj4XV2MB9PPJnAoo2KmfUzDr9TBfBjmPLHa4PCxvbtg3iKcNRS",
  "key5": "2mbm6AvuLZhuzwPSMV17FAVP7LkaZntCScrmjiCELycZFJVD6zMxtDre5tJ17wWFnPf7MFzXZV2tcpRCHS4Qqd1i",
  "key6": "2xWqVuoX2qLKFJQusUg4bo3eHuhWCDnGVFm2LiVHmLSe1KCJScqchSHLQAMpzGxrXBkZnyZXu8Vw4UZEp9e2WrNx",
  "key7": "4Vr56kCahhBU7kvr3vTAyoevyWTmL1k1rBrqFMG8Qy3pbyP9JkyeDW2Fyqd3DBnzeU1Dn2WES3KnoqWpsbE7hmj8",
  "key8": "4MzZk9sh4mgTJXgyZoew9UFU2ZBm8oJfnh512pApeQnUBNMuMXxUjjovvwjC8pm36ejRfxeJtVoKweqGri9D2nhA",
  "key9": "5bUBc6z17cveTPTjPxt4ajQ4Gv8DSqWgAH4GuAd7B9GFGJtqvwTySX7NLhtwzUuw5mz3eCsFhcRucBubN6tt34QS",
  "key10": "3mTtnBG244sjCT3Jw35tqvfwerQ1END3PZB1sRQ3ycdEzJ8E1kBGoVkMpMcFpvzStBm8ubFEjFqrmuuh82rpZWqQ",
  "key11": "5AXotUpV6uh7Tgy3dCV3DVbATVzm8zkBvh96SWvEjBS1xgrmbC5DP5zMxfJN5F2JUou4bAdoua3N2cLYXDgMiiKV",
  "key12": "5ehMkwCLcK4XuEDtx2f7mubX6xDNpJYe7XLqrrYa9i4DucEgzFoTNb3sHxA1L4KsA4p7RxCkwrjgdBsiYEv6Dm2Q",
  "key13": "4D6cFuCVpdyRgX6XwmxBoX8TjuDhCPBnVRpZ8uVjsMEoLKvnBfRQecooqLdF5oJAzZbm3TncHiceeYXg4nzBP8tb",
  "key14": "6XopQdDqTNBP1oMiRdCo52UHiedRjktmfjJoe2v6kFrRVkEqaJkKhyRDihApLZKioMNjGSHC9YoB63dq2xu5Yt2",
  "key15": "2bKwzCzetzqTEdCrzSmCoqmrRsLVZmV43fuu5EzaGnbQKQJvYCGVTDoRtJ8bFwExtd8C1bjYz35oDrwWq4eSzKTg",
  "key16": "4HzSgerntFpbw1BEWPsZExyasS2WVgDkZciVSVfxtufikWZtJo76P5BKNcBdtA8F9PptXxQ238fHn1u9CD7ecSce",
  "key17": "iowne5jys41ZVJDkLttghz4i1UhxYhcPJWpV7ExZCfcoVv8MUDodj8DSi5Pc5QKYB8LV4N8kEBzttCRfQYRkJwq",
  "key18": "26ku2szeKUFwoqJq8dTgJ63EcHHuDAfdTy6Rf3Gfacs6hCTcEPu9suSsd4bKchGWrrw8NENX8bPCUTVtqTndhXbo",
  "key19": "4sg6mwMeHoRaSaW2dLxz7oBFpQSXGzHuwMgYExkcWcoHPH1uxDEAUSytrXvRvtgSNgKdBWbCfKnpRBi9bcrYDdKp",
  "key20": "2JHvE2axcA4KceMhqRacnRdqpXqLQJf6EskJDNGGR6tiVY7t5VchK3RHWMUGuEwHaKhzgCh1LvjtjELiGJWCGRPx",
  "key21": "yQRZLWtb7rhQfELaAxFNuC4rkuaovArG3BV6NFFKNdZU9QEYyk4PwBn1MNoKU2gzHprfLUaoPUuCQfMtJFsDwnB",
  "key22": "5sPdeeZWzJdKHamMKic9UqwqZCjXMNFeogyKUmkP5Y8RaDDQCj6jAc6mNCRKFxu1TSLo9FCj5TMgVMWHjcuDuvQT",
  "key23": "41nk9fhLse2UinPym1bh6AFfia95xCxW2kpTV412n52GabHJdGYqraw2pKwhjtUFLHNm2dDTJrWqATfxkZyagoUB",
  "key24": "2DhvHDBraVTPxWjLtHSijhcJ7etc3HXSUetjiooAmpaVCYJJ7zgjQnpA1m9ywRiwuBWdeKn7X9VJ4DrdVbHXUXKJ"
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
