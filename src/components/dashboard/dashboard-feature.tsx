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
    "5bGGDGMRUisKRcLgvPWYySTCYetQojt19U8fbmqwJrZVYfVzC4iS3GRtQ3biqb6cNv6P6JzgZocJ6FJjpz5JA3a5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hsTUs1F5Lpdu7fTk1JERJLMi41LNmAfPwoENsqLHTMJzB3LmSzTL4BpW7tYYJ6WpUZxwb3R4wUKakTU9TXkfokH",
  "key1": "4cuEoZtzNFu2s5y3dr4A4FwSzsVQk2ywUn2uQmssfmx6ue4Tg232vLvgqNxFe1D5QaKApqdHZiAEbGBNU2eKxEvL",
  "key2": "3anHL6dQ13nbAPyCXtizpQmysm8GMGU1GSeAkg2oaDi7M2gZpgTHXvbZPWcYsjQ8ry4aX52HKqECxt1bqbB5Nsno",
  "key3": "3Y73VNqN2SxLsJHaSTjXVF2bYX8cvWULzxFAgoVWtsqx7DusHcjBgXz7w98Q47V4xJH9Wqk1hC39F6zf9Q9Pw3WS",
  "key4": "cYWccSyGxBo41WVbcUwkTocsSU9G4QCyVbMfrJz9tWDA1fVjAmaToat7FRHfzZ7tj5V1AHvDudXnMpJMUuaRQ5C",
  "key5": "3GKPAW3ek9KLHiCurQyRGYhhP2FUF96BNQDroufM5bhEfSqCamFSryPJy4LgLxRJTVLL62TEXYvaSh5oGm4Xxenv",
  "key6": "3mJr3Ckzgk7cAWUkJkST5NUncz8zsqzwezEbf3CoRRgW1jSaPyPgLf1WeBmUyUEeRES4SkrApUofkkzVnhfFmc4m",
  "key7": "4aY3udYr6f38HCpmkGPAwWrDJzPEBq6KB82gbTfmywqRBfzQMUFSVrXpxiDj3eAPG6qSkFicjqyrpAXv4Jq5T2Ny",
  "key8": "qcFv5uH4ULgo86ieznMZ74pC6MgVseY3dN3obNfw2ap5Evw53ksE4LpzSxbp3FS9pmF3bjKq4rZZy3AYz63iZ9D",
  "key9": "jSArmqbV4qgzPLaNwBBqqNEBg6LzcsNW4nAuuk4oirjyTBNcbcW67hYHK6iLFmGD4SstqBiTkEbRJR7TzEsXHyd",
  "key10": "5fxh6xedf8hptztP9BFttbF4YagwtfatHWYkfXh94cKTjBkt5RfdKKGoYqfQg3bFNWH5dhx6T3gnPdumQXos6JWp",
  "key11": "5xJC8iyRtXYiyDL9gqRAcUnBPfihyprmTPuFutEzBn3vuVh6yFy6Ez5SfSWoyDUiQdrnuunTWbUnKUsCmucejkJR",
  "key12": "ercn4tw3NUonaXtPucbQuDB3GgMCJ3wc7Vd9iVb9YoyKAUArLe52vswnbnTJQiTk3JocppmEe5xoFrvDgDQq3eN",
  "key13": "2tLBCwsFc5jjNXkdQGgvKY3TDjpe6AWUYcZMU7D4xphrFwuPydJGwfxUz2YhYjpZECzvHg1EdQMoyobiCV32vKFt",
  "key14": "4X1b1ozvoEaYnijrFF9qEAbysuSEzj6BcXPtBugRwZtJA1GTuumc7aWaedDBit24jTQEP34mr1KuzmqA1DMs2idj",
  "key15": "27RR8pY5CYvvtHW2sZTL6QYH9CfRsLj3dAwZ7F5XJtRL6i5AhZ9cHBeFkR3cvPQ7tSn5gEZ2rfBa3GdYNJNiBWpU",
  "key16": "3guprrYC6nXLDsKYcJ8u4oLFGa27FL4qroNHP7bgxidyumqWvLPFSTfrRfERAoe1hRgk7Fi6uNNbMLDPnK531YYP",
  "key17": "5HKtzC6jEByLfhBAtxTMos5wfcx4n1VWRKFhdCWU3XS6aWuHpGNuLFpHpXLJFyXmi2rfRkPggHC9grTLXNqNcWug",
  "key18": "2FnWZg63HLxZNjmnX2NbNRfwVGWqcF6koAWbMMy8EfqAaRnafLCob4zJwiT1mNsAPNZLdUBZFpaCiyDgQPSWEv4d",
  "key19": "2M8KcuuBu1zWUPeTuCBXK16nuFszS1ZKJ4kfugWr8JzDxhQyZsgmPc1CeNUpn8YN5QyqcgwAUQes84EnVsLJf9MA",
  "key20": "5UWbdmNSoHpS9F8d947JtiTufH3ccu65zv94aFeEEvu1TPT2AAKZtdYxFokRwwFnaU2VRPw57PDsd6K8Py8NAc3N",
  "key21": "61xbRmpoag55CJYBhLXiuyY8dR7YsbkVmBGsKJMJbPXqLBXTw9x8C25Ebf8rYJuNJgqFRPBrumNPTJa47hjDcXXM",
  "key22": "34MH5S8GoChXPRABZx2SG34r88Gv5RA2jhEYpGFmCa6sopsoLr2JAiJYYKmGdFBRYx1AmsxLPqEVuARytvAiKoEP",
  "key23": "3bXGPvArtxeBfueYkYTYkCvXH9g9JCDGvq7ebG2swNBXYt9eKTqVj6A1u2eTU3Qi4aHCgJWVNC8rE19X5kxTXaBv",
  "key24": "5ec7sHLaJxBAXJrGDqEU3spYkA6VA5LSNztHDKCiwxa7u5AraJJAcJabRW9eBFuonZzcuPdu9JFQjjdT2TRvybGj",
  "key25": "2uVkFCjzGVbdCcHEHFxZNNCmqReJySXTpyYzU2EVA3KsZXrwigyW9X4k9QkpLzgTx8sLjeSgoKhyZQgZyRkBC3rH",
  "key26": "2vRr4yvKc3RZUGzhAo6nFg7ZMEhPubf9N6Nhi29LA1Hs9z7z94jHm4y83F7q8CJGpkhKfnVJrbCkkskxVtDadyef",
  "key27": "3auvkFXWBvsmDBh8a5QoS8Cbbu9qmkNqAXgAAS71nsFB9GSGMjekEkiRx7JJNUgd8cGxyyNL5Yow4NP15YjS7qg4",
  "key28": "5RuvxbawRwsxSbWad66syVYtWGPEP8Kx3xt8swFgsAQzJ9QQyN1WWiPagw6bc8xMtTywGfPvWMK9huDjFBA9bsbc",
  "key29": "2EPuyvw6Y7emsMyFMohj7EnWjEvCTFz44qNVxCcysCafiXfw8Djnp94N6WvUyDV8ya6wjn8QHa3GUG1G1TG5sT1Y"
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
