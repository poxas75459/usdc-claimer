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
    "5HoaCTDyKyEX8pqWebub7qqWnJ5jCihNzJaUNNidgzELrohREwEwEzvdebtknLQkpx212aEFHYeWhGBwfEYyjGc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QMQsTLTyX44J2ib8QVrTpazWarEbNic3EPPBscedR5eyBiUx7kTtZeDkBm5M2Ni4VjBJ1v9n5pTjtkRYCuoZYNf",
  "key1": "4Ctjv82dCHDh7eGm1uSPtkXtSmG9Pbg3Eq3L49FnKMs8bsfDPY4cTimygXwBNb1AJSs6VwyeHmaSj3CQbqHRcNmP",
  "key2": "2RAUVdKgVdbtQDHE515P4BkWWoEBuBwDe2ApFahU5GqLyKfjyxh29dMeYn3bw7y1skeGr7majxJaXPYMBUugAtMd",
  "key3": "5CE8bFrqLYEKAJi3JEGRq7MMwtFfDvdafU23HDGbioRfHUmAegK2SvWRFkzLiSe6wFef7Hrs6rbzv4LK7NTvRV2",
  "key4": "2TUHKixCed7gXNNpa9tjoTTfYXB5ew1ynDrr67HKyvLzyaemMtwnf3H543TUDbAvK2HLVhUKLYppG6EWxNmKniKc",
  "key5": "2cqguVU5Y4ooEw1qNhErAEWftJDcmwAcm1Ar76pVDHfMJt7p5QRkDkL3opeJx9QMKpcpjVKrFRbJ2nV6aSvW9MDE",
  "key6": "PBo3BTDvWzS3PAb9UzHRXhRCxQcDTqQW7FSjL5piSzEt1SGVAGgVpvAAFmKeohmtX4EnsNQxsSyMqCGfJT1T4EC",
  "key7": "cL7UqwE3DG3bN2SpbnyHEKajsmUwu3UAYxRYo4ghqiE1SeeQeUSNrm5BX4MtvW92ovfwcbPLcXPLpdtN4w6BBad",
  "key8": "3aTJ338MUjYoHCMNZfZUdRMGaHAGMMgaaLSmdmp6AqYKZ6RKhML9sYxewE3QmYKw9CTcQC6xbr7Fb12bsS8vG5Sw",
  "key9": "2Ykw81Ep2cf5WrYDbNQ9r3cP4njxp2CutEpeDzf9n3MpZV3H2YmXm9s3kFMVdkkvLEzg43xHNaGuKUMUxmRNoCNS",
  "key10": "4RDsoaHqqQwS4hSnqWU3JfK6qRAXs2GsNGGSMyjVQTE1dKgRHgjaFagdgYADGDHZzqN13MrLdB1Swn6oHy2aSLs9",
  "key11": "4ge6DixneG8jnjpoWvUEbRtbspER4mXGVZpqDBQxeHnVHXxuC4oKzWU3ZNKpsjQWWAU1687SAe5UDzsqe68pM4ZP",
  "key12": "615aTC5UUPAYGWcYP6HoQKcnADZurjN9W4HeRMLJh4VsmDi5vDBjSb1o1UFHfxqeo9NdtzdEgaLjo91wPspgvTU4",
  "key13": "4MKs1rhDhU8KZYHAMJCD45To6NFVR8CSbVHPRcJJu1KBEzBAN62hDwsAMhMdAtZjeFPouPY3ySijBhbpRWRTG49z",
  "key14": "61zMBp1hkzpFBbLSYKtWKM2wj13Vq5p83M6XWDAAAsco5qLAnwYwvb6g5MmZY5VBpbQa7PjUrhGkCW9qYeUoaDuT",
  "key15": "2zXziufXGFG3Uj5Pan3TjdwgHAVekNTeLZpPsLNXukYzfE7qm6gtuhJNwavHCnGpWsXhaoqtRamZCMCvbgnsMHAW",
  "key16": "rizX6RXmaqLx8pQzAyG8KUAhcTZfm9YGiyg3b6Mk1ce5WuPmgCgnu71aw88pavV3U4XNSQz5jaTvAKECRBj5mXR",
  "key17": "3LnENjfCxZBZtuZB1tAgZAs7PykTyR2RwejgFpAjcTRZxY8uvtJdjYnfYo4EF2mVG3zyEwTdtYwRvgUfwWT5qw5N",
  "key18": "4SujJryyWghXQSrU7ReQc4EmeywmVw4GSFECT4ywYjmGvV6bU7DZhhfGSdTJECVMbxjC2QFkcLKq6432DintmHeW",
  "key19": "33eVE1z7z9BseoAaxaPYEVgAcFpZfg5HiwW3jK3SzSBtpRjL8tRX6fqrjPPHZ34fxzvAo6iM2qScPVbvTHyrGVze",
  "key20": "66XuQm7AaJBZ2wRd8rgZJp7M585tUxyKeDafAaV38mHDyjbxC85eNTXUCTXsuDuwcj4xk2zQPdMMHyYV4jhvkdsR",
  "key21": "53D6Ax1TL2SvFwK4TGYrZgGpGpBRtuzkC7bMddpz54yFwQ1MYpnxD9ap3yXqotq4V2N8ufmzCrYFfwS8jsMfxNQ6",
  "key22": "B5bnt3ZPVUX9qAFe3CGa8Au21Q8sLWdvdFm7xj2wD9rpF1WYYoQU7PX4FEBq1No11J8SQMJ6xLy64njNvZGSsdB",
  "key23": "5gEQtSpZqpTGtf2gz6brmoEbzV8LGYTuLutvqWBZo3UsoVJBGCBc8AmGwysTaj7fSmZjNitYKq92ZYXK7JqRizxY",
  "key24": "4opDGHASL168UYPut4d5ngQRu3tG2GFWtekYofuSKyXCiJcyZRwCQkssefUwvNk42x2gHisVo6EXJCa2oK8HpLm4",
  "key25": "2H69bgjvbbpkrwhMzkDu7gNJEjCpMQ81FS85gGMEKogF8TJVtYqUAi92Vr9bq21kCizHX5Aj8AXnBnTEfqsQMo4P",
  "key26": "2KAuP2zD3ntWBATCo1Jr2APfVDeyL1aQMi5aENBPwP2dGCkVD4xKchAKnA8fUVS2gdWZg76nC959H53MK47z4BmB",
  "key27": "5DzbeEJKTUPgJzYUiA7zw3UJxF6H3oQh2CNAzANkxDngJYJvw7hEw7eRtRsXZFUHJqERHP2SbagdSkyGV4NmdgUH",
  "key28": "5xvwPWx7Lpm8FdjSKANbRcX82HX2BT6pmckQSKrnoh5hA7NGPBVvAvnbNBGcAcqSDZqPgFoMH417F5ebUq9wJNXR",
  "key29": "4RmEdZXsF8Zr6vAKJYACCjkfTiHU9yJXExzvmg3HV9URQ7RgPpmnUHFG7NoDBXJibyKJbfy4Pci9LFeZDkjy36NV",
  "key30": "hbcoq9nUmYFfVx1yB4y6FG2UDNvLhh9HnYfKqZueFEuPNXr8Ar4ijZDLqA9ASvgi85GJg7cm9vKH4sMKXE61Dft",
  "key31": "44ewN1wZFtUNziUh5u5XqCXNjHkKh6KYmmhW6ufPoEHsC5wwrpxTvMBdHckMd51ega4ZrySc5jRZqS6GyWmRSGtK",
  "key32": "2GVLZkZVbBGAUv2vLTx725Lihg8G88XwCvsNqPKEkZUdSRRbzxb3DAoGFYTqaXKpiy76EKAFqF6xYwDS2RUvZACr",
  "key33": "55vrwZWGLvdxcmqLZobrUYDix1WRzWo14q5rdwDHK2S1bFaXwsqbFHcNYSx2kDXrp2XKZFKyYLT7dkf1sziKRkZL",
  "key34": "4MUCrEpkRDz44ytEFXqhLy8i1Gza4DsVS1DZaLKjV2tUG4Gp1txAgr6UtBuxfNZo4ya37QzzchY7aBD993zHFGbm",
  "key35": "3kRHQotGr87wzV4MGTNUGsU9rYUasn9xNkfh5SkRQ6MJpeb2VuLCwxXteUYN2MaMHiYQr8j1bs67jSfEYTMJBuK5",
  "key36": "3EdUm8mPB8fYV48Uh2xx268iLoGeqCZJ4A1Kfsm5XhQ3VGoYUpdUYVfvqdNgQC4GGrJwNKwyYUd3RbUYq8xjXH55",
  "key37": "4c4HNuE5dsy8eRfBxnK9g831JziHxDjZVgh4P1ritqL68Ci5apHLQnrktf5DYk9phM3N9LMa5iJhyRYsJwrGaEqJ",
  "key38": "5iWHAJtNj3t6CfrpK5YYfDXqLzQLG5bDHYJPugCrCww7DcS7nHzJS8Zm8YKBdkZBPA7xjV2wM2k5vrDDorWCxtL7",
  "key39": "3FdxRFfhhSLhmvqqrXG3cMJy7Apa3nQ45K49GW7Bswt5MgrLie1W5tSL8rYBq6LF9vZCbjHnBHbygtRp99uZXp2",
  "key40": "2JsHrHya3q6NUUM7876fydmc6DqmMfXp61anjGh7qFQbmjyskuPWiM993zf8irQptQxHPWaxnbv1XSoCzUd5J1bg",
  "key41": "VWa3rP4gh4nLbefRED9DtPzbY1UqmZzT3zuEQHdFJAsfcXFesEXbBDRvfRUugAKGQ3sBajsTXp6X5zXunNWDPQu",
  "key42": "5RfZDnMM5Qkj5q5r2wzJeoxKYm2E8o8T1CjtR6CwLDCt61GjsMyMEC6D7KMjZdTVcxBv2nSt3jrhqZFG3jbNJCtK",
  "key43": "TYdYs5Mra5mvNwtUvma2hDftPoy1JKh15uLrJwkvskPw5iWShtoTUaijTjRwJ2hTXazmSTvvoef5fdHo2JoGgdS",
  "key44": "FgfDxknWYB5WU2hF2Yg1Y2WH56KWNR8jU1emvXxtKJa37VVP4GxwSVoVnaPSaq8AamWA4TEvYo6yxp4f5NoQTqW"
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
