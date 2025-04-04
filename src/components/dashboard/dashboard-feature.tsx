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
    "2eTpbjnDKFEMQCwkmnR3SJjWe6H5F9NxNCp4hbMpPVmrEqMohgEr2pVqutwqxgdKsu3a1UZfAhBMA5khF7FygWG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CTEBmDPpL5MwTSRMJpwsdw8oP4qBuRzXVCaXLY3BhofedLFgUe4T3K1nd9TYLzgFaXgC8vGfRLpa6tnLRUDbPRZ",
  "key1": "2DesADtq4Cs8UFU1NwcwCTLZGX6914RcXz7LVKNtDUNGE7aE3TzDh151WD4mWJ3AsqwzYhQnJUJumqSfEJsVu5NJ",
  "key2": "2ddqwEYq7y79k9BXdU2p6PKvJPZtwD6oucrJhbPpBhqve6GT1KoXt9fqgNdtNxqiE62uSuoRAgxvmbJBm2YmWsyu",
  "key3": "3wum96PzxHqzrWn15fE3CUwuyU59AacGvqKhEC9J1SxYrCsYmTmKYxpkfWHrmFhqSA33sc3twHTaRRV2gAn6726i",
  "key4": "22EUr49DYa3wXvDRsamcgEeFQcXrXATkodMyG7KWmeb7TpMkE5qY4CsSVVczD3efy7ezaJPcLiw2FXZqkiJ6KDBZ",
  "key5": "5fTgA52pyxXghxyb6ZFkPRe4G8ZU9ZQb1X4tFsRtMk4S5ugR7ngCto4TC8iN5MXaw7VHLPDgMhD5dpDQ56YWHRNV",
  "key6": "2cqkxMxexveJSFvq4TwhbgH2ss5eBdB7fUG1CwPKfYHe6CsaQpDYajuMGcBFNDPLBVj51YhQSEg7TtAMEdPqciqA",
  "key7": "2uTaoinydaMGNfj62nW6JNodUsUZFk8KqSrq5ccHr5LC4JwGg8qSbhuyAr42DN2NVU11pHaQ4HEhTVZgEBQ3mc49",
  "key8": "uCDv9eBJ5YGPyxLrJhZjemCqmDtLbSw7if5S9Vdr3hLQoKVzd1qcpe7MJtozh5eVugAJL27arLZMpDi1VFPa4hk",
  "key9": "VEjKdwp6rFfiu6cezka2vmdWjvmRE1avtFuAQrXmfa7s6BCUzvWSNcxgTGmnfoaYrhQ4WRrYpBPSiMFNGwkD1t2",
  "key10": "3rXLTVnwTaMoHMyjASNmy5kHtkgTHuLCJpr23hZhF8ZGig1kQtt6fTKo2rkAnGe6gfABvLykUwtVSfAuD1S4p2PA",
  "key11": "3fUxsMxL5X3qUDUvmZoxkZPoSqchGPg43nDpgzFPq51bjx4bNmuvGggUfpuHWUYTKHBRXEATETMZq4RroiUkkqZm",
  "key12": "SXzcWG4oEzC3NJi4B3kBnNCmphvtisaVvpSyQdMY5VhxdPJQUerRawTi5PiEMXr6tmtatKtAq6btkz7spTPuEy3",
  "key13": "4UwWxXDq5jd3ZApmYgxUAPm6ig8kR66ynuNpMvyk5ofWF8WwzvcVyTmRrdJgLHpwpo5jmUB29YLGFkjF7iozB83D",
  "key14": "39mNedNxqLAsh5koDEtJAL6Dn2rcfPML96gRTGJEPjubbRzKbiCJc81WVTb3UennCaGWcqNCaHoraupmvWBvXjAS",
  "key15": "3FJaSfeZKsTeUKa8RyXgU3HCdN2bRBB7XQCBka2NUFAD8GURiCS7uLAPd7qXvG1pktzgTTvNPhF37TR4k2u4AT1J",
  "key16": "4Cq1QgDC7aopRNQ1WJraY3Fhbq672i5r5AWqwvBwYWzTkzLaLTFpFqedwk2qCAuqs3KP5VYBvi6VRsDxoWsmYFT5",
  "key17": "rwGEnUHMapfWNbEhVk2ntxMcJRLLHXjW2NLn68bcDJHDAa6CNzh4kLytotzcFX6B1t1iUFTkgKxLairznWyYeBK",
  "key18": "5VyjesAKewKXhBt7hASUGA4fJWtiiCaoMvJrTUafuWr2QbmfqyhWhihMspfdvdjgMSNrrGmEzXQvTGh4sQuDE3Hv",
  "key19": "5mepfiRJDLvEJ46DhqmxLMeGa86w2kucyjYsHAAKfnptRqjUnPNgUUcssYyuixmahNoZXheoK8NbLj7sbECfef3q",
  "key20": "2MtKzviSs3gqt6TXkgHTyxP4NZrF4Uu7xvsWNSLi1kbRbCfJzCaXrFGf9CsWJNQDxYaPkJoWGjGUu9cvWcbWJiYA",
  "key21": "YbBhboKJJj7krh3B4my71wtjgKqRtZVgjnVh9TtUMeorPac8dGUo9bRvEqp22zuN8dNTgFVZHknATncLotTQEZE",
  "key22": "62K9oR2AKfawQz3GPZkMEdEScAZ2T1uWh4DJfdPo83bSjufSqSLyuCN4KhFY7dN2F5BCtZmrRCGHQRsuercccEbJ",
  "key23": "2THMh5yKCxqmK8chQE2ad6d7GtacYc3qTKvqfVwfJjxiXww9uVhu2zHoRBJMteSftwkPkrqoQtjWdwtwN1XE1zFo",
  "key24": "4FS8yQTABq9ovKkzALzLbjVpAMYEBZqcMPUJzt28ZxpsfNQuWwMQiY2dHM1QZJji6cGDQCPWCzkD7UWvkf63RXNH",
  "key25": "48ZrXm2QSeqkTc8BsGx5LdhUHkjHmuTV1rM2cCwbskTpSdx8uz3GXfaDYzayZZYVJNt6CgY3LKuedNyyuDA9Mr6E",
  "key26": "3g5poQ6mEuGihSkfdNpiXY2MjiHfUPrht3CnGngfQsogCq1c6kqsrkqGz3deyEPeigFj7NaXUmGhfHWtB1nFFVj",
  "key27": "YpSatjvxyxJm3tXjfScbFuy2C15fw5ukxCAgp6BgMgcuvJciz8fDyFYt9jkXFchwuLFNqewDPjGmmSpRn9xDh9H",
  "key28": "49j9vQExwZDgijFLEE7GoZSY1XuCuv5QkkkyE9fFLiyGBHxeT3xxnmkMcdY6BbpmFidjoSRf3a9mVsfeBLuioant",
  "key29": "2wYpAUgVwK8JbcJ9QLdSBTs8XbqRWEoXDdJ8YRmK8hJxFX12wx3wGaS17rVgcTErejSeuThaimMc2j2XLSSjtzuH",
  "key30": "314v7ssDSFFxbjbtGXojRhwm9VC6VrMbcJEL3Uss6JKrR1uPq5KYXpDUbppoV55m16prwurtsvtGNxFDNceAKpeS",
  "key31": "4p5VP9887vzUV9RWiS9ejoJR2oFKdHCNr3UuUvy5irMYUHTDMFL1qD4KPdKPLqdY1VkGdRgkjzMCk4Xxh3jvPC6P",
  "key32": "43vZG3Zmq9JEWw3M4VoazmMQDprewbyR4KVFgxqUqejAf6NLgPcqhSbPPduGYTz3L7EBWzYWKFRzQHaqNQnHmPu5",
  "key33": "44e8wSnDvF8i8Bssr2tc1j7JeE4n3RdF4PKB8La7fr1BmC9wkRWistQhSpfnXQp1k8h9DvrTysFoQDEyryRdg9aj",
  "key34": "JoAiXFypqmZb3qHx5gzsWWYmAi3ZDQkeuRUAMevLKYs1nhS5ugtx5svwBjJwt2Pk3XgWWdfQxTufckLozJy4PWs",
  "key35": "33cCVvuUxSGy6mDkMcob6brtn5J2KgNzTRSqY57qzitPxyUo9f8pb7H5TAGGwsfjG9Bkc84BDm3JVDCzMQtx7bmS",
  "key36": "2Pzna935qGgdpSKg59rRGPL7eYagtAZZ76cPZBSVk1Y6ABKpDEz9wk7bYLskSSAfjtEEah85KaM2Qb9DXqP62sJg",
  "key37": "4GkRjiijknP7KRPNiCLQaxKJetX55vSqGJjiJVcrbrxqC46fepWh9Pr5RpTf5cxKD9axpww3LnHQvpXCAhA9Wmc",
  "key38": "2oHzxybs6izafH12ysARzA9qm9JSHWPxmnuxW86xFo5nc2RXK7TdR2d76qgXnX5ma3dKdiYqdAkb63mMJujdvLUo",
  "key39": "4ZxRtUpCX85CoNMyysfnGF1CR17YWvVEhCD79VHYwVYxYQnL4NcPJXv9puEhkMPCWn2efBa3xwsfXKpZ1j7xFdzg"
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
