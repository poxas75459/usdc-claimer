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
    "26XWQQGgrixhUL56BCfA3dW5o65RfG7hVLGqNusgsacGXgcV3hm27SYV4fKwNtCPHEKtVxhj8RsF2er6VTedaBLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C2TCMfzPXoNH1aFtentFvyUx6P9atwNQadGQS6KaYnbTtJkMkWGu2NERN4bLEckshgH4LZ1aJhRbjgDPcHihw5r",
  "key1": "4MApkPaGhz91NbrM6fmsn83tianqgnLeptEoD8UUkMFsuB49NU1XEgg22NKhQu5jBUz3nAWf3dd2sQyB4QQKok88",
  "key2": "51vrgGc8vwAGGNdQj2GAAbwCzmN8E65QYt9b4JDmMUTRdENddv2XCkmwjPcKoT4CTeasXPs2hx7BNKpVSKk4V7Gi",
  "key3": "61bVgyazVn7bVJXmx3sSSM721ELsAkS7JwSR352EbhbSLUWm1gB43G1qdCz8nmNKFrCUwjqfDkcQ68os4L9sb2gu",
  "key4": "5exuuPTVetXoJ32uuFPhB7Cr98ujgKxNSbbTBrMhtRQ52FEYDschyqF8p2XPbqi4iVVVHAH3HRLcifqzckDRsssq",
  "key5": "4i4ck2EGLtvbWg9pLL51YAgN7htmi73vnHQ1okn3UhMJipFRLLJx8vg1oQRo3eW1b7PUi4oDYuPZFazdFa3Pt8Fu",
  "key6": "5iRxqncm7UAbb2LdjnEsa2aNEZcLjKkZ9As41HGwMaxkTwyS1RtG3w1pMmEuVwee4C2ujZEMbSxBiaBT6GDbiCFV",
  "key7": "vSBUAfYPMKoVuVKJiY7fst8puPwp3dh2iNsVVLCkBuP9WAjezpNhyF5qbw17m3CPmooEqVSrKogiCBFCfhcWhDv",
  "key8": "2NbyoVELtrjfKi6GGbbYbnKr2K3HSRKfqQXwTbLkiFpx8mqubtRe5kSy59GvuFAj8i8hedn67wLucKgCHtz1ZJup",
  "key9": "5xgoeWycBQ79CxvViRDPFhFGijEVjbUvDf3oHuD95VJ5zfMUGk3Mw22cNC3mt44cJJpNSLRPBeRJTCwcEURAHC5f",
  "key10": "fSm2HTNYoaAMeM5LsxBnV4gU5pK8gbnrtJ3VepaFK56QnRQ3VeeCV8u2AxMr6WiLDaVndsi7mbVFHzJUQRpFZ3j",
  "key11": "5Zy7ScgL1ctNQToS7pEwSRZZssoRWzUdUYZeYhqZgDgp2ppBd2rt6bJda93dKnPJ3E2SoooZKQBrRSYG3Tyxd2y4",
  "key12": "WWis3Yxs2c1HjVE9fuJchRSV9MYgLTMYFQL16QFHZsknt3YAnNW6JYPmDAS1zu9BTWhC6EFgH5M7DzpeHRKpT2Q",
  "key13": "5fdN3tfyF5EF79FsTrbvLgkP5UtKw1gvYf13sxubL7yFTVR6TgmaYVZQpmdeBseeSu6w38NFHvCf27Z8wZHf2oqo",
  "key14": "31C8R92pueBny9DE7dSMLoTRuFQe6YuPP6q3GjbYps5Uwa4S43B7g3Siwi8Z2rQCV4yQ7Rth7ihm5NJWuCktct29",
  "key15": "34XqRHftq3tQr1guRRiZUd5h1gudiCgsmqesKHdGUjbgfB47CZpfb1CGCNZNJLkLLWYg1pizUHXBUCognjphzde6",
  "key16": "4tTn1fWm2HNX5MgcQHRF94MaPaJ2SS8zR8RnmLK2E5WuWabCDPmPdGQYNrkksk3DCZjUmnxGEhpXr8trjaX8i5EH",
  "key17": "5Ri2RU5wCyBG6wZiBvnAYQvyTRJJRmqM9yMB9zWr9XVhynUjqigjMyPpABu7GnA6FmF5JL6bv5abHGojUBrWcoL7",
  "key18": "63ppf9m9jc6VdJMULDn3drfTWe6LQN7r5T9s3R4BmVW11rEQetZTTEjM2zWytYxayDHCCesP46CB97foYousxoyh",
  "key19": "DjzGP1Yr7yWhfmhPVKhznnZRNqjah3JZmoXbyMP3sxaQYMLKqekW4EjuNqxAGw1v81mAuENi67jBa3qQYjPZj1z",
  "key20": "2JrNuwUjqrnohySf8vMuXjSRiK4ZNJaDBWqcqW4eH2S9P3swkkHUgnYsLDU4Q11Bq7sCwj95KpaTgdMDaXHtMtPw",
  "key21": "GkzwizCjNFzjVn8M4sz1cGr986D6VWCMVZo6VSfvDqmJ4FtepaYiERXihAoWkEV15THNL1EriniYZisAcdbAfv3",
  "key22": "2Vxt8PshBBJfcBgvSFHpgNmjPbtKbQAQuQ5LKj232gcrK3q5bYJZm6Jw5h7V6izcUbF3sBdqyhvFUyTyLCUkEMSc",
  "key23": "36LKyVYmMQxDxrMsSNPWudFFV7rYJseuQmK8iUuv2ZjgzUCo5RHZAWuV38mGvwGPAm5n8qtHVMCG6wPfVnrYTcTX",
  "key24": "2PFmc37PzX7Rdq6PgTv58fBAT8pJswwtxZdDeqT28vgqatBAaGC7JhnhMrLaiuvLDLfKUW2fgcKRwsyypCP9x35p",
  "key25": "232PgeGMuqdm5tND44KAfoTGvh4jgnxdpXcpMcotsC7ZBb8ECmy7pKWqJby6svB85uVXkMZQe9NkMnCdGpfVDYb9",
  "key26": "4rrJHZwqxFfU1m3cQGTSUTfeMJUVSAU2Muot9b44nE5kVtHHuo4riEUR8yBWY7BQkE3gGCTPMD4WAvQRoPnLGeBz",
  "key27": "2DgaAk7cGvcWHNxvoKi4uLcRaB5L4uiu9wyZTtSFQuQ9KZe8NhMdqbd2G9zkKd7cFvUppkkwJK3xMZq4veDsz21F",
  "key28": "2kV8ZfrjiaC844jSqYzwjPGN3ejYpfa7M4V7X9NjGZWYM7GZR9f3mfp9JPYQ6mFpX5SwXiPUbDZeGopWTfcCCGyG",
  "key29": "3o6P8AoWjnV66ZiSWjoKHy3QC243G37wmmMGWJJ3gqtb8jzjj8jHCwhGhpmVWy87V7cy2VY3F9dozZdhsFxjx9ta",
  "key30": "2HckWa7c3abohxoxPHyPj4C5qP2DpX7xdCWvjB95aDRVVpxDnsURHYKNiJQAYMpQ2nCwUhxrmur1GNDRtS5UekFb",
  "key31": "5UWgZXVmCyVqdm9PMkAHkFf8yXZsZ1s3Zr7qVH7Qi6eBCf2Duo5Sj9j4wLqmyEcy87X8jj5M1p23NTcGQ755kA55",
  "key32": "57t3uqrif2GPVZPTVovNY9Qqb75Mzx63Lkc4i3mt6hVDEL6kfvU5S5qRR5gt4MtH6tEU8dnKPvLyRzw188KLbT2s",
  "key33": "3Gvjadj53qsSqAniciEPC4mVb99ttLexsrSmMeg6hcHihBSPhddeNY8PqMUGsqPqFkc9sKh6MQ59nkZg252vk4uK",
  "key34": "3fSrUp82isiwbH9KSrDV5cMqA64XUA6EKZgDqV66U6iK1mHUGe639Vvtrjvto32Y4vcyc3i9huQuwE45KohLWqjU",
  "key35": "whaSRujUvCMVfxwyHVhouv3xfvH4BCEDYpR9vYhB51Uz4XpSH189UyUxGF32dyFFvHCXJEtm4iJLsxUiURw3Eqm",
  "key36": "6KCUt13US5UcaEyfzdkt1h7JaoqJmGYxcupzRDu9u9gKJj4wMsErniAvRTVcjeBQR2Z424cPtCjDZAUjbf6vcu1",
  "key37": "4WWE6ukPbjzvc6qhNMmMCWao7EKHNwBEuWxRntgrX9vCucJ9tJM5ABrBxGDBUX9hLsxTyMMwbUZvTpsCxFSRSXBk",
  "key38": "oA3AQnGsjsVZx9PNUkeP4PW3Pux6Lnyk8SUqL1MczvGR8G62CPF76JWxewJfgv7HHRLLFf2kan8j6caHf8z1ohc",
  "key39": "65XQQj48t9vgGeNiXffCY7pdQhPufYxZwDargHRH5dXsAj8FBcsqYFkEf4AVuPnbDNNyMmpaEp9ST1yRQf6pzN2C",
  "key40": "5gATiDmgJ1MbgCJagijX8PCsfRXPS9FuE4ydsRSr9UXV6FqpTkKs4oXpYyVeVjN9o7DBynSiafYBHTqbNPZVijAH",
  "key41": "ZzVW9Fga8GhssZ1aePPZAfUin6RbMWYrYuuSN1aZ5qR9pBUJcKiGmxL4JpgdMTmXvUtBjAL77Hit1gXsj6vMNkN",
  "key42": "2b9jtHX7yLRs2uaxQ7P4tLSq6goftsfH3aR5S4cre2b5VLx1MDdhhercDLi8YyHCNM66Td5sLhY9PfNWmo7QFjaa",
  "key43": "47F5CS9FHbJWnCscZKQQJZg7Ya4AtcAYGF9edBXFedvcP3fuHp9VyVa75vYxsdzL7HgmPVvsAA8aSM2B6C5hnuct",
  "key44": "TBUuME5cfawaezJfJp7U6NWLkaetLbPtV5tuNixXHNn3LtGzw86CDocLvtCDVCLwUrQ9RoU9tsVXcftpYWuvqJs",
  "key45": "KxUTdTY2w9gTKS83TyHNfPyW4TKesqoUVd1v3Th261jHMcgL8bzUZrXJwhzY8cETTBwNof5Xu65GtpoMhA8MRsQ",
  "key46": "BKr2BmsVcYbPVtkkHHQuidquvuFSao6zamy97Rb22sVkDeSUboSZfUWtff45AoBLXEKkAKKB7JrGsZvKKFuSG3d"
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
