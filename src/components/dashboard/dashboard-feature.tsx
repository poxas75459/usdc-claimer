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
    "2rS1dDeuBibsYSQ9WTAQqTMdV337uEecghSjKP3Bsw9vrHXQPurcoDrWdhTpZMfkzGxJmbUPx3WjSAryvvccgQ68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VB4jmDxbuSeTLf1zLpgbk7UHJWMD4ZrSimFQ3SQCoBCng2AMcZVmGmQMsDeZ1GNFz2WNwtw5wEg3Tr91d6hqgio",
  "key1": "4bpfjpJJk7jCk4HmH4Dd1RdwstJdCVb5sppU67Qt3kAARcSEgz5ASZMtS1niGEo6rbSUSxUd2XmVPdfoQRV1DuUo",
  "key2": "2pggYUxiWRAg4cQnAnePVtLXac8bdnmHZoVorXV7wqDyWjMZcFqs1ncy9wUdzgLZ6Z7Lb7DvvG4ZcJ5aiG1zrPbZ",
  "key3": "66SAAPeSfTXZsAZJV9NcBboqgxHZx2ajNAHibM8dBCVHkw53sv7VRSHo8c5cH42vxHQPYESyZcwHWZtxD8fR22VT",
  "key4": "oRdJ95ASeaYqKhmPaf47k5bLK8S6Y2w3jRPHxHh5BDEuxqtC3qGcvhj5ydnn7vaUqZ6uUeJG9bJ6AGbPUxD3sTj",
  "key5": "mPFfJooMR9efKoYm2W81PZoAEK6v7MMBhpj4C3CCenUpe7RottjNgq3VNXtHBtw2fRRehqkxT5BS7rPj7JiHvUG",
  "key6": "4w9GmGuUcFD5R8QjF4yjqrpMYNEejv6yAdQie9DoRhxPb4U8YiZFAyB9i4Btjxj4h2JxctMB2zxVGXiySo2E7mWo",
  "key7": "5GSjKuvsHCPwyo2wuHqaimcPxiSk13JR8hoGMNS8uarF2cg6QazUML2KWm4YShT8CNt8a22DAKA4uSANPwWmC8ox",
  "key8": "2nMdEuk8yCcDNT787Ki6gJMHZdtz1vXZoNdXFDXMNwPXiLmkjnj8j3UxdsGKMzCiowYdY3WMzU8cYVMJF1m7SAmw",
  "key9": "dquHzL6QdmMgycTPhCi4xfjPfCjq6d6aaETFRyLKi7fZRzgARHzonfkFcuZg9d2478Fic6bTasyANPZ3YMC7qwq",
  "key10": "4eyUUvFup93vvG2F1gLL2EDcZgKBmwuhRf9G1ra8nLscRKVs3pBYFEriCGb8oRKDS2tw5hyasgT5jZhYRGbVNKuv",
  "key11": "2hJNjRVSDiqWq2SqWL5dLR1xcJjGgAePheFJjX6Rx5uKpdhWJc9MvLBXzmdzj51d1kDK1EixVqjzKuJTVLm4Z4WE",
  "key12": "jmQMfK3xCTUf97KGfpu6uvAvwQ7XF428qLVdd9gcF1Zs92PUvaUCz52QNe5jWgBUGKy8enSfBLfMYw9scw6PyQU",
  "key13": "2qLaxHXPhkUHJqi4EkgMP9thdmbhEB9zTS5n3UYaG5pLYWBBQBtBYAnEynR1MXRvWP2rBajbpLvirhcrzXEZvMxY",
  "key14": "5jd92HK99Rau7j91cFZjupAwWbykm87pXdWsSZea3i6PUS4ciu4RWXZby9VQTS1ejdXJ9AbwYsYHSbBgprbXuccW",
  "key15": "4EnNuZpuRT42ecYWbpQnnTDXA41JHBRLH3KoN4u2UkNwqk4RMfaHwM2HxL862WZ8kXXBWxKirMfesmRgxjJbAbes",
  "key16": "2vtJzbksL6SHwytHSgDWcyfca7xQ6bxdTxjhxTDgMowfLSo59Apu9Ycd9iFHL3Ji7QTYYtm3u6vwbKohH29haLKV",
  "key17": "5uaDYCoxR5bU7FAjFbR7kqMjCaHvU1ZhcUn9ZSFBEbRAHWb4oTzgprvwWrnYUu43HgnfDNKYiGruQaehSzquqqbZ",
  "key18": "2tRzuwcAa16Mc4AQJKuEQ2jV6pQWGxeFZk91Cjxw7XQRPEzmKJjoqY3XJzHdWfxhr3PS4VYtKjVPXfMAEEJe6JWC",
  "key19": "2kSNksyyGSAcTYdFgDY9EXtGQzQFgXjNAveM83e8KmyK9hyhiSQRq1Uo52JMVfWygiTkhLKA9ebFg6xvbbxkRbvq",
  "key20": "z3MLqw9qb7dsz84sRgWLYRk9mchtdkJfeBZ4k1q8CUCikdWeCS5tEGFXJQCdsH9swxmDea8YZxLocnrSDhoGb1n",
  "key21": "2mDovqivrW15qSxDozXm5sAJVZPuy8BC31GnBwz3Upa5bgueBqSLPhXMe2igShCxMnhfr6Re7gLbMxboku1iQtCy",
  "key22": "qzJ7QTCZupnET51rHTcHtUnrrABoxzA7pn1JVnPSgzGg4tNm9Cu2ER5byLvcTRuKfqqkNoieprPPBwM42Kz7xmU",
  "key23": "4pfpmDdvnDM2EFzeJtgqHVvGEH4s4gSBZN35JNtfRUWTmcktVfU5dPgsv7PFDvZwAt7iFQa9VfVjJUx3KConpWaY",
  "key24": "5itMHruuPWufky9vgEVAPRTHpE5oJRwwAtpfy4j9RvkJanxqjg21s8NaMZGVCNecX7UFfVpyzEb7yaTKgqP1JTuQ",
  "key25": "5hwKWzRATAw7QpKZoyZg9yaY3doBsL3Mk9KqHvnKiLRpUiSiLsfRnDuAJs66BkiR3M4icHecMYqns6DUUXHLcc55",
  "key26": "4e1bBdQKNCXVwALoEq8SSCg7QAMgQRayiVaMotuZcGme9VD6HQFPabHPKJ1867E8tRwn1rApK5HJQQXDjVcoWjgX",
  "key27": "2ci7xTkXsAoZHy68QNahpMskxSBxdfDZamgq2SEYTMhPWTA5GixeqCEubM7ruoBKWuF14sHW4Qxp1uo9o8iyBum",
  "key28": "5z6nwwGcZgkCHfUim57L3G44SXSDj2ys7apoaL5j7wLVojiQAxvoMwZQX1YobxRX6GJt7TEjNP6bjJN8oSv4M9gV",
  "key29": "3aEGg5TjmBez5zVMTGn69X2prk5yP6YZbZjmnwTMs8Nt2fL5zz2RXrNpDBeZfFPvUp2AK7tiu82XtHUpMKKSpddx",
  "key30": "46zExwLggGyQkeYUwKo9rtRFtaruMWUQbrsmkr1KfwwePhPmieQGmgWqT1ASAGnXJ7rg8jNqFNV1ha5wLH6znNYC",
  "key31": "u6VB5u5Wj2DynHLG8WDKEYR6CE3ZK9mmtEHsxbf9rLnDfCTAy83cuemMybDxtKGoZNVYfTbBujJNbGC9qr1J1uj",
  "key32": "B1hyJfcz1PZzUZbFhHp6j879dNy6iiFFJSYHAkSRkQhdp2oqGYtffWyVG2qxV2m8MV4pAhSKEs5jfnXosjLCrUt"
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
