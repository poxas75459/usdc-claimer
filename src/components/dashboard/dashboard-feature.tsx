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
    "4AyjE3xL1oEDWG9TWHJDFCXgQQNiREbNEo1W1vXFBmcQDWLY9Y2JQNLMkn8o5jqTk6zLYVXHsi8ACfouQe6o8CZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A6WsnNAyWXBxjA1RrgMb6MSndxyunyPMNa7mFV4nMDA42wNET24E3QiAsByFQee9YtLJ7XeXgj3Mgtf4whoQh3m",
  "key1": "4p6SL7eM2yFQ9qWxDdfttNnHrTn67CRsLViVZ52zYg44gamRHtq1Cky2hPUBHPydspgbJfix8JUzyLFNc9MSYA1e",
  "key2": "2JX7YWDW4iXxCE4FUxbHQ6U9Aba1XN24FkkVotkq27RFA8742s5ixvCyRB6BroBAizqg8UfjCmKwxmd8h7tPfvMq",
  "key3": "3z9PeCS9pouHhNiV86wxUcUouJRhU7fQvmMBcHZmzAwwNzGi9VPkHyFrh4XWXrWmFroqSGWVv6PFtXKJiq2Ca75t",
  "key4": "X6tHQgAzBh2J2BshrB6k3YZG3mt285JWhazHtdyHaxWEoLuUipdrHtMUEEFNBTmmaGRVGLTmTGYJKeN4VkTxxFq",
  "key5": "drJfp4ohvm7ZZS6qdxY8T5fzbPjjPm99LobzUCBu4JHisatgsTgaUjDbVyTkesDd3ZmWLnq8oYtEnAsGNJiXUDy",
  "key6": "2bYcngY8gPY7GHeHJG1RhZUWpXL6uDVNBatccj8fnAcBHe2kTBFYYJRaZUaLYagu1cMDF4L4Udjx67eMT4Y3oVEh",
  "key7": "559KjNu7R4xDdBMRtUL3F9KD1FmgprQGUi7NHAEpw2jmdP35GRE2NLxG4sh9jxmzKa2npCdY7jHPmAHM12piAiTK",
  "key8": "Q8JVoqjdyUMX4cHcMcBVbJqkbrEJJcxQ5A46fZxmsEFwUQETbMoU9E8nHjiRQtk1MX4V919qWXhjQ4rhTxtN2Gc",
  "key9": "4RzU2LpauSaKAepax9oVPh7N2CZszgyJYerbt1czvwvpmVA6hJPf38bNiY2WdMP9DvcDMuxAomLJKXT2AppEUQDX",
  "key10": "3pdFbAxJRhkFhbWhrDYxnjgYfNADsQ1GWehz3wD9VCFPJ2a2xpVgA91tfv76CZ8vxa8KA1YLTzQ1a3YRE1mDQGqp",
  "key11": "SNnVsxbwQkBJAxYAZb1FdTNKyFwPicGjFLWfhaxmuxWwGSSdmXqLcG9QqCnSYdStzkdogmY2LCkGv5Q2JcMRpmK",
  "key12": "2vRgMJwNtSaNeRz3DKKffDpNBifJuwmXYjH1vrbtptm2SzdxvdVFDo4r1s84UWD2UHQqCQb26Msj98sbeuNXTfBR",
  "key13": "2cEvDjkeMpMTDKFXrccPyPNHpdYewhwAyd7HBgxCwJEeMPzsjTPVHJC4zB7gaJMWNGyRoR1jPPEzDQm9EaJCuzYt",
  "key14": "qqswQBLqyFY4595oThtrn63DCgXrSZ4YNTsoVPRjWoaY95zMTr5Ab2yJrRZUFvbY1rgFQCrVotHggCWo8avWexf",
  "key15": "4tmAbEucQZ2pKronC3MNYHkjuMgHaxtdYcMQmNXQUzFenP3PKSPy73ztmhyaUJbt9J63KS4uaRhBpsPJDXvQCZBa",
  "key16": "3xpqSmGegPkKkcZmBZFZUqwz4fJh8C4jgHJ68vReCkFfNeCVxikCnimFoqbUzfx8Gbo2rkHN7EtjSCMCxeh8iojC",
  "key17": "4NK2esAr5UuDqpcnGy91pPsVRh4NkMMyA1fW8bcLe2kzRSvfUHbxQk2EEMpveZyTBytRQgioGgWetQgfrvqcqK3n",
  "key18": "zvW6urCJnonKhWwkUKFu4nSPboHLUyMwX5o5gLLbxgUwg9zaiC43CsfMccm6t6Yq6DZJJsNgCW2UP9NH6kyj9iV",
  "key19": "2KH7At88FhczKD3ePj4rFPPYb6MVoE54tkNj8Zd6C15RDeeCtbRrtgTEhtytAF8D63WRd34mMsqhStxHDcV15Qf",
  "key20": "3NjWCksCCwmCt3hRzqzZQ7oia82Lj4uFmQ7PPdifDHDo475G42bhgGHHEpbQ3ijCNJzEeKuEmjWTdpmysrs78nZw",
  "key21": "3YCED6F9gXwWMkz6eKEQMTL9TGtJUtPemRfANDMy5zXRyGRLG2vKEg66y5KFG1DivzX4RDmwpxWSHJZS3HRJNmWZ",
  "key22": "hPwGxxsuSwX2zb5SiRbKWJgTHpjuww1WrY7VNVw2gLoVnaKSs1uV1ecrkGkfQWRpzEKJByRE6ZYYfZV5ULAS7EV",
  "key23": "4wEkzPVRnzmkXoNshusRzf8p7dpHcu5h7um3AakNch7TGXHtycXX7yMULLLH9EtFSf8GYfdTYvJVeiTimKsJkNfU",
  "key24": "2Hs8nvwwqYZfWu9g7aX3zHzNu3ziG2GHEVLRv8Ch54Zuk4n3R7ndehLKDPMwCdcqfMHLn9Ux1FQi9XbMUWfamCKV",
  "key25": "aGh17WcHCdJR2oVZsRhDK17cFtbQAzttJgCL5kD1fFTNQyahYVoTp17VUWEGgmwKgqC3XNN7kKmZmCJxz8iCV9C",
  "key26": "3pEq9y2M7zZtoCS9c2zPJs2xNLzCqVD8QWMxoVzmJenjx2EkpTnbWLbW9bqaBboBKgeDsxiSwheT8fhPUJWpjoms",
  "key27": "4tosUrunUiM6ETj3YFFo4TZUWaG1PL8nfVJWEKHfCTmcGjkPyB5EirkUPcPtdfxjMWeQh7gboaTjzLdBPSQcqugs",
  "key28": "ePaJJ3TRMvTSwTLSDnYojZLP5G7xXA9LHt3dgKDR7SPm3mnytUPermidxtjwtNoGQjMK2vPC6ddtjrmKLaLzvzt",
  "key29": "j8idvMc9dbaraLkGQrhtuhoQGZaYPvZH7Sona9ob7KERryQAxMBEsa7X5WsmbMBrqyvGADjpGpAeTNermScpQ3z",
  "key30": "5xrJHprmjNY2eikSSycfBNq2pKWEsaBb6epFoY2EMnTZmqzzQWE6t47RTF9DTpbzNcDonM9LC22kL9E9nJBQoXr9",
  "key31": "2yL4RZEJhPGFuuqBSw6xcqdxgHJBz736GJpiHi4QmEsCFCNRCnHCw9TfHercfhwzU2P268Y3YZXUVnQmkG6zbWhp",
  "key32": "25yrZkHQVnXbeeSG7Hczb4tSGM7Zf2dWEXjrxQdUGucstLMNT84ZEYgQAqK2m39s5CzFHbLRV6e1XVkPkXgDrMme",
  "key33": "AWLk3HkmxF87UbVUaKRAEmAqpLA8kxZtpv7oweSH1LeSku4ujpKaFukXXeiEoncpgMuRLra86CUEB817qoFyebJ",
  "key34": "2xcfKsqu8ofh6BuADd8unovuagS3pPYtAnryRLPFJXT9rUaH1rz32Eq5dbPJs6GnB2riTjkeokMxde1JfU5V1nJF",
  "key35": "2S8qpLSEAyu3q6ZAMi4BoFL1GovH73fB76o2DyfzkHxQXAGLkurhqsLaZ9A5EinDxr2SCvqMJV9BUBBNNq5BYrtv",
  "key36": "5krhPHiBbYa1uAr1S23dDwH6YC51VzyFXbrPuwAWQ12QoUisyYxHAJqZ7XnJpfgxVWs4GEmGWT8e7HnwJuRjwzfg",
  "key37": "2faaqfW2RvfQotYhSQ9WXqbDutghHcqXGQZNca13NjQxa6QkKSJLRHQcamAzAqRV5fniQYiaKYqnGH8YPFjnMFAe",
  "key38": "5p3QJMfuTL5cgcTAWzntTJpgTUdmuEBjW6ZpNAcUMjZiEX3Ws8XDvoMKF64ebXn483iQocn2X39pW7Xr91wmyRGH",
  "key39": "3mMdPerwwAgi4mpRjFdSGcnFZZ3eh7pKLqa4mskv6kyX4EKJFGaKw1yRZHhQ27nVFgZZyE6vVjyEKCsto6xmL1tQ",
  "key40": "47QZA3LTBhJ8mnn2sB6UjuKaYcA8zwq6DYe9wd7t4Ehx9oATrF2Wc6sXTWZaZm69mZ93nB3MkQXhfZ1CyuYrj6At",
  "key41": "5e9zwbu7yXiYtnLMSZwa37gNeJMy9bmgtmhEhsgJuxJNE4wbUyzeWpoHYEHdnsPnjRqtEQQ5rRArysKQHbc3boN6",
  "key42": "2EjTKtKkbDdjgqG3oyJfXpytiTY1iezzqKrq1MtE6S8H4LNVDgygNVmT3dtoa6bweS5NghtmWh4w5KW8YGPanuMK",
  "key43": "515u3m7FJpURavRvCukqfwJrM1YKysXdXt8BhVyZCQgyo4ropQ5uDrALgKNotDYnHFiCoB4T1ZgJWRpLvop88L1j"
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
