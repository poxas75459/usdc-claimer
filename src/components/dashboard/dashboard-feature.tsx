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
    "73FLqHcwyNSkircuckuaKq95wyK27DTRxqLCcLxR3Y75R9RirU39ASFVKz4keQViND1gRvmUPksjs4Uo34FGHfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6FJmHYJ9MLwPeRjxPToTq4rzKypXYVRPBFbXkU4TLno9MLPbVoxoDkvYEjgMtjnWbQLnU6ws9roVLw8YjR3kMsY",
  "key1": "3iDj15X4Sr7wcJxRPBajvQzDDptPChfVDqFnaLTGZM8PmU5FJBPd9HJ2P2pLPusTWFbpFxFrxEJJWaAmM3Z2mUtR",
  "key2": "2sM1iJa21CoSuMkhfhuodpfrzMttod45aBNjuHGCVTrDX2QH4qqLhG7jfzMRDXReMCs98gAbgr6LafSRLhiqC9ix",
  "key3": "hqvpBA8RdhUysJtjde496eptJaNoexUH3FSZPu2NEqa8qKjUvPVHVxtnqor7AMMB3XtBt8wJEu8gYHcsqWMNt3r",
  "key4": "5oBeab4f687c5WnXnorfxPHxVF22ZGVYMo2s59qUbxaH51Vtak5fJP9Ee4EULFLG1ShLQD2NdPzi8bqin2Eq2GHH",
  "key5": "VcnuCVSoSd8xM1dxPzArq7p3SeukEK3qSRoSFtksM4uQUUQXAiv89w1qHiUoaKgiihbsnFhY7CGJyuLS9muWvSA",
  "key6": "3VJJWU1UdFaNR6nUb5isnEVrh8aMqbXnWLc1yWZG6P1DwtG1NTA8VsPxiq33J7rG5gcQTzeTXKPbxTNbRe6Xjigv",
  "key7": "mctgFbJB7Hh9cTR7FNtEUB7FMnqL9uiLZUcfFnGAY9hAwEZsgMRVPMN4XYnfVLkqfAJEqbQpgJMrvvH1cJvuVgR",
  "key8": "5R1v51g57mfRSULLicBLfo7xMSfya5rqxcwPdmhyD97dv6PkeTc4pRi1CGUSpQX4oWr3i9cJZEqbHfsP5kfBHXTn",
  "key9": "5AkgjM4wcysLvxYKSPeKxQPpzdQR34cJKSjEA2yG8SpCfewxm8CK78LXR6fCUWb5YJsnWQMiHaCwwyVFm5jqPXWX",
  "key10": "3JKTJ5FyBLj3xDc5q7ugvUeZgrDt18cSSCNWBmM4K9Q8CsgLV5DBABuAuNDdbSzezcwNZf5mtYJbeAHfT8EpDGiY",
  "key11": "2w5ubQQ8sM4Q8ZmtYHMv21Z4FPSqQ7aNXFpkKmzvQqz4s5h7cEvgZaUBxQd275xCNHhcfuMkJwGZFW7LqxtXXmug",
  "key12": "43XSuaVGjEpHDY3JC7AAVLFnmqX11jsHPvTqVSipcyrbZx6V9owMdHkS7f1rH7MFd6rDoBu4vBMyAUqoMqbZL5iT",
  "key13": "4c2SQep7CZUnKmzFNeY1iY3yUqBk1Dw45Jo6Ao4tvSZwKaQTsvT4UrdQB3EvcAboFRzLqmAMCeufphPkVpZMnEv1",
  "key14": "271zukgzhXe7HMbTdsKAWZHRkVzd7Mw7A2whW5Y8vhcZyfMGSiLx1LHGdVXcBpVVpKxxZVQwYxGdbhKnp2p9wzWb",
  "key15": "4RFJ6Ftt1AkTCAZiKnCjBL4rrVeanudy7Yo5M5YGBhrxDJgiRU4oZpbnoNvxL1EccPtiGvV1pwH2zHavrzNY9Ar",
  "key16": "5TLHK3ixjQhCYZix1ppcU5fMJgRYqatQ6WNkSnnw9XCwB3mQwim5CNizbdDkpZdP73hDW5ZQNJcoisnpUbrzA73f",
  "key17": "5xsLA1NSXSc7KGcdkahtoq6mj5YzrJAAfYJ424CuwDGtJEXUMcg1xLkjocqaUPK4txG1fNiMjyHSy2u2VYub8N95",
  "key18": "35vgDwJfdACxKoremBwjpf4c9sbrwZtk5Go6cpqbvmwn1DjH9yJRRWvQ6rTZrYMrhNNS2XULX2ToJ2zey5UrGkTB",
  "key19": "5LcBPgDEvMCuZwZY2cooPSwzhUvBHzhRRsKfUcF9sD5xrT12aVdM8qrsQbGccLLTSD6etDhnf6hh5Za4s7Ur1ReY",
  "key20": "4fcDhocnGAYNSR1xST11iBJnvzRwKmai7jgbEcV1FSi84G8nsG3tEYSJWqt87TmqgoNvgdW7UEJXtuuUR3AdiqVG",
  "key21": "j2VvYu1LNxZ15Ze9EJo4gXeFDWeHbQtYt7wQtLZBWjb4pyXyCZhtiAbkGHGhbTDYpBYfd5529EXsahkGqgNAMke",
  "key22": "2yXdDG9HmLF8q2VuWe6muYWszgfRtryKYitgGbKLtvYdssvRFsmWjz3PxA6ogxWvN5KHbcRh1rKJpuLHV4F2geGn",
  "key23": "ygZQHJntFgrEaHPKB7XNBA2wNuRBdWTZmJSr8qDAF12DNhV6wysHGyENAekatZBKgQtuLEgcspoYBdrG8GxVvfA",
  "key24": "44NARdEE2fXDG5yrLBPxEvMUN8SdBnGGRmgYgVsWNQq6sWE7cFav4frxad2F19B5nrueoFEXHjitPFsR23cdw8aG",
  "key25": "2zvF7rA3BvhfbhcQuiqZLuwy26Ffatf4eZFerLmZUTJfzBNE4JECxP82SL4CH38Ssp3RZ9hJmPF9vnPKpD4KcSxi",
  "key26": "2DJ3Pt6rizZvqsGYopG5sAQ9yyb3v5bbS3tZPjbYaBtdqqPNgNA2DWabKouSMd27FguTaRmkFp3zDUBjTQBm76mz",
  "key27": "5h5RTpWSzEKrNBMfw3YTezkHi724oTS2bsXjUp1C5nKxM61pi2FEvzM9gFRwHvXcmezBuhk2PFUuAwDD9w9pem43",
  "key28": "5Y9eAgrEA6JFZS25ijQoKVbBDkX5wUWqFkbF2EduAxHiRBMHFJUVGbPZmsxBE64zoCH1V9gcNvMaJQZXXf94h7ti",
  "key29": "5iUGyM6HL7aWGxBptDEjrH5poYqaz4gwmU8afkLdNk2bREiwwwQ6fwsW31mG1JFRzAcDeUM8zHsQ16vgsmUmJyW9",
  "key30": "5LR6d1eFbctjXxo4pjTXvpx64uBn1ufi5mpCTH5JrwhgcebEBZvWCwf8464x9NmiQ87SK3M4LRWzThz1EvPh43Hu",
  "key31": "2RefReRhf5HcFBxj4e8b854gmCSEx5zbyg4HpfuYW71w6qsWJZzqpxrgDeMxEy3hP3wTP5JJdHG7K9t6h9wFxJjz",
  "key32": "3gFV9GeDyQtFEFNkyBArFXK8nmvistzYDo4xx3T87HwGqiDZWbaoRwXsmPKXAnH9ZACnKnvskxD2292Pfn2zjcXa",
  "key33": "415R9CLn2Tt5vVeckQkQtrtNwVT6pB9iauToV6HmoqVT222N94S3psskRvBVeNTwZhTDXWDursPDENQeny2F6tCE",
  "key34": "45xsontdVVVs1CNtMb587qtWYhS2yCNy2TAX97XzKcnxxCyxxREM5WEuQHGXXyMR2NR4j9R7f9UL8eXZk1um3JKy",
  "key35": "2Zm8WwkWsKhpaMn7Qajb1Wg8JsCrQawK2LAVKVCaRD6L9dECLgBuZQVQ86n1JqSDJ5JUuWnTGzJanzVt3jjJZzzZ",
  "key36": "4HLrmqKDVcpWmdKFWTSKeucm5TUE5YHpH6ALReDzQt3kZ6fnUBEMPyNBuNyejqoPXgyLF3eEfa95JAa3QupN7tsc",
  "key37": "5bDSmFLwFk42TZ69xA6aqowfvHYYuVTzDaaXC1tS4fXH1h2QTWWkweukGg4i925N75R3unVZnrdT5MEJ3wiwkMrT",
  "key38": "4rVbcb6caVmEBCaaHzZ3byXxqCx6QzunopiFD5ByEg8n9r9LnJGy84z1PcTmiuwQ3YSerWTKjCyMBSt3PFwCNVR",
  "key39": "u1p52fkg9Lb6H2aT3UBQADNMXrhVwbdRvehFBK76UBMEGXGW2KTgb1gTCkyDWxf76aPtDyX28Akcb1TbHY2CZB5",
  "key40": "5FG4Mi15BYfBS3kgXssoKpFk4txNRmNoWKj16CUrdQsctQggt9Lmkq4tMrioL13xcnDEoh9eC9K8pupDtkCEPSDN",
  "key41": "32zATngxBxULpV6cNe1YbikZrajDYdpdFUqEMiJwqDwJv1CVoDsGybEKTzLN7pfgmgqQ1DzovkJYqYhU8BebsuTv",
  "key42": "3RZg3AyNC8sw9UBnxKj59oZngHCyPdAPYCFLHB3yrV4qq7NBV72GqBZfaE4BZRFzKB92pmytddyxfMBE3wC9o8XF",
  "key43": "oSeayapEF8hin5HRQmtdgzwEjhuCndeoT5Utb1rDvdrwZ6rvqz9DPP7PJ4DtpPrpuQCAwaHib1Tz2cLhpx5Wme1"
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
