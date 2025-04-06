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
    "4KEDaTrKg211bSTcEV8JKf6kxXvDbrgFTLEgegDBLqShvxX2DF4pd8D2arZt4WfCdSPnaBdBmfwfhqC2VaBg6qhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vw4ABpTGWnzyixRXPmRFcb5GTDCY1ZhzTDRDkTX52MfTfzEjoxjfz4U1awLGi4LNBDNB8QfqMY9WaQp9cBGF3ge",
  "key1": "32eEeUmFDwwYsbMgZvtXoeX3QYyxR2mVihLJ3VJM9eJLnkXRMxvpHTMJgGi3sjVvLYXPwqxtcE7p1ieQthx9oZEk",
  "key2": "4LrRmseFkw8MCbdqh22mPvUZeGASYepRPGSMU55BQNKe6FxHfDpukqZKZmkRQKyHU6NTS3Cnp3L7asSpFKARmMJF",
  "key3": "2aLc8sx661dpBjcyy9xKWWuErFqTPrndBVHSwcJLm1vXksJG6sMBYR75C97F1f9bcNm8uocyf3pvPj6tMaHC6drc",
  "key4": "5Epw39QTsdriwBNq2eoymFMPKkEeCRinA5TLiz7GCnsMfNatxeg2R5M1udW9szJTRpwriAwy5Z6MJBY93vPiRSeg",
  "key5": "2i9Hdr7zsrzAFF9g7CJbKDBD5WUQKPjZYXLM9scQRZrF95CB1cjXB8UzY7sqY75qSAwXuvQ5yH4JpEQuAETMthuT",
  "key6": "2fj71Qr1haPURRdFRK7AfmyueXnTpojTc61VH6y6vGXrGT55YD9NCH6gmeZAjN2kp8xEhK7n7zcyiQ8sEVALLsJH",
  "key7": "5fTeVr7WnJtHMikLeCivJ86TFSQK2BvcFbeK75MoeRG4U9FQSqshquVyZPTBHenfkwAuRZce8ZxyX43fJwz9g2Zt",
  "key8": "5e2Rv1PELbJomwWaZ9tN2h6Mv88viAhqGkXTvsfJ1Pq3bzZ8m7zVoyBfHo78arnrG6XyDEQMGkWSDVSDZVCY5Nzf",
  "key9": "3fE9A9w5ocU1DMmp8aqWxjq4zCRp6x554E1fCVEt4dfATBmzGGBAiYucJ98Yb7BQ5YemjDhZX57cQKiBrWLARauA",
  "key10": "2kVcvQAoVmNP6coAPffHsAHHE4A5HzN7n2UbvBWttdnqrxd2kxxoyRZxzK2wWBDRUj8pC1ckrQCtEw7peLtAm68J",
  "key11": "3Wm6Pj4FtbMyDYNgoxLnZvaXAvUWmDvNxJnXN68jPEhWGsWfLmthe6R3rCbfYrN5ceG18Z6GxG9avn86jicgfhzR",
  "key12": "2qVzqZUQ8akDtV5ExVNUpMyj6DmmSfC3K2N2oHEzH8435ZBQ5bUjgF6HWhyB75nd1TXFGFL7Ba9qyEYTCgQ1Gy77",
  "key13": "5E6eSiWjRjt8u5xbQfAkZjFnPKY19FwEBDtScwHJ6GqBn3Ri22wmejYpnhcspEq5PPiPKgjEuQW6fEuLQdHmiJCt",
  "key14": "3rzJoezimirJSJnnGUgcqPMp45kCmHe9gm14nLEcUv6BBpvmUewPwmi5mNvHQeUZo7kPKAJHUxQkjrCThsnXGziU",
  "key15": "Cf9ZWhqfrUbzbUDRPLsFkSaHeZWTN78mCji8ss314Lmi2HwNFPDFZYSrc2rLohuo5v4Tz8nih2mo8d7FSTXvw5h",
  "key16": "3Uq6tH2g1fmx4hFWnX9cQsPV2CNJAFwbrf7j2mKBRpTfSCTvsznMPG7Ziqv94TCvGpsHpy3KqCccYM5JRfPKaZZJ",
  "key17": "36uhsKLmu59pJ5qdeWZn4PNKfyMiy8EnAfqbUMVZwHeDiG1u1j46F94BWY8RbH3v7MntZ14go9B9is3iE6vnxfs6",
  "key18": "5MCFk7Q9WWbPCnFkJTtLaazoNfx2X4fKRwdPwWMyfWQvP3kVqpbruwgqzuRUDQepMjkLh3qn9gQnw6oaHfLoVFXz",
  "key19": "R6k8uyqaGX8TXST45P4tzPPhMVHSA3thSahSNMimkj853qTSYkmVoYdg4zVLF232YB6mWK5AyhCTctVYX9PaFk6",
  "key20": "4JPSZTtTniWV12K55N4aFZiBamAv8ymDFdtSWP8LfCMiQL7PmZmwUrMiuw25nurg8JzhHwpxvJJPoEJHuLxvHvHy",
  "key21": "CoHzGM2gWAXcndSxJszWBe8VMuLvCbLmvooHsTCiKC5dA1hAYuBP4JoFYYt62wMNnrWTUw4cDzXmby1YZyAsCW2",
  "key22": "3zF6i4uUDrQztpK8nSyzKLSj6nw35joz9BYkxpzrJrQow6PeC9dGaKWbGYqyU8TCmZhjsgh9qiKXutz9RzZUxrEU",
  "key23": "3Uh7wNnZTLCVmvVyg3jre9MuCjYwaxmRDpf8avdGFmYayQAe2Y4mcLx1BK3DDHo87xzxzXd7mzvuwFFk6BsjZDey",
  "key24": "3KZkvSMhKKe9C3ch6cqNjADJhb4dnNZ74LWu8ZeWeq6fkGZTj975afbRCVbToM19Hke62Zk9Ppc1M9vbmBPpxvqC",
  "key25": "2FKHpk71yo52D4HnYorp99uLRDnAVYUPtsPzazvQda2hhpvKArjL7NT95cmKhu2knpdLZeUCpyienDrLKtZkH4Ry",
  "key26": "5w8YrgA4SeXG9h6rWrU8c1EiGQ5LwB7BcEhqnLQfYFqr4w4erBLiuA89FjzufJBKtQFikVnBE48an6ghYBVq2yab",
  "key27": "3zBE4gJeaQAnfzhVYUdh3yDXqmJueNfqtotEng8v1Lymj8Bqu4RDTzD4SAzoCMwKceipHyoUrmYFBmfeT63jUzg9"
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
