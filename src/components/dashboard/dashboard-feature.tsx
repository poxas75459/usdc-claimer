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
    "4QGq3qX7pahedzXcLD17mvRmBPyDttJZxY9uKHS8hgdGU6MjNYS7SDq4zi8oZuri5yZVvyDkFtEpTGQVhPMV59QT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eb137R98L8zmWrX4Nk6CNY1TXQwRHvZVVT8aso1GibNVZk4T9MEkAJeZoNy3cYmdDnC4Pe2ZYV4JqZgFyk7sRAM",
  "key1": "5eusGL6xpvXkdqw2jpf6bw8eKrLuwNz2xQQaEAZgb1V3KYY3CCzWJkNSSeMTkmYGdjaS523ARTjYdV1JZDHUoURm",
  "key2": "5DUYS72Nr3fsE6hj3rmquxJjwCu2i2jo683f1dEB2iHXf3KaJPYwondrNbvCSX9uL6JtpyWSJCXj1t2oSTuV6r2q",
  "key3": "NtocRVQfJ3SFg75VJ7fQadhqYr36S4QaGRBYgKYSwFJgRViZnfJR2LgrVfUo4MWtCj9ZJkChiwXEd9UTvX423tp",
  "key4": "bxt36C2SKfAZaszgN9dsFtYWt1enBMsyYeYuVrfVEyqwxVEftG3TmoVFJdDHGU4RVuntVcqZ7hz6PmEMDcmxxX7",
  "key5": "5nBhAVmamqeQ5MW9C1ngFmfqKvwFhAKbfyBjHeEAhs53KHKVVKSScAAMAPPJjJa9bY5D2u8F45bmAdy6MxojFtHt",
  "key6": "2yK93cNEferks1dLN7DSrmqAge7HK7LmgBeVzfq8FFgm75bJt9bVoYBcYahzxhWviNgFE61uxuSqSHLwnk1vc2eC",
  "key7": "2X7qc4txBqKZBDmLSwMFqfJZbhwiumu7wPomTu8jdEXNbV3PyEr4pjLCnp5P7oLuGbDgeSSEZwwBSJQahBQARTrF",
  "key8": "XNaqmQJyJFmZYTerfiUezebWXNScgVcasmXgFTSRYZ94K5RNb6jJwUuEwstG7RE7wAz5Dcwxq9Z1qktTifFLPFj",
  "key9": "4EBXCjov98uUDmt6CGA3YaRvxiTrEEGunA3kp518b87A6vsUN4KwQqdETq5L4Ax6XAX4R9TcJQJWfmDfx9qqsQdV",
  "key10": "3YPevm3azGHViZaVUky7kNEg918oFSeM7Z5aaRjGDbQAxsuR16dFCKNQGSNeA9RDRwTN7QHos3S9yFpXZrcxhmDt",
  "key11": "2RdJ75RRHrqaWCeFpeKydzTDS26Gygiam1MpnRVHTaF3DMMDP1txN19ozYXG4p1MnMyN2WWe1P4Gcx8XW7hHfQKz",
  "key12": "57sv9njFt8DoUDNx1Lv1sZda17bbGDsN1WQW7Ryu7NgQKfA6keHt4N27TZGhjAhMkJkAyrdbTd3CnKBWYCnMTdR",
  "key13": "bJqY2mMF1yj575PASoHbh6CiVcSZEUshwDBcvEWbyAcAxRrzFV1t4H45hVacSLVLBwKtnsuZcDj4LXGhPnT8qJK",
  "key14": "2qGw6hoA98xSyxYPspRzXVwbMvVYcZpKBPLA2zkueUL6mKTCMnzLXmuTy76KAw9HEGBcFjQnGSHog3Qz4hiHNUWn",
  "key15": "98dCePpQHMW6UUrpZw99uFPU8MhuLzWPUXcLJncSBj9oRqY5eYsMZmzXiHjCzMSoRmZBukjZkwpdsyBAPRw4KyF",
  "key16": "2M7gAi1XqousiQ95bArA3djPCtYQFaSR8acVmpAc3GoQfGgRPNEM5eNuK5LNxszFmtRaH1bq5RYhQMN9RQVjzAyi",
  "key17": "NveGZf8LyoafPTuYC85f4jaWokEWWYu4azt9aw7rpCnw3bm2r57kVL2Nc8G7XeCFeuDAkLqBZBebXUgTHpQHivQ",
  "key18": "5zXuLnxcihhEdfHWKJb96G8YSuJHv2TvtBNSeZgnd64rH7t93ybwQMNR81f7KiJVvwRkUUfhikyZKtwuidn2rMan",
  "key19": "4jbtm3oiLJiqM7DeohuTU5j6Nt8MMdfDY1k2NeE1T4nxhTVyfDPkgfWNL2jE3x2FD5GbmkWQn4M32nvck5jMJ5M7",
  "key20": "q4vSpG4BJFJMjpSVMKKFXaqeYVkvLjED9Zgwuri1XL1Gq6az5avBL5T5UFugi5CqqB2iEWAqCnZBF2j2iMCcdWr",
  "key21": "2cvMUN4K48VE3XeshgdceLpZnKx3a4iE97A1G3Qe8FpSSi14EkEBaWnSuHYx4isZ4NB5r9pWDnZxd55LJ7ZK893p",
  "key22": "3WVZKfyzPfzi2QTdNSD5wKS18VzLRdo7xNzK7zsReVphg1gZeuBcfVzSfpVYxjfgLBdCrVPsgsALuC7kss5EPgzD",
  "key23": "4KB5XCn1cRma2jVcpB2cW7J4kXHV1ZU4zpNLC82wAXS3CLfSAeY92JYeUvDmRMDMCw7Dn7o8Fu5ve43ehM4s1pvN",
  "key24": "3TAQJmwxWqxpdT1JeVLEmWQe8yr6dCQKywxuiBvxfVVSPKiAzSJcMetkN5S8JD6xpX7NrtLypx5gnJoZGY1JM4Kz",
  "key25": "3inPdL5mtW5ewG1BE6r7QgFrLtfSsfw2KcaijYngaQpvzowDomntvmA723RKxm1yzBQhHz9yU9sz2zgarZayK5Y1",
  "key26": "37gMkSqF3fYgqsmyR2B5783MepT2SfSG1wMSKZvjJU9zNtze4NtA6BSNdAtQqALfNTMkpmN88mxEKkNk8NfhiKQh",
  "key27": "V6eWtnwZYJ1kLVyAbK2mahJ5YtuF77JsxkbVfJ5To3pKSptJP6NQpdpzrkW1YKW7HeEu1YpQkTNjJxWNniDELj6",
  "key28": "4qDj5x2TJqrTZAUEb5JsBzFRi6S1GVfx4SPWuQQhNXGJj99RvENSvUNWkWGAZU2wA2YD9UjwBbZLTSda9J347uxp",
  "key29": "5iADE8s9u6cHTDqFSXdApZ3TYdWHsh5vsm3753b8Ux7BA9qXmA1ia5ygaU4bEuavGYaRsiRywyavBXbqSjXSfunZ",
  "key30": "ZpagWGMZ2m8J9KBJ94dE7CUPSEpMtAqR6KkYVrgt97LF3YcMosdZK4mk5HBhiaQPgrTe88LUikPy2pQHiudmjnc",
  "key31": "5wyaJNUCUPrHCwfauFJwV2JDdz7GhRLc7PScY6JoZZX2cZPsGeLCik8ZbLuxgQ6M9EwyquSwWpyt7snoFZ39Yc9X",
  "key32": "5BbRUYpV1gpHQknsSYNK2uhBn5mzcxFB8wRJJjCyeg9MUND3UC6Tr3iunG7LqRu6QEiBE6bQsu117xyn6SJ4pqt5",
  "key33": "2rRn56PbJNr84DrWJKohuQvKE7Z6TDTdx7Yh4ZrfdZCw6jv2Ua3yXQhV6eE4gbazarpwuSi4qEnwc7JPi8wkyCBx",
  "key34": "5Hcf9JfjuQLdFTB5JYS3BzxLAEsxtjjv5uiMtt8PD4FnZC6fzHyTv2M8GpSY2xHam2Jht2HnPr1Fc6X7Q6zKVtbV",
  "key35": "4pynNeugM9Z9uXnaJUd5iGkHgA3prsM4cgA6ZZsUqGPsVUT9d4iADzMXRnWrPB1mu7souEC6J5FGcgSVAySTr7hY",
  "key36": "4WXjGN1chmaVGcpBkcxqDh2E9GgoU5AuBRqyB2puE7hVgPxCUZ4mLmJkUNVvNAna8ko1QD6RMwFuUpE25jqoPcDe",
  "key37": "2C1YBLLkYRyndxKx2zMcVFPmuz5jaJMwTeR9axMJjgfNdWYFv4yTJ78kn9Ktrvz6hraZHpF9RLs5sZWBNU6J8Dt8",
  "key38": "3dqP57T2iRqLJVBPwuH3waiXhVGGoHcDbAapHeSPZpHd9EWMBS7x33sd61v5qy9koqzptwZFJRtwYV8SEoNKk4o1",
  "key39": "46CjsQiJfuo2GHpJXbgp8Cq4kAkKMcCNE2moGxwN1fK2ZsPFw3VvqWsBMWArNNcSUu6YKuRZ2deRLDfLxU5T1Qmg",
  "key40": "3bgBaicQWFGNh83g8uyVhdxukCNra8T6zS25WsMkuFzAmwpzJUjUcy5vmzPoJxo48skRbD6yBbu1MZX8dyjTTN8W",
  "key41": "3htT476HaL688jgf7LhbeP2ad7T2fKNFgS4BHsbcD8W44Ck77k925DAz92ifunLy3Ryp9eKGLH3jm6srGssRaf6G"
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
