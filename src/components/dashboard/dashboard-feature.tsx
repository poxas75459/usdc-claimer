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
    "2r88dXbKQG3xh1Xf97Ne5MRRxnWKanqyixJvzFZbwd44FtizugYLvaFx5VsGcK8FXinhiWbF5AmJH3yC28eVwPFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63DJhUaAimpLGNXuxbfyJt9P2uDXjwBkfqPUz7Mdst3EVNCSCRtNEagXy3LET7MZ4vNzL9B5HCYWytdgQWYBEPki",
  "key1": "4sHfXT35E5vt821znGsGogRYsGEuzNPwcw2Gw3cvgmT14TNB6oR1LhwfJm1c7oabwgVpL1RERjx8cdDTqnTn7sof",
  "key2": "4YEdHNMUQCkCVJprZ28sTjt5GVb8Z46VCjJvs7ayVGQf2tVq7RQNx9mfmL77pLZv8Zm7qCAPLTMyjsyy8CTEPpdJ",
  "key3": "8up6c2qLu4bunfDkm5Wv8FqsCfNmdiVfLT9zZaMm3gDei3Sk3NdDEoUSQfHABDkUSubYsrFP232hf8T3qxUgSQi",
  "key4": "5i79rvs3hmzCGzHMwUFmk4p7MdYpujYjryzLQGGGvRpbeaetcpj6KDCF9aeRUNnNVREj9wcD5Jad2cUfKSFVoR1L",
  "key5": "3Zy7jB5L23zV41153RRzz8sJ4huMEfsxBhC16mdQizwdAbanyakRuX9izmp1LgaA54D5CYjziFT97irK3Xwx5pio",
  "key6": "4FrVxfgRyA9udLGfGinwgZnpke3oQXQKA7FqAwcPbi5gJi4x7mJSVTV3FyU9BqYxsKCYotnkz1uiDDGoL4mHeJDU",
  "key7": "5o3rDBvKgNoEWAxoXSLjvKmFeCSRVViW9GCivpKynEE3ELV9gmmZ8LjQkF27dyMiwvoBdF7LgYytouBPTn4LKQd8",
  "key8": "4rbehQuFQhmsqmFTJpAP3CtnJHv1uzctgTeLxC3vZ9TpAXRHshNHjkNXkkcJExDZabDkDwYhDbH9TZzr3NFSSwRv",
  "key9": "4f7fGu1GuHWUsxtC9TC2hYs3ysjHycEJy5ek4uJcZUuA7cwybVq6TmRfJUk6jm7bRrcX81aBsmdrAiEnXbu6D6Lt",
  "key10": "GLRp7CUUHMXW5bSataATsorD2rNcPPk5K1dBEcC6mD7T7Y6fNnoXEAjbwNvjhFx4eCke3N49JGaUDC7z5ShCKqu",
  "key11": "aWFbiaxmd2zDm3Hn9neuR25DQTP8nBcZRSrJnjcfe4dVi7dBdSU91R7JhS8NHS4DCQUYEAerAcCZTeyCKd7PVU2",
  "key12": "3HngMZDPy7Ep8iCzPrnyMoBoFEF7toaJPwGmuMvcHCemCPL9nn7h667zsPpSot1f7bDoKJz5bVBaeZxgB5yEnzi5",
  "key13": "2YMQLGmHoa8UEAq9Xxetf49zioacuMLrJMd9Paw8tK8EmvhoKUvJr2XYzvWEFc8YhGQt7N9ivw6vASiUkZKbHToF",
  "key14": "5kF8uuRKpoanJXTKBwuEJNctvZDZ9ysYa78iRHpdKGEufkpnMqEnA7K98fdSyCm4fvFyV4aAWgjt9H817YfLrbzV",
  "key15": "5iapysNx6HeQ7btStsHMxS3dq53vau7WeEccx2k2aXGAbBUrVwXjnkeUnkt3BrNdujgBeZ47i76vjT4EXg1Z4bBV",
  "key16": "5wvVbe5rzB6MMAasaBQ2g3d8wQpT5dycDXX7bg7wJkdBFKowT3k9ukTtSQxtD2B2dfjmfJcfun3sptBHssAs5HfY",
  "key17": "MHsyohNpUhfSe21yAWPbXrCE8RybVV646DNcMc5ke7FJ5NfoTCNHLCnWTZs69fcV4VLJh4tDJ2CMus28kiaUF2c",
  "key18": "3pp7UnaJJhfeuhrWHortb9vdCLobwsAYoqKDsgpjW2DE9G5VwGERw86SxjAL66iciiG4uNjVGtAQsRJggM9UsQpv",
  "key19": "5mjBsqCm29ALphWAQeab3kNVRssu5MKjNGVwTHEcw89Z9X85Hb6CAEXR89S8jj5MBDqBLvxG3z2sRxKH5rhJtnY5",
  "key20": "3c5NYefGFQctZdxcadXpu7i6JJwaJi3mqGpPKnsMQSoxPwxEz9DfPdYDDtB3MEiiMZWXA2kEMuNDt1pJAuqJ11kt",
  "key21": "5iedEtBTwc9X8ETAVuveih4R3rNFHJdU3XviV62FzbfQRxk22cMPRHj7UFa5WUTGn8rpphX5HhCm44uYBkqFsAzV",
  "key22": "2A7wZNKK4L6LxtMPjVNBf4FPuzjBmjczYWKY9oERfaR7eRQYZi553THfZWSSfXnCuHMsG165tEFDNX98PBCbPXnJ",
  "key23": "666akRnjXcchSoD2WUEsNc9etiKvkPMgJWcQE7QqCbWf5QbyP4RvwKaPBvgJNiXQ5T5KNExvuLfAB1HXSnrgbRho",
  "key24": "4eHmydL8sPuhrRD8pNB6KWWjBHbv7vTSuCkDJQJXrTDxwyD92TNNvKWBzv7FwuK3XKTtoeMVRuqXaWavrH1NRz3M",
  "key25": "4hsnkAJvhuwiLnnGC8y7ebTnMod5xb6FVH8pYGis1hb2GH3TPKA8gp8qsEDoE4utQ2zQfbA47ZDxnYeyHAaAoU3b",
  "key26": "9DGXyZAX6cGGzwE5QLfVBgXkebvJtHUCTe7MU6UXVVyMVZGWhNcpnmThGrmEoPPo5u3gJYB45pZTV7k3XLEBPfr",
  "key27": "3ySgj7UABZyJ53DQ92hN3sFoJBAVYmLg1mrAFJzGe2x28LHth4bUmTzD6tdaJwehtq3JSBHc236JgMoCqdu13Vop",
  "key28": "2nbqLtQcsMQj6kihsDKMHtyfxtKtLp1CF5x7gdpiSeAAFZBjz8EBFHjN3tQq1scVhBGYsTLQDG5rXnPyPywXVPe",
  "key29": "5EF42FRkEBd3rcPoskN3MifMYcnu4qgCB6QzoRBvQF7fijXNTWTmEPsXZvUsRBJxGgGd6WbgyvSfHxuEchrmiAVv",
  "key30": "P81LWmeLY976zXe773jHje7uTF1GPVkL69mfEcT3xiFhdmkFkKXfmZrcRBBX4t47B89y4dVS2j98GE3ARNxnvtw",
  "key31": "5rLRGx15McADPMHMWnU9bGJSkE6zWfwrVRbZH78LjyNtgpYKMcki5p9iw8E6qRwFq2Zh5dmkSMA6H3tpcV49KZdj",
  "key32": "nARJ9Be9iuto8MSNjPRMp5Wh73MtoAmEGGxDN9252eyVLHCT2SsUwNoTGm3UFDN99EimGBWGbHfqD9ebJTytURT",
  "key33": "3rtAomPXjzE6HTDkcUsYsn4wEhD2eiCwxw1tszvMBKCCcQoLBradckbn9nk2vyKuUSHH69KGyo5pfxViuJ7KiPCJ",
  "key34": "2566KoqZ719gJ258E94u6gW6ueXEicYSTojoYpEuv4y5zcTeHDLMbsmmGoYEJ7y5CosSm9kWBpCoUk4zzaCToXm9",
  "key35": "4dTJYVFER6pJ6zT6B1adpTrTWdG8WxLZR67PJfncCqo7vYjWX9NeU2BnFQH5dHBWZc3CXAoFoeY5oUrhRipgrx2p",
  "key36": "45QEJ8BKMj3viUAveE1UX9xbzJCLycKiyWPj9wuZ88mgEmahZp2tNAKhLmKunupiD6b6HRoY1guDBadMfEjwMuo8",
  "key37": "2m7qiy9askq5dA3XVUmCDuzzY82GqmkCiYtnhbNZmhFMYKV7QsJ27ChX8T2MvdyGxy5fmsZZCz7EitbtPcXPg2ka",
  "key38": "2kgGkyUkjFt9kptAnYR8Ab8abm9fczGeVCNvrekZhkrowNpnqJx38ufqzQR1RMZqMxsaHEXzDGHJvyjJ9YXut3wC",
  "key39": "5mQtUdMN846ymAX9xMLPGznRXoQnBMizqkwvk8ZyWGkdRy3wKHC4RkrCfN9ky4dD9XToYaxMQRczMcegRAysTyWc",
  "key40": "3yv78ZRv9b4865jKvCpK16Ng1R8Gi9DaZBgjke2AJx1BhZVJmS4jVKsBerLg2Rf86d1khSUcBktFeFte7iZ6miBN",
  "key41": "47JFQE8A1S3KHDtB6xSBxX16Mve6CMyVCLtGVpGzUeR4WgPi5BerREotsED77249hxh94E7qLRQR9TugkncL9wpu",
  "key42": "5Xhevf8YQ1V23x1e36D2g8JFFCFjWymb5g6J9qMpEjWBi92joh8A9E8PTXdCYuNtEHXS9jc7KTiSHquht5BCDtVa",
  "key43": "3dTD2HTu51AawLer9SfavSoKDrvn4c8TKKHMg9S6V2qvB1yFiHKqKMC9PGKzVqNFnbvmw6nAU5pxyjddjb6V5DSX",
  "key44": "3QPn7sQhQaxTEnbvb8GtSaJ1iqDy9xqwFYunwHC1WVvrTCd8SXHrykaZgYfeGW1GLJQftiE5878CaRqAaHfZR9Ze",
  "key45": "3cWg7JNjY4e93SJQ6PUBenvr9sAvtN7E7RhBgJW8tb5R4PsqBS2BzAfNNsGnHy6wP6tbc4iu24csSGQRiB71Qvin"
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
