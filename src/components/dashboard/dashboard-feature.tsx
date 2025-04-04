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
    "3vXhFGVgrqWFYzMnHfySSGqRGT7DYjk8CDiVPeTvSWEpzL1J2gHtGSYGtr9KkRR1WQdmpJcNUyPdXxVgj4a8sMZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wzpTGYYcgUW5SD9ub1WAHikEiC1zay1s8prTH1rXVWLiChNGQf4Cdho82fqkNWW3qXdZfyLPtsssAM5DFcmjFX4",
  "key1": "3cSsh3oDbcWumcTi8DhdKW6ULsDhvSDw2cyzdDGryLWcPnaJDEcYVCPd7fUabLYuvYzSA1KdGpfHAmNxQGVXxPVZ",
  "key2": "3LaMwunDuxY9mBhS68b3YekLkipzjtqEpWB9dGnoBw3YspeCjwSCQMwzPtjsF4g6Qtc3pVVWFxRQV9tZgejizRfJ",
  "key3": "2swXfYmMy6zXCd1JJzeXVTkRppTkVtNcWfXhsN7HerhjPj7e2veHnbC6nFu7HgZmwq4JT9nJD4SHkMePvPcCKkoU",
  "key4": "5ddXprfLN3Jnkr6xTWPqybj5Vp1pYJyFJ87cXamGo4GUgsmEsnbv8GenbNSf2a4gFnjhcZDmrTfiWmkzjwztLRab",
  "key5": "29LHW7qfWgbopB7Qf9tVSUwxHr5Z9XoFuLvqf9Zbs9MsUzR5sUSKdp2Jp9WGvTA2WgCPkLE8DJZE7iunb5DB1XnX",
  "key6": "5TNxPVqDA4HqdUc3g2FucgcSxsR8vxLybW1DhH6sotCYd5Qtqn8TUbdQei7SRF4YKp54AdXyMpNAsgvUELtaGdud",
  "key7": "CAeEYUdrMa8XPV2UzhDiDps8xU5ZgYGMFyuNjrWjEKSy3463eDzqtwLrHfL33YErWkbC8ofkZrHXyagvKYKfLxt",
  "key8": "6LfGL7qcQFAmfadF7zzs98k6fgLYNR6GSNUGu4T2Fj6DadxBMQbSpQex2Pf4boMQ5Xe8GRJ7CaNTZxfru8VXA74",
  "key9": "qQWCXoiHk6U5M2BwKfpXafT5q4aZUoKZSfRXimZxnQxTCiaSPLfofM9GroExgP9PuPKMrGxqYzxYCGN2FJXpk34",
  "key10": "5rQtngNgwwuWB4jYdvaoJ87tRbsr8w2bvamUBeRxjKJTe63Xvz62dfFaeF3cCinSrJu8ACs14ydSA9dh3uYm3qev",
  "key11": "5PpFJXS32MhgHSiewv4vXYsQQgpctfz5jX9MPjUUH5TGkvCuNcvfaedSRkgtKk8VAuerToz6JRXNWmuryDUMVaqZ",
  "key12": "4sr6H63M7jH94nj2G1yvex7y8b7aLF7HJcgrZNyew2WmsMbBcrkz1AUZknMqNUCk1XArQmWqTo8NzLGjeHjJNcdH",
  "key13": "4NYtYKV9o16CnNJQ3xGsfQx6qFnZW3S1H2DfCi7DKeFie5qc5HSFAfPKEWDTABnZ7g28J5qSZLsvpLHXbW7KRPgm",
  "key14": "4Me2uQJmFWZRsnhwWBBXxa3M4ijH3fAbJAeRUGUdQ3iiw2SAGobnarzqjmDiiaCDMSFwkDhVsUibqYctXUAjFvZK",
  "key15": "3tE9NqUvXFoqymseJajBviPEQguYmjh39prAqCEQSYpRDJp2kcTotULuhsfaUT8hjwjDcZJo9HonpadfAj7cACqs",
  "key16": "ocsNPiayrkJ2tR5iJwcdNLBuNUac1tsa7x2gHyJnL8V5yC45NubBHJKeLkcdzkye4HTSJ82nm5Fa4z6Ne6xafWy",
  "key17": "5NEHSyXo1QMmeXfKKpy3s3JNKQb4kpHN9AiiSsPutPZz1hV6bfM95hdU7wTnZpvfz1tVMAEMMzuq4WeF6fEpnZjU",
  "key18": "5a8J2LGQg76YLEts38scYZJzkqvijJtuchgeu9LB8ZSTjuTMvETH58mP6HHe3c7ZHB574aNbfwyJHkxurNf23uJ6",
  "key19": "2jtqUGTGfcCQ9xibXULH8jRMcLxo8FGvwypYwubVCHCzyJA6K1nnp5jYuHFWrreNncsSVLsqsNshjURZ8XnnsQCv",
  "key20": "5sLyntSbkNrvpTNYDSYB7CL2sGoy75CBYgwF61TGFtZeg19f9p9GVJqeMbXL9Gyer1GxULpaDhtMsYuQwraCFqgd",
  "key21": "vSmoJbJtC15oyznTPpLmV9u1Bf5rpZMTwXchhjjExDv7gKhNbhyxUNxaABiSLEUPzw6szaRujGDV3Aynh4ET8LD",
  "key22": "3DD4YqZELBMhCys2BaSLR2mTETwwFgYLSCWcTXZjXwM5uXGLHGu1JrA33uErdrYSEcs1w43hso7nyafyoq6nu2eg",
  "key23": "3bTBaQWWNyV3qFgbLRxEKRhX9t36ZcQNrH19T9N7hu5q384PVzE3aTk2vJgWj98uRq8FAFEY7b5VHyCLmejj8ptL",
  "key24": "22hNH5A5LVNB6p53NzvZ8RK1h4rg4gTgVYTZwrKSHZpxb1qcWkx9DqAwFHuQQydEgfEHYW6SEKid6BFjk4ox754h",
  "key25": "5HhVbVvY6qQtc48MbevJYNzMG1bSco5BdsrTb74Cqi5CEpXiJZgFPMbjMzsrmrDYCc26BUroYTsgZge5K3g7abSL",
  "key26": "iF1e8dCe79VYihweJXUzrUBQy1groLYM2KqqjzrK5rJmrtsv7PC9xrbvzydLtVXXLFijaB3bdQcPBCujUoywrD3",
  "key27": "sRxd39wdreUZR39CBfnGz87hwqLMLJRch77mnaCcZmojr8ahUrnuTzhm1dEfKhoGhwfk8XUbxEc19E82XF5aBjA",
  "key28": "4Yt2WaP5wGRe1iiJKm1ZGy7Sv3UX3sojvd6VS8LQv97tTdiaaxBzy4FYGRmELDHwzW7rRdVGhhrHw68b111s7WEf",
  "key29": "3U6pxzajEnggBFfYx8Am6KZevVMTJHk56aBh3XSHinyPgjAMMqaDhpkZpMSFFTRKtavCVXeK1TTRVJCQkZDzg18E",
  "key30": "Q2hU4d7My2YeJ1yvjwcwHCAq3RftMKrZnHEwJnHMqCbXBER2kEnKBgysrPNkXBsUHEVuhFkBC9Rq5MNsDUSQmbY",
  "key31": "5ee6FjxwCMFAuwFNQJ8Zgg9Wmu8PGE15mYUJ2hExtBjUABZ5jK6SyQdXKhkAkTyKV3cmxcLNjXTX4Xp4Gi2PCFDQ",
  "key32": "hGCtCNr2aGduhZqTmVeMYemxaaysRRpPJdViKsn6focdBVpAkbYLqaBV1v1d2xVgHeDhWf1gu6pT3gGApq7Qtam",
  "key33": "5xemE6WbLBqTfAHXJKXBjGQvky6UVdTyFLrutNVmB6FQhe399fRsURvN9aAMKiY7gE7PghBX7MHtijnHVBQB3psK",
  "key34": "4APp6LvPYYH7epxJ58HTEN1VP9eHAi27ZcwpaEuA26ZGbr6eXxQTmhjXQ8gShxK4NvQF9ivjDTpFNbW5eLd7hZAH",
  "key35": "49xpkVdd8uuwB3w9CDG3vDCDwRbDgCTYGztFPvWTWK7sTUtXrQr2vNZee4Um6gNi5E9iLbmMHdjzh7K47pjm2oyF",
  "key36": "2cW4fGbGG2efMtRSP2T2in1sJNKV9SUNhg1PkJT9Ge3vziko7gBSDev6fYic4MJbxfBToZ2ef41Uys6H48u434Kg",
  "key37": "21zuYkCNm7CVhuLAz38XkS5Sfw8DvFC5NALfTv1EvopK23KpP2J8hTimSWMQozM8RTDHm7d2bCoPCJ48y3GuWYfW",
  "key38": "4hpUyXPyUtHNHTJJ4wgLt7r9xivCMoN6xLraSFdrQ4G2Zkno4FMC48EYcnjxRDZvEvtZgNf5iCQ7BJhkRjsPDkMu",
  "key39": "3h5JzUPfGZTET8wEYNVxWKgEtdcEYygjU8TuWwGhByEDybHXCsDi2HqUMXfkFktVsUYNYkeDB4bpS46B41DMF5DF",
  "key40": "9edoAcZZEeTb45CHL4pjegTMg1bVpLKSNMbyGnP1pC3XiebrRpihRxFy3k5VYr5PpdVvDpeqvJjBcS4xt6sZ8Dm",
  "key41": "4B7KHeW1eCn3Qi8hVxYXJsXacobh1WRkvRPiE2PgEZvCHEndkqbuD1U4puZuVZVwRiVv2b6umSUoa4e5wfJCLjeW",
  "key42": "EMR4yw6Nk1e8FF8XBpFrjG99i9n2uTCgAocBFucmJQsuxNqWUdkhkh4DcPSCReWhpB4jGL95CvZb9xYwWw1FkC5",
  "key43": "3HabhyA4VY92mo6gcWxGyKg4k5Jq1Dy77tjWN7FS2muQ44CyPy24ywNJjr5jXruFVyT8JMAdmZqisqgEaRQY8yhE",
  "key44": "3XrJrtbvoPbhAAPqnfa6C1wg9ss2ViDdbW9m6zhyBSMfbpr7tCaGogVVTswQYoqWDDKYRL22gkzvps9XwW4VUYPx",
  "key45": "c9ZmW31RrQ7eSCNeTPTUpTJaUJ6dCPXnv3B17MiwvkpKkM9vCXBQ5fnnj2V7EK4rvyCrJeRDQd4QZ6aMGee5ZKo",
  "key46": "645zmun6yDg4V1VFoU4aVME9jns6coXr4yXSbMH3ZeBfvytAjada4fub8v8nkm6YcKQfSJTyVbH1gWj3yRLDYwBa",
  "key47": "37k2TCTvb6Hz7Vw261dP6eRtMuYCRfYNWRV1FvkPyk4ebSzdautGjAFo3WMxeSbn59EdygL4N8X7QEHpPA9yA4Bm",
  "key48": "kcxNSWcMY5zdunfossduELXZqKj8r9AwLoqLZ2mCfS7PxDhKUK8XbPMiK7GUufdyz5UH2ca4Xkm5ckJEJvgky83",
  "key49": "5WaWwP1qbLsaNuxB99fLhzwsLfbAzBtYjXdSpyT5X85cADDeBjYyaETHsPLZq3nSumACLyKynG67zVmFN7CmajwB"
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
