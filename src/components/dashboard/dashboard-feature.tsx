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
    "2utyvbuFkpmr5riMLWUNRa89TLkkf3rMJL3Ni72fyt5s66PbdeAAMKAsR2UQL2Lkgpngn2k8CQwQKj7HgfQGJrNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kiaJVubmu3xrTnBxd1MfnB9xYWNqjnMnW67DCnSHbjxxu5NsATgWeUFggFX39K7MrcBSFkVwegMZXYj942r9Cmx",
  "key1": "41UcNKEWzYicCnN99QfbuPKjVtT5Hjzrff36xuvmt3BKr4tPpBJKg6kmxyRzYvpk7tnYKp2hMjEDHKBkaR7q7zGv",
  "key2": "32gdRLdiC4Siz2T1jTcmsRMHqcR6JZgTqBLQ1Kzk1Z51ejaEZ3ZWGTt6FcQfZm5x4yhhaxS5DbmxxbvLKhQpHajt",
  "key3": "3q6S1CCguyFMw5bpY6vM4Xo12tG7BA8m7b5y2FFTcDcDFofGgWxgJWhsupU4gnakXbJggQ7xGwQXHuqtG1xxcUWD",
  "key4": "4Xx4SKJcxy7txL5YeRP28k8sZGAbcfXxFNXhcvHbkPpwdjnk8vbJYh4rySutePWeWz2F2BJdBoFb5Xu3cgyQ8XXe",
  "key5": "27gv69w9AHbs9xEVDbb8RbkjBUBP18q9F3RsvEFha7GbpFyaWqFBj84p6wqJJ77ShTF3ar7ttZefHa9M627HnGMx",
  "key6": "4Go1B94RKJA1Svbk7zbzb3pDuW127dJi9WrU57ncGBsovUoT1iVVaSYuMqtpdb5orhBLtj87Kmw7noZ9TFyb1yz7",
  "key7": "3ASvoLCtgcMdLTrHDSdLmS4Y7cQC3X6mn9JSrj6XTHQw95Zfbrv2g7RhYLQfc8U3FJUwYVHN9adEFFaa1BNz4q9s",
  "key8": "38Pwf2ddM2jPzxQRxE9pYX9yqQHNoECVG4tQN9UMDjau1zScra3VPqfD5eAtUUXwUXN5PRJgjwxutRpBZTvvg3jV",
  "key9": "2rrBSyiNB3afm769R4mL8HXaNCDiaonttaW9XQD4Y7pwbtv3hmxABY2BBeWxXCLziEQwsfCww1ZGvii8EEqkF7Wj",
  "key10": "4maEq6gjh7yJxArc4ywAvkfe7vQftVXqxiUHHXKMyLeoKErtEUNFEtv2Vv4ctP3JQd1Mf9catLJbV1BtJJ6G9Mib",
  "key11": "5aGwksQFz3Uk7Xzcz3E2GqmicT53gLvzb9uRkHMX57hFHadEHqSPXGVaBzWnLigeXX3D4HUpVTyuPpkozjWzdC7k",
  "key12": "3qs16Jd9eUJBoKmpFLi7UMxbUbqk2kGEosrFoCW5ZzxqLYiL7SP7KDDKVdGfHgFMrdr4RU9NbbeCz5UPC5xeBPe5",
  "key13": "3VJaa2byAREuguwzyEep6aqpUBQuykSKWA5AoYqstgmP9g7scDBh8sC1Jdpc3AChHj5ua1ezjQBcRXkGSp5FzSW8",
  "key14": "4pcSiex2Pw15T6823Kk1ugmLsnA2qRazbCZfhnX2ckemqhHq4gFWk5oQcBq3BPnchpN7QEXVB7RiNt2Dioo4DzMh",
  "key15": "5hL4WwujKn92J7eoQetmJGQEVTAMqvHMVhUhJnN1ySLcV6EbzpVg6hrevU1QMjip33ArpM34HgY7atNrD91nBP2g",
  "key16": "3oDFLcCgjonVeqbKe78ZPnEq8sJiWB6SVgZrCBg6i4MrrriMZTHUfybikEywPGGhWzKnPMCvhwndnXcspBW9JMZR",
  "key17": "3zo9hdNAKmDXqKWK6mRppwVg9v2UFgJvZ9nhoy8WcSBcerAR1n54Htyn9bt9LLMp4BVZucvFKNDYmkPZWhSiW7cM",
  "key18": "3cNHJSya39oVmwVj2FKeYJuVThDKWoyebAkqTicJfm9VXzbwy3mtcvoRyZgvC59V3z9JGLqW79h5nxS7pbjJszM3",
  "key19": "3Mafnz6BaoMygKPjjqmhFRNBJuwVgdLpcaTHQB5aywv4LotZeswF8hVkJog3FNbKCcp3ZS6XbztRGDYoXuQpEmmy",
  "key20": "22TtQu5AfspGkqpYogJYFXULPk6FKZ5N4vFn2zMs8AxVcHfQNCitd9M8aBNaBjV96QqMRdp2zMFboXHbKU1Rn4P7",
  "key21": "4uM4py5JREUwKqpwybtU2582ri56ndfUEGs6kfpTbpRm45u4tMkoNTTAx37YTXioV5TB1VoNPKhWEqMb1iKWHTs8",
  "key22": "38BFKvKYWsmFE4mKXxBFtQzHVidPwQQmCH2R7Am6gF4nSNahG7BK5DHo9VLkSXP4P38F3w4HdxuXyducjajbBztd",
  "key23": "jxYJqJVgX49WXdcenH73kzrexPafCBB1Rzn4Ti8KSqA7cDuVnbxjJ9P1ysmhfRe67gAqsbRL5QRrszXXrjU2jCZ",
  "key24": "4E2AqAagntWoDfjkUA65MEMNLteFQTDwneusazyKQsWuh1v9fAL7Wncdsa3uqEnJQk1bgDLDADwa8cqEiSpTjNmk",
  "key25": "317VxnUoyGkrfYUBRT7yb8Ny7F2pqoaANMoMciNqtRrviUQFkv6sPfSwTbPtinEB99JJHgGbEhB3MCLVr3qg7NMq",
  "key26": "2ZtCDBL5Hw7C4aUXjq9iTAbiEfeSpuR3ygWtzJpZrd76whkFerUzSXz2dG3Wf3FNfYSVViBEsfFCBpu4HMCXCwZ1",
  "key27": "y7fqrfxFBKrh3NU7AK7tCKB5uqb8VhoPaRC7Fn5gx9SK6uhosPReXJfaK9SyeE28qDC1fpptGALrMh46PYzzBHy",
  "key28": "5k2Zni7Zngo6ChGgZkqbuhM3tZAMELnyrSn1nQ4Dg4T3SFiFHM5Us5yjiRbfaQtdkRCSFZUDRqhFD8Y2MWWnVaEa",
  "key29": "2k8D2YzesDGtyVbcDL1vLd7iwHS3D8D8QiNax3vYZi7NLAYCNSf7ktwLBZM3gneRdU8jwJeKPT1ksbENnAhdgBsG",
  "key30": "3RK287K8vCuhPoomB31eU6NkBt2DbZQR4ecFEAGkryjf4wz6NogvaEs9oAiVSNjBheyV5BvM27bA4barqwjyEQHt",
  "key31": "2ufULbmxxYNUSVNtV29mCgMcv6pCBFyGqexPc5MRzFccLrnTde5k5PC9dr7WKdqVQyW6fJBd3Ct8WxaU3A4iSk8U",
  "key32": "4dGyDMLP5whPC7TqLsdtg6mGPnUZTp4j7QsByyYCziKnNCEhc6QAkZsFdZuBaxE81UuuDrCQ4AwJoEfYoX7pxjf9",
  "key33": "djZpVvitx9F5CxhhutEGzGP3muQZdLfMT9bNPheNiVKnN2Mw5un7WXbBFp4zV2bxW8KAEsmTofMWEJeHbMQSfkg",
  "key34": "3BT6E7Uwy6UWSD4iWRuR45QT4qjoE9o6q6VPLDENbFKyGadcGZ3QNshpeZhPj21Jfe5z6q3CsXMDRY7Yb87GdPaB",
  "key35": "57kYsXAsEuDo8dR1JUmpbSy5iZb32bpR2yByCPyeefquNtZXkK8njUZ27CcDs4WDs35xbwnP9757eTDrNBT2xTrc"
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
