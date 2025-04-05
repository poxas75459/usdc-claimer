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
    "4xa1HFro9D7qKuqPrGLKGKSmdjRrZR9NGU5v8woeRiEhATQRLUWWMeRbYkH3L1MHVttjaGLPz2REULPHDAeY4rDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bv92D29aTgsLuaGJEdnwyNzgnCH9dYc5uN4abEyRpn7QJNinmud3wDotVWAUmvzZWafpfDrx7o6WZpxZsR1botB",
  "key1": "5YoHiWeF5BB5Tmsh7bn3fCGz6bNb2x8GMzRnh1SocBbCcTzhDWsditRWtqbZ5eq8bKVfm3JSgCKh8EZxHPkRN9N3",
  "key2": "3Gko3y1kL32ToXDqKh1cM8jZL37AX49H3b7947Rfvj8RUeaYQLauUrnX2rMtgpNvqcfGfFLkFwV9nzd6CWmbPUc9",
  "key3": "G5qxNzSCFs5FFN1TCf4MDCrRxqQCmEwQyUfQGjksPDhvxdS8k7kgv4G8Pq74cuN7pmeWgCbDDUjorzUDLtLfLJN",
  "key4": "2PQqbG3pHAk8qwTtaQysTnw2urmJcMhEjwrDQrcLRE9z28pytq1AdptUEUF98i1Gbrgwzav7UaufiNMddA7JdfMF",
  "key5": "5cYW9L9aZT6ithGkxpMUXkGPb5qErpECstpTes34sXk96arC8GH7ryjGnpwEZCoEyWjjKLJeyJieMv1QaZN9q5Rw",
  "key6": "5yWXtPtq9z44KH3r6e6iBfdevJiPGQHpUJAKzHuLkjumRJapbVXamxXcM8Hgd7M8kFTRzf2uxbFbT4ty71wWYY8D",
  "key7": "3SKisPWhHM8mtsWUwkb4BfGbTz5MU8JrCaW6FC7axCMBC6KLLp2dtxxYEhtHig6azAYcekQM3orzU2y4oboBjzYD",
  "key8": "331pDzD3MvSVPdK21oXsHZtTyPPf6qdKFjYdGVwu6yFus3YYpXcgQMFLdYeiMvJeC6tcL6nojvrSEnGynJPbLU7T",
  "key9": "4SwWDGWV8qhmvszefEki9XcMaaYHg43NavriALQKBeSCotupmFYBm8YWy1HyvZrcCHbFuLSJk9rcp1LYpnpug3fz",
  "key10": "27Swjj4gEPUpfd8aSysAZPSLdF5sTg1HU47zhFh5y92Caqzjb53Ld28tZRJmHvXTC5CfUTmynEk7KDq2sUV7fcXL",
  "key11": "37tt76bPNuqNkBYGmCWWVYwsNjtgeU5Lod2Dr5bE3EBoXCLpXLboJULtKhJv7KD9mA588xzNW8YpXbCQm8arCLg7",
  "key12": "4c6whrgqRw8YU9hLoW1NCpAQUwYHtUTjNPvEnM7Eof9admiGPhcpoi4nc98yXL5F9Xm7Y8xanytoa9wU8FmW465m",
  "key13": "dBFZcU4WNueSZYt2ZpAHx5i4iRw3tA7vmW2LGgwRZgBQVjPhCq5PN6Bekvg3czNSjpAhgUpW2AvEZoMWwvdwrwn",
  "key14": "5Z3QXfp69593D9wdfQaYVbDxYQtLKinUL59yAYBqjNFLpNaaJc2ob2eKt1JRGNCmBt7B3xW3TTFmwSa6x6P9M5n9",
  "key15": "2uKNdtS9zuaDteMK5icLtHRLQ5VrDWpnMKBSJU8VZBeJ1XbwE6kkwZpVXbJRWKE3RzRBLKY6fUEuCzqDjZj693NH",
  "key16": "2nd3ToiNdfM9v5iHBPzxSKaZ17oVdJSXmax7rjNrGpx6HuSGz5fkCPKiGmPEUZobrcn4bipSPRCeH58borNeFapp",
  "key17": "4fGjJdUQHBR37YopbUiFpw2MUC3EKCW54ZSRvxaf24Y4dS46pMuLV9irU4mXXCVuYh2tAUMh13Zv2fU5hYzyNeyo",
  "key18": "2jD36NXvcfTND3T3hapwPKacR24NTKb1cf7qMWH4UY8YfdKYSaDdWMGtcSymRhpTfsBz1pj9WwcCTifmX4nXAYQJ",
  "key19": "3oMJ4yBdmsmDG2pQcs6PbQwnEPJ96fDxYGb7DHq1seeX2zVUEC75EEb5Pt6Ma777Qw31Sp55L3gnybqjYk8CmLzZ",
  "key20": "37wmLaswyPnyC69kwrLfdXBmSS8MwBNWtYNCyymo9m7GRL5g43v1pNJrs3jy6xfuxzXs3dzneWXAPrSDRA9GNGj7",
  "key21": "4KCfv9frXcLKWRxJbkPoHXq1iYnWrsUvx4NudBssPvoCntCuqje1m9RidzPPtcX3KSxQeDWWPsK3XLvSFSzAKRre",
  "key22": "3jZGefiHPzM2pXXLmi9VcR3HZYR3V6XbPY59cp8uo42geY2cPwYjivMuLaXLuGH1dChPPC8XXT2WC5et9DBpP8wt",
  "key23": "214UrejA7TUcGvrFz1yQbMQLu5a9pPY8tXiGVx7LFUQQpUD399yWpYxFLXUJBpUD2dY9P8ytBtSDJ64usAw8MkXd",
  "key24": "3raUD8HE1eux4THaTSB22TUWCVFh7t9o92RpMSLpCkJuvArEhjWWW1NhANU1xq9kTr8dRxUDPVfKwWS7dB7PBBZE",
  "key25": "53S5MVipyx6bgk6GN1S6nPFmC178aS1xvMdcxW5mAgURj2EdGEaqcQC6d3JkrQyqjppUyDDbz6iMKy4AH4vxjQtR",
  "key26": "3m47KmgEbAhnhNNx3Yx2NqVtHA9KpLc6dnbpX9PRj7BYLCbttLLJ4vq8WckunGP5zKp1FApJotkYCKYQhrFRffDn",
  "key27": "5sHpqcyzjhLQhwsRPxcbX8zqFWQqS2R8yBzS3kExMFUcgF3mwSpFZ99QCtovTGZ5x58WhXX8KPma6hPUDdL4H7YU",
  "key28": "x3yLxF88xZg1mrc4GaWecXGUNof3DZEEcj2paVJccKSCGJNrTCPjg5RF2cZidB5YJck4Jqh4sYu9AWrfVcHkvQ9",
  "key29": "451HyN8ECd23XgbAeVzSx7Pv3D1q7uTWVHjdqfTjDHkeaAwJcTizJwD2fAC8m4EaeNX1ss9e9cVsW2Fkxkd65SqE",
  "key30": "49E1HFbyBtms7sXnKxXLk6EHj3m2WjtvK2bsM8fhKWRR7U7qXbDpBJSHGQMZ4KRvi8q6ooJdGEqv3zjXnKSq4hXL",
  "key31": "4Kgi7BHAqNQ8UVY4senu7vezGxW98n9vkGXhj3KLzExdFRpRhuaMFAy2c4XFXvPJ2FtFae86voVg1px45N7uBpcT"
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
