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
    "2qLUcDWzHBNpa3a92S8N43kbdrE3HNiLAwKR4Sh7XqAxcVpWJAe1csafqSPRFEGXios4Zuh9okTzPZr7Pgm9K3PW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38fpbw4CBLhXN6QykuQokidxHhDULcD6EY1cikQAffCAmRbrwke6JfGt9RKKSy5KNVjL7kBTVJ9mhsiNyKavxac9",
  "key1": "5MPcxP9jp9ynSR6yhB2LfJ1rwX2Cvbyd1koAJc24NKM4Fss9TYFKtpyxmYg1utXzTb33minZKFQf3CUqbcQdN7Jg",
  "key2": "3ancbsrLGk6gTS7Khv3Uc3asB61vmfULkmNpr5PppAe4RP4JjegwvwwhGapYw6qxvD5bXQhF9rBkmnVxdAqacts3",
  "key3": "2iDJRrpbUpwALsARu1Jj27DM1ZEVBk7Eow2bZ6MTLWwPA6iSpUjFnGtZDnKTDewTJoBiTnpN5bcimwsuuELw7kLn",
  "key4": "4jxZhHYWzxUgup2m5NEERk6uyMvpckrLuiaPKf8DMn9yTbXg5GfB9RvXmwmU4QNd9Ny9zf6NEdfMgADDUkE3BJ2e",
  "key5": "2wpi1WmfxrXXqukMZ55xaSWWHLf15Dom6KxJmDmen3Urkrr6pxTqDLoiVXPhbJMjYW5Gy774KVszVWXHJiVdVhUr",
  "key6": "3cXR4TRs39LHuU12QqKFzJNbe5tyaBbLJSX1tEUw5aEEQBwRFvuzQqESpvftxkLxBJ3NM1mYey2LKVZhjRD9MG1Y",
  "key7": "3qcKhL8Buj8RKG7FoErMVYFgdUoKB9DzoodoDqq2GDm6vND5JuHLG3J66tT6HqKZo6Z4oxL3z1dkkvY1AQ4rAUGE",
  "key8": "5WbZ86a7AUzHVkhAX7a6q7h5UwaniPonxKfcyb8n17bn8gskAmouq8sEDkSW1XftdvoXs78vYXby4cZ8dcFZoMQM",
  "key9": "4ZyQMVV1DLnEcKbh7kHGLuSoAhdVu9yiHx68M72HX5wsHWL7ZFzcY8uiEPbaTZ3rNVvtLfbcr1D8ydMVoNkeKi2Q",
  "key10": "5CFUWFo1BZ2unYBkYv9k1YUarPajpknsjjmvQ8Pywfv5UJ9Z5xQLZd1T2FNABtgt3URsVjfgoLDxNKdXSyASK3pc",
  "key11": "2vvJS5n7rcgo3PvP1zMkHka4muhRfrgKzVKiB1AqMLyM7hUPJNWTXUCjrQhX2zBBZ4urjJTTA1P2Z381VGTFsihM",
  "key12": "5DbTWqxnUKKB6gcLjGRUCuTkEyAeLrBUSVo9ueeJfYRV7nx6ndpJj7M8PgwbzKEmwvbJRztMdoape8YgTHBkXuSH",
  "key13": "5rnCEBk42yYDuH6X9aqkGwV3Ny5tas9CerFN7X9PEczbvezxYAVDcSA71vxNLkjAE5tkLcA525DeefAvmsvNajmm",
  "key14": "4okXpkEKebLJ3FFck6epcEr6DKgd3i8KjFGYKTmgkaGCiURaJBrymLVNVQuFvGjHEd6S5b9yRP64DBobSjavrnZg",
  "key15": "621XyAG4W2PD2AE4yTeHg8pNfGo3ZZmReHeThUMf57tek3AV22KrbJV8eGJyTD5Fxc4h7LXrYTyeqo7T116CYx4v",
  "key16": "KcEbqs1rMk7E8ZybZtzVVGoTgvi2UzthBWpzKMKefMRxpjrCvS3L9MdjAW5TdyM1v6LP8RmMDRE2D5uWS3YNdtZ",
  "key17": "2fuFQ9QJLG5jCG2vkyFkabcAAxGuYbJmhcJKwihScKTPHtz23ca8EXkhc1E4kNRvGwfzwS2hBGK534wMWaAdesL7",
  "key18": "4v7Q19TEGB2qkCugmokRCyH7h21uXZANn7FHh2qmGBAKu7Jkbz37bx7XkcircpMjZkJV2FoArEVcKsGEH3WDdSJ6",
  "key19": "4RHerZz8j2a7WKFmBXc9SmjGx9xbmakn8HzN2tq4Nx398pQt13QgdvadtaLUFis2aD4dJPjE2Qn9L2Uw7UxkC9TB",
  "key20": "4MaKrMazsDCdaf2V3oxRr6z2oEvGhYnPoPz98TBEi67kYbDxhrA6EnF7rigZ24X3rUdqDvSJhX82Hm8EdjcZnpsL",
  "key21": "4sQaRmNDrqcUXnzwj67txchC63WyDiPMfsWYjp3BYVDx9frfb4vNy7sQhyQqxeBU1rXLvvYUfWAX2ZP76huA5EdM",
  "key22": "3ahuthZmcGS4pYHEFaCiJwfWUyUFjiBUEtqvQ4BEFFjyK5Kwce9MYFs2iFUZUux2uVqFU7X9nsq2zxZVYnm4HoUS",
  "key23": "62g4rGFqKDSozU3XVvyfct21WB1yamWkatSV3puLkPnzZ3pLvCPR7vT2EbDmfYmp6NSGQr1UyKQMTNhcx99txPoj",
  "key24": "4VgMEvukcfW3ofo2EZeoxqmgoVUnE38P1bBUb8HGdHj1RKWXYywhUn992UUQpozJKLn9gw6B8VN7cgaPGLwo5yia",
  "key25": "5LxHUFWQSK5Bmvs8ab4e2QsqBVXqQc1tdKLFsDKPoKXTRyeLjqxawhm2wU1tkrwY56z8z5EV3a21QyBQ9Cn3RaZM",
  "key26": "Ed1N6qxbSoQiw7F8mCH89ordfdgAmXGrHq5vRvAT5EN2jMGiuMGysT2M2fdEqQBwMtt7ECGXy4ePFiS6FjJTqGL",
  "key27": "UK1wbbrzCNA1PRwGPbsXL1M61ri2Z3LrqiAxeefA3MZvwr5PEiL31yYvD7fK3GnB8qD5oqaGKf1v3nESzM8Nm4S",
  "key28": "LU3qEC2AY5sWs1jCbogGuzNXZkwxeP6jNEBtwPxrbDgudb43quFCrC6A4QcTrvesLpNLAyuUwqrn7EsoKqRD2Yc",
  "key29": "27YygB7qdALTB2Gmsaw4JbxTNhTcWrMSx5QeCFuvtKxecURjnR5o2tYvL2eyTe35XPTBTSBcJnCx4SWhRG4mbVKi",
  "key30": "55q5UffEWetv6A86Bg8iSyZvL7xDhPFPKzxwpgUGvwwYgM5KM5HcHsB4zCNVpX2eNBXvkJGh9NL7TEsJxsDkaLyu",
  "key31": "51orJeupMoSSTKuGzAM5iVPJfVUpDRvXw3UFzxUymzyepjrLvgrt4buBq3aNpsXsSEEGt5DMy5VAGYehA5KuMVBJ",
  "key32": "3byn17SCkFjhfeueKxSVDPfoWfXLyNw2MKrEeNe1PqjXygEGCNRQdZ3oK5NqE9gQviaXFMugk3bj9BxrKvxwtuNh",
  "key33": "32bgU9mWPDXZ1qQGm9Y5YMtnivjfZqRocXdnd7SKcwx1aaudoqpfkevu2PRRqCCtUTvnQ2BpJFXryjckap8xHbwC",
  "key34": "3AvvGsH9LbsWEMEHJv1AtDSYR6YgEyhq2s5JBBtrb342hizZJLrU2Rq4uSHT6cDVtNteBMMLYAWXNUeccUKju1Xk",
  "key35": "61cwzMjPf3p17omXxhCdJPfxFqt3Z918SCrTAU7MrSrNjrVyEukz6wggos23t5RCCinShKgLBiAANBNGk7cTpjDP",
  "key36": "dRM73NzeavpDTeh3SZrKpDkAWYXxpmBskvsHqUrkj6LqeNk2GyBMbAm5cjfFcxkjrNzGPdpPwSwGPtWk7ntruw2",
  "key37": "eVXqoVuq8KGf4wGVzN7rZ6p9cSCT1H1PRHg9ih1oLK7WQFYwXbsEmXCc3wHcoSBL7XcGsa4HsP5Z1k2RHsZ45CS",
  "key38": "4sdXfa7BfvxDYLzeMcHGgTA2grD4ofGdzr8fX1JkCZsPXcd323hocnAjZVHiMgKXSuyUE3QWkoNcJRErJ2ZT2xaV",
  "key39": "2R5Ljqk8UbV8NjYaRNLAFZ8gt2eKdLvdWWWs9gq22vjsx6fEW7ezA2A1E1NpB6UJbsxLERgHEPurMxw5n2MdcVDB",
  "key40": "3XAxHP22f5q1F4vjz7EiGon52tKYMVBSXAao2eiKYM9goxEdQa1Cz7EGR4rNcN1QCLBvSWuzP9UgBKU4vwS53inf",
  "key41": "xV1D9zDzPwCNSzH3UDMS9qkwpWK9Lddji5KHBS9rEZ9qG8PnzyhpDxpnTmo7xh6aKGYaG3A81TBCznTLBXaSUSd",
  "key42": "3hhmSXQtAp1shno4CKEyHW8u1kvsmWqdGPLKNJfZp1ZAPvRnntb11E4SkxnSb41Uc93Gs7tydPTMo672zM4QHmzs",
  "key43": "2xgCgp7HTMcj1YrAd7ghjNQeCmd2ea4gMfG44eiLwkUcBhwpYK7NZXSaByJro33evWsuRhEWjBNpRyj69cfgFeLZ"
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
