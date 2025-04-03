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
    "2RiPfuiiHLSbbBwJKo5RsUpFmgZ7eLyfF1L6L4etjNYMMoTRrkw6tAkgt5HRD5fpA6nEadRaG5t163XJvyqDSmAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J8iBXDmwFuDg4vViqP63B9CHN5PEDobbdgwpfA8Gy8hcELEuFesPSmCv8dwUi8jmeCPD3JBexnoo2RNmPcaSTpp",
  "key1": "5m6trzYUwktpWkxmDzuQJx5K5xLFWwiSDZUE8wo8Y9ZeJ34hRsZk71xDcpyHywYyaoJ8hwPUXDFaCpfSiQdKCMPw",
  "key2": "4ZRCUXMToJV99S1FzcRZqLSyeYhNDcusqZrL97vo257wHZwJ88rz9PpxEMbaXxe1ooaZTyfUnepFtS59RYvD58eG",
  "key3": "5EM1zmAd8b3pPDrG8bc6gDALUnFku82enhqxdH4k91Eo9Nj2u4vngiFv7SCjJBhPXT5YbVRiRALasLxQuPGGwkBb",
  "key4": "3Qi7axHnnNnrNSx4XxxzZskf3qzFTVsySRXhhaCFzJbYfYF947ztAzSobYdDXm1cgDcaZHEemjKrsqMvZFxbbu2y",
  "key5": "5BAKoC1vbunarWRASU69yykhtAu5xnzecbxUE67vbCAHuNXqcZGLoTomL4r2PgAgNowQPMBsNbpFcHw55pahKgtR",
  "key6": "46t9UjbuuHNjqExGmdVE2aDmcV751qQLAJNgbeumdEtHyA9fV1VwsFgEhqDq7zhq2hxpVDqNsZXaKzg1JLGDWtzw",
  "key7": "up4KQNd9UwauKPFiunSopx6VuTUycWj5rkCFtXXoKaAgR4zKFrcULSHjtMjfgzb2e5JWxQqoh2xE98L2fJzsmCP",
  "key8": "5eEVw1jsZx1Ez6K7jXJH5dTJaJFk2xtfbGsXCGVKRZ7tuzcz3B9KCvGXjwQTKs1XFTfDdkPLGQd5duHKivyzMdeX",
  "key9": "24tbGVCHNwu5RPJbkbEUC5YCyGuN7GEGa37jdVe8waMutieFNeU6sMSqR4MZetM4P3r8DkqixVE7DnfqKKHhqoLA",
  "key10": "46fYUT8NZjJq3kjDMkuyw5XGhPz8rdG7gPigejoP4hLm4k4Ep9aGrMWvgnmqyFBmxcN1Tf88caD5tRTU7MP2grSZ",
  "key11": "4J9539fk3a5Z2aAcqyf1uJ4aUAXXCF2UCNSLbea5ADmDacRWhZnkz16pQSr4HWqejFZT7N4ETXyYGgtu1VH37x4d",
  "key12": "Y6gjACAe9ezGnExvf5hpxnxse1BddkRsc2FvdGj2cD9nJBVHTW9WJXsi35QMKnGGNmQdkaBVtujgVbuPFkHrxe4",
  "key13": "3oq71Nrv7zeX11pPuppK8bprCPcKLDNB7FYZ8WVU592D75sRZswa7ysbx729WF1B93qKQHjmYRYseuGJyKUuJazp",
  "key14": "2yf87yEPsw99SKBRFpNX5SvJkaZDPYLXkUK4BzSry59rptfvZD7dwLxgSYhZD6CUAXkYoZZFqErYuKLzutEhmPQe",
  "key15": "37VtA9Vy98Dd8iaexWL8ig61inCZD7pCaZRknbyg2krQE5eLcjtxyfzxW5hzj9L6gZJJ2xYVTg8hcbTs9thsHnxx",
  "key16": "4BToHnzaahtZgNwyV3UcfT7KXgnsY98Tu9cN1syXDg21yT2L5tsxTJZnPkgmBNEUcfAAzht7AWs3D4SismTMwjMx",
  "key17": "49ge2VYakxTNbVPfynX5EFcbmjs3JcMAs8Va8C3Ns2E79hi3QkcsstGbg6WAEXJ3RDvzxvkoNp87NudeUrj7y4q9",
  "key18": "4N3cE5rqjkDDgZeUPLZqQLAgMUCWn9pxevotEQQie4orASHYRZZaNbGZRhRjJL3sY8uZYqY36Akdn9gsZwSWuuKd",
  "key19": "3163ddHoDFQx8pSpoADBEjtF5MagVxpnZKJjUQbg86nkDoZSTcMP3obRjgVFeA8yqjiEnTektjBxsuw9kUs4atD6",
  "key20": "4x22oBJvHSukRGapo3ouQynr5MtNucx8aNXSoRmQthck8qrwexykq5SJbX5x9A5L12nmcta8dMpPxP5KxtKbtSqM",
  "key21": "59CkMtuNQLFT1xGc2S3rxtRaAVqX9kj2kotuHKxNfvyh45ccrsQT3p75Rox4CQHf1pvgXrVjDZMsSjuu227TugBz",
  "key22": "LZgMRavcuZYke7mp2GgQn7TXFyaDEFijqvXYhRqAD1jK6QMvB8qYgX6Z4a6f9QFXhvBryqxzALJnKiz7vZrv3Yj",
  "key23": "32WhvwqR91v9C55Mp8LivazW5T3tuuSRdsSfaPgvK2NxgXgt71WNYkrHN1mmDG9DuXJnQQbF4TpurD5wfJzXTjSy",
  "key24": "3ZmTVfm3iUnyWjXakE623kxLcL2a1kv3c8SYrxsNkFXiUV4StuXidYZ2doRUBm56pWXg3JmE1u8QVMufZSEZZkoB"
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
