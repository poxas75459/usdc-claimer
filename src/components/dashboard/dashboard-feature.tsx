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
    "263hRY1TYBGu57gfNEsUHHhXRaTAAj7gBMziQ3nBcZPos4rdQK8L16UcNUyTAPwgkMyNn3RfzjUHCAQS1f76mp6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cxiPpTEzxK9WL9DZD9JD9sVjxNmywaiNUoNNjJCj9yop8cC28HNBnHQEDPKNqWrHsDog2w7EDaR77AFix2qmCpi",
  "key1": "4CTBnruoP8UowioM1SJ5YB9XNtJrDXqd2Jgmh29pxS6GJbxL75gcysLUnWi7Ec5wLisUYUpypNYeHJir9uzBx1W4",
  "key2": "5fJULgHaAX72U2iUPANVXR42JfHNTpiMTCQnoC1k2K9hPdz26EqbcmatftnaxeYNSGhKNnosbqH1BqDoatRiJ55C",
  "key3": "Fc8XiC8eTLgdNiuniTbtU1XeRg7tgkGaLtd6daX4pCvPrf38hRYYULbh3GgYuDA5yDjZZpAmfvKNXs3F3t6xDpC",
  "key4": "q8DBDFKxqwLoLcF1keGAxvyWGmyqVGptM8yYgyzTg2VGp1AKJvt7g4U7vjk82eZa4U8pJNbu5b5UZZeJDs3doiu",
  "key5": "3JnV5C29YN8WHpF4env4S5od6iNG8Kp886e5ra1fRxbT18aWKpQ7vXXNmVvSAni9NgrnL8zQBnzGt7oXMp3FKuVH",
  "key6": "3Ge3RjhZYgvak5oqBUAqzbCUNBDsRG8HYm7zBNk9WRukjafjDNCpAYMJAnxpbapwR6tSBTtEcCYf1AVRJQ4oHj67",
  "key7": "51NV1UYazSDR7DX42ESPU27Qhcg141iQsvGggsiJEMDFZX4FS6Lowi5tKLoA1mEqD1PKAcSFA9ns9XWdjE8yxZKf",
  "key8": "5UF2pJmVfzn5JnSL5fiGBxFF42dZADPHSMPoXaUsoLttky5R1zv3uWKtcfSX2E59tYRqwXBKLKdryCtBPHbp1Mdk",
  "key9": "3AGBehLrfwWN6y9EZNSdfQCpkFwj6uZTYdHRtS9v7UnRjS4jxpyv8iBdNE72Xkie8grdkYYBVPGsZq9W78M66P5D",
  "key10": "2bMB6baFEyzmh6xurE9QmBD2Ar219BrMvNn3AZpMx8GvjQiMXxb2G9onphB9fXmiwhLGjitWyiVrnVkUEL6CBmRE",
  "key11": "317HJ2Zr468V9DV4eo6N4CLgnots3yQX1k9aYTXsAaBRUWyWLJAtqdEWeRaPT9D9qdEk63g61kewDXQSXLq7xwHJ",
  "key12": "2zWtHMDs4HXhysnBMpuBV5hSDvcAs4iFrWn85EtoYaR5ypaZjKn1aZx8xHNhAy74REbd1szYtbS6hCawN5vbiHVH",
  "key13": "2wFsP6T8n5cPKvStjF8kCbXKrJZTqkXEp7TcXqWJ5BkU9YJ5GcctdKxpHrAWA5FvbXgVdcwDSuZyJ8MfyCCaW3Rh",
  "key14": "4E5wo5DZHZirvJwB6qtXbnu32cUqiEJVwyG8sozZyqpi2u9FLSn5NV7vvKDebBqrgvYtuSbkaa3siVWuymzZ1dsp",
  "key15": "5h1V9CBCNyp3F81dZJsPwSu7xvCU58p3PzvvYUzn2kNT7T4Ld9eHX4cB6ao6FjhDrEqNgWxHqxxeJc7aaEwLBfZ4",
  "key16": "4CHN3hycZY4vcs8ErAUwfVmSKsSEbRsfhvSHqD5nqamejo3JTXn3XHvQMPVhi2vxwUN7vWPJxhAiVRkjjjARfvz9",
  "key17": "qevNG6GUY3gWqJ91NxeqicCdx6e55YUsjx5kVnsUgXXwat5NgnmrafLgES3M48DZLV1yMw8k9J8cS6BhCAhVDjQ",
  "key18": "2RFQdQfv1fww4Kq6ZFeCJJzD37RTcsUa5UYFzpF5ZPVFUhXTh8HDH23dM7nfhCGdQSw6js4bnnGdEpBZ7bbniDTH",
  "key19": "4yKgMDYRvyftgdFUUioPewxzcKMx3fCWWecZaSbUTcSKfHQymo8yFWmjQw1GHqCyhwTrbsCUkDqYWjKnwwVKVnd1",
  "key20": "56Y5Russo312FV4uTQPrbxSgvwMtr845xwcQMZ9QAZzJiW1JcxznAMFrHceTujCXgATkqvr1LxDN5CtRXkuJfSEv",
  "key21": "5ZwzNcRqY17CCP65qurL7rfpDaG6AN65qUiEeYcbq4mgDhBKBJfwB3a85tZ9zBSpGfrpcKiWhEFCVuZUNSrtgSgF",
  "key22": "2tUbn7J44Xc6vkAJsxHns1jQwqimNNyUwe9x1YMeYHXYjf5oY1hvg2ErSrQWSVMz483F3hhAQySAYWPAX12Gi8XZ",
  "key23": "5cGeMYPWzQCWFfHV9Mg53Zdn8TggJ1TkNbvkFFu9pzikbXwKZLv1ry2EzoGNfT8NpBVfeJR1oFjq2rykq4MsqLLF",
  "key24": "3wfWSNMumwvn8jQzLbVLRivEChieqQj6UHyntnzpHGKTjPi6tbhpMDN6Bm4yAwQixpGxZcwE1MJaBAD3TGx2ZMLg",
  "key25": "3Wz6N6Hnp77UquCBJCnsGb1vCTeJ98vh4bV2QGNSLQwP4XZXfY9btGyYaz8HoSctmWadejhTurj4WLvhJmpMbiwe",
  "key26": "4VcuNSqFbEwtJci7gSTYrEbprgG8YeaZJxn3Q4eX96RjQNGsJypSqhMLsD3ng5nRfjVC4PpDheLEHPPnDaX3MktK",
  "key27": "3FbyzwsYb5sw8U7bM2WoerJccTNJXyAMwJFYTsfaAGEExyPinkme1ZTB6tDFQQ3qXqzZPJ4YmbmvkgT8DTWsRuan",
  "key28": "4P1QyePEvQiKkqH3Jr9Dna8PncN5RM1s2kxjVXBbg6c8RRgmZCU5DyEejLbwq91NdUWpCwHSxjtEdur2SaPJXRck",
  "key29": "55M24XEVFBGFGtAxQxrKRwZLQRA5CpRn5jZmVbLMC4bQzQET9g878bF7fK6TvAWASgnd67QUXXyBxVb5MQ3ir7J9",
  "key30": "5T4JfB6UhRNmmDg6PMC2gMKXjiVNLDAu7whqw4CBiZ3JE8acHMbTUJTF15cTd1s2MG36zmwGRF31hsDqjzWWsKR1",
  "key31": "4Q3kZk4qdHi118gyuLh68bz5RkZM2EvdD74bDQMPXLWEJcgPqCs96c7N52UGNryaWYjmpKTsR3YVCkuaUtH3bcK5",
  "key32": "3PXdc14C1vqGPA7fpkknBL4XXNUAu7H6Lp3JjukUCZF2sDx6o9A7d4bLqhvCTFZPL36rxGaDafbuvBngUuZpEWZp",
  "key33": "dArRhPGPRfaUVLnTao9PsRM7smBWBMRtBp3go9vhgLJ1578wG74c6S2DPhJMGjkujujTH7yb524Y7XyWAqxnn9t",
  "key34": "2MTbzfVkzDJhPEMh1qoAA9LntVkE9EXUdSFq7FwVZiueUvEyEm4rMm1wWmtDL5ed5BT9zm3cpKFrhTFJF4Bd7dKS",
  "key35": "2EDQXkMnNyFv6ELNwk8KHCiKA6PZhLSHXHjsC2UPrYpyJ9mwndxbwPr6wkSexpbh6vQVhE8y9R2oeNdk1pxp8WYK",
  "key36": "3MLdgF38dKvAPd5Zswu1aEftyhpHAHcdhZeCM5GGCGTyisuXvyqU7AaR41bzhtEFWvq5fqeLXZfWp8XomrhkDHBG",
  "key37": "4QVUCfoQHrVqBbMsZopVXDzs349fxaE5r5xv59isTD9T8oCNTyH8hjNfxMJkkZ9Z1nbZ3JgmEu9cqrdfafKx1QnC"
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
