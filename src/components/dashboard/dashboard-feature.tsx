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
    "axGo6E4ZM1veLpwW7yxQVh4BbGKNR4LtNWMH2TWH2RuKCCyQvkK11FE4hwogwwqwmLaEypftNDgdKrfxWr8a9jR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52mp8uTwm4DKQPDEAJ4VS91vS77yWbYSnxMbwZBXYATLndo3kzahkaGD4bzBXaGeDQRViAs6WhPM1r7VekYKeBqM",
  "key1": "4co5YdLqfdYzbgJkSBKAL3dxtBvLgzmVBYjNN9Uiq4MzhiTq8ETkAxq26weTKoyF12R42r8PtZPPXPsa9YdHCbMa",
  "key2": "2sy9VxoT11N1RLDsrxfnu5JDogH4GYd8Z7FkVReuZqXxFiqjjUzrmjzmNwkgN2cr1npvR6pZRiBx8TXFwW6B1JEo",
  "key3": "NnitZVeKuXurSBwqUUbUWfMQyMa1hAb2BmEHXN8rne1JMoQAzVWKUWQhwcKs66GL1LnJ4Rt2mUuxPxn9WKcg94G",
  "key4": "5SvwZEdSbZWMBbbnruZLCqmMRUHJQ2ZeyvhusLG4RKLzRB1xZC1EkxX7rwVKqeXSUdA4tgH2CMTradZXc6pWKEHw",
  "key5": "3PqUPpaJ4XfEoqBtEqJUyYDCutkFyihmfbLee1SBnVVAYwUGu6qDiVCcga8aTPguhX4MMi8Ji3r2aryxT97FK8W7",
  "key6": "36hLV5GXSa22ie2jftP8ADAENg82RDw1HCcvk3QNBPQUhcNwssiMqhdXW2zQo7pHKUFpJFaDsM6r6R6ua2exZzRX",
  "key7": "3uW1zw5ktUikv7KUvME1jQPnym6RgDWKq3RdoULnwXg6DnaB9Qqf5c2YENtxMQi8d4q1E3Hi9VgEDAxXz6wScMAb",
  "key8": "4F9ujhUxfRerMbAu3AFYwMn8VukALgieVLWBkw1oRG528vsLqFFmL5hxjNd9K4y6keNTjBgD4RS97sXJLT4uL4kT",
  "key9": "2ec5g2mdseBrNjmsdxsf4pDvfTbvbyXAqT2pvEwo7QcyCSnLXLdFoKr767EuRiKKmr2cSemLWAMhBPFNvte9sQat",
  "key10": "2LEB6VJzBztmTPAT2sEa6NEZXk5sp2TMNkfrUE2Eq7TJEHjF5axn3UdxDHyytXjee9EP7jAZu4cU9VFqRyMY9qvt",
  "key11": "2iQt44hgd6rjH94oTWEQFKQYwJtJYpy1wxtF1mL6jizZxeg4Ep21Bi9guNySSjkHJBjLrqocS8WRcmnjNFxcKSRG",
  "key12": "taHMK77zDwcbr2ta76uvGTsqeDysxfEvgmD27QysZbchi5bwrdRBzfAcAVg9AMGJqQ431KwP8tBYpZWqj1SSDp8",
  "key13": "DaY7Q5pBHkHoyVSZApfzLFBD917GuPRKxnQfDPo8mqS6nMBhDDunhcsg9snBzRse4AXT9LmUvUYy3QEkcz8DRkS",
  "key14": "2fZ5muHZJcpMrQkrCSRDtxkqdvZyXTqpcX4VWLZDvrj8TYcsJtBkgudXrGKmjXcT53Lm9eg8cpoUgDhavThMT3U",
  "key15": "2yhNBLJ86JZ1cEWruRoqSqqFKFrRvW7hve75B72NDmzDPjpva3CrWEHEhEJi4xwVQfkMNCPBkG7VNW1o9M4bdNEv",
  "key16": "5B6BBsZ7hXjAHpyWECDTR6hz6ygpSwBnr6Yo4rgPSEtTVcSWHzAjs7FPwZrttKyb5Wq44yR8naDvYBmEmrzbjxcX",
  "key17": "5bxr5v8tyrDhaAMGw1Jc8twEHdotLqvrcpRxE5Hb7zmfoFtoxYEpLvpF1BBEd53958KpahXh8NrF77dgBPbvaXu2",
  "key18": "Boh2UGdrptVFSuSnWUmXeJjKGBWVyncahgxEHJtTDQ7D2KvuqEKWqTvwz5yktFqrzuNndrXnkVLUsN5vek2CUjC",
  "key19": "3AJofjnEHp7s4MDr6skcDv9R3Dt4ZkhFcWPHGPg1KjcdrjBR5fQJMfwgXgScmmGGbS5QA1BHyn4a4VR19GS8qyd8",
  "key20": "61g1KNr5Fg6j9b8by33h3UGPSYzHfbjW89aQH2yg2eyYASXaZYV5pzmcAJmFppY8v6T7dMAJfpaQtHco8Dw1h762",
  "key21": "rp51WdQ7jpLsGseXLmqnYvvqLEjaSThqMWnApymKPX1c3YdNpvjT5oRpzauSGbZLZfyYKGdiwvhyQ8tuB3Extgr",
  "key22": "57nUbmSp9waSBJCaVR7XVtXSMs7ZHsX3v4C4weqNapuC7cukzfCGUaysngNscgBXCUJA3fRgVajBeysq9YfM1vPX",
  "key23": "5bp4FGYJyXrTqEJf9y4deSwkdqAJfwZDzZPtV6p93irseWLfQLnbioFbGDaHDfNhSRSBPRp4odN3FjzqATrkwSvt",
  "key24": "5idpk5qXEN4yVPwAK5gbYzFQ1WEkPcY24Jbfo1UtH8TwotNAoWGrwJ7hWaWKjsCf2xCtsFL6ZVH23ZuCZunEghtY",
  "key25": "3tHVHAMjEVAJ8vXrkeJtrnRbgKvKtiJs2dZDvTnaYjrnLUoUUvA968cFYCEVF5Gmp86Gv7HaWHDgTCEeM77hRQ5D",
  "key26": "2VLRa7f4nUV3SeghKioC9UdS4h4aropsoo4ETPKcRH9vE7gcFD9RPJAdFHyp1kWfwCvE3QPfhxqAee1GcprRmz4x"
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
