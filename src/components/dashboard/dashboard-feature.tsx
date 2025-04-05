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
    "5hJJ4sXeCnjaLDBihwXSLEAHBnemRFDGCouHo7DTTaXUCRBifrBbZRC1zrxwQqgzxdSV6MXm8U1bJEAindoVNgyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "675NwqM3vA9aQE21bvJP37SXyHsaSDkScBgDPruUG4oVmrXHBmwhTPmpaVLAU28QZxgnJEefc9dR1M45w4o3K3yA",
  "key1": "3FW8jP3hME8DEx7fBguQZ5tiCWpPXTCj9je9ge4zpwSzDvptHwrvNtk6VhLoeeke6g3A1AUEdQ42C8v7ExjCT6ju",
  "key2": "3Bx7oFib9zCPWc9rmjqskyDrRn3XsdEyXozZ6f1gHRjPciuYyfBAeM8RETbp82BqiZ3YL9gaLon6U4WziHLcEWQs",
  "key3": "3A8o31rhXALEaJ3jmDc87LcZSMgXbi45Yod4bEtCrhYAHyjtYQNyUU8FKVHd3eP5AvpwcE9TDRHCk4M8iEwgMjeK",
  "key4": "4tZntgqnTDDDEjQVGLP2ehVzEpLUNai3qq1wMUt5JJs8YHBmFsNKgDctM3SBCikSE2RUrkqei5mHqVYUFzi7Pf1n",
  "key5": "26QaigTsnAgeViwB9S2z2tvXpWq9LPM5vwq3uAopu5us8d4aoyfTjYUnjLU9UUKPWy3tGRGmG7q1ZXeThcpxjy9K",
  "key6": "ph4rctuHQK1QGs3zjdnZtjgM25A5wfBgsHm7is6X2LNxnA1gjwmLzjcd95L3wtJiiJXFw7KZvs37EhQ7dEV14rB",
  "key7": "3LKKTM8tP6dMePeGxS5BCyfinSFmoeXMjfJfB15Ygdx35oypuqVSrYFyGpasudFnV7CSEFvG2w15Z8Fjcuca8gDY",
  "key8": "5KAgwGKGeDwrWihGKKDMSAme5u7tuduRBNrHQKLLoTWncKmt2qrnhhpcVPS76D9TNWMgZcMLWJXCqyd3oLfd1gUD",
  "key9": "5heypKfnpzPoKj2BXPHaUFt7W4uG8WAjQaJCNgGi9QJNQL4vDPzMBcmG7KzJ79cnJCsDMM2BEfyb311kH2YKZ8Lx",
  "key10": "3b5SgbV722Rhsd8Gt2TS7MQXhwtgPSVndG1Q9EaFgfLdbyvDUoSgNb1NTk4NFRqjAz2FBnHerXuWhhaBE5a7nsV2",
  "key11": "yBcyNZSYjzh5BH7SVTKY94ge8mC5NdwHe3vQfaNqLNeNGWUE2VhM62rN2dQTx1FUges99vB2jfbtuhi31LHJ8wA",
  "key12": "3GiHeAsCoQPEFjtewkquuHxNL1mFJ9f475CTkN2S6f2fqmMLWaXmkBCyc7PVK1NweLgZcfqKKYRZqzuihrsDfmh1",
  "key13": "2C9jFiAXzWn6TCVzUjKmpMZoYRv6ZGBtqVbQrohopsh5qSixgu7EJ2wi7mnzHzCQESEwHgd195byrcXdR2f2Cvh7",
  "key14": "4EZm9dJKCWWqHdNbUutJEYqVPkAyvwLXmcMWio5FG7Ss61vuWBHtv8RCu7QPZS4t3dF2UYo6uVnAkFzqHGq4kryU",
  "key15": "HUH2aUaszctiZWbokthtq7P2FNpCwvWonJhKbkDgzs8oQrpZQKzHKzrJG3T5FwTByvy3CGF7ozGvPcdhc4pEDXA",
  "key16": "5Qe6hjjiynuYfRrZNRLvhXbWWiB6uepB1eMQ6HeY6VV3Aa5nGu18Fsk3ZnW2hAe14whDoDDryLQ45oFXSYZzwb7P",
  "key17": "3somFamgzUTeAWpn2JJcSuPCD1NSLLCZ6ZpnPAbYQLdjEc99gSUtk5RsWhC9kMa45TPaVjL6CpH5r7jk98xrD8WW",
  "key18": "2FtXkyb2wsM7PLgB1i4DjRGFryJEe7XXCiVnYAefY2GdMh7Gt6BJCBzNYV3BNnuzWLktYYM8yQ3b9eNxiUF7Jjxi",
  "key19": "4ZdBHVm2ukgdgLAJjLYD1qQRJW7B8cweaVXUdtaAB9Qi1G1xzDy72D8aLcnXjad4e9zby15VEZFUKHgMqfY3u3j9",
  "key20": "2wsQecCQBmrCzthKoQeMrHrTgpHCtjWuowV5H1Ce1P1S6cEU7ziLjUR97H5sWxPMWWdJUEFGseu29wLKonJZjksJ",
  "key21": "3unF2z252deYuTFKrnm2J5n8RfzzMiQpnaxKqnBDPmAgAvZkyG95aBvsTs2U1svnXtnNGanJzAPtHUAuUxJvukQ1",
  "key22": "33LFucd7NqjvU6iXnDPrjstHSSAJjbDmsKYDnoaL6yvVLHF8pH5ydH1p8kxzwnSK53H8eRdQApgVS6ahHjGNTLed",
  "key23": "5hzaRaFgafmjmdQqH6M1A8rvTi3q1jzUt5Lti5pGCXnzYud1HM1JZ9CGQbapbuEiPC557hHoXLQseBiHSVp5v9LX",
  "key24": "2dTU9dEtJS8hn8wJ9uememq8VfAuquTrgTVRAAyaUjBrBVSbk46xKBenpe8NtNuAcHB2Z3HsGoCTyGihiWEuGpiQ"
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
