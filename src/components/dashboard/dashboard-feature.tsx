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
    "23iGYZWE393PtAHxJ1KuSWQuJsX8SPWoKdUwR4sMQxRwspg4ujeybUQ3djm5Zu9EUMZhqL3qu2MJMDceeesK4xpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uJkHz4tBpTbGY2Att2QXT6rWtr6aY316UELYHd6vXVSVECaaoQH8snuK1fH5oEvuCe7yNsjqP8nU4ouqPPyAkQK",
  "key1": "UDhPDEPeg1wWyqJovrjbMYUxKPQUpxMwVe52McNSdSurd7c2udQsYVXnGr9gtgkaQYMJk7TqAzyca3anHUvLYbu",
  "key2": "4cc9a3Dv4A8gs1dzMMyVkCpaC7zFFQVRpDWhouTsLt1Pz8Hbyk4QA8aasw9EJoUCJcYWJdZjTAUqUjL3esiVtn6i",
  "key3": "4tmbFi3JmMfK1cuNMSrsSv4B51dkdT1z6ojfbutFXzhrpxanE9bWjazyTKkxH8LQqWSyW1B4cC7vpc4jRH53hket",
  "key4": "4y2ykN6rtv3EFjvdDzEhr8UqS64JVDipBNvNJPGawRciwWPJKaNDVy99ws8ZNRF5avYnJ7L3WDiiFcqWAkVC6Uvg",
  "key5": "5BouKJ44Z2Wx1qDdeUQCyFe8DD2T8KRSbFDBcL7PQXzY3q3o5bwvZrvmRuLit8E4QLWd59zXBGnVurQb3Po4U8pt",
  "key6": "48mZJQ38ctiEeA1G18j4HqQ66fQMHQjSQvU6VDryBFduFxZ3XX8yD998y6Kch2u8WYYPPMfTzGqDvM4Youxgp2tu",
  "key7": "23SUL3wpFq6qP3ebjPH35xoM6YKycqit1m9n3iMxCDJhqN1DmEmzZ1qPS71dh8bCSDyXaaBq7AhrbFRXzekRPSPb",
  "key8": "35zPA6f56afBaQ9ZQi4w2AALaxkBXHrvxHQ5u9tPShs4EtCrr1QuT8tgrdfn123midA4Cv287hbpS2m3Bfty7H3z",
  "key9": "4zX7HmkHfQZRiNjX5pYrHQuoHXtmrjTVkrv1wz1g8bEm21f2D9hNY9PdzA4fbjpm6UHSnPj2ZrZxmcBr9cYfaWJt",
  "key10": "5YMzMCYHqVZwGFzfWL1H6BCobcH3CsoNF3fUv64b9Gig4rDPphJTe7wgJGD3iwCyWWRJF2GASoB6ZuDBs2b6Y4z2",
  "key11": "3GqbeVgmiLddjCpsa7z6UNuvcRaujSE5JQbM5pWDeKUgngjqiAzFVB685GHG4Uud5vUARUc9rckiEqMYdJ8swzkf",
  "key12": "5WCRSxf22Jhz3hXrpiPwjYoojjfxXiiLUo8zcABPxWqy44ukZepCnnJejkNPrAo9meoZ7gUL464axUgoyaJWqwoq",
  "key13": "5Pk4KvMbWM68PGFrZbPA45tf1ExtR9ghhqZnZUGmGdWgDTpEC6KsfZGhuSrTR323TN9pkWPHaDBdx7khoso5opCA",
  "key14": "4WVjxQCBbbJ9KFgAbT7NZ3jd9PC4eFX2nguRDS7eZsN9DxYtQimbrDF8a33uJAJCpv4ei27H9gN2Rt3TXxC9Mg6N",
  "key15": "bR4nq81Rrg5PaW7ySgW4qi3GczoCyFSa8gdjqivPtY98a9UZtUfU4bEGQVkhGxvzYKfLJrCeiw4uampfyfsehzf",
  "key16": "bBczN1qC2CGVkPr1SNUB8bNd3gPQUUqqoEsrHEi25giV7ea1Mq6jBBzKWyr914Zv6rhydaw6rDPNcuaChh8LSJG",
  "key17": "5c18Yvbp7qhBuzobdq4oYaBsNyj9gwZX2RqG6oQSus9QoeFpS7GhwNFEhDqwWFeGbUjGkNgf1Fyv1FR9oNFiEyzZ",
  "key18": "RCLdNhXff2q36vcRu2SLcayyL5CvdaZJNdjM5CWeQ26XGBFyRbCmV8mqdWbSakBpM2XyfknHNGUU4j3UDwaA1Aq",
  "key19": "B7ceGap4kwX3WPkvdJFxiMogdb3tB8hUcYFMK1ewh1bTPDfsgPhrCKbYiBgTBsuZu2FJfpo9Nrfsa1iHRAnWEpi",
  "key20": "5RzxcA9gxd4G6ZhAjpzu9WnLRmjzpatBRKvAcDanw5stxGdzMHfkC8rViZ8oipbC3BQMCEJdCGysmGt7Aw8UVxi7",
  "key21": "62JtKAzUXtpnHGAYWdXEmWhUynUZx8so7D3fWqi1WbRktjqs8Fyte3Kjnw7Ju6juuSPD1EvFWmRqGLxKHCuw9oJw",
  "key22": "qiKjm493s5N1zyVjc3RUUjQHJi4wPpjvhP7iPxee14VF7DZFcLTC4S6wutXUmby3NPUWrpTSN2bvxNC5PSDyruJ",
  "key23": "6KAzjTURjqcwh9n88Dn9Q21jd2fUtFeEMbaFygEr5WAjCrqZekhabd31GibHETsPCUYHFoXxoxaAH3McNrycVd8",
  "key24": "C3GzpAQDHGbELBL21p2L4BnLkh6XCzA3Q3t3R2w2kDY2tTQPXijx9HHKxp34jkEtvrMCoqGa7u4zMLPGRyUB3Fs",
  "key25": "3oa3i5k1C8r5LgoZKWaLTETq7iYSjKsPT3UJ6KjUiRsR2J6iE5cyhz2Y8cwu13sY1a44uVRhFtLqSBoyTaBtiC75"
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
