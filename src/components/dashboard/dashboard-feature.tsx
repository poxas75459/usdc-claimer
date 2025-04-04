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
    "2tb3LhV723xPDX5sMPxfZEiErthKc97cABMp1P57d4NzXmj9vvr8r8CsafvmMUKWX27ATzN3v46abbprf1Gp6LLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ej9qXspvHiNCvv6ZWYidd15aXerRUGH1CYXwswf8g5WdFtjorTH6p8D1nM62R3hKaTvt2rqnmhbVkWaqXFydUG7",
  "key1": "4yfzNhtKdsmaFEUYXKhEtuHLU2MqrjtBo7BYxfSBJ4SKFEU63KmKBHAhcUGdu6oxvWtPpZLfSYsqpSoa3GDnVHzF",
  "key2": "2utecP4tWdmQpWWTfoBSUcQkq9E64Rur899VqE9p78ieLU1rfVAfzT1byNNt5uSDJWKt6kPsL3QyurU1DhzsrTTZ",
  "key3": "4qYt5StAQ7HKPwz22HghYwf3pQYpxqgExzjRagLbNkGPjY882RBnCvMqoVUZsMVdbKd2ENuNfMvnWukuTWnh8b8r",
  "key4": "FzpiNw1cXwgZUJXX5NSwTnbk4cyXNEM3uoeQENgX1KBo9nmAAPypiGUGCytF7qzvF3C1vVCcD6vDUYBhHV5poaS",
  "key5": "5kMeqT3kFuSrJ4TigcsWuMuShWTiCX9jUZDrDJgtxrL3ox6hGW59Ah9Aupk81oT8KJCyBXJ1ScUXUuJHeJivn6ag",
  "key6": "2EVyrruenQ6UejCv6SiCHurL2axnpYpGRbW8DovPgYMufqf1mFFkhrvJYNzDGyGV6K9TSS7GBxMrgBJ85kz3qU3Y",
  "key7": "3tp4Qqi2sgLCHU5PRGiCmN1ecRtQcQY13GdCsFxe6iDbKxEe4or8NYe9CVEoG4zdFQk68syKiUA6nutqZ7B5fruQ",
  "key8": "niermcrqyhcHf6zXJPmC3g4A4NWWAj95aa1FSLTqNEXYkcSYTU2EPoJbM5vwXf5QZ1ta5tEYB57BdYSMB4qSu7o",
  "key9": "5ctWTvPXJNhSbpKLDTYNLDRHtAiQ4TKBPiodtqUvPG1mrjBEAMYtiS2NDDdhFFATknWvRYGgVLNAPLqycD5qVycj",
  "key10": "2SQRXxfKCVPBXThFdwv4jhNvKB64A9KysZ9BsQQudKM5CZN6P9BiNUGHUX1Q5xDvh3VtjPFMLubUtDKEDnS4NivH",
  "key11": "221AT754UvTuP6rG25N5wEGXr9RKh7iWAu5bS7FScMYRtSbeExD8q5uejPQ1Lj2XHsS7tK3bqx6VLZK1Raa3PK82",
  "key12": "4MVztuHa3NT6rvGj3oRnVdyCVtppHZrujoMsueTfbdVXBgoGgHDKztTA7D4AycZDdLWbTaHhY1QCDHLMwwhN7VTA",
  "key13": "PnQ3wndugLTmEjcoo22MXweknVbqUajEA3aaHCt3ZAHeDvhZ7ZDbHaUndhsZWK74ufxjuYEbSy9KrMYppycimtH",
  "key14": "5PAR4kpoZ7jJe2jaFK4f3CspMi9gJbrLrcBY9sPxCm5oeUn9uJc8vvhDsvFDnENCJBy7YdxnoZqwFW3pLx1tcTdW",
  "key15": "66ViTd8qx1pCZrxBTMZQRNpTegvAUG8ftivfcwPXYRjVJUmGG5uvHTYeCAtoE11CxPujYjVnfpenXDd2Tw52Gqwf",
  "key16": "7REzGUTYxTXmTVBxtWQsrRWa9RtjouB8dQqQPYzpTYrgjm7oMbL3tYgsMTpJLm2NRTFKSrReySYvEnWkpkQGims",
  "key17": "66kvpAxto5Lkbkkf5fhFPto6eV1XQG3dAfYyRXuRMQis9GscwVUzM2qey14ofBGaiE5cu1hiEojKqFcihUw4ZKsv",
  "key18": "5VjBwyXiqvJPZ9j1qNSwE5aCcJgED8qvZTmToNQUCAPSMemP93zLvvk3uegjJLgk5eqWXBKxEx3HXgEmYFNLGJUY",
  "key19": "39ZWZHt6QARJn2YqRv54cHVC2VQQ3Nv1Buz6naKNx6qS8uyavouHZcTjBoHqKAhhYojWMwyVov9MvJrNbSpsSowJ",
  "key20": "3MNDjUju99QMK63Dqat37mfkGors82rhmh8ZZ9Y76bqqhWrvrjoKaSsrc1uV8XBWBRvwKioNDoMi2FLHAmvViajY",
  "key21": "3TwBxykXizMieMCXUGMqrh9mcJ27mHjS3DbcB7MMqagPag7WXF1rBuFxCxx3KK3h4zhQDwwQoJ4rHiGK2RcFdzGM",
  "key22": "aYemWvSJz3B4MJ9n2UZgnhGC5dBFsesJ913GtBRK4qi3DWPB7zynUL2KzeSBd5rZTwphFKZKX1aXKz7uAeyJQwy",
  "key23": "3Jm6ZMUUvVeSWUSTz2XvthE8WoBAhbVHHFr3Z7hujzVS81dgwNduphn1Jm92FJ7tnvPSscp6KCbnsRxyHbqGEjWp",
  "key24": "3bxsjRgvXHGywTjpnsbGaiUr2tmZAkkeJUxwoeJHaqik6no6GRa6w621wPZaDcRvcjrRnnBtftPgVMe1i3c4GqSw",
  "key25": "3S9av6W8Dbp7WLHeQoV85tKy9qCirU6NX29MuFfF7PW49pnfYERKMnrTDdL1rZUfqzKaRheLHzXnwACq6BM6ThDh",
  "key26": "2PKLW3Uq24BTCH8h81isqubu1FS3EECELYZBxHsFaGU9mRxG7wXAqpL1cNRrEbXNyn1aL7RbbgmA3MfQZEKwmUw",
  "key27": "5nhrs8MMcN7AAJQHRvRijHroSU9Ui1VzASktNdWmTi8eVKjaUz9qrr6iA4qSY3QexA4J3j4RFCDTxwJPHWbRXxzR",
  "key28": "2CSQfXFoBw8Awdb1KycijC7eDzX5cofn63d5Ynz5fMkQvi5coGE2jJATv64R9LzYo7CFvvtDz5Pg8KBu8AEvXKb"
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
