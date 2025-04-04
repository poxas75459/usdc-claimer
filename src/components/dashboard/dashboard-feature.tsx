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
    "h36Acjq2DFv2m7R4whTVQ6TVnjrt3yvGHGCKzZtjypxemKByyAHiR8FwXv2Vecha8KBXSAweyKZS62x4i5KuCQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tWXB6qPqrpXaGFi4FCvRke7uarcpY5dYD7zMSWD2zkQc4vxTesrGUA4FCBiug5Kpd4rweniSvF8AfZrBa96oPW7",
  "key1": "3gLbPs58vMtTCnYwirKS7p5uai5QT9baMVJ55pVLWovAkxdW4YVN9oKfREAZkJ7frroWQ9N1JSmPPCrB8xxdmH6S",
  "key2": "2KoJQSrRCe6qfQeF2zntJsUwwTcCovFMh4XV21KuaCBJoUkDaeHQwjUd1Yga9w7dP3YRtNaVcE3UGtXSUfq3BrKx",
  "key3": "4z8yV5rvxCLxVrM58NZyLNKrRyKjPyAca6we2673dUbyAykrZEb82WVjHu8FQdNeVeEPGZ4HyFhDovZpDTsRRRqg",
  "key4": "48rHcjSC8kPMsp9J6JczSjH1Ko4GKi11493jZczfxFiwv3bDmKztL8gSM7HS4zLwGnyf5boGFN4CPEJg7eki1GDg",
  "key5": "4CeoHN1bCiDwfAxCGG4ng9dEWie28eg5eTsfGv7B9WSuTTbNA9Sd5gpBFZCQm1bzGVVDeJTHsdNyUBAgWgPFNosZ",
  "key6": "2145wSiWx3Ygca7hbPzsDRCGfaF4S9rDuvNjZqMsVVBPMd8fkgytBu5cz9TpVuHe5UCFV2cSDuDssU15HCuft87h",
  "key7": "Ak1s6QmRE4toSzsxGubXrW6VRABynvKwJLYrDVUj5AvF8vbNb24LxxGBaFVsHUaMejgve9VsNLG39X6TRRKAHBp",
  "key8": "3mhgtxtVjj2Hrzm7FUwG6HRWvMYWwbmBnXfokPvYyRNbE1hrnKtvD6cfmsP9Cgwey5c6KdkvSXLdWH6r7mccWGV9",
  "key9": "rSixovD6xVQDSGgcPmEydDFtvTgd4tKtjxWeDAgbfvf3vmfecknXiK7w7qNSGaX1HJFf2zkvXWZEwYrxWCpttni",
  "key10": "1S8hAHnqDzz7WUoJDB223brbgGoZoW5Uk5CeyKPctRGry67Y1EfNWmxmMyTChGZnmpzzoKMxFTua8Cu2yxKwjAR",
  "key11": "5ncbQAEFDKcXYEg4Az951dYN6RSiY2o7WXm3mt6p8MGWS1VU41hVZnxQi9vX31cDWHWTfFYiVhfkPezeBzvLpGyz",
  "key12": "4JLMiedyHuuxiEwdcgxy32TEmNsrnWenfANq4dLcPx6REwWR8T5CwjpGxsmyLYfqxx97gw38gJc6rAjsjjh1j2aj",
  "key13": "61cRT4Q5A27fz31AwHMtJTq9WXGAv52zXDAT2bjXHNqpyZWoHQoa3S2EDMDSS8bu4gKZ7PrN5ocxNEYPdxmMgLvR",
  "key14": "4GfrpY7ZCgessjSqaSWLuxmq1mMAxFwmrTGGN1TpeZVcKWH47C5N4cK8ztiSm1nPeDXfB6BrvcbwQpwwKcos19iW",
  "key15": "4GXWYFk4XuBUm5JSRrh96WsZgsJb5VcqNHG7vJLkZ3CifVjZXjqF9ScVqPSHAsngqeH1pNuNRQhuwxmB8uMeseyd",
  "key16": "2WvatV5pMyzYzsePu31ikiaETXBgpMuCG9mF7Kzk4XQ2ZFTCSUginN9uuKYQDxk9nxj15s39E5FdfyBkcEDsobC2",
  "key17": "56dpRfsLVzm71xBxXLTPhvb9xUfiKFBb6SJ83Q2AAE6JKf9Un3bDHYsdRB62oriAudDhXznDNiAUMfonGGnhAyBN",
  "key18": "5pL78NV6Y4FMiWV179Y2o4baT5xAU7tox2Ycx52eMd6L43XkJ3U6N1iDwxaaw3tVkSWdMzQzdT2C1YHy1PqkbtPc",
  "key19": "Cf8xBSa6htaijnXtB5CbJiZyXozGBCz9mSbwdpWuEPv2S45vnNZiVbBvtAeQva6neSqr81hMU34YJGtETyEUuEp",
  "key20": "3LhyYdU7JxKf15qw6iSNodWTEqB2mT5wU4yDxi67hYx4iGDyHK76omuw7RDEsDtWEWD3S5neDNYYsSYWN4JCKaM9",
  "key21": "3sKxSHRNev44TForid9f4c9pcRJxWX8VjHmHYVqRdvosP62Sb8bf7akdv4AonTPynpgtHSzCNJJzXoGSK7B8eBJS",
  "key22": "HS7P2SXMbLAFg6VQayaacs3MNLmVCWCPx82qdESHpYJrCipyEoqaxeRE5xCX2Lk3PzK8ZaXwSWX6cbf3b5CGfVS",
  "key23": "5UP7zdgUseWNqxFdUUbzEnohTLEunH2ch8ph7cNSqEjZ3zqa9HKuBbyTkZ3YSydcM1Ghv1g826c3DXXn91Qw9KdU",
  "key24": "4aH3fyoYmK9AdK85osyfGiusJU3ppwdWWs2iD8kPxiVeoppf4dutE6V6yE8SUHPbNn7x9uqQKRGdzPgo8Rdi6qT3",
  "key25": "igkKWAiAz7XbXjJqCpPv56j4wjj4yN45UC4LT3KaDXxiYLKgL6HvvftaEx4T4gZ9xEFTeXeVmzuj7ayhW8JEgpu",
  "key26": "g5JMawLvs55CHAPxkH3YPiPDJ7CqLnu5SFX38RDUAkS5L954xYSBV5LjRVubAgkacJGTE6MvH32rbn242wEq9EB",
  "key27": "FChRfJvcASpuUG4FuLt9LYJ74yYqKqgk4LcBzQRLpAsAhnLydbpUjYj7ZfbgNPxf4XjgCgwYfJfqVWtFYn4xTLJ",
  "key28": "4f7rEqqYwK32ogKza5i7hJdLEkMLwFwbP8myx84pEED8FCc91ErEVvvspvz8DaVatNhsKfeTpWN6YD8nHzHb2hyF",
  "key29": "2rTrX68JnABcmt4NtK5XRBxB3cYsbHxuQAZyY6p3fBi3MbFskN6djP6gws351HrtCbxnPdSdL8usNMHRARijjF88",
  "key30": "22vLhqngYkXRc8cS3ngG9rNiAYwqww4Sm363GpxMihKDqyNJDrzbKDg7RkxE2zGU8ub645JSoP5AxKR3bxcNbVDx",
  "key31": "3VvJ7U4pP4hy3yUWqbRayVsE3divGH6dBs9aFF5txct5DC48wezLfzXXUZkkXuGy8FZsdLTXG9QPevxCKE4hYmKT",
  "key32": "3mZYVJfxWRVQNBcRWmLDfz7sRdGanz9DkJwoDiFVY79xestkqfW3jTTQQKC6HDrLDPSWPJamfA3nN9QD68ovmr7b",
  "key33": "NFgRXr8LXmGukkGCNRfuYLgrduLzRWGqgzeK71P8v9kPAK3pwdp8LzFNeJawyStkNwLE8dM5XphKcXMRaxBjQEB",
  "key34": "31RJ5d86uwfQZeCxpy7umyjiKiSHTwHrTFk2pmGDNTJKDYD747AqLnEqGabUfCeNJJr8dnw4zzFZzcWhixVmYQhg",
  "key35": "2Ja3Hrhq8idHo4aiDhrgGCa6mnuee5bUVbhYRTH6XxUWRB2HKbxCRq9RwWaHdLPywJB7yJeVxxgYy6uRXSjdT5Jo",
  "key36": "nbLahrodRumpmYp13jptyhhyhWarsDRefgzzC1GVZGGWq8ESVxkLv89YRrxr1iqz4qk7vqXbe6MkabESP4xABjo",
  "key37": "URvPdqyQ4MPGKRn93GmcTK6gxxSSGAkGWVLAHYjwnzdDS9dvtMzSpVhexZcMC71HLV7Tbnj8HiPaVScFFXcmLmz",
  "key38": "2vhTcBC9acNieUovDwbqkTL5ar6gBNQKthmcaViY5MJgbiSd5gXsZ5PMeKEhmxEbedt2rpuwQvKivzY2eVxiU4xB",
  "key39": "2oPonhiU7tREmstHPR2FNX9urCt8EK1iVA4C1xgeSZrrVCzjkYBnMbfCQnQWTJEzWcDSbvxZg9fW7rDpN2TGMa6L",
  "key40": "1skgPeKmRM8sbDkZ3pr8HPBNHHiy6R9eqp21eep1siAc5Ch2H9usJa6tSzYWiNHXXw3zcWjv1N9Ggg196qfhSeR",
  "key41": "3GRhbrnWmaYrimZ693DxhJfRjBMYR5NRQuUgCS1ovtxnLiGfDzooEdZ2brWYHRdysC2yzgME5ckWeXGsJyFNdewy",
  "key42": "TRL7cAciZK6uTbALkk5pQWdMa7E5z5SCBmSq19LdPvgFkqsJRaiZCc6qTpdiXUwsVeiKi4UX4kHeX8sMw5VME9d",
  "key43": "zEgD54neS1mamdr7fXyrX6rnaNDgx6ELYYfjtKkvzeB6m2Em5dtmn2voDy6UPPgdK2AStdPh2od2NW5au29YkYo",
  "key44": "5Mm5gwYVh38dWCPWgukYUxwc9FXbzdfwYFGMPPLCmJv7Bns8RiDdF4ENC3P7xPAN5PEnoZkNiMpaQkXuwGv65dtJ",
  "key45": "2Uef5WZQQqpJP7tX8DBaGu2J9Hte8R8wnC3VaCatjg9NNRzRwQg91D1FwgJevJp27pX6eZMUuAK4bhizndDKmuih"
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
