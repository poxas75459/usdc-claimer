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
    "8sL7Fe8SFT9h1BCAMYT34B77jhntPqgh3JHAzMm5uyKJhf6SVd1GJqN4iqfj7jSm1T5mbT8AbGva3tCcWY6Qwri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45bkGsAeDKqNxHxhr6GfPKbEKNqdP5UaSJoQpJogz9Cq6TgS4h2Y9jHypyF95fB62WWHuM4HJXHUWDewj7C18BEb",
  "key1": "4WJFjhBnzUmTRZa11Wtc18DiyM41QnrgDDPmgNNUaqFQQDGJZZae6KwJzBGa72oNcTUVESrdFURnfDxnV5G56mLf",
  "key2": "21VgE1CNpi22yP69QPhLc39CAWY8vaR8LRtUksR84GPSmKS4f3DuX61WL6rT9ZDHWyiTrDr173KYQyv81XkhBJGB",
  "key3": "4oRvm2G8THHuTA1H7TM8ByK7X9vhqDKr7ZN7o3aCwihxq24BfYkfiuevcX86yZwg2DDWJzJYe5z7ijsYaciwnqCv",
  "key4": "qFNYunJdggJHCy1E8wDFHc4J2S2bQJ5QUdfnS3xfUna4pvu4nhdp9J5KygTbTexXCSMxDSvkdwr21SHHdjyWAGg",
  "key5": "3xeUNbG1hksGk4wzMMzHzWXoxL31SYTFgph1Jtp7Fhy9jNWSkuyDe6yEpghHxGt1kySTuHSN25ZxWeeUHnujFVnk",
  "key6": "5vbyyBWtFvYtRXjWMGJthTBEvVXqDqaDnWLZZVBugAdjqbXDUV5P7nyuVXZPpgWgLWTEuZdb4EJ37p6DgsqDbgjx",
  "key7": "3o5ed314FGakS7Pz3cDcMNuPk5zzoHZBSvqWMLdyPLHqp8f9EsLb37EZ68tacxM1NNk8ob6s5hjGBjPqV8vEoS9s",
  "key8": "3mvYHZykXM2TMFpNWRC88xdKC6h2EwTCjBTwpWEPbhPbmJSzyYE3XtWWDLSh28iDCwNVTeP5ijpiBd55kABTxYwd",
  "key9": "3sTEbQsL3u6mLso61Xd1xzJvGSMasHNc6ccU8DurmQPupR5iMYAGky4TrQWR8MWG8bYUVaQcLZxvifyP18k1Z11Q",
  "key10": "2mAoen3nkXkJsfLzLW5xcxsnEL9AGuVPJcoUp79ukrUTcuGQo18inrUuq6Q36nHbYM2QcSqXqZyY5kBe187dzKqw",
  "key11": "1Q6xM9J9LttQTfXzoo8VxEN8GPpqtzh57jQ2Dwjx98tYaMdzoj4EzFbrk44tZxbpd98DpR1GvDVdmNskXe4WNZY",
  "key12": "63rwVzFhQwiH4W958Cjqf4daJk9EdjSkjhcnRFpLQtNfEaRWHTG7NJzjJHH2TpntF7kT3ba1GEpUK9k4KSNuwib6",
  "key13": "2HjgQBbgi7TBEyAXM1AP8F4BjHRuyen14wtAfzeDBxZqpyaJjFjC9xXmThv4BNMGYf9sytszuCBqYJJdgHZSn7kD",
  "key14": "4ETNvxCcRaC72Ny3xh1mQwEAWMtNwRqXp2MscXXSfRYgepRHvLRyruEd3uictDhDfEvXYRQiLVqN85R3EdUenYEs",
  "key15": "3TpYp3uPvZrYcvE4o8g1dbFGeMnYH53LTVL9Qdp6DUPBd4KB8CivBWvbTWgreuZjpLpZexFhfqZuo2DD4VTrZvmn",
  "key16": "4xQtgLHsYGZrtGYLnVhpWFxg6G1kf6Yom3rbeRP8vNmw8eyG4Yc9rXt1H3G8QeZN2Big3NT2UbDCxUyVYWXdtDRa",
  "key17": "2iHg2C5cw7eD8GFvGLaVfuGffEErwPMJGT125NmtDSZ13ByccZCKqcpAAaYjMyDXdmddtNcNUZGdDJrzLYtRzpit",
  "key18": "38J8bRtuhJPegKRAq1vyHb4Jc3T7Lghpn2d4GzELypjFYhftxYoRM1MXo598vhWWaKpaH3Zfh1REuKrtEVCX7Cof",
  "key19": "4Tp8qLAjmn9Na4ktj3xZ7AGkpSa6HKmowtodyyMeRCrSXxpPULUzGG3kJQKvnp6f9jDZpzA7C7YsiturJ32xarJa",
  "key20": "796y9kRCkuWf3NFjj9rzHZLGrecBiooBQGTaJRBs5cSzbfDW4BsDrU5aE3KXLVjAHkwCdaPZLxUyiDpSP6bGasR",
  "key21": "2aQMG3bkXayKye3TgR5dGWr2TSQBNZPPznDr5AhJ9aUTASq21G3oXAm1K2Rd5JnzycGM4Jqs57PNoMcf9MW8hZ8f",
  "key22": "4Kz7NiaYyC6f6WLWBFQUyPRYicRuT68iPUvCYGp6AwxYSnxVaRj3qi4eNx924MdwCEWkeT8iunehTJTrwV9saY5K",
  "key23": "2SygWn8wapEXxgGDkZCmswM9Ps75f1VfAdcShEcd4peB5iDja3LYC2dfZu4ut1CVwRRsACWLzzrDNkUArTx9GKwy",
  "key24": "44qXPrK7GKWkB5tkSez5mBkiwLFiiJzUVi5kNwUcy15UFt818ijK7TtF8vdFRKTWfuE3Rj9ztbfE1CBTxwaWM82A",
  "key25": "5YwXqdvfXsXbJ6CHNMnTKUbT5DamQYPU4tSNWMRRGQUou3YswzoqhysUtNajDT6uJdv9YxreK4xRr8BRhU9SZ5ZH",
  "key26": "iZWkaevsDhSyPQ7V15dryyLvAVCnsrqEdkpobSX6Bp5orEH762a3sGHBtJ5p5ZtpNVnRyUsGKTZExH8WHQprZ8z",
  "key27": "zMFVZZ6sT9QRv6aG4u5auEs5GFLf5YYNLhaEAztXY8z3N9CrmdgMUgkXdFhYURDXXqd24AADuTiC3DWUp8rZ3ma",
  "key28": "54AP9KZJs72jfiJk7L4f8xLavGDMcJKCG3CKEVtkkJDuc63g5ZN8F8iF18UGFcgAPceqkHymACUP4VdshebQKxWW",
  "key29": "8keFjjgzqxP7Xotex38XPMq9GqrYJ6ggvbDZQsCdjtZMDGQ34w7J3hskDnrjTestFuwxBH39Ww9jVFg67iEchAv",
  "key30": "2maLMFSsUkT6KfpXPKE5DToQimWZFpPzUP6E8FnQpv2NPSrNFiW96PeSbBWBH4zpxYGyd8qpgkYdtPdYW44qzSxb",
  "key31": "4fHUBi96aF7ArysLK5v4cpGsa92aPhct2uEQFcYUrjAGs8k943sSdmNh5pS1axde97AKH1cjBm5K5Cpfrro8nzeE",
  "key32": "3tQqjLnu9ZkuJRWZMDW9jUWyxYrtJMY813yGHUfkkZzJP2fsk4SY3UDnarui7ZDmyFeR1Tip8KD3m5MZ24R1H4c7",
  "key33": "392FpS83xVoZXHX2xeysXJGLxiV98QXzhzRdcXiaad3sNLFKX9VeWL33VoPKna7CeyokvaP1LeDJhZtS3pfVRkLD",
  "key34": "QM5SLTL4icKFZzVEDfmMTTnmWiffww9sRqQdv8YRqmfbphhSYt53EbSaM3FzMRrE3fJgtUZEY1dXxcf6rfZxgxy",
  "key35": "2Z1ohjgkkCyxHzzNy6SaNm93JEWUhdFNTP1EL3FC6LQ2GhYj2oWrE665jAXu39pUWooRH2QDQgEtoYJWzEGhwEGG",
  "key36": "5bCz9KgvWDFBdH9XACWrm8orpiRSWrpyvHyWroJYBFTWkUzkP2JsJVSfUzLnDzCfChTEMJ39kMk7nLBAfU74getx",
  "key37": "2iWv8by2VyFDtjXt68wXwqzQVZ69xrfDE5z7LcQBNoV5qzj583GNWcW6NrtLTMgPAq8w9m8kW6nChJyVE82YLZmc",
  "key38": "PbzRHrK7QScnKQHezEMB4J5r4u9g13xJjCRpQddsAxDoPWbaSFF9r52Hn3QVckfxL4GtwTXYn3z8tBV1kuWPhrr",
  "key39": "LBADyHdhLA8VV51SSkT7P3CdTg82tNZ3MBNbgQXzamev58GqYGiahfNaBcg1wKZSbcPnxXm53Ec13KBtbRVDuLR",
  "key40": "5JSDYWfFUf9rSfnoinSNmcr34vpTWz8w1TAdD9Fsmz56i2Eni7jWvLbcUKPfrhoocqFUnDWJ9247sEXVDiForomP",
  "key41": "312bnuHpXpzGTj5v4fHUNKsQykHmX6vkgWkWPg9Ek6bFiSmUqXNASdYLbvVi93G5fPUDtJJUtxct4qxEvQZ8YpHC",
  "key42": "5nBMTkRZC7dszgA4h911Px6no9JBmoFNdMKYSZSY8u3JNbErtLBzqHjhiN1iUri7Y3Ly16gzbkbuJVbNTihTFQeV",
  "key43": "3ZBWEvGj5wr72JDKry6EMK6vPUgMBvm89N1vhbTKrHYEaVipqAHEon9dxZvwYryUxfMaywKzkWE2zJRrLUBPp4Jd",
  "key44": "4iHibAX6bU4hsQnhiSr5QXCEcLLU7eXFZtMKDQsiv4Nkk65VuJXxNBrSMmnqTG6EDb8EVcGzMenL6wVX5zz5AimV"
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
