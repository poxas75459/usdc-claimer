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
    "3VrG7GYjh56jD8ASbWbjhzgzfXJhgH1ntrFfak8mUoExyrYSUb1tXYfc7vHp4wZ7f9xc5aosphBhGFEw6S4R8Ru4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EUujvDM1K3J74nUfyveii2AT1XLinYfBffm1kmc7EnY5TQxEitqAHzYZJZibN8hN82EPU3tQG2eE8yhzm73DboZ",
  "key1": "3MXmk4L38txtJ78QWqfnAbpkAo6ica1jsAwCYugVezoeRLPkxv4x3XwghaaT3Dc3Pf5a7jLPhBm2zSmANFfnm3mv",
  "key2": "BdGiSYcRHQhKTio5zEEGJVmDNsj8csqHkCUkhRgwaHkQ5J3oVCBuE5kFZgmHMVVWZNVvMxWiV1WedxynqMYRgPp",
  "key3": "65rW3Qta8VqHPVuhJ9iaE118TiZfDbc9t2Hjfuh8Je8jGBqUccAzgjXttRWCsxG4Hb8iR5iB4mQSpTybu2Y2XB1C",
  "key4": "5yEXKBHRjWhrqipYLHMQDquwmE32vaEhSD4R4bgQvuj3VPpKhN78cQ9QAK8dn72yYq4wj48WjAYvgfCX2PmjkZaq",
  "key5": "56fRdMwZJw6PHjoY995n95GyNVjPtYcGtDRXNbxxURVorzyZU86mjiBd1c9JVQYU7iw9Fr35JzV9UrnnkwWWKTAi",
  "key6": "2hJLVXKGeSywRKbFvCuFmVQBk1hYQPeDt5bKe5eQHScCwer5J1SsmMtmwagLGukiSp69fyaST8Segdk38SDTajXQ",
  "key7": "3NLBSs5V91FownHxpCrwjyoGNDjBTY2CLjiBFjykdgQQoLDoTQRQ6ytSaHksDHqJ9STwpccT3Mj1J6aEKKzHwDkx",
  "key8": "2n97fGvMpj1HDMyErQMhkkFzVGmsby78QjHNpK6tDeDoH5PLbS39YeDSutbZ94MXg94S2rttmMRWvPQbuMrjGyfW",
  "key9": "5hWBS4u3Ji6jwRQYeekCikGGfrELtwjhJ3XWri1HeGeEhh6GrAusLKK3VKaRaTiGkKvUyDg4iE2We9Gmnvs96cNn",
  "key10": "4WStDWWg4sEW4b8CXCuvAy9EJPugtJ3NRGotFpqPtoJUiSUJ1UmJ7Ap8pydDt7Ht3EPdFWGMJMDdqqVHSio6ErR9",
  "key11": "5nSXmF8xtFwVkcEfTJkcPrgoBN6NCZsqBSqjmXPNfyGSmDE3H6jE1RPw6pksnTVhdqw8AwG8UUTtUUc5evcJAQLC",
  "key12": "5Apqnd8Gu3FvpLrmCkDpLiNz42HWSjV7kK7hYUjyRyJ9e71NLuxyUR6iqeboBAaNZWQdnYZYeJctiWAEpwzbbuCZ",
  "key13": "2TCCqZPhKyS6R1vLuJDqeJbHTXv8duSNCZWRbugpzAtpjrvX1sPkUDBUVv5nGinwKFoQyxHWKouhC8ga65SXW5fd",
  "key14": "4MJiwPiAWnyh9uNpU9fVcA7s9MbPaq7HXnoiRZbdbjoAKgui6Yj47wxak86PURFiQ9DVgmy666dtZUtjvxXMfz7o",
  "key15": "iMZiDAwipaZy5fwd4mFsZuUgittSayfhCbnT1vbWHPSdJD1vaWYA9G4D7hqXyif2WBEX4NM5TJWSXXzW9xXASuv",
  "key16": "665nesHNfdweJQTGAN5mjXKYT9p1ZYmDV6CMJcxGVhoGABKs9iTnQcTtcjosEZnzrax9cReBsDvTnSVg5sMfyQiW",
  "key17": "4uuNiCHLYZHBhjDNvcVxJzWaUzNnYWbeXMHE14NnfiwQtzneVz9Kg6J1qNsdqvj9P7xNY1CeXHw8Ys5rffmqPFzz",
  "key18": "49Es5L6gAeoM7HLLXdAq1H76WBHSWWFuyLTsYiViJ7yWgqyZCEzUjsmdu3NAkm8xPqCHoSjaHJtgfstRBFojwARo",
  "key19": "59atgPELEF3mZGCjYQLsakJhrGygU2qyGew4pynVKmReW7LoBWy8U8zpsdTjbspgDvgtNznWNsdZoxRkksJD8fn6",
  "key20": "2YWBZsUQqeAmHUAhbY6rd8UdZUi7vuG1e8qsziFACeJVQif1Sus1BiAXD6877zxCwhVntWA7LPnHFXBktmuZgJnq",
  "key21": "5xbEri5W4BbAutyLAzgi8of5Y8fbvG2ioQcxmhWC28R24gKPcLSXqMWvhSvmpui8fV8mgftT6piZqtvuPPfvVw3b",
  "key22": "3u5DLbGkH52m1hhQLYwMWob6tjfgCb3YH3iczfxr6Sg5pBTzczECH3fJ66Qgju6brpWj7KFxsLrfQ5adTdYwhGew",
  "key23": "3RUUQQt9WN4XNdth7x86cFz4xpvNDD23MdWXJu6GpadQQKmBpoabTHKyq5nMdwkMHeLAgZbexjBU2WkzkVEQCnvh",
  "key24": "2KRmdUJyoWsxnZqfWYF56g8qCA7a52YstE7RHYZv3pM7sD1gkqXQ7wFjHQdsMEbaSmzarY1X7mpSEjWU2uzai8Ri",
  "key25": "3i1FFKJeURtV54FeXzbP2YKpTfDa7jStXw4xaPK57siSutSWMj3TwtkuTfRFGPHCES1XKtB1oVggQep5ghytTkGr",
  "key26": "2MTGyHWZP53mSr4gXUAv9Q4oXA9YTa8iHusTzsirCVz1kcsmuMz8hPySRqUF4mpiDGBQK8UaSJy3dkgsHxVTQjWW",
  "key27": "3LDTuRkaNCwN8558gsGGwh9hRDp84WLiDNHdpEPBTJzgbXEKmXnYoCGT91NmfAKYENwqQdjAv46wUtjtwmkUksV6",
  "key28": "5tEZogv4ocAtD4koQqGxXDZ1hSt4FG5tQJeTUFHmnsMm9niaoZufWPmwvZzqNaPRRD4Lv9kUcLUwUTs7PkK4GQxM",
  "key29": "We7WFXXtzEGZrJnWEAZ8KooN24BmCcJqkQvXU5vXLScVC4iVKqcsGdF69GXK7oerPUBX2JLp2XxPPzNRo28EiAp",
  "key30": "4HsYgxUT5m8M7USiezYaAg37yv16vLS4em8eqxgCZBrMUDvWDLJvhUAyg6Wcsmz8F9GdTiskQ4Yb9EqbGSKwsthG",
  "key31": "2ynaXcg11dPUiEYNDuN32U6VsPNZjKaqs48PyT1trLCRwXwQEeXifKD4pfqoDu7dB9AcK7AQmDfrf25dTeuyi1t4",
  "key32": "5nTN6ieaAN332W6uPkfCNjXDoediDV485EvgvYkXbu9JyCHAj577DSexQdcKapQQVsgm72noej5jwLQxT9Cwo4ra",
  "key33": "47NbxBN4n8DJqbDzcXhUFoU9dJH9f5kk2BpvQxmvfxhymWgv4Pvhr7T8NiTWVMEa69UN4dbf6oGxHpjcneXynCNR",
  "key34": "2dBzVtc2UUtox2f7QPXHRt4X3sm5JuSAwnQt3PCwTj2VYbELgzFyYeg1rSnJEwV2ya91q6d1um5XtAwETHFKafQD",
  "key35": "5XPdaaVcBzmwt1PXje7sPjcdkUDYUdmQ6c2fYSzY2UVSTXXemzNTv7744radZoAdZYBVkhanFW2dUvabuD7yMqJ3",
  "key36": "3T4PJwwPkgASeSqkBTFD7qPJXvbPZqfQpEC5YX7T8USorMcLtwk28NfhEJ1TrgcMtZjzfkgkXAsQqDARRgUU3uzF",
  "key37": "3xzCsbHHJxbhKg6Rsu1uVYd8EEqnWDKxrxS7MpD1JW4XzR2uQWTstzPGsjM51VpziVVwCLj1ob5vxRvVdh8Zbm4h",
  "key38": "2PquNVGeYdF2HphM2rxsnbUZzD8N684cydorHSWbJVA7MCeLCue9RNTeT1zJsUfFW9knoQjvDE8MQPVih6XdzZQf",
  "key39": "2Mq1NF4z2CPjFv4XeP8WKRkj9fi3Whw1iBWJCB4kskneNfQrgakPGr56GjMLXvAMGmKsnWQjqjWUrb1yEuY2ovir",
  "key40": "4caYtU2EncnHCcggHfymsySSoS69JPkzzJfEmWLvNMseMqzd5omGxi6fjv4RFK8tiuq59wxGFE446gmvz7ubTkR4",
  "key41": "41M8yKE9P5yrdQzNC5S4Lpm26tAqp7eCoWshjnyc9YnN1r271LbZjoK95yWzpkgTW7atuiyrTGrca5ZwmKw41X1Z"
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
