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
    "2Amv4Nwxws5nxFZHnCeKSvbP9HWHPVpbN5g836EQdBSxxT6nFicWX8EcY9AgqZFqWYgTGgDG7RqpF6jv45XUn7RJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JdwUzaEjGLAeYQMvxte8u9qenesSGcNU2oaaMHH6RrFk8DbaKm9iz7PiuNC6T9UPeqn9J9dfDh5GoQwy6fGs3tn",
  "key1": "21jPPJWMmd6RDJUE1pumviiUoZGKDitJmMSfkJw4poVjU79CruBDHyj816TJ1nNq3FduimKzhhNeY8TJMF2RVfq7",
  "key2": "4t857FPHGQdQkLJ5Z1Gb8bbfuaFEyv6LMYSUoHhfY6evpCbnEC4P7k5CmDwSCgsBs3LX5o4BLGqZBTLPxwQ4QVkz",
  "key3": "5vgq3ip8NUxJGyCfA113jtQMKUyWtvSXvQnBRsE7h5UtgkC8rwfUHCBLG1ZJhXkfW9cWxMgeq8nfKxrpAnSmREd2",
  "key4": "k5MZNMNnaFYBh2R9tox5ys3DyHogsnjeT2KhfMtnUCBRj89TmSJGLebKYAbsr7iDQ9rZun4BqqdAtcMhK58RdgM",
  "key5": "4vhYTm8cXuuS2xPwf9NJevcedniJ32ECwKgbe2nWYvxY8mui7MazYQu4Kd3zZfyEDxJ15EYLXCYKCrWUBzH7YUE5",
  "key6": "rbTQ7udNTyAmZckYJGCUXwX4bFqRtbtsEXk4j5oMWGhXzrG4DCGSjD6ndw7PeGp6uvwK3mRXqhHZsciSrLVmuAP",
  "key7": "4kFHUJpThuyhWvEFMVMPfv9jjTskjt2nVPu76pUgTPDavzZV5jTJ9omFFge683GD9ET9BoA2vcC6s7ieqEjxSnz8",
  "key8": "4MpErHXM6ddG1pS3WPrejPEAiWtA2xuhUfVAHQDyFHvWdGmGHHgkWdjNUXHG4PJA8jG3pvuREkzbbs7MBrfxyxMi",
  "key9": "333TLc42bXGo3c5RwStQXiMkccUM3ZfYoonKYcEG7grHRGc4HfMBYTMhgQji7XhKbrBjoLewjR7dHDgVQix3poJ9",
  "key10": "2CBCSNn9poHWbahdGPWLDu3f4z34v81VCRU2B4QDtzW4nq7NhYPcX4fMiyc7XkPmNCzVZ1ghNMkjre4BK5VPUteP",
  "key11": "29zUjaLXJExBJdMVqHmwWBXoVXA3BqZWsN43CPGwtTCu6DQbAK7boQRqKirgKAPXfMgWWY1q1MJpMnp8dYnX8hk8",
  "key12": "242dZivz24KPpY7DZRfoPnDSSihpzCcLdR7hhEGppYNgA22iEsjgTJxLoAiKifCbv8GHBMPePBryCBrPH2MZ9CN4",
  "key13": "3jmLJBjDJXZZMpsb3uQfjhGTNQz4jzxda5CAf3S3WKDu9mUok91jmsRPzRx5jBfSmG4CVAT2HNErTwESTvSxKYto",
  "key14": "4VtgAjDnSJboCLF6bkJvALHv6gasNRCLG2tvcavA5evvFfr14hBwc6YyfaB2krfrW1jL79n2Pt5kvzv9MVLDMhbj",
  "key15": "5HD2sB93nKdgbSSwPsS4LjrB3hTCiKZRf5j5xPrmKhRBQNWcPoabHABuavUDAMGQX8dnAjpq94ezeKG8MC9EkQ3N",
  "key16": "2ZMejqzSKHTiBuSoW6XeAAvGzT7LDXJpLXwf6dzKTs5msMbNkrS71SmgbfgcZVLtXRNEpcWBY8ouD37VgdvmY7Lr",
  "key17": "3Rkrd8z9zckRe8oYTFFBefnyVqttPESZxMys3AYeospqi3PvQhe8aRRashbAvKmyaB2jit4YPjqtznvZBW5EjNwU",
  "key18": "3SNrHLizUp9B6D8wHSvk9BSjQwrcz1rxw1AydsbSJ5mgaagCrt1YFzdFj53ANoGvzSmaMKzMtqWnv9hAFumjawp8",
  "key19": "3Lk47H1JKMSKfNjdxLdXMdy4dRA9BYJX5mk7969e4PsSpBE2sorLF1FWBePM5DeH3WpcCQ9dhMrKk7G6DquFUoY2",
  "key20": "5QQzyDibYRhUPCHyMU5Eyu8Gtwouz1iDa4Mgfue3uqw5WzE5ELrmrfFuEGWkrGTtnFXaEK3QTPBCvAP3w3SszLJe",
  "key21": "66dG9R4SdvekqqC5LawvJmcR3McyKiM2JxU5geoiyz1QsUa46NEqqPuL6HC9go3k1oE3ViSGQGqsihpi59d6JuWg",
  "key22": "Cw2FmP3JuP1gUhVgyPDyoLUY94DhDhPPCmJFDGLmus6zCxtbB2hHAa8qG81eWkFzzYD9vVKyJtCaTEjPk3kZa7w",
  "key23": "5th9GMDYgvv3A1LhMSHqm9joMGhDwrJsCUuQqthEFqmmUfNVHCrW1NCbYm15yo7XRGz4s2bcVy6pEXYfxPzucGa",
  "key24": "57nQ4yfdwPrhyJNGie7DRVTRLnqX3NoYRZDMzPNk9YVMAfRonMJsmhnnsY8o5cJm9GbaUkKgAgTSBcv7ds4Rxc4B",
  "key25": "timaMhYfDHFxPG4or27he6GSccfrJYASHZy7ez22RMG8JzFdGsTLBYPSMPbw9Tdt5eK8i2odf51CzpQxwG2SoEb"
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
