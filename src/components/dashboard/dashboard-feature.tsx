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
    "5uCJgJTMgdQi48DmPBGGZd5t3qaTjyHCVJG8XYyJsHAak6fSYpi7nNLZLG1J4xBRAzM6Kr6HmJ5z84u13MXbizN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bh6Km1dxfrmJF5rSVu9nWdJBea83Dze2e98quvrvPBVzkYnJygXBeezjFLmVySpifEUxyK1uo9f2s5W2BNbSGER",
  "key1": "RcVZSfiVQa1aiKXvnsofGBx3qwsbiXcv2i1GVkBBGMDDf2RaoeySeHA5p2cNEf6BgCBRRgVcUQTwVTjcf6yCSsF",
  "key2": "5hzHhsJ36FwPAXFDNVEvtCZse3rh3cmWyZWpGiG9wDywVsmJZwGz14aaH7oY8bG9hb1KkeHuF9zYmLho4VuTa4nx",
  "key3": "nJiceS7WQsdrqiz7E8qgJDDgPDPmvow9vBppa2oaP4DfqFPdcmrWZwPFgCdXSjBvbBz9Q2vpBatD958BkQVMVUM",
  "key4": "4w9Y9egnZKgKfnuC8Y7rJbZSzyLcySWBjSVm4uKaMH3t5xrCA7bNfCPzQPL7A5dUtE18uHiawT2ZfyqFEomZSoqs",
  "key5": "4pvmL7d3Ncs97UrDvCQUZkAKSB9Xz4KSyZwPNGC25zk4pqTRnXEiRyWULn9fgR7qHBJMyLqnWnq738hrMMvmxQAB",
  "key6": "3F3iwq8hJdRss4KGj2Qe1JjVNxAE9vvqvhf2AcPhdFM93q4TYYFTeL4LnLvKrAK6UudQvgBqE8a1NHb39Y1YNewK",
  "key7": "2F97hiA4qmAvJRwgPms4r2yCZczGw8VhksiqhhQ7nnhMpG7S1oDuSSU8t87hxLBiytQ8segQ7nPWXqGiqpm6jc2t",
  "key8": "2FXp22zHepzFA23PUb4W6BgrspTrEayS3eyJcp3mn6m6iHo8YMhKhToYJ6fTmd1aF89NaqafHjLSQKPsu5827xvC",
  "key9": "4rFm5GKucuPi15nLaWtZFzH333r9G72aXh7V4fT1A6yLq66VBd8kF9avuLR1wNN8x2NBgY9csuUGfs3uFcyyhyhX",
  "key10": "44FK2Gu7TecGEczyekKn6JP1pfxgWiWebzdUCCv7LNu61eRLFWk3wS5BJaZNwZL1D6zK6b5dKLr4WX1rQKkqwP7w",
  "key11": "5ixfLAUPKdYffZULEZ1NR1Mp3f3wUCzxkV8DoiNfRAphFmezaaRWkRcFsFZF4R1ppGyceQCHCTMyLhrNFu9h1NCo",
  "key12": "2Zk5dA2pi47gUJBpJVWGtJVVWtiuxpxsU8XYvidVj1nkuczH3pXXeBVAiVWtphNcgbM4JBB6XyumRB7YyfQtEuuD",
  "key13": "5QANYXZJgMGkPGS4ScyQCFYqjvniXbDb38ppPdkue5wnK4KmR9o7R3x5sZ1Y4wV89Ng4hXNYmTwWwtqcN2p2Aoq7",
  "key14": "3z6DFSGLoCxnRtnEhYs5jJ6usQt7f3iF2h6E9RGESzyy9giAZWNsiUkcKjGpjnPAuZtpnxXr2kTyHkiPG2svZSGh",
  "key15": "23mkfXmaSYPL7QngQyLR9j3CJUVQtqPXk3VXF1Gg6e7wk7WKUotHKFdXSvbcTECsVpWpQVuHz7WVzfHJ3tcXCm62",
  "key16": "UpFzwHCj5TxanWgThZk5CehojUkKKDp4vvtrLdBdxpsgLXajsbEYK973Uffna5YALY2aUAR8Q72uqn33L9yuiT3",
  "key17": "4oymda7rATYBsub2FZBq6QCxHpNxUkZVgSYQg6LvJRmYnnKqFNngYmgjkC59MA1vPKFLAobXCLzrvaKCUnnT8FvK",
  "key18": "4iHUCTDzbZDdndkfnTetWVLjF4wxeSTTeGeX1RM7Rz25grsEpW3BjFFz4dJEa1THNJ3mELXDiLqepSGDyfVaQTZJ",
  "key19": "4ky3svNvA4ce3QYf17Ue1UkGu6ndUpxcQTNJh4B29JqFw8mpBqQSXicNUDio3Gjk5MMTrpHiZU2GuYjGKtGjCV1A",
  "key20": "3YgcZ5Wn8F2Jy1ZSW8CcGQV1TmArm6bAffLWnmygNo7ZMb5Rb1S6kprXh3yL9KFKZ5Ji2duqthRS1CdkipovQx9Y",
  "key21": "3vMRnu31URTyJ8GjMkDeta5GqtjvtwkgvwHf4t6iRtz1igHnsKNLJfzF2QKSnHg6w2tu3TPo6fYGL7aajPEXHMig",
  "key22": "3xomQzwauCFKtuhoPRMvSMvZeTehR3udTFut96JMuH2mmXQpkEh6gciYGUhxLdAyHtrVFHN5ND5eKoWZYk5ZUPq",
  "key23": "SkKrWdagNEnRj6WXcEU97MfqQLSCRYTLcZsh594Sz1kSCjF6HebgXyLYLtjXuVeVyFTouhcDRue2eq1LpkB2v35",
  "key24": "2LT4BXiE8upRM55htp3AsqzVZBrbDJX1NLuwRiecX5yr6Pq1T42iZWi7qMF9CmN3Fmuu29UP4VJDYh4gqYxivHMT",
  "key25": "RYNqaAYx8ii9kkrWqtmr9kL2aNVerhpfj7DNrUgQRp8TWR9EfvJ7A6mo2cjSZjD5P6fbh9xcrxZQoSK71ftqDb2",
  "key26": "44W3FNaFZAyLGdDqUU3v7zEL1fWmmzLjsripUkbi8NEFfpkz4Br2k8aTnd8BUh5PnDJ9uZ3XGrtNKey3ovjTnPjy",
  "key27": "5m9qynimPfJWd5zmy8uJq2bcKZAiiXdccYbEngyBzM2Zu5wEb5h3CufydPkweWaKP8tjYAiLuaY1PHmoYxkkLb1b",
  "key28": "27asQg6Usni51JhWDgxXrMLWMct8q4e5abNuB6WutS84wg9zbTNtaM6ohsQeahBLWjQUszyRnQgpFRKikjwsqXXZ",
  "key29": "sGTR5pgfkmkzUnNv4S9psN9ooPPr2cJdDWFnXDhybCJyimCPjtrpWF5H1aAHA4F1D1UGTQGpHmRaDA3r6uBA2Pq",
  "key30": "5XsmadLDA25FXgq9FoHXx1kUYyzmSo9gt1kxE65Y5QSEUoxkhGRJfSbEobWdAEKUzvLPepZ2cPwn7uLUXPXGUiUv",
  "key31": "2X4NQASF7oeMo59jnPTe1rvvRRbDgUBgDiZZSX89spLGwpQygxsKv7NqCsHJgfLkGvBmP8igZrjJt4Hye8iWWecQ",
  "key32": "VKd7Qd8yatXXBsjLvUh2JNTkv7v4J4C8Sc1gGFToQzzwttX2JgYDibV7fKNpmQKwZEg8nMoJcfgsUcvaUb1BTQC",
  "key33": "L1CQxdaTDcUCD637ERM4o5nzFCVCuLWgwR2Ma42axJMtus488fTRv4eUiHcjvdqWBZL4TXbXufeUVoqvoHzEtdJ",
  "key34": "r5CGkyydJK1RuBwCYeHvhm67Tsv8mshTtA6ym5oaeAQdR2aJ9xy6wE4PtCVZ9JPRedc9sCpWrwYmY45KZdbveTG",
  "key35": "4zWg6GxRb97336hcmmjqfzq8AvukWMUUXyqucSWvU4onzTPV9S8LE5LLDJp88s9DTbXkx6UH6SZHUfw7JCa6PqZD",
  "key36": "55UJeZu1hmSLLWRdBq6cT8jYCe6zC1dFQ3MC7z6Jq88EShD3tQGu7SpgvV9wKNnRi9knFiCcesZucLwVgTk2GUWn",
  "key37": "3DNgr2BPfwtT58iDFJYN4B3nEST9mmydmuEecGBX76SN91GkEXHoJ7oe6H9VtbkmT3ZUw5zS7kvzUUit6iUeJSjN",
  "key38": "5tWrP53bX4LNUy7ycNW7Cw5RT5sCLGA1ngff2iPo5QE4pE7X66wGTLmJ31iGNEJxjsVELhJgq6byFjCUcevC6ac8",
  "key39": "5YGZ6xxRXLjaBFSbeVLGBxb56yjiBXzw1gyf85UhtGwaGcrpjFLDJmt74mZ6kYL82kQ2ZSK3thQePkGy8zy9Yhju",
  "key40": "2coXDzRFiaoWTgHua7yq3t7S2JBzkyEHrDoffwfErF3r5FRQY32U6w7e1efLufPKPn8G5nseakNaQjVc9obupzZW",
  "key41": "2UfQSBBzXLK1PC8z69FP9YxRY5W4P1mwnkch8Pu1dp3NMWroVcjR7gDZHgSNXynVQuPcDmY351nkhPqQqAYdrpSG",
  "key42": "nE7zBnw6mLTvN7pygddCv9iLYxbZste5riMfh9QECV4X2nSxcsYiF81GDNhdoEpWrCQyhks4P4GBDVDKPtfk5wg",
  "key43": "4T1LMcu1crw8irosrFkuHxHfGvhA3RhwqwFaoUR269JNikJeNW2CobgCac8LAJUfr58vKB5ufg4ad1L7wNewrhhc",
  "key44": "4KNjvAb1guEwQbVKCZaJG8axZTVC4USkWEAMFzi2WdnRimDSxYTVJq2ToK6QZrKziJQjx9ycV5RJXNknv45BGxaa",
  "key45": "55SM63F4wfKjohkavBCK53S1TMeUdbaMmjdxUVczG9fn4pTPJuzY5jyZvbWYmsaoRYmiH2K79NnRL5qhy9hpddLd",
  "key46": "5a87C48VUB9wZ4z8g6MVxPvpQGcAAU5CokiSK3YqZ21Fj5F6SvivVyqGVGrE7yyycivKkYA7EjduSNCshCzc1PGh",
  "key47": "kCHpUc2CQcWZNeBV39Ye3HG3pGS4QVhcVStvoai36F8hhGDDLsAtfypU5i8VS5Mt3XJmLPotZX1UZd3MkPoJVfw",
  "key48": "2qYj9rgKhnCZKqTHgrh3ZuaCTYMU2jiGpKG2ho9WChxytPnPAS71jXs7roK3RkCYQTTaZD7VUZ5tgtD7hSAdiNat"
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
