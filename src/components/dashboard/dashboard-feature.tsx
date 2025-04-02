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
    "GaXFhczxvivRggSsiTyA1AZKudqyoRuBcXpLT8QF6wc7yWUDuQzrJqzfpSbZN1HYmvQ7LDxVudXtb4fF9oHsm1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JVTRKaqe1agj9KUoYnEUnJpto624jtV2h4H4jGiSKfJopUu8f6ruyoHtb5pih2MhJ1h8ZRgxGNm8kDUHL5x8H3X",
  "key1": "4fs1BLS4G9tvyk8Q9kWsHZZm94LQRHvQfdaBS2ZVrZZoRkk1cvsuB8EfzhALN8Yd3U6hVB9YqHPan3XFvLpms9i5",
  "key2": "SQ78Gehjytx9j4QneTC1UWJspxwx1E8Ro4JNC5NMtLn8feaq8qbSvp56DVH14ZEpFFHSgjFtq8zVLrabE16oLAE",
  "key3": "4XCs7Fy5SXsX4rxCAGiqghWPTwBdDmWKaLzzXM2Ten9igA8KMfgMaCmQPUxgNVy51tZPosVwsGhU7STzWb9JuPAw",
  "key4": "4kyKDPtnhsWYf9V7RQ8SXo6RoJ46CeJCcTe5Z2scf1bdvTTXw3BRQujYYWxGES6FwfH8JT47jvwoX1iTNZUdc6X7",
  "key5": "58tpxYqRhLSmSJwRtfSk93HFxytihwWRxfPxhjtzgej421FwweAmVpE1C1MD4MY8kGQEVcMmDyiXtUVMopK5kT75",
  "key6": "ZbqyGSHStqMX5kKQfUgAbvkVBcEUSn1bd7ouTwYNzjozciyNfk2jWwZj5V8XJJvVY8jbPnTDmK41qkiFmeRoMuu",
  "key7": "37uAMvX1Yiw6oZNgxKsTWGs1QyFz8pdFa6zHssZhHAWVJ7GFtJLzjmRf7jCbdqczBsxTrWWnfFf5oWHUdzj26WQt",
  "key8": "3ci6czhc3HJDbEbK4fcVmmA7R3Xzh1bywxRPdUFMxFCQTAuYmEctnrXpirET6GE3KLXY2k1DKsZ1hXUxC5g4HRMF",
  "key9": "5jVobP9oFAfQWUs7JagBCndgcsW1iKWvZ37rJ56UZbBSg7uoWXDAbVMGhfNhHhYhCi3xkPXLmKEjMAobBH5rebDX",
  "key10": "2gbA8oiso7RxJUUqfE78p5gLyAdxgxMxSL8g8chyPs1FCHx6NPHg6YcBtN9h68DiFuqQKCKsHr2x9GKRdaNWhqnq",
  "key11": "4mn1xpETFzyoVS5VktZpqirRB6BB24xr5DqxFi9jvJ2owMv2bkF9K6DqAzuoszvgjfi43q8hKS4ZPV7tFzK3AKNw",
  "key12": "2Ck24H2kPqT3ESz6bpnFpEPRb3YKzSaR6jDBQMR4X6C4LjMAfCHtXHkyHCwdCeuKUo9h6WJTxDnq31uXs2CkC7he",
  "key13": "2zzroYUw2VuFKTnRV3zux5wcQJ19xgojaTwnZiTskr24uq9ARNtopLbiiazeqLf5eX9dtujiVUtCaDBXKdF3pLM1",
  "key14": "5rYSaGpqrtte2t9LGEMXdFTDAap3mtqZqTgkf57bwHcto9VNdWpma4TtZy6K63TWDsYVHLkKwZPeNeRvYjhmYtoR",
  "key15": "49pR6XQ9igVj4UH9wz8hBRFdpUfrdBH4C4q96j5CeCs7fvxGuGvu9rgK9QNdtKpEFb6ktByXwWp2sTZi3xZLWETk",
  "key16": "3UcJHhkwAgix2pEkJko5roKst97UNz31j692YHH2tEp3waLE6mTyAu76uxMXbZPFecrV1RbF2RZjqeYS7MypW7to",
  "key17": "38UUPsyMZf6T9MgDb7YiinqPY2JnSXCGsKoQTBYPvSbd743UCKoJ4XPYbGBKhAcwzdNSVRm3fYBfVf76n1dqpA9j",
  "key18": "McL97guRH4jqyEU85ZWGPB5Vsa92Y98ewHZvJnVJTbjienEJvrjdCcPKV5C9T6cbYbk1k8gwXrzwkeEWjb9JzWW",
  "key19": "sdCSLdrsMhrMBj2XsCnXs4EcNzmra3BJAQu1JcXTemeNWxpdwGopB2r58sRr12gNfExMBSeF47rqk7dPymYKz4n",
  "key20": "3DgXaAHEm6kDBHX7mkoqaNKwMBaeDSiUiUhFc4qSjtZuxfC9heBGuzCd5UnH41m5aC7SRjwhFv8fcHwBXgVtz4wv",
  "key21": "2ybaSXJAS8G7aScnWnMYE2exgXdx4VB2BtrQ2k5JsXMo5RRv6JiXqdR7gAuHQuvPmGUZQ6XXt4MUbsRNRuunjMiD",
  "key22": "4nwrfi9qYmkw66CFCdhAGgEnD3EvzRGZ965ikvaxs1TB7dD9vwjPgDUP4x73rrwNoqbhpbteaCEtga3sYVKr917o",
  "key23": "WZebN2kjeRjaRuQ6Vgyq9wZp8a5xBcechgJpG3RHfxTJ9B1tAwbH5bQ2qyFrTen3a88SPRwSvVuKJh9LpEGatGJ",
  "key24": "5kuzKZLexxtPP9y7RJDyftjNptWbyqibcPaTezFQkvf8RxLA8SeWiYFTQe1DBkvjCyFeXXpaReqQf9HuSaj939YH",
  "key25": "WNJuNGK4NXdpg3TVMLn72jAfNAM94L3we6wMTUsQVGcoTwkdeYChG3bmU5Ao6PxRpa7ZAwgQy1sSVwX8nxKXdP6",
  "key26": "4SPgJQbRm3rsMj99w9LYQrectYSPUWx2pnZqmigmXpKChzMmmQvAn7HD6ZqjMuTKUW48sjte8EN1cH9Gf92oRjAE",
  "key27": "2NGbDY7wy3TGnf1qtUHwHL45LeE9mVknQN9S6X5VJUxBQdf2HV6m15D5k6QCti3RoHjedjyC99oD1eneKeHRBkH3",
  "key28": "48UqWUzwGZqnX7VHiG1axb3ad7eUpE597rhbgm2H92PYar1eJzJvAGexiq8jvtpkNhwUoRdpibm8F7BVgtXViUfR",
  "key29": "2RVWPL98zcosBKFaDAWNpYW4BNGRfEp5pjVTkBLgDFZP1Zbew59SLxS8XVpvf6Ns9383ELgY8dAi4kQvApokNzRj",
  "key30": "3WDpk6SerVeFdus6X61ehP4mdRGSxuWkLX4gSyQMGdnTLh8G5wzrJc4RBbpCmoujK5jeC2XA3SMmPaWv9oSDQnB1",
  "key31": "2ETwZxJkJbJoWs4SbGeNXgLL5LqBmKpiRQACDT6GYH5X5Pya1GmKpaVz3677LV1RnFmyCakSGMWvcTXE6S95JtAa",
  "key32": "2p1XLyGoGSqisbzKFSVyQMGspn7saM6fiXiRWCji8933WRmZvmpCggYZKw6cBUoqrEEtYMmumjozSp8DFMK4wY6t",
  "key33": "4r55vjHyuMyQomL6a4GgwBhuci4xBgosY5mPzT5a8a9dKtgQCWYrtJ2KmrF5NEoU4nBrJ3EHMdkNHV2gTyko5pmb",
  "key34": "2qMzj4bsmUHHqo52JWpv9cyrzcrgHN7bMXzrwZKYNnxRG6F5GVyggyXv5nzWZebp1suMTQoinjEnMuxUV7pQpSFn",
  "key35": "51FWM735SXu6G4QYpoYABqz7sTLMoVHiPPjvaGgvCD9jS3evYhwQzAoYcSbv1fA5hWTVo6RYGBrYJ1YdtfFrQWb9",
  "key36": "5DdjzUdGhUQk6WzppVguRdoQ4KG81fraB36fuqyW1KKoHTw1wPpfb9oYeHEvk7JyagC4RF68zDWdQJbaQVWCDCPF"
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
