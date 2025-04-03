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
    "2SQhjT1j6SneEdF3d3rmpxihdxFHJUTT3b6483tuTin7RUC73eAMofM9wdLEpuB94rXPXFVGU62GEMomxiuVKq45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pCRaZ2FcU61b6zLdCMLUH6wk3FmG1msAwjRA2oUwcrt1dryMx9xjWRimBbw71MThY5NXkLd3Bk2D3ZLvG2ehRj3",
  "key1": "2Vxjt73EunoBh9QnsmzXxGcJ3SLor29EKixk4zAfHibDmjtXSxaKRiTG8GK1gRLmDBaSVWDwAiYtwg91bXhZSrkm",
  "key2": "2DXeuEEedKJiBPAQtDAnH2E5sE86qUDRmkp679rpBpZB2NMvX6Vbjco4wwxvZChCjxyQvnjU2WrAH9mtRfMfnnKZ",
  "key3": "fRTALQdw4zLwpWUnVCRvXDDSpwySbwjyBCbUCWJ79GLRufDvcJDCnztrMMxYxrHm7X4BtzymqxF3REH93WjdQFg",
  "key4": "5onkmkVRuL9UCQw9yicu3gVDSA3MpUsmDqoyKEjJP3W2fEVfZ2HLokXU9Qj4LopAYbiticg9P81x6jejsx3Eyaw7",
  "key5": "4mvLsSrbMsjX8kP5SWSJ9FMjX1TS7Whx7KYYkxLc58AsE9XTUQxebbiuA89LgCnygkMeDyfGZNQfobKje4qEDNtz",
  "key6": "5vD551sr2ehirNfAAcTTJKdBk94pQXSzWwKRTmmtDNggkBCM675nCqSEfzAcWE8LctD6tpzcDSvQuzGYfjd2y6bt",
  "key7": "4yFPJg8y1egHC9G2cSeziUPPR3LC5raWZTspr1QM8ewUtfKVtzc3yv6nbz8bo878hETqbHuNATFTFMwc3ZEC45c9",
  "key8": "cbU8XQoYTuiL62MZE7VQCHboSrh8dLgFbsDra4nwDfcwXJss3rSLK9fygx7USs1RwEF9XyxeSHZvsb436swChNe",
  "key9": "3m5eZhUhzKvAC5QRboB5HoY1NQpUvEkeZA9bPoWvfX44wBqwik5ri3vWnuTjGZtPuMhMPGNyoZ3bzoa2VEh2jjTL",
  "key10": "3xSmoAYGY7aGvBNzU1Q78ZcvNdEe9AYLWwBkmWHhx4YaCuZ5cTZhg8n3PKgnJqPR3jjt9SA3Ln129JqqtTSgPiqU",
  "key11": "29XbhjLwRUKMPpKtM8uJSdRnajv5QGn4cg3uVBxenBwmYWaJBXRjiB6Q6exCoCM6CSs1PLUAVXwdwPCMat5MkVGN",
  "key12": "2DYXMiek7xc4xmmDuyU3aXN56F4NVwwKq3eB2TDnZ9it6wGUypB4uDkckbvJiVMDVaAayg5xzZNLGScNj1sNn5zv",
  "key13": "614dxuEZcE2ueyLq54ak7kkwPWz8riBLkfe3p1ENNwRrjzQbHXw1nSqZzkJfbBVKCN2yiDmYnPBxfCKFk6hBDDYi",
  "key14": "4B41w4CbtaLWjVku9183zyihk6Mk1okZu4ZZ1KKc29KSzRx2URSmovBX2Nq8h3h2wTRPRVmyLbbJteizc7uCEwR1",
  "key15": "5TWQ3CJ82gYt6i7KUTGXKKMCQkptcz7sjc5ZKMA5B9czt8As3Jkwx69e1tLb9PRGxjdnWqcACGhTFb4bbuAkTJNC",
  "key16": "3BW9NfUrz7MCnu6a1zLHda5Y1ku3VLiV2veggY6XpnR9ddSpWYCeErTGvGiYJXDLnLcVVqzDZezi1GzzoFsX4HVm",
  "key17": "2Ak6PCgqUfoadUnp6zdN5yP8ETm8CPmYHJm5K5RyShHfBwyy56RyGgHrUnuVJMEP8LFrYcRaRuuBmHJbkmBYyoXX",
  "key18": "2VMad8Z8tDRWNXwSewHdymmSSCC2yUQrSEhNKWWjJQwyUxu2wRguk3Dfm46GzsFzAQQp5yNFtFNyNvtYqDnTQupG",
  "key19": "5LcRfXG1GkU4R6xTbA71SQgKg9AgTbTFfdhC9dYcCWR8G7EMDf8K66RGSBBvZTxkkmPG6Hm38zzV8t9D22UJdQDq",
  "key20": "5BpoD5NEyEm2NfdVvBrQ8XJrb7E1aMsS5y2vofzxeNTgqXRRNTxYws1KVoSoNFyk8F8S2DEdY1VcDoc5BbYWwQDE",
  "key21": "5WdpCjGyr8DnJaiWvyk8rJ5vM3QaBDk49TCEp95mGEvfjKGCBjYLd8JqGKpKYJuyUnrpCAqHdZfX3VFiq84xZTbf",
  "key22": "5psidpbvdtiynHLSdkKoATjK5bvojeNGQEXMcDTm7bCAtPwqn8GE2DgrGP3Dt1tBQFQcz18oLznbKoahnZbJaUkh",
  "key23": "26jZt1jsKMLFtNrDnbx3gaLzjwzbVE3YjCGHZjUp1DdL6z8SyF9gVzuWf6BoiBptqwGEowG2pThG7ft92CDnFeJQ",
  "key24": "ezpELNoDt9xnCJHTG7uUntDddUcPayABJbAkGZpkkPvqHArketJUD8t1r7yQNLGfpNHhZZbmh3AZ8XehoHvPmtN"
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
