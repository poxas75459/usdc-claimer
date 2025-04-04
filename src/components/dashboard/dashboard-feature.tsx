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
    "62otYwTvEFHQvTVgDmWcYLpGwCn5q45Snk4EMXjtyZKyfevGf2tLjhQur8si7wt6cSjuHWQggbXfritG6XJfpcyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S6BSsM6oHzYvkzseT3wtW6TTcmVDJP7vy2uX2FVYZPukkPYAYpaffsGseN1mgcfxzGuhhHMpAmWnzpqibHUogRz",
  "key1": "4ByN5qRva6kSnx7xaR8XEZ1Z3wgPPVVh57YyFBddgUocitBDkAMz4xuZCkZXn9WxavVNCsShUULULe5hVP8rHSbJ",
  "key2": "5WCPFcRy3QkpbvSj2YmRzkTYCRt1aMrxNFJY7FRwAmZPAH36NhoZ5JjK6vwBW4SHEFe3mfnQPQYFiKbcs2vgMHs6",
  "key3": "2x3HuNFejrGAkDH3SfYkoC7hV6uKLL5VB6CM41EurqxC5wbwkXHhBy53dWdzjoGmSzgueQZKczU3VJ3ZdhNHTB5r",
  "key4": "2nA24vnbuCMyt1THnQuysWLYcEyK5CHiZmtdyHmgnrpxx729cXzs4zVhbaYvaSttNMmSrcc37Nm88JskcsVNJiL",
  "key5": "Lf3RjPbF8pk1LcsgaYEYUsCKb9VqGBWvx9u9VHs65EwyE7ATudpG5eHrMag9kbK3xkMV26xyWwQdu1GhMVieceh",
  "key6": "4Q5DKgq1StxQLSuZBXSsTSAgea4cHAJZeL7p7bkv9JQDnQsdgxAXXJxLBPYHEk2fxVyVUVaEnfrtc6t6tDkdy9TR",
  "key7": "5MAmAhW9QRX2D8NrL73bbNc6Mmn6agNVjhhnRadKMP3R9nabGhnXdxyKzYXXEdTmEbHnpRtkXcm1iqk43YEDUWdj",
  "key8": "5aL1rwt3UhSQnfFBxXwUTkefTyx2N9j9F4bABXpLj8qNYYe3jfJGZcmG2hoERE7rnuw5gRNTvGahg9M2ocEoFXWk",
  "key9": "4x5guWBT8D1AdRUE7JXdcMP12opp67FebqkRXjkRsmLwvRQWfa3nvNUjJiNUm8E3T1An7aNxKa4HoKmhzPHum6Dr",
  "key10": "5Xx8VetxWRU3dK6kBPyW83SZaKpnEt9o2fHnEnS7RRjdDcDiokQHZ8VgKeB52mrcxZkrbtaWQ4znU5RhrpauLEqA",
  "key11": "rbdQXy2dQd55tT3W9xsmyTh7oAwPTFESNtVKa2a1PdpjmKASXepvwMzQc5TAnBBQzFNraDGnKu2fgN7PenjVmgW",
  "key12": "67jcSAr5mthLsVBhG2ehYu8QgB5yzfCcvoH68mvixMvv5EkEEjQwPJXXA75zpjkUzrE5AdywztstHfPoyAUPaCJY",
  "key13": "2UnY2D6PsAggAVzVeUXtnVeULYXbudb2j3zuZsgCh4Cfx97BcZJNDGVmRdS82vWskonW1GXNocRZvNMkWsh8uU9R",
  "key14": "3aZHMCRoo6rxERdLuvFRpHNzhxQBNU8aEuTyzSpfoxUZCgo75szzwEEuNuMjy96i6Th3H7GC3Tw6G562m3FjfuWg",
  "key15": "4ErFhoYRryWoqZhtB6B8BohhMmo3nT6A6E8hcQnHxjKuAQLPYv7TeBMLFPQndGJEeqqZTfUugGUckvn6Ahv1VeXq",
  "key16": "dkxfwdeSSyT2gSf9A8E2WxAHPsyq3JJ8fKdZSzbpc4za9jErZwHURpdHbS3P4azvWn326Ma9PP63FubDDnqLdgS",
  "key17": "5dQArkZQjxFQfoh8DGBQxT34yihdqueLRM9ixXAkvuVjQVsdPdrkw6FuL3e1gfTMZXrYwtpKMJGbEyaV64ukXx3K",
  "key18": "3HNS4j6j2Dn3ZmMwtj8jRp5L4B439YC9eZrYrbKm7zgddRRvFJaDJ3XJJ4r56aUckkE1M2ZP5apNA1TJVwCGRZsK",
  "key19": "31UVauwjgJwz7ke3RNz4WpSLC6AE3d7Gjefx5pGMqEL8U5EdrsHSvkLHRZCjdwgjsAJaUbufLcHy1uCTeGfh47nK",
  "key20": "2ExxdhRYMR64yneZ82nLpZAiXtvdY9Ku4LY32QNAeZGjZ5HCMG4c1aZB7buUCHz8zsLTG3JJexcJsiZfVmxgMwyT",
  "key21": "2WdiLhAmXEgB4F3kGUw8vYtkguXGuhMpfd5VBe7bVseVM68b8J2CU7ykMG4yXwtrVm3JYaYvVZgcUBhgb8YJVHz1",
  "key22": "2rp2gqnqV4sBoHxan9b8ZYTpQAViu8Q8mvDjfNjUhfaJL2GhrBQxDS2e84XtPfnm9ctcP5LWdnaGFTDd3gCxnbu8",
  "key23": "5PtJNw5y1AR6cNXYty7JEcNYRjvZbd2QjQrXeykXxNvQTHJ5i4PRGEX1ya588uWYKTFwtjWa3HjvRi1PyacNNyqL",
  "key24": "2pEiFNyFhbhgbV8aTxDDqyHEoskDSChPAF3ZpMTqSHfu4j31G9nPojcFfndiEKb8FWDL81PWeGKKdTgJDTqu9n3s",
  "key25": "5Hv4wEyT5MSw8rYKxqyJUEN8jahUfaAyuHQe3WvXTQ1gXctg2kKG1esYZeDkXw8Qn2a1mHMBes6hAezTUnCF2MdN",
  "key26": "5XXiVpREbqXQBzpFmpzrt2Nd4CNHtxFM7v1hKssvCTh2ZBLaQrzSBbsDspmdfpp23jdKhTwraWeFjtPPnEzRxeit"
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
