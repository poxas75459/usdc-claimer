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
    "2xx6PyaFK3ut9aGW3UTbwNBwcyyHSNre25Gd64gSEwA7AzD1PmnRpYXKLTvCMM3ttagHnxnd4XNFjgqHpR2spzUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o9oGDnmG9KpAqdvt51r7z9aiRVKXMYADcYui74FafjvNaEUagzZpjP8frefsjd74TELk6rgxf7C79KrkWnAtajo",
  "key1": "2kNdkyiAmgn7hT9PjXBUyg3DAfGLYh3w6fxgrqmdy6NiMu3vi3GgJg858GjjotCT8uknfVG92aEdxFbZ1Z4iQbg7",
  "key2": "CTyJLFy1CCnySb4QFsZSH58vuj8gvvTQBBFx647EfbxvcfxYxVCxjjgQar4HEDA1uVaf5F2cdWDqxrbx426K54z",
  "key3": "5AKgnqCEXBwybKuzyfqcpqySKD5SB3T9FwzWn7U3efkaVp9PKwDZuk9i1XEsEwv5cQBJv6DxPccoektX43SpK5iW",
  "key4": "3qQJrrHx7pBYRY9AmPVHkPEEanGaJ3c3nAqf5gVkTRRv3gCHquz1fVFjxCvwkkpeCrjTpbHDKRMzHQ9XU6zSMfoW",
  "key5": "2wu9KgjfdAMAKATPY52Ht6MuVFj9mhWzLmcfnam5KTbhsP7hRyM2oScsJF5hV78uUAVLpay2P4daSHCVFHYAhCUx",
  "key6": "652eh4X47qiARzSnNup8gZP6G869WDsJNfLchoHMi1ind38ybBT8HS3fkCfcHdprmfD1HBCzk7BTJsrLGdX3NXJ3",
  "key7": "5xBMXhzSN9SZCVPuUBwSCiJqxPkBd2hZz43XK3FUM8evZQtmYiaHFRJa4HytoaHrauoPdLvcRdzbZb7vkzRoCqqr",
  "key8": "2o4DpfF92qdpKeEttpkrYrcDRvvbozKejbZ8fkgvsaKqD1QyXHbVqesXf8Xb32oUkJmtpjoFqCVWMT6Nizbqicb8",
  "key9": "5Q6G6eioNJXUtM1tKC6wgXn6KPt1kkLe12hAv2fenyeHrNowv1tZd2CeXbq9V8T9vNVwYCc9kdoWHoD6jeq6SnNA",
  "key10": "21ad5mYnachzesxLfX9hD4qNjGwmmpPqivmwxfFK9sUPoK4gLpv2s7uqJPtMEkLJ2YhCkAerBQx329P88jY67N6s",
  "key11": "4GKVe8DdKwqCKFRy7KBmFUbwBDK81K2Z93AvVnVykeKUqngwuENS8TRcdX1SxayBvvAMWHSmwoDcby2Fm91f34T9",
  "key12": "5eN53dUVMtfkogX2TXgsfCgYB669m1vJ3RR2XwcrKjDkW4iWpFskVEapWqmkTEMEtsXH8d3tbkFbzbvpBoz7oSmU",
  "key13": "5ZTrKMkxfzpcc4Sp7mStPcLzaASK3zAMdqMYLpeYzbJ9uKV1Q8YtCSNQvqoNdieZLRrDpaPFoLwoa1ZD8KeDZpjd",
  "key14": "5G4PXBkebtuqaA2KZwWuXCLVNXizXChHXq3Ur5D7cpAL8ar7rGiHBJRKN4j52RQH19kiE8HEwLEE6CZY2geQYVLh",
  "key15": "cL65w43TfJbC5nYEdXwoKqkLXMf5HK7tmsAf8Psrn1ehqUHdYCvE8K9QYzCHZ6HgzobwPqbXaQBXVbyKGzfMDK8",
  "key16": "2dBhxnbS8gdVazegAtGsykAE2RRW42CBNYVn8PijY6y2Seo9XF33jSZN5G2usBJUMBM8XfyDmi6QTP4MAiwejmu5",
  "key17": "qTTac6C1ciTmpr3dQBKqPGQVGs21HEbDh1ZvkcW8vsaoadMuYELNrWWS4VfJiRJP9posXjbkncnPymvve6f35gs",
  "key18": "4EKks73iUhmsUvJwmKADrdnPcKLcc9qRrGUz2PQqNA49eaqenFmqogo2v6UaYdAoov2iNwHRSXD3Cmp5HCyC7SNX",
  "key19": "4Aek3A6qWmRkcAiBye3WQ2UYT9aeu6r3dGUp8Aeush9xNScDaJnnNbg3yeEutauZ6AFKT8ucGw8BfRdRigxYDPvr",
  "key20": "3cWApJkEjKEt4sP5z5CxYVDjJtWbsnfqi4i6ZVL5pEHjdy7HmQ1nH4A1YiVUZymxWVPAb6aVHzxtgBnP9esEeTY6",
  "key21": "5oxj3uUYVg2Yfi5guj4mW4oXiJp5YbBLPg7wXVZJUFzocPeDSkev3gLup2mx7eGDfpELohiqA9M2jcqnCMoxSrSN",
  "key22": "55QRiMhSyc1JFRxzZ35CQiyp2oPCcsv4YWvSmDMX5bL6dnTbYqvtVCqj5Tv6xcJWQdPJ3hrzs7ZCeDfhRvbSQHSm",
  "key23": "5CtcZDhtRJvFx3EsyWhb93FR21jcFtBm19Myc7ktysFJ9TBi4qoKBw9dP8LbKkPDDAUby49Fa8z3WvwVcp2ggJAg",
  "key24": "2fHad52nVECfUs5eb3eh2eft7Hgcd1gMbGtJ8NTyCMaAYEwMcBhmWMwY2yCue6RN4DoNEbrBZxTE89d2bzkzjmxn",
  "key25": "HcwTW4etSmmTpFwaZv4WMY4GPaVEzbFt1e8t6mR1ZLMPsaPtHscutZRKvKGb352BikpNsyZ9KTAYGCAhnt29Bw6",
  "key26": "5VjxjdvGWUzQsi8DaPiHhQjBuS3ih5g11gSoaZZzQM9VH8ExbJtwXGejK1Ehx7KS513tschvw3pVPz5HY1qoavrU",
  "key27": "3Mss5jHpXucQWZJZsi81xyxsEKR2F4C74Wu6kq2K6V3T8RC5Be42KrNyv68ofdZvVDksGBtdjWH15vfkXAXDA9M5",
  "key28": "3SkpNS43KJsDr4mDXCniHghSP22aYxZgT2ryUVy18ErnWmYdGxn98jPUJP68NXJtUcj5zXG2rjHyNxs1j7EFj55c",
  "key29": "5YacJFKXBcQHX1xEpttFEzez7pmeSrFPKLMVFGQwmnfFmK3YTNjcHgZ38XFB2pSwMFzfHN26qve6Rs8P9byRshhq",
  "key30": "4T7AQZksASFV9xD4dFeLJ3VuZFdzhW8CKBGTGqeFCD4ponyEh8NFqncxFg4UAqqbnonPPQBpPFGeYMwYKYeoFjo2",
  "key31": "46GNVfK9yomxfWmnTA7BnyDdx82C9xJmE1RcejPPQGXKsfUf1ZBqujNTNwfmfe7gM6UMKwwxYxjj45VgHMfh5NA7",
  "key32": "59HXggJ5phHeNyskDcqPXXEiTiW875DRQnUnVo4qpVU3wFAujf8cWj5FaBaQ49D2PAWJvZFQgF2CHX1PeBQ7coBw",
  "key33": "47XFxXnsHUDRrZJFJZDqG4zcSy2y889A5chTpssNeTjC7a2EmCEiQyoAbcF2wey5AXzrvsqroC16VYmxYxN6g8Un",
  "key34": "2iWe9VUdZTJ6bxjt3VrryssNYMWjbfMydPXX1uCuMSViQzzV2g3fZfEVfPHG27Y5fTeDBNYUQpPddqGrH1RhZKqi",
  "key35": "4kFS4QbnzjGGc2GrdZqu2dFrRASiXAsRVPNKbQ2uJM1sLD2sEcLynyPppsukX5nvMUv28nCrEnD7XhPKVVqoDF1b",
  "key36": "3VyeQ6qwKCVD5kZ7PfXLXNS4uQGcKCKmNcNPfJRW5mgrpN18ucNDFqKbAF662C895424eQXFpHU7k8Vj5GXNsyd4",
  "key37": "3Hh7i9qVxWMsxQudgnYY1ANkRvi8y2Dm6NcnxF62tMPiq8Dr1D9WtuCeK6G5pYTxqRuaTyCRrgGnU3woFkAY1Rci",
  "key38": "4GBMSvYqCHn4E5av8fJir5N967x8yp4Y2CmmMDGptFkVm9ocCd82WkGQKbaUQeGveCtXQ1zJZ3kV6DQmh97FPz4W",
  "key39": "2feYFiKNFN7s1RkGjAkFCwNwDdbrgKyPHCtTCHM8h5b46bi1JtPmGpPctZ18ScVC5rWS5EA1ctdL2ubVRmgRJEwE",
  "key40": "dGaYYfhW1PVa6Ayyrj1BTP6GgicchuT5VzzG82omyHSP19n4v7eqz52vRMbr2Bwf9txBJnNHKQnnjqjHm5Uhq38"
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
