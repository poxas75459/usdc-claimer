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
    "226X1dV3oMNVZBXs1GkqjuuqKPANUQ1uXtrkteaHqWecNsDn6RXUxsm2UnGozXa8E77iFvpNoLvJP733Y1TW4mC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "413D6HZ7iaw5fvgtjNYKRgM2GZMhw7ao3wn7DxgEBA1u1zZGmp5ax72eBBe488VqD5rQHVRmTvdNNbDQrKHqShPL",
  "key1": "4s62Mhimoc5kC9vQbgvtruD27H4nPnVcScKhoSvBWv2sHPiCKnJcZu9ND6z3g17CkzYFrWnCS9M4d5d1MNxMvyQv",
  "key2": "5TcWUqWofG39ji8PqwLDkf98qLtZE9aJgyTpudNaS2rtv8wSbSYkF2xAUFiFwWvWHL1MueZuB9ud5tmjx1L1VgVq",
  "key3": "3ycEadJrbhvdzf4bfrMPjAnp8BrgcoMwqBDcXqViG69pCZVRRNStN8jjmoYNM2gG8rt7KNfWes6cjx1kbXh4tEhe",
  "key4": "634rPWrtS342JrMquwDsvm8XATVFQ9PTE5XCWoq5baFQ5c2iDqNfa4WhnU52oZ8AeTN1YrWGZz6aoYyZozyDAM4e",
  "key5": "3mKfo2euFXGG2fXCZCsFsiqXaRc4ZAt5E9gotpysfF58kceF5Ko6b7oq4uMAmpyrYRrvrDaE5jPkM95kgfcyjQJQ",
  "key6": "4nEXq7nK1jcAQZgMjMgewdvzPNwdttptQN4h5uUS4VA98h8wxM1ufTNzrLspUoyVzZoTeEBzo2prsnwTmPHefmBt",
  "key7": "33DxGkfqfxHMoRqJi7PXp64eWZqbztbJrKcky498uGdWeyF8Ff5MJq32RDVALqobJz8CzCuy3DFjZQ5tqDievQwQ",
  "key8": "3KisnnBbzDM43oGxFixgRNbUAXeXcUjZb9TaPtvbUYuEYhQ29zFGQuKrmgsyaHu3nR6UBYAGDdDqYof5DwJbZoKM",
  "key9": "3KSdbwqsta8nQftzUoGhYS3fFVnoR4AuF5LoXdFbUwPShSBWd5zmbPbCsySTwGiWt2DtKfWrxEJfayRzWkPRqJn1",
  "key10": "3q5EaRzqPujWu85JDEUQhzRe4vd8S8496WMXN5TfVrg4yHdrFAMo8UZnppqgK1p2mLLnodaTVL1PcWt1xsUZBoQQ",
  "key11": "4H3LmC7eUhHNEsC1nF9SPmigAVgT8TS97VdW3kC3hUSTf2AmjedCPmxNdnMBAhYnXG2TNMPCfqEfLorp8mj7bSNR",
  "key12": "66on6UiejGjHyBAt9sQNkJyZxtvXpWuuNM7Jqfmj8itSm11J8t4BqbcrrMobf3gPQnyb1eHBye9qdiMy5m2Wo8Bx",
  "key13": "wH2EdD4eMZgUHcpiUJqJjb8PLaBFy2ibVawXyu7d7oH8QPcDnEdzSGsQwFGZXRq79UoWZ36pLvzbr5uXhoEaLHt",
  "key14": "5ss9ihTPCCHeTBMh9sQfxP7gJivARHHr2aiiZ1fHLDyMYUhS9AepPz5AvDaoyBWiQmUtkXYUSgNicWmWquA98bLr",
  "key15": "3c9ga569T3rsyQcHpewqeLEBJHWe2fECroc8fNS5Y3ogMTsRgKLf18PqmBF6dwKwHZAgVAG4UWtefJv6aoS4nYJJ",
  "key16": "4hJCqMUwAyfuMTfWVck2xQYZdnc4K37JCG23bRkaDMxtrpLbrFHnPM3CfMJoziKTWMeqGMsKTujids4yZysyFEgw",
  "key17": "2F2PGeAEz3FtYjLCofWyrsuZTGGnGxpTGwVMRq1RGwLvymYpMJSHiNdQBhGbBmQawaHSiVbvDmJu79PEjpTK1uiT",
  "key18": "3uEdNwVoHCSxup5QXoFGYjpqxoceCn1EbbikdvogWrefkJMESmQutsQWx1yPRvnaqCPErhyhFRKBVdEV9qgHWbjk",
  "key19": "KTUjsgKzTwfss8HXQWZdoqXGSUccUBMX8FVV2R3Mqx9UJzTBK8fYXoQipTzmVwVnK2w5yJMAqt5Dhgwt4dvvvTr",
  "key20": "AmctvADZ2KrWpYQQHeDh9d2xZiUquaWLw6y3sgi8m5jBzL8rCaxzSMTgF86q4vjgZzvzktRoSUGtrkExQyJP2i5",
  "key21": "2Kz7E4XAZ6ZMVKhBx6bsfsiT8Ccf8pDfbirYuqAViv42Bj4cFWV5oAtACpbwRG5vgUur3xtFoBYgR3yvgvkfHhDi",
  "key22": "EAXMDUbnYW9zmmMvCzpZHyDiTxYYU1rymp2LWKta9gR4eePexd6BCDR9fdBFCcqzruDXjmM6EiVVvBopy6KR5H2",
  "key23": "7bFKTKjUx1EGwZHykJbX3JAL73A6PNauZck2QcPK7dtbmH2g5d23Z4F6GiCpctag3qUj6grnam4M7Vu6XbRmTum",
  "key24": "2m9em9pBut5CjtnwufxX7KALMN7i6PqwWT7sERx9xsn5Gjxnxzjrmi8tJW9Um2fPvsaJnQYS6egkkGRk9LLo3cni",
  "key25": "521piPC21yZzJbQiJyVDDVPKqDWohh8yN7LcLo6c1UggMJFiLFBpX4J7Vwk7g8prUX193TyKcHC6TLZ8dQNoCDMA",
  "key26": "Hg2ii99pqumNhcKmynSnXKE7qRPr3wSA83Q5BgsV8ju2LXWcRmeVh77c545uxdybH7fttKb57B5AtxwShfTqNUp",
  "key27": "524TRLh2zvQan8tTSxsGyigBGKtQCMuwDjhVu6dpFuVwzPhLuM5dGW82wdqdmHgaunaTSzphR8YKnYn4sfQRn5Ty",
  "key28": "5L1idQDPxn6HqpQqxbLsgVJ3GR15MiXmNGBDV4gFfgvyYCpcBK8Y63VuQj3zYvVwtHW1QyAhTXWXmXhDSEFCUyU4"
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
