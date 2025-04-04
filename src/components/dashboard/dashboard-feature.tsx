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
    "XM3pDv6U74JHNjc42iVdqc4sXegXE4AuYstqGSdoDUbioFGjeZGko9vo74jsm1oCBkjTkTc6ec92kTsAZV7jWYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4szGNZejzTv9YDWFAKoWeGNVSfNrvXkANRc9aDYH1MFRLJe7p1r5vTioKhcp7i5Kk2q7UzCPePqxAfNFiaWQyH7m",
  "key1": "BrcHtCDWmT3wXBntyasNnRWUe5XYezySsMaoi2cJ4a1GA9bJK4w17ZJMoBjKTL9mkTiav1cPE8m4PTujHs5jQT2",
  "key2": "5C7NQsD59tvf6MZJE2a978UBAjEKfmAMTL36wmm4YiyvQCV872PQKnffQbiGju9fDkrrC3JtdAnDWwu9PQuNCpr9",
  "key3": "51tpZJ45nbgLRGcHKdjyb1gzt6Lg3H1JjBiSQZJL8L6NrUiTiH1fqoU75wRSwe2vME5xnCUFKrt3wAWFf1KsDRnq",
  "key4": "5gMDWALLun3d9am6bvJ4aSqMMjhMHx6A8dc3VdmT9UvCdM4FLN7eJVkb656z33SCHJ5uS6488waNso69KKMNdXaF",
  "key5": "3Xa25nvj1M8WsT7W3HCS2hT3T4EQwoDFrFLWdxmG81bhsufSJKAnqnKd7NxHRSz3VLA1TvvMpJYmk1ZtcyiYf8uE",
  "key6": "MqUfgE5tmPPp4G3h7FJELRugJNBtdYeWkaEJDXXUoeYLXs3kX2PcXYeTW5JvqZncTet7vw7Pu416CTLS8yYk74U",
  "key7": "4wDYDrxR46j8pDBfdEtmhSiJY2eXoLLShAHvYWYvjbJCkcaLNP8Mva3vj4a7ZvGTGP4vj2tjfY4MzvjrsWBFuL2b",
  "key8": "4EKkQvkRbLDEkeL2EgoBcYVcq3vvVq6pB4Aie7B8Z12NodxEkSYdR9RHZMH664cdNU79gJsQNMbtJZ5ZX8gVd8cr",
  "key9": "2kT19T7uNf7sDjECyjDs7y12aPG99LjZRm2wbVS2aEL61qQ5HXmNWrH6LmWhfypSBFmYa7WjqRDH2WezrC8L3bo3",
  "key10": "2gmxaVbMA8Ys1889zC96Lo6PUNBMd11fNPgTHUp5dvNJ3sV8FvyFxSLUTqcpyYAUh7UUbwnFFThQp2RFEuuR8Ev9",
  "key11": "2kWMY62epT6TyCYjA4ygdvVCytXSaeG8FKGxN9BmSwbV1scDp1mSvFHxyNS3JPbmXiHQZvMcMWRorZxNWFiok3TD",
  "key12": "3mWH3GsfhpxJ8p9CeDMv6suXudne7H7Nk7AXLUJk1nQafmGQiydPfsYYJRrnkivhQM4gVdyrqnNTWuzTpJHWNMk1",
  "key13": "2CntMekrg2TU8VUZZEr3syknkg7sMdxz37nTqSTcefQmWqZr7eZGVMZc4nJyQ4FG8jg4JGB9Th29yNtatMbuhK4e",
  "key14": "23EvzqkL3F8eXYu6eL9AMsAF8iGW3bsK9EyFzdjh39RZV84S2nCgDpLZG9CtGmimU5HCYrnvUsHXioji51S9Er11",
  "key15": "4HqzVPrJ7gEqxNbCwnWAk5v1bAz1tPUzqZvYbBLsyuq7qFQ23XarWxv5U7RFCjqUQik25QGHBCRJjCsEadPG5abW",
  "key16": "4dJJvDZC2UHd4VGYUnB93u25MdWnfCDKMsT2rSFeRapUuq8ZHptHT2CBDj4BVqrhNqE65mMvxk5vmyQHsYadidtY",
  "key17": "26VGTpdm6RXJnHuemstCedmR4esoBhpiGePVeRdt1gDN9fNm6QQ8CTpSjBRGCjsWUB4jDRyahMxvPkHejK38xvKb",
  "key18": "3abiU4XJHRkdmhvHhABJZChfq21chc44DDem75jAJBuJGdRpbZYczfqwrfpcFCZW7u5nyzsUKfzLf8R6qdnuivqc",
  "key19": "5BbjtQWXh1rezXQwnzUhjdEdXmWGgjLVUCzxH9CpBqQnGPyxFHuTuUNXZjVevethLucLeoya3hPkjvt8W2BM1ZMC",
  "key20": "2orWK1EzwDPw2qnhMQCqKFgBMzYmYxnbAL1nnbKihaxAD8mbBfJZ647m9RToqN6KR1zxCSAMNG7UdTdf3b4Ah5kX",
  "key21": "4cftUFfwFY8X7CZQDeMBR6wiBvFHNvVtrWE6ntFj6nf9TrgudaBRi6et3KiSUEW3TjQNYUQUfgsj2KhX4LQ9sMB4",
  "key22": "5eroGEJqAhH1sUtpS3PK1EAaz8wAGJvac7F3Qn1RT41q7CRknsDcUUatTDy92Fr2g1p5j8NQ3ZZUGrgXfKnhw914",
  "key23": "3DE9Z7VsP4jDgZEkBrGACj9dKfRuxMRZhhsP2j9mcYPuE3nG5u5xHdmxALo7K6cQVVx6k9VUebX95KGQjnuFxMoW",
  "key24": "3bgWLmDokU1ySejpmncgD8yxuWnysqLMAT1JEPpxDfhBdS4rP5KeZEvbMREyYz9dsQenpBUQz1toqFmbntJQPKUU",
  "key25": "Bpce8UdUYxaxZ1pwMMnWLmy5qxr479ktATNFXYwx7yXVswGDawwPDENDr8GkHzpjyHohM6i7WgV69AUeUTNqV4W",
  "key26": "53dPv6Hmj9F7LEfw2PbuGd1gzQMWurehpGBHePKFXrCS5WTpA4JiQcpbms3SyFRMU72ct483UbFdbeB2FMUx91mK",
  "key27": "3PWzxWas31Y32juatDVaxP9BGRfXx89etvkxAx4WRuhxqWPrzDs9J5d4Ff1GUN6ixayQMamYYAncZib8kgqj2vDW",
  "key28": "52pMSKj91T4E9AoLv7TeJHNmEbzjQAfuEVRAMZge11ZGgWMGWcZUNmJu6jXba94p5odNsEUyPjsMi64okkaX3JVt",
  "key29": "5X3gkvaGvY8j8Fdv4W2KYMuhEZxMtXVCgWTVtx3n7QFAY7ywsECYaLuZtZEqaWw4XhL44CYSG3Dma2ZW5EPueX1P",
  "key30": "LNUphnhmVeHKsJP2auh3DhaNQZMot2iDq5tRdGurEi7hSzm4SaRDQgrZKaDnvGDzxpgJtP8B2WLd72snrcEhcPP",
  "key31": "51MNweVfZbi2XSgpoahQSRA3mJV3BH4rDpSRuJwvdweLuuCge6dQzPPUGCnssVDaYVLLEQaYzAdHzrsoaeAnxJZE",
  "key32": "5BVKqA3Zze8iBhEVyZbJPb97TLWPtJwsxQJzQvBro5DprstVBj7yhcGayr7m17TinNh6BfvQ9uLXdQkodwiuJrKX",
  "key33": "4AorURvpGvNdEXq26azf3hTJvR4g5DMYcHorRcDfrx6ZEe72qY7gHYL19MmmrF2JMsYKqgtYfXMQfr7y4wjVH3zf",
  "key34": "5rLkygzUgUvXGRQ7DaPfS8x44dVs2MP9dgTnU2BZTUCFPBcqsgcyyZVoTS22bsc9TdekJ4GMkVoAU9H2yQHZpKox",
  "key35": "4DAAb3y9mZ7n8iTCBnHrrn3uFjLB8FJYXWD1hALH5qq4N8cf4hGLFqJTXxjWYXe3r6vvFso7vdFckoxRNMEH2HD6",
  "key36": "2BFUCdX9pb5y9tYtPmVU5a1vfRYhKUFXnbLB7nJWRvF73agCKcTZPE1aVm2bPnULZAVadaGDKFQLxbmrVq2f2ica",
  "key37": "36Fx7wa14jkKzcNqPWnSeVugDWbDBjwQ6BouecQ2T5hHfXntSaJYRNaxTNtkBPAufxpX8Zd4PkFQyhKs6JabfbPu",
  "key38": "4KHxr7SjSUsBfVkFZwZUz15QGXfiNWsNz8wm3XWtbrhzbGQw4mpQ1rqds4cpJvx44ZBQXiNJ3XjgvBvHvsXwFkmA",
  "key39": "4x77bJPVkrAwNST76vUUeDDpW3GcK2YRhwLfLX7D9Jgs54enTsEg4EPsJb2SSbuvAmpKtNbMF9YQ1PefHBR6Pm7p",
  "key40": "4p4YTr82mq3oxizY9NaBzjYUma6gTPfueskEJxZCnxbMPyigC2BmYotAbBe5BMpu8wUpw4smvDRpkdpFNquq1D8J",
  "key41": "WeDaFDePJB2ZFEGkTr6uw1RG376PS5zpxk841QXsKmxRV61AMAGyR9Y4dc6VAsGEev9RpoQh6ncj2Vro2f5JHAz",
  "key42": "ugnNJ7aqhX9N8JZEVqu4u7dwY3K1uf7htziHbtJCkFpomgeidoyXV8z4ERUpxEE8RTVQ8oKBNdPW6zPusG7DncA",
  "key43": "2UReGtxPbRD8ZuLcLEekRFJodCeMmmQUe92xokxgkRKooaeoGFgk3i9PA3VZqvAPcevMFP36Vn5DYu4T2ZAyT47Y"
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
