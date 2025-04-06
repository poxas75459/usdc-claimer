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
    "3TC5P6unG8LHW5od39ijuwdnUGuxFkviiSFwd2ptiybFFkTLXtiHojxPJRD5tCwXVyoLtiDmBwxNE5hY5aoWooTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DEfCBu311dXkxojXKuJxefKNFrvJBwmRfRy6sHiEq69b17uMppQdHoZSq9j4bQKMfWy4gMkN4nxxWHAPFbgovtB",
  "key1": "4SdGqaNqEKeNUvGh9rAuMt53vzCEAo7C7THmW4k42L8QqKLnSMK9Ptt4tiff1Eg2UiikkY8V6pAQ5c22mzL5KK92",
  "key2": "pv1HxPn78E1DmN92zjNYBKeuJ9fQYhc9QtMPGyoMwRakUkdSnNRkBfeM8wUouEmdyZBQ9x4coh9KcBt6rUsrpDf",
  "key3": "3jAYTi5Khtu3ygE9YbfaDL5YUXKeRSSgpYUSB2Ux6SwsXpTbboCED5PjDH3MoRaRWz2EfirsZ1owwqtUkWsYWFw8",
  "key4": "dAsFxsxCarXgW6SAAsesd2APvndMdkghvrQo3R2XWc4ixm9JwtDDtACid9MhhUJhenR4C7B68DsuiwSnvR7gSf3",
  "key5": "5Cb1Av8jivuQV4n22Nuu2xH4MHU1tHFMuRZejaHG4S2oAFHEKSUSQY4MTX6hX5gfvMTenDSmP9Ltw4PaCxM3BHLK",
  "key6": "3sLQuWod1ookugB3x7EaeWdmMC9AKnRGeTfFjd43oVTDKrWwiWhmwXjECcMd2PvPGiYPHkcYDBPsK6trB1Mo9Cqv",
  "key7": "gjWFmNAeuGg1t9Lbn9SqQiZ4nL2SRjLEXNgdV1wtydyic6DQF1FhH9t63YpdY9QN2T1c4m77GCU8dJndG97V3wf",
  "key8": "5YWqrmX2C2tM2KPSS2Xhi5ksPLXFs7gASvSSFq3xjhmL6MihQc8H8hQ2mjwRiHVGC7Fpg3QjU1f48dbVa8NeZ6T3",
  "key9": "4ED4ykZv6ZnUAKBphC6AKs5DGxnYCBYVsXSqvK7FSdqxB1YdkTEh8Z5naZA6636PMiAWw9jPnsiXP5RbaMCEnfRL",
  "key10": "3ZK7nw9X12ThJT68RXUzGAvTcQLdDrbU9zAGqjnBbdytitriwJaYmz7eFgyBGHupC26ssLEdicumTEzgpjVUq3gS",
  "key11": "2WUrbqCcSJBDPmUwCiVynKucSqbbNApLhuQP5mRcvMaLk13ZGKjLHeTWWKcerEDVm6ETrcaHML3r2UAeTYSmnJPN",
  "key12": "3jVcniZviyyLrBczPt1QuNknFhVofMzUS3pES9tiA8ZcwGPTWt9HtLjkN9hRQRCN19X64Y714qBYwjWRJVuvPsyD",
  "key13": "4qyNP9r9ETYZB2DfRTGDZQx79jHb51BGVwtqcjDy1SHuUfxupELUHqwdxgvU7swspyL3zVRwWWV3Y7VeA8YkNiAV",
  "key14": "3WDhXgimyJvmNK1E8iQkNWNtvXyAhuaYnUYkecUfm4WuBrnKN9zFyzHzKRNYePVT73zU7B3zYHbBZ4414XE44P1w",
  "key15": "2aKQzF3FCecXbnT8Lj3H6CHfqKa7hBeysrgeDu5HvAT6b7HN9ogXG657b4pzQRXvkkeHfXzEhQbkwFCH3UwVfuRG",
  "key16": "54xcJCbkMVtkgSfaEpreoj8Q1sM6Fxdg3qVcrMoPAsaq6UrV8zHrWdmenFPKvWUW1B9yWgc12rutR6WNv5V4VMHh",
  "key17": "2XWknLosWEV2w5EZi3MKECYTYXeZKSzggvc4S2Boip6MmM986cLUSWdHZkcjFFGAAXfDrJjeTtNDzgGRJXR3dXnA",
  "key18": "aUWjzqS1qL4jR8hm3j3catRUDfUeguDvMQRvau3SqoW5vPtvbt6oXRLNzFt57EUs9wuZupKjaURjkD74ii7kSB8",
  "key19": "2TGvCe4gq7PzK66KRkiNsJx5MQn1zsoounqw67xFHFfEHq1KzpCSsWFgeoV74q2SCwpQ4oF5Nv6KWhLuLLLsuUZ7",
  "key20": "2yFAQRNk86VtSGtkxocpjY1CZHX3hMc9XiSaHsEo3GixVPgNN5x343ebW5f26VnizQvY3mwDknhGVkj1Hd7fpPTy",
  "key21": "3ZN67cLGhk2HzNosGicKB3YEsjGxxcbC5fUBG2CB1Up7B3KyeJgTzP82ifL6TMJ7ej1mG8t2XuDifeV6t7NCQ2i9",
  "key22": "29mwaq7zBufobeYRqSSeweunKhnor76BgC1SzF2CWwjXsAphPrAoE2D6HmbNDqaZhHasHBH7bPBt247gzjqf5yYo",
  "key23": "2CYcx21BjEeRBrraZNP9won1NkjqCc6P2opZmcvwaSbzbrwgCzGLbTsbrYma1rhbNXFuP8pani1ovegHw6Sg9tKb",
  "key24": "3YrE9YxZAW34pCgoKofkkU4CeP6kWexG6DhKphcsmefdtLQEYm8Zn8NMDgQQ5N4Rmdiz3knL3nFEvGM9o3Bs1KHt",
  "key25": "3fr2pUBLvPEKjbQkuG8GRAeeWWTnTozL1d9TvSrehQyJwzarNyZN7wM8QkCY6A1Ncab2HcpKhFEHPL8es4FDScoC",
  "key26": "21zSf5kSczS2qZ5xvqwNbwgjukrv5UxJMHzbRgk8GCFodoMZKqyttag6REPEjKpVmLDKfawrE5fRnG8uooWEL5Hn",
  "key27": "5dYLrWzd1Nr15Hb5bBx5fQ3TdCtAK32VkdDwxYxgneF2k57HY2GffFMWnVGexDXs5uhgZcQELF4Ge28zU3BKr5wR",
  "key28": "3qNdA37qYYxn9NXeVQLDWfypG9cpGCm8GVMKU6774WTY2aRwVZkoZW5kBEgTiZKuZuwsMvnE3pghULMfwQJsLUoU",
  "key29": "5L3JcLYGLECjzegt2Nc61idHMTn3Utgv1NmdKL8TJhRnsDXwrTaL4edfqJVF2a6vtc3jJujLy9ZQCdL2fd8QY7N1",
  "key30": "5vj5R69gqQXVJFazAeqkToKcXvWF3aKHKeGZZaGb7qhC7afHcsDTbja9mJLuyiazEH8HkizCeweufGaKx8cbvptn",
  "key31": "4eWAyPBa3bFMJZUHneXMYUqWFYVzae7g7U8P2f9EnptvmkRuTZQJECEbL3Zu382Bszho3SHGx3CdwakC1SkZ9xFh",
  "key32": "4ZxwuMS7rHNAc2qwWFoRrVWuTVrdTJoVHydErkER8MbHbCPzd66t8VDdy2o53c7xLdZLyCLY8ky8facwmya3uiW3",
  "key33": "3nWwpvQrmYreRadeGkaodLZd4DUdTHehTGGqJ73voCkH9Z6mFXxw3dYES1X4KfH9rKDBoAcbgooEMePM192jCiXq"
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
