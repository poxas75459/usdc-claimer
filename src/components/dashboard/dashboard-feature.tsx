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
    "5vvSjgy77b8cWTFyMaJoYVFmEa3D8Fe26CyyUPatcmgihFGVinC8aNvD7txVu7xrcTg1F8xfqoq3FrbJATKWHCoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nRnfmGgkNEvLhpdvGaixQnCJ8RbevP9B3VmA3S3PaMTEehGxyu2isxucHwZ4eJCDuk3P9eGMQ8iz24Am8WynAL9",
  "key1": "65JNmBeKG6G5spKfjvqxeZ1mD9xuxgnqiS7NnYHLLeSNc9Zv8svkDBmikEZ8YCMtxPVSJMTnqohj3ZufLCRVuY1L",
  "key2": "iiP1RLkoMxT872yw8ZzBprJthtE473W3ctJ3qP9sYktPNq4vR1qoEFboQTAcimkwVfMkU3aUnvxPwKcuJufNzWk",
  "key3": "erLDH9JLLH7tkhSaYDfakPFzyV4kxpdUZ3oJ3jeL4bn925zkfnU8EfUwKzXi7mocJyfFHHyrQRLvLBciDC26jbG",
  "key4": "3wYQAZf7WKsh6LHHJrLZRNtEtRKgxPqhrECcSLpx6Tx2jj7s6MEscZyJqw2opozovPSxkcQNHJioGePXXwCMrmTs",
  "key5": "46EQqE5kz3cR2W3Do3GZGNKGMZbkcPAcXXS9seRtzktWUD7Na4z6msK84AjbE1HZN9FD7Rd9a8jxktSopndZQ51C",
  "key6": "64xeq1DXYSSrt2oMo8PNRz79mgzcRShLk3ieQgYc2nmxKtJ9xMQ3YKAUUv8tmRgSuPLoMJZ6kZJRidmXbwqzC2Lf",
  "key7": "3gDwTHDxpVChjmuNfBDCeMhUCBqhMkgRvRBAMcBUG8q9R6GKZ53B7iRpErg4LjjmFfdWGvbkmQUsxr4vDzRGR46y",
  "key8": "5JVRf2nmiP16b91xDe9ER2KwTMcQWvrW856QnCiAhNy3n1oi1Lz3S3yGJHYAMEZ7JxioquGM9i2BhqxnYhDW5QZa",
  "key9": "3EBXrjEA8sqUSQ5KXGqLfn9RUmYhReNRrsq75j6iy4xQ5pv944HPr8NrvTg9uWuLxsPYVNPsRZvwA2y4GqGq1cps",
  "key10": "3BsY9UTKpQufsTQ578ASrLGNUsjojt1Sf8nZpzNnScBmKjcSR5ibLfngKysUXmwPHujLHeL8jahrnGKKy6bBM9re",
  "key11": "eC3rMQBR728EJ1Cz5hLkRbpp9vPH2mSM7NZGHtpx15XtoMh66Vstb41DMcbHcd1vF7sEo4DJ3vZfcZi55PPnivz",
  "key12": "2PsoVwNXbo3RqLMRbH7t54eQr5W2uD1Gbexz9gNr2eB8rKg7vmARF3zKLcKfqXria5iPf1pFrx4SuPCq5z3r36LX",
  "key13": "2e5HJRDF8X2Pf2hcUyjVpG1WaZ3jmVisxesdbMxKVfPPnpHayyigPaJfjYPSRBipLjjzLx25f2VoruP7vEboQcg9",
  "key14": "dbrGYTV7BrnhE7p5oAPVdj9HCQ5MDYY64wn2J7yfKh5wLHobeZe1QWKSbPKWySztPyiS3kDuH2yohYPkUpaRHx2",
  "key15": "k3a9X7HJjMaBHstzgNrMy9X7DcZLkTVmmYGGUecdevfbgQToSQJQXw2AoSbRPchJKHS7wszEdvuiCmpeDzKuELg",
  "key16": "5TVHuVZqbYXQsVsNVknrqD1GEG5BdT5UecNLCfgS5Sp4VzcSsE6V1XSzqbTwBDZRJ6bYAZgNDacrNFu1pyMzqxXS",
  "key17": "2kRsUwdnEhaugxd5C7qWDkkqRLtfgJdui2CnaXnxt8JDEnLTPBJUZL5dEnSxTbUk5QqGCu91Xr7tZRjD6ePyhUS7",
  "key18": "qntjtwjHDWAKiJuGQATJiNo1au1iTJNYSVtPRigGh9BgMkQA5jhmvnLBZUzk2UFvwspDJDz2F52mdDYpVsPQkPZ",
  "key19": "5GCwWAkkLY2Yv2MSRJmierY22bFqRw3XQ84G8pDhmesRVvaA7qXbPmxrzoLG7QGwyh9zRWjeasBRrmHyaYzqAj19",
  "key20": "5m6NVgSpFhvqYFiGaW3Rxf5E8FvGGbPDcF9GU88c33p2KtH9Ucp4iS3e1SVhseVkzySgjDhuGgGw2vXYZnJ9shpi",
  "key21": "3kBxtNQYES7o9JunPjb53JvwgKU6CLeMEHKPJDUMPGGnJWZP48zSrJ4tYTuJeaV6Q4kg29qRZBNXypNg9gZuKzrp",
  "key22": "4JFmVsuHWGiMAoYyt2P5vJiYdscxUz1KZH8sH6Wwg8qNJvpKDCTjfajGpMR5Zcsxw9LQnRR5TYLMthUnT6K7TkkL",
  "key23": "YzeHwQhpyrbhtkSmmiKjDXi75QtkmDhKzuWZQ8UYWZu9D1ebigntQNptBP7hFErQ8Smfg8LNeN9VwDAjTxfqQQK",
  "key24": "27EXbf4x7jLye4uocwuMPo2chLJZQJwkxW6aqZTjV8192xkeeGyrGAuxS758KHMeZUD7oWdB3DfCp55ujQ9Uecta",
  "key25": "4PaBLso8LQVbbW641HdFRfLdaN5SjedUmMeo6wMxcqwGgH4DitUZuXyetFzSr9tDvFS5SxMenH2GzMce24AMs7z",
  "key26": "29ddMJo3FUNivTz4vY4TbRjheQrepkHttbWDJgK9QCn9qBL4y2bGHYRTjHc9TduhzRpZFD9ry3drvff1cYZEHLzV",
  "key27": "4dV1inGzWEas1N9x9w86kraVjbvqMybUK2iSU7ZPYqdw8ixVPV1us2QK19CzjrqNW7bkE2DGeU6DbfiojCcKFnGz"
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
