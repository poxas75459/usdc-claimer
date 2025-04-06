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
    "3caFiEGcMsC557xQRA5p8Fv2PMjwLhXtDdSTP7dWqjS289qi1K8jbevxB5JhM93MPVu3fHgFuRhneNkGVvDqsiVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hrTmHJZc6qwFqRzps9J62de1RGbyRtRNVv2JQomwZwFR3zxTGTLBG8mRg5Pr75CVc41XmqLqW5TiFZt4DNB9qhC",
  "key1": "4FAKu7bD7byCzUJh5Utb15JFDtHxa5w5are9ww2JmaAu8HcEYuwDBKSSehA9XEGk7rwHPKBTji4h5v7P64AQBZPX",
  "key2": "3Ei2up1SArfJ4BX18UEWwMcHchJgY792hYgxeDY3Se3A4pFfVUKXqYNZekADJTS29A6jZYneawpFsxZn3fLcV39y",
  "key3": "5vmkiTVz1777zYJjyFDPE2RTQdd2S4fGnESdVeUXTGKiYFuM2aVVpQuseX5MGbkxTKYKppPon3tdY1ZgFvPLLvj5",
  "key4": "5E8Xthx1w3j9B1pBmTkhDuGwtaNpzBmuehaqPyeR2XQq8eZoeLGvL5BDrKWFK2AAYGwzyfMBnQMMcrcXY3wB7WQW",
  "key5": "2CBCKvjZ2m7A9hBJB2UJiaceLyHHjPTTsy7iM4wjn7ADhFyY4cyKw6ds3JMqD6fgWrRkjhgFiFgD1VpiRwvvnxnh",
  "key6": "64bsnctAjFpEAANwduoNFwgQSV55UGSqzwR94rywjH4NogbXzHrq13tXia6WCsidW6Q3wxWBVgt3o2dKVESZxzJP",
  "key7": "37UiKi93jSH9Kk9SFQsyfMCRy3133p2NP7jzCWuEmJMFUzu8CHPugxRWrFF2Eu3nCiCLr8XUbTpWXmzcCKw7E6n8",
  "key8": "4BsY9oHCJSKrpv1oNed1cZven8YRuNTPUaXR3KRjjuQAHkmDQJD7FcGxT5xBcuEYYyRQxXaRCevbAa2pVc1mFYc7",
  "key9": "5kB94m9fgrFvWt7Ed8isHAVvPxwJzSFVMGA4THrBfRWyZPQHUikTsjNwbwN4V4E7SRH5cH4Jg7AeKGdu3NcGMixW",
  "key10": "AsuJsAcNVwZWAud8REvHS7WAaS3a97R2xBrDP5q38SkYfdEwVBEB3DGnJBnmiDHd7TCzpDWQ7S7Z4Y97TZsnWDe",
  "key11": "2pkMck9boLQr1btVnqHfxSGmyeaNnSZ5HssAXb9c873d39EJhjsLmv3Y8r74ZzZkJoieKi2H7uE9EfZDp9kReP9G",
  "key12": "4EmwnQD9fKHvjdVHP3w2g3Sn5pwBNbrHEe2Pj9K88Qnov7sxbcT3zNQJm2jY2QGMaQM2d94hSo2rr7XT7JteUU4P",
  "key13": "2q268uMdLVUsKa569W1tWAdBvGgSSpC13qUAppj1Ygcoh4h4sL2Xtm78Hv2iboHgn4G65wkXuUEXBJRTgFxwh7GK",
  "key14": "2TMQwmDnYnQ8xM3zzPkbijZTB5MRSv3dfFDnbRWZSSPeamwme7k1L522x53p9br2N2mp2FQ8a2KWiCtXx4oYoDZF",
  "key15": "5tZJmr1KkRrHsyPzbKUmW7ELfdePbvJB8ASEbbxyPjHMmap67ftgLr2kDsZt1C6giyHXD9Sk7KFFu6GNkX3rDSkk",
  "key16": "4trcGwwZyhVC4W9TV6jmURcqvY8rkNDxjwmGy7KNNRAGwkwsxahE9ZJgR1DqP5MoJjzeZWXBngB47AJJTJv1wp3f",
  "key17": "vdsspgiXr4krF5tuM9vyXKRjdXvzy6emjV254UFKECVERVxErYtGQsBDLvHf56JPt2kxoC4HJktdQF7HqQteo3i",
  "key18": "2miDG3Ty8BaarAhsCQtDLSAkWD1km2FRsEtXzCTT6pjsnCEUJLmBAoaQiTr9C6JQJzdCPSAtsbqabXdtTbFDfDPy",
  "key19": "4hJ9kWz5CxGfpPeXGsehDMg71WwRycn3Hnufjpxafxtg6VDZEA3KZptjvxvmiRtrQJ6JRaev9aYfoPbyRziX6o6K",
  "key20": "5KCYXABC57ubkdsE2YrHiq9KMriyPnAbWkWPFkeE3B9SxbLkrAM92hvNRt9DNkeDzcXHgTZ7BQ1qiFuXRDZYoq7f",
  "key21": "2pwitGBNSshqCdavT34adttKAMLvZqMMBLiRj7i3DTdQrVhipEnm3fkhPMhZJbfG7WiAJ3D7rnr2Tvc1JT4oZCQx",
  "key22": "saFRgiS5JQqTXTkmM4B84TNX3HZVS6qY31SBNUG18FGzujZvaxbapgP3vvvx7G6pU2ec4n9VKmDQUKYhU1dL9Yo",
  "key23": "5qVcS1oee9a8ZLH6YGmoB23ZzGyKxCKsRmrbik3yYKi5rGGG9WayZNzvLKLKpqh5fRK4sXdPAUDt17P63ERu85f",
  "key24": "4BsqXbK1mMdWkftheUEjAsESuu91zveGvoYAfb6fpkuq6fs38MMpR1RqwwAkGbjGGj7A9APWkAwiHbU45c76oa87",
  "key25": "2uMy6pe6zSk84MQLrHCVLXyuup7voDP2iYCJiZopGZTQQesLTSkQVprrx2QofHhbermnxpLMwgSxWuQNGwHAyv8D",
  "key26": "5R8dJtXsxpjbDQrN32icU9X9CEsnGpD18GZSBTyfJdfgtfAYcCHQUaq8ogQ4WksWv3Au5rCwBEfyDRqBMmyERWEj",
  "key27": "ZiYh8g8nPCLTFibhaEHuffwYfaT8JtYh21oQSty79q2DyA8JkSkrM7s8DEXdaKxDqxdKMyYFiUdX5itSadb4VAM",
  "key28": "cRMmfNVi8Nzuxpba5VtjyEKYr9MuXD7zwNmSuRXZ19UZXoXj6WKAQvePzfaJUq1vLVhEruBMExHJrnqPFeQSXF9",
  "key29": "2qyyRasN48SZWs32tLYrM9CxeYQ3sGVCD88zck5QorWVZVNAzpDR2twMonAEjCF8eZF79Ua9a27VZZGhpy2MsVyv",
  "key30": "31QDBiK3FQm6i4neRqG1wgDy6Pg42cV69VP4bCX87MTbuPnFNNCH1eui35rHfHzm3SD5343yNkvQH4Fzp5ejyaQk",
  "key31": "3q5zoDHecRvN2B83n2Gqioq91o2SkgJn3EXqV2arDjQ8qEZrYVShg5W97RacPgD3WWCMub9K3zoXRGyp16cLDpAe",
  "key32": "5EjpKbm5hx9YBdEGGct32W3ZXLxmE8haF4vBEGYp5sDBWqQMpX7dYk7T9tj8ugssSdNJMUSpYWSYuVqebfr9R3cU",
  "key33": "LqE5h9MPr58gvyQh3qrNSeCaehp97P7XLpGA6Ax5T2uAJJ38Jf4Fr8o8Q8KioBU2MzJAzWMwZwzUo16CbCWHjtA"
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
