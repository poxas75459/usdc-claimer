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
    "41wM5Fr4nhrVPzQ1xBWbKJUg3Yz4QWLqFbHCVhidXk2B93arQjfoXNe2TarfBSD8wY2H9HQSaiAFczyKgc96wPiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KF6rsMu2sdn2Ar3LdpzEoEdaQJ9qzrG1rGvbLZMJZWf8nwFDVRSJidvcd6yW9yskvw8FC22m2qvppNnz8i3dBAf",
  "key1": "4y9cqTMkgZuX9umjncKEkuHhBbdHD9LP6wgibNQ2zH8CxXUsyqd5SPZKJ3x97Uz7KLJNT5XPdakVog5Ty9bDBJry",
  "key2": "5pMjNpftoB2f7S2DvdWkczxmziFWbiLKtN7pUTkzi8Fzkzxs9xeccpYBmnSaGFqPDaYzQSioqrrzre77sGnW4ouy",
  "key3": "3EhNpJi2iS1eTTfZVPomMMbzfwJpUAnWQxmrcwQoK7gHfG12hLE71fSkArvJcvN6yW5B4eep4vhtnx6Lsdbyi5DH",
  "key4": "3Wk8oRgDpXkrJqCkGPPZEEGNt36UndjXfS3skMehXzgXZwy4KW5W3BXnLa2wLNNFRyVLee2CGA2x7TWUcNLC6RSz",
  "key5": "2EdLyfhPb7rFrRZ2G1JHUTU3LmtNpd2FHxkbjHceguFyt3EjQNmB6hKEzHQ1YU5L6fGuAbk5yDoa4pPnWPzxX3QL",
  "key6": "5M6e5ZZEmPiWZSvFmKTJf19bm719xompurEqAZ5nENS9kjrnRENcZJMt2HfmagRVdHaztGEnFEeAyqc3UdtAk5oK",
  "key7": "62L7yK1WFj7tJD3C3CdEfUveiqtUZp7yAgcDyHCFeksE9zS3wt9SNgf54BEdpGMcGdgBSk1z8VvYXRXguqVJWxbh",
  "key8": "4U1dmrBWwty3kYnsF5DxVhBoMvm3DiRrDSwP5apQTdhGkcJpSfg7ns27vcgmc2h6Ba16p6qvujdRRNDRbcc7sT1b",
  "key9": "4WHsqWFvTtYjUuAzquahf1x2RcozQgQQDbAi48zhUrgzFUYX4xLDdQeEd7TV3PdhPYXAN9tqwEFQQwmLAf6w9JJN",
  "key10": "64JjQUkoctqg1Z1r55ampo3zVueezF6HcTzRsLh1K1Fx6Ms7HQFjWzD2CNLywAaJVRCSyeq9sjANDXgkQ68iNSre",
  "key11": "57gxSwvrzb7Ld5H1AJqU8M7sxvD83PAcAk75mDecLiFK8QXncDfvqbyW6dwns429wXvs1ZVotP1DA8NHpYVqZTM9",
  "key12": "3Wbvvz5LYdYB43CUmiWiq4pYG3jj66A9G3MtYzGLgHJhHdVVDqUo89owWYbKfaPmHNTvyJU4WjGGsAU7BUUvFxZT",
  "key13": "51NaEv1gSrW33ZxEWYz26Vj71VNeT6rKePGFgZ8bEkzK5s1RN8B3XtR2hLqXAr7U69h7rk1he45nww8pNFFunpsH",
  "key14": "TCu2KeCkssRqyTxCNsRQSaHJuZH8SE98wgLzVGFv35SfHpQKuQ5PrNa8TGSWNqP3pXUUzYMfijTo2CJU9AviAvq",
  "key15": "5B5zrkCpws5o434GZrt1K1N7ErGzSj4iVz5C3o2sDT4Dt7zi9AEY3eqqeG5fq8LrvK2xY2JNaCz9HJf34nrGAxh3",
  "key16": "4JmVyvuXfF6QEDwhgrobbmHFfYu2XgQ51Ar2YoqwJtahYMc9kzLjRHcjsG8o691kWSV3D6kB4LmP4HUzzGkXbmnP",
  "key17": "5HUSGB5iijGqfxfDVZsuqj13qM341DU5GSf8atA8jvqqtyRdMhL2jkdZ6AUUE3hMj5XQ9TGprEdXoDnb1RVQBmsT",
  "key18": "4t1tkgpt6w4UXWW9jEHF1snmptVMYdRfF6niz18igWV5Qqs2xvFsZ6yY75m2qhhu2yvLXDZ3oKhk7BvXRhG36jNH",
  "key19": "5tCtnx5VPMsgsZjm1xUWNjtrLH9i5B7nKvfpKCPee5pm6sX9fwbiwzdGgnBT4GuAizgm2mP35TXEN1g2ufb1ter5",
  "key20": "3ex7eZYmX2Uwtgax4Gvk7ko3Bys2FjLgtZnmavr4EcgXN65AL8dWEd2H5us4xQCCUxUoGAjF3BDYpbwhM7sP2LdB",
  "key21": "33JWkKNsZdeSqs7STDu5AcvkiWbo7bdsEFhcTLJ9D6nmeRy1CHkJyr13UYg3kxu1MrWghuygoYrgLeSyiRABFwP7",
  "key22": "2APvhafMvHJuGwHFUqCob5bVPYE4FgDWTWc7veKsNyitiFsvNX1reWi8cLd8NsXwVxRyfdjhJiDHuaozByKwypCj",
  "key23": "33ESoTFmKdiMwqWJckoqwPagqf94Kz9qJGQWkz4AgqdKLbWYhU7qrXjvUC9ZVD6qvbBxiRSdy1SHRTSfjKpqAvGN",
  "key24": "4zf9MhzpUJm8zp8bo9Y2x6iMe9tY6pXEbyr45jPr2re1cJvpKYZ2tyWrrEQ6tZ4hAg81bWtqQ49o8VvsACeP15n9",
  "key25": "4cnoTgEmBRyYuFgd9JqQzTXqFA2Gho9b9edBPizovSqCvJATe1CmucLs7fWbcSvivJuVfv94fAuAF2LRkcYTwnUM",
  "key26": "GsVwsUDLtKVCJoPSTchc8A87fvsqmzWg7xyvGAq3y8FRmprke7jPCXk13EF1FbWwCuo2mvHDmXwp5awntKdLazh",
  "key27": "4zZNpeegbix2fKJP5i6RrmALXnQUtxsoa6s66yHtUhW7vTZLfoFQEcbuamknngb4J76tUsKZKjfi4vQyhbsWrUbK",
  "key28": "3yVHqabV9MZPWGZaAi1Xv332aSGtjfivBpAuePPDvYMsL6K4G8gzozm8GiabpTbdSvbXEUTy9skW5gq1qGYMgqy8",
  "key29": "3Ut5KkmC77pCmVn3DKv65ape6KDHULsegqGwsaMCZs6Hqf4thPSuc145gt5zdnnLoFiiWkAwAF5DXCJEe9QW7sM4",
  "key30": "UBkHe5mvigtDvVP5ZNk7nrA89mnj6AZae8WsdK2piieSQBsXjUK9ABGsjYeYtxpwksmC8PSTRGYhxXVwL6cYpAK",
  "key31": "Zw9JTEoLWrok8SfGKqrzMkJonspLsEL2VZdt99wvnRV3YzybLof4XL58kZ7upvaqgctRHYrBFZsKLyf8TnD4k8o",
  "key32": "3p9xKVemTfneCpJR6a719A8eWgQ3gqMaaj7Bx8gBc8QRryi2g1CSRXyGpQ35riyEqZMncUiZ19rME9izjPTbouyD",
  "key33": "JUfAqWE6ptr5Q9TCFN4aRbfw9RSY3F8EdoABUo1g7UDW393K7BvaZ46AYTZvcH4JHGfKBTRHT1yDZGu74YG5Ddz",
  "key34": "wvPLqSW1XcEnm7wTNtsH59pKZDNqiaztyTURAVzR1NXM9tcQxzWZoyLR6bTwN2yD7Nj3c9c2fESbf37Lsbv2bsN",
  "key35": "PcyacJaJxy6EtZkByxCxtSaa5RJSLsACFwWxPsxqe3Hs2RLwze269NsUoqTb8vQ3K2jDGuAerxY6DSxxr9Reww1",
  "key36": "5nLs1LX9BJVd2SdMT2o7KwYdLXHYpyXkfNt3gDUpd9S1ZiDFmAD3xEsHNA5eetT9jhw1Y9uTFzqTQZ9WRNWH51JF",
  "key37": "vD4NWYWYkoMPFLiD6TDnfWMyZkdUnFxAXNEoEijccgzMJccwmvvzX2BptyUncKNP7ivABMijPRtiW3ji1NbjoGk",
  "key38": "5L6EmF9ppJx4xUGNsm21y1uCRmn2erDwi93kiHWBcqNmwjTz5aetU2kXF3wnRrGF9ksdJXuZFaR31DUgKkBrwhEP",
  "key39": "TUjLhMhr9hX3gs9xTid4Ar9FbrH5eSia2Q1PQAT54XQMPc6Xwvj3fSnYaiZmt9D7715jXsijE4eyLr4gZ2fzN7N",
  "key40": "2ths6XzLmfDNasW3tYJtQGjqTPACjiLDzQzwSsuSZh2DfSdXNxARAKBhgS5KGqCkp8U2zrSY5eCznafZUEWPwFyt",
  "key41": "TNMCfru2jVd3PVDa5Diy7fhaaPMkD4SkXdj9rK9B4RZetr3PxPfQMaLK2FzrMv3DrCEic26xcHCwGwMXFhyCZ8Z",
  "key42": "5yVEhzF3F9kmzsY7Pya5MS1vHCnmFqFsXFBXmyHw2Kx4eqyf4YJq59iyqpQBsg8dconFCkkyF6T5dkMTNcZ7Kjrk",
  "key43": "3SNmf2qdNGCEFWto7KDfPyzXxsD9EUJ8Wo8nzFgNgDkfJvjzeHBafH23XUcWk1C4TSot9Hjti1au6wjRBqRvHV8",
  "key44": "4PxJZMChZn258GtgebJbWYsvyUzdi2vjjRNAbXnLXcSvUPbTkzHw25Bh6aTYiB32Ukkb3jeTj9o6MS4G4oL3gsC7",
  "key45": "4wi1TZEGYAv9Lt5VnSL91FpFvNbzJyaKqDFnQTvhX9S5keMLR8QQFR2byy6Qh66h4BeuyZvPK7Tj7fi9pNkNS29q"
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
