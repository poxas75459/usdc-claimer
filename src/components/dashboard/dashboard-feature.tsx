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
    "HRpSa2PdhLP57qZqBUPygxsHuNWxYB2zHjd8AoVT9kKseDSF4EV1A4aPypCkL3NnxKFSGX5BjHNhugKbJVExfCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y687dMzuMxLiwxvvQZTYNpGNCnFXERHUkci4umyv1HwcWZCyScWGAFuHu5GfqynJEgf9waV7EzSKeMYH8JB2tBb",
  "key1": "2dHWYfpNAdA8crY9Pz5y9pQqpGDiAqALDeSiy32LAS2eNhQZHQEX5BjKkujLchEvuXEBmdYX2HLuXTy84eg9BHBW",
  "key2": "3NieJRTdUUoHdEbrSRRrBTdXLzecRgpJHcGVS6wCfKcPaxTHkZamfFgizckdKab483U8bkHCV2M9Ays7FUd24BhW",
  "key3": "5xEeR45Mn5eYfMdNyacTLb5pgHor4bHFHjeuzvAFjpW1wKjSyMoCHkYeFpkqULFSEeyk8pN7hfYu1jKuhzDRLmgv",
  "key4": "4b26ebZwsfMDKew8wYon65TqLUbV7kquKLf743oVZyx3TrfdHy9PVKhYSiBgLGkJnaLAfoFMBCH3aK272VNqoV9R",
  "key5": "3fVPK8NnMi43M3kDPvytehnZPy9uDLxTzKrohxfZ1fUxJorgVm95UwfCnA1a6CmX5KznaNvaKakbS7j4vWvic7a5",
  "key6": "4u9okbkEbeJ1utyKAz4PbaDB8gyV7FejLpELxzLHopq3zpgf5RWoioCvnq5Nfrxe7TkqH1VZH634KBs553XqAPoD",
  "key7": "v2VRHw24CDzby6dy5TPcaKNP2d88WqnoQfPhRgnThP44tWzvxMraAYBarJKnpAFxP73Kmciem4RzwZLrhd3FqPB",
  "key8": "mdazcRdoVvKPvrxTvt3xcL2MQLEdgME1CM4yugt5Mmt8JopGDxEwExLigktEKwCbck5djtCyvCiGzoKyDfPpCnz",
  "key9": "3icLffv9rm4Ek3Mtgsm28vtC5qUt4PHUyFz9rQpv21S3CtBSHpHJcdw1PrGiVCmNxsE6iPMrv8n2Bbh2DD63QqiS",
  "key10": "yjKFsQMhAdiPBsG546A8FWYkMAhrSKgbtve3vk1h5aWTVcsfMvrLz6VfbeiygXWZnZLxDa2bESQ45qFqxa7LqFe",
  "key11": "5ES88oGyaGY98amkur74RR8j7cyavUkpwSnZxbf568tev48KJGp1WxvQnWqG4WU723gN16fMkDu3zPKMxy9ad577",
  "key12": "2udTfQ2u57qvthdYpSmPGbB4Hw8o56njkKLuXw37DuHTuLN7ECWgzJmuoKJXwfNHuPnQSH37YMZKo7NFsJs8DBrM",
  "key13": "2aB7k5kx2aKEkBDJxiEK52F3xMKUS4FJZKmf9a9B3Qs8NPWVz4dmbDC54QuyNLBX3HCpPyFxSr1KXVgt1razLwjj",
  "key14": "5wMiNeB17RXHL1TXksxydwLuau9k1KtuJpsarhEiT78HfuC6wjsgEgNa1WyDjHA9GxSRPM3mdbz3iNvvXEKe9WDM",
  "key15": "4qvkELfti8Sm79UfSRHPxxWP1tcRteHTgYTfMBE5ER2dJe1T6xjJkaSCFjpaTM5Ab6wrQzuQDkgTo3bjopydEgwG",
  "key16": "CQEnSSJSTfbg93vfuPz9BZAeEkq5J5vANZTKFiz36Ken5175zLTvC5gKwTx94DeZDfA8asDC6whiKkjBbZJbect",
  "key17": "2spW5fSq93UHcJyMBP1f4uhs12eCdy7UQFx95Pm7jrsnBeKU9ixT8tJE8eq7NYjTPXZ7BC3FTg2w3yLTbtv46f9L",
  "key18": "ZbrCUMPE3wrMRUPKibiahkKjM1DcyvUxKhrPAjdkKU86pFp2sHAE5YsevCk61NTPnxv5iG4ruGfsxeDgKoJke4B",
  "key19": "sCVZ4oVET8c8jnwkLL6hDe5aLzdsVDTMEnoWHzFVpMAihjUHnvwsmeR4FtqzKgPNmZix4Pmi9cvSVmYfKTSTgJc",
  "key20": "5izuykMMfvQD5rfjkYFyeCr9vmCav2HdSrh6ph1rfcjsNS6YByoHSisR7LybQyQTjJwrYFEsxsLgXSLS1KtiTN9g",
  "key21": "3Mra85u7ehi2nfPa7wWp37jaBy3xHSEe7fmVNspESH3EsitsLd9TmQhbEhFH7845ftsVtJ1gK6F7RpSAM3h6QCUf",
  "key22": "33z6HQb6xjkVHPR7Djzhs7xuMuS5qA23VKAsBYgQHBL9EPBLGSNmcqFBU7KPbpjQ4U1JBCAtEhNkwjz1smr4fJ4N",
  "key23": "2kNNUbVkC7wzy2jZrQa85yEzVqUZ9WpnKSSmuF2bD3yiVjKgaKJZXt9AMN9BLBaf5GWZZjMYDzhgS8stsdfvKtP6",
  "key24": "2EJ1uhVXFLW6Lvfi7yBSR2bSoT2VAxg8xz8SzBmRtmGTTguD5GELsid5USU3p9ADmfYSWRSvchocwViYLfJKTuuk",
  "key25": "31n1E7PN66GBK2KMfHtAGeGGSb9F4eVAxPNbkoXBiDLLf4cFavJPht3PLowX2PG7rLrCyhxSbfgsSvaHo69Cim1P",
  "key26": "3dGa5sfkLc1mdiSVfB7NQCtcbSZhBfx6yqyUTz6q5Ru11wc4CqxekvDQ53MVBsa4rTrkGD8YtoYC6if8iaWcJQBS",
  "key27": "2dFJqcXF8tD52fiV7KdR42h7SGozoH7AJ7SxVs11HRRrzgMdXZekjT7eNbjQxSfcHySQpQVHaCgNPbhGF8EHY7ZM",
  "key28": "2LotaDN9bsqNAWYLdma8dR2p3TxrNRr3zLMKiWftisQy5KDpXLbribqUXaF6N1tGvb1GArNydtCVJCH38rreW2ft",
  "key29": "o1c8a8HrdNRT65RgxApnREwtkoJpqEFnj1RudBqPQNLc8BP4MXC5GQzwubdKxaY22NZz2e4mKoS3fWqvmSPWVqF",
  "key30": "4WCHtUXTcaRXqiaVSrKP8sYKrSLEVf779tkBxHaTAWnxmyUFvAHyqjjk6PTpUr61bNBbedUGE2b4GBJKQxtTU8J6"
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
