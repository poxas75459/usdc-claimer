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
    "W2c73Ppt24hSJNMtCmkGsDpAWB3JrKzy3uUXLyvSxjiWHonrrm2tKtJq62ga1uGaEDocJeFxc3uQpn9k4nTN76s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yHbPmjMXUGDcUpMfDeQhRnXfhCHjHFJS8nCySt6d7LBdMGWtWjGqFirtjc1WEndAsD9iRWfdG8sgikxZLeY5odm",
  "key1": "29tLMaseomWLcbTeAVJXfNSmpso3iq2K87u1vSsjEkJj95V5PhhahCgzXSnqPzvayYuTZdP6TTgYdgJwwy8QTZNy",
  "key2": "33JZC8HcvNKrNj5r3Ab9pXdeWngWDUMoE4B58Mku4qFXQn9MrvKQcLskiCUV82rUFEC1e7iuWZhbDQWz9oYkWSuA",
  "key3": "MPS8ySnx8QNGGgeq6HaL9qwM1b1x95mS7iXrL6kNDrDSsCyyEhyNZ4FEv6wfSsrPTFb7Bs9PCsYs4RDSKuM1YGb",
  "key4": "3w4CSVTQxwDjSkZmay6NaeB8H8trqEUpM6TSo8TQ5S6vXHrkHgCaGzLu6NdnSdXbjn68iTWZwGT7VFALGWiGjS79",
  "key5": "27NrXbLccaH1qStuMNetkMxXsAGwr1C9bMdKTn2gxUSpsEdMwuXJgf5FnPKetrmqNTkJYJ5pGwyagyajn9cKUKZx",
  "key6": "3sLQRpM3MHkAPxNxHpnsqr4RQd1W1hrAhTpL9QWbAB6enb15a1gZJdiwCoRraimmz5osfg4UyqPi2ePMmz9RhNMZ",
  "key7": "48Dg3EgoK8NQWWXN6t3VcTr9eRbxuMUHoR24AG9oyS3DruuMs6h637SRudHaHHGP4VfvZnxbEhdApw3F4oYtmWAW",
  "key8": "2wsFfH81eR7x6dGTXTjuT9iEyXp8jsjeu2MLcs23yoi1LSEcxVoL3bmrNhszCjKPbbukk6DNDewn1Up26fLATfso",
  "key9": "4QdGrTeuV2XgV6asPG5nk7dAhgvdyw8XNMVypjeVqM62UDEsTqVfBC4YANBp3LDYTMMw4g28MZTAc9i15ikyPbs7",
  "key10": "JvGrKYu8pnzPJYmrmDHtN7buhALz6b36XQqEdnq6sYBv2PhnvheM5yjmyW3Zik6EWLbNrwndux4y9w54RMvwk8n",
  "key11": "34ZUUDm8CaUdL5s5KyorbQSbiPSAKHae75WcmD8PCDVurhvhwjFwtMbRb7d8PJ7Fof2ssVA6f1ABdbnPCzvUxnkB",
  "key12": "5ZASQCQCvhZ47UtutGpm229SLPXAYUpSa318Jqy13ryacDzqqhfSCCwe6SiiSfS3uCWYkwajQ3WgNSq75rvvZVsr",
  "key13": "3KZFs55oPi2CXG8iewP4pAWoWKfREejPSkQoRUouDge3QSrT8FKeKgZx9uCQgacdCwMJwuGcaawb9LQb7RanaVmQ",
  "key14": "5C5XWXvUJAvo7KfT3VLHBRobe8W47zLrTPUWsT3FAZj9izA5BHhgrmJzCcfJ8imV1sv8sXzEqcqR8osJL3M2PL8D",
  "key15": "3tS9PMZKBcPUvJS65dV8PvkiUXkRB7UEggLsiFGLfv5Tk1QR9UfPtUNW1UBTFoZQYW519gbQwjkoDDy71SMkirV2",
  "key16": "2BS2w8ggHu4cHr4wHJ3BU9TnDB9CZMER2bZhrN8cnVhnC3CU5qXBCSemgm2eqPFDx9ZQCUUMv2RBpLpKXygJNiA8",
  "key17": "DQvMUeNa4TyAZc4Y7Xz9s2NfWdbBaN45otWvLwvhPHyHFuWo4r9YKqDNmSfbyEBf1d8jBBimeE4kAPKcfVBGmGf",
  "key18": "4rukQ3yiubNoTzozVbreHdAZvP9K7tA78Mu1GYk2Cp9h7F7Evyth6FiyBAGMcftMWa5pMTGoLWj7QSPnre3jzMa8",
  "key19": "3PCR7fB7ab5asCWm8e6JQRxyet9RdZdehzMhmJ4Utey4uSL1EQLC7qmewKLMQys88dEW7uy3wmzRamTau8uBxuAW",
  "key20": "eFXTzBLjhty33gMkuuQd3Njv51jQFKyHKhcXEGiSborVRMDdiwKnzBa1D776mcLooMMoKeYiV3s1UiuhizQRz5e",
  "key21": "572NDPeLQUsy5uNJZGQE5NLqtV1BK3zunG2mYdjxN9gY2CTE5P7hNHd1VtmfDPL9mrpw81BouzfC2ssYPiGGmcSR",
  "key22": "2MQLWQehUweSBLPZtUhk68Nrtd4fVVSFKdtNtLrz2oBEMwp2wSrwXJYA5rhLCqKG5SCH1jvtbrnA9msbpG16Pxqi",
  "key23": "29wjVVf4h39GKZeqN5mJcvvbsxiKoSHBg2YdGN3f2YBKMnMiyXTx7EuK3A7zRfuogwVqCgfqfRuvCox3PLwVv7w1",
  "key24": "5TMgcu6mVb5zLJHTCvVK7HwD4LKMTPCxm9j1DzYercKrvyaemhvvfPqrRmfa4ZwpU7woGETPM3f5bDqKPrvvUdcm",
  "key25": "5xdBeJTT6m8xsVBLLAz1ozsLVTT6c28s4TuBNwji93thm6d3VSZwBg3DG3ojG3fJhoV6fb6pZaPqasvg4XQ64hVC",
  "key26": "3bhrnEKV7jziyMfr5ntS2ePoa8tGwsrdCezKP4i3pu6LTjjuJZj7hAt8MT8WXtSMGNBtUfJpk8y3cCFy866AL6c4",
  "key27": "2M66rC8FztgQY9ZNBXFQjCHEVZszcrQynBu6dTPfkTWLBc5qztcveKaJpq4RFdVkdU1d9jKz9pqHGfFoJi35Reth",
  "key28": "66F6fq7CrnaZKwYzC2am1zUmUZ9tEcEVUMMhSfDKxMdCfPLKAWxpLRhHnGKj7h1iZx3HduF2QcXCmsxcCfnAE8Zz",
  "key29": "4Qa12n8NTGkH81nkSRKeYMH4gpFhHaEqtAzS4FuHVV2to8aZ9grTt83nXF8MQHuHrQndvGwSLgZ4Atv2sH8vJv6G",
  "key30": "4d6426E1UsRV38Pm4nQc7tY17bxb3vqb8km4B4GFHJpEXWrPtgkkWH48i9EVtqu5NRjjtCSRZyTkjWwKK3dz2wvy",
  "key31": "5Kg1okh7hjBj3Ve2DtNPusbhcYDo9M7FtSxQSn1C5taQYi7NdTKtAWq8PRBFQugyeQ4SX5MUTZvAPaXducAURg7m",
  "key32": "2obxmURbSej7NewtzXSUHA97sRYEmQz2zj1g6mqxKHHV4RhcwCjD4eNomgojW3QYtCT9dbik6rSNuQkE4pbCkepn",
  "key33": "4qgYvrMPQUPYNa2mNtWSsiSkGurGWkypRzx3DRzeKTDXW6xUzEH5HWpRMSoN5q7QovAMt99zthhDWeMrUB2QzVCZ",
  "key34": "5UQ5ZgMAjJ61soCSomMTcof4DwotXn9k7XprfbTLa3CMJwkZrunEe5sPFGoqCaX86dA9DryKG2so3iX4upLFxpEy",
  "key35": "23F5UuRX56NS2q5SWKFrFNxLHewUsGNw58rgYMBWLsfRofuz1dZiLL7U3hP7XpWVM5XmLYPfpMuHNGpk5We7VNiz",
  "key36": "2AB4BFh5e8K9tD19M7W2WHMxJJjanRoLvXRVjwzpsLNfmefGsJvocUbSyNY19ierQ9WMo5kZXmQnLKozSLcNepMr",
  "key37": "5iqMBvgPs5iE7G9YAtYY16Vj8DWEr7Tji37Q6BL4knd6NkA2uKneo4RjSMxa73X3mH2LsHCTdjodoqe4AL39NFqk",
  "key38": "2nTCtMNhg1FBQ7VMnxdXQLHPTpSpqYEQrKUPVW1zbQozi9xiu3R5DrsQzGwxqqS8gWRHsVsfBcpiSmy3jqpC6bQk",
  "key39": "iA5nAT4AB7ouyLx6eojdbv7dNsfPGBmogBf3wJxaTsjQmJ7w2J6QQmC19mCuX1kfFJfnbr1t6Z5VEGpnhKUTxbt",
  "key40": "5PP9TUmb9LRXhMTmcwE7WHtbtr11mMnBkPhtNWfQJWB8qz97vNKy2X1xAZc2c92Qqyd5M815WnJDfiwgqsmwfzPw",
  "key41": "5XNcQfNcGmdH7NLtXFA8p8DfQcsxCFoTyANsy32jnXA494VCzTkGj2qgQdbnyrugbtWRVvWASZaiHHErdY67ggMX",
  "key42": "3WupKsV2EkZY2tovhPZ3ssoYxgqwukH2SBup5WwoBLhAbF1543REYk6pAd9S46YMcXS6yUjuTHyQPZGDENd8Msq6",
  "key43": "5NJCM986B4SAKxJcT4GUyAeos1ePkUMVWWN37ieyinkCpPWCBwtxRhuRoygBYHm13DDKXFv4E3zhtE6ARqP1G9S2",
  "key44": "WG5LvMjNEkysBFuYiQU2z7PkcA1zBVPixpNvNJKUhPQgFMMJV7TCKcMcdBsV5wp8jeaT9Rc1FhQRx59ZRGwNFpd",
  "key45": "51KBqgKs22srGEoBXpUty6sxz1pUQwZaXUvbAreN2rnqaJ19XkZmxsZ1CZcmGJH4DguQ9QA6oj8VG6RMRLurJrxH"
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
