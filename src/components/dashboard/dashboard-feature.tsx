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
    "jR4gwqA15VQdmNejjmLrtLEJ4vkvQ9mmCH5g7jMXt5U5KEJaWWRWju1Mii3dYputC2bwwuZmnucEJMrFAvS9WFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XxPFL3W7bQMWgiozuqvuzCxrZx1YL6Up3uzorAzwwhdT7uek6s64P6xEPcmw32mjD3GLqKGmmxRyT4eqq5YPgyo",
  "key1": "3n6zU58MiXPyLeD7DAm8Pf24ZZ1zgpH2o2My92c2RQDqc3fNFVCZiWGmdEoKvRZsNEFuEQCcKnqXh1WNCERDkA3S",
  "key2": "5NNtdESDsHbeFF92kKJAB2SJt8spEWL9R6YGQNW4twsXnNxdVeGEPP77KfGag9V6imbdcCtdHcmTGY7LDx3sTw9f",
  "key3": "3q2UWy7QobhzbyuvU8J5ViTTHxAxzo6VDEx2hckcyzPJSydfCkmuLpmy5DTZyhWMDdHJ9QggG7v7mdG76G2N7Cmt",
  "key4": "2bro74CUT1D5ix3KUzxhvBEFaMztnGjHvKEgFVLtFALazdHMRSBuE9QA2t7cZRVVVYsqjfWBwLYBDyQRdjGTjWRJ",
  "key5": "4ecoTupiC8TGfsL1zZcg7woNA1Upm2SM3FkgcsapeAeCid35hB6ZuBYUmgeCzi7ZHfqoS5T3Dq3Rv6mj7oToKHpj",
  "key6": "4RbH3avpzcNmoj42614di4vt2eeH9DSomhboPEnbibrQLXRh77EP1D9gq9J56z9zz6g74diotTcyNt4NhTZcnBeC",
  "key7": "2UCjLk9RqPniuV86pLYLSPyVRTRcjN1gc328XfmCDDh6q5UheAFMTCgvcsu4rWvYmkskYgaAGXgveMzXrLuhJ8SX",
  "key8": "2fUSHW9DZmPLsPEXapAWebZBkP917bWq9euSoaogujNVMCuBMwDq5C8G14bf3KLeVgeynWAS2jKRLgrPevnQLAtq",
  "key9": "2T4rJPiEEWUewLfgFP61hSNCiZkcALLw2mUHr8D24RtaoCSrwxKvwhYSzbU16mQePPTKX9ZMKdUX5tvVaPu5wr5A",
  "key10": "4b4uKFuzfvcASriysEc7bLYRgCNW1BuzuZNyzh6NvtGvMVjdmUnrAbL4GUymTi5ACxxmrTqgcCdu6m1zhcLjqEYY",
  "key11": "KdUX6U8jM4pHrrTza7TQ7HGm97QFVcfpAsA6fvSRBGrjinYWFCAm6coV6owT1DvgVS5bDbcPt2hRmb6JbDxxcpg",
  "key12": "5tJriLv4w25TpFd9b3iFPfHKc2UxFPavyFinRacTrNj1rzJ7QxZWxfxfrSz7yp8SmqdA6XwgySvMmdCnSjbWdQUB",
  "key13": "QuisXDpBooYsGXTzgtN52jRPHE76AeeQrqYdJfVvNc1Pf3KwMBtmCEHuuJFGpSeE77qRz6WErooqJ27316EUUg4",
  "key14": "5q22ci6YgyzfrdEveBYQe53FZECNPMTB1fFN9QkmwqnSXXF1Vt7ePvxf2wXzp5VQ64iampMDiVGbTFAvVQtvWKgk",
  "key15": "3FueKUjgFnQcc8a44ypVwSRuWr17Nf981axb8HQCMy1SMbBCwuSfQGHLgSiPk5yfKWwR5UgiKLDCTXSi71LJxpaP",
  "key16": "3XdYCXeiSStsynoD1xi8aZNhAUHXPgRfHzB7gNX3crSMBKyhyMTBgaF6xJwrz2GAQ1zW26Ux3V7Nmq9rhrW3H7Lk",
  "key17": "4rtBZ6FTWikyotRsnVmpzK8c7CkapMKezr9jmyfGGKm6EYy26VVzTH717higyZT3EB5G6R84G8QzL9MN8EaLdEU7",
  "key18": "Xj8eFbb8y66ht8SHSxDN3QhZsoxTmLnJD3xrh1U6y1HmGACCyoWLg2rSycQxJG4XWXT9dET3uaVEXJEvSP6zk9C",
  "key19": "3qzkRa2CwyAr9e9fqcvzmA8uFyvBQ35TWApQYuZLT2143iRg812ZufkM5MJSbVrEDj7wdT9AWP1HaReKh4xVRVr1",
  "key20": "fGUp5NTd4gejdku1jv3Dm6bcy19w8JXqhxPuH8UgKxkkcEdC6NJcJuQCd5nbCZPQ9ZfTgTNbUEVDeKU3ShqeGqi",
  "key21": "2At8fNWK71QT2kKRF29EGQa8AJMELD3vhfwixhgeEHDpJNFYM38kLfE82eoE3e3JtgEcDC4nF7gc76KdZq2knNHo",
  "key22": "3QYGLSVifBYuFmfZRQbNPxXzZtgQYBVQC8j6caE2sMGj48y1NCiC4eRL1a2atFVx6d6HPZU2emoobiobCxiEZnME",
  "key23": "5buy2WVEtsbk5CAHLmbWYvrDpRTWyymC9EKTzGz9s783XxHYB9Uz7Qt6NcAh5PatBDwZSBWRJ7N5vE5i7LurCb8R",
  "key24": "5qLiv8DhgQoKD76dDWJoozNWHhEgNkBuJgg61JJAx18EaKeUS4cihDihmsJTojaE7aDsBaudouZsmBPLAbPzn74U",
  "key25": "4eKdVGz1VLn1eiPucHNj7QUJ9wMaKEsa8KSJh2c261xXbtCsEHbeT9JpwgSmmDWw2CQTppakZaPN9douZS1TRZaW",
  "key26": "2shx9GzsJezmWSXNphLSWazYb8NCv9PhG7rzSXmsANcrWuoYEDR9FhLg2QnYB9TodVbRr8FDYKvFuyF1d5rjAmX5"
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
