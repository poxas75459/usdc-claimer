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
    "2GELXyN63eZ77u9GFYiGwaDY8x7SMWZ5wvSWFjyi8nWi9hXC4sVJCkpGWQPdKjv17nCVwt5dv4bwyqvDqVCHLAiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jb9Jj8vFJaEcALqUdpS4znRtq3Ky3VzkTjRi7ZD1f8B84nefBddP3V87i7LEJopN2U5msYJdCDqvhfmdTG7WcML",
  "key1": "32rs8rFTf9cBvApYgE4fQmU1g9AW8uAvti7qcRvKPYtiTtuuxz3TZZQ2KihA6NV3Wug9YaEjA7HgZuVVhhm1iN4J",
  "key2": "5Nu6xJXTRWkx34vqf5ttKb315M7bWRzQCaD4TLuibmLk2bCdKxyZHVrqNF6ouWBnrco6RHoiXbqbcESpgLWTBS6",
  "key3": "n7oucH2ewmWduMHYj3xZ8JQAZ5AiWkNNYwt8YucuVG9rE6BifqChUR7UagHPiaQJSymNtd36xxABviDgtJpTMew",
  "key4": "25Gpmnph8rLWXft6R71kVKBoCrS1iGS29baKAM8ztC5QvcVU2TRcm5CQyZsCgR7xqthdFWht9k7AQquZDqnHQ3pt",
  "key5": "296SscVDeMYN1sAmZSjTW2r4CsJdMhmfZL212jvdxcJ5mxpdxiqUdm9qapG9yaANWYS117sUPNPk8snSrx3najwg",
  "key6": "4EGdoA3E5nWQUhEHKSYRMzVZWYDG3dAGA38EJoPBukUx8cdNW5hzwGpJXp7xH9f22bACqaKAmZE7uSSadjmJhswj",
  "key7": "jaRANpLJHewcXicMDDWfh7DyHDNsxoHap7kunR4pSapP1ha8GozZum7jDo6AV5QopAezLTRT6itG2ur4RTLVnWk",
  "key8": "4ea3Zx6RiTGLekRmD2fojyNdfFCFRo9KtSHGcdjL3rBavNuWPgEXfaZCCqqdbR8mWHixNfLWPJxhqhgajRCPNX9Y",
  "key9": "4CuoZAhSxC5RKhXx4JN4u4KaAtym3cRa4aEVWQPNNFUyE5VYkEwvktKSiu63sgYiu5SomFBChmH4NbBwf7LZVLof",
  "key10": "qUKc4EhHA3v4SMYjkymCFyZDByKNqf5ZSPW5GAwoaGPNoaDGpMdBbqQuFi6ZFtrFDZ9BTrk6pz7qEU8vTu1iGSp",
  "key11": "5LoBCZgvApDpGcWYfcFJS31avuCLUdF7geAmURiTFNzx8EYsdpD9cLHmA9tYgLkp9SwEyJQrCuAKa8i1FN1abYU8",
  "key12": "CBzt5sxUwSGQ2g3Ro7ckewS3AZCySLjCAR6DeLDfMri5t3k2R5MH19FowLTej6HHrktEPdHC9c1GVuAUyJPiPHG",
  "key13": "SNetnnnpMCsyBKUJo8vbjmssXnJUEQwiCM9H3f2Z3cKB8gSrGbm1nt44UFbRm9Gdt2h1YEbU9hz9uWTp67ibikA",
  "key14": "3ekDgUCLb5ZFni8psKu6wdDxEkV5JyPCPwEbk5KQAzSuyh31DL9gs2YSzUfktHWMuH8ifn4kwnkPPrXvchVBwyhQ",
  "key15": "2syG7dUcLkuTwDofzW2yqZSto53siy5xkWm9ZxaCY4iB8fRVtGw6hkZAg9Rwgx7rS91RmzhRNeqRRk8EkEZQtc7g",
  "key16": "EL3ssmxzdoB5xmbWhDpsDbYRGsyUH3kqUV2LiVs2Jxs4gsLFduCYnYWMh1nETz1Gjoc86cjJ9C5c4qsnPHHAJc9",
  "key17": "4NSWEzPXgWH42qnNwpW3XXszAMrznigMAsFHHbYQm31WgtRhtaxUsjLpLv7VDLL7potXCFm6NbyuKksyMafFc8Ff",
  "key18": "5MjKWU6Hcf6AdaTEEEoDaumtHjrizwhivtJ1rh9gXgABq3CzDfZvebsnzYQQrUh88BaM7mfzXHm5Wi7B8q5LqQim",
  "key19": "22PNdTyRnwxdJrF2Yg4pZrVPNUjWNLaXCfYQS6NZHFf611wgw2ig1DW5qmayfLF7tphLiPNBwXfaRWz5yJA9BcEZ",
  "key20": "2bfvQAY2991bGLxyqkJ4Kq9aTUHP6x7NC1hjxD58ebfTexSQc78VoSQ8MZ1vh8J928ptcgZQBhdYPbJ8oJNUq3rd",
  "key21": "3ruaGms1NM1EiUZVnBv841iraBrnZdhGzxF1LiTdoWDcbbdWoQQFX8wLYNPdx1dxjg2ioLMyNceQ1RKAHZMRouQ1",
  "key22": "28xVC6wNcRsGPgaNxEPcG5HaXuFuFWVL9iyisqhBFnmcrtsNj1AztPUCepGZAcDgG6XuTrJ5ca1G3MVfaxKeuL4C",
  "key23": "4CKL6bqG3xewrAYpMvidhURoQzk5swzqCMTu82H8soA2fG4p4nABaX9995FbQvvGd93Y9E7ydnHwcxKFPVcjUxSZ",
  "key24": "5EZ2xtyFWdpSupbwfqY3GEV8FpGPdHz4ZViPycZvSidcrJqWPGarCPCcghwx8ieMwDmPhHHoUoJZv69UN9Z7UC9G",
  "key25": "qCMYpPkgkioY1RVYiSPC46HF5x1tzU4vwzMUSZLAqvbMxwU1C9jksNVntbuvtYDFhEhcapvHqP2nkxKiMDyNLDM",
  "key26": "5gBidsoAf11QFXFNwDwiX4uDtzmPVZDvvuvb3AfE5WZ5Gg9M31GtZTSPjebj6qtQbg3XRb4cVnJUyimoT8xH4BU1",
  "key27": "2BZ9y2Vka2c7hWrJoh36NwwhbCck35sqMbZR6d6nunZZNkt9oMvRAUrqieGqtyT9pncx6gQmcx6UFqG5sSEGeHMQ",
  "key28": "54obyb4ZaXKfMbHzXB9iYpaaANNRvS6Lsz9ML2GyFZGTnY65b2vBopWGq6qARFcAQMPQUz3GHdQdjN9xpxnnDBHZ",
  "key29": "5vc5Zmq7fwk9BsdiMfbKruboS36SNeGvvwXpemHmdDepoMvHb6DTARECjaGRvQpSpurh2FgyLMsbDZSQofQEZj3w",
  "key30": "63txq1HSitm5jAPbNk35v1cxwKiHypLWFzhdpYsaSVMC4kVJD4Ld82QGVEkkUyK4vBn1g4AvrMfYL9fFRXgw94Et",
  "key31": "2t78Ezcr3AFGRx5cEoXd1QftDJki5G1NTNoMybfWGHS2muj4uzmiT4n1RcMzYswvVewJJyC2GJCdqRBB2YZYHR2B"
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
