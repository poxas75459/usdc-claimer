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
    "5GdS7GNg15dfzcbTB2vxwLjWAvgzjoocuibXhpW7GtSwHGiQyUG1TanPr8pTgWTMdbdb2SoyhsxYZiJCWV3QvZcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iBU3nYqD198huxr5H7dC6QTWHDTsPMjNS5aD6dM9muSaD6XSaGDehbv7WhbckPVcGsEdP7hDKgeewCbjj5Rm82G",
  "key1": "2QtuiZbhTAHJyyXgbPQiVhVxgNimLNAXS183CAFr3BWUFxEbHouo9ACtsv3W9x6zQU5gw5xHEGqyLpZDoApRJ1xf",
  "key2": "27JNBM3vgh8a6XuBu16myrsPkUm3FHg9Bq7z62RnhC2nm5UF6hTafJuSeWyiRYXapj8nU9s6QqqApH5a2UP3mrE2",
  "key3": "UbaQW4qdi2hjbKnPHrufZww9TYMpeMnrQPFm8f6wEHoHX7iL3jcGgT3DSUqLnjLMCSPkAkMa17V6LNnu9ueobfM",
  "key4": "5xxZbZPuLAqR8tEHZHxrCyXP9QY5rp6fnX1X2n3t9EVrLKn4n5bpVeC2C87srknKkc5QxzLtjuthJdD1JPWfowNF",
  "key5": "4v6rzLpwpp99aXAEXdjyGQvipXvFB5YX9GZHiSHswoHSCqJj8ADvqi3t6JEANR5fiDGMTZzJNsbrDbtfUoezhwfU",
  "key6": "4DWyihUPHWhiFyE48y9RpmFHSe8nq1vtC2GQyMpV3pbwsgq8ykbfdyCFTWkMwChWMMMFGtrc4mTKHTqzZ4dgyM5d",
  "key7": "5HT3k8sGJwCVRW4b5KkJG5hoMGPXXe5pwGEm6mfzvD6NQGS8aS7bpMEtHMjoCxWZjatwM85uYsLULkRLrPijhsfN",
  "key8": "6YnQvSmuJob8ZTYVWeEDWPuan2dRnzMGAgwUzJevYDLKP5nLJZu9V6t3adyCLin8HowrgtqGa5CEymZE4wCyXpi",
  "key9": "3DEyPW2iq7sEsFug75DcYWpBatpkfgLhG3cYidVna3ghTRXQup6G1Fgzy5K4jVV5Ukmz96tbQRcfTZcRTWsvRdEV",
  "key10": "41QcuDf2uqvgdERAnYXdKL5yuoFTKFaMt8jySiRVR2d367t77A6jcAHorrPgVCkVBTmtPFiUGMXwLLHH5yUjcgMN",
  "key11": "2wtzssD4nL15UbynUMqVDy7anU1ur9mwJpja2T478FeMjbqZRNUXLWfppEm3HFJWoWN7rDnmCUaLdyiWWvuXjJn2",
  "key12": "XQywdSGNMPkGMZ8Kc5tYzaBSfbwyFxc4dujkJLWZMuGiBe6gkUwUYWGm68wg1wzF29D9WY7kwpZKbD5qxd3jWVh",
  "key13": "5A7PzJn5kaiZSNdXHnXLJwNP4TqbZaY32dDMz9ThhHZc75t1Raxa9irenUr8KXiwLAzM6wZiFkJnKK4RG1enSYE4",
  "key14": "2qM9zvFJbQfio1Hez8ERz42tG3kSVfXwoXnDtrBNjPKruX87rS6b6M6VmU3jf6QH2tZdP4aUSgrToiVY1ySx7mN3",
  "key15": "5htUBZRFZartQV2sEPYW5hDmK3kQgKAkHD9NZKzkm4hiiq6n1B6HwU9xTi1cNc6BRWWSyTgVNRGredMjPXCAY2jB",
  "key16": "4N9SnvTTx6pComTe16k7RhKb5GLJLJZuEGbLojD8jLYCjjJNVcRnXEVACqu1mARMkPJZH7SXaw1DZYfSY7YbwAwF",
  "key17": "3eEqVYKF7pW7WeWKZBDppm8TCzdmeD2xThMgB3qv4QQHkk8iNyYXQ9Z8pHMMxu4DBtm9QjQMSzguTs3hzWdW2p3T",
  "key18": "3TeybPUT75Wz5Wr2iCkoDY8VJ4h3dVSTjfWdKmSpMVdJexCzSANjPngspqnCZHKVGPfiYRZoiW8puMfo9Mexmckh",
  "key19": "4ED78SbJmyfqcTnfecKG2iQ23UDExGDPmxFUkdX8PHUwbrdyrZ2FgnDDYGdkTmSWCZLZBJNMEzbSBgVM2Ncq4VS5",
  "key20": "V3ysEJHrd48TGdHTb17ZqR1fBKBibGbxnoX7ej1FuergeiaHxcNsCxybFN8yPndcjH9i5xKySHZ1hJwB85LccVZ",
  "key21": "3NQFpsT6mdh54cCkXzrahKfsNzy1dp1oNidspgrNWExeaNuw5QzdnQSfUZphzfEpTWCyMp51y2Jf7qRwm1oqTqew",
  "key22": "2QURkokgQx29YSLmYqPPeDRbV7dvFWk5f5u6r5Feeg2UdA6SvVYgQvuDwJWCPiTunUVFFQSivCY3F8CDHt8zkrR5",
  "key23": "5qRePPvNYRBBb6nRAfRN9LWh3MKkh798hz6wfkQX6vwmFddqk4uphJJ4GuyAeHfLk3TqKDuS19s4BYgVeV8P9MeA",
  "key24": "3a9f9rxMLs8jwqdCxitcaTMRWrEGx4xYNMPcSUpTCk9hsGg68f894BVxtRVsvaexbrCfgxLuo7J4iTuE9o3Ai9rr",
  "key25": "2fDtZNswwFH2T5G2r7RKq3zg1Ssd597M5zVReUxSR1FLU7u6YHRH2NUtVJcMsEYxNTdnbvk4drCGEENVZb7mwPH2",
  "key26": "UVtBs6uhaLW61HQP674bEmQEqxsVZQR3r4ND4ZwjLk94rgcc89DQ37WNrEMULQEWLwztSHmi5PLzaAfNis1yEoc",
  "key27": "3k2aDXj4B9k1gPaFd4Y4wPfLicBRPuz5eWonp4cv1LPTt7cAEod98sazR7bQTEjW95Psjjm57GHfphwsZkxyzGaR",
  "key28": "Wd2H5tzXz2zsMqDM31ip7Faetv9ME6xVF9ZWihKPRu3ab6uF4Qm8LbDz6J6eNMdMYVGHoKogPujnuUygEY6XbbK",
  "key29": "5o6PSHxc579A1HXSy7jmkfCYj86J6DtMut9qEkL1VjTztEevNHX1YeKmEbvvNCioDNoL72q6cLFVzX4ZoxmAFSYt",
  "key30": "5RJMPyxmVKEzRVVvtQi2F6aoZK8FGDZthGfBLfqKtHGVLJaD3h8JFf7Ddr3WCKwpomhTykDGQwLAUQcH4cZK6jRT",
  "key31": "3RyvnYMffNmLkmgW3kZrfVcTRrdzR5Q9TQSCdwCKTfqSivqiMFkSyprvm91R5osg2fSaB1jBvUCXEoQk1qdxkif9",
  "key32": "2Yh4yFP5Cie68oPQB7SQwFDpwezuUh4Ai3JPXApSArX7REhmE483bgVbA4cBmV5Rxx16djizu5ZZSL5Yo8QBXEyh",
  "key33": "62DS9LBzPBLyggYMk8H54XGawmhbkx9brVGBD3NzVnTYBGVAQ8nWLzL6tHdnGqditPtBEjfVBUh1Ro6Cxp6f4B7N",
  "key34": "3jGkjexe1RsXbq2J36QxZTJXwTbUhWQQZPuNmnn3RYsHRL5zaATck2bxk5B5tGexwPvUjRa2gJfjCuNddWxt3m7S",
  "key35": "4Ck5BeTXJ4N23gGU3DaXCJfFjpiekUHo9AYAzMjTRbX2kwTgiuoishxQT6SW5QVyDaGSiVKpQmVNvQyvQfbHMHmR",
  "key36": "3peFHB8pWo2Ug82jBC3adrrwZ5wjKCM995xrVmuaAt4n3zx8tVHcyZnZN6ZRjGeuLWvyFgokRduY41VEfxEfg8SU",
  "key37": "2ohK2ew9mZ1ZXQomkQtEwp4ffepEx5wC197a2oJb9vBV3rPeYL3bkJqieJ4eVaG6bALbSw4CKiKbECUt6okg9tYS",
  "key38": "74QCsaEeRnaovB7ekbFxTRM7X9uCqPvp2vpxEQ4oVyutvrUnrU9HJCKFxDZS8CQTC9yoXSY9JvQfPA3MTr3JwBp",
  "key39": "2b5z7SZ69HepLKDcYcxX7E9VQeszsjxNTCns2tnHkD6ZBoTpUuozHaufY7e5tfPuunY3EUSQgcNmtgP7HVvZX6TR",
  "key40": "5LDvNojJKDBqo9e5nK1tCTtAxVNxMAzhPS6AMZaE774ymyj4bS9EAMnSwwf1JxRnQsq88TkPQAHUwSy9T6TRDf6e",
  "key41": "4LfL9KxLkiNmhdtxDcUvqTY8dFG55TNziJU4dntWZB2VAYFzWRm5KNkrL2pyFr4Qq9Ch8mcMiJgbWSuKYoZXjXaa",
  "key42": "3rRRVkWtihmV3JyHNpY1vusJojahHEMEGtcmQvPx3C4dfqcgU4bNFMYLLgpfDU8jaa2pyLC8J7uNuiNMHydgHP5h",
  "key43": "BiQ6F3jiYNZmh6km6Ndn3axWRiBnvFnVNnwzCjmgq6VRUTnwZDL8DLHAubeWejYDjoKoY8QV3xoVGmXWRAoHtfn"
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
