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
    "5oCQAMFTpbAbczFSV9VT2QQJ9x8usZmHDB9ZN47KhHkX4Avfah3cy2v6kDEQE7grWcEfdZfBLLfqRk5S1Y9xWV1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZxmKAwTEzS1pzCdcJZYyYeu8cQUMFyBWT4pdVt561BBUkYHSZDjs8ioTBPGtGUcC6joYwmrzq2cd7CLtKLfEwTd",
  "key1": "3oeoLUGuvdT9PMSV2qwFYnDfQyVTXhU2st5bZEhNXb9TvBBzR3R9Pjj9eT4JmcFk8HxbX7D2ZZmGpziG64fDoGtJ",
  "key2": "3fYxxZZRdiAkK3N1KooBL6zJ2zkpftJf6Ewft1Pc1Qa9VUaw4B1Ah5ExEC6xZEJByW3PEB8cTfTrQFAe3sBNuked",
  "key3": "3bG2NShdrVmRrHbCzYoGcgPrDB9xqRLtTNgmo4NDQMSFnopn7EK8zweMjKXnR6XkzMjpN1aaVARvZGwS4Fk2L4NE",
  "key4": "4qyy2X5juPTxU8Kw1bJbYkQYrn6JZm3uMm9AtsttgtGJU8Up6coA8ukjjx5gisFojUsgo2BoBTNJWKRaL4qxf6XR",
  "key5": "4uEzHu9ejguf2uWgfr3BYWNruURkyhRKZwy4y3wSx1Uox88wXNzEsaZJek1SJbudPJN2EMpsfLm9w1vMeLEizbF1",
  "key6": "5DCd9EK1qnQzVPVSVxwRRGNhp3QPmymXJ7dfuMKEMhmTJY3uVfe92M8NRaw93fiRXNCSxmwUyesQhWENyh2FuExc",
  "key7": "8LSM4SaP5ao5smmM5N3wjW46aXKPvEVPgb16XzhrhV8oj3F2Zhc17cRBUT7UtMv5XCaiFJ8jCGDNatqhXkgT43Y",
  "key8": "3KjNBjmCVk78WFGRPU7TJnP2N87BVNiECguGT3niT7b3df8Ej8nmec1aye8aw4AK3xmguPCuD3SRLEEtYuP2vfAV",
  "key9": "3drnXzVszBKUFU9R3HnTMDMQK8Kq9Ccm4nfQVfxCRjxBPHig5DNMk7Bu511k9aApGfRXLfGiqKpPKV4SMTBHvujF",
  "key10": "4bvumT9SaRGDxFQQrmRggwvvqfYHxv2htmNoFVR1GtLaVCFJDfHybQShtrzSNRwp1HK5B61N32Bye7anB7aKF7kn",
  "key11": "qcrRFck1FUnyxyMmGPzzDbRZubCS3eiYMbAjY6WjctoTFs27YEMPEr5NcL9XjaWzVAtQSsaVt6ztg3QtDboBxLS",
  "key12": "4ngFxLGnv6aupjft6wCY8WVKUz5nMswVmiKtoTTgCMzSS5eCu7vqUtceRArzvcaKntC9a5TNH21xsTQqquLSp6S6",
  "key13": "2YyTN47suaDuRp5SJoXFniqnLbxgkmi41HRr3EbXWJ54NSpyFjZgbLeYgjnVxu1NoiasjJnVC4ZzQFzLufxy7h9M",
  "key14": "3N2Kb1biJJACVDP2xbfWS1Ne9YVY6qhixzGWHnohiAM1gp6gF7mN7RgXEQ8KzLwQocN6tY12x4fa6aS1BWuoJiNB",
  "key15": "2eRtCxtTtsTWQSpABz42s7pR4BsMBeaajnB3qP96axvdz6WAeRvbW8W7oySCB268BV6EFpY6Hvi8dkeLHZLB3YHp",
  "key16": "2vRT2cXzd8dwoeN2wB79YUhGA8HYLze5nsig4aAEVEyohQNZPPGbGGspSrQ1RcDByEC3ys2JrArPnPkHtE4sG5cx",
  "key17": "3kZCVcgabNPtaBZKAGSpiNXTnF44vuRi8cVCpcHQ52sE612hbrnoRenx7ftbmzbfarS1YfZAmqHdNE9ha4AQuhTL",
  "key18": "33FocYGTAA29cRq2w97xZ5EjBN6QnYQ2aBYE8kAv9jMkCpP9ZaY6pgCujP9WjdwP8p7cQsPzjn5SMxCowgnQCuXm",
  "key19": "5MDtdFBZwgoRZJtwxEzaeqff7KFEYaEDw6VnKtvTWuJxGFNncbReN9wCiBxhz7yiY4DfSWwF1BNsKkJPNXTcCmaa",
  "key20": "LWk8FdCtCXposWJfaNo2ikUZT4fGTfFgVuNrnZFtuqNNVPv9TFBNPZYQtj6Qh4LophLRsW92ysLdXikPXeHMPqR",
  "key21": "5PAqaYYJ95GjibLqxLhcEMxyVUj5UHgqQY4BVnSupL92XQEA94yWXm3BUJKATnZ9BACJp3Riu4kYtHcLWzoMPDXe",
  "key22": "NtWNxbme8RzfS6Uae14maPJhdtS3RHwbbDqBo66gsHtJe5u2Cd26dsdqeJeZKz94v2NWXKogmsAZzyfcucYL8d8",
  "key23": "4zkuFqYH446HVvF4gPjtrq5Eo1jZZhGt425yoFUM64fwNd59vbrDcukKsswK5343owsPfofaCgPwBoK4bRzRiCaV",
  "key24": "2Cmt3wFh4jU6qTXEv1VWnw2p3moUe98MN7PX7YGoo4oAyjdWza8ZAbyufLutkXyMEnLuzUqXWhb57nrCHEXDMJBx",
  "key25": "jdESCH1fTsTGH9gfjt9tEs32dc4pKykZfcU8rGMQiztG7opzUbYQ2QdsaQm2tcpRdbVEid4QoM5CviyY8b5WCaL",
  "key26": "5SmLojiuC9yutjbvRZSyB2sHgSFsApQCT8F6ijkrn6gFtWV38gUR3nCYn91JAjktH8bwoZyMEyNAwzicYD5VB3DV",
  "key27": "5eavg9UpyWQ2tWq5TE2eoiPM9doX57SLPKUqx1BqeyzYxMi3UHt5Hs7zLsteBhxgnZTqFFY7YR9qRGKTYrrwuwNM",
  "key28": "41drLTGQdG9k9QbbpUSaJp8ZKgParoWc8zk1kX848RtDvZD21Rm2LqBLmrnVzbV7JPmesESSrMwpsRqFE1Lz3uRU",
  "key29": "2Rw1ArxJWuSHSQzndfbXTmC3VYztHdsLkDCMNyD9DSWF2SoGhjtG8ceSSecXe8V35fZtHJ9pJwQcK2CR82XKBzWg",
  "key30": "2FrLaG32b7iGGzC8gFkjTuRUcyQGzxtGtTMU33AGa8KbSpvaJ3oRG9NXcLU2GewYqSBh9mtJRUxBf9PfuqLp2Fht"
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
