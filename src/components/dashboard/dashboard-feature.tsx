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
    "Jy7iV9Z9dhk9GF2mcv2WNvMXKVeA6XLtR3a31VrszzdzXQn1jpg3yirvHz7DbmRPHinB1KEFdPErbkkUyJoiG22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46oPMWFshbDkXG239xaKin5qBQV8T99Jd1BN734B5NSc1u6m2VPcX9TAcjQy28CMeMr3rESdPNzrDRDKPSH2iqTa",
  "key1": "64vqZ5F7MUtNXNr6zg12wdwciPGK87STW1gGBSstuz7U1q2yjCoHh3LAnVqhFtgqPru9mYeGqzy1JxNFZpC8d8RU",
  "key2": "2AdKogk2eMTgpqHMK234KEG1Bcdv9wgu6JAzMnFNk3JiuVhxTzFawGkjbP2GPb9j7YpjZH4j7kxLE6Hk5Hb1X9Ne",
  "key3": "5svf6uj3pLfFmDGQ1dzQSCisRRN7QS7GgyZ9op3BQ1nj9LgRTF6UE62VceLxii6jkkFqym34t6BSf1kmY2xtoime",
  "key4": "FzEtqACERYt5Mvbhi75d3ugsEvqryLkwwefpEEsdbQyXBWK4PPav7vzK2sEBz9f7BfCFu9S3d2F31drtPu2EHd2",
  "key5": "5MnJYBPqQY85Pcva1keLqExxCC39b7gVRtcmDveGTAGzEiKWms3UmoWZgjWURisqdo1v32AfaTG29AmHShW32kDW",
  "key6": "4bsVqeQ6xoAQwmi9FHfC8zyw4fj4nkeRSVSZXoX2EFtukeDQfLfhkAY3x9yU7nhzSGANPdmLe691G6hMoNYDH7QU",
  "key7": "3eUtcSz684Ew1JtJxRz5XAKVTGHvAgK6HpguDQpcxyd8j3TEU9Jv7K4RShWh2YqZxSBi5gXAQg3J7BVJ7GRC92k",
  "key8": "3enM7f8d65nVqqbyAKtyjjNdK9Vw93k5JhZTkEsro5gJAzt28iXZmKu37vwXvyBGAfZwfySLFstJticJhk8pzrWc",
  "key9": "282B4SBR591mhTtn6pai5VmwKbtW8D4vrzpJNFWGUXA8xun2GNhMfcgmC6rnPDHpX1DdWBvnprqvkGZEpyYtghqw",
  "key10": "2CB3sYPVWuJZubgUsUVR8MbmR9D7cCx7yHqcuxCFTmBeqVLbZ3sJpQ5Y22zmnnCVwXs5G8zMG6tCKEpaY6ayA77g",
  "key11": "5kvA7ZdWEAdcB9LpG7X7PFTQs9xUAoqx8ao37yE6AxeemEWLGkhL7RQzZDswu5d6LST1aqPJWMKo785ab5UB6CER",
  "key12": "3ufHbJxHtCtAbtb1ZSGnmjYhBg3adN4gPp8ASUwkztgBQ2avnYWFzFVxz1FEVZc878SFMNcwnqQcZJRbYrZFRKnf",
  "key13": "59xvquk2FW4VQ7jBbZYqcmiyA5VyMa7gYRXN8ug8kioxgTJjTNuMFgWeighNTaAM3Lj8CwJKwqR99jK4vztBYjbg",
  "key14": "XRWJzaKMDpV36EXf4kzixbCqQSD4Ggz8xD9D7TPv5SEmCafBWxdP84hzWBv7PqizHtfVCVMMGqm3bj6gp7o5gUm",
  "key15": "2rKEiXTVnhUCF92Ez4VgNJaFaCRyNCQyidxKLQvAW2DxdqDZW3Qdjxhe92J9FPT51AACSXJirXZcA2oBRtjHCS76",
  "key16": "3S2yESuCPm8mFucgEVjMy2ZdPgWp1Ro9R6fP135FjhiduSG5qjHe4XdnSS5d3GcFfGSQo64pAKE7dqE9Abt8BXMg",
  "key17": "ybYFJRKdczFRvLarf58dExHT7Je8kmdTbiC7YmtpBpSCWn8BqsgFdSv66UgVXqyU4ujSSrFCp8eqbS6nK3kpXg2",
  "key18": "5qR22gdeqWNaTQQtfBdjZTcp9ypGEqURs4H8ErvyEKKDTHEgEr1h7nAwhL8HGMEnnuPktKj8A4h2mpKeoE5YGhC6",
  "key19": "5XsGdZYPLJkLFJPq5C28fFSeyADyYMa4NFfpE8pYGLoZkzfT3gRVE8wD4z1iJbMtzASjavgFtScBPkbK4RBkih2s",
  "key20": "5g7DCfwth3AHgWiTChcSPKq7BUpoa4U8ozC2gVqkvGLVoFWWmeZmof5C2XoQpx3SeadbUXTEVWb3FzKeZXcdFRgE",
  "key21": "2LSXjgCotXDNBoqPt36KzfVH6LbtX8MK1N6yfnw5vfxPbjoFxv3zKQnWiqWHb3dLWksW4csi1LAdu5NBp698zDe2",
  "key22": "5CEsz2P4mNoBJZPKZVpxWkzmg3epMy1sbVPL4xxLhR56AT9Qifs5Ebke1bCvDkqTqwDKJRip6sbZgmzo7abZH4Mv",
  "key23": "4NjHWYtaHA7nTXgBVw2AABPxAR4rEg61WZQ9j6DykQ2HqH4q98NfJssLNLjN2aXp18tNXHm4xXjVhbXet86s1SZ2",
  "key24": "1gsY53f8MNkBsDkUPjJdmQtdXYjyQti9n6bYpSLvGneo5HutXPpA5yA1Eg9TZB4RWgFPLVQsjgcFQXc1bHzjshT",
  "key25": "3AiQWE1sY4CkAoc3ej2Lsamb5eHanT1GnsQFVWYHgXojazZnhJdUVodKrChUEf19CBdamEpYnry6t9Gt4HDNHt2E",
  "key26": "4JQmuWniNcsq2Y9TnLo9mnC1NL6rvzQVEzkhGgUPbezKcBpGjawr42v4V6XLnxqda22or2tymub5haXP1XAYmktP",
  "key27": "3RUDWu5zn8uUHad7mK4h2yDvMgdTbkhLHZkvtSG5b7TRZxEXZPS78Zub4SizAFxn72fgh55j798gTWK4P6upgRdr",
  "key28": "38L11CRU7PBnYTmAeHV8rLejWxGyvXJW9QWWLU89XdUoxW229AauAn4PgyBqBbQHhXPxyP5xaK7K7hjFHtqAginT",
  "key29": "5kvhS4NBAvv6BdwFkxrrg7BFo6QKmoWB39ksznDpbFESMfTAdXgvyA1KCJf7tLTRP25vVEEkdcY3ms7hypL1PD5Y",
  "key30": "4i9jBGHqbW9aJRwhJjWppAUmRt5UKaSMS6wy1yya8FoyHgf32aLTBC5dEo4uCWPg6uERfDAmGNqbdsffWnzYhh4t",
  "key31": "3eEKL8mrMsgfosdc5x1KhGD1txCzUZ1ANNV1vjhCiWGVgExxDB3rV6no6RuHyzbXyC2HEron8Eg8U4TzRDDSgjZ5",
  "key32": "wqFaBYpMkp96vrVP6L85sYKqBSmaRj1vGTqN2hWPoBvFTgQcMhtPVhjNBeuB23m5ZpNWtJcXeKfH71Tha8T4bEX",
  "key33": "4vWReKH75znL9wUzz7cdUXNwvUCa16MFe3dwr585j41xPeaF2HRBnNe5LdNq3KWnzhvEcrTBeDTDKu5MZVbKNWzA",
  "key34": "4jLNwAkpBoK9Q6iGHzHc1eqg3oqzoGE7qXGxRM5enPuZ4AKiLmeNif1rtwvoERPSxK2CpjfixwRc7W9bDExnCqRg",
  "key35": "218iv1FE3h1e5UBWRcD45n1f6hMnxeq7o7gDo6QbdmWXUhDCmVJsFwNBPY1ZcywktDibL9GYQnx6LtNHdkR1wYUn",
  "key36": "59qwoJ4t4czjqbekcMDni8MbwQ5494tMzCc8gGncTLoyqGCgtaBDQbT4Sg73dPkZ1oDni4eamMrT8n2AxsTMP1SD",
  "key37": "5Mgj4CsNtz7qU2KVkWdAjnH8JxdN7TfDePdiVdGJesRkPPYdY4BibdhbFkvG3bUyaPxMgmmKt7BVjFTPhnBq9kHo",
  "key38": "5hTtRMfs1xUNiFvW5wdNvdsixWQUHjex8SxHPNcgiHvKNUNmPzfi52v5isD8fgUPDJcAXuNQySxCvWZK4oore2XN",
  "key39": "5EbAdZn26NZYHuBMKNJ1fiUSpD79D7nVrEAqqf9fjGHSeuYvBz3XoCrnCGqRFynHXaV6wRtovxE54QZNGgPU7acc",
  "key40": "5fv5NX2EDcWLKFDX2rBXm2JaYXu8R4CD2EsZBZ198zrLov7VfqN1dVYhywJPdpLGQ8o8dFKzGtLveyfk5gHnvC5X",
  "key41": "26PJK5yBeqcsrWoyYzPPDDg8D2BVmdpKmQkBjAieD4LrewqNmadM1jVhSddXnzJfsRd2aPA3YajWGELfS13ez3JP",
  "key42": "2VSneuuC4AvTwCQuGSo1k6PLRtjv636QdsqBTgrSeDwhjkE7v7UsbcPWoZDZ397DVhXGPocVvuW1Cb9WUmq3mC2N",
  "key43": "26i1kAVAfpoapfseE2VHsDErs5FnUXRmzfKJs8FKrPPEku1tH8zWvCCN3vdMPpSHSxVCgQK2pRfRkkXXtUmAeRRk",
  "key44": "4vBWbGQibAFEHqGgirJLMg42VigG3hDB7osr8YiXhSrd9JmsHGbjg7RE6Z35TcYnMmXmgBA7vS2dLNnJPcwgDgwF"
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
