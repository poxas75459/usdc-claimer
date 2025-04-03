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
    "5RuskhBJc15N7FA8oRbHFmnLx7KAwAzfk1sek1Qor6o2Z5WLxJS2JGMwo5Me7dBSbfK8iXe9ZnP68SPNbKuowoMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DRqfULJ99is8TKo4RdjpmQp9M5mR8EQUKj4rJgs3RvSYqyfkanNQMNfnFddubs9uffxbX2AuAivF4LZN9pynEuZ",
  "key1": "2nmbfZcMYdzMrKyFqZbMGBdtaqCPkeVfnz7iFd1hW2ArBDHG3kJnxw74Vuufg6QhXmJMiE26qodk6xGuvBWH4XNA",
  "key2": "mitWRBJ3YBo9FbFhT6JtK3TrUZ2ApnHkj1pd2YuQFsycUfzTpKCgQYoKHMBeiWFf28KKK6SGRpkdNoAh35mXW92",
  "key3": "5hSVhMsu1H7X34jy8xKySmTVV8vccu7WtpphPcH3YoX6hRSyAWphmDnxdxyAdmLhr2TizsM4ChWqsGYApCvL5e9T",
  "key4": "eWeYeubJk18Do9sHQyGGSMxuxydBX9vU33TGbA1LwevQF6K7BZFi1jJxhNK9uuwW9v2BUHKStu6exGUG665ZEX7",
  "key5": "2gTsvzhZYT5EDAo8w4gs6vuX3VFzfXoQtoAxR7bQbYSgFsyEG8DbErv1Gkx23cqHNGVsytoeGAEXLRXxyRsKamLd",
  "key6": "2zLeRaFkoaBM7qCVCqoaNnUzAMT3S59xVxwwH4ACjbFWsbzviA8DHpkPJb7QSzsGDLYsDj1XtTJdAbY23ZLAHwMc",
  "key7": "2vsNzjHQpQAPqMNM7aesrrd2cEfJiQ3LtXAEhgKJn1pz6ioYuSKisFP8vtxWAgqXjSzQHBAB2mHbpZ37x7aNpEni",
  "key8": "3qTiHrq7GggSKGvzbLGD3DNDe6iDtJGgQ6gzTs9bCqUaaxQoUkAm149SLVD5UYVPWyGhKVDCpv3oXzSM7qaZG7ja",
  "key9": "3NJhJ8nCUhFEWaXcKZwVVoeXc6Ehqj19vFzfak13Q3pqHqenZ5QRd8NiYbVi4aEH3UxQvrUtqKkXsjrPrvcjg6oX",
  "key10": "3zSDXd7wdG8aHpNQEvoCUiELJKYCFvwrPrfnFoN9RBKMBaUbRSP6HN2fzzqesGgBgzUNvbMFp8Xymw8X7V4intsV",
  "key11": "58ThQVVm5kLtazqnMenJqrSJab4CHJLRQUDb1pyPeCNK62XernjNtf92iFxXEZQLowWmPBdYThTJqxinXne8tuje",
  "key12": "5j37hYf3WyPedAVzreKw3cSbuZsYzqc3h6UmQAiatvvCDWFgTAvbEX19FW9cfiexchJgeCghLtjof5DGp19f6BvU",
  "key13": "5qDRz6ZuwLv8bLnvozkMb9TXxSRPByHTxHL4pJxbTpiuKN1pNKYaLUmgd7pt1U19Kv97KYLKDTRsFGzSkQXVZCRe",
  "key14": "3m2DX8r5Ku1rKTktAaUeD78AqovydLDSrw3u3uw3J6kydz1gZQL17RF2DxyJS9twa6kM8e59m4j3vgXKDN9Ed1qt",
  "key15": "i8d3vAfPTQfoGM5MZecNaznTGhS6A9pfSoJ6yX3qaAy8JBekWVrY7yKJCU8AQRuMDiS4eGmdATtbQUsevDosAfU",
  "key16": "xmfqtGpJu48KMRXKVAvRBbogMqHP2LTYf5ikJYnkmKnXwAbMK4MobrtXSPust8QexcGgkDUk5Pgg8omXkfzPL5N",
  "key17": "2iXQmgFAdGYrTfi2gomYzmAaucgPMdo6hZ3E93k6MxoVerHVpszurbvgvE7wriCsyFtFqaGYFo4wLYiDAT7NbNNp",
  "key18": "5djs338HnX4gsK1efpDP5JDq6i2addJJ7sa7w55vP1iD794KKEEiJnA4CiiPSMJQZxza8SHX3jX6Hh5V8AzfRism",
  "key19": "6f9yUQJ93kzVB7cJNFaBEdLn8C4KCNo6qxUL8QrexBvTAwv4eyL6pQdERH7LFZweqKkoVXKFbwofiQfcUfEy6tm",
  "key20": "5C6M9NMPprHFqaUvMwRsayBfpUAULH4cUTo7NxYgMenNCRYDKse3GzMvDepRqbGjPzxJp9AaUT4E79KWTjfTDDyq",
  "key21": "3qqzfryZe2PzSNNzVPBQpJdnaE7U8VHowHno5DJo2o2grw8EpoGpxcAu2xbe9pR5gRaX7kn9znDZsXt8vs6QqBgy",
  "key22": "2XJhQCm1UpXWSG45XCB26n3pTtN5yU8gW1JmR3ojRPaKcUjhgX4G4oWyC4eMN9nsU5rHhvmpvAJ8PfksG5eKNtrd",
  "key23": "49cgSqzcV9C1KxvoevENW4h75ijaznWSmCQDA1tuMtDKoJabwWQsyTGhxyikbQPCkLEvnPwaETSAqakZHMBFV4uZ",
  "key24": "2wPeU9JyJL4DmaVELMxXTiB7yMSi9QapAjMALSFKCRKEmUfubEchQwe1gB8cHVDwXziR9frpAqxoQxunMsiPGLcb",
  "key25": "4mwv5GyugpzSHLC7WZM86LxecA8gwVriX1qxHc9ooaacrVexQAN4Z9qntxSqbsiqUpZhikQJ2una3JxCgcbUhozn",
  "key26": "2octYQcSEc2bHxUBCJwAnrKp3Y6VMpdvKR4cv9zusDkz5eAU9PWUKvDXvDgWGGhZHQE4kBjDn4yPobNXhd6STMe4",
  "key27": "2LZZ6816YMoqcxtRwNRBqskiBpGaPkAK2D5biJZJLmKwuuDFpy9KrLufQMjphppoVixmjMYyMDSQePXQyWdw64RD",
  "key28": "5dVWP2z3LooBEjz6ejEV4mTDfQKhecodiPtAbKQXCE5E6wy96TQ4EjW4ANuQCntRYvjLorP2z5ce7ogzaeiR5rpq",
  "key29": "3mLb15nmUvsZ1A3ahdMmfRnVbAhqXFt6z8JvnzwgaFeF8JzBui5RSgEYrc9EbXxgK5KhuCmVDPJwv6UE7JRpA2Lz",
  "key30": "63uJRTMoDJ67SBQ9inKnTZemnPo4jgjzUCjGSNrzX6GjbSuyhmmyNArgwfbJpoatTyJV2o6Sj8cdT7vmEMV7bxB9",
  "key31": "3oPUN9mzJprM2QPwdiQpj6SqXXNTKLYyvirbg8ND8SpMRhqVzCQpNAiag7zSWwK3kPKaC2qSdAqEvtp665QAQpzK",
  "key32": "231MRisCaTn3A8YHsGS8bgptveatZxq3t4oR8P3dydQbGrGkMPh7hLHYVRFEW5spAPYsiB4zaxp3nLZbjAqXoAJN"
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
