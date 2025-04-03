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
    "4jp49x3mmo8F4H9mBzJcsJALfbYQb8wZ2QpQ7zGSwPkovBSuZjKezcudGW2kExvh1SYiFH7PrT54Ps2v6ixXkU6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HunByrap53ZQixYkNhjbuQcGHAYRACccne6CzDFpU6f3VvqZ17skLZvr1cCe91i6ToQKoP8XTB9w2MnfAPVKLXb",
  "key1": "5hZUHrUp9ww5rR5B4R6g36Dp1zgbgc528W1YQ5NHau2wtAENEG7F3MrqK2geczH3L5HEidBuwZhgvfcwBGQG2nD4",
  "key2": "2F4ziQnmVPRZfPqmXo2fqafKRStfds8uDtrBtcqyTXw5PUiAMDPHNrEcyJZEnuLMn1ph7WryxMiNEiLfsnG8iMMP",
  "key3": "XAjwd6WTR2FNCbZaAk2PYKGy4ApLZZxSo3UkuzXx6z5bjnXs2Gr3XLyebRjYcp25TXai8oQ9Pkifgu2eENAy1gC",
  "key4": "4RGGgfhZQJgc78JN6MnU71e4ysuhYMeipg8Af1JJN5E4LHLGX97M7crr3aifruU7V21cuP8DY7UaxiQ1UxiFsKbx",
  "key5": "2MpEmVYY5hTHspjHaTReuSYuCtANofdSBtj9NqwZEBw1k34hJGYzGxkQpfQn6cMWaum8otHNAAZmU2qrHS21x8og",
  "key6": "2GfL39MHBNWaD4fe1cmYfQ2oZX99EoHAsWwcPDszN7uy1gBhggkGgHNMS8KawKkRwqWJDBF7pb7eyEttWeePJxyb",
  "key7": "2b9qeSvCYRhm5ZSRSKiU1Fotn15Rm4nxj9578jYtBZt1qXBEJG3YQAf5W5gaLju5sxB68qwwNtg2imSqQJADxAwQ",
  "key8": "opzGWcmhHDx6rjppRZ1FsHMrX4KmU7m7czhw3sZ2PdcPRZbw4wnuV9EbwRk4GBKZWjaeWWhihvqRQwrYZC1Lcm6",
  "key9": "goSDSHAbPMgZPxeE5D1tZd3hDe2tP7kydJTksbAiWXR7koSum2SB8PttBPWvxpxncuDnhkRUvYPc28xdHiq3kV2",
  "key10": "5nimyvmzV8PstjKFuCdh1QVsqieX2ng4biymLG6kkS1471Ktp2PbvXRYCrdAvqBBYVmK79T8XsSPDJcMo8NtMfWM",
  "key11": "5n4qhhCmQB12jTDzBfvXyni2QZe2GA9pjwkqkfPaWocME4Ko8ex5q4Qctcv6qJtR4DtrHAM7qrAzt3GNLvAiu7zT",
  "key12": "5vwaNSMFyNgVBD9TdFYp3LeK4t8Jobj9GtiwpyYVx2vuxxraL1KerRyPJH1gR6EWhnWCppjp3z9G3zyzhUBXhPZG",
  "key13": "33VHR2r5LwP8YG3cMAR9JMJqyr1HtpyBt2xXK935VPhMeq51CiX9Pak3x8XiXtGsnr19pugrgekikvNR5eFnPpH5",
  "key14": "4gbaUbTXCwxpnFCxSetqkV66cLFwJNVuQZpDKpQjVre1wnURnT4mVHjTAUSv43KTdRUsX6v424az9tPbgepT85m8",
  "key15": "4arLv6XLSqJRZpoMSMjXLN7y5ufzUVd3x16iVkLgu4wMmXKSYXqFs6EZLx1TpXvjLotnZnUft83QDuuosZewSoQc",
  "key16": "27thhCQHVjvTtiuVAWHsq9aBWuLUqAVzrt3z9PZV3vV7FDHejffNbg6oNksyEukb9Ab8n4oW6TZkg3A88FjbqiEt",
  "key17": "5rsqAenD2ioHnzyJ97hZxKko8KFrxGs3G2vofQABK4H4PCBPPzz3V3FABbAUD3K6MEecSzhaKcya59tnnw1n8Aae",
  "key18": "2TnqT1W8Nc9YwTgyVHrhCa5kcSPirN5nyXVRcxNrvmk1U9v9LkteAeZvSsar8qi8hnTwWY5nXqP6DDiDEu33Jur2",
  "key19": "XJ5HJWypK5vfmLBDG5Sx49CVL3WfgjyDMeH88wypHKfs4qpTMH5Cb93uPuoCdpjwcYoQEmuRDRrzLiAaPqWPem6",
  "key20": "25MGoeSr9ks2dkjSVRQVGGVjEuuhpFAWGyoPn7JKHZko6UjJVuLbLeEwbFWVThjXm8Gdrsv1XDoR4Fv9YPxMMTiA",
  "key21": "TvXLEJojTjRbhB35LfXJXshaeYNwKPWmZYCMzTkRuyvUjv5j42YbwmhGUHLk1bAq9g3p56p5NBWdNnEsjjRBKcg",
  "key22": "2ms5YXoYP8zobg6y3xhra8CdZYd9CcRnFmXtWFBwdhZdwJTqn2vNA1YsXpfWSHBgxJvCBbak8HTrndz2P9YZfqsY",
  "key23": "2HGpRQJcx1hu2coFEXjnpEo79TomhJVuSF5n49SZBfBxi46gvMm9cCFUwtCZ1vicRFRcfqxnmvxvKi8Sr2EiqZjX",
  "key24": "3Uz2Tb4cMBxsMBmkWCFGNGE4D7mtuiD45ftsumxptG4ubCHxptxSoupJPuq6JmEnyuYRNYd1662P9MRzpt8GzJKR",
  "key25": "4w6bgemvuP4igXwyePfum71Fy5wpsUx8FAj7EiBVxW5RzkURLFRBBVayL5XWLLvH8TMeoZDy11XKrXg42cSDuhiN",
  "key26": "2JwduXSVJTMMxqhvmJ55wThHvFD9jCHcDBJAoP4sKXN4xGTLhidUXfDrzpAaf8MMCKJEUyCE9J3Kj1ZKS7MpkSV8",
  "key27": "44BvcW1hHjQ4F8SdKefgMwJBR2BEfpcVHbro8q3mKy6iZssPsRQpRw3i7jEVxCLKUsrW3wKPQZVTRP6ZNwHyW3CP",
  "key28": "45rXYgSKQ2mHebT6bLQgtLMWKtxrdZPXpY7nyzgurPq11JcsE4a7A3wU7oH2pnxXvCv8JCJ2fdoE9UoBsxpFqka3",
  "key29": "boYnUkZMBWBZZZs2YQvmTSYusYWbmi5K9WiMEAzr3GmCWaQWyfwthm3y4ryfG2YWgu7K1hAdWUjncLEwHgmHqvd",
  "key30": "GwvZ2GtwBEaoP62Dqb2ujBfbdnG7EMxxZ859obgYFptKtvE3GrxeEaBkeUtbNLSLzvws8dKB5yTwVEJFikBgT6v",
  "key31": "7X4Ym96dbjGptsoFxmjffQc9UCwUoXL1PTYX8spuoRcksxzCWL9oPqNLNJkPgUmq7vbAqWqdFWwvhyKeKoyT3y4",
  "key32": "5a659pgDhpaqbuL5fGuUqm6mGVpYqDbhCzKpGgGwNF4rZ1FypHGVLoBApmm4XFR955J92dpMJsiTHcuzDia3CkqC",
  "key33": "48MQQMEu8PCrtViPCEQft8AL3s6LbWKkzEwefiYYqSt8UinEpvNWKcQTqYmeopf2PP4SwwtPAyvf5uQVWPkZ4TCH",
  "key34": "5JY7aGHGmw6ss6K2TuojbdT3xkAF7PGUAWnH9bepfy21RZH5F5rTyFcF5t3tx8swh1NypKWaA94Ro4MSs9FRrbDs",
  "key35": "5MWD7b9Dyy31rj1yzcNuZSbSpsVqbapwCwsoMKoqXUddRRGUfaiTiX1bzAysHzqE4xJ4jq1DTLidqY4szYmdeGSy",
  "key36": "4jezsA14WVoMzXDdb75FE2Mfkp9mvktLF1iVML8LRKm1qBJyyMvrpvSQCTMMDLHB9xNyRJQ8uoxNks7C7y5nmukx",
  "key37": "4TmZn6uLEkmgHbtkdzEKF6XWdgDhhKPeRvTKQ57NYEFbLwqnuhPwEagAXoN35y4GKtpZGqBpqph4hhQypT7trSsq",
  "key38": "5qFbLa9MMXqGser9gK7hwGe5FYsrQ54BgM7PrRtKx3ZG73VK4nbhUJmNCij3aTJ6c3zQ6U2rw3GH7NBVLYMdnhcV",
  "key39": "4Y1Pa3cD7yzGZLC75SVxjuNKGQ9BbPSgdbBftoc8AUmGGGFL2JrFpYCGw88Twtq3fjKCpZxZJ667rcBFVvfiTFLt"
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
