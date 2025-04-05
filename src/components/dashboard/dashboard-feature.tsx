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
    "3z6LqU8i6uoefwHcFxjv2R9FGAabqynDQtoHNdYaNyuHnThtA3oyqN4WdmV2FXDDa1kJvVmgbd3f5meZRR5bASEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CEn7qv6NoT177kQcdunbSh6R2aqTxse78ZaGjhpzdkNv1ASBggBmRCzLVHMKoSG666wuBr5XjBTWqwR9oBggu9M",
  "key1": "4ZRzVHMhmGa7F5TYwuz4SijSd66BUr3FfvNxwDidHDniyFyDLsmo2k6cd95BDFD5sTWcGUrpgp6PbT8cGfABhYzp",
  "key2": "46tDELGvPFjZkFyxS6guSoDv9j878BuWbFS4QL9aS8NjMt1AiRrXsQ7Rttq3oFsApWtj58LvF4GYkHAb1t84NepX",
  "key3": "GXS4ADVodYewjSAyFVRpRekq6uu4PyGMSnsKSGBVrP5xSi2Pj7vVgdCgBtTFAoHNgp1eyzN7ZwHyKMcWyDgkKgm",
  "key4": "xayb1FkWisza8QpE6GuMxrosnpRHen36x3yBXjKJkUwc4kGJp7cWg9igNKqRga5jExCB8KAt4zmF8sC6xLchVeT",
  "key5": "SzA9VCvWFe7y7qedVCaFJaooemarocr18PtqfPZBDknDQ2F8gd6evnNyXUgDrkifq7Niv4ViDVxuuift2V317bf",
  "key6": "5Ya5U9ZZXZWPwHfaDSmdUSUubYV5PkvRtv1hd7AUk4TEWjUuDzyL2MMwYEvQb6cw29iGxfkJTFz2NTWA1Bo2ZUHu",
  "key7": "5yZpr59LN2DhtnP6xdyDC488uKjTJgA1TsNTsc8823uu2ihLJfKE9L9hmq2WHPVnP5rpUhjwLqVqgQAcdpkUuo2T",
  "key8": "xzZ44PbsMREaXGjgW4en9ncgbz72gcGpC5gVmrfpUSxFWgzsuUAnJadwQkrVeg2frYzSefGFNgGBfAwmhZtPQ3x",
  "key9": "3chk5XhEoLYKgySDKCZ9Ju5xXjLj39NGdUHPf31wRPFJijxhB2zuy7Qi6mNrFkY8f3EkHYb5zV834JM2TUwRyw5w",
  "key10": "61d4Y5xbhDrKovEnQJ5SREwYrBTE8uQprqVsd58dyoahr4BR5RzZJtkcoLTCTt8xw5jg2DsmbhdQCDYtULftEaWG",
  "key11": "46XCv3m5E4Dri9enidmpHyjgJH5mhZV1P1ckLeXCyoVB5KWfSBtZmYWxqgErsj6pkfzymoE8CqitUKjvSf8pMZTd",
  "key12": "3d4vrDHReP4T5KGsYth7yphW42J4VTAZKnSxY1xn74vE4AwDxjkWyxrjNRjbXh1hGcXrwqXuUqm6n1JpbThucTmQ",
  "key13": "5z8E2qBNN1V6bRsExTuiW5WjNEivWa9BG2tGiyEaHAst474Sqx9vWjERa2p8uhUoHKsSWjrsdzw4PGd1FaJXFe7w",
  "key14": "28EeF7r6YEeHYwWaWGXWj2qAbarxDrXtMh34wynMw7vGgCfejXK6KLPPmepaGafTihxJFb3u4i3aL1J5ucsHbfCN",
  "key15": "w58PpiHeG1PBicTWgHvQTKCk4hVs2jrrUw3HdMbLkVU7FT4HG9B8uCfCFBNyNebzP1PLUGoBfEWY8o7c93G1rp8",
  "key16": "5ycYheBTCGZFcgSuK1xBrB86sWazZcZWFcunQ4V6gxC1JwWGVX2N3qDH1oBjA6CKRnywrZ8WmBfbNdmW7ys9tXSM",
  "key17": "i2UxCJq39i6uezSGvNCBi9qQFXfXmzhjjzwAsBJpTUrZ98RFrMaD24W4t2LEYhHr2Rkii8HMzdHJqJSKurAhKjo",
  "key18": "4fsib2UHgsjX4bW4YBYzZSdW9494ypvADrfyVTBWyEYisZYgMjRmgtzZ3rR3sN3wUxBvFmebeYs37vh7vjTBCHjm",
  "key19": "3Jmx2QThGCu6ivytUC4UixnB5dXMXTqatNVDxywBfP7NzjdJDo37JAjzyQTDTeisVCYPE7sdXBLt9quuxo1kTkik",
  "key20": "vWWgqjWjyNHzxxyqzJgCdB29Ndxmvq9FwTjsmtKzB1MgPJHYEAbzPZRewd9X1v9t5osGXeuAhFNNqPnhH5XSSEq",
  "key21": "KdfTo5qnaGtoWsRPPRENDBDjFKAzrSe41nJC8BV238WPQdaXDqR7PRHmVNFqeD7P4zuHst4Lc68B8munwjBaQMB",
  "key22": "36yK4RcqwvfsQCtbSsh6JkpJzhoyvRWUVZPAN8P19TQQjRzRoR9yYH3aoALY3zr3M9HFg8VR8gNwQcv6ASrvEydD",
  "key23": "2EPukQM6DboQRAkWbezGuwdsNFYSdvaurr5q5FyzSjRxvLLtdjjuhza7atczYnbYfj6ZEbuiA3f6voj91i8i9yQr",
  "key24": "295h81pjFdXnb7SmaZM4emyhirdGJ8c5zhtAmDRp2cDim6QN23xcpLdtzXDcEFdsdX1nUErXQkuUQxABa3n4ZRx3",
  "key25": "5BaXP1UdNgtUifCseEtL1mtpDToME5H1zLe7WhwtCh5LZNexCK3NcjMYhh11vks7J26dw4KgZiajPAUkBNj2yvei",
  "key26": "U7hq91nptTjzfuMHrayPf8VgXWbKCH1xkfV1MvCaFCK4ZoLn1uiQ6DhEDe9MnCn6TADrpDH3ZFB8sK2xji1v2Q2",
  "key27": "2RR9oRoZP3mt4QBWe9tJcE8P1PtbfXJZJMn6qPi83vUpx8mJzuUsF1UVHoAdEZyCjW8fMEADpk3KpsJkwCRUuCta",
  "key28": "7QVeXLw9zZTjYCa2vfkUwtjMKHcMQhBtM8uTqvQbSNxpCNcWKhrY4UMkdHr43kdjzXyuCn9UJCAeNXzeriq1Xxz",
  "key29": "43vzSi2TqkbNGdsyTvVXJ9yckGh3DNjSRKkkvcoTw1ZaYodq8UFheovAiBdt3wMLx76aURvPcZoyLhdgCfSGJGHe",
  "key30": "2dUYruH6zjHiW4nq3qqbvmTAGFFiXKhsjT22Lj5QrWopZNvUNXUMQa9ZgAmnZQWoyU4LsXmdLLGfc4wSteYU4mtW",
  "key31": "4pBpJoSstWkBBbF37YoAcriksDtcGDE6EW8mJmA1FQjzgqyV6uFavrRocbk6cJDJ93FqUWydhEAT6rcB8JcbWB5K",
  "key32": "28iaum9uBGjG3M2qd2aSh4f3nenyNwkawLVHhs61AusuH71zj5WCTdydBwSnzf7ThjM3vWWMVtFaZFYC3EsZuzgz"
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
