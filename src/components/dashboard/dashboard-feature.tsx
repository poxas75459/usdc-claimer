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
    "sACmc2SJb1Yoxm6qJqXZiRUKuVDk84uMddJTf3SwZWyRqtDKZpKQ6FaTE5cvsL46qqVaeJXKzXQGHdgkXu2rBaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HABp4M6zdx438N9nBFswG9UkqWbiHGM8rfaCix72poT6zF5bxKP1Ea7BJfKKHmUc5xes7VGn9yoBR5D3QaR9ZKy",
  "key1": "2LiUtQkinSu5CK452EWwt1Ssd6un9j8E3inCGrgpCoe17zLxYrkb3Vow7UbjLWdz2hFHyn2SH44Hhna3JYPmESQc",
  "key2": "34BLCEMT9KUTuFLnPpVBmTL8zjhT3hFPzdKzJP4y7NchfA9WM3Fy4zYiwmYj7R8RjDguPQcywfTERZtECRs7vt6u",
  "key3": "59kpK4JKuN8oixmbKuBF42Z25C5661Wvvd5v9CdHWcWUkXU91osVj278sQ9wixyKLUUrn85nmmvwUu1zuHrC2kFq",
  "key4": "rKJnWJrjN7qZN7kKjV1aMpUicTc12rd98abUsQuFLz1e6PANTTS8s82F6pANqZV8kM1eSHDZo2hX7Vd7uVEJx7t",
  "key5": "3BMYCZfDhcMNCQ8vjeHR55oaKWunwTUk53kX4yULq1Ve2muBtPhuLTJyLaEN6wWfULTwkY3BjhMrkrSkhk6KLUPw",
  "key6": "5w7Ei6qYJqxLZbxLpGaf1w8SXth3vgMKqq65FU5MgM6GwALDHJetAKA8oPKFfhZmamnxPb8KJ3kVcMi28aWHrYx7",
  "key7": "sTQvqQH1zJZr8vkVFNK4qr9VrS76TArNqYxVmPJtz1TgHfKN2GYZ8NSYyyqwEUdrp5QCbL2r94vNtpGbDyMNjhM",
  "key8": "4PrfczaWPAu3ucBWW72w4145AxMUtdfsPiJd3derqrY8TYErPG1wvup3L6XvkCxuLfvEAjBMgu1cKDe5sFVzXa3b",
  "key9": "32Lxph3ju7qR9Lk2d8Y14ZZ9oTkQDEE4x3TBwC3XuooccU2sWvY2VfuAf1FmUVk5pHJeA8DSBrXK3S8B7LbDYCzg",
  "key10": "4LbmYw593phhEdfUcYb22REaugrC4VN3ni9aNWBKNsmZNPJiTtyfwZ6CNTcPbzN1vbCNMGMkewZvrBjXW2YmnZyJ",
  "key11": "2FnMYZdT8QcUH1HFsaFpMMx8eMv6QDnuM2ghpCNP7qcpyUGK8YnCfyGcCMwtitX25dSXf5sbtvxxBxuoh2Te8pqA",
  "key12": "3RLfMAjPYu4vdLGXb4B4TyDrkRbf2XyUiUGfEUEmktRaoSB33tLTGmBFQ1MEAr2YMG5RB68NVHR42wzEWNWgZLar",
  "key13": "4ARN13mDkhcHiekg3AkBs5XrMnxEttMkBHCibDr2yF2r8yCGnJbn9uNSqBFsFvpnXFtmt9vNfzbhhBWCwLqCNQCc",
  "key14": "3uB4jSuafXRVkuTui3QDoboRqQuGCguegnxwung1Dqvtjyv2H5uySxTiChdvymrZLofHLpWyqkFBPapUcWp9s1Fa",
  "key15": "3XhKNCyXbczXBsSVBhN6hekdx14KYnBkJuxya5YocNZc5s1q95McuzdwhJbVPskP3f4eKxemKAwEYJLNuxGpoAeR",
  "key16": "4AWr8oWbVVBmFe1y5DCxeqzjmYrgbcnT23CNp18w2jka1De2sH3V9d6ybFDRDHnr8mk8P8kuX121694ZLR1VJfeH",
  "key17": "2bPD1PXWgjZpuoxSF1vsfR1SKY297PfdEivPCuUb1t53TbYpGfE9r3WTNKcHhSxaEoL4Hu7PhwmqW1aJT9MxKja2",
  "key18": "28raQ4MqndEYTsTyuF3WoktdycaV3qnM3LiNjpqZg2YbPP7ZeYNB2VEJkvXkkLncTA9DbbaGChcmxa9jTwMeargz",
  "key19": "2FwN9RGsaiS81sjGQfWNAY6ywyr1q5T4HtMzQV7MQVi9azERiYkyqcZJyvjUqNVhQMLLFoo94uqRPScKGAdoM2Le",
  "key20": "538HwYkSb3RjHqSLDfPN6LCPmiMtQz2PQLvTuNpcDtG8vhifizoLUfxc4QtJ49iMNDyZrEUNnG35bedM4HLuree9",
  "key21": "5D2pyk7aWmg1LxFwLKjjwhowJcmCMnNbo5rSrKpQfwE6dJAsHmG7kHfVFzkCf46W1Yi3iHqjceffLCqSGqT22iik",
  "key22": "49YUDnLQWLoXKoeGoa5fcqPCT5wrMJQdVQK4Crtfg6V1BCBG7eueMzohcjZ8Ju9WQxJ9JSsMRdh9oWtTLeKkHfBi",
  "key23": "36ZwRjFs2RPCdwj7n7Lq62D7poL5BZFSAvDhEpVpSXGC4ySnvdBw2izJyUVu2NteNmuLcxy3vfN3E1HQ5sCLo8o4",
  "key24": "38RBRd8XDLhBKt8TNSY3j42inrG3efLEXsSoNRfQfTrH9JYjLoJABdhdJTwL6fypns4c3k9RZRjEbUeX88jREfYB",
  "key25": "5kuP4kiqn5QFCvds14g9zKoXbDZX1KPBZBFa9sqdaBeKvovyGYhraCCWJzUQRc3yp9rA3NEYcJwnevYe5JjePReL",
  "key26": "kdixKhxb4mW4qa4Y8tZ5wVAGpSBmUqYHNFLwzvuEbfQ5hfFM2E29Cjnk3swPfxZ4G1c54idh9TetAV78fSiS8uN",
  "key27": "53181rWVcxonznGuhUXafFgeme9eMAQWv5RabjAGLKsPLLvpjF65cCsY9QzXFHYh6ebfhp2PkxYiekawk1apzLYw",
  "key28": "3Ddh9eJCq9ZAoyRiVwJ9dBaWGbuAnLNCDkrVth6m3azr1f4XLENGgD5jKmTJ5BWZn4msvehtqPXz7XFT2KgjENWj",
  "key29": "28MdVB5MCL9m1fU2hAqhatKxgKo9sx341fpCzFugDSgt1jptpAzPH7GRvSj7pzuPTcMzJQXcHfKQ9qw3oPEcoUC8",
  "key30": "3EqNM9dmNoTVXPrnknx3RcFYsB1PsXhkNgEibMBYWEKrtQMpjNNJ47GerrRwQjQDbrLVVgmEdSN6HhTCHZHajvtW",
  "key31": "2qNLuCRT1TNJKJQC7m4baZDr5NxbwUBEeAqH1iBdAm9Q39A3qpYhN43YPph4kUJ5dcNM8QxLpgwjnngZNH6nvKtZ",
  "key32": "5Ni7W6Guq6CWFZUdCjBqyxQ89cBenVDhvhXgiPYDWaBSBQJ4MSdXqmTFRwsGQWdzFuBJb6tBUiP7BL33JjV1uZxc",
  "key33": "fmXym2AiTc65veiYmRjpB4udMKyHeGbgm8p6Sce4bDLS94wHRZSbKEaZEme5JxgdNGFmbL3hpn2U1oqNeKEZSvG",
  "key34": "MyF38an8aDv6PpWaqZyTUh95q9hDCjWgm1yGNmzwzKftEf919RdovJiefUKMbSCs7jf7LeXqhLbggETnL1maLkW",
  "key35": "53wxrdmhUpYbzqJVxdq76AQ2KFp68L9xXjvXM3DSSiRBvByFAUztZThUxJiYNCSJEdNSoagKfdWj8NVPFJpzMMEk"
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
