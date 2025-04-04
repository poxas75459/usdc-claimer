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
    "4Papu3mzCnLZ65F2h6NG3Kp3UhoymoWC32BekE4erB3jscSA2Jb9HSF68YJjoZsAxxhn2pmfqLJQLjYar9SCZBE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hy5rofCHXnnjxqKt3CwFEAdUFBwiHWZxFHo2zB8ceYPQFfezDn5qsHR5GstsFrevTv4E7AunDtxcrP4uJ8QnV3C",
  "key1": "27DpbB1utmLs8vZhETVLgC9aMwJnNWF5W2fM3P4Wnhc6XBo3kCAiq6mR2koixGij84NjK1WPWdnQUN6XHHZhe9UD",
  "key2": "PNJrE9uV5Vc15v3hL1seZWzATEz6BWR4CmWovEMoVEr3J6334wAXHnLNVH5GVcXdGpSnJub9Q5vYyaDd6YuKKAY",
  "key3": "BncY7P4Wp7wnX9keKykQJw3QEnz9gq6s5Pa1tkcBny76pu2ydjVkqYKsNVedmruKUGoR2sxnkHR8P2cdPN7et5f",
  "key4": "bgPJMk1AbXiiXycvAwsayh76hPvRXWQ1CSS5AvGW7Q3wx514y6vCgsy9oc9XhGeNcfmnBPoYj3mFgmx9Q5R5ixQ",
  "key5": "4ajB3rjKhnosG72cQs4ujmzjBRcrmDTjDjJFk5ZjNzskwSjAKmuUeBkF3x9UjGJYYwAnBhhWaXKfSFknwYFinxFp",
  "key6": "46BYaM4jqbRb6j91H14k2hJbZsYuYj4pBzPSkKHYQL7tzUfts2fzjKcMcPkTnLyYgegjYNBM6LnnH2Vb6SFu6z4B",
  "key7": "3XDhzUiTPoJQ64pq7Zk83fr9ByBQH4Ch3ncwGiRU1LTZxUioK9UAPTEpL7zxHSxXxsQDeZmcpCxRLvoZ47vtgPtD",
  "key8": "3UYvqzi9F6HdoF7W9Yf1TEJ1hfi7ytUWzYmA98mhDscQo9Jamn8qcLZMnZMg3RGzjg5r4D27zQiNTWabj2fkKBKR",
  "key9": "2JzNdJpxQgPsqWEmYDFASheoYszQXJx1XL8VYdiTpLuNDEv7yhVjcSLmRzvQepykVaqtQnscTXFqaJcdjJcpRYuF",
  "key10": "2ovSeqoFiE9H33NLrb6zukS33ssJ9pWCArFRuPQzQsxSVFpS71MTKPA5j2bLTNsEVmadsVxPg4LF8MRzKPjWyHH3",
  "key11": "4pXFM93kZRLrFdamPLCkrSW1e6erXv9pLpJDb2HSJsvjUWh4CdJa5QHafzyA2fkZdvENP2cRiD8deVE1xDCJG9Yw",
  "key12": "124yERRTCd5RiJApZrvwNvesJqtQcae36DL96mjodqo8JcedcL37dnpPwYJFDFpQeraxPvfWKXj1GJPaMhwapjLP",
  "key13": "2KohjLtfyPr5Q4JrA9X7GbjZP7CgUfQE27YWPHh1ixKHVnkPN2jxdzh1HDMRwB7XMC2n5QLC92mS7wjh9tMukat5",
  "key14": "2dFsQtTcXRH9F1fLgruh9SQX3Ef9F6G3JoRsjmedaHXoEybWjrEDBFzncKivPKr2UCsgyp84ofM5rnsydcGffcpE",
  "key15": "3ZmU9vAAnTddJ23UtQXvRhpqanZUhZ8ufSQcWbGrxewxnGc1yLVVdfa9Tbz7TWpR3ZKrJrh5JM4Khp4SFB5bWA5d",
  "key16": "29U1YF1rmjPh7vYAEP57i6eW4eSrFXfWpyiBYrMREhkz9v4wM7qA2bPSocMhuyAwg6FjPWxJdgUANKPBrwkzj4zF",
  "key17": "66K2FBcC7ned7yQMAoTaKvrrWrjpajaxFR2DkfwfpvGm9ZTNh7SBGjWevfrye2DTRL73N35nVop68Q2eaTifk9Mx",
  "key18": "2iggmT5C7GG3cDUcVxS18digmPUdiNdotP6LhdS1nu5EeoMmVGSDc1AuZmpuaTD2dsi9HZgsDk15XPgUMS9EWBZX",
  "key19": "4jf84vAESdZHPPp7Xm946ti74GcA6EkmzHMiHMbnzkwwpnZhVpfPebXXGMKWSUY12wR96j2HHhfF6Zys6fErC5vk",
  "key20": "teh9izPceQwDH7JiFfNGFnm7uhw8PmViSPCUVHZhUseu3KyT8XmH5H14QbtvWHYucG4D3kHhDit5pKrxyNssGiE",
  "key21": "3T9eSayDzK4fSu2HTZNcggH2QBMeHLtPi9gzo3NWmS288yhwtxmbiNVCLv8uQFiEuPYJZP9WiUgGRWGgL3z8EzVe",
  "key22": "dTKLvwuaiKPyuW4rwjPz6UhuaWroHoUeWhv4AYYEJVt9JK13piZyU2bETXaPyHbfNnqsUsCiqtrtjrJaSwuCA82",
  "key23": "vdbyFzrNa3C6uCkQ2k7jVzcL7di4yUggU69MmG7L1Q3UDbSn5esiQnnTx1fnQ7bk6693SPfxM5TVLkXLR4Znrem",
  "key24": "5vBujH9g7YqNxgkdWqxpYrU8z51tqQVuRi3G4eAkCuDipKHngiuEpJMiiSJ3F4Ta4qPGAJ721zHRtjzZj4VZxJxp",
  "key25": "3g333Nadruy9PpCPCMgpRLByBExmCY3Hi7zJCAgmCSqytPDu7zka8rNTtYZFuCNd5JisR8SH12GkjzDXZ8sJbzke",
  "key26": "5UiD8DsUmfejbPe9TyxasHscGsndWdNQGAw59m85mPX2dLvVWezECspCnZMu9WcLrqCmjdwdFjB82FnGs4ic25F1",
  "key27": "5ArEQMB1cZxxiWswQ7Ga13VXnBhcDTjBBMwqtu2feu9ZApTHmgiroUr98Uz89CGkCxm1LK76AKtn85zCweVn66gp",
  "key28": "45qp37oAGiLS2xFXzDfiPJqpsDVn9chWsKonCzhMA8q1Fvwdpzsj74VvtZuUn3na9qzauMVCn3iikJNnHayjRg1r",
  "key29": "53aDZ9sAY2AhoRVK79xbkPjfQedm4GJ935fxrYPPx3rYSTDtqCeDyEis7xJfSNyoJLtKAhZn1mr3XYFaqhfQgaMZ",
  "key30": "3dwmQRW6LyXrBRf6SMscGPXzAADfS9GpNbQ8Q51gDfbmU6qPprKE6xsXaLUz5db36RRhnr88UGNfSND2uunZNv3L",
  "key31": "G8GQH6XhHKG6QiTCZUTTxzhN43jXr2PjQ3huxGTKLw7kWXcK1sz6ZeBULEYB49fyN1PSHgFv4RmeRbnmb1JshHH",
  "key32": "3ibRr8zXm4Hte5zRy637Ry9HG7ZpHv5vQ2v4eTcXsd8yTNc9Guf3CELPGa7qKD373pEAPG7r27gXUTmJqbcWTcxW",
  "key33": "5jtX8cVjmtn85kXPm2THAMAZAZv2Z1sov697LSGjcKYuXWQnzF3NqzozVhozT9cNx7r1vpjCrjy1ykyaVXMmp5YP",
  "key34": "4eHBz5VCG1c3n3sMSSHcC4WudSyVQoiHkSbUZRRYTy5yCe621hVmzNUQSrfScYxppik2UAtxFzBAg9xVRxVRknPV",
  "key35": "4tZ4iMKxGWLWfbPwc8TeCHSzKVoP8nbhFh6S3o4YzwevvYtbTMPF8MWXV6U1oqwzrxo53dQKse1ENaCnkrzranHF",
  "key36": "4Tp2UeDdGuTVfyBUguAtdaFYwZrQg9WgeRZj7UMwTaHWX7XnS46Un31cre9gmAVnQVA2zm8GtjKovWbr6mBiojbh",
  "key37": "2abnYaDuLefcEAk6X45SCeifaKkb5E5tbQAvpgoaW1Dq53YgAhF53GXB7z2QeEoEddvPtwKjHKXqA6dyuzuJsWgU",
  "key38": "3jyFnJTiv7HzsjiaxfQhvXBzEG3s452NYLiCAd2uViQyTHwoS1vB7yYc2JUadZZoPFrqGpJ3XyBHh9YpBXzQPTsL",
  "key39": "2gey4PitfqPdvt8JHj9QRCSJPKRE6dfgpZZCb4XbGYDh9pqjgtQHCJkjtfDQ3rKMpDDa6hfjkXypQRdewMhrqwb6",
  "key40": "2BpHvNg48pGTmNrbkZdCe6ncX9xd2Z38Sy8sWdiLjaNqof1KpbaSRtM7F3ubJz2rkkZTqb6cu5vjZxiyAtMUF6u2"
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
