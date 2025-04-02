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
    "sxycp7B3RqJiZDbNgPQouqm1mSb9Sse5B9i2wxvq7MugKqaC5ANkogKRLW9MyuRHRgcuhvfrftnJJv8E2S244Fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QAtZPf49pFDMmfprdr1ig8iRbuMZbp21nErfsrUXyfcaDqHuHhBv8oxQw6Y4vCECxUDRNagduHZApYXd5pDdsDe",
  "key1": "2XtZJ8YXhobKmbE1V2Qh7RmNbptNmP3DnQEjQo1xzM4CCj2oYN5QfPns4GTeuh1GRZc6GJuRH1fnbiv3Kt24j2vz",
  "key2": "3EjjkLUrtHGWc4UTBDjf5c58qpuC8GGMXQWCm86mnoYnW6d45MWA4jyn3woRScE7m9o6KR2H9f3BFjdHFim2vZrY",
  "key3": "5GM5KVtCdVudk1zNZ89BxT7AjLsRn9wjzwV6JxZGyxtiJt6Wfju18ZYqZdBq9wRbREH4UZxLL766NWv4mXjnBkcm",
  "key4": "5s44TieAmmpssF3aMKdwUaSminvgKHASzYtwWd4RExF5BYUWsoCZUhbtf4EHMYYHeSBFHWQYgXwySQTmMx5gmF4o",
  "key5": "4nebtVY8woeuuaLunoPTjHPKtuFyF5ZF7A3W3UmTQfz6ppvZS5sPUFhxR7q3nLf4PmZQkMD9G7rwZwWt4o9rUv7U",
  "key6": "4aEfA8gaSxwUenmFLGZAWQ1Z16vNvPJBh8WwtUJWRLkgWcCfvLZ2bq99mZAQdEBeZDkV7FgMgoVtW3EAKCB1dJSz",
  "key7": "4YFJsMvP1PWUk83wyjPKjAJYDR1ihJyn3j9Sq18CUVr2wA4LfoLiRBBa3ueCPh9Ts8WFahDZB11zmZzgMTs2yoMU",
  "key8": "61k5Eo5VqG52PVbeV3xxjXLrTyjcZHRAGatZ6pB9KQCipRK3hvJi7EADqbPXdu6UnABfmstbgCgMUkwsDn6TZ8jZ",
  "key9": "5J1ptE5rmZWwmK939FkFNwsjPdfupSftKQgJbRb5iaxJEToPRhv1gKEwFMuvdbNfA7P6VfDpyFK3FAgBJbUJqJnK",
  "key10": "3CPVPXmEf8D4jbTke1sCBWqrHCsN9wwgNLEN54SkKczBDTBSRjRynXUvfbtR8xytyqruZAvnGmJNEDexbrfPqqu6",
  "key11": "5nWkZayUUXWbvTyN4HdDxna87KiBaEWHcM5fJT4WvB6p1R1RHDTcqMqtsZTHKCfZzsGBHKZpZxEKDLqiB3tAsGoy",
  "key12": "h3zbpXSTKDT8Fy2Cs26fu5fxgDkfuR6An21H4cMZMJx2dsC7Wr7KHm6XoBvznMNub8ya7vJ2JEx9v29Hvj9ZuLn",
  "key13": "m5BZuBsBCiefViz3fmUJDYivxXW5nBWRpseUiMiR3Cz71kfP4QhgFvhEZLK6Qmt4WwS299MhnPzadQVoZb5eckH",
  "key14": "FrDXXgKrDHDLdz7DxKoEejGN63HsJ1MPCMzUAwPqFxyiBn8VfokcnUuAntyY8mUmJq1wSyRtcEkHbATjANgAm6G",
  "key15": "4tZHN9KLT5Kr3dSa1WtrzD9dGFPmY7WDYVMZbRNNTpLXymAWgWpcnbYwcncn4g1AVTHYakhZypmuYRzaoBLqQo97",
  "key16": "5nKdHjqza1WA81NadWWPc2kMJckZfdo4DSFt477Zieft67467zfY4rBBMqASK1RAAx2bjjUhvWzZjSegaz93dJnW",
  "key17": "2daszuqxysAXdTPoyjVot5xEDtccbYe5FPnCS6MRZne6TuAguxGKF9NRUm56nmSav63bZ4dtNqXPrF7Bb4XN1c7v",
  "key18": "4nPZ6LWE75uuK4Nk4o4hxNvPA8KUbkhjtwsVnKrRkJDR2mp8UxBGobKCDZwatW7LhstLy13sGVgSviAuduedxXff",
  "key19": "67cePucMM72Fa47Dkz7p2pAXqqXndSXtdkz2eqM3afUu9DVxcEC94r6t3kQmrQtjA57Lw17W96CumFFJJ5qKZUxh",
  "key20": "2jofhRffQypy58DxLrwUkXE4S2Ttm75kvnD8fmaVF8GZ9JXLZiPcfUHhFBLtJvvPV8WY97Ge3Rj3RxQtZap3cXqH",
  "key21": "3dQstY7pBcRTtRxjqVCweXQXBAYvYrPW22ekFfyEscMgnBmsYzJ671yu2bfhFtNG8ZBARMNRsLsM2mqXPQP2JU6H",
  "key22": "22Wgjw755qBsLJXmQUgWSDHBmUttzuGSkdriv88HZMwTeihbteZDcBf5XfwUzQqmsXcom12Maap1U5dx3NMK78RK",
  "key23": "4PCH4N5C8P8hNjo2HzykyLJUroFk8FVp6LW8p5YiTofq2ZrcVVuiLt6ALhq4CkLRcv7FqX4MG9dPLWBMd3XrVtYv",
  "key24": "5tTu1SxoTYpdcn4RtbhejgXZ4dWGXHSzi1fp5jG9d97gnCozyQxhLpGtpHFvkwniGipUdDpCbipEhW7RdoUDATou",
  "key25": "222LGqho4pVixJvdkpacWSeewQmetAkHMEbMvqd2RkCr6y6ptYLFqyA48JWbeYdqbudXJfrKUxYT4FjdYaNxtxsG",
  "key26": "vEiin2zTSHaFrh7sSXuwAKT6su2QPqyVHemBYYdm9z617ur4MfZHjRujdXNDR7hTawYZjaRZMxfDGdGkDtqBQbB"
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
