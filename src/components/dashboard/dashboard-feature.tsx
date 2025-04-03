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
    "4MnMvpAyb9Ber7JbSC61Jh9SsNCMAARrAxCEb2wk3yRMApR9aT67frNj5eqn8rohrTAnRbE9me7sq9LeXk1xnuZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kT8yd8YiQ8aDp8upkgYokEH3jDu38odHn55fB2DQSEeL3HE6aKMvSJBQHCsX3pzaDHdxYzU11rPo8ZFCAErBTRL",
  "key1": "61Y9be1uz9TzpVLgnTARVhCokX4funs2p6DzsvUVitUG8467QRpkDQWZbvBa8oASHsNqs9dLPzLVUwrQx7DGnVZH",
  "key2": "2JHLdNrehLNvS4fiUTP715yN3WKwjcCRLzH6KYV8qvzNYTysYtgQN34ys22GynQGpwTcLH3yCLdYSFdnqyxSm6fg",
  "key3": "2LD4QWNurb9M4YGvD5rxts2WL5K3W8xtSzKJ7DMFhS7iEWcbJUjQKZPx7VrQj6TQW25bvkxPmCW3aPhntHJGjLw9",
  "key4": "LJGnEy93qkVCArEYHD9Fa41nisAuz6Za8woWKymQUC2KRTdUzPr2vceSZrTpteAz7ZhmZEi36kCyBRLy2Nqf6Fi",
  "key5": "2bWqbgSFFJhQqa8hYnJAmR3ZFX4KFxSHfFHvX2bAv8SUctbxhdUjNXwiLa32L4W89dGZDs3RrBc8pLSj2wrgGdUG",
  "key6": "2bawz2GWahBuatyEwgDag7weAMpL8v7Fmc6uJY2wG6dmwXXPDcPHhGqLwjEbyXxgkuJWW2qQXfpmmDyUszChqxVr",
  "key7": "5YyXgmRqraXNnwHJEhitG5nqAdpy9TErJURqRZjEXf3pS2BQL8b7P4Avq8KhoYYDVRX8NqukEtpbpHbZz3JLBTNE",
  "key8": "3WreHiy5mB9UY3QrtXxGfMJeahaMs9FEqxQVvtsXjBLtpwWrNp1TNqctAGrAa2MgZUaqpDoLdZyBPRRihE865gqz",
  "key9": "4af9tNShzV9bsBdo7UNnYvzkyAYdS8JTbiCY3XwRagY3yK5FZ8frkUngF1rUujcbNGrCH7M6EZqX8iAkig8i7hWN",
  "key10": "55kdtwZYap4ozo2QAx3BTAN81t8YngJbFJRhRK2MwEL8t8dYod7TpvpTXTZEZM5gAL4rCRyj24KcQtaweXCHqZ38",
  "key11": "2dn5uKWSJ8vbCwpEXNrWFmbmAC9kDQLL7HCoU5qR2ZmT6dh6YRsVp4uFsPso3vcqVWqD59MeJAbWD1B8i1KixvXF",
  "key12": "3cLZn87v8mr62ZDZVncHdfJQayw8bKRDNGDvb48XTqMhVnhCGCCKCZJ83Artwup1UmRvmfo9vkmm3pfewRevjktt",
  "key13": "5hUTLGr67N46AkNjeHZ6JAWTLgRYwg6b63mpX67bba6biEBr9SgNxD9xvbYWQJWDSbteZnX29PAt2yezADy7M9eW",
  "key14": "S6Nbbnn8EzJifUpZAfJu8oei9K2r8ky64chGGJBDUDvKVpkYAcWCBHHecNcM1XDtDSEy4mmWZCwiuoFfVG6gERN",
  "key15": "4tQsuaqEEXuYtjhC3wE3Q2M1Ru6RusQBYudJjcDqfvjtdqjwj6nHaCKGnyWDm79pY1DVyrD7xghpQkSgoc6EfYXR",
  "key16": "2JbsKJPRCzA7jqPArNXeMSnHVFtR1WsBcBMpf9xr4yPtx1s9f6AhawJ2gHybVxg4xwiqHccuHrAVtstuSqsPqwZB",
  "key17": "va5cNhPKfDJdDXJWoAHJGWRXLUgkcxVQW8sNZw9mG1bgHUWEB1qBD7jFGE3V9JDhvAoQyGChT5Zuz9UxSHaN9aB",
  "key18": "2MeMUmT2BaBRcaYB1em1CxvGRycDhc2MGqCLZMxADW33SELQjAhV2cp4xEUSNAgwpvh4CDWw1C1bceoGvnGzh1k3",
  "key19": "4SGegArA33XxrMnEP7kEp7ey5nD9tJ8AVyJBZ5xRUoM5MhjxgHx6q9owwQb78nZgKeMs8q9LcS8QFCMr7E1iKE86",
  "key20": "4x9a3pRMc1feFDUDRUkLh9m6tXpyfXjY8UzBGxgWyoVYVVSASqLN69bjWmscRYBs2RJAyFPdVGnCr7dMBMf9RhiQ",
  "key21": "sfEu6ovWZkLuFf8z9nwHJMoDPYnF7X6goAPrso5r5dYo8B6PdPJYXQT41vLdhSA7eZFkgy6tZ5vn9LCfsPaHmML",
  "key22": "54H9M92EtHKQqqYUpUfS2gv1fBEBuazEv2g9c6YXUsG2NmCapjyarkAVS89avu8dRhxe9YYezWf3oi6vsFGJBrLN",
  "key23": "4j2ur9FEHWmUxAP4w2BwaXTPY7MDkNnHH52oFsfF4qnHCN2CTkumjDdHpUMupTyjH11d3PMPVLkEjkJX6J9d7frc",
  "key24": "3fjeUMCf7fMFNxYzGuJBvECGEhqigX2m7zQj2oPe6Bw42Zkr2F6pXEX32ddd1SBhen4d4BU1A7xqQtg4knpd7s6o",
  "key25": "wDKtQMSa3FYMXLx8yvH49RD6ZUSK5aVkwM9r2oddWiH1WmgLCFoZ4qDfstV7gB9xqu25CJDXk69fvhFYv4BgpBS",
  "key26": "JBw7Kvkhq918P92s1dBoowxwJ1NXV4dg6toY5F8V86XjsEX2m3seV1H3e3mdKSVDNdT6prinDxUYssLtJnq5jWA",
  "key27": "SFtbyE6b4JBnGiekRgte6bTyJmGd3cF7aXnrr5km6VYB7UM5McyCMu1eHZzQBXjwPAyQbv1NHNym2EWgTySr4EK",
  "key28": "sR9iWeUJAjosfEdD8sDQSXheZbqEKSuWcSKNzCyMez1AywtAAeyMPQvRwfaJKq7nHDJwo6MihbEhDg1txK5obn1",
  "key29": "3w3wJVUaPBZnuJHh8w9EtJXA1mQoEKtLioDTar84dM8pbASGHtFgkkRQmUHkpVm1RXG2R7543i9eHmzojkfShWbg",
  "key30": "5xiRmJ92bdv3sfHrJGMCPgFK7SPzqv5rjxMu7u3Axf6snYFaobK8pn1phCicxg6YC7buY6s1qJVfzs2qXYd47hGC",
  "key31": "4nje6Sbsa1FoPAcxkRCTwMzwCQ7hkzJCJLtLrZgy6YPTggKjviLvQmaHp3HAPAcsVeFcQwny8f1fF64EhPEF1z7j",
  "key32": "5rto5dxmmEinZDWUe5RncLf8r2JtzBxeSymLY64rUEAjfEdViAprSX5isQFMZptjAavkDjcdpmQGBAXWAaKv9cEx"
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
