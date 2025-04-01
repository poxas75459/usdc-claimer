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
    "4pgKMvjiQMH7Xtt1oEhUCUopSUieLrfjSVu1fDPJMUL9rBiijQ5pzxDkTj1yU2PhHvg6UKyJPqqL9avLtZ9HS8xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y9x7AqSaj5XAWvyWvom7GYTq2g71d26zbvzipmdfM7EXYP2geUP2KPX9CSTR3Ngf64s1KBGEXsvgBSBX3C8aEcV",
  "key1": "4VW2vcae4oJT9ryfXJDpyeitREZjKgvffh6utrTsjhXfajoN4pSTMG2MXrYX4P6YD66GYNfeP13PjvLX7UK9ErXz",
  "key2": "4SX6XoA289ipZpzk4rPS4Pd1mA269zqNnLDhXpbFmVCC5UGyWtNoEA1HpNsxk7XJXRXabiuD25rwrC7PAUoXnFvb",
  "key3": "4S96tEFcpvGQW5J2BADLtNDMNvbEVLR3UHqkEQia2w7vhMeHEXdy9EmDHj3q14usNLZXfk7ue4w6Q6kSrrMDSmii",
  "key4": "4GouVTfQKNWmC2tkidsmVuyxB3tkbSCrwsh8rgVPxVZRwauwHNhMTkjeoX7hK7CUVXppMPogxHbGEqDjr1enFMiH",
  "key5": "4tVTWsYFXpZBCBAZaKHaBDHxNY9ZXtZFDHPiQGS57x22n7SP3KHufyHRLutXs5oJ9PzR4CLd8hAoBw4MEy27R3Pb",
  "key6": "3yfBR1G9XYGiHQqS7o8D1mTWaGq2yYZQz7ZM3JSPpWr1jzmMKt5cceQq1zJhkvhczXHxx8yCuprjWDxppTbrwpiQ",
  "key7": "5xsXAFqwLwevM3XebcUUb3mfFMtNHpNUqk1QhQCwKDGmJbZz23C6Sw5g7YmQptXaiMUrfvt7hmkXPU8n1kfzr42M",
  "key8": "Wo96QuEUueas7PUUudt2jkVZtekCY5KaD4oWCL8wVDUX84xcnrdgUwf98XLr6dt5Ys9s7LCQxDTjxciGp4eWTqW",
  "key9": "UE43S93DZBcKx3jkt6AiRF4sbVYD3kzoS1qxf8g3gRWC78V3jRbS4vwdwVPwUJXJokvawZ8RwCr6oeuAdmRpfWM",
  "key10": "387P6Xcip4wUPxKxPw5MtqxAPo7YRbraUbJ778nPD7Zkz46GG7JDZzhFYbu9fzorBax8hZzcBZ5GoSSAm2cDRfTG",
  "key11": "4g1DyqQVbYErXja2jbAhLwajb8qN8GSPSLun5YdgBmkGyEQLaTKqNqtnysD1Csm4hc4APbCtK1zwBcoCLbamkKnG",
  "key12": "4YFu4BDWYrg7zhaftuBSG6LmBGpmVbs8fNEtbe3w39AYKVAZqucqYKAB4KWamgiNGES8Tbn2Z9SagKNTM5TDgHKk",
  "key13": "3MiuD3s5s2QR87WbfaxPdTFiDNGC7jewAoMBweZ66FNz7R8B8JTswEfg2w6muUax5eHnPQnU4u1xitsnY6rrtJUW",
  "key14": "5g4K83fm61s2JCcXnq9A7qFXC1DpwCdNfbvsVEMZbE7NQEexuYn7i93an5wx6pYidBB5Ne1h6mJfHXPCY3SJLQqd",
  "key15": "2TFkEnwpraArm161LgFzytvw2n16k6QMGNYkcw1ukdhhjQu9LSfSUo9r6E6eNwzjbSKjEdrzXXYGmM28s3RrC79d",
  "key16": "LQWxoNq8iNfNW7QaowWx3BZGAS9Qziued11ZstgefKvhrpXyS39uV4kdQjCPTjP4CmZExJ4B3K3Bk6hzaAeszCG",
  "key17": "2RYU18eruuNVvUVBQ8TVaTghU1iDKbgCewHPt9oJDkG6jo3DQirJ74jUvL4x5mrrYaCtexHAKByChNZvPW87ZeBM",
  "key18": "2wX9Lf5Afd8Yc4HzhkN2gnqUSG32njLRtDpbFt77RmjhvoTzKKEw4W3y1MjzoJXNjZctKkZZzet39A7mP6gui9Rh",
  "key19": "4QhxqrJfY6J3sp58Am3DxkKQN22wqUxWBE7kBpva9vQPTiUGJ2pugoikBG2ycRp2ehHTttACASKDrW1SgdybBZnF",
  "key20": "5CP7EACZySAQbpx3rRTVqdqK1RMdzGwvLLNLB4qBR67XLDGFipmtveLAxg5MKySGA9pyCXk8edTyhaXL4RSb7jag",
  "key21": "23VYkADLtLwyTsFimJdg2Qjoob1tCxCzz15FMd5FrmjudFLUvupEDJaR4wPUT4fvFScMnoAUnHxJkdYHiqMSnSvs",
  "key22": "2CPMu1dQzhvYDCroqaeJFN9Rsa89MEQhijD6C2vvYVrZE1ezYGt2m8bHVzKxE8yN3Fayt9nYVmJmqR12LcqDdRCm",
  "key23": "599LWpFH42CwXSGjAkuDKNEUYRyFpgUVk9cDiHCAcJ6hAwKoiZscSe79LBEhmo4NuMmmYgFj53GimnTAHiHurwyj",
  "key24": "2JfCEK2UjAvV4o1rRTbH3ExZsGKYhGXDxpANYsFwgwYgovkkpzNSc39CTEbwGUtfYAZrQiteX9PHZPEBewg2rrUE"
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
