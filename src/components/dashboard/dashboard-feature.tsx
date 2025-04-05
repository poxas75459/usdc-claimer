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
    "66ohVF6TyoNdTni9QkYWapiaHNxqWG7R5bHvkfugdpoKvX398CMAEYYkdTLPDNHeApa7xQAi3bbhajJGWgKnMGdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UTNeiRYrFUtoZW9aaoCfLiaiNtJt1QX2gMVnaeuomCdV8F114QWQxDgZSLXTqrNxxTzEfPApzkUeStV3DhbXghm",
  "key1": "5KuMmeCMZnseqGTgfJ9R4z28GyEqAfe5bKyZg8rhJvBzfkiLjZf2GpR6MVrcpq5327PsSCKyRV6EsH9zLiXZMDSx",
  "key2": "tgoM131dzBqHdZ2Z31jJq3gXFsXckqJyLzxaZoB7KaSKHt3CzjEUcRKHyWvNUU2L1hRGNFcoB6gPzaubr6B1wF9",
  "key3": "56kxXqQSptiEPVFfqGM4eWKQMu8bY4D4MMnizrA9KJYEZ5BYJBPwCPDgs1GSzYwhE9Jot9hyRYMdH6BjrGjM5Y7D",
  "key4": "sxKKo1NLWB3ex9dtd1xt1xsCY8aqCPKjisDzJKPqj15MMn7qjbpFynNAuBuHfWgoRVb6chB8XVU85EVCDeB8hh5",
  "key5": "3gp3JpGhQtxnRgeXJsWWcBou46HtUrvbhGqqMyqTpi2rPjd1yJecNUxAT9T8CrTfxYTK5f9NjMnoLMPQYsaiMhpP",
  "key6": "q5qd5W5Y7CxAAVPRtbeUcoj2WFY8tXBpYVrMNratrjGyoZmryQWUCjRbkpVgsR8thNcB8YYpFBy2sDtWV2AWNnP",
  "key7": "2b6K62emoU1EKWu1sTyUwbRoono7STqi4mwtHXa8Vmoak1ehHQqHC3R3c9bg6b47PVk2EgAKixcrjsHWnDnDbKwr",
  "key8": "65CtZP1RHrY9UG3R21pAx1cvUh68FLCvx5zTZyiyvQDCZN9cheU6GrthyJ2DrvPHgWjKVk5GZast27gevY29dg9F",
  "key9": "4oTYmXzS6oZXA5gEJ2B8pE6cLAWoWK76rcMQJjzXTwamRkmKQfRoKo1XUn8TmSAAgaJtQL4jpaABGUhvUGJvkQKQ",
  "key10": "w8KByLmA9mQJ7UNz78eQCHusvUYm3JybDhtx4FUsRkxVoSTpdq7v8CLst78w9HxUU3D3yPLnHYbRky2CG1dqsgE",
  "key11": "4A9pcYRE4UZEVdoKsihrD5KGLr2YuEUPrrCECCEjNx5Wh333HdaM7xs7dwMXf21x7vinqkwpCP2qY21dMBLVbcHH",
  "key12": "4gQv22Ha956EBSJU6DpmsCko8hCTxbicV9sjnzSJbATvf989c9kLpFb6tWkyg9TD2vnJdhTpTqzAR9djxD3BxSH3",
  "key13": "2ij2CTSakC5uzrRLT2QyZNxNJZnHTHeTumcaet2iWUto7Dr6DdTGjpgyK8nJFqp9QMgKWKrQ8Ee88qhdBqk8nXoH",
  "key14": "4yYtKuvBAv1cg2xi315Gw743FeNLTDktCPpoDRqYgAKwzKVqnrCYBcbu9nACSwGah5oS2dWjC5serEuAwpzdwnL8",
  "key15": "2BfsNcHLLZASeU11gsVFHm4cQ2obCTqr3eLFNM3Cre6YLhBEryfMNT86LhCRfpf65QfF4D3tt2on6doLxEwobaQi",
  "key16": "7JnRZ5vdH5w6Bq3E4zdH4b1Be9wHx81zhu97Mh7YFoVoMridw1uVoWj33VVTYSfYh3oziRRhd3MAP2GgikJZuz7",
  "key17": "5TeTyzFK3rnDfFvrV2335F6U6tUy5fuGWuLWP465sCussiuUCAAN9AUUV87xm4hxggA43RdMTk9kBzUhLcuCvosh",
  "key18": "5x2zA36NJxPZo45sg22xDSeLTB4mm31wZs9NaKGKFJ4GKyaJn7h8Ffaie33fWWBhDr2hmnDyWEnPdVtiVQLcwudJ",
  "key19": "4uju7pihXhhWrx7RAH8QicEvjK9Dy8k1Raikb95XXtSJZS8Xd5JQ6PB6iuaeCix7MD4yVf8MzPAjv6uAM1hYZm2k",
  "key20": "5H67rTuW8Qd8o6foA9rcaBm6hvHnSqLQ2PASMeqj7kvHQ7sgWWDtDtpENjjU8eZtvqUf3bAALtqRd6XXMw6iix5m",
  "key21": "StXLvFMp4EU1RC2KJKveBw4LjcHzziwT8cR1qkXzVpQ7PnYM3xi4676H2MNfzkYvZhayttDqEV7EbPj5xGYrLfr",
  "key22": "2xakncy4ZKEwC5KW9QQfugAAK188jCjU15uPD38xqKbB44VvV5QHjQ4Rngao7NY3mS2uvj3NhFJuDzrvZiY94k2Z",
  "key23": "5EBzc2nbRSyv6eNmD4Eu7tZ3rS545peokxUpjxvJ8Qj6pwe2R85eURhrLaMrFpRJfXQy5CXS3zPih5X2yy5VaAVe",
  "key24": "3EFWnLhpQ3hFf8c2jcHc1UXWrQRVm7z4wTqJ7A1VgPizcqkjePrjaRyiFzp3AkUQzYXF9d772gHrNBBkBcBu42Eu",
  "key25": "3gPhXLPqDpLHhHpdUQpKdr9xNPpfbwg9Rjie3HtTjKrpBhRwBbto87e46z8C9udpAmniVdowA4m2A3kA2cUBut6C",
  "key26": "3FNxhKM5Qg5t7TuTm5HU7vA4eNTHRKMHKpznfm5it5PoHPNMaraUcc1nviLVUui2aJJk5AnELoE1RfHwoG3aJLje",
  "key27": "47YrMZsLmLcpXTYMNUzyuxUazGmc4VoTur1QMQh8uMyoF3FBNVyTavMhfxrVoLx5qWufCgPtJDcqGRgKdwYdcNto",
  "key28": "4k3bxQM1JgeaRjcb3NcgcE5NGoJjcCGwehKS79TN2sy5kXnUxZuoRMkioKv8rGmbMHNNyxp5KomGG6kgeiupm3Vm",
  "key29": "22b7LpFeQvU6PEaYneMgKrW1AhVAiTAN6v7wyyx5JLZv6jVqDGvyyfbNyfjbiLDySH5hjSXb9htLLM34YTT9rTFz",
  "key30": "4urQqMQkA6Tihy3hFb5xdQ7p56VbFHsEgnfjn5jhJCbAa45fq5Q5k8SjsiNEkLg1RG6uewuGVB8YYnmU5nMFeDJK",
  "key31": "zNewxfBXp38mmDQxTCJfk9naDNdq1zL2BNKkVRfPR4g3NAHvwA1K3XCcy8duUJh2nzVR1tEqHtrU9VY7W7DTe6K",
  "key32": "4iwbDHMMrcbFUQPijoFNcKiwqXsyziheKb8iYuQ7GJt81LkfwWx41i89CirYUgiR7zVjyQ75Hg6mmk2NDD7sRXv9",
  "key33": "72x6fzURcpQECoMPQbpBFZzgrdemzdZQTcZavZ8pN925Kv7tzHSWUZXmQ5HsP5Zqhapq2KLsy7MVDf5128kVe4m",
  "key34": "31xYytzZs9jurDG3sSPhAL8NcRTEE6wut5BhbdjxcMiLYHoVG7QYpBSexaBA2o82kMHCBRys896rV6CZWY6p1i8K",
  "key35": "5ZCHuaZsWuThqjN9tDNT3q9NvnPzrUx9vo9i2mTz9cbtP4FxFbNCXDsBvGKQvDDZutvCiQ1gcyRdTavhB8DhjSQt",
  "key36": "2EZ7fcmfk8oxJygB6j2JJk2Vs3Yj7fUXDujndf5EMJDZ5GWwSLck2z29nXmefwro5FNffVozFSZDXCRAbyKu4k2u",
  "key37": "4vUyN8A26bZyPpp3vFJGdLtioxwBR1qJr5Q61WYo2yvhSLdTT3UgafEwrXfy65pZ4TNGMHQjdPcWJP9nehwbo9BH"
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
