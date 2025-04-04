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
    "64rHvNw1dxwnMsgJCH7eVa3CThPUnT52NxT5NbZ7hFidW2L13y1cw6u8ph368wJ3mCmhn1WBGrK46wiDogr1o2gR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KkYtry7kWSxKs3GXUZc4eX3J9UD5Ka4NYgXtVHfvYutoxUbMRZbXpNjWKm4jo6n8q7FgdBDKTfA5qs9tSaKLAqS",
  "key1": "5XJQuo3D6JAKp79XWBoJNVzQaAYxUdVSpcEuX1vazJHCQmfhAnmekp6VkEbW8UTRSbCj49rsWBsNydmmevt8mJPy",
  "key2": "3CBfvfHThWxso2ULk4aA4Zf6vVJguziCJBXJjRvJqBrNmvkBrqQ5KQDC19WscAHPeubWteB3JneGQVkXv7xy8PTA",
  "key3": "3Rz6ggMHZpKwxr56uKk6kp1LE74GZ5nFs8U8HgJWdLbdK8WCFohreejeHXbQJDydLB6ZmKjuWRRPVULb7k8CAjuJ",
  "key4": "5BZ8q117xSsvnCwbToxHjEvep6u8qaq3Z2gjMModrTvwcsFB8g3GFYA3qAeVvcnFSkDCi8AW1EAvEQrKDv9pBT3M",
  "key5": "596rwbASbikiRV3PsZY1sKisuAfUCwuwUVGbf3bGEtw2mVWf5ncgr2eLUHEatTvR4kyFaWehaWULWfdJ6VZbBZoq",
  "key6": "4QSrw4xVseKKWS9dDHamNBwrniiciYcc3DkYoXhiTA74tC4rv5XKLCSiZwFXQfQxAsow8bvLcUdq4hg8tyiR8tC7",
  "key7": "3mfPUcatrHtW5ciRyxQoHXYHAvnEBLSx4tXEvmE6C1HQ5fePUeAxG7WcaLy2ao6M3ZRFaFEiTx8T1PoveGAYDJmQ",
  "key8": "4AHgwgJKBcWLKPGVZ8nsbzCWakxWrCBw7jvyJ1A66DngCWHwJfiqah3cy25KWCPmyzE81kWYAMgsGYu68t59UeX7",
  "key9": "4GyRqzm2cJug4Zcvsv1CNNPjFRhDZ2XgLSahyX3pPinTr71LFX1R5rsS1nk24WYK1u1sc3EHfnCTfY5aQ6mMxPiK",
  "key10": "4Bb9RKbcnjj1vfBDmbWVMLa9kSK46zihEfK7vCNeHN3fSdwrzqUhDE49git1TNdBjEqABqtdNSyFSmM8HU2DzDPM",
  "key11": "66JChFVJHBXgeuWAWo6DyM6dAJ5fHTaNBJtX1TWfUL8KravCG2Bt4daKz8FDtcM3f2DuXFME7VTgv8VkuQGzqhTY",
  "key12": "19XoyAMogbG4tUAELnUdFSYgjxbfEAriGVbuTg8AXeyJghzqvPaBgEe5LDwrHhKoEoDPZfaMzc9RxgQM4A7aAzm",
  "key13": "3oTRdUBvNbAAWdHjRGFmiCuQZzSe61YfvtcoMpNvXqjiX3WC1bhJz4cDGb1zJKJNkEd7ar3nMYaarRMzxRxSDvNC",
  "key14": "2euZb3YcZGXqygxFkKwifSdYk2AfGqpWahKrE32vACFDrYDyyiSxbzjF6QLtMmSM6YL84YvxAWvxD8YMpfSvyer1",
  "key15": "3XvT9Tf1xyJFj6aJARMvoNpcaenKrTCjvtmcCDPcazaW73Mse4iSsX2q8DgXsqBFfGhY85kPAzZycTW4xrqixBfg",
  "key16": "CZKsUTTiWmAxLyLTDP8szL5SA8cq8B4TcmCppXsxdNirJvVwDuFLp2bCmcvVFBPjGAQ9anQ1p41sL1UXDduyvny",
  "key17": "2DCdggf3iYe4jJ55bDCJwwVqvUuc3tVdcZQpfdJaUtdCJJF2qi8nabNNKhWxmEPUbk3gkDJcHSg5VQ91UA3UkAVW",
  "key18": "3mxpdfyVdbi9cgAYnzUTNZrQasEyrUA4ETGRggKDVR2XMsnjU4Bwfc1G4A3QXcvGwRWUo9bFH8xBPdXrCGm2GjZ7",
  "key19": "h4gXvzMiwvopBs61oYuwvcnczJBXbdp1BZC8tMjhaJ9iRV1usk8MY94BZtQKhbU99qqUwJKCvPpmL5zHwqYPVus",
  "key20": "5DK9iUxFzrt23aLNifqUxmUjFmgueFvyhyE2rjWP6zP7QG7kBT51gXWLpohPHjCfzGRV6VuJDYbTgUmVL25ML3mu",
  "key21": "9omyadPYstxU6zCBXMLq4gz8Zsho3ZCy9s9kWEyms7gaaUEwj6NX77SpMTMbYuYoeZwUjhhtPKCdnJEJA1Cvs4G",
  "key22": "5tHP9gM92WazRZzGq9PUnS6HYQEkqfdMf1gXXzT7a17dfpnSnzEw8s4jQ5ovMZZ4B39eem1WpFC9GPUy9vep8ec9",
  "key23": "5GEDdHxqy8BdLR9h2twnko71Cou1VkHpwucfG9Vy7yQAJSgyaMDsZsdgft7gUUKnNqg3BaAcM4KSvpufBZKZ6T65",
  "key24": "4tqKWAFierAshXvU7p9FhoTnVdZzYPxNNnUf7NVzWrQLQ89PiNkQ98mbA36HVjcdakaoA2k1BAgE7BXVc9Evxo55",
  "key25": "5Nio4yxmzmvtM7ChYjqe7DMbLbwcKLtiqaFHNkBW9MaiwfiEycfbDhr7CoudTB7XyMxrxLTmGqZtjeB9BbBKoery",
  "key26": "4SPWnai5xdzzucqQpQLgPWSZcujUWaarypw3aJGmbxAYnEqM5suwqyHZmPaENfEtd7VWyBQEXcWEMCXqaPhUpuxP",
  "key27": "4wFCBZdgYbtatcLhPguGkAJ8SaYy2ebUjPpqwKEoKzezDaiPvXxpRMpMibXtMUwAST57QymcihicEZEojHMrcQFt",
  "key28": "2Ad5dhwyDcREihLvSZaojHNM3mvr3AYS1k35gM6ewNQMXuFERC8vnbQ4wcyYfbMRWJjqKHE3BWUirafgvRjev7F8",
  "key29": "2BMtpH2JHj3qwm1DwYkx2Zx3xy247iZEwHmZP4LpQs6ohLk4xsFBwAD2Nd4UBEkQpMZNfCuuAtxD7sy15nLHZNo1",
  "key30": "tWdhRfkvrVL6N3HZeY4UfeWK82g9UbAVNqqdNWtLX2mPxR8VAUitwjgVswMYYXQ5ghaQKcr9t5MSV7HMyDxa5LE",
  "key31": "5tmrLf1GVNFtmT5X4D2qXNgfKeVs7Ggoqr6NdW21Ara7pYiLYc9GY4tBVKEnq9WJbVHf9Sndn4nwLp3iEF7VuyyD",
  "key32": "2U8B1voNaVt7scjMG5ZH19RgktT18dS7gt9Tss8b6jCtwyKJhSWq7pqjEnbKXuRUJpbfPEwAM4sPRGGrMBT63k2z"
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
