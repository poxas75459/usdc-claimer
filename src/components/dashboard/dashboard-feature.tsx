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
    "4TZWuXnD9oma2wPAmYqsHcWpafTqciSYPvEXD6B4Ezonwn1vnAdg1QJhGZi69sm6wJ2Mrh8fb8VUN2MEAXmni3NC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oGvYTtPrHeMypWEe2WJYenzbQPDZZWT6NGvUwhFX5r6PWA4jwiUVvLMQNM6XPpoS5cFejtiNauHJpLhJ37bNPqu",
  "key1": "24wP2ZLhwJmSPerqnj6ct4ujqtiP3qpDDLbKNpAst71bAsqRctcELzGkKDTnX863Va3VdG7hHs5LwevhVQBjNC8z",
  "key2": "61maNi8jA943NwFt9G9Ng8sAaZMbGdYdMjNyD7hYVrNJCUzrPZZQCKvKgtQqmKynVdxVjzFraVP3g3R4bWsiGNC6",
  "key3": "2N8nZhGpejbZ2UNM7AYbv6gb2zpxLackzSoQ8Dv8WPPphFg2nKnvuiiUmovi8Q4VpW1acP8tGS8xmxjcmzamStJ4",
  "key4": "2kzVUsXMJgU25ghNTuvjUMzWmE6nzXi2yG8GvFQXusnznyHZccMKEHq2agB8kPTaisTtaoC1kpD9f5TEKvREBDMD",
  "key5": "2m639Uq2WT2giCbaAfTYBK3yRfiZNTvGi6nTpRiddBaHhGue9fpSdTZUsUvxktppLRngrLfDAS5evdXC9CSr1mRA",
  "key6": "z191qTJA8qQys1fNXcDyf5EousgLBwa3wzcqDLqZUHoHhAXoKc19UWnKzXhC6SXC4Yjj9DorgLgkxrw2sFbDhXA",
  "key7": "2x25qbrK7eitcjZPtwN1X2mJTyUupZ24VCDXgZcCLd6X6k5K1ELuACNgGDqJSCMufDtEQwmHGDFV2sMK9uBqKHJq",
  "key8": "3ubbcZBBq1R2WJ7Dc1hv6VTQS7S7mhKsuioqSfunZakse13HDhXhcSjrWVorR414BKcb3o3ERKo5Xq5XcpFMtmuJ",
  "key9": "5QRWsu6CJpx8hGAPRmwjRgnJh79qEz4XsU1e3QDUZwQf6DGn7EN6Fj8jxzqnSyasryh229MiVuWK1E52vWAWEpQy",
  "key10": "4qzmLZthHASr5KEECz1X1BCGcj8zu4XoYzPAMHTnwHRj5uVX4J3GXXsoQzm3VtWaw4AAu39bJW2FVPBBVGmd9Nhf",
  "key11": "5L6x7SCbZqSM799jP6w3rA7rNPFhYQLeaa83phjqKAeWbNFz4X7aRNZVEoU9mfCXM6r5E8TUdrNVTnnnb9H7X6We",
  "key12": "Fa97K4jkxkBnQ4c8vjWxaeMxWriwt7KN5PVGSPNYTX1MCbVYbWdzaxJ4mahKuqkz4FDre2q7AvADdMaKuDmZytM",
  "key13": "5NWePAzj6qgo4QepwvycQ2oPnJEhaZYW6qJMrqx8zViYVgDLhLXUjTjrAoQ3QDjBfamrFApkaAAdvoF7kJ9jFhnP",
  "key14": "5Rr6w4aYeCWKSqwSt13v8nYHEupBDZQ8AVEDNLrnuow1S59idpURWs8SiNzZXNNyK4VaYbbhc7MWRJRAQsHLehH",
  "key15": "2s3Z3DfGKRZmLM7L2Fg9QE1y3vWFHCvZ1KUndKa73CVKzajrP99ehPkSBFVLdG5GieRB5ZSPzXTTfFzLow9eiXJ7",
  "key16": "2wq7pDssnP8Fe7gm1rSLybSpL7FpibgLj3SyHbND98bvjyZDstX9VZ9jCtM9X1u5v8iJEXG5RzgycB5eifnimzos",
  "key17": "46FEDcmYRMY5GJ6pWToqtef2FRdNZJEPvdCKhNqaWrLsARqineGXW45WRTpp3GcLbm9SzNp7eLickwGfSuE3orTR",
  "key18": "2s8UnMxL2EZpqSBGTWku3Nj71nQNwJSFph8vWDKkhTaBZxiebcenUGysaubP5A1fHkj6ssWJBCV4XsMurWJQgUiG",
  "key19": "4EDm1Zt38fvBgB5B1EnFv2GkasnLtkWjAAso8MLDJGQ3LGZCHxiTAH4Q2oRgBSwZ9YFBEPnTX4FzCypzr1pQK4hN",
  "key20": "4aFfpJvpnZYcbMrREUwRettJnM2V5mX16MChoAdYqbc5FWbD7xozMecZ8EtGhq6dVWsxeLfHkbJehUMYLwYJ51YZ",
  "key21": "4dKPXXDp3QsFNve5g6SZCka8z2tpaMnhFjRDTG6uMsStHePJtMf2i9mz8ninEv4jGhQ8kBmPvkQXA9kgVbZR1SCQ",
  "key22": "3MwUnFyT5oAv14Y8mPswJeByr1pVsANCXcJj5zLhiAEoHtyVMuW5QJEB2bZc6xpncz2YaeM9ubNBciXUbUdmhMLB",
  "key23": "4qffJMuzuPRk7YNdJxTHhmt4EvVgg2nnMaoK8TKXUg9NuMEqjE5aNTJUvFxLUcfh4vHwvQfahAsStkHDpPMzaz5E",
  "key24": "5FHngxkaL8i85izY4CVTeFKRG9AX1HF53Vqd22BYmG1A42turqpEvnwdRTpyMxuFG73k27eSAyJfg9J1ebedGnof",
  "key25": "UQUcGUPmSq6LXYS6JnYyBdPwaKh2THcC9pmpuj7wUMmsPdkfTiqXdoWCZ4uahqXUeWMw7wWrkJRxDu3QR1w4ueZ",
  "key26": "2kLPnSdUquwrFzDMZuhiQghCsw6aZtSKK1RQEKYW3eAB2yojKnRKHAYtipFhmN7jcBWinsmjpkRLxYobxNk9eb1o",
  "key27": "25ou2WSQcbejLLctrsowJQcWTuRopmYPdPvMTxfbFUwtdzU7BSDMDTVQQiSqQcWdKfCXMmG4yRTGN34HfNAGhkc1",
  "key28": "3q5znMcE8Y6F8bg7KeUNfcAUTn5hx9vzLCC9ptGgnnDCyxeTBqUn2v84zShQwjRTX7RgnYGzYPUNoDUprv3RTo4Z",
  "key29": "5VxMhwHVL4u3xEJqkQP57641cwoJbWUdSBKGvW3yrH8wcAAGvgB41mdNp4gYqyPvBpnt6LJNiK1Sb6zfq8jukZ1Y",
  "key30": "3Uni9fgNY488QWEUdCCVGTdzFWgbF1YGbX3AhVRGcdgnofnCsajGTvL7PJsS7TMfQ1ALZqM5Rb2HkpNgXH63bsxX",
  "key31": "oU1kunHA8hbbcxgwvdj48Fgfjj27jJCL5Dv1GsCehiLVn7YbAGSoTvsFmkDYQ4sJYr7Up3m11AeW8xNYPd91KLh",
  "key32": "5aiUygtUFAXSfgBJrNN6K7c4tx2kith5KoCyiYtTHAErhhpzhaHbLCfXdohrmDGNSpzmAkNcJoB5wAE137nAPyRU",
  "key33": "yRNKYdaiq2qftvZVK5j3DjK6W5LUPxfdzmeh7AmbGYqWSoKZteTKPaYCwd6iiWCPJhXcSQz8j3kEQUXavypTQDo",
  "key34": "5mU2xDYgMeQAAsyVZvEwRSfmMLq12TXuC4HqTJR2MRGJKBrYLSR8DJU7XoaTaVNBcmJUJWoFVbFzS7zoNKc23mXt",
  "key35": "4yEkygPdY2YCWsT2V9TgfSKT8tdf9YjPZJEWQh9QfkqpDgHZkvCd18swQWimyx19HDBgE6c9BSxpytK14v5ntHod",
  "key36": "2KTBHJDzDv9KacZsNESerKBjC3gehXFSJf9Kkf5brDmUNft4VMZWuHhQrMNZmH2qM8HMmGVwPzGDkS2j3eHnGQFS",
  "key37": "2z6Z1PxLNTS2Af8AWir2YwenXfrizNCuQcJysNs3XimdhSQFhZVSPnnyFe7186CmYjUGt2vrEXENkbV3THaKbZ4e",
  "key38": "2yP1XiAeXrkKWjKrt5gtSy37EEvpSCKwPKYsJm8Qi8NbTQrZw2xiny3f9ydeNM2H361fPDhhXneefFh29rzKZX2P",
  "key39": "5vnWGuue9hT4XFFHPE9c77BHrLqj7GV9snzGvXGFDRmT1v18YhB7jkgPZYLYNHfTwZQDMTVuNF47iNqFCaq68q1H"
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
