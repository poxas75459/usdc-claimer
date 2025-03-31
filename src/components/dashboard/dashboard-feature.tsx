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
    "4HL6mQWB9xm1uujEURDTvwy5us7u9XdAG6hU96hfuoZVNuzhxVauZNzmNCVKgwceC6aFHbBDdYLdPMUZ4xMAPRwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41uMy38BdcZ4vfCuE4UyrfH1oVBNELGGk1ajmXkBsDMa5uB95Wh2HeDzPvFeR9fsAx7XmUTisVgnfYAd79Z2eLSB",
  "key1": "aaBHLgbfDyAyohfzLmVuL3cmpEfwnAEqQEEo992EWAX65n7nDTKDHyNY6W5MUFvVAXZqkSn1P22dV8m4dQFgNKU",
  "key2": "LYcGLW4zyUumTkPjhPaza9Jf9f55fXAKk2VFWTgjgAH6szcya2mqVgwkNjtMEym61qoBgmhkDiPa3RURDcLJM2R",
  "key3": "4EaMuppHcNmSaBLLct1zbBroeeSjQfPsZPVaxEwtY6gZowek7AXXbuefuzB3zdvFxRtNGBXWLKRYmj7oqnbG9zA5",
  "key4": "547WYsyT6skNbUrQj18u4jWcden1gPPci833dchUz5jn77BGZPCibgQU3gaqfacTqRzm1h5ymyM2wCQQz4ECKCW5",
  "key5": "3pBkxyYigHCQ8wskxoDuduK73aSxemi41ZfqLgJn1vMqEQfDthW4mZ4DwJWTDoydcoCRBK9Y6VBuV2VSDj3RWD8L",
  "key6": "KF3xnsv1gCUJBCapvUhS9BFZb2vyFkzCTKKw5eCLeZc1hN7BwWsWTEuRCPNW8JMENaYBtP1v5Ui9NVr8oZyvsg8",
  "key7": "3r3qhhmFuiacz9JySqYxF328RB5r22GKkfzfgUPQD71oMMf6aMULKH1ZVgqHUJBVqq5G6UDGyr5e9xKTYzS5eTsy",
  "key8": "8cULvLPaNxAV7Q4vX9Hm7KeitntGeQL4kxgqAAH5y3Riq9dzRDzuvfQn7svoMa2iSnRPKPF4XAEaanaYxoHyUQu",
  "key9": "5XP6pb639Finqqj8v1zXUWYSjYVjjoKzFgawQHyEQ5hYzX4dSTuVuEgAsuZ3gbuhJjyGA8nWiEJW9NAiNdr5asC5",
  "key10": "51Gcr4N1j9aPdzxANXPyTNmfD8TCh2ipbTJpd7twoWwsxYNh87u5TmVqzSYSaZmcz4NwUXxwZ7cPwx2f6gvJa7p4",
  "key11": "2xTEASJ7N7DXMQMt2jqA7ihbS1buevCHjuLZ6smR9vqDZwqLZE7Pvfn4CGJYd8fMoojmnAh7gqW4GTNszBS42A6z",
  "key12": "39jr9hKHiJGMuyTNUcbUaPDk6BoE1q7kqjTkaUMQ2HtRYSF728BCsUuyeJR8i7stMFude6ob2AizBw7RCDUhkCF7",
  "key13": "2d9MSHoPjFpoEyjzh5xUfaoi7cUoRrNs9stHH2rYNhkxXpRo9Q7JNBZUy3o1DUGZNiLX6G3JznoFdxvCxRDpKXEX",
  "key14": "5iiC4Z5LdXbDWjuArrPdeoG7r6D5JsmsWWrrbDcGrpGB8mV4HBovV3H94tcFyn5SVktttSDNu8Sih8XjwcPL9Mnp",
  "key15": "42fp93L2DGmU7qpcPH8Lk9UYE6VmJ9xuwbxX4x7Ly4kuSbBdUeHVfPF2vqfAur1Ss8d3oVkhLX6LWaUn9u17K9Zp",
  "key16": "2m7g8uewLDGAwkQFoYA1QhXiqiDuH16X5htzHsc631MBQFqsPYKreZDGpaAvYfzybicLRAFfEZmUnXsa7nFmYJzd",
  "key17": "4CWMFfADGz4LpvnvCMvnYbu1UXBamiqKKwadnQncYRpZggcX9ZPW7FXaXVCxbER8HpgQXVU8W5qMuKPhBVemXYjk",
  "key18": "bjegRVAYdecUf2zWvSVJMxm4Wha5bPuReX5zKfNSKWeMGUuqWYZVoHk79kptpj6cCSE27syVMrjiFHYFkQmhsjW",
  "key19": "3ErfEoXXqCWQ5aHs65gJzvTC3Cj9iJqgdfxdRh5WxqU7QeUpPRCVkmjFJ8JR8AxnaR3k8361vRH8qokak417bNpU",
  "key20": "23XnMiXSDq5VHmdc6iA6dgBUcCLy7z1ouBh2cqgmwSiJNzWYxa1fnfJdGAKo6zvgWiaQFHNq1yEFWygTAu62Yz3J",
  "key21": "3T7g7FnqzB1Lwvs2pRQFRKweZDskR1X98UN8ntpP25uQkzqxR2Y6eW7v9V6Bu3DSw2sizUdd3n8wbWYhbixmXtQ2",
  "key22": "4nMwSCyxgJr319AcpHB7pkSDwyJLLSPF9r4Ab4guHbyyGuavYHF2mPUFhvhT3gnh4TyUVf8XJ8ESGpckcP8cqtFm",
  "key23": "47FsMYFxLAvhGmFmdgoJcDbx95cdGSqcAScfJLhi9goaHHkTTtFhGVy2atQKkhJKpumCgRrLnghCDo6D6uAWA4uT",
  "key24": "5xzSCFXqSzr2C744fNyM5WSAFrXV95kdzJrCjTof18xpyxJ7LuWovkJgtukpLk9vJ9nfFF6UR9UVdWcpAfBUH5JS",
  "key25": "3d9YwpnWfSB5RPcrXu6o5P4vjjdAnwo7HMDTkDQA7YDoodnLjMJNndWHLDeJKqZPkPJeFPrcNYvmiJzayLmatK5Z",
  "key26": "37uCDi6Ntwrmdqh242iaJTFQPgYEN5JAJfdFTNgyEcsBELj4TSjmxqEqXQGs96DHxqWJ1CJckQTH3ZsefSdVUE7w",
  "key27": "2SkU8x9X3cHtSUJKKhc4T2hWxUaa2CiNHBSMy1kNQf1ayCb5oj2egPQGjU5bqLdXVfcWkFE29Fp6SSFdYvrrocs9",
  "key28": "64q88k1s3fJyaFVPphJi77DzvRMDf5aJ1r8wwRTYCjkM33Vp54p2WgnGxvHmQdUsnoagcnNNow6chc9rHdSe8ePu",
  "key29": "54eZCcbnvTcMusAsWCC4DpqAbynwVRQqYN3EZVoEeME1mtpziBW5gA2GFja9fVczcXrpsxZJtgCamVMT7kLXrjYY",
  "key30": "4kCXb93zjG4fDQ4bXgZ4eKG3gKCpguBj9nM9VYBDrMJQ9Ev6ThiHVDmVaHHRBiA1m9CGesh2QuY9hrzt6uPsrkBp",
  "key31": "aqntf5u1i7gvJoBBQsVS7RQUqEJT8zhKj4MoVRedT66LUNA7ea9JeHkL6WmuFL34STqGLSkZ1EZWHsMKyFKUS9s",
  "key32": "5dkHbYfvmfX8AEeUjaAH2WmuHUx687Hzmw9EDisPPTNVMiMuZRAhasWKZxfi7jTktjPLN1Qj3xmGppqYHRd66NTA",
  "key33": "5qCU3z6ZxBxcTufDqJh2GLuGznYsC5Yu8MKKUJhNV16EmUSrCQRYRfTWfFBpjo43XGaLkpjRthsig9JbDAaPobRL",
  "key34": "5snRjDMJazCmyJrUsre1AsjiPA8UNk4ZVn1xdGnWJj3xfFGeVxRxbeNBnZPqnqJShc4fhbAPmaXgut5aXViEau3x",
  "key35": "3vCbkcv3Bibxz28anKDWZK6iQqajh5FQxWKhYkuQAWcTyRfKPVr7kG9jVGSReFQ18aVF7vyCdfxev12uUxwvZ3H1",
  "key36": "Qk3bUc3gxq9FrumnsEiUL3G1SCyZEw5VVG4vQLEtfFtxzG8vGFwUzRBBpee1pEvpw5ai4MuBGiEAyPN55ZJ9Yjn",
  "key37": "xeLMyxDu2u2exUJNN621Y2eVUgBJzLD7HhvRXD8Shk5JXQWHEqqT5vf1iKkBhqPyYfsXQTpemYv2omE7qTSWWkh",
  "key38": "5RpHU1a3g6TtzZRSNwjZ617iRdQXTiR4yotgLVv5njMQMkUN9rminKC9WwC4ByzL5JeiTVDXPmWNGTpgeJpt1FQm"
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
