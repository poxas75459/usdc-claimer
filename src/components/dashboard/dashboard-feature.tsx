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
    "4MV54EjW8uYkoZGxnm1GifwT63kUzRDM7PMmHv5WU1ZREA5fuRCLM9ADEMU1pSD3oNG2on7PPCxuxtGhk4kFLd3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n9RrsUD2KYSk46KT12ZyBPYsvSSqDoDvzL4PcqDkVHGkdvKSVQ8WoucERXz6qt3rbVkqcea4eYeXjEeiSWfHn5x",
  "key1": "583id4jxdrsdcubkirQAbcfcRhwSwbtzHwmHwsjkvhYQAr5BV4AruCrvcnnptFk5Z1RDKHpi4ai6Re8m1LLzAYVU",
  "key2": "3hYEUvbEAN4qN6eZ2TwRyUTjyq1niUxoRQBieA7DiWE7MpBpMdWZV1GCThDP6s2E7GD6ZweYk3SiHRr7bH6HvUfC",
  "key3": "4cpM8tScJW7y9MHhgXdBhpsCCPDgw3FHBAWTT79a9GmBvzbQKwAZrwhLMry5LNSSuCQTZHQydnt2z5tmpEVKDPaH",
  "key4": "66qTNMaHitKV8YE3VhHcY2WmQsfzoBnBWRMSu8j6QnBitKseAnRkF1w3Crfc2xcFphGGJP2nJ1m2diSLsB3uUyQH",
  "key5": "3iea7otuNhxFiXRKBMkUAFPFZBPLmXaLkvs7uq21TRomGLk2gXVaMuySvzRy3PJrAQQjF9Nhspsb4vXRGWNjkXEp",
  "key6": "54kQa1c4Ez5J8YijVoAFrAh1Ad9pSeaspcame99ZUsGFXGwFuW14t6w41k2oxXDWGa5YiikRPWSAWFB15bfSyvZe",
  "key7": "4Fwsq5C2Td9AjB24biTwTd6j6GLzs52CWbUWDedBXbFC46cUWzZhodmrM6dTKv8sUsSmUNxy4GWB7Czygp86SHuF",
  "key8": "2MSxQoY2SZdSzqTyaGoKqFdNbu5yM3RJMQAam1yaqKoHgX9h3ELqSBRVAmfj5sZA5sK8KKVemvpaNWoZV2JRMMzn",
  "key9": "3YToh8nU1UfWSKJtuNVfTx8T9twPGhd11a5DZmqSa4RRdKAoP6wrhdhHrAAi4Wx3jre2xiZL2j2f2yCDMzT5maVe",
  "key10": "2SdxNxTPfBMSSs5gRhqk5881ZrMowCHuAgA3qpm3fCD2gYWPQBYjpgHQGNtWV43hzvKNSVGF7ysFo8pvSVVtFTtd",
  "key11": "2wdXwPFyRra4pxiXLzc9gqbK2VXuTGAQMwCEM4FZFvRySXx61oABq9Jmc5oVD11t3zfaC1ZuWTZt9Vo6zRzXz45T",
  "key12": "kNRAAVeZBRio5nYVkCfeQtNtS5XGqnb8LgCDrJD8t7ww81Z2hdDFpj14dsfJ5pcPHrLoYCjGV3bLkQszLCGPnxP",
  "key13": "28xfWjBBGiiopKXyCnVdDozueajWTzMK3dajBLAipTFYQbB5TdSxxihTa31q8DUddYDS4WwMpQcya1uuKzpEXfGH",
  "key14": "3i8GE8EbngA6LbYAjLC796xHz4NNFYddXtJttA2LHeqKjgfptVqLxLmgD1cpFPpZAZSyq4eaBBCioRidafiU6SaW",
  "key15": "2tQDeUpCWUBZwA8WQePM28K2LCTLxpW5onSz8rmaMQkB9pHnWm1Wr5n7uF77EC4hezC9r1k4NLJxJpeNWehmzBLL",
  "key16": "YgEXxUn2BxPpNzCAT12hTJfTjQTGvqAN748r8pHQbBfwnF6NsN7yRDUE9VXjmYAwFr44T35ai8w8KeDtEFKk1yA",
  "key17": "5QQ8SDTsz8zdXsZwBQ1KUNEhk9RNx5uj8aGyicDrMhTn3Cwhyu6mH95gwqLDpwpiTDZmiHMXvfYnJZYK37mcVCBU",
  "key18": "4UzCX4Emgk3PxMzzF3j5pRemnkBNPki2gQDNJKf3GQhHSgHWqJy9fFoNy72S3xG2u2SjCNf2W8XgeEr8dkrUaKqC",
  "key19": "278sktTu2Hi7hxhmaXmRv1eb28PjjLjBYhRyQ8DyJM5c8BWUEykkRkdmcu87zMhGMG8wU5vip3BAC8sWz1BNCYRt",
  "key20": "BdZeKAE8j6jPCRyNbmzGXfXXoa7aCcuCrdEErSrrjTi7z6xGBh63trGfY6ZmD34uNAEu4eWgYWGEFjgL33KvrVm",
  "key21": "3K5VRq3BtJGu63x68GCkeeXu2UstZXY1ptU1oi7HsyB2DcQL3hSKc84J7KiepGaTeFchVjMpHTANzjp2rQHstZj8",
  "key22": "3GHS7ujKpMZ4pqU868B6VkVD3g569JqirAif5MCWK4u7GwJeGArnoWup9yborxRaVtkAaY9pTV5fKoS1QmKwrqrZ",
  "key23": "2hbfb4LP9xjR5qun4PEiXN76NUwsRHpjXiw7VXagMFSgko3jTkea2G1DygtjXkaRfe4TMTht5JaxasSs4G4wwnhQ",
  "key24": "44U9u5eKhZQjysDQDBdeQmXrvr1vxqKGeFyqGvX4YeVGUj9bhci6EWQPDSDHz6NwpEG7MmKpTrQFMTHKELwuiSy",
  "key25": "5qKq795HVNii8x9BZRDCBnSXBQgmcPc3jprtnQUbKTWFtna3UM9pdjhSp1ZsRtF1mfjzYFyyPaPSA3DrEEhJkRD5",
  "key26": "3bVrkAqRnNAWbXNZiX7gMYMGdLRUzzBSEjeHQtHF2AcdUp1Heui5Mqu6xFmBPhQWTetpJeA32L4ht87T3LGTS9sJ",
  "key27": "4PArFWGD3D5A9gCaKrjbJcGiMYycwYvDSxg6MXoKb9LKP3r6CAGEJskpo4J86E1Q56DLtYWLJtibCXEREgQLHBd5",
  "key28": "wKLLwbSRyWiFK6f6UJpJ66rgXy4B15w5eU6hRz7dF7Cs1BNqQBAfxFpYYnCWS6w7oitt4kejWst3SyEB1qH6cKf",
  "key29": "2s8mRJx9i9bELCSEVUTFQGKUgZNinF9GGZpJHYFifFwYUbwjWxr4JmnGA7jBUuLxuW8eseSA6WoYwhsby4MzFPPi",
  "key30": "4Zzcr8vhE2apYcLXxdD5dxMC4StE3VxSBt2G5FFtz2ZEMwmiUkk3TJNW32i3kGhAGZ5erHnjVfvfsNHTYj4jSc1J",
  "key31": "2huZFecgRqcPt3LCmugTJs2bH4P8Ho9TpWpxHXX2yPfN8dKPiRboyRZf5yw3X412BxkL9cBv3bjeKYJhEgDARGrX"
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
