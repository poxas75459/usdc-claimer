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
    "2zXeyiCvM8DwQUUSigqSVthjYkPntCWamyjfTMjuxbbbtidgEXpDPJhbyAxzQ4meLc5xC7QMctCpM3BCXPk5xWBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wezqdCkw717UMpCTmXxAyfa947cZ8GALX17Ec7o6dUx5ewbBFgbVr8aejGhNuphxv1ZjDs9yCWQ8GTeF96qqSMJ",
  "key1": "P2yAZgsToSXSDUWaMcT2kbZZaqbHP83f9EPjhx6L7AChtU3D4xA1srwQxvaEBgiBhzbNA97s9bTGNfg5tDrpfKc",
  "key2": "2QAhKdKfxiWFd3HVor6QXKaizsCFdAfuAWLWcfmt8iDfiiZwMJMQGWPNUr8bzCgAQCpmbxBnjoHeiJCaPo3r9qUa",
  "key3": "26pdtqHDv7LZzCMR3MetGBu3sVFQccKmjb9C22sAAHpyfZ4kU4vPnzp5Zm4Rq8sGQNqv4YVSzhT3zNYJiqYh3ikX",
  "key4": "cRVYbtbVKDWuhNEMaCA9V3zwr1pFDTYC9GQ12VRVuERmvLih1PkRMjUMYDPe4YULEcKqVwvrbarvBs6gscEubLb",
  "key5": "7cVKMfszSfvKzKJwMTo71B5dhsyhFdoFepAH5h2YJW1Mpy3iJjPmgEuZWV7h2zprK7WVedFePPDSkAueN2iKAS3",
  "key6": "5Buum69c2Gvqk9ryXSExoQkKD5q6wFrtUvdr8DBEPZYaNPN2UbskjxF27Gr6RSd4jLJHUKA6KfQFxF5A4z5oDpBS",
  "key7": "4wYwGH8ufH26Qr72w3St1bxJwRKXYYgCzzTyxbtsgM7p3j5kmoBZe4MHwhrfyASTGEaJqAd4e7g8rvLfn8ujhE6C",
  "key8": "3jjkqnDQknpkTdgaQ9pL1B9jZbkVBhZVNbiNXX971JoqQbSNGPDD1gT5xaj753RUmEAZkFf6BiHUpps9rTDSRM4T",
  "key9": "632jNqk21TAxcrZY2mrYXEZipfaHU7YCeqvWGSFYqu6g1XHzUUVfXa4yc8AdyKm6biwXjmfKU9msqv7e87uvqT31",
  "key10": "618V7b87BqCxYzyKsFeL9oSxNokXfwE46ZyLqTEKUQKngzzCs31c4mVZXrkmGDCTzR8xvvgbWrueim9EHiCrbbC8",
  "key11": "2dYzcM5XE22jQYM7DVHDhJzAbfv89DEh6kEZZuH8A6KSAV7gm4NPGCyBxR1MxwJUuEYkhhaS3Yi1GgKCkuvcHHXV",
  "key12": "MnWHupz1vQxdoKvD5KY7wexUZJWqxFp7TZCqYgixgb7wEQA61ygSk8hP7MCTGewcsa9Wt78KH3dX3BfsnyZbbr6",
  "key13": "2vDx2RzRWjzTJ5kNtjf3bQVrVMsLd62shKscgsjT3tPyDSUPauHGemc3mDaLjfd2sfhngj8w4H6mFY1WE6a9GA1N",
  "key14": "JyEyhug7pJKcwDpbbaBiuoAfeqWtFH3ppo2gre33SrNFWhB8dLami1nT8Ennpx4FLJmkqpYHu6ZUXAQoA65Sx5v",
  "key15": "3qR9tiZrngeKxbsZDKZP2BPiQ2YYbAQ8j7rvYbxATJ3XB1bqHLpbQMTYX4dMejh2pdwKo5vBn1PCRefQG7N84MwA",
  "key16": "2Bcw9ZzBqoJbwwWPVsR4xeznTEw8BU3i8FmMkxuTscBs4FHHGNopiQFvVs4zExuW1kQQqfvrDpNvXmrzure37to3",
  "key17": "5vgDxqZhafLMX3fZGuJiSprctoinvnRPqNhqSo6CwEdJ485sviLXB3wXgjfaPtvUi9rc8EyebKnBYZBHJ3oJTcqa",
  "key18": "2Zv59K1si1KK6yr95JTdEfJJ78CQnFbeatX4r21BeLYesQaDrzTxnrCv3TaF7uJ7Z3H62aKKGuvXZK2rCNaQkup2",
  "key19": "BNZsF9F5CFMkFvEFzLU37XKwP9YW7mtGhtHXroWEntcFKxWoaFQ4DP7yYMTUngiSXqTUztVxYK37gUBi4pyeF4h",
  "key20": "5oVEfAWvR8uchtD6t9uVYubgbn7QFoUYQBFU3A4STSooL3bv4CiyJsMMLVvbcFeBke4XXiEA8jhLu2oY2n2pwiwu",
  "key21": "3ZhtXgf3j2JdCFQkRyPeU5FBQWojr8PyRvhDsPQ1nVLQdfDQCcCP7WWntkNZ23LsT2wq1L7MhK8zTofkziFBzoYU",
  "key22": "zQ5vK71NaKTseo2jennJRzQ4pZ52fedw3vb4BB2NGTL62n2MnYkik4RkGtWhQKxP9qByLaS6VjZD5UM5ycmkwDY",
  "key23": "5hZmhoMK7QFFbfKcghZgBWD7jmRb6mcoevrcSZ99TJR2LeBEnFx8FHantJx7atmMLVxUtEwD8ijUujyN43kpZqYD",
  "key24": "2kHGMf2DP8QeWoGtSnJypptjsveRGXJzsrw7ME9gGhSejx8UJf7jEW7daEufy1c92X6aMJbA6p3jS8G4yirm9vaM",
  "key25": "3gMU2pq4CcXQLDoLS1DV2xrZHDzfERGVJcVD2tJyz92DSKse9J4U4hb38P9VjHhPhQUR2bn66dgNJwZsDPS6xfKH",
  "key26": "4Yxh7v66m1eJhgemyJUckPf2xriHNC7wnNqHcA3GJhPgdhWGDLzY4S7s4XhZ85XXv6jn3R3AyygSytbVTKVo5aP6",
  "key27": "3Z6Gak94cAV3bQFDk7R2MYvdATfgRUdFCp16Qxt4GszLmtfH7PS84y24x3zdC9XEnY2gGsfCaK1FJwhXgDJXGD3u",
  "key28": "JyECCRFKZRT7tQLis6e66aCXJSqe4feTH2p9K5uv5TVpbqr5fFfvDyq9nRGHqwtaReev5c34sJXH6zu9Nw21ev9",
  "key29": "3sUFUs7bNkiNuS8pxTMNFrwL2T88ypE8HeBUTkRAuopK15kgBHjEn21ADtzJkpkRVu6bvXsMtCKiDbCGfDEJkgc5",
  "key30": "27q1s7wskftc3AD72YjPJxhjbnqvMMpcZp2uoMmoLhWSyfeFvWEciRhJjAKfpnhLWgS1zEVkMZJtXkUGi7d9Rras",
  "key31": "4tDiS6hcSm7bKsAnupkKKz4z694FkFdFMWFmBGqBkmPKVBGtBQVCEeGqfryjSnEnonuaFBCCkvBGVHdCQizQtjsy",
  "key32": "9goQYYDHy1pjsPGwsHiYdtP6bSFFRL3HAZRQCBgqLJgX9emniQfesLeikFN2LjbTEuqdHwoKWQurfu9nFYaS9Bb",
  "key33": "3oMd77BR6M7cTYTxTCMJar9hWUza83WrQxXoiXEXCxyLoMo1nxHYQDER3PYCoTNGG4uXRnUqRtCuwfDwx8SVc3jB",
  "key34": "3KowoyvUUdvgZTQUGVLeu3JsvvB4tqRBYCd81Av4r7x9F9mpSfXBjytMraCz3jZiDLsEF4cZNQbqS19ApTpjpCaQ",
  "key35": "4pWYd4tPuvf2su4aXzocfKbTqkUxv1nSUd2H6we9SmCk9CDDkn5Rcxi2Gt75eV4K2tsuD6oETpR6wwyyr9HbBeuZ",
  "key36": "2HfBzuY6AdAToHUGu7R4k86gtUbfV5F8xGSFQPZP1kni5CtgWv46K3iieJnJp5md2mF7XHLB61HDjEQvD7cjBzH5",
  "key37": "2Pw4vZj9BNwEEr4TQUdLvWRf2ZjsbfcSbC23QUWiLBcRedtEWrcm5mJuQwkJ8JZSmhyZunQzMECfQUHsaCqABrNy",
  "key38": "3q98veRu99WbCy32Gbna6tQDYRe4rMts27ogBMeTDLRLmbHxUxME3nQa9VaHi6Ahcbd8U2A39XMhwLf6rwnqezzm",
  "key39": "2bf3NyQBXDLoyM7qmgxowPs9UFsfZq38KaTnnSteb9TJnN58haBiaNcyGkkNP5BWhCATjNRFTEXZQeDbvuZwYHcZ",
  "key40": "4TvBB2VW4qwjnnU1SeFXY9EMp5v3fciw9fM5R44NfQwEE4D1wNhgYAhTHhdjeJdZRqLCc5Qemsg9EG4Ru116k2UU",
  "key41": "6UkjcLN1sty7jV9ZJ1MZcKMqDi3cVCTobck8VfaoEVpHGWbyZ1LGarsu3xp1emq6JStxst7BEKjggBdCHbbLsyB",
  "key42": "3Jh2DrsjN96Dj3fHQpazgi3aYqBLsVhZ3EpD3anLHAnwUdE9Vj9RAMYraFWH85nfqNrSCTuDH2HpeZNJBUo7M2LY",
  "key43": "5y5kjPdDRYTivuMsCfrWzZHksgBfckw6mqmHHpRtAWKFcx8h3TtEuGk7T9eFv1B4iCNrboGTo6adwkK8K2bDbVWt",
  "key44": "37NW4WrQtq6ptiGd33Zwhz1YJH8LJmMLbKiLrTDBGkjj5qWJ9zJ272B3ubVh48b8AZ5NQM8m5etByemza1DkrFxz"
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
