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
    "5omXK1ZrGPXw94avZjy8B5YBFE8kKXKC1wBj8LxfhvZBggijh2RbbfHx1scVKxGG2EcnsERdQAfBeDqpW6Bmp35t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YEg6By1hZpA4KLEup3LFu9RnMVMechYV6UrsuFApfS1rDHhoKY9TSAxYgcQXuohJKbo3Hp4csfxeqRw6kvHm2ri",
  "key1": "r93cbyBsfoTqT9Qjer7jzyKWUY9ztV5SUzEUMKGCMo4EPUDkQwU817DVdrLNq54ePgbFiW1RTqbxRXb5X44pdmr",
  "key2": "2RpvKxyEXUBUktyCMWtEeZseNfTcxvgcALpSZjFxUJuP843nNDGA1ZXjB6mpeVA7nsHMmMnKm1kTsZdmQw8UHQLJ",
  "key3": "2XTyyRf5N8xv264z9fuvN5iVMeGY4769NDXUJsG1CW6K5ihoXwEBJ5zPNb2xQBzu8bnHGpe98KVdK4ZyjWbQsVoL",
  "key4": "3NGn3AXmSddpQJirwLVtLZXraKWrbStZ73EoFeW4DNDCCwBEZqmQBueYz2uBrkHrVji4ysaTrBTftpkCxfvDWJJC",
  "key5": "3J9ypX3ELVQUKtY5W6RDriUGjWEkhzk8bWeNnoxStXRvNKApzDc3iFJuzMbfat1PgkQm42ayhpNYgADuZRLZtNuH",
  "key6": "bKVRsfUFEoZXeDDWRsGcEBLQjtdpAturSZdnBQjtqF4XaYZzNmxgojpevKgqx4kWenFWzt26CZ7rifBadga9tuV",
  "key7": "5Xd6tZ8UoXPcNPL1sbRg575XEBwKv1Yb4LboEPNmDmmczKuBMQxpKndYHP56UqXkFqhuanmi5Mab23DbbJYcrhvo",
  "key8": "3st5WNJ5JXXXuUhQEBzmGZEJQRh5iWRita4SaYgRbouat7oqW9di3Ku6orcpKjrcHeK7FNPpaFCkLoG7XiEMWzgE",
  "key9": "4vrjXU4mL32V3VjM3c7WksQHWg4YaaR7WC95iTSCW3mbXZaYv4du71JDQty8RMhbuMw43wYxr2etC6waK44Hv7Sh",
  "key10": "3VzZPpqEjf2suU6SQXKa4cxVUNed9QSH78RxGVDn7dEVfJ8dTWg7NaWA63TBiUg4Csv9pmRfNNgWU5g2FdMMaVfE",
  "key11": "gcSWbsfdwRosmeBZfsG54od2Xc8HpGvYwoRry9TKXyJ8TzcQFQoswevYSP8xSErrzNaJ65rxpSrZtpKxNfX9nRu",
  "key12": "5Dvqc61NUPv6C3v4E3Hgb2vv7MTDCV4VoThbNLzfWEUDugMyrN62ScCBdoueUA6rygW8ArmLaMxH9YJhaFPJ5Lp",
  "key13": "xWwZwjKPM184b93vrJtm88LhYzhVKmPXGrDBFwWyCkUSTFs2neshRUK88Z8abGr7Rqw5kvwyHmg1YHKXgekRpGx",
  "key14": "5sUeuNTakPjTzYSfiSPLzXnGcN752w4f5XWQVvjPKpTauS2mpL9xfdRoDkJY8p8DqpzkWQUaayArhjY6pDDRv9MN",
  "key15": "4Ax7cYLYBCCg7dPLmzCnwaCU3bLpBUgtDgm4dbpKzDxgyMzwLftcz5Wn5sTMRjoBS4rsybVoURVem77eTHoaAgZs",
  "key16": "4a1iF5BVfy2YYCHccBp8bwvetRRobMaMPu5XxvZEJW6JWqNFZxPNCDfHqPB8B2RBrFqwke9GFpaETJB7jSBWVMxu",
  "key17": "5sDgSAyBM2qnwBReuB2yz8G2zQW9kcCrLXfX811fnRnpxKgYbF5FRbEXoHpVgXRLauRPdjHSPJ8jQV7CedVXcAWz",
  "key18": "3Wr5G3qghDuLAEXSeC9CZq8teitjmYBFbegcBvxz2zysRmHVYB8GwoyapM3r18RDeiLGXy2fAnDjQQYxmBdAfujt",
  "key19": "3SKyt72L8jubcKoLKeyK2kARzbZdjnhXD5Wzt69q6hJufrs5qNzw2phtHP6N5Sw15XCrykR9dyWAGdMirCuGRaFg",
  "key20": "4j497K8aBPhCDKn6sujFjeFe1ekCcxSChVPxGo5scgtjSSax9Fh2yBDVMGNoqkYbk98K7xy2aefQZ7gdGmxByiz6",
  "key21": "3ghCZq56cNkhJaX9mpNMpp4hSfc356YKjk8cEPbb1wfe6NgoaQMsE4MwKX1pGFusbttGkE7m5WiHLotLx8z4zr9x",
  "key22": "4hGaG1xEtHkvYcVgpoPU1XyZERXAZHzRgCzH6t3ivVCwVWVYzvycW6wwCSmxg3mwCsL2L8Pk8FHiznpYhqmNwhvE",
  "key23": "soHNTu8shYgVzXbDVy14Zte1vSPUJJpH4K29ZPNpHHp7s6PmaoJnYhPreyj8TX5RLo99WWCSZmiMZcNDx46HUA3",
  "key24": "Xm6skrzfth4r5s8r52erS2Bmiyg9nUGTxnTkujQYGQVpkCwrJ9YdcFK6BuwK4wxUSfMBDp9X3WPYSFiZ8WPiua3",
  "key25": "hwCMnrvML7zagiLQzeXQXvQBos8ou1J6fdRuupy9u6U3YzznTPVdssMNSUjfyYuqeXxWLJAyP9PSjcKv3JiVsze",
  "key26": "2Bardtwx6E53JE6nzgQujg7xTQDtZd1KvkwWhnGzfsgtMs4bqiavpjT21KRPp56FungNeSYDbhv1ZhXSMdytYuUZ",
  "key27": "5mwvEgkCHvbvPh7QB5nT8VXyMZnuUEwkge47eRMBuXxsCTDvhVSU3pgoGGvDDrc6sCdEnMhNA9Vvc5u51CrCtuA",
  "key28": "2PGfojkWLK4rjx23hCJMAQ4TW2xDj4DdQy96E6yv7wEhs7wm1GSsuRXiumurpPfy6krftMuMz3rbWCz4VF5PKhdW",
  "key29": "1T9J8wKveuEz2R5M2NQnqfdZVp4K4cYqZCMeEgc4rLSMeCbAzj3DgT8JggnFWzjerBD87QAofbnLdbUhUnWcPJn",
  "key30": "4sn3spxX3nYqXiBz2boLaYaSLB7XijpM6XCxczRM3bsNoLpWxUouNhFbxkNC7LusL8sW2CSKSRpBHaXq8yVAR5xE",
  "key31": "4BuA7h3m5V3zwgukWKAqbgcU7FK1ACRyX4sujB544SrPSELGhgoVcAXuydqMWBrxqRCx8sDRzfRz9sZknuWySbNb",
  "key32": "2xx5AbnhFjWwXviZ1yXhCmRPcRArzeAMkUifmVjvjZXUKiYWyfa7wjkBBfQrbMK5AoXsiwk5K3gpcti5Pvc6QiCq",
  "key33": "3wFyiRtowfZRX7tAw8rJ2e3QJ1w4DJLgn6zo7RnjYrWuFSVyVw6q3mcDCxr3b5Jsw6eDyZbHXFsodLT5kQD3Man2",
  "key34": "5YmLMJEXxefiKnPhK6N7ZYExftPs8eJtPVE5dN8pFJC3pqntAmVPKBNjwUQhjCDdYGunrK1TmgekUXiwRGym5Mmk",
  "key35": "3rBUJazaFB76vrbZaKXweLDfvV458APezR9BS2VQ2maSQkppFviEitUdC4c8ah7routha2dxrBVyiyapCa6CG5Yz",
  "key36": "4oePNp53S4jTVbhRCQxccDpThbsxv2qUrgGVk42GDPYsfFyYvDdfVTrozddTbnF3yoYDdxGnk6TUTeUNDxKYT9iC",
  "key37": "3fnANWLy7qwiU9KJnPJ9j1Z1kcpovJrY2dN956vV2Q74vTcrfCy7AZBuqsnJSoMfsvxkB9uJ5L1bdGEWcd5H73f1",
  "key38": "5e86ZiuxuiBTocKTJoYPBr5hwK8QAZaQuUhUxu1GDouaN6PHuFJDoxqv1etaSB9SrZQaAK4DXeZL576a6uJFEXtk",
  "key39": "TAp5TA2PUiPZ8cJS9zk3BsqDf6Yh2zibJYhPcB5M858Fu5bqRX9dTzBdRn9W1ag8NY4375ZCrDzFnpQobRFySuE",
  "key40": "cQtmjCLL8EXWBUnRxgtwyHKTsXsePxWwnXoXk4Soev3V7m81grmAh3Jp46z4eyb6inoPBKu87ff5QNf9uwAYD5K",
  "key41": "3kz167TWbzDhT3jceX8RWKfrYkuQoVZVAG4AxmDSYj1uqhUiRS59p7X7Q51UgJ5bs35K7G1gzGDFnWDaghxUsadG",
  "key42": "4BskvcdLmc6st8UEu3VMq6bgsvAzdEjDyKm6MUAGCzoZKho33NbzV2TfqoiUWPouc78AFtGqfWe9EXyRXBZPqGUZ",
  "key43": "3Bqk3NaeXHfjxuMpAwdMByaspt1NtWK7uoFYd13KLzj9EdoLQXcVvaaUQnErKvGcfmzNG8NgkADTcN2TXtvphRm8",
  "key44": "3owCTLEFHBaWhYX66XasX1efFJKWSVCEJ8yew3B7J7FwSrUST4M13WQyuJ8kyr2wprHVRK2V47XEUMaK2MqdvgWj",
  "key45": "4KoDVnUVjhRw6JpGZRLJ2in5nQ6qrWbJzAGBsDQAScFgjwJBg391n9woqFtScCj5bmEHHkrJ2HVntLHQf6FgiUeg",
  "key46": "2Wp4Z5aaQ2WVtamUofBc24BCEAfKoNMkpiXVAGFyCAM1SY7aSJNYZ2AMokdrNedR78TNBBvQLTdHTAKKUJHv9KNr",
  "key47": "4BgQHTY651MXqp8ygvsEyPyuVVZJpgriGTXa16VpxbPN3jNdzaAJw5djcUmUJt4xSkaEsKxSnnuXR9fFD57RcM7K",
  "key48": "2717myhbQETyRHq5J2tP3TNPhGe3vF5wy19LQ3NEzs7PDyCczE6Gc9oez2aELy515NEM1yEL9WgXcXAL58R6148b"
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
