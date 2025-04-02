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
    "2NuxYGuygV3g1dH1izJCPcxqG1C7c2AL95bcvdCAUKhhaXkCoaX3g6ffZsk9bhACYgeJQGF9kqi1GgFHPdBbsZ7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mgTaLhGPiQUDQq8AVWht6G2v21Eg2dDQY47zxUBp9h11cyEA5oFRHyUvEcuzR6zfVmXfCHUkhcJkMuz1PoZ4zFG",
  "key1": "66YC1uGTKHmkxNaCXPnUMTg7JTnJsgPuaxvwJawDzM72f4fmbp4dJcHgoQH4H9YybQQMF56dGhKMo98gQDNfJcGg",
  "key2": "uA92EHJKR5Dmh9634miakUiNdJNdmbLq5c2eiffG3H7CBjfPFomy9NkqDuvAtVCg7WGX41Xx9JVmMyvCWNAnWvD",
  "key3": "5vky4ZYTmsErzV7j839EHXFx13PHF7Vj1J24GFmZuUnGG3t9Y2texacceEAxTMgQ6GdQqDJ3hgPNWzD2Dtg7vZUW",
  "key4": "3jmAqttFL6JdyYDvoReHRDXBMtx4KaGWe4XJG33aCTPGFTqA1nFk5xc3MNNztCb6ivHLQ9R4UPwnQa6UvqyJVEgW",
  "key5": "4xW61o8ov3fGTsFjByExwcwMPrssQEB3TYiZfr5hCmUixRb5Kd5p6zys9f9T1gyUYcV3SKtsauL76ZHG7a5jGksH",
  "key6": "5c3Pv5q1HMj8SnxkH6si4f5LRVJ7fJKzFuJrMfFrcLeVZQpqTqcHpiyKaXSksgatxErDP6vMTAJz3Ewmc8F48sgL",
  "key7": "2eoEzemuifdsfMXJe3kEYa8hRb6jfSUn4cv4AnPQ58Qt7Bc8MCa3f7kjNHQG8ta3GGsywe5yJEPM4CusQUuWH3Jd",
  "key8": "5AVS4b2xfP8C8M5SdBuA1Tjh3LqKx7Bq8GYbiWP3dqommWQ8Kxs9faxupLgHmxuTyX3Gwgi266KLBzePV3yJ6LPj",
  "key9": "4o7Vff2ChyJ8FW8nV8waAGkNXevDvnpGHeCP3iAy49k52uiwGtRn2HrURTMUmRujqk5ZemXNHjyokHbdBSjMaPc2",
  "key10": "5Rfbk9gyh3NmP29jcZRuD5UaR2G2zSxepcWf8H6PdTn4thQxpjvhmKp3amjBPi3ni75k2ZCXCgaEJXRBzKJBZL7W",
  "key11": "124X3fFGW2v2S9hAmTSwFzY6Nj2HtT1234fJcefop1C5wk71dYKhfPFf5T5SbEYXfeqeCBEKafd2F7RToyNkHXQb",
  "key12": "2Yzz2acJGW3eypCJiYzLnE94uYG48PJJT7WndRgb87ZUK8pNnD5bpK5kBVtmn3W2Z5rvXXSiqCg4mgbQTEKRbEmJ",
  "key13": "4UFnBumL3Y7thSmPJB71ozu8Maq2NVp17cF8iA2VuBkTHxZfXdh8scLWQrqX1CcPwGy3WBEssiwAggV865uA9Ng3",
  "key14": "3azaygbo3Kr72FtUJr2kpGFAt7VcYgmSKV8PUzAcCpGtsFsxn3MvCjcum7p1fScGd3NXToGHP1NCmsuEQ1zNikZ7",
  "key15": "2dGBErpbBUukge1BLjgv2S1ACXbiuE9t89uhk4cDcU7tDjinsipdbQJLbu3ScgRCNEbXAq2BMoSuPvEkHcapmEZL",
  "key16": "56kmPwHUAnt1Y2MkAvB6s99ta3541nHbv2rT9raUp2Mmw2Sh4C5KEtdrXdvzuJPpa1kZPhNqaFZAKfWaPyRN78kh",
  "key17": "3FhHvjoTpR8eEcCGShUuk5oQVy83gjHorC8e1qifdR9gQUPoPEE4ETW7yvHdPZbTRZKAmgWXsRmBMmDGZrvDvUTo",
  "key18": "21qLm5XvT6LmcgpxZnmXsMpNhdQnKBKbzns9kxfCSgQBM2TjxbUvGuEfuhWBqWkYHN24xxRHRo4hSiaMzjYE61n3",
  "key19": "4ERT8PLbxD6UbAKAnob3RMhHAfNpnqGfhTekNz7kUB1TGjSzHmagMpzNs5mYbZggwL6EtgumzFQzKv7ULTvHsEjp",
  "key20": "56u3jDEN5mR96gDsHm2n9DxBY9F2pge12dDCKoMR2DUAqvFFaVEoyNViBVruGS1dve4WNqBAtFsvPxKFmXE6QhPc",
  "key21": "4SymqdPMkasNV2fMULjrgVhCHC666Eh68ayEBaHYvBEefKq2Hx5vjDtBDjW9YvyH4KxKULtYioWNcp2JbZ84u5Ht",
  "key22": "51jMYoxdn4FtTyYeWqpYXDxRaj9Kf7Q5wiM8ehMaB33p9kiZiKUqLnDSW5T91KYy9RqxhHdod5eE5StRw7CWpiAZ",
  "key23": "3qsJP3FaN3KbRjvFmhCukzBnXtqF8SW9p7h9EmpMLb9nx24S2riNCUCeSrGTv6DRXFjd2iuhpJoM8F3AUgdcxa3h",
  "key24": "AHbyDgsxYNQS3bEdwUVCHHANJP4YYKyg3QaqJZPsxgwfcsS2dVnB2F8zJjDZDsbKCGNA3H2RFWdvTeucjEq7iJ9",
  "key25": "47n2rZiJ2EHMjNttdFb6f2AYytvpfmdVjjEJkGebMP2yBPvrdQLJTnKBENboGgpry91QG88JFKfKbtHdz1qaVZzZ",
  "key26": "3enqwQhHwXHgLfXEwSYmFRB2uCSAeDmyhxSZHujdQdb4vzvyiak37FNNHLo7UFcS1WgRxb5WrrKLSfxZ16XegpyS",
  "key27": "3hRqtdQQYaoXnAyPbCRL3oqofjoLTu31hHvSLwxdBc9vVUxmu9RQZibUwVjkgk8YbyVYTYuMw86yBvcR9vWgJUod",
  "key28": "AzJrS2yM2rh9uUo1rTSS2ksYsQgqLQ4xQ2GDWj2U56mhKCXsRbvzwuQgvKfYGXQDqsLL8fDrMRBFNAGd5PSZBPe",
  "key29": "5nC6usT1zyQ5yrDidydbkfjopmDL9qfMicrus13we712tc7pWn9cdu5SpsYmrfPTkdZBXofxXENDGu7kzHgpBZ3z",
  "key30": "5RD5XuU6ETfoqYUqrKyLSU62vnBLZmZ7Dc6KYTJA17KaKK9VLqbK898PYeqCmkSBtdUHVcmv3gFBVWRpV5R6zEx7",
  "key31": "4Sb2p4YbCVHx1nCEYnzpYTpwam2ZEFbY889oaehLp9KmhuSE8L6FUPqAuWDA8gv2krq8DPTAd9PCv5fDdb1cSbQb",
  "key32": "39o8ybvEJdZ9moyPqEhxJTn1Cyxer6S14P1JwTvZPhTqXb3YKGTDbeH5RrgwHz3acsKj58SJ2xGQAjpH4BwLrBgJ",
  "key33": "4TFT9M1URQsJDS7NwJcv8AMkYz3cTMjZxpi8HqZsnrzTMRWV1AXSAAAte5PphdeuvaidiWAd8tNCKnT5bme9mKtp",
  "key34": "31FpqZVmd8PjrW2zyvf4Fg1QH54D2ghAVxY3mUUiaLLDc76Vhof5g75KLXun54f7a32uuBH4ngLiDR2Kp1Ye4pYw",
  "key35": "5uieXQT7ZuLmgU3vUDD7wxEqNDLAwiAYfxKw9TT3shE34rGag4YeKBPLHPaS9bcc9CtsKxfhwm6owNoqWyrJUXMd"
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
