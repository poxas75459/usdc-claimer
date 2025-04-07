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
    "MdBWw3i9vogMhAdVLNW548x12pfL59iMHndpqNGQbaho4yMUHjoLr6a7CqzYURcFZSr3hfAZD7wjgW2ZcJksYPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L9F5aQ7ADECzQr29YXEHGpM7Vwrxy8uBguZCPdB4kgVznw5UeZqf5hYxGDoDuVxRa9zDjR2cd9GVws2gzUwvVpU",
  "key1": "4KMgp3tZ3BNL4YtT3N9KnfXEkMZrZPXqRPpNGwmNtL176cE2ACMtB5fNU7HKn1Wmsq5uqR2rnL226BL1qvsGRifx",
  "key2": "5ceJnF8aNSe5cq6q9CEE8Rdawia2GzTgJgwwgHjMFUDAMHjuB6N1nA7DuRNMp2SKyArXACSFXcRbbMf9fnHDzV1V",
  "key3": "3Tgq1vR1uBf2szm3uyvE2zPvBhzFdevbS5FUw1wTK2kLHYsdbAvcbyRnvS59VscVdKhp9aBLc9oPe72puSfUvmyJ",
  "key4": "4tPgBTfFeJZnhNK9Zasj92saUure1az7HPQ9aeMgTbcZvY2LdELhpUqoBxCKLw1Ar9DCvK8VhaQHPpHifezpzgTm",
  "key5": "5srsdF25jVSxTjt4Nx8i8H1H3Q3io1SLL8fGjJkx8uzMBXvZZS3vp3YnjAvRBx4K8hXugQF3G2SxrYzdig21r4Ja",
  "key6": "3Ly3Bnbc9oHKCqwkabhUgjR2jYieGNho6akjU4wt2rtss7ZrkS17Qv529Q6zorAzbzPJ6ksEg7PxdDQn16h1d11C",
  "key7": "3LCBUC7rTkyc4Wtze7oDeUkpQzxmeGAQXv5Q44beW4rvCH1tqcimyxWYkrr3HJ6kXdpDA2wxZ7Y6ZFZCrGND4V2E",
  "key8": "2jskinM8NmXe4S1wLDHS2atDorjR5R17mGgEDGfSxJ8yh4S4GMPQA1uSETaqgBjBfHUiixpaV9xRTuYMf1Ca7sYU",
  "key9": "eHKZD4ivDtmaAbPpKsNHDkq4hfT1487Kj39uo9eDpuq1u8Ad4HNHeLf8SgwkEvMEWYqeTnrcRKeSbnLZUwEEKV6",
  "key10": "48PuTokzstuECEonAf4QL6fw2BRQpxGZKGhn5PxXsi1fLh6x45p6sptf3aRRwy7N6BmZv3QZuksEgUK3FnPznsYt",
  "key11": "3EWeF97nPHH5oqMCF3g8RPY2PtMAmL28FxirYvxmyKNGYrNtT7KGqVEiD8LA5oEgnK7wobyQpLMrHR6uHqfTgKni",
  "key12": "YCRuCQC6PupVqm4xhgxccDe6kHi68Ggiz5NbcyP4NvYonvg85rsa1nUoMziaYRSBpDGG3GCVvBpMErmxSFUk363",
  "key13": "5BLDxyQKA25Xt6U8bSa6Rheg76HB3V8wMuML9ehLA534tD26NitWcjSKkygF8N1KLVEtHKcU7k1fGhB1Z2fUqmMW",
  "key14": "ZtDGa4CexEg1uJohpV88cAdkX39PP359zMqmrEFLRqxfRVEQgHH3hhmbnKDtLyaAKm5XYp2SG8Xi333NBgmDYY9",
  "key15": "5XbjGpeJW85FFp5NLhBvxDAokpkdRxAX5LLZ8F4hPkVPDZtdffhHSXdB2R495KmbMvxzZyDFyAtrqhzpd4PQoRi4",
  "key16": "MXH4skoGZH8Ux8Vok9WKJYHvG83ku1YdSgMhjd5UAXieUHufJHfxynX5EEGNCdKpzUKn5GojP8kTawDFkkAcCbL",
  "key17": "9tFGCLrEhxQ6HULLbNj7NKAgc1ysMXuB16DT4wcpbXNG6pk9bfenepqrqoGGsrQTnE5kuH2MZDgkGhd9PhquurE",
  "key18": "2L5XyDnqN5kmcnPfxvFd5egBhXQknPEjNNiXknFDXb54MszFBWcUgTgCT4RRUNRPR2ZUjiTgMnKiFsLysFQ9fAV9",
  "key19": "4sAvMgi8DejoRjoTvZKzZLLinTHeuipmzWxagDYQAfbL8h2k4GLL8gR7WU92kbhEAAdbDxh57MkWmzXk4Rky4sHq",
  "key20": "5Z8KkKDF5iznrb5XDuJCEHw6x4dJzYBcW57WvH4EwWUKL6cGtjh4sp2usvwiW66HjwMuxE6utXVAHubXewNjVqJL",
  "key21": "3cxkV4MWwwpRD3Uiz2GDtpkZv6hFbqDVd9RUC7kwbMPQHK5ViG93NBGpqyGxQmLEUdnNcj4BmZHfgjiuo2S9PeuR",
  "key22": "56pFEZaUBScayLqYe6YaHch1YyPAFe8u2AdCuLurr6aXmBGsBFwqznFEcgu1hpFuwGWSphKMgivxRVdXLD5LtPvK",
  "key23": "3GG8ruQaN7usHpoUhQZynpCH7ThuDaE3xepiqXbAkJncFGrrnsbgANqG6jYfSRm4JxbWoAy3Qnp22ZxPKNjxzVqd",
  "key24": "4quPyQCo27gqwJGuz2WgrXfN1bzVLXp1KvYs4n1YyNeXtDfQGkXhP4EBwHLnXsVyuB54L21qCNixiSY7tWte7jCk",
  "key25": "4mDrEv788FsBfPJXwy5WbfskLmZUyXdjP6WAGCLF89PkA3gsAmvVFmdhYfYLFT9Ve4iWPoJG365Nx2XjcFFRs8rv"
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
