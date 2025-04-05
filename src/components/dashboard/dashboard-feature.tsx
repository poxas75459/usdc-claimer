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
    "2ZUf3EQfMZJoayDab3HjWWPNfMkHNR3kEf2Hy1iidVwVw26mCpNhLMzXfmEYY6trQV28TWzp1oUFvQX6P34CzNiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h5AAFyHyrFRJ2Ducb9haVnuKQYJ8frJqPysaJNiH6sPWQvcBb9GXtCALXahvtg7vH7A21ubq9CRAtm74Pwd3Xen",
  "key1": "223T2947W5VEHX9eyduyqnXpVyuyBSMsFvVGDbCdovw3h5s2Ad5kVDtVHQ9iVCbw37KShGcsLQZQWw8to4t1pwKb",
  "key2": "3eBQanNeT1MhzzPEQLrgDxzL6YeKV7Ha4LV5PdLPmFMC7qxzpMagqM4YE5hXFeg8VjL4DFiLi7M3zYRMfGXTtrDf",
  "key3": "2LgfMXtkAEvj9bkmFNMgtciqcfsAGJHUwdPKJNqYwhbgJ26u1eVTh57GqLpVJh6ZDS1DDwP4mu8bRc44z7oGZwoi",
  "key4": "5FPo1rpnCwNk7oPhQdnFu31s5F551Jgj12jjiJP64VqbBMvqzo2vn3NGxbK3NZsvi9seiPuHeXmwHNCX1wvwBkoK",
  "key5": "4HBMGEHXUMdhLoekmkAyAJTcM8LyPKj6iiKsJTcuPJEWF8twBrxUrarfMwAL99xCpGpEEvVX1Vf9vQoCrLdntQXX",
  "key6": "5fu1A8gn9Ug3NzCP6fkDmxYbm12SEFPgpdinofSBi47vBdwFzbfphwFMHe4gW2frAQBhvHjsRtZEZ7o6vLk9ab3C",
  "key7": "5xsWZZh5SFDBDfTVpAeAnm3ZHQbH6UgJQjX4gWfLNW2uK3ZxM5ZTyHciNvp6wXB8UQtrcgdeYrfT4rsZ67dKzJQR",
  "key8": "3CdKYVxCnRu7VUsPgdR2E1zEReycnkfFTzLvQH8tyksDMPEa8aWwgtAaJJpASva2LYHaJX68Z9FYNaKkhdiUonaX",
  "key9": "3iGKnFaKus277EYRhLs4GxYo5G8AamnXpwinmaUgEdfa9RDatCboZpihF1y4w7cEXc1eiefuu7R4znCFrXCRkitA",
  "key10": "63eJaqspG2sZLXeyiza15TQ4kAUJziFYTUsKQfyuoeAtZ8P7829gaEsDL9pPcZBmq8WFZkq5S3rViGi89y54BLS1",
  "key11": "3TnRofTQ5FjeBWzgEiDDLSpkNZPFhJTnYQifDwougVMFSHZFoRNnoS4WTDLYqGdJEP3oMYCiT3kadnquqkjGzVB7",
  "key12": "2hjCzG8EJTbuRGuLaAc1f4xcfTevsvzjra9MyB6uQTCuP18EE5PQF83SqPzTJoArKGFNGWwLM4whKuob3AhLEwSW",
  "key13": "rRDoeiy6ytMXBrr2hBugmfSwYMGRpRefdPLBEdLqwiF8b2KF6fTViaRCbjo91K6MuceFTraHR36oYVR1bTtDLoU",
  "key14": "396xmKb3JsHHXQrgeKNyEskijbGtRvxcBHqoTwrfzQ7RyJxiCn3ZDNGqnUZuXh8EUzF1pbjBhgLi5hmEgkUwZhif",
  "key15": "3aFrAPHKm1zW1SdQApe7mLpBkFQD4UsJggcicoMjYzwSVV6wzCtGFYvov5GxZhGWSTMSqNimb1pcMq9fp1s1fxkK",
  "key16": "X443EUg8qP18vsobTtm6iyhG3y6RKSbVhvQTrEeTeVuWx1jGi2ot8BXsEkkVLBMCRbjDYQNd4bJPHbao25kTw5C",
  "key17": "y63uibBZR62tSDj5eY5YnMqis8FsVaQor43eoZwKev7YNBRsYf3StJwxTkzeG89NywkPVLuyBkMf7vj9uPNUhxW",
  "key18": "rD6aqHUXg9ijto6AkzmASMn9WN3js2sWeD4KbpnHwMkBRMneNL29sPAe3i5nuVNB7Kka5YpCKQAmCQprcv9ZeGy",
  "key19": "34Xpyb1w9LzmL8L53sufMd42Xp5HdsFStVxrsy58UiGKLjapAQTQEjrBXjP4nmM5AcENBRATQUSSx7aJJuuNm32z",
  "key20": "3bunvpqozVLK2ZGwRr11pVjuiBEKNDg7iS82f63LAYnhyi1V2jjKpGjQF2ZjNstwbiYCPqMFwbc1eyXTwBrYyAk",
  "key21": "62qTruVfHqZ6z5tCvfGsHKQYCwwA9aiS3LRHnLCQm6xadsP19LqbtoF81LemkyC9sU6gXtcFjygU4gawgUbAgEXQ",
  "key22": "3EaWAensyULQPYtyH449nQy8a9ojHyhuugzVmUr4TLAASV9sHrH9czPVMw41Khvx8EXREX1ksVjTs7T5WsC6Ym9P",
  "key23": "4oyCYKnQ3gv1E5VvMGYpDDQ3iCiSSzvUon8Qr7yruRBz1CqSPtABLtfMrW2TttBc8W77hX3t6iSCWk7xTo8PnkYz",
  "key24": "5JQcgocTFb8fHbZfoWmb3MBE15EMYZLYRQTtUgXNmg7mmxmuRFMJtuFUPJu8tqoo7zDbaTk7uB6Fnp6LLMKn8EQL",
  "key25": "Swp8r6uAQ1xfBRgidp6Sfc2fu5UXQhXTBGYmjVaNraptJVXzh7Jtpki32t4YyUZ2E6uD5T55tPL2qHX6QjD5Lu5",
  "key26": "2vB6Km3A7FDFk6FEBtk6VJbk96pz7ziY4kD5JBf7ByLMqwFa6fbGropUzkiFadhgspoyebhG86N62Zcvi3Uc8Mmq",
  "key27": "3yzTutNinLJYyBGL63sG6ege6GMqKAgJ2rnDUGcQfYEyPPe2pwU5qVeCKbsUvnusuU6sgeGwY398iQt4iExfihnU",
  "key28": "5sN9H2kPJw5HKiDSqYuT6fa5SfNUM9PBP14V6aX3JFmKZvMcUL6NXp7f859yabiTNBUPGf39nYvX3kKbwTwwG4Nr",
  "key29": "3dbTDP6sJTNLqyj4oLE8vj6Wi6V7jRMvASNCE68d3HgZ4Hj6UrVF3eetaPbCwxhuPKBXiu4kP1HVR6wEhTHZSb9k",
  "key30": "4jYrE1P5N37SARrgdvfLGWrfKaS4cGApdugvnkfzZfm6LbpUcNk2HRFDtJwCU5sscjdohMCXVT9xkWrwSK87gvcC",
  "key31": "VhYGNScBWh4iPs4XZueaQEb8uXE59C6W9Zoh2iPqv2dUzkTqGDwQdqLahRSAt13ymQdwvcq3JCAaZeG3kVLdcAx",
  "key32": "52HFiixqAtH4isRpCYZsxNPrtbV4WBK9N6PhumgRaK41Q6CY5GNhmbbhaNzE3gx6kgr2yBSzg3YowMsiJrpJTF9k",
  "key33": "L6ZK58yk9ynbb2Rfem2fZN8WTbTExiZA7ekUXu19PL7bbQsMATuucmhk68gVHdXqWjz9jfaiXXMz3BmjW9FHL4a",
  "key34": "3hT9VFnXVR1B4midjPNYPXCDfAkyc7fcsTZztg6HSbgh5g1ktaVBG5QNeg4R4yZYPnwu6nyXaKeSoTckVyRrgsjK",
  "key35": "2k64Ho85iDzxXvaNoPNSdbvtL7Gw5ACjjaA3unWFtRYkcFWBX8J4ZwtEZAeCUEiR2CMMnRSUaKC4JKmTZJmiGb4q",
  "key36": "4JMVw5J7fEkxqMJYRKK5STtM4oompSq76BkWyeV6thXVFa5zGs3qvRFH4vR2BLoSFEtHT4LXowdeoU255Ffyydwa",
  "key37": "2V2VrQmZA9X6gyoCPVTqaR7fmRjDAecRb3KKdk6TVvRNXQgm4dzMeUZVLHzZCzrm5AMPX9Yeqjt45upNBWHaLfNH",
  "key38": "422iuSZRES9vgX1M7qf3pUDgkjf66PiPT5Prm7DsZui5DCYMpWGqLqHV7TnaEScjj4gaJDgz3Y1R5PdVLYrNunje",
  "key39": "2Uo24FBcSsFaVcKpnwSEWyRVwa9V7b9Sqr2kD3Th1RYSv5BmK5BsJnTfqidDhQEwYJAeY9gVqeoJGJx1kRdfJeDa",
  "key40": "2uNgDEQvSCSdVyb4sjxVtVokexaHMJiHg18gBNPNGLrr8vvRscJ2gx61uHsAdThwJ2vioYtbTiy2Jmg4KERqbDsa",
  "key41": "43VQbqKop2pyZfojzkSeGXQv1FBtWNkC2mTELqzKYAwUTix9rZ52CWfB5As7unKhoDT2NnPy5VtdKwoLri3WqHBt",
  "key42": "2CkfTa3cwBJB9STKYfHFME9yQJK94BwVpru7mFAGKE5D1mwqxhfRRkYaHcVNKyJGLxKYs4ifX1zpLQDAmNpwidHZ",
  "key43": "5EL4QtxuVpfqaSDBnK3h7vbJ3XUNMWb41iuDRHPzHbRV9dJaY5HMg2vwgoAxZ5jJCZWXsA8PpFviaDT48Lcr6WHM",
  "key44": "46XJw5FhiP3CVU4G82ph4agkyVt9G7FmHM9G9qYZhaPQB6iXo3c9mzXTUpvUXCr1LSCD9g7s7Eb9PjJdc5jjXmSK"
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
