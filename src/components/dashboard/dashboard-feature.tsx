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
    "3u6rBjSqcJxMnV3AoEKoV1XzgdJ9ne2onMVxVSdxjkMA4dRg5EFHtFTtWFP5Np8YittWyzTQdkcnNLpWMjr8a6AR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "614tD7gFywpBPqmrCAK29tDn8VBRExLKE3NjRekadUdfgZ2dRRPMT9WU3YgEtSnTBTTDtSMU43KtSwm9BunspUq6",
  "key1": "dRqWV6eSHCDGF2j6TiLSqwpDM199i5uZcHrJiAHKswJDedVr5GTJbiBA2ZfxNP2sqRt6zNcfqS6iTzMMuxZYrBB",
  "key2": "3CD7MwfR95hQAPDxWVreGTzS5HLPt5EAw8Gt1WeECLFCTqm1jW7eJDdAyEcMtrXLfcTvh5PKF9J8uLHVguxdiU5a",
  "key3": "57QXn4GuPLm5o64cWTGZPfzrPCGzr7dLBNcpwGQoWCEdn8SsHE3cRH61E8g6ErRwyU7JjtwyyHxBKZijXXpfayp6",
  "key4": "4z4NRGZnexauKgwQyvK4TRB3uPiBnaTKjiDfByXmNx7tafMRD1crZW1rQWv1TgdivA5uuvxcTSKFpKuMgNizmFjJ",
  "key5": "nFuxjDJLHC3Tys4BzmxaBhnAQoNQyPsydWQdfLg7So1M9gnkYkjpDE73YH1w4RTtgwxmkh5qyDE8DYDkwDHKBpN",
  "key6": "3DwEhAPFTycXDqobPz9v95hTerFUfoZvVyzm2YpBMQbwq3HVjexT2bHQunveAsAaHeY19YZEdpQ6hCP1Uq9JSQ1g",
  "key7": "5MxcGkkn22GXfBFr4mL3GUjLXkKM1LNf3R8wBMB4KZDzTXyE7z78WTtu6PkurGj6uMSuXKecXSS8JRgdLQjPXWoG",
  "key8": "3oDuWSSfykU3XceoH3TjzJBCSWM1VHjNwzcUzi7m3GB3JwtCRFEfWUkwWoRqUhiYt6q4BoN11LkvzQHXZ24LvC6U",
  "key9": "8G8Mn3Q12BQTAhhEVT55qM8BgyT6o4D8J2BkzDznWCa3EZ7pC43DUm7RRhe4LYUNFPcmZFCZARR1hTDbjDmVX3v",
  "key10": "36bu5rWN2iBawL6zdbFJrx2M7afYTL5xDzZ4QVtHGVuwTRNAZx24wf1UjBwW2oV9m5EyMoPFtcMu8SDTB9zan5T1",
  "key11": "2QcsWkQ65qWgkY75FX69F1MtUUMRZM4zeADw52CRwssemJJQhmFHcrrWGwcmADuiBqn3QUEJFodmHt6zYcvkgBRw",
  "key12": "2FXkkguW4XhGuXJgx2Ju66DNB8uUCgj36o2ovGzB6vsLPg4hheFf6bhtgzQTz5RPwhe2Yi4hidQZBc9XUztwZSoJ",
  "key13": "64VDr8btZhWU5pUjuSYWJ9HdLTEMtqBFZjn5sJHm3oE8y9wkfrVikFfgxcXjkFhw8H3FHZmM3ZtwzeGuUmH86Ych",
  "key14": "3oxMA3zLNx69tLvypyfvBhZ6VpjThzTi3FP9p69XzZ7irEG3Z1VrNFsitvKfK1rRoc1etpmoc7Bydm8no9KUUwe8",
  "key15": "5GjERFjrH2uQcysx1tzBptv5oCYoHY9KBAh65G8adQDfoffHJaG1wHeSdJ4iQSkabRn7cpagifnQG5Vm5zREv4vf",
  "key16": "5TeCXyNPHZJxiusDtfKJPf6jaWVg1d2Yy5YGzhAE8nBpTZg9v46n9iAeWNBzazD7P9cDgL8bi24sCJRPqoGCbsnS",
  "key17": "2Y4gWmzNJQgmxZeTaaG1CjLKekBHAYdMUJPGqZ3x9DKX7gFC1jLWVPtDdgSp3EtW8MntMf4WoRtMQiJPpvXWVSzc",
  "key18": "3ptPme7qssuXvvt2PgWs5cXoo7DxJQDQ8q6C4MdDbynXozqu26VdxEHs9wk8YBjsXFYAgZSJAWkypA9pqs5ZNfYb",
  "key19": "3cJ9NnmVY2aH1FaVEd6aAmCKN93SFgTUE1DBJaVGwvwy69TDTSXNjiRaRi6RuoGviEdNQVT4jQYUPsnutmam6vsi",
  "key20": "2N9wbrwXoFX8CogFYeNWcViiEspVnfcPNrEJk3m8FLTroKwyvA5HyHQfSJgKP3tbHuEzDZKxdHRrp5Nc9SfqHA3M",
  "key21": "3iSzv5PG9jo5ZM1sKusLMKmX9eMTUPwh6gsa7uSwVbYQCyfkdoEFcNRb3kZRxo9HP8pWueKSuqD9UpUw6uuyNcdD",
  "key22": "3yKAcuLgarLdjcqt7CEdRxBazXGmqxEtRiG8mFSfQpJdERRyQwBaftWKRbhsDB81Qov7sMbunPq9EyaLAGRKxigX",
  "key23": "bqMN2iYCyg1mGbAUSX7ioe9jBu1KmtLcVsUNqYbhszVUjyFnKuywXZS81yUboqkV7VBdg63uBSScyHX39dEjLVj",
  "key24": "4ifywHYSx55fDGwkwFS6Ftbj5RrVpGStUZtuoy2CBEYCSqxH9xfu99TWKbhtRnVAm5b1iHriwS7gQQ39tcawydDQ",
  "key25": "4GoTX7TKxvrKkpnuCm1kYYt8gDYmHYmnsTyjRPv6VNvmBwRz4JstcQf9QaKw2PVwUMEGwyRYaLJuUMLWHdVpvNem",
  "key26": "2VXuuFwdb8ToSvvZBUc54htUu3GAaRv7rHFy22SbrF7nm5o4qeJqfJkwqPtYqGJq7QEDNiEG53nQ4myJ1H68MH92",
  "key27": "4Ffwbp74ymkEvT5pSZ7WJjBjPLV2LN7197Yr29vdCFRWyeAxHqwaCL8MxL2ZVSu3cnj6sLRSY4koZaWNSuFB9ngA",
  "key28": "57HY2x5UVBi5t31L4tDyGxd8oKTMmoH5ooS4gyc1m22J7dKhQ7yeTwb2jMeZBgeEoiMr2pLWq5QsbMVcMkwDxAxM"
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
