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
    "3h9cLsKTCizfduRys9oU3j7TAf3hDkRA8iEzHHkMMKisrGtiwg8P5emCFqfizk9fNHtoZdJUVJRbNpTyZfhmbSw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f4ZfowVL9cJKgwWZudTX9sQoubdLCewKqeXTvHQVSME1eUE9a4gmCbaTURKvEniTZiBixjohJw1AijjmnRAJ5pT",
  "key1": "5AsS7B6o7aC6PLkxq8jhWTTr5wxMsCQgCZptXmym2FT8xjqmcPesXgaPTCjc63sy9e6yNeucXq6Lc3SVa2zkK1jF",
  "key2": "nTTb1ozL35KUwY9JeCKvFydGe94cvriJvnvAix9NSbUvcUDvwhF7oeEqDF9tnkMJpnYQp1Bw5CuC5x51fUNuBGw",
  "key3": "3acYHVixqKs6FFW22TPfwmZp8waJy9grNTC1n5VnxzCFGCNxPNBPTKjkfzjoyEUg93fU3K54h9VRNXFJ5w8r9zEc",
  "key4": "4p9EchaMDSJBYithRgdjaiBFC1Fe6AnCHkNan2k7f32ocV1VLmF26ynR3vJwQ6QUoQWYeb5N7KGBGPe1Yo3wrDAC",
  "key5": "4fTUXtAQ2mXXE8KdqXzwUWAviVWeyerhZNis5ptLMnP6xwkeEoh9PLjwH7P1XSAi1gChxxfkqcVaMhXLXDLN4BHh",
  "key6": "43Mtta533dCnVfhTegUXwaDmNEwnJixK9YGQkHWVc4KbWPVGi4NoRgZqYzMskgw5wQExFCK5j2uQG77e2ebdcBaW",
  "key7": "2DsZe7Cz5Kh6WyQdx5PNwRSd8WwQ6svDfKDrwaRuK3VoTHWbku7VxbJZSW9u8jY3DPvNc6nARXbaewNPuJ1ac5gE",
  "key8": "5JnUZy3kgFCqCq97NLW3fRXrmT6y2to8PhEkwuDh86WT5X6TYVNXUqwFRqKrSAdt6dz4Q2CztxzyHNL3KGXrqUsN",
  "key9": "bCKUEPUaWjnEGy4TK7xKJHoA82K4aYSZ5Sngesk7niMrJXV2r7JRyfoiA6h77c4Q2Bn1TffRyU59aQa73rzbBTA",
  "key10": "4JZjMzv8RW1jgeDb9W8bZuWDCbdxk2wr9u4KCCsujy9K5JmaGXeevCr337sFfu9DYz4cPW1YJEcAh79wvTNXHP9M",
  "key11": "4nfjsCqtAtscNeKXvH3KLyAqWs5GBThoeU5EYtjQB2NXB7fc4TykLmN7feMKXVHomKi5Jrf7ENvapiFqSGhWvUSL",
  "key12": "3TvKmKULwSUZuGSc1hGehU6SqMsFUJFSDenFqVG3eL8oG8NEWkFbH4NGywrfDKBYjHPer2knADbTAAoLY9rx81Xr",
  "key13": "5ASxr3H7vZDVzz44YVLCStq3Ks2HQhEHUPNkBSDQcTxtLWFJLBjJF6HNSG3Z5yKS6orz5p5cD6Xus3S55BTCyDwj",
  "key14": "3KJuUXcSHo9nv5Yi92Pk2Sir13XJbXi2tA6XQ7ZEuhyZHE7bnC1BXakWAkECZZSydLMUm2VPkDLKX6HDfxtnoFD",
  "key15": "ZrHy8PxVj29wJLBKDuugx6CcZ5yFPthJHEHxqTWRr384PqEBnX78jAJVwnaJbR7UNTuDis8q33ZDu6VVNVJvKFt",
  "key16": "5rD62Efs3rgbXqP7BxQFUFgiq9retgi41tyi8GUtpDR9tTV9MSonDnGjVzrMWCyBi1yC7DSvwSuihw96WesDKqgt",
  "key17": "32SiZhJiDUC2dgHPst6G4B4wzeeeXXJFXUEc9fphVVdiBYmZwZNq8JwMJ2Yo6fnfD88juvi8WgXeHXQ5sCrbKWEP",
  "key18": "5LJL6Aa3QNUrs49SVpCmjEekAuyz8Cr7VnmM8v5wctuqLpjjbTK1SzQgLz1rAVRwssHKtsMPauZetXj7QPYfjhnB",
  "key19": "FkSMfbNoUR15UT5AkGqZhurANJ3A47ApBW1WPMuCXrrazzaxbcTVTEcM4vkkgyBN2uoSgHKavmbceJbss2Upx8w",
  "key20": "7KUSAKnQffxU6c2nFepi4VgGuqxPRyk5nogyTJqKQh3AcUDZAtgYef9HUHWf3kT1ebmmKs4SAiTGW2TfyEQ8yFM",
  "key21": "3XQURJHYstakdRxxz89mW2NNASxmU48zwYiBctCB85Ev5PWwxXb6peqiDS6kUx7WJZoqtCN9YuPZ81XiVEXrPja7",
  "key22": "RdQjoMRpyR1SUDA6fLh1BxjFGux96KyTr13pYDY6YdP4LhUwQZ6dxURRbTriap1ccBq6j3e399K8ZmorWyJb1Vh",
  "key23": "2xPVvu8F8BwMCCgifCpEzRy8ViacNMhP41PKfG4AmBPYnMj2xAe5qmva4rjhMGcS2e7ZZ3H4RkWPoqvvKXSyAtBe",
  "key24": "4n9vtkYJh44k6uwaBNLsV8J7ANQuNFLdyn1d4ptJGn4YQTJ9h1KqmvMy36Bjt5H1iW8KYzPT6zcGH998unPbXxzb",
  "key25": "5MVt7RzQKfpmHBFoCnt1K6dCHzn5jCLoHx4jMxWaTBUUw3NGw1f9HtFT3yPo8EfHiYVMEb96EdHEZuKNmzmHEdJ9",
  "key26": "4HXdMgZfJ4FBWC2Wz6HRwAToASCquJ9ofqrHN2aYmM24BFxeej2sZ9Cv1Pg2uu7y86G85rdeyf7JH7Umvn3BfMfz",
  "key27": "5aLk9Com7HgjRFCkJDW3o6h3Wf8pJJ1hMcNRK6GXyDd1KUgWxgU88zBVXzgENRu1z9XpP3oTmRpbXCkxEXQHVYie",
  "key28": "4FCoTw3ZVHRiFnKh149VaoLvN8aC8ZsfDufRK5gEGgqBcqCNE1xYE8X8G2coPhB9m8c3nwC2eoTCQyog3DQrYeCN",
  "key29": "26wKse65dUc8KesBDU8PQzwpZRyssd3bZLLkaiwwhjoBcfNrNuGVWqzpfKP2CVAXxLbscE8W7Y2Jgo9eoBsZHM9p",
  "key30": "5hecw7jdw8ukUwaoBksMdjGV3Ut2F1JarQHy75oPsx4DBH1AqDECpPpyoLt3CWot2zRVRvegwLbdHqZoTcUURkTe",
  "key31": "5VzA7cTUVdkbUnhtEKj7Uvnk7usGK254Xf8ignZ9MRjcxJnW7JipGNGULUQV4pfcb4UMNEz6QWkrP3SSz8Pt8u3r",
  "key32": "xRuvyYUnx6hXgeLJPndTWxAGjRB5dMD9a6qtx42dAwRbrCGvQxK7KJV3DMquKM6bzwpiEgybmB6nfrY7V6ewf3v",
  "key33": "3ZUNkYGhqZqrLSECT1Av4XAbb8xfyhwaz5zPSM7NMPrBQnjJ3wfNiPgHc4gQ6Qhe7aHw3ctyYU8gaSoJ1pD8LSzK",
  "key34": "61Ry6jVvzNiGcYxUdGzHLjdNgBBxLMpusXAkjMz3fEosDGo3xUviDzPfKHBuS947Ufu1HLbWeY9PQzwN2J2jWWXx",
  "key35": "59sAMKoYGTQTUago4WxdehDaEFDjAA3wfKjus5jsh2YYRZwFsVpBgWA1JaCPfyaJU2CbmDTTVBhwAWDtRB5MpMME",
  "key36": "Jsb58SSDTWqiw84u3rPM98gZPAxER22RsMM8QKSno84gxvG2S5Vtk7VgVW2z52nhCqubVf75Q5VCHmjFUUTo38L",
  "key37": "5ArTYzAMEGoHScFwCQMXXtnaz6wRwDrSBKXVT8WaNPgfKXyx4EPD5ikPs5uGNvcvAexGzycZdeudwJKozWguT1p6",
  "key38": "3sFAQmkiruWkjN8Cf3wZizYpjNk7KREkq4mhzNgACf7egZJdd5ibo5nruXzSFbfH5phFuzVnHHowz9JHi6djFxFR"
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
