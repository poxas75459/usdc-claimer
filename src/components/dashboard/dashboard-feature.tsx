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
    "MGsbLnfAfKUgw262dj6W3o6s67RpdzbuaENbPsGVVVMqeDgB9CLQTwXYY3NTnioMuRerPjeN7Vz2YzSfe5JG9JX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37kGn6w7wP24YQxUzpsLuoh5T16Ua8nA8g3zTbwRzzCpjFsBUQEHK8S5M47ogQzJZ1iKBw3zX1XV4FWhGMkXkM44",
  "key1": "5795rGVTs941ALRZpxVC68y7tmq2X9Q8CYAZAhKE8TYvcrpDT6UN1DKuRDaDzPBEdAGStxKApjaQG42cNGrrdqQN",
  "key2": "38W23JrWtHbgBqPCTKyoq5v1y8VfNLs8ZmiNCLYUfxcpPxVmATw3c5Ckzv8xknWbq2CMSfgwouMuK5Z1utXCG7hj",
  "key3": "2WSJxW44A22z1FXfCYJUxtw2k7VpmW6LG5LJob3RnYBbdjNAtaK4rQ4nFsmdqhYJkESdZ2vJ5sVuASJcFS84MNRS",
  "key4": "s59agAmxqeC4r54JsSS4rjNE3GPDVmQsUyH2EWoTTNzEhKTMNyusVCKX5L6oAsz5wEK4NiQzhgMpP8jwAohUAfp",
  "key5": "JK2NyeFS1Tj79fF12Ed7xA8snwGqn8yqbBbuqT9Zy9uCz3Dn6oqeT4wPDCrUm8kaW1JHiv8Uvm1n1HSQRvqNLHT",
  "key6": "2XGiMbJ3QccFUGkZ5VAUB61fjU2GhPsEoekSHoUoJFahsjsdQ1uhU5uJdzZcjov5Jbpwh5E33S7b93yBuMQgmU3z",
  "key7": "TYZVGN4dzL9eFNXZWnawxTHrf2a2s3f4emgQq5vPJ2akwuBtjsJqXFxPg9kdGBKYjESgqVzw3KrhkeJ437cAcNo",
  "key8": "3696BwoX8CEs4t2DGoaZCAEnRAwBe8W8qjiMPq4nYfiFVdF6uDeoCZHria7f13RZ73Y7P9Lyh92HWSmcHYhCmGKn",
  "key9": "2pLZVKjryiqpHxBNxzPvBFYf5HJQWS9Qs75o4fAdpVHHySo1GdcFjHQrLivhesoDgG1Lnt8V5TeKam34FVyrKTYi",
  "key10": "5VvmUP6RL44Kkabgvd7ueb8KQZdTF7aCpZMp9maaD6k8ugg5mLmDc7i19Vvmhrmt3qyDJgxraVE7yVHdYv3kdZAs",
  "key11": "46UpoYMNpfjk1rKe17S1xFgxJ9oPQwSUoZ1g6r8FFrnCPriHJ8pneTcZwXBX7hgoNXHLRJBxF6CcfhuehBRghurn",
  "key12": "2AZhdTzhwdHUhekHP7bStStPLqvuUGFjV4Tz1pRjy6crsVjTKhyRTPfbyCDKtnDVZwTVgvfKFA3fC4h9cMvc9Rkd",
  "key13": "5L2VS5MFxYBbUr9W2qfqze8aatfbPDRRFTQws6bqrK6gjGkxmLSK33ZXCKkc83NYFpJAoNLcZovuLKVY8LJiAcMx",
  "key14": "41ZvfoGYxZXTMNjWEUuinRr4RVSrPKMCVBGhbY7nmuqR1a5C27rAd4aTnEwLBqGVxt4xWPohvJCJENmzTnY9etL5",
  "key15": "2Epgj6tPkpcRDizmDJHZZejnHV4vVetYkPoyjchDSSuYD627iCsUF9N1dnDqk4JkWsPoUmpqVAsWC6KEZjLbhwjm",
  "key16": "nSxjz9fEzmUypWudTZZKKfMiQLqRFWs7duKyMs9UkVDpWauyjh7cfSWDQnsfcCzDohj9yaYYGbD4BcrLefZcuUX",
  "key17": "if4WjZyERhZawm2wBrGcxzpbzocmoNa2j5ZuQt5Wrd63o1PyG8db4Tw84ZM5KaT7Zzf9NuefRrkrXkCUwHx5HJn",
  "key18": "4fsR6iMGuR7N8ATk3K3ua23VwKqiKgtyNxi1kEKg9f1xHnshniJLCAXxrYhUCkMoZThQNxdidyB789hFBPTrSW9",
  "key19": "4ZfDqRMqLX7sfNAz8sKjVZ1QkUFeT3TrFiLwcYuT5tLg3jHCoTGXE2C7onaYDmsz98vXN6Urz28dpnUqxn85NH7E",
  "key20": "3mdnfmRQbHekSKrZEWsQRM93MdD6tBetWVJokSsESzJT4dZfQB2kRaEDhebqNJZ9kfvp631pKSNQW5sMFRHyZSeM",
  "key21": "VJSCrD9XV39m59oo7WybnCbcVZdXTGixTfmfMdfSRaxYXuWjW3wftjS8zG9vnfEoPgUCeNgNPkThyUFsPjKRXUt",
  "key22": "2HK382CaYNoXdmAE4mANp4RDjoMZ4YKPM1SxByio8NUKs6inYZfLtrnTCZdQjYf1zkmfTRzf5cRrL7p2y6hLydeR",
  "key23": "bim7ZmxxTyNEaHRzRCxX5as89V9TT2cH4JFwaZTLhSmpzZZGu6ozU6qdye7LeXpijjvVxNnDt6HqG7Bqun6bcwa",
  "key24": "4ZfUhusdQvUMzDxQdQQYZzvN9FQAEuLGqoFRpsG5BmqAASRBXrtGmA3QKuuHeQRU8r1UUX7Y27wGzHRvqHh4CrGR",
  "key25": "3QdEgRGQPHX7hmEBKp1cgBV2S697zToeLk3qcSczsKRVyp2XEXT7hvD1X1rNhvHQwVSJnwje1YgPfTzL3F4BZUnw",
  "key26": "3p4krdWTBRZ2sQv1xyivn6CgxQZEBzozAHbkbbZQirfx2biAzUJiFLndoG5vyKQMHv2j8c4Go2p1s9EUyNzCPpTM",
  "key27": "3PHMLjpPfTRoAMNQArxEXRP4kXLZoVhQmE3RHLdfRTWBDtnvZV8QvTAH6HwWBeFcTR7X2FUJ3iRv2NTYoaRA7y64",
  "key28": "aMiiqXe1r41i7qREcQauTSufhbNEPf6oLDwEf1NbvSG8UuGTd745fYGcw724yiXL8fcSdoxcHRgRv6KiEaeJNZu",
  "key29": "35q2m5qxJw1nBPdQb7zrgLuwun97D5XEV12DwvKoyuohQWk2g4ggL89kZbgwWG72DnK7A1Vrn9VJ7stm3o4oUxyk",
  "key30": "3FNZFPew9JY5qskemmmNXYkU3sjYxDUzRytBQRmBr4kn8UcLytiEdtk8CXP1YLSy9xLAvPCzLR1WeBZbh9FMQyg5",
  "key31": "3nZNc1VH91HcLxGUiDgkGPXNwUahKeX4Ks4MoBEUtRLUZSPTDiR6h4i5EyJGMVbLgk7LAL1en9qZYvHpvPXsEshe",
  "key32": "5nGaHz6dBdfDxYTbHc9wP8shbC65hHyvThNv2Xey5FbumHDTuZYtTqWHp8wLDQRGRgybzxjZjmgFo4b2cGi8t4rt",
  "key33": "WDYYHrCscSVEVsKyfQ2VCLh3gzDBB2NDUFUCNQXKncnLZ3rJkjPbcW3W37MNyfZEgaSEBP8ZdaoR2brcKZa2Euk",
  "key34": "26qxYZPdvH8zFFPi7yq5kV4wbcTm73EnvsPvpNYbL2LkmsHJsRJ5RfF2SiJK5S9QDniCdWv4u93QWsci7rCMrRVt",
  "key35": "2t83aUSyX2VzPs6QzKoaVHpMSzpReDYQyBjPBAr8dKYHwSiywuEL8TqiWmrTaeXoapjVkVEv68W486311YxVtSTR",
  "key36": "5gsB9honDZq5Y2SAW6ztYYFYfTCDLF9Nx4zRbdjHdp3RQ45LtA7ym55voT6aoWazdgnGzoW9KfcW2GBRpevjBPUE",
  "key37": "3VTQZfpPpPMwPRUquUq2Cwp8HdRK1jDEAmES21XQNT2CRrQj21bWvHqo2h7YFWmFt2ureJ6ngRcs34RhQC1aYYCc",
  "key38": "oc6Up9yGoXMQgb8yQePhKszRYdycnKkVWhCCBonzuuLVrRtur1EdHRQH58anWDUao4ivcESAffMMJ3qD7JBUhy2",
  "key39": "uv4dJ7CYGsfwSeyjGm7kcJ1BEth58a5qEUwpWYeYNBJNxxeAtftMSWCvjQhxVBkhQUSsvrSc6aDzsi2qgu3KgH6",
  "key40": "24RjDffcR1xd8R5A4ud23iD2dJ4ikbHzetqhuJJdCG9QNNGEudCySgv3cSTPeESaQvpMBqy8g2cJy4G7jpzML5Sq",
  "key41": "5T6LqbV5j18SiRipR7cPYSFwBdNmMjBH4WtUBM6s9bgNrhJSqsyJ7VjChzCYhtzJdus4rz3DjnncFVDEFjbtGhJj",
  "key42": "35wRxb82LWPy19hLJjGos3GU15HcAMKLfdqcXDLTHvBEVYTTYHVJHybjtXnLnJuH7VqY8Fw8Lag3C8Sr4C77Fxe7",
  "key43": "2jAHAHdYtoJHU4VuCY3uTNd85v1oRJBbazB3JYZjNnDacjssstwfjCuFfZY7bmRACNE3tJxzKZZKMjbS4unCSrfw",
  "key44": "Lcf3FDXdaHGQXivHoteHBNQsXBFPn71QaRanWHJEdEwwxvyPSc1ARxAVe2gYhbTEtLwqvkgCFhS6aFeXj3rmrJW",
  "key45": "2baFwQAdPEn6NMzCvYrRAqpBNbrN49vyjBYTnv7fHHTabqpGuBXqdEfVjfyVSXHkt22bYjgBeBihFmr5VaUnEqzX"
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
