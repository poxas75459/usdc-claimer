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
    "2DFandJXe6SUDVu4Uf6BH2d2ofyU12AwmtFUMEBhyEViYNKsPnrBAApLh8tPU54AJsBC1SUSaNJB2yxx1X43PWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wvLNbyQUfxJUtUpro9wrGDtxnjwGNHhdL7xu9PfD2T9NPuaUNgpAGXpfVaVMtJeMH15hjo9GYUobeAtvvcbhix4",
  "key1": "2FRnqEkdqZ8XMdnpr39Z3hVK6W3zbzzd2tgxRTPrWhCJLuTuvXUX4YkULES1tKXbwyNeVMF5sQNywYotpqGvGNdu",
  "key2": "fcCV4y3JdYMNWRaPh9Xox13MBTBEcq39563Kjn4uabU6KBEeZjHGwcD6nMgZKGpHMfERbvkvtD9ELdw8VEUiD5h",
  "key3": "2ERVQCDMCoGrXTCySabnNtPWJdgDas1KALNwbGwZYX3Etzeiwabmo9kzXvLWMkJv7VXWRSMAfsGb4a2BNSqETVzK",
  "key4": "3thRU5tdzGAf7DP9vai9wKq3bjgXpoJaqyw4YAThsXJcm3FCSPW4zRXDgFLXkQeJRkEsxbiB8Tct3i4Z6mfRj2WU",
  "key5": "TYK6tWeKjJx2Z69FieweH4zDfHepEsHBned6M2jT9dQxEPm5Sic69FMVzdKZ9Aqm8LuerGGoPoXycNdzCRRjrzV",
  "key6": "2YzB8vx9PLh55LHEE52MZofGP1uaKWk2pT5KfhJwekBfT3Vu5z15oXZoqxvog2Y6C46sEuX1MpvESdMEJvSyW1AQ",
  "key7": "51DGSYn4jfz3WzLPiZb3QhFfcxX7eQY7BVUZT5G23goSVdYi6deCxSDYR67nf5NYHkehwiS2nTF7onkCAwBJh1or",
  "key8": "jwgwTcts6nJpNYHZkmuSmSj3jy2CrsmrU6z5QPTeBQDPYiRBFgbyYjSmnjLueVB2GYkgCBNZC1aMi7YNAxHBcjB",
  "key9": "2cK5TevZhmf8Kc1HUfQRm4BeEsMKCYAsRR8WDGib12e1BkuemW3KTwpp2ijY4JoxTKETwPGojbghASfjPn9VRWDq",
  "key10": "3sEXMEnbci7hTz1tXmo4RZaFAatsbMe4xTB3Pe6nJoXuYseqZ1De3at5SfQSnBjdN5dTKeLU6m33CaXVbS5b6Qyq",
  "key11": "5KyHQVcZy7eYycj6pQAH7Lk81UcUhhDNaPZyCwAX5BvqEKNpuX3Bwp5gVN3QTW1W3aNrfTDNrrnUntp2GwCfG3v6",
  "key12": "2w3CWKgeRUQCkjHeLBZK8WAvBzrn18FgLw7g2YocdMfX6UCEt5LL3shkhH1J2LvcTCd88JzMKFp8EgnM8PtHgK29",
  "key13": "4teJ9i5gTFnvegYHVdj12cWRZQcKZvewT6tfsfko5RvoM3fpPLQjAFFPaqZQEHW9jt6c32ph9C3EXGhach8tQyhv",
  "key14": "4eKwoyYv4ukqQzUvo6uiw76WxJ6jNYHmMqnfQREN1p3dmeCZpRBnWeq36E8VMAHoGyaHRXwDUTi3H8LPBcAspBnS",
  "key15": "3rWsbBTdJp6KwoU3CN3CK718FNgS5Sq7qzdxHH4q2EoVnFsKx6cUtfL9TyLGBnWowkhgiYgR3QHGaCNPHjae4fYA",
  "key16": "4zCGdugdjKCkZhxie4W35STtkgCy6RE4mDaMuxSZYQ4188u3WEfM1n94msJiD4xmPPamHgPxr2bLJwYNWv55TE3L",
  "key17": "2LK8D487Lm3EXHqmHmfz8DcdpD9E3KnxXTT1L5DAHXcaByzGJpErkQien72exo8WhveFrssNQaAEMm8EtaHLVfFf",
  "key18": "4utRLnRE6dHyrn3p8UCdRaD6eANhn5yRpHk1xNAqtsqZvfPkxy46aCE8e7qvYGUzn1TLHP8qQFz9U8TiVNf259JC",
  "key19": "csMzQFcKtRB11BcmXes6VscjyPkWsKR12xdGYVsyg9v2emCS8zxpsG3HDaPwWQrXasE9zutWHc5YQRB2oYi4jyw",
  "key20": "WZzJLwQfrCkPEPG1TZcNv2JRgEdP9HY2oGjvyMVgYy6iDNECg6AyEe5HWDXrshavDbhnNseBjuUYwKArPUo6rv2",
  "key21": "61Qf9bauWUL9ktkEc7FkA61AjgUUWUa9tsNWJEGz57kL65VZmxT5jLrq9BjoBT9DhJTDRVxPNrtWJgrtXQc3oDdv",
  "key22": "4LfBJCqiBe4UjCNkBf93CBsn5j2RHKS5H5ee6mrwETBtzrWBE4Bv4k321c4Mb1sEFjdKgLEWoqyK9UERz1WjEgTg",
  "key23": "3ZxsPb1sHZaGVa7ENCWMvR2umfCw2Fer12pzwLTJaecb8iHs1fDAFxANzt1XBT3supCUiJxE75bWrT7dwi8KK6vB",
  "key24": "4cPweBt1dQFn6NQmCGYPLfGHPMKq9K23rfSJc95iA1VwS1DK3LuSNBVC4XpS8fp6ezXmpGQYn9V7XFeR9U62Yngj",
  "key25": "cZ8rp4oVuPrs4grLrm1RCjJvXCbdxPJGS3hVhMMSopME6ENUWimJoZNqUyPVWfVWTNtMcZaB7Gdo3vVsVqE8gNr"
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
