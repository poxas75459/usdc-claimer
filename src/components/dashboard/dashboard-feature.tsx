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
    "251wGtiyQ7rdzsYVgg5tVpGvWRtLTwM7p9TnG5mkLurA6LS1ZX6u6VYb3vDBExZHKNFSKNBUqBnFyVEHTbneNU4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64bCoy2jhuAKGjaA67NXXPjMyzcxsjz2jqLdgLEBDqNqrXp5TNnPvbL6gWQHEyT1Tpj1E9Y41XBpnBGPAH4eiYDC",
  "key1": "5mRVL95edX5BZdr77QwddCiFX8vpp3YBc1bXLF1sw9VvJArpaEXpYAp2ndvALRkMdVFUSacSJsH1ghYnnGfK1H13",
  "key2": "3fMnYGmqCiGkPW7FqkH3URGXfhFkGYZjfT9SG9uSojAE6kfyxjBv8bczrxLT3QS9FozuBaM8skZ3gUXtUko7bfuC",
  "key3": "55NFgiFSKi4Y9rnPhibAZSodYFPuSXPNuJM79bi2EqU3QZpxJrpTfpv1o4uddybCdwg7hKiQAMsWSe8n1MchmbAH",
  "key4": "MLzvEoa2M8anU8mM2b54GSYiQc2dwThku3D7bWCg6P62zN18Y4CL3G15tyAQG6nGSKDxq71eRaRh4yn5vT7ZyiS",
  "key5": "3qi38K7bdofuMbZ2Hox1fnwidai7myZX7raoozTpXY9RxpafnQeVDeEoiooSVF91PARYxZar31gjxDJ6b7CK9en5",
  "key6": "3M9qsP3jrSjh3kP4FrD62JExpTXFxpBxWqzhUdMrbiMCNdqqC1jGZJEczM3mYtYUmTDYmLAVCd2k81JGGX41MPSb",
  "key7": "8iFmuvZStXeAMMo5jYrTiUzuamchZEefQeHokqkuWAGwGDtxfRs2heojEz5PMQefBLJahxYyqm8oN1fg4SHotpy",
  "key8": "X1yuLkMDcwWfh2DLhpQ6VpxMBLRnR1uEmGkTzaKRZfYJe6i9nY7PDyMof9mrQ6G4NvV6KQugyRBB9BRHgM4MRzk",
  "key9": "YGXwsFBc34wT7vbYErGLX7ZJELmsMypfSb9YdUvRexbp2oa2AoPhJj2cTWznWm9b6AjZoMJW6Mk4SdrZppCyxXi",
  "key10": "4YzbAfJCz2TGTR3pB1BeU4viPdUkaihjAU1aRbb8QUfX4RUckFjKFxeN6T1oEJeUt8dFCjL57pCRVL432KvUTrWZ",
  "key11": "3NncJxm6vwkf4s4abTbDUjmdsn8usJBDtgfHwYVe36ztvDzQQ5Q5vFcKfaG7h2WGoEyRE2DjPaDj93BngGYdeqWv",
  "key12": "3DD8vD4kYYPVG4YP8c68X1MjyCXQZHBapSUEpBkT2mPkYZkxTSVxGcueVmVtdhC3K8DMSLg2cWCgqDGfV7ndKwfS",
  "key13": "426M7tG5z1fvg4VfnNQ3Eauvub631WZqganCTJdpKkYct7p4i8VEC5rzJiW2UURtDVZ7dRD7MpYeT97Vtrm3mnA5",
  "key14": "3gX7p8MSrfGJfryGZdNvocrMuVCLXhgNnNPET5dQTXyLD9jwzw47J7hQnT2yTaxK2Q3MzTxhW4EKH9PMTCXnLWr5",
  "key15": "5Ec1Vm3RZntBuRdXTWtWsSh5jjCHH14kZoYGzQYJTrH2mNv1ZiAMQkDZxK7ff2rxHUHXRdLx4uV2d98sDcq5XXWJ",
  "key16": "NPLPzuk7tPpBkdFwrDx49rezJ46khb9UVEpGL7QKoZzANBMXNgfg8u75AKrkWDw3AKu2SYfKsMiAz1t1LuwcxFH",
  "key17": "5LaXEUCEeDfSpbijPDCgTc9SvBuFoRt7NZrByAo2rS6GoMWVkszUEUtndKMrZUjdogkK1GFmHivxgM9QN35YtN6z",
  "key18": "4dLhGEBMdFj5UeLDUBFCD3o3tML2sZrUEu53NW3dq39WCpmEQMr23GVF8fSLpX3FGViVtZt96W8wsdjcffJJZ1Bc",
  "key19": "4bhy2QxHfG3YgDa6hAGtUoTu2YpSvD29jG65uNttvQMWAdU49fCFKrWmVA9tuMpPu7tpA78c1ytiUVia94N5G3R6",
  "key20": "ZoKuFQLDVE9Qf8pkWaRqbizreYLsvQVk6xU9e5xJfPGa8A8NezVHh55ByoTwEPRK8gpQd542rcBupSDgHyypgpr",
  "key21": "5pA9YLr5sbNmFYaioqn78se96b8dEtMmaw1xdrUPEXoeZAbn59A4Jod5wsbdd1EejZ6nCk682TufhBEppXGrrPYk",
  "key22": "31VfnV1Hbyd2DauJXXiNkBBQpdqashYAgkLDpe8V8JMeJRM5qiHqP26mo8KaYxTTuRrsUAM1X8fqHHWZUr6VgL1u",
  "key23": "3K7Tx3KE1GyVrjAogkjJv3AMN4vHJLMdGPYUZogU2CT7cRYMnyzjuAig2kRw1GZ9xXae2Nk2ZZFzECap51N3Nt9g",
  "key24": "2oC1zK2piG32tRBEL64rJYLJeKok2rruoEdRirCLGxBntXJL6VLNwmJfia9PjSZNvRnEN8BSpbs726yYbQoJbWGy",
  "key25": "5CRGecKw2VojKjAY4BD3bjXnkXdgY37uuogBFtHsnCT9pY3eTsZp6gXEWULdwLuGN4RvmJs1DgYLKvv9buFpr3dP",
  "key26": "3YcG8QE5NB3hwgdTMAqfMDyb5oJdLTcbvz5QVqu9xZqZRBG1eCSa22xrnrNZBxNgooB9pAQoTbmFJH1jXbjvgYA8",
  "key27": "h7eH5hy3fR4hLAixiF5vZoSemwCY3e6ajXGeQ7vDZzJz6dBoprXnqxoUBGBdUj8vRqULdzbHyeXkhMVJ2Fe7GSx",
  "key28": "29xbYGbBY4JxXVctQZvj9KHme7e1cKGuFdFLvAprQbxFQzAmSqkBknJ8t5Qbr4B3eR4fU8r5i7RaJPE2JhP8EK33",
  "key29": "3dGYk3sJhJRdNRxsKsi5XybRyRUkzaVqXCxHHDQMfju42AEojWcu1QqFu1EjDvfwNbJPiiLkga4hmy8JQFh4mJZu",
  "key30": "5aKLRdrR3vW5PC7oRM61Vk41sAGW8D1uzZvqXkwSc7JcCpLSYFx6TzXrrHuFSFCXjXigsFMeDa95MwErwSXQMKDv",
  "key31": "5pgmDHK4QnptDd1MC3eCT5Ju4aToVYQxQmw1omE2DqX6Fit1gvMF5zzvdANYRFZj8xN7MRSmLyu9q5VH1SAtnC9m",
  "key32": "GDpasuDzupFcQj5EK3zLGMttyeucDCHugLge9LT8LAHHtWnVd4AvxLPYkvuwtD4CTNwuiqhyN1JHQAgkM1WeiNc",
  "key33": "5Af1zw1ht6HpD6oDsL9kKCf9vVd2D1ZnXudcqSWWuLz85RfTeBKaoNQNXei5QfBySj4wowKsfXwVNs1vqgthb6gq",
  "key34": "5g6Aq9sxAguaBrQ9VQdw9z9B4YH4dmwbFumZQRuHXNBiC1CYVYhpe9TLvujUZdj9g8kaipAPcmRysECaZBJWxkEh",
  "key35": "2qG8Kouqgoee6MjudQ3QWezpzq17aV52AqeH4MsB3JMwfsxE5meCGTcMnwfdbJRDjkJ94KbPotD3bGyWXCe6DZKy",
  "key36": "5WxZqmGGxHNicBQTb9aMKuzWxDpKq8eWY6EDoPcZgV4wbmVfc9zSijcC1NuBEDCUBrfxPF77DrUWSVuvg7Ba54VB",
  "key37": "3kr9kHboVtqQH3jhobo7yVh7GKZ4uhDatKEDptrB2ifEBYgt1WDszVrLid3L9yyPrRmVMNoQGXhuYWux8xdttzH6",
  "key38": "2siUbzqsk1MLNutsgojjDhjWPUrir5anoYqg8A3DpduZc5QNZmmvKz8LC9msHGzR3DP1obxxCTNrgbvZhuec1iJ2",
  "key39": "2BYEDrc5bLHBMnhMjrnaB1zF3DLBSLgeUPMbhU76A9Ew7EMrrQktut1FrcVe74etyvBJ3oE5sxDDTqthH2zVbAG1",
  "key40": "2gfxfSBUkWDtzgnvQ2eRaDgwdT513k11S7Lrdkn4jAj3ckFrF2scdRUSV2sN1psZywZdTsGRqgmznhHLcpbLgWSC",
  "key41": "672ZGPS3TrdCnfJyf2z189J4S3GGX2yNmGnDfrNdgSrNKovL4YKwqCiZhkroZMzXo4N5GJ8CPHgQWgFQpTCym1rT",
  "key42": "2XDL1JiBv1Z5ZBXaLa83RE8dRoGuyUJU3FCpNwQPEE8FMPW5224zgnE6X2eCKfp8zqXsQPUHc9e5otHqTr8ZQxXD"
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
