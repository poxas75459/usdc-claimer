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
    "3MAi16hVLrBkb6EmmMHQx5HXbud4ovTs45zrJXVBco6upd2iYrJhjbz6V8s7odD6w5yuDtoqZeDDvfBbsR4mCp1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yEgXgyY8kFmzdQdbjGjNLuQ79nDagesbYuReNYKrQhz2e4Zqhsu4KN1CxwmbCx7DK3xiW4r9zQaREdiSdXQcAaQ",
  "key1": "2FFfZaEdKyc7A2j6XaChVRRrsSZZ8cN1BcooVij5cWvdgFsUnq7uSW83QtY65pavQ77FqAxXVbFEWSBTRsmBKYoZ",
  "key2": "5vsjkAWiT35cqCTUtFvy2FHskjoPJAtTwnmb7iPX9zPYukSs2JiujMjAnjDqjDum8SjM1cKCYUQgPvhv5Lfytj1D",
  "key3": "5joufD2LWKUuYHsWhY5zGyNm9peHG67xVV6ESa3KKBhEStmU2PGhDvDDVy1DEJ9SaWKnj5dupq4J8qjTTiZJm3Ar",
  "key4": "2q23TbcMjkFLGhu87VktANnWweC29SxGQBDoraGdWBppAJLHeAWdjLvuHB2LWD8h4k73gHR3KUqGixNPDvSvUe4D",
  "key5": "4jD34i81adAHC58cTpdBfXGUTbakJd1tEwa8xWpSKwHPurnJaZJyhVcEsnKHXPYKivbh1Y56KxzKoEkoeSyofgrK",
  "key6": "615qx9eFsp9KSTnH8tNSjqjySqjskVT3dDTt8EuBQUvkFRimMGaYRc8RZvsnGB3Kya4ZuCzTaxqC2FWpgjc99dqA",
  "key7": "3Cdvf2GjfqvDRuTZXgJT33avAtvxHmiZtxzS25nC3KL9DFRwSwkzpV4tX6Xd58grX9eqgHEg8B4iVWbj3Sx3TG5F",
  "key8": "5RVYZDJDmobRfn7RJBVT9ejqDaHNx8WvbeUVTrwgQEmD3wRtrshkoMbDo6TrfCAPd8yyNgEuRd2aegUHZidP3pZS",
  "key9": "53AkpnGKuap5fhm4HaoEnphLdJEZmVEkFMpCzmE3e1wsQJJ5Z3cHvXL9as59stzyZ9uAr4H955zAobcgaRaCxnoC",
  "key10": "22CB2dxNKHfYBVPrniQdD6bEGCDu7QwcphC7yfcvZu6ZWkU3gT5vNymFZZ4NqpyAinEATxquEpm9e6EkghFUtEDw",
  "key11": "4oSjUNPTBakjYEEizshF7X1GpVBc2N2s1FJkU1n6gL7kPMke4eeVgWZ8d5SVQXZr5v1uKj7dvC3Enz1G5AVsh6qC",
  "key12": "4VHAoPKrJX7hchXULXzWYCQT3PaKnJS5ACPTv3QaBH79sTnvMT8NfuHkrWVQhN2LUYgX49pb4eSQSte8mKhuNPC7",
  "key13": "4NMBDZRi1X9vT3aWEwDekQUK1EZ4aYwRJH6wAWS7yRbwjVufYhAraiahwdE7JLbPpxXKW85HAj9HdrWcEfa5ijLn",
  "key14": "62YpL8ZVaizBuubQTjk4W4amYpUaCEMaVrFSxcLWbYajkDVhteyiKuWP6TFLdpTLB2UEftR37qcBDY6Xq2bpGaHQ",
  "key15": "TuR1rPMX6YsEogmfYGGVrsjN1ACPxsoYZxZWWfysnQdcfNDjonsSPZdxRywNnwjyYrPeVqhDX3fy7Pjz5MizzfF",
  "key16": "4yi1KHGoe9gUJND3FViVqYo82WA9JGGCrns4tFfgkzfrqoefatSXK37YPc9DE5QaaoG7JVeYQvAqhCHiKr7gXh3M",
  "key17": "4RmABDPvm4J8NfizekUr4wKHBKBFNFEc5NdboZz39DsGGNb4vzrVzBDmDbYyH2WXfMP4Jbct1YTwTerJxLVAvttt",
  "key18": "5uR4Un4sdpBJ8PoDDsaiSwmu7DdL1dazW2GVwckSAEMYGo28FvNmfzEZ2fiJqDCYXRVsdD413ZMsh3zMjYDFJ6nP",
  "key19": "4RBzrH1Lxt8NyqYMiYh2iGzbJgfDFi1tpbJhuviR2kdkBAcUjsvFnnux8q1swXsetJcVzQH2xPcZh2kPKAc2u6gv",
  "key20": "3BbhuvwmX5Dtw39CE6W5jwNNU78udPDhuS97Mxn4FpJxmrCKxr88qRCRTCoZALywvZgDVHNgXxBqzBb5qCQNSACt",
  "key21": "5W3BqpdVehTPw7CrA76Wx5UK6BQQTjvQRNx7upuqVXz7xhLYXSppMA7XCbtbr8Pr8adXd9gSeuAoGWd4FMrhzXo9",
  "key22": "5BLiY6W4vV1NXwbRVVNpPdmLyHUip6gVxU33mL9gX5Xgen4sQJJNsjSqPA6xGNpeSszEsQZSoogFXB3tBzTo3Bm9",
  "key23": "3znuak7qtDiH9ABYtZj5RQbk8sdBF8pEMzGX3i25rPKxF9XYjRBUn2xwkNhKZEtTXhm1pjammxp5NwbZhxxeTPaL",
  "key24": "5B7QtfgqBuPfmnN98zKemBy9Mea81t5ov3GrYkptRXz4cBzPKrsYfYJ57F3Y9wXNDpRHNAUYQjwtQcGWkJ3vcdX7",
  "key25": "4X8GpKourDhzCxhZYUzpYSJKJyTemQuoaRnhXRz2Ke6F3XZcRXsEbYgSFzXL2rS1CgARe2GVQFPo8VCGfVq5wrN2",
  "key26": "4DZUqkYEiGX2JbHXKRc9adEMtSfpDL4bzsPKA6tugMMrsKoqHF1JTRkgTpA3G9uUQTqG8vzZi9oxqJxffC5QRVPR",
  "key27": "NdHn4rkQTHQmMukHkbkuH7e8gDsBVMHFs2GyrGcEFzGjWj23t5RSU7Y8GLDaw4NX8ZbTW5bGbnrxXWr9tdrgboB",
  "key28": "37peBCggjbZge9S3YRHhvxLdYsunNyVeoHfhWSkZKXUASDCbeHFCzPjLupiiHPeqZ1TMCF7HACnGxbiMKb8ZaUNn",
  "key29": "c8gBrYTcNg6qAk2teBrLHhvrCjqyqqtM8TXb2yB9Dgbt81bnJ4isyLFL2D3Qcwk79GGiPS2QhBTEx1PChuhnGPC",
  "key30": "4PvQi1QaUK9QWqJDDKCmxckGpwnra1mgnjfeAkGgYs7q9gQ5sCJMuYFQVuvRCh6Gx7TfX75EkNfAPmtAXa8RAtfR",
  "key31": "2yYSqKoveiZYMaLdsqziPq6wYfN8Dc2R51TGH98ZNuuCYi2RYKtxm1KGueF74cgUT7eXM6U6gvk58TPcjLCKGGWL",
  "key32": "2RAphjpcpbQf1TnAXH2TPccBLD5FbmmiusTXgVy5C6vcdxHPCFLmGSiUbWiRrenT1Wsfjp9Gp578FCuPcS3RwKMJ",
  "key33": "KyTwLWHbhDSc3k7mfZHgUYPDf3NpM2muVtokCnZiJYQ4Nk6LwdWQVj5rtPr1FWEyqmMNW6uSoX2dC1HfkbH3T3z",
  "key34": "r9a7YRDhrLYee5fga34R6Hi79t3YYgmdEnLvgUVnUKTZaVR6Ep3Nqya2eQVrgC2dQzzP3gUFTcYf955fE15BESq",
  "key35": "4c16GY7i4zPQQqqqdQZXmJafZqzhJEtPAKhmRrem7aK2WUmMmPkvS2xWCNczpwLTrXXFHy1rdhigdMiVLdE6oD6g",
  "key36": "6G3i1uywu5hr1SA1CEu3CKwmYPLB1aS8AF87BC3XiHEPbbqn6AkUAvXkiXR4Y739cKLH3pArjFDhkgvnACp4aTP"
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
