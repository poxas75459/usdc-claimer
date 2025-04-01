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
    "UVW9vYtAomjuS8DYDzW8aZ8ciaXaJa2teRN3Cnek7D3btHN36MjUbuh29n1GynWsDXpA7KamnS3q12QL82dsrYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dA6SFuTQmFw1rQesjzKSqgWyLvcD5yMJKbenTt5P6odCRVm3nkX3xMDXi8LC8byj8SL2NQNQEyDR1YSGuD6bpCD",
  "key1": "48KBktecHRNtTgCDiYJaHP2qu4FKKUfY2B4LZg9BMUGp7WF7992qMMaFPkZccicQkP4wGfwsJKrsTzyh87pUJWGr",
  "key2": "5KMWyr8itxSHnkhvXE664Wgcn2vT7ccRSFxeST5Cn6TDMoAn3VsB1jJ76f4Z19HA9aXSwJAH7jWz1mDxvFm7Loud",
  "key3": "2Pxd2KXuiqUeEk2NpHE5FtHHzCSXjF6RtLC6ovFdoWspMUKW7gB8Hyy2oYojoVz6hxN5eA6NLYHiTncub8DroiCM",
  "key4": "4jug3YpAjqej4RgJ4pXhWfR7kCmCmYKbzc94BZ2atQ1HGfR2UyJ1eYbbzBWMmXBWCvbkPnm7WMbjh3GeJ8JB8p1M",
  "key5": "54mncPxFpSVE7YQaP81xQM4Xi7FaejD6JEYftGPSZfpm7S3MAPhNNz5HB9gZ1bNoQH3cd6mVYCxLBoDqGDSfz4eU",
  "key6": "4WgpEtrLL8SvFiXrZwddKB1kRBzG6cXyq7zfLHZZcssPwZWYzF7Aeiw5LQDXivxXUDhSz32n8jFeEFtSvZBGgjJ8",
  "key7": "4hw5gw39nSbRVYhVqxGVRrrfShs2M5fmYddiveQs1yUGcKkTLqUTMAqCwZtCFYbh5ACSBvK5ZH2Uwz4iNz77mxib",
  "key8": "3WSjzCcwSSxCPuJvTCefj65m8q33Q3Q4t3pG1SKPeY2Q1BHDzYXezdn9HrMjc3zqwXKWbMzzgwQQJgEhhh59qMyy",
  "key9": "23B98E8vVQXawZqo8AppCJ6acjsMTsTp5YCFD6tJAnEGq6gePvEe7hTkX9gBkDywNhSZ2Um13zyS1NaeDvCMVtpT",
  "key10": "4eDUKxFpgfpEcULLfHDpYChcE68eRgZ54VaHS85ZexAVPTphAabuU4BSoNqnnYXaHLxQX4o1a2x9gwXhpZMwrK8Q",
  "key11": "2JTnTWTw7EEkfcYyTFZKb2ZJxxYpTMSwWn3BuKKF6dSPp5JG9C2mHFduSZSyqnZw2YdZdAYpYVJWndyNwjXVExjE",
  "key12": "2KMS3MuAjnBGkvHQerzZnDCXi997JSqwrph5UtM9yzUcecVobTiJwfwcrgjix7bprzCLGn3MacGNjb3T7F7Sdwxc",
  "key13": "4KX5ZH9QUHiwy7q4ZwhJepyi66eMCjs1aKjGgXpgyogXiYwSzcG4R3vEbLJGvQ9DEFAREvUVJZSPYCKkLH3nD167",
  "key14": "55pU3fuJy42Pa9UwR6ggBcdGwrFKCH216DzmSis7zFTQHfpX1aVmajVuyS2tqg5VvSZVMureUzg8eCDDLhe4uNb8",
  "key15": "3mSpigQGoifq885jLMyNjazdS3qgym61q9WuQGpkrovA4trteDshfwJATVHjR34FjTvCZGoGbpK3Vakbff2SEmWP",
  "key16": "4hrHq5tt3RbvKF2wRzw5yqYq5CdyhdEyQxAgpJGT5Xx9waWvVdd5j6casoSufZ1BzDQjL3U6GiqUC64madqzEuUH",
  "key17": "ywzrS95Y8J1YxqYKkkjWwfPKis1AmY34Pwyd33DF6KaysBDC87Uyqd1mYYBLHGoKqNnTEVLWYrLR4fmyWp9LRBM",
  "key18": "2zRSyMKysqACG43yyW4m1n22YJvPC4vcDArdrXCdYnnrdk8VrigKQRgp7VjGu2ofF6MZaSVFSfQRMtdJYKSSBiPc",
  "key19": "25k1Yw5XjkJYGatgv52vYzk1RpSMAhPPoCibKe9fpbgPg9Nf7KNRyvymBtmxuPxm11w2BRUjWzNK2JcQEcHikM7K",
  "key20": "pv9kwizKsiLqbT7a825s421JHP7vunzYS4UtuBtzSW4cJbRaXwK4NUt4axWmB2Z1ZUUXyeamBqTCpd1vZd6hhcp",
  "key21": "SsLeJAmm3SCZNcAxCx9URkPgSrocnHVRvoD6pFD3jexHe9nrFrCH85mh7KYUdFVRGeEcWpQtAM945qzYd7VF1wJ",
  "key22": "2nhkbdpb42hxbLcCbNgGdyEbU4w2c89V8N7XfEkDKgEMUNz1mMJKdmMwybFr4cKGh4G2vVQnNHvrH9bq3HbMg44o",
  "key23": "54DxJAFrKzMHCEMV9M1cDMTTmKxtV5t3bDhdqzCkrF8v8iAqKpKDYcptH6NLsRW93EAzqGZrFLSTJXP4V319pLMV",
  "key24": "2czC92y51ELrYBjdeGiufhHKigRBi98WHbTHudyyCohaRjaqxabLYhe6pP1TK7SiLEHnc2bKfA5N4STVKnABjfi",
  "key25": "2TFNhxCnrtATNGNvRfCLTrazRwmkud6kdPC85Q3aJ9v5ZEG9Kbu1txq26UWDpFQnELw67mYuaZb1jaxCRDVvTyGN",
  "key26": "v5v8XkacG89sKqzhYWghy29mdZe7HQKMkFfv3gSK9Ga6QnV1u8FtbAFfpEjLWUgNgjwSymzjZBf2BvFCfhZ1HE1",
  "key27": "3FwZZNUHrTMG1Komdk52Ebi8CN7z4XtxNJCPRMp3GGQqAvidVd7fv6MbbiuQc5Y6MUsgVLXsBvsUP7fv23a1xqWr",
  "key28": "kS9TKXNNLBAPXuGBABQ5gAw8ogXjkdgcv4jsURKzvt1Fu6N1G1ed8aHvheuUwXcWCwU52xFEPUBgE6ExKJcbxWJ",
  "key29": "3geJggVSfzsoo47dfpeUSnoc4McHTM4FgP6RwDHgWHm6xubbwt8ZkqdhU7a2RPefo4oA14mkm8T79qqqdzRDUoU9",
  "key30": "38KDB96fRP3SJaATeT6NAyyfKTgofePsEsStdXVR3pib2vr2CNHax66G7j9Dgrqzsy8nakfMXwqctJXuEtf3TgaQ",
  "key31": "5z5hXDeBQUz6pw1aUD3CjYSQ5YrrYDGasHUHx45YubrVgekEar8MjacLkkR2K7yZgYsCDDfha3ctqHpLEQqFe4j8",
  "key32": "jHWVkpNcrvnJpjpXFToTj9ENEdmqGzKGuzVws5q9NYicb6DyvbG3xZKp2tvD9BnrjDh2Hzq6bFZQqULkn314Dg7",
  "key33": "3JNPhXpaw4t2sD28FVQnCypdCNHUXyruEWcfRjQaq1umqgnySHs6pZYEndW6zhbXkjDXXhvUnfGrwVeURg1QQNVZ",
  "key34": "2MBP3fYDUj6KG8VRf8GcA53wQyWd29NoMCbxJ6jxsVtTjuC17pHCkCZEANzsQ63d4WWgr1Mw7DXskxJoKm1tdKKy",
  "key35": "2TdPvUtsaeWUyxGoZDbfeSBq5rpePB3qquwcPhyisMy1vd5n2tXyFVFxKJiAkW4xv6s9PhezZacdGTNVS93ef5eG",
  "key36": "MLzhdeWXe6zR911GfTayBgZ9vxBvQsPr2HJoQEqqA34kAXxdeogZwtmZuZc61z7v7RM8X8H36awhj8XpDxEyhgY",
  "key37": "2trmGjTj4h32is3XKB5rmkMQYa37QDzDRvKhgdrEb8pkUBQ7fadunTHy4AQbbPUEYXwcvyupYP1v211zEstNiGTL",
  "key38": "vtT9TFDXdH7s2qey6PV88K4Q5X8LtcGqbxywxhTxtEGnu33QSXDp5ZGcdW4SaZfvpMBrNpDEHApTn8UmNncVuNA",
  "key39": "wx392NgEn1FBLD9hSuwxPvSheFHKAUdHHQAcsXAiWhm7yWGYADy8aqrZg74Jh85wURVsKcyc19pE5yex5HfFtgN"
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
