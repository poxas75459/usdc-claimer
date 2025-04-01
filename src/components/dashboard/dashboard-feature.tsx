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
    "5WVmqM95w2iLhmLFz5yYafJQLknghSSGvc2BAEkybU8ZUxVccm3odzYEK5v6fYx1nrQvEepv5BmdDUmRyRAYi5pq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dCNktP3rFXsLXWxLciDGo9FhHxL3BvWrswdPMmGQjHukGJn5HpJy3tM6C2D4viixyukkfZW8T8qYxWADZJv1K2h",
  "key1": "2TbFrXTvKc3Div11Eefcbvqmz1DFy35YPZ4hK8qgcszwaWJn4maVGGjsuFSNNvdCBqKwpetFCohJ5wKMycNwCKQE",
  "key2": "2btCBUh9uqyJBXt8DeYYp8A2nkjBm17a5vhw2AwpbVR9H8YVgy8hTM6gLc2dn7yQTJXt6oFiexVw4baqB5P6q7Cc",
  "key3": "5fSULoSXDTXxeRYdDZqAHAUygK6ifdxn4TmExd6LXNgKmB3dRkBsnf8NiQWy45juQr64L9W6jSf5gYAdaFVzRx5M",
  "key4": "3xeohs1faTmJVyyitMK47vM9WVQHxVJKyjWraN4Lu7oRzCc2EZSkoRetGeS2bnWePx9GYpbjP7bHfqctMAs352Qy",
  "key5": "4roucFE3iJDRdnGf6cPryA4YKk3Mywvtit1SBtGoDagvRXHoNzbj83qaPmXSaNb5SHKJtvwp8QaccSsqcSBhiTfH",
  "key6": "66BHBXGLYBzJ14EoHx7soTJhxyMmvo4r9oU3NnEaPjSG3fi2m95Var3QJjrWjPpfkjCAMrPsPMXnc5R1euVPNNsB",
  "key7": "3x7fxiGnTuddPCMZwgYdyKqpCCAUMExf1NrE3Axe3V6twDLfDX7PxM2mvaDULiXaHjLjdzfR3R2Esw9SUsmqrPMH",
  "key8": "3zPE6euC5fppsPwVXi6qHGR45ZiDL1zCLTR6czsvrxWAKjmFUjP6rKYssJNto1aUyYbdD1ewwSLirRQevXhNvbpk",
  "key9": "EW7bJfzHTT5Pb4ocW5GUcSgSTokGT52XPUBm7vAwwW87udh2DYtsBffFgBmCE8fk9SeW6mjbRuCRtzoSVrzVCxU",
  "key10": "3mtUa7XWaKFp2JHSs3kCDSBXxCm46HK8FaDE5iD3PdCmeADsMtoTudjz6hpNWNaU2N5vhkEZK38VcmdEdXMkfUnU",
  "key11": "4GV78sou8LsVkL9uLNViL2vohBwqYTcKzQQHE3wvnbDEubgzkpfxwAcKg42vRGEQxe6m99B7YTGRJr7ghQnYHKgb",
  "key12": "4vFLAGSRou2jxLMGQ8WUhfGiiBxg4iponezdVrUbuA6Mn6ep3C5RYTopVBHRaNV6YP9XFUUAJk26xWnotSwXHiUg",
  "key13": "6jwJqH1b16fRWerLC3msTk2jSRm9aad8ZDePzNputydUPXaTy8ypFeTkFwQKhyLCcdHQ228jABCdhqU3ZsvQRS5",
  "key14": "2nmf5aFXZR92mcZDncfuBwVNB6beeAtJUJ7kwtSXuXMUJFKtU1poePTHf164dqZ6vnE6d33sWYvJyjokYvHoi9TK",
  "key15": "5g4hdFXn2qCRNqSA7ELZe1Bu89jX37tp9dW4AitNBR4THLP3xRa12nyM3UbWZmiPprmDMWMHBGnQtFbDrzrTP1Nq",
  "key16": "5kcVt32KKZ6ePjcbQQNvmFSqrAtZXrkRoifCx2t3ubMeFx42FT4i6WsgtTRHHaW5tUnSkc3ypvg6YZhkyGEyFBe2",
  "key17": "5y7qfWoTUwnLDpKfe391rY1FeinZuSZmkSn3jAmSxmhY5HZCzxCYP2tfZSK75X8u7kP1VEcCEyUBSgNhhun3r2wp",
  "key18": "27aWDM9Y1CXmgzdTTxmSUAKitVFKoo8LFvcs1N8oFZ5Ay5CAvM2c12AZiTvowFwXubCYCPy54AkaPgHPGLqoMizT",
  "key19": "op6MhGLHqKYegCAqjz71CRbonY8q3Dw2LgiSu9s1V76beTvMXYvEaE7ehnkm4pQyzD98rWJ5nj96sKs8pCPRa7D",
  "key20": "imjnjTowKBvM41UL42EAZrosMTvtzxpuPs25tfTzQ1jEUcsnJCXtcoZiEF8S2s4euo1XM4aNobFJ72fVxQENbXg",
  "key21": "3zn4hGQnGoRR2B7jhLkcb8eg8SX38Mnv5ZjmBNfUcrWAUcDXaRzN3KdE8m8hH8H61xCK2VgtWG1nMwQ374pHgRMa",
  "key22": "5aZ3ZXPypZT7ZuiYCuVpKZ46X97nZHzx7rrFSiUpkdMGxuoHjhQuYhQoa1frvBjtYUJyRs2kn2Hi95JaPUEDh9oZ",
  "key23": "4wFCU1ydjC2SPajDF1wcFjgmDET68Qv5xiHvRok9BCAXWSWjJnLoXoDwJD6zVa29Dnu2YcfcRtXCaEShYXpoupsm",
  "key24": "5jsTNvrKyyv2tGUQF9SaBSHdigmXYCm4E8FGPo62Ydy4vPDmUHeNvqBQYPt3FTxbssx74RBoA5AX3M6wtBrRCLmE",
  "key25": "3gqopfFrEhFisFsNnBF2RfZUQAedDPQwQeboSUP17SpNTWNPUPJMz6NDERyWwqAX3jAZdwDmQZjCcgzE9CDSpvvD",
  "key26": "iyKspd3dmEV796tCAKZ1VVMvGqYpZSpRYy16B1sVXV5J5ynjRwuiXb9Ceicj6k948ZNgt15LCWcKFXT4TXFqG26",
  "key27": "2zZ8ApdotN6TJpB5YYBnMj8Dygan7PYgb6sP3VjbhiZp8zYpS9HsXFd1i8VgQQBiKg9xAk6PDrR21peJDCmKCDtW",
  "key28": "4URqFYGxonu16MN7X3SX3nyjMgZbUGF8ASVAbLiDRbjhpGAwYkEKDdQEt62ukCihfXNTVmoTL9fBNS1xBKpZ21Uh",
  "key29": "5QXDJEU5DEQFzSXx5taZiUo79vDuUKVLiUxpQyuJhnSz5uT6pkPDmn21zSjbsUQyjAgtfbQjY1u7Wtf9un8T3Bvi",
  "key30": "4Y3sJMT5LCaxo5HifPEtX53KJ94XuC63vr9xCnJGtGwautNouym9svgguGinkA8FCNwTebca4aKhGtA5Z98LYxBH",
  "key31": "4imZCWLJ2k9Tyn7mqNhuMSViWtYs17wjaVCtb3Eh1CpnsMxMQu6rA4KB4JHLyLRHqUqzHc6Eow8ubZEaFK2hzGeS",
  "key32": "43h3n4ckh1QYu8i7cgzyxnZA7zrNEX5tHeRFkfbUie3xdpBMy7ynDy6GHGXExPxakS7SS4JtPsfStMUTKtyEfETX",
  "key33": "2jC9B5BCJDGjdkUQ3T36otyQhcxzjbe1EdWf5jkQ4gZWYV19j6pSD332pgT79B3sqHFSNeUBRSAgreHZvpkxwFvP",
  "key34": "2ZgEXj2dfBXjC4sYXGFFWifQcAWkwFTrAsdky2B4gpbMcvY89iSAqz6KRWZCZxHUP7ytkErUkEQtRBtqxojk1SDn",
  "key35": "3CG17GDgSFSbiVLwPVsMAP7UUS5JgKBhBRsH6z2mywSrUsFjFkTTpnEeKHwnG53ifmxd1us1Bfybf74XM29fudWB",
  "key36": "3WbJLQR6Y4voz91KV4fFwg63YB3ceEGD7RQdjZdbNvfSzj5UvSQvb1W7oZ9dAENxWf7dWBGsHdLaZpLnjbgNyeCe"
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
