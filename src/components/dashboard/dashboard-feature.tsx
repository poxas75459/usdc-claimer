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
    "4uvsc87S1yuMiB32Z2dUbCTZeRAsGHdQ5JHLdzKqDBPWcB7kRnhiUHALTNygLreR68toXVTKGatz3AtiRfzn4M8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FrQ2GNyuj3BhBMZSYHve9VTX1CTeKkZW6YMkC9R59dtYkWyujxb2xLC67cFVf92ixCxiVFo7namUpHGiobTWztb",
  "key1": "44ErQikDPY7qygZ9WHhpYdrx17aEXBVJoqVjvrGLabD5tu9rgz9wiVe1jxob63FET7ChVaUAS5XtGBpKnnriCErN",
  "key2": "3HvpzYGmsWZqtQx3hW1YqKiDG8j85PnL72TC8AQKkauYnirtE3Yq6FN1jkCdv28CTAexzyuwriKE58XAc9fBTCNB",
  "key3": "2QFE17ED39We1SBrUFDgyBWj1PGnBsSkjJFwV4iXsQ1jaBptLZGvyALVwGh6cjSb44FXR2VGTVgP16nBXCnxkKTs",
  "key4": "5aiSGeZBwkaoxHzUrXBK4FrQ1ck66HR8e4dP6MW5C3JQr836SH8bRwQp63zmvTe4s8127m1PpMmu7jwMiUXj9eXT",
  "key5": "4UgGCPnXVq9vfqzhCKfqZF5CWtKNs3Kjk29G17WDMkxpY9Rw8Y9PxpLh3iDQvwhU1aBLwEHjwuRLx3bv6Bq8GM4k",
  "key6": "2HX9q7nbtyuA8wKgFyQf9rTHrxezXnD2atp6czkNmZhHw14xNLCdy9CNA3rhcJqe5QDfU5gPRL92rCzD4tVf6PrW",
  "key7": "3py47XvB8yFXikCMc1gyFeUjs5n1zrziaaLvirS9Q2jeqCbWYn3mYMVh5K7dqdx8jyC7JU5oatf95Wi6qZEp3tTX",
  "key8": "5STCNFa3vRFJSW2DBNB8s2cxR9gQhjF5e5LTLpMac5YQ8v46jUVQdvVzeirYTTJ2dQWhhS7NXFD6LYDmEVcumPVD",
  "key9": "YVr7Gxvbxcs9e9VH1W4wCWAR6Soysw3waoChsefw6XwjuERSrtTMxeDtGGs1hntis4XuYVcDtMetLSY2pfaEMHk",
  "key10": "29TnaqQJnvGe2Ez5QAnw1W32DGKSqmTs8ZFBRqFspENgbmFt5j4dFENTvzy5ZBiw7ABEJzDbGPs7NCcg6e11nukR",
  "key11": "3fFM6Cm4xsUEt6CEkeWZV7UZbK8nX5WCsNcNaU1dssGifHJ56z1me2DCTbarNfHpvnBRTg1pL6H1QLNnAkU6Mryd",
  "key12": "vQx3cmP7Kgf6ZUmHHsn2CUbstYVL4wzobtpBQa4eWhh5bSkSBxzSp2LijNqEgFfTapm4eAX2g5Tf8MvSo1SgJeS",
  "key13": "5c6h9cpT2SiLNx83ctuQogbJJtyof5co2CLCKbuK76WZvpf3AcUiiPndnVgqskC3U8m2RB71uvMfiHW464iNemZv",
  "key14": "2QaToub1R7ETmcivzsdX7pjmHzMfURPSPbR7NoQ3yftkH5wn9bCqLFkUfj82bTUoZLQGDVo4U51UiUus2ByepNna",
  "key15": "454ZoVAYBrPPcvKiyUeLxEFbCBF7Y8LaxVL5EPiHaePsej9aHWUyXkpMPGjgFvz1RkPnTeGrfZ2kTRZEiNng67u3",
  "key16": "7K2ATMh66fWaonnpLAp1KgsipKSJVitQqqxAGDdBUgCLzQNbpvKhis45Zhbb8NcSrsqgoashMSuV1eZU3NtbLLA",
  "key17": "25Gq1e9nWzGQjJZH5Y1Dcn3pvpw9Cr9uro4GFLRHCJ8eULxw4ZbX6FPv4b6vqgVmD3ZeLXZAt7qak78WD3nWU4zY",
  "key18": "4ZB7uPctR1pkfqQ5L3gp5z1Xc7BHZ92Sz3Se3f7yZMjYoBhK4UwCeFrZW6Q2N7PPz4ra5sRaQkD8Q3Yecm8qDCZJ",
  "key19": "34v1XDmNAMAMrEKMaPgeAzyfwvEs52rF5pze8sB1zXdQsezw12e5sQKf2h797o7Qcf6usu5z7Rj2yi4Qd9iyrVW9",
  "key20": "3SM3AZ8Sy1dnMzbQ6MME8XEbzYwbVBXdJX7mTyiiHKRwfd5CvnEzEHBRw8ZhUSBdZsAiveQHuEkenx6Zz9dUJzPV",
  "key21": "3QLHV3jnNRsxsJt8DKhiPHJAniZmbUxMi9DXzHXThFrCTD3dninoqJm7iWphxF7FmukAwZ8SJeXxFmeLznRxSrFe",
  "key22": "4iecUty2uFnHyDhiuNxzn67vTNq3oDFk71qXBAkSqEjgMKXCsyv7Zw7A7hkNooPfXoLMdqL2WNTYjmwxS8gggf2V",
  "key23": "QRtuHe2NcCB6xjstmaqEGRn5V9YrXJ98haSaxryjyas1jPPX9hHW1vjb8oW94RmVwksQu1mKxpik1L5wek7h5fD",
  "key24": "5Xgd7uUY7bQwcHmmJmhwiT3fufqRj8mYpmBr5DrLwPPLmKbSfAQbzwuTcBdUK6VVQqjTneMpWYX7CWUzLP8rkwEZ",
  "key25": "2So3w5JKcjsd4CGvtuY5GLuRecrkaSqduT5k43fmu7xrGjm3v9wq5BssSyWP1WbghXp2Pb7Cb3fRHtP7W7CMkhwk"
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
