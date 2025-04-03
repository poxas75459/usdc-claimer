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
    "52328NAiH8ovVhWZRbsJAn5ER5ESRtmgJsoFDgo5X1UG1CLwMCf18ZoMLgPUpCviHNgkwzUxvokTbG9t4GnWTYUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3432HvSUf3bMLAiwWsZunDqt3tufpqAFVARLPPE6fvpx86RWwv8U1c1RNdYMMoRFLfcXHBjxrZgb8SC88pCEKSPG",
  "key1": "5QMBYtJCsjkbz8uX1NhC7ydfxkMSy8gf9guuuLBB9rAX3Ddc1FLTsfxe7PLLq4VjKqMDkcEjLDGUnF2Nd4VHJWMN",
  "key2": "37nJQDX1bgGeKjq66VsUmEuuspu7VRvsfFrbf2ipAeXvB2JsKbLJYsqq9Q41jbvHAdZuSyWGqY2JUPgnRm42NMMu",
  "key3": "2apegYpFgqJkvpemb6GBgTVd1rfCXLzKBxqRmqP34cE8sELuAUmCtLYHgoEbLwtgNsZKhgRpzGiymMRm1TRpiuyp",
  "key4": "4jfeS4CNyB8DtUnMECo4UdbBzBeEAWNXb9ZWctQHaXkMo4YqDJbM38b4C3MwkKzUabNSzw16AMH7a14ySphNhLfW",
  "key5": "2vFDPhwwpWmw78e9brnWY7ehHVSWvWGBJQEts1hwy5D5cV4iMSddfuLVduNUC8W7oNjQCHB5RdqtUvpXcAce7iuk",
  "key6": "4q7q6ZjJ8Nwk9gCYwxn6w7i6v9dkXXKrs3z66mw6mmbaiEeMQPVmQSYtZxv9VV4DLbKkF1o97Y9XzJLn9JEycuoq",
  "key7": "3LFwor1ZCogshoiN64b5GrmgiMcbDPjRyWFe5NokBKHgmwnvrXsWxUkdC3hSVTsns6kzxyCL1tb1YLh3BGFZxTmY",
  "key8": "21M3i2GeShHcv6R2dUhBiHfzVuy7k577tEvSBX3e9SG43ubrtX7nYv2xVG5TKLJ3XMKEThCTqJR2mBf36MT5uz6y",
  "key9": "5EtPaBAcDFzTpBAdFZRfdSrkcH9tx78NvqmpWJUaGfSF1bfpZKENRSijp3xKNptWYKipNCtnDBq1zqPyTN3uzCHh",
  "key10": "3sarh7sF4PEDLdFjutoccpAax3BUBVPRX4Q2unU5PKbM8WQKynbmn5kYLNPbyT1MjErtH4t3yLW697oAfu6dQirg",
  "key11": "2sgvcL8Svtgd9XuhBgqU1oNMf4zgKTdugwf5nJmJoBVgi1ubwFCj74U5DeVx533F7W3oBEdp6R2TtPJnjRrK3c8W",
  "key12": "3Ej3rnGHtYA4U9RbpPjpppFskykkbP8emGt7rbzCr6xwvrgidrPt6WuRw9JYwWeKLf9R9UEyUEqBLAKTgJpm8De1",
  "key13": "4i59sX4x6gHTMVDUHK63uCV5Bgdp4mdjh3BWLWgGSMwDX5frPXv754V5tkCPMtYLq8JRYfXFyECKkGsWoJGEatsY",
  "key14": "2DypMuRdCWtYb9eKFKcibL1BLQ9bgTgaDwQXULKeQJ765NKBWad4fosE4fm8HonVRXo7N1q4z4De1Nh4YAS9WfLQ",
  "key15": "5Hjs4r6hdEf65FFEcvm4b6NzWQbdDwRhgYnCanuZf8uUgbxvT91joRGL7SCFPqXYhjGmfn2zzbnfyjsas8Fr4zeE",
  "key16": "36YKaqUu3Z2KW1W3ap4PnSxguCcZE5gL37W4KFeQYV8FBfuttqc9uTxZGSKDgVscuapuQtEDdMBA8owxtLrQD8iC",
  "key17": "ykR4Nk2AERhXpzvpRPD9i7a8CjhXxgFQMf6zPj7hfahvxtN9YM8tsWjLLhHnamsaanJXgnbjWS1eFoXC6AdjqXb",
  "key18": "tLMH8zvyNj8XC6ftLMNJXdK1Z7urcFs7uKqSJAsJidon6NXJ75R7PN1CV2feAauMH8Rz1mTg1hqNJbjwg9xvjqb",
  "key19": "3cg6hRZuQoYaWceeYyephnvKqcXByxM3CHsa8EUebk1MEQipyBfPqS5RwzadnYGgyUMdxbWtw3CF6oKR5B3nc9vS",
  "key20": "3ytrjiQQkAz1D16xxpoG2aMM3E1m3zyigPwoP3PBfdJrDPjp6dZrbQymmqeKiSE2KmxCap24Sn3PCWjJXAgsToE",
  "key21": "2YkCRicuLfjmQJfH1dJdpTZmzWrkqVZaXGFRhati2WKP1GtJPV891JC62hfH7rbm6UHurZ1vWdVyjb5BuAhZaj2t",
  "key22": "4rP4sFC1pLd2DBd1FQmQ8uTYFLvmKJPcSBdMfaixSoDEJpamifqtNiqDTzt5cL87pZHsegQnvUygD6gMVwW5ENqu",
  "key23": "4wJc1uXc1nSD7eUzJDHCXNFpSdpcpByaV6k1kWxBv9TcZBDRtEG4ZBXetKzyvpbWsRvUfD3WQGhgUWhbfY88zdav",
  "key24": "MsWgPyZw8zBpesEBJSbWamtYCmtWma3w6Hyec6FxMCeBn1XZYyyyKXrNMPUVZqCimZNmuaEu6kqQw4ExZdfgY3m",
  "key25": "5pzC3gKoqnTwcFMT6kvPKsNYtA8rRJWaHbErvESKGKmfdDM6TKeBHM1XtpYprG9Pubxa9AiMoCV9XHqMoAeUsh9c",
  "key26": "5YHr35synX5hUUpkoJwo8uatHEjbWs6mG9ipo823BPhQatFxnNDKtjwb6xQAjsVX4wtfbucHf2fZX9FS4sURQSrq",
  "key27": "2RVn6gYnuZTmA4TyHxffqBt5hHTXLCUH81anj1upho5GDLfdZ39xc4Vjbbchw1jutVUKeu6TuVP68DmuFmeTykUY",
  "key28": "29nEqjHLDqK3dgyFVG5ijEgxKvty7u3XByvoyzJnE6qFZMZTsT2dozUcrsfYCr4asQyzTBAbkj1CZesw7D5s1dGX",
  "key29": "4sKFT8yjttX8Vx15B6PtAgvAqiLcVuVVMaBjnHncyvp6jEZafrQRTntdugiDJCPeKWH5BwztyGTaearbX8o6SCd7",
  "key30": "gcEjzLLgNrEdXiJ7PGQcSb3zGsNtXNY3VSDL9urrrz723LHdkujgBTLztxLbh1yi8JzuZY7vgkyUQ3DZvBeEd2L",
  "key31": "3Vvuky6qwgGhq7JyV9ook7yWdkkfU82Bd6LtnYPdx4hqBmpRzTHtdh7LvNHFuNs4ZAgk9TjPnPNRTTRGiqj1rCGy",
  "key32": "5HfcqNG11Nd6EnqyQzGPnd1JgepZ4zmoxmTezaEh2ARpDmU74e5E5uBqniXq3EtBJ8EYJ4SyU5iVqf51dg7zRDKF",
  "key33": "4niggKw3Pqn2Jqfz9e9RE6L6wQjqweGB741Vn3A5HY8wjWPML1xq3s7MP1i6jNwZo7Q3SxsMFTqg1fuB5R7sbyp4",
  "key34": "4dr7b89nfz2DkkyTKaHFXDd5nekTzwfDKuCyMrd4YGtzG8TLA7VYHN4q6e7TqPDUaEYJ5YmocWFs2VLi6H6cL5hG",
  "key35": "4fNiengCiuppo7nNJvyggf5NibR95vfHpBHE74M93srWCsXC7EmM8H9iKpomNHCbov5M1qjWF9UuuoRKSS4BebCT",
  "key36": "DxoohbVS1ZX4EczburAPaXgN9c1Z8g5Ebu2kpcDHYYUn2ToeRtQSWaxeRSyYqWoey6kruMNCooee8cZpcTw31iS",
  "key37": "2GvoMk959gq18Ud3xfRcqbPVo2fzQdCW8jCUM2xtB6NQz2tF4k6yZK1FtQmpPVqiwuw7JBDravNKsBMgF5Jj5o9V",
  "key38": "5juEqKMQWXmYntd6DYZjCy95gK5SjptSkdPpHahBAF8KXuFb8cCxdxCbJwvWCRen68P6XKyFB47na2MVi5f65hj4"
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
