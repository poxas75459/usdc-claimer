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
    "5j4vBXtq44a1EKj1aFdo7CWZb2WAuVxE4UwgTGR5x8rDF4k9WKoWAxFRXtukUCgYhEPrpEiwJrQq3wBiUa5nSQN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "431Q4r7tQEW93UfbcULM5wuufb1aYqCXM4TW7M5e52bef12mw2FnVZtbEQ8Uspe5Bp4Nn5Ue7q12MPvrZu9z1Rzw",
  "key1": "25HLR8xZRJM3aTbhQqEqgcapjMtup4RgFQVYUNRHFFz3zfsY1eWQDWqo7yF7jshKncSRDtLo71CavexMMW4PmWvu",
  "key2": "4WqZjyti1XQymabJfao7Saf9akzwtSSw23qBUJZdv2eH6nZk2Gw8YHw5woruG154fdpSEWtoGdJbUi5m4T9VWjN6",
  "key3": "63E2mD2e4CcmWNuGt91CjoNhGQ3yksnwNeowwTj2EVeBTVuj3qUQ1EZZkPC1C2XfdCgCQ9Q8yUFeMeyqjafTmK7f",
  "key4": "2nA5sX2hxoVXaXunSFgZbeUBrFb7QF143zU9nrzKpNPUeFZ7WBkzC58jFuRSjtJyL736Y7DtiUQe13QqH7panmgq",
  "key5": "3t6Rfpk5qxfcRcwrvsxqeg14JrmBjdSrQ4MrGCjt7jVFj1BGiMRBAD44jGGEWrbUgvKCxfUgaUFQAtnzH22yTzZU",
  "key6": "5uPHfaHzWbe9UMkZPK79YdtVWfez5bcoGPpLAFbrL9j9CzA4MdxYSRM3VK59nEqEo6eA67AioSJ9t5Z14oTjxy2f",
  "key7": "4v842Dxru2fWoLpHLo6XDSNrCqDGZQ9aVyCQuaqqdDeFbRZqXrvPjmGa79CTMydmzghhE6QCRKMmnpMSjUoMSk9K",
  "key8": "Q67KvUTBymV6a9ReJ47niayPAKdDjD2VBtnZQYQFb9sZ76z8kKfgBtKY66zp7qS1RcixFWXw9RZkeLgc9kb8Eux",
  "key9": "psaKktBi11NUc6Jdjxdjo67dWmJSuoByTdFadnAS6Sap8GZ3mHCbwZX6EfMbc2szwud7Vgx5dCTkHNjQYUANEa6",
  "key10": "FhwXWMNitqzFc91AdKowdzEWB1782AwA3eQdgXDXNq5jYrozHEe1xqGJDgDtUL5Wf3YzMe6NiMuT65HU533ED6F",
  "key11": "4RhuVh7b5ZuRSaQQ5J2Mm7JJUz6WaJEipNtdv3Bau5rUU8BpmEfUAB4DkL4aDMjXTBd6MF39tUpoFwqonJ5x9xWd",
  "key12": "3Yx2qx7KPEHTH7MWxtwjoGN1aququ1Wy6YCcmWSghyB8euSgXoybp9Eu4bFUfn3toMHLhmTEST3HgHtaVNVt1JP1",
  "key13": "A4KPP9GeeyMDitcZC8M5Pegeot4eUkB9itMfrMqnjnUCN1nraQdhfoVnd4iFjVvqzVP2y6UccyoS2q3ExNYNchR",
  "key14": "4RdPVQJayVdZ2L2GP1Rmqf9pxwG1rPzeTHkDAdfbZcxkKdFAYr3Lq35kce994bdrUHJXeTkt1ghGYqBgQarQzw9",
  "key15": "2qd1bXfBENF6Wcg58wsp4pfN4VN8mwwazHBoFENAKKsK3uY4DMu1hanNDPMSWyrWC8ZTtVhqPANGzgQAQBwrY7ot",
  "key16": "5US5FFdwRSUaRkyaE5uHsWtMJ6AsASH7YTMpvxTJSsgW4zo8HRL6aP5dP1roWX9jjS778CLCfQDoR8hSRnEL2Z9d",
  "key17": "fRcj66MCjTpcKqdF7H9NtJgUbqZcDH1V2hrfq7q8Xr4PKLpQZn3CWFnhz98cepGK9ndLccFvLwKhdZCuPEcKbZ2",
  "key18": "3DLz7d2cmQePEiP4HFq1vamhH5d88w8cFfVn79t1QZhk2DonRxJ3T47a7gwh2tH6PKU8aNxi3x7NmtKQtynEp91b",
  "key19": "56mdHekhTCoo5aGbMK1K1qzJ1zuG1L481Dcmn673BCqG6Cs59mU8v3j6mUP97G32ceBMiKqbgSgeiSPH9tRnFyi5",
  "key20": "55C6c57VXHrmWskXUib4yqjWmpEN14tX5SfxwuNpGDWfU58n9QWNkWaxwypcfq3KnG6y9jDrAKjHESPf1SqrZisk",
  "key21": "5YnUa4jyWPqdzA75RM1eAMhYGvzGqkuaHr5U5q4zGq3i5xNCTjKnpRiAZ48WV1ThecrC6pfoZNwQhaXf4LGsuASQ",
  "key22": "55kTu5v8fEmYrNf8bZgKAMMy6BJunCyQpoCredHWivJYxQSKSFM879SAcDHMSEJ9c9d1QHNxGk51pjfzE1fSPurG",
  "key23": "RjBEhYtYQeP3cj4RFN1uKozU4sxJD7STkZzQSwPBLXqqJMD2qqrgtKwT5bhQPZ1xdCHd6Vui5tt345L2UEzb3R6",
  "key24": "3Lgr9JSQR9g2E5pJgpgeLZ9aH3MV29YXenMpdApsxMFCgA3GSV4x5Af2g31PBxv3thN4KALViyzL3ryjVDRmfLdd",
  "key25": "2Aixuf7n4J7SeCjuVtN1HeavqyjrbMoKjr8eg9XoxN3tnqsf6tVFmMNinf8yFfb2BKDB1rEfH1rNMg48F5ux5sxb",
  "key26": "2Ftxisfx779aCQY9adAMTGrx9zpdU8Ltht5VBqyVSe9zhARxNvPwpH4bagZxxnLz9B9ikGgD73vVm5hFoHhCqQn6",
  "key27": "bmNx3L3QtvcCh1zMNrM8vW5dMb517rwHjiq4zpVAuDmxRBcKkTiTtibNXh6r5FpxmW6GFTai7wr1gKb8TsNcC1X",
  "key28": "3uoG8VjBaGd5eNiMPJCNZK2nW4LQ43vjTWoDsYytWpd4MgEesRx5faZLeMqLoXFTpV1YVqdmy4r9NwD9mL6bvWRi",
  "key29": "5136pNHSzzvEsaczdTMyMcSv4ps1EohrxtLan1fNobBMAZub5tmRPJQsM6ecM357YEjuddfPVp3u1S4Xj1Db1ksL"
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
