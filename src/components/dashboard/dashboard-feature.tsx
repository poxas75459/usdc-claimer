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
    "3ZCEC3Gqd3vkScfwwwqPq1E2gBZeEmZDf5Ggb1ukn6kpJwEPRZrdRZ8qzwKriVY6rh7WABsvoiaLgcutnRhvEG3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PFaMHKnwHD7cnhhBaqAj4WrBVkMS1QZbhmDgpLaA2wuoa9YX1cxzTpVDyJFeYMca5nQySGvCEwYrxfXAaZrgDKK",
  "key1": "33Gv8V1tbdbJ8gfqaLH5U8Za9UtaaDybL4UaCd1WAA9dPKtEbSy6zP66iSHREJ7y2odkjizRZwvhm9X3tatHCbbD",
  "key2": "39ktvzJRPfS9b4asHGRAgngW7pERdYVXy1bSUbKY4AyPeUFeZtJ7i2sm5iCnr8Zk8rUP1TStTJ4e4ipjiRRy9aYY",
  "key3": "3z4bPy1wvf6xtrBE64SoDovmnripSqmxKd9NqkfTcpbsjLp8GwCXL8QpRBBpBhemKx1ZfNSNqq2QWR6UxsuDpiq8",
  "key4": "FepFb8gNotYpRzg7twkENTyGkECGDxqc6Laz5zdKunDS9emkWwdZRUpd6pnjXRDTSp3W5RXi52yYngTxJQK84bJ",
  "key5": "Tw6JeJXWWzwuHmxc8Sr5Qn29L5L14BN1ERKE5e86osnze5hTMoxH1Re58sUn4tuqrMWH5VkHAt7QJeYf9jDWcQR",
  "key6": "Fsw6sVEiBJUCWHjESXapkEV5G4V9fwjZVTXNYdGgujb9iptJT77vrRfwDC3SPUxMmB5m7xG3tYXvD9SfpRUBACG",
  "key7": "4pjqE2hPyfPvJ9bsRbDQbM1ZjY9gTSEFjgrNQRqKtHrVc9LKSoJm2u15bPWG25PQwPQLutPjVN4woqp59MHxLSCS",
  "key8": "PNLoijdEuxftTQVcsdVnB4nscCKUQHbJMRvGH2GRcggJqeuV7KHoFB6QpuYdbbEcYETKFAjQjASKAzfaZjWFVM3",
  "key9": "gTyFup9M53YZijKd1dh92FM6hxVrdyKpzNmGZNnRrxPvzNUgVfn7EW5EVb3AaWCqaSGzzqTNd7jpP1mmaZTVX5f",
  "key10": "59tx1GRd8BjbvyJTezrtdq5jL8VEoXURkwGFhXdv6gCHMGfMefWRCUpZ8XdtMjFf2vcaMsVLcmeyX82g2L7JtSGm",
  "key11": "5PTBn8bKHF9RXVbM7r2AD2SmsJKKNcZv7twgCDg2nBhvuxRxgm3qHEEqm2V8urUz32AeAphkkRYxSxjSkVujs1fV",
  "key12": "3FgjH12wmSnztTAddegsP7YjtN5KoArKgLNA2iKk5eLZ2ywxeJmd6k4HetQyBCr42XMSx4GGbGL4D3CTYWSkXUa7",
  "key13": "39xRuKNSPv1fndJpkBem6Gt8e2QFotfSZPC8HZT1nMUYD7qaR7b8surhbWqVx2UYhbYAAxfeukSwtDMRCedYav9b",
  "key14": "gG7wgai9RGaFZPutL8FoQqowMs2xPMQVbRfkWQieEvas3SyTdVQRTU4jcp28tuRB12ztp5dWA3Yg4tNesBthHpW",
  "key15": "4N64EyGDPw4SBAkEaV8vSu1by3ZHCBQJ34oPU39F6S7rMndXWXsngHFf4Fg5hM8Gu34DbHJL3B2rZLX1PLK1zePD",
  "key16": "uF9ssEM4Np3cJdJw3TBsBVXaSkFvQ7URP7m93J4oLUrwrpPydWdddAjLsS4NrvFUTUn1E6HL9r2M9FxhtsKLz7f",
  "key17": "oZqLoou3mVFGYV2L1T4TsD85869BEJX47iyLSe1T9GGbkx1zbVcGBpx9jLxodvTZA2yc42B3su8pXL5JTBYUTW6",
  "key18": "5iLcXsHyNQCBBwoUUXGe2CPDPDAkUCFDHhxCToQwLwwsMt466FtmwLfcUMp3Fa6Bm4C5JFPnDzq1ToSYWw3fN3m7",
  "key19": "4o1J3USccxdx2aRwo2o2zhMeP4Tookqao2LPSqPQJrFS4YhkGrgNrNToD39CJjjdLTJPYMssMzXSH9KeNyk2PaHx",
  "key20": "4JgEtsDx8tQYjDAP9Ssgi7s6ejRVVUmAfRsbrgnZskRFc6s6M4KNr9QSZRz5z5E2sx5NtYPqcYABCmDu7YarbYjC",
  "key21": "5joxsYENLY5BF9CUiCAU2XUmD7LuSmbf1xAwi3QQmvnSWr8Er5BzjpNjt2b53f7QzPw67131kxnMopa9cgoPcDWQ",
  "key22": "2Lj74t1vg2KkcQ6kaETPqabNmgoyLidGtDN7GuQP8apYBkkmwQcVU6KzfVHx3U6vXNd9mBT1xSCuTmfp8eEvG2Go",
  "key23": "61nBbajKSncEj3E7B8udaF6nSUdqfkmsMWRsh8WqsYTJAWFLJYLaPpwVn6LKXJwVzWoXvFHwXubkx5CLJEpnjFMS",
  "key24": "5SmVJXQiPtYVstPqRYj8XE9tj7mzApcfcibRNLnPmMbn35Xo31YGVHwjQ3kpxWi7KmHLdufUP1MdkZA3Z2VJdSuW",
  "key25": "rZGF4Xa1BZse7kJZMeD8aELdh4a2LT2Gyy3PLQz6YadgEyg21A65KjhgRHCkMXgFVG54Av9S2EtrdKrXcwFAUf7",
  "key26": "3b1SttyydssGnMyMA7txV7ZGbiiA9fmhLhZK9M7HTK7BKPayTDEzcHof5NYfkUt6pztKAsFzSTEDqymsSRAMtbPi",
  "key27": "4kmdizqcYSAuTbrLGsARiLJQ5mDEqAcHs4q9s6icJ3zpa8Sy8mFPfgkGVRWVghB13L3XVCEW1ufG4BgSZQ8BWmWA"
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
