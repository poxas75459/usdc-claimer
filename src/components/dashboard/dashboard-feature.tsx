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
    "37DCvU9mspqStfpbsBZKLQ7bSt4tHhQvRH3GVmP6AZNWw2BpYXzTcWVXojAKjfPvsanDKVRr9baZ8TBsoGJKzu1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Aw3eGqRK3WTBvi8FWSutgwp5WQtbxdgMoB47512t7BkTkyEAk8a6yWiKZ36m3Cenc238BYPDrqPvRivgN6K91q",
  "key1": "2PdF9HPdwvYFNYoRgqsYu4gkqrYtsiiLexFrym4hq8B1YnzP31hfqM7J4SaVQBLVywWpNhwGP961hr9ZW6Mkokev",
  "key2": "mnFuANQv2zHHAjYkCf48kbhsWGHQ8mDAFhJcmA5VQVUijNrLFpLWT45QCLC5bkSoygBqHrXiDzASVsWRVur7Pzw",
  "key3": "4KmsMG7opJA1XyBV9zQAAtE6WDFziSgfRz5duLHRkJqzufFygMe8CLbpCNY8evMxjzsuq4S7B4AQkWbsvsJz4RLZ",
  "key4": "hEBT4zrwGCr1KbQoeiRW8ZwG1MF5ZPnqWJN19B9n3dTJUK8EAiGGtg3DeFpfx6rWEgqtRNscbKtE4juhumh7uf3",
  "key5": "387Kg98ct8jjLnnmQQ3tpEe7KrjZpQWpoK7jtggQsfhpGL5bgS5uEcQ7QfaiL7KDhyKyeDbdjFZ5YGteVAVNTLXR",
  "key6": "5VXhDEB4tbKyT8hdcThkLntVXqPfwwRomKnbYWaFEhBqx9Xowarb5THfDqPrEs5bJ6VHkZwdNTQn768iQLMvE2Yy",
  "key7": "5gqHa8YbLPABtsBJT9jatqmvyc8s5HumTSuVtCr32Ns7TXry2HjNzvEDTVHAGEnKiMFeYPwgY3C5RgKwKYVCqGEb",
  "key8": "5YPdpgEY248wDtLpwy6C7kvWMMo9RJFmqNoCdmAkQcuiNbpJipV8A9mqrDF2CewS3S8waDZChxyqe32s7f46iwL2",
  "key9": "tL1Xmedc6EFk5KHikDDiGXrFd7ykVxG9NYV2DfTph2oeijsuutxDy9SPCmsU75ko4rSGkrph16xaQxFN94pwocS",
  "key10": "3zGQLThuzRp9cNPC7TbcQGkWoArr6E3EVyrXSKV5d8i4ckMw4WTYLmKX1ryo56nuVEgwtoU6ArKu3n93ZfGY9eFa",
  "key11": "4TzotiRa2rWBXptYX6t4nqohiH6a5TvfqCD2BxKiST5BTsQA7i8wEpZsdVcjxWvPQrJUPm8kHfQpaLQTMxHNRQ1S",
  "key12": "vYvk3THEzug5BRkbJRDRruPKT6oFGZBprXTAsk91ZFZDps9oN8vRSoVEoRZW6Ri3azuZS5oimC3U1EmpWPLJ3ZB",
  "key13": "2sG93Jg7VLxVvbAvdqGx8B1FvTSRT1sQFbzRofdcUfm2EpzvDDzzB3GktSe18GBPth82UksDkgaBgFouPync813X",
  "key14": "5aopGfMWKTgr4iPYstnoVBe2MScNtso2cc4CrSVSppuSQxjUJdW2QUWHvfDj8YbR6pZif1FYKMDn9aAF7v64chtQ",
  "key15": "65DBmmsP6SounFhB6p7BHeeMNh8iCUScZVybb5C334KEaRc5jViZMZz5i7XSG7gmWGVFyFcV1BGYmCBaxFVuCKxU",
  "key16": "3HWwzxv8nEay6f4A26H2b64T2epkw8nwjm8DnuLabQLvnD3Q2DABJZfdtAF3jvY1CjtyPxvR3rsYvE15mrJbmJyN",
  "key17": "4BWL9m7fKaLzQaaXAVToWEbfAFDZCMZVnCcpSoAWg7NeDU4jHAQkLhEMyP1xUsTixWFaKsXypz4usqRJEgkDXrja",
  "key18": "3xdmnUfSeWL7e7P5BiYNMqHc9HGAvTsrVzhgCuzScj16n4JjrApXeWWM5hw4tgn5E6tCnKgRbFToJWNauDDULxPy",
  "key19": "hN1Zs7iQemUzKs4DNtjJHarE4sUA6nDPWNkGfHomKqn2Ezswz4cS6EfPYmF2jcj3E3zq4vpxNr1MHS8fwEbXwic",
  "key20": "4Gieu6vHmpT1z6aPLmxWZjKuvMDCnp5FsuMmRuuKCCR7BN1T8EGUhRJQGC2RbH2FLEBGCnnMMfdLKLDMUGhAHjxZ",
  "key21": "4n7TuiNScmBWCwntyCUuZSGLLUGHF2nP1XnmdAgSQobhoovmbv2gJK3vD4yMEP5UVx8kP1Lvzrg5jkoKxov5K6fQ",
  "key22": "2P7WSNZyM8kBLqe9hyvnsnzjtveHFsyxSy9a8RpPHjMs4Ui8pzpS3vDs3tKC4URAZc2Cm1jUd5mMZnWGueZibgNV",
  "key23": "2Q3n64cqWhDEgGcBJEtL6LcDeW6ZswEttn49CPsccXoe9XQJfkumRjnKqqvybGK2yxZXYK1fcoQcJpkAfzsTtjUr",
  "key24": "4RNP5SR24sW8JphdYYyB8eMU3GgeGZvjer4W6UhegFZzPExTJTHajphZKbLPQwCiTKR8WiJfCCT9eo9XNgv1Peby",
  "key25": "4VbX99HeEov7DVuJC24EVnYbQZXTkp4UAPR5wqSQfuAhLn4Pa2CvC9XEZs8DaiQm8eAwRUzPie2gCADrpqnjegfu",
  "key26": "5ELqTPsoikLbNg6zS23fXeWS17EibE1FYcSRsNB9hmWhXyaBy1BcS5qicoNRtpNA3HDF5kS74MfkKZQbj8sp6Cit",
  "key27": "5DPqY8Vr7fFRgm799HucLK3WAm1fTdSqm2ifYCuC7qTFnHqg9skiHLzma7LuWjTcQeLSnG8z7VC6rfiSWd1LGnzi",
  "key28": "3i1X4t2JppfxwNDFzcXsVq1Rqen5MNVwfgBzjADLPPNYhkoPrnKKddU6jbbWaozhuKbPw14PjKzYTuodPcK1feAo",
  "key29": "2KzqQmqEekLPvFSiazCcZ4xiinq97qnfyU6E9ZQM6fmk3CxzoaVQVNd4yer9GJsH7taZTvf6hnReif6VW9uzu83w",
  "key30": "5KJdvVbWWB8YmR4g2WGcD35R5JbU5dY89hB2SxRLKxQJ8PTvBjNj3FvKWYXvDwPEDP3NWanrVTzFtNxKaXrhsSJH",
  "key31": "bqBKPmE3T9apgzHFWAxcrLYWGbyHtGFqFDbG6n2qYEsUuKR4bqenEtGYZmZGMJE4wfZdLmxGrfkkYFjMsoZEt26",
  "key32": "2yYGDqAWgga8xwwp8HL76e9qy6Sd4KumdTw3D4a4reMpQdSML7C4rtR7mqhFGrEe1vQ4ZhbCUzN6PM7hndDuLyiz",
  "key33": "s2bVdhXZF3Uy8iEcPUen3nquwQRcyStZkJtjvr3G6Wr9sUB3eLoVB6k5CyzUC1NFuz1g4u5h5WdWaWAz4bDBmBu",
  "key34": "5C54L5ZvkPwBQej2xRajC5h1bZahRttBTJkV5YQ2FJ5ZzY3UtnJh8ent4JiQk8KqBfNr5svhcFWhXsEMG69rNv5B",
  "key35": "2mv24RvZqSwRBzAfsSDNsafUiVAcykNdgYrekF2StAXcQB8NH1om6pUb7VyzNdt84Gidc33L2j1e1KFi7bDPBqne",
  "key36": "4M3M1fPqcuJiX5UPjQP1t4akeL7HDLG6WHX638RELP5KJKc9VF2c6MtstFMP6LsJjmPXxj739vzCXzVRjvfmkv8u",
  "key37": "5tmkJkaeR11KzrN4F7WbUpUVCkRuuyh5aCLw4jSrW6Gn1qiAr7VnnmQeMHxu8M844HsLfi7UFM5yKm8oDhfH6ZSa",
  "key38": "QxsG7H29iTb5tty88Ts74YqDDfjNMR4HE6dtKZePkQDmM5AJFkiWCUHtgQsrWo7AMQyhUYf8EYPT6ch1arEQ9mF",
  "key39": "5RsUCNAB5ZvTRFZS2Z7tg6hmTV7rsGtwdYRSzEwGXuQU3re7KjAijKbmPtxfrVEaTeAq3owsYZU4KHsCXexSPpz",
  "key40": "2WrudJXbcNeTo5T9fa69npG8TsmLpfdDAhochURB3UFfXgyqZxkBDN3L7uwC5Nx9VHw4DfyeC44KTctwUm1gqxaT",
  "key41": "4wYPZ53p8fb7disERyZBQNhJfVCkSTCwRtv8RwgtTAe8hctdTnHfnSVqFwgBLJTNA6YW82RoqEeJ1aueVYzXAe63",
  "key42": "3hSzbQDXCz83UEQj4veaG8qFHd65PDiu7os3cNWp67U7FbL3X5E8kNR4dsswZc2s1EYBwop1EoRRTCcXXb8mueQY"
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
