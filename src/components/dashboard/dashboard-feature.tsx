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
    "3DmLq4zQtPtEgDBivDtSTsMhJG4dZvfF8aUxj7hqhDVbt9oMo3nugQUzMDwLx7oLnWizRakADmGx6Cm7PaaqSgc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SFhu4GEZeBh5wj48LzWmpAEjYvwwtPJNAuo7u84oW2unH9PvN5ChB9BJHnNkXTFg3M8z3wHWhWXFaRLFwR333v3",
  "key1": "2Y6y5HQctHLV7iatARE3Rq5fG7zQRQL7CRxv4gfDco4E73ViCnxWmdpmPRhWjWP4Sui39pKP2QkhT68peLaVzh6Z",
  "key2": "2nDRXRDwv5S27gFreZMziNCTcs1p26PV1xpmF81r43ZSQZ2oZGc83AcBZrL1ZcDb8tJZkQMG2VVjgGvr74tG4VxG",
  "key3": "4fPEAtypxBiyZHfkTtqHvEShHZ8rhn3kGySPvqP4ECoTYC87Sff8rG4KoU7yLmyBnrKm4AuhnQ5Nb1hkVXh2krz",
  "key4": "5HJoThzDDsHMf5HwRVPuegVTnoQ9adJJe6NmNA76gqAxQPC79cvCd5a9KqZgZjjV7qpA9pXSnciCGW1qiJ8yP91B",
  "key5": "uGZjJokfbqAUMSms5LNLsCybdTqcpgPY8vCv1RaoUQMmYJx6k6Pvc4wgzorXUqZeAFXCvBsem6VBb8pEZ6wfndF",
  "key6": "47jc1QTzuc8KoehXs9gxy5V74iVdG6LBB3w9eM55orGBw1ShZE9FoRgPKq3rMguDGia28ypjm2H5z5D4zRZtxaAT",
  "key7": "2x2wccvjMsvgUSVLzvxTwe4ttZ9YdUQzNE9Ureq1ufXb4zkdJezoVjaaZFWXBAdiFgx1hTdtw7TN3FWUNLBWXFHo",
  "key8": "5ZSawEj9Gymd4rgRS7ud6sB3cFeULqucGpsUiVaGHqGvLHaa3kKFxfnhtS73jadbJBLh3cNydSRLCqmHLX9bxh8j",
  "key9": "bVR8Gy3foaTmWtAtc9Kcokoo91jMZzuoQHYcfdmuPcJWtrLvzRXamkHCbe8bxTmce5VNYea1vuFQdzp7ETKDYdX",
  "key10": "31fyg2pFVYfjYjzKHvDL9zjZCgWWUj6HuGTxT9MngvrwtfZxG1w1FQRaN4arV6LaywtUpAsLu6hX8HMTEdoFQodV",
  "key11": "5fU7a1BVXZSaEqui87o41dtCZurKgrEkYNYkCykx445cMadmfBigPFWvCaSWN1qTQm4NFAJjSVR4RfzBmCEHfoy2",
  "key12": "3o2CNdwWtvyvJAraudbgCFFqgYFpAD1T1iPyzx2x4rrxkQkJ2etxk5FBmCp92BNHZTWBng8WC1r4bAW1qgUrh56C",
  "key13": "5JQjzYSVAEitCqt8ceFqtkpdR7PTkPweHsbiZcBiuUStTMv7CCqFtzoabLVa72rEpGzfbifhVTF9REzuswMGuRNp",
  "key14": "4DT7CZbN84QRDxextixNg7u7LYRkd6fy1Rw9jVTR2px7EXXZ1ax5mSvzda2ktdZFdndqtYAPHVQK3FrR47mzuP8P",
  "key15": "24S6x9yWxUPCGgoNc8E7vzs1tMCiFEQpRVtFWHMfv7NXdcQwhY6U4XaSyumf3yCjkt2SnbnB6kKPpEtAujMsS56p",
  "key16": "5rxyCCH1Vs9oDYrhiWqmXYwQNDiTbCMHU3fqJUrnBh8Pv6XnuwM6xDsr2iRtHuoSXWo1NEydwoFUNo4gSS19HMaQ",
  "key17": "2vayzKp6FAEv8SNkA3fRed2KSM89wNWz4MUMfBNxBm4VVZsDjdmskH8aSmRqd3cZ8whsfh1s6pkgBj3GqaXG7DRW",
  "key18": "4oqPQ8jHJFpZT39JWYME2eJjQKvk1X4bmSDtkwgVeuLG2z6gCgqirjGF7djwGdNgcBtaXdeTBEX57Kwf4fhXaccb",
  "key19": "4T6aXC1TRfwsLKkZ96ZGd9QWc5bZgUXxihJZzVXMPakuXfZ25K55n9F9F53UdSenLDG3eLwcyUD7XsKeNWEFvyzJ",
  "key20": "uFXyME7Cz2wE1o7V5jEQcgY6c2goAL8WxKZDV4EUwGFr1mNogznCXqAx56EJkHVuHK3j2fWFznXZhByMb8iSpc1",
  "key21": "Jx4wdmRaqMCdkkBEQeUBy7T1WtEGfecvE79ShhTFo5FdithxMF6jT1nX9gus6E2fxK2gbeeaXYg9kJRDrzFHHAZ",
  "key22": "2ykAgy8bnBpm4GkNnqKLEQf3EhgZcDGCo1TyXx17whJgX1sJM7ocpvAjbahNTfLJ82rurpU1Bff2rid8yde2Gww8",
  "key23": "5Q3fcuEBeuyu2aoizqAyXDEjbJbu4QLF1gLZVDa1yTLNUghZhhyhaSVwTg9NDemynfu1mXayQqy1B3fDjcydYutk",
  "key24": "7BYdxFpcZQQ1362ypnqU2Mz3zsFkgQtmMBqqHchgqgXnPPxpdUpVwbWqGvWrKRaKcbjrEoCBSwPgs1xPm9sMbY8"
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
