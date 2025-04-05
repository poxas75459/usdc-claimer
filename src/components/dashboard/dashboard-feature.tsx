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
    "49LivHMrbgKREerujRrSt3VjzaFZNbJvWNwESibmb65FiR13AyXDgkZhs6KsFTxSiWbejtAnwHUb5kVNYVaGUhS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lsuyd1k1wV8wCiigM1N2GTHtpt579Fjgq1D82nkdFKN44MoamRNsXmUPaWnwydd4Zd5yTS1KwufLa3Xmyo6QveY",
  "key1": "29pfwTPsRvmoeFd1fVdpHUY9QefAJUAeNMYYmEGg4HLBuZBwLw1B5RjgaZqynqYwXfUVNuiSC9msbGJHvPkwAPfA",
  "key2": "yKq5VsMFc7NMN9M9rSeAmMm3uJKpxVUdp393ThwiTrka5fazrb6s2MPQR4sHLF2rhfftSwByod4SRPSaoBixzbr",
  "key3": "29GoKaX5CwnkwM5PEL5E1VkJkcUioPrLxGJfn9HaBov7UKaRLuJo1eoj8rLkXV2nUxEUo9RSbnoWK25KsKL1nG4B",
  "key4": "4f2ZGeof5LLP4xeLKedcKW61UofDbG9qskcMx17qoZJ3zoX3KKpcMFL9Zux7FbtcH7sBaNYJroVbBR5UeFrLhzm3",
  "key5": "4Zu72eV4uhiQxEQbvKXZ5rpba5BVWMuPJKkv9HggPNaEBbzdhk1K3E6DWnXmkKjqqMfERXq7XgjF6g3McctvNwfH",
  "key6": "3ZJnxqmSoT94hvz4ja8ecGvfyjzMcFrxhmAU4RxNm6ovwjwt7v3R1njUTmbJXGTtj4Gh4cSrjMfdAVm5DBBBNuiw",
  "key7": "eJ1FnebYYfiTVM7EaykCkGv8akuDdDr4TQzv7CwhtbAQRG8z7NA7bHEjrNwbMxKZmjUdtf1x98xQgGVS4P5mzwd",
  "key8": "4FJUUwLUfNKF5L95ijooENVKRcckzwrhDaxUsQr6LhLq8HbirKFKT85qVYDY7gzV8pqmJdzQftU9EbD22LfEatz3",
  "key9": "7vu8QbhmmqoRk7r1GG6sQtKkW2SsbvQnLaiWr53cDgc1Zf1RVkPFhSoc7EMCrhqEmjDkxFwxytNjSJfv8nvAc3m",
  "key10": "2dwqLQL2Ri6FM9ccAwyMtnvuNe8GhDNsHMp5j2543mLVAMBMEqptZxcRmFqZp3oTDqSA8AZJVv7xDm61EB58zmrT",
  "key11": "4mLkgZ3B2VF6FzZhwKQppZ6YwyqaE4EKHNeyVMPrhYysRChSpQdTi6ik4Y8yLFQrfFMKHuiTHMUEadqJqzGN6KH1",
  "key12": "4mQNKYVhbd7iM8HfHf2g48pNGJV5tduB2EVRYqnDtSr2i2NigmhPuBFEVZ4HqLjbUump7BQLmixSmFJLbwE2EqJX",
  "key13": "RYYdY63u2B81JKhpBQVtBijcEE5PKzcm5GdiD7dUC4PtjZ4afRsySN9o6YNSsFMHq7rbqtWJLx4o4YCxYHsuyxQ",
  "key14": "2XKr84ZoWKWPTvnVteQSkeYarEJzC2wKyQXQsTcV5qw4ubXWdi4xeL2URyKbhp5cz9P12ixLSg2bTDpjJUuaXJDi",
  "key15": "3CSHCqWn3PZivcN4LKXHzc3hWDBaUGyKSK2SMST95bPuUuAW9NF6A1qPi6tyHyaH756rz7CLPZvJFLTD1RVtvFne",
  "key16": "tBW1gbvXF3D5U8FnFNt3r3xGN8tdkDHHrwvGVs7kbNX8FqtV8SSD1jn43KKRffHUEnvMipnxTCLLCTLw9wGxaKJ",
  "key17": "4Ezb3h4fyL7KxuTJTc2rpGAuV3958XWpiaHYM2wmz44AdaQ5kFFz8Tim3gcnReveVmoxBT7HC99qQqLu3ZQJJS69",
  "key18": "2zrsqSCaz8LMii4UCcEU72x7bbiKCV3bN1Hj9ma8QStgRYwqd3QyzGXyBMjKuJQMFLEYqvR669fe6JDgcbDhcNfy",
  "key19": "5zVViR1M81q9a1s1dfEqtkZSGNWG573DbhjohmYBqx41jm9mvsVVhxF4mRUfryxbB84nQiXg1a8Qasj9urUZAdjG",
  "key20": "3J2xpVSGu4fFTd65pqUnNFCJo11n7HZNZHruS8v9ZP2cjEohhjioGuKQcykhU9x3fgJ7JVcJDpisDDHaBfNZM3TC",
  "key21": "5PnHr6tThsrK94j3vMQFFTD3XMb2eVcVMDVeHuz8EUx8n8Vi2Ha5DoG8D9joDc5b6qNYx6ppmmwqpa3fN195W7kZ",
  "key22": "ogr8UoNpK6SU27Mh5iMaAZyXQXHcNTjWAJsgkCoNTpABZJo8deNcckC77hA925JyXiP3HTKBMYgjRNvUYvaox7p",
  "key23": "5tTpXCz2fDfR7UV1wfdq1ymu7Xa1ZH8u315ENTn8ALg6AC5W7gkNecJepqKejD3fnbLS2Dggcyx6VD8iKpCJf1rg",
  "key24": "4jtcswfYm7teaQ35He8WGnLVLjDaHKdP5Lfkq9pwxan7s15nkAyqUx9hvh2AB64jdqPNp3ZZh3xaE3Qd92n47nf6",
  "key25": "3DGEBvxzFt7uFkx2J3D5u8XNprXVLsHBekweLFB3hE1ebQxfhZGp79p8ooLAJs4f7rQc3ESa7LSXpsXNK7HdkWkr",
  "key26": "4ou2SWfCAUMAwJrYB9fvZbGbP42Neb6p3GzWny7FKffFbwB4YjM6E9yWUCtxvTibTGHUWbyriJsEdVaMQvAS78eS",
  "key27": "3yAW4dkyC3nVDkwFR7A423kgrD9JS9Y171FevTs5JAezJGbzTXcNvSTFGRWApzBWr25z2A64SfiCaJ64rEoC2wK7",
  "key28": "3zBUwanGRpVkuMuzf6ju3BZ929kMQH55iLqv15ZHMtL8YKkhgcaW5axXSSi9JFnApktupDPkd76k28H9nWrCPzZA",
  "key29": "t3DZfpdsexR4hYpKPCBAbrxG3zRi5ohW3VbVvTqWhZ9of2qddHSziqJW7jy1ZhvMr2TB1g3mhmZkf7QSvXWRwKj",
  "key30": "53WFNG1zCzN9wFBGxRsrCopDbeUhGsVg7d2QyYZKT9yG5GDJGvZ43FBqVS52hUyNsidiqdWuarLwP6yS1UuoQfY7",
  "key31": "u4gQaAZLb8Ufy8m4UMbJsixq11WxYJ1NSMPxRspagqVtn8RVLkbd5uxyjmRBaYn4ZpFBXnUde8jf2gy47DWRCoa",
  "key32": "xT7hnewLpnU54pF5QMipyNUbfGF8hWDWraVMBsqqrApqXdQDSnJMezcHpA6x1geh3zF5W8yEYtqaJxxeKg4yBEE",
  "key33": "4VaYv2XZVyemJcFhoKBMBa9MYwzfkzGgow4CwfKn4znfZgGdGk8e1PwifAK4mNKZ95JPZTz3UyZhr6tJfnUBv2GM",
  "key34": "5jFAPbPBmVJ3bmNCBSPfpf8PDWWFWYHZaURtHCiP9ECPQgxkj9U5AUf4dWRruGvuskmrZJ7Fwug5VGDseteRHp8T",
  "key35": "5zgNbEThHQsXdwg2jAmHDULFem2nVPposGk6492smjmFK8ZJFmbrxaBfNxACBzeT67SRcbuFhTnC7s7dRkMhLS5s",
  "key36": "54vAgU4wSVdQGaKuFwe9fsoeWmvmjrrw6KdQ5SgBJiksE4MkzrEUrGaeedWW8sftaMtyyPotjN8uaBv3FDtohmX4"
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
