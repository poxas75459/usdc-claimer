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
    "55ZievoKU7SHFrfWW6PmX1ZEMcSNLnKmbuJ5XWG95x8KFgPkYYeRRkYf1RQY7Qh88nFeQCw31bDMGFo8YgF7xziC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A1MLvxeFPocpbTn1eUA3YrT11D7eSSTQLwTdY6eRvpnzbCn4qpMhiMutbsUVrmhcWC92pC1eEoukZSPUZRLNgTe",
  "key1": "4rKjSRr2jf5LezFUiCHcyLF1nGx3RFdJdhvGRmmTy6fgpbeCrGcpz6MDn1NfvmoYAGcNRj9ydeBVBFVs2aV6Kr3T",
  "key2": "4wcgQ4WRCKhcRPEpE7imbTYAJgYxhA2W5JSDLZetCE2t8oF7bTPGxwH59SkPM1MzixakBcDy9dKxRofD7WGK551L",
  "key3": "5GLapZu6aFTBR9xJTbjmFBPTyAfhtwjD2NUT6K5rWvPBUudPz7UCqPmFvWFJrD5TwxPBqKETNRCpHN8RbQaqAU5r",
  "key4": "DJd3Wg45NWLxrvQARi8rFvtWx5gcdUqZpfcU7FQcZ3EXL11qKpcJdq1wL8jERHE3rrtR9ug94KKcN6rjpfDDHjT",
  "key5": "4ktNRoxZmK8osAqDAikKebEDjWsWk8FDodoysW9zExk1qgzKmgZtUaLKdDfZ2HpAM2B6bwjJQ2J5AnxbYGB7sJGL",
  "key6": "37s8NzeeKFZtshCwH8uMM175udCRtHtvmNsZq7H1bmaARP8ufqjJhKeW12Jdq51ge3Hn6Nk9FGsx86uNgWTZ1wSG",
  "key7": "3bPxmMq5VhGJtCXaqdPoE6LmzFKTVKn6mPgTb8wmApXwwomFz29odZWM9SbqaKNWDkB6g2f3xgwG9yu4TFqW5tZh",
  "key8": "2dPw8HEKHrjZtYTyXDAgz1FXZNZNTgVMWRskpYfhinofviuLe1XhBvTW5Vpd1MG2uCrjHvXDkixqMq89WyDHnP8n",
  "key9": "2y4qJvVNkBggNj2s7mYeYK84gmcxQWSBCrcA4ntu9K8pu8sGQ4soajJD3aDKqwstzvpeDY6HqQVTzgmRhrpbqoXc",
  "key10": "3RdDzLCvW1kBSpftgf9JjLLJf7KwVnfTo26RDTDSnzBaArRy5yc9UJygvyQ57SqByq9c4bKPtcxdH39WufbtwZYS",
  "key11": "5LEns59MtTVXFA92fDEXXWMkZJnYMqXYXVFm5fLuEw1EkzH7SQ8rvndwpgf7LFLSckhXFRgD2TEHcPJftoKb6DCL",
  "key12": "gR8QxzB13xPBs7rhvrBZA1kb1qedNnsHB8b6EicXoqyMTUbx4hv3k8RJQg4FeeXjXS2V6hkBdE6y8hMXd7WZ8DL",
  "key13": "5DoqnEnua3CqRyiKymnXr48SmHgrEorVoJQakeDoZia3N7u85vGPE2M9U1t7SaFJ2dVvWLvqeRTLqibG1opeajbo",
  "key14": "4nq2hk5b8Lpm1Fdp26bZLEd7CaweH8p1sh5kva4rssjGWrgzAgt3fSPTHcx7k8XEHD6hxhvwcXXCSCqTeWWxZHbB",
  "key15": "27fE2fAzL2iVrM9z9WF1FzLgkz3hjbFmZyXsoYNVmSgpNv4aPGC2krwcx1wkSyJhGChNPTrnqqanLrcXM6Zytpvd",
  "key16": "5ujNo5suFzWqdHuSpGgdqPiUcnSjwJFCW4QwqKZ239hnToKDn3RvqJpavQPAKaZnz5cMoXMiHP2LpDiLTfmaxf19",
  "key17": "5XXHQkBEh1744zaDfrv68MtrHVNPzLLAg9K9dip7p6QWcJesDkjvzp9SReuFK2SxFbbjnYeKWNakaLT4uaBSQctH",
  "key18": "43xwkMiUMmBi9rrwRhwpwCxrX1wvT5f1tjLMJcLUcX52WhbFLEA5TL5vBJwatSwX6BMGvMegAj41FesmsrgipcWp",
  "key19": "3D9nhfBAah9dG4qCXXD1WRWu5XUyKcQ3hgXQifFDMxdh7VpithamMHP8imyroB5xQZkgvmCbGjeddkH6AdByqRRW",
  "key20": "3wCAJWjtooV1RotJNviAzZfXgiFWzT9X2Q2813EvjHryFDZtSHTsxFDaqRqZ1DTvvRkwvXNEmJ9HnvJyKGJnVx3o",
  "key21": "5rBn8koYXErxgrsGNwvExZpEWaq1qsUTammVsihFRBmciaFj8idD6iR53iDVCiQuBuxPfVZ2jXiuoYFSAYGzzr87",
  "key22": "vZ1Rcy29dJt32FkJnWScnKFZJaXobupS5eDdwgCzr7wddnbPQQVdLM8fdWzNHBsPYWv2CZGfHtEDtRNLjzwGBqG",
  "key23": "5ZezLSquwCWUdHAzvNDJXvyN13ri5VqWmieDtPRCYuUsiiQML6pxVMn91DnKyCKFeFnMvb2P8RoQh36AnyBHf2wR",
  "key24": "5YjmHyFNLNSQhWyq6riGSBNL3fG8mQYSy8kfkfNAzfQUWNEcc2ZX3TezMCaymPydbB2Rci4FJcAq8wPDfPwRw1GK",
  "key25": "2Vboh6oLyRS8LSTjERh1cheHupqgbxD16g1jFfEZw3WcpzGvfopma92EBG5JYUmFudmwVc3JReDhqrad9fS299Y1",
  "key26": "4B3bVEVmKmjPvYvGHyV8v1w8SPVQ1M18RuHXueZHASyPperZNhKfTzHjRngu1BPmBB1Gf18orrCY8ukRaG7qVjHn",
  "key27": "WMm2SByFuCRRFCyeansjNPX8R7XhxK2f9Q4RU77z5jiP7L4T7tQ1xtTsFKVTdaSZv3RLMSYfySfrUwFvksp7tvR",
  "key28": "4UPz1DZxXgiWDJpomwvWbtFHsqs6TiqyyhaWgbY8u4R1tiDALXqcAKp5xLG3wvofp1JuMdj5n3woTLAyoq7nBrnX"
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
