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
    "4Yd2W971W7Jc2HLikKwW6f3VdJiGrYMVkhBEs22KiYW7AKh31B45QuvwoAHagE3v7A36jxjbbhXWDuhfYgE2sKCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58MXY9b5yHL9MosBCj5LfGphYBhdDU1qbKPRs36YF7ndvXsyp6xWbxevV4B3aFyQc2NSVCxea55WF7HXtBcEyaiD",
  "key1": "53HmBtVQKB2fJDP7ChzFZ7HYQ4jXTavHPdaCTAaMTfawJcGkDUJqT3REK2cggDuvdtDmbEijsxFqMPMWUbqS7zD7",
  "key2": "3SWpqCM9RGVnYVgqVJVnX7ES5VcBxyYyw1EK43rgdqe2MWZP1gZvQ8VSCHDp4eNQ1W6h1xK3BvdD2tw73g6xMWzm",
  "key3": "31irrsPes4VUkiMptKaRNFiPSn2apd7sCJs6igUa3AdsMTdKqoCbeefXWfFPKK2Q4MsXyARKpYx7bwg6N2pmnFM3",
  "key4": "e1ZCWDe7ABgTQqkiSkmktYj1rgxRDbW2UyuNrP4rwaGUixjRgWxEbz3HcGERK5H6r1eQZAGGcQVZAGEFwVKqzHZ",
  "key5": "L7wU4VbshebVkrsG5zjPYr7r9thgknbFtnbocXagDYsVHXJUfGrryXjQsVmbwPFT8Vi3xPvvuAXfERkWU4yTwRb",
  "key6": "2cpmumPFrV3TF6ckSnpwoXBqHfV2E77zJk4UuJYoJNtdmR9e2fenZ4XpF6igAiH4YSYAoNDHHLGaYKM7XTyafnGC",
  "key7": "3FnJgqmh883YtgMzdgYw2FUPSedvCh37qKZbemixeP74uduUJthTLHJnVJTNbwyRXZEHxXq29MYQq6xBh8dkNk5u",
  "key8": "4hpzngX33eJN3StmjZ25WLLgyuVBUDznU8whLgr3MrBpQ4xmBF1gkSWY6KWvRWvzuswYX8ZT1xpkT7isCpRhSYXX",
  "key9": "5mg6cVC8uuTn2bGFTfMM5Z9UN7HWGTdDCrAw2KGJKHBU9BA1JTUxqDa4Vkkb8GCNGZoqP96Aswo93HZhLSGzyuSj",
  "key10": "4BbJ9rYMfm9z6sxc8caeRwnwV48vwTficYVy2MLXuDvniJd7M65dR2QE767ziCNjwscFNPNLr58p218kyT5BgyGr",
  "key11": "2vMkw4UbPxp1B19qyUiUgdye5E8iE56mEzN9AoBqovNv2fxnWzpht2TGo1AiPdHydby143V4wyDp69HqhMm5Kva8",
  "key12": "3dnYFii2u6SjmAqQ3mt51KUrV3A5n1psyMKS5BhJuhoFjGueQ6Loq2W5Gs8CcQgdk2MYgv2Mk52fudob8HNeT6vx",
  "key13": "63AhcnJJXudX2hq77MJKt1G8qk6jEYEF2o98z4QR5QiWWgtb8X1qBaVDVFAUSeHpVEvKAWi8p6fJRPXNyd6hBmjg",
  "key14": "s2KvofanBv9K3BmFYw7vnp5vuSKcnTRJW75ot8QxmURkhRUGACxDoUn1RhxJ8rskmQgEsHoDiwZes4Bf6mvhMEd",
  "key15": "AyubjPh8VZyS5Ms3q23c5WUK6yGDfxTr9ptZ4fHhj5PA49W6UfzeHMyPdLMCh33UmPYKDotrMJRAodjsDNMLLbV",
  "key16": "HmMCQBL1Jqshm5sEcLRERz4fqrfgBQAXur4K5jQp1k7QenCKXEqU73WLbCd3EhfzwPt3SdoCYcxV2z6c5CihT4n",
  "key17": "63ESnedA9i9dYdg2pptQdvsso8fJYY2Heqj2XX1ENFP7Vo6oFa3hcT4cnh4pVXWDWamHr4cCmzYoPpRYJthdrnaY",
  "key18": "4rycKvH7UvugyMqWbywNcSktWCQypA821GiTJLc1neRxsVY9fkYGivJh5fPh4VCv7NRmRik1ehprRdmjp8rBPGr2",
  "key19": "4pqYqtBzKhTyi8cv9Vnv86m2NnuAsbmaueCow4hs7eerr5ke6NnWJVnbPpsP6u1Km1EwDzwhgGM1AjLenPYU4d18",
  "key20": "7ivUfdY1pmqLSfBU58gmoXShBSFRxBEjn65V43dpoy9951kSuoEXXuNp8iLKhXobcaSQeUvcroM4289yR3BYtDg",
  "key21": "5tZEU3Jtjahrb9UCbVnUEceRicSw5if7JUbQbeNK7enFfkaWyvqxkDcfKFqnmLdYS5aiwJAAafHsaJCytU89UxkB",
  "key22": "3wUpY3ZscmHW1KAMhMeYpWFCQQBMRMTgdCdkFYk4u3ozE5s8oE9JPJwsMBsbzD5PUduSPnzY6AnV5KJ2MaQMPL9f",
  "key23": "392Aqew7e1xmkaPhasfyxD3hsLJgaKkW6tkL8EPKB1fFwYT7XZ1FSp7spqbw3fQwYjrPrgQepVut3Jf8QWTASg9L",
  "key24": "2j4USnPxtwzxLn45u5ocQviv82QTeVHNNQu7a8ajjpBq8jVadzLGByuQS5NGBGHphyyyymsdvv29Pb1HRxJSqC56",
  "key25": "6ppxZHWBf15996oWbmYB7uUnFBhroFAdDFceRNTaCqMrimK25HRTnGzbnPCNsaFMrBB3rTQebr7RKyGKLXuCPnu",
  "key26": "2BveqgAmjpTC4wgAsT5GLL5UFZYuq3mUGKLeL8dvJGvD814soUecnLVhh2LZXgZL3R7f5KHSAiuCXoDDRcrGCPeF",
  "key27": "3fqXf3XYDyNQuTGwS4yBAEDNuAVgKBgGCGtA5pSRcWUCPuobimgTW8iJrTpfg5PCrxQ7J2sFhhtpxH5BYdPVe1dZ",
  "key28": "3PqWVNtuYKhKdmuXpWBkEM9YQxddoiVLEpB3ofaQxpNRyskDFGow8G29T1spA5pUYCB3EFzsABfWEmdSdzKnfWRu",
  "key29": "31mUQ5gmgq3QEYEAdds76Jph6z6X8fE2Ge1Bp8TRgxYAVYjFzoXHT3wUfNjTKS58wTwKg5648QF4D4AmSGcMLnsD",
  "key30": "4sp1vT6jiLnMq623usXHzv7yrKxKrXnVEFNzrxhSfQwdCqviA7K8byuDcs8PoREHgvRLd6rnUeT5QVJnVS1oanLJ",
  "key31": "aAW3Q3KwuMymC7NVEKPzfob3SzRqcQSGPVwnqEoutU3JiMG8rkZSYh23bibfWcn76PDLhJEpLDpbx4eD5VDqszh",
  "key32": "5iDL2Eaeym3kSEByv8VMrBjbeEQnPwnmNZUSjCNcf2h5ToiPUpPwPioryMENcMN4i2SJHq1hppud2Rcd42ngrEKy",
  "key33": "8YZUKDzySTtiWaqEdn7puL5161gzDP4JJWmYE6jQuejE3sRFnAZuwFxxxgurm5kv4s11RjUZ2ccGGSYvFRcV8F7",
  "key34": "5n9bveEizQ1c35sfagXzUZCH7d4bQ2Jjn3L1aZvavL9jTj1jQ82Lki7y1suH3JarERrByr9Vua1pbKqrC9K1X5MS",
  "key35": "5MPuDwTxzp47Wi6QMyuMcvnZ9uGHHn8DDfNtTXgiia3qhmhD5xf8s4oneF1cACF6Higq72o2rPYgPjK1mPR9DVMv"
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
