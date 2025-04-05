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
    "34px7qRgQN29RtoeUacegaSJ99sN4onhSZgMvaXLB2eyy8RJTeKzjycQoy29wtimipZQTyMLe1QFnvdArcDs7AeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WTwGmuTB6Rhkitz4qbwMSgiFKK9tE3r9G9gojkiaSGEFZBHNfrcU3m2Uwd6dbJVf6tGA2x41sjNzmcRBVWxDqMa",
  "key1": "5aKXSWtg1txWRvVLTxQ5gjBagoFZJE3crKjosGRg6cetRiSyDpZHCMsouAUUfvXght2rVsiThg5vwSPepBpn7249",
  "key2": "4AHY5Mkis4H7aeNAvprYHTQANhMGTi5fn8pXk1aYiJcG7QProoCCAvuXfgEg9RfH4cxX55AuPamLFVj7p1VeuADC",
  "key3": "5kgVmyDGuUpRUm3cTCbXhSsSbhwjntTqZ5WojvTm7XGkakBUaWZL5jZSReK5VqKc4tABQDUfAmAJHkwsMSCs15ze",
  "key4": "pCZk2SfGNP5Q7tp7UuYrMNtZBBBUcfJGe6UWRDcT2Hor7JZSnBqvkmM2dY5kwfhWnu8H79gQ3hgSnnbKaRnTwDo",
  "key5": "3KUNghHEcdpdMZEbheu8E88nJwVsGXYEXhjn2ecCY11um6H6eLnJCL7juXg6LHdtPkAGjjrfzWzycRJcHBPcVe7U",
  "key6": "4btXQ4EyuLmdRkYh3dyghTayVjctTK7SDExSoEx2YqR5qwQCi79cPj833uSP4oXaTdECUKveF8jWE1hxYimwwYks",
  "key7": "2UBxG3S8EXvhCurGJmuAeY3Wckx4f7cZ2jTDpjQspKAZ46k9gX5j9ZgmsgG54FqaBaVr2m8Tq4MnckLuuqgAv6zz",
  "key8": "3vp1DPn2AieXcVftpkU3ZcsuoUXHCTLHpv29WtYE9n4AvUrrCK6ojUcH7pL97rdy1JpcMvvhLtXdQTR1ZvLFSXXk",
  "key9": "5tUBZHyybfy4Tz8cnEb5btRTVwaPA2gxK7XQ9S21pNLmXHyFqMU877QaSrCWMjy9YbTZWaNDAyfbiKgWGLR5G3J",
  "key10": "5bhRR8ngEfG12eARnmJFDKtcU9Hms5VFmrav7qBd2CsHwwHsmqDVquWbhN7XuuvMZZzGV9JXC3eoj16hCzgGNZ1U",
  "key11": "3dPKhxAVMpg5oTX8BzpLL6xDLaRfQeXdaApUPr7jdTkbMWmnvpgXvWvWukmTgwYpeNEKcr17rRstGWu5FiLaXJMH",
  "key12": "2hTwy1s3CJ7qZS5QFGW1PMAgMMGJCiJ7yVfvcUT5VspQZ9rBrBvxyLLA4cDdE5rFEPuYBRQ84XP5k6rKE2wTV7Si",
  "key13": "5eJn2gFy7rf9P4kG2hob1MhJB4oUnnzH7BxTUsrnQfACwyHfGQDVXu574REhcFEsHugD64jTE8KTMhBqNRC4MZLh",
  "key14": "5FCZpx8EwkwLXpqjAh98WoLyweuWJo9fs3hCciXtgMczKcRyEjynjDQxZzbFf9o1A2Za3nTRQ2ZUjuPJwndN7Xor",
  "key15": "4JnnaBfEVs2mBurbqsjNEp4d4aum7BLcL2vj3xdDPbEdxkhgUnTF916tpfQWrc7eQQAqG5mNPQiAqRn4La2uGKbA",
  "key16": "4rDadSVp9QDriaEYbp3ETDCh2Gsbjx1hfQkVY2hDLWNUuoC4RCJQGYXTqENRXGkisd6biA76nQquX4ofESsdMx61",
  "key17": "3gFjGDBRrQs3VsqcHuGR9Z1r42q6uLB7w4kMRGE1f9mvzDq1PCjFwgU2xF9brS5CFxGC8q4DAgEq4dFAgnFzDyJJ",
  "key18": "4oU4AfJXBgMgJpkeKXg1Emgz8GfzmKsd8utpXHWE6oktZSK1d7MEt2yk8Xe1pSWLb7UcCtkaHLXpu8NGYAREUgaN",
  "key19": "3uzjMrjFmfT1fotxCqZfmQ6d2VmTTrPBin9QuM4WzmYfCHsorFMmLyKj5ea5SrKsW5AvpuwZxYVKkAVpemaQAofz",
  "key20": "53eoTZBXV6H4tDMQ2ECvzzDhyBc9ymya5YxjZ4xPt94qDjftCJDyQJTwKJXrAuWjvdaVTPFgxX3YFAiqsFDV3ztD",
  "key21": "64gEGkCpdRzcfn6jPCdHkwRXGPGbgLruKt5bYnjLkWqjuHoAhTW8nvHRY2KH5vFzMSmTUs8YSBhzmAkXmUc92Ci9",
  "key22": "4DrLE81zvjR9Zt9uEDrGtunySRtNmtAiSYgyRd5eyuCMQVmWqhKisBKSkHsARsf3ZUCuMWvfAWYq1JQ4iCFmAjU3",
  "key23": "42mdud3waYNvJTbyAoCh7YNBuAbhGze4Vjairmfa9yodWRJuyf88CXPxZDVgwWbdAaJ51ktUGD2pdyEiNGe7nLvZ",
  "key24": "3bRfByTzm6zcpGZ6wqn43WYZoWUCpBdSBv8m4aSgBtwgX3zfWWXcHUhNkt7TqxysqZtV8kcFCWQp1mL9fgupAJe8",
  "key25": "4VjhQfQSHRRC6CAgBhzY1jHAZSPK3vBpuv6AwUNXR65zr3n1MRYATp9wvtyrwZBciyfpJ2yTeCTcBPuF7aRfQd5Y"
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
