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
    "3HuMFRtz1Zh1De86UxymAUjfiNSKMb4eNwP99mKzJ1gNehEZifdAxjKmvdc3ruhWRtRZ2Am5X9wDqW5psdqZpAtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kadi16wr2V3acV1VzJwhRwfy6eNJPyz7AJyXtZMPP6YFPFFYZGp4tNxmB3Ct9KEZd4o6JNgBAoBkCwZDd7vpLkf",
  "key1": "2ZMPmwNV9KpaLz332Uw45VtSbctfhAWeR6LrwPzTYEoUmewwiQvtnyvRTQtykFQ3dw41zoXdXy3gC3bSGpA55iMQ",
  "key2": "3TxWxhwmEWUrhni57qTj5FDMsx5wwWQWGJFWQofkrTExXbDHbzvqBZ27ejMZm6dD3w5cQV4U7v34JvQ8q4fBG4g5",
  "key3": "FyPEVmUVPKvFZqUuqPa6v2gycnEgKMndPkYg8fNBd8atNKs1uhm58ird52JWZveEaHTzqzFQcaZBdV64AZYXZ9N",
  "key4": "2v6RGjWRZShKKpg2AA1pHmqAH3mPEXXQxZxrJiR6iDqHNtALU7efr7um5gswwYYdmkYYPaytXn5yJ2bPraYzTXoV",
  "key5": "4Cw68PaNQSWDrXHXwdM8dNesZmy47PmdnHGwPQnLgkRqU37sNF12pR9Me3rk2AkMZTZBC4VfVG2439PZxgbVkmPy",
  "key6": "5VKWdXvXLkWjXuHxn2z3QQesu3T5jejG75A8sAppjxNQPtWxPoSdVrxdVCkE8BK9geWaGt87WHqP8umtRVaDuufD",
  "key7": "2Vr4qxqFdefy1tARdkpm7dd7susswCq1QTHutid9DtoQ3a6s8K93yJLAdhSXvwePEtP3PMPRs9rVNLepbguKuPFa",
  "key8": "8yUuUwoU2KkDua5HoTbwyRdJ7bB72eJanahCAqAjibhm4MN2fbNNU5u9DX5mXxUsPpVz4Nmn1pmeqSNT1Azso9P",
  "key9": "3avK6xAZQH8vNwuiY9W5xZx9h8M5Z34bvfpgJvdCks1FXK9ovSCnwx4zdLuzubdBmaoDQyk6VATpB9zMFo82g3Kh",
  "key10": "5FGP5vd5nMDBTV8nKievuPgcNfEsWNsVBWyd5aAFBY6jPyJWp5LQyFFxyijDmyqzBeWGy5voim4pQZ8UcQGeuqpB",
  "key11": "2a9jDwa5WGgG1mqTkZ7a3GGev1zpdmH949S1bvSr94WqT4CTcy1n4ZQtZdasYQnFq2mi3CJePenbqYF91SxRAyAi",
  "key12": "eXqCLHNw8LhyJxKybnfk2VBzHVK95AuvegxYP4MWyQzQc9AeVg6ZgAm5QcogcbeSe6sK34qu3m62yRMmBuHwrCu",
  "key13": "3NUMnVSHEnYekwJ9W86WVVTh2erqdenUHMjVrECvYCwmdAkDt46Nd8ZkN9sj8buypTew2pmUmQZG4fACMDS684VV",
  "key14": "5wV36kgAo8kswCURUWwDKFLSiGmSYnLZKb169sEeBEjUTJYwDe3Dy7R2PM1nduWczLfYEQf2qKzRbxDPyabQF814",
  "key15": "3LApaXA4Gd4StfHuKNGgtKH6C4eCHVHEDBEBnjNPeyyxGxQvVNcWTTeUqUWmVfwNzsfRpY9pwBRfC8DDuuLgHmet",
  "key16": "3wQejJ6p4Lj1y4hvhJPL5UnxKdA82cpNUQXcY1uTPCiNX9oukWceCBxv9jkvnXayo8zKUKtGNB5RitQJxPm1W28X",
  "key17": "5YVhe2DpFjzuvXBY495tY63Xr5RoykkQ55SHfbUW77jFrtyTGzpc3uS4txVZTnsGrY917swuqQVMAJB8YJvJiaGu",
  "key18": "4eZWsoJhd7mdAq5xrGqN4bHFAGE4UC8Q6dZtg6iNaCQ429NtYNxdxJMThumT1DFxR1nWtaMhMvKVNvp5fvANfPgX",
  "key19": "37wwDpuJjMBNETRNwrZEvXDQPATDPTqXJcLs7YaoyPmeUCywhVGj1hioHtPg4YYEX5QCGEeCDRgYssYDnei9Lhzj",
  "key20": "3oyF5LSrG7oUrYJYyYe54wHADuCKYL7HcaGVa9rCreaLQYRSMf4PVWK31r78BhvqcEy8dWr4dqe8dmNbNm3cp17k",
  "key21": "SFKaZrHnJ74ZxN4o9bgqkxtsQkU21ouVbStBGRk3vGzadxTPxwZUfHjV7QqzzvGNaUm4YXyGcpbD1viESyesico",
  "key22": "61KvKE8tXkP58n2QXbsx5tg4fCq3dH22EeFqazNp43YkA4bSdBNMEcvHjJP3YHLtayscG97wcnumm12nLBFnEo6v",
  "key23": "4smiGKk4Ww6icUftBcCpMK9ZgYPFfUfHL2ynNohfcwyacXS9ZUUYLh8CioBBy8V3tgNUUxiPcEwgzfYTWBLEjDL5",
  "key24": "5iB5NwbkZUeYhDF6oNvXKsoXbf4Ecf8FuHzMR38fZaAj48KBKxz4m7nsK4R4uCeSaoV1kNcGxWsmgWe618NAoQZ7",
  "key25": "67cGVs9fvZyXD9NN1GssJ5AvViP1pCzcskihMqXPKAcu5dCTwubSzFw2QukWW1Z2dFJ2cmGUKh68VMZN9RDMRePK",
  "key26": "3ig4SSoywMnX4Y9wnJNDg2xfTmYCCFyD7QPwWsEZaFVWr7AS8ZaoQnFxRoncAk7jT5DY93x917sdWxigBLW9fgJK",
  "key27": "3wsqbNmgW7MwJupZapLqo3zGiiVRazrg9UGwALKFNi5ubq1LgwFj6a8n5DbAQPSCAcrqoSdxdvnpBD6PpzFpHpS1",
  "key28": "3qR2hBtLvjEYZ2e71QBgASP3wfcfP9hpRjU8cuSNdt8eufmMwKXMjLZP6QMfGRJAf7FDExahqJs7QVJVAVp44vav",
  "key29": "2gGY3ptMGhJqQGiGtv4LfrDtRKkppxaPNPMkJtxfgFhEgeBBJihKMd2UeawzuMb2ytfa3vwTUp3pbcxzvmsmjcRT",
  "key30": "4rYXXQSGqaVVE7TtdVHBYZurXzdgUiGYHtbSrsypA5u2HSA3Givcdb4SxPYNhTDMCAYePAmsVB1jcvJdSH19rx2j",
  "key31": "5ehnUY6g98LsB8wRahmBowgqAW3FNVrHjda5ZUorgZhYbDpa1cUcNXaVgDZCDjNT3ULdfQLA4y8ZBQEg2Vb2Q4u4",
  "key32": "2WFL8G5gF1edzq2bSifj5ZPfbjprHDWeo2PDS8MVm3tGN5p8nk7EoqB2cZuQBW6cc15KiqMB9yNhGDQV3GSHotkc",
  "key33": "3HQr7z1jWT8LPzDd6z9jUrZqEjYJ1yr9y7SEH4D85TKR7HGWPj4oWf5rJi6spYv68pRmprYToHD51iywM9HsZo1j",
  "key34": "5835mTift4aL7wXJZigM8ydTbR4G9KqZur8mZhp3hjiqbm9uK9eJBj2YYksYPdRbVofix2kN7dpkUTH5UsuPRq6v",
  "key35": "25gkMTHCXasWFAoP3EJbmKXrCBf3pK35QpsHZFyPydbkiKke6L26BcSXSjXcPxZzCHwMFyv3rEhng42q6LuRyJsP",
  "key36": "5dcCGoTZcBFmLwgu7SBC7k96bVEksitQ1AKPS9kmwA2qQSWxCBHRXwWjNxMNPNadNTPP9ShdVp9oFcWMa8UgAdQV",
  "key37": "4EBy981HGWdZCkSPu4vKKwRuxTzkHgWYmdrF3WyiCxo5MRDodKCDwE7feEkNxQG9or3cuDXNNUGEfVnBti43h5ja",
  "key38": "831PY8nZ3Mr5smp93Y66rM4vGJ3yry22zujB5htwptRtvJWjV6hBe8Yjens8k2qz6acA7E7NKY3jR7XvsN3WhTX",
  "key39": "4nkrMdkXPvnn73dG82vDTwAsLg1rp4hFEMNdtd4e5NgNeKd2DjkeDxX3Q2Qt9T34Q4x1axQGdHp7xq6mE1ZA3kQJ",
  "key40": "3avfkC6Nj5rV6M1DyLECshsApc6ayjGoD4P4YAxenz7dy8u2VZfdcgmqg6jYeiXCSehqaJogxLqHMjXrnKwkJdAm",
  "key41": "5NxhZuZkkCQL3vg8JXtyWBJz5PNQFHVxciY3ojjAmq6P5hRRkLAjvR6Vn1HpmkUhewdmpXqpCxZJQoJvA1FAgWpj",
  "key42": "5VxhNBoKLaLqSr16zKUsgf3A9xAvCfZgjM6U9LFe281UgpssSzqKtCvp3a9hAE7AfiwGrXDfxjmmvWk5RT54ue2K",
  "key43": "2ArEc7ZVXVt9iKWMGFZx67SrTbRWYXoCfgsebkLiZENSr5xGaqeZXHf3GKThutuKLksspmp1VEeEWpN4GPHZAmFm",
  "key44": "5HT9DBzqKS6iS6ippTenhNg83iegitjgWHFJ5FXq9ypVS5RegSFo7mQ6iCQJMxhzhnKnbpvKfiUZZCAFwmWgniHc",
  "key45": "5JJBrbELz1Y4Z5pTnMABkuFuxafAmWDSQntCzns9WSvEghCagXNPhTp8Fk6kc8VjEjzB7dwZkzNY6vhQWumeNuve",
  "key46": "5neQX846wD81YDkgxiF66XpRPog9MdNZ5dk7FAia7jPJbfdSo8peh3XermCw21qZ96aDcj3D8k48fYQ5ADTRGyKf",
  "key47": "2VKT7gMfVetgKhS4omAwvTEWqqbK6Pm9XMeAzcMKuVYKU4YQh6J7ZxHgbFjifuYiPhTDPehJfCeJiWQ4xbomWbSj",
  "key48": "3XtdLRAMrk4Dy1Zktn9sY2MbSdNCrqXDjxsbh8BHVV9HADr5quGA8w2mH6qz7asBijtghHuxN2499xAn3Wx47sWn"
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
