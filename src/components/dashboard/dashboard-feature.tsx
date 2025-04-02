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
    "sn1t7xCgnjPQDZ7n5rsbvPh6gog2kbRRJWhmJkeQbbqKp2pAyPH2osTGV9YN93HL981C9iLjM1dgpFYh78cVPv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L9fo9FsYVsQPi5pTurTeiMqTppAzty95HZFKkb9NUoGqSUMwsyWuqYUJURrpmz1AqgDTQvNzYh7EMbyceaZar2q",
  "key1": "Wrm8oTHwEWKtaKyEgNgpyWmTxepYQgJCHw1zbg5rDUv7efcJ9Hbdj5w3NTzB5RGtLq85Psur3z8X6z4G8X7KuBw",
  "key2": "JXDGVFT81GKsKBeYqdz1By2U9MtUBB57L8PJuWgvzqTEmjjpsFN5m8y4oQazjti8tCXsjffjEUapNjk47BkH3Ly",
  "key3": "4TG3owY44NfhmbYs15EmFw9xxhkguYkN1wgQBNKept2K5TJpR6iue1GhZXZSnfHY4Vfzo63HJfiyHRGLAajUUfSp",
  "key4": "3Ng4mHigyiMyWjj1p9oYNvWRuQZibASTT7Jz83Pwr4QYZ8EH8bom6MhXE2htYTbnhVXKjxFFJtgRAMdh2FDVJXio",
  "key5": "2ZbMJJCRhinAzDoUMu4JjYrjK6gKyqw1zQteATKYvDDMKzeCQkREY6fPGitAGb6Tai2EnBZhP6eGN3cfniwEMAFb",
  "key6": "2VCg4reJBK2mt1Cai1LzLNPc3HGssH94JBpa3hB8wvoU5a2tUVotGExidLJ8QJkRCB8DCUd4tGWbrZsRdb4dtjnk",
  "key7": "2acb1rtPEAzJ4C5hb9MUCiq8GwEeHbJb1YLV876CUQKpxGDD79zWwfggvr288nYpTmW4AAxLbM4pLgdusRKjLPxV",
  "key8": "3fvq5DNVSUMtk9xy2puXm43y4mBTbYUFSE5dEE6x99gK5SpdYuBkBmLL3srqPoQQpbUuWgh2LLFCZY33DJPwnPCy",
  "key9": "2n1NY8oRYn1JTgGdJNMyANTMrjSe3d1WiefSWquqR7WrcEez7YCyewZ91yow5dwk3CQJojCMnouhj9tFBtBwx1Su",
  "key10": "5fyyPzHHX9d67N29ncPruFAUcyA7sHwK4iTsH94p7V6jW7ed5LEtTUdo82HKytCMe81XaP3aARoJeM5YXygP7vWg",
  "key11": "4rnmhaFjW4P73Gx6usjCAP5mJHoBWagUnnJuEtsKv321rEz2fCrATCbVQe2UsF1t6F36cwng7XX77okYGtxijJQt",
  "key12": "4zSjfczohU5QRuiTCtu2P7buXENDFyWMF6HMJm4KSu5bcWA3rxmBpqg9U6sBxqy96GhydsuUTJ9QySqrRkwjGXCX",
  "key13": "5oKPD1fCRDVeccnciwFmW99QhstBnPPXWteJnbux6p3HPAqdwwWWTr8XYq2Aa5Pnm3sVPfEoWK5LXZU2YEKGCqGG",
  "key14": "Aa12KJ2NNr6HL7ouhouE8EM2GTGEx7J25t2p9gpUoG7x7kd83XGcyVwsXPJamkLGtAKCiEJWgH18cS5Ux6hzdUZ",
  "key15": "2tsZy3XWDYAi2e8yHYeixDxk7UWPQhxBQnpkpuLx3PyADMLpoT6mSiVu4iWMmP1mThnq9FKhRAftpSXKBKXhxH8C",
  "key16": "tUnfBjka1zfe3pn9UC2z2HANspCi2Q1p6J8UfZ3rs4EF5Gin26faAQxywzgt6JoSvk19RroMa4w3XA9LgTrgvtw",
  "key17": "2LXAhQmi8gYfJ76J2WD3Hq4UsbXKMwzpS2D2uLQtCXvzCV47P2tEb1XMp986DMQx2nevRW4AqWsd7Z9chPdoQzqz",
  "key18": "4FLBryh4B25JsPNFEpki1hteWUcnfjGMtkVLH536emoAAamqGFntmV2DXyia6K84yDRST5yV1KjK3wh9tbVFAdt8",
  "key19": "3wrhEn3PSiJHtm87jDFyHBWgQAJhLS4QXR7rSc3S8HRS8ytY8VzXLrhgfrDWPDzBLkggn1E6sTA11WFFNA5yiWca",
  "key20": "Rm6yCsByNasSoaLaz2oDaEYa8no5qDKYD6RMwaNBRT3qLetGhGcZk3Ty3qJuJjqyGnvmBitBiMGyjxL86eZerq9",
  "key21": "5RFpVNiMeQD7s8nZVAmpswVG2oaXdJCmr7S1Z8UiBdUR8Aqry33oV7dpB7CJUgTmjoXTa6kpVG5NSFWhwgGj1M1c",
  "key22": "mgdbjGTXkSfyTHhEgDQGMx3QgrAv2YzxrdzwfUkjEUj2PQmcndvX7cFsDVytqzzf2Mq8XELSoabqBbACAaxSFPu",
  "key23": "2BJeexBGcVAEFpGitCaMtAE9vYUbBkrqgiYDfeBGMqMEz1EmYkmBpKrw9bHy5YFwZ4xR9frTaEJ8n7j115UKeGTW",
  "key24": "5hcweKJTxNk8CR2aMDDZgX2stjBxWY7LFwt6BvVUkBuDv7J9KXR99gaBYJAzX2QjtqaDmK8mtafvX74NTqCEH2Jy",
  "key25": "34T6jVYZQnYu9FngENHDrbeD31psbb5BrF7oKwsNrJCMKxaN6b36Gq7DzKFYbtG4KU5mnXvSTjwPAKgvUj61ZHsB",
  "key26": "5toc3weQJsSkMoZXrM9wJi5ApxxUv2JH1xbPQ5mvDf1cAWXLTPeZmZXVJZakgnXAHCVhDkZEQ5xYZ8KUF6QsX264",
  "key27": "4YzuAsnK2c3a9sWAmSV2Gx7kTjXZbPwfshWkqhVWSiRL4LJqGU9SwTeHA6hRiu95fdL4pz6G2artRmxbMEEjFyf8",
  "key28": "dAu5maSSGDe9WYa4KTzbCG2C7M31VZPk1zZSAixL9iBe5D3CmAXXysoVMhgDuQJz9P3KG4edQaovmZzQydX4YvW",
  "key29": "KikNsa34qadsaUaR2Mvzcyc4iXq7GnAZj2S3KSfeeQafDiyefcLD1W3wTaiK5n9F5TNoKXAXxCG9EJuUhpzuYUS",
  "key30": "dU7H9AkKZJgq6xPHuqeiK3DT8Lk9yybwZ7dozytCAmnWuswdhEBvSHigVKqBty5Re78kjyURqDVdJtnZUo5K8FR",
  "key31": "3vhYSwnnENomtdvC4TiNyGHqfAci9vdNGk6pxHTft9SMxhkoKKXLpVRQSWeMaFr3VmkAXBDyVDasZALobwkNgyYy",
  "key32": "3Qk8sMRq4WzF7kyCCtgmwjksP833Y1wiHDwcMQsecxrgcjmv1EBTQ11QUbVJnJHJQpKjLPRy1cUdPRxwwVCydTfU",
  "key33": "gBbhtRwHL8qGZ9Qiwnq8hfwCzKurf5TSYqWANDwTZQYojNxpNKjrSF1FNBJfbEudbZyaBUpeJto79FhYphdyc1P",
  "key34": "6operiaVZFNSVgggJoCqP2xvQZkzchmQkNxRUnedF2AEyBw8FdAMsXzy95w8unC4tMZ2LJC5zYrn4EtF2m4v9ei",
  "key35": "5iRV87BQV2YJe31wgugBcKcx3ZnupJ9C4wKzPWFer5VaMn8f3JgR5uLGcEJRyTPcxZ4QS52vbhrMqCHMyuav5jJa",
  "key36": "4ZPRGuhHRZRvDSzmjCf3ogMJwTq3mq6VpUD5e9QzLX1CGtJTEEmhZ56qD2MYAYvyXJ4pTaDYqg8dP2iRgKbqEbJw"
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
