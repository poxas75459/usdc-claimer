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
    "5u542jwD97HwL72Co9EhZJc4Jf1kvgFhEruLfK47eHPoP7hnFMfzthSdQsizJ9Zie3YMVynsvC51jWFSFTFcbHb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rFMRCCeRGJ12VGaLghuoSk1v4eYsJLKMKVYVKabMKqqAQtCL1EEY7Xm2hrKfMdZAvz1bXCz2NtNugvpWS4XNBig",
  "key1": "5iSVt3cW9XE5PJeL9cV6sN3KkynrvpuNSvwbs1e6yKbye7XX3tgy9Qb4JW8Nn8grZFbfi6YbziSgAuDVWS4Zijv6",
  "key2": "3B5VEdsmK8S9cfiBo6C1hncyBBKmFcwmsWvEBewB3XqZ3UrU54gS5EYbsN3ZoG9i2LidouxJTWSaJaepzVuEVZLi",
  "key3": "25Dypotcd8TbfcAcDCpf5MkBQWJMVDNsZS2HTjXidB95JBMvS89Z2JaVXP6KMSg5DQvagx3KeFGBicgE5TyQ5D4w",
  "key4": "5yEiLcqzRTYrQAECKwQgLph7fSysU6hL2UdHbiWR2eufx2BoMNnqYbzgoM3DMqXFMVqYtfEcJrjyWzU8QoLbRAfB",
  "key5": "bi9rMDfsE6AzVCrxCRq3grCkBEoCmf3d982VmSKPPzzsn8EXgVzrHH697VqGg2G1V2pphrHvrtLcrxHfJ8v6kmQ",
  "key6": "3soS2QB6VEucV2kjvM9KinwQXzr1WNfEXBFdcaG727ZhqRXWYo1T1WaWZDeJhohYtKG7EXXT1bSjJh5SLHqns8oS",
  "key7": "3d6WFULB3unYDWtcQDxf9Rb5JMvxBuMKq9HrqautJ2uKZju3fr4f14WmqN2GwZhcwBVQWb6yRhVzQ7PPQQuCehKB",
  "key8": "43bgBbXbsP8QyaXuQsAzqh1zcYxAwqmXaiT3xejmTjoRwxQths7bC6D443AH9gRoD26Lph92S8bAi4QDDyrq8qfn",
  "key9": "5kdHRcr7QnfHHmAiLRbTmVH3H4ZFHVyFNg7RAEcLiDa6v9LRw8TxsTbfP2z6ztybuWJgD6ia4T3Lp2YWbKGPbRjs",
  "key10": "4x8C5s1QM84QMWaWVuqdJWNJ8GpyNJUBgYAy2m4tkoPscX99cVEfEiNWkYgLnKkGm5z763mT83Wx3axdBkJhujiJ",
  "key11": "4dH3pDCwPcxykUSLbjVoiSREBRdUVDNWiybfcqDbEEN3qeSZd4Dje73cTqCEkE1sqtp3xa7dhcjw5dhQQQVDzHTe",
  "key12": "4Zh6ciTfx21y9uWuEs23GpszyB4CSQr2ixRSE2YJe6oq5dkiun3nEMPDTdzeNnQCPekrobHLxBvMXVMjBURvRogk",
  "key13": "xdWR5FH78fJeRsrdVHPaUCUKHQx6eTQUfc2iTfCMygZEht9G6fieT2HNaHKKoQjd7thT88AyD9UmQHx7dBajaVh",
  "key14": "3YXi8ZXWwD25wSEEdBmrT776V2XVsFJeY8j4ouUQL9oLbbbCXQG8JpB4jxJvFLKxdeG1usKRn7ccevnvpZmMprgk",
  "key15": "4n6ejQpajX2km55j7gioctJGtAWWZWm1aQPp6aRN1u4xrWmnfEaKDp3VqLNnZHnkwShsME1MgooMrXkbV3nz26c2",
  "key16": "5okETSDiFYhr8izySv15aFbSffPawxESATvRX31xxMy6nhS1i2rgM63Kg8YmTFdpKFP24nBLjTVhT77xMSNKzLNA",
  "key17": "5jM9eJavJ1voRy6fjfMmKFZchk5zudy3aay6Dbovb93Y2X6BXWm6kLTdHcs1SZjU2vehPWKHpyNgJhqQfENq6qT8",
  "key18": "5C4aRRz6Mc7bZvy4zRcxbePAxj9msFgnbyjuabmjwzRBMLohMfmg9cyPJkcV6rCd2wYB5vdC2sL5fbdEQghaWhPZ",
  "key19": "8hC22RvNHuJhaYsRiVS4cMdccPtTHT7owAcF36WKScWe1VxV7S8RivJzWQyYbEPwYAe1pnfRnENVkhn9Ajah8Wf",
  "key20": "53WRSMH1fizSP5tJgAu8D49pWVNHRmcYrKT5zPtHVvgcsxbTVGK35MNFg65q2yL6ZP4p4XfLaBTo4RLJ7TPGKqqw",
  "key21": "3T6f4Fe1pKi23TkFEgaRWLLdAYPpCZFYPyYKVvvXykTGg5awFBMYkzbJpMyKkUHGVP2Nin95fLcXdpeA2CMURJ7d",
  "key22": "66THZmMXKBP3mdhVNacXM9z7pzEhsX8X5fu4md6qjiKwVKcyhmJoDAtXhzZrvwEE5mBosQu7yfgJsWxCmP6bbXgu",
  "key23": "CcUD9AYSR4Sq5n5mQeFFyUJU5JkBwiJMMPFYmFdrEyjKicC5FBavf3JvPdzHsVNHEu3JbBp3bB9AoRXFYGT2bn1",
  "key24": "4L9P8CLJb3Eq5HxVR1oKcRV4C4gi2PmJeEAcZYXzj6oY1R76GuYwQ2Z6G2mpjK4Jf55qVsgSxT7S42h8DK9A8g53",
  "key25": "2MXZNEjufsuqRCibG7TcWHWn2kkVQPHTjVUqV95KVRg2ZiUpu4GascKsWjAk4RNvLpn7EAWe2P3PrdLMf24XYU9k",
  "key26": "3vKGU9gqVesnSeBZyoLNbWyJQ6hU3NDAfxzUaFC1Lf3ME3zMPGct8Bs4KCZX1wovAiXAm2Hwyeu73JTY9vXLuSRi",
  "key27": "2yUwY8GujKMHGV9qevwMRLMgV1FU8P811Pc2VSXaCL2KUuLqUKe6AUrX1ytyEtg5MrfHhQZY1NaWZ2aFq41kESTG",
  "key28": "2PgGBxMhNfiK9w5fHnjiTmvppvE18S95Zt5T4erVmVUqPsGP7bkNWZkaF5awewrxQB31kdcZihC8DLSC3Spr54HP",
  "key29": "5FLA8HH4HvzZ6AH4cnTWGRWtn9pMAKuXXTuhVsjy49QeAMrLqCxuNEDKhHWJC1dGSpWppmeEuW5maxvmCEhrrDkp",
  "key30": "4RYHKWr3ix96gMPoJpGkZjEQgjXkE7iwpksW5u8XbLLFGoW5UkNdeCfU4DQyR5NxcAqv8p2GDFr5wZbGW2z8wp5U",
  "key31": "3aDxNoFHqi536oAL31MHggbFH8joKsRBSeC7xKsdQ8pWyb8tv4gRC4QNJNKYKeKLQT1mD26uJeFYAyH4Drz1ikZV",
  "key32": "forbEyFV5XewB7FCa2JaMu9jeFqVfzHjW2SisT3PagasYLgoiPBfCdYUH8mdq6qRAQd7zZ8ZVLb9kypNkGM5aFc",
  "key33": "58o8aVCazJhsDvg8HdnYgjcvYTCWG62ZMMnzFzaDguDLRHRDR8k2FmzQuC1PxsFrPiDwYnbXo3hYHDNKBpNyDwZN",
  "key34": "5UfhdstS7yPbxLWkjBfX57NfijAyLKjEqQa7U7uR16oHQxMgATNkbqCKsgk1SicMDoYrpoGvbUhzFaEkkJEHrjPb",
  "key35": "4DHqXtqmm9mLu3UmBc6yygANAHGK3SA5MXsdu2CmWwXVZiYALVMpQyTa2JPnKGss54DjurX3FHymoXk3FVcHvds9",
  "key36": "5vQ6D46oojfquEC3tDnrL8sv6p5fggj5a9asWLX9YzRVcKrcVKXjYpNbhfRaaVjFff7DzLuF4x2W3maZm3JTmyWJ",
  "key37": "2Tz6MoEdpcC5cFpvgnB2WTtsvi2TbFqHk2WgozxhcWqpCeWtyEsujtnPiPakvb3fADLNPqLj5FCbJR8vWBiETKZL"
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
