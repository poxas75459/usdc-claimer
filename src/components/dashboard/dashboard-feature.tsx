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
    "tUZYe6FxitYzPEZGUpC3BUvdWD4NMPFwaaBRi2STnMcX1xZxv4NymCsFKCJxbT7mPfBVgv8ApjtoLsqKa18oTxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LP7JeSPzceYaRMEmHXo1H2wrwkL1kNbpTW8U8B16map1AayunrHwGK3GyqSnehVx5tr2MKY3a51htrgRCMeEaoc",
  "key1": "4wqX2j6i7sdTcayF9BW6uhAxfvR5hNJKVPSh1LhpvbZ6kHkmDwN3cJBSWLiM3bpR5qunNZgYzPjwLNjFZzxeBn1M",
  "key2": "5FAZHtgzVKiGNNouSjPT4VfDZy9rHw1a9YDk67Gv8tRXtwwti4xdzTgZVuCGdv3y5LumS2VbCGQYJ1bNJ7m8t22Q",
  "key3": "2j3V6NZFKciVCPgRHNMTL33z36r7q3Wi2MnptF5aukJo1ihwCKKjgV8PPYW5rDmNx1Meuy6RaPJ1oR6XHKrMETAC",
  "key4": "2XBeUhyVEQsXi5xfTAQdm4j9ZsVAz3gzM1ZhJhXZhu5XKtf1VwQL9nELbDqUxMKPgQqNManqpzmpxhrKR8xVKvvD",
  "key5": "5rS9G2XMhJYczhNTLfw1sGiTtZJDmULog9dvFNrrF6v2whoYHJJupbu3m4TzBxdZHF3oi3jYSNKLsGdAdJPrdW1R",
  "key6": "5a596X6PWZVLAeB9eH3qHRsxJBHvpWjUpVsjarwxGE943FcAyuqXc6ufJZD6ZG6FDcsCss4tPiLjA9hyb9mzDkmV",
  "key7": "5MVxDW6AERAd3TC3QwDofhmm25QfW1HfrGQCfTpJGffjtqrzSvYhM3vfxvTHeoG8oVsaPvXMiUX79Vixda5ejhHg",
  "key8": "ftExcfaCk82jjBwc42xNqV1Bne2rckvQgPqR9iBcgZkWhnfAXU1HfThpugdUvEYEWMbwZPgja3i2W2spwsbYcB1",
  "key9": "2ErPxBiqSPcWfjmW6dXaMeYGYa4F3xG89MQmvEZyXdmhMcQS243UYt9qW5EzwxDcXesdjDhc58W7sS4QCUnKhibF",
  "key10": "4esWmfdJ11vfjqoAjZBDxuEf4eYJNMaV222aT2J26DBrKvZeCjJgqsbmd4r99oXrDVRL6LkA9xShxuRsvzJDd7jY",
  "key11": "44FCKfeV8XrbnLAPDchv5auEofXD9T1VjpXpBvmNmQztoCxJtsgtJwHJ1pvEewtXqeM8LnDK8qmiF9HJ1aumAo7V",
  "key12": "5Z56CVZiTSngKWC9CTq3VGw5WycVJXdcsBd68ThbWNYBiU2HQB5xHffEiA9QHBij4WAX8Ng93vuLwSA1h76XDT26",
  "key13": "4DRjFKZfb5Vj4Q4DaZestyeUfHe8XL5nUiLuW9EECndPrzdzDDBTTPbhiS75MdDh1Q91RV4dTLmNMEdLb23UJJ6L",
  "key14": "3quPDwhQDuSa5XiZshEgfzeqLVsVqXWW5PdJ912jdNdJCJ6hee63j264vqWfgQtmL5wTTL6Y96ThV3UbDJr4YTMF",
  "key15": "3jE62LYvxUxt2rcsiNzGJz8xctDzh6g4SS5Fwrb8SJBTydgGfkx6PR3QkAJNV471c4RFe5KPDmjqsJ3Wd1SEb2PS",
  "key16": "4idaWLu7jXDdKbTLfEtQm4oEJmhu9z4zik7s1CXLdDM6M1UHFsGmjTwMDYNRzCr7ba5dyxn9swhXTivNvjevKa7",
  "key17": "5z2CHdVVa13E6MtLKEaSuZ1u8vz1EagnSA8fRXpzXnzWBe5yX4tgzgk2tsUEmivQqq21G4jmeq4wYPmW9R3GNpG7",
  "key18": "2jLHRgjXBSVfnmyKTL8dikt1AAuWhGDGwPc7UxTkWZBf7WJJfnfpzfgFfS9mhM8uDwgUUxoQVSx89nCqSA9SKAUo",
  "key19": "4FmdYEbjp9WvE2iK6XnnA1EtWErc1sXvcefDzzZa1srXXY5DCPscNxb1wkNnLKB6bQcX43meB1emeWoU4cnuEuZs",
  "key20": "4h9Ebz46DnZdr7Qaj9PTL3RrRhXBXYXdqoj46Htih1Gxj8vZ6BBj34HUu53Vp6C6149dcmDsb3awuKWvAJjP2f36",
  "key21": "4uyrhdC3QarjirYJ7a2oMhw5Lf679gRZJQR5xQtZ9GweNCq5RBzaFvWx1QAm8WXWnT9MJYdGTxB2QKsHtcUq8dgu",
  "key22": "4c9BQKUVSu9xpHcBqtb1TLnxS4cjBZXFkfo9HMzXCfXa2g3tnUUJQRe1PVYQp7GNdQythGSSA5GF2Ta6TAKxSgiP",
  "key23": "5bor22qEXcYbFtiEmwwHp1tBGME94pPFZkoA1YcHq9uDfjQQxHbVrRBTB6jgSW9VeWkxX9m8DYXebe3gmA9SgpLo",
  "key24": "3bhUC3A6UJHRwAvTaxFYPs7DZxDCXNx4w6WCbfRP4baosjxZm4CihiamnxhtiRMHz5JC8hsLVSMtqxWwV2xpducb",
  "key25": "5yhBwfzUYPtADdz6C2dJN4JTiupeBnkhWFHkvMrMcJJaCNUcurpZadn8X3ubqPikZS1d82tnQ9vrvjD4V8qNuaWe",
  "key26": "2sn63HqSTXdgTSp91YgcZPHaiszBitCEAjUm9HtDAT8CUJyxZF4jdjt8ontMGMkouXnnPdTm5JH3odQmJjBtgpLS",
  "key27": "2AfpgKm9SGR4nYHDvEBkqxVUR8M7Rc8aCf8psafyE2BjXJD8ZpBMVGxop6zKvgBRtDg9NNZRCV1MkW46FZDNdF4R",
  "key28": "rkayLXwfN1DZgUDbYL6az593ydmivaqHRaCzpmPajHKJR2LeMzFYvUTFt1Qm4u6xVn7wqekEnAEKiHYh4BRorBP",
  "key29": "DV3Ppx6Pnpo41tkJxvnYmJts9furxk3hmuZzPMGsQYGqAFW5q6nCiTMQNooVowLGiEPVTQH8Gnz7CCWHWax259s",
  "key30": "HdgHsuRKzvRccPUetK8jPkvHgCvTT8Nzk2TNrzdDLA3RtaCGn3ppgJqshNCv3aMJjfePkHHDHaHQYU9svjkpmQj",
  "key31": "4zYcZYLLJikmTD5dTwdvW8dfMBbJXQ4RcYm9x1aCERRcmjVt75LaeEk79mmRRFraJD9Hrv6t1k2QC5fXzqeRT1sr",
  "key32": "2UTMtFk2UJaC6PC1KNtMc91ad6bNd3ANEan3f164vW9HkVnYi3NHhMREfyeJ1ngLFYC2TkiUr1MBFcZK2msiTw6r",
  "key33": "5TdUxPAAbJRmusq2pRLKVpBXpSovvQrn2BxiYKpY2RSw4fsWG2zjFRvSYZFCnnJfKPAmVgXURGukx3KHCq4ieKHE",
  "key34": "3U5JXC9ogqFhbnbVxNiHyQTdL74uKnfEFpuqvKktCCdhcmVTGy7PD6VeCpNe2jAgE4DZybaQWK1tCZn2phDRN9gC"
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
