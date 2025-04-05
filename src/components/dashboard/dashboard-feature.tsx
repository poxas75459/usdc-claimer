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
    "41zmKk8bcWcpPPGi3E4RGaEP1ZzRhB6HNaQahUeSPFfSuzL1gkuvjfYT55c5qYXGeRHXhViMbQgTRnhuBLAayK2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "561eHt5WG9fEYt9tAkrJvmJ9eTrjhNbJgLo1DZohZzy8mvJd3yJ91BKwYBsMcSRQqfJrVyyW5wS74X5yQD3UyFZM",
  "key1": "2yZ2Sin3xpqfzqdAW78nyTpRupAt9dTZZch4JDs8bY1aMJ2hKmjKxi4VdtaKAUZBxJWdtKaqeYHxWicf54AkFyHo",
  "key2": "417XYnuemc1EWLSUnyJxaT54phrwezLXGyEKuii9dF2ipbAJE38tfmnbW7x5U83Sr4KHkntTVjrEf6V2CerewgUR",
  "key3": "5EXdMKW8ZzfR2MWYgTfr99QbvcgYp8RQh9tEEc8XV4n3zB1zTsvbXHqMVV6WbCDAWy8K999y29LPC8zpcV55RJ2v",
  "key4": "3K7zs4AuEEYmYjWUGKGPPkP91wGtDMAJDFU2W7e1FFr2cEpcJkkNq9LbApLFVRgxo1YsxSukWjK2TGpXLw72KE1U",
  "key5": "4jnEC9UkzZyLcUSGnMoCgK6KHXiS2Ydwk5FrBM3gaM63mke74PRXsDLYafjGxzV3LFqo8a8DTJv77DXwFWnCU8oF",
  "key6": "5miPCsptZmSSFdiWqgDYZU4arzLfcujGCRPyZhk13xfYRWND2ZwsdyYKeFkw39yVExJ4NKpP6PkmptBk6NiCT1K6",
  "key7": "4Ho22WU1kDwEf9H4WkCNFZVqKbqLsyBhsejqkZes7MY6JfHirQdFxRLk1DJcnSyx44qpdhGw4CM7VCxrFmzMJmR1",
  "key8": "3fX9wMZu7vuaTmcKeoAi2BQ5kmPvi72aa1piQvfGWJdodeoqPWrFNRW8HcH3c1nTqPdHAz6xNoV42ciisPUBr769",
  "key9": "5nF22UFWKEoyGtCdw21uurfANx9YSV9Kh7V7hcm1o9keBcyhxN4hoN8RgvS4f6z8eGe2VbEkBd4TDB5TMZbNvkna",
  "key10": "4oSs2Xjo6zEGfwT5ABsuSZ8GrFCEXJmiGPHN9qNhV6DHivTvik7woWuuRedny3NU3wc5pBVzLXVFT4quT9rv6ZMS",
  "key11": "2iq5Sq1op9rJCikfHE2egeqyaSGWtXe7QPjJti71vqqJdfNcQJtW911JgUBfCgY66YmV5AxdVuRNGE6R2j1zfZFf",
  "key12": "3xMHWvB69SFLUHre6ebRuVfNuVEfVsLLkC7z3d1ySUv7aN1JXZvQL2Pmxd3dKCRfybppKjKJqfZJS1vVmkecDhna",
  "key13": "5hZsfyZvKQndBUdJL22QCUQLKKx5ZQweqAP49WGvzs5sauHQkHsQVgmJSYU7sB6eedTFE2RQoeRspf1mThJYzMNA",
  "key14": "gE39qmENT9Hrm8AdbrWfm5AKtHUAnG1S2nxYT9QzRS5FaG6EfkwnEjEMBGuGhHE3J7PiuDkznhVVPi8raeLBvET",
  "key15": "zaBYyfQYm3RNBEiF8t81kaHK7Uya5GuchWThCyRBf8ksZaogru6rsMbAeSt7QSbS51vKqSm6XY4XFL59pF4HyB2",
  "key16": "5d4sFrWpajLLDFbznz5cXJsPLyawR3VZcu3adZwq1uvw5AZuKWGzu1JrnUogMT4ELnwvDyBDSDseNZQyii7EGRUV",
  "key17": "Gafub28rZToC3p9FeoZ4kSpVspwQ5ARfsi6voNigSohNddsajaxavcuTmawWKdXbMRUVzTkenBE56xBTkuWvaBV",
  "key18": "25NTzqE2fDGhiSyko6sKQkfHa7A1RGMTYfvbzBhqZvv3SWuBkN97bec3RRUK2ebvRxVFD3L5rwi22AA33NZwDRrG",
  "key19": "484GeSCDHiPkfWevEvTBmtovjQ38X187rKmWq1J3aGPmiLF28EvVboXRNc2m8GNRmmCNbFAkDHL2Gc6SZFg8Lwpm",
  "key20": "5DKoran5J7MBPgEN8J5Ece4XVqjRwA5eqxxNoYpRkvUpqWAFJT7Pwuw7Ap6G9a9cKgwGcHuoqfeniQdvUofeGshw",
  "key21": "4kN98me9K1WVeeZENzNGtoGANPEW4AgFa5Ug8X43EHULxCe4KdS4mhuW62aezX5Akr5GXW6L9pPzzSbseUFj12yx",
  "key22": "4i8cENqix7UrNmEbUpa9qrwX2BWua5Gkwa4UASdE4YofH7M8heqRPbQm7FGZZS1NWWSs1fq9RS8HpbNda73o9ZH2",
  "key23": "5vZ1RnDWdETBcw4tW7wNPfsq7MTWiVpzV5CZMeSGWWFDvDQCr6nCuGxNkxDesaTJfdnDEyT3yBHQp51nr91KXNKJ",
  "key24": "2AvSk6shK1LXCEhc4QuHLawFAX9JQxp7DjqYL8KDaS5DZU3ozxKcEhUMSpiY9gT4czifVQbayBanTk9NwNZytwbG"
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
