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
    "3yNZpuqfeoPhDt23Ch5VhaseVNDviBZqY2SATTtpq5EXvakoLHQpMQ5vjq1bu8QyctRk4oqC9ZJwPcu4bfE1YLtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M7eipxB8CbYpw3QZnNUnEYP3GrTWxLRxdSRckGsoNsK9JTnHzo5YV3wL5ZRhnqW73dvHBCqR34jCebHqVBT62rz",
  "key1": "3XyVox5c5gCBpGZoUXwXfrEaqbYkyUCwPVhKW6X6BQZJcQGgso1kzA4CxHTzsgsssH6UixnmXie2kY81FRFNBc9Q",
  "key2": "4NJB9WpiSmhqCpaLaW5LS2umVmFEwMUb7MoYA74VQK3TnJ6z8fTdDuaX8t6kfM9NFhaXPiYDZofYkRVyT7aVAwCP",
  "key3": "39NXhbtutoZDPyowM8JFAKD32gUyzjjiUmn1gies6jHXxCoeYehCuUKuqYJ889ZcvWZ41cNmmebojZA7QsLYUebL",
  "key4": "4CFYaXaorbmt3rGRemfC1iocwiudWHb4FUQEHFg7dNxxuAVbo29kDo13nXaMif2QnjhbZ5iDPedRuMXapu8UqnBj",
  "key5": "2eXc4CKNj8pSPo6xrYJiDyt5y5hA4SgeBy99X3c5JQns1aXpxLGKL3gcK1AnEXM2nmUFWyDFeaMxqNLomGDa6hBW",
  "key6": "3a83ZcKbjnNXJwooJemomBadigoaBnXwfxwrVutXCzCF3C88P6rvfoGRPADn8cs6LZ3AU8iDobdD98e3FktPsLUS",
  "key7": "5xcdZpxPheWy8ZZe48jpdQgV9uDgZSnFmMhVoNdDMP9fpT7kzj8xDWXS8o9VZyFBRFAkkPk5vKrsjejUcrNRinBp",
  "key8": "2iFBEecByizs1ox5pTNzxD6oj9c6qFBxxjujNAwDvG1peiq177dCkiDdiivN8BdcHuJwSUFrtsUZjCz1DgYFbBn8",
  "key9": "3xu2pZ4svYPNbHapb63BrUaYixzPs3upFNjhcipLBTCu59rNnhH3rPp2WwE5AxCWKgfpR342urqKjkRUnEKkbd5M",
  "key10": "25JJA9FMVE38pT1JX98i9deBcyxSFWzsA4ds88qnmJ2ie5GbJYepPpRF7iizPT2Pvj5n4GZ941NFoS63XNePRWb8",
  "key11": "3AaxVDzw3rJzZcqk5zVnqZE691YzkCL6z8NDfBnJvifJLEXhhfCTQUaieqVHgKASvjXSnKZjsWUZZimB38fySeyE",
  "key12": "cjKG2b3PMnR7gqsuNWa5XqwhBxWykCNegjevt1JLBoxgmpucuBZ9yC5eSJ5TLwCf69uweHXqBUnwc74SKassbQL",
  "key13": "5r3yYjp1SHpmYxSFJSB7YyHrwjYXThuVQybTgnGxuZtMaUD2Nkm9Mwjp57Dr13zcHFiXWVZ9okC7MD9DBiFhdu8d",
  "key14": "NezjA7uuJa4zutWyxvrbY2hiGftUWca1CyBE8W1mVXmZkAwYVT2kBsUUNC9F4br6TEAVy2Ui9nGRw7uSmVHF2nB",
  "key15": "64Ew7iqPvBp5R4tKqWd2cnJgoT91kw9N6bSTvmm9Tu7SQSNXKpNUdUg1REh2oNFy9ex4zUpHVZBt3dPwMkw4Rxo2",
  "key16": "5SLzji2BbHcSfsihzjw8VveRh1KkW2qoLuMHTEs2hE5hydqRQ2rATAjDqVaBz6wBr6uPmmUsEBUGaAn17eYBn5GD",
  "key17": "5wjudyd2mSwJKdurF79rbkUH9nNM9XNLpZymzKbWi1A1aRqgmJrFPepFwxpjDZZhufAJHKMUPSxiGgETehVM4cTJ",
  "key18": "54E51mKv3Fe4eMGj97fN7xcQtgyCLiREHHV3h1w4WPgRtnPwVLqvixAU4c8WNXnawKfJHr9t4Rs6sdqFxshAFi6E",
  "key19": "3xKgzXRnvk1nxd2AqWdpSfDeQhBt51TN6ZzgXEp94A8vhnXj5Ffca4D8oqdyaFhq89wLWdpkUkdxKHUia6YtHx1k",
  "key20": "5b7ABYXFhejCEY2Y9tXnyzfRwczjYsNyewZ4xRC6XtwrncfMpM74K64mihmBerENrFa75LJ33jF2UsGcPj31EdLR",
  "key21": "5o1KF9ZMWmNAaqsxve25SFWhLmtinzG7q41DcQ2a8U6gJ9eSondE4WefvThanY5MSwsviuJGrittYdyKyReBz7nh",
  "key22": "HM8xPtyY4w3vuFii6LDATgfbxKFQigrtbcST93EimPWdyCGLe68fjDcu2SSKc8t6pWDDTE2qCJCVtMmMkCqiBc7",
  "key23": "LX5BM3DkuMPkdYB3dA81ewtzzPMGkVGfSFbj3dWCFL9ayvAjedP1JqJ2TqE3QFiTTT9SL1cKR8EkViL13FhY2bC",
  "key24": "2ZoDCrDag5brp2Jg9utyvEadcvUD4CCkKLFzXctthXX7BCuueghuEpwL2t3GKrRHCTt4KTjLv4PMUvjYf3bSYyQd",
  "key25": "5UwTre1kv6hozHa9XrWF97VduNYTu9za7TKsuA1Jwk2mmUzgKp298U9ZU3qMtXJBepv4chTuMzwsVpwaFa6AiqNG",
  "key26": "3Ae4m7TyXzDGLjgoBcFAHHzZFChuivKifECACixCbRWbAyvrmyB9iVmtNyGH62zPyJ9i9XugGv4nG1K88zPRMcr7",
  "key27": "4wj5BXg8V7r8pZpvKcxxe1t3pdzfSCK142H8qproPHpfxoN6S7c31KZAQNsjibNz8cdxWPYd2sQ3H9s4JMET1cqo",
  "key28": "2rzLFD3uFPFqtCotQ33TCJZzMrnwhXupGqRsLr6FeZpiAUjoa5hChimUDZVBGb1KYnP5o4oQPqSPyLH15x6NbeU4",
  "key29": "JKKH4BWdY6RvjrfpuKUfyCwjPacZ3pWcbt1PmjaR8JjBQk3PsGgD4aTzyAsXXFfAeo8AAjZUgJkkBZq9bQnH1GV",
  "key30": "S4Q4KNsn9o7fSK5ZDSQVc7jizHBymFAAULWvZePk5vqSjJEY5gH3HxyjE5fFvybKw8yuVEeR5zmTrQHa3BGcLXf"
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
