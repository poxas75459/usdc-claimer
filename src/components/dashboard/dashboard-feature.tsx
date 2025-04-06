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
    "4j3f1kTLZvbtFiHM1vZieeeNE6weg3V4kxszJN5A5ozGrJduL2BXe9cnDbigtSp3wXM7kyiUQYtasqw213A1xHXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rA3hp3qAG2rjuxq7EDW7RxQ9wWnLAXLFLjKS2JSP5FsE96QvdD3YFXVaLNP8yZZjXuagkTUQWoGHwJq5dmSqD99",
  "key1": "3kLWLHSUq44MW1V5AcXfc6o58UGsC6ATLcbYBsttLpXwUMEHUNTASJiStEN81reNn2H5kACBiqHHad4KoQc3WDdr",
  "key2": "sJwMeL86pcMX46nLRLwd5jm4eYPCSPyk4c94xHbtdKc7oD79byFg4ZyhugYKxcsU4MRNX17h8h6vj3qgHsqXP8H",
  "key3": "3gKk13RSo7UY2cW2XXaexz1cADmZbKJ3ixPnaQgjypKDVBFrwNWNujDrJpvXQnSmsQQjuTPnQoC1b6Tzz2J18XZ6",
  "key4": "3UbdnqsSWzhKajkCsq6SKHNcWKo5cok7hSMUtnEJL4kxMcYDYdNhatvXawkKPvw1CtLbamAtNtDUxf7YcZbmvBnR",
  "key5": "4xKk8fivJHdr3YvbXGd87tNoAAS7AmeDqHfASvJ5Mtdd4TtiyAyoFR8Q5k3oYPAVASLtHYpZZyh2SR19z8VTioQH",
  "key6": "2rAWGBjwn3Dg4sL8At4WBUNmegjdD56WVdJB4tFuhNhW4zhmGwbwvxUhbnyFAACGhpt75iK4sSDhDbwvGp1bkQyg",
  "key7": "2CWHXpyK1kvR6LBTyo7gzNG1SndtzSBbq8D7pgeFBBH4EcHN3dvEQ6yVUTkDgeGRYHUkBhJprjuQEY966PQcQjMz",
  "key8": "scMGUHhRc3yXRjM5EtLi2JCJ5gnURqotNNQr5bxKVQMF5QqpEfHZ85pMcpbhaRc7pwdF4NTR689u5HDeJCFYkf3",
  "key9": "PaqUm8Liam1TazJpg8hFEg63zj9bMdzE4kUcyinx98RnqM5SzUmm9iKBwTJ9RDxKZMzPeKtuCqvSRmjNhR68hW2",
  "key10": "2xkXqqPaAHuQdNTb1awpxUaRLj7MTFMdajipass1e8byagCsKu9Zm7FHhuoMiyuAAemXKdwMgATNDDTz3mNgZG7N",
  "key11": "5CcAqVQZqmkeDpJ7JYYXBA7eZHjrhWD1hEZefEm96CFAZBsTkfK9t5D98fLs1ThpnoVs5QAEQ1YxTvy747V8xYTd",
  "key12": "3kK3equDN6EpSL4gFA1CYLjkQXUcTAawC7QUDma4rFEfogik2LvcXXpXnWrrJQyL9C3Tpw3DHaSHCLNkQ2kCzKML",
  "key13": "9nC6ZQre8ZKrAXsrMujEs8rwC1YeC74GPt6VuYEz7LV9d4mXVckLJ834hSWtkA7ffC9L9dvUWPDe6qdX51vyTWs",
  "key14": "52DB47hLxnHCntTczNjJrRakuqepE5sup5x7MM67nPSZ4KDQg4AMkTX5p4rvrfvgD73cFzbxKFAKDBUmWyv2pWJK",
  "key15": "24j58xZ9agorMaribXScuia9R99ZToDAwTJ1RnUyzYcyyrocvujSZYzDJfKzLskVdBBEZBJeSxTypNhe2AbAatJv",
  "key16": "3DV4prb95p4Y4nHpKxuZ3M6yMvwsLXHGtBHGFD89YAzao79TwRqXeS6gHFAk5QXXfrvBcMuEvoG7eCc6R3uCBVY",
  "key17": "2DHS6kijRhpNUd9wiPq6s5qGcjA9Qjfg4shZKJA7nMedKC2VYVWrDvwQtYve9w8bDrW6E1zfgyARopeuFejacvC9",
  "key18": "2fHh9ZNg9hMLKPoyt1X6LLvX2Kkf4V53dvoZrjg37PevozHhbxrvVgH7Q3NMrHFkivxBuHYHDyakQUAkSDaMxVCx",
  "key19": "9SwqAR19j5QZBycBUfhPEv1zSkkzcbLT2bxGKPndXMsB57UeVfofQ6c7N1fYVZHfDmZCy8Y1ruQKYHqLoTVCn7M",
  "key20": "32u233pGKJwaQq7ZZCaU1SMfy8JFbRR6ajUSMnsyrbJj3NqjfcVtEZRFJPZURyDHfjKSyN8qefw5GAPp2CBKfLc1",
  "key21": "34tJ7hoJxaNmpVqWPuaUdD3fyg83uV5Dn8XCyZWgnkbzBqmBeVig3mizobQSUBESv3c4qSj5sSM8kLvwVtRRY98s",
  "key22": "XFAaTUiGT6bAUdwkgD7JM1qBWD2mBuxa49Tv8rCNTjdoHBmZYP9GgJJdguNZcihVrEnera9U4HN3x1AjWZL29Ds",
  "key23": "kvAkDpqH5sgg4DBC6TUsa4jCXv3YBMyGCfoWjkNK7dT28VbSNigPRric8rk3sM9q1Px3NSDsk5fWMYt4mpoRtrP",
  "key24": "453Kw3x6NrSGMKUbQ8XKazqp1DcBMtvmAE3BpnHQK4yK17r4dn2pwWdLJmz4BR6A5C4if7GjmSQh38sxLGniePAv",
  "key25": "3TWjbo7FRsXGsrY6M6xGQo44BJv1RjKbdwDK3mk8wtWVL73zC85DCRYfW4K8466UvKvt5p8vMgvG8nw3rRSyDxsY",
  "key26": "2DrcWxmeMGei3cVqUwtYojWCXKkxsSxAGjMNzv57cJH3k4DaAwDhnkabgpPjJph63RnH5rmeXTKAGHgbPQ99vStg",
  "key27": "4ZpEL9DtPKy9pofio8Bu14csnyMutGn2EBL4ZJ5gSpPYwKc92kjqL6bHPAkeLHtcRAkLuMktz78hhkshmHwczF6t",
  "key28": "5KT8vYzb8Aaa1371bDgS12u4N82v7UhPsC1RNG6aPzibJz7FdxGThAfBZfipJD1DTYriXMQMRLgcXJAtcWkx8ACt",
  "key29": "5MMLdy3i14D5wgxFenZSxwaThwvaup2sZqFcCDzUsWUFJYxSFQyegK3pFSeNRHSy7oX1ygGEYgFwCpksx7ApgFVH"
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
