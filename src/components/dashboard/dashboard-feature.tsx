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
    "4xuXuD1hWx9VP2yGW8SKvbbp6mUPnqFoKG5taVEGjda8WbNRLWfTJvL2iQ2x11HvMX7dhGshkXedRbBcLCsFswXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T7hXPxmvaccrdXobfLheUDeUEycJidApE14mE1dZBHR8yaZPs4sBeTUZo4E14tQ6TvFWaBPnY6Ja9WZRLvZpce3",
  "key1": "2ct9GnZRaCZdGPEfAgw4YEWeB8NQzyNeTT2WwZNVWjQDuMXGfiVwXnNTHeMJUonCEEa31zYDsFPbjuaZJdhNJui6",
  "key2": "2ZaCRdhwfdJkb35PMC5CxrNbUg4df86x61ygYr4zADvs3vmyRei2F6vUgwSryzy5BvEVyg3Azb3Bfd2RjiycrqWB",
  "key3": "2xRdeAQK5SPTVp8JAeGaRVdxJZKiWxztgEmeSEpHbfdgRBvJu9FftBNKiPMta6njbCdxUnbZCLhiSGutG62G14Ag",
  "key4": "5X1Sofj1D8FdvXypMCJXVzFdZVCGN64MKVSHr6biuZDwudHfzyTLsGv2evWcGQSrL2D8adh1NBk43CyfvWrHhtFM",
  "key5": "3Fe4T7fFqizV3FQDuvdMGmWtpTqMd19hvNZ9fWtVAAv8csZkxt7MFjLeQhBfEWYpS7gALJvcW9vb5bFxjTYQoAoB",
  "key6": "5JT1k3H5qLnnQLMcrZxW8cHBeHB6mR13KzPTpWvSP5StCh3Zpi36EsdahQr4HRFKnVusdBZzWbaXgzwgkJuPsL3r",
  "key7": "4eF91q9rxf9vJPzFMp7BgGNECiUnf6hDoaHvyq99WC7bxQWPzewmV4qh2vTasHiC9TWH7x1g7DfnQDK9Rv2zaTFi",
  "key8": "44kBLkKYGL96xdd6U5URurkyqTRKhkv5o77yKBLYEDqrSbK8mS6hDeLi6ohZ47KXAkxAXzdMGDx4NiYgEJ9QMrbm",
  "key9": "zMYxiKGBh6cgHSyR3v55oTXa8iPFXaBvotVTZQ1N3WBRX99BCrMGAw6TFchfqhHoDgfiNqRJ2Ep2p2CZAqqhyPY",
  "key10": "5JSy21TYWd4RoHYSjFnQ7QrGrD8WbWLoZYtyBaACV862WTFngBNctj7JXHu5umjSRfsqDiEgsX1n7ndnWx7oP7Dg",
  "key11": "5NX2VCNBn6yKVz8dJg1XkQEfLfUtSBddT57oMHYPoP2mDZoce9w1pgF4fk9j16QLtqpke1DMAkVqWo2HKk2TBSxd",
  "key12": "5MgJw3TusmKataWa6B1rYY9tERA4YCccgxiKNcNAgzf3nCXjsbgtSfhpXnZmvbHwgbhC2VPA4qRu2NqtLzcXgUPr",
  "key13": "4g9Hjx9UeEGSvMfxc1ma7SaMAndZfHCb5R8B4jbBcTnUxKUfsauobQjsQ3SuKn9mtiajeT2T98UR3PNJ6Pd9nKEK",
  "key14": "2B7jsQJX7jwVZbXCzNk6nVp5HpPEazbwxCM5pQEW5WNy49SagFCVBXntXyxehRQaUUaAMNhq5XZdbaXeoEyDJDRX",
  "key15": "2sqVPjFnZb8L8GEDhWVt2Jj6jgBuqbvGuVrMTkLrr1FawVXY5r51cyPWv1Ek7bXmxcqQpEmT4nHKRi21xQCsj2Ex",
  "key16": "2Sa3eSU1LGNk7azJ7dLwqosfDZpbkf2hY5YXW9uRBT5HixLfgWicX41dFfYWaE2MtvThCYJ7KtZ4UREf6dPigt2j",
  "key17": "DUjr46MiMBYkS5V5MCSsuoM9Bb4freR69HeoAwNaEHFV2rFbE66wj1E68uCnYT3MNTrWiNPn7s3MT3wLQpeKTvF",
  "key18": "45PWRKev7Zr917LwN8TvBPtEGWCZgKWwnKYZFgMmTWibhyx3z4am4nqXNC9Fum2ekjC8SfQKUDBsMwRSz4jqHEdF",
  "key19": "rQKZgY83qKMsVp16yT8LCAF11fqaeXFf2f9vN54P2LB96nPmsLJGBrzhr7nPYeee8n81PK9XU125tSwXDwjjWEz",
  "key20": "zKoRiunv4xPrrUemRrc7RcxjRGGXUg4KqTLswCcvBeZHRUu3v4Xg9Viie2MqMCpyJsz1kswHRSwKRairt1mYYn8",
  "key21": "eGcc9pMvNtz4GEKrkHmesJh2rktK9YGRPkXF2BgScp7TuSYDRXkVi1HBLt4D565dczfRTS5QrWGvhmXUPzGgcQ3",
  "key22": "M6TYw5uQP3coYFrRn96qfJJ44ZJ7aZgYV54dzogoDH6rzp391A3ojZWPd6hjtJAF5PsN4ZU7XzrfRxnkZCk8mfs",
  "key23": "a61rVMTZzLK9r2gWeaFsDEiNY1u52SY38rJRV4HYzDPk6zfGYiRU1FQnqphuf4WdmjEGyaKaFaWEz9UjksPJLuu",
  "key24": "3czSGimFSYe9rY4G41sJnxe8xE7vwGr7UWEbG2SfLXU2oxdUhizEBP8p23EdTKVVgCgTGUCnf46XarBXcGHS15Cu",
  "key25": "3Y6qer4JNQp4ticTaTefMMWwj8aNZSGt4YYWj8m92M5tS2uykURuk27Rb7D1GE8iUz6bmW2t2vQuSkPk4woeJcT7",
  "key26": "4pMPHJNwQdwYqVbnfwMKasTFTZVg9nQGnssqP58V49nkYXSrWhnxZc8H2E79kZzVvBvc73Xj3kct7ZE7kWxPXxz5",
  "key27": "2k5MXeyZRiTGHyn1wxcfZnDM9s373DyvLfEgm7ez5GTFtYypUgwaaj4WHWBaoUiqMo1fo5GfJmh5PUxKYMXdvx6i",
  "key28": "4JK8ihshH3ovHP7B8Yp7r289B25EqDbTfEQAw9eG5Hqx6NAGx9wQ4mANQMKQeTeHfHVwvqio7zt1KuCnaKiC63mQ",
  "key29": "2HjVXCDUyaN5U5nvJpxh145t4VVJygxUHMWXvq5nARh7Zkpixuuu7Db9HrYpL4MeeuS4pnSfTKvy5JU6JreGLEnp",
  "key30": "4nVMut1s7MeXBNzvxbMBCyZvz6YHVvab8W4o8FHF3wEFShSYYaU4hZ4LZU2MfU9ogroKiKXPMAQk4A7HsYmC28yF",
  "key31": "3MDXK7EiRCdaeHZu1RGS2hg4yncMcseQsjYramcPwe6a9vofRsHCgdwx7Zsjqe3RLdPxvtsfrn6nVZ1zDBZ8v98L",
  "key32": "2KhX6mCmYeqVVRGJ6cfStLeS3NmyHuR5zgHPzvemS6aTfsssxVGVHFU3ZVCwzH5E7oYrJpFhDdgHgbURBGshDTwD",
  "key33": "5tqg81nxn27ZbbkTTN97vb9k1Zi88CdASZRt6nzY3NSrFJnhxYEi5MYq6sEtVSyqFThJ8Pbhzb4Uqtr1G8PG5KLM",
  "key34": "61XsZjPjRu6zrcwXujgpv38AJrApp63kBMJn2mCmAAa8qPn8Kx6gYfcUPqUe7ZhXjPUDh4WCf5crKp5ZHCEsfqv2",
  "key35": "43xCRfGY3mVPKLdJNhqzzyU8M3HR7L8qfFqFyXbcEkHCXqvtKtp6HJsgAQeb9C6wmEVfZ8fNKZfYpRppNV5jfWvo"
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
