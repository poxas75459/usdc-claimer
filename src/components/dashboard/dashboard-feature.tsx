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
    "2GeFrKHXkuGMt3TSjEXdarMTUEZF7ihMNSheW7nVtSzwu4XPTBqX2nQVFcTYp87HgKTZbYAQmDSRaB8eAT6fpKpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P7kCC1RwjHkZmUo1s8oanA2tdfXpKyXoaMnN1MSkLnUHG8CiBhyEeeGG1MvNqxae7shLmLEu7U8HDNYrXB6tMqA",
  "key1": "5yEjGEuPZfTKgtuywbYickbTizCPKZrnmriXfdQKgR2UfS9d85BKZCciCe4p8WCuznRcGCV1bSirDLpvEqJdHUsy",
  "key2": "zfDZUmxQRaFHLMSSJh1w87VUqxdxj8C7x6wBm2tbPTsPmCEZyGoB4a1qrYUxa4QyVamvSJA3FFuXj7hE7U118Mg",
  "key3": "3yxGrPhbEQRpkXYx4cqfVmubDRhyCoZyS8fLUyB5FLanK73ArAXL8XF6qk1idG4njyNAoW7rrdNNkGkQfwGBfvyL",
  "key4": "2L4sNPGd3qmv8zsisJFWo1pPAFfJ1qk4shnurSgcb2ZoYYPJtfPwGEVBfLzXCfVZdzj51qxATKRYBF5sNGjWuiGs",
  "key5": "5iEf9w8UB7zhDYaw21LMAsqEy6YxjjRYj1VtDS1cGFfA89txxKmWvkHzvw6Ps2QUFun9SFVJ9GEL3gYMJ7gbb4BY",
  "key6": "32xJace1edU9KE6iTCCmCdkNwAKz9eMDJJL2DF52tLMobyZTz1DMg4Zi2fJ9bdXZQSZaCppJXzqoyjEFD4pAz97",
  "key7": "4rxvybqoiP8DwmABCoaeSt2TkKt7hvMf8DStYWU7ATeCPcLy3G1eXFSTw6QrshsFqwVoCnyiwpvMz2Y1WPBEHBx6",
  "key8": "3SyawKiPX8jJvocUhFL4KxzkKqAqx9r3bQgU9TRZW29tLAgkujXYznvHzmaxNc21U3PBJwPrtUA1x2QzSazycGhn",
  "key9": "4X2RqRXQQuwVT17N97inTqJ3m2Qubp9JkmDjCRzUxbNKCY61F2z3MfRcK6ZHbpMs3x3TB3MFCJWCcwC5N9WcrK7L",
  "key10": "4XmynUKEEn3d1VgxrtztB2xByx9fJxuQ7GCp8CuqdZtaRgHih5ehsmpjDUZT5qGSRpEqgPcH8uPLvsK4KyNA7rKj",
  "key11": "4z8tx9j6wWwKVS1ZXTjSQKTPtyFax9xXDjPaD8hPyqh9hLsigSd9YrayLj9QB8K6vrPZtA11y5ERZf4ATyFd2JAu",
  "key12": "4FPH6w1yH5PGmuaarrjgitkLaocXBrktdJeHK8oAWkrRY7DNP7k6KRmtCvSvZvDN6bNuqLezZhQKt9vw6qW4xBFS",
  "key13": "5zwYPMXwcnG5YB5sYtTHdPEt1iNhqUULavxBGR18gzx35AKK7i8mVgfknn8dMuuzkSyQ2cRMvscKbkncKhAh7usk",
  "key14": "48Lp8tykDZqrZGK5iETm2pEBr41sv9YVqVUuggRQkWDnzducZWwBz1mbAf4zdQDZGs1YDY5989uC8DhBUNNbLd3F",
  "key15": "5ThEnatt8RVWLv4JktoAgpxdhs5J1EmxmCd43WDVghJbPV9HwmJhLcCQ1jruXksUiVCtCyHvGXNzvhWGtGnzzVy",
  "key16": "3Hgp6W3xqCHjAqJkkmASY5Lnyh7EctSFGheVqpGr8YBvJuPnZ6K1aJfqrm34tMNfjUe9vfLHZsqAZXgm9FiRhLPo",
  "key17": "5PMzFKNtAU4UeNnn46yWeQWEwFHDnNogmhuk38po9ac3opU4zBs5tYeUDcd3j9FoSKkJeULVg4LbDTeedyMu9poP",
  "key18": "DknkaxHQZnkkcGa5mLTtivqhddQkHzj91aZLSKVjoHEKfp1pXNxPkxLNk3G6xS9HXXHZs7577n9nfxSRuESwq5o",
  "key19": "2JtopCggwt4TUE2bxoeAVUrKavK5ziTM3QEKTejSDbpTizeSy2MU2Wa6Xt7n4EXseMWZ2hbA6hNtDbKj8Hqdfz5Q",
  "key20": "5d7W27VKBjfizPAoEU97QD4CBUrL3LdSVsja2WXku4LPLe9tpef9BWjSqT9K8ar8agzdxyaaukXJnEbTjwhQv3S1",
  "key21": "4KJAWq8dBoJfAjdtLBps7qUe9R1kX8AWCqKrRzKJaAbxcTkHiveSg8P3eQ6NE79iAZAHAQkucGNHebaQewGSHqKm",
  "key22": "3H7yAuabazsDtBvCgrggDnAkq8W6g5ZYcLcH8i6frf6NjnCUnb86s7QcUg1QLUdSYoNSCJdz1fMan5A6jdzeYCMU",
  "key23": "3aJqxaH5ReUmRsWY5uujws5XgHgnccPSJ5wzp8cnsQcKACWga2n5S9nBVPmHVbTbrj9Ci45MzKecypQk352pGxii",
  "key24": "5Fu8eozxNUVcadFPPsAP6VrvxjX2AxPF7CeoQRisfR6xKZoVaAZVXG6hMku7VQk6UhZLHzpAUXLeXkQXqRC9xC3a",
  "key25": "437ouP2HoAictVEYiakq2voiYkyypiLoZyUZL5wwmq37M4QeFNLHG8rhHaZNzQ9GEkpDHiC2pqbUHH96a8dheRYX"
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
