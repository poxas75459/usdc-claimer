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
    "5japK58RUEu9g321Zbsuj6Y9BFhd2bK9Kma7P3P1rYVnyhgcDKhohttPDDPhejsdYfyTayPSgf1mw2JfDUpexdXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27uQpT13cwb5Wp6q1xknnKxhcuHyMJxzwqsfW9sx6dNQWdsaGJwwJH9LbhSFbsjgTv9ALMtHfLYfhh5Fucz6HXpa",
  "key1": "2EQYDZ23aaxYJUVCavgP5twQ6mtoDd8ragobhMRQUobgf4qL1yjWRSZFP5oENAaELq2xerPraoFXVRrvHj1bq41z",
  "key2": "sVaMMAmRttV6csGeTQaWjhDxCdi7hzmduC6VXtUQWLSZdY9uWhf5nwY7ZBVg6LmqwAPqBks3VhRmJAd4p8s1D75",
  "key3": "2iWKLrFcMb3j4tjiE8SxgLgaW3dang3hR7a3CxCbu1Si3ZFCNSdWXkFVdSeGofQMzncYMCTEc9xhLv379jmmYi4a",
  "key4": "3AVWW1EbnM1EudJUFWxW11gAjVSCFivbQpj5BeezA7ci1s8XWeYp4wHK3Ho3mxQ5frWAEzapaCRB5iqH9DvFa6A2",
  "key5": "2uVtn2Uvkgh1aYdWxpg3wEenkdD5Ps3s1pvDbim2PGyxM22ih41RkWa1WUm7w1JdbAkhj2GPnvrsFJEcLi9ULvKY",
  "key6": "5JGByzdCr6uZRCiPrxc4J1jxiz7duPmQb4zWSmFc1Vb3ntKvnYtcxGTErFM2MwRYdzMwjkXcKhtJZRV8nwZmaoaf",
  "key7": "5fGd4K2NZjWcHBGSakgWXBYKvpAFZMtpUe18tyywRMXhuK5vV9NEB5T48yW7gkX4gApcz3LGg6opR2VxsFvXoBcs",
  "key8": "65JGGdotHLjD6Nwmgo7ZLqSsbnxk9wA9vsSxiy3dDPNoSHW4eR1bB1G2wbSgCNqqgZ1yk7uUrhj5Za7Qmb8gi2Pg",
  "key9": "65SwBjZiyq5myZDgNs2PjGStd6CakkMckUKAMLNBHP6gsJo2FgR5kpcNVq6GQCK7YHCj6tmcpzs8FzjuKofiu68v",
  "key10": "3oFHp8cJptGyaJej2Xky6JRceKLyC2aWpm98dJwNn6HaN3wTmAyQocF1Gtgk4hhLUfJi7t2UBozG5yEEiYydJ39g",
  "key11": "4o8Wx3YMEAdkC1cm5H7881u8eFnAn43u8faKtSE8PLCyhdbe9TBsamNf4xUcdP3bAnYYW1tvu4wZwPnSZTXVbpWP",
  "key12": "2rEeaiW46bdrYyHwW1e1EkpBF659C9rxhFrhUN3kxy2HiWRey35aSokuSr2awaq7FEoixdSWGWc1MuN8a6fJAU3Y",
  "key13": "4Jrt3GQoz948MT63PpuoyJUoYczR1SCrkAuCSnkHj9AGkAc7fvRQgFcP7LSYnBgyRCFtiQQh3ZvuM2zP2CTJEoWX",
  "key14": "4ttNuUQz151Ne8n84SEzGD4rQR14oK2UfTmKGDe8UmRvpTpN4vF25oXCXxt7EXw9qzkbua656i2U9uZWpqQiYAax",
  "key15": "5ZNoQJkVVfga6QYonMGFM7bzHMhGUXf5ntS3xfG3iGz6h3pHWhGvMaYvQS5hwTFXYsVWsqjp74Lve9Cp7hqpJ7Jr",
  "key16": "48RHWLThAVFJ2damQBj4gJoEJ37LEJGjEBksbEPdFSbCU99uxSgJCTHpE1p6Usv5mwBn3YBaYHZDf9N1adDYygvs",
  "key17": "2vX78oNRLsmTn8iheiuC2Tetu2vsnibBc6jWHMLKbSmn1XoUAzvR4Urxyaxit2Eip4hcop8a6UdxnoZKq4Fx8yEt",
  "key18": "2JQX64FdvFhjZQCpouJLR3XUhFb2ZdUvFriJ87UGCnnEZ5gtXwqbL8sEZgJ97xXQYDW3xhpPodiZ4VqTtAh85MmQ",
  "key19": "E2TT991R7xfoZVrvQv7FM9TzzEHf1d9CqMb1W7MCF5oVDtFZeZK4w177pCiaWBgf3nFZvkQyFqfTj9fpQQ5ukC3",
  "key20": "4LsqHoPupTe7ziRvfG5mCsKaYygYMVxS8NwabRh2FL1SzSWoRTEUg62QFFo2DUfQgZi99sHqvozmDMTY69QxdvaT",
  "key21": "3jmR85wKy7mt8Fyg7i8eGVbotmEkQ23J9547S2kxie2ftTrkZptLUcvLaxzYThD7RL7AihEw24ndZbejD2uafnf4",
  "key22": "637PVUBh9ukz99uB9qw8qDAwF3krdDhsqp2xmBn2KoJWYfza2RipfYmMXJ1oPvdv5sJ419oZDusMRAmuRHUHAs29",
  "key23": "2QJ8FvEYqw99FVxk8WT9e1ahk29nWrAXxBwWtqu7qQu6omPXhmLVLrkbUGZHXZQo6to4Wn6zEc5iEkjjGw5Xerfd",
  "key24": "5qyZgXC58r8dsBLrs9NJsjaPtvUzARNz51LUJwULcnpSJjjWH4JB8355VJapzQoQiqbRX7cBvuNaoEprimCBv5uG",
  "key25": "3S4Rob72bsaZ5KshEqZxJ8zyWxEnC76rpBaNLQZHkm5mA3q2rHgQH52e7B2waW7f2kngAtbiYdVaMcMDcMaKAc12"
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
