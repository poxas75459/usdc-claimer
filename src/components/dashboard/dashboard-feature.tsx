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
    "3eqr5Z2xySzk4HM7ogRuSWgu1St9WPnEJHiC6rgqwnnaMwAt3DF5HeM16kgTuRqUQ4uvB2W3w75H5fSva5y5NYYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42PE78FtcpuMQuRofJaszYHsfoCJN38CWNSSzQUJZbbvw2YWHoPh3aNMGPbeUgMka69Hu6McHy7UBMFzQD58mZ3T",
  "key1": "3PsSGjJhp5NEaLgSYzZJm5PRYzcXELCgELGkjSY1LAhMZbD7hrG2fAA2iYAGpEMfX8KXxsf8RyKN8xHAmLBng6mf",
  "key2": "5aN9JwFSVzVkV9DNUA8owv8CRdfep86DGAjpnHn7MusNMbDzbZg9dUtRR7PPmismYLFRtmPaLMFZKGFaK2uMCts2",
  "key3": "26qBnCRBN6KyCD2uioNUaXZ6JfgSMh8VxjW8BQ3XJb1Fp25grQmJ2Fn1bUquyWNETGogWjyBABic2Ueeq7ngW6f7",
  "key4": "3orrcRbbW7CMg8CcFVLKnMbUvEBV7xwjYarT6qsPEYL8YP93pBsPCBncvKuXLXbK1GpJwDwPrJYKQ96xo4qmkyCm",
  "key5": "teuCRVEez2RMcyWZfYEN8zLbTiPt2YXspC4wLndaY9SJDpvTQM6vuf5AWcGKDHjXC3T7Z3ABxsfetCF1gpcpU4j",
  "key6": "4gKYLhwobsg6ZXqtms5oQfzDxWU3A6Hn5MNbGd1jizxiP4cSUG9JCDFFnVCZgs53CmZwkem6QsH3DweFtsN1aMzm",
  "key7": "B5LbyczMYG5sGHY5RHvVzGTx6sh96SpogAqsghtcaAV7gjvfaJtgzfXwtHUKbpV9sRG3x8q5fiMN86mU4nV4FXZ",
  "key8": "441j3yBh5ofLUQVKjT9oygrDSs5RUp1Az4o4ywbkptkt4pV9y9BJrR45WGRLZHXcZvktZTrZSFb3Y3Tu867ZstM8",
  "key9": "2UDE1zHi5XK1ZFb9C8bVdxyUTPipad4nw4xXZgKzUkXZjN7TrkwLQeE5xD8NTuJMU4RsnfSoH1a4HQdRf1RvYesu",
  "key10": "24cnZVYwUs8kNkHEkGLhS1rbswEnV12aVBRVoKLG5j7VuwuVKjoRNBTt9RnjkrYSTsobWj8QFa1W3MJFcAyexoo1",
  "key11": "2wsSfTjeTVeCBgcbYrbtRFJhimg3Puwa2Ta8qcH8JFGYwMLEA2Wq66Gk6D7csQnvkJC179zTVELbGbrvK23Y8aUk",
  "key12": "6xyRRDKyqYSxs1UF1CjXyZ81tJ98uDsounVhKkh1ALG6RdLXMAysKWT3WpDRQx4AhiFEXVXmwHeUeALKkc3ok9q",
  "key13": "2mLYGccG4RMxqXxpAoZScVVLQCNXidrYvdreDFxhhsTATRmvgw4ASGAWin4pQjuXEvc3XZHLQmRJtxyCdZijMc6o",
  "key14": "3pw6KfVSMBK5qe5viWtbRqxmUGbqzCRuW2cmEqCqTZVYRJL8hJqEUGebzANkwEaMESBzuJXigQpMSKrWMSouT7rr",
  "key15": "2ThLv4S4VzwUhN6StXH3AJq6rSXyNL77wcWgqEwrrbxpuAU2f5GjgNKY5uducBkZ9SVcZHyq7mrVLhfCkh7Cedzo",
  "key16": "5ZDyUuDT15rti8tEoQGxwdZ4B5Uhj9CtVaRtZFubmrU6GpMpXRF9auTB8t1FbHoJrG7Wc2VZsC4bdMj4PHcA8Cvv",
  "key17": "cJZsRQWT5oegp59XmP2aWcrRpQ7byaJmHYAjMpv4hwmhRknMwCA4uZ7yBiF4JK6PPHBJuscik4QhJn3KNg1A8uR",
  "key18": "4RoRXhgjr8PD28m4NeHEeb9jtMoA5iK2aMLUoGnz9qwGQVXKN2gG3t7LrtNsQqe5Da1WRBtPYL7ZAqDiQsKdeRBm",
  "key19": "5ZnYUMfCWjWTvxw7V7GVDh3yfMd6oWVFnzFtuCGTZDXxWEgZvMh99p8VCwgFNNrWc7M1se5FgekAsguji8uWu5XH",
  "key20": "3eYtCQZJbwVcbeazRWk5j9Wq9sD7LyP4SaXdihykKDoYatwKedJUANyqD9TG8yNEfLkLdbSCCGHG52UtBc6DZJJk",
  "key21": "7Dq2bkZtUbnKfFZyTFuw6CeQSjEPf2dYaZryB72BeeuoccYXb5vR1JTX2m39vg1kMoMeUmXN41UhvbncrdqQeuS",
  "key22": "3phd6tuHQjSi9aHoYmfjyR7GGmRyMVoaPybzTEQjcjspxhdAikxDDXAkN3vDz1uNcqBeeF8Swt2mmno3LeyFZxAi",
  "key23": "3QiAkWvjkCUQFBg7rbTLZpH82tsxMBKvpQHEGJYCcsyvx6exUf9uRmD9GWuNhpEctC5uEGCab8LP4pp9bb7MeL58",
  "key24": "9HXgbYUivFRrKaYPP38NfEY5fUtqBzgRAbC1KT9mvAFNWoPRL9BeKoY8J3nK2puNrVmMmyGDycJuiExBA76dBBc",
  "key25": "2enMts9SfeFJxWdBCuZPgm1RWwr1p2spSVJPQGdwKQD1K5tSJHmwfUFcQwpSDSGmZfahNBaKspty7akoDXx4Js5X",
  "key26": "2quQ2ppuwz2hGsVfQvNvXhNkx5fmyBR6vGPagZAHL4hph3eLJhBXD3rRLS4UKM2MfSKFYi7wdZTkpx4w4SUzfGrW",
  "key27": "2DLus8WaeqaZPh6gvMeU2TuYPHg2zzRKfnPnL56g7U4aRsVbtuAHz1K4xqk9eK7kmcRbzS8bHyh6DUbEoGS2n252",
  "key28": "3EtcTrgu3FTWGfhCAA1vwdmba1EoeCHGWVSRsht3YcPjVmMWsZYawoJXgmZv54RWWz3g69Bt1bycjMe9JKKy34Tn"
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
