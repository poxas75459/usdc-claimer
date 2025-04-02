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
    "5Vgqy5DqsDDd1XhPR4o3T22YcBUcZK9KBXFiNF6wwcDThGm9226Vk2fViX7f7uUziJgzzX4YZyPS8b3MgzZ6aQRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jerGe8FKeiKUN4Zq4j9wKoGWje8LwdiPfwx9kruZVPd3g7op7AfuQpn6MuWmFPbix3gF8cUVQQdNLeubJgn6Sgj",
  "key1": "57xKkU8ryyfm6FFFpsnr3skNTsyt92mELPu83vEY7xgBd3uSEL67hCH6CFDJTZP4zZvjRzEXCTTnN73dc7YQgHXV",
  "key2": "26q8BJK1ANWaNsMXUtQ5dHPurhQhfUJnKmrnMoHRuxLC2XbzNLcr5bQznkEZbQtT7CVxgDy5PqVYkcY7HMxPGTL5",
  "key3": "3zUvnuE7g4kuZFs5DugmYF1URhSrku2HZW4YrTujHfActyAshjyEpfHtW7ubVdPsfo8JwfA82oG1CAHRHsNhkACK",
  "key4": "4n65koMVZ5LrkrL8dHbgnBJRn1AtuTB1uUN9zpw3Difwjv4nod9FvDokGTDqmadBJS2DnKcbhnUwZAwSJ2GgXjn8",
  "key5": "e9bDwkW18iaeiXMK4pBi3ZuoMJyexiLxume1sjbCfY477dtWkYE2KFatTCJm5mFe7A9FQu6QZ12c1T9nCR63HyW",
  "key6": "3jfcNkg2EjtnNnu2FWCBdSnHwt7Y6opUxoi7bpTC6x8dYRHc6AF44CivTWHz8kqB4BudcvaM3RtSaifaeK1XqwYA",
  "key7": "4YwuAgSzKXwDatnNsHx1ApCDzyDUgmpqhGkFvsoBaimAty7NMkztsz1m3SwZQPuYwYbHCdA7LDBeJetmHPgFu8ZX",
  "key8": "3dXhchnfnmtKnfcTCzyJ3qPpepUWfVEFVAkHeJNRnG65Vhij37A65UhbuMWtC9Sv7wkeJurPyLCmeMo86kTDeuNQ",
  "key9": "5ot37r6Z65isXUYrBwC9LXrcT83ub4caNWhXseQrX9CtWJ4RxBvhE9NiuVK4T4UzfvsT6E2PnC485TXZqVkz2tn",
  "key10": "4JP44nmPeTSHKMCAC1npNaU3Bx3zXKEThpm1EmknTLXY7SEQPir5zUf3XhokR58seDpotCkQnTQ14CFke8JkoUNA",
  "key11": "2NkQncoxS8b1V4VEtJG4uUbkJ98MJujZiWCa1Bi44AewX7fyo8Hw4a6RddwQdddZf5SaiCkws5U6psUuLF1iyptQ",
  "key12": "5yzRkUhT5oo1D6VbV4W1k8uvxFRi9JttTmcHvQZvv3jGwDkSfrnqaurLMSWkL1U7hMFRJVqdNrWMb8MpgT9CJ8zh",
  "key13": "VxPzudtbXiyet2AU3jrAPzuysZN2mdt7WKYEpvQEV9WseYzPA72WmztKTPa5RPfJ7aXQndyWVHudLNRjTThaBCB",
  "key14": "5ecF1Yb1U34C8pEt61ayFqRVHvRxQAxxZs5vw4gJC7rxrYAiBnk2bUa8XVNFmMX9jK8kivcco1Wgh8J9SEsLg6cs",
  "key15": "44wbfua9hCxwzWL4Y9gk1pGbU5uLUABP5DwY8C5hAVHZptUta8C3HExBDGKoJj1iqNmcYJhPj1ef8fQzKPfc45Su",
  "key16": "5riYr7YdCDmnbqZvYr4KUuc2MwUsvTJFWFVKun3MJe5H4jHQjoFbcNDFqjjMLBm3fbMsTURcm3uv45sTmphZ76cs",
  "key17": "5FyqCVDbb2MQB3Uw5hDXPKPgWe42myUozzNC7CzpeTBRC6kAAhktzp4CAYRFTb3jpk2As8DC1a257xoDsy6eZjmm",
  "key18": "49mL6GhZBJ2wBMJjm724KxFWLuJESnZSGqDuYhtfhQ9bBFrNtQK63HAcRhpNEh5QTynkHdSWa1YYf88h9u4LtitQ",
  "key19": "4ejUHgdauf5jSgM27yNHixWuLBevcx9XV8MNqj5c7wJmxWyLCtmWN4bSrDBRjMVyGbgM49NwMF3AnhjAKo87Yfsq",
  "key20": "3NN6GzooeK7kdFfaFyaEjvmq3t2yjHTKy9pxVWKPKxyhj6WByNvQ8Rw2kpdzAbRBd6WdhYpc1Yo5TBUbonLuioej",
  "key21": "yKgFexpd3bxuyadatgU79UDBFM8HnhFvJo6b4vFKxg9wLLG4rSALyhXHmvCdnR4cLvaotsaDhUoFPrveLV7oHiB",
  "key22": "2iwMvQTbziLDAQcGiWTKGyU7y9RYmLcCV5q35sKLWxziZE88o4RryALqiTGK2UyumC94KJqZKozXRJRcogYAZZyS",
  "key23": "3FPxMrijQWHW8bbqcyRavAGZRo1Pr4fEjo7jFBvwd63eeM3tZtWe5qmogGNxF2q8fM2iM2P3TSuWKMT15BCo2hsi",
  "key24": "5MqLM1425Bo9uQDakLBtKMNkfwht3X4B9aY4rSUDFLpsLqrzNmoy2NyafpCWovLmwacWBv12jSEzGKm7ffC8PcpZ",
  "key25": "4JaQwQ4aWsUkJ8ZavQMxmoeABvJHL6K5ah7PxcTJNePStW1JoUgHiE8dCjh4BBpwMj5avzW3LKoQRRywRDRgzpu4",
  "key26": "5JXfVsAjZkc5MeBy4PUVU9V5edmWvVqwLtD2C53GbyYJjoanyVG3rW18H9vmmAiut7RTFynAipXTEuD2LZ1pd42D",
  "key27": "A5wmCuP7SFDaAZBvkYpuN3r68yfFKt7KEorSYVcb8fLJj1VYyTaxQTnLHq1dijFaHGoX55u4CMKsgQoaLDHk5E9",
  "key28": "5ug66c6Di1QtLHkxuXW7ThVbMwzp3GAnonqSqJKRyZ41RArQkqumEyU8DUrYaLik2SAtXtzaGwrt4nNpL5wsqUN5"
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
