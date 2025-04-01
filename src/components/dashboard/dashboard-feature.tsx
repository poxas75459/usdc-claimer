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
    "4Ue4QUQ17vAYJTy85Z4spX9BETwyQep3jmcb5BRGKP59F3wCxNHmvm5LXsSqieDAei2izqrXWFV9JWsCqEGK56Ab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MdzueB4ybZGKpqiE3PwxzZxgUKEe2zEDYgBPE9NfFhcpzwsf9YWn3L84m1oBsdk9KHwdAfzo18Vxv1s2SQb6nn6",
  "key1": "4Vhgeij1Z7txf7g5puLA5hq6eDZ1mwNccKFaZugh83Gvb9SdUHDBaKcrhGmW49e5tzRhHSj7uuj8KitYpctBFP9P",
  "key2": "2gEMVeTEneyqLGqgDJdSHrwUWH3kjZZ7mxhQAemhPTTDF6w6HSTwoqpRZGE5fXFMULWXCV9n3wFtGJgLnTBnJBac",
  "key3": "Z27q6biDenN7zKnRYRRdEhvRwL1UhTfmE9YJLixhBE2ov6NLkk7EpyNnBXiY4wB5dsxDYr6uJTZGAeFxotUedzg",
  "key4": "3RShXfRB1d3ygsm7FM8mavYC9eqVpwGcz8MB3bZeUQrQnoMetXS4p4WwARBMdUrDuGBr6Y8TJVkkfADFVrms9zs3",
  "key5": "4k7cqHX5E4FYGRqPQEGY5uUKqKhvv9RodawvDhaCuHNHMknR7hCE8MsnnEuFKLc8T4AdfUMrnFcQeLXW542QEAjS",
  "key6": "5vqdESW1HEy3evCGWWWtui8SycfSP1NNM24A5J9ec3kBko3ZGr6PKbUJdRRXVgpiQVPqYmr11VXz2hV8PpuMn1bi",
  "key7": "3wEcbM3PRsnW6dqoHnx2r4KRP7j9iwAXFCwDr2V3ZxxWLJUf1P5F4bdsAaqaVAhdEmqUgp2eNAb4iqEXfJSTQajG",
  "key8": "4jKjg7QG1dbddbpuTvHA98MY1c5nsnWiZM4zqeBZuP4WeTfTWrrRJXYqLQ7fYiYRs7nmyYTfngPcLGubg9MtnwQt",
  "key9": "4ruSN3YVERjH8mtCep3L5PfnQT7HHwvRgvnMfrrUskVnpFir8BFgKZW8mkMBqKwMXwdmERmz5o6X3VV8k6GaDV8r",
  "key10": "5Hp1EHTcWhjvJyidE1EawwxNRfuh9Re75XLAVfsx7NqXQivHKDrajdn1CMjESZRErTwh3NhM56sDBkW9SHMMUHZc",
  "key11": "3UXbUPFkANRw6JMAELCK2A7aCMHFMMBp62Pnu2nG2LjQc99fyVCwcFsALVudrqZdzxfaCfEoU3tK8vwAfXF3XRZN",
  "key12": "2o2J1xPvRSmzyZSAWRd68x5B3s5Mch4R3sxmSoqEYZvtpYZzL561UaDMP6E5QW74B5EyGSxEXqY2gWJZcWu7c3tf",
  "key13": "KzeikjJ7yZBsdXAyDve1LAC6KgrnamZteCne8Dy2CX3SEVtKXox4VMG1KkDypT3NFTYWnoF2oy8W8HD9H1YL3UV",
  "key14": "8ixtPAabxw6oY3yrkeRiy2NAq3nZ6qkj6af7oApiDzDFtkEyZRVmEFv296cAPXUp2gPxikaST3wzNhmTBnDb4kM",
  "key15": "LQ6duYPqifHJkntU3rzkT7Fu2UUHbHtCc8gQa3URGL1999GhjnCc3nvgCF4EPZgV3wEtY8iKrZAumpYwJHaG4rg",
  "key16": "3rEoP9XfwqyB3rKutz9BVXgYMuUA3KsKpFSoydoaTutfBh1RKNQZw3kMGRfsFwpU9NZjf1geTKwSE7GvyogVbfND",
  "key17": "4whnBvwa1s8UqXg94BEUcT82swKXg8LNdcAFZT9eFiUFckn9R5NHFpN2hxTfzkmXA9sDm5Wanykz7nuJUm8noMi9",
  "key18": "3ELBtjj6FN89nQqqvAb2afDxaNmAhRKfhx5AD837Y9qXZDxnxjSZ6NmpY6N8dRBH25oWf4eyHMHVuAy8rSAbnA89",
  "key19": "4ejaAhf8aeVsL2mhvh1DFMbDhKGsnqLs8q31CDxxhbZ3wgMM6tMe35xtcsUoKHVzZin2sqLSrkcHWdh3oYDjxcd7",
  "key20": "52YsPobqU4FZEeXcdWfZsnvoJxQV2VLLpBFJGkR9217P6UjJUq3U71HLj36RBx73YSy6JJXWA4bYStW3Km1wegts",
  "key21": "4f4STN4HEMsFcWx9aGVEBFF3sZMC7676KkpYWBeVde9eyLHRS8s8aXYQhWkJCqDtzDV1VoA9te5yaH1nQcJVPnuk",
  "key22": "36RmrcXcgbUwWnaPshxDnXBqA19sN6qwidSQbSHjNpKeid2D5fMtkoqqEVbuMRfWChVA1GyZAWjppMHzh6j5vesd",
  "key23": "34krmy2bcfLwk7ExKUn9QEjLBsxvcYExhP2DXzbLLpTVtfSaaRtUJXFo8yfbxegtqW5HiE4WByBYmJtH1Rxv4rMj",
  "key24": "2zfz1y18JcwR87esjSgbdbjo8MBjLvCcSa4iJ2hSgeMVp6uZAfzNuGmEgCpipoM9ngzALRmf2JQn84rb3ZyoKhZY",
  "key25": "495XHsj5iPZP3tugWBPG7sjF83R2jQ54hqxyERESxNsh1f63sd4ZUsHN7RmqYzoWpSRVPQVw4bziCS6giNeofiVf",
  "key26": "5Axxm34NDmKdXhCz4W1VYQsXajKbC8zaJG1uf47UJCu3iiV2WgTfWngUvzweYiJWpPvkXgxmxvBwAaoYD6KoPuL5",
  "key27": "3y4aBYdJtMwfk8a93bjMPbxkRNChxHegR7zEgYPP58wP5YZhci4GNSh5x6353sKbJDsS2YnUmVKHcNu3KUk4AqvR",
  "key28": "3tqxkgbxKuSxVksgB6PNCbSXqHYwnYZeAmTL16q9EJDy7XNPFbjPGVX2DUTRtBsYswBtgDq8yDcT3WK1DJ6Lk361",
  "key29": "2sTSMdzPRgTziqVbu6L2tzZVgwSJLVZtNiaBTkT3y2dEuce2zrPs1Qs1fS9h1tWYrqqcDjdN1EYkQkZnM5WYHEQL",
  "key30": "44K1o2bebtKq1S7VSRGGrtPm3CB8EX55EM9dvuK5An7iNexgn2Z5XQKzz5r7hfjSb29cNq5ps3Fa5guaCTQfXiSh",
  "key31": "3f8fNDtt975cJS71EbnqDDpetuVU1xixigfdrPCdrAK5wbB6tt1Xnv5MdQMh1CoU3uSTK6xzys7Rm7rP4Up8XQmt",
  "key32": "2zXgfwhkqnHmyWEGRZ1etzFw4mmX4aeSPwC4pNNKbxRYxFzSSBCvvL4JKaSkHyQGGyoKx8CwgykWxxgTDCsWTygY",
  "key33": "5vKazgCHTCcfi9gEtfmBiErwyF38hQBRqyjZeXVzYgWskHByftPrqk4SkDF3Hy3ctqHfxGXZsnMDNps5Zunat8BM",
  "key34": "5dT2BSneZtYMVePba94wAV98PFG9sSBX8czo7BZ94VN83EBScdhz8sTnAEH3WhfYAixUJDwWXbjLk4YtzsLiq79C"
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
