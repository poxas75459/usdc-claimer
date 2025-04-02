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
    "429Qgxasu3QNRmDGN1iFsG9FVgbT6TJd3U1PQ82FefvHgsU7qRUeswgHaaNvYosBFEASyFhffmW5bMwtJixCVzAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DPQZDqtRWh7DLYrXuJRYSkSBgrr5Rw9r8seSKJWXY6EXbfzLuEVTFRjNtePYBQum7YhxxrsdAs8JgncN2NcNdjX",
  "key1": "4jQEB4yxXNeAoVexDGrb4sZMmwJiz5Fen542AAxbgWPFJJV3FuS35TWkEyLeYYkejGLAPzraVcUZE8i4aMQspehP",
  "key2": "4ST17wQtLxNbN9RRAj3PFrdiJEsaeoFwc57iUD6EbM7MQyHeFaAxb23GRGaX8sRXaySrtsx23ReByzBRweSWT5b7",
  "key3": "5tn3uDsDdgUKucQdHsJEHsHEpYriUWet6r2Zoj73oo2A2scBdYaQnkwGQ1mqWHeYT2ohvrCaz8LxvFspVt4dHDcJ",
  "key4": "5Hj1PtTTY4QwpiXV94GA5VuaLPh6kgJDcuTfuRpKNxNhQD2i3etkFdPRzgim6NyPJ2T3tmS579sz3Xhhqzek6Ke8",
  "key5": "b4sK1bqjdRzE92s7vjWRo3mTrjUd2ZiXofUbPBcqdYCNJwbfMx7wdn5D2EWrribZLkW7WfobG95q3GqaowxPoES",
  "key6": "288kmNDPtEZfHyyxvhNzsRjDvAz5jAbmNqaAi8Smgf1suUNgEzLoAiZqnd4dYqdsyYLF24epkcDYkXcUz1Edj9yJ",
  "key7": "gX6oQFhdy3q2hXCQmDrRC5sXhhZjFidUpibQUTtMJDm9FutQ5Mt8uefXV17Fmw7hYNUTDDJ5p3ApWrgxPQZHSbX",
  "key8": "5iLM1qmiVbHhbcfD8dj2WBC3keiP3E6Tsbp3LuMvYa73hot2YZqhMTxiAui5ujbbdhErFfhT4W6La8cXJbzb5mHP",
  "key9": "2KZn1nRj95rHikWAEhAYuYHS1CX1e6s36ouquLxWeUyfgbLkYpc4SLn4pGTKC5mnMokLWYaNh6KJhqUh9AjMfnTR",
  "key10": "255w3NW2X5V2nJi2sdaLtGcEkjNxdaFuWwLQuw433pMxf5z1LFTHLNVp8vzDMvsrp9PpXKb4mJWvE39JLenWdknk",
  "key11": "58oSqAfhoG7owVMX9tAijxbeaCezgKPqGuQCfoMrcabPb75LfrEWuR21amDZt9L6LMaEPM2aJQwqwwJugtzzJZSC",
  "key12": "4RhdJaRPBXHa8GGRriK52FbMPdM2rrX7STtJTanpHZzvqRp9rEExf4Pp46B1adRzvaL8gcq98gUmcgR9x1cGC5BU",
  "key13": "5PxiyMyYU3jMcuNwf1DYVTdiDShngJK2MtQ5yx2hxRVDjjbeDbB7RFujrdZgVDnps9zRuDoeEZbAQXRu91ppvdfo",
  "key14": "5s2Fosdzq78UWLHWJhQksMLEXhsQkaELgd8pPqBPMf7ok9PuVnVJBu5ddKCkFeEFpgkt8AgsL2rgHP2B9SKryaVU",
  "key15": "2bqbVwM5LoEvKBG7Mi86pyHJaa6hiVRPcFCT13hqVbKAwzYZoyvuXEX3RL1XhXCr5omFeLd6RFfGtNqsD2LMJCd8",
  "key16": "2w6bZeE4GUWcgDHMRstYdTEZzE6nSmHmhLbrCj9TSHFqi5NmgaSCtBkhBfRqepFrMDfUiwHbSdtv29J1cJdEBFQ5",
  "key17": "2pYfE6mjuYctCCfv3nafVgMx9ZaLtx1wAPn8sfSBB5VeykoWYPbwd4VajBjJmeeqJi9rQR1UrjnvvNw2g9y4TL7q",
  "key18": "4sAvgD8RZAuwbJ4keu94ZWvcwZQhSBiQGvgFcn2gkCdZTvhQHNPASizuj5976kj1VYKonmjdLV6mGrop7xbLhfQC",
  "key19": "2EXnm3ZKFiB8Ug5QqrErGVz24Y3WYX2u7Dtk3F2VhLueXfmnhR5reWDK6shyuFCPbqvgipHxsgCfjRV88VmX9GTZ",
  "key20": "5wLrjDdn3hjjALVfFjD5GfS2zwUfFpkMx9t4g5BagGD5FLoMRq1onEtzRsTBgFeiwUxUM8ZfvxC5ondmuTJ776wa",
  "key21": "2fCgtP7UaJLoq79GRXWvsRqyuEkHQyDhv3BgrBTPBvaF3p7XxTPs4dzJMMxTh4gdsfmDExEStTjE2QsBpkEn1cJa",
  "key22": "5PSBJfa8CmjmrUiqM8xhYowFajgcAehyU9q9oC2jKqMevofwCkVkePA1nANgNJEK2fmwz7QKrNjgrRKRpC5asvnd",
  "key23": "MFjsHefP62nSRsVEtjnwU3rwy1kKoUVqgaKtmjE2dMiZRwpGA4cYRYLr7wWnLJLnrBfYejkC5nYFgQbCejudDXq",
  "key24": "3RBNGs5pX2bPbeRRFkyQnKX28QYeeRsva8oXrfki25rnitQWQVk7Hh5Q2rLL3947WbFN6vkcG3jCUV2FvTighuQk",
  "key25": "if8C7W4pKKx4X2RnkBWCXknqGEDgWXffrZWEi9b6ZWCcGwNN2kFqgAreSbvXZ8oWjreY8N4KamegLmPHiMd24d1",
  "key26": "332EGuLf8tZoVqc4AVif5GSZ2RD2APCqigVN8RNc8yq2guuceCjeBeqmU8uv9ofs32WsuCy61SwGi2d2ckZqCSus",
  "key27": "4o9SNFTNtbDQ1Johwo8ySrvBmWLdEphVLibPRXK4eWu4b1v2KWfXNnfJyX4rp7KCsTFy6ktoKvbkKAFNjsZktP1n",
  "key28": "3qU1P4qCPYcuD4EGikZ1mdyktWzWta4sMeA3U2fE6JSPTckCbvY5uyuKseRWHEJ74sJsEJUqtr3YrK2oU5VayvSz",
  "key29": "AMBe3RU41wmUzTLVRvRiGpmhB9rBhATyxWHxx3Vyn4nfDGNXhP3Mwx3Zt95UekEEzsa6knW3zPKdVtiYbBNtUFk",
  "key30": "2jSdMey8ch9Xw5C6r3biSbtgT3MUXS9itSvrSY5dVGFkfXVZ9NY265nBFCfnVGVWM8sZpD3LpoUG8hpjB9WZQtaK",
  "key31": "2Z9s6S3azwKsrerdguSHXsV3HMGBZvS36bYsQBWneNP3i9cvbcypGxsyNS86GCfd3MqnhPussee8dqa5qQzQsbvu",
  "key32": "51yZ2dVvBbGZ4mq7GW8FKpGkZyKVAvCL133bhnik8ctDCtpbhmr8EYyc3bCRoe9TfmxcP8Q1jR3FwKTGMU3f4NhD",
  "key33": "3MgBakVjv6c9P9RAGHxKyWZta8PafK3zWPvQZ92pc23moBUfPXwoGTVxS1SRRoQC12jUEC8oDwGFvruyfSLW8Ewq",
  "key34": "jHaXKksz1ufssKC8csWPzC7nDA6d1PMrcyG7MxRY69a63Cio8rQfLkVa8KQbdn4qwD1vePHXCU5sWMg7BE8W2sE",
  "key35": "3KQapBDmQ8QrRcbTqqT7XbsSv3fRgcsWUP5UHrHVME7sBHbkRD34APWwipBKPjoRgtmLiXSM4kpTMYikSnaFgdZN",
  "key36": "5rui9HWMvJvLfHnYFg3VenEmw6AutBKeyEH7Xb7wyyTiPZjN1eHL9yFMQfuxoRi4puzNP1F3pkK62n8aaM9G8fxd",
  "key37": "i8vVV9nFoBQxyTDUA3w7bWuQUuuAJEuogwUso3pEfnVRJMwz5HfgKFjWBUKdDBqeAJPDn2e7vPp9j547J5uV7GN",
  "key38": "38ZXRJranK5qC9xE3CV9ntjBFqRRV5qtsLsHdTPfcQT2SWFXMLVB2WwuExL36aATequDvTmX55nPs9f3zGBMkeVt",
  "key39": "3EH8zt1yt1j14s2YDpDdN5AAqfgnRRhEedNJqGwyeKrVkMGnEKRoJSR4wWW57BcpgonJfWupTZV2sZxcZr4QUGSP",
  "key40": "2Mut4kKEQHHEpNWSnevGSNH7y1yjg6qzSDupDLY7qUS1F9eCUNDj3KAMes7HKPq8A17BZX6GoKVrbnMKwVo6rNN5",
  "key41": "R3VxFZDNJTHVP6B1j4TULVNUwaap37eHqDSvt6Jpok85adDrY1RdmKSr7AB2Xt6YAYuCtjEBLMHZ2eXhr23tzHt",
  "key42": "UqZokPXyQRur468XaC5yf7G4XgWjwAnzEbPWijLvb4eCkb9oqZYNESdySMEVdE6tjJpCd5usgCUsxmKFaQ7J5bE",
  "key43": "4cxq7dGFMyW4a1x4HHNG7YHCgQdexgGELN2uD53drAbHp8ZpzMMAFRd1XTdk6qbdVEJ6URZCgR2kmTmTrevxL55i",
  "key44": "2qRH8zJExP7pDJz4EPM2breBK4sFD1i1cxfMCaxfbT5T3weZRwnj8Uts2Vj9qLDAEAeGntDyN4mMUB9do2tePeG"
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
