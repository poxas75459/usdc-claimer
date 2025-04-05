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
    "Wxt3m7jsu3bR2nEgEBMvj8UotC7gCJs5MpPUY3umWMkWVJeuo5vGCcnUZxmGCyRqSsWAxgFHp6uSyMcSypicZ8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kUoBMVAAAutkCCBhk6EMifWhn8pQResWnqqXR8C3vCXhPpihgRU6S4C8rEo8Tcx19oRPFjav4uRmUqWCipjFT5V",
  "key1": "3M9oTE11HzCTz2ZPnF3F2BmvsjVkmLRUVBWmKuQ26uq75FWkJEW2WqwZisBzYN5y15HdqtzGjKZbTp4FZqhov1KX",
  "key2": "4F2QPxzfU4Mbs22kTUogvEa5Rx9UKJq3z5r9RiUijemgvPKzeLvHQNEheHqZuumuXkdRmoSF8naA5S38nhs3B6rG",
  "key3": "5i1PjgoesinTab2eNPYiz8w49SfkW8USgobmLNxNmZeqzZVxQHJxm3kgU93FrEzmdJ356kBrVCmMgCW3BAbfyYHS",
  "key4": "5KRrsAJETwgcypi8G3BPf3aV6zxYP8EaLw2LT8RMrCpnhJr1uBF7j9uZdYMPK8P2tiiHB5jS1hu86zCZ6J9y6Erb",
  "key5": "51e2mJmQddFP126FwNe6VX8xMShrEKnxzytamF6n2MrZecUejZXteEkX36AUTa1wuHjCSwGzRjBJxHPU18BoDL2c",
  "key6": "5ss9QYG3VgSYgdbVkSUGSmH2NYM7a376C6LwfQVikidF7NLh6pF5SnjiKL5wxvkLYAmQjvcfr5iUbK7C1YuotPst",
  "key7": "2XoTjmLk7Tf8WR3ASGmmkqDWvhQendvkqyVyeKaMGTUgonpH3yaepRgh2ndarX7A7W4HsJETH5ijRUhacyo7Cv8P",
  "key8": "4f3ZaKRQLTnhsW9yxzHvc2eS5FEhf3Tp695t52ck8LWoZnGnKVHLY15sbt9NNBwDeufnBmZNpqz7iTHmwbmnkwK3",
  "key9": "2WvpJbsQZPrgo5EMRjhKboBWUq7a9iYoVhbit84FRrfheCo5ZjtsVkWnVefixFRL1avYasr9a9QfF8AGqnfRfJ9A",
  "key10": "4TZeyx57mQKxTtoTcR2uL4tZxepcvNznddFEkhbRADgbYP6QWnrM5aRNTbKWSW2CrFMtGUoUvahA3VyVpjoo4C5a",
  "key11": "2H6mhkHRYKZXHVS2tfAbd1NDB6bNouqb9tgasZGf3kJGEm3c4KFMCu5ncFxx7u1XcvYu37Lhv1kDMKV2QjnT6Um2",
  "key12": "4ueT3BA8WvthxSfs5549FdZaEVRNgN3Gndh4B5pKWEvLduHn7V1NsKZpytpUh8wsee6YfYLyYd3WnT1EUjXmBEvv",
  "key13": "2aBLapnV3ubtoiT5Lf8WE2XZ1s5at2VWe7PEUpu8NjSaPyRkKQ8KzhT625zQ16mvG7f3MJF7sGJ8zdFWAESZgtAY",
  "key14": "3J69KFiKcZwfdPWEqjxdYUgwkBnbcyeDQKwaseMAjgJNPfCWP68qv7cs8aCGGs3r11rg3wm5H7EB55aTWLkHQ6Zj",
  "key15": "2Ka6EGk3Sq1Cay5wHZfR2UMW79eSh9E8J5vbjotXxLJEoQ6xQPNEUwD4zxZKs39GxKo3jVDWKRRL3H6Gdc5ZsJsb",
  "key16": "5TKcNUC6HKNyj3NLDXj2BwwVzsMARtDPAfLijvje8bgULf5iAgBMFiTN1fgY2Yf46URpj9r3sHn6Fa3Ln5g31jpo",
  "key17": "5rv9hgKiWhP1P2izYKmCwrormWaQN12RCki8Gk1UfsN5n3K4k1wxVHz37FnBJPgeUnJtjQ6RZ3NzQrFa1jgVdezj",
  "key18": "475qSuVvxs7Pb7EshkF6mDJjoFFCdJ6MZEkJbYAcS6Grd1VqGErPXNccR7aXc5X2op97X6vUQZ3cGwdDBjBCawty",
  "key19": "5yvZ2aFp8V5aQu63zC7apK7KtkPfoxS92iYf4fo8QvN3AbfgH5ysXhPQpS1WypfoNWRmEuQa8a6uieh7sfyc2Vjz",
  "key20": "mzB4hWg88QohFoCt1VDdoW1DZRXYWrtMayMT9rvy5uGsppoQRJ9TC1Zw5hXNoiSNajs1ipSxaNPcaLLkapigXeN",
  "key21": "3FCmAwozBm34aLXbFYiSSrbfhj5dp8KatDGLXwMML5zL1Xn4eiKW4E4NhZ1gQN2BtUb5xAErEjnEZAp8u8Uk3gA4",
  "key22": "5XtnBhcEMs32PqXdjb54rpeQJ3LgH9iL9RNz6CJBjLWiQFsuTDaAUNhTj2x5nZyY7ZQw5BfcF7kixwAXUd6umkE8",
  "key23": "3YmkTnSdrw2uq2S4W88C41GqpYWrBmXZYiZUTKiH9q97zopuVKNeZYxnknRNvchJJSTynx8DDfXoxn8PWCHEnayv",
  "key24": "67nZC1HVLdhRu2LyDvhG2JrkxBPZXBDrnvzV91ms9mqpC2XAywz4QggZbv9McpKEhEKSFtcXTonbY3WAJMZQTFTP",
  "key25": "5TXThpfiF3R4xBxoWpJTSwmDG2VVNkpph2WSixmd8m99WwypQ4JG5wyQFt16SLLUCAc9yngki6Gpk7shsYf5PWrC",
  "key26": "3QGXXh8Us87dKRpkpCFfCG2HewtoJEDKSENB8TCmaWgk8njyDwe9WNfxdAWWZgnFx6sWWQK6u7Jup9GrhYXUZha",
  "key27": "34AYi5vQhcWMieqQz34jayfoeHh3Fm9TTUao4oxCnJW5ouYg3fDcqzVYKnRMm1skbBnnviVpDk7uWZxe1ndT71iN",
  "key28": "5k1qidzFSpW8stsHuvTk9SaibcnpFXYQhFnV6tJgtSsYfimG1C2aYdP7dDCvsWmnSUvhSdgAcvxVoS8VTFBdcWk",
  "key29": "3mc9PwcavkWuCvvWKwRM6bNM9c96Yny3jcQSLZdXpappW2aVRHcrR1SKezxwkE9fx3Qt724LCG6vqxmn8jECz8wD",
  "key30": "5KaJiiTYoguJaK2L7Rti8WS1b6gpHM6jviLU2RFuK196Y8R86mVaMmJoaVeYsegAJa5htgG1ZK7BTgdNHVNATrxW",
  "key31": "4FDpDc28LXpce8gcyH5SZrQyspXZuju41qhwHgQH2oZ7vMptgvWn6GrvT7VYzuR5w9NsQMcdhDPSUA3fc2pbfb4B",
  "key32": "4wdK2Z6ucQFcWjnU1dbwrEKNDNz1ko5ZxfAKE8JmRRKrPFTtJsFjpBq6FWxzu8HxtnChw2QH4BKbR43PVS6ghw6s",
  "key33": "2iivEHonZkx2UDugQ5bqTY4kkD6kx1MNTrx7qb9WLTs5n2Dh1VupUbK4GhP7bXq68PcBLmjuKDNLXFdBBRdam64w",
  "key34": "29FRVFebVSNgJ2oWYtPkaPauWzWzWaW4QQWumRExajgP3w9XJSjTCFS5YYAcaA5XuBnc7dNzi46WzTuyxdohDLLj",
  "key35": "3ZD4mv18LPyuXYdBx5szH11vbsBTScJ5ShutBwDAb5xHdGDn7oYM9N5ZD4Q5sDqtiyuHG1pUTCwTpKfW9cyoxmZn",
  "key36": "21aWmrxRXWMqputesGozPyugckrNoR9h2XSRdDs2cefYhy4yRhkjLoUevX3btFKRZ4o1h9dYe2FP185GvnXHUwja",
  "key37": "4HmzvKaUeHrC7nbAQtZsnwQHAbdjmCqGJnUqCRAfXLdBAAdvTD3hdgCy1kK1ABcVQ6ESyM9SHBww6nAxXpbGB25M"
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
