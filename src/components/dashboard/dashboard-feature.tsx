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
    "mkdNB5VXYoa3NdsoFduLCpjVTXx53Adeadxm5M1bryMARPtuXx4rnhXTxsdgE7RugDRLmbfEZjDEg6zDwFPfS2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ACxxAdD5z7uJenauASCfNacQ6tnXfxpFtuW4Ez7uqhRnLLMMv1ULNnoh6R7YeNh3XGzsgMXVTjJNW2Jh9naYLJL",
  "key1": "2XxuQPSF6zZAkwJKhKiH6Bcsz6dfVCiNyKEctLHY23NyTCZ3A65Djfntnkj9K4CWZBmDKgVELPk9hLhYoyVY8h6o",
  "key2": "3iEnKxgnKuVpQ1io85P7xuwR1JL7Pid9H4PgUuX6NdjS6zkfogRUMUbARpdwUtqByVRZyNXevyLne1HSkT2n4qMu",
  "key3": "2m89K2pWDyndeBUL4rL4ZBdJqeCZiWX74pFc193xhwuoJUZmXSGKgBkaVFQk5tnaAKjwFVA4cJTqnWRSKY4m1vBQ",
  "key4": "49YhdQQznYn5uizJwgv6GqEygkkCEDyifojdue4D1MsSxfony5hkgDDpWb3Qa5L84pvUaJr7NwAS2xMZm5WDv4fC",
  "key5": "3YUeY9x61ADzScBaTcxfRhJrmfM21cGxT5nn7xevHtH2x5hA6H8a9x7hhTVHHdx4vuEp3NhhmdAw5RXWUQ8vPA52",
  "key6": "87aJmPhFYdXgAbDrppAh4NWbbZNA6ZcXtk2rUAiRcNxYNDfLfV55PF3Pp1tofXB7Wj8SDg2WmVb6z39Y1zkBjJJ",
  "key7": "5RN46k6iURMqVtFFYTTd4d77o2DcgS44hkjwcrBr2tRvpV3u2rsm6Muy59JiJJ9QX8nWqgPWkhgCYEnXcZBxMjgf",
  "key8": "4bwr4iT1jJj36sgvuDLi11yVowUidTw9f2Qk2PD1nEFSvjq2jRHbecdaMboJ9RJoc6CmJPDDkx26ZUZY1X3vPcDa",
  "key9": "3gWGGgA6WMgBWNfbujYny1U1WnFkYbdeJwGFLaMqDVqHViKZBDe153xaAhdjhJpbqT4j7sAwecw2Tym4kgNhWVSa",
  "key10": "59cNPihQevbA9DBZfu2m66EsLiwRfVPRMHeNi6y2vsfVrCmXseFNU8ciaTd8Q5YGWTRnhRrzqxai4UrYBwNqQ2Mh",
  "key11": "3QT8B9Gb4emJ8UzhG6XvDHgt2YoBEfeouLiwziGbeYFAovmP7VyMEgDWf18WwM4XBj1BC3HJ9aNnbRo7WXds2Ev3",
  "key12": "5eRMfHtNfFQ5ebf2kgn8bySc9Cw42TwefkzeqFS5v7PNtaoAgKF3eAxGJs3mvPMYUQLQW1N45jQ9jf9FJ8UFJ8pV",
  "key13": "Ep4Jh76q8A7UTw4af1z8ptLCVg2iBMTqNNxhvgKZJGKNDRbU5AAhqq1kgpkA49A7L28qDRQ48VC2Pb1yFkcGmVy",
  "key14": "5MSJsXLaEhWaghRZH4uN25As9oFBSVv2vjDzgjMqgRNS4jMgsdsrprNx7oYuHrrcLkFLHL8DJrvMEBbbg8GBAqmB",
  "key15": "3MGac4wjgYv52V4Df7SauWXMvxmYcwS2W6apDBbPVvTq8zEsfhAg79i3AfgP1nCANaX9zkXir6o7icjq98sSGt9D",
  "key16": "3jKFwBZbSJ7chbeUHJn21rNEYFLx8KHLVXHFHqx787gwma2EM4mfrPKJU3QuH1EtHp7jmL6Y2zvosiENBcmVnsu2",
  "key17": "62Jm3vyUKaZb3t5sgZobbr8FNFeb5pZhQUqMDRsjXfoXrVgosQWsC7QHtakuBd2skUxL9TVRo3aYWwGgxCafVAxT",
  "key18": "V8rPBtDXi5rdQjkzAgAk3hNkVxDs8um4QpEtH2cg19f4qqDY7821rLEryVNArinSGEyHwqzbo97Mw1iXJfEmvVe",
  "key19": "2nUkF53vC8VRQZSUDqb8Q8nmBg85z4zW6VNJJMFkMjDEeysadirn9P5aBqkX8WfFCR4YrPoqb1votgCJrvfYpRwC",
  "key20": "6Dv9N97juQW6kyiCHZFypgcsRctir3G6PnuLubDpDeWR4imhWUodN8G9swqBQibZnJpbMhsif5EAC4WbXnTWf4x",
  "key21": "4j4qzncnWtUkjEsVvNUsz4Z6f8ibc46Zj3HYt45dJgdTvM1QmooFzmSDYgpVyqyE5hXzpkojQb3vKced3aTLf3vo",
  "key22": "2RAdmy4aSKu6rxY23JF7CJp5ZpkfbwzWtD3oreknB7eviQn4bb5PQNXA713sMe8YFXmT2riPDaoKpnBnDdWL5HWS",
  "key23": "5B8iLTUxYGGFbBgrm2MmZPNsTJRGjD3TqqCkXDLs8MB6gBykETEwmfC4gE7CzdSb2T4ejY94ygE7CuvfTDL82xoE",
  "key24": "2sPUrX8NgmWckG1S8bWsQFg31BFpupQHX2fA1adgpP7wVGKJYEP3PCMwWMUKsu9tKedrGNWFzxkaKR42BhVWV9fZ",
  "key25": "4bs14meHEuWhk8RwXBF8Vgok7DoiiH7DcZYErj36Vrmx7C3i176tgJ1k1HM7RRwhLZjs9vWx5wtvowdiVjXn6vcU",
  "key26": "4DMuukUtqqZhTunmdVXXRKY1FD79hRUXw4Wi5sXn62geWRvEo413QABzYmG5VDmQgWHJiW59WkBSqykySXtZCuzv",
  "key27": "ngrBDKmgWUwiYmeDsrcffkmxBRjSrAe8w6pn5xrBcJLbEedd2qaT5d8wBUzb2x4Y1KafNKRnLUoCccegV6jGcJ1",
  "key28": "3uiBes2cBPNu73n6KzMBXF6r8s7QcjXjTxzMwtwGHuv2kmqYXBiD967aMV675joESPeAxGKP2aRCDijnwSeaspH5",
  "key29": "Wc6eRPAg5onQrwHmikBjNyEXLUuFT7sdw3oB2ovuEwcK517a2XnsYTmyrxFHoTMndxLHmQJRf5Q6K4gA7FZsHg6",
  "key30": "2zuQBnDsgsSqrkWQg4KSTJTcb6x61Yu4ozD3PuVQAdNh7nPAgRWo55y8dFajbzctBXAkGt6fojoKJyQpXbebgazX",
  "key31": "5h7pi3szTSvePX43hYAWYqrymNSMwkfAYvKu6uMBGF7uyt5qoK77eUZWC8qDE1aDCbKYNzuWAYLDqgQ7WxtS7UCE",
  "key32": "8cpwZDMDgCfPPWKotkvsHD6F47gn3bavMmLSLdCku7MrKed9nFJ8YPvvpcLbXSyMovRCrjS2CyMbLFeT9EAY9hB",
  "key33": "ur4zqDAjsEFKZd4eJ8ZHbYp5bFRfZd6uTVj2jmcJeH1S8fpL1xqbQdTnpkwVw7qsGXDDNHaKTiseLixDjkCmDe7",
  "key34": "2xUpZ8otGgj5giWgy74Z3KQhU4mCaVRptzMWCtUQPUKn4GuH9hzB6NHo2tmn55KtaFDJEyx51YL8SLJNwtUSqL9V",
  "key35": "3vrHBATiQos3ovcsXbrJBzNHL1beh9Sucxc7jfh2QGjE5LZgr1Bj7FbxNgS77CtFHDYhjJbzA9i17KPHVeYXRX3C",
  "key36": "3Y9y1kBAa6mbw9dsJqEASbqWJkEgKLpd1iKjFRHabn1yWZJ2jEbcz78SYsNjRghKWYnxRGCSY49e4Q7hkmK6iGjX",
  "key37": "3dqZJxcY9bS1Bg4NEfbyDkMy4qbxdbmepfNgtd1ziYuA6VA2LdGXibboksf2TMySQF6kTh1pu7B1sEWmgJpZUuou",
  "key38": "2HjQR5GEnW27Tt89aC5rRT2eX5KNzNzACkX2zCMHVNNUw9drQxXgXJZSHzFwSknWohe421wnJGgWrsnBvxrEFEas",
  "key39": "wvyFexm1sXDxP92t4gCXV1QViAcA9pYmRxBddjpAadbyDKeETuGdLc9it78mMuuzFJJZZEHDizLsRsHNgNbTG7s",
  "key40": "4kUazyNVs9C9Q9aFu2bG5N67xHLLE5gWe4TLcdefwSKGDQpoGs9MVPGN7JEy1c2JTNYwtR9EPXmDnwBaeWQ8Nbz"
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
