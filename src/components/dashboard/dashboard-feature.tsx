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
    "5krW8wmevGe298b5tdXxWhR98YREjM7jBoh5EwRPTeVSsLzPFaQpQWxz2yWx4fAfNvUjtk6HgZJczQA4Yg1FY4oN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NAd7EQNtoWJuQ5q57KYtvHwvRXY5Q1JSPCthVkVFwouRWVg7KgP7p2oxnAQsXnd1JY4pj73hG9vhyySKj9H7N6v",
  "key1": "jnrQ5HgtfT6gmD2tibEPYscRya3qugMVohNj6LXfusPaHn1gPRVSrSwN8ysmDRYQSCULseJobj45bb3Av5eD2me",
  "key2": "3ehNPqh8DZjNu6aZjb13eK8hxZzdwiHLymjQnsT3tbcUWZ3ReoVwiU4VAQboxP1ttsr777AVruDqFSBHUdtJtAN",
  "key3": "5vL1QUzSAMYYuejEkX2Q1UZ2dtNY49HMipFXf8KnkMDvW4VG9Jc8rDfDvRoYwMz8bDp4YLq3Tnsy4qj59N8fR1Z7",
  "key4": "zaZuun9cN2iEqfJVoX3wmqEMUeAuGtrtJSMMWzrXKvhsGQWEqyNsMNWPbr5esQqaGdip4RGgAQSoA5Ng1me6R7g",
  "key5": "3FuNffffKMM6VYFdiFsuHXwwUeD2DgDFFhngbqaCpfvf7gc4Hx7SeCmJRGDC7bGJ866CS39HUexkFbcRxTmU46qX",
  "key6": "3ZpFoQA5uvkGNX17UuEgw9G3pg9KJgQQF2KRwFtJxvPGPSPWYbARsTx4SVASbiAcjFyLZ414btt9hTtKaAsSJicQ",
  "key7": "ocxrEDHyzQeFaZmpJmGsGAUBAK8bhArczUXNN3s6WWmhJz2fSZQ4bs15T9KdRodhxmyyUb8S4Yo5vVd7W8CAUCf",
  "key8": "2o3smu698Ms1BtjcCzSADiyLKQkqUd3TCLEZn8DznegtEDzhKWQudUVBAGyYduUqYL8hgWJh2H7Pn4VfQpADwA3S",
  "key9": "4yGUjRjaWDJJLXLtQykSgwSohbK96w1hi8KbkDwVfZSFTKBdUSFoL7onpEu6pbavuDbNUeuaxQgQ2dhfWG1ZpcB",
  "key10": "5bNT1723FjQ6XCpNHq1MmBzcVjYNqShjW6xZsmM4KyQhT3MzegU1baaUWdYH5mxVJmFNP2xRjzaTVYcSpsxUBRkH",
  "key11": "3Vp1jYnMwPunDkMvwLjnVC211LTxnT8tq1Efy5uPv8h9kfj8sdZgwjnBRwJGrVoU7ev8ZJctC9pdbzbfyFYTTmd7",
  "key12": "4JafQqmprYu4oXnkCmEagQcMnnA2RRu2nmvfVV6Hd2vnjd2pSq2Jivfs32W64cGSymWccErEGYMyXunkdByQFAyu",
  "key13": "4J13sHR6RTbDeJnDKhNfhvKQw4451xdDX8cw6G26foa7xJEhUyLay9yzTFT16ezaW9KBgjsxhU3tBB11E1nVgWti",
  "key14": "47gRRjoBhzg9kYZrP5bqMu9BZS6XL8j3hKyCQUsQbqtmSTQRu473Crw6iVSUHUpQDTMpn9bFgjGUDMuc5zEQiy5C",
  "key15": "2hH8HtbQe4PHPk7B22Aw757gmriqp9wDPpey8jt5ttgMFAoMhmZx1PMKi4hPxqApyMjc3mu4wjd85uBuAi8CgnEz",
  "key16": "4ai3azvQYbLQDkkZ5xWUaLQwGjBZE9ZJhv6CAHA1bmFM77XsD3srHY7FCV4YTYRcMcwpQnm75FkEGbU4ExShffwL",
  "key17": "2DoBcs34EoiRUFyN5t1ZdtdbuaGjoBHRuiLVzsHNAnThiLJArM3yXyHEgogUGYMQmA8peKM1feoMZ559ANvphjMa",
  "key18": "2PjmiYbee4acucDfrqTGgDmZgWhc7g2WysfEb9nc4bMkkTvikpAd9bJuC4t1osEwVKgEoMvam8xbXv14qCD2xbH9",
  "key19": "4Kk33D8BRsTZMDPcPEmyrH2PsLxN8ktGWBCT7LsAC5CW9wYrmjqGUtutZvGNB1PCvGHfQsoKmUCFkrDDz1sqWLrJ",
  "key20": "2TdE9XWeeSoAk5N82Gkj9iZGT5hFURvsMDrn4hsQqkdbCJoY8mgqog5rygxvf1MMKDRB4ZkqXdbBEqYLqBQs7H39",
  "key21": "YGd6fYF3NdTpkg21RUSavYpCgwLwdKbBzriC6GpVz1kUPfUVv49kMYvnL7icWbSPeSQEPEC4TbjLmBiALXo3Zq9",
  "key22": "5gVTZyDaFUr3oPJQkyk5YWfew7jotPCC6SEesCjqF3SvUer4twya2pYc94E4jBXfczuZWLxsCsPsCQ7mfU7aP1Hh",
  "key23": "4FGGUL2kKHqhbDCh2KokhjGdrJ89YjSen54p44nb6zES3PJptyt2TR9B2HTTShHXt2mmVcv2QFSpob8L7BGEQn6M",
  "key24": "273jMb6iS5e4QCEJfxXdZNDkfzko4mw3fchQgM968LVuKH39UoBS47TrAQ6cWSpXHpmMFVK7KmEiP6KrUt5M3YNa",
  "key25": "JHsr3KjQsD4pnnm719KnaDNqXmaKijehsqsxkS9EVPLDARSXgxafqwhPkfzYa5SNuLKyoMhMZo9e2ux2hyFVdbd",
  "key26": "5YuiZZosRRLGmVkJu2vSyYJVoWNGBN3bVySrSB6mddMiPP4ir8xAYaLHmzaYi5vqY1DV734HxYcBkkn6X3xvRpH9",
  "key27": "4MMmXB31g6L3BmnDAB42p9Ho9Uy6irDvKuu28z9yUWQ2uLnKTKFAByhTVR8s87AzyYrAW6Fe33cFgo2f3UvgWDvY",
  "key28": "5JJhMCJWVcrq2KqBhWANL3DZCTLDYmMUDW9FwCYocD589RPPnYmPnznhgCRQ8cxZM8AwpYJ9dmG6oeuZSwdALpiH",
  "key29": "3R5cDZv9TJbcCSo7xdwq4mdae8kt8CPaSCmpZExzXWNSQ9eASZoS6h6sqYhEomdYpfEdQxBomgYRmUhZRZqQ6Mfc",
  "key30": "2Khn9m6f61pfUEg3bDVDAVs5XCKm5rdeJMN9YbbVWmPKftRPVBpUcNNpyhzQNW3pJbZn36mFLUkgAYWQGzGYkhDa",
  "key31": "51nkjK2Umewdvj6Tr88UgGH51qe4Sk8uoHeE5ZMhNdS6AJNrggystihP1nKMNVmj142o7a6HFQWYY1aRDp2yK51K",
  "key32": "43fLNxKiEjD1vQrUXenJ6bkE33HMSoipU38fyt6Aw2mdAfvMFyrx1bv6TQDqxoVnbStMXy7Wbf6vVM99oUtrf4vu",
  "key33": "3cQk2MGqWZei55ScD3c7ZUYnEQLTC6qvNXUW5PQ6QGp6yhUrutmwm1hShMvGRwjWvVnZnXUN4K1zZeaFXL3PmPte",
  "key34": "3Teyvt9mnHrYzeuhxQS88W2Uk1rsBDPBCD3aW9eJ7MrNF7aj9xdE3QPfMvck9Q7QhnKS7q2V7NKGBLMR5Wajwogj",
  "key35": "5QKm7iEwaNX6Go7MWyuyghzVyUjpMvupD277o9A9MZ7aQgX68ZrzeniBzPmuhLj9Vy4pbCtqn7r73sMpTCE9CW6R",
  "key36": "NGDJgQvkfGHxSr9bngriM4mqaRYxZcDCsMSw3oPvXKnTivUrsrtrWf1nWG7QDje2R48uGtmNvP3tXfdaDx8EQiD",
  "key37": "5Vq4Lywc7CmLewKX8vqAvidDoesGzPeJPQvZsY5K7iEsaiTrCr3Crtc9BFnojbxkQrXAyqEKLXRn6aDfw72NpVkL",
  "key38": "62VGXhcQX1kLAv6R26AvbUcLUdz9aAuSTQxLe924uonc7u8aCLWkk2TTDAe6RPBr25SaKgFtTpj9HQng95NHVyEz",
  "key39": "33Dmbkn6z8mmWrrezKwKp5LpHfs5aRgXcf5Dy5RUQS39ikUbeAwJ8eq32D72iQ37SKnd65nCRzWQKhZjHaAcbo9U",
  "key40": "5axDvhgLBW1APrjG3FHuv3myYDapC8jDMhszSZfJecnG5AW6uqHpTMQEQ3aV5zFRLcfP9nvSbfwqJBBRroJos8ak",
  "key41": "zpUX5YjdwQJ3ifyHWzQ5MecGPTNd9N55i2Gpt3RG5Mu2o2XewBRfNcPg9YRkZiqiyTeqg3ZS4L9QVk88UGjMNkU",
  "key42": "46imKoQ2rSHAia3tNaJUf5kRUhbTWgFHMtMww1uu2h1gtM3PXRk53nPyHq39SLMy9efWacfRVYHceT4ePwqdczJz",
  "key43": "2esoUa9DZ2LTymaCTYkwvmda3bN4PmrovEzG9GEKnqz5n484r3fWyDCzLcwsHaFmBCw1qiWsKj8zKPxdghUvPUEB",
  "key44": "34BHy4hCdGLXE7g2FWKieh9QYxfnrSziJPvRjTmewZBzaQain6DxvRiS9dN2wHy2KVJRHfi9tcoPDioLKDe7LHPj",
  "key45": "5HVCNUqMHqfrZRVjtCSVyX5joJuiqoPdP16NxgRAt5sZ1v5VG7fHdrD3yGYyY11zBX6fSgtoX7uaE5DbeGn2FLx",
  "key46": "FUXKa3Z19LX4wjj3SpLDQJ7Cui3aNc1afncEWDhbW3ED3BREHFNd5KQ6SH2592EpRFg6zoNoDzNXTo4nBwEXnyQ",
  "key47": "3v2HqgDf1bKoj6H8sbCRHLTBdtdunPdqrkta5Jw1GWuXpoiJd1fq39LwBSYWXdj5K47dfaShzncv4Dvc2VfDEc8m",
  "key48": "4n1GNHQ4bwUGGUW1CpKEmSHGXsBY3nXw1nHr4FxPjsru1oBu1zsncUpUssoeZ2rDiP35owGzvhDgJmfpKU2WjxGH",
  "key49": "4x6p9YDrxiCXNrzVYLt9phhSo25e3rLUe5jJWTdb41Dk9fuUN6qEcqTeVXcrFScpPHqepKR6GK1kimBrPfLz7r1D"
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
