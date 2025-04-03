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
    "3JqWrA5McBjNXee6jpKRhHaXpJM83CsWhq2NqXz4pzurAQbzGMqb7y8sd5dgpWaBM7gtkbi3s7Mth5ChgMqt9VvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HAaJ5ce94hTzYeWcKLnydCenR969oWsG46RYZWGv8VTP7Dobr5UzEQY7WBshrT2iN5fPvQFoA7yWxeDZkasps7K",
  "key1": "61BCmCJeVbA9xwvqFXqoE7AG44rNQJjrMNQ6Ba4tVfUFxSLn8JumEh2cun8JgkgmYq2GjLp6BCqZKwYKd8HU1HPM",
  "key2": "5ph2qcKSTzabDhpz1xeeKyF5WfYrJW1kabCBUJtqEdFurEjWcBuppenr9mjmBxaiFrHPzCPbxLd3N6CTZrRo4Nkr",
  "key3": "46cKxD5z3jMD7qzVZyb6LSE67U54W48chmV9HTwS7S8B1dNzXyt5szEPZ41SkhLriuXKa1ubCauFjFabUR9MPVTd",
  "key4": "yDXWg8vSvDUoZZamHnVox81a4t3EjA6vaWtdHvuTiiEtKPsJj14TXSpEHmv1e5sjKnn889VehjuxFf8oxyi2UkT",
  "key5": "F7n1z4YAvseyUvcKost4YpTTkck2gCtYu8jkqwjaudUj58giSbCL38eCp5AM3w8GSMjnpQKvB8k4qqsNFLvzd6y",
  "key6": "25orxEqCSrFeDuvUVDSRAqiQV4vUEJ2eB5318znCiNX55LySAFsQe2iQa9M1DhyYstnZA4HNKmQ9sx3ZnbC3FxXf",
  "key7": "ywPvpVM3HdfZwp1rqcgqf6RKTtk5Ca7x7yadqAwExRS6rQqG8gC9vdx4DoUoAxiNeJ6Jef1uQepUDc3B9c7zHRi",
  "key8": "vY73PR1td3Q169WCvBL5teazac6x9qNidQxYX3EUTkY7oUh7Fp8Szdd6WusHDz7zjW5kHiNVSRdojrQy9rBRNAq",
  "key9": "4C849ZUyzEE36xCagMegBwQQz9mKQgbLNyhCb588AnSPcww8Ryd8zcqemANEHZWGZc6eyAN4TC6TYy2a7pHtnPCP",
  "key10": "qzc93wyPhicRb5B34Vv1WYMDC5qmARYEJrULxSJMcWMfDgMTMJSwQxjLpR3K7QETr5hxCCq2CrHrRmFRD2UNbQz",
  "key11": "mCZUraEmipNYpKdAKubsGNpRTHUqfmtPtdySwBDWAab8j5RnaaHS1gDGwVf9TgyocaEUh68qktRq9rYaz6qYQNv",
  "key12": "3P9XYyBE8pKno7Te7DZmVcLAshvoZWan4n4MmqNfEpjDVSUBmuEmvu1ems1oj2d1ozJ8bDpQxehApreZoLYKBWAR",
  "key13": "5vg24uDRmHDVdY1ystxdgFVYYqHrbZBpPf6uPBToXEkhdgBHCLrWfQidYrwkLZkKpm6g6ggZdgGPLJNMMn8C1nJQ",
  "key14": "WEST9Gj3YpVcXTPYAPTntVkuvGBrZdPrV9nd2cSa2VLYeWqTKNonAocBrHYiMzkgrcDu1di7bMMCidh98gCeyyv",
  "key15": "4dpWHaKr3LcmDHTdNREBQcGuydbQMTK8DB8fh7KCrbFhzbyrU7Y2Xm2D64K9WxwkYyWd1q1TDfXMqtZxhXuGmPHp",
  "key16": "cqVDEgP5Fpk1BDDEQBGWcrcDQKcRA3Xy2weWajbLboaPbVTNT4ros6PRuW9UYbyUPKBCBJ3yDxEtBsDECxvYEH6",
  "key17": "3fUAfis2SDZsKUjgqWCccAzwdHqCaZiQ2Wn2ZF11EUypeAMsS8nFAYUGArB6Rup8cffkMELVvXtk2YnDKBvh4qW8",
  "key18": "uptyP7aMoUjhbvpdXVFjs6R6BgxmqdsLA8K2Dv2aG2ggsqUyoHuBeCQ5CiiGgcnz8uHtVibWy7gbWqufEML9jwJ",
  "key19": "2eB12RpqTCBsKnqhJ3vZmV33rTPmbp4wSWF6E3RYitMtq1g1co2PRJS5ZWvK8oSWts2u1cPJdKdYMDFLJNG11TNG",
  "key20": "LRbDXgG6LWyjD9iYYXCAcyy8876ZMLPjbXFMSALR9BZ8r411GnRHmdiKYoANV8Lft2MBrHRgBTXiCzrEW6AqW13",
  "key21": "3nt9xGLVFKrB25Y4JgCTRFg6bWGURipPArnTqAbyhjVPW4nbuGrgpq2ayxJYsYMPSnWpfMeob1cP6ifL2tgkWdiW",
  "key22": "2uZ2Q6tfKPSfmXhft86ppJTFtfaWsknxs7D9d5QmxPSd6JguhZDbPUAtYeBvFkKNb6HGnioEjZV77DZ6U3yZojAi",
  "key23": "4yrZwAWRmWuao5FnTaSBEjvCQggfPwdB5eNfkwuaT6BtYVjaWa8T7vAMgWopAfaaQQRTXuGoDJ6ZzaMrRYaB2dm6",
  "key24": "BVtgJxeMemXWrGztxstQeaczFr2SR7YAEZLd4yXcJnH9t2m7fW5AFd1a5UMyHE8jfiCYa9cyfJp19cNqsdKaJUa",
  "key25": "4BnX3jRm5GTP4TtoAAQD6o4aafzconrjZYw3z23PrB2RDpNmU9mwFXjQNJN65Phi9NQdAcSgeJ3iQypKVEvYNdQU",
  "key26": "3UZGpw4t38yErEKWZtuYyTH2PXKdGuz6XhHCUvVXDYMcVsGUBC2n5KPcFcefMhjg8aHnd925XzeeUFymPFBPtBh3",
  "key27": "3jmniHbFNcvocE3o3G2iTq7QPxXDQdcKdKcPhKB7WMQBF3ymxDsLei2umJRbY5ssKxFgoQKWzFmE8qRvjgGnNRSg",
  "key28": "4DF43TPdwhDPDhotH7mDDyaiM3uwKNahWMkX3SYqxYhcMx6CVg4pDWUahE5HcS6E3h6epBcyqFn4CR5dFLuTe5cj",
  "key29": "5uy9XL4ycDzM5VGbiBUSjq4skxPp4Bo8iCtvzueSqedTVeqLdrMSmuR4iHMC1fuLUUKzRbdrYKxttRUWKh2M3FvC",
  "key30": "5PLRKEWmCBM3a7d2jnfJ82BJ3WTavUyikniDSHQyQNc5dRTgyT9jayStjw4fhYTFjThBGtCv1AsMhomhvq7rxCAJ",
  "key31": "2PBNjphvQZDNm3uAr9kYtcfHVczWdPvHpCpMQevXCSHRx5sECR5FWuxv3S3Cxa5yZPr4ckVYhDz3KhMCDJktYPqQ",
  "key32": "3gPQjuu2msfR2Uu1adRYHJjPKC34mmFjCEN7X86RmdUyVgnJeyqqstuB9GNFSjb8jMvhSM35mQxjMWcjrtis6bJJ",
  "key33": "2e93V9Usna38xQvBkY6pGzMfWsEgM7LnNdWUafEBzaLJuNryv4mE1vVu5DA9mm5RmdUHXW5iGzRwW6neEmMnHHP7",
  "key34": "cFyfso29JaxZrtNYhwYUDLFXaVFiVKxxurzZ9K6MpMCPJuC1NZV6n45Krv9KjHVxE8pS8B7QkkBX97kdMKUZuxS",
  "key35": "5Fnmh8kFdgmsYUJmoYRRoByto7MMZG5Q6Xt5WaGnJtSi1HkoD8bvLc32iY85B6WFWJWiCgKjtEYk7NqecUoWRDm4",
  "key36": "boY5CH774S8MDzUKLq6swKmZTzFXXVt8YcFFtfJ5Q5R3tyqb75TLQ8icvo5Q9Dr4aspRQnitWGA1dsp4ewYUPrJ",
  "key37": "65dffbfqSsdn7m3tU8Kt2dEp831C5zNzuKKHcBGu4kUuvFSD36uyyUAEB8wyTkt2nn51eVroL8JxxL7F5MTtdawQ",
  "key38": "66Tm9fsaEwBx2LXRdHdkqpFcW51CTgV65Wo19dfsNGrbUErgQHaSU1zyGwVyU5ry52Ejw1NAGASjffU5SP7wLpna",
  "key39": "4E4cJwakCMtsoZnPUWwkFUH6txMdyavjBGfWadtJG7sTUKqKBAq4PxQQ9kj9xzmmoosvvEHYbJEdFiwxVzmDX5Ce",
  "key40": "2STSKbq9bgCxRM3nVWK1FTBS67iX846NzAXRqUA6YkAHYAuNtyvdmFSVK8uLoC93FeWNtHrJyVfvTuYy3nxnpxbR",
  "key41": "2UKDsvg4f5kXwic1B6Mpt8dmTsopwyPAoYrhncmjG25ekd882ibdFyD4wMFwDzqbFwCsZVBWHtYFEL9eR7Et79Bq",
  "key42": "2WcF4yzPvVJssASN2i1jW3ArQffhAYQ8pew2anZxM32gME5H2WjVKS3W2nGdsffCzG1umvV2nh9dcXrg6iCm1Ed"
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
