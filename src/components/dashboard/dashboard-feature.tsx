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
    "5bbi8KL77VMceZawWGey2UzDSCd816tBaGCWG739SNB1ZYkJcfbJLPNVrwWj8at722FtKfnQCChn9FBkXqyVuMYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21DWszzfBASFScbriB9J7GkGmTGi2DA6N7y1fJMuJQN4yjanTGhJr1x9DAgd6Zp3eeqqHRhTkZfumZtEd9MNqjMb",
  "key1": "2b6DxZpNP41HqWdtybi5uGXWeTPTyo8yEvzfSvcJpr4tFAdU1tSiw47bhUhdeRuNQUHQ6Bjw1RnPxTZLS3QNdNiB",
  "key2": "4P2WYu4Lmo9NixGgVd3oFZoLUcnK6vX6MKuWLoYUKEoyvVVf6BTDEdK8rA5o5jMuQdrCC4pfv2QMENwfmrKtp8Bb",
  "key3": "5nr8PEydzQQBE5zH9w5hKX2nTayrAbp2UffpCVxPfVzUbuKJfKc3RwMbdhMhSesGDcJvToq4rxeY4Xfd2MeMDoyy",
  "key4": "4bpGdmzs99SsKmP3t99zTt6oEWewCiQqDwuHsJJcm5oR4H5hJzaGgbV7ChaapMLBtdDxFdiVD5c53fMeXZDdcnQL",
  "key5": "25X3XHQmZCUnbf9KsE3RRn9t4fYKZCVhvDgXThaFL43d3NdwySn3ATkdMDasL9VknhCggsJoTB4CAvrzNqg3akpS",
  "key6": "3nmwoMW3V3cBXP85mSCvskuw743hFo8Rd23g8KSL7EGsHSijkd9nt557s2FSXWqemHzpbde1H3A9YXDFKoVvD74M",
  "key7": "5oHNJ4jUmiLg2CBjRRKR96tydv6R2mV4bNK6dyNTKxL7cw4YfLriPEj9Gs8P5zeKSRfD5Ws2cEgCZ1wYuwDhZ2fn",
  "key8": "2R5QxQTTyeX9ztTESCCZ14kb1gJMjDANYn2rNCESLnwngXJiCixsvwge3NC29sVGdVWDD5qRBoFn4DhjccsnuVRj",
  "key9": "3cvUofhEBDJpKSyqnNYcXPxSgB4ovMNqBmAFAejteug7TE8qT12QVDCG8fe11PUdoBnSVTeUehk4XDH78Ayop1Ti",
  "key10": "2HKxHxfnm2BYbeqfLQwXmTCmwhrhsdPLGFXZarniqyC7fUzeDJ5xJD1xNrkSnHgPpwYoDhnoXs8Cg4jU7Cv4NLMA",
  "key11": "5WXPMH9sf81TLAkFKexoGYSxsKB9EHx6ziXpsBFZR1E3JHHD4KvUB2KvNwwz2MWCcToy54zauKReconAjndPua8f",
  "key12": "5gUXLDgbZtrLgbiVV8x8oakaGVXw1nuhDRUfMAd1cuGASWAjMdq8QrF25RLmWHtgt1QQnpp5WTJyBAyuZTqfNqQ3",
  "key13": "2LsHWyi6LUNi7s2JH3TkqHHdjZTvi2qPQ5fHP5t3eSdLLvWAKfVhL2wE2ojFLpfwFYufBcrLp2Wd1tjdp33KT6LK",
  "key14": "puYv6mUBTFXpJ3zrfgS53eXN2DJa2e7rh7VeYev4aGdu4HjF97gGXHLpkFTEiLnizHV2nMXFz5CcsDhH8wAkCjg",
  "key15": "2nSnkRvYo5u4r91XwuRTaFZXTfFqM2f5hLyFp2J4cHXyPGRHjbfhw3E4pxNSnDdTAEhqxECTAKfGqYLxacRi66xG",
  "key16": "3F87szrv6shrsYn9K2hmUvMyaDzZWExyJvtXCmvbjiYgxX4zW3SXH33rcVS92MDWsoEFipzV55PVnotcJz2jh41i",
  "key17": "4wxrj8ArNWnBy8gLiZPYBv8oSxGjvD8vKevXUES9Dre5zJLTXNBxunfrFtWzJNEeZTb5nu8i9mNpz2eRDLzkpu1D",
  "key18": "3MbTCsqGHqx2BMk1hS2EHs9gZ7gq1svsVnW68RCihjCC55TEhAZCNkh8VsxQSuFoijb16Q7Nz6y7Y91FQsXuCyaB",
  "key19": "2we9aycWxd81KYdNxFjPdvdPzLq9QXvh29A4ePBgRNANqFJ4t7Rqohz6Jzkgf8L6B2m8uYgJrTkLcA7fBAEVNHap",
  "key20": "3TE8G7g2YS6pPBrE3mnGJryR5NqB6WZVZFxEhBBQVALf3Vwk1rHyud4VGHAykca9Ut7QUmKnHrRBMnRS8pKZCieB",
  "key21": "RX3W3zA2EXAZgtG7zSocM6H8NCR8mSWbXZkv4DnVAB68LtYfHUuaYj9hu76HEK7GZzAa8o5CVE7rRkZhH51UaLR",
  "key22": "4Xxvkp4WCT4NaxSqafLYqn6Y3R6Uu4RXgxB46HDsKBTKU92D5YADYjV6EZSpU6wWsW44DbKZB2Zk63sJdTDkBfQY",
  "key23": "5nXcjGXfnm8EZ6yzYyvALSL9LFDHkuKtdFeceyeVQGuHDUJjQtQynUv73fqt3G1Z74QC3uqHHAYHBfLHeXyegDRU",
  "key24": "3R9E4wqHnPQQyDBp9Ta55g4SUxHuZDhJEvHNfN7K4oPmVSWHZK63ed8yUPB9U61Rh7Au9s7yb7WMPwnbSK3SvEH5"
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
