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
    "VdWM8knqwFojBz57S88VwGbPHCTDD25PBBn4Qu7u3he38uGzqs18PdYuM58SRStFA8wbVnQFweMACNMASABt9Xt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RQsERKVAb1HF9Ube9524csqDiYnV6zs8PNT5EyLHqLa4dG98viSz9dJApVHAEHzyn4zWN5CCDAibsGCSAFsAGNj",
  "key1": "5fHnhP1RPSiMWNy5Xk8d1JKYqV57tCdsMvbBYF313P5KKXrQtTLdCQBRFUG1nMWuFYPV6LVsASSiLYZGtwYmA9Lf",
  "key2": "5zxRb1Hw5sukw2upY59M2n6gP4dWxhiYK52pc7yQoQy9Lx3HbfmkbusfhbiVgf4cZR4iZXvyRLvCz8M1aniZFUTV",
  "key3": "4FmhxSWdGK7SE7W71mjCNbBuCFVLm6cuk3sUgHDipUAWCgXbXVRc6RUMRv5GZqPu8VbJ3ug3DNyat3XNhDQm4uXh",
  "key4": "4bkTbxbzyo52h34Pc1G4tUi3C1fTvJe4HtQpBQwfdCCQb5tb1hDrcPwWRFHF42Y2kRP65cCgdTijymEytRkpeo7M",
  "key5": "3Fn1ugyE6YtMwi6fTQS132aqnfjr1ZdbWnCrdaSLRuQGCFR9N4Ly3p2mYfRW3fhhGkEADw1UZYfSj4pnJ9v9CB3M",
  "key6": "5DmxXBRqHwVspTca3TVoyegMnZkcYdCNqA5cxLiYoWwEeh36ni33AgcSxTbwQgcN8VgeCBuGtANr7r3VQWtArZ5y",
  "key7": "4fB8R4oPi8eXbLMehvpTzQXDHscTuLNcyYyyPC34MTJu7jJBtAfYE2dhA6XpSTvjYjYARAG22R38x68do7wu5wW9",
  "key8": "4SuyuLY2t3oAPvr5dqEu1D4T4wxPrv16mGeeeg5ZrA2jybixUpNxuQFdh3U3T1BKLGN4Jen5FZ1NH8fjBVHB2JV6",
  "key9": "4jPsm6BaN6mnUKZA8moDPyvrcfChxSAKqnPoN4MwK9aN6ceyQ1MKN35dfGWDzSKV1LJr6Qv8BGEetrTvj99Zf3Dm",
  "key10": "nh1Q4rACYauvSt2c7McSY44nFhZDFnirvZX2Uw6eJFFRFbPxRiNkAaF37in5vFtk43KmJdLC12PTQ9Wt99NR4wh",
  "key11": "nZ6cBeQTYSgsd4m9o5eKYegtKLm9b4uddZmiqRaoqFKk4btBNUwHYZWJ1TxkfvWUKUxdyvGr9mmQQa4gxRQmgDj",
  "key12": "5N3yaCW8KAygwaBR8hrfqAhRjNbHJf5ruW8EFhKgpRTgQHWE6xrU1rugw4775etUe2Z61g3VSQTKrNqVr5bS7UVv",
  "key13": "5T2dhcwv3MrUGga9S32tSxZWrqqJLxmNENP82Qw3fS1YecwX3T8q5AA746KtS6J9xXhA3hR6zZFrTDfpwahMweG7",
  "key14": "U3ptxEV9VWC6HjmGjTWn1adH385eXve6LbQa49gNn79bboaTic741oytKLXgNr4CcwZQ5RQjcptQ6B3UbpNDXVf",
  "key15": "adDCv4H8KNVt5TSU45XAbZHHDCFsrsexxwybQa7ZkwpqeP9CNwYf26CEFgQss92phsrk7h1md2mkHmEUy2AyxsV",
  "key16": "49GZyR9oVKMabNRfsH1kBMFSv1Vx2Con9Qn3q3k28Gk22ghC7PaLiCrX6byXnseySTdZKq5rgyWNHe42TGgARoxR",
  "key17": "2TnfrVngEvPrfk3qQTngZEEbpr83cfGM6rJwjJRCB4bJbeuzkLaxp4TTzfUwJzK3jywuU6doPt3Ni2qu46bW9Mc8",
  "key18": "2GqjiJYMHCH3fVdC8QzdUGJCvJ7VjPadXjHSRsq7Qtib74BT3kCgCZzDSvHXqQ2SR48EvnEZ1kYahL1kxnhvQreY",
  "key19": "2MUr84B4RaHrkRTH7sPNhTzGPBnxSgp7w7mS6g3ZgSD3eroNUhhmyffdGr63yMPHSapaEZKQwSWNbHL5eup6gmEN",
  "key20": "RmwcaXPm73cjvWNewgouvWZB9LrJNRoQaAyZC4Ks1UAsHF7BBZd9APmjxDwddS3bCVC4r71jNiVTSZYWhpxgYDy",
  "key21": "2V2ZcEhLcEYL3XcUsaGk6Xku3EHLSSW2ktkq22YSWwierWT7fUF8iaZqzAMngH5YzhCeae5Yu1T1AqqYG7crC8ei",
  "key22": "5Fm5kCL4S7Cq71gCMmKRTzpER4c4pH6mupfDekPrF2UaRTbA1qRFsuvcw2apMLYb8sfMGiCBCg1dXmFxGm4sJm7W",
  "key23": "29Vn2vAVJaZFSUjBy6STQya2pTHQnQoxXUrtAwikRuuQe3itWdbNdDfG5Upr4mksBEiDiZhZN4oMm6CFuao6d7nE",
  "key24": "NfPgLY2EMUXX63EBrDDB5VCuykommyMJEyMrrwr7DFwxaoG6JB8avttQPVfkWWiQ26ooKNF6J1GbZAkHirrVaLY",
  "key25": "3EaBAWuB1YXmiAYL4PrPpDbCMEUvbe9r5dfXEkdQJ1tQXbZWCV2gZgUnfw1CTvF4AnR2Ss9cqvjYMxm3FRok2Hfy",
  "key26": "3wc35QfEAKek7T1HWTKAZyBjiMxVvKohQWXz1a6BGPgqCaoj4gn4FnkFJKYg8x2PhiJAr3YZRGCyZxfujAMqYZWw",
  "key27": "3ekCYN9BTcBPTZ1BTjKMMZu6YhR6f4vYbMrQaaVSG36hmMAhoCWMSzt8MK8YspXBUWnnCsqJDPrumyRKbpKRPopf",
  "key28": "QqFV1AuGp8n1WiHjoG7uNZuHNno9eFdejsKXYLp7sokTFNKaBzKVP7kgE8Jr75f5cBwivQbW7CeXdhgySna6sXe",
  "key29": "43TWk1SCqU9HgEzAmG2ueYHPFa58rUtxA6joDtgybxzm8TXpuB2CZCTGFheSznbaUbncaH41ipBMqHi3HPXsQsRT",
  "key30": "3G4VzVZr53YgKjZMc7suu6tyyf4X2xP6bMw4Ue69PCJygNWgn5CKuN5khEJ9wdKdKuURBL1bssR7zGody15vcMvf",
  "key31": "5MVZwEmzukRRzemkmDVo37yoK9ACsGSLwdFwkiWhXUsDgKnp8PJR1T5FHTjynBeeztAcH7waidaxNEXFC1VRUfbE",
  "key32": "2CDGBFiAvhueBDfJGNjoccNuaAPUdZpPzkWt2hB7CChQ7iY3eA8NZ1aA9zSpfFpY5YuK8nnHLXwUfhki6T8yxRSk",
  "key33": "5vPQB3ysZGcwEyRhXDYmGqnNwXaB1ACf9EXKYzHfXT1jDKCz1wMUjQv6jcyFxv7TDMhNuZSJRYCKYAKukRTc9RmL",
  "key34": "4k7ekxX9eny8FfZU462WUbiq61bEwPhJEBApiBjBkQxHj4TJ1twvA8W1YxuiYKckPVFRhbBgWC6ayi5FhoBiCcoM",
  "key35": "2UerYWiccxbkwQ2LJZC5weNMdWzpWRKsESjBdib8Xai9NY278JD3kYBs8pZmGAc4Mc5L8TeLEiKyYksLtZRCZrjL",
  "key36": "4Sy1pgSW79AxTEV2hP9RE3xeUdz34BTA8wBeLZusmQShqaVAoLiomLd3tk3fGML2FbHtJ6yb9t1wvQuBJKrrTHHR",
  "key37": "3zb5QNVCyLKvudo9xqphpdpcpRBTvJYirud1gxb5G4BrteGKKcmBHkawszmCfyjLraSyzhRGHBpt86ecaBSYYvZH"
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
